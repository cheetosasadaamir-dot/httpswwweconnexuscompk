import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

/**
 * Interactive diagram showing Excess Demand (Shortage) and Excess Supply (Surplus)
 * at disequilibrium prices - Cambridge 9708 Standard
 */
const ExcessDemandSupplyDiagram = () => {
  const [scenario, setScenario] = useState<'equilibrium' | 'shortage' | 'surplus'>('equilibrium');
  
  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 50, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Colors
  const demandColor = 'hsl(185, 100%, 50%)';
  const supplyColor = 'hsl(300, 100%, 60%)';
  const equilibriumColor = 'hsl(45, 93%, 55%)';
  const shortageColor = 'hsl(145, 70%, 50%)';
  const surplusColor = 'hsl(15, 90%, 55%)';
  const axisColor = 'hsl(220, 14%, 75%)';
  const gridColor = 'hsl(220, 14%, 20%)';

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Equilibrium point
  const equilibrium = { x: 50, y: 50 };
  
  // Disequilibrium prices
  const highPrice = 70; // Above equilibrium - creates surplus
  const lowPrice = 30;  // Below equilibrium - creates shortage
  
  // Quantity demanded and supplied at different prices
  // At high price: Qd = 30, Qs = 70 (surplus)
  // At low price: Qd = 70, Qs = 30 (shortage)
  const qDemandHigh = 30;
  const qSupplyHigh = 70;
  const qDemandLow = 70;
  const qSupplyLow = 30;

  // Curve paths
  const demandPath = `M ${xScale(10)} ${yScale(90)} L ${xScale(90)} ${yScale(10)}`;
  const supplyPath = `M ${xScale(10)} ${yScale(10)} L ${xScale(90)} ${yScale(90)}`;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  return (
    <div className="w-full">
      <h4 className="text-center text-silver-bright font-serif text-lg mb-4">
        Disequilibrium: Excess Demand vs. Excess Supply
      </h4>
      
      {/* Control buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <Button
          variant={scenario === 'equilibrium' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setScenario('equilibrium')}
        >
          Equilibrium (P = Pe)
        </Button>
        <Button
          variant={scenario === 'shortage' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setScenario('shortage')}
          className="gap-2"
        >
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: shortageColor }} />
          Shortage (P &lt; Pe)
        </Button>
        <Button
          variant={scenario === 'surplus' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setScenario('surplus')}
          className="gap-2"
        >
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: surplusColor }} />
          Surplus (P &gt; Pe)
        </Button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line 
              key={`h-${i}`}
              x1={margin.left} 
              y1={margin.top + (chartHeight / 5) * i} 
              x2={margin.left + chartWidth} 
              y2={margin.top + (chartHeight / 5) * i}
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line 
              key={`v-${i}`}
              x1={margin.left + (chartWidth / 5) * i} 
              y1={margin.top} 
              x2={margin.left + (chartWidth / 5) * i} 
              y2={margin.top + chartHeight}
            />
          ))}
        </g>

        {/* Axes */}
        <defs>
          <marker id="arrowhead-eds" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
          <marker id="arrow-excess" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={scenario === 'shortage' ? shortageColor : surplusColor} />
          </marker>
        </defs>
        
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth} y2={margin.top + chartHeight}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-eds)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 10}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-eds)"
        />

        {/* Axis labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} fill={axisColor} fontSize="13" fontFamily="serif" textAnchor="middle">
          Quantity (Q)
        </text>
        <text x={margin.left - 40} y={margin.top + chartHeight / 2} fill={axisColor} fontSize="13" fontFamily="serif" textAnchor="middle" transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`}>
          Price (P)
        </text>
        <text x={margin.left - 8} y={margin.top + chartHeight + 16} fill={axisColor} fontSize="11">0</text>

        {/* Demand Curve */}
        <motion.path
          d={demandPath}
          fill="none"
          stroke={demandColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={xScale(92)} y={yScale(8)} fill={demandColor} fontSize="14" fontWeight="600">D</text>

        {/* Supply Curve */}
        <motion.path
          d={supplyPath}
          fill="none"
          stroke={supplyColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={xScale(92)} y={yScale(92)} fill={supplyColor} fontSize="14" fontWeight="600">S</text>

        {/* Equilibrium Point */}
        <motion.circle
          cx={xScale(equilibrium.x)}
          cy={yScale(equilibrium.y)}
          r="6"
          fill={equilibriumColor}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
        <text x={xScale(equilibrium.x) + 12} y={yScale(equilibrium.y) - 8} fill={equilibriumColor} fontSize="12" fontWeight="600">E</text>

        {/* Equilibrium dashed lines */}
        <motion.line
          x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)}
          x2={xScale(equilibrium.x)} y2={margin.top + chartHeight}
          stroke={equilibriumColor}
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity={scenario === 'equilibrium' ? 1 : 0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        <motion.line
          x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)}
          x2={margin.left} y2={yScale(equilibrium.y)}
          stroke={equilibriumColor}
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity={scenario === 'equilibrium' ? 1 : 0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        <text x={xScale(equilibrium.x)} y={margin.top + chartHeight + 18} fill={equilibriumColor} fontSize="11" textAnchor="middle" opacity={scenario === 'equilibrium' ? 1 : 0.3}>Qe</text>
        <text x={margin.left - 14} y={yScale(equilibrium.y) + 4} fill={equilibriumColor} fontSize="11" textAnchor="end" opacity={scenario === 'equilibrium' ? 1 : 0.3}>Pe</text>

        {/* Shortage scenario */}
        {scenario === 'shortage' && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Price floor line */}
            <line
              x1={margin.left}
              y1={yScale(lowPrice)}
              x2={margin.left + chartWidth}
              y2={yScale(lowPrice)}
              stroke={shortageColor}
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <text x={margin.left - 14} y={yScale(lowPrice) + 4} fill={shortageColor} fontSize="11" fontWeight="600" textAnchor="end">P₁</text>
            
            {/* Quantity supplied point */}
            <circle cx={xScale(qSupplyLow)} cy={yScale(lowPrice)} r="5" fill={supplyColor} stroke="white" strokeWidth="2" />
            <text x={xScale(qSupplyLow)} y={margin.top + chartHeight + 18} fill={supplyColor} fontSize="11" textAnchor="middle">Qs</text>
            <line x1={xScale(qSupplyLow)} y1={yScale(lowPrice)} x2={xScale(qSupplyLow)} y2={margin.top + chartHeight} stroke={supplyColor} strokeWidth="1.5" strokeDasharray="4,3" />
            
            {/* Quantity demanded point */}
            <circle cx={xScale(qDemandLow)} cy={yScale(lowPrice)} r="5" fill={demandColor} stroke="white" strokeWidth="2" />
            <text x={xScale(qDemandLow)} y={margin.top + chartHeight + 18} fill={demandColor} fontSize="11" textAnchor="middle">Qd</text>
            <line x1={xScale(qDemandLow)} y1={yScale(lowPrice)} x2={xScale(qDemandLow)} y2={margin.top + chartHeight} stroke={demandColor} strokeWidth="1.5" strokeDasharray="4,3" />
            
            {/* Shortage bracket */}
            <line x1={xScale(qSupplyLow)} y1={yScale(lowPrice) - 12} x2={xScale(qDemandLow)} y2={yScale(lowPrice) - 12} stroke={shortageColor} strokeWidth="3" />
            <line x1={xScale(qSupplyLow)} y1={yScale(lowPrice) - 18} x2={xScale(qSupplyLow)} y2={yScale(lowPrice) - 6} stroke={shortageColor} strokeWidth="2" />
            <line x1={xScale(qDemandLow)} y1={yScale(lowPrice) - 18} x2={xScale(qDemandLow)} y2={yScale(lowPrice) - 6} stroke={shortageColor} strokeWidth="2" />
            <text x={xScale((qSupplyLow + qDemandLow) / 2)} y={yScale(lowPrice) - 22} fill={shortageColor} fontSize="12" fontWeight="600" textAnchor="middle">
              SHORTAGE
            </text>
            <text x={xScale((qSupplyLow + qDemandLow) / 2)} y={yScale(lowPrice) - 35} fill={shortageColor} fontSize="10" textAnchor="middle">
              (Qd &gt; Qs)
            </text>
            
            {/* Upward pressure arrow */}
            <motion.path
              d={`M ${margin.left + 20} ${yScale(lowPrice)} L ${margin.left + 20} ${yScale(equilibrium.y)}`}
              fill="none"
              stroke={shortageColor}
              strokeWidth="2.5"
              markerEnd="url(#arrow-excess)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <text x={margin.left + 32} y={yScale((lowPrice + equilibrium.y) / 2)} fill={shortageColor} fontSize="10" fontWeight="600">
              P↑
            </text>
          </motion.g>
        )}

        {/* Surplus scenario */}
        {scenario === 'surplus' && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Price ceiling line */}
            <line
              x1={margin.left}
              y1={yScale(highPrice)}
              x2={margin.left + chartWidth}
              y2={yScale(highPrice)}
              stroke={surplusColor}
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <text x={margin.left - 14} y={yScale(highPrice) + 4} fill={surplusColor} fontSize="11" fontWeight="600" textAnchor="end">P₂</text>
            
            {/* Quantity demanded point */}
            <circle cx={xScale(qDemandHigh)} cy={yScale(highPrice)} r="5" fill={demandColor} stroke="white" strokeWidth="2" />
            <text x={xScale(qDemandHigh)} y={margin.top + chartHeight + 18} fill={demandColor} fontSize="11" textAnchor="middle">Qd</text>
            <line x1={xScale(qDemandHigh)} y1={yScale(highPrice)} x2={xScale(qDemandHigh)} y2={margin.top + chartHeight} stroke={demandColor} strokeWidth="1.5" strokeDasharray="4,3" />
            
            {/* Quantity supplied point */}
            <circle cx={xScale(qSupplyHigh)} cy={yScale(highPrice)} r="5" fill={supplyColor} stroke="white" strokeWidth="2" />
            <text x={xScale(qSupplyHigh)} y={margin.top + chartHeight + 18} fill={supplyColor} fontSize="11" textAnchor="middle">Qs</text>
            <line x1={xScale(qSupplyHigh)} y1={yScale(highPrice)} x2={xScale(qSupplyHigh)} y2={margin.top + chartHeight} stroke={supplyColor} strokeWidth="1.5" strokeDasharray="4,3" />
            
            {/* Surplus bracket */}
            <line x1={xScale(qDemandHigh)} y1={yScale(highPrice) + 12} x2={xScale(qSupplyHigh)} y2={yScale(highPrice) + 12} stroke={surplusColor} strokeWidth="3" />
            <line x1={xScale(qDemandHigh)} y1={yScale(highPrice) + 6} x2={xScale(qDemandHigh)} y2={yScale(highPrice) + 18} stroke={surplusColor} strokeWidth="2" />
            <line x1={xScale(qSupplyHigh)} y1={yScale(highPrice) + 6} x2={xScale(qSupplyHigh)} y2={yScale(highPrice) + 18} stroke={surplusColor} strokeWidth="2" />
            <text x={xScale((qDemandHigh + qSupplyHigh) / 2)} y={yScale(highPrice) + 30} fill={surplusColor} fontSize="12" fontWeight="600" textAnchor="middle">
              SURPLUS
            </text>
            <text x={xScale((qDemandHigh + qSupplyHigh) / 2)} y={yScale(highPrice) + 43} fill={surplusColor} fontSize="10" textAnchor="middle">
              (Qs &gt; Qd)
            </text>
            
            {/* Downward pressure arrow */}
            <motion.path
              d={`M ${margin.left + 20} ${yScale(highPrice)} L ${margin.left + 20} ${yScale(equilibrium.y)}`}
              fill="none"
              stroke={surplusColor}
              strokeWidth="2.5"
              markerEnd="url(#arrow-excess)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <text x={margin.left + 32} y={yScale((highPrice + equilibrium.y) / 2)} fill={surplusColor} fontSize="10" fontWeight="600">
              P↓
            </text>
          </motion.g>
        )}
      </svg>

      {/* Explanation box */}
      <motion.div
        key={scenario}
        className="mt-6 p-4 rounded-lg border"
        style={{
          backgroundColor: scenario === 'shortage' 
            ? 'hsla(145, 70%, 50%, 0.1)' 
            : scenario === 'surplus' 
              ? 'hsla(15, 90%, 55%, 0.1)' 
              : 'hsla(45, 93%, 55%, 0.1)',
          borderColor: scenario === 'shortage' 
            ? 'hsla(145, 70%, 50%, 0.3)' 
            : scenario === 'surplus' 
              ? 'hsla(15, 90%, 55%, 0.3)' 
              : 'hsla(45, 93%, 55%, 0.3)'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {scenario === 'equilibrium' && (
          <div>
            <h5 className="font-semibold text-amber-400 mb-2">Market Equilibrium (Market Clearing)</h5>
            <p className="text-sm text-muted-foreground">
              At <strong>Pe</strong>, <strong>Qd = Qs</strong>. There is no excess demand or supply. 
              The market <em>clears</em> - all willing buyers find willing sellers at this price. 
              There is <strong>no tendency for price to change</strong>.
            </p>
          </div>
        )}
        {scenario === 'shortage' && (
          <div>
            <h5 className="font-semibold mb-2" style={{ color: shortageColor }}>Excess Demand (Shortage)</h5>
            <p className="text-sm text-muted-foreground">
              At <strong>P₁ &lt; Pe</strong>, quantity demanded <strong>exceeds</strong> quantity supplied. 
              Consumers compete for limited goods → <strong>upward pressure on price</strong>.
              Price rises until Qd = Qs at equilibrium.
            </p>
          </div>
        )}
        {scenario === 'surplus' && (
          <div>
            <h5 className="font-semibold mb-2" style={{ color: surplusColor }}>Excess Supply (Surplus)</h5>
            <p className="text-sm text-muted-foreground">
              At <strong>P₂ &gt; Pe</strong>, quantity supplied <strong>exceeds</strong> quantity demanded. 
              Producers cut prices to clear unsold stock → <strong>downward pressure on price</strong>.
              Price falls until Qd = Qs at equilibrium.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ExcessDemandSupplyDiagram;
