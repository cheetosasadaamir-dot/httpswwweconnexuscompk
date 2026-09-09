import { useState } from 'react';
import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Cyclical (demand-deficient) unemployment shown as a negative output gap
 * in AD/AS space, plus the reflationary policy response that closes it.
 *
 * All three equilibria are true intersections of the AD lines with the
 * upward-sloping SRAS, and the output gap is measured against LRAS at Yf.
 */

const p = plotBox(560, 400, { t: 36, r: 58, b: 62, l: 68 });

/** Full-employment output. */
const YF = 68;

/** SRAS: P = 18 + 0.62Q. */
const sras = (q: number) => 18 + 0.62 * q;
/** AD: P = a - 0.78Q. */
const ad = (a: number) => (q: number) => a - 0.78 * q;

const solve = (a: number) => {
  const q = (a - 18) / (0.62 + 0.78);
  return { q, p: sras(q) };
};

/** AD calibrated so AD_FULL clears exactly at Yf. */
const A_FULL = 18 + 1.4 * YF; // 113.2
const A_SLUMP = A_FULL - 26;

const E_FULL = solve(A_FULL);
const E_SLUMP = solve(A_SLUMP);

const STEPS = [
  {
    label: 'Negative output gap',
    text: 'A collapse in confidence, exports or investment shifts AD left to AD₂. Equilibrium output falls to Y₂, below the full-employment level Yf. The horizontal distance Y₂→Yf is the negative output gap, and the workers no longer needed to produce that lost output are cyclically unemployed.',
  },
  {
    label: 'Policy response',
    text: 'Reflationary policy — lower interest rates, quantitative easing, tax cuts or higher government spending — shifts AD back to the right. Output returns towards Yf, the output gap closes and demand-deficient unemployment falls, at the cost of a higher price level and, for fiscal action, a wider budget deficit.',
  },
];

const CyclicalUnemploymentDiagram = () => {
  const [step, setStep] = useState(0);
  const recovered = step === 1;

  return (
    <DiagramFrame
      title="Cyclical (Demand-Deficient) Unemployment"
      eyebrow="Figure 4.2 · negative output gap and policy response"
      legend={[
        { label: 'AD₁ (full employment)', color: C.demand },
        { label: 'AD₂ (deficient demand)', color: C.demandAlt, dashed: true },
        { label: 'SRAS', color: C.supply },
        { label: 'LRAS at Yf', color: C.intervention, dashed: true },
        { label: 'Output gap', color: C.welfareLoss, kind: 'area' },
      ]}
      note={<p>{STEPS[step].text}</p>}
    >
      {({ play, runKey }) => (
        <div key={runKey} className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setStep(i)}
                className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
                  step === i
                    ? 'border-primary/60 bg-primary/20 text-primary'
                    : 'border-white/15 bg-white/5 text-muted-foreground hover:text-foreground'
                }`}
              >
                {i + 1}. {s.label}
              </button>
            ))}
          </div>

          <svg viewBox={`0 0 ${p.W} ${p.H}`} className="w-full min-w-[320px]">
            {/* output gap band */}
            <motion.rect
              x={p.x(E_SLUMP.q)}
              y={p.m.t}
              width={p.x(YF) - p.x(E_SLUMP.q)}
              height={p.ch}
              fill={C.welfareLoss}
              initial={{ opacity: 0 }}
              animate={play && !recovered ? { opacity: 0.14 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />

            <Axes p={p} id="cyclical-u" labelX="Real output (Y)" labelY="Price level (P)" />

            {/* LRAS */}
            <motion.line
              x1={p.x(YF)} y1={p.m.t + p.ch} x2={p.x(YF)} y2={p.m.t + 6}
              stroke={C.intervention} strokeWidth={2} strokeDasharray="6 4"
              {...revealPath(0)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(YF)} y={p.m.t - 6} textAnchor="middle" fill={C.intervention} fontSize={11}>
              LRAS (Yf)
            </text>

            {/* SRAS */}
            <motion.path
              d={curve(p, sras, 4, 92)}
              fill="none" stroke={C.supply} strokeWidth={2.6}
              {...revealPath(1)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(88)} y={p.y(sras(88)) - 8} fill={C.supply} fontSize={12} fontWeight={600}>
              SRAS
            </text>

            {/* AD1 */}
            <motion.path
              d={curve(p, ad(A_FULL), 22, 96)}
              fill="none" stroke={C.demand} strokeWidth={recovered ? 2.8 : 2}
              {...revealPath(2)}
              animate={play ? { pathLength: 1, opacity: recovered ? 1 : 0.75 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(94)} y={p.y(ad(A_FULL)(94)) - 6} fill={C.demand} fontSize={11}>
              AD₁
            </text>

            {/* AD2 */}
            <motion.path
              d={curve(p, ad(A_SLUMP), 4, 96)}
              fill="none" stroke={C.demandAlt} strokeWidth={recovered ? 1.8 : 2.8}
              strokeDasharray={recovered ? '5 4' : undefined}
              {...revealPath(3)}
              animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            />
            <text x={p.x(90)} y={p.y(ad(A_SLUMP)(90)) - 6} fill={C.demandAlt} fontSize={11}>
              AD₂
            </text>

            {/* recovery arrow */}
            {recovered && (
              <motion.line
                x1={p.x(E_SLUMP.q) + 8} y1={p.y(86)} x2={p.x(YF) - 8} y2={p.y(86)}
                stroke={C.welfareGain} strokeWidth={1.8}
                {...revealFade(4)} animate={play ? { opacity: 1 } : { opacity: 0 }}
              />
            )}

            {/* equilibria */}
            <motion.circle
              cx={p.x(E_SLUMP.q)} cy={p.y(E_SLUMP.p)} r={5.5} fill={C.marker}
              {...revealPoint(4)}
              animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            />
            <motion.circle
              cx={p.x(E_FULL.q)} cy={p.y(E_FULL.p)} r={5.5}
              fill={recovered ? C.welfareGain : C.muted}
              {...revealPoint(5)}
              animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            />

            {play && (
              <>
                <Guides p={p} qx={E_SLUMP.q} py={E_SLUMP.p} xLabel="Y₂" yLabel="P₂" />
                <Guides
                  p={p}
                  qx={E_FULL.q}
                  py={E_FULL.p}
                  color={recovered ? C.welfareGain : C.muted}
                  yLabel="P₁"
                />
              </>
            )}

            {!recovered && (
              <motion.text
                x={(p.x(E_SLUMP.q) + p.x(YF)) / 2}
                y={p.m.t + p.ch - 12}
                textAnchor="middle"
                fill={C.welfareLoss}
                fontSize={10}
                {...revealFade(6)}
                animate={play ? { opacity: 1 } : { opacity: 0 }}
              >
                Negative output gap
              </motion.text>
            )}
          </svg>
        </div>
      )}
    </DiagramFrame>
  );
};

export default CyclicalUnemploymentDiagram;
