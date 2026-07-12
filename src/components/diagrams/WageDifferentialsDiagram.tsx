import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WageDifferentialsDiagram =  => {
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
 transition: { duration: 1.2, ease: "easeInOut" as const }
 }
 };

 return (
 <div ref={containerRef} className="w-full mt-8">
 <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
 Wage Differentials: Skilled vs. Unskilled Labor
 </h4>
 
 <div className="flex flex-col lg:flex-row gap-8">
 {/* Skilled Labor Market */}
 <div className="flex-1">
 <p className="text-sm text-muted-foreground text-center mb-2">Skilled Labor Market</p>
 <svg viewBox="0 0 280 240" className="w-full max-w-xs mx-auto">
 <defs>
 <pattern id="grid-wage-diff" width="28" height="24" patternUnits="userSpaceOnUse">
 <path d="M 28 0 L 0 0 0 24" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
 </pattern>
 </defs>
 <rect x="50" y="20" width="210" height="180" fill="url(#grid-wage-diff)" />
 
 {/* Axes */}
 <motion.line
 x1="50" y1="200" x2="260" y2="200"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="50" y1="200" x2="50" y2="20"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 
 <text x="155" y="225" textAnchor="middle" className="fill-muted-foreground text-[10px]">Number of Workers</text>
 <text x="25" y="110" textAnchor="middle" className="fill-muted-foreground text-[10px]" transform="rotate(-90, 25, 110)">Wage</text>
 
 {/* Supply (inelastic - steep) */}
 <motion.path
 d="M 100 180 L 160 40"
 fill="none"
 stroke="hsl(var(--secondary))"
 strokeWidth="2.5"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="165" y="35" className="fill-secondary text-xs font-medium">S<tspan baselineShift="sub" fontSize="7">skilled</tspan></text>
 
 {/* Demand (high due to high MRP) */}
 <motion.path
 d="M 60 50 L 240 160"
 fill="none"
 stroke="hsl(var(--primary))"
 strokeWidth="2.5"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="245" y="165" className="fill-primary text-xs font-medium">D<tspan baselineShift="sub" fontSize="7">skilled</tspan></text>
 
 {/* Equilibrium */}
 <motion.circle
 cx="130" cy="100"
 r="5"
 fill="hsl(var(--accent))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.2, duration: 0.3 }}
 />
 
 {/* High wage line */}
 <motion.line
 x1="50" y1="100" x2="130" y2="100"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1"
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="40" y="105" textAnchor="end" className="fill-indigo-400 text-xs font-bold">W<tspan baselineShift="sub" fontSize="7">H</tspan></text>
 
 {/* Employment */}
 <motion.line
 x1="130" y1="100" x2="130" y2="200"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1"
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="130" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">N<tspan baselineShift="sub" fontSize="7">s</tspan></text>
 </svg>
 </div>

 {/* Unskilled Labor Market */}
 <div className="flex-1">
 <p className="text-sm text-muted-foreground text-center mb-2">Unskilled Labor Market</p>
 <svg viewBox="0 0 280 240" className="w-full max-w-xs mx-auto">
 <rect x="50" y="20" width="210" height="180" fill="url(#grid-wage-diff)" />
 
 {/* Axes */}
 <motion.line
 x1="50" y1="200" x2="260" y2="200"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="50" y1="200" x2="50" y2="20"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 
 <text x="155" y="225" textAnchor="middle" className="fill-muted-foreground text-[10px]">Number of Workers</text>
 <text x="25" y="110" textAnchor="middle" className="fill-muted-foreground text-[10px]" transform="rotate(-90, 25, 110)">Wage</text>
 
 {/* Supply (elastic - flat) */}
 <motion.path
 d="M 60 170 L 240 100"
 fill="none"
 stroke="hsl(var(--secondary))"
 strokeWidth="2.5"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="245" y="95" className="fill-secondary text-xs font-medium">S<tspan baselineShift="sub" fontSize="7">unskilled</tspan></text>
 
 {/* Demand (lower due to lower MRP) */}
 <motion.path
 d="M 60 100 L 240 180"
 fill="none"
 stroke="hsl(var(--primary))"
 strokeWidth="2.5"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="245" y="185" className="fill-primary text-xs font-medium">D<tspan baselineShift="sub" fontSize="7">unskilled</tspan></text>
 
 {/* Equilibrium */}
 <motion.circle
 cx="150" cy="140"
 r="5"
 fill="hsl(var(--accent))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.2, duration: 0.3 }}
 />
 
 {/* Low wage line */}
 <motion.line
 x1="50" y1="140" x2="150" y2="140"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1"
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="40" y="145" textAnchor="end" className="fill-orange-400 text-xs font-bold">W<tspan baselineShift="sub" fontSize="7">L</tspan></text>
 
 {/* Employment */}
 <motion.line
 x1="150" y1="140" x2="150" y2="200"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1"
 strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 1.5, duration: 0.5 }}
 />
 <text x="150" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">N<tspan baselineShift="sub" fontSize="7">u</tspan></text>
 </svg>
 </div>
 </div>

 <div className="mt-4 grid md:grid-cols-2 gap-4">
 <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
 <p className="text-indigo-200 text-xs">
 <strong>Skilled Labor:</strong> High demand (high MRP due to productivity) + Low supply (training barriers) 
 = <strong>High wages (W<sub>H</sub>)</strong>
 </p>
 </div>
 <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
 <p className="text-orange-200 text-xs">
 <strong>Unskilled Labor:</strong> Lower demand (lower MRP) + Abundant supply (easy entry) 
 = <strong>Low wages (W<sub>L</sub>)</strong>
 </p>
 </div>
 </div>
 </div>
 );
};

export default WageDifferentialsDiagram;
