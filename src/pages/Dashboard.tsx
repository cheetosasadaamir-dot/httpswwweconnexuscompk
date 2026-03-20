import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, BookOpen, Brain, TrendingUp, User, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
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

  const quickLinks = [
    { title: 'Microeconomics', path: '/microeconomics', icon: TrendingUp, color: 'text-blue-400' },
    { title: 'Macroeconomics', path: '/macroeconomics', icon: BookOpen, color: 'text-emerald-400' },
    { title: 'Exam Intelligence', path: '/exam-intelligence', icon: Brain, color: 'text-amber-400' },
  ];

  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              {avatarUrl ? (
                <img src={avatarUrl} alt="" className="w-12 h-12 rounded-full border-2 border-primary/30" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
              )}
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Welcome, {displayName}</h1>
                <p className="text-muted-foreground text-sm">{user.email}</p>
              </div>
            </div>
            <Button onClick={handleSignOut} variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Quick links */}
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <link.icon className={`w-8 h-8 ${link.color} mb-3`} />
                  <h3 className="text-foreground font-semibold">{link.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
