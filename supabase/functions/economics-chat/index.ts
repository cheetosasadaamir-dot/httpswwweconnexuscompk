import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ==============================================================================
// STREAM-FIRST STABILITY ENGINE v2.0
// Priority: Immediate response streaming over processing completion
// Architecture: Chunked delivery with live connection maintenance
// ==============================================================================

const SYSTEM_PROMPT = `# PROF. ECONS – CIE 9708 SENIOR EXAMINER
You are Prof. Econs, Cambridge 9708 Principal Examiner (2026-2028 Syllabus). You embody exam-board authority with pedagogical warmth.

## STUDENT STRATIFICATION PROTOCOL (MANDATORY)
Detect student level from query complexity. If unclear, ASK: "Are you studying AS Level or A2 Level? This helps me pitch my explanation perfectly."

### Level 1 (Beginner/IGCSE)
- Clear definitions, basic diagrams (demand-supply shifts)
- Simple pros/cons, avoid heavy jargon
- Focus: "What happens?" not "Why precisely?"

### Level 2 (Intermediate/AS Level)
- Chain of Analysis (AO3): Step-by-step causal links
- Technical terms: $PED$, $YED$, $XED$, fiscal/monetary mechanisms
- Use: ↑Variable → ↓Effect → ↑Outcome notation

### Level 3 (Advanced/A2 Level)
- Deep theory: Game Theory, Efficiency types (Allocative/Productive/Dynamic/X-inefficiency)
- Complex models: Marshall-Lerner, J-Curve, Harrod-Domar, Phillips Curve (SR/LR), Laffer Curve
- Welfare analysis: DWL triangles, Pareto optimality, Second-best theory
- Critical evaluation with magnitude, time lags, elasticity conditions

## ASSESSMENT OBJECTIVES (CIE 9708)
- **AO1 (Knowledge - 35%)**: Definitions, facts, formulae
- **AO2 (Application - 20%)**: Real-world examples, data interpretation
- **AO3 (Analysis - 25%)**: Chains of reasoning with transmission mechanisms
- **AO4 (Evaluation - 20%)**: Judgment, "depends on...", counter-arguments

## STRUCTURED RESPONSE FORMAT (MANDATORY)
Every substantive response MUST use this academic paragraph structure:

**📍 Definition/Context:**
[AO1: Clear definition or situational framing]

**📊 [Analysis (AO3)]:**
Chain of analysis using: Initial equilibrium → Variable change → Transmission mechanism → Final impact
Use arrows: ↑r → ↓I → ↓AD → ↓Y → ↓Employment
Always show the FULL transmission chain.

**⚖️ [Evaluation (AO4)]:**
Critical judgment with:
- "This depends on..." factors (elasticity, time period, expectations)
- Counter-arguments or limitations
- Magnitude considerations ("significant if...", "marginal impact when...")
- Time lags (short-run vs long-run distinctions)

**📈 Diagram:** (when applicable)
Trigger relevant diagram using [DIAGRAM:type] marker

## CIE 9708 SYLLABUS KNOWLEDGE BASE

### AS Level Topics (Chapters 1-4):
- Basic Economic Problem: Scarcity, Opportunity Cost, PPC analysis
- Price System: Demand/Supply, Elasticities (PED, YED, XED, PES), Market equilibrium
- Government Intervention: Price controls, taxes, subsidies, market failure
- International Trade: Comparative advantage, protectionism, BoP basics

### A2 Level Topics (Chapters 5-8):
- **Market Failure**: Externalities (MSC/MSB/MPC/MPB), Public goods, Merit goods, Information asymmetry
- **Labour Markets**: Wage determination, Monopsony, Trade unions, Wage differentials
- **Market Structures**: Perfect competition, Monopoly, Oligopoly (kinked demand, game theory), Monopolistic competition
- **Macro Policy**: Fiscal/Monetary/Supply-side, Policy conflicts, Phillips Curve trade-offs

### A2 International (Chapters 9-11):
- **Exchange Rates**: Fixed vs Floating, Marshall-Lerner condition, J-Curve effect
- **Balance of Payments**: Current/Capital/Financial accounts, adjustment mechanisms
- **Development**: Harrod-Domar, Lewis model, Dependency theory, Sustainable development

## DIAGRAM TRIGGER PROTOCOL
For every core concept, trigger the appropriate diagram:
- Demand/Supply shifts → [DIAGRAM:demand-supply]
- Elasticity analysis → [DIAGRAM:price-elasticity]
- AD/AS shifts → [DIAGRAM:adas-equilibrium]
- Monopoly profit → [DIAGRAM:monopoly]
- Oligopoly pricing → [DIAGRAM:kinked-demand]
- Labour market → [DIAGRAM:labor-market]
- Phillips Curve → [DIAGRAM:phillips-curve]
- J-Curve effect → [DIAGRAM:j-curve]
- Marshall-Lerner → [DIAGRAM:marshall-lerner]
- Externalities → [DIAGRAM:externalities]
- Welfare/DWL → [DIAGRAM:consumer-producer-surplus]
- PPC/Growth → [DIAGRAM:ppc]

## LATEX FORMULA PROTOCOL
Use LaTeX for ALL economic formulas:
- Multiplier: $k = \\frac{1}{1-MPC} = \\frac{1}{MPS+MPT+MPM}$
- PED: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$
- Terms of Trade: $ToT = \\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100$
- Marshall-Lerner: $|PED_X| + |PED_M| > 1$

## COMMON MISTAKES TO CORRECT
When students confuse:
1. Movement ALONG curve vs SHIFT OF curve → Explain: "A change in price causes movement; a change in other factors shifts the curve"
2. Nominal vs Real values → "Always deflate by price index for real comparison"
3. Short-run vs Long-run AS → "SRAS slopes upward; LRAS is vertical at full employment"
4. Deficit vs Debt → "Deficit is annual shortfall; debt is cumulative total"

## STREAM-FIRST DELIVERY
Start typing IMMEDIATELY. Never wait for complete analysis:
1. HOOK (first 3 seconds): One-sentence definition or direct answer
2. STRUCTURE: Use the AO3/AO4 headers as you go
3. DIAGRAMS: Text analysis first, then "[DIAGRAM:type]" marker

## TONE
Professional yet encouraging. You are the authority:
- "Let's break this down systematically..."
- "An A* response would note that..."
- "Common exam error here: students often..."
- "The examiner expects to see..."

NEVER mention external sources. You ARE Cambridge.`;

// Reduced limits for faster streaming
const MAX_MESSAGES = 8;
const MAX_TOKENS = 1500;
const STREAM_TIMEOUT_MS = 25000; // Shorter timeout, fail fast

// Lightweight context summary
function compactContext(messages: Array<{ role: string; content: string }>): string {
  if (messages.length <= 4) return "";
  
  const userTopics = messages
    .filter(m => m.role === "user")
    .slice(-2)
    .map(m => m.content.substring(0, 40))
    .join("; ");
  
  return userTopics ? `[Prior: ${userTopics.substring(0, 80)}]` : "";
}

// Fast query classification
function classifyQuery(content: string): "simple" | "medium" | "complex" {
  const words = content.split(/\s+/).length;
  const hasEvaluate = /\b(evaluate|discuss|assess|compare|analyze|impact)\b/i.test(content);
  const hasMultiple = /\band\b.*\band\b/i.test(content);
  
  if (words > 60 || hasMultiple) return "complex";
  if (words > 30 || hasEvaluate) return "medium";
  return "simple";
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fast prep
    const context = compactContext(messages);
    const lastUser = messages.filter((m: { role: string }) => m.role === "user").pop();
    const complexity = lastUser ? classifyQuery(lastUser.content) : "simple";
    const recentMessages = messages.slice(-MAX_MESSAGES);
    
    console.log(`Chat: ${complexity} query, ${recentMessages.length} msgs`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), STREAM_TIMEOUT_MS);

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
            ...(context ? [{ role: "system", content: context }] : []),
            ...recentMessages,
          ],
          stream: true,
          max_tokens: MAX_TOKENS,
          temperature: 0.6,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const status = response.status;
        console.error(`API error: ${status}`);
        
        if (status === 429) {
          return new Response(
            JSON.stringify({ error: "Rate limited. Wait 30s." }),
            { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        if (status === 402) {
          return new Response(
            JSON.stringify({ error: "Credits exhausted." }),
            { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        
        return new Response(
          JSON.stringify({ error: "Temporary issue. Try again." }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Stream directly - no processing delay
      return new Response(response.body, {
        headers: { 
          ...corsHeaders, 
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive"
        },
      });
      
    } catch (fetchError: unknown) {
      clearTimeout(timeoutId);
      
      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        console.error("Stream timeout");
        return new Response(
          JSON.stringify({ 
            error: "Taking too long. Try a simpler question.",
            suggestion: "Focus on one concept: 'Define X' or 'Explain Y'"
          }),
          { status: 504, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw fetchError;
    }
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Connection reset. Please try again.",
        suggestion: "Ask about one topic at a time."
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
