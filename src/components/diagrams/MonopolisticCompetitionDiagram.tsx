import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Monopolistic competition: short-run supernormal profit → long-run tangency.
 *
 * TC = 200 + 15q + 0.35q² → MC = 15 + 0.7q, ATC = 200/q + 15 + 0.35q
 *   min ATC at q = √(200/0.35) = 23.9, ATC = 31.7 = MC(23.9) ✓
 *
 * SHORT RUN  AR₁ = 90 − q, MR₁ = 90 − 2q
 *            MR = MC : 15 + 0.7q = 90 − 2q → q = 27.8, P = 62.2, ATC = 31.9
 *
 * LONG RUN   entry pulls demand left and makes it flatter until AR is tangent to ATC.
 *            Tangency chosen at q = 15: ATC(15) = 33.58, ATC'(15) = −0.539
 *            AR₂ = 41.67 − 0.539q, MR₂ = 41.67 − 1.078q
 *            check MR₂(15) = 25.5 = MC(15) ✓ — tangency automatically satisfies MC = MR
 *            excess capacity = 23.9 − 15 = 8.9 units
 */
const MonopolisticCompetitionDiagram = () => {
  const p = plotBox();
  const { x, y } = p;
  const K = 100 / 60; // q runs 0–60
  const fx = (q: number) => x(q * K);
  const fc = (f: (q: number) => number, a: number, b: number) =>
    curve(p, (v) => f(v / K), a * K, b * K, 140);
  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${fx(a)} ${y(f(a))} L ${fx(b)} ${y(f(b))}`;

  const MC = (q: number) => 15 + 0.7 * q;
  const ATC = (q: number) => 200 / q + 15 + 0.35 * q;

  const AR1 = (q: number) => 90 - q;
  const MR1 = (q: number) => 90 - 2 * q;
  const q1 = 27.78, P1 = AR1(27.78), AC1 = ATC(27.78);

  const AR2 = (q: number) => 41.67 - 0.539 * q;
  const MR2 = (q: number) => 41.67 - 1.078 * q;
  const q2 = 15, P2 = ATC(15); // 33.58

  const Panel = ({
    id, label, ar, mr, arTo, mrTo, qe, pe, extra,
  }: {
    id: string; label: string;
    ar: (q: number) => number; mr: (q: number) => number;
    arTo: number; mrTo: number; qe: number; pe: number; extra?: React.ReactNode;
  }) => (
    <div className="flex-1">
      <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[300px]" role="img" aria-label={label}>
        <Axes p={p} id={id} labelX="Firm output (q)" labelY="Price, Costs, Revenue" />
        {extra}
        <motion.path d={fc(MC, 3, 55)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(0)} />
        <motion.text x={fx(55) + 4} y={y(MC(55))} fill={C.social} fontSize={11} {...revealFade(1)}>MC</motion.text>
        <motion.path d={fc(ATC, 5, 55, )} fill="none" stroke={C.intervention} strokeWidth={2.4} {...revealPath(1)} />
        <motion.text x={fx(55) + 4} y={y(ATC(55)) + 13} fill={C.intervention} fontSize={11} {...revealFade(2)}>ATC</motion.text>
        <motion.path d={seg(ar, 0, arTo)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(2)} />
        <motion.text x={fx(arTo) + 4} y={y(ar(arTo))} fill={C.demand} fontSize={11} {...revealFade(3)}>AR</motion.text>
        <motion.path d={seg(mr, 0, mrTo)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(3)} />
        <motion.text x={fx(mrTo) + 4} y={y(mr(mrTo)) + 4} fill={C.supply} fontSize={11} {...revealFade(4)}>MR</motion.text>
        <motion.g {...revealFade(4)}>
          <Guides p={p} qx={qe * K} py={pe} color={C.marker} xLabel={`q = ${qe.toFixed(0)}`} yLabel={`P = ${pe.toFixed(1)}`} />
        </motion.g>
        <motion.circle cx={fx(qe)} cy={y(pe)} r={5} fill={C.marker} {...revealPoint(5)} />
        <motion.circle cx={fx(qe)} cy={y(MC(qe))} r={4} fill={C.social} {...revealPoint(5)} />
      </svg>
    </div>
  );

  return (
    <DiagramFrame
      title="Monopolistic Competition: Short Run and Long Run"
      eyebrow="Figure — free entry erodes profit until AR is tangent to ATC"
      legend={[
        { label: 'AR (downward sloping but highly elastic)', color: C.demand },
        { label: 'MR', color: C.supply },
        { label: 'MC', color: C.social },
        { label: 'ATC', color: C.intervention },
        { label: 'Short-run supernormal profit', color: C.revenue, kind: 'area' },
        { label: 'Excess capacity', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          In the <strong>short run</strong> the firm maximises profit where MC = MR at q = 28 and charges 62.2,
          well above the average cost of 31.9, so the gold rectangle is supernormal profit. Because entry is
          free, new differentiated rivals take demand away: the firm's AR curve shifts <strong>left</strong> and
          becomes <strong>more elastic</strong> (flatter) as more substitutes appear. Equilibrium is reached only
          when AR is exactly <strong>tangent to ATC</strong>, at q = 15 and P = 33.6, so AR = AC and only normal
          profit remains — MC = MR is automatically satisfied at the tangency point. Two inefficiencies follow.
          The tangency must lie on the <em>falling</em> section of ATC, so output is short of the productively
          efficient minimum at q = 23.9: the gap of about 9 units is <strong>excess capacity</strong> (the
          half-empty restaurant). And P &gt; MC, so the market is allocatively inefficient. The offsetting
          benefit is genuine <strong>variety and choice</strong>, which perfect competition cannot deliver.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
          {play && (
            <>
              <Panel
                id="mcomp-sr" label="Short run: supernormal profit"
                ar={AR1} mr={MR1} arTo={55} mrTo={42} qe={q1} pe={P1}
                extra={
                  <motion.rect x={fx(0)} y={y(P1)} width={fx(q1) - fx(0)} height={y(AC1) - y(P1)}
                    fill={C.revenue} opacity={0.18} {...revealFade(4)} />
                }
              />
              <Panel
                id="mcomp-lr" label="Long run: tangency, normal profit only"
                ar={AR2} mr={MR2} arTo={55} mrTo={38} qe={q2} pe={P2}
                extra={
                  <>
                    <motion.g {...revealFade(5)}>
                      <line x1={fx(q2)} y1={y(12)} x2={fx(23.9)} y2={y(12)} stroke={C.welfareLoss} strokeWidth={2} />
                      <polygon points={`${fx(q2)},${y(12)} ${fx(q2) + 8},${y(12) - 4} ${fx(q2) + 8},${y(12) + 4}`} fill={C.welfareLoss} />
                      <polygon points={`${fx(23.9)},${y(12)} ${fx(23.9) - 8},${y(12) - 4} ${fx(23.9) - 8},${y(12) + 4}`} fill={C.welfareLoss} />
                      <line x1={fx(23.9)} y1={y(31.7)} x2={fx(23.9)} y2={y(8)} stroke={C.welfareLoss} strokeDasharray="4 3" strokeWidth={1} />
                    </motion.g>
                    <motion.text x={fx(19.5)} y={y(5)} fill={C.welfareLoss} fontSize={10} textAnchor="middle" {...revealFade(6)}>
                      excess capacity
                    </motion.text>
                    <motion.circle cx={fx(23.9)} cy={y(31.7)} r={4} fill={C.welfareGain} {...revealPoint(6)} />
                    <motion.text x={fx(23.9) + 6} y={y(31.7) + 14} fill={C.welfareGain} fontSize={9} {...revealFade(7)}>
                      min ATC
                    </motion.text>
                  </>
                }
              />
            </>
          )}
        </div>
      )}
    </DiagramFrame>
  );
};

export default MonopolisticCompetitionDiagram;
