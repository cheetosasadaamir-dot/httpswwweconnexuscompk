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
 * Price Ceiling (Maximum Price) — Cambridge / Edexcel AS standard.
 * D: P = 90 − 0.8Q, S: P = 10 + 0.8Q  →  equilibrium exactly at (Q 50, P 50).
 * P_max = 25  →  Qs = 18.75, Qd = 81.25, shortage = 62.5.
 * Welfare loss triangle: (Qs, 75) — (Qs, 25) — (Qe 50, Pe 50).
 * Convention checked against tutor2u, Economics Online and Khan Academy.
 */
const PriceCeilingDiagram = () => {
  const p = plotBox();
  const { x, y, m, cw, ch } = p;

  const Pe = 50, Qe = 50;
  const Pmax = 25;
  const Qs = 18.75;
  const Qd = 81.25;
  const Pdws = 75; // demand price at Qs — top of the welfare-loss triangle

  const demand = `M ${x(5)} ${y(86)} L ${x(95)} ${y(14)}`;
  const supply = `M ${x(5)} ${y(14)} L ${x(95)} ${y(86)}`;

  return (
    <DiagramFrame
      title="Price Ceiling (Maximum Price) and the Resulting Shortage"
      eyebrow="Figure — Government price control"
      legend={[
        { label: 'Demand (D)', color: C.demand },
        { label: 'Supply (S)', color: C.supply },
        { label: 'P_max (ceiling)', color: C.intervention, dashed: true },
        { label: 'Equilibrium', color: C.marker, kind: 'dot' },
        { label: 'Deadweight welfare loss', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          A <strong>binding</strong> maximum price must be set <em>below</em> P<sub>e</sub>. At P
          <sub>max</sub> quantity supplied contracts to Q<sub>s</sub> while quantity demanded extends
          to Q<sub>d</sub>, producing persistent <strong>excess demand</strong> of Q<sub>d</sub> − Q
          <sub>s</sub>. Because price can no longer ration, non-price rationing appears: queues,
          waiting lists, allocation by seller preference and secondary (black) markets clearing at
          prices above P<sub>e</sub>. Producer surplus unambiguously falls; consumer surplus is
          ambiguous because inframarginal buyers gain the lower price while excluded buyers lose all
          surplus. The shaded triangle is the <strong>deadweight welfare loss</strong> — mutually
          beneficial trades between Q<sub>s</sub> and Q<sub>e</sub> that no longer occur.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Price ceiling diagram showing a maximum price below equilibrium creating excess demand and a deadweight welfare loss triangle"
        >
          <defs>
            <marker id="pc-axis-arrow" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
              <polygon points="0 0, 9 3.5, 0 7" fill={C.axis} />
            </marker>
          </defs>

          {/* Axes */}
          <line x1={m.l} y1={m.t + ch} x2={m.l} y2={m.t - 8} stroke={C.axis} strokeWidth={1.6} markerEnd="url(#pc-axis-arrow)" />
          <line x1={m.l} y1={m.t + ch} x2={m.l + cw + 8} y2={m.t + ch} stroke={C.axis} strokeWidth={1.6} markerEnd="url(#pc-axis-arrow)" />
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

          {/* Curves */}
          <motion.path d={demand} stroke={C.demand} strokeWidth={2.6} fill="none" strokeLinecap="round" {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.path d={supply} stroke={C.supply} strokeWidth={2.6} fill="none" strokeLinecap="round" {...revealPath(0)} animate={play ? revealPath(0).animate : revealPath(0).initial} />
          <motion.text x={x(95) + 6} y={y(14) + 4} fill={C.demand} fontSize={13} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>D</motion.text>
          <motion.text x={x(95) + 6} y={y(86) + 4} fill={C.supply} fontSize={13} fontWeight="bold" {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>S</motion.text>

          {/* Free-market equilibrium */}
          <motion.g {...revealFade(1)} animate={play ? revealFade(1).animate : revealFade(1).initial}>
            <line x1={m.l} y1={y(Pe)} x2={x(Qe)} y2={y(Pe)} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.2} opacity={0.8} />
            <line x1={x(Qe)} y1={y(Pe)} x2={x(Qe)} y2={m.t + ch} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.2} opacity={0.8} />
            <text x={m.l - 10} y={y(Pe) + 4} fill={C.marker} fontSize={12} textAnchor="end">Pₑ</text>
            <text x={x(Qe)} y={m.t + ch + 16} fill={C.marker} fontSize={12} textAnchor="middle">Qₑ</text>
          </motion.g>
          <motion.circle cx={x(Qe)} cy={y(Pe)} r={5} fill={C.marker} stroke="white" strokeWidth={1.4} {...revealPoint(1)} animate={play ? revealPoint(1).animate : revealPoint(1).initial} />

          {/* Ceiling */}
          <motion.line
            x1={m.l} y1={y(Pmax)} x2={m.l + cw} y2={y(Pmax)}
            stroke={C.intervention} strokeWidth={2.2} strokeDasharray="7 4"
            {...revealPath(2, 0.7)} animate={play ? revealPath(2, 0.7).animate : revealPath(2, 0.7).initial}
          />
          <motion.text x={m.l + cw} y={y(Pmax) - 8} fill={C.intervention} fontSize={12} fontWeight="bold" textAnchor="end" {...revealFade(3)} animate={play ? revealFade(3).animate : revealFade(3).initial}>
            Pₘₐₓ (ceiling)
          </motion.text>
          <motion.text x={m.l - 10} y={y(Pmax) + 4} fill={C.intervention} fontSize={12} textAnchor="end" {...revealFade(3)} animate={play ? revealFade(3).animate : revealFade(3).initial}>
            Pₘₐₓ
          </motion.text>

          {/* Qs / Qd */}
          <motion.g {...revealFade(4)} animate={play ? revealFade(4).animate : revealFade(4).initial}>
            <line x1={x(Qs)} y1={y(Pmax)} x2={x(Qs)} y2={m.t + ch} stroke={C.supply} strokeDasharray="4 3" strokeWidth={1.2} />
            <line x1={x(Qd)} y1={y(Pmax)} x2={x(Qd)} y2={m.t + ch} stroke={C.demand} strokeDasharray="4 3" strokeWidth={1.2} />
            <circle cx={x(Qs)} cy={y(Pmax)} r={4.5} fill={C.supply} />
            <circle cx={x(Qd)} cy={y(Pmax)} r={4.5} fill={C.demand} />
            <text x={x(Qs)} y={m.t + ch + 16} fill={C.supply} fontSize={12} textAnchor="middle">Qₛ</text>
            <text x={x(Qd)} y={m.t + ch + 16} fill={C.demand} fontSize={12} textAnchor="middle">Q_d</text>
          </motion.g>

          {/* Shortage bracket */}
          <motion.g {...revealFade(5)} animate={play ? revealFade(5).animate : revealFade(5).initial}>
            <line x1={x(Qs)} y1={y(Pmax) + 18} x2={x(Qd)} y2={y(Pmax) + 18} stroke={C.marker} strokeWidth={2} />
            <line x1={x(Qs)} y1={y(Pmax) + 13} x2={x(Qs)} y2={y(Pmax) + 23} stroke={C.marker} strokeWidth={2} />
            <line x1={x(Qd)} y1={y(Pmax) + 13} x2={x(Qd)} y2={y(Pmax) + 23} stroke={C.marker} strokeWidth={2} />
            <text x={(x(Qs) + x(Qd)) / 2} y={y(Pmax) + 36} fill={C.marker} fontSize={12} fontWeight="bold" textAnchor="middle">
              Shortage (excess demand)
            </text>
          </motion.g>

          {/* Deadweight welfare loss */}
          <motion.polygon
            points={`${x(Qs)},${y(Pdws)} ${x(Qs)},${y(Pmax)} ${x(Qe)},${y(Pe)}`}
            fill={C.welfareLoss}
            opacity={0.32}
            stroke={C.welfareLoss}
            strokeWidth={1.2}
            {...revealFade(6, 0.6)}
            animate={play ? { opacity: 0.32, transition: revealFade(6, 0.6).transition } : { opacity: 0 }}
          />
          <motion.text x={x(Qs) + 14} y={y(52)} fill={C.welfareLoss} fontSize={11} fontWeight="bold" {...revealFade(7)} animate={play ? revealFade(7).animate : revealFade(7).initial}>
            DWL
          </motion.text>
        </svg>
      )}
    </DiagramFrame>
  );
};

export default PriceCeilingDiagram;
