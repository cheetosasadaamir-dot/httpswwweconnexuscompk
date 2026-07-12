import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

const PPFDiagram =  => {
 const [growth, setGrowth] = useState([0]);
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

 const growthValue = growth[0];
 const curve1Offset = growthValue * 0.8;
 const curve2Offset = growthValue * 1.2;

 const getExplanation =  => {
 if (growthValue === 0) {
 return {
 title: "Current PPF",
 description: "This curve shows the maximum combinations of two goods an economy can produce with its current resources and technology.",
 };
 } else if (growthValue < 50) {
 return {
 title: "Modest Growth",
 description: "Investment in capital goods or workforce training starts to shift the PPF outward, enabling more production.",
 };
 } else {
 return {
 title: "Economic Growth",
 description: "Significant technological advancement or resource discovery has shifted the PPF outward—the economy can now produce more of both goods!",
 };
 }
 };

 const explanation = getExplanation;

 return (
 <div ref={containerRef} className="w-full">
 <div className="flex flex-col lg:flex-row gap-8 items-center">
 {/* Diagram */}
 <div className="flex-1 w-full max-w-lg">
 <svg 
 viewBox="0 0 400 350" 
 className="w-full h-auto"
 style={{ opacity: isVisible ? 1: 0, transition: 'opacity 0.5s ease-out' }}
 >
 {/* Background grid */}
 <defs>
 <pattern id="ppfGrid" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(220 14% 75% / 0.05)" strokeWidth="0.5" />
 </pattern>
 <linearGradient id="areaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(217 91% 60% / 0.1)" />
 <stop offset="100%" stopColor="hsl(234 89% 74% / 0.05)" />
 </linearGradient>
 <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="hsl(217 91% 60%)" />
 <stop offset="100%" stopColor="hsl(234 89% 74%)" />
 </linearGradient>
 <linearGradient id="newCurveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="hsl(160 84% 39%)" />
 <stop offset="100%" stopColor="hsl(142 76% 36%)" />
 </linearGradient>
 </defs>

 <rect x="60" y="30" width="320" height="270" fill="url(#ppfGrid)" />

 {/* Axes */}
 <g stroke="hsl(220 14% 75%)" strokeWidth="2">
 <line x1="60" y1="30" x2="60" y2="300" />
 <line x1="60" y1="300" x2="380" y2="300" />
 <polygon points="60,30 55,40 65,40" fill="hsl(220 14% 75%)" />
 <polygon points="380,300 370,295 370,305" fill="hsl(220 14% 75%)" />
 </g>

 {/* Axis labels */}
 <text x="15" y="170" fill="hsl(220 14% 90%)" fontSize="13" fontFamily="Cinzel" transform="rotate(-90, 15, 170)">
 Consumer Goods
 </text>
 <text x="220" y="340" fill="hsl(220 14% 90%)" fontSize="13" fontFamily="Cinzel" textAnchor="middle">
 Capital Goods
 </text>

 {/* Original PPF curve with area */}
 <motion.path
 d={`M 60 60 Q 100 100, 150 160 Q 220 250, 360 300 L 60 300 Z`}
 fill="url(#areaGradient)"
 initial={{ opacity: 0 }}
 animate={{ opacity: isVisible ? 0.5: 0 }}
 transition={{ duration: 1 }}
 />

 <motion.path
 d={`M 60 60 Q 100 100, 150 160 Q 220 250, 360 300`}
 fill="none"
 stroke="url(#curveGradient)"
 strokeWidth="3"
 strokeLinecap="round"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: isVisible ? 1: 0 }}
 transition={{ duration: 1.5, ease: "easeOut" }}
 />

 {/* New shifted PPF curve */}
 <AnimatePresence>
 {growthValue > 0 && (
 <>
 <motion.path
 d={`M 60 ${60 - curve1Offset} Q ${100 + curve2Offset * 0.3} ${100 - curve1Offset * 0.5}, ${150 + curve2Offset * 0.5} ${160 - curve1Offset * 0.6} Q ${220 + curve2Offset * 0.7} ${250 - curve1Offset * 0.3}, ${360 + curve2Offset * 0.2} 300`}
 fill="none"
 stroke="url(#newCurveGradient)"
 strokeWidth="3"
 strokeLinecap="round"
 strokeDasharray="8 4"
 initial={{ opacity: 0, pathLength: 0 }}
 animate={{ opacity: 1, pathLength: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.8 }}
 />
 
 {/* Arrow showing shift */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 >
 <path
 d={`M 200 180 L ${220 + curve2Offset * 0.3} ${160 - curve1Offset * 0.4}`}
 stroke="hsl(160 84% 39%)"
 strokeWidth="2"
 fill="none"
 markerEnd="url(#arrowGreen)"
 />
 </motion.g>
 </>
 )}
 </AnimatePresence>

 {/* Example points */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: isVisible ? 1: 0 }}
 transition={{ delay: 1.5 }}
 >
 {/* Efficient point on curve */}
 <circle cx="150" cy="160" r="6" fill="hsl(217 91% 60%)" />
 <text x="165" y="155" fill="hsl(220 14% 75%)" fontSize="11" fontFamily="Inter">
 Efficient
 </text>
 
 {/* Inefficient point inside */}
 <circle cx="120" cy="220" r="5" fill="hsl(0 84% 60%)" fillOpacity="0.7" />
 <text x="135" y="225" fill="hsl(220 14% 65%)" fontSize="10" fontFamily="Inter">
 Inefficient
 </text>
 </motion.g>

 {/* Labels */}
 <motion.text 
 x="340" 
 y="280" 
 fill="hsl(217 91% 60%)" 
 fontSize="14" 
 fontFamily="Cinzel"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: isVisible ? 1: 0 }}
 transition={{ delay: 1.2 }}
 >
 PPF
 </motion.text>

 <AnimatePresence>
 {growthValue > 0 && (
 <motion.text 
 x={350 + curve2Offset * 0.15} 
 y={260 - curve1Offset * 0.3} 
 fill="hsl(160 84% 39%)" 
 fontSize="14" 
 fontFamily="Cinzel"
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 >
 PPF'
 </motion.text>
 )}
 </AnimatePresence>

 {/* Arrow marker */}
 <defs>
 <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(160 84% 39%)" />
 </marker>
 </defs>
 </svg>
 </div>

 {/* Controls and explanation */}
 <div className="flex-1 w-full lg:max-w-md space-y-8">
 <div className="glass-card p-6">
 <h4 className="font-serif text-lg text-silver-bright mb-4">
 Simulate Economic Growth
 </h4>
 <p className="text-sm text-muted-foreground mb-6">
 Drag the slider to see how economic growth shifts the Production Possibility Frontier outward.
 </p>
 <Slider
 value={growth}
 onValueChange={setGrowth}
 max={100}
 step={1}
 className="w-full"
 />
 <div className="flex justify-between mt-2 text-xs text-muted-foreground">
 <span>No Growth</span>
 <span>Maximum Growth</span>
 </div>
 </div>

 <motion.div
 key={explanation.title}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="glass-card p-6 border-l-4 border-l-primary"
 >
 <h4 className="font-serif text-lg text-silver-bright mb-2">
 {explanation.title}
 </h4>
 <p className="text-sm text-muted-foreground leading-relaxed">
 {explanation.description}
 </p>
 </motion.div>
 </div>
 </div>
 </div>
 );
};

export default PPFDiagram;
