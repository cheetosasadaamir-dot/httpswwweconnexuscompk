import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface KeynesianLRASDiagramProps {
  title?: string;
}

/**
 * Keynesian LRAS Diagram
 * Exam Standard: THREE distinct phases reflecting varying degrees of spare capacity
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

    return => observer.disconnect();
  }, []);

  // Exam Standard Colors
  const lrasCurve = 'hsl(var(--cambridge-cyan))'; // Keynesian LRAS
  const adCurve1 = 'hsl(142 76% 45%)'; // Green - AD1 (elastic region)
  const adCurve2 = 'hsl(var(--secondary))'; // AD2 (intermediate)
  const adCurve3 = 'hsl(45 93% 55%)'; // Gold - AD3 (inelastic)
  const axisColor = 'hsl(var(--silver))';
  const gridColor = 'hsl(220 14% 20%)';
  const labelColor = 'hsl(var(--foreground))';
  const phaseColor = 'hsl(var(--muted-foreground))';

  // SVG dimensions and scale functions
  const margin = { left: 80, right: 50, top: 60, bottom: 70 };
  const chartW = 420;
  const chartH = 290;

  const xScale = (val: number) => margin.left + (val / 100) * chartW;
  const yScale = (val: number) => margin.top + chartH - (val / 100) * chartH;

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

        {/* 
          KEYNESIAN LRAS - Three mathematically precise phases:
          Phase 1 (Elastic): Horizontal from x=0 to x=40 at P=75
          Phase 2 (Intermediate): Curved from (40, 75) to (75, 55)
          Phase 3 (Inelastic): Vertical at x=75 (Yf)
          
          Scale: x in [0, 100], y (Price) in [0, 100]
        */}

        {/* Phase regions - subtle shading */}
        <motion.rect
          x={xScale(0)}
          y={yScale(85)}
          width={xScale(40) - xScale(0)}
          height={yScale(65) - yScale(85)}
          fill={adCurve1}
          opacity="0.1"
          rx="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        <motion.rect
          x={xScale(40)}
          y={yScale(95)}
          width={xScale(75) - xScale(40)}
          height={yScale(50) - yScale(95)}
          fill={adCurve2}
          opacity="0.08"
          rx="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        <motion.rect
          x={xScale(75)}
          y={yScale(100)}
          width={xScale(85) - xScale(75)}
          height={yScale(0) - yScale(100)}
          fill="hsl(var(--destructive))"
          opacity="0.08"
          rx="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />

        {/* Axes with arrows */}
        <line x1="80" y1="60" x2="80" y2="350" stroke={axisColor} strokeWidth="2" />
        <line x1="80" y1="350" x2="500" y2="350" stroke={axisColor} strokeWidth="2" markerEnd="url(#arrow-keynesian)" />
        <polygon points="80,60 75,72 85,72" fill={axisColor} />

        {/* Axis labels - Exam Standard Notation */}
        <text x="28" y="205" fill={labelColor} fontSize="13" fontWeight="600" transform="rotate(-90, 28, 205)">
          General Price Level (GPL)
        </text>
        <text x="290" y="390" fill={labelColor} fontSize="13" fontWeight="600" textAnchor="middle">
          Real National Output / Real GDP (Y)
        </text>

        {/* KEYNESIAN LRAS - Three precise phases */}
        {/* Phase 1: Horizontal (Elastic) - P constant at 75 */}
        <motion.line
          x1={xScale(5)} y1={yScale(75)}
          x2={xScale(40)} y2={yScale(75)}
          stroke={lrasCurve}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Phase 2: Upward Sloping (Intermediate) - from (40, 75) to (75, 30) */}
        <motion.path
          d={`M ${xScale(40)} ${yScale(75)} Q ${xScale(55)} ${yScale(60)}, ${xScale(65)} ${yScale(45)} Q ${xScale(72)} ${yScale(35)}, ${xScale(75)} ${yScale(25)}`}
          fill="none"
          stroke={lrasCurve}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        
        {/* Phase 3: Vertical (Inelastic) at Yf - x = 75 */}
        <motion.line
          x1={xScale(75)} y1={yScale(25)}
          x2={xScale(75)} y2={yScale(98)}
          stroke={lrasCurve}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        
        <motion.text 
          x={xScale(78)} 
          y={yScale(95)} 
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
          <text x={xScale(22)} y={yScale(80)} fill={phaseColor} fontSize="10" textAnchor="middle" fontWeight="500">
            Phase 1
          </text>
          <text x={xScale(22)} y={yScale(77)} fill={phaseColor} fontSize="9" textAnchor="middle">
            (Perfectly Elastic)
          </text>
          
          {/* Phase 2 - Intermediate */}
          <text x={xScale(57)} y={yScale(52)} fill={phaseColor} fontSize="10" textAnchor="middle" fontWeight="500">
            Phase 2
          </text>
          <text x={xScale(57)} y={yScale(48)} fill={phaseColor} fontSize="9" textAnchor="middle">
            (Intermediate)
          </text>
          
          {/* Phase 3 - Inelastic */}
          <text x={xScale(83)} y={yScale(60)} fill={phaseColor} fontSize="10" textAnchor="middle" fontWeight="500">
            Phase 3
          </text>
          <text x={xScale(83)} y={yScale(56)} fill={phaseColor} fontSize="9" textAnchor="middle">
            (Inelastic)
          </text>
        </motion.g>

        {/* AD1 - intersects LRAS in Phase 1 (elastic section) at Q=25, P=75 */}
        {/* AD1 equation: P = 95 - 0.8Q → intersects P=75 at Q=25 */}
        <motion.line
          x1={xScale(5)} y1={yScale(91)}
          x2={xScale(95)} y2={yScale(19)}
          stroke={adCurve1}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(92)} 
          y={yScale(17)} 
          fill={adCurve1} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.2 }}
        >
          AD₁
        </motion.text>

        {/* AD2 - intersects LRAS in Phase 2 (intermediate) at approximately Q=55, P=55 */}
        {/* AD2 equation: P = 110 - Q → at P=55, Q=55 */}
        <motion.line
          x1={xScale(15)} y1={yScale(95)}
          x2={xScale(95)} y2={yScale(15)}
          stroke={adCurve2}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(92)} 
          y={yScale(13)} 
          fill={adCurve2} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
        >
          AD₂
        </motion.text>

        {/* AD3 - intersects LRAS in Phase 3 (vertical at Yf=75) */}
        <motion.line
          x1={xScale(30)} y1={yScale(97)}
          x2={xScale(98)} y2={yScale(29)}
          stroke={adCurve3}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(95)} 
          y={yScale(27)} 
          fill={adCurve3} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 4 }}
        >
          AD₃
        </motion.text>

        {/* Equilibrium points - PRECISELY at intersections */}
        {/* E₁: AD1 intersects horizontal LRAS at Q=25, P=75 */}
        <motion.circle 
          cx={xScale(25)} 
          cy={yScale(75)} 
          r="6" 
          fill={adCurve1}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.3, type: "spring" }}
        />
        <motion.text 
          x={xScale(25) - 15} 
          y={yScale(75) - 10} 
          fill={adCurve1} 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.4 }}
        >
          E₁
        </motion.text>

        {/* E₂: AD2 intersects curved LRAS at approximately Q=55, P=55 */}
        <motion.circle 
          cx={xScale(55)} 
          cy={yScale(55)} 
          r="6" 
          fill={adCurve2}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.6, type: "spring" }}
        />
        <motion.text 
          x={xScale(55) + 10} 
          y={yScale(55) - 8} 
          fill={adCurve2} 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.7 }}
        >
          E₂
        </motion.text>

        {/* E₃: AD3 intersects vertical LRAS at Q=75 (Yf) */}
        <motion.circle 
          cx={xScale(75)} 
          cy={yScale(40)} 
          r="6" 
          fill={adCurve3}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.9, type: "spring" }}
        />
        <motion.text 
          x={xScale(75) - 18} 
          y={yScale(40) - 10} 
          fill={adCurve3} 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 4 }}
        >
          E₃
        </motion.text>

        {/* Full employment line Yf - dashed vertical at x=75 */}
        <motion.line 
          x1={xScale(75)} y1={yScale(0)} x2={xScale(75)} y2="350" 
          stroke={axisColor} 
          strokeWidth="1.5" 
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(75)} 
          y="368" 
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

        {/* Output labels - aligned with equilibrium points */}
        <motion.text 
          x={xScale(25)} 
          y="368" 
          fill={adCurve1} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
        >
          Y₁
        </motion.text>
        <motion.text 
          x={xScale(55)} 
          y="368" 
          fill={adCurve2} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.8 }}
        >
          Y₂
        </motion.text>

        {/* Price labels - aligned with equilibrium points */}
        <motion.text 
          x="72" 
          y={yScale(75) + 4} 
          fill={adCurve1} 
          fontSize="11" 
          textAnchor="end"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
        >
          P₁
        </motion.text>
        <motion.text 
          x="72" 
          y={yScale(55) + 4} 
          fill={adCurve2} 
          fontSize="11" 
          textAnchor="end"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.8 }}
        >
          P₂
        </motion.text>
        <motion.text 
          x="72" 
          y={yScale(40) + 4} 
          fill={adCurve3} 
          fontSize="11" 
          textAnchor="end"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 4.1 }}
        >
          P₃
        </motion.text>

        {/* Dashed lines from E₁ to axes */}
        <motion.line 
          x1={xScale(25)} y1={yScale(75)} x2={xScale(25)} y2="350" 
          stroke={adCurve1} strokeWidth="1" strokeDasharray="4,3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 3.4, duration: 0.4 }}
        />
        <motion.line 
          x1="80" y1={yScale(75)} x2={xScale(25)} y2={yScale(75)} 
          stroke={adCurve1} strokeWidth="1" strokeDasharray="4,3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 3.4, duration: 0.4 }}
        />

        {/* Dashed lines from E₂ to axes */}
        <motion.line 
          x1={xScale(55)} y1={yScale(55)} x2={xScale(55)} y2="350" 
          stroke={adCurve2} strokeWidth="1" strokeDasharray="4,3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 3.7, duration: 0.4 }}
        />
        <motion.line 
          x1="80" y1={yScale(55)} x2={xScale(55)} y2={yScale(55)} 
          stroke={adCurve2} strokeWidth="1" strokeDasharray="4,3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 3.7, duration: 0.4 }}
        />

        {/* Dashed lines from E₃ to axes */}
        <motion.line 
          x1="80" y1={yScale(40)} x2={xScale(75)} y2={yScale(40)} 
          stroke={adCurve3} strokeWidth="1" strokeDasharray="4,3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 4, duration: 0.4 }}
        />
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
