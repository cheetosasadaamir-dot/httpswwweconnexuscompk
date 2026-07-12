import { motion } from 'framer-motion';
import { useState } from 'react';

interface LiquidityTrapDiagramProps {
 title?: string;
 showMotives?: boolean;
}

const LiquidityTrapDiagram = ({ 
 title = "Liquidity Preference & The Liquidity Trap",
 showMotives = true
}: LiquidityTrapDiagramProps) => {
 const [showTrap, setShowTrap] = useState(false);
 const [showShift, setShowShift] = useState(false);
 
 const width = 550;
 const height = 380;
 const margin = { top: 50, right: 50, bottom: 70, left: 80 };

 const xScale = (val: number) => margin.left + (val / 600) * (width - margin.left - margin.right);
 const yScale = (val: number) => height - margin.bottom - (val / 14) * (height - margin.top - margin.bottom);

 // Money demand curve with liquidity trap (horizontal at low rates)
 const lpCurve = "M 100 75 Q 150 120, 180 160 Q 220 210, 260 240 Q 320 275, 380 290 L 500 290";
 
 // Speculative demand becomes horizontal - the trap
 const trapZone = { startX: 380, endX: 500, y: 290 };

 return (
 <div className="glass-card p-6 rounded-xl">
 <div className="flex items-center justify-between mb-4">
 <h3 className="font-serif text-lg text-silver-bright">{title}</h3>
 <div className="flex gap-2">
 <button
 onClick={ => setShowTrap(!showTrap)}
 className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
 showTrap 
 ? 'bg-cambridge-orange/30 text-cambridge-orange': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 {showTrap ? 'Hide Trap Zone': 'Show Trap Zone'}
 </button>
 <button
 onClick={ => setShowShift(!showShift)}
 className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
 showShift 
 ? 'bg-cambridge-green/30 text-cambridge-green': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 {showShift ? 'Reset Ms': '↑ Money Supply'}
 </button>
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 {/* Grid */}
 <g stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.15">
 {[100, 150, 200, 250].map((y) => (
 <line key={`h-${y}`} x1={margin.left} y1={y} x2={width - margin.right} y2={y} />
 ))}
 {[150, 250, 350, 450].map((x) => (
 <line key={`v-${x}`} x1={x} y1={margin.top} x2={x} y2={height - margin.bottom} />
 ))}
 </g>

 {/* Liquidity trap zone highlight */}
 {showTrap && (
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 >
 <rect
 x={trapZone.startX}
 y={trapZone.y - 25}
 width={trapZone.endX - trapZone.startX}
 height={height - margin.bottom - trapZone.y + 25}
 fill="hsl(var(--cambridge-orange))"
 opacity="0.15"
 />
 <line
 x1={trapZone.startX}
 y1={margin.top}
 x2={trapZone.startX}
 y2={height - margin.bottom}
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="1.5"
 strokeDasharray="6,4"
 />
 <text
 x={(trapZone.startX + trapZone.endX) / 2}
 y={trapZone.y + 35}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 fontSize="11"
 fontWeight="600"
 >
 LIQUIDITY TRAP
 </text>
 <text
 x={(trapZone.startX + trapZone.endX) / 2}
 y={trapZone.y + 50}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 fontSize="9"
 >
 (Monetary Policy Ineffective)
 </text>
 </motion.g>
 )}

 {/* Axes */}
 <g stroke="hsl(var(--silver))" strokeWidth="2">
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} />
 <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} />
 <polygon points={`${margin.left},${margin.top} ${margin.left - 5},${margin.top + 12} ${margin.left + 5},${margin.top + 12}`} fill="hsl(var(--silver))" />
 <polygon points={`${width - margin.right},${height - margin.bottom} ${width - margin.right - 12},${height - margin.bottom - 5} ${width - margin.right - 12},${height - margin.bottom + 5}`} fill="hsl(var(--silver))" />
 </g>

 {/* Axis labels */}
 <text
 x={25}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 transform={`rotate(-90, 25, ${height / 2})`}
 >
 Interest Rate (r)
 </text>
 <text
 x={(margin.left + width - margin.right) / 2}
 y={height - 20}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 >
 Quantity of Money (M)
 </text>

 {/* Liquidity Preference (Money Demand) Curve */}
 <motion.path
 d={lpCurve}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3.5"
 strokeLinecap="round"
 filter="drop-shadow(0 0 4px hsl(var(--cambridge-cyan) / 0.5))"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1.2, ease: "easeInOut" as const }}
 />
 <text
 x="130"
 y="70"
 fill="hsl(var(--cambridge-cyan))"
 fontSize="13"
 fontWeight="600"
 >
 LP (Md)
 </text>

 {/* Money Supply 1 - Normal position */}
 <motion.line
 x1="240"
 y1={margin.top}
 x2="240"
 y2={height - margin.bottom}
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.6, delay: 0.8 }}
 />
 <text x="240" y={margin.top - 8} textAnchor="middle" fill="hsl(var(--cambridge-magenta))" fontSize="11" fontWeight="500">
 Ms₀
 </text>

 {/* Equilibrium at normal rate */}
 <motion.circle
 cx="240"
 cy="230"
 r="6"
 fill="hsl(var(--cambridge-magenta))"
 filter="drop-shadow(0 0 4px hsl(var(--cambridge-magenta) / 0.6))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 1.2, type: "spring" }}
 />
 <text x="225" y="220" fill="hsl(var(--cambridge-magenta))" fontSize="11" fontWeight="600">E₀</text>
 
 {/* Dashed line to r₀ */}
 <motion.line
 x1={margin.left}
 y1="230"
 x2="240"
 y2="230"
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 1.4, duration: 0.4 }}
 />
 <text x={margin.left - 10} y="234" textAnchor="end" fill="hsl(var(--cambridge-magenta))" fontSize="11">r₀</text>

 {/* Shifted Money Supply - in the trap zone */}
 {showShift && (
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.3 }}
 >
 {/* Ms shifted into trap */}
 <motion.line
 x1="420"
 y1={margin.top}
 x2="420"
 y2={height - margin.bottom}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5 }}
 />
 <text x="420" y={margin.top - 8} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="11" fontWeight="500">
 Ms₁
 </text>

 {/* Equilibrium in trap - same rate! */}
 <motion.circle
 cx="420"
 cy="290"
 r="6"
 fill="hsl(var(--cambridge-green))"
 filter="drop-shadow(0 0 4px hsl(var(--cambridge-green) / 0.6))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.3, type: "spring" }}
 />
 <text x="435" y="285" fill="hsl(var(--cambridge-green))" fontSize="11" fontWeight="600">E₁</text>

 {/* Rate doesn't change - horizontal dashed line */}
 <motion.line
 x1={margin.left}
 y1="290"
 x2="420"
 y2="290"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth="1.5"
 strokeDasharray="5,3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 0.5, duration: 0.4 }}
 />
 <text x={margin.left - 10} y="294" textAnchor="end" fill="hsl(var(--cambridge-green))" fontSize="11">r₁</text>

 {/* Arrow showing Ms shift but NO rate change */}
 <motion.path
 d="M 280 60 L 380 60"
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="2"
 markerEnd="url(#trapArrow)"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 0.6, duration: 0.4 }}
 />
 <text x="330" y="52" textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="9">↑Ms</text>

 {/* Annotation: Rate barely changes */}
 <rect x="145" y="248" width="90" height="35" rx="4" fill="hsl(var(--destructive))" opacity="0.15" />
 <text x="190" y="263" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="500">
 r barely falls!
 </text>
 <text x="190" y="277" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8">
 (Trap effect)
 </text>
 </motion.g>
 )}

 {/* Arrow definition */}
 <defs>
 <marker
 id="trapArrow"
 markerWidth="10"
 markerHeight="7"
 refX="9"
 refY="3.5"
 orient="auto"
 >
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--cambridge-orange))" />
 </marker>
 </defs>
 </svg>

 {/* Motives for holding money */}
 {showMotives && (
 <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
 <div className="p-3 bg-muted/30 rounded-lg border-l-2 border-cambridge-cyan">
 <h5 className="font-semibold text-cambridge-cyan mb-1">Transactions Motive</h5>
 <p className="text-muted-foreground">
 Money held for day-to-day purchases. Directly proportional to income level (Y).
 </p>
 </div>
 <div className="p-3 bg-muted/30 rounded-lg border-l-2 border-cambridge-magenta">
 <h5 className="font-semibold text-cambridge-magenta mb-1">Precautionary Motive</h5>
 <p className="text-muted-foreground">
 Money held for unexpected expenses. Also related to income (Y).
 </p>
 </div>
 <div className="p-3 bg-muted/30 rounded-lg border-l-2 border-cambridge-orange">
 <h5 className="font-semibold text-cambridge-orange mb-1">Speculative Motive</h5>
 <p className="text-muted-foreground">
 Money held instead of bonds. Inversely related to interest rate (r). Creates the trap.
 </p>
 </div>
 </div>
 )}

 {/* Trap explanation */}
 <div className="mt-4 p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/30">
 <h4 className="text-sm font-semibold text-cambridge-orange mb-2">The Liquidity Trap Mechanism</h4>
 <p className="text-xs text-muted-foreground leading-relaxed">
 When interest rates approach their lower bound (~0%), the speculative demand for money becomes <strong>perfectly elastic</strong>. 
 At such low rates, bond prices are so high that everyone expects them to fall—making people willing to hold any additional money as idle 
 balances rather than purchasing bonds. Consequently, any increase in money supply is simply absorbed without lowering interest rates further, 
 rendering <strong>conventional monetary policy completely ineffective</strong>. This is the ultimate limit of monetary transmission.
 </p>
 </div>
 </div>
 );
};

export default LiquidityTrapDiagram;
