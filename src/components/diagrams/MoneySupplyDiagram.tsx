import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MoneySupplyDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const [showBroadMoney, setShowBroadMoney] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 },
 { threshold: 0.2 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 const width = 700;
 const height = 420;
 const centerX = width / 2;
 const centerY = height / 2 - 20;

 const circleVariants = {
 hidden: { scale: 0, opacity: 0 },
 visible: (i: number) => ({
 scale: 1,
 opacity: 1,
 transition: { delay: i * 0.25, duration: 0.5, ease: "easeOut" as const }
 })
 };

 return (
 <div ref={containerRef} className="glass-card p-6 rounded-xl">
 <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
 <div>
 <h3 className="font-serif text-xl text-gradient">Money Supply: Narrow vs Broad Money</h3>
 <p className="text-muted-foreground text-sm mt-1">
 Classification: M0 (Monetary Base) → M1 → M2 → M4 (Broad Money)
 </p>
 </div>
 <Button
 variant="outline"
 size="sm"
 onClick={ => setShowBroadMoney(!showBroadMoney)}
 >
 {showBroadMoney ? 'Show Narrow Money Only': 'Expand to Broad Money (M4)'}
 </Button>
 </div>

 {/* Examiner Tip */}
 <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs">
 <span className="font-semibold text-amber-400">⚠️ Key Distinction:</span>
 <span className="text-muted-foreground ml-2">
 <strong className="text-foreground">Narrow money (M0/M1)</strong> = highly liquid, used for transactions. 
 <strong className="text-foreground"> Broad money (M4)</strong> = includes "near money" (less liquid assets). 
 Central banks directly control M0; M4 depends on commercial bank credit creation.
 </span>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
 <defs>
 <radialGradient id="m0Gradient" cx="50%" cy="50%" r="50%">
 <stop offset="0%" stopColor="hsl(var(--cambridge-cyan))" stopOpacity="0.4" />
 <stop offset="100%" stopColor="hsl(var(--cambridge-cyan))" stopOpacity="0.1" />
 </radialGradient>
 <radialGradient id="m1Gradient" cx="50%" cy="50%" r="50%">
 <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
 <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
 </radialGradient>
 <radialGradient id="m2Gradient" cx="50%" cy="50%" r="50%">
 <stop offset="0%" stopColor="hsl(var(--cambridge-orange))" stopOpacity="0.2" />
 <stop offset="100%" stopColor="hsl(var(--cambridge-orange))" stopOpacity="0.05" />
 </radialGradient>
 <radialGradient id="m4Gradient" cx="50%" cy="50%" r="50%">
 <stop offset="0%" stopColor="hsl(var(--cambridge-magenta))" stopOpacity="0.15" />
 <stop offset="100%" stopColor="hsl(var(--cambridge-magenta))" stopOpacity="0.03" />
 </radialGradient>
 </defs>

 {/* M4 (Broad Money) - Outermost circle */}
 {showBroadMoney && (
 <motion.g
 variants={circleVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={3}
 >
 <circle
 cx={centerX}
 cy={centerY}
 r={175}
 fill="url(#m4Gradient)"
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth="2.5"
 strokeDasharray="10,5"
 />
 <text x={centerX} y={centerY - 155} textAnchor="middle" fill="hsl(var(--cambridge-magenta))" fontSize="14" fontWeight="700">
 M4 (Broad Money)
 </text>
 </motion.g>
 )}

 {/* M2 - Second outer circle */}
 {showBroadMoney && (
 <motion.g
 variants={circleVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={2}
 >
 <circle
 cx={centerX}
 cy={centerY}
 r={130}
 fill="url(#m2Gradient)"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="2"
 strokeDasharray="6,4"
 />
 <text x={centerX + 100} y={centerY - 90} textAnchor="start" fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="600">
 M2
 </text>
 </motion.g>
 )}

 {/* M1 - Inner circle */}
 <motion.g
 variants={circleVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={1}
 >
 <circle
 cx={centerX}
 cy={centerY}
 r={85}
 fill="url(#m1Gradient)"
 stroke="hsl(var(--primary))"
 strokeWidth="2.5"
 />
 <text x={centerX} y={centerY - 65} textAnchor="middle" fill="hsl(var(--primary))" fontSize="13" fontWeight="700">
 M1 (Narrow Money)
 </text>
 </motion.g>

 {/* M0 - Core circle (Monetary Base) */}
 <motion.g
 variants={circleVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={0}
 >
 <circle
 cx={centerX}
 cy={centerY}
 r={45}
 fill="url(#m0Gradient)"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="3"
 />
 <text x={centerX} y={centerY - 25} textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">
 M0
 </text>
 <text x={centerX} y={centerY - 10} textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="9">
 (Monetary Base)
 </text>
 </motion.g>

 {/* Labels inside circles */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 0.6, duration: 0.5 }}
 >
 {/* M0 components */}
 <text x={centerX} y={centerY + 8} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">
 Notes & Coins
 </text>
 <text x={centerX} y={centerY + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">
 + Bank Reserves
 </text>
 <text x={centerX} y={centerY + 32} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">
 (at Central Bank)
 </text>

 {/* M1 components - around M0 */}
 <text x={centerX - 50} y={centerY - 40} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">
 + Sight Deposits
 </text>
 <text x={centerX + 50} y={centerY + 60} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">
 (Current Accounts)
 </text>
 </motion.g>

 {/* Broad money labels */}
 {showBroadMoney && (
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.2, duration: 0.5 }}
 >
 {/* M2 components */}
 <text x={centerX - 85} y={centerY - 95} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 + Savings Deposits
 </text>
 <text x={centerX + 85} y={centerY + 100} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 + Time Deposits ≤2yr
 </text>

 {/* M4 components */}
 <text x={centerX - 110} y={centerY + 135} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 + Money Market Funds
 </text>
 <text x={centerX + 110} y={centerY - 125} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 + Large Time Deposits
 </text>
 <text x={centerX} y={centerY + 160} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 + Building Society Shares
 </text>
 <text x={centerX + 130} y={centerY + 50} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
 + Repos & CDs
 </text>
 </motion.g>
 )}

 {/* Liquidity Arrow */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.5, duration: 0.5 }}
 >
 <defs>
 <marker id="arrowhead-liquidity" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--cambridge-green))" />
 </marker>
 </defs>
 <line
 x1={60}
 y1={height - 60}
 x2={60}
 y2={80}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth="2"
 markerEnd="url(#arrowhead-liquidity)"
 />
 <text x={35} y={height / 2} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="11" fontWeight="600" transform={`rotate(-90, 35, ${height / 2})`}>
 LIQUIDITY ↑
 </text>
 <text x={80} y={height - 45} textAnchor="start" fill="hsl(var(--muted-foreground))" fontSize="9">
 Less Liquid
 </text>
 <text x={80} y={70} textAnchor="start" fill="hsl(var(--muted-foreground))" fontSize="9">
 Most Liquid
 </text>
 </motion.g>

 {/* Legend */}
 <g transform={`translate(${width - 180}, ${height - 90})`}>
 <rect x="0" y="0" width="10" height="10" fill="hsl(var(--cambridge-cyan))" rx="2" />
 <text x="16" y="9" fill="hsl(var(--foreground))" fontSize="9">M0: Monetary Base</text>
 
 <rect x="0" y="16" width="10" height="10" fill="hsl(var(--primary))" rx="2" />
 <text x="16" y="25" fill="hsl(var(--foreground))" fontSize="9">M1: M0 + Sight Deposits</text>
 
 {showBroadMoney && (
 <>
 <rect x="0" y="32" width="10" height="10" fill="hsl(var(--cambridge-orange))" rx="2" />
 <text x="16" y="41" fill="hsl(var(--foreground))" fontSize="9">M2: M1 + Savings/Time</text>
 
 <rect x="0" y="48" width="10" height="10" fill="hsl(var(--cambridge-magenta))" rx="2" />
 <text x="16" y="57" fill="hsl(var(--foreground))" fontSize="9">M4: Broad Money (All)</text>
 </>
 )}
 </g>
 </svg>

 {/* Explanation Cards */}
 <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
 <div className="p-4 bg-[hsl(var(--cambridge-cyan))]/10 rounded-lg border border-[hsl(var(--cambridge-cyan))]/20">
 <h4 className="font-semibold text-[hsl(var(--cambridge-cyan))] mb-2">Narrow Money (M0/M1)</h4>
 <p className="text-muted-foreground leading-relaxed text-xs mb-2">
 The most <strong className="text-foreground">liquid</strong> forms of money used directly for transactions. 
 M0 (Monetary Base) = notes, coins, and bank reserves at the central bank. 
 M1 = M0 + sight deposits (current accounts) that can be withdrawn on demand.
 </p>
 <div className="font-mono text-xs bg-muted/30 p-2 rounded">
 Central bank directly controls M0 via OMOs
 </div>
 </div>
 <div className="p-4 bg-[hsl(var(--cambridge-magenta))]/10 rounded-lg border border-[hsl(var(--cambridge-magenta))]/20">
 <h4 className="font-semibold text-[hsl(var(--cambridge-magenta))] mb-2">Broad Money (M4)</h4>
 <p className="text-muted-foreground leading-relaxed text-xs mb-2">
 Includes narrow money plus <strong className="text-foreground">"near money"</strong>—assets quickly convertible 
 to cash: savings accounts, time deposits, money market funds, building society shares, repos, and CDs. 
 Less liquid but still part of total money supply.
 </p>
 <div className="font-mono text-xs bg-muted/30 p-2 rounded">
 M4 depends on credit multiplier: ΔD = (1/r) × ΔR
 </div>
 </div>
 </div>

 {/* Synoptic Link */}
 <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20 text-sm">
 <h4 className="font-semibold text-primary mb-2">📌 Synoptic Link: Money Supply → Inflation → AD</h4>
 <p className="text-muted-foreground leading-relaxed text-xs">
 <strong className="text-foreground">Monetarist view (Quantity Theory):</strong> ↑M4 → ↑MV = ↑PY → if V and Y constant, 
 ↑M leads to ↑P (inflation). <strong className="text-foreground">Keynesian view:</strong> ↑M → ↓r (unless liquidity trap) 
 → ↑I → ↑AD → depends on SRAS elasticity whether output or prices rise. The distinction between narrow and 
 broad money matters for policy transmission and inflation forecasting.
 </p>
 </div>
 </div>
 );
};

export default MoneySupplyDiagram;
