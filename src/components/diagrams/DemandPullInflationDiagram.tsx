import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const DemandPullInflationDiagram = () => {
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

  const width = 580;
  const height = 460;
  const margin = { top: 45, right: 50, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // LRAS position
  const lrasX = 72;

  // Original AD curve
  const ad1Points = [
    { x: 10, y: 85 },
    { x: 25, y: 68 },
    { x: 40, y: 55 },
    { x: 55, y: 45 },
    { x: 70, y: 37 },
    { x: 85, y: 30 },
  ];

  // Shifted AD curve (rightward)
  const ad2Points = ad1Points.map(p => ({ x: p.x + 18, y: p.y }));

  // SRAS curve (upward sloping, increasingly steep near LRAS)
  const srasPoints = [
    { x: 8, y: 15 },
    { x: 25, y: 22 },
    { x: 42, y: 32 },
    { x: 58, y: 48 },
    { x: 72, y: 70 },
    { x: 80, y: 92 },
  ];

  // Equilibrium points
  const eq1 = { x: 55, y: 45 };
  const eq2 = { x: 61.5, y: 52.9 };

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX1 = xScale(prev.x + (curr.x - prev.x) / 3);
      const cpY1 = yScale(prev.y + (curr.y - prev.y) / 4);
      const cpX2 = xScale(prev.x + 2 * (curr.x - prev.x) / 3);
      const cpY2 = yScale(prev.y + 3 * (curr.y - prev.y) / 4);
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

  // Colors
  const adColor = "hsl(185, 100%, 55%)";
  const srasColor = "hsl(38, 100%, 55%)";
  const lrasColor = "hsl(0, 0%, 85%)";

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">Demand-Pull Inflation</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Rightward shift in AD causes both output expansion and price level increase
          </p>
        </div>
        <Button
          variant={showShift ? "default" : "outline"}
          size="sm"
          onClick={() => setShowShift(!showShift)}
        >
          {showShift ? "Hide" : "Show"} AD Increase
        </Button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        <defs>
          <pattern id="grid-dpi" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrow-dpi" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
          <marker id="shift-arrow-dpi" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={adColor} />
          </marker>
        </defs>

        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-dpi)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-dpi)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-dpi)"
        />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600">
          Real National Output / Real GDP (Y)
        </text>
        <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>
          General Price Level (GPL)
        </text>

        {/* LRAS */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(95)}
          x2={xScale(lrasX)} y2={yScale(5)}
          stroke={lrasColor}
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        />
        <text x={xScale(lrasX) + 8} y={yScale(97)} fill={lrasColor} fontSize="13" fontWeight="700">LRAS</text>

        {/* SRAS */}
        <motion.path
          d={pathFromPoints(srasPoints)}
          fill="none"
          stroke={srasColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(82)} y={yScale(94)} fill={srasColor} fontSize="13" fontWeight="700">SRAS</text>

        {/* Original AD */}
        <motion.path
          d={pathFromPoints(ad1Points)}
          fill="none"
          stroke={adColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(88)} y={yScale(28)} fill={adColor} fontSize="13" fontWeight="700">AD₁</text>

        {/* Shifted AD */}
        {showShift && (
          <>
            <motion.path
              d={pathFromPoints(ad2Points)}
              fill="none"
              stroke={adColor}
              strokeWidth="3.5"
              strokeDasharray="10,5"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.text 
              x={xScale(100)} 
              y={yScale(28)} 
              fill={adColor}
              fontSize="13" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              AD₂
            </motion.text>

            {/* Shift Arrow */}
            <motion.line
              x1={xScale(55)}
              y1={yScale(65)}
              x2={xScale(68)}
              y2={yScale(65)}
              stroke={adColor}
              strokeWidth="2.5"
              markerEnd="url(#shift-arrow-dpi)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </>
        )}

        {/* E₁ - Initial Equilibrium */}
        <motion.circle
          cx={xScale(eq1.x)}
          cy={yScale(eq1.y)}
          r="7"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.3, type: "spring" }}
        />
        <text x={xScale(eq1.x) - 15} y={yScale(eq1.y) - 12} fill="hsl(var(--foreground))" fontSize="12" fontWeight="700">E₁</text>

        {/* Dashed lines for E₁ */}
        <motion.line
          x1={xScale(eq1.x)} y1={yScale(eq1.y)}
          x2={xScale(eq1.x)} y2={yScale(0)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
        />
        <motion.line
          x1={xScale(eq1.x)} y1={yScale(eq1.y)}
          x2={margin.left} y2={yScale(eq1.y)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
        />
        <text x={xScale(eq1.x)} y={yScale(0) + 18} textAnchor="middle" fill="hsl(var(--primary))" fontSize="11" fontWeight="600">Y₁</text>
        <text x={margin.left - 18} y={yScale(eq1.y) + 4} textAnchor="middle" fill="hsl(var(--primary))" fontSize="11" fontWeight="600">P₁</text>

        {/* E₂ - New Equilibrium after AD shift */}
        {showShift && (
          <>
            <motion.circle
              cx={xScale(eq2.x)}
              cy={yScale(eq2.y)}
              r="7"
              fill="hsl(var(--secondary))"
              stroke="hsl(var(--background))"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            />
            <motion.text 
              x={xScale(eq2.x) + 12} 
              y={yScale(eq2.y) - 8} 
              fill="hsl(var(--foreground))" 
              fontSize="12" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              E₂
            </motion.text>

            {/* Dashed lines for E₂ */}
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={xScale(eq2.x)} y2={yScale(0)}
              stroke="hsl(var(--secondary))"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            />
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={margin.left} y2={yScale(eq2.y)}
              stroke="hsl(var(--secondary))"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            />
            <motion.text 
              x={xScale(eq2.x)} 
              y={yScale(0) + 18} 
              textAnchor="middle" 
              fill="hsl(var(--secondary))" 
              fontSize="11" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Y₂
            </motion.text>
            <motion.text 
              x={margin.left - 18} 
              y={yScale(eq2.y) + 4} 
              textAnchor="middle" 
              fill="hsl(var(--secondary))" 
              fontSize="11" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              P₂
            </motion.text>

            {/* Arrows showing changes */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              {/* ΔY arrow */}
              <line x1={xScale(eq1.x) + 3} y1={yScale(0) + 35} x2={xScale(eq2.x) - 3} y2={yScale(0) + 35} stroke="hsl(var(--primary))" strokeWidth="2" />
              <polygon points={`${xScale(eq2.x) - 3},${yScale(0) + 32} ${xScale(eq2.x) - 3},${yScale(0) + 38} ${xScale(eq2.x) + 3},${yScale(0) + 35}`} fill="hsl(var(--primary))" />
              <text x={(xScale(eq1.x) + xScale(eq2.x)) / 2} y={yScale(0) + 48} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">ΔY (↑Output)</text>

              {/* ΔP arrow */}
              <line x1={margin.left - 40} y1={yScale(eq1.y) - 3} x2={margin.left - 40} y2={yScale(eq2.y) + 3} stroke="hsl(var(--destructive))" strokeWidth="2" />
              <polygon points={`${margin.left - 43},${yScale(eq2.y) + 3} ${margin.left - 37},${yScale(eq2.y) + 3} ${margin.left - 40},${yScale(eq2.y) - 3}`} fill="hsl(var(--destructive))" />
              <text x={margin.left - 55} y={(yScale(eq1.y) + yScale(eq2.y)) / 2 + 4} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="600" transform={`rotate(-90, ${margin.left - 55}, ${(yScale(eq1.y) + yScale(eq2.y)) / 2 + 4})`}>ΔP (↑Inflation)</text>
            </motion.g>
          </>
        )}

        {/* Yfe label */}
        <text x={xScale(lrasX)} y={yScale(0) + 18} textAnchor="middle" fill={lrasColor} fontSize="11" fontWeight="600">Yfe</text>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: adColor }} />
          <span className="text-muted-foreground">Aggregate Demand</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: srasColor }} />
          <span className="text-muted-foreground">SRAS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: lrasColor }} />
          <span className="text-muted-foreground">LRAS</span>
        </div>
      </div>

      {/* Chain of Analysis */}
      <div className="mt-6 p-5 bg-muted/20 rounded-xl border border-primary/10">
        <h4 className="font-semibold text-primary mb-3 text-base">Chain of Analysis: Demand-Pull Inflation</h4>
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          Demand-pull inflation originates from a rightward shift in the Aggregate Demand curve, driven by 
          expansionary forces such as increased government expenditure (↑G), reduced interest rates stimulating 
          consumption and investment (↑C, ↑I), currency depreciation boosting net exports (↑X−M), or enhanced 
          consumer and business confidence. The chain of causation proceeds as follows: an initial injection 
          into the circular flow increases total planned expenditure → at the existing price level, excess 
          demand emerges in the goods market → firms respond by running down inventories and subsequently 
          increasing production → as output expands, firms compete for increasingly scarce factors of production 
          → factor prices rise, particularly wages in tight labour markets → rising production costs are 
          transmitted to output prices → the general price level increases from P₁ to P₂. The magnitude of 
          inflationary pressure is critically dependent upon the position on the SRAS curve: near full employment 
          (Yfe), where SRAS becomes increasingly inelastic, a given AD shift generates proportionally greater 
          price increases and smaller real output gains.
        </p>
        {showShift && (
          <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-4 pt-4 border-t border-muted">
            <strong className="text-secondary">The Multiplier Effect (AS Context):</strong> The initial increase 
            in autonomous expenditure generates successive rounds of induced consumption spending. An injection 
            of ΔG leads to increased income for factor owners → a proportion (MPC) of this additional income is 
            spent on domestically produced goods → this spending becomes income for other producers → the process 
            continues, with each round diminishing by the marginal propensity to withdraw. The multiplier 
            (k = 1/MPW = 1/(MPS + MPT + MPM)) determines the final change in national income: ΔY = k × ΔG. 
            However, in an AS context, the multiplier effect is constrained by capacity limits—as output 
            approaches Yfe, increased nominal spending translates primarily into price increases rather than 
            real output expansion.
          </p>
        )}
      </div>
    </div>
  );
};

export default DemandPullInflationDiagram;
