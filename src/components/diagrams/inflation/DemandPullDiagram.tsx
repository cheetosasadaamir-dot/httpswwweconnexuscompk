import { motion } from 'framer-motion';
import DiagramFrame from '../DiagramFrame';
import { Axes, Guides, curve } from '../DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from '../diagramStyle';

/**
 * Demand-pull inflation.
 * SRAS : P = 10 + 0.8Y
 * AD1  : P = 90 − 0.9Y  → E1: Y = 47.1, P = 47.6
 * AD2  : P = 110 − 0.9Y → E2: Y = 58.8, P = 57.1
 * Every point below is solved from these equations, so the marked equilibria
 * lie exactly on the curve intersections.
 */
const DemandPullDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS = (Y: number) => 10 + 0.8 * Y;
  const AD1 = (Y: number) => 90 - 0.9 * Y;
  const AD2 = (Y: number) => 110 - 0.9 * Y;

  const Y1 = 80 / 1.7;          // 47.06
  const P1 = SRAS(Y1);          // 47.65
  const Y2 = 100 / 1.7;         // 58.82
  const P2 = SRAS(Y2);          // 57.06

  return (
    <DiagramFrame
      title="Demand-Pull Inflation"
      eyebrow="AD shifts right along an upward-sloping SRAS"
      legend={[
        { label: 'SRAS — short-run aggregate supply', color: C.supply },
        { label: 'AD₁ — initial aggregate demand', color: C.demand },
        { label: 'AD₂ — higher aggregate demand', color: C.demandAlt, dashed: true },
        { label: 'Equilibrium', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          A rise in any component of AD (C, I, G or X−M) shifts AD right. At the old price level
          planned spending now exceeds output, so firms bid for scarce factors and unit costs rise.
          The economy moves <em>along</em> SRAS to E₂: the price level rises from 47.6 to 57.1 and
          real output from 47.1 to 58.8. Note the price rise is a <strong>movement along SRAS</strong>,
          not a shift of it — a very common exam error.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Demand-pull inflation: AD shifts right along SRAS raising both price level and output">
          <Axes p={p} id="dpinf" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, SRAS, 5, 95)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(95) - 6} y={y(SRAS(95)) - 8} fill={C.supply} fontSize={12} fontWeight={700} {...revealFade(1)}>SRAS</motion.text>

              <motion.path d={curve(p, AD1, 5, 95)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(1)} />
              <motion.text x={x(88)} y={y(AD1(88)) - 8} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(2)}>AD₁</motion.text>

              <motion.path d={curve(p, AD2, 16, 100)} fill="none" stroke={C.demandAlt} strokeWidth={2.8}
                strokeDasharray="7 4" {...revealPath(2)} />
              <motion.text x={x(97)} y={y(AD2(97)) - 8} fill={C.demandAlt} fontSize={12} fontWeight={700} {...revealFade(3)}>AD₂</motion.text>

              <motion.line x1={x(52)} y1={y(52)} x2={x(70)} y2={y(52)} stroke={C.demandAlt} strokeWidth={2}
                markerEnd="url(#dpinf-arrow)" {...revealFade(3)} />

              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Y1} py={P1} color={C.marker} xLabel="Y₁ = 47.1" yLabel="P₁ = 47.6" />
              </motion.g>
              <motion.circle cx={x(Y1)} cy={y(P1)} r={5} fill={C.marker} {...revealPoint(3)} />
              <motion.text x={x(Y1) - 18} y={y(P1) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(4)}>E₁</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Y2} py={P2} color={C.intervention} xLabel="Y₂ = 58.8" yLabel="P₂ = 57.1" />
              </motion.g>
              <motion.circle cx={x(Y2)} cy={y(P2)} r={5} fill={C.intervention} {...revealPoint(4)} />
              <motion.text x={x(Y2) + 8} y={y(P2) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5)}>E₂</motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default DemandPullDiagram;
