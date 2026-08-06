import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import EfficiencyDiagram from '@/components/diagrams/EfficiencyDiagram';
import MarketFailureExternalityDiagram from '@/components/diagrams/MarketFailureExternalityDiagram';
import AdvancedEfficiencySection from '@/components/diagrams/AdvancedEfficiencySection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import KeyTakeaways from '@/components/KeyTakeaways';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExaminerTrap from '@/components/ExaminerTrap';
import ChapterEnrichment from '@/components/ChapterEnrichment';

const EconomicEfficiency = () => {
  return (
    <ChapterLayout
      chapterNumber={4}
      title="Economic Efficiency and Market Failure"
      subtitle="Analyzing resource allocation, efficiency types, sources of market failure, and government policy interventions"
    >
      {/* Key Takeaways */}
      <KeyTakeaways
        takeaways={[
          "Allocative efficiency occurs where P = MC (society's willingness to pay equals marginal cost of production); at market level, MSB = MSC.",
          "Productive efficiency occurs at minimum ATC (MC = AC)—all points on the PPF are productively efficient with no waste in production.",
          "Dynamic efficiency captures long-run innovation and R&D investment, often requiring supernormal profits to fund; involves short-run cost trade-offs for long-run gains.",
          "Pareto Optimality: A state where it is impossible to make one person better off without making someone else worse off—achieved on the PPF.",
          "X-inefficiency (Leibenstein) represents organizational slack in monopolies where costs exceed the minimum due to lack of competitive pressure.",
          "Market failure: Complete failure (missing markets) vs Partial failure (wrong quantity/price). MSC = MPC + MEC; MSB = MPB + MEB.",
          "Social CBA: Decision justified if Social Benefits > Social Costs. Challenged by valuation difficulty, payback periods, and equity considerations.",
          "Government interventions: Pigouvian taxes for negative externalities, subsidies for positive externalities, regulation, tradeable permits, and nudge policies."
        ]}
      />

      {/* Topic 1: Resource Allocation and Efficiency */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          Topic 1: Resource Allocation and Efficiency
        </h2>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed-plus text-lg">
            Economic efficiency is achieved when society's scarce resources are allocated in a manner that maximizes total welfare. Understanding the different types of efficiency—productive, allocative, dynamic, and X-efficiency—is essential for analyzing market performance and identifying areas where intervention may improve outcomes.
          </p>
        </div>

        <EfficiencyDiagram />

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Card className="glass-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Productive Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-silver-bright">Firm Level:</strong> Producing at the minimum point of the ATC curve, combining technical efficiency (optimal input mix) with cost efficiency (lowest ATC available).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong className="text-silver-bright">Economy Level:</strong> Operating on the Production Possibility Curve (PPC), where all resources are fully employed and it's impossible to produce more of one good without sacrificing another.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-secondary flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Allocative Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-silver-bright">Firm Level:</strong> Achieved where Price = Marginal Cost (P = MC), meaning consumers pay exactly the cost of producing the last unit.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong className="text-silver-bright">Market Level:</strong> Resources allocated where Marginal Social Benefit equals Marginal Social Cost (MSB = MSC), maximizing total economic welfare.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* X-Efficiency and Dynamic Efficiency */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Card className="glass-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Dynamic Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-silver-bright">Concept:</strong> Efficiency gains over TIME through innovation, R&D investment, and technological progress. Requires resources for investment—often funded by supernormal profits.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong className="text-silver-bright">Paradox:</strong> Static allocative efficiency (P = MC) may conflict with dynamic efficiency. Monopolies may be dynamically efficient despite static inefficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-destructive flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> X-Inefficiency (Leibenstein)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-silver-bright">Definition:</strong> The gap between actual costs and the minimum cost achievable—organizational slack arising from lack of competitive pressure.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong className="text-silver-bright">Cause:</strong> Monopolies face no threat of exit, reducing incentives to minimize costs. Managers may pursue objectives other than profit maximization.
              </p>
            </CardContent>
          </Card>
        </div>

        <AnalysisBlock title="Efficiency Types:  Synthesis" type="analysis">
          <p>
            <strong className="text-cyan-400">Productive Efficiency:</strong> Achieved at minimum ATC where MC = AC. 
            On the PPC, this means operating ON the frontier, not inside it. 
            <strong className="text-cyan-400">Allocative Efficiency:</strong> Achieved where P = MC, meaning the price consumers pay 
            equals the cost of producing the last unit. At market level: MSB = MSC.
            <strong className="text-cyan-400">Connection:</strong> Perfect competition achieves BOTH in long-run equilibrium: 
            P = MC (allocative) and output at minimum ATC (productive). Monopoly achieves NEITHER.
          </p>
        </AnalysisBlock>

        <AnalysisBlock title="Critical Evaluation: Efficiency Trade-offs" type="evaluation">
          <p>
            The <strong className="text-amber-400">"depends on"</strong> evaluation: While perfect competition achieves static efficiency, 
            it may sacrifice <strong>dynamic efficiency</strong>. Normal profits provide no funds for R&D. 
            Schumpeter's hypothesis suggests monopoly power may be necessary for innovation—supernormal profits fund research, 
            and temporary monopoly (patents) rewards inventors. The efficiency case for competition must be balanced against 
            the <strong>innovation case for market power</strong>. The optimal market structure "depends on" whether static or dynamic 
            efficiency is prioritized, the nature of the industry (R&D-intensive or not), and the length of the time horizon considered.
          </p>
        </AnalysisBlock>

        <ExaminerTrap
          trap="Students state monopolies are 'inefficient' without specifying which type. They may also incorrectly claim monopolies cannot be efficient."
          correction="Monopolies are allocatively inefficient (P > MC) and productively inefficient (not at min ATC), but may be DYNAMICALLY efficient if supernormal profits fund R&D. Always specify the efficiency type and evaluate the trade-off."
        />
      </motion.section>

      {/* Topic 2: Sources of Market Failure */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          Topic 2: Sources of Market Failure
        </h2>

        <Card className="glass-card border-destructive/30 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-silver-bright mb-2">Definition: Market Failure</h4>
                <p className="text-muted-foreground">
                  A situation where the free market mechanism fails to achieve an optimal allocation of resources. The interaction of demand and supply does not lead to productive or allocative efficiency, resulting in welfare loss.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 mb-8">
          {[
            { title: 'Public Goods', desc: 'Non-excludable and non-rivalrous goods (e.g., street lighting, national defense). Free-rider problem prevents private provision.' },
            { title: 'Merit Goods', desc: 'Goods with positive externalities that are under-consumed due to information failure (e.g., education, healthcare).' },
            { title: 'Demerit Goods', desc: 'Goods with negative externalities that are over-consumed (e.g., tobacco, junk food, alcohol).' },
            { title: 'Information Failure', desc: 'Asymmetric or imperfect information prevents optimal decision-making by consumers, producers, or workers.' },
            { title: 'Externalities', desc: 'Third-party effects not reflected in market prices—can be positive or negative, in production or consumption.' },
            { title: 'Monopoly Power', desc: 'Firms with market power restrict output and raise prices above competitive levels, creating deadweight loss.' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/30 transition-colors">
              <span className="text-primary font-semibold">{i + 1}. {item.title}:</span>
              <span className="text-muted-foreground ml-2">{item.desc}</span>
            </div>
          ))}
        </div>

        <MarketFailureExternalityDiagram />

        <AnalysisBlock title=" Chain: Negative Production Externality" type="analysis">
          <p>
            <strong className="text-cyan-400">Problem:</strong> Factory production creates pollution (MEC = Marginal External Cost) →
            <strong className="text-cyan-400"> Private vs. Social Cost:</strong> MPC (Marginal Private Cost) &lt; MSC (Marginal Social Cost) where MSC = MPC + MEC →
            <strong className="text-cyan-400"> Market Failure:</strong> Free market produces at Q<sub>market</sub> where MPC = MPB, ignoring external costs →
            <strong className="text-cyan-400"> Welfare Loss:</strong> Optimal output is Q<sub>social</sub> where MSC = MSB; the shaded triangle between the curves represents deadweight welfare loss →
            <strong className="text-cyan-400"> Policy:</strong> Pigouvian tax = MEC at optimal output shifts MPC up to MSC, internalizing the externality.
          </p>
        </AnalysisBlock>

        <AnalysisBlock title=" Chain: Positive Consumption Externality (Merit Good)" type="analysis">
          <p>
            <strong className="text-cyan-400">Example:</strong> Education generates benefits to society beyond the individual (MEB = Marginal External Benefit) →
            <strong className="text-cyan-400"> Private vs. Social Benefit:</strong> MPB &lt; MSB where MSB = MPB + MEB →
            <strong className="text-cyan-400"> Market Failure:</strong> Free market consumes at Q<sub>market</sub> where MPB = MPC; under-consumption relative to social optimum →
            <strong className="text-cyan-400"> Welfare Loss:</strong> Optimal consumption is Q<sub>social</sub> where MSB = MSC; triangle represents lost welfare →
            <strong className="text-cyan-400"> Policy:</strong> Subsidy = MEB at optimal output shifts MPB up to MSB, or government directly provides the merit good.
          </p>
        </AnalysisBlock>

        <ExaminerTrap
          trap="Students draw externality diagrams with curves in wrong positions or mislabel MPC/MSC. They also confuse external costs with social costs."
          correction="MSC = MPC + MEC (social cost INCLUDES private cost). For negative externalities, MSC is ABOVE MPC. For positive externalities, MSB is ABOVE MPB. The welfare loss triangle is between the market and social equilibrium points."
        />
      </motion.section>

      {/* Topic 3: Government Policies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          Topic 3: Government Policies to Correct Market Failure
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="glass-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-destructive">Correcting Negative Externalities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded bg-destructive/10 border border-destructive/20">
                <strong className="text-silver-bright">Taxes (Pigouvian Tax):</strong>
                <p className="text-sm text-muted-foreground mt-1">Impose tax equal to marginal external cost to internalize the externality. Shifts MPC up to MSC.</p>
              </div>
              <div className="p-3 rounded bg-muted/30 border border-border">
                <strong className="text-silver-bright">Regulation & Prohibition:</strong>
                <p className="text-sm text-muted-foreground mt-1">Set legal limits on pollution or ban harmful activities entirely.</p>
              </div>
              <div className="p-3 rounded bg-muted/30 border border-border">
                <strong className="text-silver-bright">Pollution Permits:</strong>
                <p className="text-sm text-muted-foreground mt-1">Tradeable permits create a market for pollution rights, allowing efficient allocation of reduction efforts.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-400">Correcting Positive Externalities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded bg-green-500/10 border border-green-500/20">
                <strong className="text-silver-bright">Subsidies:</strong>
                <p className="text-sm text-muted-foreground mt-1">Reduce private costs to encourage production/consumption up to the socially optimal level.</p>
              </div>
              <div className="p-3 rounded bg-muted/30 border border-border">
                <strong className="text-silver-bright">Direct Provision:</strong>
                <p className="text-sm text-muted-foreground mt-1">Government directly provides public goods and merit goods (e.g., free education, NHS).</p>
              </div>
              <div className="p-3 rounded bg-muted/30 border border-border">
                <strong className="text-silver-bright">Information Provision:</strong>
                <p className="text-sm text-muted-foreground mt-1">Public awareness campaigns to correct information failures about benefits.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card border-accent/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-accent flex items-center gap-2">
              <Lightbulb className="w-5 h-5" /> Nudge Theory & Behavioral Economics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Rather than mandating behavior through taxes or laws, <strong className="text-silver-bright">nudge theory</strong> suggests designing choice environments that gently steer people toward better decisions while preserving freedom of choice. Examples include default opt-ins for pension schemes, calorie labeling at point of sale, and strategic placement of healthy foods. This approach addresses bounded rationality and can be more cost-effective than traditional interventions.
            </p>
          </CardContent>
        </Card>

        {/* Privatization Section */}
        <Card className="glass-card border-primary/30 mt-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <Lightbulb className="w-5 h-5" /> Privatization vs. Nationalization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded bg-green-500/10 border border-green-500/20">
                <strong className="text-green-400">Arguments FOR Privatization:</strong>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Profit motive increases productive efficiency</li>
                  <li>• Competition reduces X-inefficiency</li>
                  <li>• Shareholders monitor management performance</li>
                  <li>• Revenue from sale reduces government debt</li>
                  <li>• Dynamic efficiency from innovation incentives</li>
                </ul>
              </div>
              <div className="p-3 rounded bg-red-500/10 border border-red-500/20">
                <strong className="text-red-400">Arguments AGAINST Privatization:</strong>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Natural monopoly may require regulation anyway</li>
                  <li>• Short-termism—private firms may underinvest</li>
                  <li>• Cherry-picking profitable routes/customers</li>
                  <li>• Externalities may be ignored without regulation</li>
                  <li>• Distributional concerns—essential services may become unaffordable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <AnalysisBlock title=" Evaluation: Government Intervention Effectiveness" type="evaluation">
          <p>
            The effectiveness of government intervention "depends on" several critical factors: 
            <strong className="text-amber-400">(1) Information:</strong> Governments may lack knowledge to set optimal tax/subsidy levels; 
            estimating MEC/MEB is difficult. <strong className="text-amber-400">(2) Government failure:</strong> Bureaucratic inefficiency, 
            corruption, and regulatory capture may make intervention worse than the market failure. 
            <strong className="text-amber-400">(3) Elasticity:</strong> Pigouvian taxes work best when demand is elastic; 
            for inelastic goods (e.g., petrol), high taxes may be needed with limited quantity reduction. 
            <strong className="text-amber-400">(4) Political economy:</strong> Lobbying by affected industries may distort policy. 
            <strong className="text-amber-400">(5) Unintended consequences:</strong> Regulations may create black markets or 
            shift production to unregulated countries. The choice between market failure and government failure 
            is ultimately an empirical question depending on the specific case.
          </p>
        </AnalysisBlock>

        <ExaminerTrap
          trap="Students list government policies without evaluating their limitations. They assume government intervention always 'solves' market failure."
          correction="Always evaluate intervention effectiveness: difficulty estimating externality values, risk of government failure, unintended consequences, impact depends on elasticity of demand, and political feasibility. A balanced answer weighs market failure against potential government failure."
        />
      </motion.section>

      {/* Topic 4: Advanced Efficiency, Pareto & CBA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <AdvancedEfficiencySection />
      </motion.section>
      <ChapterEnrichment id="government-intervention" />
    </ChapterLayout>
  );
};

export default EconomicEfficiency;
