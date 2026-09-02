import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Elasticity of demand for labour: the same wage rise (40 → 48) on two MRP
 * curves that pass through the common point (L = 40, W = 40).
 *   Inelastic MRP: W = 120 − 2L      → at W = 48, L = 36  (−10%)
 *   Elastic  MRP: W = 56 − 0.4L      → at W = 48, L = 20  (−50%)
 */
const panel = (kind: 'inelastic' | 'elastic') => {
  const inelastic = kind === 'inelastic';
  const f = inelastic ? (L: number) => 120 - 2 * L : (L: number) => 56 - 0.4 * L;
  const L2 = inelastic ? 36 : 20;
  const from = inelastic ? 12 : 0;
  const to = inelastic ? 56 : 100;
  return { f, L2, from, to };
};

const W1 = 40, W2 = 48, L1 = 40;

const Panel = ({ kind, play }: { kind: 'inelastic' | 'elastic'; play: boolean }) => {
  const p = plotBox();
  const { x, y, m, ch } = p;
  const { f, L2, from, to } = panel(kind);
  const colour = kind === 'inelastic' ? C.demand : C.supply;

  return (
    <div className="flex-1">
      <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {kind === 'inelastic' ? 'Inelastic demand for labour' : 'Elastic demand for labour'}
      </p>
      <svg
        viewBox={`0 0 ${p.W} ${p.H}`}
        className="mx-auto h-auto w-full min-w-[300px]"
        role="img"
        aria-label={`${kind} demand for labour: the same wage rise causes a ${kind === 'inelastic' ? 'small' : 'large'} fall in employment`}
      >
        <Axes p={p} id={`eld-${kind}`} labelX="Quantity of labour (L)" labelY="Wage rate (W)" />
        {play && (
          <>
            <motion.path
              d={`M ${x(from)} ${y(f(from))} L ${x(to)} ${y(f(to))}`}
              fill="none"
              stroke={colour}
              strokeWidth={2.6}
              {...revealPath(0)}
            />
            <motion.text x={x(to) - 40} y={y(f(to)) - 8} fill={colour} fontSize={11} {...revealFade(1)}>
              D = MRP
            </motion.text>

            <motion.g {...revealFade(2)}>
              <Guides p={p} qx={L1} py={W1} color={C.muted} xLabel="L₁" yLabel="W₁" />
              <Guides p={p} qx={L2} py={W2} color={C.marker} xLabel="L₂" yLabel="W₂" />
            </motion.g>
            <motion.circle cx={x(L1)} cy={y(W1)} r={4.5} fill={C.muted} {...revealPoint(3)} />
            <motion.circle cx={x(L2)} cy={y(W2)} r={5} fill={C.marker} {...revealPoint(3)} />

            <motion.text
              x={(x(L1) + x(L2)) / 2}
              y={m.t + ch + 32}
              fill={C.welfareLoss}
              fontSize={10}
              textAnchor="middle"
              {...revealFade(4)}
            >
              ΔL = {kind === 'inelastic' ? '−10%' : '−50%'}
            </motion.text>
          </>
        )}
      </svg>
    </div>
  );
};

const ElasticityLabourDemandDiagram = () => (
  <DiagramFrame
    title="Elasticity of Demand for Labour"
    eyebrow="Figure — Same 20% wage rise, very different job losses"
    legend={[
      { label: 'Inelastic MRP (steep)', color: C.demand },
      { label: 'Elastic MRP (flat)', color: C.supply },
      { label: 'New wage / employment', color: C.marker, kind: 'dot' },
    ]}
    note={
      <>
        Both panels show an identical wage rise from W<sub>1</sub> = 40 to W<sub>2</sub> = 48. With{' '}
        <strong>inelastic</strong> labour demand employment falls only 10%; with <strong>elastic</strong>{' '}
        demand it collapses by 50%. Demand for labour is more elastic when: (1) the{' '}
        <strong>product's own demand is price elastic</strong>, so cost-driven price rises destroy sales
        (derived demand); (2) <strong>capital substitutes easily</strong> for labour — self-checkouts,
        robotic welding, AI-assisted drafting; (3) <strong>labour is a large share of total costs</strong>,
        so wages dominate the cost structure; and (4) the <strong>time period is long</strong>, since
        contracts, retraining and re-tooling take time. This elasticity is the pivot of every evaluation
        on minimum wages, union militancy and payroll taxes: the more inelastic labour demand is, the more
        of a wage increase workers actually keep in jobs rather than lose.
      </>
    }
  >
    {({ play, runKey }) => (
      <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
        <Panel kind="inelastic" play={play} />
        <Panel kind="elastic" play={play} />
      </div>
    )}
  </DiagramFrame>
);

export default ElasticityLabourDemandDiagram;
