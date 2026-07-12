import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TariffQuotaDiagram = () => {
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

    return => observer.disconnect();
  }, []);

  const width = 450;
  const height = 350;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Price levels
  const worldPrice = 30;
  const tariffPrice = 50;
  
  // Quantity points
  const qd1 = 20; // Domestic supply at world price
  const qd2 = 35; // Domestic supply at tariff price
  const qs1 = 80; // Domestic demand at world price
  const qs2 = 65; // Domestic demand at tariff price

  const DiagramSVG = ({ showTariff }: { showTariff: boolean }) => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
      {/* Grid */}
      <defs>
        <pattern id="grid-tq" width="37" height="37" patternUnits="userSpaceOnUse">
          <path d="M 37 0 L 0 0 0 37" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-tq)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      {/* Labels */}
      <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Quantity</text>
      <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>Price</text>

      {/* Supply Curve (domestic) */}
      <motion.line
        x1={xScale(10)} y1={yScale(15)}
        x2={xScale(70)} y2={yScale(75)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <text x={xScale(72)} y={yScale(77)} fill="hsl(var(--cambridge-orange))" fontSize="11" fontWeight="600">S (domestic)</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(85)}
        x2={xScale(90)} y2={yScale(15)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <text x={xScale(92)} y={yScale(13)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">D</text>

      {/* World Price Line */}
      <motion.line
        x1={margin.left} y1={yScale(worldPrice)}
        x2={margin.left + chartWidth} y2={yScale(worldPrice)}
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      />
      <text x={margin.left + chartWidth + 5} y={yScale(worldPrice) + 4} fill="hsl(var(--cambridge-green))" fontSize="10">Pw</text>

      {/* Tariff Price Line */}
      {showTariff && (
        <>
          <motion.line
            x1={margin.left} y1={yScale(tariffPrice)}
            x2={margin.left + chartWidth} y2={yScale(tariffPrice)}
            stroke="hsl(var(--destructive))"
            strokeWidth="2"
            strokeDasharray="6,3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <text x={margin.left + chartWidth + 5} y={yScale(tariffPrice) + 4} fill="hsl(var(--destructive))" fontSize="10">Pw + t</text>
        </>
      )}

      {/* Quantity markers */}
      <motion.line x1={xScale(qd1)} y1={yScale(worldPrice)} x2={xScale(qd1)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
      <motion.line x1={xScale(qs1)} y1={yScale(worldPrice)} x2={xScale(qs1)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.5 } : {}} />
      <text x={xScale(qd1)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Q1</text>
      <text x={xScale(qs1)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Q2</text>

      {showTariff && (
        <>
          <motion.line x1={xScale(qd2)} y1={yScale(tariffPrice)} x2={xScale(qd2)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} />
          <motion.line x1={xScale(qs2)} y1={yScale(tariffPrice)} x2={xScale(qs2)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} />
          <text x={xScale(qd2)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10">Q3</text>
          <text x={xScale(qs2)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10">Q4</text>

          {/* Welfare areas */}
          {/* Tariff revenue - rectangle */}
          <motion.rect
            x={xScale(qd2)}
            y={yScale(tariffPrice)}
            width={xScale(qs2) - xScale(qd2)}
            height={yScale(worldPrice) - yScale(tariffPrice)}
            fill="hsl(var(--cambridge-yellow))"
            opacity={0.3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
          />

          {/* Deadweight loss triangles */}
          <motion.polygon
            points={`${xScale(qd1)},${yScale(worldPrice)} ${xScale(qd2)},${yScale(tariffPrice)} ${xScale(qd2)},${yScale(worldPrice)}`}
            fill="hsl(var(--destructive))"
            opacity={0.3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.6 }}
          />
          <motion.polygon
            points={`${xScale(qs2)},${yScale(worldPrice)} ${xScale(qs2)},${yScale(tariffPrice)} ${xScale(qs1)},${yScale(worldPrice)}`}
            fill="hsl(var(--destructive))"
            opacity={0.3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.6 }}
          />
        </>
      )}

      {/* Import bracket */}
      <motion.path
        d={`M ${xScale(qd1)} ${yScale(worldPrice) + 5} L ${xScale(qd1)} ${yScale(worldPrice) + 15} L ${xScale(qs1)} ${yScale(worldPrice) + 15} L ${xScale(qs1)} ${yScale(worldPrice) + 5}`}
        fill="none"
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      />
      <text x={(xScale(qd1) + xScale(qs1)) / 2} y={yScale(worldPrice) + 25} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9">Imports</text>
    </svg>
  );

  return (
    <div ref={containerRef} className="glass-card p-6 my-6">
      <h3 className="font-serif text-xl text-gradient mb-4">Effects of Tariffs & Quotas</h3>
      
      <Tabs defaultValue="free-trade" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="free-trade">Free Trade</TabsTrigger>
          <TabsTrigger value="tariff">With Tariff</TabsTrigger>
        </TabsList>

        <TabsContent value="free-trade">
          <DiagramSVG showTariff={false} />
          <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm">
            <p><strong>Free Trade:</strong> At world price Pw, domestic producers supply Q1, consumers demand Q2. 
            The difference (Q2 - Q1) is imported. Consumer surplus is maximized.</p>
          </div>
        </TabsContent>

        <TabsContent value="tariff">
          <DiagramSVG showTariff={true} />
          <div className="mt-4 space-y-3 text-sm">
            <div className="p-3 bg-muted/30 rounded-lg">
              <strong>Effect of Tariff:</strong> Price rises from Pw to Pw+t
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-cambridge-yellow/10 rounded-lg border border-cambridge-yellow/30">
                <span className="font-semibold text-cambridge-yellow">Yellow:</span> Government tariff revenue
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                <span className="font-semibold text-destructive">Red Triangles:</span> Deadweight welfare loss
              </div>
            </div>
            <p className="text-muted-foreground">
              • Domestic production ↑ (Q1 → Q3) | • Consumption ↓ (Q2 → Q4) | • Imports ↓ (Q4-Q3 instead of Q2-Q1)
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TariffQuotaDiagram;
