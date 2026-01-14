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
            <p>
              <strong>Inflation</strong> is a general and sustained increase in the price level. 
              It represents a fall in the purchasing power of money – each unit of currency buys 
              fewer goods and services than before.
            </p>
            <p className="mt-3">
              In times of inflation, <strong>nominal measurements</strong> (using current prices) 
              will be higher than <strong>real measurements</strong> (adjusted for price changes). 
              Economists focus on real values to analyze true economic performance.
            </p>
          </NoteCard>
        </ContentSection>

        {/* Measuring Inflation */}
        <ContentSection title="Measuring Inflation: The Consumer Price Index">
          <NoteCard title="The CPI Methodology" type="theory">
            <p>
              The <strong>Consumer Price Index (CPI)</strong> is the most important measure of inflation. 
              It tracks changes in the cost of a representative basket of goods and services that reflects 
              typical household spending patterns.
            </p>
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <strong>Step 1:</strong> Survey households to determine spending patterns and assign weights 
                to different categories (food, fuel, housing, etc.)
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <strong>Step 2:</strong> Record price changes for approximately 680 selected items from 
                various retail outlets each month
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <strong>Step 3:</strong> Calculate the weighted average price change to determine the 
                overall inflation rate
              </div>
            </div>
          </NoteCard>

          <NoteCard title="CPI Calculation Example" type="application">
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-2">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-2">Item</th>
                    <th className="text-right py-2">Base Price</th>
                    <th className="text-right py-2">Weight</th>
                    <th className="text-right py-2">Year 1 Price</th>
                    <th className="text-right py-2">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Food</td>
                    <td className="text-right">$2.00</td>
                    <td className="text-right">60%</td>
                    <td className="text-right">$2.50</td>
                    <td className="text-right text-primary">25%</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Fuel</td>
                    <td className="text-right">$3.00</td>
                    <td className="text-right">30%</td>
                    <td className="text-right">$3.25</td>
                    <td className="text-right text-primary">8.3%</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">Housing</td>
                    <td className="text-right">$5.00</td>
                    <td className="text-right">10%</td>
                    <td className="text-right">$5.50</td>
                    <td className="text-right text-primary">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="font-mono text-center">
                Inflation = (25% × 0.6) + (8.3% × 0.3) + (10% × 0.1) = <strong>18.49%</strong>
              </p>
            </div>
          </NoteCard>

          <NoteCard title="Uses of the CPI" type="application">
            <ul className="space-y-3">
              <li>
                <strong>1. Policy Target:</strong> Central banks use CPI as a measure of price stability – 
                one of the key macroeconomic objectives.
              </li>
              <li>
                <strong>2. Indexation:</strong> Payments such as pensions, wages, and benefits may be 
                indexed (automatically adjusted) to maintain purchasing power.
              </li>
              <li>
                <strong>3. Deflator:</strong> Converting nominal values to real values for economic analysis.
              </li>
            </ul>
          </NoteCard>

          <ExamTipBox title="CPI Limitations" variant="warning">
            <ul className="space-y-1 text-sm">
              <li>• The basket may not reflect all households (e.g., pensioners, high earners)</li>
              <li>• Quality improvements are difficult to account for</li>
              <li>• New products may not be included quickly enough</li>
              <li>• Regional price variations are not captured</li>
              <li>• The substitution effect (consumers switching to cheaper alternatives) is understated</li>
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
          <InflationDiagrams />
          
          <NoteCard title="Demand-Pull Inflation" type="theory">
            <p>
              <strong>Demand-pull inflation</strong> occurs when aggregate demand increases faster than 
              aggregate supply can respond. This is particularly evident when the economy is near or at 
              full employment, where the SRAS curve becomes steep.
            </p>
            <p className="mt-3">Sources of demand-pull pressure include:</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Rapid increases in consumption from optimistic households</li>
              <li>• Surging investment expenditure by confident firms</li>
              <li>• Expansionary fiscal policy (↑G or ↓T)</li>
              <li>• Export growth from improved international competitiveness</li>
              <li>• Loose monetary policy reducing interest rates</li>
            </ul>
          </NoteCard>

          <NoteCard title="Cost-Push Inflation" type="theory">
            <p>
              <strong>Cost-push inflation</strong> is associated with continuing rises in production costs, 
              causing leftward shifts in the SRAS curve. Firms respond by raising prices and reducing output, 
              leading to the dangerous combination of inflation and stagnation (stagflation).
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-primary">Wage-Push:</strong>
                <p className="text-sm mt-1">Trade unions push up wages independently of labor demand</p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-primary">Profit-Push:</strong>
                <p className="text-sm mt-1">Monopoly firms increase prices to boost profits</p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-primary">Import-Price-Push:</strong>
                <p className="text-sm mt-1">Rising import prices (e.g., oil) increase production costs</p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <strong className="text-primary">Tax-Push:</strong>
                <p className="text-sm mt-1">Increased indirect taxes add to the cost of living</p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Monetary Inflation" type="theory">
            <p>
              According to <strong>Monetarists</strong>, inflation is fundamentally a monetary phenomenon. 
              If the money supply grows faster than real output, it will force up prices.
            </p>
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <p className="font-semibold mb-2">The Fisher Equation:</p>
              <p className="font-mono text-center text-lg">MV = PT</p>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div><strong>M</strong> = Money Supply</div>
                <div><strong>V</strong> = Velocity of circulation</div>
                <div><strong>P</strong> = Price level</div>
                <div><strong>T</strong> = Quantity of transactions</div>
              </div>
            </div>
            <p className="mt-3 text-sm">
              Monetarists argue that V and T are relatively stable, so increases in M directly 
              translate to increases in P (inflation).
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
