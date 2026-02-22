import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Sparkles, Loader2, Copy, Check, RefreshCw, Trash2, CheckCircle2, TrendingUp, GraduationCap, BookOpen, Briefcase, Scale, Brain, Calculator, Users, FlaskConical, Sigma, ImagePlus, X, Atom, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import professorAvatar from '@/assets/professor-avatar.png';
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

type Persona = 'a-level' | 'university' | 'business' | 'law' | 'psychology' | 'accounting' | 'sociology' | 'research' | 'mathematics' | 'physics';

const QUICK_ACTIONS_ALEVEL = [
  { label: 'J-Curve Effect', query: 'Explain the J-Curve effect and why the current account worsens before improving after depreciation.' },
  { label: 'Liquidity Trap', query: 'Analyze the Keynesian Liquidity Trap and why monetary policy becomes ineffective at the zero lower bound.' },
  { label: 'Phillips Curve', query: 'Explain the Expectations-Augmented Phillips Curve and the concept of NAIRU.' },
  { label: 'Harrod-Domar', query: 'Derive the Harrod-Domar growth model (g=s/k) and evaluate its limitations for developing economies.' },
  { label: 'Kinked Demand', query: 'Analyze the Kinked Demand Curve model and explain price rigidity in oligopolistic markets.' },
  { label: 'Marshall-Lerner', query: 'Explain the Marshall-Lerner condition and when devaluation improves the trade balance.' },
];

const QUICK_ACTIONS_UNIVERSITY = [
  { label: 'Nash Equilibrium', query: 'Derive the Nash Equilibrium for a Cournot duopoly with asymmetric costs. Show the payoff matrix, best response functions, and verify the equilibrium satisfies no profitable deviation.' },
  { label: 'Lagrangian Optimization', query: 'Solve the consumer utility maximization problem using the Lagrangian method for a Cobb-Douglas utility function U(x,y) = x^0.4 y^0.6 subject to budget constraint 10x + 20y = 200. Show complete step-by-step derivation with SOC verification.' },
  { label: 'Heckscher-Ohlin', query: 'Derive the Heckscher-Ohlin theorem and explain the Stolper-Samuelson and Rybczynski theorems. What are the empirical challenges (Leontief Paradox)?' },
  { label: 'Solow Steady-State', query: 'Derive the Solow-Swan steady-state, the golden rule of capital accumulation, and the convergence hypothesis. Show full mathematical derivation with economic interpretation at every step.' },
  { label: 'OLS & Diagnostics', query: 'Guide me through running an OLS regression: model specification, estimation, interpreting P-values and confidence intervals, and checking Gauss-Markov assumptions. What remedial measures exist for each violation?' },
  { label: 'Prospect Theory', query: 'Explain Kahneman & Tversky\'s Prospect Theory. Derive the value function properties (loss aversion, diminishing sensitivity) and probability weighting function. How does this challenge Expected Utility Theory?' },
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
  'Synthesizing A-Level concepts...',
  'Evaluating policy implications...',
];

const LOADING_STATES_UNIVERSITY = [
  'Reviewing empirical literature...',
  'Running econometric diagnostics...',
  'Analyzing Pakistan macroeconomic data...',
  'Constructing quantitative framework...',
  'Synthesizing research findings...',
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
    <div className={`${sizeClasses[size]} rounded-full flex-shrink-0 overflow-hidden ring-2 ring-neon-gold/50 shadow-lg shadow-neon-gold/20`}>
      <img 
        src={professorAvatar} 
        alt="Prof. Econs" 
        className="w-full h-full object-cover"
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
              <p className="text-xs text-[hsl(43,72%,53%)] font-semibold font-serif">Cambridge {syllabusCode} Command Words</p>
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
              <p className="text-[10px] text-[hsl(43,72%,53%)]/80 font-medium">AO Weightings: {{ '9609': 'AO1 (25%) • AO2 (25%) • AO3 (25%) • AO4 (25%)', 'Law': 'IRAC: Issue • Rule • Application • Conclusion', '9990': 'AO1 (25%) • AO2 (25%) • AO3 (50%)', '9706': 'AO1 (35%) • AO2 (40%) • AO3 (25%)', '9699': 'AO1 (30%) • AO2 (30%) • AO3 (40%)', 'IPQ': 'Research • Analysis • Evaluation • Presentation', '9709': 'Pure (60%) • Statistics (20%) • Mechanics (20%)', '9702': 'Theory (40%) • Practical (20%) • Paper 5 (15%) • Advanced (25%)' }[syllabusCode] || 'AO1 (35%) • AO2 (40%) • AO3 (25%)'}</p>
              <p className="text-[10px] text-muted-foreground/60">{{ '9609': 'Use "Evaluate" for top-band AO4 marks', 'Law': 'Always cite case authority (OSCOLA/Bluebook)', '9990': 'Use GRAVE to evaluate core studies', '9706': 'Always show double-entry workings', '9699': 'Present at least TWO contrasting perspectives', 'IPQ': 'Justify every methodological choice', '9709': 'Always show full working — marks for method, not just answer', '9702': 'Always show units at every step — use I-V-A-U for quantitative problems' }[syllabusCode] || 'Use "Evaluate" for A* level answers'}</p>
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
    'a-level': LOADING_STATES_ALEVEL, 'university': LOADING_STATES_UNIVERSITY, 'business': LOADING_STATES_BUSINESS,
    'law': LOADING_STATES_LAW, 'psychology': LOADING_STATES_PSYCHOLOGY, 'accounting': LOADING_STATES_ACCOUNTING,
    'sociology': LOADING_STATES_SOCIOLOGY, 'research': LOADING_STATES_RESEARCH, 'mathematics': LOADING_STATES_MATHEMATICS,
    'physics': LOADING_STATES_PHYSICS,
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

  const getStateText = () => {
    switch (streamState) {
      case 'streaming': return 'Prof. Econs is typing...';
      case 'analyzing': return loadingMessage;
      case 'mapping-diagram': return '🔍 Pass 1: Mapping diagram elements...';
      case 'solving-logic': return '🧠 Pass 2: Solving with visual logic...';
      case 'error': return 'Reconnecting...';
      default: return 'Connecting to Prof. Econs...';
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Premium pulse indicator */}
      <div className="relative">
        <motion.div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: getStateColor() }}
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: getStateColor() }}
          animate={{ scale: [1, 2, 2], opacity: [0.4, 0, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      
      <span className="text-xs font-medium font-sans" style={{ color: getStateColor() }}>
        {getStateText()}
      </span>
      
      {streamState !== 'error' && (
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: getStateColor() }}
              animate={{ 
                y: [0, -5, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut"
              }}
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
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[hsl(185,100%,50%)] transition-colors px-2 py-1 rounded-md hover:bg-[hsl(185,100%,50%)]/10"
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
    </motion.button>
  );
};

// ============================================================
// System Status Indicator — corner badge showing AI health
// ============================================================
const SystemStatus = ({ streamState }: { streamState: StreamState }) => {
  const isProcessing = streamState !== 'idle' && streamState !== 'error';
  const isError = streamState === 'error';

  return (
    <div className="flex items-center gap-1.5">
      <div className="relative flex items-center">
        {isProcessing && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[hsl(142,71%,45%)]"
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamState, setStreamState] = useState<StreamState>('idle');
  const [retryCount, setRetryCount] = useState(0);
  const [persona, setPersona] = useState<Persona>('a-level');
  const [isChatActive, setIsChatActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedImageName, setUploadedImageName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const QUICK_MAP: Record<Persona, typeof QUICK_ACTIONS_ALEVEL> = {
    'a-level': QUICK_ACTIONS_ALEVEL, 'university': QUICK_ACTIONS_UNIVERSITY, 'business': QUICK_ACTIONS_BUSINESS,
    'law': QUICK_ACTIONS_LAW, 'psychology': QUICK_ACTIONS_PSYCHOLOGY, 'accounting': QUICK_ACTIONS_ACCOUNTING,
    'sociology': QUICK_ACTIONS_SOCIOLOGY, 'research': QUICK_ACTIONS_RESEARCH, 'mathematics': QUICK_ACTIONS_MATHEMATICS,
    'physics': QUICK_ACTIONS_PHYSICS,
  };
  const quickActions = QUICK_MAP[persona] || QUICK_ACTIONS_ALEVEL;
  const CMD_MAP: Record<Persona, typeof COMMAND_WORDS_ECON> = {
    'a-level': COMMAND_WORDS_ECON, 'university': COMMAND_WORDS_ECON, 'business': COMMAND_WORDS_BUSINESS,
    'law': COMMAND_WORDS_LAW, 'psychology': COMMAND_WORDS_PSYCHOLOGY, 'accounting': COMMAND_WORDS_ACCOUNTING,
    'sociology': COMMAND_WORDS_SOCIOLOGY, 'research': COMMAND_WORDS_RESEARCH, 'mathematics': COMMAND_WORDS_MATHEMATICS,
    'physics': COMMAND_WORDS_PHYSICS,
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
      const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
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
          messages: userMessages.map(m => ({ role: m.role, content: m.content })),
          persona,
          ...(lastUserMsg?.imageUrl ? { image: lastUserMsg.imageUrl } : {}),
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
    // Cmd/Ctrl + Enter → send
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSend();
      return;
    }
    // Plain Enter → new line (default textarea behaviour, do nothing)
  };

  return (
    <motion.section
      id="ai-chatbot"
      ref={chatSectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-10 md:py-16 lg:py-24"
    >
      <div className="w-full max-w-[1800px] mx-auto px-0 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          {/* Persona Toggle */}
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <motion.button
              onClick={() => { setPersona('a-level'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'a-level'
                  ? 'bg-[hsl(43,72%,53%)]/15 border-[hsl(43,72%,53%)]/50 text-[hsl(43,72%,53%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              Economics
            </motion.button>
            <motion.button
              onClick={() => { setPersona('business'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'business'
                  ? 'bg-[hsl(142,71%,45%)]/15 border-[hsl(142,71%,45%)]/50 text-[hsl(142,71%,45%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Briefcase className="w-3 h-3" />
              Business
            </motion.button>
            <motion.button
              onClick={() => { setPersona('university'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'university'
                  ? 'bg-[hsl(185,100%,50%)]/15 border-[hsl(185,100%,50%)]/50 text-[hsl(185,100%,50%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              University
            </motion.button>
            <motion.button
              onClick={() => { setPersona('law'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'law'
                  ? 'bg-[hsl(280,70%,55%)]/15 border-[hsl(280,70%,55%)]/50 text-[hsl(280,70%,55%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Scale className="w-3 h-3" />
              Law
            </motion.button>
            <motion.button
              onClick={() => { setPersona('psychology'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'psychology'
                  ? 'bg-[hsl(330,70%,55%)]/15 border-[hsl(330,70%,55%)]/50 text-[hsl(330,70%,55%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Brain className="w-3 h-3" />
              Psychology
            </motion.button>
            <motion.button
              onClick={() => { setPersona('accounting'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'accounting'
                  ? 'bg-[hsl(25,85%,55%)]/15 border-[hsl(25,85%,55%)]/50 text-[hsl(25,85%,55%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Calculator className="w-3 h-3" />
              Accounting
            </motion.button>
            <motion.button
              onClick={() => { setPersona('sociology'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'sociology'
                  ? 'bg-[hsl(160,70%,45%)]/15 border-[hsl(160,70%,45%)]/50 text-[hsl(160,70%,45%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Users className="w-3 h-3" />
              Sociology
            </motion.button>
            <motion.button
              onClick={() => { setPersona('research'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'research'
                  ? 'bg-[hsl(200,70%,50%)]/15 border-[hsl(200,70%,50%)]/50 text-[hsl(200,70%,50%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <FlaskConical className="w-3 h-3" />
              Research IPQ
            </motion.button>
            <motion.button
              onClick={() => { setPersona('mathematics'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'mathematics'
                  ? 'bg-[hsl(260,70%,55%)]/15 border-[hsl(260,70%,55%)]/50 text-[hsl(260,70%,55%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Sigma className="w-3 h-3" />
              Mathematics
            </motion.button>
            <motion.button
              onClick={() => { setPersona('physics'); setMessages([]); setUploadedImage(null); setUploadedImageName(''); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all border min-h-[44px] ${
                persona === 'physics'
                  ? 'bg-[hsl(15,85%,55%)]/15 border-[hsl(15,85%,55%)]/50 text-[hsl(15,85%,55%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Atom className="w-3 h-3" />
              Physics
            </motion.button>
          </div>

          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass-card mb-3 md:mb-4">
            <TutorAvatar size="sm" />
            <div className="text-left">
              <span className="text-xs md:text-sm text-[hsl(43,72%,53%)] font-semibold block">
                {{ 'a-level': 'Prof. Econs', 'university': 'Dr. Econs', 'business': 'Prof. Business', 'law': 'Dr. Juris', 'psychology': 'Dr. Psyche', 'accounting': 'Prof. Ledger', 'sociology': 'Dr. Société', 'research': 'Dr. Methods', 'mathematics': 'Prof. Mathesis', 'physics': 'Prof. Newton' }[persona]}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground">
                {{ 'a-level': 'CIE Senior Fellow', 'university': 'Senior Research Fellow', 'business': 'Cambridge Senior Examiner', 'law': 'Global Legal Scholar', 'psychology': 'Psychology Specialist', 'accounting': 'Accounting & Finance Specialist', 'sociology': 'Sociology Specialist', 'research': 'Research Methods Guide', 'mathematics': 'Pure & Applied Mathematics', 'physics': 'CIE 9702 & University Physics' }[persona]}
              </span>
            </div>
            <div className="tutor-verified-badge ml-1 md:ml-2 text-[9px] md:text-[10px]">
              <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" />
              <span>{{ 'a-level': '2026-2028', 'university': 'HEC', 'business': '2026-2028', 'law': 'IRAC', 'psychology': 'GRAVE', 'accounting': 'IFRS', 'sociology': 'PEEL', 'research': 'IPQ', 'mathematics': 'LaTeX', 'physics': 'I-V-A-U' }[persona]}</span>
            </div>
          </div>
          <h2 className="font-serif text-fluid-3xl lg:text-fluid-4xl font-bold section-title mb-2" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
            {{ 'a-level': 'Stuck on a Concept?', 'university': 'Research Query?', 'business': 'Business Question?', 'law': 'Legal Question?', 'psychology': 'Psychology Question?', 'accounting': 'Accounting Question?', 'sociology': 'Sociology Question?', 'research': 'Research Question?', 'mathematics': 'Maths Problem?', 'physics': 'Physics Problem?' }[persona]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2" style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}>
            {{ 
              'a-level': 'Ask the Cambridge A-Level Economics Professor • Text-Only Analysis Mode',
              'university': 'Senior Research Fellow • LSE/Oxford Standard • Game Theory • Econometrics • Behavioral Econ',
              'business': 'Cambridge Senior Examiner • Business Studies • AO-Structured Responses',
              'law': 'Global Legal Scholar • IRAC Method • Contract • Tort • Criminal • Constitutional Law',
              'psychology': 'Psychology Specialist • Core Studies • GRAVE Framework • PEEL Structure',
              'accounting': 'Accounting & Finance Specialist • Double Entry • IFRS • WACC • NPV/IRR',
              'sociology': 'Sociology Specialist • Functionalism • Marxism • Postmodernism • Globalisation',
              'research': 'Research Methods Guide • IPQ • Sampling • Analysis • Harvard/APA Referencing',
              'mathematics': 'Pure & Applied Mathematics • Calculus • Linear Algebra • Statistics • LaTeX Derivations',
              'physics': 'CIE 9702 & University Physics • Mechanics • Waves • Fields • Quantum • I-V-A-U Method',
            }[persona]}
          </p>
        </motion.div>

        {/* Chat Card - Premium Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-none sm:rounded-xl md:rounded-2xl overflow-hidden tutor-chat-container tutor-gold-glow"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(43 72% 53% / 0.2)',
            boxShadow: '0 8px 48px hsl(214 100% 14% / 0.6), inset 0 1px 0 hsl(43 72% 53% / 0.08)',
          }}
        >
          {/* Premium glass overlay */}
          <div 
            className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, hsl(43 72% 53% / 0.03) 0%, transparent 30%, hsl(214 100% 14% / 0.1) 100%)',
            }}
          />

          {/* Academic Banner — with System Status indicator */}
          <div className="tutor-header-banner relative flex items-center justify-between px-3 md:px-4">
            <p className="tutor-header-title text-[0.6rem] md:text-[0.7rem]">
              {{ 'a-level': 'Cambridge A-Level Economics', 'university': 'Research Fellow Mode • LSE/Oxford Academic Standard', 'business': 'Cambridge A-Level Business', 'law': 'Global Legal Scholar • Oxford/Harvard Standard', 'psychology': 'Cambridge Psychology • GRAVE Mode', 'accounting': 'Cambridge Accounting • IFRS Mode', 'sociology': 'Cambridge Sociology', 'research': 'Research Methods • IPQ', 'mathematics': 'Pure & Applied Mathematics • LaTeX Mode', 'physics': 'Cambridge Physics 9702 • I-V-A-U Mode' }[persona]}
            </p>
            <div className="flex items-center gap-2">
              <SystemStatus streamState={streamState} />
              <span className="text-[0.5rem] md:text-[0.6rem] text-[hsl(43,72%,53%)]/60 font-medium hidden sm:inline">
                {{ 'a-level': 'Text Analysis Mode', 'university': 'Guided Derivation Mode', 'business': 'AO-Structured Mode', 'law': 'IRAC Analysis Mode', 'psychology': 'PEEL + GRAVE Mode', 'accounting': 'Double-Entry + LaTeX Mode', 'sociology': 'PEEL + Perspectives Mode', 'research': 'Research Cycle Mode', 'mathematics': 'Step-by-Step Derivation Mode', 'physics': 'I-V-A-U + Conceptual Summary Mode' }[persona]}
              </span>
            </div>
          </div>

          {/* Header with Clear Button - Mobile optimized */}
          <div className="relative flex flex-col md:flex-row md:items-center justify-between p-3 lg:p-4 border-b border-[hsl(43,72%,53%)]/20 gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1 md:gap-1.5 overflow-x-auto scrollbar-hide pb-1">
                {quickActions.slice(0, 4).map((action, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleSend(action.query)}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 16px hsl(43 72% 53% / 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="min-h-[44px] min-w-[44px] px-3 md:px-3.5 py-2 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, hsl(214 100% 14% / 0.4), hsl(43 72% 53% / 0.1))',
                      border: '1px solid hsl(43 72% 53% / 0.4)',
                      color: 'hsl(43 72% 53%)',
                    }}
                  >
                    <Sparkles className="w-2 h-2 md:w-2.5 md:h-2.5 inline mr-0.5 md:mr-1" />
                    {action.label}
                  </motion.button>
                ))}
                {persona !== 'university' && <ExamGuidance commandWords={COMMAND_WORDS} syllabusCode={{ 'a-level': '9708', 'business': '9609', 'law': 'Law', 'psychology': '9990', 'accounting': '9706', 'sociology': '9699', 'research': 'IPQ', 'university': '', 'mathematics': '9709', 'physics': '9702' }[persona]} />}
              </div>
            </div>
            
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearChat}
                className="text-muted-foreground hover:text-destructive shrink-0 text-xs min-h-[44px] self-end md:self-auto"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                Clear
              </Button>
            )}
          </div>

          <ScrollArea 
            ref={scrollRef}
            className="h-[340px] md:h-[450px] lg:h-[560px] xl:h-[620px] p-2 sm:p-3 lg:p-5 relative"
          >
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <div className="text-muted-foreground">
                  <TutorAvatar size="lg" />
                  <p className="text-base font-semibold text-[hsl(43,72%,53%)] mt-4 font-serif">
                    {{ 'a-level': 'Prof. Econs', 'university': 'Dr. Econs', 'business': 'Prof. Business', 'law': 'Dr. Juris', 'psychology': 'Dr. Psyche', 'accounting': 'Prof. Ledger', 'sociology': 'Dr. Société', 'research': 'Dr. Methods', 'mathematics': 'Prof. Mathesis', 'physics': 'Prof. Newton' }[persona]}
                  </p>
                  <p className="text-xs text-[hsl(43,72%,53%)]/70 mb-2">
                    {{ 'a-level': 'CIE Senior Fellow • Text Analysis Mode', 'university': 'Senior Research Fellow • LSE/Oxford Standard', 'business': 'Cambridge Senior Examiner', 'law': 'Global Legal Scholar • IRAC Method', 'psychology': 'Psychology Specialist • GRAVE Framework', 'accounting': 'Accounting Specialist • IFRS Standards', 'sociology': 'Sociology Specialist • Perspectives Mode', 'research': 'Research Methods Guide • IPQ', 'mathematics': 'Pure & Applied Mathematics • LaTeX Mode', 'physics': 'Physics Specialist • I-V-A-U Method' }[persona]}
                  </p>
                  <p className="text-sm mt-1 opacity-70 font-serif">
                    {{ 'a-level': 'Your Senior Cambridge Examiner is ready', 'university': 'Your Senior Research Fellow is ready for guided derivations', 'business': 'Your Cambridge Senior Examiner is ready for AO-structured answers', 'law': 'Your Legal Scholar is ready for IRAC analysis', 'psychology': 'Your Psychology Specialist is ready for GRAVE evaluations', 'accounting': 'Your Accounting Specialist is ready for double-entry and ratios', 'sociology': 'Your Sociology Specialist is ready for theoretical analysis', 'research': 'Your Research Methods Guide is ready for the research cycle', 'mathematics': 'Your Mathematics Specialist is ready for step-by-step derivations', 'physics': 'Your Physics Specialist is ready — I-V-A-U framework activated' }[persona]}
                  </p>
                  <p className="text-xs mt-2 opacity-50">Ask follow-up questions — I remember our conversation!</p>
                </div>
              </div>
            ) : (
              <div className="tutor-compact-spacing">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && <TutorAvatar />}
                    <div
                      className={`max-w-[92%] sm:max-w-[88%] md:max-w-[90%] rounded-lg md:rounded-xl px-3 sm:px-4 lg:px-5 py-2.5 md:py-3 lg:py-3.5 ${
                        msg.role === 'user'
                          ? 'tutor-message-user text-foreground'
                          : 'tutor-message-ai text-foreground'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none tutor-professor-response" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)' }}>
                          {/* Lesson Header */}
                          <div className="tutor-lesson-header text-[0.55rem] md:text-[0.65rem]">
                            {{ 'a-level': 'Cambridge A-Level Economics | CIE Senior Fellow', 'university': 'EconNexus Research Division | Senior Research Fellow | LSE/Oxford Standard', 'business': 'Cambridge A-Level Business | Cambridge Senior Examiner', 'law': 'EconNexus Legal Division | Global Juris Doctor | IRAC Method', 'psychology': 'Cambridge Psychology | GRAVE + PEEL', 'accounting': 'Cambridge Accounting | IFRS Standards', 'sociology': 'Cambridge Sociology | Perspectives Analysis', 'research': 'Research Methods | IPQ | Research Cycle', 'mathematics': 'Pure & Applied Mathematics | Step-by-Step Derivations', 'physics': 'Cambridge Physics 9702 | I-V-A-U Method | Conceptual Summaries' }[persona]}
                          </div>
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                              p: ({ children }) => (
                                <p className="text-sm leading-relaxed text-foreground mb-2">{children}</p>
                              ),
                              strong: ({ children }) => (
                                <strong className="text-[hsl(43,72%,53%)] font-semibold">{children}</strong>
                              ),
                              code: ({ children }) => (
                                <code className="tutor-formula-highlight text-[hsl(185,100%,50%)] font-mono text-xs">{children}</code>
                              ),
                              blockquote: ({ children }) => (
                                <blockquote className="border-l-2 border-[hsl(185,100%,50%)] pl-3 my-2 italic text-muted-foreground bg-[hsl(185,100%,50%)]/5 py-2 rounded-r">
                                  {children}
                                </blockquote>
                              ),
                              h3: ({ children }) => (
                                <h3 className="text-sm font-bold text-[hsl(43,72%,53%)] mt-3 mb-1">{children}</h3>
                              ),
                              ul: ({ children }) => (
                                <ul className="list-disc list-inside space-y-1 text-sm">{children}</ul>
                              ),
                              li: ({ children }) => (
                                <li className="text-foreground/90">{children}</li>
                              ),
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                          <CopyButton text={msg.content} />
                        </div>
                      ) : (
                        <div>
                          {msg.imageUrl && (
                            <img src={msg.imageUrl} alt="Uploaded" className="max-w-[200px] rounded-lg mb-2 border border-white/10" />
                          )}
                          <p className="whitespace-pre-wrap leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)' }}>{msg.content}</p>
                        </div>
                      )}
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Typing indicator */}
                <AnimatePresence>
                  {streamState !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex gap-2"
                    >
                      <TutorAvatar />
                      <div className="tutor-message-ai rounded-xl px-3 py-2.5">
                        <TypingIndicator streamState={streamState} persona={persona} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </ScrollArea>

          {/* Input Area — sticky on mobile for keyboard visibility */}
          <div className="relative p-2 sm:p-3 lg:p-5 border-t border-[hsl(43,72%,53%)]/15 safe-area-inset sticky bottom-0 z-10 bg-[hsl(var(--graphite-deep)/0.95)] backdrop-blur-xl">
            {/* Image preview */}
            {uploadedImage && (
              <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-white/5 border border-[hsl(43,72%,53%)]/20">
                <img src={uploadedImage} alt="Upload preview" className="w-12 h-12 rounded object-cover" />
                <span className="text-xs text-muted-foreground flex-1 truncate">{uploadedImageName}</span>
                <button onClick={() => { setUploadedImage(null); setUploadedImageName(''); }} className="text-muted-foreground hover:text-destructive">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Paragraph textarea */}
            <div className="flex gap-2 items-end">
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  
                  // Client-side image rate limit check (10/min)
                  const imgRateCheck = checkImageUploadRateLimit();
                  if (!imgRateCheck.allowed) {
                    toast.error(`Image upload limit reached (10/min). Please wait ${imgRateCheck.retryAfter}s.`);
                    e.target.value = '';
                    return;
                  }
                  
                  if (file.size > 10 * 1024 * 1024) {
                    toast.error('Image must be under 10MB');
                    e.target.value = '';
                    return;
                  }
                  toast.info('Compressing image...');
                  try {
                    const compressed = await compressImage(file);
                    setUploadedImage(compressed);
                    setUploadedImageName(file.name);
                    toast.success('Image ready for analysis');
                  } catch {
                    toast.error('Failed to process image');
                  }
                  e.target.value = '';
                }}
              />

              {/* Image upload button */}
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                size="icon"
                disabled={isLoading}
                className="border-[hsl(43,72%,53%)]/20 hover:border-[hsl(43,72%,53%)]/50 hover:bg-[hsl(43,72%,53%)]/5 shrink-0 self-end min-h-[44px] min-w-[44px]"
                title="Upload image for analysis"
              >
                <ImagePlus className="w-4 h-4 text-[hsl(43,72%,53%)]" />
              </Button>

              {/* Auto-expanding paragraph textarea */}
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => { setInput(e.target.value); handleTextareaInput(); }}
                onKeyDown={handleKeyDown}
                onInput={handleTextareaInput}
                placeholder={uploadedImage ? "Describe what to analyze in the image…" : "Type your question or paste a full paragraph… (Enter for new line, Ctrl+Enter to send)"}
                disabled={isLoading}
                rows={1}
                className="flex-1 tutor-input-glass placeholder:text-muted-foreground/40 text-sm font-sans resize-none overflow-y-auto leading-relaxed px-4 py-3"
                style={{
                  minHeight: '120px',
                  maxHeight: '400px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'hsl(43 72% 53% / 0.3) transparent',
                }}
              />

              {/* Action buttons column */}
              <div className="flex flex-col gap-2 shrink-0 self-end">
                {/* Retry */}
                {messages.length > 0 && !isLoading && retryCount < 3 && (
                  <Button
                    onClick={handleRetry}
                    variant="outline"
                    size="icon"
                    className="border-[hsl(43,72%,53%)]/20 hover:border-[hsl(43,72%,53%)]/50 hover:bg-[hsl(43,72%,53%)]/5 min-h-[44px] min-w-[44px] hidden md:flex"
                    title="Retry last question"
                  >
                    <RefreshCw className="w-4 h-4 text-[hsl(43,72%,53%)]" />
                  </Button>
                )}

                {/* Send */}
                <Button
                  onClick={() => handleSend()}
                  disabled={(!input.trim() && !uploadedImage) || isLoading}
                  size="icon"
                  className="bg-gradient-to-br from-[hsl(214,100%,18%)] via-[hsl(43,72%,45%)] to-[hsl(43,72%,53%)] hover:opacity-90 text-white border border-[hsl(43,72%,53%)]/40 shadow-lg min-h-[44px] min-w-[44px] w-11 h-11"
                  title="Send (Ctrl+Enter)"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Hint */}
            <p className="mt-2 text-[10px] text-muted-foreground/50 text-right select-none">
              Enter for new line &nbsp;·&nbsp; Ctrl+Enter to send
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
