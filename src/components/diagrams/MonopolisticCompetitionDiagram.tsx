import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Accurate Monopolistic Competition Diagram
 * Long-run: AR curve is TANGENT to ATC at profit-maximizing output
 * Key geometric precision: MC intersects MR at same Q where AR is tangent to ATC
 */
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
          <p className="text-sm text-muted-foreground text-center mb-2 font-medium">Short-Run: Supernormal Profits</p>
          <svg viewBox="0 0 340 300" className="w-full max-w-sm mx-auto">
            <defs>
              <pattern id="grid-mc-sr" width="30" height="25" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 25" fill="none" stroke="hsl(var(--silver) / 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="55" y="25" width="260" height="230" fill="url(#grid-mc-sr)" />
            
            {/* Axes */}
            <motion.line
              x1="55" y1="255" x2="315" y2="255"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="55" y1="255" x2="55" y2="25"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="185" y="280" textAnchor="middle" className="fill-muted-foreground text-xs font-medium">Quantity</text>
            <text x="18" y="105" textAnchor="middle" className="fill-muted-foreground text-xs font-medium" transform="rotate(-90, 18, 105)">Price/Cost (£)</text>
            
            {/* MC Curve - U-shaped, cuts ATC at its minimum (205,183) and MR at Q*=172 */}
            <motion.path
              d="M 90 175 Q 110 205, 135 208 Q 158 210, 172 196 Q 190 190, 205 183 Q 235 170, 258 80"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="262" y="76" className="fill-green-400 text-xs font-semibold">MC</text>
            
            {/* ATC Curve - genuine U-shape, minimum at Q=205 */}
            <motion.path
              d="M 75 95 Q 120 150, 160 172 Q 185 183, 205 183 Q 245 183, 300 105"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="302" y="100" className="fill-amber-400 text-xs font-semibold">ATC</text>
            
            {/* Demand Curve (AR) - downward sloping, above ATC in short run */}
            <motion.path
              d="M 60 55 L 295 210"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="300" y="215" className="fill-primary text-xs font-semibold">D=AR</text>
            
            {/* MR Curve - steeper than AR, same intercept */}
            <motion.path
              d="M 60 55 L 178 210"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="172" y="224" className="fill-purple-400 text-xs font-semibold">MR</text>
            
            {/* Supernormal Profit area - rectangle between P and ATC at Q* */}
            <motion.rect
              x="55" y="129" width="117" height="48"
              fill="hsl(142 76% 36% / 0.35)"
              stroke="hsl(142 76% 45%)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="113" y="157" textAnchor="middle" className="fill-green-300 text-[9px] font-semibold">Supernormal Profit</text>
            
            {/* MC = MR intersection point */}
            <motion.circle
              cx="172" cy="196"
              r="5"
              fill="#a855f7"
              stroke="white"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            
            {/* Price point on AR */}
            <motion.circle
              cx="172" cy="129"
              r="5"
              fill="hsl(var(--accent))"
              stroke="white"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.3 }}
            />
            
            {/* ATC point */}
            <motion.circle
              cx="172" cy="177"
              r="4"
              fill="#f59e0b"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.35, duration: 0.3 }}
            />
            
            {/* Price line to Y-axis */}
            <motion.line
              x1="55" y1="129" x2="172" y2="129"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="45" y="132" textAnchor="end" className="fill-accent text-[10px] font-semibold">P</text>
            
            {/* ATC line to Y-axis */}
            <motion.line
              x1="55" y1="177" x2="172" y2="177"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
            />
            <text x="45" y="180" textAnchor="end" className="fill-amber-400 text-[10px] font-semibold">ATC</text>
            
            {/* Quantity line */}
            <motion.line
              x1="172" y1="129" x2="172" y2="255"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="172" y="270" textAnchor="middle" className="fill-muted-foreground text-[10px] font-semibold">Q*</text>
            
            {/* MC=MR label */}
            <text x="180" y="205" className="fill-purple-300 text-[8px]">MC=MR</text>
          </svg>
        </div>

        {/* Long-Run: Normal Profits - AR TANGENT to ATC */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground text-center mb-2 font-medium">Long-Run: Normal Profits (AR tangent to ATC)</p>
          <svg viewBox="0 0 340 300" className="w-full max-w-sm mx-auto">
            <rect x="55" y="25" width="260" height="230" fill="url(#grid-mc-sr)" />
            
            {/* Axes */}
            <motion.line
              x1="55" y1="255" x2="315" y2="255"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.line
              x1="55" y1="255" x2="55" y2="25"
              stroke="hsl(var(--silver))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <text x="185" y="280" textAnchor="middle" className="fill-muted-foreground text-xs font-medium">Quantity</text>
            <text x="18" y="105" textAnchor="middle" className="fill-muted-foreground text-xs font-medium" transform="rotate(-90, 18, 105)">Price/Cost (£)</text>
            
            {/* MC Curve - intersects MR at Q where AR is tangent to ATC */}
            <motion.path
              d="M 85 185 C 100 210, 112 208, 130 190 Q 138 184, 145 177 Q 168 160, 195 145 C 215 135, 230 105, 242 55"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="246" y="52" className="fill-green-400 text-xs font-semibold">MC</text>
            
            {/* ATC Curve - TANGENT to AR at the profit-maximizing output */}
            <motion.path
              d="M 72 60 Q 103 101, 145 126 Q 176 145, 195 145 Q 230 145, 292 100"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="294" y="96" className="fill-amber-400 text-xs font-semibold">ATC</text>
            
            {/* Demand Curve (AR) - EXACTLY TANGENT to ATC at one point */}
            <motion.path
              d="M 60 75 L 275 205"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="280" y="210" className="fill-primary text-xs font-semibold">D=AR</text>
            
            {/* MR Curve - twice as steep as AR */}
            <motion.path
              d="M 60 75 L 168 205"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="178" y="212" className="fill-purple-400 text-xs font-semibold">MR</text>
            
            {/* THE KEY TANGENT POINT - P = ATC, where AR just touches ATC */}
            <motion.circle
              cx="145" cy="126"
              r="7"
              fill="hsl(var(--accent))"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            
            {/* MC = MR intersection */}
            <motion.circle
              cx="145" cy="177"
              r="5"
              fill="#a855f7"
              stroke="white"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.3 }}
            />
            
            {/* Tangent point annotation */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <line x1="145" y1="126" x2="192" y2="96" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
              <text x="196" y="92" className="fill-accent text-[9px] font-semibold">Tangent Point</text>
              <text x="196" y="102" className="fill-accent text-[9px]">(P = ATC)</text>
            </motion.g>
            
            {/* Price/ATC line to Y-axis (same point since P=ATC) */}
            <motion.line
              x1="55" y1="126" x2="145" y2="126"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="52" y="120" textAnchor="end" className="fill-accent text-[10px] font-semibold">P=ATC</text>
            
            {/* Quantity line */}
            <motion.line
              x1="145" y1="126" x2="145" y2="255"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="145" y="270" textAnchor="middle" className="fill-muted-foreground text-[10px] font-semibold">Q*</text>
            
            {/* MC=MR label */}
            <text x="152" y="188" className="fill-purple-300 text-[8px]">MC=MR</text>
            
            {/* Excess Capacity indicator */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <line x1="145" y1="248" x2="195" y2="248" stroke="#ef4444" strokeWidth="2" />
              <line x1="145" y1="244" x2="145" y2="252" stroke="#ef4444" strokeWidth="2" />
              <line x1="195" y1="244" x2="195" y2="252" stroke="#ef4444" strokeWidth="2" />
              <text x="170" y="230" textAnchor="middle" className="fill-red-400 text-[8px]">Excess</text>
              <text x="170" y="240" textAnchor="middle" className="fill-red-400 text-[8px]">Capacity</text>
            </motion.g>
          </svg>
        </div>
      </div>

      {/* Chain of Analysis */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          <strong className="text-foreground">Chain of Analysis:</strong> In <strong className="text-green-400">short-run</strong>, supernormal profits (P &gt; ATC) attract new entrants → 
          Market share per firm decreases → Demand curve shifts left → Entry continues until AR becomes <strong className="text-amber-400">tangent to ATC</strong> in <strong className="text-blue-400">long-run</strong> → 
          Normal profit (P = ATC) at profit-maximizing output (MC = MR). Note: Output is <strong className="text-red-400">not at minimum ATC</strong>, creating <strong>excess capacity</strong> and <strong>allocative inefficiency</strong> (P &gt; MC).
        </p>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-200 text-xs leading-relaxed">
            <strong>Short-Run:</strong> Supernormal profits (shaded rectangle) attract new firms, increasing competition 
            and reducing demand for each existing firm.
          </p>
        </div>
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-200 text-xs leading-relaxed">
            <strong>Long-Run:</strong> Entry continues until AR is <em>tangent</em> to ATC (P = ATC), 
            leaving only normal profit. The tangent point is <strong>NOT at minimum ATC</strong> → excess capacity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonopolisticCompetitionDiagram;
