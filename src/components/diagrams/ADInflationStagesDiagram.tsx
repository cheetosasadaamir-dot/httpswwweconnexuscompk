import { useState } from 'react';
import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * AD shifts along the three stages of the Keynesian AS curve.
 *
 * Geometry is calculated, not hand-placed: AS is a single monotonic function
 * of output, and every equilibrium is the true intersection of that function
 * with a downward-sloping AD curve, so price/output effects per stage are exact.
 */

const p = plotBox(560, 400, { t: 36, r: 58, b: 62, l: 68 });

/** Full-employment output (Q value, 0-100 scale). */
const YF = 78;
/** Stage boundaries on the output axis. */
const S1 = 34;
const S2 = 62;

/** Keynesian AS: flat with spare capacity, rising through bottlenecks, vertical at Yf. */
const AS = (q: number) => {
  if (q <= S1) return 22 + 0.06 * q;
  if (q <= S2) return 24.04 + 0.55 * (q - S1);
  const t = Math.min((q - S2) / (YF - S2), 1);
  return 39.44 + 46 * t * t;
};

/** Downward-sloping AD curves: P = a - 0.75Q. */
const AD_A = [58, 92, 128] as const;
const adP = (a: number) => (q: number) => a - 0.75 * q;

/** Numeric intersection of AD with the AS function. */
const equilibrium = (a: number) => {
  let lo = 2;
  let hi = YF;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (AS(mid) > adP(a)(mid)) hi = mid;
    else lo = mid;
  }
  const q = (lo + hi) / 2;
  return { q, p: AS(q) };
};

const EQ = AD_A.map(equilibrium);

const stages = [
  {
    title: 'Stage 1 — Elastic (spare capacity)',
    body: 'Deep spare capacity and high unemployment. A rise in AD raises real output almost one-for-one while the price level barely moves, because firms can hire without bidding up wages.',
    price: 'Minimal',
    output: 'Large increase',
  },
  {
    title: 'Stage 2 — Intermediate (bottlenecks)',
    body: 'Some sectors hit capacity before others. An AD increase raises both real output and the price level, as shortages in skilled labour and key inputs push costs up.',
    price: 'Moderate',
    output: 'Moderate increase',
  },
  {
    title: 'Stage 3 — Inelastic (full capacity)',
    body: 'At Yf every resource is employed. Further AD increases cannot raise real output at all, so the whole shift becomes a higher price level — pure demand-pull inflation.',
    price: 'Large (inflation)',
    output: 'Zero',
  },
];

const STAGE_TINT = [C.social, C.marker, C.intervention];

const ADInflationStagesDiagram = () => {
  const [active, setActive] = useState(0);

  return (
    <DiagramFrame
      title="AD Shifts Along the Three Stages of AS"
      eyebrow="Keynesian AS · demand-pull inflation"
      legend={[
        { label: 'AS (Keynesian)', color: C.supply },
        { label: 'AD₁ · AD₂ · AD₃', color: C.demand },
        { label: 'Full employment (Yf)', color: C.intervention, dashed: true },
        { label: 'Equilibria', color: C.marker, kind: 'dot' },
      ]}
      note={
        <div className="space-y-1">
          <p className="text-silver-bright">{stages[active].title}</p>
          <p>{stages[active].body}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em]">
            Price effect: {stages[active].price} · Output effect: {stages[active].output}
          </p>
        </div>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {stages.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
                  active === i
                    ? 'border-primary/60 bg-primary/20 text-primary'
                    : 'border-white/15 bg-white/5 text-muted-foreground hover:text-foreground'
                }`}
              >
                Stage {i + 1}
              </button>
            ))}
          </div>

          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="w-full min-w-[320px]">
            {/* stage bands */}
            {[
              [0, S1],
              [S1, S2],
              [S2, 100],
            ].map(([from, to], i) => (
              <rect
                key={i}
                x={p.x(from)}
                y={p.m.t}
                width={p.x(to) - p.x(from)}
                height={p.ch}
                fill={STAGE_TINT[i]}
                opacity={active === i ? 0.14 : 0.04}
              />
            ))}

            <Axes p={p} id="ad-stages" labelX="Real output (Y)" labelY="Price level (P)" />

            {/* full employment */}
            <motion.line
              x1={p.x(YF)} y1={p.m.t} x2={p.x(YF)} y2={p.m.t + p.ch}
              stroke={C.intervention} strokeWidth={1.6} strokeDasharray="6 4"
              {...revealFade(0)} animate={play ? { opacity: 1 } : { opacity: 0 }}
            />
            <text x={p.x(YF)} y={p.m.t - 10} textAnchor="middle" fill={C.intervention} fontSize={11}>
              Yf
            </text>

            {/* AS */}
            <motion.path
              d={curve(p, AS, 2, 88)}
              fill="none" stroke={C.supply} strokeWidth={2.6}
              {...revealPath(1)} animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(84)} y={p.y(AS(83)) - 8} fill={C.supply} fontSize={12} fontWeight={600}>
              AS
            </text>

            {/* AD curves + equilibria */}
            {AD_A.map((a, i) => (
              <g key={a}>
                <motion.path
                  d={curve(p, adP(a), Math.max(2, (a - 96) / 0.75), Math.min(96, (a - 6) / 0.75))}
                  fill="none"
                  stroke={i === 0 ? C.demand : i === 1 ? C.demandAlt : C.consumerSurplus}
                  strokeWidth={active === i ? 2.8 : 1.9}
                  opacity={active === i ? 1 : 0.72}
                  {...revealPath(2 + i)}
                  animate={play ? { pathLength: 1, opacity: active === i ? 1 : 0.72 } : { pathLength: 0, opacity: 0 }}
                />
                <text
                  x={p.x(Math.min(96, (a - 6) / 0.75)) + 4}
                  y={p.y(6) - 2}
                  fill={i === 0 ? C.demand : i === 1 ? C.demandAlt : C.consumerSurplus}
                  fontSize={11}
                >
                  AD{['₁', '₂', '₃'][i]}
                </text>
                <motion.circle
                  cx={p.x(EQ[i].q)} cy={p.y(EQ[i].p)} r={5}
                  fill={C.marker}
                  {...revealPoint(3 + i)}
                  animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                />
              </g>
            ))}

            {/* guides for the active equilibrium */}
            {play && (
              <Guides
                p={p}
                qx={EQ[active].q}
                py={EQ[active].p}
                xLabel={`Y${['₁', '₂', '₃'][active]}`}
                yLabel={`P${['₁', '₂', '₃'][active]}`}
              />
            )}

            {/* stage captions */}
            <text x={p.x(S1 / 2)} y={p.m.t + 14} textAnchor="middle" fill={C.social} fontSize={10}>
              Elastic
            </text>
            <text x={p.x((S1 + S2) / 2)} y={p.m.t + 14} textAnchor="middle" fill={C.marker} fontSize={10}>
              Intermediate
            </text>
            <text x={p.x((S2 + 100) / 2)} y={p.m.t + 14} textAnchor="middle" fill={C.intervention} fontSize={10}>
              Inelastic
            </text>
          </svg>
        </div>
      )}
    </DiagramFrame>
  );
};

export default ADInflationStagesDiagram;
