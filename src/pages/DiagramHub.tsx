import { useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, LineChart, Search, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { DIAGRAM_ENTRIES, DIAGRAM_GUIDE_FILE } from '@/data/diagramGuide';
import { cn } from '@/lib/utils';

type Filter = 'All' | 'Microeconomics' | 'Macroeconomics';

/**
 * Econ Nexus Diagram Hub — 130 stage-by-stage economics diagrams.
 * The complete guide is served as a self-contained HTML document and
 * rendered inside a responsive viewer; the index jumps to any diagram.
 */
const DiagramHub = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<string | null>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DIAGRAM_ENTRIES.filter(
      (d) =>
        (filter === 'All' || d.category === filter) &&
        (!q || d.title.toLowerCase().includes(q) || String(d.number) === q)
    );
  }, [query, filter]);

  const jumpTo = (id: string) => {
    setActive(id);
    const frame = frameRef.current;
    try {
      if (frame?.contentWindow) {
        frame.contentWindow.location.hash = `#${id}`;
      } else if (frame) {
        frame.src = `${DIAGRAM_GUIDE_FILE}#${id}`;
      }
    } catch {
      if (frame) frame.src = `${DIAGRAM_GUIDE_FILE}#${id}`;
    }
    viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <Helmet>
        <title>Diagram Hub — 130 Economics Diagrams | Econ Nexus</title>
        <meta
          name="description"
          content="Explore 130 complex economics diagrams explained stage by stage — micro and macro, from tax incidence to the GDP deflator."
        />
      </Helmet>

      <Header />
      <FloatingDock />

      <main className="relative z-10 pt-20 sm:pt-24 md:pt-28 pb-10 flex-1">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-space-void/60 text-[11px] sm:text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-all uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>

          <header className="mt-6 md:mt-8 mb-8 md:mb-10 text-center">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.22em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <LineChart className="w-3.5 h-3.5" /> {DIAGRAM_ENTRIES.length} Diagrams
            </span>
            <h1
              className="mt-4 text-fluid-4xl lg:text-fluid-5xl font-bold section-title"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontStyle: 'italic',
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
              }}
            >
              Econ Nexus Diagram Hub
            </h1>
            <p className="mt-3 text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Every core micro and macro diagram, built stage by stage — axes, curves, shifts and the
              economics behind each movement.
            </p>
          </header>

          {/* Search + filters */}
          <div className="glass-card p-3 sm:p-4 mb-5 md:mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search diagrams — tax incidence, Phillips curve, Lorenz…"
                  aria-label="Search diagrams"
                  className="w-full h-11 pl-9 pr-9 rounded-xl bg-space-void/60 border border-white/10 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/50"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                {(['All', 'Microeconomics', 'Macroeconomics'] as Filter[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      'flex-1 sm:flex-none px-3 h-11 rounded-xl border text-[11px] uppercase tracking-[0.15em] transition-all',
                      filter === f
                        ? 'border-primary/50 bg-primary/15 text-primary'
                        : 'border-white/10 bg-white/5 text-muted-foreground hover:text-foreground'
                    )}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {f === 'Microeconomics' ? 'Micro' : f === 'Macroeconomics' ? 'Macro' : 'All'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Index */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 mb-8 md:mb-10">
            {results.map((d) => (
              <button
                key={d.id}
                onClick={() => jumpTo(d.id)}
                className={cn(
                  'group text-left rounded-xl border p-3 md:p-3.5 transition-all touch-target',
                  active === d.id
                    ? 'border-primary/50 bg-primary/10'
                    : 'border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-white/[0.06]'
                )}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] text-primary/80"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {String(d.number).padStart(3, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    {d.category === 'Microeconomics' ? 'Micro' : 'Macro'}
                  </span>
                </div>
                <span className="block text-sm text-silver-bright leading-snug group-hover:text-primary transition-colors">
                  {d.title}
                </span>
              </button>
            ))}
            {results.length === 0 && (
              <p className="col-span-full text-center text-sm text-muted-foreground py-8">
                No diagram matches “{query}”.
              </p>
            )}
          </div>

          {/* Viewer */}
          <div ref={viewerRef} className="scroll-mt-24">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <iframe
                ref={frameRef}
                src={DIAGRAM_GUIDE_FILE}
                title="Econ Nexus Diagram Guide"
                className="w-full block h-[calc(100dvh-140px)] min-h-[520px]"
                style={{ border: 0, background: '#ffffff' }}
                sandbox="allow-same-origin allow-scripts allow-popups"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiagramHub;
