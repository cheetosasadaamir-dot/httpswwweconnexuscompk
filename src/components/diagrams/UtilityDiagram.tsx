import { useState } from 'react';
import { motion } from 'framer-motion';

interface UtilityDiagramProps {
  showMarginal?: boolean;
}

const UtilityDiagram = ({ showMarginal = true }: UtilityDiagramProps) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [showTU, setShowTU] = useState(true);
  const [showMU, setShowMU] = useState(showMarginal);

  // Ice Cream Bars data from the PDF
  const utilityData = [
    { quantity: 1, totalUtility: 20, marginalUtility: 20 },
    { quantity: 2, totalUtility: 35, marginalUtility: 15 },
    { quantity: 3, totalUtility: 45, marginalUtility: 10 },
    { quantity: 4, totalUtility: 50, marginalUtility: 5 },
    { quantity: 5, totalUtility: 50, marginalUtility: 0 },
    { quantity: 6, totalUtility: 45, marginalUtility: -5 },
  ];

  const width = 500;
  const height = 320;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = (q: number) => padding.left + ((q - 0.5) / 6.5) * chartWidth;
  const yScaleTU = (tu: number) => padding.top + chartHeight - (tu / 60) * chartHeight;
  const yScaleMU = (mu: number) => padding.top + chartHeight - ((mu + 10) / 35) * chartHeight;

  // Generate path for TU curve
  const tuPath = utilityData.map((d, i) => {
    const x = xScale(d.quantity);
    const y = yScaleTU(d.totalUtility);
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  // Generate path for MU curve
  const muPath = utilityData.map((d, i) => {
    const x = xScale(d.quantity);
    const y = yScaleMU(d.marginalUtility);
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-silver-bright">Total Utility & Marginal Utility Curves</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setShowTU(!showTU)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              showTU ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted/30 text-muted-foreground'
            }`}
          >
            Total Utility
          </button>
          <button
            onClick={() => setShowMU(!showMU)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              showMU ? 'bg-secondary/20 text-secondary border border-secondary/30' : 'bg-muted/30 text-muted-foreground'
            }`}
          >
            Marginal Utility
          </button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid lines */}
        {[0, 10, 20, 30, 40, 50, 60].map((tick) => (
          <g key={`grid-${tick}`}>
            <line
              x1={padding.left}
              y1={yScaleTU(tick)}
              x2={width - padding.right}
              y2={yScaleTU(tick)}
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity={0.4}
            />
            <text
              x={padding.left - 10}
              y={yScaleTU(tick)}
              textAnchor="end"
              alignmentBaseline="middle"
              className="fill-muted-foreground text-xs"
            >
              {tick}
            </text>
          </g>
        ))}

        {/* X axis */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="hsl(var(--silver))"
          strokeWidth="1.5"
        />

        {/* Y axis */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="hsl(var(--silver))"
          strokeWidth="1.5"
        />

        {/* Zero line for MU */}
        {showMU && (
          <line
            x1={padding.left}
            y1={yScaleMU(0)}
            x2={width - padding.right}
            y2={yScaleMU(0)}
            stroke="hsl(var(--destructive))"
            strokeWidth="1"
            strokeDasharray="6,3"
            opacity={0.5}
          />
        )}

        {/* X axis labels */}
        {utilityData.map((d) => (
          <text
            key={`x-${d.quantity}`}
            x={xScale(d.quantity)}
            y={height - padding.bottom + 20}
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            {d.quantity}
          </text>
        ))}

        {/* Axis titles */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          className="fill-silver-bright text-sm font-medium"
        >
          Quantity of Ice Cream Bars
        </text>
        <text
          x={-height / 2 + 20}
          y={18}
          textAnchor="middle"
          transform="rotate(-90)"
          className="fill-silver-bright text-sm font-medium"
        >
          Utility (Utils)
        </text>

        {/* TU Curve */}
        {showTU && (
          <motion.path
            d={tuPath}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}

        {/* MU Curve */}
        {showMU && (
          <motion.path
            d={muPath}
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
        )}

        {/* Data points TU */}
        {showTU && utilityData.map((d, i) => (
          <motion.g
            key={`tu-point-${i}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * i + 0.5 }}
          >
            <circle
              cx={xScale(d.quantity)}
              cy={yScaleTU(d.totalUtility)}
              r={hoveredPoint === i ? 8 : 6}
              fill="hsl(var(--primary))"
              stroke="hsl(var(--background))"
              strokeWidth="2"
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
              className="cursor-pointer transition-all duration-200"
            />
          </motion.g>
        ))}

        {/* Data points MU */}
        {showMU && utilityData.map((d, i) => (
          <motion.g
            key={`mu-point-${i}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * i + 0.8 }}
          >
            <circle
              cx={xScale(d.quantity)}
              cy={yScaleMU(d.marginalUtility)}
              r={hoveredPoint === i ? 8 : 6}
              fill="hsl(var(--secondary))"
              stroke="hsl(var(--background))"
              strokeWidth="2"
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
              className="cursor-pointer transition-all duration-200"
            />
          </motion.g>
        ))}

        {/* Annotations */}
        {showTU && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <text
              x={xScale(4.5)}
              y={yScaleTU(52)}
              className="fill-primary text-xs font-medium"
            >
              Maximum TU
            </text>
            <line
              x1={xScale(4.5)}
              y1={yScaleTU(50) + 2}
              x2={xScale(4.5)}
              y2={yScaleTU(50) + 12}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              markerEnd="url(#arrow)"
            />
          </motion.g>
        )}

        {showMU && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <text
              x={xScale(5.3)}
              y={yScaleMU(3)}
              className="fill-secondary text-xs font-medium"
            >
              Zero MU
            </text>
          </motion.g>
        )}

        {/* Legend */}
        <g transform={`translate(${width - padding.right - 100}, ${padding.top})`}>
          {showTU && (
            <g>
              <rect x="0" y="0" width="12" height="12" rx="2" fill="hsl(var(--primary))" />
              <text x="18" y="10" className="fill-silver-bright text-xs">TU Curve</text>
            </g>
          )}
          {showMU && (
            <g transform="translate(0, 18)">
              <rect x="0" y="0" width="12" height="12" rx="2" fill="hsl(var(--secondary))" />
              <text x="18" y="10" className="fill-silver-bright text-xs">MU Curve</text>
            </g>
          )}
        </g>

        {/* Tooltip */}
        {hoveredPoint !== null && (
          <g transform={`translate(${xScale(utilityData[hoveredPoint].quantity) + 10}, ${yScaleTU(utilityData[hoveredPoint].totalUtility) - 40})`}>
            <rect
              x="-5"
              y="-5"
              width="100"
              height="45"
              rx="4"
              fill="hsl(var(--popover))"
              stroke="hsl(var(--border))"
            />
            <text x="5" y="10" className="fill-silver-bright text-xs font-medium">
              Q: {utilityData[hoveredPoint].quantity} bars
            </text>
            <text x="5" y="22" className="fill-primary text-xs">
              TU: {utilityData[hoveredPoint].totalUtility} utils
            </text>
            <text x="5" y="34" className="fill-secondary text-xs">
              MU: {utilityData[hoveredPoint].marginalUtility} utils
            </text>
          </g>
        )}
      </svg>

      {/* Data Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-silver/20">
              <th className="text-left py-2 px-3 text-muted-foreground font-medium">Ice Cream Bars</th>
              <th className="text-center py-2 px-3 text-primary font-medium">Total Utility (TU)</th>
              <th className="text-center py-2 px-3 text-secondary font-medium">Marginal Utility (MU)</th>
            </tr>
          </thead>
          <tbody>
            {utilityData.map((d, i) => (
              <tr
                key={i}
                className={`border-b border-silver/10 transition-colors ${
                  hoveredPoint === i ? 'bg-primary/10' : 'hover:bg-muted/30'
                }`}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <td className="py-2 px-3 text-silver-bright">{d.quantity}</td>
                <td className="py-2 px-3 text-center text-primary">{d.totalUtility}</td>
                <td className="py-2 px-3 text-center text-secondary">{d.marginalUtility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UtilityDiagram;
