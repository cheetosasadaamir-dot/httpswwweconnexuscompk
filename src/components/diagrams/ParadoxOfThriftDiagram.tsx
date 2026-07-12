import { motion } from 'framer-motion';

const ParadoxOfThriftDiagram =  => {
 const width = 400, height = 280;
 const margin = { top: 30, right: 30, bottom: 50, left: 50 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;
 
 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 return (
 <div className="glass-card p-6 my-6">
 <h3 className="font-serif text-xl text-gradient mb-4">The Paradox of Thrift</h3>
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
 <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">National Income (Y)</text>
 <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>S, I</text>
 
 {/* Original Saving S0 */}
 <motion.line x1={xScale(10)} y1={yScale(20)} x2={xScale(90)} y2={yScale(60)} stroke="hsl(var(--cambridge-orange))" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
 <text x={xScale(92)} y={yScale(62)} fill="hsl(var(--cambridge-orange))" fontSize="10">S₀</text>
 
 {/* New Saving S1 (shifted up) */}
 <motion.line x1={xScale(10)} y1={yScale(35)} x2={xScale(90)} y2={yScale(75)} stroke="hsl(var(--cambridge-orange))" strokeWidth="2.5" strokeDasharray="6,3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.6 }} />
 <text x={xScale(92)} y={yScale(77)} fill="hsl(var(--cambridge-orange))" fontSize="10">S₁</text>
 
 {/* Investment I0 */}
 <motion.line x1={xScale(10)} y1={yScale(40)} x2={xScale(90)} y2={yScale(40)} stroke="hsl(var(--cambridge-cyan))" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.1, duration: 0.6 }} />
 <text x={xScale(92)} y={yScale(42)} fill="hsl(var(--cambridge-cyan))" fontSize="10">I₀</text>
 
 {/* Investment I1 (falls) */}
 <motion.line x1={xScale(10)} y1={yScale(32)} x2={xScale(90)} y2={yScale(32)} stroke="hsl(var(--cambridge-cyan))" strokeWidth="2.5" strokeDasharray="6,3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.6 }} />
 <text x={xScale(92)} y={yScale(34)} fill="hsl(var(--cambridge-cyan))" fontSize="10">I₁</text>
 
 {/* Equilibrium points */}
 <circle cx={xScale(60)} cy={yScale(40)} r="5" fill="hsl(var(--primary))" />
 <text x={xScale(60) + 8} y={yScale(40) - 5} fill="hsl(var(--foreground))" fontSize="9">E₀</text>
 
 <circle cx={xScale(42)} cy={yScale(40)} r="5" fill="hsl(var(--secondary))" />
 <text x={xScale(42) + 8} y={yScale(40) - 5} fill="hsl(var(--foreground))" fontSize="9">E₁</text>
 
 <circle cx={xScale(30)} cy={yScale(32)} r="5" fill="hsl(var(--destructive))" />
 <text x={xScale(30) - 15} y={yScale(32) - 5} fill="hsl(var(--foreground))" fontSize="9">E₂</text>
 
 {/* Arrows showing Y falling */}
 <motion.path d={`M ${xScale(60)} ${yScale(5)} L ${xScale(30)} ${yScale(5)}`} stroke="hsl(var(--destructive))" strokeWidth="2" markerEnd="url(#arrow-pot)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
 <defs><marker id="arrow-pot" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--destructive))" /></marker></defs>
 <text x={xScale(45)} y={yScale(8)} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9">Y falls</text>
 
 <text x={xScale(60)} y={yScale(-2)} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Y₀</text>
 <text x={xScale(30)} y={yScale(-2)} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Y₂</text>
 </svg>
 <p className="text-sm text-muted-foreground text-center mt-2">↑Saving → ↓C → ↓Y → ↓I → ↓Y further (recessionary spiral)</p>
 </div>
 );
};

export default ParadoxOfThriftDiagram;
