import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import AnalysisBlock from '@/components/AnalysisBlock';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LaborMarketDiagram from '@/components/diagrams/LaborMarketDiagram';
import MonopsonyLaborDiagram from '@/components/diagrams/MonopsonyLaborDiagram';
import WageDifferentialsDiagram from '@/components/diagrams/WageDifferentialsDiagram';
import BackwardBendingSupplyDiagram from '@/components/diagrams/BackwardBendingSupplyDiagram';
import ElasticityLabourDemandDiagram from '@/components/diagrams/ElasticityLabourDemandDiagram';
import TradeUnionCompetitiveDiagram from '@/components/diagrams/TradeUnionCompetitiveDiagram';
import TradeUnionMonopsonyDiagram from '@/components/diagrams/TradeUnionMonopsonyDiagram';
import EconomicRentTransferDiagram from '@/components/diagrams/EconomicRentTransferDiagram';
import { MRPTheoryAnalyticalDepth, MRPTheoryEvaluativeJudgement } from '@/components/a2-depth/LaborMarketDepthSections';
import ChapterEnrichment from '@/components/ChapterEnrichment';

const LaborMarket = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/a2-micro/market-structures" className="hover:text-primary transition-colors">A2 Microeconomics</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Labor Market</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              A2 Microeconomics • Chapter 5
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-silver-bright mb-4">
            Labor Market
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive analysis of labor markets, including perfect competition, monopsony, trade union intervention, 
            government policy, wage differentials, and the concepts of economic rent and transfer earnings.
          </p>
        </header>

        {/* Key Takeaways */}
        <KeyTakeaways
          takeaways={[
            "MRP = MPP × MR is the firm's demand for labor. Profit maximization occurs where MRP = MFC (or MRP = W in perfect competition).",
            "In perfect competition: W = MFC = AFC = S (perfectly elastic supply to the firm). The market sets the wage; firm is a wage taker.",
            "Monopsony: MCL > ACL because hiring more workers requires raising wages for ALL workers. Result: lower wages AND lower employment than competition.",
            "Trade unions can INCREASE both wages and employment in a monopsony by setting a wage floor within the 'zone of bargaining.'",
            "Wage differentials arise from: skill differences (human capital), compensating differentials, barriers to entry, discrimination, and regional factors.",
            "Economic Rent = Payment above transfer earnings (minimum needed to keep a factor in its current use)."
          ]}
        />

        {/* Topic 1: Perfectly Competitive Labor Market */}
        <section id="perfect-labor-market" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold">1</span>
            Perfectly Competitive Labor Market
          </h2>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Features of a Perfectly Competitive Labor Market</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A perfectly competitive labor market represents an idealized market structure where neither employers nor 
              workers have any power to influence the wage rate. Just as firms are price takers in a perfectly competitive 
              product market, both firms and workers are <strong className="text-silver-bright">wage takers</strong> in a 
              perfectly competitive labor market. The market wage is determined by the intersection of aggregate labor 
              demand and supply, and individual firms hire workers at this prevailing wage.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-silver/20">
                    <th className="text-left py-3 px-4 text-silver-bright">Feature</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4 font-medium text-blue-400">1. Wage Taker</td>
                    <td className="py-3 px-4">Neither employers nor workers can individually influence the market wage rate. Firms are too small to affect the market.</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4 font-medium text-blue-400">2. Freedom of Entry</td>
                    <td className="py-3 px-4">Workers can freely enter and exit the labor market. No trade unions or regulations prevent access to jobs.</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4 font-medium text-blue-400">3. Perfect Knowledge</td>
                    <td className="py-3 px-4">All workers and employers have complete information about wages, working conditions, and job opportunities.</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4 font-medium text-blue-400">4. Homogeneous Labor</td>
                    <td className="py-3 px-4">All workers are identical in terms of skills, productivity, and ability. No worker is preferred over another.</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4 font-medium text-blue-400">5. Law of Diminishing Returns</td>
                    <td className="py-3 px-4">As more workers are employed with fixed capital, the marginal product of labor eventually diminishes.</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4 font-medium text-blue-400">6. Perfect Competition</td>
                    <td className="py-3 px-4">Both the product market and labor market operate under perfect competition.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Individual Labor Supply */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Individual Labor Supply: The Backward-Bending Curve</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              An individual worker's supply of labor is determined by the trade-off between work and leisure. 
              Any change in the wage rate produces <strong className="text-silver-bright">two opposing effects</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Substitution Effect (Positive)</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  An increase in wages makes leisure more expensive (higher opportunity cost). Workers substitute 
                  <strong className="text-green-400"> more work for leisure</strong>, increasing labor supply.
                </p>
                <p className="text-xs text-muted-foreground">
                  Example: If wage rises from $10 to $12/hour, each hour of leisure now "costs" $12 in forgone earnings.
                </p>
              </div>

              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Income Effect (Negative)</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Higher wages mean workers can afford more leisure while maintaining the same income. 
                  Since work is an "inferior good," higher income leads to <strong className="text-red-400">less work</strong>.
                </p>
                <p className="text-xs text-muted-foreground">
                  Example: "When you have money, there's no point if you can't spend it" enjoying leisure.
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <h4 className="text-amber-400 font-semibold mb-2">The Backward-Bending Supply Curve</h4>
              <p className="text-muted-foreground text-sm">
                At low wages, the <strong>substitution effect dominates</strong> — higher wages lead to more hours worked. 
                At high wages, the <strong>income effect dominates</strong> — workers value leisure more and work fewer hours. 
                This creates the characteristic backward-bending shape. However, the <strong>market supply curve</strong> 
                remains upward-sloping because higher wages attract more workers into the labor force.
              </p>
            </div>
          </div>

          {/* Firm's Labor Supply */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Supply of Labor to the Firm</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In a perfectly competitive labor market, the individual firm faces a <strong className="text-silver-bright">perfectly elastic 
              (horizontal) supply curve</strong> at the market wage rate. The firm can hire as many workers as it wants 
              at the prevailing wage, but cannot attract workers at a lower wage.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-silver/20">
                    <th className="text-left py-3 px-4 text-silver-bright">Units of Labor (L)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Wage Rate (W)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Total Factor Cost (TFC)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Marginal Factor Cost (MFC)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Average Factor Cost (AFC)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$5</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$5</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$15</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$5</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$20</td>
                    <td className="py-3 px-4">$5</td>
                    <td className="py-3 px-4">$5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-200 font-mono text-lg text-center">
                W = MFC = AFC = S<sub>Labor</sub>
              </p>
              <p className="text-muted-foreground text-sm text-center mt-2">
                In perfect competition, the wage equals marginal factor cost, average factor cost, and the supply curve
              </p>
            </div>
          </div>

          {/* MRP Theory */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Marginal Revenue Product (MRP) Theory</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The <strong className="text-silver-bright">Marginal Revenue Product</strong> is the additional revenue 
              a firm earns by employing one more unit of labor. It is the foundation of labor demand theory and determines 
              how many workers a profit-maximizing firm will hire.
            </p>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-6">
              <p className="text-primary font-mono text-xl text-center">
                MRP = MPP × MR
              </p>
              <p className="text-muted-foreground text-sm text-center mt-2">
                Marginal Revenue Product = Marginal Physical Product × Marginal Revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-silver-bright font-semibold mb-2">For Perfect Competition (Product Market)</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Since P = MR in perfect competition:
                </p>
                <p className="text-primary font-mono">MRP = MPP × P = VMP</p>
                <p className="text-xs text-muted-foreground mt-1">(Value of Marginal Product)</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-silver-bright font-semibold mb-2">For Imperfect Competition</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Since P &gt; MR when demand is downward-sloping:
                </p>
                <p className="text-primary font-mono">MRP &lt; VMP</p>
                <p className="text-xs text-muted-foreground mt-1">(MRP is below VMP)</p>
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-silver/20">
                    <th className="text-left py-3 px-4 text-silver-bright">Labor Input</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Total Output</th>
                    <th className="text-left py-3 px-4 text-silver-bright">MPP</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Price (P)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">MRP = MPP × P</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4 text-primary font-medium">$80</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">17</td>
                    <td className="py-3 px-4">9</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4 text-primary font-medium">$90</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">25</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4 text-primary font-medium">$80</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">32</td>
                    <td className="py-3 px-4">7</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4 text-primary font-medium">$70</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">5</td>
                    <td className="py-3 px-4">38</td>
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4 text-primary font-medium">$60</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <LaborMarketDiagram />
          </div>

          {/* Employment Decision */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">The Firm's Employment Decision</h3>
            <p className="text-muted-foreground mb-4">
              A profit-maximizing firm hires workers up to the point where <strong className="text-primary">MRP = MFC</strong> (or MRP = W in perfect competition).
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">Before Equilibrium</h4>
                <p className="text-muted-foreground text-sm">
                  MRP &gt; MFC: The extra worker adds more revenue than cost. Hire more workers to increase profits.
                </p>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">At Equilibrium</h4>
                <p className="text-muted-foreground text-sm">
                  MRP = MFC: Profits are maximized. The last worker's contribution exactly equals their cost.
                </p>
              </div>
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <h4 className="text-red-400 font-semibold mb-2">After Equilibrium</h4>
                <p className="text-muted-foreground text-sm">
                  MRP &lt; MFC: Each additional worker costs more than they contribute. Reduce workforce.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="text-primary font-semibold mb-2">The Demand for Labor Curve</h4>
              <p className="text-muted-foreground text-sm">
                The firm's demand curve for labor is the <strong>MRP curve</strong>. At any wage rate, the quantity 
                demanded is found where W = MRP. Since MRP slopes downward (due to diminishing returns), 
                the labor demand curve is downward-sloping.
              </p>
            </div>
          </div>

          {/* Elasticity of demand for labour */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Elasticity of Demand for Labour</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Labour demand is a <strong className="text-silver-bright">derived demand</strong>: firms hire workers
              for the value of what they produce, not for their own sake. The wage elasticity of labour demand
              measures the responsiveness of employment to a wage change and is the single most important variable
              in evaluating unions, minimum wages and payroll taxes.
            </p>
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-6">
              <p className="text-primary font-mono text-center">
                E<sub>d(L)</sub> = % change in quantity of labour demanded ÷ % change in the wage rate
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">1. Elasticity of demand for the product</p>
                <p className="text-muted-foreground text-sm">If consumers desert the product when prices rise, firms cannot pass wage costs on and employment falls sharply.</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">2. Ease of substituting capital for labour</p>
                <p className="text-muted-foreground text-sm">Self-checkouts, warehouse robots and AI drafting tools make demand for routine labour far more elastic.</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">3. Labour's share of total costs</p>
                <p className="text-muted-foreground text-sm">Where wages are a large share of costs (care homes, hospitality) demand is elastic; in capital-intensive utilities it is inelastic.</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">4. Time period</p>
                <p className="text-muted-foreground text-sm">Contracts, retraining and re-tooling take time, so labour demand is always more elastic in the long run.</p>
              </div>
            </div>
            <ElasticityLabourDemandDiagram />
          </div>

          {/* Shifts in labour demand and supply */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">What Shifts Labour Demand and Supply?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <h4 className="text-cyan-300 font-semibold mb-3">Shifts in demand (MRP)</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Rise in the <strong>product price</strong> — MRP = MPP × MR, so a housing boom lifts builders' wages</li>
                  <li>• Rise in <strong>productivity</strong> (training, better capital, technology) shifts MRP right</li>
                  <li>• <strong>Automation</strong> substituting for routine tasks shifts MRP left for those roles and right for complementary skills</li>
                  <li>• Changes in the <strong>price of capital</strong> — cheap machinery can replace or complement labour</li>
                </ul>
              </div>
              <div className="p-6 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl">
                <h4 className="text-fuchsia-300 font-semibold mb-3">Shifts in supply</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Migration</strong> and changes in the participation rate</li>
                  <li>• <strong>Training and qualifications</strong> — expanding the pool of licensed nurses or pilots</li>
                  <li>• <strong>Non-monetary factors</strong>: job satisfaction, status, safety, flexible or remote work</li>
                  <li>• <strong>Barriers to entry</strong>: professional licensing, union closed shops, visa rules</li>
                  <li>• <strong>Taxes and benefits</strong> affecting the net wage and the replacement ratio</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitations */}

            <h3 className="text-xl font-semibold text-silver-bright mb-4">Limitations of MRP Theory</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">1. Factors are not homogeneous</p>
                <p className="text-muted-foreground text-sm">Workers have different skills — you cannot replace a doctor with a coal miner</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">2. Factors are not perfectly mobile</p>
                <p className="text-muted-foreground text-sm">Geographic, occupational, and skills barriers limit labor movement</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">3. Imperfect competition exists</p>
                <p className="text-muted-foreground text-sm">Monopsony, unions, and government intervention distort wages</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">4. Factors may be unemployed</p>
                <p className="text-muted-foreground text-sm">Unemployed workers may accept wages below their MRP</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">5. Joint production</p>
                <p className="text-muted-foreground text-sm">Output results from multiple factors working together — hard to isolate individual MRP</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">6. Non-profit motives</p>
                <p className="text-muted-foreground text-sm">Firms may pursue sales maximization or other objectives</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <p className="text-amber-400 font-medium mb-1">7. Ignores technical progress</p>
                <p className="text-muted-foreground text-sm">Technological change requires cooperation between factors</p>
              </div>
            </div>
          </div>
        </section>

        <AnalysisBlock title=" Chain: Labor Demand and the MRP Curve" type="analysis">
          <p>
            <strong className="text-cyan-400">Starting Point:</strong> Firm operates with fixed capital and diminishing returns →
            <strong className="text-cyan-400"> Production Function:</strong> As more labor is hired, MPP initially rises then falls (Law of Diminishing Returns) →
            <strong className="text-cyan-400"> Revenue Impact:</strong> MRP = MPP × MR; in perfect competition, MR = P, so MRP = MPP × P →
            <strong className="text-cyan-400"> Demand Curve Derivation:</strong> Since MPP eventually falls, MRP falls; the MRP curve IS the labor demand curve →
            <strong className="text-cyan-400"> Employment Decision:</strong> Firm hires where MRP = MFC (or MRP = W in competition); beyond this, extra worker costs more than they contribute.
          </p>
        </AnalysisBlock>

        <ExaminerTrap
          trap="Students draw the MRP curve incorrectly or confuse it with the product market demand curve. They may also forget that MRP depends on BOTH productivity AND product price."
          correction="The MRP curve slopes downward due to diminishing marginal product, NOT because of demand conditions. MRP = MPP × MR: if EITHER productivity OR product price changes, the entire MRP curve shifts. A rise in product demand shifts MRP rightward, increasing labor demand."
        />

        {/* Topic 2: Monopsony */}
        <section id="monopsony" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold">2</span>
            Monopsony
          </h2>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Definition &amp; Features</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A <strong className="text-silver-bright">monopsony</strong> is a labor market with a single buyer (employer) 
              of labor. Unlike in perfect competition where firms are wage takers, a monopsonist is a 
              <strong className="text-silver-bright"> wage maker</strong> — it has the power to set wages below the 
              competitive level. Examples include a single hospital in a rural area (for nurses), coal mining towns, 
              or large government employers.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">1. Major/Single Buyer</h4>
                <p className="text-muted-foreground text-sm">One employer dominates the local labor market</p>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">2. Wage Maker</h4>
                <p className="text-muted-foreground text-sm">The employer sets the wage rate — workers have limited alternatives</p>
              </div>
            </div>
          </div>

          {/* MFC in Monopsony */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Marginal Factor Cost (MFC) in Monopsony</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Unlike in perfect competition, the monopsonist faces an <strong className="text-silver-bright">upward-sloping 
              supply curve</strong> for labor. To hire more workers, it must offer a higher wage — and must pay this 
              higher wage to <em>all</em> workers, not just the marginal one. This makes the Marginal Factor Cost (MFC) 
              greater than the wage rate.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-silver/20">
                    <th className="text-left py-3 px-4 text-silver-bright">Units of Labor (L)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">Wage Rate (W)</th>
                    <th className="text-left py-3 px-4 text-silver-bright">TFC</th>
                    <th className="text-left py-3 px-4 text-silver-bright">MFC</th>
                    <th className="text-left py-3 px-4 text-silver-bright">AFC</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4">—</td>
                    <td className="py-3 px-4">$10</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">$11</td>
                    <td className="py-3 px-4">$22</td>
                    <td className="py-3 px-4 text-red-400 font-medium">$12</td>
                    <td className="py-3 px-4">$11</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">$12</td>
                    <td className="py-3 px-4">$36</td>
                    <td className="py-3 px-4 text-red-400 font-medium">$14</td>
                    <td className="py-3 px-4">$12</td>
                  </tr>
                  <tr className="border-b border-silver/10">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">$13</td>
                    <td className="py-3 px-4">$52</td>
                    <td className="py-3 px-4 text-red-400 font-medium">$16</td>
                    <td className="py-3 px-4">$13</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-6">
              <h4 className="text-red-400 font-semibold mb-2">Key Insight: MFC &gt; Wage</h4>
              <p className="text-muted-foreground text-sm">
                The MFC exceeds the wage because hiring an extra worker requires raising the wage for all workers, 
                not just the new one. The MFC curve lies above the supply (AFC) curve.
              </p>
            </div>

            <MonopsonyLaborDiagram />
          </div>

          {/* Monopsony Equilibrium */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Monopsony Equilibrium</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The monopsonist maximizes profit by hiring where <strong className="text-primary">MRP = MFC</strong>. 
              However, it pays the wage from the <em>supply curve</em> at that employment level — which is below MRP.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Compared to Perfect Competition</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Lower employment:</strong> L<sub>mon</sub> &lt; L<sub>comp</sub></li>
                  <li>• <strong>Lower wages:</strong> W<sub>mon</sub> &lt; W<sub>comp</sub></li>
                  <li>• Workers are "exploited" — paid less than their MRP</li>
                  <li>• Monopsonist captures the difference as profit</li>
                </ul>
              </div>

              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Zone of Bargaining</h4>
                <p className="text-muted-foreground text-sm">
                  The gap between the monopsony wage (W<sub>1</sub>) and the competitive wage (W<sub>2</sub>) creates 
                  a "zone of bargaining" where interventions (unions, minimum wage) can potentially increase 
                  <em>both</em> wages and employment.
                </p>
              </div>
            </div>
          </div>

          <AnalysisBlock title=" Chain: Monopsony Exploitation" type="analysis">
            <p>
              <strong className="text-cyan-400">Market Structure:</strong> Single employer dominates local labor market (e.g., NHS as major nurse employer) →
              <strong className="text-cyan-400"> Supply Curve:</strong> Firm faces upward-sloping supply; must raise wage to attract more workers →
              <strong className="text-cyan-400"> Cost Divergence:</strong> Raising wage for new worker requires raising it for ALL workers, so MCL &gt; ACL (supply curve) →
              <strong className="text-cyan-400"> Profit Maximization:</strong> Monopsonist hires where MRP = MCL, but pays wage from SUPPLY curve at that quantity →
              <strong className="text-cyan-400"> Result:</strong> Workers paid W<sub>mon</sub> (below MRP) and L<sub>mon</sub> employed (below competitive level). 
              The gap between MRP and wage represents "exploitation" captured as profit.
            </p>
          </AnalysisBlock>

          <AnalysisBlock title="Critical Evaluation: Is Monopsony Always Bad?" type="evaluation">
            <p>
              While monopsony creates exploitation in the textbook model, real-world evaluation is more nuanced:
              <strong className="text-amber-400"> (1) Efficiency wage theory:</strong> Some monopsonists pay ABOVE the competitive wage 
              to reduce turnover, increase productivity, and attract better workers—countering the exploitation prediction.
              <strong className="text-amber-400"> (2) Dynamic effects:</strong> Monopsonist employers may invest in worker training 
              (since workers have fewer outside options), potentially increasing human capital and long-run productivity.
              <strong className="text-amber-400"> (3) Countervailing power:</strong> Unions can offset monopsony power, 
              potentially achieving competitive outcomes through bilateral bargaining.
              <strong className="text-amber-400"> (4) Minimum wage paradox:</strong> In monopsony markets, 
              moderate minimum wages can INCREASE employment by eliminating the MCL &gt; W gap—contradicting standard competitive analysis.
            </p>
          </AnalysisBlock>

          <ExaminerTrap
            trap="Students draw monopsony diagrams with MCL below the supply curve, or fail to show the divergence between the wage paid and MRP."
            correction="MCL is ALWAYS above the supply curve (ACL) in monopsony because hiring an extra worker requires raising wages for ALL workers. The wage is read from the SUPPLY curve at the employment level where MRP = MCL, NOT from the MCL curve."
          />
        </section>

        {/* Topic 3: Trade Union Intervention */}
        <section id="trade-unions" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-lg font-bold">3</span>
            Trade Union Intervention
          </h2>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Methods of Trade Union Intervention</h3>

            <div className="space-y-6">
              <div className="p-6 border border-silver/20 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-3">1. Restricting Labor Supply</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  The union can limit the amount of labor available (e.g., through a "closed shop" where only union 
                  members can be hired). By restricting supply from S to S<sub>1</sub>, the wage rises from W to W<sub>1</sub>. 
                  Workers with jobs benefit from higher wages, but some workers become unemployed.
                </p>
              </div>

              <div className="p-6 border border-silver/20 rounded-xl">
                <h4 className="text-lg font-semibold text-amber-400 mb-3">2. Negotiating Higher Wages</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  The union bargains for a wage floor above the market equilibrium. This creates a horizontal 
                  segment in the labor supply curve. Firms may respond by reducing employment — marginal firms 
                  may go bankrupt, leaving fewer workers at a higher wage.
                </p>
              </div>
            </div>
          </div>

          {/* Unions in Monopsony */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Trade Unions vs. Monopsony</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In a monopsony market, a trade union can potentially <strong className="text-green-400">increase both 
              wages AND employment</strong> — a counterintuitive result. By setting a wage floor within the 
              "zone of bargaining," the union effectively makes the supply curve horizontal at the negotiated wage, 
              eliminating the monopsonist's ability to exploit workers.
            </p>

            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2">The Paradox Explained</h4>
              <p className="text-muted-foreground text-sm">
                At the union-negotiated wage (within the zone W<sub>1</sub> to W<sub>2</sub>), the monopsonist's 
                MFC equals the wage (no longer rising). The firm hires where MRP = this fixed MFC, which occurs 
                at a higher employment level than the monopsony solution. Both workers and the firm can be better off.
              </p>
            </div>

            <div className="mt-8">
              <TradeUnionMonopsonyDiagram />
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">Bilateral Monopoly</h4>
              <p className="text-muted-foreground text-sm">
                When a monopsony employer faces a single strong union, the market becomes a
                <strong className="text-silver-bright"> bilateral monopoly</strong>. Economic theory cannot predict a
                unique wage: it is indeterminate within the zone of bargaining, running from the monopsony wage
                (the union's floor) up to the MRP of the last worker hired (the firm's ceiling). The actual outcome
                depends on relative bargaining power — strike funds, union density, the cost of a stoppage to the
                employer, public sympathy and legal constraints on industrial action. Classic examples: rail unions
                versus a national operator, doctors' associations versus a single public health service, and
                players' unions versus a sports league.
              </p>
            </div>
          </div>

          {/* Unions in a competitive market */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Unions in a Competitive Labour Market</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where the labour market is competitive, a negotiated wage above equilibrium behaves exactly like a
              minimum wage: the effective supply curve becomes horizontal at the union rate, the firm moves back up
              its MRP curve and excess supply of labour appears. Whether this matters depends overwhelmingly on the
              elasticity of demand for labour and on whether higher pay raises productivity.
            </p>
            <TradeUnionCompetitiveDiagram />
          </div>


          {/* Power of Unions */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Factors Affecting Union Power</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-amber-400 font-medium mb-2">Number of Members</h4>
                <p className="text-muted-foreground text-sm">More members = greater bargaining power and strike threat</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-amber-400 font-medium mb-2">Inelastic Labor Demand</h4>
                <p className="text-muted-foreground text-sm">The more inelastic demand, the smaller the employment loss from wage increases</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-amber-400 font-medium mb-2">Employer Profitability</h4>
                <p className="text-muted-foreground text-sm">More profitable employers can afford higher wages</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-amber-400 font-medium mb-2">Labor Cost Share</h4>
                <p className="text-muted-foreground text-sm">If labor is a small % of total costs, wage increases have less impact</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <h4 className="text-amber-400 font-semibold mb-2">Insider-Outsider Phenomenon</h4>
              <p className="text-muted-foreground text-sm">
                Unions primarily represent employed workers ("insiders") who benefit from higher wages. 
                Unemployed workers ("outsiders") may be harmed as higher wages reduce job opportunities. 
                This can create a two-tier labor market.
              </p>
            </div>
          </div>
        </section>

        {/* Topic 4: Government Intervention */}
        <section id="government" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-lg font-bold">4</span>
            Government Intervention: Minimum Wage
          </h2>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Functions of Government in Labor Markets</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 font-medium">Protect Workers</p>
                <p className="text-muted-foreground text-xs">Against exploitation by bad employers</p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 font-medium">Improve Incentives</p>
                <p className="text-muted-foreground text-xs">Tackle voluntary unemployment</p>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 font-medium">Alleviate Poverty</p>
                <p className="text-muted-foreground text-xs">Raise living standards of poorest groups</p>
              </div>
            </div>
          </div>

          {/* Minimum Wage in Competitive Market */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Minimum Wage in a Competitive Labor Market</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In a competitive labor market, a minimum wage set above equilibrium creates 
              <strong className="text-red-400"> unemployment</strong>. At the higher wage, more workers want jobs (labor supply increases), 
              but firms want to hire fewer workers (labor demand decreases). The gap represents unemployment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Effects</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Employment falls from L<sub>e</sub> to L<sub>min</sub></li>
                  <li>• Unemployment created = supply at W<sub>min</sub> − demand at W<sub>min</sub></li>
                  <li>• Workers who keep jobs earn more</li>
                  <li>• Workers who lose jobs are worse off</li>
                </ul>
              </div>

              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Condition</h4>
                <p className="text-muted-foreground text-sm">
                  For unemployment to occur, the minimum wage must be <strong>above the equilibrium wage</strong>. 
                  A minimum wage below equilibrium has no effect (non-binding).
                </p>
              </div>
            </div>
          </div>

          {/* Minimum Wage in Monopsony */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Minimum Wage in a Monopsony Market</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In a monopsony, a carefully set minimum wage can <strong className="text-green-400">increase both wages 
              AND employment</strong> — similar to union intervention. This occurs because the minimum wage eliminates 
              the rising MFC that causes the monopsonist to restrict hiring.
            </p>

            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2">The Paradox</h4>
              <p className="text-muted-foreground text-sm">
                If the minimum wage is set within the "zone of bargaining" (between W<sub>mon</sub> and W<sub>comp</sub>), 
                the MFC becomes horizontal at the minimum wage. The firm then hires more workers because each 
                additional worker no longer requires raising wages for all existing workers.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-muted-foreground text-sm mb-4">
                The monopsony case is drawn in full in Section 3 — the same geometry applies whether the wage
                floor is imposed by a union or by statute. The key contrast to hold in your head: in a
                <strong className="text-silver-bright"> competitive</strong> market a binding wage floor moves the
                firm <em>up its MRP curve</em> and employment falls; in a
                <strong className="text-silver-bright"> monopsony</strong> it flattens MFC and employment
                <strong className="text-green-400"> rises</strong> up to the competitive level.
              </p>
            </div>
          </div>

          {/* Real-world evidence */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Real-World Evidence on Minimum Wages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-green-400 font-medium mb-2">Card &amp; Krueger (New Jersey, 1994)</h4>
                <p className="text-muted-foreground text-sm">
                  Fast-food employment in New Jersey did not fall relative to neighbouring Pennsylvania after a
                  minimum wage rise. The standard interpretation is that low-wage local labour markets contain
                  significant <strong>monopsony power</strong>, so the competitive prediction over-states job losses.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-green-400 font-medium mb-2">UK National Living Wage</h4>
                <p className="text-muted-foreground text-sm">
                  Successive Low Pay Commission reviews found the NLW substantially raised pay at the bottom of the
                  distribution with only limited effects on employment, though with some reduction in hours and
                  faster automation in retail and hospitality.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-amber-400 font-medium mb-2">Where job losses do appear</h4>
                <p className="text-muted-foreground text-sm">
                  Effects are largest for <strong>young and low-skilled workers</strong>, in regions where the floor
                  bites hardest relative to median pay ("bite"), and in tradable sectors where firms cannot pass
                  costs on to consumers.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-amber-400 font-medium mb-2">Poverty targeting critique</h4>
                <p className="text-muted-foreground text-sm">
                  Many minimum-wage earners live in higher-income households (second earners, students), so a wage
                  floor is a <strong>blunt anti-poverty tool</strong> compared with targeted in-work benefits or tax
                  credits — a strong evaluative line in essays.
                </p>
              </div>
            </div>
          </div>


          {/* Evaluation */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <NoteCard title="Arguments FOR Minimum Wage" type="concept" className="h-full">
              <ul className="space-y-2 text-sm">
                <li>• Reduces poverty and in-work poverty</li>
                <li>• Increases incentives to work (vs. benefits)</li>
                <li>• Reduces exploitation by monopsonistic employers</li>
                <li>• May increase productivity (efficiency wages)</li>
                <li>• Reduces inequality</li>
              </ul>
            </NoteCard>

            <NoteCard title="Arguments AGAINST Minimum Wage" type="exam-tip" className="h-full">
              <ul className="space-y-2 text-sm">
                <li>• Creates unemployment in competitive markets</li>
                <li>• May cause occupational immobility</li>
                <li>• Could increase inflation if passed on as higher prices</li>
                <li>• May harm small businesses more than large ones</li>
                <li>• Benefits depend on elasticity of labor demand</li>
              </ul>
            </NoteCard>
          </div>
        </section>

        {/* Topic 5: Wage Differentials */}
        <section id="wage-differentials" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg font-bold">5</span>
            Wage Differentials
          </h2>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-silver-bright mb-4">Causes of Wage Differentials</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In reality, wages vary significantly across occupations, industries, regions, and demographic groups. 
              These differentials can be explained by differences in labor demand, labor supply, and market imperfections.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">1. Skilled vs. Unskilled Workers</h4>
                <p className="text-muted-foreground text-sm">
                  Skilled labor commands higher wages due to higher MRP (productivity), limited supply 
                  (training barriers), and inelastic labor supply.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">2. Male vs. Female Workers</h4>
                <p className="text-muted-foreground text-sm">
                  Gender pay gaps may reflect discrimination, occupational segregation, 
                  career breaks, or differences in bargaining power.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">3. Private vs. Public Sector</h4>
                <p className="text-muted-foreground text-sm">
                  Different objectives (profit vs. public service), union strength, 
                  job security, and pension benefits create differentials.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">4. Industrial Sector</h4>
                <p className="text-muted-foreground text-sm">
                  Some industries (finance, tech) pay more due to higher productivity, 
                  profitability, or specialized skills required.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">5. Special Talents / Celebrity</h4>
                <p className="text-muted-foreground text-sm">
                  Unique skills (athletes, artists) have very inelastic supply, 
                  allowing them to earn massive economic rents.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">6. Product Prices</h4>
                <p className="text-muted-foreground text-sm">
                  Workers producing higher-priced goods have higher MRP 
                  and thus command higher wages.
                </p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h4 className="text-indigo-400 font-medium mb-2">7. Market Imperfections</h4>
                <p className="text-muted-foreground text-sm">
                  Discrimination, lack of information, immobility, and 
                  monopsony power distort wages from competitive levels.
                </p>
              </div>
            </div>

            <WageDifferentialsDiagram />
          </div>
        </section>

        {/* Topic 6: Economic Rent and Transfer Earnings */}
        <section id="economic-rent" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-lg font-bold">6</span>
            Economic Rent &amp; Transfer Earnings
          </h2>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-rose-400 mb-3">Economic Rent</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  The payment to a factor of production <strong>above</strong> the minimum amount required 
                  to keep it in its current use. It is a "surplus" payment.
                </p>
                <p className="text-xs text-muted-foreground">
                  Example: A footballer earning $500,000/year who would work for $50,000 earns $450,000 in economic rent.
                </p>
              </div>

              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Transfer Earnings</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  The <strong>minimum</strong> payment required to keep a factor in its current use — 
                  what it could earn in its next best alternative.
                </p>
                <p className="text-xs text-muted-foreground">
                  Example: The $50,000 the footballer could earn in their next best job is their transfer earnings.
                </p>
              </div>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-6">
              <p className="text-primary font-mono text-lg text-center">
                Total Earnings = Economic Rent + Transfer Earnings
              </p>
            </div>

            <h4 className="text-lg font-semibold text-silver-bright mb-4">The Role of Supply Elasticity</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-silver/20 rounded-lg">
                <h5 className="text-rose-400 font-semibold mb-2">Perfectly Inelastic Supply</h5>
                <p className="text-muted-foreground text-sm">
                  When supply is fixed (vertical), <strong>all earnings are economic rent</strong>. 
                  The factor would supply the same amount at any wage.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Example: Land, unique talents</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h5 className="text-blue-400 font-semibold mb-2">Perfectly Elastic Supply</h5>
                <p className="text-muted-foreground text-sm">
                  When supply is horizontal, <strong>all earnings are transfer earnings</strong>. 
                  Any wage below the market rate means zero supply.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Example: Unskilled labor</p>
              </div>
              <div className="p-4 border border-silver/20 rounded-lg">
                <h5 className="text-purple-400 font-semibold mb-2">Normal Upward-Sloping Supply</h5>
                <p className="text-muted-foreground text-sm">
                  Earnings are split between economic rent (area above supply, below wage) and 
                  transfer earnings (area below supply curve).
                </p>
                <p className="text-xs text-muted-foreground mt-2">Example: Most occupations</p>
              </div>
            </div>


            <div className="mt-8">
              <EconomicRentTransferDiagram />
            </div>

            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <h4 className="text-amber-400 font-semibold mb-2">Quasi-Rent and the Time Period</h4>
              <p className="text-muted-foreground text-sm">
                Elasticity of labour supply rises over time, so rents earned today are often competed away tomorrow.
                A surge in demand for cyber-security analysts or offshore wind engineers creates large short-run
                rents; as training programmes and migration expand supply, the supply curve flattens and the rent
                erodes. Economists call this temporary surplus a <strong>quasi-rent</strong>. The policy
                implication is important: a tax on <em>pure</em> economic rent (e.g. a land value tax) causes no
                reduction in supply and therefore no deadweight loss, whereas taxing transfer earnings does
                discourage the supply of labour.
              </p>
            </div>
          </div>
        </section>


        {/* Analytical Depth: MRP Theory */}
        <MRPTheoryAnalyticalDepth />
        <MRPTheoryEvaluativeJudgement />

        <ExamTipBox>
          <h4 className="font-semibold text-amber-300 mb-2">Labor Market Exam Tips</h4>
          <ul className="space-y-2 text-sm">
            <li>• Always draw MRP curve sloping downward (due to diminishing returns)</li>
            <li>• In perfect competition: W = MFC = AFC = Supply (horizontal)</li>
            <li>• In monopsony: MFC &gt; W, MFC lies above supply curve</li>
            <li>• Profit max employment: MRP = MFC (not MRP = W in monopsony)</li>
            <li>• Minimum wage in monopsony CAN increase both wages and employment</li>
            <li>• Economic rent is the area above the supply curve up to the wage rate</li>
          </ul>
        </ExamTipBox>

        {/* Navigation */}
        <nav className="flex justify-between mt-12 pt-8 border-t border-silver/10">
          <Link 
            to="/a2-micro/market-structures" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Previous: Market Structures</span>
          </Link>
          <Link 
            to="/a2-macro/national-income" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Next: A2 National Income</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
      <ChapterEnrichment id="labour-market" />
    </Layout>
  );
};

export default LaborMarket;
