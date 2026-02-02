import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface KeynesianLRASDiagramProps {
  title?: string;
}

/**
 * Keynesian LRAS Diagram
 * CIE 9708 Standard: THREE distinct phases reflecting varying degrees of spare capacity
 * Phase 1: Perfectly Elastic (deep recession, spare capacity)
 * Phase 2: Upward Sloping (approaching full employment, bottlenecks)
 * Phase 3: Perfectly Inelastic (full capacity at Yf)
 */
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

  // CIE 9708 Standard Colors
  const lrasCurve = 'hsl(var(--cambridge-cyan))'; // Keynesian LRAS
  const adCurve1 = 'hsl(142 76% 45%)'; // Green - AD1 (elastic region)
  const adCurve2 = 'hsl(var(--secondary))'; // AD2 (intermediate)
  const adCurve3 = 'hsl(45 93% 55%)'; // Gold - AD3 (inelastic)
  const axisColor = 'hsl(var(--silver))';
  const gridColor = 'hsl(220 14% 20%)';
  const labelColor = 'hsl(var(--foreground))';
  const phaseColor = 'hsl(var(--muted-foreground))';

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-6">
      {/* Header with CIE Standard Definition */}
      <div className="mb-4">
        {title && (
          <h4 className="font-serif text-lg text-gradient mb-2">{title}</h4>
        )}
        <p className="text-muted-foreground text-sm">
          Keynesian view: LRAS has <strong>three distinct phases</strong> reflecting spare capacity, bottlenecks, and full employment
        </p>
      </div>

      {/* Formal Definition Box */}
      <div className="mb-4 p-4 bg-[hsl(var(--cambridge-cyan))]/10 border border-[hsl(var(--cambridge-cyan))]/30 rounded-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-[hsl(var(--cambridge-cyan))]">Keynesian LRAS:</span>{' '}
          The Keynesian view rejects the vertical LRAS of Classical economics. Instead, the economy can settle at 
          equilibrium <em>below</em> full employment for extended periods due to <strong>wage and price rigidities</strong>. 
          The shape reflects: (1) <strong>Elastic phase</strong> — high unemployment, firms can expand without raising prices; 
          (2) <strong>Intermediate phase</strong> — bottlenecks emerge, both P and Y rise; 
          (3) <strong>Inelastic phase</strong> — full capacity at Y<sub>f</sub>, only prices rise.
        </p>
      </div>

      <svg viewBox="0 0 550 420" className="w-full h-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-keynesian" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridColor} strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrow-keynesian" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>
        <rect x="80" y="60" width="420" height="290" fill="url(#grid-keynesian)" />

        {/* Phase regions - subtle shading with CIE standard colors */}
        <motion.rect
          x="80"
          y="270"
          width="120"
          height="80"
          fill="hsl(142 76% 45%)"
          opacity="0.12"
          rx="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.12 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        <motion.rect
          x="200"
          y="140"
          width="140"
          height="210"
          fill="hsl(45 93% 55%)"
          opacity="0.1"
          rx="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        <motion.rect
          x="340"
          y="60"
          width="60"
          height="290"
          fill="hsl(var(--destructive))"
          opacity="0.1"
          rx="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />

        {/* Axes with arrows */}
        <line x1="80" y1="60" x2="80" y2="350" stroke={axisColor} strokeWidth="2" />
        <line x1="80" y1="350" x2="500" y2="350" stroke={axisColor} strokeWidth="2" markerEnd="url(#arrow-keynesian)" />
        <polygon points="80,60 75,72 85,72" fill={axisColor} />

        {/* Axis labels - CIE 9708 Standard Notation */}
        <text x="28" y="205" fill={labelColor} fontSize="13" fontWeight="600" transform="rotate(-90, 28, 205)">
          General Price Level (GPL)
        </text>
        <text x="290" y="390" fill={labelColor} fontSize="13" fontWeight="600" textAnchor="middle">
          Real National Output / Real GDP (Y)
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
        <div className="glass-card p-4 border-l-4" style={{ borderColor: adCurve1 }}>
          <h5 className="font-semibold text-[hsl(142_76%_45%)] mb-2">Phase 1: Perfectly Elastic</h5>
          <p className="text-muted-foreground text-xs leading-relaxed mb-2">
            Deep recession with high unemployment and idle capacity. Firms can hire unemployed workers 
            at existing wages → output expands without price pressure.
          </p>
          <div className="font-mono text-xs bg-muted/40 p-2 rounded">
            ↑AD → ↑Y, P constant
          </div>
        </div>
        <div className="glass-card p-4 border-l-4" style={{ borderColor: adCurve2 }}>
          <h5 className="font-semibold text-secondary mb-2">Phase 2: Upward Sloping</h5>
          <p className="text-muted-foreground text-xs leading-relaxed mb-2">
            Approaching full employment. Labour shortages in some sectors → wage rises → 
            bottlenecks in production → firms raise prices to cover costs.
          </p>
          <div className="font-mono text-xs bg-muted/40 p-2 rounded">
            ↑AD → ↑Y and ↑P
          </div>
        </div>
        <div className="glass-card p-4 border-l-4" style={{ borderColor: adCurve3 }}>
          <h5 className="font-semibold text-[hsl(45_93%_55%)] mb-2">Phase 3: Perfectly Inelastic</h5>
          <p className="text-muted-foreground text-xs leading-relaxed mb-2">
            Full capacity at Y<sub>f</sub>. All factors employed → physical limit to production → 
            extra demand creates only demand-pull inflation.
          </p>
          <div className="font-mono text-xs bg-muted/40 p-2 rounded">
            ↑AD → P rises, Y constant at Y<sub>f</sub>
          </div>
        </div>
      </div>

      {/* Examiner Comparison Box */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm">
        <h4 className="font-semibold text-primary mb-2">Classical vs Keynesian Debate</h4>
        <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
          <div>
            <span className="font-semibold text-[hsl(var(--cambridge-green))]">Classical/Monetarist:</span> LRAS is always 
            vertical → economy self-corrects to Y<sub>f</sub> → demand-side policies only affect prices.
          </div>
          <div>
            <span className="font-semibold text-[hsl(var(--cambridge-cyan))]">Keynesian:</span> LRAS has elastic section → 
            economy can be stuck below Y<sub>f</sub> → demand-side policies can increase real output without inflation.
          </div>
        </div>
      </div>

      {/* Examiner Trap */}
      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs">
        <span className="font-semibold text-amber-400">⚠️ Exam Tip:</span>
        <span className="text-muted-foreground ml-2">
          When drawing Keynesian LRAS, ensure three <strong>clearly distinguishable sections</strong>: 
          a horizontal section (spare capacity), a curved upward section (bottlenecks), 
          and a vertical section (full capacity). Label each phase explicitly.
        </span>
      </div>
    </div>
  );
};

export default KeynesianLRASDiagram;
