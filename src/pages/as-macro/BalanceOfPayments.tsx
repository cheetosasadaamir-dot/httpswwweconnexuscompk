import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import { ExchangeRateDiagram } from '@/components/diagrams/ExchangeRateDiagram';

const BalanceOfPayments = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Balance of Payments & Exchange Rates
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            AS Level Macroeconomics • Chapter 4
          </p>

          {/* Balance of Payments Structure */}
          <ContentSection title="The Balance of Payments">
            <p className="text-foreground/90 leading-relaxed mb-4">
              The <strong>Balance of Payments (BOP)</strong> is a comprehensive record of all economic transactions between residents of a country and the rest of the world over a specific period, typically one year. It serves as an accounting statement that captures the flow of goods, services, income, and financial capital across national borders.
            </p>

            <NoteCard title="The Three Main Accounts" className="mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">1. Current Account</h4>
                  <p className="text-sm text-muted-foreground mb-2">Records the flow of goods, services, income, and current transfers:</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>Trade in Goods (Visible Trade):</strong> Exports and imports of physical merchandise</li>
                    <li><strong>Trade in Services (Invisible Trade):</strong> Tourism, financial services, shipping, insurance</li>
                    <li><strong>Primary Income:</strong> Wages, investment income (dividends, interest, profits)</li>
                    <li><strong>Secondary Income:</strong> Remittances, foreign aid, pension payments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">2. Capital Account</h4>
                  <p className="text-sm text-muted-foreground">Records capital transfers and acquisition/disposal of non-produced, non-financial assets (patents, copyrights, land purchases by embassies). This is typically a small component.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">3. Financial Account</h4>
                  <p className="text-sm text-muted-foreground mb-2">Records transactions involving financial assets and liabilities:</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>Foreign Direct Investment (FDI):</strong> Long-term investment in foreign businesses</li>
                    <li><strong>Portfolio Investment:</strong> Purchases of foreign stocks and bonds</li>
                    <li><strong>Other Investment:</strong> Bank loans, trade credits, currency deposits</li>
                    <li><strong>Reserve Assets:</strong> Central bank holdings of foreign currency and gold</li>
                  </ul>
                </div>
              </div>
            </NoteCard>

            <AnalysisBlock title="The Balance of Payments Identity">
              <p className="mb-4">
                In theory, the balance of payments must always balance. This is expressed as:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg text-center mb-4">
                <p className="text-lg font-mono font-semibold">
                  Current Account + Capital Account + Financial Account + Errors & Omissions = 0
                </p>
              </div>
              <p>
                If a country has a current account deficit (spending more abroad than earning), it must be financed by a surplus in the financial account (net inflow of foreign capital). The "errors and omissions" or "balancing item" accounts for statistical discrepancies in data collection.
              </p>
            </AnalysisBlock>
          </ContentSection>

          {/* Current Account Deficits and Surpluses */}
          <ContentSection title="Current Account Imbalances">
            <p className="text-foreground/90 leading-relaxed mb-4">
              A <strong>current account deficit</strong> occurs when a country's total imports of goods, services, and transfers exceed its total exports. Conversely, a <strong>surplus</strong> occurs when exports exceed imports.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Causes of Current Account Deficit" variant="warning">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>High domestic demand:</strong> Strong consumer spending pulls in imports</li>
                  <li><strong>Overvalued exchange rate:</strong> Makes exports expensive, imports cheap</li>
                  <li><strong>Loss of competitiveness:</strong> Higher relative inflation or unit labor costs</li>
                  <li><strong>Deindustrialization:</strong> Decline in manufacturing export capacity</li>
                  <li><strong>Strong economic growth:</strong> Rising incomes increase import demand</li>
                  <li><strong>Low savings rate:</strong> Consumption exceeds domestic production</li>
                </ul>
              </NoteCard>

              <NoteCard title="Consequences of Persistent Deficit" variant="danger">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Rising external debt:</strong> Must borrow to finance the deficit</li>
                  <li><strong>Currency depreciation pressure:</strong> Excess supply of domestic currency</li>
                  <li><strong>Loss of foreign reserves:</strong> If central bank intervenes</li>
                  <li><strong>Higher interest rates:</strong> To attract capital inflows</li>
                  <li><strong>Reduced living standards:</strong> Future generations pay for current consumption</li>
                  <li><strong>Vulnerability to capital flight:</strong> If investor confidence falls</li>
                </ul>
              </NoteCard>
            </div>

            <NoteCard title="Policies to Correct a Deficit" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Expenditure-Reducing Policies</h4>
                  <p className="text-sm text-muted-foreground mb-2">Reduce overall demand in the economy:</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Contractionary fiscal policy (higher taxes, lower spending)</li>
                    <li>Tight monetary policy (higher interest rates)</li>
                  </ul>
                  <p className="text-sm text-red-600 mt-2">⚠️ May cause unemployment and recession</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Expenditure-Switching Policies</h4>
                  <p className="text-sm text-muted-foreground mb-2">Redirect spending from imports to domestic goods:</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Currency depreciation/devaluation</li>
                    <li>Tariffs and import quotas</li>
                    <li>Supply-side policies to improve competitiveness</li>
                  </ul>
                  <p className="text-sm text-amber-600 mt-2">⚠️ May invite retaliation or cause inflation</p>
                </div>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Exchange Rates */}
          <ContentSection title="Exchange Rate Systems">
            <p className="text-foreground/90 leading-relaxed mb-4">
              An <strong>exchange rate</strong> is the price of one currency expressed in terms of another. It determines how much foreign currency can be obtained for a unit of domestic currency, affecting the competitiveness of exports and the cost of imports.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Floating Exchange Rate">
                <p className="text-sm text-muted-foreground mb-3">
                  The exchange rate is determined purely by market forces of supply and demand in the foreign exchange market, with no government intervention.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-green-600">Advantages:</strong></p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Automatic adjustment to external shocks</li>
                    <li>No need for foreign currency reserves</li>
                    <li>Monetary policy independence</li>
                    <li>Market-determined efficient allocation</li>
                  </ul>
                  <p className="text-sm mt-2"><strong className="text-red-600">Disadvantages:</strong></p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Exchange rate volatility and uncertainty</li>
                    <li>Can overshoot fundamental values</li>
                    <li>Speculation can cause instability</li>
                  </ul>
                </div>
              </NoteCard>

              <NoteCard title="Fixed Exchange Rate">
                <p className="text-sm text-muted-foreground mb-3">
                  The government or central bank commits to maintaining the exchange rate at a specific target value, intervening in the forex market as needed.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-green-600">Advantages:</strong></p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Stability and certainty for trade/investment</li>
                    <li>Discipline on domestic inflation</li>
                    <li>Prevents competitive devaluations</li>
                    <li>Reduces speculative activity</li>
                  </ul>
                  <p className="text-sm mt-2"><strong className="text-red-600">Disadvantages:</strong></p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Requires large foreign currency reserves</li>
                    <li>Loss of monetary policy autonomy</li>
                    <li>May become misaligned with fundamentals</li>
                    <li>Vulnerable to speculative attacks</li>
                  </ul>
                </div>
              </NoteCard>
            </div>

            {/* Exchange Rate Diagram */}
            <ExchangeRateDiagram />

            <NoteCard title="Managed Float (Dirty Float)" variant="info" className="mt-6">
              <p className="text-sm text-muted-foreground">
                Most countries today operate a <strong>managed float</strong> system—a hybrid where the exchange rate is primarily market-determined but the central bank occasionally intervenes to prevent excessive volatility or correct misalignments. This provides flexibility while avoiding extreme fluctuations.
              </p>
            </NoteCard>
          </ContentSection>

          {/* Exchange Rate Determination */}
          <ContentSection title="Factors Affecting Exchange Rates">
            <p className="text-foreground/90 leading-relaxed mb-4">
              In a floating rate system, the exchange rate is determined by the interaction of supply and demand in the foreign exchange market. Understanding what shifts these curves is crucial for analysis.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Demand for Currency (Appreciation Factors)">
                <p className="text-sm text-muted-foreground mb-2">Demand for a currency increases when:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Higher interest rates:</strong> Attract foreign capital seeking better returns</li>
                  <li><strong>Strong export performance:</strong> Foreign buyers need domestic currency</li>
                  <li><strong>Foreign direct investment:</strong> Inflows require currency purchase</li>
                  <li><strong>Lower inflation:</strong> Currency maintains purchasing power</li>
                  <li><strong>Political stability:</strong> Safe haven for international capital</li>
                  <li><strong>Speculation:</strong> Expectations of future appreciation</li>
                </ul>
              </NoteCard>

              <NoteCard title="Supply of Currency (Depreciation Factors)">
                <p className="text-sm text-muted-foreground mb-2">Supply of a currency increases when:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Lower interest rates:</strong> Capital flows out seeking better returns</li>
                  <li><strong>High import demand:</strong> Need foreign currency to pay for imports</li>
                  <li><strong>Capital outflows:</strong> Residents investing abroad</li>
                  <li><strong>Higher inflation:</strong> Erodes currency value</li>
                  <li><strong>Political instability:</strong> Capital flight</li>
                  <li><strong>Current account deficit:</strong> More payments than receipts</li>
                </ul>
              </NoteCard>
            </div>

            <AnalysisBlock title="The Marshall-Lerner Condition">
              <p className="mb-4">
                The <strong>Marshall-Lerner condition</strong> states that a currency depreciation will only improve the trade balance if the sum of price elasticities of demand for exports and imports exceeds one:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg text-center mb-4">
                <p className="text-lg font-mono font-semibold">
                  |PED<sub>X</sub>| + |PED<sub>M</sub>| &gt; 1
                </p>
              </div>
              <p className="mb-4">
                <strong>Intuition:</strong> When a currency depreciates, exports become cheaper (increasing quantity demanded) and imports become more expensive (decreasing quantity demanded). For the trade balance to improve, the combined volume effects must outweigh the adverse price effect on imports.
              </p>
              <p className="text-amber-600">
                <strong>The J-Curve Effect:</strong> In the short run, demand is often inelastic (contracts already signed, limited substitutes), so depreciation initially worsens the trade balance before improving it—creating a "J" shaped path over time.
              </p>
            </AnalysisBlock>
          </ContentSection>

          {/* Government Intervention */}
          <ContentSection title="Exchange Rate Intervention">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Central banks can intervene in foreign exchange markets to influence the exchange rate, even in floating rate systems.
            </p>

            <NoteCard title="Methods of Intervention" className="mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Direct Intervention</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>To appreciate currency:</strong> Sell foreign reserves, buy domestic currency</li>
                    <li><strong>To depreciate currency:</strong> Buy foreign reserves, sell domestic currency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Indirect Intervention</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>Interest rate changes:</strong> Higher rates attract capital, appreciating currency</li>
                    <li><strong>Capital controls:</strong> Restrict foreign exchange transactions</li>
                    <li><strong>Verbal intervention:</strong> Signaling intentions to influence expectations</li>
                  </ul>
                </div>
              </div>
            </NoteCard>

            <ExamTipBox title="Diagram Technique: Exchange Rate Changes">
              <p className="mb-2">When drawing exchange rate diagrams:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Label axes: Price (exchange rate) on Y-axis, Quantity of currency on X-axis</li>
                <li>Show initial equilibrium at intersection of D and S curves</li>
                <li>Shift the relevant curve (demand shifts right for appreciation factors)</li>
                <li>Clearly show the new equilibrium and the direction of exchange rate change</li>
                <li>Annotate: "Currency appreciates from e₁ to e₂" or "Currency depreciates"</li>
              </ol>
            </ExamTipBox>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Balance of Payments</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>BOP = Current + Capital + Financial Account</li>
                    <li>Current account records trade in goods and services</li>
                    <li>Deficits must be financed by capital inflows</li>
                    <li>Policies: expenditure-reducing vs switching</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Exchange Rates</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Fixed: stability but requires reserves</li>
                    <li>Floating: flexibility but volatility</li>
                    <li>Marshall-Lerner: elasticities must sum &gt; 1</li>
                    <li>J-Curve: short-run worsening before improvement</li>
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

export default BalanceOfPayments;
