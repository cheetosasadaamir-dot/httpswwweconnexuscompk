import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ADASInteractiveDiagramProps {
  title?: string;
}

const ADASInteractiveDiagram = ({ title = "AD/AS Model" }: ADASInteractiveDiagramProps) => {
  const [showDemandShock, setShowDemandShock] = useState(false);
  const [showSupplyShock, setShowSupplyShock] = useState(false);
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

  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // AD curve (downward sloping)
  const adPoints = [
    { x: 15, y: 85 },
    { x: 30, y: 65 },
    { x: 50, y: 50 },
    { x: 70, y: 38 },
    { x: 85, y: 28 },
  ];

  // Shifted AD (rightward)
  const adShiftedPoints = adPoints.map(p => ({ x: p.x + 15, y: p.y }));

  // SRAS curve (upward sloping, curved)
  const srasPoints = [
    { x: 15, y: 20 },
    { x: 35, y: 35 },
    { x: 50, y: 50 },
    { x: 65, y: 68 },
    { x: 75, y: 85 },
  ];

  // Shifted SRAS (leftward/upward)
  const srasShiftedPoints = srasPoints.map(p => ({ x: p.x - 12, y: p.y + 8 }));

  // LRAS (vertical line)
  const lrasX = 65;

  // Equilibrium points
  const eq0 = { x: 50, y: 50 }; // Original equilibrium
  const eq1 = { x: 60, y: 58 }; // After AD increase
  const eq2 = { x: 42, y: 58 }; // After SRAS decrease

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

  const resetDiagram = () => {
    setShowDemandShock(false);
    setShowSupplyShock(false);
  };

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h3 className="font-serif text-xl text-gradient">{title}</h3>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={showDemandShock ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setShowSupplyShock(false);
              setShowDemandShock(!showDemandShock);
            }}
          >
            {showDemandShock ? "Hide" : "Show"} AD Shift
          </Button>
          <Button
            variant={showSupplyShock ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setShowDemandShock(false);
              setShowSupplyShock(!showSupplyShock);
            }}
          >
            {showSupplyShock ? "Hide" : "Show"} SRAS Shift
          </Button>
          <Button variant="ghost" size="sm" onClick={resetDiagram}>
            Reset
          </Button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-adas" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.2" />
          </pattern>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-adas)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
        />
        <line 
          x1={margin.left} y1={margin.top} 
          x2={margin.left} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
        />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="500">
          Real GDP (Y)
        </text>
        <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="500" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>
          Price Level (P)
        </text>

        {/* LRAS (vertical) */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(90)}
          x2={xScale(lrasX)} y2={yScale(10)}
          stroke="hsl(var(--cambridge-green))"
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        />
        <text x={xScale(lrasX) + 5} y={yScale(92)} fill="hsl(var(--cambridge-green))" fontSize="12" fontWeight="600">LRAS</text>

        {/* Original SRAS */}
        <motion.path
          d={pathFromPoints(srasPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(78)} y={yScale(88)} fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="600">SRAS</text>

        {/* Shifted SRAS (supply shock) */}
        {showSupplyShock && (
          <>
            <motion.path
              d={pathFromPoints(srasShiftedPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text x={xScale(58)} y={yScale(92)} fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="600">SRAS₁</text>
          </>
        )}

        {/* Original AD */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(88)} y={yScale(26)} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="600">AD</text>

        {/* Shifted AD (demand shock) */}
        {showDemandShock && (
          <>
            <motion.path
              d={pathFromPoints(adShiftedPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text x={xScale(98)} y={yScale(26)} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="600">AD₁</text>
          </>
        )}

        {/* Original Equilibrium Point */}
        <motion.circle
          cx={xScale(eq0.x)}
          cy={yScale(eq0.y)}
          r="6"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1, type: "spring" }}
        />
        <text x={xScale(eq0.x) + 10} y={yScale(eq0.y) - 5} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">E₀</text>

        {/* Dashed lines to axes for E0 */}
        <motion.line
          x1={xScale(eq0.x)} y1={yScale(eq0.y)}
          x2={xScale(eq0.x)} y2={yScale(0)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
        />
        <motion.line
          x1={xScale(eq0.x)} y1={yScale(eq0.y)}
          x2={margin.left} y2={yScale(eq0.y)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
        />
        <text x={xScale(eq0.x)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Y₀</text>
        <text x={margin.left - 15} y={yScale(eq0.y) + 4} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">P₀</text>

        {/* New Equilibrium after Demand Shock */}
        {showDemandShock && (
          <>
            <motion.circle
              cx={xScale(eq1.x)}
              cy={yScale(eq1.y)}
              r="6"
              fill="hsl(var(--secondary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            />
            <text x={xScale(eq1.x) + 10} y={yScale(eq1.y) - 5} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">E₁</text>
            <motion.line
              x1={xScale(eq1.x)} y1={yScale(eq1.y)}
              x2={xScale(eq1.x)} y2={yScale(0)}
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
            <motion.line
              x1={xScale(eq1.x)} y1={yScale(eq1.y)}
              x2={margin.left} y2={yScale(eq1.y)}
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
            <text x={xScale(eq1.x)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--secondary))" fontSize="11">Y₁</text>
            <text x={margin.left - 15} y={yScale(eq1.y) + 4} textAnchor="middle" fill="hsl(var(--secondary))" fontSize="11">P₁</text>
          </>
        )}

        {/* New Equilibrium after Supply Shock */}
        {showSupplyShock && (
          <>
            <motion.circle
              cx={xScale(eq2.x)}
              cy={yScale(eq2.y)}
              r="6"
              fill="hsl(var(--destructive))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            />
            <text x={xScale(eq2.x) - 15} y={yScale(eq2.y) - 8} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">E₁</text>
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={xScale(eq2.x)} y2={yScale(0)}
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={margin.left} y2={yScale(eq2.y)}
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
            <text x={xScale(eq2.x)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="11">Y₁</text>
            <text x={margin.left - 15} y={yScale(eq2.y) + 4} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="11">P₁</text>
          </>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[hsl(var(--cambridge-cyan))]" />
          <span className="text-muted-foreground">Aggregate Demand (AD)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[hsl(var(--cambridge-orange))]" />
          <span className="text-muted-foreground">Short-Run AS (SRAS)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[hsl(var(--cambridge-green))]" />
          <span className="text-muted-foreground">Long-Run AS (LRAS)</span>
        </div>
      </div>

      {/* Explanation Box */}
      {(showDemandShock || showSupplyShock) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-muted/30 rounded-lg text-sm"
        >
          {showDemandShock && (
            <div>
              <h4 className="font-semibold text-primary mb-2">Positive Demand Shock</h4>
              <p>An increase in AD (e.g., from ↑G or ↓taxes) shifts AD rightward to AD₁. 
              This leads to higher output (Y₀ → Y₁) and higher prices (P₀ → P₁). 
              The closer to full employment, the more inflationary the effect.</p>
            </div>
          )}
          {showSupplyShock && (
            <div>
              <h4 className="font-semibold text-destructive mb-2">Negative Supply Shock (Stagflation)</h4>
              <p>An increase in production costs (e.g., oil prices) shifts SRAS leftward to SRAS₁. 
              This causes stagflation: lower output (Y₀ → Y₁) combined with higher prices (P₀ → P₁). 
              Both unemployment rises and inflation worsens.</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ADASInteractiveDiagram;
