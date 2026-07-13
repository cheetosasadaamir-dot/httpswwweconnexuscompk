import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  const width = 600;
  const height = 480;
  const margin = { top: 50, right: 80, bottom: 70, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

  // Price levels (matching reference image structure)
  const pSUK_high = 85;           // S_UK intersects at high price
  const pEU_tariff = 72;          // S_EU + tariff level
  const pAus_tariff = 60;         // P1: S_Aus + tariff (initial import price)
  const pEU = 50;                 // P2: S_EU price (after joining CU)
  const pAus = 38;                // S_Aus (most efficient world price)
  
  // Quantity points
  const q1 = 22;   // Q1: Domestic supply at P1 (S_Aus + tariff)
  const q2 = 32;   // Q2: Domestic supply at P2 (S_EU price)
  const q3 = 62;   // Q3: Demand at P2 (S_EU price)
  const q4 = 72;   // Q4: Demand at P1 (S_Aus + tariff)

  // Supply curve equation: starts at origin, rises to intersect demand
  const supplyY = (x: number) => 15 + x * 0.9;
  const demandY = (x: number) => 92 - x * 0.85;

  return (
    <div ref={containerRef} className="glass-card p-5 my-5">
      <h3 className="font-serif text-xl text-gradient mb-2">Trade Diversion: Customs Union Welfare Analysis</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Trade diversion occurs when efficient non-member imports (S<sub>Aus</sub>) are replaced by less efficient member imports (S<sub>EU</sub>) due to the removal of internal tariffs within the bloc.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--cambridge-orange))', opacity: 0.6 }}></div>
          <span className="text-muted-foreground">Areas 2 & 4: Trade Creation (Net Gain)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--cambridge-cyan))', opacity: 0.6 }}></div>
          <span className="text-muted-foreground">Area 5: Trade Diversion (Net Loss)</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
        {/* Grid pattern */}
        <defs>
          <pattern id="grid-td" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.1" />
          </pattern>
        </defs>
        <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-td)" />
        
        {/* Axes */}
        <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
        <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
        
        {/* Axis Labels */}
        <text x={margin.left - 15} y={margin.top - 15} fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">Price</text>
        <text x={margin.left - 15} y={margin.top - 2} fill="hsl(var(--foreground))" fontSize="12">£</text>
        <text x={margin.left + chartWidth + 10} y={margin.top + chartHeight + 5} fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Q millions</text>

        {/* AREA 5: Trade Diversion Loss (Rectangle between S_EU and S_Aus, from Q2 to Q3) */}
        <motion.rect
          x={xScale(q2)}
          y={yScale(pEU)}
          width={xScale(q3) - xScale(q2)}
          height={yScale(pAus) - yScale(pEU)}
          fill="hsl(var(--cambridge-cyan))"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        <text x={(xScale(q2) + xScale(q3)) / 2} y={(yScale(pEU) + yScale(pAus)) / 2 + 4} textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="13" fontWeight="bold">5</text>

        {/* AREA 1: Tariff revenue previously collected (between P1 and P2, from Q1 to Q4) - now lost */}
        <motion.rect
          x={xScale(q1)}
          y={yScale(pAus_tariff)}
          width={xScale(q2) - xScale(q1)}
          height={yScale(pEU) - yScale(pAus_tariff)}
          fill="hsl(var(--muted-foreground))"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.15 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        />
        <text x={(xScale(q1) + xScale(q2)) / 2} y={(yScale(pAus_tariff) + yScale(pEU)) / 2 + 4} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">1</text>

        {/* AREA 3: Consumer surplus gain - rectangle portion */}
        <motion.rect
          x={xScale(q2)}
          y={yScale(pAus_tariff)}
          width={xScale(q3) - xScale(q2)}
          height={yScale(pEU) - yScale(pAus_tariff)}
          fill="hsl(var(--muted-foreground))"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.15 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
        <text x={(xScale(q2) + xScale(q3)) / 2} y={(yScale(pAus_tariff) + yScale(pEU)) / 2 + 4} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">3</text>

        {/* AREA 2: Trade Creation Triangle (Production efficiency gain) - Amber Gold */}
        <motion.polygon
          points={`${xScale(q1)},${yScale(pAus_tariff)} ${xScale(q2)},${yScale(pEU)} ${xScale(q1)},${yScale(pEU)}`}
          fill="hsl(var(--cambridge-orange))"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.55 } : {}}
          transition={{ delay: 0.7, duration: 0.4 }}
        />
        <text x={xScale(q1) + 18} y={(yScale(pAus_tariff) + yScale(pEU)) / 2 + 12} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="bold">2</text>

        {/* AREA 4: Trade Creation Triangle (Consumption efficiency gain) - Amber Gold */}
        <motion.polygon
          points={`${xScale(q3)},${yScale(pEU)} ${xScale(q4)},${yScale(pAus_tariff)} ${xScale(q4)},${yScale(pEU)}`}
          fill="hsl(var(--cambridge-orange))"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.55 } : {}}
          transition={{ delay: 0.75, duration: 0.4 }}
        />
        <text x={xScale(q4) - 18} y={(yScale(pAus_tariff) + yScale(pEU)) / 2 + 12} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="bold">4</text>

        {/* Supply Curve S_UK (Domestic) - steep upward slope */}
        <motion.line
          x1={xScale(0)} y1={yScale(15)}
          x2={xScale(85)} y2={yScale(supplyY(85))}
          stroke="hsl(var(--foreground))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6 }}
        />
        <text x={xScale(88)} y={yScale(supplyY(85)) - 5} fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">S UK</text>

        {/* Demand Curve D - downward slope */}
        <motion.line
          x1={xScale(8)} y1={yScale(demandY(8))}
          x2={xScale(95)} y2={yScale(demandY(95))}
          stroke="hsl(var(--foreground))"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <text x={xScale(97)} y={yScale(demandY(95)) + 5} fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">D</text>

        {/* S_EU + tariff - horizontal line */}
        <motion.line
          x1={margin.left} y1={yScale(pEU_tariff)}
          x2={margin.left + chartWidth} y2={yScale(pEU_tariff)}
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.7 } : {}}
          transition={{ delay: 0.25 }}
        />
        <text x={margin.left + chartWidth + 5} y={yScale(pEU_tariff) + 4} fill="hsl(var(--foreground))" fontSize="10" fontWeight="500">S EU + tariff</text>

        {/* S_Aus + tariff (P1) - horizontal line */}
        <motion.line
          x1={margin.left} y1={yScale(pAus_tariff)}
          x2={margin.left + chartWidth} y2={yScale(pAus_tariff)}
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        />
        <text x={margin.left + chartWidth + 5} y={yScale(pAus_tariff) + 4} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">S Aus + tariff</text>
        
        {/* Tariff annotation bracket */}
        <motion.path
          d={`M ${margin.left + chartWidth - 30} ${yScale(pEU)} L ${margin.left + chartWidth - 20} ${yScale(pEU)} L ${margin.left + chartWidth - 20} ${yScale(pAus_tariff)} L ${margin.left + chartWidth - 30} ${yScale(pAus_tariff)}`}
          fill="none"
          stroke="hsl(var(--destructive))"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        />
        <text x={margin.left + chartWidth - 10} y={(yScale(pEU) + yScale(pAus_tariff)) / 2 + 4} fill="hsl(var(--destructive))" fontSize="9" fontWeight="500">tariff</text>

        {/* S_EU (P2) - horizontal line (member price after CU) */}
        <motion.line
          x1={margin.left} y1={yScale(pEU)}
          x2={margin.left + chartWidth} y2={yScale(pEU)}
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        />
        <text x={margin.left + chartWidth + 5} y={yScale(pEU) + 4} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">S EU</text>

        {/* S_Aus (actual world price - most efficient) */}
        <motion.line
          x1={margin.left} y1={yScale(pAus)}
          x2={margin.left + chartWidth} y2={yScale(pAus)}
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        />
        <text x={margin.left + chartWidth + 5} y={yScale(pAus) + 4} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">S Aus</text>

        {/* Price Labels P1 and P2 with arrows */}
        <text x={margin.left - 8} y={yScale(pAus_tariff) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">P1</text>
        <text x={margin.left - 8} y={yScale(pEU) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">P2</text>

        {/* Price fall arrow */}
        <motion.path
          d={`M ${margin.left - 25} ${yScale(pAus_tariff) - 5} L ${margin.left - 25} ${yScale(pEU) + 5}`}
          fill="none"
          stroke="hsl(var(--destructive))"
          strokeWidth="2"
          markerEnd="url(#arrowhead-td)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        />
        <defs>
          <marker id="arrowhead-td" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 Z" fill="hsl(var(--destructive))" />
          </marker>
        </defs>

        {/* Quantity markers and dashed lines */}
        <motion.line x1={xScale(q1)} y1={yScale(pAus_tariff)} x2={xScale(q1)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 } : {}} transition={{ delay: 0.5 }} />
        <motion.line x1={xScale(q2)} y1={yScale(pEU)} x2={xScale(q2)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 } : {}} transition={{ delay: 0.55 }} />
        <motion.line x1={xScale(q3)} y1={yScale(pEU)} x2={xScale(q3)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 } : {}} transition={{ delay: 0.6 }} />
        <motion.line x1={xScale(q4)} y1={yScale(pAus_tariff)} x2={xScale(q4)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 } : {}} transition={{ delay: 0.65 }} />

        <text x={xScale(q1)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q1</text>
        <text x={xScale(q2)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q 2</text>
        <text x={xScale(q3)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q3</text>
        <text x={xScale(q4)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q4</text>
      </svg>

      {/* Technical Analysis Below Diagram */}
      <div className="mt-5 space-y-4">
        {/* Welfare Area Mapping */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-cambridge-orange/40 bg-cambridge-orange/10">
            <h4 className="font-semibold text-cambridge-orange text-sm mb-2">Areas 2 & 4 — Trade Creation Gains</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Triangle 2 (Production Effect):</strong> Represents the efficiency gain from replacing high-cost domestic production (between Q1 and Q2) with lower-cost EU imports. Domestic producers with costs above P2 exit the market.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-2">
              <strong>Triangle 4 (Consumption Effect):</strong> Represents the welfare gain from increased consumption (Q3 to Q4) enabled by the lower EU price. Consumers now purchase goods whose marginal benefit exceeds P2.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-cambridge-cyan/40 bg-cambridge-cyan/10">
            <h4 className="font-semibold text-cambridge-cyan text-sm mb-2">Area 5 — Trade Diversion Loss</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Rectangle 5:</strong> This critical welfare loss represents the switch from efficient non-member (S<sub>Aus</sub>) to less efficient member (S<sub>EU</sub>). The country pays (P<sub>EU</sub> − P<sub>Aus</sub>) more per unit for imports spanning Q2 to Q3. This is pure economic waste—resources flow to less productive EU producers instead of globally efficient Australian producers.
            </p>
          </div>
        </div>

        {/* Net Welfare Calculation */}
        <div className="p-4 bg-muted/40 rounded-lg border border-border/50">
          <h4 className="font-serif text-base text-gradient mb-2">Net Welfare Effect: The Second-Best Theorem</h4>
          <p className="text-sm text-muted-foreground leading-relaxed text-justify">
            The net welfare effect of a Customs Union is calculated as: <strong>(Gains in Consumer Surplus) − (Loss in Producer Surplus) − (Loss in Government Tariff Revenue)</strong>. In the diagram, if the area of <span className="text-cambridge-cyan font-semibold">Rectangle 5 (Trade Diversion)</span> exceeds the sum of <span className="text-cambridge-orange font-semibold">Triangles 2 and 4 (Trade Creation)</span>, the nation suffers a net welfare loss. This highlights the risk of regionalism over global free trade and explains why the WTO permits Customs Unions only if they do not raise protection against non-members on average—the principle underlying 'Second-Best Theory'.
          </p>
        </div>

        {/* Senior Examiner's Conclusion */}
        <div className="p-4 bg-gradient-to-r from-cambridge-gold/10 to-transparent rounded-lg border-l-4 border-cambridge-gold">
          <h4 className="font-serif text-sm font-semibold text-cambridge-gold mb-2">Senior Examiner's Conclusion</h4>
          <p className="text-sm text-foreground/90 leading-relaxed text-justify italic">
            "Ultimately, the welfare implications of joining a Customs Union depend critically on the relative magnitudes of trade creation versus trade diversion. When the Common External Tariff diverts imports from a low-cost non-member (Australia) to a higher-cost member (EU), the static efficiency loss (Area 5) may outweigh the triangular gains (Areas 2 + 4). The net outcome is empirically contingent: a country joining a bloc with broadly similar cost structures to global leaders gains; one joining a bloc of high-cost producers risks permanent welfare reduction. This analysis underpins the tension between preferential trading arrangements and the WTO's Most Favoured Nation principle."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradeDiversionDiagram;
