import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import ContentSection from '@/components/ContentSection';
import KeynesianCrossDiagram from '@/components/diagrams/KeynesianCrossDiagram';
import ConsumptionFunctionDiagram from '@/components/diagrams/ConsumptionFunctionDiagram';
import MultiplierDiagram from '@/components/diagrams/MultiplierDiagram';
import ChapterEnrichment from '@/components/ChapterEnrichment';

const IncomeDetermination = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Macro Chapter 2
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">
            National Income Determination
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed-plus">
            The Keynesian model of aggregate expenditure and the determination of equilibrium national income through the 45-degree line analysis.
          </p>
        </motion.div>

        {/* Introduction */}
        <ContentSection title="The Keynesian Framework" id="keynesian-framework">
          <NoteCard title="Aggregate Demand Determines Output" type="concept">
            <p>
              In the Keynesian model, the level of production in the economy depends on the level 
              of <strong>aggregate demand</strong>. If people buy more, firms will produce more 
              in response (given they have spare capacity). If people buy less, firms will cut 
              production and lay off workers.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              This analysis was developed by the 20th century British economist John Maynard Keynes, 
              whose ideas revolutionized macroeconomic thinking during the Great Depression.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <NoteCard title="Endogenous Variables" type="definition">
              <p>
                Variables determined <em>within</em> the model—they depend on the level of national income.
              </p>
              <p className="mt-2 text-sm font-mono text-muted-foreground">
                Examples: Consumption (C), Withdrawals (S, T, M)
              </p>
            </NoteCard>

            <NoteCard title="Exogenous Variables" type="definition">
              <p>
                Variables determined <em>outside</em> the model—independent of national income level.
              </p>
              <p className="mt-2 text-sm font-mono text-muted-foreground">
                Examples: Investment (I), Government Spending (G), Exports (X)
              </p>
            </NoteCard>
          </div>
        </ContentSection>

        {/* Aggregate Expenditure */}
        <ContentSection title="Aggregate Expenditure" id="aggregate-expenditure">
          <NoteCard title="The AE Identity" type="formula">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-2xl font-mono font-bold text-primary mb-2">
                AE = C + I + G + (X - M)
              </p>
              <p className="text-sm text-muted-foreground">
                Total spending on domestically produced goods and services
              </p>
            </div>
          </NoteCard>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-serif font-semibold mb-3">Key Relationships:</h4>
            <div className="space-y-2 text-sm font-mono">
              <p>Y ≡ Cᵈ + W <span className="text-muted-foreground ml-2">(Income = Domestic consumption + Withdrawals)</span></p>
              <p>AE ≡ Cᵈ + J <span className="text-muted-foreground ml-2">(Expenditure = Domestic consumption + Injections)</span></p>
              <p className="text-primary font-bold pt-2">In equilibrium: W = J, therefore Y = AE</p>
            </div>
          </div>
        </ContentSection>

        {/* The 2-Sector Model */}
        <ContentSection title="The 2-Sector Model" id="two-sector">
          <NoteCard title="Simplifying Assumption" type="concept">
            <p>
              We begin with a simple closed economy with no government: <span className="font-mono">AE = C + I</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              This allows us to focus on the fundamental relationship between consumption, 
              investment, and national income determination.
            </p>
          </NoteCard>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-4 text-silver-bright">
            The Keynesian Consumption Function
          </h3>

          <NoteCard title="Consumption Function" type="formula">
            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
              <p className="text-2xl font-mono font-bold text-cambridge-cyan mb-2">
                C = a + bY
              </p>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong className="text-cambridge-cyan">a</strong> = Autonomous consumption</p>
                <p className="text-muted-foreground">Spending that occurs regardless of income (e.g., from savings or borrowing)</p>
              </div>
              <div>
                <p><strong className="text-cambridge-cyan">b</strong> = Marginal Propensity to Consume (MPC)</p>
                <p className="text-muted-foreground">The fraction of each additional dollar of income that is spent</p>
              </div>
            </div>
          </NoteCard>

          <div className="my-8">
            <ConsumptionFunctionDiagram />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <NoteCard title="Marginal Propensity to Consume (MPC)" type="definition">
              <p className="font-mono text-lg mb-2">MPC = ΔC / ΔY</p>
              <p className="text-sm text-muted-foreground">
                The amount of every additional dollar earned that is spent on consumption. 
                For the economy, MPC is positive and less than 1 (some income is always saved).
              </p>
            </NoteCard>

            <NoteCard title="Average Propensity to Consume (APC)" type="definition">
              <p className="font-mono text-lg mb-2">APC = C / Y</p>
              <p className="text-sm text-muted-foreground">
                The proportion of total income spent on consumption. As income rises, 
                APC tends to fall (people save a larger proportion at higher incomes).
              </p>
            </NoteCard>
          </div>

          <ExamTipBox title="The Breakeven Point">
            <p>
              Where C = Y (on the 45° line), APC = 1. To the left, C &gt; Y (dissaving/borrowing). 
              To the right, C &lt; Y (positive saving). Always label this point in your diagrams!
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Saving Function */}
        <ContentSection title="The Saving Function" id="saving-function">
          <NoteCard title="Deriving the Saving Function" type="formula">
            <p className="mb-3">Since disposable income must be either consumed or saved:</p>
            <div className="space-y-2 font-mono text-sm bg-muted/30 p-4 rounded-lg">
              <p>Yᵈ = C + S</p>
              <p>Therefore: S = Yᵈ - C</p>
              <p>S = Y - (a + bY)</p>
              <p className="text-primary font-bold">S = -a + (1-b)Y</p>
            </div>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <NoteCard title="Marginal Propensity to Save (MPS)" type="definition">
              <p className="font-mono text-lg mb-2">MPS = ΔS / ΔY = (1 - b)</p>
              <p className="text-sm text-muted-foreground">
                The fraction of each additional dollar of income that is saved.
              </p>
              <p className="mt-3 text-sm font-medium text-cambridge-magenta">
                MPC + MPS = 1
              </p>
            </NoteCard>

            <NoteCard title="Numerical Example" type="concept">
              <p className="text-sm mb-2">If C = 100 + 0.8Y, then:</p>
              <ul className="space-y-1 text-sm font-mono">
                <li>• MPC = 0.8</li>
                <li>• MPS = 0.2</li>
                <li>• S = -100 + 0.2Y</li>
                <li>• Breakeven: Y = 500</li>
              </ul>
            </NoteCard>
          </div>
        </ContentSection>

        {/* Factors Affecting Consumption */}
        <ContentSection title="Factors Affecting Consumption" id="consumption-factors">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-cyan mb-2">1. Income</h4>
              <p className="text-sm text-muted-foreground">
                The most important determinant. Changes in income cause movement <em>along</em> 
                the consumption function.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-magenta mb-2">2. Wealth</h4>
              <p className="text-sm text-muted-foreground">
                Increases in wealth shift the consumption function <em>upward</em>. People 
                feel less need to save for the future.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-green mb-2">3. Interest Rates</h4>
              <p className="text-sm text-muted-foreground">
                Higher rates discourage borrowing and encourage saving, shifting 
                consumption <em>downward</em>.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-orange mb-2">4. Expectations</h4>
              <p className="text-sm text-muted-foreground">
                Optimism about future income/employment shifts consumption <em>upward</em>; 
                pessimism shifts it <em>downward</em>.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-yellow mb-2">5. Distribution of Income</h4>
              <p className="text-sm text-muted-foreground">
                More equal distribution raises total consumption (poor have higher MPC 
                than rich).
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-primary mb-2">6. Inflation</h4>
              <p className="text-sm text-muted-foreground">
                Dual effects: Expected inflation may bring forward purchases, but also 
                erodes real wealth (encouraging saving).
              </p>
            </div>
          </div>
        </ContentSection>

        {/* The 45-Degree Line */}
        <ContentSection title="The 45-Degree Line Model" id="keynesian-cross">
          <NoteCard title="The Keynesian Cross" type="concept">
            <p>
              The 45° line shows all points where Y = AE. The equilibrium national income 
              is found where the Aggregate Expenditure line intersects the 45° line.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              At this point, what firms produce (Y) exactly equals what people want to buy (AE). 
              There is no unplanned inventory change.
            </p>
          </NoteCard>

          <div className="my-8">
            <KeynesianCrossDiagram />
          </div>

          <AnalysisBlock title="Analysis: Equilibrium Adjustment">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary mb-1">Analysis:</p>
                <p>If AE &gt; Y: Firms experience unplanned inventory depletion. They respond by increasing production, hiring more workers, and expanding output until Y rises to match AE.</p>
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Evaluation:</p>
                <p>The adjustment process involves time lags. Firms may be uncertain whether demand changes are temporary or permanent, leading to cautious responses initially.</p>
              </div>
              <div>
                <p className="font-medium text-primary mb-1">Analysis:</p>
                <p>If AE &lt; Y: Firms experience unplanned inventory accumulation. They respond by cutting production and laying off workers until Y falls to match AE.</p>
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Evaluation:</p>
                <p>This explains how economies can get stuck in recession—if AE is persistently below full-employment output, there is no automatic market mechanism to restore full employment (the Keynesian insight).</p>
              </div>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* The Multiplier */}
        <ContentSection title="The Multiplier Effect" id="multiplier">
          <NoteCard title="What is the Multiplier?" type="concept">
            <p>
              An increase in autonomous expenditure (like investment) leads to a 
              <strong> larger increase in national income</strong>. This amplification 
              effect is called the multiplier.
            </p>
          </NoteCard>

          <div className="my-8">
            <MultiplierDiagram sectors={2} />
          </div>

          <NoteCard title="The Multiplier Formula (2-Sector)" type="formula">
            <div className="text-center p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/20">
              <p className="text-2xl font-mono font-bold text-cambridge-orange mb-2">
                k = 1 / (1 - MPC) = 1 / MPS
              </p>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Example:</strong> If MPC = 0.8, then k = 1/0.2 = 5</p>
              <p className="text-muted-foreground mt-2">
                A $100 million increase in investment leads to a $500 million increase in Y.
              </p>
            </div>
          </NoteCard>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-serif font-semibold mb-3">How the Multiplier Works:</h4>
            <ol className="space-y-2 text-sm">
              <li><strong>Round 1:</strong> Initial $100m injection becomes income for factor owners</li>
              <li><strong>Round 2:</strong> $80m spent (MPC = 0.8), $20m saved</li>
              <li><strong>Round 3:</strong> $64m spent, $16m saved</li>
              <li><strong>...</strong> Process continues, each round smaller</li>
              <li><strong>Total:</strong> ΔY = $100m × (1 + 0.8 + 0.64 + ...) = $500m</li>
            </ol>
          </div>

          <ExamTipBox title="Cambridge Examiner Expectation">
            <p>
              Show the multiplier process step-by-step. Explain that the process ends because 
              each round 'leaks' some income to savings (and in more complex models, to taxes and imports). 
              The multiplier is finite because MPC &lt; 1.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Summary */}
        <ContentSection title="Chapter Summary" id="summary">
          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright">Key Equations</h3>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div className="space-y-2">
                <p>C = a + bY</p>
                <p>S = -a + (1-b)Y</p>
                <p>AE = C + I</p>
              </div>
              <div className="space-y-2">
                <p>MPC + MPS = 1</p>
                <p>APC + APS = 1</p>
                <p>k = 1/(1-MPC)</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 mt-6">
            <h3 className="font-serif text-xl font-semibold mb-4 text-silver-bright">Key Takeaways</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>In the Keynesian model, aggregate demand determines output (demand-led growth).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>The consumption function C = a + bY has autonomous (a) and induced (bY) components.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Equilibrium occurs where the AE line crosses the 45° line (Y = AE).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>The multiplier amplifies changes in autonomous spending: ΔY = k × ΔI.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">5.</span>
                <span>Non-income factors (wealth, interest rates, expectations) shift the consumption function.</span>
              </li>
            </ul>
          </div>
        </ContentSection>
      </div>
      <ChapterEnrichment id="national-income-growth" />
    </Layout>
  );
};

export default IncomeDetermination;
