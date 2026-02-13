import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader2, Shield, RefreshCw, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const OWNER_EMAIL = import.meta.env.VITE_OWNER_EMAIL || '';

interface PremiumEntry {
  id: string;
  user_email: string;
  access_status: boolean;
  whatsapp_verified: boolean;
  created_at: string;
  updated_at: string;
}

const OwnerDashboard = () => {
  const [entries, setEntries] = useState<PremiumEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [ownerChecked, setOwnerChecked] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'granted'>('all');
  const { toast } = useToast();

  useEffect(() => {
    // Check if owner email is saved in session
    const saved = sessionStorage.getItem('owner_verified');
    if (saved === OWNER_EMAIL) {
      setIsOwner(true);
      setOwnerChecked(true);
      fetchEntries();
    } else {
      setIsLoading(false);
      setOwnerChecked(true);
    }
  }, []);

  const handleOwnerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = emailInput.trim().toLowerCase();
    if (normalized === OWNER_EMAIL) {
      sessionStorage.setItem('owner_verified', OWNER_EMAIL);
      setIsOwner(true);
      fetchEntries();
    } else {
      toast({ title: "Access Denied", description: "This email is not authorized.", variant: "destructive" });
    }
  };

  const fetchEntries = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('premium_access')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setEntries((data as PremiumEntry[]) || []);
    }
    setIsLoading(false);
  };

  const updateAccess = async (id: string, grantAccess: boolean) => {
    const { error } = await supabase
      .from('premium_access')
      .update({ access_status: grantAccess })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: grantAccess ? "Access Granted ✅" : "Access Revoked ❌" });
      fetchEntries();
    }
  };

  const filteredEntries = entries.filter(e => {
    if (filter === 'pending') return !e.access_status;
    if (filter === 'granted') return e.access_status;
    return true;
  });

  if (!ownerChecked) return null;

  // Gmail login gate
  if (!isOwner) {
    return (
      <Layout>
        <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 min-h-[80vh] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-sm w-full">
            <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-neon-cyan" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground text-center mb-2">Owner Access</h1>
            <p className="text-muted-foreground text-center text-sm mb-6">Enter your Gmail to access the dashboard</p>
            <form onSubmit={handleOwnerLogin} className="space-y-4">
              <Input type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder="Enter your Gmail" required className="bg-card/50 text-center" />
              <Button type="submit" className="w-full bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90">
                <Shield className="w-4 h-4 mr-2" /> Verify & Enter
              </Button>
            </form>
          </motion.div>
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
              <h1 className="text-fluid-3xl font-display font-bold text-foreground">Owner Dashboard</h1>
              <p className="text-muted-foreground text-sm">{entries.length} total requests • {entries.filter(e => !e.access_status).length} pending</p>
            </div>
            <Button onClick={fetchEntries} variant="outline" size="sm" className="border-neon-cyan/30 text-neon-cyan">
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['all', 'pending', 'granted'] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(f)}
                className={filter === f ? 'bg-neon-cyan text-primary-foreground' : 'border-border/50'}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f === 'pending' && ` (${entries.filter(e => !e.access_status).length})`}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No requests found.</div>
          ) : (
            <div className="space-y-3">
              {filteredEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-5 rounded-2xl bg-card/50 border border-border/50 flex items-center justify-between gap-4 flex-wrap"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${entry.access_status ? 'bg-green-500' : 'bg-neon-gold'}`} />
                    <div className="min-w-0">
                      <p className="text-foreground font-medium text-sm truncate">{entry.user_email}</p>
                      <p className="text-muted-foreground text-xs">
                        {new Date(entry.created_at).toLocaleDateString()} — {entry.access_status ? 'Access Granted' : 'Pending'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {!entry.access_status ? (
                      <Button
                        size="lg"
                        onClick={() => updateAccess(entry.id, true)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" /> Yes
                      </Button>
                    ) : (
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => updateAccess(entry.id, false)}
                        className="border-destructive/30 text-destructive hover:bg-destructive/10 font-semibold px-6"
                      >
                        <XCircle className="w-5 h-5 mr-2" /> No
                      </Button>
                    )}
                    <a
                      href={`https://wa.me/923118932062?text=${encodeURIComponent(`Re: Premium Access for ${entry.user_email}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" variant="outline" className="border-green-500/30 text-green-500 hover:bg-green-500/10">
                        <MessageSquare className="w-5 h-5" />
                      </Button>
                    </a>
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

export default OwnerDashboard;
