import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ChapterEnrichment from '@/components/ChapterEnrichment';
import RevenueCurvesDiagram from '@/components/diagrams/RevenueCurvesDiagram';
import CostCurvesDiagram from '@/components/diagrams/CostCurvesDiagram';
import EconomiesOfScaleDiagram from '@/components/diagrams/EconomiesOfScaleDiagram';
import PerfectCompetitionDiagram from '@/components/diagrams/PerfectCompetitionDiagram';
import MonopolyDiagram from '@/components/diagrams/MonopolyDiagram';
import MonopolisticCompetitionDiagram from '@/components/diagrams/MonopolisticCompetitionDiagram';
import KinkedDemandDiagram from '@/components/diagrams/KinkedDemandDiagram';
import GameTheoryDiagram from '@/components/diagrams/GameTheoryDiagram';
import ContestableMarketsDiagram from '@/components/diagrams/ContestableMarketsDiagram';
import XEfficiencyDiagram from '@/components/diagrams/XEfficiencyDiagram';
import EfficiencyDiagram from '@/components/diagrams/EfficiencyDiagram';
import NaturalMonopolyDiagram from '@/components/diagrams/NaturalMonopolyDiagram';
import PriceDiscriminationDiagram from '@/components/diagrams/PriceDiscriminationDiagram';
import CartelDiagram from '@/components/diagrams/CartelDiagram';

const MarketStructures = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-5 flex-wrap">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Microeconomics</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">Market Structures</span>
        </nav>

        {/* Chapter Header */}
        <div className="mb-6">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">A Level • Microeconomics</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-3">Market Structures</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            How the number of firms, the height of entry barriers and the degree of product differentiation
            determine price, output, profit and efficiency — from perfect competition through to pure monopoly.
          </p>
        </div>

        <KeyTakeaways
          title="Key Takeaways: Market Structures"
          takeaways={[
            "Market structure is defined by four characteristics: number of firms, barriers to entry, product differentiation and information.",
            "Every profit-maximising firm, in every structure, produces where MC = MR (with MC cutting MR from below).",
            "A price taker faces a perfectly elastic demand curve, so AR = MR = price; a price maker faces a downward-sloping AR, so MR lies below AR and falls twice as steeply.",
            "Perfect competition delivers allocative efficiency (P = MC) and productive efficiency (P = min AC) in the long run; monopoly delivers neither and creates deadweight welfare loss.",
            "Monopolistic competition ends in long-run normal profit at a tangency point where AR = AC, but with excess capacity to the left of min AC.",
            "Oligopoly is defined by interdependence: the kinked demand curve explains price rigidity, and game theory explains why collusion is tempting but unstable.",
            "Contestability, not the number of firms, disciplines pricing: with zero sunk costs the threat of hit-and-run entry forces normal-profit pricing even on a monopolist.",
            "Monopoly is not unambiguously bad: economies of scale, dynamic efficiency and natural monopoly cost conditions are the key evaluation lines."
          ]}
        />

        {/* SECTION 1: Foundations */}
        <ContentSection title="Defining a Market Structure">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">The Four Structural Characteristics</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">market structure</strong> describes the competitive environment in which a firm operates,
              and it is classified using four characteristics. First, the <strong className="text-primary">number and relative size of firms</strong>:
              a market with thousands of tiny sellers behaves very differently from one with three giants. Second,
              <strong className="text-primary"> barriers to entry and exit</strong>: legal barriers (patents, licences), structural barriers
              (economies of scale, control of an essential input, high sunk costs) and strategic barriers (limit pricing, predatory pricing,
              heavy brand advertising). Third, the degree of <strong className="text-primary">product differentiation</strong>: homogeneous
              commodities such as wheat at one extreme, strongly branded goods at the other. Fourth, the quality of
              <strong className="text-primary"> information</strong> available to buyers and sellers. Together these determine how much
              <em> price-setting power</em> an individual firm holds, and therefore whether it is a price taker or a price maker.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5">
                <h4 className="font-semibold text-cyan-400 text-sm mb-2">Price Takers</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Many firms, each with a negligible market share</li>
                  <li>• Homogeneous product, so no brand loyalty</li>
                  <li>• Demand curve perfectly elastic at the market price</li>
                  <li>• AR = MR = P; the firm chooses output, never price</li>
                  <li>• <em>Closest real examples:</em> wholesale grain, foreign exchange</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
                <h4 className="font-semibold text-amber-400 text-sm mb-2">Price Makers</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Few firms, or a differentiated product</li>
                  <li>• Downward-sloping AR curve for the individual firm</li>
                  <li>• MR falls twice as fast as AR (same intercept, double gradient)</li>
                  <li>• Output restricted below, and price raised above, the competitive level</li>
                  <li>• <em>Examples:</em> branded software, utilities, supermarkets</li>
                </ul>
              </div>
            </div>

            <RevenueCurvesDiagram />

            <AnalysisBlock title="Chain of Analysis: Why MC = MR Maximises Profit" type="analysis">
              <p className="text-sm leading-relaxed">
                <strong>Step 1:</strong> Profit is total revenue minus total cost, so it changes by (MR − MC) for each extra unit sold.
                <strong> Step 2:</strong> If MR &gt; MC, the extra unit adds more to revenue than to cost, so producing it raises profit.
                <strong> Step 3:</strong> If MR &lt; MC, the last unit destroys profit and output should be cut.
                <strong> Step 4:</strong> Profit therefore peaks where MR = MC, provided MC is rising through MR (cutting it from below);
                where MC cuts MR from above, the point is a profit <em>minimum</em>.
                <strong> Step 5:</strong> This condition is universal — it holds for the perfectly competitive farmer and the monopolist alike.
                What differs across structures is the shape of the AR and MR curves the firm faces, and therefore the price it can charge at that output.
              </p>
            </AnalysisBlock>
          </div>

          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">The Cost Foundations: Short Run and Long Run</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every market-structure diagram is built on the same cost curves, so their geometry must be exact. In the short run at least one
              factor is fixed, so the law of <strong className="text-foreground">diminishing marginal returns</strong> eventually forces marginal cost upward.
              Marginal cost cuts both average variable cost and average total cost precisely at their minimum points — that is not a stylistic
              choice but an arithmetic necessity: while MC lies below an average, the average must be falling; when MC lies above it, the average
              must be rising; so they can only meet where the average is flat. Average fixed cost falls continuously towards the horizontal axis
              because a constant fixed cost is spread over more units.
            </p>
            <CostCurvesDiagram />

            <p className="text-sm leading-relaxed text-muted-foreground">
              In the long run all factors are variable and the firm chooses its <em>scale</em>. The long-run average cost curve is the envelope of
              short-run curves: it falls through the region of <strong className="text-cambridge-green">economies of scale</strong> (technical, purchasing,
              managerial, financial, risk-bearing and marketing), flattens across the minimum efficient scale, and may eventually rise through
              <strong className="text-destructive"> diseconomies of scale</strong> caused by coordination failure, communication loss and weakening worker motivation.
              The position of minimum efficient scale relative to total market demand is the single most powerful determinant of market structure:
              where MES is a large fraction of the market, only a few firms can survive, and concentration follows naturally.
            </p>
            <EconomiesOfScaleDiagram />
          </div>
        </ContentSection>

        {/* SECTION 2: Perfect competition */}
        <ContentSection title="Perfect Competition">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Short-Run Abnormal Profit to Long-Run Normal Profit</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Perfect competition assumes many buyers and sellers, an identical product, perfect information, freedom of entry and exit, and no
              transport or transaction costs. The individual firm is therefore a price taker: its demand curve is horizontal at the industry price,
              and AR equals MR equals price. In the <strong className="text-primary">short run</strong> a firm can earn abnormal profit if the industry price
              lies above average cost at the profit-maximising output, or make losses if it lies below. In the <strong className="text-secondary">long run</strong>
              those profits attract entry: industry supply shifts right, the market price falls, and each firm's horizontal demand curve slides down
              until it is tangent to the minimum of average cost. At that point only <em>normal profit</em> remains and entry stops. Losses trigger the
              reverse process — exit, contracting supply, rising price — until the surviving firms again break even.
            </p>
            <PerfectCompetitionDiagram />

            <ExamTipBox title="The Shut-Down Rule" variant="warning">
              <p className="text-sm leading-relaxed">
                A loss-making firm does not necessarily close. In the short run fixed costs are unavoidable, so the firm continues to produce as long as
                price covers <strong>average variable cost</strong> — every pound above AVC makes a contribution towards fixed costs. If price falls below
                AVC the firm loses less by shutting immediately. In the long run all costs are variable, so the firm exits whenever price fails to cover
                average total cost. This is why the short-run supply curve of the firm is its MC curve above minimum AVC, and the long-run supply curve is
                its MC curve above minimum ATC.
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* SECTION 3: Monopoly */}
        <ContentSection title="Monopoly and Monopoly Power">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Restricted Output, Higher Price, Deadweight Loss</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A pure monopoly is the single seller of a product with no close substitutes, protected by high barriers to entry; in competition law a
              firm is usually treated as holding monopoly power at a market share above 25%. Facing the whole market demand curve, the monopolist's
              AR slopes downward and its MR curve starts at the same vertical intercept but has twice the gradient, cutting the horizontal axis at
              half the output at which AR does. Profit maximisation at MC = MR therefore yields an output <strong className="text-destructive">below</strong>,
              and a price <strong className="text-destructive">above</strong>, the competitive equilibrium where price equals marginal cost. Because barriers to
              entry prevent the arrival of new firms, abnormal profit persists into the long run.
            </p>
            <MonopolyDiagram title="Monopoly Equilibrium: MC = MR, Price Read Off AR" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              Not every monopoly is an accident of market power. Where fixed costs are enormous relative to demand — water mains, the electricity grid, rail
              track — average cost falls across the entire relevant output range, so a single supplier is genuinely cheaper than several duplicating networks.
              This is a <strong className="text-foreground">natural monopoly</strong>, and it converts the policy question from "how do we break the firm up?"
              into "how do we regulate its price?". Marginal-cost pricing achieves allocative efficiency but forces a loss equal to the fixed cost, so
              regulators typically impose average-cost pricing through RPI − X price caps instead.
            </p>
            <NaturalMonopolyDiagram />

            <p className="text-sm leading-relaxed text-muted-foreground">
              A firm with price-setting power can also raise profit without changing its costs by charging different prices to different groups for the same
              product. <strong className="text-foreground">Third-degree price discrimination</strong> requires the ability to separate consumers by their
              price elasticity of demand and to prevent resale between the sub-markets. The firm then applies MR = MC separately in each, charging more where
              demand is less elastic — peak rail fares, business air tickets and term-time holiday pricing are the standard illustrations.
            </p>
            <PriceDiscriminationDiagram />


            <AnalysisBlock title="Chain of Analysis: The Welfare Loss Triangle" type="analysis">
              <p className="text-sm leading-relaxed">
                <strong>Step 1:</strong> Allocative efficiency requires P = MC, because price measures the marginal benefit to consumers and MC the
                marginal cost to society. <strong>Step 2:</strong> The monopolist sets P &gt; MC, so units whose value to consumers exceeds their production
                cost are never produced. <strong>Step 3:</strong> The value of those lost mutually beneficial trades is the deadweight welfare loss triangle,
                bounded by the demand curve, the MC curve and the restricted output. <strong>Step 4:</strong> There is also a transfer: part of what was
                consumer surplus under competition becomes monopoly profit, which is a distributional rather than an efficiency effect.
                <strong> Step 5:</strong> Evaluation must be balanced — if monopoly lowers the whole cost curve through economies of scale, price can be
                <em> lower</em> than under fragmented competition despite the mark-up, and Schumpeter's argument that abnormal profit funds research and
                development points to superior dynamic efficiency.
              </p>
            </AnalysisBlock>

            <p className="text-sm leading-relaxed text-muted-foreground">
              The counterweight to the efficiency case against monopoly is <strong className="text-foreground">X-inefficiency</strong>. Shielded from competitive
              pressure, a protected firm's average costs drift above the technically attainable minimum: overstaffing, inflated executive pay, tolerated
              waste and slow decision-making. The welfare loss from X-inefficiency is often larger than the allocative deadweight triangle, and it is the
              main empirical justification for competition policy and for exposing state monopolies to market discipline.
            </p>
            <XEfficiencyDiagram />
          </div>
        </ContentSection>

        {/* SECTION 4: Monopolistic competition */}
        <ContentSection title="Monopolistic Competition">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Many Firms, Differentiated Products, Excess Capacity</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Monopolistic competition combines the many-firm, free-entry structure of perfect competition with the differentiated product of monopoly.
              Restaurants, hairdressers, plumbers, coffee shops and clothing brands are the standard examples. Because each firm's product is slightly
              distinct, its demand curve slopes downward — but it is <em>highly elastic</em>, because close substitutes are one street away. Short-run
              abnormal profit is possible, but free entry erodes it: new rivals pull demand away from the incumbent, shifting its AR curve left and making
              it more elastic, until AR is merely <strong className="text-primary">tangent to AC</strong> and only normal profit remains.
            </p>
            <MonopolisticCompetitionDiagram />

            <p className="text-sm leading-relaxed text-muted-foreground">
              At that long-run tangency the firm produces where MC = MR, and price equals average cost — but the tangency necessarily lies on the
              <em> falling</em> section of the AC curve, to the left of minimum average cost. The gap between the equilibrium output and the
              productively efficient output is <strong className="text-destructive">excess capacity</strong>: the half-empty restaurant is the visible
              symptom. Price also exceeds marginal cost, so the market is allocatively inefficient too. The defence is that consumers gain genuine
              utility from variety and choice, which the perfectly competitive model, with its identical products, cannot deliver.
            </p>

            <EfficiencyDiagram />
          </div>
        </ContentSection>

        {/* SECTION 5: Oligopoly */}
        <ContentSection title="Oligopoly: Interdependence and Strategy">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Price Rigidity and the Kinked Demand Curve</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Oligopoly is a market dominated by a few large firms — supermarkets, mobile networks, commercial banks, airlines — and is usually measured
              by a concentration ratio, for instance the combined share of the largest four firms. Its defining feature is
              <strong className="text-primary"> interdependence</strong>: each firm must anticipate rivals' reactions before changing price or output.
              Sweezy's kinked demand curve model captures the resulting price stickiness. Above the prevailing price, demand is elastic because rivals will
              <em> not</em> follow a price rise and the firm loses customers heavily. Below it, demand is inelastic because rivals <em>will</em> match a price cut
              to defend share, so little extra volume is gained. The kink in AR produces a vertical discontinuity in MR, and marginal cost can shift anywhere
              within that gap without altering the profit-maximising price — which is why oligopoly prices change infrequently and competition takes non-price forms
              such as advertising, loyalty schemes, quality and product innovation.
            </p>
            <KinkedDemandDiagram />

            <p className="text-sm leading-relaxed text-muted-foreground">
              Game theory formalises the same interdependence. In the prisoner's dilemma each firm's dominant strategy is to cut price (or over-produce), so
              both end at a Nash equilibrium that is worse for them than the collusive outcome. That gap is the incentive to form a
              <strong className="text-secondary"> cartel</strong>, agreeing to restrict output and share the monopoly price. Cartels are illegal in most
              jurisdictions and are inherently unstable, because each member gains by secretly undercutting the agreed price while others hold output back.
              Detection, punishment strategies in repeated games, and a small number of members make collusion more sustainable; volatile demand, many members
              and low entry barriers make it collapse.
            </p>
            <GameTheoryDiagram />

            <p className="text-sm leading-relaxed text-muted-foreground">
              When collusion succeeds, the group behaves as a single joint monopolist: industry MR is equated with industry MC, a high price is agreed and
              the profit-maximising output is divided into quotas. The agreement is fragile precisely because it is profitable. Taking the cartel price as
              given, each member's own marginal cost lies well below it, so each has a private incentive to exceed its quota secretly — and when every member
              reasons that way, output rises, the price collapses and the cartel disintegrates.
            </p>
            <CartelDiagram />


            <ExamTipBox title="Collusive versus Non-Collusive Oligopoly" variant="gold">
              <p className="text-sm leading-relaxed">
                Distinguish <strong>formal collusion</strong> (an explicit cartel agreement on price or output), <strong>tacit collusion</strong> (price leadership,
                where firms follow a dominant firm without any agreement) and <strong>non-collusive behaviour</strong> (price wars, aggressive discounting).
                Strong answers link the observed conduct to market conditions — number of firms, transparency of prices, similarity of costs, stability of demand —
                rather than asserting that oligopolists "always collude".
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* SECTION 6: Contestability */}
        <ContentSection title="Contestable Markets and Policy">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">The Threat of Entry as a Substitute for Actual Competition</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Baumol's theory of contestable markets shifted the focus from market <em>structure</em> to market <em>conduct</em>. A market is perfectly contestable
              when entry is free, exit is costless and there are no <strong className="text-primary">sunk costs</strong> — costs that cannot be recovered on exit.
              Under those conditions even a single incumbent must price at or near average cost, because any abnormal profit would invite
              <em> hit-and-run entry</em>: a rival enters, undercuts, takes the profit and leaves before the incumbent can retaliate. The implication is powerful:
              a concentrated market can behave competitively, and a fragmented one can behave collusively, so concentration ratios alone are a poor guide to
              consumer outcomes. Deregulating airline routes and opening energy retail to switching are attempts to raise contestability rather than break firms up.
            </p>
            <ContestableMarketsDiagram />

            <AnalysisBlock title="Evaluation: How Should Policy Respond?" type="evaluation">
              <p className="text-sm leading-relaxed">
                Where monopoly arises from genuine <strong>natural monopoly</strong> cost conditions — a falling long-run average cost curve across the entire range
                of market demand, as with water pipes or rail track — splitting the firm would raise unit costs and harm consumers. Regulation is then preferable:
                price capping (for example an RPI − X formula) forces the firm to pass efficiency gains to consumers, while a marginal-cost pricing rule (P = MC)
                achieves allocative efficiency but yields a loss that must be subsidised. Where monopoly power instead rests on strategic barriers, the appropriate
                tools are competition law, merger control and measures to lower switching costs. A balanced conclusion recognises the trade-off between
                <em> static</em> efficiency (lower prices today) and <em>dynamic</em> efficiency (investment and innovation funded by retained profit).
              </p>
            </AnalysisBlock>
          </div>
        </ContentSection>

        {/* Synthesis */}
        <ContentSection title="Chapter Synthesis">
          <div className="glass-card p-5 border-l-4 border-primary">
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="text-primary font-serif text-lg">Senior Examiner's Final Assessment:</strong> The four models in this chapter are not
              descriptions of real industries; they are analytical benchmarks. Perfect competition tells us what an ideal allocation of resources would look like,
              monopoly tells us what happens when that discipline is removed, and monopolistic competition and oligopoly occupy the realistic middle ground where
              most firms actually trade. The highest-scoring answers move fluently between the diagram and the market: they use the geometry precisely — MC through
              the minimum of AC, MR twice as steep as AR, tangency on the falling section of AC — and then evaluate with the conditions that decide the case in
              practice: the height of sunk costs, the size of minimum efficient scale relative to demand, contestability, and whether abnormal profit is being
              reinvested or simply extracted.
            </p>
          </div>
        </ContentSection>

        <nav className="flex items-center justify-between pt-8 mt-6 border-t border-silver/10">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link to="/supply-demand" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            Supply &amp; Demand
            <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>
      </motion.div>
      <ChapterEnrichment id="market-structures" />
    </Layout>
  );
};

export default MarketStructures;
