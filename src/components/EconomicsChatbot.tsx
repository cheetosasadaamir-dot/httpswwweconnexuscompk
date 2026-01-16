import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Sparkles, Loader2, Copy, Check, RefreshCw, Trash2, Brain, TrendingUp, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  id: string;
};

const QUICK_ACTIONS = [
  { label: 'Explain Comparative Advantage', query: 'Explain the concept of Comparative Advantage with a numerical example' },
  { label: 'How to calculate Terms of Trade?', query: 'How do I calculate Terms of Trade using the TOT formula?' },
  { label: 'Cost-Push vs Demand-Pull', query: 'What is the difference between Cost-Push and Demand-Pull inflation?' },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/economics-chat`;

// Generate unique ID for messages
const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

// CIE Master Tutor Avatar Component
const TutorAvatar = () => (
  <div className="tutor-avatar w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 relative">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(45,93%,58%)] to-[hsl(185,100%,50%)] opacity-90" />
    <div className="relative flex items-center justify-center">
      <Brain className="w-3.5 h-3.5 text-[hsl(222,47%,5%)] absolute -top-0.5 -left-0.5" />
      <TrendingUp className="w-3 h-3 text-[hsl(222,47%,5%)] absolute bottom-0 right-0" />
      <GraduationCap className="w-4 h-4 text-[hsl(222,47%,5%)]" />
    </div>
  </div>
);

// Typing animation dots component
const TypingIndicator = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-xs text-[hsl(185,100%,50%)] font-medium">CIE Master Tutor is analyzing</span>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[hsl(185,100%,50%)]"
        animate={{ 
          y: [0, -6, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

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
  const [isTyping, setIsTyping] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  // Cleanup abort controller on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const streamChat = useCallback(async (userMessages: Message[]) => {
    setIsTyping(true);
    
    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();
    
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

      if (!resp.ok) {
        setIsTyping(false);
        const errorData = await resp.json().catch(() => ({}));
        
        if (resp.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a moment.');
        }
        if (resp.status === 402) {
          throw new Error('AI credits exhausted. Please try again later.');
        }
        if (resp.status === 504) {
          throw new Error('Analysis timeout. Please try a simpler question.');
        }
        
        throw new Error(errorData.error || 'I am refining my analysis. Please rephrase your question.');
      }

      if (!resp.body) {
        setIsTyping(false);
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
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              if (!hasStartedContent) {
                setIsTyping(false);
                hasStartedContent = true;
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
            // Incomplete JSON, keep in buffer
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }
      
      setIsTyping(false);
      setRetryCount(0);
    } catch (error) {
      setIsTyping(false);
      
      if (error instanceof Error && error.name === 'AbortError') {
        // Request was cancelled, don't show error
        return;
      }
      
      throw error;
    }
  }, []);

  const handleSend = async (query?: string) => {
    const messageText = query || input.trim();
    if (!messageText || isLoading) return;

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
    setIsTyping(false);
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
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <div className="tutor-avatar w-6 h-6 rounded-full flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-[hsl(222,47%,5%)]" />
            </div>
            <span className="text-sm text-[hsl(45,93%,58%)] font-medium">CIE Economics Master Tutor</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold section-title mb-3">
            Stuck on a Concept?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask the Cambridge 9708 AI Tutor
          </p>
        </motion.div>

        {/* Chat Card - Professional Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden tutor-chat-container"
          style={{
            background: 'linear-gradient(to bottom, hsl(222 50% 3%), hsl(222 47% 5%))',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(185 100% 50% / 0.3)',
            boxShadow: '0 0 40px hsl(185 100% 50% / 0.1), inset 0 1px 0 hsl(185 100% 50% / 0.1)',
          }}
        >
          {/* Glowing border effect */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, hsl(185 100% 50% / 0.05) 0%, transparent 50%, hsl(45 93% 58% / 0.05) 100%)',
            }}
          />

          {/* Header with Clear Button */}
          <div className="relative flex items-center justify-between p-3 lg:p-4 border-b border-[hsl(185,100%,50%)]/20">
            <div>
              <p className="text-xs text-muted-foreground mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ACTIONS.map((action, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleSend(action.query)}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 16px hsl(185 100% 50% / 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-2.5 py-1 rounded-full text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, hsl(185 100% 50% / 0.1), hsl(45 93% 58% / 0.1))',
                      border: '1px solid hsl(185 100% 50% / 0.4)',
                      color: 'hsl(185 100% 50%)',
                    }}
                  >
                    <Sparkles className="w-2.5 h-2.5 inline mr-1" />
                    {action.label}
                  </motion.button>
                ))}
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
            className="h-[280px] lg:h-[360px] p-3 lg:p-4 relative"
          >
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <div className="text-muted-foreground">
                  <div className="tutor-avatar w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-7 h-7 text-[hsl(222,47%,5%)]" />
                  </div>
                  <p className="text-base font-medium text-[hsl(45,93%,58%)]">CIE Economics Master Tutor</p>
                  <p className="text-sm mt-1 opacity-70">Ask me anything about A-Level Economics (9708)</p>
                  <p className="text-xs mt-2 opacity-50">PED, Comparative Advantage, Inflation, Multiplier...</p>
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
                      className={`max-w-[85%] rounded-xl px-3 py-2.5 ${
                        msg.role === 'user'
                          ? 'tutor-message-user text-foreground'
                          : 'tutor-message-ai text-foreground'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none">
                          {/* Lesson Header */}
                          <div className="tutor-lesson-header">
                            Syllabus 9708 | AI Tutor Response
                          </div>
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                              p: ({ children }) => (
                                <p className="text-sm leading-relaxed text-foreground mb-1.5">{children}</p>
                              ),
                              strong: ({ children }) => (
                                <strong className="text-[hsl(185,100%,50%)] font-semibold">{children}</strong>
                              ),
                              code: ({ children }) => (
                                <code className="tutor-formula-highlight text-[hsl(45,93%,58%)] font-mono text-xs">{children}</code>
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
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex gap-2"
                    >
                      <TutorAvatar />
                      <div className="tutor-message-ai rounded-xl px-3 py-2.5">
                        <TypingIndicator />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </ScrollArea>

          {/* Input Area */}
          <div className="relative p-3 lg:p-4 border-t border-[hsl(185,100%,50%)]/20">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about PED, Comparative Advantage, or Inflation causes..."
                disabled={isLoading}
                className="flex-1 bg-[hsl(222,47%,5%)]/80 border-[hsl(185,100%,50%)]/30 focus:border-[hsl(185,100%,50%)] placeholder:text-muted-foreground/50 text-sm"
              />
              
              {/* Retry button - show when there's an error */}
              {messages.length > 0 && !isLoading && retryCount < 3 && (
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  size="icon"
                  className="border-[hsl(185,100%,50%)]/30 hover:border-[hsl(185,100%,50%)] hover:bg-[hsl(185,100%,50%)]/10"
                  title="Retry last question"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              )}
              
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="bg-gradient-to-r from-[hsl(45,93%,58%)] to-[hsl(185,100%,50%)] hover:opacity-90 text-[hsl(222,47%,5%)]"
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
