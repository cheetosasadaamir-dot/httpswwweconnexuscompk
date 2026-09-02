import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Baumol's contestable markets: the threat of hit-and-run entry disciplines a monopolist.
 *
 * AR = 100 − 1.2Q, MR = 100 − 2.4Q, constant LRAC = MC = 40 (no sunk costs).
 *
 * Non-contestable monopoly : MR = MC → 100 − 2.4Q = 40 → Q = 25, P = 70
 *                            supernormal profit = (70 − 40) × 25 = 750
 * Perfectly contestable    : entry threat forces P = AC = 40 → Q = 50
 *                            normal profit only, and P = MC so allocatively efficient
 */
const ContestableMarketsDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const AR = (q: number) => 100 - 1.2 * q;
  const MR = (q: number) => 100 - 2.4 * q;
  const AC = 40;

  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Contestable Markets: The Threat of Entry Replaces Actual Competition"
      eyebrow="Figure — sunk costs, not the number of firms, determine pricing"
      legend={[
        { label: 'AR = D', color: C.demand },
        { label: 'MR', color: C.supply },
        { label: 'LRAC = MC (constant returns, no sunk costs)', color: C.social },
        { label: 'Profit destroyed by hit-and-run entry', color: C.revenue, kind: 'area' },
        { label: 'Contestable outcome P = AC = MC', color: C.welfareGain, kind: 'dot' },
      ]}
      note={
        <>
          A market is <strong>perfectly contestable</strong> when entry is free, exit is costless and there are
          no <strong>sunk costs</strong> — costs that cannot be recovered on leaving. Left undisturbed, the sole
          incumbent would behave as a monopolist: MC = MR at Q = 25, price 70 and supernormal profit of 750
          (gold rectangle). But that profit is a signal. A rival can enter, undercut, capture the profit and
          exit before the incumbent retaliates — <em>hit-and-run entry</em>. Knowing this, the incumbent prices
          at the <strong>entry-limiting level</strong> P = AC = 40, producing 50 units, earning only normal
          profit and — because AC is constant so MC = AC here — achieving allocative efficiency as well.
          The theory's power is that <strong>conduct, not structure</strong>, determines outcomes: a
          concentrated market can behave competitively. Evaluate through the realism of the assumptions: most
          industries carry heavy sunk costs (advertising, specialised capital, R&amp;D), incumbents retaliate
          with limit and predatory pricing, and brand loyalty slows consumer switching — so markets are better
          described as <em>imperfectly</em> contestable, which is why policy attacks sunk costs and switching
          costs (airline deregulation, energy switching rules) rather than simply breaking firms up.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Contestable market diagram comparing monopoly pricing with the entry-limiting price equal to average cost">
          <Axes p={p} id="contest" labelX="Output (Q)" labelY="Price, Costs, Revenue" />
          {play && (
            <>
              <motion.rect x={x(0)} y={y(70)} width={x(25) - x(0)} height={y(AC) - y(70)}
                fill={C.revenue} opacity={0.18} {...revealFade(4)} />

              <motion.path d={seg(AR, 0, 83)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
              <motion.text x={x(83) + 4} y={y(AR(83))} fill={C.demand} fontSize={11} {...revealFade(1)}>AR = D</motion.text>

              <motion.path d={seg(MR, 0, 41.7)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(1)} />
              <motion.text x={x(41.7) + 4} y={y(0) - 4} fill={C.supply} fontSize={11} {...revealFade(2)}>MR</motion.text>

              <motion.path d={`M ${x(0)} ${y(AC)} L ${x(83)} ${y(AC)}`} fill="none" stroke={C.social}
                strokeWidth={2.4} {...revealPath(2)} />
              <motion.text x={x(83) + 4} y={y(AC) + 4} fill={C.social} fontSize={11} {...revealFade(3)}>LRAC = MC</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={25} py={70} color={C.marker} xLabel="Qm = 25" yLabel="Pm = 70" />
              </motion.g>
              <motion.circle cx={x(25)} cy={y(70)} r={5} fill={C.marker} {...revealPoint(5)} />
              <motion.text x={x(3)} y={y(70) - 8} fill={C.revenue} fontSize={10} {...revealFade(5)}>
                profit that invites hit-and-run entry
              </motion.text>

              <motion.g {...revealFade(6)}>
                <Guides p={p} qx={50} py={AC} color={C.welfareGain} xLabel="Qc = 50" yLabel="P = AC = 40" />
              </motion.g>
              <motion.circle cx={x(50)} cy={y(AC)} r={5} fill={C.welfareGain} {...revealPoint(7)} />
              <motion.text x={x(50) + 8} y={y(AC) - 10} fill={C.welfareGain} fontSize={10} {...revealFade(7)}>
                entry-limit price: normal profit
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default ContestableMarketsDiagram;
