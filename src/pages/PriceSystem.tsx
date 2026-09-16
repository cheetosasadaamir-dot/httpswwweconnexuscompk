import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import KeyTakeaways from '@/components/KeyTakeaways';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import DemandSupplyDiagram from '@/components/diagrams/DemandSupplyDiagram';
import MarketEquilibriumInteractive from '@/components/diagrams/MarketEquilibriumInteractive';
import WelfareEconomicsSurplusDiagram from '@/components/diagrams/WelfareEconomicsSurplusDiagram';

import MovementShiftDiagram from '@/components/diagrams/MovementShiftDiagram';
import ExcessDemandSupplyDiagram from '@/components/diagrams/ExcessDemandSupplyDiagram';
import PriceFunctionsDiagram from '@/components/diagrams/PriceFunctionsDiagram';
import SurplusWithTaxDiagram from '@/components/diagrams/SurplusWithTaxDiagram';
import PriceCeilingDiagram from '@/components/diagrams/PriceCeilingDiagram';
import PriceFloorDiagram from '@/components/diagrams/PriceFloorDiagram';
import SubsidyDiagram from '@/components/diagrams/SubsidyDiagram';
import ChapterEnrichment from '@/components/ChapterEnrichment';

const PriceSystem = () => {
  return (
    <ChapterLayout
      chapterNumber={2}
      title="The Price System"
      subtitle="Understanding how prices allocate resources through the interaction of demand and supply forces."
    >
      {/* Key Takeaways Summary */}
      <KeyTakeaways
        title="Key Takeaways: The Price System"
        takeaways={[
          "Demand is downward-sloping due to the Substitution Effect and Income Effect; Supply is upward-sloping due to rising marginal costs.",
          "A change in own price causes a movement along the curve; non-price factors cause shifts of the curve.",
          "Equilibrium occurs where Qd = Qs; excess demand pushes price up, excess supply pushes price down.",
          "The price mechanism performs three functions: Signalling, Rationing, and Incentive.",
          "Consumer surplus = area above price, below demand curve; Producer surplus = area below price, above supply curve.",
          "Indirect taxes shift supply left (by tax amount); Subsidies shift supply right (by subsidy amount).",
          "Tax incidence depends on relative elasticities—inelastic side bears more burden."
        ]}
      />
      <ContentSection 
        title="2.1 The Law of Demand" 
        subtitle="The Inverse Relationship Between Price and Quantity Demanded"
      >
        <NoteCard title="Definition of Demand" type="definition">
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

        {/* High-Density Law of Demand Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">The Law of Demand: A Technical Analysis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-cyan-400">Law of Demand</strong> establishes the foundational inverse relationship between the price of a commodity and the quantity demanded, holding all other variables constant (<em>ceteris paribus</em>). This relationship, which forms the bedrock of microeconomic theory, manifests graphically as the characteristic downward-sloping demand curve from left to right. The theoretical underpinning of this law rests upon two fundamental mechanisms: the <strong className="text-cyan-400">Substitution Effect</strong> and the <strong className="text-cyan-400">Income Effect</strong>, both of which operate simultaneously when price changes occur in a market economy.
              </p>
              <p>
                The <strong className="text-cyan-400">Substitution Effect</strong> posits that when the price of good X rises, consumers perceive X as relatively more expensive compared to substitute goods Y and Z. Rational utility-maximizing consumers will therefore reallocate a portion of their consumption basket away from X towards these relatively cheaper alternatives. Conversely, when the price of X falls, it becomes relatively cheaper, inducing consumers to substitute away from Y and Z towards X, thereby increasing the quantity demanded. This effect operates purely on relative price changes and holds even when real income remains constant—it reflects the consumer's optimization of utility per unit of expenditure across competing goods.
              </p>
              <p>
                The <strong className="text-cyan-400">Income Effect</strong> operates through the channel of real purchasing power. When the price of a good falls, a consumer's nominal income now commands greater purchasing power—effectively, the consumer has experienced an increase in real income. For normal goods (goods with positive income elasticity), this increase in real income leads to higher consumption. Thus, a price reduction stimulates demand through both the substitution towards the now-cheaper good and the enhanced purchasing capacity of the consumer's budget. The converse applies when prices rise: real income falls, reducing the consumer's ability to purchase the same basket of goods, leading to a contraction in quantity demanded.
              </p>
            </div>
          </div>
        </div>

        {/* Diminishing Marginal Utility Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">The Theoretical Foundation: Diminishing Marginal Utility</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                Beyond the income and substitution effects, the <strong className="text-amber-400">Law of Diminishing Marginal Utility</strong> provides the deeper psychological rationale for the downward-sloping demand curve. This principle, first articulated by the marginalist economists of the nineteenth century (Jevons, Menger, and Walras), states that as a consumer acquires successive units of a commodity, the additional satisfaction (<strong>marginal utility</strong>) derived from each subsequent unit declines. The first glass of water to a thirsty person provides immense utility; the fifth glass provides considerably less; by the tenth, marginal utility may approach zero or even become negative.
              </p>
              <p>
                Rational consumers, seeking to maximize total utility subject to a budget constraint, will only purchase additional units of a good if the price is sufficiently low to compensate for the declining marginal utility. Formally, equilibrium consumption occurs where the ratio of marginal utility to price is equalized across all goods: <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">MUₓ/Pₓ = MUᵧ/Pᵧ = ... = MUₙ/Pₙ</span>. This equimarginal principle implies that a lower price is required to induce the consumer to purchase additional units of diminishing marginal value, thereby generating the inverse price-quantity relationship observed empirically.
              </p>
              <p>
                The <strong className="text-amber-400">Ceteris Paribus</strong> assumption is critical to isolating the pure price-quantity relationship. In econometric analysis, this requires controlling for confounding variables including consumer income, tastes and preferences, prices of related goods (substitutes and complements), expectations of future prices, population size and demographic composition, and the distribution of income within the consuming population. Failure to hold these factors constant leads to identification problems where observed correlations may reflect shifts in the entire demand curve rather than movements along it.
              </p>
            </div>
          </div>
        </div>

        <AnalysisBlock title=" Analysis: The Dual Mechanism of Demand" type="analysis">
          <p className="mb-4 text-justify">The Law of Demand operates through two simultaneous and reinforcing channels:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-2">1. The Substitution Effect</h5>
              <p className="text-sm text-muted-foreground text-justify">
                When the price of a good <strong>rises</strong>, it becomes <strong>relatively more expensive</strong> compared to substitute goods. Rational consumers, seeking to maximize utility per monetary unit expended, reallocate consumption towards these now relatively cheaper alternatives, thereby <strong>reducing quantity demanded</strong> of the original good. This effect is always negative for price increases—there is no ambiguity, as substitution invariably moves against the good whose relative price has risen.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-2">2. The Income Effect</h5>
              <p className="text-sm text-muted-foreground text-justify">
                When the price of a good <strong>rises</strong>, consumers experience a <strong>reduction in real purchasing power</strong>—their nominal income now purchases fewer goods in total. For <strong>normal goods</strong>, this reduction in real income leads to decreased consumption; for <strong>inferior goods</strong>, consumption may paradoxically increase. In the rare case of <strong>Giffen goods</strong>, the positive income effect dominates the negative substitution effect, producing an upward-sloping demand curve—though such cases remain largely theoretical curiosities with limited empirical support.
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
          
          {/* Step-by-Step Analysis: Demand Shift Chain */}
          <div className="p-4 bg-charcoal-deep/50 rounded-lg border border-cyan-500/30 mb-4">
            <h5 className="font-semibold text-cyan-400 text-sm mb-2">Step-by-Step Analysis: A Demand Shift</h5>
            <p className="text-xs text-muted-foreground mb-2">Example: Consumer incomes rise in the economy</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong className="text-cyan-400">Step 1:</strong> Real disposable income rises → consumers have greater purchasing power.</p>
              <p><strong className="text-cyan-400">Step 2:</strong> At <strong>every price level</strong>, consumers are now willing and able to buy more of normal goods.</p>
              <p><strong className="text-cyan-400">Step 3:</strong> The demand curve shifts <strong>rightward</strong> from D₁ to D₂.</p>
              <p><strong className="text-cyan-400">Step 4:</strong> At the original price P₁, there is now <strong>excess demand</strong> (Qd &gt; Qs).</p>
              <p><strong className="text-cyan-400">Step 5:</strong> Excess demand creates upward pressure on price → price rises to new equilibrium P₂.</p>
              <p><strong className="text-cyan-400">Step 6:</strong> New equilibrium: higher price (P₂ &gt; P₁) and higher quantity (Q₂ &gt; Q₁).</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Income</span>
              <p className="text-xs text-muted-foreground mt-1">
                Normal goods: ↑ Income → ↑ Demand<br />
                Inferior goods: ↑ Income → ↓ Demand
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Price of Substitutes</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Price of substitute → ↑ Demand for this good<br /><em>(Positive XED relationship)</em></p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Price of Complements</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Price of complement → ↓ Demand for this good<br /><em>(Negative XED relationship)</em></p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Tastes/Preferences</span>
              <p className="text-xs text-muted-foreground mt-1">Advertising, health scares, fashion trends → Shift demand curve</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Population</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Population → ↑ Market demand<br />Demographics also matter (aging population → healthcare demand)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-cyan-400 font-semibold">Expectations</span>
              <p className="text-xs text-muted-foreground mt-1">Expected future price rise → ↑ Current demand<br />(Stock-piling behavior)</p>
            </div>
          </div>
          
          {/* Examiner Trap */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg mt-4">
            <p className="text-xs text-amber-400 font-semibold mb-1">⚠️ Examiner Trap:</p>
            <p className="text-xs text-muted-foreground">A change in the good's <strong>own price</strong> causes a <em>movement along</em> the demand curve, not a shift. Only non-price factors shift the curve. Using "demand increases" when you mean "quantity demanded increases" loses marks.</p>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Section 2.2: The Law of Supply */}
      <ContentSection 
        title="2.2 The Law of Supply" 
        subtitle="The Direct Relationship Between Price and Quantity Supplied"
      >
        <NoteCard title="Definition of Supply" type="definition">
          <p>
            <GlossaryTooltip term="Supply" definition="The quantity of a good or service that producers are willing and able to offer for sale at various price levels over a given time period.">
              <strong className="text-magenta-400">Supply</strong>
            </GlossaryTooltip> is defined as the <strong>quantity of a good or service</strong> that producers are <strong>willing and able</strong> to supply to the market at a given price in a given time period.
          </p>
        </NoteCard>

        {/* High-Density Law of Supply Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-magenta-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">The Law of Supply: A Technical Analysis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-magenta-400">Law of Supply</strong> establishes the fundamental direct (positive) relationship between the price of a commodity and the quantity that profit-maximizing producers are willing and able to offer to the market, holding all other determinants constant (<em>ceteris paribus</em>). This relationship manifests graphically as the characteristic upward-sloping supply curve from left to right, reflecting the core economic logic that higher prices enhance the <strong className="text-magenta-400">profitability of production</strong>, thereby incentivizing firms to expand output. The theoretical foundations of this law rest upon two interrelated mechanisms: the <strong className="text-magenta-400">Profit Motive</strong> and the <strong className="text-magenta-400">Law of Diminishing Marginal Returns</strong>.
              </p>
              <p>
                The <strong className="text-magenta-400">Profit Motive</strong> constitutes the primary driving force behind producer behavior in a market economy. When the market price of a good increases, the potential profit margin per unit sold expands—assuming production costs remain unchanged in the short run. Rational, profit-maximizing firms respond by allocating additional resources (labor, capital, raw materials) to the production of this now more profitable commodity, thereby increasing quantity supplied. Higher prices effectively act as <strong>signals</strong> in the market, communicating to producers that society places greater value on this particular good and that resources should be redirected accordingly. This profit-driven reallocation forms the essence of Adam Smith's "invisible hand" mechanism, whereby individual self-interest inadvertently serves the collective welfare through efficient resource distribution.
              </p>
              <p>
                The <strong className="text-magenta-400">Law of Diminishing Marginal Returns</strong> provides the cost-side justification for the upward-sloping supply curve. In the short run, at least one factor of production (typically capital) remains fixed. As a firm increases output by adding variable factors (typically labor) to the fixed factor, marginal product initially rises but eventually declines once the optimal factor proportion is exceeded. This decline in marginal product translates directly into rising marginal costs: each additional unit of output becomes progressively more expensive to produce. Consequently, firms require higher prices to cover these escalating marginal costs and maintain profitability. The mathematical relationship is precise: <span className="font-mono text-magenta-400 bg-magenta-500/10 px-2 py-1 rounded">MC = w/MPₗ</span>, where marginal cost (MC) equals the wage rate (w) divided by the marginal product of labor (MPₗ). As MPₗ falls, MC rises, necessitating higher output prices.
              </p>
            </div>
          </div>
        </div>

        {/* Producer Rationality Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">The Microeconomic Logic of Producer Behavior</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The upward slope of the supply curve reflects the intersection of incentive and constraint. On the <strong className="text-amber-400">incentive dimension</strong>, higher prices increase producer surplus—the difference between the market price received and the minimum price at which the producer would be willing to supply. This surplus represents economic profit, which attracts entry of new firms in the long run and motivates existing firms to expand capacity in the short run. The profit incentive ensures that resources flow towards their most highly valued uses, as signaled by relative price movements in competitive markets.
              </p>
              <p>
                On the <strong className="text-amber-400">constraint dimension</strong>, producers face the inexorable logic of diminishing returns when operating in the short run. Consider a manufacturing firm with a fixed factory size: initially, hiring additional workers allows specialization and efficient division of labor, raising marginal product. However, beyond the optimal workforce size, congestion effects emerge—workers compete for limited machinery, workspace becomes cramped, and coordination costs escalate. Each additional worker adds less to total output than the previous worker, while incurring the same wage cost. This technological relationship, rooted in the physical constraints of production, generates the rising marginal cost curve that forms the firm's supply curve (above average variable cost).
              </p>
              <p>
                The <strong className="text-amber-400">synthesis</strong> of these forces produces the observable positive price-quantity relationship. Producers balance the enhanced revenue from higher prices against the rising costs of expanded production. Equilibrium output occurs where marginal cost equals marginal revenue (which equals price in perfectly competitive markets): <span className="font-mono text-magenta-400 bg-magenta-500/10 px-2 py-1 rounded">P = MC</span>. This profit-maximizing condition ensures that production expands precisely to the point where the last unit produced adds as much to revenue as it does to cost—the allocatively efficient outcome that maximizes total surplus in competitive markets.
              </p>
            </div>
          </div>
        </div>

        <AnalysisBlock title=" Analysis: The Dual Foundation of Supply" type="analysis">
          <p className="mb-4 text-justify">The Law of Supply rests upon two reinforcing theoretical pillars:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-magenta-500/10 border border-magenta-500/20">
              <h5 className="font-semibold text-magenta-400 mb-2">1. The Profit Incentive</h5>
              <p className="text-sm text-muted-foreground text-justify">
                Higher market prices <strong>expand profit margins</strong>, inducing rational, utility-maximizing entrepreneurs to allocate additional resources to production. The prospect of enhanced producer surplus—the excess of market price over minimum supply price—motivates both the intensive margin (existing firms producing more) and the extensive margin (new firms entering the industry). This profit-driven response forms the core transmission mechanism through which price signals coordinate economic activity across decentralized market economies.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">2. Rising Marginal Costs</h5>
              <p className="text-sm text-muted-foreground text-justify">
                The <strong>Law of Diminishing Marginal Returns</strong> ensures that, in the short run, expanding production becomes progressively more costly. As variable inputs are added to fixed factors, marginal product declines and marginal cost rises. Producers therefore require <strong>higher prices</strong> to justify and finance expanded output. The supply curve effectively traces the marginal cost curve—each point representing the minimum price at which firms are willing to supply an additional unit, given the incremental cost of producing it.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        <NoteCard title="Non-Price Determinants of Supply" type="theory" delay={100}>
          <p className="mb-3">Factors that cause the supply curve to <strong>shift</strong>:</p>
          
          {/* Step-by-Step Analysis: Supply Shift Chain */}
          <div className="p-4 bg-charcoal-deep/50 rounded-lg border border-magenta-500/30 mb-4">
            <h5 className="font-semibold text-magenta-400 text-sm mb-2">Step-by-Step Analysis: An Indirect Tax on Supply</h5>
            <p className="text-xs text-muted-foreground mb-2">Example: Government imposes a £2 per unit tax on cigarettes</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong className="text-magenta-400">Step 1:</strong> Tax → ↑ Cost of production by £2 per unit (production becomes more expensive).</p>
              <p><strong className="text-magenta-400">Step 2:</strong> At <strong>every price level</strong>, producers are willing to supply less (or need higher prices to supply the same quantity).</p>
              <p><strong className="text-magenta-400">Step 3:</strong> Supply curve shifts <strong>leftward/upward</strong> from S₁ to S₂ (by the amount of the tax).</p>
              <p><strong className="text-magenta-400">Step 4:</strong> At original price P₁, there is now <strong>excess demand</strong> (Qd &gt; Qs).</p>
              <p><strong className="text-magenta-400">Step 5:</strong> Price rises to new equilibrium P₂, but typically by <em>less than</em> the full tax amount.</p>
              <p><strong className="text-magenta-400">Step 6:</strong> New equilibrium: higher price (P₂ &gt; P₁) and lower quantity (Q₂ &lt; Q₁).</p>
              <p><strong className="text-primary">Tax Incidence:</strong> The burden is shared between consumers (higher price) and producers (lower margin) based on relative elasticities.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Costs of Production</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Wage costs, raw materials, energy → ↓ Supply (shift left)<br />↓ Costs → ↑ Supply (shift right)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Technology</span>
              <p className="text-xs text-muted-foreground mt-1">Improved technology → ↓ Unit costs → ↑ Supply (shift right)<br />Enables more output from same inputs</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Indirect Taxes</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Tax → ↓ Supply (shift left/up)<br />VAT, excise duties, carbon tax</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Subsidies</span>
              <p className="text-xs text-muted-foreground mt-1">↑ Subsidy → ↑ Supply (shift right/down)<br />Reduces effective production cost</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Number of Firms</span>
              <p className="text-xs text-muted-foreground mt-1">Entry of new firms → ↑ Market supply<br />Exit of firms → ↓ Market supply</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-muted">
              <span className="text-magenta-400 font-semibold">Weather/Natural Events</span>
              <p className="text-xs text-muted-foreground mt-1">Drought → ↓ Agricultural supply<br />Bumper harvest → ↑ Supply</p>
            </div>
          </div>

          {/* Text-Based Diagram Description */}
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 mt-4">
            <h5 className="font-semibold text-primary text-sm mb-2">Text-Based Diagram: Leftward Supply Shift</h5>
            <p className="text-xs text-muted-foreground">
              <strong>Original Equilibrium (E₁):</strong> Supply curve S₁ intersects Demand at price P₁ and quantity Q₁.<br />
              <strong>After Shift:</strong> Supply curve shifts left to S₂ (due to increased costs or tax).<br />
              <strong>New Equilibrium (E₂):</strong> At price P₂ (higher) and quantity Q₂ (lower).<br />
              <strong>Consumer Surplus:</strong> Decreases (higher price paid).<br />
              <strong>Producer Surplus:</strong> Changes depend on elasticities and cost increase.<br />
              <strong>Welfare Loss:</strong> Triangle between E₁ and E₂ represents deadweight loss.
            </p>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Section 2.3: Movement vs Shift */}
      <ContentSection showAd 
        title="2.3 Movement Along vs. Shift of Curve" 
        subtitle="A Critical Distinction for Cambridge Examinations"
      >
        <NoteCard title="The Critical Distinction" type="definition">
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

        <div className="glass-card p-5 md:p-6 my-3">
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
        <NoteCard title="Definition of Equilibrium" type="definition">
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
              <span className="text-2xl font-bold text-amber-400">Pₑ</span>
              <p className="text-xs text-muted-foreground mt-1">Equilibrium Price</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-2xl font-bold text-amber-400">Qₑ</span>
              <p className="text-xs text-muted-foreground mt-1">Equilibrium Quantity</p>
            </div>
          </div>
        </NoteCard>

        {/* High-Density Equilibrium & Invisible Hand Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">Market Equilibrium and the Invisible Hand: A Synthesis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                <strong className="text-amber-400">Market equilibrium</strong> represents the state of rest towards which competitive markets naturally gravitate—the point at which the independent plans of utility-maximizing consumers and profit-maximizing producers are rendered mutually consistent through the coordinating mechanism of price. At the equilibrium price (<span className="font-mono text-amber-400">Pₑ</span>), the quantity that consumers wish to purchase precisely equals the quantity that producers wish to sell, eliminating any tendency for price to change. Algebraically, equilibrium is determined by setting the demand function equal to the supply function and solving for price: <span className="font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">Qd(P) = Qs(P) → Pₑ</span>. Substitution of <span className="font-mono text-amber-400">Pₑ</span> into either function yields the equilibrium quantity (<span className="font-mono text-amber-400">Qₑ</span>).
              </p>
              <p>
                The <strong className="text-amber-400">Market Clearing Price</strong> terminology emphasizes the allocative function of equilibrium: at this price, the market "clears" in the sense that all goods offered for sale find willing buyers, and all consumers willing to pay the market price are able to make purchases. There is neither excess supply (unsold inventory accumulating with sellers) nor excess demand (frustrated buyers unable to obtain the good). This clearing process operates continuously in competitive markets, with prices adjusting dynamically in response to deviations from equilibrium—a process that Adam Smith famously characterized as the operation of an <strong className="text-cyan-400">"invisible hand"</strong> guiding individual self-interest towards socially optimal outcomes.
              </p>
              <p>
                The <strong className="text-amber-400">Invisible Hand</strong> doctrine holds that when economic agents pursue their private interests in competitive markets with well-defined property rights, the resulting allocation of resources tends towards Pareto efficiency—a state in which no individual can be made better off without making another worse off. Consumers, seeking to maximize utility subject to budget constraints, signal the intensity of their preferences through willingness to pay; producers, seeking to maximize profit, respond by directing resources towards their most highly valued uses. Price serves as the common denominator translating subjective valuations into objective market signals, enabling coordination among millions of decentralized decision-makers without any central planning authority. The equilibrium price, emerging spontaneously from myriad individual transactions, encapsulates all relevant information about relative scarcity and social valuation.
              </p>
            </div>
          </div>
        </div>

        {/* Rationing and Signalling Functions Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-serif text-2xl text-cyan-400 mb-4">The Rationing and Signalling Functions of Price</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-cyan-400">Rationing Function</strong> of price allocates scarce goods among competing consumers based on willingness and ability to pay. In a world of unlimited wants but limited resources, not every consumer can obtain every good they desire. The price mechanism resolves this fundamental tension by distributing goods to those consumers who value them most highly—as revealed by their willingness to sacrifice purchasing power. Those with higher valuations (measured in monetary terms) outbid those with lower valuations, ensuring that resources flow to their most valued uses. While critics note the distributional implications (the wealthy can always outbid the poor), proponents emphasize the efficiency properties: rationing by price avoids the deadweight losses associated with alternative allocation mechanisms such as queuing (time cost), random allocation (mismatch between goods and preferences), or bureaucratic discretion (rent-seeking and corruption).
              </p>
              <p>
                The <strong className="text-cyan-400">Signalling Function</strong> transmits information about changing conditions of scarcity and abundance throughout the economy. When demand rises relative to supply, prices increase, signalling to producers that resources should be reallocated towards the production of this good, and signalling to consumers that conservation and substitution are warranted. Conversely, falling prices signal abundance, encouraging consumption and discouraging production. This decentralized information processing mechanism operates with remarkable efficiency: the price of wheat in Chicago incorporates information about weather conditions in Kansas, labor costs in Argentina, shipping rates from Australia, and consumption patterns in China—all synthesized into a single number that guides millions of independent decisions. No central planner could hope to replicate this information aggregation function, as Friedrich Hayek demonstrated in his seminal analysis of the "knowledge problem" confronting socialist calculation.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 md:p-6 my-3">
          <DemandSupplyDiagram title="Figure 2.1: Market Equilibrium Determination" />
        </div>

        <div className="glass-card p-5 md:p-6 my-3">
          <ExcessDemandSupplyDiagram />
        </div>

        <AnalysisBlock title=" Analysis: The Self-Correcting Mechanism" type="analysis">
          <p className="mb-4 text-justify">
            Markets possess an inherent tendency towards equilibrium through the operation of competitive forces. When price deviates from equilibrium, disequilibrium creates pressures that drive price back towards balance:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-3">Excess Demand (Shortage)</h5>
              <p className="text-sm text-muted-foreground mb-2 text-justify">When <strong>P &lt; Pₑ</strong>:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Qd &gt; Qs → <strong>Shortage</strong> emerges in the market</li>
                <li>Consumers <strong>compete</strong> for limited supply, bidding up price</li>
                <li>Rising price triggers <strong>contraction</strong> of demand (movement along D)</li>
                <li>Rising price triggers <strong>extension</strong> of supply (movement along S)</li>
                <li>Process continues until <strong>Qd = Qs</strong> at new equilibrium</li>
              </ol>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-3">Excess Supply (Surplus)</h5>
              <p className="text-sm text-muted-foreground mb-2 text-justify">When <strong>P &gt; Pₑ</strong>:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Qs &gt; Qd → <strong>Surplus</strong> accumulates as unsold inventory</li>
                <li>Producers <strong>cut prices</strong> to clear excess stock</li>
                <li>Falling price triggers <strong>extension</strong> of demand (movement along D)</li>
                <li>Falling price triggers <strong>contraction</strong> of supply (movement along S)</li>
                <li>Process continues until <strong>Qd = Qs</strong> at equilibrium</li>
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

        <div className="glass-card p-5 md:p-6 my-3">
          <MarketEquilibriumInteractive title="Figure 2.2: Interactive Equilibrium Shifts" />
        </div>

        <AnalysisBlock title=" Analysis: The Four Shift Scenarios" type="analysis">
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

      {/* Section 2.6: Consumer & Producer Surplus - WELFARE ECONOMICS PRECISION MODULE */}
      <ContentSection showAd 
        title="2.6 Consumer and Producer Surplus" 
        subtitle="The Mathematical Foundations of Welfare Economics"
      >
        {/* High-Density Consumer Surplus Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-serif text-2xl text-cyan-400 mb-4">Consumer Surplus: A Technical Analysis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                <strong className="text-cyan-400">Consumer Surplus (CS)</strong> is defined as the difference between the <strong>maximum price a consumer is willing and able to pay</strong> for a good and the <strong>actual market price</strong> they pay. This concept, first rigorously formalized by Alfred Marshall, provides a monetary measure of the welfare gain accruing to consumers from market participation. The theoretical foundation rests upon the principle of <strong className="text-amber-400">Diminishing Marginal Utility</strong>: as a rational consumer acquires successive units of a commodity, the additional satisfaction derived from each subsequent unit declines. Consequently, the demand curve—which represents the consumer's willingness to pay for each marginal unit—slopes downward from left to right, with earlier units commanding higher reservation prices than later units.
              </p>
              <p>
                The geometric representation of Consumer Surplus is <strong>the triangular area below the demand curve and above the equilibrium price line</strong>, bounded on the left by the price axis. The height of this triangle is determined by the vertical distance between the <strong>demand curve's Y-intercept</strong> (denoted P<sub>max</sub>, representing the reservation price of the first unit) and the equilibrium price (P<sub>e</sub>). The base of the triangle extends horizontally from the origin to the equilibrium quantity (Q<sub>e</sub>). Mathematically, for linear demand curves, Consumer Surplus is calculated as: <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">CS = ½ × Qe × (Pmax − Pe)</span>. For non-linear demand functions, Consumer Surplus requires integration of the area under the demand curve from zero to Q<sub>e</sub>, minus the rectangular area representing total expenditure.
              </p>
              <p>
                <strong className="text-amber-400">Chain of Analysis:</strong> Consider the welfare implications of a supply contraction—for instance, due to an exogenous increase in raw material costs. The leftward shift of the supply curve establishes a new equilibrium at a higher price (P₁) and lower quantity (Q₁). Consumer Surplus contracts through two mechanisms: first, the <strong>price effect</strong>—the equilibrium price rises, reducing the surplus on each unit still purchased; second, the <strong>quantity effect</strong>—some consumers who previously purchased at P<sub>e</sub> are now priced out of the market entirely, losing their entire consumer surplus. The net result is a geometrically smaller CS triangle, representing an unambiguous welfare loss to the consuming population.
              </p>
            </div>
          </div>
        </div>

        {/* High-Density Producer Surplus Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-magenta-500 pl-6">
            <h3 className="font-serif text-2xl text-magenta-400 mb-4">Producer Surplus: A Technical Analysis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                <strong className="text-magenta-400">Producer Surplus (PS)</strong> is defined as the difference between the <strong>price at which a producer is willing and able to supply</strong> a good and the <strong>actual market price</strong> they receive. This measure captures the welfare gain to producers from market participation—the excess revenue above the minimum required to induce supply. Producer Surplus is conceptually analogous to <strong className="text-amber-400">Economic Rent</strong>: the return to a factor of production above its opportunity cost, which reflects the producer's incentive structure and underlying cost conditions.
              </p>
              <p>
                The geometric representation of Producer Surplus is <strong>the triangular area above the supply curve and below the equilibrium price line</strong>, bounded on the left by the price axis. The supply curve represents the marginal cost of production at each output level—the minimum price producers require to supply the marginal unit. Units produced at lower marginal cost than the equilibrium price generate surplus. The height of the PS triangle is determined by the vertical distance between the equilibrium price (P<sub>e</sub>) and the <strong>supply curve's Y-intercept</strong> (denoted P<sub>min</sub>, representing the minimum viable supply price for the first unit). For linear supply curves, Producer Surplus is calculated as: <span className="font-mono text-magenta-400 bg-magenta-500/10 px-2 py-1 rounded">PS = ½ × Qe × (Pe − Pmin)</span>.
              </p>
              <p>
                <strong className="text-amber-400">Chain of Analysis:</strong> The magnitude of Producer Surplus is critically dependent upon the <strong>slope of the supply curve</strong>, which reflects the rate at which marginal costs rise with output. A relatively <strong>inelastic supply curve</strong> (steep slope) indicates that early units can be produced at costs far below the equilibrium price, generating substantial surplus. This corresponds to the concept of <strong>Economic Rent</strong>: producers with low opportunity costs (fertile land, superior technology, or location advantages) earn rents on their factor inputs. When demand increases, shifting rightward, the new equilibrium occurs at a higher price and quantity. Producer Surplus expands as firms receive the higher price on <strong>all units sold</strong>—including those units they were previously willing to supply at the lower price—representing a direct transfer of welfare from consumers to producers.
              </p>
            </div>
          </div>
        </div>

        {/* Precision Diagram */}
        <div className="glass-card p-5 md:p-6 my-3">
          <WelfareEconomicsSurplusDiagram />
        </div>

        {/* Total Welfare Analysis Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">Total Economic Welfare: The Sum of Surplus</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                In welfare economics, <strong className="text-amber-400">Total Economic Welfare</strong> (or Total Economic Surplus) is defined as the sum of Consumer Surplus and Producer Surplus: <span className="font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">W = CS + PS</span>. This aggregate measure captures the net welfare gain to society from the production and consumption of a commodity through voluntary market exchange. At the competitive equilibrium, where quantity demanded equals quantity supplied, Total Welfare is <strong>maximized</strong>—no reallocation of resources at this point could make both consumers and producers better off simultaneously. This represents the market achieving its <strong>allocative function</strong> effectively.
              </p>
              <p>
                Any deviation from the competitive equilibrium—whether induced by government intervention (taxes, subsidies, price controls) or by market imperfections—generates a <strong className="text-red-400">Welfare Loss</strong>. This irrecoverable loss represents transactions that would have occurred at the equilibrium price, generating mutual gains to trade, but are now prevented. When quantity traded is restricted below equilibrium, some consumers who valued the good above marginal cost are denied access, and some producers who could profitably supply are prevented from doing so. The resulting welfare loss is a genuine reduction in the gains from trade—a cost borne by society as a whole.
              </p>
            </div>
          </div>
        </div>

        {/* Tax Incidence and Welfare Interactive Diagram */}
        <div className="glass-card p-5 md:p-6 my-3">
          <SurplusWithTaxDiagram />
        </div>

        {/* Senior Examiner's Conclusions */}
        <div className="glass-card p-5 md:p-6 my-3 bg-gradient-to-br from-background via-background to-amber-500/5">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">Senior Examiner's Conclusions</h3>
            <div className="space-y-3">
              {/* CS Conclusion */}
              <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <h5 className="font-semibold text-cyan-400 mb-3">Consumer Surplus Evaluation</h5>
                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  "Ultimately, the magnitude of Consumer Surplus is heavily dependent on the <strong className="text-cyan-400">Price Elasticity of Demand (PED)</strong>. In markets with highly inelastic demand, such as addictive demerit goods (tobacco, alcohol) or life-saving pharmaceuticals, the potential for consumer surplus is vast, as consumers demonstrate high willingness-to-pay relative to equilibrium prices. Yet paradoxically, these same consumers are <strong>more vulnerable to welfare erosion</strong> through price increases or indirect taxation—because their quantity response is limited, they absorb the burden through reduced surplus rather than reduced consumption. Conversely, in highly elastic markets, consumers can easily substitute, limiting both the magnitude of CS and their exposure to welfare losses from price shocks. This insight is critical for policy analysis: the welfare burden of excise duties falls disproportionately on consumers with the fewest alternatives."
                </p>
              </div>

              {/* PS Conclusion */}
              <div className="p-4 rounded-lg bg-magenta-500/10 border border-magenta-500/20">
                <h5 className="font-semibold text-magenta-400 mb-3">Producer Surplus Evaluation</h5>
                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  "In conclusion, Producer Surplus is a vital indicator of allocative efficiency and market functioning; however, in cases of <strong className="text-magenta-400">market power</strong> (Monopoly), a firm may capture Consumer Surplus and convert it into 'Excess Producer Surplus' (supernormal profit). This transfer occurs because the monopolist restricts output below the competitive level and raises price above marginal cost. While the <strong>total PS may appear larger</strong> for the monopolist, this is a misleading measure of social welfare—the expanded PS comes at the cost of both reduced CS <strong>and</strong> a deadweight loss representing foregone transactions. This raises <strong>normative questions regarding equity and fairness</strong> in the price system: is it socially acceptable for producers with market power to extract rents from consumers who have limited alternatives? The answer depends on one's ethical framework, but the positive economic analysis is unambiguous: monopoly pricing sacrifices allocative efficiency for producer gain."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Exam Tip */}
        <ExamTipBox title="Surplus Calculation Formula (Full Marks)" variant="gold" className="mt-6">
          <p className="text-justify">For calculation questions, surplus areas form <strong>triangles</strong> (linear curves) or require <strong>integration</strong> (non-linear curves):</p>
          <div className="mt-3 p-4 rounded-lg bg-muted/50 font-mono text-sm space-y-2">
            <p className="text-cyan-400">CS = ½ × Q<sub>e</sub> × (P<sub>max</sub> − P<sub>e</sub>)</p>
            <p className="text-magenta-400">PS = ½ × Q<sub>e</sub> × (P<sub>e</sub> − P<sub>min</sub>)</p>
            <p className="text-amber-400">Total Welfare = CS + PS</p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Where P<sub>max</sub> is the Y-intercept of the demand curve (maximum willingness to pay), P<sub>min</sub> is the Y-intercept of the supply curve (minimum acceptable supply price), P<sub>e</sub> is equilibrium price, and Q<sub>e</sub> is equilibrium quantity.
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

        <div className="glass-card p-5 md:p-6 my-3">
          <PriceFunctionsDiagram />
        </div>

        <AnalysisBlock title=" Analysis: The Three Functions in Detail" type="analysis">
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

        {/* High-Density Critical Insight Block */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="font-serif text-2xl text-red-400 mb-4">Critical Insight: Why the Price System May Fail</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                While the price mechanism achieves remarkable efficiency in competitive markets with well-defined property rights, its operation is subject to significant <strong className="text-red-400">limitations and failures</strong> that provide the economic rationale for government intervention. <strong className="text-amber-400">Market failure</strong> occurs when the price system fails to allocate resources efficiently, resulting in a divergence between private and social costs or benefits, and a consequent deadweight loss relative to the socially optimal allocation.
              </p>
              <p>
                <strong className="text-amber-400">Externalities</strong> represent the most ubiquitous form of market failure: when production or consumption generates costs or benefits that accrue to third parties not involved in the market transaction, prices fail to reflect true social values. A factory emitting pollution imposes health costs on nearby residents not captured in the market price of its output; the factory's profit-maximizing output exceeds the socially optimal level. Conversely, education generates positive externalities (an educated citizenry benefits society beyond the individual student) that lead to under-provision by purely private markets. In such cases, the Invisible Hand guides the economy towards the wrong destination—the price signal is systematically distorted.
              </p>
              <p>
                <strong className="text-amber-400">Public goods</strong>—characterized by non-excludability and non-rivalry in consumption—cannot be efficiently provided by markets at all. Because no consumer can be excluded from enjoying national defense or clean air, rational consumers free-ride on the contributions of others, and private suppliers cannot capture sufficient revenue to cover costs. The price mechanism, dependent on the ability to exclude non-payers, simply collapses in the presence of true public goods, necessitating public provision financed through taxation.
              </p>
              <p>
                <strong className="text-amber-400">Price stickiness</strong> represents a further departure from the frictionless adjustment assumed in neoclassical models. In practice, prices may fail to respond to disequilibrium conditions due to menu costs (the administrative expense of changing prices), long-term contracts fixing prices in nominal terms, implicit contracts with customers expecting price stability, or asymmetric information leading to adverse selection concerns. Keynesian economics emphasizes such price rigidities in explaining persistent unemployment: if wages do not fall in response to excess labor supply, the labor market cannot clear, and involuntary unemployment persists indefinitely.
              </p>
              <p>
                <strong className="text-amber-400">Information asymmetry</strong> further undermines the efficiency properties of the price system. When one party to a transaction possesses superior information, markets may collapse entirely (Akerlof's "lemons problem") or generate inefficient separating equilibria (Spence's signaling models). Insurance markets plagued by adverse selection and moral hazard fail to provide efficient risk-sharing; credit markets with asymmetric information ration credit rather than clearing through price adjustment. In such contexts, the price mechanism cannot aggregate dispersed information efficiently, and alternative institutional arrangements (warranties, licensing, reputation mechanisms) must substitute for or supplement market pricing.
              </p>
            </div>
          </div>
        </div>

        <AnalysisBlock title=" Evaluation: The Limitations of Market Allocation" type="evaluation">
          <p className="mb-4 text-amber-400 font-medium text-justify">The price mechanism, while efficient under ideal conditions, exhibits significant failures requiring careful evaluation:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2">Allocative Failures</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Negative externalities:</strong> Overproduction of goods with external costs (pollution, congestion)</li>
                <li>• <strong>Positive externalities:</strong> Underproduction of goods with external benefits (education, R&D)</li>
                <li>• <strong>Public goods:</strong> Complete market failure due to non-excludability and free-riding</li>
                <li>• <strong>Merit goods:</strong> Information failure leads to underconsumption (healthcare, museums)</li>
                <li>• <strong>Monopoly power:</strong> Price exceeds marginal cost, creating deadweight loss</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">Dynamic Failures</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Income inequality:</strong> Purchasing power determines "votes"—the poor are under-represented</li>
                <li>• <strong>Factor immobility:</strong> Labor and capital cannot instantaneously reallocate to new uses</li>
                <li>• <strong>Price stickiness:</strong> Menu costs, contracts, and expectations prevent rapid adjustment</li>
                <li>• <strong>Information asymmetry:</strong> Adverse selection and moral hazard distort market outcomes</li>
                <li>• <strong>Time lags:</strong> Supply response may take months or years (agricultural cycles, capital investment)</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title=" Essay Structure for Price Mechanism (20/20 Template)" variant="gold" className="mt-6">
          <p className="text-justify">For 25-mark essays on the effectiveness of the price mechanism, deploy this structure to maximize marks across all assessment objectives:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><strong>Introduction:</strong> Define price mechanism precisely; state thesis with nuance ("effective under certain conditions")</li>
            <li><strong>Para 1:</strong> Explain the <strong>signaling function</strong> with demand-supply diagram showing price response to shift</li>
            <li><strong>Para 2:</strong> Analyze the <strong>incentive function</strong> with real-world example (e.g., oil price shocks stimulating renewable investment)</li>
            <li><strong>Para 3:</strong> Analyze the <strong>rationing function</strong>, linking to allocative efficiency and welfare maximization</li>
            <li><strong>Para 4:</strong> <span className="text-amber-400">Evaluate critically</span>—externalities with diagram showing social vs. private costs and deadweight loss</li>
            <li><strong>Para 5:</strong> <span className="text-amber-400">Evaluate further</span>—equity concerns, factor immobility, information asymmetry, and price stickiness</li>
            <li><strong>Conclusion:</strong> Weighted judgment—effective for private goods in competitive markets; requires complementary government intervention for externalities, public goods, and distributional concerns</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* ============================================================
          SECTION 2.7: SCHOLARLY SYNTHESIS — INTERVENTIONS IN THE PRICE SYSTEM
          Synthesised from tutor2u, EconomicsHelp, Khan Academy,
          Investopedia and Economics Online — diagram-grounded analysis
          ============================================================ */}
      <ContentSection
        title="2.7 Government Intervention in the Price System"
        subtitle="Price Controls, Indirect Taxes & Subsidies — Diagrammatic Welfare Analysis"
      >
        <NoteCard title="Why Intervene? The Theoretical Justification" type="theory">
          <p className="text-justify">
            Under a pure laissez-faire price mechanism, equilibrium price clears the market and—under restrictive assumptions—maximises total welfare (the sum of consumer and producer surplus). However, governments intervene whenever the unregulated outcome is judged to be <strong className="text-cyan-400">allocatively inefficient</strong> (externalities, public goods), <strong className="text-cyan-400">distributionally inequitable</strong> (essential goods unaffordable to low-income households), or <strong className="text-cyan-400">macroeconomically destabilising</strong> (volatile commodity prices). The four canonical instruments analysed below—maximum prices, minimum prices, indirect taxes, and subsidies—each modify the price signal received by consumers or producers, with predictable consequences for quantity traded, welfare distribution, and the emergence of non-price rationing mechanisms.
          </p>
        </NoteCard>

        {/* PRICE CEILING */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">2.7.1 Maximum Prices (Price Ceilings)</h3>
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
                <p>
                  A <strong className="text-red-400">price ceiling</strong> is a legally imposed maximum price below which transactions must occur. To be <em>binding</em>, the ceiling must lie strictly below the free-market equilibrium price Pₑ; a ceiling set above Pₑ is economically irrelevant. Common applications include rent controls (New York, Berlin, Mumbai), pharmaceutical price caps (NHS in the UK, Medicare Part D negotiations), wartime food rationing, and emergency anti-gouging statutes during natural disasters.
                </p>
                <p>
                  At the maximum price P_max, quantity demanded Q_d exceeds quantity supplied Qₛ, generating a persistent <strong className="text-red-400">shortage</strong>. Because price cannot rise to clear the market, allocation defaults to <strong>non-price mechanisms</strong>: queueing (rationing by patience), first-come-first-served, allocation by social network, or—most perniciously—the emergence of <strong>black markets</strong> where the good is illegally retraded above the ceiling. Empirical work on rent control (Diamond, McQuade & Qian, 2019, San Francisco) documents reduced rental supply, lower mobility, and conversion of rentals to condominiums—all rational responses to the suppressed price signal.
                </p>
              </div>
              <div>
                <PriceCeilingDiagram />
              </div>
            </div>

            <AnalysisBlock title=" Analysis: Welfare Consequences of a Binding Ceiling" type="analysis">
              <p className="text-justify mb-3">
                The welfare effects are theoretically ambiguous and empirically context-dependent. Consumer surplus changes by two opposing components: (i) inframarginal consumers who would have purchased at Pₑ now pay P_max and gain area equal to (Pₑ − P_max) × Qₛ; (ii) consumers excluded by the shortage lose the surplus they would have enjoyed on units between Qₛ and Qₑ. Producer surplus unambiguously falls because both price and quantity decline. The <strong>deadweight loss</strong> equals the welfare lost on units no longer traded (between Qₛ and Qₑ)—a triangle whose magnitude grows with the elasticities of demand and supply.
              </p>
            </AnalysisBlock>

            <AnalysisBlock title=" Evaluation: When are Ceilings Defensible?" type="evaluation">
              <p className="text-justify">
                The case for ceilings strengthens when (a) demand is <em>highly inelastic</em> (necessities such as insulin, staple foods) so welfare gains to remaining consumers are large, (b) supply is <em>highly inelastic in the short run</em> so quantity reduction is small, (c) the underlying market exhibits <em>monopoly power</em> such that the unregulated price is already above marginal cost, or (d) equity considerations dominate efficiency losses (e.g., humanitarian crises). The case weakens whenever ceilings deter long-run investment (housing supply collapses over decades, not months), incentivise quality deterioration (landlords reduce maintenance), or enable corruption in the rationing process.
              </p>
            </AnalysisBlock>
          </div>
        </div>

        {/* PRICE FLOOR */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">2.7.2 Minimum Prices (Price Floors)</h3>
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
                <p>
                  A <strong className="text-emerald-400">price floor</strong> is a legally imposed minimum price above which transactions must occur. The most policy-significant application is the <strong>national minimum wage</strong> in labour markets (UK NLW, US federal minimum wage), where the price floor is the wage and the "good" is labour. Agricultural price supports (the EU Common Agricultural Policy, US dairy price floors) and minimum unit pricing for alcohol (Scotland 2018) constitute further canonical examples.
                </p>
                <p>
                  At the minimum price P_min, quantity supplied Qₛ exceeds quantity demanded Q_d, producing a persistent <strong className="text-emerald-400">surplus</strong>. In labour markets this surplus is <em>classical unemployment</em>—workers willing to work at P_min cannot find employers willing to hire them at that wage. In agricultural markets, governments must either purchase and store the surplus (the EU's notorious "butter mountains" and "wine lakes" of the 1980s) or pay producers to leave land fallow ("set-aside" schemes). The fiscal cost is borne by taxpayers; the deadweight loss arises from units valued by consumers at less than the marginal cost of production.
                </p>
              </div>
              <div>
                <PriceFloorDiagram />
              </div>
            </div>

            <AnalysisBlock title=" Analysis: Minimum Wage and the Monopsony Defence" type="analysis">
              <p className="text-justify">
                The simple competitive model predicts that any binding minimum wage above the equilibrium reduces employment. However, the <strong>monopsony model</strong> (Card & Krueger, 1994; Dube, 2019) reverses this prediction: where employers possess wage-setting power, a moderate minimum wage can <em>simultaneously raise wages and increase employment</em> by neutralising the monopsonist's incentive to restrict hiring. Empirical meta-analyses of US state-level minimum wage variation suggest the disemployment effect is small or statistically indistinguishable from zero in the range commonly legislated, though larger increases (e.g., Seattle's $15 floor) generated detectable hours reductions.
              </p>
            </AnalysisBlock>

            <AnalysisBlock title=" Evaluation: Stakeholder Impact Matrix" type="evaluation">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="font-semibold text-emerald-400 mb-1">Beneficiaries</p>
                  <p className="text-muted-foreground">Workers retaining employment receive higher wages; producers in supported agricultural sectors receive guaranteed revenue; reduced wage inequality at the lower tail of the distribution.</p>
                </div>
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="font-semibold text-red-400 mb-1">Losers</p>
                  <p className="text-muted-foreground">Workers displaced by reduced labour demand (often youth, low-skilled); consumers facing higher prices passed on by firms; taxpayers funding agricultural buy-up; firms with thin margins forced to exit.</p>
                </div>
              </div>
            </AnalysisBlock>
          </div>
        </div>

        {/* SUBSIDY */}
        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">2.7.3 Producer Subsidies — Welfare Analysis</h3>
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
                <p>
                  A <strong className="text-cyan-400">subsidy</strong> is a per-unit payment made by government to producers, lowering the marginal cost of production and thereby shifting the supply curve <em>vertically downward</em> by the exact subsidy amount. The new market clears at a lower consumer price Pc and a higher quantity Q₁; the price effectively received by producers, Pp, equals Pc plus the subsidy. The total fiscal cost to government is the rectangle (Pp − Pc) × Q₁, financed through general taxation or borrowing.
                </p>
                <p>
                  Subsidies are economically justified where the subsidised good generates <strong>positive externalities</strong> (vaccinations, education, renewable energy, public transport)—because the unregulated market underproduces such goods relative to the social optimum. Where no externality exists (e.g., fossil fuel consumption subsidies, which the IMF estimates at 6.8% of global GDP in 2020), subsidies <em>reduce</em> welfare by inducing overproduction relative to the unregulated equilibrium and crowding out alternative uses of fiscal resources.
                </p>
                <p>
                  The <strong>incidence</strong> of the subsidy benefit—how it splits between consumers (lower Pc) and producers (higher Pp)—mirrors tax incidence and depends on relative elasticities. When demand is more inelastic than supply, consumers capture the larger share of the subsidy benefit; when supply is more inelastic, producers capture it. This explains why housing subsidies in supply-constrained urban markets (planning restrictions making PES low) tend to inflate prices for landowners rather than improve affordability for tenants.
                </p>
              </div>
              <div>
                <SubsidyDiagram />
              </div>
            </div>

            <AnalysisBlock title=" Evaluation: The Hidden Costs of Subsidies" type="evaluation">
              <p className="text-justify">
                Beyond direct fiscal cost, subsidies impose three further welfare burdens that examiners reward for identifying. First, the <strong>opportunity cost</strong> of public funds—each pound spent on subsidies is a pound not spent on healthcare, education, or debt reduction—must be weighed against the marginal benefit of the subsidised activity. Second, subsidies create <strong>X-inefficiency</strong>: shielded from full market pressure, recipient firms have weaker incentives to minimise costs, leading to bloated cost structures (the historic experience of state-subsidised European steel and coal industries). Third, subsidies are politically <strong>sticky</strong>: once granted, they generate concentrated beneficiary lobbies that resist removal even after the original justification has lapsed, producing entrenched market distortions.
              </p>
            </AnalysisBlock>
          </div>
        </div>

        <ExamTipBox title="Synthesis: Choosing the Right Intervention" variant="gold" className="mt-6">
          <p className="text-justify">
            High-scoring evaluative essays explicitly compare alternative interventions rather than analysing each in isolation. For a market exhibiting positive externalities, a <strong>subsidy</strong> dominates a price floor because it expands quantity (welfare-enhancing) rather than contracting it. For a market exhibiting negative externalities, a <strong>Pigouvian tax</strong> dominates a quantity restriction because it allows prices—not bureaucrats—to allocate the residual quantity efficiently. For markets where the policy goal is <em>equity</em> (affordable housing, essential medicines), targeted income transfers or vouchers typically dominate price ceilings because they preserve the allocative role of prices while addressing the distributional concern directly.
          </p>
        </ExamTipBox>
      </ContentSection>
      <ContentSection
        title="2.8 Exceptions to the Law of Demand"
        subtitle="Where the Downward-Sloping Curve Breaks Down"
      >
        <div className="grid md:grid-cols-3 gap-3">
          <NoteCard title="Veblen Goods" type="concept">
            <p className="text-justify text-sm">
              For conspicuous luxuries — designer handbags, prestige marques, fine wine — part of the utility derived is the <strong>status signal</strong> of the price itself. A price cut can therefore <em>reduce</em> quantity demanded by diluting exclusivity, producing an upward-sloping demand segment over a limited price range.
            </p>
          </NoteCard>
          <NoteCard title="Giffen Goods" type="concept">
            <p className="text-justify text-sm">
              An inferior staple (historically bread or rice in subsistence economies) where a price rise so erodes real income that households cut the expensive substitute (meat) and buy <strong>more</strong> of the staple to preserve calories. Here the negative income effect outweighs the substitution effect.
            </p>
          </NoteCard>
          <NoteCard title="Speculative Demand" type="concept">
            <p className="text-justify text-sm">
              In asset markets — housing, equities, crypto, commodity futures — rising prices generate expectations of further rises, so demand becomes <strong>self-reinforcing</strong> rather than self-correcting, until expectations reverse and the bubble deflates.
            </p>
          </NoteCard>
        </div>

        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-serif text-xl text-silver-bright mb-3">Interrelated Demand: Joint, Composite and Derived</h3>
            <div className="space-y-3 text-muted-foreground text-justify leading-relaxed">
              <p>
                <strong className="text-cyan-400">Joint (complementary) demand</strong> arises where two goods are consumed together, so a fall in the price of one raises demand for the other: printers and cartridges, cars and fuel, electric vehicles and charging infrastructure. <strong className="text-cyan-400">Composite demand</strong> exists where a single supply is drawn upon by several competing uses — milk for liquid consumption, cheese and butter; land for housing, agriculture and solar farms — so a rise in demand for one use raises the price faced by <em>all</em> the others. <strong className="text-cyan-400">Derived demand</strong> describes demand for a factor or intermediate input that exists only because of demand for the final good: demand for steel is derived from construction and vehicles, demand for labour from demand for output.
              </p>
              <p>
                These relationships explain why shocks travel across apparently unrelated markets. A surge in EV sales raises derived demand for lithium, cobalt and copper simultaneously; a drought that lifts the price of wheat also lifts the price of animal feed, and therefore of poultry and eggs. Strong answers trace this <strong>chain of transmission</strong> rather than treating each market as sealed.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 md:p-6 my-3">
          <div className="border-l-4 border-amber-500 pl-5">
            <h3 className="font-serif text-xl text-amber-400 mb-3">Interrelated Supply: Joint and Competitive</h3>
            <div className="space-y-3 text-muted-foreground text-justify leading-relaxed">
              <p>
                <strong className="text-amber-400">Joint supply</strong> occurs where one production process necessarily yields two outputs: beef and leather, crude oil refined into petrol, diesel and jet fuel, sheep producing both mutton and wool. Supply of the by-product therefore cannot be expanded independently — a diesel shortage cannot be relieved without simultaneously adding petrol to the market, which is why refinery bottlenecks produce curious price divergences between fuels.
              </p>
              <p>
                <strong className="text-amber-400">Competitive supply</strong> is the mirror image: a producer's fixed resources can be switched between alternative outputs, so more of one means less of another. A farmer allocates hectares between wheat and barley; a refinery adjusts its yield mix toward whichever product carries the higher margin. This is simply opportunity cost expressed on the supply side, and it means that subsidising one crop predictably contracts the supply of its competitor — a recurring source of unintended consequences in agricultural policy.
              </p>
            </div>
          </div>
        </div>

        <ExamTipBox title="Supply Shifters Worth Naming Precisely" variant="gold">
          <p className="text-justify">
            Do not write "costs changed". Name the mechanism: input prices, the number of firms in the market, producer expectations, indirect taxes (a vertical upward shift equal to the tax per unit for a specific tax; a proportionally widening shift for an ad valorem tax), subsidies (a downward shift equal to the subsidy), and <strong>technology</strong>, which lowers marginal cost and shifts supply rightward, cutting equilibrium price while raising equilibrium quantity.
          </p>
        </ExamTipBox>
      </ContentSection>

      <ContentSection showAd
        title="2.9 Price Discovery and Disequilibrium Dynamics"
        subtitle="How Markets Actually Reach Equilibrium"
      >
        <div className="grid md:grid-cols-2 gap-3">
          <NoteCard title="Walrasian (Price) Adjustment" type="theory">
            <p className="text-justify text-sm">
              At a given quantity, if the price exceeds the market-clearing level, excess supply appears and sellers bid the price down; if it lies below, excess demand bids it up. Adjustment runs through <strong>price</strong>, as in an auction or a continuously quoted financial market. Stability requires the conventional slopes: demand downward, supply upward.
            </p>
          </NoteCard>
          <NoteCard title="Marshallian (Quantity) Adjustment" type="theory">
            <p className="text-justify text-sm">
              Producers first commit to a quantity; the demand price they can obtain for that quantity then signals whether to expand or contract next period. Adjustment runs through <strong>quantity</strong>, which fits markets with long production lags — agriculture, mining, housebuilding, semiconductor fabrication.
            </p>
          </NoteCard>
        </div>

        <AnalysisBlock title="The Cobweb Model: Why Some Markets Oscillate" type="analysis">
          <p className="text-justify">
            Where output must be committed before price is known, producers form expectations from <em>last</em> period's price. A high price this year induces heavy planting, next year's glut collapses the price, the collapse discourages planting, and the following year's shortage lifts the price again. Whether these oscillations converge on equilibrium, diverge, or repeat indefinitely depends on the relative slopes: if supply is <strong>less</strong> price-elastic than demand the cycle converges; if it is <strong>more</strong> elastic the cycle explodes; if the elasticities are equal the market cycles forever. This is the formal explanation for the pork cycle, coffee and cocoa cycles, and the boom-bust rhythm of capital-intensive industries.
          </p>
        </AnalysisBlock>

        <AnalysisBlock title="Evaluation: Equilibrium as Abstraction, Not Description" type="evaluation">
          <p className="text-justify">
            Real markets are rarely <em>at</em> equilibrium; they are perpetually moving toward a target that is itself moving. Market power (OPEC+ quotas, dominant platforms, monopsony buyers of agricultural output) means observed prices partly reflect strategic behaviour rather than competitive interaction. Expectations and speculation can decouple price from current fundamentals, so the mechanism transmits noise alongside genuine scarcity signals. The comparative-static diagram remains indispensable as an analytical device — but a high-level answer says what the diagram omits: time, information, and power.
          </p>
        </AnalysisBlock>
      </ContentSection>

      <ContentSection
        title="2.10 The Price System in the Real World"
        subtitle="Contemporary Case Evidence"
      >
        <div className="grid md:grid-cols-2 gap-3">
          <RealWorldExample
            type="negative"
            title="Cocoa: The Inelastic Supply Shock (2024–25)"
            description="Drought and swollen shoot disease across Côte d'Ivoire and Ghana — roughly 60% of world output — cut the 2023/24 global crop by about 14% to some 4.2 million tonnes. London cocoa rose from around $6,900 per tonne in October 2024 to roughly $11,400 by the end of December, making cocoa the best-performing major commodity of the year with gains near 172%."
            impact="With both supply and demand highly price-inelastic in the short run, a modest quantity shock produced an extreme price movement. Manufacturers responded through shrinkflation and recipe reformulation rather than headline price rises."
            source="ICCO, Bloomberg commodity reporting"
          />
          <RealWorldExample
            type="positive"
            title="Lithium: The Glut After the Boom"
            description="Lithium carbonate prices fell roughly 86% from their late-2022 peak as output climbed from about 737,000 tonnes in 2022 to nearly 1.2 million tonnes (LCE) in 2024, outrunning slower-than-forecast EV demand. Mine closures in Australia and China through 2024 halved the surplus, and producers by 2025 described a paradox of falling prices alongside rising underlying demand."
            impact="A textbook commodity cycle: high prices attract investment, new capacity overshoots, prices undershoot, capacity exits, and the cycle repeats — a real-world cobweb with a multi-year production lag."
            source="Fastmarkets, Reuters market analysis"
          />
          <RealWorldExample
            type="neutral"
            title="OPEC+ and Managed Supply"
            description="Production quotas function as deliberate leftward management of global supply to defend a target price band. Since 2023 the group has repeatedly extended voluntary cuts of several million barrels per day against weakening Chinese demand growth and rising non-OPEC output from US shale, Guyana and Brazil, with Brent oscillating broadly between $70 and $95 per barrel."
            impact="Demonstrates both the power and the limits of cartel supply management: quota discipline, spare capacity and the elasticity of non-member supply all erode the cartel's control over price."
            source="Market reporting on OPEC+ quota decisions"
          />
          <RealWorldExample
            type="negative"
            title="Housing: Supply Rigidity Dominates"
            description="Planning restrictions, zoning and multi-year build times make housing supply strongly inelastic. UK completions persistently undershoot the stated 300,000-home target, sitting nearer 200,000–250,000. In the United States, mortgage rates near 6–7% created a lock-in effect: owners holding cheap fixed-rate loans refuse to sell, shrinking the supply of existing homes."
            impact="Price adjustment does almost all the work because quantity cannot respond. Demand-side measures — help-to-buy schemes, cheap credit — are largely capitalised into higher prices rather than into more houses."
            source="National housing statistics and mortgage market data"
          />
          <RealWorldExample
            type="neutral"
            title="Surge Pricing: Rationing in Real Time"
            description="Ride-hailing algorithms raise fares — sometimes two to five times the base — when demand spikes during rush hour, storms or events. The higher price simultaneously rations scarce driver capacity toward the highest-value journeys and pulls additional drivers onto the road within minutes, shifting supply rightward in near real time."
            impact="The purest live demonstration of the rationing and incentive functions operating together — and of the equity backlash they provoke, which has forced platform-imposed caps during declared emergencies."
            source="Platform pricing disclosures and academic studies"
          />
          <RealWorldExample
            type="negative"
            title="Semiconductors: Shortage, Glut, Shortage"
            description="The 2021–22 chip shortage pushed lead times past 52 weeks and idled vehicle assembly lines, costing global auto production an estimated $200 billion in 2021. By 2023–24 legacy and memory nodes had swung into oversupply and prices collapsed; by 2025 AI accelerators and high-bandwidth memory created a fresh bottleneck at the leading edge."
            impact="Capital-intensive capacity decisions taken years in advance against volatile derived demand generate cobweb dynamics — and the bottleneck migrates between segments rather than disappearing."
            source="Industry production and lead-time reporting"
          />
        </div>
      </ContentSection>

      <ContentSection
        title="2.11 Misconceptions, Welfare and the Limits of the Market"
        subtitle="Precision Points and Evaluative Range"
      >
        <div className="glass-card p-5 md:p-6 my-3">
          <h3 className="font-serif text-xl text-silver-bright mb-3">Six Errors Examiners See Repeatedly</h3>
          <ul className="space-y-3">
            {[
              ['"Demand curves always slope downward."', 'True for almost all normal goods, but Veblen goods, Giffen goods and speculative assets can slope upward over a range because status, dominant income effects or price expectations override substitution.'],
              ['"A change in demand and a change in quantity demanded are the same thing."', 'A change in quantity demanded is a movement along a fixed curve caused only by the good\u2019s own price. A change in demand is a shift of the whole curve caused by income, tastes, related prices, expectations or population.'],
              ['"Price controls are a free way to help people."', 'A ceiling below equilibrium creates a shortage, queuing and black markets; a floor above it creates a surplus someone must buy or store. Both suppress the rationing function and generate deadweight loss even when the distributional aim is met.'],
              ['"A shortage means supply is too low."', 'A shortage is excess demand at the prevailing price. It may arise because demand grew faster than supply, or simply because price is fixed below the market-clearing level. It is a statement about price relative to both curves.'],
              ['"Producer surplus is profit."', 'Producer surplus is revenue minus the minimum acceptable (marginal-cost based) sum over units sold. Fixed costs are not deducted, so it is closer to a contribution toward fixed costs and profit than to accounting profit.'],
              ['"Buffer stocks always stabilise prices."', 'International tin, coffee and cocoa schemes all collapsed when managers misjudged the trend price, exhausted storage, or ran out of funds to keep buying during a sustained glut. Success demands accurate forecasting and deep financing.'],
            ].map(([claim, correction]) => (
              <li key={claim}>
                <p className="text-sm text-red-300/90 italic">{claim}</p>
                <p className="text-sm text-muted-foreground text-justify mt-1">{correction}</p>
              </li>
            ))}
          </ul>
        </div>

        <AnalysisBlock title="Where the Price Mechanism Stops Working" type="evaluation">
          <p className="text-justify">
            The mechanism allocates private goods in competitive conditions with remarkable economy of information, but it fails predictably in five cases. <strong>Externalities</strong> drive a wedge between private and social cost, so price misvalues the good and output is wrong in level. <strong>Public goods</strong> are non-excludable and non-rival, so free-riding leaves them unpriced and under-provided. <strong>Information asymmetry</strong> — used cars, insurance, healthcare — corrupts the signal itself, producing adverse selection and moral hazard. <strong>Factor immobility</strong> means resources cannot follow the signal quickly, leaving structural unemployment behind declining industries. Finally, the market responds to <strong>purchasing power rather than need</strong>, so merit goods are under-consumed by low-income households. Each justifies intervention — and each intervention carries its own risk of government failure, so the evaluative judgement is always comparative rather than absolute.
          </p>
        </AnalysisBlock>

        <ExamTipBox title="Eight Evaluation Lines That Lift a Price-System Answer" variant="cyan">
          <ul className="space-y-1.5 text-sm">
            <li>• Elasticity governs the split between price and quantity adjustment after any shift.</li>
            <li>• Short-run supply is far more inelastic than long-run supply in housing, mining and agriculture.</li>
            <li>• Markets are continually in disequilibrium; equilibrium is an analytical reference point.</li>
            <li>• Pure price rationing is efficient but can conflict sharply with equity.</li>
            <li>• Joint and composite linkages mean intervention in one market distorts its neighbours.</li>
            <li>• Market power means observed prices reflect strategy as well as scarcity.</li>
            <li>• Expectations can decouple price from fundamentals and transmit noise as signal.</li>
            <li>• Judge intervention by weighing static deadweight loss against dynamic and equity gains.</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      <ChapterEnrichment id="how-markets-work" />
    </ChapterLayout>
  );
};

export default PriceSystem;
