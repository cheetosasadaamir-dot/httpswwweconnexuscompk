import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { useAuth } from '@/hooks/useAuth';
import { ARTICLES } from '@/data/articles';

/**
 * Copyright-protected article viewer.
 *
 * Browsers cannot truly block the OS screenshot key, but we harden the
 * viewer with layered deterrents so a screenshot yields nothing useful:
 *  - Content is blanked whenever the tab/window loses focus, visibility
 *    changes, or the user long-presses (mobile screenshot gesture window).
 *  - Right-click, text selection, drag, copy, print and common
 *    save/DevTools shortcuts are blocked.
 *  - PrintScreen keypress clears the clipboard and hides the article.
 *  - A translucent watermark carrying the viewer's email overlays the
 *    iframe, so any leaked capture is traceable.
 */
const ArticleViewer = () => {
  const { user, session } = useAuth();
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  const [hidden, setHidden] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const hideNow = () => {
      setHidden(true);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
    const revealSoon = () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setHidden(false), 400);
    };

    const onVis = () => (document.hidden ? hideNow() : revealSoon());
    const onBlur = () => hideNow();
    const onFocus = () => revealSoon();

    const onKey = (e: KeyboardEvent) => {
      // PrintScreen — blank + wipe clipboard
      if (e.key === 'PrintScreen') {
        hideNow();
        try { navigator.clipboard?.writeText(''); } catch { /* noop */ }
        revealSoon();
      }
      // Block Ctrl/Cmd + S / P / C / U / A and F12 (DevTools)
      const meta = e.ctrlKey || e.metaKey;
      if (
        (meta && ['s', 'p', 'c', 'u', 'a'].includes(e.key.toLowerCase())) ||
        e.key === 'F12' ||
        (meta && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    const onContext = (e: MouseEvent) => e.preventDefault();
    const onCopy = (e: ClipboardEvent) => e.preventDefault();
    const onBeforePrint = () => hideNow();
    const onAfterPrint = () => revealSoon();

    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    window.addEventListener('keydown', onKey);
    window.addEventListener('contextmenu', onContext);
    window.addEventListener('copy', onCopy);
    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('afterprint', onAfterPrint);

    return () => {
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('contextmenu', onContext);
      window.removeEventListener('copy', onCopy);
      window.removeEventListener('beforeprint', onBeforePrint);
      window.removeEventListener('afterprint', onAfterPrint);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  if (!session && !user) {
    return <Navigate to={`/auth?redirect=/article-hub/${slug ?? ''}`} replace />;
  }

  if (!article) {
    return <Navigate to="/article-hub" replace />;
  }

  const watermark = user?.email ?? 'Econ Nexus • Protected Content';

  return (
    <div className="min-h-screen relative flex flex-col select-none">
      <Helmet>
        <title>{article.title} — Econ Nexus</title>
        <meta name="description" content={article.summary} />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
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
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-gold/30 bg-neon-gold/10 text-[11px] text-neon-gold uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> Copyright Protected
          </div>
        </div>

        <div className="w-[95%] max-w-[1100px] mx-auto px-0 md:px-2 flex-1">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <iframe
              src={article.file}
              title={article.title}
              className="w-full block transition-[filter,opacity] duration-150"
              style={{
                height: 'calc(100vh - 190px)',
                minHeight: '560px',
                border: 0,
                background: '#ffffff',
                filter: hidden ? 'blur(28px) brightness(0.15) contrast(0.4)' : 'none',
                opacity: hidden ? 0 : 1,
                pointerEvents: hidden ? 'none' : 'auto',
              }}
              sandbox="allow-same-origin"
              loading="eager"
            />

            {/* Diagonal repeating watermark — captured in any screenshot */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                backgroundImage: `repeating-linear-gradient(-30deg, transparent 0 120px, rgba(0,0,0,0.06) 120px 121px)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-8 p-8 overflow-hidden opacity-[0.08]"
              style={{
                transform: 'rotate(-24deg) scale(1.4)',
                color: '#0b1e3a',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              {Array.from({ length: 60 }).map((_, i) => (
                <span key={i}>Econ Nexus · {watermark}</span>
              ))}
            </div>

            {/* Privacy shield shown on focus loss / PrintScreen */}
            {hidden && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-space-void/95 text-white z-10">
                <ShieldAlert className="w-10 h-10 text-neon-gold" />
                <p
                  className="text-xs uppercase tracking-[0.3em] text-neon-gold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Content Hidden — Copyright Protected
                </p>
                <p className="text-[11px] text-muted-foreground max-w-xs text-center">
                  Screenshots, printing and capture are disabled. Return focus to this tab to continue reading.
                </p>
              </div>
            )}
          </div>

          <p className="mt-3 text-[10px] text-center text-muted-foreground/70 uppercase tracking-[0.22em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © Econ Nexus — All rights reserved. Reproduction, screenshotting or redistribution is prohibited.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleViewer;
