import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CostCurvesDiagramProps {
  showTable?: boolean;
}

/**
 * Cambridge 9708 Accurate Cost Curves Diagram
 * - MC MUST intersect AVC at its minimum point
 * - MC MUST intersect ATC at its minimum point
 * - U-shaped curves with proper Bezier paths
 */
const CostCurvesDiagram: React.FC<CostCurvesDiagramProps> = ({ showTable = true }) => {
  const [activeView, setActiveView] = useState<'short-run' | 'product-curves'>('short-run');
  const [showMC, setShowMC] = useState(true);
  const [showATC, setShowATC] = useState(true);
  const [showAVC, setShowAVC] = useState(true);
  const [showAFC, setShowAFC] = useState(true);
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

  // Cost curve data points (numerically accurate)
  const costData = [
    { q: 0, tfc: 100, tvc: 0, tc: 100, mc: '-', afc: '-', avc: '-', atc: '-' },
    { q: 1, tfc: 100, tvc: 50, tc: 150, mc: 50, afc: 100, avc: 50, atc: 150 },
    { q: 2, tfc: 100, tvc: 80, tc: 180, mc: 30, afc: 50, avc: 40, atc: 90 },
    { q: 3, tfc: 100, tvc: 100, tc: 200, mc: 20, afc: 33.3, avc: 33.3, atc: 66.7 },
    { q: 4, tfc: 100, tvc: 110, tc: 210, mc: 10, afc: 25, avc: 27.5, atc: 52.5 },
    { q: 5, tfc: 100, tvc: 130, tc: 230, mc: 20, afc: 20, avc: 26, atc: 46 },
    { q: 6, tfc: 100, tvc: 160, tc: 260, mc: 30, afc: 16.7, avc: 26.7, atc: 43.3 },
    { q: 7, tfc: 100, tvc: 200, tc: 300, mc: 40, afc: 14.3, avc: 28.6, atc: 42.9 },
    { q: 8, tfc: 100, tvc: 260, tc: 360, mc: 60, afc: 12.5, avc: 32.5, atc: 45 },
    { q: 9, tfc: 100, tvc: 350, tc: 450, mc: 90, afc: 11.1, avc: 38.9, atc: 50 },
    { q: 10, tfc: 100, tvc: 480, tc: 580, mc: 130, afc: 10, avc: 48, atc: 58 },
  ];

  // Product curve data
  const productData = [
    { labor: 0, tp: 0, mp: '-', ap: '-' },
    { labor: 1, tp: 2, mp: 2, ap: 2 },
    { labor: 2, tp: 6, mp: 4, ap: 3 },
    { labor: 3, tp: 12, mp: 6, ap: 4 },
    { labor: 4, tp: 20, mp: 8, ap: 5 },
    { labor: 5, tp: 26, mp: 6, ap: 5.2 },
    { labor: 6, tp: 30, mp: 4, ap: 5 },
    { labor: 7, tp: 32, mp: 2, ap: 4.6 },
    { labor: 8, tp: 32, mp: 0, ap: 4 },
    { labor: 9, tp: 30, mp: -2, ap: 3.3 },
    { labor: 10, tp: 26, mp: -4, ap: 2.6 },
  ];

  // SVG dimensions
  const width = 500;
  const height = 380;
  const margin = { top: 30, right: 50, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Key intersection points (Cambridge accurate)
  // AVC minimum at Q=5, AVC=26 (where MC crosses AVC)
  // ATC minimum at Q=7, ATC=42.9 (where MC crosses ATC)
  const avcMinQ = 5;
  const avcMinY = 26;
  const atcMinQ = 7;
  const atcMinY = 42.9;

  const xScale = (q: number) => margin.left + (q / 12) * chartWidth;
  const yScale = (cost: number) => margin.top + chartHeight - (cost / 160) * chartHeight;

  // MC curve - U-shaped, must pass through AVC min and ATC min
  const mcPath = `M ${xScale(0.5)} ${yScale(90)} 
                  Q ${xScale(2)} ${yScale(40)}, ${xScale(4)} ${yScale(15)}
                  L ${xScale(avcMinQ)} ${yScale(avcMinY)}
                  Q ${xScale(6)} ${yScale(32)}, ${xScale(atcMinQ)} ${yScale(atcMinY)}
                  Q ${xScale(9)} ${yScale(80)}, ${xScale(10)} ${yScale(130)}`;

  // ATC curve - U-shaped, minimum at Q=7
  const atcPath = `M ${xScale(0.8)} ${yScale(155)} 
                   Q ${xScale(2)} ${yScale(95)}, ${xScale(4)} ${yScale(55)}
                   Q ${xScale(5.5)} ${yScale(45)}, ${xScale(atcMinQ)} ${yScale(atcMinY)}
                   Q ${xScale(8.5)} ${yScale(46)}, ${xScale(10)} ${yScale(58)}`;

  // AVC curve - U-shaped, minimum at Q=5
  const avcPath = `M ${xScale(0.8)} ${yScale(55)} 
                   Q ${xScale(2)} ${yScale(42)}, ${xScale(3.5)} ${yScale(30)}
                   Q ${xScale(4.5)} ${yScale(27)}, ${xScale(avcMinQ)} ${yScale(avcMinY)}
                   Q ${xScale(7)} ${yScale(30)}, ${xScale(9)} ${yScale(42)}
                   L ${xScale(10)} ${yScale(48)}`;

  // AFC curve - rectangular hyperbola (always decreasing)
  const afcPath = `M ${xScale(0.8)} ${yScale(125)} 
                   Q ${xScale(2)} ${yScale(50)}, ${xScale(4)} ${yScale(25)}
                   Q ${xScale(6)} ${yScale(17)}, ${xScale(8)} ${yScale(12.5)}
                   L ${xScale(10)} ${yScale(10)}`;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full space-y-6">
      {/* View Toggle */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveView('short-run')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeView === 'short-run'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card/50 text-muted-foreground hover:bg-card'
          }`}
        >
          Short-Run Cost Curves
        </button>
        <button
          onClick={() => setActiveView('product-curves')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeView === 'product-curves'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card/50 text-muted-foreground hover:bg-card'
          }`}
        >
          Product Curves (TP, MP, AP)
        </button>
      </div>

      {activeView === 'short-run' && (
        <>
          {/* Curve Toggles */}
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showMC}
                onChange={() => setShowMC(!showMC)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-neon-cyan font-medium">MC (Marginal Cost)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showATC}
                onChange={() => setShowATC(!showATC)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-neon-magenta font-medium">ATC (Average Total Cost)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAVC}
                onChange={() => setShowAVC(!showAVC)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-emerald-400 font-medium">AVC (Average Variable Cost)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAFC}
                onChange={() => setShowAFC(!showAFC)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-amber-400 font-medium">AFC (Average Fixed Cost)</span>
            </label>
          </div>

          {/* SVG Diagram */}
          <div className="relative bg-card/30 rounded-xl p-4 border border-silver/10">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
              {/* Grid */}
              <defs>
                <pattern id="costGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,116,139,0.1)" strokeWidth="1"/>
                </pattern>
                <marker id="arrow-cost" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="hsl(220, 14%, 75%)" />
                </marker>
              </defs>
              <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#costGrid)" />

              {/* Axes */}
              <line 
                x1={margin.left} y1={margin.top + chartHeight} 
                x2={margin.left + chartWidth} y2={margin.top + chartHeight} 
                stroke="hsl(var(--silver))" strokeWidth="2" 
                markerEnd="url(#arrow-cost)"
              />
              <line 
                x1={margin.left} y1={margin.top + chartHeight} 
                x2={margin.left} y2={margin.top - 5} 
                stroke="hsl(var(--silver))" strokeWidth="2" 
                markerEnd="url(#arrow-cost)"
              />

              {/* Axis Labels */}
              <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" className="fill-silver text-sm font-serif">
                Output (Q)
              </text>
              <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`} className="fill-silver text-sm font-serif">
                Costs ($)
              </text>
              <text x={margin.left - 8} y={margin.top + chartHeight + 16} className="fill-silver text-xs">0</text>

              {/* AFC Curve - rectangular hyperbola */}
              {showAFC && (
                <motion.path
                  d={afcPath}
                  fill="none"
                  stroke="rgb(251, 191, 36)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={curveVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                />
              )}

              {/* AVC Curve - U-shaped */}
              {showAVC && (
                <motion.path
                  d={avcPath}
                  fill="none"
                  stroke="rgb(52, 211, 153)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={curveVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                />
              )}

              {/* ATC Curve - U-shaped */}
              {showATC && (
                <motion.path
                  d={atcPath}
                  fill="none"
                  stroke="hsl(var(--neon-magenta))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={curveVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                />
              )}

              {/* MC Curve - U-shaped, intersects AVC and ATC at their minimums */}
              {showMC && (
                <motion.path
                  d={mcPath}
                  fill="none"
                  stroke="hsl(var(--neon-cyan))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={curveVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.6 }}
                />
              )}

              {/* Intersection Points - Cambridge Critical */}
              {/* MC = AVC at AVC minimum */}
              {showMC && showAVC && (
                <>
                  <motion.circle
                    cx={xScale(avcMinQ)}
                    cy={yScale(avcMinY)}
                    r="7"
                    fill="rgb(52, 211, 153)"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  />
                  <motion.text
                    x={xScale(avcMinQ) - 30}
                    y={yScale(avcMinY) + 20}
                    className="fill-emerald-400 text-[10px] font-medium"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    MC = AVC
                  </motion.text>
                  <motion.text
                    x={xScale(avcMinQ) - 30}
                    y={yScale(avcMinY) + 32}
                    className="fill-emerald-400 text-[9px]"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    (shutdown point)
                  </motion.text>
                </>
              )}

              {/* MC = ATC at ATC minimum */}
              {showMC && showATC && (
                <>
                  <motion.circle
                    cx={xScale(atcMinQ)}
                    cy={yScale(atcMinY)}
                    r="7"
                    fill="hsl(var(--neon-magenta))"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.4, type: "spring" }}
                  />
                  <motion.text
                    x={xScale(atcMinQ) + 12}
                    y={yScale(atcMinY) - 5}
                    className="fill-neon-magenta text-[10px] font-medium"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    MC = ATC
                  </motion.text>
                  <motion.text
                    x={xScale(atcMinQ) + 12}
                    y={yScale(atcMinY) + 7}
                    className="fill-neon-magenta text-[9px]"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    (breakeven)
                  </motion.text>
                </>
              )}

              {/* Curve Labels */}
              {showMC && (
                <text x={xScale(10.5)} y={yScale(130)} className="fill-neon-cyan text-xs font-medium">MC</text>
              )}
              {showATC && (
                <text x={xScale(10.5)} y={yScale(58)} className="fill-neon-magenta text-xs font-medium">ATC</text>
              )}
              {showAVC && (
                <text x={xScale(10.5)} y={yScale(48)} fill="rgb(52, 211, 153)" className="text-xs font-medium">AVC</text>
              )}
              {showAFC && (
                <text x={xScale(10.5)} y={yScale(10)} fill="rgb(251, 191, 36)" className="text-xs font-medium">AFC</text>
              )}
            </svg>
          </div>

          {/* Key Insight - Cambridge Standard */}
          <div className="bg-gradient-to-r from-neon-cyan/10 to-transparent border-l-4 border-neon-cyan p-4 rounded-r-lg">
            <p className="text-sm text-silver-bright">
              <strong>Cambridge Key Relationship:</strong> The MC curve <em>always</em> intersects both AVC and ATC at their <strong>minimum points</strong>. 
              When $MC {"<"} AC$, average costs are falling; when $MC {">"} AC$, average costs are rising. 
              The U-shape is explained by the <strong>Law of Diminishing Returns</strong> in the short run.
            </p>
          </div>
        </>
      )}

      {activeView === 'product-curves' && (
        <>
          {/* Product Curves SVG */}
          <div className="relative bg-card/30 rounded-xl p-4 border border-silver/10">
            <svg viewBox="0 0 500 450" className="w-full h-auto">
              {/* Grid */}
              <defs>
                <pattern id="productGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,116,139,0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect x="50" y="20" width="400" height="180" fill="url(#productGrid)" />
              <rect x="50" y="240" width="400" height="180" fill="url(#productGrid)" />

              {/* TP Curve (Top Graph) */}
              <text x="250" y="15" textAnchor="middle" className="fill-silver-bright text-sm font-medium">Total Product (TP)</text>
              <line x1="50" y1="200" x2="460" y2="200" stroke="hsl(var(--silver))" strokeWidth="2" />
              <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--silver))" strokeWidth="2" />
              
              <motion.path
                d="M 50,200 Q 100,195 140,180 Q 180,160 220,120 Q 260,80 300,50 Q 340,40 380,45 Q 420,55 450,80"
                fill="none"
                stroke="hsl(var(--neon-cyan))"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2 }}
              />
              <text x="455" y="75" className="fill-neon-cyan text-xs">TP</text>
              
              {/* Max TP Point */}
              <motion.circle
                cx="360"
                cy="42"
                r="5"
                fill="hsl(var(--neon-cyan))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3 }}
              />
              <text x="365" y="35" className="fill-silver text-[10px]">Max TP</text>

              {/* MP/AP Curves (Bottom Graph) */}
              <text x="250" y="235" textAnchor="middle" className="fill-silver-bright text-sm font-medium">MP & AP Curves</text>
              <line x1="50" y1="350" x2="460" y2="350" stroke="hsl(var(--silver))" strokeWidth="2" />
              <line x1="50" y1="420" x2="460" y2="420" stroke="hsl(var(--silver))" strokeWidth="2" opacity="0.3" />
              <line x1="50" y1="420" x2="50" y2="240" stroke="hsl(var(--silver))" strokeWidth="2" />
              
              {/* Zero line */}
              <text x="40" y="354" className="fill-silver text-[10px]">0</text>

              {/* MP Curve */}
              <motion.path
                d="M 80,350 Q 120,320 160,290 Q 200,260 240,280 Q 280,310 320,350 Q 360,390 400,420 Q 430,440 450,460"
                fill="none"
                stroke="hsl(var(--neon-magenta))"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              
              {/* AP Curve */}
              <motion.path
                d="M 80,350 Q 120,325 160,300 Q 200,280 240,275 Q 280,280 320,295 Q 360,320 400,350 Q 430,375 450,400"
                fill="none"
                stroke="rgb(52, 211, 153)"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <text x="455" y="455" className="fill-neon-magenta text-xs">MP</text>
              <text x="455" y="395" fill="rgb(52, 211, 153)" className="text-xs">AP</text>

              {/* MP = AP Intersection Point */}
              <motion.circle
                cx="240"
                cy="275"
                r="6"
                fill="white"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
              />
              <text x="250" y="268" className="fill-silver text-[10px] font-medium">MP = AP (Max AP)</text>

              {/* Phase Labels */}
              <text x="120" y="215" className="fill-emerald-400 text-[9px]">Increasing MP</text>
              <text x="260" y="215" className="fill-amber-400 text-[9px]">Decreasing MP</text>
              <text x="400" y="215" className="fill-red-400 text-[9px]">Negative MP</text>

              {/* X-axis label */}
              <text x="250" y="440" textAnchor="middle" className="fill-silver text-xs">Labor (Units of Variable Input)</text>
            </svg>
          </div>

          {/* Relationships */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
              <h4 className="text-emerald-400 font-medium mb-2">Phase 1: Increasing MP</h4>
              <p className="text-sm text-silver">Adding workers increases output at an increasing rate due to specialization and division of labor.</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <h4 className="text-amber-400 font-medium mb-2">Phase 2: Decreasing MP</h4>
              <p className="text-sm text-silver">Law of Diminishing Returns kicks in — each additional worker adds less to total output.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h4 className="text-red-400 font-medium mb-2">Phase 3: Negative MP</h4>
              <p className="text-sm text-silver">Too many workers cause congestion and inefficiency — total product actually falls.</p>
            </div>
          </div>
        </>
      )}

      {/* Data Table */}
      {showTable && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card/50">
                {activeView === 'short-run' ? (
                  <>
                    <th className="border border-silver/20 px-3 py-2 text-silver-bright">Q</th>
                    <th className="border border-silver/20 px-3 py-2 text-silver-bright">TFC</th>
                    <th className="border border-silver/20 px-3 py-2 text-silver-bright">TVC</th>
                    <th className="border border-silver/20 px-3 py-2 text-silver-bright">TC</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-cyan">MC</th>
                    <th className="border border-silver/20 px-3 py-2 text-amber-400">AFC</th>
                    <th className="border border-silver/20 px-3 py-2 text-emerald-400">AVC</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-magenta">ATC</th>
                  </>
                ) : (
                  <>
                    <th className="border border-silver/20 px-3 py-2 text-silver-bright">Labor</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-cyan">TP</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-magenta">MP</th>
                    <th className="border border-silver/20 px-3 py-2 text-emerald-400">AP</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeView === 'short-run'
                ? costData.map((row, i) => (
                    <tr key={`cost-row-${i}`} className="hover:bg-card/30">
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.q}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tfc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tvc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-cyan">{row.mc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-amber-400">{row.afc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-emerald-400">{row.avc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-magenta">{row.atc}</td>
                    </tr>
                  ))
                : productData.map((row, i) => (
                    <tr key={`product-row-${i}`} className="hover:bg-card/30">
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.labor}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-cyan">{row.tp}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-magenta">{row.mp}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-emerald-400">{row.ap}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CostCurvesDiagram;
