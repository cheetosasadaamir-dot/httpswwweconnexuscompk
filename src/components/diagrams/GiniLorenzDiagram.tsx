import { useState, useEffect, useRef } from 'react';
import { motion, type Easing } from 'framer-motion';

interface GiniLorenzDiagramProps {
 title?: string;
}

const GiniLorenzDiagram = ({ title }: GiniLorenzDiagramProps) => {
 const [giniLevel, setGiniLevel] = useState(0.35);
 const [showComparison, setShowComparison] = useState(false);
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

 const easeInOut: Easing = [0.42, 0, 0.58, 1];

 // Generate Lorenz curve points based on Gini coefficient
 const getCurvePoints = (gini: number): string => {
 const points: string[] = [];
 const power = 1 + gini * 3; // Higher gini = more curved
 
 for (let i = 0; i <= 20; i++) {
 const x = i / 20;
 const y = Math.pow(x, power);
 const svgX = 60 + x * 280;
 const svgY = 280 - y * 220;
 points.push(`${svgX},${svgY}`);
 }
 
 return `M 60,280 L ${points.join(' L ')}`;
 };

 // Get shaded area path for Area A
 const getShadedArea = (gini: number): string => {
 const power = 1 + gini * 3;
 let path = 'M 60,280 ';
 
 // Line of equality
 path += 'L 340,60 ';
 
 // Lorenz curve backwards
 for (let i = 20; i >= 0; i--) {
 const x = i / 20;
 const y = Math.pow(x, power);
 const svgX = 60 + x * 280;
 const svgY = 280 - y * 220;
 path += `L ${svgX},${svgY} `;
 }
 
 path += 'Z';
 return path;
 };

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1.5, ease: easeInOut }
 }
 };

 const getGiniInterpretation = (gini: number): { label: string; color: string; description: string } => {
 if (gini < 0.25) return { label: 'Low Inequality', color: 'text-cambridge-green', description: 'Nordic countries (Sweden, Norway)' };
 if (gini < 0.35) return { label: 'Moderate Inequality', color: 'text-cambridge-cyan', description: 'Western Europe (Germany, France)' };
 if (gini < 0.45) return { label: 'High Inequality', color: 'text-cambridge-orange', description: 'USA, China' };
 return { label: 'Very High Inequality', color: 'text-destructive', description: 'Brazil, South Africa' };
 };

 const interpretation = getGiniInterpretation(giniLevel);

 return (
 <div ref={containerRef} className="w-full my-4">
 {title && (
 <h4 className="font-serif text-lg text-foreground text-center mb-3">{title}</h4>
 )}
 
 {/* Controls */}
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
 <div className="flex items-center gap-3 w-full sm:w-auto">
 <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">
 Gini Coefficient:
 </label>
 <input
 type="range"
 min="0.1"
 max="0.65"
 step="0.01"
 value={giniLevel}
 onChange={(e) => setGiniLevel(parseFloat(e.target.value))}
 className="w-32 accent-primary"
 />
 <span className="text-sm font-mono font-semibold text-primary min-w-[3rem]">
 {giniLevel.toFixed(2)}
 </span>
 </div>
 <button
 onClick={ => setShowComparison(!showComparison)}
 className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
 showComparison 
 ? 'bg-primary text-primary-foreground': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 {showComparison ? 'Hide': 'Show'} Country Comparison
 </button>
 </div>

 <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
 <svg viewBox="0 0 400 340" className="w-full h-auto">
 <defs>
 <linearGradient id="lorenzGrad" x1="0%" y1="100%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="hsl(var(--primary))" />
 <stop offset="100%" stopColor="hsl(var(--cambridge-cyan))" />
 </linearGradient>
 <linearGradient id="areaAGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
 <stop offset="100%" stopColor="hsl(var(--cambridge-cyan))" stopOpacity="0.1" />
 </linearGradient>
 </defs>

 {/* Grid */}
 <pattern id="gridLorenz" width="28" height="22" patternUnits="userSpaceOnUse">
 <path d="M 28 0 L 0 0 0 22" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" opacity="0.4" />
 </pattern>
 <rect x="60" y="60" width="280" height="220" fill="url(#gridLorenz)" />

 {/* Axes */}
 <motion.line
 x1="60" y1="280" x2="360" y2="280"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 0.6 }}
 />
 <motion.line
 x1="60" y1="280" x2="60" y2="40"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 0.6 }}
 />
 
 {/* Arrows */}
 <polygon points="360,280 352,276 352,284" fill="hsl(var(--muted-foreground))" />
 <polygon points="60,40 56,48 64,48" fill="hsl(var(--muted-foreground))" />

 {/* Labels */}
 <text x="210" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">
 Cumulative % of Population
 </text>
 <text x="25" y="170" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11" transform="rotate(-90, 25, 170)">
 Cumulative % of Income
 </text>

 {/* Percentage labels on axes */}
 {[0, 25, 50, 75, 100].map((pct, i) => (
 <g key={`axis-${pct}`}>
 <text x={60 + i * 70} y="295" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 {pct}%
 </text>
 <text x="52" y={280 - i * 55} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="9">
 {pct}%
 </text>
 </g>
 ))}

 {/* Area A - Shaded inequality area */}
 <motion.path
 d={getShadedArea(giniLevel)}
 fill="url(#areaAGrad)"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1, duration: 0.5 }}
 />

 {/* Line of Perfect Equality (45° diagonal) */}
 <motion.line
 x1="60" y1="280" x2="340" y2="60"
 stroke="hsl(142 69% 58%)"
 strokeWidth="2"
 strokeDasharray="6 4"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="200" y="155" fill="hsl(142 69% 58%)" fontSize="9" fontWeight="600" transform="rotate(-38, 200, 155)">
 Line of Perfect Equality
 </text>

 {/* Main Lorenz Curve */}
 <motion.path
 d={getCurvePoints(giniLevel)}
 fill="none"
 stroke="url(#lorenzGrad)"
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 key={giniLevel}
 />
 <text x="280" y="240" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">
 Lorenz Curve
 </text>

 {/* Comparison curves */}
 {showComparison && (
 <>
 {/* Low inequality (Nordic) */}
 <motion.path
 d={getCurvePoints(0.25)}
 fill="none"
 stroke="hsl(142 69% 58%)"
 strokeWidth="1.5"
 strokeDasharray="4 2"
 opacity="0.7"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 0.7 }}
 transition={{ duration: 1 }}
 />
 <text x="180" y="180" fill="hsl(142 69% 58%)" fontSize="8">Nordic (0.25)</text>

 {/* High inequality (SA) */}
 <motion.path
 d={getCurvePoints(0.60)}
 fill="none"
 stroke="hsl(var(--destructive))"
 strokeWidth="1.5"
 strokeDasharray="4 2"
 opacity="0.7"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 0.7 }}
 transition={{ duration: 1 }}
 />
 <text x="320" y="265" fill="hsl(var(--destructive))" fontSize="8">S. Africa (0.60)</text>
 </>
 )}

 {/* Area labels */}
 <text x="180" y="200" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold" opacity="0.8">A</text>
 <text x="120" y="260" fill="hsl(var(--muted-foreground))" fontSize="14" fontWeight="bold" opacity="0.6">B</text>
 </svg>

 {/* Formula and interpretation */}
 <div className="mt-3 p-3 bg-muted/30 rounded-lg border border-border/50">
 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
 <div className="text-center sm:text-left">
 <p className="text-xs text-muted-foreground mb-1">Gini Coefficient Formula:</p>
 <p className="font-mono text-sm font-semibold text-primary">
 Gini = A / (A + B)
 </p>
 </div>
 <div className="text-center sm:text-right">
 <p className={`text-sm font-semibold ${interpretation.color}`}>
 {interpretation.label}
 </p>
 <p className="text-xs text-muted-foreground">
 {interpretation.description}
 </p>
 </div>
 </div>
 </div>

 {/* Scale explanation */}
 <div className="mt-2 grid grid-cols-4 gap-1 text-[10px]">
 <div className="bg-cambridge-green/20 p-1.5 rounded text-center">
 <p className="font-semibold text-cambridge-green">0 - 0.25</p>
 <p className="text-muted-foreground">Low</p>
 </div>
 <div className="bg-cambridge-cyan/20 p-1.5 rounded text-center">
 <p className="font-semibold text-cambridge-cyan">0.25 - 0.35</p>
 <p className="text-muted-foreground">Moderate</p>
 </div>
 <div className="bg-cambridge-orange/20 p-1.5 rounded text-center">
 <p className="font-semibold text-cambridge-orange">0.35 - 0.45</p>
 <p className="text-muted-foreground">High</p>
 </div>
 <div className="bg-destructive/20 p-1.5 rounded text-center">
 <p className="font-semibold text-destructive">0.45+</p>
 <p className="text-muted-foreground">Very High</p>
 </div>
 </div>
 </div>
 </div>
 );
};

export default GiniLorenzDiagram;
