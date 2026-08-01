REVOKE EXECUTE ON FUNCTION public.track_page_view(text) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.track_page_view(text, text, text) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.track_interaction(text) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.check_premium_access(text) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, PUBLIC;