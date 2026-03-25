const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const ANALYTICS_URL = 'https://bwdkbuqjhaojsruoixjg.supabase.co'
const ANALYTICS_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZGtidXFqaGFvanNydW9peGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTk5ODksImV4cCI6MjA4OTUzNTk4OX0.i0T2YoefyRYtN2YnCjSNfeJhnQlvFS2ON6pEbSR2hMg'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const serviceKey = Deno.env.get('ANALYTICS_SERVICE_ROLE_KEY')
    const apiKey = serviceKey || ANALYTICS_ANON_KEY

    const { id, email, created_at, last_sign_in_at } = await req.json()

    // Use direct REST API call to bypass any client-side issues
    const response = await fetch(`${ANALYTICS_URL}/rest/v1/profiles?on_conflict=id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify({ id, email, created_at, last_sign_in_at }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Analytics upsert failed:', response.status, errorBody)
      return new Response(JSON.stringify({ error: errorBody }), {
        status: response.status,
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
