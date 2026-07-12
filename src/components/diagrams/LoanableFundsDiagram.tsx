import { useState } from 'react';
import { motion } from 'framer-motion';

const LoanableFundsDiagram =  => {
 const [showShift, setShowShift] = useState(false);
 const [shiftType, setShiftType] = useState<'demand' | 'supply'>('demand');
 
 const width = 500;
 const height = 380;
 const margin = { top: 40, right: 40, bottom: 60, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => height - margin.bottom - (val / 10) * chartHeight;

 // Supply of Loanable Funds (upward sloping - savings)
 const supplyPoints = [
 { x: 10, y: 1 },
 { x: 30, y: 3 },
 { x: 50, y: 5 },
 { x: 70, y: 7 },
 { x: 90, y: 9 },
 ];

 // Demand for Loanable Funds (downward sloping - investment)
 const demandPoints = [
 { x: 10, y: 9 },
 { x: 30, y: 7 },
 { x: 50, y: 5 },
 { x: 70, y: 3 },
 { x: 90, y: 1 },
 ];

 // Shifted demand (right shift)
 const demandShiftedPoints = demandPoints.map(p => ({ x: p.x + 15, y: p.y }));
 
 // Shifted supply (right shift)
 const supplyShiftedPoints = supplyPoints.map(p => ({ x: p.x + 15, y: p.y }));

 const pathFromPoints = (points: { x: number; y: number }[]) => {
 return points.map((p, i) => `${i === 0 ? 'M': 'L'} ${xScale(p.x)} ${yScale(p.y)}`).join(' ');
 };

 // Original equilibrium at Q=50, r=5
 const eq1 = { x: 50, y: 5 };
 // New equilibrium after demand shift: Q≈58, r≈5.8
 const eq2Demand = { x: 58, y: 5.8 };
 // New equilibrium after supply shift: Q≈58, r≈4.2
 const eq2Supply = { x: 58, y: 4.2 };

 const getEq2 =  => shiftType === 'demand' ? eq2Demand: eq2Supply;

 return (
 <div className="glass-card p-4 rounded-xl">
 <div className="flex items-center justify-between mb-3">
 <h3 className="font-serif text-base text-silver-bright">Loanable Funds Theory</h3>
 <div className="flex gap-2">
 <select
 value={shiftType}
 onChange={(e) => setShiftType(e.target.value as 'demand' | 'supply')}
 className="px-2 py-1 text-xs rounded bg-muted border border-border"
 >
 <option value="demand">Demand Shift</option>
 <option value="supply">Supply Shift</option>
 </select>
 <button
 onClick={ => setShowShift(!showShift)}
 className="px-2 py-1 text-xs font-medium rounded-lg bg-cambridge-green/20 text-cambridge-green hover:bg-cambridge-green/30 transition-colors"
 >
 {showShift ? 'Reset': 'Show Shift'}
 </button>
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 {/* Grid lines */}
 {[2, 4, 6, 8].map((val) => (
 <line
 key={val}
 x1={margin.left}
 y1={yScale(val)}
 x2={width - margin.right}
 y2={yScale(val)}
 stroke="hsl(var(--muted-foreground))"
 strokeOpacity={0.1}
 strokeDasharray="4,4"
 />
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
 className="text-xs font-serif"
 >
 Quantity of Loanable Funds (Q)
 </text>
 <text
 x={18}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 transform={`rotate(-90, 18, ${height / 2})`}
 >
 Real Interest Rate (r%)
 </text>

 {/* Original Supply Curve */}
 <motion.path
 d={pathFromPoints(supplyPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={2.5}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(85)}
 y={yScale(9.5)}
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs font-medium"
 >
 S (Savings)
 </text>

 {/* Original Demand Curve */}
 <motion.path
 d={pathFromPoints(demandPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth={2.5}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" as const }}
 />
 <text
 x={xScale(85)}
 y={yScale(0.5)}
 fill="hsl(var(--cambridge-magenta))"
 className="text-xs font-medium"
 >
 D (Investment)
 </text>

 {/* Shifted Curves */}
 {showShift && shiftType === 'demand' && (
 <>
 <motion.path
 d={pathFromPoints(demandShiftedPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={2.5}
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6 }}
 />
 <text
 x={xScale(98)}
 y={yScale(0.5)}
 fill="hsl(var(--cambridge-green))"
 className="text-xs font-medium"
 >
 D₁
 </text>
 </>
 )}

 {showShift && shiftType === 'supply' && (
 <>
 <motion.path
 d={pathFromPoints(supplyShiftedPoints)}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={2.5}
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.6 }}
 />
 <text
 x={xScale(98)}
 y={yScale(9.5)}
 fill="hsl(var(--cambridge-green))"
 className="text-xs font-medium"
 >
 S₁
 </text>
 </>
 )}

 {/* Original Equilibrium */}
 <motion.circle
 cx={xScale(eq1.x)}
 cy={yScale(eq1.y)}
 r={5}
 fill="hsl(var(--cambridge-orange))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.8 }}
 />
 <text
 x={xScale(eq1.x) - 12}
 y={yScale(eq1.y) - 8}
 fill="hsl(var(--cambridge-orange))"
 className="text-xs font-bold"
 >
 E₀
 </text>

 {/* Dashed lines to original equilibrium */}
 <motion.line
 x1={margin.left}
 y1={yScale(eq1.y)}
 x2={xScale(eq1.x)}
 y2={yScale(eq1.y)}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth={1}
 strokeDasharray="3,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 1 }}
 />
 <motion.line
 x1={xScale(eq1.x)}
 y1={yScale(eq1.y)}
 x2={xScale(eq1.x)}
 y2={height - margin.bottom}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth={1}
 strokeDasharray="3,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 1 }}
 />
 <text
 x={margin.left - 8}
 y={yScale(eq1.y) + 4}
 textAnchor="end"
 fill="hsl(var(--muted-foreground))"
 className="text-xs"
 >
 r₀
 </text>
 <text
 x={xScale(eq1.x)}
 y={height - margin.bottom + 14}
 textAnchor="middle"
 fill="hsl(var(--muted-foreground))"
 className="text-xs"
 >
 Q₀
 </text>

 {/* New Equilibrium after shift */}
 {showShift && (
 <>
 <motion.circle
 cx={xScale(getEq2.x)}
 cy={yScale(getEq2.y)}
 r={5}
 fill="hsl(var(--cambridge-green))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.5 }}
 />
 <text
 x={xScale(getEq2.x) + 10}
 y={yScale(getEq2.y) - 8}
 fill="hsl(var(--cambridge-green))"
 className="text-xs font-bold"
 >
 E₁
 </text>
 <motion.line
 x1={margin.left}
 y1={yScale(getEq2.y)}
 x2={xScale(getEq2.x)}
 y2={yScale(getEq2.y)}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={1}
 strokeDasharray="3,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.4, delay: 0.6 }}
 />
 <text
 x={margin.left - 8}
 y={yScale(getEq2.y) + 4}
 textAnchor="end"
 fill="hsl(var(--cambridge-green))"
 className="text-xs"
 >
 r₁
 </text>
 </>
 )}
 </svg>

 {/* Legend */}
 <div className="mt-3 flex flex-wrap gap-3 text-xs">
 <div className="flex items-center gap-1.5">
 <div className="w-3 h-0.5 bg-cambridge-cyan" />
 <span className="text-muted-foreground">Supply (Savings)</span>
 </div>
 <div className="flex items-center gap-1.5">
 <div className="w-3 h-0.5 bg-cambridge-magenta" />
 <span className="text-muted-foreground">Demand (Investment)</span>
 </div>
 </div>

 {/* Explanation */}
 <div className="mt-3 p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
 {showShift ? (
 shiftType === 'demand' ? (
 <p>
 <strong>↑ Demand for Loanable Funds:</strong> Consumer/business confidence rises → 
 D shifts right → At r₀, demand exceeds supply → Interest rate rises to r₁ to restore equilibrium.
 </p>
 ): (
 <p>
 <strong>↑ Supply of Loanable Funds:</strong> Higher savings culture → 
 S shifts right → At r₀, supply exceeds demand → Interest rate falls to r₁ to restore equilibrium.
 </p>
 )
 ): (
 <p>
 <strong>Equilibrium:</strong> The real interest rate adjusts to equate the supply of loanable funds 
 (savings) with the demand for loanable funds (investment).
 </p>
 )}
 </div>
 </div>
 );
};

export default LoanableFundsDiagram;
