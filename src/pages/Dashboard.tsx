import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User, Loader2, Calendar, Mail, MapPin } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import EconNexusLogo from '@/components/EconNexusLogo';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ city?: string | null; country?: string | null } | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      supabase.from('profiles').select('city, country').eq('id', user.id).single()
        .then(({ data }) => { if (data) setProfile(data); });
    }
  }, [user]);

  const handleSignOut = async => {
    await signOut();
    navigate('/login');
  };

  if (loading || !user) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  const displayName = user.user_metadata?.full_name || user.user_metadata?.name || user.email;
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
  const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  }) : 'N/A';
  const locationStr = [profile?.city, profile?.country].filter(Boolean).join(', ');

  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 max-w-4xl">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Profile Card */}
          <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="" className="w-16 h-16 rounded-full border-2 border-primary/30 shadow-lg shadow-primary/10" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted/40 border border-border/50 flex items-center justify-center">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                <div>
                  <h1 className="text-2xl font-display font-bold text-foreground">{displayName}</h1>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-muted-foreground text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>Joined {createdAt}</span>
                  </div>
                  {locationStr && (
                    <div className="flex items-center gap-2 mt-0.5 text-muted-foreground text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{locationStr}</span>
                    </div>
                  )}
                </div>
              </div>
              <Button onClick={handleSignOut} variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
