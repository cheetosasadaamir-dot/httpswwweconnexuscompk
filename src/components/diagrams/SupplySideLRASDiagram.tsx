import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface SupplySideLRASDiagramProps {
  title?: string;
}

const SupplySideLRASDiagram: React.FC<SupplySideLRASDiagramProps> = ({
  title = "Supply-Side Policies: Shifting LRAS"
}) => {
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

  const width = 500;
  const height = 380;
  const margin = { top: 40, right: 50, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + val * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - val * chartHeight;

  // Generate AD curve
  const generateADPoints = () => {
    const points: { x: number; y: number }[] = [];
    for (let q = 0.1; q <= 0.9; q += 0.04) {
      points.push({
        x: xScale(q),
        y: yScale(0.88 - q * 0.75)
      });
    }
    return points;
  };

  // Generate SRAS curves (shift with LRAS)
  const generateSRASPoints = (shift: number = 0) => {
    const points: { x: number; y: number }[] = [];
    for (let q = 0.1; q <= 0.9; q += 0.04) {
      const shiftedQ = q + shift;
      if (shiftedQ >= 0.1 && shiftedQ <= 1.0) {
        points.push({
          x: xScale(shiftedQ),
          y: yScale(0.12 + q * 0.75)
        });
      }
    }
    return points;
  };

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    return d;
  };

  const adPoints = generateADPoints();
  const sras1Points = generateSRASPoints(0);
  const sras2Points = generateSRASPoints(0.12);

  // LRAS positions
  const lras1X = xScale(0.55);
  const lras2X = xScale(0.67);

  // Equilibrium points
  const eq1X = xScale(0.48);
  const eq1Y = yScale(0.50);
  const eq2X = xScale(0.58);
  const eq2Y = yScale(0.42);

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-5 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-serif text-lg text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Expanding Productive Capacity through Education, Infrastructure, and Deregulation
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <Button
          variant={showShift ? "default" : "outline"}
          size="sm"
          onClick={() => setShowShift(!showShift)}
        >
          {showShift ? "Hide LRAS Shift" : "Apply Supply-Side Policy"}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setShowShift(false)}>
          Reset
        </Button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        <defs>
          <marker id="ssLrasArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
          </marker>
          <marker id="lrasShiftArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(142 76% 50%)" />
          </marker>
        </defs>

        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((tick, i) => (
          <g key={`grid-${i}`}>
            <line
              x1={margin.left}
              y1={yScale(tick)}
              x2={margin.left + chartWidth}
              y2={yScale(tick)}
              stroke="hsl(var(--border))"
              strokeDasharray="4,4"
              strokeWidth={0.5}
            />
            <line
              x1={xScale(tick)}
              y1={margin.top}
              x2={xScale(tick)}
              y2={margin.top + chartHeight}
              stroke="hsl(var(--border))"
              strokeDasharray="4,4"
              strokeWidth={0.5}
            />
          </g>
        ))}

        {/* Axes */}
        <line x1={margin.left} y1={margin.top - 10} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#ssLrasArrow)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth + 10} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#ssLrasArrow)" />

        {/* Axis labels */}
        <text
          x={margin.left - 50}
          y={margin.top + chartHeight / 2}
          textAnchor="middle"
          transform={`rotate(-90, ${margin.left - 50}, ${margin.top + chartHeight / 2})`}
          className="fill-foreground text-sm font-medium"
        >
          Price Level (P)
        </text>
        <text
          x={margin.left + chartWidth / 2}
          y={margin.top + chartHeight + 45}
          textAnchor="middle"
          className="fill-foreground text-sm font-medium"
        >
          Real GDP (Y)
        </text>

        {/* LRAS1 (vertical white line) */}
        <motion.line
          x1={lras1X}
          y1={margin.top + 5}
          x2={lras1X}
          y2={margin.top + chartHeight - 5}
          stroke="hsl(var(--foreground))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={lras1X + 8} y={margin.top + 20} className="fill-foreground text-xs font-semibold">LRAS₁</text>
        <text x={lras1X} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-foreground text-xs">Y<tspan baselineShift="sub" fontSize="8">f1</tspan></text>

        {/* LRAS2 (shifted, dashed green) */}
        {showShift && (
          <>
            <motion.line
              x1={lras2X}
              y1={margin.top + 5}
              x2={lras2X}
              y2={margin.top + chartHeight - 5}
              stroke="hsl(142 76% 50%)"
              strokeWidth={3}
              strokeDasharray="8,4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text x={lras2X + 8} y={margin.top + 20} className="text-xs font-semibold" fill="hsl(142 76% 50%)">LRAS₂</text>
            <text x={lras2X} y={margin.top + chartHeight + 18} textAnchor="middle" className="text-xs font-semibold" fill="hsl(142 76% 50%)">Y<tspan baselineShift="sub" fontSize="8">f2</tspan></text>

            {/* LRAS shift arrow */}
            <motion.line
              x1={lras1X + 15}
              y1={margin.top + 50}
              x2={lras2X - 10}
              y2={margin.top + 50}
              stroke="hsl(142 76% 50%)"
              strokeWidth={2}
              markerEnd="url(#lrasShiftArrow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </>
        )}

        {/* SRAS1 (Amber Gold) */}
        <motion.path
          d={pathFromPoints(sras1Points)}
          fill="none"
          stroke="hsl(36 100% 50%)"
          strokeWidth={2.5}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(0.88)} y={yScale(0.80)} className="text-xs font-semibold" fill="hsl(36 100% 50%)">SRAS₁</text>

        {/* SRAS2 (shifted, dashed Amber) */}
        {showShift && (
          <>
            <motion.path
              d={pathFromPoints(sras2Points)}
              fill="none"
              stroke="hsl(36 100% 50%)"
              strokeWidth={2.5}
              strokeDasharray="8,4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text x={xScale(0.98)} y={yScale(0.78)} className="text-xs font-semibold" fill="hsl(36 100% 50%)">SRAS₂</text>
          </>
        )}

        {/* AD (Neon Cyan) */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke="hsl(180 100% 50%)"
          strokeWidth={2.5}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(0.88)} y={yScale(0.16)} className="text-xs font-semibold" fill="hsl(180 100% 50%)">AD</text>

        {/* E1 Equilibrium */}
        <motion.circle
          cx={eq1X}
          cy={eq1Y}
          r={6}
          fill="hsl(var(--foreground))"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />
        <text x={eq1X - 12} y={eq1Y - 10} className="fill-foreground text-xs font-semibold">E₁</text>

        {/* Dashed lines from E1 */}
        <motion.line
          x1={eq1X}
          y1={eq1Y}
          x2={eq1X}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--muted-foreground))"
          strokeDasharray="4,3"
          strokeWidth={1.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.7 : 0 }}
        />
        <motion.line
          x1={margin.left}
          y1={eq1Y}
          x2={eq1X}
          y2={eq1Y}
          stroke="hsl(var(--muted-foreground))"
          strokeDasharray="4,3"
          strokeWidth={1.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.7 : 0 }}
        />
        <text x={eq1X} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-foreground text-xs">Y₁</text>
        <text x={margin.left - 8} y={eq1Y + 4} textAnchor="end" className="fill-foreground text-xs">P₁</text>

        {/* E2 after shift */}
        {showShift && (
          <>
            <motion.circle
              cx={eq2X}
              cy={eq2Y}
              r={6}
              fill="hsl(142 76% 50%)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            />
            <text x={eq2X + 10} y={eq2Y - 5} className="text-xs font-semibold" fill="hsl(142 76% 50%)">E₂</text>

            {/* Dashed lines from E2 */}
            <motion.line
              x1={eq2X}
              y1={eq2Y}
              x2={eq2X}
              y2={margin.top + chartHeight}
              stroke="hsl(142 76% 50%)"
              strokeDasharray="4,3"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
            />
            <motion.line
              x1={margin.left}
              y1={eq2Y}
              x2={eq2X}
              y2={eq2Y}
              stroke="hsl(142 76% 50%)"
              strokeDasharray="4,3"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
            />
            <text x={eq2X} y={margin.top + chartHeight + 18} textAnchor="middle" className="text-xs font-semibold" fill="hsl(142 76% 50%)">Y₂</text>
            <text x={margin.left - 8} y={eq2Y + 4} textAnchor="end" className="text-xs" fill="hsl(142 76% 50%)">P₂</text>

            {/* Outcome annotation */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <rect
                x={xScale(0.55)}
                y={margin.top + 5}
                width={155}
                height={62}
                rx={6}
                fill="hsl(142 76% 36% / 0.15)"
                stroke="hsl(142 76% 36%)"
                strokeWidth={1}
              />
              <text x={xScale(0.57)} y={margin.top + 22} className="text-[10px]" fill="hsl(142 76% 36%)">
                ↑ Potential Output: Y<tspan baselineShift="sub" fontSize="7">f1</tspan> → Y<tspan baselineShift="sub" fontSize="7">f2</tspan>
              </text>
              <text x={xScale(0.57)} y={margin.top + 38} className="text-[10px]" fill="hsl(142 76% 36%)">
                ↓ Price Level: P₁ → P₂
              </text>
              <text x={xScale(0.57)} y={margin.top + 54} className="text-[10px] font-semibold" fill="hsl(142 76% 36%)">
                = Non-Inflationary Growth
              </text>
            </motion.g>
          </>
        )}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(180 100% 50%)' }}></div>
          <span className="text-muted-foreground">AD (Neon Cyan)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(36 100% 50%)' }}></div>
          <span className="text-muted-foreground">SRAS (Amber Gold)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-foreground"></div>
          <span className="text-muted-foreground">LRAS (White)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(142 76% 50%)' }}></div>
          <span className="text-muted-foreground">After Policy (Green)</span>
        </div>
      </div>

      {/* Explanation panel */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm border-l-4" style={{ borderColor: 'hsl(142 76% 50%)' }}>
        <p className="text-foreground/90 leading-relaxed">
          <strong className="text-primary">Senior Examiner's Conclusion:</strong> Supply-side policies—whether market-based (deregulation, tax reform, labour market flexibility) or interventionist (education, infrastructure, R&D subsidies)—increase the <em>productive capacity</em> of the economy. This shifts both LRAS and SRAS to the right, enabling the economy to produce more at every price level. The result is <strong>non-inflationary economic growth</strong>: output increases from Y<sub>f1</sub> to Y<sub>f2</sub> while the price level <em>falls</em> from P₁ to P₂. Unlike demand-side policies, which face an inflation-output trade-off, well-designed supply-side policies can achieve all four major macroeconomic objectives simultaneously. However, the critical limitation is the <strong>time lag</strong>: infrastructure projects take years, education improvements take a generation.
        </p>
      </div>
    </div>
  );
};

export default SupplySideLRASDiagram;
