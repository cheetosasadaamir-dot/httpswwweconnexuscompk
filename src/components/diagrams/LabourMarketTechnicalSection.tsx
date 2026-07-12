import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * Technical Analysis: Employment & Labour Market Framework
 * A2 Syllabus Compliant
 * [A2 Specialist - Labour Market & Phillips Curve]
 */
const LabourMarketTechnicalSection =  => {
 return (
 <div className="space-y-8">
 {/* Section Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="glass-card p-6 border-l-4 border-cambridge-cyan"
 >
 <div className="flex items-center gap-3 mb-3">
 <span className="px-3 py-1 bg-cambridge-cyan/20 text-cambridge-cyan text-xs font-mono rounded-full">
 A2 SPECIALIST
 </span>
 <span className="text-xs text-muted-foreground">Labour Market & Phillips Curve</span>
 </div>
 <h3 className="font-serif text-2xl text-silver-bright mb-2">
 Technical Analysis: Labour Force & Employment Framework
 </h3>
 <p className="text-muted-foreground text-sm">
 This section provides syllabus-aligned definitions, measurement methodologies, 
 and equilibrium analysis for the labour market.
 </p>
 </motion.div>

 {/* Labour Force Definitions */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-cyan/20 flex items-center justify-center text-cambridge-cyan font-mono text-sm">1</span>
 Labour Force Definitions
 </h4>
 
 <div className="grid md:grid-cols-2 gap-4 mb-6">
 {/* Working Age Population */}
 <div className="p-4 bg-muted/30 rounded-lg border border-muted">
 <h5 className="font-semibold text-primary text-sm mb-2">Working Age Population</h5>
 <p className="text-sm text-muted-foreground">
 Those aged <strong>18–65</strong> who are actively looking for work. These are the 
 <strong> economically active</strong> members of the population.
 </p>
 </div>

 {/* The Employed */}
 <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/20">
 <h5 className="font-semibold text-cambridge-green text-sm mb-2">The Employed</h5>
 <p className="text-sm text-muted-foreground">
 Those with a job—either full-time or part-time employment.
 </p>
 </div>
 </div>

 {/* Economically Inactive */}
 <div className="p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/20 mb-4">
 <h5 className="font-semibold text-cambridge-orange text-sm mb-2">
 The Economically Inactive
 </h5>
 <p className="text-sm text-muted-foreground mb-3">
 Those <strong>not actively looking for jobs</strong>. This category includes:
 </p>
 <ul className="text-sm text-muted-foreground space-y-1 ml-4">
 <li>• <strong>Carers</strong> for the elderly, disabled, or children</li>
 <li>• <strong>Retired</strong> individuals</li>
 <li>• <strong>Discouraged workers</strong> who have stopped looking due to prolonged unemployment</li>
 <li>• Full-time students not seeking work</li>
 </ul>
 <div className="mt-3 p-3 bg-destructive/10 rounded border border-destructive/20">
 <p className="text-xs text-destructive">
 <strong>⚠ Economic Impact:</strong> If the economically inactive population increases, 
 the labour force shrinks → the economy's <strong>productive potential falls</strong>.
 </p>
 </div>
 </div>

 {/* The Unemployed - Key Definition */}
 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
 <h5 className="font-semibold text-cambridge-cyan text-sm mb-2">
 The Unemployed (CIE Definition)
 </h5>
 <p className="text-sm text-muted-foreground">
 Those who are:
 </p>
 <ol className="text-sm text-muted-foreground space-y-1 ml-4 mt-2 list-decimal list-inside">
 <li><strong>Able and willing</strong> to work</li>
 <li><strong>Actively seeking</strong> employment</li>
 <li>Ready to start within <strong>two weeks</strong></li>
 <li>Currently <strong>without a job</strong></li>
 </ol>
 </div>

 {/* Labour Productivity */}
 <div className="mt-4 p-4 bg-primary/10 rounded-lg">
 <h5 className="font-semibold text-primary text-sm mb-2">Labour Productivity</h5>
 <p className="text-sm text-muted-foreground mb-2">
 A measure of <strong>output per worker per hour</strong>. Equivalent to real GDP produced 
 per unit of labour per hour.
 </p>
 <div className="text-center">
 <BlockMath>{'\\text{Labour Productivity} = \\frac{\\text{Real GDP}}{\\text{Total Hours Worked}}'}</BlockMath>
 </div>
 </div>
 </motion.div>

 {/* Natural Rate of Unemployment & Full Employment */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-magenta/20 flex items-center justify-center text-cambridge-magenta font-mono text-sm">2</span>
 Natural Rate of Unemployment & Labour Market Equilibrium
 </h4>

 <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/30 mb-6">
 <h5 className="font-semibold text-cambridge-magenta mb-2">
 Natural Rate of Unemployment (<InlineMath>{'U_n'}</InlineMath>)
 </h5>
 <p className="text-sm text-muted-foreground mb-3">
 The unemployment rate when the <strong>labour market is at equilibrium</strong>. 
 Developed by <strong>Milton Friedman</strong> and <strong>Edmund Phelps</strong>.
 </p>
 
 <div className="space-y-2 text-sm text-muted-foreground">
 <p>
 <strong>Definition:</strong> The difference between those <em>willing</em> to work at 
 the current market wage and those <em>willing and able</em> to work.
 </p>
 <p>
 <strong>Composition:</strong> Frictional + Structural + Voluntary unemployment 
 (supply-side factors only).
 </p>
 </div>
 </div>

 {/* NAIRU Box */}
 <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30 mb-6">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-amber-400 font-mono text-sm">NAIRU</span>
 <span className="text-xs text-muted-foreground">Non-Accelerating Inflation Rate of Unemployment</span>
 </div>
 <p className="text-sm text-muted-foreground">
 At the NAIRU, <strong>inflation has no tendency to increase</strong>. There is no 
 demand-deficient (cyclical) unemployment. Sometimes referred to as the 
 <strong> full level of employment</strong>.
 </p>
 <div className="mt-3 p-3 bg-muted/30 rounded text-center">
 <p className="text-xs font-mono text-primary">
 At <InlineMath>{'U_n'}</InlineMath>: No pressure for <InlineMath>{'\\pi'}</InlineMath> to change
 </p>
 </div>
 </div>

 {/* Full Employment */}
 <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
 <h5 className="font-semibold text-cambridge-green mb-2">Full Employment</h5>
 <p className="text-sm text-muted-foreground mb-3">
 The state when <strong>all factors of production are used to their productive potential</strong>. 
 Maximises the output of the economy.
 </p>
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 bg-muted/30 rounded">
 <p className="text-xs font-semibold text-primary mb-1">Effects of Full Employment:</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Upward pressure on price level (demand-pull inflation)</li>
 <li>• Wage inflation (labour shortage)</li>
 <li>• Increased consumer and business confidence</li>
 </ul>
 </div>
 <div className="p-3 bg-muted/30 rounded">
 <p className="text-xs font-semibold text-cambridge-green mb-1">Social Benefits:</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Lower crime rates</li>
 <li>• Higher standards of living</li>
 <li>• Reduced inequality and poverty</li>
 <li>• Improved government budgets</li>
 </ul>
 </div>
 </div>
 <p className="text-xs text-muted-foreground mt-3 italic">
 Governments aim for unemployment ≈ 3% to account for frictional unemployment.
 </p>
 </div>
 </motion.div>

 {/* Measuring Unemployment - Methodological Comparison */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-orange/20 flex items-center justify-center text-cambridge-orange font-mono text-sm">3</span>
 Measuring Unemployment: Methodological Comparison
 </h4>

 <p className="text-sm text-muted-foreground mb-6">
 Accurately measuring unemployment is inherently difficult. Some employed individuals may 
 claim benefits fraudulently, while some unemployed may not disclose their status in surveys.
 </p>

 <div className="grid md:grid-cols-2 gap-6">
 {/* Claimant Count */}
 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
 <h5 className="font-semibold text-cambridge-cyan mb-3">
 1. The Claimant Count
 </h5>
 <p className="text-sm text-muted-foreground mb-3">
 Measures those receiving <strong>Jobseeker's Allowance (JSA)</strong>. 
 Claimants must prove they are actively looking for work.
 </p>
 
 <div className="p-3 bg-destructive/10 rounded border border-destructive/20 mb-3">
 <p className="text-xs font-semibold text-destructive mb-1">⚠ Limitation: Generally UNDERESTIMATES</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Not every unemployed person is <em>eligible</em> for JSA</li>
 <li>• Partners of high-income earners are ineligible even if unemployed</li>
 <li>• Some unemployed don't bother claiming</li>
 </ul>
 </div>

 <div className="p-2 bg-muted/30 rounded text-center">
 <span className="text-xs font-mono text-muted-foreground">
 Result: <span className="text-destructive">Lower figure</span>
 </span>
 </div>
 </div>

 {/* ILO/LFS Method */}
 <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/30">
 <h5 className="font-semibold text-cambridge-magenta mb-3">
 2. ILO / Labour Force Survey (LFS)
 </h5>
 <p className="text-sm text-muted-foreground mb-3">
 Uses the <strong>Labour Force Survey</strong> conducted by the ILO. 
 Directly asks respondents if they meet specific criteria:
 </p>
 
 <div className="p-3 bg-primary/10 rounded border border-primary/20 mb-3">
 <p className="text-xs font-semibold text-primary mb-1">✓ ILO Criteria:</p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Out of work for <strong>4 weeks</strong></li>
 <li>• Able and willing to start within <strong>2 weeks</strong></li>
 <li>• Available for at least <strong>1 hour per week</strong></li>
 <li>• <strong>Part-time unemployed included</strong></li>
 </ul>
 </div>

 <div className="p-2 bg-muted/30 rounded text-center">
 <span className="text-xs font-mono text-muted-foreground">
 Result: <span className="text-cambridge-green">Higher figure</span> (includes part-time)
 </span>
 </div>
 </div>
 </div>

 {/* Examiner Note */}
 <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
 <p className="text-xs font-semibold text-amber-400 mb-1">📋 Examiner Note:</p>
 <p className="text-xs text-muted-foreground">
 The ILO/LFS method is internationally comparable and more comprehensive, but subject 
 to sampling errors. The Claimant Count is administratively simpler but policy-dependent 
 (benefit eligibility rules change). CIE expects you to <strong>evaluate both methods</strong> 
 and explain why they produce different figures.
 </p>
 </div>
 </motion.div>

 {/* Labour Market Equilibrium Diagram */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.4 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-sm">4</span>
 Labour Market Equilibrium & Real Wage Unemployment
 </h4>

 <LabourMarketEquilibriumDiagram />

 <div className="mt-4 p-4 bg-muted/30 rounded-lg">
 <p className="text-sm text-muted-foreground">
 <strong>Classical Interpretation:</strong> Wages above the market equilibrium 
 (<InlineMath>{'W_2 > W_e'}</InlineMath>) cause unemployment because labour supply 
 exceeds demand. Classical economists argue that flexible wages would eliminate 
 unemployment by allowing the wage to fall to equilibrium.
 </p>
 <p className="text-sm text-muted-foreground mt-2">
 <strong>Counter-argument:</strong> Cutting wages during weak consumer spending 
 would further reduce aggregate demand, worsening economic growth. The classical 
 model assumes perfect competition, which does not reflect reality.
 </p>
 </div>
 </motion.div>

 {/* Phillips Curve Enhancement */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.5 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-cyan/20 flex items-center justify-center text-cambridge-cyan font-mono text-sm">5</span>
 The Phillips Curve: Technical Framework
 </h4>

 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30 mb-6">
 <h5 className="font-semibold text-cambridge-cyan mb-2">Inverse Relationship</h5>
 <p className="text-sm text-muted-foreground">
 The Phillips Curve demonstrates an <strong>inverse relationship</strong> between 
 the <strong>rate of inflation</strong> (<InlineMath>{'\\pi'}</InlineMath>) and the 
 <strong> unemployment rate</strong> (<InlineMath>{'U'}</InlineMath>). Higher inflation 
 is associated with lower unemployment, and vice versa.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-4 mb-6">
 {/* SRPC */}
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-primary text-sm mb-2">
 Short-Run Phillips Curve (SRPC)
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 Downward-sloping curve showing the trade-off. Shifts outward with:
 </p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Higher inflation expectations</li>
 <li>• Supply shocks (oil prices)</li>
 <li>• Increases in NRU components</li>
 </ul>
 </div>

 {/* LRPC */}
 <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/20">
 <h5 className="font-semibold text-cambridge-magenta text-sm mb-2">
 Long-Run Phillips Curve (LRPC)
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 <strong>Vertical</strong> at the Natural Rate of Unemployment (<InlineMath>{'U_n'}</InlineMath>). 
 In the long run:
 </p>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• <strong>No trade-off exists</strong></li>
 <li>• Unemployment is independent of inflation</li>
 <li>• Only supply-side policies shift LRPC</li>
 </ul>
 </div>
 </div>

 {/* Key Insight */}
 <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
 <p className="text-xs font-semibold text-amber-400 mb-1">📌 Key CIE Insight:</p>
 <p className="text-xs text-muted-foreground">
 At the Natural Rate, there is <strong>no pressure for inflation to change</strong>. 
 Any attempt to permanently reduce unemployment below <InlineMath>{'U_n'}</InlineMath> 
 through demand-side policy will only lead to <strong>accelerating inflation</strong> 
 in the long run.
 </p>
 </div>
 </motion.div>

 {/* Policy Evaluation */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.6 }}
 className="glass-card p-6"
 >
 <h4 className="font-serif text-xl text-silver-bright mb-4 flex items-center gap-2">
 <span className="w-8 h-8 rounded-full bg-cambridge-green/20 flex items-center justify-center text-cambridge-green font-mono text-sm">6</span>
 Policy Evaluation: Matching Tools to Unemployment Type
 </h4>

 <div className="grid md:grid-cols-2 gap-4">
 {/* Supply-Side */}
 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
 <h5 className="font-semibold text-cambridge-cyan mb-3">
 Supply-Side Policies
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 <strong>Target:</strong> Structural Unemployment
 </p>
 <ul className="text-xs text-muted-foreground space-y-2">
 <li>
 <strong>Education & Training:</strong> Directly improves labour market by 
 increasing skills and occupational mobility
 </li>
 <li>
 <strong>Labour Market Reforms:</strong> Reduce trade union power, increase 
 wage flexibility
 </li>
 <li>
 <strong>Benefit Reforms:</strong> Reduce voluntary unemployment incentives
 </li>
 </ul>
 <div className="mt-3 p-2 bg-primary/10 rounded text-center">
 <span className="text-xs font-mono">
 Effect: <InlineMath>{'U_n \\downarrow \\rightarrow'}</InlineMath> LRPC shifts left
 </span>
 </div>
 </div>

 {/* Demand-Side */}
 <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/30">
 <h5 className="font-semibold text-cambridge-magenta mb-3">
 Demand-Side Policies
 </h5>
 <p className="text-xs text-muted-foreground mb-3">
 <strong>Target:</strong> Cyclical (Demand-Deficient) Unemployment
 </p>
 <ul className="text-xs text-muted-foreground space-y-2">
 <li>
 <strong>Fiscal Policy:</strong> <InlineMath>{'\\uparrow G'}</InlineMath> or 
 <InlineMath>{'\\downarrow T'}</InlineMath> to shift AD rightward
 </li>
 <li>
 <strong>Monetary Policy:</strong> <InlineMath>{'\\downarrow r'}</InlineMath> to 
 stimulate C and I
 </li>
 </ul>
 <div className="mt-3 p-2 bg-primary/10 rounded text-center">
 <span className="text-xs font-mono">
 Effect: Closes negative output gap (<InlineMath>{'Y \\rightarrow Y_f'}</InlineMath>)
 </span>
 </div>
 <p className="text-xs text-destructive mt-2">
 ⚠ Cannot reduce unemployment below <InlineMath>{'U_n'}</InlineMath> permanently
 </p>
 </div>
 </div>

 <div className="mt-4 p-3 bg-muted/30 rounded-lg">
 <p className="text-xs text-muted-foreground text-center">
 <strong>Time Lags:</strong> Supply-side policies have significant implementation lags (3–5 years). 
 Demand-side policies face recognition and decision lags but work faster once implemented (12–18 months).
 </p>
 </div>
 </motion.div>
 </div>
 );
};

/**
 * Labour Market Equilibrium Diagram
 * Shows real wage unemployment with minimum wage above equilibrium
 * Geometrically precise: W2 > We creates unemployment = Qs - Qd
 */
const LabourMarketEquilibriumDiagram =  => {
 const width = 400;
 const height = 320;
 const margin = { top: 30, right: 40, bottom: 50, left: 60 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Scale functions
 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 // Equilibrium point
 const We = 50; // Equilibrium wage
 const Qe = 50; // Equilibrium quantity

 // Minimum wage (above equilibrium)
 const W2 = 70;

 // At W2: Supply > Demand
 // Labour Supply: W = 10 + 0.8Q → Q = (W - 10) / 0.8
 // At W2 = 70: Qs = (70 - 10) / 0.8 = 75
 const Qs = 75;

 // Labour Demand: W = 90 - 0.8Q → Q = (90 - W) / 0.8
 // At W2 = 70: Qd = (90 - 70) / 0.8 = 25
 const Qd = 25;

 return (
 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
 {/* Grid */}
 {[20, 40, 60, 80].map((val) => (
 <g key={val}>
 <line
 x1={xScale(val)}
 y1={margin.top}
 x2={xScale(val)}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--muted-foreground))"
 strokeOpacity={0.1}
 strokeDasharray="4,4"
 />
 <line
 x1={margin.left}
 y1={yScale(val)}
 x2={margin.left + chartWidth}
 y2={yScale(val)}
 stroke="hsl(var(--muted-foreground))"
 strokeOpacity={0.1}
 strokeDasharray="4,4"
 />
 </g>
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
 Quantity of Labour (Q)
 </text>
 <text
 x={18}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-xs font-serif"
 transform={`rotate(-90, 18, ${height / 2})`}
 >
 Real Wage (W/P)
 </text>

 {/* Labour Supply: W = 10 + 0.8Q (upward sloping) */}
 <line
 x1={xScale(0)}
 y1={yScale(10)}
 x2={xScale(100)}
 y2={yScale(90)}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={2.5}
 />
 <text
 x={xScale(95)}
 y={yScale(88)}
 fill="hsl(var(--cambridge-cyan))"
 className="text-xs font-semibold"
 >
 SL
 </text>

 {/* Labour Demand: W = 90 - 0.8Q (downward sloping) */}
 <line
 x1={xScale(0)}
 y1={yScale(90)}
 x2={xScale(100)}
 y2={yScale(10)}
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth={2.5}
 />
 <text
 x={xScale(95)}
 y={yScale(12)}
 fill="hsl(var(--cambridge-magenta))"
 className="text-xs font-semibold"
 >
 DL
 </text>

 {/* Equilibrium Point E */}
 <circle
 cx={xScale(Qe)}
 cy={yScale(We)}
 r={5}
 fill="hsl(var(--cambridge-green))"
 />
 <text
 x={xScale(Qe) + 10}
 y={yScale(We) - 5}
 fill="hsl(var(--cambridge-green))"
 className="text-xs font-bold"
 >
 E
 </text>

 {/* We dashed line */}
 <line
 x1={margin.left}
 y1={yScale(We)}
 x2={xScale(Qe)}
 y2={yScale(We)}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={1}
 strokeDasharray="4,3"
 />
 <text
 x={margin.left - 8}
 y={yScale(We) + 4}
 textAnchor="end"
 fill="hsl(var(--cambridge-green))"
 className="text-[10px] font-medium"
 >
 We
 </text>

 {/* Qe dashed line */}
 <line
 x1={xScale(Qe)}
 y1={yScale(We)}
 x2={xScale(Qe)}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--cambridge-green))"
 strokeWidth={1}
 strokeDasharray="4,3"
 />
 <text
 x={xScale(Qe)}
 y={margin.top + chartHeight + 14}
 textAnchor="middle"
 fill="hsl(var(--cambridge-green))"
 className="text-[10px] font-medium"
 >
 Qe
 </text>

 {/* Minimum Wage Line W2 */}
 <line
 x1={margin.left}
 y1={yScale(W2)}
 x2={margin.left + chartWidth}
 y2={yScale(W2)}
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth={2.5}
 />
 <text
 x={margin.left - 8}
 y={yScale(W2) + 4}
 textAnchor="end"
 fill="hsl(var(--cambridge-orange))"
 className="text-[10px] font-bold"
 >
 W₂
 </text>
 <text
 x={margin.left + chartWidth + 5}
 y={yScale(W2) + 4}
 fill="hsl(var(--cambridge-orange))"
 className="text-[8px]"
 >
 Min
 </text>

 {/* Qd at W2 */}
 <line
 x1={xScale(Qd)}
 y1={yScale(W2)}
 x2={xScale(Qd)}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--cambridge-magenta))"
 strokeWidth={1}
 strokeDasharray="4,3"
 />
 <text
 x={xScale(Qd)}
 y={margin.top + chartHeight + 14}
 textAnchor="middle"
 fill="hsl(var(--cambridge-magenta))"
 className="text-[10px] font-medium"
 >
 Qd
 </text>

 {/* Qs at W2 */}
 <line
 x1={xScale(Qs)}
 y1={yScale(W2)}
 x2={xScale(Qs)}
 y2={margin.top + chartHeight}
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={1}
 strokeDasharray="4,3"
 />
 <text
 x={xScale(Qs)}
 y={margin.top + chartHeight + 14}
 textAnchor="middle"
 fill="hsl(var(--cambridge-cyan))"
 className="text-[10px] font-medium"
 >
 Qs
 </text>

 {/* Unemployment bracket */}
 <line
 x1={xScale(Qd)}
 y1={margin.top + chartHeight + 28}
 x2={xScale(Qs)}
 y2={margin.top + chartHeight + 28}
 stroke="hsl(var(--destructive))"
 strokeWidth={2}
 />
 <text
 x={(xScale(Qd) + xScale(Qs)) / 2}
 y={margin.top + chartHeight + 42}
 textAnchor="middle"
 fill="hsl(var(--destructive))"
 className="text-[9px] font-bold"
 >
 Unemployment = Qs − Qd
 </text>

 {/* Unemployment shading */}
 <rect
 x={xScale(Qd)}
 y={yScale(W2) - 3}
 width={xScale(Qs) - xScale(Qd)}
 height={6}
 fill="hsl(var(--destructive))"
 opacity={0.3}
 />
 </svg>
 );
};

export default LabourMarketTechnicalSection;
