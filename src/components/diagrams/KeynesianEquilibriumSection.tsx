import { motion } from 'framer-motion';
import { useState } from 'react';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * [A2 Specialist - Keynesian Income Determination]
 * Enhanced Circular Flow, Output Gaps, and Accelerator Theory
 * Based on A-level Notes
 */

// ============================================
// DIAGRAM 1: Enhanced Circular Flow Model
// ============================================
const CircularFlowEnhancedDiagram =  => {
 const width = 650;
 const height = 480;

 // Colors using semantic tokens
 const cyanColor = 'hsl(185, 100%, 50%)';
 const magentaColor = 'hsl(300, 100%, 60%)';
 const greenColor = 'hsl(142, 76%, 45%)';
 const orangeColor = 'hsl(25, 95%, 55%)';
 const goldColor = 'hsl(45, 93%, 55%)';

 // Positions for sectors
 const households = { x: 120, y: 240 };
 const firms = { x: 530, y: 240 };
 const government = { x: 325, y: 60 };
 const foreign = { x: 325, y: 420 };
 const financial = { x: 325, y: 240 };

 const boxWidth = 100;
 const boxHeight = 45;

 return (
 <div className="glass-card p-6 rounded-xl">
 <h4 className="font-serif text-lg text-silver-bright mb-2 text-center">
 The 4-Sector Circular Flow of Income
 </h4>
 <p className="text-xs text-muted-foreground text-center mb-4">
 <InlineMath math="\text{Equilibrium: } J = W \Rightarrow G + I + X = S + T + M" />
 </p>
 
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 <defs>
 <marker id="arrowCFE" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
 <path d="M0,0 L0,8 L8,4 z" fill={cyanColor} />
 </marker>
 <marker id="arrowCFEMagenta" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
 <path d="M0,0 L0,8 L8,4 z" fill={magentaColor} />
 </marker>
 <marker id="arrowCFEGreen" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
 <path d="M0,0 L0,8 L8,4 z" fill={greenColor} />
 </marker>
 <marker id="arrowCFEOrange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
 <path d="M0,0 L0,8 L8,4 z" fill={orangeColor} />
 </marker>
 <marker id="arrowCFEGold" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
 <path d="M0,0 L0,8 L8,4 z" fill={goldColor} />
 </marker>
 </defs>

 {/* Central Flow Area */}
 <motion.ellipse
 cx={325}
 cy={240}
 rx={180}
 ry={90}
 fill="none"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth={1}
 strokeDasharray="4,4"
 opacity={0.3}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1 }}
 />

 {/* HOUSEHOLDS Box */}
 <motion.rect
 x={households.x - boxWidth/2}
 y={households.y - boxHeight/2}
 width={boxWidth}
 height={boxHeight}
 rx={8}
 fill="hsl(222, 47%, 8%)"
 stroke={cyanColor}
 strokeWidth={2}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5 }}
 />
 <text x={households.x} y={households.y + 4} fill={cyanColor} fontSize="12" fontWeight="600" textAnchor="middle">Households</text>
 <text x={households.x} y={households.y + 16} fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle">(Suppliers of Factors)</text>

 {/* FIRMS Box */}
 <motion.rect
 x={firms.x - boxWidth/2}
 y={firms.y - boxHeight/2}
 width={boxWidth}
 height={boxHeight}
 rx={8}
 fill="hsl(222, 47%, 8%)"
 stroke={magentaColor}
 strokeWidth={2}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.1 }}
 />
 <text x={firms.x} y={firms.y + 4} fill={magentaColor} fontSize="12" fontWeight="600" textAnchor="middle">Firms</text>
 <text x={firms.x} y={firms.y + 16} fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle">(Suppliers of Goods)</text>

 {/* GOVERNMENT Box */}
 <motion.rect
 x={government.x - boxWidth/2}
 y={government.y - boxHeight/2}
 width={boxWidth}
 height={boxHeight}
 rx={8}
 fill="hsl(222, 47%, 8%)"
 stroke={greenColor}
 strokeWidth={2}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 />
 <text x={government.x} y={government.y + 5} fill={greenColor} fontSize="12" fontWeight="600" textAnchor="middle">Government</text>

 {/* FOREIGN SECTOR Box */}
 <motion.rect
 x={foreign.x - boxWidth/2}
 y={foreign.y - boxHeight/2}
 width={boxWidth}
 height={boxHeight}
 rx={8}
 fill="hsl(222, 47%, 8%)"
 stroke={orangeColor}
 strokeWidth={2}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.3 }}
 />
 <text x={foreign.x} y={foreign.y + 5} fill={orangeColor} fontSize="12" fontWeight="600" textAnchor="middle">Foreign Sector</text>

 {/* FINANCIAL SECTOR (Central) */}
 <motion.ellipse
 cx={financial.x}
 cy={financial.y}
 rx={45}
 ry={30}
 fill="hsl(222, 47%, 8%)"
 stroke={goldColor}
 strokeWidth={2}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.4 }}
 />
 <text x={financial.x} y={financial.y - 3} fill={goldColor} fontSize="10" fontWeight="600" textAnchor="middle">Financial</text>
 <text x={financial.x} y={financial.y + 10} fill={goldColor} fontSize="10" fontWeight="600" textAnchor="middle">Sector</text>

 {/* === MAIN CIRCULAR FLOW === */}
 {/* Households → Firms (Top: Consumption Spending) */}
 <motion.path
 d={`M ${households.x + boxWidth/2} ${households.y - 25} Q 325 140 ${firms.x - boxWidth/2} ${firms.y - 25}`}
 fill="none"
 stroke={cyanColor}
 strokeWidth={2.5}
 markerEnd="url(#arrowCFE)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.5 }}
 />
 <text x={325} y={148} fill={cyanColor} fontSize="11" fontWeight="600" textAnchor="middle">C (Consumption)</text>

 {/* Firms → Households (Bottom: Factor Incomes) */}
 <motion.path
 d={`M ${firms.x - boxWidth/2} ${firms.y + 25} Q 325 340 ${households.x + boxWidth/2} ${households.y + 25}`}
 fill="none"
 stroke={magentaColor}
 strokeWidth={2.5}
 markerEnd="url(#arrowCFEMagenta)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.7 }}
 />
 <text x={325} y={338} fill={magentaColor} fontSize="11" fontWeight="600" textAnchor="middle">Y (Factor Incomes)</text>

 {/* === INJECTIONS (Solid Lines) === */}
 {/* Government Spending G → Firms */}
 <motion.path
 d={`M ${government.x + 35} ${government.y + boxHeight/2} L ${firms.x - 20} ${firms.y - boxHeight/2 - 15}`}
 fill="none"
 stroke={greenColor}
 strokeWidth={2}
 markerEnd="url(#arrowCFEGreen)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6, delay: 0.9 }}
 />
 <text x={460} y={115} fill={greenColor} fontSize="10" fontWeight="600" textAnchor="middle">G (Injection)</text>

 {/* Exports X → Firms */}
 <motion.path
 d={`M ${foreign.x + 35} ${foreign.y - boxHeight/2} L ${firms.x - 20} ${firms.y + boxHeight/2 + 15}`}
 fill="none"
 stroke={orangeColor}
 strokeWidth={2}
 markerEnd="url(#arrowCFEOrange)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6, delay: 1.1 }}
 />
 <text x={460} y={370} fill={orangeColor} fontSize="10" fontWeight="600" textAnchor="middle">X (Injection)</text>

 {/* Investment I → Firms */}
 <motion.line
 x1={financial.x + 45}
 y1={financial.y}
 x2={firms.x - boxWidth/2 - 5}
 y2={firms.y}
 stroke={goldColor}
 strokeWidth={2}
 markerEnd="url(#arrowCFEGold)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6, delay: 1.3 }}
 />
 <text x={445} y={232} fill={goldColor} fontSize="10" fontWeight="600" textAnchor="middle">I (Injection)</text>

 {/* === WITHDRAWALS (Dashed Lines) === */}
 {/* Taxes T → Government */}
 <motion.path
 d={`M ${households.x + 20} ${households.y - boxHeight/2 - 15} L ${government.x - 35} ${government.y + boxHeight/2}`}
 fill="none"
 stroke={greenColor}
 strokeWidth={2}
 strokeDasharray="6,4"
 markerEnd="url(#arrowCFEGreen)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6, delay: 1.0 }}
 />
 <text x={190} y={115} fill={greenColor} fontSize="10" fontWeight="600" textAnchor="middle">T (Leakage)</text>

 {/* Imports M → Foreign */}
 <motion.path
 d={`M ${households.x + 20} ${households.y + boxHeight/2 + 15} L ${foreign.x - 35} ${foreign.y - boxHeight/2}`}
 fill="none"
 stroke={orangeColor}
 strokeWidth={2}
 strokeDasharray="6,4"
 markerEnd="url(#arrowCFEOrange)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6, delay: 1.2 }}
 />
 <text x={190} y={370} fill={orangeColor} fontSize="10" fontWeight="600" textAnchor="middle">M (Leakage)</text>

 {/* Savings S → Financial Sector */}
 <motion.line
 x1={households.x + boxWidth/2 + 5}
 y1={households.y}
 x2={financial.x - 45}
 y2={financial.y}
 stroke={goldColor}
 strokeWidth={2}
 strokeDasharray="6,4"
 markerEnd="url(#arrowCFEGold)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6, delay: 1.4 }}
 />
 <text x={205} y={232} fill={goldColor} fontSize="10" fontWeight="600" textAnchor="middle">S (Leakage)</text>

 {/* Legend */}
 <motion.rect
 x={15}
 y={height - 75}
 width={170}
 height={65}
 rx={6}
 fill="hsl(222, 47%, 6%)"
 stroke="hsl(220, 14%, 30%)"
 strokeWidth={1}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.6 }}
 />
 <text x={25} y={height - 55} fill="hsl(220, 14%, 75%)" fontSize="10" fontWeight="600">Key:</text>
 <line x1={25} y1={height - 40} x2={50} y2={height - 40} stroke="hsl(220, 14%, 75%)" strokeWidth={2} />
 <text x={55} y={height - 36} fill="hsl(220, 14%, 60%)" fontSize="9">Injections (I, G, X)</text>
 <line x1={25} y1={height - 23} x2={50} y2={height - 23} stroke="hsl(220, 14%, 75%)" strokeWidth={2} strokeDasharray="4,3" />
 <text x={55} y={height - 19} fill="hsl(220, 14%, 60%)" fontSize="9">Withdrawals (S, T, M)</text>

 {/* Equilibrium equation */}
 <motion.rect
 x={width - 185}
 y={height - 75}
 width={170}
 height={65}
 rx={6}
 fill="hsl(222, 47%, 6%)"
 stroke="hsl(var(--primary))"
 strokeWidth={1}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.7 }}
 />
 <text x={width - 100} y={height - 52} fill="hsl(var(--primary))" fontSize="10" fontWeight="600" textAnchor="middle">Equilibrium Condition</text>
 <text x={width - 100} y={height - 32} fill="hsl(var(--silver-bright))" fontSize="12" fontWeight="700" textAnchor="middle">J = W</text>
 <text x={width - 100} y={height - 16} fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle">I + G + X = S + T + M</text>
 </svg>
 </div>
 );
};

// ============================================
// DIAGRAM 2: Keynesian Cross with Output Gaps
// ============================================
const KeynesianCrossGapDiagram =  => {
 const [scenario, setScenario] = useState<'deflationary' | 'inflationary'>('deflationary');
 
 const width = 500;
 const height = 380;
 const margin = { top: 40, right: 50, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Key points
 const Yf = 0.75; // Full employment (75% of chart)
 const Ye_def = 0.5; // Equilibrium for deflationary gap (50%)
 const Ye_inf = 0.95; // Equilibrium for inflationary gap (95%)
 
 const x = (val: number) => margin.left + val * chartWidth;
 const y = (val: number) => height - margin.bottom - val * chartHeight;

 const currentYe = scenario === 'deflationary' ? Ye_def: Ye_inf;
 const gapDirection = scenario === 'deflationary' ? 'below': 'above';

 return (
 <div className="glass-card p-6 rounded-xl">
 <div className="flex items-center justify-between mb-4">
 <div>
 <h4 className="font-serif text-lg text-silver-bright">
 Keynesian Cross: Output Gaps
 </h4>
 <p className="text-xs text-muted-foreground">
 Equilibrium vs Full Employment Income (<InlineMath math="Y^* \text{ vs } Y_f" />)
 </p>
 </div>
 <div className="flex gap-2">
 <button
 onClick={ => setScenario('deflationary')}
 className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
 scenario === 'deflationary'
 ? 'bg-cambridge-magenta/30 text-cambridge-magenta border border-cambridge-magenta/50': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 Deflationary Gap
 </button>
 <button
 onClick={ => setScenario('inflationary')}
 className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
 scenario === 'inflationary'
 ? 'bg-cambridge-orange/30 text-cambridge-orange border border-cambridge-orange/50': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 Inflationary Gap
 </button>
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 <defs>
 <marker id="arrowGap" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
 <path d="M0,0 L0,8 L8,4 z" fill="hsl(var(--primary))" />
 </marker>
 </defs>

 {/* Axes */}
 <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="hsl(var(--silver))" strokeWidth={2} />
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} stroke="hsl(var(--silver))" strokeWidth={2} />

 {/* Axis Labels */}
 <text x={(margin.left + width - margin.right) / 2} y={height - 8} fill="hsl(var(--silver-bright))" fontSize="12" fontWeight="600" textAnchor="middle">Real National Income (Y)</text>
 <text x={18} y={height / 2} fill="hsl(var(--silver-bright))" fontSize="12" fontWeight="600" textAnchor="middle" transform={`rotate(-90, 18, ${height / 2})`}>Aggregate Expenditure (AE)</text>

 {/* 45-degree line */}
 <motion.line
 x1={margin.left}
 y1={height - margin.bottom}
 x2={x(1)}
 y2={y(1)}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth={2}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8 }}
 />
 <text x={x(0.92)} y={y(0.96)} fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="600">AE = Y</text>
 <text x={x(0.92)} y={y(0.92)} fill="hsl(var(--muted-foreground))" fontSize="9">(45° line)</text>

 {/* Full Employment Line Yf */}
 <motion.line
 x1={x(Yf)}
 y1={margin.top + 20}
 x2={x(Yf)}
 y2={height - margin.bottom}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={2}
 strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.3 }}
 />
 <text x={x(Yf)} y={margin.top + 15} fill="hsl(var(--cambridge-green))" fontSize="11" fontWeight="600" textAnchor="middle">Yf</text>

 {/* AE Line */}
 <motion.line
 x1={margin.left}
 y1={y(0.2)}
 x2={x(1)}
 y2={y(0.2 + 0.7)}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={2.5}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.4 }}
 />
 <text x={x(0.95)} y={y(0.2 + 0.7 * 0.95) - 10} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">AE</text>

 {/* Equilibrium point */}
 <motion.circle
 cx={x(currentYe)}
 cy={y(currentYe)}
 r={6}
 fill={scenario === 'deflationary' ? 'hsl(var(--cambridge-magenta))': 'hsl(var(--cambridge-orange))'}
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.8 }}
 />

 {/* Ye line down to axis */}
 <motion.line
 x1={x(currentYe)}
 y1={y(currentYe)}
 x2={x(currentYe)}
 y2={height - margin.bottom}
 stroke={scenario === 'deflationary' ? 'hsl(var(--cambridge-magenta))': 'hsl(var(--cambridge-orange))'}
 strokeWidth={1.5}
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 0.9 }}
 />
 <text 
 x={x(currentYe)} 
 y={height - margin.bottom + 18} 
 fill={scenario === 'deflationary' ? 'hsl(var(--cambridge-magenta))': 'hsl(var(--cambridge-orange))'} 
 fontSize="11" 
 fontWeight="600" 
 textAnchor="middle"
 >
 Y*
 </text>

 {/* Gap Arrow and Shading */}
 {scenario === 'deflationary' ? (
 <>
 {/* Deflationary Gap Shading */}
 <motion.rect
 x={x(Ye_def)}
 y={y(Yf)}
 width={x(Yf) - x(Ye_def)}
 height={y(Ye_def) - y(Yf)}
 fill="hsl(var(--cambridge-magenta))"
 fillOpacity={0.15}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 1 }}
 />
 {/* Gap Label */}
 <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
 <line x1={x(Ye_def) + 15} y1={y(Ye_def) - 15} x2={x(Yf) - 15} y2={y(Yf) + 15} stroke="hsl(var(--cambridge-magenta))" strokeWidth={2} markerEnd="url(#arrowGap)" />
 <text x={x((Ye_def + Yf) / 2)} y={y((Ye_def + Yf) / 2) - 20} fill="hsl(var(--cambridge-magenta))" fontSize="10" fontWeight="600" textAnchor="middle">Deflationary</text>
 <text x={x((Ye_def + Yf) / 2)} y={y((Ye_def + Yf) / 2) - 8} fill="hsl(var(--cambridge-magenta))" fontSize="10" fontWeight="600" textAnchor="middle">Gap</text>
 </motion.g>
 </>
 ): (
 <>
 {/* Inflationary Gap Shading */}
 <motion.rect
 x={x(Yf)}
 y={y(Ye_inf)}
 width={x(Ye_inf) - x(Yf)}
 height={y(Yf) - y(Ye_inf)}
 fill="hsl(var(--cambridge-orange))"
 fillOpacity={0.15}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 1 }}
 />
 {/* Gap Label */}
 <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
 <line x1={x(Yf) + 15} y1={y(Yf) + 15} x2={x(Ye_inf) - 15} y2={y(Ye_inf) - 15} stroke="hsl(var(--cambridge-orange))" strokeWidth={2} markerEnd="url(#arrowGap)" />
 <text x={x((Yf + Ye_inf) / 2)} y={y((Yf + Ye_inf) / 2) + 30} fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="600" textAnchor="middle">Inflationary</text>
 <text x={x((Yf + Ye_inf) / 2)} y={y((Yf + Ye_inf) / 2) + 42} fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="600" textAnchor="middle">Gap</text>
 </motion.g>
 </>
 )}

 {/* Explanation Box */}
 <motion.rect
 x={width - 180}
 y={20}
 width={160}
 height={70}
 rx={6}
 fill="hsl(222, 47%, 6%)"
 stroke={scenario === 'deflationary' ? 'hsl(var(--cambridge-magenta))': 'hsl(var(--cambridge-orange))'}
 strokeWidth={1}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.2 }}
 />
 <text x={width - 100} y={38} fill={scenario === 'deflationary' ? 'hsl(var(--cambridge-magenta))': 'hsl(var(--cambridge-orange))'} fontSize="10" fontWeight="600" textAnchor="middle">
 {scenario === 'deflationary' ? 'Demand Deficiency': 'Excess Demand'}
 </text>
 <text x={width - 100} y={55} fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle">
 Y* {gapDirection} Yf
 </text>
 <text x={width - 100} y={70} fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle">
 {scenario === 'deflationary' ? '↓ Output, ↓ Employment': '↑ Price Level (Inflation)'}
 </text>
 <text x={width - 100} y={82} fill="hsl(var(--muted-foreground))" fontSize="8" textAnchor="middle">
 {scenario === 'deflationary' ? 'Policy: ↑G or ↓T': 'Policy: ↓G or ↑T'}
 </text>
 </svg>
 </div>
 );
};

// ============================================
// DIAGRAM 3: Accelerator Effect Visualization
// ============================================
const AcceleratorEnhancedDiagram =  => {
 const [step, setStep] = useState(0);
 const maxSteps = 5;

 const data = [
 { year: 1, output: 100, changeY: 0, investment: 0, type: 'Constant output' },
 { year: 2, output: 110, changeY: 10, investment: 30, type: 'Rising output (α=3)' },
 { year: 3, output: 125, changeY: 15, investment: 45, type: 'Rising output (faster)' },
 { year: 4, output: 135, changeY: 10, investment: 30, type: 'Rising output (slower)' },
 { year: 5, output: 135, changeY: 0, investment: 0, type: 'Constant output' },
 { year: 6, output: 125, changeY: -10, investment: -30, type: 'Falling output' },
 ];

 const width = 500;
 const height = 280;
 const margin = { top: 30, right: 50, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const maxY = 150;
 const minI = -40;
 const maxI = 50;

 const x = (idx: number) => margin.left + (idx / (data.length - 1)) * chartWidth;
 const yOutput = (val: number) => margin.top + ((maxY - val) / maxY) * chartHeight;
 const yInv = (val: number) => margin.top + ((maxI - val) / (maxI - minI)) * chartHeight;

 return (
 <div className="glass-card p-6 rounded-xl">
 <div className="flex items-center justify-between mb-4">
 <div>
 <h4 className="font-serif text-lg text-silver-bright">The Accelerator Effect</h4>
 <p className="text-xs text-muted-foreground">
 <InlineMath math="I = \alpha \cdot \Delta Y" /> where <InlineMath math="\alpha = 3" /> (capital-output ratio)
 </p>
 </div>
 <div className="flex gap-2">
 <button
 onClick={ => setStep(Math.max(0, step - 1))}
 disabled={step === 0}
 className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted disabled:opacity-50 transition-colors"
 >
 ← Back
 </button>
 <button
 onClick={ => setStep(Math.min(maxSteps, step + 1))}
 disabled={step === maxSteps}
 className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cambridge-cyan/20 text-cambridge-cyan hover:bg-cambridge-cyan/30 disabled:opacity-50 transition-colors"
 >
 Next Period →
 </button>
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 {/* Grid */}
 {data.map((_, i) => (
 <line key={i} x1={x(i)} y1={margin.top} x2={x(i)} y2={height - margin.bottom} stroke="hsl(var(--muted-foreground))" strokeOpacity={0.1} />
 ))}

 {/* Zero line for investment */}
 <line x1={margin.left} y1={yInv(0)} x2={width - margin.right} y2={yInv(0)} stroke="hsl(var(--muted-foreground))" strokeWidth={1} strokeDasharray="4,4" />

 {/* Axes */}
 <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="hsl(var(--silver))" strokeWidth={2} />
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} stroke="hsl(var(--silver))" strokeWidth={2} />

 {/* Axis Labels */}
 <text x={(margin.left + width - margin.right) / 2} y={height - 8} fill="hsl(var(--silver-bright))" fontSize="11" textAnchor="middle">Time Period (Years)</text>
 <text x={15} y={(margin.top + height - margin.bottom) / 2} fill="hsl(var(--cambridge-cyan))" fontSize="10" textAnchor="middle" transform={`rotate(-90, 15, ${(margin.top + height - margin.bottom) / 2})`}>Output (Y)</text>
 <text x={width - 15} y={(margin.top + height - margin.bottom) / 2} fill="hsl(var(--cambridge-orange))" fontSize="10" textAnchor="middle" transform={`rotate(90, ${width - 15}, ${(margin.top + height - margin.bottom) / 2})`}>Investment (I)</text>

 {/* Output Line (Blue) */}
 {data.slice(0, step + 2).map((d, i) => {
 if (i === 0) return null;
 const prev = data[i - 1];
 return (
 <motion.line
 key={`output-${i}`}
 x1={x(i - 1)}
 y1={yOutput(prev.output)}
 x2={x(i)}
 y2={yOutput(d.output)}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={2.5}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.4 }}
 />
 );
 })}

 {/* Investment Bars (Orange) */}
 {data.slice(0, step + 2).map((d, i) => (
 <motion.rect
 key={`inv-${i}`}
 x={x(i) - 15}
 y={d.investment >= 0 ? yInv(d.investment): yInv(0)}
 width={30}
 height={Math.abs(yInv(d.investment) - yInv(0))}
 fill={d.investment >= 0 ? 'hsl(var(--cambridge-orange))': 'hsl(var(--destructive))'}
 fillOpacity={0.6}
 rx={3}
 initial={{ scaleY: 0 }}
 animate={{ scaleY: 1 }}
 transition={{ duration: 0.3, delay: i * 0.1 }}
 style={{ transformOrigin: d.investment >= 0 ? 'bottom': 'top' }}
 />
 ))}

 {/* Output Points */}
 {data.slice(0, step + 2).map((d, i) => (
 <motion.circle
 key={`point-${i}`}
 cx={x(i)}
 cy={yOutput(d.output)}
 r={5}
 fill="hsl(var(--cambridge-cyan))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.2, delay: i * 0.1 }}
 />
 ))}

 {/* Labels */}
 {data.slice(0, step + 2).map((d, i) => (
 <g key={`label-${i}`}>
 <text x={x(i)} y={height - margin.bottom + 18} fill="hsl(var(--muted-foreground))" fontSize="9" textAnchor="middle">Y{d.year}</text>
 <motion.text 
 x={x(i)} 
 y={yOutput(d.output) - 12} 
 fill="hsl(var(--cambridge-cyan))" 
 fontSize="9" 
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.3 }}
 >
 {d.output}
 </motion.text>
 {d.investment !== 0 && (
 <motion.text 
 x={x(i)} 
 y={d.investment > 0 ? yInv(d.investment) - 8: yInv(d.investment) + 15} 
 fill={d.investment > 0 ? 'hsl(var(--cambridge-orange))': 'hsl(var(--destructive))'} 
 fontSize="9" 
 fontWeight="600"
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.4 }}
 >
 I={d.investment}
 </motion.text>
 )}
 </g>
 ))}
 </svg>

 {/* Info Panel */}
 <div className="mt-4 grid grid-cols-2 gap-4">
 <div className="p-3 bg-muted/30 rounded-lg">
 <p className="text-xs font-medium text-silver-bright mb-2">Period {step + 1} Analysis:</p>
 <div className="space-y-1 text-xs text-muted-foreground font-mono">
 <p>Output: Y = {data[Math.min(step, data.length - 1)].output}</p>
 <p>ΔY = {data[Math.min(step, data.length - 1)].changeY}</p>
 <p>I = α × ΔY = 3 × {data[Math.min(step, data.length - 1)].changeY} = {data[Math.min(step, data.length - 1)].investment}</p>
 </div>
 </div>
 <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
 <p className="text-xs font-medium text-silver-bright mb-2">Key Insight:</p>
 <p className="text-xs text-muted-foreground">
 {data[Math.min(step, data.length - 1)].type}
 {data[Math.min(step, data.length - 1)].changeY === 0 && 
 " — Investment falls to zero when output stops growing!"}
 {data[Math.min(step, data.length - 1)].changeY < 0 && 
 " — Negative investment (disinvestment) when output falls."}
 </p>
 </div>
 </div>
 </div>
 );
};

// ============================================
// MAIN SECTION COMPONENT
// ============================================
const KeynesianEquilibriumSection =  => {
 return (
 <div className="space-y-8">
 {/* Section Introduction */}
 <div className="p-4 bg-gradient-to-r from-cambridge-cyan/10 to-cambridge-magenta/10 rounded-lg border border-primary/20">
 <p className="text-sm text-muted-foreground leading-relaxed text-justify">
 This section expands on the <strong className="text-silver-bright">mechanics of Keynesian income determination</strong>, 
 focusing on the <strong className="text-cambridge-cyan">Circular Flow</strong> equilibrium condition where 
 total injections equal total withdrawals (<InlineMath math="J = W" />), the analysis of 
 <strong className="text-cambridge-magenta"> output gaps</strong> in the Keynesian Cross framework, 
 and the <strong className="text-cambridge-orange">Accelerator Theory</strong> of induced investment. 
 These concepts are essential for understanding how national income adjusts to changes in aggregate demand.
 </p>
 </div>

 {/* Part 1: Circular Flow */}
 <div>
 <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright flex items-center gap-3">
 <span className="px-2 py-0.5 bg-cambridge-cyan/20 text-cambridge-cyan rounded text-sm">1</span>
 The Circular Flow of Income: Injections & Withdrawals
 </h3>

 <NoteCard title="The Interaction of Households and Firms" type="definition">
 <p>
 <strong>Households</strong> supply firms with the <em>factors of production</em> (land, labour, capital, enterprise), 
 and in return receive <strong>factor incomes</strong> (rent, wages, interest, profit). 
 <strong> Firms</strong> supply goods and services to households, who pay for them through <strong>consumption spending</strong>. 
 This circular exchange forms the <strong>circular flow of income</strong>.
 </p>
 <div className="mt-3 p-3 bg-muted/30 rounded-lg">
 <p className="text-center font-mono font-semibold">
 <InlineMath math="\text{Income} = \text{Output} = \text{Expenditure}" />
 </p>
 </div>
 </NoteCard>

 <div className="my-6">
 <CircularFlowEnhancedDiagram />
 </div>

 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <NoteCard title="Injections (J)" type="concept">
 <p className="font-mono text-cambridge-cyan mb-2">
 <InlineMath math="J = I + G + X" />
 </p>
 <p className="text-sm mb-3">
 <strong>Injections</strong> are additions to the circular flow—money entering the economy from sources 
 other than domestic household consumption.
 </p>
 <ul className="space-y-2 text-sm">
 <li><strong className="text-cambridge-cyan">Investment (I):</strong> Firms spending on capital goods</li>
 <li><strong className="text-cambridge-green">Government Spending (G):</strong> Expenditure on public goods, merit goods, welfare</li>
 <li><strong className="text-cambridge-orange">Exports (X):</strong> Spending by foreigners on domestic output</li>
 </ul>
 </NoteCard>

 <NoteCard title="Withdrawals (W)" type="concept">
 <p className="font-mono text-cambridge-magenta mb-2">
 <InlineMath math="W = S + T + M" />
 </p>
 <p className="text-sm mb-3">
 <strong>Withdrawals</strong> (leakages) are income earned but not spent on domestic goods and services—
 money leaving the circular flow.
 </p>
 <ul className="space-y-2 text-sm">
 <li><strong className="text-gold-accent">Saving (S):</strong> Income not consumed, held by financial sector</li>
 <li><strong className="text-cambridge-green">Taxation (T):</strong> Income paid to government (direct/indirect)</li>
 <li><strong className="text-cambridge-orange">Imports (M):</strong> Spending on foreign goods and services</li>
 </ul>
 </NoteCard>
 </div>

 <NoteCard title="The Equilibrium Condition" type="formula">
 <div className="text-center p-4 bg-primary/10 rounded-lg mb-4">
 <p className="text-xs text-muted-foreground mb-2">National Income Equilibrium</p>
 <BlockMath math="J = W \Rightarrow I + G + X = S + T + M" />
 </div>
 <div className="grid md:grid-cols-2 gap-4 text-sm">
 <div className="p-3 bg-cambridge-green/10 rounded-lg border-l-3 border-cambridge-green">
 <p className="font-semibold text-cambridge-green mb-1">If J &gt; W (Net Injections)</p>
 <p className="text-muted-foreground">
 More money entering than leaving → <strong>expansion</strong> of national output → 
 Y rises until J = W again.
 </p>
 </div>
 <div className="p-3 bg-cambridge-magenta/10 rounded-lg border-l-3 border-cambridge-magenta">
 <p className="font-semibold text-cambridge-magenta mb-1">If J &lt; W (Net Withdrawals)</p>
 <p className="text-muted-foreground">
 More money leaving than entering → <strong>contraction</strong> of national output → 
 Y falls until J = W again.
 </p>
 </div>
 </div>
 </NoteCard>
 </div>

 {/* Part 2: Output Gaps */}
 <div>
 <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright flex items-center gap-3">
 <span className="px-2 py-0.5 bg-cambridge-magenta/20 text-cambridge-magenta rounded text-sm">2</span>
 Inflationary and Deflationary Gaps
 </h3>

 <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
 In the Keynesian Cross framework, equilibrium national income (<InlineMath math="Y^*" />) is where 
 planned Aggregate Expenditure equals actual output (<InlineMath math="AE = Y" />). However, this equilibrium 
 may occur <strong className="text-cambridge-magenta">below</strong> or <strong className="text-cambridge-orange">above</strong> the 
 full employment level of income (<InlineMath math="Y_f" />), creating output gaps with distinct macroeconomic consequences.
 </p>

 <div className="my-6">
 <KeynesianCrossGapDiagram />
 </div>

 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <NoteCard title="Deflationary (Recessionary) Gap" type="concept">
 <div className="text-center py-2 mb-3 bg-cambridge-magenta/10 rounded">
 <InlineMath math="Y^* < Y_f \Rightarrow \text{AD Deficiency}" />
 </div>
 <p className="text-sm mb-3">
 A <strong>deflationary gap</strong> occurs when equilibrium income falls <em>below</em> full employment. 
 Aggregate Demand is <strong>insufficient</strong> to utilize all available resources.
 </p>
 <ul className="space-y-1 text-xs text-muted-foreground">
 <li>• <strong>Unemployment:</strong> Involuntary unemployment persists</li>
 <li>• <strong>Spare capacity:</strong> Factors of production are underutilized</li>
 <li>• <strong>Downward pressure:</strong> Prices may fall (deflation risk)</li>
 <li>• <strong>Policy response:</strong> Expansionary fiscal/monetary policy</li>
 </ul>
 </NoteCard>

 <NoteCard title="Inflationary Gap" type="concept">
 <div className="text-center py-2 mb-3 bg-cambridge-orange/10 rounded">
 <InlineMath math="Y^* > Y_f \Rightarrow \text{Excess Demand}" />
 </div>
 <p className="text-sm mb-3">
 An <strong>inflationary gap</strong> occurs when equilibrium income is <em>above</em> full employment. 
 Aggregate Demand <strong>exceeds</strong> the economy's productive capacity.
 </p>
 <ul className="space-y-1 text-xs text-muted-foreground">
 <li>• <strong>Demand-pull inflation:</strong> Prices rise as demand outstrips supply</li>
 <li>• <strong>Bottlenecks:</strong> Shortages in factor markets</li>
 <li>• <strong>Overheating:</strong> Economy operating beyond sustainable capacity</li>
 <li>• <strong>Policy response:</strong> Contractionary fiscal/monetary policy</li>
 </ul>
 </NoteCard>
 </div>

 <AnalysisBlock title="Chain of Analysis: Gap Adjustment Mechanism" type="analysis">
 <div className="space-y-3 text-xs">
 <div className="p-3 bg-cambridge-magenta/10 rounded-lg border-l-3 border-cambridge-magenta">
 <p className="font-semibold text-cambridge-magenta mb-1">Closing a Deflationary Gap:</p>
 <div className="font-mono text-center py-1">
 ↑G or ↓T → ↑Disposable Income → ↑C → ↑AD → ↑Y toward <InlineMath math="Y_f" />
 </div>
 <p className="text-muted-foreground mt-2">
 The required increase in autonomous expenditure is <strong>smaller</strong> than the gap itself 
 due to the multiplier effect. If the gap is $ΔY = Y_f - Y^*$ and the multiplier is <InlineMath math="k" />, 
 the required injection is only <InlineMath math="\Delta A = \frac{\Delta Y}{k}" />.
 </p>
 </div>
 <div className="p-3 bg-cambridge-orange/10 rounded-lg border-l-3 border-cambridge-orange">
 <p className="font-semibold text-cambridge-orange mb-1">Closing an Inflationary Gap:</p>
 <div className="font-mono text-center py-1">
 ↓G or ↑T → ↓Disposable Income → ↓C → ↓AD → ↓Y toward <InlineMath math="Y_f" />
 </div>
 <p className="text-muted-foreground mt-2">
 Contractionary policy reduces aggregate demand to sustainable levels, relieving pressure 
 on the price level and preventing inflation from becoming embedded in expectations.
 </p>
 </div>
 </div>
 </AnalysisBlock>
 </div>

 {/* Part 3: The Accelerator */}
 <div>
 <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright flex items-center gap-3">
 <span className="px-2 py-0.5 bg-cambridge-orange/20 text-cambridge-orange rounded text-sm">3</span>
 The Accelerator Effect: Autonomous vs. Induced Investment
 </h3>

 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <NoteCard title="Autonomous Investment" type="definition">
 <p>
 <strong>Autonomous investment</strong> is investment that does <em>not</em> depend on the level of 
 national income, output, or even interest rates (in a simplistic model). It is determined by:
 </p>
 <ul className="mt-2 space-y-1 text-sm">
 <li>• <strong>Business confidence</strong> ("animal spirits")</li>
 <li>• <strong>Technological breakthroughs</strong></li>
 <li>• <strong>Government policy</strong> (tax incentives)</li>
 <li>• <strong>Long-term expectations</strong></li>
 </ul>
 <div className="mt-3 p-2 bg-muted/30 rounded text-center font-mono text-sm">
 <InlineMath math="I_{autonomous} = \bar{I}" /> (constant)
 </div>
 </NoteCard>

 <NoteCard title="Induced Investment" type="definition">
 <p>
 <strong>Induced investment</strong> is investment that varies with changes in national income 
 or output. It is explained by the <strong>Accelerator Theory</strong>:
 </p>
 <ul className="mt-2 space-y-1 text-sm">
 <li>• Investment responds to the <em>rate of change</em> in demand</li>
 <li>• When demand grows, firms invest to expand capacity</li>
 <li>• When demand growth slows, investment collapses</li>
 </ul>
 <div className="mt-3 p-2 bg-cambridge-orange/10 rounded text-center font-mono text-sm">
 <InlineMath math="I_{induced} = \alpha \cdot \Delta Y" />
 </div>
 </NoteCard>
 </div>

 <NoteCard title="The Accelerator Principle" type="theory">
 <p className="mb-3">
 The <strong>accelerator effect</strong> states that a change in national income or demand leads to 
 a <strong>proportionately larger change</strong> in capital investment. The relationship is governed 
 by the <strong>capital-output ratio</strong> (<InlineMath math="\alpha" />):
 </p>
 <div className="text-center p-4 bg-primary/10 rounded-lg mb-4">
 <BlockMath math="I = \alpha \cdot \Delta Y" />
 <p className="text-xs text-muted-foreground mt-2">
 where <InlineMath math="\alpha" /> = capital-output ratio (e.g., if α = 3, $1m increase in output requires $3m new capital)
 </p>
 </div>
 <div className="p-3 bg-cambridge-orange/10 rounded-lg">
 <p className="text-sm font-semibold text-cambridge-orange mb-2">Critical Insight:</p>
 <p className="text-sm text-muted-foreground">
 Investment depends on the <strong>change</strong> in output, not its <em>level</em>. 
 Even if output remains high, investment falls to zero when output <em>stops growing</em>. 
 This amplifies the business cycle—accelerating both booms and recessions.
 </p>
 </div>
 </NoteCard>

 <div className="my-6">
 <AcceleratorEnhancedDiagram />
 </div>

 <ExamTipBox title="Senior Examiner's Conclusion: Accelerator & Multiplier Interaction" variant="gold">
 <p className="text-xs leading-relaxed text-justify">
 <strong>In conclusion</strong>, the accelerator and multiplier effects work together to amplify economic fluctuations. 
 An initial rise in autonomous demand triggers the <strong>multiplier</strong>, expanding national income. 
 This income growth then induces additional investment via the <strong>accelerator</strong>, which becomes a new injection, 
 re-triggering the multiplier. This <strong>multiplier-accelerator interaction</strong> explains why relatively small 
 shocks to autonomous demand can produce <em>large, persistent</em> swings in output and employment—the 
 theoretical foundation for understanding business cycle volatility. Conversely, when demand growth slows, 
 the accelerator generates <strong>disproportionate collapses</strong> in investment, contributing to recessionary dynamics.
 </p>
 </ExamTipBox>
 </div>
 </div>
 );
};

export default KeynesianEquilibriumSection;
