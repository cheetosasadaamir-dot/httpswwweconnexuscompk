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

    return () => observer.disconnect();
  }, []);

  const width = 400;
  const height = 300;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Clean linear S and D equations: P = 10 + 0.8Q  (Supply)
  //                                 P = 90 - 0.8Q  (Demand)
  // Equilibrium (no trade): 10 + 0.8Q = 90 - 0.8Q => Q = 50, P = 50
  const supplyP = (q: number) => 10 + 0.8 * q;
  const demandP = (q: number) => 90 - 0.8 * q;
  const supplyQ = (p: number) => (p - 10) / 0.8;
  const demandQ = (p: number) => (90 - p) / 0.8;

  const pd = 50; // Domestic equilibrium price
  const qo = 50; // Domestic equilibrium quantity

  const pw = 30; // World price (import scenario)
  const q1 = supplyQ(pw); // Domestic supply at Pw = 25
  const q4 = demandQ(pw); // Domestic demand at Pw = 75

  const pwExport = 60; // World price (export scenario)
  const qdExport = demandQ(pwExport); // Quantity demanded at Pw = 37.5
  const qsExport = supplyQ(pwExport); // Quantity supplied at Pw = 62.5

  // Common curve endpoints (Q from 5 to 95), computed from the equations above
  const sX1 = 5, sX2 = 95;
  const sY1 = supplyP(sX1), sY2 = supplyP(sX2);
  const dX1 = 5, dX2 = 95;
  const dY1 = demandP(dX1), dY2 = demandP(dX2);

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
        x1={xScale(sX1)} y1={yScale(sY1)}
        x2={xScale(sX2)} y2={yScale(sY2)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(sX2) + 2} y={yScale(sY2)} fill="hsl(var(--cambridge-orange))" fontSize="9" fontWeight="600">S = domestic supply</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(dX1)} y1={yScale(dY1)}
        x2={xScale(dX2)} y2={yScale(dY2)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(dX2) + 2} y={yScale(dY2) - 2} fill="hsl(var(--cambridge-cyan))" fontSize="9" fontWeight="600">D = domestic demand</text>

      {/* Equilibrium point */}
      <motion.circle
        cx={xScale(qo)} cy={yScale(pd)}
        r="5"
        fill="hsl(var(--primary))"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
      />
      
      {/* Pd line */}
      <line x1={margin.left} y1={yScale(pd)} x2={xScale(qo)} y2={yScale(pd)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={margin.left - 5} y={yScale(pd) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="9">Pd</text>
      
      {/* Qo line */}
      <line x1={xScale(qo)} y1={yScale(pd)} x2={xScale(qo)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={xScale(qo)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qo</text>
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
        x1={xScale(sX1)} y1={yScale(sY1)}
        x2={xScale(sX2)} y2={yScale(sY2)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(sX2) + 2} y={yScale(sY2)} fill="hsl(var(--cambridge-orange))" fontSize="9">S</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(dX1)} y1={yScale(dY1)}
        x2={xScale(dX2)} y2={yScale(dY2)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(dX2) + 2} y={yScale(dY2) - 2} fill="hsl(var(--cambridge-cyan))" fontSize="9">D</text>

      {/* World Price (higher than Pd - exports scenario) */}
      <motion.line
        x1={margin.left} y1={yScale(pwExport)}
        x2={margin.left + chartWidth} y2={yScale(pwExport)}
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      />
      <text x={margin.left + chartWidth + 5} y={yScale(pwExport) + 4} fill="hsl(var(--cambridge-green))" fontSize="9">Pw</text>

      {/* Quantity markers */}
      <line x1={xScale(qdExport)} y1={yScale(pwExport)} x2={xScale(qdExport)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <line x1={xScale(qsExport)} y1={yScale(pwExport)} x2={xScale(qsExport)} y2={yScale(0)} stroke="hsl(var(--muted-foreground))" strokeDasharray="3,3" />
      <text x={xScale(qdExport)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qd</text>
      <text x={xScale(qsExport)} y={yScale(0) + 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9">Qs</text>

      {/* Export bracket */}
      <motion.path
        d={`M ${xScale(qdExport)} ${yScale(pwExport) + 8} L ${xScale(qdExport)} ${yScale(pwExport) + 18} L ${xScale(qsExport)} ${yScale(pwExport) + 18} L ${xScale(qsExport)} ${yScale(pwExport) + 8}`}
        fill="none"
        stroke="hsl(var(--cambridge-green))"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      />
      <text x={(xScale(qdExport) + xScale(qsExport)) / 2} y={yScale(pwExport) + 28} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="600">Exports</text>
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
        x1={xScale(sX1)} y1={yScale(sY1)}
        x2={xScale(sX2)} y2={yScale(sY2)}
        stroke="hsl(var(--cambridge-orange))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(sX2) + 2} y={yScale(sY2)} fill="hsl(var(--cambridge-orange))" fontSize="9">S</text>

      {/* Demand Curve */}
      <motion.line
        x1={xScale(dX1)} y1={yScale(dY1)}
        x2={xScale(dX2)} y2={yScale(dY2)}
        stroke="hsl(var(--cambridge-cyan))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
      />
      <text x={xScale(dX2) + 2} y={yScale(dY2) - 2} fill="hsl(var(--cambridge-cyan))" fontSize="9">D</text>

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
