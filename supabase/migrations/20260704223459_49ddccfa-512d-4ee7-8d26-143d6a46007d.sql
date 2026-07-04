
-- Drop overly-permissive INSERT policies (always-true WITH CHECK)
DROP POLICY IF EXISTS "Anyone can insert page views" ON public.page_views;
DROP POLICY IF EXISTS "Anyone can insert interactions" ON public.interactions;

-- Revoke EXECUTE on SECURITY DEFINER helpers from anon/authenticated/public.
-- These are invoked only by trusted edge functions via the service role.
REVOKE ALL ON FUNCTION public.track_interaction(text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.track_page_view(text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.track_page_view(text, text, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.check_premium_access(text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- has_role must remain callable by authenticated users because RLS policies reference it.
-- Tighten by removing anon/public execute; keep authenticated + service_role.
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
