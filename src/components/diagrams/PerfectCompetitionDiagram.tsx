import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Perfect competition — market and firm, short run and long run.
 *
 * MARKET   D  : P = 100 − 1.0Q            S₁ : P = 12 + 1.2Q
 *          → 100 − Q = 12 + 1.2Q → Q = 40, P = 56
 *          entry shifts supply right to S₂ : P = −49.6 + 1.2Q
 *          → new equilibrium P = 32 (= min AC), Q = 68
 *
 * FIRM     TC  = 250 + 12q + 0.4q²
 *          MC  = 12 + 0.8q          AVC = 12 + 0.4q
 *          ATC = 250/q + 12 + 0.4q  → min at q = √(250/0.4) = 25, ATC = 32
 *          check: MC(25) = 12 + 20 = 32 ✓ (MC cuts ATC exactly at its minimum)
 *
 *   Short run  P = 56 → MC = P → q = 55, ATC(55) = 38.55 → supernormal profit
 *   Long run   P = 32 → q = 25 at min ATC → normal profit only
 */
const PerfectCompetitionDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  // ---- market ----
  const D = (q: number) => 100 - q;
  const S1 = (q: number) => 12 + 1.2 * q;
  const S2 = (q: number) => -49.6 + 1.2 * q;

  // ---- firm (q runs 0–70, mapped onto the 0–100 plot scale) ----
  const K = 100 / 70;
  const fx = (q: number) => x(q * K);
  const MC = (q: number) => 12 + 0.8 * q;
  const ATC = (q: number) => 250 / q + 12 + 0.4 * q;
  const AVC = (q: number) => 12 + 0.4 * q;
  const fcurve = (f: (q: number) => number, a: number, b: number) =>
    curve(p, (v) => f(v / K), a * K, b * K, 120);

  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  const qSR = 55;
  const pSR = 56;
  const acSR = ATC(qSR); // 38.55
  const qLR = 25;
  const pLR = 32;

  return (
    <DiagramFrame
      title="Perfect Competition: Short-Run Profit to Long-Run Equilibrium"
      eyebrow="Figure — the market sets the price, the firm chooses only output"
      legend={[
        { label: 'Market demand / firm AR = MR = P', color: C.demand },
        { label: 'Market supply (S₁ short run, S₂ after entry)', color: C.supply },
        { label: 'Marginal cost (MC)', color: C.social },
        { label: 'Average total cost (ATC)', color: C.intervention },
        { label: 'Average variable cost (AVC)', color: C.muted, dashed: true },
        { label: 'Supernormal profit', color: C.revenue, kind: 'area' },
      ]}
      note={
        <>
          At P = 56 the firm equates <strong>MC = MR</strong> at q = 55, where average total cost is only
          38.6 — the gold rectangle is <strong>supernormal profit</strong> of about (56 − 38.6) × 55 ≈ 955.
          Because there are no barriers to entry, that profit attracts new firms: industry supply shifts
          right from S₁ to S₂ and the market price falls. Entry stops only when the price has fallen to
          32, the <strong>minimum of ATC</strong>, where the firm's horizontal demand curve is exactly
          tangent to the bottom of its ATC curve at q = 25. There the firm earns <strong>normal profit</strong>
          only and is simultaneously <strong>productively efficient</strong> (producing at min ATC) and
          <strong> allocatively efficient</strong> (P = MC). Note that MC cuts both AVC and ATC precisely at
          their minima — the firm's short-run supply curve is the MC curve above min AVC.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
          {/* ------------- MARKET ------------- */}
          <div className="flex-1">
            <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              The Industry
            </p>
            <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[300px]" role="img"
              aria-label="Competitive industry equilibrium with supply shifting right as firms enter">
              <Axes p={p} id="pc-mkt" labelX="Industry output (Q)" labelY="Price (P)" />
              {play && (
                <>
                  <motion.path d={seg(D, 0, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
                  <motion.text x={x(100) + 4} y={y(0) - 6} fill={C.demand} fontSize={11} {...revealFade(1)}>D</motion.text>

                  <motion.path d={seg(S1, 0, 73)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(1)} />
                  <motion.text x={x(73) + 4} y={y(S1(73))} fill={C.supply} fontSize={11} {...revealFade(2)}>S₁</motion.text>

                  <motion.g {...revealFade(2)}>
                    <Guides p={p} qx={40} py={56} color={C.marker} xLabel="Q₁ = 40" yLabel="P₁ = 56" />
                  </motion.g>
                  <motion.circle cx={x(40)} cy={y(56)} r={5} fill={C.marker} {...revealPoint(3)} />

                  <motion.path d={seg(S2, 42, 100)} fill="none" stroke={C.supplyAlt} strokeWidth={2.4}
                    strokeDasharray="6 4" {...revealPath(4)} />
                  <motion.text x={x(100) + 4} y={y(S2(100))} fill={C.supplyAlt} fontSize={11} {...revealFade(5)}>S₂</motion.text>

                  <motion.g {...revealFade(5)}>
                    <Guides p={p} qx={68} py={32} color={C.social} xLabel="Q₂ = 68" yLabel="P₂ = 32" />
                  </motion.g>
                  <motion.circle cx={x(68)} cy={y(32)} r={5} fill={C.social} {...revealPoint(6)} />
                  <motion.text x={x(30)} y={y(90)} fill={C.muted} fontSize={10} {...revealFade(6)}>
                    entry → supply shifts right → price falls
                  </motion.text>
                </>
              )}
            </svg>
          </div>

          {/* ------------- FIRM ------------- */}
          <div className="flex-1">
            <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              The Individual Firm (price taker)
            </p>
            <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[300px]" role="img"
              aria-label="Price taking firm earning supernormal profit in the short run and normal profit in the long run">
              <Axes p={p} id="pc-firm" labelX="Firm output (q)" labelY="Costs, Revenue" />
              {play && (
                <>
                  {/* profit rectangle */}
                  <motion.rect
                    x={fx(0)} y={y(pSR)} width={fx(qSR) - fx(0)} height={y(acSR) - y(pSR)}
                    fill={C.revenue} opacity={0.18} {...revealFade(4)}
                  />

                  <motion.path d={fcurve(MC, 3, 62)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(0)} />
                  <motion.text x={fx(62) + 4} y={y(MC(62))} fill={C.social} fontSize={11} {...revealFade(1)}>MC</motion.text>

                  <motion.path d={fcurve(ATC, 6, 62)} fill="none" stroke={C.intervention} strokeWidth={2.4} {...revealPath(1)} />
                  <motion.text x={fx(62) + 4} y={y(ATC(62)) + 12} fill={C.intervention} fontSize={11} {...revealFade(2)}>ATC</motion.text>

                  <motion.path d={fcurve(AVC, 3, 62)} fill="none" stroke={C.muted} strokeWidth={1.6}
                    strokeDasharray="5 4" {...revealPath(2)} />
                  <motion.text x={fx(62) + 4} y={y(AVC(62)) + 12} fill={C.muted} fontSize={10} {...revealFade(3)}>AVC</motion.text>

                  {/* short-run price line */}
                  <motion.path d={`M ${fx(0)} ${y(pSR)} L ${fx(66)} ${y(pSR)}`} fill="none"
                    stroke={C.demand} strokeWidth={2.4} {...revealPath(3)} />
                  <motion.text x={fx(66) + 4} y={y(pSR) - 6} fill={C.demand} fontSize={10} {...revealFade(4)}>
                    P₁ = AR = MR
                  </motion.text>
                  <motion.circle cx={fx(qSR)} cy={y(pSR)} r={5} fill={C.marker} {...revealPoint(5)} />
                  <motion.text x={fx(6)} y={y(48)} fill={C.revenue} fontSize={10} {...revealFade(5)}>
                    supernormal profit
                  </motion.text>
                  <line x1={fx(qSR)} y1={y(pSR)} x2={fx(qSR)} y2={y(0)} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1} />
                  <text x={fx(qSR)} y={y(0) + 15} fill={C.marker} fontSize={10} textAnchor="middle">q₁ = 55</text>

                  {/* long-run price line at min ATC */}
                  <motion.path d={`M ${fx(0)} ${y(pLR)} L ${fx(66)} ${y(pLR)}`} fill="none"
                    stroke={C.demandAlt} strokeWidth={2.2} strokeDasharray="6 4" {...revealPath(6)} />
                  <motion.text x={fx(66) + 4} y={y(pLR) + 12} fill={C.demandAlt} fontSize={10} {...revealFade(7)}>
                    P₂ (long run)
                  </motion.text>
                  <motion.circle cx={fx(qLR)} cy={y(pLR)} r={5} fill={C.social} {...revealPoint(7)} />
                  <line x1={fx(qLR)} y1={y(pLR)} x2={fx(qLR)} y2={y(0)} stroke={C.social} strokeDasharray="4 3" strokeWidth={1} />
                  <text x={fx(qLR)} y={y(0) + 15} fill={C.social} fontSize={10} textAnchor="middle">q₂ = 25</text>
                  <motion.text x={fx(qLR) - 8} y={y(pLR) - 10} fill={C.social} fontSize={9} textAnchor="end" {...revealFade(8)}>
                    min ATC = 32
                  </motion.text>
                </>
              )}
            </svg>
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default PerfectCompetitionDiagram;
