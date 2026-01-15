import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2, Copy, Check } from 'lucide-react';
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
};

const QUICK_ACTIONS = [
  { label: 'Explain Comparative Advantage', query: 'Explain the concept of Comparative Advantage with a numerical example' },
  { label: 'How to calculate Terms of Trade?', query: 'How do I calculate Terms of Trade using the TOT formula?' },
  { label: 'Cost-Push vs Demand-Pull', query: 'What is the difference between Cost-Push and Demand-Pull inflation?' },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/economics-chat`;

// Typing animation dots component
const TypingIndicator = () => (
  <div className="flex items-center gap-1">
    <span className="text-sm text-muted-foreground mr-2">Analyzing</span>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-secondary"
        animate={{ 
          y: [0, -6, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.2,
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
      await navigator.clipboard.writeText(text);
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
      className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-secondary transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          <span>Copied!</span>
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamChat = async (userMessages: Message[]) => {
    setIsTyping(true);
    
    const resp = await fetch(CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok) {
      setIsTyping(false);
      const errorData = await resp.json().catch(() => ({}));
      if (resp.status === 429) {
        throw new Error(errorData.error || 'Rate limit exceeded. Please wait a moment.');
      }
      if (resp.status === 402) {
        throw new Error(errorData.error || 'AI credits exhausted.');
      }
      throw new Error(errorData.error || 'Failed to get response');
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
              const last = prev[prev.length - 1];
              if (last?.role === 'assistant') {
                return prev.map((m, i) => 
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: 'assistant', content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + '\n' + textBuffer;
          break;
        }
      }
    }
    
    setIsTyping(false);
  };

  const handleSend = async (query?: string) => {
    const messageText = query || input.trim();
    if (!messageText || isLoading) return;

    const userMsg: Message = { role: 'user', content: messageText };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      await streamChat(newMessages);
    } catch (error) {
      console.error('Chat error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
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

          {/* Quick Action Buttons */}
          <div className="relative p-4 lg:p-6 border-b border-secondary/20">
            <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_ACTIONS.map((action, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleSend(action.query)}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px hsl(var(--secondary) / 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--secondary) / 0.15), hsl(var(--primary) / 0.15))',
                    border: '1px solid hsl(var(--secondary) / 0.5)',
                    color: 'hsl(var(--secondary))',
                  }}
                >
                  <Sparkles className="w-3 h-3 inline mr-1.5" />
                  {action.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea 
            ref={scrollRef}
            className="h-[320px] lg:h-[380px] p-4 lg:p-6 relative"
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
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
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