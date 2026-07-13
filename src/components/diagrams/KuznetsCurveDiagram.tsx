import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const KuznetsCurveDiagram = () => {
  const [showAnnotations, setShowAnnotations] = useState(true);
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
        The Kuznets Curve: Growth & Inequality
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        Relationship Between Economic Development and Income Inequality
      </p>

      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowAnnotations(!showAnnotations)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showAnnotations 
              ? 'bg-amber-500/30 text-amber-400 border border-amber-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          {showAnnotations ? 'Hide Analysis' : 'Show Analysis'}
        </button>
      </div>

      <svg viewBox="0 0 700 420" className="w-full h-auto">
        <defs>
          <linearGradient id="kuznetsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="kuznetsGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <marker id="arrowKuznets" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" fillOpacity="0.6" />
          </marker>
        </defs>

        {/* Background Zones */}
        <rect x="80" y="40" width="200" height="300" fill="rgba(34, 211, 238, 0.05)" />
        <rect x="280" y="40" width="150" height="300" fill="rgba(245, 158, 11, 0.05)" />
        <rect x="430" y="40" width="220" height="300" fill="rgba(16, 185, 129, 0.05)" />

        {/* Zone Labels */}
        {showAnnotations && (
          <>
            <text x="180" y="60" textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="600" opacity="0.8">
              STAGE I
            </text>
            <text x="180" y="75" textAnchor="middle" fill="white" fontSize="9" opacity="0.6">
              Early Development
            </text>
            <text x="355" y="60" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="600" opacity="0.8">
              STAGE II
            </text>
            <text x="355" y="75" textAnchor="middle" fill="white" fontSize="9" opacity="0.6">
              Industrialisation
            </text>
            <text x="540" y="60" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600" opacity="0.8">
              STAGE III
            </text>
            <text x="540" y="75" textAnchor="middle" fill="white" fontSize="9" opacity="0.6">
              Mature Economy
            </text>
          </>
        )}

        {/* Axes */}
        <line x1="80" y1="340" x2="650" y2="340" stroke="white" strokeOpacity="0.4" strokeWidth="2" markerEnd="url(#arrowKuznets)" />
        <line x1="80" y1="340" x2="80" y2="40" stroke="white" strokeOpacity="0.4" strokeWidth="2" markerEnd="url(#arrowKuznets)" />

        {/* Axis Labels */}
        <text x="365" y="380" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
          GDP per Capita (Economic Development)
        </text>
        <text x="30" y="190" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" transform="rotate(-90, 30, 190)">
          Income Inequality (Gini)
        </text>

        {/* Inverted-U Kuznets Curve */}
        <motion.path
          d="M 90 300 Q 180 280, 260 140 Q 340 100, 380 100 Q 440 105, 500 180 Q 560 250, 640 290"
          fill="none"
          stroke="url(#kuznetsGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#kuznetsGlow)"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Peak Point */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <circle cx="380" cy="100" r="8" fill="#F59E0B" />
          <circle cx="380" cy="100" r="12" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
          <text x="380" y="88" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold">
            Peak Inequality
          </text>
        </motion.g>

        {/* Starting Point */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <circle cx="90" cy="300" r="6" fill="#22D3EE" />
          <text x="90" y="320" textAnchor="middle" fill="#22D3EE" fontSize="9">Low Income</text>
          <text x="90" y="332" textAnchor="middle" fill="#22D3EE" fontSize="9">Low Inequality</text>
        </motion.g>

        {/* End Point */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2.2 }}
        >
          <circle cx="640" cy="290" r="6" fill="#10B981" />
          <text x="640" y="310" textAnchor="middle" fill="#10B981" fontSize="9">High Income</text>
          <text x="640" y="322" textAnchor="middle" fill="#10B981" fontSize="9">Lower Inequality</text>
        </motion.g>

        {/* Annotation Boxes */}
        {showAnnotations && (
          <>
            {/* Stage 1 Analysis */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <rect x="100" y="220" width="140" height="60" rx="6" fill="rgba(34, 211, 238, 0.15)" stroke="#22D3EE" strokeWidth="1" />
              <text x="170" y="238" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Rising Inequality</text>
              <text x="170" y="252" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Rural-urban migration</text>
              <text x="170" y="265" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Capital accumulation</text>
              <text x="170" y="278" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Wage differentials</text>
            </motion.g>

            {/* Stage 3 Analysis */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2 }}
            >
              <rect x="480" y="180" width="140" height="60" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1" />
              <text x="550" y="198" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Falling Inequality</text>
              <text x="550" y="212" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Progressive taxation</text>
              <text x="550" y="225" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Welfare state expansion</text>
              <text x="550" y="238" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">• Mass education</text>
            </motion.g>
          </>
        )}

        {/* Turning Point Arrow */}
        <motion.path
          d="M 380 115 L 380 140"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        />
        <motion.text
          x="380"
          y="155"
          textAnchor="middle"
          fill="#F59E0B"
          fontSize="8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          Turning Point
        </motion.text>
      </svg>

      {/* Analysis Box */}
      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-amber-500/30">
        <p className="text-sm text-white/80">
          <strong className="text-amber-400">Senior Examiner's Analysis:</strong>{' '}
          Kuznets (1955) hypothesised that inequality follows an inverted-U path during development. Initially, as economies industrialise, 
          inequality rises due to the <em>dual economy</em> structure where a high-productivity modern sector coexists with low-productivity 
          traditional agriculture. However, <strong className="text-cyan-400"> evaluation</strong> reveals significant critique: the 
          hypothesis was based on limited historical data and may not apply universally. Modern evidence shows that policy choices 
          (progressive taxation, education investment, labour market institutions) can break the 'iron law' of rising inequality—South Korea 
          and Taiwan achieved growth with equity, while Latin American experience suggests the curve is not deterministic.
        </p>
      </div>
    </div>
  );
};

export default KuznetsCurveDiagram;
