import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CostCurvesDiagramProps {
  showTable?: boolean;
}

const CostCurvesDiagram: React.FC<CostCurvesDiagramProps> = ({ showTable = true }) => {
  const [activeView, setActiveView] = useState<'short-run' | 'product-curves'>('short-run');
  const [showMC, setShowMC] = useState(true);
  const [showATC, setShowATC] = useState(true);
  const [showAVC, setShowAVC] = useState(true);
  const [showAFC, setShowAFC] = useState(true);

  // Cost curve data points
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

  // SVG path generators
  const generateMCPath = () => {
    const points = [
      { x: 80, y: 280 },
      { x: 120, y: 300 },
      { x: 160, y: 310 },
      { x: 200, y: 305 },
      { x: 240, y: 290 },
      { x: 280, y: 260 },
      { x: 320, y: 220 },
      { x: 360, y: 170 },
      { x: 400, y: 110 },
      { x: 440, y: 50 },
    ];
    return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  };

  const generateATCPath = () => {
    const points = [
      { x: 80, y: 60 },
      { x: 120, y: 130 },
      { x: 160, y: 180 },
      { x: 200, y: 220 },
      { x: 240, y: 250 },
      { x: 280, y: 265 },
      { x: 320, y: 260 },
      { x: 360, y: 240 },
      { x: 400, y: 210 },
      { x: 440, y: 170 },
    ];
    return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  };

  const generateAVCPath = () => {
    const points = [
      { x: 80, y: 270 },
      { x: 120, y: 285 },
      { x: 160, y: 295 },
      { x: 200, y: 300 },
      { x: 240, y: 298 },
      { x: 280, y: 290 },
      { x: 320, y: 275 },
      { x: 360, y: 255 },
      { x: 400, y: 225 },
      { x: 440, y: 185 },
    ];
    return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  };

  const generateAFCPath = () => {
    const points = [
      { x: 80, y: 40 },
      { x: 120, y: 120 },
      { x: 160, y: 180 },
      { x: 200, y: 230 },
      { x: 240, y: 270 },
      { x: 280, y: 295 },
      { x: 320, y: 315 },
      { x: 360, y: 330 },
      { x: 400, y: 340 },
      { x: 440, y: 348 },
    ];
    return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  };

  return (
    <div className="w-full space-y-6">
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
            <svg viewBox="0 0 500 400" className="w-full h-auto">
              {/* Grid */}
              <defs>
                <pattern id="costGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,116,139,0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect x="50" y="20" width="420" height="340" fill="url(#costGrid)" />

              {/* Axes */}
              <line x1="50" y1="360" x2="480" y2="360" stroke="hsl(var(--silver))" strokeWidth="2" />
              <line x1="50" y1="360" x2="50" y2="20" stroke="hsl(var(--silver))" strokeWidth="2" />

              {/* Axis Labels */}
              <text x="260" y="390" textAnchor="middle" className="fill-silver text-sm">Output (Q)</text>
              <text x="20" y="190" textAnchor="middle" transform="rotate(-90, 20, 190)" className="fill-silver text-sm">Costs ($)</text>

              {/* AFC Curve */}
              {showAFC && (
                <motion.path
                  d={generateAFCPath()}
                  fill="none"
                  stroke="rgb(251, 191, 36)"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              )}

              {/* AVC Curve */}
              {showAVC && (
                <motion.path
                  d={generateAVCPath()}
                  fill="none"
                  stroke="rgb(52, 211, 153)"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              )}

              {/* ATC Curve */}
              {showATC && (
                <motion.path
                  d={generateATCPath()}
                  fill="none"
                  stroke="hsl(var(--neon-magenta))"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              )}

              {/* MC Curve */}
              {showMC && (
                <motion.path
                  d={generateMCPath()}
                  fill="none"
                  stroke="hsl(var(--neon-cyan))"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              )}

              {/* Intersection Points */}
              {showMC && showAVC && (
                <motion.circle
                  cx="200"
                  cy="300"
                  r="6"
                  fill="rgb(52, 211, 153)"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                />
              )}
              {showMC && showATC && (
                <motion.circle
                  cx="280"
                  cy="265"
                  r="6"
                  fill="hsl(var(--neon-magenta))"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 }}
                />
              )}

              {/* Annotations */}
              {showMC && (
                <text x="450" y="45" className="fill-neon-cyan text-xs font-medium">MC</text>
              )}
              {showATC && (
                <text x="450" y="165" className="fill-neon-magenta text-xs font-medium">ATC</text>
              )}
              {showAVC && (
                <text x="450" y="180" fill="rgb(52, 211, 153)" className="text-xs font-medium">AVC</text>
              )}
              {showAFC && (
                <text x="450" y="345" fill="rgb(251, 191, 36)" className="text-xs font-medium">AFC</text>
              )}

              {/* Key Point Labels */}
              {showMC && showAVC && (
                <text x="180" y="330" className="fill-silver text-[10px]">MC = AVC (min)</text>
              )}
              {showMC && showATC && (
                <text x="290" y="285" className="fill-silver text-[10px]">MC = ATC (min)</text>
              )}
            </svg>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-neon-cyan/10 to-transparent border-l-4 border-neon-cyan p-4 rounded-r-lg">
            <p className="text-sm text-silver-bright">
              <strong>Key Insight:</strong> The MC curve intersects both AVC and ATC at their <em>minimum points</em>. 
              This occurs because when MC {"<"} AC, average costs are falling; when MC {">"} AC, average costs are rising.
              The U-shape of these curves is explained by the Law of Diminishing Returns.
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

              {/* Intersection Point */}
              <motion.circle
                cx="240"
                cy="275"
                r="5"
                fill="white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
              <text x="245" y="268" className="fill-silver text-[10px]">MP = AP</text>

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
                    <tr key={i} className="hover:bg-card/30">
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.q}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tfc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tvc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-cyan">{row.mc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-amber-400">{typeof row.afc === 'number' ? row.afc.toFixed(1) : row.afc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-emerald-400">{typeof row.avc === 'number' ? row.avc.toFixed(1) : row.avc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-magenta">{typeof row.atc === 'number' ? row.atc.toFixed(1) : row.atc}</td>
                    </tr>
                  ))
                : productData.map((row, i) => (
                    <tr key={i} className="hover:bg-card/30">
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.labor}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-cyan">{row.tp}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-magenta">{row.mp}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-emerald-400">{typeof row.ap === 'number' ? row.ap.toFixed(1) : row.ap}</td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CostCurvesDiagram;
