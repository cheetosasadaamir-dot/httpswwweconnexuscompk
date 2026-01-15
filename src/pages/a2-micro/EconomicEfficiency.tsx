import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import EfficiencyDiagram from '@/components/diagrams/EfficiencyDiagram';
import MarketFailureExternalityDiagram from '@/components/diagrams/MarketFailureExternalityDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

const EconomicEfficiency = () => {
  return (
    <ChapterLayout
      chapterNumber={4}
      title="Economic Efficiency and Market Failure"
      subtitle="Analyzing resource allocation, efficiency types, sources of market failure, and government policy interventions"
    >
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
      </motion.section>
    </ChapterLayout>
  );
};

export default EconomicEfficiency;
