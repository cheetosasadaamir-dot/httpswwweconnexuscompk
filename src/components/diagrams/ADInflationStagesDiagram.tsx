import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ADInflationStagesDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const [activeStage, setActiveStage] = useState<number>(0);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
 { threshold: 0.2 }
 );
 if (containerRef.current) observer.observe(containerRef.current);
 return  => observer.disconnect;
 }, []);

 const width = 500, height = 340;
 const margin = { top: 40, right: 30, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // AS curve coordinates - three stages
 const asPoints = [
 { x: margin.left + 30, y: margin.top + chartHeight - 20 },
 { x: margin.left + 80, y: margin.top + chartHeight - 25 },
 { x: margin.left + 140, y: margin.top + chartHeight - 40 },
 { x: margin.left + 200, y: margin.top + chartHeight - 70 },
 { x: margin.left + 260, y: margin.top + chartHeight - 120 },
 { x: margin.left + 300, y: margin.top + chartHeight - 180 },
 { x: margin.left + 320, y: margin.top + 60 },
 { x: margin.left + 325, y: margin.top + 30 },
 ];

 const asPath = `M ${asPoints.map(p => `${p.x},${p.y}`).join(' L ')}`;

 // AD curves at different positions
 const adPositions = [
 { x: margin.left + 60, label: 'AD₁', color: 'hsl(var(--muted-foreground))' },
 { x: margin.left + 160, label: 'AD₂', color: 'hsl(var(--cambridge-cyan))' },
 { x: margin.left + 280, label: 'AD₃', color: 'hsl(var(--cambridge-magenta))' },
 ];

 const getADPath = (startX: number) => {
 const endX = startX + 180;
 const startY = margin.top + 20;
 const endY = margin.top + chartHeight - 20;
 return `M ${startX},${startY} Q ${startX + 60},${startY + 80} ${endX},${endY}`;
 };

 const stages = [
 {
 title: 'Stage 1: Elastic (Spare Capacity)',
 description: 'At low output levels, there is significant spare capacity. AD shifts cause large increases in real output (Y) with minimal price increases. Unemployment is high, so firms can hire without bidding up wages.',
 priceEffect: 'Minimal',
 outputEffect: 'Large increase',
 },
 {
 title: 'Stage 2: Intermediate (Bottlenecks)',
 description: 'As the economy approaches full capacity, bottlenecks emerge in some sectors. AD shifts cause both output and prices to rise. Some industries experience shortages while others still have spare capacity.',
 priceEffect: 'Moderate',
 outputEffect: 'Moderate increase',
 },
 {
 title: 'Stage 3: Inelastic (Full Capacity)',
 description: 'At or near full employment (Yf), further AD increases cannot raise real output. All resources are fully employed. AD shifts translate entirely into price increases—pure demand-pull inflation.',
 priceEffect: 'Large (Inflation)',
 outputEffect: 'Zero',
 },
 ];

 return (
 <div ref={containerRef} className="glass-card p-4 my-3">
 <div className="flex justify-between items-center mb-2">
 <h3 className="font-serif text-lg text-gradient">AD Shift Along Three Stages of AS</h3>
 <div className="flex gap-1">
 {stages.map((_, i) => (
 <button
 key={i}
 onClick={ => setActiveStage(i)}
 className={`px-2 py-0.5 text-xs rounded-full transition-all ${
 activeStage === i
 ? 'bg-primary text-primary-foreground': 'border border-primary/30 hover:bg-primary/10'
 }`}
 >
 Stage {i + 1}
 </button>
 ))}
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 <defs>
 <marker id="arrow-ad" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--foreground))" />
 </marker>
 </defs>

 {/* Axes */}
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-ad)" />
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-ad)" />
 
 <text x={margin.left + chartWidth / 2} y={height - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">Real GDP (Y)</text>
 <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Price Level (P)</text>

 {/* Stage zones */}
 <motion.rect
 x={margin.left}
 y={margin.top}
 width={120}
 height={chartHeight}
 fill={activeStage === 0 ? 'hsl(var(--cambridge-green))': 'transparent'}
 opacity={0.1}
 initial={{ opacity: 0 }}
 animate={{ opacity: activeStage === 0 ? 0.15: 0 }}
 />
 <motion.rect
 x={margin.left + 120}
 y={margin.top}
 width={140}
 height={chartHeight}
 fill={activeStage === 1 ? 'hsl(var(--cambridge-yellow))': 'transparent'}
 opacity={0.1}
 initial={{ opacity: 0 }}
 animate={{ opacity: activeStage === 1 ? 0.15: 0 }}
 />
 <motion.rect
 x={margin.left + 260}
 y={margin.top}
 width={chartWidth - 260}
 height={chartHeight}
 fill={activeStage === 2 ? 'hsl(var(--destructive))': 'transparent'}
 opacity={0.1}
 initial={{ opacity: 0 }}
 animate={{ opacity: activeStage === 2 ? 0.15: 0 }}
 />

 {/* Full employment line */}
 <motion.line
 x1={margin.left + 320}
 y1={margin.top}
 x2={margin.left + 320}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--destructive))"
 strokeWidth="2"
 strokeDasharray="6,3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.6, delay: 0.3 }}
 />
 <text x={margin.left + 320} y={margin.top - 8} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">Yf</text>

 {/* AS Curve */}
 <motion.path
 d={asPath}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1 }}
 />
 <text x={margin.left + chartWidth - 20} y={margin.top + 45} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">AS</text>

 {/* Stage labels */}
 <text x={margin.left + 60} y={margin.top + 15} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">Elastic</text>
 <text x={margin.left + 190} y={margin.top + 15} textAnchor="middle" fill="hsl(var(--cambridge-yellow))" fontSize="9" fontWeight="500">Intermediate</text>
 <text x={margin.left + 305} y={margin.top + 15} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="500">Inelastic</text>

 {/* AD Curves */}
 {adPositions.map((ad, i) => (
 <motion.g key={i}>
 <motion.path
 d={getADPath(ad.x)}
 fill="none"
 stroke={ad.color}
 strokeWidth={activeStage === i ? 3: 2}
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
 />
 <text x={ad.x + 180} y={margin.top + chartHeight - 8} fill={ad.color} fontSize="10" fontWeight="600">{ad.label}</text>
 </motion.g>
 ))}

 {/* Shift arrows */}
 <motion.path
 d={`M ${margin.left + 130} ${margin.top + 100} L ${margin.left + 170} ${margin.top + 100}`}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="2"
 markerEnd="url(#arrow-ad)"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 1.2 }}
 />
 <motion.path
 d={`M ${margin.left + 230} ${margin.top + 80} L ${margin.left + 270} ${margin.top + 80}`}
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth="2"
 markerEnd="url(#arrow-ad)"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 1.4 }}
 />

 {/* Equilibrium points */}
 <motion.circle
 cx={margin.left + 90}
 cy={margin.top + chartHeight - 30}
 r="5"
 fill="hsl(var(--muted-foreground))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1 }}
 />
 <motion.circle
 cx={margin.left + 220}
 cy={margin.top + chartHeight - 90}
 r="5"
 fill="hsl(var(--cambridge-cyan))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.2 }}
 />
 <motion.circle
 cx={margin.left + 310}
 cy={margin.top + 70}
 r="5"
 fill="hsl(var(--cambridge-magenta))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 1.4 }}
 />
 </svg>

 {/* Stage explanation */}
 <motion.div
 key={activeStage}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="mt-2 p-3 bg-muted/30 rounded-lg"
 >
 <h4 className="font-semibold text-sm text-primary mb-1">{stages[activeStage].title}</h4>
 <p className="text-xs text-muted-foreground mb-2">{stages[activeStage].description}</p>
 <div className="grid grid-cols-2 gap-2 text-xs">
 <div className="p-2 bg-muted/30 rounded">
 <span className="text-muted-foreground">Price Effect:</span>
 <span className="ml-1 font-semibold">{stages[activeStage].priceEffect}</span>
 </div>
 <div className="p-2 bg-muted/30 rounded">
 <span className="text-muted-foreground">Output Effect:</span>
 <span className="ml-1 font-semibold">{stages[activeStage].outputEffect}</span>
 </div>
 </div>
 </motion.div>
 </div>
 );
};

export default ADInflationStagesDiagram;