import { motion } from 'framer-motion';

interface ElasticityDiagramProps {
  type: 'elastic' | 'inelastic' | 'unit' | 'perfectly-elastic' | 'perfectly-inelastic';
  title?: string;
}

const ElasticityDiagram = ({ type, title }: ElasticityDiagramProps) => {
  const width = 280;
  const height = 220;
  const margin = { top: 30, right: 25, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const cyanColor = 'hsl(185, 100%, 50%)';

  const getDemandPath = () => {
    const startX = margin.left;
    const endX = margin.left + innerWidth;
    const startY = margin.top;
    const endY = margin.top + innerHeight;

    switch (type) {
      case 'perfectly-elastic':
        return `M ${startX} ${startY + innerHeight * 0.3} L ${endX} ${startY + innerHeight * 0.3}`;
      case 'perfectly-inelastic':
        return `M ${startX + innerWidth * 0.5} ${startY} L ${startX + innerWidth * 0.5} ${endY}`;
      case 'elastic':
        return `M ${startX} ${startY + innerHeight * 0.15} L ${endX} ${endY - innerHeight * 0.1}`;
      case 'inelastic':
        return `M ${startX + innerWidth * 0.1} ${startY} L ${endX - innerWidth * 0.1} ${endY}`;
      case 'unit':
      default:
        return `M ${startX} ${startY} L ${endX} ${endY}`;
    }
  };

  const getElasticityLabel = () => {
    switch (type) {
      case 'perfectly-elastic':
        return 'PED = ∞';
      case 'perfectly-inelastic':
        return 'PED = 0';
      case 'elastic':
        return 'PED > 1';
      case 'inelastic':
        return 'PED < 1';
      case 'unit':
        return 'PED = 1';
    }
  };

  const getDisplayTitle = () => {
    if (title) return title;
    switch (type) {
      case 'perfectly-elastic':
        return 'Perfectly Elastic';
      case 'perfectly-inelastic':
        return 'Perfectly Inelastic';
      case 'elastic':
        return 'Relatively Elastic';
      case 'inelastic':
        return 'Relatively Inelastic';
      case 'unit':
        return 'Unit Elastic';
    }
  };

  return (
    <div className="w-full">
      <h5 className="font-serif text-sm text-silver-bright mb-2 text-center">{getDisplayTitle()}</h5>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <marker id={`arrowE-${type}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="hsl(220, 14%, 75%)" />
          </marker>
        </defs>

        {/* Axes */}
        <motion.line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="hsl(220, 14%, 75%)"
          strokeWidth={1.5}
          markerEnd={`url(#arrowE-${type})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="hsl(220, 14%, 75%)"
          strokeWidth={1.5}
          markerEnd={`url(#arrowE-${type})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Demand Curve */}
        <motion.path
          d={getDemandPath()}
          fill="none"
          stroke={cyanColor}
          strokeWidth={2.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Labels */}
        <text x={margin.left - 8} y={margin.top - 8} fill="hsl(220, 14%, 75%)" fontSize="12" textAnchor="middle" fontWeight="600">P</text>
        <text x={width - margin.right + 8} y={height - margin.bottom + 5} fill="hsl(220, 14%, 75%)" fontSize="12" textAnchor="start" fontWeight="600">Q</text>
        
        {/* Elasticity Label */}
        <motion.text
          x={width / 2}
          y={margin.top + 15}
          fill={cyanColor}
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {getElasticityLabel()}
        </motion.text>

        {/* D label */}
        <text x={width - margin.right - 10} y={type === 'perfectly-elastic' ? margin.top + innerHeight * 0.3 - 10 : height - margin.bottom - 20} fill={cyanColor} fontSize="12" fontWeight="600">D</text>

        {/* Origin */}
        <text x={margin.left - 8} y={height - margin.bottom + 15} fill="hsl(220, 14%, 60%)" fontSize="10" textAnchor="middle">0</text>
      </svg>
    </div>
  );
};

const AllElasticityDiagrams = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <ElasticityDiagram type="perfectly-elastic" />
      <ElasticityDiagram type="elastic" />
      <ElasticityDiagram type="unit" />
      <ElasticityDiagram type="inelastic" />
      <ElasticityDiagram type="perfectly-inelastic" />
    </div>
  );
};

export { ElasticityDiagram, AllElasticityDiagrams };
export default ElasticityDiagram;
