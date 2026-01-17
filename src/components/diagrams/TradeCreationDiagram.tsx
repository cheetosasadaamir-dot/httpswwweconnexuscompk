import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TradeCreationDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const width = 520;
  const height = 400;
  const margin = { top: 40, right: 45, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Price levels
  const domesticPriceTariff = 60; // Domestic price with tariff against partner
  const partnerPrice = 35; // Partner's price (lower cost member)
  
  // Quantity points at domestic price + tariff
  const qS1 = 25; // Domestic supply at high price
  const qD1 = 55; // Domestic demand at high price
  
  // Quantity points after joining customs union (tariff removed between members)
  const qS2 = 15; // Domestic supply at partner price (lower)
  const qD2 = 75; // Domestic demand at partner price (higher)

  return (
    <div ref={containerRef} className="glass-card p-5 my-5">
      <h3 className="font-serif text-xl text-gradient mb-2">Trade Creation: Welfare Gains from Bloc Membership</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Trade creation occurs when high-cost domestic production is replaced by lower-cost imports from a member country after tariff removal.
      </p>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
        {/* Grid */}
        <defs>
          <pattern id="grid-trade-creation" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-trade-creation)" />
        
        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
        <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
        
        {/* Axis Labels */}
        <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Quantity (Q)</text>
        <text x={18} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500" transform={`rotate(-90, 18, ${margin.top + chartHeight / 2})`}>Price (P)</text>

        {/* Domestic Supply Curve - Neon Cyan */}
        <motion.line
          x1={xScale(0)} y1={yScale(15)}
          x2={xScale(65)} y2={yScale(85)}
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6 }}
        />
        <text x={xScale(67)} y={yScale(87)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">S (domestic)</text>

        {/* Domestic Demand Curve - Neon Cyan */}
        <motion.line
          x1={xScale(5)} y1={yScale(90)}
          x2={xScale(95)} y2={yScale(10)}
          stroke="hsl(var(--cambridge-cyan))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <text x={xScale(97)} y={yScale(8)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">D</text>

        {/* Original Price Line (Domestic + Tariff) - Amber Gold dashed */}
        <motion.line
          x1={margin.left} y1={yScale(domesticPriceTariff)}
          x2={margin.left + chartWidth} y2={yScale(domesticPriceTariff)}
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="2"
          strokeDasharray="8,4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        />
        <text x={margin.left - 8} y={yScale(domesticPriceTariff) + 4} textAnchor="end" fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="500">P₁</text>
        <text x={margin.left + chartWidth + 5} y={yScale(domesticPriceTariff) + 4} fill="hsl(var(--muted-foreground))" fontSize="9">Before CU</text>

        {/* New Price Line (Partner Price) - Amber Gold solid */}
        <motion.line
          x1={margin.left} y1={yScale(partnerPrice)}
          x2={margin.left + chartWidth} y2={yScale(partnerPrice)}
          stroke="hsl(var(--cambridge-orange))"
          strokeWidth="2.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        />
        <text x={margin.left - 8} y={yScale(partnerPrice) + 4} textAnchor="end" fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="500">P₂</text>
        <text x={margin.left + chartWidth + 5} y={yScale(partnerPrice) + 4} fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">After CU</text>

        {/* Quantity markers */}
        <motion.line x1={xScale(qS1)} y1={yScale(domesticPriceTariff)} x2={xScale(qS1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        <motion.line x1={xScale(qD1)} y1={yScale(domesticPriceTariff)} x2={xScale(qD1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        <motion.line x1={xScale(qS2)} y1={yScale(partnerPrice)} x2={xScale(qS2)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        <motion.line x1={xScale(qD2)} y1={yScale(partnerPrice)} x2={xScale(qD2)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
        
        <text x={xScale(qS2)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="10" fontWeight="500">Q'ₛ</text>
        <text x={xScale(qS1)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">Qₛ</text>
        <text x={xScale(qD1)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">Qᴅ</text>
        <text x={xScale(qD2)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="10" fontWeight="500">Q'ᴅ</text>

        {/* Welfare Gain Triangle 1 - Production Effect (Left) */}
        <motion.polygon
          points={`${xScale(qS2)},${yScale(partnerPrice)} ${xScale(qS1)},${yScale(domesticPriceTariff)} ${xScale(qS1)},${yScale(partnerPrice)}`}
          fill="hsl(var(--cambridge-green))"
          opacity={0.4}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.4 } : {}}
          transition={{ delay: 0.7 }}
        />
        <text x={(xScale(qS2) + xScale(qS1) + xScale(qS1)) / 3} y={(yScale(partnerPrice) + yScale(domesticPriceTariff) + yScale(partnerPrice)) / 3 + 3} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="bold">a</text>

        {/* Welfare Gain Triangle 2 - Consumption Effect (Right) */}
        <motion.polygon
          points={`${xScale(qD1)},${yScale(partnerPrice)} ${xScale(qD1)},${yScale(domesticPriceTariff)} ${xScale(qD2)},${yScale(partnerPrice)}`}
          fill="hsl(var(--cambridge-green))"
          opacity={0.4}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.4 } : {}}
          transition={{ delay: 0.8 }}
        />
        <text x={(xScale(qD1) + xScale(qD1) + xScale(qD2)) / 3} y={(yScale(partnerPrice) + yScale(domesticPriceTariff) + yScale(partnerPrice)) / 3 + 3} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="bold">b</text>

        {/* Consumer Surplus Gain Rectangle (transfer from producers and tariff revenue) */}
        <motion.rect
          x={xScale(qS1)}
          y={yScale(domesticPriceTariff)}
          width={xScale(qD1) - xScale(qS1)}
          height={yScale(partnerPrice) - yScale(domesticPriceTariff)}
          fill="hsl(var(--cambridge-cyan))"
          opacity={0.2}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.2 } : {}}
          transition={{ delay: 0.6 }}
        />

        {/* Import brackets */}
        <motion.path
          d={`M ${xScale(qS1)} ${yScale(domesticPriceTariff) - 8} L ${xScale(qS1)} ${yScale(domesticPriceTariff) - 16} L ${xScale(qD1)} ${yScale(domesticPriceTariff) - 16} L ${xScale(qD1)} ${yScale(domesticPriceTariff) - 8}`}
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.7 } : {}}
          transition={{ delay: 0.9 }}
        />
        <text x={(xScale(qS1) + xScale(qD1)) / 2} y={yScale(domesticPriceTariff) - 20} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Original Imports</text>

        <motion.path
          d={`M ${xScale(qS2)} ${yScale(partnerPrice) + 8} L ${xScale(qS2)} ${yScale(partnerPrice) + 16} L ${xScale(qD2)} ${yScale(partnerPrice) + 16} L ${xScale(qD2)} ${yScale(partnerPrice) + 8}`}
          fill="none"
          stroke="hsl(var(--cambridge-green))"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
        />
        <text x={(xScale(qS2) + xScale(qD2)) / 2} y={yScale(partnerPrice) + 28} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">Expanded Imports from Partner</text>

        {/* Arrow showing price fall */}
        <motion.path
          d={`M ${margin.left + 20} ${yScale(domesticPriceTariff) + 8} L ${margin.left + 20} ${yScale(partnerPrice) - 8}`}
          fill="none"
          stroke="hsl(var(--cambridge-green))"
          strokeWidth="2"
          markerEnd="url(#arrow-creation)"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
        <defs>
          <marker id="arrow-creation" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="hsl(var(--cambridge-green))" />
          </marker>
        </defs>
        <text x={margin.left + 28} y={(yScale(domesticPriceTariff) + yScale(partnerPrice)) / 2 + 4} fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">Price ↓</text>
      </svg>

      {/* Legend and Explanation */}
      <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
        <div className="p-3 bg-cambridge-green/15 rounded-lg border border-cambridge-green/40">
          <span className="font-semibold text-cambridge-green text-xs">TRIANGLE a: Production Effect</span>
          <p className="text-xs text-muted-foreground mt-1">High-cost domestic production (Qₛ → Q'ₛ) is replaced by lower-cost imports from the member country. Resources released can be reallocated to more efficient uses.</p>
        </div>
        <div className="p-3 bg-cambridge-green/15 rounded-lg border border-cambridge-green/40">
          <span className="font-semibold text-cambridge-green text-xs">TRIANGLE b: Consumption Effect</span>
          <p className="text-xs text-muted-foreground mt-1">Lower prices allow increased consumption (Qᴅ → Q'ᴅ). Consumer surplus expands as previously priced-out consumers enter the market.</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
        <h4 className="font-semibold text-secondary text-sm mb-2">Senior Examiner's Conclusion: Trade Creation</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          "Trade creation represents a <strong>net welfare gain</strong> for the importing country. The two green triangles (a + b) show the efficiency gains from joining the customs union: inefficient domestic production is eliminated, and consumers enjoy lower prices and greater quantity. This welfare gain arises because trade is redirected from a higher-cost source (domestic production behind tariff walls) to a lower-cost source (efficient member country). Trade creation aligns with the principle of comparative advantage and improves allocative efficiency."
        </p>
      </div>
    </div>
  );
};

export default TradeCreationDiagram;
