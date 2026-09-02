import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Monopsony labour market — Cambridge A2 standard.
 * S = ACL: W = 10 + 0.6L   →   MFC = 10 + 1.2L (twice the slope of a linear supply curve)
 * D = MRP: W = 90 − 0.8L
 * Competitive outcome:  10 + 0.6L = 90 − 0.8L → L_c = 57.14, W_c = 44.29
 * Monopsony outcome:    MFC = MRP → 10 + 1.2L = 90 − 0.8L → L_m = 40, MFC = 58
 *                       wage read off the SUPPLY curve: W_m = 10 + 0.6(40) = 34
 * Exploitation gap = MRP(L_m) − W_m = 58 − 34 = 24.
 */
const MonopsonyLaborDiagram = () => {
  const p = plotBox();
  const { x, y, m, ch } = p;

  const S = (L: number) => 10 + 0.6 * L;
  const MFC = (L: number) => 10 + 1.2 * L;
  const MRP = (L: number) => 90 - 0.8 * L;

  const Lm = 40, Wm = S(Lm), MFCm = MRP(Lm); // 34 and 58
  const Lc = 400 / 7, Wc = S(Lc); // 57.14, 44.29

  const line = (f: (L: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Monopsony in the Labour Market"
      eyebrow="Figure — Single dominant buyer of labour"
      legend={[
        { label: 'S = ACL (labour supply)', color: C.supply },
        { label: 'MFC (marginal factor cost)', color: C.intervention },
        { label: 'D = MRP (labour demand)', color: C.demand },
        { label: 'Competitive equilibrium', color: C.social, kind: 'dot' },
        { label: 'Monopsony outcome', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          A monopsonist faces the <strong>whole upward-sloping market supply curve</strong>, so hiring
          one more worker requires raising the wage for <em>every</em> worker already employed. MFC
          therefore lies above ACL and, for a linear supply curve, has exactly{' '}
          <strong>twice the slope</strong>. Profit maximisation occurs where MFC = MRP at L
          <sub>m</sub> = 40, but the wage is read <em>down</em> to the supply curve at W<sub>m</sub> = 34.
          A competitive market would clear where S = MRP, at L<sub>c</sub> ≈ 57 and W<sub>c</sub> ≈ 44 —
          so monopsony delivers <strong>both lower wages and lower employment</strong>. The vertical
          gap MRP − W<sub>m</sub> = 24 is the rate of <strong>monopsonistic exploitation</strong>, and
          the shaded triangle is the deadweight welfare loss from the missing employment. Crucially,
          a minimum wage or union set between W<sub>m</sub> and W<sub>c</sub> can raise wages{' '}
          <em>and</em> employment simultaneously — the opposite of the competitive-market prediction.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Monopsony labour market diagram with supply, marginal factor cost and marginal revenue product curves showing lower wage and employment than the competitive outcome"
        >
          <Axes p={p} id="mono" labelX="Quantity of Labour (L)" labelY="Wage rate (W)" />

          {play && (
            <>
              {/* Deadweight welfare loss: Lm..Lc between MRP and S */}
              <motion.path
                d={`M ${x(Lm)} ${y(MFCm)} L ${x(Lc)} ${y(Wc)} L ${x(Lm)} ${y(Wm)} Z`}
                fill={C.welfareLoss}
                opacity={0.18}
                {...revealFade(5)}
              />

              <motion.path d={line(S, 0, 95)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(0)} />
              <motion.path d={line(MFC, 0, 70)} fill="none" stroke={C.intervention} strokeWidth={2.4} {...revealPath(1)} />
              <motion.path d={line(MRP, 0, 95)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(2)} />

              <motion.text x={x(95) + 4} y={y(S(95))} fill={C.supply} fontSize={11} {...revealFade(1)}>
                S = ACL
              </motion.text>
              <motion.text x={x(70) + 4} y={y(MFC(70))} fill={C.intervention} fontSize={11} {...revealFade(2)}>
                MFC
              </motion.text>
              <motion.text x={x(95) + 4} y={y(MRP(95))} fill={C.demand} fontSize={11} {...revealFade(3)}>
                D = MRP
              </motion.text>

              {/* Monopsony construction */}
              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Lm} py={MFCm} color={C.marker} xLabel="L" yLabel="MRP" />
                <Guides p={p} qx={Lm} py={Wm} color={C.marker} yLabel="W" />
                <line
                  x1={x(Lm)} y1={y(MFCm)} x2={x(Lm)} y2={y(Wm)}
                  stroke={C.welfareLoss} strokeWidth={2.2}
                />
                <text x={x(Lm) + 8} y={(y(MFCm) + y(Wm)) / 2} fill={C.welfareLoss} fontSize={10}>
                  exploitation
                </text>
                <text x={x(Lm)} y={m.t + ch + 28} fill={C.marker} fontSize={10} textAnchor="middle">
                  L(m) = 40
                </text>
              </motion.g>

              {/* Competitive construction */}
              <motion.g {...revealFade(5)}>
                <Guides p={p} qx={Lc} py={Wc} color={C.social} xLabel="L(c)" yLabel="W(c)" />
              </motion.g>

              <motion.circle cx={x(Lm)} cy={y(MFCm)} r={5} fill={C.marker} {...revealPoint(6)} />
              <motion.circle cx={x(Lm)} cy={y(Wm)} r={5} fill={C.marker} {...revealPoint(6)} />
              <motion.circle cx={x(Lc)} cy={y(Wc)} r={5} fill={C.social} {...revealPoint(7)} />
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default MonopsonyLaborDiagram;
