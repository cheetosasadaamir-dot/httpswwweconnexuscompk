import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MonetaryInflationDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return => observer.disconnect();
  }, []);

  const w = 420, h = 340;
  const m = { top: 35, right: 35, bottom: 55, left: 55 };
  const cw = w - m.left - m.right;
  const ch = h - m.top - m.bottom;
  const x = (v: number) => m.left + (v / 100) * cw;
  const y = (v: number) => m.top + ch - (v / 100) * ch;

  const lrasX = 65;
  const ad1 = [
    { x: 20, y: 78 }, { x: 38, y: 56 }, { x: 52, y: 40 },
    { x: 68, y: 28 }, { x: 82, y: 20 },
  ];
  const ad2 = ad1.map(p => ({ x: p.x + 18, y: p.y }));

  const path = (pts: { x: number; y: number }[]) => {
    let d = `M ${x(pts[0].x)} ${y(pts[0].y)}`;
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i - 1], c = pts[i];
      d += ` Q ${x((p.x + c.x) / 2)} ${y(p.y)}, ${x(c.x)} ${y(c.y)}`;
    }
    return d;
  };

  const anim = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" as const } } };

  // Intersection of AD1 with LRAS (x=65) → roughly y=35
  // Intersection of AD2 with LRAS (x=65) → roughly y=55
  const e1y = 35;
  const e2y = 55;

  return (
    <div ref={containerRef}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto" aria-label="Monetary Inflation Diagram showing MV=PQ and AD shift along vertical LRAS">
        <defs>
          <pattern id="grid-mi" width="33" height="33" patternUnits="userSpaceOnUse">
            <path d="M 33 0 L 0 0 0 33" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          <marker id="arr-mi" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        <rect x={m.left} y={m.top} width={cw} height={ch} fill="url(#grid-mi)" />

        {/* Axes */}
        <line x1={m.left} y1={m.top + ch} x2={m.left + cw} y2={m.top + ch} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <line x1={m.left} y1={m.top} x2={m.left} y2={m.top + ch} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <text x={m.left + cw / 2} y={h - 8} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Real GDP (Y)</text>
        <text x={14} y={m.top + ch / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500" transform={`rotate(-90, 14, ${m.top + ch / 2})`}>Price Level (P)</text>

        {/* LRAS */}
        <motion.line x1={x(lrasX)} y1={y(92)} x2={x(lrasX)} y2={y(8)} stroke="hsl(var(--cambridge-green))" strokeWidth="2.5" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} />
        <text x={x(lrasX) + 6} y={y(94)} fill="hsl(var(--cambridge-green))" fontSize="12" fontWeight="700">LRAS</text>

        {/* AD₁ */}
        <motion.path d={path(ad1)} fill="none" stroke="hsl(var(--cambridge-cyan))" strokeWidth="2.5" variants={anim} initial="hidden" animate={isVisible ? "visible" : "hidden"} />
        <text x={x(84)} y={y(18)} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">AD₁</text>

        {/* AD₂ */}
        <motion.path d={path(ad2)} fill="none" stroke="hsl(var(--cambridge-cyan))" strokeWidth="2.5" strokeDasharray="7,4" initial={{ opacity: 0, pathLength: 0 }} animate={isVisible ? { opacity: 1, pathLength: 1 } : {}} transition={{ delay: 0.8, duration: 0.8 }} />
        <text x={x(100)} y={y(18)} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">AD₂</text>

        {/* Shift arrow */}
        <motion.path d={`M ${x(55)} ${y(42)} L ${x(70)} ${y(42)}`} stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arr-mi)" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.1 }} />

        {/* Equilibria on LRAS */}
        <motion.circle cx={x(lrasX)} cy={y(e1y)} r="5" fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
        <text x={x(lrasX) - 14} y={y(e1y) - 8} fill="hsl(var(--foreground))" fontSize="11" fontWeight="700">E₁</text>

        <motion.circle cx={x(lrasX)} cy={y(e2y)} r="5" fill="hsl(var(--secondary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 1.3 }} />
        <text x={x(lrasX) - 14} y={y(e2y) - 8} fill="hsl(var(--foreground))" fontSize="11" fontWeight="700">E₂</text>

        {/* Dashed lines */}
        <motion.line x1={m.left} y1={y(e1y)} x2={x(lrasX)} y2={y(e1y)} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        <motion.line x1={m.left} y1={y(e2y)} x2={x(lrasX)} y2={y(e2y)} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} transition={{ delay: 1.3 }} />
        <text x={m.left - 8} y={y(e1y) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">P₁</text>
        <text x={m.left - 8} y={y(e2y) + 4} textAnchor="end" fill="hsl(var(--secondary))" fontSize="10" fontWeight="600">P₂</text>

        {/* Yf label */}
        <motion.line x1={x(lrasX)} y1={y(0)} x2={x(lrasX)} y2={y(0) + 5} stroke="hsl(var(--cambridge-green))" strokeWidth="2" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} />
        <text x={x(lrasX)} y={y(0) + 16} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="10" fontWeight="600">Yf</text>

        {/* MV=PQ annotation */}
        <motion.foreignObject x={x(22)} y={y(88)} width="90" height="36" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.5 }}>
          <div className="bg-muted/60 rounded-md px-2 py-1 text-center">
            <span className="text-[10px] font-mono font-semibold text-primary">↑M × V = ↑P × Q</span>
          </div>
        </motion.foreignObject>
      </svg>
    </div>
  );
};

export default MonetaryInflationDiagram;
