import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * The Kuznets inverted-U: income inequality rises during early
 * industrialisation, peaks, then falls as an economy matures.
 *
 * The curve is a single quadratic in GDP per capita, so the turning point
 * is exact rather than eyeballed.
 */

const p = plotBox(560, 400, { t: 36, r: 58, b: 62, l: 68 });

/** Peak of the inverted U on the income axis. */
const PEAK_Q = 50;
const PEAK_P = 78;
const START_P = 30;

/** Gini-style inequality index as a function of income per head. */
const K = (q: number) => PEAK_P - ((PEAK_P - START_P) / (PEAK_Q * PEAK_Q)) * (q - PEAK_Q) ** 2;

const PHASES: Array<{ from: number; to: number; label: string; color: string }> = [
  { from: 4, to: 34, label: 'Agrarian → industrial', color: C.demand },
  { from: 34, to: 66, label: 'Turning point', color: C.marker },
  { from: 66, to: 96, label: 'Mature / service economy', color: C.social },
];

const KuznetsCurveDiagramInner = () => (
  <DiagramFrame
    title="The Kuznets Curve: Growth and Inequality"
    eyebrow="Development economics · inverted-U hypothesis"
    legend={[
      { label: 'Inequality path', color: C.demand },
      { label: 'Turning point', color: C.marker, kind: 'dot' },
      { label: 'Falling-inequality phase', color: C.social },
    ]}
    note={
      <div className="space-y-1">
        <p>
          Early industrialisation moves workers from low-productivity agriculture into a small,
          high-wage urban sector, widening the income gap. Inequality peaks when that sector is large
          enough that further migration narrows the gap again.
        </p>
        <p>
          Beyond the turning point, mass education, progressive taxation, welfare transfers and union
          bargaining pull inequality down. Evidence is contested: China and much of Latin America saw
          inequality keep rising well past middle income, so treat the curve as a hypothesis to
          evaluate, not a law.
        </p>
      </div>
    }
  >
    {({ play, runKey }) => (
      <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="w-full min-w-[320px]">
        {PHASES.map((ph, i) => (
          <rect
            key={ph.label}
            x={p.x(ph.from)}
            y={p.m.t}
            width={p.x(ph.to) - p.x(ph.from)}
            height={p.ch}
            fill={ph.color}
            opacity={0.05 + i * 0.01}
          />
        ))}

        <Axes
          p={p}
          id="kuznets"
          labelX="GDP per capita (development level)"
          labelY="Income inequality (Gini)"
        />

        {/* rising limb */}
        <motion.path
          d={curve(p, K, 4, PEAK_Q)}
          fill="none" stroke={C.demand} strokeWidth={3}
          {...revealPath(0, 1.1)}
          animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        />
        {/* falling limb */}
        <motion.path
          d={curve(p, K, PEAK_Q, 96)}
          fill="none" stroke={C.social} strokeWidth={3}
          {...revealPath(1, 1.1)}
          animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        />

        {/* turning point */}
        <motion.circle
          cx={p.x(PEAK_Q)} cy={p.y(PEAK_P)} r={6} fill={C.marker}
          {...revealPoint(2)}
          animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        />
        {play && (
          <Guides p={p} qx={PEAK_Q} py={PEAK_P} xLabel="Y*" yLabel="Peak Gini" />
        )}

        {PHASES.map((ph, i) => (
          <motion.text
            key={ph.label}
            x={p.x((ph.from + ph.to) / 2)}
            y={p.m.t + 16}
            textAnchor="middle"
            fill={ph.color}
            fontSize={10}
            {...revealFade(3 + i)}
            animate={play ? { opacity: 1 } : { opacity: 0 }}
          >
            {ph.label}
          </motion.text>
        ))}

        <motion.text
          x={p.x(20)} y={p.y(K(20)) - 12} fill={C.demand} fontSize={11}
          {...revealFade(4)} animate={play ? { opacity: 1 } : { opacity: 0 }}
        >
          Inequality rising
        </motion.text>
        <motion.text
          x={p.x(76)} y={p.y(K(76)) - 12} fill={C.social} fontSize={11} textAnchor="middle"
          {...revealFade(5)} animate={play ? { opacity: 1 } : { opacity: 0 }}
        >
          Inequality falling
        </motion.text>
      </svg>
    )}
  </DiagramFrame>
);

export const KuznetsCurveDiagram = KuznetsCurveDiagramInner;
export default KuznetsCurveDiagramInner;
