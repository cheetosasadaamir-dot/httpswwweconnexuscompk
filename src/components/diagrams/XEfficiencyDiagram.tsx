import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * X-inefficiency (Leibenstein, 1966).
 *
 * Attainable cost curve  ATC* = 300/Q + 20 + 0.3Q  → min 39.0 at Q = 31.6
 * Actual cost curve      ATC  = ATC* + 12 (organisational slack raises every unit cost)
 * At Q = 30 : ATC* = 39.0, ATC = 51.0 → X-inefficiency gap = 12 per unit.
 */
const XEfficiencyDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const ATCstar = (q: number) => 300 / q + 20 + 0.3 * q;
  const ATCx = (q: number) => ATCstar(q) + 12;
  const Q = 30;
  const cStar = ATCstar(Q); // 39.0
  const cX = ATCx(Q);       // 51.0

  return (
    <DiagramFrame
      title="X-Inefficiency: Costs Above the Attainable Minimum"
      eyebrow="Figure — Leibenstein (1966): the cost of the quiet life"
      legend={[
        { label: 'ATC* — lowest attainable cost', color: C.welfareGain },
        { label: 'ATC — actual cost under organisational slack', color: C.intervention, dashed: true },
        { label: 'X-inefficiency gap', color: C.marker },
        { label: 'Waste of resources', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          X-inefficiency is <strong>not</strong> about producing the wrong quantity — it is about the whole cost
          curve sitting <strong>above</strong> the technically attainable minimum. Sheltered by barriers to entry,
          a firm tolerates overstaffing, inflated executive pay, weak procurement, slow decision-making and
          managerial "satisficing" rather than cost minimisation. At Q = 30 the firm could produce at 39 but
          actually spends 51: the vertical gap of 12 per unit is the X-inefficiency, and the shaded band is the
          resource waste across the whole output range. Keep the three inefficiencies distinct:
          <strong> productive</strong> inefficiency is producing away from the minimum of the ATC curve;
          <strong> allocative</strong> inefficiency is P &gt; MC; <strong>X-inefficiency</strong> is the ATC curve
          itself being too high. Leibenstein argued this loss often <em>exceeds</em> the allocative deadweight
          triangle, which is the main empirical case for competition policy, privatisation and exposing
          monopolies to contestability — the mere <em>threat</em> of entry can force cost discipline.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Two average total cost curves showing the gap between actual costs and the minimum attainable costs">
          <Axes p={p} id="xeff" labelX="Output (Q)" labelY="Cost per unit" />
          {play && (
            <>
              <motion.path
                d={`${curve(p, ATCx, 7, 80, 120)} L ${x(80)} ${y(ATCstar(80))} ${curve(p, ATCstar, 80, 7, 120).replace('M', 'L')} Z`}
                fill={C.welfareLoss} opacity={0.14} {...revealFade(3)}
              />

              <motion.path d={curve(p, ATCstar, 7, 80, 140)} fill="none" stroke={C.welfareGain} strokeWidth={2.6} {...revealPath(0)} />
              <motion.text x={x(80) + 4} y={y(ATCstar(80)) + 12} fill={C.welfareGain} fontSize={11} {...revealFade(1)}>ATC*</motion.text>

              <motion.path d={curve(p, ATCx, 7, 80, 140)} fill="none" stroke={C.intervention} strokeWidth={2.6}
                strokeDasharray="7 4" {...revealPath(1)} />
              <motion.text x={x(80) + 4} y={y(ATCx(80)) - 6} fill={C.intervention} fontSize={11} {...revealFade(2)}>ATC</motion.text>

              {/* gap arrow */}
              <motion.g {...revealFade(4)}>
                <line x1={x(Q)} y1={y(cX)} x2={x(Q)} y2={y(cStar)} stroke={C.marker} strokeWidth={2.4} />
                <polygon points={`${x(Q) - 4},${y(cX) + 8} ${x(Q) + 4},${y(cX) + 8} ${x(Q)},${y(cX)}`} fill={C.marker} />
                <polygon points={`${x(Q) - 4},${y(cStar) - 8} ${x(Q) + 4},${y(cStar) - 8} ${x(Q)},${y(cStar)}`} fill={C.marker} />
                <line x1={p.m.l} y1={y(cX)} x2={x(Q)} y2={y(cX)} stroke={C.intervention} strokeDasharray="4 3" strokeWidth={1} />
                <line x1={p.m.l} y1={y(cStar)} x2={x(Q)} y2={y(cStar)} stroke={C.welfareGain} strokeDasharray="4 3" strokeWidth={1} />
                <text x={p.m.l - 8} y={y(cX) + 4} fill={C.intervention} fontSize={10} textAnchor="end">C₁ = 51</text>
                <text x={p.m.l - 8} y={y(cStar) + 4} fill={C.welfareGain} fontSize={10} textAnchor="end">C* = 39</text>
                <line x1={x(Q)} y1={y(cStar)} x2={x(Q)} y2={y(0)} stroke={C.muted} strokeDasharray="4 3" strokeWidth={1} />
                <text x={x(Q)} y={y(0) + 15} fill={C.muted} fontSize={10} textAnchor="middle">Q</text>
              </motion.g>
              <motion.text x={x(Q) + 10} y={y(45)} fill={C.marker} fontSize={10} {...revealFade(5)}>X-inefficiency</motion.text>

              <motion.circle cx={x(31.6)} cy={y(39)} r={4.5} fill={C.welfareGain} {...revealPoint(5)} />
              <motion.text x={x(31.6) + 8} y={y(39) + 16} fill={C.welfareGain} fontSize={9} {...revealFade(6)}>
                min attainable ATC
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default XEfficiencyDiagram;
