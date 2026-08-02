import { useState } from 'react';
import { motion } from 'framer-motion';

type ShiftType = 'none' | 'income-increase' | 'income-decrease' | 'price-x-increase' | 'price-x-decrease';

const BudgetIndifferenceDiagram = () => {
  const [shiftType, setShiftType] = useState<ShiftType>('none');
  const [showIC, setShowIC] = useState(true);

  const width = 520;
  const height = 380;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = (x: number) => padding.left + (x / 45) * chartWidth;
  const yScale = (y: number) => padding.top + chartHeight - (y / 15) * chartHeight;

  // Budget line endpoints based on shift type
  const getBudgetLine = () => {
    switch (shiftType) {
      case 'income-increase':
        return { y: 20, x: 40 }; // Parallel outward shift
      case 'income-decrease':
        return { y: 5, x: 10 }; // Parallel inward shift
      case 'price-x-increase':
        return { y: 10, x: 10 }; // Pivotal inward (X more expensive)
      case 'price-x-decrease':
        return { y: 10, x: 40 }; // Pivotal outward (X cheaper)
      default:
        return { y: 10, x: 20 }; // Original: Income=$100, Px=$5, Py=$10
    }
  };

  const budgetLine = getBudgetLine();

  // Indifference curve points (convex curve)
  const generateIC = (level: number) => {
    const points: { x: number; y: number }[] = [];
    for (let x = 2; x <= 35; x += 0.5) {
      const y = (level * 8) / (x * 0.5 + 1) + level * 0.5;
      if (y > 0.5 && y < 14) {
        points.push({ x, y });
      }
    }
    return points;
  };

  const ic1 = generateIC(1.5);
  const ic2 = generateIC(2.86);
  const ic3 = generateIC(3.5);

  const createCurvePath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return '';
    return points.map((p, i) => 
      i === 0 ? `M ${xScale(p.x)} ${yScale(p.y)}` : `L ${xScale(p.x)} ${yScale(p.y)}`
    ).join(' ');
  };

  // Optimal point (tangency)
  const optimalPoint = { x: 7.57, y: 6.22 };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-silver-bright">Budget Line & Indifference Curves</h3>
        <button
          onClick={() => setShowIC(!showIC)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            showIC ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-muted/30 text-muted-foreground'
          }`}
        >
          Indifference Curves
        </button>
      </div>

      {/* Shift Controls */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setShiftType('none')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            shiftType === 'none' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted/30 text-muted-foreground'
          }`}
        >
          Original
        </button>
        <button
          onClick={() => setShiftType('income-increase')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            shiftType === 'income-increase' ? 'bg-cambridge-green/20 text-green-400 border border-green-400/30' : 'bg-muted/30 text-muted-foreground'
          }`}
        >
          Income ↑
        </button>
        <button
          onClick={() => setShiftType('income-decrease')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            shiftType === 'income-decrease' ? 'bg-destructive/20 text-destructive border border-destructive/30' : 'bg-muted/30 text-muted-foreground'
          }`}
        >
          Income ↓
        </button>
        <button
          onClick={() => setShiftType('price-x-increase')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            shiftType === 'price-x-increase' ? 'bg-cambridge-orange/20 text-orange-400 border border-orange-400/30' : 'bg-muted/30 text-muted-foreground'
          }`}
        >
          Pₓ ↑
        </button>
        <button
          onClick={() => setShiftType('price-x-decrease')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            shiftType === 'price-x-decrease' ? 'bg-cambridge-cyan/20 text-cyan-400 border border-cyan-400/30' : 'bg-muted/30 text-muted-foreground'
          }`}
        >
          Pₓ ↓
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid lines */}
        {[0, 5, 10, 15].map((tick) => (
          <g key={`grid-y-${tick}`}>
            <line
              x1={padding.left}
              y1={yScale(tick)}
              x2={width - padding.right}
              y2={yScale(tick)}
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity={0.3}
            />
            <text
              x={padding.left - 10}
              y={yScale(tick)}
              textAnchor="end"
              alignmentBaseline="middle"
              className="fill-muted-foreground text-xs"
            >
              {tick}
            </text>
          </g>
        ))}

        {[0, 10, 20, 30, 40].map((tick) => (
          <g key={`grid-x-${tick}`}>
            <line
              x1={xScale(tick)}
              y1={padding.top}
              x2={xScale(tick)}
              y2={height - padding.bottom}
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity={0.3}
            />
            <text
              x={xScale(tick)}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              className="fill-muted-foreground text-xs"
            >
              {tick}
            </text>
          </g>
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="hsl(var(--silver))"
          strokeWidth="1.5"
        />
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="hsl(var(--silver))"
          strokeWidth="1.5"
        />

        {/* Axis labels */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          className="fill-silver-bright text-sm font-medium"
        >
          Quantity of Good X
        </text>
        <text
          x={-height / 2 + 20}
          y={18}
          textAnchor="middle"
          transform="rotate(-90)"
          className="fill-silver-bright text-sm font-medium"
        >
          Quantity of Good Y
        </text>

        {/* Original Budget Line (faded when shifted) */}
        {shiftType !== 'none' && (
          <motion.line
            x1={xScale(0)}
            y1={yScale(10)}
            x2={xScale(20)}
            y2={yScale(0)}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeDasharray="6,4"
            opacity={0.4}
          />
        )}

        {/* Budget Line */}
        <motion.line
          key={shiftType}
          x1={xScale(0)}
          y1={yScale(budgetLine.y)}
          x2={xScale(budgetLine.x)}
          y2={yScale(0)}
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Indifference Curves */}
        {showIC && (
          <>
            <motion.path
              d={createCurvePath(ic1)}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              opacity={0.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.path
              d={createCurvePath(ic2)}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.path
              d={createCurvePath(ic3)}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              opacity={0.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            {/* IC Labels */}
            <text x={xScale(30)} y={yScale(2.5)} className="fill-accent text-xs">IC₁</text>
            <text x={xScale(32)} y={yScale(4)} className="fill-accent text-xs font-medium">IC₂</text>
            <text x={xScale(34)} y={yScale(5.5)} className="fill-accent text-xs">IC₃</text>
          </>
        )}

        {/* Optimal Point */}
        {shiftType === 'none' && (
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <circle
              cx={xScale(optimalPoint.x)}
              cy={yScale(optimalPoint.y)}
              r="8"
              fill="hsl(var(--cambridge-green))"
              stroke="hsl(var(--background))"
              strokeWidth="2"
            />
            <text
              x={xScale(optimalPoint.x) + 12}
              y={yScale(optimalPoint.y) - 8}
              className="fill-green-400 text-xs font-medium"
            >
              Optimal Bundle (E)
            </text>
          </motion.g>
        )}

        {/* Budget Line Label */}
        <text
          x={xScale(budgetLine.x / 2 + 2)}
          y={yScale(budgetLine.y / 2) - 12}
          className="fill-primary text-xs font-medium"
        >
          Budget Line
        </text>

        {/* Legend */}
        <g transform={`translate(${width - padding.right - 120}, ${padding.top})`}>
          <rect x="0" y="0" width="12" height="3" fill="hsl(var(--primary))" />
          <text x="18" y="6" className="fill-silver-bright text-xs">Budget Line</text>
          {showIC && (
            <g transform="translate(0, 16)">
              <path d="M 0 6 Q 6 0 12 6" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
              <text x="18" y="10" className="fill-silver-bright text-xs">Indifference Curve</text>
            </g>
          )}
        </g>
      </svg>

      {/* Explanation Box */}
      <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border">
        <h4 className="text-sm font-semibold text-silver-bright mb-2">
          {shiftType === 'none' && 'Consumer Equilibrium'}
          {shiftType === 'income-increase' && 'Income Increase → Parallel Outward Shift'}
          {shiftType === 'income-decrease' && 'Income Decrease → Parallel Inward Shift'}
          {shiftType === 'price-x-increase' && 'Price of X Increases → Pivotal Inward Shift'}
          {shiftType === 'price-x-decrease' && 'Price of X Decreases → Pivotal Outward Shift'}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {shiftType === 'none' && 
            'The consumer maximizes utility at point E, where the budget line is tangent to the highest attainable indifference curve (IC₂). At this point, the marginal rate of substitution equals the price ratio: MRS = Pₓ/Pᵧ.'}
          {shiftType === 'income-increase' && 
            'When income rises (e.g., from $100 to $200), the budget line shifts parallel outward. The consumer can now afford more of both goods, reaching a higher indifference curve.'}
          {shiftType === 'income-decrease' && 
            'When income falls (e.g., from $100 to $50), the budget line shifts parallel inward. The consumer is constrained to a lower indifference curve and reduced consumption.'}
          {shiftType === 'price-x-increase' && 
            'When the price of Good X rises, the X-intercept moves inward while the Y-intercept remains fixed. The budget line pivots, reducing affordable quantities of X.'}
          {shiftType === 'price-x-decrease' && 
            'When the price of Good X falls, the X-intercept moves outward while the Y-intercept remains fixed. The budget line pivots, increasing affordable quantities of X.'}
        </p>
      </div>
    </div>
  );
};

export default BudgetIndifferenceDiagram;
