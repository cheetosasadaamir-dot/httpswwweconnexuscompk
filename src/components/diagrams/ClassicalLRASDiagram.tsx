import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ClassicalLRASDiagramProps {
  title?: string;
  showComparison?: boolean;
}

/**
 * Classical/Monetarist LRAS Diagram
 * Exam Standard: LRAS is perfectly VERTICAL at Yf (full employment output)
 * Key Principle: In the long run, all prices are flexible → output determined by supply-side factors only
 */
const ClassicalLRASDiagram = ({ 
  title = "Classical/Monetarist Long-Run Aggregate Supply",
  showComparison = false 
}: ClassicalLRASDiagramProps) => {
  const [showShift, setShowShift] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const width = 560;
  const height = 440;
  const margin = { top: 50, right: 60, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // LRAS position (vertical at full employment)
  const lrasX = 60;
  const lrasShiftedX = 75; // After supply-side improvement

  // AD curve (downward sloping - demonstrating wealth, trade, interest rate effects)
  const adPoints = [
    { x: 15, y: 88 },
    { x: 30, y: 70 },
    { x: 45, y: 55 },
    { x: 60, y: 42 },
    { x: 75, y: 32 },
    { x: 90, y: 24 },
  ];

  // SRAS curve (upward sloping - sticky wages in short run)
  const srasPoints = [
    { x: 15, y: 18 },
    { x: 30, y: 28 },
    { x: 45, y: 38 },
    { x: 60, y: 50 },
    { x: 72, y: 65 },
    { x: 80, y: 85 },
  ];

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX1 = xScale(prev.x + (curr.x - prev.x) / 3);
      const cpY1 = yScale(prev.y);
      const cpX2 = xScale(prev.x + 2 * (curr.x - prev.x) / 3);
      const cpY2 = yScale(curr.y);
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${xScale(curr.x)} ${yScale(curr.y)}`;
    }
    return d;
  };

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  // Equilibrium point (where AD intersects SRAS at LRAS)
  const eq = { x: 60, y: 42 };

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">
             LRAS is <strong>perfectly vertical</strong> at potential output (Y<sub>f</sub>)
          </p>
        </div>
        <Button
          variant={showShift ? "default" : "outline"}
          size="sm"
          onClick={() => setShowShift(!showShift)}
        >
          {showShift ? "Hide" : "Show"} LRAS Shift
        </Button>
      </div>

      {/* Examiner Standard Definition */}
      <div className="mb-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-primary">Formal Definition:</span>{' '}
          The <strong>Long-Run Aggregate Supply (LRAS)</strong> curve shows the total output that 
          firms are willing and able to supply when all factor markets are in equilibrium 
          (i.e., when actual and expected prices are equal, and all wages and prices have 
          fully adjusted). Output is determined solely by <em>real supply-side factors</em>: 
          quantity/quality of labour (L), capital stock (K), technology (T), and institutional efficiency.
        </p>
      </div>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-classical" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          <marker id="arrow-classical" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-classical)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-classical)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-classical)"
        />

        {/* Axis Labels - Exam Standard Notation */}
        <text 
          x={margin.left + chartWidth / 2} 
          y={height - 20} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="13" 
          fontWeight="600"
        >
          Real National Output / Real GDP (Y)
        </text>
        <text 
          x={25} 
          y={margin.top + chartHeight / 2} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="13" 
          fontWeight="600" 
          transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}
        >
          General Price Level (GPL)
        </text>

        {/* Original LRAS - Perfectly Vertical */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(95)}
          x2={xScale(lrasX)} y2={yScale(5)}
          stroke="hsl(var(--cambridge-green))"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(lrasX) + 8} 
          y={yScale(97)} 
          fill="hsl(var(--cambridge-green))" 
          fontSize="15" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          LRAS
        </motion.text>

        {/* Shifted LRAS (after supply-side improvement) */}
        {showShift && (
          <>
            <motion.line
              x1={xScale(lrasShiftedX)} y1={yScale(95)}
              x2={xScale(lrasShiftedX)} y2={yScale(5)}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.text 
              x={xScale(lrasShiftedX) + 8} 
              y={yScale(97)} 
              fill="hsl(var(--cambridge-green))" 
              fontSize="14" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LRAS₁
            </motion.text>
            
            {/* Shift Arrow */}
            <motion.path
              d={`M ${xScale(lrasX) + 12} ${yScale(75)} L ${xScale(lrasShiftedX) - 8} ${yScale(75)}`}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-classical)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </>
        )}

        {/* Yf label on x-axis */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <line 
            x1={xScale(lrasX)} y1={yScale(0)}
            x2={xScale(lrasX)} y2={yScale(0) + 10}
            stroke="hsl(var(--cambridge-green))" strokeWidth="2"
          />
          <text 
            x={xScale(lrasX)} 
            y={yScale(0) + 25} 
            textAnchor="middle" 
            fill="hsl(var(--cambridge-green))" 
            fontSize="13" 
            fontWeight="700"
          >
            Y<tspan baselineShift="sub" fontSize="10">f</tspan> (Y*)
          </text>
        </motion.g>

        {/* SRAS Curve */}
        <motion.path
          d={pathFromPoints(srasPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(83)} 
          y={yScale(88)} 
          fill="hsl(var(--cambridge-orange))" 
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
        >
          SRAS
        </motion.text>

        {/* AD Curve */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(93)} 
          y={yScale(22)} 
          fill="hsl(var(--cambridge-cyan))" 
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          AD
        </motion.text>

        {/* Equilibrium Point */}
        <motion.circle
          cx={xScale(eq.x)}
          cy={yScale(eq.y)}
          r="7"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.5, type: "spring" }}
        />
        <motion.text 
          x={xScale(eq.x) + 12} 
          y={yScale(eq.y) - 8} 
          fill="hsl(var(--foreground))" 
          fontSize="13" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
        >
          E
        </motion.text>

        {/* Dashed lines to axes */}
        <motion.line
          x1={xScale(eq.x)} y1={yScale(eq.y)}
          x2={xScale(eq.x)} y2={yScale(0)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.5 }}
        />
        <motion.line
          x1={xScale(eq.x)} y1={yScale(eq.y)}
          x2={margin.left} y2={yScale(eq.y)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.5 }}
        />
        <motion.text 
          x={margin.left - 15} 
          y={yScale(eq.y) + 5} 
          textAnchor="end" 
          fill="hsl(var(--foreground))" 
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
        >
          P<tspan baselineShift="sub" fontSize="9">e</tspan>
        </motion.text>

        {/* Vertical annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <line
            x1={xScale(lrasX) - 20} y1={yScale(80)}
            x2={xScale(lrasX) - 20} y2={yScale(20)}
            stroke="hsl(var(--cambridge-green))" strokeWidth="1.5" strokeDasharray="3,3"
          />
          <text x={xScale(lrasX) - 28} y={yScale(50)} fill="hsl(var(--cambridge-green))" fontSize="9" textAnchor="end">
            Vertical:
          </text>
          <text x={xScale(lrasX) - 28} y={yScale(45)} fill="hsl(var(--cambridge-green))" fontSize="9" textAnchor="end">
            Output fixed
          </text>
          <text x={xScale(lrasX) - 28} y={yScale(40)} fill="hsl(var(--cambridge-green))" fontSize="9" textAnchor="end">
            at Yf
          </text>
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[hsl(var(--cambridge-cyan))] rounded" />
          <span className="text-muted-foreground">Aggregate Demand</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[hsl(var(--cambridge-orange))] rounded" />
          <span className="text-muted-foreground">Short-Run AS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[hsl(var(--cambridge-green))] rounded" />
          <span className="text-muted-foreground">Long-Run AS (Vertical)</span>
        </div>
      </div>

      {/* Key Economic Reasoning */}
      <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-[hsl(var(--cambridge-green))]/10 rounded-lg border border-[hsl(var(--cambridge-green))]/20">
          <h4 className="font-semibold text-[hsl(var(--cambridge-green))] mb-2">Why Vertical? (Classical Logic)</h4>
          <p className="text-muted-foreground leading-relaxed mb-3">
            In the <strong>long run</strong>, all factor prices (including wages) are fully flexible. 
            If GPL doubles, nominal wages double proportionally → real wages unchanged → 
            no change in equilibrium employment → output stays at Y<sub>f</sub>.
          </p>
          <div className="font-mono text-xs bg-muted/40 p-2 rounded">
            ↑GPL → ↑W (proportionally) → W/P constant → L constant → Y constant at Y<sub>f</sub>
          </div>
        </div>
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-semibold text-primary mb-2">Shifting LRAS (Potential Growth)</h4>
          <p className="text-muted-foreground leading-relaxed mb-3">
            LRAS shifts <strong>rightward</strong> when the economy's productive capacity increases. 
            This is <strong>potential growth</strong> — an expansion of the economy's maximum sustainable output.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1 mt-2">
            <li>• ↑ Labour force (population, immigration)</li>
            <li>• ↑ Capital stock (investment in machinery)</li>
            <li>• ↑ Technology/productivity (R&D, innovation)</li>
            <li>• ↑ Institutional efficiency (deregulation, education)</li>
          </ul>
        </div>
      </div>

      {/* Shift Explanation */}
      {showShift && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-[hsl(var(--cambridge-green))]/10 rounded-lg text-sm"
        >
          <h4 className="font-semibold text-[hsl(var(--cambridge-green))] mb-2">
            LRAS Shift: Increase in Potential Output
          </h4>
          <p className="text-muted-foreground leading-relaxed mb-2">
            A rightward shift from LRAS to LRAS₁ represents an increase in the economy's 
            <strong> full-employment output level</strong>. This occurs when supply-side factors improve:
          </p>
          <div className="font-mono text-xs bg-muted/40 p-3 rounded">
            <strong>Transmission:</strong> ↑Investment in K → ↑MPL → ↑Labour demand → ↑Employment at Yf → LRAS shifts right to higher Y*
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            <strong>Key Distinction:</strong> This represents <span className="text-[hsl(var(--cambridge-green))]">potential/trend growth</span> 
            (expansion of capacity), NOT <span className="text-[hsl(var(--cambridge-cyan))]">actual growth</span> (movement toward existing capacity via AD).
          </p>
        </motion.div>
      )}

      {/* Examiner Trap */}
      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs">
        <span className="font-semibold text-amber-400">⚠️ Common Error:</span>
        <span className="text-muted-foreground ml-2">
          Students confuse <strong>actual growth</strong> (AD shift right → Y approaches Y<sub>f</sub>) with 
          <strong> potential growth</strong> (LRAS/PPC shift right → Y<sub>f</sub> increases). 
          On a diagram, always clarify which type of growth you are illustrating.
        </span>
      </div>
    </div>
  );
};

export default ClassicalLRASDiagram;
