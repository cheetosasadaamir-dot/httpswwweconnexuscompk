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

        {/* Interactive AD/AS Model */}
        <ContentSection title="Interactive AD/AS Model">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Use the interactive diagram below to explore how demand and supply shocks affect macroeconomic 
            equilibrium. Click the buttons to simulate an increase in aggregate demand or an adverse supply 
            shock, and observe how the equilibrium price level and output change.
          </p>
          <ADASInteractiveDiagram />
        </ContentSection>

        {/* Macroeconomic Equilibrium - Expanded */}
        <ContentSection title="Determining Macroeconomic Equilibrium">
          <NoteCard title="The Intersection of AD and AS" type="theory">
            <p className="leading-relaxed">
              Macroeconomic equilibrium occurs at the <strong>intersection of the aggregate demand and 
              aggregate supply curves</strong>. At this point, the total quantity of goods and services that 
              consumers, firms, government, and foreign buyers wish to purchase exactly equals the total 
              quantity that producers are willing to supply. The equilibrium determines two crucial 
              macroeconomic variables simultaneously: the <strong>general price level (P)</strong> and the 
              level of <strong>real national output (Y)</strong>.
            </p>
            <p className="mt-4 leading-relaxed">
              At equilibrium, there is no tendency for the price level or output to change because the plans 
              of buyers and sellers are mutually consistent. If the price level were above equilibrium, the 
              quantity supplied would exceed quantity demanded, creating unsold inventories that would put 
              downward pressure on prices. If the price level were below equilibrium, excess demand would bid 
              prices upward. Only at the equilibrium price level do these pressures balance.
            </p>
          </NoteCard>

          <AnalysisBlock title="Analysing Demand and Supply Shocks">
            <div className="space-y-6">
              <div className="p-5 border-l-4 border-primary rounded-r-lg bg-primary/5">
                <h4 className="font-semibold text-primary text-lg">Positive Demand Shock (Increase in AD)</h4>
                <p className="mt-3 leading-relaxed">
                  When aggregate demand increases (AD shifts rightward) – for example, due to a cut in interest 
                  rates, increased government spending, or rising consumer confidence – the economy moves to a 
                  new equilibrium with <strong>higher real output (Y₁ &gt; Y₀)</strong> and a 
                  <strong> higher price level (P₁ &gt; P₀)</strong>. The magnitude of these effects depends
                  critically on the slope of the SRAS curve. When the economy has significant spare capacity 
                  (operating well below full employment), the SRAS is relatively flat, so most of the impact 
                  falls on output with little price increase. As the economy approaches full employment, the 
                  SRAS becomes steeper, and demand increases become increasingly inflationary with smaller 
                  gains in real output.
                </p>
              </div>
              
              <div className="p-5 border-l-4 border-destructive rounded-r-lg bg-destructive/5">
                <h4 className="font-semibold text-destructive text-lg">Negative Supply Shock (Decrease in SRAS)</h4>
                <p className="mt-3 leading-relaxed">
                  When aggregate supply decreases (SRAS shifts leftward) – for example, due to rising oil 
                  prices, increased wages, or supply chain disruptions – the economy experiences the worst of 
                  both worlds: <strong>falling output (Y₁ &lt; Y₀)</strong> combined with a 
                  <strong> rising price level (P₁ &gt; P₀)</strong>. This combination is known as
                  <strong> stagflation</strong> – stagnation (falling output and rising unemployment) occurring 
                  simultaneously with inflation. Stagflation poses a severe policy dilemma: policies to boost 
                  demand and reduce unemployment would worsen inflation, while policies to reduce inflation 
                  would further depress output and employment.
                </p>
              </div>

              <div className="p-5 border-l-4 border-secondary rounded-r-lg bg-secondary/5">
                <h4 className="font-semibold text-secondary text-lg">Long-Run Adjustment</h4>
                <p className="mt-3 leading-relaxed">
                  In the long run, the economy tends to return to its potential output level (Y*). If a 
                  positive demand shock pushes output temporarily above Y*, the resulting inflationary 
                  pressure will eventually cause wages to rise, shifting SRAS leftward until the economy 
                  returns to Y* at a higher price level. Conversely, if the economy is below Y* (recession), 
                  the resulting unemployment will eventually put downward pressure on wages, shifting SRAS 
                  rightward until the economy returns to potential output. This self-correcting mechanism 
                  operates through wage and price flexibility, though in practice this adjustment can take 
                  considerable time.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Diagram Technique for Exams" variant="gold">
            <div className="space-y-3">
              <p className="leading-relaxed">
                When drawing AD/AS diagrams in examinations, always follow this sequence:
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                <li><strong>Label both axes clearly:</strong> Y-axis = "General Price Level (P)" and X-axis = "Real National Output / Real GDP (Y)"</li>
                <li><strong>Draw and label the original curves:</strong> AD, SRAS, and if relevant, LRAS</li>
                <li><strong>Mark the initial equilibrium:</strong> Label it E₀, P₀, Y₀</li>
                <li><strong>Show the shift:</strong> Draw the new curve (e.g., AD₁) and indicate direction with an arrow</li>
                <li><strong>Mark the new equilibrium:</strong> Label it E₁, P₁, Y₁</li>
                <li><strong>Explain the analysis:</strong> Describe what happened and why in your written answer</li>
              </ol>
              <p className="mt-3 text-sm italic">
                Remember: Clear, well-labeled diagrams can earn significant marks even if your written 
                explanation is incomplete.
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
                  <span>SRAS is upward sloping because sticky wages make production more profitable when prices rise; LRAS is vertical at full employment output.</span>
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
                  <span>Understanding shifts vs. movements along curves is crucial for policy analysis and exam success.</span>
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