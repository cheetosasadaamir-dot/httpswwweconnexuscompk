import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import TermsOfTradeDiagram from '@/components/diagrams/TermsOfTradeDiagram';
import ComparativeAdvantageTableDiagram from '@/components/diagrams/ComparativeAdvantageTableDiagram';
import TradingPossibilityCurveDiagram from '@/components/diagrams/TradingPossibilityCurveDiagram';
import TariffDeadweightDiagram from '@/components/diagrams/TariffDeadweightDiagram';
import TradeBlocsDiagram from '@/components/diagrams/TradeBlocsDiagram';
import TradeCreationDiagram from '@/components/diagrams/TradeCreationDiagram';
import TradeDiversionDiagram from '@/components/diagrams/TradeDiversionDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const tradeTakeaways = [
  "Absolute Advantage: producing more output with same inputs; Comparative Advantage: lower opportunity cost (basis for mutually beneficial trade)",
  "If PPCs are parallel (identical opportunity costs), there is NO basis for mutually beneficial trade — a critical examiner trap",
  "Terms of Trade (ToT) = (Export Price Index / Import Price Index) × 100; ↑ToT = fewer exports needed per import unit",
  "Tariffs create deadweight welfare loss; consumer surplus falls, producer surplus rises, government gains revenue, but net welfare falls",
  "Infant Industry argument: temporary protection for new industries to achieve economies of scale — must have exit strategy",
  "Trade Creation (welfare gain) vs Trade Diversion (welfare loss) — key distinction when evaluating regional trading blocs",
];

const InternationalTrade = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header */}
        <div className="mb-6">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 5</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-3">
            International Trade
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Theoretical Foundations of Trade, Comparative Advantage, the Terms of Trade, and the Economic Consequences of Protectionism.
          </p>
        </div>

        {/* Key Takeaways Summary */}
        <KeyTakeaways takeaways={tradeTakeaways} />

        {/* Topics Overview */}
        <div className="glass-card p-4 mb-6">
          <h3 className="font-serif text-lg font-semibold mb-2">Syllabus Coverage (CIE 9708)</h3>
          <div className="grid md:grid-cols-2 gap-1 text-sm">
            <p>1. The Theory of Absolute & Comparative Advantage</p>
            <p>2. The Terms of Trade (ToT)</p>
            <p>3. Gains from Trade & the Trading Possibility Curve</p>
            <p>4. Protectionism: Tariffs, Quotas, Subsidies, Embargoes</p>
            <p>5. Arguments For and Against Protectionism</p>
            <p>6. Regional Trading Blocs</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1: THEORY OF COMPARATIVE ADVANTAGE */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="The Theory of Comparative Advantage">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Defining Advantage in Production</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The intellectual foundation of international trade theory rests upon the distinction between <strong className="text-foreground">Absolute Advantage</strong> and <strong className="text-foreground">Comparative Advantage</strong>. A nation possesses an <strong className="text-primary">absolute advantage</strong> in the production of a commodity if, given the same quantity of factor inputs (e.g., one unit of labour, one unit of capital), it can produce a greater volume of that commodity than another nation. In essence, absolute advantage is a measure of <em>productive efficiency</em>. However, as David Ricardo demonstrated in his 1817 work <em>Principles of Political Economy and Taxation</em>, absolute advantage is neither a necessary nor a sufficient condition for mutually beneficial trade. What matters is <strong className="text-secondary">comparative advantage</strong>: a nation has a comparative advantage in a good if it can produce that good at a <strong>lower opportunity cost</strong> than its trading partner. The opportunity cost of producing Good X is measured by the quantity of Good Y that must be forgone to release the resources necessary to produce one additional unit of Good X. Even if one country is more efficient in producing <em>both</em> goods in absolute terms, trade can still yield mutual gains provided the two countries have different opportunity cost ratios—that is, different <em>relative</em> productivities.
            </p>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">The Ricardian 2×2 Model: Cottonia & Microchippia</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Consider two countries, <span className="text-cambridge-cyan font-semibold">Cottonia</span> and <span className="text-cambridge-orange font-semibold">Microchippia</span>, producing two goods: Cotton and Microchips. The table below shows the maximum output one worker can produce in one day if they specialise entirely in one good:
              </p>
              <table className="w-full text-sm mb-3">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3">Country</th>
                    <th className="text-center py-2 px-3">Cotton (units)</th>
                    <th className="text-center py-2 px-3">OR</th>
                    <th className="text-center py-2 px-3">Microchips (units)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-3 font-semibold text-cambridge-cyan">Cottonia</td>
                    <td className="text-center py-2 px-3">20</td>
                    <td className="text-center py-2 px-3 text-muted-foreground">or</td>
                    <td className="text-center py-2 px-3">10</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-3 font-semibold text-cambridge-orange">Microchippia</td>
                    <td className="text-center py-2 px-3">25</td>
                    <td className="text-center py-2 px-3 text-muted-foreground">or</td>
                    <td className="text-center py-2 px-3">50</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-cambridge-orange font-semibold">
                Key Observation: Microchippia has an absolute advantage in BOTH goods (25 &gt; 20 for cotton; 50 &gt; 10 for microchips). Yet trade is still mutually beneficial.
              </p>
            </div>

            <AnalysisBlock title="Chain of Analysis: Deriving Opportunity Cost" type="analysis">
              <p className="text-sm leading-relaxed">
                To determine comparative advantage, we calculate the <strong>opportunity cost</strong> of producing one unit of each good for each country. For <span className="text-cambridge-cyan font-semibold">Cottonia</span>: if one worker can produce 20 units of cotton <em>or</em> 10 microchips, then producing 1 unit of cotton requires sacrificing <InlineMath>{'\\frac{10}{20} = 0.5'}</InlineMath> microchips. Conversely, producing 1 microchip requires sacrificing <InlineMath>{'\\frac{20}{10} = 2'}</InlineMath> units of cotton. For <span className="text-cambridge-orange font-semibold">Microchippia</span>: if one worker can produce 25 units of cotton <em>or</em> 50 microchips, then producing 1 unit of cotton costs <InlineMath>{'\\frac{50}{25} = 2'}</InlineMath> microchips, and producing 1 microchip costs <InlineMath>{'\\frac{25}{50} = 0.5'}</InlineMath> units of cotton. Comparing opportunity costs: Cottonia has a <strong className="text-cambridge-cyan">comparative advantage in Cotton</strong> (0.5 microchips per cotton &lt; 2 microchips per cotton), while Microchippia has a <strong className="text-cambridge-orange">comparative advantage in Microchips</strong> (0.5 cotton per microchip &lt; 2 cotton per microchip). The Law of Comparative Advantage dictates that each nation should <strong>specialise in the good for which it has the lower opportunity cost</strong>, then trade, resulting in an increase in total world output and the potential for both nations to consume <em>beyond</em> their individual Production Possibility Curves.
              </p>
            </AnalysisBlock>

            <ComparativeAdvantageTableDiagram />
          </div>

          {/* Gains from Trade & TPC */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">Gains from Trade: The Trading Possibility Curve (TPC)</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              When two nations engage in specialisation and trade according to their comparative advantages, the outcome is a global increase in productive efficiency. Each nation produces that good in which it has the lower opportunity cost, thereby maximising total world output from the given pool of resources. The resulting consumption possibilities for each nation are represented by the <strong className="text-foreground">Trading Possibility Curve (TPC)</strong>—sometimes termed the Consumption Possibility Frontier. The TPC lies <em>outside</em> a nation's domestic Production Possibility Curve (PPC), illustrating that trade enables consumption combinations that would be impossible under autarky (self-sufficiency). The slope of the TPC is determined by the <strong className="text-secondary">Terms of Trade</strong>—the ratio at which the two goods are exchanged on the international market. If Cottonia specialises entirely in cotton (producing 20 units), and trades some of that cotton for microchips at, say, a 1:1 ratio, it can consume 10 cotton + 10 microchips. This point lies <strong className="text-cambridge-green">outside its domestic PPC</strong>, which only permitted combinations <em>on or below</em> the line connecting (20 cotton, 0 microchips) to (0 cotton, 10 microchips). This geometric demonstration is the fundamental proof that trade, grounded in comparative advantage, is a positive-sum game, not a zero-sum one.
            </p>

            <TradingPossibilityCurveDiagram />

            <ExamTipBox title="Critical Note: Parallel PPCs Negate Trade" variant="warning">
              <p className="text-sm leading-relaxed">
                <strong>If two countries have parallel Production Possibility Curves, their opportunity cost ratios are identical.</strong> In such a scenario, neither country possesses a comparative advantage over the other, and there is <em>no basis for mutually beneficial trade</em>. For trade to yield gains, opportunity costs <strong>must differ</strong>. The steeper the difference in PPC slopes, the greater the potential gains from specialisation. This is a high-frequency error in essay examinations: candidates incorrectly assume that any two countries can always trade for mutual benefit.
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: TERMS OF TRADE */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="The Terms of Trade (ToT)">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Defining and Measuring the Terms of Trade</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The <strong className="text-foreground">Terms of Trade (ToT)</strong> is defined as the ratio of a country's index of export prices to its index of import prices, expressed as an index number (typically with a base year value of 100). It measures the quantity of imports that can be obtained for a given quantity of exports, and thus reflects the <em>purchasing power</em> of a nation's exports on the international market.
            </p>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
              <BlockMath>{'ToT = \\frac{\\text{Index of Export Prices}}{\\text{Index of Import Prices}} \\times 100'}</BlockMath>
            </div>

            <AnalysisBlock title="Chain of Analysis: Interpreting ToT Movements" type="analysis">
              <p className="text-sm leading-relaxed">
                An <strong className="text-cambridge-green">improvement (rise) in the Terms of Trade</strong> means that the index of export prices has risen relative to the index of import prices. This implies that a country can now purchase more imports for the same volume of exports, or equivalently, needs to export less to purchase the same volume of imports. In theory, this represents an increase in national welfare as real purchasing power increases. However, this analysis must be evaluated critically: if the improvement in ToT is caused by rising export prices due to reduced international demand (a leftward shift in world demand for the country's exports), the volume of exports may fall substantially. If demand for the country's exports is <strong className="text-secondary">price elastic</strong> (PED &gt; 1), total export revenue will <em>fall</em> despite the higher price per unit, potentially worsening the current account of the Balance of Payments. Conversely, a <strong className="text-destructive">deterioration (fall) in the ToT</strong> means more exports are needed to purchase the same volume of imports. While this appears negative, it may be caused by a country deliberately lowering export prices to gain market share. If demand is price elastic, the increased volume of exports may more than compensate for the lower price, increasing total export revenue and improving the current account. Thus, <strong>whether a change in ToT is "good" or "bad" depends on the cause of the change and the price elasticity of demand for exports and imports.</strong>
              </p>
            </AnalysisBlock>

            <TermsOfTradeDiagram />

            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
                <h4 className="font-semibold text-cambridge-green text-sm mb-2">Causes of an Improvement in ToT</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Rise in world demand for exports (rightward shift)</li>
                  <li>• Fall in domestic supply of exports (leftward shift, e.g., poor harvest)</li>
                  <li>• Fall in world supply of imports (making them cheaper relative to exports)</li>
                  <li>• Currency appreciation (makes exports relatively more expensive)</li>
                  <li>• Lower domestic inflation relative to trading partners</li>
                </ul>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                <h4 className="font-semibold text-destructive text-sm mb-2">Causes of a Deterioration in ToT</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Fall in world demand for exports (leftward shift)</li>
                  <li>• Rise in domestic supply of exports (rightward shift, e.g., bumper harvest)</li>
                  <li>• Rise in world demand for imports (increasing import prices)</li>
                  <li>• Currency depreciation (makes imports relatively more expensive)</li>
                  <li>• Higher domestic inflation relative to trading partners</li>
                </ul>
              </div>
            </div>

            <ExamTipBox title="Senior Examiner's Conclusion" variant="gold">
              <p className="text-sm leading-relaxed">
                "Ultimately, the significance of a change in the Terms of Trade depends critically on <strong>the cause</strong> (demand-driven vs. supply-driven) and <strong>the price elasticity of demand</strong> for the country's exports. A favourable ToT may paradoxically harm an economy if it results from falling export volumes, while an unfavourable ToT may boost economic performance if it reflects competitive pricing that captures market share in elastic markets. A simplistic 'higher ToT = better' approach will not score highly in evaluative marks."
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: PROTECTIONISM */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Protectionism: Tools and Impact">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">The Distortion of Free Trade</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Protectionism</strong> refers to any government policy designed to restrict or distort the free flow of international trade in order to shield domestic producers from foreign competition. While the theory of comparative advantage demonstrates that free trade maximises global allocative efficiency, governments frequently intervene for political, strategic, or mercantilist reasons. The primary instruments of protection include <strong className="text-secondary">tariffs</strong> (taxes on imports), <strong className="text-secondary">quotas</strong> (quantitative limits on imports), <strong className="text-secondary">subsidies</strong> (payments to domestic producers), and <strong className="text-secondary">embargoes</strong> (complete bans on trade with specific countries). Each tool has distinct effects on consumer welfare, producer welfare, government revenue, and overall economic efficiency, which can be analysed using partial equilibrium diagrams.
            </p>

            {/* TARIFF ANALYSIS */}
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Tariff Analysis: The Mechanics of a Tax on Imports</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A <strong>tariff</strong> is a tax levied on imported goods, which raises the domestic price above the world price (<InlineMath>{'P_w'}</InlineMath>). Under free trade, at the world price, domestic firms supply quantity <InlineMath>{'Q_1'}</InlineMath> and domestic consumers demand quantity <InlineMath>{'Q_4'}</InlineMath>. The gap (<InlineMath>{'Q_4 - Q_1'}</InlineMath>) is filled by imports. When a tariff of <InlineMath>{'t'}</InlineMath> is imposed, the domestic price rises to <InlineMath>{'P_w + t'}</InlineMath>. At this higher price, domestic quantity supplied rises to <InlineMath>{'Q_2'}</InlineMath> (inefficient domestic firms now find it profitable to produce), while domestic quantity demanded falls to <InlineMath>{'Q_3'}</InlineMath>. Imports contract from (<InlineMath>{'Q_4 - Q_1'}</InlineMath>) to (<InlineMath>{'Q_3 - Q_2'}</InlineMath>). The government collects <strong className="text-cambridge-yellow">tariff revenue</strong> equal to <InlineMath>{'t \\times (Q_3 - Q_2)'}</InlineMath>. However, two <strong className="text-destructive">deadweight welfare loss (DWL)</strong> triangles emerge: (1) <strong>Production inefficiency</strong>: resources are diverted to domestic production that could be obtained more cheaply from abroad; (2) <strong>Consumption inefficiency</strong>: consumers are priced out of the market and reduce their consumption below the socially optimal level.
              </p>
            </div>

            <TariffDeadweightDiagram />

            <AnalysisBlock title="Chain of Analysis: Winners and Losers from a Tariff" type="evaluation">
              <p className="text-sm leading-relaxed">
                <strong className="text-cambridge-green">Domestic producers gain:</strong> They receive a higher price (<InlineMath>{'P_w + t'}</InlineMath> instead of <InlineMath>{'P_w'}</InlineMath>) and expand production from <InlineMath>{'Q_1'}</InlineMath> to <InlineMath>{'Q_2'}</InlineMath>. Producer surplus increases. <strong className="text-destructive">Domestic consumers lose:</strong> They pay a higher price and reduce consumption from <InlineMath>{'Q_4'}</InlineMath> to <InlineMath>{'Q_3'}</InlineMath>. Consumer surplus falls. <strong className="text-cambridge-yellow">Government gains:</strong> It collects tariff revenue. <strong className="text-destructive">Foreign producers lose:</strong> Export volume to this market falls. <strong className="text-destructive">Society as a whole loses:</strong> The sum of the two deadweight loss triangles represents a net loss to the domestic economy that is not redistributed to any party—it is a pure efficiency loss. The tariff causes a misallocation of resources: productive resources are drawn into industries where the country does <em>not</em> have a comparative advantage, violating the principle of allocative efficiency where resources flow to their highest-value use.
              </p>
            </AnalysisBlock>

            {/* OTHER PROTECTIONIST TOOLS */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <NoteCard title="Quotas" type="definition">
                <p className="text-sm leading-relaxed">
                  A <strong>quota</strong> imposes a maximum quantity limit on imports. Like a tariff, it raises the domestic price above the world price by restricting supply. However, a quota does <strong>not</strong> generate government revenue unless import licences are auctioned. Instead, the economic rent (the difference between the domestic price and world price on the permitted imports) accrues to whoever holds the import licences—typically foreign exporters or domestic importers with lobbying power. The welfare effects (DWL triangles, producer gains, consumer losses) are analogous to a tariff, but the redistribution differs.
                </p>
              </NoteCard>

              <NoteCard title="Subsidies to Domestic Producers" type="definition">
                <p className="text-sm leading-relaxed">
                  A <strong>subsidy</strong> is a payment per unit to domestic producers, shifting the domestic supply curve rightward. Unlike tariffs and quotas, a subsidy does <strong>not</strong> raise the price to consumers—consumers continue to pay the world price. However, domestic production expands, crowding out imports. The government bears the cost of the subsidy, creating a fiscal burden. Deadweight loss arises because domestic resources are used to produce goods that could be imported more cheaply, representing a production inefficiency.
                </p>
              </NoteCard>

              <NoteCard title="Embargoes" type="definition">
                <p className="text-sm leading-relaxed">
                  An <strong>embargo</strong> is a complete ban on trade with a particular country or in a particular good, often imposed for political or strategic reasons (e.g., US embargo on Cuba). Embargoes are the most extreme form of protection and completely eliminate the gains from trade in the affected goods or with the affected country. Domestic consumers face higher prices and reduced choice; domestic producers may benefit from monopoly-like conditions in the short run but lose incentives for efficiency in the long run.
                </p>
              </NoteCard>

              <NoteCard title="Other Non-Tariff Barriers (NTBs)" type="application">
                <p className="text-sm leading-relaxed">
                  Modern protectionism increasingly relies on <strong>non-tariff barriers</strong> that are harder to detect and challenge under WTO rules. These include: (1) <strong>Voluntary Export Restraints (VERs)</strong>: agreements where exporting countries "voluntarily" limit exports (e.g., Japanese car exports to the US in the 1980s); (2) <strong>Administrative barriers (Red Tape)</strong>: excessive customs procedures, health/safety regulations, or product standards that disproportionately burden foreign firms; (3) <strong>Exchange rate manipulation</strong>: artificially depreciating the currency to make exports cheaper and imports more expensive.
                </p>
              </NoteCard>
            </div>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 4: ARGUMENTS FOR AND AGAINST PROTECTIONISM */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Arguments For and Against Protectionism">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">A Balanced Evaluative Narrative</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
                <h4 className="font-semibold text-cambridge-green text-sm mb-3">Arguments FOR Protectionism</h4>
                <div className="space-y-3 text-xs text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">1. Infant Industry Argument</p>
                    <p>Newly established domestic industries may lack the economies of scale and learning-by-doing experience to compete with established foreign rivals. Temporary protection allows them to grow, achieve scale efficiencies, and eventually become internationally competitive. The protection should be <em>time-limited</em> and conditional on performance improvements.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">2. Anti-Dumping Measures</p>
                    <p>Dumping occurs when foreign firms sell goods below marginal cost (or below home-market prices) to drive domestic competitors out of business, after which they raise prices. Anti-dumping tariffs can prevent predatory pricing and maintain domestic competition.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">3. Strategic/National Security</p>
                    <p>Certain industries (defence, food, energy) may be vital for national security. A country may wish to maintain domestic production capacity even if it is less efficient than importing, to avoid dependence on potentially hostile foreign suppliers.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">4. Correct Market Failures</p>
                    <p>If foreign production involves negative externalities (e.g., pollution, child labour) that are not reflected in prices, tariffs can level the playing field and prevent a "race to the bottom" in environmental/labour standards.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                <h4 className="font-semibold text-destructive text-sm mb-3">Arguments AGAINST Protectionism</h4>
                <div className="space-y-3 text-xs text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">1. Retaliation and Trade Wars</p>
                    <p>Protection invites retaliation from trading partners, leading to a spiral of escalating tariffs (a "beggar-thy-neighbour" policy) that reduces trade volumes globally and harms all countries. The Smoot-Hawley Tariff of 1930 is the canonical example of this destructive dynamic.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">2. Misallocation of Resources</p>
                    <p>Protection distorts the price mechanism, causing resources to flow into industries where the country does <em>not</em> have a comparative advantage. This reduces overall allocative efficiency and lowers potential GDP.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">3. Reduced Consumer Welfare</p>
                    <p>Tariffs and quotas raise prices for consumers and reduce product variety. This represents a regressive tax, hitting poorer households harder as they spend a greater proportion of income on goods.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">4. Rent-Seeking and Government Failure</p>
                    <p>Protection creates incentives for lobbying and corruption. Industries with political clout, rather than economic potential, may secure protection, wasting resources on lobbying rather than productive investment.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">5. Harm to Export Industries</p>
                    <p>Tariffs on imported inputs raise costs for domestic export industries, making them less competitive globally. Protection of one industry can thus harm others.</p>
                  </div>
                </div>
              </div>
            </div>

            <ExamTipBox title="Senior Examiner's Conclusion" variant="gold">
              <p className="text-sm leading-relaxed">
                "Ultimately, while Comparative Advantage demonstrates that free trade maximises global welfare, real-world trade is distorted by transport costs, non-homogeneous goods, imperfect information, and political imperatives. Protectionism, while offering short-term relief for domestic industries and employment, frequently leads to a <strong>'beggar-thy-neighbour'</strong> spiral of retaliation that reduces global allocative efficiency and harms consumers. The strongest theoretical case for protection—the infant industry argument—is often abused in practice, with 'temporary' measures becoming permanent. A top-scoring evaluation must balance the theoretical gains from free trade against the legitimate, if limited, circumstances where strategic protection may be warranted, while emphasising the high risk of government failure and the importance of multilateral trade rules (WTO) to prevent protectionist escalation."
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 5: TRADE BLOCS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Regional Trading Blocs and Economic Integration">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Levels of Economic Integration</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Economic integration occurs when countries agree to reduce or eliminate barriers to trade and factor mobility among themselves. Integration exists on a spectrum of increasing depth, from loose preferential trading arrangements to full economic and monetary union. The key levels, in ascending order of integration, are: <strong className="text-foreground">Free Trade Area (FTA)</strong> → <strong className="text-foreground">Customs Union</strong> → <strong className="text-foreground">Common Market</strong> → <strong className="text-foreground">Economic and Monetary Union (EMU)</strong>.
            </p>

            <TradeBlocsDiagram />
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 6: TRADE CREATION AND TRADE DIVERSION (4.7.3) */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Trade Creation and Trade Diversion">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">The Welfare Economics of Customs Unions</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The formation of a <strong className="text-foreground">Customs Union</strong>—characterised by the elimination of tariffs between member states and the adoption of a <strong className="text-secondary">Common External Tariff (CET)</strong> against non-members—produces two countervailing welfare effects that determine whether membership is beneficial or harmful for any individual country. These effects, first rigorously analysed by Jacob Viner in 1950, are termed <strong className="text-cambridge-green">Trade Creation</strong> and <strong className="text-destructive">Trade Diversion</strong>. Understanding the balance between these effects is essential for evaluating whether regional integration enhances or diminishes economic welfare, and constitutes a high-frequency examination topic requiring precise diagrammatic analysis.
            </p>

            {/* TRADE CREATION SUBSECTION */}
            <div className="p-4 bg-cambridge-green/5 rounded-lg border border-cambridge-green/30 space-y-3">
              <h4 className="font-serif text-lg text-cambridge-green font-semibold">Trade Creation: Definition and Welfare Analysis</h4>
              
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Trade Creation</strong> is defined as the replacement of <strong>high-cost domestic production</strong> with <strong>lower-cost imports from a fellow member</strong> of a trading bloc, made possible by the removal of tariffs between member countries. Prior to joining the customs union, domestic producers may have been protected by tariffs that artificially raised the price of imports from the partner country. Upon entry into the union, these internal tariffs are abolished. The domestic price falls from the tariff-inclusive level (<InlineMath>{'P_{domestic} + t'}</InlineMath>) to the member country's export price (<InlineMath>{'P_{member}'}</InlineMath>). This price reduction has two distinct welfare-enhancing effects.
              </p>

              <AnalysisBlock title="Chain of Analysis: The Two Effects of Trade Creation" type="analysis">
                <p className="text-sm leading-relaxed">
                  <strong className="text-cambridge-green">First, the Production Effect:</strong> At the lower post-union price, domestic production becomes less profitable. Marginal domestic firms, whose costs lie between the old tariff-inclusive price and the new member price, exit the market or reduce output. Production contracts from <InlineMath>{'Q_S'}</InlineMath> to <InlineMath>{"Q'_S"}</InlineMath>. This is <em>efficient</em>: resources that were previously employed in domestic production—where marginal cost exceeded the world (member) price—are now released for reallocation to sectors where the country has a genuine comparative advantage. The <strong>production effect triangle</strong> represents the welfare gain from eliminating this production inefficiency. <strong className="text-cambridge-green">Second, the Consumption Effect:</strong> Lower prices expand consumer demand from <InlineMath>{'Q_D'}</InlineMath> to <InlineMath>{"Q'_D"}</InlineMath>. Consumers who were previously priced out of the market now enter, and existing consumers increase their purchases. Consumer surplus rises. The <strong>consumption effect triangle</strong> represents the welfare gain from this expanded consumption. The combined area of these two triangles is the <strong className="text-foreground">net welfare gain from trade creation</strong>—a permanent efficiency improvement resulting from the reallocation of resources according to comparative advantage principles within the bloc.
                </p>
              </AnalysisBlock>
            </div>

            <TradeCreationDiagram />

            {/* TRADE DIVERSION SUBSECTION */}
            <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/30 space-y-3 mt-4">
              <h4 className="font-serif text-lg text-destructive font-semibold">Trade Diversion: Definition and Welfare Analysis</h4>
              
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Trade Diversion</strong> is defined as the replacement of <strong>lower-cost imports from an efficient non-member country</strong> with <strong>higher-cost imports from a less efficient member country</strong>, caused by the discriminatory effect of the Common External Tariff (CET). Before joining the union, a country may import from the most efficient global producer—say, at world price <InlineMath>{'P_w'}</InlineMath>—paying a tariff that generates government revenue. After joining the customs union, imports from non-members continue to face the CET, but imports from member countries enter tariff-free. If the member country's price (<InlineMath>{'P_m'}</InlineMath>) is lower than the world price <em>plus</em> the CET (<InlineMath>{'P_w + CET'}</InlineMath>), but <strong>higher than the actual world price</strong> (<InlineMath>{'P_m > P_w'}</InlineMath>), trade is <em>diverted</em> from the efficient non-member to the less efficient member. This is the critical source of welfare loss.
              </p>

              <AnalysisBlock title="Chain of Analysis: The Mechanics of Trade Diversion Loss" type="evaluation">
                <p className="text-sm leading-relaxed">
                  The welfare calculus of trade diversion involves comparing gains and losses. <strong className="text-cambridge-green">Consumer Gain:</strong> The domestic price falls from <InlineMath>{'P_w + CET'}</InlineMath> to <InlineMath>{'P_m'}</InlineMath>. Consumers benefit from lower prices, and the familiar production and consumption effect triangles appear as small gains. <strong className="text-destructive">Government Loss (Tariff Revenue):</strong> Prior to the union, the government collected tariff revenue on imports from the efficient non-member. This revenue is now <strong>completely lost</strong>—the government no longer taxes imports from the member country. <strong className="text-destructive">Trade Diversion Loss Rectangle:</strong> This is the <em>critical</em> welfare loss. On every unit of imports now purchased from the member country, the country pays <InlineMath>{'P_m'}</InlineMath> instead of the true world price <InlineMath>{'P_w'}</InlineMath>. The difference (<InlineMath>{'P_m - P_w'}</InlineMath>) multiplied by the quantity of imports represents a transfer of purchasing power from the importing country to the less efficient member producer. This payment <strong>buys nothing additional</strong>—it simply compensates the member country for its higher production costs. If the area of the <strong className="text-destructive">trade diversion loss rectangle</strong> exceeds the sum of the small consumer surplus triangles, the country suffers a <strong>net welfare loss</strong> from joining the customs union.
                </p>
              </AnalysisBlock>
            </div>

            <TradeDiversionDiagram />

            {/* FACTORS DETERMINING NET WELFARE EFFECT */}
            <div className="p-4 bg-muted/30 rounded-lg border border-border space-y-3 mt-4">
              <h4 className="font-semibold text-foreground">Factors Determining Whether Trade Creation Outweighs Trade Diversion</h4>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold text-cambridge-green">Trade Creation Dominates When:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Member countries have <strong>different</strong> comparative advantages, enabling efficient intra-bloc specialisation</li>
                    <li>• The bloc includes <strong>many countries</strong> with diverse production structures, increasing internal competition</li>
                    <li>• Pre-union tariffs between members were <strong>high</strong>, so their removal generates large price reductions</li>
                    <li>• Member producers are <strong>close to world-efficiency levels</strong>, minimising the cost disadvantage relative to non-members</li>
                    <li>• Demand elasticities are <strong>high</strong>, so consumers respond strongly to price falls</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-destructive">Trade Diversion Dominates When:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• The <strong>Common External Tariff is high</strong>, creating a large price wedge against efficient non-members</li>
                    <li>• Member countries are <strong>significantly less efficient</strong> than the best global producers</li>
                    <li>• The bloc includes <strong>few countries</strong> with similar production structures, limiting scope for intra-bloc gains</li>
                    <li>• A large share of pre-union trade was with <strong>efficient non-members</strong> who are now discriminated against</li>
                    <li>• The importing country's domestic production is <strong>small</strong>, limiting the production effect gain</li>
                  </ul>
                </div>
              </div>
            </div>

            <ExamTipBox title="Critical Evaluation: A Second-Best Outcome" variant="gold">
              <p className="text-sm leading-relaxed">
                "Ultimately, Trade Diversion is a <strong>second-best outcome</strong>. While customs unions may facilitate regional cooperation, political integration, and larger internal markets, they represent a departure from the <strong>first-best solution</strong> of multilateral free trade where all countries trade with the most efficient global producers regardless of political bloc membership. Trade diversion <strong>violates the principle of global comparative advantage</strong> by discriminating against the most efficient world producers purely on the basis of political bloc membership. The net welfare effect of joining a customs union is empirically determined by the balance between creation and diversion, and cannot be presumed positive. A high-scoring essay must demonstrate awareness that regional integration, while politically attractive, may be economically inferior to non-discriminatory multilateral liberalisation under the WTO."
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* Examiner Traps */}
        <ContentSection title="Examiner Guidance: International Trade">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="glass-card p-5 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-400 mb-3 text-sm">⚠️ Common Examiner Traps</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 1: Absolute vs Comparative Advantage</p>
                  <p className="text-muted-foreground">A country with absolute advantage in BOTH goods should still specialise based on comparative advantage. Trade benefits both—this is Ricardo's key insight.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 2: Parallel PPCs = No Trade Gains</p>
                  <p className="text-muted-foreground">If two countries have identical opportunity cost ratios (parallel PPCs), there is NO basis for mutually beneficial trade. This is frequently tested.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 3: "Improved ToT is Always Good"</p>
                  <p className="text-muted-foreground">If ToT improves due to falling export demand (not rising prices), export VOLUME falls. If PED {'>'} 1, total export revenue falls—worse outcome.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 4: Tariff Revenue = Consumer Loss</p>
                  <p className="text-muted-foreground">Tariff revenue goes to government, but consumer surplus loss is GREATER. The deadweight loss triangles represent pure welfare loss to society.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5 border-l-4 border-primary">
              <h4 className="font-semibold text-primary mb-3 text-sm">📌 Real-World Examples</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Comparative Advantage: Bangladesh Textiles</p>
                  <p className="text-muted-foreground">Bangladesh has lower opportunity cost in labour-intensive textiles (abundant cheap labour). Exports $40bn/year despite lower absolute productivity than China.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Tariff War: US-China 2018-2020</p>
                  <p className="text-muted-foreground">Trump's tariffs on $360bn of Chinese goods led to retaliation. US consumers paid higher prices; China diversified supply chains. Both economies lost.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trade Creation: EU Single Market</p>
                  <p className="text-muted-foreground">Elimination of internal tariffs allowed specialisation—German autos, French agriculture, Italian textiles. Intra-EU trade grew from 47% to 64% of total.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Infant Industry Success: South Korea</p>
                  <p className="text-muted-foreground">Protected auto and electronics sectors in 1970s-80s. Hyundai, Samsung now globally competitive. Rare successful case—most infant industries never "grow up."</p>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Chapter Synthesis */}
        <ContentSection title="Chapter Synthesis">
          <div className="glass-card p-5">
            <h3 className="font-serif text-xl text-gradient mb-4">The Definitive Conclusion</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The theory of international trade, grounded in David Ricardo's principle of <strong className="text-foreground">Comparative Advantage</strong>, demonstrates that <strong>mutually beneficial trade is possible even when one country has an absolute advantage in all goods</strong>, provided opportunity cost ratios differ. Through specialisation and trade, nations can consume beyond their domestic Production Possibility Curves, achieving higher levels of welfare than under autarky. The <strong className="text-secondary">Terms of Trade</strong> determines how the gains from trade are distributed between trading partners, with its significance contingent upon the cause of its movement and the price elasticity of demand for exports and imports. However, free trade remains a <em>theoretical ideal</em> frequently violated in practice. Governments impose <strong className="text-foreground">tariffs, quotas, subsidies, and non-tariff barriers</strong> for a range of political, strategic, and economic reasons—some legitimate (infant industries, national security, anti-dumping), many not (rent-seeking, political expediency). Each protectionist instrument distorts the price mechanism, generates <strong className="text-destructive">deadweight welfare losses</strong>, and risks triggering retaliatory measures that escalate into destructive trade wars.
            </p>

            <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
              <p className="text-sm text-secondary font-semibold italic">
                "Ultimately, while Comparative Advantage suggests that free trade maximises global welfare, real-world trade is distorted by transport costs, non-homogeneous goods, and political imperatives. The optimal policy combines multilateral trade liberalisation (WTO) with targeted, time-limited support for genuinely nascent industries."
              </p>
            </div>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default InternationalTrade;
