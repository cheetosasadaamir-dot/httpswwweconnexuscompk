import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InflationDiagrams = () => {
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

  const width = 400;
  const height = 320;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  // Common curve points
  const adPoints = [
    { x: 20, y: 80 },
    { x: 40, y: 55 },
    { x: 60, y: 40 },
    { x: 80, y: 30 },
  ];

  const adShiftedPoints = adPoints.map(p => ({ x: p.x + 15, y: p.y }));

  const srasPoints = [
    { x: 20, y: 20 },
    { x: 40, y: 35 },
    { x: 60, y: 55 },
    { x: 80, y: 85 },
  ];

  const srasShiftedPoints = srasPoints.map(p => ({ x: p.x - 12, y: p.y + 10 }));

  const lrasX = 70;

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX = xScale((prev.x + curr.x) / 2);
      d += ` Q ${cpX} ${yScale(prev.y)}, ${xScale(curr.x)} ${yScale(curr.y)}`;
    }
    return d;
  };

  const DiagramBase = ({ children }: { children: React.ReactNode }) => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm mx-auto">
      {/* Grid */}
      <defs>
        <pattern id="grid-inf" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-inf)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      {/* Labels */}
      <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Real GDP</text>
      <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>Price Level</text>
      
      {children}
    </svg>
  );

  return (
    <div ref={containerRef} className="glass-card p-6">
      <h3 className="font-serif text-xl text-gradient mb-4">Causes of Inflation</h3>
      
      <Tabs defaultValue="demand-pull" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="demand-pull">Demand-Pull</TabsTrigger>
          <TabsTrigger value="cost-push">Cost-Push</TabsTrigger>
          <TabsTrigger value="monetary">Monetary</TabsTrigger>
        </TabsList>

        <TabsContent value="demand-pull">
          <DiagramBase>
            {/* SRAS */}
            <motion.path
              d={pathFromPoints(srasPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x={xScale(82)} y={yScale(88)} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">SRAS</text>

            {/* Original AD */}
            <motion.path
              d={pathFromPoints(adPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x={xScale(82)} y={yScale(28)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">AD₀</text>

            {/* Shifted AD */}
            <motion.path
              d={pathFromPoints(adShiftedPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="2.5"
              strokeDasharray="6,3"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isVisible ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            <text x={xScale(95)} y={yScale(28)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">AD₁</text>

            {/* Shift arrow */}
            <motion.path
              d={`M ${xScale(55)} ${yScale(42)} L ${xScale(68)} ${yScale(42)}`}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              markerEnd="url(#arrowhead-dp)"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            />
            <defs>
              <marker id="arrowhead-dp" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" />
              </marker>
            </defs>

            {/* Equilibrium points */}
            <motion.circle cx={xScale(48)} cy={yScale(43)} r="5" fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
            <text x={xScale(48) - 12} y={yScale(43) - 8} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₀</text>
            
            <motion.circle cx={xScale(58)} cy={yScale(52)} r="5" fill="hsl(var(--secondary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 1.4 }} />
            <text x={xScale(58) + 6} y={yScale(52) - 6} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₁</text>

            {/* Price level indicators */}
            <motion.line x1={margin.left} y1={yScale(43)} x2={xScale(48)} y2={yScale(43)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
            <motion.line x1={margin.left} y1={yScale(52)} x2={xScale(58)} y2={yScale(52)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} transition={{ delay: 1.4 }} />
            <text x={margin.left - 8} y={yScale(43) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">P₀</text>
            <text x={margin.left - 8} y={yScale(52) + 4} textAnchor="end" fill="hsl(var(--secondary))" fontSize="10">P₁</text>
          </DiagramBase>
          <p className="text-sm text-muted-foreground text-center mt-3">
            AD shifts right → Price level rises from P₀ to P₁
          </p>
        </TabsContent>

        <TabsContent value="cost-push">
          <DiagramBase>
            {/* Original SRAS */}
            <motion.path
              d={pathFromPoints(srasPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x={xScale(82)} y={yScale(88)} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">SRAS₀</text>

            {/* Shifted SRAS */}
            <motion.path
              d={pathFromPoints(srasShiftedPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth="2.5"
              strokeDasharray="6,3"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isVisible ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            <text x={xScale(68)} y={yScale(95)} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">SRAS₁</text>

            {/* AD */}
            <motion.path
              d={pathFromPoints(adPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x={xScale(82)} y={yScale(28)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">AD</text>

            {/* Shift arrow */}
            <motion.path
              d={`M ${xScale(55)} ${yScale(55)} L ${xScale(42)} ${yScale(62)}`}
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
              markerEnd="url(#arrowhead-cp)"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            />
            <defs>
              <marker id="arrowhead-cp" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--destructive))" />
              </marker>
            </defs>

            {/* Equilibrium points */}
            <motion.circle cx={xScale(48)} cy={yScale(43)} r="5" fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
            <text x={xScale(48) + 6} y={yScale(43) - 6} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₀</text>
            
            <motion.circle cx={xScale(38)} cy={yScale(52)} r="5" fill="hsl(var(--destructive))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 1.4 }} />
            <text x={xScale(38) - 12} y={yScale(52) - 6} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₁</text>

            {/* Output indicators */}
            <motion.line x1={xScale(48)} y1={yScale(43)} x2={xScale(48)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
            <motion.line x1={xScale(38)} y1={yScale(52)} x2={xScale(38)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} transition={{ delay: 1.4 }} />
            <text x={xScale(48)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Y₀</text>
            <text x={xScale(38)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10">Y₁</text>
          </DiagramBase>
          <p className="text-sm text-muted-foreground text-center mt-3">
            SRAS shifts left → Stagflation: ↑P and ↓Y simultaneously
          </p>
        </TabsContent>

        <TabsContent value="monetary">
          <DiagramBase>
            {/* LRAS */}
            <motion.line
              x1={xScale(lrasX)} y1={yScale(90)}
              x2={xScale(lrasX)} y2={yScale(10)}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth="2.5"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            />
            <text x={xScale(lrasX) + 5} y={yScale(92)} fill="hsl(var(--cambridge-green))" fontSize="11" fontWeight="600">LRAS</text>

            {/* Original AD */}
            <motion.path
              d={pathFromPoints(adPoints.map(p => ({ x: p.x + 5, y: p.y })))}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x={xScale(87)} y={yScale(28)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">AD₀</text>

            {/* Shifted AD */}
            <motion.path
              d={pathFromPoints(adPoints.map(p => ({ x: p.x + 20, y: p.y })))}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="2.5"
              strokeDasharray="6,3"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isVisible ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            <text x={xScale(100)} y={yScale(28)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">AD₁</text>

            {/* Equilibrium on LRAS */}
            <motion.circle cx={xScale(lrasX)} cy={yScale(40)} r="5" fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
            <text x={xScale(lrasX) - 12} y={yScale(40) - 6} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₀</text>
            
            <motion.circle cx={xScale(lrasX)} cy={yScale(58)} r="5" fill="hsl(var(--secondary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 1.4 }} />
            <text x={xScale(lrasX) - 12} y={yScale(58) - 6} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₁</text>

            {/* Price level indicators */}
            <motion.line x1={margin.left} y1={yScale(40)} x2={xScale(lrasX)} y2={yScale(40)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
            <motion.line x1={margin.left} y1={yScale(58)} x2={xScale(lrasX)} y2={yScale(58)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} transition={{ delay: 1.4 }} />
            <text x={margin.left - 8} y={yScale(40) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">P₀</text>
            <text x={margin.left - 8} y={yScale(58) + 4} textAnchor="end" fill="hsl(var(--secondary))" fontSize="10">P₁</text>

            {/* Money supply annotation */}
            <motion.text
              x={xScale(50)} y={yScale(75)}
              fill="hsl(var(--primary))"
              fontSize="10"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
            >
              ↑M → ↑AD
            </motion.text>
          </DiagramBase>
          <p className="text-sm text-muted-foreground text-center mt-3">
            In long run, ↑Money Supply is purely inflationary (output fixed at Yf)
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InflationDiagrams;
