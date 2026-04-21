import { useMemo, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Waves } from 'lucide-react';

/**
 * Component C — Wave Superposition
 * Two sine waves with adjustable phase difference. The resultant wave is drawn
 * live so students see constructive (Δφ ≈ 0) vs destructive (Δφ ≈ π) interference.
 */
const WaveSuperposition = () => {
  const [phaseDeg, setPhaseDeg] = useState(0);

  const W = 600;
  const H = 240;
  const amp = 50;
  const freq = 2; // cycles across the panel
  const midY = H / 2;

  const { wave1, wave2, sum } = useMemo(() => {
    const phase = (phaseDeg * Math.PI) / 180;
    const points = (offset: number, amplitude = amp) => {
      const pts: string[] = [];
      for (let x = 0; x <= W; x += 4) {
        const t = (x / W) * freq * 2 * Math.PI;
        const y = amplitude * Math.sin(t + offset);
        pts.push(`${pts.length === 0 ? 'M' : 'L'} ${x} ${midY - y}`);
      }
      return pts.join(' ');
    };
    const sumPath = (() => {
      const pts: string[] = [];
      for (let x = 0; x <= W; x += 4) {
        const t = (x / W) * freq * 2 * Math.PI;
        const y = amp * Math.sin(t) + amp * Math.sin(t + phase);
        pts.push(`${pts.length === 0 ? 'M' : 'L'} ${x} ${midY - y}`);
      }
      return pts.join(' ');
    })();
    return { wave1: points(0), wave2: points(phase), sum: sumPath };
  }, [phaseDeg]);

  // Resultant amplitude: A_R = 2A cos(Δφ/2)
  const aR = useMemo(() => Math.abs(2 * amp * Math.cos((phaseDeg * Math.PI) / 360)), [phaseDeg]);
  const interference =
    phaseDeg === 0 || phaseDeg === 360
      ? 'Fully constructive'
      : phaseDeg === 180
      ? 'Fully destructive'
      : phaseDeg < 90 || phaseDeg > 270
      ? 'Mostly constructive'
      : 'Mostly destructive';

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-2">
        <Waves className="w-4 h-4 text-primary" />
        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary font-mono">
          Interactive — Wave Superposition
        </h4>
      </header>

      <div className="rounded-lg overflow-hidden border border-primary/15 bg-background/60">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
          <line x1={0} y1={midY} x2={W} y2={midY} stroke="hsl(214 100% 61% / 0.2)" strokeWidth={1} strokeDasharray="4 4" />
          <path d={wave1} fill="none" stroke="hsl(214 100% 65%)" strokeWidth={1.8} opacity={0.7} />
          <path d={wave2} fill="none" stroke="hsl(43 72% 60%)" strokeWidth={1.8} opacity={0.7} />
          <path d={sum} fill="none" stroke="hsl(140 70% 60%)" strokeWidth={2.6} />

          {/* Legend */}
          <g transform="translate(12,12)" fontFamily="monospace" fontSize="10">
            <LegendDot color="hsl(214 100% 65%)" label="Wave 1 (sin θ)" y={0} />
            <LegendDot color="hsl(43 72% 60%)" label="Wave 2 (sin θ + Δφ)" y={16} />
            <LegendDot color="hsl(140 70% 60%)" label="Resultant (sum)" y={32} />
          </g>
        </svg>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Phase difference Δφ</span>
          <span className="text-xs text-primary font-mono font-semibold">{phaseDeg}° ({(phaseDeg / 180).toFixed(2)}π rad)</span>
        </div>
        <Slider value={[phaseDeg]} onValueChange={([v]) => setPhaseDeg(v)} min={0} max={360} step={1} />
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <Readout label="Resultant amplitude" value={`${aR.toFixed(1)} px`} />
        <Readout label="Interference type" value={interference} />
      </div>
    </div>
  );
};

const LegendDot = ({ color, label, y }: { color: string; label: string; y: number }) => (
  <g transform={`translate(0,${y})`}>
    <circle cx={5} cy={5} r={4} fill={color} />
    <text x={14} y={9} fill="hsl(0 0% 80%)">{label}</text>
  </g>
);

const Readout = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-md border border-primary/15 bg-primary/5 px-2 py-2">
    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{label}</div>
    <div className="text-sm font-semibold text-foreground font-mono">{value}</div>
  </div>
);

export default WaveSuperposition;
