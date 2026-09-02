import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface OpportunityCostPPCDiagramProps {
  type: 'increasing' | 'constant';
  title?: string;
}

const MAX = 90;
const concave = (q: number) => MAX * Math.sqrt(Math.max(0, 1 - (q / MAX) ** 2));
const linear = (q: number) => MAX - q;

/**
 * Increasing vs constant opportunity cost along a PPC.
 * The concave frontier gives a rising sacrifice per extra unit; the straight
 * line gives a constant one. Sacrifices below are computed from the same
 * functions that draw the curve, so the numbers always match the geometry.
 */
const OpportunityCostPPCDiagram = ({ type, title }: OpportunityCostPPCDiagramProps) => {
  const p = plotBox(560, 410);
  const f = type === 'increasing' ? concave : linear;
  const color = type === 'increasing' ? C.demand : C.supply;

  const goodX = type === 'increasing' ? 'Computers' : 'Basketballs';
  const goodY = type === 'increasing' ? 'Microwave ovens' : 'Volleyballs';

  const qs = [0, 30, 60, 90];
  const rows = qs.slice(1).map((q, i) => {
    const prev = qs[i];
    return {
      step: `${prev} → ${q}`,
      from: f(prev),
      to: f(q),
      cost: f(prev) - f(q),
    };
  });

  const marks = qs.map((q) => ({ q, y: f(q) }));

  return (
    <DiagramFrame
      title={title ?? (type === 'increasing' ? 'Increasing Opportunity Cost (Concave PPC)' : 'Constant Opportunity Cost (Linear PPC)')}
      eyebrow={type === 'increasing' ? 'Imperfect factor substitutability' : 'Perfectly substitutable factors'}
      legend={[
        { label: type === 'increasing' ? 'PPC — bowed outwards' : 'PPC — straight line', color },
        { label: 'Output combinations A → D', color: C.marker, kind: 'dot' },
        { label: 'Capital goods sacrificed', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        type === 'increasing' ? (
          <>
            Each extra 30 {goodX.toLowerCase()} costs progressively more {goodY.toLowerCase()}:{' '}
            {rows.map((r) => r.cost.toFixed(1)).join(', then ')}. Resources are specialised, so the factors
            switched first are the ones least suited to producing {goodY.toLowerCase()} — the law of increasing
            opportunity cost, which is why real-world PPCs are bowed outwards.
          </>
        ) : (
          <>
            Every extra {goodX.toLowerCase().slice(0, -1)} costs exactly {rows[0].cost.toFixed(1)} /30 ={' '}
            {(rows[0].cost / 30).toFixed(2)} {goodY.toLowerCase()} at any point on the line. Constant opportunity
            cost only holds when resources are perfectly substitutable between the two goods — a simplifying
            assumption, not the general case.
          </>
        )
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="space-y-4">
          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label={`${type} opportunity cost production possibility curve`}>
            <Axes p={p} id={`oc-ppc-${type}`} labelX={`${goodX} (units)`} labelY={`${goodY} (units)`} />

            <motion.path
              d={curve(p, f, 0, MAX)}
              fill="none"
              stroke={color}
              strokeWidth={2.6}
              strokeLinecap="round"
              {...revealPath(0)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />

            {/* Sacrifice steps */}
            {rows.map((r, i) => {
              const q0 = qs[i];
              const q1 = qs[i + 1];
              return (
                <motion.g key={r.step} {...revealFade(i + 1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
                  <rect
                    x={p.x(q0)}
                    y={p.y(r.from)}
                    width={p.x(q1) - p.x(q0)}
                    height={p.y(r.to) - p.y(r.from)}
                    fill={C.welfareLoss}
                    opacity={0.12}
                  />
                  <line x1={p.x(q1)} y1={p.y(r.from)} x2={p.x(q1)} y2={p.y(r.to)} stroke={C.welfareLoss} strokeWidth={1.4} strokeDasharray="4 3" />
                  <line x1={p.x(q0)} y1={p.y(r.from)} x2={p.x(q1)} y2={p.y(r.from)} stroke={C.marker} strokeWidth={1.1} strokeDasharray="4 3" opacity={0.8} />
                  <text x={p.x(q1) + 6} y={(p.y(r.from) + p.y(r.to)) / 2 + 4} fill={C.welfareLoss} fontSize={11} fontWeight={600}>
                    −{r.cost.toFixed(1)}
                  </text>
                </motion.g>
              );
            })}

            {marks.map((m, i) => (
              <motion.g key={m.q} {...revealPoint(i)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
                <circle cx={p.x(m.q)} cy={p.y(m.y)} r={5.5} fill={C.marker} />
                <text x={p.x(m.q) - 14} y={p.y(m.y) - 9} fill={C.marker} fontSize={12} fontWeight={700}>
                  {String.fromCharCode(65 + i)}
                </text>
              </motion.g>
            ))}
          </svg>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-xs">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="py-1.5 text-left font-medium">Move along PPC ({goodX.toLowerCase()})</th>
                  <th className="py-1.5 text-right font-medium">{goodY} before</th>
                  <th className="py-1.5 text-right font-medium">{goodY} after</th>
                  <th className="py-1.5 text-right font-medium">Opportunity cost</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.step} className="border-t border-primary/10">
                    <td className="py-1.5 text-left">{r.step}</td>
                    <td className="py-1.5 text-right">{r.from.toFixed(1)}</td>
                    <td className="py-1.5 text-right">{r.to.toFixed(1)}</td>
                    <td className="py-1.5 text-right font-semibold" style={{ color: C.welfareLoss }}>
                      {r.cost.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default OpportunityCostPPCDiagram;
