import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TariffDeadweightDiagram = () => {
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

  const width = 500;
  const height = 380;
  const margin = { top: 35, right: 35, bottom: 55, left: 55 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Price levels
  const worldPrice = 30;
  const tariffPrice = 50;
  
  // Quantity points
  const q1 = 20; // Domestic supply at world price
  const q2 = 35; // Domestic supply at tariff price
  const q3 = 65; // Domestic demand at tariff price
  const q4 = 80; // Domestic demand at world price

  const DiagramSVG = ({ showTariff }: { showTariff: boolean }) => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
      {/* Grid */}
      <defs>
        <pattern id="grid-tariff-dwl" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-tariff-dwl)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      {/* Axis Labels */}
      <text x={margin.left + chartWidth / 2} y={height - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Quantity (Q)</text>
      <text x={18} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="500" transform={`rotate(-90, 18, ${margin.top + chartHeight / 2})`}>General Price Level (GPL)</text>

      {/* Supply Curve (domestic) - Neon Cyan */}
      <motion.line
        x1={xScale(5)} y1={yScale(10)}
        x2={xScale(70)} y2={yScale(80)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <text x={xScale(72)} y={yScale(82)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">S (domestic)</text>

      {/* Demand Curve - Neon Cyan */}
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

      {/* World Price Line - Amber Gold */}
      <motion.line
        x1={margin.left} y1={yScale(worldPrice)}
        x2={margin.left + chartWidth} y2={yScale(worldPrice)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      />
      <text x={margin.left + chartWidth + 5} y={yScale(worldPrice) + 4} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">Pᵥ</text>
      <text x={margin.left - 8} y={yScale(worldPrice) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">Pw</text>

      {/* Tariff Price Line - Amber Gold Dashed */}
      {showTariff && (
        <>
          <motion.line
            x1={margin.left} y1={yScale(tariffPrice)}
            x2={margin.left + chartWidth} y2={yScale(tariffPrice)}
            stroke="hsl(var(--cambridge-orange))"
            strokeWidth="2.5"
            strokeDasharray="8,4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <text x={margin.left + chartWidth + 5} y={yScale(tariffPrice) + 4} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">Pᵥ + t</text>
          <text x={margin.left - 8} y={yScale(tariffPrice) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">Pw+t</text>
        </>
      )}

      {/* Quantity markers - vertical dashed lines */}
      <motion.line x1={xScale(q1)} y1={yScale(worldPrice)} x2={xScale(q1)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 } : {}} />
      <motion.line x1={xScale(q4)} y1={yScale(worldPrice)} x2={xScale(q4)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 } : {}} />
      <text x={xScale(q1)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">Q₁</text>
      <text x={xScale(q4)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">Q₄</text>

      {showTariff && (
        <>
          <motion.line x1={xScale(q2)} y1={yScale(tariffPrice)} x2={xScale(q2)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} />
          <motion.line x1={xScale(q3)} y1={yScale(tariffPrice)} x2={xScale(q3)} y2={yScale(0) + 10} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} />
          <text x={xScale(q2)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="500">Q₂</text>
          <text x={xScale(q3)} y={yScale(0) + 22} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="500">Q₃</text>

          {/* Tariff Revenue Rectangle - Yellow */}
          <motion.rect
            x={xScale(q2)}
            y={yScale(tariffPrice)}
            width={xScale(q3) - xScale(q2)}
            height={yScale(worldPrice) - yScale(tariffPrice)}
            fill="hsl(var(--cambridge-yellow))"
            opacity={0.35}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 0.5 }}
          />
          <text x={(xScale(q2) + xScale(q3)) / 2} y={(yScale(tariffPrice) + yScale(worldPrice)) / 2 + 4} textAnchor="middle" fill="hsl(var(--cambridge-yellow))" fontSize="9" fontWeight="600">Tariff Revenue</text>

          {/* Deadweight Loss Triangle 1 - Production Inefficiency (Left) */}
          <motion.polygon
            points={`${xScale(q1)},${yScale(worldPrice)} ${xScale(q2)},${yScale(tariffPrice)} ${xScale(q2)},${yScale(worldPrice)}`}
            fill="hsl(var(--destructive))"
            opacity={0.4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6 }}
          />
          <text x={(xScale(q1) + xScale(q2) + xScale(q2)) / 3} y={(yScale(worldPrice) + yScale(tariffPrice) + yScale(worldPrice)) / 3 + 3} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8" fontWeight="bold">DWL</text>

          {/* Deadweight Loss Triangle 2 - Consumption Inefficiency (Right) */}
          <motion.polygon
            points={`${xScale(q3)},${yScale(worldPrice)} ${xScale(q3)},${yScale(tariffPrice)} ${xScale(q4)},${yScale(worldPrice)}`}
            fill="hsl(var(--destructive))"
            opacity={0.4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6 }}
          />
          <text x={(xScale(q3) + xScale(q3) + xScale(q4)) / 3} y={(yScale(worldPrice) + yScale(tariffPrice) + yScale(worldPrice)) / 3 + 3} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="8" fontWeight="bold">DWL</text>

          {/* Producer Surplus Gain - Trapezoid */}
          <motion.polygon
            points={`${xScale(q1)},${yScale(worldPrice)} ${xScale(q2)},${yScale(worldPrice)} ${xScale(q2)},${yScale(tariffPrice)} ${xScale(q1)},${yScale(tariffPrice)}`}
            fill="hsl(var(--cambridge-green))"
            opacity={0.25}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 0.7 }}
          />
        </>
      )}

      {/* Import bracket - under world price line */}
      <motion.path
        d={`M ${xScale(q1)} ${yScale(worldPrice) + 8} L ${xScale(q1)} ${yScale(worldPrice) + 18} L ${xScale(q4)} ${yScale(worldPrice) + 18} L ${xScale(q4)} ${yScale(worldPrice) + 8}`}
        fill="none"
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      />
      <text x={(xScale(q1) + xScale(q4)) / 2} y={yScale(worldPrice) + 30} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="10" fontWeight="500">Imports (Free Trade)</text>

      {/* Import bracket after tariff */}
      {showTariff && (
        <>
          <motion.path
            d={`M ${xScale(q2)} ${yScale(tariffPrice) - 8} L ${xScale(q2)} ${yScale(tariffPrice) - 18} L ${xScale(q3)} ${yScale(tariffPrice) - 18} L ${xScale(q3)} ${yScale(tariffPrice) - 8}`}
            fill="none"
            stroke="hsl(var(--destructive))"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
          <text x={(xScale(q2) + xScale(q3)) / 2} y={yScale(tariffPrice) - 22} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="500">Imports (With Tariff)</text>
        </>
      )}
    </svg>
  );

  return (
    <div ref={containerRef} className="glass-card p-5 my-5">
      <h3 className="font-serif text-xl text-gradient mb-4">Tariff Analysis: Welfare Effects & Deadweight Loss</h3>
      
      <Tabs defaultValue="free-trade" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="free-trade">Free Trade Equilibrium</TabsTrigger>
          <TabsTrigger value="tariff">With Tariff Imposed</TabsTrigger>
        </TabsList>

        <TabsContent value="free-trade">
          <DiagramSVG showTariff={false} />
          <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm space-y-2">
            <p><strong className="text-foreground">Free Trade Equilibrium:</strong> At the world price (P<sub>w</sub>), domestic producers supply Q₁ while domestic consumers demand Q₄. The gap (Q₄ − Q₁) is filled by imports from more efficient foreign producers.</p>
            <p className="text-muted-foreground">Consumer surplus is maximised. Domestic production is limited to quantity Q₁, where marginal cost equals the world price. Resources are allocated efficiently according to comparative advantage.</p>
          </div>
        </TabsContent>

        <TabsContent value="tariff">
          <DiagramSVG showTariff={true} />
          <div className="mt-4 space-y-3 text-sm">
            <div className="p-3 bg-muted/30 rounded-lg">
              <strong className="text-foreground">Effect of Tariff:</strong> The domestic price rises from P<sub>w</sub> to P<sub>w</sub> + t. Domestic production expands from Q₁ to Q₂; domestic consumption contracts from Q₄ to Q₃. Imports fall from (Q₄ − Q₁) to (Q₃ − Q₂).
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-cambridge-yellow/15 rounded-lg border border-cambridge-yellow/40">
                <span className="font-semibold text-cambridge-yellow text-xs">YELLOW</span>
                <p className="text-xs text-muted-foreground mt-1">Government Tariff Revenue = t × (Q₃ − Q₂)</p>
              </div>
              <div className="p-3 bg-destructive/15 rounded-lg border border-destructive/40">
                <span className="font-semibold text-destructive text-xs">RED TRIANGLES</span>
                <p className="text-xs text-muted-foreground mt-1">Deadweight Welfare Loss (irrecoverable)</p>
              </div>
              <div className="p-3 bg-cambridge-green/15 rounded-lg border border-cambridge-green/40">
                <span className="font-semibold text-cambridge-green text-xs">GREEN</span>
                <p className="text-xs text-muted-foreground mt-1">Producer Surplus Gain (transfer from consumers)</p>
              </div>
            </div>
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30 text-xs">
              <p className="font-semibold text-destructive mb-1">Identifying the Two Deadweight Loss Triangles:</p>
              <p className="text-muted-foreground"><strong>Left Triangle (Production Inefficiency):</strong> Resources are drawn into domestic production that could be obtained more cheaply from abroad. Society pays a higher marginal cost for units Q₁ to Q₂ than the world price.</p>
              <p className="text-muted-foreground mt-1"><strong>Right Triangle (Consumption Inefficiency):</strong> Consumers are priced out of the market. Units Q₃ to Q₄ have value to consumers exceeding the world price, but are not consumed due to the artificially inflated domestic price.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Senior Examiner's Conclusion */}
      <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
        <h4 className="font-semibold text-secondary text-sm mb-2">Senior Examiner's Diagram Conclusion</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          "A tariff creates <strong>winners</strong> (domestic producers, government) and <strong>losers</strong> (domestic consumers, foreign producers). However, the sum of losses exceeds the sum of gains by the area of the two deadweight loss triangles. This net welfare loss represents the allocative inefficiency cost of protection—resources are misallocated away from the pattern dictated by comparative advantage. The tariff is equivalent to a regressive tax on consumers combined with a subsidy to less-efficient domestic producers."
        </p>
      </div>
    </div>
  );
};

export default TariffDeadweightDiagram;
