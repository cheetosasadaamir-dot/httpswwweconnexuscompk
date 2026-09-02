import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { DIAGRAM_COLORS as C } from './diagramStyle';

/**
 * The wage-price spiral as a self-reinforcing loop.
 * Six nodes arranged on a circle of radius R around (cx, cy), joined by arcs.
 */
const NODES = [
  { label: 'Prices rise', sub: 'headline CPI ↑', color: C.intervention },
  { label: 'Real wages fall', sub: 'W/P ↓', color: C.supply },
  { label: 'Higher pay claims', sub: 'expected inflation ↑', color: C.marker },
  { label: 'Unit labour costs rise', sub: 'pay growth > productivity', color: C.supplyAlt },
  { label: 'SRAS shifts left', sub: 'firms restore margins', color: C.welfareLoss },
  { label: 'Prices rise again', sub: 'the loop closes', color: C.intervention },
];

const WagePriceSpiralDiagram = () => {
  const W = 540, H = 420;
  const cx = W / 2, cy = H / 2 + 6, R = 138;
  const pos = NODES.map((_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / NODES.length;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a };
  });

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
              {pos.map((pt, i) => {
                const next = pos[(i + 1) % pos.length];
                const mid = {
                  x: cx + (R + 34) * Math.cos((pt.a + next.a) / 2 + (i === pos.length - 1 ? Math.PI : 0)),
                  y: cy + (R + 34) * Math.sin((pt.a + next.a) / 2 + (i === pos.length - 1 ? Math.PI : 0)),
                };
                return (
                  <motion.path
                    key={`arc-${i}`}
                    d={`M ${pt.x} ${pt.y} Q ${mid.x} ${mid.y} ${next.x} ${next.y}`}
                    fill="none" stroke={C.marker} strokeWidth={1.6} opacity={0.55}
                    markerEnd="url(#wps-arrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.55 }}
                    transition={{ delay: 0.25 + i * 0.4, duration: 0.5 }}
                  />
                );
              })}

              {NODES.map((n, i) => (
                <motion.g key={n.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.4, duration: 0.35, ease: 'backOut' }}
                  style={{ transformOrigin: `${pos[i].x}px ${pos[i].y}px` }}
                >
                  <circle cx={pos[i].x} cy={pos[i].y} r={44} fill={n.color} opacity={0.14} />
                  <circle cx={pos[i].x} cy={pos[i].y} r={44} fill="none" stroke={n.color} strokeWidth={1.6} />
                  <text x={pos[i].x} y={pos[i].y - 2} textAnchor="middle" fill={n.color} fontSize={10} fontWeight={700}>
                    {n.label.split(' ').slice(0, 2).join(' ')}
                  </text>
                  <text x={pos[i].x} y={pos[i].y + 11} textAnchor="middle" fill={C.axis} fontSize={9}>
                    {n.label.split(' ').slice(2).join(' ') || ''}
                  </text>
                  <text x={pos[i].x} y={pos[i].y + 24} textAnchor="middle" fill={C.muted} fontSize={8.5}>
                    {n.sub}
                  </text>
                </motion.g>
              ))}

              <motion.text x={cx} y={cy - 8} textAnchor="middle" fill={C.axis} fontSize={13} fontWeight={700}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.4 }}>
                WAGE-PRICE SPIRAL
              </motion.text>
              <motion.text x={cx} y={cy + 12} textAnchor="middle" fill={C.social} fontSize={9.5}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.4 }}>
                broken by anchored expectations
              </motion.text>
              <motion.text x={cx} y={cy + 26} textAnchor="middle" fill={C.social} fontSize={9.5}
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
