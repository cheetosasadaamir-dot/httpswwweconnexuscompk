import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import OutputGapsDiagram from './OutputGapsDiagram';
import PolicyConflictsDiagram from './PolicyConflictsDiagram';
import ClassicalUnemploymentDiagram from './ClassicalUnemploymentDiagram';
import LafferCurveDiagram from './LafferCurveDiagram';

const PolicyEffectivenessSection: React.FC =  => {
 const [activeTab, setActiveTab] = useState<'gaps' | 'conflicts' | 'laffer' | 'labour'>('gaps');

 return (
 <div className="space-y-6">
 {/* Section Header */}
 <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary">
 <div className="flex items-center gap-2 mb-3">
 <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold">
 A2 Specialist – Policy Effectiveness & Conflicts
 </span>
 </div>
 <h2 className="font-serif text-2xl text-foreground mb-2">
 Policy Effectiveness & Macroeconomic Conflicts
 </h2>
 <p className="text-muted-foreground text-sm leading-relaxed">
 This advanced section examines how macroeconomic objectives conflict with each other, the role of 
 output gaps in determining policy effectiveness, the Laffer Curve's implications for taxation, 
 and how labour market interventions can lead to government failure.
 </p>
 </div>

 {/* Navigation Tabs */}
 <div className="flex flex-wrap gap-2">
 {[
 { id: 'gaps', label: 'Output Gaps', icon: '📊' },
 { id: 'conflicts', label: 'Policy Conflicts', icon: '⚡' },
 { id: 'laffer', label: 'Laffer Curve', icon: '📈' },
 { id: 'labour', label: 'Labour Market', icon: '👷' },
 ].map((tab) => (
 <button
 key={tab.id}
 onClick={ => setActiveTab(tab.id as typeof activeTab)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
 activeTab === tab.id
 ? 'bg-primary text-primary-foreground': 'bg-muted/50 text-muted-foreground hover:bg-muted'
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
 {activeTab === 'gaps' && <OutputGapsContent />}
 {activeTab === 'conflicts' && <PolicyConflictsContent />}
 {activeTab === 'laffer' && <LafferCurveContent />}
 {activeTab === 'labour' && <LabourMarketContent />}
 </motion.div>

 {/* Government Failure Analysis */}
 <GovernmentFailureSection />
 </div>
 );
};

/* ============================================
 OUTPUT GAPS CONTENT
 ============================================ */
const OutputGapsContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="Output Gaps: Definition & Analysis" className="mb-4">
 <p className="text-sm text-muted-foreground mb-3">
 An <strong>output gap</strong> measures the difference between actual output (<InlineMath math="Y" />) 
 and potential output (<InlineMath math="Y_f" />). It determines both inflationary pressure and 
 the effectiveness of demand-side policies.
 </p>
 <BlockMath math="\text{Output Gap} = \frac{Y - Y_f}{Y_f} \times 100\%" />
 </NoteCard>

 <div className="grid md:grid-cols-2 gap-4">
 {/* Negative Output Gap */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-cyan">
 <h4 className="font-serif text-lg text-cambridge-cyan mb-2">Negative Output Gap</h4>
 <p className="text-sm text-muted-foreground mb-3">
 Occurs when actual output (<InlineMath math="Y" />) is <strong>less than</strong> potential 
 output (<InlineMath math="Y_f" />). This indicates:
 </p>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-3">
 <li><strong>Spare capacity</strong> exists in the economy</li>
 <li>Resources (labour, capital) are <strong>underutilized</strong></li>
 <li><strong>Downward pressure</strong> on inflation (demand deficiency)</li>
 <li>Cyclical unemployment is high</li>
 </ul>
 <div className="p-3 bg-cambridge-cyan/10 rounded-lg">
 <p className="text-xs font-mono text-cambridge-cyan">
 <strong>Policy Implication:</strong> Expansionary fiscal/monetary policy is effective 
 — ↑AD increases real output without significant inflation.
 </p>
 </div>
 </div>

 {/* Positive Output Gap */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-cambridge-orange">
 <h4 className="font-serif text-lg text-cambridge-orange mb-2">Positive Output Gap</h4>
 <p className="text-sm text-muted-foreground mb-3">
 Occurs when actual output (<InlineMath math="Y" />) <strong>exceeds</strong> potential 
 output (<InlineMath math="Y_f" />). This indicates:
 </p>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-3">
 <li>Economy is <strong>overheating</strong></li>
 <li>Resources used beyond normal capacity (overtime, over-utilization)</li>
 <li><strong>Upward pressure</strong> on inflation (demand-pull)</li>
 <li>Common in fast-growing economies like <strong>China and India</strong></li>
 </ul>
 <div className="p-3 bg-cambridge-orange/10 rounded-lg">
 <p className="text-xs font-mono text-cambridge-orange">
 <strong>Policy Implication:</strong> Contractionary policy needed — ↓AD reduces 
 inflationary pressure but also slows growth.
 </p>
 </div>
 </div>
 </div>

 {/* Output Gaps Diagram */}
 <OutputGapsDiagram />

 <AnalysisBlock title="Diagram Analysis: Output Gaps & AD Effectiveness" type="analysis">
 <div className="space-y-3">
 <p className="text-sm">
 On an AD/AS diagram, a <strong>negative output gap</strong> corresponds to equilibrium 
 on the horizontal (Keynesian) section of the LRAS curve. Here, an increase in AD 
 (from <InlineMath math="AD_1" /> to <InlineMath math="AD_2" />) raises real output 
 from <InlineMath math="Y_1" /> to <InlineMath math="Y_2" /> with <strong>no change in 
 the price level</strong>.
 </p>
 <p className="text-sm">
 A <strong>positive output gap</strong> corresponds to equilibrium on the vertical section 
 of the LRAS. Further increases in AD become <strong>purely inflationary</strong>: 
 <InlineMath math="\Delta Y = 0" /> but <InlineMath math="\Delta P > 0" />.
 </p>
 <div className="p-3 bg-primary/10 rounded-lg">
 <p className="text-xs font-medium text-primary">
 <strong>Examiner Focus:</strong> Always identify the current output gap before evaluating 
 policy effectiveness. Expansionary policy in a positive output gap causes inflation 
 without growth — a critical evaluation point.
 </p>
 </div>
 </div>
 </AnalysisBlock>
 </div>
 );
};

/* ============================================
 POLICY CONFLICTS CONTENT
 ============================================ */
const PolicyConflictsContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="Conflicts Between Policy Objectives" className="mb-4">
 <p className="text-sm text-muted-foreground">
 Governments cannot simultaneously achieve all macroeconomic objectives. Trade-offs emerge 
 because policies that improve one objective may worsen another. These conflicts create 
 the <strong>"stop-go" cycle</strong> of macroeconomic management.
 </p>
 </NoteCard>

 {/* Policy Conflicts Diagram */}
 <PolicyConflictsDiagram />

 {/* Detailed Conflict Analysis */}
 <div className="grid md:grid-cols-2 gap-4">
 <div className="glass-card p-4 rounded-xl">
 <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
 <span className="text-lg">🔥</span> Growth vs. Inflation
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 A growing economy experiences inflationary pressure when <InlineMath math="AD" /> increases 
 faster than <InlineMath math="AS" />. This is especially true with a <strong>positive output gap</strong>.
 </p>
 <div className="p-2 bg-muted/30 rounded text-xs font-mono">
 ↑Y → ↑AD → Positive Output Gap → ↑P (demand-pull inflation)
 </div>
 </div>

 <div className="glass-card p-4 rounded-xl">
 <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
 <span className="text-lg">🌍</span> Growth vs. Current Account
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 Higher incomes lead to increased import spending via the <strong>marginal propensity to import</strong> (MPM). 
 In the UK, consumers have a high MPM, worsening the trade deficit during growth.
 </p>
 <div className="p-2 bg-muted/30 rounded text-xs font-mono">
 ↑Y → ↑Disposable Income → ↑M (MPM × ΔY) → ↓(X-M)
 </div>
 </div>

 <div className="glass-card p-4 rounded-xl">
 <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
 <span className="text-lg">👷</span> Unemployment vs. Inflation
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 The <strong>Short-Run Phillips Curve</strong> shows an inverse relationship. Reducing unemployment 
 via ↑AD creates labour shortages, pushing wages and prices up.
 </p>
 <div className="p-2 bg-muted/30 rounded text-xs font-mono">
 ↓U (via ↑AD) → Labour shortages → ↑W → ↑Unit Costs → ↑P
 </div>
 </div>

 <div className="glass-card p-4 rounded-xl">
 <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
 <span className="text-lg">💰</span> Growth vs. Budget Deficit
 </h5>
 <p className="text-xs text-muted-foreground mb-2">
 While growth usually improves the budget via tax revenue, <strong>stimulus spending</strong> 
 (e.g., infrastructure) can increase the deficit in the short term.
 </p>
 <div className="p-2 bg-muted/30 rounded text-xs font-mono">
 ↑G (to boost Y) → ↑Budget Deficit (short-run) → ↑National Debt
 </div>
 </div>
 </div>

 <ExamTipBox title="Critical Evaluation Point">
 <p className="text-xs">
 The existence of policy conflicts means governments must <strong>prioritise</strong>. The choice of 
 priority is as much a <strong>political decision</strong> as an economic one. Supply-side policies 
 offer the only genuine "escape" from these trade-offs, as they shift LRAS rightward — enabling 
 higher growth without inflation — but only in the <strong>long run</strong>.
 </p>
 </ExamTipBox>
 </div>
 );
};

/* ============================================
 LAFFER CURVE CONTENT
 ============================================ */
const LafferCurveContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="The Laffer Curve: Tax Rate vs. Tax Revenue" className="mb-4">
 <p className="text-sm text-muted-foreground mb-3">
 The <strong>Laffer Curve</strong> illustrates the relationship between tax rates and tax revenue. 
 It shows that revenue does not rise indefinitely with tax rates — beyond a certain point, higher 
 rates actually <strong>reduce</strong> total revenue.
 </p>
 <BlockMath math="T_{\text{revenue}} = f(\text{Tax Rate}), \quad \frac{\partial T}{\partial r} > 0 \text{ for } r < T^*, \quad \frac{\partial T}{\partial r} < 0 \text{ for } r > T^*" />
 </NoteCard>

 {/* Laffer Curve Diagram */}
 <LafferCurveDiagram />

 <div className="grid md:grid-cols-2 gap-4">
 <div className="glass-card p-4 rounded-xl border-l-4 border-l-cambridge-green">
 <h5 className="font-semibold text-sm text-cambridge-green mb-2">
 The Optimum Point (T*)
 </h5>
 <p className="text-xs text-muted-foreground">
 At point <InlineMath math="T^*" />, tax revenue is <strong>maximised</strong>. Up until 
 this point, increasing tax rates increases government revenue. Beyond this point, the 
 <strong> disincentive effect</strong> dominates.
 </p>
 </div>

 <div className="glass-card p-4 rounded-xl border-l-4 border-l-destructive">
 <h5 className="font-semibold text-sm text-destructive mb-2">
 Disincentive Effect
 </h5>
 <p className="text-xs text-muted-foreground">
 Beyond <InlineMath math="T^*" />, higher tax rates <strong>discourage work and investment</strong>. 
 Workers reduce hours or evade taxes; firms relocate or reduce investment. Total tax revenue 
 <strong> falls</strong> despite higher rates.
 </p>
 </div>
 </div>

 <AnalysisBlock title="Critical Evaluation: Laffer Curve Limitations" type="evaluation">
 <div className="space-y-3">
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 bg-destructive/10 rounded-lg">
 <h6 className="font-semibold text-xs text-destructive mb-1">Empirical Uncertainty</h6>
 <p className="text-xs text-muted-foreground">
 The <strong>exact location of T*</strong> is unknown and varies by country, tax type, 
 and time period. Governments cannot be certain whether current rates are above or below 
 the optimum.
 </p>
 </div>
 <div className="p-3 bg-cambridge-orange/10 rounded-lg">
 <h6 className="font-semibold text-xs text-cambridge-orange mb-1">Short-Run vs. Long-Run</h6>
 <p className="text-xs text-muted-foreground">
 Behavioural responses to tax changes take time. A tax cut may initially reduce revenue 
 before any supply-side growth effects materialise. The curve may have different shapes 
 for different time horizons.
 </p>
 </div>
 </div>
 <div className="p-3 bg-primary/10 rounded-lg">
 <p className="text-xs">
 <strong>Policy Implication:</strong> Laffer argued that tax rates in many countries are 
 <strong> too high</strong>, discouraging work and enterprise. Reducing rates could paradoxically 
 <strong> increase</strong> revenue while stimulating growth. This was the theoretical basis 
 for Reagan's tax cuts in the 1980s (supply-side economics).
 </p>
 </div>
 </div>
 </AnalysisBlock>
 </div>
 );
};

/* ============================================
 LABOUR MARKET CONTENT
 ============================================ */
const LabourMarketContent: React.FC =  => {
 return (
 <div className="space-y-4">
 <NoteCard title="Labour Market Intervention: The National Minimum Wage" className="mb-4">
 <p className="text-sm text-muted-foreground">
 The <strong>National Minimum Wage (NMW)</strong> is a price floor in the labour market. 
 While intended to raise living standards, it can lead to <strong>government failure</strong> 
 if it creates unemployment — a case of <strong>classical (real wage) unemployment</strong>.
 </p>
 </NoteCard>

 {/* Classical Unemployment Diagram */}
 <ClassicalUnemploymentDiagram />

 <AnalysisBlock title="Diagram Analysis: Minimum Wage & Unemployment" type="analysis">
 <div className="space-y-3">
 <p className="text-sm">
 When the minimum wage (<InlineMath math="W_2" />) is set <strong>above</strong> the 
 equilibrium wage (<InlineMath math="W_e" />):
 </p>
 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
 <li>Quantity of labour <strong>demanded</strong> falls to <InlineMath math="N_3" /></li>
 <li>Quantity of labour <strong>supplied</strong> rises to <InlineMath math="N_2" /></li>
 <li>Unemployment = <InlineMath math="N_2 - N_3" /> (excess supply of labour)</li>
 </ul>
 <div className="p-3 bg-muted/30 rounded-lg">
 <BlockMath math="\text{Unemployment} = L^S(W_2) - L^D(W_2) = N_2 - N_3 > 0" />
 </div>
 <p className="text-sm text-muted-foreground">
 This is <strong>classical unemployment</strong> — caused by wages being held above 
 the market-clearing level. It can result from <strong>minimum wage legislation</strong> 
 or <strong>trade union bargaining power</strong>.
 </p>
 </div>
 </AnalysisBlock>

 <AnalysisBlock title="Critical Evaluation: Does the NMW Cause Unemployment?" type="evaluation">
 <div className="space-y-3">
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 bg-cambridge-green/10 rounded-lg">
 <h6 className="font-semibold text-xs text-cambridge-green mb-1">Arguments Against Unemployment Effect</h6>
 <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
 <li>Monopsony power: firms pay below competitive wage</li>
 <li>Efficiency wage theory: higher wages → higher productivity</li>
 <li>Demand stimulus: low-paid workers have high MPC</li>
 <li><strong>UK evidence:</strong> no significant unemployment increase post-NMW</li>
 </ul>
 </div>
 <div className="p-3 bg-destructive/10 rounded-lg">
 <h6 className="font-semibold text-xs text-destructive mb-1">Arguments For Unemployment Effect</h6>
 <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
 <li>Classical model: wages above equilibrium → excess supply</li>
 <li>Small firms may lack ability to absorb higher costs</li>
 <li>Regional variation: NMW may exceed equilibrium in some areas</li>
 <li>Youth unemployment may be higher (lower productivity)</li>
 </ul>
 </div>
 </div>
 <div className="p-3 bg-primary/10 rounded-lg">
 <p className="text-xs">
 <strong>Examiner Conclusion:</strong> The NMW could lead to <strong>government failure</strong> 
 if it raises unemployment instead of living standards. However, empirical evidence from the UK 
 suggests <strong>no significant disemployment effect</strong>. The outcome depends on the 
 elasticity of labour demand and the degree of employer market power (monopsony).
 </p>
 </div>
 </div>
 </AnalysisBlock>
 </div>
 );
};

/* ============================================
 GOVERNMENT FAILURE SECTION
 ============================================ */
const GovernmentFailureSection: React.FC =  => {
 return (
 <div className="glass-card p-6 rounded-xl border-l-4 border-l-destructive">
 <h3 className="font-serif text-xl text-foreground mb-4">
 Government Failure in Macroeconomic Policy
 </h3>
 <p className="text-sm text-muted-foreground mb-4">
 <strong>Definition:</strong> Government failure occurs when intervention worsens existing market failure 
 or creates new inefficiencies, resulting in a <strong>net welfare loss</strong> to society. This can 
 occur through ineffective intervention or unintended harmful consequences.
 </p>

 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-sm mb-2">1. Unintended Consequences</h5>
 <p className="text-xs text-muted-foreground">
 Consumers and producers react in unexpected ways to policy. Policies can be undermined 
 by behavioural responses, making them expensive to implement and difficult to achieve 
 their original goals.
 </p>
 </div>
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-sm mb-2">2. Excessive Administrative Costs</h5>
 <p className="text-xs text-muted-foreground">
 The social benefits of a policy may not justify the financial cost of administration. 
 Policies may cost more than anticipated. Governments must evaluate whether policies 
 represent good value for money.
 </p>
 </div>
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-sm mb-2">3. Information Gaps</h5>
 <p className="text-xs text-muted-foreground">
 Policies may be decided without perfect information. Full cost-benefit analysis is 
 time-consuming and expensive. Assumptions must be made, which may prove incorrect.
 </p>
 </div>
 <div className="p-4 bg-muted/30 rounded-lg">
 <h5 className="font-semibold text-sm mb-2">4. Distortion of Price Signals</h5>
 <p className="text-xs text-muted-foreground">
 Government subsidies distort the free market mechanism. This can lead to inefficient 
 resource allocation — e.g., subsidising failing industries with few prospects.
 </p>
 </div>
 </div>

 <ExamTipBox title="Senior Examiner's Note">
 <p className="text-xs">
 When evaluating <strong>any</strong> government intervention, always consider the risk of 
 government failure. The theoretical benefits of a policy must be weighed against implementation 
 difficulties, time lags, unintended consequences, and the possibility that intervention makes 
 the situation worse. <strong>"The cure may be worse than the disease."</strong>
 </p>
 </ExamTipBox>
 </div>
 );
};

export default PolicyEffectivenessSection;
