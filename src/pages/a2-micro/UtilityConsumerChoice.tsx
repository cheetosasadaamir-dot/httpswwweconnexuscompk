import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import UtilityDiagram from '@/components/diagrams/UtilityDiagram';
import BudgetIndifferenceDiagram from '@/components/diagrams/BudgetIndifferenceDiagram';
import IncomeSubstitutionDiagram from '@/components/diagrams/IncomeSubstitutionDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UtilityConsumerChoice = () => {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="Utility and Consumer Choice"
      subtitle="Understanding rational consumer behavior through marginal analysis, budget constraints, and indifference curve theory"
    >
      {/* Topic 1: Marginal Utility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          Topic 1: Law of Diminishing Marginal Utility
        </h2>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed-plus text-lg">
            <strong className="text-silver-bright">Total Utility (TU)</strong> represents the cumulative satisfaction a consumer derives from consuming a given quantity of a good or service. As consumption increases, total utility typically rises—but at a decreasing rate—until it reaches a maximum point, after which additional consumption may actually reduce overall satisfaction.
          </p>
          <p className="text-muted-foreground leading-relaxed-plus text-lg mt-4">
            <strong className="text-silver-bright">Marginal Utility (MU)</strong> measures the additional satisfaction gained from consuming one more unit of a good. Mathematically expressed as <code className="text-primary bg-primary/10 px-2 py-0.5 rounded">MU = ΔTU / ΔQ</code>, marginal utility demonstrates a fundamental economic principle: as a consumer consumes more units of a good, the additional satisfaction from each successive unit tends to decline. This is the <strong className="text-primary">Law of Diminishing Marginal Utility</strong>.
          </p>
        </div>

        <UtilityDiagram />

        <Card className="mt-8 glass-card border-border">
          <CardHeader>
            <CardTitle className="text-silver-bright">Conditions for Diminishing Marginal Utility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3">
              {[
                { title: 'Constant Quality', desc: 'The quality of each unit consumed must remain consistent; otherwise, variations in quality could distort utility measurements.' },
                { title: 'Standard Quantity', desc: 'Units must be of reasonable, comparable size—measuring utility from chocolate requires consistent bar sizes, not varying pieces.' },
                { title: 'Ceteris Paribus', desc: 'All other factors (tastes, preferences, weather, mood) must remain constant for the law to hold precisely.' },
                { title: 'Continuous Consumption', desc: 'The law applies when goods are consumed in succession within a relevant time period, not sporadically over extended intervals.' },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border">
                  <span className="text-primary font-semibold">{item.title}:</span>
                  <span className="text-muted-foreground ml-2">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Equi-Marginal Principle */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          The Equi-Marginal Principle
        </h2>

        <div className="prose prose-invert max-w-none mb-6">
          <p className="text-muted-foreground leading-relaxed-plus text-lg">
            A rational consumer maximizes total utility by allocating their limited budget such that the <strong className="text-primary">marginal utility per dollar spent</strong> is equalized across all goods purchased. This optimization condition is formally expressed as:
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center mb-6">
          <p className="text-2xl font-mono text-silver-bright">
            <span className="text-primary">MU<sub>x</sub></span> / <span className="text-secondary">P<sub>x</sub></span> = <span className="text-primary">MU<sub>y</sub></span> / <span className="text-secondary">P<sub>y</sub></span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">Consumer Equilibrium Condition</p>
        </div>

        <Card className="glass-card border-border">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-cambridge-green/10 border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-2">If Price of X Falls:</h4>
                <p className="text-sm text-muted-foreground">
                  MU<sub>x</sub>/P<sub>x</sub> &gt; MU<sub>y</sub>/P<sub>y</sub> → Consumer buys more X. As quantity of X increases, MU<sub>x</sub> falls (diminishing MU) until equality is restored.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-cambridge-orange/10 border border-orange-500/20">
                <h4 className="font-semibold text-orange-400 mb-2">If Price of Y Falls:</h4>
                <p className="text-sm text-muted-foreground">
                  MU<sub>x</sub>/P<sub>x</sub> &lt; MU<sub>y</sub>/P<sub>y</sub> → Consumer buys more Y. As quantity of Y increases, MU<sub>y</sub> falls until equality is restored.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Topic 2: Budget Line and Indifference Curves */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          Topic 2: Budget Lines and Indifference Curves
        </h2>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed-plus text-lg">
            The <strong className="text-silver-bright">Budget Line</strong> (or Budget Constraint) represents all combinations of two goods that a consumer can afford given their income and the prices of both goods. With income <em>M</em>, price of X as <em>P<sub>x</sub></em>, and price of Y as <em>P<sub>y</sub></em>, the budget constraint is: <code className="text-primary bg-primary/10 px-2 py-0.5 rounded">M = P<sub>x</sub>·X + P<sub>y</sub>·Y</code>
          </p>
          <p className="text-muted-foreground leading-relaxed-plus text-lg mt-4">
            An <strong className="text-silver-bright">Indifference Curve</strong> shows all combinations of two goods that yield the same level of utility to the consumer. Key properties include: (1) downward sloping, (2) convex to the origin, (3) higher curves represent higher utility, and (4) curves cannot intersect.
          </p>
        </div>

        <BudgetIndifferenceDiagram />
      </motion.section>

      {/* Income and Substitution Effects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-serif font-bold text-silver-bright mb-6">
          Income and Substitution Effects
        </h2>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed-plus text-lg">
            When the price of a good changes, the total effect on quantity demanded can be decomposed into two components. The <strong className="text-accent">Substitution Effect</strong> captures how consumers switch toward relatively cheaper goods (always positive for a price fall). The <strong className="text-primary">Income Effect</strong> reflects the change in real purchasing power—its direction depends on whether the good is normal, inferior, or a Giffen good.
          </p>
        </div>

        <IncomeSubstitutionDiagram />

        <Card className="mt-8 glass-card border-border">
          <CardHeader>
            <CardTitle className="text-silver-bright">Special Goods: Veblen & Giffen</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Veblen Goods</h4>
              <p className="text-sm text-muted-foreground">
                Luxury goods where demand increases as price rises due to their status symbol value. Higher prices signal exclusivity and prestige (e.g., designer handbags, luxury watches). Unlike Giffen goods, this is a psychological, not income-based, phenomenon.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Giffen Goods</h4>
              <p className="text-sm text-muted-foreground">
                Inferior goods where the negative income effect outweighs the positive substitution effect. When price falls, consumers feel "richer" and switch to superior alternatives, actually reducing demand for the Giffen good (e.g., staple foods for very low-income households).
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </ChapterLayout>
  );
};

export default UtilityConsumerChoice;
