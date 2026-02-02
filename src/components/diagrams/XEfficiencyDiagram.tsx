import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * X-Efficiency Diagram
 * Shows the difference between productively efficient output and actual output
 * due to organizational slack in monopoly vs competitive markets
 */
const XEfficiencyDiagram = () => {
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
      <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
        X-Inefficiency: The Cost of Monopoly Power
      </h4>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Harvey Leibenstein (1966): Firms may not minimize costs due to lack of competitive pressure
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Diagram */}
        <div className="flex-1">
          <svg viewBox="0 0 400 320" className="w-full max-w-lg mx-auto">
            <defs>
              <pattern id="grid-xeff" width="30" height="25" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="60" y="20" width="320" height="260" fill="url(#grid-xeff)" />
            
            {/* Axes */}
            <motion.line
              x1="60" y1="280" x2="380" y2="280"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="60" y1="280" x2="60" y2="20"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="220" y="305" textAnchor="middle" className="fill-muted-foreground text-sm">Output (Q)</text>
            <text x="30" y="150" textAnchor="middle" className="fill-muted-foreground text-sm" transform="rotate(-90, 30, 150)">Cost per Unit (£)</text>
            
            {/* Efficient ATC Curve (what costs SHOULD be) */}
            <motion.path
              d="M 80 220 Q 120 120 200 80 Q 280 65 340 75"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="350" y="80" className="fill-green-400 text-xs font-semibold">ATC*</text>
            <text x="350" y="92" className="fill-green-400 text-[8px]">(Efficient)</text>
            
            {/* X-Inefficient ATC Curve (actual costs under monopoly) */}
            <motion.path
              d="M 80 180 Q 120 100 200 65 Q 280 55 340 70"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="8,4"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="350" y="55" className="fill-red-400 text-xs font-semibold">ATC</text>
            <text x="350" y="67" className="fill-red-400 text-[8px]">(X-Inefficient)</text>
            
            {/* X-Inefficiency Gap annotation at Q* */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              {/* Vertical line at Q* */}
              <line x1="220" y1="280" x2="220" y2="55" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" />
              
              {/* Gap indicator */}
              <line x1="210" y1="62" x2="210" y2="78" stroke="#f59e0b" strokeWidth="3" />
              <polygon points="210,62 205,70 215,70" fill="#f59e0b" />
              <polygon points="210,78 205,70 215,70" fill="#f59e0b" />
              
              {/* Gap label */}
              <text x="195" y="72" textAnchor="end" className="fill-amber-400 text-xs font-semibold">X-Inefficiency</text>
              <text x="195" y="84" textAnchor="end" className="fill-amber-400 text-[8px]">Gap</text>
              
              {/* Points on curves */}
              <circle cx="220" cy="62" r="5" fill="#ef4444" stroke="white" strokeWidth="1.5" />
              <circle cx="220" cy="78" r="5" fill="#22c55e" stroke="white" strokeWidth="1.5" />
              
              {/* Cost labels */}
              <line x1="60" y1="62" x2="220" y2="62" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
              <text x="50" y="66" textAnchor="end" className="fill-red-400 text-[10px]">C₁</text>
              
              <line x1="60" y1="78" x2="220" y2="78" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,3" />
              <text x="50" y="82" textAnchor="end" className="fill-green-400 text-[10px]">C*</text>
              
              <text x="220" y="295" textAnchor="middle" className="fill-muted-foreground text-[10px]">Q*</text>
            </motion.g>
            
            {/* Organizational Slack Region */}
            <motion.path
              d="M 100 170 Q 150 85 220 62 L 220 78 Q 150 100 100 180 Z"
              fill="hsl(239 84% 67% / 0.15)"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
            />
          </svg>
        </div>

        {/* Explanation Cards */}
        <div className="flex-1 space-y-3">
          <motion.div 
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h5 className="font-semibold text-green-400 text-sm mb-2">ATC* (Productively Efficient)</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The <strong>minimum possible cost</strong> at each output level when the firm operates at 
              maximum technical efficiency. Achieved in competitive markets where inefficient firms are 
              driven out. Output is on the PPC.
            </p>
          </motion.div>

          <motion.div 
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.0 }}
          >
            <h5 className="font-semibold text-red-400 text-sm mb-2">ATC (X-Inefficient)</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Actual costs</strong> when the firm lacks competitive pressure. Sources include: 
              managerial slack, excessive perks, overstaffing, poor inventory management, weak cost control. 
              Output is <em>inside</em> the PPC.
            </p>
          </motion.div>

          <motion.div 
            className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <h5 className="font-semibold text-amber-400 text-sm mb-2">The X-Inefficiency Gap</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              C₁ − C* represents the <strong>welfare cost</strong> of organizational inefficiency. 
              This is <em>in addition to</em> allocative inefficiency (P &gt; MC) and the deadweight loss 
              triangle. Leibenstein argued this may exceed traditional monopoly welfare loss.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chain of Analysis */}
      <motion.div 
        className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
      >
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Chain of Analysis (AO3):</strong> Monopoly power → 
          <span className="text-red-400"> Absence of competitive threat</span> → Managers pursue "quiet life" / 
          satisficing behavior → <span className="text-amber-400">Organizational slack emerges</span> → 
          Costs rise above technical minimum → <span className="text-destructive">Productive inefficiency</span> 
          (not on ATC minimum) AND X-inefficiency (ATC itself is higher than necessary). 
          <strong className="text-green-400"> Contestable markets</strong> may discipline X-inefficiency even without actual entry.
        </p>
      </motion.div>

      <div className="mt-4 grid md:grid-cols-3 gap-3">
        <div className="p-3 bg-card/50 border border-silver/20 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">
            <strong className="text-cyan-400">Productive Inefficiency:</strong><br/>
            Not at min ATC (wrong Q)
          </p>
        </div>
        <div className="p-3 bg-card/50 border border-silver/20 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">
            <strong className="text-red-400">X-Inefficiency:</strong><br/>
            ATC itself is too high
          </p>
        </div>
        <div className="p-3 bg-card/50 border border-silver/20 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">
            <strong className="text-amber-400">Allocative Inefficiency:</strong><br/>
            P &gt; MC (wrong allocation)
          </p>
        </div>
      </div>
    </div>
  );
};

export default XEfficiencyDiagram;
