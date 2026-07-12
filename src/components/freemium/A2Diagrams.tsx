import { memo } from 'react';

const cyan = 'hsl(186 100% 50%)';
const cyanLight = 'hsl(186 100% 70%)';
const cyanDim = 'hsl(186 100% 30%)';
const textColor = 'hsl(220 14% 85%)';
const textDim = 'hsl(220 14% 60%)';
const gridColor = 'hsl(220 14% 20%)';
const axisColor = 'hsl(220 14% 55%)';
const blue = 'hsl(234 89% 74%)';
const green = 'hsl(142 70% 50%)';
const red = 'hsl(0 70% 60%)';
const orange = 'hsl(30 90% 60%)';
const purple = 'hsl(270 70% 65%)';

const DiagramWrapper = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="my-4 p-4 rounded-xl border border-accent/20 bg-card/20">
    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{title}</p>
    {children}
  </div>
);

// Axes helper
const Axes = ({ w = 380, h = 260, ox = 50, oy = 20, xLabel, yLabel }: { w?: number; h?: number; ox?: number; oy?: number; xLabel: string; yLabel: string }) => (
  <g>
    <line x1={ox} y1={oy} x2={ox} y2={h} stroke={axisColor} strokeWidth="1.5" />
    <line x1={ox} y1={h} x2={w} y2={h} stroke={axisColor} strokeWidth="1.5" />
    <polygon points={`${ox},${oy} ${ox - 4},${oy + 8} ${ox + 4},${oy + 8}`} fill={axisColor} />
    <polygon points={`${w},${h} ${w - 8},${h - 4} ${w - 8},${h + 4}`} fill={axisColor} />
    <text x={12} y={h / 2 + oy / 2} fill={textColor} fontSize="11" fontWeight="600" transform={`rotate(-90, 12, ${h / 2 + oy / 2})`} textAnchor="middle">{yLabel}</text>
    <text x={(w + ox) / 2} y={h + 18} fill={textColor} fontSize="11" fontWeight="600" textAnchor="middle">{xLabel}</text>
  </g>
);

export const IndifferenceCurveDiagram = memo(() => (
  <DiagramWrapper title="Indifference Curves & Budget Line">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Good B" yLabel="Good A" h={260} />
      {/* IC1 */}
      <path d="M 80 80 Q 120 120, 160 160 Q 220 210, 340 230" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="345" y="225" fill={cyan} fontSize="12" fontWeight="700">I₁</text>
      {/* IC2 */}
      <path d="M 80 55 Q 130 100, 180 140 Q 250 190, 350 205" fill="none" stroke={cyanLight} strokeWidth="2" strokeDasharray="6 3" />
      <text x="355" y="200" fill={cyanLight} fontSize="12" fontWeight="700">I₂</text>
      {/* Budget line B1 */}
      <line x1="80" y1="50" x2="320" y2="260" stroke={blue} strokeWidth="2" />
      <text x="325" y="258" fill={blue} fontSize="11" fontWeight="600">B₁</text>
      {/* Tangent point E1 */}
      <circle cx="170" cy="148" r="5" fill={green} />
      <text x="175" y="140" fill={green} fontSize="11" fontWeight="700">E₁</text>
      {/* Labels */}
      <text x="200" y="28" fill={textDim} fontSize="10" textAnchor="middle">Optimum: Budget line tangent to highest IC</text>
    </svg>
  </DiagramWrapper>
));
IndifferenceCurveDiagram.displayName = 'IndifferenceCurveDiagram';

export const SubstitutionIncomeEffectDiagram = memo(() => (
  <DiagramWrapper title="Substitution & Income Effect (Normal Good B — Price Decrease)">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Good B" yLabel="Good A" h={270} />
      {/* B1 old budget */}
      <line x1="70" y1="50" x2="260" y2="270" stroke={blue} strokeWidth="2" />
      <text x="265" y="268" fill={blue} fontSize="10">B₁</text>
      {/* B_comp compensated budget (parallel shift) */}
      <line x1="70" y1="50" x2="330" y2="270" stroke={orange} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="335" y="268" fill={orange} fontSize="10">B'</text>
      {/* B2 new budget */}
      <line x1="70" y1="50" x2="380" y2="270" stroke={green} strokeWidth="2" />
      <text x="383" y="268" fill={green} fontSize="10">B₂</text>
      {/* IC1 */}
      <path d="M 80 90 Q 130 140, 180 175 Q 230 210, 330 235" fill="none" stroke={cyan} strokeWidth="2" />
      <text x="335" y="232" fill={cyan} fontSize="11">I₁</text>
      {/* IC2 */}
      <path d="M 80 60 Q 140 110, 220 155 Q 290 190, 370 210" fill="none" stroke={cyanLight} strokeWidth="2" />
      <text x="374" y="207" fill={cyanLight} fontSize="11">I₂</text>
      {/* E1 */}
      <circle cx="155" cy="160" r="5" fill={red} />
      <text x="140" y="152" fill={red} fontSize="11" fontWeight="700">E₁</text>
      {/* E2 */}
      <circle cx="225" cy="185" r="5" fill={orange} />
      <text x="230" y="178" fill={orange} fontSize="11" fontWeight="700">E₂</text>
      {/* E3 */}
      <circle cx="290" cy="175" r="5" fill={green} />
      <text x="295" y="168" fill={green} fontSize="11" fontWeight="700">E₃</text>
      {/* Arrows */}
      <path d="M 165 165 L 215 183" stroke={orange} strokeWidth="1.5" fill="none" markerEnd="url(#arrow-o)" />
      <path d="M 235 183 L 280 178" stroke={green} strokeWidth="1.5" fill="none" markerEnd="url(#arrow-g)" />
      {/* Labels */}
      <text x="175" y="200" fill={orange} fontSize="9">Substitution</text>
      <text x="255" y="200" fill={green} fontSize="9">Income</text>
      <defs>
        <marker id="arrow-o" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill={orange} /></marker>
        <marker id="arrow-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill={green} /></marker>
      </defs>
    </svg>
  </DiagramWrapper>
));
SubstitutionIncomeEffectDiagram.displayName = 'SubstitutionIncomeEffectDiagram';

export const DeadweightLossDiagram = memo(() => (
  <DiagramWrapper title="Deadweight Welfare Loss — Negative Production Externality">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity" yLabel="Price / Cost" h={260} />
      {/* MPC (Supply) */}
      <line x1="70" y1="220" x2="350" y2="60" stroke={blue} strokeWidth="2" />
      <text x="355" y="58" fill={blue} fontSize="11" fontWeight="600">MPC (S)</text>
      {/* MSC */}
      <line x1="70" y1="180" x2="350" y2="30" stroke={red} strokeWidth="2" />
      <text x="355" y="28" fill={red} fontSize="11" fontWeight="600">MSC</text>
      {/* Demand */}
      <line x1="70" y1="40" x2="350" y2="240" stroke={cyan} strokeWidth="2" />
      <text x="355" y="238" fill={cyan} fontSize="11" fontWeight="600">D (MPB)</text>
      {/* DWL triangle */}
      <polygon points="220,118 260,135 220,155" fill="hsla(0, 70%, 60%, 0.3)" stroke={red} strokeWidth="1" />
      <text x="240" y="148" fill={red} fontSize="9" fontWeight="700">DWL</text>
      {/* Market eq */}
      <line x1="260" y1="135" x2="260" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <line x1="50" y1="135" x2="260" y2="135" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="260" y="275" fill={textDim} fontSize="10" textAnchor="middle">Q</text>
      <text x="40" y="138" fill={textDim} fontSize="10">P</text>
      {/* Social optimum */}
      <line x1="220" y1="118" x2="220" y2="260" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <line x1="50" y1="118" x2="220" y2="118" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="220" y="275" fill={green} fontSize="10" textAnchor="middle">Q*</text>
      <text x="38" y="115" fill={green} fontSize="10">P*</text>
    </svg>
  </DiagramWrapper>
));
DeadweightLossDiagram.displayName = 'DeadweightLossDiagram';

export const ShortRunCostsDiagram = memo(() => (
  <DiagramWrapper title="Short-Run Cost Curves (MC, ATC, AVC, AFC)">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Output (Q)" yLabel="Cost (£)" h={260} />
      {/* ATC U-shape */}
      <path d="M 80 200 Q 120 100, 200 90 Q 280 85, 350 140" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="355" y="138" fill={cyan} fontSize="11" fontWeight="700">ATC</text>
      {/* AVC U-shape */}
      <path d="M 80 230 Q 130 140, 200 120 Q 270 110, 350 160" fill="none" stroke={blue} strokeWidth="2" />
      <text x="355" y="158" fill={blue} fontSize="11" fontWeight="600">AVC</text>
      {/* MC curve */}
      <path d="M 100 180 Q 140 80, 180 70 Q 200 65, 230 80 Q 300 130, 350 60" fill="none" stroke={red} strokeWidth="2" />
      <text x="355" y="58" fill={red} fontSize="11" fontWeight="600">MC</text>
      {/* AFC */}
      <path d="M 80 120 Q 150 80, 250 50 Q 320 40, 370 38" fill="none" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="375" y="36" fill={textDim} fontSize="10">AFC</text>
      {/* Optimum point MC=ATC */}
      <circle cx="230" cy="86" r="4" fill={green} />
      <text x="235" y="78" fill={green} fontSize="9" fontWeight="700">MC=ATC</text>
    </svg>
  </DiagramWrapper>
));
ShortRunCostsDiagram.displayName = 'ShortRunCostsDiagram';

export const LRACCurveDiagram = memo(() => (
  <DiagramWrapper title="Long-Run Average Cost (LRAC) — Envelope Curve">
    <svg viewBox="0 0 420 300" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Output (Q)" yLabel="Cost (£)" h={260} />
      {/* SRAC curves */}
      <path d="M 70 180 Q 100 100, 130 90 Q 160 85, 190 120" fill="none" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="120" y="80" fill={textDim} fontSize="9">SRAC₁</text>
      <path d="M 130 150 Q 170 80, 210 70 Q 250 65, 280 100" fill="none" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="200" y="60" fill={textDim} fontSize="9">SRAC₂</text>
      <path d="M 220 130 Q 260 65, 300 58 Q 340 56, 370 85" fill="none" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="290" y="48" fill={textDim} fontSize="9">SRAC₃</text>
      {/* LRAC envelope */}
      <path d="M 80 170 Q 140 85, 220 62 Q 300 55, 380 80" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="385" y="78" fill={cyan} fontSize="11" fontWeight="700">LRAC</text>
      {/* MES point */}
      <circle cx="300" cy="56" r="4" fill={green} />
      <line x1="300" y1="56" x2="300" y2="260" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="305" y="45" fill={green} fontSize="9" fontWeight="700">MES</text>
      {/* Labels */}
      <text x="130" y="250" fill={orange} fontSize="9">Economies of Scale</text>
      <path d="M 125 242 L 180 242" stroke={orange} strokeWidth="1" markerEnd="url(#arr-eos)" />
      <text x="320" y="250" fill={red} fontSize="9">Diseconomies</text>
      <defs>
        <marker id="arr-eos" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill={orange} /></marker>
      </defs>
    </svg>
  </DiagramWrapper>
));
LRACCurveDiagram.displayName = 'LRACCurveDiagram';

export const PerfectCompetitionDiagram = memo(() => (
  <DiagramWrapper title="Perfect Competition — Short Run & Long Run">
    <svg viewBox="0 0 420 300" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Output (Q)" yLabel="Price / Cost" h={260} />
      {/* D = AR = MR horizontal */}
      <line x1="50" y1="120" x2="380" y2="120" stroke={cyan} strokeWidth="2" />
      <text x="385" y="118" fill={cyan} fontSize="10" fontWeight="700">D=AR=MR</text>
      {/* MC curve */}
      <path d="M 100 220 Q 150 100, 200 80 Q 250 70, 320 40" fill="none" stroke={red} strokeWidth="2" />
      <text x="325" y="38" fill={red} fontSize="10" fontWeight="600">MC</text>
      {/* ATC curve */}
      <path d="M 100 200 Q 160 100, 230 95 Q 300 100, 370 150" fill="none" stroke={blue} strokeWidth="2" />
      <text x="375" y="148" fill={blue} fontSize="10" fontWeight="600">ATC</text>
      {/* Profit max point MC=MR */}
      <circle cx="248" cy="120" r="4" fill={green} />
      <text x="253" y="112" fill={green} fontSize="9" fontWeight="700">MC=MR</text>
      {/* Supernormal profit shading */}
      <rect x="50" y="95" width="198" height="25" fill="hsla(142, 70%, 50%, 0.1)" stroke={green} strokeWidth="0.5" />
      <text x="150" y="108" fill={green} fontSize="8" textAnchor="middle">Supernormal Profit (SR)</text>
      {/* Q line */}
      <line x1="248" y1="120" x2="248" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="248" y="275" fill={textDim} fontSize="10" textAnchor="middle">q</text>
    </svg>
  </DiagramWrapper>
));
PerfectCompetitionDiagram.displayName = 'PerfectCompetitionDiagram';

export const MonopolisticCompetitionDiagram = memo(() => (
  <DiagramWrapper title="Monopolistic Competition — Short Run">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Output (Q)" yLabel="Price / Cost" h={260} />
      {/* Demand curve (downward sloping) */}
      <line x1="70" y1="40" x2="350" y2="240" stroke={cyan} strokeWidth="2" />
      <text x="355" y="238" fill={cyan} fontSize="10" fontWeight="600">D (AR)</text>
      {/* MR below demand */}
      <line x1="70" y1="40" x2="250" y2="260" stroke={cyanDim} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="255" y="258" fill={cyanDim} fontSize="10">MR</text>
      {/* MC curve */}
      <path d="M 100 220 Q 140 100, 180 80 Q 230 70, 320 40" fill="none" stroke={red} strokeWidth="2" />
      <text x="325" y="38" fill={red} fontSize="10" fontWeight="600">MC</text>
      {/* ATC */}
      <path d="M 100 200 Q 150 110, 210 100 Q 280 100, 350 140" fill="none" stroke={blue} strokeWidth="2" />
      <text x="355" y="138" fill={blue} fontSize="10" fontWeight="600">ATC</text>
      {/* MC=MR point */}
      <circle cx="170" cy="140" r="4" fill={green} />
      <line x1="170" y1="140" x2="170" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="170" y="275" fill={textDim} fontSize="10" textAnchor="middle">q</text>
    </svg>
  </DiagramWrapper>
));
MonopolisticCompetitionDiagram.displayName = 'MonopolisticCompetitionDiagram';

export const KinkedDemandDiagram = memo(() => (
  <DiagramWrapper title="Kinked Demand Curve — Oligopoly">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Output (Q)" yLabel="Price" h={260} />
      {/* Elastic portion (above kink) */}
      <line x1="80" y1="50" x2="200" y2="130" stroke={cyan} strokeWidth="2.5" />
      {/* Inelastic portion (below kink) */}
      <line x1="200" y1="130" x2="330" y2="230" stroke={cyan} strokeWidth="2.5" />
      <text x="335" y="228" fill={cyan} fontSize="11" fontWeight="600">D</text>
      {/* Kink point */}
      <circle cx="200" cy="130" r="5" fill={green} />
      <text x="210" y="125" fill={green} fontSize="10" fontWeight="700">P</text>
      {/* MR with gap */}
      <line x1="80" y1="80" x2="200" y2="160" stroke={cyanDim} strokeWidth="1.5" />
      <line x1="200" y1="200" x2="280" y2="260" stroke={cyanDim} strokeWidth="1.5" />
      <text x="285" y="258" fill={cyanDim} fontSize="10">MR</text>
      {/* MR gap */}
      <line x1="200" y1="160" x2="200" y2="200" stroke={red} strokeWidth="2" />
      <text x="207" y="183" fill={red} fontSize="9" fontWeight="700">Gap</text>
      {/* P line */}
      <line x1="50" y1="130" x2="200" y2="130" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <line x1="200" y1="130" x2="200" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="133" fill={textDim} fontSize="10">P</text>
      <text x="200" y="275" fill={textDim} fontSize="10" textAnchor="middle">Q</text>
      {/* Annotations */}
      <text x="100" y="45" fill={orange} fontSize="9">Elastic (price rise → big loss)</text>
      <text x="240" y="250" fill={orange} fontSize="9">Inelastic (price cut → small gain)</text>
    </svg>
  </DiagramWrapper>
));
KinkedDemandDiagram.displayName = 'KinkedDemandDiagram';

export const GameTheoryMatrixDiagram = memo(() => (
  <DiagramWrapper title="Game Theory — Payoff Matrix (Prisoners' Dilemma)">
    <svg viewBox="0 0 380 260" className="w-full h-auto max-w-md mx-auto">
      {/* Headers */}
      <text x="240" y="25" fill={textColor} fontSize="13" fontWeight="700" textAnchor="middle">Company B</text>
      <text x="20" y="150" fill={textColor} fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90, 20, 150)">Company A</text>
      {/* Column headers */}
      <text x="180" y="55" fill={cyan} fontSize="11" fontWeight="600" textAnchor="middle">$1.00</text>
      <text x="300" y="55" fill={cyan} fontSize="11" fontWeight="600" textAnchor="middle">$0.90</text>
      {/* Row headers */}
      <text x="90" y="110" fill={cyan} fontSize="11" fontWeight="600" textAnchor="middle">$1.00</text>
      <text x="90" y="190" fill={cyan} fontSize="11" fontWeight="600" textAnchor="middle">$0.90</text>
      {/* Grid */}
      <rect x="120" y="65" width="120" height="60" fill="hsla(186, 100%, 50%, 0.05)" stroke={axisColor} strokeWidth="1" />
      <rect x="240" y="65" width="120" height="60" fill="hsla(186, 100%, 50%, 0.05)" stroke={axisColor} strokeWidth="1" />
      <rect x="120" y="125" width="120" height="60" fill="hsla(186, 100%, 50%, 0.05)" stroke={axisColor} strokeWidth="1" />
      <rect x="240" y="125" width="120" height="60" fill="hsla(186, 100%, 50%, 0.05)" stroke={axisColor} strokeWidth="1" />
      {/* Payoffs */}
      <text x="180" y="100" fill={green} fontSize="12" fontWeight="700" textAnchor="middle">A: $3m, B: $3m</text>
      <text x="300" y="100" fill={textColor} fontSize="12" textAnchor="middle">A: $1m, B: $4m</text>
      <text x="180" y="160" fill={textColor} fontSize="12" textAnchor="middle">A: $4m, B: $1m</text>
      <text x="300" y="160" fill={red} fontSize="12" textAnchor="middle">A: $2m, B: $2m</text>
      {/* Nash label */}
      <rect x="135" y="72" width="95" height="40" fill="none" stroke={green} strokeWidth="2" rx="4" />
      <text x="183" y="125" fill={green} fontSize="9" fontWeight="700" textAnchor="middle">Nash Equilibrium</text>
      {/* Legend */}
      <text x="190" y="220" fill={textDim} fontSize="9" textAnchor="middle">Dominant strategy: Both sell at $1.00 → $3m each</text>
      <text x="190" y="240" fill={textDim} fontSize="9" textAnchor="middle">Temptation: undercut to $0.90 for $4m (but both lose if both cut)</text>
    </svg>
  </DiagramWrapper>
));
GameTheoryMatrixDiagram.displayName = 'GameTheoryMatrixDiagram';

export const MonopolyDiagram = memo(() => (
  <DiagramWrapper title="Monopoly — Supernormal Profit">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Output (Q)" yLabel="Price / Cost" h={260} />
      {/* Demand */}
      <line x1="70" y1="40" x2="350" y2="240" stroke={cyan} strokeWidth="2" />
      <text x="355" y="238" fill={cyan} fontSize="10" fontWeight="600">D (AR)</text>
      {/* MR */}
      <line x1="70" y1="40" x2="220" y2="260" stroke={cyanDim} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="225" y="258" fill={cyanDim} fontSize="10">MR</text>
      {/* MC */}
      <path d="M 90 230 Q 130 120, 170 90 Q 220 70, 320 40" fill="none" stroke={red} strokeWidth="2" />
      <text x="325" y="38" fill={red} fontSize="10" fontWeight="600">MC</text>
      {/* ATC */}
      <path d="M 90 200 Q 140 110, 200 100 Q 270 105, 350 150" fill="none" stroke={blue} strokeWidth="2" />
      <text x="355" y="148" fill={blue} fontSize="10" fontWeight="600">ATC</text>
      {/* MC=MR point */}
      <circle cx="155" cy="140" r="4" fill={green} />
      {/* Q line up to demand */}
      <line x1="155" y1="140" x2="155" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <line x1="155" y1="108" x2="155" y2="140" stroke={green} strokeWidth="1" strokeDasharray="3" />
      {/* Price on demand curve */}
      <circle cx="155" cy="108" r="4" fill={cyan} />
      <line x1="50" y1="108" x2="155" y2="108" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      {/* ATC at q */}
      <line x1="50" y1="130" x2="155" y2="130" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      {/* Supernormal profit */}
      <rect x="50" y="108" width="105" height="22" fill="hsla(142, 70%, 50%, 0.12)" stroke={green} strokeWidth="0.5" />
      <text x="103" y="122" fill={green} fontSize="8" textAnchor="middle">Supernormal Profit</text>
      <text x="42" y="111" fill={textDim} fontSize="10">Pm</text>
      <text x="155" y="275" fill={textDim} fontSize="10" textAnchor="middle">Qm</text>
    </svg>
  </DiagramWrapper>
));
MonopolyDiagram.displayName = 'MonopolyDiagram';

export const ProfitMaximisationDiagram = memo(() => (
  <DiagramWrapper title="Profit Maximisation — MC = MR">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Output (Q)" yLabel="Revenue / Cost" h={260} />
      {/* MC curve */}
      <path d="M 80 220 Q 130 100, 180 80 Q 240 70, 340 40" fill="none" stroke={red} strokeWidth="2.5" />
      <text x="345" y="38" fill={red} fontSize="11" fontWeight="600">MC</text>
      {/* MR curve */}
      <path d="M 80 60 Q 180 120, 280 200 Q 330 240, 350 260" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="355" y="258" fill={cyan} fontSize="11" fontWeight="600">MR</text>
      {/* Intersection */}
      <circle cx="200" cy="110" r="5" fill={green} />
      <text x="210" y="105" fill={green} fontSize="10" fontWeight="700">MC=MR</text>
      <line x1="200" y1="110" x2="200" y2="260" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="200" y="275" fill={green} fontSize="10" textAnchor="middle">Q*</text>
      {/* Profit region */}
      <text x="130" y="140" fill={green} fontSize="9">↑ Profit rising</text>
      <text x="270" y="100" fill={red} fontSize="9">Loss per unit →</text>
    </svg>
  </DiagramWrapper>
));
ProfitMaximisationDiagram.displayName = 'ProfitMaximisationDiagram';

// Production Function diagram
export const ProductionFunctionDiagram = memo(() => (
  <DiagramWrapper title="Short-Run Production Function — TP, MP, AP">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Labour (L)" yLabel="Output" h={260} />
      {/* Total Product */}
      <path d="M 70 250 Q 120 200, 170 130 Q 220 70, 260 50 Q 300 40, 340 50 Q 360 58, 370 80" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="375" y="78" fill={cyan} fontSize="10" fontWeight="700">TP</text>
      {/* AP */}
      <path d="M 90 230 Q 150 130, 220 110 Q 280 100, 360 140" fill="none" stroke={blue} strokeWidth="2" />
      <text x="365" y="138" fill={blue} fontSize="10">AP</text>
      {/* MP */}
      <path d="M 90 200 Q 130 80, 180 60 Q 220 55, 260 100 Q 310 180, 360 240" fill="none" stroke={red} strokeWidth="2" />
      <text x="365" y="238" fill={red} fontSize="10">MP</text>
      {/* Diminishing returns start */}
      <line x1="190" y1="20" x2="190" y2="260" stroke={orange} strokeWidth="1" strokeDasharray="4 3" />
      <text x="195" y="30" fill={orange} fontSize="8">Diminishing Returns</text>
    </svg>
  </DiagramWrapper>
));
ProductionFunctionDiagram.displayName = 'ProductionFunctionDiagram';

// Budget line + IC basic diagram
export const BudgetLineICDiagram = memo(() => (
  <DiagramWrapper title="Budget Line & Indifference Curves — Optimum Consumption">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Good B" yLabel="Good A" h={260} />
      {/* Budget line */}
      <line x1="70" y1="50" x2="340" y2="260" stroke={blue} strokeWidth="2" />
      <text x="345" y="258" fill={blue} fontSize="11" fontWeight="600">Budget Line</text>
      {/* IC1 low */}
      <path d="M 80 200 Q 140 180, 200 190 Q 280 210, 340 240" fill="none" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="345" y="238" fill={textDim} fontSize="10">I₁</text>
      {/* IC2 tangent */}
      <path d="M 80 110 Q 130 130, 190 140 Q 260 155, 340 180" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="345" y="178" fill={cyan} fontSize="11" fontWeight="700">I₂</text>
      {/* IC3 unattainable */}
      <path d="M 80 55 Q 140 80, 200 95 Q 280 115, 350 130" fill="none" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="355" y="128" fill={textDim} fontSize="10">I₃</text>
      {/* Tangent point */}
      <circle cx="190" cy="140" r="5" fill={green} />
      <text x="195" y="132" fill={green} fontSize="11" fontWeight="700">E*</text>
      <text x="200" y="28" fill={textDim} fontSize="9" textAnchor="middle">E* = Optimum (tangent to highest IC on budget line)</text>
    </svg>
  </DiagramWrapper>
));
BudgetLineICDiagram.displayName = 'BudgetLineICDiagram';

// Diagram registry
export const A2DiagramRegistry: Record<string, React.FC> = {
  'indifference-curve': IndifferenceCurveDiagram,
  'budget-line-ic': BudgetLineICDiagram,
  'substitution-income-effect': SubstitutionIncomeEffectDiagram,
  'deadweight-loss': DeadweightLossDiagram,
  'short-run-costs': ShortRunCostsDiagram,
  'lrac-curve': LRACCurveDiagram,
  'perfect-competition': PerfectCompetitionDiagram,
  'monopolistic-competition': MonopolisticCompetitionDiagram,
  'kinked-demand': KinkedDemandDiagram,
  'game-theory-matrix': GameTheoryMatrixDiagram,
  'monopoly': MonopolyDiagram,
  'profit-maximisation': ProfitMaximisationDiagram,
  'production-function': ProductionFunctionDiagram,
};
