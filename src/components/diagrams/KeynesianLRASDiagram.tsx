import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

interface KeynesianLRASDiagramProps {
  title?: string;
}

/**
 * Keynesian (inverse-L) aggregate supply — three phases.
 *
 * AS : P = 25                       for Y ≤ 35        (deep spare capacity, perfectly elastic)
 *      P = 25 + 1.5(Y − 35)         for 35 < Y ≤ 70   (bottlenecks, upward sloping)
 *      vertical at Yf = 70                              (full capacity, perfectly inelastic)
 *
 * AD₁ : P = 50 − Y      → P = 25 at Y = 25   (phase 1: output rises, prices flat)
 * AD₂ : P = 110 − Y     → 25 + 1.5(Y − 35) = 110 − Y ⇒ Y = 55, P = 55 (phase 2: both rise)
 * AD₃ : P = 160 − Y     → Y = Yf = 70, P = 90 (phase 3: pure inflation)
 */
const KeynesianLRASDiagram = ({ title }: KeynesianLRASDiagramProps) => {
  const p = plotBox();
  const { x, y } = p;

  const Yf = 70;
  const AS = (Y: number) => (Y <= 35 ? 25 : 25 + 1.5 * (Y - 35));
  const AD1 = (Y: number) => 50 - Y;
  const AD2 = (Y: number) => 110 - Y;
  const AD3 = (Y: number) => 160 - Y;

  return (
    <DiagramFrame
      title={title ?? 'Keynesian Aggregate Supply: Three Phases'}
      eyebrow="Figure — the inverse-L AS curve"
      legend={[
        { label: 'Keynesian AS', color: C.supply },
        { label: 'AD₁ / AD₂ / AD₃', color: C.demand },
        { label: 'Full capacity Yf', color: C.social, dashed: true },
        { label: 'Equilibria', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          Keynes rejected a single vertical AS. <strong>Phase 1 (Y ≤ 35, perfectly elastic):</strong> deep
          recession with mass unemployment and idle capital — firms meet extra demand from spare capacity at
          constant unit costs, so AD₁ → higher AD raises <em>real output only</em>, with no inflation. This is
          the case for fiscal stimulus in a slump. <strong>Phase 2 (35 &lt; Y &lt; 70, upward sloping):</strong>
          as recovery proceeds, bottlenecks appear — skilled labour becomes scarce, less efficient plant is
          brought back on line, so unit costs and prices rise alongside output (E₂: Y = 55, P = 55).
          <strong> Phase 3 (Y = Yf = 70, vertical):</strong> at full capacity extra demand is purely
          inflationary (E₃: P = 90 with output stuck at 70). The policy conclusion is that the
          <strong> effect of a demand stimulus depends entirely on where the economy currently sits</strong> —
          the same £10bn is costless in phase 1 and purely inflationary in phase 3.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Keynesian inverse L shaped aggregate supply curve with three aggregate demand curves">
          <Axes p={p} id="keylras" labelX="Real national output (Y)" labelY="General price level (P)" />
          {play && (
            <>
              {/* phase bands */}
              <motion.rect x={p.m.l} y={p.m.t} width={x(35) - p.m.l} height={p.ch} fill={C.welfareGain} opacity={0.07} {...revealFade(0)} />
              <motion.rect x={x(35)} y={p.m.t} width={x(Yf) - x(35)} height={p.ch} fill={C.marker} opacity={0.07} {...revealFade(0)} />
              <motion.rect x={x(Yf)} y={p.m.t} width={x(100) - x(Yf)} height={p.ch} fill={C.welfareLoss} opacity={0.07} {...revealFade(0)} />

              {/* AS: three phases */}
              <motion.path d={`M ${x(5)} ${y(25)} L ${x(35)} ${y(25)}`} fill="none" stroke={C.supply} strokeWidth={3} {...revealPath(0)} />
              <motion.path d={curve(p, AS, 35, Yf)} fill="none" stroke={C.supply} strokeWidth={3} {...revealPath(1)} />
              <motion.line x1={x(Yf)} y1={y(AS(Yf))} x2={x(Yf)} y2={y(98)} stroke={C.supply} strokeWidth={3} {...revealPath(2)} />
              <motion.text x={x(8)} y={y(25) - 8} fill={C.supply} fontSize={12} fontWeight={700} {...revealFade(3)}>AS</motion.text>

              <motion.line x1={x(Yf)} y1={y(0)} x2={x(Yf)} y2={y(98)} stroke={C.social} strokeDasharray="5 4" strokeWidth={1.4} {...revealFade(3)} />
              <motion.text x={x(Yf) + 6} y={y(96)} fill={C.social} fontSize={11} fontWeight={700} {...revealFade(3)}>Yf</motion.text>

              {/* AD curves */}
              <motion.path d={curve(p, AD1, 5, 45)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(3)} />
              <motion.text x={x(6)} y={y(AD1(6)) - 6} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(4)}>AD₁</motion.text>

              <motion.path d={curve(p, AD2, 20, 95)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(4)} />
              <motion.text x={x(22)} y={y(AD2(22)) - 6} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(5)}>AD₂</motion.text>

              <motion.path d={curve(p, AD3, 62, 100)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(5)} />
              <motion.text x={x(64)} y={y(AD3(64)) - 6} fill={C.demand} fontSize={11} fontWeight={700} {...revealFade(6)}>AD₃</motion.text>

              {/* equilibria */}
              <motion.circle cx={x(25)} cy={y(25)} r={5} fill={C.marker} {...revealPoint(4)} />
              <motion.text x={x(25) - 6} y={y(25) + 18} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(5)}>E₁</motion.text>

              <motion.g {...revealFade(6)}>
                <Guides p={p} qx={55} py={55} color={C.marker} xLabel="55" yLabel="55" />
              </motion.g>
              <motion.circle cx={x(55)} cy={y(55)} r={5} fill={C.marker} {...revealPoint(6)} />
              <motion.text x={x(55) + 8} y={y(55) + 4} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(7)}>E₂</motion.text>

              <motion.g {...revealFade(7)}>
                <Guides p={p} qx={Yf} py={90} color={C.intervention} yLabel="90" />
              </motion.g>
              <motion.circle cx={x(Yf)} cy={y(90)} r={5} fill={C.intervention} {...revealPoint(7)} />
              <motion.text x={x(Yf) - 20} y={y(90) + 4} fill={C.axis} fontSize={11} fontWeight={700} {...revealFade(8)}>E₃</motion.text>

              {/* phase captions */}
              <motion.text x={x(18)} y={p.m.t + 14} fill={C.welfareGain} fontSize={9.5} textAnchor="middle" {...revealFade(8)}>
                1 · spare capacity
              </motion.text>
              <motion.text x={x(52)} y={p.m.t + 14} fill={C.marker} fontSize={9.5} textAnchor="middle" {...revealFade(8)}>
                2 · bottlenecks
              </motion.text>
              <motion.text x={x(85)} y={p.m.t + 14} fill={C.welfareLoss} fontSize={9.5} textAnchor="middle" {...revealFade(8)}>
                3 · full capacity
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default KeynesianLRASDiagram;
