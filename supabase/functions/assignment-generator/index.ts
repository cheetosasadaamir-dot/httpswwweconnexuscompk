import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUBJECT_BLUEPRINTS: Record<string, string> = {
  economics: `Domain: Economics. Use AO1 (knowledge), AO2 (application), AO3 (analysis), AO4 (evaluation). Include real-world data (World Bank, IMF, OECD), diagrams (described as figures: AD/AS, supply/demand, PPF, cost curves), elasticity calculations, and policy evaluation (efficiency, equity, opportunity cost). Reference theorists: Smith, Keynes, Friedman, Hayek, Sen.`,
  business: `Domain: Business. Use Porter's Five Forces, SWOT, PESTLE, Ansoff matrix, BCG. Include financial ratios, break-even, NPV, marketing mix (7Ps), HR theories (Maslow, Herzberg, Mayo), and case studies (HBR-style). Apply CSR and stakeholder analysis.`,
  law: `Domain: Law. Use IRAC structure (Issue, Rule, Application, Conclusion). Cite leading cases and statutes (with neutral citation), apply ratio decidendi vs obiter dicta, analyze precedent and statutory interpretation (literal, golden, mischief, purposive). Cover constitutional, contract, tort, criminal, or specified branch.`,
  psychology: `Domain: Psychology. Use APA 7 style. Include hypotheses, IV/DV, operationalisation, sampling, ethics (BPS guidelines), statistical analysis (descriptive + inferential), and theoretical frameworks (cognitive, behaviourist, biological, psychodynamic, humanistic). Cite seminal studies (Milgram, Asch, Loftus, Bandura, Baddeley).`,
  accounting: `Domain: Accounting. Apply IFRS/IAS standards. Include double-entry workings, T-accounts, trial balance, income statement, SOFP, cash flow, ratio analysis (liquidity, profitability, efficiency, gearing), variance analysis, and ethical considerations (IFAC code).`,
  sociology: `Domain: Sociology. Use functionalist, Marxist, feminist, interactionist, postmodernist perspectives. Cite Durkheim, Weber, Marx, Parsons, Goffman, Foucault, Butler. Include methodology evaluation (PET — practical, ethical, theoretical) and contemporary empirical evidence.`,
  research: `Domain: Research Methodology. Structure: Abstract, Introduction, Literature Review, Methodology, Results, Discussion, Conclusion, References (Harvard/APA). Include research question, hypothesis, ontology/epistemology stance, sampling strategy, validity/reliability/triangulation, ethical approval, and limitations.`,
  mathematics: `Domain: Mathematics. Provide full rigorous proofs/derivations with justification at each step. Cover algebra, calculus, statistics, mechanics, or pure as required. Use formal notation, lemmas, theorems, QED. Include worked examples and edge cases.`,
  physics: `Domain: Physics. Derive equations from first principles, include unit analysis (SI), error propagation, free-body diagrams (described), and link to fundamental laws (Newton, Maxwell, thermodynamics, quantum, relativity). Reference experimental setups.`,
  chemistry: `Domain: Chemistry. Include balanced equations, mechanisms (curly arrows described), thermodynamic/kinetic data, IUPAC nomenclature, spectroscopy interpretation (NMR, IR, MS), and stoichiometric calculations. Cover organic, inorganic, physical as required.`,
  biology: `Domain: Biology. Use precise terminology (cellular, molecular, ecological scale). Include diagrams (described), experimental design with controls, statistical tests (chi-square, t-test), and link to systems: genetics, evolution, physiology, ecology, biochemistry.`,
};

const ASSIGNMENT_TYPES: Record<string, string> = {
  essay: `A formal academic essay with introduction (thesis), 3–5 body paragraphs (PEEL/PEAL), counter-argument, and conclusion synthesizing argument.`,
  report: `A structured report with title page, executive summary, numbered sections, findings, analysis, recommendations, and references.`,
  research_paper: `A full research paper following IMRaD structure with literature review and citations.`,
  case_study: `An in-depth case analysis with background, problem statement, options, evaluation matrix, recommendation, and implementation plan.`,
  problem_set: `A structured problem set with 6–10 graduated problems, full worked solutions, mark scheme, and common pitfalls.`,
  lab_report: `A full lab report: aim, hypothesis, apparatus, method, results (tables/graphs described), discussion, error analysis, conclusion.`,
  presentation: `A 10-slide presentation outline with speaker notes, visual cues, and discussion questions per slide.`,
};

const LEVEL_GUIDANCE: Record<string, string> = {
  igcse: `IGCSE / O-Level (ages 14–16). Clear concepts, foundational depth, scaffolded explanations.`,
  'as-level': `AS-Level (Year 12). Analytical depth, intermediate applications, board-style command words.`,
  'a-level': `A-Level / A2 (Year 13). High analytical and evaluative rigor (AO3/AO4 dominant), synoptic links.`,
  ib: `IB Diploma (HL/SL). TOK linkage, international perspectives, IA-quality methodology.`,
  undergraduate: `Undergraduate university level. Theoretical sophistication, primary literature engagement, critical evaluation.`,
  postgraduate: `Postgraduate / Master's level. Original synthesis, advanced methodology, gap-in-literature framing.`,
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { subject, topic, assignment_type, level, word_count, additional_requirements } = await req.json();

    if (!subject || !topic || !assignment_type || !level) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const subjectBlueprint = SUBJECT_BLUEPRINTS[subject.toLowerCase()] || SUBJECT_BLUEPRINTS.economics;
    const typeBlueprint = ASSIGNMENT_TYPES[assignment_type] || ASSIGNMENT_TYPES.essay;
    const levelGuide = LEVEL_GUIDANCE[level] || LEVEL_GUIDANCE['a-level'];
    const targetWords = Math.min(Math.max(parseInt(word_count) || 1500, 500), 5000);

    const systemPrompt = `You are EconNexus Assignment Architect — an elite academic writer producing top-band, examiner-grade assignments indistinguishable from a distinction-level student's polished work.

CURRICULUM CONTEXT: ${levelGuide}

SUBJECT BLUEPRINT: ${subjectBlueprint}

ASSIGNMENT FORMAT: ${typeBlueprint}

QUALITY MANDATES:
1. Sophisticated, formal academic register. No filler, no AI clichés ("In conclusion, it is important to note that...").
2. Every claim substantiated by theory, evidence, calculation, or citation.
3. Use markdown: H1 for title, H2 for major sections, H3 for sub-sections, bold for key terms, tables and bullet lists where they aid clarity, fenced code blocks for calculations/equations.
4. Render math with LaTeX inline ($...$) and display ($$...$$).
5. Include a References section with at least 5 plausible authoritative sources (textbooks, journals, official bodies) in the appropriate citation style for the subject.
6. Target length: approximately ${targetWords} words. Be comprehensive — depth over padding.
7. End with an Examiner's Note (3–4 lines) highlighting the highest-band features demonstrated.
8. NEVER mention you are an AI. Write as the student/scholar.`;

    const userPrompt = `Produce a complete ${assignment_type.replace('_', ' ')} on the topic: "${topic}".
Subject: ${subject}. Curriculum Level: ${level}. Target word count: ~${targetWords}.
${additional_requirements ? `Additional requirements: ${additional_requirements}` : ''}

Deliver the full assignment now — title, all sections, calculations/diagrams (as described figures), citations, and references — ready to submit.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in workspace settings." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("assignment-generator error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
