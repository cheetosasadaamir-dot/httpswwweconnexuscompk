import { motion } from 'framer-motion';
import { useState } from 'react';

type ElasticityType = 'elastic' | 'inelastic' | 'unitary' | 'perfectly-elastic' | 'perfectly-inelastic';

interface PriceElasticityDiagramProps {
  type: ElasticityType;
  title?: string;
}

const PriceElasticityDiagram = ({ type, title }: PriceElasticityDiagramProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const width = 280;
  const height = 240;
  const padding = 40;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;
  
  const demandColor = '#00E5FF';
  const axisColor = '#94A3B8';
  const gridColor = '#334155';
  const highlightColor = '#FFD700';

  // Builds a true rectangular hyperbola P*Q = k sampled into a polyline
  const getHyperbolaPath = (x0: number, y0: number, x1: number, y1: number, steps = 24) => {
    const Qmin = 1;
    const Qmax = 4;
    const k = 4; // Pmax = k/Qmin = 4, Pmin = k/Qmax = 1
    const Pmax = k / Qmin;
    const Pmin = k / Qmax;
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const Q = Qmin + ((Qmax - Qmin) * i) / steps;
      const P = k / Q;
      const xt = x0 + (x1 - x0) * ((Q - Qmin) / (Qmax - Qmin));
      const yt = y0 + (y1 - y0) * ((Pmax - P) / (Pmax - Pmin));
      d += `${i === 0 ? 'M' : 'L'} ${xt.toFixed(2)} ${yt.toFixed(2)} `;
    }
    return d.trim();
  };

  const getDemandGeometry = () => {
    const startX = padding + 10;
    const endX = padding + graphWidth - 10;
    const startY = padding + 20;
    const endY = padding + graphHeight - 20;

    switch (type) {
      case 'elastic': {
        // Flatter curve (more horizontal) - visibly flatter than inelastic
        const y0 = startY + 30;
        const y1 = endY - 55;
        return { path: `M ${startX} ${y0} L ${endX} ${y1}`, endPoint: { x: endX, y: y1 } };
      }
      case 'inelastic': {
        // Steeper curve (more vertical)
        const x0 = startX + 70;
        const x1 = endX - 70;
        return { path: `M ${x0} ${startY} L ${x1} ${endY}`, endPoint: { x: x1, y: endY } };
      }
      case 'unitary': {
        // Rectangular hyperbola (constant total revenue along the curve)
        const path = getHyperbolaPath(startX, startY, endX, endY);
        return { path, endPoint: { x: endX, y: endY } };
      }
      case 'perfectly-elastic': {
        const y = padding + graphHeight * 0.4;
        return { path: `M ${startX} ${y} L ${endX} ${y}`, endPoint: { x: endX, y } };
      }
      case 'perfectly-inelastic': {
        const x = padding + graphWidth * 0.5;
        return { path: `M ${x} ${startY} L ${x} ${endY}`, endPoint: { x, y: startY } };
      }
      default:
        return { path: `M ${startX} ${startY} L ${endX} ${endY}`, endPoint: { x: endX, y: endY } };
    }
  };

  const { path: demandPathD, endPoint: demandEndPoint } = getDemandGeometry();
  const getDemandPath = () => demandPathD;

  const getElasticityLabel = () => {
    switch (type) {
      case 'elastic': return 'PED > 1';
      case 'inelastic': return 'PED < 1';
      case 'unitary': return 'PED = 1';
      case 'perfectly-elastic': return 'PED = ∞';
      case 'perfectly-inelastic': return 'PED = 0';
      default: return '';
    }
  };

  const getDisplayTitle = () => {
    if (title) return title;
    switch (type) {
      case 'elastic': return 'Elastic Demand';
      case 'inelastic': return 'Inelastic Demand';
      case 'unitary': return 'Unitary Elastic';
      case 'perfectly-elastic': return 'Perfectly Elastic';
      case 'perfectly-inelastic': return 'Perfectly Inelastic';
      default: return 'Price Elasticity';
    }
  };

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    }
  };

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-center text-silver-bright font-serif text-base mb-2">{getDisplayTitle()}</h4>
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full max-w-xs mx-auto"
        style={{ minHeight: '200px' }}
      >
        {/* Grid lines */}
        {[...Array(4)].map((_, i) => (
          <g key={`grid-${i}`}>
            <line 
              x1={padding} 
              y1={padding + (graphHeight / 4) * (i + 1)} 
              x2={padding + graphWidth} 
              y2={padding + (graphHeight / 4) * (i + 1)}
              stroke={gridColor}
              strokeWidth="0.5"
              strokeDasharray="3,3"
            />
            <line 
              x1={padding + (graphWidth / 4) * (i + 1)} 
              y1={padding} 
              x2={padding + (graphWidth / 4) * (i + 1)} 
              y2={padding + graphHeight}
              stroke={gridColor}
              strokeWidth="0.5"
              strokeDasharray="3,3"
            />
          </g>
        ))}

        {/* Axes */}
        <defs>
          <marker id={`arrowhead-ped-${type}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding + graphWidth + 8} y2={padding + graphHeight}
          stroke={axisColor} strokeWidth="1.5" markerEnd={`url(#arrowhead-ped-${type})`}
        />
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding} y2={padding - 8}
          stroke={axisColor} strokeWidth="1.5" markerEnd={`url(#arrowhead-ped-${type})`}
        />

        {/* Axis labels */}
        <text x={padding + graphWidth + 12} y={padding + graphHeight + 4} fill={axisColor} fontSize="12" fontWeight="500">Q</text>
        <text x={padding - 4} y={padding - 12} fill={axisColor} fontSize="12" fontWeight="500" textAnchor="middle">P</text>

        {/* Demand curve */}
        <motion.path
          d={getDemandPath()}
          fill="none"
          stroke={isHovered ? highlightColor : demandColor}
          strokeWidth={isHovered ? "3.5" : "2.5"}
          variants={curveVariants}
          initial="hidden"
          animate="visible"
          style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
        />
        
        {/* D label positioned at the curve's real endpoint */}
        <text
          x={demandEndPoint.x - (type === 'perfectly-inelastic' ? 18 : 4)}
          y={demandEndPoint.y - (type === 'perfectly-inelastic' ? 8 : 10)}
          fill={demandColor}
          fontSize="13"
          fontWeight="600"
          textAnchor={type === 'perfectly-inelastic' ? 'middle' : 'end'}
        >
          D
        </text>

        {/* Elasticity notation */}
        <motion.text
          x={width / 2}
          y={height - 8}
          fill={highlightColor}
          fontSize="12"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {getElasticityLabel()}
        </motion.text>
      </svg>
    </div>
  );
};

// Component to display all elasticity types
const AllPriceElasticityDiagrams = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="glass-card p-4 rounded-xl">
        <PriceElasticityDiagram type="elastic" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PriceElasticityDiagram type="inelastic" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PriceElasticityDiagram type="unitary" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PriceElasticityDiagram type="perfectly-elastic" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PriceElasticityDiagram type="perfectly-inelastic" />
      </div>
    </div>
  );
};

export { PriceElasticityDiagram, AllPriceElasticityDiagrams };
export default PriceElasticityDiagram;
