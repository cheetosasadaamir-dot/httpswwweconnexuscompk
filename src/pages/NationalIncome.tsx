import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import ContentSection from '@/components/ContentSection';
import CircularFlowDiagram from '@/components/diagrams/CircularFlowDiagram';

const NationalIncome =  => {
 return (
 <Layout showSidebar>
 <div className="max-w-5xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="mb-12"
 >
 <div className="flex items-center gap-4 mb-4">
 <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
 Macro Chapter 1
 </span>
 </div>
 <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
 National Income
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed-plus">
 Understanding the flow of income through an economy and the equilibrium conditions that determine aggregate economic activity.
 </p>
 </motion.div>

 {/* Micro vs Macro */}
 <ContentSection title="Microeconomics vs Macroeconomics" id="micro-vs-macro">
 <div className="grid md:grid-cols-2 gap-6">
 <NoteCard title="Microeconomics" type="definition">
 <p>
 Microeconomics focuses on individual markets, firms, and consumers. It examines 
 how individual agents make decisions about resource allocation, pricing, and production.
 </p>
 <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
 <li>• Why is the price of corn rising?</li>
 <li>• How many workers will a firm employ?</li>
 <li>• What determines consumer choice?</li>
 </ul>
 </NoteCard>

 <NoteCard title="Macroeconomics" type="definition">
 <p>
 Macroeconomics examines the economy as a whole—aggregate variables like unemployment, 
 inflation, economic growth, and the balance of payments.
 </p>
 <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
 <li>• Why is the general price level rising?</li>
 <li>• What is the total level of employment?</li>
 <li>• What determines national output?</li>
 </ul>
 </NoteCard>
 </div>

 <NoteCard title="The Key Distinction" type="concept" className="mt-6">
 <p>
 In macroeconomics, we <strong>zoom out</strong> from individual markets and firms to examine 
 what is happening in the economy as a whole. While microeconomics might ask why 
 the price of a specific good is rising, macroeconomics investigates why the 
 <em> average price level</em> across all goods is increasing.
 </p>
 </NoteCard>
 </ContentSection>

 {/* Circular Flow */}
 <ContentSection title="The Circular Flow of Income" id="circular-flow">
 <NoteCard title="Understanding the Circular Flow Model" type="concept">
 <p>
 The circular flow model is a simplified representation of how the basic 
 decision-making units of an economy—<strong>households</strong>, <strong>firms</strong>, 
 the <strong>government</strong>, and in an open economy, the <strong>foreign sector</strong>—interact 
 with each other.
 </p>
 <p className="mt-3">
 The model describes two types of flows between these economic agents:
 </p>
 <ul className="mt-2 space-y-1 text-sm">
 <li><strong>Real flows:</strong> Flows of factors of production and goods/services</li>
 <li><strong>Monetary flows:</strong> Flows of expenditures and incomes</li>
 </ul>
 </NoteCard>

 <div className="my-8">
 <CircularFlowDiagram title="The 4-Sector Circular Flow of Income" />
 </div>

 <div className="grid md:grid-cols-2 gap-6">
 <NoteCard title="Injections (J)" type="concept">
 <p className="font-medium text-cambridge-cyan mb-2">J = I + G + X</p>
 <p>
 Injections are additions to the circular flow that do not originate from 
 domestic household consumption:
 </p>
 <ul className="mt-2 space-y-2 text-sm">
 <li><strong>Investment (I):</strong> Spending by firms on capital goods</li>
 <li><strong>Government Spending (G):</strong> Expenditure on public services</li>
 <li><strong>Exports (X):</strong> Foreign spending on domestic goods</li>
 </ul>
 </NoteCard>

 <NoteCard title="Withdrawals (W)" type="concept">
 <p className="font-medium text-cambridge-magenta mb-2">W = S + T + M</p>
 <p>
 Withdrawals (or leakages) are parts of national income not used for 
 consumption of domestic goods:
 </p>
 <ul className="mt-2 space-y-2 text-sm">
 <li><strong>Saving (S):</strong> Income not spent on consumption</li>
 <li><strong>Taxation (T):</strong> Income paid to government</li>
 <li><strong>Imports (M):</strong> Spending on foreign goods</li>
 </ul>
 </NoteCard>
 </div>

 <ExamTipBox title="Cambridge Examiner Insight">
 <p>
 When drawing the circular flow, always show the indirect links: savings flow to investment 
 via financial institutions; taxes flow to government spending via the government; 
 imports enable foreigners to earn income to purchase our exports.
 </p>
 </ExamTipBox>
 </ContentSection>

 {/* Equilibrium */}
 <ContentSection title="Equilibrium in the Circular Flow" id="equilibrium">
 <NoteCard title="The Equilibrium Condition" type="formula">
 <div className="text-center p-4 bg-primary/10 rounded-lg">
 <p className="text-2xl font-mono font-bold text-primary mb-2">
 J = W
 </p>
 <p className="text-sm text-muted-foreground">
 In equilibrium, total injections equal total withdrawals
 </p>
 </div>
 <p className="mt-4">
 Equivalently: <span className="font-mono">I + G + X = S + T + M</span>
 </p>
 </NoteCard>

 <AnalysisBlock title="Analysis: The Adjustment Process">
 <div className="space-y-4">
 <div>
 <p className="font-medium text-primary mb-1">Analysis:</p>
 <p>If J &gt; W, national income will rise as more is being added to the flow than is being withdrawn. This creates additional income and spending.</p>
 </div>
 <div>
 <p className="font-medium text-secondary mb-1">Evaluation:</p>
 <p>However, as income rises, households will not only spend more on domestic goods (Cᵈ), but also save more (S), pay more taxes (T), and buy more imports (M). Withdrawals rise until they equal injections.</p>
 </div>
 <div>
 <p className="font-medium text-primary mb-1">Analysis:</p>
 <p>Conversely, if J &lt; W, the circular flow contracts. Income falls, reducing the ability of households to save, pay taxes, and import.</p>
 </div>
 <div>
 <p className="font-medium text-secondary mb-1">Evaluation:</p>
 <p>The magnitude of adjustment depends on the marginal propensities (MPS, MPT, MPM). Higher marginal propensities mean faster adjustment to equilibrium.</p>
 </div>
 </div>
 </AnalysisBlock>

 <NoteCard title="Implications for Policy" type="concept" className="mt-6">
 <p>
 Understanding equilibrium in the circular flow is crucial for macroeconomic policy:
 </p>
 <ul className="mt-3 space-y-2 text-sm">
 <li>
 <strong>Expansionary Policy:</strong> If the economy is below full employment, 
 the government can increase G or reduce T to raise injections and stimulate 
 aggregate demand.
 </li>
 <li>
 <strong>Contractionary Policy:</strong> If inflation is a concern, reducing 
 injections or increasing withdrawals can cool down the economy.
 </li>
 </ul>
 </NoteCard>

 <ExamTipBox title="Key Evaluation Point">
 <p>
 Always consider time lags in adjustment. While the model suggests automatic adjustment 
 to equilibrium, in reality, there may be significant delays. Sticky wages and prices 
 can prevent rapid adjustment, leading to prolonged periods of disequilibrium unemployment.
 </p>
 </ExamTipBox>
 </ContentSection>

 {/* Links between sectors */}
 <ContentSection title="Indirect Links in the Economy" id="indirect-links">
 <div className="grid md:grid-cols-3 gap-4">
 <div className="glass-card p-4 rounded-lg">
 <h4 className="font-serif font-semibold text-cambridge-cyan mb-2">Saving → Investment</h4>
 <p className="text-sm text-muted-foreground">
 Via financial institutions: If more money is saved, banks have more to lend 
 for investment projects.
 </p>
 </div>
 <div className="glass-card p-4 rounded-lg">
 <h4 className="font-serif font-semibold text-cambridge-magenta mb-2">Taxation → Government</h4>
 <p className="text-sm text-muted-foreground">
 Via government: Higher tax receipts may enable (or encourage) 
 greater government expenditure.
 </p>
 </div>
 <div className="glass-card p-4 rounded-lg">
 <h4 className="font-serif font-semibold text-cambridge-green mb-2">Imports → Exports</h4>
 <p className="text-sm text-muted-foreground">
 Via foreign countries: When we import, foreign incomes rise, 
 enabling them to purchase more of our exports.
 </p>
 </div>
 </div>
 </ContentSection>

 {/* Summary */}
 <ContentSection title="Chapter Summary" id="summary">
 <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
 <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright">Key Takeaways</h3>
 <ul className="space-y-3 text-sm">
 <li className="flex items-start gap-3">
 <span className="text-primary font-bold">1.</span>
 <span>Macroeconomics studies aggregate variables (GDP, unemployment, inflation) while microeconomics focuses on individual markets.</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-primary font-bold">2.</span>
 <span>The circular flow model shows interactions between households, firms, government, and the foreign sector.</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-primary font-bold">3.</span>
 <span>Injections (I + G + X) add to the circular flow; Withdrawals (S + T + M) remove from it.</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-primary font-bold">4.</span>
 <span>Equilibrium occurs when J = W, at which point national income stabilizes.</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-primary font-bold">5.</span>
 <span>Adjustment to equilibrium occurs through changes in S, T, and M as income changes.</span>
 </li>
 </ul>
 </div>
 </ContentSection>
 </div>
 </Layout>
 );
};

export default NationalIncome;
