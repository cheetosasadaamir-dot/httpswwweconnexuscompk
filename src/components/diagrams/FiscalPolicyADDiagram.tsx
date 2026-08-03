import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FiscalPolicyADDiagramProps {
  title?: string;
}

const FiscalPolicyADDiagram: React.FC<FiscalPolicyADDiagramProps> = ({
  title = "Fiscal Policy: Monetarist vs Keynesian Models"
}) => {
  const [showShift, setShowShift] = useState(false);
  const [policyType, setPolicyType] = useState<'expansionary' | 'contractionary'>('expansionary');
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
  const width = 450;
  const height = 320;
  const margin = { top: 30, right: 30, bottom: 50, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + val * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - val * chartHeight;

  // Generate AD curve points
  // A rightward shift means: for the same price level, more output is demanded
  // This shifts the curve to the right: same Y (price), higher X (output)
  const generateADPoints = (shift: number = 0) => {
    const points: { x: number; y: number }[] = [];
    for (let q = 0.1; q <= 0.95; q += 0.05) {
      // Shift affects quantity (x) for each price level
      const shiftedQ = q + shift;
      if (shiftedQ >= 0.05 && shiftedQ <= 1.05) {
        points.push({
          x: xScale(shiftedQ),
          y: yScale(0.95 - q * 0.85)  // Price stays based on original q
        });
      }
    }
    return points;
  };

  // Keynesian AS (L-shaped)
  const generateKeynesianAS = () => {
    const points: { x: number; y: number }[] = [];
    // Horizontal section (spare capacity)
    for (let q = 0.1; q <= 0.6; q += 0.05) {
      points.push({ x: xScale(q), y: yScale(0.25) });
    }
    // Upward sloping section
    for (let q = 0.6; q <= 0.75; q += 0.02) {
      const y = 0.25 + (q - 0.6) * 2.5;
      points.push({ x: xScale(q), y: yScale(y) });
    }
    // Vertical section (full capacity)
    for (let p = 0.65; p <= 0.95; p += 0.05) {
      points.push({ x: xScale(0.75), y: yScale(p) });
    }
    return points;
  };

  // Vertical LRAS
  const lrasX = xScale(0.7);

  // SRAS (upward sloping)
  // SRAS: P = 0.145 + 0.3Q, chosen so AD1 intersects SRAS exactly at Yp (X = 0.7)
  const generateSRAS = () => {
    const points: { x: number; y: number }[] = [];
    for (let q = 0.1; q <= 0.9; q += 0.05) {
      points.push({
        x: xScale(q),
        y: yScale(0.145 + q * 0.3)
      });
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

  const ad1Points = generateADPoints(0);
  const ad2Points = generateADPoints(policyType === 'expansionary' ? 0.15 : -0.15);
  const keynesianASPoints = generateKeynesianAS();
  const srasPoints = generateSRAS();

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  const handleReset = () => {
    setShowShift(false);
  };

  return (
    <Card ref={containerRef} className="w-full bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Comparing Monetarist/New Classical and Keynesian perspectives
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Button
            variant={policyType === 'expansionary' ? "default" : "outline"}
            size="sm"
            onClick={() => { setPolicyType('expansionary'); setShowShift(false); }}
          >
            Expansionary
          </Button>
          <Button
            variant={policyType === 'contractionary' ? "default" : "outline"}
            size="sm"
            onClick={() => { setPolicyType('contractionary'); setShowShift(false); }}
          >
            Contractionary
          </Button>
          <Button
            variant={showShift ? "secondary" : "outline"}
            size="sm"
            onClick={() => setShowShift(!showShift)}
          >
            {showShift ? "Hide Shift" : "Show AD Shift"}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            Reset
          </Button>
        </div>

        <Tabs defaultValue="monetarist" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="monetarist">Monetarist/New Classical</TabsTrigger>
            <TabsTrigger value="keynesian">Keynesian</TabsTrigger>
          </TabsList>

          <TabsContent value="monetarist">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
              <defs>
                <marker id="fiscalArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
                </marker>
              </defs>

              {/* Grid */}
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
              <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#fiscalArrow)" />
              <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#fiscalArrow)" />

              {/* Axis labels */}
              <text x={margin.left - 40} y={margin.top + chartHeight / 2} textAnchor="middle" transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`} className="fill-foreground text-xs font-medium">Price Level (P)</text>
              <text x={margin.left + chartWidth / 2} y={margin.top + chartHeight + 40} textAnchor="middle" className="fill-foreground text-xs font-medium">Real GDP (Y)</text>

              {/* LRAS (vertical) */}
              <motion.line
                x1={lrasX}
                y1={margin.top + 10}
                x2={lrasX}
                y2={margin.top + chartHeight - 10}
                stroke="hsl(var(--chart-3))"
                strokeWidth={3}
                variants={curveVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              <text x={lrasX + 5} y={margin.top + 20} className="fill-chart-3 text-xs font-semibold">LRAS</text>

              {/* SRAS */}
              <motion.path
                d={pathFromPoints(srasPoints)}
                fill="none"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
                variants={curveVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              <text x={xScale(0.85)} y={yScale(0.145 + 0.85 * 0.3) - 8} className="fill-chart-4 text-xs font-semibold">SRAS</text>

              {/* AD1 */}
              <motion.path
                d={pathFromPoints(ad1Points)}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={2.5}
                variants={curveVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              <text x={xScale(0.88)} y={yScale(0.12)} className="fill-primary text-xs font-semibold">AD₁</text>

              {/* AD2 (shifted) */}
              {showShift && (
                <>
                  <motion.path
                    d={pathFromPoints(ad2Points)}
                    fill="none"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2.5}
                    strokeDasharray="6,3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <text
                    x={policyType === 'expansionary' ? xScale(1.0) : xScale(0.72)}
                    y={yScale(0.12)}
                    className="fill-chart-1 text-xs font-semibold"
                  >
                    AD₂
                  </text>

                  {/* Equilibrium points: solved from AD(shift, X) = 0.95+0.85*shift-0.85X against SRAS = 0.145+0.3X at X = Yp = 0.7 */}
                  <motion.circle cx={lrasX} cy={yScale(0.355)} r={5} fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={{ scale: 1 }} />
                  <text x={lrasX - 15} y={yScale(0.355) - 8} className="fill-foreground text-xs">E₁</text>
                  <text x={margin.left - 5} y={yScale(0.355) + 4} textAnchor="end" className="fill-foreground text-xs">P₁</text>

                  {policyType === 'expansionary' ? (
                    <>
                      <motion.circle cx={lrasX} cy={yScale(0.4825)} r={5} fill="hsl(var(--chart-1))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
                      <text x={lrasX + 10} y={yScale(0.4825) - 4} className="fill-chart-1 text-xs">E₂</text>
                      <text x={margin.left - 5} y={yScale(0.4825) + 4} textAnchor="end" className="fill-chart-1 text-xs">P₂</text>
                    </>
                  ) : (
                    <>
                      <motion.circle cx={lrasX} cy={yScale(0.2275)} r={5} fill="hsl(var(--chart-1))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
                      <text x={lrasX + 10} y={yScale(0.2275) - 4} className="fill-chart-1 text-xs">E₂</text>
                      <text x={margin.left - 5} y={yScale(0.2275) + 4} textAnchor="end" className="fill-chart-1 text-xs">P₂</text>
                    </>
                  )}

                  {/* Y_p label */}
                  <text x={lrasX} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-foreground text-xs">Y<tspan baselineShift="sub" fontSize="8">p</tspan></text>
                </>
              )}

              {/* Output labels */}
              {!showShift && (
                <>
                  <text x={xScale(0.4)} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">Y<tspan baselineShift="sub" fontSize="8">rec</tspan></text>
                  <text x={lrasX} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-foreground text-xs">Y<tspan baselineShift="sub" fontSize="8">p</tspan></text>
                </>
              )}
            </svg>

            <div className="mt-4 p-3 bg-muted/30 rounded-lg text-sm">
              <p className="text-foreground/90">
                <strong>Monetarist/New Classical View:</strong> In the long run, the economy operates at full employment (Y<sub>p</sub>). {policyType === 'expansionary' ? 'Expansionary' : 'Contractionary'} fiscal policy shifts AD {policyType === 'expansionary' ? 'rightward' : 'leftward'}, but with a vertical LRAS, this only changes the <strong>price level</strong>, not real output in the long run.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="keynesian">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
              <defs>
                <marker id="keynesArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
                </marker>
              </defs>

              {/* Grid */}
              {[0.25, 0.5, 0.75].map((tick, i) => (
                <g key={`grid-k-${i}`}>
                  <line
                    x1={margin.left}
                    y1={yScale(tick)}
                    x2={margin.left + chartWidth}
                    y2={yScale(tick)}
                    stroke="hsl(var(--border))"
                    strokeDasharray="4,4"
                    strokeWidth={0.5}
                  />
                </g>
              ))}

              {/* Axes */}
              <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#keynesArrow)" />
              <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth={2} markerEnd="url(#keynesArrow)" />

              {/* Axis labels */}
              <text x={margin.left - 40} y={margin.top + chartHeight / 2} textAnchor="middle" transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`} className="fill-foreground text-xs font-medium">Price Level (P)</text>
              <text x={margin.left + chartWidth / 2} y={margin.top + chartHeight + 40} textAnchor="middle" className="fill-foreground text-xs font-medium">Real GDP (Y)</text>

              {/* Keynesian AS (L-shaped) */}
              <motion.path
                d={pathFromPoints(keynesianASPoints)}
                fill="none"
                stroke="hsl(var(--chart-3))"
                strokeWidth={3}
                variants={curveVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              <text x={xScale(0.78)} y={margin.top + 20} className="fill-chart-3 text-xs font-semibold">Keynesian AS</text>

              {/* AD1 */}
              <motion.path
                d={pathFromPoints(ad1Points)}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={2.5}
                variants={curveVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
              <text x={xScale(0.88)} y={yScale(0.12)} className="fill-primary text-xs font-semibold">AD₁</text>

              {/* AD2 (shifted) */}
              {showShift && (
                <>
                  <motion.path
                    d={pathFromPoints(ad2Points)}
                    fill="none"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2.5}
                    strokeDasharray="6,3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <text
                    x={policyType === 'expansionary' ? xScale(1.0) : xScale(0.72)}
                    y={yScale(0.12)}
                    className="fill-chart-1 text-xs font-semibold"
                  >
                    AD₂
                  </text>

                  {/* Equilibria solved algebraically: AD(shift,X)=0.95+0.85*shift-0.85X against Keynesian AS upward segment P=0.25+(X-0.6)*2.5 */}
                  <motion.circle cx={xScale(0.6567)} cy={yScale(0.3918)} r={5} fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={{ scale: 1 }} />
                  <text x={xScale(0.6567) - 10} y={yScale(0.3918) - 8} className="fill-foreground text-xs">E₁</text>

                  {policyType === 'expansionary' ? (
                    <>
                      <motion.circle cx={xScale(0.6948)} cy={yScale(0.4870)} r={5} fill="hsl(var(--chart-1))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
                      <text x={xScale(0.6948) + 10} y={yScale(0.4870) - 4} className="fill-chart-1 text-xs">E₂</text>
                      <text x={xScale(0.6567)} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-foreground text-xs">Y₁</text>
                      <text x={xScale(0.6948)} y={margin.top + chartHeight + 34} textAnchor="middle" className="fill-chart-1 text-xs">Y₂</text>
                    </>
                  ) : (
                    <>
                      <motion.circle cx={xScale(0.6187)} cy={yScale(0.2966)} r={5} fill="hsl(var(--chart-1))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
                      <text x={xScale(0.6187) - 10} y={yScale(0.2966) - 8} className="fill-chart-1 text-xs">E₂</text>
                      <text x={xScale(0.6567)} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-foreground text-xs">Y₁</text>
                      <text x={xScale(0.6187)} y={margin.top + chartHeight + 34} textAnchor="middle" className="fill-chart-1 text-xs">Y₂</text>
                    </>
                  )}

                  {/* Y_p label */}
                  <text x={xScale(0.75)} y={margin.top + chartHeight + 20} textAnchor="middle" className="fill-muted-foreground text-xs">Y<tspan baselineShift="sub" fontSize="8">p</tspan></text>
                </>
              )}

              {/* Zone labels */}
              <text x={xScale(0.35)} y={yScale(0.15)} textAnchor="middle" className="fill-muted-foreground text-[10px]">Spare Capacity</text>
            </svg>

            <div className="mt-4 p-3 bg-muted/30 rounded-lg text-sm">
              <p className="text-foreground/90">
                <strong>Keynesian View:</strong> When there is spare capacity (horizontal section of AS), {policyType === 'expansionary' ? 'expansionary' : 'contractionary'} fiscal policy {policyType === 'expansionary' ? 'increases' : 'decreases'} <strong>real output</strong> without affecting the price level. This makes fiscal policy highly effective during recessions.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Policy description */}
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">
            {policyType === 'expansionary' ? 'Expansionary Fiscal Policy' : 'Contractionary Fiscal Policy'}
          </h4>
          <p className="text-sm text-muted-foreground">
            {policyType === 'expansionary'
              ? 'Definition: In this the government increases government spending or decreases taxes to increase the aggregate demand in the economy and reducing unemployment. Expansionary fiscal policy can be used when there is a recessionary gap, and aims to shift the AD curve to the right leading to equilibrium at the full employment level of real GDP (potential GDP).'
              : 'Definition: In this the government decreases government spending or increase taxes to decrease the aggregate demand in the economy and reducing inflation. Contractionary fiscal policy can be used when there is an inflationary gap, and aims to shift the AD curve to the left leading to equilibrium at the full employment level of real GDP (potential GDP).'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FiscalPolicyADDiagram;
