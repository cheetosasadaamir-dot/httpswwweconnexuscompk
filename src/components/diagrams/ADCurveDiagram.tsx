import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * AD Curve Diagram - CIE 9708 Exam Standard
 * 
 * Shows the three transmission mechanisms explaining downward slope:
 * 1. Wealth Effect (Pigou Effect)
 * 2. Interest Rate Effect (Keynes Effect)
 * 3. International Trade Effect
 */
const ADCurveDiagram = () => {
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
  const height = 400;
  const margin = { top: 45, right: 55, bottom: 65, left: 75 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // AD curve points (downward sloping - convex shape)
  const adPoints = [
    { x: 10, y: 92 },
    { x: 22, y: 75 },
    { x: 38, y: 58 },
    { x: 55, y: 44 },
    { x: 72, y: 32 },
    { x: 90, y: 22 },
  ];

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
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  // Key points for annotations
  const pointHigh = { x: 22, y: 75 };
  const pointLow = { x: 72, y: 32 };

  return (
    <div ref={containerRef} className="glass-card p-6">
      <h3 className="font-serif text-xl text-gradient mb-2">The Aggregate Demand Curve</h3>
      <p className="text-muted-foreground text-sm mb-4">
        AD shows the <strong>inverse relationship</strong> between GPL and real output demanded, 
        operating through three transmission mechanisms.
      </p>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-ad" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          <marker id="arrowhead-ad" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-ad)" />

        {/* Axes with arrows */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrowhead-ad)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrowhead-ad)"
        />

        {/* CIE 9708 Standard Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">
          Real National Output / Real GDP (Y)
        </text>
        <text x={22} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600" transform={`rotate(-90, 22, ${margin.top + chartHeight / 2})`}>
          General Price Level (GPL)
        </text>

        {/* AD Curve */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="4"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />

        {/* AD Label */}
        <motion.text 
          x={xScale(93)} 
          y={yScale(20)} 
          fill="hsl(var(--cambridge-cyan))" 
          fontSize="15" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          AD
        </motion.text>

        {/* High price point */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          <circle cx={xScale(pointHigh.x)} cy={yScale(pointHigh.y)} r="5" fill="hsl(var(--primary))" />
          <line 
            x1={xScale(pointHigh.x)} y1={yScale(pointHigh.y)}
            x2={xScale(pointHigh.x)} y2={yScale(0)}
            stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"
          />
          <line 
            x1={xScale(pointHigh.x)} y1={yScale(pointHigh.y)}
            x2={margin.left} y2={yScale(pointHigh.y)}
            stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"
          />
          <text x={xScale(pointHigh.x)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Y₁</text>
          <text x={margin.left - 12} y={yScale(pointHigh.y) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="11">P₁</text>
        </motion.g>

        {/* Low price point */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2.1 }}
        >
          <circle cx={xScale(pointLow.x)} cy={yScale(pointLow.y)} r="5" fill="hsl(var(--secondary))" />
          <line 
            x1={xScale(pointLow.x)} y1={yScale(pointLow.y)}
            x2={xScale(pointLow.x)} y2={yScale(0)}
            stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"
          />
          <line 
            x1={xScale(pointLow.x)} y1={yScale(pointLow.y)}
            x2={margin.left} y2={yScale(pointLow.y)}
            stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"
          />
          <text x={xScale(pointLow.x)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Y₂</text>
          <text x={margin.left - 12} y={yScale(pointLow.y) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="11">P₂</text>
        </motion.g>

        {/* Movement arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2.4 }}
        >
          <path 
            d={`M ${xScale(30)} ${yScale(68)} Q ${xScale(45)} ${yScale(55)} ${xScale(60)} ${yScale(42)}`}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="6,3"
            markerEnd="url(#arrowhead-ad)"
          />
          <text x={xScale(48)} y={yScale(60)} fill="hsl(var(--primary))" fontSize="10" fontWeight="500">
            Movement along AD
          </text>
        </motion.g>
      </svg>

      {/* Three Transmission Mechanisms */}
      <div className="mt-6 grid md:grid-cols-3 gap-3 text-xs">
        <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
          <h5 className="font-semibold text-primary mb-2">1. Wealth Effect (Pigou)</h5>
          <p className="text-muted-foreground leading-relaxed mb-2">
            ↓GPL → ↑ real value of money → consumers feel wealthier → ↑C
          </p>
          <div className="font-mono text-xs bg-muted/40 p-1.5 rounded">
            ↓P → ↑(M/P) → ↑Wealth → ↑C → ↑AD
          </div>
        </div>
        <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
          <h5 className="font-semibold text-secondary mb-2">2. Interest Rate Effect</h5>
          <p className="text-muted-foreground leading-relaxed mb-2">
            ↓GPL → less money needed for transactions → excess money → ↓r → ↑I, ↑C
          </p>
          <div className="font-mono text-xs bg-muted/40 p-1.5 rounded">
            ↓P → ↓Md → ↓r → ↑I → ↑AD
          </div>
        </div>
        <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
          <h5 className="font-semibold text-accent mb-2">3. Trade Effect</h5>
          <p className="text-muted-foreground leading-relaxed mb-2">
            ↓GPL → domestic goods cheaper relative to imports → ↑X, ↓M
          </p>
          <div className="font-mono text-xs bg-muted/40 p-1.5 rounded">
            ↓P → ↑Competitiveness → ↑(X-M) → ↑AD
          </div>
        </div>
      </div>

      {/* Key Points Explanation */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="leading-relaxed">
              <strong className="text-primary">At P₁ (high price):</strong> Real output demanded is low (Y₁) — 
              reduced purchasing power, uncompetitive exports, higher interest rates all depress spending.
            </p>
          </div>
          <div>
            <p className="leading-relaxed">
              <strong className="text-secondary">At P₂ (low price):</strong> Real output demanded is high (Y₂) — 
              wealth effect, improved competitiveness, and lower interest rates stimulate spending.
            </p>
          </div>
        </div>
      </div>

      {/* Examiner Trap */}
      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs">
        <span className="font-semibold text-amber-400">⚠️ Common Error:</span>
        <span className="text-muted-foreground ml-2">
          Do NOT explain AD's downward slope using <em>substitution between goods</em> (microeconomic reasoning). 
          At the aggregate level, there's no substitute for "all output" — use the three macro transmission mechanisms above.
        </span>
      </div>
    </div>
  );
};

export default ADCurveDiagram;