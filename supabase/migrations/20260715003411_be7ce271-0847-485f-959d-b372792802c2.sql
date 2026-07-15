GRANT EXECUTE ON FUNCTION public.track_page_view(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.track_page_view(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.track_interaction(text) TO anon, authenticated;