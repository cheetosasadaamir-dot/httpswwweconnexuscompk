
-- Create private bucket for persona document uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'persona-uploads',
  'persona-uploads',
  false,
  20971520, -- 20 MB
  ARRAY['application/pdf']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- RLS: users can only access files in their own folder (path begins with their auth uid)
CREATE POLICY "Users can read own persona uploads"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'persona-uploads'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can upload own persona files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'persona-uploads'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update own persona files"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'persona-uploads'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete own persona files"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'persona-uploads'
  AND auth.uid()::text = (storage.foldername(name))[1]
);
