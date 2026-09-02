import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import {
  DIAGRAM_COLORS as C,
  plotBox,
  revealFade,
  revealPath,
  revealPoint,
} from './diagramStyle';

/**
 * Indifference curves, the budget constraint and consumer equilibrium — A2 standard.
 *
 * Budget line: M = 90, P_x = 1.5, P_y = 1  →  Y = 90 − 1.5X (X-intercept 60, Y-intercept 90).
 * Indifference curves are rectangular hyperbolae XY = k (convex to the origin, never crossing).
 * Equilibrium is the TANGENCY of the budget line with the highest attainable curve:
 *   MRS = MU_x / MU_y = P_x / P_y = 1.5  →  Y/X = 1.5  →  X = 30, Y = 45 (k = 1350).
 * IC1 (k = 700) is attainable but not utility-maximising; IC3 (k = 2400) is unattainable.
 */
const BudgetIndifferenceDiagram = () => {
  const p = plotBox(540, 400, { t: 30, r: 58, b: 58, l: 66 });

  const ic = (k: number) => (x: number) => k / x;
  const clampRange = (k: number): [number, number] => {
    const lo = Math.max(k / 96, 6);
    const hi = Math.min(96, k / 6);
    return [lo, hi];
  };
  const icPath = (k: number) => {
    const [lo, hi] = clampRange(k);
    return curve(p, ic(k), lo, hi, 90);
  };

  const budget = `M ${p.x(0)} ${p.y(90)} L ${p.x(60)} ${p.y(0)}`;
  const E = { x: 30, y: 45 };

  return (
    <DiagramFrame
      title="Budget Constraint, Indifference Curves and Consumer Equilibrium"
      eyebrow="Figure — Ordinal utility"
      legend={[
        { label: 'Budget line (M / Pₓ, M / P_y)', color: C.marker },
        { label: 'Attainable indifference curve IC₁', color: C.demandAlt },
        { label: 'Optimal indifference curve IC₂', color: C.demand },
        { label: 'Unattainable IC₃', color: C.muted, dashed: true },
        { label: 'Consumer equilibrium', color: C.revenue, kind: 'dot' },
      ]}
      note={
        <>
          The budget line shows every combination the consumer can just afford; its{' '}
          <strong>slope equals the relative price ratio P<sub>x</sub>/P<sub>y</sub></strong>, and a
          change in income shifts it in parallel while a change in one price pivots it. Indifference
          curves are downward-sloping, convex to the origin (diminishing marginal rate of
          substitution) and can never intersect. Utility is maximised at the{' '}
          <strong>tangency point E</strong>, where{' '}
          <strong>MRS = MU<sub>x</sub>/MU<sub>y</sub> = P<sub>x</sub>/P<sub>y</sub></strong> — the
          ordinal statement of the equimarginal principle. Points on IC₁ are affordable but leave
          utility on the table; IC₃ is preferred but unaffordable at current prices and income.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img" aria-label="Budget line tangent to the highest attainable indifference curve at the consumer equilibrium">
          <Axes p={p} id="bi" labelX="Quantity of Good X" labelY="Quantity of Good Y" />

          {/* Indifference curves */}
          <motion.path d={icPath(700)} fill="none" stroke={C.demandAlt} strokeWidth={2} {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.path d={icPath(1350)} fill="none" stroke={C.demand} strokeWidth={2.8} {...revealPath(1)} animate={play ? revealPath(1).animate : revealPath(1).initial} />
          <motion.path d={icPath(2400)} fill="none" stroke={C.muted} strokeWidth={2} strokeDasharray="6 4" {...revealPath(2)} animate={play ? revealPath(2).animate : revealPath(2).initial} />

          {/* Budget line */}
          <motion.path d={budget} fill="none" stroke={C.marker} strokeWidth={2.8} {...revealPath(3)} animate={play ? revealPath(3).animate : revealPath(3).initial} />

          <motion.g {...revealFade(4)} animate={play ? revealFade(4).animate : revealFade(4).initial}>
            <text x={p.x(3)} y={p.y(92)} fill={C.marker} fontSize={11}>M / P_y</text>
            <text x={p.x(60)} y={p.m.t + p.ch + 16} fill={C.marker} fontSize={11} textAnchor="middle">M / Pₓ</text>
            <text x={p.x(14)} y={p.y(ic(700)(14)) - 8} fill={C.demandAlt} fontSize={11} fontWeight="bold">IC₁</text>
            <text x={p.x(22)} y={p.y(ic(1350)(22)) - 8} fill={C.demand} fontSize={12} fontWeight="bold">IC₂</text>
            <text x={p.x(34)} y={p.y(ic(2400)(34)) - 8} fill={C.muted} fontSize={11} fontWeight="bold">IC₃</text>
          </motion.g>

          {/* Equilibrium */}
          <motion.g {...revealFade(5)} animate={play ? revealFade(5).animate : revealFade(5).initial}>
            <line x1={p.m.l} y1={p.y(E.y)} x2={p.x(E.x)} y2={p.y(E.y)} stroke={C.revenue} strokeDasharray="4 3" strokeWidth={1.1} />
            <line x1={p.x(E.x)} y1={p.y(E.y)} x2={p.x(E.x)} y2={p.m.t + p.ch} stroke={C.revenue} strokeDasharray="4 3" strokeWidth={1.1} />
            <text x={p.m.l - 8} y={p.y(E.y) + 4} fill={C.revenue} fontSize={11} textAnchor="end">Y*</text>
            <text x={p.x(E.x)} y={p.m.t + p.ch + 16} fill={C.revenue} fontSize={11} textAnchor="middle">X*</text>
            <text x={p.x(E.x) + 10} y={p.y(E.y) - 10} fill={C.revenue} fontSize={12} fontWeight="bold">E</text>
            <text x={p.x(E.x) + 10} y={p.y(E.y) + 6} fill={C.revenue} fontSize={10}>MRS = Pₓ/P_y</text>
          </motion.g>
          <motion.circle cx={p.x(E.x)} cy={p.y(E.y)} r={5.5} fill={C.revenue} stroke="white" strokeWidth={1.4} {...revealPoint(5)} animate={play ? revealPoint(5).animate : revealPoint(5).initial} />
        </svg>
      )}
    </DiagramFrame>
  );
};

export default BudgetIndifferenceDiagram;
