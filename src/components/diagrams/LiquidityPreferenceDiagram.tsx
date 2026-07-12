import { motion } from 'framer-motion';
import { useState } from 'react';

const LiquidityPreferenceDiagram = () => {
  const [showShift, setShowShift] = useState(false);
  
  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 500) * chartWidth;
  const yScale = (val: number) => height - margin.bottom - (val / 12) * chartHeight;

  // Money demand curve (LP) - downward sloping with horizontal section at bottom (liquidity trap)
  const lpPoints = [
    { x: 50, y: 10 },
    { x: 100, y: 7 },
    { x: 150, y: 5 },
    { x: 200, y: 4 },
    { x: 250, y: 3 },
    { x: 350, y: 2 },
    { x: 450, y: 2 }, // Liquidity trap - horizontal
  ];

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`).join(' ');
  };

  // Money supply positions
  const ms1X = 200;
  const ms2X = 300;

  // Equilibrium points
  const eq1Y = 4; // At Ms1 = 200
  const eq2Y = 2.8; // At Ms2 = 300

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg text-silver-bright">Liquidity Preference Theory</h3>
        <button
          onClick={() => setShowShift(!showShift)}
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cambridge-green/20 text-cambridge-green hover:bg-cambridge-green/30 transition-colors"
        >
          {showShift ? 'Reset' : 'Increase Money Supply'}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines */}
        {[2, 4, 6, 8, 10].map((val) => (
          <line
            key={val}
            x1={margin.left}
            y1={yScale(val)}
            x2={width - margin.right}
            y2={yScale(val)}
            stroke="hsl(var(--muted-foreground))"
            strokeOpacity={0.1}
            strokeDasharray="4,4"
          />
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
          Quantity of Money (M)
        </text>
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 20, ${height / 2})`}
        >
          Interest Rate (r)
        </text>

        {/* Liquidity Preference Curve (Money Demand) */}
        <motion.path
          d={pathFromPoints(lpPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" as const }}
        />
        <text
          x={xScale(80)}
          y={yScale(9)}
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-medium"
        >
          LP (M<tspan fontSize="8" dy="4">d</tspan>)
        </text>

        {/* Liquidity Trap Zone */}
        <motion.rect
          x={xScale(250)}
          y={yScale(2.5)}
          width={xScale(450) - xScale(250)}
          height={yScale(1.5) - yScale(2.5)}
          fill="hsl(var(--cambridge-orange))"
          fillOpacity={0.1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
        <text
          x={xScale(350)}
          y={yScale(1.2)}
          textAnchor="middle"
          fill="hsl(var(--cambridge-orange))"
          className="text-xs"
        >
          Liquidity Trap
        </text>

        {/* Money Supply 1 (vertical line) */}
        <motion.line
          x1={xScale(ms1X)}
          y1={margin.top}
          x2={xScale(ms1X)}
          y2={height - margin.bottom}
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <text
          x={xScale(ms1X)}
          y={margin.top - 10}
          textAnchor="middle"
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs font-medium"
        >
          M<tspan fontSize="8" dy="4">s</tspan><tspan dy="-4">₀</tspan>
        </text>

        {/* Money Supply 2 (shifted) */}
        {showShift && (
          <>
            <motion.line
              x1={xScale(ms2X)}
              y1={margin.top}
              x2={xScale(ms2X)}
              y2={height - margin.bottom}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
            <text
              x={xScale(ms2X)}
              y={margin.top - 10}
              textAnchor="middle"
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-medium"
            >
              M<tspan fontSize="8" dy="4">s</tspan><tspan dy="-4">₁</tspan>
            </text>
          </>
        )}

        {/* Equilibrium point 1 */}
        <motion.circle
          cx={xScale(ms1X)}
          cy={yScale(eq1Y)}
          r={6}
          fill="hsl(var(--cambridge-magenta))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        />
        <text
          x={xScale(ms1X) - 15}
          y={yScale(eq1Y) - 10}
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs font-bold"
        >
          E₀
        </text>

        {/* Dashed line to equilibrium */}
        <motion.line
          x1={margin.left}
          y1={yScale(eq1Y)}
          x2={xScale(ms1X)}
          y2={yScale(eq1Y)}
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={1}
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <text
          x={margin.left - 10}
          y={yScale(eq1Y) + 4}
          textAnchor="end"
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs"
        >
          r₀
        </text>

        {/* Equilibrium point 2 (when shifted) */}
        {showShift && (
          <>
            <motion.circle
              cx={xScale(ms2X)}
              cy={yScale(eq2Y)}
              r={6}
              fill="hsl(var(--cambridge-green))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            />
            <text
              x={xScale(ms2X) + 12}
              y={yScale(eq2Y) - 10}
              fill="hsl(var(--cambridge-green))"
              className="text-xs font-bold"
            >
              E₁
            </text>
            <motion.line
              x1={margin.left}
              y1={yScale(eq2Y)}
              x2={xScale(ms2X)}
              y2={yScale(eq2Y)}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth={1}
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <text
              x={margin.left - 10}
              y={yScale(eq2Y) + 4}
              textAnchor="end"
              fill="hsl(var(--cambridge-green))"
              className="text-xs"
            >
              r₁
            </text>

            {/* Arrow showing rate decrease */}
            <motion.path
              d={`M ${margin.left + 15} ${yScale(eq1Y) + 5} L ${margin.left + 15} ${yScale(eq2Y) - 5}`}
              fill="none"
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth={2}
              markerEnd="url(#arrowLP)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
          </>
        )}

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowLP"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(var(--cambridge-orange))"
            />
          </marker>
        </defs>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))' }} />
          <span className="text-muted-foreground">Liquidity Preference (Mᵈ)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-magenta))' }} />
          <span className="text-muted-foreground">Money Supply (Mˢ)</span>
        </div>
        {showShift && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-green))' }} />
            <span className="text-muted-foreground">Increased Mˢ → Lower r</span>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-4 p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground">
        {showShift ? (
          <p>
            <strong>Effect:</strong> When the central bank increases the money supply (Mˢ₀ → Mˢ₁), 
            there is excess money at the original rate. People buy bonds, pushing up bond prices and 
            reducing the equilibrium interest rate from r₀ to r₁.
          </p>
        ) : (
          <p>
            <strong>Equilibrium:</strong> The interest rate adjusts to equate money demand (LP curve) 
            with money supply. At very low rates, the curve becomes horizontal (liquidity trap) – 
            people hold any additional money as idle balances.
          </p>
        )}
      </div>
    </div>
  );
};

export default LiquidityPreferenceDiagram;
