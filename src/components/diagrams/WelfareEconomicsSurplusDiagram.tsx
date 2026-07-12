import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

/**
 * Precision Welfare Economics Diagram
 * Zero-Error Geometric Rules:
 * - Consumer Surplus: Triangle BELOW demand curve, ABOVE price line
 * - Producer Surplus: Triangle ABOVE supply curve, BELOW price line
 * - Y-intercepts clearly marked to define triangle heights
 * - Neon Cyan curves, Amber Gold surplus fills
 */
const WelfareEconomicsSurplusDiagram =  => {
 const [hoveredArea, setHoveredArea] = useState<string | null>(null);
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 },
 { threshold: 0.2 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 // SVG dimensions
 const width = 520;
 const height = 420;
 const margin = { top: 50, right: 60, bottom: 70, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Cambridge-accurate color palette
 const demandColor = 'hsl(185, 100%, 50%)'; // Neon Cyan
 const supplyColor = 'hsl(185, 100%, 50%)'; // Neon Cyan (matching spec)
 const consumerSurplusColor = 'hsl(45, 93%, 55%)'; // Amber Gold
 const producerSurplusColor = 'hsl(45, 93%, 55%)'; // Amber Gold
 const axisColor = 'hsl(220, 14%, 75%)';
 const gridColor = 'hsl(220, 14%, 20%)';
 const equilibriumColor = 'hsl(45, 93%, 55%)';

 // Scale functions
 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 // Key economic points - precisely defined
 const demandYIntercept = { x: 0, y: 95 }; // Pmax - reservation price
 const supplyYIntercept = { x: 0, y: 5 }; // Pmin - minimum supply price
 const equilibrium = { x: 50, y: 50 }; // Equilibrium: Pe, Qe

 // Demand curve: from (0, 95) to (95, 0) - linear downward slope
 const demandPath = `M ${xScale(0)} ${yScale(demandYIntercept.y)} L ${xScale(95)} ${yScale(0)}`;
 
 // Supply curve: from (0, 5) to (95, 100) - linear upward slope 
 const supplyPath = `M ${xScale(0)} ${yScale(supplyYIntercept.y)} L ${xScale(95)} ${yScale(100)}`;

 // Consumer Surplus Triangle: 
 // Vertices: (0, Pmax), (0, Pe), (Qe, Pe)
 // Area BELOW demand curve, ABOVE price line
 const consumerSurplusPath = `
 M ${xScale(0)} ${yScale(demandYIntercept.y)}
 L ${xScale(0)} ${yScale(equilibrium.y)}
 L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
 Z
 `;

 // Producer Surplus Triangle:
 // Vertices: (0, Pmin), (0, Pe), (Qe, Pe)
 // Area ABOVE supply curve, BELOW price line
 const producerSurplusPath = `
 M ${xScale(0)} ${yScale(supplyYIntercept.y)}
 L ${xScale(0)} ${yScale(equilibrium.y)}
 L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
 Z
 `;

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1.2, ease: "easeInOut" as const }
 }
 };

 const areaVariants = {
 hidden: { opacity: 0, scale: 0.95 },
 visible: { 
 opacity: 0.4,
 scale: 1,
 transition: { delay: 1.4, duration: 0.8, ease: "easeOut" as const }
 }
 };

 return (
 <div ref={containerRef} className="w-full">
 <h4 className="text-center text-silver-bright font-serif text-xl mb-2">
 Figure 2.3: Consumer and Producer Surplus
 </h4>
 <p className="text-center text-muted-foreground text-sm mb-6">
 The Geometric Representation of Economic Welfare
 </p>
 
 <svg 
 viewBox={`0 0 ${width} ${height}`} 
 className="w-full max-w-xl mx-auto"
 style={{ background: 'transparent' }}
 >
 {/* Subtle grid */}
 <g stroke={gridColor} strokeWidth="0.5" opacity="0.25">
 {[0, 1, 2, 3, 4, 5].map((i) => (
 <g key={i}>
 <line 
 x1={margin.left} 
 y1={margin.top + (chartHeight / 5) * i} 
 x2={margin.left + chartWidth} 
 y2={margin.top + (chartHeight / 5) * i}
 />
 <line 
 x1={margin.left + (chartWidth / 5) * i} 
 y1={margin.top} 
 x2={margin.left + (chartWidth / 5) * i} 
 y2={margin.top + chartHeight}
 />
 </g>
 ))}
 </g>

 {/* Consumer Surplus area */}
 <motion.path
 d={consumerSurplusPath}
 fill={consumerSurplusColor}
 variants={areaVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 onMouseEnter={ => setHoveredArea('consumer')}
 onMouseLeave={ => setHoveredArea(null)}
 style={{ 
 opacity: hoveredArea === 'consumer' ? 0.7: undefined,
 cursor: 'pointer'
 }}
 />

 {/* Producer Surplus area */}
 <motion.path
 d={producerSurplusPath}
 fill={producerSurplusColor}
 variants={areaVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 onMouseEnter={ => setHoveredArea('producer')}
 onMouseLeave={ => setHoveredArea(null)}
 style={{ 
 opacity: hoveredArea === 'producer' ? 0.7: undefined,
 cursor: 'pointer'
 }}
 />

 {/* Axes with arrows */}
 <defs>
 <marker id="arrowhead-welfare" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
 </marker>
 </defs>
 
 {/* X-axis */}
 <line 
 x1={margin.left} y1={margin.top + chartHeight} 
 x2={margin.left + chartWidth + 10} y2={margin.top + chartHeight}
 stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-welfare)"
 />
 {/* Y-axis */}
 <line 
 x1={margin.left} y1={margin.top + chartHeight} 
 x2={margin.left} y2={margin.top - 15}
 stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-welfare)"
 />

 {/* Axis labels */}
 <text x={margin.left + chartWidth / 2} y={height - 20} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle">
 Quantity (Q)
 </text>
 <text x={margin.left - 50} y={margin.top + chartHeight / 2} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle" transform={`rotate(-90, ${margin.left - 50}, ${margin.top + chartHeight / 2})`}>
 Price (P)
 </text>
 <text x={margin.left - 8} y={margin.top + chartHeight + 18} fill={axisColor} fontSize="12">0</text>

 {/* Demand curve - Neon Cyan */}
 <motion.path
 d={demandPath}
 fill="none"
 stroke={demandColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <motion.text 
 x={xScale(92)} 
 y={yScale(0) + 20} 
 fill={demandColor} 
 fontSize="16" 
 fontWeight="700"
 fontFamily="serif"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1 }}
 >
 D
 </motion.text>

 {/* Supply curve - Neon Cyan */}
 <motion.path
 d={supplyPath}
 fill="none"
 stroke={supplyColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.2 }}
 />
 <motion.text 
 x={xScale(92)} 
 y={yScale(98)} 
 fill={supplyColor} 
 fontSize="16" 
 fontWeight="700"
 fontFamily="serif"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1 }}
 >
 S
 </motion.text>

 {/* Y-intercept labels */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.2 }}
 >
 {/* Pmax label - Demand Y-intercept */}
 <text 
 x={margin.left - 16} 
 y={yScale(demandYIntercept.y) + 4} 
 fill={demandColor} 
 fontSize="12"
 fontWeight="600"
 textAnchor="end"
 fontStyle="italic"
 >
 P<tspan fontSize="9" baselineShift="sub">max</tspan>
 </text>
 <line 
 x1={margin.left - 4} 
 y1={yScale(demandYIntercept.y)} 
 x2={margin.left + 4} 
 y2={yScale(demandYIntercept.y)}
 stroke={demandColor}
 strokeWidth="2"
 />

 {/* Pmin label - Supply Y-intercept */}
 <text 
 x={margin.left - 16} 
 y={yScale(supplyYIntercept.y) + 4} 
 fill={supplyColor} 
 fontSize="12"
 fontWeight="600"
 textAnchor="end"
 fontStyle="italic"
 >
 P<tspan fontSize="9" baselineShift="sub">min</tspan>
 </text>
 <line 
 x1={margin.left - 4} 
 y1={yScale(supplyYIntercept.y)} 
 x2={margin.left + 4} 
 y2={yScale(supplyYIntercept.y)}
 stroke={supplyColor}
 strokeWidth="2"
 />
 </motion.g>

 {/* Equilibrium point */}
 <motion.circle
 cx={xScale(equilibrium.x)}
 cy={yScale(equilibrium.y)}
 r="8"
 fill={equilibriumColor}
 stroke="white"
 strokeWidth="2.5"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: { scale: 0 }}
 transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
 />
 <motion.text 
 x={xScale(equilibrium.x) + 16} 
 y={yScale(equilibrium.y) - 10} 
 fill={equilibriumColor} 
 fontSize="15" 
 fontWeight="700"
 fontFamily="serif"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.5 }}
 >
 E
 </motion.text>

 {/* Dashed lines to axes */}
 <motion.line
 x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)}
 x2={xScale(equilibrium.x)} y2={margin.top + chartHeight}
 stroke={equilibriumColor}
 strokeWidth="1.5"
 strokeDasharray="8,5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <motion.line
 x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)}
 x2={margin.left} y2={yScale(equilibrium.y)}
 stroke={equilibriumColor}
 strokeWidth="1.5"
 strokeDasharray="8,5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 
 {/* Equilibrium labels */}
 <motion.text 
 x={xScale(equilibrium.x)} 
 y={margin.top + chartHeight + 22} 
 fill={equilibriumColor} 
 fontSize="14" 
 textAnchor="middle"
 fontWeight="600"
 fontStyle="italic"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.7 }}
 >
 Q<tspan fontSize="10" baselineShift="sub">e</tspan>
 </motion.text>
 <motion.text 
 x={margin.left - 16} 
 y={yScale(equilibrium.y) + 5} 
 fill={equilibriumColor} 
 fontSize="14"
 fontWeight="600"
 fontStyle="italic"
 textAnchor="end"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.7 }}
 >
 P<tspan fontSize="10" baselineShift="sub">e</tspan>
 </motion.text>

 {/* Surplus labels inside triangles */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2 }}
 >
 {/* CS label */}
 <text
 x={xScale(12)}
 y={yScale(70)}
 fill="hsl(30, 15%, 15%)"
 fontSize="13"
 fontWeight="700"
 fontFamily="serif"
 >
 Consumer
 </text>
 <text
 x={xScale(12)}
 y={yScale(64)}
 fill="hsl(30, 15%, 15%)"
 fontSize="13"
 fontWeight="700"
 fontFamily="serif"
 >
 Surplus
 </text>

 {/* PS label */}
 <text
 x={xScale(12)}
 y={yScale(34)}
 fill="hsl(30, 15%, 15%)"
 fontSize="13"
 fontWeight="700"
 fontFamily="serif"
 >
 Producer
 </text>
 <text
 x={xScale(12)}
 y={yScale(28)}
 fill="hsl(30, 15%, 15%)"
 fontSize="13"
 fontWeight="700"
 fontFamily="serif"
 >
 Surplus
 </text>
 </motion.g>

 {/* Height annotations */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.2 }}
 >
 {/* CS height bracket */}
 <line 
 x1={xScale(-5)} y1={yScale(demandYIntercept.y)} 
 x2={xScale(-5)} y2={yScale(equilibrium.y)} 
 stroke="hsl(185, 100%, 40%)" strokeWidth="1.5" 
 />
 <line x1={xScale(-7)} y1={yScale(demandYIntercept.y)} x2={xScale(-3)} y2={yScale(demandYIntercept.y)} stroke="hsl(185, 100%, 40%)" strokeWidth="1.5" />
 <line x1={xScale(-7)} y1={yScale(equilibrium.y)} x2={xScale(-3)} y2={yScale(equilibrium.y)} stroke="hsl(185, 100%, 40%)" strokeWidth="1.5" />
 
 {/* PS height bracket */}
 <line 
 x1={xScale(-5)} y1={yScale(equilibrium.y)} 
 x2={xScale(-5)} y2={yScale(supplyYIntercept.y)} 
 stroke="hsl(185, 100%, 40%)" strokeWidth="1.5" 
 />
 <line x1={xScale(-7)} y1={yScale(supplyYIntercept.y)} x2={xScale(-3)} y2={yScale(supplyYIntercept.y)} stroke="hsl(185, 100%, 40%)" strokeWidth="1.5" />
 </motion.g>
 </svg>

 {/* Interactive tooltip */}
 {hoveredArea && (
 <motion.div 
 className="mt-4 p-4 glass-card rounded-lg"
 initial={{ opacity: 0, y: 5 }}
 animate={{ opacity: 1, y: 0 }}
 >
 {hoveredArea === 'consumer' && (
 <div className="text-sm text-muted-foreground text-justify">
 <strong className="text-cyan-400">Consumer Surplus (CS)</strong> = The triangular area bounded by the demand curve above, 
 the equilibrium price line below, and the price axis. Geometrically: 
 <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded mx-1">
 CS = ½ × Qe × (Pmax − Pe)
 </span>
 This represents the aggregate welfare gain to all consumers who would have paid more than Pe.
 </div>
 )}
 {hoveredArea === 'producer' && (
 <div className="text-sm text-muted-foreground text-justify">
 <strong className="text-magenta-400">Producer Surplus (PS)</strong> = The triangular area bounded by the supply curve below, 
 the equilibrium price line above, and the price axis. Geometrically: 
 <span className="font-mono text-magenta-400 bg-magenta-500/10 px-2 py-0.5 rounded mx-1">
 PS = ½ × Qe × (Pe − Pmin)
 </span>
 This represents the aggregate welfare gain to all producers who would have accepted less than Pe.
 </div>
 )}
 </motion.div>
 )}

 {/* LaTeX Formula Block */}
 <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 via-transparent to-cyan-500/10 border border-amber-500/20 rounded-lg">
 <p className="text-center font-mono text-lg text-amber-400">
 Social Welfare = CS + PS
 </p>
 <p className="text-center text-sm text-muted-foreground mt-2">
 At equilibrium, total economic welfare is <strong className="text-silver-bright">maximized</strong>.
 </p>
 </div>

 {/* Legend */}
 <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
 <div className="flex items-center gap-2">
 <div className="w-4 h-4 rounded" style={{ backgroundColor: consumerSurplusColor, opacity: 0.6 }} />
 <span className="text-muted-foreground">Consumer Surplus (below D, above P<sub>e</sub>)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-4 rounded" style={{ backgroundColor: producerSurplusColor, opacity: 0.6 }} />
 <span className="text-muted-foreground">Producer Surplus (above S, below P<sub>e</sub>)</span>
 </div>
 </div>
 </div>
 );
};

export default WelfareEconomicsSurplusDiagram;
