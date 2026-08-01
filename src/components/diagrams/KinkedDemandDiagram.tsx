import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const KinkedDemandDiagram = () => {
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
        The Kinked Demand Curve Model
      </h4>
      
      <svg viewBox="0 0 400 320" className="w-full max-w-lg mx-auto">
        <defs>
          <pattern id="grid-kinked" width="30" height="25" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect x="60" y="20" width="320" height="260" fill="url(#grid-kinked)" />
        
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
        <text x="30" y="150" textAnchor="middle" className="fill-muted-foreground text-sm" transform="rotate(-90, 30, 150)">Price</text>
        
        {/* Kinked Demand Curve - Upper segment (elastic) */}
        <motion.path
          d="M 75 110 L 200 140"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        
        {/* Kinked Demand Curve - Lower segment (inelastic) */}
        <motion.path
          d="M 200 140 L 340 238"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="346" y="243" className="fill-primary text-sm font-medium">D</text>
        
        {/* MR Curve - Upper segment */}
        <motion.path
          d="M 75 110 L 200 170"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        
        {/* MR Curve - Gap (vertical discontinuity) */}
        <motion.line
          x1="200" y1="170" x2="200" y2="228"
          stroke="#a855f7"
          strokeWidth="2.5"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        
        {/* MR Curve - Lower segment */}
        <motion.path
          d="M 200 228 L 237 280"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="242" y="277" className="fill-purple-400 text-sm font-medium">MR</text>
        
        {/* MC Curve 1 */}
        <motion.path
          d="M 95 270 Q 150 245, 200 215 Q 235 195, 250 150"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="254" y="150" className="fill-green-400 text-xs">MC₁</text>
        
        {/* MC Curve 2 (shifted up) */}
        <motion.path
          d="M 95 245 Q 150 218, 200 185 Q 235 163, 250 118"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="6,3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <text x="254" y="118" className="fill-green-400 text-xs">MC₂</text>
        
        {/* The Kink Point */}
        <motion.circle
          cx="200" cy="140"
          r="7"
          fill="hsl(var(--accent))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.3 }}
        />
        <text x="196" y="128" textAnchor="middle" className="fill-accent text-xs font-medium">Z (Kink)</text>
        
        {/* Price line */}
        <motion.line
          x1="60" y1="140" x2="200" y2="140"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.5 }}
        />
        <text x="50" y="145" textAnchor="end" className="fill-amber-400 text-xs font-medium">P*</text>
        
        {/* Quantity line */}
        <motion.line
          x1="200" y1="140" x2="200" y2="280"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.5 }}
        />
        <text x="200" y="295" textAnchor="middle" className="fill-amber-400 text-xs font-medium">Q*</text>
        
        {/* Annotations */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <text x="90" y="68" className="fill-blue-400 text-[10px]">Elastic</text>
          <text x="90" y="79" className="fill-blue-400 text-[10px]">(rivals don't follow</text>
          <text x="90" y="90" className="fill-blue-400 text-[10px]">price rises)</text>
          
          <text x="286" y="160" className="fill-red-400 text-[10px]">Inelastic</text>
          <text x="286" y="171" className="fill-red-400 text-[10px]">(rivals follow</text>
          <text x="286" y="182" className="fill-red-400 text-[10px]">price cuts)</text>
          
          <text x="206" y="202" className="fill-purple-300 text-[10px]">Gap in MR</text>
        </motion.g>
      </svg>

      <div className="mt-4 grid md:grid-cols-3 gap-3">
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-200 text-xs">
            <strong>Above kink:</strong> Demand is elastic. Raising price loses many customers (rivals don't follow).
          </p>
        </div>
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-200 text-xs">
            <strong>Below kink:</strong> Demand is inelastic. Cutting price gains few customers (rivals match the cut).
          </p>
        </div>
        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <p className="text-purple-200 text-xs">
            <strong>Gap in MR:</strong> MC can shift between MC₁ and MC₂ without changing P* or Q* — explaining price rigidity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KinkedDemandDiagram;
