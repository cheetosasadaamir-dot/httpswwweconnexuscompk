
-- Fix 1: Remove public SELECT on freemium_access (only admin reads it)
DROP POLICY IF EXISTS "Anyone can check access by gmail" ON public.freemium_access;

CREATE POLICY "Admins can read freemium access"
ON public.freemium_access
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix 2: Remove public SELECT on premium_access
DROP POLICY IF EXISTS "Anyone can read premium_access" ON public.premium_access;

CREATE POLICY "Admins can read premium access"
ON public.premium_access
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix 3: Create secure RPC to check premium access by email (no data leakage)
CREATE OR REPLACE FUNCTION public.check_premium_access(_email text)
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.premium_access
    WHERE user_email = lower(trim(_email))
      AND access_status = true
  );
END;
$$;
