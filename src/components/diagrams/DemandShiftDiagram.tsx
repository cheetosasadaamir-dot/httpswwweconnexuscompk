import { motion, type Easing } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface DemandShiftDiagramProps {
 showShift?: 'increase' | 'decrease' | 'both' | 'none';
 title?: string;
}

const DemandShiftDiagram = ({ showShift = 'none', title }: DemandShiftDiagramProps) => {
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

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1.2, ease: easeInOut }
 }
 };

 return (
 <div ref={containerRef} className="w-full max-w-lg mx-auto">
 {title && (
 <h4 className="font-serif text-lg text-silver-bright text-center mb-4">{title}</h4>
 )}
 <svg viewBox="0 0 400 350" className="w-full h-auto">
 <defs>
 <linearGradient id="demandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(217 91% 60%)" />
 <stop offset="100%" stopColor="hsl(234 89% 74%)" />
 </linearGradient>
 <linearGradient id="increaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(142 76% 36%)" />
 <stop offset="100%" stopColor="hsl(142 69% 58%)" />
 </linearGradient>
 <linearGradient id="decreaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(0 84% 50%)" />
 <stop offset="100%" stopColor="hsl(0 84% 60%)" />
 </linearGradient>
 </defs>

 {/* Grid background */}
 <pattern id="demandGrid" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(217 33% 20%)" strokeWidth="0.5" opacity="0.3" />
 </pattern>
 <rect width="400" height="350" fill="url(#demandGrid)" />

 {/* Axes */}
 <motion.line
 x1="60" y1="290" x2="380" y2="290"
 stroke="hsl(220 14% 75%)"
 strokeWidth="2"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 0.8 }}
 />
 <motion.line
 x1="60" y1="290" x2="60" y2="30"
 stroke="hsl(220 14% 75%)"
 strokeWidth="2"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 0.8 }}
 />

 {/* Arrow heads */}
 <polygon points="380,290 370,285 370,295" fill="hsl(220 14% 75%)" />
 <polygon points="60,30 55,40 65,40" fill="hsl(220 14% 75%)" />

 {/* Axis Labels */}
 <text x="220" y="320" textAnchor="middle" fill="hsl(220 14% 75%)" fontSize="14" fontFamily="Inter">
 Quantity Demanded
 </text>
 <text x="25" y="160" textAnchor="middle" fill="hsl(220 14% 75%)" fontSize="14" fontFamily="Inter" 
 transform="rotate(-90, 25, 160)">
 Price (P)
 </text>

 {/* Original Demand Curve (D₀) */}
 <motion.path
 d="M 100 80 L 320 260"
 fill="none"
 stroke="url(#demandGrad)"
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x="325" y="275" fill="hsl(217 91% 70%)" fontSize="14" fontWeight="600">D₀</text>

 {/* Increase Shift (D₁) - rightward */}
 {(showShift === 'increase' || showShift === 'both') && (
 <>
 <motion.path
 d="M 160 80 L 360 240"
 fill="none"
 stroke="url(#increaseGrad)"
 strokeWidth="3"
 strokeLinecap="round"
 strokeDasharray="8 4"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.5 }}
 />
 <text x="365" y="250" fill="hsl(142 69% 58%)" fontSize="14" fontWeight="600">D₁</text>
 
 {/* Arrow showing shift direction */}
 <motion.path
 d="M 210 170 L 270 170"
 fill="none"
 stroke="hsl(142 69% 58%)"
 strokeWidth="2"
 markerEnd="url(#arrowGreen)"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.2, duration: 0.5 }}
 />
 <polygon points="270,170 260,165 260,175" fill="hsl(142 69% 58%)" />
 </>
 )}

 {/* Decrease Shift (D₂) - leftward */}
 {(showShift === 'decrease' || showShift === 'both') && (
 <>
 <motion.path
 d="M 80 100 L 260 280"
 fill="none"
 stroke="url(#decreaseGrad)"
 strokeWidth="3"
 strokeLinecap="round"
 strokeDasharray="8 4"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.7 }}
 />
 <text x="265" y="285" fill="hsl(0 84% 60%)" fontSize="14" fontWeight="600">D₂</text>
 
 {/* Arrow showing shift direction */}
 <motion.path
 d="M 160 200 L 100 200"
 fill="none"
 stroke="hsl(0 84% 60%)"
 strokeWidth="2"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1.4, duration: 0.5 }}
 />
 <polygon points="100,200 110,195 110,205" fill="hsl(0 84% 60%)" />
 </>
 )}

 {/* Price markers */}
 <motion.line
 x1="60" y1="170" x2="210" y2="170"
 stroke="hsl(220 14% 45%)"
 strokeWidth="1"
 strokeDasharray="4 4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 0.8 }}
 />
 <text x="50" y="175" fill="hsl(220 14% 75%)" fontSize="12" textAnchor="end">P₁</text>

 {/* Quantity markers */}
 <motion.line
 x1="210" y1="170" x2="210" y2="290"
 stroke="hsl(220 14% 45%)"
 strokeWidth="1"
 strokeDasharray="4 4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1 }}
 />
 <text x="210" y="305" fill="hsl(220 14% 75%)" fontSize="12" textAnchor="middle">Q₁</text>

 {/* Legend */}
 <rect x="70" y="20" width="180" height="55" rx="8" fill="hsl(222 47% 6%)" fillOpacity="0.9" stroke="hsl(217 33% 20%)" />
 <text x="85" y="42" fill="hsl(220 14% 90%)" fontSize="12" fontWeight="600">Movement vs. Shift:</text>
 <text x="85" y="60" fill="hsl(220 14% 65%)" fontSize="10">• Price change → movement along</text>
 <text x="85" y="72" fill="hsl(220 14% 65%)" fontSize="10">• Non-price factors → curve shifts</text>
 </svg>
 </div>
 );
};

export default DemandShiftDiagram;
