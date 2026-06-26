import { supabase } from '@/integrations/supabase/client';

async function invokeAnalytics(body: Record<string, unknown>) {
  try {
    await supabase.functions.invoke('analytics-track', { body });
  } catch (e) {
    console.error('analytics invoke failed:', e);
  }
}

export async function trackInteraction(persona: string, _userId?: string | null, queryText?: string | null) {
  await invokeAnalytics({ kind: 'interaction', persona, query_text: queryText ?? null });
}

export async function trackPageView(page: string, city?: string | null, country?: string | null) {
  await invokeAnalytics({ kind: 'page_view', page, city: city ?? null, country: country ?? null });
}

export async function syncAnalyticsProfile(user: { id: string; email?: string | null; created_at?: string }) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    if (!token) return;

    const { error } = await supabase.functions.invoke('analytics-profile-sync', {
      headers: { Authorization: `Bearer ${token}` },
      body: {
        id: user.id,
        email: user.email ?? null,
        created_at: user.created_at ?? new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
      },
    });
    if (error) console.error('analytics syncProfile failed:', error);
  } catch (e) {
    console.error('analytics syncProfile failed:', e);
  }
}
