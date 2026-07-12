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

    return => observer.disconnect();
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
            <text x="28" y="140" textAnchor="middle" className="fill-muted-foreground text-xs font-medium" transform="rotate(-90, 28, 140)">Price/Cost (£)</text>
            
            {/* MC Curve - intersects MR at Q=145 */}
            <motion.path
              d="M 80 235 Q 110 190 130 150 Q 145 115 160 85 Q 175 55 195 35"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="200" y="32" className="fill-green-400 text-xs font-semibold">MC</text>
            
            {/* ATC Curve - U-shaped, minimum at around Q=160 */}
            <motion.path
              d="M 70 185 Q 95 115 145 100 Q 190 92 230 105 Q 270 125 295 155"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="300" y="160" className="fill-amber-400 text-xs font-semibold">ATC</text>
            
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
              d="M 60 55 L 200 210"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="205" y="215" className="fill-purple-400 text-xs font-semibold">MR</text>
            
            {/* Supernormal Profit area - rectangle between P and ATC at Q* */}
            <motion.rect
              x="55" y="85" width="90" height="20"
              fill="hsl(142 76% 36% / 0.35)"
              stroke="hsl(142 76% 45%)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="100" y="98" textAnchor="middle" className="fill-green-300 text-[9px] font-semibold">Supernormal Profit</text>
            
            {/* MC = MR intersection point */}
            <motion.circle
              cx="145" cy="125"
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
              cx="145" cy="85"
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
              cx="145" cy="105"
              r="4"
              fill="#f59e0b"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 1.35, duration: 0.3 }}
            />
            
            {/* Price line to Y-axis */}
            <motion.line
              x1="55" y1="85" x2="145" y2="85"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="45" y="88" textAnchor="end" className="fill-accent text-[10px] font-semibold">P</text>
            
            {/* ATC line to Y-axis */}
            <motion.line
              x1="55" y1="105" x2="145" y2="105"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
            />
            <text x="45" y="108" textAnchor="end" className="fill-amber-400 text-[10px] font-semibold">ATC</text>
            
            {/* Quantity line */}
            <motion.line
              x1="145" y1="125" x2="145" y2="255"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="145" y="270" textAnchor="middle" className="fill-muted-foreground text-[10px] font-semibold">Q*</text>
            
            {/* MC=MR label */}
            <text x="158" y="120" className="fill-purple-300 text-[8px]">MC=MR</text>
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
            <text x="28" y="140" textAnchor="middle" className="fill-muted-foreground text-xs font-medium" transform="rotate(-90, 28, 140)">Price/Cost (£)</text>
            
            {/* MC Curve - intersects MR at Q where AR is tangent to ATC */}
            <motion.path
              d="M 80 235 Q 105 195 120 160 Q 135 125 150 95 Q 165 70 180 50"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="185" y="47" className="fill-green-400 text-xs font-semibold">MC</text>
            
            {/* ATC Curve - TANGENT to AR at the profit-maximizing output */}
            <motion.path
              d="M 70 200 Q 90 145 125 115 Q 160 95 200 100 Q 250 115 290 145"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="295" y="150" className="fill-amber-400 text-xs font-semibold">ATC</text>
            
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
              d="M 60 75 L 180 205"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="185" y="210" className="fill-purple-400 text-xs font-semibold">MR</text>
            
            {/* THE KEY TANGENT POINT - P = ATC, where AR just touches ATC */}
            <motion.circle
              cx="130" cy="115"
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
              cx="130" cy="145"
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
              <line x1="130" y1="115" x2="175" y2="85" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
              <text x="180" y="80" className="fill-accent text-[9px] font-semibold">Tangent Point</text>
              <text x="180" y="90" className="fill-accent text-[9px]">(P = ATC)</text>
            </motion.g>
            
            {/* Price/ATC line to Y-axis (same point since P=ATC) */}
            <motion.line
              x1="55" y1="115" x2="130" y2="115"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="45" y="118" textAnchor="end" className="fill-accent text-[10px] font-semibold">P=ATC</text>
            
            {/* Quantity line */}
            <motion.line
              x1="130" y1="115" x2="130" y2="255"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <text x="130" y="270" textAnchor="middle" className="fill-muted-foreground text-[10px] font-semibold">Q*</text>
            
            {/* MC=MR label */}
            <text x="143" y="142" className="fill-purple-300 text-[8px]">MC=MR</text>
            
            {/* Excess Capacity indicator */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <line x1="130" y1="245" x2="165" y2="245" stroke="#ef4444" strokeWidth="2" />
              <line x1="130" y1="241" x2="130" y2="249" stroke="#ef4444" strokeWidth="2" />
              <line x1="165" y1="241" x2="165" y2="249" stroke="#ef4444" strokeWidth="2" />
              <text x="147" y="238" textAnchor="middle" className="fill-red-400 text-[8px]">Excess</text>
              <text x="147" y="248" textAnchor="middle" className="fill-red-400 text-[8px]">Capacity</text>
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
