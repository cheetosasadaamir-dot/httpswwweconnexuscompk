import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ── RESEARCH & POLICY SOURCES ──
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
      "https://www.finance.gov.pk/survey/chapter_25/Economic_Survey_2024_25.pdf",
      "https://www.finance.gov.pk/",
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

  // ── EDEXCEL A-LEVEL SPECIFICATIONS (ALL 10 SUBJECTS) ──
  // Economics
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-a-2015.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/economics.html",
    ],
    category: "edexcel_economics",
    label: "Edexcel Economics",
  },
  // Business
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/business-2015.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/business-studies.html",
    ],
    category: "edexcel_business",
    label: "Edexcel Business",
  },
  // Law
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/law-2015.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/law-2015.coursematerials.html",
    ],
    category: "edexcel_law",
    label: "Edexcel Law",
  },
  // Psychology
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/psychology-2015.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/psychology.html",
    ],
    category: "edexcel_psychology",
    label: "Edexcel Psychology",
  },
  // Accounting
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/accounting.html",
    ],
    category: "edexcel_accounting",
    label: "Edexcel Accounting",
  },
  // Sociology (not offered as IAL — use AQA fallback)
  {
    domain: "aqa.org.uk",
    urls: [
      "https://www.aqa.org.uk/subjects/sociology/a-level/sociology-7192/assessment-resources",
      "https://www.aqa.org.uk/subjects/sociology/a-level/sociology-7192/teaching-resources",
    ],
    category: "edexcel_sociology",
    label: "AQA Sociology",
  },
  // Mathematics
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics.html",
    ],
    category: "edexcel_mathematics",
    label: "Edexcel Mathematics",
  },
  // Physics
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/physics-2015.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/physics.html",
    ],
    category: "edexcel_physics",
    label: "Edexcel Physics",
  },
  // Chemistry
  {
    domain: "qualifications.pearson.com",
    urls: [
      "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/chemistry-2015.html",
      "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/chemistry.html",
    ],
    category: "edexcel_chemistry",
    label: "Edexcel Chemistry",
  },

  // ── CIE A-LEVEL SPECIFICATIONS ──
  {
    domain: "cambridgeinternational.org",
    urls: [
      "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-law-9084/",
    ],
    category: "law_cie",
    label: "CIE Law 9084",
  },
  {
    domain: "cambridgeinternational.org",
    urls: [
      "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-chemistry-9701/",
    ],
    category: "chem_cie",
    label: "CIE Chemistry 9701",
  },

  // ── AQA SPECIFICATIONS ──
  {
    domain: "aqa.org.uk",
    urls: [
      "https://www.aqa.org.uk/subjects/law/a-level/law-7162/assessment-resources",
    ],
    category: "law_aqa",
    label: "AQA Law 7162",
  },
  {
    domain: "aqa.org.uk",
    urls: [
      "https://www.aqa.org.uk/subjects/science/a-level/chemistry-7405/assessment-resources",
    ],
    category: "chem_aqa",
    label: "AQA Chemistry 7405",
  },

  // ── UNIVERSITY-LEVEL CURRICULUM SOURCES ──
  {
    domain: "ocr.org.uk",
    urls: [
      "https://www.ocr.org.uk/qualifications/as-and-a-level/economics-h060-h460-from-2019/",
    ],
    category: "uni_economics",
    label: "OCR Economics",
  },
  {
    domain: "economicsnetwork.ac.uk",
    urls: [
      "https://www.economicsnetwork.ac.uk/handbook",
      "https://www.economicsnetwork.ac.uk/themes/curriculum",
    ],
    category: "uni_economics",
    label: "Economics Network UK",
  },
  {
    domain: "qaa.ac.uk",
    urls: [
      "https://www.qaa.ac.uk/the-quality-code/subject-benchmark-statements/",
    ],
    category: "uni_benchmark",
    label: "QAA Subject Benchmarks",
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

      await new Promise(r => setTimeout(r, 1500));
    }
  }

  console.log(`Research scraper complete:`, results);

  return new Response(
    JSON.stringify({ success: true, results }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
