import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import AcceleratorDiagram from '@/components/diagrams/AcceleratorDiagram';
import MECCurveDiagram from '@/components/diagrams/MECCurveDiagram';
import ParadoxOfThriftDiagram from '@/components/diagrams/ParadoxOfThriftDiagram';

const Investment =  => {
 return (
 <Layout showSidebar>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="max-w-4xl mx-auto"
 >
 {/* Chapter Header */}
 <div className="mb-12">
 <span className="text-primary text-sm font-medium tracking-wider uppercase">A2 Level • Chapter 3</span>
 <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
 Investment
 </h1>
 <p className="text-muted-foreground text-lg leading-relaxed">
 Understanding the determinants of investment, the accelerator theory, and the paradox of thrift.
 </p>
 </div>

 {/* Definition */}
 <ContentSection title="What is Investment?">
 <NoteCard title="Economic Definition" type="definition">
 <p>
 To an economist, <strong>investment</strong> is a precise term involving the acquisition of 
 <strong> capital goods</strong> designed to provide consumer goods and services in the future. 
 It is the second major component of aggregate expenditure after consumption.
 </p>
 <div className="mt-4 grid md:grid-cols-2 gap-4">
 <div className="p-3 bg-primary/10 rounded-lg">
 <h5 className="font-semibold text-primary">Capital Goods</h5>
 <p className="text-sm text-muted-foreground">Machinery, equipment, buildings, infrastructure used to produce other goods</p>
 </div>
 <div className="p-3 bg-secondary/10 rounded-lg">
 <h5 className="font-semibold text-secondary">Consumer Goods</h5>
 <p className="text-sm text-muted-foreground">Final goods purchased by households for consumption</p>
 </div>
 </div>
 </NoteCard>

 <NoteCard title="Investment in the Keynesian Model" type="theory">
 <p>
 In the Keynesian model, investment is treated as <strong>autonomous</strong> – that is, 
 capital expenditure on produced goods is independent of the current level of national income. 
 Investment is determined by factors such as interest rates, business expectations, and technology.
 </p>
 <div className="mt-3 p-3 bg-muted/30 rounded-lg font-mono text-center">
 AE = C + I where I is horizontal (autonomous)
 </div>
 </NoteCard>
 </ContentSection>

 {/* 2-Sector Equilibrium */}
 <ContentSection title="2-Sector National Income Equilibrium">
 <NoteCard title="Adding Investment to the Model" type="application">
 <p className="mb-3">Starting from the consumption function C = 100 + 0.8Y, adding autonomous investment I = 250:</p>
 <div className="space-y-2 font-mono text-sm bg-muted/30 p-4 rounded-lg">
 <p>AE = C + I</p>
 <p>AE = 100 + 0.8Y + 250</p>
 <p className="text-primary font-bold">AE = 350 + 0.8Y</p>
 </div>
 <div className="mt-4 p-3 bg-primary/10 rounded-lg">
 <p className="font-semibold">Finding Equilibrium:</p>
 <p className="font-mono text-sm mt-1">Y = AE → Y = 350 + 0.8Y → 0.2Y = 350 → <strong>Y* = 1,750</strong></p>
 </div>
 </NoteCard>

 <NoteCard title="Withdrawals = Injections Approach" type="theory">
 <p>Alternatively, equilibrium occurs where S = I:</p>
 <div className="space-y-2 font-mono text-sm bg-muted/30 p-4 rounded-lg mt-3">
 <p>S = -100 + 0.2Y</p>
 <p>I = 250</p>
 <p>-100 + 0.2Y = 250</p>
 <p className="text-primary font-bold">Y* = 1,750</p>
 </div>
 </NoteCard>
 </ContentSection>

 {/* Determinants of Investment */}
 <ContentSection title="Determinants of Investment">
 <MECCurveDiagram />

 <NoteCard title="Marginal Efficiency of Capital (MEC)" type="theory">
 <p>
 The <strong>MEC theory</strong> explains the relationship between interest rates and investment. 
 The <strong>rate of return</strong> on an investment project is its MEC. A profit-maximizing firm 
 will invest in a project if the rate of return is greater than or equal to the interest rate.
 </p>
 <div className="overflow-x-auto mt-4">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-muted">
 <th className="text-left py-2">Project</th>
 <th className="text-right py-2">Investment ($)</th>
 <th className="text-right py-2">Return ($)</th>
 <th className="text-right py-2">Rate of Return</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-muted/50">
 <td className="py-2">Project 1</td>
 <td className="text-right">100</td>
 <td className="text-right">120</td>
 <td className="text-right text-cambridge-green">20%</td>
 </tr>
 <tr className="border-b border-muted/50">
 <td className="py-2">Project 2</td>
 <td className="text-right">100</td>
 <td className="text-right">115</td>
 <td className="text-right text-cambridge-cyan">15%</td>
 </tr>
 <tr className="border-b border-muted/50">
 <td className="py-2">Project 3</td>
 <td className="text-right">100</td>
 <td className="text-right">110</td>
 <td className="text-right text-cambridge-orange">10%</td>
 </tr>
 <tr>
 <td className="py-2">Project 4</td>
 <td className="text-right">100</td>
 <td className="text-right">105</td>
 <td className="text-right text-muted-foreground">5%</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="mt-3 text-sm text-muted-foreground">
 At interest rate of 10%, Projects 1, 2, and 3 are viable. Lower interest rates → more projects viable → higher investment.
 </p>
 </NoteCard>

 <div className="grid md:grid-cols-2 gap-4 mt-6">
 <div className="glass-card p-4">
 <h4 className="font-semibold text-cambridge-cyan mb-2">1. Cost of Capital Goods</h4>
 <p className="text-sm text-muted-foreground">
 A fall in the cost of capital goods increases investment at all interest rate levels 
 (rightward shift of investment demand).
 </p>
 </div>
 <div className="glass-card p-4">
 <h4 className="font-semibold text-cambridge-orange mb-2">2. Technological Change</h4>
 <p className="text-sm text-muted-foreground">
 Advances in technology raise the productivity of capital goods, stimulating more investment 
 (rightward shift).
 </p>
 </div>
 <div className="glass-card p-4">
 <h4 className="font-semibold text-cambridge-green mb-2">3. Business Expectations</h4>
 <p className="text-sm text-muted-foreground">
 Optimism about future economic conditions leads firms to expect higher returns, 
 increasing planned investment.
 </p>
 </div>
 <div className="glass-card p-4">
 <h4 className="font-semibold text-cambridge-magenta mb-2">4. Interest Rates</h4>
 <p className="text-sm text-muted-foreground">
 Lower interest rates reduce the cost of borrowing and the opportunity cost of using 
 retained profits for investment.
 </p>
 </div>
 </div>
 </ContentSection>

 {/* Accelerator Theory */}
 <ContentSection title="The Accelerator Theory">
 <NoteCard title="Induced Investment" type="theory">
 <p>
 The <strong>accelerator theory</strong> suggests that the level of planned investment varies 
 with the <strong>rate of change of income or output</strong> rather than the level of interest rates. 
 Unlike autonomous investment in the basic Keynesian model, accelerator theory focuses on 
 <strong> induced investment</strong>.
 </p>
 <div className="mt-4 p-4 bg-primary/10 rounded-lg">
 <p className="font-mono text-lg text-center">I = α × ΔY</p>
 <p className="text-sm text-center mt-2">where α = accelerator coefficient (capital-output ratio)</p>
 </div>
 </NoteCard>

 <AcceleratorDiagram />

 <NoteCard title="Numerical Example" type="application">
 <p className="mb-3">If the accelerator coefficient (α) = 3:</p>
 <div className="overflow-x-auto">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-muted">
 <th className="text-left py-2">Year</th>
 <th className="text-right py-2">Output ($)</th>
 <th className="text-right py-2">ΔOutput</th>
 <th className="text-right py-2">Required Capital</th>
 <th className="text-right py-2">New Investment</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-muted/50">
 <td className="py-2">1</td>
 <td className="text-right">10</td>
 <td className="text-right">0</td>
 <td className="text-right">30</td>
 <td className="text-right">0</td>
 </tr>
 <tr className="border-b border-muted/50">
 <td className="py-2">2</td>
 <td className="text-right">10</td>
 <td className="text-right">0</td>
 <td className="text-right">30</td>
 <td className="text-right">0</td>
 </tr>
 <tr className="border-b border-muted/50">
 <td className="py-2">3</td>
 <td className="text-right">11</td>
 <td className="text-right text-cambridge-green">+1</td>
 <td className="text-right">33</td>
 <td className="text-right text-cambridge-green">3</td>
 </tr>
 <tr className="border-b border-muted/50">
 <td className="py-2">4</td>
 <td className="text-right">13</td>
 <td className="text-right text-cambridge-green">+2</td>
 <td className="text-right">39</td>
 <td className="text-right text-cambridge-green">6</td>
 </tr>
 <tr className="border-b border-muted/50">
 <td className="py-2">5</td>
 <td className="text-right">16</td>
 <td className="text-right text-cambridge-green">+3</td>
 <td className="text-right">48</td>
 <td className="text-right text-cambridge-green">9</td>
 </tr>
 <tr>
 <td className="py-2">6</td>
 <td className="text-right">16</td>
 <td className="text-right text-muted-foreground">0</td>
 <td className="text-right">48</td>
 <td className="text-right text-muted-foreground">0</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="mt-3 text-sm text-muted-foreground">
 Investment depends on the <em>change</em> in output, not the level. When output stops growing (Year 6), 
 investment falls to zero even though output remains high.
 </p>
 </NoteCard>

 <ExamTipBox title="Limitations of the Accelerator" variant="warning">
 <ul className="space-y-1 text-sm">
 <li>• Firms may have <strong>spare capacity</strong> and won't need new investment</li>
 <li>• The <strong>capital-output ratio may change</strong> with new technology</li>
 <li>• <strong>Time lags</strong> exist – investment responds over several periods, not instantly</li>
 <li>• Firms may not expect income changes to be <strong>permanent</strong></li>
 <li>• <strong>Access to finance</strong> may constrain investment even when needed</li>
 </ul>
 </ExamTipBox>
 </ContentSection>

 {/* Paradox of Thrift */}
 <ContentSection title="The Paradox of Thrift">
 <NoteCard title="When Saving Becomes Harmful" type="theory">
 <p>
 Individually, saving more seems prudent – it increases future consumption possibilities. 
 But if <em>everyone</em> in society decides to save more, the consequences can be harmful.
 </p>
 <p className="mt-3">
 An increase in savings by society results in a simultaneous <strong>decrease in consumption 
 and aggregate expenditure</strong>, which via the multiplier effect leads to a more than 
 proportionate decrease in national income.
 </p>
 </NoteCard>

 <ParadoxOfThriftDiagram />

 <AnalysisBlock title="Analysis: The Paradox Mechanism">
 <div className="space-y-4">
 <div>
 <p className="font-medium text-primary mb-1">Stage 1: Saving Function Shifts Up</p>
 <p className="text-sm">Households decide to save more at every income level (S₀ → S₁). 
 Consumption falls, reducing aggregate demand.</p>
 </div>
 <div>
 <p className="font-medium text-primary mb-1">Stage 2: Multiplier Effect</p>
 <p className="text-sm">The fall in consumption triggers the negative multiplier. 
 National income falls from Y₀ to Y₁ (more than the initial fall in spending).</p>
 </div>
 <div>
 <p className="font-medium text-secondary mb-1">Stage 3: Investment Falls</p>
 <p className="text-sm">Lower consumption discourages firms from investing (via accelerator). 
 I falls from I₀ to I₁, pushing income down further to Y₂.</p>
 </div>
 <div>
 <p className="font-medium text-destructive mb-1">Paradox Outcome</p>
 <p className="text-sm">Despite intending to save more, actual savings may not increase much 
 because income has fallen. The economy may enter recession.</p>
 </div>
 </div>
 </AnalysisBlock>

 <ExamTipBox title="Policy Implication" variant="gold">
 <p>
 The paradox of thrift supports Keynesian arguments for government intervention during recessions. 
 If households are saving more (spending less), the government should increase its spending (G) 
 to offset the fall in aggregate demand and prevent a deflationary spiral.
 </p>
 </ExamTipBox>
 </ContentSection>

 {/* Chapter Summary */}
 <ContentSection title="Chapter Summary">
 <div className="glass-card p-6">
 <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
 <ul className="space-y-2 text-muted-foreground">
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 Investment is spending on capital goods that enable future production.
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 MEC theory: Investment varies inversely with interest rates (cost of borrowing).
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 Accelerator theory: Investment depends on the rate of change of output (I = αΔY).
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 The paradox of thrift: Increased saving can reduce national income through the multiplier.
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 Investment determinants: interest rates, technology, expectations, cost of capital.
 </li>
 </ul>
 </div>
 </ContentSection>
 </motion.div>
 </Layout>
 );
};

export default Investment;
