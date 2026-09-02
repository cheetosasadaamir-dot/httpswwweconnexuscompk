import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Union (or national minimum wage) in a COMPETITIVE labour market.
 * S: W = 10 + 0.8L    D = MRP: W = 90 − 0.8L
 * Free-market equilibrium: L* = 50, W* = 50
 * Union wage floor Wu = 70:  Ld = (90 − 70)/0.8 = 25,  Ls = (70 − 10)/0.8 = 75
 * Excess supply of labour (unemployment) = 75 − 25 = 50.
 */
const TradeUnionCompetitiveDiagram = () => {
  const p = plotBox();
  const { x, y, m, ch } = p;

  const S = (L: number) => 10 + 0.8 * L;
  const D = (L: number) => 90 - 0.8 * L;
  const Le = 50, We = 50;
  const Wu = 70, Ld = 25, Ls = 75;

  const seg = (f: (L: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Trade Union / Minimum Wage in a Competitive Labour Market"
      eyebrow="Figure — A wage floor above equilibrium creates excess supply"
      legend={[
        { label: 'S(L) = labour supply', color: C.supply },
        { label: 'D(L) = MRP', color: C.demand },
        { label: 'Union / minimum wage floor', color: C.intervention, dashed: true },
        { label: 'Free-market equilibrium', color: C.marker, kind: 'dot' },
        { label: 'Excess supply (unemployment)', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          A competitive labour market clears at W* = 50 with 50 workers employed. If a union bargains a
          wage of W<sub>u</sub> = 70 — or the government sets a national minimum wage at that level — the
          effective supply curve becomes horizontal at W<sub>u</sub> up to L<sub>s</sub> = 75 and then
          follows S(L). Firms move up their MRP curve and cut employment to L<sub>d</sub> = 25, while 75
          workers now want jobs. The shaded gap of <strong>50 workers is excess supply</strong>: the
          classical prediction that a wage floor in a competitive market causes{' '}
          <strong>real-wage (classical) unemployment</strong>. Two evaluation points matter. First, the
          size of the job loss depends entirely on the <strong>elasticity of demand for labour</strong> —
          inelastic demand (labour a small share of costs, few substitutes, inelastic product demand)
          means only a small fall in employment. Second, higher pay may raise{' '}
          <strong>productivity and motivation</strong> (efficiency wage theory) and cut turnover, shifting
          MRP right and offsetting the contraction — which is why UK evidence on the National Living Wage
          has found far smaller employment effects than this model predicts.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Competitive labour market with a union wage floor above equilibrium causing excess supply of labour"
        >
          <Axes p={p} id="tuc" labelX="Quantity of labour (L)" labelY="Wage rate (W)" />
          {play && (
            <>
              <motion.rect
                x={x(Ld)}
                y={y(Wu) - 9}
                width={x(Ls) - x(Ld)}
                height={18}
                fill={C.welfareLoss}
                opacity={0.18}
                {...revealFade(5)}
              />

              <motion.path d={seg(S, 0, 100)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(0)} />
              <motion.path d={seg(D, 0, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(1)} />
              <motion.text x={x(100) + 4} y={y(S(100))} fill={C.supply} fontSize={11} {...revealFade(1)}>
                S(L)
              </motion.text>
              <motion.text x={x(100) + 4} y={y(D(100))} fill={C.demand} fontSize={11} {...revealFade(2)}>
                D = MRP
              </motion.text>

              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Le} py={We} color={C.marker} xLabel="L* = 50" yLabel="W* = 50" />
              </motion.g>
              <motion.circle cx={x(Le)} cy={y(We)} r={5} fill={C.marker} {...revealPoint(3)} />

              {/* wage floor */}
              <motion.path
                d={`M ${x(0)} ${y(Wu)} L ${x(100)} ${y(Wu)}`}
                fill="none"
                stroke={C.intervention}
                strokeWidth={2.2}
                strokeDasharray="6 4"
                {...revealPath(4, 0.7)}
              />
              <motion.text x={m.l - 8} y={y(Wu) + 4} fill={C.intervention} fontSize={11} textAnchor="end" {...revealFade(4)}>
                Wᵤ = 70
              </motion.text>

              <motion.g {...revealFade(5)}>
                <line x1={x(Ld)} y1={y(Wu)} x2={x(Ld)} y2={m.t + ch} stroke={C.demand} strokeDasharray="4 3" strokeWidth={1.1} />
                <line x1={x(Ls)} y1={y(Wu)} x2={x(Ls)} y2={m.t + ch} stroke={C.supply} strokeDasharray="4 3" strokeWidth={1.1} />
                <text x={x(Ld)} y={m.t + ch + 15} fill={C.demand} fontSize={11} textAnchor="middle">
                  L_d = 25
                </text>
                <text x={x(Ls)} y={m.t + ch + 15} fill={C.supply} fontSize={11} textAnchor="middle">
                  L_s = 75
                </text>
                <circle cx={x(Ld)} cy={y(Wu)} r={4.5} fill={C.demand} />
                <circle cx={x(Ls)} cy={y(Wu)} r={4.5} fill={C.supply} />
                <text x={(x(Ld) + x(Ls)) / 2} y={y(Wu) - 14} fill={C.welfareLoss} fontSize={10} textAnchor="middle">
                  excess supply = unemployment
                </text>
              </motion.g>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default TradeUnionCompetitiveDiagram;
