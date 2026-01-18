import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import { ExchangeRateDiagram } from '@/components/diagrams/ExchangeRateDiagram';
import { BoPStructureDiagram } from '@/components/diagrams/BoPStructureDiagram';
import { CurrentAccountDeficitDiagram } from '@/components/diagrams/CurrentAccountDeficitDiagram';
import { JCurveMarshallLernerDiagram } from '@/components/diagrams/JCurveMarshallLernerDiagram';
import { PolicyCorrectionDiagram } from '@/components/diagrams/PolicyCorrectionDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const BalanceOfPayments = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-2 font-playfair">
            The Balance of Payments
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            AS Level Macroeconomics • Chapter 4.8 (CIE 9708)
          </p>

          {/* Section 1: Structure of the Balance of Payments */}
          <ContentSection title="1. The Structure of the Balance of Payments" className="mb-2">
            <div className="prose prose-invert max-w-none text-justify">
              <p className="text-foreground/90 leading-relaxed mb-4">
                The <strong className="text-primary">Balance of Payments (BoP)</strong> constitutes a systematic statistical record of all economic transactions conducted between the residents of a country and the rest of the world over a defined period, typically one calendar year. It functions as an accounting framework that captures the international flow of goods, services, income, and financial capital, providing policymakers with an indispensable tool for assessing a nation's external economic position. The BoP is constructed on the principle of double-entry bookkeeping, meaning that every credit entry must be matched by a corresponding debit entry, ensuring that the overall balance theoretically sums to zero—any observed discrepancy being recorded as a statistical "errors and omissions" item.
              </p>

              <p className="text-foreground/90 leading-relaxed mb-4">
                The Current Account represents the most economically significant component, recording the flow of goods, services, income, and unilateral transfers. It comprises four distinct pillars: <strong>Trade in Goods (Visible Trade)</strong>, which captures the export and import of physical merchandise such as manufactured products, raw materials, and agricultural commodities; <strong>Trade in Services (Invisible Trade)</strong>, encompassing intangible transactions including tourism receipts, financial and insurance services, shipping, and intellectual property royalties; <strong>Primary Income</strong>, recording the cross-border flow of factor incomes such as wages earned by nationals working abroad and, more significantly, investment income comprising dividends, interest payments, and repatriated profits from foreign direct investment; and <strong>Secondary Income (Current Transfers)</strong>, which includes unilateral transfers with no quid pro quo, most notably workers' remittances sent home by migrant labour, government aid, and pension payments to expatriates.
              </p>

              <BoPStructureDiagram />

              <p className="text-foreground/90 leading-relaxed mb-4">
                The <strong>Capital Account</strong>, though typically a minor component, records the transfer of ownership of fixed assets and the acquisition or disposal of non-produced, non-financial assets such as patents, copyrights, trademarks, and land purchases by foreign embassies. More substantial is the <strong>Financial Account</strong>, which records transactions involving the acquisition and disposal of financial assets and liabilities, thereby capturing the flows of financial capital that must, by the accounting identity, offset any current account imbalance. The Financial Account distinguishes between <strong>Foreign Direct Investment (FDI)</strong>—long-term investment conferring a lasting managerial interest in foreign enterprises; <strong>Portfolio Investment</strong>—purchases of foreign equities, bonds, and other securities that do not confer control; <strong>Other Investment</strong>—comprising bank loans, trade credits, and currency deposits; and <strong>Reserve Assets</strong>—the Central Bank's holdings of foreign currency reserves and gold, which fluctuate as the monetary authority intervenes to manage the exchange rate.
              </p>

              <AnalysisBlock title="The Balance of Payments Identity (AO3)">
                <p className="mb-3">
                  The fundamental accounting identity governing the BoP dictates that the sum of all accounts must equal zero, expressed formally as:
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg text-center mb-4 border border-cyan-500/30">
                  <BlockMath math="\text{Current Account} + \text{Capital Account} + \text{Financial Account} + \text{Errors \& Omissions} = 0" />
                </div>
                <p className="text-foreground/80">
                  This identity carries profound implications: a country experiencing a Current Account deficit—spending more on foreign goods, services, and income payments than it earns—must necessarily finance this shortfall through a Financial Account surplus, representing a net inflow of foreign capital. Put differently, a deficit nation is a net borrower from the rest of the world, accumulating external liabilities that will require future servicing through primary income outflows. The identity illuminates that international borrowing is merely the mirror image of a trade deficit, a relationship central to understanding sovereign debt dynamics and currency crises.
                </p>
              </AnalysisBlock>
            </div>
          </ContentSection>

          {/* Section 2: Analysis of Current Account Deficit */}
          <ContentSection title="2. Causes and Consequences of a Current Account Deficit" className="mb-2">
            <div className="prose prose-invert max-w-none text-justify">
              <p className="text-foreground/90 leading-relaxed mb-4">
                A <strong className="text-primary">Current Account Deficit</strong> arises when a country's total payments for imports of goods, services, and income exceed its total receipts from exports—mathematically expressed as <InlineMath math="(X - M) < 0" /> where exports (<InlineMath math="X" />) fall short of imports (<InlineMath math="M" />). Understanding the aetiology of such imbalances requires distinguishing between <strong>structural causes</strong>—long-term, supply-side deficiencies embedded in the productive architecture of the economy—and <strong>cyclical causes</strong>—short-term, demand-side fluctuations responsive to macroeconomic conditions and exchange rate dynamics.
              </p>

              <p className="text-foreground/90 leading-relaxed mb-4">
                Structural causes reflect fundamental weaknesses in international competitiveness. Low labour productivity relative to trading partners implies that domestic firms require more factor inputs to produce equivalent output, translating into higher unit labour costs that render exports uncompetitive in world markets. Deindustrialisation—the secular decline of the manufacturing base—erodes the capacity to produce tradeable goods, leaving the economy dependent on service exports that may not compensate for the loss of visible trade capacity. Persistent underinvestment in human capital, research and development, and physical infrastructure compounds these deficiencies, creating a productivity gap that manifests in chronic trade imbalances. By contrast, cyclical causes are responsive to policy intervention: an overvalued exchange rate makes exports expensive to foreign buyers while rendering imports artificially cheap to domestic consumers; a consumer boom driven by credit expansion or rising asset prices increases import demand via the marginal propensity to import (<InlineMath math="MPM" />); and higher domestic inflation relative to trading partners erodes price competitiveness, triggering a substitution from domestic to foreign goods.
              </p>

              <CurrentAccountDeficitDiagram />

              <AnalysisBlock title="Chain of Macroeconomic Consequences (AO3)">
                <p className="mb-3">
                  A persistent Current Account deficit initiates a self-reinforcing cycle of external vulnerability. The chain of reasoning proceeds as follows:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">1.</span>
                    <p className="text-foreground/80">
                      <strong>Exchange Rate Pressure:</strong> Excess supply of domestic currency in foreign exchange markets (as residents sell domestic currency to purchase imports) exerts downward pressure on the exchange rate, risking disorderly depreciation.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">2.</span>
                    <p className="text-foreground/80">
                      <strong>Financial Account Financing:</strong> The deficit must be offset by a Financial Account surplus—net capital inflows through FDI, portfolio investment, or external borrowing—implying an accumulation of external liabilities.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">3.</span>
                    <p className="text-foreground/80">
                      <strong>Rising External Debt:</strong> Borrowing from abroad to finance current consumption creates a stock of external debt that requires future servicing through interest payments and principal repayments.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">4.</span>
                    <p className="text-foreground/80">
                      <strong>Primary Income Deterioration:</strong> Debt servicing manifests as an outflow of primary income (interest and dividends to foreign creditors), further worsening the Current Account—creating a vicious cycle of deficit accumulation.
                    </p>
                  </div>
                </div>
                <p className="text-amber-400/90 italic">
                  This chain demonstrates why economists distinguish between "good" deficits (financing productive investment that enhances future LRAS) and "bad" deficits (financing current consumption that mortgages future prosperity).
                </p>
              </AnalysisBlock>

              <ExamTipBox title="Senior Examiner's Evaluation: Is a Deficit Always Bad? (AO4)" variant="gold">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Evaluation:</strong> The welfare implications of a Current Account deficit are fundamentally contingent on its composition and financing mechanism. A deficit driven by the import of capital goods—machinery, technology, and infrastructure components—represents investment that augments the economy's future productive capacity, shifting the Long-Run Aggregate Supply (LRAS) curve rightward and generating export revenues to service the initial borrowing. Conversely, a deficit financing current consumption—imported consumer durables and discretionary goods—represents a transfer of purchasing power from future generations without corresponding productivity gains. Similarly, the source of financing matters: FDI brings technology transfer, managerial expertise, and stable long-term commitment, whereas "hot money" portfolio flows are volatile, subject to sudden reversals that precipitate currency crises. <strong>Conclusion:</strong> "Ultimately, the sustainability of a deficit hinges on whether the borrowed capital is deployed to enhance productive potential, and whether the financing is stable enough to avoid the liquidity crises that have historically devastated emerging market economies."
                </p>
              </ExamTipBox>
            </div>
          </ContentSection>

          {/* Section 3: Correcting a BoP Imbalance */}
          <ContentSection title="3. Correcting a Balance of Payments Deficit" className="mb-2">
            <div className="prose prose-invert max-w-none text-justify">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Policy instruments for correcting a Current Account deficit are conventionally classified into two categories, distinguished by their mechanism of action: <strong>Expenditure-Switching Policies</strong>, which seek to redirect demand from foreign to domestically produced goods without reducing aggregate spending, and <strong>Expenditure-Reducing Policies</strong>, which seek to lower the overall level of aggregate demand, thereby reducing import spending as a consequence of diminished national income. The choice between these approaches—and increasingly, their optimal combination—involves complex trade-offs between external balance and internal macroeconomic objectives.
              </p>

              <PolicyCorrectionDiagram />

              <p className="text-foreground/90 leading-relaxed mb-4">
                <strong>Expenditure-switching mechanisms</strong> operate by altering relative prices to favour domestic production. Currency depreciation or devaluation makes exports cheaper in foreign currency terms (enhancing external demand) while making imports more expensive in domestic currency terms (dampening import demand), thereby improving the trade balance provided certain elasticity conditions are satisfied. Tariffs and import quotas achieve a similar effect through direct administrative restriction, though these invite retaliatory protectionism and violate WTO obligations for member states. Supply-side policies—investment in education, infrastructure, and R&D—address the root causes of structural uncompetitiveness, though their effects materialise only over the long run. <strong>Expenditure-reducing mechanisms</strong>, by contrast, operate through demand contraction: higher taxes reduce disposable income and consumption; reduced government spending directly lowers aggregate demand; higher interest rates increase the cost of borrowing, depressing both consumption and investment. As national income (<InlineMath math="Y" />) falls, so too does import demand via the marginal propensity to import relationship: <InlineMath math="\Delta M = MPM \times \Delta Y" />.
              </p>

              <AnalysisBlock title="The Marshall-Lerner Condition: When Does Depreciation Work? (AO3)">
                <p className="mb-3">
                  The effectiveness of currency depreciation as an expenditure-switching tool is governed by the <strong className="text-cyan-400">Marshall-Lerner Condition</strong>, which states that a depreciation will improve the Current Account balance only if the sum of the absolute values of the price elasticities of demand for exports and imports exceeds unity:
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg text-center mb-4 border border-cyan-500/30">
                  <BlockMath math="|PED_X| + |PED_M| > 1" />
                </div>
                <p className="text-foreground/80 mb-3">
                  <strong>The intuition:</strong> When a currency depreciates, exports become cheaper in foreign currency terms, increasing the quantity demanded; simultaneously, imports become more expensive in domestic currency terms, reducing the quantity demanded. For the trade balance (measured in domestic currency) to improve, the combined <em>volume effects</em> of increased exports and decreased imports must outweigh the adverse <em>price effect</em> of paying more per unit of imports. If demand is inelastic (the condition is not satisfied), the higher import prices are not offset by sufficient volume reductions, and the deficit worsens despite depreciation.
                </p>
                <p className="text-foreground/80">
                  Empirical estimates for developed economies suggest that the sum of elasticities lies in the range 1.5 to 2.0 in the long run, implying that the Marshall-Lerner condition is typically satisfied—though not in the short run, which gives rise to the J-Curve phenomenon.
                </p>
              </AnalysisBlock>
            </div>
          </ContentSection>

          {/* Section 4: The J-Curve Effect */}
          <ContentSection title="4. The J-Curve Effect: Short-Run vs Long-Run Adjustment" className="mb-2">
            <div className="prose prose-invert max-w-none text-justify">
              <p className="text-foreground/90 leading-relaxed mb-4">
                The <strong className="text-primary">J-Curve Effect</strong> describes the empirical phenomenon whereby a currency depreciation initially <em>worsens</em> the Current Account balance before eventually generating the improvement predicted by the Marshall-Lerner condition. This temporal pattern—graphically resembling the letter "J" when the trade balance is plotted against time—arises from the differential adjustment speeds of prices and quantities in international trade.
              </p>

              <JCurveMarshallLernerDiagram />

              {/* Zero-Gap Logic Chain: J-Curve */}
              <div className="mt-0 p-4 bg-muted/20 border-l-2 border-cambridge-cyan rounded-r-lg">
                <h4 className="font-serif font-semibold text-cambridge-cyan text-sm mb-2">Zero-Gap Logic Chain: The J-Curve Effect (A2 Standard)</h4>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                  <strong className="text-foreground">Variable Change:</strong> Currency depreciates (↓ER) → 
                  <strong className="text-foreground"> Short-Run Impact (Inelastic Period):</strong> Export and import volumes fixed by existing contracts; quantity response minimal → Higher import prices (in domestic currency) on unchanged volume → Trade balance worsens (value effect {'>'} volume effect) → 
                  <strong className="text-foreground"> Medium-Term Adjustment:</strong> Contracts expire; consumers and firms seek substitutes; new suppliers identified (6-18 months) → PED rises as search costs diminish → 
                  <strong className="text-foreground"> Long-Run Equilibrium:</strong> <InlineMath math="|PED_X| + |PED_M| > 1" /> (Marshall-Lerner satisfied) → Volume effect dominates → Export volumes rise, import volumes fall → Trade balance improves beyond original level → <strong>J-Curve complete</strong>.
                </p>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-4 mt-4">
                In the <strong>short run</strong>, the price elasticity of demand for both exports and imports is characteristically low—demand is inelastic. This inelasticity stems from several sources: existing trade contracts, often denominated in foreign currency and extending months into the future, fix quantities regardless of price changes; information lags delay consumer and producer awareness of relative price shifts; search costs impede the identification of domestic substitutes for previously imported goods; and supply-side constraints limit the ability of domestic producers to rapidly scale up output to meet increased export demand. Consequently, immediately following depreciation, the economy continues to export approximately the same quantities (now at lower foreign currency prices) while importing approximately the same quantities (now at higher domestic currency prices). The result is a deterioration in the trade balance—the trough of the J-Curve—as the value effect of more expensive imports dominates the negligible volume adjustment.
              </p>

              <p className="text-foreground/90 leading-relaxed mb-4">
                In the <strong>long run</strong>, however, demand becomes progressively more elastic as economic agents complete their adjustment. New trade contracts are negotiated at the revised exchange rate; consumers substitute away from expensive imports toward domestic alternatives; domestic firms expand capacity to service increased export orders; and producers source inputs from domestic suppliers rather than paying inflated import costs. As <InlineMath math="|PED_X| + |PED_M|" /> rises above unity, the volume effects dominate, and the trade balance improves—the upward slope of the J. Empirical studies suggest that the adjustment period ranges from six months to two years, depending on the flexibility of product and labour markets, the degree of import penetration, and the availability of domestic substitutes.
              </p>

              <ExamTipBox title="Senior Examiner's Conclusion: Limitations of Depreciation (AO4)" variant="gold">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Evaluation:</strong> While the Marshall-Lerner condition assures ultimate effectiveness, depreciation as a policy instrument carries significant limitations. First, the J-Curve imposes short-run costs that may be politically intolerable, particularly for governments facing imminent elections or populist pressures. Second, depreciation generates <strong>imported inflation</strong>: higher import prices feed through to domestic costs, eroding the competitive advantage and potentially triggering a wage-price spiral if workers demand compensation. Third, competitive devaluations invite retaliation—trading partners may respond with their own depreciation, nullifying the initiator's advantage and potentially igniting a "currency war" that destabilises global trade. Fourth, depreciation is ineffective when the deficit is structural: if low productivity is the root cause, no amount of exchange rate adjustment will restore competitiveness without accompanying supply-side reforms. <strong>Conclusion:</strong> "In conclusion, depreciation represents a palliative rather than a cure for external imbalances; it buys time for structural adjustment but cannot substitute for the fundamental enhancement of productive capacity that sustainable trade balance ultimately requires."
                </p>
              </ExamTipBox>
            </div>
          </ContentSection>

          {/* Section 5: Exchange Rates Overview (condensed from original) */}
          <ContentSection title="5. Exchange Rate Systems and the Balance of Payments" className="mb-2">
            <div className="prose prose-invert max-w-none text-justify">
              <p className="text-foreground/90 leading-relaxed mb-4">
                The <strong className="text-primary">exchange rate</strong>—the price of one currency expressed in terms of another—serves as the critical transmission mechanism linking domestic and external sectors. Under a <strong>floating exchange rate</strong> regime, market forces of supply and demand determine the rate without government intervention; demand for the domestic currency arises from export revenues and capital inflows, while supply derives from import payments and capital outflows. This system offers automatic adjustment: a Current Account deficit generates excess supply of domestic currency, triggering depreciation that improves competitiveness—a self-correcting mechanism. However, floating rates exhibit volatility that creates uncertainty for international trade and may overshoot fundamental values due to speculative activity.
              </p>

              <ExchangeRateDiagram />

              <p className="text-foreground/90 leading-relaxed mb-4">
                Under a <strong>fixed exchange rate</strong> regime, the central bank commits to maintaining the rate at a target parity through active intervention—selling foreign reserves to support the currency (appreciating pressure) or purchasing foreign currency with newly created domestic money (depreciating pressure). Fixed rates provide stability and certainty for international trade and impose anti-inflationary discipline by anchoring expectations. However, they require substantial foreign exchange reserves, surrender monetary policy autonomy (interest rates must be set to defend the peg rather than target domestic objectives), and create vulnerability to speculative attacks when markets perceive the parity as unsustainable. Most contemporary economies operate a <strong>managed float</strong>—a hybrid system where rates are primarily market-determined but central banks intervene to smooth excessive volatility or correct misalignments.
              </p>

              <AnalysisBlock title="The BoP-Exchange Rate Nexus (AO3)">
                <p className="text-foreground/80 mb-3">
                  The relationship between the Balance of Payments and the exchange rate is bidirectional and fundamental. Under floating rates, the BoP determines the exchange rate: a Current Account deficit implies net demand for foreign currency (to pay for imports), depressing the domestic currency's value; conversely, a surplus generates net demand for domestic currency, causing appreciation. Under fixed rates, the exchange rate determines the BoP response: an overvalued peg—where the fixed rate exceeds the market-clearing level—generates a deficit as exports are uncompetitively expensive; the central bank must sell reserves to defend the peg, depleting its capacity for future intervention until either the peg is adjusted (devaluation) or reserves are exhausted (currency crisis).
                </p>
                <p className="text-foreground/80">
                  This nexus explains why exchange rate policy is central to external balance management, and why "twin deficits" (fiscal and current account) and "sudden stops" (capital flight) dominate discussions of international macroeconomic crises.
                </p>
              </AnalysisBlock>
            </div>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary: Key Analytical Relationships">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3 font-playfair">Structure & Identity</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• <strong>BoP = CA + Capital + Financial + E&O = 0</strong></li>
                    <li>• CA deficit requires Financial Account surplus</li>
                    <li>• Deficit = net borrowing from rest of world</li>
                    <li>• Structural vs cyclical causes require different remedies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-3 font-playfair">Policy Correction</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• <strong>Switching:</strong> Depreciation, tariffs, supply-side</li>
                    <li>• <strong>Reducing:</strong> Fiscal/monetary contraction</li>
                    <li>• Marshall-Lerner: <InlineMath math="|PED_X| + |PED_M| > 1" /></li>
                    <li>• J-Curve: Short-run worsening before improvement</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-foreground/70 italic">
                  <strong className="text-cyan-400">Examiner's Final Evaluation:</strong> "The Balance of Payments is not merely an accounting statement but a window into a nation's structural competitiveness, investment attractiveness, and long-run sustainability. Candidates scoring top marks will demonstrate that deficits and surpluses carry welfare implications only in context—that a deficit financing productive investment may be preferable to a surplus reflecting anaemic domestic demand, and that the path to external balance must navigate the treacherous straits between policy conflict, time lags, and the ever-present risk of imported inflation."
                </p>
              </div>
              
              {/* Senior Examiner's Comprehensive Evaluation */}
              <div className="mt-4 p-4 bg-slate-800/50 border border-amber-500/30 rounded-lg">
                <h4 className="font-serif font-semibold text-amber-400 text-sm mb-2">Comprehensive AO4 Evaluation: Policy Trade-offs in BoP Correction</h4>
                <p className="text-sm text-foreground/90 leading-relaxed text-justify">
                  <strong>Ultimately, no single policy corrects a Current Account deficit without imposing costs elsewhere.</strong> Expenditure-reducing policies (↓G, ↑T, ↑r) impose <em>recessionary costs</em>—higher unemployment, lower growth—sacrificing internal balance for external balance. Expenditure-switching via depreciation risks <em>imported inflation</em> and retaliation. Supply-side improvements require <em>long time horizons</em> (5-10 years for education/infrastructure effects). The optimal policy mix therefore <em>depends on</em>: (1) whether the deficit is structural (requires supply-side) or cyclical (may self-correct); (2) the economy's position in the business cycle (contractionary policies during recession are counterproductive); (3) the composition of imports (essential commodities are price-inelastic); (4) the availability of foreign financing (deficits are sustainable while capital inflows continue). The 1997 Asian Financial Crisis and 2010 Eurozone Debt Crisis demonstrate the catastrophic consequences when these dependencies are misjudged.
                </p>
              </div>
            </div>
          </ContentSection>

        </motion.div>
      </div>
    </Layout>
  );
};

export default BalanceOfPayments;
