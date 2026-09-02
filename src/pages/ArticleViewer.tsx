import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Home, Tag } from 'lucide-react';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { useAuth } from '@/hooks/useAuth';
import { ARTICLES } from '@/data/articles';

/**
 * Article viewer — renders each self-contained HTML article inside a
 * responsive iframe that fills the viewport on both mobile and desktop.
 */
const ArticleViewer = () => {
  const { user, session } = useAuth();
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!session && !user) {
    return <Navigate to={`/auth?redirect=/article-hub/${slug ?? ''}`} replace />;
  }

  if (!article) {
    return <Navigate to="/article-hub" replace />;
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <Helmet>
        <title>{article.title} — Econ Nexus</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <FloatingDock />

      <main className="relative z-10 pt-20 sm:pt-24 md:pt-28 pb-8 flex-1 flex flex-col">
        <div className="w-full max-w-[1100px] mx-auto px-3 sm:px-4 md:px-6 mb-3 md:mb-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
          <Link
            to="/article-hub"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-space-void/60 text-[11px] sm:text-xs text-muted-foreground hover:text-neon-gold hover:border-neon-gold/40 transition-all uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Library
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-space-void/60 text-[11px] sm:text-xs text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/40 transition-all uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-[0.18em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
              <Tag className="w-3 h-3" /> {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-2 sm:px-4 md:px-6 flex-1">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <iframe
              src={article.file}
              title={article.title}
              className="w-full block h-[calc(100dvh-150px)] sm:h-[calc(100dvh-170px)] md:h-[calc(100dvh-190px)] min-h-[520px]"
              style={{ border: 0, background: '#ffffff' }}
              sandbox="allow-same-origin allow-scripts allow-popups"
              loading="eager"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleViewer;
