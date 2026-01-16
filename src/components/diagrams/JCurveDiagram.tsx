import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const JCurveDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const width = 520, height = 340;
  const margin = { top: 45, right: 40, bottom: 55, left: 75 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const baselineY = margin.top + chartHeight / 2;

  // Time markers
  const timeMarkers = [
    { label: 't₀', x: margin.left + 60, desc: 'Depreciation' },
    { label: 't₁', x: margin.left + 150, desc: '6-12 months' },
    { label: 't₂', x: margin.left + 280, desc: '18-24 months' },
  ];

  return (
    <div ref={containerRef} className="glass-card p-4 my-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-serif text-lg text-gradient">The J-Curve Effect</h3>
        <button
          onClick={() => setShowAnnotations(!showAnnotations)}
          className="px-3 py-1 text-xs rounded-full border border-primary/30 hover:bg-primary/10 transition-all"
        >
          {showAnnotations ? 'Hide' : 'Show'} Details
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        <defs>
          <marker id="arrow-j" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--foreground))" />
          </marker>
          <linearGradient id="jcurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground))" />
            <stop offset="20%" stopColor="hsl(var(--destructive))" />
            <stop offset="50%" stopColor="hsl(var(--destructive))" />
            <stop offset="70%" stopColor="hsl(var(--cambridge-cyan))" />
            <stop offset="100%" stopColor="hsl(var(--cambridge-green))" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((frac, i) => (
          <line
            key={i}
            x1={margin.left}
            y1={margin.top + chartHeight * frac}
            x2={margin.left + chartWidth}
            y2={margin.top + chartHeight * frac}
            stroke="hsl(var(--muted))"
            strokeWidth="0.5"
            strokeDasharray="3,3"
          />
        ))}

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-j)" />
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-j)" />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">Time</text>
        <text x={22} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600" transform={`rotate(-90, 22, ${margin.top + chartHeight / 2})`}>Trade Balance (X − M)</text>

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
        <text x={margin.left - 8} y={baselineY + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">0</text>

        {/* Surplus/Deficit zones */}
        <text x={margin.left + 12} y={margin.top + 18} fill="hsl(var(--cambridge-green))" fontSize="10" fontWeight="600">Surplus (+)</text>
        <text x={margin.left + 12} y={margin.top + chartHeight - 8} fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">Deficit (−)</text>

        {/* Time markers */}
        {timeMarkers.map((tm, i) => (
          <g key={i}>
            <motion.line
              x1={tm.x}
              y1={margin.top}
              x2={tm.x}
              y2={margin.top + chartHeight}
              stroke={i === 0 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'}
              strokeWidth={i === 0 ? 2 : 1}
              strokeDasharray={i === 0 ? '4,4' : '2,2'}
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            />
            <text x={tm.x} y={margin.top + chartHeight + 14} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">{tm.label}</text>
            {showAnnotations && (
              <text x={tm.x} y={margin.top - 6} textAnchor="middle" fill={i === 0 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} fontSize="8">{tm.desc}</text>
            )}
          </g>
        ))}

        {/* J-Curve Path */}
        <motion.path
          d={`M ${margin.left + 60} ${baselineY - 15} 
              Q ${margin.left + 90} ${baselineY + 20}, ${margin.left + 110} ${baselineY + 55}
              Q ${margin.left + 140} ${baselineY + 75}, ${margin.left + 180} ${baselineY + 55}
              Q ${margin.left + 250} ${baselineY}, ${margin.left + chartWidth - 20} ${baselineY - 70}`}
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
          cy={baselineY - 15}
          r="5"
          fill="hsl(var(--foreground))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 0.6 }}
        />

        {/* Trough point */}
        <motion.circle
          cx={margin.left + 140}
          cy={baselineY + 70}
          r="4"
          fill="hsl(var(--destructive))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.2 }}
        />

        {/* End point */}
        <motion.circle
          cx={margin.left + chartWidth - 20}
          cy={baselineY - 70}
          r="5"
          fill="hsl(var(--cambridge-green))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.8 }}
        />

        {/* Annotations */}
        {showAnnotations && (
          <>
            {/* Short-run box */}
            <motion.g initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.3 }}>
              <rect x={margin.left + 85} y={baselineY + 78} width="95" height="38" rx="4" fill="hsl(var(--destructive))" opacity="0.15" />
              <text x={margin.left + 132} y={baselineY + 93} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="600">Short-Run</text>
              <text x={margin.left + 132} y={baselineY + 106} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8">Demand Inelastic</text>
            </motion.g>

            {/* Long-run box */}
            <motion.g initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.6 }}>
              <rect x={margin.left + chartWidth - 115} y={baselineY - 115} width="95" height="38" rx="4" fill="hsl(var(--cambridge-green))" opacity="0.15" />
              <text x={margin.left + chartWidth - 68} y={baselineY - 100} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="600">Long-Run</text>
              <text x={margin.left + chartWidth - 68} y={baselineY - 87} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="8">Demand Elastic</text>
            </motion.g>

            {/* Trough label */}
            <motion.g initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}>
              <line x1={margin.left + 155} y1={baselineY + 70} x2={margin.left + 175} y2={baselineY + 55} stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <text x={margin.left + 178} y={baselineY + 52} fill="hsl(var(--muted-foreground))" fontSize="8">Trough</text>
            </motion.g>
          </>
        )}
      </svg>

      <div className="mt-2 grid md:grid-cols-2 gap-2">
        <div className="p-2 bg-destructive/10 rounded-lg">
          <h4 className="text-xs font-semibold text-destructive mb-1">Short-Run (Inelastic)</h4>
          <p className="text-xs text-muted-foreground">Contracts are fixed, limited substitutes available. Volume of trade changes slowly while prices adjust immediately. Trade balance worsens initially.</p>
        </div>
        <div className="p-2 bg-cambridge-green/10 rounded-lg">
          <h4 className="text-xs font-semibold text-[hsl(var(--cambridge-green))] mb-1">Long-Run (Elastic)</h4>
          <p className="text-xs text-muted-foreground">Consumers and firms adjust to new prices. Export volumes rise, import volumes fall. If Marshall-Lerner condition holds, trade balance improves.</p>
        </div>
      </div>
    </div>
  );
};

export default JCurveDiagram;
