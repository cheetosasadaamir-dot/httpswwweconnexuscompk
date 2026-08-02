import { useState } from 'react';
import { motion } from 'framer-motion';

type ExternalityType = 'negative-production' | 'negative-consumption' | 'positive-production' | 'positive-consumption';

const MarketFailureExternalityDiagram = () => {
  const [externalityType, setExternalityType] = useState<ExternalityType>('negative-production');

  const width = 520;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const xScale = (x: number) => padding.left + (x / 120) * chartWidth;
  const yScale = (y: number) => padding.top + chartHeight - (y / 120) * chartHeight;

  const lineIntersect = (
    l1: { start: { x: number; y: number }; end: { x: number; y: number } },
    l2: { start: { x: number; y: number }; end: { x: number; y: number } }
  ) => {
    const m1 = (l1.end.y - l1.start.y) / (l1.end.x - l1.start.x);
    const b1 = l1.start.y - m1 * l1.start.x;
    const m2 = (l2.end.y - l2.start.y) / (l2.end.x - l2.start.x);
    const b2 = l2.start.y - m2 * l2.start.x;
    const x = (b2 - b1) / (m1 - m2);
    const y = m1 * x + b1;
    return { x, y };
  };


  // Precomputed intersections (numerically exact) for each externality scenario
  const negProdMpc = { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } };
  const negProdMsc = { start: { x: 10, y: 40 }, end: { x: 100, y: 100 } };
  const negProdDemand = { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } };
  const negProdMarket = lineIntersect(negProdMpc, negProdDemand);
  const negProdOptimal = lineIntersect(negProdMsc, negProdDemand);

  const negConsMpc = { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } };
  const negConsDemand = { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } };
  const negConsMsb = { start: { x: 10, y: 70 }, end: { x: 100, y: 10 } };
  const negConsMarket = lineIntersect(negConsMpc, negConsDemand);
  const negConsOptimal = lineIntersect(negConsMpc, negConsMsb);

  const posProdMpc = { start: { x: 10, y: 40 }, end: { x: 100, y: 100 } };
  const posProdMsc = { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } };
  const posProdDemand = { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } };
  const posProdMarket = lineIntersect(posProdMpc, posProdDemand);
  const posProdOptimal = lineIntersect(posProdMsc, posProdDemand);

  const posConsMpc = { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } };
  const posConsDemand = { start: { x: 10, y: 70 }, end: { x: 100, y: 10 } };
  const posConsMsb = { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } };
  const posConsMarket = lineIntersect(posConsMpc, posConsDemand);
  const posConsOptimal = lineIntersect(posConsMpc, posConsMsb);

  const getExternalityData = () => {
    switch (externalityType) {
      case 'negative-production':
        return {
          title: 'Negative Production Externality',
          subtitle: 'e.g., Factory pollution, Carbon emissions',
          description: 'When production imposes costs on third parties (external costs), the Marginal Social Cost (MSC) exceeds the Marginal Private Cost (MPC). The market produces at Qm where MPC = MPB, but the socially optimal output is Qopt where MSC = MSB. The shaded triangle represents welfare loss (deadweight loss) from overproduction.',
          mpc: { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } },
          msc: { start: { x: 10, y: 40 }, end: { x: 100, y: 100 } },
          demand: { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } },
          showMSB: false,
          showMSC: true,
          qMarket: negProdMarket.x,
          qOptimal: negProdOptimal.x,
          pMarket: negProdMarket.y,
          pOptimal: negProdOptimal.y,
          externalCostLabel: 'External Cost',
          welfare: 'overproduction',
        };
      case 'negative-consumption':
        return {
          title: 'Negative Consumption Externality',
          subtitle: 'e.g., Smoking, Alcohol consumption',
          description: 'When consumption imposes costs on third parties, the Marginal Social Benefit (MSB) is less than the Marginal Private Benefit (MPB). Consumers ignore external costs to others. The market consumes at Qm, but the socially optimal consumption is Qopt where MSB = MSC.',
          mpc: { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } },
          msc: null,
          demand: { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } }, // MPB
          msb: { start: { x: 10, y: 70 }, end: { x: 100, y: 10 } },
          showMSB: true,
          showMSC: false,
          qMarket: negConsMarket.x,
          qOptimal: negConsOptimal.x,
          pMarket: negConsMarket.y,
          pOptimal: negConsOptimal.y,
          externalCostLabel: 'External Cost',
          welfare: 'overproduction',
        };
      case 'positive-production':
        return {
          title: 'Positive Production Externality',
          subtitle: 'e.g., Beekeeper pollinating nearby farms',
          description: 'When production generates benefits to third parties (external benefits), the Marginal Social Cost (MSC) is less than the Marginal Private Cost (MPC). The market produces at Qm, but society would benefit from production at Qopt where true MSC = MSB. This results in underproduction.',
          mpc: { start: { x: 10, y: 40 }, end: { x: 100, y: 100 } },
          msc: { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } },
          demand: { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } },
          showMSB: false,
          showMSC: true,
          qMarket: posProdMarket.x,
          qOptimal: posProdOptimal.x,
          pMarket: posProdMarket.y,
          pOptimal: posProdOptimal.y,
          externalCostLabel: 'External Benefit',
          welfare: 'underproduction',
        };
      case 'positive-consumption':
        return {
          title: 'Positive Consumption Externality',
          subtitle: 'e.g., Education, Vaccination',
          description: 'When consumption generates benefits to third parties, the Marginal Social Benefit (MSB) exceeds the Marginal Private Benefit (MPB). Individuals under-consume because they only consider private benefits. Society would be better off at Qopt where MSB = MSC.',
          mpc: { start: { x: 10, y: 20 }, end: { x: 100, y: 80 } },
          demand: { start: { x: 10, y: 70 }, end: { x: 100, y: 10 } }, // MPB
          msb: { start: { x: 10, y: 90 }, end: { x: 100, y: 30 } },
          showMSB: true,
          showMSC: false,
          qMarket: posConsMarket.x,
          qOptimal: posConsOptimal.x,
          pMarket: posConsMarket.y,
          pOptimal: posConsOptimal.y,
          externalCostLabel: 'External Benefit',
          welfare: 'underproduction',
        };
    }
  };

  const data = getExternalityData();
  const isNegative = externalityType.includes('negative');

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-silver-bright">Externalities & Welfare Loss</h3>
      </div>

      {/* Externality Type Selector */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={() => setExternalityType('negative-production')}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
            externalityType === 'negative-production' 
              ? 'bg-destructive/20 text-destructive border border-destructive/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Negative Production
        </button>
        <button
          onClick={() => setExternalityType('negative-consumption')}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
            externalityType === 'negative-consumption' 
              ? 'bg-destructive/20 text-destructive border border-destructive/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Negative Consumption
        </button>
        <button
          onClick={() => setExternalityType('positive-production')}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
            externalityType === 'positive-production' 
              ? 'bg-cambridge-green/20 text-green-400 border border-green-400/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Positive Production
        </button>
        <button
          onClick={() => setExternalityType('positive-consumption')}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
            externalityType === 'positive-consumption' 
              ? 'bg-cambridge-green/20 text-green-400 border border-green-400/30' 
              : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Positive Consumption
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid */}
        {[0, 30, 60, 90, 120].map((tick) => (
          <g key={`grid-${tick}`}>
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

        {/* Welfare Loss Triangle */}
        <motion.polygon
          key={externalityType}
          points={
            data.welfare === 'overproduction'
              ? `${xScale(data.qOptimal)},${yScale(data.pOptimal)} ${xScale(data.qMarket)},${yScale(data.pMarket)} ${xScale(data.qOptimal)},${yScale(data.pMarket - 15)}`
              : `${xScale(data.qMarket)},${yScale(data.pMarket)} ${xScale(data.qOptimal)},${yScale(data.pOptimal)} ${xScale(data.qMarket)},${yScale(data.pOptimal - 15)}`
          }
          fill={isNegative ? "hsl(var(--destructive))" : "hsl(var(--cambridge-green))"}
          opacity={0.3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
        />

        {/* MPC / Supply Curve */}
        <motion.line
          x1={xScale(data.mpc.start.x)}
          y1={yScale(data.mpc.start.y)}
          x2={xScale(data.mpc.end.x)}
          y2={yScale(data.mpc.end.y)}
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* MSC Curve (for production externalities) */}
        {data.showMSC && data.msc && (
          <motion.line
            x1={xScale(data.msc.start.x)}
            y1={yScale(data.msc.start.y)}
            x2={xScale(data.msc.end.x)}
            y2={yScale(data.msc.end.y)}
            stroke={isNegative ? "hsl(var(--destructive))" : "hsl(var(--cambridge-green))"}
            strokeWidth="2.5"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        )}

        {/* Demand / MPB Curve */}
        <motion.line
          x1={xScale(data.demand.start.x)}
          y1={yScale(data.demand.start.y)}
          x2={xScale(data.demand.end.x)}
          y2={yScale(data.demand.end.y)}
          stroke="hsl(var(--secondary))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* MSB Curve (for consumption externalities) */}
        {data.showMSB && data.msb && (
          <motion.line
            x1={xScale(data.msb.start.x)}
            y1={yScale(data.msb.start.y)}
            x2={xScale(data.msb.end.x)}
            y2={yScale(data.msb.end.y)}
            stroke={isNegative ? "hsl(var(--destructive))" : "hsl(var(--cambridge-green))"}
            strokeWidth="2.5"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        )}

        {/* External cost/benefit bracket */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <line
            x1={xScale(30)}
            y1={yScale(
              externalityType === 'negative-production' ? 35 :
              externalityType === 'positive-production' ? 50 :
              externalityType === 'negative-consumption' ? 80 : 62
            )}
            x2={xScale(30)}
            y2={yScale(
              externalityType === 'negative-production' ? 55 :
              externalityType === 'positive-production' ? 30 :
              externalityType === 'negative-consumption' ? 60 : 82
            )}
            stroke={isNegative ? "hsl(var(--destructive))" : "hsl(var(--cambridge-green))"}
            strokeWidth="2"
          />
          <text
            x={xScale(32)}
            y={yScale(
              externalityType === 'negative-production' ? 45 :
              externalityType === 'positive-production' ? 40 :
              externalityType === 'negative-consumption' ? 70 : 72
            )}
            className={`text-xs font-medium ${isNegative ? 'fill-red-400' : 'fill-green-400'}`}
          >
            {data.externalCostLabel}
          </text>
        </motion.g>

        {/* Quantity lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Qm line */}
          <line
            x1={xScale(data.qMarket)}
            y1={yScale(0)}
            x2={xScale(data.qMarket)}
            y2={yScale(data.pMarket)}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <text x={xScale(data.qMarket)} y={height - padding.bottom + 18} textAnchor="middle" className="fill-muted-foreground text-xs">
            Qm
          </text>

          {/* Qopt line */}
          <line
            x1={xScale(data.qOptimal)}
            y1={yScale(0)}
            x2={xScale(data.qOptimal)}
            y2={yScale(data.pOptimal)}
            stroke={isNegative ? "hsl(var(--destructive))" : "hsl(var(--cambridge-green))"}
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <text x={xScale(data.qOptimal)} y={height - padding.bottom + 18} textAnchor="middle" className={isNegative ? "fill-red-400 text-xs" : "fill-green-400 text-xs"}>
            Qopt
          </text>
        </motion.g>

        {/* Points */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* Market equilibrium */}
          <circle
            cx={xScale(data.qMarket)}
            cy={yScale(data.pMarket)}
            r="6"
            fill="hsl(var(--muted-foreground))"
            stroke="white"
            strokeWidth="2"
          />

          {/* Social optimum */}
          <circle
            cx={xScale(data.qOptimal)}
            cy={yScale(data.pOptimal)}
            r="6"
            fill={isNegative ? "hsl(var(--destructive))" : "hsl(var(--cambridge-green))"}
            stroke="white"
            strokeWidth="2"
          />
        </motion.g>

        {/* Curve Labels */}
        <text x={xScale(95)} y={yScale(75)} className="fill-primary text-xs font-medium">
          {data.showMSC ? 'MPC = S' : 'MPC = MSC = S'}
        </text>
        {data.showMSC && data.msc && (
          <text x={xScale(95)} y={yScale(95)} className={`text-xs font-medium ${isNegative ? 'fill-red-400' : 'fill-green-400'}`}>
            MSC
          </text>
        )}
        <text x={xScale(95)} y={yScale(data.showMSB ? 15 : 35)} className="fill-secondary text-xs font-medium">
          {data.showMSB ? 'MPB = D' : 'MPB = MSB = D'}
        </text>
        {data.showMSB && data.msb && (
          <text x={xScale(95)} y={yScale(data.msb.end.y + 5)} className={`text-xs font-medium ${isNegative ? 'fill-red-400' : 'fill-green-400'}`}>
            MSB
          </text>
        )}

        {/* Welfare Loss Label */}
        <motion.text
          x={xScale((data.qMarket + data.qOptimal) / 2)}
          y={yScale((data.pMarket + data.pOptimal) / 2) - 15}
          textAnchor="middle"
          className={`text-xs font-semibold ${isNegative ? 'fill-red-400' : 'fill-green-400'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Welfare Loss
        </motion.text>

        {/* Axis labels */}
        <text x={width / 2} y={height - 10} textAnchor="middle" className="fill-silver-bright text-sm font-medium">
          Quantity (Q)
        </text>
        <text x={-height / 2 + 20} y={18} textAnchor="middle" transform="rotate(-90)" className="fill-silver-bright text-sm font-medium">
          Price / Cost / Benefit ($)
        </text>
      </svg>

      {/* Description */}
      <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
            isNegative ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
          }`}>
            {data.title}
          </span>
          <span className="text-xs text-muted-foreground">{data.subtitle}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
};

export default MarketFailureExternalityDiagram;
