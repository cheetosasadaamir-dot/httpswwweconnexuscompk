import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface MonetaryPolicyTransmissionDiagramProps {
  title?: string;
}

const MonetaryPolicyTransmissionDiagram: React.FC<MonetaryPolicyTransmissionDiagramProps> = ({
  title = "Monetary Policy Transmission Mechanism"
}) => {
  const [policyType, setPolicyType] = useState<'expansionary' | 'contractionary'>('contractionary');
  const [activeStep, setActiveStep] = useState<number>(0);
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

    return => observer.disconnect();
  }, []);

  const expansionarySteps = [
    { id: 1, symbol: '↓r', title: 'Cut Interest Rate', desc: 'Central Bank reduces base rate (e.g., 5% → 3%)' },
    { id: 2, symbol: '↑I', title: 'Investment Rises', desc: 'Lower cost of borrowing → More projects profitable (MEC > r)' },
    { id: 3, symbol: '↑C', title: 'Consumption Rises', desc: 'Lower saving return → Consumers spend more, borrow cheaply' },
    { id: 4, symbol: '↓E/R', title: 'Currency Depreciates', desc: 'Hot money outflows → Exchange rate falls → (X-M) improves' },
    { id: 5, symbol: '→AD', title: 'AD Shifts Right', desc: 'I↑ + C↑ + (X-M)↑ = AD shifts rightward' },
    { id: 6, symbol: '↑Y,↑P', title: 'Output & Prices Rise', desc: 'Higher AD → Real GDP rises, inflation increases' },
  ];

  const contractionarySteps = [
    { id: 1, symbol: '↑r', title: 'Raise Interest Rate', desc: 'Central Bank increases base rate (e.g., 3% → 5%)' },
    { id: 2, symbol: '↓I', title: 'Investment Falls', desc: 'Higher cost of borrowing → Fewer projects profitable (MEC < r)' },
    { id: 3, symbol: '↓C', title: 'Consumption Falls', desc: 'Higher saving return → Consumers save more, borrow less' },
    { id: 4, symbol: '↑E/R', title: 'Currency Appreciates', desc: 'Hot money inflows → Exchange rate rises → (X-M) worsens' },
    { id: 5, symbol: '←AD', title: 'AD Shifts Left', desc: 'I↓ + C↓ + (X-M)↓ = AD shifts leftward' },
    { id: 6, symbol: '↓Y,↓P', title: 'Output & Prices Fall', desc: 'Lower AD → Real GDP falls, inflation decreases' },
  ];

  const steps = policyType === 'expansionary' ? expansionarySteps : contractionarySteps;

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.4, ease: "easeOut" as const }
    })
  };

  const arrowVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: { delay: i * 0.12 + 0.15, duration: 0.25 }
    })
  };

  const getStepColor = (stepId: number) => {
    const colors = [
      'hsl(180 100% 50%)', // Cyan
      'hsl(280 70% 60%)', // Purple
      'hsl(320 70% 60%)', // Magenta
      'hsl(200 80% 55%)', // Blue
      'hsl(36 100% 50%)', // Amber
      'hsl(142 76% 50%)', // Green
    ];
    return colors[stepId - 1] || 'hsl(var(--primary))';
  };

  return (
    <div ref={containerRef} className="glass-card p-5 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-serif text-lg text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            The Chain of Reasoning: Interest Rate → Investment/Consumption → AD → Macroeconomic Outcomes
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <Button
          variant={policyType === 'expansionary' ? "default" : "outline"}
          size="sm"
          onClick={() => { setPolicyType('expansionary'); setActiveStep(0); }}
        >
          Expansionary (↓r)
        </Button>
        <Button
          variant={policyType === 'contractionary' ? "default" : "outline"}
          size="sm"
          onClick={() => { setPolicyType('contractionary'); setActiveStep(0); }}
        >
          Contractionary (↑r)
        </Button>
      </div>

      {/* Transmission Flow */}
      <div className="flex flex-wrap items-center justify-center gap-1 mb-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              variants={stepVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              custom={index}
              className={`relative cursor-pointer transition-all duration-200 ${
                activeStep === step.id ? 'scale-110' : 'hover:scale-105'
              }`}
              onClick={() => setActiveStep(activeStep === step.id ? 0 : step.id)}
            >
              <div 
                className={`px-3 py-2 rounded-lg border-2 text-center min-w-[60px] ${
                  activeStep === step.id 
                    ? 'bg-card shadow-lg' 
                    : 'border-border bg-card/50 hover:border-muted-foreground'
                }`}
                style={{ 
                  borderColor: activeStep === step.id ? getStepColor(step.id) : undefined,
                  boxShadow: activeStep === step.id ? `0 0 15px ${getStepColor(step.id)}40` : undefined
                }}
              >
                <div 
                  className="text-base font-bold"
                  style={{ color: getStepColor(step.id) }}
                >
                  {step.symbol}
                </div>
                <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{step.title}</div>
              </div>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                variants={arrowVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={index}
                className="mx-1 text-muted-foreground origin-left"
              >
                <svg width="18" height="12" viewBox="0 0 18 12">
                  <path 
                    d="M0 6 L12 6 M8 2 L12 6 L8 10" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: activeStep ? 1 : 0, 
          height: activeStep ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {activeStep > 0 && (
          <div 
            className="p-4 rounded-lg border mb-4"
            style={{ 
              backgroundColor: `${getStepColor(activeStep)}10`,
              borderColor: `${getStepColor(activeStep)}40`
            }}
          >
            <h4 
              className="font-semibold text-sm mb-2"
              style={{ color: getStepColor(activeStep) }}
            >
              Step {activeStep}: {steps[activeStep - 1].title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {steps[activeStep - 1].desc}
            </p>
          </div>
        )}
      </motion.div>

      {/* Three Channels Grid */}
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-lg border" style={{ backgroundColor: 'hsl(280 70% 60% / 0.1)', borderColor: 'hsl(280 70% 60% / 0.3)' }}>
          <h5 className="text-xs font-semibold mb-1" style={{ color: 'hsl(280 70% 60%)' }}>Investment Channel</h5>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            {policyType === 'expansionary' 
              ? '↓r → MEC curve unchanged but cost of borrowing falls → More projects where MEC > r → ↑I'
              : '↑r → Cost of borrowing rises above MEC for marginal projects → ↓I'
            }
          </p>
        </div>
        <div className="p-3 rounded-lg border" style={{ backgroundColor: 'hsl(320 70% 60% / 0.1)', borderColor: 'hsl(320 70% 60% / 0.3)' }}>
          <h5 className="text-xs font-semibold mb-1" style={{ color: 'hsl(320 70% 60%)' }}>Consumption Channel</h5>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            {policyType === 'expansionary' 
              ? '↓r → Lower return on saving → Opportunity cost of spending falls → ↑C; Also: cheaper credit for durables'
              : '↑r → Higher return on saving → Opportunity cost of spending rises → ↓C; Also: dearer mortgages → ↓Wealth effect'
            }
          </p>
        </div>
        <div className="p-3 rounded-lg border" style={{ backgroundColor: 'hsl(200 80% 55% / 0.1)', borderColor: 'hsl(200 80% 55% / 0.3)' }}>
          <h5 className="text-xs font-semibold mb-1" style={{ color: 'hsl(200 80% 55%)' }}>Exchange Rate Channel</h5>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            {policyType === 'expansionary' 
              ? '↓r → "Hot money" outflows → Currency depreciates → Exports cheaper, imports dearer → ↑(X-M)'
              : '↑r → "Hot money" inflows → Currency appreciates → Exports dearer, imports cheaper → ↓(X-M)'
            }
          </p>
        </div>
      </div>

      {/* Summary Chain */}
      <div className="p-3 bg-muted/30 rounded-lg">
        <div className="text-center font-mono text-sm" style={{ color: policyType === 'expansionary' ? 'hsl(142 76% 50%)' : 'hsl(0 84% 60%)' }}>
          {policyType === 'expansionary' 
            ? '↓r → ↑I + ↑C + ↑(X-M) → →AD → ↑Y, ↑P, ↑Employment'
            : '↑r → ↓I + ↓C + ↓(X-M) → ←AD → ↓Y, ↓P, ↓Inflation'
          }
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Click each step above to see the detailed transmission logic
        </p>
      </div>

      {/* Examiner's Conclusion */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm border-l-4 border-primary">
        <p className="text-foreground/90 leading-relaxed">
          <strong className="text-primary">Senior Examiner's Conclusion:</strong> {policyType === 'contractionary' 
            ? 'Contractionary monetary policy operates through multiple channels simultaneously. A rise in interest rates increases the cost of borrowing, reducing both Investment (as fewer projects have MEC > r) and Consumption (as mortgages and credit become more expensive). The exchange rate channel reinforces this: higher rates attract "hot money" inflows, causing currency appreciation and reducing net exports. All three channels cause AD to shift leftward, reducing inflationary pressure but at the cost of lower output and higher unemployment in the short run.'
            : 'Expansionary monetary policy reverses this logic. A cut in interest rates reduces the cost of borrowing, stimulating Investment and Consumption. The exchange rate channel amplifies the effect: lower rates cause "hot money" outflows, depreciating the currency and making exports more competitive. However, the effectiveness of this policy is limited by the Liquidity Trap (at very low rates, further cuts have no effect) and by business confidence (firms may not invest even with low rates if demand is expected to remain weak).'
          }
        </p>
      </div>
    </div>
  );
};

export default MonetaryPolicyTransmissionDiagram;
