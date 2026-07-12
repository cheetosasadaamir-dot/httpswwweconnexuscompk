import { motion } from 'framer-motion';
import { useState } from 'react';

interface DemandSupplyEquilibriumDiagramProps {
 title?: string;
 showShift?: 'demand-increase' | 'demand-decrease' | 'supply-increase' | 'supply-decrease' | 'none';
}

const DemandSupplyEquilibriumDiagram = ({ 
 title = "Market Equilibrium", 
 showShift = 'none' 
}: DemandSupplyEquilibriumDiagramProps) => {
 const [hoveredElement, setHoveredElement] = useState<string | null>(null);
 
 // SVG dimensions
 const width = 400;
 const height = 320;
 const padding = 50;
 const graphWidth = width - padding * 2;
 const graphHeight = height - padding * 2;
 
 // Colors
 const demandColor = '#00E5FF';
 const supplyColor = '#FF4081';
 const shiftedDemandColor = '#00B8D4';
 const shiftedSupplyColor = '#F50057';
 const equilibriumColor = '#FFD700';
 const axisColor = '#94A3B8';
 const gridColor = '#334155';
 const surplusColor = '#FF9800';
 const shortageColor = '#4CAF50';

 // Calculate equilibrium points
 const eq1 = { x: padding + graphWidth * 0.5, y: padding + graphHeight * 0.5 };
 
 // Shifted equilibrium based on shift type
 const getShiftedEquilibrium =  => {
 switch (showShift) {
 case 'demand-increase':
 return { x: padding + graphWidth * 0.6, y: padding + graphHeight * 0.4 };
 case 'demand-decrease':
 return { x: padding + graphWidth * 0.4, y: padding + graphHeight * 0.6 };
 case 'supply-increase':
 return { x: padding + graphWidth * 0.6, y: padding + graphHeight * 0.6 };
 case 'supply-decrease':
 return { x: padding + graphWidth * 0.4, y: padding + graphHeight * 0.4 };
 default:
 return eq1;
 }
 };

 const eq2 = getShiftedEquilibrium;

 // Curve paths
 const demandPath = `M ${padding + 20} ${padding + 30} Q ${padding + graphWidth * 0.5} ${padding + graphHeight * 0.5} ${padding + graphWidth - 20} ${padding + graphHeight - 30}`;
 const supplyPath = `M ${padding + 20} ${padding + graphHeight - 30} Q ${padding + graphWidth * 0.5} ${padding + graphHeight * 0.5} ${padding + graphWidth - 20} ${padding + 30}`;
 
 // Shifted curves
 const shiftedDemandIncrease = `M ${padding + 50} ${padding + 30} Q ${padding + graphWidth * 0.6} ${padding + graphHeight * 0.4} ${padding + graphWidth - 10} ${padding + graphHeight - 50}`;
 const shiftedDemandDecrease = `M ${padding - 10} ${padding + 50} Q ${padding + graphWidth * 0.4} ${padding + graphHeight * 0.6} ${padding + graphWidth - 50} ${padding + graphHeight - 10}`;
 const shiftedSupplyIncrease = `M ${padding + 50} ${padding + graphHeight - 10} Q ${padding + graphWidth * 0.6} ${padding + graphHeight * 0.5} ${padding + graphWidth - 10} ${padding + 50}`;
 const shiftedSupplyDecrease = `M ${padding - 10} ${padding + graphHeight - 50} Q ${padding + graphWidth * 0.4} ${padding + graphHeight * 0.5} ${padding + graphWidth - 50} ${padding + 10}`;

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
 className="w-full max-w-md mx-auto"
 style={{ minHeight: '320px' }}
 >
 {/* Grid lines */}
 {[...Array(5)].map((_, i) => (
 <g key={`grid-${i}`}>
 <line 
 x1={padding} 
 y1={padding + (graphHeight / 5) * (i + 1)} 
 x2={padding + graphWidth} 
 y2={padding + (graphHeight / 5) * (i + 1)}
 stroke={gridColor}
 strokeWidth="0.5"
 strokeDasharray="4,4"
 />
 <line 
 x1={padding + (graphWidth / 5) * (i + 1)} 
 y1={padding} 
 x2={padding + (graphWidth / 5) * (i + 1)} 
 y2={padding + graphHeight}
 stroke={gridColor}
 strokeWidth="0.5"
 strokeDasharray="4,4"
 />
 </g>
 ))}

 {/* Axes */}
 <defs>
 <marker id="arrowhead-eq" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
 </marker>
 </defs>
 
 <line 
 x1={padding} y1={padding + graphHeight} 
 x2={padding + graphWidth + 10} y2={padding + graphHeight}
 stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-eq)"
 />
 <line 
 x1={padding} y1={padding + graphHeight} 
 x2={padding} y2={padding - 10}
 stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-eq)"
 />

 {/* Axis labels */}
 <text x={padding + graphWidth + 15} y={padding + graphHeight + 5} fill={axisColor} fontSize="14" fontWeight="600">Q</text>
 <text x={padding - 5} y={padding - 15} fill={axisColor} fontSize="14" fontWeight="600" textAnchor="middle">P</text>
 <text x={padding - 8} y={padding + graphHeight + 15} fill={axisColor} fontSize="12">0</text>

 {/* Original Demand curve */}
 <motion.path
 d={demandPath}
 fill="none"
 stroke={demandColor}
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 onMouseEnter={ => setHoveredElement('demand')}
 onMouseLeave={ => setHoveredElement(null)}
 style={{ filter: hoveredElement === 'demand' ? 'brightness(1.3)': 'none' }}
 />
 <text x={padding + graphWidth - 10} y={padding + graphHeight - 15} fill={demandColor} fontSize="14" fontWeight="600">D</text>

 {/* Original Supply curve */}
 <motion.path
 d={supplyPath}
 fill="none"
 stroke={supplyColor}
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 onMouseEnter={ => setHoveredElement('supply')}
 onMouseLeave={ => setHoveredElement(null)}
 style={{ filter: hoveredElement === 'supply' ? 'brightness(1.3)': 'none' }}
 />
 <text x={padding + graphWidth - 10} y={padding + 45} fill={supplyColor} fontSize="14" fontWeight="600">S</text>

 {/* Shifted curves based on shift type */}
 {showShift === 'demand-increase' && (
 <>
 <motion.path
 d={shiftedDemandIncrease}
 fill="none"
 stroke={shiftedDemandColor}
 strokeWidth="2.5"
 strokeDasharray="8,4"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 style={{ transitionDelay: '0.5s' }}
 />
 <text x={padding + graphWidth} y={padding + graphHeight - 35} fill={shiftedDemandColor} fontSize="13" fontWeight="600">D₁</text>
 </>
 )}

 {showShift === 'demand-decrease' && (
 <>
 <motion.path
 d={shiftedDemandDecrease}
 fill="none"
 stroke={shiftedDemandColor}
 strokeWidth="2.5"
 strokeDasharray="8,4"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 />
 <text x={padding + graphWidth - 40} y={padding + graphHeight + 5} fill={shiftedDemandColor} fontSize="13" fontWeight="600">D₁</text>
 </>
 )}

 {showShift === 'supply-increase' && (
 <>
 <motion.path
 d={shiftedSupplyIncrease}
 fill="none"
 stroke={shiftedSupplyColor}
 strokeWidth="2.5"
 strokeDasharray="8,4"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 />
 <text x={padding + graphWidth} y={padding + 65} fill={shiftedSupplyColor} fontSize="13" fontWeight="600">S₁</text>
 </>
 )}

 {showShift === 'supply-decrease' && (
 <>
 <motion.path
 d={shiftedSupplyDecrease}
 fill="none"
 stroke={shiftedSupplyColor}
 strokeWidth="2.5"
 strokeDasharray="8,4"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 />
 <text x={padding + graphWidth - 40} y={padding + 25} fill={shiftedSupplyColor} fontSize="13" fontWeight="600">S₁</text>
 </>
 )}

 {/* Original Equilibrium point */}
 <motion.circle
 cx={eq1.x}
 cy={eq1.y}
 r="6"
 fill={equilibriumColor}
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 1.2, duration: 0.3 }}
 />
 <text x={eq1.x + 12} y={eq1.y - 8} fill={equilibriumColor} fontSize="12" fontWeight="600">E₁</text>

 {/* Dashed lines to axes for E1 */}
 <motion.line
 x1={eq1.x} y1={eq1.y}
 x2={eq1.x} y2={padding + graphHeight}
 stroke={equilibriumColor}
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 1.4, duration: 0.4 }}
 />
 <motion.line
 x1={eq1.x} y1={eq1.y}
 x2={padding} y2={eq1.y}
 stroke={equilibriumColor}
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 1.4, duration: 0.4 }}
 />
 <text x={eq1.x} y={padding + graphHeight + 18} fill={equilibriumColor} fontSize="11" textAnchor="middle">Q₁</text>
 <text x={padding - 18} y={eq1.y + 4} fill={equilibriumColor} fontSize="11">P₁</text>

 {/* New equilibrium for shifts */}
 {showShift !== 'none' && (
 <>
 <motion.circle
 cx={eq2.x}
 cy={eq2.y}
 r="6"
 fill="#4CAF50"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 1.6, duration: 0.3 }}
 />
 <text x={eq2.x + 12} y={eq2.y - 8} fill="#4CAF50" fontSize="12" fontWeight="600">E₂</text>
 
 <motion.line
 x1={eq2.x} y1={eq2.y}
 x2={eq2.x} y2={padding + graphHeight}
 stroke="#4CAF50"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 1.8, duration: 0.4 }}
 />
 <motion.line
 x1={eq2.x} y1={eq2.y}
 x2={padding} y2={eq2.y}
 stroke="#4CAF50"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 1.8, duration: 0.4 }}
 />
 <text x={eq2.x} y={padding + graphHeight + 18} fill="#4CAF50" fontSize="11" textAnchor="middle">Q₂</text>
 <text x={padding - 18} y={eq2.y + 4} fill="#4CAF50" fontSize="11">P₂</text>
 </>
 )}
 </svg>

 {/* Legend */}
 <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
 <div className="flex items-center gap-2">
 <div className="w-4 h-1 rounded" style={{ backgroundColor: demandColor }} />
 <span className="text-muted-foreground">Demand (D)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-1 rounded" style={{ backgroundColor: supplyColor }} />
 <span className="text-muted-foreground">Supply (S)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: equilibriumColor }} />
 <span className="text-muted-foreground">Equilibrium</span>
 </div>
 </div>
 </div>
 );
};

export default DemandSupplyEquilibriumDiagram;
