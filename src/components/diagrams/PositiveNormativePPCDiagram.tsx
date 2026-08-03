import { useState } from 'react';
import { motion } from 'framer-motion';

const PositiveNormativePPCDiagram = () => {
  const [selectedPoint, setSelectedPoint] = useState<'A' | 'B' | 'C' | null>(null);

  const points = {
    A: { x: 80, y: 200, label: 'Point A', description: 'More Consumer Goods', color: '#22d3ee' },
    B: { x: 180, y: 120, label: 'Point B', description: 'Balanced Production', color: '#a855f7' },
    C: { x: 250, y: 70, label: 'Point C', description: 'More Merit Goods', color: '#d4af37' }
  };

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6">
        {/* SVG Diagram */}
        <div className="relative">
          <svg viewBox="0 0 320 280" className="w-full h-auto">
            <defs>
              <linearGradient id="ppcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow-PositiveNormativePPCDiagram">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {[50, 100, 150, 200].map((y) => (
              <line
                key={`h-${y}`}
                x1="40"
                y1={y}
                x2="290"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="2,4"
              />
            ))}
            {[90, 140, 190, 240].map((x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="40"
                x2={x}
                y2="240"
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="2,4"
              />
            ))}

            {/* Axes */}
            <line x1="40" y1="240" x2="290" y2="240" stroke="#d1d5db" strokeWidth="2" />
            <line x1="40" y1="240" x2="40" y2="40" stroke="#d1d5db" strokeWidth="2" />

            {/* Axis labels */}
            <text x="165" y="270" fill="#d1d5db" fontSize="11" textAnchor="middle" fontWeight="600">
              Merit Goods (Education, Healthcare)
            </text>
            <text
              x="20"
              y="140"
              fill="#d1d5db"
              fontSize="11"
              textAnchor="middle"
              fontWeight="600"
              transform="rotate(-90, 20, 140)"
            >
              Consumer Goods
            </text>

            {/* PPC Curve fill */}
            <path
              d="M 40 40 Q 60 80, 80 200 Q 140 100, 180 120 Q 230 50, 280 240 L 40 240 Z"
              fill="url(#ppcGradient)"
            />

            {/* PPC Curve */}
            <motion.path
              d="M 40 40 Q 60 80, 80 200 Q 140 100, 180 120 Q 230 50, 280 240"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              filter="url(#glow-PositiveNormativePPCDiagram)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Interactive Points */}
            {Object.entries(points).map(([key, point]) => (
              <g key={key}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={selectedPoint === key ? 12 : 8}
                  fill={point.color}
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setSelectedPoint(key as 'A' | 'B' | 'C')}
                  filter="url(#glow-PositiveNormativePPCDiagram)"
                />
                <text
                  x={point.x + 15}
                  y={point.y + 5}
                  fill={point.color}
                  fontSize="12"
                  fontWeight="bold"
                >
                  {key}
                </text>
              </g>
            ))}

            {/* Title */}
            <text x="165" y="25" fill="#f5f5f5" fontSize="12" textAnchor="middle" fontWeight="bold">
              Production Possibility Curve: The Normative Choice
            </text>
          </svg>
        </div>

        {/* Explanation Panel */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-charcoal-deep/50 border border-silver/10">
            <h5 className="text-sm font-bold text-silver-bright mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              The Positive Fact
            </h5>
            <p className="text-sm text-muted-foreground">
              <strong className="text-cyan-400">Where an economy is currently producing</strong> on the PPC is 
              a <strong>positive fact</strong>—it can be measured and verified using economic data such as 
              GDP composition, output statistics, and resource utilization rates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-deep/50 border border-silver/10">
            <h5 className="text-sm font-bold text-silver-bright mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              The Normative Choice
            </h5>
            <p className="text-sm text-muted-foreground">
              Deciding <strong className="text-amber-400">which point on the curve is "best"</strong> for society 
              is a <strong>normative judgment</strong>. Different political and ethical values lead to different 
              answers about the optimal allocation of resources.
            </p>
          </div>

          {/* Selected Point Details */}
          {selectedPoint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl border"
              style={{ 
                backgroundColor: `${points[selectedPoint].color}15`,
                borderColor: `${points[selectedPoint].color}40`
              }}
            >
              <h6 
                className="font-bold mb-2"
                style={{ color: points[selectedPoint].color }}
              >
                {points[selectedPoint].label}: {points[selectedPoint].description}
              </h6>
              <p className="text-sm text-muted-foreground">
                {selectedPoint === 'A' && 
                  "A market-oriented economy might favor this point—prioritizing consumer sovereignty and private goods production. This reflects a value judgment that individual choice should determine resource allocation."}
                {selectedPoint === 'B' && 
                  "A mixed economy might aim for balance—combining market efficiency with social provision. This reflects a normative view that both individual freedom and collective welfare matter."}
                {selectedPoint === 'C' && 
                  "A socially-oriented economy might prefer this point—emphasizing education, healthcare, and public services. This reflects a value judgment that equity and merit goods should be prioritized."}
              </p>
            </motion.div>
          )}

          {!selectedPoint && (
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
              <p className="text-sm text-purple-300">
                👆 Click on a point to see the normative implications
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PositiveNormativePPCDiagram;
