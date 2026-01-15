import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const SRASLRASDiagram = () => {
  const [showAnnotations, setShowAnnotations] = useState(true);
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

  const width = 540;
  const height = 420;
  const margin = { top: 40, right: 60, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // SRAS curve (upward sloping, increasingly steep)
  const srasPoints = [
    { x: 10, y: 15 },
    { x: 25, y: 22 },
    { x: 40, y: 32 },
    { x: 55, y: 48 },
    { x: 65, y: 65 },
    { x: 72, y: 85 },
  ];

  // LRAS position
  const lrasX = 65;

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
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">Short-Run and Long-Run Aggregate Supply</h3>
          <p className="text-muted-foreground text-sm mt-1">
            SRAS is upward sloping; LRAS is vertical at potential output (Y*)
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAnnotations(!showAnnotations)}
        >
          {showAnnotations ? "Hide" : "Show"} Labels
        </Button>
      </div>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-as" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrowhead-as" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-as)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 10} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrowhead-as)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 10} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrowhead-as)"
        />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="500">
          Real National Output / Real GDP (Y)
        </text>
        <text x={18} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="500" transform={`rotate(-90, 18, ${margin.top + chartHeight / 2})`}>
          General Price Level (P)
        </text>

        {/* LRAS - Vertical line */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(95)}
          x2={xScale(lrasX)} y2={yScale(5)}
          stroke="hsl(var(--cambridge-green))"
          strokeWidth="3.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.text 
          x={xScale(lrasX) + 8} 
          y={yScale(97)} 
          fill="hsl(var(--cambridge-green))" 
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          LRAS
        </motion.text>

        {/* Y* label on x-axis */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <line 
            x1={xScale(lrasX)} y1={yScale(0)}
            x2={xScale(lrasX)} y2={yScale(0) + 8}
            stroke="hsl(var(--cambridge-green))" strokeWidth="2"
          />
          <text x={xScale(lrasX)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="12" fontWeight="600">
            Y* (Yf)
          </text>
        </motion.g>

        {/* SRAS Curve */}
        <motion.path
          d={pathFromPoints(srasPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(75)} 
          y={yScale(88)} 
          fill="hsl(var(--cambridge-orange))" 
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          SRAS
        </motion.text>

        {/* Zone annotations */}
        {showAnnotations && (
          <>
            {/* Flat zone - spare capacity */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 0.8 } : {}}
              transition={{ delay: 1.5 }}
            >
              <rect 
                x={xScale(10)} y={yScale(40)} 
                width={xScale(40) - xScale(10)} height={yScale(10) - yScale(40)}
                fill="hsl(var(--primary))" opacity="0.1" rx="4"
              />
              <text x={xScale(25)} y={yScale(25)} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">
                Spare Capacity
              </text>
              <text x={xScale(25)} y={yScale(20)} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
                (Elastic SRAS)
              </text>
            </motion.g>

            {/* Near full employment zone */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 0.8 } : {}}
              transition={{ delay: 1.7 }}
            >
              <rect 
                x={xScale(50)} y={yScale(75)} 
                width={xScale(70) - xScale(50)} height={yScale(40) - yScale(75)}
                fill="hsl(var(--destructive))" opacity="0.1" rx="4"
              />
              <text x={xScale(60)} y={yScale(78)} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">
                Near Full
              </text>
              <text x={xScale(60)} y={yScale(73)} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">
                Employment
              </text>
              <text x={xScale(60)} y={yScale(68)} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
                (Inelastic SRAS)
              </text>
            </motion.g>

            {/* Full employment line annotation */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.9 }}
            >
              <line 
                x1={xScale(lrasX) + 3} y1={yScale(50)}
                x2={xScale(lrasX) + 30} y2={yScale(50)}
                stroke="hsl(var(--cambridge-green))" strokeWidth="1" strokeDasharray="3,2"
              />
              <text x={xScale(lrasX) + 35} y={yScale(52)} fill="hsl(var(--cambridge-green))" fontSize="9">
                Full Employment
              </text>
              <text x={xScale(lrasX) + 35} y={yScale(47)} fill="hsl(var(--cambridge-green))" fontSize="9">
                (Potential Output)
              </text>
            </motion.g>
          </>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[hsl(var(--cambridge-orange))] rounded" />
          <span className="text-muted-foreground">Short-Run AS (SRAS)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[hsl(var(--cambridge-green))] rounded" />
          <span className="text-muted-foreground">Long-Run AS (LRAS)</span>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-[hsl(var(--cambridge-orange))]/10 rounded-lg border border-[hsl(var(--cambridge-orange))]/20">
          <h4 className="font-semibold text-[hsl(var(--cambridge-orange))] mb-2">SRAS: Upward Sloping</h4>
          <p className="text-muted-foreground leading-relaxed">
            In the short run, money wages are sticky. As prices rise, real wages fall, making 
            labour cheaper and increasing firms' willingness to produce more output.
          </p>
        </div>
        <div className="p-4 bg-[hsl(var(--cambridge-green))]/10 rounded-lg border border-[hsl(var(--cambridge-green))]/20">
          <h4 className="font-semibold text-[hsl(var(--cambridge-green))] mb-2">LRAS: Vertical at Y*</h4>
          <p className="text-muted-foreground leading-relaxed">
            In the long run, all prices including wages are flexible. Real wages remain unchanged 
            regardless of price level, so output stays at potential (full employment).
          </p>
        </div>
      </div>
    </div>
  );
};

export default SRASLRASDiagram;