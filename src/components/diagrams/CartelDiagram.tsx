import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Collusive oligopoly: the cartel acts as a joint monopolist, and each member
 * then has a private incentive to cheat on its quota.
 *
 * INDUSTRY  D  : P = 100 − 0.8Q      MR : P = 100 − 1.6Q
 *           MC : P = 20 + 0.4Q  (horizontal sum of 10 identical members)
 *           MR = MC → 100 − 1.6Q = 20 + 0.4Q → Q = 40, P = 68
 *
 * MEMBER    own MC = 20 + 4q  (10 firms: q = (MC − 20)/4 ⇒ Q = 2.5(MC − 20) ✓ consistent)
 *           quota q = 4, where MC = 36 = industry MC at Q = 40
 *           cheating: treat P = 68 as given → MC = P → 20 + 4q = 68 → q = 12
 *           i.e. three times its quota, which is why cartels break down.
 */
const CartelDiagram = () => {
  const p = plotBox();
  const { x, y } = p;
  const seg = (f: (q: number) => number, a: number, b: number, sx: (q: number) => number = x) =>
    `M ${sx(a)} ${y(f(a))} L ${sx(b)} ${y(f(b))}`;

  const D = (q: number) => 100 - 0.8 * q;
  const MRi = (q: number) => 100 - 1.6 * q;
  const MCi = (q: number) => 20 + 0.4 * q;

  const K = 100 / 16; // firm output 0–16
  const gx = (q: number) => x(q * K);
  const MCf = (q: number) => 20 + 4 * q;

  return (
    <DiagramFrame
      title="Cartel: Joint Profit Maximisation and the Incentive to Cheat"
      eyebrow="Figure — the industry behaves as a monopolist, each member as a price taker"
      legend={[
        { label: 'Industry demand (AR)', color: C.demand },
        { label: 'Industry MR', color: C.supply },
        { label: 'MC (industry, then the individual member)', color: C.social },
        { label: 'Cartel price P = 68', color: C.marker },
        { label: 'Gain from cheating', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          A cartel suppresses competition by setting a joint output and dividing it into quotas, so the group
          behaves exactly like a monopolist: industry MR = MC at Q = 40, giving a price of 68 — far above the
          competitive level. Each of the ten members receives a quota of 4 units, where its own marginal cost
          is 36. The instability is visible in the right-hand panel: taking the cartel price of 68 as
          <em> given</em>, an individual member maximises its own profit where its MC equals 68, at q = 12 —
          three times its quota. The shaded wedge between price and its MC is the private gain from
          <strong> secretly cheating</strong>. Since every member faces the same temptation, output creeps up,
          the price collapses and the agreement breaks down — the classic <strong>prisoner's dilemma</strong>
          in which collective rationality and individual rationality diverge. Cartels therefore survive only
          with few firms, a homogeneous product, transparent and easily monitored output, stable demand and
          credible punishment strategies (tit-for-tat), which is why OPEC quota discipline weakens in every
          downturn. Cartels are per se illegal in the UK and EU, and leniency programmes deliberately sharpen
          the incentive to defect by rewarding the first member to confess.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
          {play && (
            <>
              <div className="flex-1">
                <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  The cartel as a joint monopolist
                </p>
                <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[300px]" role="img"
                  aria-label="Cartel industry equilibrium where industry marginal revenue equals industry marginal cost">
                  <Axes p={p} id="cartel-ind" labelX="Industry output (Q)" labelY="Price, Costs, Revenue" />
                  <motion.path d={seg(D, 0, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
                  <motion.text x={x(100) + 4} y={y(D(100))} fill={C.demand} fontSize={11} {...revealFade(1)}>D = AR</motion.text>
                  <motion.path d={seg(MRi, 0, 62.5)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(1)} />
                  <motion.text x={x(62.5) + 4} y={y(0) - 4} fill={C.supply} fontSize={11} {...revealFade(2)}>MR</motion.text>
                  <motion.path d={seg(MCi, 0, 100)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(2)} />
                  <motion.text x={x(100) + 4} y={y(MCi(100))} fill={C.social} fontSize={11} {...revealFade(3)}>MC</motion.text>
                  <motion.g {...revealFade(4)}>
                    <Guides p={p} qx={40} py={68} color={C.marker} xLabel="Q = 40" yLabel="P = 68" />
                  </motion.g>
                  <motion.circle cx={x(40)} cy={y(68)} r={5} fill={C.marker} {...revealPoint(5)} />
                  <motion.circle cx={x(40)} cy={y(36)} r={4} fill={C.social} {...revealPoint(5)} />
                  <motion.text x={x(41)} y={y(36) + 14} fill={C.social} fontSize={10} {...revealFade(6)}>MR = MC at 36</motion.text>
                </svg>
              </div>

              <div className="flex-1">
                <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  One member: quota versus cheating
                </p>
                <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[300px]" role="img"
                  aria-label="Individual cartel member with a quota of four units and an incentive to expand to twelve units">
                  <Axes p={p} id="cartel-firm" labelX="Member output (q)" labelY="Price, Costs, Revenue" />
                  <motion.path d={`M ${gx(4)} ${y(68)} L ${gx(12)} ${y(68)} L ${gx(12)} ${y(MCf(12))} L ${gx(4)} ${y(MCf(4))} Z`}
                    fill={C.welfareLoss} opacity={0.12} {...revealFade(4)} />
                  <motion.path d={`M ${gx(0)} ${y(68)} L ${gx(16)} ${y(68)}`} fill="none" stroke={C.demand}
                    strokeWidth={2.4} {...revealPath(0)} />
                  <motion.text x={gx(16) + 4} y={y(68) - 6} fill={C.demand} fontSize={10} {...revealFade(1)}>P = 68</motion.text>
                  <motion.path d={seg(MCf, 0, 16, gx)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(1)} />
                  <motion.text x={gx(16) + 4} y={y(MCf(16))} fill={C.social} fontSize={11} {...revealFade(2)}>MC</motion.text>
                  <motion.g {...revealFade(3)}>
                    <Guides p={p} qx={4 * K} py={36} color={C.marker} xLabel="quota q = 4" yLabel="MC = 36" />
                  </motion.g>
                  <motion.circle cx={gx(4)} cy={y(36)} r={5} fill={C.marker} {...revealPoint(4)} />
                  <motion.circle cx={gx(12)} cy={y(68)} r={5} fill={C.welfareLoss} {...revealPoint(6)} />
                  <line x1={gx(12)} y1={y(68)} x2={gx(12)} y2={y(0)} stroke={C.welfareLoss} strokeDasharray="4 3" strokeWidth={1} />
                  <motion.text x={gx(12)} y={y(0) + 15} fill={C.welfareLoss} fontSize={10} textAnchor="middle" {...revealFade(7)}>
                    cheat q = 12
                  </motion.text>
                  <motion.text x={gx(6)} y={y(52)} fill={C.welfareLoss} fontSize={10} {...revealFade(7)}>gain from cheating</motion.text>
                </svg>
              </div>
            </>
          )}
        </div>
      )}
    </DiagramFrame>
  );
};

export default CartelDiagram;
