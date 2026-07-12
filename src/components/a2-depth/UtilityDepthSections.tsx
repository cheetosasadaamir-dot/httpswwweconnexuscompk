import { AnalyticalDepthSection, EvaluativeJudgementSection } from '@/components/AnalyticalDepthSection';

export const IndifferenceCurveAnalyticalDepth = () => (
  <AnalyticalDepthSection>
    <h4 className="text-silver-bright font-semibold mb-3">Indifference Curve Theory: Short-Run vs Long-Run Consumer Behaviour</h4>
    <p>
      In the <strong className="text-neon-cyan">short run</strong>, consumer preferences are assumed to be stable—indifference maps remain fixed, 
      and price changes trace predictable movements along budget constraints. The Slutsky decomposition cleanly separates 
      substitution from income effects, yielding precise predictions: a fall in P<sub>x</sub> pivots the budget line outward from 
      the Y-intercept, and the consumer moves from tangency point A to a new optimum C via the hypothetical compensated 
      bundle B.
    </p>
    <p>
      However, in the <strong className="text-neon-cyan">long run</strong>, this static framework encounters significant limitations. Preferences 
      themselves evolve through <strong>habit formation</strong> (past consumption of X raises future MRS for X), 
      <strong> social influence</strong> (bandwagon and snob effects shift entire indifference maps), and 
      <strong> information acquisition</strong> (consumers discover new goods, reshaping substitution possibilities). 
      The convexity assumption—diminishing MRS—may break down for addictive goods where consuming more X actually 
      increases willingness to sacrifice Y, creating concave indifference segments.
    </p>
    <p>
      <strong className="text-silver-bright">Stakeholder Impact:</strong> For <strong>consumers</strong>, the model predicts welfare gains 
      from price reductions are decomposable and measurable via compensating variation. For <strong>firms</strong>, understanding 
      income and substitution effects is crucial for pricing strategy—luxury goods face large negative substitution effects 
      from price rises but may benefit from positive Veblen effects. For <strong>governments</strong>, indirect taxation creates 
      deadweight loss precisely because it distorts the price ratio away from the tangency condition, pushing consumers 
      to inferior bundles on lower indifference curves.
    </p>
  </AnalyticalDepthSection>
);

export const IndifferenceCurveEvaluativeJudgement = () => (
  <EvaluativeJudgementSection>
    <h4 className="text-silver-bright font-semibold mb-3">Is Ordinal Utility Theory a Reliable Foundation for Policy?</h4>
    <p>
      The transition from cardinal to ordinal utility—measuring satisfaction through revealed preference rankings rather 
      than numerical "utils"—was a significant theoretical advance. Indifference curve analysis requires only that consumers 
      can <em>rank</em> bundles consistently, avoiding the implausible assumption that utility is measurable in absolute units. 
      This parsimony is both its strength and limitation.
    </p>
    <p>
      <strong className="text-amber-400">Arguments supporting the framework:</strong> The tangency condition (MRS = P<sub>x</sub>/P<sub>y</sub>) 
      provides an elegant unification of the consumer equilibrium problem—it simultaneously derives the downward-sloping demand 
      curve, explains why price discrimination works across market segments with different elasticities, and demonstrates 
      rigorously why lump-sum taxes are welfare-superior to equivalent ad valorem taxes. The Hicksian and Slutsky decompositions 
      remain indispensable tools for measuring consumer surplus changes in cost-benefit analysis.
    </p>
    <p>
      <strong className="text-amber-400">Arguments challenging the framework:</strong> Behavioural economics has documented 
      systematic violations of the rationality axioms underpinning indifference curves. <strong>Preference reversals</strong> 
      (Lichtenstein & Slovic) show consumers' rankings are inconsistent across different elicitation methods. 
      <strong>The endowment effect</strong> (Kahneman, Knetsch & Thaler) demonstrates that owning a good inflates its perceived 
      value—meaning indifference curves shift depending on the consumer's current endowment, violating the independence assumption. 
      <strong>Context-dependent preferences</strong> (the "decoy effect") show that introducing an irrelevant third option 
      changes the ranking between two existing options—impossible under standard axioms.
    </p>
    <p>
      <strong className="text-silver-bright">Balanced conclusion:</strong> Indifference curve analysis remains the most rigorous 
      framework available for modelling consumer choice at the market level, where individual behavioural anomalies tend to 
      cancel out in aggregation. However, policymakers relying on it for welfare analysis should complement the model with 
      behavioural insights—particularly when designing "nudge" interventions in healthcare, pensions, and environmental policy 
      where individual-level irrationalities have measurable welfare consequences.
    </p>
  </EvaluativeJudgementSection>
);
