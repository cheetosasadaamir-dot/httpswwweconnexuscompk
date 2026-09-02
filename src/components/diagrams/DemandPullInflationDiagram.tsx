import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Demand-pull inflation.
 *
 * SRAS : P = 10 + 0.35Y + 0.006Y²  (convex — steepens as spare capacity disappears)
 * LRAS : vertical at Yf = 85
 * AD₁  : P = 100 − 0.7Y  → 0.006Y² + 1.05Y − 90 = 0 ⇒ Y = 63.0, P = 55.9
 * AD₂  : P = 130 − 0.7Y  → 0.006Y² + 1.05Y − 120 = 0 ⇒ Y = 78.8, P = 74.8
 * Output rises 63 → 78.8 (+25%) but the price level rises 55.9 → 74.8 (+34%):
 * the closer to capacity, the more of the demand increase spills into prices.
 */
const DemandPullInflationDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS = (Y: number) => 10 + 0.35 * Y + 0.006 * Y * Y;
  const AD1 = (Y: number) => 100 - 0.7 * Y;
  const AD2 = (Y: number) => 130 - 0.7 * Y;
  const Yf = 85;
  const Y1 = 63.0, P1 = 55.9;
  const Y2 = 78.8, P2 = 74.8;

  return (
    <DiagramFrame
      title="Demand-Pull Inflation"
      eyebrow="Figure — 'too much money chasing too few goods'"
      legend={[
        { label: 'AD₁ → AD₂ (rising aggregate demand)', color: C.demand },
        { label: 'SRAS', color: C.supply },
        { label: 'LRAS — capacity Yf = 85', color: C.social },
        { label: 'Inflation', color: C.intervention },
      ]}
      note={
        <>
          Demand-pull inflation occurs when AD rises faster than the economy's ability to supply.
          Here AD₂ lies to the right of AD₁ (higher C, I, G or X − M, or a monetary expansion): equilibrium
          moves from E₁ (Y = 63, P = 55.9) to E₂ (Y = 78.8, P = 74.8). Notice the split — output rises about
          25% but the price level rises about 34%, because SRAS <strong>steepens</strong> as the economy
          approaches capacity: skilled labour becomes scarce, overtime premia are paid, less efficient plant
          is used and bottlenecks bid up input prices. Chain of reasoning to reproduce in an answer:
          ↑ consumer confidence → ↑ MPC → ↑ C → AD shifts right → excess demand at the old price level →
          firms bid competitively for scarce factors → ↑ factor prices → ↑ prices of final goods → ↑ GPL.
          Evaluation: if the economy started deep in a negative output gap the same AD shift would be almost
          entirely a real-output gain; at Yf it would be entirely inflationary.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="AD shifting right along an upward sloping SRAS raising both price level and output">
          <Axes p={p} id="dpinf" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, SRAS, 5, 88)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(88) - 34} y={y(SRAS(88)) - 10} fill={C.supply} fontSize={12} fontWeight={700} {...revealFade(1)}>SRAS</motion.text>

              <motion.line x1={x(Yf)} y1={y(0)} x2={x(Yf)} y2={y(98)} stroke={C.social} strokeWidth={2.4}
                strokeDasharray="6 4" {...revealPath(1)} />
              <motion.text x={x(Yf) + 5} y={y(96)} fill={C.social} fontSize={11} fontWeight={700} {...revealFade(2)}>LRAS</motion.text>

              <motion.path d={curve(p, AD1, 8, 95)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(2)} />
              <motion.text x={x(40)} y={y(AD1(40)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(3)}>AD₁</motion.text>

              <motion.path d={curve(p, AD2, 45, 100)} fill="none" stroke={C.demand} strokeWidth={2.6}
                strokeDasharray="7 4" {...revealPath(3)} />
              <motion.text x={x(97)} y={y(AD2(97)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(4)}>AD₂</motion.text>

              <motion.line x1={x(50)} y1={y(70)} x2={x(66)} y2={y(70)}
                stroke={C.demand} strokeWidth={2} markerEnd="url(#dpinf-arrow)" {...revealFade(4)} />
              <motion.text x={x(58)} y={y(70) - 8} fill={C.demand} fontSize={10} textAnchor="middle" {...revealFade(4)}>AD ↑</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Y1} py={P1} color={C.marker} xLabel="Y₁ = 63" yLabel="P₁ = 55.9" />
              </motion.g>
              <motion.circle cx={x(Y1)} cy={y(P1)} r={5} fill={C.marker} {...revealPoint(4)} />
              <motion.text x={x(Y1) - 18} y={y(P1) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5)}>E₁</motion.text>

              <motion.g {...revealFade(5)}>
                <Guides p={p} qx={Y2} py={P2} color={C.intervention} xLabel="Y₂ = 78.8" yLabel="P₂ = 74.8" />
              </motion.g>
              <motion.circle cx={x(Y2)} cy={y(P2)} r={5} fill={C.intervention} {...revealPoint(5)} />
              <motion.text x={x(Y2) + 8} y={y(P2) - 6} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(6)}>E₂</motion.text>

              <motion.g {...revealFade(6)}>
                <line x1={x(12)} y1={y(P1)} x2={x(12)} y2={y(P2)} stroke={C.intervention} strokeWidth={2.2} />
                <polygon points={`${x(12) - 4},${y(P2) + 8} ${x(12) + 4},${y(P2) + 8} ${x(12)},${y(P2)}`} fill={C.intervention} />
                <text x={x(14)} y={y((P1 + P2) / 2) + 4} fill={C.intervention} fontSize={10}>inflation</text>
              </motion.g>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default DemandPullInflationDiagram;
