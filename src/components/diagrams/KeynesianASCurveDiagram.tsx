import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface KeynesianASCurveDiagramProps {
  title?: string;
  showWageStickiness?: boolean;
}

const KeynesianASCurveDiagram = ({ 
  title = "The Three-Part Keynesian Aggregate Supply Curve",
  showWageStickiness = true
}: KeynesianASCurveDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState<1 | 2 | 3 | null>(null);
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

  const width = 550;
  const height = 400;
  const margin = { top: 50, right: 60, bottom: 70, left: 80 };

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-6 rounded-xl">
      <h3 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h3>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid */}
        <g stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.15">
          {[100, 150, 200, 250, 300].map((y) => (
            <line key={`h-${y}`} x1={margin.left} y1={y} x2={width - margin.right} y2={y} />
          ))}
          {[150, 220, 290, 360, 430].map((x) => (
            <line key={`v-${x}`} x1={x} y1={margin.top} x2={x} y2={height - margin.bottom} />
          ))}
        </g>

        {/* Phase region highlights */}
        <motion.rect
          x={margin.left}
          y={220}
          width={130}
          height={height - margin.bottom - 220}
          fill="hsl(var(--cambridge-cyan))"
          opacity={activePhase === 1 ? 0.2 : 0.08}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: activePhase === 1 ? 0.2 : 0.08 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />
        <motion.rect
          x={margin.left + 130}
          y={120}
          width={140}
          height={height - margin.bottom - 120}
          fill="hsl(var(--cambridge-orange))"
          opacity={activePhase === 2 ? 0.15 : 0.06}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: activePhase === 2 ? 0.15 : 0.06 } : { opacity: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        />
        <motion.rect
          x={margin.left + 270}
          y={margin.top}
          width={80}
          height={height - margin.bottom - margin.top}
          fill="hsl(var(--destructive))"
          opacity={activePhase === 3 ? 0.15 : 0.06}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: activePhase === 3 ? 0.15 : 0.06 } : { opacity: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        />

        {/* Axes */}
        <g stroke="hsl(var(--silver))" strokeWidth="2">
          <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} />
          <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} />
          <polygon points={`${margin.left},${margin.top} ${margin.left - 5},${margin.top + 12} ${margin.left + 5},${margin.top + 12}`} fill="hsl(var(--silver))" />
          <polygon points={`${width - margin.right},${height - margin.bottom} ${width - margin.right - 12},${height - margin.bottom - 5} ${width - margin.right - 12},${height - margin.bottom + 5}`} fill="hsl(var(--silver))" />
        </g>

        {/* Axis labels */}
        <text
          x={30}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 30, ${height / 2})`}
        >
          General Price Level (GPL)
        </text>
        <text
          x={(margin.left + width - margin.right) / 2}
          y={height - 20}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
        >
          Real National Output (Y)
        </text>

        {/* Keynesian AS Curve - Three distinct phases */}
        <motion.path
          d="M 100 260 L 210 260 Q 260 255, 300 220 Q 340 180, 360 130 Q 375 95, 430 70 L 430 50"
          fill="none"
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="4"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          filter="drop-shadow(0 0 6px hsl(var(--cambridge-orange) / 0.5))"
        />
        
        {/* AS label */}
        <motion.text 
          x="448" 
          y="55" 
          fill="hsl(var(--cambridge-orange))" 
          fontSize="14" 
          fontFamily="serif"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.3 }}
        >
          AS
        </motion.text>

        {/* Full employment vertical line */}
        <motion.line 
          x1="430" y1={margin.top} x2="430" y2={height - margin.bottom} 
          stroke="hsl(var(--silver-bright))" 
          strokeWidth="2" 
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
        <motion.text 
          x="430" 
          y={height - margin.bottom + 25} 
          fill="hsl(var(--silver-bright))" 
          fontSize="14" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          Yf
        </motion.text>

        {/* Phase labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.2 }}
        >
          {/* Phase 1 - Horizontal/Elastic */}
          <text 
            x="155" y="285" 
            fill="hsl(var(--cambridge-cyan))" 
            fontSize="11" 
            textAnchor="middle" 
            fontWeight="600"
            className="cursor-pointer"
            onMouseEnter={() => setActivePhase(1)}
            onMouseLeave={() => setActivePhase(null)}
          >
            Horizontal Range
          </text>
          <text x="155" y="300" fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle">
            (Perfectly Elastic)
          </text>
          
          {/* Phase 2 - Upward Sloping */}
          <text 
            x="290" y="285" 
            fill="hsl(var(--cambridge-orange))" 
            fontSize="11" 
            textAnchor="middle" 
            fontWeight="600"
            className="cursor-pointer"
            onMouseEnter={() => setActivePhase(2)}
            onMouseLeave={() => setActivePhase(null)}
          >
            Upward Sloping
          </text>
          <text x="290" y="300" fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle">
            (Bottlenecks)
          </text>
          
          {/* Phase 3 - Vertical/Inelastic */}
          <text 
            x="430" y="285" 
            fill="hsl(var(--destructive))" 
            fontSize="11" 
            textAnchor="middle" 
            fontWeight="600"
            className="cursor-pointer"
            onMouseEnter={() => setActivePhase(3)}
            onMouseLeave={() => setActivePhase(null)}
          >
            Vertical Range
          </text>
          <text x="430" y="300" fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle">
            (Perfectly Inelastic)
          </text>
        </motion.g>

        {/* Price level markers */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          <text x={margin.left - 10} y="265" textAnchor="end" fill="hsl(var(--silver))" fontSize="11">P₀</text>
          <line x1={margin.left - 5} y1="260" x2={margin.left} y2="260" stroke="hsl(var(--silver))" strokeWidth="1" />
        </motion.g>

        {/* AD curves to show equilibrium at different phases */}
        <motion.path
          d="M 120 90 Q 145 160, 175 210 Q 200 255, 240 285"
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />
        <motion.text 
          x="250" y="290" 
          fill="hsl(var(--cambridge-cyan))" 
          fontSize="12" 
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3 }}
        >
          AD
        </motion.text>

        {/* Equilibrium point */}
        <motion.circle 
          cx="175" 
          cy="260" 
          r="6" 
          fill="hsl(var(--cambridge-yellow))"
          filter="drop-shadow(0 0 4px hsl(var(--cambridge-yellow) / 0.8))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 3.2, type: "spring" }}
        />
        <motion.text 
          x="165" y="250" 
          fill="hsl(var(--cambridge-yellow))" 
          fontSize="12" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.3 }}
        >
          E
        </motion.text>
      </svg>

      {/* Phase explanation cards */}
      <div className="grid md:grid-cols-3 gap-3 mt-6 text-xs">
        <div 
          className={`p-3 rounded-lg border-l-2 transition-all duration-300 ${
            activePhase === 1 ? 'bg-cambridge-cyan/20 border-cambridge-cyan' : 'bg-muted/30 border-cambridge-cyan/50'
          }`}
          onMouseEnter={() => setActivePhase(1)}
          onMouseLeave={() => setActivePhase(null)}
        >
          <h5 className="font-semibold text-cambridge-cyan mb-1">1. Horizontal Range</h5>
          <p className="text-muted-foreground">
            <strong>Spare capacity exists.</strong> Significant unemployed resources mean AD can increase without raising prices. Output rises at constant GPL.
          </p>
        </div>
        <div 
          className={`p-3 rounded-lg border-l-2 transition-all duration-300 ${
            activePhase === 2 ? 'bg-cambridge-orange/20 border-cambridge-orange' : 'bg-muted/30 border-cambridge-orange/50'
          }`}
          onMouseEnter={() => setActivePhase(2)}
          onMouseLeave={() => setActivePhase(null)}
        >
          <h5 className="font-semibold text-cambridge-orange mb-1">2. Upward Sloping</h5>
          <p className="text-muted-foreground">
            <strong>Bottlenecks appear.</strong> Skilled labor shortages and capacity constraints emerge. Factor prices rise, causing both Y and P to increase.
          </p>
        </div>
        <div 
          className={`p-3 rounded-lg border-l-2 transition-all duration-300 ${
            activePhase === 3 ? 'bg-destructive/20 border-destructive' : 'bg-muted/30 border-destructive/50'
          }`}
          onMouseEnter={() => setActivePhase(3)}
          onMouseLeave={() => setActivePhase(null)}
        >
          <h5 className="font-semibold text-destructive mb-1">3. Vertical Range</h5>
          <p className="text-muted-foreground">
            <strong>Full employment (Yf).</strong> All resources are fully employed. Further AD increases cause pure inflation with no change in real output.
          </p>
        </div>
      </div>

      {/* Wage Stickiness explanation */}
      {showWageStickiness && (
        <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="text-sm font-semibold text-silver-bright mb-2">Why Wages Are "Sticky" Downward</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Keynes argued that nominal wages fail to fall during recessions due to <strong>contractual rigidities</strong> (long-term labor contracts), 
            <strong> trade union resistance</strong> to pay cuts, and <strong>efficiency wage theory</strong> (firms fear productivity falls if wages are cut). 
            This "wage stickiness" means the economy can become stuck in an <strong>under-employment equilibrium</strong> where AD is insufficient to reach Yf, 
            justifying government intervention to stimulate demand.
          </p>
        </div>
      )}
    </div>
  );
};

export default KeynesianASCurveDiagram;
