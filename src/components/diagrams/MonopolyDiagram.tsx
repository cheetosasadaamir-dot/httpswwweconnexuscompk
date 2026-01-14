import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MonopolyDiagramProps {
  title?: string;
}

const MonopolyDiagram = ({ title }: MonopolyDiagramProps) => {
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
  const demandCurve = 'hsl(185 100% 50%)'; // Electric Cyan - AR/D
  const mrCurve = 'hsl(300 100% 60%)'; // Neon Magenta - MR
  const mcCurve = 'hsl(142 76% 45%)'; // Green - MC
  const acCurve = 'hsl(25 95% 55%)'; // Orange - AC
  const supernormalProfit = 'hsl(45 93% 55%)'; // Gold - Profit area
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

        {/* Supernormal Profit Rectangle */}
        <motion.rect
          x="80"
          y="140"
          width="180"
          height="80"
          fill={supernormalProfit}
          opacity="0.2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        />
        <motion.rect
          x="80"
          y="140"
          width="180"
          height="80"
          fill="none"
          stroke={supernormalProfit}
          strokeWidth="2"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
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
          Costs / Revenue
        </text>
        <text x="265" y="390" fill={labelColor} fontSize="16" fontFamily="Cinzel" textAnchor="middle">
          Output (Q)
        </text>

        {/* AR/D curve (Demand = Average Revenue) */}
        <motion.path
          d="M 100 80 Q 200 150, 300 220 Q 380 280, 430 320"
          fill="none"
          stroke={demandCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x="440" 
          y="325" 
          fill={demandCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          AR = D
        </motion.text>

        {/* MR curve (Marginal Revenue - steeper than AR) */}
        <motion.path
          d="M 100 80 Q 180 180, 250 280 Q 290 340, 320 360"
          fill="none"
          stroke={mrCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        />
        <motion.text 
          x="330" 
          y="365" 
          fill={mrCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          MR
        </motion.text>

        {/* MC curve (Marginal Cost - U-shaped) */}
        <motion.path
          d="M 100 280 Q 140 260, 180 240 Q 220 220, 260 220 Q 320 230, 380 280 Q 420 320, 450 360"
          fill="none"
          stroke={mcCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        />
        <motion.text 
          x="455" 
          y="365" 
          fill={mcCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          MC
        </motion.text>

        {/* AC curve (Average Cost - U-shaped, above MC at profit-max) */}
        <motion.path
          d="M 100 300 Q 140 260, 200 220 Q 280 195, 340 210 Q 400 240, 450 290"
          fill="none"
          stroke={acCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.9 }}
        />
        <motion.text 
          x="455" 
          y="295" 
          fill={acCurve} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.1 }}
        />

        {/* MC = MR intersection point */}
        <motion.circle 
          cx="260" 
          cy="220" 
          r="6" 
          fill={mcCurve}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.2, type: "spring" }}
        />

        {/* Vertical line from MC=MR to demand curve */}
        <motion.line 
          x1="260" y1="220" x2="260" y2="140" 
          stroke={axisColor} 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />

        {/* Price point on demand curve */}
        <motion.circle 
          cx="260" 
          cy="140" 
          r="8" 
          fill={equilibriumPoint}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.6, type: "spring" }}
        />

        {/* Dashed lines to axes */}
        <motion.line 
          x1="260" y1="140" x2="260" y2="350" 
          stroke={axisColor} 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.7, duration: 0.5 }}
        />
        <motion.line 
          x1="80" y1="140" x2="260" y2="140" 
          stroke={axisColor} 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.7, duration: 0.5 }}
        />
        <motion.line 
          x1="80" y1="220" x2="260" y2="220" 
          stroke={axisColor} 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.7, duration: 0.5 }}
        />

        {/* Labels */}
        <motion.text 
          x="60" 
          y="145" 
          fill={labelColor} 
          fontSize="14" 
          textAnchor="end"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.9 }}
        >
          P
        </motion.text>
        <motion.text 
          x="60" 
          y="225" 
          fill={labelColor} 
          fontSize="14" 
          textAnchor="end"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.9 }}
        >
          AC
        </motion.text>
        <motion.text 
          x="260" 
          y="370" 
          fill={labelColor} 
          fontSize="14" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.9 }}
        >
          Qm
        </motion.text>

        {/* Supernormal Profit label */}
        <motion.text 
          x="170" 
          y="185" 
          fill={supernormalProfit} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.2 }}
        >
          Supernormal
        </motion.text>
        <motion.text 
          x="170" 
          y="200" 
          fill={supernormalProfit} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.2 }}
        >
          Profit
        </motion.text>

        {/* MC = MR annotation */}
        <motion.text 
          x="290" 
          y="240" 
          fill={mcCurve} 
          fontSize="11" 
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          MC = MR
        </motion.text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: demandCurve }} />
          <span>AR = Demand</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mrCurve }} />
          <span>MR (Marginal Revenue)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mcCurve }} />
          <span>MC (Marginal Cost)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: acCurve }} />
          <span>AC (Average Cost)</span>
        </div>
      </div>
    </div>
  );
};

export default MonopolyDiagram;
