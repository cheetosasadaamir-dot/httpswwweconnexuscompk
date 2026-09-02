import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface PPCShiftsDiagramProps {
  type: 'parallel' | 'pivotal';
  title?: string;
}

const MAX = 84;
const base = (q: number) => MAX * Math.sqrt(Math.max(0, 1 - (q / MAX) ** 2));
/** Parallel (uniform) growth: both intercepts rise by the same proportion. */
const parallel = (q: number) => {
  const m = MAX * 1.25;
  return m * Math.sqrt(Math.max(0, 1 - (q / m) ** 2));
};
/** Pivotal growth: only the horizontal-axis good benefits, vertical intercept fixed. */
const pivotal = (q: number) => {
  const m = MAX * 1.4;
  return MAX * Math.sqrt(Math.max(0, 1 - (q / m) ** 2));
};

/**
 * Outward shifts of the PPC. Parallel shifts follow a general rise in
 * resources or productivity; pivotal shifts follow a gain specific to one
 * good, so only that intercept moves — the standard treatment on
 * economicshelp.org and tutor2u.
 */
const PPCShiftsDiagram = ({ type, title }: PPCShiftsDiagramProps) => {
  const p = plotBox(560, 410);
  const f2 = type === 'parallel' ? parallel : pivotal;
  const max2 = type === 'parallel' ? MAX * 1.25 : MAX * 1.4;

  return (
    <DiagramFrame
      title={title ?? (type === 'parallel' ? 'Economic Growth: Parallel Outward Shift' : 'Pivotal Shift: Growth in One Sector Only')}
      eyebrow={type === 'parallel' ? 'More resources or across-the-board productivity gains' : 'Technology specific to one good'}
      legend={[
        { label: 'PPC₁ — original frontier', color: C.demand },
        { label: 'PPC₂ — after growth', color: C.social, dashed: true },
        { label: 'New attainable output', color: C.welfareGain, kind: 'area' },
      ]}
      note={
        type === 'parallel' ? (
          <>
            Both intercepts rise from {MAX} to {Math.round(max2)}: net investment, immigration, resource discovery
            or a general productivity improvement expands potential output of <em>both</em> goods. This is actual
            growth only if the economy also moves onto the new frontier — otherwise it stays inside PPC₂.
          </>
        ) : (
          <>
            The vertical intercept stays at {MAX} while the horizontal intercept rises to {Math.round(max2)}: the
            improvement (e.g. automation in manufacturing) applies to only one good. Maximum output of the other
            good is unchanged, but every intermediate combination still improves.
          </>
        )
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label={`${type} shift of the production possibility curve`}>
          <Axes p={p} id={`ppc-shift-${type}`} labelX="Manufactured goods (units)" labelY="Agricultural goods (units)" />

          <motion.path
            d={`${curve(p, f2, 0, max2)} L ${p.x(max2)} ${p.y(0)} L ${p.x(0)} ${p.y(0)} Z`}
            fill={C.welfareGain}
            opacity={0.1}
            {...revealFade(2)}
            animate={play ? { opacity: 0.1 } : { opacity: 0 }}
          />
          <motion.path
            d={`${curve(p, base, 0, MAX)} L ${p.x(0)} ${p.y(0)} Z`}
            fill={C.demand}
            opacity={0.08}
            {...revealFade(0)}
            animate={play ? { opacity: 0.08 } : { opacity: 0 }}
          />

          <motion.path
            d={curve(p, base, 0, MAX)}
            fill="none"
            stroke={C.demand}
            strokeWidth={2.6}
            {...revealPath(0)}
            animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          />
          <motion.path
            d={curve(p, f2, 0, max2)}
            fill="none"
            stroke={C.social}
            strokeWidth={2.6}
            strokeDasharray="8 4"
            {...revealPath(2)}
            animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          />

          <motion.text x={p.x(MAX * 0.66)} y={p.y(base(MAX * 0.66)) + 18} fill={C.demand} fontSize={12} fontWeight={600} {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            PPC₁
          </motion.text>
          <motion.text x={p.x(max2 * 0.66)} y={p.y(f2(max2 * 0.66)) - 10} fill={C.social} fontSize={12} fontWeight={600} {...revealFade(3)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            PPC₂
          </motion.text>

          {/* Shift arrows */}
          {[0.25, 0.5, 0.75].map((t, i) => {
            const q = MAX * t;
            const y1 = base(q);
            const y2 = f2(q);
            return (
              <motion.line
                key={t}
                x1={p.x(q)}
                y1={p.y(y1) - 3}
                x2={p.x(q)}
                y2={p.y(y2) + 6}
                stroke={C.marker}
                strokeWidth={1.6}
                markerEnd="url(#ppc-shift-arrowhead)"
                {...revealFade(2 + i * 0.2)}
                animate={play ? { opacity: 0.9 } : { opacity: 0 }}
              />
            );
          })}
          <defs>
            <marker id="ppc-shift-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <polygon points="0 8, 4 0, 8 8" fill={C.marker} />
            </marker>
          </defs>

          {/* Intercepts */}
          <motion.g {...revealPoint(1)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
            <circle cx={p.x(0)} cy={p.y(MAX)} r={4.5} fill={C.demand} />
            <circle cx={p.x(MAX)} cy={p.y(0)} r={4.5} fill={C.demand} />
          </motion.g>
          <motion.g {...revealPoint(3)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
            {type === 'parallel' && <circle cx={p.x(0)} cy={p.y(max2)} r={4.5} fill={C.social} />}
            <circle cx={p.x(max2)} cy={p.y(0)} r={4.5} fill={C.social} />
          </motion.g>

          <motion.text x={p.x(0) - 8} y={p.y(MAX) + 4} fill={C.axis} fontSize={11} textAnchor="end" {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            {MAX}
          </motion.text>
          {type === 'parallel' && (
            <motion.text x={p.x(0) - 8} y={p.y(max2) + 4} fill={C.social} fontSize={11} textAnchor="end" {...revealFade(3)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
              {Math.round(max2)}
            </motion.text>
          )}
          <motion.text x={p.x(MAX)} y={p.y(0) + 16} fill={C.axis} fontSize={11} textAnchor="middle" {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            {MAX}
          </motion.text>
          <motion.text x={p.x(max2)} y={p.y(0) + 16} fill={C.social} fontSize={11} textAnchor="middle" {...revealFade(3)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            {Math.round(max2)}
          </motion.text>
        </svg>
      )}
    </DiagramFrame>
  );
};

export default PPCShiftsDiagram;
