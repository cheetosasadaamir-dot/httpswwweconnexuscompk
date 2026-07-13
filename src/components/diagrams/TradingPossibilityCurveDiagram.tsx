import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TradingPossibilityCurveDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
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

  const width = 650;
  const height = 350;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Coffenia: 8 coffee OR 4 robots (2 coffee = 1 robot)
  // Robotia: 3 coffee OR 6 robots (0.5 coffee = 1 robot)
  
  const cofMaxCoffee = 8;
  const cofMaxRobots = 4;
  const robMaxCoffee = 3;
  const robMaxRobots = 6;

  const xScale = (val: number) => margin.left + (val / 8) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 10) * chartHeight;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="glass-card p-4 my-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-serif text-lg text-gradient">Trading Possibility Curve (TPC)</h3>
        <button
          onClick={() => setShowTrade(!showTrade)}
          className="px-3 py-1.5 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
        >
          {showTrade ? "Before Trade" : "With Trade"}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid */}
        <defs>
          <pattern id="grid-tpc" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-tpc)" />

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
        <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
        
        {/* Axis labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Robots</text>
        <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Coffee</text>

        {/* Coffenia's PPC */}
        <motion.line
          x1={xScale(0)} y1={yScale(cofMaxCoffee)}
          x2={xScale(cofMaxRobots)} y2={yScale(0)}
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="2.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x={xScale(1)} y={yScale(7)} fill="hsl(var(--cambridge-cyan))" fontSize="10" fontWeight="600">Coffenia PPC</text>

        {/* Robotia's PPC */}
        <motion.line
          x1={xScale(0)} y1={yScale(robMaxCoffee)}
          x2={xScale(robMaxRobots)} y2={yScale(0)}
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="2.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        />
        <text x={xScale(4)} y={yScale(2)} fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="600">Robotia PPC</text>

        {/* Point A - Coffenia at coffee max */}
        <motion.circle
          cx={xScale(0)} cy={yScale(cofMaxCoffee)}
          r="5"
          fill="hsl(var(--cambridge-cyan))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.5 }}
        />
        <text x={xScale(0) - 12} y={yScale(cofMaxCoffee) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">A</text>

        {/* Point B - Coffenia at robot max */}
        <motion.circle
          cx={xScale(cofMaxRobots)} cy={yScale(0)}
          r="5"
          fill="hsl(var(--cambridge-cyan))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.6 }}
        />
        <text x={xScale(cofMaxRobots)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">B</text>

        {/* Point C - Robotia at coffee max */}
        <motion.circle
          cx={xScale(0)} cy={yScale(robMaxCoffee)}
          r="5"
          fill="hsl(var(--cambridge-orange))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.7 }}
        />
        <text x={xScale(0) - 12} y={yScale(robMaxCoffee) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">C</text>

        {/* Point D - Robotia at robot max */}
        <motion.circle
          cx={xScale(robMaxRobots)} cy={yScale(0)}
          r="5"
          fill="hsl(var(--cambridge-orange))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.8 }}
        />
        <text x={xScale(robMaxRobots)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">D</text>

        {/* Axis tick marks */}
        {[2, 4, 6, 8].map(val => (
          <g key={`x-${val}`}>
            <line x1={xScale(val)} y1={margin.top + chartHeight} x2={xScale(val)} y2={margin.top + chartHeight + 5} stroke="hsl(var(--muted-foreground))" />
            <text x={xScale(val)} y={margin.top + chartHeight + 16} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">{val}</text>
          </g>
        ))}
        {[2, 4, 6, 8, 10].map(val => (
          <g key={`y-${val}`}>
            <line x1={margin.left - 5} y1={yScale(val)} x2={margin.left} y2={yScale(val)} stroke="hsl(var(--muted-foreground))" />
            <text x={margin.left - 10} y={yScale(val) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="9">{val}</text>
          </g>
        ))}

        {/* Trading Possibility Curve - shown with trade */}
        {showTrade && (
          <>
            {/* Coffenia's TPC (specializes in coffee, can trade for robots) */}
            <motion.line
              x1={xScale(0)} y1={yScale(cofMaxCoffee)}
              x2={xScale(cofMaxCoffee)} y2={yScale(0)}
              stroke="hsl(var(--cambridge-green))"
              strokeWidth="2"
              strokeDasharray="6,3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <text x={xScale(5)} y={yScale(4.5)} fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="600">Coffenia TPC</text>

            {/* Point C - Consumption point outside PPC */}
            <motion.circle
              cx={xScale(3)} cy={yScale(5)}
              r="7"
              fill="hsl(var(--cambridge-green))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            />
            <text x={xScale(3) + 12} y={yScale(5) + 4} fill="hsl(var(--cambridge-green))" fontSize="11" fontWeight="bold">C</text>
            <text x={xScale(3) + 12} y={yScale(5) + 14} fill="hsl(var(--muted-foreground))" fontSize="8">Consumption</text>
            <text x={xScale(3) + 12} y={yScale(5) + 22} fill="hsl(var(--muted-foreground))" fontSize="8">outside PPC!</text>
          </>
        )}
      </svg>

      {/* Explanation */}
      <div className="mt-3 p-3 bg-muted/30 rounded-lg text-xs space-y-1.5">
        {!showTrade ? (
          <>
            <p><strong>Point A:</strong> Coffenia produces 8 units of coffee and 0 Robots.</p>
            <p><strong>Point B:</strong> Coffenia produces 0 units of coffee and 4 Robots.</p>
            <p><strong>Point C:</strong> Robotia produces 3 units of coffee and 0 Robots.</p>
            <p><strong>Point D:</strong> Robotia produces 0 units of coffee and 6 Robots.</p>
            <p className="pt-1"><span className="text-cambridge-cyan">Coffenia</span> has absolute advantage in <strong>coffee</strong> (PPC extends further on coffee axis).</p>
            <p><span className="text-cambridge-orange">Robotia</span> has absolute advantage in <strong>robots</strong> (PPC extends further on robot axis).</p>
          </>
        ) : (
          <>
            <p className="text-cambridge-green font-semibold">With Trade: The Trading Possibility Curve (TPC)</p>
            <p>By specializing and trading, Coffenia can consume at <strong>Point C</strong>, which lies <em>outside</em> its original PPC!</p>
            <p>This demonstrates the gains from trade: producing on their PPC, countries can consume at a point outside their PPC through trade.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TradingPossibilityCurveDiagram;
