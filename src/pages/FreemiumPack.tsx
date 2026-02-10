import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, CheckCircle, Send, BookOpen, FileText, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import { freemiumChapters } from '@/data/freemiumContent';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const gmailSchema = z.string().trim().email("Please enter a valid email").max(255);

const FreemiumPack = () => {
  const [gmail, setGmail] = useState('');
  const [checkGmail, setCheckGmail] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedEmail = localStorage.getItem('premium_email');
    if (savedEmail) {
      setCheckGmail(savedEmail);
      checkAccess(savedEmail);
    }
  }, []);

  const checkAccess = async (emailToCheck: string) => {
    setIsChecking(true);
    try {
      const { data, error } = await supabase
        .from('premium_access')
        .select('access_status')
        .eq('user_email', emailToCheck.trim().toLowerCase())
        .maybeSingle();

      if (error) throw error;

      if (data && data.access_status === true) {
        setAccessGranted(true);
        localStorage.setItem('premium_email', emailToCheck.trim().toLowerCase());
      } else {
        setAccessGranted(false);
      }
      setAccessChecked(true);
    } catch (err) {
      console.error('Error checking access:', err);
    } finally {
      setIsChecking(false);
    }
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = gmailSchema.safeParse(gmail);
    if (!validation.success) {
      toast({ title: "Invalid email", description: validation.error.errors[0].message, variant: "destructive" });
      return;
    }

    setIsApplying(true);
    try {
      const normalizedEmail = gmail.trim().toLowerCase();

      // Check if already exists
      const { data: existing } = await supabase
        .from('premium_access')
        .select('access_status')
        .eq('user_email', normalizedEmail)
        .maybeSingle();

      if (existing) {
        if (existing.access_status) {
          setAccessGranted(true);
          localStorage.setItem('premium_email', normalizedEmail);
          toast({ title: "Access Granted!", description: "You already have access. Enjoy!" });
        } else {
          toast({ title: "Application Exists", description: "Your request is pending. You will be notified once approved." });
        }
        setIsApplying(false);
        return;
      }

      const { error } = await supabase
        .from('premium_access')
        .insert({ user_email: normalizedEmail });

      if (error) throw error;

      localStorage.setItem('premium_email', normalizedEmail);
      setShowApplyForm(false);
      toast({
        title: "Application Submitted!",
        description: "Your $7 payment request has been received. Access will be granted after admin approval.",
      });
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to submit", variant: "destructive" });
    } finally {
      setIsApplying(false);
    }
  };

  const handleCheckAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = gmailSchema.safeParse(checkGmail);
    if (!validation.success) {
      toast({ title: "Invalid email", description: validation.error.errors[0].message, variant: "destructive" });
      return;
    }
    await checkAccess(checkGmail);
  };

  // GRANTED — show content
  if (accessGranted) {
    return (
      <Layout>
        <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-neon-cyan" />
              <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">Access Granted</span>
            </div>
            <h1 className="text-fluid-3xl font-display font-bold text-foreground mb-2">Premium Study Pack</h1>
            <p className="text-muted-foreground">Premium revision materials — study directly on the platform.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {freemiumChapters.map((chapter) => (
              <motion.button
                key={chapter.id}
                onClick={() => { setActiveChapter(activeChapter === chapter.id ? null : chapter.id); setActiveSection(null); }}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  activeChapter === chapter.id
                    ? 'border-neon-cyan/50 bg-neon-cyan/5 shadow-[0_0_30px_rgba(0,242,255,0.1)]'
                    : 'border-border/50 bg-card/50 hover:border-neon-cyan/30'
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                    {chapter.id.includes('model') ? <FileText className="w-6 h-6 text-neon-cyan" /> : <BookOpen className="w-6 h-6 text-neon-cyan" />}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{chapter.title}</h3>
                    <p className="text-sm text-muted-foreground">{chapter.subtitle}</p>
                    <p className="text-xs text-neon-gold mt-2">{chapter.sections.length} sections</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeChapter && (
              <motion.div key={activeChapter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                {freemiumChapters.find(c => c.id === activeChapter)?.sections.map((section) => (
                  <div key={section.id} className="mb-6">
                    <button
                      onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        activeSection === section.id ? 'border-neon-gold/50 bg-neon-gold/5' : 'border-border/30 bg-card/30 hover:border-neon-gold/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-display font-semibold text-foreground">{section.title}</h4>
                        <ArrowRight className={`w-4 h-4 text-neon-gold transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeSection === section.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="p-6 border border-t-0 border-border/30 rounded-b-xl bg-card/20">
                            <div className="prose prose-invert max-w-none mb-6">
                              {section.content.split('\n\n').map((para, i) => (
                                <p key={i} className="text-foreground/90 leading-relaxed mb-4 text-sm md:text-base">
                                  {para.split('**').map((part, j) => j % 2 === 1 ? <strong key={j} className="text-neon-cyan font-semibold">{part}</strong> : part)}
                                </p>
                              ))}
                            </div>
                            {section.keyTerms && section.keyTerms.length > 0 && (
                              <div className="mb-6">
                                <h5 className="text-neon-gold font-display font-semibold mb-3 text-sm uppercase tracking-wider">Key Terms</h5>
                                <div className="grid gap-2">
                                  {section.keyTerms.map((kt) => (
                                    <div key={kt.term} className="p-3 rounded-lg bg-neon-gold/5 border border-neon-gold/20">
                                      <span className="font-semibold text-neon-gold text-sm">{kt.term}:</span>
                                      <span className="text-foreground/80 text-sm ml-2">{kt.definition}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {section.tables && section.tables.map((table) => (
                              <div key={table.title} className="mb-6">
                                <h5 className="text-neon-cyan font-display font-semibold mb-3 text-sm">{table.title}</h5>
                                <div className="table-responsive">
                                  <table className="w-full text-sm border-collapse">
                                    <thead><tr>{table.headers.map((h) => (<th key={h} className="text-left p-3 border border-border/30 bg-neon-cyan/5 text-neon-cyan font-semibold">{h}</th>))}</tr></thead>
                                    <tbody>{table.rows.map((row, ri) => (<tr key={ri}>{row.map((cell, ci) => (<td key={ci} className="p-3 border border-border/30 text-foreground/80">{cell}</td>))}</tr>))}</tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                            {section.mcqs && section.mcqs.length > 0 && (
                              <div>
                                <h5 className="text-neon-cyan font-display font-semibold mb-3 text-sm uppercase tracking-wider">Practice Questions</h5>
                                <div className="space-y-4">
                                  {section.mcqs.map((mcq, qi) => (<MCQCard key={qi} mcq={mcq} index={qi} />))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    );
  }

  // GATE — Access Denied / Apply screen
  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-neon-cyan" />
          </div>

          <h1 className="text-fluid-3xl font-display font-bold text-foreground mb-3">Premium Study Pack</h1>
          <p className="text-muted-foreground mb-2">Premium AS Level Revision Notes & Model Answers</p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-gold/10 border border-neon-gold/30 mb-6">
            <span className="text-neon-gold font-display font-bold text-2xl">$7</span>
            <span className="text-neon-gold/70 text-sm">one-time access</span>
          </div>

          <div className="bg-card/30 border border-neon-cyan/20 rounded-2xl p-5 mb-6 text-left">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Apply with your Gmail and pay <strong className="text-neon-gold">$7</strong>. Access is granted only after <strong className="text-neon-cyan">manual admin approval</strong>.
            </p>
          </div>

          {/* Access denied message when checked but not granted */}
          {accessChecked && !accessGranted && (
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 mb-4">
              <p className="text-destructive text-sm font-medium">
                Access not yet granted. Please apply and wait for admin approval.
              </p>
            </div>
          )}

          {/* Check existing access */}
          <form onSubmit={handleCheckAccess} className="flex gap-2 mb-4">
            <Input
              type="email"
              value={checkGmail}
              onChange={(e) => setCheckGmail(e.target.value)}
              placeholder="Already applied? Check your access"
              className="flex-1 bg-card/50 border-border/50"
            />
            <Button type="submit" variant="outline" disabled={isChecking} className="border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10">
              {isChecking ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Check'}
            </Button>
          </form>

          {/* Apply Form */}
          {!showApplyForm ? (
            <Button
              onClick={() => setShowApplyForm(true)}
              className="w-full bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90 font-display font-semibold text-base py-6 rounded-xl"
            >
              <Send className="w-5 h-5 mr-2" /> Apply to Buy — $7
            </Button>
          ) : (
            <motion.form initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleApply} className="space-y-3">
              <Input
                type="email"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                placeholder="Enter your Gmail address"
                required
                className="bg-card/50 border-border/50 text-center text-base py-6"
              />
              <Button type="submit" disabled={isApplying} className="w-full bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90 font-display font-semibold text-base py-6 rounded-xl">
                {isApplying ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Send className="w-5 h-5 mr-2" />}
                Submit Application
              </Button>
              <Button type="button" variant="ghost" onClick={() => setShowApplyForm(false)} className="w-full text-muted-foreground">Cancel</Button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

const MCQCard = ({ mcq, index }: { mcq: { question: string; options: string[]; answer: string }; index: number }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="p-4 rounded-xl bg-card/30 border border-border/30">
      <p className="text-foreground/90 text-sm font-medium mb-3">Q{index + 1}. {mcq.question}</p>
      <div className="space-y-2">
        {mcq.options.map((opt) => {
          const letter = opt.charAt(0);
          const isCorrect = letter === mcq.answer;
          const isSelected = selected === letter;
          return (
            <button
              key={opt}
              onClick={() => { setSelected(letter); setRevealed(true); }}
              className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${
                revealed
                  ? isCorrect ? 'border-green-500/50 bg-green-500/10 text-green-400'
                    : isSelected ? 'border-destructive/50 bg-destructive/10 text-destructive' : 'border-border/20 text-muted-foreground'
                  : 'border-border/30 hover:border-neon-cyan/30 text-foreground/80'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FreemiumPack;
