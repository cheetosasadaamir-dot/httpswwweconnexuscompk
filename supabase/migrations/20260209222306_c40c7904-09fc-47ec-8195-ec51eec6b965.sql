
-- Create freemium_access table for gating content
CREATE TABLE public.freemium_access (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  gmail TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'granted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.freemium_access ENABLE ROW LEVEL SECURITY;

-- Public can read their own access status (by gmail match)
CREATE POLICY "Anyone can check access by gmail"
ON public.freemium_access
FOR SELECT
USING (true);

-- Anyone can insert (apply) - but only pending status
CREATE POLICY "Anyone can apply for access"
ON public.freemium_access
FOR INSERT
WITH CHECK (status = 'pending');

-- Only admins can update (approve/reject)
CREATE POLICY "Admins can update freemium access"
ON public.freemium_access
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete
CREATE POLICY "Admins can delete freemium access"
ON public.freemium_access
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_freemium_access_updated_at
BEFORE UPDATE ON public.freemium_access
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
