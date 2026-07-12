import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface PPCShiftsDiagramProps {
  type: 'parallel' | 'pivotal';
  title?: string;
}

const PPCShiftsDiagram = ({ type, title }: PPCShiftsDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showShift, setShowShift] = useState(false);
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

    return => observer.disconnect();
  }, []);

  const width = 400;
  const height = 320;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Original PPC curve points
  const originalCurve = `M ${margin.left} ${margin.top + 20} 
    Q ${margin.left + chartWidth * 0.5} ${margin.top + chartHeight * 0.15}, 
      ${margin.left + chartWidth - 20} ${margin.top + chartHeight}`;

  // Parallel shift: entire curve moves outward equally
  const parallelShiftCurve = `M ${margin.left} ${margin.top - 10} 
    Q ${margin.left + chartWidth * 0.55} ${margin.top + chartHeight * 0.05}, 
      ${margin.left + chartWidth + 10} ${margin.top + chartHeight}`;

  // Pivotal shift: only Y-axis maximum increases (agricultural breakthrough)
  const pivotalShiftCurve = `M ${margin.left} ${margin.top - 30} 
    Q ${margin.left + chartWidth * 0.45} ${margin.top + chartHeight * 0.1}, 
      ${margin.left + chartWidth - 20} ${margin.top + chartHeight}`;

  const shiftedCurve = type === 'parallel' ? parallelShiftCurve : pivotalShiftCurve;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  const shiftCurveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h4 className="text-center text-lg font-semibold text-silver-bright mb-4">{title}</h4>
      )}
      
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowShift(!showShift)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            showShift 
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
              : 'bg-muted/50 text-muted-foreground border border-muted hover:bg-primary/10'
          }`}
        >
          {showShift ? 'Hide Shift' : `Show ${type === 'parallel' ? 'Parallel' : 'Pivotal'} Shift`}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
        <defs>
          <linearGradient id={`originalGradient-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215 20.2% 65.1%)" />
            <stop offset="100%" stopColor="hsl(215 13.8% 34.1%)" />
          </linearGradient>
          <linearGradient id={`shiftGradient-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(183 100% 50%)" />
            <stop offset="100%" stopColor="hsl(183 100% 35%)" />
          </linearGradient>
          <marker
            id={`arrowhead-${type}`}
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
          markerEnd={`url(#arrowhead-${type})`}
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
          markerEnd={`url(#arrowhead-${type})`}
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Axis labels */}
        <motion.text
          x={margin.left + chartWidth / 2}
          y={height - 15}
          textAnchor="middle"
          fill="hsl(215 20.2% 65.1%)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Manufactured Goods
        </motion.text>
        <motion.text
          x={15}
          y={margin.top + chartHeight / 2}
          textAnchor="middle"
          fill="hsl(215 20.2% 65.1%)"
          fontSize="12"
          fontWeight="500"
          transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Agricultural Goods
        </motion.text>

        {/* Original PPC curve */}
        <motion.path
          d={originalCurve}
          fill="none"
          stroke={`url(#originalGradient-${type})`}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />

        {/* PPC 1 Label */}
        <motion.text
          x={margin.left + chartWidth - 50}
          y={margin.top + chartHeight - 30}
          fill="hsl(215 20.2% 65.1%)"
          fontSize="14"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
        >
          PPC₁
        </motion.text>

        {/* Shifted PPC curve */}
        {showShift && (
          <>
            <motion.path
              d={shiftedCurve}
              fill="none"
              stroke={`url(#shiftGradient-${type})`}
              strokeWidth="3"
              variants={shiftCurveVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* PPC 2 Label */}
            <motion.text
              x={type === 'parallel' ? margin.left + chartWidth - 20 : margin.left + 30}
              y={type === 'parallel' ? margin.top + chartHeight - 50 : margin.top + 10}
              fill="hsl(183 100% 50%)"
              fontSize="14"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              PPC₂
            </motion.text>

            {/* Shift arrows */}
            <motion.path
              d={type === 'parallel' 
                ? `M ${margin.left + chartWidth * 0.4} ${margin.top + chartHeight * 0.35} 
                   L ${margin.left + chartWidth * 0.5} ${margin.top + chartHeight * 0.2}`
                : `M ${margin.left + 15} ${margin.top + 40} 
                   L ${margin.left + 15} ${margin.top}`
              }
              stroke="hsl(183 100% 50%)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              markerEnd={`url(#arrowhead-${type})`}
            />
          </>
        )}

        {/* Origin label */}
        <motion.text
          x={margin.left - 15}
          y={margin.top + chartHeight + 20}
          fill="hsl(215 20.2% 65.1%)"
          fontSize="12"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          O
        </motion.text>
      </svg>

      {/* Explanation */}
      <motion.div
        className="mt-4 p-4 rounded-lg bg-muted/30 border border-silver/10"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.8 }}
      >
        {type === 'parallel' ? (
          <div>
            <h5 className="font-semibold text-silver-bright mb-2">Parallel Shift of PPC</h5>
            <p className="text-sm text-muted-foreground">
              A <strong>parallel shift</strong> occurs when the increase in quantity and quality of resources 
              is <strong>equally suitable for both goods</strong>. The entire PPC moves outward proportionally, 
              indicating that the economy can now produce more of both goods.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Causes:</strong> General technological advancement, increase in labor force, 
              discovery of new resources that benefit all sectors equally.
            </p>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold text-silver-bright mb-2">Pivotal Shift of PPC</h5>
            <p className="text-sm text-muted-foreground">
              A <strong>pivotal shift</strong> occurs when the change in quantity and quality of resources 
              <strong> affects only one good</strong> or affects one good more than the other. 
              The PPC pivots from one axis while remaining fixed at the other.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Example:</strong> A genetic breakthrough in production of wheat, rice or cotton 
              will increase only the agricultural capacity of a country, causing a pivotal shift 
              along the Agricultural Goods axis.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PPCShiftsDiagram;
