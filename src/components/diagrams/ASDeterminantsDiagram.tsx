import React from 'react';
import { motion } from 'framer-motion';

const ASDeterminantsDiagram =  => {
 return (
 <div className="my-8">
 <div className="glass-card p-6 bg-transparent">
 <h3 className="font-serif text-xl text-secondary mb-4">
 Figure: SRAS & LRAS Shift Determinants
 </h3>
 
 <div className="flex justify-center">
 <svg
 viewBox="0 0 700 420"
 className="w-full max-w-3xl"
 style={{ background: 'transparent' }}
 >
 {/* Grid pattern */}
 <defs>
 <pattern id="asDetGrid" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
 </pattern>
 <linearGradient id="stagflationArea" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="rgba(255, 87, 87, 0.2)" />
 <stop offset="100%" stopColor="rgba(255, 87, 87, 0.05)" />
 </linearGradient>
 <marker id="arrowAmber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
 <path d="M0,0 L0,6 L9,3 z" fill="#FFD700" />
 </marker>
 <marker id="arrowWhite" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
 <path d="M0,0 L0,6 L9,3 z" fill="rgba(255,255,255,0.8)" />
 </marker>
 </defs>
 <rect width="700" height="420" fill="url(#asDetGrid)" />

 {/* Axes */}
 <motion.line
 x1="100" y1="360" x2="650" y2="360"
 stroke="rgba(255,255,255,0.6)" strokeWidth="2"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8 }}
 />
 <motion.line
 x1="100" y1="360" x2="100" y2="40"
 stroke="rgba(255,255,255,0.6)" strokeWidth="2"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8 }}
 />

 {/* Axis labels */}
 <text x="375" y="395" fill="rgba(255,255,255,0.9)" fontSize="14" textAnchor="middle" fontWeight="500">
 Real National Output / Real GDP (Y)
 </text>
 <text x="40" y="200" fill="rgba(255,255,255,0.9)" fontSize="14" textAnchor="middle" fontWeight="500" transform="rotate(-90, 40, 200)">
 General Price Level (GPL)
 </text>

 {/* LRAS1 - Original */}
 <motion.line
 x1="420" y1="360" x2="420" y2="60"
 stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 />
 <text x="410" y="50" fill="rgba(255,255,255,0.7)" fontSize="12" fontWeight="600">LRAS₁</text>

 {/* LRAS2 - Shifted right (supply-side improvements) */}
 <motion.line
 x1="520" y1="360" x2="520" y2="60"
 stroke="rgba(255,255,255,0.9)" strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.3 }}
 />
 <text x="528" y="50" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">LRAS₂</text>

 {/* LRAS shift arrow */}
 <motion.path
 d="M 440 80 L 500 80"
 stroke="rgba(255,255,255,0.7)"
 strokeWidth="2"
 markerEnd="url(#arrowWhite)"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.5 }}
 />

 {/* SRAS1 - Original */}
 <motion.path
 d="M 120 300 Q 280 270 400 190 Q 500 120 580 80"
 fill="none"
 stroke="#FFD700"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.6 }}
 />
 <text x="590" y="85" fill="#FFD700" fontSize="13" fontWeight="600">SRAS₁</text>

 {/* SRAS2 - Shifted left (cost-push) */}
 <motion.path
 d="M 120 240 Q 250 210 350 140 Q 430 80 500 50"
 fill="none"
 stroke="#FF6B6B"
 strokeWidth="3"
 strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.8 }}
 />
 <text x="510" y="55" fill="#FF6B6B" fontSize="13" fontWeight="600">SRAS₂</text>

 {/* AD Curve */}
 <motion.path
 d="M 160 90 Q 300 180 400 260 Q 480 310 560 340"
 fill="none"
 stroke="#00FFFF"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 1 }}
 />
 <text x="570" y="338" fill="#00FFFF" fontSize="13" fontWeight="600">AD</text>

 {/* Equilibrium E1 (original) */}
 <motion.circle
 cx="365" cy="230" r="6"
 fill="#FFD700"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 1.2 }}
 />
 <text x="350" y="248" fill="#FFD700" fontSize="12" fontWeight="600">E₁</text>

 {/* Equilibrium E2 (after cost-push - stagflation) */}
 <motion.circle
 cx="320" cy="190" r="6"
 fill="#FF6B6B"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 1.3 }}
 />
 <text x="308" y="180" fill="#FF6B6B" fontSize="12" fontWeight="600">E₂</text>

 {/* Stagflation area - shaded region */}
 <motion.path
 d="M 320 190 L 320 360 L 365 360 L 365 230 L 320 190"
 fill="url(#stagflationArea)"
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.6 }}
 transition={{ duration: 0.5, delay: 1.5 }}
 />

 {/* Price lines */}
 <motion.line
 x1="100" y1="230" x2="365" y2="230"
 stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.4 }}
 />
 <text x="85" y="234" fill="#FFD700" fontSize="11" textAnchor="end">P₁</text>

 <motion.line
 x1="100" y1="190" x2="320" y2="190"
 stroke="rgba(255, 107, 107, 0.5)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.5 }}
 />
 <text x="85" y="194" fill="#FF6B6B" fontSize="11" textAnchor="end">P₂</text>

 {/* Output lines */}
 <motion.line
 x1="365" y1="230" x2="365" y2="360"
 stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.6 }}
 />
 <text x="365" y="378" fill="#FFD700" fontSize="11" textAnchor="middle">Y₁</text>

 <motion.line
 x1="320" y1="190" x2="320" y2="360"
 stroke="rgba(255, 107, 107, 0.5)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.7 }}
 />
 <text x="320" y="378" fill="#FF6B6B" fontSize="11" textAnchor="middle">Y₂</text>

 {/* Full employment markers */}
 <text x="420" y="378" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Yfe₁</text>
 <text x="520" y="378" fill="rgba(255,255,255,0.8)" fontSize="10" textAnchor="middle">Yfe₂</text>

 {/* Cost-push label */}
 <motion.g
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 1.9 }}
 >
 <rect x="140" y="120" width="140" height="24" rx="4" fill="rgba(255, 107, 107, 0.15)" stroke="rgba(255, 107, 107, 0.4)" strokeWidth="1" />
 <text x="210" y="137" fill="#FF6B6B" fontSize="11" textAnchor="middle" fontWeight="500">
 ↑ Oil Price → SRAS↙
 </text>
 </motion.g>

 {/* Stagflation indicator */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 2.1 }}
 >
 <text x="345" y="300" fill="#FF6B6B" fontSize="10" textAnchor="middle" fontWeight="600">
 STAGFLATION
 </text>
 <text x="345" y="314" fill="rgba(255,107,107,0.7)" fontSize="9" textAnchor="middle">
 ↑P + ↓Y
 </text>
 </motion.g>
 </svg>
 </div>

 {/* Chain of Analysis - Cost Push */}
 <div className="mt-8 p-6 bg-gradient-to-r from-destructive/10 to-transparent rounded-xl border-l-4 border-destructive">
 <h4 className="font-serif text-lg font-semibold text-destructive mb-4">Chain of Analysis: Cost-Push Inflation (SRAS Shift)</h4>
 <p className="text-sm text-muted-foreground leading-relaxed text-justify">
 Cost-push inflation originates from supply-side disruptions that raise the <strong>unit costs of production</strong> 
 across the economy, forcing firms to increase prices to maintain profitability or, alternatively, to reduce output. 
 The canonical example is an oil price shock: when the price of crude oil rises sharply—whether due to geopolitical 
 tensions, OPEC supply restrictions, or demand surges—the effects cascade through the economy. Oil is a fundamental 
 input for transportation, manufacturing, heating, and electricity generation; consequently, an increase in its price 
 raises the cost structure for virtually all industries. Firms face a choice: absorb the higher costs (reducing 
 profit margins and potentially triggering losses), pass them on to consumers through higher prices, or reduce 
 output to cut costs. In aggregate, the <strong>SRAS curve shifts leftward</strong> from SRAS₁ to SRAS₂—at every 
 price level, firms are willing to supply less output than before. The new equilibrium E₂ is characterised by a 
 <strong>higher price level (P₁ → P₂) and lower real output (Y₁ → Y₂)</strong>—the defining features of stagflation. 
 The shaded region represents the welfare loss: reduced production, increased unemployment, and erosion of real 
 purchasing power. This combination poses an acute policy dilemma: expansionary policy to restore output would 
 exacerbate inflation, while contractionary policy to combat inflation would deepen the recession.
 </p>
 </div>

 {/* Chain of Analysis - LRAS */}
 <div className="mt-6 p-6 bg-gradient-to-r from-muted/30 to-transparent rounded-xl border-l-4 border-muted-foreground">
 <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Chain of Analysis: LRAS Determinants (Supply-Side Capacity)</h4>
 <p className="text-sm text-muted-foreground leading-relaxed text-justify">
 The Long-Run Aggregate Supply (LRAS) curve is vertical at the economy's <strong>potential output (Yfe)</strong>—the 
 maximum sustainable level of production when all resources are fully and efficiently employed. Unlike SRAS shifts, 
 which reflect temporary cost changes, LRAS shifts represent fundamental changes in the economy's 
 <strong> productive capacity</strong>. These arise from improvements in the <strong>quality or quantity of factors 
 of production</strong>. Investment in physical capital (machinery, infrastructure, technology) expands the capital 
 stock (K). Human capital development through education, training, and healthcare enhances labour productivity. 
 Technological innovation—the application of new knowledge to production processes—shifts the production function 
 upward, allowing more output from the same inputs. Institutional improvements (property rights, regulatory 
 efficiency, trade openness) reduce transaction costs and improve resource allocation. When these supply-side 
 factors improve, the LRAS shifts rightward from LRAS₁ to LRAS₂, indicating that the economy can now produce more 
 output at full employment without generating inflationary pressure. This represents <strong>genuine, sustainable 
 economic growth</strong>—an expansion of the economy's underlying productive potential rather than a cyclical 
 recovery driven by demand stimulus.
 </p>
 </div>

 {/* Senior Examiner's Conclusion */}
 <div className="mt-6 p-6 bg-gradient-to-r from-secondary/15 to-transparent rounded-xl border-l-4 border-secondary">
 <h4 className="font-serif text-lg font-semibold text-secondary mb-4">Senior Examiner's Conclusion</h4>
 <p className="text-sm text-muted-foreground leading-relaxed text-justify italic">
 "In conclusion, while SRAS shifts are often volatile and driven by external supply shocks—oil price fluctuations, 
 commodity market disruptions, currency movements affecting import costs—the LRAS is the <strong>fundamental 
 determinant of sustainable economic growth</strong>. Governments must therefore balance short-term demand 
 management (fiscal and monetary policy) with long-run supply-side reforms (education, infrastructure investment, 
 R&D incentives, deregulation) to avoid stagflationary pressures. The policy implication is clear: while demand-side 
 policies can stabilise the economy around its potential output in the short run, only supply-side improvements 
 can shift the LRAS rightward and generate genuine improvements in living standards. Candidates who recognise 
 this distinction between <strong>cyclical fluctuations</strong> (movements around LRAS) and <strong>trend growth</strong> 
 (shifts in LRAS) demonstrate sophisticated understanding of macroeconomic dynamics and are well-positioned to 
 access the highest mark bands."
 </p>
 </div>
 </div>
 </div>
 );
};

export default ASDeterminantsDiagram;
