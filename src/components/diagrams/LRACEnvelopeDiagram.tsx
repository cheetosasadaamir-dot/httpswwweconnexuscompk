import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * LRAC as the true envelope of short-run average cost curves.
 * LRAC(q) = 0.012(q − 60)² + 30  (minimum 30 at q = 60 = MES)
 * Each SRAC is built to be tangent to LRAC at q = t:
 *   SRAC(q) = LRAC(t) + LRAC'(t)(q − t) + 0.05(q − t)²
 * so it touches — never crosses — the envelope. Note that below MES the tangency
 * point lies to the RIGHT of the SRAC minimum, and above MES to the LEFT.
 */
const L = (q: number) => 0.012 * (q - 60) ** 2 + 30;
const dL = (q: number) => 0.024 * (q - 60);
const SRAC = (t: number) => (q: number) => L(t) + dL(t) * (q - t) + 0.05 * (q - t) ** 2;

const p = plotBox(560, 400, { t: 30, r: 58, b: 62, l: 70 });
const PLANTS = [
  { t: 22, label: 'SRAC₁', span: 20 },
  { t: 42, label: 'SRAC₂', span: 22 },
  { t: 60, label: 'SRAC₃', span: 24 },
  { t: 80, label: 'SRAC₄', span: 22 },
];

const LRACEnvelopeDiagram = () => (
  <DiagramFrame
    title="Long-Run Average Cost — The Envelope of Short-Run Cost Curves"
    eyebrow="Figure 2.3"
    legend={[
      { label: 'LRAC (planning curve)', color: C.demand },
      { label: 'SRAC (one plant size)', color: C.muted, dashed: true },
      { label: 'Minimum Efficient Scale', color: C.marker, kind: 'dot' },
      { label: 'Economies of scale', color: C.welfareGain, kind: 'area' },
      { label: 'Diseconomies of scale', color: C.welfareLoss, kind: 'area' },
    ]}
    note={
      <>
        Each SRAC is <strong>tangent</strong> to the LRAC — the long run simply picks the cheapest plant for
        each output. Left of MES the LRAC falls (internal economies: technical, purchasing, managerial, financial,
        risk-bearing, marketing); right of MES it rises (co-ordination, communication and motivation failures).
        MES is the smallest output at which minimum long-run average cost is achieved: a high MES relative to
        market demand (aircraft, steel, semiconductors) forces concentration; a low MES (hairdressing, cafés)
        leaves room for many small firms.
      </>
    }
  >
    {({ play, runKey }) => (
      <svg key={runKey} viewBox="0 0 560 400" className="h-auto w-full min-w-[320px]" role="img">
        <defs>
          <linearGradient id="lrac-eos" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C.welfareGain} stopOpacity="0.20" />
            <stop offset="100%" stopColor={C.welfareGain} stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="lrac-dos" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C.welfareLoss} stopOpacity="0.02" />
            <stop offset="100%" stopColor={C.welfareLoss} stopOpacity="0.20" />
          </linearGradient>
        </defs>

        <motion.rect
          x={p.x(0)} y={p.y(100)} width={p.x(60) - p.x(0)} height={p.y(0) - p.y(100)}
          fill="url(#lrac-eos)"
          {...(play ? revealFade(0) : { initial: { opacity: 0 } })}
        />
        <motion.rect
          x={p.x(60)} y={p.y(100)} width={p.x(100) - p.x(60)} height={p.y(0) - p.y(100)}
          fill="url(#lrac-dos)"
          {...(play ? revealFade(0) : { initial: { opacity: 0 } })}
        />

        <Axes p={p} id="lrac" labelX="Output (Q)" labelY="Average Cost" />

        {/* SRAC family */}
        {PLANTS.map((plant, i) => {
          const f = SRAC(plant.t);
          const from = Math.max(2, plant.t - plant.span);
          const to = Math.min(99, plant.t + plant.span);
          return (
            <g key={plant.label}>
              <motion.path
                d={curve(p, f, from, to)}
                fill="none" stroke={C.muted} strokeWidth={1.5} strokeDasharray="5 4"
                {...(play ? revealPath(i * 0.35 + 0.4, 0.7) : { initial: { pathLength: 0 } })}
              />
              <motion.text
                x={p.x(from) - 2} y={p.y(f(from)) - 6} fill={C.muted} fontSize={10} textAnchor="middle"
                {...(play ? revealFade(i * 0.35 + 0.8) : { initial: { opacity: 0 } })}
              >
                {plant.label}
              </motion.text>
              <motion.circle
                cx={p.x(plant.t)} cy={p.y(L(plant.t))} r={3} fill={C.demandAlt}
                {...(play ? revealPoint(i * 0.35 + 0.9) : { initial: { opacity: 0 } })}
              />
            </g>
          );
        })}

        {/* LRAC envelope */}
        <motion.path
          d={curve(p, L, 2, 99)}
          fill="none" stroke={C.demand} strokeWidth={3}
          {...(play ? revealPath(2.4, 1.2) : { initial: { pathLength: 0 } })}
        />
        <motion.text
          x={p.x(99) + 4} y={p.y(L(99))} fill={C.demand} fontSize={12} fontWeight={600}
          {...(play ? revealFade(3.4) : { initial: { opacity: 0 } })}
        >
          LRAC
        </motion.text>

        {/* MES */}
        <motion.g {...(play ? revealPoint(3.6) : { initial: { opacity: 0 } })}>
          <line
            x1={p.x(60)} y1={p.y(L(60))} x2={p.x(60)} y2={p.y(0)}
            stroke={C.marker} strokeWidth={1.4} strokeDasharray="6 4"
          />
          <line
            x1={p.x(0)} y1={p.y(L(60))} x2={p.x(60)} y2={p.y(L(60))}
            stroke={C.marker} strokeWidth={1.4} strokeDasharray="6 4"
          />
          <circle cx={p.x(60)} cy={p.y(L(60))} r={5} fill={C.marker} />
          <text x={p.x(60)} y={p.y(0) + 16} fill={C.marker} fontSize={11} textAnchor="middle">Q(MES)</text>
          <text x={p.x(0) - 8} y={p.y(L(60)) + 4} fill={C.marker} fontSize={11} textAnchor="end">AC(min)</text>
        </motion.g>

        <motion.g {...(play ? revealFade(3.8) : { initial: { opacity: 0 } })} fontSize={10.5}>
          <text x={p.x(26)} y={p.m.t + 14} fill={C.welfareGain} textAnchor="middle">Economies of scale (LRAC falling)</text>
          <text x={p.x(82)} y={p.m.t + 14} fill={C.welfareLoss} textAnchor="middle">Diseconomies (LRAC rising)</text>
          <text x={p.x(60)} y={p.m.t + 30} fill={C.muted} textAnchor="middle">constant returns</text>
        </motion.g>
      </svg>
    )}
  </DiagramFrame>
);

export default LRACEnvelopeDiagram;
