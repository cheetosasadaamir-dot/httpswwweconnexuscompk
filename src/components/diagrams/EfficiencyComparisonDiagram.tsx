import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Productive versus allocative efficiency on one set of curves.
 *
 * TC = 300 + 20Q + 0.3Q² → MC = 20 + 0.6Q, ATC = 300/Q + 20 + 0.3Q
 *   productive efficiency: min ATC at Q = √(300/0.3) = 31.6, ATC = MC = 39.0
 * AR = 100 − 1.2Q, MR = 100 − 2.4Q
 *   allocative efficiency: P = MC → Q = 44.4, P = 46.7
 *   monopoly outcome     : MC = MR → Q = 26.7, P = 68
 */
const EfficiencyComparisonDiagram = () => {
  const p = plotBox();
  const { x, y } = p;
  const AR = (q: number) => 100 - 1.2 * q;
  const MR = (q: number) => 100 - 2.4 * q;
  const MC = (q: number) => 20 + 0.6 * q;
  const ATC = (q: number) => 300 / q + 20 + 0.3 * q;
  const seg = (f: (q: number) => number, a: number, b: number) =>
    `M ${x(a)} ${y(f(a))} L ${x(b)} ${y(f(b))}`;

  return (
    <DiagramFrame
      title="Productive and Allocative Efficiency Compared"
      eyebrow="Figure — three different outputs, three different efficiency claims"
      legend={[
        { label: 'AR = D', color: C.demand },
        { label: 'MR', color: C.supply },
        { label: 'MC', color: C.social },
        { label: 'ATC', color: C.intervention },
        { label: 'Productive efficiency (min ATC)', color: C.welfareGain, kind: 'dot' },
        { label: 'Allocative efficiency (P = MC)', color: C.demandAlt, kind: 'dot' },
        { label: 'Profit-maximising monopoly (MC = MR)', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          The two efficiency conditions are distinct and are only satisfied together by accident — or by
          long-run perfect competition. <strong>Productive efficiency</strong> occurs at the minimum of ATC
          (Q = 31.6, cost 39): output is produced at the lowest attainable average cost, so no resources are
          wasted and the economy sits <em>on</em> its PPC. <strong>Allocative efficiency</strong> occurs where
          <strong> P = MC</strong> (Q = 44.4, price 46.7): the value consumers place on the last unit exactly
          equals its opportunity cost, so community surplus is maximised and the economy sits at the
          <em> right point</em> on its PPC. A profit-maximising monopolist chooses neither, producing only 26.7
          where MC = MR: it is productively inefficient (above min ATC) and allocatively inefficient
          (P = 68 &gt; MC = 36), and the gap generates deadweight loss. Two further concepts complete the
          picture: <strong>X-efficiency</strong> asks whether the ATC curve is as low as it could be at all, and
          <strong> dynamic efficiency</strong> asks whether innovation shifts those cost curves down over time —
          which is the Schumpeterian defence of supernormal profit. <strong>Pareto efficiency</strong> is the
          general statement: an allocation from which no one can be made better off without making someone
          worse off.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="mx-auto h-auto w-full min-w-[320px]" role="img"
          aria-label="Diagram marking productive efficiency at minimum average total cost, allocative efficiency where price equals marginal cost, and the monopoly output">
          <Axes p={p} id="effcomp" labelX="Output (Q)" labelY="Price, Costs, Revenue" />
          {play && (
            <>
              <motion.path d={seg(AR, 0, 83)} fill="none" stroke={C.demand} strokeWidth={2.4} {...revealPath(0)} />
              <motion.text x={x(83) + 4} y={y(AR(83))} fill={C.demand} fontSize={11} {...revealFade(1)}>AR = D</motion.text>
              <motion.path d={seg(MR, 0, 41.7)} fill="none" stroke={C.supply} strokeWidth={2.2} {...revealPath(1)} />
              <motion.text x={x(41.7) + 4} y={y(0) - 4} fill={C.supply} fontSize={11} {...revealFade(2)}>MR</motion.text>
              <motion.path d={curve(p, MC, 2, 80)} fill="none" stroke={C.social} strokeWidth={2.4} {...revealPath(2)} />
              <motion.text x={x(80) + 4} y={y(MC(80))} fill={C.social} fontSize={11} {...revealFade(3)}>MC</motion.text>
              <motion.path d={curve(p, ATC, 6, 80, 140)} fill="none" stroke={C.intervention} strokeWidth={2.4} {...revealPath(3)} />
              <motion.text x={x(80) + 4} y={y(ATC(80)) + 13} fill={C.intervention} fontSize={11} {...revealFade(4)}>ATC</motion.text>

              <motion.g {...revealFade(4)}>
                <Guides p={p} qx={26.7} py={68} color={C.marker} xLabel="26.7" yLabel="68" />
              </motion.g>
              <motion.circle cx={x(26.7)} cy={y(68)} r={5} fill={C.marker} {...revealPoint(5)} />
              <motion.text x={x(27.5)} y={y(76)} fill={C.marker} fontSize={10} {...revealFade(5)}>monopoly (MC = MR)</motion.text>

              <motion.circle cx={x(31.6)} cy={y(39)} r={5} fill={C.welfareGain} {...revealPoint(6)} />
              <motion.text x={x(6)} y={y(30)} fill={C.welfareGain} fontSize={10} {...revealFade(6)}>productive: min ATC (Q = 31.6)</motion.text>

              <motion.g {...revealFade(7)}>
                <Guides p={p} qx={44.4} py={46.7} color={C.demandAlt} xLabel="44.4" yLabel="46.7" />
              </motion.g>
              <motion.circle cx={x(44.4)} cy={y(46.7)} r={5} fill={C.demandAlt} {...revealPoint(7)} />
              <motion.text x={x(46)} y={y(54)} fill={C.demandAlt} fontSize={10} {...revealFade(8)}>allocative: P = MC</motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default EfficiencyComparisonDiagram;
