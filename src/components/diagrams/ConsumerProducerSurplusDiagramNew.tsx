import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface ConsumerProducerSurplusDiagramNewProps {
  title?: string;
  showSurplus?: 'both' | 'consumer' | 'producer' | 'none';
}

/**
 * Cambridge 9708 Accurate Consumer/Producer Surplus Diagram
 * - Consumer Surplus: Area ABOVE equilibrium price, BELOW demand curve
 * - Producer Surplus: Area BELOW equilibrium price, ABOVE supply curve
 * - Proper triangular shading with accurate labels
 */
const ConsumerProducerSurplusDiagramNew = ({ 
  title = "Consumer and Producer Surplus", 
  showSurplus = 'both' 
}: ConsumerProducerSurplusDiagramNewProps) => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

    return () => observer.disconnect();
  }, []);
  
  // SVG dimensions
  const width = 450;
  const height = 380;
  const margin = { top: 40, right: 50, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // Colors
  const demandColor = 'hsl(185, 100%, 50%)';
  const supplyColor = 'hsl(300, 100%, 60%)';
  const consumerSurplusColor = 'hsl(185, 100%, 45%)';
  const producerSurplusColor = 'hsl(300, 100%, 50%)';
  const equilibriumColor = 'hsl(45, 93%, 55%)';
  const axisColor = 'hsl(220, 14%, 75%)';
  const gridColor = 'hsl(220, 14%, 20%)';

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Key points
  const demandIntercept = { x: 0, y: 90 }; // Demand curve starts at P=90
  const supplyIntercept = { x: 0, y: 10 };  // Supply curve starts at P=10
  const equilibrium = { x: 50, y: 50 };     // Equilibrium at Pe=50, Qe=50

  // Demand curve: from (0, 90) to (90, 0) - downward sloping
  const demandPath = `M ${xScale(0)} ${yScale(demandIntercept.y)} L ${xScale(90)} ${yScale(0)}`;
  
  // Supply curve: from (0, 10) to (90, 100) - upward sloping
  const supplyPath = `M ${xScale(0)} ${yScale(supplyIntercept.y)} L ${xScale(90)} ${yScale(100)}`;

  // Consumer Surplus Triangle: (0, Pe) -> (Qe, Pe) -> (0, demand intercept) 
  // Area ABOVE price, BELOW demand curve
  const consumerSurplusPath = `
    M ${xScale(0)} ${yScale(equilibrium.y)}
    L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
    L ${xScale(0)} ${yScale(demandIntercept.y)}
    Z
  `;

  // Producer Surplus Triangle: (0, supply intercept) -> (Qe, Pe) -> (0, Pe)
  // Area BELOW price, ABOVE supply curve
  const producerSurplusPath = `
    M ${xScale(0)} ${yScale(supplyIntercept.y)}
    L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
    L ${xScale(0)} ${yScale(equilibrium.y)}
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
    <div ref={containerRef} className="w-full">
      {title && (
        <h4 className="text-center text-silver-bright font-serif text-lg mb-4">{title}</h4>
      )}
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full max-w-lg mx-auto"
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

        {/* Consumer Surplus area - ABOVE Pe, BELOW D */}
        {(showSurplus === 'both' || showSurplus === 'consumer') && (
          <motion.path
            d={consumerSurplusPath}
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
        )}

        {/* Producer Surplus area - BELOW Pe, ABOVE S */}
        {(showSurplus === 'both' || showSurplus === 'producer') && (
          <motion.path
            d={producerSurplusPath}
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
        )}

        {/* Axes */}
        <defs>
          <marker id="arrowhead-surplus" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth} y2={margin.top + chartHeight}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-surplus)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 10}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-surplus)"
        />

        {/* Axis labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle">
          Quantity (Q)
        </text>
        <text x={margin.left - 40} y={margin.top + chartHeight / 2} fill={axisColor} fontSize="14" fontFamily="serif" textAnchor="middle" transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`}>
          Price (P)
        </text>
        <text x={margin.left - 8} y={margin.top + chartHeight + 16} fill={axisColor} fontSize="11">0</text>

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
          x={xScale(88)} 
          y={yScale(0) + 18} 
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
          x={xScale(88)} 
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

        {/* Equilibrium point */}
        <motion.circle
          cx={xScale(equilibrium.x)}
          cy={yScale(equilibrium.y)}
          r="7"
          fill={equilibriumColor}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 1, type: "spring" }}
        />
        <motion.text 
          x={xScale(equilibrium.x) + 14} 
          y={yScale(equilibrium.y) - 8} 
          fill={equilibriumColor} 
          fontSize="13" 
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1 }}
        >
          E
        </motion.text>

        {/* Dashed lines to axes */}
        <motion.line
          x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)}
          x2={xScale(equilibrium.x)} y2={margin.top + chartHeight}
          stroke={equilibriumColor}
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        <motion.line
          x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)}
          x2={margin.left} y2={yScale(equilibrium.y)}
          stroke={equilibriumColor}
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        
        {/* Equilibrium labels */}
        <motion.text 
          x={xScale(equilibrium.x)} 
          y={margin.top + chartHeight + 18} 
          fill={equilibriumColor} 
          fontSize="12" 
          textAnchor="middle"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
        >
          Qe
        </motion.text>
        <motion.text 
          x={margin.left - 14} 
          y={yScale(equilibrium.y) + 4} 
          fill={equilibriumColor} 
          fontSize="12"
          fontWeight="600"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
        >
          Pe
        </motion.text>

        {/* Surplus labels inside triangles */}
        {(showSurplus === 'both' || showSurplus === 'consumer') && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.6 }}
          >
            <text
              x={xScale(15)}
              y={yScale(65)}
              fill="white"
              fontSize="11"
              fontWeight="600"
            >
              Consumer
            </text>
            <text
              x={xScale(15)}
              y={yScale(60)}
              fill="white"
              fontSize="11"
              fontWeight="600"
            >
              Surplus
            </text>
          </motion.g>
        )}

        {(showSurplus === 'both' || showSurplus === 'producer') && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.6 }}
          >
            <text
              x={xScale(15)}
              y={yScale(35)}
              fill="white"
              fontSize="11"
              fontWeight="600"
            >
              Producer
            </text>
            <text
              x={xScale(15)}
              y={yScale(30)}
              fill="white"
              fontSize="11"
              fontWeight="600"
            >
              Surplus
            </text>
          </motion.g>
        )}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: consumerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">Consumer Surplus (above Pe)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: producerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">Producer Surplus (below Pe)</span>
        </div>
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
              <strong className="text-cyan-400">Consumer Surplus</strong> = Difference between what consumers are <em>willing to pay</em> (on the demand curve) and what they <em>actually pay</em> (equilibrium price). Area = ½ × base × height.
            </p>
          )}
          {hoveredArea === 'producer' && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-pink-400">Producer Surplus</strong> = Difference between the <em>market price received</em> and the <em>minimum price</em> producers would accept (on the supply curve). Area = ½ × base × height.
            </p>
          )}
        </motion.div>
      )}

      {/* Cambridge Key */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Cambridge Definition:</strong> At equilibrium, total welfare (social surplus) = CS + PS. 
          Any deviation from equilibrium creates <strong>deadweight loss</strong> and reduces allocative efficiency.
        </p>
      </div>
    </div>
  );
};

export default ConsumerProducerSurplusDiagramNew;
