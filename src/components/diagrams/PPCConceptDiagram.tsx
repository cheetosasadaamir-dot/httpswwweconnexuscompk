import { useEffect, useRef, useState } from 'react';
import { motion, type Easing } from 'framer-motion';

interface PPCConceptDiagramProps {
  showGrowth?: boolean;
  showPivot?: boolean;
  title?: string;
}

const PPCConceptDiagram = ({ showGrowth = false, showPivot = false, title }: PPCConceptDiagramProps) => {
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

  const easeInOut: Easing = [0.42, 0, 0.58, 1];

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: easeInOut }
    }
  };

  const pointVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay, duration: 0.5, type: "spring" as const }
    })
  };

  return (
    <div ref={containerRef} className="w-full max-w-lg mx-auto">
      {title && (
        <h4 className="font-serif text-lg text-silver-bright text-center mb-4">{title}</h4>
      )}
      <svg viewBox="0 0 400 350" className="w-full h-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(217 33% 20%)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(234 89% 74%)" />
          </linearGradient>
          <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(142 76% 36%)" />
            <stop offset="100%" stopColor="hsl(142 69% 58%)" />
          </linearGradient>
        </defs>
        <rect width="400" height="350" fill="url(#grid)" />

        {/* Axes */}
        <motion.line
          x1="60" y1="290" x2="380" y2="290"
          stroke="hsl(220 14% 75%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.line
          x1="60" y1="290" x2="60" y2="30"
          stroke="hsl(220 14% 75%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Arrow heads */}
        <polygon points="380,290 370,285 370,295" fill="hsl(220 14% 75%)" />
        <polygon points="60,30 55,40 65,40" fill="hsl(220 14% 75%)" />

        {/* Axis Labels */}
        <text x="220" y="320" textAnchor="middle" fill="hsl(220 14% 75%)" fontSize="14" fontFamily="Inter">
          Good X (Capital Goods)
        </text>
        <text x="25" y="160" textAnchor="middle" fill="hsl(220 14% 75%)" fontSize="14" fontFamily="Inter" 
          transform="rotate(-90, 25, 160)">
          Good Y (Consumer Goods)
        </text>

        {/* Original PPC Curve */}
        <motion.path
          d="M 80 60 Q 120 100 200 200 Q 280 280 340 280"
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />

        {/* Growth curve (shifted outward) */}
        {showGrowth && (
          <motion.path
            d="M 90 50 Q 140 90 230 190 Q 320 270 370 270"
            fill="none"
            stroke="url(#growthGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 4"
            variants={curveVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          />
        )}

        {/* Pivot curve */}
        {showPivot && (
          <motion.path
            d="M 80 60 Q 140 110 240 200 Q 340 280 370 280"
            fill="none"
            stroke="hsl(45 93% 47%)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 4"
            variants={curveVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          />
        )}

        {/* Point A - On curve (efficient). Midpoint (t=0.5) of the first
            Bézier segment M 80 60 Q 120 100 200 200 => (130, 115). */}
        <motion.circle
          cx="130" cy="115" r="8"
          fill="hsl(217 91% 60%)"
          stroke="hsl(217 91% 80%)"
          strokeWidth="2"
          variants={pointVariants}
          custom={1}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="140" y="110" fill="hsl(220 14% 90%)" fontSize="14" fontWeight="600">A</text>

        {/* Point B - On curve */}
        <motion.circle
          cx="200" cy="200" r="8"
          fill="hsl(217 91% 60%)"
          stroke="hsl(217 91% 80%)"
          strokeWidth="2"
          variants={pointVariants}
          custom={1.2}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="210" y="195" fill="hsl(220 14% 90%)" fontSize="14" fontWeight="600">B</text>

        {/* Point C - On curve. Midpoint of Q 280 280 340 280 => (275, 260). */}
        <motion.circle
          cx="275" cy="260" r="8"
          fill="hsl(217 91% 60%)"
          stroke="hsl(217 91% 80%)"
          strokeWidth="2"
          variants={pointVariants}
          custom={1.4}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="290" y="255" fill="hsl(220 14% 90%)" fontSize="14" fontWeight="600">C</text>

        {/* Point H - Inside (inefficient/unemployment) */}
        <motion.circle
          cx="160" cy="200" r="8"
          fill="hsl(0 84% 60%)"
          stroke="hsl(0 84% 80%)"
          strokeWidth="2"
          variants={pointVariants}
          custom={1.6}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="170" y="195" fill="hsl(220 14% 90%)" fontSize="14" fontWeight="600">H</text>
        <text x="160" y="220" fill="hsl(0 84% 60%)" fontSize="10" textAnchor="middle">(Inefficiency)</text>

        {/* Point F - Outside (unattainable) */}
        <motion.circle
          cx="280" cy="100" r="8"
          fill="hsl(45 93% 47%)"
          stroke="hsl(45 93% 67%)"
          strokeWidth="2"
          variants={pointVariants}
          custom={1.8}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="290" y="95" fill="hsl(220 14% 90%)" fontSize="14" fontWeight="600">F</text>
        <text x="280" y="120" fill="hsl(45 93% 47%)" fontSize="10" textAnchor="middle">(Unattainable)</text>

        {/* Legend */}
        <rect x="250" y="20" width="140" height="70" rx="8" fill="hsl(222 47% 6%)" fillOpacity="0.8" stroke="hsl(217 33% 20%)" />
        <circle cx="265" cy="40" r="5" fill="hsl(217 91% 60%)" />
        <text x="280" y="44" fill="hsl(220 14% 75%)" fontSize="11">Efficient (on PPC)</text>
        <circle cx="265" cy="60" r="5" fill="hsl(0 84% 60%)" />
        <text x="280" y="64" fill="hsl(220 14% 75%)" fontSize="11">Inefficient (inside)</text>
        <circle cx="265" cy="80" r="5" fill="hsl(45 93% 47%)" />
        <text x="280" y="84" fill="hsl(220 14% 75%)" fontSize="11">Unattainable (outside)</text>
      </svg>
    </div>
  );
};

export default PPCConceptDiagram;
