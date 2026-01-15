import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LaborMarketDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
        Labor Market Equilibrium in Perfect Competition
      </h4>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Industry/Market Diagram */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground text-center mb-2">The Market (Industry)</p>
          <svg viewBox="0 0 300 260" className="w-full max-w-sm mx-auto">
            <defs>
              <pattern id="grid-labor-market" width="30" height="25" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="50" y="20" width="230" height="200" fill="url(#grid-labor-market)" />
            
            {/* Axes */}
            <motion.line
              x1="50" y1="220" x2="280" y2="220"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="50" y1="220" x2="50" y2="20"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="165" y="250" textAnchor="middle" className="fill-muted-foreground text-xs">Number of Workers</text>
            <text x="25" y="120" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 120)">Wage Rate (W)</text>
            
            {/* Labor Supply (upward sloping) */}
            <motion.path
              d="M 70 200 L 260 60"
              fill="none"
              stroke="hsl(var(--secondary))"
              strokeWidth="3"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="265" y="55" className="fill-secondary text-sm font-medium">S<tspan baselineShift="sub" fontSize="8">L</tspan></text>
            
            {/* Labor Demand (MRP - downward sloping) */}
            <motion.path
              d="M 70 60 L 260 200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="265" y="205" className="fill-primary text-sm font-medium">D<tspan baselineShift="sub" fontSize="8">L</tspan> = ΣMRP</text>
            
            {/* Equilibrium */}
            <motion.circle
              cx="165" cy="130"
              r="6"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            
            {/* Equilibrium Wage */}
            <motion.line
              x1="50" y1="130" x2="165" y2="130"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="40" y="135" textAnchor="end" className="fill-amber-400 text-xs font-medium">W*</text>
            
            {/* Equilibrium Employment */}
            <motion.line
              x1="165" y1="130" x2="165" y2="220"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="165" y="235" textAnchor="middle" className="fill-amber-400 text-xs font-medium">N*</text>
          </svg>
        </div>

        {/* Firm Diagram */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground text-center mb-2">The Firm</p>
          <svg viewBox="0 0 300 260" className="w-full max-w-sm mx-auto">
            <rect x="50" y="20" width="230" height="200" fill="url(#grid-labor-market)" />
            
            {/* Axes */}
            <motion.line
              x1="50" y1="220" x2="280" y2="220"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="50" y1="220" x2="50" y2="20"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="165" y="250" textAnchor="middle" className="fill-muted-foreground text-xs">Units of Labor</text>
            <text x="25" y="120" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 120)">Wage/MRP</text>
            
            {/* Horizontal Supply = W = MFC = AFC */}
            <motion.line
              x1="50" y1="130" x2="260" y2="130"
              stroke="hsl(var(--secondary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <text x="265" y="125" className="fill-secondary text-[10px]">W = MFC = AFC = S</text>
            
            {/* MRP Curve (firm's demand) */}
            <motion.path
              d="M 70 50 Q 150 100 260 200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="265" y="205" className="fill-primary text-sm font-medium">MRP = D<tspan baselineShift="sub" fontSize="8">L</tspan></text>
            
            {/* Equilibrium point */}
            <motion.circle
              cx="165" cy="130"
              r="6"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.3 }}
            />
            
            {/* Optimal Employment */}
            <motion.line
              x1="165" y1="130" x2="165" y2="220"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
            />
            <text x="165" y="235" textAnchor="middle" className="fill-amber-400 text-xs font-medium">L*</text>
            
            {/* W* label */}
            <text x="40" y="135" textAnchor="end" className="fill-amber-400 text-xs font-medium">W*</text>
          </svg>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-200 text-xs">
            <strong>Market:</strong> Equilibrium wage (W*) is set where labor supply equals labor demand (ΣMRP of all firms).
          </p>
        </div>
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-200 text-xs">
            <strong>Firm:</strong> Takes W* as given. Hires where MRP = W (profit maximization). Supply is perfectly elastic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaborMarketDiagram;
