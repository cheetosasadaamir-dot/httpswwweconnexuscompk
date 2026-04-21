import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Rocket } from 'lucide-react';

/**
 * Component A — Projectile Motion
 * Adjust launch angle (°) and initial velocity (m/s); the parabolic trajectory
 * and apex height update live. Pure SVG + Framer Motion, no canvas dependency.
 */
const ProjectileMotion = () => {
  const [angle, setAngle] = useState(45);
  const [v0, setV0] = useState(25);

  const g = 9.81;
  const W = 600;
  const H = 280;
  const padX = 30;
  const padY = 24;

  const physics = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const vx = v0 * Math.cos(rad);
    const vy = v0 * Math.sin(rad);
    const tFlight = (2 * vy) / g;
    const range = vx * tFlight;
    const hMax = (vy * vy) / (2 * g);
    return { vx, vy, tFlight, range, hMax };
  }, [angle, v0]);

  // Build trajectory path scaled to the SVG viewBox
  const path = useMemo(() => {
    const points: Array<[number, number]> = [];
    const steps = 60;
    const maxRange = Math.max(physics.range, 1);
    const maxH = Math.max(physics.hMax, 1);
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * physics.tFlight;
      const x = physics.vx * t;
      const y = physics.vy * t - 0.5 * g * t * t;
      const px = padX + (x / maxRange) * (W - padX * 2);
      const py = H - padY - (y / maxH) * (H - padY * 2);
      points.push([px, py]);
    }
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  }, [physics]);

  const apex = useMemo(() => {
    const maxRange = Math.max(physics.range, 1);
    const maxH = Math.max(physics.hMax, 1);
    const apexX = physics.range / 2;
    return {
      x: padX + (apexX / maxRange) * (W - padX * 2),
      y: H - padY - (physics.hMax / maxH) * (H - padY * 2),
    };
  }, [physics]);

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-2">
        <Rocket className="w-4 h-4 text-primary" />
        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary font-mono">
          Interactive — Projectile Motion
        </h4>
      </header>

      <div className="rounded-lg overflow-hidden border border-primary/15 bg-background/60">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
          <defs>
            <linearGradient id="proj-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(214 100% 61%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(214 100% 75%)" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Ground */}
          <line x1={padX} y1={H - padY} x2={W - padX} y2={H - padY} stroke="hsl(214 100% 61% / 0.3)" strokeWidth={1} />
          {/* Y-axis */}
          <line x1={padX} y1={padY} x2={padX} y2={H - padY} stroke="hsl(214 100% 61% / 0.3)" strokeWidth={1} />

          {/* Trajectory */}
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#proj-grad)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Apex */}
          <circle cx={apex.x} cy={apex.y} r={5} fill="hsl(43 72% 53%)" />
          <text x={apex.x + 8} y={apex.y - 6} fill="hsl(43 72% 65%)" fontSize="11" fontFamily="monospace">
            h_max ≈ {physics.hMax.toFixed(1)} m
          </text>

          {/* Launch arrow */}
          <line
            x1={padX}
            y1={H - padY}
            x2={padX + 36 * Math.cos((angle * Math.PI) / 180)}
            y2={H - padY - 36 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(214 100% 75%)"
            strokeWidth={2}
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(214 100% 75%)" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Controls */}
      <div className="grid sm:grid-cols-2 gap-4">
        <ControlRow label="Launch angle" value={`${angle}°`}>
          <Slider value={[angle]} onValueChange={([v]) => setAngle(v)} min={5} max={85} step={1} />
        </ControlRow>
        <ControlRow label="Initial velocity" value={`${v0} m/s`}>
          <Slider value={[v0]} onValueChange={([v]) => setV0(v)} min={5} max={60} step={1} />
        </ControlRow>
      </div>

      {/* Readouts */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <Readout label="Range" value={`${physics.range.toFixed(1)} m`} />
        <Readout label="Max height" value={`${physics.hMax.toFixed(1)} m`} />
        <Readout label="Flight time" value={`${physics.tFlight.toFixed(2)} s`} />
      </div>
    </div>
  );
};

const ControlRow = ({ label, value, children }: { label: string; value: string; children: React.ReactNode }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{label}</span>
      <span className="text-xs text-primary font-mono font-semibold">{value}</span>
    </div>
    {children}
  </div>
);

const Readout = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-md border border-primary/15 bg-primary/5 px-2 py-2">
    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{label}</div>
    <div className="text-sm font-semibold text-foreground font-mono">{value}</div>
  </div>
);

export default ProjectileMotion;
