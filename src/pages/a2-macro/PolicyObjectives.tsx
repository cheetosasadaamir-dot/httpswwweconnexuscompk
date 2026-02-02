import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import LafferCurveDiagram from '@/components/diagrams/LafferCurveDiagram';
import FiscalPolicyADDiagram from '@/components/diagrams/FiscalPolicyADDiagram';
import SupplySidePolicyDiagram from '@/components/diagrams/SupplySidePolicyDiagram';
import LiquidityPreferenceDiagram from '@/components/diagrams/LiquidityPreferenceDiagram';

const policyObjectivesTakeaways = [
  "8 Macroeconomic Objectives: Price stability, Full employment, Economic growth, BoP stability, Redistribution, Environment, Productivity, Market failure correction",
  "Phillips Curve Trade-off: ↓Unemployment ↔ ↑Inflation; Stagflation breaks this relationship (↑U and ↑P together)",
  "Fiscal Policy: ↑G or ↓T → ↑AD (expansionary); Multiplier k = 1/(MPS + MPT + MPM); Time lags of 2+ years",
  "Crowding Out: ↑G financed by borrowing → ↑r → ↓Private Investment — Monetarist critique of fiscal policy",
  "Laffer Curve: tax revenue rises then falls as tax rate increases; optimal rate maximizes revenue",
  "Stop-Go Cycle: growth triggers BoP deficit → contraction → recovery → growth → repeat (policy instability)",
];

const PolicyObjectives = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              A2 Level • Chapter 5
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Govt. Macroeconomic Intervention
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Comprehensive analysis of fiscal, monetary, and supply-side policies with chain-of-reasoning evaluation.
          </p>

          {/* Key Takeaways Summary */}
          <KeyTakeaways takeaways={policyObjectivesTakeaways} />

          {/* Topic 1: Government Macroeconomic Objectives */}
          <ContentSection title="Topic 1: Government Macroeconomic Objectives">
            <p className="text-foreground/90 leading-relaxed text-sm mb-2">
              <strong>Definition:</strong> Government macroeconomic objectives are objectives that the government wants to achieve through its policies. These objectives guide fiscal, monetary, and supply-side interventions to promote economic stability and growth.
            </p>

            <NoteCard title="The 8 Macroeconomic Objectives" className="mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-1.5 font-semibold text-primary">Objective</th>
                      <th className="text-left p-1.5 font-semibold text-primary">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-1.5 font-medium">1. Redistribution of Income</td>
                      <td className="p-1.5 text-muted-foreground">The government aims to reduce the gap between high and low-income groups by imposing taxes. This can be done using a progressive tax system in which rich pay a higher percentage on their income as compared to the poor.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">2. Control Inflation (Price Stability)</td>
                      <td className="p-1.5 text-muted-foreground">Inflation is referred to as the general persistent rise in general price level. The government plans to keep prices stable by keeping a check on inflation. Since high rates of inflation reduce international competitiveness and can cause a loss of trust in investors. Inflation can be either demand-pull or cost-push.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">3. Full Employment (or Low Unemployment)</td>
                      <td className="p-1.5 text-muted-foreground">Unemployment refers to those who are able and willing to work but do not have work. The government aims to reduce unemployment.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">4. Economic Growth</td>
                      <td className="p-1.5 text-muted-foreground">Economic growth is regarded as the increase in a country's GDP (Gross Domestic Product). Economic growth increases standard of living and can be achieved by increasing factors of production or by increasing their efficiency.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">5. Balance of Payment Stability</td>
                      <td className="p-1.5 text-muted-foreground">The BOP is the record of financial transactions with other nations. If the outflows are greater than the inflows the BOP is in a deficit. If the inflows are greater than the outflows BOP is in a surplus. Deficit drains the money from a country whereas surplus can cause inflation in the long run hence the governments try to keep an equilibrium.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">6. Environmental Considerations</td>
                      <td className="p-1.5 text-muted-foreground">Government wants sustainable growth and development which means that today's growth does not eliminate the consumption possibilities of future generations and this consideration may act as a constraint of the rate of economic growth.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">7. Correcting Market Failure</td>
                      <td className="p-1.5 text-muted-foreground">These objectives that exist at the microeconomic level also affect the rate of economic growth. Example: Controlling monopoly power might restrict the level of growth because of lower R&D spending in the economy.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 font-medium">8. Productivity</td>
                      <td className="p-1.5 text-muted-foreground">Governments also want to improve the level of efficiency with which factors of production are being utilized in the economy. This is important to check an economy's performance relative to that of other countries.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Interrelated Macroeconomic Problems */}
          <ContentSection title="Interrelated Macroeconomic Problems (Tradeoffs)">
            <p className="text-foreground/90 leading-relaxed text-sm mb-2">
              It is not possible to achieve all the objectives simultaneously. Hence the government has to face tradeoffs. There are <strong>SIX main tradeoffs</strong> that the government faces:
            </p>

            <div className="grid md:grid-cols-2 gap-2 mb-4">
              <NoteCard title="1. Unemployment vs. Inflation" type="concept">
                <p className="text-xs text-muted-foreground">
                  There is an inverse relationship between level of unemployment and inflation. This is because when unemployment rises individuals have less money at their disposal and hence demand less goods. Low demand leads to low inflation. On the other hand, when unemployment falls, more people have money at their disposal which increase the demand for goods pushing the prices up. This concept is explained by the <strong>Phillips curve</strong>.
                </p>
                <p className="text-xs text-primary mt-1">
                  <strong>Definition — Stagflation:</strong> This occurs when inflation and high unemployment both occur together. This usually happens in the long-run.
                </p>
              </NoteCard>

              <NoteCard title="2. Economic Growth vs. Current Account" type="concept">
                <p className="text-xs text-muted-foreground">
                  An increase in economic growth resulting in higher real incomes could lead to an increase in imports of goods and services. This results in "stop-go" cycle of macroeconomic policy. As every time the growth started to accelerate the current account went into deficit and policy then had to be adjusted to slow down the growth rate to deal with the deficit.
                </p>
              </NoteCard>

              <NoteCard title="3. Inflation vs. Balance of Payment" type="concept">
                <p className="text-xs text-muted-foreground">
                  If the domestic economy enters a period of inflation that is high relative to its trading partners as the price increase is more in the local economy, leading to expensive exports and reducing international competitiveness, making it more difficult to export and increase in cheaper imports. This not only puts pressure on the current account but also the exchange rate will depreciate.
                </p>
              </NoteCard>

              <NoteCard title="4. Economic Growth vs. Sustainability" type="concept">
                <p className="text-xs text-muted-foreground">
                  Economic growth results in environmental degradation as the process of industrialization requires energy suppliers to keep pace with demand. These usually come from natural resources like oil and coal which add to the pollution levels in the country. In order to make it sustainable in the short-run the country should slow down economic growth and invest in renewable and cleaner energy resources. But only developed countries can do that.
                </p>
              </NoteCard>

              <NoteCard title="5. Economic Growth vs. Low Inflation" type="concept">
                <p className="text-xs text-muted-foreground">
                  If the economy grows due to excessive demand this will increase the prices. If the govt. deflates the economy using increasing taxes or interest rate to control inflation, it will limit economic growth.
                </p>
              </NoteCard>

              <NoteCard title="6. Economic Growth vs. Redistribution" type="concept">
                <p className="text-xs text-muted-foreground">
                  As the economy grows the gap between the rich and the poor increases. This is because rich invest their money and are able to multiply their money at a faster rate as compared to the poor.
                </p>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Topic 2: Fiscal Policy */}
          <ContentSection title="Topic 2: Fiscal Policy">
            <p className="text-foreground/90 leading-relaxed text-sm mb-2">
              <strong>Definition:</strong> Fiscal Policy is a government policy concerned about taxes and government spending to influence economic activity and macroeconomic objectives such as employment, economic growth, inflation etc. Government maintains a budget to provide services like education, health care etc. This is done through borrowing, privatization, and taxes.
            </p>

            <NoteCard title="Government Budget" className="mb-2">
              <p className="text-xs text-muted-foreground mb-1">
                <strong>Govt. Budget = Expected Revenue – Expected Govt. Spending</strong>
              </p>
              <ul className="list-disc list-inside space-y-0.5 text-xs">
                <li><strong>Balanced Budget:</strong> Revenue = Spending</li>
                <li><strong>Budget Deficit:</strong> Revenue &lt; Spending</li>
                <li><strong>Budget Surplus:</strong> Revenue &gt; Spending</li>
              </ul>
            </NoteCard>

            <div className="grid md:grid-cols-2 gap-2 mb-2">
              <NoteCard title="1. Automatic Stabilizers" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> Automatic stabilizers are factors that automatically, without any action by government authorities, work toward stabilizing the economy by reducing the short-term fluctuations of the business cycle. Since they are automatic, they represent 'non-discretionary' policy. There are two important stabilizers: <strong>progressive income taxes</strong> and <strong>unemployment benefits</strong>.
                </p>
              </NoteCard>

              <NoteCard title="2. Discretionary Fiscal Policies" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> Active and purposeful government intervention in the economy to influence aggregate demand is termed discretionary policy. There are TWO types:
                </p>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs">
                  <li><strong>Expansionary:</strong> ↑G OR ↓T</li>
                  <li><strong>Contractionary:</strong> ↓G OR ↑T</li>
                </ul>
              </NoteCard>
            </div>

            {/* PEEL Structure - Chain of Reasoning for Fiscal Policy */}
            <AnalysisBlock title="Chain of Reasoning (AO3): Expansionary Fiscal Policy Transmission" type="analysis">
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <p className="font-semibold mb-1">PEEL Analysis — Point:</p>
                  <p className="text-muted-foreground">
                    Expansionary fiscal policy increases aggregate demand through either increased government spending (↑G) or reduced taxation (↓T), leading to higher national income via the multiplier effect.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                  <p className="font-semibold text-cambridge-cyan mb-1">Explanation — The Transmission Mechanism:</p>
                  <div className="font-mono text-center py-1">
                    ↑G or ↓T → ↑Yd → ↑C → ↑AD → k × ΔAD → ↑Y & ↑P
                  </div>
                  <p className="text-muted-foreground mt-1">
                    A reduction in income tax $\downarrow T$ increases disposable income $Y_d$, which raises autonomous consumption $C$. This shifts the AD curve rightward. Through the multiplier process (k = 1/MPW), the final increase in national income is greater than the initial injection. For example, if MPC = 0.8 and ΔG = £10bn, then ΔY = £10bn × 5 = £50bn.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-green/10 rounded-lg">
                  <p className="font-semibold text-cambridge-green mb-1">Evidence — Diagrammatic:</p>
                  <p className="text-muted-foreground">
                    On an AD/AS diagram, expansionary fiscal policy shifts AD from AD₁ to AD₂. With spare capacity (Keynesian horizontal AS), output rises from Y₁ to Y₂ with minimal price increase. On the Keynesian Cross, the aggregate expenditure curve shifts upward, intersecting the 45° line at a higher equilibrium income.
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            {/* Fiscal Policy AD Diagram */}
            <div className="mb-3">
              <FiscalPolicyADDiagram />
            </div>

            {/* Laffer Curve */}
            <div className="mb-3">
              <LafferCurveDiagram />
            </div>

            {/* A2 Evaluation Section - Enhanced */}
            <AnalysisBlock title="Critical Evaluation (AO4): Fiscal Policy Limitations & Effectiveness" type="evaluation">
              <div className="space-y-2 text-xs">
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <h5 className="font-semibold text-destructive mb-1">Time Lags</h5>
                    <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                      <li><strong>Recognition Lag:</strong> 3-6 months to identify recession</li>
                      <li><strong>Implementation Lag:</strong> 6-12 months for legislation</li>
                      <li><strong>Response Lag:</strong> 12-18 months for full effect</li>
                    </ul>
                    <p className="mt-1 text-muted-foreground italic">
                      Total lag may exceed 2 years — by then, economy may have self-corrected, making policy pro-cyclical.
                    </p>
                  </div>
                  <div className="p-2 bg-cambridge-orange/10 rounded-lg">
                    <h5 className="font-semibold text-cambridge-orange mb-1">Crowding Out Effect</h5>
                    <p className="text-muted-foreground mb-1">
                      <strong>Mechanism:</strong>
                    </p>
                    <div className="font-mono text-center text-[10px] py-0.5">
                      ↑G → ↑Borrowing → ↑r → ↓Private I
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      If government borrows to finance deficit, this increases demand for loanable funds, raising interest rates. Higher r discourages private investment, partially offsetting the fiscal stimulus.
                    </p>
                  </div>
                  <div className="p-2 bg-cambridge-magenta/10 rounded-lg">
                    <h5 className="font-semibold text-cambridge-magenta mb-1">State of the Economy</h5>
                    <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                      <li><strong>At full capacity:</strong> ↑AD → ↑P only (useless for growth)</li>
                      <li><strong>Recession:</strong> Most effective when spare capacity exists</li>
                      <li><strong>Confidence:</strong> Tax cuts may be saved, not spent</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Stop-Go Cycle</h5>
                    <p className="text-muted-foreground">
                      <strong>Definition:</strong> The conflict between economic growth and current account stability creates a "stop-go" cycle. When growth accelerates, imports rise (MPM × ΔY), causing a BOP deficit. Policy then contracts to correct the deficit, only to later expand again when unemployment rises. This creates instability and uncertainty for businesses.
                    </p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Structural vs Cyclical Deficits</h5>
                    <p className="text-muted-foreground">
                      <strong>Cyclical Deficit:</strong> Caused by the business cycle — recessions reduce tax revenues (↓Y → ↓T) and increase spending (unemployment benefits) automatically. Self-corrects as economy recovers. <strong>Structural Deficit:</strong> Exists even at full employment — reflects permanent imbalance between G and T. Requires deliberate policy action to correct. Critical distinction for assessing fiscal sustainability.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">National Debt Burden</h5>
                    <p className="text-muted-foreground">
                      Persistent budget deficits accumulate into national debt. Interest payments divert resources from productive spending. <strong>Debt-to-GDP ratio</strong> is key metric: sustainable if growth rate {'>'} interest rate. Future generations face higher taxes or reduced services to service debt.
                    </p>
                  </div>
                </div>
                <div className="p-2 bg-primary/5 border border-primary/20 rounded-lg mt-2">
                  <p className="text-muted-foreground">
                    <strong>Examiner Conclusion:</strong> Fiscal policy is most effective during <em>deep recessions with significant spare capacity</em>, where multiplier effects are strongest and crowding out is minimal. It is least effective at or near full employment, where it primarily causes inflation. The Keynesian view supports fiscal activism; the Monetarist view prefers rules-based monetary policy.
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <NoteCard title="Advantages and Disadvantages" className="mb-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold text-primary mb-1 text-xs">Advantages</h4>
                  <ol className="list-decimal list-inside text-xs space-y-0.5">
                    <li>Pulling economy out of deep recession</li>
                    <li>Dealing with rapid/escalating inflation</li>
                    <li>Ability to target sectors</li>
                    <li>Direct impact on AD</li>
                    <li>Ability to affect potential output</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-destructive mb-1 text-xs">Disadvantages</h4>
                  <ol className="list-decimal list-inside text-xs space-y-0.5">
                    <li>Problems of time lags</li>
                    <li>Political constraints</li>
                    <li>Crowding Out effect</li>
                    <li>Cannot address supply-side causes</li>
                    <li>Tax cuts may not work in recession</li>
                  </ol>
                </div>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Topic 3: Monetary Policy */}
          <ContentSection title="Topic 3: Monetary Policy">
            <p className="text-foreground/90 leading-relaxed text-sm mb-2">
              <strong>Definition — Monetary Transmission Mechanism:</strong> This shows how changes in money supply or demand can influence the level of national income.
            </p>

            <NoteCard title="Monetary Policy Types" type="concept" className="mb-3">
              <p className="text-xs text-muted-foreground">
                <strong>Definition:</strong> This is government policy that revolves around controlling money supply in the economy to achieve government objectives like inflation, unemployment, economic growth and balance the balance of payment.
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-xs">
                <li><strong>Expansionary Monetary Policy:</strong> ↑Ms and ↓r to boost growth</li>
                <li><strong>Contractionary Monetary Policy:</strong> ↓Ms and ↑r to reduce inflation</li>
              </ul>
            </NoteCard>

            {/* PEEL Structure - Chain of Reasoning for Monetary Policy */}
            <AnalysisBlock title="Chain of Reasoning (AO3): Monetary Transmission Mechanism" type="analysis">
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <p className="font-semibold mb-1">PEEL Analysis — Point:</p>
                  <p className="text-muted-foreground">
                    Expansionary monetary policy increases aggregate demand by reducing interest rates, which stimulates investment and consumption spending.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                  <p className="font-semibold text-cambridge-cyan mb-1">Explanation — The Transmission Mechanism:</p>
                  <div className="font-mono text-center py-1">
                    ↑Ms → ↓r → ↓Cost of Borrowing & ↓Reward for Saving → ↑C & ↑I → ↑AD → k × ΔAD → ↑Y
                  </div>
                  <p className="text-muted-foreground mt-1">
                    A reduction in interest rates $\downarrow r$ reduces the cost of borrowing for firms (lower MEC threshold) and the reward for saving for households. This leads to an increase in autonomous consumption $C$ and investment $I$, shifting AD rightwards. Through the multiplier effect, this leads to a more than proportionate increase in Real National Income $Y$.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-green/10 rounded-lg">
                  <p className="font-semibold text-cambridge-green mb-1">Evidence — Diagrammatic:</p>
                  <p className="text-muted-foreground">
                    On a Liquidity Preference diagram, ↑Ms shifts the vertical money supply curve rightward, intersecting the downward-sloping liquidity preference curve at a lower equilibrium interest rate. On the MEC curve, the lower r leads to a higher equilibrium level of investment (movement along the MEC curve).
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <NoteCard title="Liquidity Trap" type="exam-tip" className="mb-3">
              <p className="text-xs text-muted-foreground">
                <strong>Definition:</strong> This occurs when an increase in money supply does not affect the interest rate and so does not affect investment or AD. Keynes thought it could occur when the rate of interest is very low and the price of bonds is very high. In this case, speculators would hold all the extra money rather than buy bonds for fear of making a capital loss.
              </p>
            </NoteCard>

            <div className="mb-3">
              <LiquidityPreferenceDiagram />
            </div>

            {/* A2 Evaluation Section - Enhanced */}
            <AnalysisBlock title="Critical Evaluation (AO4): Monetary Policy Limitations & Effectiveness" type="evaluation">
              <div className="space-y-2 text-xs">
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <h5 className="font-semibold text-destructive mb-1">The Liquidity Trap</h5>
                    <p className="text-muted-foreground">
                      <strong>Definition:</strong> When interest rates approach zero, further increases in money supply fail to reduce rates or stimulate spending. Keynes argued this occurs when the price of bonds is so high that speculators hold all extra money rather than buy bonds (fear of capital loss).
                    </p>
                    <div className="font-mono text-center text-[10px] py-1 mt-1">
                      ↑Ms → r unchanged at r(min) → No Δ in I or C → AD unchanged
                    </div>
                    <p className="text-muted-foreground mt-1 italic">
                      Japan 1990s-2010s and post-2008 Western economies experienced liquidity trap conditions.
                    </p>
                  </div>
                  <div className="p-2 bg-cambridge-orange/10 rounded-lg">
                    <h5 className="font-semibold text-cambridge-orange mb-1">Interest Inelasticity of Investment</h5>
                    <p className="text-muted-foreground">
                      <strong>Keynesian Critique:</strong> Even if interest rates fall, investment may not increase if business confidence is low. Firms won't borrow to invest if they don't expect future demand. The interest elasticity of investment depends on:
                    </p>
                    <ul className="list-disc list-inside mt-1 text-muted-foreground">
                      <li>Business expectations and confidence</li>
                      <li>Animal spirits (Keynes)</li>
                      <li>Existing spare capacity in the economy</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-2 mt-2">
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Time Lags</h5>
                    <p className="text-muted-foreground">
                      Although quicker than fiscal policy (no legislative process), monetary policy still takes 6-18 months to fully impact the economy. The effect builds over time as loans are taken out and spent.
                    </p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Asymmetric Effects</h5>
                    <p className="text-muted-foreground">
                      Monetary policy is more effective at reducing inflation (↑r → ↓AD) than stimulating growth. "You can lead a horse to water..." — banks may not lend, firms may not borrow.
                    </p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Exchange Rate Effects</h5>
                    <p className="text-muted-foreground">
                      ↓r may cause capital outflow → depreciation → ↑cost of imports → cost-push inflation. Open economies face trilemma: cannot have free capital flows, fixed exchange rate, AND independent monetary policy.
                    </p>
                  </div>
                </div>
                <div className="p-2 bg-primary/5 border border-primary/20 rounded-lg mt-2">
                  <p className="text-muted-foreground">
                    <strong>Keynesian vs. Monetarist View:</strong> Keynesians argue investment is interest-inelastic, making monetary policy weak. Monetarists argue investment is interest-elastic and prefer monetary policy to fiscal intervention. The truth depends on the state of the economy and business confidence.
                  </p>
                </div>
              </div>
            </AnalysisBlock>
          </ContentSection>

          {/* Topic 4: Exchange Rate Policy */}
          <ContentSection title="Topic 4: Exchange Rate Policy">
            <p className="text-foreground/90 leading-relaxed text-sm mb-2">
              <strong>Definition:</strong> Exchange Rate Policies are part of the monetary policy of a country because the exchange rate, interest rate and money supply are all intimately related. The main purpose is to build international competitiveness and clear balance of payment stability.
            </p>

            <p className="text-muted-foreground text-xs mb-3">
              If interest rates are high relative to the world, they will attract investment from abroad, increasing the demand for domestic currency and hence leading to an appreciation in the exchange rate which can lead to an increase in imports and less exports and vice versa.
            </p>

            <NoteCard title="Exchange Rate Systems" className="mb-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold text-primary mb-1 text-xs">Fixed Exchange Rate</h4>
                  <p className="text-xs text-muted-foreground">
                    In a fixed exchange rate system since the govt. is focused on maintaining the exchange rate at a particular level. In this situation monetary policy is powerless to influence the real economy and it must be devoted to maintaining exchange rate.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 text-xs">Floating Exchange Rate</h4>
                  <p className="text-xs text-muted-foreground">
                    In a floating exchange rate system, monetary policy is freed from this role, but even so it must be used in a way that it does not become unsustainable in the long run.
                  </p>
                </div>
              </div>
            </NoteCard>

            <div className="grid md:grid-cols-2 gap-2 mb-3">
              <NoteCard title="Situation 1: Overvalued Currency">
                <p className="text-xs text-muted-foreground">
                  Some countries tend to overvalue their currency in order to encourage domestic production. This is because the local firms can easily import raw material from abroad and this would reduce the chances of imported inflation. This helps correct <strong>surpluses</strong> in the balance of payments.
                </p>
              </NoteCard>
              <NoteCard title="Situation 2: Undervalued Currency">
                <p className="text-xs text-muted-foreground">
                  Some countries undervalue their currency in order to stimulate exports. This is because a weaker currency makes exports cheaper and imports expensive. This helps the economy correct its <strong>deficits</strong> in the balance of payments.
                </p>
              </NoteCard>
            </div>

            <ExamTipBox title="Important Note">
              <p className="text-xs">Exchange rate is only one factor in determining international competitiveness. Several other factors must be considered with it like quality of goods, consumers' incomes, preferences etc.</p>
            </ExamTipBox>
          </ContentSection>

          {/* Topic 5: Supply-Side Policies */}
          <ContentSection title="Topic 5: Supply-Side Policies">
            <p className="text-foreground/90 leading-relaxed text-sm mb-2">
              <strong>Definition:</strong> These are long-term strategies that aim to increase or improve the efficiency of factors of production to ensure long term growth in the economy. These policies help to control inflation, increase employment, improve the balance of payment etc. Since they expand the productive capacity they tend to shift the supply curve to the right.
            </p>

            {/* PEEL Structure - Chain of Reasoning for Supply-Side Policy */}
            <AnalysisBlock title="Chain of Reasoning (AO3): Supply-Side Policy Transmission" type="analysis">
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <p className="font-semibold mb-1">PEEL Analysis — Point:</p>
                  <p className="text-muted-foreground">
                    Supply-side policies increase the productive capacity of the economy by improving the quantity or quality of factors of production, shifting LRAS rightward to achieve non-inflationary growth.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                  <p className="font-semibold text-cambridge-cyan mb-1">Explanation — The Transmission Mechanism:</p>
                  <div className="font-mono text-center py-1">
                    ↑Education/Training → ↑Human Capital → ↑Labor Productivity → ↑LRAS → ↑Yf & ↓P
                  </div>
                  <p className="text-muted-foreground mt-1">
                    Investment in education and training increases the skills and productivity of the labor force (human capital). Higher productivity means more output per worker, shifting the LRAS curve rightward from Yf₁ to Yf₂. This increases the full-employment level of output while reducing inflationary pressure — the economy can grow without demand-pull inflation.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-green/10 rounded-lg">
                  <p className="font-semibold text-cambridge-green mb-1">Evidence — Types of Supply-Side Policies:</p>
                  <p className="text-muted-foreground">
                    <strong>Market-based:</strong> Privatization, deregulation, tax cuts on firms, labor market flexibility (↓union power, ↓minimum wage). 
                    <strong> Interventionist:</strong> Education/training investment, infrastructure spending, R&D subsidies. Both shift LRAS right but have different distributional effects.
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <div className="mb-3">
              <SupplySidePolicyDiagram />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
              <NoteCard title="1. Privatization" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> It is a government policy in which state-owned businesses are sold to the private sector. The objective is that the firms will be more efficient and can generate more profits since they will be profit driven.
                </p>
              </NoteCard>

              <NoteCard title="2. Deregulation" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> This policy aims to remove barriers to entry to encourage competition. These can include minimum wage rates, max price etc. This makes the market more competitive and more productive.
                </p>
              </NoteCard>

              <NoteCard title="3. Capital Investment" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> This policy aims to spend funds on research and development and new technologies. This helps in both product and process innovation which can give the country a competitive advantage in the international market.
                </p>
              </NoteCard>

              <NoteCard title="4. Training & Education" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> This policy aims to increase the quantity and quality of labor in the economy by launching training and education programs. The government also lowers taxes to encourage individuals to join the labor force.
                </p>
              </NoteCard>

              <NoteCard title="5. Enterprise Zones" type="concept">
                <p className="text-xs text-muted-foreground">
                  <strong>Definition:</strong> These are areas where there is high unemployment and the government gives incentives like tax holidays, interest free loans etc. to businesses to locate there.
                </p>
              </NoteCard>
            </div>

            {/* A2 Evaluation Section - Enhanced */}
            <AnalysisBlock title="Critical Evaluation (AO4): Supply-Side Policy Limitations & Effectiveness" type="evaluation">
              <div className="space-y-2 text-xs">
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <h5 className="font-semibold text-destructive mb-1">Very Long Time Lags</h5>
                    <p className="text-muted-foreground">
                      Supply-side policies take <strong>5-15 years</strong> to yield results. Education investment today won't increase productivity until graduates enter the workforce. Cannot address short-term demand deficiency or cyclical unemployment.
                    </p>
                  </div>
                  <div className="p-2 bg-cambridge-orange/10 rounded-lg">
                    <h5 className="font-semibold text-cambridge-orange mb-1">Opportunity Costs</h5>
                    <p className="text-muted-foreground">
                      Large initial investment required for infrastructure, education, and training. Government spending on supply-side measures diverts resources from immediate welfare needs. Political pressure for short-term results may undermine long-term programs.
                    </p>
                  </div>
                  <div className="p-2 bg-cambridge-magenta/10 rounded-lg">
                    <h5 className="font-semibold text-cambridge-magenta mb-1">Distributional Effects</h5>
                    <p className="text-muted-foreground">
                      Market-based supply-side policies (↓minimum wage, ↓union power, ↓taxes on rich) may increase inequality. Benefits may disproportionately accrue to capital owners while workers face lower wages and less job security.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Cannot Address Demand Deficiency</h5>
                    <p className="text-muted-foreground">
                      Supply-side policies shift LRAS but cannot address a deficiency in aggregate demand. In a recession with high unemployment, increasing productive capacity is useless without sufficient demand to purchase the output. Keynesian demand management may be needed first.
                    </p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-1">Uncertain Outcomes</h5>
                    <p className="text-muted-foreground">
                      Privatization may lead to private monopoly rather than competition. Deregulation may reduce safety standards. Education investment may not translate into productivity if there are no jobs for graduates (brain drain). Effectiveness depends on implementation quality.
                    </p>
                  </div>
                </div>
                <div className="p-2 bg-primary/5 border border-primary/20 rounded-lg mt-2">
                  <p className="text-muted-foreground">
                    <strong>Examiner Conclusion:</strong> Supply-side policies are essential for long-term sustainable growth and addressing structural unemployment. However, they cannot substitute for demand management in the short run. A balanced policy approach combines demand-side stabilization with supply-side capacity building. "The best time to invest in supply-side policies was 10 years ago; the second-best time is now."
                  </p>
                </div>
              </div>
            </AnalysisBlock>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Policy Types</h4>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li><strong>Fiscal:</strong> Taxes and government spending</li>
                    <li><strong>Monetary:</strong> Money supply and interest rates</li>
                    <li><strong>Exchange Rate:</strong> Currency valuation</li>
                    <li><strong>Supply-Side:</strong> Productive capacity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Key Concepts</h4>
                  <ul className="list-disc list-inside space-y-0.5">
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
