import { motion } from 'framer-motion';

interface ConsumerProducerSurplusDiagramProps {
  title?: string;
  showLabels?: boolean;
}

const ConsumerProducerSurplusDiagram = ({ 
  title = "Consumer & Producer Surplus",
  showLabels = true 
}: ConsumerProducerSurplusDiagramProps) => {
  // SVG dimensions and margins
  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Cambridge standard colors
  const cyanColor = 'hsl(185, 100%, 50%)';
  const magentaColor = 'hsl(300, 100%, 60%)';
  const goldColor = 'hsl(45, 93%, 55%)';
  const consumerSurplusColor = 'hsl(185, 100%, 50%)';
  const producerSurplusColor = 'hsl(142, 76%, 45%)';

  // Equilibrium point
  const eqX = innerWidth * 0.5;
  const eqY = innerHeight * 0.5;

  // Demand curve points (downward sloping)
  const demandStart = { x: margin.left, y: margin.top + innerHeight * 0.1 };
  const demandEnd = { x: margin.left + innerWidth * 0.9, y: margin.top + innerHeight * 0.9 };
  
  // Supply curve points (upward sloping)
  const supplyStart = { x: margin.left, y: margin.top + innerHeight * 0.9 };
  const supplyEnd = { x: margin.left + innerWidth * 0.9, y: margin.top + innerHeight * 0.1 };

  // Equilibrium point
  const equilibrium = { x: margin.left + eqX, y: margin.top + eqY };

  // Price axis intercepts
  const demandIntercept = { x: margin.left, y: demandStart.y };
  const supplyIntercept = { x: margin.left, y: supplyStart.y };

  return (
    <div className="w-full">
      {title && (
        <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h4>
      )}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <marker id="arrowCS" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="hsl(220, 14%, 75%)" />
          </marker>
        </defs>

        {/* Consumer Surplus Triangle (above price, below demand) */}
        <motion.polygon
          points={`
            ${margin.left},${demandStart.y}
            ${equilibrium.x},${equilibrium.y}
            ${margin.left},${equilibrium.y}
          `}
          fill={consumerSurplusColor}
          opacity={0.3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        {/* Producer Surplus Triangle (below price, above supply) */}
        <motion.polygon
          points={`
            ${margin.left},${supplyStart.y}
            ${equilibrium.x},${equilibrium.y}
            ${margin.left},${equilibrium.y}
          `}
          fill={producerSurplusColor}
          opacity={0.3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />

        {/* Axes */}
        <motion.line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="hsl(220, 14%, 75%)"
          strokeWidth={2}
          markerEnd="url(#arrowCS)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="hsl(220, 14%, 75%)"
          strokeWidth={2}
          markerEnd="url(#arrowCS)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Demand Curve (D = AR = MB) */}
        <motion.line
          x1={demandStart.x}
          y1={demandStart.y}
          x2={demandEnd.x}
          y2={demandEnd.y}
          stroke={cyanColor}
          strokeWidth={3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Supply Curve (S = MC) */}
        <motion.line
          x1={supplyStart.x}
          y1={supplyStart.y}
          x2={supplyEnd.x}
          y2={supplyEnd.y}
          stroke={magentaColor}
          strokeWidth={3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Equilibrium dashed lines */}
        <motion.line
          x1={equilibrium.x}
          y1={equilibrium.y}
          x2={equilibrium.x}
          y2={height - margin.bottom}
          stroke={goldColor}
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        <motion.line
          x1={margin.left}
          y1={equilibrium.y}
          x2={equilibrium.x}
          y2={equilibrium.y}
          stroke={goldColor}
          strokeWidth={1.5}
          strokeDasharray="6,4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />

        {/* Equilibrium Point */}
        <motion.circle
          cx={equilibrium.x}
          cy={equilibrium.y}
          r={6}
          fill={goldColor}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
        />

        {/* Labels */}
        {showLabels && (
          <>
            {/* Axis Labels */}
            <text x={margin.left - 10} y={margin.top - 10} fill="hsl(220, 14%, 75%)" fontSize="14" textAnchor="middle" fontWeight="600">P</text>
            <text x={width - margin.right + 20} y={height - margin.bottom + 5} fill="hsl(220, 14%, 75%)" fontSize="14" textAnchor="middle" fontWeight="600">Q</text>

            {/* Equilibrium Labels */}
            <text x={equilibrium.x + 15} y={equilibrium.y - 10} fill={goldColor} fontSize="13" fontWeight="600">E</text>
            <text x={margin.left - 25} y={equilibrium.y + 5} fill="hsl(220, 14%, 75%)" fontSize="12" textAnchor="middle">P*</text>
            <text x={equilibrium.x} y={height - margin.bottom + 20} fill="hsl(220, 14%, 75%)" fontSize="12" textAnchor="middle">Q*</text>

            {/* Curve Labels */}
            <text x={demandEnd.x + 15} y={demandEnd.y} fill={cyanColor} fontSize="13" fontWeight="600">D = AR</text>
            <text x={supplyEnd.x + 15} y={supplyEnd.y} fill={magentaColor} fontSize="13" fontWeight="600">S = MC</text>

            {/* Surplus Labels */}
            <motion.text
              x={margin.left + eqX * 0.3}
              y={margin.top + eqY * 0.6}
              fill={consumerSurplusColor}
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Consumer
            </motion.text>
            <motion.text
              x={margin.left + eqX * 0.3}
              y={margin.top + eqY * 0.6 + 14}
              fill={consumerSurplusColor}
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Surplus
            </motion.text>
            <motion.text
              x={margin.left + eqX * 0.3}
              y={margin.top + eqY * 1.4}
              fill={producerSurplusColor}
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Producer
            </motion.text>
            <motion.text
              x={margin.left + eqX * 0.3}
              y={margin.top + eqY * 1.4 + 14}
              fill={producerSurplusColor}
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Surplus
            </motion.text>

            {/* Origin */}
            <text x={margin.left - 10} y={height - margin.bottom + 20} fill="hsl(220, 14%, 75%)" fontSize="12" textAnchor="middle">0</text>
          </>
        )}
      </svg>
    </div>
  );
};

export default ConsumerProducerSurplusDiagram;
