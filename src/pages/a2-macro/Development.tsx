import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import KeyTakeaways from '@/components/KeyTakeaways';
import ExaminerTrap from '@/components/ExaminerTrap';
import { LorenzCurveDiagram } from '@/components/diagrams/LorenzCurveDiagram';
import { KuznetsCurveDiagram } from '@/components/diagrams/KuznetsCurveDiagram';
import { PrebischSingerDiagram } from '@/components/diagrams/PrebischSingerDiagram';
import { HarrodDomarDiagram } from '@/components/diagrams/HarrodDomarDiagram';
import { JCurveMarshallLernerDiagram } from '@/components/diagrams/JCurveMarshallLernerDiagram';
import { ExchangeRateDiagram } from '@/components/diagrams/ExchangeRateDiagram';
import FixedExchangeRateDiagram from '@/components/diagrams/FixedExchangeRateDiagram';
import TradeCreationDiagram from '@/components/diagrams/TradeCreationDiagram';
import TradeDiversionDiagram from '@/components/diagrams/TradeDiversionDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const developmentTakeaways = [
  "Economic Growth ≠ Economic Development; Growth is ↑Real GDP; Development is qualitative improvement in living standards",
  "HDI combines Health (life expectancy), Education (schooling years), and Income (GNI per capita PPP) — range 0 to 1",
  "Lorenz Curve shows income distribution; Gini Coefficient = A/(A+B) where A is area between curve and equality line",
  "Kuznets Curve: inequality rises then falls during development (inverted-U) — conditional on policy choices, not deterministic",
  "Marshall-Lerner Condition: |PED_x| + |PED_m| > 1 for depreciation to improve trade balance; J-Curve shows short-run worsening before improvement",
  "Trade Blocs: Free Trade Area → Customs Union → Common Market → Economic Union → Monetary Union (increasing integration)",
];

const Development = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-2 font-playfair">
            Economic Development & Global Integration
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A2 Level Macroeconomics • CIE 9708 Syllabus (2026-2028)
          </p>

          {/* Key Takeaways Summary */}
          <KeyTakeaways takeaways={developmentTakeaways} />

          {/* Section 1: Economic Growth vs Development */}
          <ContentSection title="Section 8.1: Economic Growth vs Economic Development">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              The fundamental distinction between <strong>economic growth</strong> and <strong>economic development</strong> represents one of the most critical conceptual frameworks in development economics and carries significant implications for policy formulation. <em>Economic growth</em> is defined strictly as an increase in real Gross Domestic Product (GDP) over a specified time period—a quantitative expansion of the productive capacity and actual output of an economy, typically expressed as a percentage change in real GDP or real GDP per capita. This metric, while essential for measuring the expansion of economic activity, is inherently limited in its scope: it captures the aggregate value of final goods and services produced within a nation's borders but reveals nothing about the distribution of that output, the sustainability of the growth process, or its impact on human welfare. Growth may be driven by unsustainable resource extraction, may accrue predominantly to a narrow elite, or may coincide with environmental degradation and declining quality of life for the majority of the population.
            </p>
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              <strong>Economic development</strong>, by contrast, encompasses a far broader and more normative concept: the sustained improvement in living standards, reduction of poverty, and enhancement of human capabilities across multiple dimensions of wellbeing. Development implies not merely quantitative expansion but qualitative transformation—structural changes in the economy (the transition from primary to secondary and tertiary sectors), improvements in health and life expectancy, expansion of educational attainment, greater gender equality, enhanced environmental sustainability, and the strengthening of institutions that protect rights and enable participation. As Amartya Sen's influential 'capabilities approach' articulates, development should be understood as the expansion of human freedoms—the genuine opportunities that individuals possess to lead lives they have reason to value, encompassing political participation, economic security, social opportunities, and protective guarantees against vulnerability.
            </p>

            <NoteCard title="Human Development Index (HDI)" type="concept" className="mb-2">
              <p className="text-sm text-muted-foreground mb-2">
                The <strong>United Nations Development Programme (UNDP)</strong> created the HDI to provide a composite measure of development across three fundamental dimensions of human flourishing:
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-2">
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary text-sm">Health Dimension</p>
                  <p className="text-xs text-muted-foreground">Life expectancy at birth</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Proxy for longevity & health</p>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary text-sm">Education Dimension</p>
                  <p className="text-xs text-muted-foreground">Mean years of schooling (adults)</p>
                  <p className="text-xs text-muted-foreground">Expected years of schooling (children)</p>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <p className="font-semibold text-primary text-sm">Standard of Living</p>
                  <p className="text-xs text-muted-foreground">GNI per capita (PPP USD)</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Adjusted for purchasing power</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Classification:</strong> Very High HDI (≥0.800), High (0.700-0.799), Medium (0.550-0.699), Low (&lt;0.550). The geometric mean of normalised indices for each dimension produces the final HDI score (0 to 1).
              </p>
            </NoteCard>

            <AnalysisBlock title="Chain of Analysis: Growth Without Development (AO3)">
              <p className="text-sm text-foreground/80 text-justify mb-1">
                The phenomenon of <em>growth without development</em> demonstrates why GDP expansion is a necessary but insufficient condition for genuine welfare improvement. Consider an economy experiencing 8% annual GDP growth driven by commodity exports: <strong>Initial Impact</strong>—resource extraction generates foreign exchange earnings and fiscal revenues, boosting headline growth figures. <strong>However</strong>, if the extractive sector is capital-intensive and employs few workers, if revenues are captured by political elites or repatriated by multinational corporations, if environmental degradation imposes health costs on local populations, and if the commodity boom induces 'Dutch Disease' (real exchange rate appreciation undermining non-resource tradeable sectors), then the growth episode may deliver minimal improvements—or even deterioration—in human development indicators. This pattern, observed in many resource-rich developing nations, illustrates the critical importance of <em>inclusive growth</em>—economic expansion that creates broad-based opportunities, reduces inequality, and translates into measurable improvements in HDI components.
              </p>
            </AnalysisBlock>
          </ContentSection>

          {/* Section 2: Measuring Inequality */}
          <ContentSection title="Section 8.2: Income Inequality & Distribution">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              The distribution of income and wealth within an economy represents a fundamental dimension of development that aggregate growth statistics fail to capture. High levels of inequality undermine social cohesion, reduce the poverty-reducing impact of growth (since growth accrues disproportionately to those already wealthy), and may generate political instability that undermines investment and long-term prosperity. The measurement and analysis of inequality therefore occupy a central position in development economics, with the <strong>Lorenz Curve</strong> and <strong>Gini Coefficient</strong> serving as the primary analytical tools.
            </p>
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              The <strong>Lorenz Curve</strong> provides a graphical representation of income distribution by plotting the cumulative percentage of total income received against the cumulative percentage of the population, ranked from poorest to richest. A perfectly equal distribution would produce a 45-degree 'Line of Equality' (the bottom 20% receiving 20% of income, the bottom 50% receiving 50%, and so forth). The actual Lorenz Curve lies below this line, with greater deviation indicating greater inequality. The <strong>Gini Coefficient</strong> quantifies this deviation as the ratio of the area between the Lorenz Curve and the Line of Equality to the total area under the Line of Equality, producing a value between 0 (perfect equality) and 1 (perfect inequality, where one individual receives all income).
            </p>

            <LorenzCurveDiagram />

            <div className="my-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20">
              <p className="text-center text-white/80 text-sm font-mono mb-2">
                <InlineMath math="\text{Gini Coefficient} = \frac{A}{A + B}" />
              </p>
              <p className="text-center text-white/60 text-xs">
                Where <strong>A</strong> = area between Line of Equality and Lorenz Curve; <strong>B</strong> = area under Lorenz Curve
              </p>
            </div>

            <KuznetsCurveDiagram />

            {/* Zero-Gap Logic Chain: Kuznets Curve */}
            <div className="mt-0 p-4 bg-muted/20 border-l-2 border-cambridge-orange rounded-r-lg">
              <h4 className="font-serif font-semibold text-cambridge-orange text-sm mb-2">Zero-Gap Logic Chain: The Kuznets Curve (A2 Standard)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                <strong className="text-foreground">Variable Change:</strong> Economy begins industrialisation from low-income agricultural base → 
                <strong className="text-foreground"> Stage I Rising Inequality:</strong> Dual economy emerges with high-wage modern sector (urban manufacturing) alongside low-wage traditional sector (rural agriculture) → Labour migration is incomplete → Wage dispersion widens → Capital accumulates in industrial elite → Gini coefficient rises → 
                <strong className="text-foreground"> Stage II Peak:</strong> Modern sector reaches critical mass; labour surplus fully absorbed; tight labour markets compress wages from below → 
                <strong className="text-foreground"> Stage III Falling Inequality:</strong> Progressive taxation expands as tax base grows; welfare state develops; mass education creates human capital equality → Labour share of national income rises → 
                <strong className="text-foreground"> Final Equilibrium:</strong> Mature economy with lower inequality and higher mean income than agricultural baseline → <strong>Inverted-U complete (conditional on policy choices)</strong>.
              </p>
            </div>

            <AnalysisBlock title="The Kuznets Hypothesis: Critical Evaluation (AO4)">
              <p className="text-sm text-foreground/80 text-justify">
                Simon Kuznets (1955) proposed that income inequality follows an <em>inverted-U</em> trajectory during economic development: inequality initially rises during early industrialisation (as a modern, high-wage sector emerges alongside traditional, low-productivity agriculture—the 'dual economy' structure analysed by Arthur Lewis) before eventually declining as the modern sector absorbs surplus labour, education spreads, and progressive taxation/welfare states emerge. <strong>However</strong>, the empirical evidence for this hypothesis is contested. Cross-country data reveals enormous variation in inequality trajectories; some East Asian economies (South Korea, Taiwan) achieved 'growth with equity' through land reform and education investment, while Latin American nations exhibited persistent high inequality despite substantial growth episodes. The policy implication is profound: inequality is not an 'iron law' of development but is shaped by policy choices—labour market institutions, fiscal systems, asset redistribution, and human capital investment can all modify the growth-inequality relationship. The Kuznets Curve, therefore, should be understood not as a deterministic prediction but as a <em>conditional relationship</em> mediated by political economy and institutional context.
              </p>
            </AnalysisBlock>
            
            {/* Senior Examiner's Depends-On Evaluation */}
            <div className="mt-4 p-4 bg-slate-800/50 border border-amber-500/30 rounded-lg">
              <h4 className="font-serif font-semibold text-amber-400 text-sm mb-2">Senior Examiner's "Depends-On" Analysis (AO4)</h4>
              <p className="text-sm text-foreground/90 leading-relaxed text-justify">
                <strong>The validity of the Kuznets hypothesis depends critically on:</strong> (1) <em>Policy Regime:</em> Countries pursuing active redistribution (land reform, progressive taxation, universal education) can "flatten" or "break" the curve—East Asian NICs provide counter-evidence to Latin American trajectories. (2) <em>Speed of Structural Transformation:</em> Rapid industrialisation compresses the rising phase; slow transformation prolongs inequality. (3) <em>Global Integration:</em> Openness to FDI and trade may accelerate growth but also widen skill premiums, potentially steepening the upward phase. (4) <em>Environmental Kuznets Curve Extension:</em> Similar inverted-U logic applied to pollution suggests environmental degradation peaks mid-development—equally contested empirically. <strong>Conclusion:</strong> A* candidates recognise the Kuznets Curve as a <em>stylised fact subject to policy mediation</em>, not an iron law of development.
              </p>
            </div>
          </ContentSection>

          {/* Section 3: Balance of Payments Correction */}
          <ContentSection title="Section 8.3: Policies to Correct Balance of Payments Disequilibrium">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              A persistent <strong>Current Account deficit</strong> represents a situation where a nation's expenditure on imports of goods, services, and income payments abroad exceeds its receipts from exports and income inflows—requiring financing through capital account inflows (foreign investment, borrowing) or depletion of foreign exchange reserves. While short-run deficits may be benign or even beneficial (reflecting productive investment financed by foreign savings), persistent and large deficits generate vulnerability: dependence on capital inflows that may reverse suddenly, accumulation of external debt requiring future servicing, and potential pressure on the exchange rate. Corrective policies fall into two broad categories: <strong>Expenditure-Reducing</strong> policies that decrease overall domestic spending (and hence imports), and <strong>Expenditure-Switching</strong> policies that redirect spending from foreign to domestic goods.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <NoteCard title="Expenditure-Reducing Policies" className="mb-0">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mechanism:</strong> Reduce aggregate demand to lower import expenditure.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li><strong>Contractionary Fiscal Policy:</strong> Reduced government spending, higher taxes → ↓AD → ↓Y → ↓M</li>
                  <li><strong>Contractionary Monetary Policy:</strong> Higher interest rates → ↓C, ↓I → ↓AD → ↓M</li>
                </ul>
                <p className="text-xs text-red-400 mt-2 italic">
                  Trade-off: These policies impose recessionary costs—higher unemployment, lower growth—to achieve external balance.
                </p>
              </NoteCard>

              <NoteCard title="Expenditure-Switching Policies" type="exam-tip" className="mb-0">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mechanism:</strong> Make domestic goods relatively cheaper/foreign goods dearer.
                </p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li><strong>Currency Depreciation/Devaluation:</strong> ↓ER → Exports cheaper, imports dearer</li>
                  <li><strong>Protectionist Measures:</strong> Tariffs, quotas raise import prices</li>
                  <li><strong>Export Subsidies:</strong> Lower export prices in foreign markets</li>
                </ul>
                <p className="text-xs text-cyan-400 mt-2 italic">
                  Advantage: Can improve CA without directly reducing domestic output—switching, not shrinking.
                </p>
              </NoteCard>
            </div>

            <AnalysisBlock title="The Marshall-Lerner Condition & J-Curve Effect (AO3)">
              <p className="text-sm text-foreground/80 text-justify mb-2">
                The effectiveness of currency depreciation in improving the Current Account depends critically on the <strong>Marshall-Lerner Condition</strong>: depreciation will improve the trade balance if and only if the sum of the price elasticities of demand for exports and imports exceeds unity:
              </p>
              <div className="text-center my-3">
                <BlockMath math="|PED_X| + |PED_M| > 1" />
              </div>
              <p className="text-sm text-foreground/80 text-justify mb-2">
                <strong>Chain of Reasoning:</strong> When the domestic currency depreciates, export prices fall in foreign currency terms (making exports more competitive) while import prices rise in domestic currency terms (making imports more expensive). If demand is sufficiently elastic, the volume effect (more exports, fewer imports) will outweigh the adverse price effect (higher import prices in domestic terms), generating net improvement in the trade balance. <strong>However</strong>, in the short run, demand is typically <em>inelastic</em>: existing contracts are fixed, consumers and firms cannot immediately substitute, and search costs delay adjustment. This produces the characteristic <strong>J-Curve effect</strong>: the Current Account initially <em>worsens</em> following depreciation (as the value effect dominates the volume effect), before eventually improving as elasticities increase over time (12-24 months typically).
              </p>
            </AnalysisBlock>

            <JCurveMarshallLernerDiagram />

            {/* Zero-Gap Logic Chain: J-Curve in Development Context */}
            <div className="mt-0 p-4 bg-muted/20 border-l-2 border-cambridge-cyan rounded-r-lg">
              <h4 className="font-serif font-semibold text-cambridge-cyan text-sm mb-2">Zero-Gap Logic Chain: Depreciation & Development (A2 Standard)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                <strong className="text-foreground">Policy Action:</strong> Developing country devalues currency to correct CA deficit → 
                <strong className="text-foreground"> Short-Run (J-Curve Trough):</strong> Inelastic demand + fixed contracts → Import bill rises in domestic currency → Trade balance initially worsens → 
                <strong className="text-foreground"> Medium-Term Adjustment:</strong> If Marshall-Lerner satisfied (<InlineMath math="|PED_X| + |PED_M| > 1" />), export volumes rise, import volumes fall → Trade balance improves → 
                <strong className="text-foreground"> Development Complications:</strong> Imported inflation erodes competitiveness gains; foreign-currency debt burden rises; supply-side constraints limit export response; "commodity trap" if export basket is price-inelastic → 
                <strong className="text-foreground"> Policy Implication:</strong> Depreciation alone insufficient for structural CA correction—requires complementary supply-side investment in export diversification, infrastructure, and human capital.
              </p>
            </div>

            <NoteCard title="Senior Examiner's Evaluation: Limits of Depreciation (AO4)" type="concept" className="mb-2">
              <p className="text-sm text-foreground/80 text-justify">
                While depreciation can improve the Current Account when the Marshall-Lerner condition is satisfied, several limitations constrain its effectiveness as a policy tool. <strong>First</strong>, depreciation raises import prices, directly contributing to <em>imported inflation</em>—higher costs for imported raw materials and intermediate goods feed through to domestic prices, eroding competitiveness gains and imposing welfare costs on consumers. <strong>Second</strong>, trading partners may retaliate with competitive devaluations, initiating a 'beggar-thy-neighbour' dynamic that leaves all parties worse off. <strong>Third</strong>, for many developing economies with limited export diversification, supply-side constraints (infrastructure bottlenecks, quality standards) may prevent firms from expanding export volumes even when price competitiveness improves. <strong>Fourth</strong>, where external debt is denominated in foreign currency, depreciation increases the domestic currency value of debt obligations, potentially triggering a debt crisis. The conclusion is that depreciation is a <em>conditional</em> tool whose efficacy depends on structural characteristics—elasticity conditions, supply capacity, inflation pass-through, and external debt exposure.
              </p>
            </NoteCard>
          </ContentSection>

          {/* Section 4: Exchange Rate Systems */}
          <ContentSection title="Section 8.4: Exchange Rate Systems: Fixed, Floating, and Managed">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              The <strong>exchange rate</strong>—the price of one currency in terms of another—serves as a critical macroeconomic variable linking domestic and international markets, influencing trade competitiveness, capital flows, inflation, and monetary policy transmission. Nations must choose an <em>exchange rate regime</em> that determines how this price is set: through market forces (floating), government intervention (fixed), or a combination (managed float). Each system presents distinct trade-offs that carry profound implications for macroeconomic management and development strategy.
            </p>
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              Under a <strong>Free-Floating (Flexible) Exchange Rate</strong> system, the exchange rate is determined entirely by market forces—the intersection of supply and demand for the currency in foreign exchange markets. Demand for the domestic currency derives from foreigners seeking to purchase exports, invest in domestic assets, or engage in speculation; supply derives from domestic residents seeking foreign currency for imports, foreign investment, or speculation. When demand exceeds supply, the currency <em>appreciates</em>; when supply exceeds demand, it <em>depreciates</em>. The floating system provides <strong>automatic stabilisation</strong>: a Current Account deficit generates excess supply of domestic currency (as import payments exceed export receipts), causing depreciation that improves competitiveness and corrects the imbalance. This automatic adjustment mechanism frees monetary policy for domestic objectives (the central bank can set interest rates for internal balance without defending a fixed parity) and insulates the economy from certain external shocks.
            </p>

            <ExchangeRateDiagram />

            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              Under a <strong>Fixed Exchange Rate</strong> system, the government or central bank commits to maintaining the exchange rate at a predetermined level (a 'peg') by intervening in foreign exchange markets. If market forces would otherwise cause depreciation (excess supply of domestic currency), the central bank must <em>sell foreign exchange reserves and buy domestic currency</em> to maintain the peg; if appreciation pressure exists, it must <em>buy foreign exchange and sell domestic currency</em>. This system provides <strong>exchange rate certainty</strong> that facilitates international trade and investment, imposes <strong>anti-inflationary discipline</strong> (the commitment to the peg constrains monetary expansion), and anchors expectations in economies with weak credibility. However, it requires adequate foreign exchange reserves to defend the peg, sacrifices monetary policy autonomy (interest rates must be adjusted to maintain the peg rather than for domestic stabilisation), and may lead to <em>speculative attacks</em> if markets perceive the peg as unsustainable.
            </p>

            <FixedExchangeRateDiagram />

            <AnalysisBlock title="The Impossible Trinity (Trilemma) – AO3">
              <p className="text-sm text-foreground/80 text-justify mb-2">
                The <strong>Mundell-Fleming Trilemma</strong> articulates a fundamental constraint on macroeconomic policy: it is impossible to simultaneously achieve all three of the following objectives:
              </p>
              <div className="grid md:grid-cols-3 gap-2 my-3">
                <div className="text-center p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <p className="font-semibold text-cyan-400 text-sm">Fixed Exchange Rate</p>
                  <p className="text-xs text-muted-foreground">Stable currency peg</p>
                </div>
                <div className="text-center p-2 bg-amber-500/10 rounded-lg border border-amber-500/30">
                  <p className="font-semibold text-amber-400 text-sm">Free Capital Mobility</p>
                  <p className="text-xs text-muted-foreground">Open capital account</p>
                </div>
                <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                  <p className="font-semibold text-emerald-400 text-sm">Independent Monetary Policy</p>
                  <p className="text-xs text-muted-foreground">Autonomous interest rates</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 text-justify">
                <strong>Chain of Reasoning:</strong> If capital is freely mobile and the exchange rate is fixed, any attempt to lower domestic interest rates below world rates triggers capital outflow → excess supply of domestic currency → depreciation pressure → central bank must raise rates to defend the peg, eliminating monetary autonomy. Nations must therefore choose: (1) Fixed rate + capital mobility → sacrifice monetary independence (e.g., Eurozone members); (2) Fixed rate + monetary autonomy → impose capital controls (e.g., China historically); (3) Capital mobility + monetary autonomy → allow floating rates (e.g., UK, USA). This framework explains why many developing economies pursuing fixed pegs have experienced currency crises when speculative capital flows overwhelmed their reserves.
              </p>
            </AnalysisBlock>
          </ContentSection>

          {/* Section 5: Characteristics of Developing Economies */}
          <ContentSection title="Section 8.5: Characteristics of Economies at Different Levels of Development">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              Economies at different stages of development exhibit systematic structural differences that both reflect and perpetuate development gaps. Understanding these characteristics—the <strong>dual economy</strong> structure, demographic patterns, sectoral composition, and institutional frameworks—is essential for designing appropriate development strategies and evaluating policy interventions. The contrast between <em>More Economically Developed Countries (MEDCs)</em> and <em>Less Economically Developed Countries (LEDCs)</em> illuminates both the challenges facing developing nations and the structural transformations that successful development entails.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <NoteCard title="Characteristics of LEDCs" className="mb-0">
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li><strong>Sectoral Structure:</strong> Large primary sector (agriculture, extractives); small industrial base</li>
                  <li><strong>Demographics:</strong> High fertility rates, young dependency ratios, rapid population growth</li>
                  <li><strong>Dual Economy:</strong> Modern formal sector coexists with large informal/subsistence sector</li>
                  <li><strong>Low Savings Rates:</strong> Limited capital accumulation; dependence on external finance</li>
                  <li><strong>Primary Export Dependency:</strong> Narrow export base; vulnerability to commodity price shocks</li>
                  <li><strong>Institutional Weakness:</strong> Corruption, weak property rights, limited state capacity</li>
                  <li><strong>Human Capital Gaps:</strong> Low educational attainment; health deficits; brain drain</li>
                </ul>
              </NoteCard>

              <NoteCard title="Characteristics of MEDCs" type="concept" className="mb-0">
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li><strong>Sectoral Structure:</strong> Services-dominated economy; advanced manufacturing</li>
                  <li><strong>Demographics:</strong> Low fertility; ageing population; old-age dependency burden</li>
                  <li><strong>Integrated Economy:</strong> Formal employment predominates; comprehensive welfare systems</li>
                  <li><strong>High Savings & Investment:</strong> Deep financial markets; access to capital</li>
                  <li><strong>Diversified Exports:</strong> Manufactures, services, technology; terms of trade advantage</li>
                  <li><strong>Strong Institutions:</strong> Rule of law, secure property rights, effective governance</li>
                  <li><strong>Human Capital Abundance:</strong> Universal education; advanced health systems</li>
                </ul>
              </NoteCard>
            </div>

            <HarrodDomarDiagram />

            <AnalysisBlock title="The Lewis Dual-Sector Model (AO3)">
              <p className="text-sm text-foreground/80 text-justify">
                Arthur Lewis's seminal model conceptualises developing economies as comprising two distinct sectors: a <strong>traditional agricultural sector</strong> characterised by surplus labour (marginal productivity approaching zero), subsistence wages, and low capital intensity; and a <strong>modern capitalist sector</strong> (industry/urban) with higher productivity, capital accumulation, and profit-driven expansion. <strong>Chain of Reasoning:</strong> The modern sector can draw labour from the traditional sector at the subsistence wage (plus a small premium for urban costs) without facing rising labour costs—an 'unlimited supply of labour' that sustains high profits and capital accumulation. This drives self-reinforcing growth until surplus labour is exhausted, at which point wages begin rising (the 'Lewis Turning Point'). The model explains rapid industrialisation in economies like China and highlights the importance of <em>structural transformation</em>—the reallocation of labour from low-productivity to high-productivity sectors—as a driver of development. <strong>Limitations</strong> include its assumption that capital accumulation automatically generates employment, neglect of technological progress and human capital, and the reality that urban unemployment (not absorption) often characterises developing economies.
              </p>
            </AnalysisBlock>

            <PrebischSingerDiagram />

            <NoteCard title="The Prebisch-Singer Hypothesis: Policy Implications (AO4)" type="exam-tip" className="mb-2">
              <p className="text-sm text-foreground/80 text-justify">
                Raúl Prebisch and Hans Singer independently argued that the <strong>terms of trade</strong> for primary commodity exporters tend to decline secularly relative to manufactured goods exporters. The mechanism operates through several channels: (1) <strong>Low income elasticity of demand (YED)</strong> for primary products—as global incomes rise, demand for food and raw materials grows more slowly than for manufactures and services (Engel's Law); (2) <strong>Technological substitution</strong>—synthetic materials replace natural commodities; (3) <strong>Asymmetric market power</strong>—manufacturers in developed nations can maintain prices through oligopolistic structures, while commodity markets are competitive. <strong>Policy Implication:</strong> This hypothesis provided intellectual justification for <em>Import Substitution Industrialisation (ISI)</em>—the deliberate promotion of domestic manufacturing through tariff protection to escape the 'primary products trap.' While ISI achieved some successes (Latin American industrialisation), its limitations—inefficiency, lack of competition, balance of payments crises—led to subsequent liberalisation. Modern development strategy emphasises <strong>diversification</strong> (export sophistication) and <strong>value addition</strong> (processing commodities domestically) rather than autarkic protection.
              </p>
            </NoteCard>
          </ContentSection>

          {/* Section 6: Globalisation */}
          <ContentSection title="Section 8.6: Globalisation – Trends, Drivers, and Development Impact">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              <strong>Globalisation</strong> refers to the increasing integration and interdependence of national economies through the intensification of cross-border flows of goods, services, capital, technology, and (to a lesser extent) labour. This process, accelerating dramatically since the 1980s, has been driven by multiple reinforcing factors: <strong>technological change</strong> (containerisation, telecommunications, digital platforms) that dramatically reduced transaction costs; <strong>policy liberalisation</strong> (trade agreements, capital account opening, deregulation) that removed barriers to international exchange; and <strong>organisational innovation</strong> (global value chains, multinational corporation strategies, outsourcing) that fragmented production across borders. The development implications of globalisation are contested, generating both enthusiastic advocacy (emphasising efficiency gains, technology transfer, poverty reduction) and critical analysis (highlighting inequality, vulnerability, and sovereignty erosion).
            </p>

            {/* Causes of Globalisation */}
            <NoteCard title="The Five Drivers of Globalisation" className="mb-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <p className="font-semibold text-primary text-xs">1. Trade Liberalisation</p>
                    <p className="text-xs text-muted-foreground">GATT/WTO rounds reduced average tariffs from 40% (1947) to {'<'}5% today; bilateral FTAs proliferate</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <p className="font-semibold text-primary text-xs">2. Capital Account Liberalisation</p>
                    <p className="text-xs text-muted-foreground">Removal of restrictions on cross-border investment enables FDI and portfolio flows</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <p className="font-semibold text-primary text-xs">3. Technological Revolution</p>
                    <p className="text-xs text-muted-foreground">ICT, containerisation, and digital platforms slashed communication and transport costs</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <p className="font-semibold text-secondary text-xs">4. Transnational Corporations (TNCs)</p>
                    <p className="text-xs text-muted-foreground">Fragmented production across Global Value Chains; intra-firm trade now ~30% of world trade</p>
                  </div>
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <p className="font-semibold text-secondary text-xs">5. Institutional Framework</p>
                    <p className="text-xs text-muted-foreground">WTO dispute resolution, IMF/World Bank conditionality, regional agreements create rule-based trading system</p>
                  </div>
                </div>
              </div>
            </NoteCard>

            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <NoteCard title="Benefits of Globalisation for Development" className="mb-0">
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li><strong>Comparative Advantage Gains:</strong> Specialisation improves allocative efficiency; consumers access cheaper, diverse goods</li>
                  <li><strong>Foreign Direct Investment (FDI):</strong> Capital inflows finance investment; technology and management practices transfer</li>
                  <li><strong>Global Value Chain Integration:</strong> Developing nations can specialise in labour-intensive segments; learn-by-exporting</li>
                  <li><strong>Poverty Reduction:</strong> Export-oriented growth created millions of manufacturing jobs (China, Vietnam, Bangladesh)</li>
                  <li><strong>Knowledge Diffusion:</strong> Access to global ideas, technologies, best practices accelerates catch-up</li>
                </ul>
              </NoteCard>

              <NoteCard title="Costs & Risks of Globalisation" type="exam-tip" className="mb-0">
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li><strong>Increased Inequality:</strong> Skilled workers/capital owners gain; low-skilled workers in MEDCs face deindustrialisation</li>
                  <li><strong>External Vulnerability:</strong> Integration exposes economies to global shocks; 'sudden stops' of capital</li>
                  <li><strong>Race to the Bottom:</strong> Competition for FDI may erode labour standards, environmental regulations, tax bases</li>
                  <li><strong>Structural Unemployment:</strong> Import competition displaces workers; adjustment costs concentrated</li>
                  <li><strong>Sovereignty Constraints:</strong> Policy space narrowed by trade agreements, investor protections, capital mobility</li>
                </ul>
              </NoteCard>
            </div>

            {/* LEDCs vs MEDCs Analysis */}
            <AnalysisBlock title="Globalisation: Asymmetric Impacts on LEDCs vs MEDCs (AO3/AO4)">
              <div className="space-y-3 text-sm text-foreground/80">
                <p className="text-justify">
                  <strong className="text-cambridge-cyan">For LEDCs (Benefits):</strong> Access to MEDC markets enables export-led growth; FDI provides scarce capital and technology transfer; integration into global value chains creates manufacturing employment; remittances from migrant workers provide foreign exchange; access to imported capital goods accelerates industrialisation.
                </p>
                <p className="text-justify">
                  <strong className="text-cambridge-orange">For LEDCs (Costs):</strong> "Commodity trap" — primary exporters face declining ToT (Prebisch-Singer); volatile capital flows trigger boom-bust cycles; infant industries cannot compete against established MNCs; brain drain depletes human capital; environmental degradation as pollution-intensive industries relocate; conditionality from IFIs constrains policy autonomy.
                </p>
                <p className="text-justify">
                  <strong className="text-cambridge-green">For MEDCs (Benefits):</strong> Access to cheaper consumer goods raises real wages; offshoring reduces production costs; investment income flows from overseas assets; expanded export markets for services and high-tech manufactures; migration addresses demographic challenges.
                </p>
                <p className="text-justify">
                  <strong className="text-destructive">For MEDCs (Costs):</strong> Deindustrialisation destroys manufacturing jobs; wage stagnation for low-skilled workers widens inequality; tax base erosion as corporations shift profits offshore; immigration pressures create political backlash; cultural homogenisation concerns.
                </p>
              </div>
            </AnalysisBlock>

            <ExaminerTrap 
              trap="Assuming globalisation benefits all countries equally. This ignores that LEDCs often lack the institutional capacity, infrastructure, and human capital to capture gains, while facing asymmetric bargaining power against TNCs and MEDCs."
              correction="Always specify which type of country (LEDC/MEDC), which sector (tradeable/non-tradeable), and which group (skilled/unskilled workers, capital owners) when evaluating globalisation's distributional impacts."
            />

            <AnalysisBlock title="Chain of Analysis: Transnational Corporations (TNCs) and Development (AO3/AO4)">
              <p className="text-sm text-foreground/80 text-justify mb-3">
                <strong>Positive Chain:</strong> TNC investment brings capital, technology, and management expertise → generates employment (direct and through supply chain linkages) → raises labour productivity and wages → increases tax revenues for host government → demonstration effects and labour mobility spread knowledge to domestic firms → enhances export capacity and foreign exchange earnings.
              </p>
              <p className="text-sm text-foreground/80 text-justify mb-3">
                <strong>Negative Chain:</strong> TNCs may repatriate profits rather than reinvest locally → utilise transfer pricing to minimise tax liabilities → import capital equipment rather than source domestically (limiting backward linkages) → compete with and potentially crowd out domestic firms → exert bargaining power to extract favourable regulatory treatment → create enclave economies with limited development spillovers.
              </p>
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-xs text-foreground/90">
                  <strong className="text-amber-400">Senior Examiner's Evaluation:</strong> The net impact depends critically on host country policies: <em>local content requirements</em>, joint venture mandates, infrastructure co-investment agreements, and effective tax administration can enhance developmental benefits, while weak governance and excessive concessions may allow value extraction without commensurate contribution to development. The distributional consequences—who gains and who loses from TNC presence—require careful analysis beyond aggregate GDP impacts.
                </p>
              </div>
            </AnalysisBlock>
          </ContentSection>

          {/* Section 7: Trading Blocs */}
          <ContentSection title="Section 8.7: Trading Blocs & Regional Integration">
            <p className="text-foreground/90 leading-relaxed text-justify mb-1">
              <strong>Regional Trading Agreements (RTAs)</strong> represent preferential arrangements through which groups of countries reduce trade barriers amongst themselves while maintaining distinct (or common) policies toward non-members. These arrangements have proliferated dramatically since the 1990s, with virtually every WTO member participating in at least one RTA. The analytical framework for evaluating regional integration—distinguishing <strong>trade creation</strong> from <strong>trade diversion</strong>—derives from Jacob Viner's pioneering work and remains central to assessing whether such agreements enhance or diminish global welfare.
            </p>

            <NoteCard title="Hierarchy of Regional Integration" className="mb-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-xs font-semibold min-w-[110px]">Free Trade Area</div>
                  <p className="text-xs text-muted-foreground">Members eliminate tariffs between themselves; each maintains <em>independent</em> external tariffs (e.g., USMCA, EFTA)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-xs font-semibold min-w-[110px]">Customs Union</div>
                  <p className="text-xs text-muted-foreground">FTA + <strong>Common External Tariff (CET)</strong> on non-members (e.g., SACU, Mercosur)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-xs font-semibold min-w-[110px]">Common Market</div>
                  <p className="text-xs text-muted-foreground">Customs Union + <strong>free movement of factors</strong> (labour, capital) (e.g., early European Community)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-xs font-semibold min-w-[110px]">Economic Union</div>
                  <p className="text-xs text-muted-foreground">Common Market + <strong>harmonised economic policies</strong> (regulations, fiscal coordination) (e.g., EU Single Market)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 px-2 py-1 rounded text-xs font-semibold min-w-[110px]">Monetary Union</div>
                  <p className="text-xs text-muted-foreground">Economic Union + <strong>common currency</strong> and central bank (e.g., Eurozone)</p>
                </div>
              </div>
            </NoteCard>

            <TradeCreationDiagram />
            <TradeDiversionDiagram />

            <AnalysisBlock title="Trade Creation vs Trade Diversion: Welfare Analysis (AO3)">
              <p className="text-sm text-foreground/80 text-justify mb-2">
                <strong>Trade Creation</strong> occurs when the formation of a trading bloc leads to replacement of higher-cost <em>domestic</em> production with lower-cost <em>member country</em> imports. This represents an efficiency gain: resources are reallocated toward activities where the bloc possesses comparative advantage. The welfare gain comprises a <em>production effect</em> (resources released from inefficient import-competing sectors) and a <em>consumption effect</em> (lower prices enable higher consumption). <strong>Trade Diversion</strong> occurs when bloc formation causes replacement of lower-cost imports from efficient <em>non-member</em> producers with higher-cost imports from <em>member</em> producers who now benefit from preferential tariff treatment. This represents an efficiency loss: trade is diverted from the globally most efficient source to a less efficient (but tariff-privileged) source.
              </p>
              <p className="text-sm text-foreground/80 text-justify">
                <strong>Net Welfare Effect:</strong> A trading bloc improves global welfare if trade creation exceeds trade diversion; it reduces welfare if diversion dominates. Key determinants include: (1) <em>Initial tariff levels</em>—higher pre-integration tariffs create greater scope for creation; (2) <em>Cost differentials</em>—smaller differences between member and non-member costs limit diversion losses; (3) <em>Breadth of membership</em>—larger blocs encompassing more efficient producers reduce diversion risk; (4) <em>Complementarity vs. competition</em>—blocs among economies with similar production structures generate more diversion than those with complementary structures.
              </p>
            </AnalysisBlock>

            <NoteCard title="Senior Examiner's Conclusion: Second-Best Theory & Trading Blocs (AO4)" type="concept">
              <p className="text-sm text-foreground/80 text-justify">
                The welfare analysis of trading blocs illustrates a fundamental insight from <strong>'second-best' theory</strong>: in a world already distorted by tariffs and other trade barriers, removing some barriers (preferential liberalisation) while retaining others (external tariffs) does not necessarily improve welfare. Free trade—the first-best solution—would eliminate the diversion problem entirely. Regional blocs represent a <em>second-best</em> approach whose net effect depends on the specific configuration of tariffs, cost structures, and trade patterns. For developing economies, bloc participation offers both opportunities (market access, bargaining power, policy coordination) and risks (premature liberalisation, reduced policy flexibility, lock-in to inefficient regional suppliers). The conclusion for examiners is that blanket pronouncements about 'blocs are good/bad' are inadequate; rigorous analysis requires specification of <em>which</em> bloc, <em>which</em> member, and <em>which</em> sector under consideration.
              </p>
            </NoteCard>
          </ContentSection>

          {/* Exam Preparation */}
          <ContentSection title="Examination Preparation: Development & Global Economics">
            <ExamTipBox title="Command Word Intelligence: 'Evaluate' Questions on Development Policy">
              <p className="mb-2 text-sm">When answering A2 evaluation questions on development:</p>
              <ol className="list-decimal list-inside space-y-1 text-xs">
                <li><strong>Identify the policy/phenomenon:</strong> What intervention or process is being evaluated?</li>
                <li><strong>Establish the analytical chain (AO3):</strong> How does the mechanism operate? What are the causal links?</li>
                <li><strong>Specify conditions for success:</strong> Under what circumstances does the policy work well?</li>
                <li><strong>Identify limitations and trade-offs:</strong> What constraints, costs, or unintended consequences exist?</li>
                <li><strong>Consider distributional effects:</strong> Who gains and who loses? Is the impact equitable?</li>
                <li><strong>Assess time horizons:</strong> Short-run vs long-run effects; adjustment costs vs steady-state outcomes.</li>
                <li><strong>Provide a weighted conclusion:</strong> On balance, is the intervention effective? Under what conditions?</li>
              </ol>
            </ExamTipBox>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl mt-4">
              <h3 className="text-lg font-semibold text-foreground mb-3 font-playfair">Chapter Summary: Key Analytical Chains</h3>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Development Concepts</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Growth ≠ Development (HDI captures multidimensional welfare)</li>
                    <li>Gini/Lorenz measure inequality; Kuznets Curve is conditional, not deterministic</li>
                    <li>Harrod-Domar: g = s/k; financing gap central to development strategy</li>
                    <li>Prebisch-Singer: declining ToT for primary exporters → diversification imperative</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">International Economics</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Marshall-Lerner: |PEDₓ| + |PEDₘ| &gt; 1 for depreciation to improve CA</li>
                    <li>J-Curve: short-run worsening before long-run improvement</li>
                    <li>Trilemma: fixed rate + capital mobility + monetary autonomy impossible</li>
                    <li>Trading blocs: net welfare = trade creation − trade diversion</li>
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
