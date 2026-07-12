import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

/**
 * Interactive diagram showing the critical distinction between:
 * - Movement ALONG the curve (price change only)
 * - SHIFT of the curve (non-price determinants)
 * Exam Standard
 */
const MovementShiftDiagram =  => {
 const [activeDemo, setActiveDemo] = useState<'none' | 'movement' | 'shift'>('none');
 
 const width = 500;
 const height = 380;
 const margin = { top: 40, right: 50, bottom: 60, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Colors
 const demandColor = 'hsl(185, 100%, 50%)';
 const shiftedDemandColor = 'hsl(185, 100%, 70%)';
 const movementColor = 'hsl(45, 93%, 55%)';
 const axisColor = 'hsl(220, 14%, 75%)';
 const gridColor = 'hsl(220, 14%, 20%)';

 // Scale functions
 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 // Original demand curve points
 const demandPath = `M ${xScale(10)} ${yScale(85)} L ${xScale(90)} ${yScale(15)}`;
 
 // Shifted demand curve (rightward)
 const shiftedDemandPath = `M ${xScale(25)} ${yScale(85)} L ${xScale(100)} ${yScale(25)}`;

 // Points for movement demonstration
 const pointA = { x: 30, y: 70 }; // Higher price, lower quantity
 const pointB = { x: 60, y: 45 }; // Lower price, higher quantity (on same curve)
 
 // Points for shift demonstration
 const pointC = { x: 50, y: 55 }; // Original equilibrium
 const pointD = { x: 65, y: 55 }; // Same price, higher quantity (on new curve)

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1, ease: "easeInOut" as const }
 }
 };

 return (
 <div className="w-full">
 <h4 className="text-center text-silver-bright font-serif text-lg mb-4">
 Movement Along vs. Shift of the Demand Curve
 </h4>
 
 {/* Control buttons */}
 <div className="flex flex-wrap justify-center gap-3 mb-6">
 <Button
 variant={activeDemo === 'movement' ? 'default': 'outline'}
 size="sm"
 onClick={ => setActiveDemo(activeDemo === 'movement' ? 'none': 'movement')}
 className="gap-2"
 >
 <span className="w-3 h-3 rounded-full bg-amber-400" />
 Movement (Price Change)
 </Button>
 <Button
 variant={activeDemo === 'shift' ? 'default': 'outline'}
 size="sm"
 onClick={ => setActiveDemo(activeDemo === 'shift' ? 'none': 'shift')}
 className="gap-2"
 >
 <span className="w-3 h-3 rounded-full bg-cyan-300" />
 Shift (Non-Price Factor)
 </Button>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 {/* Grid */}
 <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
 {[0, 1, 2, 3, 4, 5].map((i) => (
 <line 
 key={`h-${i}`}
 x1={margin.left} 
 y1={margin.top + (chartHeight / 5) * i} 
 x2={margin.left + chartWidth} 
 y2={margin.top + (chartHeight / 5) * i}
 />
 ))}
 {[0, 1, 2, 3, 4, 5].map((i) => (
 <line 
 key={`v-${i}`}
 x1={margin.left + (chartWidth / 5) * i} 
 y1={margin.top} 
 x2={margin.left + (chartWidth / 5) * i} 
 y2={margin.top + chartHeight}
 />
 ))}
 </g>

 {/* Axes */}
 <defs>
 <marker id="arrowhead-ms" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
 </marker>
 <marker id="arrow-movement" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill={movementColor} />
 </marker>
 </defs>
 
 <line 
 x1={margin.left} y1={margin.top + chartHeight} 
 x2={margin.left + chartWidth} y2={margin.top + chartHeight}
 stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-ms)"
 />
 <line 
 x1={margin.left} y1={margin.top + chartHeight} 
 x2={margin.left} y2={margin.top - 10}
 stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-ms)"
 />

 {/* Axis labels */}
 <text x={margin.left + chartWidth / 2} y={height - 15} fill={axisColor} fontSize="13" fontFamily="serif" textAnchor="middle">
 Quantity Demanded (Qd)
 </text>
 <text x={margin.left - 40} y={margin.top + chartHeight / 2} fill={axisColor} fontSize="13" fontFamily="serif" textAnchor="middle" transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`}>
 Price (P)
 </text>
 <text x={margin.left - 8} y={margin.top + chartHeight + 16} fill={axisColor} fontSize="11">0</text>

 {/* Original Demand Curve */}
 <motion.path
 d={demandPath}
 fill="none"
 stroke={demandColor}
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 />
 <text x={xScale(92)} y={yScale(12)} fill={demandColor} fontSize="14" fontWeight="600">D₀</text>

 {/* Shifted Demand Curve (only when shift demo is active) */}
 {activeDemo === 'shift' && (
 <>
 <motion.path
 d={shiftedDemandPath}
 fill="none"
 stroke={shiftedDemandColor}
 strokeWidth="3"
 strokeLinecap="round"
 strokeDasharray="8,4"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 />
 <motion.text 
 x={xScale(100)} 
 y={yScale(22)} 
 fill={shiftedDemandColor} 
 fontSize="14" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 >
 D₁
 </motion.text>
 
 {/* Shift arrow */}
 <motion.path
 d={`M ${xScale(55)} ${yScale(48)} L ${xScale(72)} ${yScale(48)}`}
 fill="none"
 stroke={shiftedDemandColor}
 strokeWidth="3"
 markerEnd="url(#arrow-movement)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ delay: 0.6, duration: 0.4 }}
 />
 
 {/* Point C on original curve */}
 <motion.circle
 cx={xScale(pointC.x)}
 cy={yScale(pointC.y)}
 r="6"
 fill={demandColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.3 }}
 />
 <motion.text 
 x={xScale(pointC.x) - 14} 
 y={yScale(pointC.y) - 10} 
 fill={demandColor} 
 fontSize="12" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.4 }}
 >
 A
 </motion.text>
 
 {/* Point D on shifted curve (same price, more quantity) */}
 <motion.circle
 cx={xScale(pointD.x)}
 cy={yScale(pointD.y)}
 r="6"
 fill={shiftedDemandColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.7 }}
 />
 <motion.text 
 x={xScale(pointD.x) + 10} 
 y={yScale(pointD.y) - 10} 
 fill={shiftedDemandColor} 
 fontSize="12" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.8 }}
 >
 B
 </motion.text>
 
 {/* Dashed lines showing same price level */}
 <motion.line
 x1={margin.left}
 y1={yScale(pointC.y)}
 x2={xScale(pointD.x)}
 y2={yScale(pointD.y)}
 stroke={axisColor}
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 0.9, duration: 0.4 }}
 />
 </>
 )}

 {/* Movement demonstration */}
 {activeDemo === 'movement' && (
 <>
 {/* Point A - high price */}
 <motion.circle
 cx={xScale(pointA.x)}
 cy={yScale(pointA.y)}
 r="6"
 fill={movementColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.2 }}
 />
 <motion.text 
 x={xScale(pointA.x) + 10} 
 y={yScale(pointA.y) - 8} 
 fill={movementColor} 
 fontSize="12" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.3 }}
 >
 A (P₁)
 </motion.text>
 
 {/* Point B - low price */}
 <motion.circle
 cx={xScale(pointB.x)}
 cy={yScale(pointB.y)}
 r="6"
 fill={movementColor}
 stroke="white"
 strokeWidth="2"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.5 }}
 />
 <motion.text 
 x={xScale(pointB.x) + 10} 
 y={yScale(pointB.y) - 8} 
 fill={movementColor} 
 fontSize="12" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.6 }}
 >
 B (P₂)
 </motion.text>
 
 {/* Curved arrow along the demand curve */}
 <motion.path
 d={`M ${xScale(pointA.x + 5)} ${yScale(pointA.y - 3)} 
 Q ${xScale(45)} ${yScale(55)}, 
 ${xScale(pointB.x - 5)} ${yScale(pointB.y + 3)}`}
 fill="none"
 stroke={movementColor}
 strokeWidth="2.5"
 strokeDasharray="6,3"
 markerEnd="url(#arrow-movement)"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: 1, opacity: 1 }}
 transition={{ delay: 0.7, duration: 0.6 }}
 />
 
 {/* Dashed lines to axes */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.7 }}
 transition={{ delay: 0.4 }}
 >
 <line
 x1={margin.left}
 y1={yScale(pointA.y)}
 x2={xScale(pointA.x)}
 y2={yScale(pointA.y)}
 stroke={movementColor}
 strokeWidth="1.5"
 strokeDasharray="4,3"
 />
 <line
 x1={xScale(pointA.x)}
 y1={yScale(pointA.y)}
 x2={xScale(pointA.x)}
 y2={margin.top + chartHeight}
 stroke={movementColor}
 strokeWidth="1.5"
 strokeDasharray="4,3"
 />
 <line
 x1={margin.left}
 y1={yScale(pointB.y)}
 x2={xScale(pointB.x)}
 y2={yScale(pointB.y)}
 stroke={movementColor}
 strokeWidth="1.5"
 strokeDasharray="4,3"
 />
 <line
 x1={xScale(pointB.x)}
 y1={yScale(pointB.y)}
 x2={xScale(pointB.x)}
 y2={margin.top + chartHeight}
 stroke={movementColor}
 strokeWidth="1.5"
 strokeDasharray="4,3"
 />
 </motion.g>
 
 {/* Axis labels */}
 <motion.text 
 x={margin.left - 14} 
 y={yScale(pointA.y) + 4} 
 fill={movementColor} 
 fontSize="11" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 >
 P₁
 </motion.text>
 <motion.text 
 x={margin.left - 14} 
 y={yScale(pointB.y) + 4} 
 fill={movementColor} 
 fontSize="11" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.7 }}
 >
 P₂
 </motion.text>
 <motion.text 
 x={xScale(pointA.x)} 
 y={margin.top + chartHeight + 16} 
 fill={movementColor} 
 fontSize="11" 
 fontWeight="600"
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 >
 Q₁
 </motion.text>
 <motion.text 
 x={xScale(pointB.x)} 
 y={margin.top + chartHeight + 16} 
 fill={movementColor} 
 fontSize="11" 
 fontWeight="600"
 textAnchor="middle"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.7 }}
 >
 Q₂
 </motion.text>
 </>
 )}
 </svg>

 {/* Explanation boxes */}
 <div className="grid md:grid-cols-2 gap-4 mt-6">
 <motion.div 
 className={`p-4 rounded-lg border transition-all ${
 activeDemo === 'movement' 
 ? 'bg-amber-500/15 border-amber-500/40': 'bg-muted/30 border-muted/50'
 }`}
 animate={{ scale: activeDemo === 'movement' ? 1.02: 1 }}
 >
 <h5 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-amber-400" />
 Movement Along the Curve
 </h5>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>• <strong>Cause:</strong> Change in the good's <em>own price</em></li>
 <li>• <strong>Effect:</strong> Contraction (↑P) or Extension (↓P)</li>
 <li>• <strong>Terminology:</strong> "Change in quantity demanded"</li>
 </ul>
 </motion.div>

 <motion.div 
 className={`p-4 rounded-lg border transition-all ${
 activeDemo === 'shift' 
 ? 'bg-cyan-500/15 border-cyan-500/40': 'bg-muted/30 border-muted/50'
 }`}
 animate={{ scale: activeDemo === 'shift' ? 1.02: 1 }}
 >
 <h5 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-cyan-400" />
 Shift of the Curve
 </h5>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>• <strong>Cause:</strong> Non-price determinants (income, tastes, etc.)</li>
 <li>• <strong>Effect:</strong> Increase (→) or Decrease (←)</li>
 <li>• <strong>Terminology:</strong> "Change in demand"</li>
 </ul>
 </motion.div>
 </div>
 </div>
 );
};

export default MovementShiftDiagram;
