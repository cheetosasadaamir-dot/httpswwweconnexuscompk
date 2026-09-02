import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath } from './diagramStyle';

/**
 * Shifts of aggregate demand.
 *
 * AD₁ : P = 95 − 0.8Y          (baseline)
 * AD₂ : P = 119 − 0.8Y         (rightward shift of 30 units of real output)
 * AD₃ : P = 71 − 0.8Y          (leftward shift of 30 units of real output)
 * At any given price level (e.g. P = 47) the three curves give Y = 60, 90 and 30.
 */
const ADShiftDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const AD1 = (Y: number) => 95 - 0.8 * Y;
  const AD2 = (Y: number) => 119 - 0.8 * Y;
  const AD3 = (Y: number) => 71 - 0.8 * Y;
  const Pref = 47; // AD1: Y=60, AD2: Y=90, AD3: Y=30

  return (
    <DiagramFrame
      title="Shifts in Aggregate Demand"
      eyebrow="Figure — a change in any non-price determinant of C, I, G or (X − M)"
      legend={[
        { label: 'AD₁ — original aggregate demand', color: C.demand },
        { label: 'AD₂ — increase in AD', color: C.welfareGain, dashed: true },
        { label: 'AD₃ — decrease in AD', color: C.intervention, dashed: true },
      ]}
      note={
        <>
          A shift means a <strong>different quantity of real output demanded at the same price level</strong>.
          Read the horizontal distance at P = 47: AD₁ gives Y = 60, AD₂ gives Y = 90 and AD₃ gives Y = 30.
          <strong> AD shifts right</strong> when consumer or business confidence rises, interest rates or
          income tax are cut, government spending rises, the currency depreciates, house or share prices rise
          (wealth effect), credit becomes easier, or world growth lifts export demand.
          <strong> AD shifts left</strong> on the reverse: higher interest rates, austerity, falling
          confidence, appreciation, a credit crunch or recession abroad. Note the
          <strong> multiplier</strong>: an initial injection of £10bn shifts AD by £10bn × k, so the horizontal
          shift is larger than the original injection whenever k &gt; 1.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Three parallel aggregate demand curves showing rightward and leftward shifts">
          <Axes p={p} id="adshift" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, AD1, 12, 100)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(72)} y={y(AD1(72)) - 8} fill={C.demand} fontSize={12} fontWeight={700} {...revealFade(1)}>AD₁</motion.text>

              <motion.path d={curve(p, AD2, 25, 100)} fill="none" stroke={C.welfareGain} strokeWidth={2.6}
                strokeDasharray="7 4" {...revealPath(1)} />
              <motion.text x={x(94)} y={y(AD2(94)) - 8} fill={C.welfareGain} fontSize={12} fontWeight={700} {...revealFade(2)}>AD₂</motion.text>

              <motion.path d={curve(p, AD3, 5, 85)} fill="none" stroke={C.intervention} strokeWidth={2.6}
                strokeDasharray="7 4" {...revealPath(2)} />
              <motion.text x={x(50)} y={y(AD3(50)) - 8} fill={C.intervention} fontSize={12} fontWeight={700} {...revealFade(3)}>AD₃</motion.text>

              {/* reference price level */}
              <motion.g {...revealFade(3)}>
                <line x1={p.m.l} y1={y(Pref)} x2={x(100)} y2={y(Pref)} stroke={C.muted} strokeDasharray="4 3" strokeWidth={1} />
                <text x={p.m.l - 8} y={y(Pref) + 4} fill={C.muted} fontSize={10} textAnchor="end">P = 47</text>
                {[30, 60, 90].map((Y) => (
                  <g key={Y}>
                    <circle cx={x(Y)} cy={y(Pref)} r={4} fill={C.marker} />
                    <line x1={x(Y)} y1={y(Pref)} x2={x(Y)} y2={y(0)} stroke={C.muted} strokeDasharray="4 3" strokeWidth={1} />
                    <text x={x(Y)} y={y(0) + 15} fill={C.muted} fontSize={10} textAnchor="middle">{Y}</text>
                  </g>
                ))}
              </motion.g>

              {/* shift arrows */}
              <motion.line x1={x(62)} y1={y(Pref) - 26} x2={x(88)} y2={y(Pref) - 26}
                stroke={C.welfareGain} strokeWidth={2} markerEnd="url(#adshift-arrow)" {...revealFade(4)} />
              <motion.text x={x(75)} y={y(Pref) - 32} fill={C.welfareGain} fontSize={10} textAnchor="middle" {...revealFade(4)}>
                ↑C, ↑I, ↑G, ↑(X − M)
              </motion.text>

              <motion.line x1={x(58)} y1={y(Pref) + 30} x2={x(32)} y2={y(Pref) + 30}
                stroke={C.intervention} strokeWidth={2} markerEnd="url(#adshift-arrow)" {...revealFade(5)} />
              <motion.text x={x(45)} y={y(Pref) + 44} fill={C.intervention} fontSize={10} textAnchor="middle" {...revealFade(5)}>
                ↑ interest rates, ↑ taxes
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default ADShiftDiagram;
