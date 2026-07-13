import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const DemandPullDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const w = 420, h = 340;
  const m = { top: 35, right: 35, bottom: 55, left: 55 };
  const cw = w - m.left - m.right;
  const ch = h - m.top - m.bottom;
  const x = (v: number) => m.left + (v / 100) * cw;
  const y = (v: number) => m.top + ch - (v / 100) * ch;

  const sras = [
    { x: 15, y: 15 }, { x: 30, y: 25 }, { x: 45, y: 38 },
    { x: 60, y: 55 }, { x: 72, y: 72 }, { x: 80, y: 88 },
  ];
  const ad1 = [
    { x: 15, y: 82 }, { x: 30, y: 62 }, { x: 48, y: 45 },
    { x: 65, y: 32 }, { x: 80, y: 22 },
  ];
  const ad2 = ad1.map(p => ({ x: p.x + 16, y: p.y }));

  const path = (pts: { x: number; y: number }[]) => {
    let d = `M ${x(pts[0].x)} ${y(pts[0].y)}`;
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i - 1], c = pts[i];
      d += ` Q ${x((p.x + c.x) / 2)} ${y(p.y)}, ${x(c.x)} ${y(c.y)}`;
    }
    return d;
  };

  const anim = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" as const } } };

  // Equilibrium points
  const e1 = { x: 48, y: 42 };
  const e2 = { x: 58, y: 55 };

  return (
    <div ref={containerRef}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto" aria-label="Demand-Pull Inflation Diagram showing AD shifting right from AD1 to AD2">
        <defs>
          <pattern id="grid-dp" width="33" height="33" patternUnits="userSpaceOnUse">
            <path d="M 33 0 L 0 0 0 33" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          <marker id="arr-dp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" />
          </marker>
          <linearGradient id="shade-dp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect x={m.left} y={m.top} width={cw} height={ch} fill="url(#grid-dp)" />

        {/* Inflationary gap shading */}
        <motion.rect
          x={x(e1.x)} y={y(e2.y)} width={x(e2.x) - x(e1.x)} height={y(e1.y) - y(e2.y)}
          fill="url(#shade-dp)" rx="4"
          initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.6 }}
        />
        <motion.text x={x((e1.x + e2.x) / 2)} y={y((e1.y + e2.y) / 2) + 3} textAnchor="middle" fill="hsl(var(--primary))" fontSize="9" fontWeight="600" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.8 } : {}} transition={{ delay: 1.8 }}>
          Inflationary Gap
        </motion.text>

        {/* Axes */}
        <line x1={m.left} y1={m.top + ch} x2={m.left + cw} y2={m.top + ch} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <line x1={m.left} y1={m.top} x2={m.left} y2={m.top + ch} stroke="hsl(var(--foreground))" strokeWidth="1.5" />
        <text x={m.left + cw / 2} y={h - 8} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Real GDP (Y)</text>
        <text x={14} y={m.top + ch / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500" transform={`rotate(-90, 14, ${m.top + ch / 2})`}>Price Level (P)</text>

        {/* SRAS */}
        <motion.path d={path(sras)} fill="none" stroke="hsl(var(--cambridge-orange))" strokeWidth="2.5" variants={anim} initial="hidden" animate={isVisible ? "visible" : "hidden"} />
        <text x={x(82)} y={y(90)} fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="700">SRAS</text>

        {/* AD₁ */}
        <motion.path d={path(ad1)} fill="none" stroke="hsl(var(--cambridge-cyan))" strokeWidth="2.5" variants={anim} initial="hidden" animate={isVisible ? "visible" : "hidden"} />
        <text x={x(82)} y={y(20)} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">AD₁</text>

        {/* AD₂ */}
        <motion.path d={path(ad2)} fill="none" stroke="hsl(var(--cambridge-cyan))" strokeWidth="2.5" strokeDasharray="7,4" initial={{ opacity: 0, pathLength: 0 }} animate={isVisible ? { opacity: 1, pathLength: 1 } : {}} transition={{ delay: 0.8, duration: 0.8 }} />
        <text x={x(98)} y={y(20)} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">AD₂</text>

        {/* Shift arrow */}
        <motion.path d={`M ${x(52)} ${y(44)} L ${x(66)} ${y(44)}`} stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arr-dp)" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 1.1 }} />

        {/* Equilibria */}
        <motion.circle cx={x(e1.x)} cy={y(e1.y)} r="5" fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
        <text x={x(e1.x) - 14} y={y(e1.y) - 9} fill="hsl(var(--foreground))" fontSize="11" fontWeight="700">E₁</text>

        <motion.circle cx={x(e2.x)} cy={y(e2.y)} r="5" fill="hsl(var(--secondary))" initial={{ scale: 0 }} animate={isVisible ? { scale: 1 } : {}} transition={{ delay: 1.3 }} />
        <text x={x(e2.x) + 7} y={y(e2.y) - 7} fill="hsl(var(--foreground))" fontSize="11" fontWeight="700">E₂</text>

        {/* Dashed lines to axes */}
        <motion.line x1={m.left} y1={y(e1.y)} x2={x(e1.x)} y2={y(e1.y)} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        <motion.line x1={m.left} y1={y(e2.y)} x2={x(e2.x)} y2={y(e2.y)} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} transition={{ delay: 1.3 }} />
        <text x={m.left - 8} y={y(e1.y) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="10">P₁</text>
        <text x={m.left - 8} y={y(e2.y) + 4} textAnchor="end" fill="hsl(var(--secondary))" fontSize="10" fontWeight="600">P₂</text>

        <motion.line x1={x(e1.x)} y1={y(e1.y)} x2={x(e1.x)} y2={y(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        <motion.line x1={x(e2.x)} y1={y(e2.y)} x2={x(e2.x)} y2={y(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} transition={{ delay: 1.3 }} />
        <text x={x(e1.x)} y={y(0) + 14} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Y₁</text>
        <text x={x(e2.x)} y={y(0) + 14} textAnchor="middle" fill="hsl(var(--secondary))" fontSize="10" fontWeight="600">Y₂</text>
      </svg>
    </div>
  );
};

export default DemandPullDiagram;
