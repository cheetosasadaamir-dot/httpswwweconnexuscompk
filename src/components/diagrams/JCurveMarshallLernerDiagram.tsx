import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const JCurveMarshallLernerDiagram =  => {
 const [animationKey, setAnimationKey] = useState(0);
 const [showFormula, setShowFormula] = useState(true);

 const resetAnimation =  => {
 setAnimationKey(prev => prev + 1);
 };

 // J-Curve path points
 const jCurvePath = `
 M 100 200 
 Q 130 250, 180 260 
 Q 250 265, 320 240 
 Q 400 200, 500 140 
 Q 550 110, 600 80
 `;

 return (
 <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
 <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
 The J-Curve Effect & Marshall-Lerner Condition
 </h3>
 <p className="text-center text-white/60 text-sm mb-6">
 Impact of Currency Depreciation on the Current Account Balance
 </p>

 {/* Toggle */}
 <div className="flex justify-center gap-4 mb-6">
 <button
 onClick={ => setShowFormula(true)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
 showFormula 
 ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500': 'bg-white/5 text-white/60 border border-white/20'
 }`}
 >
 J-Curve Dynamics
 </button>
 <button
 onClick={ => setShowFormula(false)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
 !showFormula 
 ? 'bg-amber-500/30 text-amber-400 border border-amber-500': 'bg-white/5 text-white/60 border border-white/20'
 }`}
 >
 Marshall-Lerner Condition
 </button>
 </div>

 <svg key={animationKey} viewBox="0 0 700 400" className="w-full h-auto">
 <defs>
 <linearGradient id="jCurveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="#DC2626" />
 <stop offset="30%" stopColor="#F59E0B" />
 <stop offset="100%" stopColor="#22D3EE" />
 </linearGradient>
 <filter id="glow">
 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
 <feMerge>
 <feMergeNode in="coloredBlur"/>
 <feMergeNode in="SourceGraphic"/>
 </feMerge>
 </filter>
 </defs>

 {/* Axes */}
 <line x1="80" y1="350" x2="650" y2="350" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
 <line x1="80" y1="50" x2="80" y2="350" stroke="white" strokeOpacity="0.3" strokeWidth="1" />

 {/* Axis Labels */}
 <text x="650" y="370" textAnchor="end" fill="white" fontSize="12">Time (t)</text>
 <text x="30" y="200" textAnchor="middle" fill="white" fontSize="12" transform="rotate(-90, 30, 200)">
 Current Account Balance (X - M)
 </text>

 {/* Zero line (equilibrium) */}
 <line x1="80" y1="200" x2="650" y2="200" stroke="white" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5,5" />
 <text x="70" y="200" textAnchor="end" fill="white" fontSize="10">0</text>
 <text x="660" y="200" fill="white" fontSize="10" opacity="0.6">Equilibrium</text>

 {/* Surplus/Deficit zones */}
 <rect x="80" y="50" width="570" height="150" fill="rgba(34, 211, 238, 0.05)" />
 <text x="620" y="130" textAnchor="end" fill="#22D3EE" fontSize="11" opacity="0.7">SURPLUS</text>
 <rect x="80" y="200" width="570" height="150" fill="rgba(220, 38, 38, 0.05)" />
 <text x="620" y="270" textAnchor="end" fill="#DC2626" fontSize="11" opacity="0.7">DEFICIT</text>

 {/* Initial Balance Point */}
 <circle cx="100" cy="200" r="6" fill="#22D3EE" />
 <text x="100" y="185" textAnchor="middle" fill="#22D3EE" fontSize="9">Initial Balance</text>

 {/* Depreciation Event */}
 <line x1="100" y1="50" x2="100" y2="350" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8,4" />
 <text x="100" y="40" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold">
 Depreciation
 </text>

 {/* J-Curve Path */}
 <motion.path
 d={jCurvePath}
 fill="none"
 stroke="url(#jCurveGradient)"
 strokeWidth="4"
 strokeLinecap="round"
 filter="url(#glow)"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 2.5, ease: "easeInOut" }}
 />

 {/* Key Points on Curve */}
 {/* Worsening point */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.8 }}
 >
 <circle cx="180" cy="260" r="6" fill="#DC2626" />
 <text x="180" y="285" textAnchor="middle" fill="#DC2626" fontSize="9" fontWeight="bold">
 Short-run
 </text>
 <text x="180" y="298" textAnchor="middle" fill="#DC2626" fontSize="8">
 Worsening
 </text>
 </motion.g>

 {/* Turning point */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.5 }}
 >
 <circle cx="320" cy="240" r="6" fill="#F59E0B" />
 <text x="320" y="225" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="bold">
 Turning Point
 </text>
 <text x="320" y="310" textAnchor="middle" fill="white" fontSize="8" opacity="0.6">
 PED becomes elastic
 </text>
 </motion.g>

 {/* Long-run improvement */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 2.2 }}
 >
 <circle cx="550" cy="120" r="6" fill="#22D3EE" />
 <text x="550" y="105" textAnchor="middle" fill="#22D3EE" fontSize="9" fontWeight="bold">
 Long-run
 </text>
 <text x="550" y="145" textAnchor="middle" fill="#22D3EE" fontSize="8">
 Improvement
 </text>
 </motion.g>

 {/* Explanation Boxes */}
 {showFormula ? (
 <g>
 {/* Short-run box */}
 <rect x="120" y="315" width="150" height="55" rx="6" fill="rgba(220, 38, 38, 0.15)" stroke="#DC2626" strokeWidth="1" />
 <text x="195" y="332" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Short-Run (Inelastic)</text>
 <text x="195" y="347" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Contracts already signed</text>
 <text x="195" y="360" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Limited substitutes</text>

 {/* Long-run box */}
 <rect x="430" y="315" width="150" height="55" rx="6" fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" strokeWidth="1" />
 <text x="505" y="332" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Long-Run (Elastic)</text>
 <text x="505" y="347" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• New contracts negotiated</text>
 <text x="505" y="360" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Substitutes found</text>
 </g>
 ): (
 <g>
 {/* Marshall-Lerner Box */}
 <rect x="400" y="50" width="240" height="90" rx="8" fill="rgba(167, 139, 250, 0.15)" stroke="#A78BFA" strokeWidth="2" />
 <text x="520" y="72" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="bold">
 MARSHALL-LERNER CONDITION
 </text>
 <text x="520" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
 |PEDₓ| + |PEDₘ| {'>'} 1
 </text>
 <text x="520" y="115" textAnchor="middle" fill="white" fontSize="9" opacity="0.7">
 Depreciation improves CA only if
 </text>
 <text x="520" y="130" textAnchor="middle" fill="white" fontSize="9" opacity="0.7">
 sum of elasticities exceeds unity
 </text>

 {/* Condition boxes */}
 <rect x="100" y="60" width="120" height="40" rx="4" fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" />
 <text x="160" y="77" textAnchor="middle" fill="#22D3EE" fontSize="9">If condition MET</text>
 <text x="160" y="92" textAnchor="middle" fill="white" fontSize="9">→ CA Improves</text>

 <rect x="240" y="60" width="120" height="40" rx="4" fill="rgba(220, 38, 38, 0.15)" stroke="#DC2626" />
 <text x="300" y="77" textAnchor="middle" fill="#DC2626" fontSize="9">If condition NOT met</text>
 <text x="300" y="92" textAnchor="middle" fill="white" fontSize="9">→ CA Worsens</text>
 </g>
 )}
 </svg>

 {/* Reset Button */}
 <div className="flex justify-center mt-4">
 <button
 onClick={resetAnimation}
 className="px-4 py-2 rounded-lg bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-all border border-white/20"
 >
 ↻ Replay Animation
 </button>
 </div>

 {/* Analysis Box */}
 <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-amber-500/30">
 <p className="text-sm text-white/80">
 <strong className="text-amber-400">Senior Examiner's Note:</strong>{' '}
 The J-Curve is not a permanent phenomenon—it represents the transition from inelastic to elastic demand responses. 
 Empirically, the adjustment period ranges from 6 months to 2 years, depending on the flexibility of the economy. 
 For the Marshall-Lerner condition, most estimates for developed economies suggest elasticities sum to approximately 
 1.5–2.0 in the long run, validating the eventual effectiveness of depreciation—though success depends on 
 avoiding offsetting "imported inflation" from higher import prices.
 </p>
 </div>
 </div>
 );
};

export default JCurveMarshallLernerDiagram;
