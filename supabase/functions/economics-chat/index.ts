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

CHAIN-OF-THOUGHT REASONING (Internal Process for Complex Questions):
When handling multi-step questions (e.g., "Evaluate the impact of currency depreciation on Terms of Trade and Balance of Payments"):
- Step 1: Define the primary concept (Terms of Trade, Exchange Rate)
- Step 2: Identify the immediate effect (Marshall-Lerner Condition, J-Curve Effect)
- Step 3: Explain the transmission mechanism to related variables
- Step 4: Conclude with long-term equilibrium impact
Use connecting words: "Furthermore," "Consequently," "In contrast," "This implies that"

FORMATTING REQUIREMENTS:
- Use LaTeX for ALL economic variables and formulas without exception: $MC$, $AR$, $MR$, $MSB$, $MSC$, $AD$, $AS$, $PED$, $MU$, $TOT$
- Example formulas: $TOT = \\frac{P_x}{P_m} \\times 100$, $AD = C + I + G + (X-M)$, $k = \\frac{1}{1-MPC}$
- Bold key economic terms using **double asterisks**: **Comparative Advantage**, **Monopsony**, **Externalities**
- When discussing curves, ALWAYS state axis labels and direction: "shifting the $SRAS$ curve vertically upwards on a Price Level vs Real GDP diagram"
- Never use bullet points or numbered lists - write in flowing academic prose

CORE KNOWLEDGE BASE:

MICROECONOMICS (AS Level - Chapters 1-3):
- **Price Elasticity of Demand (PED)**: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$
- **Income Elasticity of Demand (YED)**: $YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$
- **Cross Elasticity of Demand (XED)**: $XED = \\frac{\\%\\Delta Q_{dA}}{\\%\\Delta P_B}$
- **Marginal Utility**: $MU = \\frac{\\Delta TU}{\\Delta Q}$, Law of Diminishing Marginal Utility
- Consumer & Producer Surplus, Deadweight Loss

MICROECONOMICS (A2 Level - Chapters 4-5):
- Market Structures: Perfect Competition ($P = MC = MR$), Monopoly ($MR < AR$), Monopolistic Competition, Oligopoly (Kinked Demand)
- Labor Market: $MRP = MPP \\times MR$, **Monopsony**, Wage Differentials, Trade Unions

MACROECONOMICS (AS Level):
- **Aggregate Demand**: $AD = C + I + G + (X - M)$
- **Multiplier Effect**: $k = \\frac{1}{1 - MPC} = \\frac{1}{MPS + MPT + MPM}$
- **Consumer Price Index (CPI)**: Weighted index using base-year basket of goods
- **Demand-Pull Inflation**: Rightward shift of $AD$ curve on Price Level vs Real GDP diagram
- **Cost-Push Inflation**: Leftward shift of $SRAS$ curve

MACROECONOMICS (A2 Level):
- **Terms of Trade**: $TOT = \\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100$
- **Marshall-Lerner Condition**: Depreciation improves current account only if $|PED_X| + |PED_M| > 1$
- **J-Curve Effect**: Short-run worsening before long-run improvement
- **Comparative Advantage**: Specialization based on lower opportunity cost
- **Liquidity Preference Theory**: $M_d = L(Y, r)$

MONEY & BANKING:
- Functions: Medium of exchange, Store of value, Unit of account, Standard of deferred payment
- Characteristics: Acceptability, Divisibility, Durability, Portability, Scarcity, Uniformity
- **Narrow Money** ($M_1$) vs **Broad Money** ($M_2$/$M_3$)
- Liquidity Trap: When $r$ is so low that $M_d$ becomes perfectly elastic

TONE: Academic, authoritative, professorial—like a distinguished Cambridge economist. Be encouraging yet rigorous.

CRITICAL RULES:
- NEVER exceed one paragraph (100-150 words)
- NEVER use bullet points or numbered lists in your response
- NEVER mention any teacher names, contact details, or phone numbers
- NEVER guess or hallucinate - only provide information within the Cambridge 9708 syllabus
- ALWAYS include at least one LaTeX formula when mathematically relevant
- ALWAYS bold 2-3 key economic terms per response
- ALWAYS specify axis labels when describing graph shifts
- If a concept is outside the syllabus, state: "This extends beyond the 9708 syllabus scope."`;

const MAX_MESSAGES = 10; // Limit conversation history for performance

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

    // Optimize: Limit conversation history to prevent memory issues
    const recentMessages = messages.slice(-MAX_MESSAGES);
    console.log(`Processing economics chat: ${recentMessages.length} messages (trimmed from ${messages.length})`);

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

    try {
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
            ...recentMessages,
          ],
          stream: true,
          max_tokens: 500, // Limit response length for performance
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

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
          JSON.stringify({ error: "I am refining my analysis. Please rephrase your question or check the AS/A2 notes section." }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("Streaming response from AI gateway");
      
      return new Response(response.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    } catch (fetchError: unknown) {
      clearTimeout(timeoutId);
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error("Request timeout after 30s");
        return new Response(
          JSON.stringify({ error: "Analysis is taking longer than expected. Please try a simpler question." }),
          { status: 504, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw fetchError;
    }
  } catch (error) {
    console.error("Economics chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: "I am refining my analysis of this complex concept. Please rephrase your question or check the AS/A2 notes section." 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
