import { useState } from 'react';
import { motion } from 'framer-motion';

type GoodType = 'normal' | 'inferior' | 'giffen';

const IncomeSubstitutionDiagram = () => {
  const [goodType, setGoodType] = useState<GoodType>('normal');

  const width = 520;
  const height = 380;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const xScale = (x: number) => padding.left + (x / 35) * chartWidth;
  const yScale = (y: number) => padding.top + chartHeight - (y / 20) * chartHeight;

  // Points based on good type (when price of X falls)
  const getPoints = () => {
    switch (goodType) {
      case 'normal':
        return {
          A: { x: 6.4, y: 9.6 },   // Original equilibrium (on BL1)
          B: { x: 15, y: 9 },   // After substitution effect
          C: { x: 20, y: 7 },   // Final equilibrium (both effects positive)
          description: 'Normal Good: Both substitution and income effects are positive. When price falls, quantity demanded increases significantly.',
          seLabel: 'SE (+)',
          ieLabel: 'IE (+)',
        };
      case 'inferior':
        return {
          A: { x: 6.4, y: 9.6 },
          B: { x: 18, y: 8 },   // After substitution effect
          C: { x: 14, y: 10 },  // Final (income effect negative but smaller)
          description: 'Inferior Good: Substitution effect is positive, income effect is negative but smaller. Net effect is still positive.',
          seLabel: 'SE (+)',
          ieLabel: 'IE (−)',
        };
      case 'giffen':
        return {
          A: { x: 8.73, y: 7.27 },
          B: { x: 18, y: 7 },   // After substitution effect
          C: { x: 6, y: 14 },   // Final (income effect negative and larger)
          description: 'Giffen Good: Substitution effect is positive, but income effect is negative and larger. Price fall leads to quantity decrease—violating the law of demand.',
          seLabel: 'SE (+)',
          ieLabel: 'IE (−−)',
        };
    }
  };

  const points = getPoints();

  // Generate curved indifference curve path
  // Vertex sits exactly at (centerX, centerY) so labelled points always lie on the curve.
  // leftSpan/rightSpan let the curve be widened asymmetrically to reach a second labelled point.
  const generateIC = (centerX: number, centerY: number, leftSpan: number, rightSpan: number) => {
    const pathPoints: string[] = [];
    const steps = 24;
    for (let i = 0; i <= steps; i += 1) {
      const s = (i / steps) * 2 - 1; // -1 .. 1
      const span = s < 0 ? leftSpan : rightSpan;
      const x = centerX + s * span;
      const y = centerY + 0.5 * s * s * span;
      pathPoints.push(`${xScale(x)},${yScale(y)}`);
    }
    return `M ${pathPoints.join(' L ')}`;
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-silver-bright">Income & Substitution Effects</h3>
      </div>

      {/* Good Type Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setGoodType('normal')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            goodType === 'normal' 
              ? 'bg-cambridge-green/20 text-green-400 border border-green-400/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Normal Good
        </button>
        <button
          onClick={() => setGoodType('inferior')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            goodType === 'inferior' 
              ? 'bg-cambridge-orange/20 text-orange-400 border border-orange-400/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Inferior Good
        </button>
        <button
          onClick={() => setGoodType('giffen')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            goodType === 'giffen' 
              ? 'bg-destructive/20 text-destructive border border-destructive/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Giffen Good
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid */}
        {[0, 5, 10, 15, 20].map((tick) => (
          <line
            key={`grid-y-${tick}`}
            x1={padding.left}
            y1={yScale(tick)}
            x2={width - padding.right}
            y2={yScale(tick)}
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            strokeDasharray="4,4"
            opacity={0.3}
          />
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
        <text x={width / 2} y={height - 10} textAnchor="middle" className="fill-silver-bright text-sm font-medium">
          Quantity of Good X
        </text>
        <text x={-height / 2 + 20} y={18} textAnchor="middle" transform="rotate(-90)" className="fill-silver-bright text-sm font-medium">
          Quantity of Good Y
        </text>

        {/* Original Budget Line BL1 */}
        <motion.line
          x1={xScale(0)}
          y1={yScale(16)}
          x2={xScale(16)}
          y2={yScale(0)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2"
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Compensated Budget Line BL' (parallel shift for decomposition) */}
        <motion.line
          x1={xScale(0)}
          y1={yScale(13)}
          x2={xScale(26)}
          y2={yScale(0)}
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeDasharray="4,2"
          opacity={0.6}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* New Budget Line BL2 (after price fall) */}
        <motion.line
          x1={xScale(0)}
          y1={yScale(16)}
          x2={xScale(32)}
          y2={yScale(0)}
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Indifference Curves */}
        <motion.path
          key={`ic1-${goodType}`}
          d={generateIC(points.A.x, points.A.y, points.A.x, Math.abs(points.B.x - points.A.x) + 3)}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.path
          key={`ic2-${goodType}`}
          d={generateIC(points.C.x, points.C.y, Math.abs(points.C.x - points.B.x) + 3, 10)}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Points A, B, C */}
        <motion.g
          key={`points-${goodType}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {/* Point A */}
          <circle cx={xScale(points.A.x)} cy={yScale(points.A.y)} r="7" fill="hsl(var(--muted-foreground))" stroke="white" strokeWidth="2" />
          <text x={xScale(points.A.x) - 15} y={yScale(points.A.y) - 12} className="fill-silver-bright text-sm font-bold">A</text>

          {/* Point B (decomposition point) */}
          <circle cx={xScale(points.B.x)} cy={yScale(points.B.y)} r="7" fill="hsl(var(--accent))" stroke="white" strokeWidth="2" />
          <text x={xScale(points.B.x) + 10} y={yScale(points.B.y) - 8} className="fill-accent text-sm font-bold">B</text>

          {/* Point C */}
          <circle cx={xScale(points.C.x)} cy={yScale(points.C.y)} r="7" fill="hsl(var(--primary))" stroke="white" strokeWidth="2" />
          <text x={xScale(points.C.x) + 10} y={yScale(points.C.y) - 8} className="fill-primary text-sm font-bold">C</text>
        </motion.g>

        {/* Arrows showing effects */}
        <motion.g
          key={`arrows-${goodType}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* Substitution Effect Arrow (A to B projected on X-axis) */}
          <defs>
            <marker id="arrowhead-se" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--accent))" />
            </marker>
            <marker id="arrowhead-ie" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          
          {/* SE Arrow */}
          <line
            x1={xScale(points.A.x)}
            y1={height - padding.bottom + 25}
            x2={xScale(points.B.x) - 8}
            y2={height - padding.bottom + 25}
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            markerEnd="url(#arrowhead-se)"
          />
          <text x={xScale((points.A.x + points.B.x) / 2)} y={height - padding.bottom + 40} textAnchor="middle" className="fill-accent text-xs font-medium">
            {points.seLabel}
          </text>

          {/* IE Arrow */}
          <line
            x1={xScale(points.B.x)}
            y1={height - padding.bottom + 25}
            x2={xScale(points.C.x) + (points.C.x > points.B.x ? -8 : 8)}
            y2={height - padding.bottom + 25}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            markerEnd="url(#arrowhead-ie)"
          />
          <text x={xScale((points.B.x + points.C.x) / 2)} y={height - padding.bottom + 40} textAnchor="middle" className="fill-primary text-xs font-medium">
            {points.ieLabel}
          </text>
        </motion.g>

        {/* Legend */}
        <g transform={`translate(${width - padding.right - 100}, ${padding.top})`}>
          <rect x="0" y="0" width="12" height="3" fill="hsl(var(--muted-foreground))" />
          <text x="18" y="5" className="fill-muted-foreground text-xs">BL₁ (Original)</text>
          
          <rect x="0" y="14" width="12" height="3" fill="hsl(var(--accent))" />
          <text x="18" y="19" className="fill-accent text-xs">BL' (Compensated)</text>
          
          <rect x="0" y="28" width="12" height="3" fill="hsl(var(--primary))" />
          <text x="18" y="33" className="fill-primary text-xs">BL₂ (New)</text>
        </g>
      </svg>

      {/* Description */}
      <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
            goodType === 'normal' ? 'bg-green-500/20 text-green-400' :
            goodType === 'inferior' ? 'bg-orange-500/20 text-orange-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {goodType === 'normal' ? 'Normal Good' : goodType === 'inferior' ? 'Inferior Good' : 'Giffen Good'}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{points.description}</p>
        
        <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
          <div className="p-2 rounded bg-accent/10 border border-accent/20">
            <span className="text-accent font-medium">Substitution Effect (A→B):</span>
            <p className="text-muted-foreground mt-1">Movement along the same IC due to relative price change. Always positive for a price fall.</p>
          </div>
          <div className="p-2 rounded bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">Income Effect (B→C):</span>
            <p className="text-muted-foreground mt-1">Movement to higher IC due to increased real income. Direction depends on good type.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSubstitutionDiagram;
