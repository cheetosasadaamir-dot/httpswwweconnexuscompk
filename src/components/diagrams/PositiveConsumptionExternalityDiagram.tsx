import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const PositiveConsumptionExternalityDiagram = () => {
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

  // CIE 9708 Standard Colors
  const mpbColor = 'hsl(185, 100%, 50%)';   // Neon Cyan - Private curves (MPB)
  const msbColor = 'hsl(45, 93%, 55%)';     // Amber Gold - Social curves (MSB)
  const supplyColor = 'hsl(185, 100%, 50%)'; // Neon Cyan - MPC = MSC = S
  const welfareLossColor = 'hsl(142, 76%, 45%)'; // Green - Welfare loss (positive externality)
  const axisColor = 'hsl(220, 14%, 75%)';
  const gridColor = 'hsl(220, 14%, 20%)';
  const labelColor = 'hsl(220, 14%, 90%)';

  // Geometric coordinates
  const width = 500;
  const height = 400;
  const padding = { left: 80, right: 40, top: 50, bottom: 60 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = (q: number) => padding.left + (q / 100) * chartW;
  const yScale = (p: number) => padding.top + chartH - (p / 100) * chartH;

  // Linear curve definitions
  // Supply (MPC = MSC): upward sloping
  const supply = { x1: 0, y1: 15, x2: 100, y2: 85 };
  // MPB (Private Benefit/Demand): downward sloping
  const mpb = { x1: 0, y1: 75, x2: 100, y2: 15 };
  // MSB (Social Benefit): parallel to MPB but higher (MEB = 20 units)
  const msb = { x1: 0, y1: 95, x2: 100, y2: 35 };

  // Calculate intersection points
  // Market Equilibrium E₁: Supply = MPB
  // Supply: y = 15 + 0.7x, MPB: y = 75 - 0.6x
  // 15 + 0.7x = 75 - 0.6x → 1.3x = 60 → x ≈ 46.15
  const qMarket = 46.15;
  const pMarket = 15 + 0.7 * qMarket; // ≈ 47.3

  // Social Optimum E*: Supply = MSB
  // Supply: y = 15 + 0.7x, MSB: y = 95 - 0.6x
  // 15 + 0.7x = 95 - 0.6x → 1.3x = 80 → x ≈ 61.54
  const qOptimal = 61.54;
  const pOptimal = 15 + 0.7 * qOptimal; // ≈ 58.1

  // Welfare Loss Triangle vertices (points toward Q* on right for positive externality)
  // Point A: Market Equilibrium on Supply (Q₁, P on Supply)
  const pointA = { x: qMarket, y: pMarket };
  // Point B: Social Optimum on MSB (Q*, P* on Supply = MSB intersection)
  const pointB = { x: qOptimal, y: pOptimal };
  // Point C: Point on MSB at Q₁
  const pointC = { x: qMarket, y: 95 - 0.6 * qMarket }; // MSB at Q₁ ≈ 67.3

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="font-serif text-lg text-silver-bright mb-4 text-center">
        Positive Consumption Externality: The Welfare Loss Triangle
      </h4>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-transparent">
        {/* Grid Lines */}
        <g stroke={gridColor} strokeWidth="0.5" opacity="0.3">
          {[20, 40, 60, 80].map((tick) => (
            <line key={`h-${tick}`} x1={padding.left} y1={yScale(tick)} x2={width - padding.right} y2={yScale(tick)} />
          ))}
          {[20, 40, 60, 80].map((tick) => (
            <line key={`v-${tick}`} x1={xScale(tick)} y1={padding.top} x2={xScale(tick)} y2={height - padding.bottom} />
          ))}
        </g>

        {/* Welfare Loss Triangle - Points toward Q* (right) for positive externality */}
        <motion.polygon
          points={`${xScale(pointA.x)},${yScale(pointA.y)} ${xScale(pointB.x)},${yScale(pointB.y)} ${xScale(pointC.x)},${yScale(pointC.y)}`}
          fill={welfareLossColor}
          opacity="0.35"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.35 } : { opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
        <motion.polygon
          points={`${xScale(pointA.x)},${yScale(pointA.y)} ${xScale(pointB.x)},${yScale(pointB.y)} ${xScale(pointC.x)},${yScale(pointC.y)}`}
          fill="none"
          stroke={welfareLossColor}
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />

        {/* Axes */}
        <g stroke={axisColor} strokeWidth="2">
          <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} />
          <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} />
          <polygon points={`${padding.left},${padding.top} ${padding.left - 5},${padding.top + 12} ${padding.left + 5},${padding.top + 12}`} fill={axisColor} />
          <polygon points={`${width - padding.right},${height - padding.bottom} ${width - padding.right - 12},${height - padding.bottom - 5} ${width - padding.right - 12},${height - padding.bottom + 5}`} fill={axisColor} />
        </g>

        {/* Axis Labels */}
        <text x={25} y={height / 2} fill={labelColor} fontSize="14" fontFamily="serif" transform={`rotate(-90, 25, ${height / 2})`} textAnchor="middle">
          Costs / Benefits / Price
        </text>
        <text x={(padding.left + width - padding.right) / 2} y={height - 15} fill={labelColor} fontSize="14" fontFamily="serif" textAnchor="middle">
          Quantity (Q)
        </text>

        {/* Supply Curve (MPC = MSC = S) */}
        <motion.line
          x1={xScale(supply.x1)} y1={yScale(supply.y1)}
          x2={xScale(supply.x2)} y2={yScale(supply.y2)}
          stroke={supplyColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(95)} y={yScale(80)} 
          fill={supplyColor} fontSize="12" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          MPC = MSC = S
        </motion.text>

        {/* MPB Curve (Private Benefit/Demand) */}
        <motion.line
          x1={xScale(mpb.x1)} y1={yScale(mpb.y1)}
          x2={xScale(mpb.x2)} y2={yScale(mpb.y2)}
          stroke={mpbColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8,4"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        />
        <motion.text 
          x={xScale(95)} y={yScale(20)} 
          fill={mpbColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
        >
          MPB = D
        </motion.text>

        {/* MSB Curve (Social Benefit - Above MPB) */}
        <motion.line
          x1={xScale(msb.x1)} y1={yScale(Math.min(msb.y1, 100))}
          x2={xScale(msb.x2)} y2={yScale(msb.y2)}
          stroke={msbColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        />
        <motion.text 
          x={xScale(95)} y={yScale(40)} 
          fill={msbColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.6 }}
        >
          MSB
        </motion.text>

        {/* MEB (External Benefit) Bracket */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          {/* Vertical bracket at Q = 30 showing gap between MPB and MSB */}
          <line 
            x1={xScale(30)} y1={yScale(75 - 0.6 * 30)} 
            x2={xScale(30)} y2={yScale(95 - 0.6 * 30)} 
            stroke={welfareLossColor} strokeWidth="2" 
          />
          <line x1={xScale(30) - 4} y1={yScale(75 - 0.6 * 30)} x2={xScale(30) + 4} y2={yScale(75 - 0.6 * 30)} stroke={welfareLossColor} strokeWidth="2" />
          <line x1={xScale(30) - 4} y1={yScale(95 - 0.6 * 30)} x2={xScale(30) + 4} y2={yScale(95 - 0.6 * 30)} stroke={welfareLossColor} strokeWidth="2" />
          <text x={xScale(33)} y={yScale(68)} fill={welfareLossColor} fontSize="11" fontWeight="500">
            MEB
          </text>
          <text x={xScale(33)} y={yScale(64)} fill={welfareLossColor} fontSize="10">
            (External Benefit)
          </text>
        </motion.g>

        {/* Dashed lines for Q₁ and Q* */}
        <motion.line 
          x1={xScale(qMarket)} y1={yScale(pMarket)} x2={xScale(qMarket)} y2={height - padding.bottom} 
          stroke={mpbColor} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        />
        <motion.line 
          x1={xScale(qOptimal)} y1={yScale(pOptimal)} x2={xScale(qOptimal)} y2={height - padding.bottom} 
          stroke={msbColor} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        />

        {/* Market Equilibrium E₁ */}
        <motion.circle 
          cx={xScale(qMarket)} cy={yScale(pMarket)} r="7" 
          fill={mpbColor}
          stroke="white" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1.7, type: "spring" }}
        />
        <motion.text 
          x={xScale(qMarket) - 20} y={yScale(pMarket) - 12} 
          fill={mpbColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          E₁
        </motion.text>

        {/* Social Optimum E* */}
        <motion.circle 
          cx={xScale(qOptimal)} cy={yScale(pOptimal)} r="7" 
          fill={msbColor}
          stroke="white" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1.9, type: "spring" }}
        />
        <motion.text 
          x={xScale(qOptimal) + 10} y={yScale(pOptimal) + 5} 
          fill={msbColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.0 }}
        >
          E*
        </motion.text>

        {/* Point on MSB at Q₁ */}
        <motion.circle 
          cx={xScale(pointC.x)} cy={yScale(pointC.y)} r="5" 
          fill={msbColor}
          stroke="white" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.1, type: "spring" }}
        />

        {/* Quantity Labels */}
        <motion.text 
          x={xScale(qMarket)} y={height - padding.bottom + 18} 
          fill={mpbColor} fontSize="13" textAnchor="middle" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          Q₁
        </motion.text>
        <motion.text 
          x={xScale(qOptimal)} y={height - padding.bottom + 18} 
          fill={msbColor} fontSize="13" textAnchor="middle" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          Q*
        </motion.text>

        {/* Price Labels */}
        <motion.text 
          x={padding.left - 8} y={yScale(pMarket) + 4} 
          fill={mpbColor} fontSize="12" textAnchor="end" fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          P₁
        </motion.text>
        <motion.text 
          x={padding.left - 8} y={yScale(pOptimal) + 4} 
          fill={msbColor} fontSize="12" textAnchor="end" fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          P*
        </motion.text>

        {/* Welfare Loss Label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          <text 
            x={(xScale(qMarket) + xScale(qOptimal)) / 2} 
            y={(yScale(pMarket) + yScale(pointC.y)) / 2 - 5} 
            fill={welfareLossColor} fontSize="11" textAnchor="middle" fontWeight="600"
          >
            Welfare
          </text>
          <text 
            x={(xScale(qMarket) + xScale(qOptimal)) / 2} 
            y={(yScale(pMarket) + yScale(pointC.y)) / 2 + 8} 
            fill={welfareLossColor} fontSize="11" textAnchor="middle" fontWeight="600"
          >
            Loss
          </text>
        </motion.g>

        {/* Underproduction Arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          <defs>
            <marker id="arrowhead-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill={welfareLossColor} />
            </marker>
          </defs>
          <line 
            x1={xScale(qMarket) + 5} y1={height - padding.bottom + 35} 
            x2={xScale(qOptimal) - 5} y2={height - padding.bottom + 35} 
            stroke={welfareLossColor} strokeWidth="2" markerEnd="url(#arrowhead-green)"
          />
          <text 
            x={(xScale(qMarket) + xScale(qOptimal)) / 2} 
            y={height - padding.bottom + 50} 
            fill={welfareLossColor} fontSize="11" textAnchor="middle" fontWeight="500"
          >
            Under-consumption
          </text>
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5" style={{ backgroundColor: supplyColor }} />
          <span>MPC = MSC = S</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 border-t-2 border-dashed" style={{ borderColor: mpbColor }} />
          <span>MPB = D (Private Benefit)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5" style={{ backgroundColor: msbColor }} />
          <span>MSB (Social Benefit)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3" style={{ backgroundColor: welfareLossColor, opacity: 0.4 }} />
          <span>Welfare Gain Foregone</span>
        </div>
      </div>

      {/* Chain of Analysis Text */}
      <div className="mt-6 glass-card p-5 rounded-xl">
        <p className="text-muted-foreground text-justify leading-relaxed text-sm">
          <strong className="text-green-400">Chain of Analysis:</strong> The welfare loss triangle in a positive consumption externality represents <strong className="text-amber-400">foregone social gains</strong> from under-consumption. The free market, guided by private benefit calculations, consumes at <strong className="text-primary">Q₁</strong> where <strong>MPB = MPC</strong>. However, because individuals ignore the external benefits conferred on third parties (such as herd immunity from vaccination or a more educated workforce from higher education), the true <strong>Marginal Social Benefit (MSB)</strong> exceeds MPB by the value of the Marginal External Benefit (MEB). Between <strong className="text-primary">Q₁</strong> and <strong className="text-amber-400">Q*</strong>, each additional unit consumed would generate a social benefit exceeding its social cost—yet this consumption does not occur. The shaded triangle quantifies this <strong className="text-green-400">unrealized welfare gain</strong>. Government intervention through subsidies, direct provision, or positive advertising can shift consumption toward Q*, internalizing the externality and capturing the lost surplus.
        </p>
      </div>
    </div>
  );
};

export default PositiveConsumptionExternalityDiagram;
