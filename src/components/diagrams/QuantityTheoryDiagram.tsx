import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantityTheoryDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [moneySupply, setMoneySupply] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  // MV = PT constants
  const V = 5; // Velocity (constant)
  const T = 500; // Transactions/Real Output (constant)
  
  // Calculate Price Level
  const P = (moneySupply * V) / T;
  const baseP = (100 * V) / T; // Base price level

  const variables = [
    { symbol: "M", name: "Money Supply", value: `$${moneySupply}`, color: "cambridge-cyan", editable: true },
    { symbol: "V", name: "Velocity of Circulation", value: V.toString(), color: "cambridge-magenta", editable: false },
    { symbol: "P", name: "Price Level", value: P.toFixed(2), color: "cambridge-orange", editable: false },
    { symbol: "T", name: "Real Output/Transactions", value: T.toString(), color: "cambridge-green", editable: false },
  ];

  return (
    <div ref={containerRef} className="glass-card p-4 rounded-xl">
      <h3 className="font-serif text-base text-silver-bright mb-3">Quantity Theory of Money (QTM)</h3>
      
      {/* Main Equation */}
      <div className="text-center p-3 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-4">
        <p className="text-xl font-mono font-bold">
          <span className="text-cambridge-cyan">M</span>
          <span className="text-cambridge-magenta">V</span>
          <span className="text-muted-foreground"> = </span>
          <span className="text-cambridge-orange">P</span>
          <span className="text-cambridge-green">T</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Money Supply × Velocity = Price Level × Transactions
        </p>
      </div>

      {/* Variable Cards */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {variables.map((v, index) => (
          <motion.div
            key={v.symbol}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={`p-2 rounded-lg border border-${v.color}/30 bg-${v.color}/10`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-lg font-bold text-${v.color}`}>{v.symbol}</span>
              <span className={`text-sm font-mono ${v.symbol === 'P' && moneySupply !== 100 ? 'text-cambridge-orange font-bold' : ''}`}>
                {v.value}
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">{v.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Slider */}
      <div className="p-3 bg-muted/30 rounded-lg mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">Adjust Money Supply (M)</span>
          <span className="text-xs font-mono text-cambridge-cyan">${moneySupply}</span>
        </div>
        <input
          type="range"
          min="50"
          max="200"
          value={moneySupply}
          onChange={(e) => setMoneySupply(Number(e.target.value))}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-cambridge-cyan"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

      {/* Result */}
      <motion.div
        className={`p-3 rounded-lg border ${
          moneySupply > 100 
            ? 'border-cambridge-orange/50 bg-cambridge-orange/10' 
            : moneySupply < 100 
              ? 'border-cambridge-green/50 bg-cambridge-green/10'
              : 'border-border bg-muted/30'
        }`}
        animate={{ scale: moneySupply !== 100 ? [1, 1.02, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs text-center">
          {moneySupply > 100 ? (
            <>
              <strong className="text-cambridge-orange">↑M by {((moneySupply - 100) / 100 * 100).toFixed(0)}%</strong>
              {" → "}
              <strong className="text-cambridge-orange">↑P by {((P - baseP) / baseP * 100).toFixed(0)}%</strong>
              <br />
              <span className="text-muted-foreground">With V and T constant, inflation is proportional to money growth</span>
            </>
          ) : moneySupply < 100 ? (
            <>
              <strong className="text-cambridge-green">↓M by {((100 - moneySupply) / 100 * 100).toFixed(0)}%</strong>
              {" → "}
              <strong className="text-cambridge-green">↓P by {((baseP - P) / baseP * 100).toFixed(0)}%</strong>
              <br />
              <span className="text-muted-foreground">Reduced money supply leads to deflation</span>
            </>
          ) : (
            <span className="text-muted-foreground">At equilibrium: M × V = P × T</span>
          )}
        </p>
      </motion.div>

      {/* Assumptions */}
      <div className="mt-3 p-2 bg-muted/20 rounded text-[10px] text-muted-foreground">
        <strong>Monetarist Assumptions:</strong> V (velocity) and T (real output) are constant in the short run. 
        Therefore, any change in M directly causes a proportional change in P.
      </div>
    </div>
  );
};

export default QuantityTheoryDiagram;
