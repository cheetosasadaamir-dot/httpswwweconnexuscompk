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
 * Hicksian decomposition of a price fall into income and substitution effects — A2 standard.
 *
 * Original budget B₀: Y = 90 − 1.5X  →  tangency A on IC₁ (XY = 1350) at (30, 45).
 * P_x falls: new budget B₁: Y = 90 − 0.9X  →  tangency C on IC₂ (XY = 2250) at (50, 45).
 * Compensating variation line B_c: parallel to B₁ but tangent to the ORIGINAL curve IC₁
 *   →  Y/X = 0.9 and XY = 1350  →  B = (38.7, 34.9), intercept 69.7.
 * Substitution effect  = A → B (X: 30 → 38.7), always positive for a price fall.
 * Income effect        = B → C (X: 38.7 → 50), positive here, so X is a NORMAL good.
 */
const IncomeSubstitutionDiagram = () => {
  const p = plotBox(560, 410, { t: 30, r: 60, b: 62, l: 66 });

  const ic = (k: number) => (x: number) => k / x;
  const icPath = (k: number) => curve(p, ic(k), Math.max(k / 96, 8), Math.min(96, k / 8), 90);

  const A = { x: 30, y: 45 };
  const B = { x: 38.73, y: 34.86 };
  const Cp = { x: 50, y: 45 };

  const b0 = `M ${p.x(0)} ${p.y(90)} L ${p.x(60)} ${p.y(0)}`;
  const b1 = `M ${p.x(0)} ${p.y(90)} L ${p.x(100)} ${p.y(0)}`;
  const bc = `M ${p.x(0)} ${p.y(69.7)} L ${p.x(77.4)} ${p.y(0)}`;

  return (
    <DiagramFrame
      title="Income and Substitution Effects of a Fall in the Price of Good X"
      eyebrow="Figure — Hicksian decomposition"
      legend={[
        { label: 'Original budget B₀', color: C.marker },
        { label: 'New budget B₁ (Pₓ falls)', color: C.social },
        { label: 'Compensated budget B_c', color: C.muted, dashed: true },
        { label: 'IC₁ (original utility)', color: C.demandAlt },
        { label: 'IC₂ (higher utility)', color: C.demand },
      ]}
      note={
        <>
          A fall in P<sub>x</sub> <strong>pivots</strong> the budget line outwards on the X-intercept
          only. Equilibrium moves from A to C. To separate the two forces, draw a{' '}
          <strong>compensated budget line B<sub>c</sub></strong> with the <em>new</em> price ratio but
          just enough income to keep the consumer on the <em>original</em> indifference curve IC₁,
          giving point B.
          <br />
          <strong>Substitution effect (A → B):</strong> X is now relatively cheaper, so the consumer
          switches towards it. This effect is <em>always</em> positive for a price fall.
          <br />
          <strong>Income effect (B → C):</strong> real income has risen. Here it reinforces the
          substitution effect, so X is a <strong>normal good</strong>. For an inferior good the income
          effect works in the opposite direction and partly offsets it; for a <strong>Giffen good</strong>{' '}
          it outweighs the substitution effect entirely and demand falls when price falls.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img" aria-label="Budget line pivot after a price fall, decomposed into substitution effect A to B and income effect B to C">
          <Axes p={p} id="ise" labelX="Quantity of Good X" labelY="Quantity of Good Y" />

          <motion.path d={icPath(1350)} fill="none" stroke={C.demandAlt} strokeWidth={2.2} {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.path d={b0} fill="none" stroke={C.marker} strokeWidth={2.6} {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.circle cx={p.x(A.x)} cy={p.y(A.y)} r={5} fill={C.marker} stroke="white" strokeWidth={1.3} {...revealPoint(1)} animate={play ? revealPoint(1).animate : revealPoint(1).initial} />
          <motion.text x={p.x(A.x) - 16} y={p.y(A.y) - 8} fill={C.marker} fontSize={12} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>A</motion.text>

          {/* New budget line + higher IC */}
          <motion.path d={b1} fill="none" stroke={C.social} strokeWidth={2.6} {...revealPath(2)} animate={play ? revealPath(2).animate : revealPath(2).initial} />
          <motion.path d={icPath(2250)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(3)} animate={play ? revealPath(3).animate : revealPath(3).initial} />
          <motion.circle cx={p.x(Cp.x)} cy={p.y(Cp.y)} r={5} fill={C.social} stroke="white" strokeWidth={1.3} {...revealPoint(4)} animate={play ? revealPoint(4).animate : revealPoint(4).initial} />
          <motion.text x={p.x(Cp.x) + 8} y={p.y(Cp.y) - 8} fill={C.social} fontSize={12} fontWeight="bold" {...revealFade(4)} animate={play ? revealFade(4).animate : revealFade(4).initial}>C</motion.text>

          {/* Compensated line + B */}
          <motion.path d={bc} fill="none" stroke={C.muted} strokeWidth={2} strokeDasharray="7 4" {...revealPath(5)} animate={play ? revealPath(5).animate : revealPath(5).initial} />
          <motion.circle cx={p.x(B.x)} cy={p.y(B.y)} r={5} fill={C.muted} stroke="white" strokeWidth={1.3} {...revealPoint(6)} animate={play ? revealPoint(6).animate : revealPoint(6).initial} />
          <motion.text x={p.x(B.x) + 8} y={p.y(B.y) - 8} fill={C.muted} fontSize={12} fontWeight="bold" {...revealFade(6)} animate={play ? revealFade(6).animate : revealFade(6).initial}>B</motion.text>

          {/* Effect brackets on the X axis */}
          <motion.g {...revealFade(7)} animate={play ? revealFade(7).animate : revealFade(7).initial}>
            {[A, B, Cp].map((pt, i) => (
              <line key={i} x1={p.x(pt.x)} y1={p.y(pt.y)} x2={p.x(pt.x)} y2={p.m.t + p.ch} stroke={C.grid} strokeDasharray="3 3" strokeWidth={1} />
            ))}
            <text x={p.x(A.x)} y={p.m.t + p.ch + 15} fill={C.marker} fontSize={10} textAnchor="middle">X₁</text>
            <text x={p.x(B.x)} y={p.m.t + p.ch + 15} fill={C.muted} fontSize={10} textAnchor="middle">X_s</text>
            <text x={p.x(Cp.x)} y={p.m.t + p.ch + 15} fill={C.social} fontSize={10} textAnchor="middle">X₂</text>

            <line x1={p.x(A.x)} y1={p.m.t + p.ch + 26} x2={p.x(B.x)} y2={p.m.t + p.ch + 26} stroke={C.demand} strokeWidth={2} />
            <line x1={p.x(B.x)} y1={p.m.t + p.ch + 26} x2={p.x(Cp.x)} y2={p.m.t + p.ch + 26} stroke={C.revenue} strokeWidth={2} />
            <text x={(p.x(A.x) + p.x(B.x)) / 2} y={p.m.t + p.ch + 40} fill={C.demand} fontSize={10} textAnchor="middle">Substitution</text>
            <text x={(p.x(B.x) + p.x(Cp.x)) / 2} y={p.m.t + p.ch + 40} fill={C.revenue} fontSize={10} textAnchor="middle">Income</text>
          </motion.g>
        </svg>
      )}
    </DiagramFrame>
  );
};

export default IncomeSubstitutionDiagram;
