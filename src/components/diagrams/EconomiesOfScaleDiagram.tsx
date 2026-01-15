import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EconomiesOfScaleDiagram: React.FC = () => {
  const [showMES, setShowMES] = useState(true);
  const [showSRAC, setShowSRAC] = useState(true);
  const [activePhase, setActivePhase] = useState<'eos' | 'crts' | 'dos' | null>(null);

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="flex gap-4 flex-wrap">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showSRAC}
            onChange={() => setShowSRAC(!showSRAC)}
            className="w-4 h-4 rounded"
          />
          <span className="text-sm text-silver-bright">Show SRAC Curves</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showMES}
            onChange={() => setShowMES(!showMES)}
            className="w-4 h-4 rounded"
          />
          <span className="text-sm text-neon-cyan">Show MES Point</span>
        </label>
      </div>

      {/* SVG Diagram */}
      <div className="relative bg-card/30 rounded-xl p-4 border border-silver/10">
        <svg viewBox="0 0 550 380" className="w-full h-auto">
          {/* Grid */}
          <defs>
            <pattern id="lracGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,116,139,0.1)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="eosGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dosGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
              <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="60" y="20" width="460" height="300" fill="url(#lracGrid)" />

          {/* Phase Regions */}
          <motion.rect
            x="60"
            y="20"
            width="180"
            height="300"
            fill={activePhase === 'eos' ? 'rgba(52, 211, 153, 0.15)' : 'url(#eosGradient)'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setActivePhase('eos')}
            onMouseLeave={() => setActivePhase(null)}
            style={{ cursor: 'pointer' }}
          />
          <motion.rect
            x="240"
            y="20"
            width="100"
            height="300"
            fill={activePhase === 'crts' ? 'rgba(251, 191, 36, 0.15)' : 'transparent'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setActivePhase('crts')}
            onMouseLeave={() => setActivePhase(null)}
            style={{ cursor: 'pointer' }}
          />
          <motion.rect
            x="340"
            y="20"
            width="180"
            height="300"
            fill={activePhase === 'dos' ? 'rgba(239, 68, 68, 0.15)' : 'url(#dosGradient)'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setActivePhase('dos')}
            onMouseLeave={() => setActivePhase(null)}
            style={{ cursor: 'pointer' }}
          />

          {/* Axes */}
          <line x1="60" y1="320" x2="530" y2="320" stroke="hsl(var(--silver))" strokeWidth="2" />
          <line x1="60" y1="320" x2="60" y2="20" stroke="hsl(var(--silver))" strokeWidth="2" />

          {/* Axis Labels */}
          <text x="295" y="355" textAnchor="middle" className="fill-silver text-sm">Output (Q)</text>
          <text x="25" y="170" textAnchor="middle" transform="rotate(-90, 25, 170)" className="fill-silver text-sm">Average Cost</text>

          {/* SRAC Curves */}
          {showSRAC && (
            <>
              <motion.path
                d="M 80,180 Q 100,140 120,120 Q 140,110 160,120 Q 180,140 200,180"
                fill="none"
                stroke="hsl(var(--silver))"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
              <text x="140" y="105" className="fill-silver text-[10px]">SRAC₁</text>
              
              <motion.path
                d="M 140,160 Q 170,120 200,100 Q 230,90 260,100 Q 290,120 320,160"
                fill="none"
                stroke="hsl(var(--silver))"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <text x="230" y="82" className="fill-silver text-[10px]">SRAC₂</text>
              
              <motion.path
                d="M 220,140 Q 260,100 300,85 Q 340,80 380,85 Q 420,100 460,140"
                fill="none"
                stroke="hsl(var(--silver))"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <text x="340" y="68" className="fill-silver text-[10px]">SRAC₃</text>

              <motion.path
                d="M 340,120 Q 400,95 440,100 Q 480,115 510,160"
                fill="none"
                stroke="hsl(var(--silver))"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <text x="460" y="88" className="fill-silver text-[10px]">SRAC₄</text>
            </>
          )}

          {/* LRAC Curve (Envelope) */}
          <motion.path
            d="M 80,200 Q 120,150 180,110 Q 240,85 300,80 Q 360,82 420,100 Q 480,130 510,180"
            fill="none"
            stroke="hsl(var(--neon-cyan))"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <text x="515" y="175" className="fill-neon-cyan text-sm font-medium">LRAC</text>

          {/* MES Point */}
          {showMES && (
            <>
              <motion.line
                x1="300"
                y1="80"
                x2="300"
                y2="320"
                stroke="hsl(var(--neon-magenta))"
                strokeWidth="2"
                strokeDasharray="8,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
              <motion.circle
                cx="300"
                cy="80"
                r="6"
                fill="hsl(var(--neon-magenta))"
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 }}
              />
              <text x="300" y="340" textAnchor="middle" className="fill-neon-magenta text-xs font-medium">MES</text>
              <text x="308" y="65" className="fill-neon-magenta text-[10px]">Minimum Efficient Scale</text>
            </>
          )}

          {/* Phase Labels */}
          <text x="140" y="300" textAnchor="middle" className="fill-emerald-400 text-xs font-medium">
            Economies of Scale
          </text>
          <text x="140" y="315" textAnchor="middle" className="fill-silver text-[10px]">
            (LRAC falling)
          </text>

          <text x="290" y="300" textAnchor="middle" className="fill-amber-400 text-xs font-medium">
            CRTS
          </text>

          <text x="430" y="300" textAnchor="middle" className="fill-red-400 text-xs font-medium">
            Diseconomies of Scale
          </text>
          <text x="430" y="315" textAnchor="middle" className="fill-silver text-[10px]">
            (LRAC rising)
          </text>

          {/* Arrows showing direction */}
          <path d="M 100,220 L 180,180" fill="none" stroke="rgb(52, 211, 153)" strokeWidth="2" markerEnd="url(#arrowGreen)" />
          <path d="M 400,180 L 480,220" fill="none" stroke="rgb(239, 68, 68)" strokeWidth="2" markerEnd="url(#arrowRed)" />
          
          <defs>
            <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="rgb(52, 211, 153)" />
            </marker>
            <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="rgb(239, 68, 68)" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Returns to Scale Formula Box */}
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div
          className={`p-4 rounded-lg border transition-all ${
            activePhase === 'eos' 
              ? 'bg-emerald-500/20 border-emerald-500' 
              : 'bg-card/30 border-silver/10'
          }`}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-emerald-400 font-semibold mb-2">Increasing Returns to Scale</h4>
          <p className="text-silver text-sm mb-2">Input ↑ 10% → Output ↑ {">"} 10%</p>
          <p className="text-xs text-muted-foreground">Average costs fall as firm expands. Firm benefits from economies of scale.</p>
        </motion.div>

        <motion.div
          className={`p-4 rounded-lg border transition-all ${
            activePhase === 'crts' 
              ? 'bg-amber-500/20 border-amber-500' 
              : 'bg-card/30 border-silver/10'
          }`}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-amber-400 font-semibold mb-2">Constant Returns to Scale</h4>
          <p className="text-silver text-sm mb-2">Input ↑ 10% → Output ↑ = 10%</p>
          <p className="text-xs text-muted-foreground">Average costs remain unchanged. Operating at optimal efficiency.</p>
        </motion.div>

        <motion.div
          className={`p-4 rounded-lg border transition-all ${
            activePhase === 'dos' 
              ? 'bg-red-500/20 border-red-500' 
              : 'bg-card/30 border-silver/10'
          }`}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-red-400 font-semibold mb-2">Decreasing Returns to Scale</h4>
          <p className="text-silver text-sm mb-2">Input ↑ 10% → Output ↑ {"<"} 10%</p>
          <p className="text-xs text-muted-foreground">Average costs rise as firm grows too large. Diseconomies set in.</p>
        </motion.div>
      </div>

      {/* Key Definition */}
      <div className="bg-gradient-to-r from-neon-cyan/10 to-transparent border-l-4 border-neon-cyan p-4 rounded-r-lg">
        <p className="text-sm text-silver-bright">
          <strong>Long-Run Average Cost (LRAC):</strong> The curve showing the lowest possible average cost attainable for any level of output 
          when all inputs are variable. It is tangent to each Short-Run Average Cost curve and is also known as the <em>planning curve</em> 
          or <em>envelope curve</em>.
        </p>
      </div>
    </div>
  );
};

export default EconomiesOfScaleDiagram;
