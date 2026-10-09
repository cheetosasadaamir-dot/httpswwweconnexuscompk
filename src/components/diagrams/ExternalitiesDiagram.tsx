import { useId } from 'react';
import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { Axes, Guides, curve } from './DiagramAxes';
import { DIAGRAM_COLORS as C, plotBox, revealFade, revealPath, revealPoint } from './diagramStyle';
import { externalityModel, type ExternalityType } from './economicModels';

interface ExternalitiesDiagramProps { title?: string; type?: ExternalityType }

const ExternalitiesDiagram = ({ title, type = 'negative-production' }: ExternalitiesDiagramProps) => {
  const id = useId().replace(/:/g, '');
  const p = plotBox(600, 420, { t: 34, r: 72, b: 72, l: 80 });
  const m = externalityModel(type);
  const production = type.endsWith('production');
  const negative = type.startsWith('negative');
  const curves = [
    { name: production ? 'MPC = S' : 'MPC = MSC = S', f: m.mpc, color: C.supply, dashed: false },
    { name: production ? 'MPB = MSB = D' : 'MPB = D', f: m.mpb, color: C.demand, dashed: false },
    { name: production ? 'MSC' : 'MSB', f: production ? m.msc : m.msb, color: C.social, dashed: true },
  ];
  return (
    <DiagramFrame title={title ?? `${negative ? 'Negative' : 'Positive'} ${production ? 'Production' : 'Consumption'} Externality`}
      eyebrow="Market equilibrium versus social optimum"
      legend={[...curves.map(c => ({ label: c.name, color: c.color, dashed: c.dashed })), { label: 'Deadweight welfare loss', color: C.welfareLoss, kind: 'area' }]}
      note={<>
        The market chooses Qₘ = {m.qMarket} where MPB = MPC. Social efficiency requires MSB = MSC at Q* = {m.qOptimal.toFixed(1)}.
        {' '}{production ? (negative ? 'External production costs put MSC above MPC.' : 'External production benefits put MSC below MPC.') : (negative ? 'External consumption costs put MSB below MPB.' : 'External consumption benefits put MSB above MPB.')}
        {' '}{negative ? 'The market overproduces' : 'The market underproduces'} by {Math.abs(m.qMarket - m.qOptimal).toFixed(1)} units.
        The shaded triangle measures forgone net social benefit between Qₘ and Q*, bounded by MSB and MSC, not the private curves.
        {' '}P* is the common social marginal value at Q*, not necessarily the price consumers pay after a tax or subsidy.
      </>}>
      {({ play, runKey }) => (
        <svg key={runKey} viewBox={`0 0 ${p.W} ${p.H}`} className="w-full h-auto" role="img" aria-label={`${type} externality with market and social equilibria`}>
          <Axes p={p} id={`ext-${id}`} labelY="Marginal cost / benefit" />
          {play && <>
            <motion.path d={`M ${p.x(m.qOptimal)} ${p.y(m.pOptimal)} L ${p.x(m.qMarket)} ${p.y(m.msb(m.qMarket))} L ${p.x(m.qMarket)} ${p.y(m.msc(m.qMarket))} Z`}
              fill={C.welfareLoss} fillOpacity={0.2} {...revealFade(3)} />
            {curves.map((c, i) => <g key={c.name}>
              <motion.path d={curve(p, c.f, 0, 100)} fill="none" stroke={c.color} strokeWidth={2.6} strokeDasharray={c.dashed ? '7 4' : undefined} {...revealPath(i)} />
              <motion.text x={p.x(78)} y={p.y(c.f(78)) + (c.dashed ? -10 : 15)} fill={c.color} fontSize={11} {...revealFade(i + 1)}>{c.name}</motion.text>
            </g>)}
            <motion.g {...revealFade(3)}><Guides p={p} qx={m.qMarket} py={m.pMarket} xLabel="Qₘ = 50" yLabel="Pₘ = 55" /></motion.g>
            <motion.g {...revealFade(4)}><Guides p={p} qx={m.qOptimal} py={m.pOptimal} color={C.social} xLabel={`Q* = ${m.qOptimal.toFixed(1)}`} yLabel={`P* = ${m.pOptimal.toFixed(1)}`} /></motion.g>
            <motion.circle cx={p.x(m.qMarket)} cy={p.y(m.pMarket)} r={5} fill={C.marker} {...revealPoint(3)} />
            <motion.circle cx={p.x(m.qOptimal)} cy={p.y(m.pOptimal)} r={5} fill={C.social} {...revealPoint(4)} />
            <motion.text x={p.x(m.qMarket) + 8} y={p.y(m.pMarket) + 14} fill={C.marker} fontSize={11} {...revealFade(4)}>Eₘ</motion.text>
            <motion.text x={p.x(m.qOptimal) - 20} y={p.y(m.pOptimal) - 10} fill={C.social} fontSize={11} {...revealFade(5)}>E*</motion.text>
            <motion.text x={p.x((m.qMarket + m.qOptimal) / 2)} y={p.y(12)} textAnchor="middle" fill={C.welfareLoss} fontSize={11} {...revealFade(5)}>{negative ? 'Overproduction' : 'Underproduction'}</motion.text>
          </>}
        </svg>
      )}
    </DiagramFrame>
  );
};
export default ExternalitiesDiagram;
