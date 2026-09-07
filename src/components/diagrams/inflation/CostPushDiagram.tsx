import { motion } from 'framer-motion';
import DiagramFrame from '../DiagramFrame';
import { Axes, Guides, curve } from '../DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from '../diagramStyle';

/**
 * Cost-push inflation (stagflation).
 * AD    : P = 90 − 0.9Y
 * SRAS1 : P = 10 + 0.8Y → E1: Y = 47.1, P = 47.6
 * SRAS2 : P = 28 + 0.8Y → E2: Y = 36.5, P = 57.2
 */
const CostPushDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const AD = (Y: number) => 90 - 0.9 * Y;
  const SRAS1 = (Y: number) => 10 + 0.8 * Y;
  const SRAS2 = (Y: number) => 28 + 0.8 * Y;

  const Y1 = 80 / 1.7;      // 47.06
  const P1 = SRAS1(Y1);     // 47.65
  const Y2 = 62 / 1.7;      // 36.47
  const P2 = SRAS2(Y2);     // 57.18

  return (
    <DiagramFrame
      title="Cost-Push Inflation and Stagflation"
      eyebrow="SRAS shifts left: prices up, output down"
      legend={[
        { label: 'AD — aggregate demand (unchanged)', color: C.demand },
        { label: 'SRAS₁ — initial short-run supply', color: C.supply },
        { label: 'SRAS₂ — after the cost shock', color: C.supplyAlt, dashed: true },
        { label: 'Equilibrium', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          A rise in unit costs — oil, wages, import prices after a depreciation, or higher indirect
          taxes — means firms supply less at every price level, so SRAS shifts <em>left</em> (upward).
          Equilibrium moves from E₁ (Y = 47.1, P = 47.6) to E₂ (Y = 36.5, P = 57.2): the price level
          rises <strong>and</strong> real output falls — stagflation, with rising unemployment.
          Note AD does not move; demand-side policy can cure one problem only by worsening the other,
          which is why supply-side measures are the sustainable response.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Cost-push inflation: SRAS shifts left raising the price level and reducing output">
          <Axes p={p} id="cpinf" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, SRAS1, 5, 95)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(93)} y={y(SRAS1(93)) - 8} fill={C.supply} fontSize={12} fontWeight={700} {...revealFade(1)}>SRAS₁</motion.text>

              <motion.path d={curve(p, AD, 5, 95)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(1)} />
              <motion.text x={x(84)} y={y(AD(84)) - 8} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(2)}>AD</motion.text>

              <motion.path d={curve(p, SRAS2, 5, 82)} fill="none" stroke={C.supplyAlt} strokeWidth={2.8}
                strokeDasharray="7 4" {...revealPath(2)} />
              <motion.text x={x(80)} y={y(SRAS2(80)) - 8} fill={C.supplyAlt} fontSize={12} fontWeight={700} {...revealFade(3)}>SRAS₂</motion.text>

              <motion.line x1={x(58)} y1={y(50)} x2={x(46)} y2={y(62)} stroke={C.intervention} strokeWidth={2}
                markerEnd="url(#cpinf-arrow)" {...revealFade(3)} />

              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Y1} py={P1} color={C.marker} xLabel="Y₁ = 47.1" yLabel="P₁ = 47.6" />
              </motion.g>
              <motion.circle cx={x(Y1)} cy={y(P1)} r={5} fill={C.marker} {...revealPoint(3)} />
              <motion.text x={x(Y1) + 8} y={y(P1) + 14} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(4)}>E₁</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Y2} py={P2} color={C.intervention} xLabel="Y₂ = 36.5" yLabel="P₂ = 57.2" />
              </motion.g>
              <motion.circle cx={x(Y2)} cy={y(P2)} r={5} fill={C.intervention} {...revealPoint(4)} />
              <motion.text x={x(Y2) - 20} y={y(P2) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5)}>E₂</motion.text>

              <motion.text x={x(30)} y={y(88)} fill={C.welfareLoss} fontSize={10} {...revealFade(5)}>
                higher P + lower Y = stagflation
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default CostPushDiagram;
