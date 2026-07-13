import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CostPushStagflationDiagram = () => {
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

  // AD curve
  const adPoints = [
    { x: 12, y: 88 },
    { x: 28, y: 70 },
    { x: 45, y: 55 },
    { x: 62, y: 43 },
    { x: 78, y: 34 },
    { x: 92, y: 27 },
  ];

  // Original SRAS
  const sras1Points = [
    { x: 10, y: 18 },
    { x: 28, y: 26 },
    { x: 45, y: 38 },
    { x: 62, y: 55 },
    { x: 75, y: 78 },
    { x: 82, y: 95 },
  ];

  // Shifted SRAS (leftward/upward)
  const sras2Points = sras1Points.map(p => ({ x: p.x - 15, y: p.y + 12 }));

  // Equilibrium points
  const eq1 = { x: 53, y: 47 };
  const eq2 = { x: 40, y: 62 };

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
  const stagflationColor = "hsla(0, 70%, 55%, 0.2)";

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">Cost-Push Inflation & Stagflation</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Leftward shift in SRAS causes simultaneous inflation and output contraction
          </p>
        </div>
        <Button
          variant={showShift ? "destructive" : "outline"}
          size="sm"
          onClick={() => setShowShift(!showShift)}
        >
          {showShift ? "Hide" : "Show"} Supply Shock
        </Button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        <defs>
          <pattern id="grid-cps" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrow-cps" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
          <marker id="shift-arrow-cps" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={srasColor} />
          </marker>
        </defs>

        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-cps)" />

        {/* Stagflation zone shading */}
        {showShift && (
          <motion.path
            d={`M ${xScale(eq1.x)} ${yScale(eq1.y)} L ${xScale(eq2.x)} ${yScale(eq1.y)} L ${xScale(eq2.x)} ${yScale(eq2.y)} Z`}
            fill={stagflationColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-cps)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-cps)"
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

        {/* AD Curve */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke={adColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(95)} y={yScale(25)} fill={adColor} fontSize="13" fontWeight="700">AD</text>

        {/* Original SRAS */}
        <motion.path
          d={pathFromPoints(sras1Points)}
          fill="none"
          stroke={srasColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(84)} y={yScale(97)} fill={srasColor} fontSize="13" fontWeight="700">SRAS₁</text>

        {/* Shifted SRAS */}
        {showShift && (
          <>
            <motion.path
              d={pathFromPoints(sras2Points)}
              fill="none"
              stroke={srasColor}
              strokeWidth="3.5"
              strokeDasharray="10,5"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.text 
              x={xScale(65)} 
              y={yScale(97)} 
              fill={srasColor}
              fontSize="13" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              SRAS₂
            </motion.text>

            {/* Shift Arrow (curved leftward/upward) */}
            <motion.path
              d={`M ${xScale(58)} ${yScale(55)} Q ${xScale(50)} ${yScale(58)}, ${xScale(45)} ${yScale(68)}`}
              fill="none"
              stroke={srasColor}
              strokeWidth="2.5"
              markerEnd="url(#shift-arrow-cps)"
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
        <text x={xScale(eq1.x) + 12} y={yScale(eq1.y) - 8} fill="hsl(var(--foreground))" fontSize="12" fontWeight="700">E₁</text>

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

        {/* E₂ - New Equilibrium (Stagflation) */}
        {showShift && (
          <>
            <motion.circle
              cx={xScale(eq2.x)}
              cy={yScale(eq2.y)}
              r="7"
              fill="hsl(var(--destructive))"
              stroke="hsl(var(--background))"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            />
            <motion.text 
              x={xScale(eq2.x) - 18} 
              y={yScale(eq2.y) - 10} 
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
              stroke="hsl(var(--destructive))"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            />
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={margin.left} y2={yScale(eq2.y)}
              stroke="hsl(var(--destructive))"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            />
            <motion.text 
              x={xScale(eq2.x)} 
              y={yScale(0) + 18} 
              textAnchor="middle" 
              fill="hsl(var(--destructive))" 
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
              fill="hsl(var(--destructive))" 
              fontSize="11" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              P₂
            </motion.text>

            {/* Stagflation label */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <text 
                x={(xScale(eq1.x) + xScale(eq2.x)) / 2 - 5} 
                y={(yScale(eq1.y) + yScale(eq2.y)) / 2} 
                textAnchor="middle" 
                fill="hsl(var(--destructive))" 
                fontSize="12" 
                fontWeight="700"
              >
                STAGFLATION
              </text>
              <text 
                x={(xScale(eq1.x) + xScale(eq2.x)) / 2 - 5} 
                y={(yScale(eq1.y) + yScale(eq2.y)) / 2 + 14} 
                textAnchor="middle" 
                fill="hsl(var(--destructive))" 
                fontSize="10" 
              >
                ↓Y + ↑P
              </text>
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
      <div className="mt-6 p-5 bg-muted/20 rounded-xl border border-destructive/20">
        <h4 className="font-semibold text-destructive mb-3 text-base">Chain of Analysis: Cost-Push Inflation & Stagflation</h4>
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          Cost-push inflation arises from an adverse supply shock that shifts the SRAS curve leftward and upward, 
          originating from increases in the unit costs of production that are independent of demand conditions. 
          Principal causes include: surges in global commodity prices, particularly petroleum (as witnessed during 
          the 1973 and 1979 oil crises); wage-push pressures from powerful trade unions securing nominal wage 
          increases exceeding productivity gains; currency depreciation raising import costs for raw materials 
          and intermediate goods; increases in indirect taxation or removal of producer subsidies; and supply 
          chain disruptions from geopolitical events or natural disasters. The chain of causation proceeds: 
          exogenous increase in input costs → firms' marginal and average costs rise at every output level → 
          profit margins compress at existing prices → firms reduce output and/or raise prices to restore 
          profitability → the SRAS curve shifts leftward from SRAS₁ to SRAS₂ → at the new equilibrium (E₂), 
          the economy simultaneously experiences higher prices (P₂ {'>'} P₁) and lower real output (Y₂ {'<'} Y₁).
        </p>
        {showShift && (
          <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-4 pt-4 border-t border-destructive/20">
            <strong className="text-destructive">The Policy Dilemma of Stagflation:</strong> The simultaneous 
            occurrence of stagnation (falling output, rising unemployment) and inflation—termed "stagflation"—
            presents policymakers with an acute dilemma. Traditional demand-management policies face a 
            trade-off: expansionary fiscal or monetary policy to combat unemployment would shift AD rightward,
            exacerbating inflation; conversely, contractionary policy to reduce inflation would deepen the 
            recession. This explains why the 1970s stagflation proved so intractable, ultimately leading to the 
            adoption of supply-side policies targeting the SRAS and LRAS curves rather than demand management 
            alone. The optimal response involves measures that directly address the cost-push factors: energy 
            efficiency investments, wage restraint agreements, productivity-enhancing reforms, or targeted 
            subsidies to offset input cost increases.
          </p>
        )}
      </div>
    </div>
  );
};

export default CostPushStagflationDiagram;
