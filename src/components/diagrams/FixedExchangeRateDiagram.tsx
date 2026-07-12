import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FixedExchangeRateDiagram =  => {
 const [scenario, setScenario] = useState<'equilibrium' | 'deficit' | 'surplus'>('equilibrium');
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
 const margin = { top: 50, right: 40, bottom: 60, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const fixedRateY = margin.top + chartHeight / 2;

 return (
 <div ref={containerRef} className="glass-card p-4 my-4">
 <div className="flex justify-between items-center mb-3">
 <h3 className="font-serif text-lg text-gradient">Fixed Exchange Rate System: Central Bank Intervention</h3>
 </div>

 <div className="flex flex-wrap gap-2 mb-3">
 <button
 onClick={ => setScenario('equilibrium')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${scenario === 'equilibrium' ? 'bg-primary text-primary-foreground': 'border-primary/30 hover:bg-primary/10'}`}
 >
 Equilibrium
 </button>
 <button
 onClick={ => setScenario('deficit')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${scenario === 'deficit' ? 'bg-destructive text-destructive-foreground': 'border-destructive/30 hover:bg-destructive/10'}`}
 >
 Deficit (Sell Reserves)
 </button>
 <button
 onClick={ => setScenario('surplus')}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${scenario === 'surplus' ? 'bg-[hsl(var(--cambridge-green))] text-white': 'border-[hsl(var(--cambridge-green))]/30 hover:bg-[hsl(var(--cambridge-green))]/10'}`}
 >
 Surplus (Buy Currency)
 </button>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 <defs>
 <marker id="arrow-fix" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
 </marker>
 <marker id="arrow-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--cambridge-green))" />
 </marker>
 <marker id="arrow-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--destructive))" />
 </marker>
 </defs>

 {/* Axes */}
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-fix)" />
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-fix)" />

 {/* Axis Labels */}
 <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">Quantity of Currency</text>
 <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Exchange Rate (e)</text>

 {/* Fixed Rate Line */}
 <motion.line
 x1={margin.left}
 y1={fixedRateY}
 x2={margin.left + chartWidth}
 y2={fixedRateY}
 stroke="hsl(var(--primary))"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.8 }}
 />
 <text x={margin.left + chartWidth - 5} y={fixedRateY - 10} textAnchor="end" fill="hsl(var(--primary))" fontSize="11" fontWeight="700">Fixed Rate (e*)</text>
 <text x={margin.left - 10} y={fixedRateY + 4} textAnchor="end" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">e*</text>

 {/* Supply Curve */}
 <motion.path
 d={`M ${margin.left + 30} ${margin.top + chartHeight - 40} Q ${margin.left + chartWidth / 2} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 30} ${margin.top + 40}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.8, delay: 0.2 }}
 />
 <text x={margin.left + chartWidth - 20} y={margin.top + 35} fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="700">S</text>

 {/* Demand Curve - varies by scenario */}
 {scenario === 'equilibrium' && (
 <>
 <motion.path
 d={`M ${margin.left + 30} ${margin.top + 40} Q ${margin.left + chartWidth / 2} ${margin.top + chartHeight / 2} ${margin.left + chartWidth - 30} ${margin.top + chartHeight - 40}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.8, delay: 0.4 }}
 />
 <text x={margin.left + chartWidth - 20} y={margin.top + chartHeight - 35} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">D</text>
 <circle cx={margin.left + chartWidth / 2} cy={fixedRateY} r="5" fill="hsl(var(--foreground))" />
 </>
 )}

 {scenario === 'deficit' && (
 <>
 {/* Shifted Demand (Lower) */}
 <motion.path
 d={`M ${margin.left + 10} ${margin.top + 60} Q ${margin.left + chartWidth / 2 - 40} ${margin.top + chartHeight / 2 + 20} ${margin.left + chartWidth - 60} ${margin.top + chartHeight - 30}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="2.5"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 />
 <text x={margin.left + chartWidth - 50} y={margin.top + chartHeight - 25} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">D₁</text>

 {/* Quantity markers at fixed rate */}
 <motion.line x1={margin.left + 140} y1={fixedRateY} x2={margin.left + 140} y2={margin.top + chartHeight} stroke="hsl(var(--cambridge-cyan))" strokeWidth="1.5" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
 <motion.line x1={margin.left + 260} y1={fixedRateY} x2={margin.left + 260} y2={margin.top + chartHeight} stroke="hsl(var(--cambridge-orange))" strokeWidth="1.5" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />

 <text x={margin.left + 140} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="10">Q_D</text>
 <text x={margin.left + 260} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="10">Q_S</text>

 {/* Excess Supply bracket */}
 <motion.path
 d={`M ${margin.left + 145} ${fixedRateY + 8} L ${margin.left + 145} ${fixedRateY + 20} L ${margin.left + 255} ${fixedRateY + 20} L ${margin.left + 255} ${fixedRateY + 8}`}
 fill="none"
 stroke="hsl(var(--destructive))"
 strokeWidth="2"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 />
 <text x={margin.left + 200} y={fixedRateY + 35} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="600">Excess Supply</text>

 {/* Central Bank Action */}
 <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
 <rect x={margin.left + 280} y={margin.top + 10} width="100" height="45" rx="4" fill="hsl(var(--destructive))" opacity="0.15" stroke="hsl(var(--destructive))" strokeWidth="1" />
 <text x={margin.left + 330} y={margin.top + 28} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="600">Central Bank:</text>
 <text x={margin.left + 330} y={margin.top + 42} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8">Sells foreign reserves</text>
 <text x={margin.left + 330} y={margin.top + 52} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8">Buys domestic currency</text>
 </motion.g>
 </>
 )}

 {scenario === 'surplus' && (
 <>
 {/* Shifted Demand (Higher) */}
 <motion.path
 d={`M ${margin.left + 60} ${margin.top + 30} Q ${margin.left + chartWidth / 2 + 40} ${margin.top + chartHeight / 2 - 20} ${margin.left + chartWidth - 10} ${margin.top + chartHeight - 50}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="2.5"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 />
 <text x={margin.left + chartWidth} y={margin.top + chartHeight - 45} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">D₁</text>

 {/* Quantity markers at fixed rate */}
 <motion.line x1={margin.left + 260} y1={fixedRateY} x2={margin.left + 260} y2={margin.top + chartHeight} stroke="hsl(var(--cambridge-cyan))" strokeWidth="1.5" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
 <motion.line x1={margin.left + 140} y1={fixedRateY} x2={margin.left + 140} y2={margin.top + chartHeight} stroke="hsl(var(--cambridge-orange))" strokeWidth="1.5" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />

 <text x={margin.left + 260} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="10">Q_D</text>
 <text x={margin.left + 140} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="10">Q_S</text>

 {/* Excess Demand bracket */}
 <motion.path
 d={`M ${margin.left + 145} ${fixedRateY - 8} L ${margin.left + 145} ${fixedRateY - 20} L ${margin.left + 255} ${fixedRateY - 20} L ${margin.left + 255} ${fixedRateY - 8}`}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth="2"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 />
 <text x={margin.left + 200} y={fixedRateY - 30} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="10" fontWeight="600">Excess Demand</text>

 {/* Central Bank Action */}
 <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
 <rect x={margin.left + 280} y={margin.top + 10} width="100" height="45" rx="4" fill="hsl(var(--cambridge-green))" opacity="0.15" stroke="hsl(var(--cambridge-green))" strokeWidth="1" />
 <text x={margin.left + 330} y={margin.top + 28} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="600">Central Bank:</text>
 <text x={margin.left + 330} y={margin.top + 42} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="8">Buys foreign reserves</text>
 <text x={margin.left + 330} y={margin.top + 52} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="8">Sells domestic currency</text>
 </motion.g>
 </>
 )}
 </svg>

 <div className="mt-3 p-3 bg-muted/30 rounded-lg">
 <p className="text-xs text-muted-foreground">
 <strong className="text-foreground">Note:</strong> To keep the exchange rate fixed, the central bank must maintain foreign exchange reserves at a sufficient level. In a deficit scenario (excess supply of domestic currency), the central bank sells foreign reserves and buys domestic currency. In a surplus scenario (excess demand), the central bank buys foreign reserves and sells domestic currency.
 </p>
 </div>
 </div>
 );
};

export default FixedExchangeRateDiagram;
