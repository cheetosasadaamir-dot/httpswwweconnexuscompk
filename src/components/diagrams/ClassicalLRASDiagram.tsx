import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface ClassicalLRASDiagramProps {
  title?: string;
}

/**
 * Classical / monetarist adjustment to an AD shock.
 *
 * LRAS  : vertical at Yf = 60
 * SRAS₁ : P = 8 + 0.8Y        → at Yf, P = 56
 * AD₁   : P = 104 − 0.8Y      → E₁ = (60, 56) exactly on LRAS
 * AD₂   : P = 134 − 0.8Y      → short run 8 + 0.8Y = 134 − 0.8Y ⇒ Y = 78.75, P = 71  (E₂)
 * SRAS₂ : P = 38 + 0.8Y       → wages catch up, long run back to Yf with P = 86 (E₃)
 */
const ClassicalLRASDiagram = ({
  title = 'Classical/Monetarist Long-Run Aggregate Supply',
}: ClassicalLRASDiagramProps) => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS1 = (Y: number) => 8 + 0.8 * Y;
  const SRAS2 = (Y: number) => 38 + 0.8 * Y;
  const AD1 = (Y: number) => 104 - 0.8 * Y;
  const AD2 = (Y: number) => 134 - 0.8 * Y;
  const Yf = 60;
  const Y2 = 126 / 1.6; // 78.75
  const P1 = 56, P2 = SRAS1(Y2), P3 = AD2(Yf); // 56, 71, 86

  return (
    <DiagramFrame
      title={title}
      eyebrow="Figure — money is neutral in the long run: only the price level changes"
      legend={[
        { label: 'LRAS — vertical at Yf', color: C.social },
        { label: 'SRAS₁ → SRAS₂ (wages catch up)', color: C.supply },
        { label: 'AD₁ → AD₂ (demand stimulus)', color: C.demand },
        { label: 'Equilibria E₁, E₂, E₃', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          The classical school holds that LRAS is vertical at the full-employment (natural) level of output
          Yf, determined solely by factor endowments and productivity. Trace the three stages.
          <strong> E₁ (Y = 60, P = 56):</strong> long-run equilibrium on LRAS.
          <strong> E₂ (Y = 78.75, P = 71):</strong> an AD stimulus temporarily pushes output above Yf because
          workers are fooled by <em>money illusion</em> — nominal wages are fixed, so real wages fall and firms
          hire more. <strong>E₃ (Y = 60, P = 86):</strong> once workers realise prices have risen they bargain
          for higher nominal wages, unit costs rise, SRAS shifts left to SRAS₂ and output returns to Yf.
          The entire long-run effect of the demand stimulus is a <strong>higher price level with unchanged
          real output</strong> — the neutrality of money, and the basis for the monetarist claim that
          inflation is always and everywhere a monetary phenomenon. Only a rightward shift of
          <em> LRAS itself</em> (supply-side policy) can raise output permanently.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Vertical LRAS with AD shifting right, short run output rise then SRAS shifting left back to full employment">
          <Axes p={p} id="cllras" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.line x1={x(Yf)} y1={y(0)} x2={x(Yf)} y2={y(98)} stroke={C.social} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(Yf) - 26} y={y(96)} fill={C.social} fontSize={12} fontWeight={700} {...revealFade(1)}>LRAS</motion.text>

              <motion.path d={curve(p, SRAS1, 5, 90)} fill="none" stroke={C.supply} strokeWidth={2.6} {...revealPath(1)} />
              <motion.text x={x(90) + 2} y={y(SRAS1(90)) - 6} fill={C.supply} fontSize={11} fontWeight={700} {...revealFade(2)}>SRAS₁</motion.text>

              <motion.path d={curve(p, AD1, 10, 100)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(2)} />
              <motion.text x={x(84)} y={y(AD1(84)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(3)}>AD₁</motion.text>

              <motion.path d={curve(p, AD2, 45, 100)} fill="none" stroke={C.demand} strokeWidth={2.4}
                strokeDasharray="7 4" {...revealPath(3)} />
              <motion.text x={x(98)} y={y(AD2(98)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(4)}>AD₂</motion.text>

              <motion.path d={curve(p, SRAS2, 5, 72)} fill="none" stroke={C.supply} strokeWidth={2.4}
                strokeDasharray="7 4" {...revealPath(4)} />
              <motion.text x={x(72) + 2} y={y(SRAS2(72)) - 6} fill={C.supply} fontSize={11} fontWeight={700} {...revealFade(5)}>SRAS₂</motion.text>

              {/* equilibria */}
              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Yf} py={P1} color={C.marker} yLabel="P₁ = 56" />
                <text x={x(Yf)} y={y(0) + 15} fill={C.social} fontSize={10} textAnchor="middle">Yf = 60</text>
              </motion.g>
              <motion.circle cx={x(Yf)} cy={y(P1)} r={5} fill={C.marker} {...revealPoint(3)} />
              <motion.text x={x(Yf) - 20} y={y(P1) + 4} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(4)}>E₁</motion.text>

              <motion.g {...revealFade(5)}>
                <Guides p={p} qx={Y2} py={P2} color={C.marker} yLabel="P₂ = 71" />
                <text x={x(Y2)} y={y(0) + 15} fill={C.marker} fontSize={10} textAnchor="middle">78.75</text>
              </motion.g>
              <motion.circle cx={x(Y2)} cy={y(P2)} r={5} fill={C.marker} {...revealPoint(5)} />
              <motion.text x={x(Y2) + 8} y={y(P2) + 4} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(6)}>E₂</motion.text>

              <motion.g {...revealFade(6)}>
                <Guides p={p} qx={Yf} py={P3} color={C.intervention} yLabel="P₃ = 86" />
              </motion.g>
              <motion.circle cx={x(Yf)} cy={y(P3)} r={5} fill={C.intervention} {...revealPoint(6)} />
              <motion.text x={x(Yf) - 20} y={y(P3) + 4} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(7)}>E₃</motion.text>

              <motion.text x={x(14)} y={y(92)} fill={C.muted} fontSize={10} {...revealFade(7)}>
                long-run effect: ΔP only, ΔY = 0
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default ClassicalLRASDiagram;
