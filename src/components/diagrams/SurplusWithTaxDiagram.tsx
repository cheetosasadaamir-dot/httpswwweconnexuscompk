import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

/**
 * Interactive diagram showing how a tax affects consumer and producer surplus
 * and creates deadweight loss - Exam Standard
 */
const SurplusWithTaxDiagram = () => {
  const [showTax, setShowTax] = useState(false);
  
  const width = 500;
  const height = 420;
  const margin = { top: 40, right: 50, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Colors
  const demandColor = 'hsl(185, 100%, 50%)';
  const supplyColor = 'hsl(300, 100%, 60%)';
  const supplyTaxColor = 'hsl(300, 60%, 45%)';
  const consumerSurplusColor = 'hsl(185, 100%, 45%)';
  const producerSurplusColor = 'hsl(300, 100%, 50%)';
  const taxRevenueColor = 'hsl(45, 93%, 55%)';
  const deadweightColor = 'hsl(0, 80%, 50%)';
  const axisColor = 'hsl(220, 14%, 75%)';
  const gridColor = 'hsl(220, 14%, 20%)';

  // Scale functions
  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Key points - original equilibrium
  const demandIntercept = { x: 0, y: 90 };
  const supplyIntercept = { x: 0, y: 10 };
  // D: P = 90 - Q ; S: P = 10 + Q -> Pe=50 at Qe=40
  const equilibrium = { x: 40, y: 50 };
  
  // Tax parameters
  const taxAmount = 20; // $20 tax per unit
  const newSupplyIntercept = { x: 0, y: supplyIntercept.y + taxAmount }; // Supply shifts up by tax
  // New supply: P = 30 + Q ; intersect D: 90-Q = 30+Q -> Q=30, P=60
  const newEquilibrium = { x: 30, y: 60 }; // New equilibrium after tax
  const producerReceives = newEquilibrium.y - taxAmount; // Price producers actually receive

  // Curve paths
  const demandPath = `M ${xScale(0)} ${yScale(demandIntercept.y)} L ${xScale(90)} ${yScale(0)}`;
  const supplyPath = `M ${xScale(0)} ${yScale(supplyIntercept.y)} L ${xScale(90)} ${yScale(100)}`;
  const taxedSupplyPath = `M ${xScale(0)} ${yScale(newSupplyIntercept.y)} L ${xScale(70)} ${yScale(100)}`;

  // Original consumer surplus (before tax)
  const originalCSPath = `
    M ${xScale(0)} ${yScale(equilibrium.y)}
    L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
    L ${xScale(0)} ${yScale(demandIntercept.y)}
    Z
  `;

  // Original producer surplus (before tax)
  const originalPSPath = `
    M ${xScale(0)} ${yScale(supplyIntercept.y)}
    L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
    L ${xScale(0)} ${yScale(equilibrium.y)}
    Z
  `;

  // New consumer surplus (after tax) - smaller triangle
  const newCSPath = `
    M ${xScale(0)} ${yScale(newEquilibrium.y)}
    L ${xScale(newEquilibrium.x)} ${yScale(newEquilibrium.y)}
    L ${xScale(0)} ${yScale(demandIntercept.y)}
    Z
  `;

  // New producer surplus (after tax) - smaller triangle
  const newPSPath = `
    M ${xScale(0)} ${yScale(supplyIntercept.y)}
    L ${xScale(newEquilibrium.x)} ${yScale(producerReceives)}
    L ${xScale(0)} ${yScale(producerReceives)}
    Z
  `;

  // Tax revenue rectangle
  const taxRevenuePath = `
    M ${xScale(0)} ${yScale(newEquilibrium.y)}
    L ${xScale(newEquilibrium.x)} ${yScale(newEquilibrium.y)}
    L ${xScale(newEquilibrium.x)} ${yScale(producerReceives)}
    L ${xScale(0)} ${yScale(producerReceives)}
    Z
  `;

  // Deadweight loss triangle
  const deadweightPath = `
    M ${xScale(newEquilibrium.x)} ${yScale(newEquilibrium.y)}
    L ${xScale(equilibrium.x)} ${yScale(equilibrium.y)}
    L ${xScale(newEquilibrium.x)} ${yScale(producerReceives)}
    Z
  `;

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const }
    }
  };

  return (
    <div className="w-full">
      <h4 className="text-center text-silver-bright font-serif text-lg mb-4">
        Effect of Indirect Tax on Surplus
      </h4>
      
      {/* Control */}
      <div className="flex justify-center mb-6">
        <Button
          variant={showTax ? 'default' : 'outline'}
          onClick={() => setShowTax(!showTax)}
          className="gap-2"
        >
          {showTax ? 'Remove Tax' : 'Apply Tax ($20/unit)'}
        </Button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <line 
                x1={margin.left} 
                y1={margin.top + (chartHeight / 5) * i} 
                x2={margin.left + chartWidth} 
                y2={margin.top + (chartHeight / 5) * i}
              />
              <line 
                x1={margin.left + (chartWidth / 5) * i} 
                y1={margin.top} 
                x2={margin.left + (chartWidth / 5) * i} 
                y2={margin.top + chartHeight}
              />
            </g>
          ))}
        </g>

        {/* Axes */}
        <defs>
          <marker id="arrowhead-tax" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>
        
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left + chartWidth} y2={margin.top + chartHeight}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-tax)"
        />
        <line 
          x1={margin.left} y1={margin.top + chartHeight} 
          x2={margin.left} y2={margin.top - 10}
          stroke={axisColor} strokeWidth="2" markerEnd="url(#arrowhead-tax)"
        />

        <text x={margin.left + chartWidth / 2} y={height - 15} fill={axisColor} fontSize="13" fontFamily="serif" textAnchor="middle">
          Quantity (Q)
        </text>
        <text x={margin.left - 40} y={margin.top + chartHeight / 2} fill={axisColor} fontSize="13" fontFamily="serif" textAnchor="middle" transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`}>
          Price (P)
        </text>

        {/* Surplus areas - conditional on tax state */}
        {!showTax ? (
          <>
            {/* Original CS */}
            <motion.path
              d={originalCSPath}
              fill={consumerSurplusColor}
              opacity={0.35}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            {/* Original PS */}
            <motion.path
              d={originalPSPath}
              fill={producerSurplusColor}
              opacity={0.35}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
          </>
        ) : (
          <>
            {/* New CS (smaller) */}
            <motion.path
              d={newCSPath}
              fill={consumerSurplusColor}
              opacity={0.35}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 0.5 }}
            />
            {/* New PS (smaller) */}
            <motion.path
              d={newPSPath}
              fill={producerSurplusColor}
              opacity={0.35}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 0.5 }}
            />
            {/* Tax Revenue */}
            <motion.path
              d={taxRevenuePath}
              fill={taxRevenueColor}
              opacity={0.4}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            {/* Deadweight Loss */}
            <motion.path
              d={deadweightPath}
              fill={deadweightColor}
              opacity={0.5}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </>
        )}

        {/* Demand Curve */}
        <motion.path
          d={demandPath}
          fill="none"
          stroke={demandColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={xScale(92)} y={yScale(-2)} fill={demandColor} fontSize="14" fontWeight="600">D</text>

        {/* Original Supply Curve */}
        <motion.path
          d={supplyPath}
          fill="none"
          stroke={supplyColor}
          strokeWidth={showTax ? 2 : 3}
          strokeLinecap="round"
          opacity={showTax ? 0.4 : 1}
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <text x={xScale(92)} y={yScale(100)} fill={supplyColor} fontSize="14" fontWeight="600" opacity={showTax ? 0.4 : 1}>S</text>

        {/* Taxed Supply Curve */}
        {showTax && (
          <>
            <motion.path
              d={taxedSupplyPath}
              fill="none"
              stroke={supplyTaxColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.text 
              x={xScale(72)} 
              y={yScale(100)} 
              fill={supplyTaxColor} 
              fontSize="13" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              S + Tax
            </motion.text>
          </>
        )}

        {/* Equilibrium points and labels */}
        {!showTax ? (
          <>
            <motion.circle
              cx={xScale(equilibrium.x)}
              cy={yScale(equilibrium.y)}
              r="6"
              fill="hsl(45, 93%, 55%)"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            />
            <text x={xScale(equilibrium.x) + 12} y={yScale(equilibrium.y) - 8} fill="hsl(45, 93%, 55%)" fontSize="12" fontWeight="600">E</text>
            
            {/* Dashed lines */}
            <line x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)} x2={xScale(equilibrium.x)} y2={margin.top + chartHeight} stroke="hsl(45, 93%, 55%)" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1={xScale(equilibrium.x)} y1={yScale(equilibrium.y)} x2={margin.left} y2={yScale(equilibrium.y)} stroke="hsl(45, 93%, 55%)" strokeWidth="1.5" strokeDasharray="5,3" />
            
            <text x={xScale(equilibrium.x)} y={margin.top + chartHeight + 18} fill="hsl(45, 93%, 55%)" fontSize="11" textAnchor="middle">Qe</text>
            <text x={margin.left - 14} y={yScale(equilibrium.y) + 4} fill="hsl(45, 93%, 55%)" fontSize="11" textAnchor="end">Pe</text>
          </>
        ) : (
          <>
            {/* Old equilibrium (faded) */}
            <circle cx={xScale(equilibrium.x)} cy={yScale(equilibrium.y)} r="4" fill="hsl(45, 93%, 55%)" opacity={0.3} />
            
            {/* New equilibrium */}
            <motion.circle
              cx={xScale(newEquilibrium.x)}
              cy={yScale(newEquilibrium.y)}
              r="6"
              fill={taxRevenueColor}
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            />
            <motion.text 
              x={xScale(newEquilibrium.x) + 12} 
              y={yScale(newEquilibrium.y) - 8} 
              fill={taxRevenueColor} 
              fontSize="11" 
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              E₁
            </motion.text>
            
            {/* Consumer price line */}
            <motion.line 
              x1={xScale(newEquilibrium.x)} y1={yScale(newEquilibrium.y)} 
              x2={margin.left} y2={yScale(newEquilibrium.y)} 
              stroke={demandColor} 
              strokeWidth="1.5" 
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            />
            <motion.text 
              x={margin.left - 14} 
              y={yScale(newEquilibrium.y) + 4} 
              fill={demandColor} 
              fontSize="10" 
              textAnchor="end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Pc
            </motion.text>
            
            {/* Producer receives line */}
            <motion.line 
              x1={xScale(newEquilibrium.x)} y1={yScale(producerReceives)} 
              x2={margin.left} y2={yScale(producerReceives)} 
              stroke={supplyColor} 
              strokeWidth="1.5" 
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            />
            <motion.text 
              x={margin.left - 14} 
              y={yScale(producerReceives) + 4} 
              fill={supplyColor} 
              fontSize="10" 
              textAnchor="end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Pp
            </motion.text>
            
            {/* Tax bracket */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <line x1={xScale(newEquilibrium.x) + 15} y1={yScale(newEquilibrium.y)} x2={xScale(newEquilibrium.x) + 15} y2={yScale(producerReceives)} stroke={taxRevenueColor} strokeWidth="2" />
              <line x1={xScale(newEquilibrium.x) + 10} y1={yScale(newEquilibrium.y)} x2={xScale(newEquilibrium.x) + 20} y2={yScale(newEquilibrium.y)} stroke={taxRevenueColor} strokeWidth="2" />
              <line x1={xScale(newEquilibrium.x) + 10} y1={yScale(producerReceives)} x2={xScale(newEquilibrium.x) + 20} y2={yScale(producerReceives)} stroke={taxRevenueColor} strokeWidth="2" />
              <text x={xScale(newEquilibrium.x) + 28} y={yScale((newEquilibrium.y + producerReceives) / 2) + 4} fill={taxRevenueColor} fontSize="10" fontWeight="600">Tax</text>
            </motion.g>
            
            {/* Quantity line */}
            <motion.line 
              x1={xScale(newEquilibrium.x)} y1={yScale(producerReceives)} 
              x2={xScale(newEquilibrium.x)} y2={margin.top + chartHeight} 
              stroke={taxRevenueColor} 
              strokeWidth="1.5" 
              strokeDasharray="5,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            />
            <text x={xScale(newEquilibrium.x)} y={margin.top + chartHeight + 18} fill={taxRevenueColor} fontSize="10" textAnchor="middle">Q₁</text>
          </>
        )}

        {/* Labels inside areas */}
        {showTax && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <text x={xScale(12)} y={yScale(72)} fill="white" fontSize="9" fontWeight="600">CS</text>
            <text x={xScale(12)} y={yScale(25)} fill="white" fontSize="9" fontWeight="600">PS</text>
            <text x={xScale(15)} y={yScale((newEquilibrium.y + producerReceives) / 2)} fill="white" fontSize="9" fontWeight="600">Tax Rev</text>
            <text x={xScale(43)} y={yScale(50)} fill="white" fontSize="8" fontWeight="600">DWL</text>
          </motion.g>
        )}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: consumerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">Consumer Surplus</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: producerSurplusColor, opacity: 0.5 }} />
          <span className="text-muted-foreground">Producer Surplus</span>
        </div>
        {showTax && (
          <>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: taxRevenueColor, opacity: 0.5 }} />
              <span className="text-muted-foreground">Tax Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: deadweightColor, opacity: 0.5 }} />
              <span className="text-muted-foreground">Deadweight Loss</span>
            </div>
          </>
        )}
      </div>

      {/* Explanation */}
      <motion.div
        key={showTax ? 'tax' : 'no-tax'}
        className="mt-6 p-4 rounded-lg border"
        style={{
          backgroundColor: showTax ? 'hsla(0, 80%, 50%, 0.1)' : 'hsla(145, 70%, 50%, 0.1)',
          borderColor: showTax ? 'hsla(0, 80%, 50%, 0.3)' : 'hsla(145, 70%, 50%, 0.3)'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {!showTax ? (
          <div>
            <h5 className="font-semibold text-emerald-400 mb-2">Free Market Equilibrium</h5>
            <p className="text-sm text-muted-foreground">
              At equilibrium, total welfare (CS + PS) is <strong>maximized</strong>. 
              There is no deadweight loss - the market achieves <strong>allocative efficiency</strong>.
            </p>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold text-red-400 mb-2">Effect of Indirect Tax</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Supply curve shifts <strong>upward</strong> by the tax amount</li>
              <li>• Consumer pays <strong>Pc</strong> (higher), Producer receives <strong>Pp</strong> (lower)</li>
              <li>• <strong>Tax incidence</strong> is shared between consumers and producers</li>
              <li>• <strong className="text-red-400">Deadweight loss (DWL)</strong> represents lost welfare - market no longer allocatively efficient</li>
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SurplusWithTaxDiagram;
