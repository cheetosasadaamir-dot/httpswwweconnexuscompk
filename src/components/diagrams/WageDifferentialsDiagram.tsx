import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Wage differentials: skilled vs unskilled labour, drawn on identical axes so
 * the wage gap can be read off directly.
 *
 * SKILLED    S: W = 40 + 1.6L   (inelastic — long training, few qualify)
 *            D: W = 100 − 0.8L  (high MRP)
 *            40 + 1.6L = 100 − 0.8L → L = 25, W = 80
 *
 * UNSKILLED  S: W = 5 + 0.25L   (elastic — large pool, no entry barriers)
 *            D: W = 55 − 0.5L   (low MRP)
 *            5 + 0.25L = 55 − 0.5L → L ≈ 66.7, W ≈ 21.7
 */
const CONFIG = {
  skilled: {
    label: 'Skilled labour',
    S: (L: number) => 40 + 1.6 * L,
    D: (L: number) => 100 - 0.8 * L,
    L: 25,
    W: 80,
    Ltxt: 'L(s) = 25',
    Wtxt: 'W(s) = 80',
  },
  unskilled: {
    label: 'Unskilled labour',
    S: (L: number) => 5 + 0.25 * L,
    D: (L: number) => 55 - 0.5 * L,
    L: 200 / 3,
    W: 65 / 3,
    Ltxt: 'L(u) ≈ 67',
    Wtxt: 'W(u) ≈ 22',
  },
} as const;

const Panel = ({ which, play }: { which: keyof typeof CONFIG; play: boolean }) => {
  const p = plotBox();
  const { x, y } = p;
  const c = CONFIG[which];
  const seg = (f: (L: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <div className="flex-1">
      <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {c.label}
      </p>
      <svg
        viewBox={`0 0 ${p.W} ${p.H}`}
        className="mx-auto h-auto w-full min-w-[300px]"
        role="img"
        aria-label={`${c.label} market showing the equilibrium wage set by marginal revenue product and the elasticity of labour supply`}
      >
        <Axes p={p} id={`wd-${which}`} labelX="Quantity of labour (L)" labelY="Wage rate (W)" />
        {play && (
          <>
            <motion.path d={seg(c.S, 0, which === 'skilled' ? 36 : 100)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(0)} />
            <motion.path d={seg(c.D, 0, which === 'skilled' ? 100 : 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(1)} />
            <motion.text x={x(which === 'skilled' ? 36 : 100) + 4} y={y(c.S(which === 'skilled' ? 36 : 100))} fill={C.supply} fontSize={11} {...revealFade(1)}>
              S(L)
            </motion.text>
            <motion.text x={x(100) + 4} y={y(c.D(100))} fill={C.demand} fontSize={11} {...revealFade(2)}>
              D = MRP
            </motion.text>
            <motion.g {...revealFade(3)}>
              <Guides p={p} qx={c.L} py={c.W} color={C.marker} xLabel={c.Ltxt} yLabel={c.Wtxt} />
            </motion.g>
            <motion.circle cx={x(c.L)} cy={y(c.W)} r={5} fill={C.marker} {...revealPoint(4)} />
          </>
        )}
      </svg>
    </div>
  );
};

const WageDifferentialsDiagram = () => (
  <DiagramFrame
    title="Wage Differentials: Skilled vs Unskilled Labour"
    eyebrow="Figure — Both panels drawn on identical axes"
    legend={[
      { label: 'S(L) = labour supply', color: C.supply },
      { label: 'D(L) = MRP', color: C.demand },
      { label: 'Equilibrium', color: C.marker, kind: 'dot' },
    ]}
    note={
      <>
        Because both panels use the same scale, the wage gap (80 vs about 22) can be read directly. Skilled
        workers earn more for <strong>two reinforcing reasons</strong>. On the demand side their{' '}
        <strong>MRP is higher</strong> — greater human capital raises output per worker and often the value
        of that output. On the supply side, supply is <strong>steep and inelastic</strong>: long training
        periods, professional licensing and innate ability restrict the pool, so even a large wage rise
        brings few extra workers in the short run. Unskilled labour faces the mirror image — low MRP and a
        large, elastic, easily replaced pool. Other causes of differentials layer on top:{' '}
        <strong>compensating differentials</strong> for dangerous or unsocial work (North Sea rigs, night
        shifts), <strong>occupational and geographical immobility</strong>, <strong>discrimination</strong>,{' '}
        <strong>union or professional bargaining power</strong>, and <strong>monopsony employers</strong>{' '}
        such as a single dominant hospital trust or supermarket in a town. Because skilled supply is
        inelastic, most of the skilled wage is <strong>economic rent</strong>, whereas unskilled pay is
        close to pure transfer earnings.
      </>
    }
  >
    {({ play, runKey }) => (
      <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
        <Panel which="skilled" play={play} />
        <Panel which="unskilled" play={play} />
      </div>
    )}
  </DiagramFrame>
);

export default WageDifferentialsDiagram;
