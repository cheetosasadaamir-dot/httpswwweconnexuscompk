import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Union (or minimum wage) in a MONOPSONY labour market.
 * S = ACL: W = 10 + 0.6L      MFC = 10 + 1.2L      D = MRP: W = 90 − 0.8L
 * Monopsony outcome:  MFC = MRP → L_m = 40, wage read off S: W_m = 34.
 * Competitive outcome: S = MRP → L_c = 57.14, W_c ≈ 44.3.
 * Union wage W_u = 40 → effective supply is horizontal at 40 until S reaches 40
 *   (L = 50), so MFC = 40 over that range: the firm hires L = 50 at W = 40.
 * Both the wage AND employment rise. Employment is maximised at W_u = W_c.
 */
const TradeUnionMonopsonyDiagram = () => {
  const p = plotBox();
  const { x, y, m, ch } = p;

  const S = (L: number) => 10 + 0.6 * L;
  const MFC = (L: number) => 10 + 1.2 * L;
  const MRP = (L: number) => 90 - 0.8 * L;

  const Lm = 40, Wm = S(Lm);            // 34
  const Lc = 400 / 7, Wc = S(Lc);       // 57.14, 44.29
  const Wu = 40, Lu = (Wu - 10) / 0.6;  // 50

  const seg = (f: (L: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Trade Union Bargaining in a Monopsony Labour Market"
      eyebrow="Figure — A wage floor can raise wages AND employment"
      legend={[
        { label: 'S = ACL', color: C.supply },
        { label: 'MFC (no union)', color: C.intervention },
        { label: 'D = MRP', color: C.demand },
        { label: 'Union wage & new employment', color: C.social, kind: 'dot' },
        { label: 'Monopsony outcome', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          Left alone, the monopsonist hires where MFC = MRP at L<sub>m</sub> = 40 and pays only
          W<sub>m</sub> = 34, read down to the supply curve. If a union (or a minimum wage) imposes a floor
          at W<sub>u</sub> = 40, the firm can no longer cut the wage by hiring fewer workers: supply is now{' '}
          <strong>perfectly elastic at W<sub>u</sub></strong> up to L = 50, so over that range{' '}
          <strong>MFC = ACL = W<sub>u</sub></strong> — the thick green segment. Since MRP still exceeds 40 at
          L = 50, the firm hires all the way to the kink. Employment rises from 40 to 50{' '}
          <em>and</em> the wage rises from 34 to 40, and monopsonistic exploitation (MRP − W) shrinks.
          Employment is maximised when the floor is set at the competitive wage W<sub>c</sub> ≈ 44 with
          L<sub>c</sub> ≈ 57. Above W<sub>c</sub> the usual competitive result returns and employment falls
          again — so the <strong>zone of bargaining</strong> runs from W<sub>m</sub> = 34 up to the MRP at
          L<sub>m</sub> (= 58), and the outcome inside it depends on relative bargaining strength.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Monopsony labour market where a union wage floor raises both the wage and the level of employment"
        >
          <Axes p={p} id="tum" labelX="Quantity of labour (L)" labelY="Wage rate (W)" />
          {play && (
            <>
              <motion.path d={seg(S, 0, 95)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(0)} />
              <motion.path d={seg(MFC, 0, 70)} fill="none" stroke={C.intervention} strokeWidth={2.2} strokeDasharray="6 4" {...revealPath(1)} />
              <motion.path d={seg(MRP, 0, 95)} fill="none" stroke={C.demand} strokeWidth={2.2} {...revealPath(2)} />

              <motion.text x={x(95) + 4} y={y(S(95))} fill={C.supply} fontSize={11} {...revealFade(1)}>
                S = ACL
              </motion.text>
              <motion.text x={x(70) + 4} y={y(MFC(70))} fill={C.intervention} fontSize={11} {...revealFade(2)}>
                MFC
              </motion.text>
              <motion.text x={x(95) + 4} y={y(MRP(95))} fill={C.demand} fontSize={11} {...revealFade(3)}>
                D = MRP
              </motion.text>

              {/* original monopsony outcome */}
              <motion.g {...revealFade(3)}>
                <Guides p={p} qx={Lm} py={Wm} color={C.marker} xLabel="L(m) = 40" yLabel="W(m) = 34" />
              </motion.g>
              <motion.circle cx={x(Lm)} cy={y(Wm)} r={4.5} fill={C.marker} {...revealPoint(4)} />

              {/* union wage floor: new perfectly elastic supply / MFC segment */}
              <motion.path
                d={`M ${x(0)} ${y(Wu)} L ${x(Lu)} ${y(Wu)}`}
                fill="none"
                stroke={C.social}
                strokeWidth={3.4}
                {...revealPath(4, 0.8)}
              />
              <motion.g {...revealFade(5)}>
                <line x1={x(Lu)} y1={y(Wu)} x2={x(Lu)} y2={y(MFC(Lu))} stroke={C.social} strokeWidth={2} strokeDasharray="3 3" />
                <Guides p={p} qx={Lu} py={Wu} color={C.social} xLabel="L(u) = 50" yLabel="W(u) = 40" />
                <text x={x(6)} y={y(Wu) - 8} fill={C.social} fontSize={10}>
                  new S = MFC (union floor)
                </text>
              </motion.g>
              <motion.circle cx={x(Lu)} cy={y(Wu)} r={5} fill={C.social} {...revealPoint(6)} />

              {/* competitive benchmark */}
              <motion.g {...revealFade(6)}>
                <circle cx={x(Lc)} cy={y(Wc)} r={4} fill={C.axis} />
                <text x={x(Lc) + 8} y={y(Wc) - 6} fill={C.axis} fontSize={10}>
                  competitive: L(c) ≈ 57, W(c) ≈ 44
                </text>
              </motion.g>

              <motion.text x={x(Lm) + 6} y={m.t + ch - 6} fill={C.muted} fontSize={9} {...revealFade(6)}>
                employment ↑
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default TradeUnionMonopsonyDiagram;
