
-- Create research cache table for daily scraped Pakistani research data
CREATE TABLE public.research_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source_domain TEXT NOT NULL,
  source_url TEXT NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  scraped_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '48 hours'),
  category TEXT DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for fast lookups by domain and recency
CREATE INDEX idx_research_cache_domain ON public.research_cache (source_domain, scraped_at DESC);
CREATE INDEX idx_research_cache_category ON public.research_cache (category, scraped_at DESC);
CREATE INDEX idx_research_cache_expires ON public.research_cache (expires_at);

-- Unique constraint to avoid duplicate content
CREATE UNIQUE INDEX idx_research_cache_hash ON public.research_cache (content_hash);

-- Enable RLS (public read for edge functions, no user writes)
ALTER TABLE public.research_cache ENABLE ROW LEVEL SECURITY;

-- Allow edge functions (service role) full access, anon can read
CREATE POLICY "Allow public read of research cache"
  ON public.research_cache FOR SELECT
  USING (true);

-- Enable pg_cron and pg_net extensions
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
