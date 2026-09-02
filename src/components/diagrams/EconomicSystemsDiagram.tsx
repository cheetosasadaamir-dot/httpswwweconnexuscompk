import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { DIAGRAM_COLORS as C, stage } from './diagramStyle';

const SYSTEMS = [
  {
    id: 'planned',
    name: 'Planned / Command',
    position: 8,
    color: C.intervention,
    features: ['State owns the factors of production', 'Central planners set output targets', 'Prices administered, not market-set', 'Objective: social priorities & equity'],
    strength: 'Can direct resources at public goods and reduce inequality quickly.',
    weakness: 'No price signals or profit incentive → shortages, surpluses and X-inefficiency.',
    example: 'Soviet Union, North Korea, Cuba (pre-reform)',
  },
  {
    id: 'mixed',
    name: 'Mixed',
    position: 55,
    color: C.social,
    features: ['Private and public sectors coexist', 'Markets allocate most goods', 'State corrects market failure', 'Taxation, regulation and welfare transfers'],
    strength: 'Keeps market efficiency while funding merit and public goods.',
    weakness: 'Government failure: regulatory capture, distorted incentives, high compliance cost.',
    example: 'UK, Pakistan, Germany, India — nearly every real economy',
  },
  {
    id: 'market',
    name: 'Free Market',
    position: 92,
    color: C.demand,
    features: ['Private ownership of resources', 'Price mechanism rations & signals', 'Consumer sovereignty', 'Profit motive and competition'],
    strength: 'Strong incentives, dynamic efficiency and rapid response to consumer demand.',
    weakness: 'Under-provides public goods, ignores externalities, wide income inequality.',
    example: 'Hong Kong and Singapore come closest; no economy is 100% free',
  },
];

/**
 * The economic systems spectrum: degree of state control on one axis, with a
 * clean comparison card per system. Replaces the old overlapping SVG boxes.
 */
const EconomicSystemsDiagram = () => (
  <DiagramFrame
    title="The Spectrum of Economic Systems"
    eyebrow="Who answers what, how and for whom?"
    legend={SYSTEMS.map((s) => ({ label: s.name, color: s.color, kind: 'dot' as const }))}
    note={
      <>
        Economic systems are a continuous spectrum, not three separate boxes. Every real economy is mixed — the
        question is only <em>where</em> on the line it sits, measured by the state&apos;s share of output,
        the extent of regulation and the size of the public sector.
      </>
    }
  >
    {({ play, runKey }) => (
      <div key={runKey} className="space-y-6">
        {/* Spectrum bar */}
        <div className="px-2 pt-6">
          <div className="relative h-2 w-full rounded-full" style={{ background: `linear-gradient(90deg, ${C.intervention}, ${C.social}, ${C.demand})` }}>
            {SYSTEMS.map((s, i) => (
              <motion.div
                key={s.id}
                className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-background"
                style={{ left: `${s.position}%`, backgroundColor: s.color }}
                initial={{ scale: 0, opacity: 0 }}
                animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: stage(i, 0.25), duration: 0.35, ease: 'backOut' }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span>100% state control</span>
            <span>increasing role of the price mechanism →</span>
            <span>100% free market</span>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid gap-3 md:grid-cols-3">
          {SYSTEMS.map((s, i) => (
            <motion.div
              key={s.id}
              className="rounded-xl border p-4"
              style={{ borderColor: `${s.color}55`, backgroundColor: `${s.color}0F` }}
              initial={{ opacity: 0, y: 16 }}
              animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: stage(i, 0.18), duration: 0.5 }}
            >
              <h5 className="font-serif text-sm font-bold uppercase tracking-wide" style={{ color: s.color }}>
                {s.name}
              </h5>
              <ul className="mt-2 space-y-1">
                {s.features.map((f) => (
                  <li key={f} className="text-[11px] leading-snug text-muted-foreground">
                    • {f}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] leading-snug text-muted-foreground">
                <span className="font-semibold" style={{ color: C.welfareGain }}>Strength: </span>
                {s.strength}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                <span className="font-semibold" style={{ color: C.welfareLoss }}>Weakness: </span>
                {s.weakness}
              </p>
              <p className="mt-2 font-mono text-[10px] text-muted-foreground">{s.example}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )}
  </DiagramFrame>
);

export default EconomicSystemsDiagram;
