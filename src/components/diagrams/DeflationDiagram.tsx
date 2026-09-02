import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * "Bad" (demand-side) vs "good" (supply-side) deflation.
 *
 * Common SRAS₁ : P = 10 + 0.35Y + 0.006Y² ; AD₁ : P = 130 − 0.7Y → E₁ (78.8, 74.8)
 *
 * Panel A — bad deflation: AD₂ : P = 100 − 0.7Y
 *   0.006Y² + 1.05Y − 90 = 0 ⇒ Y = 63.0, P = 55.9   (P ↓ and Y ↓)
 * Panel B — good deflation: SRAS₂ = SRAS₁ − 18
 *   0.006Y² + 1.05Y − 138 = 0 ⇒ Y = 87.6, P = 68.7  (P ↓ but Y ↑)
 */
const SRAS1 = (Y: number) => 10 + 0.35 * Y + 0.006 * Y * Y;
const SRAS2 = (Y: number) => SRAS1(Y) - 18;
const AD1 = (Y: number) => 130 - 0.7 * Y;
const AD2 = (Y: number) => 100 - 0.7 * Y;

const Panel = ({
  id, kind,
}: { id: string; kind: 'bad' | 'good' }) => {
  const p = plotBox(500, 380, { t: 30, r: 40, b: 58, l: 58 });
  const { x, y } = p;
  const bad = kind === 'bad';
  const Y2 = bad ? 63.0 : 87.6;
  const P2 = bad ? 55.9 : 68.7;
  const accent = bad ? C.welfareLoss : C.welfareGain;

  return (
    <svg viewBox={`0 0 ${p.W} ${p.H}`} className="h-auto w-full min-w-[300px]" role="img"
      aria-label={bad ? 'Demand-side deflation: AD shifts left, price level and output both fall'
        : 'Supply-side deflation: SRAS shifts right, price level falls while output rises'}>
      <Axes p={p} id={id} labelX="Real output (Y)" labelY="Price level (P)" />

      <text x={p.m.l} y={p.m.t - 12} fill={accent} fontSize={11} fontWeight={700}>
        {bad ? 'A · BAD DEFLATION — AD falls' : 'B · GOOD DEFLATION — AS rises'}
      </text>

      <motion.path d={curve(p, SRAS1, 5, 92)} fill="none" stroke={C.supply} strokeWidth={2.6} {...revealPath(0)} />
      <motion.text x={x(92) - 30} y={y(SRAS1(92)) + 14} fill={C.supply} fontSize={10.5} fontWeight={700} {...revealFade(1)}>
        SRAS{bad ? '' : '₁'}
      </motion.text>

      <motion.path d={curve(p, AD1, 20, 100)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(1)} />
      <motion.text x={x(96)} y={y(AD1(96)) - 8} fill={C.demand} fontSize={10.5} fontWeight={700} {...revealFade(2)}>
        AD{bad ? '₁' : ''}
      </motion.text>

      {bad ? (
        <>
          <motion.path d={curve(p, AD2, 5, 95)} fill="none" stroke={C.demand} strokeWidth={2.4}
            strokeDasharray="7 4" {...revealPath(2)} />
          <motion.text x={x(70)} y={y(AD2(70)) - 8} fill={C.demand} fontSize={10.5} fontWeight={700} {...revealFade(3)}>AD₂</motion.text>
          <motion.line x1={x(72)} y1={y(84)} x2={x(56)} y2={y(84)} stroke={accent} strokeWidth={2}
            markerEnd={`url(#${id}-arrow)`} {...revealFade(3)} />
        </>
      ) : (
        <>
          <motion.path d={curve(p, SRAS2, 5, 100)} fill="none" stroke={C.supply} strokeWidth={2.4}
            strokeDasharray="7 4" {...revealPath(2)} />
          <motion.text x={x(100) - 32} y={y(SRAS2(100)) + 14} fill={C.supply} fontSize={10.5} fontWeight={700} {...revealFade(3)}>SRAS₂</motion.text>
          <motion.line x1={x(56)} y1={y(72)} x2={x(72)} y2={y(72)} stroke={accent} strokeWidth={2}
            markerEnd={`url(#${id}-arrow)`} {...revealFade(3)} />
        </>
      )}

      <motion.g {...revealFade(3)}>
        <Guides p={p} qx={78.8} py={74.8} color={C.marker} xLabel="78.8" yLabel="74.8" />
      </motion.g>
      <motion.circle cx={x(78.8)} cy={y(74.8)} r={4.5} fill={C.marker} {...revealPoint(3)} />
      <motion.text x={x(78.8) + 7} y={y(74.8) - 7} fill={C.axis} fontSize={10.5} fontWeight={700} {...revealFade(4)}>E₁</motion.text>

      <motion.g {...revealFade(4)}>
        <Guides p={p} qx={Y2} py={P2} color={accent} xLabel={Y2.toFixed(1)} yLabel={P2.toFixed(1)} />
      </motion.g>
      <motion.circle cx={x(Y2)} cy={y(P2)} r={4.5} fill={accent} {...revealPoint(4)} />
      <motion.text x={x(Y2) + (bad ? -20 : 7)} y={y(P2) - 7} fill={C.axis} fontSize={10.5} fontWeight={700} {...revealFade(5)}>E₂</motion.text>

      <motion.text x={p.m.l + 6} y={p.m.t + p.ch - 10} fill={accent} fontSize={9.5} {...revealFade(5)}>
        {bad ? 'P ↓ and Y ↓ — recessionary' : 'P ↓ but Y ↑ — benign'}
      </motion.text>
    </svg>
  );
};

const DeflationDiagram = () => (
  <DiagramFrame
    title="Deflation: Demand-Side versus Supply-Side"
    eyebrow="Figure — the same falling price level, two opposite welfare verdicts"
    legend={[
      { label: 'AD', color: C.demand },
      { label: 'SRAS', color: C.supply },
      { label: 'Bad deflation outcome', color: C.welfareLoss, kind: 'dot' },
      { label: 'Good deflation outcome', color: C.welfareGain, kind: 'dot' },
    ]}
    note={
      <>
        Deflation is a <em>sustained fall</em> in the general price level (a negative inflation rate) — not
        to be confused with <strong>disinflation</strong>, a fall in the <em>rate</em> of inflation while
        prices are still rising. <strong>Panel A — bad (malign) deflation:</strong> AD collapses through lost
        confidence, credit contraction or financial crisis, so P falls from 74.8 to 55.9 <em>and</em> output
        falls from 78.8 to 63. This risks a <strong>deflationary spiral</strong>: consumers defer purchases
        expecting lower prices, real debt burdens rise (Fisher's debt-deflation), real interest rates rise
        even at a zero policy rate, and AD falls further — Japan after 1990, the US in 1929-33.
        <strong> Panel B — good (benign) deflation:</strong> productivity growth, cheaper technology or lower
        input costs shift SRAS right, so P falls to 68.7 while output rises to 87.6 and living standards
        improve — the late-19th-century experience. The examiner point: <strong>the cause determines the
        verdict</strong>, so always identify which curve moved before evaluating.
      </>
    }
  >
    {({ play, runKey }) => (
      <div key={runKey} className="grid gap-4 lg:grid-cols-2">
        {play && <Panel id="defbad" kind="bad" />}
        {play && <Panel id="defgood" kind="good" />}
      </div>
    )}
  </DiagramFrame>
);

export default DeflationDiagram;
