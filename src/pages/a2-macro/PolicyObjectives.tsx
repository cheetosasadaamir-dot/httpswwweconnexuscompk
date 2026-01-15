import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import LafferCurveDiagram from '@/components/diagrams/LafferCurveDiagram';
import FiscalPolicyADDiagram from '@/components/diagrams/FiscalPolicyADDiagram';
import SupplySidePolicyDiagram from '@/components/diagrams/SupplySidePolicyDiagram';
import LiquidityPreferenceDiagram from '@/components/diagrams/LiquidityPreferenceDiagram';

const PolicyObjectives = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Govt. Macroeconomic Intervention
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A2 Level Macroeconomics • Chapter 5
          </p>

          {/* Topic 1: Government Macroeconomic Objectives */}
          <ContentSection title="Topic 1: Government Macroeconomic Objectives">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Definition:</strong> Government macroeconomic objectives are objectives that the government wants to achieve through its policies. These objectives guide fiscal, monetary, and supply-side interventions to promote economic stability and growth.
            </p>

            <NoteCard title="The 8 Macroeconomic Objectives" className="mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2 font-semibold text-primary">Objective</th>
                      <th className="text-left p-2 font-semibold text-primary">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 font-medium">1. Redistribution of Income</td>
                      <td className="p-2 text-muted-foreground">The government aims to reduce the gap between high and low-income groups by imposing taxes. This can be done using a progressive tax system in which rich pay a higher percentage on their income as compared to the poor.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">2. Control Inflation (Price Stability)</td>
                      <td className="p-2 text-muted-foreground">Inflation is referred to as the general persistent rise in general price level. The government plans to keep prices stable by keeping a check on inflation. Since high rates of inflation reduce international competitiveness and can cause a loss of trust in investors. Inflation can be either demand-pull or cost-push.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">3. Full Employment (or Low Unemployment)</td>
                      <td className="p-2 text-muted-foreground">Unemployment refers to those who are able and willing to work but do not have work. The government aims to reduce unemployment.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">4. Economic Growth</td>
                      <td className="p-2 text-muted-foreground">Economic growth is regarded as the increase in a country's GDP (Gross Domestic Product). Economic growth increases standard of living and can be achieved by increasing factors of production or by increasing their efficiency.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">5. Balance of Payment Stability</td>
                      <td className="p-2 text-muted-foreground">The BOP is the record of financial transactions with other nations. If the outflows are greater than the inflows the BOP is in a deficit. If the inflows are greater than the outflows BOP is in a surplus. Deficit drains the money from a country whereas surplus can cause inflation in the long run hence the governments try to keep an equilibrium.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">6. Environmental Considerations</td>
                      <td className="p-2 text-muted-foreground">Government wants sustainable growth and development which means that today's growth does not eliminate the consumption possibilities of future generations and this consideration may act as a constraint of the rate of economic growth.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">7. Correcting Market Failure</td>
                      <td className="p-2 text-muted-foreground">These objectives that exist at the microeconomic level also affect the rate of economic growth. Example: Controlling monopoly power might restrict the level of growth because of lower R&D spending in the economy.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">8. Productivity</td>
                      <td className="p-2 text-muted-foreground">Governments also want to improve the level of efficiency with which factors of production are being utilized in the economy. This is important to check an economy's performance relative to that of other countries.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Interrelated Macroeconomic Problems */}
          <ContentSection title="Interrelated Macroeconomic Problems (Tradeoffs)">
            <p className="text-foreground/90 leading-relaxed mb-4">
              It is not possible to achieve all the objectives simultaneously. Hence the government has to face tradeoffs. There are <strong>SIX main tradeoffs</strong> that the government faces:
            </p>

            <div className="space-y-4 mb-6">
              <NoteCard title="1. Unemployment vs. Inflation" type="concept">
                <p className="text-sm text-muted-foreground">
                  There is an inverse relationship between level of unemployment and inflation. This is because when unemployment rises individuals have less money at their disposal and hence demand less goods. Low demand leads to low inflation. On the other hand, when unemployment falls, more people have money at their disposal which increase the demand for goods pushing the prices up. This concept is explained by the <strong>Phillips curve</strong>.
                </p>
                <p className="text-sm text-primary mt-2">
                  <strong>Definition — Stagflation:</strong> This occurs when inflation and high unemployment both occur together. This usually happens in the long-run.
                </p>
              </NoteCard>

              <NoteCard title="2. Economic Growth vs. Current Account" type="concept">
                <p className="text-sm text-muted-foreground">
                  An increase in economic growth resulting in higher real incomes could lead to an increase in imports of goods and services. This results in "stop-go" cycle of macroeconomic policy. As every time the growth started to accelerate the current account went into deficit and policy then had to be adjusted to slow down the growth rate to deal with the deficit.
                </p>
              </NoteCard>

              <NoteCard title="3. Inflation vs. Balance of Payment" type="concept">
                <p className="text-sm text-muted-foreground">
                  If the domestic economy enters a period of inflation that is high relative to its trading partners as the price increase is more in the local economy, leading to expensive exports and reducing international competitiveness, making it more difficult to export and increase in cheaper imports. This not only puts pressure on the current account but also the exchange rate will depreciate.
                </p>
              </NoteCard>

              <NoteCard title="4. Economic Growth vs. Sustainability" type="concept">
                <p className="text-sm text-muted-foreground">
                  Economic growth results in environmental degradation as the process of industrialization requires energy suppliers to keep pace with demand. These usually come from natural resources like oil and coal which add to the pollution levels in the country. In order to make it sustainable in the short-run the country should slow down economic growth and invest in renewable and cleaner energy resources. But only developed countries can do that.
                </p>
              </NoteCard>

              <NoteCard title="5. Economic Growth vs. Low Inflation" type="concept">
                <p className="text-sm text-muted-foreground">
                  If the economy grows due to excessive demand this will increase the prices. If the govt. deflates the economy using increasing taxes or interest rate to control inflation, it will limit economic growth.
                </p>
              </NoteCard>

              <NoteCard title="6. Economic Growth vs. Redistribution of Income and Wealth" type="concept">
                <p className="text-sm text-muted-foreground">
                  As the economy grows the gap between the rich and the poor increases. This is because rich invest their money and are able to multiply their money at a faster rate as compared to the poor.
                </p>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Topic 2: Fiscal Policy */}
          <ContentSection title="Topic 2: Fiscal Policy">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Definition:</strong> Fiscal Policy is a government policy concerned about taxes and government spending to influence economic activity and macroeconomic objectives such as employment, economic growth, inflation etc. Government maintains a budget to provide services like education, health care etc. This is done through borrowing, privatization, and taxes.
            </p>

            <NoteCard title="Government Budget" className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Govt. Budget = Expected Revenue – Expected Govt. Spending</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Balanced Budget:</strong> Revenue = Spending</li>
                <li><strong>Budget Deficit:</strong> Revenue &lt; Spending</li>
                <li><strong>Budget Surplus:</strong> Revenue &gt; Spending</li>
              </ul>
            </NoteCard>

            <NoteCard title="1. Automatic Stabilizers" type="concept" className="mb-4">
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> Automatic stabilizers are factors that automatically, without any action by government authorities, work toward stabilizing the economy by reducing the short-term fluctuations of the business cycle. Since they are automatic, they represent 'non-discretionary' policy. There are two important stabilizers: <strong>progressive income taxes</strong> and <strong>unemployment benefits</strong>.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Example:</strong> If the economy enters a period of recession, government expenditure will rise because of increased payments of unemployment and other social security benefits and revenues will fall because fewer people are paying income tax. This helps to offset recession.
              </p>
            </NoteCard>

            <NoteCard title="2. Discretionary Fiscal Policies" type="concept" className="mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> Active and purposeful government intervention in the economy to influence aggregate demand is termed discretionary policy, meaning that the policy is at the discretion (or the choice and will) of the government. There are TWO types of fiscal policies:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><strong>Expansionary Fiscal Policy</strong> — ↑ Government Spending OR ↓ Taxes</li>
                <li><strong>Contractionary Fiscal Policy</strong> — ↓ Government Spending OR ↑ Taxes</li>
              </ul>
            </NoteCard>

            {/* Fiscal Policy AD Diagram */}
            <div className="mb-6">
              <FiscalPolicyADDiagram />
            </div>

            {/* Laffer Curve */}
            <div className="mb-6">
              <LafferCurveDiagram />
            </div>

            <NoteCard title="Advantages and Disadvantages of Fiscal Policy" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Advantages</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Pulling an economy out of a deep recession</li>
                    <li>Dealing with rapid and escalating inflation</li>
                    <li>Ability to target sectors of the economy</li>
                    <li>Direct impact of government spending on AD</li>
                    <li>Ability to affect potential output</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Disadvantages</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Problems of time lags</li>
                    <li>Political constraints</li>
                    <li>Crowding Out</li>
                    <li>Inability to deal with supply-side causes</li>
                    <li>Tax cuts may not be effective in recession</li>
                    <li>Inability to 'fine tune' the economy</li>
                  </ol>
                </div>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Topic 3: Monetary Policy */}
          <ContentSection title="Topic 3: Monetary Policy">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Definition — Monetary Transmission Mechanism:</strong> This shows how changes in money supply or demand can influence the level of national income.
            </p>

            <NoteCard title="Monetary Policy" type="concept" className="mb-4">
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> This is government policy that revolves around controlling money supply in the economy to achieve government objectives like inflation, unemployment, economic growth and balance the balance of payment. There are TWO types:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                <li><strong>Expansionary Monetary Policy:</strong> These policies are made to remove the deflationary gaps — in other words increase prices, create employment, increase GDP and to accelerate economic activity. In this policy the government tries to increase the Ms and reduce interest rates to boost economic growth.</li>
                <li><strong>Contractionary Monetary Policy:</strong> These policies are made to remove the inflationary gaps — in other words reduce prices to restore full employment. In this policy the government tries to decrease the Ms and increase interest rates to reduce inflation and improve BOP deficit.</li>
              </ul>
            </NoteCard>

            <NoteCard title="Liquidity Trap" type="exam-tip" className="mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Definition:</strong> This occurs when an increase in money supply does not affect the interest rate and so does not affect investment or AD. Keynes thought it could occur when the rate of interest is very low and the price of bonds is very high. In this case, he thought that speculators would expect the price of bonds to fall in the future, so if the money supply was to be increased they would hold all the extra money. They would not buy bonds for fear of making a capital loss and because the return from holding such securities would be low.
              </p>
            </NoteCard>

            <div className="mb-6">
              <LiquidityPreferenceDiagram />
            </div>

            <NoteCard title="Limitations of Monetary Policy" className="mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2 font-semibold text-primary">Limitation</th>
                      <th className="text-left p-2 font-semibold text-primary">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 font-medium">1. Liquidity Trap</td>
                      <td className="p-2 text-muted-foreground">Economy might be trapped in a liquidity trap where increase in money supply will lead to unchanged interest rate and in return no change in the AD and price level.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">2. Time Lags</td>
                      <td className="p-2 text-muted-foreground">Although monetary policy is quicker than fiscal policy but it takes time to impact. Supply does not affect the real economy instantaneously. It might be slow in the first quarters and with time create more impact.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">3. Uncertainty</td>
                      <td className="p-2 text-muted-foreground">Policy makers are not aware of sudden unseen events. Example: Oil prices, political instability etc.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">4. Reliability of Data</td>
                      <td className="p-2 text-muted-foreground">Economic data is imperfect. This problem is even worse in LEDCs. Hence the policy might be more effective in MEDCs however still even with that policy makers might not be able to make an appropriate decision.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">5. Interest Elasticity of Investment</td>
                      <td className="p-2 text-muted-foreground"><strong>Monetarists</strong> view investment is interest elastic — monetary policy will have a strong multiplier effect. <strong>Keynesians</strong> view that investment is interest inelastic — monetary policy will have a weaker multiplier effect.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Topic 4: Exchange Rate Policy */}
          <ContentSection title="Topic 4: Exchange Rate Policy">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Definition:</strong> Exchange Rate Policies are part of the monetary policy of a country because the exchange rate, interest rate and money supply are all intimately related. The main purpose is to build international competitiveness and clear balance of payment stability.
            </p>

            <p className="text-muted-foreground mb-6">
              If interest rates are high relative to the world, they will attract investment from abroad, increasing the demand for domestic currency and hence leading to an appreciation in the exchange rate which can lead to an increase in imports and less exports and vice versa.
            </p>

            <NoteCard title="Exchange Rate Systems" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Fixed Exchange Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    In a fixed exchange rate system since the govt. is focused on maintaining the exchange rate at a particular level. In this situation monetary policy is powerless to influence the real economy and it must be devoted to maintaining exchange rate.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Floating Exchange Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    In a floating exchange rate system, monetary policy is freed from this role, but even so it must be used in a way that it does not become unsustainable in the long run.
                  </p>
                </div>
              </div>
            </NoteCard>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Situation 1: Overvalued Currency">
                <p className="text-sm text-muted-foreground">
                  Some countries tend to overvalue their currency in order to encourage domestic production. This is because the local firms can easily import raw material from abroad and this would reduce the chances of imported inflation. This helps correct <strong>surpluses</strong> in the balance of payments.
                </p>
              </NoteCard>
              <NoteCard title="Situation 2: Undervalued Currency">
                <p className="text-sm text-muted-foreground">
                  Some countries undervalue their currency in order to stimulate exports. This is because a weaker currency makes exports cheaper and imports expensive. This helps the economy correct its <strong>deficits</strong> in the balance of payments.
                </p>
              </NoteCard>
            </div>

            <ExamTipBox title="Important Note">
              <p>Exchange rate is only one factor in determining international competitiveness. Several other factors must be considered with it like quality of goods, consumers' incomes, preferences etc.</p>
            </ExamTipBox>
          </ContentSection>

          {/* Topic 5: Supply-Side Policies */}
          <ContentSection title="Topic 5: Supply-Side Policies">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Definition:</strong> These are long-term strategies that aim to increase or improve the efficiency of factors of production to ensure long term growth in the economy. These policies help to control inflation, increase employment, improve the balance of payment etc. Since they expand the productive capacity they tend to shift the supply curve to the right.
            </p>

            <div className="mb-6">
              <SupplySidePolicyDiagram />
            </div>

            <div className="space-y-4 mb-6">
              <NoteCard title="1. Privatization" type="concept">
                <p className="text-sm text-muted-foreground">
                  <strong>Definition:</strong> It is a government policy in which state-owned businesses are sold to the private sector. The objective is that the firms will be more efficient and can generate more profits since they will be profit driven.
                </p>
              </NoteCard>

              <NoteCard title="2. Deregulation" type="concept">
                <p className="text-sm text-muted-foreground">
                  <strong>Definition:</strong> This policy aims to remove barriers to entry to encourage competition. These can include minimum wage rates, max price etc. This makes the market more competitive and more productive.
                </p>
              </NoteCard>

              <NoteCard title="3. Capital Investment" type="concept">
                <p className="text-sm text-muted-foreground">
                  <strong>Definition:</strong> This policy aims to spend funds on research and development and new technologies. This helps in both product and process innovation which can give the country a competitive advantage in the international market.
                </p>
              </NoteCard>

              <NoteCard title="4. Training and Education Programs" type="concept">
                <p className="text-sm text-muted-foreground">
                  <strong>Definition:</strong> This policy aims to increase the quantity and quality of labor in the economy by launching training and education programs. In order to encourage more workers, the government also lowers taxes to encourage individuals to join the labor force.
                </p>
              </NoteCard>

              <NoteCard title="5. Enterprise Zones" type="concept">
                <p className="text-sm text-muted-foreground">
                  <strong>Definition:</strong> These are areas where there is high unemployment and the government gives incentives like tax holidays, interest free loans etc. to businesses to locate there. The objective is to boost economic activity in that area and increase the standard of living of individuals.
                </p>
              </NoteCard>
            </div>

            <AnalysisBlock title="Conclusion">
              <p>
                Supply side policies take time to reap benefits however they are highly effective when it comes to achieving government objectives of economic growth, lower inflation, lower unemployment and improved balance of payments.
              </p>
            </AnalysisBlock>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Policy Types</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Fiscal:</strong> Taxes and government spending</li>
                    <li><strong>Monetary:</strong> Money supply and interest rates</li>
                    <li><strong>Exchange Rate:</strong> Currency valuation</li>
                    <li><strong>Supply-Side:</strong> Productive capacity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Concepts</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>6 policy tradeoffs exist</li>
                    <li>Laffer Curve shows optimal tax rate T*</li>
                    <li>Liquidity Trap limits monetary policy</li>
                    <li>Supply-side policies shift AS rightward</li>
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

export default PolicyObjectives;
