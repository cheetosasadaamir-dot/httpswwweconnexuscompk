import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SRASShiftStagflationDiagram = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  const resetAnimation = () => setAnimationKey(prev => prev + 1);

  const width = 600;
  const height = 450;
  const margin = { top: 50, right: 50, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Colors
  const adColor = "#22D3EE";
  const srasColor = "#F59E0B";
  const sras2Color = "#EF4444";
  const lrasColor = "#FFFFFF";

  return (
    <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
        Leftward Shift in SRAS: Stagflation
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        The worst-case scenario: rising prices with falling output
      </p>

      <svg key={animationKey} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        <defs>
          <marker id="stagArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" />
          </marker>
          <marker id="stagArrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
              stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#stagArrow)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top - 15} 
              stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#stagArrow)" />
        
        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
          Real National Output (Y)
        </text>
        <text x={25} y={margin.top + chartHeight / 2} textAnchor="middle" fill="white" fontSize="13" fontWeight="600"
              transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}>
          General Price Level (GPL)
        </text>

        {/* LRAS */}
        <line x1={xScale(70)} y1={yScale(95)} x2={xScale(70)} y2={yScale(5)} stroke={lrasColor} strokeWidth="3" />
        <text x={xScale(70) + 8} y={yScale(97)} fill={lrasColor} fontSize="13" fontWeight="bold">LRAS</text>
        <text x={xScale(70)} y={yScale(0) + 20} textAnchor="middle" fill={lrasColor} fontSize="11">Y*</text>

        {/* AD Curve */}
        <motion.path
          d={`M ${xScale(10)} ${yScale(85)} Q ${xScale(35)} ${yScale(63)}, ${xScale(55)} ${yScale(50)} Q ${xScale(70)} ${yScale(40)}, ${xScale(85)} ${yScale(30)}`}
          fill="none" stroke={adColor} strokeWidth="3.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <text x={xScale(87)} y={yScale(28)} fill={adColor} fontSize="14" fontWeight="bold">AD</text>

        {/* Original SRAS Curve (SRAS₁) */}
        <motion.path
          d={`M ${xScale(10)} ${yScale(18)} Q ${xScale(35)} ${yScale(32)}, ${xScale(55)} ${yScale(50)} Q ${xScale(70)} ${yScale(70)}, ${xScale(80)} ${yScale(92)}`}
          fill="none" stroke={srasColor} strokeWidth="2.5" strokeDasharray="8,4" opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <text x={xScale(82)} y={yScale(94)} fill={srasColor} fontSize="12" opacity="0.7">SRAS₁</text>

        {/* Initial Equilibrium E₁ */}
        <motion.circle
          cx={xScale(55)} cy={yScale(50)} r="6"
          fill="white" stroke={srasColor} strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
        />
        <motion.text 
          x={xScale(55) + 12} y={yScale(50) - 10} 
          fill="white" fontSize="12" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          E₁
        </motion.text>

        {/* Initial dashed lines */}
        <motion.line 
          x1={xScale(55)} y1={yScale(50)} x2={xScale(55)} y2={yScale(0)} 
          stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.line 
          x1={xScale(55)} y1={yScale(50)} x2={margin.left} y2={yScale(50)} 
          stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.text 
          x={xScale(55)} y={yScale(0) + 16} textAnchor="middle" 
          fill="white" fontSize="10" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Y₁
        </motion.text>
        <motion.text 
          x={margin.left - 12} y={yScale(50) + 4} textAnchor="middle" 
          fill="white" fontSize="10" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          P₁
        </motion.text>

        {/* Shift Arrow (leftward/upward) */}
        <motion.path
          d={`M ${xScale(55)} ${yScale(58)} Q ${xScale(45)} ${yScale(68)}, ${xScale(38)} ${yScale(58)}`}
          fill="none" stroke={sras2Color} strokeWidth="2.5"
          markerEnd="url(#stagArrowRed)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />

        {/* New SRAS Curve (SRAS₂) - shifted left */}
        <motion.path
          d={`M ${xScale(5)} ${yScale(35)} Q ${xScale(25)} ${yScale(50)}, ${xScale(38)} ${yScale(63)} Q ${xScale(55)} ${yScale(82)}, ${xScale(65)} ${yScale(95)}`}
          fill="none" stroke={sras2Color} strokeWidth="3.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(67)} y={yScale(97)} 
          fill={sras2Color} fontSize="14" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          SRAS₂
        </motion.text>

        {/* New Equilibrium E₂ */}
        <motion.circle
          cx={xScale(38)} cy={yScale(63)} r="7"
          fill="white" stroke={sras2Color} strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring" }}
        />
        <motion.text 
          x={xScale(38) - 18} y={yScale(63) - 10} 
          fill="white" fontSize="13" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          E₂
        </motion.text>

        {/* New dashed lines */}
        <motion.line 
          x1={xScale(38)} y1={yScale(63)} x2={xScale(38)} y2={yScale(0)} 
          stroke={sras2Color} strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        />
        <motion.line 
          x1={xScale(38)} y1={yScale(63)} x2={margin.left} y2={yScale(63)} 
          stroke={sras2Color} strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        />
        <motion.text 
          x={xScale(38)} y={yScale(0) + 16} textAnchor="middle" 
          fill={sras2Color} fontSize="11" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          Y₂
        </motion.text>
        <motion.text 
          x={margin.left - 12} y={yScale(63) + 4} textAnchor="middle" 
          fill={sras2Color} fontSize="11" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          P₂
        </motion.text>

        {/* Stagflation indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          {/* ΔY arrow (negative) */}
          <line x1={xScale(55) - 3} y1={yScale(3)} x2={xScale(38) + 3} y2={yScale(3)} 
                stroke={sras2Color} strokeWidth="2" markerEnd="url(#stagArrowRed)" />
          <text x={(xScale(38) + xScale(55)) / 2} y={yScale(8)} textAnchor="middle" fill={sras2Color} fontSize="10">
            ΔY {'<'} 0 (Stagnation)
          </text>

          {/* ΔP arrow (positive) */}
          <line x1={margin.left + 8} y1={yScale(50) + 3} x2={margin.left + 8} y2={yScale(63) - 3} 
                stroke={sras2Color} strokeWidth="2" markerEnd="url(#stagArrowRed)" />
          <text x={margin.left + 30} y={(yScale(50) + yScale(63)) / 2 + 3} fill={sras2Color} fontSize="10">
            ΔP {'>'} 0
          </text>
        </motion.g>

        {/* STAGFLATION box */}
        <motion.rect
          x={(xScale(38) + xScale(55)) / 2 - 55} y={yScale(55) - 15} width="110" height="30" rx="6"
          fill="rgba(239, 68, 68, 0.25)" stroke="#EF4444" strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, type: "spring" }}
        />
        <motion.text 
          x={(xScale(38) + xScale(55)) / 2} y={yScale(55) + 5} 
          textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4 }}
        >
          STAGFLATION
        </motion.text>

        {/* Cause box */}
        <motion.rect
          x={xScale(65)} y={yScale(55)} width="120" height="55" rx="6"
          fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        />
        <motion.text x={xScale(65) + 60} y={yScale(55) + 15} textAnchor="middle" fill="#EF4444" fontSize="9" fontWeight="bold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          Possible Causes:
        </motion.text>
        <motion.text x={xScale(65) + 60} y={yScale(55) + 28} textAnchor="middle" fill="white" fontSize="8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          • Oil price shock
        </motion.text>
        <motion.text x={xScale(65) + 60} y={yScale(55) + 40} textAnchor="middle" fill="white" fontSize="8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          • Wage-push pressures
        </motion.text>
        <motion.text x={xScale(65) + 60} y={yScale(55) + 52} textAnchor="middle" fill="white" fontSize="8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          • Currency depreciation
        </motion.text>
      </svg>

      {/* Replay button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={resetAnimation}
          className="px-4 py-2 rounded-lg bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-all border border-white/20"
        >
          ↻ Replay Animation
        </button>
      </div>

      {/* Chain of Analysis */}
      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-red-500/30">
        <h4 className="text-red-400 font-semibold mb-2 text-sm">Chain of Analysis</h4>
        <p className="text-sm text-white/80 leading-relaxed">
          <strong>Trigger:</strong> Rise in imported raw material costs (e.g., oil price shock) → 
          <strong> Unit Cost Increase:</strong> Firms face higher costs of production at every output level → 
          <strong> SRAS Shift:</strong> SRAS curve shifts leftward from SRAS₁ to SRAS₂ → 
          <strong> Profit Squeeze:</strong> At original price P₁, firms cannot cover increased costs → 
          <strong> Response:</strong> Firms raise prices to maintain margins while cutting back output → 
          <strong> Stagflation:</strong> Economy settles at E₂ with higher price level (P₂ {'>'} P₁) but lower real output (Y₂ {'<'} Y₁) — the defining characteristic of stagflation.
        </p>
      </div>

      {/* Policy Dilemma */}
      <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
        <p className="text-sm text-white/80">
          <strong className="text-amber-400">Policy Dilemma:</strong> Stagflation presents policymakers with an impossible trade-off. Expansionary demand policy (shifting AD right) would combat the recession but exacerbate inflation. Contractionary policy would reduce inflation but deepen the output contraction. This explains why the 1970s oil shocks were so devastating—conventional demand management tools were impotent against a supply-side shock. The only solution is supply-side intervention to shift SRAS back rightward.
        </p>
      </div>
    </div>
  );
};

export default SRASShiftStagflationDiagram;
