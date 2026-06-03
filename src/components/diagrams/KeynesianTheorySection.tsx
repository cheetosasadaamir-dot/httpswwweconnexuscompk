import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Button } from '@/components/ui/button';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// [A2 Specialist - Keynesian vs Monetarist]
// Advanced Macroeconomic Thought: Keynesian Economic Framework
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

interface KeynesianLRASProps {
  showADShifts?: boolean;
}

const KeynesianLRASDiagram = ({ showADShifts = true }: KeynesianLRASProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState<'spare' | 'full' | null>(null);
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

  const width = 560;
  const height = 400;
  const margin = { top: 50, right: 60, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Keynesian L-shaped LRAS points
  const lrasPoints = [
    { x: 5, y: 25 },   // Start horizontal
    { x: 60, y: 25 },  // End horizontal (spare capacity)
    { x: 65, y: 30 },  // Transition curve
    { x: 68, y: 40 },  // Transition
    { x: 70, y: 55 },  // Near vertical
    { x: 71, y: 70 },  // Vertical
    { x: 72, y: 90 },  // Full employment vertical
  ];

  // AD curves
  const ad1Y = 20; // AD1 in spare capacity
  const ad2Y = 25; // AD2 in spare capacity (after shift)
  const ad3Y = 55; // AD3 approaching full employment
  const ad4Y = 75; // AD4 at full employment (inflationary)

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" as const }
    }
  };

  const generateADCurve = (yIntercept: number) => {
    const points = [];
    for (let x = 5; x <= 85; x += 5) {
      const y = yIntercept + (85 - x) * 0.8;
      points.push({ x, y: Math.min(y, 95) });
    }
    return points;
  };

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let d = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${xScale(points[i].x)} ${yScale(points[i].y)}`;
    }
    return d;
  };

  // L-shaped path with curve
  const lrasPath = () => {
    const pts = lrasPoints;
    let d = `M ${xScale(pts[0].x)} ${yScale(pts[0].y)}`;
    // Horizontal section
    d += ` L ${xScale(pts[1].x)} ${yScale(pts[1].y)}`;
    // Curved transition using quadratic bezier
    d += ` Q ${xScale(pts[2].x)} ${yScale(pts[2].y)}, ${xScale(pts[3].x)} ${yScale(pts[3].y)}`;
    // Continue to vertical
    for (let i = 4; i < pts.length; i++) {
      d += ` L ${xScale(pts[i].x)} ${yScale(pts[i].y)}`;
    }
    return d;
  };

  return (
    <div ref={containerRef} className="glass-card p-6 rounded-xl">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <h3 className="font-serif text-xl text-gradient">The Keynesian L-Shaped LRAS Curve</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Price level fixed until full employment; then purely inflationary
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={activePhase === 'spare' ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePhase(activePhase === 'spare' ? null : 'spare')}
          >
            Spare Capacity
          </Button>
          <Button
            variant={activePhase === 'full' ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePhase(activePhase === 'full' ? null : 'full')}
          >
            Full Employment
          </Button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-keyn-lras" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <marker id="arrow-keyn" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--silver))" />
          </marker>
          <linearGradient id="lras-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--cambridge-cyan))" />
            <stop offset="100%" stopColor="hsl(var(--cambridge-magenta))" />
          </linearGradient>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-keyn-lras)" />

        {/* Axes */}
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth + 15} y2={margin.top + chartHeight} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-keyn)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 15} 
          stroke="hsl(var(--silver))" strokeWidth="2"
          markerEnd="url(#arrow-keyn)"
        />

        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="500">
          Real GDP (Y)
        </text>
        <text x={18} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="500" transform={`rotate(-90, 18, ${margin.top + chartHeight / 2})`}>
          Price Level (P)
        </text>

        {/* Zone highlights */}
        {(activePhase === 'spare' || activePhase === null) && (
          <motion.rect
            x={xScale(5)}
            y={yScale(40)}
            width={xScale(60) - xScale(5)}
            height={yScale(15) - yScale(40)}
            fill="hsl(var(--cambridge-cyan))"
            opacity={activePhase === 'spare' ? 0.2 : 0.08}
            rx="4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: activePhase === 'spare' ? 0.2 : 0.08 } : {}}
            transition={{ duration: 0.5 }}
          />
        )}
        {(activePhase === 'full' || activePhase === null) && (
          <motion.rect
            x={xScale(68)}
            y={yScale(95)}
            width={xScale(78) - xScale(68)}
            height={yScale(30) - yScale(95)}
            fill="hsl(var(--destructive))"
            opacity={activePhase === 'full' ? 0.2 : 0.08}
            rx="4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: activePhase === 'full' ? 0.2 : 0.08 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        )}

        {/* Keynesian L-Shaped LRAS */}
        <motion.path
          d={lrasPath()}
          fill="none"
          stroke="url(#lras-grad)"
          strokeWidth="4"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text
          x={xScale(30)}
          y={yScale(32)}
          fill="hsl(var(--cambridge-cyan))"
          fontSize="13"
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          LRAS (Keynesian)
        </motion.text>

        {/* AD Curves based on phase */}
        {showADShifts && (
          <>
            {/* Spare Capacity: AD1 and AD2 */}
            {(activePhase === 'spare' || activePhase === null) && (
              <>
                <motion.path
                  d={pathFromPoints(generateADCurve(ad1Y))}
                  fill="none"
                  stroke="hsl(var(--cambridge-orange))"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'spare' ? 1 : 0.5 } : {}}
                  transition={{ delay: 0.8 }}
                />
                <motion.text
                  x={xScale(78)}
                  y={yScale(ad1Y + 5)}
                  fill="hsl(var(--cambridge-orange))"
                  fontSize="11"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'spare' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1 }}
                >
                  AD₁
                </motion.text>

                <motion.path
                  d={pathFromPoints(generateADCurve(ad2Y + 15))}
                  fill="none"
                  stroke="hsl(var(--cambridge-orange))"
                  strokeWidth="2.5"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'spare' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1 }}
                />
                <motion.text
                  x={xScale(78)}
                  y={yScale(ad2Y + 20)}
                  fill="hsl(var(--cambridge-orange))"
                  fontSize="11"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'spare' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  AD₂
                </motion.text>

                {/* Shift arrow in spare capacity */}
                {activePhase === 'spare' && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <line
                      x1={xScale(30)} y1={yScale(26)}
                      x2={xScale(50)} y2={yScale(26)}
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      markerEnd="url(#arrow-keyn)"
                    />
                    <text x={xScale(40)} y={yScale(20)} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">
                      ΔY (no ΔP)
                    </text>
                  </motion.g>
                )}
              </>
            )}

            {/* Full Employment: AD3 and AD4 */}
            {(activePhase === 'full' || activePhase === null) && (
              <>
                <motion.path
                  d={pathFromPoints(generateADCurve(ad3Y))}
                  fill="none"
                  stroke="hsl(var(--destructive))"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'full' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1.2 }}
                />
                <motion.text
                  x={xScale(78)}
                  y={yScale(ad3Y + 5)}
                  fill="hsl(var(--destructive))"
                  fontSize="11"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'full' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  AD₃
                </motion.text>

                <motion.path
                  d={pathFromPoints(generateADCurve(ad4Y))}
                  fill="none"
                  stroke="hsl(var(--destructive))"
                  strokeWidth="2.5"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'full' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1.4 }}
                />
                <motion.text
                  x={xScale(78)}
                  y={yScale(ad4Y + 5)}
                  fill="hsl(var(--destructive))"
                  fontSize="11"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: activePhase === 'full' ? 1 : 0.5 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  AD₄
                </motion.text>

                {/* Price level markers for full employment */}
                {activePhase === 'full' && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    {/* P2 and P3 lines */}
                    <line
                      x1={margin.left} y1={yScale(55)}
                      x2={xScale(72)} y2={yScale(55)}
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth="1"
                      strokeDasharray="4,3"
                    />
                    <text x={margin.left - 8} y={yScale(55)} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">
                      P₂
                    </text>
                    <line
                      x1={margin.left} y1={yScale(75)}
                      x2={xScale(72)} y2={yScale(75)}
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth="1"
                      strokeDasharray="4,3"
                    />
                    <text x={margin.left - 8} y={yScale(75)} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">
                      P₃
                    </text>
                    {/* Vertical arrow showing price increase */}
                    <line
                      x1={xScale(74)} y1={yScale(55)}
                      x2={xScale(74)} y2={yScale(73)}
                      stroke="hsl(var(--destructive))"
                      strokeWidth="2"
                      markerEnd="url(#arrow-keyn)"
                    />
                    <text x={xScale(80)} y={yScale(65)} fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">
                      ΔP (no ΔY)
                    </text>
                  </motion.g>
                )}
              </>
            )}
          </>
        )}

        {/* Full employment line */}
        <motion.line
          x1={xScale(70)} y1={yScale(0)}
          x2={xScale(70)} y2={yScale(95)}
          stroke="hsl(var(--cambridge-green))"
          strokeWidth="2"
          strokeDasharray="8,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.7 } : {}}
          transition={{ delay: 1.5 }}
        />
        <motion.text
          x={xScale(70)}
          y={yScale(0) + 18}
          textAnchor="middle"
          fill="hsl(var(--cambridge-green))"
          fontSize="11"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.7 }}
        >
          Yf (Full Employment)
        </motion.text>

        {/* P1 line for spare capacity */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
        >
          <line
            x1={margin.left} y1={yScale(25)}
            x2={xScale(60)} y2={yScale(25)}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <text x={margin.left - 8} y={yScale(25)} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">
            P₁
          </text>
        </motion.g>

        {/* Zone labels */}
        <motion.text
          x={xScale(32)}
          y={yScale(18)}
          textAnchor="middle"
          fill="hsl(var(--cambridge-cyan))"
          fontSize="10"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          SPARE CAPACITY
        </motion.text>
        <motion.text
          x={xScale(73)}
          y={yScale(85)}
          textAnchor="middle"
          fill="hsl(var(--destructive))"
          fontSize="10"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.9 }}
        >
          FULL
        </motion.text>
        <motion.text
          x={xScale(73)}
          y={yScale(80)}
          textAnchor="middle"
          fill="hsl(var(--destructive))"
          fontSize="10"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.9 }}
        >
          EMPLOYMENT
        </motion.text>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 rounded" style={{ background: 'linear-gradient(90deg, hsl(var(--cambridge-cyan)), hsl(var(--cambridge-magenta)))' }} />
          <span className="text-muted-foreground">Keynesian LRAS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 border-t-2 border-dashed" style={{ borderColor: 'hsl(var(--cambridge-green))' }} />
          <span className="text-muted-foreground">Full Employment (Yf)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-[hsl(var(--cambridge-orange))] rounded" />
          <span className="text-muted-foreground">AD Curves</span>
        </div>
      </div>
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Main Export: Full Keynesian Theory Section
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const KeynesianTheorySection = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="glass-card p-4 rounded-xl bg-gradient-to-r from-cambridge-cyan/10 to-cambridge-magenta/10 border border-cambridge-cyan/20">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-cambridge-cyan/20 text-cambridge-cyan rounded-full text-xs font-semibold">
            A2 Specialist - Keynesian vs Monetarist
          </span>
        </div>
        <h3 className="font-serif text-xl font-bold text-gradient mb-2">
          Advanced Macroeconomic Thought: The Keynesian Framework
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Core theoretical foundations distinguishing Keynesian economics from Classical/Monetarist approaches
        </p>
      </div>

      {/* Core Keynesian Principles */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="font-serif text-lg font-semibold text-silver-bright mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cambridge-cyan" />
          The Keynesian Focus: Aggregate Demand Primacy
        </h4>
        
        <div className="space-y-4 text-sm">
          <p className="text-muted-foreground leading-relaxed text-justify">
            <strong className="text-silver-bright">Keynesian economics</strong> posits that <InlineMath math="AD" /> (total spending) is the 
            <strong className="text-cambridge-cyan"> primary determinant of economic output in the short run</strong>. Unlike classical economists who 
            emphasized supply-side factors and assumed automatic market clearing, Keynes demonstrated that economies can become trapped at 
            equilibrium levels of output substantially below full employment—a condition from which market forces alone cannot escape.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
              <h5 className="font-semibold text-cambridge-cyan mb-2">Market Inefficiency</h5>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Keynesians believe the <strong>private sector can lead to inefficiencies</strong>, particularly during recessions 
                when individual rational behavior (saving more) creates collective irrationality (falling demand). This necessitates 
                <strong> public sector intervention</strong> to stabilize the business cycle.
              </p>
            </div>
            <div className="p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/20">
              <h5 className="font-semibold text-cambridge-orange mb-2">Policy Intervention</h5>
              <p className="text-muted-foreground text-xs leading-relaxed">
                <strong>Monetary policy</strong> (interest rate manipulation) and <strong>fiscal policy</strong> (government spending/taxation) 
                are essential tools for closing gaps between actual and potential output. Keynesians prefer <em>mixed economies</em> where 
                the private sector dominates but government intervenes during recessions.
              </p>
            </div>
          </div>

          {/* Historical Context */}
          <div className="p-4 bg-muted/30 rounded-lg border-l-3 border-primary">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-primary">Historical Context:</strong> The Great Depression (1929-1933) saw real GDP fall by 30% 
              and unemployment reach 25%. While prior economic declines lasted ~2 years, this depression persisted for over a decade. 
              Keynes shifted macroeconomic thought from a focus on <InlineMath math="AS" /> to <InlineMath math="AD" />, advocating 
              demand-side policies to close output gaps. The 2008 financial crisis renewed interest in Keynesian interventionism.
            </p>
          </div>
        </div>
      </div>

      {/* Investment and Animal Spirits */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="font-serif text-lg font-semibold text-silver-bright mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cambridge-magenta" />
          Investment & "Animal Spirits"
        </h4>
        
        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground leading-relaxed text-justify">
            A critical distinction between Keynesian and Monetarist thought concerns the <strong className="text-silver-bright">determinants of investment</strong>. 
            Keynesians argue that investment is driven primarily by <strong className="text-cambridge-magenta">business confidence</strong> ("animal spirits") 
            and <strong>expectations of the future</strong>, rather than purely by interest rates.
          </p>
          
          <div className="p-4 bg-cambridge-magenta/10 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🐂</span>
              <h5 className="font-semibold text-cambridge-magenta">The "Animal Spirits" Concept</h5>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Investment is <strong>independent of the price level or interest rates</strong> in the Keynesian view. 
              As long as firms have <em>confidence about the future</em>, they will invest. This explains why monetary policy 
              (lowering interest rates) may fail during severe recessions—firms won't invest if they expect no customers, 
              regardless of how cheap borrowing becomes.
            </p>
          </div>

          <div className="text-center p-3 bg-muted/30 rounded-lg font-mono text-xs">
            <p className="text-muted-foreground">Keynesian Investment Function:</p>
            <BlockMath math="I = I_0 + f(\text{Expectations, Confidence}) \neq f(r)" />
          </div>
        </div>
      </div>

      {/* The Keynesian LRAS Diagram */}
      <KeynesianLRASDiagram showADShifts={true} />

      {/* Detailed Explanation of L-Shaped LRAS */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="font-serif text-lg font-semibold text-silver-bright mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cambridge-green" />
          The Keynesian View of Long-Run Aggregate Supply
        </h4>
        
        <div className="space-y-4 text-sm">
          <p className="text-muted-foreground leading-relaxed text-justify">
            The Keynesian view suggests that the <strong className="text-silver-bright">price level remains fixed until resources are fully employed</strong>. 
            This creates the distinctive "L-shaped" LRAS curve with fundamentally different policy implications depending on whether 
            the economy operates in the horizontal or vertical section.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Horizontal Section */}
            <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
              <h5 className="font-semibold text-cambridge-cyan mb-2 flex items-center gap-2">
                <span className="text-lg">━━</span> Horizontal Section: Spare Capacity
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Resources are <strong>not fully employed</strong>—there is spare capacity in the economy. 
                Unemployment exists, factories run below capacity, and raw materials are abundant.
              </p>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs font-semibold text-cambridge-cyan mb-1">AD Expansion Effect:</p>
                <p className="text-xs text-muted-foreground">
                  An increase in <InlineMath math="AD" /> from <InlineMath math="AD_1" /> to <InlineMath math="AD_2" /> 
                  increases output <strong>without affecting the price level</strong> (stays at <InlineMath math="P_1" />).
                </p>
                <div className="mt-2 font-mono text-[10px] text-center p-2 bg-cambridge-cyan/20 rounded">
                  <InlineMath math="\Delta Y > 0 \quad \text{and} \quad \Delta P = 0" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 italic">
                  → Output changes are <strong>NOT inflationary</strong> in this range
                </p>
              </div>
            </div>

            {/* Vertical Section */}
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h5 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                <span className="text-lg">┃</span> Vertical Section: Full Employment
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Resources are <strong>fully employed</strong>—the economy operates at its production possibility frontier. 
                All labor willing to work at prevailing wages is employed.
              </p>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs font-semibold text-destructive mb-1">AD Expansion Effect:</p>
                <p className="text-xs text-muted-foreground">
                  An increase in <InlineMath math="AD" /> from <InlineMath math="AD_3" /> to <InlineMath math="AD_4" /> 
                  is <strong>purely inflationary</strong>—price level rises from <InlineMath math="P_2" /> to <InlineMath math="P_3" />.
                </p>
                <div className="mt-2 font-mono text-[10px] text-center p-2 bg-destructive/20 rounded">
                  <InlineMath math="\Delta P > 0 \quad \text{and} \quad \Delta Y = 0" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 italic">
                  → Demand management becomes <strong>counterproductive</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examiner's Summary Box */}
      <div className="glass-card p-5 rounded-xl bg-gradient-to-br from-cambridge-gold/10 to-cambridge-orange/5 border border-cambridge-gold/30">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-serif text-lg font-bold text-cambridge-gold">Senior Examiner's Synthesis</h4>
            <p className="text-xs text-muted-foreground"> Command Word Focus: Evaluate / Discuss</p>
          </div>
        </div>
        <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
          <p className="text-justify">
            <strong className="text-silver-bright">The Keynesian framework</strong> provides a powerful justification for 
            <strong className="text-cambridge-cyan"> counter-cyclical demand management</strong>. When the economy operates in the 
            <strong> horizontal spare capacity range</strong>, fiscal expansion (<InlineMath math="\uparrow G" /> or <InlineMath math="\downarrow T" />) 
            generates pure output gains with <InlineMath math="\Delta P = 0" />. This directly contradicts the classical view that 
            all government spending crowds out private investment.
          </p>
          <p className="text-justify">
            <strong className="text-cambridge-orange">However</strong>, the Keynesian prescription becomes dangerous once the economy 
            approaches full employment. Continued fiscal stimulus in the <strong>vertical range</strong> produces only inflation 
            (<InlineMath math="\Delta P > 0, \Delta Y = 0" />), validating monetarist concerns about excessive government intervention. 
            <strong className="text-silver-bright"> The effectiveness of demand-side policy is thus state-contingent</strong>—powerful 
            during recessions but counterproductive during booms.
          </p>
          <div className="p-3 bg-muted/30 rounded-lg border border-cambridge-gold/20">
            <p className="font-semibold text-cambridge-gold mb-1">Policy Implication:</p>
            <p>
              Fiscal/monetary stimulus should be deployed during recessions (horizontal range) but <strong>withdrawn as the economy 
              recovers</strong> (approaching vertical range) to prevent demand-pull inflation. This reconciles Keynesian and Classical 
              perspectives within a unified analytical framework.
            </p>
          </div>
        </div>
      </div>

      {/* Keynesian vs Monetarist Comparison */}
      <div className="glass-card p-5 rounded-xl">
        <h4 className="font-serif text-lg font-semibold text-silver-bright mb-4">
          Keynesian vs Monetarist: Key Distinctions
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border border-muted rounded-lg overflow-hidden">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-2 px-3 font-semibold">Aspect</th>
                <th className="text-left py-2 px-3 font-semibold text-cambridge-cyan">Keynesian View</th>
                <th className="text-left py-2 px-3 font-semibold text-cambridge-orange">Monetarist View</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-muted">
                <td className="py-2 px-3 font-medium">Primary Driver</td>
                <td className="py-2 px-3 text-muted-foreground">
                  <InlineMath math="AD" /> (aggregate demand/spending)
                </td>
                <td className="py-2 px-3 text-muted-foreground">
                  Money supply (<InlineMath math="M" />)
                </td>
              </tr>
              <tr className="border-t border-muted">
                <td className="py-2 px-3 font-medium">Investment Determinant</td>
                <td className="py-2 px-3 text-muted-foreground">
                  Business confidence / expectations
                </td>
                <td className="py-2 px-3 text-muted-foreground">
                  Interest rates (<InlineMath math="r" />)
                </td>
              </tr>
              <tr className="border-t border-muted">
                <td className="py-2 px-3 font-medium">Market Efficiency</td>
                <td className="py-2 px-3 text-muted-foreground">
                  Markets can fail → intervention needed
                </td>
                <td className="py-2 px-3 text-muted-foreground">
                  Markets self-correct → minimal intervention
                </td>
              </tr>
              <tr className="border-t border-muted">
                <td className="py-2 px-3 font-medium">LRAS Shape</td>
                <td className="py-2 px-3 text-muted-foreground">
                  L-shaped (horizontal then vertical)
                </td>
                <td className="py-2 px-3 text-muted-foreground">
                  Vertical at <InlineMath math="Y_f" />
                </td>
              </tr>
              <tr className="border-t border-muted">
                <td className="py-2 px-3 font-medium">Policy Preference</td>
                <td className="py-2 px-3 text-muted-foreground">
                  Fiscal policy (direct spending)
                </td>
                <td className="py-2 px-3 text-muted-foreground">
                  Monetary policy (control <InlineMath math="M" />)
                </td>
              </tr>
              <tr className="border-t border-muted">
                <td className="py-2 px-3 font-medium">Inflation Cause</td>
                <td className="py-2 px-3 text-muted-foreground">
                  Excess demand at full employment
                </td>
                <td className="py-2 px-3 text-muted-foreground">
                  <InlineMath math="\uparrow M" /> faster than <InlineMath math="\uparrow Y" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KeynesianTheorySection;
