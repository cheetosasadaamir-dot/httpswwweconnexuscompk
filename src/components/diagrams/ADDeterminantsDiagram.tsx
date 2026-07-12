import React from 'react';
import { motion } from 'framer-motion';

const ADDeterminantsDiagram =  => {
 return (
 <div className="my-8">
 <div className="glass-card p-6 bg-transparent">
 <h3 className="font-serif text-xl text-primary mb-4">
 Figure: AD Shift via Interest Rate Transmission Mechanism
 </h3>
 
 <div className="flex justify-center">
 <svg
 viewBox="0 0 700 420"
 className="w-full max-w-3xl"
 style={{ background: 'transparent' }}
 >
 {/* Grid lines */}
 <defs>
 <pattern id="adDetGrid" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
 </pattern>
 <linearGradient id="adShiftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="rgba(0, 255, 255, 0.15)" />
 <stop offset="100%" stopColor="rgba(0, 255, 255, 0.05)" />
 </linearGradient>
 <marker id="arrowCyanDet" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
 <path d="M0,0 L0,6 L9,3 z" fill="#00FFFF" />
 </marker>
 </defs>
 <rect width="700" height="420" fill="url(#adDetGrid)" />

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

 {/* LRAS - Vertical line */}
 <motion.line
 x1="480" y1="360" x2="480" y2="60"
 stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 />
 <text x="488" y="55" fill="rgba(255,255,255,0.8)" fontSize="13" fontWeight="600">LRAS</text>

 {/* SRAS - Upward sloping */}
 <motion.path
 d="M 120 320 Q 300 280 480 180 Q 560 130 620 90"
 fill="none"
 stroke="#FFD700"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.4 }}
 />
 <text x="630" y="90" fill="#FFD700" fontSize="13" fontWeight="600">SRAS</text>

 {/* AD1 - Original */}
 <motion.path
 d="M 140 100 Q 280 200 400 280 Q 480 320 560 350"
 fill="none"
 stroke="#00FFFF"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.6 }}
 />
 <text x="570" y="350" fill="#00FFFF" fontSize="13" fontWeight="600">AD₁</text>

 {/* AD2 - Shifted right */}
 <motion.path
 d="M 200 100 Q 340 200 460 280 Q 540 320 620 350"
 fill="none"
 stroke="#00FFFF"
 strokeWidth="2.5"
 strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.8 }}
 />
 <text x="628" y="348" fill="#00FFFF" fontSize="13" fontWeight="600">AD₂</text>

 {/* Shift arrow */}
 <motion.path
 d="M 350 220 L 410 220"
 stroke="#00FFFF"
 strokeWidth="2"
 markerEnd="url(#arrowCyanDet)"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 1.2 }}
 />

 {/* Equilibrium points */}
 {/* E1 */}
 <motion.circle
 cx="360" cy="238" r="6"
 fill="#00FFFF"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 1 }}
 />
 <text x="345" y="255" fill="#00FFFF" fontSize="12" fontWeight="600">E₁</text>

 {/* E2 */}
 <motion.circle
 cx="420" cy="205" r="6"
 fill="#FFD700"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.3, delay: 1.1 }}
 />
 <text x="428" y="200" fill="#FFD700" fontSize="12" fontWeight="600">E₂</text>

 {/* Price level lines */}
 <motion.line
 x1="100" y1="238" x2="360" y2="238"
 stroke="rgba(0, 255, 255, 0.4)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.3 }}
 />
 <text x="85" y="242" fill="#00FFFF" fontSize="11" textAnchor="end">P₁</text>

 <motion.line
 x1="100" y1="205" x2="420" y2="205"
 stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.4 }}
 />
 <text x="85" y="209" fill="#FFD700" fontSize="11" textAnchor="end">P₂</text>

 {/* Output lines */}
 <motion.line
 x1="360" y1="238" x2="360" y2="360"
 stroke="rgba(0, 255, 255, 0.4)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.5 }}
 />
 <text x="360" y="378" fill="#00FFFF" fontSize="11" textAnchor="middle">Y₁</text>

 <motion.line
 x1="420" y1="205" x2="420" y2="360"
 stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1" strokeDasharray="4,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 1.6 }}
 />
 <text x="420" y="378" fill="#FFD700" fontSize="11" textAnchor="middle">Y₂</text>

 {/* Full employment marker */}
 <text x="480" y="378" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Yfe</text>

 {/* Transmission mechanism labels */}
 <motion.g
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 1.8 }}
 >
 <rect x="130" y="55" width="250" height="24" rx="4" fill="rgba(0, 255, 255, 0.1)" stroke="rgba(0, 255, 255, 0.3)" strokeWidth="1" />
 <text x="255" y="72" fill="#00FFFF" fontSize="11" textAnchor="middle" fontWeight="500">
 ↓ Interest Rate → ↑ C + ↑ I → AD shifts right
 </text>
 </motion.g>
 </svg>
 </div>

 {/* Chain of Analysis */}
 <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border-l-4 border-primary">
 <h4 className="font-serif text-lg font-semibold text-primary mb-4">Chain of Analysis: Interest Rate Transmission Mechanism</h4>
 <p className="text-sm text-muted-foreground leading-relaxed text-justify">
 The monetary transmission mechanism operates through a clearly defined causal chain linking central bank policy 
 to real economic outcomes. When the central bank reduces the base interest rate, commercial banks typically 
 follow by lowering their lending rates. This reduction in borrowing costs has dual effects on aggregate 
 expenditure. First, the <strong>opportunity cost of consumption</strong> falls—households receive lower 
 returns on savings deposits, making current consumption more attractive relative to saving. Second, the 
 <strong>cost of financing durable goods purchases</strong> (mortgages, car loans, credit cards) decreases, 
 directly stimulating household expenditure (C). Simultaneously, for businesses, lower interest rates reduce 
 the <strong>cost of capital</strong> for investment projects. The Marginal Efficiency of Capital (MEC) schedule 
 intersects the interest rate line at a higher level of investment—projects that were previously unprofitable 
 at higher borrowing costs now become viable, expanding Investment (I). The combined increase in C and I shifts 
 the Aggregate Demand curve rightward from AD₁ to AD₂. At the new equilibrium E₂, both the general price level 
 and real national output have increased (P₁ → P₂, Y₁ → Y₂). The magnitude of these effects depends critically 
 on the interest-sensitivity of consumption and investment demand, the current position on the SRAS curve, and 
 the degree to which lower interest rates are transmitted to the real economy.
 </p>
 </div>

 {/* Senior Examiner's Conclusion */}
 <div className="mt-6 p-6 bg-gradient-to-r from-secondary/15 to-transparent rounded-xl border-l-4 border-secondary">
 <h4 className="font-serif text-lg font-semibold text-secondary mb-4">Senior Examiner's Conclusion</h4>
 <p className="text-sm text-muted-foreground leading-relaxed text-justify italic">
 "Ultimately, the impact of an AD shift on the economy is not uniform; it depends heavily on the 
 <strong> 'Wealth Effect'</strong> and <strong>consumer confidence</strong>. A rightward shift in AD during 
 a period of high household debt may be muted as consumers prioritise deleveraging over spending. 
 Furthermore, the effectiveness of interest rate policy in stimulating AD is contingent upon the 
 <strong> 'liquidity trap'</strong>—when rates approach zero, conventional monetary policy loses traction, 
 as further rate cuts cannot stimulate borrowing if consumers and firms are already unwilling to spend. 
 The <strong>expectations channel</strong> is equally critical: if economic agents anticipate that lower 
 rates signal future economic weakness, the confidence effect may be negative rather than positive. 
 Examiners reward candidates who contextualise AD shifts within the broader economic environment and 
 acknowledge these real-world constraints on the theoretical transmission mechanism."
 </p>
 </div>
 </div>
 </div>
 );
};

export default ADDeterminantsDiagram;
