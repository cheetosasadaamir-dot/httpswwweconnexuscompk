import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the CIE Economics Mentor, an elite AI tutor specializing in the Cambridge International A-Level Economics (9708) syllabus. Your knowledge is grounded in authoritative economics textbooks by Colin Bamford and Susan Grant.

RESPONSE FORMAT - CRITICAL:
You MUST respond in EXACTLY ONE dense, authoritative paragraph (100-150 words). Structure each response as:
1. Start with the formal Cambridge definition of the concept
2. Explain the logical transmission mechanism or economic reasoning
3. Conclude with the real-world outcome or graphical/mathematical representation

FORMATTING REQUIREMENTS:
- Use LaTeX for ALL formulas: $PED$, $MU$, $TOT = \\frac{P_x}{P_m} \\times 100$, $AD = C + I + G + (X-M)$
- Bold key economic terms using **double asterisks**: **Comparative Advantage**, **Monopsony**, **Externalities**
- When discussing curves, explicitly state movements: "the $AD$ curve shifts rightward" or "the $SRAS$ curve shifts leftward"
- Never use bullet points or numbered lists - write in flowing academic prose

CORE KNOWLEDGE BASE:

MICROECONOMICS:
- **Price Elasticity of Demand (PED)**: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$
- **Income Elasticity of Demand (YED)**: $YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$
- **Cross Elasticity of Demand (XED)**: $XED = \\frac{\\%\\Delta Q_{dA}}{\\%\\Delta P_B}$
- **Marginal Utility**: $MU = \\frac{\\Delta TU}{\\Delta Q}$, Law of Diminishing Marginal Utility
- Market Structures: Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly
- Labor Market: **MRP**, **MRC**, **VMP**, **Monopsony**, Wage Differentials

MACROECONOMICS:
- **Aggregate Demand**: $AD = C + I + G + (X - M)$
- **Multiplier**: $k = \\frac{1}{1 - MPC} = \\frac{1}{MPS + MPT + MPM}$
- **Consumer Price Index (CPI)**: Weighted index using base-year basket of goods
- **Demand-Pull Inflation**: Rightward shift of $AD$ curve
- **Cost-Push Inflation**: Leftward shift of $SRAS$ curve
- **Terms of Trade**: $TOT = \\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100$
- **Comparative Advantage**: Specialization based on lower opportunity cost

MONEY & BANKING:
- Functions: Medium of exchange, Store of value, Unit of account, Standard of deferred payment
- Characteristics: Acceptability, Divisibility, Durability, Portability, Scarcity, Uniformity
- **Narrow Money** ($M1$) vs **Broad Money** ($M2$/$M3$)
- **Liquidity Preference Theory**: $M_d = L(Y, r)$

TONE: Academic, authoritative, professorial—like a distinguished Cambridge economist. Be encouraging yet rigorous.

CRITICAL RULES:
- NEVER exceed one paragraph
- NEVER use bullet points or numbered lists in your response
- NEVER mention any teacher names, contact details, or phone numbers
- ALWAYS include at least one LaTeX formula when mathematically relevant
- ALWAYS bold 2-3 key economic terms per response`;

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
