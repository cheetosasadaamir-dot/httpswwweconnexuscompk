import { motion } from 'framer-motion';
import { useState } from 'react';

interface MultiplierDiagramProps {
  title?: string;
  sectors?: 2 | 3 | 4;
}

const MultiplierDiagram = ({ 
  title = "The Multiplier Effect",
  sectors = 2
}: MultiplierDiagramProps) => {
  const [step, setStep] = useState(0);
  const maxSteps = 6;

  // Multiplier calculation based on sectors
  const getMPC = () => {
    switch (sectors) {
      case 2: return 0.8; // Only MPS
      case 3: return 0.72; // MPC after tax (0.8 × 0.9)
      case 4: return 0.47; // After tax and imports
      default: return 0.8;
    }
  };

  const getMultiplier = () => {
    switch (sectors) {
      case 2: return 5; // 1/(1-0.8) = 5
      case 3: return 3.57; // 1/(0.18+0.1) ≈ 3.57
      case 4: return 1.89; // 1/(0.18+0.1+0.25) ≈ 1.89
      default: return 5;
    }
  };

  const mpc = getMPC();
  const multiplier = getMultiplier();
  const initialInjection = 100;

  // Calculate rounds of spending
  const rounds = Array.from({ length: 8 }, (_, i) => ({
    round: i + 1,
    spending: initialInjection * Math.pow(mpc, i),
    cumulative: initialInjection * (1 - Math.pow(mpc, i + 1)) / (1 - mpc)
  }));

  const width = 500;
  const height = 300;
  const margin = { top: 40, right: 100, bottom: 50, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxY = initialInjection * multiplier * 1.1;
  const xScale = (round: number) => margin.left + ((round - 1) / 7) * chartWidth;
  const yScale = (val: number) => height - margin.bottom - (val / maxY) * chartHeight;

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-lg text-silver-bright">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {sectors}-Sector Economy | k = {multiplier.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted disabled:opacity-50 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep(Math.min(maxSteps, step + 1))}
            disabled={step === maxSteps}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cambridge-cyan/20 text-cambridge-cyan hover:bg-cambridge-cyan/30 disabled:opacity-50 transition-colors"
          >
            Next Round →
          </button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((round) => (
          <line
            key={round}
            x1={xScale(round)}
            y1={margin.top}
            x2={xScale(round)}
            y2={height - margin.bottom}
            stroke="hsl(var(--muted-foreground))"
            strokeOpacity={0.1}
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
          x={(margin.left + width - margin.right) / 2}
          y={height - 10}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
        >
          Rounds of Spending
        </text>
        <text
          x={15}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 15, ${height / 2})`}
        >
          $ (millions)
        </text>

        {/* Final equilibrium line */}
        <motion.line
          x1={margin.left}
          y1={yScale(initialInjection * multiplier)}
          x2={width - margin.right}
          y2={yScale(initialInjection * multiplier)}
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={2}
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" as const }}
        />
        <text
          x={width - margin.right + 5}
          y={yScale(initialInjection * multiplier)}
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs"
          dominantBaseline="middle"
        >
          ΔY = ${(initialInjection * multiplier).toFixed(0)}m
        </text>

        {/* Cumulative spending curve */}
        {rounds.slice(0, step + 1).map((round, i) => (
          <motion.g key={i}>
            {/* Bar for each round's spending */}
            <motion.rect
              x={xScale(round.round) - 12}
              y={yScale(round.spending)}
              width={24}
              height={yScale(0) - yScale(round.spending)}
              fill="hsl(var(--cambridge-cyan))"
              fillOpacity={0.6}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              style={{ transformOrigin: 'bottom' }}
            />
            
            {/* Spending value */}
            <motion.text
              x={xScale(round.round)}
              y={yScale(round.spending) - 8}
              textAnchor="middle"
              fill="hsl(var(--cambridge-cyan))"
              className="text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
            >
              ${round.spending.toFixed(0)}
            </motion.text>

            {/* Round number */}
            <text
              x={xScale(round.round)}
              y={height - margin.bottom + 20}
              textAnchor="middle"
              fill="hsl(var(--muted-foreground))"
              className="text-xs"
            >
              R{round.round}
            </text>
          </motion.g>
        ))}

        {/* Cumulative line */}
        {step > 0 && (
          <motion.path
            d={rounds.slice(0, step + 1).map((r, i) => 
              `${i === 0 ? 'M' : 'L'} ${xScale(r.round)} ${yScale(r.cumulative)}`
            ).join(' ')}
            fill="none"
            stroke="hsl(var(--cambridge-orange))"
            strokeWidth={3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" as const }}
          />
        )}

        {/* Cumulative points */}
        {rounds.slice(0, step + 1).map((round, i) => (
          <motion.circle
            key={`cum-${i}`}
            cx={xScale(round.round)}
            cy={yScale(round.cumulative)}
            r={4}
            fill="hsl(var(--cambridge-orange))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          />
        ))}
      </svg>

      {/* Info panel */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 bg-muted/30 rounded-lg">
          <p className="text-xs font-medium text-silver-bright mb-2">Round {step + 1} Details:</p>
          {step < rounds.length && (
            <div className="space-y-1 text-xs text-muted-foreground font-mono">
              <p>Spending: ${rounds[step].spending.toFixed(2)}m</p>
              <p>Cumulative: ${rounds[step].cumulative.toFixed(2)}m</p>
              <p>Leaked: ${(rounds[step].spending * (1 - mpc)).toFixed(2)}m</p>
            </div>
          )}
        </div>
        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-xs font-medium text-silver-bright mb-2">Multiplier Formula:</p>
          <div className="space-y-1 text-xs font-mono">
            {sectors === 2 && <p>k = 1/(1-MPC) = 1/{(1-mpc).toFixed(1)} = {multiplier}</p>}
            {sectors === 3 && <p>k = 1/(MPS+MRT) = {multiplier.toFixed(2)}</p>}
            {sectors === 4 && <p>k = 1/(MPS+MRT+MPM) = {multiplier.toFixed(2)}</p>}
            <p className="text-cambridge-magenta mt-2">ΔY = k × ΔI = {multiplier.toFixed(2)} × ${initialInjection}m</p>
            <p className="text-cambridge-magenta font-bold">= ${(multiplier * initialInjection).toFixed(0)}m</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 rounded" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))', opacity: 0.6 }} />
          <span className="text-muted-foreground">Round Spending</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-orange))' }} />
          <span className="text-muted-foreground">Cumulative ΔY</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 border-t-2 border-dashed" style={{ borderColor: 'hsl(var(--cambridge-magenta))' }} />
          <span className="text-muted-foreground">Final ΔY</span>
        </div>
      </div>
    </div>
  );
};

export default MultiplierDiagram;
