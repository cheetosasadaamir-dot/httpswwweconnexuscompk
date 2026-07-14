import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import { BookOpen, Newspaper, Filter, ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { useAuth } from '@/hooks/useAuth';
import { ARTICLES, ARTICLE_CATEGORIES } from '@/data/articles';

const ArticleHub = () => {
  const { user, session } = useAuth();
  const [active, setActive] = useState<(typeof ARTICLE_CATEGORIES)[number]>('All');

  if (!session && !user) {
    return <Navigate to="/auth?redirect=/article-hub" replace />;
  }

  const filtered = useMemo(
    () => (active === 'All' ? ARTICLES : ARTICLES.filter(a => a.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Research & Article Hub — Econ Nexus</title>
        <meta name="description" content="Long-form Econ Nexus research essays and article library — markets, policy, finance, trade and history." />
      </Helmet>

      <Header />
      <FloatingDock />

      <main className="relative z-10 pt-24 md:pt-32 pb-16">
        <div className="w-[95%] max-w-[1200px] mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-14">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-gold/10 border border-neon-gold/25 text-xs uppercase tracking-[0.25em] text-neon-gold mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Newspaper className="w-3.5 h-3.5" /> Research & Article Hub
            </span>
            <h1
              className="text-fluid-4xl lg:text-fluid-6xl font-bold section-title mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' }}
            >
              The Article Library
            </h1>
            <p className="text-fluid-base text-muted-foreground max-w-2xl mx-auto">
              Curated long-form essays and research summaries. Click any card to open the full article.
            </p>
          </motion.div>

          {/* Filter bar */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
            <Filter className="w-4 h-4 text-neon-gold flex-shrink-0" />
            {ARTICLE_CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all border ${
                  active === c
                    ? 'bg-neon-gold text-space-void border-neon-gold shadow-[0_0_16px_rgba(212,175,55,0.4)]'
                    : 'bg-space-void/50 text-muted-foreground border-white/10 hover:border-neon-gold/40 hover:text-white'
                }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((a, i) => (
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/article-hub/${a.slug}`}
                  className="group block h-full rounded-2xl overflow-hidden border border-white/10 bg-space-void/60 backdrop-blur-md hover:border-neon-gold/50 hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-space-elevated via-space-void to-neon-gold/10 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-neon-gold/50 group-hover:text-neon-gold group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-space-void/80 border border-neon-gold/30 text-[10px] uppercase tracking-[0.2em] text-neon-gold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {a.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-base md:text-lg text-white/95 mb-2 leading-snug group-hover:text-neon-gold transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {a.summary}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{a.readTime}</span>
                      <span className="flex items-center gap-1 text-neon-gold">Read <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleHub;
