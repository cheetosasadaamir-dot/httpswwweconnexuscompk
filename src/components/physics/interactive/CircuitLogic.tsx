import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Power, Zap } from 'lucide-react';

/**
 * Component B — Circuit Logic
 * Click the switch to close the circuit. Animated electrons flow around the loop;
 * Ammeter (I = V/R) and Voltmeter readings update live as the user changes V or R.
 */
const CircuitLogic = () => {
  const [closed, setClosed] = useState(false);
  const [V, setV] = useState(9);
  const [R, setR] = useState(100);

  const I = closed ? V / R : 0; // amps
  const Vacross = closed ? V : 0;

  // SVG electron animation
  const electronCount = 6;

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-primary" />
        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-primary font-mono">
          Interactive — Series Circuit
        </h4>
      </header>

      <div className="rounded-lg overflow-hidden border border-primary/15 bg-background/60 p-3">
        <svg viewBox="0 0 600 280" className="w-full h-auto block">
          {/* Wire path (rectangular loop) */}
          <path
            id="wire"
            d="M 100 200 L 100 80 L 500 80 L 500 200 L 380 200 L 380 200 M 380 200 L 220 200 L 220 200 L 100 200"
            fill="none"
            stroke="hsl(214 100% 61% / 0.85)"
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* Battery */}
          <g transform="translate(80,140)">
            <rect x={0} y={0} width={40} height={30} fill="hsl(210 80% 14%)" stroke="hsl(214 100% 61%)" strokeWidth={1.5} rx={3} />
            <text x={20} y={19} textAnchor="middle" fill="hsl(214 100% 75%)" fontSize="11" fontFamily="monospace">
              {V}V
            </text>
            <text x={-6} y={10} fill="hsl(43 72% 60%)" fontSize="14" fontWeight="bold">+</text>
            <text x={-6} y={28} fill="hsl(214 100% 75%)" fontSize="14" fontWeight="bold">−</text>
          </g>

          {/* Resistor */}
          <g transform="translate(280,70)">
            <rect x={0} y={0} width={80} height={20} fill="hsl(210 80% 14%)" stroke="hsl(43 72% 53%)" strokeWidth={1.5} rx={2} />
            <path d="M 5 10 L 15 4 L 25 16 L 35 4 L 45 16 L 55 4 L 65 16 L 75 10" stroke="hsl(43 72% 60%)" strokeWidth={1.5} fill="none" />
            <text x={40} y={36} textAnchor="middle" fill="hsl(43 72% 60%)" fontSize="11" fontFamily="monospace">
              R = {R}Ω
            </text>
          </g>

          {/* Switch */}
          <g
            transform="translate(280,190)"
            onClick={() => setClosed(c => !c)}
            style={{ cursor: 'pointer' }}
          >
            <circle cx={0} cy={10} r={5} fill="hsl(214 100% 61%)" />
            <circle cx={40} cy={10} r={5} fill="hsl(214 100% 61%)" />
            <motion.line
              x1={0}
              y1={10}
              animate={{
                x2: closed ? 40 : 36,
                y2: closed ? 10 : -12,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              stroke={closed ? 'hsl(140 70% 55%)' : 'hsl(0 70% 55%)'}
              strokeWidth={3}
              strokeLinecap="round"
            />
            <text x={20} y={36} textAnchor="middle" fill="hsl(0 0% 70%)" fontSize="10" fontFamily="monospace">
              {closed ? 'CLOSED' : 'OPEN — click'}
            </text>
          </g>

          {/* Animated electrons (only when closed) */}
          <AnimatePresence>
            {closed &&
              Array.from({ length: electronCount }).map((_, i) => (
                <motion.circle
                  key={i}
                  r={3.5}
                  fill="hsl(214 100% 80%)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <animateMotion
                    dur={`${Math.max(0.6, 4 - I * 80)}s`}
                    repeatCount="indefinite"
                    begin={`${(i / electronCount) * 2}s`}
                    path="M 100 200 L 100 80 L 500 80 L 500 200 L 100 200 Z"
                  />
                </motion.circle>
              ))}
          </AnimatePresence>

          {/* Meters */}
          <Meter x={460} y={140} label="A" value={`${(I * 1000).toFixed(1)} mA`} color="hsl(140 70% 60%)" />
          <Meter x={180} y={20} label="V" value={`${Vacross.toFixed(1)} V`} color="hsl(43 72% 60%)" />
        </svg>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <ControlRow label="EMF (V)" value={`${V} V`}>
          <Slider value={[V]} onValueChange={([v]) => setV(v)} min={1} max={24} step={1} />
        </ControlRow>
        <ControlRow label="Resistance (R)" value={`${R} Ω`}>
          <Slider value={[R]} onValueChange={([v]) => setR(v)} min={10} max={1000} step={10} />
        </ControlRow>
      </div>

      <button
        onClick={() => setClosed(c => !c)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-semibold"
      >
        <Power className="w-4 h-4" />
        {closed ? 'Open Switch' : 'Close Switch'}
      </button>
    </div>
  );
};

const Meter = ({ x, y, label, value, color }: { x: number; y: number; label: string; value: string; color: string }) => (
  <g transform={`translate(${x},${y})`}>
    <circle cx={0} cy={0} r={26} fill="hsl(210 80% 14%)" stroke={color} strokeWidth={1.5} />
    <text x={0} y={-4} textAnchor="middle" fill={color} fontSize="14" fontWeight="bold">{label}</text>
    <text x={0} y={10} textAnchor="middle" fill="hsl(0 0% 92%)" fontSize="9" fontFamily="monospace">{value}</text>
  </g>
);

const ControlRow = ({ label, value, children }: { label: string; value: string; children: React.ReactNode }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{label}</span>
      <span className="text-xs text-primary font-mono font-semibold">{value}</span>
    </div>
    {children}
  </div>
);

export default CircuitLogic;
