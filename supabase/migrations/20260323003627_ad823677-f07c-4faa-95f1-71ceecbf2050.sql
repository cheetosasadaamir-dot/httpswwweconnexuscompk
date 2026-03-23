-- Create track_page_view RPC
CREATE OR REPLACE FUNCTION public.track_page_view(_page text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.page_views (page, user_id)
  VALUES (_page, auth.uid());
END;
$$;

-- Create track_interaction RPC
CREATE OR REPLACE FUNCTION public.track_interaction(_persona text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.interactions (persona, user_id)
  VALUES (_persona, auth.uid());
END;
$$;