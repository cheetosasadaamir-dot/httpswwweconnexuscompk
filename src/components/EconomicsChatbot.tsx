import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Sparkles, Loader2, Copy, Check, RefreshCw, Trash2, CheckCircle2, TrendingUp } from 'lucide-react';
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

const QUICK_ACTIONS = [
  { label: 'J-Curve Effect', query: 'Explain the J-Curve effect and why the current account worsens before improving after depreciation.' },
  { label: 'Liquidity Trap', query: 'Analyze the Keynesian Liquidity Trap and why monetary policy becomes ineffective at the zero lower bound.' },
  { label: 'Phillips Curve', query: 'Explain the Expectations-Augmented Phillips Curve and the concept of NAIRU.' },
  { label: 'Harrod-Domar', query: 'Derive the Harrod-Domar growth model (g=s/k) and evaluate its limitations for developing economies.' },
  { label: 'Kinked Demand', query: 'Analyze the Kinked Demand Curve model and explain price rigidity in oligopolistic markets.' },
  { label: 'Marshall-Lerner', query: 'Explain the Marshall-Lerner condition and when devaluation improves the trade balance.' },
];

// Command words with AO (Assessment Objective) requirements
const COMMAND_WORDS = [
  { word: 'Define', ao: 'AO1', meaning: 'Give precise meaning', color: 'hsl(217, 91%, 60%)' },
  { word: 'Explain', ao: 'AO1+AO2', meaning: 'Set out purposes/reasons with evidence', color: 'hsl(185, 100%, 50%)' },
  { word: 'Analyse', ao: 'AO1+AO2', meaning: 'Examine in detail to show meaning and relationships', color: 'hsl(185, 100%, 50%)' },
  { word: 'Compare', ao: 'AO1+AO2', meaning: 'Identify similarities and/or differences', color: 'hsl(185, 100%, 50%)' },
  { word: 'Assess', ao: 'AO1+AO2+AO3', meaning: 'Make an informed judgement', color: 'hsl(43, 72%, 53%)' },
  { word: 'Discuss', ao: 'AO1+AO2+AO3', meaning: 'Write about issues in depth with structure', color: 'hsl(43, 72%, 53%)' },
  { word: 'Evaluate', ao: 'AO1+AO2+AO3', meaning: 'Judge quality, importance, or value critically', color: 'hsl(43, 72%, 53%)' },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/economics-chat`;

// Generate unique ID for messages
const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

// Premium loading state messages
const LOADING_STATES = [
  'Analyzing economic variables...',
  'Processing transmission mechanisms...',
  'Constructing analytical framework...',
  'Synthesizing A-Level concepts...',
  'Evaluating policy implications...',
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
const ExamGuidance = () => {
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
              <p className="text-xs text-[hsl(43,72%,53%)] font-semibold font-serif">Cambridge 9708 Command Words</p>
              <span className="tutor-verified-badge">
                <CheckCircle2 className="w-2.5 h-2.5" />
                2026-2028
              </span>
            </div>
            <div className="space-y-1.5">
              {COMMAND_WORDS.map((cmd, i) => (
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
              <p className="text-[10px] text-[hsl(43,72%,53%)]/80 font-medium">AO Weightings: AO1 (35%) • AO2 (40%) • AO3 (25%)</p>
              <p className="text-[10px] text-muted-foreground/60">Use "Evaluate" for A* level answers</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Premium typing animation with stream state awareness
const TypingIndicator = ({ streamState = 'connecting' }: { streamState?: StreamState }) => {
  const [loadingMessage, setLoadingMessage] = useState(LOADING_STATES[0]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (streamState === 'connecting' || streamState === 'analyzing') {
      const interval = setInterval(() => {
        setMessageIndex(prev => (prev + 1) % LOADING_STATES.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [streamState]);

  useEffect(() => {
    setLoadingMessage(LOADING_STATES[messageIndex]);
  }, [messageIndex]);

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const streamTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const analyzeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
          messages: userMessages.map(m => ({ role: m.role, content: m.content }))
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-4">
            <TutorAvatar size="sm" />
            <div className="text-left">
              <span className="text-sm text-[hsl(43,72%,53%)] font-semibold block">Prof. Econs</span>
              <span className="text-xs text-muted-foreground">CIE Senior Fellow</span>
            </div>
            <div className="tutor-verified-badge ml-2">
              <CheckCircle2 className="w-3 h-3" />
              <span>2026-2028</span>
            </div>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold section-title mb-2">
            Stuck on a Concept?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Ask the Cambridge A-Level Economics Professor • Text-Only Analysis Mode
          </p>
        </motion.div>

        {/* Chat Card - Premium Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden tutor-chat-container tutor-gold-glow"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(43 72% 53% / 0.2)',
            boxShadow: '0 8px 48px hsl(214 100% 14% / 0.6), inset 0 1px 0 hsl(43 72% 53% / 0.08)',
          }}
        >
          {/* Premium glass overlay */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, hsl(43 72% 53% / 0.03) 0%, transparent 30%, hsl(214 100% 14% / 0.1) 100%)',
            }}
          />

          {/* Academic Banner */}
          <div className="tutor-header-banner relative flex items-center justify-between">
            <p className="tutor-header-title">Cambridge A-Level Economics • 9708</p>
            <span className="text-[0.6rem] text-[hsl(43,72%,53%)]/60 font-medium">Text Analysis Mode</span>
          </div>

          {/* Header with Clear Button */}
          <div className="relative flex items-center justify-between p-3 lg:p-4 border-b border-[hsl(43,72%,53%)]/20">
            <div>
              <p className="text-xs text-muted-foreground mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ACTIONS.map((action, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleSend(action.query)}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 16px hsl(43 72% 53% / 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-2.5 py-1 rounded-full text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, hsl(214 100% 14% / 0.4), hsl(43 72% 53% / 0.1))',
                      border: '1px solid hsl(43 72% 53% / 0.4)',
                      color: 'hsl(43 72% 53%)',
                    }}
                  >
                    <Sparkles className="w-2.5 h-2.5 inline mr-1" />
                    {action.label}
                  </motion.button>
                ))}
                <ExamGuidance />
              </div>
            </div>
            
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearChat}
                className="text-muted-foreground hover:text-destructive shrink-0 text-xs"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                Clear
              </Button>
            )}
          </div>

          <ScrollArea 
            ref={scrollRef}
            className="h-[320px] lg:h-[400px] p-3 lg:p-4 relative"
          >
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <div className="text-muted-foreground">
                  <TutorAvatar size="lg" />
                  <p className="text-base font-semibold text-[hsl(43,72%,53%)] mt-4 font-serif">Prof. Econs</p>
                  <p className="text-xs text-[hsl(43,72%,53%)]/70 mb-2">CIE Senior Fellow • Text Analysis Mode</p>
                  <p className="text-sm mt-1 opacity-70 font-serif">Your Senior Cambridge Examiner is ready</p>
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
                      className={`max-w-[90%] rounded-xl px-3 py-2.5 ${
                        msg.role === 'user'
                          ? 'tutor-message-user text-foreground'
                          : 'tutor-message-ai text-foreground'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none tutor-professor-response">
                          {/* Lesson Header */}
                          <div className="tutor-lesson-header">
                            Syllabus 9708 (2026-2028) | CIE Senior Fellow
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
                        <TypingIndicator streamState={streamState} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </ScrollArea>

          {/* Input Area - Premium Glass */}
          <div className="relative p-3 lg:p-4 border-t border-[hsl(43,72%,53%)]/15">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question or follow up on our discussion..."
                disabled={isLoading}
                className="flex-1 tutor-input-glass placeholder:text-muted-foreground/40 text-sm font-sans"
              />
              
              {/* Retry button */}
              {messages.length > 0 && !isLoading && retryCount < 3 && (
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  size="icon"
                  className="border-[hsl(43,72%,53%)]/20 hover:border-[hsl(43,72%,53%)]/50 hover:bg-[hsl(43,72%,53%)]/5"
                  title="Retry last question"
                >
                  <RefreshCw className="w-4 h-4 text-[hsl(43,72%,53%)]" />
                </Button>
              )}
              
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="bg-gradient-to-br from-[hsl(214,100%,18%)] via-[hsl(43,72%,45%)] to-[hsl(43,72%,53%)] hover:opacity-90 text-white border border-[hsl(43,72%,53%)]/40 shadow-lg"
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
