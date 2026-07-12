import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LafferCurveDiagram = () => {
  const [showOptimal, setShowOptimal] = useState(false);
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

  // SVG dimensions
  const width = 500;
  const height = 350;
  const margin = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Laffer curve path (inverted U-shape)
  // Tax rate on x-axis (0% to 100%), Revenue on y-axis
  const optimalTaxRate = 0.45; // T* at approximately 45%
  const maxRevenue = 0.9; // Maximum revenue at T*

  // Generate Laffer curve points using quadratic function
  const generateLafferPoints = () => {
    const points: { x: number; y: number }[] = [];
    for (let t = 0; t <= 1; t += 0.02) {
      // Parabola: Revenue = 4 * maxRevenue * t * (1 - t)
      // This creates a symmetric curve with max at t = 0.5, adjusted for T* = 0.45
      const revenue = 4 * maxRevenue * (t / optimalTaxRate) * (1 - t / (2 - optimalTaxRate)) * optimalTaxRate;
      // Simplified: R = -4 * t^2 + 4 * t (normalized)
      const normalizedRevenue = -4 * Math.pow(t - optimalTaxRate, 2) + maxRevenue;
      points.push({
        x: margin.left + t * chartWidth,
        y: margin.top + chartHeight - Math.max(0, normalizedRevenue) * chartHeight
      });
    }
    return points;
  };

  const lafferPoints = generateLafferPoints();

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    return d;
  };

  // Calculate key coordinates
  const optimalX = margin.left + optimalTaxRate * chartWidth;
  const optimalY = margin.top + chartHeight - maxRevenue * chartHeight;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <Card ref={containerRef} className="w-full bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground">The Laffer Curve</CardTitle>
        <p className="text-sm text-muted-foreground">
          Relationship between tax rates and government revenue
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">
          <Button
            variant={showOptimal ? "default" : "outline"}
            size="sm"
            onClick={() => setShowOptimal(!showOptimal)}
          >
            {showOptimal ? "Hide Optimal Point" : "Show Optimal Point T*"}
          </Button>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
          <defs>
            <linearGradient id="lafferGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--chart-2))" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(var(--destructive))" stopOpacity="0.8" />
            </linearGradient>
            <marker
              id="lafferArrow"
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
          </defs>

          {/* Grid lines */}
          {[0.25, 0.5, 0.75, 1].map((tick, i) => (
            <g key={`grid-${i}`}>
              <line
                x1={margin.left}
                y1={margin.top + chartHeight * (1 - tick)}
                x2={margin.left + chartWidth}
                y2={margin.top + chartHeight * (1 - tick)}
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
            markerEnd="url(#lafferArrow)"
          />
          <line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left + chartWidth}
            y2={margin.top + chartHeight}
            stroke="hsl(var(--foreground))"
            strokeWidth={2}
            markerEnd="url(#lafferArrow)"
          />

          {/* Axis labels */}
          <text
            x={margin.left - 45}
            y={margin.top + chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90, ${margin.left - 45}, ${margin.top + chartHeight / 2})`}
            className="fill-foreground text-sm font-medium"
          >
            Tax Revenue
          </text>
          <text
            x={margin.left + chartWidth / 2}
            y={margin.top + chartHeight + 45}
            textAnchor="middle"
            className="fill-foreground text-sm font-medium"
          >
            Tax Rate (%)
          </text>

          {/* X-axis tick marks */}
          <text x={margin.left} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">0%</text>
          <text x={margin.left + chartWidth * 0.25} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">25%</text>
          <text x={margin.left + chartWidth * 0.5} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">50%</text>
          <text x={margin.left + chartWidth * 0.75} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">75%</text>
          <text x={margin.left + chartWidth} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">100%</text>

          {/* Y-axis label */}
          <text x={margin.left - 10} y={margin.top + chartHeight * 0.1} textAnchor="end" className="fill-muted-foreground text-xs">R<tspan baselineShift="sub" fontSize="8">max</tspan></text>

          {/* The Laffer Curve */}
          <motion.path
            d={pathFromPoints(lafferPoints)}
            fill="none"
            stroke="url(#lafferGradient)"
            strokeWidth={3}
            variants={curveVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />

          {/* Optimal point T* */}
          {showOptimal && (
            <g>
              {/* Dashed vertical line from T* to x-axis */}
              <motion.line
                x1={optimalX}
                y1={optimalY}
                x2={optimalX}
                y2={margin.top + chartHeight}
                stroke="hsl(var(--chart-2))"
                strokeDasharray="6,4"
                strokeWidth={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Dashed horizontal line from R_max to y-axis */}
              <motion.line
                x1={margin.left}
                y1={optimalY}
                x2={optimalX}
                y2={optimalY}
                stroke="hsl(var(--chart-2))"
                strokeDasharray="6,4"
                strokeWidth={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Optimal point */}
              <motion.circle
                cx={optimalX}
                cy={optimalY}
                r={8}
                fill="hsl(var(--chart-2))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />

              {/* T* label */}
              <motion.text
                x={optimalX}
                y={margin.top + chartHeight + 35}
                textAnchor="middle"
                className="fill-chart-2 text-sm font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                T*
              </motion.text>

              {/* R_max label */}
              <motion.text
                x={margin.left - 15}
                y={optimalY + 5}
                textAnchor="end"
                className="fill-chart-2 text-xs font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                R<tspan baselineShift="sub" fontSize="8">max</tspan>
              </motion.text>

              {/* Zone labels */}
              <motion.text
                x={margin.left + chartWidth * 0.2}
                y={margin.top + 30}
                textAnchor="middle"
                className="fill-primary text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                ↑ Tax Rate = ↑ Revenue
              </motion.text>
              <motion.text
                x={margin.left + chartWidth * 0.75}
                y={margin.top + 30}
                textAnchor="middle"
                className="fill-destructive text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                ↑ Tax Rate = ↓ Revenue
              </motion.text>
            </g>
          )}

          {/* Origin labels */}
          <circle
            cx={margin.left}
            cy={margin.top + chartHeight}
            r={3}
            fill="hsl(var(--foreground))"
          />
          <circle
            cx={margin.left + chartWidth}
            cy={margin.top + chartHeight}
            r={3}
            fill="hsl(var(--foreground))"
          />
        </svg>

        {/* Explanation */}
        <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm space-y-2">
          <p className="text-foreground/90">
            <strong>Definition:</strong> The Laffer curve illustrates a theoretical relationship between rates of taxation and the resulting levels of government revenue. It illustrates that increasing tax rate may increase tax revenue only to a certain extent, after that point the increase in tax rate will only decrease the total tax revenue.
          </p>
          <p className="text-muted-foreground">
            As taxes increase from low levels, tax revenue collected by the government also increases. It also shows that tax rates increasing after a certain point (<strong>T*</strong> on the diagram) would cause people not to work as hard or not at all, thereby reducing tax revenue. Eventually, if tax rates reached 100%, all people would choose not to work because everything they earned would go to the government.
          </p>
          <p className="text-primary font-medium">
            Governments would like to be at point <strong>T*</strong> because it is the point at which the government collects maximum amount of tax revenue while people continue to work hard.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LafferCurveDiagram;
