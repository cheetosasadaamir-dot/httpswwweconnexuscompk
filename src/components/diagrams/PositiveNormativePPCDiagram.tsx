import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

const MAX = 86;
const ppf = (q: number) => MAX * Math.sqrt(Math.max(0, 1 - (q / MAX) ** 2));

/**
 * Positive vs normative statements read off a single PPC. The geometry
 * supplies the testable (positive) facts; the value judgements about which
 * point society *should* choose are normative.
 */
const PositiveNormativePPCDiagram = ({ title }: { title?: string }) => {
  const p = plotBox(560, 400);

  const a = { q: MAX * 0.3, y: ppf(MAX * 0.3) };
  const b = { q: MAX * 0.78, y: ppf(MAX * 0.78) };
  const cost = a.y - b.y;

  const statements = [
    { kind: 'Positive', text: `Moving from A to B raises defence output by ${(b.q - a.q).toFixed(1)} units.`, color: C.demand },
    { kind: 'Positive', text: `That move sacrifices ${cost.toFixed(1)} units of healthcare — a testable opportunity cost.`, color: C.demand },
    { kind: 'Positive', text: 'Any point inside the curve means some resources are unemployed.', color: C.demand },
    { kind: 'Normative', text: 'The government ought to choose A because healthcare matters more than defence.', color: C.marker },
    { kind: 'Normative', text: 'Sacrificing healthcare for defence is unfair on low-income households.', color: C.marker },
    { kind: 'Normative', text: 'Spare capacity is unacceptable and should be eliminated immediately.', color: C.marker },
  ];

  return (
    <DiagramFrame
      title={title ?? 'Positive vs Normative Statements on a PPC'}
      eyebrow="Fact-based analysis versus value judgement"
      legend={[
        { label: 'PPC', color: C.axis },
        { label: 'A / B — output combinations', color: C.marker, kind: 'dot' },
        { label: 'Healthcare sacrificed (opportunity cost)', color: C.welfareLoss, kind: 'area' },
      ]}
      note={
        <>
          Positive statements describe what <em>is</em> and can be tested against evidence — the diagram measures
          them. Normative statements contain a value judgement about what <em>ought</em> to be and cannot be
          proved right or wrong by data. Words like <em>should</em>, <em>unfair</em>, <em>too much</em> and{' '}
          <em>better</em> signal normative economics.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="space-y-4">
          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label="PPC used to distinguish positive from normative statements">
            <Axes p={p} id="posnorm-ppc" labelX="Defence (units)" labelY="Healthcare (units)" />

            <motion.path d={curve(p, ppf, 0, MAX)} fill="none" stroke={C.axis} strokeWidth={2.4} {...revealPath(0)} animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} />

            <motion.rect
              x={p.x(a.q)} y={p.y(a.y)} width={p.x(b.q) - p.x(a.q)} height={p.y(b.y) - p.y(a.y)}
              fill={C.welfareLoss} opacity={0.12}
              {...revealFade(2)} animate={play ? { opacity: 0.12 } : { opacity: 0 }}
            />

            <Guides p={p} qx={a.q} py={a.y} color={C.marker} />
            <Guides p={p} qx={b.q} py={b.y} color={C.marker} />

            <motion.g {...revealPoint(1)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
              <circle cx={p.x(a.q)} cy={p.y(a.y)} r={6} fill={C.marker} />
              <text x={p.x(a.q) - 20} y={p.y(a.y) - 8} fill={C.marker} fontSize={13} fontWeight={700}>A</text>
            </motion.g>
            <motion.g {...revealPoint(2)} animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}>
              <circle cx={p.x(b.q)} cy={p.y(b.y)} r={6} fill={C.marker} />
              <text x={p.x(b.q) + 10} y={p.y(b.y) - 8} fill={C.marker} fontSize={13} fontWeight={700}>B</text>
            </motion.g>

            <motion.text
              x={(p.x(a.q) + p.x(b.q)) / 2} y={(p.y(a.y) + p.y(b.y)) / 2}
              fill={C.welfareLoss} fontSize={11} fontWeight={600} textAnchor="middle"
              {...revealFade(3)} animate={play ? { opacity: 1 } : { opacity: 0 }}
            >
              −{cost.toFixed(1)} healthcare
            </motion.text>
          </svg>

          <div className="grid gap-2 sm:grid-cols-2">
            {statements.map((s) => (
              <div key={s.text} className="rounded-lg border-l-2 p-3" style={{ borderColor: s.color, backgroundColor: `${s.color}12` }}>
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: s.color }}>
                  {s.kind}
                </span>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default PositiveNormativePPCDiagram;
