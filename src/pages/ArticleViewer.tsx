import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { useAuth } from '@/hooks/useAuth';
import { ARTICLES } from '@/data/articles';

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

      <Header />
      <FloatingDock />

      <main className="relative z-10 pt-24 md:pt-28 pb-10 flex-1 flex flex-col">
        <div className="w-[95%] max-w-[1100px] mx-auto px-3 md:px-6 mb-4 flex items-center justify-between gap-3 flex-wrap">
          <Link
            to="/article-hub"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-space-void/60 text-xs text-muted-foreground hover:text-neon-gold hover:border-neon-gold/40 transition-all uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Library
          </Link>
          <a
            href={article.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-gold/40 bg-neon-gold/10 text-xs text-neon-gold hover:bg-neon-gold/20 transition-all uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Open in New Tab <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-[95%] max-w-[1100px] mx-auto px-0 md:px-2 flex-1">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <iframe
              src={article.file}
              title={article.title}
              className="w-full block"
              style={{ height: 'calc(100vh - 190px)', minHeight: '560px', border: 0, background: '#ffffff' }}
              sandbox="allow-same-origin allow-popups"
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
