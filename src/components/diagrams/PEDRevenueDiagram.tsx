import { motion } from 'framer-motion';
import { useState } from 'react';

interface PEDRevenueDiagramProps {
  title?: string;
}

const PEDRevenueDiagram = ({ title = "PED and Total Revenue Relationship" }: PEDRevenueDiagramProps) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const width = 450;
  const height = 400;
  const padding = 55;
  const graphWidth = width - padding * 2;
  const graphHeight = (height - padding * 2) / 2 - 20;
  
  const demandColor = '#00E5FF';
  const revenueColor = '#FF4081';
  const axisColor = '#94A3B8';
  const gridColor = '#334155';
  const elasticColor = '#4CAF50';
  const inelasticColor = '#FF9800';
  const unitaryColor = '#FFD700';

  // Demand curve (linear)
  const demandStartY = padding + 20;
  const demandEndY = padding + graphHeight - 10;
  const demandStartX = padding + 20;
  const demandEndX = padding + graphWidth - 20;
  
  // TR curve (parabola - inverted U)
  const trBaseY = padding + graphHeight + 60;
  const trHeight = graphHeight - 20;
  const trPeakX = padding + graphWidth * 0.5;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div className="w-full">
      {title && (
        <h4 className="text-center text-silver-bright font-serif text-lg mb-4">{title}</h4>
      )}
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full max-w-lg mx-auto"
        style={{ minHeight: '400px' }}
      >
        {/* === TOP GRAPH: Demand Curve === */}
        {/* Grid lines for top graph */}
        {[...Array(4)].map((_, i) => (
          <g key={`grid-top-${i}`}>
            <line 
              x1={padding} 
              y1={padding + (graphHeight / 4) * (i + 1)} 
              x2={padding + graphWidth} 
              y2={padding + (graphHeight / 4) * (i + 1)}
              stroke={gridColor}
              strokeWidth="0.5"
              strokeDasharray="3,3"
            />
          </g>
        ))}

        {/* Top graph axes */}
        <defs>
          <marker id="arrowhead-ped-rev" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding + graphWidth + 8} y2={padding + graphHeight}
          stroke={axisColor} strokeWidth="1.5" markerEnd="url(#arrowhead-ped-rev)"
        />
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding} y2={padding - 8}
          stroke={axisColor} strokeWidth="1.5" markerEnd="url(#arrowhead-ped-rev)"
        />

        {/* Top graph labels */}
        <text x={padding + graphWidth + 12} y={padding + graphHeight + 4} fill={axisColor} fontSize="12" fontWeight="500">Q</text>
        <text x={padding - 4} y={padding - 12} fill={axisColor} fontSize="12" fontWeight="500" textAnchor="middle">P</text>

        {/* Demand curve (linear downward sloping) */}
        <motion.line
          x1={demandStartX}
          y1={demandStartY}
          x2={demandEndX}
          y2={demandEndY}
          stroke={demandColor}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={demandEndX + 5} y={demandEndY} fill={demandColor} fontSize="13" fontWeight="600">D</text>

        {/* Elastic section highlight */}
        <motion.rect
          x={padding}
          y={padding}
          width={graphWidth * 0.45}
          height={graphHeight}
          fill={elasticColor}
          opacity={hoveredSection === 'elastic' ? 0.2 : 0.08}
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredSection === 'elastic' ? 0.2 : 0.08 }}
          onMouseEnter={() => setHoveredSection('elastic')}
          onMouseLeave={() => setHoveredSection(null)}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Inelastic section highlight */}
        <motion.rect
          x={padding + graphWidth * 0.55}
          y={padding}
          width={graphWidth * 0.45}
          height={graphHeight}
          fill={inelasticColor}
          opacity={hoveredSection === 'inelastic' ? 0.2 : 0.08}
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredSection === 'inelastic' ? 0.2 : 0.08 }}
          onMouseEnter={() => setHoveredSection('inelastic')}
          onMouseLeave={() => setHoveredSection(null)}
          style={{ cursor: 'pointer' }}
        />

        {/* Section labels on demand curve */}
        <text x={padding + graphWidth * 0.22} y={padding + 15} fill={elasticColor} fontSize="11" fontWeight="600" textAnchor="middle">
          Elastic
        </text>
        <text x={padding + graphWidth * 0.22} y={padding + 28} fill={elasticColor} fontSize="10" textAnchor="middle">
          (PED &gt; 1)
        </text>
        
        <text x={padding + graphWidth * 0.78} y={padding + graphHeight - 20} fill={inelasticColor} fontSize="11" fontWeight="600" textAnchor="middle">
          Inelastic
        </text>
        <text x={padding + graphWidth * 0.78} y={padding + graphHeight - 7} fill={inelasticColor} fontSize="10" textAnchor="middle">
          (PED &lt; 1)
        </text>

        {/* Unitary point marker */}
        <motion.circle
          cx={padding + graphWidth * 0.5}
          cy={padding + graphHeight * 0.5}
          r="5"
          fill={unitaryColor}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
        />
        <text x={padding + graphWidth * 0.5 + 10} y={padding + graphHeight * 0.5 - 8} fill={unitaryColor} fontSize="10" fontWeight="600">
          PED = 1
        </text>

        {/* Vertical dashed line at midpoint */}
        <motion.line
          x1={padding + graphWidth * 0.5}
          y1={padding}
          x2={padding + graphWidth * 0.5}
          y2={height - padding}
          stroke={unitaryColor}
          strokeWidth="1.5"
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
        <text x={padding + graphWidth * 0.5} y={padding + graphHeight + 18} fill={unitaryColor} fontSize="10" textAnchor="middle">Q*</text>

        {/* === BOTTOM GRAPH: Total Revenue === */}
        {/* Bottom graph axes */}
        <line 
          x1={padding} y1={trBaseY + trHeight} 
          x2={padding + graphWidth + 8} y2={trBaseY + trHeight}
          stroke={axisColor} strokeWidth="1.5" markerEnd="url(#arrowhead-ped-rev)"
        />
        <line 
          x1={padding} y1={trBaseY + trHeight} 
          x2={padding} y2={trBaseY - 8}
          stroke={axisColor} strokeWidth="1.5" markerEnd="url(#arrowhead-ped-rev)"
        />

        {/* Bottom graph labels */}
        <text x={padding + graphWidth + 12} y={trBaseY + trHeight + 4} fill={axisColor} fontSize="12" fontWeight="500">Q</text>
        <text x={padding - 4} y={trBaseY - 12} fill={axisColor} fontSize="12" fontWeight="500" textAnchor="middle">TR</text>

        {/* TR parabola (inverted U shape) */}
        <motion.path
          d={`M ${padding + 20} ${trBaseY + trHeight - 10} 
              Q ${trPeakX} ${trBaseY} ${padding + graphWidth - 20} ${trBaseY + trHeight - 10}`}
          fill="none"
          stroke={revenueColor}
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={padding + graphWidth - 10} y={trBaseY + trHeight - 20} fill={revenueColor} fontSize="13" fontWeight="600">TR</text>

        {/* TR maximum point */}
        <motion.circle
          cx={trPeakX}
          cy={trBaseY + 15}
          r="5"
          fill={unitaryColor}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4 }}
        />
        <text x={trPeakX + 10} y={trBaseY + 10} fill={unitaryColor} fontSize="10" fontWeight="600">TR max</text>

        {/* Annotations for TR behavior */}
        <motion.text
          x={padding + graphWidth * 0.25}
          y={trBaseY + trHeight * 0.4}
          fill={elasticColor}
          fontSize="10"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          P↓ → TR↑
        </motion.text>
        
        <motion.text
          x={padding + graphWidth * 0.75}
          y={trBaseY + trHeight * 0.4}
          fill={inelasticColor}
          fontSize="10"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          P↓ → TR↓
        </motion.text>
      </svg>

      {/* Explanation section */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <div 
          className="glass-card p-3 rounded-lg border-l-4"
          style={{ borderColor: elasticColor }}
        >
          <h5 className="font-semibold mb-1" style={{ color: elasticColor }}>Elastic (PED &gt; 1)</h5>
          <p className="text-muted-foreground text-xs">Price cut increases TR. Large % change in Qd.</p>
        </div>
        <div 
          className="glass-card p-3 rounded-lg border-l-4"
          style={{ borderColor: unitaryColor }}
        >
          <h5 className="font-semibold mb-1" style={{ color: unitaryColor }}>Unitary (PED = 1)</h5>
          <p className="text-muted-foreground text-xs">TR is maximized. % change in P = % change in Qd.</p>
        </div>
        <div 
          className="glass-card p-3 rounded-lg border-l-4"
          style={{ borderColor: inelasticColor }}
        >
          <h5 className="font-semibold mb-1" style={{ color: inelasticColor }}>Inelastic (PED &lt; 1)</h5>
          <p className="text-muted-foreground text-xs">Price cut decreases TR. Small % change in Qd.</p>
        </div>
      </div>
    </div>
  );
};

export default PEDRevenueDiagram;
