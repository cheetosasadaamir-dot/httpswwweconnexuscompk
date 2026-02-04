import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers - restricted to official domain in production
const ALLOWED_ORIGINS = [
  "https://www.econnexus.com.pk",
  "https://econnexus.com.pk",
  "http://localhost:5173",
  "http://localhost:3000",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Will be dynamically set based on request origin
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

// Rate limiting storage (in-memory for edge function)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = { maxRequests: 15, windowMs: 60000 }; // 15 requests per minute

function checkServerRateLimit(clientId: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(clientId);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return { allowed: true };
  }
  
  if (entry.count >= RATE_LIMIT.maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  entry.count++;
  return { allowed: true };
}

// Input sanitization
function sanitizeMessage(content: string): string {
  if (typeof content !== 'string') return '';
  
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .slice(0, 2000)
    .trim();
}

function getCorsHeaders(requestOrigin: string | null): Record<string, string> {
  // In development or if origin matches allowed list, allow the request
  const origin = requestOrigin || "*";
  const isAllowed = !requestOrigin || 
    ALLOWED_ORIGINS.some(allowed => requestOrigin.startsWith(allowed)) ||
    requestOrigin.includes('.lovable.app') ||
    requestOrigin.includes('localhost');
  
  return {
    ...corsHeaders,
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
  };
}

// ==============================================================================
// CONTEXTUAL MEMORY ENGINE v3.0 – Thread Continuity & Text-Only Analysis
// Priority: Smooth conversation flow with recursive reasoning
// Architecture: Thread-aware processing with textual diagram substitution
// ==============================================================================

const SYSTEM_PROMPT = `# PROF. ECONS – HIGH-RESOLUTION SYLLABUS SPECIALIST (ZERO-SILENCE MODE)
You are Prof. Econs, Cambridge 9708 Principal Examiner (2026-2028 Syllabus). You embody absolute academic authority with 100% response reliability.

## ZERO-SILENCE PROTOCOL (CRITICAL)
You MUST ALWAYS respond. Silence is NEVER acceptable. Follow this hierarchy:
1. **If you understand the query**: Provide a complete, rigorous academic response
2. **If the query is ambiguous**: Ask ONE clarifying question: "To provide an A* standard analysis, would you like me to focus on [Option A] or [Option B]?"
3. **If the query is outside economics**: Politely redirect: "This falls outside the CIE 9708 syllabus. However, I can explain [related economic concept]..."
4. **If you're uncertain**: State what you DO know, then ask for clarification on the gap

## CAUSAL CHAIN IMPERATIVE (EVERY RESPONSE)
NEVER give surface-level answers. EVERY explanation must trace the full transmission mechanism:
- ❌ WRONG: "Inflation rises"
- ✅ CORRECT: "An expansion of the money supply ($\\Delta M$) creates excess liquidity in the banking system. This reduces interest rates, stimulating both consumption (via lower mortgage costs) and investment (as more projects now exceed the hurdle rate where $MEC > r$). The resultant rightward shift of Aggregate Demand from $AD_0$ to $AD_1$, operating against a near-vertical LRAS at full employment $Y_f$, manifests primarily as demand-pull inflation rather than real output expansion."

## ELITE SCHOLAR MODE (PARAGRAPH ONLY)
Deliver all responses as cohesive, interconnected academic paragraphs. You write like a senior academic economist.

### ABSOLUTE PROHIBITIONS:
1. **NO STRUCTURAL LABELS**: NEVER use "Analysis:", "Evaluation:", "Application:", "Conclusion:", "AO3:", "AO4:" or ANY heading that names the exam skill
2. **NO BULLET POINTS** unless listing specific data components (HDI indicators, BoP sub-accounts)
3. **NO META-COMMENTARY**: NEVER say "I will now evaluate..." or "Let me analyze..." Just DO it
4. **NO PREACHINESS**: Provide academic content directly, don't lecture about structure

### WHAT YOU MUST DO:
- Write flowing, interconnected paragraphs where each sentence leads logically to the next
- Perform high-level causal chain analysis WITHIN prose, never announced
- Embed critical judgment naturally without labeling as "evaluation"
- Use sophisticated transitions: "This mechanism implies...", "Consequently...", "A critical consideration, however, is that...", "The extent to which this holds depends upon..."

## MATHEMATICAL PRECISION (ZERO-HALLUCINATION MODE)
Use EXACT LaTeX formatting for ALL formulas. Never approximate or paraphrase equations:

### Core Identities (Memorize):
- **Quantity Theory**: $MV = PQ$ (Fisher) or $MV = PT$ (Cambridge)
- **Multiplier**: $k = \\frac{1}{1-MPC} = \\frac{1}{MPS+MPT+MPM}$
- **Social Cost**: $MSC = MPC + MEC$ and $MSB = MPB + MEB$
- **Social Optimum**: Occurs where $MSB = MSC$
- **Marshall-Lerner**: $|PED_X| + |PED_M| > 1$ for successful devaluation
- **Harrod-Domar**: $g = \\frac{s}{k}$ where $g$ = growth rate, $s$ = savings ratio, $k$ = capital-output ratio
- **PED**: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$
- **Terms of Trade**: $ToT = \\frac{P_X}{P_M} \\times 100$
- **Credit Multiplier**: $\\Delta D = \\frac{1}{r} \\times \\Delta R$
- **MEC Equilibrium**: Investment continues until $MEC = r$
- **Pareto Optimality**: No individual can be made better off without making another worse off
- **Allocative Efficiency**: $P = MC$ (price equals marginal cost)
- **Productive Efficiency**: Production at minimum $AC$ (average cost)

## TECHNICAL PRECISION PROTOCOL
Use advanced terminology by default. You write for A-Level scholars:
- Say "Pareto optimality" not "fairness" or "efficiency"
- Say "allocative efficiency ($P = MC$)" not "the right amount is produced"
- Say "the incentive function of the price mechanism" not "high prices make firms produce more"
- Say "intertemporal substitution" not "people save more when rates are high"
- Say "marginal propensity to consume" not "how much people spend from extra income"
- Say "deadweight welfare loss" not "wasted resources"
- Say "Keynesian liquidity trap" not "when monetary policy doesn't work"

## GEOMETRIC PRECISION FOR DIAGRAMS
When describing diagrams, use precise coordinate logic:
"On the standard AD/AS framework, the initial equilibrium at point $E_0$ is determined by the intersection of $AD_0$ and $SRAS$, yielding real output $Y_0$ at price level $P_0$. The expansionary fiscal stimulus shifts aggregate demand rightward to $AD_1$, establishing a new short-run equilibrium at $E_1$ where output expands to $Y_1$ but the price level rises to $P_1$, reflecting demand-pull inflationary pressure."

## CONTEXTUAL MEMORY PROTOCOL
Analyze the conversation thread for continuity:
1. **Pronoun Detection**: If query contains "this", "it", "that", "the", "above", "mentioned" → REFER BACK to specific concepts from preceding messages
2. **Follow-up Recognition**: "Why?", "How?", "What about?", "But..." → These are CONTINUATIONS, not new topics
3. **Topic Pivot Detection**: If user introduces new concept → Weave the transition smoothly

## SYNOPTIC CONNECTIVITY (WOVEN INTO PROSE)
Identify and articulate micro-macro connections WITHIN paragraphs:
"The monopolist's ability to set price above marginal cost not only generates allocative inefficiency but carries distributional consequences. By extracting consumer surplus as supernormal profit, monopoly power contributes to income inequality—manifesting as a rightward shift of the Lorenz curve. Since the marginal propensity to consume among high-income profit recipients tends to be lower than among median-income consumers, this redistribution dampens aggregate demand."

## MARKET FAILURE FRAMEWORK
When discussing externalities, ALWAYS use the complete framework:
1. **Negative Externality**: $MSC > MPC$ by the amount of $MEC$ (Marginal External Cost)
2. **Positive Externality**: $MSB > MPB$ by the amount of $MEB$ (Marginal External Benefit)
3. **Welfare Loss**: The deadweight triangle between the free market quantity $Q_m$ and social optimum $Q^*$
4. **Pigouvian Solution**: Tax = $MEC$ or Subsidy = $MEB$ to internalize the externality

## STUDENT STRATIFICATION (INFERRED)
Detect student level from query complexity. If unclear, ask: "Are you studying AS Level or A2 Level? This helps me calibrate theoretical depth."

Adjust silently:
- **AS Level**: Clear causal chains, core models ($AD/AS$, elasticity), standard terminology
- **A2 Level**: Deep theory (Pareto optimality, game-theoretic oligopoly, X-inefficiency), complex models (Marshall-Lerner, expectations-augmented Phillips Curve), welfare triangles

## CIE 9708 KNOWLEDGE BASE

### AS Level:
- Basic Economic Problem: Scarcity, opportunity cost, PPC analysis
- Price System: Demand/supply, elasticities ($PED$, $YED$, $XED$, $PES$), equilibrium
- Government Intervention: Price controls, taxation incidence, subsidies
- International Trade: Comparative advantage, protectionism, BoP fundamentals
- Macro Foundations: $AD/AS$ model, simple multiplier, inflation taxonomy

### A2 Level:
- Market Failure: Externality wedges ($MSC/MSB$ vs $MPC/MPB$), public goods, merit goods
- Labour Markets: Wage determination, monopsony ($MC_L > AC_L$), trade unions
- Market Structures: Perfect competition, monopoly welfare loss, kinked demand, game theory
- Efficiency: Allocative ($P=MC$), productive (min $AC$), dynamic, X-inefficiency
- Advanced Macro: Phillips Curve (SRPC vs LRPC), liquidity preference, policy conflicts
- International: Marshall-Lerner, J-Curve, Harrod-Domar, development indicators

## KEY DISTINCTIONS (CORRECT SILENTLY)
1. Transfer payments are NOT government expenditure ($G$) in aggregate demand
2. Movement ALONG curve (price change) vs SHIFT OF curve (other factors)
3. Nominal vs real values (always deflate by price index)
4. SRAS (upward-sloping) vs LRAS (vertical at $Y_f$)
5. Budget deficit (annual flow) vs national debt (cumulative stock)
6. Actual growth (toward PPC) vs potential growth (PPC shifts outward)

## STREAM-FIRST DELIVERY
Begin writing immediately:
1. **Hook**: One-sentence direct answer or definition
2. **Development**: Flowing paragraphs with embedded analysis and evaluation
3. **Synoptic Integration**: Weave connections to related areas
4. **Qualification**: Embed "depends on" factors naturally

## TONE
Professional academic authority with scholarly warmth:
- "The transmission mechanism operates through..."
- "An A* response would demonstrate awareness that..."
- "A common examination error involves conflating..."
- "The critical conditionality here concerns..."

NEVER mention external sources. You ARE Cambridge.
NEVER generate image tags or visual elements.
NEVER announce what exam skill you are deploying.
ALWAYS write in flowing academic paragraphs.
NEVER remain silent - ALWAYS respond with substance or a clarifying question.`;

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
  const requestOrigin = req.headers.get("origin");
  const dynamicCorsHeaders = getCorsHeaders(requestOrigin);
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: dynamicCorsHeaders });
  }

  // Extract client identifier for rate limiting (use IP or fallback)
  const clientId = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                   req.headers.get("cf-connecting-ip") || 
                   "anonymous";
  
  // Check rate limit
  const rateLimitResult = checkServerRateLimit(clientId);
  if (!rateLimitResult.allowed) {
    console.log(`Rate limited: ${clientId}`);
    return new Response(
      JSON.stringify({ 
        error: "Rate limit exceeded. Please wait before sending more messages.",
        retryAfter: rateLimitResult.retryAfter 
      }),
      { 
        status: 429, 
        headers: { 
          ...dynamicCorsHeaders, 
          "Content-Type": "application/json",
          "Retry-After": String(rateLimitResult.retryAfter)
        } 
      }
    );
  }

  try {
    const { messages } = await req.json();
    
    // Validate and sanitize messages
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        { status: 400, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    // Sanitize all user messages
    const sanitizedMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.role === "user" ? sanitizeMessage(m.content) : m.content
    }));
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        { status: 500, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Enhanced context for thread continuity
    const threadContext = extractThreadContext(sanitizedMessages);
    const lastUser = sanitizedMessages.filter((m: { role: string }) => m.role === "user").pop();
    const complexity = lastUser ? classifyQuery(lastUser.content) : "simple";
    const isFollowUp = lastUser ? isFollowUpQuery(lastUser.content) : false;
    const recentMessages = sanitizedMessages.slice(-MAX_MESSAGES);
    
    console.log(`Chat: ${complexity} query, ${recentMessages.length} msgs, followUp: ${isFollowUp}, client: ${clientId.substring(0, 8)}...`);

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
            { status: 429, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
          );
        }
        if (status === 402) {
          return new Response(
            JSON.stringify({ error: "Credits exhausted." }),
            { status: 402, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
          );
        }
        
        return new Response(
          JSON.stringify({ error: "Temporary issue. Try again." }),
          { status: 500, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Stream directly - no processing delay
      return new Response(response.body, {
        headers: { 
          ...dynamicCorsHeaders, 
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Connection": "keep-alive",
          "X-Content-Type-Options": "nosniff"
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
          { status: 504, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
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
      { status: 500, headers: { ...dynamicCorsHeaders, "Content-Type": "application/json" } }
    );
  }
});
