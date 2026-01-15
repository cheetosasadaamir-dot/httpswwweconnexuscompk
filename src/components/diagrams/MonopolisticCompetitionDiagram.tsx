import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MonopolisticCompetitionDiagram = () => {
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
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
        Short-Run vs Long-Run in Monopolistic Competition
      </h4>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Short-Run: Supernormal Profits */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground text-center mb-2">Short-Run: Supernormal Profits</p>
          <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto">
            <defs>
              <pattern id="grid-mc-sr" width="30" height="25" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="50" y="20" width="250" height="220" fill="url(#grid-mc-sr)" />
            
            {/* Axes */}
            <motion.line
              x1="50" y1="240" x2="300" y2="240"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="50" y1="240" x2="50" y2="20"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="175" y="265" textAnchor="middle" className="fill-muted-foreground text-xs">Quantity</text>
            <text x="25" y="130" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 130)">Price/Cost</text>
            
            {/* MC Curve */}
            <motion.path
              d="M 80 220 Q 120 180 140 130 Q 160 80 200 40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="205" y="35" className="fill-green-400 text-xs font-medium">MC</text>
            
            {/* ATC Curve */}
            <motion.path
              d="M 70 180 Q 100 100 150 90 Q 200 85 280 130"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="285" y="135" className="fill-amber-400 text-xs font-medium">ATC</text>
            
            {/* Demand Curve (AR) */}
            <motion.path
              d="M 60 60 L 280 200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="285" y="205" className="fill-primary text-xs font-medium">D=AR</text>
            
            {/* MR Curve */}
            <motion.path
              d="M 60 60 L 200 200"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="205" y="205" className="fill-purple-400 text-xs font-medium">MR</text>
            
            {/* Profit area */}
            <motion.rect
              x="50" y="95" width="95" height="25"
              fill="hsl(142 76% 36% / 0.3)"
              stroke="hsl(142 76% 36%)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="97" y="110" textAnchor="middle" className="fill-green-300 text-[10px]">Supernormal</text>
            
            {/* Equilibrium point (MC = MR) */}
            <motion.circle
              cx="145" cy="120"
              r="5"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            
            {/* Price line */}
            <motion.line
              x1="50" y1="95" x2="145" y2="95"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="40" y="98" textAnchor="end" className="fill-muted-foreground text-[10px]">P</text>
            
            {/* Quantity line */}
            <motion.line
              x1="145" y1="120" x2="145" y2="240"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="145" y="255" textAnchor="middle" className="fill-muted-foreground text-[10px]">Q</text>
          </svg>
        </div>

        {/* Long-Run: Normal Profits */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground text-center mb-2">Long-Run: Normal Profits</p>
          <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto">
            <rect x="50" y="20" width="250" height="220" fill="url(#grid-mc-sr)" />
            
            {/* Axes */}
            <motion.line
              x1="50" y1="240" x2="300" y2="240"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="50" y1="240" x2="50" y2="20"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="175" y="265" textAnchor="middle" className="fill-muted-foreground text-xs">Quantity</text>
            <text x="25" y="130" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90, 25, 130)">Price/Cost</text>
            
            {/* MC Curve */}
            <motion.path
              d="M 80 220 Q 110 180 130 130 Q 150 80 180 45"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="185" y="40" className="fill-green-400 text-xs font-medium">MC</text>
            
            {/* ATC Curve - tangent to demand */}
            <motion.path
              d="M 70 200 Q 90 130 130 110 Q 180 95 270 140"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="275" y="145" className="fill-amber-400 text-xs font-medium">ATC</text>
            
            {/* Demand Curve (AR) - tangent to ATC */}
            <motion.path
              d="M 60 80 L 260 200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="265" y="205" className="fill-primary text-xs font-medium">D=AR</text>
            
            {/* MR Curve */}
            <motion.path
              d="M 60 80 L 180 200"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="185" y="205" className="fill-purple-400 text-xs font-medium">MR</text>
            
            {/* Tangent point - P = ATC */}
            <motion.circle
              cx="130" cy="110"
              r="5"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            
            {/* Price line */}
            <motion.line
              x1="50" y1="110" x2="130" y2="110"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="40" y="113" textAnchor="end" className="fill-muted-foreground text-[10px]">P=ATC</text>
            
            {/* Quantity line */}
            <motion.line
              x1="130" y1="110" x2="130" y2="240"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="130" y="255" textAnchor="middle" className="fill-muted-foreground text-[10px]">Q</text>
          </svg>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-200 text-xs">
            <strong>Short-Run:</strong> Supernormal profits attract new firms, increasing competition 
            and reducing demand for each firm.
          </p>
        </div>
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-200 text-xs">
            <strong>Long-Run:</strong> Entry continues until demand is tangent to ATC (P = ATC), 
            leaving only normal profit. Note: NOT at minimum ATC (excess capacity).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonopolisticCompetitionDiagram;
