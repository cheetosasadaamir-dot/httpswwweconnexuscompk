import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export const OutputGapsDiagram =  => {
 const [gapType, setGapType] = useState<'recessionary' | 'inflationary'>('recessionary');

 const width = 620;
 const height = 480;
 const margin = { top: 50, right: 60, bottom: 70, left: 80 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 // Colors
 const adColor = "#22D3EE";
 const srasColor = "#F59E0B";
 const lrasColor = "#FFFFFF";
 const gapColorRec = "rgba(239, 68, 68, 0.25)";
 const gapColorInf = "rgba(34, 211, 238, 0.25)";

 // LRAS position (Full Employment)
 const lrasX = 60;
 
 // Equilibrium positions
 const recEqX = 40; // Recessionary: Y < Yfe
 const recEqY = 45;
 const infEqX = 75; // Inflationary: Y > Yfe
 const infEqY = 65;

 return (
 <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
 <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
 Output Gaps: Recessionary vs Inflationary
 </h3>
 <p className="text-center text-white/60 text-sm mb-6">
 The deviation of equilibrium output from full-employment potential
 </p>

 {/* Toggle */}
 <div className="flex justify-center gap-4 mb-6">
 <button
 onClick={ => setGapType('recessionary')}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
 gapType === 'recessionary' 
 ? 'bg-red-500/30 text-red-400 border border-red-500': 'bg-white/5 text-white/60 border border-white/20'
 }`}
 >
 Recessionary Gap (Y {'<'} Y*)
 </button>
 <button
 onClick={ => setGapType('inflationary')}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
 gapType === 'inflationary' 
 ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500': 'bg-white/5 text-white/60 border border-white/20'
 }`}
 >
 Inflationary Gap (Y {'>'} Y*)
 </button>
 </div>

 <div className="flex flex-col lg:flex-row gap-6">
 <div className="lg:w-2/3">
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 <defs>
 <marker id="gapArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="white" />
 </marker>
 </defs>

 {/* Axes */}
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
 stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#gapArrow)" />
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top - 15} 
 stroke="white" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#gapArrow)" />
 
 {/* Axis Labels */}
 <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
 Real National Output (Y)
 </text>
 <text x={25} y={margin.top + chartHeight / 2} textAnchor="middle" fill="white" fontSize="13" fontWeight="600"
 transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}>
 General Price Level (GPL)
 </text>

 {/* LRAS - Vertical line at Full Employment */}
 <line x1={xScale(lrasX)} y1={yScale(95)} x2={xScale(lrasX)} y2={yScale(5)} 
 stroke={lrasColor} strokeWidth="3.5" />
 <text x={xScale(lrasX) + 8} y={yScale(97)} fill={lrasColor} fontSize="14" fontWeight="bold">LRAS</text>
 <text x={xScale(lrasX)} y={yScale(0) + 22} textAnchor="middle" fill={lrasColor} fontSize="12" fontWeight="600">
 Y* (Yfe)
 </text>

 {gapType === 'recessionary' ? (
 <g>
 {/* Recessionary Gap Shading */}
 <motion.rect
 x={xScale(recEqX)}
 y={yScale(recEqY)}
 width={xScale(lrasX) - xScale(recEqX)}
 height={yScale(0) - yScale(recEqY)}
 fill={gapColorRec}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 />

 {/* AD Curve (shifted left for recession) */}
 <motion.path
 d={`M ${xScale(5)} ${yScale(85)} Q ${xScale(25)} ${yScale(60)}, ${xScale(40)} ${yScale(45)} Q ${xScale(55)} ${yScale(32)}, ${xScale(70)} ${yScale(22)}`}
 fill="none" stroke={adColor} strokeWidth="3.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1 }}
 />
 <text x={xScale(72)} y={yScale(20)} fill={adColor} fontSize="14" fontWeight="bold">AD</text>

 {/* SRAS Curve */}
 <motion.path
 d={`M ${xScale(5)} ${yScale(15)} Q ${xScale(25)} ${yScale(30)}, ${xScale(40)} ${yScale(45)} Q ${xScale(55)} ${yScale(65)}, ${xScale(70)} ${yScale(88)}`}
 fill="none" stroke={srasColor} strokeWidth="3.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.3 }}
 />
 <text x={xScale(72)} y={yScale(90)} fill={srasColor} fontSize="14" fontWeight="bold">SRAS</text>

 {/* Equilibrium Point */}
 <motion.circle
 cx={xScale(recEqX)} cy={yScale(recEqY)} r="7"
 fill="white" stroke="#EF4444" strokeWidth="3"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 1.3, type: "spring" }}
 />
 <text x={xScale(recEqX) - 15} y={yScale(recEqY) - 12} fill="white" fontSize="13" fontWeight="bold">E</text>

 {/* Dashed lines */}
 <line x1={xScale(recEqX)} y1={yScale(recEqY)} x2={xScale(recEqX)} y2={yScale(0)} 
 stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6,4" />
 <line x1={xScale(recEqX)} y1={yScale(recEqY)} x2={margin.left} y2={yScale(recEqY)} 
 stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6,4" />
 <text x={xScale(recEqX)} y={yScale(0) + 18} textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">Y</text>
 <text x={margin.left - 15} y={yScale(recEqY) + 4} textAnchor="middle" fill="white" fontSize="11">P</text>

 {/* Gap Arrow */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.5 }}
 >
 <line x1={xScale(recEqX) + 5} y1={yScale(8)} x2={xScale(lrasX) - 5} y2={yScale(8)} 
 stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#gapArrow)" markerStart="url(#gapArrow)" />
 <text x={(xScale(recEqX) + xScale(lrasX)) / 2} y={yScale(15)} textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">
 RECESSIONARY GAP
 </text>
 <text x={(xScale(recEqX) + xScale(lrasX)) / 2} y={yScale(10)} textAnchor="middle" fill="#EF4444" fontSize="10">
 (Y* − Y)
 </text>
 </motion.g>

 {/* Policy suggestion */}
 <motion.rect
 x={xScale(72)} y={yScale(70)} width="110" height="50" rx="6"
 fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" strokeWidth="1"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 />
 <motion.text x={xScale(72) + 55} y={yScale(70) + 18} textAnchor="middle" fill="#22D3EE" fontSize="9" fontWeight="bold"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 >
 Policy Response:
 </motion.text>
 <motion.text x={xScale(72) + 55} y={yScale(70) + 32} textAnchor="middle" fill="white" fontSize="8"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 >
 Expansionary Fiscal/
 </motion.text>
 <motion.text x={xScale(72) + 55} y={yScale(70) + 44} textAnchor="middle" fill="white" fontSize="8"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 >
 Monetary Policy → AD↑
 </motion.text>
 </g>
 ): (
 <g>
 {/* Inflationary Gap Shading */}
 <motion.rect
 x={xScale(lrasX)}
 y={yScale(infEqY)}
 width={xScale(infEqX) - xScale(lrasX)}
 height={yScale(0) - yScale(infEqY)}
 fill={gapColorInf}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 />

 {/* AD Curve (shifted right for inflation) */}
 <motion.path
 d={`M ${xScale(25)} ${yScale(92)} Q ${xScale(50)} ${yScale(75)}, ${xScale(75)} ${yScale(65)} Q ${xScale(88)} ${yScale(55)}, ${xScale(95)} ${yScale(45)}`}
 fill="none" stroke={adColor} strokeWidth="3.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1 }}
 />
 <text x={xScale(97)} y={yScale(43)} fill={adColor} fontSize="14" fontWeight="bold">AD</text>

 {/* SRAS Curve */}
 <motion.path
 d={`M ${xScale(20)} ${yScale(20)} Q ${xScale(45)} ${yScale(40)}, ${xScale(60)} ${yScale(52)} Q ${xScale(75)} ${yScale(65)}, ${xScale(85)} ${yScale(90)}`}
 fill="none" stroke={srasColor} strokeWidth="3.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.3 }}
 />
 <text x={xScale(87)} y={yScale(92)} fill={srasColor} fontSize="14" fontWeight="bold">SRAS</text>

 {/* Equilibrium Point */}
 <motion.circle
 cx={xScale(infEqX)} cy={yScale(infEqY)} r="7"
 fill="white" stroke="#22D3EE" strokeWidth="3"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 1.3, type: "spring" }}
 />
 <text x={xScale(infEqX) + 12} y={yScale(infEqY) - 8} fill="white" fontSize="13" fontWeight="bold">E</text>

 {/* Dashed lines */}
 <line x1={xScale(infEqX)} y1={yScale(infEqY)} x2={xScale(infEqX)} y2={yScale(0)} 
 stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6,4" />
 <line x1={xScale(infEqX)} y1={yScale(infEqY)} x2={margin.left} y2={yScale(infEqY)} 
 stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6,4" />
 <text x={xScale(infEqX)} y={yScale(0) + 18} textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold">Y</text>
 <text x={margin.left - 15} y={yScale(infEqY) + 4} textAnchor="middle" fill="white" fontSize="11">P</text>

 {/* Gap Arrow */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.5 }}
 >
 <line x1={xScale(lrasX) + 5} y1={yScale(8)} x2={xScale(infEqX) - 5} y2={yScale(8)} 
 stroke="#22D3EE" strokeWidth="2.5" markerEnd="url(#gapArrow)" markerStart="url(#gapArrow)" />
 <text x={(xScale(lrasX) + xScale(infEqX)) / 2} y={yScale(15)} textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold">
 INFLATIONARY GAP
 </text>
 <text x={(xScale(lrasX) + xScale(infEqX)) / 2} y={yScale(10)} textAnchor="middle" fill="#22D3EE" fontSize="10">
 (Y − Y*)
 </text>
 </motion.g>

 {/* Policy suggestion */}
 <motion.rect
 x={xScale(5)} y={yScale(45)} width="110" height="50" rx="6"
 fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="1"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 />
 <motion.text x={xScale(5) + 55} y={yScale(45) + 18} textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="bold"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 >
 Policy Response:
 </motion.text>
 <motion.text x={xScale(5) + 55} y={yScale(45) + 32} textAnchor="middle" fill="white" fontSize="8"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 >
 Contractionary Fiscal/
 </motion.text>
 <motion.text x={xScale(5) + 55} y={yScale(45) + 44} textAnchor="middle" fill="white" fontSize="8"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8 }}
 >
 Monetary Policy → AD↓
 </motion.text>
 </g>
 )}
 </svg>
 </div>

 {/* Side Panel */}
 <div className="lg:w-1/3 space-y-4">
 <div className={`p-4 rounded-lg border ${gapType === 'recessionary' ? 'bg-red-500/10 border-red-500/50': 'bg-cyan-500/10 border-cyan-500/50'}`}>
 <h4 className={`font-semibold mb-2 ${gapType === 'recessionary' ? 'text-red-400': 'text-cyan-400'}`}>
 {gapType === 'recessionary' ? 'Recessionary Gap': 'Inflationary Gap'}
 </h4>
 <div className="text-sm text-white/80 space-y-2">
 <p>
 <strong>Definition:</strong>{' '}
 {gapType === 'recessionary' 
 ? <span>When equilibrium output falls short of full-employment output: <InlineMath math="Y < Y_{fe}" /></span>: <span>When equilibrium output exceeds full-employment output: <InlineMath math="Y > Y_{fe}" /></span>
 }
 </p>
 <p>
 <strong>Indicators:</strong>{' '}
 {gapType === 'recessionary' 
 ? 'Cyclical unemployment, spare capacity, deflationary pressure': 'Labour shortages, capacity constraints, inflationary pressure'
 }
 </p>
 </div>
 </div>

 <div className="p-4 rounded-lg bg-white/5 border border-white/10">
 <h4 className="font-semibold text-white mb-2 text-sm">Long-Run Self-Correction</h4>
 <p className="text-xs text-white/70">
 {gapType === 'recessionary' 
 ? 'In the long run, unemployment exerts downward pressure on wages → SRAS shifts right → economy returns to Y* at lower P. However, wage rigidity means this adjustment can be slow and painful.': 'In the long run, excess demand bids up wages → SRAS shifts left → economy returns to Y* at higher P. The inflationary adjustment is typically faster than the deflationary one.'
 }
 </p>
 </div>

 <div className="p-4 rounded-lg bg-slate-800/50 border border-amber-500/30">
 <h4 className="font-semibold text-amber-400 mb-2 text-sm">Policy Implication</h4>
 <p className="text-xs text-white/70">
 {gapType === 'recessionary' 
 ? 'Keynesian economists argue that waiting for self-correction imposes unnecessary welfare costs. Discretionary fiscal/monetary expansion can close the gap faster.': 'If the inflationary gap is left unchecked, it risks embedding inflation expectations into wage negotiations, creating a wage-price spiral.'
 }
 </p>
 </div>
 </div>
 </div>
 </div>
 );
};

export default OutputGapsDiagram;
