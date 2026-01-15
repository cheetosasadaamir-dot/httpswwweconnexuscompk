import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import InflationDiagrams from '@/components/diagrams/InflationDiagrams';

const Inflation = () => {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 2</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Inflation
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the causes, measurement, and consequences of a sustained rise in the general price level.
          </p>
        </div>

        {/* Definition */}
        <ContentSection title="What is Inflation?">
          <NoteCard title="Defining Inflation" type="definition">
            <p className="leading-relaxed">
              <strong>Inflation</strong> is defined as a <strong>general and sustained increase in the price 
              level</strong> of goods and services in an economy over a period of time. This definition contains 
              two essential elements that must both be present for a true inflationary situation: the price 
              increase must be <em>general</em> (affecting the overall price level rather than just a few 
              specific goods) and <em>sustained</em> (continuing over time rather than being a one-off adjustment).
            </p>
            <p className="mt-4 leading-relaxed">
              Inflation represents a <strong>fall in the purchasing power of money</strong> – as prices rise, each 
              unit of currency (pound, dollar, euro) can purchase fewer goods and services than before. A person 
              with £100 today can buy less than someone with £100 could buy a year ago if inflation has occurred. 
              This erosion of purchasing power is why inflation is such an important macroeconomic concern – it 
              affects the real value of savings, wages, pensions, and all forms of income expressed in monetary terms.
            </p>
            <p className="mt-4 leading-relaxed">
              It is crucial to distinguish inflation from a <strong>one-time price increase</strong>. If prices 
              rise due to a temporary shock (such as a poor harvest or a brief supply disruption) and then 
              stabilise at the new higher level, this is not inflation – it is simply a change in the price level. 
              Inflation requires prices to keep rising continuously. Similarly, if only certain prices rise while 
              others fall (relative price changes), this is not necessarily inflation unless the overall average 
              price level increases.
            </p>
          </NoteCard>

          <NoteCard title="Real vs Nominal Values in an Inflationary Environment" type="theory">
            <p className="leading-relaxed">
              Understanding the distinction between <strong>nominal values</strong> and <strong>real values</strong> 
              is essential when analysing an economy experiencing inflation. Nominal values are expressed in 
              current monetary terms without adjustment for price changes. Real values, by contrast, are adjusted 
              to remove the effects of inflation, showing the true purchasing power or quantity equivalent.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-primary mb-2">Nominal Values</h5>
                <p className="text-sm">
                  The face value or money value of an economic variable. A worker earning £30,000 this year 
                  has the same <em>nominal</em> wage as one earning £30,000 ten years ago, but very different 
                  <em> real</em> wages due to inflation.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-secondary mb-2">Real Values</h5>
                <p className="text-sm">
                  Values adjusted for inflation using a price index. Real values show actual purchasing power 
                  and are essential for meaningful economic comparisons across time periods.
                </p>
              </div>
            </div>
            <p className="mt-4 leading-relaxed">
              Economists focus overwhelmingly on <strong>real values</strong> rather than nominal values because 
              real values accurately reflect genuine changes in economic well-being. A 5% nominal wage increase 
              during a period of 5% inflation represents zero real wage growth – workers can buy exactly the same 
              amount of goods and services despite their higher money wages.
            </p>
          </NoteCard>
        </ContentSection>

        {/* Measuring Inflation */}
        <ContentSection title="Measuring Inflation: The Consumer Price Index">
          <NoteCard title="The CPI Methodology" type="theory">
            <p className="leading-relaxed">
              The <strong>Consumer Price Index (CPI)</strong> is the principal measure of inflation used by 
              governments and central banks around the world. The CPI measures changes in the price level by 
              tracking the cost of a carefully selected <strong>basket of goods and services</strong> that 
              represents the typical consumption patterns of households in the economy. This basket is designed 
              to be representative of what ordinary consumers actually purchase, making the CPI a meaningful 
              measure of changes in the cost of living.
            </p>
            <p className="mt-4 leading-relaxed">
              The construction and calculation of the CPI involves a rigorous three-step methodology that ensures 
              accuracy and representativeness:
            </p>
            <div className="mt-5 space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border-l-4 border-primary">
                <strong className="text-primary">Step 1: Family Expenditure Survey</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  Government statisticians conduct detailed surveys of household spending patterns to determine 
                  how families allocate their budgets across different categories of goods and services. This 
                  information is used to assign <strong>weights</strong> to each category, reflecting its 
                  importance in the typical household budget. For example, if households spend 15% of their 
                  income on food, food receives a weight of 15% in the CPI calculation. These weights are 
                  updated regularly (typically annually) to reflect changing consumption patterns.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-secondary/10 to-transparent rounded-lg border-l-4 border-secondary">
                <strong className="text-secondary">Step 2: Price Collection</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  Price collectors record the prices of approximately <strong>680 representative items</strong> 
                  from a wide variety of retail outlets, supermarkets, and service providers across the country 
                  each month. These items are selected to represent the goods and services that households 
                  typically purchase. Prices are collected from multiple locations to ensure geographical 
                  representativeness and to capture regional variations.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border-l-4 border-accent">
                <strong className="text-accent">Step 3: Weighted Average Calculation</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  The percentage change in price for each item is multiplied by its weight, and these weighted 
                  price changes are summed to produce the overall inflation rate. This ensures that items which 
                  consume a larger share of household budgets have a proportionally larger impact on the 
                  measured inflation rate.
                </p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="CPI Calculation Example" type="application">
            <p className="leading-relaxed mb-4">
              The following example illustrates how the weighted average method calculates the inflation rate 
              from individual price changes:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-2">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-2">Category</th>
                    <th className="text-right py-2">Weight</th>
                    <th className="text-right py-2">Price Change</th>
                    <th className="text-right py-2">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Food &amp; Beverages</td>
                    <td className="text-right">60%</td>
                    <td className="text-right">+25%</td>
                    <td className="text-right text-primary">+15.0%</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Fuel &amp; Energy</td>
                    <td className="text-right">30%</td>
                    <td className="text-right">+8.3%</td>
                    <td className="text-right text-primary">+2.49%</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Housing</td>
                    <td className="text-right">10%</td>
                    <td className="text-right">+10%</td>
                    <td className="text-right text-primary">+1.0%</td>
                  </tr>
                  <tr className="font-semibold bg-muted/20">
                    <td className="py-2" colSpan={3}>Overall Inflation Rate</td>
                    <td className="text-right text-primary">18.49%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="font-mono text-center">
                Inflation = (25% × 0.60) + (8.3% × 0.30) + (10% × 0.10) = <strong>18.49%</strong>
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Notice how food, with its 60% weight, contributes 15 percentage points to the overall 18.49% 
              inflation rate. This demonstrates why the choice of weights is so important – categories with 
              larger weights have a greater influence on the measured inflation rate.
            </p>
          </NoteCard>

          <NoteCard title="Uses of the Consumer Price Index" type="application">
            <p className="leading-relaxed mb-4">
              The CPI serves several critical functions in economic policy and everyday economic life:
            </p>
            <ul className="space-y-4">
              <li>
                <strong className="text-primary">1. Monetary Policy Target:</strong>
                <p className="text-sm mt-1 leading-relaxed">
                  Central banks, such as the Bank of England, use CPI inflation as their primary measure of 
                  price stability. The inflation target (typically 2% in developed economies) guides interest 
                  rate decisions. If CPI inflation rises above target, the central bank may raise interest 
                  rates to cool demand and bring inflation back down.
                </p>
              </li>
              <li>
                <strong className="text-secondary">2. Indexation of Payments:</strong>
                <p className="text-sm mt-1 leading-relaxed">
                  Many payments are <strong>indexed</strong> (automatically adjusted) in line with inflation to 
                  maintain their real purchasing power. State pensions, welfare benefits, some wage contracts, 
                  and certain financial instruments are linked to CPI. This protects recipients from having 
                  their living standards eroded by inflation.
                </p>
              </li>
              <li>
                <strong className="text-accent">3. Deflating Nominal to Real Values:</strong>
                <p className="text-sm mt-1 leading-relaxed">
                  Economists use the CPI as a <strong>deflator</strong> to convert nominal values into real 
                  values. This enables meaningful comparisons of wages, GDP, and other economic variables 
                  across different time periods by removing the distorting effects of price changes.
                </p>
              </li>
            </ul>
          </NoteCard>

          <ExamTipBox title="CPI Limitations" variant="warning">
            <p className="mb-3">The CPI has several important limitations that students should understand:</p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Non-representative baskets:</strong> The average basket may not reflect the spending 
              patterns of specific groups (pensioners, students, high-income earners)</li>
              <li>• <strong>Quality changes:</strong> When products improve in quality, price increases may 
              partly reflect better quality rather than pure inflation – this is difficult to measure</li>
              <li>• <strong>New products:</strong> Innovative goods (smartphones, streaming services) may take 
              time to be included in the basket, missing their price changes in the early period</li>
              <li>• <strong>Substitution bias:</strong> When prices rise, consumers switch to cheaper 
              alternatives, but the fixed-weight CPI may overstate the actual cost increase</li>
              <li>• <strong>Regional variations:</strong> The national CPI may not reflect significant 
              differences in prices across regions of the country</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* Degrees of Inflation */}
        <ContentSection title="Degrees of Inflation">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-4">
              <div className="text-primary font-mono text-2xl mb-2">&lt;5%</div>
              <h4 className="font-semibold">Mild Inflation</h4>
              <p className="text-sm text-muted-foreground">Very mild inflation that can actually aid competitiveness and economic growth.</p>
            </div>
            <div className="glass-card p-4">
              <div className="text-secondary font-mono text-2xl mb-2">5-9%</div>
              <h4 className="font-semibold">Moderate Inflation</h4>
              <p className="text-sm text-muted-foreground">Mild inflation requiring control to prevent future difficulties.</p>
            </div>
            <div className="glass-card p-4">
              <div className="text-cambridge-orange font-mono text-2xl mb-2">10-19%</div>
              <h4 className="font-semibold">Serious Inflation</h4>
              <p className="text-sm text-muted-foreground">Builds pressure for wage demands and high interest rates. Strict policies essential.</p>
            </div>
            <div className="glass-card p-4">
              <div className="text-destructive font-mono text-2xl mb-2">&gt;50%</div>
              <h4 className="font-semibold">Hyperinflation</h4>
              <p className="text-sm text-muted-foreground">Economic structures collapse; currency becomes worthless domestically and internationally.</p>
            </div>
          </div>
        </ContentSection>

        {/* Causes of Inflation */}
        <ContentSection title="Causes of Inflation">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Economists identify three main theoretical explanations for inflation, each focusing on different 
            economic mechanisms. Understanding these causes is essential for selecting appropriate policy 
            responses and for exam analysis.
          </p>
          
          <InflationDiagrams />
          
          <NoteCard title="Demand-Pull Inflation" type="theory">
            <p className="leading-relaxed">
              <strong>Demand-pull inflation</strong> occurs when aggregate demand in the economy increases 
              faster than the economy's productive capacity can expand to meet it. When total spending (C + I + 
              G + X - M) rises while the economy's ability to produce goods and services remains relatively 
              fixed (especially in the short run), the excess demand pulls prices upward. This type of 
              inflation is often described as <em>"too much money chasing too few goods."</em>
            </p>
            <p className="mt-4 leading-relaxed">
              Demand-pull inflation is particularly evident when the economy is operating at or near 
              <strong> full employment</strong>. At this point, the Short-Run Aggregate Supply (SRAS) curve 
              becomes increasingly steep because firms find it difficult to increase output further – labour 
              and other resources are already fully employed. Any increase in aggregate demand at this stage 
              translates almost entirely into higher prices rather than increased real output.
            </p>
            <p className="mt-4">Sources of demand-pull pressure include:</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Rapid increases in consumer spending from optimistic households or rising incomes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Surging investment expenditure driven by confident business expectations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Expansionary fiscal policy through increased government spending (↑G) or tax cuts (↓T)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Export growth from improved international competitiveness or overseas economic growth
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Loose monetary policy with low interest rates encouraging borrowing and spending
              </li>
            </ul>
          </NoteCard>

          <NoteCard title="Cost-Push Inflation" type="theory">
            <p className="leading-relaxed">
              <strong>Cost-push inflation</strong> is associated with continuing rises in the costs of 
              production that cause the Short-Run Aggregate Supply curve to shift leftward. When firms face 
              higher costs for labour, raw materials, energy, or other inputs, they respond by raising their 
              prices to maintain profit margins. This cost increase is then "pushed" through to consumers in 
              the form of higher prices throughout the economy.
            </p>
            <p className="mt-4 leading-relaxed">
              Cost-push inflation creates the dangerous combination of <strong>stagflation</strong> – 
              simultaneous inflation and stagnation (falling output with rising unemployment). The leftward 
              shift of SRAS means that the new equilibrium has both a higher price level and lower real output 
              than before. This poses a severe policy dilemma because the standard remedy for inflation 
              (reducing demand) would worsen the output and employment situation.
            </p>
            <div className="mt-5 grid md:grid-cols-2 gap-3">
              <div className="p-4 border border-muted rounded-lg">
                <strong className="text-primary">Wage-Push Inflation:</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  Occurs when trade unions or workers successfully push for higher wages independently of 
                  productivity improvements or labour market conditions. Higher labour costs force firms to 
                  raise prices, which then leads to further wage demands – creating a wage-price spiral.
                </p>
              </div>
              <div className="p-4 border border-muted rounded-lg">
                <strong className="text-secondary">Profit-Push Inflation:</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  Monopolies or firms with significant market power may increase prices to boost profits, 
                  particularly if competitive pressures are weak. This "greedflation" can occur when firms 
                  exploit their pricing power, especially during periods of general price increases.
                </p>
              </div>
              <div className="p-4 border border-muted rounded-lg">
                <strong className="text-accent">Import-Price-Push Inflation:</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  Rising prices of imported goods, particularly essential commodities like oil, increase 
                  production costs throughout the economy. Oil price shocks have historically been major 
                  sources of cost-push inflation globally, as energy costs affect virtually every industry.
                </p>
              </div>
              <div className="p-4 border border-muted rounded-lg">
                <strong className="text-destructive">Tax-Push Inflation:</strong>
                <p className="text-sm mt-2 leading-relaxed">
                  Increases in indirect taxes (VAT, excise duties) directly add to consumer prices and 
                  contribute to measured inflation. Higher business taxes may also be passed on to consumers 
                  in the form of higher prices.
                </p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Monetary Inflation" type="theory">
            <p className="leading-relaxed">
              According to <strong>Monetarist economists</strong>, inflation is fundamentally a monetary 
              phenomenon – it occurs when the money supply grows faster than the economy's real output. The 
              theoretical foundation for this view is the <strong>Quantity Theory of Money</strong>, expressed 
              through the Fisher Equation:
            </p>
            <div className="mt-5 p-5 bg-muted/40 rounded-xl">
              <p className="font-semibold mb-3 text-center">The Fisher Equation (Equation of Exchange):</p>
              <p className="font-mono text-center text-2xl text-primary">MV = PT</p>
              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <div className="p-2 bg-background/50 rounded"><strong>M</strong> = Money Supply (total quantity of money in circulation)</div>
                <div className="p-2 bg-background/50 rounded"><strong>V</strong> = Velocity of circulation (how many times each unit of money changes hands)</div>
                <div className="p-2 bg-background/50 rounded"><strong>P</strong> = General Price level</div>
                <div className="p-2 bg-background/50 rounded"><strong>T</strong> = Volume of Transactions (real output)</div>
              </div>
            </div>
            <p className="mt-5 leading-relaxed">
              Monetarists argue that the velocity of money (V) and real output (T) are relatively stable in 
              the short run – V is determined by institutional factors like payment habits, and T is 
              constrained by the economy's productive capacity. Therefore, if the money supply (M) grows faster 
              than the growth in real transactions (T), the excess money must push up prices (P).
            </p>
            <p className="mt-4 leading-relaxed">
              The famous monetarist dictum, associated with Milton Friedman, states: <em>"Inflation is always 
              and everywhere a monetary phenomenon."</em> This view suggests that sustained inflation cannot 
              occur without excessive money creation, and that controlling the money supply is the key to 
              controlling inflation.
            </p>
          </NoteCard>
        </ContentSection>

        {/* Costs of Inflation */}
        <ContentSection title="Costs of Inflation">
          <AnalysisBlock title="Economic Consequences">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">1. Shoe Leather Costs</h4>
                <p className="text-sm mt-1">
                  High inflation erodes the purchasing power of idle money, encouraging people and firms 
                  to spend time and resources managing their cash holdings and searching for the best returns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">2. Menu Costs</h4>
                <p className="text-sm mt-1">
                  Businesses incur costs from frequently updating prices – printing new menus, catalogs, 
                  and price labels. This creates inefficiency across the economy.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">3. Redistribution Effects</h4>
                <p className="text-sm mt-1">
                  Inflation redistributes income away from those on fixed incomes (especially pensioners) 
                  and savers, toward those with pricing power and holders of real assets like property.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">4. Uncertainty and Investment</h4>
                <p className="text-sm mt-1">
                  Fluctuating inflation makes it difficult for firms to predict costs and revenues, 
                  discouraging long-term investment and reducing economic growth.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">5. Balance of Payments</h4>
                <p className="text-sm mt-1">
                  Higher inflation than trading partners makes exports less competitive and imports 
                  relatively cheaper, worsening the trade balance and potentially reducing GDP.
                </p>
              </div>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* Role of Expectations */}
        <ContentSection title="The Role of Expectations">
          <NoteCard title="Inflationary Spiral" type="theory">
            <p>
              Once started, inflation can become self-perpetuating through an <strong>inflationary spiral</strong>. 
              If firms and workers expect higher inflation, they will:
            </p>
            <ul className="mt-3 space-y-2">
              <li>• Demand higher wages to maintain real income</li>
              <li>• Set higher prices in anticipation of rising costs</li>
              <li>• Build inflation expectations into contracts and negotiations</li>
            </ul>
            <p className="mt-3">
              <strong>Inflation targeting</strong> by central banks aims to anchor expectations. 
              If the target is credible, it suppresses cost-push pressure by limiting wage demands 
              to the expected (low) rate of inflation.
            </p>
          </NoteCard>

          <NoteCard title="Anticipated vs. Unanticipated Inflation" type="application">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-primary/20 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Anticipated Inflation</h4>
                <p className="text-sm">
                  When inflation is correctly predicted, economic agents can adjust: firms update prices, 
                  interest rates include an inflation premium, and wages are negotiated to maintain real values.
                </p>
              </div>
              <div className="p-4 border border-destructive/20 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">Unanticipated Inflation</h4>
                <p className="text-sm">
                  Unexpected inflation causes greater harm – people and firms are caught unaware, 
                  leading to arbitrary redistribution and increased uncertainty about future planning.
                </p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Deflation */}
        <ContentSection title="Deflation">
          <NoteCard title="The Dangers of Falling Prices" type="theory">
            <p>
              <strong>Deflation</strong> is a persistent fall in the average level of prices. While falling 
              prices may seem beneficial, deflation caused by weak demand can have serious consequences:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <strong>Consumer Confidence:</strong> Consumers delay purchases expecting lower future prices, 
                further reducing demand.
              </li>
              <li>
                <strong>Investment:</strong> Businesses expect lower profits and reduce investment, 
                harming future growth potential.
              </li>
              <li>
                <strong>Unemployment:</strong> Falling demand leads to layoffs, creating a deflationary spiral 
                as incomes and spending fall further.
              </li>
              <li>
                <strong>Debt Burden:</strong> The real value of debt increases, making repayment more difficult 
                and potentially causing bankruptcies.
              </li>
            </ul>
          </NoteCard>

          <ExamTipBox title="The Ideal Rate" variant="gold">
            <p>
              Economists suggest that an ideal inflation rate is a positive <strong>1-2%</strong>. 
              This keeps the costs of inflation low while avoiding the dangers of deflation. 
              Very mild inflation is associated with economic growth and increasing prosperity.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Inflation is a sustained rise in the general price level, measured primarily by the CPI.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Three main causes: demand-pull (↑AD), cost-push (↓SRAS), and monetary (↑M faster than ↑Y).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Costs include: shoe leather, menu costs, redistribution, uncertainty, and trade balance deterioration.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Expectations are crucial – once embedded, inflation becomes self-perpetuating.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Deflation from weak demand is dangerous; ideal inflation is around 1-2%.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default Inflation;
