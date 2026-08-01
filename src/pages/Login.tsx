import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2, ArrowRight, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import EconNexusLogo from '@/components/EconNexusLogo';

const Login = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [mode, setMode] = useState<'login' | 'signup' | 'magic'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      const target = new URLSearchParams(window.location.search).get('redirect') || '/';
      navigate(target, { replace: true });
    }
  }, [user, loading, navigate]);

  const handleGoogleSignIn = async () => {
    const { error } = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (mode === 'magic') {
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) throw error;
        toast({ title: 'Magic Link Sent!', description: 'Check your email for the login link.' });
      } else if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast({ title: 'Account Created', description: 'Check your email to verify your account.' });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast({ title: 'Auth Error', description: err.message, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Glassmorphic Card */}
        <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-black/30 p-8">
          {/* Logo & Title */}
          <div className="flex flex-col items-center mb-8">
            <EconNexusLogo size="sm" useImage={true} />
            <div className="mt-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Student Portal
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground mt-3">
              {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Where Academic Excellence Meets Artificial Intelligence
            </p>
          </div>

          {/* Google OAuth */}
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full mb-4 h-12 text-base border-border/60 bg-muted/30 hover:bg-muted/50 text-foreground font-medium"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </Button>

          {/* Email Login Toggle */}
          <Button
            onClick={() => setMode(mode === 'login' ? 'login' : 'login')}
            variant="outline"
            className="w-full mb-6 h-12 text-base border-border/60 bg-muted/30 hover:bg-muted/50 text-foreground font-medium"
            type="button"
            style={{ display: mode === 'login' || mode === 'signup' || mode === 'magic' ? 'none' : undefined }}
          >
            <Mail className="w-5 h-5 mr-3" />
            Email Login
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card/60 px-3 text-muted-foreground">or continue with email</span>
            </div>
          </div>

          {/* Email/Password form */}
          <form onSubmit={handleEmailAuth} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="pl-10 h-11 bg-input/50 border-border/40"
              />
            </div>

            {mode !== 'magic' && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  minLength={6}
                  className="pl-10 h-11 bg-input/50 border-border/40"
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-2" />
              )}
              {mode === 'magic' ? 'Send Magic Link' : mode === 'signup' ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>

          {/* Mode switchers */}
          <div className="mt-5 text-center space-y-2">
            {mode === 'login' && (
              <>
                <button onClick={() => setMode('magic')} className="text-xs text-primary hover:underline block w-full">
                  Sign in with Magic Link instead
                </button>
                <p className="text-sm text-muted-foreground mt-3">
                  Don't have an account?{' '}
                  <button onClick={() => setMode('signup')} className="text-primary font-semibold hover:underline">Sign Up</button>
                </p>
              </>
            )}
            {mode === 'signup' && (
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-primary font-semibold hover:underline">Sign In</button>
              </p>
            )}
            {mode === 'magic' && (
              <button onClick={() => setMode('login')} className="text-xs text-primary hover:underline">
                Back to password login
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
