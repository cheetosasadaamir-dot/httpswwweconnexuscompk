import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import {
  DIAGRAM_COLORS as C,
  plotBox,
  revealFade,
  revealPath,
  revealPoint,
} from './diagramStyle';

/**
 * Producer Subsidy — Cambridge / Edexcel AS standard.
 * D: P = 90 − 0.8Q ; S: P = 10 + 0.6Q  →  equilibrium (Q 57.14, P 44.29).
 * Per-unit subsidy of 18 shifts supply vertically down: S₁: P = −8 + 0.6Q.
 * New equilibrium Q₁ = 70, consumer price Pc = 34, producer price Pp = 52.
 * Consumer share of the subsidy = 44.29 − 34 = 10.29 (57%);
 * producer share = 52 − 44.29 = 7.71 (43%) — the flatter side of the market
 * (here demand) captures the smaller share, per tutor2u / Economics Online.
 */
const SubsidyDiagram = () => {
  const p = plotBox(540, 420, { t: 34, r: 66, b: 62, l: 66 });
  const { x, y, m, cw, ch } = p;

  const Pe = 44.29, Qe = 57.14;
  const Pc = 34;
  const Pp = 52;
  const Q1 = 70;

  const demand = `M ${x(5)} ${y(86)} L ${x(95)} ${y(14)}`;
  const supply = `M ${x(5)} ${y(13)} L ${x(95)} ${y(67)}`;
  const supplySub = `M ${x(5)} ${y(-5)} L ${x(95)} ${y(49)}`;

  return (
    <DiagramFrame
      title="Per-Unit Producer Subsidy and Its Incidence"
      eyebrow="Figure — Government intervention"
      legend={[
        { label: 'Demand (D)', color: C.demand },
        { label: 'Supply (S)', color: C.supply },
        { label: 'Supply after subsidy (S₁)', color: C.social, dashed: true },
        { label: 'Total government cost', color: C.social, kind: 'area' },
        { label: 'Equilibria', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          A per-unit subsidy shifts supply <strong>vertically downwards</strong> by the full subsidy
          amount (S → S₁), because at every quantity the firm now needs a market price lower by
          exactly that amount to cover unit costs. Output expands from Q<sub>e</sub> to Q₁, consumers
          pay the lower price P<sub>c</sub> and producers receive P<sub>p</sub> = P<sub>c</sub> +
          subsidy. The shaded rectangle (P<sub>p</sub> − P<sub>c</sub>) × Q₁ is the{' '}
          <strong>total cost to the taxpayer</strong>. Crucially, the benefit is{' '}
          <strong>shared</strong>: the more inelastic side of the market captures the larger share.
          Here demand is the relatively less elastic side over this range, so consumers take roughly
          57% of the subsidy as a lower price and producers 43% as higher revenue. Evaluation:
          opportunity cost of the spending, risk of producer inefficiency (X-inefficiency), and the
          fact that the subsidy is only welfare-improving if it corrects a genuine positive
          externality.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Subsidy diagram showing supply shifting down by the subsidy, lower consumer price, higher producer price, and the government cost rectangle"
        >
          <defs>
            <marker id="sub-axis-arrow" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
              <polygon points="0 0, 9 3.5, 0 7" fill={C.axis} />
            </marker>
            <marker id="sub-shift-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill={C.social} />
            </marker>
            <clipPath id="sub-clip">
              <rect x={m.l} y={m.t} width={cw} height={ch} />
            </clipPath>
          </defs>

          <line x1={m.l} y1={m.t + ch} x2={m.l} y2={m.t - 8} stroke={C.axis} strokeWidth={1.6} markerEnd="url(#sub-axis-arrow)" />
          <line x1={m.l} y1={m.t + ch} x2={m.l + cw + 8} y2={m.t + ch} stroke={C.axis} strokeWidth={1.6} markerEnd="url(#sub-axis-arrow)" />
          <text x={18} y={m.t + ch / 2} fill={C.axis} fontSize={12} textAnchor="middle" transform={`rotate(-90, 18, ${m.t + ch / 2})`}>
            Price (P)
          </text>
          <text x={m.l + cw / 2} y={p.H - 14} fill={C.axis} fontSize={12} textAnchor="middle">Quantity (Q)</text>
          <text x={m.l - 12} y={m.t + ch + 15} fill={C.muted} fontSize={11} textAnchor="middle">0</text>

          <g clipPath="url(#sub-clip)">
            <motion.path d={demand} stroke={C.demand} strokeWidth={2.6} fill="none" strokeLinecap="round" {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
            <motion.path d={supply} stroke={C.supply} strokeWidth={2.6} fill="none" strokeLinecap="round" {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
            <motion.path d={supplySub} stroke={C.social} strokeWidth={2.6} fill="none" strokeDasharray="7 4" strokeLinecap="round" {...revealPath(3, 1)} animate={play ? revealPath(3, 1).animate : revealPath(3, 1).initial} />
          </g>

          <motion.text x={x(95) + 6} y={y(14) + 4} fill={C.demand} fontSize={13} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>D</motion.text>
          <motion.text x={x(95) + 6} y={y(67) + 4} fill={C.supply} fontSize={13} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>S</motion.text>
          <motion.text x={x(95) + 6} y={y(49) + 4} fill={C.social} fontSize={12} fontWeight="bold" {...revealFade(4)} animate={play ? revealFade(4).animate : revealFade(4).initial}>S₁</motion.text>

          {/* Original equilibrium */}
          <motion.g {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>
            <line x1={m.l} y1={y(Pe)} x2={x(Qe)} y2={y(Pe)} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.2} opacity={0.85} />
            <line x1={x(Qe)} y1={y(Pe)} x2={x(Qe)} y2={m.t + ch} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.2} opacity={0.85} />
            <text x={m.l - 10} y={y(Pe) + 4} fill={C.marker} fontSize={12} textAnchor="end">Pₑ</text>
            <text x={x(Qe)} y={m.t + ch + 16} fill={C.marker} fontSize={12} textAnchor="middle">Qₑ</text>
          </motion.g>
          <motion.circle cx={x(Qe)} cy={y(Pe)} r={5} fill={C.marker} stroke="white" strokeWidth={1.3} {...revealPoint(2)} animate={play ? revealPoint(2).animate : revealPoint(2).initial} />

          {/* Downward shift arrow */}
          <motion.path
            d={`M ${x(48)} ${y(38.8)} L ${x(48)} ${y(23)}`}
            stroke={C.social} strokeWidth={2} fill="none" markerEnd="url(#sub-shift-arrow)"
            {...revealPath(4, 0.5)} animate={play ? revealPath(4, 0.5).animate : revealPath(4, 0.5).initial}
          />
          <motion.text x={x(48) + 8} y={y(30)} fill={C.social} fontSize={11} fontWeight="bold" {...revealFade(5)} animate={play ? revealFade(5).animate : revealFade(5).initial}>
            shift = subsidy
          </motion.text>

          {/* Government cost rectangle */}
          <motion.rect
            x={m.l} y={y(Pp)} width={x(Q1) - m.l} height={y(Pc) - y(Pp)}
            fill={C.social} stroke={C.social} strokeWidth={1} strokeDasharray="3 3"
            {...revealFade(6, 0.6)}
            animate={play ? { opacity: 0.18, transition: revealFade(6, 0.6).transition } : { opacity: 0 }}
          />

          {/* New equilibrium guides */}
          <motion.g {...revealFade(6)} animate={play ? revealFade(6).animate : revealFade(6).initial}>
            <line x1={m.l} y1={y(Pc)} x2={x(Q1)} y2={y(Pc)} stroke={C.demand} strokeDasharray="4 3" strokeWidth={1.3} />
            <line x1={m.l} y1={y(Pp)} x2={x(Q1)} y2={y(Pp)} stroke={C.social} strokeDasharray="4 3" strokeWidth={1.3} />
            <line x1={x(Q1)} y1={y(Pp)} x2={x(Q1)} y2={m.t + ch} stroke={C.axis} strokeDasharray="4 3" strokeWidth={1.3} />
            <text x={m.l - 10} y={y(Pc) + 4} fill={C.demand} fontSize={12} textAnchor="end">P_c</text>
            <text x={m.l - 10} y={y(Pp) + 4} fill={C.social} fontSize={12} textAnchor="end">P_p</text>
            <text x={x(Q1)} y={m.t + ch + 16} fill={C.axis} fontSize={12} textAnchor="middle">Q₁</text>
          </motion.g>
          <motion.circle cx={x(Q1)} cy={y(Pc)} r={5} fill={C.demand} stroke="white" strokeWidth={1.3} {...revealPoint(6)} animate={play ? revealPoint(6).animate : revealPoint(6).initial} />
          <motion.circle cx={x(Q1)} cy={y(Pp)} r={5} fill={C.social} stroke="white" strokeWidth={1.3} {...revealPoint(6)} animate={play ? revealPoint(6).animate : revealPoint(6).initial} />

          <motion.text
            x={m.l + (x(Q1) - m.l) / 2} y={(y(Pc) + y(Pp)) / 2 + 4}
            fill={C.social} fontSize={11} fontWeight="bold" textAnchor="middle"
            {...revealFade(7)} animate={play ? revealFade(7).animate : revealFade(7).initial}
          >
            Total government cost = subsidy × Q₁
          </motion.text>

          {/* Incidence bracket */}
          <motion.g {...revealFade(8)} animate={play ? revealFade(8).animate : revealFade(8).initial}>
            <line x1={x(Q1) + 12} y1={y(Pc)} x2={x(Q1) + 12} y2={y(Pp)} stroke={C.marker} strokeWidth={2} />
            <line x1={x(Q1) + 7} y1={y(Pc)} x2={x(Q1) + 17} y2={y(Pc)} stroke={C.marker} strokeWidth={2} />
            <line x1={x(Q1) + 7} y1={y(Pp)} x2={x(Q1) + 17} y2={y(Pp)} stroke={C.marker} strokeWidth={2} />
            <text x={x(Q1) + 20} y={(y(Pc) + y(Pp)) / 2 + 4} fill={C.marker} fontSize={11} fontWeight="bold">Subsidy</text>
          </motion.g>
        </svg>
      )}
    </DiagramFrame>
  );
};

export default SubsidyDiagram;
