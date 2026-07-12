import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface WelfareWithWorldPriceDiagramProps {
  title?: string;
  scenario?: 'free-trade' | 'autarky' | 'tariff' | 'quota';
}

/**
 * Accurate Welfare Diagram with World Price Line
 * Shows Consumer/Producer Surplus in international trade context
 * - World Price (Pw) as horizontal line
 * - Imports shown as gap between Qd and Qs at world price
 * - Welfare redistribution under different trade scenarios
 */
const WelfareWithWorldPriceDiagram = ({ 
  title = "Consumer & Producer Surplus with World Price", 
  scenario = 'free-trade'
}: WelfareWithWorldPriceDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return => observer.disconnect();
  }, []);
  
  // SVG dimensions
  const width = 520;
  const height = 420;
  const margin = { top: 45, right: 60, bottom: 65, left: 65 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // Colors (EconNexus palette)
  const demandColor = 'hsl(185, 100%, 50%)'; // Neon Cyan
  const supplyColor = 'hsl(300, 100%, 60%)'; // Magenta
  const worldPriceColor = 'hsl(45, 93%, 55%)'; // Amber Gold
  const consumerSurplusColor = 'hsl(185, 100%, 45%)';
  const producerSurplusColor = 'hsl(45, 93%, 55%)';
  const deadweightColor = 'hsl(0, 85%, 60%)'; // Crimson
  const axisColor = 'hsl(220, 14%, 75%)';
  const gridColor = 'hsl(220, 14%, 20%)';

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Key points
  const demandIntercept = { x: 0, y: 95 }; // Demand curve starts at P=95
  const supplyIntercept = { x: 0, y: 5 };   // Supply curve starts at P=5
  const domesticEq = { x: 50, y: 50 };      // Domestic equilibrium (autarky)
  const worldPrice = 30;                     // World price below domestic equilibrium
  
  // At world price
  const qDemandAtPw = 70;  // Quantity demanded at world price
  const qSupplyAtPw = 20;  // Quantity supplied domestically at world price
  
  // With tariff
  const tariffRate = 15;
  const priceWithTariff = worldPrice + tariffRate;
  const qDemandWithTariff = 55;
  const qSupplyWithTariff = 35;

  // Demand curve path
  const demandPath = `M ${xScale(0)} ${yScale(demandIntercept.y)} L ${xScale(95)} ${yScale(0)}`;
  
  // Supply curve path
  const supplyPath = `M ${xScale(0)} ${yScale(supplyIntercept.y)} L ${xScale(95)} ${yScale(100)}`;

  // Free Trade Consumer Surplus: Area above Pw, below demand, from 0 to Qd
  const csFreeTradePoints = `
    ${xScale(0)},${yScale(demandIntercept.y)}
    ${xScale(qDemandAtPw)},${yScale(worldPrice)}
    ${xScale(0)},${yScale(worldPrice)}
  `;

  // Free Trade Producer Surplus: Area below Pw, above supply, from 0 to Qs
  const psFreeTradePoints = `
    ${xScale(0)},${yScale(supplyIntercept.y)}
    ${xScale(qSupplyAtPw)},${yScale(worldPrice)}
    ${xScale(0)},${yScale(worldPrice)}
  `;

  // Autarky Consumer Surplus
  const csAutarkyPoints = `
    ${xScale(0)},${yScale(demandIntercept.y)}
    ${xScale(domesticEq.x)},${yScale(domesticEq.y)}
    ${xScale(0)},${yScale(domesticEq.y)}
  `;

  // Autarky Producer Surplus
  const psAutarkyPoints = `
    ${xScale(0)},${yScale(supplyIntercept.y)}
    ${xScale(domesticEq.x)},${yScale(domesticEq.y)}
    ${xScale(0)},${yScale(domesticEq.y)}
  `;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  const areaVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.4,
      transition: { delay: 1.2, duration: 0.6 }
    }
  };

  const getCurrentCS = () => {
    if (scenario === 'autarky') return csAutarkyPoints;
    return csFreeTradePoints;
  };

  const getCurrentPS = () => {
    if (scenario === 'autarky') return psAutarkyPoints;
    return psFreeTradePoints;
  };

  const getScenarioDescription = () => {
    switch (scenario) {
      case 'autarky':
        return 'Under autarky (no trade), domestic equilibrium occurs where domestic D = S. Consumer surplus is smaller and producer surplus is larger compared to free trade.';
      case 'free-trade':
        return 'Under free trade, the world price (Pw) is below domestic equilibrium. Consumers gain surplus (lower price), but domestic producers lose surplus. Imports = Qd - Qs.';
      case 'tariff':
        return 'A tariff raises the effective price to Pw + t. Consumers lose surplus, domestic producers gain, and the government collects tariff revenue. Deadweight loss triangles appear.';
      default:
        return '';
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h4 className="text-center text-silver-bright font-serif text-lg mb-4">{title}</h4>
      )}
      
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full max-w-xl mx-auto"
      >
        {/* Grid lines */}
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

        {/* Consumer Surplus area */}
        <motion.polygon
          points={getCurrentCS()}
          fill={consumerSurplusColor}
          variants={areaVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          onMouseEnter={() => setHoveredArea('consumer')}
          onMouseLeave={() => setHoveredArea(null)}
          style={{ 
            opacity: hoveredArea === 'consumer' ? 0.6 : undefined,
            cursor: 'pointer'
          }}
        />

        {/* Producer Surplus area */}
        <motion.polygon
          points={getCurrentPS()}
          fill={producerSurplusColor}
          variants={areaVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          onMouseEnter={() => setHoveredArea('producer')}
          onMouseLeave={() => setHoveredArea(null)}
          style={{ 
            opacity: hoveredArea === 'producer' ? 0.6 : undefined,
            cursor: 'pointer'
          }}
        />

        {/* Axes */}
        <defs>
          <marker id="arrowhead-world" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 10} y2={margin.top + chartHeight}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-world)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-world)"
        />

        {/* Axis labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle">
          Quantity (Q)
        </text>
        <text x={margin.left - 45} y={margin.top + chartHeight / 2} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle" transform={`rotate(-90, ${margin.left - 45}, ${margin.top + chartHeight / 2})`}>
          Price (£)
        </text>
        <text x={margin.left - 10} y={margin.top + chartHeight + 18} fill={axisColor} fontSize="11">0</text>

        {/* Demand curve */}
        <motion.path
          d={demandPath}
          fill="none"
          stroke={demandColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(92)} 
          y={yScale(2)} 
          fill={demandColor} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          D
        </motion.text>

        {/* Supply curve */}
        <motion.path
          d={supplyPath}
          fill="none"
          stroke={supplyColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        />
        <motion.text 
          x={xScale(92)} 
          y={yScale(98)} 
          fill={supplyColor} 
          fontSize="14" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          S
        </motion.text>

        {/* World Price Line (Pw) */}
        {scenario !== 'autarky' && (
          <>
            <motion.line
              x1={margin.left}
              y1={yScale(worldPrice)}
              x2={margin.left + chartWidth}
              y2={yScale(worldPrice)}
              stroke={worldPriceColor}
              strokeWidth="2.5"
              strokeDasharray="8,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.text
              x={margin.left + chartWidth + 8}
              y={yScale(worldPrice) + 5}
              fill={worldPriceColor}
              fontSize="13"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              Pw
            </motion.text>
            <motion.text
              x={margin.left - 16}
              y={yScale(worldPrice) + 5}
              fill={worldPriceColor}
              fontSize="12"
              fontWeight="600"
              textAnchor="end"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              Pw
            </motion.text>
          </>
        )}

        {/* Domestic equilibrium point (autarky) */}
        {scenario === 'autarky' && (
          <>
            <motion.circle
              cx={xScale(domesticEq.x)}
              cy={yScale(domesticEq.y)}
              r="7"
              fill={worldPriceColor}
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1, type: "spring" }}
            />
            <motion.text 
              x={xScale(domesticEq.x) + 14} 
              y={yScale(domesticEq.y) - 8} 
              fill={worldPriceColor} 
              fontSize="13" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1 }}
            >
              E
            </motion.text>
            <motion.line
              x1={margin.left}
              y1={yScale(domesticEq.y)}
              x2={xScale(domesticEq.x)}
              y2={yScale(domesticEq.y)}
              stroke={worldPriceColor}
              strokeWidth="1.5"
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            />
            <motion.line
              x1={xScale(domesticEq.x)}
              y1={yScale(domesticEq.y)}
              x2={xScale(domesticEq.x)}
              y2={margin.top + chartHeight}
              stroke={worldPriceColor}
              strokeWidth="1.5"
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            />
            <motion.text 
              x={margin.left - 16} 
              y={yScale(domesticEq.y) + 5} 
              fill={worldPriceColor} 
              fontSize="12"
              fontWeight="600"
              textAnchor="end"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              Pe
            </motion.text>
            <motion.text 
              x={xScale(domesticEq.x)} 
              y={margin.top + chartHeight + 18} 
              fill={worldPriceColor} 
              fontSize="12" 
              textAnchor="middle"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              Qe
            </motion.text>
          </>
        )}

        {/* Free Trade quantity markers */}
        {scenario === 'free-trade' && (
          <>
            {/* Qs - Quantity supplied domestically */}
            <motion.line
              x1={xScale(qSupplyAtPw)}
              y1={yScale(worldPrice)}
              x2={xScale(qSupplyAtPw)}
              y2={margin.top + chartHeight}
              stroke={supplyColor}
              strokeWidth="1.5"
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            />
            <motion.text 
              x={xScale(qSupplyAtPw)} 
              y={margin.top + chartHeight + 18} 
              fill={supplyColor} 
              fontSize="11" 
              textAnchor="middle"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.5 }}
            >
              Qs
            </motion.text>

            {/* Qd - Quantity demanded */}
            <motion.line
              x1={xScale(qDemandAtPw)}
              y1={yScale(worldPrice)}
              x2={xScale(qDemandAtPw)}
              y2={margin.top + chartHeight}
              stroke={demandColor}
              strokeWidth="1.5"
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            />
            <motion.text 
              x={xScale(qDemandAtPw)} 
              y={margin.top + chartHeight + 18} 
              fill={demandColor} 
              fontSize="11" 
              textAnchor="middle"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.5 }}
            >
              Qd
            </motion.text>

            {/* Imports bracket */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.8 }}
            >
              <line
                x1={xScale(qSupplyAtPw)}
                y1={yScale(worldPrice) - 12}
                x2={xScale(qDemandAtPw)}
                y2={yScale(worldPrice) - 12}
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1={xScale(qSupplyAtPw)}
                y1={yScale(worldPrice) - 8}
                x2={xScale(qSupplyAtPw)}
                y2={yScale(worldPrice) - 16}
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1={xScale(qDemandAtPw)}
                y1={yScale(worldPrice) - 8}
                x2={xScale(qDemandAtPw)}
                y2={yScale(worldPrice) - 16}
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={xScale((qSupplyAtPw + qDemandAtPw) / 2)}
                y={yScale(worldPrice) - 20}
                fill="white"
                fontSize="11"
                fontWeight="600"
                textAnchor="middle"
              >
                Imports
              </text>
            </motion.g>
          </>
        )}

        {/* Surplus labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.6 }}
        >
          <text
            x={xScale(scenario === 'autarky' ? 12 : 18)}
            y={yScale(scenario === 'autarky' ? 68 : 58)}
            fill="white"
            fontSize="10"
            fontWeight="600"
          >
            Consumer
          </text>
          <text
            x={xScale(scenario === 'autarky' ? 12 : 18)}
            y={yScale(scenario === 'autarky' ? 63 : 53)}
            fill="white"
            fontSize="10"
            fontWeight="600"
          >
            Surplus
          </text>
          <text
            x={xScale(scenario === 'autarky' ? 12 : 8)}
            y={yScale(scenario === 'autarky' ? 35 : 22)}
            fill="white"
            fontSize="10"
            fontWeight="600"
          >
            Producer
          </text>
          <text
            x={xScale(scenario === 'autarky' ? 12 : 8)}
            y={yScale(scenario === 'autarky' ? 30 : 17)}
            fill="white"
            fontSize="10"
            fontWeight="600"
          >
            Surplus
          </text>
        </motion.g>
      </svg>

      {/* Scenario Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: consumerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">CS: Above price, below D</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: producerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">PS: Below price, above S</span>
        </div>
        {scenario !== 'autarky' && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5" style={{ backgroundColor: worldPriceColor }} />
            <span className="text-muted-foreground">World Price (Pw)</span>
          </div>
        )}
      </div>

      {/* Chain of Analysis */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Chain of Analysis:</strong> {getScenarioDescription()}
        </p>
      </div>

      {/* Interactive tooltip */}
      {hoveredArea && (
        <motion.div 
          className="mt-4 p-3 glass-card rounded-lg text-center"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {hoveredArea === 'consumer' && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-cyan-400">Consumer Surplus</strong> = Area between demand curve and the prevailing price. 
              Under free trade, CS expands significantly as consumers pay the lower world price.
            </p>
          )}
          {hoveredArea === 'producer' && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-amber-400">Producer Surplus</strong> = Area between the supply curve and the prevailing price.
              Under free trade, PS contracts as domestic producers must compete at the lower world price.
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default WelfareWithWorldPriceDiagram;
