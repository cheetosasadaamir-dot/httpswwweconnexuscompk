import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const CyclicalUnemploymentDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const width = 520;
  const height = 420;
  const margin = { top: 40, right: 40, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Potential output (Yf = full employment)
  const Yf = 75;
  // Current output (Y1 < Yf = output gap)
  const Y1 = 45;
  // Output after policy (Y2)
  const Y2 = 70;

  // Price levels
  const P1 = 35;
  const P2 = 50;

  // LRAS vertical line
  const lrasPath = `M ${xScale(Yf)} ${margin.top} L ${xScale(Yf)} ${margin.top + chartHeight}`;
  
  // SRAS upward sloping
  const srasPath = `M ${xScale(10)} ${yScale(15)} Q ${xScale(50)} ${yScale(40)} ${xScale(90)} ${yScale(85)}`;
  
  // AD1 (recession - low demand)
  const ad1Path = `M ${xScale(10)} ${yScale(70)} Q ${xScale(45)} ${yScale(35)} ${xScale(70)} ${yScale(10)}`;
  
  // AD2 (after expansionary policy)
  const ad2Path = `M ${xScale(25)} ${yScale(85)} Q ${xScale(60)} ${yScale(50)} ${xScale(90)} ${yScale(20)}`;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-lg text-silver-bright">Cyclical (Demand-Deficient) Unemployment</h3>
          <p className="text-xs text-muted-foreground mt-1">Figure 4.2: Negative Output Gap and Policy Response</p>
        </div>
        <button
          onClick={() => setShowPolicy(!showPolicy)}
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cambridge-green/20 text-cambridge-green hover:bg-cambridge-green/30 transition-colors"
        >
          {showPolicy ? 'Hide Policy' : 'Show Expansionary Policy'}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid */}
        {[20, 40, 60, 80].map((val) => (
          <g key={val}>
            <line
              x1={xScale(val)}
              y1={margin.top}
              x2={xScale(val)}
              y2={margin.top + chartHeight}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.1}
              strokeDasharray="4,4"
            />
            <line
              x1={margin.left}
              y1={yScale(val)}
              x2={margin.left + chartWidth}
              y2={yScale(val)}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.1}
              strokeDasharray="4,4"
            />
          </g>
        ))}

        {/* Axes */}
        <line
          x1={margin.left}
          y1={margin.top + chartHeight}
          x2={margin.left + chartWidth}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--silver))"
          strokeWidth={2}
        />
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--silver))"
          strokeWidth={2}
        />

        {/* Axis labels */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
        >
          Real GDP (Y)
        </text>
        <text
          x={25}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 25, ${height / 2})`}
        >
          Price Level (P)
        </text>

        {/* Output gap shading */}
        <motion.rect
          x={xScale(Y1)}
          y={margin.top}
          width={xScale(Yf) - xScale(Y1)}
          height={chartHeight}
          fill="hsl(var(--destructive))"
          opacity={0.08}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <text
          x={(xScale(Y1) + xScale(Yf)) / 2}
          y={margin.top + 25}
          textAnchor="middle"
          fill="hsl(var(--destructive))"
          className="text-xs font-medium"
        >
          Negative Output Gap
        </text>

        {/* LRAS */}
        <motion.path
          d={lrasPath}
          fill="none"
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text
          x={xScale(Yf) + 8}
          y={margin.top + 20}
          fill="hsl(var(--cambridge-orange))"
          className="text-sm font-semibold"
        >
          LRAS
        </text>

        {/* SRAS */}
        <motion.path
          d={srasPath}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text
          x={xScale(92)}
          y={yScale(88)}
          fill="hsl(var(--cambridge-cyan))"
          className="text-sm font-semibold"
        >
          SRAS
        </text>

        {/* AD1 */}
        <motion.path
          d={ad1Path}
          fill="none"
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text
          x={xScale(72)}
          y={yScale(8)}
          fill="hsl(var(--cambridge-magenta))"
          className="text-sm font-semibold"
        >
          AD₁
        </text>

        {/* AD2 (after policy) */}
        {showPolicy && (
          <>
            <motion.path
              d={ad2Path}
              fill="none"
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text
              x={xScale(92)}
              y={yScale(18)}
              fill="hsl(var(--cambridge-green))"
              className="text-sm font-semibold"
            >
              AD₂
            </text>

            {/* Shift arrow */}
            <motion.path
              d={`M ${xScale(50)} ${yScale(42)} L ${xScale(60)} ${yScale(52)}`}
              fill="none"
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={2}
              markerEnd="url(#arrowCyclical)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />

            {/* New equilibrium E2 */}
            <motion.circle
              cx={xScale(Y2)}
              cy={yScale(P2)}
              r={6}
              fill="hsl(var(--cambridge-green))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
            <text
              x={xScale(Y2) + 12}
              y={yScale(P2) - 8}
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-bold"
            >
              E₂
            </text>

            {/* Y2 projection */}
            <motion.line
              x1={xScale(Y2)}
              y1={yScale(P2)}
              x2={xScale(Y2)}
              y2={margin.top + chartHeight}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={1.5}
              strokeDasharray="6,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
            />
            <text
              x={xScale(Y2)}
              y={margin.top + chartHeight + 18}
              textAnchor="middle"
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-medium"
            >
              Y₂
            </text>

            {/* P2 projection */}
            <motion.line
              x1={margin.left}
              y1={yScale(P2)}
              x2={xScale(Y2)}
              y2={yScale(P2)}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={1.5}
              strokeDasharray="6,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            />
            <text
              x={margin.left - 10}
              y={yScale(P2) + 4}
              textAnchor="end"
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-medium"
            >
              P₂
            </text>
          </>
        )}

        {/* Equilibrium E1 */}
        <motion.circle
          cx={xScale(Y1)}
          cy={yScale(P1)}
          r={6}
          fill="hsl(var(--cambridge-magenta))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <text
          x={xScale(Y1) + 12}
          y={yScale(P1) - 8}
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs font-bold"
        >
          E₁
        </text>

        {/* Y1 projection */}
        <motion.line
          x1={xScale(Y1)}
          y1={yScale(P1)}
          x2={xScale(Y1)}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        <text
          x={xScale(Y1)}
          y={margin.top + chartHeight + 18}
          textAnchor="middle"
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs font-medium"
        >
          Y₁
        </text>

        {/* Yf (full employment) label */}
        <text
          x={xScale(Yf)}
          y={margin.top + chartHeight + 18}
          textAnchor="middle"
          fill="hsl(var(--cambridge-orange))"
          className="text-xs font-medium"
        >
          Yf
        </text>

        {/* P1 projection */}
        <motion.line
          x1={margin.left}
          y1={yScale(P1)}
          x2={xScale(Y1)}
          y2={yScale(P1)}
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        />
        <text
          x={margin.left - 10}
          y={yScale(P1) + 4}
          textAnchor="end"
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs font-medium"
        >
          P₁
        </text>

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowCyclical"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(var(--cambridge-green))"
            />
          </marker>
        </defs>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-orange" />
          <span className="text-muted-foreground">LRAS (Full Employment)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-cyan" />
          <span className="text-muted-foreground">SRAS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-magenta" />
          <span className="text-muted-foreground">AD₁ (Recession)</span>
        </div>
        {showPolicy && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-cambridge-green" />
            <span className="text-muted-foreground">AD₂ (After Policy)</span>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-4 p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground">
        {showPolicy ? (
          <p>
            <strong>Policy Response:</strong> Expansionary fiscal policy (↑G or ↓T) or monetary 
            policy (↓r) shifts $AD$ rightward from $AD_1$ to $AD_2$. Output increases from $Y_1$ 
            to $Y_2$, closing the <strong>negative output gap</strong> and reducing cyclical 
            unemployment. Trade-off: price level rises from $P_1$ to $P_2$ (inflation).
          </p>
        ) : (
          <p>
            <strong>Cyclical Unemployment:</strong> During a recession, $AD$ falls below full 
            employment output ($Y_f$). The economy operates at $Y_1 &lt; Y_f$, creating a 
            <strong> negative output gap</strong>. Unemployment exceeds the natural rate because 
            firms lay off workers due to insufficient demand for goods and services.
          </p>
        )}
      </div>
    </div>
  );
};

export default CyclicalUnemploymentDiagram;
