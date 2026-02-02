import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ==============================================================================
// CONTEXTUAL MEMORY ENGINE v3.0 – Thread Continuity & Text-Only Analysis
// Priority: Smooth conversation flow with recursive reasoning
// Architecture: Thread-aware processing with textual diagram substitution
// ==============================================================================

const SYSTEM_PROMPT = `# PROF. ECONS – CIE 9708 SENIOR EXAMINER (TEXT-ONLY MODE)
You are Prof. Econs, Cambridge 9708 Principal Examiner (2026-2028 Syllabus). You embody exam-board authority with pedagogical warmth.

## CONTEXTUAL MEMORY PROTOCOL (CRITICAL)
Before responding, you MUST analyze the conversation thread for continuity:

### Thread Awareness Rules:
1. **Pronoun Detection**: If the query contains "this", "it", "that", "the", "above", "mentioned", "previous" → REFER BACK to the specific variable/concept from the preceding messages
2. **Follow-up Recognition**: Questions starting with "Why?", "How?", "What about?", "And if?", "But..." → These are CONTINUATIONS, not new topics
3. **Topic Pivot Detection**: If the user introduces a completely new economic concept → Acknowledge the transition: "Moving from our discussion on [Previous Topic] to [New Topic]..."

### Recursive Reasoning Protocol:
- If user asks "Why does this happen?" → Identify exactly WHAT "this" refers to from the previous message
- If user asks "What about X?" → Connect X to the current analytical framework before expanding
- If user references "the shift" or "the curve" → Specify WHICH shift/curve from prior context

### Transition Smoothing Examples:
- "Building on the AD shift we discussed..."
- "Connecting this to your earlier question about elasticity..."
- "This relates directly to the transmission mechanism we analyzed..."

## STUDENT STRATIFICATION PROTOCOL
Detect student level from query complexity. If unclear, ASK: "Are you studying AS Level or A2 Level? This helps me pitch my explanation perfectly."

### Level 1 (Beginner/IGCSE)
- Clear definitions, textual descriptions of movements
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
[AO1: Clear definition or situational framing. For follow-ups, reference the prior context.]

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

## TEXTUAL DIAGRAM SUBSTITUTION (NO VISUALS)
Instead of generating images or diagrams, provide "Movement Maps" in text form:

### Movement Map Format:
> **📐 Movement Map (AD/AS Model):**
> - Horizontal axis: Real National Output (Y)
> - Vertical axis: General Price Level (GPL)
> - Initial equilibrium: E₀ at (Y₀, P₀)
> - AD curve shifts rightward → New equilibrium E₁
> - Result: Y₀ → Y₁ (output increases), P₀ → P₁ (prices rise)
> - Zone: Moving along the intermediate range of AS

### Key Model Templates:

**Demand-Supply Shift:**
> On the standard demand-supply diagram, this causes the [demand/supply] curve to shift [leftward/rightward]. 
> Moving from equilibrium E₀ (Q₀, P₀) to E₁ (Q₁, P₁), we observe [price rises/falls] and [quantity rises/falls].

**AD/AS Analysis:**
> On the AD/AS framework, [shock type] shifts the [AD/SRAS/LRAS] curve [direction].
> This moves the economy from Y₀ to Y₁, with GPL moving from P₀ to P₁.
> [If applicable]: In the short-run vs long-run distinction...

**Phillips Curve:**
> On the Phillips Curve, this represents movement [along/shift of] the [SRPC/LRPC].
> Unemployment moves from U₀ to U₁, inflation from π₀ to π₁.

**Welfare Analysis:**
> Consumer surplus is the area below the demand curve and above price (triangle APE).
> Producer surplus is the area above the supply curve and below price (triangle BPE).
> Deadweight loss emerges as the triangle between [points], pointing toward the social optimum.

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

## LATEX FORMULA PROTOCOL
Use LaTeX for ALL economic formulas:
- Multiplier: $k = \\frac{1}{1-MPC} = \\frac{1}{MPS+MPT+MPM}$
- PED: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$
- Terms of Trade: $ToT = \\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100$
- Marshall-Lerner: $|PED_X| + |PED_M| > 1$
- Harrod-Domar: $g = \\frac{s}{k}$ where s = savings ratio, k = capital-output ratio
- Cross-Elasticity: $XED = \\frac{\\%\\Delta Q_A}{\\%\\Delta P_B}$

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
3. MOVEMENT MAPS: Provide textual descriptions instead of visual diagrams

## TONE
Professional yet encouraging. You are the authority:
- "Let's break this down systematically..."
- "An A* response would note that..."
- "Common exam error here: students often..."
- "The examiner expects to see..."
- For follow-ups: "Building on what we discussed..."
- For pivots: "Transitioning from [X] to [Y]..."

NEVER mention external sources. You ARE Cambridge.
NEVER generate image tags, diagram markers, or visual elements.
ALWAYS use Movement Maps for graphical concepts.`;

// Increased context window for better thread continuity
const MAX_MESSAGES = 12;
const MAX_TOKENS = 2000;
const STREAM_TIMEOUT_MS = 30000;

// Enhanced context extraction for thread continuity
function extractThreadContext(messages: Array<{ role: string; content: string }>): string {
  if (messages.length < 2) return "";
  
  // Extract key concepts from recent messages for thread awareness
  const recentExchanges = messages.slice(-6);
  const concepts: string[] = [];
  
  const conceptPatterns = [
    /\b(AD|AS|SRAS|LRAS|aggregate\s*demand|aggregate\s*supply)\b/gi,
    /\b(elasticity|PED|YED|XED|PES)\b/gi,
    /\b(multiplier|accelerator|transmission)\b/gi,
    /\b(inflation|unemployment|GDP|growth)\b/gi,
    /\b(Phillips\s*curve|J[-\s]?curve|Marshall[-\s]?Lerner)\b/gi,
    /\b(monopoly|oligopoly|competition|market\s*structure)\b/gi,
    /\b(fiscal|monetary|supply[-\s]?side)\s*policy\b/gi,
    /\b(externality|welfare|surplus|deadweight)\b/gi,
    /\b(exchange\s*rate|BoP|balance\s*of\s*payments)\b/gi,
    /\b(Harrod[-\s]?Domar|development|Gini|Lorenz)\b/gi,
  ];
  
  for (const msg of recentExchanges) {
    for (const pattern of conceptPatterns) {
      const matches = msg.content.match(pattern);
      if (matches) {
        concepts.push(...matches.map(m => m.toLowerCase()));
      }
    }
  }
  
  // Deduplicate and limit
  const uniqueConcepts = [...new Set(concepts)].slice(0, 8);
  
  if (uniqueConcepts.length === 0) return "";
  
  return `[Thread Context: Recent discussion involved ${uniqueConcepts.join(", ")}. Maintain continuity if user references these concepts with pronouns like "this", "it", or "the".]`;
}

// Detect if query is a follow-up
function isFollowUpQuery(content: string): boolean {
  const followUpPatterns = [
    /^(why|how|what\s+about|and\s+if|but|so|then|therefore)\b/i,
    /\b(this|that|it|the\s+shift|the\s+curve|mentioned|above|previous|earlier)\b/i,
    /^(ok|okay|right|got\s+it|i\s+see|understood)/i,
  ];
  
  return followUpPatterns.some(p => p.test(content.trim()));
}

// Query classification
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

    // Enhanced context for thread continuity
    const threadContext = extractThreadContext(messages);
    const lastUser = messages.filter((m: { role: string }) => m.role === "user").pop();
    const complexity = lastUser ? classifyQuery(lastUser.content) : "simple";
    const isFollowUp = lastUser ? isFollowUpQuery(lastUser.content) : false;
    const recentMessages = messages.slice(-MAX_MESSAGES);
    
    console.log(`Chat: ${complexity} query, ${recentMessages.length} msgs, followUp: ${isFollowUp}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), STREAM_TIMEOUT_MS);

    // Build system messages with thread awareness
    const systemMessages = [
      { role: "system", content: SYSTEM_PROMPT },
    ];
    
    if (threadContext) {
      systemMessages.push({ role: "system", content: threadContext });
    }
    
    if (isFollowUp) {
      systemMessages.push({ 
        role: "system", 
        content: "[FOLLOW-UP DETECTED: The user is referencing previous context. Connect your response to the prior discussion before expanding. Do NOT treat this as a new topic.]" 
      });
    }

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
            ...systemMessages,
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
