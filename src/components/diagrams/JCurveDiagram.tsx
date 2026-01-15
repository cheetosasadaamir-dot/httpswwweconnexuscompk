import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const JCurveDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const width = 500, height = 320;
  const margin = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const baselineY = margin.top + chartHeight / 2;

  return (
    <div ref={containerRef} className="glass-card p-4 my-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-serif text-lg text-gradient">The J-Curve Effect</h3>
        <button
          onClick={() => setShowAnnotations(!showAnnotations)}
          className="px-3 py-1 text-xs rounded-full border border-primary/30 hover:bg-primary/10 transition-all"
        >
          {showAnnotations ? 'Hide' : 'Show'} Annotations
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        <defs>
          <marker id="arrow-j" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
          </marker>
          <linearGradient id="jcurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--destructive))" />
            <stop offset="40%" stopColor="hsl(var(--destructive))" />
            <stop offset="60%" stopColor="hsl(var(--cambridge-cyan))" />
            <stop offset="100%" stopColor="hsl(var(--cambridge-green))" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-j)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-j)" />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">Time</text>
        <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Trade Balance (X - M)</text>

        {/* Zero line / baseline */}
        <motion.line
          x1={margin.left}
          y1={baselineY}
          x2={margin.left + chartWidth}
          y2={baselineY}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        <text x={margin.left - 10} y={baselineY + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">0</text>

        {/* Surplus/Deficit Labels */}
        <text x={margin.left + 15} y={margin.top + 20} fill="hsl(var(--cambridge-green))" fontSize="10" fontWeight="600">Surplus</text>
        <text x={margin.left + 15} y={margin.top + chartHeight - 10} fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">Deficit</text>

        {/* Depreciation marker */}
        <motion.line
          x1={margin.left + 60}
          y1={margin.top}
          x2={margin.left + 60}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 0.3 }}
        />
        <text x={margin.left + 60} y={margin.top - 5} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">Depreciation</text>

        {/* J-Curve Path */}
        <motion.path
          d={`M ${margin.left + 60} ${baselineY - 20} 
              Q ${margin.left + 120} ${baselineY + 80}, ${margin.left + 180} ${baselineY + 60}
              Q ${margin.left + 280} ${baselineY - 20}, ${margin.left + chartWidth - 20} ${baselineY - 80}`}
          fill="none"
          stroke="url(#jcurveGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Starting point */}
        <motion.circle
          cx={margin.left + 60}
          cy={baselineY - 20}
          r="5"
          fill="hsl(var(--foreground))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 0.6 }}
        />

        {/* Annotations */}
        {showAnnotations && (
          <>
            {/* Short-run annotation */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <rect x={margin.left + 80} y={baselineY + 50} width="90" height="40" rx="4" fill="hsl(var(--destructive))" opacity="0.15" />
              <text x={margin.left + 125} y={baselineY + 68} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="600">Short-Run:</text>
              <text x={margin.left + 125} y={baselineY + 80} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8">Inelastic Demand</text>
            </motion.g>

            {/* Long-run annotation */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <rect x={margin.left + chartWidth - 120} y={baselineY - 100} width="100" height="40" rx="4" fill="hsl(var(--cambridge-green))" opacity="0.15" />
              <text x={margin.left + chartWidth - 70} y={baselineY - 82} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="600">Long-Run:</text>
              <text x={margin.left + chartWidth - 70} y={baselineY - 70} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="8">Elastic Demand</text>
            </motion.g>

            {/* Trough annotation */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <line x1={margin.left + 150} y1={baselineY + 65} x2={margin.left + 150} y2={baselineY + 30} stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <text x={margin.left + 150} y={baselineY + 78} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Trough</text>
            </motion.g>
          </>
        )}
      </svg>

      <div className="mt-3 p-3 bg-muted/30 rounded-lg">
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground">The J-Curve Effect:</strong> Following a depreciation, the trade balance initially worsens (short-run) because demand for imports and exports is inelastic—contracts are fixed and consumers take time to adjust. Over time (long-run), as demand becomes more elastic, exports rise and imports fall, improving the trade balance.
        </p>
      </div>
    </div>
  );
};

export default JCurveDiagram;
