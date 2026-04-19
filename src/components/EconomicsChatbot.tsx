import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Loader2, Copy, Check, RefreshCw, Trash2, CheckCircle2, TrendingUp, BookOpen, Briefcase, Scale, Brain, Calculator, Users, FlaskConical, Sigma, ImagePlus, X, Atom, Wifi, WifiOff, Dna, Paperclip, FileText } from 'lucide-react';
import { parsePdfFile } from '@/lib/pdf-parser';
import userProfilePhoto from '@/assets/user-profile-photo.png';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import { supabase } from '@/integrations/supabase/client';
import { trackInteraction } from '@/lib/analytics';
import { useAuth } from '@/hooks/useAuth';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import officialLogo from '@/assets/econnexus-logo-final.png';
import guideEconomics from '@/assets/guide-economics.png';
import guideBusiness from '@/assets/guide-business.png';
import guideLaw from '@/assets/guide-law.png';
import guidePsychology from '@/assets/guide-psychology.png';
import guideAccounting from '@/assets/guide-accounting.png';
import guideSociology from '@/assets/guide-sociology.png';
import guideResearch from '@/assets/guide-research.png';
import guideMathematics from '@/assets/guide-mathematics.png';
import guidePhysics from '@/assets/guide-physics.png';
import guideChemistry from '@/assets/guide-chemistry.png';
import guideBiology from '@/assets/guide-biology.png';

const GUIDE_IMAGES: Record<string, string> = {
  'a-level': guideEconomics,
  'business': guideBusiness,
  'law': guideLaw,
  'psychology': guidePsychology,
  'accounting': guideAccounting,
  'sociology': guideSociology,
  'research': guideResearch,
  'mathematics': guideMathematics,
  'physics': guidePhysics,
  'chemistry': guideChemistry,
  'biology': guideBiology,
};
import { sanitizeInput, checkRateLimit, RATE_LIMITS } from '@/lib/security';

// ---- Client-side image upload rate limiter (10 images / 60s) ----
const imageUploadTimestamps: number[] = [];
function checkImageUploadRateLimit(): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const windowMs = 60000;
  // Purge old timestamps
  while (imageUploadTimestamps.length > 0 && now - imageUploadTimestamps[0] > windowMs) {
    imageUploadTimestamps.shift();
  }
  if (imageUploadTimestamps.length >= 10) {
    const retryAfter = Math.ceil((imageUploadTimestamps[0] + windowMs - now) / 1000);
    return { allowed: false, retryAfter };
  }
  imageUploadTimestamps.push(now);
  return { allowed: true };
}

type Message = {
  role: 'user' | 'assistant';
  content: string;
  id: string;
  isError?: boolean;
  imageUrl?: string;
};

type StreamState = 'idle' | 'connecting' | 'streaming' | 'analyzing' | 'error' | 'mapping-diagram' | 'solving-logic';

type Persona = 'a-level' | 'business' | 'law' | 'psychology' | 'accounting' | 'sociology' | 'research' | 'mathematics' | 'physics' | 'chemistry' | 'biology';

const QUICK_ACTIONS_ALEVEL = [
  { label: 'J-Curve Effect', query: 'Explain the J-Curve effect and why the current account worsens before improving after depreciation.' },
  { label: 'Liquidity Trap', query: 'Analyze the Keynesian Liquidity Trap and why monetary policy becomes ineffective at the zero lower bound.' },
  { label: 'Phillips Curve', query: 'Explain the Expectations-Augmented Phillips Curve and the concept of NAIRU.' },
  { label: 'Nash Equilibrium', query: 'Derive the Nash Equilibrium for a Cournot duopoly with asymmetric costs. Show the payoff matrix, best response functions, and verify the equilibrium satisfies no profitable deviation.' },
  { label: 'Lagrangian Optimization', query: 'Solve the consumer utility maximization problem using the Lagrangian method for a Cobb-Douglas utility function U(x,y) = x^0.4 y^0.6 subject to budget constraint 10x + 20y = 200. Show complete step-by-step derivation with SOC verification.' },
  { label: 'Solow Steady-State', query: 'Derive the Solow-Swan steady-state, the golden rule of capital accumulation, and the convergence hypothesis. Show full mathematical derivation with economic interpretation at every step.' },
  { label: 'Kinked Demand', query: 'Analyze the Kinked Demand Curve model and explain price rigidity in oligopolistic markets.' },
  { label: 'OLS & Diagnostics', query: 'Guide me through running an OLS regression: model specification, estimation, interpreting P-values and confidence intervals, and checking Gauss-Markov assumptions. What remedial measures exist for each violation?' },
  { label: 'Pakistan Fiscal', query: 'Analyze Pakistan\'s fiscal policy using the latest Economic Survey data from the Ministry of Finance. Evaluate the fiscal deficit trajectory, debt sustainability, and IMF EFF conditionalities with PIDE evidence.' },
];

const QUICK_ACTIONS_BUSINESS = [
  { label: 'Stakeholder Conflict', query: 'Evaluate the extent to which shareholder objectives conflict with the interests of other stakeholders in a large public limited company.' },
  { label: 'Break-even Analysis', query: 'Calculate and interpret break-even for a business with fixed costs of $50,000, variable cost per unit of $8, and selling price of $20. Evaluate the usefulness of break-even analysis.' },
  { label: 'Motivation Theories', query: 'Compare Maslow\'s hierarchy of needs with Herzberg\'s two-factor theory. Evaluate which is more useful for a manager seeking to improve employee motivation.' },
  { label: 'Marketing Mix', query: 'Analyse how the elements of the marketing mix should differ for a business launching a luxury product compared to a mass-market product.' },
  { label: 'Lean Production', query: 'Evaluate the benefits and limitations of adopting lean production techniques such as Kaizen and JIT for a manufacturing business.' },
  { label: 'Investment Appraisal', query: 'Compare the payback period, ARR, and NPV methods of investment appraisal. Evaluate which method is most useful for a business considering a major capital investment.' },
];

const QUICK_ACTIONS_LAW = [
  { label: 'Duty of Care', query: 'Using IRAC, analyse whether a duty of care exists under English law applying the three-stage Caparo test from Caparo Industries plc v Dickman [1990].' },
  { label: 'Murder vs Manslaughter', query: 'Distinguish between murder and voluntary manslaughter under English criminal law, with reference to the Coroners and Justice Act 2009.' },
  { label: 'Contract Formation', query: 'Analyse the requirements for a valid contract under English law, with reference to offer (Carlill v Carbolic), acceptance, consideration, and intention.' },
  { label: 'Judicial Review', query: 'Explain the grounds for judicial review in UK public law, with reference to the GCHQ case [1985] and the principles of illegality, irrationality, and procedural impropriety.' },
  { label: 'ECHR Article 8', query: 'Critically evaluate the scope of the right to private and family life under Article 8 ECHR, discussing how UK courts balance this right against competing public interests.' },
  { label: 'US Due Process', query: 'Compare substantive and procedural due process under the 5th and 14th Amendments to the US Constitution, with reference to Mathews v. Eldridge (1976).' },
];

const QUICK_ACTIONS_PSYCHOLOGY = [
  { label: 'Milgram Obedience', query: 'Using the GRAVE framework, evaluate Milgram\'s (1963) study of obedience. Assess the generalizability, reliability, application, validity, and ethics of his findings.' },
  { label: 'Determinism vs Free Will', query: 'Discuss the determinism vs free will debate in psychology, using examples from the biological and cognitive approaches.' },
  { label: 'Memory Models', query: 'Compare and contrast the Multi-Store Model (Atkinson & Shiffrin) with the Working Memory Model (Baddeley & Hitch). Evaluate using research evidence.' },
  { label: 'Bandura Bobo Doll', query: 'Evaluate Bandura\'s (1961) Bobo Doll experiment using the GRAVE framework. How does it support Social Learning Theory?' },
  { label: 'Nature vs Nurture', query: 'Evaluate the nature-nurture debate with reference to twin studies, adoption studies, and the interactionist approach.' },
  { label: 'Type I & II Errors', query: 'Explain Type I and Type II errors in psychological research. How do significance levels and sample size affect these errors? Include ANOVA context.' },
];

const QUICK_ACTIONS_ACCOUNTING = [
  { label: 'Double Entry', query: 'Explain the principles of double-entry bookkeeping with examples. Show how the accounting equation (Assets = Capital + Liabilities) is maintained.' },
  { label: 'WACC Calculation', query: 'Calculate the Weighted Average Cost of Capital (WACC) for a company with 60% equity (cost 12%) and 40% debt (cost 6%, tax rate 25%). Show the full formula and working.' },
  { label: 'NPV vs IRR', query: 'Compare NPV and IRR as investment appraisal methods. When might they give conflicting recommendations? Show calculations with an example.' },
  { label: 'Ratio Analysis', query: 'Analyse the key financial ratios (liquidity, profitability, efficiency, gearing) and explain what each tells us about business performance.' },
  { label: 'Consolidated Accounts', query: 'Explain how to prepare consolidated financial statements when a parent acquires 80% of a subsidiary. How is goodwill and non-controlling interest calculated?' },
  { label: 'IFRS vs GAAP', query: 'Compare the key differences between IFRS and US GAAP standards, focusing on inventory valuation, revenue recognition, and lease accounting.' },
];

const QUICK_ACTIONS_SOCIOLOGY = [
  { label: 'Functionalism vs Marxism', query: 'Compare and contrast Functionalist and Marxist perspectives on the role of education in society. Refer to Durkheim, Parsons, Bowles & Gintis, and Willis.' },
  { label: 'Secularisation Debate', query: 'Assess the view that religion is declining in significance in modern society. Discuss the secularisation thesis (Wilson, Bruce) and counter-arguments.' },
  { label: 'Cultural Capital', query: 'Evaluate Bourdieu\'s concept of cultural capital and its impact on educational achievement and social mobility.' },
  { label: 'Media Representations', query: 'Analyse how the media represents gender using feminist and postmodernist perspectives. Refer to the hypodermic syringe model and reception analysis.' },
  { label: 'Labelling Theory', query: 'Evaluate the interactionist approach to crime and deviance, with reference to Becker\'s labelling theory and its impact on self-fulfilling prophecy.' },
  { label: 'Globalisation Debate', query: 'Assess the extent to which globalisation leads to cultural homogeneity. Discuss hyperglobalists, sceptics, and transformationalists.' },
];

const QUICK_ACTIONS_RESEARCH = [
  { label: 'Research Design', query: 'Compare experimental, correlational, and case study research designs. What are the strengths and limitations of each in terms of validity, reliability, and ethics?' },
  { label: 'Sampling Methods', query: 'Explain and evaluate random, stratified, quota, and snowball sampling methods. When should each be used and what are the implications for generalizability?' },
  { label: 'Thematic Analysis', query: 'Guide me through Braun & Clarke\'s 6-step thematic analysis process. How do you code qualitative data and identify themes?' },
  { label: 'Harvard Referencing', query: 'Show me how to correctly reference a book, journal article, and website using Harvard referencing format. Include both in-text citations and reference list entries.' },
  { label: 'Hypothesis Writing', query: 'How do I write a good directional and non-directional hypothesis? Explain operationalisation of variables with examples.' },
  { label: 'Ethics in Research', query: 'Discuss the key ethical considerations in social science research: informed consent, deception, protection from harm, right to withdraw, and confidentiality.' },
];

const QUICK_ACTIONS_MATHEMATICS = [
  { label: 'Chain Rule', query: 'Differentiate y = sin(3x² + 1) using the chain rule. Show every step of the derivation in LaTeX.' },
  { label: 'Integration by Parts', query: 'Evaluate ∫ x·e^x dx using integration by parts. Show the full step-by-step working with the formula.' },
  { label: 'Eigenvalues', query: 'Find the eigenvalues and eigenvectors of the matrix A = [[3,1],[0,2]]. Show the characteristic equation and full working.' },
  { label: 'Hypothesis Test', query: 'A sample of 50 has mean 24.3 and known σ = 4. Test at 5% significance whether the population mean differs from 25. Show H₀, H₁, test statistic, and conclusion.' },
  { label: 'Lagrangian', query: 'Use Lagrangian multipliers to maximize f(x,y) = xy subject to x + 2y = 10. Show the full derivation with SOC verification.' },
  { label: 'Complex Numbers', query: 'Express z = 1 + i√3 in modulus-argument form and use De Moivre\'s theorem to find z⁵. Show all working in LaTeX.' },
];

const QUICK_ACTIONS_PHYSICS = [
  { label: 'Projectile Motion', query: 'A ball is launched at 30 m/s at 45° to the horizontal. Calculate the range, maximum height, and time of flight. Use the I-V-A-U method with full working.' },
  { label: 'Electric Fields', query: 'Two point charges +3μC and -5μC are separated by 20cm. Find the electric field strength and potential at the midpoint. Show full derivation with diagrams described.' },
  { label: 'SHM Analysis', query: 'A 0.5 kg mass on a spring (k = 200 N/m) is displaced 0.1 m from equilibrium. Derive expressions for displacement, velocity, and acceleration as functions of time.' },
  { label: 'Photoelectric Effect', query: 'Light of wavelength 250 nm strikes a metal surface with work function 3.0 eV. Calculate the maximum kinetic energy of emitted electrons and the stopping potential.' },
  { label: 'Gravitational Fields', query: 'Derive the orbital velocity and period of a satellite at height h above Earth\'s surface. Show how to obtain the geostationary orbit altitude.' },
  { label: 'RC Circuit Decay', query: 'A 100μF capacitor charged to 12V discharges through a 50kΩ resistor. Find the time constant, and the charge and current after 3 seconds.' },
];

const QUICK_ACTIONS_CHEMISTRY = [
  { label: 'Enthalpy Calculation', query: 'Calculate the enthalpy of combustion of methanol using bond energy data. Show full working with Hess\'s Law and include all state symbols and units.' },
  { label: 'Organic Mechanism', query: 'Draw and explain the mechanism for the nucleophilic substitution of 2-bromobutane with aqueous NaOH. Is this SN1 or SN2? Justify your answer.' },
  { label: 'NMR Interpretation', query: 'A compound C₄H₈O₂ shows the following ¹H NMR: δ 1.2 (triplet, 3H), δ 2.0 (singlet, 3H), δ 4.1 (quartet, 2H). Deduce the structure and explain each peak.' },
  { label: 'Equilibrium & pH', query: 'Calculate the pH of a 0.10 mol dm⁻³ solution of ethanoic acid (Ka = 1.74 × 10⁻⁵). Then calculate the pH of a buffer made by adding 0.05 mol NaOH to 100 cm³ of this acid.' },
  { label: 'Transition Metals', query: 'Explain why transition metal complexes are coloured using crystal field theory. Why does [Cu(H₂O)₆]²⁺ appear blue while [Cu(NH₃)₄(H₂O)₂]²⁺ appears deep blue?' },
  { label: 'Multi-Step Synthesis', query: 'Plan a multi-step synthesis of ethyl ethanoate starting from ethanol. Give all reagents, conditions, and mechanisms at each step.' },
];

const QUICK_ACTIONS_BIOLOGY = [
  { label: 'Mitosis vs Meiosis', query: 'Compare and contrast mitosis and meiosis, including the stages, outcomes, and biological significance of each type of cell division.' },
  { label: 'DNA Replication', query: 'Explain the semi-conservative mechanism of DNA replication, including the roles of helicase, DNA polymerase, and ligase. Include Meselson-Stahl evidence.' },
  { label: 'Natural Selection', query: 'Explain the mechanism of natural selection and how it leads to evolution. Use a named example such as antibiotic resistance in bacteria.' },
  { label: 'Gas Exchange', query: 'Describe the structure of the alveoli and explain how they are adapted for efficient gas exchange. Include Fick\'s Law.' },
  { label: 'Krebs Cycle', query: 'Outline the stages of aerobic respiration: glycolysis, link reaction, Krebs cycle, and oxidative phosphorylation. State the ATP yield at each stage.' },
  { label: 'Immunity', query: 'Explain the difference between innate and adaptive immunity. Describe the roles of B-lymphocytes and T-lymphocytes in the specific immune response.' },
];

const COMMAND_WORDS_BIOLOGY = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise biological definition', color: 'hsl(217, 91%, 60%)' },
  { word: 'Describe', ao: 'AO1', meaning: 'State features, stages, or structures', color: 'hsl(150, 65%, 42%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Give reasons with biological mechanisms', color: 'hsl(150, 65%, 42%)' },
  { word: 'Compare', ao: 'AO2', meaning: 'Identify similarities and differences', color: 'hsl(150, 65%, 42%)' },
  { word: 'Suggest', ao: 'AO2', meaning: 'Apply knowledge to unfamiliar context', color: 'hsl(150, 65%, 42%)' },
  { word: 'Evaluate', ao: 'AO3', meaning: 'Weigh evidence and make judgements', color: 'hsl(43, 72%, 53%)' },
  { word: 'Calculate', ao: 'AO2', meaning: 'Show formula and full working', color: 'hsl(150, 65%, 42%)' },
];

const COMMAND_WORDS_PHYSICS = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise physical definition with SI units', color: 'hsl(217, 91%, 60%)' },
  { word: 'State', ao: 'AO1', meaning: 'Express a law or principle concisely', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out physical reasoning with cause-effect', color: 'hsl(15, 85%, 55%)' },
  { word: 'Calculate', ao: 'AO2', meaning: 'Show full working with units at every step', color: 'hsl(15, 85%, 55%)' },
  { word: 'Derive', ao: 'AO2+AO3', meaning: 'Obtain result from first principles with LaTeX', color: 'hsl(15, 85%, 55%)' },
  { word: 'Sketch', ao: 'AO2', meaning: 'Draw graph/diagram with labelled axes and key features', color: 'hsl(15, 85%, 55%)' },
  { word: 'Discuss', ao: 'AO1-AO3', meaning: 'Analyse with physical reasoning and limitations', color: 'hsl(43, 72%, 53%)' },
];

// Command words with AO (Assessment Objective) requirements
const COMMAND_WORDS_ECON = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise meaning', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out purposes/reasons with evidence', color: 'hsl(185, 100%, 50%)' },
  { word: 'Analyse', ao: 'AO1+AO2', meaning: 'Examine in detail to show meaning and relationships', color: 'hsl(185, 100%, 50%)' },
  { word: 'Compare', ao: 'AO1+AO2', meaning: 'Identify similarities and/or differences', color: 'hsl(185, 100%, 50%)' },
  { word: 'Assess', ao: 'AO1+AO2+AO3', meaning: 'Make an informed judgement', color: 'hsl(43, 72%, 53%)' },
  { word: 'Discuss', ao: 'AO1+AO2+AO3', meaning: 'Write about issues in depth with structure', color: 'hsl(43, 72%, 53%)' },
  { word: 'Evaluate', ao: 'AO1+AO2+AO3', meaning: 'Judge quality, importance, or value critically', color: 'hsl(43, 72%, 53%)' },
];

const COMMAND_WORDS_BUSINESS = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise meaning (2 marks)', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out purposes/reasons with development', color: 'hsl(185, 100%, 50%)' },
  { word: 'Analyse', ao: 'AO1-AO3', meaning: 'Chain of analysis: cause → effect → impact', color: 'hsl(185, 100%, 50%)' },
  { word: 'Evaluate', ao: 'AO1-AO4', meaning: 'Balanced argument + justified judgement', color: 'hsl(43, 72%, 53%)' },
  { word: 'Advise', ao: 'AO1-AO4', meaning: 'Suggest a course of action with justification', color: 'hsl(43, 72%, 53%)' },
  { word: 'Justify', ao: 'AO1-AO4', meaning: 'Support a case with evidence/argument', color: 'hsl(43, 72%, 53%)' },
  { word: 'Calculate', ao: 'AO1', meaning: 'Work out from given facts and figures', color: 'hsl(217, 91%, 60%)' },
];

const COMMAND_WORDS_LAW = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise legal definition', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out legal principles with authority', color: 'hsl(280, 70%, 55%)' },
  { word: 'Analyse', ao: 'AO1-AO3', meaning: 'IRAC: Issue → Rule → Application → Conclusion', color: 'hsl(280, 70%, 55%)' },
  { word: 'Evaluate', ao: 'AO1-AO4', meaning: 'Critical assessment with academic commentary', color: 'hsl(43, 72%, 53%)' },
  { word: 'Discuss', ao: 'AO1-AO4', meaning: 'Balanced argument with ratio/obiter distinction', color: 'hsl(43, 72%, 53%)' },
  { word: 'Advise', ao: 'AO1-AO4', meaning: 'Apply law to facts using IRAC method', color: 'hsl(43, 72%, 53%)' },
  { word: 'Compare', ao: 'AO1-AO3', meaning: 'Cross-jurisdictional or doctrinal comparison', color: 'hsl(280, 70%, 55%)' },
];

const COMMAND_WORDS_PSYCHOLOGY = [
  { word: 'Describe', ao: 'AO1', meaning: 'Present knowledge of study/theory', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Show understanding with reasons', color: 'hsl(330, 70%, 55%)' },
  { word: 'Evaluate', ao: 'AO3', meaning: 'GRAVE: Generalizability, Reliability, Application, Validity, Ethics', color: 'hsl(43, 72%, 53%)' },
  { word: 'Discuss', ao: 'AO1-AO3', meaning: 'Balanced argument with research evidence', color: 'hsl(43, 72%, 53%)' },
  { word: 'Compare', ao: 'AO1-AO3', meaning: 'Similarities and differences between approaches', color: 'hsl(330, 70%, 55%)' },
  { word: 'Suggest', ao: 'AO2', meaning: 'Apply knowledge to novel scenario', color: 'hsl(330, 70%, 55%)' },
];

const COMMAND_WORDS_ACCOUNTING = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise accounting definition', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out with reasons and examples', color: 'hsl(25, 85%, 55%)' },
  { word: 'Calculate', ao: 'AO1', meaning: 'Show full workings and formula', color: 'hsl(217, 91%, 60%)' },
  { word: 'Prepare', ao: 'AO1+AO2', meaning: 'Construct financial statements', color: 'hsl(25, 85%, 55%)' },
  { word: 'Analyse', ao: 'AO1-AO3', meaning: 'Interpret ratios and financial data', color: 'hsl(25, 85%, 55%)' },
  { word: 'Evaluate', ao: 'AO1-AO3', meaning: 'Assess and make judgements', color: 'hsl(43, 72%, 53%)' },
];

const COMMAND_WORDS_SOCIOLOGY = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise sociological definition', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out with theoretical reasoning', color: 'hsl(160, 70%, 45%)' },
  { word: 'Assess', ao: 'AO1-AO3', meaning: 'Weigh competing perspectives', color: 'hsl(43, 72%, 53%)' },
  { word: 'Evaluate', ao: 'AO1-AO3', meaning: 'Judge theoretical strength with evidence', color: 'hsl(43, 72%, 53%)' },
  { word: 'Compare', ao: 'AO1-AO3', meaning: 'Identify similarities/differences between perspectives', color: 'hsl(160, 70%, 45%)' },
  { word: 'Discuss', ao: 'AO1-AO3', meaning: 'Balanced argument from multiple perspectives', color: 'hsl(43, 72%, 53%)' },
];

const COMMAND_WORDS_RESEARCH = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise methodological definition', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Describe method with justification', color: 'hsl(200, 70%, 50%)' },
  { word: 'Design', ao: 'AO2+AO3', meaning: 'Plan a research study', color: 'hsl(200, 70%, 50%)' },
  { word: 'Evaluate', ao: 'AO3', meaning: 'Assess strengths and limitations', color: 'hsl(43, 72%, 53%)' },
  { word: 'Compare', ao: 'AO1-AO3', meaning: 'Contrast methods/paradigms', color: 'hsl(200, 70%, 50%)' },
  { word: 'Justify', ao: 'AO2+AO3', meaning: 'Defend methodological choices', color: 'hsl(43, 72%, 53%)' },
];

const COMMAND_WORDS_CHEMISTRY = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise IUPAC definition', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'State principle with reasoning', color: 'hsl(120, 60%, 45%)' },
  { word: 'Calculate', ao: 'AO2', meaning: 'Show formula, working, units, sig figs', color: 'hsl(120, 60%, 45%)' },
  { word: 'Draw', ao: 'AO1+AO2', meaning: 'Mechanism with curly arrows & charges', color: 'hsl(120, 60%, 45%)' },
  { word: 'Predict', ao: 'AO2', meaning: 'Apply knowledge to unfamiliar context', color: 'hsl(120, 60%, 45%)' },
  { word: 'Deduce', ao: 'AO2', meaning: 'Draw conclusions from data', color: 'hsl(120, 60%, 45%)' },
  { word: 'Evaluate', ao: 'AO1-AO3', meaning: 'Balanced argument with counter-argument', color: 'hsl(43, 72%, 53%)' },
];

const COMMAND_WORDS_MATHEMATICS = [
  { word: 'Solve', ao: 'AO1', meaning: 'Find the answer with full working', color: 'hsl(217, 91%, 60%)' },
  { word: 'Prove', ao: 'AO1+AO2', meaning: 'Logical deduction to establish truth', color: 'hsl(260, 70%, 55%)' },
  { word: 'Derive', ao: 'AO1+AO2', meaning: 'Obtain result from first principles', color: 'hsl(260, 70%, 55%)' },
  { word: 'Show that', ao: 'AO1+AO2', meaning: 'Verify a given result step-by-step', color: 'hsl(260, 70%, 55%)' },
  { word: 'Sketch', ao: 'AO2', meaning: 'Draw graph with key features labelled', color: 'hsl(260, 70%, 55%)' },
  { word: 'Hence', ao: 'AO2+AO3', meaning: 'Use previous result to find next', color: 'hsl(43, 72%, 53%)' },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/economics-chat`;

// Generate unique ID for messages
const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

/**
 * Compress image before sending to AI — prevents connection resets
 * Resizes to maxDim and compresses to target quality
 */
async function compressImage(file: File | Blob, maxDim = 1600, quality = 0.7): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        
        // Scale down if larger than maxDim
        if (width > maxDim || height > maxDim) {
          const ratio = Math.min(maxDim / width, maxDim / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) { reject(new Error('Canvas not supported')); return; }
        ctx.drawImage(img, 0, 0, width, height);
        
        // Output as JPEG for smaller size
        const compressed = canvas.toDataURL('image/jpeg', quality);
        resolve(compressed);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

// Premium loading state messages
const LOADING_STATES_ALEVEL = [
  'Analyzing economic variables...',
  'Processing transmission mechanisms...',
  'Constructing analytical framework...',
  'Reviewing empirical literature...',
  'Running econometric diagnostics...',
  'Synthesizing research findings...',
  'Evaluating policy implications...',
];

const LOADING_STATES_BUSINESS = [
  'Analyzing business context...',
  'Building chain of analysis...',
  'Applying AO framework...',
  'Evaluating stakeholder impact...',
  'Formulating examiner-grade response...',
];

const LOADING_STATES_LAW = [
  'Researching case authorities...',
  'Applying IRAC methodology...',
  'Cross-referencing statutes...',
  'Analyzing ratio decidendi...',
  'Formulating legal opinion...',
];

const LOADING_STATES_PSYCHOLOGY = [
  'Reviewing core studies...',
  'Applying GRAVE framework...',
  'Analyzing research methodology...',
  'Evaluating theoretical perspectives...',
  'Constructing PEEL response...',
];

const LOADING_STATES_ACCOUNTING = [
  'Checking double-entry balances...',
  'Applying IFRS standards...',
  'Computing financial ratios...',
  'Preparing financial statements...',
  'Verifying calculations...',
];

const LOADING_STATES_SOCIOLOGY = [
  'Reviewing theoretical perspectives...',
  'Analyzing social structures...',
  'Comparing functionalist and Marxist views...',
  'Evaluating empirical evidence...',
  'Constructing balanced argument...',
];

const LOADING_STATES_RESEARCH = [
  'Reviewing methodology literature...',
  'Analyzing sampling strategies...',
  'Evaluating research design...',
  'Checking statistical assumptions...',
  'Formatting citations...',
];

const LOADING_STATES_MATHEMATICS = [
  'Setting up the derivation...',
  'Computing step-by-step solution...',
  'Verifying with substitution...',
  'Rendering LaTeX output...',
  'Checking second-order conditions...',
];

const LOADING_STATES_PHYSICS = [
  'Identifying physical quantities...',
  'Applying conservation laws...',
  'Resolving forces and vectors...',
  'Checking dimensional homogeneity...',
  'Verifying with limiting cases...',
];

// Prof. Econs Avatar Component
const TutorAvatar = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full flex-shrink-0 overflow-hidden ring-2 ring-neon-gold/50 shadow-lg shadow-neon-gold/20 bg-background/80`}>
      <img 
        src={officialLogo} 
        alt="EconNexus" 
        className="w-full h-full object-contain p-0.5"
      />
    </div>
  );
};

// Exam Guidance Dropdown with AO Intelligence
const ExamGuidance = ({ commandWords, syllabusCode }: { commandWords: typeof COMMAND_WORDS_ECON; syllabusCode: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 tutor-glassmorphism"
        style={{ color: 'hsl(43 72% 53%)' }}
      >
        <Sparkles className="w-2.5 h-2.5" />
        Command Words
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 z-50 w-80 rounded-xl p-3 shadow-2xl tutor-glassmorphism tutor-gold-glow"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-[hsl(43,72%,53%)] font-semibold font-serif">{syllabusCode} Command Words</p>
              <span className="tutor-verified-badge">
                <CheckCircle2 className="w-2.5 h-2.5" />
                2026-2028
              </span>
            </div>
            <div className="space-y-1.5">
              {commandWords.map((cmd, i) => (
                <div key={i} className="flex items-start gap-2 text-xs p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                  <span 
                    className="font-bold shrink-0" 
                    style={{ color: cmd.color }}
                  >
                    {cmd.word}
                  </span>
                  <span className="text-muted-foreground flex-1">{cmd.meaning}</span>
                  <span className="tutor-command-badge tutor-ao-badge shrink-0">{cmd.ao}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-[hsl(43,72%,53%)]/15 space-y-1">
              <p className="text-[10px] text-[hsl(43,72%,53%)]/80 font-medium">AO Weightings: {{ 'Business': 'AO1 (25%) • AO2 (25%) • AO3 (25%) • AO4 (25%)', 'Law': 'IRAC: Issue • Rule • Application • Conclusion', 'Psychology': 'AO1 (25%) • AO2 (25%) • AO3 (50%)', 'Accounting': 'AO1 (35%) • AO2 (40%) • AO3 (25%)', 'Sociology': 'AO1 (30%) • AO2 (30%) • AO3 (40%)', 'Research': 'Research • Analysis • Evaluation • Presentation', 'Mathematics': 'Pure (60%) • Statistics (20%) • Mechanics (20%)', 'Physics': 'Theory (40%) • Practical (20%) • Paper 5 (15%) • Advanced (25%)', 'Chemistry': 'AO1 (35%) • AO2 (40%) • AO3 (25%)', 'Biology': 'AO1 (35%) • AO2 (40%) • AO3 (25%)' }[syllabusCode] || 'AO1 (35%) • AO2 (40%) • AO3 (25%)'}</p>
              <p className="text-[10px] text-muted-foreground/60">{{ 'Business': 'Use "Evaluate" for top-band AO4 marks', 'Law': 'Always cite case authority (OSCOLA/Bluebook)', 'Psychology': 'Use GRAVE to evaluate core studies', 'Accounting': 'Always show double-entry workings', 'Sociology': 'Present at least TWO contrasting perspectives', 'Research': 'Justify every methodological choice', 'Mathematics': 'Always show full working — marks for method, not just answer', 'Physics': 'Always show units at every step — use I-V-A-U for quantitative problems', 'Chemistry': 'Always include state symbols and units — curly arrows from lone pairs/bonds', 'Biology': 'Always use precise biological terminology — name processes and structures accurately' }[syllabusCode] || 'Use "Evaluate" for A* level answers'}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Premium typing animation with stream state awareness
const TypingIndicator = ({ streamState = 'connecting', persona = 'a-level' }: { streamState?: StreamState; persona?: Persona }) => {
  const LOADING_MAP: Record<Persona, string[]> = {
    'a-level': LOADING_STATES_ALEVEL, 'business': LOADING_STATES_BUSINESS,
    'law': LOADING_STATES_LAW, 'psychology': LOADING_STATES_PSYCHOLOGY, 'accounting': LOADING_STATES_ACCOUNTING,
    'sociology': LOADING_STATES_SOCIOLOGY, 'research': LOADING_STATES_RESEARCH, 'mathematics': LOADING_STATES_MATHEMATICS,
    'physics': LOADING_STATES_PHYSICS, 'chemistry': [
      'Identifying functional groups...',
      'Balancing equations...',
      'Analyzing spectral data...',
      'Checking IUPAC nomenclature...',
      'Verifying units and state symbols...',
    ], 'biology': [
      'Analyzing biological pathways...',
      'Mapping cellular processes...',
      'Cross-referencing syllabus content...',
      'Verifying taxonomic classification...',
      'Checking mark scheme terminology...',
    ],
  };
  const loadingStates = LOADING_MAP[persona] || LOADING_STATES_ALEVEL;
  const [loadingMessage, setLoadingMessage] = useState(loadingStates[0]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (streamState === 'connecting' || streamState === 'analyzing' || streamState === 'mapping-diagram' || streamState === 'solving-logic') {
      const interval = setInterval(() => {
        setMessageIndex(prev => (prev + 1) % loadingStates.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [streamState, loadingStates.length]);

  useEffect(() => {
    setLoadingMessage(loadingStates[messageIndex % loadingStates.length]);
  }, [messageIndex, loadingStates]);

  const getStateColor = () => {
    switch (streamState) {
      case 'streaming': return 'hsl(142, 71%, 45%)';
      case 'analyzing': return 'hsl(43, 72%, 53%)';
      case 'mapping-diagram': return 'hsl(280, 70%, 55%)';
      case 'solving-logic': return 'hsl(185, 100%, 50%)';
      case 'error': return 'hsl(0, 84%, 60%)';
      default: return 'hsl(185, 100%, 50%)';
    }
  };

  const personaNameMap: Record<Persona, string> = {
    'a-level': 'Prof. Econs',
    'business': 'Prof. Porter',
    'law': 'Prof. Blackstone',
    'psychology': 'Prof. Freud',
    'accounting': 'Prof. Pacioli',
    'sociology': 'Prof. Marx',
    'research': 'Prof. Scholar',
    'mathematics': 'Prof. Euler',
    'physics': 'Prof. Newton',
    'chemistry': 'Prof. Curie',
    'biology': 'Prof. Darwin',
  };
  const professorName = personaNameMap[persona] || 'Prof. Econs';

  const getStateText = () => {
    switch (streamState) {
      case 'streaming': return `${professorName} is typing...`;
      case 'analyzing': return loadingMessage;
      case 'mapping-diagram': return '🔍 Pass 1: Mapping diagram elements...';
      case 'solving-logic': return '🧠 Pass 2: Solving with visual logic...';
      case 'error': return 'Reconnecting...';
      default: return `Connecting to ${professorName}...`;
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Pure CSS pulse indicator — no JS animation */}
      <div className="relative">
        <div
          className="w-2.5 h-2.5 rounded-full chat-status-dot"
          style={{ backgroundColor: getStateColor() }}
        />
        <div
          className="absolute inset-0 w-2.5 h-2.5 rounded-full chat-status-ring"
          style={{ backgroundColor: getStateColor() }}
        />
      </div>
      
      <span className="text-xs font-medium font-sans" style={{ color: getStateColor() }}>
        {getStateText()}
      </span>
      
      {streamState !== 'error' && (
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full chat-typing-dot"
              style={{ backgroundColor: getStateColor() }}
            />
          ))}
        </div>
      )}
      
      {(streamState === 'analyzing' || streamState === 'mapping-diagram' || streamState === 'solving-logic') && (
        <TrendingUp className="w-3.5 h-3.5 text-neon-gold animate-pulse" />
      )}
    </div>
  );
};

// Copy button component
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Strip markdown for cleaner copy
      const cleanText = text.replace(/\*\*/g, '').replace(/\$/g, '');
      await navigator.clipboard.writeText(cleanText);
      setCopied(true);
      toast.success('Answer copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[hsl(185,100%,50%)] transition-all duration-200 px-2 py-1 rounded-md hover:bg-[hsl(185,100%,50%)]/10 chat-hover-lift"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-green-400" />
          <span className="text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>Copy Answer</span>
        </>
      )}
    </button>
  );
};

// ============================================================
// Memoized ChatBubble — only re-renders when msg.content changes
// Prevents full-list re-render during streaming token appends
// ============================================================
const markdownComponents = {
  p: ({ children }: any) => <p className="leading-relaxed mb-2">{children}</p>,
  strong: ({ children }: any) => <strong>{children}</strong>,
  code: ({ children }: any) => <code>{children}</code>,
  blockquote: ({ children }: any) => <blockquote className="border-l-2 border-[hsl(185,100%,50%)] pl-3 my-2 italic text-muted-foreground bg-[hsl(185,100%,50%)]/5 py-2 rounded-r">{children}</blockquote>,
  h3: ({ children }: any) => <h3 className="font-bold mt-3 mb-1">{children}</h3>,
  ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1">{children}</ul>,
  li: ({ children }: any) => <li>{children}</li>,
};

const ChatBubble = memo(({ msg, activeConfig, isLatest }: {
  msg: Message;
  activeConfig: { color: string; label: string };
  isLatest: boolean;
}) => {
  const bubbleClass = isLatest ? 'chat-bubble chat-bubble-enter' : 'chat-bubble';
  
  if (msg.role === 'assistant') {
    return (
      <div className={`${bubbleClass} ${isLatest ? 'chat-bubble-streaming' : ''}`}>
        <div className="flex items-start gap-3 py-4 px-2 rounded-lg" style={{
          background: 'hsl(0 0% 8% / 0.5)',
          borderLeft: `2px solid ${activeConfig.color}40`,
        }}>
          <TutorAvatar size="sm" />
          <div className="flex-1 min-w-0">
            <div className="tutor-lesson-header text-[0.55rem] mb-2">
              {activeConfig.label} Intelligence Engine
            </div>
            <div className="prose prose-invert prose-sm max-w-none tutor-professor-response break-words overflow-hidden max-w-full" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={markdownComponents}>
                {msg.content}
              </ReactMarkdown>
              <CopyButton text={msg.content} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={bubbleClass}>
      <div className="flex items-start gap-3 py-3 px-4 ml-auto max-w-[90%] sm:max-w-[85%] rounded-xl" style={{
        background: 'hsl(214 100% 8% / 0.6)',
        border: '1px solid hsl(214 100% 20% / 0.3)',
        wordWrap: 'break-word' as any,
        overflowWrap: 'break-word' as any,
        whiteSpace: 'pre-wrap',
      }}>
        <div className="flex-1 min-w-0">
          {msg.imageUrl && (
            <img src={msg.imageUrl} alt="Uploaded" className="max-w-[200px] rounded-lg mb-2 border border-white/10" />
          )}
          <p className="whitespace-pre-wrap leading-relaxed text-sm font-sans text-foreground">{msg.content}</p>
        </div>
        <div className="w-7 h-7 rounded-full flex-shrink-0 border border-primary/30 overflow-hidden animate-user-avatar-breathe">
          <img src={userProfilePhoto} alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}, (prev, next) => {
  // Only re-render if content changes (streaming tokens) or if isLatest status changes
  return prev.msg.content === next.msg.content && 
         prev.msg.id === next.msg.id && 
         prev.isLatest === next.isLatest &&
         prev.activeConfig.color === next.activeConfig.color;
});
const SystemStatus = ({ streamState }: { streamState: StreamState }) => {
  const isProcessing = streamState !== 'idle' && streamState !== 'error';
  const isError = streamState === 'error';

  return (
    <div className="flex items-center gap-1.5">
      <div className="relative flex items-center">
        {isProcessing && (
          <div
            className="absolute inset-0 rounded-full bg-[hsl(142,71%,45%)] chat-status-ring"
          />
        )}
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: isError
              ? 'hsl(0, 84%, 60%)'
              : isProcessing
              ? 'hsl(43, 72%, 53%)'
              : 'hsl(142, 71%, 45%)',
          }}
        />
      </div>
      <span
        className="text-[9px] font-medium"
        style={{
          color: isError
            ? 'hsl(0, 84%, 60%)'
            : isProcessing
            ? 'hsl(43, 72%, 53%)'
            : 'hsl(142, 71%, 45%)',
        }}
      >
        {isError ? 'Reconnecting' : isProcessing ? 'Processing' : 'Online'}
      </span>
    </div>
  );
};

export default function EconomicsChatbot() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamState, setStreamState] = useState<StreamState>('idle');
  const [retryCount, setRetryCount] = useState(0);
  const [persona, setPersona] = useState<Persona>('a-level');
  const [isChatActive, setIsChatActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedImageName, setUploadedImageName] = useState<string>('');
  // Document upload state (PDF only)
  const [documentText, setDocumentText] = useState<string | null>(null);
  const [documentName, setDocumentName] = useState<string>('');
  const [docUploadProgress, setDocUploadProgress] = useState<number>(0);
  const [docStatus, setDocStatus] = useState<'idle' | 'uploading' | 'scanning' | 'ready'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);
  const QUICK_MAP: Record<Persona, typeof QUICK_ACTIONS_ALEVEL> = {
    'a-level': QUICK_ACTIONS_ALEVEL, 'business': QUICK_ACTIONS_BUSINESS,
    'law': QUICK_ACTIONS_LAW, 'psychology': QUICK_ACTIONS_PSYCHOLOGY, 'accounting': QUICK_ACTIONS_ACCOUNTING,
    'sociology': QUICK_ACTIONS_SOCIOLOGY, 'research': QUICK_ACTIONS_RESEARCH, 'mathematics': QUICK_ACTIONS_MATHEMATICS,
    'physics': QUICK_ACTIONS_PHYSICS, 'chemistry': QUICK_ACTIONS_CHEMISTRY, 'biology': QUICK_ACTIONS_BIOLOGY,
  };
  const quickActions = QUICK_MAP[persona] || QUICK_ACTIONS_ALEVEL;
  const CMD_MAP: Record<Persona, typeof COMMAND_WORDS_ECON> = {
    'a-level': COMMAND_WORDS_ECON, 'business': COMMAND_WORDS_BUSINESS,
    'law': COMMAND_WORDS_LAW, 'psychology': COMMAND_WORDS_PSYCHOLOGY, 'accounting': COMMAND_WORDS_ACCOUNTING,
    'sociology': COMMAND_WORDS_SOCIOLOGY, 'research': COMMAND_WORDS_RESEARCH, 'mathematics': COMMAND_WORDS_MATHEMATICS,
    'physics': COMMAND_WORDS_PHYSICS, 'chemistry': COMMAND_WORDS_CHEMISTRY, 'biology': COMMAND_WORDS_BIOLOGY,
  };
  const COMMAND_WORDS = CMD_MAP[persona] || COMMAND_WORDS_ECON;
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatSectionRef = useRef<HTMLElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const streamTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const analyzeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Dim 3D background when chatbot section is in view
  useEffect(() => {
    const section = chatSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsChatActive(entry.isIntersecting && entry.intersectionRatio > 0.3);
        document.body.classList.toggle('chat-active', entry.isIntersecting && entry.intersectionRatio > 0.3);
      },
      { threshold: [0, 0.3, 0.6] }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      document.body.classList.remove('chat-active');
    };
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streamState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (streamTimeoutRef.current) {
        clearTimeout(streamTimeoutRef.current);
      }
      if (analyzeTimeoutRef.current) {
        clearTimeout(analyzeTimeoutRef.current);
      }
    };
  }, []);

  const streamChat = async (userMessages: Message[]) => {
    const lastMsg = userMessages[userMessages.length - 1];
    const hasImage = !!lastMsg?.imageUrl;
    
    setStreamState(hasImage ? 'mapping-diagram' : 'connecting');
    
    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();
    
    // Image-specific: transition from Pass 1 to Pass 2 after 4s
    if (hasImage) {
      analyzeTimeoutRef.current = setTimeout(() => {
        setStreamState('solving-logic');
      }, 4000);
    } else {
      // After 8s of no content, show premium "analyzing" state
      analyzeTimeoutRef.current = setTimeout(() => {
        setStreamState('analyzing');
      }, 8000);
    }
    
    // After 60s global timeout, show error state (matches backend 60s limit)
    streamTimeoutRef.current = setTimeout(() => {
      setStreamState('error');
    }, 60000);
    
    try {
      // Find the last user message to check for image
      const lastUserMsg = userMessages[userMessages.length - 1];
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: userMessages.slice(-6).map(m => ({ role: m.role, content: m.content })),
          persona,
          ...(lastUserMsg?.imageUrl ? { image: lastUserMsg.imageUrl } : {}),
          ...(documentText ? { documentText, documentName } : {}),
        }),
        signal: abortControllerRef.current.signal,
      });

      // Clear timeouts on response
      if (streamTimeoutRef.current) {
        clearTimeout(streamTimeoutRef.current);
        streamTimeoutRef.current = null;
      }
      if (analyzeTimeoutRef.current) {
        clearTimeout(analyzeTimeoutRef.current);
        analyzeTimeoutRef.current = null;
      }

      if (!resp.ok) {
        setStreamState('idle');
        const errorData = await resp.json().catch(() => ({}));
        
        if (resp.status === 429) {
          throw new Error('Rate limit exceeded. Please wait 30 seconds.');
        }
        if (resp.status === 402) {
          throw new Error('AI credits exhausted. Check the notes section.');
        }
        if (resp.status === 504) {
          throw new Error('Try a simpler question. Focus on one concept.');
        }
        
        throw new Error(errorData.error || errorData.suggestion || 'Please rephrase your question.');
      }

      if (!resp.body) {
        setStreamState('idle');
        throw new Error('No response body');
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let assistantContent = '';
      let hasStartedContent = false;
      const assistantId = generateId();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // Set streaming state when we receive data
        if (!hasStartedContent) {
          setStreamState('streaming');
        }
        
        const chunk = decoder.decode(value, { stream: true });
        textBuffer += chunk;

        // Process complete lines
        const lines = textBuffer.split('\n');
        textBuffer = lines.pop() || ''; // Keep incomplete line in buffer

        for (const rawLine of lines) {
          const line = rawLine.trim();
          
          // Skip empty lines, comments, and processing messages
          if (!line) continue;
          
          // Skip SSE comments (like ": OPENROUTER PROCESSING")
          if (line.startsWith(':')) continue;
          
          // Must be a data line
          if (!line.startsWith('data:')) continue;
          
          const jsonStr = line.slice(5).trim();
          if (jsonStr === '[DONE]') continue;
          if (!jsonStr) continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            
            if (typeof content === 'string' && content.length > 0) {
              if (!hasStartedContent) {
                setStreamState('streaming');
                hasStartedContent = true;
                
                // Clear timeouts once we start receiving content
                if (streamTimeoutRef.current) {
                  clearTimeout(streamTimeoutRef.current);
                  streamTimeoutRef.current = null;
                }
                if (analyzeTimeoutRef.current) {
                  clearTimeout(analyzeTimeoutRef.current);
                  analyzeTimeoutRef.current = null;
                }
              }
              
              assistantContent += content;
              
              setMessages(prev => {
                const existingIdx = prev.findIndex(m => m.id === assistantId);
                if (existingIdx !== -1) {
                  return prev.map((m, i) => 
                    i === existingIdx ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: 'assistant', content: assistantContent, id: assistantId }];
              });
            }
          } catch {
            // Invalid JSON - skip this line
            continue;
          }
        }
      }
      
      // Handle any remaining content in buffer
      if (textBuffer.trim() && textBuffer.startsWith('data:')) {
        const jsonStr = textBuffer.slice(5).trim();
        if (jsonStr && jsonStr !== '[DONE]') {
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (typeof content === 'string' && content.length > 0) {
              assistantContent += content;
              setMessages(prev => {
                const existingIdx = prev.findIndex(m => m.id === assistantId);
                if (existingIdx !== -1) {
                  return prev.map((m, i) => 
                    i === existingIdx ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: 'assistant', content: assistantContent, id: assistantId }];
              });
            }
          } catch {
            // Invalid JSON at end - ignore
          }
        }
      }
      
      setStreamState('idle');
      setRetryCount(0);
    } catch (error) {
      setStreamState('idle');
      
      if (streamTimeoutRef.current) {
        clearTimeout(streamTimeoutRef.current);
        streamTimeoutRef.current = null;
      }
      if (analyzeTimeoutRef.current) {
        clearTimeout(analyzeTimeoutRef.current);
        analyzeTimeoutRef.current = null;
      }
      
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
      
      throw error;
    }
  };

  const handleSend = async (query?: string) => {
    const rawText = query || input.trim();
    if ((!rawText && !uploadedImage) || isLoading) return;

    // Sanitize input
    const messageText = rawText ? sanitizeInput(rawText) : '';
    if (rawText && !messageText) {
      toast.error('Please enter a valid message');
      return;
    }

    // Check burst rate limit (3 messages per 5 seconds)
    const burstCheck = checkRateLimit('chat-burst', RATE_LIMITS.chatBurst);
    if (!burstCheck.allowed) {
      toast.error(`Slow down! Wait ${burstCheck.retryAfter} seconds.`);
      return;
    }

    // Check sustained rate limit (10 messages per minute)
    const rateCheck = checkRateLimit('chat', RATE_LIMITS.chat);
    if (!rateCheck.allowed) {
      toast.error(`Rate limit reached. Please wait ${rateCheck.retryAfter} seconds before sending more messages.`);
      return;
    }

    const userMsg: Message = { 
      role: 'user', 
      content: messageText || (uploadedImage ? `[Uploaded image: ${uploadedImageName}]` : ''), 
      id: generateId(),
      ...(uploadedImage ? { imageUrl: uploadedImage } : {}),
    };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setUploadedImage(null);
    setUploadedImageName('');
    // Reset textarea height after send
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    setIsLoading(true);

    try {
      await streamChat(newMessages);
      // Track chatbot interaction
      const personaLabel = PERSONA_CONFIG[persona]?.label || persona;
      const { error: trackError } = await supabase.rpc('track_interaction', { _persona: personaLabel });
      if (trackError) console.error('track_interaction failed:', trackError);
      // Track to admin dashboard
      trackInteraction(personaLabel);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response';
      
      // Dynamic Recovery: auto-retry with low-res image if connection reset and image was uploaded
      const isConnectionReset = errorMessage.toLowerCase().includes('reset') || 
                                 errorMessage.toLowerCase().includes('timeout') ||
                                 errorMessage.toLowerCase().includes('aborted');
      
      if (isConnectionReset && userMsg.imageUrl && retryCount < 3) {
        toast.info('Connection reset — retrying with optimized image...');
        setRetryCount(prev => prev + 1);
        try {
          // Retry with a lower-res version
          const lowResImage = await compressImage(
            await (await fetch(userMsg.imageUrl)).blob() as File,
            800, 0.5
          );
          const retryMessages = newMessages.map((m, i) => 
            i === newMessages.length - 1 && m.imageUrl ? { ...m, imageUrl: lowResImage } : m
          );
          setMessages(retryMessages);
          await streamChat(retryMessages);
          return;
        } catch (retryError) {
          console.error('Retry failed:', retryError);
        }
      }
      
      toast.error(errorMessage);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: isConnectionReset 
          ? `⚠️ The image analysis timed out. Try uploading a clearer, smaller photo or crop to the specific diagram area. You can also type out the question text instead.`
          : `I encountered an issue: ${errorMessage}. Try rephrasing your question or breaking it into simpler parts.`,
        id: generateId(),
        isError: true,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (messages.length < 2) return;
    
    // Remove last assistant message and retry
    const lastUserIdx = messages.map(m => m.role).lastIndexOf('user');
    if (lastUserIdx === -1) return;
    
    const userMessages = messages.slice(0, lastUserIdx + 1);
    setMessages(userMessages);
    setRetryCount(prev => prev + 1);
    setIsLoading(true);
    
    streamChat(userMessages)
      .catch(error => {
        console.error('Retry error:', error);
        toast.error('Retry failed. Please try again.');
      })
      .finally(() => setIsLoading(false));
  };

  const handleClearChat = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([]);
    setIsLoading(false);
    setStreamState('idle');
    setRetryCount(0);
    setUploadedImage(null);
    setUploadedImageName('');
    toast.success('Chat cleared');
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as content grows
  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const newHeight = Math.min(el.scrollHeight, 400);
    el.style.height = `${newHeight}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter → send (Shift+Enter → new line)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
      return;
    }
  };

  // Persona config for left rail
  const PERSONA_CONFIG: Record<Persona, { icon: typeof BookOpen; label: string; color: string; professorName: string }> = {
    'a-level': { icon: BookOpen, label: 'Economics', color: 'hsl(43, 72%, 53%)', professorName: 'Prof. Econs' },
    'business': { icon: Briefcase, label: 'Business', color: 'hsl(142, 71%, 45%)', professorName: 'Prof. Porter' },
    'law': { icon: Scale, label: 'Law', color: 'hsl(200, 80%, 55%)', professorName: 'Prof. Blackstone' },
    'psychology': { icon: Brain, label: 'Psychology', color: 'hsl(330, 70%, 55%)', professorName: 'Prof. Freud' },
    'accounting': { icon: Calculator, label: 'Accounting', color: 'hsl(25, 85%, 55%)', professorName: 'Prof. Pacioli' },
    'sociology': { icon: Users, label: 'Sociology', color: 'hsl(160, 70%, 45%)', professorName: 'Prof. Marx' },
    'research': { icon: FlaskConical, label: 'Research', color: 'hsl(200, 70%, 50%)', professorName: 'Prof. Scholar' },
    'mathematics': { icon: Sigma, label: 'Maths', color: 'hsl(260, 70%, 55%)', professorName: 'Prof. Euler' },
    'physics': { icon: Atom, label: 'Physics', color: 'hsl(15, 85%, 55%)', professorName: 'Prof. Newton' },
    'chemistry': { icon: FlaskConical, label: 'Chemistry', color: 'hsl(120, 60%, 45%)', professorName: 'Prof. Curie' },
    'biology': { icon: Dna, label: 'Biology', color: 'hsl(150, 65%, 42%)', professorName: 'Prof. Darwin' },
  };

  const activeConfig = PERSONA_CONFIG[persona];

  const SYLLABUS_MAP: Record<Persona, string> = {
    'a-level': 'Economics', 'business': 'Business', 'law': 'Law', 'psychology': 'Psychology',
    'accounting': 'Accounting', 'sociology': 'Sociology', 'research': 'Research',
    'mathematics': 'Mathematics', 'physics': 'Physics', 'chemistry': 'Chemistry', 'biology': 'Biology',
  };

  return (
    <motion.section
      id="ai-chatbot"
      ref={chatSectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-6 md:py-16 lg:py-24"
    >
      <div className="w-full max-w-[1800px] mx-auto px-0 sm:px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-8"
        >
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass-card text-xs md:text-sm text-secondary mb-2 md:mb-4">
            🧠 Command Center
          </span>
          <h2 className="font-serif text-fluid-3xl lg:text-fluid-4xl font-bold section-title mb-2">
            Intelligence Hub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2 text-sm md:text-base hidden sm:block">
            10 specialized AI minds. One unified workspace. Select your expert and begin.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-none sm:rounded-xl md:rounded-2xl overflow-hidden"
          style={{
            border: '1px solid hsl(43 72% 53% / 0.15)',
            boxShadow: '0 8px 48px hsl(214 100% 14% / 0.6), 0 0 80px hsl(185 100% 50% / 0.05)',
          }}
        >
          <div className="flex flex-col lg:flex-row chatbot-container overflow-hidden" style={{ height: 'calc(100dvh - 24px)', maxHeight: '1800px', willChange: 'transform', transform: 'translate3d(0,0,0)' }}>

            {/* MOBILE & TABLET: Horizontal Scrollable Pill Menu */}
            <div className="lg:hidden relative shrink-0">
              {/* Fade edges for scroll indication */}
              <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(0 0% 2%), transparent)' }} />
              <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(0 0% 2%), transparent)' }} />
              <div 
                className="flex items-center gap-1.5 px-4 py-2 overflow-x-auto scrollbar-hide border-b border-white/[0.06]"
                style={{ 
                  background: 'hsl(0 0% 2% / 0.95)', 
                  backdropFilter: 'blur(20px)', 
                  WebkitBackdropFilter: 'blur(20px)',
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x proximity',
                }}
              >
                {(Object.keys(PERSONA_CONFIG) as Persona[]).map((p) => {
                  const cfg = PERSONA_CONFIG[p];
                  const Icon = cfg.icon;
                  const isActive = persona === p;
                  return (
                    <button
                      key={p}
                      onClick={() => { setPersona(p); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
                      className="flex items-center gap-1.5 rounded-full shrink-0 active:scale-95"
                      style={{
                        transition: 'all 0.1s cubic-bezier(0.22, 1, 0.36, 1)',
                        willChange: 'transform, background, border-color, box-shadow',
                        transform: 'translate3d(0,0,0)',
                        padding: isActive ? '6px 14px' : '6px 12px',
                        scrollSnapAlign: 'center',
                        ...(isActive ? {
                          background: `linear-gradient(135deg, ${cfg.color}25, ${cfg.color}10)`,
                          border: `1.5px solid ${cfg.color}50`,
                          boxShadow: `0 0 20px ${cfg.color}20, inset 0 1px 0 ${cfg.color}15`,
                        } : { 
                          background: 'hsl(0 0% 100% / 0.04)',
                          border: '1px solid hsl(0 0% 100% / 0.08)',
                        }),
                      }}
                      title={cfg.label}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: isActive ? cfg.color : 'hsl(0 0% 55%)' }} />
                      <span 
                        className="font-semibold whitespace-nowrap" 
                        style={{ 
                          fontSize: '11px', 
                          letterSpacing: '0.02em',
                          color: isActive ? cfg.color : 'hsl(0 0% 55%)',
                        }}
                      >
                        {cfg.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DESKTOP: Vertical Left Rail */}
            <div className="hidden lg:flex lg:w-[72px] lg:flex-col items-center gap-1 p-2 lg:py-4 border-r border-white/[0.06] overflow-y-auto scrollbar-hide"
              style={{ background: 'hsl(0 0% 3% / 0.8)', backdropFilter: 'blur(20px)' }}
            >
              {(Object.keys(PERSONA_CONFIG) as Persona[]).map((p) => {
                const cfg = PERSONA_CONFIG[p];
                const Icon = cfg.icon;
                const isActive = persona === p;
                return (
                  <button
                    key={p}
                    onClick={() => { setPersona(p); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
                    className={`relative flex flex-col items-center justify-center rounded-xl min-w-[52px] w-[52px] h-[52px] shrink-0 chat-quick-action ${
                      isActive ? '' : 'hover:bg-white/[0.04]'
                    }`}
                    style={{
                      willChange: 'transform, background, border-color, box-shadow',
                      transform: 'translate3d(0,0,0)',
                      transition: 'all 0.1s cubic-bezier(0.22, 1, 0.36, 1)',
                      ...(isActive ? {
                        background: `linear-gradient(135deg, ${cfg.color}15, ${cfg.color}08)`,
                        border: `1px solid ${cfg.color}40`,
                        boxShadow: `0 0 20px ${cfg.color}20`,
                      } : { border: '1px solid transparent' }),
                    }}
                    title={cfg.label}
                  >
                    <Icon className="w-4 h-4" style={{ color: isActive ? cfg.color : 'hsl(0 0% 50%)', transition: 'color 0.1s ease' }} />
                    <span className="text-[8px] font-medium mt-0.5" style={{ color: isActive ? cfg.color : 'hsl(0 0% 40%)', transition: 'color 0.1s ease' }}>
                      {cfg.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="persona-indicator"
                        className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-l-full"
                        style={{ background: cfg.color }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CENTER PANE - Full Width */}
            <div className="flex-1 flex flex-col min-w-0 min-h-0 relative"
              style={{ background: 'linear-gradient(180deg, hsl(0 0% 3%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 4%) 100%)' }}
            >
              {/* Active Persona Header */}
              <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 border-b border-white/[0.06]"
                style={{ background: 'hsl(0 0% 4% / 0.9)', backdropFilter: 'blur(12px)' }}
              >
                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                  <TutorAvatar size="sm" />
                  <div className="min-w-0">
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={persona}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="nexus-professor-name-sm md:nexus-professor-name font-bold truncate"
                      >
                        {activeConfig.professorName}
                      </motion.h3>
                    </AnimatePresence>
                    <p className="text-[0.65rem] md:text-[0.8rem] text-muted-foreground truncate" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>The Central Nexus for Global Curriculums</p>
                  </div>
                  <div className="tutor-verified-badge ml-1 text-[9px] hidden sm:flex">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>{SYLLABUS_MAP[persona]}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
                  <SystemStatus streamState={streamState} />
                  <div className="hidden md:block">
                    <ExamGuidance commandWords={COMMAND_WORDS} syllabusCode={SYLLABUS_MAP[persona]} />
                  </div>
                  {messages.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={handleClearChat} className="text-muted-foreground hover:text-destructive text-xs h-8 px-1.5 md:px-2">
                      <Trash2 className="w-3 h-3" />
                      <span className="hidden md:inline ml-1">Clear</span>
                    </Button>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-1.5 px-3 md:px-4 py-2 border-b border-white/[0.04] overflow-x-auto scrollbar-hide"
                style={{ background: 'hsl(0 0% 3% / 0.6)' }}
              >
                {quickActions.slice(0, 5).map((action, i) => (
                  <button
                    key={`${persona}-${i}`}
                    onClick={() => handleSend(action.query)}
                    disabled={isLoading}
                    className="chat-quick-action min-h-[32px] px-3 py-1.5 rounded-full text-[10px] font-medium disabled:opacity-50 whitespace-nowrap flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(214 100% 14% / 0.3), ${activeConfig.color}10)`,
                      border: `1px solid ${activeConfig.color}30`,
                      color: activeConfig.color,
                    }}
                  >
                    <Sparkles className="w-2 h-2 inline mr-1" />
                    {action.label}
                  </button>
                ))}
              </div>

              {/* Chat Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain" style={{ minHeight: 0, WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}>
                <div className="px-3 md:px-4 py-3 pb-40">
                  {messages.length === 0 ? (
                    <div className="h-[300px] md:h-[400px] flex items-center justify-center text-center relative overflow-hidden">
                      {/* Glassmorphic backdrop */}
                      <div className="absolute inset-0 rounded-2xl" style={{
                        background: 'radial-gradient(ellipse at center bottom, hsl(214 100% 8% / 0.6), transparent 70%)',
                      }} />
                      
                      {/* Guide Character */}
                      <div className="relative z-10 flex flex-col items-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={persona}
                            initial={{ opacity: 0, scale: 0.85, y: 30, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.9, y: -15, filter: 'blur(6px)' }}
                            transition={{ 
                              duration: 0.5, 
                              ease: [0.25, 0.46, 0.45, 0.94],
                              opacity: { duration: 0.35 },
                              scale: { type: 'spring', stiffness: 200, damping: 20, mass: 0.8 },
                              filter: { duration: 0.4 },
                            }}
                            className="relative mb-3"
                            style={{ willChange: 'transform, opacity, filter' }}
                          >
                            <motion.div 
                              className="w-24 h-24 md:w-36 md:h-36 mx-auto relative"
                              animate={{ y: [0, -6, 0] }}
                              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                              style={{ willChange: 'transform' }}
                            >
                              {/* Glassmorphic frame behind character */}
                              <motion.div 
                                className="absolute inset-2 rounded-full"
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                  background: `radial-gradient(circle, ${activeConfig.color}15, transparent 70%)`,
                                  border: `1px solid ${activeConfig.color}15`,
                                  backdropFilter: 'blur(8px)',
                                  willChange: 'opacity',
                                }} 
                              />
                              <img 
                                src={GUIDE_IMAGES[persona]} 
                                alt={activeConfig.professorName}
                                className="w-full h-full object-contain relative z-10"
                                style={{ 
                                  filter: `drop-shadow(0 8px 24px ${activeConfig.color}30)`,
                                  willChange: 'filter',
                                }}
                              />
                              {/* Cyan glow ring */}
                              <motion.div 
                                className="absolute inset-0 rounded-full pointer-events-none"
                                animate={{ 
                                  boxShadow: [
                                    `0 0 30px ${activeConfig.color}15, 0 0 60px ${activeConfig.color}08`,
                                    `0 0 50px ${activeConfig.color}25, 0 0 100px ${activeConfig.color}12`,
                                    `0 0 30px ${activeConfig.color}15, 0 0 60px ${activeConfig.color}08`,
                                  ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ willChange: 'box-shadow' }}
                              />
                            </motion.div>
                          </motion.div>
                        </AnimatePresence>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={persona + '-text'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
                          >
                            <p className="nexus-professor-name-sm md:nexus-professor-name mb-1">
                              {activeConfig.professorName}
                            </p>
                            <p className="text-[0.7rem] md:text-[0.8rem] text-muted-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>The Central Nexus for Global Curriculums</p>
                            <p className="text-xs md:text-sm text-muted-foreground/60 font-serif">Ready for your questions.</p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {messages.map((msg, idx) => (
                        <ChatBubble
                          key={msg.id}
                          msg={msg}
                          activeConfig={activeConfig}
                          isLatest={idx === messages.length - 1}
                        />
                      ))}
                      {streamState !== 'idle' && (
                        <div className="flex items-start gap-3 py-3 px-2 chat-bubble chat-bubble-enter">
                          <TutorAvatar size="sm" />
                          <div className="rounded-lg px-3 py-2" style={{ background: 'hsl(0 0% 8% / 0.5)', border: `1px solid ${activeConfig.color}20` }}>
                            <TypingIndicator streamState={streamState} persona={persona} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* STICKY INPUT BAR */}
              <div className="relative px-2 md:px-3 pb-2 md:pb-3 pt-2 chatbot-input-bar">
                {uploadedImage && (
                  <div className="flex items-center gap-2 mb-2 p-2 rounded-lg bg-white/5 border border-white/10 mx-1">
                    <img src={uploadedImage} alt="Upload preview" className="w-10 h-10 rounded object-cover" />
                    <span className="text-xs text-muted-foreground flex-1 truncate">{uploadedImageName}</span>
                    <button onClick={() => { setUploadedImage(null); setUploadedImageName(''); }} className="text-muted-foreground hover:text-destructive">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                <div className="flex items-end gap-1.5 md:gap-2 rounded-2xl p-1.5 md:p-2"
                  style={{
                    background: 'hsl(0 0% 6% / 0.85)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: '1px solid hsl(43 72% 53% / 0.15)',
                    boxShadow: '0 -8px 40px hsl(0 0% 0% / 0.4), 0 0 60px hsl(185 100% 50% / 0.03)',
                  }}
                >
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const imgRateCheck = checkImageUploadRateLimit();
                      if (!imgRateCheck.allowed) { toast.error(`Image upload limit reached. Wait ${imgRateCheck.retryAfter}s.`); e.target.value = ''; return; }
                      if (file.size > 10 * 1024 * 1024) { toast.error('Image must be under 10MB'); e.target.value = ''; return; }
                      toast.info('Compressing image...');
                      try { const compressed = await compressImage(file); setUploadedImage(compressed); setUploadedImageName(file.name); toast.success('Image ready'); } catch { toast.error('Failed to process image'); }
                      e.target.value = '';
                    }}
                  />
                  <Button onClick={() => fileInputRef.current?.click()} variant="ghost" size="icon" disabled={isLoading}
                    className="shrink-0 h-10 w-10 rounded-xl text-muted-foreground hover:text-[hsl(43,72%,53%)] hover:bg-white/[0.04]" title="Upload image">
                    <ImagePlus className="w-4 h-4" />
                  </Button>
                  <Textarea ref={textareaRef} value={input}
                    onChange={(e) => { setInput(e.target.value); handleTextareaInput(); }}
                    onKeyDown={handleKeyDown} onInput={handleTextareaInput}
                    placeholder={uploadedImage ? "Describe what to analyze…" : "Ask anything…"}
                    disabled={isLoading} rows={1}
                    className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/30 text-[16px] md:text-sm font-sans resize-none overflow-y-auto leading-relaxed px-2 py-2.5"
                    style={{ minHeight: '44px', maxHeight: '200px', scrollbarWidth: 'thin', scrollbarColor: 'hsl(43 72% 53% / 0.2) transparent' }}
                  />
                  <div className="flex items-end gap-1 shrink-0">
                    {messages.length > 0 && !isLoading && retryCount < 3 && (
                      <Button onClick={handleRetry} variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:text-[hsl(43,72%,53%)] hover:bg-white/[0.04] hidden md:flex" title="Retry">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </Button>
                    )}
                    <Button onClick={() => handleSend()} disabled={(!input.trim() && !uploadedImage) || isLoading} size="icon"
                      className="h-10 w-10 rounded-xl transition-all"
                      style={{ background: `linear-gradient(135deg, hsl(214 100% 15%), ${activeConfig.color})`, border: `1px solid ${activeConfig.color}40` }}
                      title="Send (Enter)">
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <p className="mt-1 text-[9px] text-muted-foreground/40 text-right select-none px-2 hidden md:block">Shift+Enter for new line · Enter to send</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
