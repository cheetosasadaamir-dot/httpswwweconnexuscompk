import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => ({}));
    const { kind, persona, page, query_text, city, country } = body ?? {};

    let userId: string | null = null;
    const authHeader = req.headers.get('Authorization');
    if (authHeader?.startsWith('Bearer ')) {
      try {
        const mainSupabase = createClient(
          Deno.env.get('SUPABASE_URL')!,
          Deno.env.get('SUPABASE_ANON_KEY')!,
          { global: { headers: { Authorization: authHeader } } }
        );
        const token = authHeader.replace('Bearer ', '');
        const { data } = await mainSupabase.auth.getClaims(token);
        userId = data?.claims?.sub ?? null;
      } catch (_) {
        userId = null;
      }
    }

    const serviceKey = Deno.env.get('ANALYTICS_SERVICE_ROLE_KEY');
    const analyticsUrl = Deno.env.get('ANALYTICS_SUPABASE_URL');
    if (!serviceKey || !analyticsUrl) {
      return new Response(JSON.stringify({ success: false, error: 'analytics not configured' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const admin = createClient(analyticsUrl, serviceKey);

    if (kind === 'interaction') {
      const trimmed = (query_text ?? '').toString().trim();
      const { error } = await admin.rpc('track_interaction', {
        _persona: persona,
        _user_id: userId,
        _query_text: trimmed.length > 0 ? trimmed.slice(0, 4000) : null,
      });
      if (error) console.error('track_interaction failed:', error.message);
    } else if (kind === 'page_view') {
      const { error } = await admin.rpc('track_page_view', {
        _page: page,
        _city: city ?? null,
        _country: country ?? null,
      });
      if (error) console.error('track_page_view failed:', error.message);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('analytics-track error:', err);
    return new Response(JSON.stringify({ success: false }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
