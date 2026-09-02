import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import InflationDiagrams from '@/components/diagrams/InflationDiagrams';
import MoneySupplyDiagram from '@/components/diagrams/MoneySupplyDiagram';
import ADInflationStagesDiagram from '@/components/diagrams/ADInflationStagesDiagram';
import CostPushInflationDiagram from '@/components/diagrams/CostPushInflationDiagram';
import CostPushStagflationDiagram from '@/components/diagrams/CostPushStagflationDiagram';
import DemandPullInflationDiagram from '@/components/diagrams/DemandPullInflationDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import ChapterEnrichment from '@/components/ChapterEnrichment';

const inflationTakeaways = [
  "Inflation is a sustained increase in the General Price Level (GPL), measured by CPI, causing a fall in the purchasing power of money",
  "Demand-Pull Inflation: Excess AD → Competition for scarce resources → Factor prices rise → GPL rises (AD shifts right)",
  "Cost-Push Inflation: Rising input costs (wages, oil, imports) → SRAS shifts left → Stagflation (↑P and ↓Y simultaneously)",
  "The Quantity Theory of Money (MV = PY) states that if V and Y are constant, ↑M causes proportional ↑P",
  "CPI biases include substitution bias, quality bias, new goods bias, and outlet substitution bias—causing overstatement of true inflation",
  "Menu costs (repricing) and shoe-leather costs (transaction costs) represent deadweight losses from inflation",
];

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
        <div className="mb-5">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 4.6</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gradient mt-1 mb-2">
            Price Stability: Money &amp; Inflation
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            A comprehensive analysis of the nature, measurement, causes, and macroeconomic consequences of inflation and deflation within the aggregate demand and supply framework.
          </p>
        </div>

        {/* Key Takeaways Summary */}
        <KeyTakeaways takeaways={inflationTakeaways} />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.1: DEFINITIONAL FOUNDATIONS
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.1 Definitional Foundations" className="mb-4">
          {/* HIGH-DENSITY ZERO-GAP BLOCK: Definition of Inflation */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">The Nature of Inflation</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              <strong>Inflation</strong> is formally defined as a <em>sustained increase in the general price level</em> (GPL) over a period of time, resulting in a corresponding <em>fall in the internal purchasing power of money</em>. This definition contains two essential and non-negotiable elements: the increase in prices must be <strong>general</strong>, meaning it affects the average level of prices across the economy rather than isolated sectoral changes, and it must be <strong>sustained</strong>, indicating a continuous process over time rather than a singular, temporary adjustment. When inflation occurs, each unit of currency commands fewer goods and services than before; a household that could purchase a representative basket of goods for £100 in Period 1 may require £105 in Period 2 if inflation runs at 5% per annum, signifying a direct erosion of monetary wealth for those holding cash balances.
            </p>
            <p className="text-sm leading-relaxed text-justify">
              The analytical significance of inflation extends far beyond its arithmetic definition. It represents a fundamental disturbance in the price mechanism's ability to allocate resources efficiently. Prices, which serve as signals to producers and consumers regarding relative scarcity and value, become obscured when the general price level is rising. This informational corruption forces economic agents to divert cognitive and material resources toward distinguishing between <em>relative price changes</em> (which convey genuine information about scarcity) and <em>nominal price changes</em> (which merely reflect the declining purchasing power of money). The costs arising from this distinction—encapsulated in the concepts of <strong>menu costs</strong> and <strong>shoe-leather costs</strong>—represent a deadweight loss to societal welfare that accumulates with both the rate and unpredictability of inflation.
            </p>
          </div>

          {/* DEGREES OF PRICE CHANGE */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Taxonomy of Price Level Changes</h4>
            <p className="text-sm leading-relaxed text-justify mb-4">
              The spectrum of price level dynamics must be disaggregated into distinct categories, each carrying unique implications for economic stability and policy response. <strong>Disinflation</strong> refers to a reduction in the <em>rate</em> of inflation—prices continue to rise, but at a decelerating pace (e.g., inflation falling from 8% to 4%). This is categorically distinct from <strong>Deflation</strong>, which denotes an actual <em>fall</em> in the general price level (negative inflation), where the price index declines from one period to the next. While disinflation is generally considered a benign adjustment towards price stability, deflation is viewed by most economists as a potentially more dangerous phenomenon than moderate inflation due to its tendency to trigger self-reinforcing deflationary spirals.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="glass-card p-4 border-l-4 border-primary">
                <div className="text-primary font-mono text-lg mb-1">&lt;5% p.a.</div>
                <h5 className="font-semibold text-sm">Creeping/Mild Inflation</h5>
                <p className="text-xs text-muted-foreground mt-1">Low, stable rates that may facilitate economic growth by encouraging spending and reducing real debt burdens. Central banks typically target 2% as the optimal rate.</p>
              </div>
              <div className="glass-card p-4 border-l-4 border-secondary">
                <div className="text-secondary font-mono text-lg mb-1">10–50% p.a.</div>
                <h5 className="font-semibold text-sm">Galloping Inflation</h5>
                <p className="text-xs text-muted-foreground mt-1">Double-digit rates that generate significant economic uncertainty, wage-price spirals, and begin to erode the store-of-value function of money.</p>
              </div>
              <div className="glass-card p-4 border-l-4 border-destructive">
                <div className="text-destructive font-mono text-lg mb-1">{'>'}50% p.m.</div>
                <h5 className="font-semibold text-sm">Hyperinflation</h5>
                <p className="text-xs text-muted-foreground mt-1">Extreme monetary collapse where currency loses value hourly. Historical examples: Weimar Germany (1923), Zimbabwe (2008), Venezuela (2018). Money ceases to function.</p>
              </div>
            </div>
          </div>

          {/* CPI MEASUREMENT */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">The Consumer Price Index (CPI): Methodology and Limitations</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              The <strong>Consumer Price Index (CPI)</strong> is the principal statistical instrument employed by governments and central banks to measure the rate of inflation. Its construction involves several methodological steps: first, a <strong>base year</strong> is selected as the reference point against which subsequent price changes are measured (base year index = 100). Second, a <strong>Family Expenditure Survey</strong> is conducted to determine the composition of a representative "basket" of goods and services that reflects typical household consumption patterns. Third, <strong>weights</strong> are assigned to each category of expenditure according to its share in total household spending—housing typically receives a higher weight than entertainment, reflecting its greater budgetary significance. Fourth, price changes for each component are collected monthly and the <strong>weighted average</strong> of these changes yields the headline inflation rate.
            </p>
            <div className="p-4 bg-muted/30 rounded-xl mb-3">
              <p className="font-mono text-center text-sm">
                <InlineMath math="\text{Rate of Inflation} = \frac{\text{CPI}_{\text{current}} - \text{CPI}_{\text{base}}}{\text{CPI}_{\text{base}}} \times 100\%" />
              </p>
            </div>
            <p className="text-sm leading-relaxed text-justify">
              However, the CPI methodology is subject to several well-documented biases that compromise its accuracy. <strong>Substitution bias</strong> arises because consumers respond to relative price changes by substituting towards cheaper alternatives, yet fixed-weight indices fail to capture this behavioural adjustment. <strong>Quality bias</strong> occurs when price increases reflect genuine improvements in product quality (e.g., smartphones with enhanced features) rather than pure inflation, causing CPI to overstate the true inflation rate. <strong>New goods bias</strong> emerges from the lag between the introduction of innovative products and their incorporation into the basket. <strong>Outlet substitution bias</strong> results from consumers shifting purchases to discount retailers. Collectively, these biases are estimated to cause CPI to overstate true inflation by 0.5–1.0 percentage points annually in developed economies.
            </p>
          </div>

          <CPIBasketDiagram />

        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.2: DEMAND-PULL INFLATION
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.2 Demand-Pull Inflation: The Logic Chain" className="mb-4">
          {/* HIGH-DENSITY ZERO-GAP BLOCK */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Analytical Framework</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              <strong>Demand-pull inflation</strong> is the inflationary outcome that arises when the total level of <em>Aggregate Demand</em> (AD) exceeds the economy's current productive capacity, generating upward pressure on the general price level. This form of inflation is fundamentally rooted in excess demand: when the planned expenditure of all economic agents—households (Consumption, C), firms (Investment, I), the government (Government Spending, G), and the foreign sector (Net Exports, X − M)—exceeds the value of goods and services that the economy can supply at the prevailing price level, prices are bid upward as competing buyers chase limited output.
            </p>
            <div className="p-4 bg-muted/30 rounded-xl mb-4">
              <p className="font-mono text-center text-lg">
                <InlineMath math="AD = C + I + G + (X - M)" />
              </p>
            </div>
          </div>

          {/* CHAIN OF REASONING */}
          <div className="glass-card p-5 mb-3 border-l-4 border-primary">
            <h4 className="font-semibold text-primary mb-3 text-sm">Chain of Reasoning: Consumer Confidence Transmission</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              Consider the following fully articulated causal chain: An exogenous <strong>increase in consumer confidence</strong>—perhaps triggered by rising asset prices, employment growth, or optimistic economic forecasts—induces households to revise upward their marginal propensity to consume (MPC) out of current income. This behavioural shift manifests as <strong>higher Consumption expenditure (↑C)</strong>, which constitutes the largest component of AD in most economies. The resulting <strong>rightward shift in the AD curve</strong> from AD₀ to AD₁ creates excess demand at the initial equilibrium price level P₀. If the economy is operating near its <strong>full employment output level (Y<sub>fe</sub>)</strong>, the scope for firms to expand real output is constrained by the availability of unemployed labour and capital. Firms consequently <strong>bid competitively for scarce factors of production</strong>—offering higher wages to attract workers, higher rents for limited factory space, and higher prices for raw materials. These rising factor costs are <strong>passed through into the prices of final goods</strong>, causing the general price level to rise from P₀ to P₁. The economy moves along the upward-sloping section of the Short-Run Aggregate Supply (SRAS) curve to a new equilibrium at higher price level and output.
            </p>
            <div className="p-3 bg-muted/40 rounded-lg font-mono text-xs text-center">
              ↑ Consumer Confidence → ↑ MPC → ↑ C → AD shifts rightward (AD₀ → AD₁) → Excess demand at P₀ → Firms bid for scarce factors → ↑ Factor prices → ↑ Final goods prices → GPL rises (P₀ → P₁)
            </div>
          </div>

          <DemandPullInflationDiagram />

          {/* FURTHER DETERMINANTS */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Additional Transmission Mechanisms</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              Beyond consumption-driven demand shocks, multiple channels can trigger demand-pull inflation. <strong>Fiscal Policy Transmission:</strong> An expansionary fiscal stance—characterised by reduced taxation or increased government expenditure—directly injects purchasing power into the circular flow. A reduction in income tax rates raises households' disposable income (Y<sub>d</sub> = Y − T), stimulating consumption; an increase in government spending (G) on infrastructure or public services directly augments AD. <strong>Monetary Policy Transmission:</strong> A reduction in the central bank's policy interest rate lowers the cost of borrowing for households (mortgages, consumer credit) and firms (business loans), stimulating both consumption and investment. Additionally, lower interest rates reduce the opportunity cost of holding money rather than interest-bearing assets, encouraging spending over saving.
            </p>
            <p className="text-sm leading-relaxed text-justify">
              <strong>External Sector Transmission:</strong> Changes in the exchange rate significantly affect the net trade component (X − M) of AD. A <strong>depreciation of the domestic currency</strong> renders exports cheaper in foreign currency terms and imports more expensive in domestic currency terms. This expenditure-switching effect—assuming the Marshall-Lerner condition is satisfied—improves the trade balance and shifts AD rightward. However, the inflationary impulse from depreciation operates through dual channels: the demand-pull effect of rising net exports, and a cost-push effect from higher import prices feeding into domestic production costs.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-mono text-xs text-center">
                  ↓ Tax → ↑ Y<sub>d</sub> → ↑ C → AD↗ → ↑ GPL
                </p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <p className="font-mono text-xs text-center">
                  ↓ Interest Rate → ↓ Cost of borrowing → ↑ C, ↑ I → AD↗ → ↑ GPL
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.3: COST-PUSH INFLATION & STAGFLATION
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.3 Cost-Push Inflation: Supply-Side Shocks" className="mb-4">
          {/* HIGH-DENSITY ZERO-GAP BLOCK */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Analytical Framework</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              <strong>Cost-push inflation</strong> originates from the supply side of the economy and is fundamentally distinct from demand-pull inflation in both its causation and its macroeconomic consequences. It occurs when firms experience rising <strong>unit costs of production</strong>—including wages, raw material prices, energy costs, and import prices—that compress profit margins at existing output prices. Firms respond to this cost pressure by <strong>reducing the quantity of output they are willing and able to supply at each price level</strong>, causing the Short-Run Aggregate Supply (SRAS) curve to shift leftward. The macroeconomic outcome is a simultaneous rise in the general price level and a contraction in real national output—a phenomenon termed <strong>Stagflation</strong> (stagnation + inflation).
            </p>
          </div>

          {/* CHAIN OF REASONING */}
          <div className="glass-card p-5 mb-3 border-l-4 border-secondary">
            <h4 className="font-semibold text-secondary mb-3 text-sm">Chain of Reasoning: Oil Price Shock Transmission</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              The following causal chain illustrates the stagflationary mechanism: An exogenous <strong>supply shock to global oil markets</strong>—perhaps triggered by geopolitical conflict in oil-producing regions or OPEC production cuts—causes the world price of crude oil to rise sharply. Since petroleum derivatives serve as inputs into virtually all production processes (transportation, plastics, chemicals, heating), this represents a <strong>rise in firms' variable costs</strong> across all sectors of the economy. Facing compressed profit margins at the initial price level P₀, firms are <strong>no longer willing or able to supply the same quantity of output</strong>; the SRAS curve shifts leftward from SRAS₀ to SRAS₁. At the new intersection with the unchanged AD curve, the economy reaches a new short-run equilibrium characterised by a <strong>higher general price level (P₁ {'>'} P₀)</strong> and <strong>lower real output (Y₁ {'<'} Y₀)</strong>. This simultaneous occurrence of rising prices and falling output—impossible under pure demand-pull inflation—defines the stagflationary trap.
            </p>
            <div className="p-3 bg-muted/40 rounded-lg font-mono text-xs text-center">
              ↑ Oil Price → ↑ Variable costs → ↓ Profit margins at P₀ → Firms reduce supply → SRAS shifts leftward (SRAS₀ → SRAS₁) → New equilibrium: ↑ GPL (P₀ → P₁) and ↓ Y (Y₀ → Y₁) → <span className="text-destructive font-bold">STAGFLATION</span>
            </div>
          </div>

          <CostPushStagflationDiagram />

          {/* SOURCES OF COST-PUSH */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Categories of Supply-Side Cost Pressures</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              <strong>Wage-Push Inflation:</strong> When labour markets are characterised by strong trade union bargaining power, workers may secure wage increases that exceed productivity growth. Since unit labour costs equal (Wages / Output per Worker), wages rising faster than productivity directly increase firms' cost base and trigger SRAS contraction. <strong>Profit-Push Inflation:</strong> In markets characterised by monopoly or oligopoly power, firms may exploit inelastic demand by raising mark-ups above competitive levels, contributing to cost-driven price increases. <strong>Import-Price-Push:</strong> For economies heavily dependent on imported raw materials, intermediate goods, or energy, a depreciation of the domestic currency raises the domestic-currency cost of imports, shifting SRAS leftward. <strong>Tax-Push Inflation:</strong> Increases in indirect taxes (VAT, excise duties) or employers' social security contributions directly add to the cost of producing and selling goods, with the resulting price increases constituting inflation of the cost-push variety.
            </p>
          </div>

          <CostPushInflationDiagram />
          <div className="mt-4">
            <WagePriceSpiralDiagram />
          </div>

        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.4: THE MONETARY LINK (FISHER EQUATION)
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.4 The Monetary Link: Quantity Theory of Money" className="mb-4">
          {/* HIGH-DENSITY ZERO-GAP BLOCK */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">The Fisher Equation and Monetarist Doctrine</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              The <strong>Quantity Theory of Money</strong>, formalised by Irving Fisher's equation of exchange, provides the theoretical foundation for the monetarist explanation of inflation. The identity states that the total value of monetary transactions in an economy must equal the total value of goods and services exchanged:
            </p>
            <div className="p-4 bg-muted/30 rounded-xl mb-4">
              <BlockMath math="MV = PY" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 text-xs">
                <div className="p-2 bg-background/50 rounded text-center"><strong>M</strong> = Money Supply</div>
                <div className="p-2 bg-background/50 rounded text-center"><strong>V</strong> = Velocity of circulation</div>
                <div className="p-2 bg-background/50 rounded text-center"><strong>P</strong> = Price Level</div>
                <div className="p-2 bg-background/50 rounded text-center"><strong>Y</strong> = Real Output</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-justify mb-3">
              The monetarist interpretation transforms this accounting identity into a causal theory of inflation through two critical assumptions. First, the <strong>velocity of circulation (V)</strong> is assumed to be stable in the short run, determined by institutional factors such as payment frequency and banking practices that change only slowly over time. Second, <strong>real output (Y)</strong> is assumed to be determined by supply-side factors (capital, labour, technology) and tends toward the natural rate of output (Y<sub>n</sub>) consistent with full employment. If V and Y are treated as constants, any increase in the money supply M must translate proportionally into an increase in the price level P.
            </p>
            <p className="text-sm leading-relaxed text-justify">
              This reasoning yields the monetarist dictum, famously articulated by Milton Friedman: <em>"Inflation is always and everywhere a monetary phenomenon."</em> In this view, demand-pull and cost-push factors are merely proximate causes or symptoms; the fundamental cause is excessive growth in the money supply relative to the growth of real output. If the central bank expands M at a rate exceeding the economy's capacity to produce additional goods and services (the growth rate of Y), the excess monetary balances will be spent on a fixed quantity of output, bidding up prices. The policy implication is clear: controlling inflation requires controlling the growth rate of the money supply.
            </p>
            <div className="p-3 bg-primary/10 rounded-lg mt-4 font-mono text-xs text-center">
              If V and Y are constant: ↑ M → ↑ P (proportionally)
            </div>
          </div>

          <InflationDiagrams />
          <ADInflationStagesDiagram />
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.5: CONSEQUENCES OF INFLATION
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.5 Critical Evaluation of Inflationary Consequences" className="mb-4">
          {/* INTERNAL EFFECTS */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Internal Distributional Effects</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              The welfare consequences of inflation are not uniformly distributed across economic agents; rather, inflation operates as an arbitrary and regressive mechanism of redistribution. <strong>Fixed-income earners</strong>—pensioners on defined-benefit pensions, bondholders receiving fixed nominal coupons, and workers with long-term nominal wage contracts—experience an erosion of real purchasing power as prices rise while their nominal incomes remain constant. In contrast, <strong>borrowers with fixed-rate debt</strong> benefit from inflation: if a household borrowed £100,000 at a fixed interest rate, inflation reduces the real value of both the principal and interest payments, effectively transferring wealth from creditors (savers, banks) to debtors.
            </p>
            <p className="text-sm leading-relaxed text-justify mb-3">
              <strong>Savers</strong> holding nominal assets (cash, bank deposits, government bonds) suffer real losses when inflation exceeds the nominal interest rate—a condition of <em>negative real interest rates</em>. This discourages thrift and saving, potentially reducing the pool of loanable funds available for investment and long-term capital formation. <strong>Business confidence</strong> is undermined by inflationary uncertainty: firms facing difficulty predicting future costs and revenues may defer investment decisions, adopt shorter planning horizons, and demand higher risk premia, all of which impair productive capacity growth. The <strong>menu costs</strong> of frequently updating prices and the <strong>shoe-leather costs</strong> of economising on cash holdings represent deadweight losses that reduce allocative efficiency.
            </p>
          </div>

          {/* EXTERNAL EFFECTS */}
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">External Competitiveness Effects</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              When domestic inflation persistently exceeds that of trading partners, the economy experiences a <strong>loss of international price competitiveness</strong>. If UK inflation runs at 5% while Eurozone inflation is 2%, UK exports become progressively more expensive in euro terms (assuming a fixed or slowly adjusting exchange rate), while imports from the Eurozone become relatively cheaper. This triggers expenditure-switching: foreign consumers substitute away from now-dearer UK goods toward their own domestic alternatives, while UK consumers substitute toward cheaper imports.
            </p>
            <div className="p-3 bg-destructive/10 rounded-lg mb-3 font-mono text-xs text-center">
              Domestic Inflation {'>'} Foreign Inflation → ↑ Export prices, ↓ Import prices → ↓ X, ↑ M → Deterioration of Current Account Balance
            </div>
            <p className="text-sm leading-relaxed text-justify">
              The resulting deterioration in the <strong>Current Account of the Balance of Payments</strong> may necessitate contractionary demand management policies or exchange rate depreciation to restore external balance. However, depreciation itself imports inflation (through higher import prices), creating a potential inflationary spiral. In extreme cases, sustained competitiveness losses can trigger deindustrialisation, as export-oriented manufacturing sectors contract under competitive pressure.
            </p>
          </div>

          {/* SENIOR EXAMINER'S CONCLUSION */}
          <div className="glass-card p-5 border-l-4 border-cambridge-gold">
            <h4 className="font-semibold text-cambridge-gold mb-3 text-sm">📝 Senior Examiner's Conclusion</h4>
            <p className="text-sm leading-relaxed text-justify italic">
              "Ultimately, the severity of inflation's macroeconomic damage depends on three critical factors: its <strong>Rate</strong> (creeping inflation under 3% imposes modest costs, whereas galloping inflation above 10% generates substantial resource misallocation and distributional inequity), its <strong>Predictability</strong> (anticipated inflation can be incorporated into contracts and wage negotiations, mitigating redistributive harm, whereas unanticipated inflation catches economic agents unprepared), and its <strong>Cause</strong>. While demand-pull inflation may serve as a symptom of robust aggregate demand and a growing economy operating near full employment—potentially a transitory feature of the business cycle upswing—cost-push inflation is fundamentally more damaging because it forces policymakers into an uncomfortable trade-off between inflation and unemployment. Contractionary demand policies to combat cost-push inflation will exacerbate the output decline and job losses already caused by the supply shock, whereas accommodating the inflation through expansionary policy risks entrenching inflationary expectations. This policy dilemma constitutes the essence of the stagflationary challenge."
            </p>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.6: DEFLATION
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.6 Deflation: Causes, Types, and Consequences" className="mb-4">
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">The Dual Nature of Deflation</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              <strong>Deflation</strong> is defined as a persistent fall in the general price level (negative inflation rate). However, the welfare implications of deflation depend critically on its cause, necessitating a distinction between "good" and "bad" deflation. <strong>Good deflation (supply-side)</strong> arises from positive supply shocks—technological progress, productivity gains, or falling input costs—that shift the LRAS and SRAS curves rightward. Prices fall because the economy can produce more output at lower cost; real GDP rises and living standards improve. This benign form characterised the late 19th-century gold standard era when innovation-driven deflation coincided with rapid economic growth.
            </p>
            <p className="text-sm leading-relaxed text-justify">
              <strong>Bad deflation (demand-side)</strong> results from a collapse in aggregate demand—falling consumer and business confidence, credit contraction, or financial crisis—that shifts the AD curve leftward. Prices fall because spending collapses; real GDP contracts and unemployment rises. This malign form was observed during the Great Depression (1929–33) and Japan's "Lost Decade" (1990s). The danger lies in the <strong>deflationary spiral</strong>: falling prices cause consumers to defer purchases (expecting further declines), which further reduces AD, deepening the deflation. The <strong>real burden of debt increases</strong> as the nominal value of liabilities remains fixed while asset prices and incomes decline, triggering defaults, banking crises, and further demand contraction. Monetary policy becomes constrained by the <strong>zero lower bound</strong>—nominal interest rates cannot fall significantly below zero, limiting the central bank's ability to stimulate demand through conventional rate cuts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <div className="glass-card p-4 border-l-4 border-primary">
              <h5 className="font-semibold text-primary mb-2 text-sm">Good Deflation (↑ AS)</h5>
              <p className="text-xs text-muted-foreground mb-2">Technological progress, productivity gains, falling input costs</p>
              <div className="p-2 bg-primary/10 rounded text-xs font-mono text-center">
                ↑ LRAS → ↓ P + ↑ Y → Improved living standards
              </div>
            </div>
            <div className="glass-card p-4 border-l-4 border-destructive">
              <h5 className="font-semibold text-destructive mb-2 text-sm">Bad Deflation (↓ AD)</h5>
              <p className="text-xs text-muted-foreground mb-2">Demand collapse, credit contraction, financial crisis</p>
              <div className="p-2 bg-destructive/10 rounded text-xs font-mono text-center">
                ↓ AD → ↓ P + ↓ Y → Unemployment, debt deflation spiral
              </div>
            </div>
          </div>

          <DeflationDiagram />

        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4.6.7: POLICY RESPONSES
        ═══════════════════════════════════════════════════════════════════ */}
        <ContentSection title="4.6.7 Policy Responses to Price Instability" className="mb-4">
          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Anti-Inflationary Policy</h4>
            <p className="text-sm leading-relaxed text-justify mb-3">
              Combating inflation requires policies that restrain aggregate demand or enhance aggregate supply. <strong>Contractionary Monetary Policy:</strong> The central bank raises policy interest rates, increasing the cost of borrowing for households and firms. Higher mortgage rates reduce housing demand and homeowner equity withdrawal; higher business loan rates dampen investment. Additionally, higher rates strengthen the exchange rate (attracting capital inflows), reducing import prices and export competitiveness—both disinflationary. <strong>Contractionary Fiscal Policy:</strong> Raising taxes reduces disposable income and consumption; cutting government spending directly reduces G. However, fiscal contraction risks recession and higher unemployment, creating a policy trade-off.
            </p>
            <p className="text-sm leading-relaxed text-justify">
              <strong>Supply-Side Policies:</strong> Investment in education, infrastructure, and R&D can shift LRAS rightward, allowing higher output at lower prices over the long run. However, supply-side effects operate with long lags (5–10 years), making them unsuitable for immediate anti-inflationary action. For cost-push inflation specifically, policymakers face a dilemma: demand contraction reduces inflation but worsens output loss; demand accommodation prevents output loss but entrenches inflation.
            </p>
          </div>

          <div className="glass-card p-5 mb-3">
            <h4 className="font-serif text-lg text-primary mb-3">Anti-Deflationary Policy</h4>
            <p className="text-sm leading-relaxed text-justify">
              <strong>Expansionary Monetary Policy:</strong> Cutting interest rates to near-zero stimulates borrowing and spending. When rates hit the zero lower bound, central banks resort to <strong>Quantitative Easing (QE)</strong>—purchasing government bonds to inject liquidity and lower long-term yields. <strong>Expansionary Fiscal Policy:</strong> Tax cuts and increased government spending directly boost AD. In severe deflation, coordinated fiscal-monetary action may be necessary. <strong>Currency Depreciation:</strong> Engineering a weaker exchange rate boosts net exports and raises import prices, countering deflationary pressure. However, competitive devaluations risk retaliation ("currency wars") and trade tensions.
            </p>
          </div>

          <ExamTipBox title="The 2% Inflation Target" variant="gold" className="mt-3">
            <p className="text-sm leading-relaxed text-justify">
              Most central banks target a 2% inflation rate as the optimal balance between the costs of inflation and the risks of deflation. This modest positive rate provides a "buffer" against deflation, allows for relative price adjustments (since nominal wages are sticky downward), and reflects typical CPI measurement biases. The target is symmetric: undershooting is considered as problematic as overshooting, since both undermine price stability and credibility.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Examiner Traps & Real-World Examples */}
        <ContentSection title="Examiner Guidance: Inflation Analysis" className="mb-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Examiner Traps */}
            <div className="glass-card p-5 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-400 mb-3 text-sm">⚠️ Common Examiner Traps</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 1: Confusing Inflation with High Prices</p>
                  <p className="text-muted-foreground">Inflation is the <em>rate of change</em> of prices. A country can have low inflation but high prices, or high inflation with initially low prices.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 2: Disinflation ≠ Deflation</p>
                  <p className="text-muted-foreground">Disinflation = falling inflation rate (still positive). Deflation = negative inflation (falling GPL). These are categorically different.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 3: "Inflation is Always Bad"</p>
                  <p className="text-muted-foreground">Moderate inflation (2%) can stimulate spending, reduce real debt burdens, and allow relative price adjustments. Zero inflation removes this flexibility.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Trap 4: Ignoring Context for Winners/Losers</p>
                  <p className="text-muted-foreground">Whether inflation helps or harms depends on whether it's <em>anticipated</em> or <em>unanticipated</em>. Anticipated inflation can be built into contracts.</p>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="glass-card p-5 border-l-4 border-primary">
              <h4 className="font-semibold text-primary mb-3 text-sm">📌 Real-World Case Studies</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Demand-Pull: USA 2021-22</p>
                  <p className="text-muted-foreground">$5 trillion pandemic stimulus + pent-up savings → AD surged. CPI reached 9.1% (June 2022). Near-full employment meant most of ↑AD translated to ↑P rather than ↑Y.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Cost-Push: UK 2022-23</p>
                  <p className="text-muted-foreground">Russia-Ukraine war → ↑Energy prices → SRAS shifted left. UK inflation hit 11.1% while growth stagnated at 0.4%—textbook stagflation.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Hyperinflation: Zimbabwe 2008</p>
                  <p className="text-muted-foreground">Excessive money printing to finance government deficits. Peak 79.6 billion % per month. Currency abandoned in favour of USD—complete monetary collapse.</p>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Deflation: Japan 1990s-2000s</p>
                  <p className="text-muted-foreground">"Lost Decades" of falling prices, stagnant wages, and the liquidity trap. Despite near-zero rates, firms and households hoarded cash rather than spend.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Command Word Guidance */}
          <div className="glass-card p-5 bg-gradient-to-br from-secondary/5 to-transparent">
            <h4 className="font-semibold text-secondary mb-3">📝 Answering Inflation Questions</h4>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-1">"Analyse the causes of..."</p>
                <p className="text-muted-foreground">Identify type (demand-pull/cost-push) → Show chain (↑AD or ↓SRAS) → Reference diagram → State equilibrium change (P₀→P₁, Y₀→Y₁)</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-1">"Evaluate the effects on..."</p>
                <p className="text-muted-foreground">Consider: SR vs LR, anticipated vs unanticipated, winners vs losers, magnitude of inflation, open vs closed economy effects.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-1">"Discuss policies to control..."</p>
                <p className="text-muted-foreground">Match policy to cause (demand-side for demand-pull, supply-side for cost-push). Evaluate effectiveness, time lags, trade-offs.</p>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-5">
            <h3 className="font-serif text-lg text-gradient mb-3">Key Takeaways – Price Stability</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Inflation</strong> is a sustained increase in the GPL, eroding the purchasing power of money; measured by weighted CPI subject to substitution and quality biases.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Demand-pull inflation:</strong> ↑ AD near Yfe → excess demand → firms bid for scarce factors → ↑ GPL; associated with economic growth.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Cost-push inflation:</strong> ↑ Unit costs → SRAS shifts left → ↑ GPL + ↓ Y = <em>Stagflation</em>; supply shocks create policy dilemmas.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Quantity Theory (MV = PY):</strong> With V and Y stable, ↑ M → ↑ P; monetarist view that inflation is "always a monetary phenomenon."
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Consequences:</strong> Internal redistribution (debtors gain, creditors lose), external competitiveness loss, menu/shoe-leather costs, uncertainty.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Deflation:</strong> Good (↑ AS via productivity) vs Bad (↓ AD via debt spiral); zero lower bound constraint on policy effectiveness.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>2% Target:</strong> Optimal buffer against deflation while limiting inflation costs; central banks use forward guidance to anchor expectations.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
      <ChapterEnrichment id="inflation-unemployment-phillips" />
    </Layout>
  );
};

export default Inflation;