
-- Fix 1: has_role() - add auth.uid() validation to prevent checking other users' roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow checking own roles
  IF _user_id != auth.uid() THEN
    RETURN false;
  END IF;
  
  RETURN EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
END;
$$;

-- Fix 2: Add admin-only write policies to research_cache
CREATE POLICY "Admins can insert research cache"
ON public.research_cache
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update research cache"
ON public.research_cache
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete research cache"
ON public.research_cache
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
