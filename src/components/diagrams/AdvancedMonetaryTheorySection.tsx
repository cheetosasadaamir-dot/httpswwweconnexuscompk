import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import AnalysisBlock from '@/components/AnalysisBlock';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import 'katex/dist/katex.min.css';

const AdvancedMonetaryTheorySection = () => {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-4 bg-gradient-to-r from-cambridge-cyan/20 via-cambridge-magenta/10 to-cambridge-orange/10 rounded-lg border border-cambridge-cyan/30"
      >
        <span className="inline-block px-2 py-0.5 bg-cambridge-cyan/20 text-cambridge-cyan text-xs font-semibold rounded mb-2">
          A2 SPECIALIST — MONETARY THEORY
        </span>
        <h3 className="font-serif text-xl text-silver-bright mb-2">
          Advanced Theory: Quantity Theory & MPC Policy Determination
        </h3>
        <p className="text-sm text-muted-foreground">
          This section expands upon the Monetarist framework, detailing Fisher's Equation of Exchange, 
          the AD/AS transmission of money supply changes, and the factors influencing the Monetary Policy Committee's decisions.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      {/* QUANTITY THEORY OF MONEY */}
      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h4 className="font-serif text-lg font-semibold text-silver-bright">
          1. The Quantity Theory of Money (Fisher's Equation)
        </h4>

        <div className="prose prose-invert max-w-none">
          <p className="text-sm leading-relaxed text-justify text-foreground/90">
            The <strong className="text-cambridge-cyan">Quantity Theory of Money</strong> represents the foundational 
            Monetarist proposition that <strong>inflation occurs if the money supply increases at a faster rate than 
            national income</strong>. The theory is encapsulated in Fisher's Equation of Exchange, which establishes a 
            precise mathematical relationship between monetary variables and the price level.
          </p>
        </div>

        {/* Fisher's Equation Display */}
        <div className="p-5 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground mb-2">Fisher's Equation of Exchange</p>
            <BlockMath math="MV = PQ \quad \text{or equivalently} \quad MV = PT" />
          </div>
          
          {/* Variable Definitions */}
          <div className="grid md:grid-cols-4 gap-3 mt-4">
            <div className="p-3 bg-card/50 rounded-lg border border-cambridge-cyan/20">
              <div className="text-lg font-bold text-cambridge-cyan text-center">M</div>
              <p className="text-[10px] text-muted-foreground text-center mt-1">
                <strong>Money Supply</strong><br />
                Total stock of money in circulation
              </p>
            </div>
            <div className="p-3 bg-card/50 rounded-lg border border-cambridge-magenta/20">
              <div className="text-lg font-bold text-cambridge-magenta text-center">V</div>
              <p className="text-[10px] text-muted-foreground text-center mt-1">
                <strong>Velocity of Circulation</strong><br />
                Average times each £ is spent per year
              </p>
            </div>
            <div className="p-3 bg-card/50 rounded-lg border border-cambridge-orange/20">
              <div className="text-lg font-bold text-cambridge-orange text-center">P</div>
              <p className="text-[10px] text-muted-foreground text-center mt-1">
                <strong>Price Level</strong><br />
                Average price of goods (GPL)
              </p>
            </div>
            <div className="p-3 bg-card/50 rounded-lg border border-cambridge-green/20">
              <div className="text-lg font-bold text-cambridge-green text-center">Q / T</div>
              <p className="text-[10px] text-muted-foreground text-center mt-1">
                <strong>Real Output / Transactions</strong><br />
                Real GDP or total transactions
              </p>
            </div>
          </div>
        </div>

        {/* Key Assumptions */}
        <NoteCard title="Critical Monetarist Assumptions" type="theory">
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-cambridge-magenta">1. Velocity (V) is Constant:</strong> Monetarists assume 
              <InlineMath math="V" /> is stable because the frequency with which workers are paid (weekly, monthly) 
              does not change often. The patterns of transactions in an economy are institutionally determined and 
              therefore predictable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-cambridge-green">2. Output (Q) is Independent of Money Supply:</strong> In the 
              long run, real output is determined solely by <strong>supply-side factors</strong> (technology, labour, 
              capital). Money is "neutral"—changes in <InlineMath math="M" /> affect only nominal variables 
              (<InlineMath math="P" />), not real variables (<InlineMath math="Q" />).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-cambridge-orange">Implication:</strong> If <InlineMath math="V" /> and 
              <InlineMath math="Q" /> are constant, then <InlineMath math="\%\Delta M = \%\Delta P" />. A 10% 
              increase in money supply causes exactly 10% inflation.
            </p>
          </div>
        </NoteCard>

        {/* Mathematical Derivation */}
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <h5 className="font-semibold text-sm text-foreground mb-3">Mathematical Derivation: From MV=PQ to Inflation</h5>
          <div className="space-y-3 text-xs">
            <div className="p-2 bg-card/50 rounded">
              <p className="text-muted-foreground">Starting with Fisher's Identity:</p>
              <BlockMath math="MV = PQ" />
            </div>
            <div className="p-2 bg-card/50 rounded">
              <p className="text-muted-foreground">Taking percentage changes and assuming <InlineMath math="\Delta V = 0" /> (constant velocity):</p>
              <BlockMath math="\%\Delta M + \%\Delta V = \%\Delta P + \%\Delta Q" />
              <BlockMath math="\%\Delta M = \%\Delta P + \%\Delta Q" />
            </div>
            <div className="p-2 bg-cambridge-cyan/10 rounded border border-cambridge-cyan/20">
              <p className="text-muted-foreground">Rearranging for inflation (<InlineMath math="\pi = \%\Delta P" />):</p>
              <BlockMath math="\pi = \%\Delta M - \%\Delta Q" />
              <p className="text-cambridge-cyan text-center mt-2 font-medium">
                Inflation equals money growth minus real output growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      {/* THE LINK TO AD/AS */}
      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h4 className="font-serif text-lg font-semibold text-silver-bright">
          2. The Money Supply → AD/AS Transmission
        </h4>

        <div className="prose prose-invert max-w-none">
          <p className="text-sm leading-relaxed text-justify text-foreground/90">
            The Quantity Theory provides the intellectual foundation for understanding how monetary expansion 
            translates into inflation through the AD/AS framework. The transmission operates through the 
            <strong className="text-cambridge-cyan"> direct channel</strong>: an increase in money supply gives 
            consumers more purchasing power, which shifts the AD curve rightward. The resulting output and price 
            effects depend on the economy's position on the AS curve.
          </p>
        </div>

        {/* Zero-Gap Logic Chain */}
        <AnalysisBlock title="Zero-Gap Transmission Chain: ↑M → Inflation (Classical/Monetarist View)">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-cyan/20 text-cambridge-cyan text-xs font-bold rounded-full">1</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-cyan">Initial Injection:</strong> Central bank increases money supply 
                (<InlineMath math="\uparrow M^s" />) through OMO or QE → Consumers and firms have greater nominal money holdings
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-magenta/20 text-cambridge-magenta text-xs font-bold rounded-full">2</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-magenta">Spending Response:</strong> Excess money balances are spent on goods 
                and services → Consumer expenditure (<InlineMath math="C" />) rises → <strong>AD shifts rightward</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-green/20 text-cambridge-green text-xs font-bold rounded-full">3</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-green">Short-Run Response:</strong> Firms increase production to meet higher 
                demand → A <strong>positive output gap</strong> emerges → Labour demand rises → <InlineMath math="\uparrow" /> Employment
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-orange/20 text-cambridge-orange text-xs font-bold rounded-full">4</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-orange">Wage-Price Spiral:</strong> Labour market tightens → Workers demand 
                higher wages to maintain real purchasing power → Production costs rise → Firms increase prices → 
                <strong className="text-destructive"> SRAS shifts leftward</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary/20 text-primary text-xs font-bold rounded-full">5</span>
              <p className="text-muted-foreground">
                <strong className="text-primary">Long-Run Equilibrium:</strong> Economy returns to full employment output 
                (<InlineMath math="Y_f" />) but at a <strong>permanently higher price level</strong>. Real value of money 
                has fallen → Inflation is complete.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        {/* Diagrammatic Summary */}
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <h5 className="font-semibold text-sm text-foreground mb-3">Diagrammatic Summary: Classical AD/AS Transmission</h5>
          <div className="text-center p-3 bg-card/50 rounded-lg">
            <BlockMath math="\uparrow M \rightarrow \uparrow C \rightarrow AD_0 \rightarrow AD_1 \rightarrow \text{Output Gap at } Y_1 > Y_f" />
            <p className="text-xs text-muted-foreground mt-2">↓</p>
            <BlockMath math="\uparrow W \rightarrow \uparrow \text{Costs} \rightarrow SRAS_0 \rightarrow SRAS_1 \rightarrow Y \text{ returns to } Y_f" />
            <p className="text-xs text-muted-foreground mt-2">↓</p>
            <p className="text-sm text-cambridge-orange font-semibold">
              Final Result: <InlineMath math="P_1 > P_0" /> but <InlineMath math="Y_1 = Y_f" /> (inflation, no real growth)
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      {/* MPC ROLE & INTEREST RATE DETERMINATION */}
      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h4 className="font-serif text-lg font-semibold text-silver-bright">
          3. The Monetary Policy Committee (MPC) & Interest Rate Determination
        </h4>

        <div className="prose prose-invert max-w-none">
          <p className="text-sm leading-relaxed text-justify text-foreground/90">
            In the UK, the <strong className="text-cambridge-magenta">Monetary Policy Committee (MPC)</strong> of the 
            Bank of England is responsible for setting the official Bank Rate to achieve the government's inflation 
            target (currently 2% CPI). The nine-member committee, which operates independently from the government, 
            meets each month to assess economic conditions and determine the appropriate policy stance. Understanding 
            the factors that influence the MPC's decisions is essential for evaluating monetary policy effectiveness.
          </p>
        </div>

        {/* MPC Factors Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 rounded-lg border-l-2 border-cambridge-cyan"
          >
            <h5 className="font-semibold text-cambridge-cyan mb-2">Consumer Spending</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>High spending levels</strong> create <strong className="text-destructive">inflationary pressure</strong> 
              through demand-pull mechanisms. If consumer expenditure is growing faster than productive capacity, the 
              MPC will consider <strong>raising interest rates</strong> to encourage saving over spending and reduce 
              the growth of AD.
            </p>
            <div className="mt-2 p-2 bg-cambridge-cyan/10 rounded text-xs font-mono text-center">
              ↑C → ↑AD → ↑Inflationary Pressure → <span className="text-cambridge-orange">↑r</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 rounded-lg border-l-2 border-cambridge-magenta"
          >
            <h5 className="font-semibold text-cambridge-magenta mb-2">Unemployment Rate</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>High unemployment</strong> signals weak aggregate demand and spare capacity in the economy. 
              Consumer spending is likely to fall further as unemployed workers reduce expenditure. This suggests 
              the MPC should <strong>lower interest rates</strong> to stimulate borrowing and spending.
            </p>
            <div className="mt-2 p-2 bg-cambridge-magenta/10 rounded text-xs font-mono text-center">
              ↑Unemployment → ↓C → ↓AD → Deflationary Gap → <span className="text-cambridge-green">↓r</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 rounded-lg border-l-2 border-cambridge-orange"
          >
            <h5 className="font-semibold text-cambridge-orange mb-2">Commodity Prices (Oil)</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Since the UK is a <strong>net importer of oil</strong>, high commodity prices lead to 
              <strong className="text-destructive"> cost-push inflation</strong>. Rising oil prices increase 
              production costs across the economy, shifting SRAS leftward. The MPC may <strong>raise rates</strong> 
              to prevent a wage-price spiral, though this creates a policy dilemma (stagflation).
            </p>
            <div className="mt-2 p-2 bg-cambridge-orange/10 rounded text-xs font-mono text-center">
              ↑Oil Prices → ↑Production Costs → SRAS↢ → <span className="text-destructive">Cost-Push Inflation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 rounded-lg border-l-2 border-cambridge-green"
          >
            <h5 className="font-semibold text-cambridge-green mb-2">Exchange Rate</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A <strong>weak pound</strong> makes imports more expensive and exports cheaper. This boosts net exports 
              (<InlineMath math="X - M" />) but also increases the price of imported raw materials, creating 
              <strong className="text-destructive"> imported inflation</strong>. The MPC might <strong>raise rates</strong> 
              to appreciate the currency and control inflation.
            </p>
            <div className="mt-2 p-2 bg-cambridge-green/10 rounded text-xs font-mono text-center">
              ↓£ → ↑Import Prices → ↑(X-M) but ↑P → <span className="text-cambridge-orange">↑r to stabilise</span>
            </div>
          </motion.div>
        </div>

        {/* Savings Rate */}
        <NoteCard title="Additional Factor: Savings Rate" type="theory">
          <p className="text-sm text-muted-foreground leading-relaxed">
            If the <strong>savings rate is high</strong>, consumers are spending less of their income. This suggests 
            aggregate demand may be weak, prompting the MPC to <strong>lower interest rates</strong> to reduce the 
            reward for saving and encourage consumption. Conversely, very low savings rates indicate high current 
            spending and potential overheating.
          </p>
        </NoteCard>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      {/* HOT MONEY FLOWS & EXCHANGE RATE CHANNEL */}
      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      <div className="space-y-6">
        <h4 className="font-serif text-lg font-semibold text-silver-bright">
          4. Hot Money Flows & The Exchange Rate Channel
        </h4>

        <div className="prose prose-invert max-w-none">
          <p className="text-sm leading-relaxed text-justify text-foreground/90">
            Changes in interest rates affect not only domestic demand but also the <strong className="text-cambridge-cyan">exchange rate</strong> 
            through international capital movements. When a country's interest rates are <strong>higher relative to 
            other countries</strong>, it becomes more attractive for foreign investors to hold assets denominated in 
            that currency. This generates <strong className="text-cambridge-magenta">hot money</strong> inflows—speculative 
            capital seeking the highest short-term returns.
          </p>
        </div>

        {/* Hot Money Transmission Chain */}
        <AnalysisBlock title="Transmission Chain: Interest Rate → Exchange Rate → AD">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-magenta/20 text-cambridge-magenta text-xs font-bold rounded-full">1</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-magenta">Policy Action:</strong> MPC raises Bank Rate 
                (<InlineMath math="\uparrow r_{UK}" />) relative to other economies
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-cyan/20 text-cambridge-cyan text-xs font-bold rounded-full">2</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-cyan">Capital Flows:</strong> Higher returns attract 
                <strong> hot money</strong> inflows → Foreign investors buy GBP to invest in UK assets → 
                <InlineMath math="\uparrow D_{GBP}" />
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-green/20 text-cambridge-green text-xs font-bold rounded-full">3</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-green">Exchange Rate Effect:</strong> Increased demand for GBP causes 
                <strong> currency appreciation</strong> → <InlineMath math="\uparrow £" /> relative to other currencies
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cambridge-orange/20 text-cambridge-orange text-xs font-bold rounded-full">4</span>
              <p className="text-muted-foreground">
                <strong className="text-cambridge-orange">Trade Impact:</strong> Stronger pound makes UK exports 
                <strong> more expensive</strong> abroad (↓X) and imports <strong>cheaper</strong> (↑M) → 
                <InlineMath math="\downarrow (X - M)" /> → <strong>AD shifts left</strong> (deflationary)
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-cambridge-cyan/10 rounded-lg text-center">
            <BlockMath math="\uparrow r \rightarrow \uparrow \text{Hot Money} \rightarrow \uparrow £ \rightarrow \downarrow X, \uparrow M \rightarrow \downarrow AD \rightarrow \downarrow P" />
          </div>
        </AnalysisBlock>

        {/* Exchange Rate & Inflation Box */}
        <div className="p-4 bg-gradient-to-r from-cambridge-orange/10 to-transparent border-l-4 border-cambridge-orange rounded-lg">
          <h5 className="font-semibold text-cambridge-orange mb-3">Exchange Rate Depreciation & SRAS</h5>
          <div className="prose prose-invert max-w-none">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conversely, when interest rates fall or the currency weakens for other reasons, the exchange rate 
              <strong> depreciates</strong>. This has two effects on aggregate supply:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mt-2">
              <li>• <strong>Imported raw materials become more expensive</strong> (oil, metals, components) → Production costs rise</li>
              <li>• <strong>SRAS shifts leftward</strong> → Same output now requires a higher price level</li>
              <li>• Result: <strong className="text-destructive">Cost-push inflation</strong> (or stagflation if output also falls)</li>
            </ul>
          </div>
          <div className="mt-3 p-2 bg-card/50 rounded text-center">
            <p className="text-xs font-mono text-muted-foreground">
              <InlineMath math="\downarrow £" /> → <InlineMath math="\uparrow P_{\text{imports}}" /> → 
              <InlineMath math="\uparrow \text{Costs}" /> → <span className="text-destructive">SRAS↢</span> → 
              <InlineMath math="\uparrow P, \downarrow Y" />
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      {/* EXAMINER INSIGHT */}
      {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
      <ExamTipBox title="Senior Examiner's Note: Integrating QTM with AD/AS" variant="gold">
        <div className="space-y-2 text-xs">
          <p>
            <strong>A* candidates</strong> must demonstrate the ability to integrate the Quantity Theory equation 
            (<InlineMath math="MV = PQ" />) with AD/AS diagrammatic analysis. Key evaluation points:
          </p>
          <ul className="space-y-1 mt-2">
            <li>• The QTM is a <strong>long-run</strong> proposition—short-run price stickiness means 
            <InlineMath math="\uparrow M" /> initially affects <InlineMath math="Q" /> (output) before <InlineMath math="P" /></li>
            <li>• Keynesian critique: <InlineMath math="V" /> is <strong>not constant</strong>—it falls during recessions 
            as agents hoard money (liquidity preference)</li>
            <li>• Policy dilemma: Cost-push inflation from commodity prices puts the MPC in conflict—raising rates controls 
            inflation but worsens unemployment</li>
            <li>• The exchange rate channel operates with <strong>time lags</strong> of 6-18 months for full pass-through 
            to import prices</li>
          </ul>
        </div>
      </ExamTipBox>
    </div>
  );
};

export default AdvancedMonetaryTheorySection;
