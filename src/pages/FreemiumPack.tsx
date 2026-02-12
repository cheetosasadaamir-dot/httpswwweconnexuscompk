import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import FreemiumContentViewer from '@/components/freemium/FreemiumContentViewer';
import EconNexusLogo from '@/components/EconNexusLogo';

const gmailSchema = z.string().trim().email("Please enter a valid email").max(255);

const FreemiumPack = () => {
  const [gmail, setGmail] = useState('');
  const [checkGmail, setCheckGmail] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
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

  // GRANTED — show native content
  if (accessGranted) {
    return (
      <Layout>
        <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Access Granted</span>
            </div>
            <h1 className="text-fluid-3xl font-display font-bold text-foreground mb-2">Premium Study Pack</h1>
            <p className="text-muted-foreground text-sm">CIE AS Level Economics — Revision Notes & Model Answers</p>
          </motion.div>
          <div className="relative">
            {/* Watermark */}
            <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
              <EconNexusLogo size="lg" showText watermark linkHome={false} className="scale-[3]" />
            </div>
            <FreemiumContentViewer />
          </div>
        </div>
      </Layout>
    );
  }

  // GATE — Locked state
  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-accent" />
          </div>

          <h1 className="text-fluid-3xl font-display font-bold text-foreground mb-3">Premium Study Pack</h1>
          <p className="text-muted-foreground mb-2">Premium AS Level Revision Notes & Model Answers</p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-primary font-display font-bold text-2xl">$7</span>
            <span className="text-primary/70 text-sm">one-time access</span>
          </div>

          <div className="bg-card/30 border border-accent/20 rounded-2xl p-5 mb-6 text-left">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Submit your Gmail below and pay <strong className="text-primary">$7</strong> via WhatsApp. Access is granted after <strong className="text-accent">manual admin approval</strong>.
            </p>
          </div>

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
            <Button type="submit" variant="outline" disabled={isChecking} className="border-accent/30 text-accent hover:bg-accent/10">
              {isChecking ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Check'}
            </Button>
          </form>

          {/* WhatsApp + Apply */}
          <div className="space-y-3">
            <a
              href="https://wa.me/923118932062?text=I%20want%20to%20buy%20the%20%247%20Freemium%20Pack"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-base transition-colors"
            >
              💬 Contact on WhatsApp to Pay
            </a>

            {!showApplyForm ? (
              <Button
                onClick={() => setShowApplyForm(true)}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-base py-6 rounded-xl"
              >
                <Send className="w-5 h-5 mr-2" /> Submit Gmail to Apply
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
                <Button type="submit" disabled={isApplying} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-base py-6 rounded-xl">
                  {isApplying ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Send className="w-5 h-5 mr-2" />}
                  Submit Application
                </Button>
                <Button type="button" variant="ghost" onClick={() => setShowApplyForm(false)} className="w-full text-muted-foreground">Cancel</Button>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default FreemiumPack;
