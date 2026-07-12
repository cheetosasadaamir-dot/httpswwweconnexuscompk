import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Geometrically Precise Labour Market Diagram
 * Exam Standard: Market sets W*, firm faces horizontal supply at that wage
 * Equilibrium points MUST align exactly with curve intersections
 */
const LaborMarketDiagram =  => {
 const containerRef = useRef<HTMLDivElement>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 observer.disconnect;
 }
 },
 { threshold: 0.3 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 // Market diagram calculations
 // Labour Supply: W = 20 + 0.8L (upward sloping)
 // Labour Demand (ΣMRP): W = 100 - 0.8L (downward sloping)
 // Equilibrium: 20 + 0.8L = 100 - 0.8L → 1.6L = 80 → L* = 50, W* = 60

 const marketEqL = 50;
 const marketEqW = 60;

 // Firm diagram - MRP curve for individual firm
 // Firm faces horizontal supply at market wage W*
 // MRP = 100 - 2L (steeper for individual firm)
 // Optimal hiring: W* = MRP → 60 = 100 - 2L → L* = 20

 const firmOptimalL = 20;

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1, 
 transition: { duration: 1.2, ease: "easeInOut" as const }
 }
 };

 // Scale functions for market diagram
 const mXScale = (l: number) => 50 + (l / 100) * 210;
 const mYScale = (w: number) => 220 - (w / 120) * 180;

 // Scale functions for firm diagram 
 const fXScale = (l: number) => 50 + (l / 50) * 210;
 const fYScale = (w: number) => 220 - (w / 120) * 180;

 return (
 <div ref={containerRef} className="w-full">
 <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
 Labour Market Equilibrium in Perfect Competition
 </h4>
 
 <div className="flex flex-col lg:flex-row gap-8">
 {/* Industry/Market Diagram */}
 <div className="flex-1">
 <p className="text-sm text-muted-foreground text-center mb-2">The Market (Industry)</p>
 <svg viewBox="0 0 300 260" className="w-full max-w-sm mx-auto">
 <defs>
 <pattern id="grid-labor-market" width="30" height="25" patternUnits="userSpaceOnUse">
 <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
 </pattern>
 <marker id="arrow-labor" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--silver))" />
 </marker>
 </defs>
 <rect x="50" y="20" width="220" height="200" fill="url(#grid-labor-market)" />
 
 {/* Axes */}
 <motion.line
 x1="50" y1="220" x2="275" y2="220"
 stroke="hsl(var(--silver))" strokeWidth="2"
 markerEnd="url(#arrow-labor)"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="50" y1="220" x2="50" y2="25"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <polygon points="50,25 46,37 54,37" fill="hsl(var(--silver))" />
 
 <text x="160" y="250" textAnchor="middle" className="fill-muted-foreground text-xs">Number of Workers (L)</text>
 <text x="22" y="120" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 22, 120)">Wage Rate (W)</text>
 
 {/* Labor Supply (upward sloping): W = 20 + 0.8L */}
 <motion.line
 x1={mXScale(0)} y1={mYScale(20)}
 x2={mXScale(100)} y2={mYScale(100)}
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={mXScale(95)} y={mYScale(98)} className="fill-[hsl(var(--cambridge-orange))] text-sm font-medium">SL</text>
 
 {/* Labor Demand (ΣMRP - downward sloping): W = 100 - 0.8L */}
 <motion.line
 x1={mXScale(0)} y1={mYScale(100)}
 x2={mXScale(100)} y2={mYScale(20)}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={mXScale(95)} y={mYScale(22)} className="fill-[hsl(var(--cambridge-cyan))] text-xs font-medium">DL = ΣMRP</text>
 
 {/* Equilibrium - PRECISELY at intersection */}
 <motion.circle
 cx={mXScale(marketEqL)} cy={mYScale(marketEqW)}
 r="6"
 fill="hsl(var(--accent))"
 stroke="white"
 strokeWidth="1.5"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.2, duration: 0.3 }}
 />
 
 {/* Equilibrium Wage - horizontal dashed line */}
 <motion.line
 x1="50" y1={mYScale(marketEqW)} x2={mXScale(marketEqL)} y2={mYScale(marketEqW)}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="40" y={mYScale(marketEqW) + 4} textAnchor="end" className="fill-amber-400 text-xs font-medium">W*</text>
 
 {/* Equilibrium Employment - vertical dashed line */}
 <motion.line
 x1={mXScale(marketEqL)} y1={mYScale(marketEqW)} x2={mXScale(marketEqL)} y2="220"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x={mXScale(marketEqL)} y="235" textAnchor="middle" className="fill-amber-400 text-xs font-medium">N*</text>
 </svg>
 </div>

 {/* Firm Diagram */}
 <div className="flex-1">
 <p className="text-sm text-muted-foreground text-center mb-2">The Firm</p>
 <svg viewBox="0 0 300 260" className="w-full max-w-sm mx-auto">
 <rect x="50" y="20" width="220" height="200" fill="url(#grid-labor-market)" />
 
 {/* Axes */}
 <motion.line
 x1="50" y1="220" x2="275" y2="220"
 stroke="hsl(var(--silver))" strokeWidth="2"
 markerEnd="url(#arrow-labor)"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="50" y1="220" x2="50" y2="25"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <polygon points="50,25 46,37 54,37" fill="hsl(var(--silver))" />
 
 <text x="160" y="250" textAnchor="middle" className="fill-muted-foreground text-xs">Units of Labor (L)</text>
 <text x="22" y="120" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 22, 120)">Wage/MRP</text>
 
 {/* Horizontal Supply = W* = MFC = AFC */}
 <motion.line
 x1="50" y1={fYScale(marketEqW)} x2="265" y2={fYScale(marketEqW)}
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 0.8, duration: 1 }}
 />
 <text x="270" y={fYScale(marketEqW) - 5} className="fill-[hsl(var(--cambridge-orange))] text-[9px]">W* = MFC = AFC = S</text>
 
 {/* MRP Curve (firm's demand): W = 100 - 2L */}
 <motion.line
 x1={fXScale(0)} y1={fYScale(100)}
 x2={fXScale(50)} y2={fYScale(0)}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={fXScale(48)} y={fYScale(5)} className="fill-[hsl(var(--cambridge-cyan))] text-sm font-medium">MRP = DL</text>
 
 {/* Equilibrium point - where MRP = W* */}
 <motion.circle
 cx={fXScale(firmOptimalL)} cy={fYScale(marketEqW)}
 r="6"
 fill="hsl(var(--accent))"
 stroke="white"
 strokeWidth="1.5"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.3 }}
 />
 
 {/* Optimal Employment - vertical dashed line */}
 <motion.line
 x1={fXScale(firmOptimalL)} y1={fYScale(marketEqW)} x2={fXScale(firmOptimalL)} y2="220"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.8, duration: 0.5 }}
 />
 <text x={fXScale(firmOptimalL)} y="235" textAnchor="middle" className="fill-amber-400 text-xs font-medium">L*</text>
 
 {/* W* label */}
 <text x="40" y={fYScale(marketEqW) + 4} textAnchor="end" className="fill-amber-400 text-xs font-medium">W*</text>

 {/* MRP = W annotation */}
 <motion.text
 x={fXScale(firmOptimalL) + 10} y={fYScale(marketEqW) - 10}
 className="fill-muted-foreground text-[9px]"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 2 }}
 >
 MRP = W*
 </motion.text>
 </svg>
 </div>
 </div>

 <div className="mt-4 grid md:grid-cols-2 gap-4">
 <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
 <p className="text-blue-200 text-xs">
 <strong>Market:</strong> Equilibrium wage (W*) is set where labour supply equals labour demand (ΣMRP of all firms). 
 At W* = 60, total employment N* = 50.
 </p>
 </div>
 <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
 <p className="text-green-200 text-xs">
 <strong>Firm:</strong> Takes W* as given (price taker). Hires where MRP = W* (profit maximization). 
 At W* = 60, optimal hiring L* = 20. Supply is perfectly elastic.
 </p>
 </div>
 </div>
 </div>
 );
};

export default LaborMarketDiagram;
