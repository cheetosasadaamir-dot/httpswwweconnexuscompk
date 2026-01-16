import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ThreeQuestionsComparisonDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const questions = [
    {
      id: 'what',
      question: 'What to Produce?',
      color: 'hsl(190, 95%, 50%)',
      market: {
        answer: 'Consumer Sovereignty',
        detail: 'Consumers determine production through demand signals'
      },
      planned: {
        answer: 'State Mandates',
        detail: 'Central planners decide based on social priorities'
      },
      mixed: {
        answer: 'Both Forces',
        detail: 'Markets for most goods; gov\'t provides public/merit goods'
      }
    },
    {
      id: 'how',
      question: 'How to Produce?',
      color: 'hsl(45, 93%, 58%)',
      market: {
        answer: 'Profit Maximization',
        detail: 'Firms choose lowest cost methods to maximize profit'
      },
      planned: {
        answer: 'Social Objectives',
        detail: 'Methods chosen for employment or equity goals'
      },
      mixed: {
        answer: 'Regulated Efficiency',
        detail: 'Profit motive with regulations for safety/environment'
      }
    },
    {
      id: 'whom',
      question: 'For Whom to Produce?',
      color: 'hsl(142, 69%, 58%)',
      market: {
        answer: 'Purchasing Power',
        detail: 'Those with willingness and ability to pay'
      },
      planned: {
        answer: 'Equitable Distribution',
        detail: 'Resources distributed based on perceived need'
      },
      mixed: {
        answer: 'Market + Welfare',
        detail: 'Market distribution with safety nets and transfers'
      }
    }
  ];

  const systems = [
    { id: 'market', label: 'Market Economy', color: 'hsl(217, 91%, 60%)' },
    { id: 'planned', label: 'Planned Economy', color: 'hsl(0, 84%, 60%)' },
    { id: 'mixed', label: 'Mixed Economy', color: 'hsl(142, 69%, 58%)' }
  ];

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <h4 className="text-center text-sm font-semibold text-silver-bright mb-4">
        How Different Systems Answer the Three Basic Economic Questions
      </h4>
      
      <div className="min-w-[600px]">
        {/* Header row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="p-2"></div>
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 rounded-lg text-center"
              style={{ 
                backgroundColor: `${system.color}15`,
                borderLeft: `3px solid ${system.color}`
              }}
            >
              <span 
                className="text-xs font-semibold"
                style={{ color: system.color }}
              >
                {system.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Question rows */}
        {questions.map((q, qIndex) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3 + qIndex * 0.15 }}
            className="grid grid-cols-4 gap-2 mb-2"
          >
            {/* Question cell */}
            <div 
              className="p-3 rounded-lg flex items-center justify-center"
              style={{ 
                backgroundColor: `${q.color}15`,
                borderLeft: `3px solid ${q.color}`
              }}
            >
              <span 
                className="text-xs font-semibold text-center"
                style={{ color: q.color }}
              >
                {q.question}
              </span>
            </div>

            {/* Answer cells */}
            {(['market', 'planned', 'mixed'] as const).map((system, sIndex) => (
              <motion.div
                key={`${q.id}-${system}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.5 + qIndex * 0.1 + sIndex * 0.05 }}
                className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-default"
              >
                <p 
                  className="text-xs font-medium mb-1"
                  style={{ color: systems.find(s => s.id === system)?.color }}
                >
                  {q[system].answer}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight group-hover:text-foreground/70 transition-colors">
                  {q[system].detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2 }}
          className="mt-4 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-blue-500/10 border border-primary/20"
        >
          <p className="text-xs text-center text-muted-foreground">
            <span className="text-cyan-400 font-medium">Key Insight:</span> Most real-world economies are <span className="text-green-400 font-medium">Mixed Economies</span> that 
            use market forces for efficiency while government intervention corrects market failures and provides public goods.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeQuestionsComparisonDiagram;
