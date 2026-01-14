import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import ComparativeAdvantageDiagram from '@/components/diagrams/ComparativeAdvantageDiagram';
import TariffQuotaDiagram from '@/components/diagrams/TariffQuotaDiagram';

const InternationalTrade = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 3</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            International Trade
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the gains from trade through comparative advantage, and analyzing the effects of protectionist policies.
          </p>
        </div>

        {/* Gains from Trade */}
        <ContentSection title="The Gains from International Trade">
          <NoteCard title="Why Countries Trade" type="definition">
            <p>
              <strong>International trade</strong> is the exchange of goods and services between countries. 
              Trade allows countries to consume beyond their domestic production possibilities by specializing 
              in what they produce most efficiently.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">1. Lower Prices</h4>
              <p className="text-sm text-muted-foreground">
                Consumers can buy less expensive products; producers can purchase cheaper raw materials 
                and semi-manufactured goods. This is the main reason for trade.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">2. Greater Choice</h4>
              <p className="text-sm text-muted-foreground">
                International trade enables consumers to access products from different countries, 
                not just domestically produced goods.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">3. Differences in Resources</h4>
              <p className="text-sm text-muted-foreground">
                Countries may lack certain resources (oil, copper, diamonds) but need them for production. 
                Trade allows access to resources not naturally available.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">4. Economies of Scale</h4>
              <p className="text-sm text-muted-foreground">
                Producing for international markets increases output levels, enabling firms to achieve 
                lower average costs through economies of scale.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">5. Increased Competition</h4>
              <p className="text-sm text-muted-foreground">
                Domestic firms face competition from foreign firms, leading to greater efficiency, 
                lower prices, and improved quality for consumers.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">6. Efficient Resource Allocation</h4>
              <p className="text-sm text-muted-foreground">
                Free trade ensures resources are used most efficiently globally – countries produce 
                what they're best at producing.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Comparative Advantage */}
        <ContentSection title="The Theory of Comparative Advantage">
          <NoteCard title="Definition" type="definition">
            <p>
              A country has a <strong>comparative advantage</strong> in producing a good if it can produce 
              that good at a <strong>lower opportunity cost</strong> than another country. Even if a country 
              is less efficient at producing everything (no absolute advantage), it can still benefit from 
              trade by specializing in goods where its relative inefficiency is smallest.
            </p>
          </NoteCard>

          <ComparativeAdvantageDiagram />

          <NoteCard title="Numerical Example" type="application">
            <p className="mb-4">Consider two countries producing vacuum cleaners (VC) and digital cameras (DC) with equal resources:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-2">Country</th>
                    <th className="text-right py-2">VC Production</th>
                    <th className="text-right py-2">DC Production</th>
                    <th className="text-right py-2">Opportunity Cost (1 VC)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">UK</td>
                    <td className="text-right">20</td>
                    <td className="text-right">10</td>
                    <td className="text-right text-primary">0.5 DC</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">USA</td>
                    <td className="text-right">10</td>
                    <td className="text-right">20</td>
                    <td className="text-right text-secondary">2 DC</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold">Conclusion:</p>
              <p className="text-sm mt-1">UK has comparative advantage in VC (lower opportunity cost: 0.5 DC vs 2 DC)</p>
              <p className="text-sm">USA has comparative advantage in DC (lower opportunity cost: 0.5 VC vs 2 VC)</p>
            </div>
          </NoteCard>

          <NoteCard title="Terms of Trade" type="theory">
            <p>
              For trade to be mutually beneficial, the <strong>terms of trade</strong> (exchange rate between goods) 
              must lie between the two countries' opportunity costs.
            </p>
            <div className="mt-3 p-3 bg-muted/30 rounded-lg font-mono text-sm text-center">
              UK: 0.5 DC = 1 VC | <strong>Terms of Trade: 1 DC = 1 VC</strong> | USA: 2 DC = 1 VC
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              At 1:1, UK gets 1 DC per VC instead of 0.5 (gain!), and USA gets 1 VC per DC instead of 0.5 (gain!).
            </p>
          </NoteCard>

          <AnalysisBlock title="Sources of Comparative Advantage">
            <ul className="space-y-2 text-sm">
              <li><strong>Factor Endowments:</strong> Differences in quantity/quality of land, labor, capital</li>
              <li><strong>Technology:</strong> Differences in production techniques and innovation</li>
              <li><strong>Exchange Rates:</strong> Currency appreciation makes exports less competitive</li>
              <li><strong>Relative Inflation:</strong> Higher inflation erodes competitiveness over time</li>
              <li><strong>Export Subsidies:</strong> Can create artificial comparative advantage</li>
              <li><strong>Non-Price Factors:</strong> Product design, quality, reliability, after-sales service</li>
            </ul>
          </AnalysisBlock>

          <ExamTipBox title="Limitations of the Theory" variant="warning">
            <ul className="space-y-1 text-sm">
              <li>• Assumes constant costs of production (linear PPCs) – unrealistic</li>
              <li>• Ignores transport costs which may eliminate comparative advantage</li>
              <li>• Assumes perfect factor mobility within countries but immobility between</li>
              <li>• Ignores trade barriers that exist in the real world</li>
              <li>• Quality and variety differences are not captured</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* Trade Protection */}
        <ContentSection title="Trade Protection">
          <NoteCard title="What is Protectionism?" type="definition">
            <p>
              <strong>Protectionism</strong> refers to government policies that restrict international trade 
              to help domestic industries. Despite the gains from free trade, governments often intervene 
              to protect domestic producers from foreign competition.
            </p>
          </NoteCard>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-4">Arguments FOR Protection</h3>
          
          <div className="space-y-4">
            <NoteCard title="1. Infant Industry Argument" type="theory">
              <p>
                New industries may have <em>potential</em> comparative advantage but are too small to achieve 
                economies of scale. Protection allows them to grow, become more efficient, and eventually 
                compete internationally.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Problems:</strong> Government must correctly identify "winners"; protected industries 
                may become complacent and never achieve efficiency.
              </p>
            </NoteCard>

            <NoteCard title="2. Sunset Industries / Job Protection" type="theory">
              <p>
                Declining industries may be protected to prevent sudden unemployment and social costs 
                from industrial closure. This provides time for workers to retrain.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Problems:</strong> Consumers pay higher prices; trading partners may retaliate 
                with their own restrictions.
              </p>
            </NoteCard>

            <NoteCard title="3. Anti-Dumping" type="theory">
              <p>
                <strong>Dumping</strong> is selling goods abroad below cost of production. Foreign firms 
                may do this to clear surplus or to destroy domestic competition (predatory pricing) 
                before raising prices later.
              </p>
            </NoteCard>

            <NoteCard title="4. Balance of Payments" type="theory">
              <p>
                Protection can reduce import expenditure and improve a current account deficit. 
                However, this is typically a short-run fix that doesn't address underlying causes 
                and invites retaliation.
              </p>
            </NoteCard>
          </div>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-4">Arguments AGAINST Protection</h3>
          
          <div className="glass-card p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Higher prices:</strong> Consumers and producers pay more for imports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Less choice:</strong> Reduced variety of goods available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Reduced competition:</strong> Domestic firms become inefficient without pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Distorted comparative advantage:</strong> Inefficient use of world resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Reduced innovation:</strong> Less incentive to innovate without competition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Slower growth:</strong> Protectionism may hinder economic development</span>
              </li>
            </ul>
          </div>
        </ContentSection>

        {/* Types of Protection */}
        <ContentSection title="Types of Trade Protection">
          <TariffQuotaDiagram />

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <NoteCard title="Tariffs" type="definition">
              <p>
                A <strong>tariff</strong> is a tax on imported goods. It raises the domestic price above 
                the world price, reducing imports and increasing domestic production.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• Raises government revenue</li>
                <li>• Protects domestic producers</li>
                <li>• Creates deadweight welfare loss</li>
                <li>• Consumers pay higher prices</li>
              </ul>
            </NoteCard>

            <NoteCard title="Quotas" type="definition">
              <p>
                A <strong>quota</strong> is a quantitative limit on the amount of a good that can be imported. 
                It directly restricts import quantity rather than raising price through a tax.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• No government revenue (unless sold)</li>
                <li>• Quota "rent" goes to importers</li>
                <li>• Creates similar welfare loss to tariffs</li>
                <li>• More restrictive than tariffs</li>
              </ul>
            </NoteCard>
          </div>

          <NoteCard title="Other Forms of Protection" type="application">
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <h5 className="font-semibold text-sm">Subsidies</h5>
                <p className="text-xs text-muted-foreground">Payments to domestic producers to lower costs and compete with imports</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm">Administrative Barriers</h5>
                <p className="text-xs text-muted-foreground">Complex regulations, customs delays, excessive paperwork</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm">Voluntary Export Restraints</h5>
                <p className="text-xs text-muted-foreground">Agreements with foreign countries to limit their exports</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm">Embargoes</h5>
                <p className="text-xs text-muted-foreground">Complete ban on trade with a particular country</p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Trade allows countries to consume beyond their PPC through specialization.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Comparative advantage = lower opportunity cost, not absolute efficiency.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Terms of trade must lie between countries' opportunity costs for mutual gain.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Protection arguments: infant industries, jobs, anti-dumping, BOP.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Tariffs and quotas both create deadweight welfare loss and distort trade.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default InternationalTrade;
