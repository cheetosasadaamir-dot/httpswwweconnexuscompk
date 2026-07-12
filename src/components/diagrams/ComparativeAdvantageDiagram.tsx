import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComparativeAdvantageDiagram = () => {
  const [showSpecialization, setShowSpecialization] = useState(false);
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

  const width = 600;
  const height = 300;
  const margin = { top: 30, right: 30, bottom: 50, left: 50 };

  // UK PPC: 20 VC or 10 DC
  // USA PPC: 10 VC or 20 DC
  const ukMaxVC = 20;
  const ukMaxDC = 10;
  const usaMaxVC = 10;
  const usaMaxDC = 20;

  // Chart dimensions for each country
  const chartWidth = (width - margin.left - margin.right - 40) / 2;
  const chartHeight = height - margin.top - margin.bottom;

  const xScaleUK = (val: number) => margin.left + (val / ukMaxDC) * chartWidth;
  const yScaleUK = (val: number) => margin.top + chartHeight - (val / ukMaxVC) * chartHeight;
  
  const xScaleUSA = (val: number) => margin.left + chartWidth + 40 + (val / usaMaxDC) * chartWidth;
  const yScaleUSA = (val: number) => margin.top + chartHeight - (val / usaMaxVC) * chartHeight;

  return (
    <div ref={containerRef} className="glass-card p-6 my-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-serif text-xl text-gradient">Comparative Advantage: UK vs USA</h3>
        <button
          onClick={() => setShowSpecialization(!showSpecialization)}
          className="px-4 py-2 text-sm rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
        >
          {showSpecialization ? "Before Trade" : "After Specialization"}
        </button>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* UK Section */}
        <g>
          {/* Axes */}
          <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
          <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
          
          {/* Labels */}
          <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Digital Cameras</text>
          <text x={15} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" transform={`rotate(-90, 15, ${margin.top + chartHeight / 2})`}>Vacuum Cleaners</text>
          <text x={margin.left + chartWidth / 2} y={20} textAnchor="middle" fill="hsl(var(--cambridge-cyan))" fontSize="14" fontWeight="bold">UK</text>

          {/* PPC Line */}
          <motion.line
            x1={xScaleUK(0)} y1={yScaleUK(ukMaxVC)}
            x2={xScaleUK(ukMaxDC)} y2={yScaleUK(0)}
            stroke="hsl(var(--cambridge-cyan))"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8 }}
          />

          {/* Before trade point */}
          {!showSpecialization && (
            <motion.circle
              cx={xScaleUK(5)}
              cy={yScaleUK(10)}
              r="6"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            />
          )}

          {/* After specialization - UK produces only VC */}
          {showSpecialization && (
            <>
              <motion.circle
                cx={xScaleUK(0)}
                cy={yScaleUK(ukMaxVC)}
                r="8"
                fill="hsl(var(--cambridge-green))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              />
              <text x={xScaleUK(0) + 10} y={yScaleUK(ukMaxVC)} fill="hsl(var(--foreground))" fontSize="10">Specializes in VC</text>
              
              {/* Trading possibility line */}
              <motion.line
                x1={xScaleUK(0)} y1={yScaleUK(ukMaxVC)}
                x2={xScaleUK(ukMaxVC)} y2={yScaleUK(0)}
                stroke="hsl(var(--cambridge-green))"
                strokeWidth="2"
                strokeDasharray="6,3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <text x={xScaleUK(12)} y={yScaleUK(8)} fill="hsl(var(--cambridge-green))" fontSize="9">With Trade</text>
            </>
          )}

          {/* Axis tick marks */}
          <text x={xScaleUK(ukMaxDC)} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">{ukMaxDC}</text>
          <text x={margin.left - 10} y={yScaleUK(ukMaxVC) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">{ukMaxVC}</text>
        </g>

        {/* USA Section */}
        <g>
          {/* Axes */}
          <line x1={margin.left + chartWidth + 40} y1={margin.top + chartHeight} x2={margin.left + 2*chartWidth + 40} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
          <line x1={margin.left + chartWidth + 40} y1={margin.top} x2={margin.left + chartWidth + 40} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
          
          {/* Labels */}
          <text x={margin.left + chartWidth + 40 + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Digital Cameras</text>
          <text x={margin.left + chartWidth + 40 + chartWidth / 2} y={20} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="14" fontWeight="bold">USA</text>

          {/* PPC Line */}
          <motion.line
            x1={xScaleUSA(0)} y1={yScaleUSA(usaMaxVC)}
            x2={xScaleUSA(usaMaxDC)} y2={yScaleUSA(0)}
            stroke="hsl(var(--cambridge-orange))"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Before trade point */}
          {!showSpecialization && (
            <motion.circle
              cx={xScaleUSA(10)}
              cy={yScaleUSA(5)}
              r="6"
              fill="hsl(var(--secondary))"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.7 }}
            />
          )}

          {/* After specialization - USA produces only DC */}
          {showSpecialization && (
            <>
              <motion.circle
                cx={xScaleUSA(usaMaxDC)}
                cy={yScaleUSA(0)}
                r="8"
                fill="hsl(var(--cambridge-green))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              />
              <text x={xScaleUSA(usaMaxDC) - 60} y={yScaleUSA(0) - 10} fill="hsl(var(--foreground))" fontSize="10">Specializes in DC</text>
              
              {/* Trading possibility line */}
              <motion.line
                x1={xScaleUSA(0)} y1={yScaleUSA(usaMaxDC)}
                x2={xScaleUSA(usaMaxDC)} y2={yScaleUSA(0)}
                stroke="hsl(var(--cambridge-green))"
                strokeWidth="2"
                strokeDasharray="6,3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <text x={xScaleUSA(8)} y={yScaleUSA(12)} fill="hsl(var(--cambridge-green))" fontSize="9">With Trade</text>
            </>
          )}

          {/* Axis tick marks */}
          <text x={xScaleUSA(usaMaxDC)} y={margin.top + chartHeight + 15} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">{usaMaxDC}</text>
          <text x={margin.left + chartWidth + 30} y={yScaleUSA(usaMaxVC) + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">{usaMaxVC}</text>
        </g>
      </svg>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm">
        {!showSpecialization ? (
          <p>
            <strong>Before trade:</strong> Each country produces both goods. UK produces 10 VC + 5 DC. 
            USA produces 5 VC + 10 DC. Total world output: 15 VC + 15 DC.
          </p>
        ) : (
          <p>
            <strong>After specialization:</strong> UK produces 20 VC, USA produces 20 DC. 
            Total world output: 20 VC + 20 DC. <span className="text-cambridge-green font-semibold">Gain of 5 VC + 5 DC!</span> 
            The green dashed line shows expanded consumption possibilities with trade.
          </p>
        )}
      </div>
    </div>
  );
};

export default ComparativeAdvantageDiagram;
