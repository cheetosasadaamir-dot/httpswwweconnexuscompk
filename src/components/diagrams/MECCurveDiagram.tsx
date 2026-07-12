import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MECCurveDiagram =  => {
 const [interestRate, setInterestRate] = useState(10);
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
 if (containerRef.current) observer.observe(containerRef.current);
 return  => observer.disconnect;
 }, []);

 const width = 400, height = 280;
 const margin = { top: 30, right: 30, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;
 
 const xScale = (val: number) => margin.left + (val / 400) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 25) * chartHeight;
 
 const investmentAtRate = 400 - interestRate * 16;

 return (
 <div ref={containerRef} className="glass-card p-6 my-6">
 <h3 className="font-serif text-xl text-gradient mb-4">Marginal Efficiency of Capital (MEC)</h3>
 <div className="mb-4">
 <label className="text-sm text-muted-foreground">Interest Rate: {interestRate}%</label>
 <input type="range" min="5" max="20" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full mt-1" />
 </div>
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
 <text x={margin.left + chartWidth / 2} y={height - 10} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Investment ($)</text>
 <text x={20} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" transform={`rotate(-90, 20, ${margin.top + chartHeight / 2})`}>Interest Rate (%)</text>
 
 <motion.line x1={xScale(0)} y1={yScale(20)} x2={xScale(320)} y2={yScale(0)} stroke="hsl(var(--cambridge-cyan))" strokeWidth="3" initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}} transition={{ duration: 0.8 }} />
 <text x={xScale(330)} y={yScale(0)} fill="hsl(var(--cambridge-cyan))" fontSize="11" fontWeight="600">MEC</text>
 
 <motion.line x1={margin.left} y1={yScale(interestRate)} x2={xScale(investmentAtRate)} y2={yScale(interestRate)} stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
 <motion.line x1={xScale(investmentAtRate)} y1={yScale(interestRate)} x2={xScale(investmentAtRate)} y2={yScale(0)} stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
 <circle cx={xScale(investmentAtRate)} cy={yScale(interestRate)} r="6" fill="hsl(var(--primary))" />
 
 <text x={margin.left - 10} y={yScale(interestRate) + 4} textAnchor="end" fill="hsl(var(--primary))" fontSize="10">{interestRate}%</text>
 <text x={xScale(investmentAtRate)} y={yScale(0) + 15} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10">${investmentAtRate}m</text>
 </svg>
 <p className="text-sm text-muted-foreground text-center mt-2">Lower interest rates → More projects viable → Higher investment</p>
 </div>
 );
};

export default MECCurveDiagram;
