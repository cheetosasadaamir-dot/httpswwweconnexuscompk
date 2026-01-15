import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import DemandSupplyDiagram from '@/components/diagrams/DemandSupplyDiagram';
import MarketEquilibriumInteractive from '@/components/diagrams/MarketEquilibriumInteractive';
import ConsumerProducerSurplusDiagram from '@/components/diagrams/ConsumerProducerSurplusDiagram';
import DemandSupplyEquilibriumDiagram from '@/components/diagrams/DemandSupplyEquilibriumDiagram';

const PriceSystem = () => {
  return (
    <ChapterLayout
      chapterNumber={2}
      title="The Price System"
      subtitle="Understanding how prices allocate resources, the laws of demand and supply, and market equilibrium determination."
    >
      {/* Section 1: The Law of Demand */}
      <ContentSection 
        title="The Law of Demand" 
        subtitle="The Inverse Relationship Between Price and Quantity Demanded"
      >
        <NoteCard title="Definition of Demand" type="definition">
          <p>
            <GlossaryTooltip term="Demand" definition="The quantity of a good or service that consumers are willing and able to purchase at various price levels over a given time period.">Demand</GlossaryTooltip> is 
            a fundamental economic concept that refers to the quantity of a good or service that consumers are <strong>willing and able</strong> to purchase at various price levels during a specific time period. The emphasis on both willingness (desire) and ability (purchasing power) is crucial—a consumer may want a Ferrari, but without the financial means, this does not constitute effective demand in economic terms. Effective demand requires both the desire for a good and the ability to back that desire with payment.
          </p>
          <p className="mt-3">
            A <strong>demand schedule</strong> is a table showing the different quantities of a good that consumers are willing and able to buy at different price levels. When this data is plotted on a graph with price on the vertical axis and quantity on the horizontal axis, we obtain a <strong>demand curve</strong>, which typically slopes downward from left to right.
          </p>
        </NoteCard>

        <NoteCard title="The Law of Demand" type="theory" delay={50}>
          <p>
            <strong>The Law of Demand</strong> states that there is an <strong>inverse (negative) relationship</strong> between the price of a good and the quantity demanded, <em>ceteris paribus</em> (all other factors remaining constant). As price rises, quantity demanded falls; as price falls, quantity demanded rises. This fundamental law gives the demand curve its characteristic downward slope.
          </p>
          <p className="mt-3">
            The law of demand can be explained through two key effects:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-2">The Substitution Effect</h5>
              <p className="text-sm text-muted-foreground">
                When the price of a good rises, it becomes relatively more expensive compared to substitute goods. Consumers respond by switching some of their consumption to these now relatively cheaper alternatives, reducing the quantity demanded of the original good.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-2">The Income Effect</h5>
              <p className="text-sm text-muted-foreground">
                When the price of a good rises, consumers experience a reduction in their real purchasing power (real income). With effectively less income, consumers can afford to buy less of most goods, including the good whose price has risen, leading to reduced quantity demanded.
              </p>
            </div>
          </div>
        </NoteCard>

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
            Notice the inverse relationship: as price falls from $5 to $1, quantity demanded rises from 100kg to 500kg per week.
          </p>
        </NoteCard>

        <NoteCard title="Non-Price Determinants of Demand" type="theory" delay={100}>
          <p className="mb-3">Factors that cause the demand curve to <strong>shift</strong>:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Income</span>
              <p className="text-xs text-muted-foreground mt-1">Normal goods: ↑ Income → ↑ Demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Substitutes</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Price of substitute → ↑ Demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Complements</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Price of complement → ↓ Demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Tastes/Preferences</span>
              <p className="text-xs text-muted-foreground mt-1">Advertising, trends → shift demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Population</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Population → ↑ Market demand</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Expectations</span>
              <p className="text-xs text-muted-foreground mt-1">Expected price rise → ↑ Current demand</p>
            </div>
          </div>
        </NoteCard>

        <ExamTipBox title="Movement vs Shift" variant="gold">
          <p className="mb-2"><strong>Cambridge expects you to distinguish:</strong></p>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Movement along curve:</strong> Caused by a change in the good's <em>own price</em></li>
            <li>• <strong>Shift of curve:</strong> Caused by a change in <em>non-price factors</em></li>
            <li>✓ Always use correct terminology: "extension/contraction" vs "increase/decrease"</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 2: The Law of Supply */}
      <ContentSection 
        title="The Law of Supply" 
        subtitle="The Direct Relationship Between Price and Quantity Supplied"
      >
        <NoteCard title="Supply: Definition & Determinants" type="definition">
          <p>
            <GlossaryTooltip term="Supply" definition="The quantity of a good or service that producers are willing and able to offer for sale at various price levels over a given time period.">Supply</GlossaryTooltip> refers 
            to the quantity of a good producers are <strong>willing and able</strong> to offer for sale at each price level.
          </p>
          <p className="mt-3">
            <strong>The Law of Supply:</strong> As price rises, quantity supplied rises, <em>ceteris paribus</em>.
          </p>
        </NoteCard>

        <NoteCard title="Non-Price Determinants of Supply" type="theory" delay={100}>
          <p className="mb-3">Factors that cause the supply curve to <strong>shift</strong>:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Costs of Production</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Costs → ↓ Supply (shift left)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Technology</span>
              <p className="text-xs text-muted-foreground mt-1">Better tech → ↑ Supply (shift right)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Taxes</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Indirect tax → ↓ Supply</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Subsidies</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Subsidy → ↑ Supply</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Number of Firms</span>
              <p className="text-xs text-muted-foreground mt-1">More firms → ↑ Market supply</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Weather/Natural Events</span>
              <p className="text-xs text-muted-foreground mt-1">Bad harvest → ↓ Agricultural supply</p>
            </div>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Section 3: Market Equilibrium */}
      <ContentSection 
        title="Market Equilibrium" 
        subtitle="Price Determination Through Demand and Supply Interaction"
      >
        <NoteCard title="Equilibrium: Where D = S" type="definition">
          <p>
            <GlossaryTooltip term="Market Equilibrium" definition="The price and quantity where quantity demanded equals quantity supplied. At this point, there is no tendency for the market price to change.">Market equilibrium</GlossaryTooltip> occurs 
            where the demand curve intersects the supply curve. At this point:
          </p>
          <ul className="mt-3 space-y-2 ml-4">
            <li>• <strong>Quantity demanded = Quantity supplied</strong></li>
            <li>• No excess demand (shortage) or excess supply (surplus)</li>
            <li>• Price and quantity are stable (no tendency to change)</li>
          </ul>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <DemandSupplyDiagram title="Figure 2.1: Market Equilibrium Determination" />
        </div>

        <AnalysisBlock title="AO3 Analysis: Disequilibrium & Adjustment" type="analysis">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Excess Demand (P below equilibrium):</h5>
              <ul className="space-y-1 text-sm">
                <li>• Qd &gt; Qs → <strong>Shortage</strong></li>
                <li>• Consumers bid up price</li>
                <li>• Price rises until Qd = Qs</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Excess Supply (P above equilibrium):</h5>
              <ul className="space-y-1 text-sm">
                <li>• Qs &gt; Qd → <strong>Surplus</strong></li>
                <li>• Producers cut prices</li>
                <li>• Price falls until Qd = Qs</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>
      </ContentSection>

      {/* Section 4: Interactive Equilibrium Shifts */}
      <ContentSection 
        title="Changes in Equilibrium" 
        subtitle="Interactive Demonstration of Demand and Supply Shifts"
      >
        <NoteCard title="Comparative Statics Analysis" type="theory">
          <p>
            When non-price determinants change, curves shift and a <strong>new equilibrium</strong> is established. 
            This process of comparing old and new equilibria is called <strong>comparative statics</strong>.
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <MarketEquilibriumInteractive title="Figure 2.2: Interactive Equilibrium Shifts" />
        </div>

        <AnalysisBlock title="AO3 Analysis: Four Shift Scenarios" type="analysis">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-silver/20">
                  <th className="text-left py-2 text-silver-bright">Shift</th>
                  <th className="text-left py-2 text-silver-bright">Price Effect</th>
                  <th className="text-left py-2 text-silver-bright">Quantity Effect</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-silver/10">
                  <td className="py-2 font-medium text-cyan-400">↑ Demand (D → D₁)</td>
                  <td className="py-2">Price ↑</td>
                  <td className="py-2">Quantity ↑</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-2 font-medium text-cyan-400">↓ Demand (D → D₁)</td>
                  <td className="py-2">Price ↓</td>
                  <td className="py-2">Quantity ↓</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-2 font-medium text-magenta-400">↑ Supply (S → S₁)</td>
                  <td className="py-2">Price ↓</td>
                  <td className="py-2">Quantity ↑</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-magenta-400">↓ Supply (S → S₁)</td>
                  <td className="py-2">Price ↑</td>
                  <td className="py-2">Quantity ↓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="Diagram Drawing for Full Marks" variant="gold" className="mt-6">
          <p>When drawing equilibrium shift diagrams, Cambridge examiners require:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>✓ Label original equilibrium as <strong>E</strong> (or E₀)</li>
            <li>✓ Label new equilibrium as <strong>E₁</strong></li>
            <li>✓ Show <strong>P₀ → P₁</strong> and <strong>Q₀ → Q₁</strong> changes</li>
            <li>✓ Use <strong>arrows</strong> to show direction of shift</li>
            <li>✓ Explain the <strong>cause</strong> of the shift in your answer</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 5: Functions of the Price Mechanism */}
      <ContentSection 
        title="Functions of the Price Mechanism" 
        subtitle="Signaling, Incentivizing, and Rationing"
      >
        <NoteCard title="The Three Functions" type="theory">
          <p className="mb-4">
            The <GlossaryTooltip term="Price Mechanism" definition="The system by which price changes signal to consumers and producers how to allocate resources, provide incentives, and ration scarce goods.">price mechanism</GlossaryTooltip> serves 
            three key functions in a market economy:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h5 className="font-semibold text-primary mb-2">1. Signaling Function</h5>
              <p className="text-sm text-muted-foreground">
                Prices <strong>communicate information</strong> about relative scarcity. Rising prices signal 
                increased scarcity; falling prices signal abundance.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <h5 className="font-semibold text-secondary mb-2">2. Incentive Function</h5>
              <p className="text-sm text-muted-foreground">
                Prices <strong>motivate</strong> producers and consumers. Higher prices incentivize more supply; 
                lower prices incentivize more demand.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">3. Rationing Function</h5>
              <p className="text-sm text-muted-foreground">
                Prices <strong>allocate scarce resources</strong> to those willing and able to pay. 
                This determines "for whom" goods are produced.
              </p>
            </div>
          </div>
        </NoteCard>

        <AnalysisBlock title="AO4 Evaluation: Price Mechanism Limitations" type="evaluation">
          <p className="mb-3">While efficient, the price mechanism has limitations:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Market Failures:</h5>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Externalities:</strong> Social costs/benefits ignored</li>
                <li>• <strong>Public goods:</strong> Non-excludable, non-rival</li>
                <li>• <strong>Merit/demerit goods:</strong> Information failure</li>
                <li>• <strong>Monopoly:</strong> Market power distorts prices</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Equity Issues:</h5>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Inequality:</strong> Rich have more "votes"</li>
                <li>• <strong>Factor immobility:</strong> Slow adjustment</li>
                <li>• <strong>Time lags:</strong> Supply may not respond quickly</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="AO3/AO4 Essay Structure" variant="silver" className="mt-6">
          <p>For 25-mark essays on the price mechanism:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><strong>Para 1:</strong> Define and explain signaling function with diagram</li>
            <li><strong>Para 2:</strong> Explain incentive function with real-world example</li>
            <li><strong>Para 3:</strong> Explain rationing function and efficiency</li>
            <li><strong>Para 4-5:</strong> Evaluate limitations (market failures, equity)</li>
            <li><strong>Conclusion:</strong> Balanced judgment on effectiveness</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default PriceSystem;
