import { motion } from 'framer-motion';

type DiagramType = 'yed-normal' | 'yed-inferior' | 'xed-substitutes' | 'xed-complements';

interface YEDXEDDiagramProps {
 type: DiagramType;
 title?: string;
}

const YEDXEDDiagram = ({ type, title }: YEDXEDDiagramProps) => {
 const width = 280;
 const height = 220;
 const padding = 45;
 const graphWidth = width - padding * 2;
 const graphHeight = height - padding * 2;
 
 const positiveColor = '#4CAF50';
 const negativeColor = '#F44336';
 const axisColor = '#94A3B8';
 const gridColor = '#334155';

 const getConfig =  => {
 switch (type) {
 case 'yed-normal':
 return {
 color: positiveColor,
 path: `M ${padding + 20} ${padding + graphHeight - 30} L ${padding + graphWidth - 20} ${padding + 30}`,
 xLabel: 'Quantity Demanded',
 yLabel: 'Income (Y)',
 curveLabel: 'Normal Good',
 notation: 'YED > 0'
 };
 case 'yed-inferior':
 return {
 color: negativeColor,
 path: `M ${padding + 20} ${padding + 30} L ${padding + graphWidth - 20} ${padding + graphHeight - 30}`,
 xLabel: 'Quantity Demanded',
 yLabel: 'Income (Y)',
 curveLabel: 'Inferior Good',
 notation: 'YED < 0'
 };
 case 'xed-substitutes':
 return {
 color: positiveColor,
 path: `M ${padding + 20} ${padding + graphHeight - 30} L ${padding + graphWidth - 20} ${padding + 30}`,
 xLabel: 'Qd of Good A',
 yLabel: 'Price of Good B',
 curveLabel: 'Substitutes',
 notation: 'XED > 0'
 };
 case 'xed-complements':
 return {
 color: negativeColor,
 path: `M ${padding + 20} ${padding + 30} L ${padding + graphWidth - 20} ${padding + graphHeight - 30}`,
 xLabel: 'Qd of Good A',
 yLabel: 'Price of Good B',
 curveLabel: 'Complements',
 notation: 'XED < 0'
 };
 default:
 return {
 color: axisColor,
 path: '',
 xLabel: 'Q',
 yLabel: 'Y',
 curveLabel: '',
 notation: ''
 };
 }
 };

 const config = getConfig;

 const getDisplayTitle =  => {
 if (title) return title;
 return config.curveLabel;
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
 <div className="w-full">
 <h4 className="text-center text-silver-bright font-serif text-base mb-2">{getDisplayTitle}</h4>
 <svg 
 viewBox={`0 0 ${width} ${height}`} 
 className="w-full max-w-xs mx-auto"
 style={{ minHeight: '180px' }}
 >
 {/* Grid lines */}
 {[...Array(3)].map((_, i) => (
 <g key={`grid-${i}`}>
 <line 
 x1={padding} 
 y1={padding + (graphHeight / 3) * (i + 1)} 
 x2={padding + graphWidth} 
 y2={padding + (graphHeight / 3) * (i + 1)}
 stroke={gridColor}
 strokeWidth="0.5"
 strokeDasharray="3,3"
 />
 <line 
 x1={padding + (graphWidth / 3) * (i + 1)} 
 y1={padding} 
 x2={padding + (graphWidth / 3) * (i + 1)} 
 y2={padding + graphHeight}
 stroke={gridColor}
 strokeWidth="0.5"
 strokeDasharray="3,3"
 />
 </g>
 ))}

 {/* Axes */}
 <defs>
 <marker id={`arrowhead-yed-${type}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill={axisColor} />
 </marker>
 </defs>
 
 <line 
 x1={padding} y1={padding + graphHeight} 
 x2={padding + graphWidth + 8} y2={padding + graphHeight}
 stroke={axisColor} strokeWidth="1.5" markerEnd={`url(#arrowhead-yed-${type})`}
 />
 <line 
 x1={padding} y1={padding + graphHeight} 
 x2={padding} y2={padding - 8}
 stroke={axisColor} strokeWidth="1.5" markerEnd={`url(#arrowhead-yed-${type})`}
 />

 {/* Axis labels */}
 <text x={padding + graphWidth / 2} y={height - 5} fill={axisColor} fontSize="9" textAnchor="middle">
 {config.xLabel}
 </text>
 <text 
 x={12} 
 y={padding + graphHeight / 2} 
 fill={axisColor} 
 fontSize="9" 
 textAnchor="middle"
 transform={`rotate(-90, 12, ${padding + graphHeight / 2})`}
 >
 {config.yLabel}
 </text>

 {/* Relationship curve */}
 <motion.path
 d={config.path}
 fill="none"
 stroke={config.color}
 strokeWidth="2.5"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 />

 {/* Elasticity notation */}
 <motion.text
 x={width / 2}
 y={padding + 15}
 fill={config.color}
 fontSize="12"
 fontWeight="600"
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.8 }}
 >
 {config.notation}
 </motion.text>

 {/* Direction arrows */}
 {(type === 'yed-normal' || type === 'xed-substitutes') && (
 <motion.text
 x={padding + graphWidth - 35}
 y={padding + 50}
 fill={positiveColor}
 fontSize="14"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1 }}
 >
 ↗
 </motion.text>
 )}
 {(type === 'yed-inferior' || type === 'xed-complements') && (
 <motion.text
 x={padding + graphWidth - 35}
 y={padding + graphHeight - 35}
 fill={negativeColor}
 fontSize="14"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1 }}
 >
 ↘
 </motion.text>
 )}
 </svg>
 </div>
 );
};

// Component to display YED diagrams
const AllYEDDiagrams =  => {
 return (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="glass-card p-4 rounded-xl">
 <YEDXEDDiagram type="yed-normal" />
 <p className="text-xs text-muted-foreground text-center mt-2">
 Income ↑ → Demand ↑ (same direction)
 </p>
 </div>
 <div className="glass-card p-4 rounded-xl">
 <YEDXEDDiagram type="yed-inferior" />
 <p className="text-xs text-muted-foreground text-center mt-2">
 Income ↑ → Demand ↓ (opposite direction)
 </p>
 </div>
 </div>
 );
};

// Component to display XED diagrams
const AllXEDDiagrams =  => {
 return (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="glass-card p-4 rounded-xl">
 <YEDXEDDiagram type="xed-substitutes" />
 <p className="text-xs text-muted-foreground text-center mt-2">
 Price of B ↑ → Demand for A ↑
 </p>
 </div>
 <div className="glass-card p-4 rounded-xl">
 <YEDXEDDiagram type="xed-complements" />
 <p className="text-xs text-muted-foreground text-center mt-2">
 Price of B ↑ → Demand for A ↓
 </p>
 </div>
 </div>
 );
};

export { YEDXEDDiagram, AllYEDDiagrams, AllXEDDiagrams };
export default YEDXEDDiagram;
