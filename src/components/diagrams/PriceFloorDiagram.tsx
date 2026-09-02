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
 * Price Floor (Minimum Price) — Cambridge / Edexcel AS standard.
 * D: P = 90 − 0.8Q, S: P = 10 + 0.8Q  →  equilibrium exactly at (Q 50, P 50).
 * P_min = 70  →  Qd = 25, Qs = 75, surplus = 50.
 * Welfare loss triangle: (Qd, 70) — (Qd, 30) — (Qe 50, Pe 50).
 * Convention checked against tutor2u, Economics Online and Khan Academy.
 */
const PriceFloorDiagram = () => {
  const p = plotBox();
  const { x, y, m, cw, ch } = p;

  const Pe = 50, Qe = 50;
  const Pmin = 70;
  const Qd = 25;
  const Qs = 75;
  const Psd = 30; // supply price at Qd — bottom of the welfare-loss triangle

  const demand = `M ${x(5)} ${y(86)} L ${x(95)} ${y(14)}`;
  const supply = `M ${x(5)} ${y(14)} L ${x(95)} ${y(86)}`;

  return (
    <DiagramFrame
      title="Price Floor (Minimum Price) and the Resulting Surplus"
      eyebrow="Figure — Government price control"
      legend={[
        { label: 'Demand (D)', color: C.demand },
        { label: 'Supply (S)', color: C.supply },
        { label: 'P_min (floor)', color: C.social, dashed: true },
        { label: 'Equilibrium', color: C.marker, kind: 'dot' },
        { label: 'Deadweight welfare loss', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          A <strong>binding</strong> minimum price must be set <em>above</em> P<sub>e</sub>. At P
          <sub>min</sub> quantity demanded contracts to Q<sub>d</sub> while quantity supplied extends
          to Q<sub>s</sub>, creating persistent <strong>excess supply</strong> of Q<sub>s</sub> − Q
          <sub>d</sub>. In labour markets this excess supply of labour is classical (real-wage)
          unemployment; in agricultural markets the state must buy and store the surplus, as under
          the EU Common Agricultural Policy. Producers who still sell gain, but the shaded triangle
          is the <strong>deadweight welfare loss</strong> from output falling from Q<sub>e</sub> to Q
          <sub>d</sub>, plus the resource cost of storing or destroying the surplus.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Price floor diagram showing a minimum price above equilibrium creating excess supply and a deadweight welfare loss triangle"
        >
          <defs>
            <marker id="pf-axis-arrow" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
              <polygon points="0 0, 9 3.5, 0 7" fill={C.axis} />
            </marker>
          </defs>

          <line x1={m.l} y1={m.t + ch} x2={m.l} y2={m.t - 8} stroke={C.axis} strokeWidth={1.6} markerEnd="url(#pf-axis-arrow)" />
          <line x1={m.l} y1={m.t + ch} x2={m.l + cw + 8} y2={m.t + ch} stroke={C.axis} strokeWidth={1.6} markerEnd="url(#pf-axis-arrow)" />
          <text
            x={18}
            y={m.t + ch / 2}
            fill={C.axis}
            fontSize={12}
            textAnchor="middle"
            transform={`rotate(-90, 18, ${m.t + ch / 2})`}
          >
            Price (P)
          </text>
          <text x={m.l + cw / 2} y={p.H - 14} fill={C.axis} fontSize={12} textAnchor="middle">
            Quantity (Q)
          </text>
          <text x={m.l - 12} y={m.t + ch + 15} fill={C.muted} fontSize={11} textAnchor="middle">0</text>

          <motion.path d={demand} stroke={C.demand} strokeWidth={2.6} fill="none" strokeLinecap="round" {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.path d={supply} stroke={C.supply} strokeWidth={2.6} fill="none" strokeLinecap="round" {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.text x={x(95) + 6} y={y(14) + 4} fill={C.demand} fontSize={13} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>D</motion.text>
          <motion.text x={x(95) + 6} y={y(86) + 4} fill={C.supply} fontSize={13} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>S</motion.text>

          <motion.g {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>
            <line x1={m.l} y1={y(Pe)} x2={x(Qe)} y2={y(Pe)} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.2} opacity={0.8} />
            <line x1={x(Qe)} y1={y(Pe)} x2={x(Qe)} y2={m.t + ch} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.2} opacity={0.8} />
            <text x={m.l - 10} y={y(Pe) + 4} fill={C.marker} fontSize={12} textAnchor="end">Pₑ</text>
            <text x={x(Qe)} y={m.t + ch + 16} fill={C.marker} fontSize={12} textAnchor="middle">Qₑ</text>
          </motion.g>
          <motion.circle cx={x(Qe)} cy={y(Pe)} r={5} fill={C.marker} stroke="white" strokeWidth={1.4} {...revealPoint(1)} animate={play ? revealPoint(1).animate : revealPoint(1).initial} />

          <motion.line
            x1={m.l} y1={y(Pmin)} x2={m.l + cw} y2={y(Pmin)}
            stroke={C.social} strokeWidth={2.2} strokeDasharray="7 4"
            {...revealPath(2, 0.7)} animate={play ? revealPath(2, 0.7).animate : revealPath(2, 0.7).initial}
          />
          <motion.text x={m.l + cw} y={y(Pmin) - 8} fill={C.social} fontSize={12} fontWeight="bold" textAnchor="end" {...revealFade(3)} animate={play ? revealFade(3).animate : revealFade(3).initial}>
            Pₘᵢₙ (floor)
          </motion.text>
          <motion.text x={m.l - 10} y={y(Pmin) + 4} fill={C.social} fontSize={12} textAnchor="end" {...revealFade(3)} animate={play ? revealFade(3).animate : revealFade(3).initial}>
            Pₘᵢₙ
          </motion.text>

          <motion.g {...revealFade(4)} animate={play ? revealFade(4).animate : revealFade(4).initial}>
            <line x1={x(Qd)} y1={y(Pmin)} x2={x(Qd)} y2={m.t + ch} stroke={C.demand} strokeDasharray="4 3" strokeWidth={1.2} />
            <line x1={x(Qs)} y1={y(Pmin)} x2={x(Qs)} y2={m.t + ch} stroke={C.supply} strokeDasharray="4 3" strokeWidth={1.2} />
            <circle cx={x(Qd)} cy={y(Pmin)} r={4.5} fill={C.demand} />
            <circle cx={x(Qs)} cy={y(Pmin)} r={4.5} fill={C.supply} />
            <text x={x(Qd)} y={m.t + ch + 16} fill={C.demand} fontSize={12} textAnchor="middle">Q_d</text>
            <text x={x(Qs)} y={m.t + ch + 16} fill={C.supply} fontSize={12} textAnchor="middle">Qₛ</text>
          </motion.g>

          {/* Surplus bracket, drawn above the floor so it never collides with the curves */}
          <motion.g {...revealFade(5)} animate={play ? revealFade(5).animate : revealFade(5).initial}>
            <line x1={x(Qd)} y1={y(Pmin) - 22} x2={x(Qs)} y2={y(Pmin) - 22} stroke={C.marker} strokeWidth={2} />
            <line x1={x(Qd)} y1={y(Pmin) - 27} x2={x(Qd)} y2={y(Pmin) - 17} stroke={C.marker} strokeWidth={2} />
            <line x1={x(Qs)} y1={y(Pmin) - 27} x2={x(Qs)} y2={y(Pmin) - 17} stroke={C.marker} strokeWidth={2} />
            <text x={(x(Qd) + x(Qs)) / 2} y={y(Pmin) - 30} fill={C.marker} fontSize={12} fontWeight="bold" textAnchor="middle">
              Surplus (excess supply)
            </text>
          </motion.g>

          <motion.polygon
            points={`${x(Qd)},${y(Pmin)} ${x(Qd)},${y(Psd)} ${x(Qe)},${y(Pe)}`}
            fill={C.welfareLoss}
            opacity={0.32}
            stroke={C.welfareLoss}
            strokeWidth={1.2}
            {...revealFade(6, 0.6)}
            animate={play ? { opacity: 0.32, transition: revealFade(6, 0.6).transition } : { opacity: 0 }}
          />
          <motion.text x={x(Qd) + 12} y={y(48)} fill={C.welfareLoss} fontSize={11} fontWeight="bold" {...revealFade(7)} animate={play ? revealFade(7).animate : revealFade(7).initial}>
            DWL
          </motion.text>
        </svg>
      )}
    </DiagramFrame>
  );
};

export default PriceFloorDiagram;
