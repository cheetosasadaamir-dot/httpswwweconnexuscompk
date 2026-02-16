import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Sparkles, Loader2, Copy, Check, RefreshCw, Trash2, CheckCircle2, TrendingUp, GraduationCap, BookOpen, Briefcase, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import professorAvatar from '@/assets/professor-avatar.png';
import { sanitizeInput, checkRateLimit, RATE_LIMITS } from '@/lib/security';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  id: string;
  isError?: boolean;
};

type StreamState = 'idle' | 'connecting' | 'streaming' | 'analyzing' | 'error';

type Persona = 'a-level' | 'university' | 'business' | 'law';

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

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/economics-chat`;

// Generate unique ID for messages
const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

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
              <p className="text-[10px] text-[hsl(43,72%,53%)]/80 font-medium">AO Weightings: {syllabusCode === '9609' ? 'AO1 (25%) • AO2 (25%) • AO3 (25%) • AO4 (25%)' : syllabusCode === 'Law' ? 'IRAC: Issue • Rule • Application • Conclusion' : 'AO1 (35%) • AO2 (40%) • AO3 (25%)'}</p>
              <p className="text-[10px] text-muted-foreground/60">{syllabusCode === '9609' ? 'Use "Evaluate" for top-band AO4 marks' : syllabusCode === 'Law' ? 'Always cite case authority (OSCOLA/Bluebook)' : 'Use "Evaluate" for A* level answers'}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Premium typing animation with stream state awareness
const TypingIndicator = ({ streamState = 'connecting', persona = 'a-level' }: { streamState?: StreamState; persona?: Persona }) => {
  const loadingStates = persona === 'university' ? LOADING_STATES_UNIVERSITY : persona === 'business' ? LOADING_STATES_BUSINESS : persona === 'law' ? LOADING_STATES_LAW : LOADING_STATES_ALEVEL;
  const [loadingMessage, setLoadingMessage] = useState(loadingStates[0]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (streamState === 'connecting' || streamState === 'analyzing') {
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
      case 'error': return 'hsl(0, 84%, 60%)';
      default: return 'hsl(185, 100%, 50%)';
    }
  };

  const getStateText = () => {
    switch (streamState) {
      case 'streaming': return 'Prof. Econs is typing...';
      case 'analyzing': return loadingMessage;
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
      
      {streamState === 'analyzing' && (
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

export default function EconomicsChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamState, setStreamState] = useState<StreamState>('idle');
  const [retryCount, setRetryCount] = useState(0);
  const [persona, setPersona] = useState<Persona>('a-level');
  const [isChatActive, setIsChatActive] = useState(false);
  const quickActions = persona === 'university' ? QUICK_ACTIONS_UNIVERSITY : persona === 'business' ? QUICK_ACTIONS_BUSINESS : persona === 'law' ? QUICK_ACTIONS_LAW : QUICK_ACTIONS_ALEVEL;
  const COMMAND_WORDS = persona === 'business' ? COMMAND_WORDS_BUSINESS : persona === 'law' ? COMMAND_WORDS_LAW : COMMAND_WORDS_ECON;
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
    setStreamState('connecting');
    
    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();
    
    // After 5s of no content, show premium "analyzing" state
    analyzeTimeoutRef.current = setTimeout(() => {
      setStreamState('analyzing');
    }, 8000);
    
    // After 25s, show error state
    streamTimeoutRef.current = setTimeout(() => {
      setStreamState('error');
    }, 45000);
    
    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: userMessages.map(m => ({ role: m.role, content: m.content })),
          persona
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
    if (!rawText || isLoading) return;

    // Sanitize input
    const messageText = sanitizeInput(rawText);
    if (!messageText) {
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

    const userMsg: Message = { role: 'user', content: messageText, id: generateId() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      await streamChat(newMessages);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response';
      toast.error(errorMessage);
      
      // Add error message as assistant response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I am refining my analysis of this complex concept. ${errorMessage}. Please rephrase your question or check the AS/A2 notes section.`,
        id: generateId()
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
    toast.success('Chat cleared');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.section
      ref={chatSectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 lg:py-24"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
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
              onClick={() => { setPersona('a-level'); setMessages([]); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                persona === 'a-level'
                  ? 'bg-[hsl(43,72%,53%)]/15 border-[hsl(43,72%,53%)]/50 text-[hsl(43,72%,53%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              Economics 9708
            </motion.button>
            <motion.button
              onClick={() => { setPersona('business'); setMessages([]); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                persona === 'business'
                  ? 'bg-[hsl(142,71%,45%)]/15 border-[hsl(142,71%,45%)]/50 text-[hsl(142,71%,45%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Briefcase className="w-3 h-3" />
              Business 9609
            </motion.button>
            <motion.button
              onClick={() => { setPersona('university'); setMessages([]); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                persona === 'university'
                  ? 'bg-[hsl(185,100%,50%)]/15 border-[hsl(185,100%,50%)]/50 text-[hsl(185,100%,50%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              University
            </motion.button>
            <motion.button
              onClick={() => { setPersona('law'); setMessages([]); }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                persona === 'law'
                  ? 'bg-[hsl(280,70%,55%)]/15 border-[hsl(280,70%,55%)]/50 text-[hsl(280,70%,55%)]'
                  : 'border-border/30 text-muted-foreground hover:border-border/60'
              }`}
            >
              <Scale className="w-3 h-3" />
              Law
            </motion.button>
          </div>

          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass-card mb-3 md:mb-4">
            <TutorAvatar size="sm" />
            <div className="text-left">
              <span className="text-xs md:text-sm text-[hsl(43,72%,53%)] font-semibold block">
                {persona === 'university' ? 'Dr. Econs' : persona === 'business' ? 'Prof. Business' : persona === 'law' ? 'Dr. Juris' : 'Prof. Econs'}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground">
                {persona === 'university' ? 'Senior Research Fellow' : persona === 'business' ? 'Cambridge Senior Examiner' : persona === 'law' ? 'Global Legal Scholar' : 'CIE Senior Fellow'}
              </span>
            </div>
            <div className="tutor-verified-badge ml-1 md:ml-2 text-[9px] md:text-[10px]">
              <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" />
              <span>{persona === 'university' ? 'HEC' : persona === 'law' ? 'IRAC' : '2026-2028'}</span>
            </div>
          </div>
          <h2 className="font-serif text-fluid-3xl lg:text-fluid-4xl font-bold section-title mb-2">
            {persona === 'university' ? 'Research Query?' : persona === 'business' ? 'Business Question?' : persona === 'law' ? 'Legal Question?' : 'Stuck on a Concept?'}
          </h2>
          <p className="text-fluid-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {persona === 'university' 
              ? 'Senior Research Fellow • LSE/Oxford Standard • Game Theory • Econometrics • Behavioral Econ'
              : persona === 'business'
              ? 'Cambridge Senior Examiner • 9609 Business Studies • AO-Structured Responses'
              : persona === 'law'
              ? 'Global Legal Scholar • IRAC Method • Contract • Tort • Criminal • Constitutional Law'
              : 'Ask the Cambridge A-Level Economics Professor • Text-Only Analysis Mode'}
          </p>
        </motion.div>

        {/* Chat Card - Premium Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-xl md:rounded-2xl overflow-hidden tutor-chat-container tutor-gold-glow"
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

          {/* Academic Banner */}
          <div className="tutor-header-banner relative flex items-center justify-between px-3 md:px-4">
            <p className="tutor-header-title text-[0.6rem] md:text-[0.7rem]">
              {persona === 'university' ? 'Research Fellow Mode • LSE/Oxford Academic Standard' : persona === 'business' ? 'Cambridge A-Level Business • 9609' : persona === 'law' ? 'Global Legal Scholar • Oxford/Harvard Standard' : 'Cambridge A-Level Economics • 9708'}
            </p>
            <span className="text-[0.5rem] md:text-[0.6rem] text-[hsl(43,72%,53%)]/60 font-medium">
              {persona === 'university' ? 'Guided Derivation Mode' : persona === 'business' ? 'AO-Structured Mode' : persona === 'law' ? 'IRAC Analysis Mode' : 'Text Analysis Mode'}
            </span>
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
                    className="touch-target-sm px-2 md:px-2.5 py-1.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0"
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
                {(persona === 'a-level' || persona === 'business' || persona === 'law') && <ExamGuidance commandWords={COMMAND_WORDS} syllabusCode={persona === 'business' ? '9609' : persona === 'law' ? 'Law' : '9708'} />}
              </div>
            </div>
            
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearChat}
                className="text-muted-foreground hover:text-destructive shrink-0 text-xs touch-target-sm self-end md:self-auto"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                Clear
              </Button>
            )}
          </div>

          <ScrollArea 
            ref={scrollRef}
            className="h-[280px] md:h-[320px] lg:h-[400px] p-3 lg:p-4 relative"
          >
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <div className="text-muted-foreground">
                  <TutorAvatar size="lg" />
                  <p className="text-base font-semibold text-[hsl(43,72%,53%)] mt-4 font-serif">
                    {persona === 'university' ? 'Dr. Econs' : persona === 'business' ? 'Prof. Business' : persona === 'law' ? 'Dr. Juris' : 'Prof. Econs'}
                  </p>
                  <p className="text-xs text-[hsl(43,72%,53%)]/70 mb-2">
                    {persona === 'university' ? 'Senior Research Fellow • LSE/Oxford Standard' : persona === 'business' ? 'Cambridge Senior Examiner • 9609' : persona === 'law' ? 'Global Legal Scholar • IRAC Method' : 'CIE Senior Fellow • Text Analysis Mode'}
                  </p>
                  <p className="text-sm mt-1 opacity-70 font-serif">
                    {persona === 'university' ? 'Your Senior Research Fellow is ready for guided derivations' : persona === 'business' ? 'Your Cambridge Senior Examiner is ready for AO-structured answers' : persona === 'law' ? 'Your Legal Scholar is ready for IRAC analysis' : 'Your Senior Cambridge Examiner is ready'}
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
                      className={`max-w-[85%] md:max-w-[90%] rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 ${
                        msg.role === 'user'
                          ? 'tutor-message-user text-foreground'
                          : 'tutor-message-ai text-foreground'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none tutor-professor-response">
                          {/* Lesson Header */}
                          <div className="tutor-lesson-header text-[0.55rem] md:text-[0.65rem]">
                            {persona === 'university' 
                              ? 'EconNexus Research Division | Senior Research Fellow | LSE/Oxford Standard'
                              : persona === 'business'
                              ? 'Syllabus 9609 (2026-2028) | Cambridge Senior Examiner'
                              : persona === 'law'
                              ? 'EconNexus Legal Division | Global Juris Doctor | IRAC Method'
                              : 'Syllabus 9708 (2026-2028) | CIE Senior Fellow'}
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
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
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

          {/* Input Area - Mobile keyboard-safe with proper padding */}
          <div className="relative p-3 lg:p-4 border-t border-[hsl(43,72%,53%)]/15 safe-area-inset">
            <div className="flex gap-2 items-center">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="flex-1 tutor-input-glass placeholder:text-muted-foreground/40 text-sm font-sans h-11 md:h-10"
              />
              
              {/* Retry button */}
              {messages.length > 0 && !isLoading && retryCount < 3 && (
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  size="icon"
                  className="border-[hsl(43,72%,53%)]/20 hover:border-[hsl(43,72%,53%)]/50 hover:bg-[hsl(43,72%,53%)]/5 touch-target hidden md:flex"
                  title="Retry last question"
                >
                  <RefreshCw className="w-4 h-4 text-[hsl(43,72%,53%)]" />
                </Button>
              )}
              
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="bg-gradient-to-br from-[hsl(214,100%,18%)] via-[hsl(43,72%,45%)] to-[hsl(43,72%,53%)] hover:opacity-90 text-white border border-[hsl(43,72%,53%)]/40 shadow-lg touch-target"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
