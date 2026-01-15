import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import ContentSection from '@/components/ContentSection';
import CircularFlowDiagram from '@/components/diagrams/CircularFlowDiagram';
import ConsumptionFunctionDiagram from '@/components/diagrams/ConsumptionFunctionDiagram';
import KeynesianCrossDiagram from '@/components/diagrams/KeynesianCrossDiagram';
import MultiplierDiagram from '@/components/diagrams/MultiplierDiagram';
import MECCurveDiagram from '@/components/diagrams/MECCurveDiagram';
import AcceleratorDiagram from '@/components/diagrams/AcceleratorDiagram';
import ParadoxOfThriftDiagram from '@/components/diagrams/ParadoxOfThriftDiagram';

const NationalIncome = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              A2 Level • Chapter 2
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-2">
            Keynesian Theory of Income & Employment
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            National income measurement, circular flow, Keynesian consumption function, investment theory, and the multiplier effect.
          </p>
        </motion.div>

        {/* Topic 1: Measuring National Income */}
        <ContentSection title="Topic 1: Measuring National Income" id="measuring-national-income">
          <NoteCard title="Definition of National Income" type="definition">
            <p className="text-sm">
              <strong>National Income</strong> is the total amount of money earned within a country. It represents the aggregate value of all final goods and services produced in an economy over a specific period, typically one year.
            </p>
          </NoteCard>

          <div className="overflow-x-auto my-3">
            <table className="w-full text-xs border border-muted rounded-lg overflow-hidden">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left py-2 px-3 font-semibold">Concept</th>
                  <th className="text-left py-2 px-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-muted">
                  <td className="py-2 px-3 font-medium text-cambridge-cyan">GDP</td>
                  <td className="py-2 px-3 text-muted-foreground">
                    Value of final goods/services produced <strong>within a country</strong>, regardless of ownership.
                  </td>
                </tr>
                <tr className="border-t border-muted">
                  <td className="py-2 px-3 font-medium text-cambridge-magenta">GNP</td>
                  <td className="py-2 px-3 text-muted-foreground">
                    Value by factors <strong>owned by citizens</strong>, regardless of location.
                    <span className="ml-1 font-mono text-[10px]">GNP = GDP + NPIA</span>
                  </td>
                </tr>
                <tr className="border-t border-muted">
                  <td className="py-2 px-3 font-medium text-cambridge-green">NNP</td>
                  <td className="py-2 px-3 text-muted-foreground">
                    Net income after deducting depreciation.
                    <span className="ml-1 font-mono text-[10px]">NNP = GNP - Depreciation</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <NoteCard title="Methods of Calculating National Income" type="concept">
            <p className="mb-4">
              There are <strong>three methods</strong> of calculating national income, and in theory, 
              all three should yield the same result:
            </p>
            <div className="text-center p-4 bg-primary/10 rounded-lg mb-4">
              <p className="text-xl font-mono font-bold text-primary">
                Output = Income = Expenditure
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-cambridge-cyan/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-cyan mb-2">1. Expenditure Method</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  This method adds up all spending in the economy.
                </p>
                <p className="font-mono text-xs">GDP = C + I + G + (X - M)</p>
              </div>
              <div className="p-3 bg-cambridge-magenta/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-magenta mb-2">2. Income Method</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  This method adds up all incomes earned by factors of production.
                </p>
                <p className="font-mono text-xs">Wages + Interest + Rent + Profits</p>
              </div>
              <div className="p-3 bg-cambridge-green/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-green mb-2">3. Output Method</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  This method adds up the value of all final goods and services produced.
                </p>
                <p className="font-mono text-xs">Sum of Value Added</p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Market Price vs. Factor Cost" type="application">
            <p>
              When using the expenditure method, we must distinguish between GDP at market prices 
              and GDP at factor cost:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <strong>Market price is too high</strong> because of indirect taxes (e.g., VAT, sales tax).
              </li>
              <li>
                <strong>Market price is too low</strong> because of subsidies provided by the government.
              </li>
            </ul>
            <div className="mt-4 p-3 bg-muted/30 rounded-lg font-mono text-sm">
              GDP at Factor Cost = GDP at Market Price - Indirect Taxes + Subsidies
            </div>
          </NoteCard>

          <NoteCard title="Real vs. Nominal GDP (GDP Deflator)" type="formula">
            <p>
              <strong>Real national income</strong> is calculated by adjusting national income figures 
              for inflation. The retail price index is not used as it only considers consumer prices. 
              A more complex measure of inflation is used called the <strong>GDP Deflator</strong>. 
              This converts money GDP (nominal GDP) to real GDP.
            </p>
            <div className="mt-4 text-center p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/20">
              <p className="text-xl font-mono font-bold text-cambridge-orange">
                Real GDP = (Money GDP × Base Year Index) / Current Price Index
              </p>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Topic 2: Keynesians and Monetarists */}
        <ContentSection title="Topic 2: Keynesians and Monetarists" id="keynesians-monetarists">
          <div className="grid md:grid-cols-2 gap-6">
            <NoteCard title="Keynesian View of the Economy" type="theory">
              <p>
                According to the Keynesian perspective, up to full employment the aggregate supply is 
                <strong> horizontal (perfectly elastic)</strong>. An increase in aggregate demand increases 
                output and employment, <strong>not prices</strong>. Only when full employment is reached 
                will prices begin to increase.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                The government should control aggregate demand to ensure equilibrium occurs at full employment. 
                This justifies activist fiscal policy during recessions.
              </p>
              <div className="mt-3 p-2 bg-primary/10 rounded text-sm">
                <strong>Key implication:</strong> Demand management is effective in changing real output.
              </div>
            </NoteCard>

            <NoteCard title="Monetarist (Classical) View" type="theory">
              <p>
                According to the Monetarist perspective, aggregate supply is <strong>vertical</strong> 
                at the natural rate of output. Any increase in AD increases the <strong>price level</strong> 
                but not output and employment.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                To increase output and employment, supply-side policies are needed to shift AS to the right. 
                Monetary policy should focus on controlling inflation.
              </p>
              <div className="mt-3 p-2 bg-secondary/10 rounded text-sm">
                <strong>Key implication:</strong> Only supply-side policies can increase real output.
              </div>
            </NoteCard>
          </div>

          <ExamTipBox title="Cambridge Examiner Insight">
            <p>
              When answering questions on macroeconomic policy, always consider <strong>both views</strong>. 
              Keynesian analysis is more relevant for short-run analysis with spare capacity, while 
              Monetarist analysis applies to the long run or when the economy is at full employment.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Topic 3: Circular Flow of Income */}
        <ContentSection title="Topic 3: Circular Flow of Income" id="circular-flow">
          <NoteCard title="The Circular Flow Model" type="concept">
            <p>
              The circular flow model is a simplified representation of how the basic decision-making 
              units of an economy—<strong>households</strong>, <strong>firms</strong>, the <strong>government</strong>, 
              and in an open economy, the <strong>foreign sector</strong>—interact with each other.
            </p>
            <p className="mt-3">
              The model describes two types of flows between these economic agents:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><strong>Real flows:</strong> Flows of factors of production and goods/services</li>
              <li><strong>Monetary flows:</strong> Flows of expenditures and incomes (wages, rent, interest, profit)</li>
            </ul>
          </NoteCard>

          <div className="my-4">
            <CircularFlowDiagram title="The 4-Sector Circular Flow of Income" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <NoteCard title="Injections (J)" type="concept">
              <p className="font-medium text-cambridge-cyan mb-2 font-mono">J = I + G + X</p>
              <p>
                <strong>Definition:</strong> Injections represent additions to the circular flow that 
                increase aggregate demand. They are sources of spending that do not originate from 
                domestic household consumption.
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><strong>Investment (I):</strong> Spending by firms on capital goods</li>
                <li><strong>Government Spending (G):</strong> Expenditure on public services and infrastructure</li>
                <li><strong>Exports (X):</strong> Foreign spending on domestic goods and services</li>
              </ul>
            </NoteCard>

            <NoteCard title="Withdrawals (W)" type="concept">
              <p className="font-medium text-cambridge-magenta mb-2 font-mono">W = S + T + M</p>
              <p>
                <strong>Definition:</strong> Withdrawals (or leakages) represent income which is earned 
                by households but which is not spent on domestically produced final goods and services. 
                Withdrawals reduce aggregate demand.
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><strong>Saving (S):</strong> Income not spent on consumption</li>
                <li><strong>Taxation (T):</strong> Income paid to government</li>
                <li><strong>Imports (M):</strong> Spending on foreign goods and services</li>
              </ul>
            </NoteCard>
          </div>

          <NoteCard title="Equilibrium in the Circular Flow" type="formula">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-2xl font-mono font-bold text-primary mb-2">
                Equilibrium: J = W and Y = AD
              </p>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-cambridge-green/10 rounded-lg">
                <p><strong>If J &gt; W:</strong> Y &lt; AD</p>
                <p className="text-muted-foreground mt-1">
                  More is being added than withdrawn. National income rises.
                </p>
              </div>
              <div className="p-3 bg-cambridge-magenta/10 rounded-lg">
                <p><strong>If J &lt; W:</strong> Y &gt; AD</p>
                <p className="text-muted-foreground mt-1">
                  More is being withdrawn than added. National income falls.
                </p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Topic 4: Consumption */}
        <ContentSection title="Topic 4: Consumption" id="consumption">
          <NoteCard title="The Keynesian Consumption Function" type="formula">
            <p className="mb-4">
              The Keynesian consumption function shows the relationship between consumption expenditure 
              and the level of national income. It is one of the most important relationships in 
              macroeconomics.
            </p>
            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
              <p className="text-2xl font-mono font-bold text-cambridge-cyan mb-2">
                C = a + bY
              </p>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong className="text-cambridge-cyan">a</strong> = Autonomous consumption</p>
                <p className="text-muted-foreground">
                  Spending that occurs regardless of income level (e.g., from savings or borrowing). 
                  When income is zero, consumption is at this autonomous level.
                </p>
              </div>
              <div>
                <p><strong className="text-cambridge-cyan">b</strong> = Marginal Propensity to Consume (MPC)</p>
                <p className="text-muted-foreground">
                  The slope of the consumption function. It indicates the proportion of each additional 
                  dollar of income that is spent on consumption.
                </p>
              </div>
            </div>
          </NoteCard>

          <div className="my-4">
            <ConsumptionFunctionDiagram />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <NoteCard title="Marginal Propensity to Consume (MPC)" type="definition">
              <div className="text-center p-3 bg-muted/30 rounded-lg mb-3">
                <p className="font-mono text-lg">MPC = ΔC / ΔY</p>
              </div>
              <p className="text-sm text-muted-foreground">
                The amount of every additional dollar earned that is spent on consumption. 
                For the economy, MPC is positive and less than 1 (some income is always saved).
              </p>
              <p className="mt-3 text-sm font-medium text-cambridge-cyan">
                Note: MPC + MPS = 1
              </p>
            </NoteCard>

            <NoteCard title="Average Propensity to Consume (APC)" type="definition">
              <div className="text-center p-3 bg-muted/30 rounded-lg mb-3">
                <p className="font-mono text-lg">APC = C / Y</p>
              </div>
              <p className="text-sm text-muted-foreground">
                The proportion of total income spent on consumption. As income increases, 
                the APC tends to <strong>fall</strong> because people save a larger proportion 
                at higher income levels.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                If there is no autonomous consumption, then APC = MPC.
              </p>
            </NoteCard>
          </div>

          <NoteCard title="Saving and Dissaving" type="concept">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-cambridge-green/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-green mb-2">Saving (C &lt; Y)</h5>
                <p className="text-sm text-muted-foreground">
                  When consumption is less than income, households are saving. This occurs to the 
                  right of the breakeven point on the consumption function diagram.
                </p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <h5 className="font-semibold text-destructive mb-2">Dissaving (C &gt; Y)</h5>
                <p className="text-sm text-muted-foreground">
                  When consumption exceeds income, households are dissaving (borrowing or using 
                  past savings). This occurs to the left of the breakeven point.
                </p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Factors Affecting Consumption" type="application">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-muted">
                  <tr>
                    <th className="text-left py-2 px-3">Factor</th>
                    <th className="text-left py-2 px-3">Effect on Consumption</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">1. Level of Income</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      As income increases, the MPC may decline, making the consumption function less steep.
                    </td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">2. Interest Rates</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      Higher interest rates encourage saving and discourage borrowing, reducing consumption.
                    </td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">3. Expectations</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      Optimism about future income increases current consumption; pessimism decreases it.
                    </td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">4. Wealth</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      Higher wealth (assets) increases consumption at every income level (upward shift).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">5. Distribution of Income</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      More equal distribution raises total consumption (poorer households have higher MPC).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </NoteCard>

          <div className="overflow-x-auto my-6">
            <p className="text-sm font-medium mb-3">Numerical Example: APC Declining as Income Rises</p>
            <table className="w-full text-sm border border-muted rounded-lg overflow-hidden">
              <thead className="bg-muted/30">
                <tr>
                  <th className="py-2 px-4">Income (Y)</th>
                  <th className="py-2 px-4">Consumption (C)</th>
                  <th className="py-2 px-4">APC = C/Y</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-muted"><td className="py-2 px-4">0</td><td className="py-2 px-4">10</td><td className="py-2 px-4">∞</td></tr>
                <tr className="border-t border-muted"><td className="py-2 px-4">10</td><td className="py-2 px-4">18</td><td className="py-2 px-4">1.80</td></tr>
                <tr className="border-t border-muted"><td className="py-2 px-4">20</td><td className="py-2 px-4">26</td><td className="py-2 px-4">1.30</td></tr>
                <tr className="border-t border-muted"><td className="py-2 px-4">50</td><td className="py-2 px-4">50</td><td className="py-2 px-4 text-primary font-medium">1.00 (Breakeven)</td></tr>
                <tr className="border-t border-muted"><td className="py-2 px-4">100</td><td className="py-2 px-4">90</td><td className="py-2 px-4">0.90</td></tr>
                <tr className="border-t border-muted"><td className="py-2 px-4">500</td><td className="py-2 px-4">410</td><td className="py-2 px-4">0.82</td></tr>
                <tr className="border-t border-muted"><td className="py-2 px-4">1000</td><td className="py-2 px-4">810</td><td className="py-2 px-4">0.81</td></tr>
              </tbody>
            </table>
          </div>
        </ContentSection>

        {/* Topic 5: Investment and Accelerator */}
        <ContentSection title="Topic 5: Investment and Accelerator" id="investment-accelerator">
          <NoteCard title="What is Investment?" type="definition">
            <p>
              To an economist, <strong>investment</strong> is a precise term involving the acquisition of 
              <strong> capital goods</strong> designed to provide consumer goods and services in the future. 
              It includes spending on machinery, equipment, buildings, infrastructure, and an increase 
              in stock (inventory) levels.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <NoteCard title="Gross vs. Net Investment" type="concept">
              <p>
                <strong>Gross Investment</strong> is the total level of investment in an economy.
              </p>
              <div className="mt-3 p-3 bg-muted/30 rounded-lg font-mono text-sm">
                Net Investment = Gross Investment - Depreciation
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Net investment represents the investment left after previous assets are replaced 
                due to wear and tear.
              </p>
            </NoteCard>

            <NoteCard title="Autonomous vs. Induced Investment" type="concept">
              <p>
                <strong>Autonomous Investment:</strong> Investment that is unrelated to the level of 
                national income. It depends on factors like interest rates and business expectations.
              </p>
              <p className="mt-3">
                <strong>Induced Investment:</strong> Investment that varies with changes in national income 
                (explained by the accelerator theory).
              </p>
            </NoteCard>
          </div>

          <NoteCard title="Determinants of Investment" type="application">
            <p className="mb-3">The level of investment depends on:</p>
            <ul className="space-y-2 text-sm">
              <li><strong>1. Availability of Finance:</strong> Access to loans and retained profits</li>
              <li><strong>2. Interest Rates:</strong> The cost of borrowing</li>
              <li><strong>3. Expected Rate of Return:</strong> Based on initial costs, expected revenues, and productivity</li>
            </ul>
          </NoteCard>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-4 text-silver-bright">
            Marginal Efficiency of Capital (MEC)
          </h3>

          <NoteCard title="MEC Theory" type="theory">
            <p>
              The <strong>Marginal Efficiency of Capital (MEC)</strong> is the expected rate of return 
              on an additional unit of capital investment. It represents the relationship between 
              interest rates and the level of investment in the economy.
            </p>
            <p className="mt-3">
              A profit-maximizing firm will invest in a project if the expected rate of return (MEC) 
              is <strong>greater than or equal to the interest rate</strong>. As interest rates fall, 
              more investment projects become profitable, and total investment increases.
            </p>
          </NoteCard>

          <div className="my-4">
            <MECCurveDiagram />
          </div>

          <NoteCard title="Factors that Shift the MEC (Investment Schedule)" type="application">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-muted">
                  <tr>
                    <th className="text-left py-2 px-3">Factor</th>
                    <th className="text-left py-2 px-3">Effect on MEC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">1. Business Expectations</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      If expectations become more positive (greater confidence about future demand), 
                      each project is expected to have a higher rate of return. The MEC shifts outward.
                    </td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">2. Technology</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      Technological advances can increase productivity and make projects more profitable, 
                      shifting the MEC outward.
                    </td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2 px-3 font-medium">3. Taxes</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      Lower taxes mean greater retained profits for companies, which they can use 
                      to increase investments.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">4. Price of Capital Goods</td>
                    <td className="py-2 px-3 text-muted-foreground">
                      A fall in the purchase price of capital goods would increase the expected rate 
                      of return for the investor, shifting MEC outward.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </NoteCard>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-4 text-silver-bright">
            The Accelerator Theory
          </h3>

          <NoteCard title="Induced Investment and the Accelerator" type="theory">
            <p>
              The <strong>accelerator theory</strong> suggests that the level of planned investment varies 
              with the <strong>rate of change of income or output</strong> rather than the level of interest rates. 
              Unlike autonomous investment in the basic Keynesian model, accelerator theory focuses on 
              <strong> induced investment</strong>.
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
              <p className="font-mono text-lg font-bold text-primary">I = α × ΔY</p>
              <p className="text-sm mt-2 text-muted-foreground">
                where α = accelerator coefficient (capital-output ratio)
              </p>
            </div>
          </NoteCard>

          <div className="my-4">
            <AcceleratorDiagram />
          </div>

          <NoteCard title="Accelerator Numerical Example" type="application">
            <p className="mb-3">If the accelerator coefficient (α) = 2:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-muted rounded-lg overflow-hidden">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="py-2 px-3">Desired Output</th>
                    <th className="py-2 px-3">Desired Capital (α=2)</th>
                    <th className="py-2 px-3">Change in Output (ΔY)</th>
                    <th className="py-2 px-3">Net Investment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-muted"><td className="py-2 px-3">200</td><td className="py-2 px-3">400</td><td className="py-2 px-3">—</td><td className="py-2 px-3">—</td></tr>
                  <tr className="border-t border-muted"><td className="py-2 px-3">220</td><td className="py-2 px-3">440</td><td className="py-2 px-3 text-cambridge-green">+20</td><td className="py-2 px-3 text-cambridge-green">+40</td></tr>
                  <tr className="border-t border-muted"><td className="py-2 px-3">250</td><td className="py-2 px-3">500</td><td className="py-2 px-3 text-cambridge-green">+30</td><td className="py-2 px-3 text-cambridge-green">+60</td></tr>
                  <tr className="border-t border-muted"><td className="py-2 px-3">300</td><td className="py-2 px-3">600</td><td className="py-2 px-3 text-cambridge-green">+50</td><td className="py-2 px-3 text-cambridge-green">+100</td></tr>
                  <tr className="border-t border-muted"><td className="py-2 px-3">400</td><td className="py-2 px-3">800</td><td className="py-2 px-3 text-cambridge-green">+100</td><td className="py-2 px-3 text-cambridge-green">+200</td></tr>
                  <tr className="border-t border-muted"><td className="py-2 px-3">400</td><td className="py-2 px-3">800</td><td className="py-2 px-3 text-muted-foreground">0</td><td className="py-2 px-3 text-muted-foreground">0</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Investment depends on the <em>change</em> in output, not the level. When output stops growing, 
              investment falls to zero even though output remains high.
            </p>
          </NoteCard>

          <ExamTipBox title="Limitations of the Accelerator Model" variant="warning">
            <ul className="space-y-1 text-sm">
              <li>• <strong>Stocks/Spare Capacity:</strong> Firms may have existing spare capacity and won't need new investment</li>
              <li>• <strong>Inelastic Supply:</strong> Capital goods producers might be at full capacity</li>
              <li>• <strong>Technology:</strong> New technology may change the capital-output ratio</li>
              <li>• <strong>Short-term AD changes:</strong> Firms may use overtime for short periods rather than invest</li>
              <li>• <strong>Access to Finance:</strong> Firms may not be able to obtain financing even if investment is needed</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* Topic 6: Keynesian Cross */}
        <ContentSection title="Topic 6: Keynesian Cross" id="keynesian-cross">
          <NoteCard title="The 45-Degree Line Model" type="concept">
            <p>
              The <strong>Keynesian Cross</strong> (or 45-degree line model) shows how equilibrium 
              national income is determined. All injections are assumed to be autonomous of national output.
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
              <p className="font-mono text-lg font-bold text-primary">
                Equilibrium: AD = Y (i.e., AE = National Output)
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Note:</strong> The Aggregate Demand schedule is: AD = C + I + G + (X - M). 
              The slope of the AD curve depends on the marginal propensity to consume (MPC).
            </p>
          </NoteCard>

          <div className="my-4">
            <KeynesianCrossDiagram />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cambridge-green/10 rounded-lg border border-cambridge-green/20">
              <h5 className="font-semibold text-cambridge-green mb-2">AD &gt; Output</h5>
              <p className="text-sm text-muted-foreground">
                If aggregate demand exceeds output, firms experience unplanned inventory depletion. 
                There is an incentive for firms to <strong>produce more</strong>, and national income rises.
              </p>
            </div>
            <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/20">
              <h5 className="font-semibold text-cambridge-magenta mb-2">AD &lt; Output</h5>
              <p className="text-sm text-muted-foreground">
                If aggregate demand is less than output, firms experience unplanned inventory accumulation. 
                There is an incentive for firms to <strong>produce less</strong>, and national income falls.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-4 text-silver-bright">
            Inflationary and Deflationary Gaps
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <NoteCard title="Inflationary Gap" type="concept">
              <p>
                An <strong>inflationary gap</strong> exists when equilibrium national income exceeds 
                full-employment national income. Excess aggregate demand causes <strong>demand-pull inflation</strong>.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Policy Response:</strong> Contractionary fiscal policy (reduce G, increase T) or 
                contractionary monetary policy (raise interest rates).
              </p>
            </NoteCard>

            <NoteCard title="Deflationary Gap" type="concept">
              <p>
                A <strong>deflationary gap</strong> exists when equilibrium national income is below 
                full-employment national income. Deficient aggregate demand causes <strong>unemployment</strong>.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Policy Response:</strong> Expansionary fiscal policy (increase G, reduce T) or 
                expansionary monetary policy (lower interest rates).
              </p>
            </NoteCard>
          </div>
        </ContentSection>

        {/* Topic 7: Keynesian Multiplier */}
        <ContentSection title="Topic 7: Keynesian Multiplier" id="multiplier">
          <NoteCard title="What is the Multiplier?" type="concept">
            <p>
              The <strong>multiplier (k)</strong> describes the phenomenon whereby an initial increase in 
              injections (J) leads to a <strong>larger final increase in national income</strong>. This occurs 
              because one person's spending becomes another person's income, which is then partially spent again.
            </p>
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <p className="font-mono text-center">
                Multiplier (k) = ΔY / ΔI = Change in Income / Change in Injections
              </p>
            </div>
          </NoteCard>

          <div className="my-4">
            <MultiplierDiagram sectors={2} />
          </div>

          <NoteCard title="Multiplier Formulas by Sector Model" type="formula">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-muted rounded-lg overflow-hidden">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="py-3 px-4 text-left">Sector Model</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Multiplier Formula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-muted">
                    <td className="py-3 px-4 font-medium text-cambridge-cyan">Two-Sector Economy</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Households and firms only. A closed economy with no government. Investment is autonomous.
                    </td>
                    <td className="py-3 px-4 font-mono text-cambridge-cyan">k = 1 / (1 - MPC) = 1 / MPS</td>
                  </tr>
                  <tr className="border-t border-muted">
                    <td className="py-3 px-4 font-medium text-cambridge-magenta">Three-Sector Economy</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Adds government sector. A closed economy with government taxation.
                    </td>
                    <td className="py-3 px-4 font-mono text-cambridge-magenta">k = 1 / (MPS + MPT)</td>
                  </tr>
                  <tr className="border-t border-muted">
                    <td className="py-3 px-4 font-medium text-cambridge-green">Four-Sector Economy</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Adds foreign sector (exports and imports). An open economy – the most realistic model.
                    </td>
                    <td className="py-3 px-4 font-mono text-cambridge-green">k = 1 / (MPS + MPT + MPM)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Note:</strong> MPC + MPS = 1 in a two-sector model. In multi-sector models, 
              the marginal propensities to withdraw (MPS + MPT + MPM) determine the multiplier size.
            </p>
          </NoteCard>

          <AnalysisBlock title="Analysis: The Size of the Multiplier">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary mb-1">Low MPC (Flat AD Curve):</p>
                <p className="text-sm">
                  When MPC is low, the AD curve is relatively flat. An increase in injections leads 
                  to a <strong>small multiplier effect</strong> because a large proportion of each 
                  additional dollar of income leaks out of the circular flow.
                </p>
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">High MPC (Steep AD Curve):</p>
                <p className="text-sm">
                  When MPC is high, the AD curve is steep. An increase in injections leads to a 
                  <strong> large multiplier effect</strong> because most additional income is respent, 
                  generating further rounds of income.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Cambridge Examiner Expectation">
            <p>
              When explaining the multiplier, show the <strong>step-by-step process</strong>. Explain that 
              the process ends because each round "leaks" some income to savings, taxes, and imports. 
              The multiplier is finite because MPC &lt; 1.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Topic 8: Paradox of Thrift */}
        <ContentSection title="Topic 8: Paradox of Thrift" id="paradox-of-thrift">
          <NoteCard title="When Saving Becomes Harmful" type="theory">
            <p>
              The <strong>Paradox of Thrift</strong> is a fundamental concept in Keynesian economics. 
              Individually, saving more seems prudent – it increases future consumption possibilities. 
              But if <em>everyone</em> in society decides to save more simultaneously, the consequences 
              can be harmful to the economy.
            </p>
            <p className="mt-3">
              An increase in the marginal propensity to save (MPS) by households results in a 
              <strong> decrease in consumption and aggregate expenditure</strong>, which via the 
              multiplier effect leads to a <strong>more than proportionate decrease in national income</strong>.
            </p>
          </NoteCard>

          <div className="my-4">
            <ParadoxOfThriftDiagram />
          </div>

          <AnalysisBlock title="Analysis: The Paradox Mechanism">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary mb-1">Stage 1: Saving Function Shifts Upward</p>
                <p className="text-sm">
                  Households decide to save more at every income level (S₀ → S₁). This represents an 
                  upward (pivotal) shift in the withdrawal function. Consumption falls immediately, 
                  reducing aggregate demand.
                </p>
              </div>
              <div>
                <p className="font-medium text-primary mb-1">Stage 2: Negative Multiplier Effect</p>
                <p className="text-sm">
                  The fall in consumption triggers the negative multiplier. National income falls 
                  by a multiple of the initial fall in spending.
                </p>
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Stage 3: Investment May Also Fall</p>
                <p className="text-sm">
                  Lower consumption may discourage firms from investing (via the accelerator). 
                  Investment falls, pushing income down further. Savings must equal investments, 
                  which is now unchanged or lower.
                </p>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">Paradox Outcome</p>
                <p className="text-sm">
                  Despite intending to save more, <strong>actual savings may not increase</strong> 
                  because income has fallen so much. The economy may enter a recessionary spiral.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Policy Implication" variant="gold">
            <p>
              The paradox of thrift supports Keynesian arguments for <strong>government intervention 
              during recessions</strong>. If households are saving more (spending less), the government 
              should increase its spending (G) to offset the fall in aggregate demand and prevent a 
              deflationary spiral. This is the rationale for counter-cyclical fiscal policy.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary" id="summary">
          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright">Key Equations</h3>
            <div className="grid md:grid-cols-3 gap-4 font-mono text-sm">
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs mb-1">National Income</p>
                <p>GNP = GDP + NPIA</p>
                <p>NNP = GNP - Depreciation</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs mb-1">Consumption & Saving</p>
                <p>C = a + bY</p>
                <p>MPC + MPS = 1</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs mb-1">Multiplier</p>
                <p>k = 1 / (1 - MPC)</p>
                <p>k = 1 / (MPS + MPT + MPM)</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 mt-6">
            <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright">Key Takeaways</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>National income can be measured via expenditure, income, or output methods – all yield the same result.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>The circular flow model shows how injections (I, G, X) and withdrawals (S, T, M) determine equilibrium income.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>The Keynesian consumption function C = a + bY shows consumption depends on income, with MPC as the slope.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>Investment is determined by interest rates (MEC theory) and changes in output (accelerator theory).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">5.</span>
                <span>Equilibrium occurs at the intersection of AD and the 45° line in the Keynesian Cross model.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">6.</span>
                <span>The multiplier (k) amplifies changes in injections – a higher MPC means a larger multiplier.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">7.</span>
                <span>The paradox of thrift shows that increased saving can reduce national income and justify fiscal policy.</span>
              </li>
            </ul>
          </div>
        </ContentSection>
      </div>
    </Layout>
  );
};

export default NationalIncome;
