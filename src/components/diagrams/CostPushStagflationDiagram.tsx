import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Cost-push inflation and stagflation.
 *
 * SRAS₁ : P = 10 + 0.35Y + 0.006Y²
 * SRAS₂ : SRAS₁ + 18  (a rise in unit costs at every level of output)
 * AD    : P = 130 − 0.7Y
 * E₁ : 0.006Y² + 1.05Y − 120 = 0 ⇒ Y = 78.8, P = 74.8
 * E₂ : 0.006Y² + 1.05Y − 102 = 0 ⇒ Y = 69.5, P = 81.3
 * Prices rise and output falls simultaneously — stagflation.
 */
const CostPushStagflationDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS1 = (Y: number) => 10 + 0.35 * Y + 0.006 * Y * Y;
  const SRAS2 = (Y: number) => SRAS1(Y) + 18;
  const AD = (Y: number) => 130 - 0.7 * Y;
  const Y1 = 78.8, P1 = 74.8;
  const Y2 = 69.5, P2 = 81.3;

  return (
    <DiagramFrame
      title="Cost-Push Inflation and Stagflation"
      eyebrow="Figure — a leftward shift of SRAS raises P and cuts Y at the same time"
      legend={[
        { label: 'SRAS₁ → SRAS₂ (higher unit costs)', color: C.supply },
        { label: 'AD unchanged', color: C.demand },
        { label: 'Stagflation zone', color: C.welfareLoss, kind: 'area' },
        { label: 'Equilibria', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          A supply shock — an oil or commodity price spike, a wage settlement above productivity growth, a
          currency depreciation raising import costs, or higher indirect taxes — raises unit costs at every
          level of output, shifting SRAS left from SRAS₁ to SRAS₂. Equilibrium moves from E₁ (Y = 78.8,
          P = 74.8) to E₂ (Y = 69.5, P = 81.3): the price level rises ~9% while real output falls ~12%.
          This combination of rising inflation with falling output and rising unemployment is
          <strong> stagflation</strong>, and it is what makes cost-push inflation harder to treat than
          demand-pull. Contractionary demand policy would cure the inflation but deepen the recession;
          accommodating the shock protects output but risks a <strong>wage-price spiral</strong> as workers
          bargain to restore real wages. The orthodox answer is to hold inflation expectations anchored and
          treat the shock as a one-off change in the <em>price level</em>, not a permanent inflation rate.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="SRAS shifting left along a fixed AD curve, raising the price level and lowering output">
          <Axes p={p} id="cpstag" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.rect x={x(Y2)} y={y(P2)} width={x(Y1) - x(Y2)} height={y(P1) - y(P2)}
                fill={C.welfareLoss} opacity={0.14} {...revealFade(5)} />

              <motion.path d={curve(p, SRAS1, 5, 88)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(88) - 34} y={y(SRAS1(88)) + 14} fill={C.supply} fontSize={11} fontWeight={700} {...revealFade(1)}>SRAS₁</motion.text>

              <motion.path d={curve(p, SRAS2, 5, 80)} fill="none" stroke={C.supply} strokeWidth={2.6}
                strokeDasharray="7 4" {...revealPath(2)} />
              <motion.text x={x(80) - 34} y={y(SRAS2(80)) - 10} fill={C.supply} fontSize={11} fontWeight={700} {...revealFade(3)}>SRAS₂</motion.text>

              <motion.path d={curve(p, AD, 20, 100)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(1)} />
              <motion.text x={x(97)} y={y(AD(97)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(2)}>AD</motion.text>

              <motion.line x1={x(56)} y1={y(52)} x2={x(44)} y2={y(60)}
                stroke={C.intervention} strokeWidth={2} markerEnd="url(#cpstag-arrow)" {...revealFade(4)} />
              <motion.text x={x(38)} y={y(66)} fill={C.intervention} fontSize={10} {...revealFade(4)}>↑ unit costs</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Y1} py={P1} color={C.marker} xLabel="Y₁ = 78.8" yLabel="P₁ = 74.8" />
              </motion.g>
              <motion.circle cx={x(Y1)} cy={y(P1)} r={5} fill={C.marker} {...revealPoint(4)} />
              <motion.text x={x(Y1) + 8} y={y(P1) + 12} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5)}>E₁</motion.text>

              <motion.g {...revealFade(5)}>
                <Guides p={p} qx={Y2} py={P2} color={C.intervention} xLabel="Y₂ = 69.5" yLabel="P₂ = 81.3" />
              </motion.g>
              <motion.circle cx={x(Y2)} cy={y(P2)} r={5} fill={C.intervention} {...revealPoint(5)} />
              <motion.text x={x(Y2) - 20} y={y(P2) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(6)}>E₂</motion.text>

              <motion.text x={x((Y1 + Y2) / 2)} y={y((P1 + P2) / 2) + 4} fill={C.welfareLoss} fontSize={9.5}
                textAnchor="middle" {...revealFade(6)}>
                stagflation
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default CostPushStagflationDiagram;
