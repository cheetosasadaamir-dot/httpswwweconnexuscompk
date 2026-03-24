const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                     req.headers.get('cf-connecting-ip') ||
                     'unknown'

    let city: string | null = null
    let country: string | null = null

    try {
      const geoRes = await fetch(`https://ipwho.is/${clientIp}`)
      if (geoRes.ok) {
        const geo = await geoRes.json()
        if (geo.success !== false) {
          city = geo.city ?? null
          country = geo.country ?? null
        }
      }
    } catch {
      try {
        const geoRes2 = await fetch(`https://ipapi.co/${clientIp}/json/`)
        if (geoRes2.ok) {
          const geo = await geoRes2.json()
          city = geo.city ?? null
          country = geo.country_name ?? null
        }
      } catch {
        // Both failed
      }
    }

    return new Response(JSON.stringify({ city, country }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ city: null, country: null }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
