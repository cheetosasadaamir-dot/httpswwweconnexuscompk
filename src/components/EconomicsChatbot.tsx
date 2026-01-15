import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2, Copy, Check, RefreshCw, Trash2 } from 'lucide-react';
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

// Typing animation dots component
const TypingIndicator = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-sm text-secondary font-medium">CIE Mentor is analyzing</span>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-secondary"
        animate={{ 
          y: [0, -8, 0],
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
      className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-secondary transition-colors px-2 py-1 rounded-md hover:bg-secondary/10"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-400" />
          <span className="text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
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
      className="py-24 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Bot className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">AI-Powered Learning</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold section-title mb-4">
            Stuck on a Concept?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ask the CIE Economics Mentor
          </p>
        </motion.div>

        {/* Chat Card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(2, 6, 23, 0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(var(--secondary) / 0.4)',
            boxShadow: '0 0 60px hsl(var(--secondary) / 0.15), inset 0 1px 0 hsl(var(--secondary) / 0.1)',
          }}
        >
          {/* Glowing border effect */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--secondary) / 0.1) 0%, transparent 50%, hsl(var(--primary) / 0.1) 100%)',
            }}
          />

          {/* Header with Clear Button */}
          <div className="relative flex items-center justify-between p-4 lg:p-6 border-b border-secondary/20">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_ACTIONS.map((action, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleSend(action.query)}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px hsl(var(--secondary) / 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--secondary) / 0.15), hsl(var(--primary) / 0.15))',
                      border: '1px solid hsl(var(--secondary) / 0.5)',
                      color: 'hsl(var(--secondary))',
                    }}
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
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
                className="text-muted-foreground hover:text-destructive shrink-0"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Clear
              </Button>
            )}
          </div>

          {/* Messages Area */}
          <ScrollArea 
            ref={scrollRef}
            className="h-[320px] lg:h-[400px] p-4 lg:p-6 relative"
          >
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <div className="text-muted-foreground">
                  <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Ask me anything about A-Level Economics</p>
                  <p className="text-sm mt-2 opacity-70">PED, Comparative Advantage, Inflation, and more...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 border border-secondary/30">
                        <Bot className="w-4 h-4 text-secondary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted/30 text-foreground border border-secondary/10'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                              p: ({ children }) => (
                                <p className="text-sm leading-relaxed text-foreground mb-0">{children}</p>
                              ),
                              strong: ({ children }) => (
                                <strong className="text-secondary font-semibold">{children}</strong>
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                        <Bot className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="bg-muted/30 rounded-2xl px-4 py-3 border border-secondary/10">
                        <TypingIndicator />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </ScrollArea>

          {/* Input Area */}
          <div className="relative p-4 lg:p-6 border-t border-secondary/20">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about PED, Comparative Advantage, or Inflation causes..."
                disabled={isLoading}
                className="flex-1 bg-background/50 border-secondary/30 focus:border-secondary placeholder:text-muted-foreground/50"
              />
              
              {/* Retry button - show when there's an error */}
              {messages.length > 0 && !isLoading && retryCount < 3 && (
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  size="icon"
                  className="border-secondary/30 hover:border-secondary hover:bg-secondary/10"
                  title="Retry last question"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              )}
              
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
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
