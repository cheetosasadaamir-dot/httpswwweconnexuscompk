import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Third-degree price discrimination across two separated sub-markets.
 *
 * Constant MC = 20 in both markets (same firm, same product).
 *
 * Market A (inelastic — business travellers) : AR = 100 − 1.6Q, MR = 100 − 3.2Q
 *      MR = MC → 100 − 3.2Q = 20 → Q = 25, P = 100 − 40 = 60
 * Market B (elastic — leisure travellers)    : AR = 60 − 0.6Q,  MR = 60 − 1.2Q
 *      MR = MC → 60 − 1.2Q = 20 → Q = 33.3, P = 60 − 20 = 40
 *
 * Higher price in the market with the lower price elasticity, exactly as
 * the inverse-elasticity rule predicts.
 */
const PriceDiscriminationDiagram = () => {
  const p = plotBox();
  const { x, y } = p;
  const MC = 20;
  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  const Panel = ({
    id, label, ar, mr, arTo, mrTo, qe, pe, tint,
  }: {
    id: string; label: string; ar: (q: number) => number; mr: (q: number) => number;
    arTo: number; mrTo: number; qe: number; pe: number; tint: string;
  }) => (
    <div className="flex-1">
      <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <svg viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[300px]" role="img" aria-label={label}>
        <Axes p={p} id={id} labelX="Quantity (Q)" labelY="Price, Costs, Revenue" />
        <motion.rect x={x(0)} y={y(pe)} width={x(qe) - x(0)} height={y(MC) - y(pe)}
          fill={tint} opacity={0.16} {...revealFade(4)} />
        <motion.path d={seg(ar, 0, arTo)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
        <motion.text x={x(arTo) + 4} y={y(ar(arTo))} fill={C.demand} fontSize={11} {...revealFade(1)}>AR</motion.text>
        <motion.path d={seg(mr, 0, mrTo)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(1)} />
        <motion.text x={x(mrTo) + 4} y={y(mr(mrTo)) - 4} fill={C.supply} fontSize={11} {...revealFade(2)}>MR</motion.text>
        <motion.path d={`M ${x(0)} ${y(MC)} L ${x(95)} ${y(MC)}`} fill="none" stroke={C.social}
          strokeWidth={2.4} {...revealPath(2)} />
        <motion.text x={x(95) + 4} y={y(MC) + 4} fill={C.social} fontSize={11} {...revealFade(3)}>MC = AC</motion.text>
        <motion.g {...revealFade(4)}>
          <Guides p={p} qx={qe} py={pe} color={C.marker} xLabel={`Q = ${qe.toFixed(1)}`} yLabel={`P = ${pe}`} />
        </motion.g>
        <motion.circle cx={x(qe)} cy={y(pe)} r={5} fill={C.marker} {...revealPoint(5)} />
        <motion.circle cx={x(qe)} cy={y(MC)} r={4} fill={C.social} {...revealPoint(5)} />
        <motion.text x={x(qe) + 8} y={y(MC) - 8} fill={C.social} fontSize={10} {...revealFade(6)}>MR = MC</motion.text>
      </svg>
    </div>
  );

  return (
    <DiagramFrame
      title="Third-Degree Price Discrimination: Same Cost, Two Prices"
      eyebrow="Figure — charge more where demand is less elastic"
      legend={[
        { label: 'AR in each sub-market', color: C.demand },
        { label: 'MR in each sub-market', color: C.supply },
        { label: 'MC (identical in both markets)', color: C.social },
        { label: 'Producer surplus captured', color: C.revenue, kind: 'area' },
      ]}
      note={
        <>
          Three conditions must hold: the firm needs <strong>price-setting power</strong>, it must be able to
          <strong> separate consumers</strong> by their price elasticity of demand, and it must prevent
          <strong> resale (seepage)</strong> between the sub-markets. The firm then applies MR = MC
          <em> separately in each market</em>. In the inelastic market (business travellers, peak rail, term-time
          holidays) it sells 25 units at 60; in the elastic market (leisure travellers, students, advance
          bookings) it sells 33 units at 40, even though marginal cost is 20 in both. The rule generalises as the
          <strong> inverse-elasticity rule</strong>: the mark-up over MC is larger where PED is lower.
          Evaluation is genuinely two-sided. Consumer surplus is transferred to the producer and some
          consumers pay above the competitive price, but total output (58) exceeds what a single-price
          monopolist would sell, low-income elastic groups gain access they would otherwise be priced out of,
          and the extra profit can cross-subsidise loss-making routes or fund investment and dynamic
          efficiency.
        </>
      }
    >
      {({ play, runKey }) => (
        <div key={runKey} className="flex flex-col gap-6 lg:flex-row">
          {play && (
            <>
              <Panel id="pd-a" label="Market A — inelastic demand" ar={(q) => 100 - 1.6 * q} mr={(q) => 100 - 3.2 * q}
                arTo={60} mrTo={30} qe={25} pe={60} tint={C.revenue} />
              <Panel id="pd-b" label="Market B — elastic demand" ar={(q) => 60 - 0.6 * q} mr={(q) => 60 - 1.2 * q}
                arTo={95} mrTo={48} qe={33.3} pe={40} tint={C.revenue} />
            </>
          )}
        </div>
      )}
    </DiagramFrame>
  );
};

export default PriceDiscriminationDiagram;
