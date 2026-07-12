import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ADShiftDiagram = () => {
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

    return => observer.disconnect();
  }, []);

  const width = 520;
  const height = 400;
  const margin = { top: 40, right: 50, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Original AD curve
  const adPoints = [
    { x: 10, y: 88 },
    { x: 25, y: 70 },
    { x: 40, y: 55 },
    { x: 55, y: 43 },
    { x: 70, y: 33 },
    { x: 85, y: 25 },
  ];

  // Shifted AD curve (rightward shift)
  const adShiftedPoints = adPoints.map(p => ({ x: p.x + 18, y: p.y }));

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

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">Shifts in Aggregate Demand</h3>
          <p className="text-muted-foreground text-sm mt-1">
            A rightward shift represents an increase in AD at every price level
          </p>
        </div>
        <Button
          variant={showShift ? "default" : "outline"}
          size="sm"
          onClick={() => setShowShift(!showShift)}
        >
          {showShift ? "Hide Shift" : "Show AD Increase"}
        </Button>
      </div>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-ad-shift" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrowhead-shift" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
          <marker id="shift-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" />
          </marker>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-ad-shift)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 10} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrowhead-shift)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 10} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrowhead-shift)"
        />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="500">
          Real National Output / Real GDP (Y)
        </text>
        <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="500" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>
          General Price Level (P)
        </text>

        {/* Original AD Curve */}
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
          x={xScale(88)} 
          y={yScale(23)} 
          fill="hsl(var(--cambridge-cyan))" 
          fontSize="13" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          AD
        </motion.text>

        {/* Shifted AD Curve */}
        {showShift && (
          <>
            <motion.path
              d={pathFromPoints(adShiftedPoints)}
              fill="none"
              stroke="hsl(var(--cambridge-cyan))"
              strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.text 
              x={xScale(105)} 
              y={yScale(23)} 
              fill="hsl(var(--cambridge-cyan))" 
              fontSize="13" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              AD₁
            </motion.text>

            {/* Shift arrows */}
            <motion.line
              x1={xScale(40)} y1={yScale(55)}
              x2={xScale(55)} y2={yScale(55)}
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              markerEnd="url(#shift-arrow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.line
              x1={xScale(55)} y1={yScale(43)}
              x2={xScale(70)} y2={yScale(43)}
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              markerEnd="url(#shift-arrow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.line
              x1={xScale(70)} y1={yScale(33)}
              x2={xScale(85)} y2={yScale(33)}
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              markerEnd="url(#shift-arrow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[hsl(var(--cambridge-cyan))]" />
          <span className="text-muted-foreground">Original AD</span>
        </div>
        {showShift && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-[hsl(var(--cambridge-cyan))] border-dashed" style={{ borderWidth: '2px', borderStyle: 'dashed' }} />
            <span className="text-muted-foreground">New AD₁</span>
          </div>
        )}
      </div>

      {/* Causes of shift */}
      {showShift && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-primary/10 rounded-lg"
        >
          <h4 className="font-semibold text-primary mb-2">Causes of a Rightward Shift in AD</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <ul className="space-y-1">
              <li>• ↑ Consumer confidence</li>
              <li>• ↓ Interest rates</li>
              <li>• ↓ Direct taxation</li>
            </ul>
            <ul className="space-y-1">
              <li>• ↑ Government spending</li>
              <li>• ↓ Exchange rate (depreciation)</li>
              <li>• ↑ Wealth (asset prices)</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ADShiftDiagram;