import { motion } from 'framer-motion';
import { useState } from 'react';

const PhillipsCurveDiagram = () => {
  const [showLongRun, setShowLongRun] = useState(false);
  
  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 12) * chartWidth;
  const yScale = (val: number) => height - margin.bottom - (val / 10) * chartHeight;

  // Short-run Phillips Curve 1 (original)
  const srpc1Points = [
    { x: 2, y: 7 },
    { x: 3, y: 4 },
    { x: 4, y: 2.5 },
    { x: 5, y: 2 },
    { x: 6, y: 1.5 },
    { x: 8, y: 1 },
  ];

  // Short-run Phillips Curve 2 (shifted up due to higher expectations)
  const srpc2Points = [
    { x: 2, y: 9 },
    { x: 3, y: 6 },
    { x: 4, y: 4.5 },
    { x: 5, y: 4 },
    { x: 6, y: 3.5 },
    { x: 8, y: 3 },
  ];

  // Natural Rate of Unemployment
  const nru = 5;

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    // Create smooth curve using quadratic bezier
    let path = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (xScale(points[i].x) + xScale(points[i + 1].x)) / 2;
      const yc = (yScale(points[i].y) + yScale(points[i + 1].y)) / 2;
      path += ` Q ${xScale(points[i].x)} ${yScale(points[i].y)} ${xc} ${yc}`;
    }
    path += ` L ${xScale(points[points.length - 1].x)} ${yScale(points[points.length - 1].y)}`;
    return path;
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg text-silver-bright">The Phillips Curve</h3>
        <button
          onClick={() => setShowLongRun(!showLongRun)}
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cambridge-magenta/20 text-cambridge-magenta hover:bg-cambridge-magenta/30 transition-colors"
        >
          {showLongRun ? 'Show Short-Run Only' : 'Show Long-Run (LRPC)'}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines */}
        {[2, 4, 6, 8].map((val) => (
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
          x={20}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 20, ${height / 2})`}
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
        {[2, 4, 6, 8].map((val) => (
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
        {showLongRun && (
          <>
            <motion.line
              x1={xScale(nru)}
              y1={margin.top}
              x2={xScale(nru)}
              y2={height - margin.bottom}
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth={3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
            <text
              x={xScale(nru) + 10}
              y={margin.top + 20}
              fill="hsl(var(--cambridge-orange))"
              className="text-xs font-medium"
            >
              LRPC
            </text>
            <text
              x={xScale(nru)}
              y={height - margin.bottom + 35}
              textAnchor="middle"
              fill="hsl(var(--cambridge-orange))"
              className="text-xs"
            >
              NRU
            </text>
          </>
        )}

        {/* Short-Run Phillips Curve 1 */}
        <motion.path
          d={pathFromPoints(srpc1Points)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" as const }}
        />
        <text
          x={xScale(8)}
          y={yScale(1) + 20}
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-medium"
        >
          SRPC₁ (πᵉ = 2%)
        </text>

        {/* Short-Run Phillips Curve 2 (when showing long-run) */}
        {showLongRun && (
          <>
            <motion.path
              d={pathFromPoints(srpc2Points)}
              fill="none"
              stroke="hsl(var(--cambridge-magenta))"
              strokeWidth={3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text
              x={xScale(8)}
              y={yScale(3) + 20}
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-medium"
            >
              SRPC₂ (πᵉ = 4%)
            </text>
          </>
        )}

        {/* Point A - Initial equilibrium */}
        <motion.circle
          cx={xScale(nru)}
          cy={yScale(2)}
          r={6}
          fill="hsl(var(--cambridge-cyan))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        />
        <text
          x={xScale(nru) - 15}
          y={yScale(2) - 10}
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-bold"
        >
          A
        </text>

        {showLongRun && (
          <>
            {/* Point B - After expansion */}
            <motion.circle
              cx={xScale(3)}
              cy={yScale(4)}
              r={6}
              fill="hsl(var(--cambridge-green))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            />
            <text
              x={xScale(3) + 10}
              y={yScale(4) - 5}
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-bold"
            >
              B
            </text>

            {/* Point C - New equilibrium */}
            <motion.circle
              cx={xScale(nru)}
              cy={yScale(4)}
              r={6}
              fill="hsl(var(--cambridge-magenta))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
            <text
              x={xScale(nru) + 10}
              y={yScale(4) - 10}
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-bold"
            >
              C
            </text>

            {/* Arrow A to B */}
            <motion.path
              d={`M ${xScale(nru) - 5} ${yScale(2) - 5} Q ${xScale(4)} ${yScale(3)} ${xScale(3) + 5} ${yScale(4) + 5}`}
              fill="none"
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={2}
              strokeDasharray="4,4"
              markerEnd="url(#arrowPC)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />

            {/* Arrow B to C */}
            <motion.path
              d={`M ${xScale(3) + 5} ${yScale(4)} L ${xScale(nru) - 5} ${yScale(4)}`}
              fill="none"
              stroke="hsl(var(--cambridge-magenta))"
              strokeWidth={2}
              strokeDasharray="4,4"
              markerEnd="url(#arrowPC)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
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
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))' }} />
          <span className="text-muted-foreground">Short-Run Phillips Curve</span>
        </div>
        {showLongRun && (
          <>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-orange))' }} />
              <span className="text-muted-foreground">Long-Run Phillips Curve (NRU)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-magenta))' }} />
              <span className="text-muted-foreground">Shifted SRPC (higher πᵉ)</span>
            </div>
          </>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-4 p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground">
        {showLongRun ? (
          <p>
            <strong>A → B:</strong> Expansionary policy moves economy along SRPC₁ (lower U, higher π). 
            <strong> B → C:</strong> Workers adjust inflation expectations upward; SRPC shifts up. 
            Unemployment returns to NRU, but at higher inflation. <strong>Conclusion:</strong> No 
            long-run trade-off exists.
          </p>
        ) : (
          <p>
            <strong>Short-run trade-off:</strong> Lower unemployment is associated with higher 
            inflation. When demand increases, firms raise prices; tight labor markets allow workers 
            to negotiate higher wages, further pushing up inflation.
          </p>
        )}
      </div>
    </div>
  );
};

export default PhillipsCurveDiagram;
