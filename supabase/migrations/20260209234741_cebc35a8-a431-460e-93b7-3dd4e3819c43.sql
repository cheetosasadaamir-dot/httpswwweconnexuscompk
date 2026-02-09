
-- Create premium_access table
CREATE TABLE public.premium_access (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL UNIQUE,
  access_status BOOLEAN NOT NULL DEFAULT false,
  whatsapp_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.premium_access ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (apply for access) 
CREATE POLICY "Anyone can apply for premium access"
ON public.premium_access
FOR INSERT
WITH CHECK (access_status = false);

-- Anyone can check their own access status by email
CREATE POLICY "Anyone can read premium_access"
ON public.premium_access
FOR SELECT
USING (true);

-- Only admins can update (grant/revoke)
CREATE POLICY "Admins can update premium access"
ON public.premium_access
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete
CREATE POLICY "Admins can delete premium access"
ON public.premium_access
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add updated_at trigger
CREATE TRIGGER update_premium_access_updated_at
BEFORE UPDATE ON public.premium_access
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
