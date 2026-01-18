import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PrebischSingerDiagram = () => {
  const [showManufactures, setShowManufactures] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
        The Prebisch-Singer Hypothesis
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        Long-Run Decline in Terms of Trade for Primary Commodity Exporters
      </p>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowManufactures(true)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showManufactures 
              ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          Terms of Trade View
        </button>
        <button
          onClick={() => setShowManufactures(false)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            !showManufactures 
              ? 'bg-amber-500/30 text-amber-400 border border-amber-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          Price Indices View
        </button>
      </div>

      <svg viewBox="0 0 700 400" className="w-full h-auto">
        <defs>
          <linearGradient id="toTDeclineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <filter id="prebischGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <marker id="arrowPrebisch" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" fillOpacity="0.6" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="80" y1="340" x2="650" y2="340" stroke="white" strokeOpacity="0.4" strokeWidth="2" markerEnd="url(#arrowPrebisch)" />
        <line x1="80" y1="340" x2="80" y2="50" stroke="white" strokeOpacity="0.4" strokeWidth="2" markerEnd="url(#arrowPrebisch)" />

        {/* Axis Labels */}
        <text x="365" y="375" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          Time (Long Run)
        </text>
        <text x="100" y="365" textAnchor="start" fill="white" fontSize="10" opacity="0.6">1950</text>
        <text x="600" y="365" textAnchor="end" fill="white" fontSize="10" opacity="0.6">Present</text>

        {showManufactures ? (
          <>
            {/* Y-axis label for ToT */}
            <text x="30" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" transform="rotate(-90, 30, 195)">
              Terms of Trade (Pₓ/Pₘ)
            </text>

            {/* Declining Terms of Trade */}
            <motion.path
              d="M 100 120 Q 200 140, 300 180 Q 400 220, 500 270 Q 550 290, 620 310"
              fill="none"
              stroke="url(#toTDeclineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#prebischGlow)"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Volatility indicators */}
            <motion.path
              d="M 150 115 L 160 135 L 170 110 L 180 140 L 200 130 L 220 155 L 240 145 L 260 175 L 290 165 L 320 195 L 350 185 L 380 210 L 420 200 L 460 235 L 500 225 L 540 260 L 580 250 L 600 280"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeOpacity="0.6"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Key points */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <circle cx="100" cy="120" r="6" fill="#22D3EE" />
              <text x="100" y="105" textAnchor="middle" fill="#22D3EE" fontSize="10" fontWeight="bold">High ToT</text>
            </motion.g>

            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2.2 }}
            >
              <circle cx="620" cy="310" r="6" fill="#DC2626" />
              <text x="620" y="295" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">Low ToT</text>
            </motion.g>

            {/* Trend Arrow */}
            <motion.path
              d="M 200 100 L 550 280"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="8,4"
              strokeOpacity="0.4"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ delay: 1.5, duration: 1 }}
            />
            <motion.text
              x="400"
              y="175"
              textAnchor="middle"
              fill="white"
              fontSize="11"
              opacity="0.7"
              transform="rotate(20, 400, 175)"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
            >
              Secular Decline
            </motion.text>

            {/* Explanation boxes */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
            >
              <rect x="120" y="200" width="150" height="70" rx="6" fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" strokeWidth="1" />
              <text x="195" y="218" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Why ToT Declines:</text>
              <text x="195" y="233" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Low YED for primary goods</text>
              <text x="195" y="246" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• High YED for manufactures</text>
              <text x="195" y="259" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Synthetic substitutes</text>
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2 }}
            >
              <rect x="450" y="100" width="150" height="70" rx="6" fill="rgba(220, 38, 38, 0.15)" stroke="#DC2626" strokeWidth="1" />
              <text x="525" y="118" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Implications for LEDCs:</text>
              <text x="525" y="133" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Export more for same imports</text>
              <text x="525" y="146" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Widening development gap</text>
              <text x="525" y="159" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Dependency trap</text>
            </motion.g>
          </>
        ) : (
          <>
            {/* Y-axis label for Prices */}
            <text x="30" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" transform="rotate(-90, 30, 195)">
              Price Index (Base Year = 100)
            </text>

            {/* 100 baseline */}
            <line x1="80" y1="200" x2="650" y2="200" stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="5,5" />
            <text x="70" y="205" textAnchor="end" fill="white" fontSize="10" opacity="0.6">100</text>

            {/* Manufactures Price Line (Rising) */}
            <motion.path
              d="M 100 200 Q 200 180, 300 150 Q 400 120, 500 100 Q 550 90, 620 75"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#prebischGlow)"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <text x="630" y="75" fill="#22D3EE" fontSize="10" fontWeight="bold">Manufactures (Pₘ)</text>

            {/* Primary Commodities Price Line (Volatile, declining trend) */}
            <motion.path
              d="M 100 200 Q 130 210, 160 230 Q 200 220, 240 250 Q 300 230, 340 270 Q 400 250, 450 290 Q 500 270, 550 300 Q 580 285, 620 310"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <text x="630" y="310" fill="#F59E0B" fontSize="10" fontWeight="bold">Primary (Pₓ)</text>

            {/* Gap indicators */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2.2 }}
            >
              <line x1="400" y1="115" x2="400" y2="260" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
              <text x="415" y="190" fill="white" fontSize="9" opacity="0.7">Widening</text>
              <text x="415" y="202" fill="white" fontSize="9" opacity="0.7">Gap</text>
            </motion.g>

            {/* Volatility annotation */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
            >
              <rect x="200" y="280" width="120" height="35" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="1" />
              <text x="260" y="297" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">High Price Volatility</text>
              <text x="260" y="309" textAnchor="middle" fill="white" fontSize="7" opacity="0.7">Commodity price shocks</text>
            </motion.g>
          </>
        )}
      </svg>

      {/* Formula Box */}
      <div className="mt-4 p-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-center">
        <p className="text-white/80 text-sm font-mono">
          <span className="text-cyan-400">Terms of Trade (ToT)</span> = (Index of Export Prices / Index of Import Prices) × 100
        </p>
        <p className="text-white/60 text-xs mt-1">
          A falling ToT means a country must export more to afford the same volume of imports
        </p>
      </div>

      {/* Senior Examiner Analysis */}
      <div className="mt-4 p-4 rounded-lg bg-slate-800/50 border border-amber-500/30">
        <p className="text-sm text-white/80">
          <strong className="text-amber-400">Senior Examiner's Evaluation (AO4):</strong>{' '}
          The Prebisch-Singer Hypothesis provides the intellectual foundation for <strong>Import Substitution Industrialisation (ISI)</strong> 
          policies adopted by Latin American nations. However, <span className="text-cyan-400">modern critique</span> questions its universal 
          applicability: (1) commodity 'super-cycles' show periods of rising ToT (e.g., 2000s China boom); (2) quality improvements in 
          manufactures mean price indices understate real gains; (3) service exports can bypass the primary goods trap. Nevertheless, the 
          hypothesis remains relevant for <strong>Least Developed Countries (LDCs)</strong> dependent on a narrow basket of unprocessed exports—
          diversification and value-addition remain essential development strategies.
        </p>
      </div>
    </div>
  );
};

export default PrebischSingerDiagram;
