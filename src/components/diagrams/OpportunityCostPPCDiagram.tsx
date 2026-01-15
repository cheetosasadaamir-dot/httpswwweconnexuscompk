import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface OpportunityCostPPCDiagramProps {
  type: 'increasing' | 'constant';
  title?: string;
}

const OpportunityCostPPCDiagram = ({ type, title }: OpportunityCostPPCDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const width = 360;
  const height = 300;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Concave curve for increasing opportunity cost
  const concaveCurve = `M ${margin.left} ${margin.top + 10} 
    Q ${margin.left + chartWidth * 0.3} ${margin.top + chartHeight * 0.4}, 
      ${margin.left + chartWidth * 0.5} ${margin.top + chartHeight * 0.7}
    Q ${margin.left + chartWidth * 0.7} ${margin.top + chartHeight * 0.9}, 
      ${margin.left + chartWidth - 10} ${margin.top + chartHeight}`;

  // Straight line for constant opportunity cost
  const straightLine = `M ${margin.left} ${margin.top + 10} 
    L ${margin.left + chartWidth - 10} ${margin.top + chartHeight}`;

  const curve = type === 'increasing' ? concaveCurve : straightLine;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  const pointVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 }
    }
  };

  // Points along the curve for illustration
  const pointsIncreasing = [
    { x: margin.left + 15, y: margin.top + 25, label: 'A₁' },
    { x: margin.left + chartWidth * 0.35, y: margin.top + chartHeight * 0.45, label: 'A₂' },
    { x: margin.left + chartWidth * 0.6, y: margin.top + chartHeight * 0.78, label: 'A₃' },
  ];

  const pointsConstant = [
    { x: margin.left + 20, y: margin.top + 25, label: 'B₁' },
    { x: margin.left + chartWidth * 0.5, y: margin.top + chartHeight * 0.5, label: 'B₂' },
    { x: margin.left + chartWidth - 30, y: margin.top + chartHeight - 15, label: 'B₃' },
  ];

  const points = type === 'increasing' ? pointsIncreasing : pointsConstant;

  const goodX = type === 'increasing' ? 'Computers' : 'Basketballs';
  const goodY = type === 'increasing' ? 'Microwave Ovens' : 'Volleyballs';

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h4 className="text-center text-lg font-semibold text-silver-bright mb-4">{title}</h4>
      )}
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm mx-auto">
        <defs>
          <linearGradient id={`curveGradient-opp-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={type === 'increasing' ? "hsl(183 100% 50%)" : "hsl(280 100% 70%)"} />
            <stop offset="100%" stopColor={type === 'increasing' ? "hsl(183 100% 35%)" : "hsl(280 100% 50%)"} />
          </linearGradient>
          <marker
            id={`arrowhead-opp-${type}`}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(215 20.2% 65.1%)" />
          </marker>
        </defs>

        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((ratio, i) => (
          <g key={i}>
            <line
              x1={margin.left}
              y1={margin.top + chartHeight * ratio}
              x2={margin.left + chartWidth}
              y2={margin.top + chartHeight * ratio}
              stroke="hsl(215 20.2% 25.1%)"
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
            <line
              x1={margin.left + chartWidth * ratio}
              y1={margin.top}
              x2={margin.left + chartWidth * ratio}
              y2={margin.top + chartHeight}
              stroke="hsl(215 20.2% 25.1%)"
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
          </g>
        ))}

        {/* Axes */}
        <motion.line
          x1={margin.left}
          y1={margin.top + chartHeight}
          x2={margin.left + chartWidth + 10}
          y2={margin.top + chartHeight}
          stroke="hsl(215 20.2% 65.1%)"
          strokeWidth="2"
          markerEnd={`url(#arrowhead-opp-${type})`}
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.line
          x1={margin.left}
          y1={margin.top + chartHeight}
          x2={margin.left}
          y2={margin.top - 10}
          stroke="hsl(215 20.2% 65.1%)"
          strokeWidth="2"
          markerEnd={`url(#arrowhead-opp-${type})`}
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Axis labels */}
        <motion.text
          x={margin.left + chartWidth / 2}
          y={height - 10}
          textAnchor="middle"
          fill="hsl(215 20.2% 65.1%)"
          fontSize="11"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          {goodX}
        </motion.text>
        <motion.text
          x={12}
          y={margin.top + chartHeight / 2}
          textAnchor="middle"
          fill="hsl(215 20.2% 65.1%)"
          fontSize="11"
          fontWeight="500"
          transform={`rotate(-90, 12, ${margin.top + chartHeight / 2})`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          {goodY}
        </motion.text>

        {/* PPC curve */}
        <motion.path
          d={curve}
          fill="none"
          stroke={`url(#curveGradient-opp-${type})`}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />

        {/* Points along curve */}
        {points.map((point, index) => (
          <motion.g key={index}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill={type === 'increasing' ? "hsl(183 100% 50%)" : "hsl(280 100% 70%)"}
              stroke="white"
              strokeWidth="2"
              variants={pointVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 1 + index * 0.2 }}
            />
            <motion.text
              x={point.x + 12}
              y={point.y + 4}
              fill={type === 'increasing' ? "hsl(183 100% 50%)" : "hsl(280 100% 70%)"}
              fontSize="12"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 + index * 0.2 }}
            >
              {point.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Origin label */}
        <motion.text
          x={margin.left - 15}
          y={margin.top + chartHeight + 18}
          fill="hsl(215 20.2% 65.1%)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          O
        </motion.text>

        {/* Curve type label */}
        <motion.text
          x={margin.left + chartWidth - 60}
          y={margin.top + chartHeight - 40}
          fill={type === 'increasing' ? "hsl(183 100% 50%)" : "hsl(280 100% 70%)"}
          fontSize="13"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          PPC
        </motion.text>
      </svg>

      {/* Explanation */}
      <motion.div
        className="mt-4 p-4 rounded-lg bg-muted/30 border border-silver/10"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.8 }}
      >
        {type === 'increasing' ? (
          <div>
            <h5 className="font-semibold text-silver-bright mb-2">Increasing Opportunity Cost (Concave PPC)</h5>
            <p className="text-sm text-muted-foreground">
              <strong>Increasing opportunity costs</strong> arise because factors of production are 
              <strong> specialized</strong> and not equally suited to producing different goods. 
              As production of computers increases, increasingly more microwave ovens must be sacrificed 
              for each additional unit.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Why?</strong> As production switches from microwave ovens to computers, 
              it is necessary to use factors of production that are less suited to computer production, 
              reducing efficiency and increasing the opportunity cost.
            </p>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold text-silver-bright mb-2">Constant Opportunity Cost (Linear PPC)</h5>
            <p className="text-sm text-muted-foreground">
              <strong>Constant opportunity costs</strong> arise when the factors of production are 
              <strong> equally well suited</strong> to producing both goods. The opportunity cost 
              (sacrifice) remains the same for each additional unit produced.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Example:</strong> Basketballs and volleyballs are very similar products, 
              requiring similarly specialized factors of production. Moving from one to the other 
              involves a constant rate of sacrifice.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default OpportunityCostPPCDiagram;
