import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HarrodDomarDiagram = () => {
  const [savingsRate, setSavingsRate] = useState(20);
  const [capitalOutput, setCapitalOutput] = useState(4);
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

  const growthRate = (savingsRate / capitalOutput).toFixed(1);

  return (
    <div ref={containerRef} className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
        The Harrod-Domar Growth Model
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        Interactive Calculator: Savings, Investment & Economic Growth
      </p>

      {/* Formula Display */}
      <div className="text-center mb-6 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20">
        <p className="text-2xl font-mono text-cyan-400">
          g = s / k
        </p>
        <p className="text-white/60 text-sm mt-2">
          Growth Rate = Savings Ratio ÷ Capital-Output Ratio
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <label className="block text-white/80 text-sm font-semibold mb-2">
            Savings Rate (s): {savingsRate}%
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={savingsRate}
            onChange={(e) => setSavingsRate(Number(e.target.value))}
            className="w-full accent-cyan-400"
          />
          <p className="text-white/50 text-xs mt-1">
            Higher savings → More investment funds
          </p>
        </div>

        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <label className="block text-white/80 text-sm font-semibold mb-2">
            Capital-Output Ratio (k): {capitalOutput}
          </label>
          <input
            type="range"
            min="2"
            max="8"
            step="0.5"
            value={capitalOutput}
            onChange={(e) => setCapitalOutput(Number(e.target.value))}
            className="w-full accent-amber-400"
          />
          <p className="text-white/50 text-xs mt-1">
            Lower ratio → More efficient capital use
          </p>
        </div>
      </div>

      {/* Result Display */}
      <motion.div
        className="text-center p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-white/20"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 0.3 }}
        key={`${savingsRate}-${capitalOutput}`}
      >
        <p className="text-white/60 text-sm">Predicted Annual Growth Rate</p>
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
          {growthRate}%
        </p>
        <p className="text-white/50 text-xs mt-2">
          g = {savingsRate}% ÷ {capitalOutput} = {growthRate}%
        </p>
      </motion.div>

      {/* Visual Diagram */}
      <svg viewBox="0 0 600 200" className="w-full h-auto mt-6">
        <defs>
          <marker id="arrowHD" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22D3EE" />
          </marker>
        </defs>

        {/* Flow Diagram */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {/* Savings Box */}
          <rect x="20" y="70" width="100" height="60" rx="8" fill="rgba(34, 211, 238, 0.2)" stroke="#22D3EE" strokeWidth="2" />
          <text x="70" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Savings (S)</text>
          <text x="70" y="115" textAnchor="middle" fill="#22D3EE" fontSize="14" fontWeight="bold">{savingsRate}%</text>

          {/* Arrow 1 */}
          <line x1="120" y1="100" x2="170" y2="100" stroke="#22D3EE" strokeWidth="2" markerEnd="url(#arrowHD)" />
          <text x="145" y="90" textAnchor="middle" fill="white" fontSize="8" opacity="0.6">finances</text>

          {/* Investment Box */}
          <rect x="180" y="70" width="100" height="60" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="2" />
          <text x="230" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Investment (I)</text>
          <text x="230" y="115" textAnchor="middle" fill="#F59E0B" fontSize="10">I = S (in equilibrium)</text>

          {/* Arrow 2 */}
          <line x1="280" y1="100" x2="330" y2="100" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowHD)" />
          <text x="305" y="90" textAnchor="middle" fill="white" fontSize="8" opacity="0.6">creates</text>

          {/* Capital Box */}
          <rect x="340" y="70" width="100" height="60" rx="8" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" strokeWidth="2" />
          <text x="390" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Capital (K)</text>
          <text x="390" y="115" textAnchor="middle" fill="#A855F7" fontSize="10">k = {capitalOutput}</text>

          {/* Arrow 3 */}
          <line x1="440" y1="100" x2="490" y2="100" stroke="#A855F7" strokeWidth="2" markerEnd="url(#arrowHD)" />
          <text x="465" y="90" textAnchor="middle" fill="white" fontSize="8" opacity="0.6">produces</text>

          {/* Output Box */}
          <rect x="500" y="70" width="80" height="60" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" />
          <text x="540" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Output (Y)</text>
          <text x="540" y="115" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">g = {growthRate}%</text>

          {/* Feedback Loop */}
          <path d="M 540 135 Q 540 170, 300 170 Q 70 170, 70 135" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4,4" />
          <text x="300" y="185" textAnchor="middle" fill="white" fontSize="8" opacity="0.5">Income → Savings feedback</text>
        </motion.g>
      </svg>

      {/* Senior Examiner Analysis */}
      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-amber-500/30">
        <p className="text-sm text-white/80">
          <strong className="text-amber-400">Senior Examiner's Evaluation (AO4):</strong>{' '}
          The Harrod-Domar model provides a simple, mechanistic view of growth—<em>g = s/k</em>—that emphasises the 
          <strong className="text-cyan-400"> 'financing gap'</strong> in developing economies. Its policy implication is clear: 
          increase savings (through foreign aid, FDI, or forced savings) or reduce the capital-output ratio (through technology transfer). 
          However, the model is <span className="text-red-400">severely limited</span>: it ignores (1) diminishing returns to capital; 
          (2) human capital and TFP growth; (3) institutional quality; and (4) the 'absorptive capacity' constraint—many LDCs cannot 
          efficiently deploy large capital inflows. Modern growth theory (Solow, endogenous growth) addresses these omissions.
        </p>
      </div>
    </div>
  );
};

export default HarrodDomarDiagram;
