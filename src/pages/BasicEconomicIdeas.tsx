import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import PPCConceptDiagram from '@/components/diagrams/PPCConceptDiagram';
import FactorsOfProductionDiagram from '@/components/diagrams/FactorsOfProductionDiagram';
import ConsumerProducerSurplusDiagram from '@/components/diagrams/ConsumerProducerSurplusDiagram';

const BasicEconomicIdeas = () => {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="Basic Economic Ideas"
      subtitle="Understanding scarcity, opportunity cost, and the fundamental economic problem that underpins all economic decision-making."
    >
      {/* Section 1: The Nature of the Economic Problem */}
      <ContentSection 
        title="The Nature of the Economic Problem" 
        subtitle="Scarcity, Choice, and Opportunity Cost"
      >
        <NoteCard title="The Fundamental Economic Problem" type="definition">
          <p>
            The economic problem arises because <GlossaryTooltip term="Scarcity" definition="The condition where unlimited human wants exceed the limited resources available to satisfy them.">scarcity</GlossaryTooltip> exists: 
            human <strong>wants are unlimited</strong> but the <strong>resources to satisfy them are finite</strong>.
          </p>
          <p className="mt-3">
            This means every society must make <strong>choices</strong> about:
          </p>
          <ul className="mt-2 space-y-2 ml-4">
            <li>• <strong>What</strong> to produce (consumer goods vs capital goods)</li>
            <li>• <strong>How</strong> to produce (labor-intensive vs capital-intensive)</li>
            <li>• <strong>For whom</strong> to produce (distribution of output)</li>
          </ul>
        </NoteCard>

        <NoteCard title="Opportunity Cost: The True Cost of Choice" type="theory" delay={100}>
          <p>
            <GlossaryTooltip term="Opportunity Cost" definition="The next best alternative foregone when making a choice. It represents the true economic cost of any decision.">Opportunity cost</GlossaryTooltip> is the 
            <strong> next best alternative foregone</strong> when a choice is made.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary mb-2">Bamford & Grant Example:</p>
            <p className="text-sm">
              If a government spends £10bn on defense instead of healthcare, the opportunity cost 
              is the healthcare services that could have been provided with that £10bn.
            </p>
          </div>
        </NoteCard>

        <ExamTipBox title="Cambridge Marking Scheme Point" variant="gold">
          <p>
            When defining opportunity cost, always mention these key phrases for full marks:
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>✓ "<strong>Next best</strong>" (not just any alternative)</li>
            <li>✓ "<strong>Foregone</strong>" (given up)</li>
            <li>✓ Apply to a <strong>real-world context</strong> (e.g., government spending choices)</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 2: Factors of Production */}
      <ContentSection 
        title="Factors of Production" 
        subtitle="The Four Economic Resources and Their Rewards"
      >
        <NoteCard title="The Four Factors of Production" type="theory">
          <p>
            All production requires combining these four <GlossaryTooltip term="Factors of Production" definition="The economic resources used to produce goods and services: land, labour, capital, and enterprise.">factors of production</GlossaryTooltip>:
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-silver-bright mb-1">Land</h5>
              <p className="text-sm text-muted-foreground">Natural resources (oil, minerals, forests)</p>
              <p className="text-sm text-primary mt-1">Reward: <strong>Rent</strong></p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-silver-bright mb-1">Labour</h5>
              <p className="text-sm text-muted-foreground">Human effort (physical and mental)</p>
              <p className="text-sm text-primary mt-1">Reward: <strong>Wages</strong></p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-silver-bright mb-1">Capital</h5>
              <p className="text-sm text-muted-foreground">Man-made aids to production (machinery)</p>
              <p className="text-sm text-primary mt-1">Reward: <strong>Interest</strong></p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-silver-bright mb-1">Enterprise</h5>
              <p className="text-sm text-muted-foreground">Risk-taking and organization</p>
              <p className="text-sm text-primary mt-1">Reward: <strong>Profit</strong></p>
            </div>
          </div>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <FactorsOfProductionDiagram />
        </div>

        <AnalysisBlock title="AO3 Analysis: Factor Mobility" type="analysis">
          <ul className="space-y-2">
            <li><strong>Occupational mobility:</strong> Ability to switch between jobs (affected by skills, training)</li>
            <li><strong>Geographical mobility:</strong> Ability to relocate (affected by housing, family ties)</li>
            <li><strong>Factor immobility:</strong> Causes structural unemployment and market inefficiency</li>
          </ul>
        </AnalysisBlock>
      </ContentSection>

      {/* Section 3: Production Possibility Curve */}
      <ContentSection 
        title="The Production Possibility Curve" 
        subtitle="Illustrating Scarcity, Choice, and Opportunity Cost"
      >
        <NoteCard title="Understanding the PPC" type="definition">
          <p>
            The <GlossaryTooltip term="Production Possibility Curve" definition="A curve showing the maximum possible combinations of two goods that can be produced with available resources, assuming full and efficient use of resources.">Production Possibility Curve (PPC)</GlossaryTooltip> shows 
            the maximum combinations of two goods an economy can produce with its resources.
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <PPCConceptDiagram />
        </div>

        <AnalysisBlock title="AO3 Analysis: Points on the PPC" type="analysis">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Point Positions:</h5>
              <ul className="space-y-2 text-sm">
                <li><strong>On the curve:</strong> Productive efficiency (full resource use)</li>
                <li><strong>Inside the curve:</strong> Unemployment/inefficiency</li>
                <li><strong>Outside the curve:</strong> Currently unattainable</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Curve Shape:</h5>
              <ul className="space-y-2 text-sm">
                <li><strong>Concave (bowed out):</strong> Increasing opportunity cost</li>
                <li><strong>Linear (straight):</strong> Constant opportunity cost</li>
                <li><strong>Outward shift:</strong> Economic growth</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <AnalysisBlock title="AO4 Evaluation: PPC Shifts" type="evaluation" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Causes of Outward Shift:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Increase in quantity of resources</li>
                <li>• Improvement in quality of resources</li>
                <li>• Technological advancement</li>
                <li>• Better education and training</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Limitations of PPC Model:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Only shows 2 goods (simplified)</li>
                <li>• Assumes <strong>ceteris paribus</strong></li>
                <li>• Does not show <strong>actual</strong> production</li>
                <li>• Ignores <strong>time lags</strong> in adjustment</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="PPC Diagram Drawing Tips" variant="silver" className="mt-6">
          <p>For full marks on PPC diagrams:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>✓ Label axes with specific goods (e.g., "Consumer Goods" vs "Capital Goods")</li>
            <li>✓ Draw a <strong>concave curve</strong> (unless constant OC is specified)</li>
            <li>✓ Mark points clearly (A, B, C) and explain their significance</li>
            <li>✓ Show <strong>arrows</strong> for shifts and movements</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 4: Consumer and Producer Surplus */}
      <ContentSection 
        title="Economic Efficiency & Welfare" 
        subtitle="Consumer Surplus, Producer Surplus, and Allocative Efficiency"
      >
        <NoteCard title="Consumer & Producer Surplus" type="theory">
          <p>
            <GlossaryTooltip term="Consumer Surplus" definition="The difference between what consumers are willing to pay and what they actually pay. Shown as the area below the demand curve and above the market price.">Consumer surplus</GlossaryTooltip> is 
            the extra satisfaction consumers receive from paying less than their maximum willingness to pay.
          </p>
          <p className="mt-3">
            <GlossaryTooltip term="Producer Surplus" definition="The difference between the price producers receive and the minimum price they would accept. Shown as the area above the supply curve and below the market price.">Producer surplus</GlossaryTooltip> is 
            the extra revenue producers receive above their minimum supply price.
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-6">
          <ConsumerProducerSurplusDiagram title="Figure 1.1: Consumer & Producer Surplus at Equilibrium" />
        </div>

        <AnalysisBlock title="AO3 Analysis: Total Economic Welfare" type="analysis">
          <ul className="space-y-2">
            <li><strong>Total welfare = Consumer Surplus + Producer Surplus</strong></li>
            <li><strong>At equilibrium:</strong> Total welfare is maximized (allocative efficiency)</li>
            <li><strong>Market distortions:</strong> Taxes, subsidies, and price controls create deadweight loss</li>
          </ul>
        </AnalysisBlock>

        <AnalysisBlock title="AO4 Evaluation: Allocative vs Productive Efficiency" type="evaluation" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Allocative Efficiency (P = MC):</h5>
              <ul className="space-y-1 text-sm">
                <li>• Resources allocated to maximize welfare</li>
                <li>• Social marginal benefit = Social marginal cost</li>
                <li>• Achieved in perfect competition at equilibrium</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Productive Efficiency (min AC):</h5>
              <ul className="space-y-1 text-sm">
                <li>• Production at lowest possible cost</li>
                <li>• No wasted resources</li>
                <li>• Firm operates at minimum average cost</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>
      </ContentSection>

      {/* Section 5: Economic Systems */}
      <ContentSection 
        title="Economic Systems" 
        subtitle="How Societies Solve the Economic Problem"
      >
        <NoteCard title="Types of Economic Systems" type="theory">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-cyan-400 mb-2">Free Market Economy</h5>
              <p className="text-sm text-muted-foreground">
                Resources allocated by the <strong>price mechanism</strong>. Private ownership, profit motive, consumer sovereignty.
              </p>
              <p className="text-xs text-primary mt-2">Examples: Hong Kong (historical), Singapore</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-magenta-400 mb-2">Command/Planned Economy</h5>
              <p className="text-sm text-muted-foreground">
                Resources allocated by <strong>central planning</strong>. State ownership, production targets, rationing.
              </p>
              <p className="text-xs text-primary mt-2">Examples: Cuba, North Korea, Former USSR</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-semibold text-green-400 mb-2">Mixed Economy</h5>
              <p className="text-sm text-muted-foreground">
                Combination of <strong>market and government</strong> allocation. Most modern economies.
              </p>
              <p className="text-xs text-primary mt-2">Examples: UK, USA, Germany, France</p>
            </div>
          </div>
        </NoteCard>

        <AnalysisBlock title="AO4 Evaluation: Economic Systems Comparison" type="evaluation">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-silver/20">
                <th className="text-left py-2 text-silver-bright">Criterion</th>
                <th className="text-left py-2 text-cyan-400">Free Market</th>
                <th className="text-left py-2 text-magenta-400">Planned</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-silver/10">
                <td className="py-2 font-medium">Efficiency</td>
                <td className="py-2">High (price signals)</td>
                <td className="py-2">Low (bureaucracy)</td>
              </tr>
              <tr className="border-b border-silver/10">
                <td className="py-2 font-medium">Equity</td>
                <td className="py-2">Low (inequality)</td>
                <td className="py-2">High (redistribution)</td>
              </tr>
              <tr className="border-b border-silver/10">
                <td className="py-2 font-medium">Innovation</td>
                <td className="py-2">High (profit motive)</td>
                <td className="py-2">Low (no incentive)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Market Failures</td>
                <td className="py-2">Prone to them</td>
                <td className="py-2">Can correct them</td>
              </tr>
            </tbody>
          </table>
        </AnalysisBlock>

        <ExamTipBox title="AO4 Evaluation Phrases" variant="gold" className="mt-6">
          <p>Use these evaluation connectives for top marks:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• "However, this depends on the <strong>magnitude</strong> of..."</li>
            <li>• "The effectiveness is limited by <strong>time lags</strong>..."</li>
            <li>• "This analysis assumes <strong>ceteris paribus</strong>, but in reality..."</li>
            <li>• "It could be argued that... <strong>on the other hand</strong>..."</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default BasicEconomicIdeas;
