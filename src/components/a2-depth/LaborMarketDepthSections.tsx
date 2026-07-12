import { AnalyticalDepthSection, EvaluativeJudgementSection } from '@/components/AnalyticalDepthSection';

export const MRPTheoryAnalyticalDepth = () => (
  <AnalyticalDepthSection>
    <h4 className="text-silver-bright font-semibold mb-3">MRP Theory: Derived Demand and Factor Market Dynamics</h4>
    <p>
      The Marginal Revenue Product theory establishes that labour demand is <strong>derived demand</strong>—firms hire workers 
      not for their own sake but because their output generates revenue. The equation <strong className="text-neon-cyan">MRP 
      = MPP × MR</strong> encapsulates two distinct forces: the <strong>physical productivity</strong> of the worker (governed 
      by the production function and diminishing returns) and the <strong>revenue value</strong> of that output (governed by 
      product market conditions).
    </p>
    <p>
      In the <strong className="text-neon-cyan">short run</strong>, with capital fixed, MPP inevitably falls as more labour 
      is hired (diminishing returns), causing MRP to decline even if product price is constant. This is why the MRP curve 
      slopes downward and serves as the firm's demand curve for labour. The profit-maximising employment level occurs where 
      MRP = MFC—hiring beyond this point means each additional worker costs more than they contribute to revenue.
    </p>
    <p>
      In the <strong className="text-neon-cyan">long run</strong>, the analysis becomes more complex. Firms can adjust capital 
      alongside labour, potentially shifting the MPP curve upward through capital deepening (more machinery per worker). 
      The <strong>substitution effect</strong> and <strong>scale effect</strong> of a wage change work in the same direction 
      for normal inputs: a wage reduction makes labour relatively cheaper (firms substitute labour for capital) AND reduces 
      production costs (firms expand output, hiring more of all inputs). However, for capital-intensive industries with 
      high automation potential, the substitution effect may dominate—firms replace workers with machines rather than 
      hiring more at the lower wage.
    </p>
    <p>
      <strong className="text-silver-bright">Stakeholder Impact:</strong> <strong>Workers</strong> in industries where 
      labour demand is price-inelastic (few substitutes, labour is a small proportion of costs, product demand is inelastic) 
      have greater wage bargaining power because wage increases cause only small reductions in employment. 
      <strong>Firms</strong> in perfectly competitive product markets face MRP = MPP × P (since MR = P), so labour demand 
      shifts one-for-one with product price changes—exposing workers to product market volatility. <strong>Governments</strong> 
      seeking to raise minimum wages should assess the elasticity of labour demand: in monopsonistic markets, moderate 
      increases can raise both wages and employment, but in competitive markets with elastic demand, the employment 
      cost may be substantial.
    </p>
  </AnalyticalDepthSection>
);

export const MRPTheoryEvaluativeJudgement = () => (
  <EvaluativeJudgementSection>
    <h4 className="text-silver-bright font-semibold mb-3">Does MRP Theory Adequately Explain Wage Determination?</h4>
    <p>
      MRP theory provides the neoclassical foundation for understanding labour markets, but its assumptions and predictions 
      must be critically assessed against real-world evidence.
    </p>
    <p>
      <strong className="text-amber-400">Arguments supporting MRP theory:</strong> The fundamental prediction—that workers 
      are paid according to their marginal contribution to revenue—is broadly consistent with observed wage patterns. 
      Highly productive workers in high-value industries (finance, technology, pharmaceuticals) command premium wages, 
      while low-skill workers in price-competitive sectors earn less. The theory also correctly predicts that labour 
      demand shifts with product demand (construction workers' wages track housing market cycles) and with productivity 
      (the wage premium for university graduates reflects higher human capital and MPP).
    </p>
    <p>
      <strong className="text-amber-400">Arguments challenging MRP theory:</strong> Several empirical anomalies challenge 
      the framework. First, <strong>the joint production problem</strong>: in team-based production, isolating an individual 
      worker's MPP is impossible—how do you measure a marketing manager's marginal product separately from the sales team, 
      product designers, and logistics staff? Second, <strong>wage stickiness</strong>: efficiency wage theory (Shapiro & Stiglitz) 
      shows firms may rationally pay above MRP to reduce shirking, lower turnover, and attract better applicants—the "gift 
      exchange" model. Third, <strong>institutional factors</strong>: minimum wages, union bargaining, anti-discrimination 
      legislation, and social norms all drive wedges between wages and MRP. Fourth, <strong>monopsony prevalence</strong>: 
      recent research (Manning, 2003; Azar et al., 2022) suggests monopsony power is far more widespread than previously 
      assumed—even in seemingly competitive labour markets, employer concentration, search frictions, and job differentiation 
      create wage-setting power.
    </p>
    <p>
      <strong className="text-silver-bright">Balanced conclusion:</strong> MRP theory remains the essential starting point 
      for labour market analysis—it correctly identifies derived demand, diminishing returns, and the link between productivity 
      and wages as the key structural forces. However, a complete understanding requires layering institutional, behavioural, 
      and market power considerations on top of the neoclassical foundation. The strongest exam responses will present MRP 
      as the theoretical benchmark, then evaluate how monopsony power, union bargaining, government intervention, and 
      efficiency wage considerations cause real-world wages to deviate systematically from the MRP prediction—demonstrating 
      that the "depends on" the market structure of both the product and labour markets.
    </p>
  </EvaluativeJudgementSection>
);
