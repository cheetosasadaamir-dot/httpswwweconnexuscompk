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
const yellow = 'hsl(50 90% 60%)';

const DiagramWrapper = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="my-4 p-4 rounded-xl border border-accent/20 bg-card/20">
    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{title}</p>
    {children}
  </div>
);

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

// 1. Negative Production Externality with Tax Burden
export const NegProdExternalityDiagram = memo(() => (
  <DiagramWrapper title="Negative Production Externality — Tax Burden">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Output" yLabel="Price (P)" h={270} />
      {/* MPC (S) */}
      <line x1="70" y1="230" x2="360" y2="60" stroke={blue} strokeWidth="2" />
      <text x="365" y="58" fill={blue} fontSize="10" fontWeight="600">S (MPC)</text>
      {/* MSC = MPC + MEC */}
      <line x1="70" y1="190" x2="360" y2="30" stroke={red} strokeWidth="2" />
      <text x="365" y="28" fill={red} fontSize="10" fontWeight="600">S₂ = MSC</text>
      {/* Demand D = MPB */}
      <line x1="70" y1="50" x2="360" y2="250" stroke={cyan} strokeWidth="2" />
      <text x="365" y="248" fill={cyan} fontSize="10" fontWeight="600">D = MPB</text>
      {/* Market eq */}
      <circle cx="250" cy="140" r="4" fill={orange} />
      <text x="255" y="132" fill={orange} fontSize="9" fontWeight="700">A</text>
      {/* Social optimum */}
      <circle cx="220" cy="118" r="4" fill={green} />
      <text x="225" y="110" fill={green} fontSize="9" fontWeight="700">B</text>
      {/* MEC distance */}
      <line x1="220" y1="118" x2="220" y2="155" stroke={yellow} strokeWidth="2" strokeDasharray="4 2" />
      <text x="195" y="142" fill={yellow} fontSize="8" fontWeight="700">MEC</text>
      {/* Tax burden areas */}
      <polygon points="220,118 250,140 250,155 220,155" fill="hsla(0, 70%, 60%, 0.15)" stroke={red} strokeWidth="0.5" />
      {/* Price/Q lines */}
      <line x1="50" y1="140" x2="250" y2="140" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <line x1="250" y1="140" x2="250" y2="270" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="250" y="285" fill={textDim} fontSize="9" textAnchor="middle">Q₀</text>
      <text x="42" y="143" fill={textDim} fontSize="9">P₀</text>
      <line x1="50" y1="118" x2="220" y2="118" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <line x1="220" y1="118" x2="220" y2="270" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="220" y="285" fill={green} fontSize="9" textAnchor="middle">Q₁</text>
      <text x="42" y="121" fill={green} fontSize="9">P₁</text>
    </svg>
  </DiagramWrapper>
));
NegProdExternalityDiagram.displayName = 'NegProdExternalityDiagram';

// 2. Negative Consumption Externality
export const NegConsExternalityDiagram = memo(() => (
  <DiagramWrapper title="Negative Consumption Externality — Indirect Tax Effect">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Quantity" yLabel="Price (P)" h={270} />
      {/* S = MPC */}
      <line x1="70" y1="230" x2="360" y2="60" stroke={blue} strokeWidth="2" />
      <text x="365" y="58" fill={blue} fontSize="10" fontWeight="600">S = MPC</text>
      {/* Supply + tax */}
      <line x1="70" y1="190" x2="360" y2="30" stroke={red} strokeWidth="2" strokeDasharray="6 3" />
      <text x="365" y="28" fill={red} fontSize="10" fontWeight="600">Supply + Tax</text>
      {/* D = MPB */}
      <line x1="70" y1="50" x2="360" y2="250" stroke={cyan} strokeWidth="2" />
      <text x="365" y="248" fill={cyan} fontSize="10" fontWeight="600">D = MPB</text>
      {/* MSB (lower than MPB) */}
      <line x1="70" y1="80" x2="320" y2="260" stroke={green} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="325" y="258" fill={green} fontSize="10">MSB</text>
      {/* Eq points */}
      <line x1="250" y1="140" x2="250" y2="270" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="250" y="285" fill={textDim} fontSize="9" textAnchor="middle">Q₁</text>
      <line x1="210" y1="120" x2="210" y2="270" stroke={orange} strokeWidth="1" strokeDasharray="3" />
      <text x="210" y="285" fill={orange} fontSize="9" textAnchor="middle">Q₀</text>
      <line x1="50" y1="140" x2="250" y2="140" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="143" fill={textDim} fontSize="9">P₁</text>
      <line x1="50" y1="120" x2="210" y2="120" stroke={orange} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="123" fill={orange} fontSize="9">P₂</text>
    </svg>
  </DiagramWrapper>
));
NegConsExternalityDiagram.displayName = 'NegConsExternalityDiagram';

// 3. Positive Production Externality
export const PosProdExternalityDiagram = memo(() => (
  <DiagramWrapper title="Positive Production Externality — Subsidy Shift">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity" yLabel="Price (P)" h={260} />
      {/* S1 = MPC */}
      <line x1="70" y1="220" x2="350" y2="60" stroke={blue} strokeWidth="2" />
      <text x="355" y="58" fill={blue} fontSize="10" fontWeight="600">S₁ = MPC</text>
      {/* S2 = MPC + subsidy */}
      <line x1="70" y1="250" x2="350" y2="100" stroke={green} strokeWidth="2" />
      <text x="355" y="98" fill={green} fontSize="10" fontWeight="600">S₂ = MPC + subsidy</text>
      {/* D = MPB = MSB */}
      <line x1="70" y1="40" x2="350" y2="240" stroke={cyan} strokeWidth="2" />
      <text x="355" y="238" fill={cyan} fontSize="10" fontWeight="600">D = MPB</text>
      {/* MSB shifted */}
      <line x1="120" y1="40" x2="370" y2="220" stroke={purple} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="373" y="218" fill={purple} fontSize="10">MSB</text>
      {/* Eq points */}
      <line x1="50" y1="130" x2="230" y2="130" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <line x1="230" y1="130" x2="230" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="230" y="275" fill={textDim} fontSize="9" textAnchor="middle">Q₁</text>
      <text x="42" y="133" fill={textDim} fontSize="9">P₂</text>
      <line x1="260" y1="160" x2="260" y2="260" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="260" y="275" fill={green} fontSize="9" textAnchor="middle">Q₂</text>
      <line x1="50" y1="160" x2="260" y2="160" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="163" fill={green} fontSize="9">P₃</text>
    </svg>
  </DiagramWrapper>
));
PosProdExternalityDiagram.displayName = 'PosProdExternalityDiagram';

// 4. Positive Consumption Externality
export const PosConsExternalityDiagram = memo(() => (
  <DiagramWrapper title="Positive Consumption Externality — Subsidy & External Benefits">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity" yLabel="Price (P)" h={260} />
      {/* S = MPC */}
      <line x1="70" y1="220" x2="350" y2="60" stroke={blue} strokeWidth="2" />
      <text x="355" y="58" fill={blue} fontSize="10" fontWeight="600">S = MPC</text>
      {/* S + subsidy */}
      <line x1="70" y1="250" x2="350" y2="100" stroke={green} strokeWidth="2" strokeDasharray="5 3" />
      <text x="355" y="98" fill={green} fontSize="10">S + subsidy</text>
      {/* D = MPB */}
      <line x1="70" y1="40" x2="310" y2="240" stroke={cyan} strokeWidth="2" />
      <text x="315" y="238" fill={cyan} fontSize="10" fontWeight="600">D = MPB</text>
      {/* MSB */}
      <line x1="120" y1="40" x2="350" y2="220" stroke={purple} strokeWidth="2" />
      <text x="355" y="218" fill={purple} fontSize="10" fontWeight="600">MSB</text>
      {/* Eq F */}
      <circle cx="200" cy="135" r="4" fill={orange} />
      <text x="205" y="127" fill={orange} fontSize="10" fontWeight="700">F</text>
      {/* Eq G */}
      <circle cx="240" cy="150" r="4" fill={purple} />
      <text x="245" y="142" fill={purple} fontSize="10" fontWeight="700">G</text>
      {/* Eq H */}
      <circle cx="260" cy="165" r="4" fill={green} />
      <text x="265" y="157" fill={green} fontSize="10" fontWeight="700">H</text>
      {/* P lines */}
      <line x1="50" y1="135" x2="200" y2="135" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="138" fill={textDim} fontSize="9">P₁</text>
      <line x1="50" y1="150" x2="240" y2="150" stroke={purple} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="153" fill={purple} fontSize="9">P₂</text>
      <line x1="50" y1="165" x2="260" y2="165" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="168" fill={green} fontSize="9">P₃</text>
    </svg>
  </DiagramWrapper>
));
PosConsExternalityDiagram.displayName = 'PosConsExternalityDiagram';

// 5. Labour Demand Curve
export const LabourDemandCurveDiagram = memo(() => (
  <DiagramWrapper title="Demand Curve for Labour">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity of Labour" yLabel="Wage Rate (W)" h={260} />
      {/* DL */}
      <line x1="70" y1="50" x2="340" y2="240" stroke={cyan} strokeWidth="2.5" />
      <text x="345" y="238" fill={cyan} fontSize="11" fontWeight="700">DL</text>
      {/* DL shifted right */}
      <line x1="120" y1="50" x2="360" y2="220" stroke={cyanLight} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="363" y="218" fill={cyanLight} fontSize="10">DL₁</text>
      {/* Movement arrow */}
      <path d="M 180 130 L 140 110" stroke={orange} strokeWidth="1.5" fill="none" markerEnd="url(#arr-ld)" />
      <text x="120" y="100" fill={orange} fontSize="8">↑ Min wage → movement</text>
      {/* Shift arrow */}
      <path d="M 220 170 L 260 170" stroke={green} strokeWidth="1.5" fill="none" markerEnd="url(#arr-ld2)" />
      <text x="265" y="165" fill={green} fontSize="8">↑ Product demand → shift</text>
      <defs>
        <marker id="arr-ld" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill={orange} /></marker>
        <marker id="arr-ld2" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill={green} /></marker>
      </defs>
    </svg>
  </DiagramWrapper>
));
LabourDemandCurveDiagram.displayName = 'LabourDemandCurveDiagram';

// 6. Individual Backward-Bending Labour Supply Curve
export const BackwardBendingSupplyDiagram = memo(() => (
  <DiagramWrapper title="Individual's Labour Supply Curve (Backward-Bending)">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Number of Hours Supplied" yLabel="Wage Rate (W)" h={260} />
      {/* Backward bending curve */}
      <path d="M 100 240 Q 200 180, 280 100 Q 310 60, 280 40 Q 250 25, 200 30" fill="none" stroke={cyan} strokeWidth="2.5" />
      <text x="190" y="24" fill={cyan} fontSize="11" fontWeight="700">SL</text>
      {/* Zones */}
      <text x="130" y="230" fill={green} fontSize="8">Low: +ve relationship</text>
      <text x="250" y="100" fill={orange} fontSize="8">Middle</text>
      <text x="210" y="50" fill={red} fontSize="8">High: leisure > work</text>
      {/* Optimum point */}
      <circle cx="280" cy="55" r="4" fill={yellow} />
      <text x="290" y="55" fill={yellow} fontSize="8" fontWeight="700">Optimum</text>
    </svg>
  </DiagramWrapper>
));
BackwardBendingSupplyDiagram.displayName = 'BackwardBendingSupplyDiagram';

// 7. Perfect Labour Market Equilibrium
export const PerfectLabourMarketDiagram = memo(() => (
  <DiagramWrapper title="Wage Determination — Perfect Labour Market">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity of Labour" yLabel="Wage Rate (W)" h={260} />
      {/* Supply */}
      <line x1="70" y1="230" x2="340" y2="50" stroke={blue} strokeWidth="2" />
      <text x="345" y="48" fill={blue} fontSize="10" fontWeight="600">Supply</text>
      {/* Demand */}
      <line x1="70" y1="50" x2="340" y2="230" stroke={cyan} strokeWidth="2" />
      <text x="345" y="228" fill={cyan} fontSize="10" fontWeight="600">Demand</text>
      {/* Eq */}
      <circle cx="205" cy="140" r="5" fill={green} />
      <text x="212" y="133" fill={green} fontSize="10" fontWeight="700">M</text>
      <line x1="50" y1="140" x2="205" y2="140" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <line x1="205" y1="140" x2="205" y2="260" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="143" fill={textDim} fontSize="9">W</text>
      <text x="205" y="275" fill={textDim} fontSize="9" textAnchor="middle">Equilibrium employment</text>
    </svg>
  </DiagramWrapper>
));
PerfectLabourMarketDiagram.displayName = 'PerfectLabourMarketDiagram';

// 8. Imperfect Labour Market — Trade Union Wage
export const ImperfectLabourMarketDiagram = memo(() => (
  <DiagramWrapper title="Wage Determination — Imperfect Market (Trade Union Imposed Wage)">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity of Labour" yLabel="Wage Rate (W)" h={260} />
      {/* Supply */}
      <line x1="70" y1="230" x2="340" y2="50" stroke={blue} strokeWidth="2" />
      <text x="345" y="48" fill={blue} fontSize="10" fontWeight="600">SL</text>
      {/* Demand */}
      <line x1="70" y1="50" x2="340" y2="230" stroke={cyan} strokeWidth="2" />
      <text x="345" y="228" fill={cyan} fontSize="10" fontWeight="600">DL</text>
      {/* Trade union wage line */}
      <line x1="50" y1="110" x2="360" y2="110" stroke={red} strokeWidth="2" strokeDasharray="6 3" />
      <text x="363" y="108" fill={red} fontSize="9" fontWeight="700">Wᵤ (Trade Union)</text>
      {/* Free market eq */}
      <circle cx="205" cy="140" r="4" fill={textDim} />
      <text x="212" y="150" fill={textDim} fontSize="9">Free eq.</text>
      {/* Supply at Wu */}
      <line x1="250" y1="110" x2="250" y2="260" stroke={blue} strokeWidth="1" strokeDasharray="3" />
      <text x="250" y="275" fill={blue} fontSize="9" textAnchor="middle">Ls</text>
      {/* Demand at Wu */}
      <line x1="160" y1="110" x2="160" y2="260" stroke={cyan} strokeWidth="1" strokeDasharray="3" />
      <text x="160" y="275" fill={cyan} fontSize="9" textAnchor="middle">Ld</text>
      {/* Unemployment */}
      <line x1="160" y1="100" x2="250" y2="100" stroke={red} strokeWidth="2" />
      <text x="205" y="95" fill={red} fontSize="8" textAnchor="middle" fontWeight="700">Unemployment</text>
    </svg>
  </DiagramWrapper>
));
ImperfectLabourMarketDiagram.displayName = 'ImperfectLabourMarketDiagram';

// 9. Transfer Earnings & Economic Rent
export const TransferEarningsRentDiagram = memo(() => (
  <DiagramWrapper title="Transfer Earnings & Economic Rent">
    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
      <Axes xLabel="Quantity of Labour" yLabel="Wage Rate (W)" h={260} />
      {/* Supply curve */}
      <path d="M 70 240 Q 200 200, 280 120 Q 320 70, 350 50" fill="none" stroke={blue} strokeWidth="2" />
      <text x="355" y="48" fill={blue} fontSize="10" fontWeight="600">SL</text>
      {/* Wage line */}
      <line x1="50" y1="120" x2="350" y2="120" stroke={textDim} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="355" y="118" fill={textDim} fontSize="9">W</text>
      {/* Economic rent area */}
      <path d="M 70 240 Q 200 200, 280 120 L 50 120 Z" fill="hsla(186, 100%, 50%, 0.12)" stroke="none" />
      <text x="150" y="170" fill={cyan} fontSize="10" fontWeight="700">Economic Rent</text>
      {/* Transfer earnings area */}
      <path d="M 70 260 L 70 240 Q 200 200, 280 120 L 280 260 Z" fill="hsla(234, 89%, 74%, 0.12)" stroke="none" />
      <text x="160" y="245" fill={blue} fontSize="10" fontWeight="700">Transfer Earnings</text>
      {/* Point */}
      <circle cx="280" cy="120" r="4" fill={green} />
      <line x1="280" y1="120" x2="280" y2="260" stroke={green} strokeWidth="1" strokeDasharray="3" />
    </svg>
  </DiagramWrapper>
));
TransferEarningsRentDiagram.displayName = 'TransferEarningsRentDiagram';

// 10. Keynesian Cross Diagram
export const KeynesianCrossDiagram = memo(() => (
  <DiagramWrapper title="Keynesian Cross — Aggregate Expenditure = Income">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Real GDP (Y)" yLabel="Aggregate Expenditure (AE)" h={270} />
      {/* 45° line */}
      <line x1="50" y1="270" x2="370" y2="20" stroke={textDim} strokeWidth="1.5" />
      <text x="375" y="20" fill={textDim} fontSize="9">AE = Y (45°)</text>
      {/* AE line */}
      <line x1="50" y1="200" x2="370" y2="60" stroke={cyan} strokeWidth="2.5" />
      <text x="375" y="58" fill={cyan} fontSize="10" fontWeight="700">C + I + G + (X-M)</text>
      {/* Equilibrium */}
      <circle cx="230" cy="118" r="5" fill={green} />
      <text x="238" y="112" fill={green} fontSize="10" fontWeight="700">E</text>
      {/* Y line */}
      <line x1="230" y1="118" x2="230" y2="270" stroke={green} strokeWidth="1" strokeDasharray="3" />
      <text x="230" y="285" fill={green} fontSize="9" textAnchor="middle">Y</text>
      {/* Multiplier annotation */}
      <text x="100" y="30" fill={orange} fontSize="9">Multiplier: ΔY = k × ΔInjection</text>
    </svg>
  </DiagramWrapper>
));
KeynesianCrossDiagram.displayName = 'KeynesianCrossDiagram';

// 11. Inflationary Gap
export const InflationaryGapDiagram = memo(() => (
  <DiagramWrapper title="Inflationary Gap (Positive Output Gap)">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Real GDP (millions)" yLabel="AE" h={270} />
      {/* 45° line */}
      <line x1="50" y1="270" x2="370" y2="20" stroke={textDim} strokeWidth="1.5" />
      <text x="375" y="20" fill={textDim} fontSize="9">AE = Y</text>
      {/* AE line (above Yf) */}
      <line x1="50" y1="180" x2="370" y2="50" stroke={cyan} strokeWidth="2.5" />
      <text x="375" y="48" fill={cyan} fontSize="10" fontWeight="700">C+I+G+(X-M)</text>
      {/* Eq Y */}
      <circle cx="260" cy="100" r="4" fill={orange} />
      <line x1="260" y1="100" x2="260" y2="270" stroke={orange} strokeWidth="1" strokeDasharray="3" />
      <text x="260" y="285" fill={orange} fontSize="9" textAnchor="middle">Y</text>
      {/* Full employment X */}
      <line x1="220" y1="20" x2="220" y2="270" stroke={red} strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="220" y="285" fill={red} fontSize="9" textAnchor="middle">X (Yf)</text>
      {/* Gap */}
      <line x1="220" y1="115" x2="220" y2="140" stroke={red} strokeWidth="3" />
      <text x="225" y="132" fill={red} fontSize="9" fontWeight="700">ab (Inflationary gap)</text>
    </svg>
  </DiagramWrapper>
));
InflationaryGapDiagram.displayName = 'InflationaryGapDiagram';

// 12. Deflationary Gap
export const DeflationaryGapDiagram = memo(() => (
  <DiagramWrapper title="Deflationary Gap (Negative Output Gap)">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Real GDP (millions)" yLabel="AE" h={270} />
      {/* 45° line */}
      <line x1="50" y1="270" x2="370" y2="20" stroke={textDim} strokeWidth="1.5" />
      <text x="375" y="20" fill={textDim} fontSize="9">AE = Y</text>
      {/* AE line (below Yf) */}
      <line x1="50" y1="210" x2="370" y2="80" stroke={cyan} strokeWidth="2.5" />
      <text x="375" y="78" fill={cyan} fontSize="10" fontWeight="700">C+I+G+(X-M)</text>
      {/* Eq Y */}
      <circle cx="200" cy="147" r="4" fill={orange} />
      <line x1="200" y1="147" x2="200" y2="270" stroke={orange} strokeWidth="1" strokeDasharray="3" />
      <text x="200" y="285" fill={orange} fontSize="9" textAnchor="middle">Y</text>
      {/* Full employment X */}
      <line x1="260" y1="20" x2="260" y2="270" stroke={green} strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="260" y="285" fill={green} fontSize="9" textAnchor="middle">X (Yf)</text>
      {/* Gap */}
      <line x1="260" y1="105" x2="260" y2="130" stroke={blue} strokeWidth="3" />
      <text x="268" y="122" fill={blue} fontSize="9" fontWeight="700">W (Deflationary gap)</text>
    </svg>
  </DiagramWrapper>
));
DeflationaryGapDiagram.displayName = 'DeflationaryGapDiagram';

// 13. Actual & Potential Growth (AD/AS)
export const ActualPotentialGrowthDiagram = memo(() => (
  <DiagramWrapper title="Actual + Potential Growth — AD/AS Diagram">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Real GDP" yLabel="Price Level" h={270} />
      {/* LRAS */}
      <line x1="230" y1="30" x2="230" y2="270" stroke={red} strokeWidth="2" />
      <text x="235" y="25" fill={red} fontSize="10" fontWeight="700">LRAS</text>
      {/* LRAS shifted */}
      <line x1="300" y1="30" x2="300" y2="270" stroke={orange} strokeWidth="2" strokeDasharray="5 3" />
      <text x="305" y="25" fill={orange} fontSize="10" fontWeight="700">LRAS₁</text>
      {/* SRAS */}
      <line x1="70" y1="220" x2="360" y2="60" stroke={blue} strokeWidth="1.5" />
      <text x="365" y="58" fill={blue} fontSize="10">SRAS</text>
      {/* AD */}
      <line x1="70" y1="60" x2="340" y2="240" stroke={cyan} strokeWidth="2" />
      <text x="345" y="238" fill={cyan} fontSize="10" fontWeight="600">AD</text>
      {/* AD shifted */}
      <line x1="120" y1="60" x2="370" y2="220" stroke={cyanLight} strokeWidth="2" strokeDasharray="5 3" />
      <text x="373" y="218" fill={cyanLight} fontSize="10">AD₁</text>
      {/* Y and Y1 */}
      <text x="230" y="285" fill={red} fontSize="9" textAnchor="middle">Y</text>
      <text x="300" y="285" fill={orange} fontSize="9" textAnchor="middle">Y₁</text>
      {/* Arrow */}
      <path d="M 240 250 L 290 250" stroke={green} strokeWidth="2" fill="none" markerEnd="url(#arr-growth)" />
      <text x="255" y="244" fill={green} fontSize="8" fontWeight="700">Growth</text>
      <defs>
        <marker id="arr-growth" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill={green} /></marker>
      </defs>
    </svg>
  </DiagramWrapper>
));
ActualPotentialGrowthDiagram.displayName = 'ActualPotentialGrowthDiagram';

// 14. Output Gaps
export const OutputGapsDiagram = memo(() => (
  <DiagramWrapper title="Positive & Negative Output Gaps">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="Real GDP" yLabel="Price Level" h={270} />
      {/* LRAS at Yfe */}
      <line x1="220" y1="30" x2="220" y2="270" stroke={red} strokeWidth="2" />
      <text x="225" y="25" fill={red} fontSize="10" fontWeight="700">LRAS (Yfe)</text>
      {/* SRAS */}
      <line x1="70" y1="220" x2="360" y2="60" stroke={blue} strokeWidth="1.5" />
      <text x="365" y="58" fill={blue} fontSize="10">SRAS</text>
      {/* AD (positive gap - beyond Yfe) */}
      <line x1="100" y1="50" x2="370" y2="230" stroke={cyan} strokeWidth="2" />
      <text x="373" y="228" fill={cyan} fontSize="10" fontWeight="600">AD</text>
      {/* Y beyond Yfe */}
      <line x1="280" y1="160" x2="280" y2="270" stroke={orange} strokeWidth="1" strokeDasharray="3" />
      <text x="280" y="285" fill={orange} fontSize="9" textAnchor="middle">Y</text>
      {/* Positive gap */}
      <line x1="220" y1="255" x2="280" y2="255" stroke={red} strokeWidth="2.5" />
      <text x="250" y="250" fill={red} fontSize="8" fontWeight="700" textAnchor="middle">+ve gap</text>
      {/* Negative gap illustration */}
      <text x="100" y="290" fill={blue} fontSize="8">If AD shifts left → Y below Yfe → -ve gap</text>
    </svg>
  </DiagramWrapper>
));
OutputGapsDiagram.displayName = 'OutputGapsDiagram';

// 15. Business Cycle
export const BusinessCycleDiagram = memo(() => (
  <DiagramWrapper title="Business (Trade) Cycle">
    <svg viewBox="0 0 420 280" className="w-full h-auto max-w-lg mx-auto">
      {/* Axes */}
      <line x1="40" y1="20" x2="40" y2="240" stroke={axisColor} strokeWidth="1.5" />
      <line x1="40" y1="240" x2="400" y2="240" stroke={axisColor} strokeWidth="1.5" />
      <text x="12" y="130" fill={textColor} fontSize="10" fontWeight="600" transform="rotate(-90, 12, 130)" textAnchor="middle">Real GDP</text>
      <text x="220" y="258" fill={textColor} fontSize="10" fontWeight="600" textAnchor="middle">Time</text>
      {/* Trend line */}
      <line x1="50" y1="200" x2="390" y2="80" stroke={textDim} strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="393" y="78" fill={textDim} fontSize="9">Trend</text>
      {/* Business cycle wave */}
      <path d="M 60 185 Q 100 140, 140 120 Q 170 105, 200 130 Q 240 170, 270 160 Q 300 100, 330 80 Q 350 70, 370 100" fill="none" stroke={cyan} strokeWidth="2.5" />
      {/* Labels on the wave */}
      <text x="90" y="110" fill={green} fontSize="9" fontWeight="700">Upturn</text>
      <text x="140" y="100" fill={orange} fontSize="9" fontWeight="700">Peak/Boom</text>
      <text x="195" y="175" fill={red} fontSize="9" fontWeight="700">Downturn</text>
      <text x="250" y="178" fill={purple} fontSize="9" fontWeight="700">Trough</text>
      <text x="310" y="68" fill={green} fontSize="9" fontWeight="700">Recovery</text>
      {/* +ve/-ve output gap labels */}
      <text x="140" y="135" fill={orange} fontSize="7">+ve output gap</text>
      <text x="220" y="160" fill={blue} fontSize="7">-ve output gap</text>
    </svg>
  </DiagramWrapper>
));
BusinessCycleDiagram.displayName = 'BusinessCycleDiagram';

// 16. Natural Rate of Unemployment (ADL/ASL/ALF)
export const NaturalRateUnemploymentDiagram = memo(() => (
  <DiagramWrapper title="Natural Rate of Unemployment — ADL, ASL, ALF">
    <svg viewBox="0 0 420 310" className="w-full h-auto max-w-lg mx-auto">
      <Axes w={400} xLabel="No. of Workers" yLabel="Wage Rate (W)" h={270} />
      {/* ADL */}
      <line x1="70" y1="50" x2="300" y2="250" stroke={cyan} strokeWidth="2" />
      <text x="305" y="248" fill={cyan} fontSize="10" fontWeight="600">ADL</text>
      {/* ADL1 (shifted left) */}
      <line x1="70" y1="70" x2="250" y2="250" stroke={cyanDim} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="255" y="248" fill={cyanDim} fontSize="10">ADL₁</text>
      {/* ASL */}
      <line x1="100" y1="250" x2="320" y2="50" stroke={blue} strokeWidth="2" />
      <text x="325" y="48" fill={blue} fontSize="10" fontWeight="600">ASL</text>
      {/* ALF (vertical, right of ASL) */}
      <line x1="350" y1="30" x2="350" y2="270" stroke={red} strokeWidth="2" />
      <text x="355" y="25" fill={red} fontSize="10" fontWeight="700">ALF</text>
      {/* Equilibrium W */}
      <circle cx="200" cy="145" r="4" fill={green} />
      <line x1="50" y1="145" x2="200" y2="145" stroke={textDim} strokeWidth="1" strokeDasharray="3" />
      <text x="42" y="148" fill={textDim} fontSize="9">W</text>
      {/* Y point on ASL at W */}
      <circle cx="260" cy="145" r="3" fill={blue} />
      <text x="265" y="140" fill={blue} fontSize="9" fontWeight="700">Y</text>
      {/* Z point on ALF at W */}
      <circle cx="350" cy="145" r="3" fill={red} />
      <text x="355" y="140" fill={red} fontSize="9" fontWeight="700">Z</text>
      {/* Voluntary unemployment YZ */}
      <line x1="260" y1="155" x2="350" y2="155" stroke={orange} strokeWidth="2" />
      <text x="305" y="170" fill={orange} fontSize="8" textAnchor="middle" fontWeight="700">Voluntary (YZ)</text>
      {/* X point on ADL1 */}
      <circle cx="155" cy="145" r="3" fill={cyanDim} />
      <text x="140" y="138" fill={cyanDim} fontSize="9" fontWeight="700">X</text>
      {/* Cyclical unemployment XQ */}
      <line x1="155" y1="160" x2="200" y2="160" stroke={purple} strokeWidth="2" />
      <text x="178" y="175" fill={purple} fontSize="8" textAnchor="middle" fontWeight="700">Cyclical (XQ)</text>
    </svg>
  </DiagramWrapper>
));
NaturalRateUnemploymentDiagram.displayName = 'NaturalRateUnemploymentDiagram';

// Registry
export const A2MacroDiagramRegistry: Record<string, React.FC> = {
  'neg-prod-externality': NegProdExternalityDiagram,
  'neg-cons-externality': NegConsExternalityDiagram,
  'pos-prod-externality': PosProdExternalityDiagram,
  'pos-cons-externality': PosConsExternalityDiagram,
  'labour-demand-curve': LabourDemandCurveDiagram,
  'backward-bending-supply': BackwardBendingSupplyDiagram,
  'perfect-labour-market': PerfectLabourMarketDiagram,
  'imperfect-labour-market': ImperfectLabourMarketDiagram,
  'transfer-earnings-rent': TransferEarningsRentDiagram,
  'keynesian-cross': KeynesianCrossDiagram,
  'inflationary-gap': InflationaryGapDiagram,
  'deflationary-gap': DeflationaryGapDiagram,
  'actual-potential-growth': ActualPotentialGrowthDiagram,
  'output-gaps': OutputGapsDiagram,
  'business-cycle': BusinessCycleDiagram,
  'natural-rate-unemployment': NaturalRateUnemploymentDiagram,
};
