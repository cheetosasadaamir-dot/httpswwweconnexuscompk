
-- Create ai_cache table for semantic caching (0-cost response layer)
CREATE TABLE public.ai_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  query_hash TEXT NOT NULL,
  persona TEXT NOT NULL DEFAULT 'a-level',
  prompt_text TEXT NOT NULL,
  response_text TEXT NOT NULL,
  hit_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + INTERVAL '7 days')
);

-- Unique index on query_hash + persona for fast lookups
CREATE UNIQUE INDEX idx_ai_cache_hash_persona ON public.ai_cache (query_hash, persona);

-- Index for expiry cleanup
CREATE INDEX idx_ai_cache_expires ON public.ai_cache (expires_at);

-- Enable RLS
ALTER TABLE public.ai_cache ENABLE ROW LEVEL SECURITY;

-- Only edge functions (service role) can read/write cache
-- No public access needed - cache is server-side only
CREATE POLICY "Service role full access to ai_cache"
ON public.ai_cache
FOR ALL
USING (true)
WITH CHECK (true);

-- Auto-update updated_at
CREATE TRIGGER update_ai_cache_updated_at
BEFORE UPDATE ON public.ai_cache
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
