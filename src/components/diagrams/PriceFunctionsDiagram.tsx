import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Animated diagram showing the three functions of price:
 * 1. Signalling - communicating information
 * 2. Incentive - motivating producers/consumers
 * 3. Rationing - allocating scarce resources
 * Exam Standard
 */
const PriceFunctionsDiagram = () => {
  const [activeFunction, setActiveFunction] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const functions = [
    {
      id: 'signalling',
      title: 'Signalling Function',
      color: 'hsl(185, 100%, 50%)',
      bgColor: 'hsla(185, 100%, 50%, 0.15)',
      borderColor: 'hsla(185, 100%, 50%, 0.4)',
      icon: '📡',
      description: 'Prices communicate information about relative scarcity',
      example: '↑ Oil Prices → Signal increased scarcity',
      mechanism: 'Rising prices signal to producers that consumers want more; falling prices signal less demand',
      svgContent: (
        <>
          {/* Central price indicator */}
          <motion.circle
            cx="200"
            cy="120"
            r="30"
            fill="hsla(185, 100%, 50%, 0.2)"
            stroke="hsl(185, 100%, 50%)"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="200" y="126" fill="hsl(185, 100%, 50%)" fontSize="18" fontWeight="600" textAnchor="middle">P↑</text>
          
          {/* Signal waves emanating */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="200"
              cy="120"
              r={40 + i * 25}
              fill="none"
              stroke="hsl(185, 100%, 50%)"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 1.4] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
          
          {/* Receivers */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {/* Producers */}
            <rect x="50" y="200" width="60" height="40" rx="5" fill="hsla(300, 100%, 60%, 0.2)" stroke="hsl(300, 100%, 60%)" strokeWidth="2" />
            <text x="80" y="224" fill="hsl(300, 100%, 60%)" fontSize="11" fontWeight="500" textAnchor="middle">Producers</text>
            
            {/* Consumers */}
            <rect x="290" y="200" width="60" height="40" rx="5" fill="hsla(45, 93%, 55%, 0.2)" stroke="hsl(45, 93%, 55%)" strokeWidth="2" />
            <text x="320" y="224" fill="hsl(45, 93%, 55%)" fontSize="11" fontWeight="500" textAnchor="middle">Consumers</text>
            
            {/* Arrow to producers */}
            <motion.path
              d="M 170 140 Q 100 170, 80 195"
              fill="none"
              stroke="hsl(185, 100%, 50%)"
              strokeWidth="2"
              strokeDasharray="4,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
            
            {/* Arrow to consumers */}
            <motion.path
              d="M 230 140 Q 300 170, 320 195"
              fill="none"
              stroke="hsl(185, 100%, 50%)"
              strokeWidth="2"
              strokeDasharray="4,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.g>
        </>
      )
    },
    {
      id: 'incentive',
      title: 'Incentive Function',
      color: 'hsl(45, 93%, 55%)',
      bgColor: 'hsla(45, 93%, 55%, 0.15)',
      borderColor: 'hsla(45, 93%, 55%, 0.4)',
      icon: '💰',
      description: 'Prices motivate producers and consumers to act',
      example: '↑ Price → Incentive to produce more',
      mechanism: 'Higher prices incentivize producers to supply more (profit motive); lower prices incentivize consumers to buy more',
      svgContent: (
        <>
          {/* Rising price box */}
          <motion.g
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <rect x="150" y="30" width="100" height="50" rx="8" fill="hsla(45, 93%, 55%, 0.2)" stroke="hsl(45, 93%, 55%)" strokeWidth="2" />
            <text x="200" y="60" fill="hsl(45, 93%, 55%)" fontSize="16" fontWeight="600" textAnchor="middle">Price ↑</text>
          </motion.g>
          
          {/* Split arrows */}
          <motion.path
            d="M 175 85 L 100 140"
            fill="none"
            stroke="hsl(45, 93%, 55%)"
            strokeWidth="2"
            markerEnd="url(#arrow-incentive)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          <motion.path
            d="M 225 85 L 300 140"
            fill="none"
            stroke="hsl(45, 93%, 55%)"
            strokeWidth="2"
            markerEnd="url(#arrow-incentive)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          
          {/* Producer incentive */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <rect x="40" y="145" width="120" height="70" rx="8" fill="hsla(145, 70%, 50%, 0.15)" stroke="hsl(145, 70%, 50%)" strokeWidth="2" />
            <text x="100" y="170" fill="hsl(145, 70%, 50%)" fontSize="12" fontWeight="600" textAnchor="middle">PRODUCERS</text>
            <text x="100" y="190" fill="hsl(145, 70%, 50%)" fontSize="11" textAnchor="middle">Incentive to</text>
            <text x="100" y="205" fill="hsl(145, 70%, 50%)" fontSize="11" fontWeight="600" textAnchor="middle">SUPPLY MORE</text>
          </motion.g>
          
          {/* Consumer incentive */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <rect x="240" y="145" width="120" height="70" rx="8" fill="hsla(0, 80%, 55%, 0.15)" stroke="hsl(0, 80%, 55%)" strokeWidth="2" />
            <text x="300" y="170" fill="hsl(0, 80%, 55%)" fontSize="12" fontWeight="600" textAnchor="middle">CONSUMERS</text>
            <text x="300" y="190" fill="hsl(0, 80%, 55%)" fontSize="11" textAnchor="middle">Incentive to</text>
            <text x="300" y="205" fill="hsl(0, 80%, 55%)" fontSize="11" fontWeight="600" textAnchor="middle">DEMAND LESS</text>
          </motion.g>
          
          <defs>
            <marker id="arrow-incentive" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="hsl(45, 93%, 55%)" />
            </marker>
          </defs>
        </>
      )
    },
    {
      id: 'rationing',
      title: 'Rationing Function',
      color: 'hsl(300, 100%, 60%)',
      bgColor: 'hsla(300, 100%, 60%, 0.15)',
      borderColor: 'hsla(300, 100%, 60%, 0.4)',
      icon: '⚖️',
      description: 'Prices allocate scarce resources to those willing and able to pay',
      example: 'Limited concert tickets → High price rations access',
      mechanism: 'Price determines "for whom" goods are produced - those with greater willingness and ability to pay',
      svgContent: (
        <>
          {/* Scarce resource */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <rect x="160" y="20" width="80" height="45" rx="8" fill="hsla(300, 100%, 60%, 0.2)" stroke="hsl(300, 100%, 60%)" strokeWidth="2" />
            <text x="200" y="38" fill="hsl(300, 100%, 60%)" fontSize="10" fontWeight="500" textAnchor="middle">Scarce</text>
            <text x="200" y="52" fill="hsl(300, 100%, 60%)" fontSize="10" fontWeight="500" textAnchor="middle">Resource</text>
          </motion.g>
          
          {/* Price filter */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <rect x="145" y="85" width="110" height="35" rx="5" fill="hsla(45, 93%, 55%, 0.3)" stroke="hsl(45, 93%, 55%)" strokeWidth="2" />
            <text x="200" y="107" fill="hsl(45, 93%, 55%)" fontSize="14" fontWeight="600" textAnchor="middle">PRICE = £100</text>
          </motion.g>
          
          {/* Multiple consumers */}
          {[
            { x: 60, y: 160, canPay: false, label: '£50' },
            { x: 140, y: 160, canPay: true, label: '£120' },
            { x: 220, y: 160, canPay: true, label: '£150' },
            { x: 300, y: 160, canPay: false, label: '£80' },
          ].map((consumer, i) => (
            <motion.g
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <circle 
                cx={consumer.x + 20} 
                cy={consumer.y + 15} 
                r="20" 
                fill={consumer.canPay ? 'hsla(145, 70%, 50%, 0.2)' : 'hsla(0, 80%, 55%, 0.2)'} 
                stroke={consumer.canPay ? 'hsl(145, 70%, 50%)' : 'hsl(0, 80%, 55%)'} 
                strokeWidth="2" 
              />
              <text 
                x={consumer.x + 20} 
                y={consumer.y + 20} 
                fill={consumer.canPay ? 'hsl(145, 70%, 50%)' : 'hsl(0, 80%, 55%)'} 
                fontSize="10" 
                fontWeight="600" 
                textAnchor="middle"
              >
                {consumer.label}
              </text>
              
              {/* Check or X */}
              <text 
                x={consumer.x + 20} 
                y={consumer.y + 55} 
                fill={consumer.canPay ? 'hsl(145, 70%, 50%)' : 'hsl(0, 80%, 55%)'} 
                fontSize="16" 
                textAnchor="middle"
              >
                {consumer.canPay ? '✓' : '✗'}
              </text>
            </motion.g>
          ))}
          
          {/* Result text */}
          <motion.text
            x="200"
            y="230"
            fill="hsl(300, 100%, 60%)"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Price allocates to those willing & able to pay
          </motion.text>
        </>
      )
    }
  ];

  // Auto-cycle through functions
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveFunction((prev) => (prev + 1) % functions.length);
    }, 5000);
    
    return => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentFunction = functions[activeFunction];

  return (
    <div className="w-full">
      <h4 className="text-center text-silver-bright font-serif text-lg mb-4">
        The Three Functions of the Price Mechanism
      </h4>
      
      {/* Function selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {functions.map((func, index) => (
          <button
            key={func.id}
            onClick={() => {
              setActiveFunction(index);
              setIsAutoPlaying(false);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeFunction === index 
                ? 'text-white' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            style={{
              backgroundColor: activeFunction === index ? func.color : 'hsla(220, 14%, 20%, 0.5)',
              borderWidth: '1px',
              borderColor: activeFunction === index ? func.color : 'hsla(220, 14%, 40%, 0.5)',
            }}
          >
            <span>{func.icon}</span>
            {func.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFunction.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl p-6"
          style={{
            backgroundColor: currentFunction.bgColor,
            borderWidth: '1px',
            borderColor: currentFunction.borderColor,
          }}
        >
          <div className="text-center mb-4">
            <h5 className="text-xl font-semibold mb-2" style={{ color: currentFunction.color }}>
              {currentFunction.icon} {currentFunction.title}
            </h5>
            <p className="text-muted-foreground">{currentFunction.description}</p>
          </div>

          {/* SVG Animation */}
          <svg viewBox="0 0 400 250" className="w-full max-w-md mx-auto mb-4">
            {currentFunction.svgContent}
          </svg>

          {/* Example and mechanism */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'hsla(220, 14%, 10%, 0.5)' }}>
              <h6 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: currentFunction.color }}>
                Real-World Example
              </h6>
              <p className="text-sm text-muted-foreground">{currentFunction.example}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'hsla(220, 14%, 10%, 0.5)' }}>
              <h6 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: currentFunction.color }}>
                How It Works
              </h6>
              <p className="text-sm text-muted-foreground">{currentFunction.mechanism}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {functions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveFunction(index);
              setIsAutoPlaying(false);
            }}
            className="relative w-8 h-1.5 rounded-full overflow-hidden transition-all"
            style={{ backgroundColor: 'hsla(220, 14%, 30%, 0.5)' }}
          >
            {activeFunction === index && isAutoPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: functions[index].color }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            )}
            {activeFunction === index && !isAutoPlaying && (
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: functions[index].color }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceFunctionsDiagram;
