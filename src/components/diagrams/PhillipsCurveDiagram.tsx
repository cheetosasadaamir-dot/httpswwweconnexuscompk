import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const PhillipsCurveDiagram = () => {
  const [view, setView] = useState<'srpc' | 'shift' | 'lrpc'>('srpc');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const width = 540;
  const height = 420;
  const margin = { top: 40, right: 50, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 12) * chartWidth;
  const yScale = (val: number) => height - margin.bottom - (val / 12) * chartHeight;

  // Natural Rate of Unemployment
  const nru = 5;

  // Short-run Phillips Curve 1 (original, πᵉ = 2%)
  const srpc1Points = [
    { x: 2, y: 8 },
    { x: 3, y: 5 },
    { x: 4, y: 3.5 },
    { x: 5, y: 2.5 },
    { x: 6, y: 2 },
    { x: 8, y: 1.5 },
    { x: 10, y: 1 },
  ];

  // Short-run Phillips Curve 2 (shifted, πᵉ = 5%)
  const srpc2Points = [
    { x: 2, y: 11 },
    { x: 3, y: 8 },
    { x: 4, y: 6.5 },
    { x: 5, y: 5.5 },
    { x: 6, y: 5 },
    { x: 8, y: 4.5 },
    { x: 10, y: 4 },
  ];

  // Short-run Phillips Curve 3 (supply shock shift, πᵉ = 7%)
  const srpc3Points = [
    { x: 2, y: 13 },
    { x: 3, y: 10 },
    { x: 4, y: 8.5 },
    { x: 5, y: 7.5 },
    { x: 6, y: 7 },
    { x: 8, y: 6.5 },
    { x: 10, y: 6 },
  ];

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    let path = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (xScale(points[i].x) + xScale(points[i + 1].x)) / 2;
      const yc = (yScale(points[i].y) + yScale(points[i + 1].y)) / 2;
      path += ` Q ${xScale(points[i].x)} ${yScale(points[i].y)} ${xc} ${yc}`;
    }
    path += ` L ${xScale(points[points.length - 1].x)} ${yScale(points[points.length - 1].y)}`;
    return path;
  };

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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-serif text-lg text-silver-bright">The Phillips Curve</h3>
          <p className="text-xs text-muted-foreground mt-1">Figure 4.3: Short-Run and Long-Run Trade-offs</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setView('srpc')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              view === 'srpc' 
                ? 'bg-cambridge-cyan/30 text-cambridge-cyan' 
                : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
            }`}
          >
            Basic SRPC
          </button>
          <button
            onClick={() => setView('shift')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              view === 'shift' 
                ? 'bg-cambridge-magenta/30 text-cambridge-magenta' 
                : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
            }`}
          >
            SRPC Shifts
          </button>
          <button
            onClick={() => setView('lrpc')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              view === 'lrpc' 
                ? 'bg-cambridge-orange/30 text-cambridge-orange' 
                : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
            }`}
          >
            Long-Run (LRPC)
          </button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines */}
        {[2, 4, 6, 8, 10].map((val) => (
          <g key={val}>
            <line
              x1={xScale(val)}
              y1={margin.top}
              x2={xScale(val)}
              y2={height - margin.bottom}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.1}
              strokeDasharray="4,4"
            />
            <line
              x1={margin.left}
              y1={yScale(val)}
              x2={width - margin.right}
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
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="hsl(var(--silver))"
          strokeWidth={2}
        />
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="hsl(var(--silver))"
          strokeWidth={2}
        />

        {/* Axis labels */}
        <text
          x={width / 2}
          y={height - 15}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
        >
          Unemployment Rate (%)
        </text>
        <text
          x={25}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 25, ${height / 2})`}
        >
          Inflation Rate (%)
        </text>

        {/* Axis tick labels */}
        {[2, 4, 6, 8, 10].map((val) => (
          <text
            key={`x-${val}`}
            x={xScale(val)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="hsl(var(--muted-foreground))"
            className="text-xs"
          >
            {val}
          </text>
        ))}
        {[2, 4, 6, 8, 10].map((val) => (
          <text
            key={`y-${val}`}
            x={margin.left - 10}
            y={yScale(val) + 4}
            textAnchor="end"
            fill="hsl(var(--muted-foreground))"
            className="text-xs"
          >
            {val}
          </text>
        ))}

        {/* Long-Run Phillips Curve (vertical at NRU) */}
        {view === 'lrpc' && (
          <>
            <motion.line
              x1={xScale(nru)}
              y1={margin.top}
              x2={xScale(nru)}
              y2={height - margin.bottom}
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth={4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
            />
            <text
              x={xScale(nru) + 12}
              y={margin.top + 20}
              fill="hsl(var(--cambridge-orange))"
              className="text-sm font-bold"
            >
              LRPC
            </text>
            <text
              x={xScale(nru)}
              y={height - margin.bottom + 38}
              textAnchor="middle"
              fill="hsl(var(--cambridge-orange))"
              className="text-xs font-semibold"
            >
              NRU = 5%
            </text>
          </>
        )}

        {/* SRPC 1 - Always shown */}
        <motion.path
          d={pathFromPoints(srpc1Points)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text
          x={xScale(10) + 5}
          y={yScale(1) + 5}
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-semibold"
        >
          SRPC₁ (πᵉ = 2%)
        </text>

        {/* SRPC 2 - Shifted curve */}
        {(view === 'shift' || view === 'lrpc') && (
          <>
            <motion.path
              d={pathFromPoints(srpc2Points)}
              fill="none"
              stroke="hsl(var(--cambridge-magenta))"
              strokeWidth={3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <text
              x={xScale(10) + 5}
              y={yScale(4) + 5}
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-semibold"
            >
              SRPC₂ (πᵉ = 5%)
            </text>
          </>
        )}

        {/* SRPC 3 - Supply shock */}
        {view === 'shift' && (
          <>
            <motion.path
              d={pathFromPoints(srpc3Points)}
              fill="none"
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <text
              x={xScale(10) + 5}
              y={yScale(6) + 5}
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-semibold"
            >
              SRPC₃ (Supply Shock)
            </text>

            {/* Shift arrow 1 */}
            <motion.path
              d={`M ${xScale(6)} ${yScale(2.5)} L ${xScale(6)} ${yScale(5.5)}`}
              fill="none"
              stroke="hsl(var(--silver))"
              strokeWidth={2}
              strokeDasharray="4,4"
              markerEnd="url(#arrowPC)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            />

            {/* Shift arrow 2 */}
            <motion.path
              d={`M ${xScale(6)} ${yScale(5.5)} L ${xScale(6)} ${yScale(7.5)}`}
              fill="none"
              stroke="hsl(var(--silver))"
              strokeWidth={2}
              strokeDasharray="4,4"
              markerEnd="url(#arrowPC)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            />
          </>
        )}

        {/* Points for LRPC view */}
        {view === 'lrpc' && (
          <>
            {/* Point A - Initial equilibrium on SRPC1 at NRU */}
            <motion.circle
              cx={xScale(nru)}
              cy={yScale(2.5)}
              r={7}
              fill="hsl(var(--cambridge-cyan))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            />
            <text
              x={xScale(nru) - 15}
              y={yScale(2.5) - 12}
              fill="hsl(var(--cambridge-cyan))"
              className="text-xs font-bold"
            >
              A
            </text>

            {/* Point B - Movement along SRPC1 */}
            <motion.circle
              cx={xScale(3)}
              cy={yScale(5)}
              r={7}
              fill="hsl(var(--cambridge-green))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.3 }}
            />
            <text
              x={xScale(3) + 10}
              y={yScale(5) - 8}
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-bold"
            >
              B
            </text>

            {/* Point C - New equilibrium on SRPC2 at NRU */}
            <motion.circle
              cx={xScale(nru)}
              cy={yScale(5.5)}
              r={7}
              fill="hsl(var(--cambridge-magenta))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 }}
            />
            <text
              x={xScale(nru) + 12}
              y={yScale(5.5) - 8}
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-bold"
            >
              C
            </text>

            {/* Arrow A to B */}
            <motion.path
              d={`M ${xScale(nru) - 5} ${yScale(2.5) - 5} Q ${xScale(4)} ${yScale(4)} ${xScale(3) + 7} ${yScale(5) + 5}`}
              fill="none"
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={2}
              strokeDasharray="5,5"
              markerEnd="url(#arrowPC)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />

            {/* Arrow B to C */}
            <motion.path
              d={`M ${xScale(3) + 7} ${yScale(5)} L ${xScale(nru) - 7} ${yScale(5.5)}`}
              fill="none"
              stroke="hsl(var(--cambridge-magenta))"
              strokeWidth={2}
              strokeDasharray="5,5"
              markerEnd="url(#arrowPC)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            />
          </>
        )}

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowPC"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(var(--silver))"
            />
          </marker>
        </defs>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-cyan" />
          <span className="text-muted-foreground">SRPC₁</span>
        </div>
        {(view === 'shift' || view === 'lrpc') && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-cambridge-magenta" />
            <span className="text-muted-foreground">SRPC₂ (↑πᵉ)</span>
          </div>
        )}
        {view === 'shift' && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-cambridge-green" />
            <span className="text-muted-foreground">SRPC₃ (Supply Shock)</span>
          </div>
        )}
        {view === 'lrpc' && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-cambridge-orange" />
            <span className="text-muted-foreground">LRPC (Vertical at NRU)</span>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground">
        {view === 'srpc' && (
          <div>
            <p className="font-medium text-foreground mb-2">Short-Run Trade-off:</p>
            <p>
              The <strong>Short-Run Phillips Curve (SRPC)</strong> shows an inverse relationship 
              between inflation ($\pi$) and unemployment ($U$). When aggregate demand increases, 
              firms raise prices (↑$\pi$) and hire more workers (↓$U$). This trade-off exists because 
              workers have <strong>adaptive expectations</strong>—they don't immediately anticipate 
              higher inflation.
            </p>
          </div>
        )}
        {view === 'shift' && (
          <div>
            <p className="font-medium text-foreground mb-2">Causes of SRPC Shifts:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Change in Aggregate Supply:</strong> ↑Cost of production, ↑Taxes, ↑Fuel prices, ↓Subsidies, Natural disasters</li>
              <li><strong>Change in NRU:</strong> ↑Frictional, Seasonal, Structural, Voluntary, or Classical unemployment</li>
              <li><strong>Supply shocks</strong> shift the curve rightward—same unemployment, higher inflation (stagflation)</li>
            </ul>
          </div>
        )}
        {view === 'lrpc' && (
          <div>
            <p className="font-medium text-foreground mb-2">Long-Run Adjustment (Monetarist View):</p>
            <p>
              <strong>A → B:</strong> Expansionary policy moves economy along SRPC₁ (↓$U$, ↑$\pi$). 
              <strong> B → C:</strong> Workers adjust inflation expectations upward; SRPC shifts to SRPC₂. 
              Unemployment returns to <strong>NRU</strong>, but at higher inflation. 
              <strong> Conclusion:</strong> The LRPC is <strong>vertical</strong>—there is no long-run 
              trade-off. Demand-side policies only cause inflation, not permanent ↓$U$.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhillipsCurveDiagram;
