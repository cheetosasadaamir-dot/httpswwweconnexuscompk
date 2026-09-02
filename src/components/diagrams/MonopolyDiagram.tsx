import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface MonopolyDiagramProps {
  title?: string;
}

/**
 * Monopoly equilibrium with the deadweight welfare loss triangle.
 *
 * AR = 100 − 1.2Q        MR = 100 − 2.4Q   (same intercept, twice the gradient)
 * TC = 300 + 20Q + 0.3Q² → MC = 20 + 0.6Q, ATC = 300/Q + 20 + 0.3Q
 *   min ATC at Q = √(300/0.3) = 31.6, ATC = 39.0 = MC(31.6) ✓
 *
 * Profit max  MC = MR : 20 + 0.6Q = 100 − 2.4Q → Qm = 26.67
 *             price read off AR : Pm = 100 − 1.2(26.67) = 68
 *             ATC(26.67) = 39.25 → supernormal profit ≈ 766
 * Allocative (competitive) output  AR = MC : Qc = 44.44, Pc = 46.67
 * Deadweight loss = ½ × (44.44 − 26.67) × (68 − 36) ≈ 284
 */
const MonopolyDiagram = ({ title }: MonopolyDiagramProps) => {
  const p = plotBox();
  const { x, y } = p;

  const AR = (q: number) => 100 - 1.2 * q;
  const MR = (q: number) => 100 - 2.4 * q;
  const MC = (q: number) => 20 + 0.6 * q;
  const ATC = (q: number) => 300 / q + 20 + 0.3 * q;

  const Qm = 26.667, Pm = 68, ACm = ATC(26.667), MCm = MC(26.667); // 39.25, 36
  const Qc = 44.444, Pc = 46.667;

  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title={title ?? 'Monopoly: Restricted Output, Higher Price, Deadweight Loss'}
      eyebrow="Figure — profit maximisation where MC = MR, price read off AR"
      legend={[
        { label: 'AR = D (market demand)', color: C.demand },
        { label: 'MR (twice as steep as AR)', color: C.supply },
        { label: 'MC', color: C.social },
        { label: 'ATC', color: C.intervention },
        { label: 'Supernormal profit', color: C.revenue, kind: 'area' },
        { label: 'Deadweight welfare loss', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          The monopolist faces the whole market demand curve, so AR slopes down and MR falls
          <strong> twice as steeply</strong>, cutting the horizontal axis at half the output at which AR does.
          Profit is maximised where <strong>MC = MR</strong> at Q<sub>m</sub> = 26.7, and the price is read
          <em> vertically upwards to the AR curve</em> at P<sub>m</sub> = 68 — a common error is to read the
          price off MR or MC. Average cost at that output is 39.3, so the gold rectangle is supernormal
          profit, which barriers to entry preserve into the long run. Because P (68) exceeds MC (36) the
          market is <strong>allocatively inefficient</strong>: the competitive outcome would be Q<sub>c</sub> = 44.4
          at P<sub>c</sub> = 46.7, and the red triangle between AR, MC and the two output levels is the
          <strong> deadweight welfare loss</strong> of the trades never made. Output is also below min ATC
          (Q = 31.6), so the firm is <strong>productively inefficient</strong> too. Evaluate: economies of
          scale may shift the whole cost curve down, and Schumpeter argued abnormal profit funds the R&amp;D
          that delivers dynamic efficiency.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Monopoly diagram showing profit maximising output where marginal cost equals marginal revenue, supernormal profit and the deadweight loss triangle">
          <Axes p={p} id="mono" labelX="Output (Q)" labelY="Price, Costs, Revenue" />
          {play && (
            <>
              {/* profit rectangle */}
              <motion.rect x={x(0)} y={y(Pm)} width={x(Qm) - x(0)} height={y(ACm) - y(Pm)}
                fill={C.revenue} opacity={0.18} {...revealFade(4)} />

              {/* deadweight loss triangle */}
              <motion.path
                d={`M ${x(Qm)} ${y(Pm)} L ${x(Qm)} ${y(MCm)} L ${x(Qc)} ${y(Pc)} Z`}
                fill={C.welfareLoss} opacity={0.28} {...revealFade(6)}
              />

              <motion.path d={seg(AR, 0, 83)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
              <motion.text x={x(83) + 4} y={y(AR(83))} fill={C.demand} fontSize={11} {...revealFade(1)}>AR = D</motion.text>

              <motion.path d={seg(MR, 0, 41.7)} fill="none" stroke={C.supply} strokeWidth={2.4} {...revealPath(1)} />
              <motion.text x={x(41.7) + 4} y={y(0) - 4} fill={C.supply} fontSize={11} {...revealFade(2)}>MR</motion.text>

              <motion.path d={curve(p, MC, 2, 80)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(2)} />
              <motion.text x={x(80) + 4} y={y(MC(80))} fill={C.social} fontSize={11} {...revealFade(3)}>MC</motion.text>

              <motion.path d={curve(p, ATC, 6, 80, 140)} fill="none" stroke={C.intervention} strokeWidth={2.4} {...revealPath(3)} />
              <motion.text x={x(80) + 4} y={y(ATC(80)) + 13} fill={C.intervention} fontSize={11} {...revealFade(4)}>ATC</motion.text>

              {/* equilibrium */}
              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={Qm} py={Pm} color={C.marker} xLabel="Qm = 26.7" yLabel="Pm = 68" />
              </motion.g>
              <motion.circle cx={x(Qm)} cy={y(Pm)} r={5} fill={C.marker} {...revealPoint(5)} />
              <motion.circle cx={x(Qm)} cy={y(MCm)} r={4.5} fill={C.social} {...revealPoint(5)} />
              <motion.text x={x(Qm) + 7} y={y(MCm) + 4} fill={C.social} fontSize={10} {...revealFade(6)}>MC = MR</motion.text>
              <motion.text x={x(4)} y={y(Pm) - 8} fill={C.revenue} fontSize={10} {...revealFade(6)}>supernormal profit</motion.text>
              <motion.text x={x(0) - 8} y={y(ACm) + 4} fill={C.intervention} fontSize={10} textAnchor="end" {...revealFade(6)}>AC = 39.3</motion.text>

              {/* competitive benchmark */}
              <motion.circle cx={x(Qc)} cy={y(Pc)} r={4.5} fill={C.welfareGain} {...revealPoint(7)} />
              <motion.text x={x(Qc) + 6} y={y(Pc) + 14} fill={C.welfareGain} fontSize={10} {...revealFade(7)}>
                P = MC (allocative)
              </motion.text>
              <motion.text x={x(Qc) + 4} y={y(0) + 15} fill={C.welfareGain} fontSize={10} textAnchor="middle" {...revealFade(7)}>Qc = 44.4</motion.text>
              <motion.text x={x(Qm) + 18} y={y(56)} fill={C.welfareLoss} fontSize={10} {...revealFade(8)}>DWL</motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default MonopolyDiagram;
