import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PerfectCompetitionDiagram =  => {
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
 <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
 Firm's Demand Curve in Perfect Competition
 </h4>
 
 <div className="flex flex-col lg:flex-row gap-8">
 {/* Market Diagram */}
 <div className="flex-1">
 <p className="text-sm text-muted-foreground text-center mb-2">The Market</p>
 <svg viewBox="0 0 300 250" className="w-full max-w-sm mx-auto">
 {/* Grid */}
 <defs>
 <pattern id="grid-pc-market" width="30" height="25" patternUnits="userSpaceOnUse">
 <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
 </pattern>
 </defs>
 <rect x="50" y="20" width="230" height="200" fill="url(#grid-pc-market)" />
 
 {/* Axes */}
 <motion.line
 x1="50" y1="220" x2="280" y2="220"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="50" y1="220" x2="50" y2="20"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 
 {/* Axis Labels */}
 <text x="165" y="245" textAnchor="middle" className="fill-muted-foreground text-xs">Quantity</text>
 <text x="25" y="120" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 120)">Price</text>
 
 {/* Supply Curve */}
 <motion.path
 d="M 70 200 Q 150 120 260 50"
 fill="none"
 stroke="hsl(var(--secondary))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="265" y="45" className="fill-secondary text-sm font-medium">S</text>
 
 {/* Demand Curve */}
 <motion.path
 d="M 70 50 Q 150 120 260 200"
 fill="none"
 stroke="hsl(var(--primary))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="265" y="205" className="fill-primary text-sm font-medium">D</text>
 
 {/* Equilibrium */}
 <motion.circle
 cx="165" cy="120"
 r="6"
 fill="hsl(var(--accent))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.2, duration: 0.3 }}
 />
 
 {/* Equilibrium Price Line */}
 <motion.line
 x1="50" y1="120" x2="165" y2="120"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1"
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="40" y="125" textAnchor="end" className="fill-muted-foreground text-xs">P*</text>
 
 {/* Equilibrium Quantity */}
 <motion.line
 x1="165" y1="120" x2="165" y2="220"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1"
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="165" y="235" textAnchor="middle" className="fill-muted-foreground text-xs">Q*</text>
 </svg>
 </div>

 {/* Firm Diagram */}
 <div className="flex-1">
 <p className="text-sm text-muted-foreground text-center mb-2">The Firm</p>
 <svg viewBox="0 0 300 250" className="w-full max-w-sm mx-auto">
 {/* Grid */}
 <rect x="50" y="20" width="230" height="200" fill="url(#grid-pc-market)" />
 
 {/* Axes */}
 <motion.line
 x1="50" y1="220" x2="280" y2="220"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="50" y1="220" x2="50" y2="20"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 
 {/* Axis Labels */}
 <text x="165" y="245" textAnchor="middle" className="fill-muted-foreground text-xs">Quantity</text>
 <text x="25" y="120" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 120)">P, MR, AR</text>
 
 {/* Horizontal Demand/Price Line (P = D = MR = AR) */}
 <motion.line
 x1="50" y1="120" x2="260" y2="120"
 stroke="hsl(var(--primary))"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 0.8, duration: 1 }}
 />
 <text x="265" y="115" className="fill-primary text-xs">P = D = MR = AR</text>
 
 {/* Price Label */}
 <text x="40" y="125" textAnchor="end" className="fill-muted-foreground text-xs">P*</text>
 </svg>
 </div>
 </div>

 <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
 <p className="text-muted-foreground text-sm text-center">
 The market determines the equilibrium price (P*). Each firm faces a perfectly elastic demand curve 
 at this price — it can sell any quantity at P* but nothing above it.
 </p>
 </div>
 </div>
 );
};

export default PerfectCompetitionDiagram;
