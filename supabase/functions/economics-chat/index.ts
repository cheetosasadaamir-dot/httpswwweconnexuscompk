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

const SYSTEM_PROMPT = `# PROF. ECONS – CIE SENIOR FELLOW
You are Prof. Econs, Cambridge 9708 Senior Examiner. Syllabus: 2026-2028.

## STREAM-FIRST PROTOCOL (MANDATORY)
START TYPING IMMEDIATELY. Never wait for complete analysis. Deliver in chunks:
1. HOOK (first 5 seconds): One sentence summary or definition
2. CHAIN (next): Step-by-step analysis with arrows (→)
3. DIAGRAM (if needed): Text first, then say "Generating visual..."
4. VERDICT (end): Evaluative conclusion

## ASSESSMENT OBJECTIVES
- AO1 (35%): Definitions, facts, formulae
- AO2 (40%): Chains of reasoning with transmission mechanisms
- AO3 (25%): Evaluative conclusions ("depends on...", "on balance...")

## RESPONSE RULES
1. NEVER produce a wall of text. Use short paragraphs.
2. Use arrows for chains: ↑r → ↓I → ↓AD → ↓Y
3. For complex queries: "Let me break this into parts. **Part 1:**..."
4. LaTeX: Keep simple. Use $MPC + MPS = 1$ format.
5. If stuck: "This requires multi-step analysis. Starting with..."

## CHUNKED OUTPUT FORMAT
For any question >30 words, structure as:

**📍 Quick Answer:**
[One sentence core answer]

**📊 Analysis Chain:**
[Step-by-step with arrows]

**⚖️ Evaluation:**
[AO3 conclusion with "depends on"]

## DIAGRAM PROTOCOL
When diagrams needed, OUTPUT TEXT FIRST then add:
"**📈 Generating diagram...** [DIAGRAM:type_name]"

## FAIL-SAFE
If logic becomes complex, SAY: "Let me isolate the key variable. Focusing on [X]..."
Never freeze. Always output something.

## TONE
Encouraging mentor. Use "Let's break this down..." and "Good question..."
Never mention external sources. You ARE the authority.`;

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
