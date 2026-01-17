import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const EquilibriumAdjustmentDiagram = () => {
  const [scenario, setScenario] = useState<'excess-supply' | 'excess-demand'>('excess-supply');
  const [animationKey, setAnimationKey] = useState(0);

  const resetAnimation = () => setAnimationKey(prev => prev + 1);

  const width = 600;
  const height = 450;
  const margin = { top: 50, right: 50, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Curve colors
  const adColor = "#22D3EE"; // Neon Cyan
  const srasColor = "#F59E0B"; // Amber Gold

  return (
    <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
        The Self-Correcting Mechanism: Price Level Adjustment
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        How disequilibrium in the goods market triggers automatic adjustment
      </p>

      {/* Scenario Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => { setScenario('excess-supply'); resetAnimation(); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            scenario === 'excess-supply' 
              ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          Excess Supply (P {'>'} P*)
        </button>
        <button
          onClick={() => { setScenario('excess-demand'); resetAnimation(); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            scenario === 'excess-demand' 
              ? 'bg-amber-500/30 text-amber-400 border border-amber-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          Excess Demand (P {'<'} P*)
        </button>
      </div>

      <svg key={animationKey} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        <defs>
          <marker id="adjArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" />
          </marker>
          <marker id="adjArrowCyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={adColor} />
          </marker>
        </defs>

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
              stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#adjArrow)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top - 15} 
              stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#adjArrow)" />
        
        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
          Real National Output (Y)
        </text>
        <text x={25} y={margin.top + chartHeight / 2} textAnchor="middle" fill="white" fontSize="13" fontWeight="600"
              transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}>
          General Price Level (GPL)
        </text>

        {/* AD Curve */}
        <motion.path
          d={`M ${xScale(10)} ${yScale(85)} Q ${xScale(40)} ${yScale(60)}, ${xScale(55)} ${yScale(50)} Q ${xScale(70)} ${yScale(40)}, ${xScale(90)} ${yScale(25)}`}
          fill="none"
          stroke={adColor}
          strokeWidth="3.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <text x={xScale(92)} y={yScale(22)} fill={adColor} fontSize="14" fontWeight="bold">AD</text>

        {/* SRAS Curve */}
        <motion.path
          d={`M ${xScale(10)} ${yScale(20)} Q ${xScale(35)} ${yScale(35)}, ${xScale(55)} ${yScale(50)} Q ${xScale(75)} ${yScale(70)}, ${xScale(85)} ${yScale(90)}`}
          fill="none"
          stroke={srasColor}
          strokeWidth="3.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <text x={xScale(87)} y={yScale(92)} fill={srasColor} fontSize="14" fontWeight="bold">SRAS</text>

        {/* Equilibrium Point E* */}
        <motion.circle
          cx={xScale(55)} cy={yScale(50)} r="7"
          fill="white" stroke="#10B981" strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        />
        <text x={xScale(55) + 12} y={yScale(50) - 8} fill="white" fontSize="13" fontWeight="bold">E*</text>

        {/* Equilibrium dashed lines */}
        <line x1={xScale(55)} y1={yScale(50)} x2={xScale(55)} y2={yScale(0)} 
              stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6,4" />
        <line x1={xScale(55)} y1={yScale(50)} x2={margin.left} y2={yScale(50)} 
              stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6,4" />
        <text x={xScale(55)} y={yScale(0) + 18} textAnchor="middle" fill="white" fontSize="11">Y*</text>
        <text x={margin.left - 15} y={yScale(50) + 4} textAnchor="middle" fill="white" fontSize="11">P*</text>

        {scenario === 'excess-supply' ? (
          <g>
            {/* Price above equilibrium */}
            <line x1={margin.left} y1={yScale(70)} x2={xScale(90)} y2={yScale(70)} 
                  stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,4" />
            <text x={margin.left - 15} y={yScale(70) + 4} textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">P₁</text>

            {/* Quantity Supplied at P₁ (on SRAS) */}
            <motion.circle
              cx={xScale(72)} cy={yScale(70)} r="6"
              fill={srasColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <text x={xScale(72)} y={yScale(70) - 12} textAnchor="middle" fill={srasColor} fontSize="10">Qs</text>

            {/* Quantity Demanded at P₁ (on AD) */}
            <motion.circle
              cx={xScale(38)} cy={yScale(70)} r="6"
              fill={adColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <text x={xScale(38)} y={yScale(70) - 12} textAnchor="middle" fill={adColor} fontSize="10">Qd</text>

            {/* Excess Supply bracket */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <line x1={xScale(38)} y1={yScale(75)} x2={xScale(72)} y2={yScale(75)} stroke="#EF4444" strokeWidth="2" />
              <line x1={xScale(38)} y1={yScale(77)} x2={xScale(38)} y2={yScale(73)} stroke="#EF4444" strokeWidth="2" />
              <line x1={xScale(72)} y1={yScale(77)} x2={xScale(72)} y2={yScale(73)} stroke="#EF4444" strokeWidth="2" />
              <text x={(xScale(38) + xScale(72)) / 2} y={yScale(81)} textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">
                EXCESS SUPPLY
              </text>
            </motion.g>

            {/* Downward adjustment arrow */}
            <motion.path
              d={`M ${xScale(55)} ${yScale(68)} L ${xScale(55)} ${yScale(54)}`}
              stroke="#10B981" strokeWidth="3" fill="none"
              markerEnd="url(#adjArrowCyan)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            />
            <motion.text
              x={xScale(55) + 30}
              y={yScale(62)}
              fill="#10B981"
              fontSize="10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              P falls → E*
            </motion.text>

            {/* Explanation box */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              <rect x={xScale(5)} y={yScale(15)} width="200" height="55" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" strokeWidth="1" />
              <text x={xScale(5) + 100} y={yScale(15) + 18} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
                Inventory Accumulation
              </text>
              <text x={xScale(5) + 100} y={yScale(15) + 33} textAnchor="middle" fill="white" fontSize="8" opacity="0.8">
                Firms cut prices & reduce output
              </text>
              <text x={xScale(5) + 100} y={yScale(15) + 46} textAnchor="middle" fill="white" fontSize="8" opacity="0.8">
                → Movement down AD until E*
              </text>
            </motion.g>
          </g>
        ) : (
          <g>
            {/* Price below equilibrium */}
            <line x1={margin.left} y1={yScale(35)} x2={xScale(90)} y2={yScale(35)} 
                  stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,4" />
            <text x={margin.left - 15} y={yScale(35) + 4} textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold">P₁</text>

            {/* Quantity Supplied at P₁ (on SRAS) */}
            <motion.circle
              cx={xScale(35)} cy={yScale(35)} r="6"
              fill={srasColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <text x={xScale(35)} y={yScale(35) - 12} textAnchor="middle" fill={srasColor} fontSize="10">Qs</text>

            {/* Quantity Demanded at P₁ (on AD) */}
            <motion.circle
              cx={xScale(72)} cy={yScale(35)} r="6"
              fill={adColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <text x={xScale(72)} y={yScale(35) - 12} textAnchor="middle" fill={adColor} fontSize="10">Qd</text>

            {/* Excess Demand bracket */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <line x1={xScale(35)} y1={yScale(30)} x2={xScale(72)} y2={yScale(30)} stroke="#22D3EE" strokeWidth="2" />
              <line x1={xScale(35)} y1={yScale(32)} x2={xScale(35)} y2={yScale(28)} stroke="#22D3EE" strokeWidth="2" />
              <line x1={xScale(72)} y1={yScale(32)} x2={xScale(72)} y2={yScale(28)} stroke="#22D3EE" strokeWidth="2" />
              <text x={(xScale(35) + xScale(72)) / 2} y={yScale(25)} textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold">
                EXCESS DEMAND
              </text>
            </motion.g>

            {/* Upward adjustment arrow */}
            <motion.path
              d={`M ${xScale(55)} ${yScale(37)} L ${xScale(55)} ${yScale(48)}`}
              stroke="#10B981" strokeWidth="3" fill="none"
              markerEnd="url(#adjArrowCyan)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            />
            <motion.text
              x={xScale(55) + 30}
              y={yScale(42)}
              fill="#10B981"
              fontSize="10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              P rises → E*
            </motion.text>

            {/* Explanation box */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              <rect x={xScale(5)} y={yScale(95)} width="200" height="55" rx="6" fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" strokeWidth="1" />
              <text x={xScale(5) + 100} y={yScale(95) + 18} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
                Inventory Depletion
              </text>
              <text x={xScale(5) + 100} y={yScale(95) + 33} textAnchor="middle" fill="white" fontSize="8" opacity="0.8">
                Firms raise prices & expand output
              </text>
              <text x={xScale(5) + 100} y={yScale(95) + 46} textAnchor="middle" fill="white" fontSize="8" opacity="0.8">
                → Movement up SRAS until E*
              </text>
            </motion.g>
          </g>
        )}
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

      {/* Analysis Box */}
      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-cyan-500/30">
        <p className="text-sm text-white/80">
          <strong className="text-cyan-400">Chain of Analysis:</strong>{' '}
          {scenario === 'excess-supply' 
            ? 'When the General Price Level exceeds equilibrium (P₁ > P*), the quantity of goods supplied exceeds the quantity demanded, creating excess supply. This manifests as unintended inventory accumulation → signalling to firms that production exceeds sales → firms respond by cutting prices to clear excess stock and reducing output → the economy moves down along the AD curve as lower prices stimulate greater quantity demanded → adjustment continues until equilibrium is restored at E*.'
            : 'When the General Price Level falls below equilibrium (P₁ < P*), the quantity demanded exceeds the quantity supplied, creating excess demand. This manifests as inventory depletion and shortages → signalling to firms that demand exceeds their capacity → firms respond by raising prices (scarcity premium) and expanding output → the economy moves up along the SRAS curve → adjustment continues until equilibrium is restored at E*.'
          }
        </p>
      </div>
    </div>
  );
};

export default EquilibriumAdjustmentDiagram;
