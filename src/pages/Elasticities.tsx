import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import { ElasticityDiagram, AllElasticityDiagrams } from '@/components/diagrams/ElasticityDiagrams';
import YEDXEDDiagram from '@/components/diagrams/YEDXEDDiagram';
import PESDiagram from '@/components/diagrams/PESDiagram';

const Elasticities = () => {
  return (
    <ChapterLayout
      chapterNumber={3}
      title="Elasticities"
      subtitle="Measuring the responsiveness of demand and supply to changes in price, income, and related goods."
    >
      {/* Section 1: Price Elasticity of Demand (PED) */}
      <ContentSection 
        title="Price Elasticity of Demand (PED)" 
        subtitle="Measuring the Responsiveness of Quantity Demanded to Price Changes"
      >
        <NoteCard title="Definition of Price Elasticity of Demand" type="definition">
          <p>
            <GlossaryTooltip term="Price Elasticity of Demand" definition="A measure of the responsiveness of quantity demanded of a good to a change in its price, calculated as the percentage change in quantity demanded divided by the percentage change in price.">Price Elasticity of Demand (PED)</GlossaryTooltip> is a fundamental concept in microeconomics that measures the degree to which the quantity demanded of a good or service responds to changes in its market price. It quantifies the sensitivity of consumers to price fluctuations and provides crucial information for businesses, policymakers, and economists seeking to understand market dynamics. The elasticity coefficient tells us whether demand is relatively responsive (elastic) or unresponsive (inelastic) to price variations, which has profound implications for revenue management and taxation policy.
          </p>
          <p className="mt-3">
            The formal definition states that PED measures the <strong>proportionate (percentage) change in quantity demanded</strong> resulting from a <strong>proportionate (percentage) change in price</strong>. This proportionate measurement allows for meaningful comparisons across different goods, markets, and time periods, regardless of the units in which prices or quantities are measured.
          </p>
        </NoteCard>

        <NoteCard title="The PED Formula" type="formula" delay={100}>
          <div className="bg-navy-deep/50 p-6 rounded-lg border border-silver/20">
            <p className="text-center text-xl font-mono text-cyan-400 mb-4">
              PED = (% ΔQd) / (% ΔP)
            </p>
            <p className="text-center text-lg font-mono text-silver-bright mb-4">
              = (ΔQd / Qd) × (P / ΔP)
            </p>
            <div className="text-sm text-muted-foreground space-y-2 mt-4">
              <p><strong>Where:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• ΔQd = Change in quantity demanded</li>
                <li>• Qd = Original quantity demanded</li>
                <li>• ΔP = Change in price</li>
                <li>• P = Original price</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            <strong>Important Note:</strong> PED is always negative due to the inverse relationship between price and quantity demanded (the Law of Demand). However, economists conventionally use the <strong>absolute value</strong> (ignore the negative sign) when discussing and comparing elasticities.
          </p>
        </NoteCard>

        <NoteCard title="The Five Degrees of Price Elasticity" type="theory" delay={150}>
          <p className="mb-4">
            Price elasticity of demand exists on a spectrum ranging from perfectly elastic to perfectly inelastic. Understanding these five distinct categories is essential for analyzing how different markets respond to price changes and for predicting the revenue implications of pricing decisions.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-2">1. Perfectly Elastic Demand (PED = ∞)</h5>
              <p className="text-sm text-muted-foreground">
                Any price increase results in quantity demanded falling to zero. Consumers are infinitely sensitive to price. The demand curve is <strong>horizontal</strong>. This occurs in perfectly competitive markets where goods are homogeneous and consumers have perfect information about alternatives.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-2">2. Relatively Elastic Demand (PED &gt; 1)</h5>
              <p className="text-sm text-muted-foreground">
                The percentage change in quantity demanded exceeds the percentage change in price. Demand is responsive to price changes. Examples include luxury goods, goods with many substitutes, and non-essential items. A <strong>relatively flat</strong> demand curve indicates elastic demand.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">3. Unit Elastic Demand (PED = 1)</h5>
              <p className="text-sm text-muted-foreground">
                The percentage change in quantity demanded equals the percentage change in price. This is a special case where total revenue remains constant regardless of price changes. Graphically represented by a <strong>rectangular hyperbola</strong>.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <h5 className="font-semibold text-orange-400 mb-2">4. Relatively Inelastic Demand (PED &lt; 1)</h5>
              <p className="text-sm text-muted-foreground">
                The percentage change in quantity demanded is less than the percentage change in price. Demand is unresponsive to price changes. Examples include necessities, habit-forming goods, and goods with few substitutes. A <strong>relatively steep</strong> demand curve indicates inelastic demand.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2">5. Perfectly Inelastic Demand (PED = 0)</h5>
              <p className="text-sm text-muted-foreground">
                Quantity demanded does not change regardless of price changes. Consumers will buy the same amount at any price. The demand curve is <strong>vertical</strong>. Examples include life-saving medicines for which there is no substitute and where consumers must purchase regardless of cost.
              </p>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <h4 className="font-serif text-lg text-silver-bright mb-6 text-center">Figure 3.1: The Five Degrees of Price Elasticity of Demand</h4>
          <AllElasticityDiagrams />
        </div>


        {/* High-Density PED Determinants Block */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-serif text-2xl text-silver-bright mb-4">The Determinants of Price Elasticity: An Integrated Analysis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-cyan-400">price elasticity of demand</strong> for any good is not fixed but varies according to several interrelated determinants that collectively shape consumer responsiveness to price changes. The <strong className="text-cyan-400">availability and closeness of substitutes</strong> constitutes the single most important determinant: goods with numerous close substitutes exhibit highly elastic demand because consumers can readily switch to alternatives when prices rise, whereas goods with few or no substitutes (such as patented pharmaceuticals or addictive substances) demonstrate inelastic demand since consumers have limited options for substitution. This substitutability operates on multiple levels—brand-level elasticity exceeds product-category elasticity, which in turn exceeds industry-level elasticity—explaining why demand for "Coca-Cola" is more elastic than demand for "soft drinks" which is more elastic than demand for "beverages" as a category.
              </p>
              <p>
                The <strong className="text-cyan-400">proportion of income</strong> devoted to the good significantly influences elasticity through the intensity of the budget constraint's bite. Expensive purchases command greater consumer deliberation: a 10% price increase on an automobile or residential property induces intensive search for alternatives and careful reconsideration of the purchase decision, whereas the same percentage increase on salt or matches passes largely unnoticed. This proportion-of-income effect explains why demand for housing, vehicles, and consumer electronics tends to be elastic, while demand for everyday consumables exhibits inelasticity. The <strong className="text-cyan-400">necessity-luxury distinction</strong> operates through a similar mechanism: necessities—goods required for basic functioning such as staple foods, utilities, and essential medicines—demonstrate inelastic demand because consumption cannot be significantly reduced regardless of price; luxuries—discretionary purchases that can be postponed or foregone—exhibit elastic demand because price increases prompt deferral or cancellation.
              </p>
              <p>
                The <strong className="text-cyan-400">time horizon</strong> over which elasticity is measured profoundly affects observed responsiveness. In the immediate aftermath of a price change, consumers may be locked into established consumption patterns by contracts, habits, or incomplete information about alternatives; over longer periods, consumers discover substitutes, adjust lifestyles, change suppliers, and modify consumption habits, rendering demand increasingly elastic. Demand for petrol illustrates this temporal dimension: in the short run, commuters must fuel their vehicles regardless of price (inelastic); over years, consumers purchase fuel-efficient vehicles, relocate closer to work, or switch to public transport (elastic). <strong className="text-cyan-400">Habit formation and addiction</strong> create psychological switching costs that reduce elasticity: tobacco, alcohol, caffeine, and other habit-forming substances demonstrate persistently inelastic demand because the psychological cost of reducing consumption exceeds the financial cost of price increases.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Section 2: PED and Total Revenue */}
      <ContentSection 
        title="PED and Total Revenue" 
        subtitle="The Critical Relationship Between Elasticity and Revenue Optimization"
      >
        <NoteCard title="Understanding Total Revenue" type="definition">
          <p>
            <GlossaryTooltip term="Total Revenue" definition="The total amount of money received by a firm from the sale of goods or services, calculated as Price × Quantity sold.">Total Revenue (TR)</GlossaryTooltip> represents the total income a firm receives from selling its output. It is calculated simply as <strong>Price × Quantity (TR = P × Q)</strong>. The relationship between price changes and total revenue depends critically on the price elasticity of demand, making this one of the most practically important applications of elasticity analysis.
          </p>
          <div className="bg-graphite-deep/50 p-4 rounded-lg mt-4 border border-silver/20">
            <p className="text-center text-lg font-mono text-cyan-400">
              Total Revenue = Price × Quantity Sold
            </p>
          </div>
        </NoteCard>

        {/* High-Density PED-Revenue Analysis Block */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-2xl text-amber-400 mb-4">The Price Effect versus the Quantity Effect: A Technical Synthesis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The relationship between <strong className="text-amber-400">price elasticity of demand and total revenue</strong> represents one of the most consequential applications of elasticity analysis for business decision-making and fiscal policy design. When a firm contemplates a price change, two opposing forces simultaneously affect total revenue: the <strong className="text-cyan-400">price effect</strong> (the direct impact of charging a different price per unit) and the <strong className="text-cyan-400">quantity effect</strong> (the indirect impact through changed volume of sales). The net effect on total revenue depends entirely upon which force dominates, which in turn is determined by the price elasticity of demand. This relationship can be expressed algebraically: since <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">TR = P × Q</span>, a small percentage change in price (ΔP/P) combined with the resulting percentage change in quantity (ΔQ/Q) yields: <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">ΔTR ≈ Q × ΔP + P × ΔQ</span>.
              </p>
              <p>
                For goods with <strong className="text-cyan-400">elastic demand (PED &gt; 1)</strong>, the quantity effect dominates the price effect. When price falls, the proportionate increase in quantity demanded exceeds the proportionate decrease in price, generating a net increase in total revenue. Conversely, when price rises, the proportionate decrease in quantity demanded exceeds the proportionate increase in price, causing total revenue to fall. The business implication is unambiguous: firms facing elastic demand should reduce prices to increase revenue. This explains the prevalence of discount strategies, promotional pricing, and sales events in markets characterized by numerous substitutes—retailers of branded consumer electronics, fashion apparel, and non-essential services routinely deploy price reductions to stimulate demand and capture market share, confident that the volume gains will outweigh the per-unit revenue sacrifice.
              </p>
              <p>
                For goods with <strong className="text-amber-400">inelastic demand (PED &lt; 1)</strong>, the price effect dominates the quantity effect. When price rises, the proportionate decrease in quantity demanded is smaller than the proportionate increase in price, generating a net increase in total revenue. Conversely, when price falls, the proportionate increase in quantity demanded is insufficient to compensate for the lower price per unit, causing total revenue to decline. The business implication is equally clear: firms facing inelastic demand should raise prices to maximize revenue. This logic underpins the pricing power enjoyed by pharmaceutical companies with patented drugs, utilities operating as natural monopolies, and producers of essential commodities with few substitutes. The same reasoning explains why governments tax goods with inelastic demand (tobacco, alcohol, petrol): the behavioral distortion is minimized while tax revenue is maximized because consumption changes little despite the price increase.
              </p>
              <p>
                For goods with <strong className="text-silver-bright">unit elastic demand (PED = 1)</strong>, the price and quantity effects exactly offset: any price change leaves total revenue unchanged. This represents the revenue-maximizing point on the demand curve—the price at which the firm extracts maximum possible revenue from the market. Graphically, unit elasticity corresponds to the midpoint of a linear demand curve, and total revenue reaches its maximum at this point. The <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">Total Revenue Test</span> provides a practical diagnostic: if a price increase raises total revenue, demand is inelastic; if it reduces total revenue, demand is elastic; if revenue is unchanged, demand is unit elastic.
              </p>
            </div>
          </div>
        </div>

        <NoteCard title="The PED-Revenue Relationship: Summary Table" type="theory">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-silver/30">
                  <th className="text-left py-3 px-4 text-silver-bright">Elasticity</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Price Increase →</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Price Decrease →</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Dominant Effect</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-cyan-400">Elastic (PED &gt; 1)</td>
                  <td className="py-3 px-4 text-red-400">TR Falls ↓</td>
                  <td className="py-3 px-4 text-emerald-400">TR Rises ↑</td>
                  <td className="py-3 px-4">Quantity Effect</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-amber-400">Unit Elastic (PED = 1)</td>
                  <td className="py-3 px-4 text-silver-bright">TR Unchanged</td>
                  <td className="py-3 px-4 text-silver-bright">TR Unchanged</td>
                  <td className="py-3 px-4">Effects Balance</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-orange-400">Inelastic (PED &lt; 1)</td>
                  <td className="py-3 px-4 text-emerald-400">TR Rises ↑</td>
                  <td className="py-3 px-4 text-red-400">TR Falls ↓</td>
                  <td className="py-3 px-4">Price Effect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </NoteCard>

        {/* Senior Examiner's Conclusion for PED */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-xl text-amber-400 mb-4">Senior Examiner's Conclusion: The Limitations of PED Analysis</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                Ultimately, the usefulness of PED to a firm depends on the <strong className="text-amber-400">accuracy of the elasticity estimate</strong> and the <strong className="text-amber-400">validity of the ceteris paribus assumption</strong>. Elasticity coefficients are typically estimated from historical data or market research, both of which are subject to measurement error, sampling bias, and specification issues. More fundamentally, the ceteris paribus assumption rarely holds in dynamic competitive markets: when a firm reduces its price, competitors may respond with matching price cuts, negating the anticipated quantity gains; conversely, a price increase may trigger competitor entry or aggressive discounting, amplifying customer defection beyond the elasticity-predicted response. Furthermore, elasticity varies along the demand curve—a firm may find demand elastic at current prices but inelastic at lower prices—invalidating the assumption of constant elasticity implicit in many business applications. The sophisticated analyst recognizes that PED provides a useful first approximation, but must be supplemented with game-theoretic analysis of competitive dynamics, consideration of supply-side constraints, and sensitivity analysis across a range of elasticity estimates.
              </p>
            </div>
          </div>
        </div>

        <ExamTipBox title="The Total Revenue Test: Examination Application" variant="gold" className="mt-6">
          <p className="mb-2 text-justify"><strong>Cambridge 9708 frequently tests this relationship:</strong></p>
          <ul className="space-y-1 text-sm">
            <li>• If a price rise causes TR to rise → Demand is <strong>inelastic</strong> (Price Effect &gt; Quantity Effect)</li>
            <li>• If a price rise causes TR to fall → Demand is <strong>elastic</strong> (Quantity Effect &gt; Price Effect)</li>
            <li>• If TR remains constant → Demand is <strong>unit elastic</strong> (Effects Balance)</li>
            <li>✓ This "Total Revenue Test" provides a quick diagnostic for determining elasticity from revenue data without calculating percentage changes</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 3: Income Elasticity of Demand (YED) */}
      <ContentSection 
        title="Income Elasticity of Demand (YED)" 
        subtitle="Measuring How Demand Responds to Changes in Consumer Income"
      >
        <NoteCard title="Definition of Income Elasticity of Demand" type="definition">
          <p>
            <GlossaryTooltip term="Income Elasticity of Demand" definition="A measure of the responsiveness of quantity demanded to a change in consumer income, calculated as the percentage change in quantity demanded divided by the percentage change in income.">Income Elasticity of Demand (YED)</GlossaryTooltip> measures the responsiveness of quantity demanded to changes in consumer income. Unlike PED, the sign of YED carries important information about the nature of the good. This elasticity concept is crucial for understanding how economic growth and changes in living standards affect demand for different products.
          </p>
        </NoteCard>

        <NoteCard title="The YED Formula" type="formula" delay={100}>
          <div className="bg-navy-deep/50 p-6 rounded-lg border border-silver/20">
            <p className="text-center text-xl font-mono text-cyan-400 mb-4">
              YED = (% ΔQd) / (% ΔY)
            </p>
            <p className="text-center text-lg font-mono text-silver-bright">
              = (ΔQd / Qd) × (Y / ΔY)
            </p>
            <div className="text-sm text-muted-foreground space-y-2 mt-4">
              <p><strong>Where:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• ΔQd = Change in quantity demanded</li>
                <li>• Qd = Original quantity demanded</li>
                <li>• ΔY = Change in income</li>
                <li>• Y = Original income</li>
              </ul>
            </div>
          </div>
        </NoteCard>

        <NoteCard title="Classification of Goods by YED" type="concept" delay={150}>
          <p className="mb-4">
            The sign and magnitude of YED classifies goods into distinct categories, each with important implications for business strategy and economic analysis during periods of growth or recession.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-2">Normal Goods (YED &gt; 0)</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Demand increases when income increases. These are goods consumers want more of as they become wealthier. The positive relationship between income and demand defines normal goods.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="p-2 rounded bg-background/50">
                  <span className="text-emerald-300 text-sm font-medium">Necessities (0 &lt; YED &lt; 1)</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Demand rises with income, but less than proportionally. Examples: basic food, utilities, housing.
                  </p>
                </div>
                <div className="p-2 rounded bg-background/50">
                  <span className="text-emerald-300 text-sm font-medium">Luxuries (YED &gt; 1)</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Demand rises more than proportionally with income. Examples: holidays, designer goods, fine dining.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2">Inferior Goods (YED &lt; 0)</h5>
              <p className="text-sm text-muted-foreground">
                Demand decreases when income increases. Consumers switch to higher-quality alternatives as income rises. Examples include budget supermarket brands, public transport (in some contexts), and second-hand goods. Inferior goods are counter-cyclical—demand rises during recessions.
              </p>
            </div>
          </div>
        </NoteCard>

        {/* High-Density YED Business Application Block */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="font-serif text-2xl text-emerald-400 mb-4">Strategic Application: YED and Business Cycle Forecasting</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-emerald-400">income elasticity of demand</strong> provides firms with a powerful analytical tool for anticipating how macroeconomic fluctuations will affect product-specific demand. During periods of <strong className="text-emerald-400">economic expansion</strong>—characterized by rising GDP, falling unemployment, and increasing consumer confidence—demand for goods with high positive YED (luxury goods where YED &gt; 1) will grow proportionately faster than aggregate income growth. Producers of premium automobiles, designer apparel, international travel services, and fine dining experiences can anticipate demand growth that exceeds GDP growth rates, justifying capacity expansion and aggressive marketing investment. Conversely, producers of necessities (0 &lt; YED &lt; 1) such as basic foodstuffs, utilities, and healthcare services will experience more modest demand growth, reflecting the reality that consumers have already satisfied baseline requirements for these goods and allocate marginal income primarily to discretionary purchases.
              </p>
              <p>
                During <strong className="text-red-400">economic recessions</strong>—periods of declining real income, rising unemployment, and deteriorating consumer sentiment—the YED coefficient determines corporate fortunes. Luxury goods producers (YED &gt; 1) suffer disproportionately as consumers defer discretionary purchases, with demand contracting faster than aggregate income decline. The 2008-2009 financial crisis illustrated this dynamic: luxury retailers, premium hospitality providers, and high-end automotive manufacturers experienced sales declines far exceeding the 2-3% GDP contraction, with some segments contracting 30-40% as affluent consumers retrenched. Simultaneously, <strong className="text-red-400">inferior goods producers</strong> (YED &lt; 0) experience counter-cyclical demand expansion: as incomes fall, consumers substitute towards budget alternatives—discount retailers, public transportation, second-hand goods, and store-brand products all witness demand growth during recessions. This counter-cyclical property makes inferior goods businesses attractive for portfolio diversification and recession-hedging strategies.
              </p>
              <p>
                The <strong className="text-amber-400">sign of YED</strong> carries critical information that PED lacks: a positive YED classifies the good as normal (demand moves with income), while a negative YED classifies it as inferior (demand moves against income). This distinction has profound implications for long-term strategic planning: as economies develop and per capita incomes rise secularly, normal goods experience trend demand growth while inferior goods face trend decline. Firms producing inferior goods must either innovate to reposition products as normal goods, diversify into normal goods categories, or accept structural demand decline as their strategic context.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 my-6">
          <h4 className="font-serif text-lg text-silver-bright mb-6 text-center">Figure 3.2: Income Elasticity of Demand</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <YEDXEDDiagram type="yed-normal" title="Normal Good (YED > 0)" />
            <YEDXEDDiagram type="yed-inferior" title="Inferior Good (YED < 0)" />
          </div>
        </div>

        {/* Senior Examiner's Conclusion for YED */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-xl text-amber-400 mb-4">Senior Examiner's Conclusion: The Practical Limitations of YED</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The usefulness of YED for business forecasting depends critically on the <strong className="text-amber-400">stability of the elasticity coefficient</strong> across income levels and time periods. Empirical research reveals that YED is not constant: goods classified as luxuries in developing economies often become necessities as incomes rise (television sets, refrigerators, mobile phones have all transitioned from luxury to necessity status over decades). Furthermore, YED varies across income segments—a good may be a luxury for low-income consumers but a necessity for high-income consumers—complicating market-wide elasticity estimates. The sophisticated analyst recognizes that YED provides directional guidance for cyclical planning but should be supplemented with segmented analysis and scenario planning across a range of macroeconomic outcomes.
              </p>
            </div>
          </div>
        </div>

        <ExamTipBox title="Special Cases: Giffen & Veblen Goods" variant="silver" className="mt-6">
          <p className="mb-2 text-justify"><strong>Cambridge may test these exceptional cases:</strong></p>
          <ul className="space-y-2 text-sm">
            <li><strong>Giffen Goods:</strong> Extremely inferior goods where the income effect dominates the substitution effect, causing demand to <em>increase</em> when price rises (violating the Law of Demand). Theoretical case: staple foods in extreme poverty where price increases reduce real income so severely that consumers cannot afford superior alternatives.</li>
            <li><strong>Veblen Goods:</strong> Conspicuous consumption goods where higher prices increase demand due to status signaling. The high price itself becomes a desirable attribute, demonstrating wealth to observers. Examples: luxury watches, designer fashion, fine art, exclusive club memberships.</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 4: Cross Elasticity of Demand (XED) */}
      <ContentSection 
        title="Cross Elasticity of Demand (XED)" 
        subtitle="Measuring How Demand for One Good Responds to Price Changes of Another"
      >
        <NoteCard title="Definition of Cross Elasticity of Demand" type="definition">
          <p>
            <GlossaryTooltip term="Cross Elasticity of Demand" definition="A measure of the responsiveness of quantity demanded of one good to a change in the price of another good, calculated as the percentage change in quantity demanded of good A divided by the percentage change in price of good B.">Cross Elasticity of Demand (XED)</GlossaryTooltip> measures the responsiveness of demand for one good (Good A) to changes in the price of another good (Good B). The sign of XED reveals the relationship between the two goods—whether they are substitutes, complements, or unrelated.
          </p>
        </NoteCard>

        <NoteCard title="The XED Formula" type="formula" delay={100}>
          <div className="bg-navy-deep/50 p-6 rounded-lg border border-silver/20">
            <p className="text-center text-xl font-mono text-cyan-400 mb-4">
              XED = (% ΔQd of Good A) / (% ΔP of Good B)
            </p>
            <p className="text-center text-lg font-mono text-silver-bright">
              = (ΔQa / Qa) × (Pb / ΔPb)
            </p>
          </div>
        </NoteCard>

        <NoteCard title="Classification by XED Sign" type="concept" delay={150}>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 mb-2">Substitute Goods (XED &gt; 0)</h5>
              <p className="text-sm text-muted-foreground">
                When the price of Good B rises, demand for Good A increases. The goods can replace each other in consumption. <strong>Positive XED</strong> indicates a substitutionary relationship. Examples: Coca-Cola and Pepsi, butter and margarine, bus and train travel. The higher the positive XED, the closer the substitutes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2">Complementary Goods (XED &lt; 0)</h5>
              <p className="text-sm text-muted-foreground">
                When the price of Good B rises, demand for Good A falls. The goods are consumed together. <strong>Negative XED</strong> indicates a complementary relationship. Examples: cars and petrol, printers and ink cartridges, smartphones and apps. The more negative the XED, the stronger the complement relationship.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-500/10 border border-slate-500/20">
              <h5 className="font-semibold text-slate-400 mb-2">Unrelated Goods (XED = 0)</h5>
              <p className="text-sm text-muted-foreground">
                A change in the price of Good B has no effect on demand for Good A. The goods are independent in consumption. Examples: bread and bicycles, coffee and computers.
              </p>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <h4 className="font-serif text-lg text-silver-bright mb-6 text-center">Figure 3.3: Cross Elasticity of Demand</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <YEDXEDDiagram type="xed-substitutes" title="Substitutes (XED > 0)" />
            <YEDXEDDiagram type="xed-complements" title="Complements (XED < 0)" />
          </div>
        </div>

        {/* High-Density XED Strategic Application Block */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-serif text-2xl text-cyan-400 mb-4">Strategic Application: XED in Competitive Analysis and Pricing Strategy</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-cyan-400">cross elasticity of demand</strong> serves as a quantitative measure of market structure, enabling rigorous definition of market boundaries for competitive analysis, antitrust enforcement, and strategic planning. Competition authorities routinely employ XED to define relevant markets: products with high positive XED values constitute close substitutes and therefore belong to the same market for regulatory purposes. The U.S. Federal Trade Commission and European Commission both utilize XED-based analysis in merger reviews—if a proposed merger would combine firms producing goods with high positive XED, the combined entity may possess market power warranting regulatory intervention. Conversely, products with low or zero XED belong to separate markets, and their combination raises fewer competitive concerns.
              </p>
              <p>
                For <strong className="text-cyan-400">substitute goods</strong> (XED &gt; 0), firms face the strategic imperative of competitive monitoring and responsive pricing. When a competitor reduces its price, the positive cross-elasticity ensures that demand will flow away from the firm's product towards the now-cheaper substitute. The magnitude of the XED coefficient determines the urgency of competitive response: high XED values (close substitutes) mandate immediate price matching or differentiation strategies, while low XED values (distant substitutes) afford greater pricing flexibility. Airlines, telecommunications providers, and retailers operating in highly competitive markets with high XED between rival offerings must maintain sophisticated competitive intelligence systems to detect and respond to rival price movements. The "Cross-Effect" creates strategic interdependence—each firm's pricing decision affects rivals' demand, generating the game-theoretic dynamics characteristic of oligopolistic competition.
              </p>
              <p>
                For <strong className="text-red-400">complementary goods</strong> (XED &lt; 0), firms can exploit the demand interdependence through <strong>bundle pricing</strong> and <strong>loss-leader strategies</strong>. The canonical example is the "razor-and-blades" model: sell the razor (primary good) at low margin or even a loss, knowing that the negative XED ensures customers will subsequently purchase high-margin blades (complement). Printer manufacturers, video game console producers, and mobile phone carriers all deploy variants of this strategy—subsidizing the primary device to capture the complementary consumables, services, or applications revenue stream. The strength of the complementary relationship (magnitude of negative XED) determines the viability of this strategy: strong complements (highly negative XED) support aggressive primary good discounting; weak complements (mildly negative XED) require more balanced pricing across the product bundle.
              </p>
            </div>
          </div>
        </div>

        {/* Senior Examiner's Conclusion for XED */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-xl text-amber-400 mb-4">Senior Examiner's Conclusion: The Asymmetry of Cross-Effects</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                Students frequently assume symmetry in cross-elasticities—that if Good A and Good B are substitutes, the XED of A with respect to B equals the XED of B with respect to A. This assumption is typically <strong className="text-amber-400">incorrect</strong>. The cross-elasticity relationship is asymmetric when goods differ in market size, brand strength, or consumer loyalty. A price increase for Coca-Cola may shift substantial demand to Pepsi (high XED of Pepsi with respect to Coca-Cola), but a price increase for a small regional cola brand may shift minimal demand to Coca-Cola (low XED of Coca-Cola with respect to the regional brand). The sophisticated analyst recognizes this asymmetry and calculates directional XED values appropriate to the strategic question at hand.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Section 5: Price Elasticity of Supply (PES) */}
      <ContentSection 
        title="Price Elasticity of Supply (PES)" 
        subtitle="Measuring the Responsiveness of Quantity Supplied to Price Changes"
      >
        <NoteCard title="Definition of Price Elasticity of Supply" type="definition">
          <p>
            <GlossaryTooltip term="Price Elasticity of Supply" definition="A measure of the responsiveness of quantity supplied of a good to a change in its price, calculated as the percentage change in quantity supplied divided by the percentage change in price.">Price Elasticity of Supply (PES)</GlossaryTooltip> measures the responsiveness of quantity supplied to changes in market price. Unlike PED, PES is typically positive due to the direct relationship between price and quantity supplied (the Law of Supply). Understanding PES is essential for analyzing market adjustments and the effectiveness of government policies.
          </p>
        </NoteCard>

        <NoteCard title="The PES Formula" type="formula" delay={100}>
          <div className="bg-navy-deep/50 p-6 rounded-lg border border-silver/20">
            <p className="text-center text-xl font-mono text-magenta-400 mb-4">
              PES = (% ΔQs) / (% ΔP)
            </p>
            <p className="text-center text-lg font-mono text-silver-bright">
              = (ΔQs / Qs) × (P / ΔP)
            </p>
            <div className="text-sm text-muted-foreground space-y-2 mt-4">
              <p><strong>Where:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• ΔQs = Change in quantity supplied</li>
                <li>• Qs = Original quantity supplied</li>
                <li>• ΔP = Change in price</li>
                <li>• P = Original price</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            <strong>Note:</strong> PES is normally positive (PES &gt; 0) because of the positive relationship between price and quantity supplied established by the Law of Supply.
          </p>
        </NoteCard>

        <NoteCard title="Degrees of Price Elasticity of Supply" type="concept" delay={150}>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-magenta-500/10 border border-magenta-500/20">
              <h5 className="font-semibold text-magenta-400 mb-2">Perfectly Elastic Supply (PES = ∞)</h5>
              <p className="text-sm text-muted-foreground">
                Producers can supply any quantity at the given price. The supply curve is <strong>horizontal</strong>. Occurs when factors of production are freely available at constant cost.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <h5 className="font-semibold text-violet-400 mb-2">Relatively Elastic Supply (PES &gt; 1)</h5>
              <p className="text-sm text-muted-foreground">
                Quantity supplied responds more than proportionally to price changes. Producers can increase output relatively easily. Supply curve is <strong>relatively flat</strong>.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-2">Unit Elastic Supply (PES = 1)</h5>
              <p className="text-sm text-muted-foreground">
                Quantity supplied changes by the same percentage as price. Any straight-line supply curve passing through the origin has PES = 1 at all points.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <h5 className="font-semibold text-orange-400 mb-2">Relatively Inelastic Supply (PES &lt; 1)</h5>
              <p className="text-sm text-muted-foreground">
                Quantity supplied responds less than proportionally to price changes. Producers face constraints in increasing output. Supply curve is <strong>relatively steep</strong>.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2">Perfectly Inelastic Supply (PES = 0)</h5>
              <p className="text-sm text-muted-foreground">
                Quantity supplied remains fixed regardless of price changes. The supply curve is <strong>vertical</strong>. Examples: land supply, antiques, fixed-capacity venues in the short run.
              </p>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <h4 className="font-serif text-lg text-silver-bright mb-6 text-center">Figure 3.4: Degrees of Price Elasticity of Supply</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <PESDiagram type="perfectly-elastic" />
            <PESDiagram type="elastic" />
            <PESDiagram type="unitary" />
            <PESDiagram type="inelastic" />
            <PESDiagram type="perfectly-inelastic" />
          </div>
        </div>

        <NoteCard title="Determinants of Price Elasticity of Supply" type="theory" delay={200}>
          <p className="mb-4">
            Several factors determine whether supply for a particular good or service will be elastic or inelastic. These factors relate primarily to producers' ability to adjust output levels in response to price changes.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Time Period</span>
              <p className="text-xs text-muted-foreground mt-1">
                Supply is more elastic in the long run. In the short run, firms face capacity constraints; in the long run, they can build new factories, hire workers, and expand capacity.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Spare Capacity</span>
              <p className="text-xs text-muted-foreground mt-1">
                Firms with unused capacity can increase output quickly without significant cost increases, making supply more elastic.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Factor Mobility</span>
              <p className="text-xs text-muted-foreground mt-1">
                If labor and capital can move easily between industries, supply is more elastic. Specialized resources reduce elasticity.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Stock Availability</span>
              <p className="text-xs text-muted-foreground mt-1">
                Industries that can hold inventory can respond quickly to price changes. Perishable goods or services cannot be stored, reducing elasticity.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Production Period</span>
              <p className="text-xs text-muted-foreground mt-1">
                Goods with long production cycles (aircraft, buildings, crops) have inelastic supply in the short run compared to quickly manufactured goods.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-magenta-400 font-semibold">Barriers to Entry</span>
              <p className="text-xs text-muted-foreground mt-1">
                High barriers prevent new firms from entering the market, limiting the supply response to price increases.
              </p>
            </div>
          </div>
        </NoteCard>

        <ExamTipBox title="PES and Market Adjustment" variant="gold" className="mt-6">
          <p className="mb-2"><strong>Key Cambridge exam applications:</strong></p>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Tax incidence:</strong> More inelastic supply → producers bear more of tax burden</li>
            <li>• <strong>Price volatility:</strong> Inelastic supply → greater price fluctuations from demand shifts</li>
            <li>• <strong>Agricultural markets:</strong> Often inelastic in short run (growing seasons) → volatile prices</li>
            <li>• <strong>Housing market:</strong> Supply inelastic in short run → price rises faster than quantity</li>
          </ul>
        </ExamTipBox>

        {/* High-Density Tax Incidence Evaluation Block */}
        <div className="glass-card p-8 my-6">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-serif text-xl text-amber-400 mb-4">Senior Examiner's Conclusion: Tax Incidence and Relative Elasticities</h3>
            <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
              <p>
                The <strong className="text-amber-400">economic incidence of taxation</strong> depends critically upon relative elasticities. The party with the <strong className="text-amber-400">more inelastic curve bears the greater tax burden</strong>, regardless of legal incidence. Formally: <span className="font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">Consumer Share = PES / (PES + |PED|)</span>. This explains why governments tax goods with inelastic demand (tobacco, alcohol, petrol): consumers bear most of the burden and consumption changes little, maximizing revenue while minimizing distortion. The sophisticated analyst recognizes that elasticity estimates are subject to uncertainty and should incorporate sensitivity analysis in policy evaluation.
              </p>
            </div>
          </div>
        </div>

        <ExamTipBox title="AO3/AO4 Essay Structure for Elasticity (20/20 Template)" variant="gold" className="mt-6">
          <p className="mb-2 text-justify"><strong>For 25-mark essays on elasticity:</strong></p>
          <ul className="space-y-1 text-sm">
            <li><strong>Introduction (AO1):</strong> Define elasticity precisely with formula</li>
            <li><strong>Para 1-2 (AO2/AO3):</strong> Analyze applications with diagrams (PED-Revenue, Tax Incidence)</li>
            <li><strong>Para 3-4 (AO4):</strong> <span className="text-amber-400">Evaluate</span>—data limitations, ceteris paribus violations, competitive responses</li>
            <li><strong>Conclusion:</strong> Weighted judgment acknowledging usefulness and limitations</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default Elasticities;
