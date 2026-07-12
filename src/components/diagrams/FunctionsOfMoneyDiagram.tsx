import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Banknote, Calculator, PiggyBank, FileText } from 'lucide-react';

const FunctionsOfMoneyDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFunction, setActiveFunction] = useState<number | null>(null);
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

  const functions = [
    {
      id: 1,
      icon: Banknote,
      title: 'Medium of Exchange',
      shortTitle: 'Exchange',
      color: '#22d3ee',
      description: 'Money facilitates the exchange of goods and services, eliminating the need for a double coincidence of wants.',
      example: 'A baker can sell bread for money, then use that money to buy shoes—without finding a shoemaker who wants bread.',
      syllabus: 'Primary function that enables specialization and trade.'
    },
    {
      id: 2,
      icon: Calculator,
      title: 'Unit of Account',
      shortTitle: 'Accounting',
      color: '#a855f7',
      description: 'Money provides a common measure of value, allowing prices to be quoted and debts to be recorded.',
      example: 'All goods can be valued in the same currency (e.g., £10 for a book, £500 for a phone), making comparison easy.',
      syllabus: 'Enables rational economic calculation and price comparison.'
    },
    {
      id: 3,
      icon: PiggyBank,
      title: 'Store of Value',
      shortTitle: 'Storage',
      color: '#22c55e',
      description: 'Money can be saved and retrieved in the future while retaining its purchasing power.',
      example: 'Saving £100 today allows you to spend it next year (assuming low inflation).',
      syllabus: 'Requires price stability; inflation erodes this function.'
    },
    {
      id: 4,
      icon: FileText,
      title: 'Standard for Deferred Payment',
      shortTitle: 'Credit',
      color: '#f59e0b',
      description: 'Money enables credit transactions, allowing payment to be made at a future date.',
      example: 'Taking a mortgage to buy a house now and repaying over 25 years in fixed monetary amounts.',
      syllabus: 'Foundation of credit markets and financial contracts.'
    }
  ];

  return (
    <div ref={containerRef} className="w-full">
      <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
        The Four Functions of Money
      </h4>
      <p className="text-sm text-muted-foreground text-center mb-6">
        As per Syllabus (Page 16) – Click each function for detailed analysis
      </p>

      {/* Function Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {functions.map((func, index) => {
          const Icon = func.icon;
          const isActive = activeFunction === func.id;
          
          return (
            <motion.div
              key={func.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveFunction(isActive ? null : func.id)}
              className={`
                relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                ${isActive 
                  ? 'scale-105 shadow-lg' 
                  : 'hover:scale-102 hover:border-opacity-60'
                }
              `}
              style={{
                backgroundColor: isActive ? `${func.color}20` : `${func.color}10`,
                borderColor: isActive ? func.color : `${func.color}40`
              }}
            >
              {/* Number Badge */}
              <div 
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: func.color, color: '#0f172a' }}
              >
                {func.id}
              </div>

              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${func.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: func.color }} />
                </div>
                <h5 
                  className="text-sm font-semibold mb-1"
                  style={{ color: func.color }}
                >
                  {func.shortTitle}
                </h5>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {func.title}
                </p>
              </div>

              {/* Pulse Animation */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ borderColor: func.color }}
                  animate={{ 
                    boxShadow: [
                      `0 0 0 0 ${func.color}00`,
                      `0 0 0 4px ${func.color}30`,
                      `0 0 0 0 ${func.color}00`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Detail Panel */}
      <motion.div
        initial={false}
        animate={{ 
          height: activeFunction ? 'auto' : 0,
          opacity: activeFunction ? 1 : 0
        }}
        className="overflow-hidden"
      >
        {activeFunction && (
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {functions.filter(f => f.id === activeFunction).map(func => (
              <React.Fragment key={func.id}>
                {/* Definition */}
                <div 
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: `${func.color}10`,
                    borderColor: `${func.color}40`
                  }}
                >
                  <h5 className="font-semibold mb-2" style={{ color: func.color }}>
                    Definition
                  </h5>
                  <p className="text-sm text-muted-foreground">{func.description}</p>
                </div>

                {/* Example */}
                <div className="p-4 rounded-xl bg-slate-500/10 border border-slate-500/30">
                  <h5 className="font-semibold text-silver-bright mb-2">
                    <span className="text-cyan-400"></span> Real-World Example
                  </h5>
                  <p className="text-sm text-muted-foreground">{func.example}</p>
                </div>

                {/* Syllabus Link */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <h5 className="font-semibold text-amber-400 mb-2">
                    Syllabus Significance
                  </h5>
                  <p className="text-sm text-muted-foreground">{func.syllabus}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </motion.div>

      {/* Barter Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
      >
        <h5 className="font-semibold text-red-400 mb-2">
          Why Not Barter? — The Problem of Double Coincidence of Wants
        </h5>
        <p className="text-sm text-muted-foreground">
          In a barter system, a wheat farmer who wants shoes must find a shoemaker who 
          <strong> simultaneously</strong> wants wheat. This is highly inefficient. 
          <span className="text-cyan-400 font-semibold"> Money</span> eliminates this problem 
          by acting as a <span className="text-amber-400">universally accepted medium</span>.
        </p>
      </motion.div>

      {/* Key Insight */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/20">
        <p className="text-sm text-center text-silver-bright">
          <span className="text-amber-400 font-semibold">Examiner Tip:</span> Essays on money must 
          distinguish between these <span className="text-cyan-400">four functions</span>. The 
          <span className="text-green-400"> store of value</span> function is weakened by 
          <span className="text-red-400"> inflation</span>.
        </p>
      </div>
    </div>
  );
};

export default FunctionsOfMoneyDiagram;
