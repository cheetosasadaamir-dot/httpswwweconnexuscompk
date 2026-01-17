import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ADShiftImpactDiagram = () => {
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
  const ad2Color = "#06B6D4";
  const srasColor = "#F59E0B";
  const lrasColor = "#FFFFFF";

  return (
    <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
        Rightward Shift in Aggregate Demand
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        The transmission from increased autonomous expenditure to higher P and Y
      </p>

      <svg key={animationKey} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        <defs>
          <marker id="shiftArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" />
          </marker>
          <marker id="shiftArrowCyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22D3EE" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
              stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#shiftArrow)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top - 15} 
              stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#shiftArrow)" />
        
        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
          Real National Output (Y)
        </text>
        <text x={25} y={margin.top + chartHeight / 2} textAnchor="middle" fill="white" fontSize="13" fontWeight="600"
              transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}>
          General Price Level (GPL)
        </text>

        {/* LRAS */}
        <line x1={xScale(75)} y1={yScale(95)} x2={xScale(75)} y2={yScale(5)} stroke={lrasColor} strokeWidth="3" />
        <text x={xScale(75) + 8} y={yScale(97)} fill={lrasColor} fontSize="13" fontWeight="bold">LRAS</text>
        <text x={xScale(75)} y={yScale(0) + 20} textAnchor="middle" fill={lrasColor} fontSize="11">Y*</text>

        {/* SRAS Curve */}
        <motion.path
          d={`M ${xScale(5)} ${yScale(15)} Q ${xScale(30)} ${yScale(32)}, ${xScale(50)} ${yScale(48)} Q ${xScale(65)} ${yScale(62)}, ${xScale(80)} ${yScale(90)}`}
          fill="none" stroke={srasColor} strokeWidth="3.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <text x={xScale(82)} y={yScale(92)} fill={srasColor} fontSize="14" fontWeight="bold">SRAS</text>

        {/* Original AD Curve (AD₁) */}
        <motion.path
          d={`M ${xScale(8)} ${yScale(80)} Q ${xScale(30)} ${yScale(60)}, ${xScale(50)} ${yScale(48)} Q ${xScale(65)} ${yScale(38)}, ${xScale(80)} ${yScale(28)}`}
          fill="none" stroke={adColor} strokeWidth="2.5" strokeDasharray="8,4" opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <text x={xScale(82)} y={yScale(26)} fill={adColor} fontSize="12" opacity="0.7">AD₁</text>

        {/* Initial Equilibrium E₁ */}
        <motion.circle
          cx={xScale(50)} cy={yScale(48)} r="6"
          fill="white" stroke={adColor} strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
        />
        <motion.text 
          x={xScale(50) - 18} y={yScale(48) - 10} 
          fill="white" fontSize="12" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          E₁
        </motion.text>

        {/* Initial dashed lines */}
        <motion.line 
          x1={xScale(50)} y1={yScale(48)} x2={xScale(50)} y2={yScale(0)} 
          stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.line 
          x1={xScale(50)} y1={yScale(48)} x2={margin.left} y2={yScale(48)} 
          stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.text 
          x={xScale(50)} y={yScale(0) + 16} textAnchor="middle" 
          fill="white" fontSize="10" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Y₁
        </motion.text>
        <motion.text 
          x={margin.left - 12} y={yScale(48) + 4} textAnchor="middle" 
          fill="white" fontSize="10" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          P₁
        </motion.text>

        {/* Shift Arrow */}
        <motion.path
          d={`M ${xScale(45)} ${yScale(55)} Q ${xScale(55)} ${yScale(62)}, ${xScale(60)} ${yScale(55)}`}
          fill="none" stroke={ad2Color} strokeWidth="2.5"
          markerEnd="url(#shiftArrowCyan)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />

        {/* New AD Curve (AD₂) */}
        <motion.path
          d={`M ${xScale(20)} ${yScale(88)} Q ${xScale(45)} ${yScale(70)}, ${xScale(62)} ${yScale(58)} Q ${xScale(75)} ${yScale(48)}, ${xScale(90)} ${yScale(38)}`}
          fill="none" stroke={ad2Color} strokeWidth="3.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(92)} y={yScale(36)} 
          fill={ad2Color} fontSize="14" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          AD₂
        </motion.text>

        {/* New Equilibrium E₂ */}
        <motion.circle
          cx={xScale(62)} cy={yScale(58)} r="7"
          fill="white" stroke="#10B981" strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring" }}
        />
        <motion.text 
          x={xScale(62) + 12} y={yScale(58) - 10} 
          fill="white" fontSize="13" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          E₂
        </motion.text>

        {/* New dashed lines */}
        <motion.line 
          x1={xScale(62)} y1={yScale(58)} x2={xScale(62)} y2={yScale(0)} 
          stroke="#10B981" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        />
        <motion.line 
          x1={xScale(62)} y1={yScale(58)} x2={margin.left} y2={yScale(58)} 
          stroke="#10B981" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        />
        <motion.text 
          x={xScale(62)} y={yScale(0) + 16} textAnchor="middle" 
          fill="#10B981" fontSize="11" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          Y₂
        </motion.text>
        <motion.text 
          x={margin.left - 12} y={yScale(58) + 4} textAnchor="middle" 
          fill="#10B981" fontSize="11" fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          P₂
        </motion.text>

        {/* Change indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          {/* ΔY arrow */}
          <line x1={xScale(50) + 3} y1={yScale(3)} x2={xScale(62) - 3} y2={yScale(3)} 
                stroke="#10B981" strokeWidth="2" markerEnd="url(#shiftArrow)" />
          <text x={(xScale(50) + xScale(62)) / 2} y={yScale(7)} textAnchor="middle" fill="#10B981" fontSize="10">
            ΔY (Growth)
          </text>

          {/* ΔP arrow */}
          <line x1={margin.left + 8} y1={yScale(48) - 3} x2={margin.left + 8} y2={yScale(58) + 3} 
                stroke="#10B981" strokeWidth="2" markerEnd="url(#shiftArrow)" />
          <text x={margin.left + 25} y={(yScale(48) + yScale(58)) / 2 + 3} fill="#10B981" fontSize="10">
            ΔP
          </text>
        </motion.g>

        {/* Cause box */}
        <motion.rect
          x={xScale(5)} y={yScale(95)} width="150" height="50" rx="6"
          fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        />
        <motion.text x={xScale(5) + 75} y={yScale(95) + 18} textAnchor="middle" fill="#22D3EE" fontSize="9" fontWeight="bold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
          Possible Causes:
        </motion.text>
        <motion.text x={xScale(5) + 75} y={yScale(95) + 32} textAnchor="middle" fill="white" fontSize="8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
          ↑ Business Confidence → ↑ I
        </motion.text>
        <motion.text x={xScale(5) + 75} y={yScale(95) + 44} textAnchor="middle" fill="white" fontSize="8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
          ↓ Interest Rates → ↑ C, I
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
      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-cyan-500/30">
        <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Chain of Analysis (AO3)</h4>
        <p className="text-sm text-white/80 leading-relaxed">
          <strong>Trigger:</strong> Rise in Investment (I) due to improved business confidence → 
          <strong> AD Shift:</strong> AD curve shifts rightward from AD₁ to AD₂ → 
          <strong> Excess Demand:</strong> At original price P₁, quantity demanded now exceeds quantity supplied → 
          <strong> Inventory Depletion:</strong> Firms experience falling stock levels → 
          <strong> Price & Output Response:</strong> Firms raise prices (P₁ → P₂) while simultaneously expanding production (Y₁ → Y₂) → 
          <strong> New Equilibrium:</strong> Economy settles at E₂ with both higher real output and higher price level.
        </p>
      </div>

      {/* Evaluative note */}
      <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
        <p className="text-sm text-white/80">
          <strong className="text-amber-400">Evaluative Point (AO4):</strong> The relative magnitude of the output gain (ΔY) versus the price rise (ΔP) depends critically on the elasticity of SRAS. Near full employment (approaching LRAS), the same AD shift would generate primarily inflation with minimal real growth—the economy moves up an increasingly steep portion of the SRAS curve.
        </p>
      </div>
    </div>
  );
};

export default ADShiftImpactDiagram;
