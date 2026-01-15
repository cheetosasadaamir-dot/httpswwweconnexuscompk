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

        <NoteCard title="Determinants of Price Elasticity of Demand" type="concept" delay={200}>
          <p className="mb-4">
            Several key factors determine whether the demand for a particular good or service will be elastic or inelastic. Understanding these determinants helps predict consumer behavior and informs business pricing strategies.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Availability of Substitutes</span>
              <p className="text-xs text-muted-foreground mt-1">
                The more substitutes available, the more elastic demand. Consumers can easily switch to alternatives when prices rise. Brand-specific products typically have more elastic demand than product categories.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Necessity vs. Luxury</span>
              <p className="text-xs text-muted-foreground mt-1">
                Necessities tend to have inelastic demand (consumers must buy them regardless of price), while luxuries have elastic demand (easily postponed or foregone when prices rise).
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Proportion of Income</span>
              <p className="text-xs text-muted-foreground mt-1">
                Goods that consume a larger share of consumer income tend to have more elastic demand. A 10% price increase on a car matters more than a 10% increase on salt.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Time Horizon</span>
              <p className="text-xs text-muted-foreground mt-1">
                Demand tends to be more elastic in the long run as consumers have more time to find substitutes, change habits, or adjust consumption patterns.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Habit-Forming Goods</span>
              <p className="text-xs text-muted-foreground mt-1">
                Addictive or habit-forming goods (tobacco, caffeine) have inelastic demand as consumers find it difficult to reduce consumption even when prices increase.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <span className="text-cyan-400 font-semibold">Definition of the Market</span>
              <p className="text-xs text-muted-foreground mt-1">
                Narrowly defined markets have more elastic demand. Demand for "Coca-Cola" is more elastic than demand for "soft drinks" which is more elastic than demand for "beverages."
              </p>
            </div>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Section 2: PED and Total Revenue */}
      <ContentSection 
        title="PED and Total Revenue" 
        subtitle="The Critical Relationship Between Elasticity and Revenue"
      >
        <NoteCard title="Understanding Total Revenue" type="definition">
          <p>
            <GlossaryTooltip term="Total Revenue" definition="The total amount of money received by a firm from the sale of goods or services, calculated as Price × Quantity sold.">Total Revenue (TR)</GlossaryTooltip> represents the total income a firm receives from selling its output. It is calculated simply as <strong>Price × Quantity (TR = P × Q)</strong>. The relationship between price changes and total revenue depends critically on the price elasticity of demand, making this one of the most practically important applications of elasticity analysis.
          </p>
          <div className="bg-navy-deep/50 p-4 rounded-lg mt-4 border border-silver/20">
            <p className="text-center text-lg font-mono text-cyan-400">
              Total Revenue = Price × Quantity Sold
            </p>
          </div>
        </NoteCard>

        <NoteCard title="The PED-Revenue Relationship" type="theory" delay={100}>
          <p className="mb-4">
            The relationship between price elasticity of demand and total revenue is fundamental to business pricing strategy and revenue optimization. When a firm changes its price, two opposing forces affect revenue: the price effect and the quantity effect.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-silver/30">
                  <th className="text-left py-3 px-4 text-silver-bright">Elasticity</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Price Increase →</th>
                  <th className="text-left py-3 px-4 text-silver-bright">Price Decrease →</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-cyan-400">Elastic (PED &gt; 1)</td>
                  <td className="py-3 px-4 text-red-400">TR Falls ↓</td>
                  <td className="py-3 px-4 text-emerald-400">TR Rises ↑</td>
                </tr>
                <tr className="border-b border-silver/10">
                  <td className="py-3 px-4 font-medium text-amber-400">Unit Elastic (PED = 1)</td>
                  <td className="py-3 px-4 text-silver-bright">TR Unchanged</td>
                  <td className="py-3 px-4 text-silver-bright">TR Unchanged</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-orange-400">Inelastic (PED &lt; 1)</td>
                  <td className="py-3 px-4 text-emerald-400">TR Rises ↑</td>
                  <td className="py-3 px-4 text-red-400">TR Falls ↓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </NoteCard>

        <AnalysisBlock title="AO3 Analysis: Revenue Implications" type="analysis">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-emerald-400 mb-2">Elastic Demand (PED &gt; 1):</h5>
              <p className="text-sm text-muted-foreground mb-2">
                When demand is elastic, the quantity effect dominates the price effect. A price reduction leads to a proportionally larger increase in quantity demanded, resulting in higher total revenue.
              </p>
              <p className="text-sm text-cyan-400">
                <strong>Strategy:</strong> Firms should lower prices to increase revenue. Discount strategies and sales promotions are effective.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-orange-400 mb-2">Inelastic Demand (PED &lt; 1):</h5>
              <p className="text-sm text-muted-foreground mb-2">
                When demand is inelastic, the price effect dominates the quantity effect. A price increase leads to a proportionally smaller decrease in quantity demanded, resulting in higher total revenue.
              </p>
              <p className="text-sm text-cyan-400">
                <strong>Strategy:</strong> Firms should raise prices to increase revenue. Premium pricing strategies are effective.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="The Total Revenue Test" variant="gold" className="mt-6">
          <p className="mb-2"><strong>Cambridge 9708 frequently tests:</strong></p>
          <ul className="space-y-1 text-sm">
            <li>• If a price rise causes TR to rise → Demand is <strong>inelastic</strong></li>
            <li>• If a price rise causes TR to fall → Demand is <strong>elastic</strong></li>
            <li>• If TR remains constant → Demand is <strong>unit elastic</strong></li>
            <li>✓ This "Total Revenue Test" is a quick way to determine elasticity from revenue data</li>
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

        <div className="glass-card p-8 my-6">
          <h4 className="font-serif text-lg text-silver-bright mb-6 text-center">Figure 3.2: Income Elasticity of Demand</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <YEDXEDDiagram type="yed-normal" title="Normal Good (YED > 0)" />
            <YEDXEDDiagram type="yed-inferior" title="Inferior Good (YED < 0)" />
          </div>
        </div>

        <AnalysisBlock title="AO3 Analysis: Business Implications of YED" type="analysis">
          <p className="mb-3">Understanding YED helps businesses plan for economic cycles:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-emerald-400 mb-2">During Economic Growth:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Luxury goods producers benefit most (YED &gt; 1)</li>
                <li>• Necessity producers see modest growth</li>
                <li>• Inferior goods producers may see declining demand</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-400 mb-2">During Recession:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Luxury goods demand falls sharply</li>
                <li>• Necessity demand remains stable</li>
                <li>• Inferior goods demand may increase</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="Special Cases: Giffen & Veblen Goods" variant="silver" className="mt-6">
          <p className="mb-2"><strong>Cambridge may test these exceptional cases:</strong></p>
          <ul className="space-y-2 text-sm">
            <li><strong>Giffen Goods:</strong> Extremely inferior goods where the income effect dominates the substitution effect, causing demand to <em>increase</em> when price rises (violating the Law of Demand). Theoretical case: staple foods in extreme poverty.</li>
            <li><strong>Veblen Goods:</strong> Conspicuous consumption goods where higher prices increase demand due to status signaling. Examples: luxury watches, designer fashion, fine art.</li>
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

        <AnalysisBlock title="AO3 Analysis: Strategic Applications of XED" type="analysis">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Competition Analysis:</h5>
              <ul className="space-y-1 text-sm">
                <li>• High positive XED = close competitors</li>
                <li>• Firms monitor substitute prices carefully</li>
                <li>• Market definition in antitrust cases uses XED</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Pricing Strategy:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Loss-leader pricing on complements (cheap printers, expensive ink)</li>
                <li>• Bundle pricing for strong complements</li>
                <li>• Predatory pricing to eliminate close substitutes</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>
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

        <AnalysisBlock title="AO4 Evaluation: Elasticity and Government Policy" type="evaluation">
          <p className="mb-3">Elasticities inform the effectiveness of various government interventions:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Indirect Taxes:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Tax on inelastic goods → less distortion, more revenue</li>
                <li>• Tax incidence depends on relative elasticities</li>
                <li>• Demerit good taxes work best on inelastic goods</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Subsidies:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Subsidies on elastic goods → larger quantity increase</li>
                <li>• Producer vs consumer benefit depends on elasticities</li>
                <li>• Merit good subsidies most effective when elastic</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>
      </ContentSection>
    </ChapterLayout>
  );
};

export default Elasticities;
