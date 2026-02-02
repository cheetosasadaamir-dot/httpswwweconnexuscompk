import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import FiscalPolicyShiftDiagram from '@/components/diagrams/FiscalPolicyShiftDiagram';
import MonetaryPolicyTransmissionDiagram from '@/components/diagrams/MonetaryPolicyTransmissionDiagram';
import SupplySideLRASDiagram from '@/components/diagrams/SupplySideLRASDiagram';
import PolicyConflictsDiagram from '@/components/diagrams/PolicyConflictsDiagram';
import MultiplierDiagram from '@/components/diagrams/MultiplierDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const policyTakeaways = [
  "Fiscal Policy: manipulation of G and T to shift AD; Multiplier k = 1/(1-MPC) = 1/(MPS+MPT+MPM)",
  "Monetary Policy: manipulation of interest rates to affect C and I; transmission: ↓r → ↓borrowing cost → ↑C, ↑I → ↑AD",
  "Supply-Side Policies: shift LRAS rightward by improving quantity/quality of factors; Market-based vs Interventionist",
  "Time Lags: Recognition (3-6 months), Implementation (6-12 months), Response (12-18 months) — total delay can exceed 2 years",
  "Crowding Out: ↑G financed by borrowing → ↑r → ↓Private Investment — partially offsets fiscal stimulus",
  "Liquidity Trap: at zero lower bound, monetary policy becomes ineffective as demand for money is perfectly elastic",
];

const MacroeconomicPolicy = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header */}
        <div className="mb-6">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 5</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-3">
            Government Macroeconomic Intervention
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fiscal Policy, Monetary Policy, Supply-Side Policies, and the Trade-offs Inherent in Pursuing Multiple Macroeconomic Objectives.
          </p>
        </div>

        {/* Syllabus Overview */}
        <div className="glass-card p-4 mb-6">
          <h3 className="font-serif text-lg font-semibold mb-2">Syllabus Coverage (CIE 9708)</h3>
          <div className="grid md:grid-cols-2 gap-1 text-sm">
            <p>1. Fiscal Policy: Government Spending (G) and Taxation (T)</p>
            <p>2. The Multiplier Effect and its Determinants</p>
            <p>3. Monetary Policy: Interest Rates and the Transmission Mechanism</p>
            <p>4. Supply-Side Policies: Market-Based and Interventionist</p>
            <p>5. Policy Conflicts and Trade-offs</p>
            <p>6. Time Lags and Limitations of Policy</p>
          </div>
        </div>

        {/* Key Takeaways Summary */}
        <KeyTakeaways takeaways={policyTakeaways} />

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1: FISCAL POLICY */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Fiscal Policy: The Budgetary Tool">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Defining Fiscal Policy</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Fiscal policy</strong> refers to the deliberate manipulation of <strong className="text-primary">government spending (G)</strong> and <strong className="text-primary">taxation (T)</strong> to influence the level of Aggregate Demand (AD) and, consequently, the key macroeconomic variables of output, employment, and the price level. Fiscal policy is determined by the government (typically the Treasury or Ministry of Finance) and is implemented through the annual budget. When the government increases its expenditure or reduces taxation, it is pursuing an <strong className="text-cambridge-green">expansionary (reflationary) fiscal policy</strong>, which increases AD and is typically associated with a budget deficit (G &gt; T). Conversely, when the government reduces spending or raises taxes, it is pursuing a <strong className="text-destructive">contractionary (deflationary) fiscal policy</strong>, which reduces AD and may generate a budget surplus (T &gt; G). The fundamental logic is rooted in the Keynesian identity: <InlineMath>{'AD = C + I + G + (X - M)'}</InlineMath>. Any increase in G directly increases AD, while a reduction in T increases disposable income, which in turn increases consumption (C) via the marginal propensity to consume (MPC).
            </p>

            <AnalysisBlock title="Chain of Analysis: Expansionary Fiscal Policy" type="analysis">
              <p className="text-sm leading-relaxed">
                Consider a government that reduces Personal Income Tax to stimulate a recessionary economy. The transmission mechanism operates as follows: <strong>A reduction in income tax increases households' disposable income</strong> (the income available after taxation). This increase in disposable income leads to a rise in consumption expenditure (C), as households spend a proportion of their additional income determined by the Marginal Propensity to Consume (MPC). The increase in consumption represents an increase in a component of Aggregate Demand, causing the AD curve to shift to the right from AD₁ to AD₂. This rightward shift in AD intersects the SRAS curve at a higher level of real GDP (Y₁ → Y₂) and a higher price level (P₁ → P₂), demonstrating the short-run trade-off between output and inflation. Furthermore, the initial increase in spending triggers a <strong className="text-secondary">Multiplier Effect</strong>: the additional consumption becomes income for businesses, which in turn spend a portion of this income, generating further rounds of spending. The final increase in national income is a multiple of the initial injection.
              </p>
            </AnalysisBlock>

            <FiscalPolicyShiftDiagram />
          </div>

          {/* The Multiplier Effect */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">The Multiplier Effect</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The <strong className="text-foreground">Multiplier (k)</strong> quantifies the relationship between an initial change in an injection (such as government spending, investment, or exports) and the resulting total change in national income. The core insight is that an initial injection of spending circulates through the economy, generating successive rounds of income and expenditure. If a government injects £10 billion into the economy, and recipients spend 80% of each additional pound received (MPC = 0.8), then the initial £10bn generates £8bn of spending in the second round, £6.4bn in the third, and so on. The sum of this infinite geometric series converges to a finite total: <InlineMath>{'\\Delta Y = k \\times \\Delta G'}</InlineMath>, where the multiplier <InlineMath>{'k = \\frac{1}{1 - MPC} = \\frac{1}{MPS}'}</InlineMath> in a simple two-sector model.
            </p>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center space-y-2">
              <BlockMath>{'k = \\frac{1}{1 - MPC} = \\frac{1}{MPS + MPT + MPM}'}</BlockMath>
              <p className="text-xs text-muted-foreground">Where MPS = Marginal Propensity to Save, MPT = Marginal Propensity to Tax, MPM = Marginal Propensity to Import</p>
            </div>

            <MultiplierDiagram sectors={2} />

            <ExamTipBox title="Multiplier Weakeners: Leakages from the Circular Flow" variant="warning">
              <p className="text-sm leading-relaxed">
                The multiplier is <strong>smaller</strong> in open economies with progressive taxation. Each leakage—Saving (S), Taxation (T), and Imports (M)—withdraws spending from the circular flow, reducing the proportion passed on in each round. In reality, if MPS = 0.1, MPT = 0.2, and MPM = 0.15, then the multiplier is <InlineMath>{'k = \\frac{1}{0.1 + 0.2 + 0.15} = 2.22'}</InlineMath>, far smaller than the theoretical maximum of 10 if only saving existed. Candidates frequently overestimate multiplier effects by ignoring these leakages.
              </p>
            </ExamTipBox>
          </div>

          {/* Limitations of Fiscal Policy */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">Critical Evaluation: Limitations of Fiscal Policy (AO4)</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Time Lags:</strong> Fiscal policy is subject to three significant lags. The <em>recognition lag</em> is the time taken to identify that the economy requires intervention; the <em>implementation lag</em> is the delay between policy decision and actual government action (budget approval, contract signing); the <em>response lag</em> is the time taken for households and firms to adjust their behaviour. Combined, these lags can exceed 12-18 months, by which time the economy may have already self-corrected, rendering the policy pro-cyclical rather than counter-cyclical. <strong className="text-foreground">Crowding Out:</strong> If the government finances its deficit by borrowing, increased demand for loanable funds raises interest rates. Higher interest rates reduce private investment (I), partially or fully offsetting the initial stimulus. In the extreme (full crowding out), fiscal policy is entirely ineffective—a position associated with the Monetarist critique. <strong className="text-foreground">Ricardian Equivalence:</strong> Rational consumers may anticipate that today's government borrowing implies higher future taxes. In response, they increase saving (to pay these future taxes), reducing current consumption and negating the stimulus. <strong className="text-foreground">Political Economy Constraints:</strong> Expansionary fiscal policy is politically popular (tax cuts, spending increases), while contractionary policy is unpopular. This asymmetry creates a bias towards deficits and accumulating public debt.
            </p>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: MONETARY POLICY */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Monetary Policy: The Financial Tool">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Defining Monetary Policy</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Monetary policy</strong> refers to the manipulation of <strong className="text-primary">interest rates</strong>, the <strong className="text-primary">money supply</strong>, and, in some cases, the <strong className="text-primary">exchange rate</strong> by the Central Bank to influence Aggregate Demand. In most modern economies, the primary instrument is the <em>base rate</em> (policy rate), which is the interest rate at which commercial banks borrow from the Central Bank. Changes in the base rate ripple through the financial system, affecting mortgage rates, savings rates, and corporate borrowing costs. When the Central Bank raises interest rates, it is pursuing <strong className="text-destructive">contractionary (tight) monetary policy</strong>, designed to reduce AD and combat inflation. When it lowers interest rates, it is pursuing <strong className="text-cambridge-green">expansionary (loose) monetary policy</strong>, designed to stimulate AD and combat unemployment or recession.
            </p>

            <AnalysisBlock title="Chain of Analysis: Contractionary Monetary Policy (↑r)" type="analysis">
              <p className="text-sm leading-relaxed">
                Consider a Central Bank raising interest rates to combat demand-pull inflation. The transmission operates through three channels: <strong>(1) Investment Channel:</strong> Higher interest rates increase the cost of borrowing. For firms, fewer investment projects have a Marginal Efficiency of Capital (MEC) exceeding the now-higher cost of capital; thus, Investment (I) falls. <strong>(2) Consumption Channel:</strong> Higher interest rates increase the return on saving, raising the opportunity cost of consumption. Households substitute saving for spending, reducing Consumption (C). Additionally, higher mortgage rates reduce disposable income for mortgage-holders, further dampening spending. <strong>(3) Exchange Rate Channel:</strong> Higher domestic interest rates attract international capital seeking higher returns ("hot money" inflows). The demand for the domestic currency rises, causing <strong>currency appreciation</strong>. A stronger currency makes exports more expensive to foreign buyers (↓X) and imports cheaper for domestic consumers (↑M), worsening net exports (X - M). The combined effect of ↓I, ↓C, and ↓(X - M) causes Aggregate Demand to shift leftward, reducing both output and the price level in the short run.
              </p>
            </AnalysisBlock>

            <MonetaryPolicyTransmissionDiagram />
          </div>

          {/* Limitations of Monetary Policy */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">Critical Evaluation: Limitations of Monetary Policy (AO4)</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">The Liquidity Trap:</strong> At very low interest rates (approaching the zero lower bound), further rate cuts become ineffective. Households and firms hold cash rather than spend or invest, regardless of how cheap borrowing becomes. This was observed during Japan's "Lost Decade" and in Western economies post-2008. Central Banks responded with <em>unconventional policies</em> such as Quantitative Easing (QE), but the effectiveness of these remains debated. <strong className="text-foreground">Time Lags:</strong> Monetary policy transmission takes 18-24 months for full effect. Rate changes today affect inflation projections 2 years hence, requiring Central Banks to be forward-looking. <strong className="text-foreground">Confidence and Expectations:</strong> Even with low rates, firms may not invest if business confidence is weak or if future demand is uncertain. "You can lead a horse to water, but you cannot make it drink." <strong className="text-foreground">Asset Price Inflation:</strong> Prolonged low interest rates can inflate asset bubbles (property, equities), creating financial instability risks. <strong className="text-foreground">Distributional Effects:</strong> Rate changes redistribute income between savers and borrowers, creating political sensitivity and potential inequality effects.
            </p>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: SUPPLY-SIDE POLICIES */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Supply-Side Policies: Expanding Productive Capacity">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Defining Supply-Side Policies</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Supply-side policies</strong> are government measures designed to increase the <strong className="text-primary">productive potential</strong> of the economy by improving the quantity and/or quality of factors of production. Unlike demand-side policies (fiscal and monetary), which shift AD, supply-side policies shift the <strong className="text-secondary">Long-Run Aggregate Supply (LRAS)</strong> curve to the right, increasing the economy's capacity to produce without generating inflation. The theoretical appeal is clear: a rightward shift in LRAS enables the economy to achieve higher output (Y), lower prices (P), and lower unemployment simultaneously—overcoming the demand-side trade-off between inflation and growth. Supply-side policies are classified into two broad categories: <strong>Market-Based</strong> policies, which seek to improve efficiency by enhancing the functioning of markets; and <strong>Interventionist</strong> policies, which involve active government spending to address market failures in skills, infrastructure, or innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(180 100% 50% / 0.05)', borderColor: 'hsl(180 100% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(180 100% 50%)' }}>Market-Based Policies</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li><strong>Deregulation:</strong> Reduce bureaucracy, lower barriers to entry</li>
                  <li><strong>Privatisation:</strong> Transfer state assets to private sector (efficiency gains)</li>
                  <li><strong>Tax Reform:</strong> Lower marginal rates → higher work incentives</li>
                  <li><strong>Trade Liberalisation:</strong> Reduce tariffs → competitive pressure</li>
                  <li><strong>Labour Market Flexibility:</strong> Reduce union power, ease hiring/firing</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(36 100% 50% / 0.05)', borderColor: 'hsl(36 100% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(36 100% 50%)' }}>Interventionist Policies</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li><strong>Education & Training:</strong> Improve human capital quality</li>
                  <li><strong>Infrastructure Investment:</strong> Roads, rail, broadband (↓costs)</li>
                  <li><strong>R&D Subsidies:</strong> Encourage innovation, technological progress</li>
                  <li><strong>Industrial Policy:</strong> Support strategic sectors</li>
                  <li><strong>Regional Policy:</strong> Attract investment to lagging areas</li>
                </ul>
              </div>
            </div>

            <AnalysisBlock title="Chain of Analysis: Investment in Vocational Training" type="analysis">
              <p className="text-sm leading-relaxed">
                Consider a government programme investing in vocational training for the workforce. <strong>Step 1:</strong> Increased spending on technical colleges and apprenticeship schemes improves the skills and productivity of labour. <strong>Step 2:</strong> Higher labour productivity means each worker can produce more output per hour, reducing <em>unit labour costs</em> for firms. <strong>Step 3:</strong> Lower unit costs shift the Short-Run Aggregate Supply (SRAS) curve rightward. <strong>Step 4:</strong> In the long run, the increase in the quality of the labour force increases the economy's productive potential, shifting the LRAS curve from LRAS₁ to LRAS₂. <strong>Step 5:</strong> The new equilibrium features higher real GDP (Y<sub>f1</sub> → Y<sub>f2</sub>) and a lower price level (P₁ → P₂), demonstrating <strong>non-inflationary economic growth</strong>. Additionally, structural unemployment falls as workers possess skills demanded by modern industries.
              </p>
            </AnalysisBlock>

            <SupplySideLRASDiagram />
          </div>

          {/* Evaluation of Supply-Side Policies */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">Critical Evaluation: Supply-Side Policies (AO4)</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Time Lags:</strong> The most significant limitation of supply-side policies is their <em>long gestation period</em>. Infrastructure projects take years to complete; improvements in education take a generation to fully materialise in the workforce. Unlike monetary policy (which operates in months), supply-side policies cannot address short-run stabilisation needs. <strong className="text-foreground">Inequality Concerns:</strong> Market-based policies, particularly tax cuts on high earners and reductions in welfare, may exacerbate income inequality. While they may improve incentives and efficiency, the distributional consequences may be politically unacceptable. <strong className="text-foreground">Uncertain Outcomes:</strong> Deregulation does not guarantee improved efficiency; it may reduce consumer protection or environmental standards. Privatisation of natural monopolies (e.g., water, rail) may simply replace public monopoly with private monopoly. <strong className="text-foreground">Cost:</strong> Interventionist policies—particularly infrastructure and education—require substantial government expenditure, which may conflict with objectives of fiscal consolidation or debt reduction.
            </p>

            <ExamTipBox title="Exam Strategy: Policy Comparison" variant="gold">
              <p className="text-sm leading-relaxed">
                When comparing policy types, always address: (1) <strong>Speed of impact</strong>: Monetary fastest, fiscal medium, supply-side slowest; (2) <strong>Inflation trade-off</strong>: Demand-side policies face the Phillips Curve constraint; supply-side avoids it; (3) <strong>Side effects</strong>: Fiscal may crowd out, monetary may cause asset bubbles, supply-side may worsen inequality; (4) <strong>Economic context</strong>: In a liquidity trap, fiscal becomes essential; in an overheating economy, supply-side offers non-inflationary growth.
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 4: POLICY CONFLICTS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Policy Conflicts and Trade-offs">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">The Impossibility of Simultaneous Achievement</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Governments pursue four primary macroeconomic objectives: <strong className="text-cambridge-green">economic growth</strong>, <strong className="text-cambridge-cyan">low unemployment</strong>, <strong className="text-cambridge-orange">price stability (low inflation)</strong>, and <strong className="text-cambridge-magenta">Balance of Payments equilibrium</strong>. However, pursuing one objective frequently impairs the achievement of another. The <strong className="text-foreground">Phillips Curve</strong> relationship illustrates the short-run trade-off between inflation and unemployment: expansionary policies that reduce unemployment tend to increase inflation, while contractionary policies that reduce inflation tend to increase unemployment.
            </p>

            <PolicyConflictsDiagram />

            {/* Examiner Trap Box */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <h4 className="font-semibold text-amber-400 mb-2 text-sm">⚠️ Examiner Trap: Short-Run vs Long-Run Phillips Curve</h4>
              <p className="text-xs text-muted-foreground">
                The SR Phillips Curve trade-off holds only temporarily. In the <strong>long run</strong>, as inflation expectations adjust, 
                the economy returns to the Natural Rate of Unemployment (NRU). The LR Phillips Curve is <strong>vertical</strong> at the NRU—
                there is no permanent trade-off. Attempts to hold unemployment below NRU cause <em>accelerating</em> inflation (NAIRU concept).
              </p>
            </div>
          </div>

          {/* Real-World Policy Examples */}
          <div className="glass-card p-5 mt-4">
            <h4 className="font-semibold text-primary mb-3">📌 Real-World Policy Case Studies</h4>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Fiscal: UK Furlough Scheme (2020)</p>
                <p className="text-muted-foreground">£70bn spent paying 80% of wages for 11.7m workers. Prevented mass unemployment during COVID lockdowns. Deficit rose to 15% of GDP—largest since WWII.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Monetary: Fed Rate Hikes (2022-23)</p>
                <p className="text-muted-foreground">Fed raised rates from 0% to 5.25% in 18 months to combat 9% inflation. Caused bank failures (SVB), mortgage rate shock, but core inflation fell to 3.5%.</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Supply-Side: German Apprenticeships</p>
                <p className="text-muted-foreground">Dual education system trains 1.5m apprentices/year. Youth unemployment at 5.3% vs EU average of 14%. Human capital investment → LRAS shifts right.</p>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Final Synthesis */}
        <ContentSection title="Final Synthesis">
          <div className="glass-card p-5 border-l-4 border-primary">
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="text-primary font-serif text-lg">Senior Examiner's Conclusion:</strong> Ultimately, the effectiveness of any macroeconomic policy is constrained by <strong>Time Lags</strong> (recognition, implementation, and response lags), the <strong>Degree of Spare Capacity</strong> in the economy, and the <strong>State of Expectations</strong> among households and firms. In a deep recession characterised by a <em>Liquidity Trap</em>, monetary policy may become ineffective ("pushing on a string"), making fiscal policy the more potent tool for recovery. Conversely, in an economy operating near full capacity, expansionary demand-side policies simply generate inflation, making supply-side reforms essential for sustainable growth. The optimal policy mix depends on the specific macroeconomic context: the cause of the problem (demand-side or supply-side shock), the current position in the business cycle, and the relative importance society places on competing objectives.
            </p>
          </div>

          {/* Policy Selection Framework */}
          <div className="glass-card p-5 mt-4 bg-gradient-to-br from-secondary/5 to-transparent">
            <h4 className="font-semibold text-secondary mb-3">📝 Exam Answer Framework: Policy Selection</h4>
            <div className="text-xs text-muted-foreground space-y-2">
              <p><strong>Step 1:</strong> Identify the problem (demand-side: recession/inflation OR supply-side: stagflation/low productivity)</p>
              <p><strong>Step 2:</strong> Select appropriate policy tool(s) matched to the problem cause</p>
              <p><strong>Step 3:</strong> Explain the transmission mechanism using chains of analysis</p>
              <p><strong>Step 4:</strong> Evaluate limitations (time lags, crowding out, liquidity trap, side effects)</p>
              <p><strong>Step 5:</strong> Consider policy mix—rarely is a single instrument optimal</p>
            </div>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default MacroeconomicPolicy;
