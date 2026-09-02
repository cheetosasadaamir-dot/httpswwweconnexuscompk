import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';

interface MarketEquilibriumInteractiveProps {
  title?: string;
}

const MarketEquilibriumInteractive = ({ title = "Market Equilibrium with Shifts" }: MarketEquilibriumInteractiveProps) => {
  const [showDemandShift, setShowDemandShift] = useState(false);
  const [showSupplyShift, setShowSupplyShift] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const cyanColor = 'hsl(185, 100%, 50%)';
  const magentaColor = 'hsl(300, 100%, 60%)';
  const goldColor = 'hsl(45, 93%, 55%)';

  // Equilibria are solved from the *drawn* line endpoints (expressed as
  // fractions of the inner plot), so every marked point and dashed guide sits
  // exactly on the crossing of the two curves.
  //   D0: (0.00, 0.10) -> (0.90, 0.90)      S0: (0.00, 0.90) -> (0.90, 0.10)
  //   D1: (0.15, 0.10) -> (0.95, 0.80)      S1: (0.15, 0.95) -> (0.95, 0.20)
  const pt = (u: number, v: number) => ({
    x: margin.left + innerWidth * u,
    y: margin.top + innerHeight * v,
  });

  // D0 x S0
  const eq1 = pt(0.45, 0.5);

  // D1 x S0  (demand increase: higher price, higher quantity)
  const eq2Demand = pt(0.52794, 0.43072);

  // S1 x D0  (supply increase: lower price, higher quantity)
  const eq2Supply = pt(0.54239, 0.58212);


  const handleDemandShift = () => {
    setIsAnimating(true);
    setShowSupplyShift(false);
    setTimeout(() => {
      setShowDemandShift(true);
      setIsAnimating(false);
    }, 100);
  };

  const handleSupplyShift = () => {
    setIsAnimating(true);
    setShowDemandShift(false);
    setTimeout(() => {
      setShowSupplyShift(true);
      setIsAnimating(false);
    }, 100);
  };

  const handleReset = () => {
    setShowDemandShift(false);
    setShowSupplyShift(false);
  };

  const currentEq = showDemandShift ? eq2Demand : showSupplyShift ? eq2Supply : eq1;

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h4 className="font-serif text-lg text-silver-bright">{title}</h4>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDemandShift}
            disabled={isAnimating}
            className="gap-2"
          >
            <Play className="w-4 h-4" />
            Shift D → D₁
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSupplyShift}
            disabled={isAnimating}
            className="gap-2"
          >
            <Play className="w-4 h-4" />
            Shift S → S₁
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <marker id="arrowME" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="hsl(220, 14%, 75%)" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="hsl(220, 14%, 75%)"
          strokeWidth={2}
          markerEnd="url(#arrowME)"
        />
        <line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="hsl(220, 14%, 75%)"
          strokeWidth={2}
          markerEnd="url(#arrowME)"
        />

        {/* Original Demand Curve */}
        <line
          x1={margin.left}
          y1={margin.top + innerHeight * 0.1}
          x2={margin.left + innerWidth * 0.9}
          y2={margin.top + innerHeight * 0.9}
          stroke={cyanColor}
          strokeWidth={3}
          opacity={showDemandShift ? 0.4 : 1}
        />

        {/* Shifted Demand Curve */}
        {showDemandShift && (
          <motion.line
            x1={margin.left + innerWidth * 0.15}
            y1={margin.top + innerHeight * 0.1}
            x2={margin.left + innerWidth * 0.95}
            y2={margin.top + innerHeight * 0.8}
            stroke={magentaColor}
            strokeWidth={3}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}

        {/* Original Supply Curve */}
        <line
          x1={margin.left}
          y1={margin.top + innerHeight * 0.9}
          x2={margin.left + innerWidth * 0.9}
          y2={margin.top + innerHeight * 0.1}
          stroke={showSupplyShift ? 'hsl(185, 100%, 50%)' : magentaColor}
          strokeWidth={3}
          opacity={showSupplyShift ? 0.4 : 1}
        />

        {/* Shifted Supply Curve */}
        {showSupplyShift && (
          <motion.line
            x1={margin.left + innerWidth * 0.15}
            y1={margin.top + innerHeight * 0.95}
            x2={margin.left + innerWidth * 0.95}
            y2={margin.top + innerHeight * 0.2}
            stroke={magentaColor}
            strokeWidth={3}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}

        {/* Original Equilibrium dashed lines */}
        <line
          x1={eq1.x}
          y1={eq1.y}
          x2={eq1.x}
          y2={height - margin.bottom}
          stroke={goldColor}
          strokeWidth={1}
          strokeDasharray="4,4"
          opacity={(showDemandShift || showSupplyShift) ? 0.3 : 0.8}
        />
        <line
          x1={margin.left}
          y1={eq1.y}
          x2={eq1.x}
          y2={eq1.y}
          stroke={goldColor}
          strokeWidth={1}
          strokeDasharray="4,4"
          opacity={(showDemandShift || showSupplyShift) ? 0.3 : 0.8}
        />

        {/* New Equilibrium dashed lines */}
        {(showDemandShift || showSupplyShift) && (
          <>
            <motion.line
              x1={currentEq.x}
              y1={currentEq.y}
              x2={currentEq.x}
              y2={height - margin.bottom}
              stroke={goldColor}
              strokeWidth={1.5}
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.line
              x1={margin.left}
              y1={currentEq.y}
              x2={currentEq.x}
              y2={currentEq.y}
              stroke={goldColor}
              strokeWidth={1.5}
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </>
        )}

        {/* Equilibrium Points */}
        <circle
          cx={eq1.x}
          cy={eq1.y}
          r={5}
          fill={goldColor}
          opacity={(showDemandShift || showSupplyShift) ? 0.4 : 1}
        />
        
        {(showDemandShift || showSupplyShift) && (
          <motion.circle
            cx={currentEq.x}
            cy={currentEq.y}
            r={6}
            fill={goldColor}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          />
        )}

        {/* Labels */}
        <text x={margin.left - 10} y={margin.top - 10} fill="hsl(220, 14%, 75%)" fontSize="14" textAnchor="middle" fontWeight="600">P</text>
        <text x={width - margin.right + 20} y={height - margin.bottom + 5} fill="hsl(220, 14%, 75%)" fontSize="14" textAnchor="middle" fontWeight="600">Q</text>

        {/* Curve Labels */}
        <text x={margin.left + innerWidth * 0.85} y={margin.top + innerHeight * 0.95} fill={showDemandShift ? 'hsl(185, 100%, 50%)' : cyanColor} fontSize="13" fontWeight="600" opacity={showDemandShift ? 0.4 : 1}>D</text>
        {showDemandShift && (
          <motion.text
            x={margin.left + innerWidth * 0.92}
            y={margin.top + innerHeight * 0.85}
            fill={magentaColor}
            fontSize="13"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            D₁
          </motion.text>
        )}

        <text x={margin.left + innerWidth * 0.85} y={margin.top + innerHeight * 0.15} fill={showSupplyShift ? 'hsl(185, 100%, 50%)' : magentaColor} fontSize="13" fontWeight="600" opacity={showSupplyShift ? 0.4 : 1}>S</text>
        {showSupplyShift && (
          <motion.text
            x={margin.left + innerWidth * 0.92}
            y={margin.top + innerHeight * 0.25}
            fill={magentaColor}
            fontSize="13"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            S₁
          </motion.text>
        )}

        {/* Equilibrium Labels */}
        <text x={eq1.x + 10} y={eq1.y - 10} fill={goldColor} fontSize="12" fontWeight="600" opacity={(showDemandShift || showSupplyShift) ? 0.4 : 1}>E</text>
        {(showDemandShift || showSupplyShift) && (
          <motion.text
            x={currentEq.x + 12}
            y={currentEq.y - 10}
            fill={goldColor}
            fontSize="12"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            E₁
          </motion.text>
        )}

        {/* Price/Quantity Labels */}
        <text x={margin.left - 20} y={eq1.y + 4} fill="hsl(220, 14%, 60%)" fontSize="11" opacity={(showDemandShift || showSupplyShift) ? 0.3 : 1}>P₀</text>
        <text x={eq1.x} y={height - margin.bottom + 18} fill="hsl(220, 14%, 60%)" fontSize="11" textAnchor="middle" opacity={(showDemandShift || showSupplyShift) ? 0.3 : 1}>Q₀</text>

        {(showDemandShift || showSupplyShift) && (
          <>
            <motion.text
              x={margin.left - 20}
              y={currentEq.y + 4}
              fill={goldColor}
              fontSize="11"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              P₁
            </motion.text>
            <motion.text
              x={currentEq.x}
              y={height - margin.bottom + 18}
              fill={goldColor}
              fontSize="11"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Q₁
            </motion.text>
          </>
        )}

        {/* Origin */}
        <text x={margin.left - 10} y={height - margin.bottom + 18} fill="hsl(220, 14%, 60%)" fontSize="11" textAnchor="middle">0</text>
      </svg>

      {/* Explanation Box */}
      {(showDemandShift || showSupplyShift) && (
        <motion.div
          className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {showDemandShift && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Demand increases (D → D₁):</strong> Equilibrium moves from E to E₁. 
              Price rises from P₀ to P₁, and quantity increases from Q₀ to Q₁.
            </p>
          )}
          {showSupplyShift && (
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Supply increases (S → S₁):</strong> Equilibrium moves from E to E₁.
              Price falls from P₀ to P₁, and quantity increases from Q₀ to Q₁.
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default MarketEquilibriumInteractive;
