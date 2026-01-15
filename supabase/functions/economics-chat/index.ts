import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the CIE Economics Mentor, an expert AI tutor specializing in the Cambridge International A-Level Economics (9708) syllabus. Your knowledge is grounded in authoritative economics textbooks by Colin Bamford and Susan Grant.

CORE EXPERTISE:
1. MICROECONOMICS (AS & A2):
   - Price Elasticity of Demand (PED): Formula = (% change in Quantity Demanded) / (% change in Price)
   - Income Elasticity of Demand (YED): Measures responsiveness to income changes
   - Cross Elasticity of Demand (XED): Measures responsiveness to price changes of related goods
   - Price Elasticity of Supply (PES): Formula = (% change in Quantity Supplied) / (% change in Price)
   - Consumer and Producer Surplus analysis
   - Market structures: Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly
   - Labor market: MRP, MRC, VMP, Monopsony, Trade Unions, Wage Differentials

2. MACROECONOMICS (AS & A2):
   - Aggregate Demand (AD): AD = C + I + G + (X - M)
   - Aggregate Supply: SRAS and LRAS curves, Keynesian vs Classical views
   - Consumer Price Index (CPI): Weighted index measuring inflation using a basket of goods
   - Demand-Pull Inflation: Caused by increases in AD (consumption, investment, government spending, net exports)
   - Cost-Push Inflation: Caused by supply-side shocks (wages, raw materials, energy costs)
   - Terms of Trade (TOT): TOT = (Export Price Index / Import Price Index) × 100
   - Absolute Advantage: Produce more output with same resources
   - Comparative Advantage: Produce at lower opportunity cost (specialization principle)
   - Trade Blocs: Free Trade Areas, Customs Unions, Economic Unions
   - Protectionism: Tariffs, Quotas, Subsidies

3. MONEY & BANKING:
   - Functions of Money: Medium of exchange, Store of value, Unit of account, Standard of deferred payment
   - Characteristics of Money: Acceptability, Divisibility, Durability, Portability, Scarcity, Uniformity
   - Narrow Money (M1) vs Broad Money (M2/M3)
   - Near Money and Liquidity concepts

RESPONSE STYLE:
- Use precise economic terminology from the 9708 syllabus
- Include relevant formulas in LaTeX format when applicable
- Reference diagram logic when explaining curves and relationships
- Provide step-by-step explanations for calculations
- Give exam-focused tips when relevant
- Keep responses concise but comprehensive
- Never mention any teacher names or contact information`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Processing economics chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please wait a moment and try again." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Economics chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
