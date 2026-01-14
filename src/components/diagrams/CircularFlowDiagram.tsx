import { motion } from 'framer-motion';

interface CircularFlowDiagramProps {
  title?: string;
}

const CircularFlowDiagram = ({ title = "4-Sector Circular Flow of Income" }: CircularFlowDiagramProps) => {
  const width = 600;
  const height = 500;

  // Colors
  const cyanColor = 'hsl(185, 100%, 50%)';
  const magentaColor = 'hsl(300, 100%, 60%)';
  const greenColor = 'hsl(142, 76%, 45%)';
  const orangeColor = 'hsl(25, 95%, 55%)';
  const goldColor = 'hsl(45, 93%, 55%)';

  const boxWidth = 120;
  const boxHeight = 50;

  // Positions for 4 sectors
  const households = { x: 150, y: 200 };
  const firms = { x: 450, y: 200 };
  const government = { x: 300, y: 50 };
  const foreign = { x: 300, y: 400 };

  const drawPath = (from: {x: number, y: number}, to: {x: number, y: number}, curve: number = 0) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2 + curve;
    return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
  };

  return (
    <div className="w-full">
      {title && (
        <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h4>
      )}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <marker id="arrowCF" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill={cyanColor} />
          </marker>
          <marker id="arrowCFMagenta" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill={magentaColor} />
          </marker>
          <marker id="arrowCFGreen" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill={greenColor} />
          </marker>
          <marker id="arrowCFOrange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill={orangeColor} />
          </marker>
        </defs>

        {/* Sector Boxes */}
        {/* Households */}
        <motion.rect
          x={households.x - boxWidth/2}
          y={households.y - boxHeight/2}
          width={boxWidth}
          height={boxHeight}
          rx={8}
          fill="hsl(222, 47%, 8%)"
          stroke={cyanColor}
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <text x={households.x} y={households.y + 5} fill={cyanColor} fontSize="14" fontWeight="600" textAnchor="middle">Households</text>

        {/* Firms */}
        <motion.rect
          x={firms.x - boxWidth/2}
          y={firms.y - boxHeight/2}
          width={boxWidth}
          height={boxHeight}
          rx={8}
          fill="hsl(222, 47%, 8%)"
          stroke={magentaColor}
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <text x={firms.x} y={firms.y + 5} fill={magentaColor} fontSize="14" fontWeight="600" textAnchor="middle">Firms</text>

        {/* Government */}
        <motion.rect
          x={government.x - boxWidth/2}
          y={government.y - boxHeight/2}
          width={boxWidth}
          height={boxHeight}
          rx={8}
          fill="hsl(222, 47%, 8%)"
          stroke={greenColor}
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <text x={government.x} y={government.y + 5} fill={greenColor} fontSize="14" fontWeight="600" textAnchor="middle">Government</text>

        {/* Foreign Sector */}
        <motion.rect
          x={foreign.x - boxWidth/2}
          y={foreign.y - boxHeight/2}
          width={boxWidth}
          height={boxHeight}
          rx={8}
          fill="hsl(222, 47%, 8%)"
          stroke={orangeColor}
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <text x={foreign.x} y={foreign.y + 5} fill={orangeColor} fontSize="14" fontWeight="600" textAnchor="middle">Foreign Sector</text>

        {/* Main Circular Flow - Households to Firms (Top - Consumption) */}
        <motion.path
          d={`M ${households.x + boxWidth/2} ${households.y - 20} Q 300 120 ${firms.x - boxWidth/2} ${firms.y - 20}`}
          fill="none"
          stroke={cyanColor}
          strokeWidth={2}
          markerEnd="url(#arrowCF)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <text x={300} y={130} fill={cyanColor} fontSize="11" textAnchor="middle">Consumption (C)</text>

        {/* Firms to Households (Bottom - Factor Incomes) */}
        <motion.path
          d={`M ${firms.x - boxWidth/2} ${firms.y + 20} Q 300 280 ${households.x + boxWidth/2} ${households.y + 20}`}
          fill="none"
          stroke={magentaColor}
          strokeWidth={2}
          markerEnd="url(#arrowCFMagenta)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        <text x={300} y={295} fill={magentaColor} fontSize="11" textAnchor="middle">Factor Incomes (Y)</text>

        {/* Injections - Government to Firms (Government Spending) */}
        <motion.path
          d={`M ${government.x + 40} ${government.y + boxHeight/2} L ${firms.x - 30} ${firms.y - boxHeight/2 - 10}`}
          fill="none"
          stroke={greenColor}
          strokeWidth={2}
          markerEnd="url(#arrowCFGreen)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
        <text x={420} y={100} fill={greenColor} fontSize="10" textAnchor="middle">G (Injection)</text>

        {/* Leakages - Households to Government (Taxes) */}
        <motion.path
          d={`M ${households.x + 30} ${households.y - boxHeight/2 - 10} L ${government.x - 40} ${government.y + boxHeight/2}`}
          fill="none"
          stroke={greenColor}
          strokeWidth={2}
          strokeDasharray="6,4"
          markerEnd="url(#arrowCFGreen)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        />
        <text x={180} y={100} fill={greenColor} fontSize="10" textAnchor="middle">T (Leakage)</text>

        {/* Foreign - Exports (Injection) */}
        <motion.path
          d={`M ${foreign.x + 40} ${foreign.y - boxHeight/2} L ${firms.x - 30} ${firms.y + boxHeight/2 + 10}`}
          fill="none"
          stroke={orangeColor}
          strokeWidth={2}
          markerEnd="url(#arrowCFOrange)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        />
        <text x={420} y={340} fill={orangeColor} fontSize="10" textAnchor="middle">X (Injection)</text>

        {/* Foreign - Imports (Leakage) */}
        <motion.path
          d={`M ${households.x + 30} ${households.y + boxHeight/2 + 10} L ${foreign.x - 40} ${foreign.y - boxHeight/2}`}
          fill="none"
          stroke={orangeColor}
          strokeWidth={2}
          strokeDasharray="6,4"
          markerEnd="url(#arrowCFOrange)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <text x={180} y={340} fill={orangeColor} fontSize="10" textAnchor="middle">M (Leakage)</text>

        {/* Savings (Leakage) - Households to Financial Sector (simplified) */}
        <motion.path
          d={`M ${households.x - boxWidth/2} ${households.y} L ${households.x - boxWidth/2 - 50} ${households.y}`}
          fill="none"
          stroke={goldColor}
          strokeWidth={2}
          strokeDasharray="6,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        />
        <text x={households.x - boxWidth/2 - 25} y={households.y - 15} fill={goldColor} fontSize="10" textAnchor="middle">S</text>

        {/* Investment (Injection) - Financial Sector to Firms */}
        <motion.path
          d={`M ${firms.x + boxWidth/2 + 50} ${firms.y} L ${firms.x + boxWidth/2} ${firms.y}`}
          fill="none"
          stroke={goldColor}
          strokeWidth={2}
          markerEnd="url(#arrowCF)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        />
        <text x={firms.x + boxWidth/2 + 25} y={firms.y - 15} fill={goldColor} fontSize="10" textAnchor="middle">I</text>

        {/* Legend Box */}
        <motion.rect
          x={20}
          y={420}
          width={160}
          height={70}
          rx={6}
          fill="hsl(222, 47%, 6%)"
          stroke="hsl(220, 14%, 30%)"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />
        <text x={30} y={440} fill="hsl(220, 14%, 75%)" fontSize="10" fontWeight="600">Key:</text>
        <line x1={30} y1={455} x2={50} y2={455} stroke="hsl(220, 14%, 75%)" strokeWidth={2} />
        <text x={55} y={458} fill="hsl(220, 14%, 60%)" fontSize="9">Injections (I, G, X)</text>
        <line x1={30} y1={475} x2={50} y2={475} stroke="hsl(220, 14%, 75%)" strokeWidth={2} strokeDasharray="4,3" />
        <text x={55} y={478} fill="hsl(220, 14%, 60%)" fontSize="9">Leakages (S, T, M)</text>
      </svg>
    </div>
  );
};

export default CircularFlowDiagram;
