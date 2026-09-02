import { useState } from 'react';
import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Price-taking firm: profit maximisation, normal profit, loss-minimisation and shutdown.
 * TC = 200 + 60Q − 4Q² + 0.15Q³
 *   MC  = 60 − 8Q + 0.45Q²        (minimum at Q = 8.89)
 *   AVC = 60 − 4Q + 0.15Q²        (minimum 33.33 at Q = 13.33)
 *   ATC = 200/Q + 60 − 4Q + 0.15Q² (minimum 46.90 at Q = 15.95 — where MC cuts ATC)
 */
const MC = (q: number) => 60 - 8 * q + 0.45 * q * q;
const AVC = (q: number) => 60 - 4 * q + 0.15 * q * q;
const ATC = (q: number) => 200 / q + AVC(q);

const QMAX = 25;
const CMAX = 110;
const p = plotBox(560, 420, { t: 30, r: 60, b: 62, l: 70 });
const qx = (q: number) => (q / QMAX) * 100;
const cy = (c: number) => (c / CMAX) * 100;

type Key = 'supernormal' | 'normal' | 'loss' | 'shutdown';

const SCENARIOS: Record<Key, {
  label: string; price: number; q: number; atc: number; avc: number; tone: string; verdict: string;
}> = {
  supernormal: {
    label: 'Supernormal profit', price: 65, q: 18.37, atc: 48.04, avc: 37.16, tone: C.welfareGain,
    verdict: 'P > ATC → supernormal (abnormal) profit of about (65 − 48) × 18.4 ≈ 312. In the long run this attracts entry.',
  },
  normal: {
    label: 'Normal profit', price: 46.9, q: 15.95, atc: 46.9, avc: 34.36, tone: C.marker,
    verdict: 'P = min ATC → the firm breaks even and earns only normal profit. This is the long-run equilibrium of perfect competition.',
  },
  loss: {
    label: 'Loss, keep producing', price: 40, q: 14.77, atc: 47.18, avc: 33.64, tone: C.intervention,
    verdict: 'AVC < P < ATC → a loss of about 106, but revenue still covers all variable cost and contributes to fixed cost. Producing beats closing in the short run.',
  },
  shutdown: {
    label: 'Shutdown point', price: 30, q: 12.4, atc: 49.59, avc: 33.46, tone: C.welfareLoss,
    verdict: 'P < min AVC (33.3) → every unit adds to the loss. The firm shuts down in the short run and loses only its fixed costs.',
  },
};

const ProfitMaxShutdownDiagram = () => {
  const [key, setKey] = useState<Key>('supernormal');
  const s = SCENARIOS[key];
  const profit = (s.price - s.atc) * s.q;

  return (
    <DiagramFrame
      title="Profit Maximisation, Loss Minimisation and the Shutdown Rule"
      eyebrow="Figure 2.4"
      legend={[
        { label: 'MC', color: C.supply },
        { label: 'ATC', color: C.demandAlt },
        { label: 'AVC', color: C.social },
        { label: 'P = AR = MR', color: C.marker, dashed: true },
        { label: 'Profit / loss area', color: s.tone, kind: 'area' },
      ]}
      note={
        <>
          <strong>Rule 1 (marginal):</strong> produce where MC = MR with MC rising. <strong>Rule 2 (average):</strong>
          {' '}compare P with ATC to size profit or loss, and with AVC to decide whether to stay open.
          The rising portion of MC above min AVC <em>is</em> the firm&apos;s short-run supply curve.
        </>
      }
    >
      {({ play, runKey }) => (
        <>
          <div className="mb-3 flex flex-wrap gap-2">
            {(Object.keys(SCENARIOS) as Key[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKey(k)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  key === k
                    ? 'border-primary bg-primary/20 text-primary'
                    : 'border-primary/20 text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {SCENARIOS[k].label}
              </button>
            ))}
          </div>

          <svg key={`${runKey}-${key}`} viewBox="0 0 560 420" className="h-auto w-full min-w-[320px]" role="img">
            <Axes p={p} id="pmax" labelX="Output (Q)" labelY="Costs and Revenue (£)" />

            {/* profit / loss rectangle */}
            <motion.rect
              x={p.x(0)}
              y={p.y(cy(Math.max(s.price, s.atc)))}
              width={p.x(qx(s.q)) - p.x(0)}
              height={Math.abs(p.y(cy(s.atc)) - p.y(cy(s.price)))}
              fill={s.tone}
              opacity={0.22}
              {...(play ? revealFade(3) : { initial: { opacity: 0 } })}
            />

            {/* curves */}
            <motion.path
              d={curve(p, (v) => cy(AVC((v / 100) * QMAX)), qx(3), 100)}
              fill="none" stroke={C.social} strokeWidth={2.2}
              {...(play ? revealPath(1) : { initial: { pathLength: 0 } })}
            />
            <motion.path
              d={curve(p, (v) => cy(ATC((v / 100) * QMAX)), qx(4.2), 100)}
              fill="none" stroke={C.demandAlt} strokeWidth={2.4}
              {...(play ? revealPath(1.5) : { initial: { pathLength: 0 } })}
            />
            <motion.path
              d={curve(p, (v) => cy(MC((v / 100) * QMAX)), qx(1), qx(22.5))}
              fill="none" stroke={C.supply} strokeWidth={2.6}
              {...(play ? revealPath(0) : { initial: { pathLength: 0 } })}
            />

            {/* price line */}
            <motion.line
              x1={p.x(0)} y1={p.y(cy(s.price))} x2={p.x(qx(24))} y2={p.y(cy(s.price))}
              stroke={C.marker} strokeWidth={2} strokeDasharray="7 5"
              {...(play ? revealPath(2) : { initial: { pathLength: 0 } })}
            />

            {/* equilibrium */}
            <motion.g {...(play ? revealPoint(3) : { initial: { opacity: 0 } })}>
              <line
                x1={p.x(qx(s.q))} y1={p.y(cy(s.price))} x2={p.x(qx(s.q))} y2={p.y(0)}
                stroke={C.marker} strokeWidth={1.2} strokeDasharray="4 4"
              />
              <circle cx={p.x(qx(s.q))} cy={p.y(cy(s.price))} r={5} fill={C.marker} />
              <circle cx={p.x(qx(s.q))} cy={p.y(cy(s.atc))} r={4} fill={C.demandAlt} />
              <text x={p.x(qx(s.q))} y={p.y(0) + 16} fill={C.marker} fontSize={11} textAnchor="middle">
                Q* = {s.q.toFixed(1)}
              </text>
            </motion.g>

            {/* min AVC marker */}
            <motion.g {...(play ? revealFade(4) : { initial: { opacity: 0 } })}>
              <circle cx={p.x(qx(13.33))} cy={p.y(cy(33.33))} r={3.5} fill={C.social} />
              <text x={p.x(qx(13.33)) - 6} y={p.y(cy(33.33)) + 20} fill={C.social} fontSize={9.5} textAnchor="end">
                min AVC = 33.3 (shutdown point)
              </text>
              <circle cx={p.x(qx(15.95))} cy={p.y(cy(46.9))} r={3.5} fill={C.demandAlt} />
              <text x={p.x(qx(16.6))} y={p.y(cy(46.9)) + 26} fill={C.demandAlt} fontSize={9.5}>
                min ATC = 46.9 (break-even)
              </text>
            </motion.g>

            {/* labels */}
            <motion.g {...(play ? revealFade(2) : { initial: { opacity: 0 } })} fontSize={12} fontWeight={600}>
              <text x={p.x(qx(22.6)) + 4} y={p.y(cy(MC(22.5)))} fill={C.supply}>MC</text>
              <text x={p.x(qx(24)) + 4} y={p.y(cy(ATC(24)))} fill={C.demandAlt}>ATC</text>
              <text x={p.x(qx(24)) + 4} y={p.y(cy(AVC(24))) + 12} fill={C.social}>AVC</text>
              <text x={p.x(0) - 8} y={p.y(cy(s.price)) + 4} fill={C.marker} fontSize={11} textAnchor="end">
                P = {s.price}
              </text>
            </motion.g>
          </svg>

          <p className="mt-3 rounded-lg border border-primary/15 bg-background/40 p-3 text-xs leading-relaxed text-silver">
            <strong style={{ color: s.tone }}>{s.label}:</strong> {s.verdict}{' '}
            <span className="font-mono text-muted-foreground">
              (Total {profit >= 0 ? 'profit' : 'loss'} ≈ {Math.abs(profit).toFixed(0)})
            </span>
          </p>
        </>
      )}
    </DiagramFrame>
  );
};

export default ProfitMaxShutdownDiagram;
