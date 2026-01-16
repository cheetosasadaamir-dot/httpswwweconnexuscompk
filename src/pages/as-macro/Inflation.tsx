import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import InflationDiagrams from '@/components/diagrams/InflationDiagrams';
import MoneySupplyDiagram from '@/components/diagrams/MoneySupplyDiagram';

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
        <div className="mb-8">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 2</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-3">
            Money &amp; Inflation
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the nature of money, the causes and measurement of inflation, and their macroeconomic consequences.
          </p>
        </div>

        {/* TOPIC 1: MONEY */}
        <ContentSection title="Topic 1: Money" className="mb-4">
          <NoteCard title="Supply of Money in Narrow and Broad Terms" type="definition">
            <p className="leading-relaxed">
              <strong>Money</strong> is defined as anything that is <strong>generally acceptable as a means of payment</strong> 
              for goods, services, and the settlement of debts. In modern economies, money takes various forms including 
              physical currency (notes and coins), bank deposits, and digital balances. The key characteristic that 
              distinguishes money from other assets is its universal acceptability in transactions – when you offer money 
              in exchange for goods, sellers accept it without question because they are confident they can use it to 
              purchase other goods in turn.
            </p>
          </NoteCard>

          <NoteCard title="Characteristics of Money" type="theory" className="mt-3">
            <p className="leading-relaxed mb-3">
              For any item to serve effectively as money, it must possess the following key characteristics:
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-primary">Acceptability:</strong> Money must be generally acceptable in an economy for the exchange of goods and services. This is the most fundamental requirement – currency issued by law is a valid medium of exchange because it is backed by government authority and public confidence.
              </p>
              <p>
                <strong className="text-primary">Divisibility:</strong> It must be acceptable in various denominations, allowing for transactions of any size without losing value. This enables the purchase of both expensive and low-value items using appropriate fractions of the monetary unit.
              </p>
              <p>
                <strong className="text-primary">Portability:</strong> This feature highlights that money can easily transfer from one place to another. Example: Electronic funds are the most portable form of money as compared to physical cash, which requires physical carrying.
              </p>
              <p>
                <strong className="text-primary">Durability:</strong> Money must be able to withstand physical wear and tear to remain usable over time. Modern currency exists in the form of digital computers and databases, making it highly durable compared to physical commodities.
              </p>
              <p>
                <strong className="text-primary">Scarcity:</strong> Money can be exchanged for goods and services now or in future, but it must remain scarce enough to maintain its value. Unlimited supply would make it worthless.
              </p>
              <p>
                <strong className="text-primary">Stability in Supply:</strong> The money supply needs to be stable over a long period. Excessive increases in supply lead to inflation, while decreases cause deflation – both creating economic instability.
              </p>
              <p>
                <strong className="text-primary">Uniformity:</strong> Each unit of money must be identical to every other unit of the same denomination, ensuring that one form of money converts easily to another.
              </p>
              <p>
                <strong className="text-primary">Stability in Value:</strong> Money must maintain purchasing power over time. Inflation erodes this stability, which is why central banks target low, stable inflation rates.
              </p>
              <p>
                <strong className="text-primary">Exchange Value:</strong> Money must have recognizable signs that cannot be easily replicated, providing security against counterfeiting and maintaining public trust in the currency.
              </p>
            </div>
          </NoteCard>

          <NoteCard title="The Four Functions of Money" type="theory" className="mt-3">
            <p className="leading-relaxed mb-3">
              There are 4 Main Functions of Money that define its role in the economy:
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-primary">1. Medium of Exchange:</strong> It can be used to buy goods and services. It helps overcome the problem of the barter system in which goods needed to be swapped. Without money, trade would require a "double coincidence of wants" – both parties must want exactly what the other is selling, which rarely occurs in practice.
              </p>
              <p>
                <strong className="text-primary">2. Measure of Value (Unit of Account):</strong> It is used to value goods, services and assets. It is used to compare value of one good with the other. The value is in the form of prices and prices are expressed in money. This helps in developing relative prices and gauge value. This feature helps overcome the problem in barter system of measuring value of one commodity against the other.
              </p>
              <p>
                <strong className="text-primary">3. Store of Value:</strong> It is used to hold today's wealth (savings) to buy goods and services in the future. It is better than commodities since commodities tend to wear out with time. However, it should always be noted that due to inflation money starts losing its value; however, in the short run money has efficient stability.
              </p>
              <p>
                <strong className="text-primary">4. Standard of Deferred Payment:</strong> Money helps people to borrow and lend. It helps in postponing future payments. Contracts can specify amounts to be paid in the future with confidence that the money will still be acceptable.
              </p>
            </div>
          </NoteCard>

          <NoteCard title="Bartering and Need for Exchange" type="application" className="mt-3">
            <p className="leading-relaxed mb-3">
              Before the development of money, economies relied on bartering. However, this system has several problems which countries developed beyond as economies grew:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-primary">Problems Associated with Barter:</strong>
              </p>
              <p>
                <strong>1. Double coincidence of wants:</strong> Two people engaged in trade must both demand what the other person is selling. This is not always the case, making trade extremely difficult and inefficient.
              </p>
              <p>
                <strong>2. Problem of Divisibility:</strong> There are several goods that cannot be divided. Example: two-thirds of a loaf is not helpful for trade. How would you pay for a small purchase with an indivisible commodity like a cow?
              </p>
              <p>
                <strong>3. Portability:</strong> In barter it was difficult to carry and move wealth. Example: Moving sacks of sugar to trade are very difficult as compared to taking currency notes.
              </p>
            </div>
          </NoteCard>

          <NoteCard title="Key Terms in Money" type="definition" className="mt-3">
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-primary">Cash and Bank Deposits:</strong> These represent the most liquid forms of money. Cash refers to physical notes and coins, while bank deposits are funds held in current accounts at banking institutions for safekeeping and easy access.
              </p>
              <p>
                <strong className="text-primary">Cheques:</strong> A written order directing a bank to pay money from the drawer's account. While not money itself, cheques facilitate the transfer of bank deposits between parties.
              </p>
              <p>
                <strong className="text-primary">Near Money:</strong> Assets that can be quickly and easily converted into cash with little or no loss of value. Examples include savings accounts, time deposits, treasury bills, and short-term government bonds.
              </p>
              <p>
                <strong className="text-primary">Liquidity:</strong> The ease with which an asset can be converted into a medium of exchange without significant loss of value. Cash is perfectly liquid; property is relatively illiquid.
              </p>
            </div>
          </NoteCard>

          <MoneySupplyDiagram />
        </ContentSection>

        {/* TOPIC 2: TYPES OF INFLATION */}
        <ContentSection title="Topic 2: Types of Inflation" className="mb-4">
          <NoteCard title="Inflation Defined" type="definition">
            <p className="leading-relaxed">
              <strong>Inflation</strong> is defined as a <strong>general and sustained increase in the price 
              level</strong> of goods and services in an economy over a period of time. This definition contains 
              two essential elements: the price increase must be <em>general</em> (affecting the overall price level) 
              and <em>sustained</em> (continuing over time rather than being a one-off adjustment). Inflation represents 
              a <strong>fall in the purchasing power of money</strong> – as prices rise, each unit of currency can 
              purchase fewer goods and services.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            <div className="glass-card p-4">
              <div className="text-primary font-mono text-xl mb-1">&lt;5%</div>
              <h4 className="font-semibold text-sm">Mild/Creeping Inflation</h4>
              <p className="text-xs text-muted-foreground mt-1">When the annual rate of inflation is below 5%. Very mild inflation that can actually aid competitiveness and economic growth. Considered healthy for the economy.</p>
            </div>
            <div className="glass-card p-4">
              <div className="text-secondary font-mono text-xl mb-1">5-10%</div>
              <h4 className="font-semibold text-sm">Galloping Inflation</h4>
              <p className="text-xs text-muted-foreground mt-1">When inflation rises to around 10-20%. Builds pressure for wage demands and high interest rates. Strict policies essential to prevent escalation.</p>
            </div>
            <div className="glass-card p-4">
              <div className="text-destructive font-mono text-xl mb-1">&gt;50%</div>
              <h4 className="font-semibold text-sm">Hyperinflation</h4>
              <p className="text-xs text-muted-foreground mt-1">When price levels are increasing at over 50% per month. Economic structures may collapse; currency becomes worthless. Examples: Zimbabwe 2008, Weimar Germany 1923.</p>
            </div>
            <div className="glass-card p-4">
              <div className="text-accent font-mono text-xl mb-1">↓ Price</div>
              <h4 className="font-semibold text-sm">Deflation (Opposite of Inflation)</h4>
              <p className="text-xs text-muted-foreground mt-1">A sustained fall in the general price level. Leads to increased value for money, but can be harmful if caused by weak demand.</p>
            </div>
          </div>

          <NoteCard title="Disinflation vs Deflation" type="application">
            <p className="leading-relaxed mb-3">
              <strong>Disinflation</strong> refers to a reduction in the rate of inflation – prices still rise, but more slowly than before. This is different from deflation where prices actually fall.
            </p>
            <div className="p-3 bg-muted/30 rounded-lg text-sm">
              <p className="font-semibold mb-2">Example Analysis:</p>
              <ul className="space-y-1">
                <li>• From Year 0 to Year 1: <strong>Disinflation</strong> – the % of inflation is going down but it is still in the positive zone.</li>
                <li>• Between Year 1 and Year 2: <strong>Deflation</strong> – prices are actually falling (negative inflation rate).</li>
                <li>• After Year 2 to 3.5: <strong>Inflation</strong> – prices are increasing at a rising rate.</li>
                <li>• After Year 3.5: <strong>Disinflation</strong> – inflation rate decreasing but still positive.</li>
              </ul>
            </div>
          </NoteCard>
        </ContentSection>

        {/* TOPIC 3: MEASUREMENT OF INFLATION */}
        <ContentSection title="Topic 3: Measurement of Inflation" className="mb-4">
          <NoteCard title="The Retail Price Index (RPI) and Consumer Price Index (CPI)" type="theory">
            <p className="leading-relaxed mb-3">
              The <strong>Consumer Price Index (CPI)</strong> and <strong>Retail Price Index (RPI)</strong> are the principal measures of inflation. They track the cost of a carefully selected <strong>basket of goods and services</strong> representing typical household consumption patterns.
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border-l-4 border-primary">
                <strong className="text-primary">Step 1: Base Year Selection</strong>
                <p className="mt-1">A normal economic year in which there are no political or economic imbalances prices are compared. Price level in base year is represented by 100.</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-secondary/10 to-transparent rounded-lg border-l-4 border-secondary">
                <strong className="text-secondary">Step 2: Family Expenditure Survey</strong>
                <p className="mt-1">Consumers spend much more of their incomes on certain goods and services and these should be given greater importance in the index. For instance, consumers spend more of their incomes on bread than on television cable.</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border-l-4 border-accent">
                <strong className="text-accent">Step 3: Weighting</strong>
                <p className="mt-1">Commodities should be given a weight which reflects their relative importance in consumer spending:</p>
                <p className="font-mono mt-2 text-center">Weight = (Expenditure on Good / Total Expenditure) × 100</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-cambridge-gold/10 to-transparent rounded-lg border-l-4 border-cambridge-gold">
                <strong className="text-cambridge-gold">Step 4: Index Calculation</strong>
                <p className="mt-1">Indexes are calculated using the following formula:</p>
                <p className="font-mono mt-2 text-center">Index = (Current Year Price / Base Year Price) × 100</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border-l-4 border-primary">
                <strong className="text-primary">Step 5: Weighted Index</strong>
                <p className="mt-1">Weights are multiplied by indexes to calculate the weighted indexes:</p>
                <p className="font-mono mt-2 text-center">Weighted Index = Index × Weight</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-secondary/10 to-transparent rounded-lg border-l-4 border-secondary">
                <strong className="text-secondary">Step 6: RPI/CPI Calculation</strong>
                <p className="mt-1">RPI is obtained by taking the sum of all weighted indexes and dividing by total weights:</p>
                <p className="font-mono mt-2 text-center">RPI = Total Weighted Index / Total Weights</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border-l-4 border-accent">
                <strong className="text-accent">Step 7: Rate of Inflation</strong>
                <p className="mt-1">Rate of inflation is calculated by taking the percentage change in the current year average price (RPI of current year) to the base year:</p>
                <p className="font-mono mt-2 text-center">Rate of Inflation = ((RPI<sub>c</sub> − RPI<sub>b</sub>) / RPI<sub>b</sub>) × 100</p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="CPI Calculation Example" type="application" className="mt-3">
            <p className="leading-relaxed mb-3">
              The following example illustrates how the weighted average method calculates the inflation rate:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-2">Product</th>
                    <th className="text-right py-2">% of Income Spent</th>
                    <th className="text-right py-2">Price Change %</th>
                    <th className="text-right py-2">Weighted Index</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">P</td>
                    <td className="text-right">10%</td>
                    <td className="text-right">+8%</td>
                    <td className="text-right text-primary">0.80</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Q</td>
                    <td className="text-right">15%</td>
                    <td className="text-right">+6%</td>
                    <td className="text-right text-primary">0.90</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">R</td>
                    <td className="text-right">25%</td>
                    <td className="text-right">+4%</td>
                    <td className="text-right text-primary">1.00</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">S</td>
                    <td className="text-right">50%</td>
                    <td className="text-right">-9%</td>
                    <td className="text-right text-destructive">-4.50</td>
                  </tr>
                  <tr className="font-semibold bg-muted/20">
                    <td className="py-2" colSpan={3}>Overall Rate of Inflation (RPI)</td>
                    <td className="text-right text-primary">-1.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-3 text-muted-foreground">
              The negative result indicates deflation occurred in this period, as the weighted sum of price changes is negative.
            </p>
          </NoteCard>

          <NoteCard title="Difference between RPI and CPI" type="concept" className="mt-3">
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-primary/10 rounded-lg">
                <h5 className="font-semibold text-primary mb-2">Consumer Price Index (CPI)</h5>
                <ul className="space-y-1">
                  <li>• CPI excludes housing costs (mortgage interest payments)</li>
                  <li>• Takes into account all individuals, including high-income pensioners</li>
                  <li>• Calculated using geometric mean</li>
                  <li>• International standard for comparison</li>
                </ul>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <h5 className="font-semibold text-secondary mb-2">Retail Price Index (RPI)</h5>
                <ul className="space-y-1">
                  <li>• RPI includes housing costs and mortgage interest</li>
                  <li>• Excludes some high earners and pensioners</li>
                  <li>• Calculated using arithmetic mean</li>
                  <li>• Used for wage negotiations in UK</li>
                </ul>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Money Values vs Real Values" type="theory" className="mt-3">
            <p className="leading-relaxed mb-3">
              Understanding the distinction between <strong>nominal (money) values</strong> and <strong>real values</strong> is essential when analysing an economy experiencing inflation.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-primary mb-2">Money Values (Nominal)</h5>
                <p className="text-sm">The face value or current monetary value. A worker earning £6,000 this year has a nominal income of £6,000.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-secondary mb-2">Real Values</h5>
                <p className="text-sm">Values adjusted for inflation. Real values show actual purchasing power.</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-primary/10 rounded-lg text-sm">
              <p className="font-semibold mb-2">Example Calculation:</p>
              <p>If nominal income rises from £5,000 to £6,000 (20% increase), but CPI rises from 100 to 125:</p>
              <p className="font-mono mt-2">Real Income = (£6,000 × 100) / 125 = £4,800</p>
              <p className="mt-2">Real change = (£4,800 - £5,000) / £5,000 × 100 = <strong className="text-destructive">-4% decrease</strong></p>
              <p className="mt-2 text-muted-foreground">Despite a 20% nominal increase, real income fell by 4% due to inflation.</p>
            </div>
          </NoteCard>

          <ExamTipBox title="CPI Limitations" variant="warning" className="mt-3">
            <ul className="space-y-1 text-sm">
              <li>• <strong>Non-representative baskets:</strong> The average basket may not reflect specific groups</li>
              <li>• <strong>Quality changes:</strong> Price increases may reflect better quality, not pure inflation</li>
              <li>• <strong>New products:</strong> Innovative goods take time to be included in the basket</li>
              <li>• <strong>Substitution bias:</strong> Consumers switch to cheaper alternatives</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* TOPIC 4: CAUSES AND EFFECTS OF INFLATION */}
        <ContentSection title="Topic 4: Causes and Effects of Inflation" className="mb-4">
          <p className="text-muted-foreground mb-4 text-sm">
            There are four main causes of inflation: Demand-pull, Cost-push, Monetary, and Imported Inflation.
          </p>
          
          <InflationDiagrams />
          
          <NoteCard title="1. Demand-Pull Inflation" type="theory" className="mt-4">
            <p className="leading-relaxed">
              <strong>Demand-pull inflation</strong> occurs when aggregate demand in the economy increases faster than 
              the economy's productive capacity. When total spending (AD = C + I + G + (X - M)) rises while supply 
              remains relatively fixed, the excess demand pulls prices upward.
            </p>
            <p className="mt-3 leading-relaxed">
              As AD increases from AD to AD₁, price level rises from P to P₁ because the economy was operating below 
              full employment. When the economy reaches full capacity, further increases in AD (from AD₂ to AD₃) 
              cause purely inflationary effects with no increase in real output.
            </p>
            <div className="mt-3 p-3 bg-primary/10 rounded-lg">
              <h5 className="font-semibold text-primary mb-2 text-sm">Reasons for Increase in AD:</h5>
              <p className="text-sm">AD = C + I + G + (X - M)</p>
              <ul className="grid md:grid-cols-2 gap-1 text-sm mt-2">
                <li>• ↑ Consumer confidence/income → ↑C</li>
                <li>• ↑ Business optimism → ↑I</li>
                <li>• ↑ Government spending (healthcare, schools) → ↑G</li>
                <li>• Currency depreciation → ↑(X-M)</li>
                <li>• ↓ Interest rates → cheaper borrowing</li>
                <li>• ↓ Taxes → higher disposable income</li>
                <li>• ↑ Money supply → more spending power</li>
                <li>• Capacity building technology investments</li>
              </ul>
            </div>
          </NoteCard>

          <NoteCard title="2. Cost-Push Inflation" type="theory" className="mt-3">
            <p className="leading-relaxed">
              <strong>Cost-push inflation</strong> occurs when there are continuing rises in the costs of production 
              that cause the SRAS curve to shift leftward. When firms face higher costs for labour, raw materials, 
              or energy, they raise prices to maintain profit margins. This creates <strong>stagflation</strong> – 
              simultaneous inflation and falling output.
            </p>
            <div className="mt-3 grid md:grid-cols-2 gap-2">
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-primary text-sm">Wage-Push Inflation:</strong>
                <p className="text-xs mt-1">Trade unions push for higher wages beyond productivity gains, creating a wage-price spiral.</p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-secondary text-sm">Profit-Push Inflation:</strong>
                <p className="text-xs mt-1">Monopolies increase prices to boost profits when competition is weak.</p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-accent text-sm">Import-Price-Push:</strong>
                <p className="text-xs mt-1">Rising import prices (especially oil) increase production costs economy-wide.</p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-destructive text-sm">Tax-Push Inflation:</strong>
                <p className="text-xs mt-1">Increases in indirect taxes (VAT) directly add to consumer prices.</p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="3. Monetary Inflation" type="theory" className="mt-3">
            <p className="leading-relaxed">
              The monetarists believe that the <strong>main cause of inflation is the growth of money supply</strong>. 
              They believe that excess demand and rising costs are symptoms of inflation and not the cause. Their 
              argument is based on the <strong>Quantity Theory of Money</strong>:
            </p>
            <div className="mt-3 p-4 bg-muted/40 rounded-xl">
              <p className="font-mono text-center text-xl text-primary">MV = PY</p>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div className="p-2 bg-background/50 rounded"><strong>M</strong> = Quantity of Money</div>
                <div className="p-2 bg-background/50 rounded"><strong>V</strong> = Velocity of circulation</div>
                <div className="p-2 bg-background/50 rounded"><strong>P</strong> = Price level</div>
                <div className="p-2 bg-background/50 rounded"><strong>Y</strong> = Level of output</div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              It is assumed that in the short-run <strong>V</strong> and <strong>Y</strong> don't change much. 
              Therefore any change in <strong>M</strong>, the quantity of money, will cause prices <strong>P</strong> to rise.
            </p>
          </NoteCard>

          <NoteCard title="4. Imported Inflation" type="theory" className="mt-3">
            <p className="leading-relaxed">
              <strong>Imported inflation</strong> occurs due to higher import prices, forcing up cost of production 
              and therefore causing domestic inflation. This is particularly significant for economies that rely 
              heavily on imported raw materials and energy. Currency depreciation amplifies this effect by making 
              all imports more expensive.
            </p>
          </NoteCard>

          <NoteCard title="Effects of Inflation" type="application" className="mt-3">
            <h5 className="font-semibold text-primary mb-2 text-sm">Advantages of Inflation:</h5>
            <div className="space-y-2 text-sm mb-4">
              <p>
                <strong>Economic Signal:</strong> Creeping inflation might signal investors that the economy is expanding and there is rising demand, encouraging investment.
              </p>
              <p>
                <strong>Government Debt:</strong> The value of government debt and interest payments will decline in real terms, reducing the real burden of past borrowing.
              </p>
              <p>
                <strong>Tax Revenue:</strong> Inflation might shift individuals into higher tax brackets (fiscal drag) which can generate more tax revenue for the government, hence higher government spending on merit goods.
              </p>
              <p>
                <strong>Employment:</strong> Demand-pull inflation is associated with rising GDP and employment as the economy expands.
              </p>
            </div>

            <h5 className="font-semibold text-destructive mb-2 text-sm">Disadvantages of Inflation:</h5>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-destructive">Menu Costs:</strong> Businesses incur costs from frequently updating prices – printing new menus, catalogues, and price labels, creating inefficiency.
              </p>
              <p>
                <strong className="text-destructive">Shoe Leather Costs:</strong> High inflation encourages people to spend time and resources managing cash holdings and searching for best returns.
              </p>
              <p>
                <strong className="text-destructive">Consumers:</strong> Higher prices reduce real purchasing power, lowering living standards, especially for those on fixed incomes.
              </p>
              <p>
                <strong className="text-destructive">Lenders:</strong> The real value of repayments falls, redistributing wealth from lenders to borrowers.
              </p>
              <p>
                <strong className="text-destructive">Fixed Income Earners:</strong> Pensions and fixed contracts lose purchasing power over time of repayment.
              </p>
              <p>
                <strong className="text-destructive">Low Income Earners:</strong> Spend larger proportion of income on necessities, hit hardest by rising prices.
              </p>
              <p>
                <strong className="text-destructive">Exporters:</strong> Higher domestic prices make exports less competitive internationally.
              </p>
              <p>
                <strong className="text-destructive">Importers (initially benefit):</strong> Foreign goods become relatively cheaper, but trade deficit may worsen.
              </p>
              <p>
                <strong className="text-destructive">Employers:</strong> Face pressure for wage increases to maintain workers' purchasing power.
              </p>
              <p>
                <strong className="text-destructive">Business Confidence:</strong> Uncertainty about future costs and prices discourages long-term investment decisions.
              </p>
              <p>
                <strong className="text-destructive">Hoarding and Black Markets:</strong> High inflation encourages hoarding of goods and creates distortions in allocation.
              </p>
            </div>
          </NoteCard>

          <AnalysisBlock title="Factors Affecting Severity of Inflation" type="analysis" className="mt-3">
            <div className="space-y-2 text-sm">
              <p><strong>1. The cause of inflation:</strong> Demand-pull may indicate growth; cost-push causes stagflation with fall in output.</p>
              <p><strong>2. The rate:</strong> Mild inflation (1-2%) is less harmful than galloping or hyperinflation.</p>
              <p><strong>3. Accelerating or stable rate:</strong> An accelerating rate is more destabilizing and harder to manage.</p>
              <p><strong>4. Expected or sudden:</strong> Unanticipated inflation causes greater harm as agents cannot adjust.</p>
              <p><strong>5. Comparison with other countries:</strong> Higher inflation than trading partners damages international competitiveness.</p>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* TOPIC 5: DEFLATION */}
        <ContentSection title="Topic 5: Deflation" className="mb-4">
          <NoteCard title="Understanding Deflation" type="definition">
            <p className="leading-relaxed">
              <strong>Deflation</strong> is a persistent fall in the general price level. It can occur for the following reasons:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>1. Increase in Aggregate Supply (AS)</li>
              <li>2. Decrease in Aggregate Demand (AD)</li>
            </ul>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <NoteCard title="1. Increase in Aggregate Supply (Good Deflation)" type="theory">
              <p className="text-sm leading-relaxed">
                This occurs due to improvements in technology, productivity gains, and better education. As the AS₁ 
                curve shifts rightward to AS₂, reducing the general price level from P₁ to P₂ and <strong>increasing</strong> 
                national output from Y₁ to Y₂. This type of deflation is <strong>benign or non-threatening</strong>.
              </p>
              <div className="mt-2 p-2 bg-primary/10 rounded text-xs">
                <strong>Effects:</strong> Lower prices + Higher output + Maintained employment
              </div>
            </NoteCard>

            <NoteCard title="2. Decrease in Aggregate Demand (Bad Deflation)" type="theory">
              <p className="text-sm leading-relaxed">
                AD can decrease in times of economic recession and rising level of unemployment. This type of deflation 
                is <strong>harmful for the economy</strong> as it reduces national output and standard of living. As 
                AD₁ shifts leftwards to AD₂, price level falls from P₁ to P₂ and output <strong>decreases</strong> from Y₁ to Y₂.
              </p>
              <div className="mt-2 p-2 bg-destructive/10 rounded text-xs">
                <strong>Effects:</strong> Lower prices + Lower output + Rising unemployment
              </div>
            </NoteCard>
          </div>

          <NoteCard title="Consequences of Deflation" type="application" className="mt-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <h5 className="font-semibold text-primary mb-2 text-sm">Advantages</h5>
                <ul className="space-y-1 text-xs">
                  <li>• Deflation from increased efficiency and lower costs of production is beneficial</li>
                  <li>• The right kind of deflation involves lower prices through increased productivity and better technology</li>
                  <li>• Improved international competitiveness – if one country has deflation while others have inflation, exports become more competitive</li>
                </ul>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <h5 className="font-semibold text-destructive mb-2 text-sm">Disadvantages</h5>
                <ul className="space-y-1 text-xs">
                  <li>• Deflation can cause layoffs and rising unemployment</li>
                  <li>• This causes human suffering through job losses</li>
                  <li>• Consumers delay purchases expecting lower future prices (deflationary spiral)</li>
                  <li>• Real value of debt increases, making repayment harder</li>
                  <li>• Interest rates cannot fall below zero (zero lower bound)</li>
                </ul>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* TOPIC 6: POLICIES TO CORRECT INFLATION & DEFLATION */}
        <ContentSection title="Topic 6: Policies to Correct Inflation &amp; Deflation" className="mb-4">
          <NoteCard title="Policies to Correct Inflation" type="theory">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-primary text-sm">1. Contractionary Fiscal Policy (Reduces AD)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  In this the government reduces government spending and increases taxes. Reducing government spending 
                  and increasing taxation reduces consumption and government spending.
                </p>
                <div className="mt-2 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↑ Tax → ↓ Income → ↓ Consumption → ↓ AD → ↓ Inflation
                </div>
                <div className="mt-1 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↓ Govt. Spending → ↓ AD → ↓ Inflation
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-primary text-sm">2. Contractionary Monetary Policy (Reduces AD)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  In this the government (central bank) reduces the money supply and increases the interest rates.
                </p>
                <div className="mt-2 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↓ Money Supply → Less money to spend → ↓ Consumption → ↓ Inflation
                </div>
                <div className="mt-1 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↑ Interest Rates → ↓ Borrowing → ↓ Consumption → ↓ Inflation
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-primary text-sm">3. Supply Side Policies (Increases AS)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  Privatization, deregulation, and investment in education/training can be used to increase the supply 
                  side of the economy. This shifts LRAS rightward, allowing higher output at lower prices.
                </p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Policies to Correct Deflation" type="theory" className="mt-3">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-secondary text-sm">1. Expansionary Fiscal Policy (Increases AD)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  Reducing taxes and increasing government spending.
                </p>
                <div className="mt-2 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↓ Tax → ↑ Income → ↑ Consumption → ↑ AD → ↓ Deflation
                </div>
                <div className="mt-1 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↑ Govt. Spending → ↑ AD → ↓ Deflation
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-secondary text-sm">2. Expansionary Monetary Policy (Increases AD)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  Reducing interest rates and increasing money supply.
                </p>
                <div className="mt-2 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↓ Interest Rate → ↑ Borrowing → ↑ Consumption → ↑ AD → ↓ Deflation
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-secondary text-sm">3. Print Money (Increases AD)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  Quantitative easing – central bank creates new money to stimulate the economy and achieve the right 
                  amount of inflation.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-secondary text-sm">4. Devaluation (Increases AD)</h5>
                <p className="text-sm mt-1 leading-relaxed">
                  Deliberately lowering the exchange rate to boost exports and reduce imports.
                </p>
                <div className="mt-2 p-2 bg-muted/30 rounded text-xs font-mono">
                  ↑ Exports, ↓ Imports → ↑ AD → ↓ Deflation
                </div>
                <p className="text-xs mt-1 text-muted-foreground">
                  This works by making exports cheaper for foreigners and imports more expensive for domestic consumers.
                </p>
              </div>
            </div>
          </NoteCard>

          <ExamTipBox title="Policy Trade-offs" variant="gold" className="mt-3">
            <p className="text-sm">
              Policies to control inflation (contractionary) often conflict with growth and employment objectives. 
              Raising interest rates reduces inflation but may cause recession. Similarly, policies to combat 
              deflation may risk creating inflation. The ideal target is low, stable inflation around <strong>2%</strong>.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-5">
            <h3 className="font-serif text-lg text-gradient mb-3">Key Takeaways</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Money has 4 functions (medium of exchange, store of value, unit of account, standard of deferred payment) and 9 characteristics.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Types of inflation: Mild (&lt;5%), Galloping (10-20%), Hyperinflation (&gt;50% monthly).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                CPI/RPI measures inflation using weighted basket of goods; Rate = ((CPI<sub>c</sub> - CPI<sub>b</sub>)/CPI<sub>b</sub>) × 100.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Four causes: Demand-pull (↑AD), Cost-push (↑costs→↓SRAS), Monetary (MV=PY), Imported (↑import prices).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Effects include menu costs, shoe leather costs, redistribution, and uncertainty.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Deflation can be benign (↑AS) or harmful (↓AD); policies include fiscal/monetary expansion.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Real Value = (Nominal Value / Price Index) × 100; always distinguish money vs real values.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default Inflation;
