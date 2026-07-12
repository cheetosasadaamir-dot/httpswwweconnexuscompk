import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CurrentAccountDeficitDiagram =  => {
 const [showCauses, setShowCauses] = useState(true);

 return (
 <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
 <h3 className="text-xl font-bold text-white mb-4 text-center font-playfair">
 Current Account Deficit: Causes & Consequences
 </h3>
 
 {/* Toggle */}
 <div className="flex justify-center gap-4 mb-6">
 <button
 onClick={ => setShowCauses(true)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
 showCauses 
 ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500': 'bg-white/5 text-white/60 border border-white/20'
 }`}
 >
 Causes (Structural & Cyclical)
 </button>
 <button
 onClick={ => setShowCauses(false)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
 !showCauses 
 ? 'bg-amber-500/30 text-amber-400 border border-amber-500': 'bg-white/5 text-white/60 border border-white/20'
 }`}
 >
 Macroeconomic Consequences
 </button>
 </div>

 <svg viewBox="0 0 700 400" className="w-full h-auto">
 {/* Background gradient */}
 <defs>
 <linearGradient id="deficitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor={showCauses ? '#22D3EE': '#F59E0B'} stopOpacity="0.1" />
 <stop offset="100%" stopColor={showCauses ? '#06B6D4': '#DC2626'} stopOpacity="0.05" />
 </linearGradient>
 <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill={showCauses ? '#22D3EE': '#F59E0B'} />
 </marker>
 </defs>
 
 <rect x="0" y="0" width="700" height="400" fill="url(#deficitGrad)" />

 {showCauses ? (
 /* Causes View */
 <g>
 {/* Central Deficit Circle */}
 <circle cx="350" cy="200" r="60" fill="rgba(220, 38, 38, 0.3)" stroke="#DC2626" strokeWidth="3" />
 <text x="350" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CURRENT</text>
 <text x="350" y="212" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACCOUNT</text>
 <text x="350" y="229" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">DEFICIT</text>

 {/* Structural Causes - Left */}
 <rect x="30" y="60" width="160" height="280" rx="8" fill="rgba(34, 211, 238, 0.1)" stroke="#22D3EE" strokeWidth="2" />
 <text x="110" y="85" textAnchor="middle" fill="#22D3EE" fontSize="12" fontWeight="bold">STRUCTURAL CAUSES</text>
 <text x="110" y="102" textAnchor="middle" fill="#22D3EE" fontSize="9">(Long-term, Supply-side)</text>
 
 {/* Structural factors */}
 {[
 { y: 130, text: 'Low Productivity', sub: '↓ Output per worker' },
 { y: 170, text: 'High Unit Labour Costs', sub: '↑ Wage costs > productivity' },
 { y: 210, text: 'Deindustrialisation', sub: '↓ Manufacturing base' },
 { y: 250, text: 'Skill Gaps', sub: 'Lack of R&D capacity' },
 { y: 290, text: 'Poor Infrastructure', sub: '↑ Transport/logistics costs' }
 ].map((item, idx) => (
 <g key={idx}>
 <rect x="45" y={item.y - 15} width="130" height="35" rx="4" fill="rgba(34, 211, 238, 0.15)" />
 <text x="110" y={item.y} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">{item.text}</text>
 <text x="110" y={item.y + 13} textAnchor="middle" fill="white" fontSize="8" opacity="0.6">{item.sub}</text>
 </g>
 ))}

 {/* Arrows from structural */}
 <line x1="190" y1="200" x2="280" y2="200" stroke="#22D3EE" strokeWidth="2" markerEnd="url(#arrowHead)" />

 {/* Cyclical Causes - Right */}
 <rect x="510" y="60" width="160" height="280" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" strokeWidth="2" />
 <text x="590" y="85" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold">CYCLICAL CAUSES</text>
 <text x="590" y="102" textAnchor="middle" fill="#F59E0B" fontSize="9">(Short-term, Demand-side)</text>
 
 {/* Cyclical factors */}
 {[
 { y: 130, text: 'Overvalued Currency', sub: 'X expensive, M cheap' },
 { y: 170, text: 'High Domestic Y', sub: '↑ Income → ↑ Imports (MPM)' },
 { y: 210, text: 'Relative Inflation', sub: 'P↑ faster than partners' },
 { y: 250, text: 'Consumer Boom', sub: '↑ C on imported goods' },
 { y: 290, text: 'Low Savings Rate', sub: 'S < I → borrowing abroad' }
 ].map((item, idx) => (
 <g key={idx}>
 <rect x="525" y={item.y - 15} width="130" height="35" rx="4" fill="rgba(245, 158, 11, 0.15)" />
 <text x="590" y={item.y} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">{item.text}</text>
 <text x="590" y={item.y + 13} textAnchor="middle" fill="white" fontSize="8" opacity="0.6">{item.sub}</text>
 </g>
 ))}

 {/* Arrows from cyclical */}
 <line x1="510" y1="200" x2="420" y2="200" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowHead)" />

 {/* Formula Box */}
 <rect x="260" y="350" width="180" height="40" rx="6" fill="rgba(255,255,255,0.1)" stroke="white" strokeOpacity="0.3" />
 <text x="350" y="373" textAnchor="middle" fill="white" fontSize="11">
 CA Deficit = M {'>'} X + Net Income
 </text>
 </g>
 ): (
 /* Consequences View */
 <g>
 {/* Central Deficit */}
 <circle cx="350" cy="200" r="50" fill="rgba(220, 38, 38, 0.3)" stroke="#DC2626" strokeWidth="3" />
 <text x="350" y="195" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">PERSISTENT</text>
 <text x="350" y="210" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">CA DEFICIT</text>

 {/* Consequence Chain - Circular Flow */}
 {[
 { cx: 150, cy: 100, text: 'Downward Pressure', sub: 'on Exchange Rate', color: '#22D3EE' },
 { cx: 550, cy: 100, text: 'Requires Financial', sub: 'Account Surplus', color: '#F59E0B' },
 { cx: 600, cy: 250, text: 'Increased External', sub: 'Debt (Borrowing)', color: '#A78BFA' },
 { cx: 500, cy: 350, text: 'Future Primary', sub: 'Income Outflows', color: '#EF4444' },
 { cx: 200, cy: 350, text: 'Currency', sub: 'Instability Risk', color: '#EC4899' },
 { cx: 100, cy: 250, text: 'Loss of Foreign', sub: 'Reserves', color: '#10B981' }
 ].map((item, idx) => (
 <g key={idx}>
 <motion.circle
 cx={item.cx}
 cy={item.cy}
 r="55"
 fill={`${item.color}20`}
 stroke={item.color}
 strokeWidth="2"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: idx * 0.1 }}
 />
 <text x={item.cx} y={item.cy - 5} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">{item.text}</text>
 <text x={item.cx} y={item.cy + 8} textAnchor="middle" fill={item.color} fontSize="9">{item.sub}</text>
 </g>
 ))}

 {/* Connecting arrows */}
 <path d="M 400 180 Q 450 120, 495 100" stroke="#22D3EE" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)" />
 <path d="M 550 155 Q 580 200, 600 195" stroke="#F59E0B" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)" />
 <path d="M 580 305 Q 550 340, 555 350" stroke="#A78BFA" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)" />
 <path d="M 445 355 Q 350 370, 255 355" stroke="#EF4444" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)" />
 <path d="M 145 305 Q 120 280, 100 250" stroke="#EC4899" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)" />
 <path d="M 155 200 Q 220 160, 300 180" stroke="#10B981" strokeWidth="2" fill="none" markerEnd="url(#arrowHead)" />

 {/* Warning box */}
 <rect x="250" y="40" width="200" height="35" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" strokeWidth="1" />
 <text x="350" y="62" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="bold">
 ⚠️ Vicious Cycle of Debt Accumulation
 </text>
 </g>
 )}
 </svg>

 {/* Analysis Note */}
 <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
 <p className="text-sm text-white/80">
 <strong className={showCauses ? 'text-cyan-400': 'text-amber-400'}>
 {showCauses ? 'Analytical Framework:': 'Chain of Consequences:'}
 </strong>{' '}
 {showCauses 
 ? 'Structural causes require long-term supply-side reforms (education, infrastructure, R&D), while cyclical causes can be addressed through demand management and exchange rate adjustment. The interplay between both determines the persistence of the deficit.': 'A persistent deficit creates a self-reinforcing cycle: external borrowing today leads to interest payments tomorrow, worsening the Primary Income balance and deepening the deficit. This is the fundamental risk of unsustainable current account positions.'
 }
 </p>
 </div>
 </div>
 );
};

export default CurrentAccountDeficitDiagram;
