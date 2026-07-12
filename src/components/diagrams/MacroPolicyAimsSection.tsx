import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Currency Market Depreciation Diagram - Supply Shift Mechanism
const CurrencyDepreciationDiagram =  => {
 const [showShift, setShowShift] = useState(false);
 
 const width = 480, height = 360;
 const margin = { top: 45, right: 35, bottom: 55, left: 65 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 // Price levels
 const P1 = margin.top + chartHeight * 0.3;
 const P2 = margin.top + chartHeight * 0.5;
 const P3 = margin.top + chartHeight * 0.65;
 
 // Quantity levels
 const Q1 = margin.left + chartWidth * 0.35;
 const Q3 = margin.left + chartWidth * 0.65;

 return (
 <div className="glass-card p-4 my-4">
 <div className="flex justify-between items-center mb-3">
 <h3 className="font-serif text-lg text-gradient">Currency Market: Supply-Side Depreciation</h3>
 <button
 onClick={ => setShowShift(!showShift)}
 className={`px-3 py-1 text-xs rounded-full border transition-all ${showShift ? 'bg-cambridge-orange text-white': 'border-cambridge-orange/50 hover:bg-cambridge-orange/10'}`}
 >
 {showShift ? 'Reset': 'Central Bank Sells Currency'}
 </button>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto">
 <defs>
 <marker id="arrow-curr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
 </marker>
 <marker id="arrow-shift" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
 <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--cambridge-orange))" />
 </marker>
 </defs>

 {/* Axes */}
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-curr)" />
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left} y2={margin.top} stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#arrow-curr)" />

 {/* Axis Labels */}
 <text x={margin.left + chartWidth / 2} y={height - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Quantity of Domestic Currency</text>
 <text x={18} y={margin.top + chartHeight / 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600" transform={`rotate(-90, 18, ${margin.top + chartHeight / 2})`}>Exchange Rate (Price)</text>

 {/* Demand Curve - Fixed */}
 <motion.path
 d={`M ${margin.left + 25} ${margin.top + 30} Q ${margin.left + chartWidth * 0.5} ${margin.top + chartHeight * 0.5} ${margin.left + chartWidth - 25} ${margin.top + chartHeight - 30}`}
 fill="none"
 stroke="hsl(var(--cambridge-cyan))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8 }}
 />
 <text x={margin.left + chartWidth - 15} y={margin.top + chartHeight - 25} fill="hsl(var(--cambridge-cyan))" fontSize="12" fontWeight="700">D</text>

 {/* Original Supply Curve S1 */}
 <motion.path
 d={`M ${margin.left + 25} ${margin.top + chartHeight - 30} Q ${margin.left + chartWidth * 0.35} ${margin.top + chartHeight * 0.5} ${margin.left + chartWidth - 40} ${margin.top + 35}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="2.5"
 strokeDasharray={showShift ? "6,4": "0"}
 opacity={showShift ? 0.5: 1}
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 />
 <text x={margin.left + chartWidth - 30} y={margin.top + 30} fill="hsl(var(--cambridge-orange))" fontSize="12" fontWeight="700" opacity={showShift ? 0.5: 1}>S₁</text>

 {/* New Supply Curve S2 (Shifted Right) */}
 {showShift && (
 <>
 <motion.path
 d={`M ${margin.left + 60} ${margin.top + chartHeight - 30} Q ${margin.left + chartWidth * 0.55} ${margin.top + chartHeight * 0.5} ${margin.left + chartWidth - 15} ${margin.top + 50}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="2.5"
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6 }}
 />
 <motion.text 
 x={margin.left + chartWidth - 5} 
 y={margin.top + 45} 
 fill="hsl(var(--cambridge-orange))" 
 fontSize="12" 
 fontWeight="700"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.3 }}
 >S₂</motion.text>

 {/* Shift Arrow */}
 <motion.path
 d={`M ${margin.left + chartWidth * 0.45} ${margin.top + chartHeight * 0.38} L ${margin.left + chartWidth * 0.58} ${margin.top + chartHeight * 0.42}`}
 fill="none"
 stroke="hsl(var(--cambridge-orange))"
 strokeWidth="2"
 markerEnd="url(#arrow-shift)"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 0.5, delay: 0.4 }}
 />
 </>
 )}

 {/* Original Equilibrium E1 at P2, Q1 */}
 <motion.circle 
 cx={Q1} 
 cy={P2} 
 r="5" 
 fill={showShift ? "hsl(var(--muted-foreground))": "hsl(var(--foreground))"}
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.6 }}
 />
 {!showShift && (
 <text x={Q1 + 10} y={P2 - 8} fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">E₁</text>
 )}

 {/* New Equilibrium E2 at P3, Q3 */}
 {showShift && (
 <>
 <motion.circle 
 cx={Q3} 
 cy={P3} 
 r="5" 
 fill="hsl(var(--primary))"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: 0.8 }}
 />
 <motion.text 
 x={Q3 + 10} 
 y={P3 - 8} 
 fill="hsl(var(--primary))" 
 fontSize="10" 
 fontWeight="600"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.9 }}
 >E₂</motion.text>

 {/* Dashed Lines to Axes */}
 <motion.line x1={Q1} y1={P2} x2={margin.left} y2={P2} stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
 <motion.line x1={Q3} y1={P3} x2={margin.left} y2={P3} stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
 <motion.line x1={Q1} y1={P2} x2={Q1} y2={margin.top + chartHeight} stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
 <motion.line x1={Q3} y1={P3} x2={Q3} y2={margin.top + chartHeight} stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4,4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />

 {/* Price Labels */}
 <text x={margin.left - 8} y={P2 + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="10">P₂</text>
 <text x={margin.left - 8} y={P3 + 4} textAnchor="end" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">P₃</text>
 <text x={Q1} y={margin.top + chartHeight + 14} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Q₁</text>
 <text x={Q3} y={margin.top + chartHeight + 14} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="600">Q₃</text>

 {/* Depreciation Arrow */}
 <motion.path
 d={`M ${margin.left - 35} ${P2 + 5} L ${margin.left - 35} ${P3 - 5}`}
 fill="none"
 stroke="hsl(var(--destructive))"
 strokeWidth="2"
 markerEnd="url(#arrow-curr)"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ delay: 1 }}
 />
 <motion.text
 x={margin.left - 48}
 y={(P2 + P3) / 2}
 textAnchor="middle"
 fill="hsl(var(--destructive))"
 fontSize="8"
 fontWeight="600"
 transform={`rotate(-90, ${margin.left - 48}, ${(P2 + P3) / 2})`}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.1 }}
 >Depreciation</motion.text>
 </>
 )}
 </svg>

 <div className="mt-3 p-3 bg-muted/30 rounded-lg">
 <p className="text-xs text-muted-foreground">
 <strong className="text-foreground">Mechanism:</strong> When the central bank <em>sells</em> the domestic currency, market supply shifts from <InlineMath>{'S_1 \\to S_2'}</InlineMath>. This increases quantity (<InlineMath>{'Q_1 \\to Q_3'}</InlineMath>) and lowers the exchange rate (<InlineMath>{'P_2 \\to P_3'}</InlineMath>), causing a <strong>depreciation</strong>. Exports become more price-competitive internationally.
 </p>
 </div>
 </div>
 );
};

const MacroPolicyAimsSection =  => {
 return (
 <div className="space-y-4">
 <div className="mb-3">
 <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-medium">
 [A2 Specialist - Macro Policy Aims]
 </span>
 </div>

 <Tabs defaultValue="inflation" className="w-full">
 <TabsList className="grid w-full grid-cols-5 h-auto">
 <TabsTrigger value="inflation" className="text-[10px] px-1 py-1.5">Inflation</TabsTrigger>
 <TabsTrigger value="bop" className="text-[10px] px-1 py-1.5">BoP</TabsTrigger>
 <TabsTrigger value="exchange" className="text-[10px] px-1 py-1.5">Exchange</TabsTrigger>
 <TabsTrigger value="unemployment" className="text-[10px] px-1 py-1.5">Employment</TabsTrigger>
 <TabsTrigger value="growth" className="text-[10px] px-1 py-1.5">Growth</TabsTrigger>
 </TabsList>

 {/* Inflation Targets */}
 <TabsContent value="inflation" className="space-y-3 mt-3">
 <NoteCard title="Inflation Target: The UK 2% CPI Standard" type="definition">
 <p className="text-xs text-muted-foreground mb-2">
 In the UK, the government inflation target is <strong className="text-primary">2%</strong>, measured with CPI. This aims to provide <strong>price stability</strong> for firms and consumers, enabling long-run economic decisions.
 </p>
 <div className="p-2 bg-primary/10 rounded-lg mb-2">
 <p className="text-xs font-mono text-center">
 <InlineMath>{'\\pi^* = 2\\% \\pm 1\\%'}</InlineMath>
 </p>
 </div>
 <div className="text-xs text-muted-foreground space-y-1">
 <p><strong className="text-foreground">Accountability Mechanism:</strong> If the inflation rate falls <strong>1% outside this target</strong> (i.e., below 1% or above 3%), the Governor of the Bank of England must write an <em>open letter</em> to the Chancellor of the Exchequer explaining:</p>
 <ul className="list-disc list-inside ml-2 space-y-0.5">
 <li>Why the deviation occurred</li>
 <li>What the Bank intends to do about it</li>
 <li>The expected timeline for returning to target</li>
 </ul>
 </div>
 </NoteCard>

 <AnalysisBlock title="Why 2%? Economic Rationale" type="analysis">
 <div className="grid md:grid-cols-2 gap-2 text-xs">
 <div className="p-2 bg-cambridge-green/10 rounded-lg">
 <h5 className="font-semibold text-cambridge-green mb-1">Price Stability Benefits</h5>
 <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
 <li>Firms can plan long-term investment</li>
 <li>Consumers make informed spending decisions</li>
 <li>Maintains international competitiveness</li>
 <li>Preserves real value of savings</li>
 </ul>
 </div>
 <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
 <h5 className="font-semibold text-cambridge-cyan mb-1">Why Not 0%?</h5>
 <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
 <li>Risk of deflation (debt burden increases)</li>
 <li>Nominal wage rigidity (easier to cut real wages)</li>
 <li>Allows relative price adjustments</li>
 <li><InlineMath>{'r = i - \\pi^e'}</InlineMath> — some inflation helps monetary policy</li>
 </ul>
 </div>
 </div>
 </AnalysisBlock>
 </TabsContent>

 {/* Balance of Payments */}
 <TabsContent value="bop" className="space-y-3 mt-3">
 <NoteCard title="Balance of Payments Equilibrium" type="definition">
 <p className="text-xs text-muted-foreground mb-2">
 Governments aim for the current account to be <strong>"satisfactory"</strong> — usually near to <strong>equilibrium</strong>, without a large deficit.
 </p>
 <div className="p-2 bg-primary/10 rounded-lg mb-2">
 <p className="text-xs text-center">
 <InlineMath>{'CA \\approx 0 \\implies X - M + \\text{Net Primary} + \\text{Net Secondary} \\approx 0'}</InlineMath>
 </p>
 </div>
 <p className="text-xs text-muted-foreground">
 <strong className="text-foreground">Sustainability Criterion:</strong> A BoP equilibrium on the current account means the country can <em>sustainably finance</em> its international obligations, which is important for <strong>long-term growth</strong>.
 </p>
 </NoteCard>

 <div className="p-3 bg-cambridge-orange/10 border border-cambridge-orange/30 rounded-lg">
 <h5 className="font-semibold text-cambridge-orange mb-1 text-sm">Why "Satisfactory" Rather Than Zero?</h5>
 <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
 <li><strong>Developing economies</strong> may run deficits to import capital goods for industrialization</li>
 <li><strong>Surplus economies</strong> (e.g., Germany, China) export capital abroad</li>
 <li>Short-term deficits can be financed by capital inflows</li>
 <li>The <strong>Financial Account</strong> automatically offsets Current Account imbalances: <InlineMath>{'CA + FA + CpA = 0'}</InlineMath></li>
 </ul>
 </div>
 </TabsContent>

 {/* Exchange Rates */}
 <TabsContent value="exchange" className="space-y-3 mt-3">
 <NoteCard title="Exchange Rate Manipulation" type="theory">
 <p className="text-xs text-muted-foreground mb-2">
 <strong className="text-foreground">Definition:</strong> The exchange rate of a currency is the weight of one currency relative to another.
 </p>
 <p className="text-xs text-muted-foreground mb-2">
 Governments might try to <strong>influence their currency</strong>, such as by maintaining a <strong>fixed exchange rate</strong>. For example, China has previously kept the Yuan undervalued by buying US dollar assets to make their exports relatively cheaper.
 </p>
 </NoteCard>

 <CurrencyDepreciationDiagram />

 <AnalysisBlock title="Chain of Reasoning: Currency Depreciation via Supply Manipulation" type="analysis">
 <div className="space-y-2 text-xs">
 <div className="p-2 bg-primary/10 rounded-lg">
 <p className="font-semibold mb-1">Mechanism (Fixed Exchange Rate System):</p>
 <p className="text-muted-foreground">
 The supply of the currency can be manipulated by the central bank, which can <strong>buy or sell</strong> the currency to change the price to where they want.
 </p>
 </div>
 <div className="font-mono text-center py-2 bg-muted/30 rounded-lg">
 <p><InlineMath>{'\\text{Central Bank sells domestic currency}'}</InlineMath></p>
 <p className="text-cambridge-orange">↓</p>
 <p><InlineMath>{'S_1 \\to S_2 \\text{ (Supply shifts right)}'}</InlineMath></p>
 <p className="text-cambridge-orange">↓</p>
 <p><InlineMath>{'Q_1 \\to Q_3 \\text{ (More currency in market)}'}</InlineMath></p>
 <p className="text-cambridge-orange">↓</p>
 <p><InlineMath>{'P_2 \\to P_3 \\text{ (Exchange rate falls)}'}</InlineMath></p>
 <p className="text-cambridge-orange">↓</p>
 <p><InlineMath>{'\\text{Currency depreciates} \\implies \\text{Exports more competitive}'}</InlineMath></p>
 </div>
 </div>
 </AnalysisBlock>

 <ExamTipBox title="Examiner Focus: Currency Manipulation">
 <p className="text-xs">
 When analyzing fixed exchange rate manipulation, always specify the direction: Central Bank <strong>SELLING</strong> domestic currency → ↑Supply → ↓Price → Depreciation. <strong>BUYING</strong> domestic currency → ↓Supply → ↑Price → Appreciation. Common error: confusing buying/selling with the effect on exchange rate.
 </p>
 </ExamTipBox>
 </TabsContent>

 {/* Unemployment */}
 <TabsContent value="unemployment" className="space-y-3 mt-3">
 <NoteCard title="Full Employment Objective" type="definition">
 <p className="text-xs text-muted-foreground mb-2">
 Governments aim to have <strong>as near to full employment as possible</strong>. They account for frictional unemployment by aiming for an unemployment rate of around <strong className="text-primary">3%</strong> (the natural rate).
 </p>
 <div className="p-2 bg-primary/10 rounded-lg mb-2">
 <p className="text-xs text-center">
 <InlineMath>{'U^* \\approx 3\\% \\text{ (Natural Rate of Unemployment)}'}</InlineMath>
 </p>
 </div>
 <p className="text-xs text-muted-foreground">
 The labour force should also be employed in <strong>productive work</strong> — underemployment and hidden unemployment represent resource misallocation.
 </p>
 </NoteCard>

 <div className="grid md:grid-cols-2 gap-2">
 <div className="p-3 bg-cambridge-cyan/10 rounded-lg">
 <h5 className="font-semibold text-cambridge-cyan mb-1 text-sm">Why Not 0%?</h5>
 <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
 <li><strong>Frictional unemployment</strong> is inevitable (job search)</li>
 <li><strong>Structural changes</strong> require reallocation</li>
 <li>Some voluntary unemployment is efficient</li>
 <li>0% would imply no labor mobility</li>
 </ul>
 </div>
 <div className="p-3 bg-cambridge-green/10 rounded-lg">
 <h5 className="font-semibold text-cambridge-green mb-1 text-sm">Components of <InlineMath>{'U^*'}</InlineMath></h5>
 <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
 <li>Frictional (1-2%)</li>
 <li>Structural (skills mismatch)</li>
 <li>Seasonal (predictable)</li>
 <li><strong>Excludes:</strong> Cyclical/Demand-deficient</li>
 </ul>
 </div>
 </div>
 </TabsContent>

 {/* Growth & Development */}
 <TabsContent value="growth" className="space-y-3 mt-3">
 <NoteCard title="Growth vs. Development Aims" type="concept">
 <p className="text-xs text-muted-foreground mb-2">
 Policy aims differ significantly between <strong>MEDCs</strong> and <strong>emerging/developing economies</strong>:
 </p>
 </NoteCard>

 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
 <h5 className="font-semibold text-primary mb-2 text-sm">MEDCs (e.g., UK)</h5>
 <div className="p-2 bg-background/50 rounded mb-2">
 <p className="text-xs text-center font-mono">
 <InlineMath>{'g^* \\approx 2.5\\% \\text{ (Long-run trend rate)}'}</InlineMath>
 </p>
 </div>
 <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
 <li>Focus on <strong>sustainable growth</strong> for long run</li>
 <li>Balance growth with inflation target</li>
 <li>Productivity-led expansion (intensive growth)</li>
 <li>Environmental sustainability constraints</li>
 </ul>
 </div>

 <div className="p-3 bg-cambridge-green/10 border border-cambridge-green/30 rounded-lg">
 <h5 className="font-semibold text-cambridge-green mb-2 text-sm">Emerging/Developing Economies</h5>
 <div className="p-2 bg-background/50 rounded mb-2">
 <p className="text-xs text-center font-mono">
 <InlineMath>{'\\text{Development} \\prec \\text{Growth}'}</InlineMath>
 </p>
 </div>
 <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground">
 <li>Prioritize <strong>economic development</strong> first</li>
 <li>Improve living standards (HDI)</li>
 <li>Increase life expectancy</li>
 <li>Improve literacy rates</li>
 <li>Build institutional capacity</li>
 </ul>
 </div>
 </div>

 <AnalysisBlock title="Distinction: Growth vs. Development" type="evaluation">
 <div className="overflow-x-auto">
 <table className="w-full text-xs border-collapse">
 <thead>
 <tr className="border-b border-border">
 <th className="text-left p-1.5 font-semibold text-primary">Criterion</th>
 <th className="text-left p-1.5 font-semibold text-cambridge-cyan">Economic Growth</th>
 <th className="text-left p-1.5 font-semibold text-cambridge-green">Economic Development</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-border">
 <tr>
 <td className="p-1.5 font-medium">Definition</td>
 <td className="p-1.5 text-muted-foreground">↑ Real GDP/capita</td>
 <td className="p-1.5 text-muted-foreground">↑ Quality of life & well-being</td>
 </tr>
 <tr>
 <td className="p-1.5 font-medium">Measure</td>
 <td className="p-1.5 text-muted-foreground">% change in real output</td>
 <td className="p-1.5 text-muted-foreground">HDI, MPI, literacy, life expectancy</td>
 </tr>
 <tr>
 <td className="p-1.5 font-medium">Nature</td>
 <td className="p-1.5 text-muted-foreground">Quantitative</td>
 <td className="p-1.5 text-muted-foreground">Qualitative & Normative</td>
 </tr>
 <tr>
 <td className="p-1.5 font-medium">Relationship</td>
 <td className="p-1.5 text-muted-foreground" colSpan={2}>
 Growth is <strong>necessary but not sufficient</strong> for development. Growth without development = <em>jobless growth</em> or <em>immiserizing growth</em>.
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </AnalysisBlock>
 </TabsContent>
 </Tabs>

 {/* Summary Box */}
 <div className="p-3 bg-gradient-to-r from-primary/10 to-cambridge-cyan/10 rounded-lg mt-4">
 <h4 className="font-semibold text-sm mb-2">Policy Aims Summary</h4>
 <div className="grid md:grid-cols-5 gap-2 text-xs">
 <div className="text-center p-2 bg-background/50 rounded">
 <div className="font-semibold text-primary">Inflation</div>
 <div className="text-muted-foreground"><InlineMath>{'\\pi^* = 2\\%'}</InlineMath></div>
 </div>
 <div className="text-center p-2 bg-background/50 rounded">
 <div className="font-semibold text-cambridge-cyan">BoP</div>
 <div className="text-muted-foreground"><InlineMath>{'CA \\approx 0'}</InlineMath></div>
 </div>
 <div className="text-center p-2 bg-background/50 rounded">
 <div className="font-semibold text-cambridge-orange">Exchange</div>
 <div className="text-muted-foreground">Competitive <InlineMath>{'e'}</InlineMath></div>
 </div>
 <div className="text-center p-2 bg-background/50 rounded">
 <div className="font-semibold text-cambridge-green">Unemployment</div>
 <div className="text-muted-foreground"><InlineMath>{'U^* \\approx 3\\%'}</InlineMath></div>
 </div>
 <div className="text-center p-2 bg-background/50 rounded">
 <div className="font-semibold text-secondary">Growth</div>
 <div className="text-muted-foreground"><InlineMath>{'g^* = 2.5\\%'}</InlineMath></div>
 </div>
 </div>
 </div>
 </div>
 );
};

export default MacroPolicyAimsSection;
