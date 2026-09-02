import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Second-round cost effects — the wage-price spiral drawn on AD/AS.
 *
 * SRAS₁ : P = 10 + 0.35Y + 0.006Y² ; SRAS₂ = SRAS₁ + 18 ; SRAS₃ = SRAS₁ + 36
 * AD    : P = 130 − 0.7Y (unchanged — the central bank accommodates)
 * E₁ : Y = 78.8, P = 74.8 · E₂ : Y = 69.5, P = 81.3 · E₃ : Y = 59.7, P = 88.2
 */
const CostPushInflationDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const SRAS1 = (Y: number) => 10 + 0.35 * Y + 0.006 * Y * Y;
  const SRAS2 = (Y: number) => SRAS1(Y) + 18;
  const SRAS3 = (Y: number) => SRAS1(Y) + 36;
  const AD = (Y: number) => 130 - 0.7 * Y;

  const pts = [
    { Y: 78.8, P: 74.8, label: 'E₁', color: C.marker },
    { Y: 69.5, P: 81.3, label: 'E₂', color: C.supplyAlt },
    { Y: 59.7, P: 88.2, label: 'E₃', color: C.intervention },
  ];

  return (
    <DiagramFrame
      title="Second-Round Effects: The Wage-Price Spiral on AD/AS"
      eyebrow="Figure — one shock becomes sustained inflation only if costs keep rising"
      legend={[
        { label: 'SRAS₁ → SRAS₂ → SRAS₃', color: C.supply },
        { label: 'AD (accommodated, unchanged)', color: C.demand },
        { label: 'Successive equilibria', color: C.intervention, kind: 'dot' },
      ]}
      note={
        <>
          A single supply shock only raises the price <em>level</em>. It becomes <strong>sustained
          inflation</strong> when it triggers second-round effects. Round 1: import or energy costs jump,
          SRAS₁ → SRAS₂, P rises to 81.3 and Y falls to 69.5. Round 2: real wages have fallen, so workers
          bargain for compensating nominal pay rises; if these exceed productivity growth, unit labour costs
          rise again and SRAS₂ → SRAS₃ (P = 88.2, Y = 59.7). Each round leaves the economy with higher prices
          and lower output. The spiral is broken by <strong>anchored inflation expectations</strong> — a
          credible inflation target, independent central bank, forward guidance — plus productivity growth
          that absorbs pay rises. Evaluation: trade-union density, indexation of wages and benefits, and the
          degree of monetary accommodation all determine whether round 2 ever happens.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Three successive leftward shifts of SRAS along a fixed AD curve">
          <Axes p={p} id="cpinf" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              <motion.path d={curve(p, SRAS1, 5, 88)} fill="none" stroke={C.supply} strokeWidth={2.6} {...revealPath(0)} />
              <motion.text x={x(88) - 32} y={y(SRAS1(88)) + 14} fill={C.supply} fontSize={11} fontWeight={700} {...revealFade(1)}>SRAS₁</motion.text>

              <motion.path d={curve(p, AD, 20, 100)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(1)} />
              <motion.text x={x(97)} y={y(AD(97)) - 8} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(2)}>AD</motion.text>

              <motion.path d={curve(p, SRAS2, 5, 80)} fill="none" stroke={C.supplyAlt} strokeWidth={2.4}
                strokeDasharray="7 4" {...revealPath(2)} />
              <motion.text x={x(80) - 32} y={y(SRAS2(80)) - 8} fill={C.supplyAlt} fontSize={11} fontWeight={700} {...revealFade(3)}>SRAS₂</motion.text>

              <motion.path d={curve(p, SRAS3, 5, 70)} fill="none" stroke={C.intervention} strokeWidth={2.4}
                strokeDasharray="7 4" {...revealPath(3)} />
              <motion.text x={x(70) - 32} y={y(SRAS3(70)) - 8} fill={C.intervention} fontSize={11} fontWeight={700} {...revealFade(4)}>SRAS₃</motion.text>

              {pts.map((pt, i) => (
                <g key={pt.label}>
                  <motion.g {...revealFade(4 + i)}>
                    <Guides p={p} qx={pt.Y} py={pt.P} color={pt.color} yLabel={pt.P.toFixed(1)} />
                    <text x={x(pt.Y)} y={y(0) + (i === 1 ? 28 : 15)} fill={pt.color} fontSize={10} textAnchor="middle">
                      {pt.Y.toFixed(1)}
                    </text>
                  </motion.g>
                  <motion.circle cx={x(pt.Y)} cy={y(pt.P)} r={5} fill={pt.color} {...revealPoint(4 + i)} />
                  <motion.text x={x(pt.Y) + 8} y={y(pt.P) + 12} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5 + i)}>
                    {pt.label}
                  </motion.text>
                </g>
              ))}

              <motion.text x={x(16)} y={y(94)} fill={C.muted} fontSize={10} {...revealFade(7)}>
                each round: ↑ costs → ↑ P, ↓ Y
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default CostPushInflationDiagram;
