import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TradeLoopDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
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

  const width = 500;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 140;

  const nodes = [
    {
      id: 1,
      label: 'Specialization',
      angle: -90,
      color: '#22d3ee', // cyan
      description: 'Individuals, firms, and countries concentrate on what they do best.'
    },
    {
      id: 2,
      label: 'Surplus',
      angle: -18,
      color: '#a855f7', // purple
      description: 'Producers create more than they can consume themselves.'
    },
    {
      id: 3,
      label: 'Need for Exchange',
      angle: 54,
      color: '#f59e0b', // amber
      description: 'Surplus must be traded to obtain other goods and services.'
    },
    {
      id: 4,
      label: 'Barter\'s Limitations',
      angle: 126,
      color: '#ef4444', // red
      description: 'Double coincidence of wants makes direct exchange inefficient.'
    },
    {
      id: 5,
      label: 'Money Emerges',
      angle: 198,
      color: '#22c55e', // green
      description: 'Money solves barter\'s problems, facilitating efficient trade.'
    }
  ];

  const getNodePosition = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians)
    };
  };

  const createArcPath = (startAngle: number, endAngle: number) => {
    const start = getNodePosition(startAngle + 15);
    const end = getNodePosition(endAngle - 15);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  };

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
        The Trade Loop: From Specialization to Money
      </h4>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Hover over each node to understand the logical chain
      </p>

      <div className="relative flex justify-center">
        <svg width={width} height={height}>
          <defs>
            <filter id="tradeGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            {/* Arrow markers for each color */}
            {nodes.map((node, index) => {
              const nextNode = nodes[(index + 1) % nodes.length];
              return (
                <marker
                  key={`arrow-${node.id}`}
                  id={`tradeArrow-${node.id}`}
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon 
                    points="0 0, 10 3.5, 0 7" 
                    fill={nextNode.color}
                    opacity="0.8"
                  />
                </marker>
              );
            })}
          </defs>

          {/* Connecting Arcs */}
          {isVisible && nodes.map((node, index) => {
            const nextNode = nodes[(index + 1) % nodes.length];
            const startAngle = node.angle;
            const endAngle = nextNode.angle + (nextNode.angle < node.angle ? 360 : 0);
            
            return (
              <motion.path
                key={`arc-${node.id}`}
                d={createArcPath(startAngle, endAngle - (endAngle > 270 ? 360 : 0))}
                fill="none"
                stroke={nextNode.color}
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.6"
                markerEnd={`url(#tradeArrow-${node.id})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              />
            );
          })}

          {/* Center Label */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <circle
              cx={centerX}
              cy={centerY}
              r="45"
              fill="rgba(30, 41, 59, 0.8)"
              stroke="rgba(148, 163, 184, 0.3)"
              strokeWidth="2"
            />
            <text
              x={centerX}
              y={centerY - 8}
              textAnchor="middle"
              className="fill-silver-bright text-sm font-semibold"
            >
              Trade
            </text>
            <text
              x={centerX}
              y={centerY + 10}
              textAnchor="middle"
              className="fill-silver-muted text-xs"
            >
              Cycle
            </text>
          </motion.g>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const pos = getNodePosition(node.angle);
            const isActive = activeNode === node.id;
            
            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Node Circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 38 : 35}
                  fill={isActive ? node.color : `${node.color}33`}
                  stroke={node.color}
                  strokeWidth={isActive ? 3 : 2}
                  filter={isActive ? 'url(#tradeGlow)' : undefined}
                  style={{ transition: 'all 0.3s ease' }}
                />
                
                {/* Node Number */}
                <circle
                  cx={pos.x + 25}
                  cy={pos.y - 25}
                  r="12"
                  fill={node.color}
                />
                <text
                  x={pos.x + 25}
                  y={pos.y - 21}
                  textAnchor="middle"
                  className="fill-charcoal-base text-xs font-bold"
                >
                  {node.id}
                </text>

                {/* Node Label - Split into multiple lines if needed */}
                {node.label.split(' ').length > 1 ? (
                  <>
                    <text
                      x={pos.x}
                      y={pos.y - 5}
                      textAnchor="middle"
                      className={`text-xs font-medium ${isActive ? 'fill-charcoal-base' : 'fill-silver-bright'}`}
                    >
                      {node.label.split(' ').slice(0, -1).join(' ')}
                    </text>
                    <text
                      x={pos.x}
                      y={pos.y + 10}
                      textAnchor="middle"
                      className={`text-xs font-medium ${isActive ? 'fill-charcoal-base' : 'fill-silver-bright'}`}
                    >
                      {node.label.split(' ').slice(-1)[0]}
                    </text>
                  </>
                ) : (
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    className={`text-xs font-medium ${isActive ? 'fill-charcoal-base' : 'fill-silver-bright'}`}
                  >
                    {node.label}
                  </text>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Description Panel */}
      <motion.div
        initial={false}
        animate={{ 
          height: activeNode ? 'auto' : 0,
          opacity: activeNode ? 1 : 0
        }}
        className="overflow-hidden"
      >
        {activeNode && (
          <div 
            className="p-4 rounded-xl border mt-4"
            style={{ 
              backgroundColor: `${nodes.find(n => n.id === activeNode)?.color}15`,
              borderColor: `${nodes.find(n => n.id === activeNode)?.color}40`
            }}
          >
            <h5 
              className="font-semibold mb-2"
              style={{ color: nodes.find(n => n.id === activeNode)?.color }}
            >
              Step {activeNode}: {nodes.find(n => n.id === activeNode)?.label}
            </h5>
            <p className="text-sm text-muted-foreground">
              {nodes.find(n => n.id === activeNode)?.description}
            </p>
          </div>
        )}
      </motion.div>

      {/* Summary */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
        <p className="text-sm text-center text-silver-bright">
          <span className="text-cyan-400 font-semibold">Syllabus Link:</span> Specialization creates 
          <span className="text-purple-400 font-semibold"> surpluses</span> that must be exchanged. 
          <span className="text-amber-400 font-semibold"> Barter's inefficiency</span> led to the 
          emergence of <span className="text-green-400 font-semibold">money</span> as a medium of exchange.
        </p>
      </div>
    </div>
  );
};

export default TradeLoopDiagram;
