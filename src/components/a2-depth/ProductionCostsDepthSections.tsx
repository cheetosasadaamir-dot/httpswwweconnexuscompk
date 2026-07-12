import { AnalyticalDepthSection, EvaluativeJudgementSection } from '@/components/AnalyticalDepthSection';

export const DiminishingReturnsAnalyticalDepth =  => (
 <AnalyticalDepthSection>
 <h4 className="text-silver-bright font-semibold mb-3">Law of Diminishing Returns: Temporal Dynamics and Factor Interactions</h4>
 <p>
 In the <strong className="text-neon-cyan">short run</strong>, the law of diminishing returns operates as an iron constraint 
 on production. With capital fixed, adding successive units of labour initially raises MP (specialisation gains as workers 
 divide tasks), but beyond the inflection point, each additional worker crowds out productive capacity—sharing machinery, 
 workspace, and management attention. The critical insight is the <strong>mirror relationship</strong> between product and 
 cost curves: when MP rises, MC falls; when MP reaches its maximum, MC is at its minimum; when MP falls, MC rises. 
 This is not coincidence but mathematical necessity: MC = W/MP (where W is the constant wage rate).
 </p>
 <p>
 In the <strong className="text-neon-cyan">long run</strong>, all factors become variable, and the law of diminishing returns 
 is replaced by <strong>returns to scale</strong>. The LRAC curve—the envelope of all possible SRAC curves—captures 
 how firms can escape short-run constraints by adjusting plant size. A firm experiencing diminishing returns in a 
 cramped factory can, in the long run, build a larger facility and move to a new SRAC curve where the optimal 
 labour-capital ratio is restored. The Minimum Efficient Scale (MES) determines industry structure: high MES 
 industries (automobiles, steel, semiconductors) naturally evolve toward oligopoly, while low MES industries 
 (restaurants, hairdressing, retail) sustain many small competitors.
 </p>
 <p>
 <strong className="text-silver-bright">Stakeholder Impact:</strong> For <strong>workers</strong>, diminishing returns 
 means that in overcrowded workplaces, individual productivity (and potentially wages linked to MRP) declines—creating 
 a rationale for optimal workforce planning. For <strong>firms</strong>, understanding the inflection point between 
 increasing and diminishing returns is essential for cost minimisation: hiring should continue only while MP exceeds AP. 
 For <strong>consumers</strong>, the U-shaped ATC curve means there exists an output level where unit costs are minimised, 
 and competitive pressure should drive prices toward this minimum in the long run.
 </p>
 </AnalyticalDepthSection>
);

export const DiminishingReturnsEvaluativeJudgement =  => (
 <EvaluativeJudgementSection>
 <h4 className="text-silver-bright font-semibold mb-3">Does the Law of Diminishing Returns Hold in the Modern Digital Economy?</h4>
 <p>
 The law of diminishing returns was formalised in the context of agricultural production—adding more labourers 
 to a fixed plot of land—and remains powerful for manufacturing and primary industries where physical capital 
 constraints are tangible. However, its applicability to the <strong className="text-amber-400">knowledge economy</strong> 
 requires critical reassessment.
 </p>
 <p>
 <strong className="text-amber-400">Arguments supporting continued relevance:</strong> Even in technology firms, 
 physical constraints eventually bind. Server capacity, office space, and management bandwidth are all fixed in 
 the short run. Amazon's warehouse operations exhibit classic diminishing returns as workers are added to 
 fixed conveyor systems. The fundamental logic—variable inputs eventually exhaust the productive capacity 
 of fixed inputs—remains universally applicable.
 </p>
 <p>
 <strong className="text-amber-400">Arguments challenging the framework:</strong> Software and digital services 
 exhibit near-zero marginal costs of production—the cost of serving the millionth Spotify user is negligible. 
 <strong>Network effects</strong> can actually create <em>increasing</em> returns: each additional user of a platform 
 like WhatsApp increases the value for all existing users, generating positive feedback loops rather than diminishing returns. 
 <strong>Learning-by-doing</strong> effects (Arrow, 1962) suggest that cumulative production experience can shift 
 the entire product curve upward, meaning that what appears as diminishing returns at a point in time may be 
 overcome by the endogenous technological progress that production itself generates.
 </p>
 <p>
 <strong className="text-silver-bright">Balanced conclusion:</strong> The law remains a foundational short-run concept 
 but must be contextualised. In physical production, it is inescapable. In digital and knowledge-intensive industries, 
 the distinction between short run and long run becomes blurred, and increasing returns may dominate over relevant 
 output ranges. Exam responses should demonstrate awareness that the law's applicability "depends on" the nature of 
 the production process, the degree of capital indivisibility, and whether network or learning effects are present—this 
 nuance elevates analysis from (application) to (evaluation).
 </p>
 </EvaluativeJudgementSection>
);
