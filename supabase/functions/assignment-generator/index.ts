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
  essay: `A non-formulaic argumentative academic essay built around an original, debatable thesis (not a textbook restatement). Open with a real-world hook or paradox. Develop 3–5 PEEL/PEAL paragraphs each containing: a clear claim, theory-grounded reasoning, *contemporary* (last 5 yrs) empirical evidence with specific data, and a "So-what?" evaluative line. Embed at least one steel-manned counter-argument and a refutation. Conclude with a synthesis that explicitly links to a higher-order debate or unresolved question. Avoid generic five-paragraph templates.`,
  report: `A practitioner-grade structured report: title page, executive summary (≤150 words, decision-ready), numbered sections, methodology, findings table, critical analysis, prioritised recommendations (with cost/benefit and risk), and references. Include a decision matrix and at least one data-driven insight beyond surface description.`,
  research_paper: `A rigorous IMRaD research paper with a focused research question, identified gap in the literature, justified methodology (with limitations), data interpretation, theoretical contribution, and avenues for further research. Citations must be real and current.`,
  case_study: `A Harvard-style decision case: real or realistic scenario, stakeholder map, root-cause analysis (5-Whys or fishbone described in prose), 3 viable options with weighted evaluation matrix (criteria + scores + justification), recommendation with implementation roadmap, KPIs, and risk mitigation. Force the student to *choose* and defend.`,
  problem_set: `A scaffolded problem set of 8–12 graduated problems moving from skill-builders to multi-step "transfer" problems set in unfamiliar real-world contexts. Each problem must require reasoning beyond plug-and-chug. Provide a fully worked solution, an alternative method where applicable, a mark scheme, common-misconception callouts, and a one-line "stretch" extension.`,
  lab_report: `A full lab report: aim, testable hypothesis with rationale, variables (IV/DV/controls), apparatus, method (replicable), results (tables/graphs described in words), discussion linking results to theory, quantitative error analysis (% error, propagation), evaluation of validity/reliability, improvements, and conclusion.`,
  presentation: `A 10-slide presentation outline with: slide title, 3–5 bullet talking points, speaker notes (40–80 words), visual cue (described in words only), and one Socratic discussion question per slide that probes critical thinking rather than recall.`,
  practice_questions: `A graded practice-question pack of 15–25 items mixing short-answer, structured (a/b/c), data-response, and extended-response. Prioritise application and analysis over recall. Provide marks, indicative time, full model answers, mark-scheme bullets mapped to AOs, and an examiner's commentary on common mistakes per question.`,
  quiz: `A timed quiz: 20 MCQs (4 options, one unambiguously correct, distractors built from genuine student misconceptions), 5 true/false with a *justify-your-answer* line, and 5 short-answer application questions. Provide an answer key with reasoning, total marks, recommended duration, and difficulty tag [E/M/H] per item.`,
  exam_paper: `A full mock exam paper matching the chosen board's exact format and rubric. Cover sheet (instructions, time, total marks), Section A (MCQs) / B (Short) / C (Extended/Data-response/Essay), official command words, marks in brackets. Provide a separate detailed Mark Scheme with point-by-point AO descriptors, indicative content, levels-based marking grid, and a grade-boundary table.`,
  mcq_bank: `An MCQ bank of 40 items grouped by sub-topic and tagged [E/M/H]. Each item: 4 options, correct answer, and a 1–2 line explanation of why each distractor is wrong (diagnosing the misconception). Avoid trivia; target conceptual understanding and application.`,
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

    // ============================================================
    // WEEKLY LIMIT — 2 assignments per authenticated user per 7 days
    // ============================================================
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const authHeader = req.headers.get("Authorization") || "";
    const jwt = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    let authedUserId: string | null = null;
    if (jwt && jwt !== Deno.env.get("SUPABASE_PUBLISHABLE_KEY") && jwt !== Deno.env.get("SUPABASE_ANON_KEY")) {
      try {
        const ur = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
          headers: { Authorization: `Bearer ${jwt}`, apikey: SERVICE_KEY },
        });
        if (ur.ok) { const u = await ur.json(); authedUserId = u?.id ?? null; }
      } catch (_e) { /* ignore */ }
    }
    if (!authedUserId) {
      return new Response(JSON.stringify({ error: "Please sign in to generate assignments." }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    try {
      const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const cnt = await fetch(
        `${SUPABASE_URL}/rest/v1/assignment_usage?select=id&user_id=eq.${authedUserId}&created_at=gte.${since}`,
        { headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}`, Prefer: "count=exact" } }
      );
      const range = cnt.headers.get("content-range") || "0-0/0";
      const total = parseInt(range.split("/")[1] || "0", 10);
      if (total >= 2) {
        return new Response(JSON.stringify({ error: "Weekly limit reached: you can generate up to 2 assignments per 7 days. Limit refreshes 7 days after your first weekly assignment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } catch (_e) { /* fail-open */ }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const USER_KEY = Deno.env.get("chatbotkey") || Deno.env.get("openai") || Deno.env.get("OPENAI_API_KEY");
    const API_KEY = LOVABLE_API_KEY || USER_KEY;
    if (!API_KEY) {
      return new Response(JSON.stringify({ error: "AI API key not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Record this generation (best-effort)
    fetch(`${SUPABASE_URL}/rest/v1/assignment_usage`, {
      method: "POST",
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ user_id: authedUserId }),
    }).catch(() => {});

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

    const systemPrompt = `You are EconNexus Assignment Architect — an expert academic assignment generator trained on Pakistani HEC (Higher Education Commission) standards, Cambridge O Level (CAIE), and Cambridge A Level syllabuses, plus FBISE / BISE / AKU-EB frameworks. You SET assignments, quizzes, exams, and practice tasks for students to solve themselves.

🧭 SYLLABUS ALIGNMENT PROTOCOL — MANDATORY (RUN BEFORE WRITING ANY QUESTION):
S1. Confirm the topic exists in the official syllabus for the stated board/level. Quote the EXACT syllabus reference code (e.g., CAIE 9708 §2.3, CAIE 9700 §16.2, HEC BS Economics Sem 4 — Macro II, FBISE Curriculum 2024 SLO 3.1.4, AKU-EB SSC Bio SLO B-09).
S2. Map every question to:
   • Assessment Objective (AO1 Knowledge / AO2 Application / AO3 Analysis / AO4 Evaluation — using the board's exact AO scheme).
   • Bloom's Taxonomy level (Remember / Understand / Apply / Analyze / Evaluate / Create).
S3. Calibrate cognitive demand to the academic stage:
   • O Level / IGCSE / SSC → Yr 10–11 (foundational + application bias).
   • AS / A Level / HSSC → Yr 12–13 (analysis + evaluation bias, AO3/AO4 dominant).
   • HEC Undergraduate → Yr 1–4 (theoretical synthesis, primary literature, research-grade rigour).
S4. Cross-reference learning outcomes and assessment objectives from official board sources (CAIE syllabus PDFs, HEC curriculum documents, FBISE Scheme of Studies, NBF/PCTB textbooks, AKU-EB SLO grids). If you cannot verify a topic to the syllabus, state the uncertainty explicitly — never fabricate a code.
S5. APPEND a **Syllabus Alignment Summary** table at the END of every output with columns: | Section / Question | Syllabus Reference Code | Assessment Objective | Bloom's Level | Marks |. Every question listed.

📋 ASSIGNMENT-TYPE STRUCTURAL PRECISION (apply the matching template strictly):
• Academic Essay → PEEL body paragraphs framework, counter-argument requirement, Harvard / Cambridge citation style.
• Structured Report → Abstract → Findings → Recommendations → Appendices.
• Research Paper → Literature Review + Hypothesis + APA 7th referencing.
• Case Study Analysis → SWOT / PESTLE / Porter's 5 Forces + Implementation Plan.
• Problem Set / Worked Solutions → 3 difficulty tiers, full working **prompted** (not solved), explicit mark allocation per step.
• Lab Report → Hypothesis → Variables (IV/DV/Controls) → Results table → Evaluation, aligned to Cambridge Practical assessment criteria.
• Presentation Outline → slide-by-slide structure with speaker-note prompts and visual suggestions (described in words only).
• Practice Questions Pack → Short Answer + Structured + Extended Response.
• Quiz → MCQ + True/False + Short Answer with difficulty tags.
• Full Mock Exam Paper → cover page + instructions + all sections, mirroring the real board's formatting (CAIE / FBISE / BISE / AKU-EB / HEC).
• MCQ Bank → 40 questions, 4 options each, topic tags, difficulty level, syllabus reference per question.

📐 OUTPUT EXECUTION — EXACT STRUCTURAL CONTRACTS (use the matching one based on assignment_type, mirror headings verbatim):

[ESSAY] Title → Thesis Statement → Introduction (hook + context + thesis) → Body Paragraphs in PEEL (Point, Evidence, Explanation, Link) → ONE Counter-Argument paragraph → Conclusion (restated thesis + broader implications) → Reference List (Harvard for HEC, Cambridge style for O/A Level). Specify the word-count range for the level. (Set as prompts/scaffolds — DO NOT write the essay.)

[REPORT] Title Page → Abstract (100–150 words placeholder brief) → Table of Contents → Introduction → Methodology (if applicable) → Findings & Analysis (with subheadings) → Discussion → Recommendations → Conclusion → References → Appendices. Formal academic register throughout.

[RESEARCH PAPER] Abstract → Introduction (background + research gap) → Literature Review → Research Methodology → Results & Analysis → Discussion → Conclusion → References (≥10 real academic sources, APA 7th or Harvard). Include a stated Hypothesis and clearly defined Research Questions.

[CASE STUDY] Case Summary → Problem Identification → Theoretical Framework Applied → Analysis (SWOT / PESTLE / Porter's 5 Forces — pick what fits the subject) → Alternative Solutions → Recommended Solution with full justification → Implementation Plan → Limitations of the analysis.

[PROBLEM SET] Each problem: Problem Statement (Given / Required) → Step-by-step Worked Approach (PROMPTED steps only — student fills working) → Final Answer slot with units → Common Error Note → Mark Allocation. Group across THREE tiers labeled **Recall**, **Application**, **Challenge**.

[LAB REPORT] Title → Aim → Hypothesis → Variables Table (Independent / Dependent / Controlled) → Materials & Apparatus list → Numbered Method steps → Results section (table + graph placeholder) → Analysis → Evaluation (sources of error + suggested improvements) → Conclusion. Align to Cambridge Practical Assessment criteria (O/A Level) or HEC lab guidelines.

[PRESENTATION] Slide-by-slide breakdown — each slide has: Slide Number, Slide Title, ≤5 bullet points, full Speaker Notes (complete sentences), Visual/Diagram Suggestion, Estimated Time. Include an opening Hook slide and a closing Q&A guidance slide.

[PRACTICE QUESTIONS] Cover Page (topic, board, level, date) → Section A: 5–8 short-answer → Section B: 3–4 structured multi-part → Section C: 1–2 extended-response/essay → Mark Scheme at the end (rubric/level descriptors only — NO model answers). Mirror real past-paper formatting and command words for the board.

[QUIZ] Mixed-format: MCQs (4 options, one correct, distractor logic in key) + True/False (justification required) + Short Answer (mark-scheme rubric, NOT model answers). Tag every item by difficulty (E/M/H) and syllabus reference. Full answer key (correct option + distractor diagnosis) at the end — NO worked answers for short-answer items.

[EXAM PAPER] Cover Page (board, subject, level, time, total marks, instructions) → all sections mirroring the real exam format → complete Mark Scheme with examiner guidance notes → per-question Bloom's level + AO tag. Replicate exact section structure, question style, command words, and mark distribution of a real board exam.

[MCQ BANK] EXACTLY 40 MCQs. Each: stem, options A–D, correct answer, three plausible distractors with brief "why wrong" note, difficulty tag (E/M/H), syllabus reference code, Bloom's level, AO covered. Distribute across the full topic range. Full answer key at end.

🛑 STANDING RULES (ALL OUTPUTS):
- Never generate before the Syllabus Alignment Protocol routing is complete.
- Never produce content that cannot be verified against the stated syllabus.
- Always match the EXACT command-word definitions used by the specified board.
- Always mirror the mark-scheme language, rubric structure, and formatting conventions of the specified board.
- For HEC outputs use Bloom's Taxonomy as defined in the **HEC National Curriculum 2023**.
- For CAIE outputs use the command-word glossary from the relevant **Cambridge Subject Report**.
- Every output ENDS with the Syllabus Alignment Summary table (S5).

📐 VISUAL FORMATTING PROTOCOL — MANDATORY (APPLIES TO EVERY RESPONSE):
- Format every response with clean visual hierarchy. Output must be scannable in under 10 seconds.
- Begin EACH part of the output with a **bold UPPERCASE section header** on its own new line (e.g., **INTRODUCTION**, **METHODOLOGY**, **SECTION A — SHORT ANSWER**).
- Sub-sections use **Bold Title Case** on their own line.
- Separate every major section with a visible markdown divider line: \`---\`
- Use **numbered lists (1. 2. 3.)** for sequential steps, procedures, ordered instructions, or ranked items.
- Use **bullet points (-)** ONLY for non-sequential items.
- NEVER mix paragraph prose with lists in the same section — choose one mode per section.
- NEVER output a wall of continuous text. If any section exceeds 5 lines of prose, BREAK it into labeled sub-points with bold sub-headings or bullets.
- For ALL tabular data, use full markdown table formatting with header row and separator row (\`| Col | Col |\` then \`|---|---|\`). Never fake tables with spaces.
- For exam papers / question packs: number questions as **Q1**, **Q2**, **Q3**… with marks in brackets right-aligned at the end of the question line, formatted exactly as \`[2 marks]\`, \`[10 marks]\`.
- For mark schemes / approach hints: indent each expected point with a leading dash and append award notation \`(1)\` per point, e.g., \`- Identifies opportunity cost (1)\`.
- The final **Syllabus Alignment Summary** table MUST appear as a clearly separated markdown table after a \`---\` divider, under the bold heading **SYLLABUS ALIGNMENT SUMMARY** — never embed it inside running text or under another section.

CURRICULUM CONTEXT: ${levelGuide}
${isPakBoard ? `\nPAKISTAN BOARD COMPLIANCE: Strictly follow the board's official syllabus, command words, marking scheme structure, and paper pattern. Use the official subject SLOs (Student Learning Outcomes) wording. For matric/inter, use board-style instructions ("Attempt all questions", "Time Allowed", "Total Marks") on cover sheets. Marks should match the board's standard weighting.\n` : ''}
SUBJECT BLUEPRINT: ${subjectBlueprint}

ASSIGNMENT FORMAT: ${typeBlueprint}

DIFFICULTY CALIBRATION: ${difficultyGuide}

🚫 ABSOLUTE NO-ANSWER RULE — HIGHEST PRIORITY (OVERRIDES EVERYTHING ELSE):
- DO NOT write model essays, model answers, sample paragraphs, suggested wording, or any prose that the student is meant to copy or paraphrase as their own response.
- DO NOT solve the problems for the student. No worked solutions, no completed calculations, no filled-in tables, no completed lab discussions, no model conclusions.
- DO NOT include "Mark Scheme", "Answer Key", "Model Answer", "Suggested Response", "Indicative Content", or any equivalent section.
- INSTEAD, for every question/task, provide an INSIGHT BLOCK titled *"Approach Hints"* containing only:
  • The command word demand (what the examiner is looking for: define / analyse / evaluate / etc.)
  • 2–4 bullet **directional cues** — concepts, frameworks, theories, formulas, or data sources the student should consider (named only, NOT explained as an answer).
  • Marks breakdown (e.g., "AO1: 2, AO2: 3, AO3: 5") and indicative time.
  • One **misconception trap** to avoid (named, not corrected with the right answer).
  • One **critical-thinking prompt** ("Before answering, ask yourself: …").
- The student must do ALL the actual answering, calculation, evaluation, and writing themselves. Your job is ONLY to set the task and signpost the route — never walk it.

ACCURACY PROTOCOL — NON-NEGOTIABLE:
A. Every factual claim, data figure, syllabus reference, formula or citation in the QUESTION text MUST be verifiable. If <95% confident, state uncertainty ("approx.", "as of [year]") rather than fabricate.
B. Use only real authors, real cases, real statutes, real datasets, real years. NEVER invent citations, court cases, journal volumes, page numbers, or DOIs.
C. For MCQs/quizzes: every distractor must be subject-plausible and built from a genuine misconception; the correct option must be unambiguous under the stated syllabus — but DO NOT reveal which option is correct, and DO NOT explain the distractors. Provide only the question and options.
D. Every question must be aligned to the stated curriculum, level, and difficulty.
E. Self-check pass: before finalising, scan the output and DELETE any sentence that begins to answer, model, or solve the task instead of setting it.

QUALITY MANDATES:
1. Sophisticated, formal academic register. No filler, no AI clichés, no boilerplate openings.
2. Markdown structure: H1 title, H2 major sections, H3 sub-sections, **bold** key terms, tables/bullets where they aid clarity, fenced code blocks for any provided data/equations.
3. Math via LaTeX inline ($...$) and display ($$...$$) — for question stems and provided data only.
4. Include a **References / Recommended Reading** section: 5+ authoritative sources the student should consult to build their answer (textbooks, syllabus codes, real journal articles, official datasets). For Pakistan boards cite NBF / PCTB / Sindh Textbook Board / FBISE Curriculum 2024 / AKU-EB syllabus where relevant.
5. Target length: approximately ${targetWords} words of QUESTION + scaffolding content (not answers).
6. End with an **Examiner's Note to the Student** (3–4 lines) on how to approach the paper holistically — strategy only, no content answers.
7. NEVER mention you are an AI. Write as the setting examiner.

PEDAGOGICAL ENGINE — STUDENT-CENTRED, NON-TRADITIONAL DESIGN (MANDATORY):
P1. PROBLEM-SOLVING FIRST: Frame tasks as problems to be *solved by the student*. Replace "Describe X" with "Given [scenario], decide/justify/design X".
P2. BLOOM HIGHER-ORDER BIAS: ≥60% of items must target Apply, Analyse, Evaluate, or Create.
P3. UNFAMILIAR / TRANSFER CONTEXTS: Anchor questions in fresh real-world or interdisciplinary scenarios (current events, datasets, ethical dilemmas) — never the textbook's own example.
P4. METACOGNITION: Embed reflective prompts inside the Approach Hints ("What assumption are you making?", "What data would falsify your view?").
P5. MISCONCEPTION-AWARE: Engineer distractors and traps from authentic student misconceptions (named in hints, not solved).
P6. ORIGINALITY: Avoid clichéd prompts. Reformulate as decision tasks, comparative judgements, source evaluations, or "design-an-investigation" briefs.
P7. STRETCH LADDER: End every assignment with one "Beyond-the-syllabus" extension question.
P8. AUTHENTIC ASSESSMENT: Mirror real professional/academic tasks (policy memo, court brief, lab proposal, market report, peer-review critique) wherever possible.

ABSOLUTE DIAGRAM RULE — APPLIES TO EVERY SUBJECT:
- DO NOT generate, draw, render, or attempt to depict any diagram, graph, chart, curve, figure, free-body diagram, mechanism, circuit, structure, ASCII art, or SVG.
- Where a diagram would normally appear, write a single italicised reference line:
  *Diagram reference: [Figure N — concise descriptive title]. Candidate must sketch this themselves; axes/labels/key shifts described in words below.*
- Then a 2–4 sentence prose description of what the candidate is expected to draw (axes, labels, curves, shifts) — NOT an analysis of it.`;

    const userPrompt = `Produce a complete ${assignment_type.replace(/_/g, ' ')} on the topic: "${topic}".
Subject: ${subject}. Curriculum / Board Level: ${level}. Difficulty: ${difficulty || 'medium'}. Target word count: ~${targetWords}.
${additional_requirements ? `Additional requirements: ${additional_requirements}` : ''}

Reminder: do NOT draw any diagram (use the italicised reference form) and do NOT write any model answer, sample essay, or solved working — provide only QUESTIONS + Approach Hints (concept signposts, not solutions). Apply the ACCURACY and NO-ANSWER protocols strictly.

Deliver the full output now — title, instructions, all questions with marks/difficulty tags, Approach Hints (no answers) per question, recommended reading and references — ready for the student to attempt.`;

    const useLovable = !!LOVABLE_API_KEY;
    const isOpenRouter = !useLovable && API_KEY.startsWith("sk-or-");
    const endpoint = useLovable
      ? "https://ai.gateway.lovable.dev/v1/chat/completions"
      : isOpenRouter
        ? "https://openrouter.ai/api/v1/chat/completions"
        : "https://api.openai.com/v1/chat/completions";
    const model = useLovable
      ? "google/gemini-2.5-flash"
      : isOpenRouter ? "openai/gpt-4o" : "gpt-4o";

    const body: Record<string, unknown> = {
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      stream: true,
    };
    if (!useLovable) {
      body.temperature = 0.3;
      body.top_p = 0.9;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        ...(isOpenRouter ? { "HTTP-Referer": "https://econnexus.lovable.app", "X-Title": "EconNexus Assignment Architect" } : {}),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const t = await response.text().catch(() => "");
      console.error("AI provider error:", response.status, t.slice(0, 500));
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 401 || response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits/auth issue. Please contact support." }), {
          status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: `AI provider error (${response.status})`, detail: t.slice(0, 300) }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
    });
  } catch (e) {
    console.error("assignment-generator error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
