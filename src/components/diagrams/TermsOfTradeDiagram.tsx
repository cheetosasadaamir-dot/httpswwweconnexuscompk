import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsOfTradeDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [totValue, setTotValue] = useState(100);
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

  const width = 700;
  const height = 350;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Generate TOT line data over time
  const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
  const totData = [98, 100, 95, 102, 108, 105, totValue];

  const xScale = (i: number) => margin.left + (i / (years.length - 1)) * chartWidth;
  const yScale = (val: number) => margin.top + chartHeight - ((val - 80) / 40) * chartHeight;

  const linePath = totData.map((val, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`
  ).join(' ');

  const getTotStatus = (value: number) => {
    if (value > 100) return { status: 'Favorable', color: 'hsl(var(--primary))', description: 'Export prices rising relative to import prices. More imports can be purchased per unit of exports.' };
    if (value < 100) return { status: 'Unfavorable', color: 'hsl(var(--destructive))', description: 'Export prices falling relative to import prices. Fewer imports can be purchased per unit of exports.' };
    return { status: 'Balanced', color: 'hsl(var(--muted-foreground))', description: 'Export and import prices are changing at the same rate.' };
  };

  const totStatus = getTotStatus(totValue);

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="my-8 p-6 bg-card rounded-xl border border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-serif text-xl font-semibold">Terms of Trade Index</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Current TOT: </span>
          <span className="text-lg font-bold" style={{ color: totStatus.color }}>{totValue}</span>
        </div>
      </div>

      {/* Formula Display */}
      <div className="mb-6 p-4 bg-muted/30 rounded-lg text-center">
        <p className="font-mono text-lg">
          TOT = <span className="text-primary">(Export Price Index / Import Price Index)</span> × 100
        </p>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines */}
        {[80, 90, 100, 110, 120].map(val => (
          <g key={val}>
            <line
              x1={margin.left}
              y1={yScale(val)}
              x2={width - margin.right}
              y2={yScale(val)}
              stroke="hsl(var(--muted))"
              strokeWidth="1"
              strokeDasharray={val === 100 ? "0" : "4,4"}
              strokeOpacity={val === 100 ? 0.8 : 0.3}
            />
            <text
              x={margin.left - 10}
              y={yScale(val) + 4}
              textAnchor="end"
              className="fill-muted-foreground text-xs"
            >
              {val}
            </text>
          </g>
        ))}

        {/* Base line at 100 */}
        <line
          x1={margin.left}
          y1={yScale(100)}
          x2={width - margin.right}
          y2={yScale(100)}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2"
        />
        <text
          x={width - margin.right + 5}
          y={yScale(100) + 4}
          textAnchor="start"
          className="fill-muted-foreground text-xs"
        >
          Base = 100
        </text>

        {/* X-axis labels */}
        {years.map((year, i) => (
          <text
            key={year}
            x={xScale(i)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            {year}
          </text>
        ))}

        {/* Axes */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
        />
        <line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
        />

        {/* Axis labels */}
        <text
          x={margin.left - 45}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90, ${margin.left - 45}, ${height / 2})`}
          className="fill-foreground text-sm font-medium"
        >
          TOT Index
        </text>
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          className="fill-foreground text-sm font-medium"
        >
          Year
        </text>

        {/* TOT Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          variants={curveVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />

        {/* Data points */}
        {totData.map((val, i) => (
          <motion.circle
            key={i}
            cx={xScale(i)}
            cy={yScale(val)}
            r={6}
            fill={val > 100 ? 'hsl(var(--primary))' : val < 100 ? 'hsl(var(--destructive))' : 'hsl(var(--muted-foreground))'}
            stroke="hsl(var(--background))"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Shaded regions */}
        <rect
          x={margin.left}
          y={margin.top}
          width={chartWidth}
          height={yScale(100) - margin.top}
          fill="hsl(var(--primary))"
          fillOpacity="0.05"
        />
        <rect
          x={margin.left}
          y={yScale(100)}
          width={chartWidth}
          height={height - margin.bottom - yScale(100)}
          fill="hsl(var(--destructive))"
          fillOpacity="0.05"
        />

        {/* Region labels */}
        <text x={margin.left + 10} y={margin.top + 20} className="fill-primary text-xs font-medium">
          FAVORABLE (TOT {">"} 100)
        </text>
        <text x={margin.left + 10} y={height - margin.bottom - 10} className="fill-destructive text-xs font-medium">
          UNFAVORABLE (TOT {"<"} 100)
        </text>
      </svg>

      {/* Interactive Slider */}
      <div className="mt-6 p-4 bg-muted/20 rounded-lg">
        <label className="text-sm font-medium mb-2 block">
          Adjust 2024 Terms of Trade: <span style={{ color: totStatus.color }} className="font-bold">{totValue}</span>
        </label>
        <input
          type="range"
          min="80"
          max="120"
          value={totValue}
          onChange={(e) => setTotValue(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>80 (Unfavorable)</span>
          <span>100 (Balanced)</span>
          <span>120 (Favorable)</span>
        </div>
      </div>

      {/* Status explanation */}
      <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: `${totStatus.color}20` }}>
        <h4 className="font-semibold mb-1" style={{ color: totStatus.color }}>
          {totStatus.status} Terms of Trade
        </h4>
        <p className="text-sm">{totStatus.description}</p>
      </div>

      {/* Types of TOT changes */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-primary/10 rounded-lg">
          <h5 className="font-semibold text-primary mb-2">Improvement (↑TOT)</h5>
          <ul className="text-xs space-y-1">
            <li>• Export prices rise faster than import prices</li>
            <li>• Fewer exports needed to buy same imports</li>
            <li>• Real income gain for the country</li>
          </ul>
        </div>
        <div className="p-4 bg-destructive/10 rounded-lg">
          <h5 className="font-semibold text-destructive mb-2">Deterioration (↓TOT)</h5>
          <ul className="text-xs space-y-1">
            <li>• Import prices rise faster than export prices</li>
            <li>• More exports needed to buy same imports</li>
            <li>• Real income loss for the country</li>
          </ul>
        </div>
        <div className="p-4 bg-muted/30 rounded-lg">
          <h5 className="font-semibold mb-2">Causes of Change</h5>
          <ul className="text-xs space-y-1">
            <li>• Exchange rate movements</li>
            <li>• World commodity prices</li>
            <li>• Relative inflation rates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfTradeDiagram;
