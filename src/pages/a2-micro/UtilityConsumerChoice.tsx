import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import UtilityDiagram from '@/components/diagrams/UtilityDiagram';
import { IndifferenceCurveAnalyticalDepth, IndifferenceCurveEvaluativeJudgement } from '@/components/a2-depth/UtilityDepthSections';
import BudgetIndifferenceDiagram from '@/components/diagrams/BudgetIndifferenceDiagram';
import IncomeSubstitutionDiagram from '@/components/diagrams/IncomeSubstitutionDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import AnalysisBlock from '@/components/AnalysisBlock';

const UtilityConsumerChoice = () => {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="Utility and Consumer Choice"
      subtitle="Understanding rational consumer behavior through marginal analysis, budget constraints, and indifference curve theory"
    >
      {/* Key Takeaways */}
      <KeyTakeaways
        takeaways={[
          "Total Utility (TU) rises at a decreasing rate; Marginal Utility (MU) diminishes as consumption increases—the Law of Diminishing Marginal Utility.",
          "Consumer equilibrium occurs where MUₓ/Pₓ = MUᵧ/Pᵧ—the Equi-Marginal Principle ensures utility is maximized per dollar spent.",
          "The Budget Line shows affordable combinations; its slope = -Pₓ/Pᵧ. Income changes shift the line; price changes pivot it.",
          "Indifference Curves are convex to origin (diminishing MRS), cannot intersect, and higher curves = higher utility.",
          "Price changes create Substitution Effect (always negative) and Income Effect (direction depends on normal/inferior/Giffen goods)."
        ]}
      />
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

        <AnalysisBlock title="Marginal Utility Analysis" type="analysis">
          <p>
            The relationship between Total and Marginal Utility follows a precise mathematical pattern: 
            <strong className="text-primary"> when MU &gt; 0, TU rises</strong>; 
            <strong className="text-secondary"> when MU = 0, TU is maximized</strong>; 
            <strong className="text-destructive"> when MU &lt; 0, TU falls</strong>. 
            This pattern explains consumer satiation—the point beyond which additional consumption becomes undesirable. 
            The declining MU curve demonstrates why demand curves slope downward: as consumers acquire more units, 
            the additional satisfaction from each unit falls, so they are only willing to pay lower prices for additional units.
          </p>
        </AnalysisBlock>

        <ExaminerTrap
          trap="Many students incorrectly state that 'utility decreases' as consumption increases. This confuses TU with MU."
          correction="Total Utility continues to INCREASE (at a decreasing rate) while Marginal Utility DECREASES. TU only decreases after MU becomes negative—after the point of satiation."
        />
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

        <AnalysisBlock title="Equi-Marginal Principle: AO3 Chain of Analysis" type="analysis">
          <p>
            <strong className="text-cyan-400">Initial Disequilibrium:</strong> Suppose MUₓ/Pₓ &gt; MUᵧ/Pᵧ — 
            the consumer gets more "bang for buck" from Good X →
            <strong className="text-cyan-400"> Reallocation:</strong> Consumer shifts expenditure from Y toward X →
            <strong className="text-cyan-400"> Diminishing MU:</strong> As more X is consumed, MUₓ falls; 
            as less Y is consumed, MUᵧ rises →
            <strong className="text-cyan-400"> Equilibrium Restoration:</strong> Adjustment continues until 
            MUₓ/Pₓ = MUᵧ/Pᵧ — no further reallocation can increase total utility.
          </p>
        </AnalysisBlock>

        <AnalysisBlock title="Critical Evaluation: Limitations of Cardinal Utility" type="evaluation">
          <p>
            The marginal utility approach assumes consumers can assign <strong>numerical values</strong> to utility (cardinal measurement), 
            which is psychologically unrealistic. Real consumers cannot say "this coffee gives me 50 utils." 
            The <strong className="text-amber-400">ordinal utility approach</strong> (indifference curves) overcomes this by only requiring 
            consumers to rank preferences—a more realistic assumption. Additionally, the model assumes stable preferences and 
            rational behavior, ignoring <strong>bounded rationality</strong>, habit formation, and emotional decision-making 
            studied in behavioral economics. The Equi-Marginal Principle also assumes divisible goods and ignores transaction costs.
          </p>
        </AnalysisBlock>
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

        <Card className="mt-8 glass-card border-border">
          <CardHeader>
            <CardTitle className="text-silver-bright">Text-Based Geometric Logic: Budget Constraints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-2">Income Increase (M₁ → M₂)</h4>
                <p className="text-sm text-muted-foreground">
                  Budget line shifts <strong>parallel outward</strong>. X-intercept moves from M₁/Pₓ to M₂/Pₓ; 
                  Y-intercept from M₁/Pᵧ to M₂/Pᵧ. Slope unchanged (−Pₓ/Pᵧ). Consumer can now reach higher indifference curves.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <h4 className="font-semibold text-red-400 mb-2">Price of X Falls (Pₓ₁ → Pₓ₂)</h4>
                <p className="text-sm text-muted-foreground">
                  Budget line <strong>pivots outward</strong> from fixed Y-intercept. X-intercept extends from M/Pₓ₁ to M/Pₓ₂. 
                  Line becomes flatter (slope magnitude decreases). Consumer can now afford more X at any given Y.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <AnalysisBlock title="Indifference Curve Properties: Mathematical Foundations" type="analysis">
          <p>
            The <strong>Marginal Rate of Substitution (MRS)</strong> equals the slope of the indifference curve at any point: 
            MRS = ΔY/ΔX = MUₓ/MUᵧ. The <strong>convexity</strong> reflects diminishing MRS—as a consumer has more X and less Y, 
            they are willing to give up less Y for each additional unit of X. At the optimal consumption bundle, 
            the budget line is <strong>tangent</strong> to the highest attainable indifference curve, meaning: 
            MRS = Pₓ/Pᵧ, which can be rearranged to MUₓ/Pₓ = MUᵧ/Pᵧ (the Equi-Marginal Principle). 
            This elegant proof shows the geometric and algebraic approaches yield identical equilibrium conditions.
          </p>
        </AnalysisBlock>
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

        <AnalysisBlock title="AO3 Chain: Price Fall and the Total Effect" type="analysis">
          <p>
            <strong className="text-cyan-400">Price Change:</strong> Price of Good X falls (Pₓ₁ → Pₓ₂) →
            <strong className="text-cyan-400"> Budget Line Pivots:</strong> Line rotates outward from Y-intercept; X becomes relatively cheaper →
            <strong className="text-cyan-400"> Substitution Effect (Hicksian):</strong> Consumer moves along the SAME indifference curve 
            from point A to hypothetical point B, substituting toward X (always positive for a price fall) →
            <strong className="text-cyan-400"> Income Effect:</strong> Real income rises; consumer moves from B to C on a HIGHER indifference curve. 
            For normal goods, this reinforces the substitution effect (buy more X). For inferior goods, it partially offsets it. 
            For Giffen goods, the negative income effect dominates, producing an upward-sloping demand curve.
          </p>
        </AnalysisBlock>

        <AnalysisBlock title="Critical Evaluation: Behavioral Economics Challenge" type="evaluation">
          <p>
            Traditional consumer choice theory assumes <strong>perfect rationality</strong>—consumers consistently maximize utility 
            given budget constraints. However, <strong className="text-amber-400">behavioral economics</strong> reveals systematic deviations: 
            <strong>Framing effects</strong> show choices depend on how options are presented; 
            <strong>Loss aversion</strong> (Kahneman & Tversky) demonstrates losses hurt more than equivalent gains please; 
            <strong>Hyperbolic discounting</strong> explains why consumers make time-inconsistent choices (preferring $100 today over $110 tomorrow, 
            but $110 in 31 days over $100 in 30 days). The <strong>"nudge" theory</strong> (Thaler & Sunstein) suggests 
            policymakers can design choice architectures to steer consumers toward better decisions without restricting options. 
            These insights suggest indifference curve analysis is a useful approximation but not a complete model of human behavior.
          </p>
        </AnalysisBlock>

        <ExaminerTrap
          trap="Students often conflate Giffen and Veblen goods as 'goods with upward-sloping demand.' The mechanisms are entirely different."
          correction="Giffen goods have upward-sloping demand due to the INCOME EFFECT dominating for staple inferior goods among low-income consumers. Veblen goods have upward-sloping demand due to CONSPICUOUS CONSUMPTION—high prices signal status (a psychological/social phenomenon, not an income effect). A Giffen good must be inferior; a Veblen good is typically a luxury."
        />
      </motion.section>

      {/* Analytical Depth & Evaluative Judgement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-12"
      >
        <IndifferenceCurveAnalyticalDepth />
        <IndifferenceCurveEvaluativeJudgement />
      </motion.section>
    </ChapterLayout>
  );
};

export default UtilityConsumerChoice;
