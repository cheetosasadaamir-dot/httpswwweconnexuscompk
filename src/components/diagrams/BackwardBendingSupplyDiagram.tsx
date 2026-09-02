import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';

/**
 * Individual worker's backward-bending supply curve of labour.
 * Hours supplied as a function of the wage: h(w) = 10 + 1.6w − 0.012w²
 * dh/dw = 0 at w = 66.7 (hours = 63.3) — the turning point where the income
 * effect starts to outweigh the substitution effect.
 */
const BackwardBendingSupplyDiagram = () => {
  const p = plotBox();
  const { x, y } = p;

  const hours = (w: number) => 10 + 1.6 * w - 0.012 * w * w;
  const wTurn = 1.6 / 0.024; // 66.67
  const hTurn = hours(wTurn); // 63.3

  const path = (from: number, to: number) => {
    let d = '';
    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const w = from + ((to - from) * i) / steps;
      d += `${i === 0 ? 'M' : 'L'} ${x(hours(w)).toFixed(2)} ${y(w).toFixed(2)} `;
    }
    return d.trim();
  };

  return (
    <DiagramFrame
      title="The Backward-Bending Supply Curve of Labour"
      eyebrow="Figure — Individual worker: substitution vs income effect"
      legend={[
        { label: 'Substitution effect dominates', color: C.social },
        { label: 'Income effect dominates', color: C.intervention },
        { label: 'Turning point', color: C.marker, kind: 'dot' },
      ]}
      note={
        <>
          A wage rise has two opposing effects on an individual's hours. The{' '}
          <strong>substitution effect</strong> raises the opportunity cost of an hour of leisure, so the
          worker substitutes work for leisure — hours rise. The <strong>income effect</strong> means the
          same target income can be earned in fewer hours, and because leisure is a{' '}
          <strong>normal good</strong> the worker "buys" more of it — hours fall. At low wages the
          substitution effect dominates and the curve slopes up; above W<sub>1</sub> the income effect
          dominates and the curve <strong>bends backwards</strong>. Evidence: highly paid consultants,
          surgeons and partners often cut hours as pay rises, whereas low-paid workers take on extra
          shifts. Note the exam trap — the <em>market</em> supply curve for an occupation still slopes
          upward over the relevant range because a higher wage attracts <em>new</em> entrants from other
          occupations and regions, which outweighs the reduced hours of existing workers.
        </>
      }
    >
      {({ play, runKey }) => (
        <svg
          key={runKey}
          viewBox={`0 0 ${p.W} ${p.H}`}
          className="mx-auto h-auto w-full min-w-[320px]"
          role="img"
          aria-label="Backward bending individual labour supply curve, rising while the substitution effect dominates then bending back when the income effect dominates"
        >
          <Axes p={p} id="bbend" labelX="Hours of work supplied per week" labelY="Wage rate (W)" />
          {play && (
            <>
              <motion.path d={path(0, wTurn)} fill="none" stroke={C.social} strokeWidth={2.6} {...revealPath(0, 1.1)} />
              <motion.path d={path(wTurn, 100)} fill="none" stroke={C.intervention} strokeWidth={2.6} {...revealPath(1, 1.1)} />

              <motion.g {...revealFade(2)}>
                <Guides p={p} qx={hTurn} py={wTurn} color={C.marker} xLabel="H₁" yLabel="W₁" />
              </motion.g>
              <motion.circle cx={x(hTurn)} cy={y(wTurn)} r={5} fill={C.marker} {...revealPoint(3)} />

              <motion.text x={x(38)} y={y(30)} fill={C.social} fontSize={10} {...revealFade(3)}>
                SE &gt; IE: hours rise
              </motion.text>
              <motion.text x={x(30)} y={y(88)} fill={C.intervention} fontSize={10} {...revealFade(4)}>
                IE &gt; SE: hours fall
              </motion.text>
              <motion.text x={x(hTurn) + 10} y={y(wTurn) - 10} fill={C.marker} fontSize={10} {...revealFade(4)}>
                S(L)
              </motion.text>
            </>
          )}
        </svg>
      )}
    </DiagramFrame>
  );
};

export default BackwardBendingSupplyDiagram;
