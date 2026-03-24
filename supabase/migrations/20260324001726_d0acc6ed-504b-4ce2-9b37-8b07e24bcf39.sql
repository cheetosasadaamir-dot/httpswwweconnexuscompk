CREATE OR REPLACE FUNCTION public.track_page_view(_page text, _city text DEFAULT NULL, _country text DEFAULT NULL)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.page_views (page, user_id)
  VALUES (_page, auth.uid());
END;
$$;