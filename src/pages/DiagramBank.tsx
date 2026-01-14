import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import NoteCard from '@/components/NoteCard';
import DemandSupplyDiagram from '@/components/diagrams/DemandSupplyDiagram';
import ExternalitiesDiagram from '@/components/diagrams/ExternalitiesDiagram';
import MonopolyDiagram from '@/components/diagrams/MonopolyDiagram';
import KeynesianLRASDiagram from '@/components/diagrams/KeynesianLRASDiagram';

const DiagramBank = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
            Cambridge 9708 Standard
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl section-title mb-4">
            Diagram Bank
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed-plus max-w-3xl">
            High-fidelity diagrams drawn exactly as Cambridge examiners expect. Each diagram uses 
            standard <span className="text-cyan-400">P, Q, D, S</span> notation with equilibrium shifts marked as 
            <span className="text-cyan-400"> E₁ → E₂</span>.
          </p>
        </div>

        {/* Color Legend */}
        <div className="glass-card p-6 mb-12">
          <h3 className="font-serif text-xl text-silver-bright mb-4">Cambridge Standard Color Key</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(185 100% 50%)' }} />
              <span className="text-sm text-muted-foreground">Primary Curves (D, S, LRAS)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(300 100% 60%)' }} />
              <span className="text-sm text-muted-foreground">Shifted Curves (D₁, S₁)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(45 93% 55%)' }} />
              <span className="text-sm text-muted-foreground">Equilibrium Points (E)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(0 84% 60%)' }} />
              <span className="text-sm text-muted-foreground">Welfare Loss/Deadweight</span>
            </div>
          </div>
        </div>

        {/* Microeconomics Section */}
        <ContentSection title="Microeconomics Diagrams">
          {/* Demand & Supply */}
          <NoteCard title="Market Equilibrium: Demand & Supply" type="theory">
            <p>
              The foundation of price determination in free markets. Cambridge requires clear labeling 
              of <strong>P₁, P₂</strong> for prices and <strong>Q₁, Q₂</strong> for quantities, with 
              equilibrium marked as <strong>E</strong>.
            </p>
          </NoteCard>

          <div className="glass-card p-8 my-6">
            <DemandSupplyDiagram title="Figure 2.1: Market Equilibrium & Price Mechanism" />
          </div>

          <AnalysisBlock title="AO3 Analysis: Price Mechanism Functions" type="analysis">
            <ul className="space-y-2">
              <li><strong>Signaling:</strong> Price changes signal to producers and consumers about scarcity</li>
              <li><strong>Incentive:</strong> Higher prices incentivize increased supply; lower prices incentivize increased demand</li>
              <li><strong>Rationing:</strong> Prices allocate scarce resources to those willing and able to pay</li>
            </ul>
          </AnalysisBlock>

          <AnalysisBlock title="AO4 Evaluation: Limitations of the Price Mechanism" type="evaluation" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Market Failures:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Externalities:</strong> Price doesn't reflect social costs/benefits</li>
                  <li>• <strong>Public goods:</strong> Non-excludable, non-rival goods underprovided</li>
                  <li>• <strong>Information asymmetry:</strong> Imperfect knowledge distorts decisions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Time Lags & Ceteris Paribus:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Time lags:</strong> Supply response may be delayed</li>
                  <li>• <strong>Magnitude:</strong> Size of shift affects equilibrium change</li>
                  <li>• <strong>Elasticity:</strong> Responsiveness determines price vs quantity change</li>
                </ul>
              </div>
            </div>
          </AnalysisBlock>

          {/* Externalities */}
          <NoteCard title="Externalities: Negative Production Externality" type="theory" delay={200}>
            <p>
              Cambridge 9708 requires the shaded <strong>welfare loss triangle</strong> and clear distinction between 
              <strong>MPC (Marginal Private Cost)</strong> and <strong>MSC (Marginal Social Cost)</strong>.
            </p>
          </NoteCard>

          <div className="glass-card p-8 my-6">
            <ExternalitiesDiagram title="Figure 2.2: Negative Production Externality with Welfare Loss" />
          </div>

          <AnalysisBlock title="AO3 Analysis: Understanding Externalities" type="analysis">
            <ul className="space-y-2">
              <li><strong>External cost:</strong> The vertical distance between MSC and MPC represents the external cost per unit</li>
              <li><strong>Overproduction:</strong> Free market produces at Q₁ (where MPC = MPB) instead of socially optimal Q*</li>
              <li><strong>Welfare loss:</strong> The shaded triangle represents deadweight loss to society</li>
            </ul>
          </AnalysisBlock>

          <AnalysisBlock title="AO4 Evaluation: Policy Interventions" type="evaluation" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Pigouvian Tax (Strengths):</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Internalizes external costs</li>
                  <li>• Generates government revenue</li>
                  <li>• Uses price mechanism (market-based)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Pigouvian Tax (Weaknesses):</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Difficult to calculate optimal tax rate</li>
                  <li>• Regressive impact on lower incomes</li>
                  <li>• Time lags in behavioral change</li>
                </ul>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Cambridge Marking Scheme Tip" variant="gold" className="mt-6">
            <p>
              When drawing externality diagrams, examiners award marks for:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>✓ Correctly labeled axes (Price/Cost vs Quantity)</li>
              <li>✓ MSC above MPC for negative externality (or MSB above MPB for positive)</li>
              <li>✓ Shaded welfare loss triangle between curves from Q* to Q₁</li>
              <li>✓ Clear E₁ → E* notation showing movement to social optimum</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* Market Structures Section */}
        <ContentSection title="Market Structures Diagrams">
          <NoteCard title="Pure Monopoly: Profit Maximization" type="theory">
            <p>
              The monopoly diagram is a <strong>high-mark diagram</strong> in Cambridge exams. 
              Key features include the <strong>MC = MR</strong> profit maximization point, the 
              <strong>AR (Demand)</strong> curve, and the <strong>supernormal profit area</strong>.
            </p>
          </NoteCard>

          <div className="glass-card p-8 my-6">
            <MonopolyDiagram title="Figure 2.3: Monopoly Supernormal Profit" />
          </div>

          <AnalysisBlock title="AO3 Analysis: Monopoly Characteristics" type="analysis">
            <ul className="space-y-2">
              <li><strong>Price maker:</strong> Monopolist faces downward-sloping demand (AR) curve</li>
              <li><strong>MR &lt; AR:</strong> Marginal revenue always below average revenue</li>
              <li><strong>MC = MR:</strong> Profit-maximizing output where marginal cost equals marginal revenue</li>
              <li><strong>P &gt; MC:</strong> Price exceeds marginal cost, indicating allocative inefficiency</li>
            </ul>
          </AnalysisBlock>

          <AnalysisBlock title="AO4 Evaluation: Monopoly Efficiency" type="evaluation" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Arguments Against Monopoly:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Allocative inefficiency:</strong> P ≠ MC</li>
                  <li>• <strong>Productive inefficiency:</strong> Not at minimum AC</li>
                  <li>• <strong>X-inefficiency:</strong> Lack of competitive pressure</li>
                  <li>• <strong>Consumer exploitation:</strong> Higher prices, lower output</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Arguments For Monopoly:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Economies of scale:</strong> Lower AC in natural monopoly</li>
                  <li>• <strong>Dynamic efficiency:</strong> Supernormal profits fund R&D</li>
                  <li>• <strong>Cross-subsidization:</strong> Can support loss-making services</li>
                  <li>• <strong>International competitiveness:</strong> National champions</li>
                </ul>
              </div>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* Macroeconomics Section */}
        <ContentSection title="Macroeconomics Diagrams">
          <NoteCard title="Keynesian LRAS: The Three Phases" type="theory">
            <p>
              Cambridge 9708 specifically requires the <strong>Keynesian Long-Run Aggregate Supply</strong> 
              curve with three distinct sections: <strong>Elastic (horizontal)</strong>, 
              <strong>Intermediate (upward-sloping)</strong>, and <strong>Inelastic (vertical)</strong>.
            </p>
          </NoteCard>

          <div className="glass-card p-8 my-6">
            <KeynesianLRASDiagram title="Figure 2.4: Keynesian LRAS - Three Phases" />
          </div>

          <AnalysisBlock title="AO3 Analysis: Keynesian LRAS Phases" type="analysis">
            <ul className="space-y-2">
              <li><strong>Phase 1 (Elastic):</strong> Economy in deep recession, spare capacity allows output expansion without price increases</li>
              <li><strong>Phase 2 (Intermediate):</strong> Approaching full employment, bottlenecks cause gradual price rises as output expands</li>
              <li><strong>Phase 3 (Inelastic):</strong> Full capacity reached (Yf), further AD increases cause only inflation</li>
            </ul>
          </AnalysisBlock>

          <AnalysisBlock title="AO4 Evaluation: Policy Implications" type="evaluation" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Demand-Side Policies:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Elastic phase:</strong> Fiscal/monetary expansion effective</li>
                  <li>• <strong>Inelastic phase:</strong> Demand-side policies cause inflation only</li>
                  <li>• <strong>Magnitude matters:</strong> Size of AD shift determines outcome</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-silver-bright mb-2">Supply-Side Policies:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Shift LRAS rightward to increase Yf</li>
                  <li>• <strong>Time lags:</strong> Education, infrastructure take years</li>
                  <li>• <strong>Ceteris paribus:</strong> Assumes no external shocks</li>
                </ul>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="AO4 Evaluation Language" variant="silver" className="mt-6">
            <p>
              Use these Cambridge-standard evaluation phrases in your essays:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• "However, this depends on the <strong>magnitude</strong> of the change..."</li>
              <li>• "The effectiveness is limited by <strong>time lags</strong>..."</li>
              <li>• "This analysis assumes <strong>ceteris paribus</strong>, but in reality..."</li>
              <li>• "The impact varies depending on <strong>the phase of the economic cycle</strong>..."</li>
            </ul>
          </ExamTipBox>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default DiagramBank;
