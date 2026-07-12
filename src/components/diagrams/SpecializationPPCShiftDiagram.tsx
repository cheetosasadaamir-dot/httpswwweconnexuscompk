import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SpecializationPPCShiftDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const [showShift, setShowShift] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 },
 { threshold: 0.3 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 const width = 500;
 const height = 380;
 const margin = { top: 40, right: 40, bottom: 60, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Original PPC curve points
 const originalPPC = [
 { x: 0, y: 100 },
 { x: 20, y: 98 },
 { x: 40, y: 92 },
 { x: 60, y: 82 },
 { x: 80, y: 65 },
 { x: 100, y: 0 }
 ];

 // Shifted PPC curve points (after specialization)
 const shiftedPPC = [
 { x: 0, y: 130 },
 { x: 26, y: 127 },
 { x: 52, y: 120 },
 { x: 78, y: 107 },
 { x: 104, y: 85 },
 { x: 130, y: 0 }
 ];

 const xScale = (val: number) => (val / 130) * chartWidth;
 const yScale = (val: number) => chartHeight - (val / 130) * chartHeight;

 const createPath = (points: { x: number; y: number }[]) => {
 return points.map((p, i) => {
 const x = margin.left + xScale(p.x);
 const y = margin.top + yScale(p.y);
 return i === 0 ? `M ${x} ${y}`: `L ${x} ${y}`;
 }).join(' ');
 };

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: {
 pathLength: 1,
 opacity: 1,
 transition: { duration: 1.5, ease: 'easeInOut' as const }
 }
 };

 return (
 <div ref={containerRef} className="w-full">
 <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
 Specialization & the Outward Shift of the PPC
 </h4>
 
 <div className="flex justify-center mb-4">
 <button
 onClick={ => setShowShift(!showShift)}
 className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
 showShift
 ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40': 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
 }`}
 >
 {showShift ? '← Before Specialization': 'Apply Specialization →'}
 </button>
 </div>

 <svg width={width} height={height} className="mx-auto">
 {/* Grid */}
 <defs>
 <pattern id="specGrid" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
 </pattern>
 <linearGradient id="specOriginalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#94a3b8" />
 <stop offset="100%" stopColor="#64748b" />
 </linearGradient>
 <linearGradient id="specShiftedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#22d3ee" />
 <stop offset="100%" stopColor="#06b6d4" />
 </linearGradient>
 <filter id="specGlow">
 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
 <feMerge>
 <feMergeNode in="coloredBlur"/>
 <feMergeNode in="SourceGraphic"/>
 </feMerge>
 </filter>
 </defs>

 <rect
 x={margin.left}
 y={margin.top}
 width={chartWidth}
 height={chartHeight}
 fill="url(#specGrid)"
 />

 {/* Axes */}
 <line
 x1={margin.left}
 y1={margin.top + chartHeight}
 x2={margin.left + chartWidth}
 y2={margin.top + chartHeight}
 stroke="rgba(148, 163, 184, 0.4)"
 strokeWidth="2"
 />
 <line
 x1={margin.left}
 y1={margin.top}
 x2={margin.left}
 y2={margin.top + chartHeight}
 stroke="rgba(148, 163, 184, 0.4)"
 strokeWidth="2"
 />

 {/* Axis Labels */}
 <text
 x={margin.left + chartWidth / 2}
 y={height - 10}
 textAnchor="middle"
 className="fill-silver-muted text-sm"
 >
 Consumer Goods (Units)
 </text>
 <text
 x={15}
 y={margin.top + chartHeight / 2}
 textAnchor="middle"
 className="fill-silver-muted text-sm"
 transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}
 >
 Capital Goods (Units)
 </text>

 {/* Original PPC Curve */}
 {isVisible && (
 <motion.path
 d={createPath(originalPPC)}
 fill="none"
 stroke="url(#specOriginalGradient)"
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 style={{ opacity: showShift ? 0.4: 1 }}
 />
 )}

 {/* Shifted PPC Curve */}
 {isVisible && showShift && (
 <motion.path
 d={createPath(shiftedPPC)}
 fill="none"
 stroke="url(#specShiftedGradient)"
 strokeWidth="3"
 strokeLinecap="round"
 filter="url(#specGlow)"
 variants={curveVariants}
 initial="hidden"
 animate="visible"
 />
 )}

 {/* Arrow showing shift */}
 {showShift && (
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 >
 <defs>
 <marker
 id="specArrowhead"
 markerWidth="10"
 markerHeight="7"
 refX="10"
 refY="3.5"
 orient="auto"
 >
 <polygon points="0 0, 10 3.5, 0 7" fill="#22d3ee" />
 </marker>
 </defs>
 <line
 x1={margin.left + xScale(50)}
 y1={margin.top + yScale(50)}
 x2={margin.left + xScale(70)}
 y2={margin.top + yScale(70)}
 stroke="#22d3ee"
 strokeWidth="2"
 strokeDasharray="5,3"
 markerEnd="url(#specArrowhead)"
 />
 <text
 x={margin.left + xScale(65)}
 y={margin.top + yScale(55)}
 className="fill-cyan-400 text-xs font-medium"
 >
 Shift
 </text>
 </motion.g>
 )}

 {/* Labels */}
 <text
 x={margin.left + xScale(85)}
 y={margin.top + yScale(35)}
 className="fill-silver-muted text-xs"
 >
 PPC₁
 </text>
 {showShift && (
 <motion.text
 x={margin.left + xScale(115)}
 y={margin.top + yScale(50)}
 className="fill-cyan-400 text-xs font-medium"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1 }}
 >
 PPC₂
 </motion.text>
 )}

 {/* Origin */}
 <text
 x={margin.left - 15}
 y={margin.top + chartHeight + 20}
 className="fill-silver-muted text-sm"
 >
 O
 </text>
 </svg>

 {/* Explanation Cards */}
 <div className="grid md:grid-cols-2 gap-4 mt-6">
 <div className={`p-4 rounded-xl border transition-all duration-300 ${
 !showShift 
 ? 'bg-slate-500/10 border-slate-500/30': 'bg-slate-500/5 border-slate-500/10'
 }`}>
 <h5 className="font-semibold text-slate-400 mb-2 text-sm">Before Specialization (PPC₁)</h5>
 <p className="text-xs text-muted-foreground">
 The economy operates with limited productivity. Workers perform multiple tasks, 
 machinery is general-purpose, and output per worker is relatively low.
 </p>
 </div>
 <div className={`p-4 rounded-xl border transition-all duration-300 ${
 showShift 
 ? 'bg-cyan-500/10 border-cyan-500/30': 'bg-cyan-500/5 border-cyan-500/10'
 }`}>
 <h5 className="font-semibold text-cyan-400 mb-2 text-sm">After Specialization (PPC₂)</h5>
 <p className="text-xs text-muted-foreground">
 The PPC shifts <strong>outward</strong>, indicating an increase in the economy's 
 <strong> productive capacity</strong>. More of both goods can now be produced 
 with the same resources.
 </p>
 </div>
 </div>

 {/* Key Insight */}
 <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/20">
 <p className="text-sm text-silver-bright text-center">
 <span className="text-cyan-400 font-semibold">Key Insight:</span> Specialization leads to 
 <span className="text-amber-400 font-semibold"> increased productivity</span>, which 
 shifts the PPC outward—representing <span className="text-cyan-400">economic growth</span>.
 </p>
 </div>
 </div>
 );
};

export default SpecializationPPCShiftDiagram;
