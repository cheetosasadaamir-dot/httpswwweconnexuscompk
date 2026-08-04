import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SupplySidePolicyDiagram = () => {
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

  // SVG dimensions
  const width = 500;
  const height = 350;
  const margin = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + val * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - val * chartHeight;

  // Generate AD curve points
  const generateADPoints = () => {
    const points: { x: number; y: number }[] = [];
    for (let q = 0.1; q <= 0.9; q += 0.05) {
      points.push({
        x: xScale(q),
        y: yScale(0.9 - q * 0.75)
      });
    }
    return points;
  };

  // Generate AS curve points (upward sloping)
  // A rightward shift means: for the same price level, more output is supplied
  // This means shifting the curve to the right: same Y, higher X
  const generateASPoints = (shift: number = 0) => {
    const points: { x: number; y: number }[] = [];
    for (let q = 0.1; q <= 0.9; q += 0.05) {
      // Shift affects the quantity (x) for each price level
      // Positive shift = rightward = more output at same price
      const shiftedQ = q + shift;
      if (shiftedQ >= 0.1 && shiftedQ <= 1.0) {
        points.push({
          x: xScale(shiftedQ),
          y: yScale(0.15 + q * 0.75)  // Price stays based on original q
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
  const as1Points = generateASPoints(0);
  const as2Points = generateASPoints(0.15);  // Rightward shift

  // Equilibrium points solved algebraically:
  // AD: P=0.9-0.75Q ; AS1: P=0.15+0.75Q  =>  Q=0.75/1.5=0.5, P=0.525
  // AS2 (shift=0.15) as function of X: P=0.0375+0.75X ; AD=AS2 => X=0.8625/1.5=0.575, P=0.46875
  const eq1X = xScale(0.5);
  const eq1Y = yScale(0.525);
  const eq2X = xScale(0.575);
  const eq2Y = yScale(0.46875);

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <Card ref={containerRef} className="w-full bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground">Supply-Side Policy Effects</CardTitle>
        <p className="text-sm text-muted-foreground">
          Shifting the Aggregate Supply curve rightward
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant={showShift ? "default" : "outline"}
            size="sm"
            onClick={() => setShowShift(!showShift)}
          >
            {showShift ? "Hide AS Shift" : "Show Supply-Side Effect"}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setShowShift(false)}>
            Reset
          </Button>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
          <defs>
            <marker
              id="ssArrow"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="hsl(var(--muted-foreground))"
              />
            </marker>
            <marker
              id="shiftArrow-SupplySidePolicyDiagram"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 8 3, 0 6"
                fill="hsl(var(--chart-2))"
              />
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
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={margin.top + chartHeight}
            stroke="hsl(var(--foreground))"
            strokeWidth={2}
            markerEnd="url(#ssArrow)"
          />
          <line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left + chartWidth}
            y2={margin.top + chartHeight}
            stroke="hsl(var(--foreground))"
            strokeWidth={2}
            markerEnd="url(#ssArrow)"
          />

          {/* Axis labels */}
          <text
            x={margin.left - 45}
            y={margin.top + chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90, ${margin.left - 45}, ${margin.top + chartHeight / 2})`}
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

          {/* AD curve */}
          <motion.path
            d={pathFromPoints(adPoints)}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={2.5}
            variants={curveVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />
          <text x={xScale(0.85)} y={yScale(0.18)} className="fill-primary text-sm font-semibold">AD</text>

          {/* AS1 curve */}
          <motion.path
            d={pathFromPoints(as1Points)}
            fill="none"
            stroke="hsl(var(--chart-4))"
            strokeWidth={2.5}
            variants={curveVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />
          <text x={xScale(0.85)} y={yScale(0.82)} className="fill-chart-4 text-sm font-semibold">AS₁</text>

          {/* AS2 curve (shifted) */}
          {showShift && (
            <>
              <motion.path
                d={pathFromPoints(as2Points)}
                fill="none"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2.5}
                strokeDasharray="6,3"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
              <text x={xScale(0.97)} y={yScale(0.82)} className="fill-chart-2 text-sm font-semibold">AS₂</text>

              {/* Shift arrow */}
              <motion.line
                x1={xScale(0.55)}
                y1={yScale(0.55)}
                x2={xScale(0.67)}
                y2={yScale(0.55)}
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                markerEnd="url(#shiftArrow-SupplySidePolicyDiagram)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </>
          )}

          {/* Equilibrium point E1 */}
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
            transition={{ duration: 0.3, delay: 1 }}
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
            transition={{ duration: 0.3, delay: 1.1 }}
          />

          {/* Labels for E1 */}
          <text x={eq1X} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-foreground text-xs">Y₁</text>
          <text x={margin.left - 8} y={eq1Y + 4} textAnchor="end" className="fill-foreground text-xs">P₁</text>

          {/* Equilibrium point E2 (after shift) */}
          {showShift && (
            <>
              <motion.circle
                cx={eq2X}
                cy={eq2Y}
                r={6}
                fill="hsl(var(--chart-2))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
              <text x={eq2X + 10} y={eq2Y - 5} className="fill-chart-2 text-xs font-semibold">E₂</text>

              {/* Dashed lines from E2 */}
              <motion.line
                x1={eq2X}
                y1={eq2Y}
                x2={eq2X}
                y2={margin.top + chartHeight}
                stroke="hsl(var(--chart-2))"
                strokeDasharray="4,3"
                strokeWidth={1.5}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              />
              <motion.line
                x1={margin.left}
                y1={eq2Y}
                x2={eq2X}
                y2={eq2Y}
                stroke="hsl(var(--chart-2))"
                strokeDasharray="4,3"
                strokeWidth={1.5}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              />

              {/* Labels for E2 */}
              <text x={eq2X} y={margin.top + chartHeight + 18} textAnchor="middle" className="fill-chart-2 text-xs font-semibold">Y₂</text>
              <text x={margin.left - 8} y={eq2Y + 4} textAnchor="end" className="fill-chart-2 text-xs">P₂</text>

              {/* Outcome annotation */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <rect
                  x={xScale(0.58)}
                  y={margin.top + 5}
                  width={130}
                  height={45}
                  rx={4}
                  fill="hsl(var(--chart-2) / 0.15)"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={1}
                />
                <text x={xScale(0.60)} y={margin.top + 22} className="fill-chart-2 text-[10px]">↑ Real GDP (Y₁ → Y₂)</text>
                <text x={xScale(0.60)} y={margin.top + 38} className="fill-chart-2 text-[10px]">↓ Price Level (P₁ → P₂)</text>
              </motion.g>
            </>
          )}
        </svg>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-primary"></div>
            <span className="text-muted-foreground">AD</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-chart-4"></div>
            <span className="text-muted-foreground">AS₁ (Original)</span>
          </div>
          {showShift && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-chart-2" style={{ borderTop: '2px dashed' }}></div>
              <span className="text-muted-foreground">AS₂ (After Policy)</span>
            </div>
          )}
        </div>

        {/* Explanation */}
        <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm space-y-3">
          <p className="text-foreground/90">
            <strong>Definition:</strong> Supply-side policies are long-term strategies that aim to increase or improve the efficiency of factors of production to ensure long term growth in the economy. These policies help to control inflation, increase employment, improve the balance of payment etc.
          </p>
          <p className="text-muted-foreground">
            Since they expand the productive capacity they tend to <strong>shift the supply curve to the right</strong>. This results in:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Higher real output</strong> (Y₁ → Y₂)</li>
            <li><strong>Lower price level</strong> (P₁ → P₂) — non-inflationary growth</li>
            <li>Reduced unemployment as more workers are needed</li>
            <li>Improved international competitiveness</li>
          </ul>
          <p className="text-primary font-medium mt-2">
            <strong>Conclusion:</strong> Supply side policies take time to reap benefits however they are highly effective when it comes to achieving government objectives of economic growth, lower inflation, lower unemployment and improved balance of payments.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplySidePolicyDiagram;
