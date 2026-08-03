import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevenueCurvesDiagram: React.FC = () => {
  const [firmType, setFirmType] = useState<'price-taker' | 'price-maker'>('price-taker');

  // Revenue data for price taker (perfectly competitive firm)
  const priceTakerData = [
    { q: 0, p: 10, tr: 0, mr: '-', ar: '-' },
    { q: 1, p: 10, tr: 10, mr: 10, ar: 10 },
    { q: 2, p: 10, tr: 20, mr: 10, ar: 10 },
    { q: 3, p: 10, tr: 30, mr: 10, ar: 10 },
    { q: 4, p: 10, tr: 40, mr: 10, ar: 10 },
    { q: 5, p: 10, tr: 50, mr: 10, ar: 10 },
    { q: 6, p: 10, tr: 60, mr: 10, ar: 10 },
    { q: 7, p: 10, tr: 70, mr: 10, ar: 10 },
  ];

  // Revenue data for price maker (monopolist/imperfect competition)
  const priceMakerData = [
    { q: 0, p: 12, tr: 0, mr: '-', ar: '-' },
    { q: 1, p: 11, tr: 11, mr: 11, ar: 11 },
    { q: 2, p: 10, tr: 20, mr: 9, ar: 10 },
    { q: 3, p: 9, tr: 27, mr: 7, ar: 9 },
    { q: 4, p: 8, tr: 32, mr: 5, ar: 8 },
    { q: 5, p: 7, tr: 35, mr: 3, ar: 7 },
    { q: 6, p: 6, tr: 36, mr: 1, ar: 6 },
    { q: 7, p: 5, tr: 35, mr: -1, ar: 5 },
    { q: 8, p: 4, tr: 32, mr: -3, ar: 4 },
    { q: 9, p: 3, tr: 27, mr: -5, ar: 3 },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Firm Type Toggle */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFirmType('price-taker')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            firmType === 'price-taker'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card/50 text-muted-foreground hover:bg-card'
          }`}
        >
          Price Taker (Perfect Competition)
        </button>
        <button
          onClick={() => setFirmType('price-maker')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            firmType === 'price-maker'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card/50 text-muted-foreground hover:bg-card'
          }`}
        >
          Price Maker (Monopoly/Imperfect)
        </button>
      </div>

      {/* SVG Diagrams */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* TR Curve */}
        <div className="relative bg-card/30 rounded-xl p-4 border border-silver/10">
          <h4 className="text-silver-bright text-sm font-medium mb-2 text-center">Total Revenue (TR)</h4>
          <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ minHeight: '200px' }}>
            {/* Grid background */}
            <rect x="50" y="20" width="240" height="170" fill="rgba(100,116,139,0.05)" />
            
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line
                key={`vgrid-tr-${i}`}
                x1={50 + i * 40}
                y1="20"
                x2={50 + i * 40}
                y2="190"
                stroke="rgba(100,116,139,0.15)"
                strokeWidth="1"
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`hgrid-tr-${i}`}
                x1="50"
                y1={20 + i * 42.5}
                x2="290"
                y2={20 + i * 42.5}
                stroke="rgba(100,116,139,0.15)"
                strokeWidth="1"
              />
            ))}

            {/* Axes */}
            <line x1="50" y1="190" x2="300" y2="190" stroke="#94a3b8" strokeWidth="2" />
            <line x1="50" y1="190" x2="50" y2="15" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Arrow heads */}
            <polygon points="300,190 292,186 292,194" fill="#94a3b8" />
            <polygon points="50,15 46,23 54,23" fill="#94a3b8" />

            {/* Axis Labels */}
            <text x="175" y="220" textAnchor="middle" fill="#94a3b8" fontSize="11">Quantity (Q)</text>
            <text x="20" y="105" textAnchor="middle" transform="rotate(-90, 20, 105)" fill="#94a3b8" fontSize="11">TR ($)</text>

            {/* Origin label */}
            <text x="42" y="205" fill="#94a3b8" fontSize="10">0</text>

            {firmType === 'price-taker' ? (
              /* Linear TR for price taker - straight line from origin */
              <motion.line
                key="tr-line-taker"
                x1="50"
                y1="190"
                x2="280"
                y2="35"
                stroke="#22d3ee"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            ) : (
              /* Parabolic TR for price maker - rises then falls */
              <>
                <motion.path
                  key="tr-curve-maker"
                  d="M 50,190 Q 90,140 125,80 Q 145,45 165,35 Q 185,45 205,80 Q 240,110 280,150"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2 }}
                />
                {/* Max TR point */}
                <motion.circle
                  cx="165"
                  cy="35"
                  r="6"
                  fill="#f472b6"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3 }}
                />
                <text x="173" y="28" fill="#f472b6" fontSize="10" fontWeight="500">Max TR</text>
                <text x="173" y="50" fill="#94a3b8" fontSize="9">(where MR = 0)</text>
              </>
            )}
            
            {/* TR Label */}
            <text 
              x={firmType === 'price-taker' ? 285 : 295} 
              y={firmType === 'price-taker' ? 30 : 135} 
              fill="#22d3ee" 
              fontSize="12" 
              fontWeight="600"
            >
              TR
            </text>
          </svg>
        </div>

        {/* AR/MR Curves */}
        <div className="relative bg-card/30 rounded-xl p-4 border border-silver/10">
          <h4 className="text-silver-bright text-sm font-medium mb-2 text-center">AR & MR Curves</h4>
          <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ minHeight: '200px' }}>
            {/* Grid background */}
            <rect x="50" y="20" width="240" height="170" fill="rgba(100,116,139,0.05)" />
            
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line
                key={`vgrid-armr-${i}`}
                x1={50 + i * 40}
                y1="20"
                x2={50 + i * 40}
                y2="190"
                stroke="rgba(100,116,139,0.15)"
                strokeWidth="1"
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`hgrid-armr-${i}`}
                x1="50"
                y1={20 + i * 42.5}
                x2="290"
                y2={20 + i * 42.5}
                stroke="rgba(100,116,139,0.15)"
                strokeWidth="1"
              />
            ))}

            {/* Axes */}
            <line x1="50" y1="190" x2="300" y2="190" stroke="#94a3b8" strokeWidth="2" />
            <line x1="50" y1="190" x2="50" y2="15" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Arrow heads */}
            <polygon points="300,190 292,186 292,194" fill="#94a3b8" />
            <polygon points="50,15 46,23 54,23" fill="#94a3b8" />

            {/* Axis Labels */}
            <text x="175" y="220" textAnchor="middle" fill="#94a3b8" fontSize="11">Quantity (Q)</text>
            <text x="20" y="105" textAnchor="middle" transform="rotate(-90, 20, 105)" fill="#94a3b8" fontSize="11">Price/Revenue ($)</text>

            {/* Origin label */}
            <text x="42" y="205" fill="#94a3b8" fontSize="10">0</text>

            {firmType === 'price-taker' ? (
              /* Horizontal AR = MR = D for price taker */
              <>
                <motion.line
                  key="ar-mr-line-taker"
                  x1="50"
                  y1="80"
                  x2="280"
                  y2="80"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                {/* Price level indicator */}
                <line x1="45" y1="80" x2="50" y2="80" stroke="#94a3b8" strokeWidth="2" />
                <text x="38" y="84" fill="#94a3b8" fontSize="10" textAnchor="end">P</text>
                
                {/* Label */}
                <text x="285" y="75" fill="#22d3ee" fontSize="10" fontWeight="500">P = AR = MR = D</text>
              </>
            ) : (
              /* Downward sloping AR and MR for price maker */
              <>
                {/* AR (Demand) curve - from top-left to bottom-right */}
                <motion.line
                  key="ar-line-maker"
                  x1="50"
                  y1="40"
                  x2="280"
                  y2="190"
                  stroke="#22d3ee"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <text x="240" y="175" fill="#22d3ee" fontSize="11" fontWeight="500">AR = D</text>

                {/* MR curve - twice the gradient of AR, hits x-axis at half the quantity */}
                <motion.line
                  key="mr-line-maker"
                  x1="50"
                  y1="40"
                  x2="165"
                  y2="190"
                  stroke="#f472b6"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <text x="130" y="178" fill="#f472b6" fontSize="11" fontWeight="500">MR</text>

                {/* Quantity labels on x-axis */}
                <text x="165" y="205" fill="#f472b6" fontSize="9" textAnchor="middle">Q*</text>
                <text x="280" y="205" fill="#22d3ee" fontSize="9" textAnchor="middle">2Q*</text>
                
                {/* Annotation box */}
                <rect x="185" y="105" width="90" height="35" fill="rgba(0,0,0,0.3)" rx="4" />
                <text x="230" y="120" fill="#94a3b8" fontSize="9" textAnchor="middle">MR falls twice</text>
                <text x="230" y="133" fill="#94a3b8" fontSize="9" textAnchor="middle">as fast as AR</text>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Key Formulas */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
          <h4 className="text-neon-cyan font-medium mb-2">Total Revenue</h4>
          <p className="text-silver-bright text-lg font-mono">TR = P × Q</p>
          <p className="text-xs text-muted-foreground mt-2">Total revenue is price multiplied by quantity sold.</p>
        </div>
        <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
          <h4 className="text-neon-magenta font-medium mb-2">Marginal Revenue</h4>
          <p className="text-silver-bright text-lg font-mono">MR = ΔTR / ΔQ</p>
          <p className="text-xs text-muted-foreground mt-2">Additional revenue from selling one more unit.</p>
        </div>
        <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
          <h4 className="text-emerald-400 font-medium mb-2">Average Revenue</h4>
          <p className="text-silver-bright text-lg font-mono">AR = TR / Q = P</p>
          <p className="text-xs text-muted-foreground mt-2">Revenue per unit sold, equals price.</p>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-card/50">
              <th className="border border-silver/20 px-3 py-2 text-silver-bright">Q</th>
              <th className="border border-silver/20 px-3 py-2 text-silver-bright">Price (P)</th>
              <th className="border border-silver/20 px-3 py-2 text-neon-cyan">TR</th>
              <th className="border border-silver/20 px-3 py-2 text-neon-magenta">MR</th>
              <th className="border border-silver/20 px-3 py-2 text-emerald-400">AR</th>
            </tr>
          </thead>
          <tbody>
            {(firmType === 'price-taker' ? priceTakerData : priceMakerData).map((row, i) => (
              <tr key={`revenue-row-${firmType}-${i}`} className="hover:bg-card/30">
                <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.q}</td>
                <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.p}</td>
                <td className="border border-silver/20 px-3 py-2 text-center text-neon-cyan">{row.tr}</td>
                <td className="border border-silver/20 px-3 py-2 text-center text-neon-magenta">{row.mr}</td>
                <td className="border border-silver/20 px-3 py-2 text-center text-emerald-400">{row.ar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Insight */}
      <div className="bg-gradient-to-r from-neon-magenta/10 to-transparent border-l-4 border-neon-magenta p-4 rounded-r-lg">
        <p className="text-sm text-silver-bright">
          <strong>Key Insight:</strong> For a <em>price taker</em>, AR = MR = Price (horizontal demand curve). 
          For a <em>price maker</em>, MR {"<"} AR because to sell more units, the firm must lower the price on all units sold. 
          When MR = 0, total revenue is maximized.
        </p>
      </div>
    </div>
  );
};

export default RevenueCurvesDiagram;
