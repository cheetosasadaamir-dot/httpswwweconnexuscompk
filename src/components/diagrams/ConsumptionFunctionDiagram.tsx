import { motion } from 'framer-motion';
import { useState } from 'react';

interface ConsumptionFunctionDiagramProps {
 title?: string;
 showSavings?: boolean;
 interactive?: boolean;
}

const ConsumptionFunctionDiagram = ({ 
 title = "Consumption & Saving Functions",
 showSavings = true,
 interactive = true
}: ConsumptionFunctionDiagramProps) => {
 const [showShift, setShowShift] = useState(false);
 const [shiftFactor, setShiftFactor] = useState<'wealth' | 'interest' | 'expectations' | null>(null);

 const width = 500;
 const height = 350;
 const margin = { top: 40, right: 40, bottom: 60, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const xScale = (val: number) => margin.left + (val / 1000) * chartWidth;
 const yScale = (val: number) => height - margin.bottom - (val / 1000) * chartHeight;

 // C = 100 + 0.8Y
 const consumptionPoints = Array.from({ length: 11 }, (_, i) => {
 const y = i * 100;
 const c = 100 + 0.8 * y;
 return { x: xScale(y), y: yScale(c) };
 });

 // Shifted consumption (e.g., wealth increase): C = 150 + 0.8Y
 const consumptionShiftedPoints = Array.from({ length: 11 }, (_, i) => {
 const y = i * 100;
 const c = 150 + 0.8 * y;
 return { x: xScale(y), y: yScale(c) };
 });

 // S = -100 + 0.2Y
 const savingsPoints = Array.from({ length: 11 }, (_, i) => {
 const y = i * 100;
 const s = -100 + 0.2 * y;
 return { x: xScale(y), y: yScale(s + 500) }; // Offset for visibility
 });

 // Shifted savings: S = -150 + 0.2Y
 const savingsShiftedPoints = Array.from({ length: 11 }, (_, i) => {
 const y = i * 100;
 const s = -150 + 0.2 * y;
 return { x: xScale(y), y: yScale(s + 500) };
 });

 const pathFromPoints = (points: { x: number; y: number }[]) => {
 return points.map((p, i) => `${i === 0 ? 'M': 'L'} ${p.x} ${p.y}`).join(' ');
 };

 // Breakeven point where C = Y
 const breakevenY = 500;

 return (
 <div className="glass-card p-6 rounded-xl">
 <div className="flex items-center justify-between mb-4">
 <h3 className="font-serif text-lg text-silver-bright">{title}</h3>
 {interactive && (
 <div className="flex gap-2">
 <button
 onClick={ => {
 setShowShift(!showShift);
 setShiftFactor(showShift ? null: 'wealth');
 }}
 className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
 shiftFactor === 'wealth' 
 ? 'bg-cambridge-magenta/30 text-cambridge-magenta': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 ↑ Wealth
 </button>
 </div>
 )}
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 {/* Grid lines */}
 {[200, 400, 600, 800].map((val) => (
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
 Disposable Income (Yᵈ)
 </text>
 <text
 x={20}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 transform={`rotate(-90, 20, ${height / 2})`}
 >
 C, S
 </text>

 {/* 45-degree reference line for consumption panel */}
 <motion.line
 x1={margin.left}
 y1={height - margin.bottom}
 x2={xScale(1000)}
 y2={yScale(1000)}
 stroke="hsl(var(--silver))"
 strokeWidth={1}
 strokeDasharray="6,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(850)}
 y={yScale(900)}
 fill="hsl(var(--silver))"
 className="text-xs"
 >
 45° (Y=C)
 </text>

 {/* Consumption function */}
 <motion.path
 d={pathFromPoints(consumptionPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={3}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.2, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(850)}
 y={yScale(820)}
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs font-medium"
 >
 C = a + bY
 </text>

 {/* Shifted consumption */}
 {showShift && (
 <>
 <motion.path
 d={pathFromPoints(consumptionShiftedPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth={3}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(750)}
 y={yScale(820)}
 fill="hsl(var(--cambridge-magenta))"
 className="text-xs font-medium"
 >
 C₁
 </text>

 {/* Shift arrow */}
 <motion.path
 d={`M ${xScale(300)} ${yScale(100 + 0.8 * 300) - 10} L ${xScale(300)} ${yScale(150 + 0.8 * 300) + 10}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth={2}
 markerEnd="url(#shiftArrow)"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.3, delay: 0.5 }}
 />
 </>
 )}

 {/* Breakeven point */}
 <motion.circle
 cx={xScale(breakevenY)}
 cy={yScale(breakevenY)}
 r={6}
 fill="hsl(var(--cambridge-yellow))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 1 }}
 />
 <text
 x={xScale(breakevenY) + 10}
 y={yScale(breakevenY) - 10}
 fill="hsl(var(--cambridge-yellow))"
 className="text-xs font-bold"
 >
 Breakeven
 </text>

 {/* Dissaving region label */}
 <text
 x={xScale(250)}
 y={yScale(350)}
 fill="hsl(var(--destructive))"
 className="text-xs"
 opacity={0.7}
 >
 Dissaving
 </text>
 <text
 x={xScale(250)}
 y={yScale(320)}
 fill="hsl(var(--destructive))"
 className="text-xs"
 opacity={0.7}
 >
 (Y &lt; C)
 </text>

 {/* Saving region label */}
 <text
 x={xScale(750)}
 y={yScale(680)}
 fill="hsl(var(--cambridge-green))"
 className="text-xs"
 opacity={0.7}
 >
 Saving
 </text>
 <text
 x={xScale(750)}
 y={yScale(650)}
 fill="hsl(var(--cambridge-green))"
 className="text-xs"
 opacity={0.7}
 >
 (Y &gt; C)
 </text>

 {/* Autonomous consumption marker */}
 <motion.circle
 cx={margin.left}
 cy={yScale(100)}
 r={4}
 fill="hsl(var(--cambridge-cyan))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.8 }}
 />
 <text
 x={margin.left - 8}
 y={yScale(100)}
 textAnchor="end"
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs"
 >
 a
 </text>

 {/* Arrow definition */}
 <defs>
 <marker
 id="shiftArrow"
 markerWidth="10"
 markerHeight="7"
 refX="5"
 refY="3.5"
 orient="auto"
 >
 <polygon
 points="0 0, 10 3.5, 0 7"
 fill="hsl(var(--cambridge-orange))"
 />
 </marker>
 </defs>
 </svg>

 {/* Legend and equations */}
 <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
 <div className="space-y-2">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))' }} />
 <span className="text-muted-foreground">Consumption (C)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--cambridge-yellow))' }} />
 <span className="text-muted-foreground">Breakeven (APC = 1)</span>
 </div>
 </div>
 <div className="p-2 bg-muted/30 rounded font-mono text-xs">
 <p><strong>MPC</strong> = ΔC/ΔY = b</p>
 <p><strong>APC</strong> = C/Y</p>
 <p>MPC + MPS = 1</p>
 </div>
 </div>

 {/* Factors affecting consumption */}
 {interactive && (
 <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
 <p className="text-xs font-medium text-silver-bright mb-2">Factors Shifting Consumption Function:</p>
 <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
 <span>• Wealth (↑ → C shifts up)</span>
 <span>• Interest Rates (↑ → C shifts down)</span>
 <span>• Expectations (optimism → C ↑)</span>
 <span>• Inflation expectations</span>
 </div>
 </div>
 )}
 </div>
 );
};

export default ConsumptionFunctionDiagram;
