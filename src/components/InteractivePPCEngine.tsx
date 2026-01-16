import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Info, Lightbulb, GraduationCap } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

type PointType = 'efficient' | 'inefficient' | 'unattainable';

interface DraggablePoint {
  x: number;
  y: number;
  label: string;
  type: PointType;
}

const InteractivePPCEngine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [curveShift, setCurveShift] = useState<'none' | 'growth' | 'consumption'>('none');
  const [activePoint, setActivePoint] = useState<DraggablePoint | null>(null);
  const [showOpportunityCost, setShowOpportunityCost] = useState(false);
  const [pointA, setPointA] = useState({ x: 140, y: 120 });
  const [pointB, setPointB] = useState({ x: 240, y: 220 });
  const [showProfessorInsight, setShowProfessorInsight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);
  const dragTarget = useRef<'A' | 'B' | null>(null);

  // SVG dimensions
  const width = 500;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Curve shift offset
  const shiftOffset = curveShift === 'growth' ? 40 : curveShift === 'consumption' ? -30 : 0;

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

  // Generate PPC curve path
  const generateCurvePath = (offset: number = 0) => {
    const startX = margin.left;
    const startY = margin.top + 20 - offset;
    const endX = margin.left + chartWidth - 20 + offset;
    const endY = margin.top + chartHeight;
    
    const cp1x = startX + 60;
    const cp1y = startY + 40;
    const cp2x = endX - 80;
    const cp2y = endY - 40;
    
    return `M ${startX} ${startY} Q ${cp1x} ${cp1y} ${(startX + endX) / 2} ${(startY + endY) / 2 + 20} Q ${cp2x} ${cp2y} ${endX} ${endY}`;
  };

  // Check if point is on/near the curve
  const getPointType = (x: number, y: number): PointType => {
    // Calculate expected Y on curve for given X
    const normalizedX = (x - margin.left) / chartWidth;
    const curveY = margin.top + 20 + Math.pow(normalizedX, 1.8) * chartHeight * 0.9 - shiftOffset;
    
    const distance = y - curveY;
    
    if (Math.abs(distance) < 15) return 'efficient';
    if (distance > 15) return 'inefficient';
    return 'unattainable';
  };

  // Calculate opportunity cost between points A and B
  const calculateOpportunityCost = () => {
    const deltaCapital = Math.abs(pointB.x - pointA.x);
    const deltaConsumer = Math.abs(pointB.y - pointA.y);
    
    if (deltaCapital === 0) return { gain: 'Consumer Goods', loss: 'Capital Goods', ratio: 0 };
    
    const ratio = deltaConsumer / deltaCapital;
    const isMovingRight = pointB.x > pointA.x;
    
    return {
      gain: isMovingRight ? 'Capital Goods' : 'Consumer Goods',
      loss: isMovingRight ? 'Consumer Goods' : 'Capital Goods',
      ratio: ratio.toFixed(2)
    };
  };

  // Handle mouse/touch events for dragging
  const handleMouseDown = useCallback((target: 'A' | 'B') => (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragTarget.current = target;
    setShowOpportunityCost(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !svgRef.current || !dragTarget.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    
    let clientX: number, clientY: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const x = ((clientX - rect.left) / rect.width) * width;
    const y = ((clientY - rect.top) / rect.height) * height;
    
    // Constrain to chart area
    const constrainedX = Math.max(margin.left + 20, Math.min(margin.left + chartWidth - 30, x));
    const constrainedY = Math.max(margin.top + 20, Math.min(margin.top + chartHeight - 20, y));
    
    if (dragTarget.current === 'A') {
      setPointA({ x: constrainedX, y: constrainedY });
    } else {
      setPointB({ x: constrainedX, y: constrainedY });
    }
  }, [chartHeight, chartWidth, height, margin.left, margin.top, width]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    dragTarget.current = null;
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseUp]);

  const pointAType = getPointType(pointA.x, pointA.y);
  const pointBType = getPointType(pointB.x, pointB.y);
  const opportunityCost = calculateOpportunityCost();

  const pointColors = {
    efficient: { fill: 'hsl(185 100% 50%)', stroke: 'hsl(185 100% 70%)', label: 'Productive Efficiency' },
    inefficient: { fill: 'hsl(0 84% 60%)', stroke: 'hsl(0 84% 80%)', label: 'Inefficiency/Unemployment' },
    unattainable: { fill: 'hsl(43 72% 53%)', stroke: 'hsl(43 72% 73%)', label: 'Unattainable in Short Run' }
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Header with Professor's Insight */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h3 className="font-serif text-2xl text-foreground glow-text mb-1">
            Interactive Production Possibility Curve
          </h3>
          <p className="text-sm text-muted-foreground">
            CIE 9708 Standard • Drag points to explore opportunity cost
          </p>
        </div>
        
        <button
          onClick={() => setShowProfessorInsight(!showProfessorInsight)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 transition-all group"
        >
          <GraduationCap className="w-4 h-4" />
          <span className="text-sm font-medium">Professor's Insight</span>
          <Lightbulb className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Professor's Insight Panel */}
      <AnimatePresence>
        {showProfessorInsight && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-serif text-lg text-secondary mb-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs bg-primary/20 rounded text-primary">AS Level</span>
                    Law of Increasing Opportunity Cost
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    The PPC is <strong className="text-foreground">concave to the origin</strong> because resources are not perfectly substitutable. 
                    As we produce more of one good, we must sacrifice increasingly larger amounts of the other.
                  </p>
                  <div className="p-3 bg-space-elevated rounded-lg">
                    <BlockMath math="\text{Opportunity Cost} = \frac{\Delta \text{Good Y}}{\Delta \text{Good X}}" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-secondary mb-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs bg-secondary/20 rounded text-secondary">A2 Level</span>
                    LRAS & Trend Growth Connection
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    An outward shift of the PPC represents an increase in <strong className="text-foreground">productive potential</strong>. 
                    This corresponds to a rightward shift of the <strong className="text-primary">Long-Run Aggregate Supply (LRAS)</strong> curve 
                    and an increase in the <strong className="text-secondary">trend rate of economic growth</strong>.
                  </p>
                  <div className="text-xs text-muted-foreground italic">
                    Causes: Investment in capital, technological progress, improved education & training, discovery of resources.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={() => setCurveShift(curveShift === 'growth' ? 'none' : 'growth')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
            curveShift === 'growth'
              ? 'bg-green-500/20 border border-green-500/50 text-green-400 shadow-lg shadow-green-500/20'
              : 'bg-space-elevated border border-border text-muted-foreground hover:text-foreground hover:border-green-500/30'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Economic Growth</span>
        </button>
        
        <button
          onClick={() => setCurveShift(curveShift === 'consumption' ? 'none' : 'consumption')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
            curveShift === 'consumption'
              ? 'bg-red-500/20 border border-red-500/50 text-red-400 shadow-lg shadow-red-500/20'
              : 'bg-space-elevated border border-border text-muted-foreground hover:text-foreground hover:border-red-500/30'
          }`}
        >
          <TrendingDown className="w-4 h-4" />
          <span className="text-sm font-medium">Capital Consumption</span>
        </button>

        <button
          onClick={() => setShowOpportunityCost(!showOpportunityCost)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
            showOpportunityCost
              ? 'bg-primary/20 border border-primary/50 text-primary shadow-lg shadow-primary/20'
              : 'bg-space-elevated border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
          }`}
        >
          <Info className="w-4 h-4" />
          <span className="text-sm font-medium">Show Opportunity Cost</span>
        </button>
      </div>

      {/* Main SVG Diagram */}
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto cursor-crosshair"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          style={{ touchAction: 'none' }}
        >
          {/* Definitions */}
          <defs>
            <linearGradient id="ppcCurveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(185 100% 50%)" />
              <stop offset="100%" stopColor="hsl(185 100% 70%)" />
            </linearGradient>
            <linearGradient id="growthCurveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(142 76% 45%)" />
              <stop offset="100%" stopColor="hsl(142 76% 60%)" />
            </linearGradient>
            <linearGradient id="consumptionCurveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(0 84% 50%)" />
              <stop offset="100%" stopColor="hsl(0 84% 65%)" />
            </linearGradient>
            <filter id="glowCyan">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="glowGold">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="hsl(210 20% 60%)" />
            </marker>
          </defs>

          {/* Background Grid */}
          <g opacity="0.15">
            {Array.from({ length: 11 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1={margin.left}
                y1={margin.top + (chartHeight / 10) * i}
                x2={margin.left + chartWidth}
                y2={margin.top + (chartHeight / 10) * i}
                stroke="hsl(185 100% 50%)"
                strokeWidth="0.5"
              />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={margin.left + (chartWidth / 10) * i}
                y1={margin.top}
                x2={margin.left + (chartWidth / 10) * i}
                y2={margin.top + chartHeight}
                stroke="hsl(185 100% 50%)"
                strokeWidth="0.5"
              />
            ))}
          </g>

          {/* Axes */}
          <motion.line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left + chartWidth}
            y2={margin.top + chartHeight}
            stroke="hsl(210 20% 60%)"
            strokeWidth="2"
            markerEnd="url(#arrowHead)"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left}
            y2={margin.top}
            stroke="hsl(210 20% 60%)"
            strokeWidth="2"
            markerEnd="url(#arrowHead)"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Axis Labels with Glow */}
          <motion.text
            x={margin.left + chartWidth / 2}
            y={height - 15}
            textAnchor="middle"
            fill="hsl(185 100% 50%)"
            fontSize="14"
            fontFamily="Montserrat"
            fontWeight="500"
            filter="url(#glowCyan)"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="hover:brightness-150 transition-all cursor-default"
          >
            Capital Goods
          </motion.text>
          <motion.text
            x={20}
            y={margin.top + chartHeight / 2}
            textAnchor="middle"
            fill="hsl(185 100% 50%)"
            fontSize="14"
            fontFamily="Montserrat"
            fontWeight="500"
            transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}
            filter="url(#glowCyan)"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="hover:brightness-150 transition-all cursor-default"
          >
            Consumer Goods
          </motion.text>

          {/* Original PPC Curve with Self-Drawing Animation */}
          <motion.path
            d={generateCurvePath(0)}
            fill="none"
            stroke="url(#ppcCurveGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glowCyan)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Shifted Curve (Growth or Consumption) */}
          <AnimatePresence>
            {curveShift !== 'none' && (
              <motion.path
                d={generateCurvePath(shiftOffset)}
                fill="none"
                stroke={curveShift === 'growth' ? 'url(#growthCurveGradient)' : 'url(#consumptionCurveGradient)'}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          {/* Shift Arrows */}
          <AnimatePresence>
            {curveShift === 'growth' && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.path
                  d="M 250 160 L 280 140"
                  stroke="hsl(142 76% 45%)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowHead)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <text x="290" y="135" fill="hsl(142 76% 45%)" fontSize="11" fontFamily="Montserrat">
                  Growth
                </text>
              </motion.g>
            )}
            {curveShift === 'consumption' && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.path
                  d="M 220 200 L 190 220"
                  stroke="hsl(0 84% 60%)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowHead)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <text x="145" y="235" fill="hsl(0 84% 60%)" fontSize="11" fontFamily="Montserrat">
                  Contraction
                </text>
              </motion.g>
            )}
          </AnimatePresence>

          {/* Opportunity Cost Visualization */}
          <AnimatePresence>
            {showOpportunityCost && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Dashed lines showing trade-off */}
                <motion.line
                  x1={pointA.x}
                  y1={pointA.y}
                  x2={pointB.x}
                  y2={pointA.y}
                  stroke="hsl(43 72% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1={pointB.x}
                  y1={pointA.y}
                  x2={pointB.x}
                  y2={pointB.y}
                  stroke="hsl(43 72% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                
                {/* Gain/Loss Labels */}
                <rect
                  x={(pointA.x + pointB.x) / 2 - 25}
                  y={pointA.y - 22}
                  width="50"
                  height="18"
                  rx="4"
                  fill="hsl(142 76% 45% / 0.2)"
                  stroke="hsl(142 76% 45%)"
                  strokeWidth="1"
                />
                <text
                  x={(pointA.x + pointB.x) / 2}
                  y={pointA.y - 10}
                  textAnchor="middle"
                  fill="hsl(142 76% 45%)"
                  fontSize="10"
                  fontWeight="600"
                >
                  {pointB.x > pointA.x ? '+' : '-'} ΔX
                </text>
                
                <rect
                  x={pointB.x + 5}
                  y={(pointA.y + pointB.y) / 2 - 9}
                  width="50"
                  height="18"
                  rx="4"
                  fill="hsl(0 84% 60% / 0.2)"
                  stroke="hsl(0 84% 60%)"
                  strokeWidth="1"
                />
                <text
                  x={pointB.x + 30}
                  y={(pointA.y + pointB.y) / 2 + 4}
                  textAnchor="middle"
                  fill="hsl(0 84% 60%)"
                  fontSize="10"
                  fontWeight="600"
                >
                  {pointB.y > pointA.y ? '-' : '+'} ΔY
                </text>
              </motion.g>
            )}
          </AnimatePresence>

          {/* Draggable Point A */}
          <motion.g
            style={{ cursor: 'grab' }}
            onMouseDown={handleMouseDown('A')}
            onTouchStart={handleMouseDown('A')}
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            whileHover={{ scale: 1.2 }}
          >
            <circle
              cx={pointA.x}
              cy={pointA.y}
              r="14"
              fill={pointColors[pointAType].fill}
              stroke={pointColors[pointAType].stroke}
              strokeWidth="3"
              opacity="0.9"
              filter="url(#glowGold)"
            />
            <text
              x={pointA.x}
              y={pointA.y + 5}
              textAnchor="middle"
              fill="hsl(222 47% 2%)"
              fontSize="12"
              fontWeight="bold"
            >
              A
            </text>
          </motion.g>

          {/* Draggable Point B */}
          <motion.g
            style={{ cursor: 'grab' }}
            onMouseDown={handleMouseDown('B')}
            onTouchStart={handleMouseDown('B')}
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 1.4, type: "spring" }}
            whileHover={{ scale: 1.2 }}
          >
            <circle
              cx={pointB.x}
              cy={pointB.y}
              r="14"
              fill={pointColors[pointBType].fill}
              stroke={pointColors[pointBType].stroke}
              strokeWidth="3"
              opacity="0.9"
              filter="url(#glowGold)"
            />
            <text
              x={pointB.x}
              y={pointB.y + 5}
              textAnchor="middle"
              fill="hsl(222 47% 2%)"
              fontSize="12"
              fontWeight="bold"
            >
              B
            </text>
          </motion.g>

          {/* Legend */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 1.6 }}
          >
            <rect
              x={width - 170}
              y={margin.top}
              width="160"
              height="85"
              rx="8"
              fill="hsl(222 47% 4% / 0.9)"
              stroke="hsl(185 100% 50% / 0.2)"
            />
            <circle cx={width - 155} cy={margin.top + 20} r="6" fill="hsl(185 100% 50%)" />
            <text x={width - 140} y={margin.top + 24} fill="hsl(210 20% 70%)" fontSize="11">Efficient</text>
            
            <circle cx={width - 155} cy={margin.top + 45} r="6" fill="hsl(0 84% 60%)" />
            <text x={width - 140} y={margin.top + 49} fill="hsl(210 20% 70%)" fontSize="11">Inefficient</text>
            
            <circle cx={width - 155} cy={margin.top + 70} r="6" fill="hsl(43 72% 53%)" />
            <text x={width - 140} y={margin.top + 74} fill="hsl(210 20% 70%)" fontSize="11">Unattainable</text>
          </motion.g>
        </svg>

        {/* Point Status Indicators */}
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-space-elevated">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: pointColors[pointAType].fill }}
            />
            <span className="text-sm text-muted-foreground">Point A:</span>
            <span className="text-sm font-medium" style={{ color: pointColors[pointAType].fill }}>
              {pointColors[pointAType].label}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-space-elevated">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: pointColors[pointBType].fill }}
            />
            <span className="text-sm text-muted-foreground">Point B:</span>
            <span className="text-sm font-medium" style={{ color: pointColors[pointBType].fill }}>
              {pointColors[pointBType].label}
            </span>
          </div>
        </div>
      </div>

      {/* Opportunity Cost Display */}
      <AnimatePresence>
        {showOpportunityCost && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 p-4 rounded-xl bg-secondary/5 border border-secondary/20"
          >
            <h4 className="font-serif text-lg text-secondary mb-3 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Opportunity Cost Calculation
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Moving from <strong className="text-primary">A</strong> to <strong className="text-primary">B</strong>:
                </p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">↑ Gain:</span>
                    <span className="text-foreground">{opportunityCost.gain}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">↓ Loss:</span>
                    <span className="text-foreground">{opportunityCost.loss}</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-space-elevated rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Opportunity Cost Ratio:</p>
                <InlineMath math={`\\text{OC} = \\frac{\\Delta Y}{\\Delta X} = ${opportunityCost.ratio}`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exam Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
        className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20"
      >
        <p className="text-xs text-muted-foreground">
          <strong className="text-primary">Exam Tip:</strong> Always explain that points <em>inside</em> the PPC 
          indicate <strong>unemployed resources</strong> or <strong>productive inefficiency</strong>, while points 
          <em>outside</em> are unattainable without <strong>economic growth</strong> (outward shift of PPC/LRAS).
        </p>
      </motion.div>
    </div>
  );
};

export default InteractivePPCEngine;
