import { motion } from 'framer-motion';
import DiagramFrame from '../DiagramFrame';
import { Axes, Guides, curve } from '../DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from '../diagramStyle';

/**
 * Monetary (classical) inflation.
 * LRAS : vertical at Yf = 60
 * AD1  : P = 90 − 0.9Y  → P at Yf = 36
 * AD2  : P = 120 − 0.9Y → P at Yf = 66
 * With output fixed at capacity, the whole AD increase becomes price level.
 */
const MonetaryInflationDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const AD1 = (Y: number) => 90 - 0.9 * Y;
  const AD2 = (Y: number) => 120 - 0.9 * Y;
  const Yf = 60;
  const P1 = AD1(Yf); // 36
  const P2 = AD2(Yf); // 66

  return (
    <DiagramFrame
      title="Monetary Inflation in the Long Run"
      eyebrow="AD rises against a vertical LRAS — output fixed, prices rise one-for-one"
      legend={[
        { label: 'LRAS — productive potential (Yf)', color: C.social },
        { label: 'AD₁ — before monetary expansion', color: C.demand },
        { label: 'AD₂ — after monetary expansion', color: C.demandAlt, dashed: true },
        { label: 'Equilibrium', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          In the long run all wages and prices are flexible, so real output is fixed at Yf by the
          quantity and quality of factors — LRAS is vertical. An increase in the money supply raises
          AD, but output cannot exceed Yf, so the entire adjustment falls on the price level:
          P rises from 36 to 66 with Y unchanged at 60. This is the Quantity Theory,
          <strong> MV = PQ</strong>: with V and Q stable, a rise in M raises P proportionately.
          Evaluate it: V is not stable in a liquidity trap, and if the economy starts with spare
          capacity part of the AD rise raises real output instead.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Monetary inflation: AD shifts right against a vertical LRAS so only the price level rises">
          <Axes p={p} id="mninf" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.line x1={x(Yf)} y1={y(0)} x2={x(Yf)} y2={y(96)} stroke={C.social} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(Yf) + 6} y={y(94)} fill={C.social} fontSize={12} fontWeight={700} {...revealFade(1)}>LRAS</motion.text>

              <motion.path d={curve(p, AD1, 5, 95)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(1)} />
              <motion.text x={x(86)} y={y(AD1(86)) - 8} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(2)}>AD₁</motion.text>

              <motion.path d={curve(p, AD2, 28, 100)} fill="none" stroke={C.demandAlt} strokeWidth={2.8}
                strokeDasharray="7 4" {...revealPath(2)} />
              <motion.text x={x(98)} y={y(AD2(98)) - 8} fill={C.demandAlt} fontSize={12} fontWeight={700} {...revealFade(3)}>AD₂</motion.text>

              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Yf} py={P1} color={C.marker} xLabel="Yf = 60" yLabel="P₁ = 36" />
              </motion.g>
              <motion.circle cx={x(Yf)} cy={y(P1)} r={5} fill={C.marker} {...revealPoint(3)} />

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Yf} py={P2} color={C.intervention} yLabel="P₂ = 66" />
              </motion.g>
              <motion.circle cx={x(Yf)} cy={y(P2)} r={5} fill={C.intervention} {...revealPoint(4)} />

              <motion.line x1={x(Yf) + 14} y1={y(P1) - 4} x2={x(Yf) + 14} y2={y(P2) + 4}
                stroke={C.intervention} strokeWidth={2} markerEnd="url(#mninf-arrow)" {...revealFade(5)} />
              <motion.text x={x(Yf) + 20} y={y((P1 + P2) / 2)} fill={C.intervention} fontSize={10} {...revealFade(5)}>
                pure inflation
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default MonetaryInflationDiagram;
