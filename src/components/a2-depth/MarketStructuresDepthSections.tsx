import { AnalyticalDepthSection, EvaluativeJudgementSection } from '@/components/AnalyticalDepthSection';

export const NaturalMonopolyAnalyticalDepth = () => (
  <AnalyticalDepthSection>
    <h4 className="text-silver-bright font-semibold mb-3">Natural Monopoly: The Regulatory Dilemma in Short-Run vs Long-Run</h4>
    <p>
      A natural monopoly arises when the LRAC curve is <strong>continuously declining</strong> over the entire range of 
      market demand—meaning one firm can serve the whole market at lower average cost than two or more firms. The core 
      dilemma is that profit maximisation (MC = MR) produces output Q<sub>m</sub> at price P<sub>m</sub> far above marginal 
      cost, while the socially optimal output (P = MC) at Q<sub>s</sub> lies below AC, generating losses that make the 
      firm financially unviable without subsidy.
    </p>
    <p>
      In the <strong className="text-neon-cyan">short run</strong>, unregulated natural monopolies exploit their position 
      to charge P<sub>m</sub>, restricting output and creating significant deadweight loss. The duplication of infrastructure 
      (two competing water pipe networks, two rail lines to the same destination) would raise total industry costs rather 
      than lower them. Regulators face a trilemma: (1) <strong>Marginal cost pricing</strong> (P = MC) achieves allocative 
      efficiency but requires permanent subsidies funded from taxation with its own deadweight losses; (2) <strong>Average 
      cost pricing</strong> (P = AC) achieves financial viability and eliminates supernormal profit but sacrifices allocative 
      efficiency since P {">"} MC; (3) <strong>Price cap regulation</strong> (RPI − X) incentivises cost reduction but 
      requires regulators to accurately estimate productivity growth, creating an information asymmetry problem.
    </p>
    <p>
      In the <strong className="text-neon-cyan">long run</strong>, technological change can erode natural monopoly status. 
      The telecommunications sector illustrates this dramatically: fixed-line telephony was a textbook natural monopoly in 
      the 20th century, but mobile networks and internet-based communication introduced competing infrastructure, 
      transforming the industry from natural monopoly to oligopoly. This suggests the "naturalness" of monopoly is 
      contingent on technology, not permanent.
    </p>
    <p>
      <strong className="text-silver-bright">Stakeholder Impact:</strong> <strong>Consumers</strong> in unregulated natural 
      monopolies face higher prices and restricted output but benefit from economies of scale that keep costs below what 
      competition could achieve. <strong>Shareholders</strong> earn supernormal returns under unregulated conditions but face 
      regulatory risk. <strong>Workers</strong> in regulated utilities often enjoy stable employment but may face cost-cutting 
      pressures under price cap regimes. <strong>Government</strong> must balance consumer protection against investment 
      incentives—over-regulation deters infrastructure investment; under-regulation permits exploitation.
    </p>
  </AnalyticalDepthSection>
);

export const NaturalMonopolyEvaluativeJudgement = () => (
  <EvaluativeJudgementSection>
    <h4 className="text-silver-bright font-semibold mb-3">Is Regulation or Privatisation the Better Solution for Natural Monopolies?</h4>
    <p>
      The debate over natural monopoly governance reflects a fundamental tension in economics between 
      <strong className="text-amber-400"> allocative efficiency</strong> and <strong className="text-amber-400">dynamic 
      efficiency</strong>. Neither public ownership nor private ownership with regulation provides an unambiguous solution.
    </p>
    <p>
      <strong className="text-amber-400">The case for regulated private ownership:</strong> Price cap regulation (RPI − X) 
      creates profit incentives for cost reduction—if a firm cuts costs faster than the X factor, it retains the savings 
      as profit until the next regulatory review. This mimics competitive pressure without requiring actual competitors. 
      The UK's privatisation of water, electricity, and telecoms in the 1980s–90s demonstrated measurable efficiency gains: 
      labour productivity in the electricity sector rose significantly, and telecoms prices fell dramatically as BT faced 
      the discipline of Ofcom regulation combined with emerging competition.
    </p>
    <p>
      <strong className="text-amber-400">The case for public ownership:</strong> Regulated private monopolies suffer from 
      <strong>regulatory capture</strong>—firms invest in lobbying and information asymmetry to soften regulatory constraints. 
      The UK water industry illustrates the risk: privatised water companies accumulated substantial debt while paying generous 
      dividends, leading to criticism that profits were extracted rather than reinvested in infrastructure. Public ownership 
      eliminates the profit motive but introduces <strong>X-inefficiency</strong> and political interference—investment 
      decisions may reflect electoral cycles rather than engineering requirements.
    </p>
    <p>
      <strong className="text-silver-bright">Balanced conclusion:</strong> The optimal governance model depends on the specific 
      industry characteristics. Where technology enables competition to emerge (telecoms, energy generation), privatisation with 
      light-touch regulation has generally succeeded. Where the natural monopoly element is durable and investment horizons are 
      very long (water networks, rail infrastructure), the case for public ownership or heavily regulated private concessions 
      is stronger. The key evaluative criterion is whether the chosen model delivers sustained infrastructure investment—the 
      true long-run determinant of consumer welfare in network industries.
    </p>
  </EvaluativeJudgementSection>
);

export const GameTheoryAnalyticalDepth = () => (
  <AnalyticalDepthSection>
    <h4 className="text-silver-bright font-semibold mb-3">Game Theory: Beyond the One-Shot Prisoner's Dilemma</h4>
    <p>
      The standard Prisoner's Dilemma model demonstrates why cartels are unstable in a 
      <strong className="text-neon-cyan"> single interaction</strong>: each firm's dominant strategy is to cheat regardless 
      of the rival's choice, producing the Nash Equilibrium where both cheat and earn less than under mutual cooperation. 
      However, the real-world application requires extending the analysis to <strong>repeated games</strong>, where the 
      dynamics change fundamentally.
    </p>
    <p>
      In <strong className="text-neon-cyan">finitely repeated games</strong>, backward induction predicts unravelling: 
      since both firms will cheat in the final round (no future punishment possible), they also cheat in the penultimate 
      round, and so on, until cooperation collapses entirely. But in <strong className="text-neon-cyan">infinitely repeated 
      games</strong> (or games with uncertain endpoints), the <strong>Folk Theorem</strong> shows that cooperation can be 
      sustained if firms adopt punishment strategies like <strong>tit-for-tat</strong>—cooperate initially, then mirror the 
      rival's previous action. The critical condition is that the discount factor (how much firms value future profits) must 
      be sufficiently high: patient firms with long time horizons can sustain collusion.
    </p>
    <p>
      <strong className="text-silver-bright">Stakeholder Impact:</strong> <strong>Consumers</strong> are harmed by successful 
      collusion (higher prices, restricted output) but benefit when cartels collapse due to cheating. <strong>Firms</strong> 
      face a collective action problem—individual rationality conflicts with group rationality. <strong>Competition 
      authorities</strong> can destabilise cartels through leniency programmes (offering immunity to the first firm that 
      confesses), effectively converting the game from Prisoner's Dilemma to a race to confess. The EU's leniency programme 
      has uncovered numerous cartels precisely because it changes the payoff structure to make confession the dominant strategy.
    </p>
  </AnalyticalDepthSection>
);

export const GameTheoryEvaluativeJudgement = () => (
  <EvaluativeJudgementSection>
    <h4 className="text-silver-bright font-semibold mb-3">Does Game Theory Adequately Explain Real-World Oligopoly Behaviour?</h4>
    <p>
      Game theory provides the most rigorous framework for analysing strategic interdependence, but its predictive power 
      in actual markets is contested.
    </p>
    <p>
      <strong className="text-amber-400">Strengths of the game-theoretic approach:</strong> The Nash Equilibrium concept 
      correctly predicts the instability of cartels—OPEC's history of quota violations, the lysine cartel's collapse, and 
      the EU's discovery of price-fixing in industries from trucks to vitamins all confirm that cheating incentives are real. 
      The sequential game framework explains first-mover advantages (Stackelberg leadership) and credible commitment 
      strategies like capacity pre-emption, which Airbus and Boeing use to deter entry into specific aircraft segments.
    </p>
    <p>
      <strong className="text-amber-400">Limitations of the game-theoretic approach:</strong> The framework assumes firms 
      have well-defined payoff matrices and can calculate Nash Equilibria—requirements that strain credibility in complex 
      markets with imperfect information. <strong>Bounded rationality</strong> (Simon) suggests managers use heuristics and 
      rules of thumb rather than computing optimal strategies. <strong>Multiple equilibria</strong> plague many game models—the 
      theory often cannot predict which equilibrium will emerge, limiting its policy usefulness. The assumption of 
      <strong>common knowledge of rationality</strong> (each firm knows all rivals are rational and knows they know, etc.) 
      is psychologically demanding and frequently violated in practice.
    </p>
    <p>
      <strong className="text-silver-bright">Balanced conclusion:</strong> Game theory is indispensable as a conceptual 
      framework for understanding why oligopolies behave differently from competitive or monopolistic markets. Its greatest 
      contribution is explaining <em>why cooperation is difficult</em> rather than predicting specific outcomes. For exam 
      purposes, candidates should use game theory to structure analysis of interdependence, then evaluate its predictive 
      limitations by noting that real-world factors—trust, reputation, information asymmetries, and institutional context—shape 
      outcomes beyond what formal models capture.
    </p>
  </EvaluativeJudgementSection>
);

export const KinkedDemandAnalyticalDepth = () => (
  <AnalyticalDepthSection>
    <h4 className="text-silver-bright font-semibold mb-3">Kinked Demand Curve: The Price Rigidity Mechanism Dissected</h4>
    <p>
      The Sweezy model's power lies in its <strong>asymmetric reaction assumption</strong>: rivals match price cuts 
      (to protect market share) but ignore price increases (to capture defecting customers). This generates a kink at the 
      prevailing price P*, creating a <strong>discontinuous MR curve</strong> with a vertical segment. As long as the MC 
      curve intersects MR within this vertical gap, the profit-maximising output Q* and price P* remain unchanged despite 
      cost fluctuations.
    </p>
    <p>
      In the <strong className="text-neon-cyan">short run</strong>, this model explains observed price stickiness in 
      oligopolistic markets—petrol stations, airlines, and supermarkets often maintain stable prices for extended periods 
      despite fluctuating input costs. The fear of price wars (if cutting) and customer loss (if raising) creates a 
      "zone of inaction" where firms absorb cost changes into profit margins rather than adjusting output prices.
    </p>
    <p>
      In the <strong className="text-neon-cyan">long run</strong>, persistent cost changes eventually force price adjustments. 
      If MC rises above the upper bound of the MR gap, the firm must raise prices—and if rivals face similar cost pressures, 
      coordinated price increases become possible through <strong>price leadership</strong> (the lowest-cost firm sets a new 
      price, and others follow). Conversely, technological disruption or new entry can shift the demand curve, moving the 
      kink point and establishing a new equilibrium price.
    </p>
    <p>
      <strong className="text-silver-bright">Stakeholder Impact:</strong> <strong>Consumers</strong> benefit from price 
      stability (predictable budgeting) but may pay higher prices than under competitive conditions. <strong>Firms</strong> 
      benefit from reduced price war risk but face squeezed margins when costs rise within the inaction zone. 
      <strong>Workers</strong> in oligopolistic industries may experience job stability (firms adjust quantity less 
      aggressively) but could face wage suppression as firms absorb cost pressures internally.
    </p>
  </AnalyticalDepthSection>
);

export const KinkedDemandEvaluativeJudgement = () => (
  <EvaluativeJudgementSection>
    <h4 className="text-silver-bright font-semibold mb-3">Is the Kinked Demand Curve Model Still Relevant?</h4>
    <p>
      The Sweezy model, first proposed in 1939, remains one of the most frequently examined oligopoly theories 
      despite significant theoretical criticisms. Its enduring presence in the CIE syllabus reflects its pedagogical 
      value rather than empirical robustness.
    </p>
    <p>
      <strong className="text-amber-400">Arguments for continued relevance:</strong> Price rigidity in oligopolistic markets 
      is empirically well-documented. Blinder's survey (1998) of 200 US firms found that "fear of rival retaliation" was 
      the most commonly cited reason for not cutting prices—exactly the mechanism the kinked demand model describes. The 
      model also provides a clear diagrammatic framework for explaining why oligopolistic prices are more stable than 
      those in competitive markets, making it invaluable for exam analysis.
    </p>
    <p>
      <strong className="text-amber-400">Arguments against the model:</strong> The most devastating criticism is that 
      the model <strong>explains price rigidity but cannot explain how the initial price was determined</strong>—it is 
      a theory of price maintenance, not price formation. Stigler's empirical test (1947) found that rivals <em>did</em> 
      sometimes follow price increases, contradicting the asymmetric response assumption. Modern oligopoly theory has 
      largely replaced the kinked demand model with more rigorous game-theoretic frameworks (Bertrand competition, 
      Cournot competition) that can explain both price determination and stability within a unified model.
    </p>
    <p>
      <strong className="text-silver-bright">Balanced conclusion:</strong> The kinked demand model should be treated as 
      a useful <em>descriptive</em> model of price rigidity rather than a complete <em>explanatory</em> theory of oligopoly. 
      In exam responses, candidates should present the model's mechanism clearly, then demonstrate evaluative depth by 
      noting its inability to explain price determination and the availability of game-theoretic alternatives. The strongest 
      responses will recognise that different oligopoly models suit different contexts: the kinked demand model for explaining 
      stable prices, game theory for explaining strategic behaviour, and contestability theory for explaining why some 
      concentrated markets produce competitive outcomes.
    </p>
  </EvaluativeJudgementSection>
);
