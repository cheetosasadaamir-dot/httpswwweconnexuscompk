import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Three stages of short-run production.
 * TP(L) = 6L² − 0.4L³  →  MP = 12L − 1.2L², AP = 6L − 0.4L²
 * MP max at L = 5 (MP = 30) | AP max at L = 7.5 where MP = AP = 22.5 | TP max at L = 10 (TP = 200)
 */
const TP = (l: number) => 6 * l * l - 0.4 * l ** 3;
const MP = (l: number) => 12 * l - 1.2 * l * l;
const AP = (l: number) => 6 * l - 0.4 * l * l;

const LMAX = 11;
const top = plotBox(540, 250, { t: 24, r: 54, b: 26, l: 66 });
const bot = plotBox(540, 250, { t: 18, r: 54, b: 56, l: 66 });

// value helpers: labour 0..11 -> 0..100 ; TP 0..210 -> 0..100 ; product 0..34 -> 0..100
const lx = (l: number) => (l / LMAX) * 100;
const tpv = (v: number) => (v / 210) * 100;
const pv = (v: number) => ((v + 4) / 38) * 100;

const TotalProductDiagram = () => (
  <DiagramFrame
    title="Total, Average and Marginal Product — The Three Stages of Production"
    eyebrow="Figure 2.1"
    legend={[
      { label: 'Total Product (TP)', color: C.demand },
      { label: 'Marginal Product (MP)', color: C.supply },
      { label: 'Average Product (AP)', color: C.social },
      { label: 'Turning points', color: C.marker, kind: 'dot' },
    ]}
    note={
      <>
        MP peaks first (L = 5) — the end of <strong>increasing marginal returns</strong>. AP peaks where
        MP cuts AP from above (L = 7.5): whenever MP &gt; AP the average is pulled up, whenever MP &lt; AP it is
        dragged down. TP peaks exactly where MP = 0 (L = 10); beyond that an extra worker <em>reduces</em> output.
        Because MC = W ÷ MP, the MC curve is the mirror image of MP: MP maximum ↔ MC minimum.
      </>
    }
  >
    {({ play, runKey }) => (
      <svg key={runKey} viewBox="0 0 540 500" className="h-auto w-full min-w-[320px]" role="img">
        {/* ---------- Upper panel: TP ---------- */}
        <g>
          <Axes p={top} id="tp-top" labelX="" labelY="Total Product" />
          <motion.path
            d={curve(top, (v) => tpv(TP((v / 100) * LMAX)), 0, 100)}
            fill="none"
            stroke={C.demand}
            strokeWidth={2.6}
            {...(play ? revealPath(0) : { initial: { pathLength: 0 } })}
          />
          <motion.g {...(play ? revealPoint(2) : { initial: { opacity: 0 } })}>
            <line
              x1={top.x(lx(10))} y1={top.y(tpv(200))} x2={top.x(lx(10))} y2={top.y(0)}
              stroke={C.marker} strokeWidth={1.2} strokeDasharray="4 4"
            />
            <circle cx={top.x(lx(10))} cy={top.y(tpv(200))} r={4.5} fill={C.marker} />
            <text x={top.x(lx(10)) + 6} y={top.y(tpv(200)) - 6} fill={C.marker} fontSize={10}>
              TP max (MP = 0)
            </text>
            <line
              x1={top.x(lx(5))} y1={top.y(tpv(TP(5)))} x2={top.x(lx(5))} y2={top.y(0)}
              stroke={C.muted} strokeWidth={1} strokeDasharray="3 4"
            />
            <text x={top.x(lx(5)) - 4} y={top.y(tpv(TP(5))) - 8} fill={C.muted} fontSize={10} textAnchor="end">
              point of inflexion
            </text>
          </motion.g>
          <motion.text
            x={top.x(lx(9.6))} y={top.y(tpv(TP(9.6))) - 10} fill={C.demand} fontSize={12} fontWeight={600}
            {...(play ? revealFade(1) : { initial: { opacity: 0 } })}
          >
            TP
          </motion.text>
        </g>

        {/* ---------- Lower panel: AP & MP ---------- */}
        <g transform="translate(0, 250)">
          <Axes p={bot} id="tp-bot" labelX="Units of Labour (L)" labelY="AP / MP" />
          {/* zero line for MP */}
          <line
            x1={bot.x(0)} y1={bot.y(pv(0))} x2={bot.x(100)} y2={bot.y(pv(0))}
            stroke={C.muted} strokeWidth={1} strokeDasharray="2 5"
          />
          <motion.path
            d={curve(bot, (v) => pv(AP((v / 100) * LMAX)), 1, 100)}
            fill="none"
            stroke={C.social}
            strokeWidth={2.4}
            {...(play ? revealPath(1) : { initial: { pathLength: 0 } })}
          />
          <motion.path
            d={curve(bot, (v) => pv(MP((v / 100) * LMAX)), 0, 100)}
            fill="none"
            stroke={C.supply}
            strokeWidth={2.4}
            {...(play ? revealPath(2) : { initial: { pathLength: 0 } })}
          />
          <motion.g {...(play ? revealPoint(3) : { initial: { opacity: 0 } })}>
            <circle cx={bot.x(lx(5))} cy={bot.y(pv(30))} r={4} fill={C.marker} />
            <text x={bot.x(lx(5))} y={bot.y(pv(30)) - 8} fill={C.marker} fontSize={10} textAnchor="middle">
              MP max
            </text>
            <circle cx={bot.x(lx(7.5))} cy={bot.y(pv(22.5))} r={4} fill={C.marker} />
            <text x={bot.x(lx(7.5)) + 6} y={bot.y(pv(22.5)) - 8} fill={C.marker} fontSize={10}>
              MP = AP (AP max)
            </text>
            <circle cx={bot.x(lx(10))} cy={bot.y(pv(0))} r={4} fill={C.marker} />
            <text x={bot.x(lx(10)) + 6} y={bot.y(pv(0)) - 6} fill={C.marker} fontSize={10}>
              MP = 0
            </text>
          </motion.g>
          <motion.text
            x={bot.x(lx(9.4))} y={bot.y(pv(AP(9.4))) - 8} fill={C.social} fontSize={12} fontWeight={600}
            {...(play ? revealFade(2) : { initial: { opacity: 0 } })}
          >
            AP
          </motion.text>
          <motion.text
            x={bot.x(lx(3.2))} y={bot.y(pv(MP(3.2))) - 10} fill={C.supply} fontSize={12} fontWeight={600}
            {...(play ? revealFade(3) : { initial: { opacity: 0 } })}
          >
            MP
          </motion.text>

          {/* Stage labels */}
          <motion.g {...(play ? revealFade(4) : { initial: { opacity: 0 } })}>
            <text x={bot.x(lx(2.5))} y={bot.m.t + bot.ch + 26} fill={C.muted} fontSize={9.5} textAnchor="middle">
              Stage 1: increasing returns
            </text>
            <text x={bot.x(lx(8.7))} y={bot.m.t + bot.ch + 26} fill={C.muted} fontSize={9.5} textAnchor="middle">
              Stage 2: diminishing returns
            </text>
          </motion.g>
        </g>
      </svg>
    )}
  </DiagramFrame>
);

export default TotalProductDiagram;
