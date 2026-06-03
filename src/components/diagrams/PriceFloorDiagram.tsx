import { motion } from 'framer-motion';

/**
 * Price Floor (Minimum Price) Diagram —  / Edexcel Standard
 * Synthesised from tutor2u, EconomicsHelp and Khan Academy conventions.
 * Shows binding minimum price above equilibrium creating a surplus
 * (excess supply) of Q_s − Q_d. Common applications: minimum wage, CAP.
 */
const PriceFloorDiagram = () => {
  const W = 520, H = 400;
  const m = { t: 30, r: 40, b: 60, l: 60 };
  const cw = W - m.l - m.r;
  const ch = H - m.t - m.b;

  const x = (v: number) => m.l + (v / 100) * cw;
  const y = (v: number) => m.t + ch - (v / 100) * ch;

  const Pe = 50, Qe = 50;
  const Pmin = 70;
  const Qd = 25; // along demand at higher Pmin
  const Qs = 75; // along supply at higher Pmin

  const demand = `M ${x(5)} ${y(86)} L ${x(95)} ${y(14)}`;
  const supply = `M ${x(5)} ${y(13)} L ${x(95)} ${y(67)}`;

  const demandColor = 'hsl(185, 100%, 55%)';
  const supplyColor = 'hsl(300, 100%, 65%)';
  const floorColor = 'hsl(140, 80%, 55%)';
  const surplusColor = 'hsl(15, 90%, 55%)';
  const axisColor = 'hsl(220, 14%, 75%)';

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        <line x1={m.l} y1={m.t} x2={m.l} y2={m.t + ch} stroke={axisColor} strokeWidth={1.5} />
        <line x1={m.l} y1={m.t + ch} x2={m.l + cw} y2={m.t + ch} stroke={axisColor} strokeWidth={1.5} />
        <text x={m.l - 40} y={m.t + 12} fill={axisColor} fontSize={12}>Price</text>
        <text x={m.l + cw - 30} y={m.t + ch + 30} fill={axisColor} fontSize={12}>Quantity</text>

        <path d={demand} stroke={demandColor} strokeWidth={2.5} fill="none" />
        <path d={supply} stroke={supplyColor} strokeWidth={2.5} fill="none" />
        <text x={x(95) + 4} y={y(14)} fill={demandColor} fontSize={13} fontWeight="bold">D</text>
        <text x={x(95) + 4} y={y(67)} fill={supplyColor} fontSize={13} fontWeight="bold">S</text>

        {/* equilibrium */}
        <line x1={x(Qe)} y1={y(Pe)} x2={m.l} y2={y(Pe)} stroke={axisColor} strokeDasharray="3 3" />
        <line x1={x(Qe)} y1={y(Pe)} x2={x(Qe)} y2={m.t + ch} stroke={axisColor} strokeDasharray="3 3" />
        <circle cx={x(Qe)} cy={y(Pe)} r={4} fill={axisColor} />
        <text x={m.l - 24} y={y(Pe) + 4} fill={axisColor} fontSize={12}>Pₑ</text>
        <text x={x(Qe) - 6} y={m.t + ch + 16} fill={axisColor} fontSize={12}>Qₑ</text>

        {/* floor line */}
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          x1={m.l} y1={y(Pmin)} x2={m.l + cw} y2={y(Pmin)}
          stroke={floorColor} strokeWidth={2} strokeDasharray="6 4"
        />
        <text x={m.l + cw - 88} y={y(Pmin) - 6} fill={floorColor} fontSize={12} fontWeight="bold">
          P_min (Floor)
        </text>

        <line x1={x(Qd)} y1={y(Pmin)} x2={x(Qd)} y2={m.t + ch} stroke={demandColor} strokeDasharray="3 3" />
        <line x1={x(Qs)} y1={y(Pmin)} x2={x(Qs)} y2={m.t + ch} stroke={supplyColor} strokeDasharray="3 3" />
        <circle cx={x(Qd)} cy={y(Pmin)} r={4} fill={demandColor} />
        <circle cx={x(Qs)} cy={y(Pmin)} r={4} fill={supplyColor} />
        <text x={x(Qd) - 8} y={m.t + ch + 16} fill={demandColor} fontSize={12}>Q_d</text>
        <text x={x(Qs) - 8} y={m.t + ch + 16} fill={supplyColor} fontSize={12}>Qₛ</text>

        <line x1={x(Qd)} y1={y(Pmin) - 14} x2={x(Qs)} y2={y(Pmin) - 14} stroke={surplusColor} strokeWidth={2} />
        <text x={(x(Qd) + x(Qs)) / 2 - 24} y={y(Pmin) - 18} fill={surplusColor} fontSize={12} fontWeight="bold">
          Surplus
        </text>

        <text x={m.l - 36} y={y(Pmin) + 4} fill={floorColor} fontSize={12}>P_min</text>
      </svg>
      <p className="mt-3 text-xs text-muted-foreground">
        A binding minimum price set above Pₑ generates persistent excess supply (Qₛ − Q_d). In labour markets this manifests as classical unemployment; in agricultural markets it requires government intervention to buy and store the surplus (e.g., EU CAP butter mountains, milk lakes).
      </p>
    </div>
  );
};

export default PriceFloorDiagram;
