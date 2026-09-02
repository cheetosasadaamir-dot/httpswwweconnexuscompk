import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Macroeconomic equilibrium and disequilibrium.
 *
 * AD   : P = 100 − Y
 * SRAS : P = 10 + 0.8Y
 * Equilibrium: 100 − Y = 10 + 0.8Y ⇒ Y = 50, P = 50
 * At P = 70: AD gives Y = 30, SRAS gives Y = 75 → excess supply of 45
 * At P = 30: AD gives Y = 70, SRAS gives Y = 25 → excess demand of 45
 */
const ADASEquilibriumDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const AD = (Y: number) => 100 - Y;
  const SRAS = (Y: number) => 10 + 0.8 * Y;
  const Ye = 50, Pe = 50;
  const Phigh = 70, Plow = 30;

  return (
    <DiagramFrame
      title="Macroeconomic Equilibrium: AD = AS"
      eyebrow="Figure — only one price level clears the whole economy"
      legend={[
        { label: 'AD — aggregate demand', color: C.demand },
        { label: 'SRAS — short-run aggregate supply', color: C.supply },
        { label: 'Equilibrium (Y = 50, P = 50)', color: C.marker, kind: 'dot' },
        { label: 'Excess supply / excess demand', color: C.intervention },
      ]}
      note={
        <>
          Equilibrium national income occurs where <strong>AD = AS</strong>: at P = 50 planned expenditure
          (Y = 50) exactly equals planned output (Y = 50), so there is no unplanned change in stocks and no
          pressure on prices. Away from that point the economy self-corrects.
          <strong> At P = 70</strong> firms want to supply 75 but buyers only demand 30 — unsold stocks of 45
          accumulate, firms cut prices and output, and the economy slides down to E.
          <strong> At P = 30</strong> buyers demand 70 while firms supply only 25 — stocks are run down,
          order books lengthen and firms raise prices, pushing the economy up to E. Equilibrium output
          <em> need not be full-employment output</em>: this is the central Keynesian claim, and the reason
          an economy can settle in a slump until AD is deliberately raised.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="AD and SRAS crossing at equilibrium with excess supply above and excess demand below">
          <Axes p={p} id="adaseq" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, AD, 5, 95)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(88)} y={y(AD(88)) - 8} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(1)}>AD</motion.text>

              <motion.path d={curve(p, SRAS, 5, 95)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(1)} />
              <motion.text x={x(88)} y={y(SRAS(88)) - 8} fill={C.supply} fontSize={12} fontWeight={700} {...revealFade(2)}>SRAS</motion.text>

              <motion.g {...revealFade(2)}>
                <Guides p={p} qx={Ye} py={Pe} color={C.marker} xLabel="Y = 50" yLabel="P = 50" />
              </motion.g>
              <motion.circle cx={x(Ye)} cy={y(Pe)} r={5.5} fill={C.marker} {...revealPoint(2)} />
              <motion.text x={x(Ye) + 9} y={y(Pe) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(3)}>E</motion.text>

              {/* excess supply at P = 70 */}
              <motion.g {...revealFade(3)}>
                <line x1={x(30)} y1={y(Phigh)} x2={x(75)} y2={y(Phigh)} stroke={C.intervention} strokeWidth={2} />
                <circle cx={x(30)} cy={y(Phigh)} r={3.5} fill={C.intervention} />
                <circle cx={x(75)} cy={y(Phigh)} r={3.5} fill={C.intervention} />
                <text x={x(52)} y={y(Phigh) - 8} fill={C.intervention} fontSize={10} textAnchor="middle">
                  excess supply = 45 → prices fall
                </text>
                <text x={p.m.l - 8} y={y(Phigh) + 4} fill={C.intervention} fontSize={10} textAnchor="end">70</text>
              </motion.g>

              {/* excess demand at P = 30 */}
              <motion.g {...revealFade(4)}>
                <line x1={x(25)} y1={y(Plow)} x2={x(70)} y2={y(Plow)} stroke={C.welfareGain} strokeWidth={2} />
                <circle cx={x(25)} cy={y(Plow)} r={3.5} fill={C.welfareGain} />
                <circle cx={x(70)} cy={y(Plow)} r={3.5} fill={C.welfareGain} />
                <text x={x(48)} y={y(Plow) + 16} fill={C.welfareGain} fontSize={10} textAnchor="middle">
                  excess demand = 45 → prices rise
                </text>
                <text x={p.m.l - 8} y={y(Plow) + 4} fill={C.welfareGain} fontSize={10} textAnchor="end">30</text>
              </motion.g>

              {/* adjustment arrows */}
              <motion.line x1={x(84)} y1={y(Phigh) - 2} x2={x(84)} y2={y(Pe) + 6}
                stroke={C.intervention} strokeWidth={1.8} markerEnd="url(#adaseq-arrow)" {...revealFade(5)} />
              <motion.line x1={x(84)} y1={y(Plow) + 2} x2={x(84)} y2={y(Pe) - 6}
                stroke={C.welfareGain} strokeWidth={1.8} markerEnd="url(#adaseq-arrow)" {...revealFade(5)} />
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default ADASEquilibriumDiagram;
