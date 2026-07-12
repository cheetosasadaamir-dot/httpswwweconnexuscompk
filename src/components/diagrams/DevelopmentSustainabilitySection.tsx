import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { useRef, useState, useEffect } from 'react';

/**
 * Socio-Economic & Sustainability Expansion
 * A2 Syllabus Compliant
 * [A2 Specialist - Development & Sustainability]
 */
const DevelopmentSustainabilitySection =  => {
 return (
 <div className="space-y-8">
 {/* Section Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="glass-card p-6 border-l-4 border-cambridge-green"
 >
 <div className="flex items-center gap-3 mb-3">
 <span className="px-3 py-1 bg-cambridge-green/20 text-cambridge-green text-xs font-mono rounded-full">
 A2 SPECIALIST
 </span>
 <span className="text-xs text-muted-foreground">Development & Sustainability</span>
 </div>
 <h3 className="font-serif text-2xl text-silver-bright mb-2">
 Socio-Economic & Sustainability Framework
 </h3>
 <p className="text-muted-foreground text-sm">
 This section provides syllabus-aligned distinctions between growth, development, 
 and sustainability, along with stakeholder impact analysis and environmental evaluation.
 </p>
 </motion.div>

 {/* Core Distinctions: Growth vs Development vs Sustainability */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-cyan/20 flex items-center justify-center text-cambridge-cyan font-mono text-sm">1</span>
 Core Distinctions: Growth, Development & Sustainability
 </h4>
 
 <div className="grid md:grid-cols-3 gap-4 mb-6">
 {/* Economic Growth */}
 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
 <h5 className="font-semibold text-cambridge-cyan text-sm mb-2">
 Economic Growth
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 <strong>Definition:</strong> The increase in a country's <strong>real national output</strong>. 
 Caused by increases in the <em>quality or quantity</em> of factors of production.
 </p>
 <div className="p-2 bg-muted/30 rounded text-center mb-2">
 <span className="text-xs font-mono text-primary">
 Outward shift in PPF
 </span>
 </div>
 <p className="text-xs text-muted-foreground italic">
 <strong>Nature:</strong> Quantitative measure (% change in real GDP)
 </p>
 </div>

 {/* Economic Development */}
 <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/30">
 <h5 className="font-semibold text-cambridge-magenta text-sm mb-2">
 Economic Development
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 <strong>Definition:</strong> Refers to <strong>living standards</strong>, 
 <strong> freedom from oppression</strong>, and <strong>life expectancy</strong>. 
 Covers a more <em>normative</em> dimension of economic progress.
 </p>
 <div className="p-2 bg-muted/30 rounded text-center mb-2">
 <span className="text-xs font-mono text-primary">
 HDI, Capabilities Approach
 </span>
 </div>
 <p className="text-xs text-muted-foreground italic">
 <strong>Nature:</strong> Qualitative & multidimensional
 </p>
 </div>

 {/* Sustainability */}
 <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
 <h5 className="font-semibold text-cambridge-green text-sm mb-2">
 Sustainability
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 <strong>Definition:</strong> Resources (e.g., the environment) must be used 
 <strong> effectively and efficiently</strong> so they can be 
 <strong> maintained for future generations</strong>.
 </p>
 <div className="p-2 bg-muted/30 rounded text-center mb-2">
 <span className="text-xs font-mono text-primary">
 Intergenerational equity
 </span>
 </div>
 <p className="text-xs text-muted-foreground italic">
 <strong>Nature:</strong> Long-term resource stewardship
 </p>
 </div>
 </div>

 {/* Key Distinction Box */}
 <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
 <p className="text-xs font-semibold text-amber-400 mb-1">📌 CIE Examiner Focus:</p>
 <p className="text-xs text-muted-foreground">
 <strong>Growth ≠ Development:</strong> A country can experience high GDP growth (quantitative) 
 without improvements in HDI, inequality reduction, or institutional quality (qualitative). 
 <em> Example: Resource-rich nations with elite capture of revenues.</em>
 </p>
 </div>
 </motion.div>

 {/* Sustainable vs Unsustainable Growth */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-orange/20 flex items-center justify-center text-cambridge-orange font-mono text-sm">2</span>
 Sustainable Growth vs "Boom and Bust" Dynamics
 </h4>

 <div className="grid md:grid-cols-2 gap-4 mb-6">
 {/* Sustainable Growth */}
 <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
 <h5 className="font-semibold text-cambridge-green text-sm mb-2">
 Sustainable Growth
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 Growth that can be <strong>maintained in the long run</strong>, ensuring future 
 generations can enjoy the same rate of growth.
 </p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Growth aligned with trend rate</li>
 <li>• Natural resource preservation</li>
 <li>• Stable inflation & employment</li>
 <li>• Balanced savings/consumption</li>
 </ul>
 </div>

 {/* Unsustainable Growth */}
 <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
 <h5 className="font-semibold text-destructive text-sm mb-2">
 Unsustainable Growth (Boom & Bust)
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 Deviations from the <strong>trend rate of growth</strong> leading to cyclical 
 instability.
 </p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• <strong>Excessive growth:</strong> Demand-pull inflation</li>
 <li>• Wage and asset price inflation</li>
 <li>• Excessive credit expansion</li>
 <li>• Low and falling savings rate</li>
 </ul>
 </div>
 </div>

 {/* Trade-off Box */}
 <div className="p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/30 mb-6">
 <h5 className="font-semibold text-cambridge-orange text-sm mb-2">
 The Sustainability Trade-Off
 </h5>
 <p className="text-xs text-muted-foreground">
 <strong>Fast growth today</strong> may <strong>deplete natural resources</strong> (e.g., oil, 
 forests), creating <strong>environmental problems for future generations</strong> and 
 weakening the future rate of growth. This represents an 
 <strong> intergenerational equity problem</strong>.
 </p>
 </div>

 {/* Business Cycle Diagram */}
 <BusinessCycleDiagramSVG />
 </motion.div>

 {/* Actual vs Potential Growth */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-cyan/20 flex items-center justify-center text-cambridge-cyan font-mono text-sm">3</span>
 Actual vs Potential Growth & Output Gaps
 </h4>

 <div className="grid md:grid-cols-2 gap-4 mb-6">
 {/* Short-Run Growth */}
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-primary text-sm mb-2">
 Short-Run Growth
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 Percentage increase in a country's <strong>real GDP</strong>, usually measured annually.
 </p>
 <div className="p-2 bg-primary/10 rounded text-center">
 <span className="text-xs font-mono">
 Caused by increases in <InlineMath>{'AD'}</InlineMath>
 </span>
 </div>
 </div>

 {/* Long-Run Growth */}
 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
 <h5 className="font-semibold text-cambridge-cyan text-sm mb-2">
 Long-Run Growth
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 Increase in the <strong>productive capacity</strong> of the economy—the 
 <strong> trend rate of growth</strong> over time.
 </p>
 <div className="p-2 bg-primary/10 rounded text-center">
 <span className="text-xs font-mono">
 Caused by increases in <InlineMath>{'AS'}</InlineMath> (PPF outward shift)
 </span>
 </div>
 </div>
 </div>

 {/* Output Gaps */}
 <div className="grid md:grid-cols-2 gap-4">
 {/* Negative Output Gap */}
 <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/30">
 <h5 className="font-semibold text-cambridge-magenta text-sm mb-2">
 Negative Output Gap
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 Actual output <strong>&lt;</strong> Potential output
 </p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Downward pressure on inflation</li>
 <li>• Unemployment of resources (labour, capital)</li>
 <li>• Spare capacity in the economy</li>
 </ul>
 <div className="mt-2 p-2 bg-muted/30 rounded text-center">
 <span className="text-xs font-mono text-cambridge-magenta">
 <InlineMath>{'Y_{actual} < Y_{potential}'}</InlineMath>
 </span>
 </div>
 </div>

 {/* Positive Output Gap */}
 <div className="p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/30">
 <h5 className="font-semibold text-cambridge-orange text-sm mb-2">
 Positive Output Gap
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 Actual output <strong>&gt;</strong> Potential output
 </p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Resources used beyond normal capacity (overtime)</li>
 <li>• Upward pressure on inflation</li>
 <li>• Associated with fast-growing economies (China, India)</li>
 </ul>
 <div className="mt-2 p-2 bg-muted/30 rounded text-center">
 <span className="text-xs font-mono text-cambridge-orange">
 <InlineMath>{'Y_{actual} > Y_{potential}'}</InlineMath>
 </span>
 </div>
 </div>
 </div>
 </motion.div>

 {/* Stakeholder Impact Analysis */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.4 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-magenta/20 flex items-center justify-center text-cambridge-magenta font-mono text-sm">4</span>
 Impact of Economic Growth on Stakeholders
 </h4>

 {/* Consumers */}
 <div className="mb-4 p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
 <h5 className="font-semibold text-cambridge-cyan mb-3">Consumers</h5>
 <div className="grid md:grid-cols-2 gap-4">
 <div>
 <p className="text-xs font-semibold text-cambridge-green mb-1">✓ Benefits</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Higher average wages (more employment, rising wages)</li>
 <li>• Increased confidence → higher consumption</li>
 <li>• Better quality goods and services</li>
 <li>• Higher living standards</li>
 </ul>
 </div>
 <div>
 <p className="text-xs font-semibold text-destructive mb-1">✗ Costs</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Growth benefits distributed unequally</li>
 <li>• Fixed/low incomes hurt by inflation</li>
 <li>• Higher demand-pull inflation</li>
 <li>• "Shoe leather costs" from price comparison</li>
 <li>• Diminishing marginal utility of consumption</li>
 <li>• Potential increase in demerit goods consumption</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Firms */}
 <div className="mb-4 p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/30">
 <h5 className="font-semibold text-cambridge-magenta mb-3">Firms</h5>
 <div className="grid md:grid-cols-2 gap-4">
 <div>
 <p className="text-xs font-semibold text-cambridge-green mb-1">✓ Benefits</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Higher profits → increased investment</li>
 <li>• Higher business confidence</li>
 <li>• New technology development</li>
 <li>• Lower average costs (economies of scale)</li>
 <li>• More sales opportunities (export markets)</li>
 </ul>
 </div>
 <div>
 <p className="text-xs font-semibold text-destructive mb-1">✗ Costs</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• "Menu costs" from changing prices (inflation)</li>
 <li>• Increased competition in export markets</li>
 <li>• Pressure to improve productivity/efficiency</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Government */}
 <div className="mb-4 p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
 <h5 className="font-semibold text-cambridge-green mb-3">Government</h5>
 <div className="grid md:grid-cols-2 gap-4">
 <div>
 <p className="text-xs font-semibold text-cambridge-green mb-1">✓ Benefits</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Higher tax revenues (income & indirect)</li>
 <li>• Lower welfare spending (fewer claimants)</li>
 <li>• Improved budget position</li>
 <li>• Ability to fund public services</li>
 </ul>
 </div>
 <div>
 <p className="text-xs font-semibold text-destructive mb-1">✗ Costs</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• May need to increase healthcare spending</li>
 <li>• If demerit goods consumption rises</li>
 <li>• Environmental externality management</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Living Standards Summary */}
 <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
 <h5 className="font-semibold text-amber-400 text-sm mb-2">
 Current vs Future Living Standards
 </h5>
 <div className="grid md:grid-cols-2 gap-4">
 <div>
 <p className="text-xs font-semibold text-primary mb-1">Current Benefits:</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Higher wages → more & better goods/services</li>
 <li>• Improved public services (health, education)</li>
 <li>• Increased life expectancy & education levels</li>
 </ul>
 </div>
 <div>
 <p className="text-xs font-semibold text-destructive mb-1">Future Risks:</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Environmental damage (negative externalities)</li>
 <li>• Resource depletion</li>
 <li>• Climate change costs on future generations</li>
 </ul>
 </div>
 </div>
 </div>
 </motion.div>

 {/* Environmental Kuznets Curve */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.5 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-sm">5</span>
 Environmental Evaluation: The Environmental Kuznets Curve
 </h4>

 <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30 mb-6">
 <h5 className="font-semibold text-cambridge-green mb-2">
 The Environmental Kuznets Curve (EKC) Hypothesis
 </h5>
 <p className="text-sm text-muted-foreground mb-3">
 Similar to the income inequality Kuznets Curve, the EKC proposes an 
 <strong> inverted-U relationship</strong> between economic growth and environmental degradation.
 </p>
 
 <div className="grid md:grid-cols-3 gap-3">
 <div className="p-3 bg-muted/30 rounded">
 <p className="text-xs font-semibold text-cambridge-orange mb-1">Stage I: Rising Damage</p>
 <p className="text-xs text-muted-foreground">
 Early industrialisation → Prioritise growth over environment → 
 Negative externalities increase (pollution, deforestation)
 </p>
 </div>
 <div className="p-3 bg-muted/30 rounded">
 <p className="text-xs font-semibold text-amber-400 mb-1">Stage II: Peak</p>
 <p className="text-xs text-muted-foreground">
 Middle-income level → Environmental damage reaches maximum → 
 Public awareness begins rising
 </p>
 </div>
 <div className="p-3 bg-muted/30 rounded">
 <p className="text-xs font-semibold text-cambridge-green mb-1">Stage III: Improvement</p>
 <p className="text-xs text-muted-foreground">
 Higher incomes → Greater environmental concern → 
 "Green" technology development → Damage declines
 </p>
 </div>
 </div>
 </div>

 {/* EKC Diagram */}
 <EnvironmentalKuznetsDiagram />

 {/* Critical Evaluation */}
 <div className="mt-6 p-4 bg-slate-800/50 border border-amber-500/30 rounded-lg">
 <h5 className="font-semibold text-amber-400 text-sm mb-2">
 Critical Evaluation: EKC Validity
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 <strong>Supporting Evidence:</strong> As consumer incomes increase, some people show more 
 concern about the environment. Economic growth can fund development of technology to 
 produce goods and services more "greenly."
 </p>
 <p className="text-xs text-muted-foreground">
 <strong>Counter-Evidence:</strong> The EKC is contested empirically. Some pollutants 
 (CO₂, cumulative resource depletion) may not follow the inverted-U pattern. 
 <strong> Policy mediation is essential</strong>—the relationship is conditional on 
 regulatory frameworks, not automatic.
 </p>
 </div>
 </motion.div>

 {/* PPF Shift Diagram */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.6 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-cyan/20 flex items-center justify-center text-cambridge-cyan font-mono text-sm">6</span>
 Long-Run Economic Growth: PPF Outward Shift
 </h4>

 <PPFShiftDiagram />

 <div className="mt-4 p-4 bg-muted/30 rounded-lg">
 <p className="text-sm text-muted-foreground">
 <strong>Long-run economic growth</strong> is represented by an <strong>outward shift</strong> 
 of the Production Possibility Frontier. This occurs when the <em>quality or quantity</em> of 
 factors of production increases: investment in physical capital, improvements in human capital 
 (education, health), technological progress, or discovery of new natural resources.
 </p>
 </div>
 </motion.div>
 </div>
 );
};

/**
 * Business Cycle Diagram
 * Shows trend rate vs actual growth with boom, recession, slump, recovery phases
 */
const BusinessCycleDiagramSVG =  => {
 const containerRef = useRef<HTMLDivElement>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 observer.disconnect;
 }
 },
 { threshold: 0.3 }
 );
 if (containerRef.current) observer.observe(containerRef.current);
 return  => observer.disconnect;
 }, []);

 const width = 500;
 const height = 280;
 const margin = { top: 30, right: 30, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Trend line (linear upward)
 const trendStart = { x: margin.left, y: margin.top + chartHeight * 0.7 };
 const trendEnd = { x: margin.left + chartWidth, y: margin.top + chartHeight * 0.25 };

 // Business cycle path (sine wave around trend)
 const cyclePath = `
 M ${margin.left} ${margin.top + chartHeight * 0.65}
 C ${margin.left + chartWidth * 0.15} ${margin.top + chartHeight * 0.5},
 ${margin.left + chartWidth * 0.25} ${margin.top + chartHeight * 0.35},
 ${margin.left + chartWidth * 0.35} ${margin.top + chartHeight * 0.45}
 C ${margin.left + chartWidth * 0.45} ${margin.top + chartHeight * 0.55},
 ${margin.left + chartWidth * 0.55} ${margin.top + chartHeight * 0.5},
 ${margin.left + chartWidth * 0.65} ${margin.top + chartHeight * 0.3}
 C ${margin.left + chartWidth * 0.75} ${margin.top + chartHeight * 0.15},
 ${margin.left + chartWidth * 0.85} ${margin.top + chartHeight * 0.25},
 ${margin.left + chartWidth} ${margin.top + chartHeight * 0.35}
 `;

 return (
 <div ref={containerRef}>
 <p className="text-sm text-muted-foreground text-center mb-3">
 The Business Cycle: Trend Rate vs Actual Growth
 </p>
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 {/* Grid */}
 {[0.25, 0.5, 0.75].map((ratio) => (
 <line
 key={ratio}
 x1={margin.left}
 y1={margin.top + chartHeight * ratio}
 x2={margin.left + chartWidth}
 y2={margin.top + chartHeight * ratio}
 stroke="hsl(var(--muted-foreground))"
 strokeOpacity={0.1}
 strokeDasharray="4,4"
 />
 ))}

 {/* Axes */}
 <line
 x1={margin.left}
 y1={margin.top + chartHeight}
 x2={margin.left + chartWidth}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />
 <line
 x1={margin.left}
 y1={margin.top}
 x2={margin.left}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />

 {/* Axis Labels */}
 <text
 x={width / 2}
 y={height - 10}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 >
 Time
 </text>
 <text
 x={20}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 transform={`rotate(-90, 20, ${height / 2})`}
 >
 Real GDP
 </text>

 {/* Trend Line (Potential Output) */}
 <motion.line
 x1={trendStart.x}
 y1={trendStart.y}
 x2={trendEnd.x}
 y2={trendEnd.y}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={2}
 strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1 }}
 />
 <text
 x={margin.left + chartWidth + 5}
 y={trendEnd.y}
 fill="hsl(var(--cambridge-green))"
 className="text-[9px] font-medium"
 >
 Trend
 </text>

 {/* Business Cycle (Actual Output) */}
 <motion.path
 d={cyclePath}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={2.5}
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1.5, delay: 0.5 }}
 />
 <text
 x={margin.left + chartWidth + 5}
 y={margin.top + chartHeight * 0.35}
 fill="hsl(var(--cambridge-cyan))"
 className="text-[9px] font-medium"
 >
 Actual
 </text>

 {/* Phase Labels */}
 <text
 x={margin.left + chartWidth * 0.2}
 y={margin.top + 15}
 textAnchor="middle"
 fill="hsl(var(--cambridge-green))"
 className="text-[8px]"
 >
 Recovery
 </text>
 <text
 x={margin.left + chartWidth * 0.35}
 y={margin.top + 15}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 className="text-[8px]"
 >
 Boom
 </text>
 <text
 x={margin.left + chartWidth * 0.5}
 y={margin.top + chartHeight * 0.65}
 textAnchor="middle"
 fill="hsl(var(--destructive))"
 className="text-[8px]"
 >
 Recession
 </text>
 <text
 x={margin.left + chartWidth * 0.65}
 y={margin.top + 15}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 className="text-[8px]"
 >
 Boom
 </text>

 {/* Positive/Negative Output Gap Annotations */}
 <text
 x={margin.left + chartWidth * 0.35}
 y={margin.top + chartHeight * 0.55}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 className="text-[7px]"
 >
 +ve gap
 </text>
 <text
 x={margin.left + chartWidth * 0.5}
 y={margin.top + chartHeight * 0.45}
 textAnchor="middle"
 fill="hsl(var(--cambridge-magenta))"
 className="text-[7px]"
 >
 -ve gap
 </text>
 </svg>

 {/* Legend */}
 <div className="flex justify-center gap-6 mt-3">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-cambridge-green" style={{ borderStyle: 'dashed' }} />
 <span className="text-xs text-muted-foreground">Trend (Potential)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-cambridge-cyan" />
 <span className="text-xs text-muted-foreground">Actual GDP</span>
 </div>
 </div>
 </div>
 );
};

/**
 * Environmental Kuznets Curve Diagram
 */
const EnvironmentalKuznetsDiagram =  => {
 const width = 400;
 const height = 250;
 const margin = { top: 30, right: 30, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Inverted-U curve
 const curvePath = `
 M ${margin.left} ${margin.top + chartHeight * 0.85}
 Q ${margin.left + chartWidth * 0.3} ${margin.top + chartHeight * 0.15},
 ${margin.left + chartWidth * 0.5} ${margin.top + chartHeight * 0.1}
 Q ${margin.left + chartWidth * 0.7} ${margin.top + chartHeight * 0.15},
 ${margin.left + chartWidth} ${margin.top + chartHeight * 0.6}
 `;

 return (
 <div>
 <p className="text-sm text-muted-foreground text-center mb-3">
 Environmental Kuznets Curve
 </p>
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-sm mx-auto">
 {/* Axes */}
 <line
 x1={margin.left}
 y1={margin.top + chartHeight}
 x2={margin.left + chartWidth}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />
 <line
 x1={margin.left}
 y1={margin.top}
 x2={margin.left}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />

 {/* Axis Labels */}
 <text
 x={width / 2}
 y={height - 10}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 >
 Income per Capita
 </text>
 <text
 x={18}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-[10px] font-serif"
 transform={`rotate(-90, 18, ${height / 2})`}
 >
 Environmental Degradation
 </text>

 {/* EKC Curve */}
 <path
 d={curvePath}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth={2.5}
 />

 {/* Peak Point */}
 <circle
 cx={margin.left + chartWidth * 0.5}
 cy={margin.top + chartHeight * 0.1}
 r={5}
 fill="hsl(var(--destructive))"
 />
 <text
 x={margin.left + chartWidth * 0.5}
 y={margin.top + chartHeight * 0.1 - 10}
 textAnchor="middle"
 fill="hsl(var(--destructive))"
 className="text-[9px] font-semibold"
 >
 Peak Damage
 </text>

 {/* Stage Labels */}
 <text
 x={margin.left + chartWidth * 0.2}
 y={margin.top + chartHeight * 0.5}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 className="text-[8px]"
 >
 Rising
 </text>
 <text
 x={margin.left + chartWidth * 0.8}
 y={margin.top + chartHeight * 0.5}
 textAnchor="middle"
 fill="hsl(var(--cambridge-green))"
 className="text-[8px]"
 >
 Falling
 </text>

 {/* Annotations */}
 <text
 x={margin.left + chartWidth * 0.15}
 y={margin.top + chartHeight + 15}
 textAnchor="middle"
 fill="hsl(var(--muted-foreground))"
 className="text-[7px]"
 >
 Low Income
 </text>
 <text
 x={margin.left + chartWidth * 0.85}
 y={margin.top + chartHeight + 15}
 textAnchor="middle"
 fill="hsl(var(--muted-foreground))"
 className="text-[7px]"
 >
 High Income
 </text>
 </svg>
 </div>
 );
};

/**
 * PPF Outward Shift Diagram
 */
const PPFShiftDiagram =  => {
 const width = 350;
 const height = 280;
 const margin = { top: 30, right: 30, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Original PPF
 const ppf1Path = `
 M ${margin.left} ${margin.top + chartHeight * 0.15}
 Q ${margin.left + chartWidth * 0.5} ${margin.top + chartHeight * 0.1},
 ${margin.left + chartWidth * 0.85} ${margin.top + chartHeight}
 `;

 // Shifted PPF (outward)
 const ppf2Path = `
 M ${margin.left} ${margin.top}
 Q ${margin.left + chartWidth * 0.6} ${margin.top + chartHeight * 0.05},
 ${margin.left + chartWidth} ${margin.top + chartHeight * 0.85}
 `;

 return (
 <div>
 <p className="text-sm text-muted-foreground text-center mb-3">
 Long-Run Growth: PPF Outward Shift
 </p>
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xs mx-auto">
 {/* Axes */}
 <line
 x1={margin.left}
 y1={margin.top + chartHeight}
 x2={margin.left + chartWidth}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />
 <line
 x1={margin.left}
 y1={margin.top}
 x2={margin.left}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--silver))"
 strokeWidth={2}
 />

 {/* Axis Labels */}
 <text
 x={width / 2}
 y={height - 10}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 >
 Capital Goods
 </text>
 <text
 x={18}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 transform={`rotate(-90, 18, ${height / 2})`}
 >
 Consumer Goods
 </text>

 {/* Original PPF */}
 <path
 d={ppf1Path}
 fill="none"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth={2}
 strokeDasharray="6,4"
 />
 <text
 x={margin.left + chartWidth * 0.7}
 y={margin.top + chartHeight * 0.7}
 fill="hsl(var(--muted-foreground))"
 className="text-[9px]"
 >
 PPF₁
 </text>

 {/* Shifted PPF */}
 <path
 d={ppf2Path}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={2.5}
 />
 <text
 x={margin.left + chartWidth * 0.9}
 y={margin.top + chartHeight * 0.55}
 fill="hsl(var(--cambridge-green))"
 className="text-[9px] font-semibold"
 >
 PPF₂
 </text>

 {/* Arrow */}
 <line
 x1={margin.left + chartWidth * 0.5}
 y1={margin.top + chartHeight * 0.35}
 x2={margin.left + chartWidth * 0.6}
 y2={margin.top + chartHeight * 0.25}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={1.5}
 markerEnd="url(#arrowhead-ppf)"
 />
 <defs>
 <marker
 id="arrowhead-ppf"
 markerWidth="8"
 markerHeight="6"
 refX="8"
 refY="3"
 orient="auto"
 >
 <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--cambridge-cyan))" />
 </marker>
 </defs>
 <text
 x={margin.left + chartWidth * 0.55}
 y={margin.top + chartHeight * 0.2}
 textAnchor="middle"
 fill="hsl(var(--cambridge-cyan))"
 className="text-[8px]"
 >
 Growth
 </text>
 </svg>

 {/* Legend */}
 <div className="flex justify-center gap-6 mt-3">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-muted-foreground" style={{ borderStyle: 'dashed' }} />
 <span className="text-xs text-muted-foreground">Original PPF</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-cambridge-green" />
 <span className="text-xs text-muted-foreground">Shifted PPF (Growth)</span>
 </div>
 </div>
 </div>
 );
};

export default DevelopmentSustainabilitySection;
