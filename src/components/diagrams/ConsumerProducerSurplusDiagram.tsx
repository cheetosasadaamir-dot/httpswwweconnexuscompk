import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ConsumerProducerSurplusDiagramProps {
 title?: string;
 showLabels?: boolean;
}

/**
 * Geometrically Precise Consumer/Producer Surplus Diagram
 * Exam Standard: Surplus triangles MUST align exactly with equilibrium intersection
 * Mathematical calculations ensure P* and Q* align with curve intersections
 */
const ConsumerProducerSurplusDiagram = ({ 
 title = "Consumer & Producer Surplus",
 showLabels = true 
}: ConsumerProducerSurplusDiagramProps) => {
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

 // SVG dimensions and margins
 const width = 500;
 const height = 400;
 const margin = { top: 50, right: 40, bottom: 60, left: 70 };
 const chartW = width - margin.left - margin.right;
 const chartH = height - margin.top - margin.bottom;

 // Scale functions
 const xScale = (q: number) => margin.left + (q / 100) * chartW;
 const yScale = (p: number) => margin.top + chartH - (p / 100) * chartH;

 // Cambridge standard colors
 const demandColor = 'hsl(185 100% 50%)'; // Neon Cyan
 const supplyColor = 'hsl(300 100% 60%)'; // Magenta
 const goldColor = 'hsl(45 93% 55%)';
 const consumerSurplusColor = 'hsl(185 100% 50%)';
 const producerSurplusColor = 'hsl(142 76% 45%)';
 const axisColor = 'hsl(220 14% 75%)';
 const gridColor = 'hsl(220 14% 20%)';

 // LINEAR CURVES with precise mathematical definitions
 // Demand: P = 90 - 0.8Q (intercept at P=90, Q=0)
 // Supply: P = 10 + 0.8Q (intercept at P=10, Q=0)
 // Equilibrium: 90 - 0.8Q = 10 + 0.8Q → 1.6Q = 80 → Q* = 50, P* = 50

 const demandIntercept = 90; // P when Q=0
 const supplyIntercept = 10; // P when Q=0
 const equilibriumQ = 50;
 const equilibriumP = 50;

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
 <defs>
 <marker id="arrowCS" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
 <path d="M0,0 L0,6 L9,3 z" fill={axisColor} />
 </marker>
 </defs>

 {/* Grid */}
 <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
 {[20, 40, 60, 80].map((tick) => (
 <line key={`h-${tick}`} x1={margin.left} y1={yScale(tick)} x2={width - margin.right} y2={yScale(tick)} />
 ))}
 {[20, 40, 60, 80].map((tick) => (
 <line key={`v-${tick}`} x1={xScale(tick)} y1={margin.top} x2={xScale(tick)} y2={height - margin.bottom} />
 ))}
 </g>

 {/* Consumer Surplus Triangle - PRECISELY aligned */}
 {/* Vertices: (0, demandIntercept), (Q*, P*), (0, P*) */}
 <motion.polygon
 points={`
 ${xScale(0)},${yScale(demandIntercept)}
 ${xScale(equilibriumQ)},${yScale(equilibriumP)}
 ${xScale(0)},${yScale(equilibriumP)}
 `}
 fill={consumerSurplusColor}
 opacity={0.25}
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.25 }: { opacity: 0 }}
 transition={{ delay: 1.5, duration: 0.5 }}
 />

 {/* Producer Surplus Triangle - PRECISELY aligned */}
 {/* Vertices: (0, supplyIntercept), (Q*, P*), (0, P*) */}
 <motion.polygon
 points={`
 ${xScale(0)},${yScale(supplyIntercept)}
 ${xScale(equilibriumQ)},${yScale(equilibriumP)}
 ${xScale(0)},${yScale(equilibriumP)}
 `}
 fill={producerSurplusColor}
 opacity={0.25}
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.25 }: { opacity: 0 }}
 transition={{ delay: 1.7, duration: 0.5 }}
 />

 {/* Axes */}
 <line
 x1={margin.left}
 y1={margin.top}
 x2={margin.left}
 y2={height - margin.bottom}
 stroke={axisColor}
 strokeWidth={2}
 />
 <line
 x1={margin.left}
 y1={height - margin.bottom}
 x2={width - margin.right}
 y2={height - margin.bottom}
 stroke={axisColor}
 strokeWidth={2}
 markerEnd="url(#arrowCS)"
 />
 <polygon points={`${margin.left},${margin.top} ${margin.left - 5},${margin.top + 12} ${margin.left + 5},${margin.top + 12}`} fill={axisColor} />

 {/* Demand Curve - LINEAR: P = 90 - 0.8Q */}
 <motion.line
 x1={xScale(0)}
 y1={yScale(demandIntercept)}
 x2={xScale(100)}
 y2={yScale(10)}
 stroke={demandColor}
 strokeWidth={3}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />

 {/* Supply Curve - LINEAR: P = 10 + 0.8Q */}
 <motion.line
 x1={xScale(0)}
 y1={yScale(supplyIntercept)}
 x2={xScale(100)}
 y2={yScale(90)}
 stroke={supplyColor}
 strokeWidth={3}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.2 }}
 />

 {/* Equilibrium dashed lines - ALIGNED with intersection */}
 <motion.line
 x1={xScale(equilibriumQ)}
 y1={yScale(equilibriumP)}
 x2={xScale(equilibriumQ)}
 y2={height - margin.bottom}
 stroke={goldColor}
 strokeWidth={1.5}
 strokeDasharray="6,4"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1, duration: 0.4 }}
 />
 <motion.line
 x1={margin.left}
 y1={yScale(equilibriumP)}
 x2={xScale(equilibriumQ)}
 y2={yScale(equilibriumP)}
 stroke={goldColor}
 strokeWidth={1.5}
 strokeDasharray="6,4"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1, duration: 0.4 }}
 />

 {/* Equilibrium Point - PRECISELY at intersection */}
 <motion.circle
 cx={xScale(equilibriumQ)}
 cy={yScale(equilibriumP)}
 r={7}
 fill={goldColor}
 stroke="white"
 strokeWidth={2}
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: { scale: 0 }}
 transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
 />

 {/* Labels */}
 {showLabels && (
 <>
 {/* Axis Labels */}
 <text x={20} y={(margin.top + height - margin.bottom) / 2} fill={axisColor} fontSize="13" fontFamily="serif" transform={`rotate(-90, 20, ${(margin.top + height - margin.bottom) / 2})`} textAnchor="middle">
 Price (P)
 </text>
 <text x={(margin.left + width - margin.right) / 2} y={height - 15} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle">
 Quantity (Q)
 </text>

 {/* Equilibrium Labels */}
 <motion.text 
 x={xScale(equilibriumQ) + 12} y={yScale(equilibriumP) - 8} 
 fill={goldColor} fontSize="13" fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.3 }}
 >
 E
 </motion.text>
 <motion.text 
 x={margin.left - 12} y={yScale(equilibriumP) + 4} 
 fill={axisColor} fontSize="12" textAnchor="end"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.3 }}
 >
 P*
 </motion.text>
 <motion.text 
 x={xScale(equilibriumQ)} y={height - margin.bottom + 18} 
 fill={axisColor} fontSize="12" textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.3 }}
 >
 Q*
 </motion.text>

 {/* Curve Labels */}
 <motion.text 
 x={xScale(95)} y={yScale(14)} 
 fill={demandColor} fontSize="13" fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.4 }}
 >
 D = AR
 </motion.text>
 <motion.text 
 x={xScale(95)} y={yScale(88)} 
 fill={supplyColor} fontSize="13" fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.4 }}
 >
 S = MC
 </motion.text>

 {/* Surplus Labels - centered in triangles */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.8 }}
 >
 <text
 x={xScale(15)}
 y={yScale((demandIntercept + equilibriumP) / 2)}
 fill={consumerSurplusColor}
 fontSize="10"
 fontWeight="600"
 textAnchor="middle"
 >
 Consumer
 </text>
 <text
 x={xScale(15)}
 y={yScale((demandIntercept + equilibriumP) / 2) + 12}
 fill={consumerSurplusColor}
 fontSize="10"
 fontWeight="600"
 textAnchor="middle"
 >
 Surplus
 </text>
 </motion.g>
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 2 }}
 >
 <text
 x={xScale(15)}
 y={yScale((supplyIntercept + equilibriumP) / 2)}
 fill={producerSurplusColor}
 fontSize="10"
 fontWeight="600"
 textAnchor="middle"
 >
 Producer
 </text>
 <text
 x={xScale(15)}
 y={yScale((supplyIntercept + equilibriumP) / 2) + 12}
 fill={producerSurplusColor}
 fontSize="10"
 fontWeight="600"
 textAnchor="middle"
 >
 Surplus
 </text>
 </motion.g>

 {/* Origin */}
 <text x={margin.left - 10} y={height - margin.bottom + 18} fill={axisColor} fontSize="11" textAnchor="middle">0</text>
 </>
 )}
 </svg>
 </div>
 );
};

export default ConsumerProducerSurplusDiagram;
