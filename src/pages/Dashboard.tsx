import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, BookOpen, Brain, TrendingUp, User, Loader2, Calendar, Mail, MessageSquare } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
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

  const quickLinks = [
    { title: 'Microeconomics', path: '/microeconomics', icon: TrendingUp, color: 'text-primary' },
    { title: 'Macroeconomics', path: '/macroeconomics', icon: BookOpen, color: 'text-secondary' },
    { title: 'Exam Intelligence', path: '/exam-intelligence', icon: Brain, color: 'text-accent' },
  ];

  return (
    <Layout>
      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

          {/* Profile Card */}
          <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 md:p-8 mb-6">
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
                </div>
              </div>
              <Button onClick={handleSignOut} variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Links</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
                  <link.icon className={`w-7 h-7 ${link.color} mb-2`} />
                  <h3 className="text-foreground font-semibold text-sm">{link.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Activity Section */}
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-6">
            <div className="flex flex-col items-center justify-center text-center py-8">
              <MessageSquare className="w-10 h-10 text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground text-sm">Your chat history and persona activity will appear here.</p>
              <p className="text-muted-foreground/60 text-xs mt-1">Start a conversation with the AI to see it logged.</p>
            </div>
          </div>

        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
