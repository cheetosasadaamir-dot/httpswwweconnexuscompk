import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // 1. Validate caller's JWT against the MAIN site
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const mainSupabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    )

    const token = authHeader.replace('Bearer ', '')
    const { data: claimsData, error: claimsError } = await mainSupabase.auth.getClaims(token)
    if (claimsError || !claimsData?.claims) {
      console.error('JWT validation failed:', claimsError)
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const userId = claimsData.claims.sub
    const userEmail = claimsData.claims.email

    // 2. Read optional body data
    const body = await req.json().catch(() => ({}))
    const created_at = body.created_at || new Date().toISOString()
    const last_sign_in_at = body.last_sign_in_at || new Date().toISOString()

    // 3. Create admin client for the ANALYTICS project
    const analyticsServiceKey = Deno.env.get('ANALYTICS_SERVICE_ROLE_KEY')
    if (!analyticsServiceKey) {
      console.error('ANALYTICS_SERVICE_ROLE_KEY not set')
      return new Response(JSON.stringify({ error: 'Server config error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const ANALYTICS_URL = 'https://bwdkbuqjhaojsruoixjg.supabase.co'
    const analyticsAdmin = createClient(ANALYTICS_URL, analyticsServiceKey)

    // 4. Upsert into analytics profiles
    const { error: upsertError } = await analyticsAdmin
      .from('profiles')
      .upsert(
        {
          id: userId,
          email: userEmail ?? body.email ?? null,
          created_at,
          last_sign_in_at,
        },
        { onConflict: 'id' }
      )

    if (upsertError) {
      console.error('Analytics upsert failed:', upsertError)
      return new Response(JSON.stringify({ error: upsertError.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Unexpected error:', err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
