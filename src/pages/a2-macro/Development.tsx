import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import { LorenzCurveDiagram } from '@/components/diagrams/LorenzCurveDiagram';

const Development = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Economic Development & Globalization
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A2 Level Macroeconomics • Chapter 8
          </p>

          {/* Economic Development */}
          <ContentSection title="Economic Growth vs Economic Development">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Economic growth</strong> refers to an increase in real GDP over time—a quantitative measure of output expansion. <strong>Economic development</strong> is a broader concept encompassing improvements in living standards, health, education, and overall quality of life.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Economic Growth">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Measured by real GDP or GDP per capita</li>
                  <li>Quantitative increase in output</li>
                  <li>Necessary but not sufficient for development</li>
                  <li>Does not capture income distribution</li>
                  <li>Ignores environmental degradation</li>
                </ul>
              </NoteCard>

              <NoteCard title="Economic Development">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Measured by HDI, life expectancy, education levels</li>
                  <li>Qualitative improvement in wellbeing</li>
                  <li>Includes structural economic changes</li>
                  <li>Considers inequality and poverty reduction</li>
                  <li>Encompasses social and political progress</li>
                </ul>
              </NoteCard>
            </div>

            <NoteCard title="Human Development Index (HDI)" variant="info" className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">
                The HDI, created by the UN, measures development across three dimensions:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary">Health</p>
                  <p className="text-sm">Life expectancy at birth</p>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary">Education</p>
                  <p className="text-sm">Mean & expected years of schooling</p>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary">Living Standards</p>
                  <p className="text-sm">GNI per capita (PPP)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                HDI ranges from 0 to 1. Countries are classified as: Low (&lt;0.550), Medium (0.550-0.699), High (0.700-0.799), Very High (≥0.800).
              </p>
            </NoteCard>
          </ContentSection>

          {/* Measuring Inequality */}
          <ContentSection title="Income Inequality & Distribution">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Development is not just about increasing average income but also about how income is distributed across the population. High inequality can undermine social cohesion and limit the benefits of growth for the poor.
            </p>

            {/* Lorenz Curve Diagram */}
            <LorenzCurveDiagram />

            <AnalysisBlock title="The Gini Coefficient">
              <p className="mb-4">
                The <strong>Gini coefficient</strong> is a numerical measure of inequality derived from the Lorenz Curve:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg text-center mb-4">
                <p className="text-lg font-mono font-semibold">
                  Gini = Area between Lorenz Curve and Line of Equality / Total Area under Line of Equality
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Gini = 0:</strong> Perfect equality (everyone has the same income)</li>
                <li><strong>Gini = 1:</strong> Perfect inequality (one person has all income)</li>
                <li><strong>Typical range:</strong> 0.25-0.35 for Nordic countries, 0.45-0.65 for highly unequal countries</li>
              </ul>
            </AnalysisBlock>

            <NoteCard title="Causes of Income Inequality" className="mt-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Market Forces</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Wage differentials based on skills/education</li>
                    <li>Globalization and technological change</li>
                    <li>Returns to capital vs labor</li>
                    <li>Winner-take-all markets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Structural Factors</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Unequal access to education</li>
                    <li>Inheritance and wealth accumulation</li>
                    <li>Discrimination and barriers</li>
                    <li>Tax and transfer policies</li>
                  </ul>
                </div>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Barriers to Development */}
          <ContentSection title="Barriers to Economic Development">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Developing countries face numerous obstacles that hinder their path to prosperity. Understanding these barriers is essential for designing effective development strategies.
            </p>

            <div className="space-y-4 mb-6">
              <NoteCard title="1. Poverty Trap & Vicious Cycles">
                <p className="text-sm text-muted-foreground mb-2">
                  Low income → Low savings → Low investment → Low productivity → Low income
                </p>
                <p className="text-sm">
                  Countries caught in poverty traps cannot generate sufficient domestic savings to finance the investment needed for growth.
                </p>
              </NoteCard>

              <NoteCard title="2. Lack of Physical Capital">
                <p className="text-sm text-muted-foreground mb-2">
                  Insufficient infrastructure: roads, ports, electricity, telecommunications.
                </p>
                <p className="text-sm">
                  Without basic infrastructure, production costs are high, markets remain fragmented, and foreign investment is deterred.
                </p>
              </NoteCard>

              <NoteCard title="3. Human Capital Deficiency">
                <p className="text-sm text-muted-foreground mb-2">
                  Low education levels, poor health outcomes, brain drain.
                </p>
                <p className="text-sm">
                  A poorly educated, unhealthy workforce cannot adopt new technologies or improve productivity. Skilled workers emigrate to developed countries.
                </p>
              </NoteCard>

              <NoteCard title="4. Institutional Weaknesses">
                <p className="text-sm text-muted-foreground mb-2">
                  Corruption, weak rule of law, insecure property rights, political instability.
                </p>
                <p className="text-sm">
                  Poor governance deters investment, misallocates resources, and perpetuates inequality.
                </p>
              </NoteCard>

              <NoteCard title="5. Primary Product Dependency">
                <p className="text-sm text-muted-foreground mb-2">
                  Reliance on commodity exports with volatile prices and declining terms of trade.
                </p>
                <p className="text-sm">
                  The Prebisch-Singer hypothesis suggests that primary product prices decline relative to manufactured goods over time, trapping commodity exporters in poverty.
                </p>
              </NoteCard>

              <NoteCard title="6. Debt Burden">
                <p className="text-sm text-muted-foreground mb-2">
                  High external debt diverts resources from development to debt servicing.
                </p>
                <p className="text-sm">
                  Interest payments reduce funds available for education, health, and infrastructure investment.
                </p>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Strategies for Development */}
          <ContentSection title="Development Strategies">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Different approaches to development have been tried with varying degrees of success.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Inward-Looking Strategies">
                <h4 className="font-semibold text-primary mb-2">Import Substitution Industrialization (ISI)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Protect domestic industries from foreign competition through tariffs and quotas to develop local manufacturing capacity.
                </p>
                <p className="text-sm text-green-600">✓ Develops domestic industry, reduces import dependence</p>
                <p className="text-sm text-red-600 mt-1">✗ Inefficiency, lack of competition, limited scale, retaliation</p>
              </NoteCard>

              <NoteCard title="Outward-Looking Strategies">
                <h4 className="font-semibold text-primary mb-2">Export-Led Growth</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Focus on producing goods for export markets, using comparative advantage and economies of scale to drive growth.
                </p>
                <p className="text-sm text-green-600">✓ Access to large markets, technology transfer, competition drives efficiency</p>
                <p className="text-sm text-red-600 mt-1">✗ Vulnerability to external shocks, race to bottom, environmental costs</p>
              </NoteCard>
            </div>

            <NoteCard title="Role of Foreign Aid" variant="info" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Arguments For</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Fills savings-investment gap</li>
                    <li>Finances essential public goods</li>
                    <li>Provides technical expertise</li>
                    <li>Humanitarian obligation of rich countries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Arguments Against</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>May create dependency</li>
                    <li>Can prop up corrupt governments</li>
                    <li>Often tied to donor interests</li>
                    <li>May distort local markets</li>
                  </ul>
                </div>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Globalization */}
          <ContentSection title="Globalization & Development">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Globalization</strong> refers to the increasing integration of economies through trade, investment, technology, and migration. It has profound implications for development.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Benefits of Globalization" variant="success">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Trade gains:</strong> Specialization based on comparative advantage</li>
                  <li><strong>FDI inflows:</strong> Capital, technology, and jobs</li>
                  <li><strong>Knowledge transfer:</strong> Access to global ideas and innovations</li>
                  <li><strong>Consumer benefits:</strong> Lower prices, greater variety</li>
                  <li><strong>Growth acceleration:</strong> Integration with global value chains</li>
                </ul>
              </NoteCard>

              <NoteCard title="Costs of Globalization" variant="danger">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Increased inequality:</strong> Winners and losers within countries</li>
                  <li><strong>Job displacement:</strong> Competition from low-wage economies</li>
                  <li><strong>Vulnerability:</strong> Exposure to external shocks and contagion</li>
                  <li><strong>Cultural erosion:</strong> Homogenization of cultures</li>
                  <li><strong>Environmental damage:</strong> Race to bottom on regulations</li>
                </ul>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Trading Blocs */}
          <ContentSection title="Trading Blocs & Regional Integration">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Countries often form regional trading agreements to reduce barriers among members while maintaining common policies toward non-members.
            </p>

            <NoteCard title="Types of Trading Blocs" className="mb-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-sm font-semibold min-w-[120px]">Free Trade Area</div>
                  <p className="text-sm text-muted-foreground">Members eliminate tariffs between themselves but maintain independent external tariffs (e.g., NAFTA/USMCA)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-sm font-semibold min-w-[120px]">Customs Union</div>
                  <p className="text-sm text-muted-foreground">FTA + common external tariff on non-members (e.g., Southern African Customs Union)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-sm font-semibold min-w-[120px]">Common Market</div>
                  <p className="text-sm text-muted-foreground">Customs Union + free movement of labor and capital (e.g., early European Community)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-sm font-semibold min-w-[120px]">Economic Union</div>
                  <p className="text-sm text-muted-foreground">Common Market + harmonized economic policies (e.g., European Union)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-sm font-semibold min-w-[120px]">Monetary Union</div>
                  <p className="text-sm text-muted-foreground">Economic Union + common currency and central bank (e.g., Eurozone)</p>
                </div>
              </div>
            </NoteCard>

            <AnalysisBlock title="Trade Creation vs Trade Diversion">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Trade Creation (Good)</h4>
                  <p className="text-sm">
                    When bloc formation leads to replacement of higher-cost domestic production with lower-cost imports from a member country. This improves efficiency and welfare.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Trade Diversion (Bad)</h4>
                  <p className="text-sm">
                    When trade shifts from a lower-cost non-member to a higher-cost member because of preferential tariffs. This reduces global efficiency.
                  </p>
                </div>
              </div>
              <p className="text-sm mt-4">
                <strong>Net welfare effect:</strong> Trading blocs are beneficial if trade creation exceeds trade diversion.
              </p>
            </AnalysisBlock>
          </ContentSection>

          {/* Exam Tips */}
          <ContentSection title="Exam Preparation">
            <ExamTipBox title="Evaluating Development Policies">
              <p className="mb-2">When discussing development strategies:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li><strong>Context matters:</strong> What works in one country may not work in another</li>
                <li><strong>Time horizons:</strong> Short-run costs vs long-run gains</li>
                <li><strong>Distribution:</strong> Who benefits and who loses?</li>
                <li><strong>Sustainability:</strong> Environmental and social impacts</li>
                <li><strong>Institutions:</strong> Governance capacity to implement policies</li>
                <li><strong>External factors:</strong> Global economic conditions, commodity prices</li>
              </ol>
            </ExamTipBox>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Development Concepts</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Growth ≠ Development (HDI captures broader welfare)</li>
                    <li>Lorenz Curve and Gini measure inequality</li>
                    <li>Poverty traps create vicious cycles</li>
                    <li>Multiple barriers: capital, institutions, human capital</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Globalization & Trade</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Globalization has winners and losers</li>
                    <li>Trading blocs: FTA → Customs Union → Common Market → Union</li>
                    <li>Trade creation vs trade diversion</li>
                    <li>Development strategies: ISI vs export-led growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentSection>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Development;
