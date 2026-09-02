import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealPath, revealPoint, revealFade } from './diagramStyle';

interface CostCurvesDiagramProps {
  showTable?: boolean;
}

/*
 * Every curve below is plotted from one internally consistent cost function, so the
 * geometry, the labelled turning points and the data table can never contradict:
 *
 *   TFC = 100
 *   TVC(q) = 0.6q³ − 6q² + 41q
 *   AVC(q) = 0.6q² − 6q + 41        min at q = 5,   AVC = 26
 *   MC(q)  = 1.8q² − 12q + 41       min at q = 3.33, MC = 21
 *   ATC(q) = 100/q + AVC(q)         min at q ≈ 6.8, ATC ≈ 42.7
 *   AFC(q) = 100/q
 *
 * MC therefore cuts AVC exactly at q = 5 and ATC exactly at q ≈ 6.8 — both at their
 * minimum points, as required.
 */
const TFC = 100;
const avc = (q: number) => 0.6 * q * q - 6 * q + 41;
const mc = (q: number) => 1.8 * q * q - 12 * q + 41;
const afc = (q: number) => TFC / q;
const atc = (q: number) => afc(q) + avc(q);
const tvc = (q: number) => q * avc(q);

const AVC_MIN_Q = 5;
const AVC_MIN = avc(AVC_MIN_Q); // 26
const ATC_MIN_Q = 6.8;
const ATC_MIN = atc(ATC_MIN_Q); // ≈ 42.7

/* Product curves: TP = 3L² − 0.2L³  →  MP = 6L − 0.6L², AP = 3L − 0.2L² */
const tp = (l: number) => 3 * l * l - 0.2 * l * l * l;
const mp = (l: number) => 6 * l - 0.6 * l * l;
const ap = (l: number) => 3 * l - 0.2 * l * l;

const MP_MAX_L = 5;
const AP_MAX_L = 7.5;
const TP_MAX_L = 10;

const fmt = (n: number) => (Math.round(n * 10) / 10).toFixed(1);

const CostCurvesDiagram: React.FC<CostCurvesDiagramProps> = ({ showTable = true }) => {
  const [activeView, setActiveView] = useState<'short-run' | 'product-curves'>('short-run');
  const [showMC, setShowMC] = useState(true);
  const [showATC, setShowATC] = useState(true);
  const [showAVC, setShowAVC] = useState(true);
  const [showAFC, setShowAFC] = useState(true);

  /* ---------------- cost panel geometry ---------------- */
  const p = plotBox(560, 400, { t: 30, r: 60, b: 62, l: 74 });
  const Q_MAX = 12;
  const C_MAX = 170;
  const qx = (q: number) => (q / Q_MAX) * 100;
  const cy = (c: number) => (c / C_MAX) * 100;
  const costPath = (f: (q: number) => number, from = 0.7, to = Q_MAX) =>
    curve(p, (v) => cy(Math.min(f((v / 100) * Q_MAX), C_MAX)), qx(from), qx(to), 140);

  const costTicks = [40, 80, 120, 160];
  const qTicks = [2, 4, 6, 8, 10, 12];

  /* ---------------- product panel geometry ---------------- */
  const top = plotBox(560, 230, { t: 26, r: 60, b: 30, l: 74 });
  const bot = plotBox(560, 250, { t: 20, r: 60, b: 56, l: 74 });
  const L_MAX = 11.5;
  const lx = (l: number) => (l / L_MAX) * 100;
  const tpy = (v: number) => (v / 115) * 100;
  const mpy = (v: number) => ((v + 10) / 30) * 100; // zero line sits at 33.3%
  const prodPath = (
    box: ReturnType<typeof plotBox>,
    f: (l: number) => number,
    sy: (v: number) => number,
    to = L_MAX,
  ) => curve(box, (v) => sy(f((v / 100) * L_MAX)), 0, lx(to), 120);

  const costRows = Array.from({ length: 12 }, (_, i) => i + 1).map((q) => ({
    q,
    tfc: TFC,
    tvc: fmt(tvc(q)),
    tc: fmt(TFC + tvc(q)),
    mc: fmt(mc(q)),
    afc: fmt(afc(q)),
    avc: fmt(avc(q)),
    atc: fmt(atc(q)),
  }));

  const productRows = Array.from({ length: 11 }, (_, i) => i + 1).map((l) => ({
    l,
    tp: fmt(tp(l)),
    mp: fmt(mp(l)),
    ap: fmt(ap(l)),
  }));

  return (
    <div className="w-full space-y-6">
      {/* View Toggle */}
      <div className="flex gap-2 flex-wrap">
        {([
          ['short-run', 'Short-Run Cost Curves'],
          ['product-curves', 'Product Curves (TP, MP, AP)'],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveView(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeView === key
                ? 'bg-primary text-primary-foreground'
                : 'bg-card/50 text-muted-foreground hover:bg-card'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeView === 'short-run' && (
        <>
          {/* Curve Toggles */}
          <div className="flex gap-4 flex-wrap">
            {([
              [showMC, setShowMC, 'MC (Marginal Cost)', C.supply],
              [showATC, setShowATC, 'ATC (Average Total Cost)', C.demand],
              [showAVC, setShowAVC, 'AVC (Average Variable Cost)', C.social],
              [showAFC, setShowAFC, 'AFC (Average Fixed Cost)', C.marker],
            ] as const).map(([value, setter, label, color]) => (
              <label key={label} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => (setter as (v: boolean) => void)(!value)}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm font-medium" style={{ color }}>{label}</span>
              </label>
            ))}
          </div>

          <DiagramFrame
            eyebrow="Interactive"
            title="Short-Run Cost Curves — MC Cuts AVC and ATC at Their Minimums"
            legend={[
              { label: 'MC', color: C.supply },
              { label: 'ATC', color: C.demand },
              { label: 'AVC', color: C.social },
              { label: 'AFC', color: C.marker },
              { label: 'Turning points', color: C.marker, kind: 'dot' },
            ]}
            note={
              <>
                <strong>Key relationship:</strong> whenever MC lies below an average curve that average
                is falling; whenever MC lies above it, it is rising. MC therefore cuts AVC at its minimum
                (q = 5, AVC = 26 — the shutdown point) and ATC at its minimum (q ≈ 6.8, ATC ≈ 42.7 — the
                break-even point). AFC is a rectangular hyperbola (100/q) that falls continuously, so the
                vertical gap between ATC and AVC narrows as output rises.
              </>
            }
          >
            {({ play, runKey }) => (
              <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto">
                <Axes p={p} id="costcurves" labelX="Output (Q)" labelY="Costs ($)" />

                {/* ticks */}
                {costTicks.map((t) => (
                  <g key={`ct-${t}`}>
                    <line x1={p.x0 - 5} y1={p.y(cy(t))} x2={p.x0} y2={p.y(cy(t))} stroke={C.axis} strokeWidth={1} />
                    <text x={p.x0 - 9} y={p.y(cy(t)) + 3.5} fill={C.muted} fontSize={9} textAnchor="end">{t}</text>
                  </g>
                ))}
                {qTicks.map((t) => (
                  <g key={`qt-${t}`}>
                    <line x1={p.x(qx(t))} y1={p.y0} x2={p.x(qx(t))} y2={p.y0 + 5} stroke={C.axis} strokeWidth={1} />
                    <text x={p.x(qx(t))} y={p.y0 + 16} fill={C.muted} fontSize={9} textAnchor="middle">{t}</text>
                  </g>
                ))}

                {showAFC && play && (
                  <>
                    <motion.path d={costPath(afc, 0.7)} fill="none" stroke={C.marker} strokeWidth={2.2} {...revealPath(0)} />
                    <motion.text x={p.x(qx(12.2))} y={p.y(cy(afc(12))) + 4} fill={C.marker} fontSize={11} {...revealFade(1)}>AFC</motion.text>
                  </>
                )}

                {showAVC && play && (
                  <>
                    <motion.path d={costPath(avc, 0.7)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(1)} />
                    <motion.text x={p.x(qx(12.2))} y={p.y(cy(avc(12))) + 4} fill={C.social} fontSize={11} {...revealFade(2)}>AVC</motion.text>
                  </>
                )}

                {showATC && play && (
                  <>
                    <motion.path d={costPath(atc, 1.05)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(2)} />
                    <motion.text x={p.x(qx(12.2))} y={p.y(cy(atc(12))) + 4} fill={C.demand} fontSize={11} {...revealFade(3)}>ATC</motion.text>
                  </>
                )}

                {showMC && play && (
                  <>
                    <motion.path d={costPath(mc, 0.7)} fill="none" stroke={C.supply} strokeWidth={2.8} {...revealPath(3)} />
                    <motion.text x={p.x(qx(11.0))} y={p.y(cy(mc(11.6)))} fill={C.supply} fontSize={11} {...revealFade(4)}>MC</motion.text>
                  </>
                )}

                {/* MC = AVC at min AVC */}
                {showMC && showAVC && play && (
                  <>
                    <Guides p={p} qx={qx(AVC_MIN_Q)} py={cy(AVC_MIN)} color={C.social} />
                    <motion.circle cx={p.x(qx(AVC_MIN_Q))} cy={p.y(cy(AVC_MIN))} r={5} fill={C.marker} stroke="#0b1b2e" strokeWidth={1.5} {...revealPoint(5)} />
                    <motion.text x={p.x(qx(AVC_MIN_Q)) - 8} y={p.y(cy(AVC_MIN)) + 22} fill={C.social} fontSize={9.5} textAnchor="end" {...revealFade(6)}>
                      MC = AVC (shutdown point)
                    </motion.text>
                  </>
                )}

                {/* MC = ATC at min ATC */}
                {showMC && showATC && play && (
                  <>
                    <Guides p={p} qx={qx(ATC_MIN_Q)} py={cy(ATC_MIN)} color={C.demand} />
                    <motion.circle cx={p.x(qx(ATC_MIN_Q))} cy={p.y(cy(ATC_MIN))} r={5} fill={C.marker} stroke="#0b1b2e" strokeWidth={1.5} {...revealPoint(6)} />
                    <motion.text x={p.x(qx(ATC_MIN_Q)) + 10} y={p.y(cy(ATC_MIN)) - 8} fill={C.demand} fontSize={9.5} {...revealFade(7)}>
                      MC = ATC (break-even)
                    </motion.text>
                  </>
                )}
              </svg>
            )}
          </DiagramFrame>
        </>
      )}

      {activeView === 'product-curves' && (
        <>
          <DiagramFrame
            eyebrow="Interactive"
            title="Product Curves — TP, MP and AP from the Same Production Function"
            legend={[
              { label: 'Total Product (TP)', color: C.demandAlt },
              { label: 'Marginal Product (MP)', color: C.supply },
              { label: 'Average Product (AP)', color: C.social },
              { label: 'Turning points', color: C.marker, kind: 'dot' },
            ]}
            note={
              <>
                With TP = 3L² − 0.2L³: MP peaks first at L = 5 (end of increasing marginal returns), MP
                cuts AP from above at L = 7.5 where AP is at its maximum, and TP peaks at L = 10 exactly
                where MP = 0. Beyond L = 10 the extra worker is counter-productive and MP is negative.
              </>
            }
          >
            {({ play, runKey }) => (
              <svg key={runKey} viewBox="0 0 560 480" className="w-full h-auto">
                {/* ---- top panel: TP ---- */}
                <g>
                  <Axes p={top} id="prod-tp" labelX="" labelY="Total Product" />
                  {play && (
                    <>
                      <motion.path d={prodPath(top, tp, tpy)} fill="none" stroke={C.demandAlt} strokeWidth={2.8} {...revealPath(0)} />
                      <motion.text x={top.x(lx(11.4))} y={top.y(tpy(tp(11.4))) + 16} fill={C.demandAlt} fontSize={11} {...revealFade(1)}>TP</motion.text>
                      <line
                        x1={top.x(lx(MP_MAX_L))} y1={top.y(tpy(tp(MP_MAX_L)))}
                        x2={top.x(lx(MP_MAX_L))} y2={top.y0}
                        stroke={C.muted} strokeWidth={1} strokeDasharray="4 4"
                      />
                      <motion.text x={top.x(lx(MP_MAX_L))} y={top.y(tpy(tp(MP_MAX_L))) - 10} fill={C.muted} fontSize={9} textAnchor="middle" {...revealFade(2)}>
                        point of inflexion
                      </motion.text>
                      <motion.circle cx={top.x(lx(TP_MAX_L))} cy={top.y(tpy(tp(TP_MAX_L)))} r={5} fill={C.marker} stroke="#0b1b2e" strokeWidth={1.5} {...revealPoint(2)} />
                      <motion.text x={top.x(lx(TP_MAX_L)) - 6} y={top.y(tpy(tp(TP_MAX_L))) - 12} textAnchor="end" fill={C.marker} fontSize={9.5} {...revealFade(3)}>
                        TP max (MP = 0)
                      </motion.text>
                    </>
                  )}
                </g>

                {/* ---- bottom panel: MP & AP ---- */}
                <g transform="translate(0, 230)">
                  <Axes p={bot} id="prod-mpap" labelX="Units of Labour (L)" labelY="AP / MP" origin="" />
                  {/* zero line for MP */}
                  <line x1={bot.x0} y1={bot.y(mpy(0))} x2={bot.x(100)} y2={bot.y(mpy(0))} stroke={C.axis} strokeWidth={1.5} />
                  <text x={bot.x0 - 9} y={bot.y(mpy(0)) + 3.5} fill={C.muted} fontSize={9} textAnchor="end">0</text>
                  {play && (
                    <>
                      <motion.path d={prodPath(bot, mp, mpy)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(1)} />
                      <motion.path d={prodPath(bot, ap, mpy)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(2)} />
                      <motion.text x={bot.x(lx(3.1))} y={bot.y(mpy(mp(3.1))) - 12} fill={C.supply} fontSize={11} {...revealFade(3)}>MP</motion.text>
                      <motion.text x={bot.x(lx(10.4))} y={bot.y(mpy(ap(10.4))) - 12} fill={C.social} fontSize={11} {...revealFade(4)}>AP</motion.text>

                      <motion.circle cx={bot.x(lx(MP_MAX_L))} cy={bot.y(mpy(mp(MP_MAX_L)))} r={5} fill={C.marker} stroke="#0b1b2e" strokeWidth={1.5} {...revealPoint(4)} />
                      <motion.text x={bot.x(lx(MP_MAX_L))} y={bot.y(mpy(mp(MP_MAX_L))) - 12} fill={C.marker} fontSize={9.5} textAnchor="middle" {...revealFade(5)}>MP max</motion.text>

                      <motion.circle cx={bot.x(lx(AP_MAX_L))} cy={bot.y(mpy(ap(AP_MAX_L)))} r={5} fill={C.marker} stroke="#0b1b2e" strokeWidth={1.5} {...revealPoint(5)} />
                      <motion.text x={bot.x(lx(AP_MAX_L)) + 10} y={bot.y(mpy(ap(AP_MAX_L))) - 14} fill={C.marker} fontSize={9.5} {...revealFade(6)}>MP = AP (AP max)</motion.text>

                      <motion.circle cx={bot.x(lx(TP_MAX_L))} cy={bot.y(mpy(0))} r={5} fill={C.marker} stroke="#0b1b2e" strokeWidth={1.5} {...revealPoint(6)} />
                      <motion.text x={bot.x(lx(TP_MAX_L)) + 8} y={bot.y(mpy(0)) - 10} fill={C.marker} fontSize={9.5} {...revealFade(7)}>MP = 0</motion.text>

                      <motion.text x={bot.x(lx(2.4))} y={bot.m.t + bot.ch + 26} fill="hsl(140,70%,60%)" fontSize={9} textAnchor="middle" {...revealFade(7)}>
                        Increasing MP
                      </motion.text>
                      <motion.text x={bot.x(lx(7.4))} y={bot.m.t + bot.ch + 26} fill="hsl(45,90%,62%)" fontSize={9} textAnchor="middle" {...revealFade(7)}>
                        Diminishing MP
                      </motion.text>
                      <motion.text x={bot.x(lx(10.6))} y={bot.m.t + bot.ch + 26} fill="hsl(0,80%,68%)" fontSize={9} textAnchor="middle" {...revealFade(7)}>
                        Negative MP
                      </motion.text>
                    </>
                  )}
                </g>
              </svg>
            )}
          </DiagramFrame>

          {/* Relationships */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
              <h4 className="text-emerald-400 font-medium mb-2">Stage 1: Increasing MP (L &lt; 5)</h4>
              <p className="text-sm text-silver">Specialisation and division of labour mean each extra worker adds more than the last, so TP rises at an increasing rate and MC falls.</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <h4 className="text-amber-400 font-medium mb-2">Stage 2: Diminishing MP (5 &lt; L &lt; 10)</h4>
              <p className="text-sm text-silver">The fixed factor becomes the constraint. MP falls, cuts AP at its maximum (L = 7.5), and MC rises. Firms produce in this stage.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h4 className="text-red-400 font-medium mb-2">Stage 3: Negative MP (L &gt; 10)</h4>
              <p className="text-sm text-silver">Congestion means an extra worker reduces total output. No profit-maximising firm ever hires this far.</p>
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
                    <th className="border border-silver/20 px-3 py-2 text-neon-magenta">MC</th>
                    <th className="border border-silver/20 px-3 py-2 text-amber-400">AFC</th>
                    <th className="border border-silver/20 px-3 py-2 text-emerald-400">AVC</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-cyan">ATC</th>
                  </>
                ) : (
                  <>
                    <th className="border border-silver/20 px-3 py-2 text-silver-bright">Labour (L)</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-cyan">TP</th>
                    <th className="border border-silver/20 px-3 py-2 text-neon-magenta">MP</th>
                    <th className="border border-silver/20 px-3 py-2 text-emerald-400">AP</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeView === 'short-run'
                ? costRows.map((row) => (
                    <tr key={`cost-row-${row.q}`} className="hover:bg-card/30">
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.q}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tfc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tvc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.tc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-magenta">{row.mc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-amber-400">{row.afc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-emerald-400">{row.avc}</td>
                      <td className="border border-silver/20 px-3 py-2 text-center text-neon-cyan">{row.atc}</td>
                    </tr>
                  ))
                : productRows.map((row) => (
                    <tr key={`product-row-${row.l}`} className="hover:bg-card/30">
                      <td className="border border-silver/20 px-3 py-2 text-center text-silver">{row.l}</td>
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
