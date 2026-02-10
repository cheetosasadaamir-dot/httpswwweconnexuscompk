import React from 'react';

const diagramStyle = {
  wrapper: "w-full overflow-x-auto my-4",
  svg: "mx-auto",
};

const CYAN = "#00f2ff";
const CYAN_DIM = "#00f2ff80";
const CHARCOAL = "#1a1a2e";
const WHITE = "#e0e0e0";
const PINK = "#ff6b9d";
const GREEN = "#4ade80";
const YELLOW = "#fbbf24";
const ORANGE = "#f97316";

// Phillips Curve
const PhillipsCurveDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 500 360" className={diagramStyle.svg} style={{ maxWidth: 500 }}>
      <rect width="500" height="360" fill={CHARCOAL} rx="12" />
      <text x="250" y="30" fill={CYAN} textAnchor="middle" fontSize="14" fontWeight="bold">Phillips Curve</text>
      {/* Axes */}
      <line x1="80" y1="40" x2="80" y2="310" stroke={WHITE} strokeWidth="2" />
      <line x1="80" y1="310" x2="460" y2="310" stroke={WHITE} strokeWidth="2" />
      <text x="40" y="175" fill={WHITE} fontSize="11" textAnchor="middle" transform="rotate(-90,40,175)">Inflation Rate (%)</text>
      <text x="270" y="340" fill={WHITE} fontSize="11" textAnchor="middle">Unemployment Rate (%)</text>
      {/* Y axis labels */}
      {[0, 5, 10].map((v, i) => (
        <React.Fragment key={v}>
          <text x="70" y={310 - i * 120} fill={WHITE} fontSize="10" textAnchor="end">{v}%</text>
          <line x1="75" y1={310 - i * 120} x2="80" y2={310 - i * 120} stroke={WHITE} strokeWidth="1" />
        </React.Fragment>
      ))}
      {/* X axis labels */}
      {[4, 6, 8].map((v, i) => (
        <React.Fragment key={v}>
          <text x={160 + i * 120} y={328} fill={WHITE} fontSize="10" textAnchor="middle">{v}%</text>
          <line x1={160 + i * 120} y1={310} x2={160 + i * 120} y2={315} stroke={WHITE} strokeWidth="1" />
        </React.Fragment>
      ))}
      {/* SPC curve */}
      <path d="M 120 80 Q 200 160, 250 200 Q 300 240, 420 280" fill="none" stroke={CYAN} strokeWidth="2.5" />
      <text x="430" y="275" fill={CYAN} fontSize="11">SPC</text>
      {/* SPC1 */}
      <path d="M 120 60 Q 200 130, 250 170 Q 300 210, 420 250" fill="none" stroke={PINK} strokeWidth="2" strokeDasharray="6,4" />
      <text x="430" y="245" fill={PINK} fontSize="11">SPC₁</text>
      {/* SPC2 */}
      <path d="M 120 40 Q 200 100, 250 140 Q 300 180, 420 220" fill="none" stroke={YELLOW} strokeWidth="2" strokeDasharray="6,4" />
      <text x="430" y="215" fill={YELLOW} fontSize="11">SPC₂</text>
      {/* Long-run Phillips Curve */}
      <line x1="400" y1="50" x2="400" y2="300" stroke={GREEN} strokeWidth="2.5" />
      <text x="405" y="48" fill={GREEN} fontSize="11">LRPC</text>
      {/* Dotted lines for 8%, 0% */}
      <line x1="400" y1="310" x2="400" y2="310" stroke={WHITE} strokeWidth="1" strokeDasharray="3,3" />
      {/* Points */}
      <circle cx="400" cy="280" r="4" fill={CYAN} />
      <text x="388" y="296" fill={WHITE} fontSize="9">8%, 0%</text>
      <circle cx="160" cy="190" r="4" fill={CYAN} />
      <text x="135" y="185" fill={WHITE} fontSize="9">4%, 5%</text>
    </svg>
  </div>
);

// Expectation-Augmented Phillips Curve
const ExpectationAugmentedPCDiagram: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 500 360" className={diagramStyle.svg} style={{ maxWidth: 500 }}>
      <rect width="500" height="360" fill={CHARCOAL} rx="12" />
      <text x="250" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Expectation-Augmented Phillips Curve</text>
      <line x1="80" y1="40" x2="80" y2="310" stroke={WHITE} strokeWidth="2" />
      <line x1="80" y1="310" x2="460" y2="310" stroke={WHITE} strokeWidth="2" />
      <text x="35" y="175" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,35,175)">Inflation Rate (%)</text>
      <text x="270" y="340" fill={WHITE} fontSize="10" textAnchor="middle">Unemployment Rate (%)</text>
      {/* LRPC */}
      <line x1="300" y1="50" x2="300" y2="305" stroke={GREEN} strokeWidth="2.5" />
      <text x="310" y="48" fill={GREEN} fontSize="11" fontWeight="bold">LRPC</text>
      {/* SPC curves shifting up */}
      <path d="M 120 250 Q 220 220, 300 270 Q 380 300, 440 310" fill="none" stroke={CYAN} strokeWidth="2" />
      <text x="442" y="308" fill={CYAN} fontSize="10">SPC</text>
      <path d="M 120 190 Q 220 160, 300 210 Q 380 240, 440 260" fill="none" stroke={PINK} strokeWidth="2" />
      <text x="442" y="258" fill={PINK} fontSize="10">SPC₁</text>
      <path d="M 120 130 Q 220 100, 300 150 Q 380 180, 440 200" fill="none" stroke={YELLOW} strokeWidth="2" />
      <text x="442" y="198" fill={YELLOW} fontSize="10">SPC₂</text>
      {/* Natural rate marker */}
      <line x1="300" y1="310" x2="300" y2="320" stroke={WHITE} strokeWidth="1" />
      <text x="300" y="332" fill={WHITE} fontSize="10" textAnchor="middle">NRU</text>
    </svg>
  </div>
);

// Laffer Curve
const LafferCurveDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 340" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="340" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="14" fontWeight="bold">The Laffer Curve</text>
      <line x1="70" y1="40" x2="70" y2="290" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="290" x2="420" y2="290" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="170" fill={WHITE} fontSize="11" textAnchor="middle" transform="rotate(-90,30,170)">Tax Revenue</text>
      <text x="245" y="320" fill={WHITE} fontSize="11" textAnchor="middle">Tax Rate (%)</text>
      {/* Curve */}
      <path d="M 70 290 Q 150 60, 245 70 Q 340 80, 420 290" fill="none" stroke={CYAN} strokeWidth="2.5" />
      {/* Peak */}
      <circle cx="245" cy="70" r="5" fill={CYAN} />
      <line x1="245" y1="70" x2="245" y2="290" stroke={WHITE} strokeWidth="1" strokeDasharray="4,4" />
      <text x="245" y="304" fill={WHITE} fontSize="10" textAnchor="middle">t*</text>
      <text x="258" y="62" fill={CYAN} fontSize="10">Max Revenue</text>
      {/* 0% and 100% */}
      <text x="70" y="304" fill={WHITE} fontSize="10" textAnchor="middle">0%</text>
      <text x="420" y="304" fill={WHITE} fontSize="10" textAnchor="middle">100%</text>
      {/* Same revenue at two rates */}
      <line x1="170" y1="155" x2="170" y2="290" stroke={PINK} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="320" y1="155" x2="320" y2="290" stroke={PINK} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="70" y1="155" x2="320" y2="155" stroke={PINK} strokeWidth="1" strokeDasharray="3,3" />
      <text x="170" y="304" fill={PINK} fontSize="9" textAnchor="middle">40%</text>
      <text x="320" y="304" fill={PINK} fontSize="9" textAnchor="middle">50%</text>
      <circle cx="170" cy="155" r="3" fill={PINK} />
      <circle cx="320" cy="155" r="3" fill={PINK} />
    </svg>
  </div>
);

// Liquidity Preference Diagram
const LiquidityPreferenceDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 340" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="340" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Liquidity Preference Theory</text>
      <line x1="70" y1="40" x2="70" y2="290" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="290" x2="420" y2="290" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="170" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,170)">Interest Rate (r)</text>
      <text x="245" y="318" fill={WHITE} fontSize="10" textAnchor="middle">Quantity of Money</text>
      {/* Money Supply vertical */}
      <line x1="250" y1="50" x2="250" y2="285" stroke={PINK} strokeWidth="2.5" />
      <text x="258" y="48" fill={PINK} fontSize="11">MS</text>
      {/* Liquidity Preference curve */}
      <path d="M 90 80 Q 150 120, 200 180 Q 240 230, 400 260 L 420 262" fill="none" stroke={CYAN} strokeWidth="2.5" />
      <text x="410" y="252" fill={CYAN} fontSize="11">LP</text>
      {/* Equilibrium */}
      <circle cx="250" cy="196" r="4" fill={GREEN} />
      <text x="260" y="192" fill={GREEN} fontSize="10">E</text>
      <line x1="70" y1="196" x2="250" y2="196" stroke={WHITE} strokeWidth="1" strokeDasharray="3,3" />
      <text x="60" y="200" fill={WHITE} fontSize="10" textAnchor="end">r*</text>
      {/* Liquidity trap zone */}
      <line x1="90" y1="262" x2="420" y2="262" stroke={YELLOW} strokeWidth="1" strokeDasharray="4,3" />
      <text x="350" y="278" fill={YELLOW} fontSize="9">Liquidity Trap Zone</text>
    </svg>
  </div>
);

// Liquidity Trap Diagram
const LiquidityTrapDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 320" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="320" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Liquidity Trap</text>
      <line x1="70" y1="40" x2="70" y2="270" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="270" x2="420" y2="270" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="155" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,155)">Interest Rate</text>
      <text x="245" y="298" fill={WHITE} fontSize="10" textAnchor="middle">Quantity of Money</text>
      {/* LP curve becoming horizontal */}
      <path d="M 100 70 Q 160 120, 200 170 Q 230 210, 250 235 L 420 235" fill="none" stroke={CYAN} strokeWidth="2.5" />
      <text x="425" y="232" fill={CYAN} fontSize="11">LP</text>
      {/* MS1 */}
      <line x1="200" y1="50" x2="200" y2="265" stroke={PINK} strokeWidth="2" />
      <text x="195" y="46" fill={PINK} fontSize="10">MS₁</text>
      {/* MS2 - shifted right into trap */}
      <line x1="300" y1="50" x2="300" y2="265" stroke={PINK} strokeWidth="2" strokeDasharray="5,4" />
      <text x="295" y="46" fill={PINK} fontSize="10">MS₂</text>
      {/* Trap floor line */}
      <line x1="70" y1="235" x2="420" y2="235" stroke={YELLOW} strokeWidth="1" strokeDasharray="3,3" />
      <text x="60" y="238" fill={YELLOW} fontSize="9" textAnchor="end">r min</text>
      {/* Arrow */}
      <line x1="220" y1="140" x2="280" y2="140" stroke={GREEN} strokeWidth="2" markerEnd="url(#arrowGreen2)" />
      <defs>
        <marker id="arrowGreen2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={GREEN} />
        </marker>
      </defs>
      <text x="250" y="132" fill={GREEN} fontSize="9" textAnchor="middle">No effect on r</text>
    </svg>
  </div>
);

// Floating Exchange Rate Diagram
const FloatingExchangeRateDiagram: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 340" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="340" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Floating Exchange Rate</text>
      <line x1="70" y1="40" x2="70" y2="290" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="290" x2="420" y2="290" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="170" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,170)">Exchange Rate</text>
      <text x="245" y="318" fill={WHITE} fontSize="10" textAnchor="middle">Quantity of Currency</text>
      {/* Supply */}
      <line x1="100" y1="260" x2="380" y2="70" stroke={PINK} strokeWidth="2.5" />
      <text x="385" y="68" fill={PINK} fontSize="11">S</text>
      {/* Demand */}
      <line x1="100" y1="70" x2="380" y2="260" stroke={CYAN} strokeWidth="2.5" />
      <text x="385" y="258" fill={CYAN} fontSize="11">D</text>
      {/* Equilibrium */}
      <circle cx="240" cy="165" r="4" fill={GREEN} />
      <text x="248" y="158" fill={GREEN} fontSize="10">E</text>
      <line x1="70" y1="165" x2="240" y2="165" stroke={WHITE} strokeWidth="1" strokeDasharray="3,3" />
      <text x="60" y="168" fill={WHITE} fontSize="10" textAnchor="end">P</text>
      <line x1="240" y1="165" x2="240" y2="290" stroke={WHITE} strokeWidth="1" strokeDasharray="3,3" />
      <text x="240" y="304" fill={WHITE} fontSize="10" textAnchor="middle">Q</text>
    </svg>
  </div>
);

// Fixed Exchange Rate Diagram
const FixedExchangeRateDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 500 360" className={diagramStyle.svg} style={{ maxWidth: 500 }}>
      <rect width="500" height="360" fill={CHARCOAL} rx="12" />
      <text x="250" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Fixed Exchange Rate — Central Bank Intervention</text>
      <line x1="70" y1="40" x2="70" y2="310" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="310" x2="460" y2="310" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="175" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,175)">Exchange Rate ($)</text>
      <text x="265" y="340" fill={WHITE} fontSize="10" textAnchor="middle">Quantity of Currency</text>
      {/* Fixed rate line */}
      <line x1="70" y1="170" x2="460" y2="170" stroke={YELLOW} strokeWidth="2" strokeDasharray="6,4" />
      <text x="462" y="167" fill={YELLOW} fontSize="10">2.5$</text>
      {/* S original */}
      <line x1="120" y1="280" x2="380" y2="60" stroke={PINK} strokeWidth="2" />
      <text x="385" y="58" fill={PINK} fontSize="10">S</text>
      {/* D original */}
      <line x1="120" y1="60" x2="380" y2="280" stroke={CYAN} strokeWidth="2" />
      <text x="385" y="278" fill={CYAN} fontSize="10">D</text>
      {/* D1 shifted */}
      <line x1="180" y1="60" x2="440" y2="280" stroke={CYAN} strokeWidth="2" strokeDasharray="5,3" />
      <text x="445" y="278" fill={CYAN} fontSize="10">D₁</text>
      {/* S1 shifted */}
      <line x1="180" y1="280" x2="440" y2="60" stroke={PINK} strokeWidth="2" strokeDasharray="5,3" />
      <text x="445" y="58" fill={PINK} fontSize="10">S₁</text>
      {/* Equilibrium at fixed rate */}
      <circle cx="250" cy="170" r="4" fill={GREEN} />
      <text x="255" y="162" fill={GREEN} fontSize="10">E</text>
    </svg>
  </div>
);

// Managed Float Diagram
const ManagedFloatDiagram: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 300" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="300" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Managed Float — Upper & Lower Limits</text>
      <line x1="70" y1="40" x2="70" y2="260" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="260" x2="420" y2="260" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="150" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,150)">Exchange Rate</text>
      <text x="245" y="285" fill={WHITE} fontSize="10" textAnchor="middle">Time</text>
      {/* Upper limit */}
      <line x1="70" y1="90" x2="420" y2="90" stroke={PINK} strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="425" y="93" fill={PINK} fontSize="9">P₁ (Upper)</text>
      {/* Central value */}
      <line x1="70" y1="150" x2="420" y2="150" stroke={YELLOW} strokeWidth="2" strokeDasharray="4,4" />
      <text x="425" y="153" fill={YELLOW} fontSize="9">P (Central)</text>
      {/* Lower limit */}
      <line x1="70" y1="210" x2="420" y2="210" stroke={PINK} strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="425" y="213" fill={PINK} fontSize="9">P₂ (Lower)</text>
      {/* Fluctuating line within band */}
      <path d="M 90 150 Q 120 110, 150 130 Q 180 160, 210 180 Q 240 200, 270 160 Q 300 120, 330 100 Q 350 130, 380 150 Q 400 170, 410 150" fill="none" stroke={CYAN} strokeWidth="2.5" />
    </svg>
  </div>
);

// J-Curve Diagram
const JCurveDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 320" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="320" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">J-Curve Effect</text>
      <line x1="70" y1="40" x2="70" y2="270" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="270" x2="420" y2="270" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="155" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,155)">Current Account Balance</text>
      <text x="245" y="298" fill={WHITE} fontSize="10" textAnchor="middle">Time</text>
      {/* Zero line */}
      <line x1="70" y1="180" x2="420" y2="180" stroke={WHITE} strokeWidth="1" strokeDasharray="3,3" />
      <text x="60" y="183" fill={WHITE} fontSize="9" textAnchor="end">0</text>
      {/* J-curve */}
      <path d="M 90 160 Q 130 160, 160 200 Q 190 250, 210 250 Q 240 250, 280 180 Q 320 110, 400 70" fill="none" stroke={CYAN} strokeWidth="2.5" />
      {/* Depreciation point */}
      <line x1="130" y1="40" x2="130" y2="270" stroke={YELLOW} strokeWidth="1" strokeDasharray="3,3" />
      <text x="130" y="35" fill={YELLOW} fontSize="9" textAnchor="middle">Depreciation</text>
      {/* Labels */}
      <text x="200" y="260" fill={PINK} fontSize="9">Deficit worsens</text>
      <text x="340" y="80" fill={GREEN} fontSize="9">Surplus</text>
    </svg>
  </div>
);

// Poverty Cycle Diagram
const PovertyCycleDiagram: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 420 300" className={diagramStyle.svg} style={{ maxWidth: 420 }}>
      <rect width="420" height="300" fill={CHARCOAL} rx="12" />
      <text x="210" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Poverty Cycle</text>
      {/* Circular arrows */}
      {[
        { x: 210, y: 70, label: "Low Savings" },
        { x: 340, y: 150, label: "Low Investment" },
        { x: 280, y: 250, label: "Low Productivity" },
        { x: 140, y: 250, label: "Low Income" },
        { x: 80, y: 150, label: "Low Education\n& Healthcare" },
      ].map((item, i) => (
        <React.Fragment key={i}>
          <rect x={item.x - 60} y={item.y - 18} width="120" height="36" rx="8" fill="none" stroke={CYAN} strokeWidth="1.5" />
          {item.label.includes('\n') ? (
            <>
              <text x={item.x} y={item.y - 4} fill={WHITE} fontSize="10" textAnchor="middle">{item.label.split('\n')[0]}</text>
              <text x={item.x} y={item.y + 10} fill={WHITE} fontSize="10" textAnchor="middle">{item.label.split('\n')[1]}</text>
            </>
          ) : (
            <text x={item.x} y={item.y + 4} fill={WHITE} fontSize="10" textAnchor="middle">{item.label}</text>
          )}
        </React.Fragment>
      ))}
      {/* Arrows connecting */}
      <defs>
        <marker id="arrowCyan2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={CYAN} />
        </marker>
      </defs>
      <line x1="270" y1="78" x2="310" y2="132" stroke={CYAN} strokeWidth="1.5" markerEnd="url(#arrowCyan2)" />
      <line x1="340" y1="168" x2="310" y2="232" stroke={CYAN} strokeWidth="1.5" markerEnd="url(#arrowCyan2)" />
      <line x1="220" y1="250" x2="170" y2="250" stroke={CYAN} strokeWidth="1.5" markerEnd="url(#arrowCyan2)" />
      <line x1="110" y1="232" x2="85" y2="168" stroke={CYAN} strokeWidth="1.5" markerEnd="url(#arrowCyan2)" />
      <line x1="110" y1="132" x2="160" y2="78" stroke={CYAN} strokeWidth="1.5" markerEnd="url(#arrowCyan2)" />
    </svg>
  </div>
);

// Kuznets Curve
const KuznetsCurveDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 460 320" className={diagramStyle.svg} style={{ maxWidth: 460 }}>
      <rect width="460" height="320" fill={CHARCOAL} rx="12" />
      <text x="230" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">The Kuznets Curve</text>
      <line x1="70" y1="40" x2="70" y2="270" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="270" x2="420" y2="270" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="155" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,155)">Income Inequality</text>
      <text x="245" y="298" fill={WHITE} fontSize="10" textAnchor="middle">GDP per Capita</text>
      {/* Inverted U curve */}
      <path d="M 90 260 Q 150 100, 250 70 Q 350 100, 400 240" fill="none" stroke={CYAN} strokeWidth="2.5" />
      {/* Peak */}
      <circle cx="250" cy="70" r="4" fill={CYAN} />
      <line x1="250" y1="70" x2="250" y2="270" stroke={WHITE} strokeWidth="1" strokeDasharray="3,3" />
      <text x="150" y="140" fill={PINK} fontSize="9">Industrialisation</text>
      <text x="340" y="140" fill={GREEN} fontSize="9">Post-industrial</text>
    </svg>
  </div>
);

// Lorenz Curve with Gini
const LorenzGiniDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 440 340" className={diagramStyle.svg} style={{ maxWidth: 440 }}>
      <rect width="440" height="340" fill={CHARCOAL} rx="12" />
      <text x="220" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Lorenz Curve & Gini Coefficient</text>
      <line x1="70" y1="40" x2="70" y2="290" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="290" x2="400" y2="290" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="170" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,170)">% of Income</text>
      <text x="235" y="318" fill={WHITE} fontSize="10" textAnchor="middle">% of Population</text>
      {/* 45° line of equality */}
      <line x1="70" y1="290" x2="400" y2="40" stroke={WHITE} strokeWidth="1.5" strokeDasharray="4,4" />
      <text x="280" y="120" fill={WHITE} fontSize="9" transform="rotate(-47,280,120)">Line of Equality</text>
      {/* Lorenz curve */}
      <path d="M 70 290 Q 200 280, 280 240 Q 340 200, 400 40" fill="none" stroke={CYAN} strokeWidth="2.5" />
      <text x="310" y="250" fill={CYAN} fontSize="10">Lorenz Curve</text>
      {/* Shaded area A */}
      <path d="M 70 290 L 400 40 Q 340 200, 280 240 Q 200 280, 70 290 Z" fill={CYAN_DIM} opacity="0.2" />
      <text x="220" y="190" fill={CYAN} fontSize="11" fontWeight="bold">A</text>
      {/* Area B */}
      <text x="180" y="270" fill={PINK} fontSize="11" fontWeight="bold">B</text>
      {/* Labels */}
      <text x="70" y="310" fill={WHITE} fontSize="9">0%</text>
      <text x="400" y="310" fill={WHITE} fontSize="9">100%</text>
      <text x="60" y="295" fill={WHITE} fontSize="9" textAnchor="end">0%</text>
      <text x="60" y="48" fill={WHITE} fontSize="9" textAnchor="end">100%</text>
      <text x="220" y="330" fill={YELLOW} fontSize="9" textAnchor="middle">Gini = A / (A + B)</text>
    </svg>
  </div>
);

// Trade Creation Diagram
const TradeCreationDiversionDiagram2: React.FC = () => (
  <div className={diagramStyle.wrapper}>
    <svg viewBox="0 0 500 380" className={diagramStyle.svg} style={{ maxWidth: 500 }}>
      <rect width="500" height="380" fill={CHARCOAL} rx="12" />
      <text x="250" y="28" fill={CYAN} textAnchor="middle" fontSize="13" fontWeight="bold">Trade Creation</text>
      <line x1="70" y1="45" x2="70" y2="320" stroke={WHITE} strokeWidth="2" />
      <line x1="70" y1="320" x2="450" y2="320" stroke={WHITE} strokeWidth="2" />
      <text x="30" y="180" fill={WHITE} fontSize="10" textAnchor="middle" transform="rotate(-90,30,180)">Price</text>
      <text x="260" y="350" fill={WHITE} fontSize="10" textAnchor="middle">Quantity</text>
      {/* Domestic Supply */}
      <line x1="100" y1="280" x2="350" y2="70" stroke={PINK} strokeWidth="2" />
      <text x="355" y="68" fill={PINK} fontSize="10">S (Domestic)</text>
      {/* Demand */}
      <line x1="100" y1="70" x2="400" y2="300" stroke={CYAN} strokeWidth="2" />
      <text x="405" y="298" fill={CYAN} fontSize="10">D</text>
      {/* World price with tariff */}
      <line x1="70" y1="160" x2="450" y2="160" stroke={YELLOW} strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="452" y="157" fill={YELLOW} fontSize="9">P (with tariff)</text>
      {/* World price without tariff (union) */}
      <line x1="70" y1="210" x2="450" y2="210" stroke={GREEN} strokeWidth="1.5" />
      <text x="452" y="207" fill={GREEN} fontSize="9">P₁ (union price)</text>
      {/* Labels */}
      <text x="60" y="163" fill={WHITE} fontSize="9" textAnchor="end">P</text>
      <text x="60" y="213" fill={WHITE} fontSize="9" textAnchor="end">P₁</text>
      {/* Surplus areas a, b, c, d */}
      <text x="180" y="190" fill={CYAN} fontSize="10" fontWeight="bold">a</text>
      <text x="220" y="195" fill={PINK} fontSize="10" fontWeight="bold">b</text>
      <text x="280" y="195" fill={GREEN} fontSize="10" fontWeight="bold">c</text>
      <text x="330" y="190" fill={YELLOW} fontSize="10" fontWeight="bold">d</text>
      <text x="250" y="370" fill={WHITE} fontSize="9" textAnchor="middle">Consumer surplus increases by a + b + c + d</text>
    </svg>
  </div>
);

export const A2MacroDiagramRegistry2: Record<string, React.FC> = {
  'phillips-curve-2': PhillipsCurveDiagram2,
  'expectation-augmented-pc': ExpectationAugmentedPCDiagram,
  'laffer-curve-2': LafferCurveDiagram2,
  'liquidity-preference-2': LiquidityPreferenceDiagram2,
  'liquidity-trap-2': LiquidityTrapDiagram2,
  'floating-exchange-rate': FloatingExchangeRateDiagram,
  'fixed-exchange-rate-2': FixedExchangeRateDiagram2,
  'managed-float': ManagedFloatDiagram,
  'j-curve-2': JCurveDiagram2,
  'poverty-cycle': PovertyCycleDiagram,
  'kuznets-curve-2': KuznetsCurveDiagram2,
  'lorenz-gini-2': LorenzGiniDiagram2,
  'trade-creation-diversion-2': TradeCreationDiversionDiagram2,
};
