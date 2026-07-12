import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MonopolyDiagramProps {
 title?: string;
}

/**
 * Accurate Monopoly Diagram
 * - MR is twice as steep as AR (intercepts x-axis at half the AR intercept)
 * - MC intersects AC at its minimum point
 * - Profit rectangle between AR and AC at profit-maximizing output
 */
const MonopolyDiagram = ({ title }: MonopolyDiagramProps) => {
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
 const height = 420;
 const margin = { top: 40, right: 50, bottom: 60, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Cambridge standard colors
 const demandColor = 'hsl(185, 100%, 50%)'; // Electric Cyan - AR/D
 const mrColor = 'hsl(300, 100%, 60%)'; // Neon Magenta - MR
 const mcColor = 'hsl(142, 76%, 45%)'; // Green - MC
 const acColor = 'hsl(25, 95%, 55%)'; // Orange - AC
 const profitColor = 'hsl(45, 93%, 55%)'; // Gold - Profit area
 const axisColor = 'hsl(220, 14%, 75%)';
 const gridColor = 'hsl(220, 14%, 20%)';
 const labelColor = 'hsl(220, 14%, 90%)';

 // Key economic points (scaled to chart)
 // AR curve: starts at P=200, ends at Q=200 (linear demand)
 // MR curve: starts at P=200, ends at Q=100 (twice as steep - intercepts at half)
 // Profit-max output Qm = 60 (where MR = MC)
 
 const xScale = (q: number) => margin.left + (q / 200) * chartWidth;
 const yScale = (p: number) => margin.top + chartHeight - (p / 220) * chartHeight;

 // AR (Demand) curve - linear from (0, 200) to (200, 0)
 const arPath = `M ${xScale(0)} ${yScale(200)} L ${xScale(200)} ${yScale(0)}`;
 
 // MR curve - linear from (0, 200) to (100, 0) - TWICE AS STEEP
 const mrPath = `M ${xScale(0)} ${yScale(200)} L ${xScale(100)} ${yScale(0)}`;

 // Key output levels
 const qm = 60; // Profit-max output where MR = MC
 const priceAtQm = 200 - qm; // = 140 (price on AR curve)
 const mrAtQm = 200 - 2 * qm; // = 80 (MR at Qm)
 
 // AC at Qm (on AC curve) - set to 90 for visible profit
 const acAtQm = 90;
 
 // MC curve - U-shaped, intersects AC at AC minimum (around Q=80)
 // MC must pass through (Qm, mrAtQm) = (60, 80)
 const mcPath = `M ${xScale(10)} ${yScale(160)} 
 Q ${xScale(30)} ${yScale(60)}, ${xScale(50)} ${yScale(70)} 
 Q ${xScale(60)} ${yScale(80)}, ${xScale(70)} ${yScale(95)}
 Q ${xScale(90)} ${yScale(130)}, ${xScale(120)} ${yScale(180)}`;

 // AC curve - U-shaped, minimum at approximately Q=80
 // MC must intersect AC at AC's minimum
 const acMinQ = 80;
 const acMinP = 85;
 const acPath = `M ${xScale(15)} ${yScale(180)} 
 Q ${xScale(40)} ${yScale(95)}, ${xScale(60)} ${yScale(acAtQm)}
 Q ${xScale(80)} ${yScale(acMinP)}, ${xScale(100)} ${yScale(95)}
 Q ${xScale(130)} ${yScale(130)}, ${xScale(160)} ${yScale(170)}`;

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1.5, ease: "easeInOut" as const }
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
 {[0, 1, 2, 3, 4, 5, 6].map((i) => (
 <line 
 key={`h-${i}`} 
 x1={margin.left} 
 y1={margin.top + (i * chartHeight) / 6} 
 x2={margin.left + chartWidth} 
 y2={margin.top + (i * chartHeight) / 6} 
 />
 ))}
 {[0, 1, 2, 3, 4, 5].map((i) => (
 <line 
 key={`v-${i}`} 
 x1={margin.left + (i * chartWidth) / 5} 
 y1={margin.top} 
 x2={margin.left + (i * chartWidth) / 5} 
 y2={margin.top + chartHeight} 
 />
 ))}
 </g>

 {/* Supernormal Profit Rectangle - shaded area between P and AC at Qm */}
 <motion.rect
 x={margin.left}
 y={yScale(priceAtQm)}
 width={xScale(qm) - margin.left}
 height={yScale(acAtQm) - yScale(priceAtQm)}
 fill={profitColor}
 opacity="0.15"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.15 }: { opacity: 0 }}
 transition={{ delay: 2.5, duration: 0.8 }}
 />
 <motion.rect
 x={margin.left}
 y={yScale(priceAtQm)}
 width={xScale(qm) - margin.left}
 height={yScale(acAtQm) - yScale(priceAtQm)}
 fill="none"
 stroke={profitColor}
 strokeWidth="2"
 strokeDasharray="6,4"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.5, duration: 0.8 }}
 />

 {/* Axes */}
 <defs>
 <marker id="arrow-monopoly" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
 </marker>
 </defs>
 
 <line 
 x1={margin.left} y1={margin.top} 
 x2={margin.left} y2={margin.top + chartHeight} 
 stroke={axisColor} strokeWidth="2" 
 />
 <line 
 x1={margin.left} y1={margin.top + chartHeight} 
 x2={margin.left + chartWidth} y2={margin.top + chartHeight} 
 stroke={axisColor} strokeWidth="2" 
 markerEnd="url(#arrow-monopoly)"
 />
 <line 
 x1={margin.left} y1={margin.top + chartHeight} 
 x2={margin.left} y2={margin.top - 10} 
 stroke={axisColor} strokeWidth="2" 
 markerEnd="url(#arrow-monopoly)"
 />

 {/* Axis labels - Cambridge standard */}
 <text x={margin.left - 45} y={margin.top + chartHeight / 2} fill={labelColor} fontSize="13" fontFamily="serif" transform={`rotate(-90, ${margin.left - 45}, ${margin.top + chartHeight / 2})`} textAnchor="middle">
 Cost / Revenue ($)
 </text>
 <text x={margin.left + chartWidth / 2} y={height - 15} fill={labelColor} fontSize="14" fontFamily="serif" textAnchor="middle">
 Output (Q)
 </text>
 <text x={margin.left - 8} y={margin.top + chartHeight + 18} fill={labelColor} fontSize="11">0</text>

 {/* AR/D curve (Demand = Average Revenue) - LINEAR */}
 <motion.path
 d={arPath}
 fill="none"
 stroke={demandColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <motion.text 
 x={xScale(195)} 
 y={yScale(0) + 18} 
 fill={demandColor} 
 fontSize="13" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.2 }}
 >
 AR = D
 </motion.text>

 {/* MR curve - TWICE AS STEEP, intercepts x-axis at HALF */}
 <motion.path
 d={mrPath}
 fill="none"
 stroke={mrColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.3 }}
 />
 <motion.text 
 x={xScale(100) + 10} 
 y={yScale(0) + 5} 
 fill={mrColor} 
 fontSize="13" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.5 }}
 >
 MR
 </motion.text>

 {/* MC curve - U-shaped */}
 <motion.path
 d={mcPath}
 fill="none"
 stroke={mcColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.6 }}
 />
 <motion.text 
 x={xScale(125)} 
 y={yScale(185)} 
 fill={mcColor} 
 fontSize="13" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.8 }}
 >
 MC
 </motion.text>

 {/* AC curve - U-shaped, MC intersects at minimum */}
 <motion.path
 d={acPath}
 fill="none"
 stroke={acColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.9 }}
 />
 <motion.text 
 x={xScale(165)} 
 y={yScale(175)} 
 fill={acColor} 
 fontSize="13" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.1 }}
 >
 AC
 </motion.text>

 {/* MC = AC intersection point (at AC minimum) */}
 <motion.circle 
 cx={xScale(acMinQ)} 
 cy={yScale(acMinP)} 
 r="5" 
 fill={mcColor}
 stroke="white"
 strokeWidth="1.5"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 2.0, type: "spring" }}
 />
 <motion.text 
 x={xScale(acMinQ) + 8} 
 y={yScale(acMinP) - 8} 
 fill={labelColor} 
 fontSize="10" 
 fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.2 }}
 >
 MC = AC
 </motion.text>

 {/* MC = MR intersection point (profit max) */}
 <motion.circle 
 cx={xScale(qm)} 
 cy={yScale(mrAtQm)} 
 r="6" 
 fill={mcColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 2.2, type: "spring" }}
 />

 {/* Vertical line from MC=MR up to AR curve */}
 <motion.line 
 x1={xScale(qm)} y1={yScale(mrAtQm)} x2={xScale(qm)} y2={yScale(priceAtQm)} 
 stroke={labelColor} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 2.4, duration: 0.5 }}
 />

 {/* Price point on AR curve */}
 <motion.circle 
 cx={xScale(qm)} 
 cy={yScale(priceAtQm)} 
 r="7" 
 fill={profitColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 2.6, type: "spring" }}
 />

 {/* Dashed lines to axes */}
 <motion.line 
 x1={xScale(qm)} y1={yScale(priceAtQm)} x2={xScale(qm)} y2={margin.top + chartHeight} 
 stroke={profitColor} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 2.7, duration: 0.5 }}
 />
 <motion.line 
 x1={margin.left} y1={yScale(priceAtQm)} x2={xScale(qm)} y2={yScale(priceAtQm)} 
 stroke={profitColor} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 2.7, duration: 0.5 }}
 />
 <motion.line 
 x1={margin.left} y1={yScale(acAtQm)} x2={xScale(qm)} y2={yScale(acAtQm)} 
 stroke={acColor} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 2.7, duration: 0.5 }}
 />

 {/* AC point at Qm */}
 <motion.circle 
 cx={xScale(qm)} 
 cy={yScale(acAtQm)} 
 r="5" 
 fill={acColor}
 stroke="white"
 strokeWidth="1.5"
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 2.6, type: "spring" }}
 />

 {/* Labels on axes */}
 <motion.text 
 x={margin.left - 12} 
 y={yScale(priceAtQm) + 4} 
 fill={profitColor} 
 fontSize="12" 
 textAnchor="end"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.9 }}
 >
 Pm
 </motion.text>
 <motion.text 
 x={margin.left - 12} 
 y={yScale(acAtQm) + 4} 
 fill={acColor} 
 fontSize="11" 
 textAnchor="end"
 fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.9 }}
 >
 AC
 </motion.text>
 <motion.text 
 x={xScale(qm)} 
 y={margin.top + chartHeight + 16} 
 fill={profitColor} 
 fontSize="12" 
 textAnchor="middle"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.9 }}
 >
 Qm
 </motion.text>

 {/* Supernormal Profit label */}
 <motion.text 
 x={(margin.left + xScale(qm)) / 2} 
 y={(yScale(priceAtQm) + yScale(acAtQm)) / 2 - 5} 
 fill={profitColor} 
 fontSize="11" 
 textAnchor="middle"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.0 }}
 >
 Supernormal
 </motion.text>
 <motion.text 
 x={(margin.left + xScale(qm)) / 2} 
 y={(yScale(priceAtQm) + yScale(acAtQm)) / 2 + 8} 
 fill={profitColor} 
 fontSize="11" 
 textAnchor="middle"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.0 }}
 >
 Profit
 </motion.text>

 {/* MC = MR annotation */}
 <motion.text 
 x={xScale(qm) + 12} 
 y={yScale(mrAtQm) + 4} 
 fill={mcColor} 
 fontSize="10" 
 fontWeight="500"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2.5 }}
 >
 MC = MR
 </motion.text>

 {/* Key relationship annotation */}
 <motion.rect
 x={margin.left + chartWidth - 140}
 y={margin.top + 10}
 width="130"
 height="45"
 rx="6"
 fill="hsla(220, 14%, 10%, 0.9)"
 stroke={mrColor}
 strokeWidth="1"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.2 }}
 />
 <motion.text 
 x={margin.left + chartWidth - 75} 
 y={margin.top + 28} 
 fill={labelColor} 
 fontSize="9" 
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.3 }}
 >
 MR is twice as steep as AR
 </motion.text>
 <motion.text 
 x={margin.left + chartWidth - 75} 
 y={margin.top + 42} 
 fill={labelColor} 
 fontSize="9" 
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.3 }}
 >
 (x-intercept at ½ of AR)
 </motion.text>
 </svg>

 {/* Legend */}
 <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: demandColor }} />
 <span>AR = D (Demand)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mrColor }} />
 <span>MR (Marginal Revenue)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mcColor }} />
 <span>MC (Marginal Cost)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: acColor }} />
 <span>AC (Average Cost)</span>
 </div>
 </div>

 {/* Academic explanation */}
 <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
 <p className="text-sm text-muted-foreground">
 <strong className="text-foreground">Cambridge Key:</strong> The monopolist maximizes profit where $MC = MR$, 
 then reads the price from the AR curve. The MR curve has <em>twice the gradient</em> of the AR curve 
 and intersects the quantity axis at exactly half the distance. Supernormal profit = $(P_m - AC) \times Q_m$.
 </p>
 </div>
 </div>
 );
};

export default MonopolyDiagram;
