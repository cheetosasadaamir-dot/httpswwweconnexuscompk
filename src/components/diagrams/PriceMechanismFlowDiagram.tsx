import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const PriceMechanismFlowDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    { id: 0, label: 'Consumer Demand Increases', color: 'hsl(142, 69%, 58%)' },
    { id: 1, label: 'Price Signal Rises', color: 'hsl(45, 93%, 58%)' },
    { id: 2, label: 'Higher Profit Incentive', color: 'hsl(25, 95%, 58%)' },
    { id: 3, label: 'Resources Reallocated', color: 'hsl(190, 95%, 50%)' },
    { id: 4, label: 'Supply Increases', color: 'hsl(217, 91%, 60%)' },
  ];

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-center text-sm font-semibold text-silver-bright mb-4">
        The Price Mechanism: Resource Allocation Signal
      </h4>
      
      <svg viewBox="0 0 800 320" className="w-full h-auto">
        <defs>
          <filter id="glowCyan">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <marker id="arrowCyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="hsl(190, 95%, 50%)" />
          </marker>
          <marker id="arrowGold" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="hsl(45, 93%, 58%)" />
          </marker>
        </defs>

        {/* Central circular flow */}
        <motion.circle
          cx="400"
          cy="160"
          r="100"
          fill="none"
          stroke="hsl(220, 14%, 25%)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* Step boxes around the circle */}
        {steps.map((step, index) => {
          const angle = (index * 72 - 90) * (Math.PI / 180);
          const x = 400 + Math.cos(angle) * 140;
          const y = 160 + Math.sin(angle) * 120;
          const isActive = activeStep === index;

          return (
            <motion.g
              key={step.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { 
                opacity: 1, 
                scale: isActive ? 1.1 : 1,
              } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            >
              {/* Connection line to center */}
              <motion.line
                x1={x}
                y1={y}
                x2="400"
                y2="160"
                stroke={step.color}
                strokeWidth={isActive ? 3 : 1}
                strokeOpacity={isActive ? 0.8 : 0.3}
                strokeDasharray={isActive ? "0" : "4 2"}
              />

              {/* Step box */}
              <motion.rect
                x={x - 60}
                y={y - 25}
                width="120"
                height="50"
                rx="8"
                fill="hsl(220, 15%, 8%)"
                stroke={step.color}
                strokeWidth={isActive ? 3 : 1.5}
                filter={isActive ? "url(#glowCyan)" : undefined}
              />
              
              {/* Step number */}
              <circle
                cx={x - 45}
                cy={y - 10}
                r="10"
                fill={step.color}
              />
              <text
                x={x - 45}
                y={y - 6}
                textAnchor="middle"
                fill="hsl(220, 15%, 10%)"
                fontSize="10"
                fontWeight="bold"
              >
                {index + 1}
              </text>

              {/* Step label */}
              <text
                x={x}
                y={y - 5}
                textAnchor="middle"
                fill={isActive ? step.color : "hsl(220, 14%, 75%)"}
                fontSize="9"
                fontWeight={isActive ? "600" : "400"}
              >
                <tspan x={x} dy="0">{step.label.split(' ').slice(0, 2).join(' ')}</tspan>
                <tspan x={x} dy="12">{step.label.split(' ').slice(2).join(' ')}</tspan>
              </text>
            </motion.g>
          );
        })}

        {/* Arrows between steps */}
        {steps.map((step, index) => {
          const nextIndex = (index + 1) % 5;
          const angle1 = (index * 72 - 90) * (Math.PI / 180);
          const angle2 = (nextIndex * 72 - 90) * (Math.PI / 180);
          
          const x1 = 400 + Math.cos(angle1) * 140;
          const y1 = 160 + Math.sin(angle1) * 120;
          const x2 = 400 + Math.cos(angle2) * 140;
          const y2 = 160 + Math.sin(angle2) * 120;
          
          const midAngle = ((index * 72 + nextIndex * 72) / 2 - 90) * (Math.PI / 180);
          const cx = 400 + Math.cos(midAngle) * 180;
          const cy = 160 + Math.sin(midAngle) * 150;

          const isActiveArrow = activeStep === index;

          return (
            <motion.path
              key={`arrow-${index}`}
              d={`M ${x1 + 50} ${y1} Q ${cx} ${cy} ${x2 - 50} ${y2}`}
              fill="none"
              stroke={isActiveArrow ? "hsl(45, 93%, 58%)" : "hsl(220, 14%, 30%)"}
              strokeWidth={isActiveArrow ? 3 : 1.5}
              strokeDasharray={isActiveArrow ? "0" : "6 3"}
              markerEnd={isActiveArrow ? "url(#arrowGold)" : undefined}
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            />
          );
        })}

        {/* Center "Price Mechanism" label */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <circle cx="400" cy="160" r="45" fill="hsl(220, 15%, 12%)" stroke="hsl(45, 93%, 58%)" strokeWidth="2" />
          <text x="400" y="155" textAnchor="middle" fill="hsl(45, 93%, 70%)" fontSize="11" fontWeight="600">
            PRICE
          </text>
          <text x="400" y="170" textAnchor="middle" fill="hsl(45, 93%, 70%)" fontSize="11" fontWeight="600">
            MECHANISM
          </text>
        </motion.g>

        {/* Legend */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <text x="400" y="300" textAnchor="middle" fill="hsl(220, 14%, 60%)" fontSize="10">
            The price mechanism acts as an automatic signal for resource allocation in market economies
          </text>
        </motion.g>
      </svg>

      <div className="flex justify-center gap-2 mt-3">
        {steps.map((step, index) => (
          <motion.button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`px-2 py-1 rounded text-xs transition-all ${
              activeStep === index 
                ? 'bg-primary/20 text-primary border border-primary/50' 
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Step {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PriceMechanismFlowDiagram;
