import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface KeynesianLRASDiagramProps {
  title?: string;
}

const KeynesianLRASDiagram = ({ title }: KeynesianLRASDiagramProps) => {
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
  const lrasCurve = 'hsl(185 100% 50%)'; // Electric Cyan - LRAS
  const adCurve1 = 'hsl(142 76% 45%)'; // Green - AD1
  const adCurve2 = 'hsl(300 100% 60%)'; // Neon Magenta - AD2
  const adCurve3 = 'hsl(45 93% 55%)'; // Gold - AD3
  const equilibriumPoint = 'hsl(45 93% 55%)'; // Gold
  const axisColor = 'hsl(220 14% 75%)';
  const gridColor = 'hsl(220 14% 20%)';
  const labelColor = 'hsl(220 14% 90%)';
  const phaseColor = 'hsl(220 14% 50%)';

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h4>
      )}
      <svg viewBox="0 0 550 420" className="w-full h-auto">
        {/* Grid */}
        <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
          {[80, 120, 160, 200, 240, 280, 320].map((y) => (
            <line key={`h-${y}`} x1="80" y1={y} x2="500" y2={y} />
          ))}
          {[120, 180, 240, 300, 360, 420, 480].map((x) => (
            <line key={`v-${x}`} x1={x} y1="60" x2={x} y2="350" />
          ))}
        </g>

        {/* Phase regions - subtle shading */}
        <motion.rect
          x="80"
          y="270"
          width="120"
          height="80"
          fill="hsl(142 76% 45%)"
          opacity="0.1"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        <motion.rect
          x="200"
          y="150"
          width="140"
          height="200"
          fill="hsl(45 93% 55%)"
          opacity="0.08"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        <motion.rect
          x="340"
          y="80"
          width="60"
          height="270"
          fill="hsl(0 84% 60%)"
          opacity="0.08"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />

        {/* Axes */}
        <g stroke={axisColor} strokeWidth="2">
          <line x1="80" y1="60" x2="80" y2="350" />
          <line x1="80" y1="350" x2="500" y2="350" />
          <polygon points="80,60 75,72 85,72" fill={axisColor} />
          <polygon points="500,350 488,345 488,355" fill={axisColor} />
        </g>

        {/* Axis labels - Cambridge standard Macro notation */}
        <text x="30" y="205" fill={labelColor} fontSize="16" fontFamily="Cinzel" transform="rotate(-90, 30, 205)">
          Price Level (P)
        </text>
        <text x="290" y="395" fill={labelColor} fontSize="16" fontFamily="Cinzel" textAnchor="middle">
          Real Output (Y)
        </text>

        {/* Keynesian LRAS - Three phases */}
        <motion.path
          d="M 100 270 L 200 270 Q 250 265, 280 230 Q 310 195, 330 150 Q 350 105, 400 80 L 400 60"
          fill="none"
          stroke={lrasCurve}
          strokeWidth="4"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x="415" 
          y="65" 
          fill={lrasCurve} 
          fontSize="16" 
          fontFamily="Cinzel"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          LRAS
        </motion.text>

        {/* Phase labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          {/* Phase 1 - Elastic */}
          <text x="140" y="295" fill={phaseColor} fontSize="11" textAnchor="middle" fontWeight="500">
            Phase 1
          </text>
          <text x="140" y="310" fill={phaseColor} fontSize="10" textAnchor="middle">
            (Elastic)
          </text>
          
          {/* Phase 2 - Intermediate */}
          <text x="270" y="295" fill={phaseColor} fontSize="11" textAnchor="middle" fontWeight="500">
            Phase 2
          </text>
          <text x="270" y="310" fill={phaseColor} fontSize="10" textAnchor="middle">
            (Intermediate)
          </text>
          
          {/* Phase 3 - Inelastic */}
          <text x="370" y="295" fill={phaseColor} fontSize="11" textAnchor="middle" fontWeight="500">
            Phase 3
          </text>
          <text x="370" y="310" fill={phaseColor} fontSize="10" textAnchor="middle">
            (Inelastic)
          </text>
        </motion.g>

        {/* AD1 curve - in elastic phase */}
        <motion.path
          d="M 100 80 Q 120 150, 150 200 Q 180 250, 220 290"
          fill="none"
          stroke={adCurve1}
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 2.5 }}
        />
        <motion.text 
          x="230" 
          y="295" 
          fill={adCurve1} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.2 }}
        >
          AD₁
        </motion.text>

        {/* AD2 curve - in intermediate phase */}
        <motion.path
          d="M 180 80 Q 220 140, 270 190 Q 320 240, 360 280"
          fill="none"
          stroke={adCurve2}
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 3 }}
        />
        <motion.text 
          x="370" 
          y="285" 
          fill={adCurve2} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
        >
          AD₂
        </motion.text>

        {/* AD3 curve - hitting vertical section */}
        <motion.path
          d="M 300 80 Q 340 130, 380 170 Q 420 210, 460 250"
          fill="none"
          stroke={adCurve3}
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 3.5 }}
        />
        <motion.text 
          x="470" 
          y="255" 
          fill={adCurve3} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 4 }}
        >
          AD₃
        </motion.text>

        {/* Equilibrium points */}
        <motion.circle 
          cx="150" 
          cy="270" 
          r="6" 
          fill={adCurve1}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.3, type: "spring" }}
        />
        <motion.text 
          x="140" 
          y="260" 
          fill={adCurve1} 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.4 }}
        >
          E₁
        </motion.text>

        <motion.circle 
          cx="300" 
          cy="200" 
          r="6" 
          fill={adCurve2}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.6, type: "spring" }}
        />
        <motion.text 
          x="310" 
          y="195" 
          fill={adCurve2} 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.7 }}
        >
          E₂
        </motion.text>

        <motion.circle 
          cx="400" 
          cy="100" 
          r="6" 
          fill={adCurve3}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.9, type: "spring" }}
        />
        <motion.text 
          x="412" 
          y="95" 
          fill={adCurve3} 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 4 }}
        >
          E₃
        </motion.text>

        {/* Full employment line Yf */}
        <motion.line 
          x1="400" y1="60" x2="400" y2="350" 
          stroke={axisColor} 
          strokeWidth="1.5" 
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
        <motion.text 
          x="400" 
          y="370" 
          fill={labelColor} 
          fontSize="14" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          Yf
        </motion.text>

        {/* Output labels */}
        <motion.text 
          x="150" 
          y="370" 
          fill={labelColor} 
          fontSize="12" 
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
        >
          Y₁
        </motion.text>
        <motion.text 
          x="300" 
          y="370" 
          fill={labelColor} 
          fontSize="12" 
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.8 }}
        >
          Y₂
        </motion.text>
      </svg>

      {/* Legend and explanation */}
      <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
        <div className="glass-card p-4 border-l-2" style={{ borderColor: adCurve1 }}>
          <h5 className="font-semibold text-silver-bright mb-1">Phase 1: Elastic</h5>
          <p className="text-muted-foreground text-xs">
            Deep recession with spare capacity. AD increases → Y rises, P constant.
          </p>
        </div>
        <div className="glass-card p-4 border-l-2" style={{ borderColor: adCurve2 }}>
          <h5 className="font-semibold text-silver-bright mb-1">Phase 2: Intermediate</h5>
          <p className="text-muted-foreground text-xs">
            Approaching full employment. AD increases → both Y and P rise.
          </p>
        </div>
        <div className="glass-card p-4 border-l-2" style={{ borderColor: adCurve3 }}>
          <h5 className="font-semibold text-silver-bright mb-1">Phase 3: Inelastic</h5>
          <p className="text-muted-foreground text-xs">
            Full capacity at Yf. AD increases → only P rises (pure inflation).
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeynesianLRASDiagram;
