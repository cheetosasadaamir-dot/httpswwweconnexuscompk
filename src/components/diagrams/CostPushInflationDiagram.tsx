import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CostPushInflationDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showShift, setShowShift] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const width = 450, height = 320;
  const margin = { top: 40, right: 30, bottom: 50, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // SRAS curves
  const sras1Path = `M ${margin.left + 30},${margin.top + chartHeight - 30} Q ${margin.left + 150},${margin.top + chartHeight - 100} ${margin.left + chartWidth - 30},${margin.top + 30}`;
  const sras2Path = `M ${margin.left + 30},${margin.top + chartHeight - 80} Q ${margin.left + 120},${margin.top + chartHeight - 150} ${margin.left + chartWidth - 60},${margin.top + 20}`;
  
  // AD curve
  const adPath = `M ${margin.left + 40},${margin.top + 30} Q ${margin.left + 180},${margin.top + 120} ${margin.left + chartWidth - 40},${margin.top + chartHeight - 30}`;

  return (
    <div ref={containerRef} className="glass-card p-4 my-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-serif text-lg text-gradient">Cost-Push Inflation</h3>
        <button
          onClick={() => setShowShift(!showShift)}
          className="px-3 py-1 text-xs rounded-full border border-primary/30 hover:bg-primary/10 transition-all"
        >
          {showShift ? 'Hide' : 'Show'} AS Shift
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
        <defs>
          <marker id="arrow-cp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--foreground))" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-cp)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-cp)" />
        
        <text x={margin.left + chartWidth / 2} y={height - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">Real GDP (Y)</text>
        <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Price Level (P)</text>

        {/* AD Curve */}
        <motion.path
          d={adPath}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8 }}
        />
        <text x={margin.left + chartWidth - 30} y={margin.top + chartHeight - 15} fill="hsl(var(--primary))" fontSize="11" fontWeight="600">AD</text>

        {/* SRAS1 */}
        <motion.path
          d={sras1Path}
          fill="none"
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <text x={margin.left + chartWidth - 15} y={margin.top + 45} fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="600">SRAS₁</text>

        {/* SRAS2 - shifted left */}
        {showShift && (
          <>
            <motion.path
              d={sras2Path}
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
            />
            <text x={margin.left + chartWidth - 55} y={margin.top + 35} fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">SRAS₂</text>
            
            {/* Shift arrow */}
            <motion.path
              d={`M ${margin.left + 200} ${margin.top + 100} L ${margin.left + 160} ${margin.top + 70}`}
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
              markerEnd="url(#arrow-cp)"
              strokeDasharray="4,2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </>
        )}

        {/* Price level lines */}
        <motion.line
          x1={margin.left}
          y1={margin.top + chartHeight - 100}
          x2={margin.left + 170}
          y2={margin.top + chartHeight - 100}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 0.6 }}
        />
        <text x={margin.left - 8} y={margin.top + chartHeight - 97} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="9">P₁</text>

        {showShift && (
          <>
            <motion.line
              x1={margin.left}
              y1={margin.top + chartHeight - 145}
              x2={margin.left + 130}
              y2={margin.top + chartHeight - 145}
              stroke="hsl(var(--destructive))"
              strokeWidth="1"
              strokeDasharray="4,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.4 }}
            />
            <text x={margin.left - 8} y={margin.top + chartHeight - 142} textAnchor="end" fill="hsl(var(--destructive))" fontSize="9">P₂</text>
          </>
        )}

        {/* Output lines */}
        <motion.line
          x1={margin.left + 170}
          y1={margin.top + chartHeight}
          x2={margin.left + 170}
          y2={margin.top + chartHeight - 100}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 0.7 }}
        />
        <text x={margin.left + 170} y={margin.top + chartHeight + 12} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Y₁</text>

        {showShift && (
          <>
            <motion.line
              x1={margin.left + 130}
              y1={margin.top + chartHeight}
              x2={margin.left + 130}
              y2={margin.top + chartHeight - 145}
              stroke="hsl(var(--destructive))"
              strokeWidth="1"
              strokeDasharray="4,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 }}
            />
            <text x={margin.left + 130} y={margin.top + chartHeight + 12} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9">Y₂</text>
          </>
        )}

        {/* Equilibrium points */}
        <motion.circle
          cx={margin.left + 170}
          cy={margin.top + chartHeight - 100}
          r="5"
          fill="hsl(var(--cambridge-orange))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 0.8 }}
        />
        <text x={margin.left + 178} y={margin.top + chartHeight - 108} fill="hsl(var(--foreground))" fontSize="9">E₁</text>

        {showShift && (
          <>
            <motion.circle
              cx={margin.left + 130}
              cy={margin.top + chartHeight - 145}
              r="5"
              fill="hsl(var(--destructive))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            />
            <text x={margin.left + 138} y={margin.top + chartHeight - 153} fill="hsl(var(--foreground))" fontSize="9">E₂</text>
          </>
        )}
      </svg>

      <div className="mt-2 p-3 bg-muted/30 rounded-lg">
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground">Cost-Push Inflation:</strong> {showShift 
            ? 'Rising production costs (wages, raw materials, oil) shift SRAS left from SRAS₁ to SRAS₂. This causes higher prices (P₁→P₂) AND lower output (Y₁→Y₂)—a situation called stagflation.'
            : 'Click "Show AS Shift" to see how rising production costs cause the aggregate supply curve to shift left, leading to higher prices and lower real output.'}
        </p>
      </div>
    </div>
  );
};

export default CostPushInflationDiagram;