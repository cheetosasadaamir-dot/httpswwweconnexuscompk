import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface SystemComparisonPPCDiagramProps {
  title?: string;
}

const MAX = 88;
const ppf = (q: number) => MAX * Math.sqrt(Math.max(0, 1 - (q / MAX) ** 2));
/** Point on the frontier at a given share of the horizontal-axis good. */
const at = (share: number) => {
  const q = MAX * share;
  return { q, y: ppf(q) };
};

/**
 * One frontier, three allocation choices. The PPC itself does not change
 * between systems — what changes is which point on it society selects and
 * how that choice is made.
 */
const SystemComparisonPPCDiagram = ({ title }: SystemComparisonPPCDiagramProps) => {
  const p = plotBox(560, 410);

  const market = { ...at(0.86), label: 'M', name: 'Market economy', color: C.demand, blurb: 'Price signals and profit push resources into private goods' };
  const mixed = { ...at(0.62), label: 'X', name: 'Mixed economy', color: C.marker, blurb: 'Markets allocate most output; the state funds merit and public goods' };
  const planned = { ...at(0.28), label: 'P', name: 'Planned economy', color: C.intervention, blurb: 'Central planners direct resources into state-provided goods' };
  const points = [planned, mixed, market];

  return (
    <DiagramFrame
      title={title ?? 'PPC: Resource Allocation by Economic System'}
      eyebrow="Same frontier, different chosen point"
      legend={[
        { label: 'PPC — attainable combinations', color: C.axis },
        ...points.map((pt) => ({ label: `${pt.label} — ${pt.name}`, color: pt.color, kind: 'dot' as const })),
      ]}
      note={
        <>
          All three systems face the identical constraint; they differ only in <em>how</em> the point is chosen.
          A market economy answers &quot;what, how and for whom&quot; through prices and profit (point M, public
          goods under-provided). A planned economy answers them by directive (point P, high state provision but
          weak incentives and information failure). A mixed economy combines both (point X). Note that a system
          with poor incentives may not even reach the frontier — it operates inside it.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="space-y-4">
          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label="Production possibility curve comparing allocations under market, mixed and planned systems">
            <Axes p={p} id="sys-ppc" labelX="Private goods (units)" labelY="Public & merit goods (units)" />

            <motion.path
              d={curve(p, ppf, 0, MAX)}
              fill="none"
              stroke={C.axis}
              strokeWidth={2.4}
              {...revealPath(0)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />

            {points.map((pt, i) => (
              <motion.g key={pt.label} {...revealPoint(i + 1)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
                <Guides p={p} qx={pt.q} py={pt.y} color={pt.color} />
                <circle cx={p.x(pt.q)} cy={p.y(pt.y)} r={6} fill={pt.color} />
                <text x={p.x(pt.q) + 10} y={p.y(pt.y) - 8} fill={pt.color} fontSize={13} fontWeight={700}>
                  {pt.label}
                </text>
              </motion.g>
            ))}

            <motion.text x={p.x(MAX * 0.2)} y={p.y(ppf(MAX * 0.2)) - 12} fill={C.axis} fontSize={12} fontWeight={600} {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
              PPC
            </motion.text>
          </svg>

          <div className="grid gap-2 sm:grid-cols-3">
            {points.map((pt) => (
              <div key={pt.label} className="rounded-lg border-l-2 p-3" style={{ borderColor: pt.color, backgroundColor: `${pt.color}12` }}>
                <p className="text-xs font-semibold" style={{ color: pt.color }}>
                  {pt.label} · {pt.name}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{pt.blurb}</p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                  private {pt.q.toFixed(0)} · public {pt.y.toFixed(0)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default SystemComparisonPPCDiagram;
