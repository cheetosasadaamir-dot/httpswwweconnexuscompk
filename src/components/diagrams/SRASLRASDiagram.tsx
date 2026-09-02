import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * SRAS and LRAS on one pair of axes.
 *
 * SRAS : P = 10 + 0.7Y
 * LRAS : vertical at Yf = 70 (productive potential)
 * AD   : P = 95 − 0.8Y
 * Equilibrium: 10 + 0.7Y = 95 − 0.8Y → Y = 56.7, P = 49.7
 * Negative output gap = 70 − 56.7 = 13.3.
 */
const SRASLRASDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS = (Y: number) => 10 + 0.7 * Y;
  const AD = (Y: number) => 95 - 0.8 * Y;
  const Yf = 70;
  const Ye = 85 / 1.5;      // 56.67
  const Pe = SRAS(Ye);      // 49.67

  return (
    <DiagramFrame
      title="Short-Run and Long-Run Aggregate Supply"
      eyebrow="Figure — SRAS slopes upward, LRAS is vertical at productive potential"
      legend={[
        { label: 'SRAS — short-run aggregate supply', color: C.supply },
        { label: 'LRAS — productive potential (Yf)', color: C.social },
        { label: 'AD — aggregate demand', color: C.demand },
        { label: 'Equilibrium', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          <strong>SRAS slopes upward</strong> because in the short run at least one factor price — above all
          the nominal wage — is fixed by contract. A higher price level therefore raises revenue faster than
          costs, widening profit margins and inducing firms to expand output (overtime, extra shifts, running
          plant harder). SRAS shifts when <em>costs per unit</em> change: wages, oil and commodity prices,
          import prices via the exchange rate, indirect taxes and subsidies.
          <strong> LRAS is vertical at Yf</strong> because in the long run all prices and wages are flexible,
          so real output depends only on the <em>quantity and quality of factors</em> — labour supply, the
          capital stock, technology, education and institutions — not on the price level. LRAS shifts only
          through supply-side improvement (investment, migration, training, productivity, deregulation).
          Here equilibrium is at Y = 56.7 &lt; Yf = 70, a <strong>negative output gap of 13.3</strong>: spare
          capacity, cyclical unemployment and weak inflationary pressure.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Upward sloping SRAS, vertical LRAS at full capacity and a downward sloping AD curve">
          <Axes p={p} id="sraslras" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              {/* negative output gap band */}
              <motion.rect x={x(Ye)} y={p.m.t} width={x(Yf) - x(Ye)} height={p.ch}
                fill={C.welfareLoss} opacity={0.10} {...revealFade(4)} />

              <motion.path d={curve(p, SRAS, 8, 95)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(95) - 4} y={y(SRAS(95)) - 8} fill={C.supply} fontSize={12} fontWeight={700} {...revealFade(1)}>SRAS</motion.text>

              <motion.line x1={x(Yf)} y1={y(0)} x2={x(Yf)} y2={y(96)} stroke={C.social} strokeWidth={2.8} {...revealPath(1)} />
              <motion.text x={x(Yf) + 6} y={y(94)} fill={C.social} fontSize={12} fontWeight={700} {...revealFade(2)}>LRAS</motion.text>

              <motion.path d={curve(p, AD, 12, 100)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(2)} />
              <motion.text x={x(90)} y={y(AD(90)) - 8} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(3)}>AD</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Ye} py={Pe} color={C.marker} yLabel="P = 49.7" />
                <text x={x(Ye)} y={y(0) + 15} fill={C.marker} fontSize={10} textAnchor="middle">Y = 56.7</text>
                <text x={x(Yf)} y={y(0) + 15} fill={C.social} fontSize={10} textAnchor="middle">Yf = 70</text>
              </motion.g>
              <motion.circle cx={x(Ye)} cy={y(Pe)} r={5} fill={C.marker} {...revealPoint(4)} />
              <motion.text x={x(Ye) + 8} y={y(Pe) - 8} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5)}>E</motion.text>

              <motion.text x={x((Ye + Yf) / 2)} y={y(88)} fill={C.welfareLoss} fontSize={10} textAnchor="middle" {...revealFade(5)}>
                negative output gap
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default SRASLRASDiagram;
