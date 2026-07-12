import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import KeyTakeaways from '@/components/KeyTakeaways';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import { ElasticityDiagram, AllElasticityDiagrams } from '@/components/diagrams/ElasticityDiagrams';
import YEDXEDDiagram from '@/components/diagrams/YEDXEDDiagram';
import PESDiagram from '@/components/diagrams/PESDiagram';

const Elasticities =  => {
 return (
 <ChapterLayout
 chapterNumber={3}
 title="Elasticities"
 subtitle="Measuring the responsiveness of demand and supply to changes in price, income, and related goods."
 >
 {/* Key Takeaways Summary */}
 <KeyTakeaways
 title="Key Takeaways: Elasticities"
 takeaways={[
 "PED = (% ΔQd) / (% ΔP); always negative but expressed as absolute value. Elastic (>1), Inelastic (<1), Unitary (=1).",
 "Determinants of PED: substitutes available, proportion of income, necessity vs luxury, time period, habit/addiction.",
 "PED and Revenue: Elastic demand → cut price to raise TR; Inelastic demand → raise price to raise TR.",
 "YED = (% ΔQd) / (% ΔY); Positive = Normal good (Luxury >1, Necessity <1); Negative = Inferior good.",
 "XED = (% ΔQd of A) / (% ΔP of B); Positive = Substitutes; Negative = Complements; Zero = Unrelated.",
 "PES = (% ΔQs) / (% ΔP); always positive. Determinants: time period, spare capacity, factor mobility, stocks.",
 "Tax incidence: Consumer share = PES/(PES+|PED|); Inelastic side bears greater tax burden."
 ]}
 />
 <ContentSection 
 title="Price Elasticity of Demand (PED)" 
 subtitle="Measuring the Responsiveness of Quantity Demanded to Price Changes"
 >
 {/* High-Density Definition Block - Zero Gap Academic Style */}
 <div className="glass-card p-8 my-6">
 <div className="border-l-4 border-cyan-500 pl-6">
 <h3 className="font-serif text-2xl text-cyan-400 mb-4">The Technical Definition of Price Elasticity of Demand</h3>
 <div className="space-y-1 text-muted-foreground text-justify leading-relaxed">
 <p>
 <GlossaryTooltip term="Price Elasticity of Demand" definition="A measure of the responsiveness of quantity demanded of a good to a change in its price, calculated as the percentage change in quantity demanded divided by the percentage change in price.">Price Elasticity of Demand (PED)</GlossaryTooltip> constitutes the numerical measure of the <strong className="text-cyan-400">responsiveness of quantity demanded</strong> for a product following a change in its own price, expressed as the ratio of proportionate changes: <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">PED = (% ΔQd) / (% ΔP)</span>. This formulation, grounded in the foundational work of Alfred Marshall, enables meaningful comparison across commodities irrespective of the units in which prices or quantities are denominated—a 10% price increase yields identical elasticity interpretations whether applied to automobiles priced in dollars or bread priced in cents. The coefficient's magnitude reveals the intensity of consumer responsiveness: values exceeding unity indicate <strong className="text-emerald-400">elastic demand</strong> where consumers exhibit heightened price sensitivity, while values below unity signify <strong className="text-amber-400">inelastic demand</strong> where consumption patterns prove resistant to price fluctuations. The negative sign conventionally associated with PED (reflecting the inverse relationship established by the Law of Demand) is typically suppressed in economic discourse, with analysts employing absolute values to facilitate comparison and interpretation.
 </p>
 <p>
 The theoretical underpinning of the downward-sloping demand curve—and hence the negative PED—derives from two complementary mechanisms operating through consumer choice theory. The <strong className="text-cyan-400">substitution effect</strong> captures the reallocation of expenditure that occurs when relative prices change: a price reduction for Good X renders it relatively cheaper compared to substitutes, inducing utility-maximizing consumers to substitute towards the now-cheaper option while maintaining equivalent satisfaction levels along the original indifference curve. The <strong className="text-cyan-400">income effect</strong> captures the purchasing power dimension: a price reduction for a good in the consumption basket effectively increases the consumer's real income (the bundle of goods affordable with nominal income), enabling expansion of consumption possibilities including increased demand for the price-reduced good itself. For normal goods, both effects operate in the same direction—reinforcing the negative relationship between price and quantity demanded—while for inferior goods, the income effect partially offsets the substitution effect, yielding lower observed elasticity than substitution alone would generate.
 </p>
 </div>
 </div>
 </div>

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


 {/* High-Density PED Determinants Block - Chains of Analysis */}
 <div className="glass-card p-8 my-6">
 <div className="border-l-4 border-cyan-500 pl-6">
 <h3 className="font-serif text-2xl text-silver-bright mb-4">The Determinants of Price Elasticity of Demand: Chains of Analysis</h3>
 <div className="space-y-1 text-muted-foreground text-justify leading-relaxed">
 <p>
 The <strong className="text-cyan-400">price elasticity of demand</strong> for any commodity is determined by a complex interplay of factors that collectively govern the consumer's ability and willingness to adjust quantity demanded in response to price signals. The <strong className="text-cyan-400">availability and closeness of substitutes</strong> constitutes the paramount determinant, establishing the foundation upon which all other factors operate. When close substitutes exist, a marginal price increase triggers a rapid and rational reallocation of expenditure: consumers, behaving as utility-maximizing agents, recognize that the same satisfaction can be obtained at lower cost from the substitute good, and therefore execute a "switch" that manifests as highly elastic demand. The magnitude of this substitution response depends critically on the degree of substitutability—perfect substitutes (homogeneous commodities in competitive markets) yield perfectly elastic demand, while goods with distant or imperfect substitutes (differentiated products with brand loyalty, patented pharmaceuticals, or goods with unique characteristics) exhibit progressively more inelastic demand curves. This substitutability operates hierarchically across market definitions: brand-level demand (e.g., for "Coca-Cola") exhibits higher elasticity than product-category demand (e.g., for "carbonated soft drinks"), which itself exceeds aggregate commodity-class demand (e.g., for "beverages")—a principle that explains why individual firms face more elastic demand curves than industries, and why market power increases as product differentiation intensifies.
 </p>
 <p>
 The <strong className="text-cyan-400">proportion of consumer income</strong> absorbed by expenditure on the good determines the intensity with which the budget constraint binds and consequently the degree of consumer responsiveness to price changes. For goods commanding a substantial share of household budgets—residential accommodation, motor vehicles, higher education, major appliances—a given percentage price increase represents a significant absolute expenditure change that materially affects the consumer's ability to purchase other goods, thereby inducing careful deliberation, extensive search for alternatives, and heightened price sensitivity manifesting as elastic demand. Conversely, for goods absorbing negligible income shares—salt, matches, shoelaces, postage stamps—the same percentage price increase passes largely unnoticed within the overall consumption bundle, consumers rationally economize on search costs by maintaining habitual purchase patterns, and demand exhibits inelasticity. The <strong className="text-cyan-400">necessity-luxury spectrum</strong> operates through an analogous mechanism rooted in the concept of consumer surplus and diminishing marginal utility: necessities—goods satisfying fundamental biological or social requirements including staple foods, basic utilities, essential medicines, and mandatory transportation—generate high marginal utility at low consumption levels that exceeds the marginal utility of income, rendering consumers unwilling to reduce consumption even when prices rise substantially (inelastic demand); luxuries—discretionary consumption items including holidays, entertainment, premium branded goods, and aesthetic enhancements—generate lower marginal utility relative to the marginal utility of income, enabling consumers to defer, reduce, or eliminate purchases when prices rise without significant welfare loss (elastic demand).
 </p>
 <p>
 The <strong className="text-cyan-400">time period</strong> over which price elasticity is measured fundamentally transforms the observed consumer response through the operation of adjustment costs, information acquisition, and habit modification. In the <strong className="text-cyan-400">momentary period</strong> following a price change, consumers remain locked into pre-existing consumption patterns by contractual commitments (rental agreements, subscription services, installment purchases), information constraints (unawareness of available substitutes or their prices), and psychological habit persistence—demand appears highly inelastic. As the <strong className="text-cyan-400">short run</strong> unfolds, consumers acquire information about alternatives, existing contracts expire, and marginal adjustments become feasible—demand elasticity increases modestly. In the <strong className="text-cyan-400">long run</strong>, consumers undertake comprehensive lifestyle adjustments: replacing vehicles with fuel-efficient alternatives in response to petrol price increases, relocating residences in response to regional cost differentials, or substituting capital for energy in response to utility price trends—demand becomes substantially more elastic. The petroleum market exemplifies this temporal progression: short-run demand for motor fuel is highly inelastic (estimated PED ≈ 0.2-0.3) as commuters cannot immediately alter journey requirements or vehicle characteristics; long-run demand is considerably more elastic (estimated PED ≈ 0.7-1.0) as the vehicle stock turns over, urban planning adjusts, and modal substitution proceeds.
 </p>
 <p>
 The <strong className="text-cyan-400">degree of habit formation and addiction</strong> introduces psychological dimensions that override purely economic considerations in elasticity determination. Habit-forming goods—including tobacco, alcohol, caffeine-containing beverages, opioids, and gambling services—generate consumption patterns characterized by physiological or psychological dependency that fundamentally alters the utility function: discontinuation or reduction imposes withdrawal costs that may exceed the financial costs of continued consumption at higher prices. For addictive substances, the internal "switching cost" imposed by physical dependency symptoms or psychological craving effectively eliminates substitutes from the consumer's consideration set, rendering demand persistently inelastic regardless of time period. Empirical estimates consistently demonstrate that tobacco demand exhibits PED values of 0.3-0.5 even over extended periods, while demand for illicit opioids may approach perfect inelasticity as dependency intensifies—observations with profound implications for the design of "sin taxes" and public health interventions targeting consumption of harmful substances.
 </p>
 </div>
 </div>
 </div>

 {/* Excellent Conclusion for PED Determinants */}
 <div className="glass-card p-8 my-6 border border-amber-500/30">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-amber-400 mb-4">Excellent Conclusion: The Dynamic Nature of PED</h3>
 <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
 <p>
 Ultimately, the price elasticity of demand for any product is <strong className="text-amber-400">not a static parameter</strong> but a <strong className="text-amber-400">dynamic variable</strong> shaped by strategic firm behavior and evolving market conditions. A firm's ability to manipulate elasticity through <strong className="text-cyan-400">non-price competition</strong>—brand building, product differentiation, loyalty programs, and the creation of perceived uniqueness—can successfully transform an elastic product into an inelastic one, conferring upon the firm substantial "price-setting" power and correspondingly greater control over total revenue. Apple Inc. exemplifies this strategic transformation: by cultivating intense brand loyalty, creating an integrated ecosystem of complementary products, and positioning its devices as status symbols rather than mere commodity electronics, the company has rendered demand for iPhones substantially less elastic than the underlying smartphone category would suggest, enabling premium pricing that generates exceptional profit margins. The sophisticated analyst therefore recognizes that observed PED values reflect not only underlying product characteristics but also the accumulated effects of past marketing investments and competitive positioning strategies.
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
 <p className="mb-2 text-justify"><strong>The syllabus frequently tests this relationship:</strong></p>
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
 {/* High-Density YED Definition Block - Zero Gap Academic Style */}
 <div className="glass-card p-8 my-6">
 <div className="border-l-4 border-emerald-500 pl-6">
 <h3 className="font-serif text-2xl text-emerald-400 mb-4">The Technical Definition of Income Elasticity of Demand</h3>
 <div className="space-y-1 text-muted-foreground text-justify leading-relaxed">
 <p>
 <GlossaryTooltip term="Income Elasticity of Demand" definition="A measure of the responsiveness of quantity demanded to a change in consumer income, calculated as the percentage change in quantity demanded divided by the percentage change in income.">Income Elasticity of Demand (YED)</GlossaryTooltip> measures the <strong className="text-emerald-400">responsiveness of demand to a change in real income</strong>, formally expressed as <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">YED = (% ΔQd) / (% ΔY)</span>, where Y represents consumer income. Unlike PED, the <strong className="text-emerald-400">sign of YED carries substantive economic information</strong>: a positive coefficient classifies the good as <strong className="text-cyan-400">normal</strong> (demand rises with income), while a negative coefficient classifies it as <strong className="text-red-400">inferior</strong> (demand falls as income rises, as consumers substitute towards superior alternatives). The magnitude further distinguishes <strong className="text-cyan-400">necessities</strong> (0 &lt; YED &lt; 1, where demand rises less than proportionally with income) from <strong className="text-amber-400">luxuries</strong> (YED &gt; 1, where demand rises more than proportionally with income, reflecting discretionary consumption that expands disproportionately as budget constraints relax). This classification scheme underpins Engel's Law—the empirical regularity that the proportion of income devoted to food expenditure declines as income rises—reflecting the necessity status (low YED) of basic sustenance relative to discretionary categories.
 </p>
 <p>
 The analytical significance of YED extends beyond static classification to dynamic forecasting across the business cycle and secular development trajectory. During periods of macroeconomic expansion characterized by rising national income, aggregate demand for luxury goods (YED &gt; 1) expands more rapidly than GDP growth, while demand for inferior goods (YED &lt; 0) contracts absolutely despite economy-wide prosperity. This asymmetry generates sectoral differentiation in cyclical exposure: luxury goods producers experience amplified volatility—outperforming during booms but suffering disproportionate contraction during recessions—while inferior goods producers enjoy counter-cyclical demand patterns that provide recession-hedging properties. The sophisticated firm deploys YED analysis to calibrate inventory management, capacity planning, and marketing investment across the anticipated business cycle, concentrating resources during phases when income-driven demand favors its product category.
 </p>
 </div>
 </div>
 </div>

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
 {/* High-Density XED Definition Block - Zero Gap Academic Style */}
 <div className="glass-card p-8 my-6">
 <div className="border-l-4 border-violet-500 pl-6">
 <h3 className="font-serif text-2xl text-violet-400 mb-4">The Technical Definition of Cross Elasticity of Demand</h3>
 <div className="space-y-1 text-muted-foreground text-justify leading-relaxed">
 <p>
 <GlossaryTooltip term="Cross Elasticity of Demand" definition="A measure of the responsiveness of quantity demanded of one good to a change in the price of another good.">Cross Elasticity of Demand (XED)</GlossaryTooltip> measures the <strong className="text-violet-400">responsiveness of demand for Good A to a change in the price of Good B</strong>, formally expressed as <span className="font-mono text-violet-400 bg-violet-500/10 px-2 py-1 rounded">XED = (% ΔQₐ) / (% ΔPᵦ)</span>. The <strong className="text-violet-400">sign of XED reveals the economic relationship</strong> between the two goods: a positive coefficient indicates <strong className="text-emerald-400">substitutes</strong> (a price increase for Good B shifts demand towards Good A as consumers redirect expenditure to the now relatively cheaper alternative), while a negative coefficient indicates <strong className="text-red-400">complements</strong> (a price increase for Good B reduces demand for Good A because the goods are consumed jointly—the higher cost of one component discourages consumption of the complementary bundle). The magnitude quantifies the <strong className="text-cyan-400">closeness of the relationship</strong>: XED values approaching zero suggest weak or negligible inter-good effects (unrelated goods), while large absolute values indicate strong substitutability or complementarity with significant competitive or synergistic implications.
 </p>
 <p>
 The strategic application of XED extends to <strong className="text-amber-400">market definition for antitrust purposes</strong>—goods with high positive XED belong to the same relevant market because they constrain each other's pricing power—and to <strong className="text-amber-400">competitive intelligence</strong> for oligopolistic firms monitoring rival price movements. For complement producers, XED analysis informs <strong className="text-cyan-400">bundle pricing strategies</strong>: the "razor-and-blades" model exploits negative XED by subsidizing the primary device (low-margin or loss-leader razor) to capture high-margin demand for the complement (blades), a strategy deployed across printer-ink, console-games, and smartphone-applications ecosystems. The sophisticated analyst recognizes that XED operates asymmetrically—the cross-effect of Coca-Cola's price on Pepsi demand may exceed the reverse effect due to brand strength differentials—and calculates directional coefficients appropriate to the strategic question at hand.
 </p>
 </div>
 </div>
 </div>

 <NoteCard title="XED Formula and Classification" type="formula">
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

 {/* High-Density PES Determinants Block - Chains of Analysis */}
 <div className="glass-card p-8 my-6">
 <div className="border-l-4 border-magenta-500 pl-6">
 <h3 className="font-serif text-2xl text-silver-bright mb-4">The Determinants of Price Elasticity of Supply: Chains of Analysis</h3>
 <div className="space-y-1 text-muted-foreground text-justify leading-relaxed">
 <p>
 The <strong className="text-magenta-400">price elasticity of supply</strong> is fundamentally governed by the producer's capacity to adjust output levels in response to market price signals, a capacity that varies systematically with temporal horizons, factor availability, and technological constraints. The <strong className="text-magenta-400">time period</strong> under consideration constitutes the most critical determinant, establishing the boundaries within which all other factors operate. In the <strong className="text-magenta-400">momentary (market) period</strong>, all factors of production are fixed—plant capacity, machinery, labor contracts, and raw material inventories cannot be altered—and supply is consequently <strong className="text-cyan-400">perfectly inelastic (PES = 0)</strong>: the quantity available for sale is the existing stock regardless of price movements. The supply curve in this period is vertical, explaining the extreme price volatility observed in markets for perishable agricultural commodities immediately following harvest or in ticket markets for imminent events where supply is absolutely fixed.
 </p>
 <p>
 As the temporal horizon extends into the <strong className="text-magenta-400">short run</strong>, at least one factor of production remains fixed (typically capital plant and equipment), but variable factors (labor, raw materials, energy) can be adjusted. Firms can increase output by hiring additional workers, intensifying equipment utilization, extending operating hours, or drawing down inventories—but only within the constraints imposed by existing capital stock. The Law of Diminishing Marginal Returns imposes an upward-sloping cost structure: as variable inputs are added to fixed capital, marginal productivity eventually declines, requiring higher prices to justify increased output. Short-run supply is therefore <strong className="text-cyan-400">positively elastic but constrained</strong> by capacity limits—the supply curve slopes upward but becomes increasingly steep as production approaches maximum capacity. The magnitude of short-run elasticity depends critically on <strong className="text-cyan-400">spare capacity</strong>: firms operating well below capacity can expand output at minimal marginal cost (elastic supply), while firms approaching full capacity utilization face rapidly escalating marginal costs (inelastic supply).
 </p>
 <p>
 In the <strong className="text-magenta-400">long run</strong>, all factors of production become variable: firms can construct new production facilities, purchase additional machinery, enter long-term labor contracts, and fundamentally restructure operations. Crucially, the long run also permits industry-level adjustments through entry and exit of firms: supernormal profits attract new entrants who add to industry supply, while losses induce exit that reduces aggregate supply. This flexibility renders long-run supply <strong className="text-cyan-400">substantially more elastic</strong> than short-run supply—the long-run supply curve is flatter, reflecting producers' enhanced capacity to respond to price incentives through capacity expansion, technological adoption, and competitive entry. In the limiting case of a <strong className="text-cyan-400">constant-cost industry</strong> where factor prices remain unchanged as industry output expands, long-run supply approaches perfect elasticity (horizontal supply curve at the minimum point of long-run average cost).
 </p>
 <p>
 The <strong className="text-magenta-400">mobility of factors of production</strong> determines the ease with which resources can be reallocated from declining industries to expanding sectors in response to relative price changes. When factors are occupationally and geographically mobile—when workers can readily retrain for new occupations, machinery can be repurposed for alternative production, and land can be converted to different uses—supply responds rapidly to price signals (elastic). Conversely, when factors are specialized and immobile—when workers possess industry-specific human capital that depreciates upon redeployment, when physical capital is purpose-built for particular production processes, or when land is constrained by planning regulations—supply adjusts slowly and incompletely (inelastic). The distinction between <strong className="text-cyan-400">specific assets</strong> (valuable only in their current use) and <strong className="text-cyan-400">general assets</strong> (easily redeployed) underlies this mobility dimension: industries employing general-purpose factors exhibit elastic supply, while industries dependent on specialized assets face supply rigidities.
 </p>
 <p>
 The capacity to <strong className="text-magenta-400">hold stocks and inventories</strong> dramatically affects short-run supply elasticity by decoupling current sales from current production. Manufacturers of durable, non-perishable goods can accumulate inventories during periods of weak demand and draw them down during demand surges, smoothing production schedules while responding elastically to price movements—the automobile industry, consumer electronics, and industrial equipment sectors all exhibit inventory-buffered supply responses. Conversely, producers of perishable goods (fresh produce, cut flowers, dairy products) or services (hotel accommodation, airline seats, entertainment performances) cannot store output for future sale: once the production period passes, unsold capacity perishes or evaporates, and supply becomes highly inelastic to short-run price fluctuations. The <strong className="text-cyan-400">production period or gestation lag</strong> further constrains supply response: agricultural crops with annual growing cycles, forestry with decade-long maturation periods, and construction projects with multi-year completion timelines cannot expand output immediately regardless of price signals—supply remains inelastic until the natural production period elapses.
 </p>
 </div>
 </div>
 </div>

 {/* Excellent Conclusion for PES Determinants */}
 <div className="glass-card p-8 my-6 border border-amber-500/30">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-amber-400 mb-4">Excellent Conclusion: Commodity Price Volatility and Agricultural Markets</h3>
 <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
 <p>
 In conclusion, the elasticity of supply is most significantly constrained by the <strong className="text-amber-400">nature of the production process</strong> and the <strong className="text-amber-400">biological or physical characteristics</strong> of the product. Agricultural commodities exemplify this constraint: crops are subject to <strong className="text-cyan-400">gestation periods</strong>—planting-to-harvest cycles that may span months or years—during which supply cannot respond to price signals regardless of how attractive prices become. Cocoa trees require five years to reach productive maturity; coffee bushes need four years; rubber trees seven years. Consequently, agricultural supply exhibits extreme short-run inelasticity, and positive demand shocks translate almost entirely into price increases rather than quantity adjustments. This supply rigidity, combined with price-inelastic demand for food staples, explains the notorious <strong className="text-cyan-400">price volatility</strong> characteristic of global commodity markets: minor shifts in supply (droughts, pest infestations, weather disruptions) or demand (population growth, income changes, biofuel mandates) generate extreme price oscillations that destabilize producer incomes and consumer budgets throughout the developing world. The sophisticated analyst recognizes that PES fundamentally shapes market stability and that policies targeting agricultural price volatility must address the underlying supply rigidities through buffer stock schemes, crop insurance mechanisms, or long-term investment in agricultural research and infrastructure.
 </p>
 </div>
 </div>
 </div>

 {/* High-Density Tax Incidence Analysis */}
 <div className="glass-card p-8 my-6">
 <div className="border-l-4 border-cyan-500 pl-6">
 <h3 className="font-serif text-2xl text-silver-bright mb-4">Tax Incidence and Relative Elasticities: The Burden Distribution Principle</h3>
 <div className="space-y-1 text-muted-foreground text-justify leading-relaxed">
 <p>
 The <strong className="text-cyan-400">economic incidence of taxation</strong>—the ultimate distribution of tax burden between buyers and sellers—is determined not by legal liability but by the <strong className="text-cyan-400">relative elasticities</strong> of demand and supply. This fundamental principle holds regardless of whether the statute imposes the tax on producers (an excise duty) or consumers (a sales tax): the party with the <strong className="text-amber-400">more inelastic curve bears the greater share of the tax burden</strong> because their inability to adjust quantities in response to the tax-induced price change forces them to absorb the wedge between consumer and producer prices. The formal relationship can be expressed algebraically: <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">Consumer Share of Tax = PES / (PES + |PED|)</span> and correspondingly <span className="font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">Producer Share of Tax = |PED| / (PES + |PED|)</span>.
 </p>
 <p>
 This incidence principle explains the strategic logic underlying government taxation of goods with <strong className="text-amber-400">inelastic demand</strong> (tobacco, alcohol, petroleum products, gambling): consumers bear most of the tax burden because their consumption changes little in response to the tax-induced price increase, while the behavioral distortion (deadweight loss) is minimized because quantity transacted falls only modestly. Such taxation achieves the dual objectives of <strong className="text-cyan-400">revenue maximization</strong> and <strong className="text-cyan-400">allocative efficiency</strong>—the Ramsey Rule for optimal commodity taxation formally recommends higher tax rates on goods with lower demand elasticity. Conversely, taxes on goods with elastic demand shift burden onto producers, may generate substantial deadweight losses, and often prove counterproductive for revenue generation as consumers substitute towards untaxed alternatives.
 </p>
 </div>
 </div>
 </div>

 <ExamTipBox title="PES Determinants: Exam Chain of Reasoning" variant="gold" className="mt-6">
 <p className="mb-2"><strong>The syllabus expects integrated chains:</strong></p>
 <ul className="space-y-1 text-sm">
 <li>• <strong>Time:</strong> Short run → some factors fixed → capacity constraints → inelastic PES</li>
 <li>• <strong>Spare Capacity:</strong> High utilization → rising MC → steeper supply → lower PES</li>
 <li>• <strong>Factor Mobility:</strong> Specialized assets → slow reallocation → supply rigidity → inelastic PES</li>
 <li>• <strong>Stocks:</strong> Perishability → no inventory buffer → output = sales → inelastic short-run PES</li>
 <li>• <strong>Gestation:</strong> Long production period → delayed response → inelastic PES until maturity</li>
 </ul>
 </ExamTipBox>

 <ExamTipBox title=" Essay Structure for Elasticity (20/20 Template)" variant="gold" className="mt-6">
 <p className="mb-2 text-justify"><strong>For 25-mark essays on elasticity:</strong></p>
 <ul className="space-y-1 text-sm">
 <li><strong>Introduction:</strong> Define elasticity precisely with formula</li>
 <li><strong>Para 1-2:</strong> Analyze applications with diagrams (PED-Revenue, Tax Incidence)</li>
 <li><strong>Para 3-4:</strong> <span className="text-amber-400">Evaluate</span>—data limitations, ceteris paribus violations, competitive responses</li>
 <li><strong>Conclusion:</strong> Weighted judgment acknowledging usefulness and limitations</li>
 </ul>
 </ExamTipBox>

 {/* Senior Examiner's Final Weighting - Comprehensive Synthesis */}
 <div className="glass-card p-8 my-8 border-2 border-amber-500/50">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-2xl text-amber-400 mb-4">Senior Examiner's Final Weighting: The Unified Theory of Elasticity Application</h3>
 <div className="space-y-4 text-muted-foreground text-justify leading-relaxed">
 <p>
 The <strong className="text-amber-400">analytical power of elasticity concepts</strong> lies in their capacity to transform qualitative economic intuitions—"demand falls when price rises"—into quantitative predictions suitable for business decision-making and policy design. Yet the <strong className="text-amber-400">practical utility</strong> of any elasticity coefficient depends fundamentally on <strong className="text-cyan-400">three interrelated validity conditions</strong>: the accuracy of the underlying data, the stability of the estimated parameter across the relevant range, and the applicability of the ceteris paribus assumption to the decision context. Elasticity estimates derived from historical data or market research are subject to measurement error, sampling variation, and specification bias; they represent average responses across heterogeneous consumer or producer populations that may not apply to marginal agents relevant to a specific decision. The assumption of parameter stability—that elasticity remains constant as prices or incomes change—rarely holds empirically: demand typically becomes more elastic at higher prices (as consumption approaches discretionary thresholds) and less elastic at lower prices (as it approaches satiation levels), generating point elasticity variation along any given curve.
 </p>
 <p>
 Most fundamentally, the <strong className="text-cyan-400">ceteris paribus condition</strong> underlying all partial elasticity analysis is violated routinely in dynamic, competitive markets. When a firm reduces its price to exploit perceived elastic demand, competitors may respond with matching reductions—eliminating the relative price advantage and negating the anticipated quantity gains while reducing industry-wide revenue. When a government imposes taxes on goods believed to have inelastic demand, smuggling, black-market substitution, or consumer migration to untaxed jurisdictions may erode the anticipated revenue yield. When incomes rise and firms project luxury goods demand expansion based on historical YED, shifting consumer preferences, technological disruption, or new market entrants may fundamentally alter the relationship between income and demand. The sophisticated analyst therefore deploys elasticity estimates as <strong className="text-amber-400">first approximations</strong> within a broader analytical framework that incorporates competitive game theory, scenario analysis across parameter ranges, and qualitative assessment of market dynamics that may invalidate purely quantitative predictions.
 </p>
 <p className="italic border-l-4 border-cyan-500 pl-4 mt-4">
 <strong className="text-cyan-400">Final Verdict:</strong> "Ultimately, the effectiveness of using elasticity coefficients for decision-making is <strong className="text-amber-400">limited by time-lags</strong>, the <strong className="text-amber-400">difficulty of obtaining accurate and timely market data</strong>, and the <strong className="text-amber-400">inherent instability</strong> of consumer and producer behavior in evolving competitive environments. Nevertheless, elasticity analysis remains the foundational tool of applied microeconomics, providing the essential quantitative framework through which businesses optimize pricing, governments design efficient tax systems, and economists predict market responses to policy interventions. The prudent analyst recognizes both its power and its limitations."
 </p>
 </div>
 </div>
 </div>
 </ContentSection>
 </ChapterLayout>
 );
};

export default Elasticities;
