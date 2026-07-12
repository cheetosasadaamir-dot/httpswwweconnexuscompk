import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MinimumWageDiagramProps {
 title?: string;
}

/**
 * Geometrically Precise Minimum Wage Diagram
 * Exam Standard: Minimum wage line MUST be ABOVE equilibrium to be effective
 * Mathematical precision ensures accurate intersection points
 */
const MinimumWageDiagram = ({ title = "Minimum Wage in the Labour Market" }: MinimumWageDiagramProps) => {
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 },
 { threshold: 0.3 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 // SVG dimensions
 const width = 500;
 const height = 400;
 const margin = { left: 70, right: 40, top: 50, bottom: 60 };
 const chartW = width - margin.left - margin.right;
 const chartH = height - margin.top - margin.bottom;

 // Scale functions
 const xScale = (q: number) => margin.left + (q / 100) * chartW;
 const yScale = (p: number) => margin.top + chartH - (p / 100) * chartH;

 // Colors
 const supplyColor = 'hsl(45 93% 55%)'; // Amber Gold - Labour Supply
 const demandColor = 'hsl(185 100% 50%)'; // Neon Cyan - Labour Demand
 const minWageColor = 'hsl(0 84% 60%)'; // Red - Minimum Wage
 const equilibriumColor = 'hsl(142 76% 45%)'; // Green - Equilibrium
 const axisColor = 'hsl(220 14% 75%)';
 const gridColor = 'hsl(220 14% 20%)';
 const labelColor = 'hsl(220 14% 90%)';

 // LINEAR CURVES with mathematical precision
 // Labour Supply (upward sloping): W = 10 + 0.8L
 // Labour Demand (downward sloping): W = 90 - 0.8L
 // Equilibrium: 10 + 0.8L = 90 - 0.8L → 1.6L = 80 → L = 50, W = 50

 const equilibriumL = 50;
 const equilibriumW = 50;

 // Minimum wage MUST be above equilibrium to be effective
 const minimumWage = 70;

 // At minimum wage:
 // Labour Supply: 70 = 10 + 0.8L → L = 75 (workers willing to work)
 // Labour Demand: 70 = 90 - 0.8L → L = 25 (jobs available)
 const supplyAtMinWage = (minimumWage - 10) / 0.8; // = 75
 const demandAtMinWage = (90 - minimumWage) / 0.8; // = 25
 const unemployment = supplyAtMinWage - demandAtMinWage; // = 50

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1.2, ease: "easeInOut" as const }
 }
 };

 return (
 <div ref={containerRef} className="w-full">
 {title && (
 <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h4>
 )}
 
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 {/* Grid */}
 <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
 {[20, 40, 60, 80].map((tick) => (
 <line key={`h-${tick}`} x1={margin.left} y1={yScale(tick)} x2={width - margin.right} y2={yScale(tick)} />
 ))}
 {[20, 40, 60, 80].map((tick) => (
 <line key={`v-${tick}`} x1={xScale(tick)} y1={margin.top} x2={xScale(tick)} y2={height - margin.bottom} />
 ))}
 </g>

 {/* Unemployment shading area */}
 <motion.rect
 x={xScale(demandAtMinWage)}
 y={yScale(minimumWage)}
 width={xScale(supplyAtMinWage) - xScale(demandAtMinWage)}
 height={yScale(0) - yScale(minimumWage)}
 fill={minWageColor}
 opacity="0.15"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.15 }: { opacity: 0 }}
 transition={{ delay: 2.5, duration: 0.8 }}
 />

 {/* Axes */}
 <defs>
 <marker id="arrow-wage" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
 </marker>
 </defs>
 <g stroke={axisColor} strokeWidth="2">
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} />
 <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} markerEnd="url(#arrow-wage)" />
 <polygon points={`${margin.left},${margin.top} ${margin.left - 5},${margin.top + 12} ${margin.left + 5},${margin.top + 12}`} fill={axisColor} />
 </g>

 {/* Axis labels */}
 <text x={20} y={(margin.top + height - margin.bottom) / 2} fill={labelColor} fontSize="13" fontFamily="serif" transform={`rotate(-90, 20, ${(margin.top + height - margin.bottom) / 2})`} textAnchor="middle">
 Wage Rate (W)
 </text>
 <text x={(margin.left + width - margin.right) / 2} y={height - 15} fill={labelColor} fontSize="14" fontFamily="serif" textAnchor="middle">
 Quantity of Labour (L)
 </text>

 {/* Labour Supply (upward sloping) - W = 10 + 0.8L */}
 <motion.line
 x1={xScale(0)} y1={yScale(10)}
 x2={xScale(100)} y2={yScale(90)}
 stroke={supplyColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <motion.text 
 x={xScale(95)} y={yScale(88)} 
 fill={supplyColor} fontSize="13" fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.2 }}
 >
 SL
 </motion.text>

 {/* Labour Demand (downward sloping) - W = 90 - 0.8L */}
 <motion.line
 x1={xScale(0)} y1={yScale(90)}
 x2={xScale(100)} y2={yScale(10)}
 stroke={demandColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.3 }}
 />
 <motion.text 
 x={xScale(95)} y={yScale(12)} 
 fill={demandColor} fontSize="13" fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.5 }}
 >
 DL = MRP
 </motion.text>

 {/* Minimum Wage Line - STRICTLY ABOVE EQUILIBRIUM */}
 <motion.line
 x1={margin.left} y1={yScale(minimumWage)}
 x2={width - margin.right} y2={yScale(minimumWage)}
 stroke={minWageColor}
 strokeWidth="3"
 strokeDasharray="10,5"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={isVisible ? { pathLength: 1, opacity: 1 }: { pathLength: 0, opacity: 0 }}
 transition={{ delay: 1.8, duration: 0.8 }}
 />
 <motion.text 
 x={width - margin.right - 5} y={yScale(minimumWage) - 8} 
 fill={minWageColor} fontSize="12" fontWeight="600" textAnchor="end"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.2 }}
 >
 Wmin (NMW)
 </motion.text>

 {/* Free Market Equilibrium */}
 <motion.circle 
 cx={xScale(equilibriumL)} 
 cy={yScale(equilibriumW)} 
 r="7" 
 fill={equilibriumColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 1.6, type: "spring" }}
 />
 <motion.text 
 x={xScale(equilibriumL) + 12} y={yScale(equilibriumW) + 5} 
 fill={equilibriumColor} fontSize="13" fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.7 }}
 >
 E
 </motion.text>

 {/* Points at minimum wage level */}
 {/* Labour Demanded */}
 <motion.circle 
 cx={xScale(demandAtMinWage)} 
 cy={yScale(minimumWage)} 
 r="6" 
 fill={demandColor}
 stroke="white"
 strokeWidth="1.5"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 2.4, type: "spring" }}
 />
 
 {/* Labour Supplied */}
 <motion.circle 
 cx={xScale(supplyAtMinWage)} 
 cy={yScale(minimumWage)} 
 r="6" 
 fill={supplyColor}
 stroke="white"
 strokeWidth="1.5"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 2.4, type: "spring" }}
 />

 {/* Dashed lines to axes */}
 <motion.line 
 x1={xScale(equilibriumL)} y1={yScale(equilibriumW)} x2={xScale(equilibriumL)} y2={height - margin.bottom} 
 stroke={equilibriumColor} strokeWidth="1.5" strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.8, duration: 0.5 }}
 />
 <motion.line 
 x1={margin.left} y1={yScale(equilibriumW)} x2={xScale(equilibriumL)} y2={yScale(equilibriumW)} 
 stroke={equilibriumColor} strokeWidth="1.5" strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.8, duration: 0.5 }}
 />
 <motion.line 
 x1={xScale(demandAtMinWage)} y1={yScale(minimumWage)} x2={xScale(demandAtMinWage)} y2={height - margin.bottom} 
 stroke={demandColor} strokeWidth="1.5" strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 2.5, duration: 0.5 }}
 />
 <motion.line 
 x1={xScale(supplyAtMinWage)} y1={yScale(minimumWage)} x2={xScale(supplyAtMinWage)} y2={height - margin.bottom} 
 stroke={supplyColor} strokeWidth="1.5" strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 2.5, duration: 0.5 }}
 />

 {/* Axis labels */}
 <motion.text 
 x={margin.left - 8} y={yScale(equilibriumW) + 4} 
 fill={equilibriumColor} fontSize="11" textAnchor="end" fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2 }}
 >
 We
 </motion.text>
 <motion.text 
 x={margin.left - 8} y={yScale(minimumWage) + 4} 
 fill={minWageColor} fontSize="11" textAnchor="end" fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.3 }}
 >
 Wmin
 </motion.text>
 <motion.text 
 x={xScale(equilibriumL)} y={height - margin.bottom + 16} 
 fill={equilibriumColor} fontSize="11" textAnchor="middle" fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2 }}
 >
 Le
 </motion.text>
 <motion.text 
 x={xScale(demandAtMinWage)} y={height - margin.bottom + 16} 
 fill={demandColor} fontSize="11" textAnchor="middle" fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.6 }}
 >
 Ld
 </motion.text>
 <motion.text 
 x={xScale(supplyAtMinWage)} y={height - margin.bottom + 16} 
 fill={supplyColor} fontSize="11" textAnchor="middle" fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.6 }}
 >
 Ls
 </motion.text>

 {/* Unemployment bracket */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.8 }}
 >
 <line 
 x1={xScale(demandAtMinWage)} y1={height - margin.bottom + 32} 
 x2={xScale(supplyAtMinWage)} y2={height - margin.bottom + 32} 
 stroke={minWageColor} strokeWidth="2"
 />
 <line x1={xScale(demandAtMinWage)} y1={height - margin.bottom + 27} x2={xScale(demandAtMinWage)} y2={height - margin.bottom + 37} stroke={minWageColor} strokeWidth="2" />
 <line x1={xScale(supplyAtMinWage)} y1={height - margin.bottom + 27} x2={xScale(supplyAtMinWage)} y2={height - margin.bottom + 37} stroke={minWageColor} strokeWidth="2" />
 <text 
 x={(xScale(demandAtMinWage) + xScale(supplyAtMinWage)) / 2} y={height - margin.bottom + 50} 
 fill={minWageColor} fontSize="11" textAnchor="middle" fontWeight="600"
 >
 Unemployment (Ls - Ld)
 </text>
 </motion.g>

 {/* "Above equilibrium" annotation */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3 }}
 >
 <line 
 x1={xScale(10)} y1={yScale(equilibriumW)} 
 x2={xScale(10)} y2={yScale(minimumWage)} 
 stroke={minWageColor} strokeWidth="1.5"
 />
 <line x1={xScale(10) - 3} y1={yScale(equilibriumW)} x2={xScale(10) + 3} y2={yScale(equilibriumW)} stroke={minWageColor} strokeWidth="1.5" />
 <line x1={xScale(10) - 3} y1={yScale(minimumWage)} x2={xScale(10) + 3} y2={yScale(minimumWage)} stroke={minWageColor} strokeWidth="1.5" />
 <text x={xScale(12)} y={yScale((equilibriumW + minimumWage) / 2)} fill={minWageColor} fontSize="9" fontWeight="500">
 Wmin {'>'} We
 </text>
 <text x={xScale(12)} y={yScale((equilibriumW + minimumWage) / 2) + 10} fill={minWageColor} fontSize="8">
 (Binding)
 </text>
 </motion.g>
 </svg>

 {/* Legend and explanation */}
 <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <div className="w-5 h-0.5 rounded" style={{ backgroundColor: supplyColor }} />
 <span>Labour Supply</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-5 h-0.5 rounded" style={{ backgroundColor: demandColor }} />
 <span>Labour Demand</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-5 h-0.5 rounded border-t-2 border-dashed" style={{ borderColor: minWageColor }} />
 <span>Minimum Wage</span>
 </div>
 </div>

 {/* Key insight box */}
 <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-sm">
 <p className="text-muted-foreground leading-relaxed">
 <span className="font-semibold text-destructive">Key Requirement:</span>{' '}
 For a minimum wage to be <strong>effective (binding)</strong>, it must be set 
 <strong className="text-destructive"> above the free-market equilibrium wage</strong>. 
 At Wmin {'>'} We, quantity of labour demanded (Ld) is less than quantity supplied (Ls), 
 creating <strong className="text-destructive">unemployment = Ls - Ld</strong>.
 </p>
 </div>
 </div>
 );
};

export default MinimumWageDiagram;
