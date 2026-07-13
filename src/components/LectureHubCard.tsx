import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, Video, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const LectureHubCard = () => {
  const { user } = useAuth();
  const locked = !user;

  return (
    <section id="lecture-hub" className="section-mobile scroll-mt-20">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Ambient glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/25 via-secondary/15 to-neon-cyan/25 rounded-3xl blur-2xl opacity-60" />

          <Link
            to={locked ? '/auth?redirect=/lecture-hub' : '/lecture-hub'}
            className="relative block group overflow-hidden rounded-2xl border border-neon-cyan/25 bg-space-void/70 backdrop-blur-[20px] shadow-[0_10px_60px_-15px_rgba(0,242,255,0.35)] hover:border-neon-cyan/60 transition-all"
          >
            <div className="grid md:grid-cols-[1.1fr,1fr] gap-0">
              {/* Left — copy */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <span
                  className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-neon-cyan/10 text-[10px] md:text-xs uppercase tracking-[0.25em] text-neon-cyan mb-4 md:mb-5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Video className="w-3.5 h-3.5" /> Lecture Hub
                </span>

                <h2
                  className="text-fluid-3xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' }}
                >
                  Econ Nexus Lecture Hub
                </h2>

                <p className="text-fluid-sm md:text-fluid-base text-muted-foreground max-w-lg leading-relaxed mb-6">
                  A cinematic archive of on-demand economics lectures — micro, macro, AS &amp; A2 —
                  taught in plain language with syllabus-locked precision.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neon-cyan text-primary-foreground text-xs md:text-sm font-semibold tracking-[0.2em] uppercase group-hover:translate-y-[-2px] transition-transform" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {locked ? <><Lock className="w-4 h-4" /> Sign in to Enter</> : <>Enter Hub <ArrowRight className="w-4 h-4" /></>}
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em]">
                    Lectures uploading soon
                  </span>
                </div>
              </div>

              {/* Right — cinematic thumbnail stack */}
              <div className="relative min-h-[220px] md:min-h-[340px] bg-gradient-to-br from-space-elevated via-space-void to-neon-cyan/10 overflow-hidden">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,242,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Floating video tiles */}
                {[
                  { top: '12%', left: '10%', delay: 0, label: 'Micro · AS' },
                  { top: '38%', left: '46%', delay: 0.15, label: 'Macro · A2' },
                  { top: '62%', left: '18%', delay: 0.3, label: 'Case Studies' },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + t.delay, duration: 0.5 }}
                    animate={{ y: [0, -6, 0] }}
                    // @ts-ignore framer accepts these together
                    style={{ top: t.top, left: t.left, position: 'absolute' }}
                    className="w-[55%] max-w-[220px] aspect-video rounded-lg border border-neon-cyan/30 bg-space-void/80 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-neon-cyan/90 drop-shadow-[0_0_10px_rgba(0,242,255,0.6)]" />
                    </div>
                    <div className="absolute bottom-1.5 left-2 text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-neon-cyan/80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {t.label}
                    </div>
                  </motion.div>
                ))}

                {/* Lock badge if not signed in */}
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

export default LectureHubCard;
