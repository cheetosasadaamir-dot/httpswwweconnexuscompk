import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Economic rent and transfer earnings.
 * S: W = 10 + 0.8L    D = MRP: W = 90 − 0.8L → L* = 50, W* = 50
 * Transfer earnings = area UNDER the supply curve up to L* (trapezium 10→50)
 *   = ½(10 + 50) × 50 = 1500
 * Economic rent = total wage bill (50 × 50 = 2500) − 1500 = 1000
 */
const EconomicRentTransferDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const S = (L: number) => 10 + 0.8 * L;
  const D = (L: number) => 90 - 0.8 * L;
  const Le = 50, We = 50;

  const seg = (f: (L: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Economic Rent and Transfer Earnings"
      eyebrow="Figure — Splitting the wage bill"
      legend={[
        { label: 'S(L) = opportunity cost of labour', color: C.supply },
        { label: 'D = MRP', color: C.demand },
        { label: 'Economic rent (surplus)', color: C.welfareGain, kind: 'area' },
        { label: 'Transfer earnings', color: C.consumerSurplus, kind: 'area' },
      ]}
      note={
        <>
          <strong>Transfer earnings</strong> are the minimum payment needed to keep a worker in their
          present occupation — their next-best alternative earnings, shown by the area{' '}
          <em>under</em> the supply curve up to L* (here ½ × (10 + 50) × 50 = 1,500).{' '}
          <strong>Economic rent</strong> is any payment <em>above</em> transfer earnings: the shaded
          triangle between W* and the supply curve (2,500 − 1,500 = 1,000). Everyone except the marginal
          worker earns some rent, because they would have supplied their labour for less. The split
          depends on the <strong>elasticity of labour supply</strong>: where supply is highly inelastic —
          Premier League footballers, top surgeons, specialist barristers whose skills have few
          alternative uses — almost the whole payment is economic rent, which is why a tax on those
          earnings causes little change in supply. Where supply is elastic — unskilled, easily
          transferable work — earnings are almost entirely transfer earnings. In the long run supply
          becomes more elastic as training and entry take place, so short-run rents (a scarce coding
          skill, a boom-time drilling engineer) are competed away — these are called{' '}
          <strong>quasi-rents</strong>.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Labour market equilibrium split into economic rent above the supply curve and transfer earnings below it"
        >
          <Axes p={p} id="rent" labelX="Quantity of labour (L)" labelY="Wage rate (W)" />
          {play && (
            <>
              {/* transfer earnings: under supply curve */}
              <motion.path
                d={`M ${x(0)} ${y(0)} L ${x(0)} ${y(10)} L ${x(Le)} ${y(We)} L ${x(Le)} ${y(0)} Z`}
                fill={C.consumerSurplus}
                opacity={0.2}
                {...revealFade(3)}
              />
              {/* economic rent: between W* and supply */}
              <motion.path
                d={`M ${x(0)} ${y(10)} L ${x(Le)} ${y(We)} L ${x(0)} ${y(We)} Z`}
                fill={C.welfareGain}
                opacity={0.3}
                {...revealFade(4)}
              />

              <motion.path d={seg(S, 0, 100)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(0)} />
              <motion.path d={seg(D, 0, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(1)} />
              <motion.text x={x(100) + 4} y={y(S(100))} fill={C.supply} fontSize={11} {...revealFade(1)}>
                S(L)
              </motion.text>
              <motion.text x={x(100) + 4} y={y(D(100))} fill={C.demand} fontSize={11} {...revealFade(2)}>
                D = MRP
              </motion.text>

              <motion.g {...revealFade(2)}>
                <Guides p={p} qx={Le} py={We} color={C.marker} xLabel="L* = 50" yLabel="W* = 50" />
              </motion.g>
              <motion.circle cx={x(Le)} cy={y(We)} r={5} fill={C.marker} {...revealPoint(3)} />

              <motion.text x={x(14)} y={y(40)} fill={C.welfareGain} fontSize={11} {...revealFade(5)}>
                Economic rent
              </motion.text>
              <motion.text x={x(14)} y={y(14)} fill={C.consumerSurplus} fontSize={11} {...revealFade(5)}>
                Transfer earnings
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default EconomicRentTransferDiagram;
