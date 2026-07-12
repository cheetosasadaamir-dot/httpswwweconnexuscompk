import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const EconomicSystemsDiagram =  => {
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

 const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.2 }
 }
 };

 const itemVariants = {
 hidden: { y: 20, opacity: 0 },
 visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
 };

 return (
 <div ref={containerRef} className="w-full">
 <svg viewBox="0 0 800 400" className="w-full h-auto">
 <defs>
 <linearGradient id="freeMarketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(217 91% 60%)" />
 <stop offset="100%" stopColor="hsl(234 89% 74%)" />
 </linearGradient>
 <linearGradient id="commandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(0 84% 50%)" />
 <stop offset="100%" stopColor="hsl(0 84% 60%)" />
 </linearGradient>
 <linearGradient id="mixedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(142 76% 36%)" />
 <stop offset="100%" stopColor="hsl(142 69% 58%)" />
 </linearGradient>
 </defs>

 {/* Spectrum Line */}
 <motion.line
 x1="100" y1="350" x2="700" y2="350"
 stroke="hsl(220 14% 75%)"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ duration: 1 }}
 />
 
 {/* Labels for spectrum */}
 <text x="100" y="380" textAnchor="middle" fill="hsl(220 14% 75%)" fontSize="12">
 100% State Control
 </text>
 <text x="700" y="380" textAnchor="middle" fill="hsl(220 14% 75%)" fontSize="12">
 100% Free Market
 </text>

 {/* Free Market Box */}
 <motion.g
 variants={itemVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 >
 <rect x="550" y="40" width="200" height="280" rx="12" fill="url(#freeMarketGrad)" fillOpacity="0.2" stroke="url(#freeMarketGrad)" strokeWidth="2" />
 <text x="650" y="75" textAnchor="middle" fill="hsl(217 91% 70%)" fontSize="18" fontFamily="Cinzel" fontWeight="600">
 Free Market
 </text>
 <line x1="580" y1="90" x2="720" y2="90" stroke="hsl(217 91% 60%)" strokeWidth="1" opacity="0.5" />
 
 <text x="570" y="120" fill="hsl(220 14% 75%)" fontSize="12">• Private ownership</text>
 <text x="570" y="145" fill="hsl(220 14% 75%)" fontSize="12">• Price mechanism</text>
 <text x="570" y="170" fill="hsl(220 14% 75%)" fontSize="12">• Consumer sovereignty</text>
 <text x="570" y="195" fill="hsl(220 14% 75%)" fontSize="12">• Profit motive</text>
 <text x="570" y="220" fill="hsl(220 14% 75%)" fontSize="12">• Competition</text>
 <text x="570" y="245" fill="hsl(220 14% 75%)" fontSize="12">• Decentralized decisions</text>
 
 {/* Position marker */}
 <circle cx="650" cy="350" r="8" fill="hsl(217 91% 60%)" />
 <line x1="650" y1="320" x2="650" y2="342" stroke="hsl(217 91% 60%)" strokeWidth="2" strokeDasharray="4 2" />
 </motion.g>

 {/* Command Economy Box */}
 <motion.g
 variants={itemVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 >
 <rect x="50" y="40" width="200" height="280" rx="12" fill="url(#commandGrad)" fillOpacity="0.2" stroke="url(#commandGrad)" strokeWidth="2" />
 <text x="150" y="75" textAnchor="middle" fill="hsl(0 84% 70%)" fontSize="18" fontFamily="Cinzel" fontWeight="600">
 Command
 </text>
 <line x1="80" y1="90" x2="220" y2="90" stroke="hsl(0 84% 60%)" strokeWidth="1" opacity="0.5" />
 
 <text x="70" y="120" fill="hsl(220 14% 75%)" fontSize="12">• State ownership</text>
 <text x="70" y="145" fill="hsl(220 14% 75%)" fontSize="12">• Central planning</text>
 <text x="70" y="170" fill="hsl(220 14% 75%)" fontSize="12">• Gov't decides allocation</text>
 <text x="70" y="195" fill="hsl(220 14% 75%)" fontSize="12">• Social welfare motive</text>
 <text x="70" y="220" fill="hsl(220 14% 75%)" fontSize="12">• No competition</text>
 <text x="70" y="245" fill="hsl(220 14% 75%)" fontSize="12">• Centralized decisions</text>
 
 {/* Position marker */}
 <circle cx="150" cy="350" r="8" fill="hsl(0 84% 60%)" />
 <line x1="150" y1="320" x2="150" y2="342" stroke="hsl(0 84% 60%)" strokeWidth="2" strokeDasharray="4 2" />
 </motion.g>

 {/* Mixed Economy Box */}
 <motion.g
 variants={itemVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 >
 <rect x="300" y="40" width="200" height="280" rx="12" fill="url(#mixedGrad)" fillOpacity="0.2" stroke="url(#mixedGrad)" strokeWidth="2" />
 <text x="400" y="75" textAnchor="middle" fill="hsl(142 69% 58%)" fontSize="18" fontFamily="Cinzel" fontWeight="600">
 Mixed Economy
 </text>
 <line x1="330" y1="90" x2="470" y2="90" stroke="hsl(142 69% 58%)" strokeWidth="1" opacity="0.5" />
 
 <text x="320" y="120" fill="hsl(220 14% 75%)" fontSize="12">• Both private & public</text>
 <text x="320" y="145" fill="hsl(220 14% 75%)" fontSize="12">• Price + planning</text>
 <text x="320" y="170" fill="hsl(220 14% 75%)" fontSize="12">• Gov't corrects failures</text>
 <text x="320" y="195" fill="hsl(220 14% 75%)" fontSize="12">• Merit goods provided</text>
 <text x="320" y="220" fill="hsl(220 14% 75%)" fontSize="12">• Regulated markets</text>
 <text x="320" y="245" fill="hsl(220 14% 75%)" fontSize="12">• Taxation & welfare</text>
 
 {/* Position marker */}
 <circle cx="400" cy="350" r="8" fill="hsl(142 69% 58%)" />
 <line x1="400" y1="320" x2="400" y2="342" stroke="hsl(142 69% 58%)" strokeWidth="2" strokeDasharray="4 2" />
 </motion.g>

 {/* Arrows showing spectrum */}
 <motion.path
 d="M 250 350 L 300 350"
 stroke="hsl(220 14% 45%)"
 strokeWidth="2"
 markerEnd="url(#arrowhead)"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 0.8, duration: 0.5 }}
 />
 <motion.path
 d="M 500 350 L 550 350"
 stroke="hsl(220 14% 45%)"
 strokeWidth="2"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: { pathLength: 0 }}
 transition={{ delay: 1, duration: 0.5 }}
 />
 </svg>
 </div>
 );
};

export default EconomicSystemsDiagram;
