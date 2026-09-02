import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Natural monopoly and the regulator's dilemma.
 *
 * TC = 2000 + 10Q  →  AC = 2000/Q + 10 (falls throughout), MC = 10 (constant)
 * AR = 100 − 0.9Q, MR = 100 − 1.8Q     (Q plotted 0–110 on the 0–100 scale)
 *
 * Unregulated profit max : MR = MC → Q = 50, P = 55, AC = 50 → profit 250
 * Average-cost pricing   : P = AC   → 0.9Q² − 90Q + 2000 = 0 → Q = 66.7, P = AC = 40
 * Marginal-cost pricing  : P = MC   → Q = 100, AC = 30 → loss per unit 20
 *                          total loss 2000 = the fixed cost, so the subsidy needed
 *                          is exactly the fixed cost of the network.
 */
const NaturalMonopolyDiagram = () => {
  const p = plotBox();
  const { x, y } = p;
  const K = 100 / 110;
  const fx = (q: number) => x(q * K);
  const fc = (f: (q: number) => number, a: number, b: number) =>
    curve(p, (v) => f(v / K), a * K, b * K, 140);
  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${fx(a)} ${y(f(a))} L ${fx(b)} ${y(f(b))}`;

  const AR = (q: number) => 100 - 0.9 * q;
  const MR = (q: number) => 100 - 1.8 * q;
  const AC = (q: number) => 2000 / q + 10;
  const MC = 10;

  return (
    <DiagramFrame
      title="Natural Monopoly: Falling Average Cost and the Regulator's Dilemma"
      eyebrow="Figure — one firm can supply the whole market more cheaply than several"
      legend={[
        { label: 'AR = D', color: C.demand },
        { label: 'MR', color: C.supply },
        { label: 'AC (falling throughout — huge fixed costs)', color: C.intervention },
        { label: 'MC (constant)', color: C.social },
        { label: 'Unregulated profit', color: C.revenue, kind: 'area' },
        { label: 'Loss under MC pricing (needs subsidy)', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          A <strong>natural monopoly</strong> exists where fixed costs are so large relative to demand that
          average cost is still falling where AC cuts demand — water pipes, the National Grid, rail track.
          Splitting the industry would <em>duplicate</em> the network and raise costs, so competition
          <em> in</em> the market is wasteful. Unregulated, the firm sets MC = MR at Q = 50, charges 55 and
          earns supernormal profit of 250 (gold), with P far above MC. The regulator has two options.
          <strong> Marginal-cost pricing</strong> (P = MC = 10, Q = 100) delivers full allocative efficiency,
          but because AC (30) still exceeds MC the firm makes a loss of 2000 — exactly its fixed cost — so it
          survives only with a state subsidy funded by distortionary taxation. <strong>Average-cost pricing</strong>
          (P = AC = 40, Q = 66.7) is the practical compromise used by UK regulators such as Ofwat and Ofgem
          under RPI − X price caps: the firm breaks even with normal profit, output is far above the monopoly
          level, but some allocative inefficiency remains since P still exceeds MC. Evaluate through
          <strong> regulatory capture</strong>, asymmetric information about true costs, and the risk that an
          aggressive X factor starves the network of the investment dynamic efficiency requires.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Natural monopoly diagram comparing unregulated pricing, average cost pricing and marginal cost pricing">
          <Axes p={p} id="natmono" labelX="Output (Q)" labelY="Price, Costs, Revenue" />
          {play && (
            <>
              <motion.rect x={fx(0)} y={y(55)} width={fx(50) - fx(0)} height={y(50) - y(55)}
                fill={C.revenue} opacity={0.25} {...revealFade(4)} />
              <motion.rect x={fx(0)} y={y(30)} width={fx(100) - fx(0)} height={y(MC) - y(30)}
                fill={C.welfareLoss} opacity={0.14} {...revealFade(6)} />

              <motion.path d={seg(AR, 0, 110)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
              <motion.text x={fx(110) + 2} y={y(AR(110)) + 12} fill={C.demand} fontSize={11} {...revealFade(1)}>AR</motion.text>

              <motion.path d={seg(MR, 0, 55)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(1)} />
              <motion.text x={fx(55) + 4} y={y(0) - 4} fill={C.supply} fontSize={11} {...revealFade(2)}>MR</motion.text>

              <motion.path d={fc(AC, 24, 110)} fill="none" stroke={C.intervention} strokeWidth={2.4} {...revealPath(2)} />
              <motion.text x={fx(110) + 2} y={y(AC(110)) - 6} fill={C.intervention} fontSize={11} {...revealFade(3)}>AC</motion.text>

              <motion.path d={`M ${fx(0)} ${y(MC)} L ${fx(110)} ${y(MC)}`} fill="none" stroke={C.social}
                strokeWidth={2.4} {...revealPath(3)} />
              <motion.text x={fx(110) + 2} y={y(MC) + 4} fill={C.social} fontSize={11} {...revealFade(4)}>MC</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={50 * K} py={55} color={C.marker} xLabel="Q = 50" yLabel="P = 55" />
              </motion.g>
              <motion.circle cx={fx(50)} cy={y(55)} r={5} fill={C.marker} {...revealPoint(5)} />
              <motion.text x={fx(52)} y={y(64)} fill={C.marker} fontSize={10} {...revealFade(5)}>unregulated</motion.text>

              <motion.g {...revealFade(6)}>
                <Guides p={p} qx={66.7 * K} py={40} color={C.welfareGain} xLabel="Q = 66.7" yLabel="P = AC = 40" />
              </motion.g>
              <motion.circle cx={fx(66.7)} cy={y(40)} r={5} fill={C.welfareGain} {...revealPoint(6)} />
              <motion.text x={fx(68)} y={y(46)} fill={C.welfareGain} fontSize={10} {...revealFade(7)}>AC pricing</motion.text>

              <motion.circle cx={fx(100)} cy={y(MC)} r={5} fill={C.demandAlt} {...revealPoint(7)} />
              <motion.text x={fx(80)} y={y(MC) - 8} fill={C.demandAlt} fontSize={10} {...revealFade(8)}>
                MC pricing: Q = 100, subsidy = 2000
              </motion.text>
              <motion.text x={fx(78) + 4} y={y(0) + 15} fill={C.demandAlt} fontSize={10} textAnchor="middle" {...revealFade(8)}>Q = 100</motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default NaturalMonopolyDiagram;
