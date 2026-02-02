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

        {/* High-Density Law of Demand Block */}
        <div className="glass-card p-8 my-6">
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
        <div className="glass-card p-8 my-6">
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

        <AnalysisBlock title="AO3 Analysis: The Dual Mechanism of Demand" type="analysis">
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
        <NoteCard title="Definition of Supply (CIE 9708)" type="definition">
          <p>
            <GlossaryTooltip term="Supply" definition="The quantity of a good or service that producers are willing and able to offer for sale at various price levels over a given time period.">
              <strong className="text-magenta-400">Supply</strong>
            </GlossaryTooltip> is defined as the <strong>quantity of a good or service</strong> that producers are <strong>willing and able</strong> to supply to the market at a given price in a given time period.
          </p>
        </NoteCard>

        {/* High-Density Law of Supply Block */}
        <div className="glass-card p-8 my-6">
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
        <div className="glass-card p-8 my-6">
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

        <AnalysisBlock title="AO3 Analysis: The Dual Foundation of Supply" type="analysis">
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
        <div className="glass-card p-8 my-6">
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
        <div className="glass-card p-8 my-6">
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

        <div className="glass-card p-8 my-6">
          <DemandSupplyDiagram title="Figure 2.1: Market Equilibrium Determination" />
        </div>

        <div className="glass-card p-8 my-6">
          <ExcessDemandSupplyDiagram />
        </div>

        <AnalysisBlock title="AO3 Analysis: The Self-Correcting Mechanism" type="analysis">
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

      {/* Section 2.6: Consumer & Producer Surplus - WELFARE ECONOMICS PRECISION MODULE */}
      <ContentSection 
        title="2.6 Consumer and Producer Surplus" 
        subtitle="The Mathematical Foundations of Welfare Economics"
      >
        {/* High-Density Consumer Surplus Block */}
        <div className="glass-card p-8 my-6">
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
                <strong className="text-amber-400">Chain of Analysis (AO3):</strong> Consider the welfare implications of a supply contraction—for instance, due to an exogenous increase in raw material costs. The leftward shift of the supply curve establishes a new equilibrium at a higher price (P₁) and lower quantity (Q₁). Consumer Surplus contracts through two mechanisms: first, the <strong>price effect</strong>—the equilibrium price rises, reducing the surplus on each unit still purchased; second, the <strong>quantity effect</strong>—some consumers who previously purchased at P<sub>e</sub> are now priced out of the market entirely, losing their entire consumer surplus. The net result is a geometrically smaller CS triangle, representing an unambiguous welfare loss to the consuming population.
              </p>
            </div>
          </div>
        </div>

        {/* High-Density Producer Surplus Block */}
        <div className="glass-card p-8 my-6">
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
                <strong className="text-amber-400">Chain of Analysis (AO3):</strong> The magnitude of Producer Surplus is critically dependent upon the <strong>slope of the supply curve</strong>, which reflects the rate at which marginal costs rise with output. A relatively <strong>inelastic supply curve</strong> (steep slope) indicates that early units can be produced at costs far below the equilibrium price, generating substantial surplus. This corresponds to the concept of <strong>Economic Rent</strong>: producers with low opportunity costs (fertile land, superior technology, or location advantages) earn rents on their factor inputs. When demand increases, shifting rightward, the new equilibrium occurs at a higher price and quantity. Producer Surplus expands as firms receive the higher price on <strong>all units sold</strong>—including those units they were previously willing to supply at the lower price—representing a direct transfer of welfare from consumers to producers.
              </p>
            </div>
          </div>
        </div>

        {/* Precision Diagram */}
        <div className="glass-card p-8 my-6">
          <WelfareEconomicsSurplusDiagram />
        </div>

        {/* Total Welfare Analysis Block */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">Total Social Welfare and Allocative Efficiency</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                In welfare economics, <strong className="text-amber-400">Total Social Welfare</strong> (or Total Economic Surplus) is defined as the sum of Consumer Surplus and Producer Surplus: <span className="font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">W = CS + PS</span>. This aggregate measure captures the net welfare gain to society from the production and consumption of a commodity through voluntary market exchange. At the competitive equilibrium, where quantity demanded equals quantity supplied, Total Welfare is <strong>maximized</strong>—there exists no alternative allocation of resources that could increase one party's welfare without reducing another's. This is the <strong>Pareto Optimality</strong> condition that characterizes allocative efficiency.
              </p>
              <p>
                Any deviation from the competitive equilibrium—whether induced by government intervention (taxes, subsidies, price controls) or market failure (externalities, monopoly power)—generates a <strong className="text-red-400">Deadweight Loss (DWL)</strong>. This irrecoverable welfare loss represents transactions that would have occurred at the equilibrium price, generating mutual gains to trade, but are now prevented. The DWL forms a characteristic <strong>triangle</strong> (the "Harberger Triangle") between the demand curve, supply curve, and the quantity actually transacted. Unlike the redistribution of surplus between consumers and producers (which is a transfer, not a loss), deadweight loss represents a genuine reduction in social welfare—resources that are either misallocated or left idle.
              </p>
            </div>
          </div>
        </div>

        {/* Tax Incidence and Welfare Interactive Diagram */}
        <div className="glass-card p-8 my-6">
          <SurplusWithTaxDiagram />
        </div>

        {/* Senior Examiner's Conclusions */}
        <div className="glass-card p-8 my-6 bg-gradient-to-br from-background via-background to-amber-500/5">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">Senior Examiner's Conclusions (AO4)</h3>
            <div className="space-y-6">
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

        {/* High-Density Critical Insight Block */}
        <div className="glass-card p-8 my-6">
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

        <AnalysisBlock title="AO4 Evaluation: The Limitations of Market Allocation" type="evaluation">
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

        <ExamTipBox title="AO3/AO4 Essay Structure for Price Mechanism (20/20 Template)" variant="gold" className="mt-6">
          <p className="text-justify">For 25-mark essays on the effectiveness of the price mechanism, deploy this structure to maximize marks across all assessment objectives:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><strong>Introduction (AO1):</strong> Define price mechanism precisely; state thesis with nuance ("effective under certain conditions")</li>
            <li><strong>Para 1 (AO1/AO2):</strong> Explain the <strong>signaling function</strong> with demand-supply diagram showing price response to shift</li>
            <li><strong>Para 2 (AO2/AO3):</strong> Analyze the <strong>incentive function</strong> with real-world example (e.g., oil price shocks stimulating renewable investment)</li>
            <li><strong>Para 3 (AO2/AO3):</strong> Analyze the <strong>rationing function</strong>, linking to allocative efficiency and welfare maximization</li>
            <li><strong>Para 4 (AO4):</strong> <span className="text-amber-400">Evaluate critically</span>—externalities with diagram showing social vs. private costs and deadweight loss</li>
            <li><strong>Para 5 (AO4):</strong> <span className="text-amber-400">Evaluate further</span>—equity concerns, factor immobility, information asymmetry, and price stickiness</li>
            <li><strong>Conclusion (AO4):</strong> Weighted judgment—effective for private goods in competitive markets; requires complementary government intervention for externalities, public goods, and distributional concerns</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default PriceSystem;
