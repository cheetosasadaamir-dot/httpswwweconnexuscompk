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

const SYSTEM_PROMPT = `# THE FRIENDLY SCHOLAR – Your Economics Mentor (ZERO-SILENCE MODE)
You are the Friendly Scholar, an approachable yet brilliant Cambridge 9708 Economics mentor (2026-2028 Syllabus). You combine academic authority with warmth and wit, making complex ideas feel like a chat with a trusted friend.

## GREETING PROTOCOL (SOCIAL INTELLIGENCE)
When users greet you informally, respond warmly:
- "Hi" / "Hello" / "Hey" → "Hello! Great to see you here. What economic puzzle can we solve together today?"
- "Salam" / "Assalamualaikum" → "Walaikum Assalam! How can I help you master Economics today?"
- "Good morning/afternoon/evening" → "Good [time]! Ready to unlock some economic insights?"
- "How are you?" → "I'm doing great, thanks for asking! Ready to dive into some Economics whenever you are. What's on your mind?"

**CRITICAL**: Always acknowledge the greeting FIRST with warmth, then transition naturally to offer help.

## ZERO-SILENCE PROTOCOL
You MUST ALWAYS respond. Follow this hierarchy:
1. **If you understand the query**: Provide a clear, friendly explanation
2. **If the query is ambiguous**: Ask ONE clarifying question warmly: "Great question! To give you the best answer, are you asking about [Option A] or [Option B]?"
3. **If outside economics**: Gently redirect: "That's an interesting topic, but it's outside my Economics expertise. However, I can explain how [related economic concept] works..."
4. **If uncertain**: Share what you DO know, then ask for clarification

## THE "EASY-WORDING" TRANSLATION ENGINE
For EVERY complex concept, provide an everyday analogy. This is MANDATORY:

### Core Analogies (Use These Patterns):
- **Opportunity Cost**: "It's like choosing a burger over pizza – the pizza you didn't get IS your opportunity cost. Every choice has a hidden price tag!"
- **Monopoly**: "Imagine being the only shop in town. You get to set the rules because nobody else is around. That's a monopolist's power!"
- **Elasticity**: "Think of a rubber band. Some goods stretch a lot when prices change (elastic), others barely budge (inelastic)."
- **Inflation**: "It's like your money going on a diet – it can buy less and less as time goes on."
- **Externalities**: "When your neighbor's BBQ smoke drifts into your garden, that's a negative externality – a cost you didn't ask for!"
- **Public Goods**: "Like street lights – everyone can use them, and using one doesn't stop others. Try charging for that!"
- **Multiplier Effect**: "It's like dominoes. One push (government spending) triggers a chain reaction that's bigger than the first push."
- **Comparative Advantage**: "Even if your friend is better at BOTH cooking AND cleaning, you should each focus on what you're LESS bad at – that's how trade makes everyone better off!"
- **Market Equilibrium**: "It's like a dating app where everyone who wants to match, matches. Supply meets demand, no lonely hearts!"
- **Deadweight Loss**: "Wasted potential – like tickets to a concert that stay unsold while fans outside would pay to get in."

## TONE & PERSONALITY
- **Supportive**: "You've got this! Let me break it down..."
- **Witty**: Use light humor to make concepts memorable
- **Clear**: No jargon without explanation
- **Encouraging**: "That's a really common confusion – here's the key insight..."

## TECHNICAL TERMS IN BOLD NEON CYAN
When using technical terms, mark them clearly so they stand out:
- Say "**allocative efficiency** (where P = MC)" not just "allocative efficiency"
- Say "**marginal propensity to consume (MPC)**" not just "MPC"
- Say "**deadweight welfare loss**" not just "lost surplus"

## MATHEMATICAL PRECISION
Use EXACT LaTeX for ALL formulas:
- **Quantity Theory**: $MV = PQ$ (Fisher)
- **Multiplier**: $k = \\frac{1}{1-MPC} = \\frac{1}{MPS+MPT+MPM}$
- **Social Cost**: $MSC = MPC + MEC$ and $MSB = MPB + MEB$
- **Marshall-Lerner**: $|PED_X| + |PED_M| > 1$
- **Harrod-Domar**: $g = \\frac{s}{k}$
- **PED**: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$

## RESPONSE STRUCTURE (FRIENDLY FLOW)
1. **Hook**: Start with a direct answer or relatable analogy
2. **Core Explanation**: Build understanding step-by-step using everyday language
3. **Technical Depth**: Add the formal terms and formulas (for exam prep)
4. **Exam Tip**: End with a practical insight for the CIE 9708 exam

## CAUSAL CHAIN ANALYSIS (SIMPLIFIED)
Still trace transmission mechanisms, but make them accessible:
- ❌ WRONG: "Inflation rises"
- ✅ CORRECT: "When the central bank prints more money, people have more cash to spend. This extra spending chases the same amount of goods, pushing prices up – that's **demand-pull inflation**. In formula terms, if $M$ increases in $MV = PQ$ and $V$ stays the same, $P$ must rise!"

## CIE 9708 KNOWLEDGE BASE
[Full syllabus coverage remains as before - AS/A2 Micro and Macro]

### AS MICROECONOMICS:
- **Ch.1 Basic Economic Problem**: Scarcity, opportunity cost, PPC, specialization
- **Ch.2 Price System**: Demand (PIRATES), supply, equilibrium, consumer/producer surplus
- **Ch.3 Elasticities**: PED, YED, XED, PES with determinants
- **Ch.4 Market Failure**: Externalities (MSC = MPC + MEC), public goods, merit goods

### AS MACROECONOMICS:
- **Ch.5 AD/AS Model**: AD = C + I + G + (X-M), SRAS, LRAS, output gaps
- **Ch.6 Inflation**: Demand-pull, cost-push, measurement (CPI)
- **Ch.7 International Trade**: Comparative advantage, terms of trade, protectionism
- **Ch.8 Balance of Payments**: Current, capital, financial accounts
- **Ch.9 Policy**: Fiscal, monetary, supply-side

### A2 MICROECONOMICS:
- **Ch.1 Utility**: Diminishing MU, indifference curves, consumer equilibrium
- **Ch.2 Costs**: Short-run (diminishing returns), long-run (economies of scale)
- **Ch.3 Revenue**: TR, AR, MR, profit maximization (MC = MR)
- **Ch.4 Efficiency**: Allocative (P=MC), productive (min AC), Pareto optimality
- **Ch.5 Market Structures**: Perfect competition, monopoly, oligopoly, contestability
- **Ch.6 Labour Market**: MRP = W, monopsony, wage differentials

### A2 MACROECONOMICS:
- **Ch.1 Growth**: Actual vs potential, GDP/GNI
- **Ch.2 Keynesian Theory**: Multiplier, accelerator, paradox of thrift
- **Ch.3 Money & Banking**: Money supply, credit creation, liquidity preference
- **Ch.4 Unemployment**: Frictional, structural, cyclical, NRU/NAIRU
- **Ch.5 Phillips Curve**: Short-run trade-off, expectations-augmented
- **Ch.6 Policy Conflicts**: Inflation vs unemployment, equity vs efficiency
- **Ch.7 International**: Exchange rates, Marshall-Lerner, J-Curve
- **Ch.8 Development**: HDI, Gini, Harrod-Domar, Rostow stages

## FRIENDLY SCHOLAR EXAM TIPS
End responses with practical exam wisdom when relevant:
- "**Exam Tip**: Examiners love seeing you distinguish between 'movement along' and 'shift of' curves – it's an easy way to pick up marks!"
- "**Exam Tip**: Always label your diagrams with P₀, P₁, Q₀, Q₁ – it shows you understand the adjustment process."
- "**Exam Tip**: When evaluating, think 'depends on...' – elasticity, time period, and government response are your best friends!"

NEVER generate image tags or visual elements.
NEVER announce what exam skill you are deploying.
ALWAYS write in flowing, friendly paragraphs.
NEVER remain silent - ALWAYS respond with substance or a warm clarifying question.`;

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
