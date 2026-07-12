import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PolicyConflictsDiagram: React.FC = () => {
  const [activeConflict, setActiveConflict] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
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

    return => observer.disconnect();
  }, []);

  const objectives = [
    { id: 1, name: 'Economic\nGrowth', symbol: '↑Y', x: 50, y: 30, color: 'hsl(142 76% 50%)' },
    { id: 2, name: 'Low\nUnemployment', symbol: '↓U', x: 80, y: 65, color: 'hsl(200 80% 55%)' },
    { id: 3, name: 'Price\nStability', symbol: '↓π', x: 50, y: 100, color: 'hsl(36 100% 50%)' },
    { id: 4, name: 'BoP\nEquilibrium', symbol: '(X-M)≈0', x: 20, y: 65, color: 'hsl(280 70% 60%)' },
  ];

  const conflicts = [
    {
      id: 1,
      from: 1, to: 3,
      title: 'Growth vs Inflation',
      desc: 'Expansionary policy to boost growth (↑Y) shifts AD right, but this causes demand-pull inflation (↑P). The Phillips Curve trade-off: lower unemployment comes at the cost of higher inflation in the short run.',
      mechanism: '↑AD → ↑Y → ↑Employment → ↑Wages → ↑Costs → ↑P'
    },
    {
      id: 2,
      from: 1, to: 4,
      title: 'Growth vs Current Account',
      desc: 'Economic growth increases national income (Y), which raises the demand for imports (MPM × ΔY). If export growth does not keep pace, the current account worsens.',
      mechanism: '↑Y → ↑Disposable Income → ↑Imports (M) → ↓(X-M) → CA Deficit'
    },
    {
      id: 3,
      from: 2, to: 3,
      title: 'Unemployment vs Inflation',
      desc: 'The Short-Run Phillips Curve shows an inverse relationship. Reducing unemployment requires higher AD, which generates inflationary pressure. Achieving both low unemployment AND low inflation is difficult without supply-side improvements.',
      mechanism: '↓U (via ↑AD) → Labour shortages → ↑Wages → ↑Unit Costs → ↑P'
    },
    {
      id: 4,
      from: 3, to: 4,
      title: 'Inflation vs Competitiveness',
      desc: 'If domestic inflation exceeds that of trading partners, exports become relatively more expensive and imports cheaper. This worsens international competitiveness and the current account.',
      mechanism: '↑P(domestic) > ↑P(foreign) → ↑Relative Export Prices → ↓X, ↑M → ↓(X-M)'
    },
  ];

  const getObjectivePosition = (id: number) => {
    const obj = objectives.find(o => o.id === id);
    return obj ? { x: obj.x, y: obj.y } : { x: 50, y: 50 };
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" as const }
    })
  };

  return (
    <div ref={containerRef} className="glass-card p-5 rounded-xl">
      <h3 className="font-serif text-lg text-foreground mb-2">Policy Conflicts & Trade-offs</h3>
      <p className="text-xs text-muted-foreground mb-4">
        Click each conflict line to explore the trade-off between objectives
      </p>

      <div className="relative">
        <svg viewBox="0 0 100 130" className="w-full max-w-md mx-auto" style={{ aspectRatio: '100/130' }}>
          {/* Conflict lines */}
          {conflicts.map((conflict, index) => {
            const from = getObjectivePosition(conflict.from);
            const to = getObjectivePosition(conflict.to);
            const isActive = activeConflict === conflict.id;
            
            return (
              <motion.line
                key={conflict.id}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "hsl(0 84% 60%)" : "hsl(var(--muted-foreground))"}
                strokeWidth={isActive ? 3 : 1.5}
                strokeDasharray={isActive ? "0" : "4,4"}
                opacity={isActive ? 1 : 0.5}
                className="cursor-pointer"
                onClick={() => setActiveConflict(isActive ? 0 : conflict.id)}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: isActive ? 1 : 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              />
            );
          })}

          {/* Objective nodes */}
          {objectives.map((obj, index) => (
            <motion.g
              key={obj.id}
              variants={itemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              custom={index}
            >
              <circle
                cx={obj.x}
                cy={obj.y}
                r={12}
                fill="hsl(var(--card))"
                stroke={obj.color}
                strokeWidth={2.5}
              />
              <text
                x={obj.x}
                y={obj.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={obj.color}
                className="text-[7px] font-bold"
              >
                {obj.symbol}
              </text>
              <text
                x={obj.x}
                y={obj.y + (obj.id === 1 ? -20 : obj.id === 3 ? 22 : obj.id === 2 ? 22 : 22)}
                textAnchor="middle"
                className="fill-foreground text-[6px] font-medium"
              >
                {obj.name.split('\n').map((line, i) => (
                  <tspan key={i} x={obj.x} dy={i === 0 ? 0 : 7}>{line}</tspan>
                ))}
              </text>
            </motion.g>
          ))}

          {/* Central label */}
          <text x="50" y="65" textAnchor="middle" className="fill-muted-foreground text-[5px]">
            TRADE-OFFS
          </text>
        </svg>
      </div>

      {/* Detail Panel */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: activeConflict ? 1 : 0, 
          height: activeConflict ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {activeConflict > 0 && (
          <div className="p-4 rounded-lg border mt-4" style={{ 
            backgroundColor: 'hsl(0 84% 60% / 0.1)',
            borderColor: 'hsl(0 84% 60% / 0.3)'
          }}>
            <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(0 84% 60%)' }}>
              {conflicts.find(c => c.id === activeConflict)?.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {conflicts.find(c => c.id === activeConflict)?.desc}
            </p>
            <div className="p-2 bg-card rounded border border-border">
              <p className="text-xs font-mono text-muted-foreground">
                <strong className="text-foreground">Mechanism: </strong>
                {conflicts.find(c => c.id === activeConflict)?.mechanism}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Conflict List */}
      <div className="grid md:grid-cols-2 gap-2 mt-4">
        {conflicts.map((conflict) => (
          <div 
            key={conflict.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
              activeConflict === conflict.id 
                ? 'border-destructive bg-destructive/10' 
                : 'border-border bg-card/50 hover:border-muted-foreground'
            }`}
            onClick={() => setActiveConflict(activeConflict === conflict.id ? 0 : conflict.id)}
          >
            <div className="flex items-center gap-2">
              <div className="text-destructive text-lg">⚡</div>
              <div>
                <h5 className="text-xs font-semibold text-foreground">{conflict.title}</h5>
                <p className="text-[10px] text-muted-foreground mt-0.5">{objectives.find(o => o.id === conflict.from)?.symbol} ⟷ {objectives.find(o => o.id === conflict.to)?.symbol}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Examiner's Conclusion */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm border-l-4 border-destructive">
        <p className="text-foreground/90 leading-relaxed">
          <strong className="text-primary">Senior Examiner's Conclusion:</strong> The existence of policy conflicts means that governments cannot simultaneously achieve all four major macroeconomic objectives. The short-run Phillips Curve demonstrates the inflation-unemployment trade-off; economic growth tends to worsen the current account through the marginal propensity to import; and domestic inflation erodes international competitiveness. <strong>Supply-side policies offer the only genuine "escape" from these trade-offs</strong>, as they shift LRAS rightward, enabling higher growth without inflation—but only in the long run. In the short run, policymakers must prioritise, and the choice of priority is as much a political decision as an economic one.
        </p>
      </div>
    </div>
  );
};

export default PolicyConflictsDiagram;
