import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ExchangeRateShiftsDiagram =  => {
 const [showShift, setShowShift] = useState<'none' | 'demand-increase' | 'demand-decrease' | 'supply-increase' | 'supply-decrease'>('none');
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
 { threshold: 0.2 }
 );
 if (containerRef.current) observer.observe(containerRef.current);
 return  => observer.disconnect;
 }, []);

 const width = 500, height = 380;
 const margin = { top: 40, right: 40, bottom: 60, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" as const } }
 };

 return (
 <div ref={containerRef} className="glass-card p-4 my-4">
 <div className="flex justify-between items-center mb-3">
 <h3 className="font-serif text-lg text-gradient">Exchange Rate Determination: Demand & Supply Shifts</h3>
 </div>

 <div className="flex flex-wrap gap-2 mb-3">
 <button
 onClick={ => setShowShift('demand-increase')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${showShift === 'demand-increase' ? 'bg-primary text-primary-foreground': 'border-primary/30 hover:bg-primary/10'}`}
 >
 ↑ Demand (Appreciation)
 </button>
 <button
 onClick={ => setShowShift('demand-decrease')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${showShift === 'demand-decrease' ? 'bg-destructive text-destructive-foreground': 'border-destructive/30 hover:bg-destructive/10'}`}
 >
 ↓ Demand (Depreciation)
 </button>
 <button
 onClick={ => setShowShift('supply-increase')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${showShift === 'supply-increase' ? 'bg-destructive text-destructive-foreground': 'border-destructive/30 hover:bg-destructive/10'}`}
 >
 ↑ Supply (Depreciation)
 </button>
 <button
 onClick={ => setShowShift('supply-decrease')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${showShift === 'supply-decrease' ? 'bg-primary text-primary-foreground': 'border-primary/30 hover:bg-primary/10'}`}
 >
 ↓ Supply (Appreciation)
 </button>
 <button
 onClick={ => setShowShift('none')}
 className="px-3 py-1 text-xs rounded-full border border-muted-foreground/30 hover:bg-muted/30"
 >
 Reset
 </button>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 <defs>
 <marker id="arrow-er" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
 </marker>
 <pattern id="gridER" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted))" strokeWidth="0.5" opacity="0.3" />
 </pattern>
 </defs>

 <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#gridER)" />

 {/* Axes */}
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-er)" />
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-er)" />

 {/* Axis Labels */}
 <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">Quantity of Currency</text>
 <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Exchange Rate (e)</text>

 {/* Original Supply Curve (upward sloping) */}
 <motion.path
 d={`M ${margin.left + 30} ${margin.top + chartHeight - 40} Q ${margin.left + chartWidth / 2} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 30} ${margin.top + 40}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text x={margin.left + chartWidth - 20} y={margin.top + 35} fill="hsl(var(--cambridge-orange))" fontSize="14" fontWeight="700">S₀</text>

 {/* Original Demand Curve (downward sloping) */}
 <motion.path
 d={`M ${margin.left + 30} ${margin.top + 40} Q ${margin.left + chartWidth / 2} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 30} ${margin.top + chartHeight - 40}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 transition={{ delay: 0.2 }}
 />
 <text x={margin.left + chartWidth - 20} y={margin.top + chartHeight - 35} fill="hsl(var(--cambridge-cyan))" fontSize="14" fontWeight="700">D₀</text>

 {/* Original Equilibrium */}
 <motion.circle
 cx={margin.left + chartWidth / 2}
 cy={margin.top + chartHeight / 2}
 r="6"
 fill="hsl(var(--foreground))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: {}}
 transition={{ delay: 0.6 }}
 />

 {/* Dashed lines to original equilibrium */}
 <motion.line
 x1={margin.left}
 y1={margin.top + chartHeight / 2}
 x2={margin.left + chartWidth / 2}
 y2={margin.top + chartHeight / 2}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 strokeDasharray="5,5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 0.7 }}
 />
 <motion.line
 x1={margin.left + chartWidth / 2}
 y1={margin.top + chartHeight / 2}
 x2={margin.left + chartWidth / 2}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 strokeDasharray="5,5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ delay: 0.7 }}
 />

 <text x={margin.left - 15} y={margin.top + chartHeight / 2 + 4} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">e₀</text>
 <text x={margin.left + chartWidth / 2} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q₀</text>

 {/* Demand Increase Shift */}
 {showShift === 'demand-increase' && (
 <>
 <motion.path
 d={`M ${margin.left + 70} ${margin.top + 40} Q ${margin.left + chartWidth / 2 + 40} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 10} ${margin.top + chartHeight - 60}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3"
 strokeDasharray="8,4"
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 />
 <motion.text x={margin.left + chartWidth} y={margin.top + chartHeight - 55} fill="hsl(var(--cambridge-cyan))" fontSize="14" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>D₁</motion.text>
 
 <motion.circle cx={margin.left + chartWidth / 2 + 30} cy={margin.top + chartHeight / 2 - 30} r="6" fill="hsl(var(--cambridge-green))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
 <motion.line x1={margin.left} y1={margin.top + chartHeight / 2 - 30} x2={margin.left + chartWidth / 2 + 30} y2={margin.top + chartHeight / 2 - 30} stroke="hsl(var(--cambridge-cyan))" strokeWidth="1.5" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />
 <text x={margin.left - 15} y={margin.top + chartHeight / 2 - 26} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="700">e₁</text>
 
 <motion.text x={width / 2} y={margin.top - 10} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="13" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Currency Appreciates (e₀ → e₁)</motion.text>
 </>
 )}

 {/* Demand Decrease Shift */}
 {showShift === 'demand-decrease' && (
 <>
 <motion.path
 d={`M ${margin.left + 10} ${margin.top + 60} Q ${margin.left + chartWidth / 2 - 40} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 70} ${margin.top + chartHeight - 40}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3"
 strokeDasharray="8,4"
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 />
 <motion.text x={margin.left + chartWidth - 60} y={margin.top + chartHeight - 35} fill="hsl(var(--cambridge-cyan))" fontSize="14" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>D₁</motion.text>
 
 <motion.circle cx={margin.left + chartWidth / 2 - 30} cy={margin.top + chartHeight / 2 + 30} r="6" fill="hsl(var(--destructive))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
 <motion.line x1={margin.left} y1={margin.top + chartHeight / 2 + 30} x2={margin.left + chartWidth / 2 - 30} y2={margin.top + chartHeight / 2 + 30} stroke="hsl(var(--destructive))" strokeWidth="1.5" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />
 <text x={margin.left - 15} y={margin.top + chartHeight / 2 + 34} fill="hsl(var(--destructive))" fontSize="11" fontWeight="700">e₁</text>
 
 <motion.text x={width / 2} y={margin.top - 10} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="13" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Currency Depreciates (e₀ → e₁)</motion.text>
 </>
 )}

 {/* Supply Increase Shift */}
 {showShift === 'supply-increase' && (
 <>
 <motion.path
 d={`M ${margin.left + 70} ${margin.top + chartHeight - 40} Q ${margin.left + chartWidth / 2 + 40} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 10} ${margin.top + 60}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="3"
 strokeDasharray="8,4"
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 />
 <motion.text x={margin.left + chartWidth} y={margin.top + 55} fill="hsl(var(--cambridge-orange))" fontSize="14" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>S₁</motion.text>
 
 <motion.circle cx={margin.left + chartWidth / 2 + 30} cy={margin.top + chartHeight / 2 + 30} r="6" fill="hsl(var(--destructive))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
 <motion.line x1={margin.left} y1={margin.top + chartHeight / 2 + 30} x2={margin.left + chartWidth / 2 + 30} y2={margin.top + chartHeight / 2 + 30} stroke="hsl(var(--destructive))" strokeWidth="1.5" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />
 <text x={margin.left - 15} y={margin.top + chartHeight / 2 + 34} fill="hsl(var(--destructive))" fontSize="11" fontWeight="700">e₁</text>
 
 <motion.text x={width / 2} y={margin.top - 10} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="13" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Currency Depreciates (e₀ → e₁)</motion.text>
 </>
 )}

 {/* Supply Decrease Shift */}
 {showShift === 'supply-decrease' && (
 <>
 <motion.path
 d={`M ${margin.left + 10} ${margin.top + chartHeight - 60} Q ${margin.left + chartWidth / 2 - 40} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 70} ${margin.top + 40}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="3"
 strokeDasharray="8,4"
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 />
 <motion.text x={margin.left + chartWidth - 60} y={margin.top + 35} fill="hsl(var(--cambridge-orange))" fontSize="14" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>S₁</motion.text>
 
 <motion.circle cx={margin.left + chartWidth / 2 - 30} cy={margin.top + chartHeight / 2 - 30} r="6" fill="hsl(var(--cambridge-green))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
 <motion.line x1={margin.left} y1={margin.top + chartHeight / 2 - 30} x2={margin.left + chartWidth / 2 - 30} y2={margin.top + chartHeight / 2 - 30} stroke="hsl(var(--cambridge-cyan))" strokeWidth="1.5" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4 }} />
 <text x={margin.left - 15} y={margin.top + chartHeight / 2 - 26} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="700">e₁</text>
 
 <motion.text x={width / 2} y={margin.top - 10} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="13" fontWeight="700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Currency Appreciates (e₀ → e₁)</motion.text>
 </>
 )}
 </svg>

 {/* Legend */}
 <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-border justify-center text-xs">
 <div className="flex items-center gap-1.5">
 <div className="w-3 h-0.5 bg-[hsl(var(--cambridge-cyan))]"></div>
 <span>Demand (D)</span>
 </div>
 <div className="flex items-center gap-1.5">
 <div className="w-3 h-0.5 bg-[hsl(var(--cambridge-orange))]"></div>
 <span>Supply (S)</span>
 </div>
 <div className="flex items-center gap-1.5">
 <div className="w-3 h-0.5 border-t-2 border-dashed border-muted-foreground"></div>
 <span>Shifted Curve</span>
 </div>
 </div>
 </div>
 );
};

export default ExchangeRateShiftsDiagram;
