import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Lock, ArrowRight, Newspaper } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const ArticleHubCard = () => {
  const { user } = useAuth();
  const locked = !user;

  return (
    <section id="article-hub" className="section-mobile scroll-mt-20">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Ambient glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-gold/20 via-neon-cyan/10 to-neon-gold/20 rounded-3xl blur-2xl opacity-60" />

          <Link
            to={locked ? '/auth?redirect=/article-hub' : '/article-hub'}
            className="relative block group overflow-hidden rounded-2xl border border-neon-gold/25 bg-space-void/70 backdrop-blur-[20px] shadow-[0_10px_60px_-15px_rgba(212,175,55,0.35)] hover:border-neon-gold/60 transition-all"
          >
            <div className="grid md:grid-cols-[1.1fr,1fr] gap-0">
              {/* Left — copy */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <span
                  className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-neon-gold/10 text-[10px] md:text-xs uppercase tracking-[0.25em] text-neon-gold mb-4 md:mb-5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Newspaper className="w-3.5 h-3.5" /> Research & Articles
                </span>

                <h2
                  className="text-fluid-3xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' }}
                >
                  Econ Nexus Research &amp; Article Hub
                </h2>

                <p className="text-fluid-sm md:text-fluid-base text-muted-foreground max-w-lg leading-relaxed mb-6">
                  A curated library of long-form essays, IMF & Brookings research summaries, and
                  historical explainers — written for serious readers.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neon-gold text-space-void text-xs md:text-sm font-semibold tracking-[0.2em] uppercase group-hover:translate-y-[-2px] transition-transform" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {locked ? <><Lock className="w-4 h-4" /> Sign in to Read</> : <>Enter Library <ArrowRight className="w-4 h-4" /></>}
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em]">
                    7 articles · updated weekly
                  </span>
                </div>
              </div>

              {/* Right — stacked article cards */}
              <div className="relative min-h-[220px] md:min-h-[340px] bg-gradient-to-br from-space-elevated via-space-void to-neon-gold/10 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {[
                  { top: '10%', left: '10%', delay: 0, label: 'Markets · Inflation' },
                  { top: '38%', left: '42%', delay: 0.15, label: 'Finance · Tokenization' },
                  { top: '64%', left: '14%', delay: 0.3, label: 'Policy · Fed Data' },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + t.delay, duration: 0.5 }}
                    animate={{ y: [0, -6, 0] }}
                    // @ts-ignore
                    style={{ top: t.top, left: t.left, position: 'absolute' }}
                    className="w-[58%] max-w-[240px] aspect-[4/2.4] rounded-lg border border-neon-gold/30 bg-space-void/85 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden p-3"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <FileText className="w-3 h-3 text-neon-gold" />
                      <span className="text-[8px] uppercase tracking-[0.2em] text-neon-gold/90" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {t.label}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 bg-white/25 rounded w-11/12" />
                      <div className="h-1.5 bg-white/20 rounded w-4/5" />
                      <div className="h-1.5 bg-white/15 rounded w-2/3" />
                    </div>
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[9px] text-neon-gold/80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      <BookOpen className="w-2.5 h-2.5" /> Read
                    </div>
                  </motion.div>
                ))}

                {locked && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-void/80 border border-neon-gold/40 backdrop-blur-md">
                    <Lock className="w-3.5 h-3.5 text-neon-gold" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neon-gold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Locked</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleHubCard;
