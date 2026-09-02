import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface Props {
  title?: string;
}

const MAX = 82;
const before = (q: number) => MAX * Math.sqrt(Math.max(0, 1 - (q / MAX) ** 2));
const MAX2 = MAX * 1.28;
const after = (q: number) => MAX2 * Math.sqrt(Math.max(0, 1 - (q / MAX2) ** 2));

/**
 * Specialisation and the division of labour raise output per worker, so the
 * whole frontier shifts outwards: the economy can consume more of both goods
 * without any extra factor inputs.
 */
const SpecializationPPCShiftDiagram = ({ title }: Props) => {
  const p = plotBox(560, 400);

  // Same input mix, higher output after specialisation
  const q1 = 50, y1 = before(q1);
  const q2 = q1 * 1.28, y2 = after(q2);

  return (
    <DiagramFrame
      title={title ?? 'Specialisation & Division of Labour Shift the PPC Outwards'}
      eyebrow="Higher productivity from the same resources"
      legend={[
        { label: 'PPC₁ — before specialisation', color: C.demand },
        { label: 'PPC₂ — after specialisation', color: C.social, dashed: true },
        { label: 'X — output combination', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          Adam Smith&apos;s pin factory: dividing production into repeated tasks raises output per worker through
          practice, time saved switching jobs and the use of specialised capital. With unchanged factor supplies,
          maximum output rises from {MAX} to {Math.round(MAX2)} units of each good, moving the combination from
          X₁ ({q1}, {y1.toFixed(1)}) to X₂ ({q2.toFixed(0)}, {y2.toFixed(1)}). The trade-offs are lower productive
          flexibility, worker boredom and greater interdependence risk.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label="Specialisation shifting the production possibility curve outwards">
          <Axes p={p} id="spec-ppc" labelX="Good A (units per worker-year)" labelY="Good B (units per worker-year)" />

          <motion.path d={curve(p, before, 0, MAX)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(0)} animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} />
          <motion.path d={curve(p, after, 0, MAX2)} fill="none" stroke={C.social} strokeWidth={2.6} strokeDasharray="8 4" {...revealPath(2)} animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} />

          <motion.text x={p.x(MAX * 0.62)} y={p.y(before(MAX * 0.62)) + 18} fill={C.demand} fontSize={12} fontWeight={600} {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>PPC₁</motion.text>
          <motion.text x={p.x(MAX2 * 0.62)} y={p.y(after(MAX2 * 0.62)) - 10} fill={C.social} fontSize={12} fontWeight={600} {...revealFade(3)} animate={play ? { opacity: 1 } : { opacity: 0 }}>PPC₂</motion.text>

          <motion.g {...revealPoint(1)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
            <circle cx={p.x(q1)} cy={p.y(y1)} r={5.5} fill={C.marker} />
            <text x={p.x(q1) - 22} y={p.y(y1) - 8} fill={C.marker} fontSize={12} fontWeight={700}>X₁</text>
          </motion.g>
          <motion.g {...revealPoint(3)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
            <circle cx={p.x(q2)} cy={p.y(y2)} r={5.5} fill={C.marker} />
            <text x={p.x(q2) + 9} y={p.y(y2) - 8} fill={C.marker} fontSize={12} fontWeight={700}>X₂</text>
          </motion.g>

          <motion.line
            x1={p.x(q1) + 4} y1={p.y(y1) - 4} x2={p.x(q2) - 5} y2={p.y(y2) + 5}
            stroke={C.marker} strokeWidth={1.6} strokeDasharray="5 3"
            {...revealFade(3)} animate={play ? { opacity: 0.9 } : { opacity: 0 }}
          />
        </svg>
      )}
    </DiagramFrame>
  );
};

export default SpecializationPPCShiftDiagram;
