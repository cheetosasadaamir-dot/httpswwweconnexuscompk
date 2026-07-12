import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ADASEquilibriumDiagramProps {
  title?: string;
  showRecessionary?: boolean;
}

const ADASEquilibriumDiagram = ({ 
  title = "Macroeconomic Equilibrium: AD/AS Model",
  showRecessionary = false 
}: ADASEquilibriumDiagramProps) => {
  const [showGap, setShowGap] = useState(showRecessionary);
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

    return => observer.disconnect();
  }, []);

  const width = 580;
  const height = 460;
  const margin = { top: 45, right: 50, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // LRAS position (Full Employment)
  const lrasX = 70;

  // AD curve points (downward sloping)
  const adPoints = [
    { x: 12, y: 90 },
    { x: 25, y: 75 },
    { x: 40, y: 60 },
    { x: 55, y: 48 },
    { x: 70, y: 38 },
    { x: 85, y: 30 },
  ];

  // SRAS curve points (upward sloping, increasingly steep)
  const srasPoints = [
    { x: 10, y: 18 },
    { x: 25, y: 25 },
    { x: 40, y: 35 },
    { x: 55, y: 50 },
    { x: 70, y: 70 },
    { x: 78, y: 90 },
  ];

  // Equilibrium points
  const eqX = 55;
  const eqY = 48;

  // Full employment equilibrium
  const eqFeX = 70;
  const eqFeY = 38;

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

  // Color palette
  const adColor = "hsl(185, 100%, 55%)"; // Neon Cyan
  const srasColor = "hsl(38, 100%, 55%)"; // Amber Gold
  const lrasColor = "hsl(0, 0%, 85%)"; // Silver/White
  const gapColor = "hsla(0, 70%, 60%, 0.25)"; // Red tint for gap

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Equilibrium where AD = AS determines Price Level (P) and Real Output (Y)
          </p>
        </div>
        <Button
          variant={showGap ? "default" : "outline"}
          size="sm"
          onClick={() => setShowGap(!showGap)}
        >
          {showGap ? "Hide" : "Show"} Recessionary Gap
        </Button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        {/* Definitions */}
        <defs>
          <pattern id="grid-eq" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrow-eq" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
        </defs>

        {/* Grid background */}
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-eq)" />

        {/* Recessionary Gap shading */}
        {showGap && (
          <motion.rect
            x={xScale(eqX)}
            y={yScale(eqY)}
            width={xScale(lrasX) - xScale(eqX)}
            height={yScale(0) - yScale(eqY)}
            fill={gapColor}
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
          markerEnd="url(#arrow-eq)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-eq)"
        />

        {/* Axis Labels */}
        <text 
          x={margin.left + chartWidth / 2} 
          y={height - 15} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="600"
        >
          Real National Output / Real GDP (Y)
        </text>
        <text 
          x={20} 
          y={margin.top + chartHeight / 2} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="600"
          transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}
        >
          General Price Level (GPL)
        </text>

        {/* LRAS - Vertical line */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(95)}
          x2={xScale(lrasX)} y2={yScale(5)}
          stroke={lrasColor}
          strokeWidth="3.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(lrasX) + 8} 
          y={yScale(97)} 
          fill={lrasColor}
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          LRAS
        </motion.text>

        {/* SRAS Curve */}
        <motion.path
          d={pathFromPoints(srasPoints)}
          fill="none"
          stroke={srasColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(80)} 
          y={yScale(92)} 
          fill={srasColor}
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          SRAS
        </motion.text>

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
        <motion.text 
          x={xScale(88)} 
          y={yScale(28)} 
          fill={adColor}
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          AD
        </motion.text>

        {/* Equilibrium Point E₀ */}
        <motion.circle
          cx={xScale(eqX)}
          cy={yScale(eqY)}
          r="7"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.3, type: "spring" }}
        />
        <motion.text 
          x={xScale(eqX) - 15} 
          y={yScale(eqY) - 12} 
          fill="hsl(var(--foreground))" 
          fontSize="13" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          E₀
        </motion.text>

        {/* Dashed lines to axes for E₀ */}
        <motion.line
          x1={xScale(eqX)} y1={yScale(eqY)}
          x2={xScale(eqX)} y2={yScale(0)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.6 } : {}}
          transition={{ delay: 1.3 }}
        />
        <motion.line
          x1={xScale(eqX)} y1={yScale(eqY)}
          x2={margin.left} y2={yScale(eqY)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.6 } : {}}
          transition={{ delay: 1.3 }}
        />

        {/* Axis value labels */}
        <motion.text 
          x={xScale(eqX)} 
          y={yScale(0) + 18} 
          textAnchor="middle" 
          fill="hsl(var(--primary))" 
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          Y₀
        </motion.text>
        <motion.text 
          x={margin.left - 18} 
          y={yScale(eqY) + 4} 
          textAnchor="middle" 
          fill="hsl(var(--primary))" 
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          P₀
        </motion.text>

        {/* Full Employment indicator */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <line 
            x1={xScale(lrasX)} y1={yScale(0)}
            x2={xScale(lrasX)} y2={yScale(0) + 8}
            stroke={lrasColor} strokeWidth="2"
          />
          <text 
            x={xScale(lrasX)} 
            y={yScale(0) + 22} 
            textAnchor="middle" 
            fill={lrasColor}
            fontSize="12" 
            fontWeight="600"
          >
            Y* (Yfe)
          </text>
        </motion.g>

        {/* Recessionary Gap Label */}
        {showGap && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <text 
              x={(xScale(eqX) + xScale(lrasX)) / 2} 
              y={yScale(25)} 
              textAnchor="middle" 
              fill="hsl(var(--destructive))" 
              fontSize="11"
              fontWeight="600"
            >
              Recessionary
            </text>
            <text 
              x={(xScale(eqX) + xScale(lrasX)) / 2} 
              y={yScale(20)} 
              textAnchor="middle" 
              fill="hsl(var(--destructive))" 
              fontSize="11"
              fontWeight="600"
            >
              Gap
            </text>
            {/* Double-headed arrow */}
            <line
              x1={xScale(eqX) + 5}
              y1={yScale(12)}
              x2={xScale(lrasX) - 5}
              y2={yScale(12)}
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
              markerStart="url(#arrow-eq)"
              markerEnd="url(#arrow-eq)"
            />
          </motion.g>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: adColor }} />
          <span className="text-muted-foreground">Aggregate Demand (AD)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: srasColor }} />
          <span className="text-muted-foreground">Short-Run AS (SRAS)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: lrasColor }} />
          <span className="text-muted-foreground">Long-Run AS (LRAS)</span>
        </div>
      </div>

      {/* Chain of Analysis */}
      <div className="mt-6 p-5 bg-muted/20 rounded-xl border border-primary/10">
        <h4 className="font-semibold text-primary mb-3 text-base">Chain of Analysis: Macroeconomic Equilibrium</h4>
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          Macroeconomic equilibrium is established at point E₀ where the Aggregate Demand curve intersects 
          the Short-Run Aggregate Supply curve, simultaneously determining the equilibrium price level (P₀) 
          and the equilibrium level of real national output (Y₀). At this point, total planned expenditure 
          by households, firms, the government, and the foreign sector (C + I + G + X − M) is precisely 
          equal to the total value of goods and services that producers are collectively willing and able 
          to supply. Should the actual price level deviate above P₀, an excess supply of goods would 
          materialise as unplanned inventory accumulation, exerting downward pressure on prices until 
          equilibrium is restored. Conversely, if the price level were to fall below P₀, excess demand 
          would manifest as inventory depletion, bidding prices upward toward equilibrium. The vertical 
          LRAS at Y* represents the economy's long-run productive capacity at full employment, determined 
          exclusively by the quantity and quality of the factors of production.
        </p>
        {showGap && (
          <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-4 pt-4 border-t border-muted">
            <strong className="text-destructive">Recessionary Gap Analysis:</strong> When short-run 
            equilibrium output (Y₀) lies to the left of full-employment output (Y*), the economy experiences 
            a negative output gap or "recessionary gap." This gap represents unemployed resources—particularly 
            cyclical unemployment—where actual GDP falls short of potential GDP. The magnitude of this gap 
            (Y* − Y₀) indicates the extent of spare capacity in the economy and the potential for expansionary 
            demand-side policies to stimulate output growth without immediately generating inflationary pressure, 
            provided the SRAS curve remains relatively elastic in this region.
          </p>
        )}
      </div>
    </div>
  );
};

export default ADASEquilibriumDiagram;
