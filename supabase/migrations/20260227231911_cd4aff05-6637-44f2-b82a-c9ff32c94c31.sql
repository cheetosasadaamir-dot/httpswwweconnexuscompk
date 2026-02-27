
-- Drop the overly permissive policy
DROP POLICY "Service role full access to ai_cache" ON public.ai_cache;

-- Create restrictive policies - only service role (edge functions) can access
-- Since RLS is enabled and there are NO permissive policies for anon/authenticated,
-- the table is effectively inaccessible from the client. Service role bypasses RLS.
-- We add a restrictive SELECT for safety.
CREATE POLICY "No public access to ai_cache"
ON public.ai_cache
FOR SELECT
USING (false);
