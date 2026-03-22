import { createClient } from '@supabase/supabase-js';

const analyticsClient = createClient(
  'https://bwdkbuqjhaojsruoixjg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZGtidXFqaGFvanNydW9peGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTk5ODksImV4cCI6MjA4OTUzNTk4OX0.i0T2YoefyRYtN2YnCjSNfeJhnQlvFS2ON6pEbSR2hMg'
);

export async function trackInteraction(persona: string) {
  try {
    await analyticsClient.rpc('track_interaction', { _persona: persona });
  } catch (e) {
    console.error('analytics trackInteraction failed:', e);
  }
}

export async function trackPageView(page: string) {
  try {
    await analyticsClient.rpc('track_page_view', { _page: page });
  } catch (e) {
    console.error('analytics trackPageView failed:', e);
  }
}
