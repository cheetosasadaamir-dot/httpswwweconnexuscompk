import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import DemandCurveDiagram from '@/components/DemandCurveDiagram';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChapterEnrichment from '@/components/ChapterEnrichment';

const MarketStructures = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 px-8 lg:px-16">
        {/* Breadcrumb */}
        <nav 
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          style={{ animation: 'fade-in-up 0.6s ease-out forwards' }}
        >
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span>Microeconomics</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Market Structures</span>
        </nav>

        {/* Page Header */}
        <header 
          className="mb-12"
          style={{ animation: 'fade-in-up 0.6s ease-out 0.1s forwards', opacity: 0 }}
        >
          <h1 className="font-serif text-4xl lg:text-5xl font-bold section-title mb-4">
            Market Structures
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Understanding how markets organize themselves—from perfect competition to monopoly—is 
            fundamental to analyzing economic efficiency and business strategy.
          </p>
        </header>

        {/* Law of Demand Diagram - Featured */}
        <section 
          className="mb-16"
          style={{ animation: 'fade-in-up 0.6s ease-out 0.2s forwards', opacity: 0 }}
        >
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                  Key Diagram
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl text-silver-bright mb-4">
                  The Law of Demand
                </h2>
                <p className="text-muted-foreground leading-relaxed-plus mb-6">
                  The demand curve illustrates a fundamental economic principle: as price falls, 
                  the quantity demanded rises (and vice versa). Think of it like a sale at your 
                  favourite store—when prices drop, more people buy.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">1</span>
                    </span>
                    <span>
                      <strong className="text-foreground">Inverse relationship</strong>: Price and quantity 
                      demanded move in opposite directions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">2</span>
                    </span>
                    <span>
                      <strong className="text-foreground">Downward slope</strong>: The curve always slopes 
                      from top-left to bottom-right
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">3</span>
                    </span>
                    <span>
                      <strong className="text-foreground">Ceteris paribus</strong>: This holds when all 
                      other factors remain constant
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full max-w-md">
                <DemandCurveDiagram className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Notes Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <NoteCard 
            title="Understanding Demand" 
            type="theory"
            delay={300}
          >
            <p>
              <GlossaryTooltip term="Demand" definition="The quantity of a good or service that consumers are willing and able to purchase at various price levels.">
                Demand
              </GlossaryTooltip>{' '}
              represents consumer behaviour in markets. It's not just about wanting something—it's 
              about being both willing <em>and</em> able to pay for it.
            </p>
            <p>
              Several factors shift the entire demand curve: changes in income, prices of related 
              goods (
              <GlossaryTooltip term="Substitutes" definition="Goods that can be used in place of each other, like tea and coffee. When the price of one rises, demand for the other increases.">
                substitutes
              </GlossaryTooltip>{' '}
              and{' '}
              <GlossaryTooltip term="Complements" definition="Goods that are used together, like printers and ink. When the price of one rises, demand for the other falls.">
                complements
              </GlossaryTooltip>
              ), consumer preferences, and expectations about future prices.
            </p>
          </NoteCard>

          <NoteCard 
            title="Coffee Shop Economics" 
            type="application"
            delay={400}
          >
            <p>
              Imagine a local coffee shop. When they raise prices from £3 to £4 per cup, 
              fewer customers buy coffee—some switch to making it at home, others choose tea. 
              This is the law of demand in action.
            </p>
            <p>
              The shop must balance higher margins per cup against lower sales volume. Understanding 
              the{' '}
              <GlossaryTooltip term="Price Elasticity of Demand" definition="A measure of how responsive quantity demanded is to a change in price. Calculated as % change in quantity demanded ÷ % change in price.">
                price elasticity
              </GlossaryTooltip>{' '}
              of their customers' demand is crucial for profit maximisation.
            </p>
          </NoteCard>

          <NoteCard 
            title="Diagram Annotation Tips" 
            type="exam-tip"
            delay={500}
          >
            <p>
              <strong>Always label your axes correctly!</strong> Price goes on the Y-axis (vertical), 
              Quantity on the X-axis (horizontal). Examiners deduct marks for mislabeled diagrams.
            </p>
            <p>
              When drawing shifts, clearly show the direction with an arrow and label both the 
              original curve (D₁) and the new curve (D₂). State whether it's a shift <em>of</em> 
              the curve or a movement <em>along</em> the curve.
            </p>
          </NoteCard>

          <NoteCard 
            title="Market Structure Types" 
            type="theory"
            delay={600}
          >
            <p>
              Markets range from{' '}
              <GlossaryTooltip term="Perfect Competition" definition="A theoretical market with many small firms, identical products, perfect information, and no barriers to entry. Firms are 'price takers'.">
                perfect competition
              </GlossaryTooltip>{' '}
              (many small firms, identical products) to{' '}
              <GlossaryTooltip term="Monopoly" definition="A market with a single seller that controls the entire supply of a product or service with no close substitutes.">
                monopoly
              </GlossaryTooltip>{' '}
              (one dominant firm).
            </p>
            <p>
              In between, we find{' '}
              <GlossaryTooltip term="Oligopoly" definition="A market dominated by a small number of large firms whose actions affect each other. Think supermarkets or mobile networks.">
                oligopoly
              </GlossaryTooltip>{' '}
              (few large firms) and{' '}
              <GlossaryTooltip term="Monopolistic Competition" definition="Many firms selling differentiated products, like restaurants or clothing brands. Firms have some price-setting power.">
                monopolistic competition
              </GlossaryTooltip>{' '}
              (many firms with differentiated products).
            </p>
          </NoteCard>
        </div>

        {/* Key Takeaways */}
        <section 
          className="glass-card p-8 mb-12"
          style={{ animation: 'fade-in-up 0.6s ease-out 0.7s forwards', opacity: 0 }}
        >
          <h2 className="font-serif text-2xl text-silver-bright mb-6">Key Takeaways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-muted/30 border border-silver/10">
              <h3 className="font-semibold text-foreground mb-2">Remember</h3>
              <p className="text-sm text-muted-foreground">
                The demand curve shows the relationship between price and quantity demanded, 
                holding all other factors constant.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-silver/10">
              <h3 className="font-semibold text-foreground mb-2">Distinguish</h3>
              <p className="text-sm text-muted-foreground">
                Movement along the curve (price change) vs. shift of the curve 
                (non-price factor change).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-silver/10">
              <h3 className="font-semibold text-foreground mb-2">Apply</h3>
              <p className="text-sm text-muted-foreground">
                Use real examples: COVID-19 shifted demand for masks right; 
                energy price hikes affected heating demand.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-silver/10">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link 
            to="/supply-demand" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Supply & Demand
            <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
      <ChapterEnrichment id="market-structures" />
    </Layout>
  );
};

export default MarketStructures;
