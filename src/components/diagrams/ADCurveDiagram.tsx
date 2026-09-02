import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * The Aggregate Demand curve.
 *
 * AD : P = 95 − 0.8Y  (plotted for Y = 15 … 100)
 *   at Y = 30 → P = 71
 *   at Y = 70 → P = 39
 * Downward slope explained by the real balance (wealth), interest-rate and
 * international-trade (net export) effects.
 */
const ADCurveDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const AD = (Y: number) => 95 - 0.8 * Y;
  const Ya = 30, Pa = AD(Ya); // 71
  const Yb = 70, Pb = AD(Yb); // 39

  return (
    <DiagramFrame
      title="The Aggregate Demand Curve"
      eyebrow="Figure — AD = C + I + G + (X − M)"
      legend={[
        { label: 'AD — total planned expenditure', color: C.demand },
        { label: 'Movement along AD as the price level changes', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          AD shows the total real output all agents plan to buy at each general price level. It slopes
          downward for three separate reasons — and examiners want the reason, not the shape.
          <strong> (1) Real balance / wealth effect:</strong> a lower price level raises the real value of
          money holdings and savings, so households feel wealthier and consume more.
          <strong> (2) Interest-rate effect:</strong> a lower price level reduces the demand for money; with
          money supply fixed, interest rates fall, stimulating credit-financed consumption and investment.
          <strong> (3) International trade effect:</strong> a lower domestic price level makes exports more
          competitive and imports dearer, so (X − M) rises. A price-level change causes a
          <em> movement along</em> AD (P = 71 → 39 moves the economy from Y = 30 to Y = 70); a change in any
          non-price determinant of C, I, G or (X − M) <em>shifts</em> the whole curve.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Downward sloping aggregate demand curve with two price level points marked">
          <Axes p={p} id="adcurve" labelX="Real national output / income (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, AD, 15, 100)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(100) - 30} y={y(AD(100)) - 10} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(1)}>
                AD
              </motion.text>

              <motion.g {...revealFade(2)}>
                <Guides p={p} qx={Ya} py={Pa} color={C.marker} xLabel="Y = 30" yLabel="P = 71" />
              </motion.g>
              <motion.circle cx={x(Ya)} cy={y(Pa)} r={5} fill={C.marker} {...revealPoint(2)} />

              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Yb} py={Pb} color={C.marker} xLabel="Y = 70" yLabel="P = 39" />
              </motion.g>
              <motion.circle cx={x(Yb)} cy={y(Pb)} r={5} fill={C.marker} {...revealPoint(3)} />

              {/* movement arrow along the curve */}
              <motion.path
                d={`M ${x(38)} ${y(AD(38)) + 14} Q ${x(52)} ${y(AD(52)) + 22} ${x(63)} ${y(AD(63)) + 14}`}
                fill="none" stroke={C.marker} strokeWidth={1.8} markerEnd="url(#adcurve-arrow)" {...revealFade(4)}
              />
              <motion.text x={x(50)} y={y(AD(50)) + 36} fill={C.marker} fontSize={10} textAnchor="middle" {...revealFade(4)}>
                fall in P → extension of AD
              </motion.text>

              <motion.text x={x(20)} y={y(22)} fill={C.muted} fontSize={10} {...revealFade(5)}>
                wealth · interest-rate · trade effects
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default ADCurveDiagram;
