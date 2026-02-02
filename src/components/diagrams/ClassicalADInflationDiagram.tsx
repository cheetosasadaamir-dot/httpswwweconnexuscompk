import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

/**
 * Classical/Monetarist AD Shift - Pure Inflation Effect
 * EconomicsHelp Standard: With vertical LRAS, AD increase only raises P
 * Output remains fixed at Yf (full employment)
 * CIE 9708: Demonstrates why Monetarists argue demand-side policy is ineffective
 */
const ClassicalADInflationDiagram = () => {
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

  const width = 580;
  const height = 460;
  const margin = { top: 50, right: 60, bottom: 75, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Colors
  const adColor = "#22D3EE"; // Neon Cyan
  const ad2Color = "#00f2ff"; // Brighter Cyan
  const lrasColor = "#FFFFFF"; // White
  const inflationColor = "#EF4444"; // Red for inflation

  // LRAS position (vertical at Yf)
  const lrasX = 65;

  // AD curves
  const adPoints = [
    { x: 15, y: 85 },
    { x: 30, y: 68 },
    { x: 45, y: 52 },
    { x: 60, y: 40 },
    { x: 75, y: 30 },
    { x: 90, y: 22 },
  ];

  const adShiftedPoints = adPoints.map(p => ({ x: p.x + 18, y: p.y }));

  // Equilibrium points
  const eq1Y = 40; // Original price level
  const eq2Y = 58; // New price level (higher)

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
          <h3 className="font-serif text-xl text-gradient">Classical/Monetarist View: AD Increase = Inflation Only</h3>
          <p className="text-muted-foreground text-sm mt-1">
            With vertical LRAS at Y<sub>f</sub>, AD shifts only change the price level
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={showShift ? "default" : "outline"}
            size="sm"
            onClick={() => setShowShift(!showShift)}
          >
            {showShift ? "Hide Effect" : "Show AD Increase"}
          </Button>
          {showShift && (
            <Button variant="ghost" size="sm" onClick={replayAnimation}>
              ↻ Replay
            </Button>
          )}
        </div>
      </div>

      {/* Classical Theory Box */}
      <div className="mb-4 p-4 bg-[hsl(var(--cambridge-green))]/10 border border-[hsl(var(--cambridge-green))]/30 rounded-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-[hsl(var(--cambridge-green))]">Classical/Monetarist Proposition:</span>{' '}
          In the <strong>long run</strong>, all factor prices are fully flexible. The economy naturally returns to 
          full employment output (Y<sub>f</sub>). Therefore, any increase in AD causes <em>only inflation</em> — 
          real output cannot exceed the economy's productive capacity.
        </p>
      </div>

      <svg key={animationKey} viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        <defs>
          <pattern id="grid-classical-ad" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          <marker id="arrow-classical-ad" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
          <marker id="inflation-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={inflationColor} />
          </marker>
        </defs>

        {/* Grid */}
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-classical-ad)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-classical-ad)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-classical-ad)"
        />

        {/* Axis Labels */}
        <text 
          x={margin.left + chartWidth / 2} 
          y={height - 20} 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="600"
        >
          Real National Output (Y)
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

        {/* LRAS - Perfectly Vertical */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(95)}
          x2={xScale(lrasX)} y2={yScale(5)}
          stroke={lrasColor}
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        />
        <motion.text 
          x={xScale(lrasX) + 10} 
          y={yScale(97)} 
          fill={lrasColor}
          fontSize="15" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          LRAS
        </motion.text>

        {/* Vertical annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <text x={xScale(lrasX) - 8} y={yScale(75)} fill={lrasColor} fontSize="9" textAnchor="end">
            Perfectly
          </text>
          <text x={xScale(lrasX) - 8} y={yScale(70)} fill={lrasColor} fontSize="9" textAnchor="end">
            Vertical
          </text>
        </motion.g>

        {/* Original AD Curve */}
        <motion.path
          d={pathFromPoints(adPoints)}
          fill="none"
          stroke={adColor}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(93)} 
          y={yScale(20)} 
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
          cx={xScale(lrasX)}
          cy={yScale(eq1Y)}
          r="7"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 1.3, type: "spring" }}
        />
        <motion.text 
          x={xScale(lrasX) - 18} 
          y={yScale(eq1Y) - 12} 
          fill="hsl(var(--foreground))" 
          fontSize="13" 
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          E₁
        </motion.text>

        {/* Dashed line to P₁ */}
        <motion.line
          x1={xScale(lrasX)} y1={yScale(eq1Y)}
          x2={margin.left} y2={yScale(eq1Y)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.3 }}
        />
        <motion.text 
          x={margin.left - 15} 
          y={yScale(eq1Y) + 4} 
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

        {/* Y* label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <line 
            x1={xScale(lrasX)} y1={yScale(0)}
            x2={xScale(lrasX)} y2={yScale(0) + 10}
            stroke={lrasColor} strokeWidth="2"
          />
          <text 
            x={xScale(lrasX)} 
            y={yScale(0) + 25} 
            textAnchor="middle" 
            fill={lrasColor}
            fontSize="13" 
            fontWeight="700"
          >
            Y* (Yf)
          </text>
        </motion.g>

        {/* Shifted AD and new equilibrium */}
        {showShift && (
          <>
            {/* AD₂ Curve */}
            <motion.path
              d={pathFromPoints(adShiftedPoints)}
              fill="none"
              stroke={ad2Color}
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <motion.text 
              x={xScale(110)} 
              y={yScale(20)} 
              fill={ad2Color}
              fontSize="14" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              AD₂
            </motion.text>

            {/* Shift Arrow */}
            <motion.path
              d={`M ${xScale(55)} ${yScale(50)} L ${xScale(70)} ${yScale(50)}`}
              fill="none"
              stroke={ad2Color}
              strokeWidth="2.5"
              markerEnd="url(#arrow-classical-ad)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* New Equilibrium E₂ - SAME X position, higher Y */}
            <motion.circle
              cx={xScale(lrasX)}
              cy={yScale(eq2Y)}
              r="8"
              fill={inflationColor}
              stroke="hsl(var(--background))"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            />
            <motion.text 
              x={xScale(lrasX) + 15} 
              y={yScale(eq2Y) - 8} 
              fill={inflationColor} 
              fontSize="14" 
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              E₂
            </motion.text>

            {/* Dashed line to P₂ */}
            <motion.line
              x1={xScale(lrasX)} y1={yScale(eq2Y)}
              x2={margin.left} y2={yScale(eq2Y)}
              stroke={inflationColor}
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1 }}
            />
            <motion.text 
              x={margin.left - 15} 
              y={yScale(eq2Y) + 4} 
              textAnchor="end" 
              fill={inflationColor} 
              fontSize="13"
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              P₂
            </motion.text>

            {/* ΔP Arrow (upward - inflation) */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <line 
                x1={margin.left + 15} y1={yScale(eq1Y)}
                x2={margin.left + 15} y2={yScale(eq2Y)}
                stroke={inflationColor} strokeWidth="3"
                markerEnd="url(#inflation-arrow)"
              />
              <text x={margin.left + 35} y={(yScale(eq1Y) + yScale(eq2Y)) / 2 + 4} fill={inflationColor} fontSize="11" fontWeight="bold">
                ΔP
              </text>
              <text x={margin.left + 35} y={(yScale(eq1Y) + yScale(eq2Y)) / 2 + 16} fill={inflationColor} fontSize="9">
                (Inflation)
              </text>
            </motion.g>

            {/* ΔY = 0 indicator */}
            <motion.rect
              x={xScale(lrasX) - 35} y={yScale(0) + 35}
              width="70" height="25" rx="4"
              fill="rgba(239, 68, 68, 0.2)" 
              stroke={inflationColor} strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <motion.text 
              x={xScale(lrasX)} y={yScale(0) + 52} 
              textAnchor="middle" fill={inflationColor} fontSize="11" fontWeight="bold"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            >
              ΔY = 0
            </motion.text>

            {/* Key insight box */}
            <motion.rect
              x={xScale(75)} y={yScale(75)}
              width="115" height="55" rx="6"
              fill="rgba(239, 68, 68, 0.15)" 
              stroke={inflationColor} strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            />
            <motion.text 
              x={xScale(75) + 57} y={yScale(75) + 16} 
              textAnchor="middle" fill={inflationColor} fontSize="10" fontWeight="bold"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
            >
              KEY INSIGHT
            </motion.text>
            <motion.text 
              x={xScale(75) + 57} y={yScale(75) + 30} 
              textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
            >
              Output fixed at Y*
            </motion.text>
            <motion.text 
              x={xScale(75) + 57} y={yScale(75) + 42} 
              textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
            >
              ↑AD → ↑P only
            </motion.text>
          </>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: adColor }} />
          <span className="text-muted-foreground">AD₁</span>
        </div>
        {showShift && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: ad2Color }} />
            <span className="text-muted-foreground">AD₂</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ backgroundColor: lrasColor }} />
          <span className="text-muted-foreground">LRAS (Vertical at Yf)</span>
        </div>
      </div>

      {/* Chain of Analysis */}
      <div className="mt-6 p-5 bg-muted/20 rounded-xl border border-red-500/20">
        <h4 className="font-semibold text-destructive mb-3 text-base">Logic Map: Why AD Shifts Only Cause Inflation</h4>
        <div className="font-mono text-sm bg-muted/40 p-4 rounded-lg mb-4 overflow-x-auto">
          <span className="text-primary">↑AD (rightward shift)</span>
          <span className="mx-2">→</span>
          <span className="text-secondary">Excess demand at Y*</span>
          <span className="mx-2">→</span>
          <span className="text-amber-400">Firms bid up prices</span>
          <span className="mx-2">→</span>
          <span className="text-destructive">P₁ → P₂ (Inflation)</span>
          <span className="mx-2">→</span>
          <span className="text-muted-foreground">Y remains at Y*</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          With a <strong>vertical LRAS</strong>, the economy is already operating at its maximum sustainable output (Y*). 
          Any increase in aggregate demand cannot produce more real output—there are no unemployed resources to utilise. 
          Instead, the excess demand bids up the general price level. This is the core Monetarist critique of Keynesian 
          demand management: <InlineMath math="\Delta AD \rightarrow \Delta P" />, not <InlineMath math="\Delta Y" />.
        </p>
      </div>

      {/* Policy Implication */}
      <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
        <h4 className="font-semibold text-amber-400 mb-2 text-sm">Monetarist Policy Implication</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Since demand-side policies only generate inflation at full employment, Monetarists argue governments should focus 
          on <strong>supply-side policies</strong> to shift LRAS rightward (increasing Y*), and use <strong>rules-based 
          monetary policy</strong> to control inflation rather than discretionary fiscal expansion.
        </p>
      </div>
    </div>
  );
};

export default ClassicalADInflationDiagram;
