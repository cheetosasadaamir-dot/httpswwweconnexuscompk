import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Loader2, Shield, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

interface FreemiumEntry {
  id: string;
  gmail: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const AdminNexusApproval = () => {
  const [entries, setEntries] = useState<FreemiumEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'granted' | 'rejected'>('pending');
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setIsAuthenticated(true);
      // Check if admin
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);
      
      const adminRole = roles?.find(r => r.role === 'admin');
      if (adminRole) {
        setIsAdmin(true);
        fetchEntries();
      } else {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await checkAuth();
    } catch (err: any) {
      toast({ title: "Auth Error", description: err.message, variant: "destructive" });
    } finally {
      setIsSigningIn(false);
    }
  };

  const fetchEntries = async () => {
    setIsLoading(true);
    const query = supabase.from('freemium_access').select('*').order('created_at', { ascending: false });
    
    if (filter !== 'all') {
      query.eq('status', filter);
    }
    
    const { data, error } = await query;
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setEntries((data as FreemiumEntry[]) || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAdmin) fetchEntries();
  }, [filter, isAdmin]);

  const updateStatus = async (id: string, newStatus: 'granted' | 'rejected') => {
    const { error } = await supabase
      .from('freemium_access')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Updated", description: `Status changed to ${newStatus}` });
      fetchEntries();
    }
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 min-h-[80vh] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-sm w-full">
            <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-neon-cyan" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground text-center mb-6">Admin Access Required</h1>
            <form onSubmit={handleSignIn} className="space-y-4">
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Admin Email" required className="bg-card/50" />
              <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="bg-card/50" />
              <Button type="submit" disabled={isSigningIn} className="w-full bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90">
                {isSigningIn ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Shield className="w-4 h-4 mr-2" />}
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
        <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 min-h-[80vh] flex items-center justify-center">
          <div className="text-center">
            <Shield className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">Unauthorized</h1>
            <p className="text-muted-foreground">You don't have admin privileges to access this page.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h1 className="text-fluid-3xl font-display font-bold text-foreground">Freemium Approvals</h1>
              <p className="text-muted-foreground text-sm">{entries.length} applications</p>
            </div>
            <Button onClick={fetchEntries} variant="outline" size="sm" className="border-neon-cyan/30 text-neon-cyan">
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['all', 'pending', 'granted', 'rejected'] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(f)}
                className={filter === f ? 'bg-neon-cyan text-primary-foreground' : 'border-border/50'}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>
          ) : entries.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No applications found.</div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 flex items-center justify-between gap-4 flex-wrap"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      entry.status === 'granted' ? 'bg-green-500' :
                      entry.status === 'rejected' ? 'bg-destructive' : 'bg-neon-gold'
                    }`} />
                    <div className="min-w-0">
                      <p className="text-foreground font-medium text-sm truncate">{entry.gmail}</p>
                      <p className="text-muted-foreground text-xs">
                        {new Date(entry.created_at).toLocaleDateString()} — {entry.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {entry.status !== 'granted' && (
                      <Button
                        size="sm"
                        onClick={() => updateStatus(entry.id, 'granted')}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" /> Accept
                      </Button>
                    )}
                    {entry.status !== 'rejected' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(entry.id, 'rejected')}
                        className="border-destructive/30 text-destructive hover:bg-destructive/10"
                      >
                        <XCircle className="w-4 h-4 mr-1" /> Reject
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default AdminNexusApproval;
