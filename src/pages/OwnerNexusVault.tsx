import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, XCircle, Loader2, RefreshCw, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Layout from '@/components/Layout';

interface PremiumEntry {
  id: string;
  user_email: string;
  access_status: boolean;
  created_at: string;
}

const OwnerNexusVault = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [entries, setEntries] = useState<PremiumEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'granted'>('all');
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setIsAuthenticated(true);
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);
      
      const adminRole = roles?.find(r => r.role === 'admin');
      if (adminRole) {
        setIsAdmin(true);
        fetchEntries();
      }
    }
    setAuthChecked(true);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await checkAuth();
    } catch (err: any) {
      toast({ title: "Access Denied", description: err.message, variant: "destructive" });
    } finally {
      setIsSigningIn(false);
    }
  };

  const fetchEntries = async => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('premium_access')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setEntries((data as PremiumEntry[]) || []);
    setIsLoading(false);
  };

  const handleYes = async (id: string) => {
    const res = await supabase.functions.invoke('manage-premium-access', {
      body: { entry_id: id, grant_access: true },
    });
    if (res.error || res.data?.error) {
      toast({ title: "Error", description: res.data?.error || res.error?.message, variant: "destructive" });
    } else {
      toast({ title: "Access Granted ✅" });
      fetchEntries();
    }
  };

  const handleNo = async (id: string) => {
    const res = await supabase.functions.invoke('manage-premium-access', {
      body: { entry_id: id, action: 'delete' },
    });
    if (res.error || res.data?.error) {
      toast({ title: "Error", description: res.data?.error || res.error?.message, variant: "destructive" });
    } else {
      toast({ title: "Request Deleted ❌" });
      fetchEntries();
    }
  };

  const filtered = entries.filter(e => {
    if (filter === 'pending') return !e.access_status;
    if (filter === 'granted') return e.access_status;
    return true;
  });

  if (!authChecked) return null;

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-sm w-full text-center">
            <Shield className="w-16 h-16 text-neon-cyan mx-auto mb-6" />
            <h1 className="text-2xl font-display font-bold text-foreground mb-6">Owner Vault</h1>
            <form onSubmit={handleSignIn} className="space-y-3">
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Admin email" className="bg-card/50 text-center" required />
              <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="bg-card/50 text-center" required />
              <Button type="submit" disabled={isSigningIn} className="w-full bg-neon-cyan text-primary-foreground">
                {isSigningIn ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Sign In
              </Button>
            </form>
          </motion.div>
        </div>
      </Layout>
    );
  }

  if (!isAdmin) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">Unauthorized</h1>
            <p className="text-muted-foreground">You don't have admin privileges.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link to="/" className="text-muted-foreground hover:text-neon-cyan text-sm flex items-center gap-1 mb-2">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
              <Shield className="w-6 h-6 text-neon-cyan" />
              Nexus Vault — Access Control
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {entries.length} total • {entries.filter(e => !e.access_status).length} pending
            </p>
          </div>
          <Button onClick={fetchEntries} variant="outline" size="sm" className="border-neon-cyan/30 text-neon-cyan">
            <RefreshCw className="w-4 h-4 mr-1" /> Refresh
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {(['all', 'pending', 'granted'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                filter === f
                  ? "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
                  : "text-muted-foreground bg-card/30 border-border/30 hover:border-neon-cyan/20"
              )}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === 'pending' && ` (${entries.filter(e => !e.access_status).length})`}
            </button>
          ))}
        </div>

        {/* Entries */}
        {isLoading ? (
          <div className="flex justify-center py-16"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>
        ) : filtered.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">No requests found.</p>
        ) : (
          <div className="space-y-3">
            {filtered.map(entry => (
              <div key={entry.id} className="p-4 rounded-2xl bg-card/30 border border-border/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={cn("w-3 h-3 rounded-full shrink-0", entry.access_status ? "bg-green-500" : "bg-neon-gold")} />
                  <div className="min-w-0">
                    <p className="text-foreground font-medium text-sm truncate">{entry.user_email}</p>
                    <p className="text-muted-foreground text-xs">{new Date(entry.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  {!entry.access_status ? (
                    <Button size="sm" onClick={() => handleYes(entry.id)} className="bg-green-600 hover:bg-green-700 text-white h-9 px-4">
                      <CheckCircle className="w-4 h-4 mr-1" /> Yes
                    </Button>
                  ) : (
                    <span className="text-green-500 text-xs font-semibold px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">Approved</span>
                  )}
                  <Button size="sm" variant="outline" onClick={() => handleNo(entry.id)} className="border-destructive/30 text-destructive hover:bg-destructive/10 h-9 px-4">
                    <XCircle className="w-4 h-4 mr-1" /> No
                  </Button>
                  <a href={`https://wa.me/923118932062?text=${encodeURIComponent(`Re: Premium Access for ${entry.user_email}`)}`} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-green-500/30 text-green-500 hover:bg-green-500/10 h-9 px-2">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OwnerNexusVault;
