import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ExternalitiesDiagramProps {
  title?: string;
  type?: 'negative-production' | 'negative-consumption' | 'positive-production' | 'positive-consumption';
}

/**
 * Geometrically Precise Externalities Diagram
 * CIE 9708 Standard: DWL triangle points exactly toward social optimum Q*
 * Mathematical intersection calculations ensure curves meet at labeled points
 */
const ExternalitiesDiagram = ({ title, type = 'negative-production' }: ExternalitiesDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // SVG dimensions with proper margins
  const width = 500;
  const height = 400;
  const margin = { left: 70, right: 40, top: 40, bottom: 60 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;

  // Scale functions for precise coordinate mapping
  const xScale = (q: number) => margin.left + (q / 100) * chartW;
  const yScale = (p: number) => margin.top + chartH - (p / 100) * chartH;

  // Cambridge standard colors
  const primaryCurve = 'hsl(185 100% 50%)'; // Electric Cyan - MPC
  const socialCurve = 'hsl(45 93% 55%)'; // Amber Gold - MSC
  const demandCurve = 'hsl(142 76% 45%)'; // Green - MPB/MSB
  const welfareLoss = 'hsl(0 84% 60%)'; // Red - Welfare loss
  const axisColor = 'hsl(220 14% 75%)';
  const gridColor = 'hsl(220 14% 20%)';
  const labelColor = 'hsl(220 14% 90%)';

  // LINEAR CURVES with precise mathematical definitions
  // MPC (Supply): y = 15 + 0.7x (starts at 15, slope 0.7)
  // MSC: y = 35 + 0.7x (parallel to MPC, external cost = 20)
  // Demand (MPB = MSB): y = 90 - 0.7x (downward sloping)

  // Market Equilibrium E₁: MPC = Demand
  // 15 + 0.7x = 90 - 0.7x → 1.4x = 75 → x = 53.57
  const qMarket = 53.57;
  const pMarket = 15 + 0.7 * qMarket; // ≈ 52.5

  // Social Optimum E*: MSC = Demand
  // 35 + 0.7x = 90 - 0.7x → 1.4x = 55 → x = 39.29
  const qOptimal = 39.29;
  const pOptimal = 35 + 0.7 * qOptimal; // ≈ 62.5

  // MSC at market quantity (for welfare loss triangle vertex)
  const mscAtQMarket = 35 + 0.7 * qMarket; // ≈ 72.5

  // Welfare Loss Triangle vertices (MUST point toward Q* on left)
  // Point A: Social Optimum (Q*, P* on intersection)
  // Point B: Market Equilibrium (Q₁, P₁)
  // Point C: MSC curve at Q₁ (Q₁, MSC(Q₁))

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">{title}</h4>
      )}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid */}
        <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
          {[20, 40, 60, 80].map((tick) => (
            <line key={`h-${tick}`} x1={margin.left} y1={yScale(tick)} x2={width - margin.right} y2={yScale(tick)} />
          ))}
          {[20, 40, 60, 80].map((tick) => (
            <line key={`v-${tick}`} x1={xScale(tick)} y1={margin.top} x2={xScale(tick)} y2={height - margin.bottom} />
          ))}
        </g>

        {/* Welfare Loss Triangle - PRECISE: points toward Q* (left vertex) */}
        <motion.polygon
          points={`${xScale(qOptimal)},${yScale(pOptimal)} ${xScale(qMarket)},${yScale(pMarket)} ${xScale(qMarket)},${yScale(mscAtQMarket)}`}
          fill={welfareLoss}
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />
        <motion.polygon
          points={`${xScale(qOptimal)},${yScale(pOptimal)} ${xScale(qMarket)},${yScale(pMarket)} ${xScale(qMarket)},${yScale(mscAtQMarket)}`}
          fill="none"
          stroke={welfareLoss}
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />

        {/* Axes */}
        <defs>
          <marker id="arrow-ext" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>
        <g stroke={axisColor} strokeWidth="2">
          <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} />
          <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} markerEnd="url(#arrow-ext)" />
          <polygon points={`${margin.left},${margin.top} ${margin.left - 5},${margin.top + 12} ${margin.left + 5},${margin.top + 12}`} fill={axisColor} />
        </g>

        {/* Axis labels - Cambridge standard */}
        <text x={20} y={(margin.top + height - margin.bottom) / 2} fill={labelColor} fontSize="13" fontFamily="serif" transform={`rotate(-90, 20, ${(margin.top + height - margin.bottom) / 2})`} textAnchor="middle">
          Cost / Benefit (£)
        </text>
        <text x={(margin.left + width - margin.right) / 2} y={height - 15} fill={labelColor} fontSize="14" fontFamily="serif" textAnchor="middle">
          Quantity (Q)
        </text>

        {/* MPC curve (Supply) - LINEAR from (0, 15) to (100, 85) */}
        <motion.line
          x1={xScale(0)} y1={yScale(15)}
          x2={xScale(100)} y2={yScale(85)}
          stroke={primaryCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(95)} y={yScale(82)} 
          fill={primaryCurve} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          MPC = S
        </motion.text>

        {/* MSC curve - LINEAR, parallel to MPC but 20 units higher */}
        <motion.line
          x1={xScale(0)} y1={yScale(35)}
          x2={xScale(93)} y2={yScale(100)}
          stroke={socialCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        />
        <motion.text 
          x={xScale(88)} y={yScale(98)} 
          fill={socialCurve} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          MSC
        </motion.text>

        {/* Demand curve (MPB = MSB) - LINEAR from (0, 90) to (100, 20) */}
        <motion.line
          x1={xScale(0)} y1={yScale(90)}
          x2={xScale(100)} y2={yScale(20)}
          stroke={demandCurve}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        />
        <motion.text 
          x={xScale(95)} y={yScale(23)} 
          fill={demandCurve} fontSize="12" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          MPB = MSB = D
        </motion.text>

        {/* MEC (External Cost) annotation - vertical distance between MPC and MSC */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <line x1={xScale(25)} y1={yScale(15 + 0.7 * 25)} x2={xScale(25)} y2={yScale(35 + 0.7 * 25)} stroke={welfareLoss} strokeWidth="2" />
          <line x1={xScale(25) - 4} y1={yScale(15 + 0.7 * 25)} x2={xScale(25) + 4} y2={yScale(15 + 0.7 * 25)} stroke={welfareLoss} strokeWidth="2" />
          <line x1={xScale(25) - 4} y1={yScale(35 + 0.7 * 25)} x2={xScale(25) + 4} y2={yScale(35 + 0.7 * 25)} stroke={welfareLoss} strokeWidth="2" />
          <text x={xScale(28)} y={yScale(47)} fill={welfareLoss} fontSize="10" fontWeight="500">
            MEC
          </text>
          <text x={xScale(28)} y={yScale(43)} fill={welfareLoss} fontSize="9">
            = 20
          </text>
        </motion.g>

        {/* Market Equilibrium E₁ (MPC = Demand) - PRECISELY at intersection */}
        <motion.circle 
          cx={xScale(qMarket)} 
          cy={yScale(pMarket)} 
          r="7" 
          fill={primaryCurve}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1.8, type: "spring" }}
        />
        <motion.text 
          x={xScale(qMarket) + 12} 
          y={yScale(pMarket) + 5} 
          fill={primaryCurve} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.9 }}
        >
          E₁
        </motion.text>

        {/* Social Optimum E* (MSC = Demand) - PRECISELY at intersection */}
        <motion.circle 
          cx={xScale(qOptimal)} 
          cy={yScale(pOptimal)} 
          r="7" 
          fill={socialCurve}
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.2, type: "spring" }}
        />
        <motion.text 
          x={xScale(qOptimal) - 20} 
          y={yScale(pOptimal) - 10} 
          fill={socialCurve} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          E*
        </motion.text>

        {/* Point on MSC at Q₁ (upper vertex of DWL triangle) */}
        <motion.circle 
          cx={xScale(qMarket)} 
          cy={yScale(mscAtQMarket)} 
          r="5" 
          fill={socialCurve}
          stroke="white"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.4, type: "spring" }}
        />

        {/* Dashed lines to axes - ALIGNED with equilibrium points */}
        <motion.line 
          x1={xScale(qMarket)} y1={yScale(pMarket)} x2={xScale(qMarket)} y2={height - margin.bottom} 
          stroke={primaryCurve} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
        <motion.line 
          x1={xScale(qOptimal)} y1={yScale(pOptimal)} x2={xScale(qOptimal)} y2={height - margin.bottom} 
          stroke={socialCurve} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
        <motion.line 
          x1={margin.left} y1={yScale(pMarket)} x2={xScale(qMarket)} y2={yScale(pMarket)} 
          stroke={primaryCurve} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
        <motion.line 
          x1={margin.left} y1={yScale(pOptimal)} x2={xScale(qOptimal)} y2={yScale(pOptimal)} 
          stroke={socialCurve} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />

        {/* Q labels - positioned exactly below intersection points */}
        <motion.text 
          x={xScale(qOptimal)} y={height - margin.bottom + 18} 
          fill={socialCurve} fontSize="13" textAnchor="middle" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          Q*
        </motion.text>
        <motion.text 
          x={xScale(qMarket)} y={height - margin.bottom + 18} 
          fill={primaryCurve} fontSize="13" textAnchor="middle" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          Q₁
        </motion.text>

        {/* P labels - positioned exactly at intersection heights */}
        <motion.text 
          x={margin.left - 8} y={yScale(pOptimal) + 4} 
          fill={socialCurve} fontSize="12" textAnchor="end" fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          P*
        </motion.text>
        <motion.text 
          x={margin.left - 8} y={yScale(pMarket) + 4} 
          fill={primaryCurve} fontSize="12" textAnchor="end" fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          P₁
        </motion.text>

        {/* Welfare Loss label - centered in triangle */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3 }}
        >
          <text 
            x={(xScale(qOptimal) + xScale(qMarket) * 2) / 3} 
            y={(yScale(pMarket) + yScale(mscAtQMarket)) / 2 - 3} 
            fill={welfareLoss} fontSize="10" textAnchor="middle" fontWeight="600"
          >
            Welfare
          </text>
          <text 
            x={(xScale(qOptimal) + xScale(qMarket) * 2) / 3} 
            y={(yScale(pMarket) + yScale(mscAtQMarket)) / 2 + 10} 
            fill={welfareLoss} fontSize="10" textAnchor="middle" fontWeight="600"
          >
            Loss
          </text>
        </motion.g>

        {/* Overproduction bracket */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.2 }}
        >
          <line 
            x1={xScale(qOptimal)} y1={height - margin.bottom + 30} 
            x2={xScale(qMarket)} y2={height - margin.bottom + 30} 
            stroke={welfareLoss} strokeWidth="1.5"
          />
          <line x1={xScale(qOptimal)} y1={height - margin.bottom + 26} x2={xScale(qOptimal)} y2={height - margin.bottom + 34} stroke={welfareLoss} strokeWidth="1.5" />
          <line x1={xScale(qMarket)} y1={height - margin.bottom + 26} x2={xScale(qMarket)} y2={height - margin.bottom + 34} stroke={welfareLoss} strokeWidth="1.5" />
          <text 
            x={(xScale(qOptimal) + xScale(qMarket)) / 2} y={height - margin.bottom + 45} 
            fill={welfareLoss} fontSize="10" textAnchor="middle" fontWeight="500"
          >
            Overproduction
          </text>
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5 rounded" style={{ backgroundColor: primaryCurve }} />
          <span>MPC = S</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5 rounded" style={{ backgroundColor: socialCurve }} />
          <span>MSC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5 rounded" style={{ backgroundColor: demandCurve }} />
          <span>MPB = MSB = D</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3" style={{ backgroundColor: welfareLoss, opacity: 0.4 }} />
          <span>DWL</span>
        </div>
      </div>
    </div>
  );
};

export default ExternalitiesDiagram;
