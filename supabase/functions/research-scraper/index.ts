import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Target research sources for the University Persona
const RESEARCH_SOURCES = [
  {
    domain: "pide.org.pk",
    urls: [
      "https://pide.org.pk/research/",
      "https://pide.org.pk/research/working-papers/",
    ],
    category: "policy_research",
    label: "PIDE",
  },
  {
    domain: "finance.gov.pk",
    urls: [
      "https://www.finance.gov.pk/survey_2425.html",
      "https://www.finance.gov.pk/economy.html",
    ],
    category: "fiscal_data",
    label: "Ministry of Finance Pakistan",
  },
  {
    domain: "sdpi.org",
    urls: [
      "https://sdpi.org/",
      "https://sdpi.org/policy-briefs",
      "https://sdpi.org/research-publications",
    ],
    category: "development_policy",
    label: "SDPI",
  },
];

async function hashContent(content: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function scrapeUrl(url: string, apiKey: string): Promise<{ title: string; content: string } | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch("https://api.firecrawl.dev/v1/scrape", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        formats: ["markdown"],
        onlyMainContent: true,
        waitFor: 3000,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      console.error(`Scrape failed for ${url}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    const markdown = data?.data?.markdown || data?.markdown || "";
    const title = data?.data?.metadata?.title || data?.metadata?.title || url;

    if (!markdown || markdown.length < 100) {
      console.warn(`Insufficient content from ${url}`);
      return null;
    }

    // Truncate to ~4000 chars to keep cache lean
    return {
      title,
      content: markdown.slice(0, 4000),
    };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      console.warn(`Scrape timeout for ${url}`);
    } else {
      console.error(`Scrape error for ${url}:`, err);
    }
    return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const FIRECRAWL_API_KEY = Deno.env.get("FIRECRAWL_API_KEY");
  if (!FIRECRAWL_API_KEY) {
    return new Response(
      JSON.stringify({ error: "FIRECRAWL_API_KEY not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const results = { scraped: 0, cached: 0, errors: 0, skipped: 0 };

  // Clean expired entries first
  await supabase
    .from("research_cache")
    .delete()
    .lt("expires_at", new Date().toISOString());

  for (const source of RESEARCH_SOURCES) {
    for (const url of source.urls) {
      console.log(`Scraping: ${url}`);
      
      const scraped = await scrapeUrl(url, FIRECRAWL_API_KEY);
      if (!scraped) {
        results.errors++;
        continue;
      }

      results.scraped++;
      const contentHash = await hashContent(scraped.content);

      // Upsert using content hash to avoid duplicates
      const { error } = await supabase
        .from("research_cache")
        .upsert(
          {
            source_domain: source.domain,
            source_url: url,
            title: scraped.title,
            content: scraped.content,
            content_hash: contentHash,
            category: source.category,
            scraped_at: new Date().toISOString(),
            expires_at: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
          },
          { onConflict: "content_hash" }
        );

      if (error) {
        console.error(`Cache insert error for ${url}:`, error.message);
        results.errors++;
      } else {
        results.cached++;
      }

      // Small delay between requests to be respectful
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  console.log(`Research scraper complete:`, results);

  return new Response(
    JSON.stringify({ success: true, results }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
