import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Perfectly competitive labour market — market and firm side by side.
 *
 * MARKET   S(L) = 20 + 0.8L      D(L) = ΣMRP = 100 − 0.8L
 *          equilibrium: 20 + 0.8L = 100 − 0.8L → L* = 50, W* = 60
 *
 * FIRM     faces a perfectly elastic supply at W* = 60, so W = ACL = MFC.
 *          MRP = 100 − 2L → profit-max hiring where MRP = MFC → L = 20.
 *          (firm axis runs 0–50 workers, plotted at 2× so it fills 0–100)
 */
const LaborMarketDiagram = () => {
  const p = plotBox();
  const { x, y, m, ch } = p;

  const S = (L: number) => 20 + 0.8 * L;
  const D = (L: number) => 100 - 0.8 * L;
  const Lstar = 50;
  const Wstar = 60;

  // firm panel: value v on the plot = 2 × workers
  const MRPf = (v: number) => 100 - v; // = 100 − 2L with L = v/2
  const Lfirm = 20; // workers
  const vFirm = Lfirm * 2;

  const seg = (f: (v: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Perfectly Competitive Labour Market: Market and Firm"
      eyebrow="Figure — The market sets the wage, the firm takes it"
      legend={[
        { label: 'S(L) = ACL (labour supply)', color: C.supply },
        { label: 'D(L) = ΣMRP (labour demand)', color: C.demand },
        { label: 'W* = ACL = MFC to the firm', color: C.marker, dashed: true },
        { label: 'Profit-maximising employment', color: C.social, kind: 'dot' },
      ]}
      note={
        <>
          The <strong>market</strong> panel determines the wage: aggregate supply of labour (upward sloping
          because higher wages attract workers into the occupation) meets aggregate demand, the horizontal
          sum of every firm's MRP curve, at W* = 60 and N* = 50. The <strong>firm</strong> panel is drawn on a
          much smaller employment scale: because the firm is a tiny part of the market it can hire as many
          workers as it wants at the going wage, so its labour supply curve is{' '}
          <strong>perfectly elastic</strong> and W = ACL = MFC. Profit maximisation requires{' '}
          <strong>MRP = MFC</strong>, giving 20 workers. To the left of that point MRP &gt; W so the extra
          worker adds more to revenue than to cost; to the right MRP &lt; W and the firm makes a loss on the
          marginal hire. Because only the <em>downward-sloping</em> portion of MRP satisfies the second-order
          condition, the MRP curve <em>is</em> the firm's demand curve for labour.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
          {/* ---------------- MARKET ---------------- */}
          <div className="flex-1">
            <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              The Market (Industry)
            </p>
            <svg
              viewBox={`0 0 ${p.W} ${p.H}`}
              className="mx-auto h-auto w-full min-w-[300px]"
              role="img"
              aria-label="Competitive labour market equilibrium where labour supply meets the sum of firms' marginal revenue product curves"
            >
              <Axes p={p} id="lm-mkt" labelX="Number of workers (L)" labelY="Wage rate (W)" />
              {play && (
                <>
                  <motion.path d={seg(S, 0, 100)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(0)} />
                  <motion.path d={seg(D, 0, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(1)} />
                  <motion.text x={x(100) + 5} y={y(S(100))} fill={C.supply} fontSize={11} {...revealFade(1)}>
                    S(L)
                  </motion.text>
                  <motion.text x={x(100) + 5} y={y(D(100))} fill={C.demand} fontSize={11} {...revealFade(2)}>
                    D = ΣMRP
                  </motion.text>
                  <motion.g {...revealFade(3)}>
                    <Guides p={p} qx={Lstar} py={Wstar} color={C.marker} xLabel="N* = 50" yLabel="W* = 60" />
                  </motion.g>
                  <motion.circle cx={x(Lstar)} cy={y(Wstar)} r={5} fill={C.marker} {...revealPoint(4)} />
                </>
              )}
            </svg>
          </div>

          {/* ---------------- FIRM ---------------- */}
          <div className="flex-1">
            <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              The Individual Firm (wage taker)
            </p>
            <svg
              viewBox={`0 0 ${p.W} ${p.H}`}
              className="mx-auto h-auto w-full min-w-[300px]"
              role="img"
              aria-label="Individual firm hiring where marginal revenue product equals the perfectly elastic marginal factor cost at the market wage"
            >
              <Axes p={p} id="lm-firm" labelX="Number of workers (L)" labelY="Wage, MRP" />
              {play && (
                <>
                  {/* perfectly elastic supply at the market wage */}
                  <motion.path
                    d={`M ${x(0)} ${y(Wstar)} L ${x(100)} ${y(Wstar)}`}
                    fill="none"
                    stroke={C.supply}
                    strokeWidth={2.4}
                    {...revealPath(0)}
                  />
                  <motion.text x={x(66)} y={y(Wstar) - 8} fill={C.supply} fontSize={11} {...revealFade(1)}>
                    S = ACL = MFC = W*
                  </motion.text>


                  <motion.path d={seg(MRPf, 0, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(1)} />
                  <motion.text x={x(88)} y={y(MRPf(88)) - 8} fill={C.demand} fontSize={11} {...revealFade(2)}>
                    MRP = D(L)
                  </motion.text>

                  <motion.g {...revealFade(3)}>
                    <Guides p={p} qx={vFirm} py={Wstar} color={C.social} xLabel="L = 20" yLabel="W* = 60" />
                  </motion.g>
                  <motion.circle cx={x(vFirm)} cy={y(Wstar)} r={5} fill={C.social} {...revealPoint(4)} />
                  <motion.text
                    x={x(vFirm) + 8}
                    y={y(Wstar) - 10}
                    fill={C.social}
                    fontSize={10}
                    {...revealFade(5)}
                  >
                    MRP = MFC
                  </motion.text>
                  <motion.text x={m.l + 10} y={m.t + ch - 12} fill={C.muted} fontSize={9} {...revealFade(5)}>
                    MRP &gt; W: hire more
                  </motion.text>
                </>
              )}
            </svg>
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default LaborMarketDiagram;
