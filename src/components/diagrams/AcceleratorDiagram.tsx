import { motion } from 'framer-motion';

const AcceleratorDiagram = () => {
  return (
    <div className="glass-card p-6 my-6">
      <h3 className="font-serif text-xl text-gradient mb-4">The Accelerator Effect</h3>
      <div className="flex justify-center">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          <defs>
            <marker id="arrow-acc" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          
          {/* Boxes */}
          <motion.rect x="20" y="70" width="100" height="60" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          <text x="70" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">ΔY (Output)</text>
          
          <motion.rect x="150" y="70" width="100" height="60" rx="8" fill="hsl(var(--cambridge-orange))" opacity="0.2" stroke="hsl(var(--cambridge-orange))" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <text x="200" y="100" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Accelerator</text>
          <text x="200" y="115" textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="10">(α)</text>
          
          <motion.rect x="280" y="70" width="100" height="60" rx="8" fill="hsl(var(--cambridge-green))" opacity="0.2" stroke="hsl(var(--cambridge-green))" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
          <text x="330" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">I = αΔY</text>
          
          {/* Arrows */}
          <motion.line x1="120" y1="100" x2="145" y2="100" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow-acc)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />
          <motion.line x1="250" y1="100" x2="275" y2="100" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow-acc)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
          
          {/* Labels */}
          <text x="200" y="30" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Investment depends on CHANGE in output, not level</text>
          <text x="200" y="180" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">If α = 3, then $1m increase in output → $3m investment</text>
        </svg>
      </div>
    </div>
  );
};

export default AcceleratorDiagram;
