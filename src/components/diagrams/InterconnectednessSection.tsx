import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';

const InterconnectednessSection: React.FC =  => {
 const [activeTab, setActiveTab] = useState<'value' | 'bop' | 'phillips'>('value');

 return (
 <div className="space-y-6">
 {/* Section Header */}
 <div className="glass-card p-6 rounded-xl border-l-4 border-l-cambridge-cyan">
 <div className="flex items-center gap-2 mb-3">
 <span className="px-3 py-1 bg-cambridge-cyan/20 text-cambridge-cyan rounded-full text-xs font-semibold">
 A2 Specialist – Inter-connectedness & Phillips Curve
 </span>
 </div>
 <h2 className="font-serif text-2xl text-foreground mb-2">
 Inter-connectedness of Macroeconomic Problems
 </h2>
 <p className="text-muted-foreground text-sm leading-relaxed">
 This section examines how macroeconomic problems are interrelated—the relationship between 
 internal and external value of money, the links between inflation and the balance of payments, 
 and the critical Phillips Curve trade-off between inflation and unemployment.
 </p>
 </div>

 {/* Navigation Tabs */}
 <div className="flex flex-wrap gap-2">
 {[
 { id: 'value', label: 'Value of Money', icon: '💰' },
 { id: 'bop', label: 'BoP & Inflation', icon: '🌍' },
 { id: 'phillips', label: 'Phillips Curve', icon: '📉' },
 ].map((tab) => (
 <button
 key={tab.id}
 onClick={ => setActiveTab(tab.id as typeof activeTab)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
 activeTab === tab.id
 ? 'bg-cambridge-cyan text-background': 'bg-muted/50 text-muted-foreground hover:bg-muted'
 }`}
 >
 {tab.icon} {tab.label}
 </button>
 ))}
 </div>

 {/* Tab Content */}
 <motion.div
 key={activeTab}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.3 }}
 >
 {activeTab === 'value' && <ValueOfMoneyContent />}
 {activeTab === 'bop' && <BoPInflationContent />}
 {activeTab === 'phillips' && <PhillipsCurveContent />}
 </motion.div>
 </div>
 );
};

/* ============================================
 VALUE OF MONEY CONTENT
 ============================================ */
const ValueOfMoneyContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="Internal vs. External Value of Money" className="mb-4">
 <p className="text-sm text-muted-foreground mb-3">
 Money has two distinct values that are interconnected through international trade 
 and capital flows. Understanding this relationship is essential for analyzing 
 inflation, exchange rates, and competitiveness.
 </p>
 </NoteCard>

 <div className="grid md:grid-cols-2 gap-4">
 {/* Internal Value */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-green">
 <h4 className="font-serif text-lg text-cambridge-green mb-3">Internal Value of Money</h4>
 <p className="text-sm text-muted-foreground mb-3">
 <strong>Definition:</strong> The <em>real value</em> of money measured by its 
 <strong> purchasing power</strong> — what it can buy in terms of goods and services 
 within the domestic economy.
 </p>
 <div className="p-3 bg-cambridge-green/10 rounded-lg mb-3">
 <BlockMath math="\text{Purchasing Power} = \frac{1}{\text{Price Level}} = \frac{1}{P}" />
 </div>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
 <li><strong>Inflation (↑P):</strong> Reduces internal value (less purchasing power)</li>
 <li><strong>Deflation (↓P):</strong> Increases internal value (more purchasing power)</li>
 <li>Measured by CPI or RPI changes over time</li>
 </ul>
 </div>

 {/* External Value */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-orange">
 <h4 className="font-serif text-lg text-cambridge-orange mb-3">External Value of Money</h4>
 <p className="text-sm text-muted-foreground mb-3">
 <strong>Definition:</strong> What the currency is worth measured in 
 <strong> foreign currency</strong> — this is the <strong>exchange rate</strong>.
 </p>
 <div className="p-3 bg-cambridge-orange/10 rounded-lg mb-3">
 <BlockMath math="e = \frac{\text{Domestic Currency}}{\text{Foreign Currency}} \quad \text{(e.g., } \frac{£1}{\$1.25}\text{)}" />
 </div>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
 <li><strong>Appreciation (↑e):</strong> Currency buys more foreign goods</li>
 <li><strong>Depreciation (↓e):</strong> Currency buys fewer foreign goods</li>
 <li>Determined by forex market supply and demand</li>
 </ul>
 </div>
 </div>

 <AnalysisBlock title="Diagram Analysis: The Inflation-Exchange Rate Nexus" type="analysis">
 <div className="space-y-3">
 <p className="text-sm">
 <strong>Relative Purchasing Power Parity (PPP)</strong> suggests that exchange rates 
 adjust to offset inflation differentials between countries:
 </p>
 <div className="p-3 bg-muted/30 rounded-lg">
 <BlockMath math="\frac{\Delta e}{e} \approx \pi_{\text{domestic}} - \pi_{\text{foreign}}" />
 </div>
 <p className="text-sm text-muted-foreground">
 If UK inflation exceeds US inflation, the pound should <strong>depreciate</strong> 
 to maintain competitiveness. However, in practice, capital flows and interest rate 
 differentials often dominate short-run exchange rate movements.
 </p>
 <div className="p-3 bg-primary/10 rounded-lg">
 <p className="text-xs font-medium text-primary">
 <strong>Examiner Focus:</strong> High domestic inflation erodes both internal value 
 (reduced purchasing power) AND external value (depreciation pressure). This creates 
 a vicious cycle where depreciation causes import price rises, feeding further inflation.
 </p>
 </div>
 </div>
 </AnalysisBlock>
 </div>
 );
};

/* ============================================
 BoP & INFLATION CONTENT
 ============================================ */
const BoPInflationContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="Relationship Between Balance of Payments and Inflation" className="mb-4">
 <p className="text-sm text-muted-foreground">
 Inflation and the Balance of Payments are closely linked through <strong>international 
 competitiveness</strong>. Both demand-pull and cost-push inflation affect trade flows, 
 while exchange rate changes feed back into domestic prices.
 </p>
 </NoteCard>

 <div className="grid md:grid-cols-2 gap-4">
 {/* Demand-Pull → BoP */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-magenta">
 <h4 className="font-serif text-lg text-cambridge-magenta mb-3">Demand-Pull Inflation → BoP</h4>
 <p className="text-sm text-muted-foreground mb-3">
 An increase in <InlineMath math="AD" /> causes demand-pull inflation, making 
 domestic goods <strong>more expensive</strong> relative to foreign goods.
 </p>
 <div className="p-3 bg-cambridge-magenta/10 rounded-lg text-xs font-mono mb-3">
 ↑AD → ↑P(domestic) → UK goods more expensive → ↑M (cheaper imports) → ↓(X-M) → CA deficit worsens
 </div>
 <p className="text-xs text-muted-foreground">
 <strong>Note:</strong> If the current account worsens, the capital/financial account 
 must improve (BoP identity). This may involve foreign borrowing or asset sales.
 </p>
 </div>

 {/* Cost-Push from Imports */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-destructive">
 <h4 className="font-serif text-lg text-destructive mb-3">Imported Cost-Push Inflation</h4>
 <p className="text-sm text-muted-foreground mb-3">
 If imported raw materials become expensive (e.g., oil price shocks), firms face 
 <strong> higher production costs</strong>, causing cost-push inflation.
 </p>
 <div className="p-3 bg-destructive/10 rounded-lg text-xs font-mono mb-3">
 ↑Price of imports (e.g., oil) → ↑Production costs → ↓SRAS → ↑P + ↓Y (stagflation)
 </div>
 <p className="text-xs text-muted-foreground">
 <strong>Currency Depreciation:</strong> When £ depreciates, imports become 
 relatively more expensive, directly feeding into cost-push inflation.
 </p>
 </div>
 </div>

 {/* Exchange Rate Effects */}
 <div className="glass-card p-5 rounded-xl">
 <h4 className="font-serif text-lg text-foreground mb-3">Exchange Rate & Competitiveness</h4>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-sm mb-2">When £ Appreciates</h5>
 <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
 <li>Imports become <strong>relatively cheaper</strong></li>
 <li>Exports become <strong>more expensive</strong> for foreigners</li>
 <li>Helps reduce imported inflation</li>
 <li>But worsens current account (Marshall-Lerner)</li>
 </ul>
 </div>
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-sm mb-2">When £ Depreciates</h5>
 <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
 <li>Imports become <strong>relatively expensive</strong></li>
 <li>Exports become <strong>cheaper</strong> for foreigners</li>
 <li>Causes imported inflation (cost-push)</li>
 <li>Improves current account (if M-L condition met)</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Productivity Link */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-green">
 <h4 className="font-serif text-lg text-cambridge-green mb-3">Productivity & International Competitiveness</h4>
 <p className="text-sm text-muted-foreground mb-3">
 <strong>Increased productivity</strong> makes an economy more internationally competitive 
 without requiring currency depreciation or wage cuts:
 </p>
 <div className="p-3 bg-cambridge-green/10 rounded-lg text-xs font-mono mb-3">
 ↑Productivity → ↓Unit Labour Costs → ↓Export Prices → ↑X relative to M → ↑(X-M) → CA improves
 </div>
 <p className="text-xs text-muted-foreground">
 This is why <strong>supply-side policies</strong> that boost productivity are the only 
 sustainable solution to competitiveness problems — they improve the trade balance 
 <strong> without causing inflation</strong>.
 </p>
 </div>

 <ExamTipBox title="Senior Examiner's Note">
 <p className="text-xs">
 Always recognize the <strong>feedback loops</strong>: inflation affects competitiveness, 
 which affects the exchange rate, which affects import prices, which feeds back into inflation. 
 Breaking this cycle requires either aggressive monetary tightening (high interest rates to 
 appreciate currency and reduce AD) or long-term supply-side improvements.
 </p>
 </ExamTipBox>
 </div>
 );
};

/* ============================================
 PHILLIPS CURVE CONTENT
 ============================================ */
const PhillipsCurveContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="The Phillips Curve: Inflation-Unemployment Trade-off" className="mb-4">
 <p className="text-sm text-muted-foreground">
 The <strong>Phillips Curve</strong> represents the trade-off between inflation and unemployment. 
 The relationship differs fundamentally between the short run and long run, with critical 
 implications for macroeconomic policy.
 </p>
 </NoteCard>

 {/* Phillips Curve Diagram */}
 <PhillipsCurveDiagram />

 <div className="grid md:grid-cols-2 gap-4">
 {/* SRPC */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-cyan">
 <h4 className="font-serif text-lg text-cambridge-cyan mb-3">Short-Run Phillips Curve (SRPC)</h4>
 <p className="text-sm text-muted-foreground mb-3">
 <strong>Definition:</strong> Shows the <strong>inverse relationship</strong> (trade-off) 
 between inflation (<InlineMath math="\pi" />) and unemployment (<InlineMath math="U" />) 
 in the short run.
 </p>
 <div className="p-3 bg-cambridge-cyan/10 rounded-lg text-xs font-mono mb-3">
 ↓U (via ↑AD) → Labour shortages → ↑W → ↑Unit Costs → ↑P (inflation)
 </div>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
 <li>Downward-sloping curve</li>
 <li>Trade-off exists: lower U means higher π</li>
 <li>Economy can be at any point along the curve</li>
 <li>Position depends on <strong>inflation expectations</strong></li>
 </ul>
 </div>

 {/* LRPC */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-orange">
 <h4 className="font-serif text-lg text-cambridge-orange mb-3">Long-Run Phillips Curve (LRPC)</h4>
 <p className="text-sm text-muted-foreground mb-3">
 <strong>Definition:</strong> A <strong>vertical line</strong> at the Natural Rate of 
 Unemployment (<InlineMath math="U_n" />). In the long run, there is <strong>no trade-off</strong>.
 </p>
 <div className="p-3 bg-cambridge-orange/10 rounded-lg text-xs font-mono mb-3">
 At U_n: Any inflation rate is possible → π and U are unrelated in long run
 </div>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
 <li>Vertical at Natural Rate (<InlineMath math="U_n" />)</li>
 <li>No demand-deficient unemployment at <InlineMath math="U_n" /></li>
 <li>Only frictional + structural unemployment remains</li>
 <li>Expectations adjust to actual inflation</li>
 </ul>
 </div>
 </div>

 {/* Policy Implications */}
 <div className="glass-card p-5 rounded-xl">
 <h4 className="font-serif text-lg text-foreground mb-4">Policy Implications: SRPC vs. LRPC</h4>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
 <h5 className="font-semibold text-sm text-cambridge-cyan mb-2">Short-Run Policy</h5>
 <p className="text-xs text-muted-foreground mb-2">
 In the short run, the economy suffers from <strong>demand-deficient unemployment</strong>. 
 This encourages the use of <strong>demand-side policies</strong> to tackle unemployment.
 </p>
 <div className="p-2 bg-muted/30 rounded text-xs font-mono">
 ↑AD → ↓U → Movement along SRPC → ↑π (trade-off accepted)
 </div>
 <p className="text-xs text-muted-foreground mt-2">
 <strong>Risk:</strong> Reducing unemployment creates inflationary pressure. 
 Policymakers must decide if the trade-off is acceptable.
 </p>
 </div>
 <div className="p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/30">
 <h5 className="font-semibold text-sm text-cambridge-orange mb-2">Long-Run Policy</h5>
 <p className="text-xs text-muted-foreground mb-2">
 In the long run, changes in unemployment do not affect inflation. 
 <strong> Supply-side policies</strong> are more effective and policies can be more flexible.
 </p>
 <div className="p-2 bg-muted/30 rounded text-xs font-mono">
 Supply-side → ↓U_n → LRPC shifts left → Lower sustainable U
 </div>
 <p className="text-xs text-muted-foreground mt-2">
 <strong>Advantage:</strong> No inflation trade-off — can reduce U_n permanently 
 without inflationary consequences.
 </p>
 </div>
 </div>
 </div>

 <AnalysisBlock title="Critical Evaluation: Expectations-Augmented Phillips Curve" type="evaluation">
 <div className="space-y-3">
 <p className="text-sm">
 <strong>Friedman's Critique:</strong> The short-run trade-off is only temporary. 
 If governments try to hold unemployment below <InlineMath math="U_n" />, workers 
 will eventually adjust their inflation expectations upward, causing the SRPC to 
 <strong> shift up</strong>.
 </p>
 <div className="p-3 bg-muted/30 rounded-lg">
 <BlockMath math="\pi = \pi^e - \beta(U - U_n) + \epsilon" />
 <p className="text-xs text-muted-foreground mt-2 text-center">
 Expectations-Augmented Phillips Curve: Actual inflation depends on expected 
 inflation (<InlineMath math="\pi^e" />), the output gap, and supply shocks.
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-3 mt-3">
 <div className="p-3 bg-destructive/10 rounded-lg">
 <h6 className="font-semibold text-xs text-destructive mb-1">Accelerationist Hypothesis</h6>
 <p className="text-xs text-muted-foreground">
 If U is held below U_n, inflation doesn't just rise — it <strong>accelerates</strong>. 
 Each round of higher π feeds into higher π^e, requiring ever-higher inflation 
 to maintain low unemployment.
 </p>
 </div>
 <div className="p-3 bg-cambridge-green/10 rounded-lg">
 <h6 className="font-semibold text-xs text-cambridge-green mb-1">Policy Credibility</h6>
 <p className="text-xs text-muted-foreground">
 If the central bank has <strong>credible inflation-fighting commitment</strong>, 
 expectations remain anchored. This allows the economy to reach U_n with stable, 
 low inflation — the best of both worlds.
 </p>
 </div>
 </div>
 <div className="p-3 bg-primary/10 rounded-lg mt-2">
 <p className="text-xs">
 <strong>Examiner Conclusion:</strong> The SRPC trade-off is exploitable only in the 
 short run. Attempts to permanently reduce unemployment below U_n lead to accelerating 
 inflation. The only way to sustainably reduce unemployment is through <strong>supply-side 
 policies</strong> that lower the natural rate itself.
 </p>
 </div>
 </div>
 </AnalysisBlock>
 </div>
 );
};

/* ============================================
 PHILLIPS CURVE DIAGRAM COMPONENT
 ============================================ */
const PhillipsCurveDiagram: React.FC =  => {
 const containerRef = useRef<HTMLDivElement>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect( => {
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
 return  => observer.disconnect;
 }, []);

 const width = 520;
 const height = 380;
 const margin = { top: 40, right: 40, bottom: 70, left: 80 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 // Natural Rate of Unemployment
 const Un = 50;
 
 // SRPC curve - downward sloping (L-shaped curve)
 const srpcPath = `M ${xScale(10)} ${yScale(85)} 
 Q ${xScale(30)} ${yScale(50)} ${xScale(50)} ${yScale(30)}
 Q ${xScale(70)} ${yScale(15)} ${xScale(90)} ${yScale(8)}`;

 // LRPC - vertical line at Un
 const lrpcPath = `M ${xScale(Un)} ${yScale(10)} L ${xScale(Un)} ${yScale(90)}`;

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { 
 pathLength: 1, 
 opacity: 1,
 transition: { duration: 1.2, ease: "easeInOut" as const }
 }
 };

 return (
 <div ref={containerRef} className="glass-card p-6 rounded-xl">
 <div className="flex items-center justify-between mb-4">
 <div>
 <h3 className="font-serif text-lg text-foreground">SRPC vs. LRPC: The Inflation-Unemployment Trade-off</h3>
 <p className="text-xs text-muted-foreground mt-1">Figure 7.1: Short-Run and Long-Run Phillips Curves</p>
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
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

 {/* Axis labels */}
 <text
 x={width / 2}
 y={height - 15}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 >
 Unemployment Rate (U)
 </text>
 <text
 x={25}
 y={height / 2}
 textAnchor="middle"
 fill="hsl(var(--silver-bright))"
 className="text-sm font-serif"
 transform={`rotate(-90, 25, ${height / 2})`}
 >
 Inflation Rate (π)
 </text>

 {/* LRPC - Vertical Line */}
 <motion.path
 d={lrpcPath}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth={3}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text
 x={xScale(Un) + 10}
 y={yScale(88)}
 fill="hsl(var(--cambridge-orange))"
 className="text-sm font-semibold"
 >
 LRPC
 </text>

 {/* SRPC - Downward Sloping Curve */}
 <motion.path
 d={srpcPath}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth={3}
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 <text
 x={xScale(92)}
 y={yScale(8)}
 fill="hsl(var(--cambridge-cyan))"
 className="text-sm font-semibold"
 >
 SRPC
 </text>

 {/* Natural Rate Label */}
 <motion.line
 x1={xScale(Un)}
 y1={margin.top + chartHeight}
 x2={xScale(Un)}
 y2={margin.top + chartHeight + 15}
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth={2}
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: { opacity: 0 }}
 transition={{ delay: 1.5 }}
 />
 <text
 x={xScale(Un)}
 y={margin.top + chartHeight + 30}
 textAnchor="middle"
 fill="hsl(var(--cambridge-orange))"
 className="text-xs font-bold"
 >
 Uₙ (Natural Rate)
 </text>

 {/* Equilibrium Point */}
 <motion.circle
 cx={xScale(Un)}
 cy={yScale(30)}
 r={6}
 fill="hsl(var(--cambridge-green))"
 initial={{ scale: 0 }}
 animate={isVisible ? { scale: 1 }: { scale: 0 }}
 transition={{ duration: 0.4, delay: 1.4 }}
 />
 <text
 x={xScale(Un) + 15}
 y={yScale(30) + 4}
 fill="hsl(var(--cambridge-green))"
 className="text-xs font-medium"
 >
 E (Long-Run Equilibrium)
 </text>

 {/* Trade-off zone annotation */}
 <motion.rect
 x={xScale(15)}
 y={yScale(70)}
 width={xScale(45) - xScale(15)}
 height={yScale(40) - yScale(70)}
 fill="hsl(var(--cambridge-cyan))"
 opacity={0.1}
 rx={4}
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.15 }: { opacity: 0 }}
 transition={{ delay: 1.6 }}
 />
 <text
 x={(xScale(15) + xScale(45)) / 2}
 y={(yScale(70) + yScale(40)) / 2}
 textAnchor="middle"
 dominantBaseline="middle"
 fill="hsl(var(--cambridge-cyan))"
 className="text-[9px] font-medium"
 >
 SR Trade-off Zone
 </text>
 </svg>

 {/* Legend */}
 <div className="mt-4 flex flex-wrap gap-4 text-xs">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-cambridge-cyan" />
 <span className="text-muted-foreground">Short-Run Phillips Curve (SRPC)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-cambridge-orange" />
 <span className="text-muted-foreground">Long-Run Phillips Curve (LRPC)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full bg-cambridge-green" />
 <span className="text-muted-foreground">Long-Run Equilibrium at Uₙ</span>
 </div>
 </div>

 {/* Explanation */}
 <div className="mt-4 p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground">
 <p>
 <strong>Key Insight:</strong> In the <strong>short run</strong>, policymakers face a trade-off — 
 reducing unemployment (<InlineMath math="U" />) below the natural rate increases inflation 
 (<InlineMath math="\pi" />). In the <strong>long run</strong>, the economy gravitates back to 
 <InlineMath math="U_n" /> regardless of inflation — the LRPC is vertical. Only supply-side 
 policies can shift <InlineMath math="U_n" /> itself.
 </p>
 </div>
 </div>
 );
};

export default InterconnectednessSection;
