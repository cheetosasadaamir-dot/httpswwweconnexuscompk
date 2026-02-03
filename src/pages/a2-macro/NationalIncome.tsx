import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import ContentSection from '@/components/ContentSection';
import CircularFlowDiagram from '@/components/diagrams/CircularFlowDiagram';
import ConsumptionFunctionDiagram from '@/components/diagrams/ConsumptionFunctionDiagram';
import KeynesianCrossDiagram from '@/components/diagrams/KeynesianCrossDiagram';
import AEModelDiagram from '@/components/diagrams/AEModelDiagram';
import MultiplierDiagram from '@/components/diagrams/MultiplierDiagram';
import MECCurveDiagram from '@/components/diagrams/MECCurveDiagram';
import AcceleratorDiagram from '@/components/diagrams/AcceleratorDiagram';
import ParadoxOfThriftDiagram from '@/components/diagrams/ParadoxOfThriftDiagram';
import KeynesianASCurveDiagram from '@/components/diagrams/KeynesianASCurveDiagram';
import LiquidityTrapDiagram from '@/components/diagrams/LiquidityTrapDiagram';
import KeynesianTheorySection from '@/components/diagrams/KeynesianTheorySection';
import KeynesianEquilibriumSection from '@/components/diagrams/KeynesianEquilibriumSection';
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

        {/* Topic 6: The Aggregate Expenditure Model (Keynesian Cross) - A2 Level */}
        <ContentSection title="Topic 6: The Aggregate Expenditure Model (Keynesian Cross)" id="ae-model">
          <div className="space-y-0">
            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              The <strong className="text-silver-bright">Aggregate Expenditure (AE) Model</strong>, also known as the Keynesian Cross or 45-degree line diagram, provides the foundational framework for analyzing short-run equilibrium national income determination within the Keynesian paradigm. This model directly challenges the <strong className="text-cambridge-orange">classical doctrine of Say's Law</strong>—the assertion that "supply creates its own demand"—by demonstrating that equilibrium can occur at output levels substantially below full employment capacity. The model's central proposition is that equilibrium national income is determined where <strong>planned (ex-ante) aggregate expenditure equals actual (ex-post) national output</strong>, expressed mathematically as <InlineMath math="Y^* = AE" /> where <InlineMath math="AE = C + I + G + (X - M)" />. The 45-degree line serves as the geometric locus of all points where this equilibrium condition is satisfied, since any point on this line represents equality between the horizontal axis (real national income <InlineMath math="Y" />) and the vertical axis (aggregate expenditure <InlineMath math="AE" />). The aggregate expenditure function itself is constructed by vertically summing the consumption function <InlineMath math="C = a + bY_d" /> with autonomous injections, yielding a line with intercept equal to <strong>total autonomous expenditure</strong> (<InlineMath math="A = a + I + G + X" />) and slope equal to the <strong>Marginal Propensity to Consume</strong> (MPC).
            </p>

            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-4">
              <p className="text-xs text-muted-foreground mb-2">Equilibrium Condition</p>
              <BlockMath math="Y^* = AE = C + I + G + (X - M) = a + bY + I + G + (X - M)" />
              <p className="text-xs text-muted-foreground mt-2">
                Solving: <InlineMath math="Y^* = \frac{A}{1 - MPC} = \frac{A}{MPW} = A \times k" /> where <InlineMath math="A" /> = total autonomous expenditure
              </p>
            </div>

            <div className="my-4">
              <AEModelDiagram title="The Aggregate Expenditure Model: Ex-Ante Equilibrium & Multiplier" />
            </div>

            <AnalysisBlock title="Chain of Analysis (AO3): Ex-Ante vs. Ex-Post & The Inventory Adjustment Mechanism" type="analysis">
              <div className="space-y-3 text-xs">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The distinction between <strong className="text-cambridge-cyan">ex-ante (planned)</strong> and <strong className="text-cambridge-magenta">ex-post (actual)</strong> values is fundamental to understanding the disequilibrium adjustment process. In any given period, households and firms make <em>planned</em> decisions about consumption, saving, and investment based on their expectations. However, actual outcomes may differ from plans due to unexpected changes in inventory levels—the crucial buffer variable that absorbs the difference between planned expenditure and actual output. This inventory adjustment mechanism provides the self-correcting force that drives the economy toward equilibrium.
                </p>
                <div className="p-3 bg-cambridge-green/10 rounded-lg border-l-3 border-cambridge-green">
                  <p className="font-semibold text-cambridge-green mb-2">Case 1: Excess Demand (AE &gt; Y) — Unplanned Inventory Depletion</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    When planned aggregate expenditure exceeds current output (<InlineMath math="AE > Y" />), demand outstrips supply and firms experience <strong>unexpected stock depletion</strong>. Inventories fall below target levels as goods are sold faster than they can be produced. This signals to profit-maximizing firms that market demand exceeds their current production capacity. Rational response: firms <strong>increase output</strong> by hiring additional labor, extending working hours, and expanding capacity utilization. This output expansion generates additional factor incomes (wages, profits), which through the induced consumption mechanism triggers further rounds of spending. National income rises toward the equilibrium level where <InlineMath math="AE = Y" />.
                  </p>
                </div>
                <div className="p-3 bg-cambridge-magenta/10 rounded-lg border-l-3 border-cambridge-magenta">
                  <p className="font-semibold text-cambridge-magenta mb-2">Case 2: Deficient Demand (AE &lt; Y) — Unplanned Inventory Accumulation</p>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    When planned aggregate expenditure falls short of current output (<InlineMath math="AE < Y" />), supply exceeds demand and firms experience <strong>unexpected stock accumulation</strong>—goods pile up in warehouses unsold. This unplanned inventory investment signals that production has exceeded market requirements. Rational response: firms <strong>cut production</strong>, reduce labor demand through layoffs or reduced hours, and scale back capacity utilization. The resulting fall in factor incomes triggers negative multiplier effects as reduced consumption propagates through the economy. National income contracts toward equilibrium.
                  </p>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg mt-3">
                  <p className="text-xs font-mono">
                    <strong>Equilibrium Identity:</strong> At <InlineMath math="Y^*" />: Planned AE = Actual Y = Planned Output
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Unplanned Inventory Change = <InlineMath math="Y - AE = 0" />
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <h3 className="font-serif text-xl font-semibold mt-8 mb-4 text-silver-bright">
              Inflationary and Deflationary (Recessionary) Gaps
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              The <strong className="text-silver-bright">output gap</strong> concept extends the AE framework to analyze deviations between equilibrium and full employment output. A <strong className="text-cambridge-magenta">deflationary (recessionary) gap</strong> exists when equilibrium national income falls below full employment output (<InlineMath math="Y^* < Y_f" />), representing a situation of <strong>demand deficiency</strong> where the economy operates with involuntary unemployment and underutilized capacity. Conversely, an <strong className="text-cambridge-orange">inflationary gap</strong> occurs when equilibrium income exceeds full employment output (<InlineMath math="Y^* > Y_f" />), representing <strong>excess aggregate demand</strong> that cannot be satisfied through increased real output and therefore manifests as demand-pull inflation. The magnitude of these gaps is measured not by the difference in income levels but by the <strong>difference in autonomous expenditure</strong> required to shift AE such that equilibrium occurs at <InlineMath math="Y_f" />.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/20">
                <h5 className="font-semibold text-cambridge-magenta mb-2 flex items-center gap-2">
                  <span>Deflationary (Recessionary) Gap</span>
                </h5>
                <div className="text-center py-2 mb-2 bg-muted/30 rounded">
                  <InlineMath math="Y^* < Y_f \Rightarrow \text{Demand Deficiency}" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Equilibrium occurs below full employment. <strong>Involuntary unemployment</strong> persists because wages are "sticky downwards"—trade unions, contracts, and efficiency wage concerns prevent nominal wage cuts. Without government intervention, the economy may remain trapped in this <strong>under-employment equilibrium</strong> indefinitely, validating Keynes's rejection of automatic market clearing.
                </p>
                <div className="mt-3 p-2 bg-cambridge-cyan/10 rounded text-xs">
                  <strong className="text-cambridge-cyan">Policy Response:</strong> Expansionary fiscal policy (↑G or ↓T) to shift AE upward and close the gap via the multiplier.
                </div>
              </div>
              <div className="p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/20">
                <h5 className="font-semibold text-cambridge-orange mb-2 flex items-center gap-2">
                  <span>Inflationary Gap</span>
                </h5>
                <div className="text-center py-2 mb-2 bg-muted/30 rounded">
                  <InlineMath math="Y^* > Y_f \Rightarrow \text{Excess Demand}" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Aggregate demand exceeds the economy's productive capacity at full employment. Since real output cannot expand beyond <InlineMath math="Y_f" />, excess demand translates into <strong>demand-pull inflation</strong> as firms raise prices in response to persistent excess demand. Factor markets tighten, pushing up wage costs and reinforcing inflationary pressures through cost-push mechanisms.
                </p>
                <div className="mt-3 p-2 bg-destructive/10 rounded text-xs">
                  <strong className="text-destructive">Policy Response:</strong> Contractionary fiscal policy (↓G or ↑T) to shift AE downward and eliminate excess demand.
                </div>
              </div>
            </div>

            <ExamTipBox title="Senior Examiner's Conclusion: The Keynesian Under-Employment Equilibrium" variant="gold">
              <p className="text-xs leading-relaxed text-justify">
                <strong>Ultimately</strong>, the Keynesian AE model demonstrates that a market economy possesses <strong>no automatic mechanism to ensure equilibrium occurs at full employment</strong>. Unlike the classical paradigm where flexible wages and prices guarantee market clearing, the Keynesian framework shows that equilibrium is determined solely by the intersection of the AE function with the 45-degree line—a purely <strong>demand-side determination</strong> that may occur at any output level. The economy can settle at an "under-employment equilibrium" where significant spare capacity and involuntary unemployment persist indefinitely because <strong>wage stickiness</strong> prevents the classical adjustment mechanism from operating. This theoretical insight provides the intellectual foundation for discretionary fiscal policy: if aggregate demand is insufficient to generate full employment, the government must actively manage AD through changes in <InlineMath math="G" /> and <InlineMath math="T" /> to shift the AE function and close recessionary gaps. As Keynes famously argued, waiting for long-run market adjustments is economically unacceptable—"in the long run, we are all dead."
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* Topic 7: The Multiplier & Marginal Propensities (A2 Level) */}
        <ContentSection title="Topic 7: The Multiplier Effect & Marginal Propensities" id="multiplier">
          <div className="space-y-0">
            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
              The <strong className="text-silver-bright">Keynesian Multiplier</strong> represents the mechanism whereby an initial autonomous injection into the circular flow generates a <strong>magnified final impact</strong> on equilibrium national income. The multiplier coefficient <InlineMath math="k" /> quantifies the ratio of the final change in income to the initial autonomous expenditure change: <InlineMath math="k = \frac{\Delta Y}{\Delta A}" />. The transmission operates through successive rounds of induced consumption: an initial autonomous injection (whether <InlineMath math="\Delta I" />, <InlineMath math="\Delta G" />, or <InlineMath math="\Delta X" />) creates income for factor owners (wages, profits, rent, interest), who subsequently spend a fraction—determined by the <strong>Marginal Propensity to Consume</strong> (MPC)—on domestic consumption, thereby generating further incomes and further consumption in a <strong>geometric series</strong> that converges to a finite sum determined by the marginal propensity to withdraw. The critical insight is that the multiplier's magnitude is <strong>inversely related</strong> to the total leakage rate from the circular flow: economies with higher savings rates, tax burdens, or import propensities exhibit smaller multipliers because a greater fraction of each income increment "leaks" out before generating subsequent rounds of domestic spending.
            </p>

            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-4">
              <p className="text-xs text-muted-foreground mb-2">The Multiplier Formula (Open Economy)</p>
              <BlockMath math="k = \frac{1}{1 - MPC + MPM} = \frac{1}{MPS + MPT + MPM} = \frac{1}{MPW}" />
              <p className="text-xs text-muted-foreground mt-2">
                where <InlineMath math="MPW" /> = Marginal Propensity to Withdraw = <InlineMath math="MPS + MPT + MPM" />
              </p>
            </div>

            <div className="my-4">
              <MultiplierDiagram sectors={4} title="The Four-Sector Multiplier: Injections, Withdrawals & Transmission" />
            </div>

            <AnalysisBlock title="Chain of Analysis (AO3): The Multiplier Transmission Mechanism" type="analysis">
              <div className="space-y-3 text-xs">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The multiplier process can be mathematically derived as a convergent geometric series. Consider an initial autonomous injection <InlineMath math="\Delta A = £100m" /> with <InlineMath math="MPC = 0.75" /> and no taxation or imports (simple two-sector model). The transmission proceeds as follows:
                </p>
                <div className="p-3 bg-cambridge-cyan/10 rounded-lg border-l-3 border-cambridge-cyan">
                  <p className="font-semibold text-cambridge-cyan mb-2">Round-by-Round Transmission (MPC = 0.75, ΔA = £100m)</p>
                  <div className="grid grid-cols-5 gap-2 text-center font-mono text-[10px] mb-2">
                    <div className="p-1 bg-muted/30 rounded"><strong>Round</strong></div>
                    <div className="p-1 bg-muted/30 rounded"><strong>ΔY</strong></div>
                    <div className="p-1 bg-muted/30 rounded"><strong>ΔC</strong></div>
                    <div className="p-1 bg-muted/30 rounded"><strong>ΔS</strong></div>
                    <div className="p-1 bg-muted/30 rounded"><strong>Cumulative ΔY</strong></div>
                    <div className="p-1">1</div><div className="p-1">£100m</div><div className="p-1">£75m</div><div className="p-1">£25m</div><div className="p-1">£100m</div>
                    <div className="p-1">2</div><div className="p-1">£75m</div><div className="p-1">£56.25m</div><div className="p-1">£18.75m</div><div className="p-1">£175m</div>
                    <div className="p-1">3</div><div className="p-1">£56.25m</div><div className="p-1">£42.19m</div><div className="p-1">£14.06m</div><div className="p-1">£231.25m</div>
                    <div className="p-1">4</div><div className="p-1">£42.19m</div><div className="p-1">£31.64m</div><div className="p-1">£10.55m</div><div className="p-1">£273.44m</div>
                    <div className="p-1">∞</div><div className="p-1 text-cambridge-cyan font-bold">→</div><div className="p-1">→</div><div className="p-1">→</div><div className="p-1 text-cambridge-cyan font-bold">£400m</div>
                  </div>
                  <p className="text-muted-foreground text-center mt-2">
                    <InlineMath math="\Delta Y = \Delta A \times k = £100m \times \frac{1}{0.25} = £100m \times 4 = £400m" />
                  </p>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs font-mono">
                    <strong>Geometric Series:</strong> <InlineMath math="\Delta Y = \Delta A (1 + MPC + MPC^2 + MPC^3 + ...) = \frac{\Delta A}{1 - MPC}" />
                  </p>
                </div>
              </div>
            </AnalysisBlock>

            <NoteCard title="The Marginal Propensities: Determinants of Multiplier Size" type="formula">
              <div className="grid md:grid-cols-3 gap-3 text-xs mt-3">
                <div className="p-3 bg-cambridge-cyan/10 rounded-lg border-l-3 border-cambridge-cyan">
                  <h5 className="font-semibold text-cambridge-cyan mb-1">Marginal Propensity to Save (MPS)</h5>
                  <div className="font-mono text-center py-1 mb-2 bg-muted/30 rounded">
                    <InlineMath math="MPS = \frac{\Delta S}{\Delta Y}" />
                  </div>
                  <p className="text-muted-foreground">
                    Fraction of additional income allocated to saving. Higher MPS → lower MPC → <strong>smaller multiplier</strong>. Constrained by: <InlineMath math="MPC + MPS = 1" />.
                  </p>
                </div>
                <div className="p-3 bg-cambridge-magenta/10 rounded-lg border-l-3 border-cambridge-magenta">
                  <h5 className="font-semibold text-cambridge-magenta mb-1">Marginal Propensity to Tax (MPT)</h5>
                  <div className="font-mono text-center py-1 mb-2 bg-muted/30 rounded">
                    <InlineMath math="MPT = \frac{\Delta T}{\Delta Y}" />
                  </div>
                  <p className="text-muted-foreground">
                    Fraction of additional income absorbed by taxation (progressive tax systems). Higher MPT → greater fiscal leakage → <strong>smaller multiplier</strong>.
                  </p>
                </div>
                <div className="p-3 bg-cambridge-orange/10 rounded-lg border-l-3 border-cambridge-orange">
                  <h5 className="font-semibold text-cambridge-orange mb-1">Marginal Propensity to Import (MPM)</h5>
                  <div className="font-mono text-center py-1 mb-2 bg-muted/30 rounded">
                    <InlineMath math="MPM = \frac{\Delta M}{\Delta Y}" />
                  </div>
                  <p className="text-muted-foreground">
                    Fraction of additional income spent on imports. Open economies with high import dependence exhibit <strong>smaller multipliers</strong> due to external leakage.
                  </p>
                </div>
              </div>
            </NoteCard>

            <AnalysisBlock title="Critical Evaluation (AO4): Multiplier Effectiveness & Limitations" type="evaluation">
              <div className="space-y-3 text-xs">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The effectiveness of the fiscal multiplier as a policy instrument is contingent upon multiple factors that A2 candidates must evaluate systematically. Empirical estimates for developed economies suggest actual multipliers range from <strong>1.5–2.5</strong> during recessions (with spare capacity) but fall toward <strong>0.5–1.0</strong> when economies approach full employment—substantially below theoretical maxima due to significant real-world leakages and offsetting mechanisms.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                    <h5 className="font-semibold text-destructive mb-2">Factors Reducing Multiplier Effectiveness</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li><strong>• Crowding Out:</strong> ↑G → ↑Government Borrowing → ↑Interest Rates → ↓Private Investment → partial/full offset of fiscal stimulus</li>
                      <li><strong>• Ricardian Equivalence:</strong> Rational consumers anticipate future tax increases to repay government debt → ↑Saving today → ↓Consumption (neutralizing fiscal impact)</li>
                      <li><strong>• Import Leakage:</strong> In open economies, significant proportion of induced consumption "leaks" abroad via imports, generating income for foreign rather than domestic producers</li>
                      <li><strong>• Time Lags:</strong> Recognition, decision, and implementation lags mean fiscal stimulus may arrive too late, potentially becoming pro-cyclical</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
                    <h5 className="font-semibold text-cambridge-cyan mb-2">Conditions for Maximum Effectiveness</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li><strong>• Significant Spare Capacity:</strong> Horizontal/elastic section of Keynesian AS curve allows real output expansion without inflation</li>
                      <li><strong>• Low Interest Rate Sensitivity:</strong> If investment is interest-inelastic, crowding out effect is minimized</li>
                      <li><strong>• Liquidity Trap:</strong> When monetary policy is ineffective, fiscal multiplier becomes the primary stabilization tool</li>
                      <li><strong>• Targeted Spending:</strong> Transfers to low-income households (high MPC) generate larger multipliers than tax cuts for wealthy (high MPS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnalysisBlock>

            <ExamTipBox title="Senior Examiner's Conclusion: The Multiplier & Fiscal Policy Efficacy" variant="gold">
              <p className="text-xs leading-relaxed text-justify">
                <strong>In conclusion</strong>, the effectiveness of Keynesian fiscal policy through the multiplier mechanism is critically <strong>state-contingent</strong>. During deep recessions characterized by significant output gaps, wage stickiness, and monetary policy paralysis at the zero lower bound, fiscal multipliers can exceed unity and provide substantial macroeconomic stimulus with minimal inflationary consequences. However, near full employment, the multiplier's impact manifests primarily as <strong>demand-pull inflation</strong> rather than real output expansion, and the "Crowding Out" effect may substantially neutralize fiscal stimulus by displacing private investment. Furthermore, in highly open economies with elevated import propensities, a significant portion of the multiplier "leaks" abroad, reducing domestic effectiveness while stimulating foreign economies—an effect that may necessitate international policy coordination for optimal outcomes. The ultimate judgment on fiscal multiplier effectiveness must therefore weigh the cyclical position of the economy, the monetary policy stance, the degree of economic openness, and the composition of fiscal changes.
              </p>
            </ExamTipBox>
          </div>
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

        {/* Keynesian Equilibrium & Circular Flow Analysis */}
        <ContentSection 
          title="Keynesian Equilibrium & Income Determination" 
          subtitle="[A2 Specialist - Keynesian Income Determination]"
          id="keynesian-equilibrium"
        >
          <KeynesianEquilibriumSection />
        </ContentSection>

        {/* Advanced Macroeconomic Thought: Keynesian Framework */}
        <ContentSection 
          title="Advanced Macroeconomic Thought: Keynesian Framework" 
          subtitle="[A2 Specialist - Keynesian vs Monetarist]"
          id="keynesian-framework"
        >
          <KeynesianTheorySection />
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
