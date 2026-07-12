import { motion } from 'framer-motion';
import { useState } from 'react';

interface KeynesianCrossDiagramProps {
 title?: string;
 showInvestment?: boolean;
 showGovernment?: boolean;
 showExports?: boolean;
 interactive?: boolean;
}

const KeynesianCrossDiagram = ({ 
 title = "The Keynesian Cross (45° Line Diagram)",
 showInvestment = true,
 showGovernment = false,
 showExports = false,
 interactive = true
}: KeynesianCrossDiagramProps) => {
 const [showShift, setShowShift] = useState(false);
 const [hoveredElement, setHoveredElement] = useState<string | null>(null);

 const width = 500;
 const height = 400;
 const margin = { top: 40, right: 40, bottom: 60, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Scale functions
 const xScale = (val: number) => margin.left + (val / 2500) * chartWidth;
 const yScale = (val: number) => height - margin.bottom - (val / 2500) * chartHeight;

 // 45-degree line (Y = AE)
 const line45Start = { x: xScale(0), y: yScale(0) };
 const line45End = { x: xScale(2500), y: yScale(2500) };

 // Consumption function: C = 100 + 0.8Y
 const consumptionPoints = Array.from({ length: 26 }, (_, i) => {
 const y = i * 100;
 const c = 100 + 0.8 * y;
 return { x: xScale(y), y: yScale(c) };
 });

 // AE with investment: AE = 350 + 0.8Y (C + I where I = 250)
 const aePoints = Array.from({ length: 26 }, (_, i) => {
 const y = i * 100;
 const ae = 350 + 0.8 * y;
 return { x: xScale(y), y: yScale(ae) };
 });

 // AE with shift (increased investment): AE = 450 + 0.8Y
 const aeShiftedPoints = Array.from({ length: 26 }, (_, i) => {
 const y = i * 100;
 const ae = 450 + 0.8 * y;
 return { x: xScale(y), y: yScale(ae) };
 });

 // Equilibrium points
 const eq1Y = 1750; // Y* = 350 / 0.2 = 1750
 const eq2Y = 2250; // Y* = 450 / 0.2 = 2250

 const pathFromPoints = (points: { x: number; y: number }[]) => {
 return points.map((p, i) => `${i === 0 ? 'M': 'L'} ${p.x} ${p.y}`).join(' ');
 };

 return (
 <div className="glass-card p-6 rounded-xl">
 <div className="flex items-center justify-between mb-4">
 <h3 className="font-serif text-lg text-silver-bright">{title}</h3>
 {interactive && (
 <div className="flex gap-2">
 <button
 onClick={ => setShowShift(!showShift)}
 className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cambridge-magenta/20 text-cambridge-magenta hover:bg-cambridge-magenta/30 transition-colors"
 >
 {showShift ? 'Reset': 'Increase Investment'}
 </button>
 </div>
 )}
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 {/* Grid lines */}
 {[500, 1000, 1500, 2000].map((val) => (
 <g key={val}>
 <line
 x1={xScale(val)}
 y1={margin.top}
 x2={xScale(val)}
 y2={height - margin.bottom}
 stroke="hsl(var(--muted-foreground))"
 strokeOpacity={0.1}
 strokeDasharray="4,4"
 />
 <line
 x1={margin.left}
 y1={yScale(val)}
 x2={width - margin.right}
 y2={yScale(val)}
 stroke="hsl(var(--muted-foreground))"
 strokeOpacity={0.1}
 strokeDasharray="4,4"
 />
 </g>
 ))}

 {/* Axes */}
 <line
 x1={margin.left}
 y1={height - margin.bottom}
 x2={width - margin.right}
 y2={height - margin.bottom}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />
 <line
 x1={margin.left}
 y1={margin.top}
 x2={margin.left}
 y2={height - margin.bottom}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />

 {/* Axis labels */}
 <text
 x={width / 2}
 y={height - 15}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 >
 National Income (Y)
 </text>
 <text
 x={20}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 transform={`rotate(-90, 20, ${height / 2})`}
 >
 Aggregate Expenditure (AE)
 </text>

 {/* 45-degree line */}
 <motion.line
 x1={line45Start.x}
 y1={line45Start.y}
 x2={line45End.x}
 y2={line45End.y}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(2200)}
 y={yScale(2300)}
 fill="hsl(var(--silver))"
 className="text-xs"
 >
 Y = AE (45°)
 </text>

 {/* Consumption function */}
 <motion.path
 d={pathFromPoints(consumptionPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={2}
 strokeOpacity={0.5}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.3, ease: "easeInOut" as const }}
 onMouseEnter={ => setHoveredElement('consumption')}
 onMouseLeave={ => setHoveredElement(null)}
 />
 {hoveredElement !== 'ae' && (
 <text
 x={xScale(1800)}
 y={yScale(1600)}
 fill="hsl(var(--cambridge-green))"
 className="text-xs"
 >
 C = a + bY
 </text>
 )}

 {/* AE curve */}
 {showInvestment && (
 <>
 <motion.path
 d={pathFromPoints(aePoints)}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={3}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.5, ease: "easeInOut" as const }}
 onMouseEnter={ => setHoveredElement('ae')}
 onMouseLeave={ => setHoveredElement(null)}
 />
 <text
 x={xScale(2100)}
 y={yScale(2050)}
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs font-medium"
 >
 AE₀ = C + I
 </text>
 </>
 )}

 {/* Shifted AE curve */}
 {showShift && (
 <>
 <motion.path
 d={pathFromPoints(aeShiftedPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth={3}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(2100)}
 y={yScale(2200)}
 fill="hsl(var(--cambridge-magenta))"
 className="text-xs font-medium"
 >
 AE₁ = C + I'
 </text>
 </>
 )}

 {/* Equilibrium point E₁ */}
 <motion.circle
 cx={xScale(eq1Y)}
 cy={yScale(eq1Y)}
 r={6}
 fill="hsl(var(--cambridge-cyan))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 1.2 }}
 />
 <text
 x={xScale(eq1Y) + 10}
 y={yScale(eq1Y) - 10}
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs font-bold"
 >
 E₁
 </text>

 {/* Dashed lines to equilibrium */}
 <motion.line
 x1={xScale(eq1Y)}
 y1={yScale(eq1Y)}
 x2={xScale(eq1Y)}
 y2={height - margin.bottom}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={1}
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.3 }}
 />
 <text
 x={xScale(eq1Y)}
 y={height - margin.bottom + 15}
 textAnchor="middle"
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs"
 >
 Y₁*
 </text>

 {/* Equilibrium point E₂ (when shifted) */}
 {showShift && (
 <>
 <motion.circle
 cx={xScale(eq2Y)}
 cy={yScale(eq2Y)}
 r={6}
 fill="hsl(var(--cambridge-magenta))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.5 }}
 />
 <text
 x={xScale(eq2Y) + 10}
 y={yScale(eq2Y) - 10}
 fill="hsl(var(--cambridge-magenta))"
 className="text-xs font-bold"
 >
 E₂
 </text>
 <motion.line
 x1={xScale(eq2Y)}
 y1={yScale(eq2Y)}
 x2={xScale(eq2Y)}
 y2={height - margin.bottom}
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth={1}
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.6 }}
 />
 <text
 x={xScale(eq2Y)}
 y={height - margin.bottom + 15}
 textAnchor="middle"
 fill="hsl(var(--cambridge-magenta))"
 className="text-xs"
 >
 Y₂*
 </text>

 {/* Arrow showing multiplier effect */}
 <motion.path
 d={`M ${xScale(eq1Y) + 5} ${height - margin.bottom - 25} L ${xScale(eq2Y) - 5} ${height - margin.bottom - 25}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth={2}
 markerEnd="url(#arrowhead)"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.8 }}
 />
 <text
 x={(xScale(eq1Y) + xScale(eq2Y)) / 2}
 y={height - margin.bottom - 35}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 className="text-xs font-medium"
 >
 ΔY = k × ΔI
 </text>
 </>
 )}

 {/* Arrow marker definition */}
 <defs>
 <marker
 id="arrowhead"
 markerWidth="10"
 markerHeight="7"
 refX="9"
 refY="3.5"
 orient="auto"
 >
 <polygon
 points="0 0, 10 3.5, 0 7"
 fill="hsl(var(--cambridge-orange))"
 />
 </marker>
 </defs>

 {/* Autonomous spending indicator */}
 <motion.circle
 cx={margin.left}
 cy={yScale(350)}
 r={4}
 fill="hsl(var(--cambridge-cyan))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.8 }}
 />
 <text
 x={margin.left - 8}
 y={yScale(350)}
 textAnchor="end"
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs"
 >
 a + I
 </text>

 {/* Breakeven point */}
 <motion.circle
 cx={xScale(500)}
 cy={yScale(500)}
 r={4}
 fill="hsl(var(--cambridge-green))"
 strokeOpacity={0.5}
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.9 }}
 />
 </svg>

 {/* Legend */}
 <div className="mt-4 flex flex-wrap gap-4 text-xs">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-silver" style={{ borderStyle: 'dashed' }} />
 <span className="text-muted-foreground">45° Line (Y = AE)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-green))' }} />
 <span className="text-muted-foreground">Consumption (C)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))' }} />
 <span className="text-muted-foreground">Aggregate Expenditure (AE)</span>
 </div>
 {showShift && (
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-magenta))' }} />
 <span className="text-muted-foreground">Shifted AE (↑I)</span>
 </div>
 )}
 </div>

 {/* Key equations */}
 <div className="mt-4 p-3 bg-muted/30 rounded-lg">
 <p className="text-xs text-muted-foreground font-mono">
 <strong>Equilibrium:</strong> Y = AE where AE = C + I{showGovernment && ' + G'}{showExports && ' + (X-M)'}
 </p>
 <p className="text-xs text-muted-foreground font-mono mt-1">
 <strong>Consumption:</strong> C = a + bY where a = autonomous, b = MPC
 </p>
 {showShift && (
 <p className="text-xs text-cambridge-orange font-mono mt-1">
 <strong>Multiplier Effect:</strong> ΔY = k × ΔI where k = 1/(1-MPC)
 </p>
 )}
 </div>
 </div>
 );
};

export default KeynesianCrossDiagram;
