import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SystemComparisonPPCDiagramProps {
  title?: string;
}

const SystemComparisonPPCDiagram = ({ title = "PPC: Resource Allocation by Economic System" }: SystemComparisonPPCDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSystem, setActiveSystem] = useState<'market' | 'planned' | 'mixed'>('mixed');
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

  const systems = {
    market: {
      label: 'Market Economy',
      color: 'hsl(217, 91%, 60%)',
      point: { x: 320, y: 80 },
      description: 'Consumer sovereignty drives production toward consumer goods based on demand',
      xLabel: 'More Consumer Goods',
      yLabel: 'Fewer Merit Goods'
    },
    planned: {
      label: 'Planned Economy',
      color: 'hsl(0, 84%, 60%)',
      point: { x: 120, y: 180 },
      description: 'State prioritizes merit goods (healthcare, education) over consumer goods',
      xLabel: 'Fewer Consumer Goods',
      yLabel: 'More Merit Goods'
    },
    mixed: {
      label: 'Mixed Economy',
      color: 'hsl(142, 69%, 58%)',
      point: { x: 220, y: 130 },
      description: 'Balanced allocation with government providing public goods while markets serve consumers',
      xLabel: 'Balanced Allocation',
      yLabel: 'Balanced Provision'
    }
  };

  const currentSystem = systems[activeSystem];

  // PPC curve path (concave)
  const ppcPath = "M 50 50 Q 180 60, 280 120 Q 340 170, 370 280";

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-center text-sm font-semibold text-silver-bright mb-4">{title}</h4>
      
      <div className="flex justify-center gap-2 mb-4">
        {(Object.keys(systems) as Array<keyof typeof systems>).map((key) => (
          <motion.button
            key={key}
            onClick={() => setActiveSystem(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              activeSystem === key 
                ? 'border-current shadow-lg' 
                : 'border-transparent bg-muted/30 hover:bg-muted/50'
            }`}
            style={{ 
              color: activeSystem === key ? systems[key].color : 'hsl(220, 14%, 60%)',
              backgroundColor: activeSystem === key ? `${systems[key].color}20` : undefined
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {systems[key].label}
          </motion.button>
        ))}
      </div>

      <svg viewBox="0 0 450 380" className="w-full h-auto max-w-lg mx-auto">
        <defs>
          <filter id="ppcGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="ppcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(190, 95%, 50%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g opacity="0.15">
          {[100, 150, 200, 250].map((y) => (
            <line key={`h-${y}`} x1="50" y1={y} x2="370" y2={y} stroke="hsl(220, 14%, 50%)" strokeDasharray="4 4" />
          ))}
          {[120, 190, 260, 330].map((x) => (
            <line key={`v-${x}`} x1={x} y1="50" x2={x} y2="280" stroke="hsl(220, 14%, 50%)" strokeDasharray="4 4" />
          ))}
        </g>

        {/* Axes */}
        <motion.line
          x1="50" y1="280" x2="380" y2="280"
          stroke="hsl(220, 14%, 60%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.line
          x1="50" y1="280" x2="50" y2="40"
          stroke="hsl(220, 14%, 60%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Axis labels */}
        <text x="390" y="285" fill="hsl(220, 14%, 70%)" fontSize="11" fontWeight="500">
          Consumer Goods
        </text>
        <text x="30" y="35" fill="hsl(220, 14%, 70%)" fontSize="11" fontWeight="500" textAnchor="middle">
          Merit/Public
        </text>
        <text x="30" y="48" fill="hsl(220, 14%, 70%)" fontSize="11" fontWeight="500" textAnchor="middle">
          Goods
        </text>

        {/* PPC Curve */}
        <motion.path
          d={ppcPath}
          fill="none"
          stroke="url(#ppcGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#ppcGlow)"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* All system points (faded) */}
        {(Object.keys(systems) as Array<keyof typeof systems>).map((key) => {
          if (key === activeSystem) return null;
          const system = systems[key];
          return (
            <motion.circle
              key={key}
              cx={system.point.x}
              cy={system.point.y}
              r="8"
              fill={system.color}
              opacity="0.3"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.5, duration: 0.3 }}
            />
          );
        })}

        {/* Active system point */}
        <motion.g
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {/* Dashed lines to axes */}
          <motion.line
            x1={currentSystem.point.x}
            y1={currentSystem.point.y}
            x2={currentSystem.point.x}
            y2="280"
            stroke={currentSystem.color}
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.6"
            animate={{ 
              x1: currentSystem.point.x,
              y1: currentSystem.point.y 
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.line
            x1="50"
            y1={currentSystem.point.y}
            x2={currentSystem.point.x}
            y2={currentSystem.point.y}
            stroke={currentSystem.color}
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.6"
            animate={{ 
              x2: currentSystem.point.x,
              y1: currentSystem.point.y,
              y2: currentSystem.point.y 
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Main point */}
          <motion.circle
            cx={currentSystem.point.x}
            cy={currentSystem.point.y}
            r="12"
            fill={currentSystem.color}
            filter="url(#ppcGlow)"
            animate={{ 
              cx: currentSystem.point.x,
              cy: currentSystem.point.y 
            }}
            transition={{ duration: 0.5, type: "spring" }}
          />
          
          {/* Point label */}
          <motion.text
            x={currentSystem.point.x + 20}
            y={currentSystem.point.y - 15}
            fill={currentSystem.color}
            fontSize="11"
            fontWeight="600"
            animate={{ 
              x: currentSystem.point.x + 20,
              y: currentSystem.point.y - 15 
            }}
            transition={{ duration: 0.5 }}
          >
            {currentSystem.label}
          </motion.text>
        </motion.g>

        {/* Description box */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.8 }}
        >
          <rect
            x="60"
            y="310"
            width="330"
            height="55"
            rx="8"
            fill="hsl(220, 15%, 10%)"
            stroke={currentSystem.color}
            strokeWidth="1"
            opacity="0.95"
          />
          <motion.text
            x="225"
            y="330"
            textAnchor="middle"
            fill={currentSystem.color}
            fontSize="10"
            fontWeight="600"
            key={activeSystem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentSystem.label} Allocation:
          </motion.text>
          <motion.text
            x="225"
            y="348"
            textAnchor="middle"
            fill="hsl(220, 14%, 75%)"
            fontSize="9"
            key={`desc-${activeSystem}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {currentSystem.description}
          </motion.text>
        </motion.g>

        {/* Origin label */}
        <text x="40" y="295" fill="hsl(220, 14%, 50%)" fontSize="10">O</text>
      </svg>
    </div>
  );
};

export default SystemComparisonPPCDiagram;
