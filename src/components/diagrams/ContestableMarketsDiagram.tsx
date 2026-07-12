import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Contestable Markets Diagram
 * Shows hit-and-run entry threat and its disciplinary effect on incumbent pricing
 */
const ContestableMarketsDiagram = () => {
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
      <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
        Contestable Markets: The Threat of Entry
      </h4>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Baumol, Panzar & Willig (1982): Market structure matters less than barriers to entry
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Diagram: Monopolist constrained by contestability */}
        <div className="flex-1">
          <svg viewBox="0 0 400 320" className="w-full max-w-lg mx-auto">
            <defs>
              <pattern id="grid-contest" width="30" height="25" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="60" y="20" width="320" height="260" fill="url(#grid-contest)" />
            
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
            
            <text x="220" y="305" textAnchor="middle" className="fill-muted-foreground text-sm">Quantity</text>
            <text x="30" y="150" textAnchor="middle" className="fill-muted-foreground text-sm" transform="rotate(-90, 30, 150)">Price/Cost (£)</text>
            
            {/* Demand Curve (AR) */}
            <motion.path
              d="M 80 60 L 360 240"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="365" y="245" className="fill-primary text-xs font-semibold">D=AR</text>
            
            {/* MR Curve */}
            <motion.path
              d="M 80 60 L 220 240"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="225" y="245" className="fill-purple-400 text-xs font-semibold">MR</text>
            
            {/* MC = ATC (constant costs for simplicity) */}
            <motion.line
              x1="60" y1="150" x2="380" y2="150"
              stroke="#22c55e"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            <text x="385" y="155" className="fill-green-400 text-xs font-semibold">MC=AC</text>
            
            {/* Monopoly Price Line (what firm WOULD charge without contestability) */}
            <motion.line
              x1="60" y1="105" x2="150" y2="105"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="6,3"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            <text x="50" y="108" textAnchor="end" className="fill-red-400 text-[10px] font-semibold">Pₘ</text>
            
            {/* Monopoly point on demand curve */}
            <motion.circle
              cx="150" cy="105"
              r="5"
              fill="#ef4444"
              stroke="white"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.3 }}
            />
            
            {/* Contestable Price = AC (normal profit) */}
            <motion.line
              x1="60" y1="150" x2="220" y2="150"
              stroke="#22c55e"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="50" y="153" textAnchor="end" className="fill-green-400 text-[10px] font-semibold">Pc=AC</text>
            
            {/* Contestable output point on demand */}
            <motion.circle
              cx="220" cy="150"
              r="6"
              fill="#22c55e"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.3 }}
            />
            
            {/* Quantity lines */}
            <motion.line
              x1="150" y1="105" x2="150" y2="280"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
            />
            <text x="150" y="295" textAnchor="middle" className="fill-red-400 text-[10px]">Qₘ</text>
            
            <motion.line
              x1="220" y1="150" x2="220" y2="280"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.7, duration: 0.5 }}
            />
            <text x="220" y="295" textAnchor="middle" className="fill-green-400 text-[10px]">Qc</text>
            
            {/* Arrow showing disciplinary effect */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <path d="M 165 115 Q 185 130 205 145" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-contest)" />
              <text x="200" y="120" className="fill-amber-400 text-[9px] font-medium">Threat of</text>
              <text x="200" y="130" className="fill-amber-400 text-[9px] font-medium">Entry</text>
              
              <defs>
                <marker id="arrow-contest" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#f59e0b" />
                </marker>
              </defs>
            </motion.g>
            
            {/* Supernormal profit that would be earned */}
            <motion.rect
              x="60" y="105" width="90" height="45"
              fill="hsl(0 84% 60% / 0.15)"
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
            />
            <text x="105" y="130" textAnchor="middle" className="fill-red-300 text-[8px]">Supernormal</text>
            <text x="105" y="140" textAnchor="middle" className="fill-red-300 text-[8px]">(forgone)</text>
          </svg>
        </div>

        {/* Key Concepts */}
        <div className="flex-1 space-y-3">
          <motion.div 
            className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h5 className="font-semibold text-cyan-400 text-sm mb-2">Perfectly Contestable Market</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• <strong>Zero sunk costs:</strong> All costs are recoverable on exit</li>
              <li>• <strong>No entry barriers:</strong> New firms can enter instantly</li>
              <li>• <strong>Hit-and-run possible:</strong> Enter, take profit, exit before retaliation</li>
              <li>• <strong>Result:</strong> P = AC even with single firm (no supernormal profit)</li>
            </ul>
          </motion.div>

          <motion.div 
            className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.0 }}
          >
            <h5 className="font-semibold text-amber-400 text-sm mb-2">Sunk Costs as Barriers</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Sunk costs</strong> = costs that cannot be recovered on exit (specialized equipment, 
              advertising, R&D). High sunk costs → market less contestable → incumbent can charge 
              above AC without attracting entry.
            </p>
          </motion.div>

          <motion.div 
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <h5 className="font-semibold text-green-400 text-sm mb-2">Policy Implications</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Deregulation</strong> may improve outcomes even without increasing actual competition. 
              Reducing barriers (licensing, regulations) increases contestability → disciplines monopoly behavior → 
              Lower prices, higher output, reduced X-inefficiency.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chain of Analysis */}
      <motion.div 
        className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 2.2 }}
      >
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Chain of Analysis:</strong> Low sunk costs + freedom of entry → 
          Market is <span className="text-cyan-400">contestable</span> → Incumbent faces <span className="text-amber-400">hit-and-run threat</span> → 
          If P &gt; AC, entrant can undercut, earn profit, and exit → Incumbent <span className="text-green-400">constrained to P = AC</span> → 
          Normal profit only, despite monopoly structure → <strong className="text-primary">Efficiency without competition</strong>. 
          Real-world examples: Airline routes (low sunk costs), vs Pharmaceuticals (high R&D sunk costs).
        </p>
      </motion.div>

      <div className="mt-4 grid md:grid-cols-2 gap-3">
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-red-400">Without Contestability:</strong><br/>
            P = Pₘ &gt; AC → Supernormal profit, allocative inefficiency
          </p>
        </div>
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-green-400">With Contestability:</strong><br/>
            P = Pc = AC → Normal profit, quasi-efficiency
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContestableMarketsDiagram;
