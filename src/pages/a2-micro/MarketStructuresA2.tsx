import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import RealWorldExample from '@/components/RealWorldExample';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PerfectCompetitionDiagram from '@/components/diagrams/PerfectCompetitionDiagram';
import MonopolisticCompetitionDiagram from '@/components/diagrams/MonopolisticCompetitionDiagram';
import KinkedDemandDiagram from '@/components/diagrams/KinkedDemandDiagram';
import MonopolyDiagram from '@/components/diagrams/MonopolyDiagram';
import GameTheoryDiagram from '@/components/diagrams/GameTheoryDiagram';
import XEfficiencyDiagram from '@/components/diagrams/XEfficiencyDiagram';
import ContestableMarketsDiagram from '@/components/diagrams/ContestableMarketsDiagram';
import { NaturalMonopolyAnalyticalDepth, NaturalMonopolyEvaluativeJudgement, GameTheoryAnalyticalDepth, GameTheoryEvaluativeJudgement, KinkedDemandAnalyticalDepth, KinkedDemandEvaluativeJudgement } from '@/components/a2-depth/MarketStructuresDepthSections';

const MarketStructuresA2 =  => {
 return (
 <Layout>
 <div className="max-w-6xl mx-auto">
 {/* Breadcrumb */}
 <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
 <Link to="/" className="hover:text-primary transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4" />
 <Link to="/a2-micro/market-structures" className="hover:text-primary transition-colors">A2 Microeconomics</Link>
 <ChevronRight className="w-4 h-4" />
 <span className="text-foreground">Market Structures</span>
 </nav>

 {/* Header */}
 <header className="mb-12">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
 A2 Microeconomics • Chapter 3
 </span>
 </div>
 <h1 className="text-4xl md:text-5xl font-serif font-bold text-silver-bright mb-4">
 Market Structures
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl">
 A comprehensive analysis of Perfect Competition, Monopolistic Competition, Oligopoly, 
 Monopoly, Contestable Markets, and the various Objectives of Firms.
 </p>
 </header>

 {/* Key Takeaways */}
 <KeyTakeaways
 takeaways={[
 "Perfect competition achieves both allocative (P=MC) and productive (min ATC) efficiency in long-run equilibrium, serving as the efficiency benchmark.",
 "Monopolistic competition features product differentiation and free entry/exit, leading to normal profits but excess capacity (P > min ATC) in the long run.",
 "Oligopoly is characterized by interdependence; the kinked demand curve explains price rigidity, while Game Theory (Prisoner's Dilemma) explains cartel instability.",
 "Monopoly power enables supernormal profits and causes allocative inefficiency (P > MC), but may fund R&D for dynamic efficiency gains.",
 "Contestable markets theory suggests that the threat of entry (low sunk costs) can discipline monopoly behavior even without actual competition.",
 "X-inefficiency (Leibenstein) represents organizational slack in monopolies—costs exceeding the technical minimum due to lack of competitive pressure."
 ]}
 />

 {/* Topic 1: Perfect Competition */}
 <section id="perfect-competition" className="mb-16">
 <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
 <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold">1</span>
 Perfect Competition
 </h2>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Definition &amp; Features</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Perfect competition represents a theoretical market structure characterized by an idealized set of conditions 
 that ensure no single buyer or seller can influence the market price. This model serves as a benchmark against 
 which other market structures are compared. In a perfectly competitive market, numerous small firms compete 
 against each other, each producing a homogeneous (identical) product. The intense competition drives firms to 
 operate at maximum efficiency, ultimately benefiting consumers through lower prices and optimal resource allocation.
 </p>

 <h4 className="text-lg font-semibold text-silver-bright mb-3">Assumptions/Features of Perfect Competition</h4>
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
 <td className="py-3 px-4 font-medium text-primary">1. Many Buyers and Sellers</td>
 <td className="py-3 px-4">All participants are <strong className="text-silver-bright">Price Takers</strong> — no single firm or consumer can influence the market price. Each firm produces such a small fraction of total output that its decisions have no perceptible impact on market conditions.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-primary">2. No Barriers to Entry or Exit</td>
 <td className="py-3 px-4">Firms can freely enter the market when profits are attractive and exit when they face losses. This ensures that in the long run, only normal profits are earned as supernormal profits attract new entrants.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-primary">3. Homogeneous Product</td>
 <td className="py-3 px-4">All firms produce identical products that are perfect substitutes for one another. Consumers have no preference between products from different firms, making price the sole determinant of purchase decisions.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-primary">4. Perfect Knowledge</td>
 <td className="py-3 px-4">All market participants have complete information about prices, quality, and production techniques. This eliminates information asymmetry and ensures rational decision-making.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-primary">5. Perfect Resource Mobility</td>
 <td className="py-3 px-4">Factors of production can move freely between industries and firms. Labor, capital, and land can be reallocated without friction or cost.</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
 <p className="text-amber-200 text-sm">
 <strong>Key Implication:</strong> Profit maximization (MR = MC) is the primary motive for all firms in perfect competition.
 </p>
 </div>
 </div>

 {/* Demand and Revenue Curves */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Demand and Revenue Curves in Perfect Competition</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 In a perfectly competitive market, each individual firm faces a perfectly elastic (horizontal) demand curve 
 at the market-determined price. This occurs because the firm is a price taker — it can sell any quantity at 
 the prevailing market price, but nothing above it (as consumers would simply switch to competitors selling 
 identical products). The firm's demand curve is therefore identical to its Average Revenue (AR) and 
 Marginal Revenue (MR) curves.
 </p>

 <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-6">
 <p className="text-primary font-mono text-lg text-center">
 P = D = MR = AR
 </p>
 <p className="text-muted-foreground text-sm text-center mt-2">
 Price equals Demand, Marginal Revenue, and Average Revenue at all output levels
 </p>
 </div>

 <PerfectCompetitionDiagram />
 </div>

 {/* Profit Maximization Short-Run */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Profit Maximization in the Short-Run</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Short-run profit maximization analysis consists of <strong className="text-silver-bright">three critical steps</strong>: 
 First, identify the profit-maximizing output where MC = MR. Second, determine the price from the demand curve 
 at that output level. Third, compare price to average total cost to determine the profit or loss per unit, 
 then multiply by quantity to find total profit or loss.
 </p>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-green-400 mb-3">Supernormal Profits (P &gt; ATC)</h4>
 <p className="text-muted-foreground text-sm mb-3">
 When price exceeds average total cost at the profit-maximizing output, the firm earns 
 <strong className="text-green-400"> supernormal (economic) profits</strong>. The profit per unit 
 equals P - ATC, and total profit is this margin multiplied by quantity sold.
 </p>
 <div className="text-xs text-muted-foreground">
 <strong>Total Profit = (P - ATC) × Q</strong>
 </div>
 </div>

 <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-blue-400 mb-3">Normal Profits (P = ATC)</h4>
 <p className="text-muted-foreground text-sm mb-3">
 When price exactly equals average total cost, the firm earns <strong className="text-blue-400">normal profit</strong> 
 (zero economic profit). This is the break-even point where total revenue equals total cost, 
 but the firm still covers its opportunity costs.
 </p>
 <div className="text-xs text-muted-foreground">
 <strong>Break-even Price: P = minimum ATC</strong>
 </div>
 </div>

 <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-orange-400 mb-3">Loss - Continue Operating (P &gt; AVC, P &lt; ATC)</h4>
 <p className="text-muted-foreground text-sm mb-3">
 When price falls below ATC but remains above AVC, the firm makes a loss but should 
 <strong className="text-orange-400"> continue production in the short run</strong>. 
 Revenue covers all variable costs and contributes to fixed costs, minimizing total losses.
 </p>
 <div className="text-xs text-muted-foreground">
 <strong>Loss = (ATC - P) × Q, but Loss &lt; Fixed Costs</strong>
 </div>
 </div>

 <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-red-400 mb-3">Shut-Down Point (P = AVC)</h4>
 <p className="text-muted-foreground text-sm mb-3">
 When price falls to the minimum AVC, the firm reaches the <strong className="text-red-400">shut-down point</strong>. 
 At this price, revenue just covers variable costs with nothing left for fixed costs. 
 Below this price, the firm should cease production immediately.
 </p>
 <div className="text-xs text-muted-foreground">
 <strong>Shut-down: P &lt; AVC (each unit adds to losses)</strong>
 </div>
 </div>
 </div>
 </div>

 {/* Long-Run Equilibrium */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Long-Run Equilibrium</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 In the long run, the free entry and exit of firms ensures that all firms in a perfectly competitive 
 industry earn only <strong className="text-silver-bright">normal profits</strong>. This adjustment 
 mechanism works as follows:
 </p>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-3">From Supernormal to Normal Profit</h4>
 <p className="text-muted-foreground text-sm">
 When existing firms earn supernormal profits, new firms are attracted to enter the industry. 
 This increases market supply, shifting the supply curve rightward. The increased supply 
 drives down the market price until only normal profits remain. Entry continues until 
 P = minimum ATC for all firms.
 </p>
 </div>

 <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-3">From Loss to Normal Profit</h4>
 <p className="text-muted-foreground text-sm">
 When firms experience losses, some will exit the industry. This decreases market supply, 
 shifting the supply curve leftward. The reduced supply drives up the market price until 
 remaining firms earn normal profits again. Exit continues until P = minimum ATC.
 </p>
 </div>
 </div>
 </div>

 {/* Supply Curve */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">The Supply Curve in Perfect Competition</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 In perfect competition, the firm's supply curve is derived directly from its marginal cost curve. 
 Since the firm produces where P = MC (profit maximization condition), and price can vary, 
 the MC curve traces out the quantity supplied at each price level.
 </p>

 <div className="grid md:grid-cols-2 gap-4">
 <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
 <h4 className="text-blue-400 font-semibold mb-2">Short-Run Supply Curve</h4>
 <p className="text-muted-foreground text-sm">
 The portion of the MC curve that lies <strong>above the minimum AVC</strong>. 
 Below this point, the firm shuts down and supplies nothing.
 </p>
 </div>
 <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
 <h4 className="text-green-400 font-semibold mb-2">Long-Run Supply Curve</h4>
 <p className="text-muted-foreground text-sm">
 The portion of the MC curve that lies <strong>above the minimum ATC</strong>. 
 In the long run, firms must cover all costs including fixed costs.
 </p>
 </div>
 </div>
 </div>

 {/* Efficiency Analysis */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Efficiency in Perfect Competition</h3>
 
 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-primary mb-3">Allocative Efficiency</h4>
 <p className="text-muted-foreground text-sm mb-3">
 Occurs when firms produce the combination of goods and services that consumers most prefer. 
 Achieved when <strong className="text-primary">P = MC</strong>.
 </p>
 </div>
 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-secondary mb-3">Productive Efficiency</h4>
 <p className="text-muted-foreground text-sm mb-3">
 Occurs when production takes place at the lowest possible cost. 
 Achieved when output is at <strong className="text-secondary">minimum ATC</strong>.
 </p>
 </div>
 </div>

 <div className="overflow-x-auto">
 <table className="w-full border-collapse">
 <thead>
 <tr className="border-b border-silver/20">
 <th className="text-left py-3 px-4 text-silver-bright">Profit Situation</th>
 <th className="text-center py-3 px-4 text-silver-bright">Allocative Efficiency (P=MC)</th>
 <th className="text-center py-3 px-4 text-silver-bright">Productive Efficiency (min ATC)</th>
 </tr>
 </thead>
 <tbody className="text-muted-foreground">
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run: Supernormal Profits</td>
 <td className="py-3 px-4 text-center text-green-400">✓ YES</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run: Normal Profits</td>
 <td className="py-3 px-4 text-center text-green-400">✓ YES</td>
 <td className="py-3 px-4 text-center text-green-400">✓ YES</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run: Losses</td>
 <td className="py-3 px-4 text-center text-green-400">✓ YES</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-silver-bright">Long-Run Equilibrium</td>
 <td className="py-3 px-4 text-center text-green-400 font-medium">✓ YES</td>
 <td className="py-3 px-4 text-center text-green-400 font-medium">✓ YES</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
 <p className="text-green-200 text-sm">
 <strong>Conclusion:</strong> In long-run equilibrium, perfect competition achieves both allocative 
 efficiency (P = MC) and productive efficiency (production at minimum ATC), making it the benchmark 
 for economic efficiency.
 </p>
 </div>
 </div>

 {/* Logic Chain */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-cyan-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-cyan-400"></span> Chain of Analysis: Perfect Competition Long-Run Adjustment
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-0">
 <p className="mb-0">
 <strong className="text-cyan-400">Constraint:</strong> Supernormal profits exist in the short-run (P &gt; ATC) →
 <strong className="text-cyan-400"> Action:</strong> New firms attracted by profit potential enter the industry due to absence of barriers →
 <strong className="text-cyan-400"> Transmission:</strong> Market supply curve shifts rightward (S₁ → S₂), increasing total industry output →
 <strong className="text-cyan-400"> Price Mechanism:</strong> Increased supply at existing demand drives equilibrium price downward (P₁ → P₂) →
 <strong className="text-cyan-400"> Final Equilibrium:</strong> Entry continues until P = minimum ATC, eliminating supernormal profits; all firms earn only normal profit, achieving both allocative efficiency (P = MC) and productive efficiency (production at minimum ATC). The reverse transmission operates when losses occur: exit reduces supply, raising price until normal profit is restored.
 </p>
 </div>
 </div>
 </div>

 {/* Evaluation Block */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Senior Examiner's Evaluation: Perfect Competition
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
 <p className="mb-0">
 The theoretical efficiency of perfect competition must be weighed against its <strong className="text-amber-400">practical limitations</strong> and the trade-offs inherent in market structures. While the model demonstrates that free entry and exit, combined with price-taking behavior, drives markets toward an equilibrium where P = MC = minimum ATC, the <strong className="text-silver-bright">dynamic efficiency argument</strong> presents a significant counterpoint. Normal profits provide no surplus for research and development expenditure, potentially stifling innovation and technological progress. Industries characterized by rapid technological change—pharmaceuticals, semiconductors, aerospace—may require the supernormal profits generated by imperfect competition to fund the capital-intensive R&amp;D necessary for long-term productivity growth and dynamic efficiency gains.
 </p>
 <p className="mb-0">
 The <strong className="text-amber-400">"depends on"</strong> analysis reveals several critical factors determining the desirability of perfect competition: First, the <strong>nature of the product</strong>—homogeneous commodities (agricultural products, raw materials) may approach perfect competition, whereas differentiated goods requiring branding and innovation benefit from monopolistic structures. Second, the <strong>time horizon</strong>—short-run static efficiency (P = MC) may conflict with long-run dynamic efficiency requiring investment in human capital and process innovation. Third, <strong>market size and economies of scale</strong>—industries with significant increasing returns to scale may be more efficiently served by larger, fewer firms despite the associated market power. Fourth, <strong>information asymmetries</strong>—perfect knowledge assumptions rarely hold, creating scope for moral hazard and adverse selection that the model fails to capture.
 </p>
 <p className="mb-0">
 A balanced evaluation must acknowledge that perfect competition serves as an <strong className="text-silver-bright">analytical benchmark</strong> rather than a policy prescription. Its value lies in identifying deviations from efficiency in real-world markets, enabling economists to quantify deadweight losses, assess the welfare costs of market power, and design regulatory interventions. However, policymakers must recognize that forcing markets toward perfect competition through aggressive antitrust action may destroy the incentives for innovation and risk-taking that drive long-run economic growth—the trade-off between static allocative efficiency and dynamic Schumpeterian efficiency remains unresolved in economic theory.
 </p>
 </div>
 </div>
 </div>

 {/* Advantages and Disadvantages */}
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <NoteCard 
 title="Advantages of Perfect Competition" 
 type="concept"
 className="h-full"
 >
 <ul className="space-y-2 text-sm">
 <li><strong>Consumer benefit:</strong> Produces what consumers mostly want at the lowest possible price</li>
 <li><strong>Efficiency:</strong> Long-run equilibrium achieves both allocative and productive efficiency</li>
 <li><strong>Competition drives out inefficiency:</strong> Inefficient firms using outdated technology or poor management are forced to exit</li>
 <li><strong>Market responsiveness:</strong> Quickly adjusts to changes in consumer tastes and preferences</li>
 <li><strong>Adapts to technology:</strong> Changes in technology or resource prices lead to new equilibria that accommodate these changes</li>
 </ul>
 </NoteCard>

 <NoteCard 
 title="Disadvantages of Perfect Competition" 
 type="exam-tip"
 className="h-full"
 >
 <ul className="space-y-2 text-sm">
 <li><strong>Resource waste:</strong> Continuous entry and exit may lead to waste of resources during long-run adjustment</li>
 <li><strong>Market failure:</strong> Even if all assumptions were met, real-world factors still lead to market failure</li>
 <li><strong>No product variety:</strong> Homogeneous products mean no choice or differentiation for consumers</li>
 <li><strong>Limited R&amp;D:</strong> Normal profits don't fund research and development</li>
 <li><strong>Unrealistic assumptions:</strong> Perfect knowledge and mobility rarely exist in reality</li>
 </ul>
 </NoteCard>
 </div>
 </section>

 {/* Topic 2: Monopolistic Competition */}
 <section id="monopolistic-competition" className="mb-16">
 <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
 <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold">2</span>
 Monopolistic Competition
 </h2>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Definition &amp; Features</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Monopolistic competition is a market structure that combines elements of both perfect competition and monopoly. 
 Like perfect competition, it features many firms and free entry/exit. However, like monopoly, each firm has 
 some degree of market power because it produces a differentiated product. This differentiation gives each 
 firm a downward-sloping demand curve, allowing it to be a price maker within limits. Firms compete through 
 both price and non-price methods such as advertising, branding, and product innovation.
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
 <td className="py-3 px-4 font-medium text-purple-400">1. Large Number of Firms</td>
 <td className="py-3 px-4">Many firms compete, but each has a small market share. No single firm dominates the market.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-purple-400">2. No Barriers to Entry/Exit</td>
 <td className="py-3 px-4">Firms can freely enter when profits are high and exit when facing losses, ensuring long-run normal profits.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-purple-400">3. Product Differentiation</td>
 <td className="py-3 px-4">Products are similar but not identical — differentiated by quality, features, brand image, location, etc.</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-purple-400">4. Price Makers</td>
 <td className="py-3 px-4">Due to product differentiation, firms have some control over their price (downward-sloping demand curve).</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-purple-400">5. Profit Maximization</td>
 <td className="py-3 px-4">Each firm seeks to maximize profits where MR = MC.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Demand and Revenue Curves</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Unlike perfect competition, firms in monopolistic competition face a <strong className="text-silver-bright">downward-sloping demand curve</strong>. 
 This is because each firm's product is somewhat unique — raising the price will lose some but not all customers. 
 The demand curve is relatively elastic because of the availability of close substitutes from competitors. 
 The MR curve lies below the demand (AR) curve, as price must be reduced on all units to sell additional output.
 </p>

 <MonopolisticCompetitionDiagram />
 </div>

 {/* Efficiency in Monopolistic Competition */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Efficiency Analysis</h3>
 
 <div className="overflow-x-auto mb-6">
 <table className="w-full border-collapse">
 <thead>
 <tr className="border-b border-silver/20">
 <th className="text-left py-3 px-4 text-silver-bright">Profit Situation</th>
 <th className="text-center py-3 px-4 text-silver-bright">Allocative Efficiency</th>
 <th className="text-center py-3 px-4 text-silver-bright">Productive Efficiency</th>
 </tr>
 </thead>
 <tbody className="text-muted-foreground">
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run: Supernormal Profits</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO (P &gt; MC)</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run: Normal Profits</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run: Losses</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-silver-bright">Long-Run Equilibrium</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
 <p className="text-red-200 text-sm">
 <strong>Key Insight:</strong> Monopolistic competition is <strong>never efficient</strong> in either the short run or long run. 
 P &gt; MC means allocative inefficiency, and production above minimum ATC means productive inefficiency 
 (excess capacity).
 </p>
 </div>
 </div>

 {/* PC vs MC Comparison */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Perfect Competition vs. Monopolistic Competition</h3>
 
 <div className="grid md:grid-cols-3 gap-4">
 <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
 <h4 className="text-orange-400 font-semibold mb-2">1. P &gt; MC</h4>
 <p className="text-muted-foreground text-sm">
 In monopolistic competition, price exceeds marginal cost, indicating allocative inefficiency and deadweight loss.
 </p>
 </div>
 <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
 <h4 className="text-orange-400 font-semibold mb-2">2. Excess Capacity</h4>
 <p className="text-muted-foreground text-sm">
 Firms don't produce at minimum ATC — they have unused capacity. This is the "markup" charged for product differentiation.
 </p>
 </div>
 <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
 <h4 className="text-orange-400 font-semibold mb-2">3. Higher Prices</h4>
 <p className="text-muted-foreground text-sm">
 P<sub>MC</sub> &gt; P<sub>PC</sub>: Prices in monopolistic competition exceed those in perfect competition, harming consumers.
 </p>
 </div>
 </div>
 </div>

 {/* Logic Chain */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-purple-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-purple-400"></span> Chain of Analysis: Monopolistic Competition Long-Run Adjustment
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed">
 <p className="mb-0">
 <strong className="text-purple-400">Constraint:</strong> Short-run supernormal profits exist (P &gt; ATC) due to product differentiation →
 <strong className="text-purple-400"> Action:</strong> Low barriers to entry attract new firms offering similar differentiated products →
 <strong className="text-purple-400"> Transmission:</strong> Market becomes more crowded; each firm's demand curve shifts leftward as customers are distributed across more sellers →
 <strong className="text-purple-400"> Price-Quantity Effect:</strong> Individual firm demand (AR) continues shifting until it becomes tangent to ATC →
 <strong className="text-purple-400"> Final Equilibrium:</strong> Long-run equilibrium at P = ATC (normal profit), but P &gt; MC (allocative inefficiency) and production occurs above minimum ATC (productive inefficiency with excess capacity). The downward-sloping demand curve geometrically ensures the tangent point cannot occur at minimum ATC.
 </p>
 </div>
 </div>
 </div>

 {/* Evaluation Block */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Senior Examiner's Evaluation: Monopolistic Competition
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
 <p className="mb-0">
 The conventional criticism that monopolistic competition is "doubly inefficient" (failing both allocative and productive efficiency tests) must be balanced against the <strong className="text-amber-400">consumer welfare gains from product variety</strong>. The excess capacity "cost" represents the price society pays for differentiation—consumers may rationally prefer a market offering 50 varieties of smartphone at slightly higher prices over a single homogeneous product at minimum cost. This introduces the concept of <strong className="text-silver-bright">utility diversity</strong>: total consumer welfare encompasses not merely price and quantity, but the match between product attributes and heterogeneous consumer preferences.
 </p>
 <p className="mb-0">
 The <strong className="text-amber-400">"depends on"</strong> framework reveals critical contingencies: First, the <strong>magnitude of differentiation costs</strong>—if advertising and branding expenditures are excessive relative to genuine quality improvements, resources are wasted on rent-seeking rather than value creation. Second, the <strong>elasticity of substitution between varieties</strong>—if consumers view differentiated products as near-perfect substitutes, the deadweight loss approaches that of monopoly; if preferences are genuinely heterogeneous, welfare losses are substantially smaller. Third, <strong>information availability</strong>—sophisticated consumers who can evaluate quality independently benefit from variety, while uninformed consumers may be exploited through misleading differentiation (brand-based rather than quality-based distinctions).
 </p>
 <p className="mb-0">
 A balanced evaluation recognizes that monopolistic competition may represent an <strong className="text-silver-bright">optimal trade-off</strong> in consumer goods markets where preferences are diverse and innovation in product design generates dynamic benefits. The restaurant industry, retail clothing, and personal services exemplify sectors where variety arguably generates welfare gains exceeding the static efficiency losses. However, in markets where differentiation is primarily cosmetic—pharmaceuticals with branded vs. generic drugs offering identical molecules—the inefficiency critique carries greater force, and regulatory intervention to promote generic competition may be welfare-enhancing.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Topic 3: Oligopoly */}
 <section id="oligopoly" className="mb-16">
 <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
 <span className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-lg font-bold">3</span>
 Oligopoly
 </h2>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Definition &amp; Features</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 An oligopoly is a market structure dominated by a small number of large firms. Since there are only a few firms, 
 the actions of one firm can have a significant effect on the behavior of others. This creates a situation of 
 <strong className="text-silver-bright"> strategic interdependence</strong> — each firm's price and output decisions 
 depend on what it thinks its rivals are going to do. Examples include the oil industry, pharmaceuticals, 
 automobiles, and telecommunications.
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
 <td className="py-3 px-4 font-medium text-amber-400">1. High Barriers to Entry</td>
 <td className="py-3 px-4">Significant obstacles prevent new firms from entering (economies of scale, capital requirements, patents, etc.)</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-amber-400">2. Differentiated or Homogeneous Products</td>
 <td className="py-3 px-4">Products may be identical (oil, steel) or differentiated (cars, electronics)</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-amber-400">3. Interdependence</td>
 <td className="py-3 px-4">Firms must consider rivals' reactions when making decisions — the defining feature of oligopoly</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-amber-400">4. Price Rigidity</td>
 <td className="py-3 px-4">Prices tend to be stable despite cost changes, explained by the kinked demand curve model</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-amber-400">5. Profit Maximization (Optional)</td>
 <td className="py-3 px-4">Firms may pursue objectives other than profit maximization (sales growth, market share, etc.)</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>

 {/* Kinked Demand Curve */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">The Kinked Demand Curve Model (Non-Collusive)</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 The kinked demand curve model explains price rigidity in oligopolies without collusion. It is based on 
 <strong className="text-silver-bright"> three key assumptions</strong> about how rivals react to price changes:
 </p>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-amber-400 mb-3">Above the Kink (Elastic)</h4>
 <p className="text-muted-foreground text-sm">
 If a firm raises its price, rivals <strong>will not follow</strong>. The price-raising firm loses customers 
 to competitors, making demand highly elastic above the current price. Revenue falls significantly.
 </p>
 </div>
 <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
 <h4 className="text-lg font-semibold text-amber-400 mb-3">Below the Kink (Inelastic)</h4>
 <p className="text-muted-foreground text-sm">
 If a firm lowers its price, rivals <strong>will follow</strong> to protect their market share. 
 The price cut gains few additional customers, making demand inelastic below the current price.
 </p>
 </div>
 </div>

 <KinkedDemandDiagram />

 <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
 <h4 className="text-amber-400 font-semibold mb-2">The Broken MR Curve</h4>
 <p className="text-muted-foreground text-sm">
 The kink in the demand curve creates a <strong>discontinuity (gap)</strong> in the marginal revenue curve. 
 This means that even if marginal costs change within this gap, the profit-maximizing price and output 
 remain unchanged — explaining price rigidity in oligopolistic markets.
 </p>
 </div>
 </div>

 <KinkedDemandAnalyticalDepth />
 <KinkedDemandEvaluativeJudgement />

 {/* Collusion */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Collusive Oligopoly</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Firms in an oligopoly may choose to collude — cooperating to fix prices, limit output, or divide markets. 
 Collusion can be formal (cartels like OPEC) or informal (tacit understanding, price leadership).
 </p>

 <div className="grid md:grid-cols-2 gap-6">
 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-primary mb-3">Formal Collusion (Cartels)</h4>
 <p className="text-muted-foreground text-sm mb-3">
 Firms explicitly agree to coordinate prices and output. Members act as a collective monopoly, 
 restricting output to raise prices and maximize joint profits. Each firm is assigned a quota.
 </p>
 <p className="text-xs text-muted-foreground">Example: OPEC controls oil production quotas</p>
 </div>
 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-secondary mb-3">Price Leadership</h4>
 <p className="text-muted-foreground text-sm mb-3">
 The firm with the lowest costs becomes the price leader. Other firms follow its price to avoid 
 price wars they cannot win. This achieves coordination without explicit agreement.
 </p>
 <p className="text-xs text-muted-foreground">The leader sets P at MC=MR; followers must accept it</p>
 </div>
 </div>
 </div>

 {/* Game Theory */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Game Theory &amp; The Prisoner's Dilemma</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Game theory helps explain strategic decision-making in oligopolies. The <strong className="text-silver-bright">Nash Equilibrium</strong> 
 occurs when each firm's choice is optimal given what the other firms are doing — no firm can improve 
 its position by changing its strategy alone.
 </p>

 <div className="overflow-x-auto mb-6">
 <table className="w-full border-collapse text-center">
 <thead>
 <tr className="border-b border-silver/20">
 <th className="py-3 px-4"></th>
 <th className="py-3 px-4 text-silver-bright">Firm B: Honors Agreement</th>
 <th className="py-3 px-4 text-silver-bright">Firm B: Cheats</th>
 </tr>
 </thead>
 <tbody className="text-muted-foreground">
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 text-silver-bright font-medium">Firm A: Honors</td>
 <td className="py-3 px-4 bg-green-500/10">A: $150, B: $150</td>
 <td className="py-3 px-4 bg-red-500/10">A: $50, B: $200</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 text-silver-bright font-medium">Firm A: Cheats</td>
 <td className="py-3 px-4 bg-red-500/10">A: $200, B: $50</td>
 <td className="py-3 px-4 bg-amber-500/10 border-2 border-amber-400">A: $100, B: $100 ★</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
 <p className="text-amber-200 text-sm">
 <strong>★ Nash Equilibrium:</strong> Both firms cheating (earning $100 each) is the Nash Equilibrium. 
 Even though both honoring ($150 each) is better overall, neither firm can trust the other not to cheat 
 and gain $200. This explains why cartels are unstable — there's always an incentive to cheat.
 </p>
 </div>
 </div>

 {/* Advanced Game Theory Diagram */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <GameTheoryDiagram />
 </div>

 {/* Examiner Trap */}
 <ExaminerTrap
 trap="Students often confuse Nash Equilibrium with the best outcome. They state 'both firms should collude because it gives higher profits' without recognizing the incentive to deviate."
 correction="Nash Equilibrium is where no firm can improve by unilaterally changing strategy. It may not be the best joint outcome. Explain the dominant strategy reasoning: regardless of rival's choice, cheating always pays more."
 className="mb-8"
 />

 <GameTheoryAnalyticalDepth />
 <GameTheoryEvaluativeJudgement />

 {/* Real World Example */}
 <RealWorldExample
 title="OPEC Cartel Instability (2020)"
 description="The Saudi Arabia-Russia price war in March 2020 demonstrated cartel instability. When Russia refused to cut production, Saudi Arabia dramatically increased output, crashing oil prices from $60 to $20/barrel."
 impact="Classic prisoner's dilemma: each country's dominant strategy was to maximize individual market share rather than honor the collective output restriction, leading to mutual losses before eventual cooperation."
 type="negative"
 source="Financial Times, 2020"
 className="mb-8"
 />

 {/* Non-Price Competition */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Non-Price Competition</h3>
 <p className="text-muted-foreground mb-4">
 Since price competition can lead to destructive price wars, oligopolists often compete through non-price methods:
 </p>

 <div className="grid md:grid-cols-4 gap-4">
 <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
 <h4 className="text-primary font-semibold mb-2">Product Differentiation</h4>
 <p className="text-muted-foreground text-xs">Unique features, design, quality improvements</p>
 </div>
 <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
 <h4 className="text-primary font-semibold mb-2">Advertising &amp; Branding</h4>
 <p className="text-muted-foreground text-xs">Building brand loyalty and recognition</p>
 </div>
 <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
 <h4 className="text-primary font-semibold mb-2">R&amp;D Investment</h4>
 <p className="text-muted-foreground text-xs">Innovation to gain competitive advantage</p>
 </div>
 <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
 <h4 className="text-primary font-semibold mb-2">Distribution Networks</h4>
 <p className="text-muted-foreground text-xs">Better access, convenience, service</p>
 </div>
 </div>
 </div>

 {/* Logic Chain */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Chain of Analysis: Kinked Demand Curve Price Rigidity
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed">
 <p className="mb-0">
 <strong className="text-amber-400">Constraint:</strong> Oligopolist faces strategic interdependence—rivals' reactions are uncertain →
 <strong className="text-amber-400"> Asymmetric Response Assumption:</strong> If firm raises price, rivals do NOT follow (customers lost to competitors, demand elastic above kink); if firm cuts price, rivals DO follow (price war protection, demand inelastic below kink) →
 <strong className="text-amber-400"> Geometric Implication:</strong> Kinked demand curve creates discontinuity (vertical gap) in MR curve at current output level →
 <strong className="text-amber-400"> Transmission:</strong> MC curve can shift anywhere within the MR gap without changing profit-maximizing output (MC still intersects MR at same Q) →
 <strong className="text-amber-400"> Final Equilibrium:</strong> Price remains rigid at kink point (P*) despite cost fluctuations, explaining observed price stability in oligopolistic markets (e.g., petrol, airlines).
 </p>
 </div>
 </div>
 </div>

 {/* Evaluation Block */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Senior Examiner's Evaluation: Oligopoly Models
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
 <p className="mb-0">
 The kinked demand curve model, while intuitively appealing, faces <strong className="text-amber-400">significant theoretical limitations</strong>. The model explains price rigidity but fails to explain how the initial equilibrium price (P*) was established—it assumes the kink exists at the prevailing price without providing a mechanism for price determination. Empirical evidence is mixed: while some industries exhibit stable prices during cost fluctuations, others show coordinated price changes (suggesting tacit collusion rather than kinked demand behavior). The model's assumption of asymmetric response—rivals follow price cuts but not increases—may not hold universally, particularly in markets with differentiated products or varying cost structures.
 </p>
 <p className="mb-0">
 The <strong className="text-amber-400">"depends on"</strong> evaluation of oligopoly outcomes reveals critical contingencies: First, <strong>the stability of collusion</strong>—game theory's prisoner's dilemma demonstrates that cartels are inherently unstable as each member has incentive to cheat; stability increases with fewer firms, more homogeneous products, transparent pricing, and repeated interactions enabling punishment strategies. Second, <strong>barriers to entry</strong>—high barriers allow supernormal profits to persist and reduce the disciplinary effect of potential competition emphasized by contestability theory. Third, <strong>the regulatory environment</strong>—competition authorities can transform outcomes through merger control, price-fixing prosecution, and behavioral remedies. Fourth, <strong>demand conditions</strong>—during recessions, the temptation to cheat on collusive agreements intensifies as firms fight for shrinking market share.
 </p>
 <p className="mb-0">
 A balanced evaluation must acknowledge that oligopoly can generate both <strong className="text-silver-bright">welfare-reducing</strong> (deadweight loss from restricted output, rent-seeking expenditure on strategic barriers) and <strong className="text-silver-bright">welfare-enhancing</strong> outcomes (economies of scale, R&amp;D investment from supernormal profits, dynamic efficiency). The net welfare effect depends on whether the industry's supernormal profits are invested in innovation and cost reduction or merely transferred to shareholders as economic rent. Industries like pharmaceuticals and aerospace may require oligopolistic structures to fund the massive R&amp;D investments generating future welfare gains, while oligopolies in mature industries may simply extract consumer surplus without corresponding innovation benefits.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Topic 4: Monopoly */}
 <section id="monopoly" className="mb-16">
 <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
 <span className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">4</span>
 Monopoly
 </h2>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Definition &amp; Features</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 A monopoly is a market structure with a single seller or dominant firm that controls the entire supply 
 of a good or service with no close substitutes. The monopolist is a <strong className="text-silver-bright">price maker</strong> 
 with significant market power, able to set prices above marginal cost and earn supernormal profits even 
 in the long run due to high barriers to entry.
 </p>

 <div className="overflow-x-auto mb-6">
 <table className="w-full border-collapse">
 <thead>
 <tr className="border-b border-silver/20">
 <th className="text-left py-3 px-4 text-silver-bright">Feature</th>
 <th className="text-left py-3 px-4 text-silver-bright">Description</th>
 </tr>
 </thead>
 <tbody className="text-muted-foreground">
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-red-400">Single Seller</td>
 <td className="py-3 px-4">One firm dominates the entire market for a product</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-red-400">No Close Substitutes</td>
 <td className="py-3 px-4">Consumers cannot easily switch to alternative products</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-red-400">High Barriers to Entry</td>
 <td className="py-3 px-4">Prevents competition from emerging (see barriers below)</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4 font-medium text-red-400">Price Maker</td>
 <td className="py-3 px-4">The monopolist sets the market price based on the demand curve</td>
 </tr>
 </tbody>
 </table>
 </div>

 <h4 className="text-lg font-semibold text-silver-bright mb-4">Sources of Monopoly Power / Barriers to Entry</h4>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">1. High Start-up Costs</h5>
 <p className="text-muted-foreground text-sm">Enormous capital requirements prevent new firms from entering</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">2. Control Over Supply</h5>
 <p className="text-muted-foreground text-sm">Distribution contracts, exclusive agreements, ownership of resources</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">3. Legal Barriers</h5>
 <p className="text-muted-foreground text-sm">Patents, copyrights, licenses, public franchises</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">4. Economies of Scale</h5>
 <p className="text-muted-foreground text-sm">Large firms produce at lower unit costs; can use predatory pricing against entrants</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">5. Brand Loyalty</h5>
 <p className="text-muted-foreground text-sm">Strong brand identification prevents customers from switching (Coca-Cola, Nike)</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">6. Legal Protection</h5>
 <p className="text-muted-foreground text-sm">Government grants monopoly status to utilities, postal services, etc.</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">7. Mergers &amp; Takeovers</h5>
 <p className="text-muted-foreground text-sm">Firms acquire competitors to gain market control</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h5 className="text-red-400 font-medium mb-2">8. Location</h5>
 <p className="text-muted-foreground text-sm">Geographic monopoly in remote areas (village shop, local post office)</p>
 </div>
 </div>
 </div>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Profit Maximization</h3>
 <p className="text-muted-foreground mb-6">
 Like all profit-maximizing firms, a monopolist produces where MR = MC. However, because the monopolist 
 faces the entire market demand curve (downward sloping), it can charge a price above marginal cost.
 </p>

 <MonopolyDiagram title="Monopoly Profit Maximization" />
 </div>

 {/* Natural Monopoly */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Natural Monopoly</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 A <strong className="text-silver-bright">natural monopoly</strong> exists when a single firm can supply the 
 entire market at a lower cost than two or more firms could. This occurs when there are extremely high fixed 
 costs and significant economies of scale, causing the LRAC curve to slope downward over the entire range of 
 market demand. Examples include utilities (water, electricity, gas) and rail networks.
 </p>

 <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
 <p className="text-blue-200 text-sm">
 <strong>Key Characteristic:</strong> The minimum efficient scale (MES) is larger than the market size, 
 meaning only one firm can achieve economies of scale. Having multiple firms would mean each produces 
 at higher average costs, wasting resources through duplication.
 </p>
 </div>
 </div>

 <NaturalMonopolyAnalyticalDepth />
 <NaturalMonopolyEvaluativeJudgement />

 {/* Price Discrimination */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Price Discrimination</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Price discrimination occurs when a firm charges different prices to different customers for the same 
 product, where the price difference is not based on cost differences. This requires:
 </p>

 <div className="grid md:grid-cols-4 gap-4 mb-6">
 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
 <p className="text-red-400 font-medium">Monopoly Power</p>
 </div>
 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
 <p className="text-red-400 font-medium">Separate Markets</p>
 </div>
 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
 <p className="text-red-400 font-medium">Prevent Re-Selling</p>
 </div>
 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
 <p className="text-red-400 font-medium">Different PEDs</p>
 </div>
 </div>

 <div className="space-y-4">
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-semibold mb-2">First-Degree (Perfect) Price Discrimination</h4>
 <p className="text-muted-foreground text-sm">
 The monopolist charges each consumer the maximum they are willing to pay, extracting all consumer surplus. 
 Example: Selling 4 units at $25, $20, $15, $10 yields $70 instead of $40 at a uniform $10 price.
 </p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-semibold mb-2">Second-Degree Price Discrimination</h4>
 <p className="text-muted-foreground text-sm">
 Different prices for different quantities or versions of the product. Consumers self-select into 
 price categories. Examples: Bulk discounts, premium vs. basic versions, peak pricing.
 </p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-semibold mb-2">Third-Degree Price Discrimination</h4>
 <p className="text-muted-foreground text-sm">
 Different prices for different market segments with different elasticities. Higher prices in inelastic 
 markets, lower prices in elastic markets. Examples: Student discounts, senior rates, foreign vs. domestic pricing.
 </p>
 </div>
 </div>
 </div>

 {/* Efficiency and Monopoly */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Efficiency in Monopoly</h3>
 
 <div className="overflow-x-auto mb-6">
 <table className="w-full border-collapse">
 <thead>
 <tr className="border-b border-silver/20">
 <th className="text-left py-3 px-4 text-silver-bright">Situation</th>
 <th className="text-center py-3 px-4 text-silver-bright">Allocative (P=MC)</th>
 <th className="text-center py-3 px-4 text-silver-bright">Productive (min ATC)</th>
 </tr>
 </thead>
 <tbody className="text-muted-foreground">
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Short-Run</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 <tr className="border-b border-silver/10">
 <td className="py-3 px-4">Long-Run</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 <td className="py-3 px-4 text-center text-red-400">✗ NO</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-6">
 <p className="text-red-200 text-sm">
 <strong>Conclusion:</strong> Monopoly is <strong>never efficient</strong>. P &gt; MC indicates allocative 
 inefficiency (underproduction). The monopolist produces less and charges more than under perfect competition, 
 creating a deadweight loss.
 </p>
 </div>
 </div>

 {/* Advantages and Disadvantages */}
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <NoteCard title="Advantages of Monopoly" type="concept" className="h-full">
 <ul className="space-y-2 text-sm">
 <li><strong>Stable profits:</strong> Guaranteed profits allow planning and investment</li>
 <li><strong>R&amp;D investment:</strong> Supernormal profits fund research and innovation</li>
 <li><strong>Economies of scale:</strong> Large scale can mean lower unit costs passed to consumers</li>
 <li><strong>Natural monopoly:</strong> In some industries, one firm is more efficient than many</li>
 <li><strong>International competitiveness:</strong> Large firms can compete globally</li>
 </ul>
 </NoteCard>

 <NoteCard title="Disadvantages of Monopoly" type="exam-tip" className="h-full">
 <ul className="space-y-2 text-sm">
 <li><strong>Not efficient:</strong> Neither allocative nor productive efficiency achieved</li>
 <li><strong>Higher prices, lower output:</strong> Consumers harmed compared to competition</li>
 <li><strong>X-inefficiency:</strong> Lack of competition may lead to higher costs</li>
 <li><strong>No consumer sovereignty:</strong> Consumers must accept what the monopolist offers</li>
 <li><strong>Deadweight loss:</strong> Resources misallocated, welfare reduced</li>
 </ul>
 </NoteCard>
 </div>

 {/* Logic Chain */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-red-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-red-400"></span> Chain of Analysis: Monopoly Profit Maximization &amp; Welfare Loss
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed">
 <p className="mb-0">
 <strong className="text-red-400">Constraint:</strong> Single seller faces entire market demand curve (downward-sloping D = AR) with MR below AR →
 <strong className="text-red-400"> Profit Maximization:</strong> Monopolist produces where MC = MR, determining output Q<sub>m</sub> →
 <strong className="text-red-400"> Price Determination:</strong> Price P<sub>m</sub> read from demand curve at Q<sub>m</sub>, where P<sub>m</sub> &gt; MC →
 <strong className="text-red-400"> Welfare Transmission:</strong> Comparison with competitive outcome (P = MC at Q<sub>c</sub>) reveals: (a) Output restriction: Q<sub>m</sub> &lt; Q<sub>c</sub>; (b) Price elevation: P<sub>m</sub> &gt; P<sub>c</sub>; (c) Consumer surplus transferred to producer surplus; (d) Deadweight loss triangle (Harberger triangle) between Q<sub>m</sub> and Q<sub>c</sub> →
 <strong className="text-red-400"> Final Equilibrium:</strong> Supernormal profit persists in long-run due to barriers; society suffers allocative inefficiency (P &gt; MC) and potential X-inefficiency from lack of competitive pressure.
 </p>
 </div>
 </div>
 </div>

 {/* Evaluation Block */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Senior Examiner's Evaluation: Monopoly
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
 <p className="mb-0">
 The traditional welfare critique of monopoly—based on the Harberger triangle measuring deadweight loss—may <strong className="text-amber-400">underestimate the dynamic costs</strong> of market power while simultaneously overlooking potential dynamic benefits. The static analysis focuses narrowly on the allocative inefficiency arising from output restriction (Q<sub>m</sub> &lt; Q<sub>c</sub>), but fails to capture: (a) <strong className="text-silver-bright">X-inefficiency</strong>—the tendency for monopolists protected from competition to allow costs to rise above minimum levels due to organizational slack; (b) <strong className="text-silver-bright">Rent-seeking</strong>—resources expended to create or maintain monopoly power (lobbying, strategic barriers, predatory pricing) that could otherwise be productively employed; and (c) <strong className="text-silver-bright">Innovation deterrence</strong>—monopolists may suppress innovations that cannibalize existing product lines (the "creative destruction" Schumpeter argued was essential for long-run growth).
 </p>
 <p className="mb-0">
 The <strong className="text-amber-400">"depends on"</strong> analysis reveals that monopoly's net welfare effect is highly contingent: First, <strong>the source of monopoly power</strong>—a monopoly arising from genuine innovation (pharmaceutical patents, software platforms) may generate dynamic efficiency gains exceeding static losses, while monopolies based on artificial barriers (exclusive licenses, predatory practices) represent pure welfare transfers. Second, <strong>the contestability of the market</strong>—even a single-firm market may exhibit competitive behavior if entry is costless and exit carries no sunk costs. Third, <strong>regulatory effectiveness</strong>—natural monopolies (utilities, rail networks) may be socially efficient if regulators can implement average cost pricing or price cap regulation without inducing X-inefficiency. Fourth, <strong>the alternative scenario</strong>—in industries with significant economies of scale, forcing competition may result in duplication of fixed costs, higher industry-wide average costs, and potentially higher prices than regulated monopoly.
 </p>
 <p className="mb-0">
 A balanced evaluation must acknowledge the <strong className="text-silver-bright">Schumpeterian defense of monopoly</strong>: temporary market power may be the necessary reward for innovation, providing the supernormal profits that fund R&amp;D and attract entrepreneurial risk-taking. The critical question is whether monopoly profits are <em>reinvested</em> in value-creating activities or merely <em>extracted</em> as shareholder returns. Policy should focus not on eliminating market power per se, but on ensuring markets remain contestable, innovation is rewarded, and the duration of monopoly power is proportionate to the social value of the underlying innovation—principles embodied in patent systems limiting intellectual property protection to 20 years.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Topic 5: Contestable Markets */}
 <section id="contestable-markets" className="mb-16">
 <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
 <span className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold">5</span>
 Contestable Markets
 </h2>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Definition &amp; Theory</h3>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 A <strong className="text-silver-bright">contestable market</strong> is one where potential competition 
 is sufficient to ensure competitive behavior, even if the market is dominated by few firms. The key 
 is <strong className="text-silver-bright">freedom of entry and exit</strong> with minimal sunk costs. 
 The threat of "hit-and-run" entry forces incumbent firms to behave as if they face competition, 
 leading to lower prices, higher output, and greater consumer choice.
 </p>

 <h4 className="text-lg font-semibold text-silver-bright mb-4">Factors Determining Contestability</h4>
 <div className="grid md:grid-cols-3 gap-4">
 <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
 <h5 className="text-cyan-400 font-medium mb-2">1. Low Sunk Costs</h5>
 <p className="text-muted-foreground text-sm">
 No specialized equipment or major investments that cannot be recovered on exit
 </p>
 </div>
 <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
 <h5 className="text-cyan-400 font-medium mb-2">2. Low Marketing Costs</h5>
 <p className="text-muted-foreground text-sm">
 New entrants don't face prohibitive advertising or brand-building expenses
 </p>
 </div>
 <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
 <h5 className="text-cyan-400 font-medium mb-2">3. No Incumbent Advantage</h5>
 <p className="text-muted-foreground text-sm">
 Previous actions by incumbents don't create lasting barriers
 </p>
 </div>
 </div>

 <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
 <h4 className="text-cyan-400 font-semibold mb-2">Profits in Contestable Markets</h4>
 <p className="text-muted-foreground text-sm">
 Even a monopoly in a highly contestable market will tend toward <strong>normal profits</strong> in the 
 long run. If supernormal profits exist, new firms will enter to capture them, driving prices down. 
 The threat of entry is as powerful as actual competition.
 </p>
 </div>
 </div>

 {/* Contestable Markets Diagram */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <ContestableMarketsDiagram />
 </div>

 {/* X-Efficiency Diagram */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <XEfficiencyDiagram />
 </div>

 {/* Real World Example */}
 <RealWorldExample
 title="Airline Deregulation (USA, 1978)"
 description="The US Airline Deregulation Act removed government control over fares, routes, and entry. Despite concerns about monopolistic behavior, the threat of entry disciplined incumbent airlines."
 impact="Average fares fell 50% in real terms over 30 years. New entrants like Southwest proved hit-and-run entry viable on many routes. However, hub dominance and frequent flyer programs created partial sunk costs limiting full contestability."
 type="positive"
 source="Brookings Institution, 2011"
 className="mb-8"
 />

 {/* Logic Chain */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-cyan-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-cyan-400"></span> Chain of Analysis: Hit-and-Run Entry Mechanism
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed">
 <p className="mb-0">
 <strong className="text-cyan-400">Constraint:</strong> Incumbent monopolist earns supernormal profit (P &gt; ATC) in market with zero sunk costs →
 <strong className="text-cyan-400"> Entrant Calculation:</strong> Potential competitor observes profit opportunity; entry cost is recoverable on exit →
 <strong className="text-cyan-400"> Hit-and-Run Strategy:</strong> Entrant enters market, undercuts incumbent price (P<sub>e</sub> &lt; P<sub>m</sub>), captures market share, extracts profit →
 <strong className="text-cyan-400"> Incumbent Response:</strong> If incumbent retaliates with price war, entrant exits costlessly; if incumbent accommodates, entrant shares market →
 <strong className="text-cyan-400"> Anticipatory Behavior:</strong> Rational incumbent anticipates hit-and-run threat →
 <strong className="text-cyan-400"> Final Equilibrium:</strong> Incumbent sets P = ATC preemptively (limit pricing), earning only normal profit despite monopoly market structure. The <em>threat</em> of competition achieves same outcome as <em>actual</em> competition.
 </p>
 </div>
 </div>
 </div>

 {/* Evaluation Block */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Senior Examiner's Evaluation: Contestable Markets Theory
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
 <p className="mb-0">
 Baumol's contestability theory represented a <strong className="text-amber-400">paradigm shift</strong> in industrial economics by refocusing attention from market structure (number of firms) to market conduct (threat of entry). However, the theory's policy implications—that deregulation and removal of artificial barriers can achieve competitive outcomes even in concentrated markets—rest on assumptions that may not hold in practice. The requirement for <strong className="text-silver-bright">zero sunk costs</strong> is rarely satisfied: most industries involve some irrecoverable investment in specialized equipment, brand-building, regulatory compliance, or human capital development. Even airline markets, the canonical example of contestability, involve sunk costs in route-specific marketing, airport slots, and pilot training for specific aircraft types.
 </p>
 <p className="mb-0">
 The <strong className="text-amber-400">"depends on"</strong> evaluation reveals critical contingencies: First, <strong>the speed of entry and exit</strong>—hit-and-run only works if entrants can establish market presence before incumbents respond with price cuts; if incumbents can rapidly match prices, potential entrants anticipate losses and don't enter. Second, <strong>asymmetric information</strong>—entrants may underestimate incumbent cost structures or overestimate market demand, leading to entry followed by costly exit. Third, <strong>strategic deterrence</strong>—incumbents may deliberately create sunk costs (through excess capacity, R&amp;D, or brand investment) as credible commitment devices signaling aggressive post-entry responses. Fourth, <strong>network effects and switching costs</strong>—in markets with strong network externalities (social media, operating systems), even costless physical entry cannot overcome the sunk costs customers face in switching.
 </p>
 <p className="mb-0">
 A balanced evaluation recognizes contestability theory's value as a <strong className="text-silver-bright">policy framework</strong> rather than empirical description. Regulatory priorities should focus on reducing artificial sunk costs (licensing requirements, exclusive contracts, predatory behavior) while acknowledging that some market power is inevitable where genuine sunk costs exist. The theory also supports the argument that the <em>potential</em> for competition—enabled by low regulatory barriers, standard interfaces, and prohibitions on predatory behavior—may be more important than the actual number of competitors in determining market performance.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Topic 6: Objectives of Firms */}
 <section id="objectives" className="mb-16">
 <h2 className="text-3xl font-serif font-bold text-silver-bright mb-6 flex items-center gap-3">
 <span className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg font-bold">6</span>
 Objectives of Firms
 </h2>

 <div className="glass-card p-8 rounded-2xl mb-8">
 <p className="text-muted-foreground mb-6 leading-relaxed">
 While traditional economic theory assumes firms seek to maximize profits (MR = MC), real-world firms 
 may pursue alternative objectives due to separation of ownership and control, stakeholder pressures, 
 or strategic considerations.
 </p>

 <div className="grid md:grid-cols-2 gap-6">
 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-emerald-400 mb-3">1. Profit Maximization</h4>
 <p className="text-muted-foreground text-sm mb-2">
 The traditional objective: produce where MR = MC. However, the principal-agent problem 
 (managers vs. owners) may lead to other objectives.
 </p>
 <div className="text-xs text-muted-foreground bg-emerald-500/10 p-2 rounded">MR = MC</div>
 </div>

 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-emerald-400 mb-3">2. Sales Revenue Maximization</h4>
 <p className="text-muted-foreground text-sm mb-2">
 Managers may prioritize revenue growth (linked to bonuses/prestige). 
 Produce where MR = 0 (total revenue is maximized).
 </p>
 <div className="text-xs text-muted-foreground bg-emerald-500/10 p-2 rounded">MR = 0</div>
 </div>

 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-emerald-400 mb-3">3. Output Maximization</h4>
 <p className="text-muted-foreground text-sm mb-2">
 Produce as much as possible while covering costs. This occurs where AR = AC 
 (normal profit constraint).
 </p>
 <div className="text-xs text-muted-foreground bg-emerald-500/10 p-2 rounded">AR = AC</div>
 </div>

 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-emerald-400 mb-3">4. Growth Maximization</h4>
 <p className="text-muted-foreground text-sm mb-2">
 Expand through internal growth or external growth (horizontal, vertical, or 
 conglomerate integration/mergers).
 </p>
 <div className="text-xs text-muted-foreground bg-emerald-500/10 p-2 rounded">Expansion strategy</div>
 </div>

 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-emerald-400 mb-3">5. Utility Maximization</h4>
 <p className="text-muted-foreground text-sm mb-2">
 Managers maximize their own utility (perks, status, job security) rather than 
 shareholder returns. Linked to the principal-agent problem.
 </p>
 <div className="text-xs text-muted-foreground bg-emerald-500/10 p-2 rounded">Manager's interests</div>
 </div>

 <div className="p-6 border border-silver/20 rounded-xl">
 <h4 className="text-lg font-semibold text-emerald-400 mb-3">6. Satisficing</h4>
 <p className="text-muted-foreground text-sm mb-2">
 Rather than maximizing any single objective, firms aim to achieve satisfactory 
 levels across multiple goals (profit, sales, employee welfare, social responsibility).
 </p>
 <div className="text-xs text-muted-foreground bg-emerald-500/10 p-2 rounded">"Good enough" approach</div>
 </div>
 </div>
 </div>

 {/* Pricing Strategies */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <h3 className="text-xl font-semibold text-silver-bright mb-4">Pricing Strategies</h3>
 
 <div className="grid md:grid-cols-2 gap-4">
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-medium mb-2">Marginal Cost Pricing (P = MC)</h4>
 <p className="text-muted-foreground text-sm">Achieves allocative efficiency</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-medium mb-2">Average Cost Pricing (P = AC)</h4>
 <p className="text-muted-foreground text-sm">Ensures normal profit (break-even)</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-medium mb-2">Full Cost Pricing</h4>
 <p className="text-muted-foreground text-sm">AC plus a markup for profit</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-medium mb-2">Predatory Pricing</h4>
 <p className="text-muted-foreground text-sm">P &lt; AVC to drive out rivals, then raise prices</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-medium mb-2">Limit Pricing</h4>
 <p className="text-muted-foreground text-sm">Set price low enough to deter entry but still earn profit</p>
 </div>
 <div className="p-4 border border-silver/20 rounded-lg">
 <h4 className="text-silver-bright font-medium mb-2">Revenue Maximization</h4>
 <p className="text-muted-foreground text-sm">Produce where MR = 0</p>
 </div>
 </div>
 </div>

 {/* Evaluation Block */}
 <div className="glass-card p-8 rounded-2xl mb-8">
 <div className="border-l-4 border-amber-500 pl-6">
 <h3 className="font-serif text-xl text-silver-bright mb-3 flex items-center gap-2">
 <span className="text-amber-400"></span> Senior Examiner's Evaluation: Firm Objectives
 </h3>
 <div className="text-muted-foreground text-justify leading-relaxed space-y-4">
 <p className="mb-0">
 The profit maximization assumption underlying neoclassical theory faces <strong className="text-amber-400">significant challenges</strong> from behavioral economics and organizational theory. The <strong className="text-silver-bright">principal-agent problem</strong> recognizes that managers (agents) may pursue objectives divergent from shareholder (principal) interests: empire-building through growth maximization, risk aversion preserving managerial job security, or utility maximization through executive perks and prestige. Herbert Simon's "satisficing" concept—achieving satisfactory rather than optimal outcomes across multiple objectives—may better describe actual corporate decision-making under conditions of bounded rationality and imperfect information.
 </p>
 <p className="mb-0">
 The <strong className="text-amber-400">"depends on"</strong> evaluation reveals when profit maximization holds versus when alternative objectives dominate: First, <strong>ownership concentration</strong>—closely-held firms with owner-managers more likely to profit maximize; widely-held corporations with dispersed shareholders face greater agency problems. Second, <strong>market for corporate control</strong>—active takeover markets discipline managers; if underperforming firms can be acquired and restructured, managers face implicit threats maintaining profit focus. Third, <strong>compensation structures</strong>—stock options and performance bonuses align managerial incentives with shareholder returns; fixed salaries permit objective divergence. Fourth, <strong>product market competition</strong>—firms in competitive markets face extinction if they deviate from profit maximization; monopolists can afford the "quiet life" of X-inefficiency.
 </p>
 <p className="mb-0">
 A balanced evaluation recognizes that the <strong className="text-silver-bright">positive predictive power</strong> of profit maximization may remain strong even if the behavioral assumption is descriptively inaccurate—firms that survive competitive selection tend to behave "as if" they maximize profits regardless of managers' actual cognitive processes. Stakeholder theory offers an alternative framework where firms balance shareholder returns against employee welfare, customer satisfaction, environmental impact, and community relationships. Whether this represents enlightened long-run profit maximization (stakeholder relationships as intangible assets) or genuine departure from shareholder primacy remains contested in both academic literature and corporate governance practice.
 </p>
 </div>
 </div>
 </div>
 </section>

 <ExamTipBox>
 <h4 className="font-semibold text-amber-300 mb-2">Market Structures Exam Tips</h4>
 <ul className="space-y-2 text-sm">
 <li>• Always draw diagrams showing MC, ATC, AR, MR curves with clear profit/loss areas shaded</li>
 <li>• Remember: P = MC is allocative efficiency; Production at minimum ATC is productive efficiency</li>
 <li>• Only perfect competition achieves both efficiencies in long-run equilibrium</li>
 <li>• The kinked demand curve explains price rigidity but not how the original price was set</li>
 <li>• Distinguish between barriers to entry (monopoly) and sunk costs (contestability)</li>
 <li>• Game theory: Nash equilibrium is where no firm can improve by unilaterally changing strategy</li>
 </ul>
 </ExamTipBox>

 {/* Navigation */}
 <nav className="flex justify-between mt-12 pt-8 border-t border-silver/10">
 <Link 
 to="/price-system" 
 className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
 >
 <ChevronRight className="w-4 h-4 rotate-180" />
 <span>Previous: Price System</span>
 </Link>
 <Link 
 to="/a2-micro/labor-market" 
 className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
 >
 <span>Next: Labor Market</span>
 <ChevronRight className="w-4 h-4" />
 </Link>
 </nav>
 </div>
 </Layout>
 );
};

export default MarketStructuresA2;
