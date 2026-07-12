import { useEffect, useRef, useState } from 'react';
import { motion, type Easing } from 'framer-motion';

interface ActualPotentialGrowthDiagramProps {
  title?: string;
}

const ActualPotentialGrowthDiagram = ({ title }: ActualPotentialGrowthDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showActual, setShowActual] = useState(false);
  const [showPotential, setShowPotential] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

    return => observer.disconnect();
  }, []);

  const easeInOut: Easing = [0.42, 0, 0.58, 1];

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: easeInOut }
    }
  };

  const pointVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay, duration: 0.4, type: "spring" as const }
    })
  };

  return (
    <div ref={containerRef} className="w-full my-4">
      {title && (
        <h4 className="font-serif text-lg text-foreground text-center mb-3">{title}</h4>
      )}
      
      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        <button
          onClick={() => setShowActual(!showActual)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showActual 
              ? 'bg-cambridge-cyan text-background' 
              : 'bg-muted/50 text-muted-foreground hover:bg-muted'
          }`}
        >
          {showActual ? 'Hide' : 'Show'} Actual Growth
        </button>
        <button
          onClick={() => setShowPotential(!showPotential)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showPotential 
              ? 'bg-cambridge-green text-background' 
              : 'bg-muted/50 text-muted-foreground hover:bg-muted'
          }`}
        >
          {showPotential ? 'Hide' : 'Show'} Potential Growth
        </button>
      </div>

      {/* Two diagrams side by side */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* PPC Diagram */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
          <p className="text-xs font-semibold text-primary text-center mb-2">PPC Model</p>
          <svg viewBox="0 0 280 240" className="w-full h-auto">
            {/* Grid */}
            <defs>
              <linearGradient id="ppcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(217 91% 60%)" />
              </linearGradient>
              <linearGradient id="ppcGrowthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(142 76% 36%)" />
                <stop offset="100%" stopColor="hsl(142 69% 58%)" />
              </linearGradient>
            </defs>

            {/* Axes */}
            <motion.line
              x1="40" y1="200" x2="260" y2="200"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.line
              x1="40" y1="200" x2="40" y2="20"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Arrows */}
            <polygon points="260,200 252,196 252,204" fill="hsl(var(--muted-foreground))" />
            <polygon points="40,20 36,28 44,28" fill="hsl(var(--muted-foreground))" />

            {/* Labels */}
            <text x="150" y="225" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Good X</text>
            <text x="15" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" transform="rotate(-90, 15, 110)">Good Y</text>

            {/* Original PPC */}
            <motion.path
              d="M 55 40 Q 80 70 130 130 Q 180 180 230 185"
              fill="none"
              stroke="url(#ppcGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="240" y="178" fill="hsl(var(--primary))" fontSize="9" fontWeight="600">PPC₁</text>

            {/* Potential Growth - Outward shift */}
            {showPotential && (
              <>
                <motion.path
                  d="M 60 30 Q 95 65 150 120 Q 205 170 250 175"
                  fill="none"
                  stroke="url(#ppcGrowthGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="6 3"
                  variants={curveVariants}
                  initial="hidden"
                  animate="visible"
                />
                <text x="258" y="168" fill="hsl(142 69% 58%)" fontSize="9" fontWeight="600">PPC₂</text>
                
                {/* Arrow showing shift */}
                <motion.path
                  d="M 130 130 L 150 120"
                  stroke="hsl(142 69% 58%)"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowGreen)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                />
                <defs>
                  <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 Z" fill="hsl(142 69% 58%)" />
                  </marker>
                </defs>
              </>
            )}

            {/* Actual Growth - Movement inside to boundary */}
            {showActual && (
              <>
                {/* Point inside curve */}
                <motion.circle
                  cx="100" cy="130" r="5"
                  fill="hsl(var(--destructive))"
                  variants={pointVariants}
                  custom={0.3}
                  initial="hidden"
                  animate="visible"
                />
                <text x="90" y="145" fill="hsl(var(--destructive))" fontSize="8">H</text>

                {/* Point on curve */}
                <motion.circle
                  cx="130" cy="130" r="5"
                  fill="hsl(var(--cambridge-cyan))"
                  variants={pointVariants}
                  custom={0.5}
                  initial="hidden"
                  animate="visible"
                />
                <text x="135" y="125" fill="hsl(var(--cambridge-cyan))" fontSize="8">A</text>

                {/* Arrow from H to A */}
                <motion.path
                  d="M 105 130 L 124 130"
                  stroke="hsl(var(--cambridge-cyan))"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowCyan)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                />
                <defs>
                  <marker id="arrowCyan" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 Z" fill="hsl(var(--cambridge-cyan))" />
                  </marker>
                </defs>
              </>
            )}
          </svg>
        </div>

        {/* AD/AS Keynesian Diagram */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
          <p className="text-xs font-semibold text-primary text-center mb-2">Keynesian AD/AS Model</p>
          <svg viewBox="0 0 280 240" className="w-full h-auto">
            <defs>
              <linearGradient id="asGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--muted-foreground))" />
                <stop offset="100%" stopColor="hsl(var(--foreground))" />
              </linearGradient>
            </defs>

            {/* Axes */}
            <motion.line
              x1="40" y1="200" x2="260" y2="200"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.line
              x1="40" y1="200" x2="40" y2="20"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Arrows */}
            <polygon points="260,200 252,196 252,204" fill="hsl(var(--muted-foreground))" />
            <polygon points="40,20 36,28 44,28" fill="hsl(var(--muted-foreground))" />

            {/* Labels */}
            <text x="150" y="225" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Real GDP (Y)</text>
            <text x="15" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" transform="rotate(-90, 15, 110)">Price Level (P)</text>

            {/* Keynesian AS (L-shaped) */}
            <motion.path
              d="M 50 160 L 180 160 Q 200 160 210 140 Q 220 120 220 40"
              fill="none"
              stroke="url(#asGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
            <text x="228" y="40" fill="hsl(var(--foreground))" fontSize="9" fontWeight="600">AS</text>

            {/* Original AD */}
            <motion.path
              d="M 60 50 Q 100 100 130 160"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              variants={curveVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            />
            <text x="65" y="45" fill="hsl(var(--primary))" fontSize="9" fontWeight="600">AD₁</text>

            {/* Actual Growth - AD shift on horizontal section */}
            {showActual && (
              <>
                <motion.path
                  d="M 90 50 Q 130 100 160 160"
                  fill="none"
                  stroke="hsl(var(--cambridge-cyan))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="5 3"
                  variants={curveVariants}
                  initial="hidden"
                  animate="visible"
                />
                <text x="95" y="45" fill="hsl(var(--cambridge-cyan))" fontSize="9" fontWeight="600">AD₂</text>
                
                {/* Equilibrium points */}
                <motion.circle cx="130" cy="160" r="4" fill="hsl(var(--primary))" variants={pointVariants} custom={0.5} initial="hidden" animate="visible" />
                <motion.circle cx="160" cy="160" r="4" fill="hsl(var(--cambridge-cyan))" variants={pointVariants} custom={0.7} initial="hidden" animate="visible" />
                
                {/* Y labels */}
                <line x1="130" y1="160" x2="130" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
                <line x1="160" y1="160" x2="160" y2="200" stroke="hsl(var(--cambridge-cyan))" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
                <text x="130" y="212" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8">Y₁</text>
                <text x="160" y="212" textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="8">Y₂</text>
              </>
            )}

            {/* Potential Growth - LRAS shift */}
            {showPotential && (
              <>
                {/* New AS curve shifted right */}
                <motion.path
                  d="M 50 160 L 210 160 Q 230 160 240 140 Q 250 120 250 40"
                  fill="none"
                  stroke="hsl(142 69% 58%)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="6 3"
                  variants={curveVariants}
                  initial="hidden"
                  animate="visible"
                />
                <text x="258" y="40" fill="hsl(142 69% 58%)" fontSize="9" fontWeight="600">AS₂</text>
                
                {/* Arrow showing shift */}
                <motion.path
                  d="M 220 100 L 250 100"
                  stroke="hsl(142 69% 58%)"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowGreen2)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                />
                <defs>
                  <marker id="arrowGreen2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 Z" fill="hsl(142 69% 58%)" />
                  </marker>
                </defs>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-3 grid md:grid-cols-2 gap-3 text-xs">
        <div className="bg-cambridge-cyan/10 p-2.5 rounded-lg border border-cambridge-cyan/30">
          <p className="font-semibold text-cambridge-cyan mb-1">Actual (Short-Run) Growth</p>
          <p className="text-muted-foreground">
            Movement from <strong>inside</strong> the PPC to the boundary (H→A). In AD/AS, this is an <strong>AD shift along the horizontal section</strong> of AS, increasing real GDP without inflation.
          </p>
        </div>
        <div className="bg-cambridge-green/10 p-2.5 rounded-lg border border-cambridge-green/30">
          <p className="font-semibold text-cambridge-green mb-1">Potential (Long-Run) Growth</p>
          <p className="text-muted-foreground">
            <strong>Outward shift</strong> of the entire PPC boundary. In AD/AS, this is a <strong>rightward shift of the AS curve</strong>, expanding the economy's productive capacity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualPotentialGrowthDiagram;
