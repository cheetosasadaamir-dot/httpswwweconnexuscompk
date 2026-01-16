import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import TermsOfTradeDiagram from '@/components/diagrams/TermsOfTradeDiagram';
import AbsoluteAdvantageDiagram from '@/components/diagrams/AbsoluteAdvantageDiagram';
import ComparativeAdvantageTableDiagram from '@/components/diagrams/ComparativeAdvantageTableDiagram';
import TradingPossibilityCurveDiagram from '@/components/diagrams/TradingPossibilityCurveDiagram';
import TariffQuotaDiagram from '@/components/diagrams/TariffQuotaDiagram';
import TradeBlocsDiagram from '@/components/diagrams/TradeBlocsDiagram';
import ProtectionismDiagram from '@/components/diagrams/ProtectionismDiagram';

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
            Understanding the gains from trade through absolute and comparative advantage, the terms of trade, and the effects of protectionism.
          </p>
        </div>

        {/* Topics Overview */}
        <div className="glass-card p-4 mb-6">
          <h3 className="font-serif text-lg font-semibold mb-2">Topics Covered</h3>
          <div className="grid md:grid-cols-2 gap-1 text-sm">
            <p>1. Terms of Trade</p>
            <p>2. Principles of Absolute Advantage</p>
            <p>3. Principles of Comparative Advantage</p>
            <p>4. Free Trade</p>
            <p>5. Protectionism</p>
            <p>6. Trade Blocs</p>
            <p>7. Trade Creation and Trade Diversion</p>
          </div>
        </div>

        {/* TOPIC 1: Terms of Trade */}
        <ContentSection title="Topic 1: Terms of Trade">
          <NoteCard title="Terms of Trade Formula" type="formula">
            <div className="text-center p-3 bg-muted/30 rounded-lg font-mono text-lg">
              TOT = (Price index of exports / Price index of imports) × 100
            </div>
          </NoteCard>

          <NoteCard title="Three Types of TOT" type="definition">
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-primary">Favorable Terms of Trade:</strong> This occurs when Export Prices exceed Import Prices. For example, if the export price index is 110 and the import price index is 105, then TOT = (110/105) × 100 = 104. A value above 100 is always favorable, indicating more imports can be purchased per unit of exports.
              </p>
              <p>
                <strong className="text-destructive">Unfavorable Terms of Trade:</strong> This occurs when Import Prices exceed Export Prices. For example, if the export price index is 105 and the import price index is 110, then TOT = (105/110) × 100 = 95. A value below 100 is unfavorable, indicating fewer imports can be purchased per unit of exports.
              </p>
              <p>
                <strong className="text-muted-foreground">Balanced Terms of Trade:</strong> This occurs when Export Prices equal Import Prices. For example, if both price indices are 110, then TOT = (110/110) × 100 = 100. A value of exactly 100 indicates balanced terms of trade.
              </p>
            </div>
          </NoteCard>

          <ExamTipBox title="Important Note" variant="warning">
            <p className="text-sm">On its own, TOT has no value and it must be compared with other years or a base year to give valuable results.</p>
          </ExamTipBox>

          <NoteCard title="Movements in Terms of Trade" type="theory">
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-semibold text-primary mb-1">Favorable/Improvement in TOT:</p>
                <p>1. Price of Exports increases and price of Imports stay the same.</p>
                <p>2. Price of Imports decreases and price of Exports stay the same.</p>
                <p>3. Price of Exports rise more faster than the rise in price of Imports.</p>
                <p>4. Price of Exports fall slowly as compared to fall in prices of Imports.</p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <p className="font-semibold text-destructive mb-1">Unfavorable/Deterioration in TOT:</p>
                <p>1. Price of Exports decreases and price of Imports stay the same.</p>
                <p>2. Price of Imports increases and prices of Exports stay the same.</p>
                <p>3. Price of Imports rise more faster than the rise in price of Exports.</p>
                <p>4. Price of Imports fall slowly as compared to fall in prices of Exports.</p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Causes of Changes in TOT" type="application">
            <p className="text-sm mb-2">There are TWO causes of changes in TOT:</p>
            
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold mb-1">1. Changes in the demand of exports and imports</p>
                <p>If the demand for exports increases, it will raise the price of exports and improve the TOT. Conversely, if the demand for exports decreases, it will reduce the price of exports and deteriorate the TOT.</p>
                <p className="mt-1 text-xs text-muted-foreground">↑ Quantity Demanded Exports → ↑ Price of Exports → TOT Improves</p>
                <p className="text-xs text-muted-foreground">↓ Quantity Demanded Exports → ↓ Price of Exports → TOT Deteriorates</p>
                <p className="mt-2">On the other hand, if the demand for imports increases, it will raise the price of imports, hence deteriorating the TOT. If the demand for imports decreases, it will reduce the price of imports, hence improving the TOT.</p>
                <p className="mt-1 text-xs text-muted-foreground">↑ Quantity Demanded Imports → ↑ Price of Imports → TOT Deteriorates</p>
                <p className="text-xs text-muted-foreground">↓ Quantity Demanded Imports → ↓ Price of Imports → TOT Improves</p>
              </div>

              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold mb-1">2. Changes in the supply of exports and imports</p>
                <div className="grid md:grid-cols-2 gap-2 mt-2 text-xs">
                  <p><strong>Changes in factors of production:</strong> Affects production capacity and TOT.</p>
                  <p><strong>Changes in Technology:</strong> Improved technology can improve TOT.</p>
                  <p><strong>Change in Tastes:</strong> Shifts in consumer preferences affect demand and TOT.</p>
                  <p><strong>Economic Growth:</strong> Higher growth can affect import/export patterns and TOT.</p>
                  <p><strong>Tariff (Tax on imports):</strong> Can worsen TOT if trading partners retaliate.</p>
                  <p><strong>Quotas:</strong> Quantity limits on imports affect trade balance and TOT.</p>
                  <p><strong>Exchange Rates:</strong> Devaluation and revaluation directly affect TOT.</p>
                  <p><strong>Market Conditions:</strong> Global market changes influence prices and TOT.</p>
                  <p><strong>Import Substitutes:</strong> Availability of substitutes keeps import prices low, hence favorable TOT.</p>
                  <p><strong>Inflation/Deflation:</strong> Relative inflation rates affect export competitiveness and TOT.</p>
                </div>
              </div>
            </div>
          </NoteCard>

          <TermsOfTradeDiagram />
        </ContentSection>

        {/* TOPIC 2: Absolute Advantage */}
        <ContentSection title="Topic 2: Principles of Absolute Advantage">
          <NoteCard title="Absolute Advantage" type="definition">
            <p className="text-sm">
              A country has an <strong>absolute advantage</strong> in producing a good if it can produce more of that good with the same resources (one worker in one day) than another country. Absolute advantage is determined by comparing the total output each country can produce.
            </p>
          </NoteCard>

          <NoteCard title="Numerical Example: Coffenia & Robotia" type="application">
            <p className="text-sm mb-3">
              Consider a simple world economy of two countries, Coffenia and Robotia, that produce coffee and robots. The table shows the quantities of coffee and robots that one worker in one day can produce in each country, if they produce only coffee or only robots.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-1 px-2">Country</th>
                    <th className="text-center py-1 px-2">Coffee</th>
                    <th className="text-center py-1 px-2">OR</th>
                    <th className="text-center py-1 px-2">Robots</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-1 px-2 font-semibold text-cambridge-cyan">Coffenia</td>
                    <td className="text-center py-1 px-2">8</td>
                    <td className="text-center py-1 px-2 text-muted-foreground">or</td>
                    <td className="text-center py-1 px-2">4</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-1 px-2 font-semibold text-cambridge-orange">Robotia</td>
                    <td className="text-center py-1 px-2">3</td>
                    <td className="text-center py-1 px-2 text-muted-foreground">or</td>
                    <td className="text-center py-1 px-2">6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-sm space-y-1">
              <p>Using this information, we can construct production possibilities curves (PPCs) for Coffenia and Robotia.</p>
              <p>• <strong>Coffenia</strong> produces 8 units of coffee and 0 Robots at point A, or 0 units of coffee and 4 Robots at point B.</p>
              <p>• <strong>Robotia</strong> produces 3 units of coffee and 0 Robots at point C, or 0 units of coffee and 6 Robots at point D.</p>
            </div>
          </NoteCard>

          <AnalysisBlock title="Identifying Absolute Advantage">
            <p className="text-sm">
              <strong className="text-cambridge-cyan">Coffenia's absolute advantage in coffee:</strong> Its PPC extends further on the coffee axis (8 units vs 3 units).
            </p>
            <p className="text-sm mt-1">
              <strong className="text-cambridge-orange">Robotia's absolute advantage in robots:</strong> Its PPC extends further on the robot axis (6 units vs 4 units).
            </p>
          </AnalysisBlock>

          <AbsoluteAdvantageDiagram />
          <TradingPossibilityCurveDiagram />

          <NoteCard title="Production and Consumption with Trade" type="theory">
            <p className="text-sm">
              With trade, each country specializes in producing the good where it has absolute advantage. Coffenia specializes in coffee (producing 8 units), Robotia specializes in robots (producing 6 units). Through trade, they can exchange goods.
            </p>
            <p className="text-sm mt-2 font-semibold text-cambridge-green">
              Key Result: Producing on their PPC, due to trade they can consume at a point outside their PPC! This demonstrates the gains from trade when countries specialize according to their absolute advantages and become the most efficient (low-cost) producers.
            </p>
          </NoteCard>
        </ContentSection>

        {/* TOPIC 3: Comparative Advantage */}
        <ContentSection title="Topic 3: Principles of Comparative Advantage">
          <NoteCard title="Law of Comparative Advantage" type="definition">
            <p className="text-sm">
              A country has a <strong>comparative advantage</strong> in producing a good if it can produce that good at a <strong>lower opportunity cost</strong> than another country. Even if a country has absolute advantage in both goods, it should still specialize in the good where its comparative advantage is greatest.
            </p>
          </NoteCard>

          <NoteCard title="Numerical Example: Cottonia & Microchippia" type="application">
            <p className="text-sm mb-3">
              Consider two countries, Cottonia and Microchippia. We can see that <strong>Microchippia has an absolute advantage in the production of both cotton and microchips</strong>, because with the same resources (one worker in one day) it can produce more of both goods than Cottonia.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-1 px-2">Country</th>
                    <th className="text-center py-1 px-2">Cotton</th>
                    <th className="text-center py-1 px-2">OR</th>
                    <th className="text-center py-1 px-2">Microchips</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-1 px-2 font-semibold text-cambridge-cyan">Cottonia</td>
                    <td className="text-center py-1 px-2">20</td>
                    <td className="text-center py-1 px-2 text-muted-foreground">or</td>
                    <td className="text-center py-1 px-2">10</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-1 px-2 font-semibold text-cambridge-orange">Microchippia</td>
                    <td className="text-center py-1 px-2">25</td>
                    <td className="text-center py-1 px-2 text-muted-foreground">or</td>
                    <td className="text-center py-1 px-2">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-muted/30 rounded-lg text-sm">
              <p className="font-semibold mb-1">Opportunity Cost Calculation:</p>
              <p><span className="text-cambridge-cyan">Cottonia:</span> 20 units of cotton = 10 units of microchips</p>
              <p className="ml-4">→ 1 unit of cotton = 0.5 microchips</p>
              <p className="ml-4">→ 1 unit of microchips = 2 cotton</p>
              <p className="mt-2"><span className="text-cambridge-orange">Microchippia:</span> 25 units of cotton = 50 units of microchips</p>
              <p className="ml-4">→ 1 unit of cotton = 2 microchips</p>
              <p className="ml-4">→ 1 unit of microchips = 0.5 cotton</p>
            </div>
          </NoteCard>

          <AnalysisBlock title="Identifying Comparative Advantage">
            <p className="text-sm">
              <strong className="text-cambridge-cyan">Cottonia's comparative advantage:</strong> Cotton (opportunity cost: 0.5 microchips per cotton vs Microchippia's 2 microchips per cotton).
            </p>
            <p className="text-sm mt-1">
              <strong className="text-cambridge-orange">Microchippia's comparative advantage:</strong> Microchips (opportunity cost: 0.5 cotton per microchip vs Cottonia's 2 cotton per microchip).
            </p>
          </AnalysisBlock>

          <ComparativeAdvantageTableDiagram />

          <NoteCard title="Trade Results" type="theory">
            <p className="text-sm">
              When countries specialize according to comparative advantage:
            </p>
            <p className="text-sm mt-2">
              <strong>Cottonia exports 10 units of cotton and imports 10 units of microchips.</strong>
            </p>
            <p className="text-sm">
              <strong>Microchippia exports 10 units of microchips and imports 10 units of cotton.</strong>
            </p>
          </NoteCard>

          <ExamTipBox title="Critical Note: Parallel PPCs" variant="warning">
            <p className="text-sm font-semibold">Parallel PPC leads to no trade.</p>
            <p className="text-sm mt-1">If two countries have parallel PPCs, their opportunity costs are identical, meaning neither has a comparative advantage. There would be no basis for mutually beneficial trade.</p>
          </ExamTipBox>
        </ContentSection>

        {/* TOPIC 4: Free Trade */}
        <ContentSection title="Topic 4: Free Trade">
          <NoteCard title="Definition of Free Trade" type="definition">
            <p className="text-sm">
              <strong>Free trade</strong> refers to the absence of government intervention of any kind between individuals or firms in different countries.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <NoteCard title="Advantages of Free Trade" type="theory">
              <div className="space-y-2 text-xs">
                <p>
                  <strong className="text-primary">1. Absolute Advantage:</strong> Countries can exploit their natural advantages and specialize in what they produce most efficiently. This leads to optimal resource allocation globally.
                </p>
                <p>
                  <strong className="text-primary">2. Wider Range of Commodities:</strong> If no restrictions are placed on foreign trade, the country can enjoy a wider range of commodities than what is otherwise open to it. The commodities which can be produced at home at relatively higher cost can be brought from the cheaper market from abroad and the resources of the country thus saved can be better employed for the production of other commodities in which it is comparatively better fitted.
                </p>
                <p>
                  <strong className="text-primary">3. Scarcity of Commodities:</strong> If at any time there is shortage of food or scarcity of other essential commodities in the country, they can be easily imported from other countries and thus the country can be saved from shortage of commodities and low standard of living.
                </p>
                <p>
                  <strong className="text-primary">4. Promotes Competition:</strong> International trade promotes competition among different financial resources, leading to efficiency and innovation.
                </p>
              </div>
            </NoteCard>

            <NoteCard title="Disadvantages of Free Trade" type="application">
              <div className="space-y-2 text-xs">
                <p>
                  <strong className="text-destructive">1. Effect on Domestic Industries:</strong> If no restrictions are placed on foreign trade, it may ruin the domestic industries and cause widespread distress among the people. This will be due to unemployment created since it will lead to job losses.
                </p>
                <p>
                  <strong className="text-destructive">2. Effect on Consumption Habits:</strong> Sometimes traders, in order to make profits, import commodities which are very harmful and injurious to the people. For instance, if opium, wine, etc., are imported, it will adversely affect the health and morale of the people.
                </p>
                <p>
                  <strong className="text-destructive">3. Dumping:</strong> It can lead to activities like dumping. This is when foreign firms sell their products in large quantities at below than the cost price deliberately to destroy the local industry.
                </p>
                <p>
                  <strong className="text-destructive">4. BOP Deficit:</strong> It might lead to Balance of Payments deficit. This is when a country is importing more than its exporting, which can exhaust the country's economy.
                </p>
                <p>
                  <strong className="text-destructive">5. Dependency:</strong> It might make a country dependent on another country. This might be potentially disastrous in times of war.
                </p>
                <p>
                  <strong className="text-destructive">6. Resource Dependency:</strong> Relying on essential imports like oil can create strategic vulnerabilities.
                </p>
              </div>
            </NoteCard>
          </div>

          <AnalysisBlock title="Evaluation of Free Trade" type="evaluation">
            <p className="text-sm">
              1. Free trade is only beneficial depending on the level of economic integration and development of the participating economies.
            </p>
            <p className="text-sm mt-1">
              2. International trade is only beneficial if the economy is developed enough to compete on the global stage.
            </p>
          </AnalysisBlock>
        </ContentSection>

        {/* TOPIC 5: Protectionism */}
        <ContentSection title="Topic 5: Protectionism">
          <ProtectionismDiagram />

          <NoteCard title="Methods of Trade Protectionism" type="definition">
            <p className="text-sm mb-2">There are several methods that a government can use for trade protectionism:</p>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <p>1. Tariffs</p>
              <p>2. Quotas</p>
              <p>3. Exchange Controls</p>
              <p>4. Export Subsidies</p>
              <p>5. Embargoes</p>
              <p>6. Voluntary Export Restraints (VER)</p>
              <p>7. Excessive Administrative Burdens (Red Tape)</p>
              <p>8. Exchange Rate Manipulation</p>
            </div>
          </NoteCard>

          <div className="space-y-3 mt-4">
            <NoteCard title="1. Tariffs" type="application">
              <p className="text-sm mb-2">A tariff is a tax on imported goods that raises the domestic price above the world price.</p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary mb-1">Advantages:</p>
                  <p>1. The domestic production increases from Q₁ to Q₂; they must pay a higher price, increasing employment locally.</p>
                  <p className="mt-1">2. Imports fall from (Q₁-Q₄) to (Q₂-Q₃); this helps the government achieve its objective of reducing import dependence.</p>
                </div>
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <p className="font-semibold text-destructive mb-1">Disadvantages:</p>
                  <p>1. Consumers lose from the tariff, because they can only buy a smaller quantity, Q₃ (rather than Q₄).</p>
                  <p className="mt-1">2. There is a negative impact on income distribution, because the tariff is a type of regressive tax.</p>
                  <p className="mt-1">3. Foreign countries might lose their exports.</p>
                </div>
              </div>
            </NoteCard>

            <TariffQuotaDiagram />

            <NoteCard title="2. Quotas" type="application">
              <p className="text-sm mb-2">
                The government decides to impose a quota on imports, limiting the quantity that can be legally imported. This restriction in effect shifts the supply curve to the right by the amount of the quota. The new, after-quota supply curve (Sdq) represents domestic supply plus the quantity specified by the quota. The new equilibrium domestic price is determined by the intersection of the domestic demand curve with Sdq, and is Pq.
              </p>
              <p className="text-xs text-muted-foreground italic">Note: The advantages and disadvantages are the same as Tariffs.</p>
            </NoteCard>

            <NoteCard title="3. Exchange Controls" type="definition">
              <p className="text-sm">
                This requires foreign currency owned by exporters to be surrendered to the central bank which will pay for them in the home currency. Importers who want foreign currency must apply to the central bank which can thus control the variety and volume of imports by controlling the issue of foreign currency.
              </p>
            </NoteCard>

            <NoteCard title="4. Export Subsidies" type="definition">
              <p className="text-sm">
                Some governments give subsidies to certain domestic industries so to protect and raise their competitiveness. Production subsidies shift the domestic supply curve (Sd) to Sds (domestic supply + subsidy), reducing the quantity of imports needed as domestic producers become more competitive at the world price.
              </p>
            </NoteCard>

            <NoteCard title="5. Embargoes" type="definition">
              <p className="text-sm">
                An embargo is a complete ban on trade with a particular country. This extreme form of protection may arise from political disputes and completely prohibits imports from the targeted country.
              </p>
            </NoteCard>

            <NoteCard title="6. Voluntary Export Restraints (VER)" type="definition">
              <p className="text-sm">
                A VER is an agreement with foreign countries to voluntarily limit their exports to a particular country. This is often negotiated to avoid more severe protectionist measures.
              </p>
            </NoteCard>

            <NoteCard title="7. Excessive Administrative Burdens (Red Tape)" type="definition">
              <p className="text-sm">
                Complex regulations, customs delays, and excessive paperwork can act as non-tariff barriers, making it difficult and costly for foreign firms to export to a country.
              </p>
            </NoteCard>

            <NoteCard title="8. Exchange Rate Manipulation" type="definition">
              <p className="text-sm">
                Artificially keeping the exchange rate low makes exports cheaper and imports more expensive, acting as a form of protectionism that may lead other countries to retaliate.
              </p>
            </NoteCard>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <NoteCard title="Arguments FOR Trade Protection" type="theory">
              <div className="space-y-1 text-xs">
                <p><strong>1. Protect infant industries:</strong> Allow new industries to grow and achieve economies of scale.</p>
                <p><strong>2. Protect declining industries:</strong> Prevent sudden unemployment in sunset industries.</p>
                <p><strong>3. Protect strategic industries:</strong> Maintain self-sufficiency in essential goods for national security.</p>
                <p><strong>4. Prevent dumping:</strong> Protect domestic firms from predatory pricing by foreign competitors.</p>
                <p><strong>5. Improve the terms of trade:</strong> Tariffs can shift terms of trade in a country's favor.</p>
                <p><strong>6. Improve the balance of payments:</strong> Reduce import expenditure to address trade deficits.</p>
                <p><strong>7. Earn tax revenue:</strong> Tariffs provide government revenue (especially important for developing countries).</p>
                <p><strong>8. Retaliation:</strong> Respond to protectionist measures imposed by trading partners.</p>
              </div>
            </NoteCard>

            <NoteCard title="Arguments AGAINST Trade Protection" type="application">
              <div className="space-y-1 text-xs">
                <p><strong className="text-destructive">1. Increased Prices:</strong> Consumers and producers pay higher prices for imports and domestically produced goods.</p>
                <p><strong className="text-destructive">2. Retaliation:</strong> Trading partners may impose their own restrictions, leading to trade wars.</p>
                <p><strong className="text-destructive">3. Firms might become inefficient:</strong> Without foreign competition, domestic firms have less incentive to innovate and reduce costs.</p>
                <p><strong className="text-destructive">4. Bureaucratic inefficiency:</strong> Sometimes imposing restrictions might lead to large administrative costs like collecting tariffs, ensuring quotas and preventing black markets. Furthermore, government officials might start accepting bribes from importers to give them favorable treatment which might lead to corruption.</p>
              </div>
            </NoteCard>
          </div>
        </ContentSection>

        {/* TOPIC 6: Trade Blocs */}
        <ContentSection title="Topic 6: Trade Blocs">
          <NoteCard title="Types of Trade Blocs" type="definition">
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-primary">1. Free Trade Area:</strong> Member countries agree to remove tariffs and quotas among themselves but each country maintains its own external tariffs against non-members. Example: NAFTA (North American Free Trade Agreement) between USA, Canada, and Mexico.
              </p>
              <p>
                <strong className="text-secondary">2. Customs Union:</strong> Member countries agree to remove tariffs among themselves AND agree to impose a common external tariff in trade with non-members. This represents a deeper level of integration than a free trade area.
              </p>
              <p>
                <strong className="text-accent">3. Common Market:</strong> Includes all features of a customs union, plus free movement of factors of production (labor and capital) between member countries.
              </p>
              <p>
                <strong className="text-cambridge-gold">4. Economic and Monetary Union:</strong> Includes all features of a common market, plus harmonized economic policies, a single interest rate, and potentially a single currency. The euro area is an example where member countries share a common currency and monetary policy set by the European Central Bank.
              </p>
            </div>
          </NoteCard>

          <TradeBlocsDiagram />
        </ContentSection>

        {/* TOPIC 7: Trade Creation and Trade Diversion */}
        <ContentSection title="Topic 7: Trade Creation and Trade Diversion">
          <div className="grid md:grid-cols-2 gap-4">
            <NoteCard title="Trade Creation" type="theory">
              <p className="text-sm">
                <strong>Trade creation</strong> occurs when a trade bloc leads to imports from a <strong>lower-cost member country</strong> replacing higher-cost domestic production. This increases welfare as resources are allocated more efficiently.
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                When tariffs are removed between member countries, consumers can purchase from the lowest-cost producer within the bloc, leading to increased efficiency and consumer surplus.
              </p>
            </NoteCard>

            <NoteCard title="Trade Diversion" type="application">
              <p className="text-sm">
                <strong>Trade diversion</strong> occurs when a trade bloc leads to imports from a <strong>higher-cost member country</strong> replacing lower-cost imports from non-members. This reduces welfare and distorts efficient resource allocation.
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Although a foreign country outside the bloc is more efficient in production, under a common tariff, the country won't buy from it. Instead, it buys from a less efficient member country because there's no tariff on intra-bloc trade.
              </p>
            </NoteCard>
          </div>

          <ExamTipBox title="Evaluating Trade Blocs" variant="gold">
            <p className="text-sm">
              Whether a trade bloc is welfare-enhancing depends on whether trade creation outweighs trade diversion. A bloc is more likely to be beneficial when:
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Member countries have different comparative advantages (more trade creation)</li>
              <li>• The common external tariff is low (less trade diversion)</li>
              <li>• The bloc includes many countries (more internal competition)</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-4">
            <h3 className="font-serif text-lg text-gradient mb-3">Key Takeaways</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Terms of Trade = (Export Price Index / Import Price Index) × 100. TOT {">"} 100 is favorable.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Absolute advantage: producing more of a good with same resources.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Comparative advantage: producing at lower opportunity cost. Parallel PPCs lead to no trade.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Free trade allows consumption beyond the PPC through specialization.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Protectionism methods: Tariffs, Quotas, Exchange Controls, Subsidies, Embargoes, VERs, Red Tape.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Trade blocs: FTA → Customs Union → Common Market → Economic/Monetary Union.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Trade creation (welfare gain) vs Trade diversion (welfare loss).
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default InternationalTrade;
