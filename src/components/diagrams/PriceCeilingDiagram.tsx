import { motion } from 'framer-motion';

/**
 * Price Ceiling (Maximum Price) Diagram —  / Edexcel Standard
 * Synthesised from tutor2u, EconomicsHelp, Khan Academy and Investopedia
 * conventions. Shows binding maximum price below equilibrium creating a
 * shortage (excess demand) of Q_d − Q_s and welfare loss triangle.
 */
const PriceCeilingDiagram = () => {
  const W = 520, H = 400;
  const m = { t: 30, r: 40, b: 60, l: 60 };
  const cw = W - m.l - m.r;
  const ch = H - m.t - m.b;

  const x = (v: number) => m.l + (v / 100) * cw;
  const y = (v: number) => m.t + ch - (v / 100) * ch;

  // Demand: P = 90 - 0.8Q, Supply: P = 10 + 0.6Q
  // D: P = 90 − 0.8Q  S: P = 10 + 0.8Q → equilibrium exactly (Q=50, P=50).
  // Pmax = 25 → Qs = 18.75, Qd = 81.25
  const Pe = 50, Qe = 50;
  const Pmax = 25;
  const Qs = 18.75; // along supply at Pmax
  const Qd = 81.25; // along demand at Pmax

  const demand = `M ${x(5)} ${y(86)} L ${x(95)} ${y(14)}`;
  const supply = `M ${x(5)} ${y(14)} L ${x(95)} ${y(86)}`;

  const demandColor = 'hsl(185, 100%, 55%)';
  const supplyColor = 'hsl(300, 100%, 65%)';
  const ceilingColor = 'hsl(0, 85%, 60%)';
  const shortageColor = 'hsl(45, 95%, 55%)';
  const axisColor = 'hsl(220, 14%, 75%)';

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        {/* axes */}
        <line x1={m.l} y1={m.t} x2={m.l} y2={m.t + ch} stroke={axisColor} strokeWidth={1.5} />
        <line x1={m.l} y1={m.t + ch} x2={m.l + cw} y2={m.t + ch} stroke={axisColor} strokeWidth={1.5} />
        <text x={m.l - 40} y={m.t + 12} fill={axisColor} fontSize={12}>Price</text>
        <text x={m.l + cw - 30} y={m.t + ch + 30} fill={axisColor} fontSize={12}>Quantity</text>

        {/* curves */}
        <path d={demand} stroke={demandColor} strokeWidth={2.5} fill="none" />
        <path d={supply} stroke={supplyColor} strokeWidth={2.5} fill="none" />
        <text x={x(95) + 4} y={y(14)} fill={demandColor} fontSize={13} fontWeight="bold">D</text>
        <text x={x(95) + 4} y={y(86)} fill={supplyColor} fontSize={13} fontWeight="bold">S</text>

        {/* equilibrium */}
        <line x1={x(Qe)} y1={y(Pe)} x2={m.l} y2={y(Pe)} stroke={axisColor} strokeDasharray="3 3" />
        <line x1={x(Qe)} y1={y(Pe)} x2={x(Qe)} y2={m.t + ch} stroke={axisColor} strokeDasharray="3 3" />
        <circle cx={x(Qe)} cy={y(Pe)} r={4} fill={axisColor} />
        <text x={m.l - 24} y={y(Pe) + 4} fill={axisColor} fontSize={12}>Pₑ</text>
        <text x={x(Qe) - 6} y={m.t + ch + 16} fill={axisColor} fontSize={12}>Qₑ</text>

        {/* ceiling line */}
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          x1={m.l} y1={y(Pmax)} x2={m.l + cw} y2={y(Pmax)}
          stroke={ceilingColor} strokeWidth={2} strokeDasharray="6 4"
        />
        <text x={m.l + cw - 90} y={y(Pmax) - 6} fill={ceilingColor} fontSize={12} fontWeight="bold">
          P_max (Ceiling)
        </text>

        {/* Qs and Qd markers */}
        <line x1={x(Qs)} y1={y(Pmax)} x2={x(Qs)} y2={m.t + ch} stroke={supplyColor} strokeDasharray="3 3" />
        <line x1={x(Qd)} y1={y(Pmax)} x2={x(Qd)} y2={m.t + ch} stroke={demandColor} strokeDasharray="3 3" />
        <circle cx={x(Qs)} cy={y(Pmax)} r={4} fill={supplyColor} />
        <circle cx={x(Qd)} cy={y(Pmax)} r={4} fill={demandColor} />
        <text x={x(Qs) - 8} y={m.t + ch + 16} fill={supplyColor} fontSize={12}>Qₛ</text>
        <text x={x(Qd) - 8} y={m.t + ch + 16} fill={demandColor} fontSize={12}>Q_d</text>

        {/* Shortage bracket */}
        <line x1={x(Qs)} y1={y(Pmax) + 14} x2={x(Qd)} y2={y(Pmax) + 14} stroke={shortageColor} strokeWidth={2} />
        <text x={(x(Qs) + x(Qd)) / 2 - 30} y={y(Pmax) + 30} fill={shortageColor} fontSize={12} fontWeight="bold">
          Shortage
        </text>

        {/* Y-axis Pmax label */}
        <text x={m.l - 36} y={y(Pmax) + 4} fill={ceilingColor} fontSize={12}>P_max</text>
      </svg>
      <p className="mt-3 text-xs text-muted-foreground">
        A binding maximum price set below Pₑ produces excess demand (Q_d − Qₛ). The market cannot clear via price; non-price rationing (queues, allocation by lottery, black markets) emerges. Producer surplus contracts; consumer welfare is ambiguous because some buyers gain lower prices while others are entirely excluded.
      </p>
    </div>
  );
};

export default PriceCeilingDiagram;
