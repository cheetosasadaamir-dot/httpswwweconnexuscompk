DO $$
BEGIN
  IF to_regclass('public.premium_access') IS NOT NULL THEN
    DROP POLICY IF EXISTS "Admins can update premium access" ON public.premium_access;
    DROP POLICY IF EXISTS "Admins can delete premium access" ON public.premium_access;
    CREATE POLICY "Admins can update premium access" ON public.premium_access
      FOR UPDATE TO authenticated
      USING (public.has_role(auth.uid(), 'admin'))
      WITH CHECK (public.has_role(auth.uid(), 'admin'));
    CREATE POLICY "Admins can delete premium access" ON public.premium_access
      FOR DELETE TO authenticated
      USING (public.has_role(auth.uid(), 'admin'));
  END IF;

  IF to_regclass('public.freemium_access') IS NOT NULL THEN
    DROP POLICY IF EXISTS "Admins can update freemium access" ON public.freemium_access;
    DROP POLICY IF EXISTS "Admins can delete freemium access" ON public.freemium_access;
    CREATE POLICY "Admins can update freemium access" ON public.freemium_access
      FOR UPDATE TO authenticated
      USING (public.has_role(auth.uid(), 'admin'))
      WITH CHECK (public.has_role(auth.uid(), 'admin'));
    CREATE POLICY "Admins can delete freemium access" ON public.freemium_access
      FOR DELETE TO authenticated
      USING (public.has_role(auth.uid(), 'admin'));
  END IF;
END $$;