import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes } from './DiagramAxes';
import {
  DIAGRAM_COLORS as C,
  plotBox,
  revealFade,
  revealPath,
  revealPoint,
} from './diagramStyle';

interface UtilityDiagramProps {
  /** Kept for backwards compatibility with existing call sites. */
  showMarginal?: boolean;
  title?: string;
}

/**
 * Total Utility and Marginal Utility — A2 (Cambridge 9708) standard.
 *
 * Data (ice-cream bars): Q 1-6, TU 20, 35, 45, 50, 50, 45; MU 20, 15, 10, 5, 0, -5.
 * Structural rules enforced here (cross-checked against tutor2u, Economics Online,
 * S-cool and Khan Academy):
 *   - MU is the slope of TU, so MU falls continuously (law of diminishing marginal utility).
 *   - TU reaches its MAXIMUM exactly where MU = 0 (between Q = 4 and Q = 5, flat at 50).
 *   - TU FALLS once MU turns negative (Q = 6).
 *   - MU is plotted on its own axis below TU with a zero line, and the MU curve is
 *     drawn against the same quantity scale so the two panels line up vertically.
 */
const UTIL = [
  { q: 1, tu: 20, mu: 20 },
  { q: 2, tu: 35, mu: 15 },
  { q: 3, tu: 45, mu: 10 },
  { q: 4, tu: 50, mu: 5 },
  { q: 5, tu: 50, mu: 0 },
  { q: 6, tu: 45, mu: -5 },
];

const UtilityDiagram = ({ showMarginal = true }: UtilityDiagramProps) => {
  // Shared quantity scale: 0 - 7 mapped onto 0 - 100.
  const qv = (q: number) => (q / 7) * 100;

  const top = plotBox(540, 300, { t: 26, r: 46, b: 44, l: 62 });
  const bot = plotBox(540, 270, { t: 26, r: 46, b: 56, l: 62 });

  // TU value 0-60 mapped to 0-100
  const tuv = (tu: number) => (tu / 60) * 100;
  // MU value -10..25 mapped to 0-100
  const muv = (mu: number) => ((mu + 10) / 35) * 100;

  const smooth = (pts: { x: number; y: number }[]) =>
    pts.reduce((acc, point, i, arr) => {
      if (i === 0) return `M ${point.x} ${point.y}`;
      const p0 = arr[Math.max(0, i - 2)];
      const p1 = arr[i - 1];
      const p3 = arr[Math.min(arr.length - 1, i + 1)];
      const cp1x = p1.x + (point.x - p0.x) / 6;
      const cp1y = p1.y + (point.y - p0.y) / 6;
      const cp2x = point.x - (p3.x - p1.x) / 6;
      const cp2y = point.y - (p3.y - p1.y) / 6;
      return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
    }, '');

  const tuPath = smooth([
    { x: top.x(0), y: top.y(0) },
    ...UTIL.map((d) => ({ x: top.x(qv(d.q)), y: top.y(tuv(d.tu)) })),
  ]);

  const muPath = `M ${bot.x(qv(1))} ${bot.y(muv(20))} L ${bot.x(qv(6))} ${bot.y(muv(-5))}`;

  return (
    <DiagramFrame
      title="Total Utility, Marginal Utility and the Law of Diminishing Marginal Utility"
      eyebrow="Figure — Cardinal utility"
      legend={[
        { label: 'Total Utility (TU)', color: C.demand },
        { label: 'Marginal Utility (MU)', color: C.supply },
        { label: 'MU = 0 / TU maximum', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          <strong>Marginal utility is the slope of total utility.</strong> As successive units are
          consumed within a given time period, MU falls — the law of diminishing marginal utility. TU
          keeps rising while MU is positive, reaches its <strong>maximum where MU = 0</strong> (the
          point of satiation, here Q ≈ 5), and <strong>falls once MU becomes negative</strong>. This
          is why a rational consumer never knowingly buys into the negative-MU range, and why the
          demand curve slopes downward: extra units are worth progressively less, so buyers will only
          take them at a lower price.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="min-w-[320px] space-y-1">
          {/* ---- Panel 1: Total Utility ---- */}
          <svg viewBox={`0 0 ${top.W} ${top.H}`} className="mx-auto h-auto w-full" role="img" aria-label="Total utility curve rising at a decreasing rate, peaking where marginal utility is zero, then falling">
            <Axes p={top} id="util-tu" labelX="" labelY="Total Utility (utils)" />
            {[0, 20, 40, 60].map((t) => (
              <g key={t}>
                <line x1={top.m.l} y1={top.y(tuv(t))} x2={top.m.l + top.cw} y2={top.y(tuv(t))} stroke={C.grid} strokeWidth={0.6} strokeDasharray="4 4" opacity={0.5} />
                <text x={top.m.l - 8} y={top.y(tuv(t)) + 4} fill={C.muted} fontSize={10} textAnchor="end">{t}</text>
              </g>
            ))}
            <motion.path
              d={tuPath}
              fill="none"
              stroke={C.demand}
              strokeWidth={2.8}
              strokeLinecap="round"
              {...revealPath(0, 1.1)}
              animate={play ? revealPath(0, 1.1).animate : revealPath(0, 1.1).initial}
            />
            {UTIL.map((d, i) => (
              <motion.circle
                key={d.q}
                cx={top.x(qv(d.q))}
                cy={top.y(tuv(d.tu))}
                r={4}
                fill={d.tu === 50 && d.q === 5 ? C.marker : C.demand}
                {...revealPoint(1 + i * 0.08)}
                animate={play ? revealPoint(1 + i * 0.08).animate : revealPoint(1 + i * 0.08).initial}
              />
            ))}
            <motion.g {...revealFade(2)} animate={play ? revealFade(2).animate : revealFade(2).initial}>
              <line x1={top.x(qv(5))} y1={top.y(tuv(50))} x2={top.x(qv(5))} y2={top.m.t + top.ch} stroke={C.marker} strokeDasharray="4 3" strokeWidth={1.1} />
              <text x={top.x(qv(5))} y={top.y(tuv(50)) - 12} fill={C.marker} fontSize={11} fontWeight="bold" textAnchor="middle">
                TU maximum (MU = 0)
              </text>
              <text x={top.x(qv(6.4))} y={top.y(tuv(44))} fill={C.demand} fontSize={12} fontWeight="bold">TU</text>
            </motion.g>
            {UTIL.map((d) => (
              <text key={`x${d.q}`} x={top.x(qv(d.q))} y={top.m.t + top.ch + 15} fill={C.muted} fontSize={10} textAnchor="middle">{d.q}</text>
            ))}
          </svg>

          {/* ---- Panel 2: Marginal Utility ---- */}
          {showMarginal && (
            <svg viewBox={`0 0 ${bot.W} ${bot.H}`} className="mx-auto h-auto w-full" role="img" aria-label="Marginal utility curve sloping downward and cutting the horizontal axis at the quantity where total utility peaks">
              <Axes p={bot} id="util-mu" labelX="Quantity consumed per period (Q)" labelY="Marginal Utility (utils)" />
              {[-5, 0, 5, 10, 15, 20].map((t) => (
                <text key={t} x={bot.m.l - 8} y={bot.y(muv(t)) + 4} fill={C.muted} fontSize={10} textAnchor="end">{t}</text>
              ))}
              <line x1={bot.m.l} y1={bot.y(muv(0))} x2={bot.m.l + bot.cw} y2={bot.y(muv(0))} stroke={C.intervention} strokeWidth={1.2} strokeDasharray="6 3" opacity={0.7} />
              <motion.path
                d={muPath}
                fill="none"
                stroke={C.supply}
                strokeWidth={2.8}
                strokeLinecap="round"
                {...revealPath(3, 1)}
                animate={play ? revealPath(3, 1).animate : revealPath(3, 1).initial}
              />
              {UTIL.map((d, i) => (
                <motion.circle
                  key={d.q}
                  cx={bot.x(qv(d.q))}
                  cy={bot.y(muv(d.mu))}
                  r={4}
                  fill={d.mu === 0 ? C.marker : C.supply}
                  {...revealPoint(4 + i * 0.08)}
                  animate={play ? revealPoint(4 + i * 0.08).animate : revealPoint(4 + i * 0.08).initial}
                />
              ))}
              <motion.g {...revealFade(5)} animate={play ? revealFade(5).animate : revealFade(5).initial}>
                <text x={bot.x(qv(5)) + 8} y={bot.y(muv(0)) - 8} fill={C.marker} fontSize={11} fontWeight="bold">MU = 0</text>
                <text x={bot.x(qv(6.3))} y={bot.y(muv(-6))} fill={C.supply} fontSize={12} fontWeight="bold">MU</text>
                <text x={bot.x(qv(6))} y={bot.y(muv(-8.5))} fill={C.welfareLoss} fontSize={10} textAnchor="middle">negative MU</text>
              </motion.g>
              {UTIL.map((d) => (
                <text key={`x${d.q}`} x={bot.x(qv(d.q))} y={bot.m.t + bot.ch + 15} fill={C.muted} fontSize={10} textAnchor="middle">{d.q}</text>
              ))}
            </svg>
          )}

          {/* ---- Data table ---- */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Units consumed (Q)</th>
                  <th className="px-3 py-2 text-center font-medium" style={{ color: C.demand }}>Total Utility (TU)</th>
                  <th className="px-3 py-2 text-center font-medium" style={{ color: C.supply }}>Marginal Utility (MU)</th>
                </tr>
              </thead>
              <tbody>
                {UTIL.map((d) => (
                  <tr key={d.q} className="border-b border-primary/10">
                    <td className="px-3 py-1.5 text-silver-bright">{d.q}</td>
                    <td className="px-3 py-1.5 text-center" style={{ color: C.demand }}>{d.tu}</td>
                    <td className="px-3 py-1.5 text-center" style={{ color: C.supply }}>{d.mu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default UtilityDiagram;
