import { useState } from 'react';
import { motion } from 'framer-motion';

type EfficiencyType = 'productive' | 'allocative' | 'dynamic' | 'x-efficiency';

const EfficiencyDiagram = () => {
  const [efficiencyType, setEfficiencyType] = useState<EfficiencyType>('productive');

  const width = 520;
  const height = 380;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const xScale = (x: number) => padding.left + (x / 110) * chartWidth;
  const yScale = (y: number) => padding.top + chartHeight - (y / 110) * chartHeight;

  // PPC curve points
  const ppcPoints: { x: number; y: number }[] = [];
  for (let angle = 0; angle <= Math.PI / 2; angle += 0.05) {
    ppcPoints.push({
      x: 100 * Math.cos(angle),
      y: 100 * Math.sin(angle),
    });
  }

  const ppcPath = ppcPoints.map((p, i) => 
    i === 0 ? `M ${xScale(p.x)} ${yScale(p.y)}` : `L ${xScale(p.x)} ${yScale(p.y)}`
  ).join(' ');

  // ATC curve for firm-level diagrams
  const generateATCCurve = () => {
    const points: { x: number; y: number }[] = [];
    for (let q = 10; q <= 90; q += 2) {
      const atc = 30 + 500 / q + 0.008 * Math.pow(q - 50, 2);
      points.push({ x: q, y: atc });
    }
    return points;
  };

  const atcPoints = generateATCCurve();
  const atcPath = atcPoints.map((p, i) => 
    i === 0 ? `M ${xScale(p.x)} ${yScale(p.y)}` : `L ${xScale(p.x)} ${yScale(p.y)}`
  ).join(' ');

  // MC curve
  const generateMCCurve = () => {
    const points: { x: number; y: number }[] = [];
    for (let q = 10; q <= 90; q += 2) {
      const mc = 25 + 0.02 * Math.pow(q - 30, 2);
      points.push({ x: q, y: mc });
    }
    return points;
  };

  const mcPoints = generateMCCurve();
  const mcPath = mcPoints.map((p, i) => 
    i === 0 ? `M ${xScale(p.x)} ${yScale(p.y)}` : `L ${xScale(p.x)} ${yScale(p.y)}`
  ).join(' ');

  const getContent = () => {
    switch (efficiencyType) {
      case 'productive':
        return {
          title: 'Productive Efficiency',
          description: 'Productive efficiency occurs when a firm produces at the minimum point of its average total cost curve, achieving both technical efficiency (optimal input combination) and cost efficiency (lowest possible ATC). At the economy level, any point on the Production Possibility Curve (PPC) represents productive efficiency, as all resources are fully utilized to produce the maximum possible output combination.',
          formula: 'Firm Level: Produce at min ATC | Economy Level: On the PPC',
        };
      case 'allocative':
        return {
          title: 'Allocative Efficiency',
          description: 'Allocative efficiency is achieved when resources are distributed in a way that maximizes total welfare. At the firm level, this occurs where Price equals Marginal Cost (P = MC), meaning the value consumers place on the last unit equals the cost of producing it. At the market level, this is where Marginal Social Benefit equals Marginal Social Cost (MSB = MSC), maximizing total economic welfare.',
          formula: 'P = MC (Firm) | MSB = MSC (Market)',
        };
      case 'dynamic':
        return {
          title: 'Dynamic Efficiency',
          description: 'Dynamic efficiency refers to improvements in productive and allocative efficiency over time through innovation, research and development, and technological progress. It measures how well an economy adapts and improves its production methods, product quality, and resource allocation as circumstances change. Firms that invest in R&D and process improvements exhibit dynamic efficiency.',
          formula: 'Efficiency improvements over time through innovation and R&D',
        };
      case 'x-efficiency':
        return {
          title: 'X-Efficiency',
          description: 'X-efficiency (or X-inefficiency) refers to the degree to which firms fail to minimize costs even at a given output level. This often occurs in monopolies or firms without competitive pressure, where organizational slack, poor management, or lack of motivation leads to operating above the minimum ATC curve. The gap between actual costs and minimum possible costs represents X-inefficiency.',
          formula: 'X-inefficiency = Actual Cost − Minimum Possible Cost',
        };
    }
  };

  const content = getContent();

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-silver-bright">Types of Economic Efficiency</h3>
      </div>

      {/* Efficiency Type Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(['productive', 'allocative', 'dynamic', 'x-efficiency'] as EfficiencyType[]).map((type) => (
          <button
            key={type}
            onClick={() => setEfficiencyType(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
              efficiencyType === type 
                ? 'bg-primary/20 text-primary border border-primary/30' 
                : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
            }`}
          >
            {type.replace('-', ' ')}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
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

        {efficiencyType === 'productive' && (
          <>
            {/* PPC Curve */}
            <motion.path
              d={ppcPath}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Efficient point on PPC */}
            <motion.circle
              cx={xScale(60)}
              cy={yScale(80)}
              r="8"
              fill="hsl(var(--cambridge-green))"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            />
            <text x={xScale(60) + 12} y={yScale(80) - 5} className="fill-green-400 text-xs font-medium">
              Efficient (On PPC)
            </text>

            {/* Inefficient point inside PPC */}
            <motion.circle
              cx={xScale(40)}
              cy={yScale(40)}
              r="8"
              fill="hsl(var(--destructive))"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
            <text x={xScale(40) + 12} y={yScale(40) - 5} className="fill-red-400 text-xs font-medium">
              X (Inefficient)
            </text>

            {/* Labels */}
            <text x={width / 2} y={height - 10} textAnchor="middle" className="fill-silver-bright text-sm font-medium">
              Consumer Goods
            </text>
            <text x={-height / 2 + 20} y={18} textAnchor="middle" transform="rotate(-90)" className="fill-silver-bright text-sm font-medium">
              Capital Goods
            </text>
            <text x={xScale(30)} y={yScale(95)} className="fill-primary text-sm font-semibold">PPC</text>
          </>
        )}

        {(efficiencyType === 'allocative' || efficiencyType === 'x-efficiency') && (
          <>
            {/* ATC Curve */}
            <motion.path
              d={atcPath}
              fill="none"
              stroke="hsl(var(--secondary))"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            {/* MC Curve */}
            <motion.path
              d={mcPath}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Price line for allocative efficiency */}
            {efficiencyType === 'allocative' && (
              <>
                <motion.line
                  x1={padding.left}
                  y1={yScale(45)}
                  x2={width - padding.right}
                  y2={yScale(45)}
                  stroke="hsl(var(--cambridge-green))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <text x={width - padding.right - 40} y={yScale(45) - 8} className="fill-green-400 text-xs font-medium">
                  P = AR = MR
                </text>

                {/* P = MC point */}
                <motion.circle
                  cx={xScale(60)}
                  cy={yScale(45)}
                  r="8"
                  fill="hsl(var(--cambridge-green))"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                />
                <text x={xScale(60) + 12} y={yScale(45) - 8} className="fill-green-400 text-xs font-medium">
                  P = MC
                </text>
              </>
            )}

            {/* X-inefficiency illustration */}
            {efficiencyType === 'x-efficiency' && (
              <>
                {/* Higher ATC curve showing X-inefficiency */}
                <motion.path
                  d={atcPoints.map((p, i) => 
                    i === 0 ? `M ${xScale(p.x)} ${yScale(p.y + 15)}` : `L ${xScale(p.x)} ${yScale(p.y + 15)}`
                  ).join(' ')}
                  fill="none"
                  stroke="hsl(var(--destructive))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* X-inefficiency gap */}
                <motion.line
                  x1={xScale(50)}
                  y1={yScale(45)}
                  x2={xScale(50)}
                  y2={yScale(60)}
                  stroke="hsl(var(--destructive))"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2 }}
                />
                <text x={xScale(50) + 8} y={yScale(52)} className="fill-red-400 text-xs font-medium">
                  X-inefficiency
                </text>

                <text x={xScale(80)} y={yScale(55)} className="fill-red-400 text-xs">Actual ATC</text>
                <text x={xScale(80)} y={yScale(38)} className="fill-secondary text-xs">Min ATC</text>
              </>
            )}

            {/* Curve labels */}
            <text x={xScale(85)} y={yScale(50)} className="fill-primary text-xs font-medium">MC</text>
            <text x={xScale(85)} y={yScale(35)} className="fill-secondary text-xs font-medium">ATC</text>

            {/* Axis labels */}
            <text x={width / 2} y={height - 10} textAnchor="middle" className="fill-silver-bright text-sm font-medium">
              Quantity (Q)
            </text>
            <text x={-height / 2 + 20} y={18} textAnchor="middle" transform="rotate(-90)" className="fill-silver-bright text-sm font-medium">
              Cost / Price ($)
            </text>
          </>
        )}

        {efficiencyType === 'dynamic' && (
          <>
            {/* Original PPC */}
            <motion.path
              d={ppcPath}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="2"
              strokeDasharray="6,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Shifted PPC (outward) */}
            <motion.path
              d={ppcPoints.map((p, i) => {
                const newX = p.x * 1.25;
                const newY = p.y * 1.1;
                return i === 0 ? `M ${xScale(newX)} ${yScale(newY)}` : `L ${xScale(newX)} ${yScale(newY)}`;
              }).join(' ')}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Arrow showing shift */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <defs>
                <marker id="arrow-dynamic" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--cambridge-green))" />
                </marker>
              </defs>
              <line
                x1={xScale(50)}
                y1={yScale(60)}
                x2={xScale(70)}
                y2={yScale(72)}
                stroke="hsl(var(--cambridge-green))"
                strokeWidth="2"
                markerEnd="url(#arrow-dynamic)"
              />
              <text x={xScale(60)} y={yScale(65) - 8} className="fill-green-400 text-xs font-medium">
                Innovation & R&D
              </text>
            </motion.g>

            <text x={xScale(30)} y={yScale(85)} className="fill-muted-foreground text-xs">PPC₁</text>
            <text x={xScale(45)} y={yScale(100)} className="fill-primary text-sm font-semibold">PPC₂</text>

            <text x={width / 2} y={height - 10} textAnchor="middle" className="fill-silver-bright text-sm font-medium">
              Consumer Goods
            </text>
            <text x={-height / 2 + 20} y={18} textAnchor="middle" transform="rotate(-90)" className="fill-silver-bright text-sm font-medium">
              Capital Goods
            </text>
          </>
        )}
      </svg>

      {/* Description */}
      <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border">
        <h4 className="text-sm font-semibold text-silver-bright mb-2">{content.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{content.description}</p>
        <div className="p-2 rounded bg-primary/10 border border-primary/20 inline-block">
          <code className="text-xs text-primary font-mono">{content.formula}</code>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyDiagram;
