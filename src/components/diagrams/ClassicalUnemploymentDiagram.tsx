import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const ClassicalUnemploymentDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const width = 520;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Equilibrium wage (We) and quantity (Qe)
  const We = 50;
  const Qe = 50;
  
  // Minimum wage (W2) above equilibrium
  const W2 = 70;
  
  // Labor demand at W2 (N3)
  const N3 = 30;
  // Labor supply at W2 (N2) 
  const N2 = 70;

  // Demand curve: downward sloping from (10, 90) to (90, 10)
  const demandPath = `M ${xScale(10)} ${yScale(90)} Q ${xScale(50)} ${yScale(50)} ${xScale(90)} ${yScale(10)}`;
  
  // Supply curve: upward sloping from (10, 10) to (90, 90)
  const supplyPath = `M ${xScale(10)} ${yScale(10)} Q ${xScale(50)} ${yScale(50)} ${xScale(90)} ${yScale(90)}`;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-lg text-silver-bright">Classical (Real Wage) Unemployment</h3>
          <p className="text-xs text-muted-foreground mt-1">Figure 4.1: Labor Market Disequilibrium</p>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid */}
        {[20, 40, 60, 80].map((val) => (
          <g key={val}>
            <line
              x1={xScale(val)}
              y1={margin.top}
              x2={xScale(val)}
              y2={margin.top + chartHeight}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.1}
              strokeDasharray="4,4"
            />
            <line
              x1={margin.left}
              y1={yScale(val)}
              x2={margin.left + chartWidth}
              y2={yScale(val)}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.1}
              strokeDasharray="4,4"
            />
          </g>
        ))}

        {/* Axes */}
        <line
          x1={margin.left}
          y1={margin.top + chartHeight}
          x2={margin.left + chartWidth}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--silver))"
          strokeWidth={2}
        />
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--silver))"
          strokeWidth={2}
        />

        {/* Axis labels with LaTeX notation */}
        <text
          x={width / 2}
          y={height - 15}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
        >
          Quantity of Labor (N)
        </text>
        <text
          x={25}
          y={height / 2}
          textAnchor="middle"
          fill="hsl(var(--silver-bright))"
          className="text-sm font-serif"
          transform={`rotate(-90, 25, ${height / 2})`}
        >
          Real Wage Rate (W/P)
        </text>

        {/* Supply curve (SL) */}
        <motion.path
          d={supplyPath}
          fill="none"
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text
          x={xScale(92)}
          y={yScale(92)}
          fill="hsl(var(--cambridge-cyan))"
          className="text-sm font-semibold"
        >
          SL
        </text>

        {/* Demand curve (DL) */}
        <motion.path
          d={demandPath}
          fill="none"
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={3}
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text
          x={xScale(92)}
          y={yScale(8)}
          fill="hsl(var(--cambridge-magenta))"
          className="text-sm font-semibold"
        >
          DL
        </text>

        {/* Equilibrium point E */}
        <motion.circle
          cx={xScale(Qe)}
          cy={yScale(We)}
          r={6}
          fill="hsl(var(--cambridge-green))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <text
          x={xScale(Qe) + 12}
          y={yScale(We) - 8}
          fill="hsl(var(--cambridge-green))"
          className="text-xs font-bold"
        >
          E (equilibrium)
        </text>

        {/* Equilibrium wage line We */}
        <motion.line
          x1={margin.left}
          y1={yScale(We)}
          x2={xScale(Qe)}
          y2={yScale(We)}
          stroke="hsl(var(--cambridge-green))"
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <text
          x={margin.left - 10}
          y={yScale(We) + 4}
          textAnchor="end"
          fill="hsl(var(--cambridge-green))"
          className="text-xs font-medium"
        >
          We
        </text>

        {/* Minimum wage line W2 */}
        <motion.line
          x1={margin.left}
          y1={yScale(W2)}
          x2={margin.left + chartWidth}
          y2={yScale(W2)}
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth={2.5}
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        />
        <text
          x={margin.left - 10}
          y={yScale(W2) + 4}
          textAnchor="end"
          fill="hsl(var(--cambridge-orange))"
          className="text-xs font-bold"
        >
          W₂
        </text>
        <text
          x={margin.left + chartWidth + 5}
          y={yScale(W2) + 4}
          fill="hsl(var(--cambridge-orange))"
          className="text-xs font-medium"
        >
          Min. Wage
        </text>

        {/* Unemployment zone shading */}
        <motion.rect
          x={xScale(N3)}
          y={yScale(W2) - 2}
          width={xScale(N2) - xScale(N3)}
          height={10}
          fill="hsl(var(--destructive))"
          opacity={0.3}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* N3 projection line (demand at W2) */}
        <motion.line
          x1={xScale(N3)}
          y1={yScale(W2)}
          x2={xScale(N3)}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--cambridge-magenta))"
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.4, delay: 1.8 }}
        />
        <text
          x={xScale(N3)}
          y={margin.top + chartHeight + 18}
          textAnchor="middle"
          fill="hsl(var(--cambridge-magenta))"
          className="text-xs font-medium"
        >
          N₃
        </text>

        {/* N2 projection line (supply at W2) */}
        <motion.line
          x1={xScale(N2)}
          y1={yScale(W2)}
          x2={xScale(N2)}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.4, delay: 1.9 }}
        />
        <text
          x={xScale(N2)}
          y={margin.top + chartHeight + 18}
          textAnchor="middle"
          fill="hsl(var(--cambridge-cyan))"
          className="text-xs font-medium"
        >
          N₂
        </text>

        {/* Ne projection */}
        <motion.line
          x1={xScale(Qe)}
          y1={yScale(We)}
          x2={xScale(Qe)}
          y2={margin.top + chartHeight}
          stroke="hsl(var(--cambridge-green))"
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        />
        <text
          x={xScale(Qe)}
          y={margin.top + chartHeight + 18}
          textAnchor="middle"
          fill="hsl(var(--cambridge-green))"
          className="text-xs font-medium"
        >
          Ne
        </text>

        {/* Unemployment bracket */}
        <motion.line
          x1={xScale(N3)}
          y1={margin.top + chartHeight + 35}
          x2={xScale(N2)}
          y2={margin.top + chartHeight + 35}
          stroke="hsl(var(--destructive))"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        />
        <text
          x={(xScale(N3) + xScale(N2)) / 2}
          y={margin.top + chartHeight + 52}
          textAnchor="middle"
          fill="hsl(var(--destructive))"
          className="text-xs font-bold"
        >
          Unemployment = N₂ − N₃
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-cyan" />
          <span className="text-muted-foreground">Labor Supply (SL)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-magenta" />
          <span className="text-muted-foreground">Labor Demand (DL)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-cambridge-orange" />
          <span className="text-muted-foreground">Minimum Wage (W₂)</span>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground">
        <p>
          <strong>Classical/Real Wage Unemployment:</strong> When the minimum wage ($W_2$) is set 
          above the equilibrium wage ($W_e$), the quantity of labor demanded ($N_3$) falls below 
          the quantity supplied ($N_2$), creating unemployment equal to $N_2 - N_3$. This occurs 
          due to <strong>trade union bargaining</strong> or <strong>minimum wage legislation</strong>.
        </p>
      </div>
    </div>
  );
};

export default ClassicalUnemploymentDiagram;
