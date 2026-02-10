import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Twitter, Mail, Phone, GraduationCap, Award, Shield, CheckCircle, XCircle, Loader2, RefreshCw, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import ownerPortrait from '@/assets/owner-portrait.jpeg';

const OWNER_EMAIL = 'unifom7@gmail.com';

interface OwnerProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PremiumEntry {
  id: string;
  user_email: string;
  access_status: boolean;
  whatsapp_verified: boolean;
  created_at: string;
  updated_at: string;
}

const OwnerProfileDrawer = ({ isOpen, onClose }: OwnerProfileDrawerProps) => {
  const [isOwner, setIsOwner] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [entries, setEntries] = useState<PremiumEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'granted'>('all');
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      const saved = sessionStorage.getItem('owner_verified');
      const verified = saved === OWNER_EMAIL;
      setIsOwner(verified);
      if (verified) fetchEntries();
    }
  }, [isOpen]);

  const handleOwnerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim().toLowerCase() === OWNER_EMAIL) {
      sessionStorage.setItem('owner_verified', OWNER_EMAIL);
      setIsOwner(true);
      setShowAdminLogin(false);
      fetchEntries();
    } else {
      toast({ title: "Access Denied", description: "Not authorized.", variant: "destructive" });
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-space-void/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={cn(
              "fixed right-0 top-0 z-50 h-full overflow-y-auto",
              "w-full md:w-[480px] lg:w-[520px]",
              "bg-space-void/75 backdrop-blur-[15px]",
              "border-l border-neon-cyan/30",
              "shadow-[0_0_40px_rgba(0,242,255,0.1)]"
            )}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-space-elevated/50 hover:bg-neon-cyan/20 transition-colors group z-10"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <header className="mb-10">
                <h2 className="text-xs font-semibold tracking-[0.3em] text-neon-cyan uppercase mb-8">
                  Owner Profile
                </h2>

                <div className="flex flex-col items-center text-center mb-8">
                  <motion.div
                    className="relative mb-6 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute -inset-1 rounded-xl bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-all duration-300" />
                    <div className="relative w-32 h-40 rounded-xl overflow-hidden border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,242,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,242,255,0.6)] transition-shadow duration-300">
                      <img src={ownerPortrait} alt="Muhammad Asad Aamir" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  <h1 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide mb-2">
                    Muhammad Asad Aamir
                  </h1>
                  <p className="text-muted-foreground text-sm tracking-wide">
                    Business & Economics Scholar
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <a href="mailto:unifom7@gmail.com" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">unifom7@gmail.com</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a href="tel:+923118932062" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+92-311-893-2062</span>
                  </a>
                </div>
              </header>

              <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

              {/* Profile Bio */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Profile
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8] text-justify">
                  A highly motivated and disciplined individual with an academic foundation in Business and Economics, complemented by leadership experience as the former Director General of the Entrepreneurship Society. Passionate about continuous learning, personal growth, and effective communication, with a proven ability to manage responsibilities, collaborate in teams, and perform under pressure.
                </p>
              </section>

              {/* Education */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">A Levels</p>
                      <p className="text-xs text-muted-foreground">Highbrow College</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">O Levels</p>
                      <p className="text-xs text-muted-foreground">Falcon House Grammar School</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certifications
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="leading-[1.7]">
                    Sales Executive certification from Nagoya Car Trading, contributing to sales and client management of imported Japanese vehicles.
                  </p>
                  <p className="leading-[1.7]">
                    Appreciation Letter & Certificate as Director General, Entrepreneurship Society for organizing Cynosure 2024.
                  </p>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

              {/* Connect */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-5 text-center">
                  Connect
                </h3>
                <div className="flex items-center justify-center gap-4">
                  {[
                    { href: "https://linkedin.com", icon: Linkedin },
                    { href: "https://twitter.com", icon: Twitter },
                    { href: "mailto:unifom7@gmail.com", icon: Mail },
                  ].map(({ href, icon: Icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className="p-3 rounded-full bg-space-elevated/50 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                    </a>
                  ))}
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

              {/* Admin Panel Section */}
              {!isOwner && !showAdminLogin && (
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-muted-foreground/30 hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all text-xs"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin Access</span>
                </button>
              )}

              {!isOwner && showAdminLogin && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-cyan uppercase mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Admin Verification
                  </h3>
                  <form onSubmit={handleOwnerLogin} className="flex gap-2">
                    <Input
                      type="email"
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="Enter Gmail"
                      required
                      className="bg-card/50 text-sm"
                    />
                    <Button type="submit" size="sm" className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90 shrink-0">
                      Verify
                    </Button>
                  </form>
                </motion.div>
              )}

              {isOwner && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-cyan uppercase flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Admin Panel
                    </h3>
                    <Button onClick={fetchEntries} variant="ghost" size="sm" className="text-neon-cyan h-7 px-2">
                      <RefreshCw className="w-3.5 h-3.5" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground text-xs mb-3">
                    {entries.length} total • {entries.filter(e => !e.access_status).length} pending
                  </p>

                  {/* Filter */}
                  <div className="flex gap-1.5 mb-4">
                    {(['all', 'pending', 'granted'] as const).map(f => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                          filter === f
                            ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                            : "text-muted-foreground hover:text-white bg-space-elevated/30"
                        )}
                      >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                        {f === 'pending' && ` (${entries.filter(e => !e.access_status).length})`}
                      </button>
                    ))}
                  </div>

                  {/* Entries */}
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin text-neon-cyan" />
                    </div>
                  ) : filteredEntries.length === 0 ? (
                    <p className="text-center py-6 text-muted-foreground text-sm">No requests found.</p>
                  ) : (
                    <div className="space-y-2">
                      {filteredEntries.map(entry => (
                        <div
                          key={entry.id}
                          className="p-3 rounded-xl bg-card/30 border border-border/30 flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={cn("w-2.5 h-2.5 rounded-full shrink-0", entry.access_status ? "bg-green-500" : "bg-neon-gold")} />
                            <div className="min-w-0">
                              <p className="text-foreground font-medium text-xs truncate">{entry.user_email}</p>
                              <p className="text-muted-foreground text-[10px]">
                                {new Date(entry.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1.5 shrink-0">
                            {!entry.access_status ? (
                              <Button size="sm" onClick={() => updateAccess(entry.id, true)} className="bg-green-600 hover:bg-green-700 text-white h-8 px-3 text-xs">
                                <CheckCircle className="w-3.5 h-3.5 mr-1" /> Yes
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" onClick={() => updateAccess(entry.id, false)} className="border-destructive/30 text-destructive hover:bg-destructive/10 h-8 px-3 text-xs">
                                <XCircle className="w-3.5 h-3.5 mr-1" /> No
                              </Button>
                            )}
                            <a
                              href={`https://wa.me/923118932062?text=${encodeURIComponent(`Re: Premium Access for ${entry.user_email}`)}`}
                              target="_blank" rel="noopener noreferrer"
                            >
                              <Button size="sm" variant="outline" className="border-green-500/30 text-green-500 hover:bg-green-500/10 h-8 px-2">
                                <MessageSquare className="w-3.5 h-3.5" />
                              </Button>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default OwnerProfileDrawer;
