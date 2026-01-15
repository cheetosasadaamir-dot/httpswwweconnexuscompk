import React from 'react';
import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import CostCurvesDiagram from '@/components/diagrams/CostCurvesDiagram';
import EconomiesOfScaleDiagram from '@/components/diagrams/EconomiesOfScaleDiagram';
import RevenueCurvesDiagram from '@/components/diagrams/RevenueCurvesDiagram';

const ProductionCosts = () => {
  return (
    <ChapterLayout
      chapterNumber={2}
      title="Production, Costs, Revenues and Profits"
      subtitle="A2 Microeconomics — Theory of the Firm Foundations"
    >
      {/* Introduction */}
      <ContentSection title="Understanding Production and Costs">
        <p className="text-silver leading-relaxed mb-6">
          The theory of production and costs forms the foundation of the theory of the firm. Understanding how firms 
          transform inputs into outputs, and how costs behave in both the short run and long run, is essential for 
          analyzing market structures and firm behavior. This chapter explores the fundamental relationships between 
          production, costs, revenues, and profits that govern all business decisions.
        </p>
      </ContentSection>

      {/* Key Relationships */}
      <ContentSection title="Three Key Relationships">
        <div className="bg-card/50 border border-primary/30 rounded-xl p-6 mb-6">
          <h4 className="text-primary font-semibold text-lg mb-4">Fundamental Economic Relationships</h4>
          
          <div className="space-y-6">
            <div className="border-l-4 border-neon-cyan pl-4">
              <h5 className="text-neon-cyan font-medium mb-2">1. Marginal and Total</h5>
              <ul className="text-silver space-y-1 text-sm">
                <li>• When <span className="text-neon-cyan font-mono">Marginal = 0</span> → Total is at its <strong>Maximum</strong></li>
                <li>• When <span className="text-neon-cyan font-mono">Marginal {"<"} 0</span> → Total <strong>Decreases</strong></li>
              </ul>
            </div>

            <div className="border-l-4 border-neon-magenta pl-4">
              <h5 className="text-neon-magenta font-medium mb-2">2. Marginal and Average</h5>
              <ul className="text-silver space-y-1 text-sm">
                <li>• When <span className="text-neon-magenta font-mono">Marginal {">"} Average</span> → Average <strong>Increases ↑</strong></li>
                <li>• When <span className="text-neon-magenta font-mono">Marginal {"<"} Average</span> → Average <strong>Decreases ↓</strong></li>
                <li>• When <span className="text-neon-magenta font-mono">Marginal = Average</span> → Average is <strong>Constant</strong> (at min/max)</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-400 pl-4">
              <h5 className="text-emerald-400 font-medium mb-2">3. Average and Total</h5>
              <p className="text-silver text-sm">
                Average = Total ÷ Quantity. This relationship applies universally to product, cost, and revenue curves.
              </p>
            </div>
          </div>
        </div>

        <ExamTipBox variant="gold">
          These three relationships are <strong>universal</strong> in economics. They apply to production (TP, MP, AP), 
          costs (TC, MC, AC), revenue (TR, MR, AR), and utility (TU, MU, AU). Master these relationships once, 
          and you can apply them across all topics.
        </ExamTipBox>
      </ContentSection>

      {/* Topic 1: Production */}
      <ContentSection title="Topic 1: Production">
        <div className="space-y-6">
          <div>
            <h4 className="text-silver-bright font-semibold mb-3">Short Run vs. Long Run</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">Short Run</h5>
                <p className="text-silver text-sm">
                  The period during which at least one factor of production is <strong>fixed</strong>. 
                  Typically, capital (machinery, buildings) is fixed while labor is variable.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-magenta font-medium mb-2">Long Run</h5>
                <p className="text-silver text-sm">
                  The period during which <strong>all</strong> factors of production are variable. 
                  The firm can change its scale of operation, including plant size and capital equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card/50 to-card/30 border border-primary/20 rounded-xl p-6">
            <h4 className="text-primary font-semibold mb-4">
              <GlossaryTooltip term="Law of Diminishing Returns" definition="As more units of a variable input are added to fixed inputs, the marginal product initially rises but eventually falls.">
                Law of Diminishing Returns
              </GlossaryTooltip>
            </h4>
            <p className="text-silver leading-relaxed mb-4">
              Also known as the <em>Law of Diminishing Marginal Product</em>, this fundamental principle states that as more 
              and more units of a variable input (such as labor) are added to one or more fixed inputs (such as land or capital), 
              the marginal product of the variable input at first increases, but there comes a point when it begins to decrease. 
              This relationship presupposes that the fixed input(s) remain fixed and can only be changed in the long run.
            </p>

            <div className="bg-card/50 rounded-lg p-4 mt-4">
              <h5 className="text-silver-bright font-medium mb-3">Three Key Assumptions:</h5>
              <ol className="text-silver space-y-2 text-sm">
                <li><span className="text-neon-cyan">1.</span> At least one factor of production is <strong>fixed</strong> (usually capital).</li>
                <li><span className="text-neon-cyan">2.</span> Each unit of the variable factor is <strong>homogeneous</strong> (e.g., all workers are equally trained).</li>
                <li><span className="text-neon-cyan">3.</span> The level of <strong>technology and efficiency</strong> of machines is held constant.</li>
              </ol>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Product Definitions</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">Total Product (TP)</h5>
                <p className="text-silver text-sm">The total quantity of output produced by a firm using all its inputs.</p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">TP = Σ(output from all units)</p>
              </div>
              <div className="bg-neon-magenta/10 border border-neon-magenta/30 rounded-lg p-4">
                <h5 className="text-neon-magenta font-medium mb-2">Marginal Product (MP)</h5>
                <p className="text-silver text-sm">The additional output produced by employing one more unit of labor.</p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">MP = ΔTP / ΔL</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <h5 className="text-emerald-400 font-medium mb-2">Average Product (AP)</h5>
                <p className="text-silver text-sm">The average output produced per unit of labor employed.</p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">AP = TP / L</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-silver-bright font-semibold mb-4">Interactive: Product Curves & Cost Curves</h4>
          <CostCurvesDiagram />
        </div>

        <AnalysisBlock title="Product Curves Analysis" type="analysis">
          <p>The product curves illustrate the Law of Diminishing Returns in action. Initially, as workers are added, specialization allows MP to rise (increasing returns). However, as more workers share fixed capital, MP begins to fall (diminishing returns). When MP becomes negative, TP actually decreases due to overcrowding and inefficiency. The MP curve intersects AP at its maximum point—a crucial relationship for understanding cost behavior.</p>
        </AnalysisBlock>
        <AnalysisBlock title="Critical Evaluation" type="evaluation">
          <p>While diminishing returns is a powerful short-run concept, it assumes technology remains constant. In reality, technological innovation can shift the entire TP curve upward. Additionally, the assumption of homogeneous labor is often unrealistic; skilled workers may have higher productivity regardless of diminishing returns. The model also assumes perfect factor divisibility, which may not hold for some capital equipment.</p>
        </AnalysisBlock>
      </ContentSection>

      {/* Topic 2: Short-Run Costs */}
      <ContentSection title="Topic 2: Short-Run Costs">
        <p className="text-silver leading-relaxed mb-6">
          In the short run, costs are divided into fixed costs (which do not vary with output) and variable costs 
          (which change as output changes). Understanding the relationship between these cost categories and how 
          marginal cost relates to average costs is crucial for analyzing firm behavior.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Total Cost Categories</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
                <h5 className="text-amber-400 font-medium mb-2">Total Fixed Costs (TFC)</h5>
                <p className="text-silver text-sm mb-2">
                  Costs that do <strong>not</strong> vary with output. These must be paid even if output is zero.
                </p>
                <p className="text-xs text-muted-foreground">Examples: Rent, insurance, loan interest, salaries of permanent staff</p>
              </div>
              <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
                <h5 className="text-emerald-400 font-medium mb-2">Total Variable Costs (TVC)</h5>
                <p className="text-silver text-sm mb-2">
                  Costs that <strong>vary directly</strong> with the level of output. Zero output means zero variable costs.
                </p>
                <p className="text-xs text-muted-foreground">Examples: Raw materials, energy, hourly wages, packaging</p>
              </div>
              <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-magenta font-medium mb-2">Total Cost (TC)</h5>
                <p className="text-silver text-sm mb-2">
                  The sum of all fixed and variable costs at each level of output.
                </p>
                <p className="text-xs text-neon-magenta font-mono mt-2">TC = TFC + TVC</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Average Cost Categories</h4>
            <p className="text-silver text-sm mb-4">
              When total costs are divided by output, we obtain the average (per-unit) costs:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <h5 className="text-amber-400 font-medium mb-2">AFC</h5>
                <p className="text-xs text-silver">Average Fixed Cost</p>
                <p className="text-sm text-silver-bright font-mono mt-2">AFC = TFC / Q</p>
                <p className="text-xs text-muted-foreground mt-2">Falls continuously as output rises (spreading overhead)</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <h5 className="text-emerald-400 font-medium mb-2">AVC</h5>
                <p className="text-xs text-silver">Average Variable Cost</p>
                <p className="text-sm text-silver-bright font-mono mt-2">AVC = TVC / Q</p>
                <p className="text-xs text-muted-foreground mt-2">U-shaped due to diminishing returns</p>
              </div>
              <div className="bg-neon-magenta/10 border border-neon-magenta/30 rounded-lg p-4">
                <h5 className="text-neon-magenta font-medium mb-2">ATC</h5>
                <p className="text-xs text-silver">Average Total Cost</p>
                <p className="text-sm text-silver-bright font-mono mt-2">ATC = TC / Q</p>
                <p className="text-xs text-muted-foreground mt-2">ATC = AVC + AFC</p>
              </div>
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">MC</h5>
                <p className="text-xs text-silver">Marginal Cost</p>
                <p className="text-sm text-silver-bright font-mono mt-2">MC = ΔTC / ΔQ</p>
                <p className="text-xs text-muted-foreground mt-2">Cost of producing one more unit</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-neon-cyan/10 to-transparent border-l-4 border-neon-cyan p-4 rounded-r-lg">
            <h5 className="text-neon-cyan font-medium mb-2">The U-Shape Explanation</h5>
            <p className="text-sm text-silver">
              The U-shape of the AVC, ATC, and MC curves is directly caused by the <strong>Law of Diminishing Returns</strong>. 
              As diminishing returns set in, each additional unit of output requires proportionally more variable inputs, 
              causing marginal and average variable costs to rise. The cost curves are essentially <em>mirror images</em> 
              of the product curves (when MP rises, MC falls; when MP falls, MC rises).
            </p>
          </div>

          <ExamTipBox variant="silver">
            Remember: <strong>MC intersects both AVC and ATC at their minimum points</strong>. This is because when 
            MC {"<"} AC, it pulls the average down; when MC {">"} AC, it pulls the average up. The gap between ATC 
            and AVC equals AFC, which shrinks as output increases.
          </ExamTipBox>
        </div>
      </ContentSection>

      {/* Topic 3: Long-Run Costs */}
      <ContentSection title="Topic 3: Long-Run Costs">
        <p className="text-silver leading-relaxed mb-6">
          In the long run, all factors of production are variable. The firm can choose the optimal combination 
          of inputs for each level of output, leading to the Long-Run Average Cost (LRAC) curve. The shape of 
          this curve depends on returns to scale and economies/diseconomies of scale.
        </p>

        <div className="bg-gradient-to-br from-card/50 to-card/30 border border-primary/20 rounded-xl p-6 mb-6">
          <h4 className="text-primary font-semibold mb-4">Long-Run Average Cost Curve</h4>
          <p className="text-silver leading-relaxed">
            The LRAC curve shows the <strong>lowest possible average cost</strong> that can be attained by a firm 
            for any level of output when all of the firm's inputs are variable. It is a curve that just 
            touches (is <em>tangent to</em>) each of many short-run average total cost curves. For this reason, 
            it is also known as the <strong>planning curve</strong> or <strong>envelope curve</strong>.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-silver-bright font-semibold mb-4">Interactive: Economies of Scale & LRAC</h4>
          <EconomiesOfScaleDiagram />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Returns to Scale</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <h5 className="text-emerald-400 font-medium mb-2">Increasing Returns to Scale</h5>
                <p className="text-silver text-sm mb-2">
                  When inputs increase by 10%, output increases by <strong>more than 10%</strong>.
                </p>
                <p className="text-xs text-muted-foreground">Result: LRAC falls (economies of scale)</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <h5 className="text-amber-400 font-medium mb-2">Constant Returns to Scale</h5>
                <p className="text-silver text-sm mb-2">
                  When inputs increase by 10%, output increases by <strong>exactly 10%</strong>.
                </p>
                <p className="text-xs text-muted-foreground">Result: LRAC remains constant</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Decreasing Returns to Scale</h5>
                <p className="text-silver text-sm mb-2">
                  When inputs increase by 10%, output increases by <strong>less than 10%</strong>.
                </p>
                <p className="text-xs text-muted-foreground">Result: LRAC rises (diseconomies of scale)</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Internal Economies of Scale</h4>
            <p className="text-silver text-sm mb-4">
              Cost advantages that arise from within the firm as it expands its scale of production:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">1. Purchasing (Bulk-buying)</h5>
                <p className="text-silver text-xs">
                  Larger firms can negotiate discounts from suppliers when ordering raw materials in bulk, 
                  reducing per-unit input costs.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">2. Marketing</h5>
                <p className="text-silver text-xs">
                  Advertising costs can be spread over a larger output. A national TV campaign costs the same 
                  whether selling 1 million or 10 million units.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">3. Financial</h5>
                <p className="text-silver text-xs">
                  Large firms have access to cheaper finance through stock exchanges, bonds, and debentures. 
                  Banks offer lower interest rates to established corporations.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">4. Managerial</h5>
                <p className="text-silver text-xs">
                  Large firms can employ specialist managers (HR, finance, marketing) whose expertise 
                  improves efficiency across the organization.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">5. Technical</h5>
                <p className="text-silver text-xs">
                  Includes: advanced machinery, economies of increased dimensions (cube-square law), 
                  division of labor, and indivisibilities of capital equipment.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">6. Risk-Bearing</h5>
                <p className="text-silver text-xs">
                  Large firms can diversify across products, markets, and geographies, reducing the 
                  impact of any single failure on the overall business.
                </p>
              </div>
              <div className="bg-card/30 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">7. Research & Development</h5>
                <p className="text-silver text-xs">
                  Large firms can invest heavily in R&D to create innovative products. Example: GSK 
                  invests billions annually in pharmaceutical research.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Internal Diseconomies of Scale</h4>
            <p className="text-silver text-sm mb-4">
              Cost disadvantages that arise as a firm becomes too large to manage efficiently:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Poor Communication</h5>
                <p className="text-silver text-xs">
                  Information takes longer to flow through hierarchical layers, leading to 
                  miscommunication and delays in decision-making.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Clash of Cultures</h5>
                <p className="text-silver text-xs">
                  Mergers and acquisitions often bring together incompatible corporate cultures, 
                  reducing organizational cohesion and productivity.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Expensive New Resources</h5>
                <p className="text-silver text-xs">
                  Rapid expansion may require hiring expensive consultants or acquiring 
                  overpriced assets, pushing up average costs.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Low Morale</h5>
                <p className="text-silver text-xs">
                  Workers in large bureaucratic organizations may feel alienated and 
                  undervalued, reducing motivation and productivity.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Slow Decision Making</h5>
                <p className="text-silver text-xs">
                  Complex approval chains and committees slow down responses to market 
                  changes, reducing competitiveness.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">External Economies & Diseconomies of Scale</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-emerald-400 font-medium mb-3">External Economies</h5>
                <p className="text-silver text-xs mb-3">
                  Cost reductions arising from the growth of the <em>industry</em> (not the individual firm):
                </p>
                <ul className="text-silver text-xs space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span><strong>Ancillary Services:</strong> Specialized suppliers and support services emerge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span><strong>Skilled Labor Pool:</strong> Concentration of trained workers (e.g., Silicon Valley tech workers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span><strong>Regional Reputation:</strong> Geographic areas become associated with quality (e.g., Swiss watches)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span><strong>Shared Infrastructure:</strong> Access to specialized transport, research facilities, training centers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-red-400 font-medium mb-3">External Diseconomies</h5>
                <p className="text-silver text-xs mb-3">
                  Cost increases arising from the growth of the <em>industry</em>:
                </p>
                <ul className="text-silver text-xs space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>Pollution:</strong> Industry concentration leads to environmental degradation and cleanup costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>Strains on Infrastructure:</strong> Congestion, housing shortages, overloaded utilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>High Factor Prices:</strong> Competition for land, labor, and materials drives up input costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6">
            <h4 className="text-primary font-semibold mb-3">
              <GlossaryTooltip term="Economies of Scope" definition="Cost savings from producing multiple products together rather than separately.">
                Economies of Scope
              </GlossaryTooltip>
            </h4>
            <p className="text-silver text-sm leading-relaxed">
              Economies of scope arise when the average cost falls as a firm increases output across a 
              <strong> range of different products</strong>. The total cost of producing two products together 
              is less than the cost of producing each item individually. This occurs because the utilization 
              of assets is spread over multiple products, reducing the average cost per unit of each product. 
              For example, a car manufacturer can use the same factory to produce both sedans and SUVs, 
              sharing design, marketing, and distribution resources.
            </p>
          </div>
        </div>

        <AnalysisBlock title="Long-Run Cost Analysis" type="analysis">
          <p>The LRAC curve demonstrates how firms can achieve lower costs by expanding to their optimal scale. The Minimum Efficient Scale (MES) represents the output level at which LRAC is minimized—the point where all economies of scale have been exhausted but diseconomies have not yet set in. Industries with high MES (like automobile manufacturing) tend toward oligopoly, while those with low MES (like restaurants) remain fragmented.</p>
        </AnalysisBlock>
        <AnalysisBlock title="Critical Evaluation" type="evaluation">
          <p>The traditional U-shaped LRAC curve may oversimplify modern business realities. Many digital firms (like software companies) exhibit nearly unlimited economies of scale with negligible marginal costs. External economies can shift the entire LRAC curve, not just move along it. Furthermore, MES varies significantly by industry and may change over time with technological innovation.</p>
        </AnalysisBlock>
      </ContentSection>

      {/* Topic 4: Revenues */}
      <ContentSection title="Topic 4: Revenues">
        <p className="text-silver leading-relaxed mb-6">
          Understanding revenue concepts is essential for analyzing profit maximization. The behavior of revenue 
          curves differs fundamentally between price-taking firms (perfect competition) and price-making firms 
          (monopoly and imperfect competition).
        </p>

        <div className="mb-8">
          <h4 className="text-silver-bright font-semibold mb-4">Interactive: Revenue Curves</h4>
          <RevenueCurvesDiagram />
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-transparent border-l-4 border-neon-cyan p-4 rounded-r-lg">
            <h5 className="text-neon-cyan font-medium mb-2">Price Takers vs. Price Makers</h5>
            <p className="text-sm text-silver">
              A <strong>price taker</strong> (perfectly competitive firm) faces a horizontal demand curve—it can sell 
              any quantity at the market price, so AR = MR = P. A <strong>price maker</strong> (monopolist or 
              imperfectly competitive firm) faces a downward-sloping demand curve—to sell more, it must lower its price. 
              This means MR falls faster than AR because the lower price applies to all units sold.
            </p>
          </div>

          <ExamTipBox variant="gold">
            For a price maker with a linear demand curve, the MR curve has <strong>twice the slope</strong> of the 
            AR (demand) curve. This means MR reaches zero (TR is maximized) at exactly half the quantity where 
            AR equals zero. Always draw MR intersecting the quantity axis at half the point where demand does.
          </ExamTipBox>
        </div>
      </ContentSection>

      {/* Topic 5: Profits */}
      <ContentSection title="Topic 5: Profits">
        <p className="text-silver leading-relaxed mb-6">
          Economic profit differs from accounting profit by including opportunity costs. Understanding the 
          conditions for normal, supernormal, and subnormal profits is crucial for analyzing firm behavior 
          and market entry/exit decisions.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Profit Maximization Rule</h4>
            <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
              <p className="text-silver-bright text-lg mb-4">
                The profit-maximizing (or loss-minimizing) output is where: <span className="text-neon-cyan font-mono text-xl">MC = MR</span>
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-medium">If MR {">"} MC:</p>
                  <p className="text-silver">The additional revenue exceeds additional cost. The firm should <strong>increase output</strong> to raise profit.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-medium">If MR {"<"} MC:</p>
                  <p className="text-silver">The additional cost exceeds additional revenue. The firm should <strong>decrease output</strong> to raise profit.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">The Average Condition: Profit or Loss?</h4>
            <p className="text-silver text-sm mb-4">
              Once MC = MR determines the profit-maximizing quantity, compare AR and AC at that output to determine the profit situation:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <h5 className="text-emerald-400 font-medium mb-2">Supernormal Profit</h5>
                <p className="text-lg font-mono text-silver-bright mb-2">AR {">"} AC</p>
                <p className="text-silver text-xs">
                  The firm earns more than normal profit on each unit. Total supernormal profit = (AR - AC) × Q. 
                  This attracts new entrants in competitive markets.
                </p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <h5 className="text-amber-400 font-medium mb-2">Normal Profit</h5>
                <p className="text-lg font-mono text-silver-bright mb-2">AR = AC</p>
                <p className="text-silver text-xs">
                  Economic profit is zero. The firm covers all costs including opportunity costs. 
                  This is the break-even point—no incentive to enter or exit.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-red-400 font-medium mb-2">Subnormal Profit (Loss)</h5>
                <p className="text-lg font-mono text-silver-bright mb-2">AR {"<"} AC</p>
                <p className="text-silver text-xs">
                  The firm makes a loss on each unit. In the long run, it will exit unless conditions improve. 
                  Short-run decisions depend on covering variable costs.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Shutdown Decision</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-cyan font-medium mb-2">Short-Run Shutdown Point</h5>
                <p className="text-silver text-sm mb-3">
                  A firm should <strong>shut down immediately</strong> if:
                </p>
                <p className="text-lg font-mono text-neon-cyan mb-2">P {"<"} AVC (minimum)</p>
                <p className="text-xs text-muted-foreground">
                  If price falls below minimum AVC, the firm cannot even cover its variable costs. 
                  It loses less money by shutting down and only paying fixed costs.
                </p>
              </div>
              <div className="bg-card/50 border border-silver/20 rounded-lg p-4">
                <h5 className="text-neon-magenta font-medium mb-2">Long-Run Exit Point</h5>
                <p className="text-silver text-sm mb-3">
                  A firm should <strong>exit the industry</strong> if:
                </p>
                <p className="text-lg font-mono text-neon-magenta mb-2">P {"<"} ATC (minimum)</p>
                <p className="text-xs text-muted-foreground">
                  If price is persistently below minimum ATC, the firm cannot cover all its costs 
                  in the long run and should exit when fixed costs can be avoided.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-silver-bright font-semibold mb-4">Accounting vs. Economic Profit</h4>
            <div className="bg-card/50 border border-silver/20 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-silver-bright font-medium mb-2">Accounting Profit</h5>
                  <p className="font-mono text-sm text-silver mb-2">= Total Revenue − Explicit Costs</p>
                  <p className="text-xs text-muted-foreground">
                    Only considers actual monetary payments (wages, rent, materials).
                  </p>
                </div>
                <div>
                  <h5 className="text-silver-bright font-medium mb-2">Economic Profit</h5>
                  <p className="font-mono text-sm text-silver mb-2">= Total Revenue − (Explicit + Implicit Costs)</p>
                  <p className="text-xs text-muted-foreground">
                    Includes opportunity costs (foregone income, return on capital invested).
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-silver-bright font-medium mb-3">Numerical Example:</h5>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-card/50">
                      <th className="border border-silver/20 px-3 py-2 text-left text-silver-bright">Profit Type</th>
                      <th className="border border-silver/20 px-3 py-2 text-right text-silver-bright">TR</th>
                      <th className="border border-silver/20 px-3 py-2 text-right text-silver-bright">Explicit</th>
                      <th className="border border-silver/20 px-3 py-2 text-right text-silver-bright">Implicit</th>
                      <th className="border border-silver/20 px-3 py-2 text-right text-silver-bright">Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-silver/20 px-3 py-2 text-emerald-400">Supernormal</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$100,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$50,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$10,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-emerald-400">$40,000</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/20 px-3 py-2 text-amber-400">Normal (Break-even)</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$100,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$50,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$50,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-amber-400">$0</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/20 px-3 py-2 text-red-400">Loss</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$100,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$50,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-silver">$60,000</td>
                      <td className="border border-silver/20 px-3 py-2 text-right text-red-400">-$10,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-3">
                  Note: A firm earning zero economic profit is still covering all opportunity costs, so it has no 
                  incentive to exit. This is why "normal profit" represents the equilibrium condition in competitive markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AnalysisBlock title="Profit Maximization Analysis" type="analysis">
          <p>The profit maximization rule (MC = MR) applies universally to all market structures. Combined with the average condition (AR vs AC), these tools allow us to determine both the optimal output level and the nature of profits. In the short run, a firm may continue operating at a loss if it can cover variable costs, buying time for market conditions to improve or to make an orderly exit.</p>
        </AnalysisBlock>
        <AnalysisBlock title="Critical Evaluation" type="evaluation">
          <p>The MC = MR rule assumes firms have perfect information about their cost and revenue curves—an unrealistic assumption for many real businesses. Alternative objectives (revenue maximization, satisficing, market share growth) may better explain actual firm behavior. Additionally, the model assumes profit maximization is the sole goal, ignoring stakeholder considerations, ethical constraints, and managerial discretion in modern corporations.</p>
        </AnalysisBlock>
      </ContentSection>

      {/* Summary */}
      <ContentSection title="Chapter Summary">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6">
          <h4 className="text-primary font-semibold mb-4">Key Takeaways</h4>
          <ul className="space-y-3 text-silver text-sm">
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan font-bold">1.</span>
              <span>The <strong>Law of Diminishing Returns</strong> (short run) explains the U-shape of MC, AVC, and ATC curves.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan font-bold">2.</span>
              <span>MC intersects AVC and ATC at their <strong>minimum points</strong>—a crucial relationship for cost analysis.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan font-bold">3.</span>
              <span>The <strong>LRAC curve</strong> (long run) reflects economies and diseconomies of scale, with MES marking optimal firm size.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan font-bold">4.</span>
              <span>For price takers, <strong>AR = MR = P</strong>; for price makers, <strong>MR {"<"} AR</strong> and MR falls twice as fast.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan font-bold">5.</span>
              <span>Profit maximization occurs where <strong>MC = MR</strong>; then compare AR and AC to determine profit/loss.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-cyan font-bold">6.</span>
              <span><strong>Shutdown point</strong> (short run): P {"<"} min AVC. <strong>Exit point</strong> (long run): P {"<"} min ATC.</span>
            </li>
          </ul>
        </div>
      </ContentSection>
    </ChapterLayout>
  );
};

export default ProductionCosts;
