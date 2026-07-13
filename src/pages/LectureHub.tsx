import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { PlayCircle, Video, Clock, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { useAuth } from '@/hooks/useAuth';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'as-micro', label: 'AS Micro' },
  { id: 'as-macro', label: 'AS Macro' },
  { id: 'a2-micro', label: 'A2 Micro' },
  { id: 'a2-macro', label: 'A2 Macro' },
] as const;

const placeholders = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: `Lecture ${i + 1}`,
  cat: CATEGORIES[(i % 4) + 1].id,
}));

const LectureHub = () => {
  const { user, session } = useAuth();
  const [active, setActive] = useState<string>('all');

  // Locked route — force sign-in
  if (!session && !user) {
    return <Navigate to="/auth?redirect=/lecture-hub" replace />;
  }

  const filtered = active === 'all' ? placeholders : placeholders.filter(p => p.cat === active);

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Lecture Hub — Econ Nexus</title>
        <meta name="description" content="Cinematic on-demand economics lectures — AS & A2, Micro & Macro — inside Econ Nexus." />
      </Helmet>

      <Header />
      <FloatingDock />

      <main className="relative z-10 pt-24 md:pt-32 pb-16">
        <div className="w-[95%] max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-14">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/25 text-xs uppercase tracking-[0.25em] text-neon-cyan mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Video className="w-3.5 h-3.5" /> Lecture Hub
            </span>
            <h1
              className="text-fluid-4xl lg:text-fluid-6xl font-bold section-title mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' }}
            >
              The Lecture Archive
            </h1>
            <p className="text-fluid-base text-muted-foreground max-w-2xl mx-auto">
              Full lectures land here soon. Browse the empty shelves below — filter by syllabus branch, and
              expect new videos every week.
            </p>
          </motion.div>

          {/* Filter bar */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
            <Filter className="w-4 h-4 text-neon-cyan flex-shrink-0" />
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all border ${
                  active === c.id
                    ? 'bg-neon-cyan text-primary-foreground border-neon-cyan shadow-[0_0_16px_rgba(0,242,255,0.4)]'
                    : 'bg-space-void/50 text-muted-foreground border-white/10 hover:border-neon-cyan/40 hover:text-white'
                }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Video grid — placeholder cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-space-void/60 backdrop-blur-md hover:border-neon-cyan/40 transition-all"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-space-elevated via-space-void to-neon-cyan/10 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0,242,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-14 h-14 text-neon-cyan/50 group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-space-void/80 border border-neon-cyan/25 text-[10px] uppercase tracking-[0.2em] text-neon-cyan" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {CATEGORIES.find(c => c.id === v.cat)?.label}
                  </div>
                </div>

                {/* Meta */}
                <div className="p-4">
                  <h3 className="font-display text-base text-white/90 mb-1 truncate">{v.title}</h3>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
                    <Clock className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty-state banner */}
          <div className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl border border-neon-gold/20 bg-space-void/50 backdrop-blur-md text-center">
            <p className="text-fluid-sm md:text-fluid-base text-muted-foreground">
              📼 Lectures are being uploaded shortly. Check back soon — each video is being recorded, edited
              and syllabus-mapped before it lands here.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LectureHub;
