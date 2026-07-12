import { useEffect, useRef, useState } from 'react';
import { motion, type Easing } from 'framer-motion';

interface BusinessCycleDiagramProps {
 title?: string;
}

const BusinessCycleDiagram = ({ title }: BusinessCycleDiagramProps) => {
 const [isVisible, setIsVisible] = useState(false);
 const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
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

 const easeInOut: Easing = [0.42, 0, 0.58, 1];

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 2, ease: easeInOut }
 }
 };

 const phases = [
 { 
 id: 'recovery', 
 label: 'Recovery/Expansion', 
 x: 100, 
 y: 120,
 description: 'GDP rises, unemployment falls, consumer confidence increases.'
 },
 { 
 id: 'peak', 
 label: 'Peak/Boom', 
 x: 175, 
 y: 70,
 description: 'Economy at maximum output, potential inflationary pressures.'
 },
 { 
 id: 'recession', 
 label: 'Recession/Contraction', 
 x: 250, 
 y: 120,
 description: 'GDP declines, rising unemployment, falling confidence.'
 },
 { 
 id: 'trough', 
 label: 'Trough', 
 x: 325, 
 y: 170,
 description: 'Economy at lowest point, high unemployment, deflation risk.'
 }
 ];

 return (
 <div ref={containerRef} className="w-full my-4">
 {title && (
 <h4 className="font-serif text-lg text-foreground text-center mb-3">{title}</h4>
 )}
 
 <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
 <svg viewBox="0 0 500 260" className="w-full h-auto">
 <defs>
 <linearGradient id="cycleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="hsl(var(--cambridge-cyan))" />
 <stop offset="50%" stopColor="hsl(var(--primary))" />
 <stop offset="100%" stopColor="hsl(var(--cambridge-cyan))" />
 </linearGradient>
 <linearGradient id="trendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="hsl(142 76% 36%)" />
 <stop offset="100%" stopColor="hsl(142 69% 58%)" />
 </linearGradient>
 </defs>

 {/* Grid background */}
 <pattern id="gridBusiness" width="25" height="25" patternUnits="userSpaceOnUse">
 <path d="M 25 0 L 0 0 0 25" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" opacity="0.4" />
 </pattern>
 <rect x="50" y="20" width="430" height="200" fill="url(#gridBusiness)" />

 {/* Axes */}
 <motion.line
 x1="50" y1="220" x2="480" y2="220"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 0.6 }}
 />
 <motion.line
 x1="50" y1="220" x2="50" y2="20"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 0.6 }}
 />
 
 {/* Arrows */}
 <polygon points="480,220 472,216 472,224" fill="hsl(var(--muted-foreground))" />
 <polygon points="50,20 46,28 54,28" fill="hsl(var(--muted-foreground))" />

 {/* Labels */}
 <text x="265" y="250" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Time (Years)</text>
 <text x="25" y="120" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12" transform="rotate(-90, 25, 120)">Real GDP</text>

 {/* Long-term trend line */}
 <motion.line
 x1="60" y1="180" x2="470" y2="100"
 stroke="url(#trendGrad)"
 strokeWidth="2"
 strokeDasharray="8 4"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="475" y="95" fill="hsl(142 69% 58%)" fontSize="10" fontWeight="600">Trend Growth</text>
 <text x="475" y="107" fill="hsl(142 69% 58%)" fontSize="8">(Potential GDP)</text>

 {/* Business Cycle Wave - smooth sinusoidal curve */}
 <motion.path
 d="M 60 160 
 C 90 160, 110 90, 175 70
 C 240 50, 200 160, 250 170
 C 300 180, 290 140, 325 170
 C 360 200, 350 110, 390 85
 C 430 60, 420 130, 470 140"
 fill="none"
 stroke="url(#cycleGrad)"
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="475" y="145" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">Actual GDP</text>

 {/* Phase labels and points */}
 {phases.map((phase, index) => (
 <g key={phase.id}>
 <motion.circle
 cx={phase.x}
 cy={phase.y}
 r={hoveredPhase === phase.id ? 8: 6}
 fill={phase.id === 'peak' ? 'hsl(var(--cambridge-cyan))': 
 phase.id === 'trough' ? 'hsl(var(--destructive))': 
 'hsl(var(--primary))'}
 stroke="hsl(var(--background))"
 strokeWidth="2"
 style={{ cursor: 'pointer' }}
 onMouseEnter={ => setHoveredPhase(phase.id)}
 onMouseLeave={ => setHoveredPhase(null)}
 initial={{ scale: 0, opacity: 0 }}
 animate={isVisible ? { scale: 1, opacity: 1 }: { scale: 0, opacity: 0 }}
 transition={{ delay: 1.5 + index * 0.2, duration: 0.3 }}
 />
 <text 
 x={phase.x} 
 y={phase.y - 15} 
 textAnchor="middle" 
 fill={phase.id === 'peak' ? 'hsl(var(--cambridge-cyan))': 
 phase.id === 'trough' ? 'hsl(var(--destructive))': 
 'hsl(var(--primary))'}
 fontSize="10"
 fontWeight="600"
 >
 {phase.label.split('/')[0]}
 </text>
 </g>
 ))}

 {/* Annotations */}
 {/* Output gap annotations */}
 <motion.path
 d="M 175 70 L 175 125"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="1.5"
 strokeDasharray="4 2"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={isVisible ? { pathLength: 1, opacity: 0.7 }: { pathLength: 0, opacity: 0 }}
 transition={{ delay: 2.5, duration: 0.4 }}
 />
 <text x="185" y="100" fill="hsl(var(--cambridge-cyan))" fontSize="8">Positive</text>
 <text x="185" y="110" fill="hsl(var(--cambridge-cyan))" fontSize="8">Output Gap</text>

 <motion.path
 d="M 325 170 L 325 145"
 stroke="hsl(var(--destructive))"
 strokeWidth="1.5"
 strokeDasharray="4 2"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={isVisible ? { pathLength: 1, opacity: 0.7 }: { pathLength: 0, opacity: 0 }}
 transition={{ delay: 2.7, duration: 0.4 }}
 />
 <text x="335" y="155" fill="hsl(var(--destructive))" fontSize="8">Negative</text>
 <text x="335" y="165" fill="hsl(var(--destructive))" fontSize="8">Output Gap</text>
 </svg>

 {/* Legend */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 text-xs">
 {phases.map(phase => (
 <div 
 key={phase.id}
 className={`p-2 rounded-lg transition-all ${
 hoveredPhase === phase.id 
 ? 'bg-primary/20 border-primary/50': 'bg-muted/30'
 } border border-border/50`}
 onMouseEnter={ => setHoveredPhase(phase.id)}
 onMouseLeave={ => setHoveredPhase(null)}
 >
 <p className={`font-semibold ${
 phase.id === 'peak' ? 'text-cambridge-cyan': 
 phase.id === 'trough' ? 'text-destructive': 
 'text-primary'
 }`}>{phase.label}</p>
 <p className="text-muted-foreground text-[10px] mt-0.5">{phase.description}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Key concepts */}
 <div className="mt-3 p-3 bg-muted/30 rounded-lg border border-border/50">
 <p className="text-xs text-muted-foreground">
 <strong className="text-foreground">Business Cycle:</strong> The recurring pattern of expansion and contraction in economic activity. 
 The <span className="text-cambridge-green">trend growth line</span> represents the economy's potential output, 
 while the <span className="text-primary">actual GDP curve</span> shows short-term fluctuations around this trend.
 </p>
 </div>
 </div>
 );
};

export default BusinessCycleDiagram;
