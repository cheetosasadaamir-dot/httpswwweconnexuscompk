import { motion } from 'framer-motion';
import { AlertTriangle, BookOpen, CheckCircle2, Globe2, Scale } from 'lucide-react';
import { getEnrichment } from '@/data/chapterEnrichment';

interface ChapterEnrichmentProps {
  /** Enrichment id, e.g. "market-failure" */
  id: string;
}

const Card = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 md:p-7">
    <div
      className="flex items-center gap-2 mb-4 text-[11px] uppercase tracking-[0.22em] text-neon-gold"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {icon}
      {label}
    </div>
    {children}
  </div>
);

/**
 * Additive enrichment block appended to chapter pages: deeper explanation,
 * real-world cases, misconceptions, evaluation lines and a precise diagram spec.
 * Renders nothing when no enrichment exists for the given id.
 */
const ChapterEnrichment = ({ id }: ChapterEnrichmentProps) => {
  const data = getEnrichment(id);
  if (!data) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[900px] mx-auto px-1 sm:px-2 py-10 md:py-14 space-y-5 md:space-y-6"
      aria-label={`${data.title} — extended notes`}
    >
      <header className="text-center mb-2">
        <h2 className="font-serif text-2xl md:text-3xl text-silver-bright">
          {data.title} — Extended Notes
        </h2>
      </header>

      <Card icon={<BookOpen className="w-3.5 h-3.5" />} label="Going deeper">
        <div className="space-y-4">
          {data.deepDive.map((p, i) => (
            <p key={i} className="text-sm md:text-base leading-relaxed text-charcoal-silver">
              {p}
            </p>
          ))}
        </div>
      </Card>

      <Card icon={<Globe2 className="w-3.5 h-3.5" />} label="Real-world evidence">
        <div className="grid gap-4 sm:grid-cols-2">
          {data.examples.map(ex => (
            <div key={ex.title} className="rounded-xl border border-white/10 bg-space-void/40 p-4">
              <h3 className="font-serif text-base text-silver-bright mb-1.5">{ex.title}</h3>
              <p className="text-[13px] md:text-sm leading-relaxed text-charcoal-silver">{ex.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card icon={<AlertTriangle className="w-3.5 h-3.5" />} label="Common misconceptions">
        <ul className="space-y-4">
          {data.misconceptions.map(m => (
            <li key={m.claim}>
              <p className="text-sm text-red-300/90 italic">“{m.claim}”</p>
              <p className="text-[13px] md:text-sm leading-relaxed text-charcoal-silver mt-1">
                {m.correction}
              </p>
            </li>
          ))}
        </ul>
      </Card>

      <Card icon={<Scale className="w-3.5 h-3.5" />} label="Evaluation lines">
        <ul className="space-y-2.5">
          {data.evaluation.map(e => (
            <li key={e} className="flex gap-2.5 text-[13px] md:text-sm leading-relaxed text-charcoal-silver">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-neon-gold/70" />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card icon={<Scale className="w-3.5 h-3.5" />} label="Diagram specification">
        <h3 className="font-serif text-base text-silver-bright mb-3">{data.diagramSpec.title}</h3>
        <dl className="grid gap-3 sm:grid-cols-2 text-[13px] md:text-sm">
          {(
            [
              ['Axes', data.diagramSpec.axes],
              ['Curves', data.diagramSpec.curves],
              ['Shifts', data.diagramSpec.shifts],
              ['Equilibria', data.diagramSpec.equilibria],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/10 bg-space-void/40 p-3">
              <dt
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {k}
              </dt>
              <dd className="leading-relaxed text-charcoal-silver">{v}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </motion.section>
  );
};

export default ChapterEnrichment;
