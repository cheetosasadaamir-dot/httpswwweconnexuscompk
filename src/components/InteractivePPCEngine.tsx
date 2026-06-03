import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Info, Lightbulb, GraduationCap } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

type PointType = 'efficient' | 'inefficient' | 'unattainable';

const InteractivePPCEngine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [curveShift, setCurveShift] = useState<'none' | 'growth' | 'consumption'>('none');
  const [showOpportunityCost, setShowOpportunityCost] = useState(false);
  const [pointA, setPointA] = useState({ x: 30, y: 70 }); // In percentage coordinates (0-100)
  const [pointB, setPointB] = useState({ x: 70, y: 30 });
  const [showProfessorInsight, setShowProfessorInsight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);
  const dragTarget = useRef<'A' | 'B' | null>(null);

  // SVG dimensions with 10% buffer
  const width = 520;
  const height = 440;
  const margin = { top: 50, right: 50, bottom: 70, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Curve shift multiplier (20% for growth, -15% for consumption)
  const shiftMultiplier = curveShift === 'growth' ? 1.2 : curveShift === 'consumption' ? 0.85 : 1;

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

  // Convert percentage coordinates (0-100) to SVG coordinates
  const toSvgX = (pct: number, shift: number = 1) => margin.left + (pct / 100) * chartWidth * shift;
  const toSvgY = (pct: number, shift: number = 1) => margin.top + chartHeight - (pct / 100) * chartHeight * shift;
  
  // Convert SVG coordinates to percentage (0-100)
  const toPctX = (svgX: number) => ((svgX - margin.left) / chartWidth) * 100;
  const toPctY = (svgY: number) => ((margin.top + chartHeight - svgY) / chartHeight) * 100;

  // Generate PPC curve using Cubic Bezier - starts at (0, 100) ends at (100, 0)
  // The curve is concave to the origin (bowed outward)
  const generateCurvePath = (shift: number = 1) => {
    // Start point: (0, 100) - top of Y-axis
    const startX = toSvgX(0, 1);
    const startY = toSvgY(100 * shift, 1);
    
    // End point: (100, 0) - end of X-axis
    const endX = toSvgX(100 * shift, 1);
    const endY = toSvgY(0, 1);
    
    // Control points for concave curve (bowed outward from origin)
    // First control point - pulls curve down from start
    const cp1x = startX + chartWidth * 0.15 * shift;
    const cp1y = startY + chartHeight * 0.35;
    
    // Second control point - pulls curve left from end
    const cp2x = endX - chartWidth * 0.35;
    const cp2y = endY - chartHeight * 0.15 * shift;
    
    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  // Calculate Y value on the PPC curve for a given X (percentage)
  const getYOnCurve = (xPct: number, shift: number = 1): number => {
    // Using the mathematical relationship for a concave PPC
    // y = sqrt(1 - (x/100)^2) * 100 * shift (approximate quarter ellipse)
    const normalizedX = xPct / (100 * shift);
    if (normalizedX >= 1) return 0;
    if (normalizedX <= 0) return 100 * shift;
    
    // Quadratic relationship for increasing opportunity cost
    const yPct = Math.sqrt(1 - Math.pow(normalizedX, 2)) * 100 * shift;
    return yPct;
  };

  // Check if point is on/near the curve
  const getPointType = (xPct: number, yPct: number): PointType => {
    const curveY = getYOnCurve(xPct, shiftMultiplier);
    const distance = yPct - curveY;
    
    if (Math.abs(distance) < 5) return 'efficient';
    if (distance < -5) return 'inefficient';
    return 'unattainable';
  };

  // Constrain point to valid area (within chart, respecting curve boundaries)
  const constrainPoint = (xPct: number, yPct: number): { x: number; y: number } => {
    const x = Math.max(2, Math.min(98, xPct));
    const y = Math.max(2, Math.min(98, yPct));
    return { x, y };
  };

  // Calculate opportunity cost between points A and B
  const calculateOpportunityCost = () => {
    const deltaX = pointB.x - pointA.x;
    const deltaY = pointB.y - pointA.y;
    
    if (Math.abs(deltaX) < 0.1) return { gain: 'Consumer Goods', loss: 'Capital Goods', ratio: '∞' };
    
    const ratio = Math.abs(deltaY / deltaX);
    
    return {
      gain: deltaX > 0 ? 'Capital Goods' : 'Consumer Goods',
      loss: deltaX > 0 ? 'Consumer Goods' : 'Capital Goods',
      ratio: ratio.toFixed(2)
    };
  };

  // Handle mouse/touch events for dragging
  const handleMouseDown = useCallback((target: 'A' | 'B') => (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    
    // Convert to SVG coordinates
    const svgX = ((clientX - rect.left) / rect.width) * width;
    const svgY = ((clientY - rect.top) / rect.height) * height;
    
    // Convert to percentage coordinates
    const pctX = toPctX(svgX);
    const pctY = toPctY(svgY);
    
    // Constrain to valid area
    const constrained = constrainPoint(pctX, pctY);
    
    if (dragTarget.current === 'A') {
      setPointA(constrained);
    } else {
      setPointB(constrained);
    }
  }, []);

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
    unattainable: { fill: 'hsl(43 72% 53%)', stroke: 'hsl(43 72% 73%)', label: 'Unattainable (Short Run)' }
  };

  // Grid lines at 20% intervals
  const gridLines = [0, 20, 40, 60, 80, 100];

  return (
    <div ref={containerRef} className="w-full">
      {/* Header with Professor's Insight */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h3 className="font-serif text-2xl text-foreground glow-text mb-1">
            Interactive Production Possibility Curve
          </h3>
          <p className="text-sm text-muted-foreground">
            Exam Standard • Drag points A & B to explore opportunity cost
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
                    <BlockMath math="\text{Opportunity Cost} = \frac{\Delta \text{Consumer Goods}}{\Delta \text{Capital Goods}}" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-secondary mb-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs bg-secondary/20 rounded text-secondary">A2 Level</span>
                    LRAS & Trend Growth Connection
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    An outward shift of the PPC represents an increase in <strong className="text-foreground">productive potential</strong>. 
                    This corresponds to a rightward shift of the <strong className="text-primary">LRAS</strong> curve 
                    and an increase in the <strong className="text-secondary">trend rate of economic growth</strong>.
                  </p>
                  <div className="text-xs text-muted-foreground italic">
                    Causes: Investment, technology, education, resource discovery.
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
          <span className="text-sm font-medium">Economic Growth (+20%)</span>
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
          <span className="text-sm font-medium">Capital Consumption (-15%)</span>
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
      <div className="relative rounded-xl overflow-hidden bg-space-base/50 border border-border/50">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          style={{ touchAction: 'none' }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          {/* Definitions */}
          <defs>
            <linearGradient id="ppcMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(185 100% 55%)" />
              <stop offset="50%" stopColor="hsl(185 100% 50%)" />
              <stop offset="100%" stopColor="hsl(185 100% 45%)" />
            </linearGradient>
            <linearGradient id="ppcGrowthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(142 76% 50%)" />
              <stop offset="100%" stopColor="hsl(142 76% 40%)" />
            </linearGradient>
            <linearGradient id="ppcContractionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(0 84% 55%)" />
              <stop offset="100%" stopColor="hsl(0 84% 45%)" />
            </linearGradient>
            <filter id="curveGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="pointGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <marker id="arrowMarker" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="hsl(210 20% 65%)" />
            </marker>
          </defs>

          {/* Background */}
          <rect x="0" y="0" width={width} height={height} fill="transparent" />

          {/* Grid Lines - aligned with scale */}
          <g opacity="0.12">
            {gridLines.map((pct) => (
              <g key={`grid-${pct}`}>
                {/* Horizontal grid lines */}
                <line
                  x1={margin.left}
                  y1={toSvgY(pct)}
                  x2={margin.left + chartWidth}
                  y2={toSvgY(pct)}
                  stroke="hsl(185 100% 50%)"
                  strokeWidth="1"
                />
                {/* Vertical grid lines */}
                <line
                  x1={toSvgX(pct)}
                  y1={margin.top}
                  x2={toSvgX(pct)}
                  y2={margin.top + chartHeight}
                  stroke="hsl(185 100% 50%)"
                  strokeWidth="1"
                />
              </g>
            ))}
          </g>

          {/* Axes */}
          <motion.line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left + chartWidth + 15}
            y2={margin.top + chartHeight}
            stroke="hsl(210 20% 65%)"
            strokeWidth="2"
            strokeLinecap="round"
            markerEnd="url(#arrowMarker)"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left}
            y2={margin.top - 15}
            stroke="hsl(210 20% 65%)"
            strokeWidth="2"
            strokeLinecap="round"
            markerEnd="url(#arrowMarker)"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Axis Tick Marks and Labels */}
          {gridLines.map((pct) => (
            <g key={`tick-${pct}`}>
              {/* X-axis ticks */}
              <line
                x1={toSvgX(pct)}
                y1={margin.top + chartHeight}
                x2={toSvgX(pct)}
                y2={margin.top + chartHeight + 6}
                stroke="hsl(210 20% 65%)"
                strokeWidth="1.5"
              />
              <text
                x={toSvgX(pct)}
                y={margin.top + chartHeight + 20}
                textAnchor="middle"
                fill="hsl(210 20% 60%)"
                fontSize="11"
                fontFamily="Inter"
              >
                {pct}
              </text>
              
              {/* Y-axis ticks */}
              <line
                x1={margin.left - 6}
                y1={toSvgY(pct)}
                x2={margin.left}
                y2={toSvgY(pct)}
                stroke="hsl(210 20% 65%)"
                strokeWidth="1.5"
              />
              <text
                x={margin.left - 12}
                y={toSvgY(pct) + 4}
                textAnchor="end"
                fill="hsl(210 20% 60%)"
                fontSize="11"
                fontFamily="Inter"
              >
                {pct}
              </text>
            </g>
          ))}

          {/* Axis Labels - positioned outside axes */}
          <motion.text
            x={margin.left + chartWidth / 2}
            y={height - 15}
            textAnchor="middle"
            fill="hsl(185 100% 55%)"
            fontSize="14"
            fontFamily="Montserrat"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Capital Goods (Units)
          </motion.text>
          <motion.text
            x={25}
            y={margin.top + chartHeight / 2}
            textAnchor="middle"
            fill="hsl(185 100% 55%)"
            fontSize="14"
            fontFamily="Montserrat"
            fontWeight="600"
            transform={`rotate(-90, 25, ${margin.top + chartHeight / 2})`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Consumer Goods (Units)
          </motion.text>

          {/* Original PPC Curve - starts at (0,100), ends at (100,0) */}
          <motion.path
            d={generateCurvePath(1)}
            fill="none"
            stroke="url(#ppcMainGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#curveGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Shifted Curve */}
          <AnimatePresence>
            {curveShift !== 'none' && (
              <motion.path
                d={generateCurvePath(shiftMultiplier)}
                fill="none"
                stroke={curveShift === 'growth' ? 'url(#ppcGrowthGradient)' : 'url(#ppcContractionGradient)'}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          {/* Shift Direction Arrow */}
          <AnimatePresence>
            {curveShift === 'growth' && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <line
                  x1={toSvgX(50)}
                  y1={toSvgY(getYOnCurve(50))}
                  x2={toSvgX(50 * 1.15)}
                  y2={toSvgY(getYOnCurve(50) * 1.15)}
                  stroke="hsl(142 76% 50%)"
                  strokeWidth="2"
                  markerEnd="url(#arrowMarker)"
                />
                <text
                  x={toSvgX(58)}
                  y={toSvgY(getYOnCurve(50) * 1.1) - 10}
                  fill="hsl(142 76% 50%)"
                  fontSize="12"
                  fontFamily="Montserrat"
                  fontWeight="500"
                >
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
                <line
                  x1={toSvgX(50)}
                  y1={toSvgY(getYOnCurve(50))}
                  x2={toSvgX(50 * 0.88)}
                  y2={toSvgY(getYOnCurve(50) * 0.88)}
                  stroke="hsl(0 84% 55%)"
                  strokeWidth="2"
                  markerEnd="url(#arrowMarker)"
                />
                <text
                  x={toSvgX(35)}
                  y={toSvgY(getYOnCurve(50) * 0.85) + 20}
                  fill="hsl(0 84% 55%)"
                  fontSize="12"
                  fontFamily="Montserrat"
                  fontWeight="500"
                >
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
                {/* Horizontal dashed line from A to B's X */}
                <motion.line
                  x1={toSvgX(pointA.x)}
                  y1={toSvgY(pointA.y)}
                  x2={toSvgX(pointB.x)}
                  y2={toSvgY(pointA.y)}
                  stroke="hsl(43 72% 53%)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Vertical dashed line from that point to B */}
                <motion.line
                  x1={toSvgX(pointB.x)}
                  y1={toSvgY(pointA.y)}
                  x2={toSvgX(pointB.x)}
                  y2={toSvgY(pointB.y)}
                  stroke="hsl(43 72% 53%)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                
                {/* Delta X label */}
                <rect
                  x={(toSvgX(pointA.x) + toSvgX(pointB.x)) / 2 - 22}
                  y={toSvgY(pointA.y) - 25}
                  width="44"
                  height="20"
                  rx="4"
                  fill="hsl(142 76% 40% / 0.3)"
                  stroke="hsl(142 76% 50%)"
                  strokeWidth="1"
                />
                <text
                  x={(toSvgX(pointA.x) + toSvgX(pointB.x)) / 2}
                  y={toSvgY(pointA.y) - 11}
                  textAnchor="middle"
                  fill="hsl(142 76% 55%)"
                  fontSize="11"
                  fontWeight="600"
                >
                  ΔX: {Math.abs(pointB.x - pointA.x).toFixed(0)}
                </text>
                
                {/* Delta Y label */}
                <rect
                  x={toSvgX(pointB.x) + 8}
                  y={(toSvgY(pointA.y) + toSvgY(pointB.y)) / 2 - 10}
                  width="44"
                  height="20"
                  rx="4"
                  fill="hsl(0 84% 50% / 0.3)"
                  stroke="hsl(0 84% 60%)"
                  strokeWidth="1"
                />
                <text
                  x={toSvgX(pointB.x) + 30}
                  y={(toSvgY(pointA.y) + toSvgY(pointB.y)) / 2 + 4}
                  textAnchor="middle"
                  fill="hsl(0 84% 65%)"
                  fontSize="11"
                  fontWeight="600"
                >
                  ΔY: {Math.abs(pointB.y - pointA.y).toFixed(0)}
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
            transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
          >
            <circle
              cx={toSvgX(pointA.x)}
              cy={toSvgY(pointA.y)}
              r="16"
              fill={pointColors[pointAType].fill}
              stroke={pointColors[pointAType].stroke}
              strokeWidth="3"
              filter="url(#pointGlow)"
            />
            <text
              x={toSvgX(pointA.x)}
              y={toSvgY(pointA.y) + 5}
              textAnchor="middle"
              fill="hsl(222 47% 5%)"
              fontSize="13"
              fontWeight="bold"
              fontFamily="Montserrat"
              style={{ pointerEvents: 'none' }}
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
            transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
          >
            <circle
              cx={toSvgX(pointB.x)}
              cy={toSvgY(pointB.y)}
              r="16"
              fill={pointColors[pointBType].fill}
              stroke={pointColors[pointBType].stroke}
              strokeWidth="3"
              filter="url(#pointGlow)"
            />
            <text
              x={toSvgX(pointB.x)}
              y={toSvgY(pointB.y) + 5}
              textAnchor="middle"
              fill="hsl(222 47% 5%)"
              fontSize="13"
              fontWeight="bold"
              fontFamily="Montserrat"
              style={{ pointerEvents: 'none' }}
            >
              B
            </text>
          </motion.g>

          {/* Legend */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 2 }}
          >
            <rect
              x={width - 175}
              y={margin.top + 5}
              width="165"
              height="90"
              rx="10"
              fill="hsl(222 47% 4% / 0.92)"
              stroke="hsl(185 100% 50% / 0.25)"
              strokeWidth="1"
            />
            
            <circle cx={width - 158} cy={margin.top + 28} r="7" fill="hsl(185 100% 50%)" />
            <text x={width - 143} y={margin.top + 32} fill="hsl(210 20% 75%)" fontSize="11" fontFamily="Inter">
              On Curve (Efficient)
            </text>
            
            <circle cx={width - 158} cy={margin.top + 53} r="7" fill="hsl(0 84% 60%)" />
            <text x={width - 143} y={margin.top + 57} fill="hsl(210 20% 75%)" fontSize="11" fontFamily="Inter">
              Inside (Inefficient)
            </text>
            
            <circle cx={width - 158} cy={margin.top + 78} r="7" fill="hsl(43 72% 53%)" />
            <text x={width - 143} y={margin.top + 82} fill="hsl(210 20% 75%)" fontSize="11" fontFamily="Inter">
              Outside (Unattainable)
            </text>
          </motion.g>

          {/* Origin Label */}
          <text
            x={margin.left - 10}
            y={margin.top + chartHeight + 18}
            textAnchor="middle"
            fill="hsl(210 20% 55%)"
            fontSize="12"
            fontFamily="Inter"
          >
            O
          </text>
        </svg>
      </div>

      {/* Point Status Indicators */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-space-elevated border border-border/50">
          <div 
            className="w-4 h-4 rounded-full shadow-lg" 
            style={{ backgroundColor: pointColors[pointAType].fill, boxShadow: `0 0 10px ${pointColors[pointAType].fill}` }}
          />
          <span className="text-sm text-muted-foreground">Point A:</span>
          <span className="text-sm font-semibold" style={{ color: pointColors[pointAType].fill }}>
            {pointColors[pointAType].label}
          </span>
          <span className="text-xs text-muted-foreground">({pointA.x.toFixed(0)}, {pointA.y.toFixed(0)})</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-space-elevated border border-border/50">
          <div 
            className="w-4 h-4 rounded-full shadow-lg" 
            style={{ backgroundColor: pointColors[pointBType].fill, boxShadow: `0 0 10px ${pointColors[pointBType].fill}` }}
          />
          <span className="text-sm text-muted-foreground">Point B:</span>
          <span className="text-sm font-semibold" style={{ color: pointColors[pointBType].fill }}>
            {pointColors[pointBType].label}
          </span>
          <span className="text-xs text-muted-foreground">({pointB.x.toFixed(0)}, {pointB.y.toFixed(0)})</span>
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
                  Moving from <strong className="text-primary">A ({pointA.x.toFixed(0)}, {pointA.y.toFixed(0)})</strong> to <strong className="text-primary">B ({pointB.x.toFixed(0)}, {pointB.y.toFixed(0)})</strong>:
                </p>
                <ul className="text-sm space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs">GAIN</span>
                    <span className="text-foreground">{opportunityCost.gain}</span>
                    <span className="text-muted-foreground">(+{Math.abs(pointB.x - pointA.x).toFixed(0)} units)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs">LOSS</span>
                    <span className="text-foreground">{opportunityCost.loss}</span>
                    <span className="text-muted-foreground">(-{Math.abs(pointB.y - pointA.y).toFixed(0)} units)</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-space-elevated rounded-lg border border-border/30">
                <p className="text-xs text-muted-foreground mb-2">Opportunity Cost Ratio:</p>
                <BlockMath math={`\\text{OC} = \\frac{|\\Delta Y|}{|\\Delta X|} = \\frac{${Math.abs(pointB.y - pointA.y).toFixed(0)}}{${Math.abs(pointB.x - pointA.x).toFixed(0)}} = ${opportunityCost.ratio}`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exam Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.2 }}
        className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20"
      >
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-primary">Exam Tip (AO1/AO2):</strong> Points <em>on</em> the PPC represent <strong>productive efficiency</strong> — 
          all resources are fully employed. Points <em>inside</em> indicate <strong>unemployed resources</strong> or <strong>technical inefficiency</strong>. 
          Points <em>outside</em> are unattainable without <strong>economic growth</strong> (rightward shift of LRAS).
        </p>
      </motion.div>
    </div>
  );
};

export default InteractivePPCEngine;
