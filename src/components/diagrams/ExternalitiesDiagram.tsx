import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ExternalitiesDiagramProps {
  title?: string;
  type?: 'negative-production' | 'negative-consumption' | 'positive-production' | 'positive-consumption';
}

const ExternalitiesDiagram = ({ title, type = 'negative-production' }: ExternalitiesDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  // Cambridge standard colors
  const primaryCurve = 'hsl(185 100% 50%)'; // Electric Cyan - MPC
  const socialCurve = 'hsl(300 100% 60%)'; // Neon Magenta - MSC
  const demandCurve = 'hsl(142 76% 45%)'; // Green - MPB/MSB
  const welfareLoss = 'hsl(0 84% 60%)'; // Red - Welfare loss
  const equilibriumPoint = 'hsl(45 93% 55%)'; // Gold
  const axisColor = 'hsl(220 14% 75%)';
  const gridColor = 'hsl(220 14% 20%)';
  const labelColor = 'hsl(220 14% 90%)';

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
      {title && (
        <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h4>
      )}
      <svg viewBox="0 0 500 400" className="w-full h-auto">
        {/* Grid */}
        <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
          {[80, 120, 160, 200, 240, 280, 320].map((y) => (
            <line key={`h-${y}`} x1="80" y1={y} x2="450" y2={y} />
          ))}
          {[120, 180, 240, 300, 360, 420].map((x) => (
            <line key={`v-${x}`} x1={x} y1="60" x2={x} y2="350" />
          ))}
        </g>

        {/* Welfare Loss Triangle - Shaded area */}
        <motion.polygon
          points="260,200 340,140 340,200"
          fill={welfareLoss}
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />
        <motion.polygon
          points="260,200 340,140 340,200"
          fill="none"
          stroke={welfareLoss}
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />

        {/* Axes */}
        <g stroke={axisColor} strokeWidth="2">
          <line x1="80" y1="60" x2="80" y2="350" />
          <line x1="80" y1="350" x2="450" y2="350" />
          <polygon points="80,60 75,72 85,72" fill={axisColor} />
          <polygon points="450,350 438,345 438,355" fill={axisColor} />
        </g>

        {/* Axis labels - Cambridge standard */}
        <text x="30" y="205" fill={labelColor} fontSize="14" fontFamily="Cinzel" transform="rotate(-90, 30, 205)">
          Cost / Benefit
        </text>
        <text x="265" y="390" fill={labelColor} fontSize="16" fontFamily="Cinzel" textAnchor="middle">
          Quantity (Q)
        </text>

        {/* MPC curve (Marginal Private Cost) - Supply */}
        <motion.path
          d="M 100 320 Q 200 280, 280 200 Q 360 120, 430 60"
          fill="none"
          stroke={primaryCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x="440" 
          y="65" 
          fill={primaryCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          MPC = S
        </motion.text>

        {/* MSC curve (Marginal Social Cost) - Above MPC */}
        <motion.path
          d="M 100 280 Q 180 240, 260 160 Q 340 80, 410 40"
          fill="none"
          stroke={socialCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        />
        <motion.text 
          x="420" 
          y="45" 
          fill={socialCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          MSC
        </motion.text>

        {/* MPB = MSB = D curve (Demand) */}
        <motion.path
          d="M 100 80 Q 180 140, 260 200 Q 340 260, 420 320"
          fill="none"
          stroke={demandCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        />
        <motion.text 
          x="430" 
          y="325" 
          fill={demandCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          MPB = MSB = D
        </motion.text>

        {/* External Cost annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <line x1="320" y1="110" x2="320" y2="180" stroke={welfareLoss} strokeWidth="2" strokeDasharray="4,3" />
          <text x="335" y="150" fill={welfareLoss} fontSize="11" fontWeight="500">
            External
          </text>
          <text x="335" y="165" fill={welfareLoss} fontSize="11" fontWeight="500">
            Cost
          </text>
        </motion.g>

        {/* Market Equilibrium E₁ (at MPC = MPB) */}
        <motion.circle 
          cx="340" 
          cy="200" 
          r="8" 
          fill={primaryCurve}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1.8, type: "spring" }}
        />
        <motion.text 
          x="355" 
          y="210" 
          fill={primaryCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.9 }}
        >
          E₁
        </motion.text>

        {/* Social Optimum E* (at MSC = MSB) */}
        <motion.circle 
          cx="260" 
          cy="200" 
          r="8" 
          fill={equilibriumPoint}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.2, type: "spring" }}
        />
        <motion.text 
          x="245" 
          y="185" 
          fill={equilibriumPoint} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          E*
        </motion.text>

        {/* Dashed lines for Q₁ and Q* */}
        <motion.line 
          x1="340" y1="200" x2="340" y2="350" 
          stroke={primaryCurve} 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
        <motion.line 
          x1="260" y1="200" x2="260" y2="350" 
          stroke={equilibriumPoint} 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />

        {/* Q labels */}
        <motion.text 
          x="260" 
          y="370" 
          fill={equilibriumPoint} 
          fontSize="14" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          Q*
        </motion.text>
        <motion.text 
          x="340" 
          y="370" 
          fill={primaryCurve} 
          fontSize="14" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          Q₁
        </motion.text>

        {/* Welfare Loss label */}
        <motion.text 
          x="315" 
          y="185" 
          fill={welfareLoss} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3 }}
        >
          Welfare
        </motion.text>
        <motion.text 
          x="315" 
          y="200" 
          fill={welfareLoss} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3 }}
        >
          Loss
        </motion.text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryCurve }} />
          <span>MPC (Private Cost)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: socialCurve }} />
          <span>MSC (Social Cost)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: demandCurve }} />
          <span>MPB = MSB (Demand)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5" style={{ backgroundColor: welfareLoss }} />
          <span>Welfare Loss</span>
        </div>
      </div>
    </div>
  );
};

export default ExternalitiesDiagram;
