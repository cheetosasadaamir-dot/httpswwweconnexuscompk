import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const NegativeProductionExternalityDiagram = () => {
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
  const mpcColor = 'hsl(185, 100%, 50%)'; // Neon Cyan - Private curves
  const mscColor = 'hsl(45, 93%, 55%)';   // Amber Gold - Social curves
  const demandColor = 'hsl(185, 100%, 50%)'; // Neon Cyan - MPB/MSB = D
  const welfareLossColor = 'hsl(0, 84%, 60%)'; // Red - Welfare loss
  const axisColor = 'hsl(220, 14%, 75%)';
  const gridColor = 'hsl(220, 14%, 20%)';
  const labelColor = 'hsl(220, 14%, 90%)';

  // Geometric coordinates - Linear curves
  const width = 500;
  const height = 400;
  const padding = { left: 80, right: 40, top: 50, bottom: 60 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = (q: number) => padding.left + (q / 100) * chartW;
  const yScale = (p: number) => padding.top + chartH - (p / 100) * chartH;

  // Linear curve definitions (start and end points)
  // MPC: starts low-left, goes to high-right (upward sloping supply)
  const mpc = { x1: 0, y1: 15, x2: 100, y2: 85 };
  // MSC: parallel to MPC but higher (MEC = 20 units)
  const msc = { x1: 0, y1: 35, x2: 100, y2: 105 };
  // Demand (MPB = MSB): starts high-left, goes to low-right (downward sloping)
  const demand = { x1: 0, y1: 90, x2: 100, y2: 20 };

  // Calculate intersection points
  // Market Equilibrium E₁: MPC = Demand (MPB)
  // MPC: y = 15 + 0.7x, Demand: y = 90 - 0.7x
  // 15 + 0.7x = 90 - 0.7x → 1.4x = 75 → x = 53.57
  const qMarket = 53.57;
  const pMarket = 15 + 0.7 * qMarket; // ≈ 52.5

  // Social Optimum E*: MSC = Demand (MSB)
  // MSC: y = 35 + 0.7x, Demand: y = 90 - 0.7x
  // 35 + 0.7x = 90 - 0.7x → 1.4x = 55 → x = 39.29
  const qOptimal = 39.29;
  const pOptimal = 35 + 0.7 * qOptimal; // ≈ 62.5

  // Welfare Loss Triangle vertices (points toward Q* on left)
  // Point A: Social Optimum (Q*, P* on MSC)
  const pointA = { x: qOptimal, y: pOptimal };
  // Point B: Market Equilibrium (Q₁, P₁ on MPC = Demand)
  const pointB = { x: qMarket, y: pMarket };
  // Point C: Point on MSC at Q₁
  const pointC = { x: qMarket, y: 35 + 0.7 * qMarket }; // MSC at Q₁ ≈ 72.5

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
        Negative Production Externality: The Welfare Loss Triangle
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

        {/* Welfare Loss Triangle - Points toward Q* (left) */}
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

        {/* MPC Curve (Supply - Private) */}
        <motion.line
          x1={xScale(mpc.x1)} y1={yScale(mpc.y1)}
          x2={xScale(mpc.x2)} y2={yScale(mpc.y2)}
          stroke={mpcColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.text 
          x={xScale(95)} y={yScale(80)} 
          fill={mpcColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          MPC = S
        </motion.text>

        {/* MSC Curve (Social Cost - Above MPC) */}
        <motion.line
          x1={xScale(msc.x1)} y1={yScale(msc.y1)}
          x2={xScale(msc.x2)} y2={yScale(Math.min(msc.y2, 100))}
          stroke={mscColor}
          strokeWidth="3"
          strokeLinecap="round"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        />
        <motion.text 
          x={xScale(88)} y={yScale(98)} 
          fill={mscColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
        >
          MSC
        </motion.text>

        {/* Demand Curve (MPB = MSB = D) */}
        <motion.line
          x1={xScale(demand.x1)} y1={yScale(demand.y1)}
          x2={xScale(demand.x2)} y2={yScale(demand.y2)}
          stroke={demandColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8,4"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        />
        <motion.text 
          x={xScale(95)} y={yScale(25)} 
          fill={demandColor} fontSize="12" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.6 }}
        >
          MPB = MSB = D
        </motion.text>

        {/* MEC (External Cost) Bracket */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          {/* Vertical bracket at Q = 25 showing gap between MPC and MSC */}
          <line 
            x1={xScale(25)} y1={yScale(15 + 0.7 * 25)} 
            x2={xScale(25)} y2={yScale(35 + 0.7 * 25)} 
            stroke={welfareLossColor} strokeWidth="2" 
          />
          <line x1={xScale(25) - 4} y1={yScale(15 + 0.7 * 25)} x2={xScale(25) + 4} y2={yScale(15 + 0.7 * 25)} stroke={welfareLossColor} strokeWidth="2" />
          <line x1={xScale(25) - 4} y1={yScale(35 + 0.7 * 25)} x2={xScale(25) + 4} y2={yScale(35 + 0.7 * 25)} stroke={welfareLossColor} strokeWidth="2" />
          <text x={xScale(28)} y={yScale(42)} fill={welfareLossColor} fontSize="11" fontWeight="500">
            MEC
          </text>
          <text x={xScale(28)} y={yScale(38)} fill={welfareLossColor} fontSize="10">
            (External Cost)
          </text>
        </motion.g>

        {/* Dashed lines for Q* and Q₁ */}
        <motion.line 
          x1={xScale(qOptimal)} y1={yScale(pOptimal)} x2={xScale(qOptimal)} y2={height - padding.bottom} 
          stroke={mscColor} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        />
        <motion.line 
          x1={xScale(qMarket)} y1={yScale(pMarket)} x2={xScale(qMarket)} y2={height - padding.bottom} 
          stroke={mpcColor} strokeWidth="1.5" strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        />

        {/* Social Optimum E* */}
        <motion.circle 
          cx={xScale(qOptimal)} cy={yScale(pOptimal)} r="7" 
          fill={mscColor}
          stroke="white" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1.9, type: "spring" }}
        />
        <motion.text 
          x={xScale(qOptimal) - 20} y={yScale(pOptimal) - 12} 
          fill={mscColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.0 }}
        >
          E*
        </motion.text>

        {/* Market Equilibrium E₁ */}
        <motion.circle 
          cx={xScale(qMarket)} cy={yScale(pMarket)} r="7" 
          fill={mpcColor}
          stroke="white" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1.7, type: "spring" }}
        />
        <motion.text 
          x={xScale(qMarket) + 10} y={yScale(pMarket) + 5} 
          fill={mpcColor} fontSize="13" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
        >
          E₁
        </motion.text>

        {/* Point on MSC at Q₁ */}
        <motion.circle 
          cx={xScale(pointC.x)} cy={yScale(pointC.y)} r="5" 
          fill={mscColor}
          stroke="white" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2.1, type: "spring" }}
        />

        {/* Quantity Labels */}
        <motion.text 
          x={xScale(qOptimal)} y={height - padding.bottom + 18} 
          fill={mscColor} fontSize="13" textAnchor="middle" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          Q*
        </motion.text>
        <motion.text 
          x={xScale(qMarket)} y={height - padding.bottom + 18} 
          fill={mpcColor} fontSize="13" textAnchor="middle" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          Q₁
        </motion.text>

        {/* Price Labels */}
        <motion.text 
          x={padding.left - 8} y={yScale(pOptimal) + 4} 
          fill={mscColor} fontSize="12" textAnchor="end" fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          P*
        </motion.text>
        <motion.text 
          x={padding.left - 8} y={yScale(pMarket) + 4} 
          fill={mpcColor} fontSize="12" textAnchor="end" fontWeight="500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.3 }}
        >
          P₁
        </motion.text>

        {/* Welfare Loss Label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          <text 
            x={(xScale(qOptimal) + xScale(qMarket)) / 2} 
            y={(yScale(pMarket) + yScale(pointC.y)) / 2 - 5} 
            fill={welfareLossColor} fontSize="11" textAnchor="middle" fontWeight="600"
          >
            Welfare
          </text>
          <text 
            x={(xScale(qOptimal) + xScale(qMarket)) / 2} 
            y={(yScale(pMarket) + yScale(pointC.y)) / 2 + 8} 
            fill={welfareLossColor} fontSize="11" textAnchor="middle" fontWeight="600"
          >
            Loss
          </text>
        </motion.g>

        {/* Overproduction Arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.6 }}
        >
          <line 
            x1={xScale(qOptimal) + 5} y1={height - padding.bottom + 35} 
            x2={xScale(qMarket) - 5} y2={height - padding.bottom + 35} 
            stroke={welfareLossColor} strokeWidth="2" markerEnd="url(#arrowhead)"
          />
          <text 
            x={(xScale(qOptimal) + xScale(qMarket)) / 2} 
            y={height - padding.bottom + 50} 
            fill={welfareLossColor} fontSize="11" textAnchor="middle" fontWeight="500"
          >
            Overproduction
          </text>
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill={welfareLossColor} />
            </marker>
          </defs>
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5" style={{ backgroundColor: mpcColor }} />
          <span>MPC = S (Private Cost)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5" style={{ backgroundColor: mscColor }} />
          <span>MSC (Social Cost)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 border-t-2 border-dashed" style={{ borderColor: demandColor }} />
          <span>MPB = MSB = D</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3" style={{ backgroundColor: welfareLossColor, opacity: 0.4 }} />
          <span>Deadweight Loss</span>
        </div>
      </div>

      {/* Chain of Analysis Text */}
      <div className="mt-6 glass-card p-5 rounded-xl">
        <p className="text-muted-foreground text-justify leading-relaxed text-sm">
          <strong className="text-destructive">Chain of Analysis:</strong> The welfare loss triangle arises because the free market, guided solely by private cost calculations, produces beyond the socially optimal level. Between <strong className="text-amber-400">Q*</strong> and <strong className="text-primary">Q₁</strong>, each additional unit produced imposes a <strong>Marginal Social Cost (MSC)</strong> that exceeds the <strong>Marginal Social Benefit (MSB)</strong>. The vertical distance between MSC and the demand curve represents the net social loss per unit, and the shaded triangle aggregates this loss across all units of overproduction. The market price (<strong className="text-primary">P₁</strong>) is <strong className="text-cyan-400">too low</strong> because it fails to incorporate the external costs imposed on third parties—pollution damage, healthcare costs, and environmental degradation. The socially optimal price (<strong className="text-amber-400">P*</strong>) would reflect the true resource cost to society, reduce consumption to Q*, and eliminate the deadweight loss.
        </p>
      </div>
    </div>
  );
};

export default NegativeProductionExternalityDiagram;
