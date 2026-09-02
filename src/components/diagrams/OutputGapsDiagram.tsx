import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Negative and positive output gaps.
 *
 * SRAS : P = 10 + 0.7Y ; LRAS vertical at Yf = 60
 * AD_L : P = 80 − 0.8Y  → 1.5Y = 70 ⇒ Y = 46.7, P = 42.7  (negative gap of 13.3)
 * AD_H : P = 110 − 0.8Y → 1.5Y = 100 ⇒ Y = 66.7, P = 56.7 (positive gap of 6.7)
 */
export const OutputGapsDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS = (Y: number) => 10 + 0.7 * Y;
  const ADL = (Y: number) => 80 - 0.8 * Y;
  const ADH = (Y: number) => 110 - 0.8 * Y;
  const Yf = 60;
  const YL = 70 / 1.5, PL = SRAS(YL);   // 46.7, 42.7
  const YH = 100 / 1.5, PH = SRAS(YH);  // 66.7, 56.7

  return (
    <DiagramFrame
      title="Output Gaps: Spare Capacity and Overheating"
      eyebrow="Figure — actual output relative to productive potential"
      legend={[
        { label: 'LRAS — potential output Yf = 60', color: C.social },
        { label: 'SRAS', color: C.supply },
        { label: 'AD (weak) / AD (strong)', color: C.demand },
        { label: 'Negative gap', color: C.welfareLoss, kind: 'area' },
        { label: 'Positive gap', color: C.welfareGain, kind: 'area' },
      ]}
      note={
        <>
          An <strong>output gap</strong> is the difference between actual real GDP and potential output
          (LRAS), usually expressed as a % of potential. <strong>Negative gap (Y = 46.7 vs Yf = 60, a gap of
          −22%):</strong> weak AD leaves spare capacity — cyclical (demand-deficient) unemployment, low
          capacity utilisation, weak pricing power and disinflationary pressure; the case for expansionary
          fiscal or monetary policy. <strong>Positive gap (Y = 66.7, +11%):</strong> AD exceeds sustainable
          capacity — overtime, labour shortages, skill bottlenecks and rising inflation, so the central bank
          tightens. Two exam cautions: potential output is <em>unobservable</em> and only estimated with
          large revisions, and a positive gap is <em>temporary</em> — output above Yf drags unit costs up,
          shifting SRAS left until the gap closes.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="LRAS with two AD curves producing a negative and a positive output gap">
          <Axes p={p} id="outgap" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.rect x={x(YL)} y={p.m.t} width={x(Yf) - x(YL)} height={p.ch}
                fill={C.welfareLoss} opacity={0.12} {...revealFade(4)} />
              <motion.rect x={x(Yf)} y={p.m.t} width={x(YH) - x(Yf)} height={p.ch}
                fill={C.welfareGain} opacity={0.12} {...revealFade(5)} />

              <motion.line x1={x(Yf)} y1={y(0)} x2={x(Yf)} y2={y(96)} stroke={C.social} strokeWidth={2.8} {...revealPath(0)} />
              <motion.text x={x(Yf) - 30} y={y(94)} fill={C.social} fontSize={12} fontWeight={700} {...revealFade(1)}>LRAS</motion.text>

              <motion.path d={curve(p, SRAS, 8, 95)} fill="none" stroke={C.supply} strokeWidth={2.6} {...revealPath(1)} />
              <motion.text x={x(95) - 2} y={y(SRAS(95)) - 8} fill={C.supply} fontSize={11} fontWeight={700} {...revealFade(2)}>SRAS</motion.text>

              <motion.path d={curve(p, ADL, 5, 90)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(2)} />
              <motion.text x={x(72)} y={y(ADL(72)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(3)}>AD (weak)</motion.text>

              <motion.path d={curve(p, ADH, 20, 100)} fill="none" stroke={C.demand} strokeWidth={2.4}
                strokeDasharray="7 4" {...revealPath(3)} />
              <motion.text x={x(94)} y={y(ADH(94)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(4)}>AD (strong)</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={YL} py={PL} color={C.welfareLoss} yLabel="42.7" />
                <text x={x(YL)} y={y(0) + 15} fill={C.welfareLoss} fontSize={10} textAnchor="middle">46.7</text>
                <text x={x(Yf)} y={y(0) + 28} fill={C.social} fontSize={10} textAnchor="middle">Yf = 60</text>
              </motion.g>
              <motion.circle cx={x(YL)} cy={y(PL)} r={5} fill={C.welfareLoss} {...revealPoint(4)} />

              <motion.g {...revealFade(5)}>
                <Guides p={p} qx={YH} py={PH} color={C.welfareGain} yLabel="56.7" />
                <text x={x(YH)} y={y(0) + 15} fill={C.welfareGain} fontSize={10} textAnchor="middle">66.7</text>
              </motion.g>
              <motion.circle cx={x(YH)} cy={y(PH)} r={5} fill={C.welfareGain} {...revealPoint(5)} />

              <motion.text x={x((YL + Yf) / 2)} y={p.m.t + 14} fill={C.welfareLoss} fontSize={9.5} textAnchor="middle" {...revealFade(6)}>
                negative gap
              </motion.text>
              <motion.text x={x((Yf + YH) / 2)} y={p.m.t + 28} fill={C.welfareGain} fontSize={9.5} textAnchor="middle" {...revealFade(6)}>
                positive gap
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default OutputGapsDiagram;
