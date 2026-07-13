import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Game Theory: Prisoner's Dilemma Diagram
 *  A2 Level - Oligopoly Interdependence
 * Shows dominant strategy, Nash Equilibrium, and collusion outcomes
 */
const GameTheoryDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const payoffs = [
    { id: 'HH', firmA: 'High', firmB: 'High', payoffA: 5, payoffB: 5, isNash: false, isCollusion: true },
    { id: 'HL', firmA: 'High', firmB: 'Low', payoffA: 1, payoffB: 8, isNash: false, isCollusion: false },
    { id: 'LH', firmA: 'Low', firmB: 'High', payoffA: 8, payoffB: 1, isNash: false, isCollusion: false },
    { id: 'LL', firmA: 'Low', firmB: 'Low', payoffA: 3, payoffB: 3, isNash: true, isCollusion: false },
  ];

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
        Game Theory: The Prisoner's Dilemma in Oligopoly
      </h4>
      <p className="text-xs text-muted-foreground text-center mb-6">
        Payoff Matrix showing profit outcomes (£m) for each strategy combination
      </p>

      <div className="max-w-2xl mx-auto">
        {/* Matrix Header */}
        <div className="flex justify-center mb-4">
          <div className="text-center">
            <span className="text-primary font-semibold text-sm">Firm B's Strategy</span>
          </div>
        </div>

        <div className="flex">
          {/* Row Labels */}
          <div className="flex flex-col justify-center items-center mr-4">
            <span className="text-secondary font-semibold text-sm -rotate-90 whitespace-nowrap">
              Firm A's Strategy
            </span>
          </div>

          <div className="flex-1">
            {/* Column Headers */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div></div>
              <motion.div 
                className="text-center p-2 bg-primary/10 rounded-lg border border-primary/30"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="text-primary font-medium text-sm">High Price</span>
              </motion.div>
              <motion.div 
                className="text-center p-2 bg-primary/10 rounded-lg border border-primary/30"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="text-primary font-medium text-sm">Low Price</span>
              </motion.div>
            </div>

            {/* Row 1: Firm A High Price */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              <motion.div 
                className="text-center p-2 bg-secondary/10 rounded-lg border border-secondary/30 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <span className="text-secondary font-medium text-sm">High Price</span>
              </motion.div>
              
              <motion.div
                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  hoveredCell === 'HH' 
                    ? 'bg-green-500/20 border-green-400' 
                    : 'bg-card/50 border-silver/20'
                }`}
                variants={cellVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.6 }}
                onMouseEnter={() => setHoveredCell('HH')}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-[8px] rounded-full font-bold">
                  COLLUSION
                </div>
                <div className="text-center">
                  <div className="text-secondary font-bold text-lg">A: £5m</div>
                  <div className="text-primary font-bold text-lg">B: £5m</div>
                </div>
              </motion.div>

              <motion.div
                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  hoveredCell === 'HL' 
                    ? 'bg-amber-500/20 border-amber-400' 
                    : 'bg-card/50 border-silver/20'
                }`}
                variants={cellVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.7 }}
                onMouseEnter={() => setHoveredCell('HL')}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div className="text-center">
                  <div className="text-secondary font-bold text-lg">A: £1m</div>
                  <div className="text-primary font-bold text-lg">B: £8m</div>
                </div>
                <p className="text-[8px] text-muted-foreground text-center mt-1">B undercuts A</p>
              </motion.div>
            </div>

            {/* Row 2: Firm A Low Price */}
            <div className="grid grid-cols-3 gap-2">
              <motion.div 
                className="text-center p-2 bg-secondary/10 rounded-lg border border-secondary/30 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <span className="text-secondary font-medium text-sm">Low Price</span>
              </motion.div>
              
              <motion.div
                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  hoveredCell === 'LH' 
                    ? 'bg-amber-500/20 border-amber-400' 
                    : 'bg-card/50 border-silver/20'
                }`}
                variants={cellVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 0.9 }}
                onMouseEnter={() => setHoveredCell('LH')}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div className="text-center">
                  <div className="text-secondary font-bold text-lg">A: £8m</div>
                  <div className="text-primary font-bold text-lg">B: £1m</div>
                </div>
                <p className="text-[8px] text-muted-foreground text-center mt-1">A undercuts B</p>
              </motion.div>

              <motion.div
                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  hoveredCell === 'LL' 
                    ? 'bg-red-500/20 border-red-400' 
                    : 'bg-card/50 border-silver/20'
                }`}
                variants={cellVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: 1.0 }}
                onMouseEnter={() => setHoveredCell('LL')}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-red-500 text-white text-[8px] rounded-full font-bold">
                  NASH
                </div>
                <div className="text-center">
                  <div className="text-secondary font-bold text-lg">A: £3m</div>
                  <div className="text-primary font-bold text-lg">B: £3m</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <motion.div 
          className="mt-6 grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <h5 className="font-semibold text-red-400 text-sm mb-2">Nash Equilibrium (Low, Low)</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Dominant Strategy:</strong> Each firm's best response is "Low Price" regardless of rival's choice. 
              Firm A: If B goes High, A gets £8m (Low) vs £5m (High). If B goes Low, A gets £3m (Low) vs £1m (High). 
              → <span className="text-red-400">Low Price dominates for both firms</span>.
            </p>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <h5 className="font-semibold text-green-400 text-sm mb-2">Collusion Outcome (High, High)</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Joint Profit Maximum:</strong> Total = £10m. But this outcome is <span className="text-amber-400">unstable</span>: 
              each firm has an incentive to cheat (deviate to Low → gain £8m vs £5m). 
              This explains why cartels often break down without enforcement mechanisms.
            </p>
          </div>
        </motion.div>

        {/* Chain of Analysis */}
        <motion.div 
          className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Chain of Analysis:</strong> In a one-shot game, both firms choose their 
            <span className="text-red-400"> dominant strategy</span> (Low Price) → Nash Equilibrium at (£3m, £3m) → 
            <span className="text-amber-400"> Sub-optimal for both</span> compared to collusion → This "self-defeating rationality" 
            explains price wars, advertising spirals, and the welfare implications of oligopolistic competition. 
            <span className="text-green-400"> Repeated games</span> may sustain collusion through tit-for-tat strategies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GameTheoryDiagram;
