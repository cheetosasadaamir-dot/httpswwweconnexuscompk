import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * Expansionary Fiscal Policy AD Shift Diagram
 * EconomicsHelp Standard: Shows rightward AD shift from ↑G or ↓T
 * with multiplier effect amplifying the initial injection
 *  Y₁ → Y₂ output expansion, P₁ → P₂ price level increase
 */
const ExpansionaryFiscalPolicyDiagram = () => {
  const [showShift, setShowShift] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
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

    return () => observer.disconnect();
  }, []);

  const width = 600;
  const height = 480;
  const margin = { top: 50, right: 60, bottom: 80, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Colors - EconomicsHelp / 5D Aesthetic
  const adColor = "#22D3EE"; // Neon Cyan
  const ad2Color = "#00f2ff"; // Brighter Cyan for shifted
  const srasColor = "#F59E0B"; // Amber Gold
  const lrasColor = "#FFFFFF"; // White for LRAS

  // AD curve (original)
  const adPoints = [
    { x: 12, y: 90 },
    { x: 25, y: 72 },
    { x: 40, y: 55 },
    { x: 55, y: 42 },
    { x: 70, y: 32 },
    { x: 85, y: 24 },
  ];

  // AD curve shifted (significant shift to show multiplier effect)
  const adShiftedPoints = adPoints.map(p => ({ x: p.x + 20, y: p.y }));

  // SRAS curve (upward sloping)
  const srasPoints = [
    { x: 10, y: 15 },
    { x: 25, y: 22 },
    { x: 40, y: 32 },
    { x: 55, y: 45 },
    { x: 70, y: 62 },
    { x: 80, y: 85 },
  ];

  // LRAS position
  const lrasX = 75;

  // Equilibrium points
  const eq1 = { x: 52, y: 43 }; // Original equilibrium
  const eq2 = { x: 68, y: 58 }; // New equilibrium after shift

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX1 = xScale(prev.x + (curr.x - prev.x) / 3);
      const cpY1 = yScale(prev.y + (curr.y - prev.y) / 4);
      const cpX2 = xScale(prev.x + 2 * (curr.x - prev.x) / 3);
      const cpY2 = yScale(prev.y + 3 * (curr.y - prev.y) / 4);
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${xScale(curr.x)} ${yScale(curr.y)}`;
    }
    return d;
  };

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  const replayAnimation = () => {
    setShowShift(false);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => setShowShift(true), 100);
  };

  return (
    <div ref={containerRef} className="glass-card p-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">Expansionary Fiscal Policy: AD Shift</h3>
          <p className="text-muted-foreground text-sm mt-1">
            ↑G or ↓T causes AD to shift right, with the <strong>multiplier effect</strong> amplifying the shift
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={showShift ? "default" : "outline"}
            size="sm"
            onClick={() => setShowShift(!showShift)}
          >
            {showShift ? "Hide Shift" : "Show Policy Effect"}
          </Button>
          {showShift && (
            <Button variant="ghost" size="sm" onClick={replayAnimation}>
              ↻ Replay
            </Button>
          )}
        </div>
      </div>

      {/* Formal Definition */}
      <div className="mb-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-primary">AD Identity:</span>{' '}
          <InlineMath math="AD = C + I + G + (X - M)" />. Expansionary fiscal policy increases G (government spending) 
          or reduces T (taxation), directly injecting demand into the circular flow. The multiplier 
          <InlineMath math="k = \frac{1}{1 - MPC}" /> amplifies the initial injection.
        </p>
      </div>

      <svg key={animationKey} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-2xl mx-auto">
        <defs>
          <pattern id="grid-fiscal" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          <marker id="arrow-fiscal" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
          <marker id="shift-arrow-fiscal" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={ad2Color} />
          </marker>
        </defs>

        {/* Grid */}
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-fiscal)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-fiscal)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-fiscal)"
        />

        {/* Axis Labels - Exam Standard */}
        <text 
          x={margin.left + chartWidth / 2} 
          y={height - 20} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="600"
        >
          Real National Output / Real GDP (Y)
        </text>
        <text 
          x={25} 
          y={margin.top + chartHeight / 2} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="600"
          transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}
        >
          General Price Level (GPL)
        </text>

        {/* LRAS - Vertical */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(95)}
          x2={xScale(lrasX)} y2={yScale(5)}
          stroke={lrasColor}
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        />
        <motion.text 
          x={xScale(lrasX) + 8} 
          y={yScale(97)} 
          fill={lrasColor}
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          LRAS
        </motion.text>

        {/* SRAS Curve */}
        <motion.path
          d={pathFromPoints(srasPoints)}
          fill="none"
          stroke={srasColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(83)} 
          y={yScale(88)} 
          fill={srasColor}
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          SRAS
        </motion.text>

        {/* Original AD Curve */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke={adColor}
          strokeWidth="3.5"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(88)} 
          y={yScale(22)} 
          fill={adColor}
          fontSize="14" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          AD₁
        </motion.text>

        {/* Original Equilibrium E₁ */}
        <motion.circle
          cx={xScale(eq1.x)}
          cy={yScale(eq1.y)}
          r="7"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.3, type: "spring" }}
        />
        <motion.text 
          x={xScale(eq1.x) - 18} 
          y={yScale(eq1.y) - 12} 
          fill="hsl(var(--foreground))" 
          fontSize="13" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          E₁
        </motion.text>

        {/* Dashed lines to axes for E₁ */}
        <motion.line
          x1={xScale(eq1.x)} y1={yScale(eq1.y)}
          x2={xScale(eq1.x)} y2={yScale(0)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.3 }}
        />
        <motion.line
          x1={xScale(eq1.x)} y1={yScale(eq1.y)}
          x2={margin.left} y2={yScale(eq1.y)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.3 }}
        />
        <motion.text 
          x={xScale(eq1.x)} 
          y={yScale(0) + 18} 
          textAnchor="middle" 
          fill="hsl(var(--primary))" 
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          Y₁
        </motion.text>
        <motion.text 
          x={margin.left - 18} 
          y={yScale(eq1.y) + 4} 
          textAnchor="end" 
          fill="hsl(var(--primary))" 
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          P₁
        </motion.text>

        {/* Shifted AD₂ and new equilibrium */}
        {showShift && (
          <>
            {/* Shift Arrow */}
            <motion.path
              d={`M ${xScale(eq1.x) + 10} ${yScale(eq1.y)} L ${xScale(eq2.x) - 10} ${yScale(eq2.y)}`}
              fill="none"
              stroke={ad2Color}
              strokeWidth="2.5"
              markerEnd="url(#shift-arrow-fiscal)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* AD₂ Curve */}
            <motion.path
              d={pathFromPoints(adShiftedPoints)}
              fill="none"
              stroke={ad2Color}
              strokeWidth="3.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.text 
              x={xScale(108)} 
              y={yScale(22)} 
              fill={ad2Color}
              fontSize="14" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              AD₂
            </motion.text>

            {/* New Equilibrium E₂ */}
            <motion.circle
              cx={xScale(eq2.x)}
              cy={yScale(eq2.y)}
              r="8"
              fill={ad2Color}
              stroke="hsl(var(--background))"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            />
            <motion.text 
              x={xScale(eq2.x) + 14} 
              y={yScale(eq2.y) - 8} 
              fill={ad2Color} 
              fontSize="14" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              E₂
            </motion.text>

            {/* Dashed lines to axes for E₂ */}
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={xScale(eq2.x)} y2={yScale(0)}
              stroke={ad2Color}
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.2 }}
            />
            <motion.line
              x1={xScale(eq2.x)} y1={yScale(eq2.y)}
              x2={margin.left} y2={yScale(eq2.y)}
              stroke={ad2Color}
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.2 }}
            />
            <motion.text 
              x={xScale(eq2.x)} 
              y={yScale(0) + 18} 
              textAnchor="middle" 
              fill={ad2Color} 
              fontSize="13"
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Y₂
            </motion.text>
            <motion.text 
              x={margin.left - 18} 
              y={yScale(eq2.y) + 4} 
              textAnchor="end" 
              fill={ad2Color} 
              fontSize="13"
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              P₂
            </motion.text>

            {/* ΔY indicator */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <line 
                x1={xScale(eq1.x)} y1={yScale(0) + 30}
                x2={xScale(eq2.x)} y2={yScale(0) + 30}
                stroke={ad2Color} strokeWidth="2"
              />
              <polygon 
                points={`${xScale(eq1.x)},${yScale(0) + 25} ${xScale(eq1.x) + 6},${yScale(0) + 30} ${xScale(eq1.x)},${yScale(0) + 35}`}
                fill={ad2Color}
              />
              <polygon 
                points={`${xScale(eq2.x)},${yScale(0) + 25} ${xScale(eq2.x) - 6},${yScale(0) + 30} ${xScale(eq2.x)},${yScale(0) + 35}`}
                fill={ad2Color}
              />
              <text 
                x={(xScale(eq1.x) + xScale(eq2.x)) / 2} 
                y={yScale(0) + 45} 
                textAnchor="middle" 
                fill={ad2Color} 
                fontSize="11"
                fontWeight="600"
              >
                ΔY = k × ΔG
              </text>
            </motion.g>

            {/* Multiplier Box */}
            <motion.rect
              x={xScale(78)} y={yScale(42)}
              width="100" height="50" rx="6"
              fill="rgba(34, 211, 238, 0.15)" 
              stroke={ad2Color} strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            />
            <motion.text 
              x={xScale(78) + 50} y={yScale(42) + 18} 
              textAnchor="middle" fill={ad2Color} fontSize="10" fontWeight="bold"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
            >
              MULTIPLIER EFFECT
            </motion.text>
            <motion.text 
              x={xScale(78) + 50} y={yScale(42) + 32} 
              textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
            >
              ΔY {'>'} ΔG
            </motion.text>
            <motion.text 
              x={xScale(78) + 50} y={yScale(42) + 44} 
              textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
            >
              (k = 1/(1-MPC))
            </motion.text>
          </>
        )}

        {/* Yf label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <text 
            x={xScale(lrasX)} 
            y={yScale(0) + 18} 
            textAnchor="middle" 
            fill={lrasColor}
            fontSize="12" 
            fontWeight="600"
          >
            Yf
          </text>
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: adColor }} />
          <span className="text-muted-foreground">Original AD₁</span>
        </div>
        {showShift && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: ad2Color }} />
            <span className="text-muted-foreground">Shifted AD₂</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: srasColor }} />
          <span className="text-muted-foreground">SRAS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: lrasColor }} />
          <span className="text-muted-foreground">LRAS</span>
        </div>
      </div>

      {/* Chain of Analysis */}
      <div className="mt-6 p-5 bg-muted/20 rounded-xl border border-primary/10">
        <h4 className="font-semibold text-primary mb-3 text-base">Logic Map: Expansionary Fiscal Policy Transmission</h4>
        <div className="font-mono text-sm bg-muted/40 p-4 rounded-lg mb-4 overflow-x-auto">
          <span className="text-secondary">↓ Interest Rates / ↑ Government Spending</span>
          <span className="mx-2">→</span>
          <span className="text-primary">↑ Investment (I) / ↑ G</span>
          <span className="mx-2">→</span>
          <span className="text-neon-cyan">AD shifts right (AD₁ → AD₂)</span>
          <span className="mx-2">→</span>
          <span className="text-secondary">Multiplier Effect (k × ΔG)</span>
          <span className="mx-2">→</span>
          <span className="text-amber-400">↑ Real Output (Y₁ → Y₂) & ↑ Price Level (P₁ → P₂)</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          The <strong>multiplier effect</strong> ensures that the final increase in equilibrium national income 
          (ΔY) exceeds the initial injection (ΔG) by a factor of <InlineMath math="k = \frac{1}{1-MPC}" />. 
          For example, if MPC = 0.8, then k = 5, meaning a £10bn increase in government spending leads to 
          a £50bn increase in equilibrium GDP. This amplification occurs because initial spending becomes 
          income for households, who respend a proportion (MPC), creating successive rounds of induced 
          consumption until the sum of leakages (S + T + M) equals the initial injection.
        </p>
      </div>

      {/* Examiner Tip */}
      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs">
        <span className="font-semibold text-amber-400">⚠️ Exam Precision:</span>
        <span className="text-muted-foreground ml-2">
          The diagram shows the short-run effect where output rises from Y₁ to Y₂ (closing a recessionary gap). 
          However, note that P also rises (P₁ → P₂), meaning there is a trade-off between growth and inflation. 
          The closer the economy is to Yf, the more AD shifts translate into inflation rather than real growth.
        </span>
      </div>
    </div>
  );
};

export default ExpansionaryFiscalPolicyDiagram;
