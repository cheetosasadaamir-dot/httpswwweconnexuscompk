import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint, stage } from './diagramStyle';

interface PPCConceptDiagramProps {
  showGrowth?: boolean;
  showPivot?: boolean;
  title?: string;
}

const MAX = 90;
/** Concave (bowed-out) frontier: Y = MAX·sqrt(1 − (Q/MAX)²) — increasing opportunity cost. */
const ppf = (q: number) => MAX * Math.sqrt(Math.max(0, 1 - (q / MAX) ** 2));
const shifted = (k: number) => (q: number) => (MAX * k) * Math.sqrt(Math.max(0, 1 - (q / (MAX * k)) ** 2));
const pivoted = (q: number) => {
  const qm = MAX * 1.3;
  return MAX * Math.sqrt(Math.max(0, 1 - (q / qm) ** 2));
};

/**
 * The core PPC teaching diagram: efficient points on the frontier, an
 * inefficient point inside it and an unattainable point beyond it.
 * Geometry follows the standard concave frontier used by tutor2u /
 * Economics Online, so the trade-off worsens as Q rises.
 */
const PPCConceptDiagram = ({ showGrowth = false, showPivot = false, title }: PPCConceptDiagramProps) => {
  const p = plotBox(560, 410);

  // Efficient point A on the frontier
  const aQ = 54;
  const aP = ppf(aQ); // 72.0
  // Inefficient point B (inside), unattainable point C (outside)
  const bQ = 34, bP = 40;
  const cQ = 74, cP = 76;

  return (
    <DiagramFrame
      title={title ?? 'The Production Possibility Curve'}
      eyebrow="Scarcity, choice and opportunity cost"
      legend={[
        { label: 'PPC (frontier of attainable output)', color: C.demand },
        ...(showGrowth ? [{ label: 'PPC₂ after economic growth', color: C.social, dashed: true }] : []),
        ...(showPivot ? [{ label: 'PPC₂ after capital-good-specific gain', color: C.supply, dashed: true }] : []),
        { label: 'A — productively efficient', color: C.marker, kind: 'dot' as const },
        { label: 'B — inside the curve (unemployed resources)', color: C.intervention, kind: 'dot' as const },
        { label: 'C — unattainable with current resources', color: C.muted, kind: 'dot' as const },
      ]}
      note={
        <>
          Every point <em>on</em> the curve is productively efficient: more consumer goods can only be had by
          giving up capital goods. Point <strong>B</strong> is attainable but wasteful — resources are unemployed
          or misallocated. Point <strong>C</strong> lies beyond the frontier and needs more resources or better
          technology. The curve is bowed outwards because factors are not perfectly substitutable, so the
          opportunity cost of each extra unit rises.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label="Production possibility curve with efficient, inefficient and unattainable points">
          <Axes p={p} id="ppc-concept" labelX="Consumer goods (units per period)" labelY="Capital goods (units per period)" />

          {/* attainable region */}
          <motion.path
            d={`${curve(p, ppf, 0, MAX)} L ${p.x(0)} ${p.y(0)} Z`}
            fill={C.demand}
            opacity={0.08}
            {...revealFade(0)}
            animate={play ? { opacity: 0.08 } : { opacity: 0 }}
          />

          {(showGrowth || showPivot) && (
            <motion.path
              d={curve(p, showGrowth ? shifted(1.22) : pivoted, 0, showGrowth ? MAX * 1.22 : MAX * 1.3)}
              fill="none"
              stroke={showGrowth ? C.social : C.supply}
              strokeWidth={2.2}
              strokeDasharray="7 4"
              {...revealPath(3)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
          )}

          <motion.path
            d={curve(p, ppf, 0, MAX)}
            fill="none"
            stroke={C.demand}
            strokeWidth={2.6}
            strokeLinecap="round"
            {...revealPath(0)}
            animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          />
          <motion.text x={p.x(MAX * 0.78)} y={p.y(ppf(MAX * 0.78)) - 10} fill={C.demand} fontSize={12} fontWeight={600} {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            PPC₁
          </motion.text>

          {/* Point A */}
          <Guides p={p} qx={aQ} py={aP} color={C.marker} xLabel="Qc" yLabel="Qk" />
          <motion.circle cx={p.x(aQ)} cy={p.y(aP)} r={6} fill={C.marker} {...revealPoint(1)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} />
          <motion.text x={p.x(aQ) + 10} y={p.y(aP) - 8} fill={C.marker} fontSize={13} fontWeight={700} {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>A</motion.text>

          {/* Point B */}
          <motion.circle cx={p.x(bQ)} cy={p.y(bP)} r={6} fill={C.intervention} {...revealPoint(2)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} />
          <motion.text x={p.x(bQ) + 10} y={p.y(bP) + 5} fill={C.intervention} fontSize={13} fontWeight={700} {...revealFade(2)} animate={play ? { opacity: 1 } : { opacity: 0 }}>B</motion.text>
          <motion.text x={p.x(bQ) + 22} y={p.y(bP) + 20} fill={C.muted} fontSize={10} {...revealFade(2)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            inefficient / spare capacity
          </motion.text>

          {/* Point C */}
          <motion.circle cx={p.x(cQ)} cy={p.y(cP)} r={6} fill={C.muted} {...revealPoint(2)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} />
          <motion.text x={p.x(cQ) + 10} y={p.y(cP) - 6} fill={C.muted} fontSize={13} fontWeight={700} {...revealFade(2)} animate={play ? { opacity: 1 } : { opacity: 0 }}>C</motion.text>
          <motion.text x={p.x(cQ) - 78} y={p.y(cP) - 18} fill={C.muted} fontSize={10} {...revealFade(2)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            unattainable today
          </motion.text>

          {/* Intercepts */}
          <motion.text x={p.x(0) - 8} y={p.y(MAX) + 4} fill={C.axis} fontSize={11} textAnchor="end" {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            {MAX}
          </motion.text>
          <motion.text x={p.x(MAX)} y={p.y(0) + 16} fill={C.axis} fontSize={11} textAnchor="middle" {...revealFade(1)} animate={play ? { opacity: 1 } : { opacity: 0 }}>
            {MAX}
          </motion.text>

          {(showGrowth || showPivot) && (
            <motion.text
              x={p.x(MAX * 0.5)}
              y={p.y(showGrowth ? shifted(1.22)(MAX * 0.5) : pivoted(MAX * 0.5)) - 10}
              fill={showGrowth ? C.social : C.supply}
              fontSize={12}
              fontWeight={600}
              transition={{ delay: stage(4) }}
              initial={{ opacity: 0 }}
              animate={play ? { opacity: 1 } : { opacity: 0 }}
            >
              PPC₂
            </motion.text>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default PPCConceptDiagram;
