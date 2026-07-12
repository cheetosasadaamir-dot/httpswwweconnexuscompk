import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface DemandSupplyDiagramProps {
 title?: string;
 showShift?: 'demand-increase' | 'supply-increase' | 'both' | 'none';
}

const DemandSupplyDiagram = ({ title, showShift = 'demand-increase' }: DemandSupplyDiagramProps) => {
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

 // Cambridge standard colors
 const primaryCurve = 'hsl(185 100% 50%)'; // Electric Cyan
 const shiftedCurve = 'hsl(300 100% 60%)'; // Neon Magenta
 const equilibriumPoint = 'hsl(45 93% 55%)'; // Gold
 const axisColor = 'hsl(220 14% 75%)';
 const gridColor = 'hsl(220 14% 20%)';
 const labelColor = 'hsl(220 14% 90%)';

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
 <svg viewBox="0 0 500 400" className="w-full h-auto">
 {/* Grid */}
 <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
 {[80, 120, 160, 200, 240, 280, 320].map((y) => (
 <line key={`h-${y}`} x1="80" y1={y} x2="450" y2={y} />
 ))}
 {[120, 180, 240, 300, 360, 420].map((x) => (
 <line key={`v-${x}`} x1={x} y1="60" x2={x} y2="350" />
 ))}
 </g>

 {/* Axes */}
 <g stroke={axisColor} strokeWidth="2">
 <line x1="80" y1="60" x2="80" y2="350" />
 <line x1="80" y1="350" x2="450" y2="350" />
 <polygon points="80,60 75,72 85,72" fill={axisColor} />
 <polygon points="450,350 438,345 438,355" fill={axisColor} />
 </g>

 {/* Axis labels - Cambridge standard */}
 <text x="30" y="205" fill={labelColor} fontSize="16" fontFamily="Cinzel" transform="rotate(-90, 30, 205)">
 Price (P)
 </text>
 <text x="265" y="390" fill={labelColor} fontSize="16" fontFamily="Cinzel" textAnchor="middle">
 Quantity (Q)
 </text>

 {/* Original Supply curve - S */}
 <motion.path
 d="M 100 320 Q 200 280, 280 200 Q 340 140, 420 80"
 fill="none"
 stroke={primaryCurve}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <motion.text 
 x="430" 
 y="75" 
 fill={primaryCurve} 
 fontSize="18" 
 fontFamily="Cinzel"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.2 }}
 >
 S
 </motion.text>

 {/* Original Demand curve - D */}
 <motion.path
 d="M 100 80 Q 180 140, 260 200 Q 340 260, 420 320"
 fill="none"
 stroke={primaryCurve}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <motion.text 
 x="430" 
 y="325" 
 fill={primaryCurve} 
 fontSize="18" 
 fontFamily="Cinzel"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.2 }}
 >
 D
 </motion.text>

 {/* Original Equilibrium E₁ */}
 <motion.circle 
 cx="260" 
 cy="200" 
 r="8" 
 fill={equilibriumPoint}
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 1.5, type: "spring" }}
 />
 <motion.text 
 x="275" 
 y="195" 
 fill={equilibriumPoint} 
 fontSize="14" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.6 }}
 >
 E₁
 </motion.text>

 {/* Dashed lines to axes from E₁ */}
 <motion.line 
 x1="260" y1="200" x2="260" y2="350" 
 stroke={axisColor} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.7, duration: 0.5 }}
 />
 <motion.line 
 x1="80" y1="200" x2="260" y2="200" 
 stroke={axisColor} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.7, duration: 0.5 }}
 />

 {/* P₁ and Q₁ labels */}
 <motion.text 
 x="60" 
 y="205" 
 fill={labelColor} 
 fontSize="14" 
 textAnchor="end"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.8 }}
 >
 P₁
 </motion.text>
 <motion.text 
 x="260" 
 y="370" 
 fill={labelColor} 
 fontSize="14" 
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.8 }}
 >
 Q₁
 </motion.text>

 {/* Shifted Demand curve D₁ (if showing demand increase) */}
 {(showShift === 'demand-increase' || showShift === 'both') && (
 <>
 <motion.path
 d="M 140 80 Q 220 140, 300 200 Q 380 260, 450 310"
 fill="none"
 stroke={shiftedCurve}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 2 }}
 />
 <motion.text 
 x="455" 
 y="315" 
 fill={shiftedCurve} 
 fontSize="18" 
 fontFamily="Cinzel"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3 }}
 >
 D₁
 </motion.text>

 {/* New Equilibrium E₂ */}
 <motion.circle 
 cx="310" 
 cy="165" 
 r="8" 
 fill={shiftedCurve}
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 3.2, type: "spring" }}
 />
 <motion.text 
 x="325" 
 y="160" 
 fill={shiftedCurve} 
 fontSize="14" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.3 }}
 >
 E₂
 </motion.text>

 {/* Arrow showing shift */}
 <motion.path
 d="M 270 260 L 310 260"
 fill="none"
 stroke={shiftedCurve}
 strokeWidth="2"
 markerEnd="url(#arrowhead-magenta)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={isVisible ? { pathLength: 1, opacity: 1 }: { pathLength: 0, opacity: 0 }}
 transition={{ delay: 2.5, duration: 0.5 }}
 />

 {/* Dashed lines to axes from E₂ */}
 <motion.line 
 x1="310" y1="165" x2="310" y2="350" 
 stroke={shiftedCurve} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 opacity="0.7"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 3.4, duration: 0.5 }}
 />
 <motion.line 
 x1="80" y1="165" x2="310" y2="165" 
 stroke={shiftedCurve} 
 strokeWidth="1.5" 
 strokeDasharray="6,4"
 opacity="0.7"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 3.4, duration: 0.5 }}
 />

 {/* P₂ and Q₂ labels */}
 <motion.text 
 x="60" 
 y="170" 
 fill={shiftedCurve} 
 fontSize="14" 
 textAnchor="end"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.5 }}
 >
 P₂
 </motion.text>
 <motion.text 
 x="310" 
 y="370" 
 fill={shiftedCurve} 
 fontSize="14" 
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 3.5 }}
 >
 Q₂
 </motion.text>
 </>
 )}

 {/* Arrow marker definitions */}
 <defs>
 <marker id="arrowhead-magenta" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={shiftedCurve} />
 </marker>
 </defs>
 </svg>

 {/* Legend */}
 <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryCurve }} />
 <span>Original Curves (D, S)</span>
 </div>
 {(showShift === 'demand-increase' || showShift === 'both') && (
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: shiftedCurve }} />
 <span>Shifted Curve (D₁)</span>
 </div>
 )}
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: equilibriumPoint }} />
 <span>Equilibrium (E₁ → E₂)</span>
 </div>
 </div>
 </div>
 );
};

export default DemandSupplyDiagram;
