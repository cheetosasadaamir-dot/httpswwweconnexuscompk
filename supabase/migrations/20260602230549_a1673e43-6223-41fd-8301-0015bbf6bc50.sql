
-- 1. Restrict mcq_vault reads to authenticated users (hide answer key from anonymous)
DROP POLICY IF EXISTS "Public can read mcq_vault" ON public.mcq_vault;
CREATE POLICY "Authenticated users can read mcq_vault"
ON public.mcq_vault
FOR SELECT
TO authenticated
USING (true);

-- 2. Tighten user_roles SELECT policy to authenticated role only
DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- 3. Restrict freemium_access INSERT: must be authenticated and gmail must match auth email
DROP POLICY IF EXISTS "Anyone can apply for access" ON public.freemium_access;
CREATE POLICY "Authenticated users apply for own access"
ON public.freemium_access
FOR INSERT
TO authenticated
WITH CHECK (
  status = 'pending'
  AND lower(trim(gmail)) = lower((auth.jwt() ->> 'email'))
);

-- 4. Restrict premium_access INSERT similarly
DROP POLICY IF EXISTS "Anyone can apply for premium access" ON public.premium_access;
CREATE POLICY "Authenticated users apply for own premium access"
ON public.premium_access
FOR INSERT
TO authenticated
WITH CHECK (
  access_status = false
  AND lower(trim(user_email)) = lower((auth.jwt() ->> 'email'))
);

-- 5. Revoke EXECUTE on internal SECURITY DEFINER functions from anon/authenticated
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.check_premium_access(text) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
