import { motion } from 'framer-motion';
import { useState } from 'react';

interface ConsumerProducerSurplusDiagramNewProps {
  title?: string;
  showSurplus?: 'both' | 'consumer' | 'producer' | 'none';
}

const ConsumerProducerSurplusDiagramNew = ({ 
  title = "Consumer and Producer Surplus", 
  showSurplus = 'both' 
}: ConsumerProducerSurplusDiagramNewProps) => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  
  // SVG dimensions
  const width = 400;
  const height = 320;
  const padding = 50;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;
  
  // Colors
  const demandColor = '#00E5FF';
  const supplyColor = '#FF4081';
  const consumerSurplusColor = '#00BCD4';
  const producerSurplusColor = '#E91E63';
  const equilibriumColor = '#FFD700';
  const axisColor = '#94A3B8';
  const gridColor = '#334155';

  // Key points
  const eq = { x: padding + graphWidth * 0.5, y: padding + graphHeight * 0.5 };
  const demandIntercept = { x: padding, y: padding + 30 };
  const supplyIntercept = { x: padding, y: padding + graphHeight - 30 };

  // Surplus polygons
  const consumerSurplusPath = `
    M ${padding} ${demandIntercept.y}
    L ${eq.x} ${eq.y}
    L ${padding} ${eq.y}
    Z
  `;

  const producerSurplusPath = `
    M ${padding} ${supplyIntercept.y}
    L ${eq.x} ${eq.y}
    L ${padding} ${eq.y}
    Z
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
      opacity: 0.35,
      transition: { delay: 1.2, duration: 0.6 }
    }
  };

  return (
    <div className="w-full">
      {title && (
        <h4 className="text-center text-silver-bright font-serif text-lg mb-4">{title}</h4>
      )}
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full max-w-md mx-auto"
        style={{ minHeight: '320px' }}
      >
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <g key={`grid-${i}`}>
            <line 
              x1={padding} 
              y1={padding + (graphHeight / 5) * (i + 1)} 
              x2={padding + graphWidth} 
              y2={padding + (graphHeight / 5) * (i + 1)}
              stroke={gridColor}
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
            <line 
              x1={padding + (graphWidth / 5) * (i + 1)} 
              y1={padding} 
              x2={padding + (graphWidth / 5) * (i + 1)} 
              y2={padding + graphHeight}
              stroke={gridColor}
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
          </g>
        ))}

        {/* Surplus areas */}
        {(showSurplus === 'both' || showSurplus === 'consumer') && (
          <motion.path
            d={consumerSurplusPath}
            fill={consumerSurplusColor}
            variants={areaVariants}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => setHoveredArea('consumer')}
            onMouseLeave={() => setHoveredArea(null)}
            style={{ 
              opacity: hoveredArea === 'consumer' ? 0.6 : undefined,
              cursor: 'pointer'
            }}
          />
        )}

        {(showSurplus === 'both' || showSurplus === 'producer') && (
          <motion.path
            d={producerSurplusPath}
            fill={producerSurplusColor}
            variants={areaVariants}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => setHoveredArea('producer')}
            onMouseLeave={() => setHoveredArea(null)}
            style={{ 
              opacity: hoveredArea === 'producer' ? 0.6 : undefined,
              cursor: 'pointer'
            }}
          />
        )}

        {/* Axes */}
        <defs>
          <marker id="arrowhead-surplus" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding + graphWidth + 10} y2={padding + graphHeight}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-surplus)"
        />
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding} y2={padding - 10}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-surplus)"
        />

        {/* Axis labels */}
        <text x={padding + graphWidth + 15} y={padding + graphHeight + 5} fill={axisColor} fontSize="14" fontWeight="600">Q</text>
        <text x={padding - 5} y={padding - 15} fill={axisColor} fontSize="14" fontWeight="600" textAnchor="middle">P</text>
        <text x={padding - 8} y={padding + graphHeight + 15} fill={axisColor} fontSize="12">0</text>

        {/* Demand curve */}
        <motion.line
          x1={padding + 10}
          y1={demandIntercept.y}
          x2={padding + graphWidth - 20}
          y2={padding + graphHeight - 40}
          stroke={demandColor}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={padding + graphWidth - 10} y={padding + graphHeight - 30} fill={demandColor} fontSize="14" fontWeight="600">D</text>

        {/* Supply curve */}
        <motion.line
          x1={padding + 10}
          y1={supplyIntercept.y}
          x2={padding + graphWidth - 20}
          y2={padding + 40}
          stroke={supplyColor}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={padding + graphWidth - 10} y={padding + 50} fill={supplyColor} fontSize="14" fontWeight="600">S</text>

        {/* Equilibrium point */}
        <motion.circle
          cx={eq.x}
          cy={eq.y}
          r="6"
          fill={equilibriumColor}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
        <text x={eq.x + 12} y={eq.y - 8} fill={equilibriumColor} fontSize="12" fontWeight="600">E</text>

        {/* Dashed lines to axes */}
        <motion.line
          x1={eq.x} y1={eq.y}
          x2={eq.x} y2={padding + graphHeight}
          stroke={equilibriumColor}
          strokeWidth="1.5"
          strokeDasharray="5,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        <motion.line
          x1={eq.x} y1={eq.y}
          x2={padding} y2={eq.y}
          stroke={equilibriumColor}
          strokeWidth="1.5"
          strokeDasharray="5,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        
        {/* Equilibrium labels */}
        <text x={eq.x} y={padding + graphHeight + 18} fill={equilibriumColor} fontSize="11" textAnchor="middle">Q*</text>
        <text x={padding - 18} y={eq.y + 4} fill={equilibriumColor} fontSize="11">P*</text>

        {/* Surplus labels */}
        {(showSurplus === 'both' || showSurplus === 'consumer') && (
          <motion.text
            x={padding + graphWidth * 0.15}
            y={eq.y - 30}
            fill="#ffffff"
            fontSize="11"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Consumer
          </motion.text>
        )}
        {(showSurplus === 'both' || showSurplus === 'consumer') && (
          <motion.text
            x={padding + graphWidth * 0.15}
            y={eq.y - 18}
            fill="#ffffff"
            fontSize="11"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Surplus
          </motion.text>
        )}

        {(showSurplus === 'both' || showSurplus === 'producer') && (
          <motion.text
            x={padding + graphWidth * 0.15}
            y={eq.y + 25}
            fill="#ffffff"
            fontSize="11"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Producer
          </motion.text>
        )}
        {(showSurplus === 'both' || showSurplus === 'producer') && (
          <motion.text
            x={padding + graphWidth * 0.15}
            y={eq.y + 37}
            fill="#ffffff"
            fontSize="11"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Surplus
          </motion.text>
        )}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: consumerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">Consumer Surplus</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: producerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">Producer Surplus</span>
        </div>
      </div>

      {/* Interactive tooltip */}
      {hoveredArea && (
        <div className="mt-4 p-3 glass-card rounded-lg text-center">
          {hoveredArea === 'consumer' && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-cyan-400">Consumer Surplus</strong> = Difference between what consumers are willing to pay and what they actually pay
            </p>
          )}
          {hoveredArea === 'producer' && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-pink-400">Producer Surplus</strong> = Difference between the market price and the minimum price producers would accept
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ConsumerProducerSurplusDiagramNew;
