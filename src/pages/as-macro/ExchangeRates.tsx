import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import ExchangeRateShiftsDiagram from '@/components/diagrams/ExchangeRateShiftsDiagram';
import FixedExchangeRateDiagram from '@/components/diagrams/FixedExchangeRateDiagram';
import JCurveDiagram from '@/components/diagrams/JCurveDiagram';

const ExchangeRates = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Exchange Rates
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            AS Level Macroeconomics • Chapter 4
          </p>

          {/* Topic 1: Introduction to Exchange Rates */}
          <ContentSection title="Topic 1: Introduction to Exchange Rates" id="introduction" className="mb-4">
            <p className="text-foreground/90 leading-relaxed mb-3">
              An exchange rate is the price of one currency expressed in terms of another currency. It determines how much of one currency can be obtained for a unit of another. For example, if the Pakistani Rupee (PKR) to US Dollar (USD) exchange rate is 107.3, it means that 1 USD can be exchanged for 107.3 PKR. Exchange rates are fundamental to international trade and finance, as they directly affect the price of exports and imports, the value of foreign investments, and the overall competitiveness of an economy.
            </p>

            <NoteCard title="Key Exchange Rate Terminology" type="definition" className="mb-3">
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">Nominal Exchange Rate:</strong> The rate at which one currency can be exchanged for another in the foreign exchange market. This is the commonly quoted rate seen in currency markets and banks.</p>
                <p><strong className="text-primary">Real Exchange Rate:</strong> The nominal exchange rate adjusted for the relative price levels between two countries. It measures the price of domestic products in terms of foreign products, providing a more accurate picture of international competitiveness. The formula is: Real Exchange Rate = Nominal Exchange Rate × (Domestic Price Level / Foreign Price Level).</p>
                <p><strong className="text-primary">Effective Exchange Rate (Trade-Weighted Index):</strong> A weighted average of a country's exchange rate against a basket of its major trading partners' currencies. This provides a more comprehensive measure of a currency's overall strength or weakness in global trade.</p>
              </div>
            </NoteCard>

            <div className="bg-muted/30 rounded-lg p-3 mb-3">
              <h4 className="font-semibold text-sm mb-2">Sample Exchange Rates (Illustrative)</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between"><span>1 USD =</span><span className="font-mono">107.3 PKR</span></div>
                <div className="flex justify-between"><span>1 EUR =</span><span className="font-mono">124 PKR</span></div>
                <div className="flex justify-between"><span>1 GBP =</span><span className="font-mono">139 PKR</span></div>
                <div className="flex justify-between"><span>1 AED =</span><span className="font-mono">29.05 PKR</span></div>
              </div>
            </div>
          </ContentSection>

          {/* Topic 2: Determination of Exchange Rates */}
          <ContentSection title="Topic 2: Determination of Exchange Rates" id="determination" className="mb-4">
            <p className="text-foreground/90 leading-relaxed mb-3">
              In a floating exchange rate system, the exchange rate is determined by the forces of demand and supply in the foreign exchange market. Just like any other market, when demand exceeds supply, the price (exchange rate) rises, and when supply exceeds demand, the price falls.
            </p>

            <NoteCard title="1. Demand for the Currency" type="concept" className="mb-3">
              <p className="text-sm text-muted-foreground mb-2">
                The demand for a country's currency in the foreign exchange market comes from foreign entities who need the domestic currency to purchase goods, services, or assets from that country. A rightward shift in the demand curve causes the currency to appreciate.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">Demand for Exports:</strong> If the demand for domestic goods is increasing in the foreign market, this would increase the demand for the currency, hence shifting the demand curve outwards and vice versa. Foreign buyers need domestic currency to pay for exports, so higher export demand directly increases currency demand.</p>
                <p><strong className="text-primary">Investment in Home Country:</strong> If the interest rates are higher in the domestic country, more people from abroad want to invest in the country, leading to a rightward shift in the demand curve. Higher interest rates attract capital inflows as foreign investors seek better returns.</p>
                <p><strong className="text-primary">Speculation of Currency Appreciation:</strong> If the value of the domestic currency has a chance to go up in the market, this would shift the demand curve outwards and vice versa. Speculators buy currencies they expect to appreciate, creating a self-fulfilling prophecy.</p>
              </div>
            </NoteCard>

            <NoteCard title="2. Supply of the Currency in the Foreign Market" type="concept" className="mb-3">
              <p className="text-sm text-muted-foreground mb-2">
                The supply of a country's currency in the foreign exchange market comes from domestic entities who need foreign currency to purchase goods, services, or assets from abroad. A rightward shift in the supply curve causes the currency to depreciate.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">Imported Goods:</strong> If the domestic people demand more imported goods, the supply of the domestic currency is being floated in the market. Importers must sell domestic currency to obtain foreign currency for payments, increasing supply.</p>
                <p><strong className="text-primary">Interest Rates in Other Countries:</strong> If the interest rates are higher abroad, more individuals would want to shift their money to the foreign country to earn a high rate of interest, hence increasing the supply of domestic currency. Capital outflows require selling domestic currency.</p>
                <p><strong className="text-primary">Speculation of Currency Depreciation:</strong> If the local currency is about to depreciate, more people would want to sell it before it loses value, increasing supply and vice versa. This can accelerate depreciation.</p>
              </div>
            </NoteCard>

            <ExchangeRateShiftsDiagram />

            <NoteCard title="3. Equilibrium Exchange Rate" type="theory" className="mb-3">
              <p className="text-sm text-muted-foreground">
                The equilibrium exchange rate is determined at the point where the demand for the currency equals its supply. At this rate, there is no pressure for the exchange rate to change. If the exchange rate is above equilibrium, there is excess supply, pushing it down. If below equilibrium, excess demand pushes it up. The market automatically adjusts to restore equilibrium in a floating system.
              </p>
            </NoteCard>
          </ContentSection>

          {/* Topic 3: Exchange Rate Systems */}
          <ContentSection title="Topic 3: Exchange Rate Systems" id="systems" className="mb-4">
            
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <NoteCard title="1. Free Floating Exchange Rate" className="mb-0">
                <p className="text-sm text-muted-foreground mb-2">
                  In a free floating exchange rate system, the exchange rate is determined purely by market forces of demand and supply with no government intervention.
                </p>
                <div className="space-y-2">
                  <div>
                    <h5 className="text-xs font-semibold text-[hsl(var(--cambridge-green))] mb-1">Advantages:</h5>
                    <ul className="list-disc list-inside text-xs space-y-0.5">
                      <li><strong>Automatic Correction of BOP:</strong> Since there is no government intervention, the demand and supply forces clear out the surpluses and deficits automatically.</li>
                      <li><strong>No Need for Large Foreign Reserves:</strong> Since the government doesn't plan to intervene in the foreign exchange market, the local currency automatically gets converted at the market exchange rate.</li>
                      <li><strong>Free to Choose Domestic Policy:</strong> The government can focus on domestic demand and leave the BOP correction to market forces as compared to a fixed exchange rate.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-destructive mb-1">Disadvantages:</h5>
                    <ul className="list-disc list-inside text-xs space-y-0.5">
                      <li><strong>Unstable Exchange Rate:</strong> Due to changes in demand and supply of currency, a country experiences rapid fluctuations.</li>
                      <li><strong>Uncertainty for Business:</strong> Exporters and importers will be uncertain about prices of goods and raw materials. This leads to lower business activity and lower investment.</li>
                      <li><strong>Speculation:</strong> This leads to hot money flows—the transfer of funds around the globe in search of the best return.</li>
                    </ul>
                  </div>
                </div>
              </NoteCard>

              <NoteCard title="2. Fixed Exchange Rate System" className="mb-0">
                <p className="text-sm text-muted-foreground mb-2">
                  In a fixed exchange rate system, the central bank commits to maintaining the exchange rate at a specific target value by intervening in the forex market.
                </p>
                <div className="space-y-2">
                  <div>
                    <h5 className="text-xs font-semibold text-[hsl(var(--cambridge-green))] mb-1">Advantages:</h5>
                    <ul className="list-disc list-inside text-xs space-y-0.5">
                      <li><strong>Stability:</strong> Fixed exchange rates provide certainty for international trade and investment, reducing currency risk.</li>
                      <li><strong>Controls Inflation:</strong> Pegging to a stable currency disciplines domestic monetary policy and controls inflation.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-destructive mb-1">Disadvantages:</h5>
                    <ul className="list-disc list-inside text-xs space-y-0.5">
                      <li><strong>No Automatic Stabilization:</strong> No stability in spending on people—cannot use exchange rate as a policy tool.</li>
                      <li><strong>Macroeconomic Instability:</strong> May require contractionary policies to defend the peg, causing unemployment.</li>
                      <li><strong>Requires Large Reserves:</strong> Central bank must hold sufficient foreign currency reserves to intervene.</li>
                    </ul>
                  </div>
                </div>
              </NoteCard>
            </div>

            <FixedExchangeRateDiagram />

            <AnalysisBlock title="Central Bank Intervention Mechanism" type="analysis">
              <p className="text-sm mb-2">
                In a fixed exchange rate system, the central bank increases the supply of domestic currency to buy foreign reserves. This action will shift the supply curve to the right. In a surplus, to restore the exchange rate back to where it was, the central bank will prevent any fall in the value of the currency by buying surpluses of domestic currency in the foreign exchange market by selling foreign reserves.
              </p>
              <p className="text-sm">
                <strong>Note:</strong> To keep the exchange rates fixed, the central bank has to maintain foreign exchange reserves at a sufficient level. Without adequate reserves, the central bank cannot defend the peg against speculative attacks.
              </p>
            </AnalysisBlock>

            <NoteCard title="3. Managed Float (Dirty Float)" type="definition" className="mt-3">
              <p className="text-sm text-muted-foreground">
                Most countries today operate a managed float system—a hybrid where the exchange rate is primarily market-determined but the central bank occasionally intervenes to prevent excessive volatility or correct misalignments. The central bank sets a target range and only intervenes when the rate moves outside this band.
              </p>
            </NoteCard>
          </ContentSection>

          {/* Topic 4: Causes and Consequences */}
          <ContentSection title="Topic 4: Causes & Consequences of Exchange Rate Changes" id="causes-consequences" className="mb-4">
            
            <NoteCard title="Causes of Exchange Rate Depreciation/Devaluation" type="concept" className="mb-3">
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">Relative Interest Rates:</strong> If domestic interest rates fall relative to foreign rates, capital will flow out as investors seek higher returns abroad, increasing the supply of domestic currency and causing depreciation.</p>
                <p><strong className="text-primary">Relative Inflation Rates:</strong> If domestic inflation is higher than that of trading partners, exports become less competitive and imports more attractive, worsening the trade balance and causing the currency to depreciate.</p>
                <p><strong className="text-primary">Domestic Economic Growth:</strong> Strong domestic growth can increase demand for imports, raising the supply of domestic currency in foreign exchange markets and leading to depreciation.</p>
                <p><strong className="text-primary">Recession in Trading Partners:</strong> If major trading partners enter recession, demand for exports falls, reducing demand for the domestic currency and leading to depreciation.</p>
                <p><strong className="text-primary">Speculation:</strong> Speculation of a fall in the value of the domestic currency leads speculators to sell, increasing supply and causing depreciation—a self-fulfilling prophecy.</p>
                <p><strong className="text-primary">Political Instability:</strong> Political uncertainty can cause capital flight as investors move assets to safer countries, increasing supply of domestic currency and causing depreciation.</p>
              </div>
            </NoteCard>

            <NoteCard title="Short-Run Consequences of Depreciation/Devaluation" type="exam-tip" className="mb-3">
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">Effect on Balance of Trade:</strong> In the short run, a depreciation would lead to expensive imports and cheaper exports. However, because demand is inelastic in the short run (contracts are fixed, limited substitutes), the trade balance initially worsens—leading to a deficit.</p>
                <p><strong className="text-primary">Effect on Aggregate Demand:</strong> Export earnings fall and import payments increase (X↓, M↑). This leads to lower AD initially as net exports deteriorate.</p>
                <p><strong className="text-primary">Effect on Demand-Pull Inflation:</strong> This will slow down demand-pull inflation because AD will decrease in the short run due to the worsening trade balance.</p>
                <p><strong className="text-primary">Effect on National Income & Employment:</strong> Since the AD is low, it will reduce national income and hence cause unemployment in the economy in the short term.</p>
                <p><strong className="text-primary">Effect on Cost-Push Inflation:</strong> If the country imports raw materials, depreciation will increase cost-push inflation because imports are now more expensive, raising production costs.</p>
                <p><strong className="text-primary">Effect on Standard of Living:</strong> The standard of living will fall since fewer imports would be available, leading to less choice and higher prices for consumers.</p>
              </div>
            </NoteCard>

            <NoteCard title="Long-Run Consequences of Depreciation/Devaluation" type="theory" className="mb-3">
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">Effect on Balance of Trade:</strong> In the long run, as demand becomes more elastic, the trade balance improves. Exports increase in volume (cheaper for foreigners) and imports decrease (more expensive for domestic consumers).</p>
                <p><strong className="text-primary">Effect on Aggregate Demand:</strong> As net exports improve (X↑, M↓), AD increases, stimulating economic growth.</p>
                <p><strong className="text-primary">Effect on Demand-Pull Inflation:</strong> The increase in AD may cause demand-pull inflation as the economy expands.</p>
                <p><strong className="text-primary">Effect on National Income & Employment:</strong> Higher AD leads to increased output and employment in the long run.</p>
                <p><strong className="text-primary">Effect on Cost-Push Inflation:</strong> May persist if the country remains dependent on imported raw materials.</p>
                <p><strong className="text-primary">Effect on Standard of Living:</strong> The standard of living may improve as employment rises and the economy grows, though import prices remain elevated.</p>
              </div>
            </NoteCard>

            <JCurveDiagram />

            <AnalysisBlock title="The Marshall-Lerner Condition" type="evaluation">
              <p className="text-sm mb-2">
                The Marshall-Lerner condition states that a currency depreciation will only improve the trade balance if the sum of price elasticities of demand for exports and imports exceeds one:
              </p>
              <div className="bg-primary/10 p-3 rounded-lg text-center mb-2">
                <p className="text-base font-mono font-semibold">PED of Exports + PED of Imports {">"} 1</p>
              </div>
              <p className="text-sm mb-2">
                If this condition is met, the devaluation policy would be successful in improving the trade balance. If not, depreciation worsens the trade balance. In practice:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li><strong>Trade Surplus (X {">"} M):</strong> Net exports positive</li>
                <li><strong>Trade Balance (X = M):</strong> Net exports zero</li>
                <li><strong>Trade Deficit (X {"<"} M):</strong> Net exports negative—often worsens in short run before improving</li>
              </ul>
            </AnalysisBlock>

            <ExamTipBox title="Exam Strategy: Exchange Rate Analysis" variant="warning" className="mt-3">
              <ol className="list-decimal list-inside text-xs space-y-1">
                <li>Always distinguish between short-run (inelastic demand) and long-run (elastic demand) effects</li>
                <li>Reference the J-Curve when discussing trade balance effects of depreciation</li>
                <li>State the Marshall-Lerner condition explicitly when evaluating policy effectiveness</li>
                <li>Consider both demand-pull and cost-push inflation channels</li>
                <li>Discuss the trade-off between competitiveness gains and import cost increases</li>
              </ol>
            </ExamTipBox>
          </ContentSection>

          {/* Topic 5: Appreciation/Revaluation */}
          <ContentSection title="Topic 5: Currency Appreciation/Revaluation" id="appreciation" className="mb-4">
            <p className="text-foreground/90 leading-relaxed mb-3">
              The causes and consequences of currency appreciation (floating) or revaluation (fixed) are the opposite of depreciation/devaluation. A stronger currency makes exports more expensive and imports cheaper.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <NoteCard title="Causes of Appreciation" type="concept">
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Higher domestic interest rates (capital inflows)</li>
                  <li>Lower inflation than trading partners</li>
                  <li>Strong export performance</li>
                  <li>Foreign direct investment inflows</li>
                  <li>Political stability (safe haven status)</li>
                  <li>Speculation of currency strengthening</li>
                </ul>
              </NoteCard>

              <NoteCard title="Consequences of Appreciation" type="exam-tip">
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Exports become more expensive → may fall</li>
                  <li>Imports become cheaper → may rise</li>
                  <li>Trade balance may worsen</li>
                  <li>Lower imported inflation (cheaper raw materials)</li>
                  <li>Reduced cost-push inflation</li>
                  <li>Lower AD if net exports fall significantly</li>
                </ul>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary" className="mb-4">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Exchange Rate Fundamentals</h4>
                  <ul className="list-disc list-inside text-xs space-y-0.5">
                    <li>Determined by demand and supply in floating systems</li>
                    <li>Demand: exports, investment, speculation</li>
                    <li>Supply: imports, capital outflows, speculation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Systems Comparison</h4>
                  <ul className="list-disc list-inside text-xs space-y-0.5">
                    <li>Floating: automatic adjustment, no reserves needed</li>
                    <li>Fixed: stability, requires intervention</li>
                    <li>Managed Float: hybrid approach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Depreciation Effects</h4>
                  <ul className="list-disc list-inside text-xs space-y-0.5">
                    <li>Short-run: trade balance worsens (J-Curve)</li>
                    <li>Long-run: trade balance improves (if M-L met)</li>
                    <li>Cost-push inflation from imports</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Key Conditions</h4>
                  <ul className="list-disc list-inside text-xs space-y-0.5">
                    <li>Marshall-Lerner: PED_X + PED_M {">"} 1</li>
                    <li>J-Curve: short-run worsening before improvement</li>
                    <li>Time lags in trade adjustment</li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentSection>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ExchangeRates;
