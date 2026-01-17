import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TradeDiversionDiagram = () => {
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

  const width = 540;
  const height = 420;
  const margin = { top: 40, right: 50, bottom: 65, left: 65 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Three price levels (crucial for trade diversion)
  const worldPriceCET = 55;      // World price from efficient non-member + CET
  const memberPrice = 45;        // Inefficient member price (no tariff within bloc)
  const worldPriceActual = 30;   // Actual world price from most efficient producer (before CET)
  
  // Quantity points at world price + CET (before customs union)
  const qS1 = 22;  // Domestic supply at P_world + CET
  const qD1 = 58;  // Domestic demand at P_world + CET
  
  // Quantity points at member price (after joining CU - imports from member)
  const qS2 = 18;  // Domestic supply at member price
  const qD2 = 68;  // Domestic demand at member price

  const BeforeCUDiagram = () => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
      {/* Grid */}
      <defs>
        <pattern id="grid-diversion-before" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-diversion-before)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      {/* Axis Labels */}
      <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Quantity (Q)</text>
      <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Price (P)</text>

      {/* Supply Curve - Neon Cyan */}
      <motion.line
        x1={xScale(0)} y1={yScale(12)}
        x2={xScale(60)} y2={yScale(82)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <text x={xScale(62)} y={yScale(84)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">S (domestic)</text>

      {/* Demand Curve - Neon Cyan */}
      <motion.line
        x1={xScale(5)} y1={yScale(90)}
        x2={xScale(95)} y2={yScale(12)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <text x={xScale(97)} y={yScale(10)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">D</text>

      {/* Actual World Price (efficient non-member) - Amber Gold */}
      <motion.line
        x1={margin.left} y1={yScale(worldPriceActual)}
        x2={margin.left + chartWidth} y2={yScale(worldPriceActual)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.6 } : {}}
        transition={{ delay: 0.3 }}
      />
      <text x={margin.left - 8} y={yScale(worldPriceActual) + 4} textAnchor="end" fill="hsl(var(--cambridge-orange))" fontSize="10">Pᵥ</text>
      <text x={margin.left + chartWidth + 5} y={yScale(worldPriceActual) + 4} fill="hsl(var(--muted-foreground))" fontSize="8">World (efficient)</text>

      {/* World Price + CET - Amber Gold solid */}
      <motion.line
        x1={margin.left} y1={yScale(worldPriceCET)}
        x2={margin.left + chartWidth} y2={yScale(worldPriceCET)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      />
      <text x={margin.left - 8} y={yScale(worldPriceCET) + 4} textAnchor="end" fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="500">Pᵥ+t</text>
      <text x={margin.left + chartWidth + 5} y={yScale(worldPriceCET) + 4} fill="hsl(var(--cambridge-orange))" fontSize="8" fontWeight="500">World + CET</text>

      {/* Quantity markers */}
      <motion.line x1={xScale(qS1)} y1={yScale(worldPriceCET)} x2={xScale(qS1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
      <motion.line x1={xScale(qD1)} y1={yScale(worldPriceCET)} x2={xScale(qD1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
      
      <text x={xScale(qS1)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">Q₁</text>
      <text x={xScale(qD1)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">Q₂</text>

      {/* Tariff Revenue Rectangle */}
      <motion.rect
        x={xScale(qS1)}
        y={yScale(worldPriceCET)}
        width={xScale(qD1) - xScale(qS1)}
        height={yScale(worldPriceActual) - yScale(worldPriceCET)}
        fill="hsl(var(--cambridge-yellow))"
        opacity={0.35}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.35 } : {}}
        transition={{ delay: 0.6 }}
      />
      <text x={(xScale(qS1) + xScale(qD1)) / 2} y={(yScale(worldPriceCET) + yScale(worldPriceActual)) / 2 + 4} textAnchor="middle" fill="hsl(var(--cambridge-yellow))" fontSize="10" fontWeight="600">Tariff Revenue</text>

      {/* Imports bracket */}
      <motion.path
        d={`M ${xScale(qS1)} ${yScale(worldPriceCET) - 8} L ${xScale(qS1)} ${yScale(worldPriceCET) - 16} L ${xScale(qD1)} ${yScale(worldPriceCET) - 16} L ${xScale(qD1)} ${yScale(worldPriceCET) - 8}`}
        fill="none"
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      />
      <text x={(xScale(qS1) + xScale(qD1)) / 2} y={yScale(worldPriceCET) - 20} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="9" fontWeight="500">Imports from Non-Member</text>
    </svg>
  );

  const AfterCUDiagram = () => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
      {/* Grid */}
      <defs>
        <pattern id="grid-diversion-after" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-diversion-after)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      {/* Axis Labels */}
      <text x={margin.left + chartWidth / 2} y={height - 15} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Quantity (Q)</text>
      <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Price (P)</text>

      {/* Supply Curve */}
      <motion.line
        x1={xScale(0)} y1={yScale(12)}
        x2={xScale(60)} y2={yScale(82)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <text x={xScale(62)} y={yScale(84)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">S (domestic)</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(5)} y1={yScale(90)}
        x2={xScale(95)} y2={yScale(12)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <text x={xScale(97)} y={yScale(10)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">D</text>

      {/* All three price levels */}
      {/* Actual World Price */}
      <motion.line
        x1={margin.left} y1={yScale(worldPriceActual)}
        x2={margin.left + chartWidth} y2={yScale(worldPriceActual)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.5 } : {}}
        transition={{ delay: 0.3 }}
      />
      <text x={margin.left - 8} y={yScale(worldPriceActual) + 4} textAnchor="end" fill="hsl(var(--cambridge-orange))" fontSize="9">Pᵥ</text>

      {/* World + CET (old price) */}
      <motion.line
        x1={margin.left} y1={yScale(worldPriceCET)}
        x2={margin.left + chartWidth} y2={yScale(worldPriceCET)}
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="1.5"
        strokeDasharray="8,4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.5 } : {}}
        transition={{ delay: 0.35 }}
      />
      <text x={margin.left - 8} y={yScale(worldPriceCET) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="9">Pᵥ+t</text>

      {/* Member Price (new price after CU) - Amber Gold solid */}
      <motion.line
        x1={margin.left} y1={yScale(memberPrice)}
        x2={margin.left + chartWidth} y2={yScale(memberPrice)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      />
      <text x={margin.left - 8} y={yScale(memberPrice) + 4} textAnchor="end" fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="500">Pₘ</text>
      <text x={margin.left + chartWidth + 5} y={yScale(memberPrice) + 4} fill="hsl(var(--cambridge-orange))" fontSize="8" fontWeight="500">Member Price</text>

      {/* Quantity markers */}
      <motion.line x1={xScale(qS1)} y1={yScale(worldPriceCET)} x2={xScale(qS1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.4 } : {}} />
      <motion.line x1={xScale(qD1)} y1={yScale(worldPriceCET)} x2={xScale(qD1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.4 } : {}} />
      <motion.line x1={xScale(qS2)} y1={yScale(memberPrice)} x2={xScale(qS2)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
      <motion.line x1={xScale(qD2)} y1={yScale(memberPrice)} x2={xScale(qD2)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />

      <text x={xScale(qS2)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">Q'₁</text>
      <text x={xScale(qS1)} y={yScale(0) + 35} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Q₁</text>
      <text x={xScale(qD1)} y={yScale(0) + 35} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Q₂</text>
      <text x={xScale(qD2)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">Q'₂</text>

      {/* Consumer Surplus Gain (small) */}
      <motion.polygon
        points={`${xScale(qS2)},${yScale(memberPrice)} ${xScale(qS1)},${yScale(worldPriceCET)} ${xScale(qS1)},${yScale(memberPrice)}`}
        fill="hsl(var(--cambridge-green))"
        opacity={0.4}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.4 } : {}}
        transition={{ delay: 0.6 }}
      />
      
      <motion.polygon
        points={`${xScale(qD1)},${yScale(memberPrice)} ${xScale(qD1)},${yScale(worldPriceCET)} ${xScale(qD2)},${yScale(memberPrice)}`}
        fill="hsl(var(--cambridge-green))"
        opacity={0.4}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.4 } : {}}
        transition={{ delay: 0.65 }}
      />

      {/* TRADE DIVERSION LOSS RECTANGLE - Critical */}
      <motion.rect
        x={xScale(qS2)}
        y={yScale(memberPrice)}
        width={xScale(qD2) - xScale(qS2)}
        height={yScale(worldPriceActual) - yScale(memberPrice)}
        fill="hsl(var(--destructive))"
        opacity={0.35}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.35 } : {}}
        transition={{ delay: 0.7 }}
      />
      <text x={(xScale(qS2) + xScale(qD2)) / 2} y={(yScale(memberPrice) + yScale(worldPriceActual)) / 2 + 4} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="bold">TRADE DIVERSION LOSS</text>
      <text x={(xScale(qS2) + xScale(qD2)) / 2} y={(yScale(memberPrice) + yScale(worldPriceActual)) / 2 + 16} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8">(Pₘ - Pᵥ) × Imports</text>

      {/* Lost tariff revenue indicator */}
      <motion.rect
        x={xScale(qS1)}
        y={yScale(worldPriceCET)}
        width={xScale(qD1) - xScale(qS1)}
        height={yScale(worldPriceActual) - yScale(worldPriceCET)}
        fill="none"
        stroke="hsl(var(--cambridge-yellow))"
        strokeWidth="2"
        strokeDasharray="6,4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.8 } : {}}
        transition={{ delay: 0.8 }}
      />
      <text x={(xScale(qS1) + xScale(qD1)) / 2} y={yScale(worldPriceCET) + 15} textAnchor="middle" fill="hsl(var(--cambridge-yellow))" fontSize="8" fontWeight="500">Lost Tariff Revenue</text>

      {/* Imports bracket */}
      <motion.path
        d={`M ${xScale(qS2)} ${yScale(memberPrice) + 8} L ${xScale(qS2)} ${yScale(memberPrice) + 16} L ${xScale(qD2)} ${yScale(memberPrice) + 16} L ${xScale(qD2)} ${yScale(memberPrice) + 8}`}
        fill="none"
        stroke="hsl(var(--destructive))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
      />
      <text x={(xScale(qS2) + xScale(qD2)) / 2} y={yScale(memberPrice) + 28} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="500">Imports from Less-Efficient Member</text>
    </svg>
  );

  return (
    <div ref={containerRef} className="glass-card p-5 my-5">
      <h3 className="font-serif text-xl text-gradient mb-2">Trade Diversion: Welfare Loss from Bloc Membership</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Trade diversion occurs when low-cost imports from an efficient non-member are replaced by higher-cost imports from a less efficient member, due to the Common External Tariff.
      </p>
      
      <Tabs defaultValue="before" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="before">Before Customs Union</TabsTrigger>
          <TabsTrigger value="after">After Joining (Trade Diversion)</TabsTrigger>
        </TabsList>

        <TabsContent value="before">
          <BeforeCUDiagram />
          <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm space-y-2">
            <p><strong className="text-foreground">Before Customs Union:</strong> The country imports from the most efficient world producer at price P<sub>w</sub> + tariff. The <span className="text-cambridge-yellow font-semibold">yellow rectangle</span> shows tariff revenue collected by the government.</p>
            <p className="text-muted-foreground">Although the tariff raises prices above the free-trade level, imports still come from the globally most efficient producer. Government revenue partially offsets the consumer welfare loss.</p>
          </div>
        </TabsContent>

        <TabsContent value="after">
          <AfterCUDiagram />
          <div className="mt-4 space-y-3 text-sm">
            <div className="p-3 bg-muted/30 rounded-lg">
              <strong className="text-foreground">After Joining Customs Union:</strong> The CET is maintained against non-members, but tariffs are removed between members. Imports now come from a <strong>less efficient member</strong> at price P<sub>m</sub> instead of the efficient non-member.
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-cambridge-green/15 rounded-lg border border-cambridge-green/40">
                <span className="font-semibold text-cambridge-green text-xs">SMALL GREEN TRIANGLES</span>
                <p className="text-xs text-muted-foreground mt-1">Consumer surplus gain from lower price (P<sub>w</sub>+t → P<sub>m</sub>)</p>
              </div>
              <div className="p-3 bg-destructive/15 rounded-lg border border-destructive/40">
                <span className="font-semibold text-destructive text-xs">RED RECTANGLE: DIVERSION LOSS</span>
                <p className="text-xs text-muted-foreground mt-1">Extra cost of buying from less efficient member = (P<sub>m</sub> - P<sub>w</sub>) × Imports</p>
              </div>
            </div>
            <div className="p-3 bg-cambridge-yellow/10 rounded-lg border border-cambridge-yellow/30 text-xs">
              <p className="font-semibold text-cambridge-yellow mb-1">Critical: Lost Tariff Revenue</p>
              <p className="text-muted-foreground">The <span className="text-cambridge-yellow">yellow dashed rectangle</span> shows tariff revenue that was previously collected on imports from the efficient non-member. This revenue is now <strong>lost entirely</strong>—it does not transfer to consumers or producers; it represents government revenue foregone.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
        <h4 className="font-semibold text-destructive text-sm mb-2">Senior Examiner's Conclusion: Trade Diversion</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          "Trade diversion represents a potential <strong>net welfare loss</strong> for the importing country. While consumers gain from a lower price (P<sub>w</sub>+t falls to P<sub>m</sub>), the country now pays <strong>more per unit</strong> for its imports than the true world price (P<sub>m</sub> &gt; P<sub>w</sub>). The red rectangle shows this efficiency loss: resources flow to a less efficient producer simply because they are inside the bloc. If this diversion loss exceeds the consumer surplus gains (green triangles), the country is worse off than before joining. Trade diversion violates global comparative advantage by discriminating against the most efficient producer based on political bloc membership rather than economic efficiency."
        </p>
      </div>
    </div>
  );
};

export default TradeDiversionDiagram;
