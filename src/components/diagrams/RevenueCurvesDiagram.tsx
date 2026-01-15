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
          <svg viewBox="0 0 300 220" className="w-full h-auto">
            <defs>
              <pattern id="trGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(100,116,139,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect x="40" y="10" width="240" height="170" fill="url(#trGrid)" />

            {/* Axes */}
            <line x1="40" y1="180" x2="290" y2="180" stroke="hsl(var(--silver))" strokeWidth="2" />
            <line x1="40" y1="180" x2="40" y2="10" stroke="hsl(var(--silver))" strokeWidth="2" />

            <text x="165" y="205" textAnchor="middle" className="fill-silver text-[10px]">Quantity (Q)</text>
            <text x="15" y="95" textAnchor="middle" transform="rotate(-90, 15, 95)" className="fill-silver text-[10px]">TR ($)</text>

            {firmType === 'price-taker' ? (
              /* Linear TR for price taker */
              <motion.path
                d="M 40,180 L 270,30"
                fill="none"
                stroke="hsl(var(--neon-cyan))"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            ) : (
              /* Parabolic TR for price maker */
              <>
                <motion.path
                  d="M 40,180 Q 100,120 160,60 Q 200,40 220,45 Q 250,60 270,100"
                  fill="none"
                  stroke="hsl(var(--neon-cyan))"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                {/* Max TR point */}
                <motion.circle
                  cx="200"
                  cy="42"
                  r="5"
                  fill="hsl(var(--neon-magenta))"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                />
                <text x="208" y="35" className="fill-neon-magenta text-[9px]">Max TR</text>
                <text x="208" y="55" className="fill-silver text-[8px]">(MR = 0)</text>
              </>
            )}
            <text x="275" y={firmType === 'price-taker' ? 25 : 95} className="fill-neon-cyan text-xs">TR</text>
          </svg>
        </div>

        {/* AR/MR Curves */}
        <div className="relative bg-card/30 rounded-xl p-4 border border-silver/10">
          <h4 className="text-silver-bright text-sm font-medium mb-2 text-center">AR & MR Curves</h4>
          <svg viewBox="0 0 300 220" className="w-full h-auto">
            <defs>
              <pattern id="armrGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(100,116,139,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect x="40" y="10" width="240" height="170" fill="url(#armrGrid)" />

            {/* Axes */}
            <line x1="40" y1="180" x2="290" y2="180" stroke="hsl(var(--silver))" strokeWidth="2" />
            <line x1="40" y1="180" x2="40" y2="10" stroke="hsl(var(--silver))" strokeWidth="2" />

            <text x="165" y="205" textAnchor="middle" className="fill-silver text-[10px]">Quantity (Q)</text>
            <text x="15" y="95" textAnchor="middle" transform="rotate(-90, 15, 95)" className="fill-silver text-[10px]">Price/Revenue ($)</text>

            {firmType === 'price-taker' ? (
              /* Horizontal AR = MR = D for price taker */
              <>
                <motion.line
                  x1="40"
                  y1="80"
                  x2="270"
                  y2="80"
                  stroke="hsl(var(--neon-cyan))"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <text x="275" y="75" className="fill-neon-cyan text-[10px]">P = AR = MR = D</text>
                <text x="30" y="75" className="fill-silver text-[9px]">P</text>
              </>
            ) : (
              /* Downward sloping AR and MR for price maker */
              <>
                {/* AR (Demand) curve */}
                <motion.path
                  d="M 40,40 L 270,170"
                  fill="none"
                  stroke="hsl(var(--neon-cyan))"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                <text x="275" y="165" className="fill-neon-cyan text-[10px]">AR = D</text>

                {/* MR curve (steeper, twice the slope) */}
                <motion.path
                  d="M 40,40 L 155,170"
                  fill="none"
                  stroke="hsl(var(--neon-magenta))"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <text x="160" y="168" className="fill-neon-magenta text-[10px]">MR</text>

                {/* Zero line for MR */}
                <line x1="40" y1="180" x2="155" y2="180" stroke="hsl(var(--neon-magenta))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
                
                {/* Annotation */}
                <text x="180" y="130" className="fill-silver text-[8px]">MR falls twice</text>
                <text x="180" y="142" className="fill-silver text-[8px]">as fast as AR</text>
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
              <tr key={i} className="hover:bg-card/30">
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
