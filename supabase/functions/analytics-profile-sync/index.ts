import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const ANALYTICS_URL = 'https://bwdkbuqjhaojsruoixjg.supabase.co'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const analyticsKey = Deno.env.get('ANALYTICS_SERVICE_ROLE_KEY')
    if (!analyticsKey) {
      console.error('ANALYTICS_SERVICE_ROLE_KEY not found in env')
      return new Response(JSON.stringify({ error: 'Analytics key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    console.log('Analytics key length:', analyticsKey.length, 'starts with:', analyticsKey.substring(0, 10))

    const { id, email, created_at, last_sign_in_at } = await req.json()
    console.log('Upserting profile:', { id, email })

    const analytics = createClient(ANALYTICS_URL, analyticsKey)

    const { error } = await analytics.from('profiles').upsert({
      id,
      email,
      created_at,
      last_sign_in_at,
    }, { onConflict: 'id' })

    if (error) {
      console.error('Upsert error:', error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    console.log('Profile synced successfully')
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
