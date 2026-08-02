import { motion } from 'framer-motion';
import { useState } from 'react';

type PESType = 'elastic' | 'inelastic' | 'unitary' | 'perfectly-elastic' | 'perfectly-inelastic';

interface PESDiagramProps {
  type: PESType;
  title?: string;
}

const PESDiagram = ({ type, title }: PESDiagramProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const width = 280;
  const height = 240;
  const padding = 40;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;
  
  const supplyColor = '#FF4081';
  const axisColor = '#94A3B8';
  const gridColor = '#334155';
  const highlightColor = '#FFD700';

  // Origin of the graph in pixel space (bottom-left corner of the axes)
  const originX = padding;
  const originY = padding + graphHeight;

  const getSupplyGeometry = () => {
    const endX = padding + graphWidth - 10;
    const topY = padding + 10;

    switch (type) {
      case 'elastic': {
        // Elastic supply cuts the PRICE (vertical) axis at a positive price.
        // Slope chosen to be visibly flatter (less steep) than the inelastic case.
        const priceIntercept = originY - graphHeight * 0.35; // point where line crosses x = padding
        const startX = originX; // start exactly on the P axis
        const startY = priceIntercept;
        const endY = topY;
        return {
          path: `M ${startX} ${startY} L ${endX} ${endY}`,
          endPoint: { x: endX, y: endY },
        };
      }
      case 'inelastic': {
        // Inelastic supply cuts the QUANTITY (horizontal) axis at a positive quantity.
        // Slope chosen to be visibly steeper than the elastic case.
        const quantityIntercept = originX + graphWidth * 0.35; // point where line crosses y = originY
        const startX = quantityIntercept;
        const startY = originY;
        const endY = topY;
        const endX = padding + graphWidth * 0.62;
        return {
          path: `M ${startX} ${startY} L ${endX} ${endY}`,
          endPoint: { x: endX, y: endY },
        };
      }
      case 'unitary': {
        // Straight line through the origin = unit elastic at every point
        const endYUnit = padding + 10;
        return {
          path: `M ${originX} ${originY} L ${endX} ${endYUnit}`,
          endPoint: { x: endX, y: endYUnit },
        };
      }
      case 'perfectly-elastic': {
        const y = padding + graphHeight * 0.5;
        const startX = padding + 10;
        return { path: `M ${startX} ${y} L ${endX} ${y}`, endPoint: { x: endX, y } };
      }
      case 'perfectly-inelastic': {
        const x = padding + graphWidth * 0.5;
        const startY = padding + graphHeight - 20;
        return { path: `M ${x} ${startY} L ${x} ${topY}`, endPoint: { x, y: topY } };
      }
      default: {
        const startX = padding + 10;
        const startY = padding + graphHeight - 20;
        return { path: `M ${startX} ${startY} L ${endX} ${topY}`, endPoint: { x: endX, y: topY } };
      }
    }
  };

  const { path: supplyPathD, endPoint: supplyEndPoint } = getSupplyGeometry();
  const getSupplyPath = () => supplyPathD;

  const getElasticityLabel = () => {
    switch (type) {
      case 'elastic': return 'PES > 1';
      case 'inelastic': return 'PES < 1';
      case 'unitary': return 'PES = 1';
      case 'perfectly-elastic': return 'PES = ∞';
      case 'perfectly-inelastic': return 'PES = 0';
      default: return '';
    }
  };

  const getDisplayTitle = () => {
    if (title) return title;
    switch (type) {
      case 'elastic': return 'Elastic Supply';
      case 'inelastic': return 'Inelastic Supply';
      case 'unitary': return 'Unitary Elastic Supply';
      case 'perfectly-elastic': return 'Perfectly Elastic Supply';
      case 'perfectly-inelastic': return 'Perfectly Inelastic Supply';
      default: return 'Price Elasticity of Supply';
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
          <g key={`grid-pes-${i}`}>
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
          <marker id={`arrowhead-pes-${type}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding + graphWidth + 8} y2={padding + graphHeight}
          stroke={axisColor} strokeWidth="1.5" markerEnd={`url(#arrowhead-pes-${type})`}
        />
        <line 
          x1={padding} y1={padding + graphHeight} 
          x2={padding} y2={padding - 8}
          stroke={axisColor} strokeWidth="1.5" markerEnd={`url(#arrowhead-pes-${type})`}
        />

        {/* Axis labels */}
        <text x={padding + graphWidth + 12} y={padding + graphHeight + 4} fill={axisColor} fontSize="12" fontWeight="500">Q</text>
        <text x={padding - 4} y={padding - 12} fill={axisColor} fontSize="12" fontWeight="500" textAnchor="middle">P</text>

        {/* Supply curve */}
        <motion.path
          d={getSupplyPath()}
          fill="none"
          stroke={isHovered ? highlightColor : supplyColor}
          strokeWidth={isHovered ? "3.5" : "2.5"}
          variants={curveVariants}
          initial="hidden"
          animate="visible"
          style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
        />
        
        {/* S label positioned at the curve's real endpoint */}
        <text
          x={supplyEndPoint.x + (type === 'perfectly-inelastic' ? 0 : 6)}
          y={supplyEndPoint.y - (type === 'perfectly-inelastic' ? 10 : 2)}
          fill={supplyColor}
          fontSize="13"
          fontWeight="600"
          textAnchor={type === 'perfectly-inelastic' ? 'middle' : 'start'}
        >
          S
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

// Component to display all PES types
const AllPESDiagrams = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="glass-card p-4 rounded-xl">
        <PESDiagram type="elastic" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PESDiagram type="inelastic" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PESDiagram type="unitary" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PESDiagram type="perfectly-elastic" />
      </div>
      <div className="glass-card p-4 rounded-xl">
        <PESDiagram type="perfectly-inelastic" />
      </div>
    </div>
  );
};

export { PESDiagram, AllPESDiagrams };
export default PESDiagram;
