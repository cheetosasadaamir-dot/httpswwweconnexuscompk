import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { DIAGRAM_COLORS as C } from './diagramStyle';

/** Six stages of the wage-price spiral arranged on a circle. */
const NODES = [
  { l1: 'Prices rise', l2: 'headline CPI ↑', color: C.intervention },
  { l1: 'Real wages fall', l2: 'W / P ↓', color: C.supply },
  { l1: 'Higher pay claims', l2: 'expected inflation ↑', color: C.marker },
  { l1: 'Unit costs rise', l2: 'pay > productivity', color: C.supplyAlt },
  { l1: 'SRAS shifts left', l2: 'margins restored', color: C.welfareLoss },
  { l1: 'Prices rise again', l2: 'the loop closes', color: C.intervention },
];

const W = 560, H = 470;
const cx = W / 2, cy = H / 2 + 4, R = 158, NR = 46;
const TRIM = Math.asin(NR / R) + 0.09; // radians of clearance either side

const pt = (a: number, r = R) => ({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });

const WagePriceSpiralDiagram = () => {
  const angles = NODES.map((_, i) => -Math.PI / 2 + (i * 2 * Math.PI) / NODES.length);

  return (
    <DiagramFrame
      title="The Wage-Price Spiral"
      eyebrow="Figure — how a one-off shock becomes sustained inflation"
      legend={[
        { label: 'Loop stages', color: C.marker, kind: 'dot' },
        { label: 'Breaking the loop: anchored expectations, productivity growth', color: C.social },
      ]}
      note={
        <>
          Inflation persists when each round of price rises generates the cost pressure for the next.
          Workers who lose real income (W/P falls) bargain for compensating pay rises based on
          <strong> expected</strong> inflation; where those rises exceed productivity growth, unit labour
          costs rise, firms raise prices to protect margins, and the loop restarts. Two conditions are
          needed: <strong>bargaining power</strong> (union density, tight labour markets, indexation of pay
          and benefits) and <strong>monetary accommodation</strong> (the central bank tolerating faster money
          growth). Break the loop by anchoring expectations — a credible independent central bank with a
          published inflation target — by raising productivity so higher pay is non-inflationary, and by
          avoiding automatic indexation. This is why economists watch <em>core</em> inflation, pay
          settlements and inflation-expectation surveys, not just the headline rate.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Circular diagram of the wage price spiral with six stages">
          <defs>
            <marker id="wps-arrow" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
              <polygon points="0 0, 9 3.5, 0 7" fill={C.marker} />
            </marker>
          </defs>

          {play && (
            <>
              {angles.map((a, i) => {
                const start = pt(a + TRIM);
                const end = pt(angles[(i + 1) % angles.length] - TRIM + (i === angles.length - 1 ? 2 * Math.PI : 0));
                return (
                  <motion.path
                    key={`arc-${i}`}
                    d={`M ${start.x} ${start.y} A ${R} ${R} 0 0 1 ${end.x} ${end.y}`}
                    fill="none" stroke={C.marker} strokeWidth={1.8} markerEnd="url(#wps-arrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 0.3 + i * 0.38, duration: 0.45 }}
                  />
                );
              })}

              {NODES.map((n, i) => {
                const c = pt(angles[i]);
                return (
                  <motion.g key={n.l1}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.38, duration: 0.35, ease: 'backOut' }}
                    style={{ transformOrigin: `${c.x}px ${c.y}px` }}
                  >
                    <circle cx={c.x} cy={c.y} r={NR} fill={n.color} opacity={0.16} />
                    <circle cx={c.x} cy={c.y} r={NR} fill="none" stroke={n.color} strokeWidth={1.6} />
                    <text x={c.x} y={c.y - 12} textAnchor="middle" fill={C.axis} fontSize={11} fontWeight={700}>
                      {i + 1}
                    </text>
                    <text x={c.x} y={c.y + 3} textAnchor="middle" fill={n.color} fontSize={10} fontWeight={700}>
                      {n.l1}
                    </text>
                    <text x={c.x} y={c.y + 17} textAnchor="middle" fill={C.muted} fontSize={8.5}>
                      {n.l2}
                    </text>
                  </motion.g>
                );
              })}

              <motion.text x={cx} y={cy - 12} textAnchor="middle" fill={C.axis} fontSize={13} fontWeight={700}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.4 }}>
                WAGE-PRICE SPIRAL
              </motion.text>
              <motion.text x={cx} y={cy + 10} textAnchor="middle" fill={C.social} fontSize={10}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.4 }}>
                broken by anchored expectations
              </motion.text>
              <motion.text x={cx} y={cy + 26} textAnchor="middle" fill={C.social} fontSize={10}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9, duration: 0.4 }}>
                and productivity growth
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default WagePriceSpiralDiagram;
