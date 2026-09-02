import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Equimarginal principle (consumer equilibrium in cardinal utility) — A2 standard.
 *
 * Budget = $24. Good X costs $2, Good Y costs $4.
 * MU_x schedule: 24, 20, 16, 12, 8, 4  →  MU_x/P_x: 12, 10, 8, 6, 4, 2
 * MU_y schedule: 40, 32, 24, 16, 8     →  MU_y/P_y: 10, 8, 6, 4, 2
 * Optimum: spend until the marginal utility per dollar is equal across both goods,
 *   MU_x/P_x = MU_y/P_y = 6, which happens at X = 4 units ($8) and Y = 4 units ($16),
 *   exactly exhausting the $24 budget.
 */
const X_ROWS = [
  { u: 1, mu: 24, ratio: 12 },
  { u: 2, mu: 20, ratio: 10 },
  { u: 3, mu: 16, ratio: 8 },
  { u: 4, mu: 12, ratio: 6 },
  { u: 5, mu: 8, ratio: 4 },
  { u: 6, mu: 4, ratio: 2 },
];
const Y_ROWS = [
  { u: 1, mu: 40, ratio: 10 },
  { u: 2, mu: 32, ratio: 8 },
  { u: 3, mu: 24, ratio: 6 },
  { u: 4, mu: 16, ratio: 4 },
  { u: 5, mu: 8, ratio: 2 },
];

const EquimarginalPrincipleDiagram = () => {
  const p = plotBox(540, 340, { t: 28, r: 56, b: 58, l: 68 });
  const ux = (u: number) => (u / 7) * 100;
  const rv = (r: number) => (r / 13) * 100;

  const path = (rows: { u: number; ratio: number }[]) =>
    rows.map((r, i) => `${i === 0 ? 'M' : 'L'} ${p.x(ux(r.u))} ${p.y(rv(r.ratio))}`).join(' ');

  return (
    <DiagramFrame
      title="The Equimarginal Principle: Allocating a Fixed Budget Between Two Goods"
      eyebrow="Figure — Consumer equilibrium (cardinal)"
      legend={[
        { label: 'MUₓ / Pₓ (Good X, $2)', color: C.demand },
        { label: 'MU_y / P_y (Good Y, $4)', color: C.supply },
        { label: 'Equalised marginal utility per $', color: C.marker, dashed: true },
      ]}
      note={
        <>
          A consumer maximises total utility when the{' '}
          <strong>marginal utility per dollar is equal across every good</strong> and the whole budget
          is spent:{' '}
          <strong>
            MU<sub>x</sub>/P<sub>x</sub> = MU<sub>y</sub>/P<sub>y</sub> = … = MU<sub>n</sub>/P
            <sub>n</sub>
          </strong>
          . With a $24 budget the consumer buys 4 units of X ($8) and 4 units of Y ($16); the ranked
          "best buy" sequence equalises utility per dollar at the margin. If MU<sub>x</sub>/P
          <sub>x</sub> &gt; MU<sub>y</sub>/P<sub>y</sub>, reallocating spending from Y to X raises total
          utility, so the inequality is self-correcting. Because MU falls as consumption rises, a rise
          in P<sub>x</sub> lowers MU<sub>x</sub>/P<sub>x</sub> and the consumer switches away from X —
          this is the utility-theory derivation of the downward-sloping demand curve.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="min-w-[320px]">
          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full" role="img" aria-label="Marginal utility per dollar schedules for two goods intersecting a common equalised level">
            <Axes p={p} id="equi" labelX="Units purchased" labelY="Marginal utility per $" />
            {[2, 4, 6, 8, 10, 12].map((r) => (
              <g key={r}>
                <line x1={p.m.l} y1={p.y(rv(r))} x2={p.m.l + p.cw} y2={p.y(rv(r))} stroke={C.grid} strokeWidth={0.6} strokeDasharray="4 4" opacity={0.45} />
                <text x={p.m.l - 8} y={p.y(rv(r)) + 4} fill={C.muted} fontSize={10} textAnchor="end">{r}</text>
              </g>
            ))}
            {[1, 2, 3, 4, 5, 6].map((u) => (
              <text key={u} x={p.x(ux(u))} y={p.m.t + p.ch + 15} fill={C.muted} fontSize={10} textAnchor="middle">{u}</text>
            ))}

            <motion.path d={path(X_ROWS)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
            <motion.path d={path(Y_ROWS)} fill="none" stroke={C.supply} strokeWidth={2.6} {...revealPath(1)} animate={play ? revealPath(1).animate : revealPath(1).initial} />

            <motion.line
              x1={p.m.l} y1={p.y(rv(6))} x2={p.m.l + p.cw} y2={p.y(rv(6))}
              stroke={C.marker} strokeWidth={1.6} strokeDasharray="7 4"
              {...revealPath(2, 0.7)} animate={play ? revealPath(2, 0.7).animate : revealPath(2, 0.7).initial}
            />
            <motion.g {...revealFade(3)} animate={play ? revealFade(3).animate : revealFade(3).initial}>
              <text x={p.m.l + p.cw} y={p.y(rv(6)) - 8} fill={C.marker} fontSize={11} fontWeight="bold" textAnchor="end">
                MUₓ/Pₓ = MU_y/P_y = 6
              </text>
              <text x={p.x(ux(6)) + 8} y={p.y(rv(2))} fill={C.demand} fontSize={11} fontWeight="bold">MUₓ/Pₓ</text>
              <text x={p.x(ux(5)) + 8} y={p.y(rv(2)) + 16} fill={C.supply} fontSize={11} fontWeight="bold">MU_y/P_y</text>
            </motion.g>
            <motion.circle cx={p.x(ux(4))} cy={p.y(rv(6))} r={5} fill={C.demand} stroke="white" strokeWidth={1.3} {...revealPoint(4)} animate={play ? revealPoint(4).animate : revealPoint(4).initial} />
            <motion.circle cx={p.x(ux(3))} cy={p.y(rv(6))} r={5} fill={C.supply} stroke="white" strokeWidth={1.3} {...revealPoint(4)} animate={play ? revealPoint(4).animate : revealPoint(4).initial} />
          </svg>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { name: 'Good X — price $2', rows: X_ROWS, color: C.demand },
              { name: 'Good Y — price $4', rows: Y_ROWS, color: C.supply },
            ].map((t) => (
              <div key={t.name} className="overflow-x-auto">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: t.color }}>{t.name}</p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-primary/20 text-muted-foreground">
                      <th className="px-2 py-1 text-left font-medium">Unit</th>
                      <th className="px-2 py-1 text-center font-medium">MU</th>
                      <th className="px-2 py-1 text-center font-medium">MU / P</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r) => (
                      <tr key={r.u} className="border-b border-primary/10">
                        <td className="px-2 py-1 text-silver-bright">{r.u}</td>
                        <td className="px-2 py-1 text-center text-muted-foreground">{r.mu}</td>
                        <td className="px-2 py-1 text-center" style={{ color: r.ratio === 6 ? C.marker : t.color }}>{r.ratio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default EquimarginalPrincipleDiagram;
