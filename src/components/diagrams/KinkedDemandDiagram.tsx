import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Sweezy's kinked demand curve (non-collusive oligopoly).
 *
 * Kink at (Q = 40, P = 60).
 *   Above the kink (Q < 40) rivals do NOT follow a price rise → demand elastic:
 *       AR = 84 − 0.6Q   → MR = 84 − 1.2Q,  MR(40) = 36
 *   Below the kink (Q > 40) rivals DO match a price cut → demand inelastic:
 *       AR = 120 − 1.5Q  → MR = 120 − 3.0Q, MR(40) = 0
 *   ⇒ vertical discontinuity in MR from 36 down to 0 at Q = 40.
 *
 * MC₁ = 5 + 0.25Q  → MC(40) = 15   |  MC₂ = 20 + 0.25Q → MC(40) = 30
 * Both cut MR inside the gap, so price stays rigid at 60.
 */
const KinkedDemandDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const ARup = (q: number) => 84 - 0.6 * q;
  const ARdn = (q: number) => 120 - 1.5 * q;
  const MRup = (q: number) => 84 - 1.2 * q;
  const MRdn = (q: number) => 120 - 3 * q;
  const MC1 = (q: number) => 5 + 0.25 * q;
  const MC2 = (q: number) => 20 + 0.25 * q;

  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Kinked Demand Curve: Why Oligopoly Prices Are Sticky"
      eyebrow="Figure — Sweezy's model of non-collusive interdependence"
      legend={[
        { label: 'AR: elastic above the kink', color: C.demand },
        { label: 'AR: inelastic below the kink', color: C.demandAlt },
        { label: 'MR (with vertical discontinuity)', color: C.supply },
        { label: 'MC₁ and MC₂ — both cut MR inside the gap', color: C.social },
        { label: 'Rigid price P = 60', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          Each oligopolist assumes rivals react asymmetrically. <strong>Raise price</strong> and rivals hold
          theirs, so customers desert: demand above the kink is <strong>relatively elastic</strong> and total
          revenue falls. <strong>Cut price</strong> and rivals match immediately to defend market share, so
          little extra volume is won: demand below the kink is <strong>relatively inelastic</strong> and revenue
          falls again. The kink in AR at Q = 40 produces a <strong>vertical discontinuity in MR</strong> between
          36 and 0. Marginal cost can rise anywhere within that gap — from MC₁ to MC₂ here — without changing
          the profit-maximising output or the price of 60. That is the model's central prediction:
          <strong> price rigidity</strong>, with competition diverted into advertising, loyalty schemes,
          quality and innovation. Evaluate it carefully: the model explains why prices <em>stay</em> where they
          are but never explains how the kink price was set in the first place, and empirical work (Stigler)
          finds oligopoly prices change more often than the model implies, especially in price wars.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Kinked demand curve with a discontinuous marginal revenue curve and two marginal cost curves giving the same price">
          <Axes p={p} id="kinked" labelX="Output (Q)" labelY="Price, Costs, Revenue" />
          {play && (
            <>
              {/* MR gap band */}
              <motion.rect x={x(40) - 5} y={y(36)} width={10} height={y(0) - y(36)}
                fill={C.supply} opacity={0.12} {...revealFade(4)} />

              <motion.path d={seg(ARup, 0, 40)} fill="none" stroke={C.demand} strokeWidth={2.6} {...revealPath(0)} />
              <motion.path d={seg(ARdn, 40, 78)} fill="none" stroke={C.demandAlt} strokeWidth={2.6} {...revealPath(1)} />
              <motion.text x={x(6)} y={y(ARup(6)) - 8} fill={C.demand} fontSize={10} {...revealFade(1)}>elastic (rivals don't follow)</motion.text>
              <motion.text x={x(78) + 4} y={y(ARdn(78))} fill={C.demandAlt} fontSize={11} {...revealFade(2)}>AR</motion.text>
              <motion.text x={x(60)} y={y(ARdn(60)) + 18} fill={C.demandAlt} fontSize={10} textAnchor="middle" {...revealFade(2)}>
                inelastic (rivals match)
              </motion.text>

              <motion.path d={seg(MRup, 0, 40)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(2)} />
              <motion.path d={`M ${x(40)} ${y(36)} L ${x(40)} ${y(0)}`} fill="none" stroke={C.supply}
                strokeWidth={2.2} strokeDasharray="5 3" {...revealPath(3)} />
              <motion.path d={seg(MRdn, 40, 40)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(3)} />
              <motion.text x={x(30)} y={y(MRup(30)) - 8} fill={C.supply} fontSize={11} {...revealFade(4)}>MR</motion.text>
              <motion.text x={x(40) + 8} y={y(18)} fill={C.supply} fontSize={10} {...revealFade(5)}>MR gap</motion.text>

              <motion.path d={seg(MC1, 0, 78)} fill="none" stroke={C.social} strokeWidth={2.2} {...revealPath(4)} />
              <motion.text x={x(78) + 4} y={y(MC1(78))} fill={C.social} fontSize={11} {...revealFade(5)}>MC₁</motion.text>
              <motion.path d={seg(MC2, 0, 78)} fill="none" stroke={C.welfareGain} strokeWidth={2.2}
                strokeDasharray="6 4" {...revealPath(5)} />
              <motion.text x={x(78) + 4} y={y(MC2(78)) - 12} fill={C.welfareGain} fontSize={11} {...revealFade(6)}>MC₂</motion.text>

              <motion.g {...revealFade(6)}>
                <Guides p={p} qx={40} py={60} color={C.marker} xLabel="Q = 40" yLabel="P = 60" />
              </motion.g>
              <motion.circle cx={x(40)} cy={y(60)} r={5.5} fill={C.marker} {...revealPoint(7)} />
              <motion.text x={x(40) + 8} y={y(60) - 8} fill={C.marker} fontSize={10} {...revealFade(7)}>
                kink — price stays rigid
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default KinkedDemandDiagram;
