import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get user from JWT
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No auth' }), { status: 401, headers: corsHeaders })
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Verify user
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders })
    }

    // Get client IP from request headers
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown'

    // Server-side geo lookup (no CORS issues)
    let city: string | null = null
    let country: string | null = null
    let latitude: number | null = null
    let longitude: number | null = null

    try {
      const geoRes = await fetch(`https://ipwho.is/${clientIp}`)
      if (geoRes.ok) {
        const geo = await geoRes.json()
        if (geo.success !== false) {
          city = geo.city ?? null
          country = geo.country ?? null
          latitude = geo.latitude ?? null
          longitude = geo.longitude ?? null
        }
      }
    } catch {
      // Try fallback
      try {
        const geoRes2 = await fetch(`https://ipapi.co/${clientIp}/json/`)
        if (geoRes2.ok) {
          const geo = await geoRes2.json()
          city = geo.city ?? null
          country = geo.country_name ?? null
          latitude = geo.latitude ?? null
          longitude = geo.longitude ?? null
        }
      } catch {
        // Both failed
      }
    }

    if (city) {
      const { error } = await supabase.from('profiles').update({
        city,
        country,
        latitude,
        longitude,
      }).eq('id', user.id)

      if (error) {
        console.error('Profile update failed:', error)
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: corsHeaders })
      }
    }

    return new Response(JSON.stringify({ city, country, latitude, longitude }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('geo-lookup error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: corsHeaders })
  }
})
