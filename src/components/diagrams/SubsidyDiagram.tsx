import { motion } from 'framer-motion';

/**
 * Subsidy Diagram — Welfare Analysis
 * Synthesised from tutor2u "Key Diagrams: Producer Subsidies" and
 * EconomicsHelp "Effect of Government Subsidies". Per-unit subsidy
 * shifts S → S+subsidy, lowering price to consumers (Pc) and raising
 * effective revenue to producers (Pp = Pc + subsidy).
 */
const SubsidyDiagram = () => {
  const W = 540, H = 420;
  const m = { t: 30, r: 50, b: 60, l: 60 };
  const cw = W - m.l - m.r;
  const ch = H - m.t - m.b;

  const x = (v: number) => m.l + (v / 100) * cw;
  const y = (v: number) => m.t + ch - (v / 100) * ch;

  // Original eq: Pe=50, Qe=50. Subsidy shifts supply down by 18.
  const Pe = 50, Qe = 50;
  const Pc = 38; // new consumer price (lower)
  const Pp = 56; // new producer effective price (Pc + subsidy)
  const Q1 = 65; // higher equilibrium quantity

  const demand = `M ${x(5)} ${y(86)} L ${x(95)} ${y(14)}`;
  const supply = `M ${x(5)} ${y(13)} L ${x(95)} ${y(67)}`;
  const supplyShift = `M ${x(5)} ${y(13 - 18)} L ${x(95)} ${y(67 - 18)}`; // shift down

  const demandColor = 'hsl(185, 100%, 55%)';
  const supplyColor = 'hsl(300, 100%, 65%)';
  const subsidyColor = 'hsl(140, 80%, 55%)';
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
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
          d={supplyShift} stroke={subsidyColor} strokeWidth={2.5} fill="none" strokeDasharray="6 3"
        />
        <text x={x(95) + 4} y={y(14)} fill={demandColor} fontSize={13} fontWeight="bold">D</text>
        <text x={x(95) + 4} y={y(67)} fill={supplyColor} fontSize={13} fontWeight="bold">S</text>
        <text x={x(95) + 4} y={y(67 - 18)} fill={subsidyColor} fontSize={12} fontWeight="bold">S+sub</text>

        {/* Original equilibrium */}
        <line x1={x(Qe)} y1={y(Pe)} x2={m.l} y2={y(Pe)} stroke={axisColor} strokeDasharray="3 3" />
        <line x1={x(Qe)} y1={y(Pe)} x2={x(Qe)} y2={m.t + ch} stroke={axisColor} strokeDasharray="3 3" />
        <circle cx={x(Qe)} cy={y(Pe)} r={4} fill={axisColor} />
        <text x={m.l - 24} y={y(Pe) + 4} fill={axisColor} fontSize={12}>Pₑ</text>
        <text x={x(Qe) - 6} y={m.t + ch + 16} fill={axisColor} fontSize={12}>Qₑ</text>

        {/* New equilibrium points */}
        <line x1={x(Q1)} y1={y(Pc)} x2={m.l} y2={y(Pc)} stroke={demandColor} strokeDasharray="3 3" />
        <line x1={x(Q1)} y1={y(Pp)} x2={m.l} y2={y(Pp)} stroke={subsidyColor} strokeDasharray="3 3" />
        <line x1={x(Q1)} y1={y(Pp)} x2={x(Q1)} y2={m.t + ch} stroke={axisColor} strokeDasharray="3 3" />

        <circle cx={x(Q1)} cy={y(Pc)} r={4} fill={demandColor} />
        <circle cx={x(Q1)} cy={y(Pp)} r={4} fill={subsidyColor} />

        <text x={m.l - 24} y={y(Pc) + 4} fill={demandColor} fontSize={12}>Pc</text>
        <text x={m.l - 24} y={y(Pp) + 4} fill={subsidyColor} fontSize={12}>Pp</text>
        <text x={x(Q1) - 6} y={m.t + ch + 16} fill={axisColor} fontSize={12}>Q₁</text>

        {/* Subsidy bracket */}
        <line x1={x(Q1) + 10} y1={y(Pc)} x2={x(Q1) + 10} y2={y(Pp)} stroke={subsidyColor} strokeWidth={2} />
        <text x={x(Q1) + 14} y={(y(Pc) + y(Pp)) / 2 + 4} fill={subsidyColor} fontSize={12} fontWeight="bold">
          Subsidy
        </text>

        {/* Government cost shading */}
        <rect x={m.l} y={y(Pp)} width={x(Q1) - m.l} height={y(Pc) - y(Pp)}
          fill={subsidyColor} fillOpacity={0.12} />
        <text x={m.l + (x(Q1) - m.l) / 2 - 50} y={(y(Pc) + y(Pp)) / 2 + 4}
          fill={subsidyColor} fontSize={11} opacity={0.8}>Government cost</text>
      </svg>
      <p className="mt-3 text-xs text-muted-foreground">
        A per-unit subsidy shifts supply rightward (S → S+sub) by the subsidy amount. Consumers pay lower price Pc; producers receive higher effective price Pp = Pc + subsidy. Output expands to Q₁. The shaded rectangle (Pp − Pc) × Q₁ measures the total cost to the government, financed through taxation, raising opportunity-cost concerns.
      </p>
    </div>
  );
};

export default SubsidyDiagram;
