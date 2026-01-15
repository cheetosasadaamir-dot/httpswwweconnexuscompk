import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MoneySupplyDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBroadMoney, setShowBroadMoney] = useState(false);
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

  const width = 700;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" as const }
    })
  };

  return (
    <div ref={containerRef} className="my-8 p-6 bg-card rounded-xl border border-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-serif text-xl font-semibold">Money Supply: Narrow vs Broad Money</h3>
        <button
          onClick={() => setShowBroadMoney(!showBroadMoney)}
          className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors"
        >
          {showBroadMoney ? 'Show Narrow Money Only' : 'Expand to Broad Money'}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <radialGradient id="narrowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </radialGradient>
          <radialGradient id="broadGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Broad Money (M4) - Outer circle */}
        {showBroadMoney && (
          <motion.g
            variants={circleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={2}
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={160}
              fill="url(#broadGradient)"
              stroke="hsl(var(--secondary))"
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <text x={centerX} y={centerY - 140} textAnchor="middle" className="fill-secondary text-sm font-semibold">
              M4 (Broad Money)
            </text>
          </motion.g>
        )}

        {/* M2 - Middle circle */}
        {showBroadMoney && (
          <motion.g
            variants={circleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={1}
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={110}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              strokeDasharray="5,3"
            />
            <text x={centerX + 90} y={centerY - 70} textAnchor="start" className="fill-accent text-xs">
              M2
            </text>
          </motion.g>
        )}

        {/* Narrow Money (M0/M1) - Inner circle */}
        <motion.g
          variants={circleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={0}
        >
          <circle
            cx={centerX}
            cy={centerY}
            r={60}
            fill="url(#narrowGradient)"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
          />
          <text x={centerX} y={centerY - 40} textAnchor="middle" className="fill-primary text-sm font-bold">
            M0/M1
          </text>
          <text x={centerX} y={centerY - 20} textAnchor="middle" className="fill-primary text-xs">
            (Narrow Money)
          </text>
        </motion.g>

        {/* Labels inside circles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Narrow money components */}
          <text x={centerX} y={centerY + 5} textAnchor="middle" className="fill-foreground text-xs">
            Cash in circulation
          </text>
          <text x={centerX} y={centerY + 20} textAnchor="middle" className="fill-foreground text-xs">
            + Bank reserves
          </text>
          <text x={centerX} y={centerY + 35} textAnchor="middle" className="fill-foreground text-xs">
            + Sight deposits
          </text>
        </motion.g>

        {/* Broad money labels */}
        {showBroadMoney && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {/* M2 components */}
            <text x={centerX - 80} y={centerY - 80} textAnchor="middle" className="fill-muted-foreground text-xs">
              + Savings deposits
            </text>
            <text x={centerX + 80} y={centerY + 80} textAnchor="middle" className="fill-muted-foreground text-xs">
              + Time deposits
            </text>

            {/* M4 components */}
            <text x={centerX - 120} y={centerY + 120} textAnchor="middle" className="fill-muted-foreground text-xs">
              + Money market funds
            </text>
            <text x={centerX + 120} y={centerY - 110} textAnchor="middle" className="fill-muted-foreground text-xs">
              + Large time deposits
            </text>
            <text x={centerX} y={centerY + 145} textAnchor="middle" className="fill-muted-foreground text-xs">
              + Building society shares
            </text>
          </motion.g>
        )}

        {/* Legend */}
        <g transform={`translate(30, ${height - 80})`}>
          <rect x="0" y="0" width="12" height="12" fill="hsl(var(--primary))" rx="2" />
          <text x="20" y="10" className="fill-foreground text-xs">M0/M1: Notes, coins, bank reserves, sight deposits</text>
          
          {showBroadMoney && (
            <>
              <rect x="0" y="20" width="12" height="12" fill="hsl(var(--accent))" rx="2" />
              <text x="20" y="30" className="fill-foreground text-xs">M2: M1 + savings/time deposits ≤ 2 years</text>
              
              <rect x="0" y="40" width="12" height="12" fill="hsl(var(--secondary))" rx="2" />
              <text x="20" y="50" className="fill-foreground text-xs">M4: M2 + all other deposits (Broad Money)</text>
            </>
          )}
        </g>
      </svg>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-primary/10 rounded-lg">
          <h4 className="font-semibold text-primary mb-2">Narrow Money (M0/M1)</h4>
          <p className="text-sm">
            The most <strong>liquid</strong> form of money that can be immediately used for transactions. 
            Includes physical currency (notes and coins) in circulation, bank reserves held at the central 
            bank, and <strong>sight deposits</strong> (current accounts) that can be withdrawn on demand.
          </p>
        </div>
        <div className="p-4 bg-secondary/10 rounded-lg">
          <h4 className="font-semibold text-secondary mb-2">Broad Money (M4)</h4>
          <p className="text-sm">
            Includes narrow money plus <strong>near money</strong> – assets that can be quickly converted 
            to cash. This includes savings accounts, time deposits, money market funds, and building society 
            shares. These are less liquid but still part of the money supply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoneySupplyDiagram;
