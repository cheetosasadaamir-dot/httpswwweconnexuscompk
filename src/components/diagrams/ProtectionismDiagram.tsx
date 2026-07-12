import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProtectionismDiagram = () => {
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

  const width = 400;
  const height = 300;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Price and quantity values
  const pd = 50; // Domestic equilibrium price
  const pw = 30; // World price
  const pwt = 45; // World price + tariff
  
  // Quantities
  const q1 = 20; // Domestic supply at Pw
  const q2 = 35; // Domestic supply at Pw+t
  const q3 = 65; // Domestic demand at Pw+t
  const q4 = 80; // Domestic demand at Pw

  const NoTradeDiagram = () => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm mx-auto">
      <defs>
        <pattern id="grid-prot-nt" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-prot-nt)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Q</text>
      <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>P</text>

      {/* Supply Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(15)}
        x2={xScale(70)} y2={yScale(75)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(72)} y={yScale(77)} fill="hsl(var(--cambridge-orange))" fontSize="9" fontWeight="600">S = domestic supply</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(85)}
        x2={xScale(90)} y2={yScale(15)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(92)} y={yScale(13)} fill="hsl(var(--cambridge-cyan))" fontSize="9" fontWeight="600">D = domestic demand</text>

      {/* Equilibrium point */}
      <motion.circle
        cx={xScale(50)} cy={yScale(pd)}
        r="5"
        fill="hsl(var(--primary))"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
      />
      
      {/* Pd line */}
      <line x1={margin.left} y1={yScale(pd)} x2={xScale(50)} y2={yScale(pd)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={margin.left - 5} y={yScale(pd) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="9">Pd</text>
      
      {/* Qo line */}
      <line x1={xScale(50)} y1={yScale(pd)} x2={xScale(50)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={xScale(50)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qo</text>
    </svg>
  );

  const ExportDiagram = () => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm mx-auto">
      <defs>
        <pattern id="grid-prot-ex" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-prot-ex)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Q</text>
      <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>P</text>

      {/* Supply Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(15)}
        x2={xScale(70)} y2={yScale(75)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(72)} y={yScale(77)} fill="hsl(var(--cambridge-orange))" fontSize="9">S</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(85)}
        x2={xScale(90)} y2={yScale(15)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(92)} y={yScale(13)} fill="hsl(var(--cambridge-cyan))" fontSize="9">D</text>

      {/* World Price (higher than Pd - exports scenario) */}
      <motion.line
        x1={margin.left} y1={yScale(60)}
        x2={margin.left + chartWidth} y2={yScale(60)}
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      />
      <text x={margin.left + chartWidth + 5} y={yScale(60) + 4} fill="hsl(var(--cambridge-green))" fontSize="9">Pw</text>

      {/* Quantity markers */}
      <line x1={xScale(30)} y1={yScale(60)} x2={xScale(30)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <line x1={xScale(70)} y1={yScale(60)} x2={xScale(70)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={xScale(30)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qd</text>
      <text x={xScale(70)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qs</text>

      {/* Export bracket */}
      <motion.path
        d={`M ${xScale(30)} ${yScale(60) + 8} L ${xScale(30)} ${yScale(60) + 18} L ${xScale(70)} ${yScale(60) + 18} L ${xScale(70)} ${yScale(60) + 8}`}
        fill="none"
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      />
      <text x={(xScale(30) + xScale(70)) / 2} y={yScale(60) + 28} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="600">Exports</text>
    </svg>
  );

  const ImportDiagram = () => (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm mx-auto">
      <defs>
        <pattern id="grid-prot-im" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-prot-im)" />
      
      {/* Axes */}
      <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
      
      <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Q</text>
      <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>P</text>

      {/* Supply Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(15)}
        x2={xScale(70)} y2={yScale(75)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(72)} y={yScale(77)} fill="hsl(var(--cambridge-orange))" fontSize="9">S</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(10)} y1={yScale(85)}
        x2={xScale(90)} y2={yScale(15)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(92)} y={yScale(13)} fill="hsl(var(--cambridge-cyan))" fontSize="9">D</text>

      {/* World Price (lower than Pd - imports scenario) */}
      <motion.line
        x1={margin.left} y1={yScale(pw)}
        x2={margin.left + chartWidth} y2={yScale(pw)}
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      />
      <text x={margin.left + chartWidth + 5} y={yScale(pw) + 4} fill="hsl(var(--cambridge-green))" fontSize="9">Pw</text>

      {/* Quantity markers */}
      <line x1={xScale(q1)} y1={yScale(pw)} x2={xScale(q1)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <line x1={xScale(q4)} y1={yScale(pw)} x2={xScale(q4)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={xScale(q1)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qs</text>
      <text x={xScale(q4)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qd</text>

      {/* Import bracket */}
      <motion.path
        d={`M ${xScale(q1)} ${yScale(pw) + 8} L ${xScale(q1)} ${yScale(pw) + 18} L ${xScale(q4)} ${yScale(pw) + 18} L ${xScale(q4)} ${yScale(pw) + 8}`}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      />
      <text x={(xScale(q1) + xScale(q4)) / 2} y={yScale(pw) + 28} textAnchor="middle" fill="hsl(var(--primary))" fontSize="9" fontWeight="600">Imports</text>
    </svg>
  );

  return (
    <div ref={containerRef} className="glass-card p-4 my-4">
      <h3 className="font-serif text-lg text-gradient mb-3">Trade Diagrams: Exports & Imports</h3>
      
      <Tabs defaultValue="no-trade" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-3 text-xs">
          <TabsTrigger value="no-trade" className="text-xs">No Trade</TabsTrigger>
          <TabsTrigger value="export" className="text-xs">Exports</TabsTrigger>
          <TabsTrigger value="import" className="text-xs">Imports</TabsTrigger>
        </TabsList>

        <TabsContent value="no-trade">
          <NoTradeDiagram />
          <div className="mt-3 p-3 bg-muted/30 rounded-lg text-xs">
            <p><strong>Diagram (a) [No-Trade]:</strong> Shows the familiar equilibrium price and quantity of goods determined in a domestic market under no international trade. The equilibrium price is Pd where domestic supply equals domestic demand at quantity Qo.</p>
          </div>
        </TabsContent>

        <TabsContent value="export">
          <ExportDiagram />
          <div className="mt-3 p-3 bg-muted/30 rounded-lg text-xs">
            <p><strong>Diagram (b) [Export]:</strong> When the world price, Pw, is higher than the domestic price, Pd. Once the country opens its economy to international trade, it accepts the world price Pw. At the higher price Pw, the quantity of goods supplied, Qs, is larger than the quantity of goods demanded, Qd. This excess quantity supplied (Qs - Qd) is available to be sold to buyers abroad, or <strong>exported</strong>.</p>
          </div>
        </TabsContent>

        <TabsContent value="import">
          <ImportDiagram />
          <div className="mt-3 p-3 bg-muted/30 rounded-lg text-xs">
            <p><strong>Diagram (c) [Import]:</strong> When the world price of goods, Pw, is lower than the domestic price, Pd. Accepting the world price Pw, the quantity of goods demanded, Qd, is larger than quantity of goods supplied, Qs. The country now has an excess quantity demanded (Qd - Qs), which is the quantity to be purchased from abroad, or <strong>imported</strong>.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProtectionismDiagram;
