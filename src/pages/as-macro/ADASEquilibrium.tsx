import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import ADASInteractiveDiagram from '@/components/diagrams/ADASInteractiveDiagram';
import ADCurveDiagram from '@/components/diagrams/ADCurveDiagram';
import ADShiftDiagram from '@/components/diagrams/ADShiftDiagram';
import SRASLRASDiagram from '@/components/diagrams/SRASLRASDiagram';
import ClassicalLRASDiagram from '@/components/diagrams/ClassicalLRASDiagram';
import KeynesianLRASDiagram from '@/components/diagrams/KeynesianLRASDiagram';
import ADASEquilibriumDiagram from '@/components/diagrams/ADASEquilibriumDiagram';
import DemandPullInflationDiagram from '@/components/diagrams/DemandPullInflationDiagram';
import CostPushStagflationDiagram from '@/components/diagrams/CostPushStagflationDiagram';
import ADDeterminantsDiagram from '@/components/diagrams/ADDeterminantsDiagram';
import ASDeterminantsDiagram from '@/components/diagrams/ASDeterminantsDiagram';
import { EquilibriumAdjustmentDiagram } from '@/components/diagrams/EquilibriumAdjustmentDiagram';
import { OutputGapsDiagram } from '@/components/diagrams/OutputGapsDiagram';
import { ADShiftImpactDiagram } from '@/components/diagrams/ADShiftImpactDiagram';
import { SRASShiftStagflationDiagram } from '@/components/diagrams/SRASShiftStagflationDiagram';
import ExpansionaryFiscalPolicyDiagram from '@/components/diagrams/ExpansionaryFiscalPolicyDiagram';
import ClassicalADInflationDiagram from '@/components/diagrams/ClassicalADInflationDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const ADASEquilibrium = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 1</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Macroeconomic Equilibrium
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the interaction between Aggregate Demand and Aggregate Supply to determine 
            the equilibrium level of national output and the overall price level in an economy.
          </p>
        </div>

        {/* Introduction to Macroeconomics */}
        <ContentSection title="The Macroeconomic Framework">
          <NoteCard title="From Microeconomics to Macroeconomics" type="definition">
            <p className="leading-relaxed">
              Macroeconomics is the branch of economics that deals with relationships between economic variables 
              at the <strong>aggregate level</strong> – that is, in the economy viewed as a whole rather than 
              individual markets or firms. While microeconomics focuses on the behaviour of individual consumers, 
              firms, and markets, macroeconomics examines the total output, employment, and price level of an 
              entire economy. This distinction is crucial because aggregate behaviour often differs from what 
              we might expect by simply adding up individual actions – a phenomenon known as the 
              <strong> fallacy of composition</strong>.
            </p>
            <p className="mt-4 leading-relaxed">
              The primary questions in macroeconomics concern how economies grow, why they fluctuate between 
              periods of prosperity and recession, what causes inflation and unemployment, and how governments 
              can influence these outcomes. To answer these questions, economists have developed theoretical 
              frameworks that model the economy as a system of interconnected markets for goods, services, 
              labour, and money. The most fundamental of these frameworks is the 
              <strong> Aggregate Demand and Aggregate Supply (AD/AS) model</strong>, which provides a powerful 
              tool for understanding macroeconomic equilibrium and the effects of various shocks and policies.
            </p>
            <p className="mt-4 leading-relaxed">
              In building a theory to explain the determination of national income, employment, and the price 
              level, the starting point is to consider the aggregate (total) demand for domestically produced 
              goods and services and the aggregate supply of those goods and services. By analysing how these 
              two forces interact, we can understand how economies reach equilibrium and how that equilibrium 
              changes in response to various economic events.
            </p>
          </NoteCard>
        </ContentSection>

        {/* Real vs Nominal Values */}
        <ContentSection title="Measuring Economic Performance: Real vs Nominal Values">
          <NoteCard title="Why Real Values Matter" type="definition">
            <p className="leading-relaxed">
              When measuring economic performance over time, economists must distinguish between 
              <strong> nominal values</strong> (also called money values or current prices) and 
              <strong> real values</strong> (constant prices, adjusted for inflation). This distinction 
              is fundamental to understanding whether an economy is genuinely growing or merely experiencing 
              rising prices that inflate the numerical measurements without any real improvement in living 
              standards.
            </p>
            <p className="mt-4 leading-relaxed">
              <strong>Nominal values</strong> are expressed in terms of the prices that prevailed at the time 
              of measurement. If a country's GDP was £100 billion in 2020 and £110 billion in 2023, this tells 
              us the total value of goods and services produced measured in each year's prices. However, this 
              comparison is misleading if prices have risen – some of the apparent increase in GDP may simply 
              reflect higher prices rather than more goods and services being produced.
            </p>
            <p className="mt-4 leading-relaxed">
              <strong>Real values</strong> remove the distorting effects of price changes by expressing all 
              measurements in the prices of a chosen base year. If we calculate that real GDP (in constant 
              2020 prices) was £100 billion in 2020 and £105 billion in 2023, we know that actual production 
              increased by 5% – any inflation has been stripped out. This gives a much more accurate picture 
              of genuine changes in economic output and living standards.
            </p>
          </NoteCard>

          <NoteCard title="The GDP Deflator and Price Indices" type="theory">
            <p className="leading-relaxed">
              To convert nominal values to real values, economists use <strong>price indices</strong> such as 
              the Consumer Price Index (CPI) or the GDP Deflator. The conversion formula is straightforward:
            </p>
            <div className="mt-4 p-4 bg-muted/40 rounded-xl font-mono text-center text-lg border border-primary/20">
              Real Value = (Nominal Value ÷ Price Index) × 100
            </div>
            <p className="mt-4 leading-relaxed">
              For example, if nominal GDP is £120 billion and the GDP deflator (price index) is 120, then real 
              GDP is (£120bn ÷ 120) × 100 = £100 billion in base year prices. This adjustment is essential when 
              comparing economic performance across different time periods or when assessing whether workers' 
              wages have genuinely increased in purchasing power terms.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="glass-card p-5 border-l-4 border-primary">
              <h4 className="font-semibold text-primary mb-3">Nominal Measurements</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Expressed in current market prices</li>
                <li>• Include the effects of inflation</li>
                <li>• Can be misleading for comparisons over time</li>
                <li>• Also called "money values" or "current prices"</li>
                <li>• Easy to observe directly in the economy</li>
              </ul>
            </div>
            <div className="glass-card p-5 border-l-4 border-secondary">
              <h4 className="font-semibold text-secondary mb-3">Real Measurements</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Expressed in constant prices (base year)</li>
                <li>• Adjusted to remove inflation effects</li>
                <li>• Essential for meaningful time comparisons</li>
                <li>• Also called "real terms" or "constant prices"</li>
                <li>• Show genuine changes in quantity/output</li>
              </ul>
            </div>
          </div>

          <ExamTipBox title="Critical Distinction" variant="warning">
            <p>
              Always clarify whether values are nominal or real in your exam answers. A country with 10% 
              nominal GDP growth but 8% inflation has only experienced approximately 2% real economic growth. 
              Policy makers focus on <strong>real values</strong> because these reflect genuine changes in 
              economic welfare and living standards.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* AD Definition and Determinants - High-Density Academic Block */}
        <ContentSection title="Aggregate Demand: Formal Definition and Determinants">
          {/* Zero-Gap Dense Definition Block */}
          <div className="space-y-0 mb-8">
            <div className="glass-card p-8 bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-primary">
              <h4 className="font-serif text-xl font-semibold text-primary mb-6">The Formal Definition of Aggregate Demand</h4>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                Aggregate Demand (AD) is defined as the <strong>total planned expenditure on an economy's goods and services 
                at a given price level in a given time period</strong>. It represents the sum of all spending intentions 
                by the four sectors of the macroeconomy: households (consumption), firms (investment), government (public 
                expenditure), and the foreign sector (net exports). The fundamental equation expressing this relationship is:
              </p>
              <div className="my-6 p-5 bg-muted/40 rounded-xl font-mono text-center text-2xl border border-primary/30">
                AD = C + I + G + (X − M)
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                Where <strong>C</strong> represents household consumption expenditure on goods and services, <strong>I</strong> denotes 
                gross fixed capital formation (investment by firms in capital goods), <strong>G</strong> signifies government 
                expenditure on goods and services (excluding transfer payments), <strong>X</strong> represents the value of 
                exports to foreign buyers, and <strong>M</strong> represents the value of imports from abroad. The term (X − M) 
                constitutes net exports or the trade balance. It is critical to understand that AD measures <em>planned</em> or 
                <em>desired</em> expenditure at each price level—it is a schedule showing how much economic agents <em>intend</em> 
                to spend, not necessarily what they actually succeed in purchasing. The downward slope of the AD curve reflects 
                the inverse relationship between the general price level and the quantity of real GDP demanded, operating through 
                three distinct transmission mechanisms: the wealth effect (Pigou effect), the international trade effect, and the 
                interest rate effect (Keynes effect).
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                The distinction between <strong>movements along the AD curve</strong> and <strong>shifts of the AD curve</strong> 
                is fundamental to macroeconomic analysis. A movement along the curve occurs when the price level changes—for 
                instance, a fall in the general price level increases the real value of money holdings, improves international 
                competitiveness, and reduces interest rates, collectively increasing the quantity of real GDP demanded. A shift 
                of the entire AD curve, however, occurs when any factor <em>other than the price level</em> causes planned 
                expenditure to change at every price level. These factors—known as the <strong>determinants of AD</strong>—include 
                changes in consumer confidence, interest rates, fiscal policy, exchange rates, asset prices, and conditions in 
                trading partner economies.
              </p>
            </div>
          </div>

          {/* Determinants Chain of Analysis */}
          <ADDeterminantsDiagram />

          {/* Additional Determinants Analysis */}
          <div className="space-y-0 mt-8">
            <div className="glass-card p-8 bg-gradient-to-br from-secondary/5 to-transparent border-l-4 border-secondary">
              <h4 className="font-serif text-xl font-semibold text-secondary mb-6">Further Determinants: Fiscal Policy and Exchange Rates</h4>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                <strong>Fiscal policy</strong> operates through changes in government spending (G) and taxation, directly 
                influencing aggregate demand. An increase in government expenditure on infrastructure, defence, or public 
                services constitutes an injection into the circular flow, shifting AD rightward. The magnitude of this effect 
                is amplified by the <strong>multiplier process</strong>: initial government spending becomes income for 
                households and firms, who respend a proportion determined by the marginal propensity to consume (MPC), 
                generating successive rounds of induced expenditure. The fiscal multiplier is given by k = 1/(1 − MPC) in a 
                closed economy, though this is reduced by withdrawals into savings, taxation, and imports. Conversely, changes 
                in taxation affect AD indirectly through their impact on disposable income. A reduction in direct taxation 
                increases households' post-tax income, stimulating consumption; a reduction in corporation tax improves 
                after-tax profitability, potentially stimulating investment. The transmission mechanism operates thus: 
                <span className="font-mono bg-muted/50 px-2 py-1 rounded mx-1">↓ Tax → ↑ Yd → ↑ C → AD shifts right</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                <strong>Exchange rate movements</strong> affect AD through the net exports component (X − M). A depreciation 
                (fall) in the domestic currency's exchange rate makes exports cheaper in foreign currency terms and imports 
                more expensive in domestic currency terms. Assuming demand is sufficiently price-elastic (the Marshall-Lerner 
                condition), this improves the trade balance over time, shifting AD rightward. The chain of analysis proceeds: 
                <span className="font-mono bg-muted/50 px-2 py-1 rounded mx-1">↓ Exchange rate → ↓ Px (export price) → ↑ X</span> 
                simultaneously with 
                <span className="font-mono bg-muted/50 px-2 py-1 rounded mx-1">↓ Exchange rate → ↑ Pm (import price) → ↓ M</span>. 
                The net effect is an increase in (X − M) and a rightward shift in AD. However, the J-curve effect suggests 
                that in the short run, before quantities adjust, a depreciation may initially worsen the trade balance before 
                improving it, as import values rise immediately while export volumes respond with a lag.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Aggregate Demand - Expanded */}
        <ContentSection title="Aggregate Demand (AD)">
          <NoteCard title="Definition and Components of Aggregate Demand" type="theory">
            <p className="leading-relaxed">
              Aggregate demand represents the <strong>total amount of effective demand</strong> in the economy 
              as a whole. More precisely, it is the sum of all expenditure on domestically produced goods and 
              services at each price level over a given period of time. Unlike the demand curve in microeconomics, 
              which shows the relationship between the price of a single good and the quantity demanded, the 
              aggregate demand curve shows the relationship between the <strong>general price level</strong> and 
              the <strong>total real output (Real GDP)</strong> demanded in the economy.
            </p>
            <div className="mt-6 p-5 bg-muted/40 rounded-xl font-mono text-center text-xl border border-primary/20">
              AD = C + I + G + (X − M)
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Where: C = Consumption, I = Investment, G = Government Spending, X = Exports, M = Imports
            </p>
            
            <div className="mt-6 space-y-5">
              <div className="p-4 border-l-4 border-primary bg-muted/20 rounded-r-lg">
                <h4 className="font-semibold text-primary text-lg">Consumption (C)</h4>
                <p className="mt-2 leading-relaxed">
                  Consumption expenditure refers to total spending by households on goods and services for 
                  current use. This is typically the <strong>largest component of aggregate demand</strong>, 
                  often accounting for 60-70% of total spending in developed economies. Consumption is primarily 
                  influenced by the level of real disposable income – as household incomes rise, consumption 
                  tends to increase, though not by the full amount of the income increase (the difference being 
                  saved). Other factors affecting consumption include consumer confidence about future economic 
                  prospects, interest rates (which affect the cost of borrowing and the return on saving), 
                  wealth effects (changes in asset values), and the availability of credit.
                </p>
              </div>

              <div className="p-4 border-l-4 border-secondary bg-muted/20 rounded-r-lg">
                <h4 className="font-semibold text-secondary text-lg">Investment (I)</h4>
                <p className="mt-2 leading-relaxed">
                  Investment expenditure represents spending by firms on <strong>capital goods</strong> – 
                  machinery, equipment, buildings, and additions to inventories. Investment is critically 
                  important not only because it contributes to current aggregate demand but also because it 
                  expands the economy's future productive capacity. Investment decisions depend primarily on 
                  firms' expectations about future profitability, which in turn depend on expected future 
                  demand, interest rates (the cost of financing investment), business confidence, technological 
                  developments, and government policies such as tax incentives. Investment is typically the 
                  most volatile component of AD, as business expectations can change rapidly in response to 
                  economic news and events.
                </p>
              </div>

              <div className="p-4 border-l-4 border-accent bg-muted/20 rounded-r-lg">
                <h4 className="font-semibold text-accent text-lg">Government Expenditure (G)</h4>
                <p className="mt-2 leading-relaxed">
                  Government expenditure includes all spending by central and local government on goods and 
                  services. This encompasses spending on public services (healthcare, education, defence), 
                  infrastructure (roads, bridges, public buildings), and the wages of public sector employees. 
                  It is important to note that <strong>transfer payments</strong> such as pensions, unemployment 
                  benefits, and welfare payments are <em>not</em> included directly in G because they do not 
                  represent government purchases of goods and services. However, these transfers do affect AD 
                  indirectly by influencing household consumption. Government spending is largely determined 
                  by political decisions about public services and can be used as a tool of fiscal policy to 
                  manage aggregate demand.
                </p>
              </div>

              <div className="p-4 border-l-4 border-destructive bg-muted/20 rounded-r-lg">
                <h4 className="font-semibold text-destructive text-lg">Net Exports (X − M)</h4>
                <p className="mt-2 leading-relaxed">
                  Net exports represent the difference between the value of exports (goods and services sold 
                  to foreign countries) and imports (goods and services purchased from abroad). When exports 
                  exceed imports, net exports are positive, adding to aggregate demand. When imports exceed 
                  exports, net exports are negative, reducing aggregate demand. The level of net exports depends 
                  on factors including the exchange rate (a weaker domestic currency makes exports cheaper and 
                  imports more expensive), relative price levels at home and abroad, income levels in trading 
                  partner countries (which affect their demand for our exports), and trade policies such as 
                  tariffs and quotas. For open economies, fluctuations in net exports can be a significant 
                  source of changes in aggregate demand.
                </p>
              </div>
            </div>
          </NoteCard>

          {/* AD Curve Diagram */}
          <ADCurveDiagram />

          <NoteCard title="Why is the Aggregate Demand Curve Downward Sloping?" type="theory">
            <p className="leading-relaxed">
              The aggregate demand curve shows a <strong>negative (inverse) relationship</strong> between the 
              overall price level and the quantity of real GDP demanded. This downward slope requires careful 
              explanation because it arises from different mechanisms than the downward slope of an individual 
              demand curve in microeconomics. While a microeconomic demand curve slopes downward partly due to 
              substitution between goods, there is no substitute for "all goods and services" at the aggregate 
              level. Instead, three distinct effects explain why AD slopes downward:
            </p>

            <div className="mt-6 space-y-5">
              <div className="p-5 border border-primary/30 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                <h4 className="font-semibold text-primary text-lg flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">1</span>
                  The Wealth Effect (Real Balances Effect)
                </h4>
                <p className="mt-3 leading-relaxed">
                  When the general price level falls, the <strong>real value of money holdings increases</strong>. 
                  If you hold £1,000 in cash or savings, and the price level drops by 10%, your money can now 
                  purchase 10% more goods and services than before – you are effectively wealthier. This increase 
                  in real wealth makes consumers feel more financially secure and encourages them to spend more 
                  on consumption. Conversely, when the price level rises, the real value of money holdings falls, 
                  consumers feel poorer, and consumption spending decreases. This effect was first described by 
                  economist Arthur Pigou and is sometimes called the <strong>Pigou effect</strong>.
                </p>
              </div>

              <div className="p-5 border border-secondary/30 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent">
                <h4 className="font-semibold text-secondary text-lg flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm">2</span>
                  The International Trade Effect (Substitution Effect)
                </h4>
                <p className="mt-3 leading-relaxed">
                  When the domestic price level falls relative to foreign price levels (assuming exchange rates 
                  remain constant), <strong>domestic goods become more competitive</strong> in international 
                  markets. Foreign consumers find our exports cheaper and purchase more of them, while domestic 
                  consumers find imports relatively more expensive and switch to domestically produced goods. 
                  Both of these responses increase net exports (X − M) and hence aggregate demand. Conversely, 
                  a rise in the domestic price level makes our goods less competitive internationally, reducing 
                  exports and increasing imports, which decreases aggregate demand.
                </p>
              </div>

              <div className="p-5 border border-accent/30 rounded-xl bg-gradient-to-r from-accent/5 to-transparent">
                <h4 className="font-semibold text-accent text-lg flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">3</span>
                  The Interest Rate Effect
                </h4>
                <p className="mt-3 leading-relaxed">
                  When the price level falls, consumers and firms need less money to finance their transactions. 
                  With the money supply fixed, this means there is more money available for other purposes, 
                  including lending. The increased supply of loanable funds pushes <strong>interest rates 
                  down</strong>. Lower interest rates reduce the cost of borrowing for both consumers (who may 
                  take out loans for cars, homes, or other purchases) and firms (who may borrow to finance 
                  investment in capital goods). Additionally, lower interest rates reduce the return on saving, 
                  making current consumption more attractive relative to saving. Both effects increase spending 
                  and hence aggregate demand. When the price level rises, the opposite occurs: interest rates 
                  rise, borrowing becomes more expensive, and aggregate demand falls.
                </p>
              </div>
            </div>
          </NoteCard>

          {/* AD Shift Diagram */}
          <ADShiftDiagram />

          <NoteCard title="Movements Along vs. Shifts of the AD Curve" type="application">
            <p className="leading-relaxed">
              It is essential to distinguish between a <strong>movement along</strong> the AD curve and a 
              <strong> shift</strong> of the entire AD curve. A movement along the curve occurs when the price 
              level changes, causing a corresponding change in the quantity of real output demanded – this is 
              simply moving from one point to another on the same curve. A shift of the AD curve, often called 
              a <strong>demand shock</strong>, occurs when any factor other than the price level causes aggregate 
              demand to change at every price level.
            </p>
            
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h5 className="font-semibold text-primary mb-3">Factors Causing AD to Shift Right (Increase)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Increased consumer confidence and optimism about the future
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Cuts in direct taxation (income tax, corporation tax)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Reductions in interest rates making borrowing cheaper
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Depreciation of the exchange rate boosting exports
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Increases in government spending
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Rising asset prices (housing, shares) creating wealth effects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Economic growth in trading partner countries
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-destructive/10 rounded-lg">
                <h5 className="font-semibold text-destructive mb-3">Factors Causing AD to Shift Left (Decrease)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Falling consumer confidence and pessimism about the future
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Increases in direct taxation reducing disposable income
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Rises in interest rates increasing cost of borrowing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Appreciation of the exchange rate reducing exports
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Cuts in government spending (austerity)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Falling asset prices creating negative wealth effects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">←</span>
                    Recession in trading partner countries
                  </li>
                </ul>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* AS Definition and Determinants - High-Density Academic Block */}
        <ContentSection title="Aggregate Supply: Formal Definition and Determinants">
          {/* Zero-Gap Dense Definition Block */}
          <div className="space-y-0 mb-8">
            <div className="glass-card p-8 bg-gradient-to-br from-secondary/5 to-transparent border-l-4 border-secondary">
              <h4 className="font-serif text-xl font-semibold text-secondary mb-6">The Formal Definition of Aggregate Supply</h4>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                Aggregate Supply (AS) is defined as the <strong>total value of goods and services that all producers in an 
                economy are willing and able to supply at a given price level in a given time period</strong>. Unlike the 
                supply curve in microeconomics, which relates to individual firms or industries, aggregate supply encompasses 
                the entire productive capacity of the national economy. The analysis of AS requires a crucial distinction 
                between two conceptually different time horizons: the <strong>Short-Run Aggregate Supply (SRAS)</strong>, 
                where certain input prices—particularly money wages—are assumed to be fixed or "sticky"; and the 
                <strong>Long-Run Aggregate Supply (LRAS)</strong>, where all prices and wages have fully adjusted to their 
                market-clearing levels.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                The <strong>Short-Run Aggregate Supply curve slopes upward</strong>, indicating that as the general price 
                level rises, firms are willing to supply more output. This positive relationship exists because, in the short 
                run, money wages are contractually fixed—when output prices rise but wage costs remain constant, 
                <strong>real wages fall and profit margins widen</strong>. Firms find it profitable to hire additional workers 
                and expand production. Alternatively, from a "sticky-wage" perspective, workers may suffer from money illusion, 
                failing to immediately recognise that inflation has eroded their real purchasing power, and thus continue to 
                supply labour at the existing nominal wage. As firms bid for additional workers to expand output, they may 
                also encounter rising marginal costs from overtime pay, less efficient equipment utilisation, and bottlenecks 
                in supply chains. These factors collectively generate the upward slope.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                The <strong>Long-Run Aggregate Supply curve is vertical</strong> at the economy's potential output (Yfe or Y*)—the 
                level of real GDP that corresponds to full employment of all factors of production. In the long run, all 
                prices and wages are fully flexible. If the price level doubles, nominal wages will eventually double 
                proportionally, leaving real wages unchanged. Since real wages determine equilibrium employment, and 
                employment determines output, there is no lasting effect on real GDP from changes in the price level alone. 
                The economy's output in the long run is determined solely by <strong>real supply-side factors</strong>: the 
                quantity and quality of labour (L), the capital stock (K), the level of technology (T), and the efficiency 
                of resource allocation determined by institutions and incentives.
              </p>
            </div>
          </div>

          {/* AS Determinants Diagram */}
          <ASDeterminantsDiagram />

          {/* SRAS Shift Determinants */}
          <div className="space-y-0 mt-8">
            <div className="glass-card p-8 bg-gradient-to-br from-destructive/5 to-transparent border-l-4 border-destructive">
              <h4 className="font-serif text-xl font-semibold text-destructive mb-6">SRAS Determinants: Costs of Production</h4>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                The position of the SRAS curve is determined by the <strong>unit costs of production</strong> facing firms 
                across the economy. Any factor that raises costs at every level of output will shift the SRAS curve leftward 
                (upward), as firms require a higher price to supply the same quantity. The primary determinants of SRAS 
                include: <strong>money wage rates</strong>—the largest cost component for most firms; <strong>raw material 
                and commodity prices</strong>—particularly energy (oil, gas), metals, and agricultural inputs; 
                <strong>import prices</strong>—affected by exchange rate movements; <strong>indirect taxation</strong>—VAT, 
                excise duties, and carbon taxes raise costs; and <strong>productivity levels</strong>—higher productivity 
                reduces unit costs, shifting SRAS rightward.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Consider the chain of analysis for an <strong>oil price shock</strong>: a geopolitical conflict disrupts oil 
                supplies, raising crude prices on world markets. This increases costs for transportation, manufacturing, 
                and electricity generation across the economy. Firms face higher unit costs of production at every output 
                level. The SRAS curve shifts leftward from SRAS₁ to SRAS₂. At the intersection with AD, the new equilibrium 
                E₂ occurs at a higher price level (P₂ {'>'} P₁) and lower real output (Y₂ {'<'} Y₁). This <strong>stagflation</strong>—
                simultaneous stagnation and inflation—represents the worst possible macroeconomic outcome: falling living 
                standards, rising unemployment, and erosion of purchasing power through higher prices. The policy response 
                is constrained: expansionary demand policy would add to inflationary pressures; contractionary policy would 
                deepen the recession.
              </p>
            </div>
          </div>

          {/* LRAS Shift Determinants */}
          <div className="space-y-0 mt-6">
            <div className="glass-card p-8 bg-gradient-to-br from-accent/5 to-transparent border-l-4 border-accent">
              <h4 className="font-serif text-xl font-semibold text-accent mb-6">LRAS Determinants: Productive Capacity</h4>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                Shifts in the Long-Run Aggregate Supply curve represent changes in the economy's <strong>underlying 
                productive potential</strong>—its capacity to produce goods and services at full employment. Unlike SRAS 
                shifts, which are often temporary responses to cost shocks, LRAS shifts represent structural changes in 
                the quantity or quality of factors of production. These supply-side improvements are the source of 
                <strong>genuine, sustainable economic growth</strong> that raises living standards over time.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                The determinants of LRAS can be categorised using the factors of production framework. 
                <strong>Labour quantity</strong> increases through population growth, immigration, or rising labour force 
                participation rates (more women entering the workforce, later retirement ages). <strong>Labour quality 
                (human capital)</strong> improves through education, vocational training, and healthcare investment that 
                enhances worker productivity. <strong>Physical capital</strong> expands through investment in machinery, 
                equipment, infrastructure (roads, ports, telecommunications), and buildings. <strong>Technological 
                progress</strong>—the application of new knowledge to production—allows more output from the same inputs, 
                effectively shifting the production function upward. <strong>Institutional factors</strong>—property rights, 
                rule of law, regulatory efficiency, trade openness—affect the efficiency with which resources are allocated 
                and reduce transaction costs.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                The policy implication is profound: while demand-side policies (fiscal and monetary) can stabilise output 
                around potential in the short run, <strong>only supply-side policies can shift LRAS rightward</strong> and 
                generate sustained improvements in real GDP per capita. Governments seeking long-run growth must invest in 
                education and skills, incentivise research and development, maintain infrastructure, ensure competitive 
                markets, and foster an institutional environment conducive to entrepreneurship and innovation.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Aggregate Supply - Expanded */}
        <ContentSection title="Aggregate Supply (AS)">
          <NoteCard title="Understanding Aggregate Supply" type="definition">
            <p className="leading-relaxed">
              Aggregate supply represents the <strong>total quantity of goods and services that all producers 
              in an economy are willing and able to supply</strong> at each possible price level during a given 
              time period. The quantity supplied depends fundamentally upon the quantities and productivity of 
              the factors of production (land, labour, capital, and enterprise) employed in the economy. 
              Understanding aggregate supply requires distinguishing between the <strong>short run</strong> and 
              the <strong>long run</strong>, as the behaviour of supply differs significantly over these time 
              horizons.
            </p>
            <p className="mt-4 leading-relaxed">
              In economics, the distinction between short run and long run is not about calendar time but about 
              the <strong>flexibility of adjustment</strong>. In the short run, some factors of production are 
              fixed – particularly capital equipment, technology, and often wage contracts. Firms can only 
              adjust output by varying how intensively they use their existing resources. In the long run, all 
              factors become variable – firms can expand or contract their operations, new technologies can be 
              adopted, and wages can fully adjust to market conditions.
            </p>
          </NoteCard>

          <NoteCard title="Short-Run Aggregate Supply (SRAS)" type="theory">
            <p className="leading-relaxed">
              The Short-Run Aggregate Supply curve shows the relationship between the price level and the 
              quantity of real output that firms are willing to supply when <strong>some factor input prices 
              are fixed</strong> – most importantly, money wages. The SRAS curve is <strong>upward sloping</strong>, 
              indicating that as the price level rises, firms are willing to produce more output in the short run.
            </p>
            <p className="mt-4 leading-relaxed">
              The upward slope occurs because when the price level rises while money wages remain fixed, 
              <strong>real wages fall</strong>. Labour becomes relatively cheaper for firms, making production 
              more profitable. Firms respond by hiring more workers and increasing output. Additionally, rising 
              prices mean that firms can earn higher revenues while their costs (particularly wages) remain 
              constant, increasing profit margins and incentivising greater production. However, this 
              relationship only holds in the short run because eventually workers will recognise that their 
              real wages have fallen and demand higher money wages, eliminating the profit incentive.
            </p>
            <p className="mt-4 leading-relaxed">
              When firms wish to increase output in the short run, they must do so by <strong>varying the 
              intensity of utilisation</strong> of existing inputs. This might involve paying workers overtime, 
              running machinery for longer hours, or using less efficient backup equipment. These adjustments 
              typically involve higher marginal costs, which firms will only accept if they receive higher 
              prices – hence the upward slope of SRAS.
            </p>
          </NoteCard>

          <NoteCard title="Factors Shifting the SRAS Curve" type="application">
            <p className="leading-relaxed">
              A shift of the SRAS curve is called a <strong>supply shock</strong>. The position of the SRAS 
              curve depends on the costs of production and the efficiency with which inputs are converted into 
              outputs. Any factor that changes production costs at every level of output will shift the curve:
            </p>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-primary mb-3">Rightward Shift (↑SRAS)</h5>
                <ul className="space-y-2 text-sm">
                  <li>• Fall in money wage rates</li>
                  <li>• Decrease in raw material prices</li>
                  <li>• Fall in oil and energy prices</li>
                  <li>• Improvements in productivity</li>
                  <li>• Reductions in business taxes</li>
                  <li>• Favourable weather for agriculture</li>
                  <li>• Government subsidies to producers</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-destructive mb-3">Leftward Shift (↓SRAS)</h5>
                <ul className="space-y-2 text-sm">
                  <li>• Rise in money wage rates</li>
                  <li>• Increase in raw material prices</li>
                  <li>• Rise in oil and energy prices</li>
                  <li>• Decline in productivity</li>
                  <li>• Increases in business taxes</li>
                  <li>• Natural disasters or adverse weather</li>
                  <li>• Supply chain disruptions</li>
                </ul>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Long-Run Aggregate Supply (LRAS)" type="theory">
            <p className="leading-relaxed">
              In the long run, the aggregate supply curve becomes <strong>vertical</strong> at the 
              <strong> full-employment level of real output</strong>, denoted as Y* or Yf (full employment 
              output). This vertical LRAS represents the economy's <strong>potential output</strong> – the 
              maximum sustainable level of production when all resources are fully and efficiently employed. 
              At this point, the economy is operating on its production possibility frontier.
            </p>
            <p className="mt-4 leading-relaxed">
              The LRAS is vertical because, in the long run, all prices and wages are fully flexible. If the 
              price level rises, nominal wages will eventually rise proportionally, leaving real wages unchanged. 
              Since real wages determine the quantity of labour demanded and supplied, there is no change in 
              employment or output. The only factors that can shift the LRAS curve are those that change the 
              economy's <strong>productive capacity</strong>:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">L</span>
                <div>
                  <strong>Labour force changes:</strong> Growth in the working-age population, immigration of 
                  workers, or changes in participation rates expand the quantity of labour available.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">K</span>
                <div>
                  <strong>Capital accumulation:</strong> Investment in machinery, equipment, and infrastructure 
                  expands the capital stock and enables greater production.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">T</span>
                <div>
                  <strong>Technological progress:</strong> Innovations that allow more output to be produced 
                  from the same inputs shift the LRAS rightward.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-bold">H</span>
                <div>
                  <strong>Human capital development:</strong> Education and training improve the skills and 
                  productivity of the workforce.
                </div>
              </li>
            </ul>
          </NoteCard>

          {/* SRAS and LRAS Diagram */}
          <SRASLRASDiagram />
        </ContentSection>

        {/* Classical vs Keynesian LRAS - CIE 9708 Syllabus Integration */}
        <ContentSection title="The LRAS Debate: Classical vs Keynesian Views">
          <div className="glass-card p-6 mb-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-primary">
            <h4 className="font-serif text-xl font-semibold text-gradient mb-4">Why This Matters for CIE 9708</h4>
            <p className="text-muted-foreground leading-relaxed text-justify mb-3">
              The shape of the LRAS curve is <strong>the fundamental dividing line</strong> between Classical/Monetarist 
              and Keynesian macroeconomics. Your choice of LRAS shape determines your policy recommendations:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-[hsl(var(--cambridge-green))]/10 rounded-lg">
                <h5 className="font-semibold text-[hsl(var(--cambridge-green))] mb-2">If LRAS is Vertical (Classical)</h5>
                <p className="text-muted-foreground">
                  → Demand-side policies only affect prices, not output<br/>
                  → Focus on supply-side policies to shift LRAS<br/>
                  → Economy self-corrects to Y<sub>f</sub> via wage flexibility
                </p>
              </div>
              <div className="p-4 bg-[hsl(var(--cambridge-cyan))]/10 rounded-lg">
                <h5 className="font-semibold text-[hsl(var(--cambridge-cyan))] mb-2">If LRAS has Elastic Region (Keynesian)</h5>
                <p className="text-muted-foreground">
                  → Demand-side policies can increase real output<br/>
                  → Economy can be stuck below Y<sub>f</sub> indefinitely<br/>
                  → Government intervention justified during recessions
                </p>
              </div>
            </div>
          </div>

          {/* Classical LRAS Diagram */}
          <ClassicalLRASDiagram title="Classical/Monetarist LRAS: Vertical at Full Employment" />

          {/* Classical AD Increase - Pure Inflation Effect */}
          <div className="mt-8">
            <ClassicalADInflationDiagram />
          </div>

          {/* Keynesian LRAS Diagram */}
          <div className="mt-8">
            <KeynesianLRASDiagram title="Keynesian LRAS: Three Distinct Phases" />
          </div>

          {/* Actual vs Potential Growth Integration */}
          <div className="mt-8 p-6 glass-card border-l-4 border-secondary">
            <h4 className="font-serif text-lg font-semibold text-secondary mb-4">Transmission Mechanism: Actual vs Potential Growth</h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="p-4 bg-[hsl(var(--cambridge-cyan))]/10 rounded-lg">
                <h5 className="font-semibold text-[hsl(var(--cambridge-cyan))] mb-3">Actual Growth (AD Shift)</h5>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Movement <em>toward</em> existing capacity. Output rises from below Y<sub>f</sub> toward Y<sub>f</sub>.
                </p>
                <div className="font-mono text-xs bg-muted/40 p-2 rounded mb-2">
                  ↓Interest rates → ↑I, ↑C → AD shifts right → Y rises toward Y<sub>f</sub>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Limitation:</strong> Cannot exceed Y<sub>f</sub> sustainably — beyond this, only inflation occurs.
                </p>
              </div>
              <div className="p-4 bg-[hsl(var(--cambridge-green))]/10 rounded-lg">
                <h5 className="font-semibold text-[hsl(var(--cambridge-green))] mb-3">Potential Growth (LRAS/PPC Shift)</h5>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Expansion of the economy's <em>maximum sustainable output</em>. Y<sub>f</sub> itself increases.
                </p>
                <div className="font-mono text-xs bg-muted/40 p-2 rounded mb-2">
                  ↑K (investment) → ↑MPL → ↑Potential output → LRAS shifts right
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Sources:</strong> ↑L (labour), ↑K (capital), ↑Technology, ↑Human capital, Institutional improvement.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Precision Equilibrium Diagram */}
        <ContentSection title="The AD/AS Framework: Precision Analysis">
          <ADASEquilibriumDiagram />
        </ContentSection>

        {/* Interactive AD/AS Model */}
        <ContentSection title="Interactive AD/AS Model">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Use the interactive diagram below to explore how demand and supply shocks affect macroeconomic 
            equilibrium. Click the buttons to simulate an increase in aggregate demand or an adverse supply 
            shock, and observe how the equilibrium price level and output change.
          </p>
          <ADASInteractiveDiagram />
        </ContentSection>

        {/* Demand-Pull Inflation */}
        <ContentSection title="Demand-Pull Inflation: Chain of Analysis">
          <div className="space-y-0 mb-6">
            <p className="text-muted-foreground leading-relaxed text-justify">
              Demand-pull inflation represents the classical mechanism whereby persistent increases in Aggregate 
              Demand, unmatched by corresponding increases in Aggregate Supply, generate sustained upward pressure 
              on the general price level. The fundamental insight is that when total planned expenditure in the 
              economy (C + I + G + X − M) exceeds the economy's current productive capacity at prevailing prices, 
              the excess demand cannot be satisfied through additional output alone—particularly as the economy 
              approaches full employment. Instead, the competitive bidding for scarce goods and factor inputs 
              translates into price increases. The relationship between AD shifts and inflation is critically 
              mediated by the slope of the SRAS curve: when the economy operates with substantial spare capacity 
              (the "Keynesian" horizontal segment), AD increases translate primarily into output gains with 
              minimal inflationary impact; as the economy approaches full employment (the "classical" vertical 
              segment), further AD increases become increasingly inflationary with diminishing real output effects.
            </p>
          </div>
          <DemandPullInflationDiagram />
          
          <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-transparent rounded-xl border-l-4 border-secondary">
            <h4 className="font-serif text-lg font-semibold text-secondary mb-4">The Multiplier Effect in an AD/AS Context</h4>
            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
              The multiplier effect amplifies initial changes in autonomous expenditure through successive rounds 
              of induced consumption. When the government increases spending by ΔG, this injection becomes income 
              for households who supply factors of production. A proportion of this additional income—determined 
              by the marginal propensity to consume (MPC)—is respent on domestically produced goods, generating 
              further income for other producers. The process continues geometrically, with each round diminished 
              by the marginal propensity to withdraw (MPW = MPS + MPT + MPM). The final change in national income 
              is given by: <span className="font-mono bg-muted/50 px-2 py-1 rounded">ΔY = k × ΔG</span> where 
              <span className="font-mono bg-muted/50 px-2 py-1 rounded mx-1">k = 1/MPW = 1/(1 − MPC)</span>. 
              However, the multiplier's effectiveness is constrained by the AS curve's slope. At full employment, 
              the "real" multiplier approaches zero as nominal spending increases translate entirely into price 
              rises rather than output expansion. Thus, the multiplier is most potent when significant spare 
              capacity exists—precisely the condition Keynes emphasised during the Great Depression.
            </p>
          </div>

          {/* Expansionary Fiscal Policy Diagram */}
          <div className="mt-8">
            <ExpansionaryFiscalPolicyDiagram />
          </div>
        </ContentSection>

        {/* Cost-Push Inflation / Stagflation */}
        <ContentSection title="Cost-Push Inflation & Stagflation: Chain of Analysis">
          <div className="space-y-0 mb-6">
            <p className="text-muted-foreground leading-relaxed text-justify">
              Cost-push inflation originates from the supply side of the economy, arising when increases in the 
              costs of production—independent of demand conditions—force firms to raise prices to maintain 
              profitability. Unlike demand-pull inflation, which arises from "too much money chasing too few 
              goods," cost-push inflation represents a contraction in the economy's willingness to supply at 
              any given price level. The SRAS curve shifts leftward (upward), reflecting higher unit costs of 
              production. Primary sources of cost-push pressure include: commodity price shocks (particularly 
              energy and raw materials); wage-push pressures when nominal wage increases exceed productivity 
              growth; currency depreciation raising import costs; increases in indirect taxation; and regulatory 
              compliance costs. The distinguishing characteristic of cost-push inflation is its association 
              with falling output—the economy moves up and to the left along the AD curve, experiencing 
              simultaneously higher prices and reduced real GDP.
            </p>
          </div>
          <CostPushStagflationDiagram />
        </ContentSection>

        {/* Macroeconomic Equilibrium - Expanded */}
        <ContentSection title="Determining Macroeconomic Equilibrium">
          <NoteCard title="The Intersection of AD and AS" type="theory">
            <p className="leading-relaxed text-justify">
              Macroeconomic equilibrium occurs at the intersection of the aggregate demand and 
              aggregate supply curves. At this point, the total quantity of goods and services that 
              consumers, firms, government, and foreign buyers wish to purchase exactly equals the total 
              quantity that producers are willing to supply. The equilibrium determines two crucial 
              macroeconomic variables simultaneously: the general price level (P) and the 
              level of real national output (Y). The self-adjusting mechanism operates as follows: 
              should the actual price level exceed equilibrium, an excess supply of goods manifests as 
              unplanned inventory accumulation, signalling to firms that production exceeds sales and 
              exerting downward pressure on prices and output until equilibrium is restored. Conversely, 
              a below-equilibrium price level generates excess demand, depleting inventories and bidding 
              prices upward. Only at the equilibrium price level do these countervailing pressures balance, 
              ensuring that aggregate planned expenditure equals aggregate planned output.
            </p>
          </NoteCard>

          <AnalysisBlock title="Analysing Demand and Supply Shocks">
            <div className="space-y-6">
              <div className="p-5 border-l-4 border-primary rounded-r-lg bg-primary/5">
                <h4 className="font-semibold text-primary text-lg">Positive Demand Shock (Increase in AD)</h4>
                <p className="mt-3 leading-relaxed text-justify">
                  When aggregate demand increases (AD shifts rightward) – for example, due to a cut in interest 
                  rates, increased government spending, or rising consumer confidence – the economy moves to a 
                  new equilibrium with higher real output (Y₁ → Y₂) and a 
                  higher price level (P₁ → P₂). The magnitude of these effects depends
                  critically on the slope of the SRAS curve. When the economy has significant spare capacity 
                  (operating well below full employment), the SRAS is relatively flat, so most of the impact 
                  falls on output with little price increase. As the economy approaches full employment, the 
                  SRAS becomes steeper, and demand increases become increasingly inflationary with smaller 
                  gains in real output.
                </p>
              </div>
              
              <div className="p-5 border-l-4 border-destructive rounded-r-lg bg-destructive/5">
                <h4 className="font-semibold text-destructive text-lg">Negative Supply Shock (Decrease in SRAS)</h4>
                <p className="mt-3 leading-relaxed text-justify">
                  When aggregate supply decreases (SRAS shifts leftward) – for example, due to rising oil 
                  prices, increased wages, or supply chain disruptions – the economy experiences the worst of 
                  both worlds: falling output (Y₁ → Y₂, where Y₂ {'<'} Y₁) combined with a 
                  rising price level (P₁ → P₂, where P₂ {'>'} P₁). This combination is known as
                  stagflation – stagnation (falling output and rising unemployment) occurring 
                  simultaneously with inflation. Stagflation poses a severe policy dilemma: policies to boost 
                  demand and reduce unemployment would worsen inflation, while policies to reduce inflation 
                  would further depress output and employment.
                </p>
              </div>

              <div className="p-5 border-l-4 border-secondary rounded-r-lg bg-secondary/5">
                <h4 className="font-semibold text-secondary text-lg">Long-Run Adjustment Mechanism</h4>
                <p className="mt-3 leading-relaxed text-justify">
                  In the long run, the economy tends to return to its potential output level (Y*). If a 
                  positive demand shock pushes output temporarily above Y*, the resulting inflationary 
                  pressure will eventually cause wages to rise as workers demand compensation for reduced 
                  real wages, shifting SRAS leftward until the economy returns to Y* at a higher price level. 
                  Conversely, if the economy is below Y* (recession), the resulting unemployment will eventually 
                  put downward pressure on wages as workers accept lower nominal wages to find employment, 
                  shifting SRAS rightward until the economy returns to potential output. This self-correcting 
                  mechanism operates through wage and price flexibility, though in practice this adjustment 
                  can take considerable time—hence the case for active stabilisation policy.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Senior Examiner's Conclusion: The Elasticity-Dependent Impact" variant="gold">
            <p className="leading-relaxed text-justify">
              <strong>Ultimately, the impact of an AD shift on the Price Level is critically dependent upon the 
              elasticity of the AS curve.</strong> If the economy is operating with significant spare capacity 
              (the Keynesian horizontal section of SRAS), an increase in Aggregate Demand will lead to economic 
              growth with minimal inflationary pressure—firms can expand output by employing previously 
              underutilised resources without significant cost increases. However, at or near full employment 
              (Yfe), where the SRAS becomes highly inelastic and approaches the vertical LRAS, any further 
              increase in AD is <em>purely inflationary</em>—nominal demand rises but cannot be met with 
              additional real output, translating entirely into higher prices. This insight underpins the 
              policy debate regarding the appropriate stance of fiscal and monetary policy: expansionary 
              measures are most effective in recessions with spare capacity, whereas at full employment they 
              risk accelerating inflation without generating real growth. The examiner will reward candidates 
              who explicitly link their analysis to the position on the AS curve and the concept of 
              capacity constraints.
            </p>
          </ExamTipBox>

          <ExamTipBox title="Diagram Technique for Examinations" variant="warning">
            <div className="space-y-3">
              <p className="leading-relaxed">
                When drawing AD/AS diagrams in examinations, always follow this sequence:
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                <li><strong>Label both axes clearly:</strong> Y-axis = "General Price Level (GPL)" and X-axis = "Real National Output / Real GDP (Y)"</li>
                <li><strong>Draw and label the original curves:</strong> AD, SRAS, and if relevant, LRAS at Yfe</li>
                <li><strong>Mark the initial equilibrium:</strong> Label it E₁, P₁, Y₁</li>
                <li><strong>Show the shift:</strong> Draw the new curve (e.g., AD₂) and indicate direction with an arrow</li>
                <li><strong>Mark the new equilibrium:</strong> Label it E₂, P₂, Y₂</li>
                <li><strong>Identify gaps if applicable:</strong> Mark inflationary or recessionary gaps relative to LRAS</li>
              </ol>
              <p className="mt-3 text-sm italic">
                Clear, well-labeled diagrams demonstrating correct understanding of curve positions and equilibrium 
                determination can earn significant marks even if written explanation is incomplete.
              </p>
            </div>
          </ExamTipBox>
        </ContentSection>

        {/* Key Equations Summary */}
        <ContentSection title="Key Equations and Relationships">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass-card p-5">
              <h4 className="font-semibold text-primary mb-3 text-lg">Aggregate Demand</h4>
              <p className="font-mono text-center py-3 text-xl bg-muted/30 rounded-lg">AD = C + I + G + (X − M)</p>
              <p className="text-sm text-muted-foreground mt-3">
                Total spending on domestically produced goods and services
              </p>
            </div>
            <div className="glass-card p-5">
              <h4 className="font-semibold text-primary mb-3 text-lg">Equilibrium Condition</h4>
              <p className="font-mono text-center py-3 text-xl bg-muted/30 rounded-lg">AD = AS at (Y*, P*)</p>
              <p className="text-sm text-muted-foreground mt-3">
                Quantity demanded equals quantity supplied at equilibrium
              </p>
            </div>
            <div className="glass-card p-5">
              <h4 className="font-semibold text-secondary mb-3 text-lg">Full Employment Output</h4>
              <p className="font-mono text-center py-3 text-xl bg-muted/30 rounded-lg">Y* = f(L, K, T)</p>
              <p className="text-sm text-muted-foreground mt-3">
                Potential output depends on labour, capital, and technology
              </p>
            </div>
            <div className="glass-card p-5">
              <h4 className="font-semibold text-secondary mb-3 text-lg">SRAS Position</h4>
              <p className="font-mono text-center py-3 text-xl bg-muted/30 rounded-lg">SRAS = f(W, costs)</p>
              <p className="text-sm text-muted-foreground mt-3">
                Short-run supply depends on wages and input costs
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Examiner Traps & Command Word Focus */}
        <ContentSection title="Examiner Guidance: Common Errors & Command Words">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Examiner Traps */}
            <div className="glass-card p-6 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-400 mb-4">⚠️ Common Examiner Traps</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 1: Movement vs Shift Confusion</p>
                  <p className="text-muted-foreground">A change in GPL causes a <em>movement along</em> AD/AS. Only non-price factors cause <em>shifts</em>. Writing "AD shifts left because prices rise" is incorrect.</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 2: Ignoring Short-Run vs Long-Run</p>
                  <p className="text-muted-foreground">A rightward AD shift increases both P and Y in the <strong>short run</strong>. In the <strong>long run</strong>, SRAS adjusts (wages rise) → P increases further but Y returns to Yfe.</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 3: LRAS ≠ SRAS Determinants</p>
                  <p className="text-muted-foreground">SRAS shifts due to <em>costs</em> (wages, oil, imports). LRAS shifts due to <em>productive capacity</em> (labour, capital, technology). Don't conflate them.</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 4: "More AD = Better"</p>
                  <p className="text-muted-foreground">At/beyond Yfe, ↑AD is purely inflationary with minimal output gains. Only supply-side improvements enable sustainable growth.</p>
                </div>
              </div>
            </div>

            {/* Command Word Focus */}
            <div className="glass-card p-6 border-l-4 border-primary">
              <h4 className="font-semibold text-primary mb-4">📝 Command Word Strategies</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">"Analyse" (AO3)</p>
                  <p className="text-muted-foreground">Show complete chains of reasoning. Example: ↑Consumer confidence → ↑C → AD shifts right → Excess demand at P₀ → ↑GPL → New equilibrium E₁ at higher P and Y.</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">"Evaluate" / "Discuss" (AO4)</p>
                  <p className="text-muted-foreground">Consider: (1) SR vs LR effects, (2) economy's position on AS curve, (3) size of multiplier, (4) time lags, (5) counter-arguments. Use phrases like "However...", "On balance...", "The extent depends on..."</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">"Explain" (AO1/AO2)</p>
                  <p className="text-muted-foreground">Define the concept → Describe the mechanism → Link to diagram. Always reference the AD/AS model when explaining macroeconomic outcomes.</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">"To what extent" (AO4)</p>
                  <p className="text-muted-foreground">Requires balanced evaluation with a justified conclusion. Consider magnitude, time horizon, and ceteris paribus assumptions being violated.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-World Application */}
          <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-transparent">
            <h4 className="font-semibold text-primary mb-4">📌 Real-World Case Study: COVID-19 Shock (2020)</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-cambridge-cyan mb-2">Demand Shock</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Lockdowns reduced C (consumer spending collapsed), I (investment postponed due to uncertainty), 
                  and X (global trade froze). AD shifted sharply leftward → recessionary gap opened → unemployment rose to 5.2% (UK).
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-cambridge-orange mb-2">Supply Shock</h5>
                <p className="text-muted-foreground leading-relaxed">
                  Factory closures, supply chain disruptions, and worker shortages shifted SRAS leftward simultaneously. 
                  This explains why inflation initially rose despite falling output—a mild stagflation effect.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-muted/40 rounded-lg font-mono text-xs text-center">
              COVID = Simultaneous leftward AD shift + leftward SRAS shift → Deep recession with supply-side inflation pressures
            </div>
          </div>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-8">
            <h3 className="font-serif text-2xl text-gradient mb-6">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mt-0.5">1</span>
                  <span>Macroeconomics examines aggregate economic variables: total output, employment, and the general price level for the economy as a whole.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mt-0.5">2</span>
                  <span>Aggregate Demand (AD = C + I + G + X − M) is downward sloping due to the wealth effect, international trade effect, and interest rate effect.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mt-0.5">3</span>
                  <span>SRAS is upward sloping because sticky wages make production more profitable when prices rise; LRAS is vertical at full employment output (Yfe).</span>
                </li>
              </ul>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm font-bold mt-0.5">4</span>
                  <span>Macroeconomic equilibrium occurs where AD = AS, determining both the price level and real output simultaneously.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm font-bold mt-0.5">5</span>
                  <span>Near full employment, increases in AD are more inflationary; adverse supply shocks cause stagflation (rising prices with falling output).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm font-bold mt-0.5">6</span>
                  <span>Always distinguish: (a) movement vs shift, (b) SRAS vs LRAS determinants, (c) short-run vs long-run effects for exam precision.</span>
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default ADASEquilibrium;