-- Revoke EXECUTE on SECURITY DEFINER functions that should never be called directly by clients.
-- Trigger-only functions don't need EXECUTE privilege for their triggers to fire.

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- check_premium_access is only invoked server-side (edge functions w/ service_role)
REVOKE EXECUTE ON FUNCTION public.check_premium_access(text) FROM PUBLIC, anon, authenticated;

-- has_role is used inside RLS policies; revoke from anon (anon never has roles) but keep for authenticated
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;

-- track_page_view / track_interaction MUST remain callable by anon + authenticated (client-side analytics RPCs).
-- No change to those.
