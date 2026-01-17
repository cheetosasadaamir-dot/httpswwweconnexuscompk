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
import KeynesianASCurveDiagram from '@/components/diagrams/KeynesianASCurveDiagram';
import LiquidityTrapDiagram from '@/components/diagrams/LiquidityTrapDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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

        {/* Topic 2: The Keynesian Shape of Aggregate Supply */}
        <ContentSection title="Topic 2: The Keynesian Shape of Aggregate Supply" id="keynesian-as">
          <div className="space-y-0">
            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              The <strong className="text-silver-bright">Keynesian Aggregate Supply curve</strong> represents a fundamental departure from the classical vertical long-run supply conception, embodying the central Keynesian insight that the economy can reach equilibrium at output levels substantially below full employment. Unlike the classical model which assumes instantaneous market clearing through flexible wages and prices, the Keynesian framework recognizes that <strong className="text-cambridge-orange">nominal wages are "sticky" downward</strong>—they resist falling even when unemployment persists—due to institutional factors including long-term labor contracts, trade union bargaining power, efficiency wage considerations (where firms fear productivity losses from wage cuts), and simple worker resistance to nominal pay reductions. This wage rigidity means that when aggregate demand falls, the adjustment occurs primarily through <strong>quantity reductions</strong> (output and employment) rather than price reductions, potentially trapping the economy in a prolonged <strong>under-employment equilibrium</strong> from which market forces alone cannot extricate it.
            </p>

            <div className="my-4">
              <KeynesianASCurveDiagram title="The Three-Phase Keynesian Aggregate Supply Curve" />
            </div>

            <AnalysisBlock title="Chain of Analysis (AO3): The Three Ranges of Keynesian AS" type="analysis">
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-cambridge-cyan/10 rounded-lg border-l-3 border-cambridge-cyan">
                  <p className="font-semibold text-cambridge-cyan mb-1">1. The Horizontal (Keynesian) Range — Perfectly Elastic Supply</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    When significant <strong>spare capacity</strong> exists in the economy—characterized by high unemployment, idle factory capacity, and abundant raw materials—firms can increase output without encountering rising factor costs. Labor is plentiful and willing to work at prevailing wages; capital equipment sits underutilized. In this range, increases in Aggregate Demand translate <strong>entirely into real output expansion</strong> with zero inflationary pressure. The General Price Level remains constant at <InlineMath math="P_0" /> while Real National Output rises from <InlineMath math="Y_1" /> toward potential output. This range provides the strongest justification for expansionary fiscal policy during recessions.
                  </p>
                </div>
                <div className="p-3 bg-cambridge-orange/10 rounded-lg border-l-3 border-cambridge-orange">
                  <p className="font-semibold text-cambridge-orange mb-1">2. The Upward Sloping (Intermediate) Range — Emerging Bottlenecks</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    As the economy approaches full employment, <strong>bottlenecks</strong> emerge in specific sectors—shortages of skilled labor in certain industries, capacity constraints in key supplier industries, and rising raw material costs as global demand increases. Firms must offer higher wages to attract workers from competitors, and production costs begin rising. In this range, AD expansion produces <strong>both output gains and inflation</strong>: the economy moves northeast along the AS curve, with each unit of additional output requiring a progressively higher price level. The elasticity of AS diminishes continuously as <InlineMath math="Y \rightarrow Y_f" />.
                  </p>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg border-l-3 border-destructive">
                  <p className="font-semibold text-destructive mb-1">3. The Vertical (Classical) Range — Full Employment Ceiling</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    At full employment output (<InlineMath math="Y_f" />), all factors of production are fully utilized—unemployment equals only the natural rate (frictional + structural). The economy has reached its <strong>production possibility frontier</strong>. Further AD expansion cannot generate additional real output; instead, excess demand translates <strong>purely into inflation</strong>. This represents the classical supply-side limit where only productivity improvements, capital accumulation, or labor force expansion can shift the supply curve rightward. Demand management becomes counterproductive, justifying supply-side policy focus.
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <ExamTipBox title="Senior Examiner's Conclusion: Keynesian Aggregate Supply" variant="gold">
              <p className="text-xs leading-relaxed text-justify">
                <strong>Ultimately</strong>, the impact of any shift in AD on the macroeconomic equilibrium is <strong>entirely dependent on the elasticity of the AS curve</strong> at the current output level. If the economy possesses significant spare capacity (horizontal Keynesian range), AD expansion achieves real growth without inflation, providing powerful justification for counter-cyclical demand management. However, as the economy approaches <InlineMath math="Y_f" />, the AS curve becomes progressively inelastic, meaning further AD expansion results <strong>primarily in inflation rather than real growth</strong>. The policy implication is clear: fiscal and monetary stimulus should be deployed during recessions (horizontal range) but withdrawn as the economy recovers (intermediate range) to prevent overheating. The effectiveness of demand-side policy is thus <strong>state-contingent</strong>—a conclusion that reconciles Keynesian and Classical perspectives within a unified framework.
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* Topic 2.5: Liquidity Preference Theory */}
        <ContentSection title="Topic 2.5: Liquidity Preference & Interest Rate Determination" id="liquidity-preference">
          <div className="space-y-0">
            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              Keynes's <strong className="text-silver-bright">Liquidity Preference Theory</strong> provides the theoretical foundation for understanding how interest rates are determined in money markets, representing a fundamental departure from the classical loanable funds approach. Rather than viewing interest rates as the price that equilibrates saving and investment, Keynes argued that the interest rate is determined by the <strong>supply of and demand for money</strong>—specifically, by the interaction between an exogenously-determined money supply (controlled by the central bank) and the public's desire to hold wealth in liquid monetary form rather than interest-bearing assets. The demand for money (liquidity preference) arises from three distinct motives, each with different determinants and elasticities.
            </p>

            <div className="my-4">
              <LiquidityTrapDiagram />
            </div>

            <AnalysisBlock title="Chain of Analysis (AO3): Money Demand Motives & The Liquidity Trap" type="analysis">
              <div className="space-y-3 text-xs">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The <strong className="text-silver-bright">three motives for holding money</strong> create the downward-sloping liquidity preference curve. The <strong className="text-cambridge-cyan">Transactions Motive</strong> generates demand proportional to income (<InlineMath math="M^T = kY" />), as higher income levels require greater cash holdings for routine purchases. The <strong className="text-cambridge-magenta">Precautionary Motive</strong> similarly relates to income, reflecting money held against unforeseen contingencies. Crucially, the <strong className="text-cambridge-orange">Speculative Motive</strong> creates an <em>inverse relationship</em> between money demand and interest rates: when interest rates are high, the opportunity cost of holding money is substantial, and bond prices (being inversely related to yields) are low—people expect rates to fall and bond prices to rise, so they hold bonds. Conversely, when rates are very low, bond prices are high and expected to fall, making money-holding preferable to the risk of capital losses on bonds.
                </p>
                <div className="p-3 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/30">
                  <p className="font-semibold text-cambridge-orange mb-2">The Liquidity Trap: Monetary Policy Paralysis</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    At extremely low interest rates (approaching the <strong>zero lower bound</strong>), the speculative demand for money becomes <strong>perfectly elastic</strong>—the liquidity preference curve turns horizontal. In this "liquidity trap," any additional money supply injected by the central bank is simply absorbed into idle balances rather than being used to purchase bonds. Since monetary policy operates by lowering interest rates to stimulate investment, its transmission mechanism is completely broken when rates cannot fall further. People expect rates can only rise (and bond prices fall), so they prefer holding any amount of money at the prevailing near-zero rate. This renders <strong>conventional monetary policy completely ineffective</strong> for stimulating aggregate demand.
                  </p>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs font-mono">
                    Money Market Equilibrium: <InlineMath math="M^s = M^d = L(r, Y)" />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    In the trap: <InlineMath math="\frac{\partial M^d}{\partial r} \rightarrow -\infty" /> (perfectly elastic)
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <ExamTipBox title="Senior Examiner's Conclusion: The Liquidity Trap" variant="gold">
              <p className="text-xs leading-relaxed text-justify">
                <strong>In conclusion</strong>, the existence of a liquidity trap represents the <strong>ultimate limit of conventional monetary policy</strong>. When the economy falls into this trap—as witnessed in Japan's "Lost Decades" (1990s–2010s), the Global Financial Crisis (2008–2009), and the COVID-19 recession—central banks find their primary instrument (interest rate manipulation) rendered impotent. In such circumstances, only a <strong>massive injection of government spending</strong> (fiscal policy) can directly shift the AD curve rightward and extract the economy from its low-level equilibrium trap. This provides the theoretical justification for Keynes's famous dictum that "in the long run we are all dead," implying that waiting for market self-correction during a liquidity trap is economically and socially unacceptable. Alternative monetary approaches—including <strong>quantitative easing</strong> (direct asset purchases) and <strong>forward guidance</strong> (managing expectations)—represent attempts to circumvent the trap, but their effectiveness remains empirically contested.
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* Topic 2.6: Keynesians vs Monetarists */}
        <ContentSection title="Topic 2.6: Keynesians and Monetarists – A Comparative Analysis" id="keynesians-monetarists">
          <div className="grid md:grid-cols-2 gap-4">
            <NoteCard title="Keynesian View of the Economy" type="theory">
              <p className="text-sm">
                According to the Keynesian perspective, up to full employment the aggregate supply is 
                <strong> horizontal (perfectly elastic)</strong>. An increase in aggregate demand increases 
                output and employment, <strong>not prices</strong>. Only when full employment is reached 
                will prices begin to increase.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                The government should control aggregate demand to ensure equilibrium occurs at full employment. 
                This justifies activist fiscal policy during recessions.
              </p>
              <div className="mt-2 p-2 bg-primary/10 rounded text-xs">
                <strong>Key implication:</strong> Demand management is effective in changing real output.
              </div>
            </NoteCard>

            <NoteCard title="Monetarist (Classical) View" type="theory">
              <p className="text-sm">
                According to the Monetarist perspective, aggregate supply is <strong>vertical</strong> 
                at the natural rate of output. Any increase in AD increases the <strong>price level</strong> 
                but not output and employment.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                To increase output and employment, supply-side policies are needed to shift AS to the right. 
                Monetary policy should focus on controlling inflation.
              </p>
              <div className="mt-2 p-2 bg-secondary/10 rounded text-xs">
                <strong>Key implication:</strong> Only supply-side policies can increase real output.
              </div>
            </NoteCard>
          </div>

          <AnalysisBlock title="Chain of Reasoning (AO3): Keynesian vs. Monetarist Policy Transmission" type="analysis">
            <div className="space-y-3 text-xs">
              <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                <p className="font-semibold text-cambridge-cyan mb-1">Keynesian Transmission (With Spare Capacity):</p>
                <div className="font-mono text-center py-1">
                  ↑G or ↓T → ↑Disposable Income → ↑C → ↑AD → ↑Real GDP (with minimal ↑P)
                </div>
                <p className="text-muted-foreground mt-1">
                  When there is significant spare capacity (high unemployment), an increase in AD leads primarily to an increase in output rather than prices. The economy moves along the horizontal section of the Keynesian AS curve, justifying demand-side intervention.
                </p>
              </div>
              <div className="p-2 bg-cambridge-magenta/10 rounded-lg">
                <p className="font-semibold text-cambridge-magenta mb-1">Monetarist Transmission (At Full Employment):</p>
                <div className="font-mono text-center py-1">
                  ↑Ms → ↑AD → ↑P only (Real GDP unchanged at <InlineMath math="Y_f" />)
                </div>
                <p className="text-muted-foreground mt-1">
                  At full employment, the LRAS is vertical. Any increase in AD simply causes inflation without changing real output. Only supply-side policies can shift LRAS rightward to achieve sustainable growth.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <AnalysisBlock title="Critical Evaluation (AO4): State of the Economy Matters" type="evaluation">
            <div className="grid md:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <h5 className="font-semibold text-destructive mb-1">When Keynesian Policy Fails</h5>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                  <li><strong>At full capacity:</strong> ↑AD → ↑P only (demand-pull inflation)</li>
                  <li><strong>Crowding out:</strong> ↑G → ↑r → ↓Private I (net effect reduced)</li>
                  <li><strong>Time lags:</strong> Recognition, implementation, and response delays</li>
                </ul>
              </div>
              <div className="p-2 bg-cambridge-orange/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-orange mb-1">When Monetarist Policy Fails</h5>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                  <li><strong>Liquidity trap:</strong> ↓r has no effect when r is already near zero</li>
                  <li><strong>Low confidence:</strong> Firms won't invest despite cheap credit</li>
                  <li><strong>Long-run focus:</strong> Cannot address short-term demand deficiency</li>
                </ul>
              </div>
            </div>
            <div className="mt-2 p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
              <strong>Examiner Note:</strong> The effectiveness of policy depends critically on the state of the economy. Keynesian policies are most effective during recessions with spare capacity, while Monetarist/supply-side approaches are appropriate when the economy is near or at full employment.
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Cambridge Examiner Insight">
            <p className="text-xs">
              When answering questions on macroeconomic policy, always consider <strong>both views</strong>. 
              Keynesian analysis is more relevant for short-run analysis with spare capacity, while 
              Monetarist analysis applies to the long run or when the economy is at full employment.
              State explicitly: "The effectiveness of this policy depends on the state of the economy..."
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

        {/* Topic 4: The Keynesian Consumption Function & Multiplier */}
        <ContentSection title="Topic 4: The Keynesian Consumption Function & Multiplier Theory" id="consumption">
          <div className="space-y-0">
            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              The <strong className="text-silver-bright">Keynesian consumption function</strong> represents one of the foundational pillars of macroeconomic theory, establishing a systematic relationship between aggregate consumption expenditure and the level of disposable national income. Keynes, in his seminal work <em>The General Theory of Employment, Interest and Money</em> (1936), posited that consumption is primarily determined by current income levels, rejecting the classical assumption that interest rates were the principal driver of household spending decisions. The function takes the canonical form <InlineMath math="C = a + bY" />, where the parameter <InlineMath math="a" /> represents <strong className="text-cambridge-cyan">autonomous consumption</strong>—expenditure that occurs irrespective of income levels, financed through dissaving or borrowing—and the coefficient <InlineMath math="b" /> denotes the <strong className="text-cambridge-cyan">Marginal Propensity to Consume (MPC)</strong>, defined as the fraction of each additional unit of income that households allocate to consumption rather than saving. The theoretical constraint that <InlineMath math="0 < MPC < 1" /> ensures that increases in income generate proportionately smaller increases in consumption, with the residual flowing into saving, thereby establishing the fundamental identity <InlineMath math="MPC + MPS = 1" />.
            </p>

            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-4">
              <BlockMath math="C = a + bY^d" />
              <p className="text-xs text-muted-foreground mt-2">
                where <InlineMath math="a" /> = autonomous consumption, <InlineMath math="b" /> = MPC, <InlineMath math="Y^d" /> = disposable income
              </p>
            </div>

            <div className="my-4">
              <ConsumptionFunctionDiagram />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              The <strong className="text-silver-bright">Marginal Propensity to Consume</strong>, mathematically expressed as <InlineMath math="MPC = \frac{\Delta C}{\Delta Y}" />, constitutes the slope of the consumption function and determines the responsiveness of aggregate consumption to income changes. Empirically, developed economies typically exhibit MPC values ranging from 0.6 to 0.9, with lower-income households demonstrating systematically higher marginal propensities due to their greater need to satisfy immediate consumption requirements. This distributional characteristic carries profound policy implications: fiscal transfers directed toward lower-income groups generate larger multiplier effects precisely because such recipients spend proportionally more of any additional income received. The <strong className="text-silver-bright">Average Propensity to Consume</strong> (<InlineMath math="APC = \frac{C}{Y}" />) exhibits a declining trajectory as income rises—a phenomenon Keynes termed the "fundamental psychological law"—implying that wealthier societies save proportionally more, potentially creating structural demand deficiencies in mature economies.
            </p>

            <AnalysisBlock title="Chain of Analysis (AO3): The Multiplier Transmission Mechanism" type="analysis">
              <div className="space-y-3 text-xs">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The <strong className="text-silver-bright">Keynesian Multiplier Effect</strong> represents the mechanism whereby an initial autonomous injection into the circular flow generates a magnified final impact on equilibrium national income. The transmission operates through successive rounds of induced consumption: an initial investment injection of <InlineMath math="\Delta I" /> creates income for factor owners, who subsequently spend a fraction (<InlineMath math="MPC"  />) on domestic consumption, thereby generating further incomes and further consumption in a geometric series that converges to a finite sum determined by the multiplier coefficient <InlineMath math="k" />.
                </p>
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <BlockMath math="k = \frac{1}{1 - MPC} = \frac{1}{MPS} = \frac{1}{MPW}" />
                  <p className="text-xs text-muted-foreground mt-2">
                    In a 4-sector open economy: <InlineMath math="k = \frac{1}{MPS + MPT + MPM}" />
                  </p>
                </div>
                <div className="p-3 bg-cambridge-cyan/10 rounded-lg">
                  <p className="font-semibold text-cambridge-cyan mb-2">Numerical Transmission (MPC = 0.8, Initial ΔI = £100m):</p>
                  <div className="space-y-1 text-muted-foreground font-mono text-xs">
                    <p>Round 1: £100m → Wages/Profits → £100m household income</p>
                    <p>Round 2: £100m × 0.8 = £80m consumption → £80m new income</p>
                    <p>Round 3: £80m × 0.8 = £64m consumption → £64m new income</p>
                    <p>Round n: Process continues with diminishing increments...</p>
                    <p className="text-cambridge-cyan font-bold mt-2">Final ΔY = £100m × (1/0.2) = £100m × 5 = £500m</p>
                  </div>
                </div>
              </div>
            </AnalysisBlock>

            <div className="my-4">
              <MultiplierDiagram sectors={4} title="The Four-Sector Multiplier Process" />
            </div>

            <ExamTipBox title="Senior Examiner's Conclusion: The Consumption Function" variant="gold">
              <p className="text-xs leading-relaxed text-justify">
                <strong>Ultimately</strong>, the Keynesian consumption function provides the theoretical foundation for understanding short-run fluctuations in aggregate demand and justifies the use of discretionary fiscal policy. The multiplier's magnitude—and hence the potency of demand management—depends critically on the <strong>marginal propensity to withdraw</strong> (<InlineMath math="MPW = MPS + MPT + MPM" />). In practice, open economies with progressive tax systems exhibit multipliers between 1.5–2.0, substantially below the theoretical maximum, due to significant leakages at each round of the transmission mechanism. Furthermore, the multiplier operates symmetrically: contractions in autonomous spending trigger <strong>negative multiplier effects</strong>, potentially precipitating recessionary spirals that justify counter-cyclical intervention.
              </p>
            </ExamTipBox>
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
            <p className="text-sm">
              The <strong>multiplier (k)</strong> describes the phenomenon whereby an initial increase in 
              injections (J) leads to a <strong>larger final increase in national income</strong>. This occurs 
              because one person's spending becomes another person's income, which is then partially spent again.
            </p>
            <div className="mt-3 p-3 bg-muted/30 rounded-lg">
              <p className="font-mono text-center text-sm">
                Multiplier (k) = ΔY / ΔI = Change in Income / Change in Injections
              </p>
            </div>
          </NoteCard>

          <div className="my-3">
            <MultiplierDiagram sectors={2} />
          </div>

          <NoteCard title="Multiplier Formulas by Sector Model" type="formula">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-muted rounded-lg overflow-hidden">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="py-2 px-3 text-left">Sector Model</th>
                    <th className="py-2 px-3 text-left">Description</th>
                    <th className="py-2 px-3 text-left">Multiplier Formula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-muted">
                    <td className="py-2 px-3 font-medium text-cambridge-cyan">Two-Sector</td>
                    <td className="py-2 px-3 text-muted-foreground">Households and firms only. Closed economy, no government.</td>
                    <td className="py-2 px-3 font-mono text-cambridge-cyan">k = 1 / (1 - MPC) = 1 / MPS</td>
                  </tr>
                  <tr className="border-t border-muted">
                    <td className="py-2 px-3 font-medium text-cambridge-magenta">Three-Sector</td>
                    <td className="py-2 px-3 text-muted-foreground">Adds government sector with taxation.</td>
                    <td className="py-2 px-3 font-mono text-cambridge-magenta">k = 1 / (MPS + MPT)</td>
                  </tr>
                  <tr className="border-t border-muted">
                    <td className="py-2 px-3 font-medium text-cambridge-green">Four-Sector</td>
                    <td className="py-2 px-3 text-muted-foreground">Adds foreign sector (X and M). Most realistic model.</td>
                    <td className="py-2 px-3 font-mono text-cambridge-green">k = 1 / (MPS + MPT + MPM)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              <strong>Note:</strong> MPC + MPS = 1 in a two-sector model. In multi-sector models, 
              the marginal propensities to withdraw (MPS + MPT + MPM) determine the multiplier size.
            </p>
          </NoteCard>

          <AnalysisBlock title="Chain of Reasoning (AO3): The Multiplier Process" type="analysis">
            <div className="space-y-2 text-xs">
              <p className="text-muted-foreground">
                <strong>PEEL Structure — The Multiplier Transmission Mechanism:</strong>
              </p>
              <div className="p-2 bg-primary/10 rounded-lg">
                <p className="font-semibold mb-1">Step-by-Step Process (Example: MPC = 0.8, Initial ΔI = £100m):</p>
                <div className="space-y-1 text-muted-foreground">
                  <p><strong>Round 1:</strong> Firms receive £100m investment → Pay wages/profits → Households receive £100m income</p>
                  <p><strong>Round 2:</strong> Households spend 80% (£80m) on consumption → Firms receive £80m → Pay incomes → Households receive £80m</p>
                  <p><strong>Round 3:</strong> Households spend 80% of £80m (£64m) → Process continues...</p>
                  <p><strong>Final Effect:</strong> ΔY = £100m × (1/0.2) = £100m × 5 = <strong>£500m</strong></p>
                </div>
              </div>
              <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                <p className="font-semibold text-cambridge-cyan mb-1">Why the Process Ends:</p>
                <p className="text-muted-foreground">
                  Each round "leaks" income to savings (MPS), taxation (MPT), and imports (MPM). Since MPC &lt; 1, 
                  each successive round of spending is smaller than the previous one. The geometric series converges 
                  to a finite sum: ΔY = ΔI × k where k = 1/(1-MPC) = 1/MPW.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <AnalysisBlock title="Critical Evaluation (AO4): Multiplier Limitations" type="evaluation">
            <div className="grid md:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <h5 className="font-semibold text-destructive mb-1">Time Lags</h5>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                  <li>Full effect takes 12-18 months</li>
                  <li>Policy may be pro-cyclical by accident</li>
                  <li>Recognition lag delays response</li>
                </ul>
              </div>
              <div className="p-2 bg-cambridge-orange/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-orange mb-1">At Full Employment</h5>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                  <li>No spare capacity → ↑P not ↑Y</li>
                  <li>Multiplier leads to inflation</li>
                  <li>Real GDP unchanged</li>
                </ul>
              </div>
              <div className="p-2 bg-cambridge-magenta/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-magenta mb-1">Crowding Out</h5>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                  <li>↑G → ↑Borrowing → ↑r</li>
                  <li>↑r → ↓Private Investment</li>
                  <li>Net multiplier effect reduced</li>
                </ul>
              </div>
            </div>
            <div className="mt-2 p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
              <strong>Examiner Note:</strong> The actual multiplier in developed economies is typically 1.5-2.0, 
              smaller than theoretical models suggest due to high tax rates, import propensity, and crowding out effects.
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Cambridge Examiner Expectation">
            <p className="text-xs">
              When explaining the multiplier, show the <strong>step-by-step process</strong> with numerical examples. 
              Explain that the process ends because each round "leaks" some income to savings, taxes, and imports. 
              Always evaluate: "However, the size of the multiplier depends on the state of the economy and the marginal propensities to withdraw..."
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
