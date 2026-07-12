import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ResourceAllocationSpectrumDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSystem, setHoveredSystem] = useState<string | null>(null);
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

    return => observer.disconnect();
  }, []);

  const systems = [
    { 
      id: 'command', 
      label: 'Pure Planned', 
      position: 5, 
      color: 'hsl(0, 84%, 60%)',
      examples: 'North Korea, Cuba',
      stateControl: '100%'
    },
    { 
      id: 'mixed-left', 
      label: 'Mixed (State-Leaning)', 
      position: 30, 
      color: 'hsl(25, 95%, 53%)',
      examples: 'China, Russia',
      stateControl: '60-70%'
    },
    { 
      id: 'mixed', 
      label: 'Mixed Economy', 
      position: 50, 
      color: 'hsl(142, 69%, 58%)',
      examples: 'UK, France, Germany',
      stateControl: '40-50%'
    },
    { 
      id: 'mixed-right', 
      label: 'Mixed (Market-Leaning)', 
      position: 70, 
      color: 'hsl(190, 95%, 50%)',
      examples: 'USA, Japan',
      stateControl: '30-40%'
    },
    { 
      id: 'market', 
      label: 'Pure Market', 
      position: 95, 
      color: 'hsl(217, 91%, 60%)',
      examples: 'Hong Kong (historical)',
      stateControl: '0%'
    }
  ];

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-center text-sm font-semibold text-silver-bright mb-4">
        The Resource Allocation Spectrum
      </h4>
      
      <svg viewBox="0 0 800 280" className="w-full h-auto">
        <defs>
          <linearGradient id="spectrumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0, 84%, 50%)" />
            <stop offset="25%" stopColor="hsl(25, 95%, 53%)" />
            <stop offset="50%" stopColor="hsl(142, 69%, 58%)" />
            <stop offset="75%" stopColor="hsl(190, 95%, 50%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background spectrum bar */}
        <motion.rect
          x="50" y="120" width="700" height="20" rx="10"
          fill="url(#spectrumGrad)"
          fillOpacity="0.3"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: 'left center' }}
        />

        {/* Spectrum line */}
        <motion.line
          x1="50" y1="130" x2="750" y2="130"
          stroke="url(#spectrumGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* End labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <text x="50" y="170" textAnchor="middle" fill="hsl(0, 84%, 70%)" fontSize="11" fontWeight="600">
            100% State
          </text>
          <text x="50" y="185" textAnchor="middle" fill="hsl(220, 14%, 60%)" fontSize="10">
            Control
          </text>
          
          <text x="750" y="170" textAnchor="middle" fill="hsl(217, 91%, 70%)" fontSize="11" fontWeight="600">
            100% Market
          </text>
          <text x="750" y="185" textAnchor="middle" fill="hsl(220, 14%, 60%)" fontSize="10">
            Forces
          </text>
        </motion.g>

        {/* System markers */}
        {systems.map((system, index) => {
          const x = 50 + (system.position / 100) * 700;
          const isHovered = hoveredSystem === system.id;
          
          return (
            <motion.g 
              key={system.id}
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
              onMouseEnter={() => setHoveredSystem(system.id)}
              onMouseLeave={() => setHoveredSystem(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Marker circle */}
              <motion.circle
                cx={x}
                cy="130"
                r={isHovered ? 14 : 10}
                fill={system.color}
                filter="url(#glow)"
                animate={{ scale: isHovered ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Connecting line */}
              <line
                x1={x}
                y1="116"
                x2={x}
                y2={index % 2 === 0 ? 50 : 70}
                stroke={system.color}
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity={isHovered ? 1 : 0.6}
              />
              
              {/* Label box */}
              <motion.g
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={x - 55}
                  y={index % 2 === 0 ? 10 : 30}
                  width="110"
                  height={isHovered ? 38 : 32}
                  rx="6"
                  fill="hsl(220, 15%, 10%)"
                  stroke={system.color}
                  strokeWidth={isHovered ? 2 : 1}
                  opacity={isHovered ? 1 : 0.9}
                />
                <text
                  x={x}
                  y={index % 2 === 0 ? 30 : 50}
                  textAnchor="middle"
                  fill={system.color}
                  fontSize="10"
                  fontWeight="600"
                >
                  {system.label}
                </text>
                {isHovered && (
                  <text
                    x={x}
                    y={index % 2 === 0 ? 44 : 64}
                    textAnchor="middle"
                    fill="hsl(220, 14%, 70%)"
                    fontSize="8"
                  >
                    {system.examples}
                  </text>
                )}
              </motion.g>

              {/* State control percentage */}
              <motion.text
                x={x}
                y="210"
                textAnchor="middle"
                fill="hsl(220, 14%, 60%)"
                fontSize="9"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.5 }}
              >
                State: {system.stateControl}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Title labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          <text x="400" y="250" textAnchor="middle" fill="hsl(220, 14%, 50%)" fontSize="10">
            ← Greater Government Intervention | Greater Market Freedom →
          </text>
        </motion.g>

        {/* Arrow indicators */}
        <motion.path
          d="M 80 130 L 60 125 L 60 135 Z"
          fill="hsl(0, 84%, 60%)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.3 }}
        />
        <motion.path
          d="M 720 130 L 740 125 L 740 135 Z"
          fill="hsl(217, 91%, 60%)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.3 }}
        />
      </svg>

      <p className="text-center text-xs text-muted-foreground mt-2">
        Hover over markers to see examples. Most real-world economies exist in the <span className="text-green-400">Mixed Economy</span> zone.
      </p>
    </div>
  );
};

export default ResourceAllocationSpectrumDiagram;
