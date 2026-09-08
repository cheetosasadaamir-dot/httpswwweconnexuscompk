import { useState } from 'react';
import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Keynesian liquidity preference: the rate of interest is set where a
 * downward-sloping demand for money (Md) meets a vertical, central-bank
 * determined money supply (Ms).
 *
 * Md is a rectangular-hyperbola-style curve flattening towards the liquidity
 * trap floor; equilibria are solved numerically so both scenarios are exact.
 */

const p = plotBox(560, 400, { t: 36, r: 58, b: 62, l: 68 });

/** Liquidity trap floor — the rate below which speculative demand is perfectly elastic. */
const FLOOR = 12;

/** Demand for money: L = L1(transactions/precautionary) + L2(speculative). */
const MD = (q: number) => FLOOR + 720 / Math.max(q, 8);
/** Md after a rise in national income (transactions demand up). */
const MD2 = (q: number) => FLOOR + 1180 / Math.max(q, 8);

const solve = (f: (q: number) => number, ms: number) => ({ q: ms, p: f(ms) });

const MS1 = 26;
const MS2 = 44;

type Scenario = 'expansion' | 'income';

const SCENARIOS: Record<Scenario, { label: string; note: string }> = {
  expansion: {
    label: 'Monetary expansion (Ms →)',
    note: 'The central bank buys bonds, so the money supply rises from Ms₁ to Ms₂. With money demand unchanged, households hold more money than they wish at r₁, buy bonds, push bond prices up and the interest rate falls from r₁ to r₂. Cheaper credit raises investment and interest-sensitive consumption.',
  },
  income: {
    label: 'Higher national income (Md →)',
    note: 'A rise in real income raises transactions and precautionary demand for money, shifting Md right to Md₂. With the money supply fixed at Ms₁, the excess demand for money is cleared by a higher interest rate, which crowds out some investment.',
  },
};

const LiquidityPreferenceDiagram = () => {
  const [scenario, setScenario] = useState<Scenario>('expansion');
  const isExpansion = scenario === 'expansion';

  const e1 = solve(MD, MS1);
  const e2 = isExpansion ? solve(MD, MS2) : solve(MD2, MS1);

  return (
    <DiagramFrame
      title="Liquidity Preference Theory of Interest"
      eyebrow="Money market · Keynes"
      legend={[
        { label: 'Money demand (Md)', color: C.demand },
        { label: isExpansion ? 'Money supply Ms₁ / Ms₂' : 'Money demand Md₂', color: C.supply },
        { label: 'Equilibrium rates', color: C.marker, kind: 'dot' },
        { label: 'Liquidity trap floor', color: C.muted, dashed: true },
      ]}
      note={<p>{SCENARIOS[scenario].note}</p>}
    >
      {({ play, runKey }) => (
        <div key={runKey} className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(SCENARIOS) as Scenario[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setScenario(k)}
                className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
                  scenario === k
                    ? 'border-primary/60 bg-primary/20 text-primary'
                    : 'border-white/15 bg-white/5 text-muted-foreground hover:text-foreground'
                }`}
              >
                {SCENARIOS[k].label}
              </button>
            ))}
          </div>

          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="w-full min-w-[320px]">
            <Axes
              p={p}
              id="liq-pref"
              labelX="Quantity of money (M)"
              labelY="Rate of interest (r)"
            />

            {/* liquidity trap floor */}
            <line
              x1={p.m.l} y1={p.y(FLOOR)} x2={p.m.l + p.cw} y2={p.y(FLOOR)}
              stroke={C.muted} strokeDasharray="4 4" strokeWidth={1.1} opacity={0.7}
            />
            <text x={p.m.l + p.cw} y={p.y(FLOOR) - 6} textAnchor="end" fill={C.muted} fontSize={10}>
              Liquidity trap floor
            </text>

            {/* Md */}
            <motion.path
              d={curve(p, MD, 9, 96)}
              fill="none" stroke={C.demand} strokeWidth={2.6}
              {...revealPath(0)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(92)} y={p.y(MD(92)) - 8} fill={C.demand} fontSize={12} fontWeight={600}>
              Md{isExpansion ? '' : '₁'}
            </text>

            {/* Md2 for the income scenario */}
            {!isExpansion && (
              <>
                <motion.path
                  d={curve(p, MD2, 13, 96)}
                  fill="none" stroke={C.supply} strokeWidth={2.6}
                  {...revealPath(2)}
                  animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                />
                <text x={p.x(92)} y={p.y(MD2(92)) - 8} fill={C.supply} fontSize={12} fontWeight={600}>
                  Md₂
                </text>
              </>
            )}

            {/* Ms lines */}
            <motion.line
              x1={p.x(MS1)} y1={p.m.t + p.ch} x2={p.x(MS1)} y2={p.m.t + 6}
              stroke={C.supply} strokeWidth={2.6}
              {...revealPath(1)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(MS1)} y={p.m.t - 6} textAnchor="middle" fill={C.supply} fontSize={11}>
              Ms{isExpansion ? '₁' : ''}
            </text>

            {isExpansion && (
              <>
                <motion.line
                  x1={p.x(MS2)} y1={p.m.t + p.ch} x2={p.x(MS2)} y2={p.m.t + 6}
                  stroke={C.supplyAlt} strokeWidth={2.6}
                  {...revealPath(2)}
                  animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                />
                <text x={p.x(MS2)} y={p.m.t - 6} textAnchor="middle" fill={C.supplyAlt} fontSize={11}>
                  Ms₂
                </text>
                <motion.line
                  x1={p.x(MS1) + 6} y1={p.y(88)} x2={p.x(MS2) - 6} y2={p.y(88)}
                  stroke={C.supplyAlt} strokeWidth={1.6}
                  {...revealFade(3)} animate={play ? { opacity: 1 } : { opacity: 0 }}
                />
              </>
            )}

            {/* equilibria */}
            <motion.circle
              cx={p.x(e1.q)} cy={p.y(e1.p)} r={5.5} fill={C.marker}
              {...revealPoint(3)}
              animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            />
            <motion.circle
              cx={p.x(e2.q)} cy={p.y(e2.p)} r={5.5} fill={C.marker}
              {...revealPoint(4)}
              animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            />

            {play && (
              <>
                <Guides p={p} qx={e1.q} py={e1.p} xLabel="M₁" yLabel="r₁" />
                <Guides p={p} qx={e2.q} py={e2.p} color={C.welfareGain} xLabel={isExpansion ? 'M₂' : ''} yLabel="r₂" />
              </>
            )}
          </svg>
        </div>
      )}
    </DiagramFrame>
  );
};

export default LiquidityPreferenceDiagram;
