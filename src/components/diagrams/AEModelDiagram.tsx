import { motion } from 'framer-motion';
import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface AEModelDiagramProps {
  title?: string;
  showInventoryAdjustment?: boolean;
  showMultiplier?: boolean;
  interactive?: boolean;
}

const AEModelDiagram = ({ 
  title = "The Aggregate Expenditure Model (Keynesian Cross)",
  showInventoryAdjustment = true,
  showMultiplier = true,
  interactive = true
}: AEModelDiagramProps) => {
  const [showShift, setShowShift] = useState(false);
  const [showGaps, setShowGaps] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const width = 580;
  const height = 420;
  const margin = { top: 50, right: 50, bottom: 70, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 4000) * chartWidth;
  const yScale = (val: number) => height - margin.bottom - (val / 4000) * chartHeight;

  // Consumption function parameters: C = a + bYd where a = 200, b = 0.75
  const a = 200; // Autonomous consumption
  const MPC = 0.75;
  const MPW = 1 - MPC; // = 0.25

  // Initial autonomous expenditure: a + I + G + X = 200 + 300 + 200 + 100 = 800
  const autonomousBase = 800;
  const autonomousShifted = 950; // After ΔA = 150

  // AE = A + bY where A = autonomous expenditure
  const aePoints = (autonomous: number) => Array.from({ length: 41 }, (_, i) => {
    const y = i * 100;
    const ae = autonomous + MPC * y;
    return { x: xScale(y), y: yScale(ae) };
  });

  // Equilibrium: Y = AE => Y = A + bY => Y(1-b) = A => Y = A / (1-b) = A / MPW
  const eq1Y = autonomousBase / MPW; // 800 / 0.25 = 3200
  const eq2Y = autonomousShifted / MPW; // 950 / 0.25 = 3800

  // Exact algebraic equilibria: Y = AE => Y = A + bY => Y* = A / MPW
  const visibleEq1Y = eq1Y; // = 800 / 0.25 = 3200 (exact intersection of AE0 and 45° line)
  const visibleEq1AE = visibleEq1Y; // on the 45° line, AE = Y at equilibrium
  const visibleEq2Y = eq2Y; // = 950 / 0.25 = 3800 (exact intersection of AE1 and 45° line)
  const visibleEq2AE = visibleEq2Y;

  // Full employment output (between the two equilibria to illustrate both gap types)
  const Yf = 3400;

  // 45-degree line
  const line45Start = { x: xScale(0), y: yScale(0) };
  const line45End = { x: xScale(4000), y: yScale(4000) };

  // Consumption only (C = a + bY)
  const consumptionPoints = Array.from({ length: 41 }, (_, i) => {
    const y = i * 100;
    const c = a + MPC * y;
    return { x: xScale(y), y: yScale(c) };
  });

  // AE curves
  const ae1Points = Array.from({ length: 41 }, (_, i) => {
    const y = i * 100;
    const ae = autonomousBase + MPC * y;
    return { x: xScale(y), y: yScale(ae) };
  });

  const ae2Points = Array.from({ length: 41 }, (_, i) => {
    const y = i * 100;
    const ae = autonomousShifted + MPC * y;
    return { x: xScale(y), y: yScale(ae) };
  });

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  };

  // Disequilibrium points for inventory adjustment
  const disequilibriumY = 2000;
  const aeAtDisequilibrium = autonomousBase + MPC * disequilibriumY; // = 800 + 1050 = 1850

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="font-serif text-lg text-silver-bright">{title}</h3>
        {interactive && (
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setShowShift(!showShift)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                showShift 
                  ? 'bg-cambridge-magenta/30 text-cambridge-magenta' 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {showShift ? 'Reset' : 'Δ Autonomous Expenditure'}
            </button>
            <button
              onClick={() => setShowGaps(!showGaps)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                showGaps 
                  ? 'bg-cambridge-orange/30 text-cambridge-orange' 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {showGaps ? 'Hide Gaps' : 'Show Gaps'}
            </button>
          </div>
        )}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines */}
        {[500, 1000, 1500, 2000, 2500, 3000, 3500].map((val) => (
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

        {/* Full employment vertical line */}
        {showGaps && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <line
              x1={xScale(Yf)}
              y1={margin.top}
              x2={xScale(Yf)}
              y2={height - margin.bottom}
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth={2}
              strokeDasharray="8,4"
            />
            <text
              x={xScale(Yf)}
              y={margin.top - 8}
              textAnchor="middle"
              fill="hsl(var(--cambridge-orange))"
              className="text-xs font-semibold"
            >
              Yf
            </text>
            {/* Deflationary gap annotation */}
            <rect
              x={xScale(visibleEq1Y) - 40}
              y={yScale(Yf) - 30}
              width={80}
              height={22}
              rx={4}
              fill="hsl(var(--destructive))"
              opacity={0.2}
            />
            <text
              x={xScale(visibleEq1Y)}
              y={yScale(Yf) - 15}
              textAnchor="middle"
              fill="hsl(var(--destructive))"
              className="text-[10px] font-semibold"
            >
              Deflationary Gap
            </text>
          </motion.g>
        )}

        {/* Axes */}
        <g stroke="hsl(var(--silver))" strokeWidth={2}>
          <line
            x1={margin.left}
            y1={height - margin.bottom}
            x2={width - margin.right}
            y2={height - margin.bottom}
          />
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={height - margin.bottom}
          />
          {/* Arrowheads */}
          <polygon
            points={`${margin.left},${margin.top} ${margin.left - 5},${margin.top + 10} ${margin.left + 5},${margin.top + 10}`}
            fill="hsl(var(--silver))"
          />
          <polygon
            points={`${width - margin.right},${height - margin.bottom} ${width - margin.right - 10},${height - margin.bottom - 5} ${width - margin.right - 10},${height - margin.bottom + 5}`}
            fill="hsl(var(--silver))"
          />
        </g>

        {/* Axis labels */}
        <text
          x={width / 2}
          y={height - 18}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
        >
          Real National Income (Y)
        </text>
        <text
          x={22}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 22, ${height / 2})`}
        >
          Aggregate Expenditure (AE)
        </text>

        {/* 45-degree line */}
        <motion.line
          x1={line45Start.x}
          y1={line45Start.y}
          x2={line45End.x}
          y2={line45End.y}
          stroke="hsl(var(--silver))"
          strokeWidth={2.5}
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <text
          x={xScale(3500)}
          y={yScale(3650)}
          fill="hsl(var(--silver))"
          className="text-xs font-medium"
        >
          Y = AE (45°)
        </text>

        {/* Consumption function */}
        <motion.path
          d={pathFromPoints(consumptionPoints)}
          fill="none"
          stroke="hsl(var(--cambridge-green))"
          strokeWidth={2}
          strokeOpacity={0.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setHoveredElement('consumption')}
          onMouseLeave={() => setHoveredElement(null)}
        />
        <text
          x={xScale(3200)}
          y={yScale(a + MPC * 3200) - 8}
          fill="hsl(var(--cambridge-green))"
          className="text-[10px]"
          opacity={0.7}
        >
          C = a + bY
        </text>

        {/* AE₀ curve (C + I + G + X - M) */}
        <motion.path
          d={pathFromPoints(ae1Points)}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={3}
          filter="drop-shadow(0 0 4px hsl(var(--cambridge-cyan) / 0.4))"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          onMouseEnter={() => setHoveredElement('ae1')}
          onMouseLeave={() => setHoveredElement(null)}
        />
        <text
          x={xScale(2600)}
          y={yScale(autonomousBase + MPC * 2600) - 12}
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-semibold"
        >
          AE₀ = C + I + G + (X-M)
        </text>

        {/* Shifted AE₁ curve */}
        {showShift && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.path
              d={pathFromPoints(ae2Points)}
              fill="none"
              stroke="hsl(var(--cambridge-magenta))"
              strokeWidth={3}
              filter="drop-shadow(0 0 4px hsl(var(--cambridge-magenta) / 0.4))"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <text
              x={xScale(2000)}
              y={yScale(autonomousShifted + MPC * 2000) - 12}
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-semibold"
            >
              AE₁ (after ΔA)
            </text>
          </motion.g>
        )}

        {/* Equilibrium point E₀ */}
        <motion.circle
          cx={xScale(visibleEq1Y)}
          cy={yScale(visibleEq1Y)}
          r={7}
          fill="hsl(var(--cambridge-cyan))"
          filter="drop-shadow(0 0 6px hsl(var(--cambridge-cyan) / 0.6))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2, type: "spring" }}
        />
        <text
          x={xScale(visibleEq1Y) + 12}
          y={yScale(visibleEq1Y) - 8}
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-bold"
        >
          E₀
        </text>

        {/* Dashed lines from E₀ to axes */}
        <motion.line
          x1={xScale(visibleEq1Y)}
          y1={yScale(visibleEq1Y)}
          x2={xScale(visibleEq1Y)}
          y2={height - margin.bottom}
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={1.5}
          strokeDasharray="5,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        <text
          x={xScale(visibleEq1Y)}
          y={height - margin.bottom + 15}
          textAnchor="middle"
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-medium"
        >
          Y₀*
        </text>

        {/* Shifted equilibrium E₁ */}
        {showShift && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.circle
              cx={xScale(visibleEq2Y)}
              cy={yScale(visibleEq2Y)}
              r={7}
              fill="hsl(var(--cambridge-magenta))"
              filter="drop-shadow(0 0 6px hsl(var(--cambridge-magenta) / 0.6))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
            />
            <text
              x={xScale(visibleEq2Y) + 12}
              y={yScale(visibleEq2Y) - 8}
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-bold"
            >
              E₁
            </text>
            <motion.line
              x1={xScale(visibleEq2Y)}
              y1={yScale(visibleEq2Y)}
              x2={xScale(visibleEq2Y)}
              y2={height - margin.bottom}
              stroke="hsl(var(--cambridge-magenta))"
              strokeWidth={1.5}
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <text
              x={xScale(visibleEq2Y)}
              y={height - margin.bottom + 15}
              textAnchor="middle"
              fill="hsl(var(--cambridge-magenta))"
              className="text-xs font-medium"
            >
              Y₁*
            </text>

            {/* Multiplier effect arrow */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <path
                d={`M ${xScale(visibleEq1Y) + 8} ${height - margin.bottom - 20} L ${xScale(visibleEq2Y) - 8} ${height - margin.bottom - 20}`}
                fill="none"
                stroke="hsl(var(--cambridge-orange))"
                strokeWidth={2.5}
                markerEnd="url(#multiplierArrow)"
              />
              <text
                x={(xScale(visibleEq1Y) + xScale(visibleEq2Y)) / 2}
                y={height - margin.bottom - 30}
                textAnchor="middle"
                fill="hsl(var(--cambridge-orange))"
                className="text-xs font-bold"
              >
                ΔY = k × ΔA
              </text>
            </motion.g>
          </motion.g>
        )}

        {/* Inventory adjustment illustration */}
        {showInventoryAdjustment && !showShift && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            {/* Point where AE > Y (inventory depletion) */}
            <circle
              cx={xScale(disequilibriumY)}
              cy={yScale(disequilibriumY)}
              r={4}
              fill="hsl(var(--silver))"
              opacity={0.5}
            />
            <circle
              cx={xScale(disequilibriumY)}
              cy={yScale(aeAtDisequilibrium)}
              r={5}
              fill="hsl(var(--cambridge-orange))"
            />
            {/* Vertical gap showing excess demand */}
            <line
              x1={xScale(disequilibriumY)}
              y1={yScale(disequilibriumY)}
              x2={xScale(disequilibriumY)}
              y2={yScale(aeAtDisequilibrium)}
              stroke="hsl(var(--cambridge-orange))"
              strokeWidth={2}
              strokeDasharray="3,2"
            />
            <text
              x={xScale(disequilibriumY) + 8}
              y={(yScale(disequilibriumY) + yScale(aeAtDisequilibrium)) / 2}
              fill="hsl(var(--cambridge-orange))"
              className="text-[9px]"
            >
              AE &gt; Y
            </text>
            <text
              x={xScale(disequilibriumY) + 8}
              y={(yScale(disequilibriumY) + yScale(aeAtDisequilibrium)) / 2 + 11}
              fill="hsl(var(--cambridge-orange))"
              className="text-[8px]"
              opacity={0.8}
            >
              (Unplanned ↓Inv)
            </text>
          </motion.g>
        )}

        {/* Autonomous expenditure intercept */}
        <motion.circle
          cx={margin.left}
          cy={yScale(autonomousBase)}
          r={5}
          fill="hsl(var(--cambridge-cyan))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
        <text
          x={margin.left - 8}
          y={yScale(autonomousBase)}
          textAnchor="end"
          fill="hsl(var(--cambridge-cyan))"
          className="text-[10px]"
        >
          A₀
        </text>

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="multiplierArrow"
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

      {/* Ex-ante / Ex-post explanation */}
      {showInventoryAdjustment && (
        <div className="mt-5 grid md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-cambridge-green/10 rounded-lg border-l-3 border-cambridge-green">
            <h5 className="font-semibold text-cambridge-green mb-1">If AE &gt; Y (Ex-ante)</h5>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Planned expenditure exceeds actual output.</strong> Inventories fall unexpectedly 
              (unplanned disinvestment). Firms respond by <em>increasing production</em>. 
              Y rises toward equilibrium.
            </p>
          </div>
          <div className="p-3 bg-cambridge-magenta/10 rounded-lg border-l-3 border-cambridge-magenta">
            <h5 className="font-semibold text-cambridge-magenta mb-1">If AE &lt; Y (Ex-ante)</h5>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Planned expenditure falls short of output.</strong> Inventories accumulate unexpectedly 
              (unplanned investment). Firms respond by <em>reducing production</em>. 
              Y falls toward equilibrium.
            </p>
          </div>
        </div>
      )}

      {/* Multiplier formula box */}
      {showMultiplier && showShift && (
        <div className="mt-4 p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/30">
          <h4 className="text-sm font-semibold text-cambridge-orange mb-2">The Multiplier Effect</h4>
          <div className="text-center py-2">
            <BlockMath math="k = \frac{1}{1 - MPC} = \frac{1}{MPW} = \frac{1}{MPS + MPT + MPM}" />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">
            An autonomous increase in expenditure (<InlineMath math="\Delta A" />) triggers a <strong>multiplied increase</strong> in 
            equilibrium national income: <InlineMath math="\Delta Y = k \times \Delta A" />. With 
            MPC = 0.75, the multiplier k = 4, meaning a £200m injection creates £800m additional income.
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5" style={{ backgroundColor: 'hsl(var(--silver))', borderStyle: 'dashed' }} />
          <span className="text-muted-foreground">45° Equilibrium Line</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))' }} />
          <span className="text-muted-foreground">AE (C + I + G + X - M)</span>
        </div>
        {showShift && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5" style={{ backgroundColor: 'hsl(var(--cambridge-magenta))' }} />
            <span className="text-muted-foreground">Shifted AE</span>
          </div>
        )}
      </div>

      {/* Key equations */}
      <div className="mt-4 p-3 bg-muted/30 rounded-lg space-y-1">
        <p className="text-xs text-muted-foreground font-mono">
          <strong>Equilibrium Condition:</strong> Y = AE where AE = C + I + G + (X - M)
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          <strong>Consumption Function:</strong> C = a + bY<sub>d</sub> where a = autonomous, b = MPC
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          <strong>Equilibrium Income:</strong> Y* = A / (1 - MPC) = A × k
        </p>
      </div>
    </div>
  );
};

export default AEModelDiagram;
