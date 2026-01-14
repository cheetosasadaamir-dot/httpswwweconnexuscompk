import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import MultiplierDiagram from '@/components/diagrams/MultiplierDiagram';

const GovernmentTrade = () => {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">A2 Level • Chapter 4</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Government and Trade
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Extending the Keynesian model to include government expenditure, taxation, and the foreign sector.
          </p>
        </div>

        {/* 3-Sector Model */}
        <ContentSection title="Closed Economy with Government (3-Sector Model)">
          <NoteCard title="Government in the Model" type="theory">
            <p>
              <strong>Government expenditure</strong> on goods and services like education, healthcare, and 
              infrastructure is financed through tax revenue. In the Keynesian model, we treat government 
              expenditure (G) as <strong>autonomous</strong> – that is, not dependent upon the level of 
              national income. We do not include transfer payments in 'G'.
            </p>
          </NoteCard>

          <NoteCard title="Tax Revenue and Disposable Income" type="definition">
            <p>
              <strong>Net taxes (T)</strong> represent total tax revenue received by the government minus 
              total transfer payments made by the government. The tax rate is treated as autonomous – the 
              government sets its tax rate and doesn't vary it as GDP changes. However, this makes tax 
              revenues <strong>endogenous</strong> – as GDP rises with a given tax rate, the tax revenue 
              will also rise.
            </p>
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <p className="font-semibold mb-2">Budget Balance = T - G</p>
              <ul className="space-y-1 text-sm">
                <li><strong>T - G &gt; 0:</strong> Budget Surplus (positive public savings)</li>
                <li><strong>T - G = 0:</strong> Balanced Budget</li>
                <li><strong>T - G &lt; 0:</strong> Budget Deficit (negative public savings)</li>
              </ul>
            </div>
          </NoteCard>

          <NoteCard title="Effect of Taxes on Consumption" type="application">
            <p>
              Disposable income available to consumers falls at each level of national income as tax 
              rates increase. The higher the proportion of national income taken in taxes, the lower 
              the income available to consume and save, and therefore the lower will be the MPC and MPS 
              <strong> after tax</strong>.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-2">Tax Rate</th>
                    <th className="text-right py-2">MPC After Tax</th>
                    <th className="text-right py-2">MPS After Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">0%</td>
                    <td className="text-right">0.8 × (1-0) = 0.80</td>
                    <td className="text-right">0.2 × (1-0) = 0.20</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">10%</td>
                    <td className="text-right">0.8 × (1-0.1) = 0.72</td>
                    <td className="text-right">0.2 × (1-0.1) = 0.18</td>
                  </tr>
                  <tr>
                    <td className="py-2">25%</td>
                    <td className="text-right">0.8 × (1-0.25) = 0.60</td>
                    <td className="text-right">0.2 × (1-0.25) = 0.15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </NoteCard>

          <NoteCard title="3-Sector Equilibrium" type="formula">
            <p className="mb-3">With government added, the aggregate expenditure function becomes:</p>
            <div className="space-y-2 font-mono text-sm bg-muted/30 p-4 rounded-lg">
              <p>AE = C + I + G</p>
              <p>C = 100 + 0.72Y (with 10% tax)</p>
              <p>I = 250</p>
              <p>G = 170</p>
              <p className="text-primary font-bold pt-2">AE = 520 + 0.72Y</p>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="font-mono text-sm">
                Y = AE → Y = 520 + 0.72Y → 0.28Y = 520 → <strong>Y* = 1,857</strong>
              </p>
            </div>
          </NoteCard>

          <AnalysisBlock title="Using Withdrawals = Injections">
            <p className="text-sm mb-3">In the 3-sector model, equilibrium can also be found where S + T = I + G:</p>
            <div className="space-y-2 font-mono text-sm">
              <p>S = -100 + 0.18Y</p>
              <p>T = 0.1Y</p>
              <p>W = S + T = -100 + 0.28Y</p>
              <p>J = I + G = 250 + 170 = 420</p>
              <p className="pt-2">-100 + 0.28Y = 420 → Y* = 1,857</p>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* 3-Sector Multiplier */}
        <ContentSection title="The Multiplier in a 3-Sector Model">
          <NoteCard title="Modified Multiplier Formula" type="formula">
            <div className="text-center p-4 bg-cambridge-orange/10 rounded-lg border border-cambridge-orange/20">
              <p className="text-2xl font-mono font-bold text-cambridge-orange mb-2">
                k = 1 / (MPS + MRT)
              </p>
              <p className="text-sm text-muted-foreground">
                where MRT = Marginal Rate of Taxation
              </p>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Example:</strong> MPS after tax = 0.18, MRT = 0.1</p>
              <p className="font-mono mt-2">k = 1 / (0.18 + 0.10) = 1 / 0.28 = 3.57</p>
              <p className="text-muted-foreground mt-2">
                A $100m increase in autonomous expenditure leads to a $357m increase in Y.
              </p>
            </div>
          </NoteCard>

          <MultiplierDiagram sectors={3} />

          <ExamTipBox title="Why is the 3-Sector Multiplier Smaller?" variant="gold">
            <p>
              The 3-sector multiplier (3.57) is smaller than the 2-sector multiplier (5) because 
              taxation acts as an additional <strong>leakage</strong> from the circular flow. 
              At each round of spending, some income is withdrawn as taxes in addition to savings, 
              so less is available for the next round of induced consumption.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* 4-Sector Model */}
        <ContentSection title="Open Economy with Government (4-Sector Model)">
          <NoteCard title="The Foreign Sector" type="theory">
            <p>
              In an open economy, we bring in the foreign sector through imports (M) and exports (X). 
              <strong> Exports</strong> depend on spending decisions made by foreign consumers and 
              are treated as <strong>autonomous</strong>. <strong>Imports</strong>, however, depend 
              on domestic income – as Y rises, spending on imported goods also rises.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-cambridge-green/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-green">Exports (X)</h5>
                <p className="text-sm">Autonomous injection: X = 540</p>
              </div>
              <div className="p-3 bg-cambridge-magenta/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-magenta">Imports (M)</h5>
                <p className="text-sm">Endogenous withdrawal: M = 0.25Y</p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Factors Affecting Net Exports" type="application">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-primary">1. Foreign GDP</h5>
                <p className="text-sm text-muted-foreground">
                  An increase in foreign GDP results in an increase in demand for domestic exports. 
                  As X increases, the (X-M) function shifts upward.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-primary">2. Relative International Prices</h5>
                <p className="text-sm text-muted-foreground">
                  Changes in the prices of home-produced goods relative to foreign goods cause both 
                  imports and exports to change. Two key factors:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• <strong>Inflation differentials:</strong> Lower domestic inflation makes exports more competitive</li>
                  <li>• <strong>Exchange rate changes:</strong> Currency depreciation makes exports cheaper and imports more expensive</li>
                </ul>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="4-Sector Equilibrium" type="formula">
            <p className="mb-3">The full aggregate expenditure function:</p>
            <div className="space-y-2 font-mono text-sm bg-muted/30 p-4 rounded-lg">
              <p>AE = C + I + G + X - M</p>
              <p>C = 100 + 0.72Y</p>
              <p>I = 250, G = 170, X = 540</p>
              <p>M = 0.25Y</p>
              <p className="pt-2">AE = 100 + 0.72Y + 250 + 170 + 540 - 0.25Y</p>
              <p className="text-primary font-bold">AE = 1060 + 0.47Y</p>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="font-mono text-sm">
                Y = 1060 + 0.47Y → 0.53Y = 1060 → <strong>Y* = 2,000</strong>
              </p>
            </div>
          </NoteCard>

          <AnalysisBlock title="Verification: Injections = Withdrawals">
            <div className="space-y-2 font-mono text-sm">
              <p>S + T + M = I + G + X</p>
              <p>-100 + 0.18Y + 0.1Y + 0.25Y = 250 + 170 + 540</p>
              <p>-100 + 0.53Y = 960</p>
              <p className="text-primary font-bold">Y* = 1060 / 0.53 = 2,000 ✓</p>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* 4-Sector Multiplier */}
        <ContentSection title="The Multiplier in a 4-Sector Model">
          <NoteCard title="Open Economy Multiplier" type="formula">
            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
              <p className="text-2xl font-mono font-bold text-cambridge-cyan mb-2">
                k = 1 / (MPS + MRT + MPM)
              </p>
              <p className="text-sm text-muted-foreground">
                where MPM = Marginal Propensity to Import
              </p>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Example:</strong> MPS = 0.18, MRT = 0.1, MPM = 0.25</p>
              <p className="font-mono mt-2">k = 1 / (0.18 + 0.10 + 0.25) = 1 / 0.53 = 1.89</p>
              <p className="text-muted-foreground mt-2">
                A $100m increase in autonomous expenditure leads to only a $189m increase in Y.
              </p>
            </div>
          </NoteCard>

          <MultiplierDiagram sectors={4} />

          <NoteCard title="Determinants of Multiplier Size" type="application">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-cambridge-orange">1. Openness of the Economy</h5>
                <p className="text-sm text-muted-foreground">
                  The more open the economy, the higher the marginal propensity to import (MPM), 
                  the lower the MPC on domestic goods, and therefore the <strong>lower the multiplier</strong>. 
                  Open economies like Singapore have very small multipliers.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-cambridge-cyan">2. Interest Rates</h5>
                <p className="text-sm text-muted-foreground">
                  Higher interest rates encourage savings, increasing MPS and <strong>reducing the multiplier</strong>.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-cambridge-green">3. Tax Rates</h5>
                <p className="text-sm text-muted-foreground">
                  Higher tax rates result in lower disposable income available for consumption, 
                  thereby <strong>reducing the multiplier</strong>.
                </p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Full Employment */}
        <ContentSection title="Full Employment National Income">
          <NoteCard title="The Keynesian Perspective" type="theory">
            <p>
              Keynesian theory assumes that there is a <strong>maximum level of national output</strong>, 
              and hence real income, which can be obtained at any one time. If the equilibrium is at this 
              level, there will be no deficiency of aggregate expenditure and hence no disequilibrium 
              unemployment. This level of income is referred to as the <strong>full employment level 
              of national income</strong>.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-green mb-2">Inflationary Gap</h4>
              <p className="text-sm text-muted-foreground">
                When equilibrium Y exceeds full-employment Y. Excess demand causes inflation. 
                <strong> Policy response:</strong> Reduce G or increase T.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-magenta mb-2">Deflationary Gap</h4>
              <p className="text-sm text-muted-foreground">
                When equilibrium Y is below full-employment Y. Deficient demand causes unemployment. 
                <strong> Policy response:</strong> Increase G or reduce T.
              </p>
            </div>
          </div>

          <ExamTipBox title="Key Policy Implication" variant="gold">
            <p>
              The size of the multiplier determines how much government spending must change to 
              close an output gap. If there's a $100bn deflationary gap and the multiplier is 2, 
              the government needs to increase G by only $50bn (since $50bn × 2 = $100bn).
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Equations</h3>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div className="space-y-2">
                <p>3-Sector: AE = C + I + G</p>
                <p>4-Sector: AE = C + I + G + X - M</p>
                <p>Budget Balance = T - G</p>
              </div>
              <div className="space-y-2">
                <p>k₃ = 1 / (MPS + MRT)</p>
                <p>k₄ = 1 / (MPS + MRT + MPM)</p>
                <p>MPC + MPS + MRT = 1</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 mt-4">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Taxes reduce disposable income, lowering MPC after tax and shrinking the multiplier.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                The 4-sector multiplier is smallest due to three leakages: savings, taxes, and imports.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Open economies have smaller multipliers because spending leaks abroad.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Government can use fiscal policy (G and T) to close inflationary or deflationary gaps.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default GovernmentTrade;
