import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import DemandSupplyDiagram from '@/components/diagrams/DemandSupplyDiagram';
import MarketEquilibriumInteractive from '@/components/diagrams/MarketEquilibriumInteractive';
import ConsumerProducerSurplusDiagramNew from '@/components/diagrams/ConsumerProducerSurplusDiagramNew';
import DemandSupplyEquilibriumDiagram from '@/components/diagrams/DemandSupplyEquilibriumDiagram';
import MovementShiftDiagram from '@/components/diagrams/MovementShiftDiagram';
import ExcessDemandSupplyDiagram from '@/components/diagrams/ExcessDemandSupplyDiagram';
import PriceFunctionsDiagram from '@/components/diagrams/PriceFunctionsDiagram';
import SurplusWithTaxDiagram from '@/components/diagrams/SurplusWithTaxDiagram';

const PriceSystem = () => {
  return (
    <ChapterLayout
      chapterNumber={2}
      title="The Price System"
      subtitle="Understanding how prices allocate resources through the interaction of demand and supply forces."
    >
      {/* Section 2.1: The Law of Demand */}
      <ContentSection 
        title="2.1 The Law of Demand" 
        subtitle="The Inverse Relationship Between Price and Quantity Demanded"
      >
        <NoteCard title="Definition of Demand (CIE 9708)" type="definition">
          <p>
            <GlossaryTooltip term="Demand" definition="The quantity of a good or service that consumers are willing and able to purchase at various price levels over a given time period.">
              <strong className="text-cyan-400">Demand</strong>
            </GlossaryTooltip> is defined as the <strong>quantity of a good or service</strong> that consumers are <strong>willing and able</strong> to buy at a given price in a given time period.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-cyan-400">Key Point:</strong> The phrase "willing and able" is crucial. A consumer may <em>want</em> a luxury car, but without sufficient income (ability), this does not constitute <strong>effective demand</strong>. Cambridge requires this distinction.
            </p>
          </div>
        </NoteCard>

        <NoteCard title="The Law of Demand" type="theory" delay={50}>
          <p>
            <strong className="text-silver-bright">The Law of Demand</strong> states that there is an <strong className="text-cyan-400">inverse (negative) relationship</strong> between the price of a good and the quantity demanded, <em>ceteris paribus</em> (all other factors remaining constant).
          </p>
          <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500">
            <p className="font-mono text-sm">
              As Price ↑ → Quantity Demanded ↓<br />
              As Price ↓ → Quantity Demanded ↑
            </p>
          </div>
          <p className="mt-4">
            This inverse relationship gives the demand curve its characteristic <strong>downward slope</strong> from left to right.
          </p>
        </NoteCard>

        <AnalysisBlock title="AO3 Analysis: Why Does the Demand Curve Slope Downward?" type="analysis">
          <p className="mb-4">The Law of Demand can be explained through two key effects:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-2">1. The Substitution Effect</h5>
              <p className="text-sm text-muted-foreground">
                When the price of a good <strong>rises</strong>, it becomes <strong>relatively more expensive</strong> compared to substitute goods. Consumers respond by switching some consumption to these now relatively cheaper alternatives, <strong>reducing quantity demanded</strong> of the original good.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-2">2. The Income Effect</h5>
              <p className="text-sm text-muted-foreground">
                When the price of a good <strong>rises</strong>, consumers experience a <strong>reduction in real purchasing power</strong> (real income). With effectively less income, they can afford <strong>less of most goods</strong>, including the one whose price has risen.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        <NoteCard title="Demand Schedule Example" type="application" delay={100}>
          <p className="mb-4">The following table illustrates a hypothetical demand schedule for apples:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-silver/30">
                  <th className="text-left py-3 px-4 text-silver-bright">Price per kg ($)</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Quantity Demanded (kg/week)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-silver/10">
                  <td className="py-2 px-4">5.00</td>
                  <td className="py-2 px-4">100</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-2 px-4">4.00</td>
                  <td className="py-2 px-4">200</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-2 px-4">3.00</td>
                  <td className="py-2 px-4">300</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-2 px-4">2.00</td>
                  <td className="py-2 px-4">400</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">1.00</td>
                  <td className="py-2 px-4">500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Notice the <strong className="text-cyan-400">inverse relationship</strong>: as price falls from $5 to $1, quantity demanded rises from 100kg to 500kg per week.
          </p>
        </NoteCard>

        <NoteCard title="Non-Price Determinants of Demand" type="theory" delay={100}>
          <p className="mb-3">Factors that cause the demand curve to <strong>shift</strong> (not move along):</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Income</span>
              <p className="text-xs text-muted-foreground mt-1">
                Normal goods: ↑ Income → ↑ Demand<br />
                Inferior goods: ↑ Income → ↓ Demand
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Substitutes</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Price of substitute → ↑ Demand for this good</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Complements</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Price of complement → ↓ Demand for this good</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Tastes/Preferences</span>
              <p className="text-xs text-muted-foreground mt-1">Advertising, trends, fashion → Shift demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Population</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Population → ↑ Market demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Expectations</span>
              <p className="text-xs text-muted-foreground mt-1">Expected future price rise → ↑ Current demand</p>
            </div>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Section 2.2: The Law of Supply */}
      <ContentSection 
        title="2.2 The Law of Supply" 
        subtitle="The Direct Relationship Between Price and Quantity Supplied"
      >
        <NoteCard title="Definition of Supply (CIE 9708)" type="definition">
          <p>
            <GlossaryTooltip term="Supply" definition="The quantity of a good or service that producers are willing and able to offer for sale at various price levels over a given time period.">
              <strong className="text-magenta-400">Supply</strong>
            </GlossaryTooltip> is defined as the <strong>quantity of a good or service</strong> that producers are <strong>willing and able</strong> to supply to the market at a given price in a given time period.
          </p>
        </NoteCard>

        <NoteCard title="The Law of Supply" type="theory" delay={50}>
          <p>
            <strong className="text-silver-bright">The Law of Supply</strong> states that there is a <strong className="text-magenta-400">direct (positive) relationship</strong> between the price of a good and the quantity supplied, <em>ceteris paribus</em>.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-magenta-500/10 to-transparent border-l-4 border-magenta-500">
            <p className="font-mono text-sm">
              As Price ↑ → Quantity Supplied ↑<br />
              As Price ↓ → Quantity Supplied ↓
            </p>
          </div>
          <p className="mt-4">
            This direct relationship gives the supply curve its characteristic <strong>upward slope</strong> from left to right.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-magenta-500/10 border border-magenta-500/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-magenta-400">Reason:</strong> Higher prices provide a greater <strong>profit incentive</strong> for producers. Additionally, as output increases, producers often face <strong>rising marginal costs</strong>, so they require higher prices to cover these increased costs.
            </p>
          </div>
        </NoteCard>

        <NoteCard title="Non-Price Determinants of Supply" type="theory" delay={100}>
          <p className="mb-3">Factors that cause the supply curve to <strong>shift</strong>:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Costs of Production</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Wage costs, raw materials → ↓ Supply (shift left)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Technology</span>
              <p className="text-xs text-muted-foreground mt-1">Improved technology → ↑ Supply (shift right)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Indirect Taxes</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Tax → ↓ Supply (shift left/up)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Subsidies</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Subsidy → ↑ Supply (shift right/down)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Number of Firms</span>
              <p className="text-xs text-muted-foreground mt-1">More firms in market → ↑ Market supply</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Weather/Natural Events</span>
              <p className="text-xs text-muted-foreground mt-1">Poor harvest → ↓ Agricultural supply</p>
            </div>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Section 2.3: Movement vs Shift */}
      <ContentSection 
        title="2.3 Movement Along vs. Shift of Curve" 
        subtitle="A Critical Distinction for Cambridge Examinations"
      >
        <NoteCard title="The Critical Distinction (AO1)" type="definition">
          <p className="mb-4">
            Cambridge examiners require precise use of terminology when describing changes in demand or supply. <strong>Misusing these terms will lose marks.</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <h5 className="font-semibold text-amber-400 mb-2">Movement ALONG the Curve</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Cause:</strong> Change in the good's <em>own price</em></li>
                <li>• <strong>Terms:</strong> "Extension" (↑Qd when ↓P) or "Contraction" (↓Qd when ↑P)</li>
                <li>• <strong>Say:</strong> "Change in <em>quantity demanded</em>"</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <h5 className="font-semibold text-cyan-400 mb-2">SHIFT of the Curve</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Cause:</strong> Change in a <em>non-price determinant</em></li>
                <li>• <strong>Terms:</strong> "Increase" (→ rightward) or "Decrease" (← leftward)</li>
                <li>• <strong>Say:</strong> "Change in <em>demand</em>"</li>
              </ul>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <MovementShiftDiagram />
        </div>

        <ExamTipBox title="Cambridge Command Words" variant="gold">
          <p className="mb-2"><strong>When the examiner asks you to "explain the effect of a price change":</strong></p>
          <ul className="space-y-1 text-sm">
            <li>✓ Use: "There is a <strong>movement along</strong> the demand curve" or "An <strong>extension/contraction</strong> of demand"</li>
            <li>✗ Never say: "Demand increases" when you mean quantity demanded increases</li>
            <li>✓ "A change in income causes demand to <strong>increase</strong> (shift rightward)"</li>
            <li>✓ "A fall in price causes an <strong>extension</strong> of demand (movement along)"</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 2.4: Market Equilibrium */}
      <ContentSection 
        title="2.4 Market Equilibrium" 
        subtitle="Price Determination Through the Interaction of Demand and Supply"
      >
        <NoteCard title="Definition of Equilibrium (CIE 9708)" type="definition">
          <p>
            <GlossaryTooltip term="Market Equilibrium" definition="The price and quantity where quantity demanded equals quantity supplied. At this point, there is no tendency for the market price to change.">
              <strong className="text-amber-400">Market Equilibrium</strong>
            </GlossaryTooltip> occurs at the price where <strong>Quantity Demanded (Qd) equals Quantity Supplied (Qs)</strong>. This is also called the <strong>Market Clearing Price</strong>.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-2xl font-bold text-amber-400">Qd = Qs</span>
              <p className="text-xs text-muted-foreground mt-1">No shortage or surplus</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-2xl font-bold text-amber-400">Pe</span>
              <p className="text-xs text-muted-foreground mt-1">Equilibrium Price</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-2xl font-bold text-amber-400">Qe</span>
              <p className="text-xs text-muted-foreground mt-1">Equilibrium Quantity</p>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <DemandSupplyDiagram title="Figure 2.1: Market Equilibrium Determination" />
        </div>

        <NoteCard title="Disequilibrium and Market Adjustment" type="theory">
          <p className="mb-4">
            When price is <strong>not</strong> at equilibrium, market forces create pressure to adjust:
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <ExcessDemandSupplyDiagram />
        </div>

        <AnalysisBlock title="AO3 Analysis: The Self-Correcting Mechanism" type="analysis">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-3">Excess Demand (Shortage)</h5>
              <p className="text-sm text-muted-foreground mb-2">When <strong>P &lt; Pe</strong>:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Qd &gt; Qs → <strong>Shortage</strong> in the market</li>
                <li>Consumers <strong>compete</strong> for limited goods</li>
                <li>Consumers bid <strong>up</strong> the price</li>
                <li>Price rises → Qd ↓ and Qs ↑</li>
                <li>Process continues until <strong>Qd = Qs</strong></li>
              </ol>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-3">Excess Supply (Surplus)</h5>
              <p className="text-sm text-muted-foreground mb-2">When <strong>P &gt; Pe</strong>:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Qs &gt; Qd → <strong>Surplus</strong> (unsold stock)</li>
                <li>Producers <strong>cut prices</strong> to clear stock</li>
                <li>Price falls → Qd ↑ and Qs ↓</li>
                <li>Process continues until <strong>Qd = Qs</strong></li>
              </ol>
            </div>
          </div>
        </AnalysisBlock>
      </ContentSection>

      {/* Section 2.5: Changes in Equilibrium */}
      <ContentSection 
        title="2.5 Changes in Equilibrium" 
        subtitle="Comparative Statics Analysis of Demand and Supply Shifts"
      >
        <NoteCard title="Comparative Statics" type="theory">
          <p>
            <strong>Comparative statics</strong> is the method of comparing the <strong>original equilibrium</strong> with a <strong>new equilibrium</strong> after a change in one or more determinants. This is a key analytical skill for Cambridge essays.
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <MarketEquilibriumInteractive title="Figure 2.2: Interactive Equilibrium Shifts" />
        </div>

        <AnalysisBlock title="AO3 Analysis: The Four Shift Scenarios" type="analysis">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-silver/30">
                  <th className="text-left py-3 px-4 text-silver-bright">Shift</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Example Cause</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Price Effect</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Quantity Effect</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-cyan-400">↑ Demand (D → D₁)</td>
                  <td className="py-3 px-4">Rise in consumer income</td>
                  <td className="py-3 px-4"><span className="text-emerald-400">Price ↑</span></td>
                  <td className="py-3 px-4"><span className="text-emerald-400">Quantity ↑</span></td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-cyan-400">↓ Demand (D → D₁)</td>
                  <td className="py-3 px-4">Fall in price of substitute</td>
                  <td className="py-3 px-4"><span className="text-red-400">Price ↓</span></td>
                  <td className="py-3 px-4"><span className="text-red-400">Quantity ↓</span></td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-magenta-400">↑ Supply (S → S₁)</td>
                  <td className="py-3 px-4">Technological improvement</td>
                  <td className="py-3 px-4"><span className="text-red-400">Price ↓</span></td>
                  <td className="py-3 px-4"><span className="text-emerald-400">Quantity ↑</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-magenta-400">↓ Supply (S → S₁)</td>
                  <td className="py-3 px-4">Rise in production costs</td>
                  <td className="py-3 px-4"><span className="text-emerald-400">Price ↑</span></td>
                  <td className="py-3 px-4"><span className="text-red-400">Quantity ↓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="Diagram Drawing for Full Marks" variant="gold" className="mt-6">
          <p>When drawing equilibrium shift diagrams, Cambridge examiners require:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>✓ Label original equilibrium as <strong>E</strong> (or E₀) with Pe and Qe</li>
            <li>✓ Label new equilibrium as <strong>E₁</strong> with P₁ and Q₁</li>
            <li>✓ Show <strong>P₀ → P₁</strong> and <strong>Q₀ → Q₁</strong> changes clearly</li>
            <li>✓ Use <strong>arrows</strong> to show direction of curve shift</li>
            <li>✓ Explain the <strong>cause</strong> of the shift in your written answer</li>
            <li>✓ Explain the <strong>process</strong> (e.g., "excess demand at original price leads to...")</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 2.6: Consumer & Producer Surplus */}
      <ContentSection 
        title="2.6 Consumer and Producer Surplus" 
        subtitle="Measuring Economic Welfare from Market Transactions"
      >
        <NoteCard title="Definitions (CIE 9708)" type="definition">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-2">Consumer Surplus (CS)</h5>
              <p className="text-sm text-muted-foreground">
                The <strong>difference</strong> between the price consumers are <strong>willing to pay</strong> (shown by the demand curve) and the price they <strong>actually pay</strong> (market price). It represents the <strong>extra utility</strong> consumers receive.
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-mono">
                CS = Willingness to Pay − Market Price (summed over all units)
              </p>
            </div>
            <div className="p-4 rounded-lg bg-magenta-500/10 border border-magenta-500/20">
              <h5 className="font-semibold text-magenta-400 mb-2">Producer Surplus (PS)</h5>
              <p className="text-sm text-muted-foreground">
                The <strong>difference</strong> between the market price received and the <strong>minimum price</strong> producers would accept (shown by the supply curve). It represents the <strong>extra profit</strong> producers receive.
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-mono">
                PS = Market Price − Minimum Acceptable Price (summed over all units)
              </p>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <ConsumerProducerSurplusDiagramNew title="Figure 2.3: Consumer and Producer Surplus" />
        </div>

        <AnalysisBlock title="AO3 Analysis: Welfare Economics" type="analysis">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">Total Social Surplus (Economic Welfare)</h5>
              <p className="text-sm text-muted-foreground">
                <strong>Total Welfare = CS + PS</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                At the free market equilibrium, total welfare is <strong>maximized</strong>. This is the condition for <strong>allocative efficiency</strong> - where resources are allocated to their highest valued uses.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-silver-bright">Key Insight:</strong> Any government intervention that moves the market away from equilibrium will reduce total welfare by creating <strong>deadweight loss</strong>.
            </p>
          </div>
        </AnalysisBlock>

        <div className="glass-card p-8 my-6">
          <SurplusWithTaxDiagram />
        </div>

        <ExamTipBox title="Surplus Calculation" variant="silver" className="mt-6">
          <p>For calculation questions, surplus areas are <strong>triangles</strong>:</p>
          <div className="mt-2 p-3 rounded bg-muted/50 font-mono text-sm">
            Area = ½ × base × height
          </div>
          <p className="mt-2 text-sm">
            • CS = ½ × Qe × (Maximum WTP − Pe)<br />
            • PS = ½ × Qe × (Pe − Minimum Price)
          </p>
        </ExamTipBox>
      </ContentSection>

      {/* Section 2.7: Functions of the Price Mechanism */}
      <ContentSection 
        title="2.7 Functions of the Price Mechanism" 
        subtitle="Signaling, Incentivizing, and Rationing Resources"
      >
        <NoteCard title="The Price Mechanism" type="definition">
          <p>
            The <GlossaryTooltip term="Price Mechanism" definition="The system by which price changes signal to consumers and producers how to allocate resources, provide incentives, and ration scarce goods.">
              <strong className="text-amber-400">Price Mechanism</strong>
            </GlossaryTooltip> is the <strong>system by which resources are allocated</strong> in a market economy through the interaction of supply and demand, without central planning.
          </p>
          <p className="mt-3 text-muted-foreground">
            It answers the <strong>three basic economic questions</strong>: What to produce? How to produce? For whom to produce?
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <PriceFunctionsDiagram />
        </div>

        <AnalysisBlock title="AO3 Analysis: The Three Functions in Detail" type="analysis">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-cyan-500/10 border-l-4 border-cyan-500">
              <h5 className="font-semibold text-cyan-400 mb-2">1. Signaling Function</h5>
              <p className="text-sm text-muted-foreground">
                Prices <strong>communicate information</strong> about relative scarcity. Rising prices signal to producers that a good is in <strong>high demand</strong> or short supply; falling prices signal <strong>low demand</strong> or abundance. This information guides resource allocation <strong>without central planning</strong>.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-400 mb-2">2. Incentive Function</h5>
              <p className="text-sm text-muted-foreground">
                Prices <strong>motivate</strong> economic agents. Higher prices provide incentive for producers to <strong>increase supply</strong> (profit motive) and for consumers to <strong>reduce demand</strong>. Lower prices incentivize increased consumption and reduced production.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-magenta-500/10 border-l-4 border-magenta-500">
              <h5 className="font-semibold text-magenta-400 mb-2">3. Rationing Function</h5>
              <p className="text-sm text-muted-foreground">
                Prices <strong>allocate scarce resources</strong> to those consumers who are <strong>willing and able to pay</strong>. This determines "for whom" goods are produced. Those with greater purchasing power can obtain more goods.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        <AnalysisBlock title="AO4 Evaluation: Limitations of the Price Mechanism" type="evaluation">
          <p className="mb-4 text-amber-400 font-medium">While efficient, the price mechanism has significant limitations:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2">Market Failures</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Externalities:</strong> Social costs/benefits not reflected in prices</li>
                <li>• <strong>Public goods:</strong> Non-excludable, non-rival goods not provided</li>
                <li>• <strong>Merit/demerit goods:</strong> Information failure leads to over/under-consumption</li>
                <li>• <strong>Monopoly power:</strong> Distorts prices and reduces welfare</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">Equity Issues</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Income inequality:</strong> Rich have more "votes" in the market</li>
                <li>• <strong>Factor immobility:</strong> Resources slow to reallocate</li>
                <li>• <strong>Time lags:</strong> Supply may not respond quickly to signals</li>
                <li>• <strong>Information asymmetry:</strong> Not all agents have equal information</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="AO3/AO4 Essay Structure for Price Mechanism" variant="gold" className="mt-6">
          <p>For 25-mark essays on the price mechanism:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><strong>Introduction:</strong> Define price mechanism and state thesis</li>
            <li><strong>Para 1:</strong> Explain <strong>signaling function</strong> with diagram showing price change</li>
            <li><strong>Para 2:</strong> Explain <strong>incentive function</strong> with real-world example</li>
            <li><strong>Para 3:</strong> Explain <strong>rationing function</strong> and link to efficiency</li>
            <li><strong>Para 4:</strong> <span className="text-amber-400">Evaluate</span> - market failures (externalities, public goods)</li>
            <li><strong>Para 5:</strong> <span className="text-amber-400">Evaluate</span> - equity concerns and time lags</li>
            <li><strong>Conclusion:</strong> Balanced judgment on effectiveness with conditions</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default PriceSystem;
