import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MonopsonyLaborDiagram = () => {
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

    return => observer.disconnect();
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
        Monopsony Labor Market
      </h4>
      
      <svg viewBox="0 0 400 320" className="w-full max-w-lg mx-auto">
        <defs>
          <pattern id="grid-monopsony" width="30" height="25" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect x="60" y="20" width="320" height="250" fill="url(#grid-monopsony)" />
        
        {/* Axes */}
        <motion.line
          x1="60" y1="270" x2="380" y2="270"
          stroke="hsl(var(--silver))" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        <motion.line
          x1="60" y1="270" x2="60" y2="20"
          stroke="hsl(var(--silver))" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        
        <text x="220" y="300" textAnchor="middle" className="fill-muted-foreground text-sm">Quantity of Labor</text>
        <text x="30" y="145" textAnchor="middle" className="fill-muted-foreground text-sm" transform="rotate(-90, 30, 145)">Wage Rate</text>
        
        {/* MFC Curve (above supply) */}
        <motion.path
          d="M 80 240 Q 150 140 240 60"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="245" y="55" className="fill-red-400 text-sm font-medium">MFC</text>
        
        {/* Supply Curve (AFC) */}
        <motion.path
          d="M 80 260 Q 160 180 280 100"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="285" y="95" className="fill-secondary text-sm font-medium">S = AFC</text>
        
        {/* MRP Curve (Demand) */}
        <motion.path
          d="M 80 60 Q 180 120 340 240"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="345" y="245" className="fill-primary text-sm font-medium">D = MRP</text>
        
        {/* Monopsony Equilibrium (MFC = MRP) */}
        <motion.circle
          cx="185" cy="115"
          r="6"
          fill="hsl(var(--accent))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.3 }}
        />
        
        {/* Line from equilibrium to supply curve (to find wage) */}
        <motion.line
          x1="185" y1="115" x2="185" y2="175"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.4 }}
        />
        
        {/* Point on supply curve (wage paid) */}
        <motion.circle
          cx="185" cy="175"
          r="5"
          fill="hsl(var(--secondary))"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 2.2, duration: 0.3 }}
        />
        
        {/* Monopsony wage line */}
        <motion.line
          x1="60" y1="175" x2="185" y2="175"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.4 }}
        />
        <text x="50" y="180" textAnchor="end" className="fill-purple-400 text-xs font-medium">W<tspan baselineShift="sub" fontSize="8">m</tspan></text>
        
        {/* Competitive wage line */}
        <motion.line
          x1="60" y1="140" x2="220" y2="140"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 2.8, duration: 0.4 }}
        />
        <text x="50" y="145" textAnchor="end" className="fill-green-400 text-xs font-medium">W<tspan baselineShift="sub" fontSize="8">c</tspan></text>
        
        {/* Competitive equilibrium point */}
        <motion.circle
          cx="220" cy="140"
          r="4"
          fill="#22c55e"
          stroke="white"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 3, duration: 0.3 }}
        />
        
        {/* Monopsony employment */}
        <motion.line
          x1="185" y1="175" x2="185" y2="270"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.4 }}
        />
        <text x="185" y="285" textAnchor="middle" className="fill-purple-400 text-xs font-medium">L<tspan baselineShift="sub" fontSize="8">m</tspan></text>
        
        {/* Competitive employment */}
        <motion.line
          x1="220" y1="140" x2="220" y2="270"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 3.2, duration: 0.4 }}
        />
        <text x="220" y="285" textAnchor="middle" className="fill-green-400 text-xs font-medium">L<tspan baselineShift="sub" fontSize="8">c</tspan></text>
        
        {/* Zone of bargaining annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <rect x="62" y="142" width="120" height="31" fill="hsl(var(--amber-500) / 0.1)" stroke="hsl(var(--amber-500) / 0.3)" rx="4" />
          <text x="122" y="162" textAnchor="middle" className="fill-amber-300 text-[10px]">Zone of Bargaining</text>
        </motion.g>
        
        {/* Exploitation area */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 3.8, duration: 0.5 }}
        >
          <line x1="300" y1="115" x2="185" y2="115" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />
          <text x="310" y="110" className="fill-red-400 text-[10px]">MRP = MFC</text>
          <text x="310" y="122" className="fill-red-400 text-[10px]">(profit max)</text>
        </motion.g>
      </svg>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <p className="text-purple-200 text-xs">
            <strong>Monopsony:</strong> Hires L<sub>m</sub> workers at W<sub>m</sub>. Both employment AND wages are 
            lower than under competition.
          </p>
        </div>
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-200 text-xs">
            <strong>Competition:</strong> Would hire L<sub>c</sub> workers at W<sub>c</sub>. Workers are paid their 
            marginal revenue product (no exploitation).
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
        <h4 className="text-amber-400 font-semibold mb-2">Why MFC &gt; W in Monopsony</h4>
        <p className="text-muted-foreground text-sm">
          The monopsonist faces the entire market supply curve (upward-sloping). To hire an additional worker, 
          it must raise the wage — and pay this higher wage to <em>all</em> workers, not just the marginal one. 
          Thus, the cost of hiring one more worker (MFC) exceeds the wage paid to that worker.
        </p>
      </div>
    </div>
  );
};

export default MonopsonyLaborDiagram;
