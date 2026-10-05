import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUBJECT_BLUEPRINTS: Record<string, string> = {
  economics: `Domain: Economics. Ground every question in real-world data (World Bank, IMF, OECD, SBP for Pakistan), reference relevant diagrams as figures (AD/AS, supply/demand, PPF, cost curves), require elasticity/multiplier calculations where appropriate, and demand policy evaluation. Reference theorists where relevant: Smith, Keynes, Friedman, Hayek, Sen, Stiglitz, Krugman.`,
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
  'a-level': `A-Level / A2 (Year 13, Cambridge/Edexcel). High analytical and evaluative rigor, synoptic links, extended-response bias.`,
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
    const isCambridge = ['igcse', 'as-level', 'a-level'].includes(level) ||
      /\bcambridge\b|\bcaie\b|\bedexcel\b|\bA[\s-]?Level\b/i.test(additional_requirements || '');
    const isUniversity = ['undergraduate', 'postgraduate'].includes(level);
    const citationStyle = isUniversity ? 'APA 7th edition' : (isPakBoard ? 'Harvard (author-date)' : 'Harvard (author-date)');

    const aoBlock = isCambridge ? `
🎯 CAMBRIDGE AO ALIGNMENT (this output only — the user's board uses AOs):
- Tag every question with the Cambridge Assessment Objective it targets (AO1 Knowledge & Understanding, AO2 Application & Analysis, AO3 Evaluation — check the current syllabus for exact weightings by subject).
- Include an AO marks-breakdown per question (e.g., "AO1: 2 | AO2: 3 | AO3: 5").
- The Syllabus Alignment Summary table must include an "Assessment Objective" column.
` : `
🎯 ASSESSMENT ALIGNMENT (non-Cambridge board):
- Do NOT tag questions with Cambridge AO1/AO2/AO3/AO4 labels — they do not apply to this board.
- Instead, tag every question with Bloom's Taxonomy level (Remember / Understand / Apply / Analyse / Evaluate / Create) and the board's own SLO / learning-outcome code.
- The Syllabus Alignment Summary table uses "Bloom's Level" + "SLO / Outcome Code" columns instead of AO.
`;

    const SKELETONS: Record<string, string> = {
      essay: `## 1. Task Brief\n## 2. Instructions to Candidates\n## 3. Learning Outcomes\n## 4. Essay Question\n## 5. Planning Framework\n### 5.1 Introduction & Thesis\n### 5.2 Body Paragraph 1 … ### 5.N Body Paragraph N (PEEL cues each)\n### 5.x Counter-Argument & Rebuttal\n### 5.y Conclusion & Judgement\n## 6. Marking Rubric (table: Criterion | Weight | Distinction | Merit | Pass)`,
      report: `## 1. Task Brief\n## 2. Instructions\n## 3. Learning Outcomes\n## 4. Scenario & Data Provided (include one data table)\n## 5. Required Report Structure\n### 5.1 Executive Summary\n### 5.2 Introduction & Terms of Reference\n### 5.3 Methodology\n### 5.4 Findings & Analysis\n### 5.5 Recommendations (with cost/risk)\n### 5.6 Conclusion\n## 6. Marking Rubric (table)`,
      research_paper: `## 1. Research Brief\n## 2. Instructions\n## 3. Learning Outcomes\n## 4. Research Question & Hypotheses\n## 5. Required IMRaD Structure\n### 5.1 Abstract\n### 5.2 Introduction & Research Gap\n### 5.3 Literature Review (themes to cover)\n### 5.4 Methodology (design, sample, ethics)\n### 5.5 Results\n### 5.6 Discussion & Limitations\n### 5.7 Conclusion\n## 6. Marking Rubric (table)`,
      case_study: `## 1. Task Brief\n## 2. Instructions\n## 3. The Case (narrative + one data table)\n## 4. Stakeholder Map (table)\n## 5. Questions\n### Question 1 … ### Question N (frameworks: SWOT/PESTLE/Porter where relevant)\n## 6. Options Evaluation Matrix (blank table for student)\n## 7. Marking Rubric (table)`,
      problem_set: `## 1. Instructions\n## 2. Formulae & Data Provided\n## 3. Part A — Skill Builders\n### Problem 1 …\n## 4. Part B — Application\n## 5. Part C — Challenge\n## 6. Stretch Problem`,
      lab_report: `## 1. Task Brief\n## 2. Safety & Instructions\n## 3. Aim\n## 4. Hypothesis Prompt\n## 5. Variables (table: Independent | Dependent | Controlled)\n## 6. Apparatus\n## 7. Method\n## 8. Results Template (blank table)\n## 9. Analysis Questions\n## 10. Evaluation Questions\n## 11. Marking Rubric (table)`,
      presentation: `## 1. Task Brief\n## 2. Instructions\n## 3. Slide Plan\n### Slide 1 — Title … ### Slide 10 — Conclusion (each: Purpose, Points to cover, Visual cue, Discussion question)\n## 4. Delivery Rubric (table)`,
      practice_questions: `## 1. Instructions\n## 2. Section A — Short Answer\n### Question 1 …\n## 3. Section B — Structured (a/b/c)\n## 4. Section C — Data Response (include a data table)\n## 5. Section D — Extended Response`,
      quiz: `## 1. Instructions\n## 2. Section A — Multiple Choice (20)\n## 3. Section B — True / False with Justification (5)\n## 4. Section C — Short Application (5)\n## 5. Answer Key (table: Q | Answer | One-line reason)`,
      exam_paper: `## Cover Sheet (instructions, time, total marks)\n## Section A — Multiple Choice\n## Section B — Short / Structured\n## Section C — Extended / Essay\n## Mark Scheme\n### Section A Key (table)\n### Section B Point-based Scheme\n### Section C Levels-of-Response Grid (table)\n## Grade Boundaries (table)`,
      mcq_bank: `## 1. Instructions\n## 2. Sub-topic 1 — [name]\n### Q1 …\n## 3. Sub-topic 2 … (40 questions total)\n## Answer Key (table: Q | Answer | Difficulty | Why distractors fail)`,
    };
    const skeleton = SKELETONS[assignment_type] || SKELETONS.essay;
    const answersAllowed = ['quiz', 'exam_paper', 'mcq_bank'].includes(assignment_type);

    const systemPrompt = `You are the Assignment Architect: a senior examiner and university course convenor who writes beautifully structured, publication-quality assignment documents for high-school (O/A Level, IB, FBISE/BISE/AKU-EB) and university (HEC undergraduate/postgraduate) students.

LEVEL: ${levelGuide}
SUBJECT: ${subjectBlueprint}
TYPE: ${typeBlueprint}
DIFFICULTY: ${difficultyGuide}
${aoBlock}
FORMATTING (strict GitHub-flavoured Markdown — this is rendered directly):
- Line 1: "# " followed by a precise, specific title. Then a one-line italic subtitle (subject · level · type).
- Then a 2-column metadata table: | Field | Detail | with rows Subject, Topic, Level / Board, Assignment Type, Total Marks, Duration, Word Count (~${targetWords}), Citation Style (${citationStyle}).
- Then follow THIS section skeleton exactly, using real "## " and "### " markdown headings (never bold text as a heading, never UPPERCASE paragraphs as headings):
${skeleton}
- After the skeleton add: "## Recommended Reading" (4–6 real sources in ${citationStyle}), "## Syllabus Alignment" (table: Question | Topic / Syllabus Ref | ${isCambridge ? 'AO' : "Bloom's Level"} | Marks), and "## Examiner's Note" (3 lines of strategy).
- Every question: a "### Question N — short title [M marks]" heading, the stem in clear prose, sub-parts as (a), (b), (c) each on its own line with marks in brackets, then a blockquote starting "> **Approach Hints:**" with 2–4 short bullet cues (concepts/frameworks to use, one misconception to avoid).
- Separate major sections with a "---" rule. Keep paragraphs ≤4 sentences. Use tables for any data, rubrics, or comparisons. Bold key terms sparingly.
- Math in LaTeX: $...$ inline, $$...$$ on its own lines.
- No emojis, no preamble ("Here is…"), no closing chatter, never mention being an AI.

CONTENT RULES:
- ${answersAllowed ? 'Answer key / mark scheme belongs ONLY in its designated section at the end; question sections never reveal answers.' : 'Do NOT write model answers, model essays or solved workings — set the task and signpost the route only (Approach Hints). The student does the work.'}
- Use real theorists, cases, statutes and datasets only; never invent citations, DOIs or syllabus codes — if unsure, write the reference generally (e.g. "CAIE 9708 syllabus, relevant section").
- Use fresh, real-world, recent contexts (Pakistan and global where relevant). ≥60% of items target apply/analyse/evaluate.
- Diagrams: never draw them; write "*Figure N — title: candidate sketches this (axes, curves, shift described in one sentence).*"
- Be complete but economical: no repetition, no filler. Finish every section.`;

    const userPrompt = `Produce a complete ${assignment_type.replace(/_/g, ' ')} on the topic: "${topic}".
Subject: ${subject}. Curriculum / Board Level: ${level}. Difficulty: ${difficulty || 'medium'}. Target word count: ~${targetWords}.
${additional_requirements ? `Additional requirements: ${additional_requirements}` : ''}

Follow the section skeleton and formatting rules exactly. Start directly with the "# " title line.`;

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
