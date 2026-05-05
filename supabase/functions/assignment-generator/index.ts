import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUBJECT_BLUEPRINTS: Record<string, string> = {
  economics: `Domain: Economics. Use AO1 (knowledge), AO2 (application), AO3 (analysis), AO4 (evaluation). Include real-world data (World Bank, IMF, OECD, SBP for Pakistan), diagrams (described as figures: AD/AS, supply/demand, PPF, cost curves), elasticity calculations, and policy evaluation. Reference theorists: Smith, Keynes, Friedman, Hayek, Sen.`,
  business: `Domain: Business. Use Porter's Five Forces, SWOT, PESTLE, Ansoff matrix, BCG. Include financial ratios, break-even, NPV, marketing mix (7Ps), HR theories (Maslow, Herzberg, Mayo), and case studies (HBR-style). Apply CSR and stakeholder analysis.`,
  law: `Domain: Law. Use IRAC structure (Issue, Rule, Application, Conclusion). Cite leading cases and statutes (with neutral citation), apply ratio decidendi vs obiter dicta, analyze precedent and statutory interpretation (literal, golden, mischief, purposive). For Pakistan boards include constitutional law (1973 Constitution) and PPC where relevant.`,
  psychology: `Domain: Psychology. Use APA 7 style. Include hypotheses, IV/DV, operationalisation, sampling, ethics (BPS guidelines), statistical analysis (descriptive + inferential), and theoretical frameworks (cognitive, behaviourist, biological, psychodynamic, humanistic). Cite seminal studies (Milgram, Asch, Loftus, Bandura, Baddeley).`,
  accounting: `Domain: Accounting. Apply IFRS/IAS standards (and ICAP guidelines for Pakistan). Include double-entry workings, T-accounts, trial balance, income statement, SOFP, cash flow, ratio analysis (liquidity, profitability, efficiency, gearing), variance analysis, and ethical considerations (IFAC code).`,
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
  practice_questions: `A graded practice-question pack: 15–25 questions split across short-answer, structured, and extended-response. Provide marks per question, an indicative time allocation, complete model answers, mark scheme bullet points, and an examiner's commentary on common mistakes.`,
  quiz: `A timed quiz: 20 multiple-choice questions (4 options each, only one correct), 5 true/false, and 5 short-answer questions. Provide an answer key with one-line justifications, total marks, recommended duration (e.g., 30 min), and difficulty rating per item (E/M/H).`,
  exam_paper: `A full mock examination paper following the chosen board's format. Include: cover sheet with instructions, time allowed, total marks, paper structure (Section A: MCQs / Section B: Short / Section C: Extended), each question with marks shown in brackets, command words from the board syllabus, plus a separate detailed Mark Scheme with point-by-point AO descriptors and a grade boundary table.`,
  mcq_bank: `A structured MCQ bank of 40 multiple-choice questions organized by topic and difficulty (Easy/Medium/Hard), each with 4 options, correct answer marked, and a 1–2 line explanation of why other distractors are wrong.`,
};

const LEVEL_GUIDANCE: Record<string, string> = {
  igcse: `IGCSE / O-Level (ages 14–16, Cambridge/Edexcel). Clear concepts, foundational depth, scaffolded explanations, board command words.`,
  'as-level': `AS-Level (Year 12, Cambridge/Edexcel). Analytical depth, intermediate applications, board-style command words.`,
  'a-level': `A-Level / A2 (Year 13, Cambridge/Edexcel). High analytical and evaluative rigor (AO3/AO4 dominant), synoptic links.`,
  ib: `IB Diploma (HL/SL). TOK linkage, international perspectives, IA-quality methodology.`,
  undergraduate: `Undergraduate university level. Theoretical sophistication, primary literature engagement, critical evaluation.`,
  postgraduate: `Postgraduate / Master's level. Original synthesis, advanced methodology, gap-in-literature framing.`,
  fbise_ssc: `FBISE Matric / SSC (Class 9–10) — Federal Board of Intermediate and Secondary Education, Islamabad. Follow Curriculum 2024 (SLOs based on National Curriculum of Pakistan). Use FBISE assessment framework: ~40% MCQs/short, ~60% structured/extended. Use bilingual key terms (English with Urdu equivalents) where appropriate. Cite NBF / PCTB textbooks.`,
  fbise_hssc: `FBISE Intermediate / HSSC (Class 11–12, FA/FSc/ICS/ICOM). Curriculum 2024 SLOs. Paper structure: Section A MCQs (single best), Section B short-response, Section C extended-response. Reference FBISE model papers and Scheme of Studies.`,
  bise_ssc: `BISE Matric / SSC (Class 9–10) — Provincial Boards (Lahore, Karachi, Peshawar, Rawalpindi, Multan, Gujranwala, etc.) under PCTB / Sindh Textbook Board. Follow Punjab/Sindh curriculum, use PCTB-prescribed textbooks, board paper pattern (Objective + Subjective).`,
  bise_hssc: `BISE Intermediate / HSSC (FA/FSc/ICS, Class 11–12) — Provincial BISE boards. Follow PCTB syllabus, BISE paper pattern (Section A: MCQs, B: Short, C: Long), Punjab examination commission marking style.`,
  aku_eb_ssc: `Aga Khan University Examination Board — SSC (Class 9–10). Conceptual, application-heavy SLO-based questions. Higher-order thinking emphasised.`,
  aku_eb_hssc: `Aga Khan University Examination Board — HSSC (Class 11–12). Strong analytical and applied focus, internationally benchmarked rigour within Pakistani curriculum.`,
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { subject, topic, assignment_type, level, difficulty, word_count, additional_requirements } = await req.json();

    if (!subject || !topic || !assignment_type || !level) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const USER_KEY = Deno.env.get("chatbotkey") || Deno.env.get("openai") || Deno.env.get("OPENAI_API_KEY");
    const API_KEY = LOVABLE_API_KEY || USER_KEY;
    if (!API_KEY) {
      return new Response(JSON.stringify({ error: "AI API key not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const subjectBlueprint = SUBJECT_BLUEPRINTS[subject.toLowerCase()] || SUBJECT_BLUEPRINTS.economics;
    const typeBlueprint = ASSIGNMENT_TYPES[assignment_type] || ASSIGNMENT_TYPES.essay;
    const levelGuide = LEVEL_GUIDANCE[level] || LEVEL_GUIDANCE['a-level'];
    const targetWords = Math.min(Math.max(parseInt(word_count) || 1500, 500), 5000);

    const DIFFICULTY_GUIDE: Record<string, string> = {
      easy: `EASY tier — foundational recall and direct application. Short command words (define, state, identify, calculate basic). Low cognitive load, minimal multi-step reasoning. Suitable as warm-up or for weaker students.`,
      medium: `MEDIUM tier — balanced application and analysis. Command words: explain, analyse, compare, calculate (multi-step). Standard exam expectation for the level.`,
      difficult: `DIFFICULT tier — high-order evaluation, synthesis, and unfamiliar contexts. Command words: evaluate, justify, critically discuss, derive, prove. Stretch-and-challenge questions targeting top-band (A*/Distinction) candidates.`,
      mixed: `MIXED difficulty — explicitly label every question with [E] / [M] / [H]. Distribute roughly 30% Easy, 40% Medium, 30% Hard, ordered easiest to hardest within each section.`,
    };
    const difficultyGuide = DIFFICULTY_GUIDE[difficulty] || DIFFICULTY_GUIDE.medium;

    const isPakBoard = level.startsWith('fbise') || level.startsWith('bise') || level.startsWith('aku');

    const systemPrompt = `You are EconNexus Assignment Architect — an elite academic writer producing top-band, examiner-grade assignments, practice papers, quizzes, and full mock exams indistinguishable from a distinction-level expert's polished work.

CURRICULUM CONTEXT: ${levelGuide}
${isPakBoard ? `\nPAKISTAN BOARD COMPLIANCE: Strictly follow the board's official syllabus, command words, marking scheme structure, and paper pattern. Use the official subject SLOs (Student Learning Outcomes) wording. For matric/inter, use board-style instructions ("Attempt all questions", "Time Allowed", "Total Marks") on cover sheets. Marks should match the board's standard weighting.\n` : ''}
SUBJECT BLUEPRINT: ${subjectBlueprint}

ASSIGNMENT FORMAT: ${typeBlueprint}

DIFFICULTY CALIBRATION: ${difficultyGuide}

ACCURACY PROTOCOL — NON-NEGOTIABLE:
A. Every factual claim, statistic, formula, case citation, or definition MUST be verifiable against the official syllabus, prescribed textbook, peer-reviewed source, or recognised institution (World Bank, IMF, OECD, IFRS, BPS, ICAP, FBISE/PCTB, AKU-EB, etc.). If you are not ≥95% confident, STATE the uncertainty explicitly ("approx.", "as of [year]") rather than fabricate.
B. Use only real authors, real cases, real statutes, real datasets, real years. NEVER invent citations, court cases, journal volumes, page numbers, or DOIs. If unsure of a precise reference, give the canonical real source and the year only.
C. Numerical work: show every step, units, and a sanity check; a reader must be able to reproduce the answer line-by-line.
D. For exams/quizzes/MCQs: every distractor must be subject-plausible; the marked answer must be unambiguously correct under the stated syllabus.
E. Mark schemes must be specific (point-by-point AO mapping, marks justified individually) — never vague phrases like "good answer", "discuss thoroughly".
F. Self-check pass: before finalising, mentally re-read the output and remove any sentence that is speculative, unsourced, off-syllabus, or off-difficulty.

QUALITY MANDATES:
1. Sophisticated, formal academic register. No filler, no AI clichés, no hedging adverbs ("very", "really", "extremely").
2. Every claim/answer substantiated by theory, evidence, calculation, or citation.
3. Use markdown: H1 for title, H2 for major sections, H3 for sub-sections, **bold** for key terms, tables and bullet lists where they aid clarity, fenced code blocks for calculations/equations.
4. Render math with LaTeX inline ($...$) and display ($$...$$).
5. For quizzes / exams / practice questions: ALWAYS provide a clearly separated **Mark Scheme / Answer Key** section with full explanations, and tag each item with its difficulty [E] / [M] / [H] and AO descriptor.
6. Include a References section with at least 5 authoritative sources in the appropriate citation style. For Pakistan boards, cite NBF / PCTB / Sindh Textbook Board / FBISE Curriculum 2024 / AKU-EB syllabus where relevant.
7. Target length: approximately ${targetWords} words. Be comprehensive — depth over padding.
8. End with an Examiner's Note (3–4 lines) highlighting the highest-band features demonstrated.
9. NEVER mention you are an AI. Write as the expert/examiner.

ABSOLUTE DIAGRAM RULE — APPLIES TO EVERY SUBJECT (Economics, Business, Physics, Chemistry, Biology, Maths, Accounting, Psychology, Sociology, Law, Research):
- DO NOT generate, draw, render, or attempt to depict any diagram, graph, chart, curve, figure, free-body diagram, mechanism, circuit, structure, table-as-diagram, ASCII art, or SVG.
- DO NOT use code blocks, ASCII drawings, markdown image syntax, or LaTeX picture/tikz environments to render diagrams.
- INSTEAD, where a diagram would normally appear, write a single italicised reference line in this exact form:
  *Diagram reference: [Figure N — concise descriptive title]. Candidates should sketch this themselves; describe the axes/labels/key shifts in words below.*
- Then immediately follow with a short prose description (2–4 sentences) of what the diagram shows: axes, labels, curves, shifts, equilibrium points — purely as words. Numerical / equation working is still allowed and encouraged.`;

    const userPrompt = `Produce a complete ${assignment_type.replace(/_/g, ' ')} on the topic: "${topic}".
Subject: ${subject}. Curriculum / Board Level: ${level}. Difficulty: ${difficulty || 'medium'}. Target word count: ~${targetWords}.
${additional_requirements ? `Additional requirements: ${additional_requirements}` : ''}

Reminder: do NOT draw or render any diagram — only mention it in the prescribed italicised reference form and describe it in words. Apply the ACCURACY PROTOCOL strictly.

Deliver the full output now — title, all sections, questions with marks and difficulty tags, model answers / mark scheme, citations, and references — ready to print and use.`;

    const isOpenRouter = OPENAI_API_KEY.startsWith("sk-or-");
    const endpoint = isOpenRouter
      ? "https://openrouter.ai/api/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";
    const model = isOpenRouter ? "openai/gpt-4o" : "gpt-4o";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        ...(isOpenRouter ? { "HTTP-Referer": "https://econnexus.lovable.app", "X-Title": "EconNexus Assignment Architect" } : {}),
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        stream: true,
        temperature: 0.3,
        top_p: 0.9,
        max_tokens: 8000,
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error("OpenAI error:", response.status, t);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 401 || response.status === 402) {
        return new Response(JSON.stringify({ error: "OpenAI auth/credits issue. Please check the API key." }), {
          status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "AI provider error" }), {
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
