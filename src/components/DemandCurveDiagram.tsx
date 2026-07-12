import { useEffect, useRef, useState } from 'react';

interface DemandCurveDiagramProps {
 className?: string;
}

const DemandCurveDiagram = ({ className }: DemandCurveDiagramProps) => {
 const [isVisible, setIsVisible] = useState(false);
 const [isAnimated, setIsAnimated] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 setTimeout( => setIsAnimated(true), 100);
 }
 },
 { threshold: 0.3 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 return (
 <div ref={containerRef} className={className}>
 <svg 
 viewBox="0 0 400 300" 
 className="w-full h-auto"
 style={{ opacity: isVisible ? 1: 0, transition: 'opacity 0.5s ease-out' }}
 >
 {/* Grid lines */}
 <g className="text-silver/10" stroke="currentColor" strokeWidth="0.5">
 {[60, 100, 140, 180, 220].map((y) => (
 <line key={`h-${y}`} x1="60" y1={y} x2="360" y2={y} />
 ))}
 {[100, 150, 200, 250, 300].map((x) => (
 <line key={`v-${x}`} x1={x} y1="40" x2={x} y2="260" />
 ))}
 </g>

 {/* Axes */}
 <g stroke="hsl(220 14% 75%)" strokeWidth="2">
 {/* Y-axis */}
 <line x1="60" y1="40" x2="60" y2="260" />
 {/* X-axis */}
 <line x1="60" y1="260" x2="360" y2="260" />
 {/* Arrowheads */}
 <polygon points="60,40 55,50 65,50" fill="hsl(220 14% 75%)" />
 <polygon points="360,260 350,255 350,265" fill="hsl(220 14% 75%)" />
 </g>

 {/* Axis labels */}
 <text x="20" y="150" fill="hsl(220 14% 90%)" fontSize="14" fontFamily="Cinzel" transform="rotate(-90, 20, 150)">
 Price (£)
 </text>
 <text x="200" y="295" fill="hsl(220 14% 90%)" fontSize="14" fontFamily="Cinzel" textAnchor="middle">
 Quantity Demanded
 </text>

 {/* Demand curve */}
 <path
 d="M 80 60 Q 150 120, 200 160 Q 280 220, 340 240"
 fill="none"
 stroke="hsl(234 89% 74%)"
 strokeWidth="3"
 strokeLinecap="round"
 strokeDasharray="400"
 strokeDashoffset={isAnimated ? "0": "400"}
 style={{ transition: 'stroke-dashoffset 2s ease-out' }}
 />

 {/* Demand label */}
 <text 
 x="350" 
 y="235" 
 fill="hsl(234 89% 74%)" 
 fontSize="16" 
 fontFamily="Cinzel"
 fontWeight="600"
 style={{ 
 opacity: isAnimated ? 1: 0, 
 transition: 'opacity 0.5s ease-out 1.5s' 
 }}
 >
 D
 </text>

 {/* Example points */}
 <g style={{ opacity: isAnimated ? 1: 0, transition: 'opacity 0.5s ease-out 1.8s' }}>
 {/* High price, low quantity */}
 <circle cx="100" cy="80" r="6" fill="hsl(217 91% 60%)" />
 <line x1="100" y1="80" x2="100" y2="260" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeDasharray="4" />
 <line x1="60" y1="80" x2="100" y2="80" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeDasharray="4" />
 
 {/* Low price, high quantity */}
 <circle cx="300" cy="220" r="6" fill="hsl(217 91% 60%)" />
 <line x1="300" y1="220" x2="300" y2="260" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeDasharray="4" />
 <line x1="60" y1="220" x2="300" y2="220" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeDasharray="4" />
 </g>

 {/* Price labels */}
 <g fill="hsl(220 14% 65%)" fontSize="11" fontFamily="Inter">
 <text x="45" y="85" textAnchor="end">P₁</text>
 <text x="45" y="225" textAnchor="end">P₂</text>
 <text x="100" y="278" textAnchor="middle">Q₁</text>
 <text x="300" y="278" textAnchor="middle">Q₂</text>
 </g>

 {/* Annotation arrows */}
 <g 
 style={{ 
 opacity: isAnimated ? 1: 0, 
 transition: 'opacity 0.5s ease-out 2.2s' 
 }}
 >
 <path 
 d="M 140 100 L 180 140" 
 stroke="hsl(220 14% 50%)" 
 strokeWidth="1.5" 
 fill="none"
 markerEnd="url(#arrowhead)"
 />
 <text x="110" y="90" fill="hsl(220 14% 75%)" fontSize="10" fontFamily="Inter">
 Price falls →
 </text>
 <text x="115" y="102" fill="hsl(220 14% 75%)" fontSize="10" fontFamily="Inter">
 Demand rises
 </text>
 </g>

 {/* Arrow marker definition */}
 <defs>
 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(220 14% 50%)" />
 </marker>
 </defs>
 </svg>
 </div>
 );
};

export default DemandCurveDiagram;
