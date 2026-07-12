import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FiscalPolicyShiftDiagramProps {
 title?: string;
}

const FiscalPolicyShiftDiagram: React.FC<FiscalPolicyShiftDiagramProps> = ({
 title = "Fiscal Policy: AD Shift Mechanism"
}) => {
 const [showShift, setShowShift] = useState(false);
 const [policyType, setPolicyType] = useState<'expansionary' | 'contractionary'>('expansionary');
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

 const width = 500;
 const height = 380;
 const margin = { top: 40, right: 50, bottom: 60, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const xScale = (val: number) => margin.left + val * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - val * chartHeight;

 // Generate AD curve points with shift
 const generateADPoints = (shift: number = 0) => {
 const points: { x: number; y: number }[] = [];
 for (let q = 0.08; q <= 0.92; q += 0.04) {
 const shiftedQ = q + shift;
 if (shiftedQ >= 0.05 && shiftedQ <= 1.0) {
 points.push({
 x: xScale(shiftedQ),
 y: yScale(0.92 - q * 0.82)
 });
 }
 }
 return points;
 };

 // Generate SRAS curve points
 const generateSRASPoints =  => {
 const points: { x: number; y: number }[] = [];
 for (let q = 0.08; q <= 0.92; q += 0.04) {
 points.push({
 x: xScale(q),
 y: yScale(0.12 + q * 0.78)
 });
 }
 return points;
 };

 // LRAS vertical line
 const lrasX = xScale(0.75);

 const pathFromPoints = (points: { x: number; y: number }[]) => {
 if (points.length === 0) return '';
 let d = `M ${points[0].x} ${points[0].y}`;
 for (let i = 1; i < points.length; i++) {
 d += ` L ${points[i].x} ${points[i].y}`;
 }
 return d;
 };

 const shiftAmount = policyType === 'expansionary' ? 0.12: -0.12;
 const ad1Points = generateADPoints(0);
 const ad2Points = generateADPoints(shiftAmount);
 const srasPoints = generateSRASPoints;

 // Equilibrium calculations
 const eq1X = xScale(0.48);
 const eq1Y = yScale(0.50);
 const eq2X = policyType === 'expansionary' ? xScale(0.58): xScale(0.38);
 const eq2Y = policyType === 'expansionary' ? yScale(0.58): yScale(0.42);

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: {
 pathLength: 1,
 opacity: 1,
 transition: { duration: 1.2, ease: "easeInOut" as const }
 }
 };

 return (
 <div ref={containerRef} className="glass-card p-5 rounded-xl">
 <div className="flex items-center justify-between mb-3">
 <div>
 <h3 className="font-serif text-lg text-foreground">{title}</h3>
 <p className="text-xs text-muted-foreground mt-1">
 Impact of Government Spending (G) and Taxation (T) on Aggregate Demand
 </p>
 </div>
 </div>

 <div className="flex flex-wrap justify-center gap-2 mb-4">
 <Button
 variant={policyType === 'expansionary' ? "default": "outline"}
 size="sm"
 onClick={ => { setPolicyType('expansionary'); setShowShift(false); }}
 >
 Expansionary (↑G or ↓T)
 </Button>
 <Button
 variant={policyType === 'contractionary' ? "default": "outline"}
 size="sm"
 onClick={ => { setPolicyType('contractionary'); setShowShift(false); }}
 >
 Contractionary (↓G or ↑T)
 </Button>
 <Button
 variant={showShift ? "secondary": "outline"}
 size="sm"
 onClick={ => setShowShift(!showShift)}
 >
 {showShift ? "Hide Shift": "Activate Policy"}
 </Button>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 <defs>
 <marker id="fiscalShiftArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
 </marker>
 <marker id="shiftDirectionArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" />
 </marker>
 </defs>

 {/* Grid lines */}
 {[0.25, 0.5, 0.75].map((tick, i) => (
 <g key={`grid-${i}`}>
 <line
 x1={margin.left}
 y1={yScale(tick)}
 x2={margin.left + chartWidth}
 y2={yScale(tick)}
 stroke="hsl(var(--border))"
 strokeDasharray="4,4"
 strokeWidth={0.5}
 />
 <line
 x1={xScale(tick)}
 y1={margin.top}
 x2={xScale(tick)}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--border))"
 strokeDasharray="4,4"
 strokeWidth={0.5}
 />
 </g>
 ))}

 {/* Axes */}
 <line x1={margin.left} y1={margin.top - 10} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#fiscalShiftArrow)" />
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth + 10} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#fiscalShiftArrow)" />

 {/* Axis labels */}
 <text
 x={margin.left - 50}
 y={margin.top + chartHeight / 2}
 textAnchor="middle"
 transform={`rotate(-90, ${margin.left - 50}, ${margin.top + chartHeight / 2})`}
 className="fill-foreground text-sm font-medium"
 >
 Price Level (P)
 </text>
 <text
 x={margin.left + chartWidth / 2}
 y={margin.top + chartHeight + 45}
 textAnchor="middle"
 className="fill-foreground text-sm font-medium"
 >
 Real GDP (Y)
 </text>

 {/* LRAS (vertical white line) */}
 <motion.line
 x1={lrasX}
 y1={margin.top + 5}
 x2={lrasX}
 y2={margin.top + chartHeight - 5}
 stroke="hsl(var(--foreground))"
 strokeWidth={3}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={lrasX + 8} y={margin.top + 20} className="fill-foreground text-xs font-semibold">LRAS</text>
 <text x={lrasX} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-foreground text-xs">Y<tspan baselineShift="sub" fontSize="8">f</tspan></text>

 {/* SRAS (Amber Gold) */}
 <motion.path
 d={pathFromPoints(srasPoints)}
 fill="none"
 stroke="hsl(36 100% 50%)"
 strokeWidth={2.5}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={xScale(0.88)} y={yScale(0.82)} className="text-xs font-semibold" fill="hsl(36 100% 50%)">SRAS</text>

 {/* AD1 (Neon Cyan) */}
 <motion.path
 d={pathFromPoints(ad1Points)}
 fill="none"
 stroke="hsl(180 100% 50%)"
 strokeWidth={2.5}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={xScale(0.88)} y={yScale(0.14)} className="text-xs font-semibold" fill="hsl(180 100% 50%)">AD₁</text>

 {/* E1 Equilibrium */}
 <motion.circle
 cx={eq1X}
 cy={eq1Y}
 r={6}
 fill="hsl(var(--foreground))"
 initial={{ scale: 0 }}
 animate={{ scale: isVisible ? 1: 0 }}
 transition={{ duration: 0.3, delay: 0.8 }}
 />
 <text x={eq1X - 12} y={eq1Y - 10} className="fill-foreground text-xs font-semibold">E₁</text>

 {/* Dashed lines from E1 */}
 <motion.line
 x1={eq1X}
 y1={eq1Y}
 x2={eq1X}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--muted-foreground))"
 strokeDasharray="4,3"
 strokeWidth={1.5}
 initial={{ opacity: 0 }}
 animate={{ opacity: isVisible ? 0.7: 0 }}
 />
 <motion.line
 x1={margin.left}
 y1={eq1Y}
 x2={eq1X}
 y2={eq1Y}
 stroke="hsl(var(--muted-foreground))"
 strokeDasharray="4,3"
 strokeWidth={1.5}
 initial={{ opacity: 0 }}
 animate={{ opacity: isVisible ? 0.7: 0 }}
 />
 <text x={eq1X} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-foreground text-xs">Y₁</text>
 <text x={margin.left - 8} y={eq1Y + 4} textAnchor="end" className="fill-foreground text-xs">P₁</text>

 {/* AD2 and E2 after shift */}
 {showShift && (
 <>
 <motion.path
 d={pathFromPoints(ad2Points)}
 fill="none"
 stroke="hsl(180 100% 50%)"
 strokeWidth={2.5}
 strokeDasharray="8,4"
 initial={{ opacity: 0, pathLength: 0 }}
 animate={{ opacity: 1, pathLength: 1 }}
 transition={{ duration: 0.8 }}
 />
 <text
 x={policyType === 'expansionary' ? xScale(0.98): xScale(0.75)}
 y={yScale(0.14)}
 className="text-xs font-semibold"
 fill="hsl(180 100% 50%)"
 >
 AD₂
 </text>

 {/* Shift arrow */}
 <motion.line
 x1={policyType === 'expansionary' ? xScale(0.5): xScale(0.48)}
 y1={yScale(0.35)}
 x2={policyType === 'expansionary' ? xScale(0.62): xScale(0.36)}
 y2={yScale(0.35)}
 stroke="hsl(var(--primary))"
 strokeWidth={2}
 markerEnd="url(#shiftDirectionArrow)"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.3 }}
 />

 {/* E2 Equilibrium */}
 <motion.circle
 cx={eq2X}
 cy={eq2Y}
 r={6}
 fill="hsl(var(--primary))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 0.5 }}
 />
 <text x={eq2X + 10} y={eq2Y - 5} className="fill-primary text-xs font-semibold">E₂</text>

 {/* Dashed lines from E2 */}
 <motion.line
 x1={eq2X}
 y1={eq2Y}
 x2={eq2X}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--primary))"
 strokeDasharray="4,3"
 strokeWidth={1.5}
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.7 }}
 />
 <motion.line
 x1={margin.left}
 y1={eq2Y}
 x2={eq2X}
 y2={eq2Y}
 stroke="hsl(var(--primary))"
 strokeDasharray="4,3"
 strokeWidth={1.5}
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.7 }}
 />
 <text x={eq2X} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-primary text-xs font-semibold">Y₂</text>
 <text x={margin.left - 8} y={eq2Y + 4} textAnchor="end" className="fill-primary text-xs">P₂</text>

 {/* Outcome annotation */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.8 }}
 >
 <rect
 x={policyType === 'expansionary' ? xScale(0.55): xScale(0.05)}
 y={margin.top + 5}
 width={145}
 height={48}
 rx={6}
 fill={policyType === 'expansionary' ? "hsl(142 76% 36% / 0.15)": "hsl(0 84% 60% / 0.15)"}
 stroke={policyType === 'expansionary' ? "hsl(142 76% 36%)": "hsl(0 84% 60%)"}
 strokeWidth={1}
 />
 <text 
 x={policyType === 'expansionary' ? xScale(0.57): xScale(0.07)} 
 y={margin.top + 22} 
 className="text-[10px]"
 fill={policyType === 'expansionary' ? "hsl(142 76% 36%)": "hsl(0 84% 60%)"}
 >
 {policyType === 'expansionary' ? '↑ Real GDP: Y₁ → Y₂': '↓ Real GDP: Y₁ → Y₂'}
 </text>
 <text 
 x={policyType === 'expansionary' ? xScale(0.57): xScale(0.07)} 
 y={margin.top + 40} 
 className="text-[10px]"
 fill={policyType === 'expansionary' ? "hsl(142 76% 36%)": "hsl(0 84% 60%)"}
 >
 {policyType === 'expansionary' ? '↑ Price Level: P₁ → P₂': '↓ Price Level: P₁ → P₂'}
 </text>
 </motion.g>
 </>
 )}
 </svg>

 {/* Legend */}
 <div className="flex justify-center gap-6 mt-4 text-xs">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(180 100% 50%)' }}></div>
 <span className="text-muted-foreground">AD (Neon Cyan)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(36 100% 50%)' }}></div>
 <span className="text-muted-foreground">SRAS (Amber Gold)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-foreground"></div>
 <span className="text-muted-foreground">LRAS (White)</span>
 </div>
 </div>

 {/* Explanation panel */}
 <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm">
 <p className="text-foreground/90 leading-relaxed">
 <strong className="text-primary">Senior Examiner's Conclusion:</strong> {policyType === 'expansionary' 
 ? 'Expansionary fiscal policy (↑G or ↓T) increases disposable income and directly injects spending into the economy. This shifts AD rightward from AD₁ to AD₂, raising both real output (Y₁ → Y₂) and the price level (P₁ → P₂). The magnitude of the shift depends on the size of the Multiplier (k), which amplifies the initial injection. However, the short-run trade-off is clear: higher growth comes at the cost of inflationary pressure.': 'Contractionary fiscal policy (↓G or ↑T) withdraws spending from the circular flow, reducing aggregate demand. This shifts AD leftward from AD₁ to AD₂, lowering both real output (Y₁ → Y₂) and the price level (P₁ → P₂). While this cools inflationary pressure, it risks increasing unemployment and triggering a recessionary gap if the economy is already below full employment.'
 }
 </p>
 </div>
 </div>
 );
};

export default FiscalPolicyShiftDiagram;
