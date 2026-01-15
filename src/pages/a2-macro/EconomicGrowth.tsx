import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import ActualPotentialGrowthDiagram from '@/components/diagrams/ActualPotentialGrowthDiagram';
import BusinessCycleDiagram from '@/components/diagrams/BusinessCycleDiagram';
import GiniLorenzDiagram from '@/components/diagrams/GiniLorenzDiagram';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const EconomicGrowth = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header - Compact */}
        <div className="mb-6">
          <span className="text-primary text-xs font-medium tracking-wider uppercase">A2 Level • Chapter 1</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gradient mt-1 mb-2">
            Economic Growth, Standard of Living & Economic Development
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Understanding the distinction between actual and potential growth, measuring living standards, and the structural characteristics of developing versus developed economies.
          </p>
        </div>

        {/* ===== TOPIC 1: ECONOMIC GROWTH ===== */}
        <ContentSection title="Topic 1: Economic Growth">
          <NoteCard title="Definition of Economic Growth" type="definition">
            <p>
              <strong>Economic growth</strong> is defined as the increase in the real value of goods and services produced in an economy over a period of time. It is measured by the change in real Gross Domestic Product (GDP).
            </p>
            <div className="mt-3 p-3 bg-primary/10 rounded-lg text-center">
              <p className="text-sm font-mono text-primary">
                Rate of Economic Growth = (GDP₂ - GDP₁) / GDP₁ × 100
              </p>
            </div>
          </NoteCard>

          {/* Types of Economic Growth */}
          <NoteCard title="Types of Economic Growth" type="theory">
            <p className="mb-3">There are <strong>TWO</strong> types of Economic Growth:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/30">
                <h5 className="font-semibold text-cambridge-cyan text-sm mb-1">1. Actual (Short-Run) Growth</h5>
                <p className="text-xs text-muted-foreground">
                  An increase in <strong>real GDP</strong>. This occurs when the economy moves closer to its production possibility frontier (PPF), utilizing previously unemployed resources. It represents a movement from <em>inside</em> the PPF curve to the boundary.
                </p>
              </div>
              <div className="p-3 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30">
                <h5 className="font-semibold text-cambridge-green text-sm mb-1">2. Potential (Long-Run) Growth</h5>
                <p className="text-xs text-muted-foreground">
                  An increase in the <strong>productive capacity</strong> of the economy. This is shown by an outward shift of the PPF or a rightward shift of the Long-Run Aggregate Supply (LRAS) curve.
                </p>
              </div>
            </div>
          </NoteCard>

          {/* Interactive Diagram */}
          <ActualPotentialGrowthDiagram title="Actual vs. Potential Economic Growth" />

          {/* Diagrams that can show Economic Growth */}
          <NoteCard title="Diagrams Representing Economic Growth" type="concept">
            <p className="text-sm mb-2">Economic growth can be illustrated using the following models:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="font-semibold text-primary">1. PPC</p>
                <p className="text-muted-foreground">Outward shift</p>
              </div>
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="font-semibold text-primary">2. AD/AS</p>
                <p className="text-muted-foreground">Keynesian</p>
              </div>
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="font-semibold text-primary">3. AD/AS</p>
                <p className="text-muted-foreground">Monetarist</p>
              </div>
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="font-semibold text-primary">4. Keynesian</p>
                <p className="text-muted-foreground">Cross (45°)</p>
              </div>
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="font-semibold text-primary">5. Business</p>
                <p className="text-muted-foreground">Cycle</p>
              </div>
            </div>
          </NoteCard>

          {/* Short-Run Causes */}
          <NoteCard title="Short-Run Causes of Economic Growth" type="application">
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">1. Expansionary Fiscal Policy</p>
                <p className="text-muted-foreground text-xs">
                  Reduced taxes and increased government spending → Firms invest more, workers have more income → Increased consumption (C) → Higher AD → Economic growth.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">2. Expansionary Monetary Policy</p>
                <p className="text-muted-foreground text-xs">
                  Reduced interest rates → Consumers borrow more cheaply → Both consumption and investment rise → Higher AD.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">3. Reduced Trade Barriers</p>
                <p className="text-muted-foreground text-xs">
                  Reduced tariffs lead to increased international trade and higher export potential.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">4. Increased Government Spending</p>
                <p className="text-muted-foreground text-xs">
                  Improved public services (healthcare, education) → Better trained labour force → Higher productivity → Economic growth.
                </p>
              </div>
            </div>
          </NoteCard>

          {/* Long-Run Causes */}
          <NoteCard title="Long-Run Causes of Economic Growth" type="application">
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-cambridge-green/10 rounded border-l-2 border-cambridge-green">
                <p className="font-semibold text-cambridge-green">1. Increase in the Quantity of Resources</p>
                <p className="text-muted-foreground text-xs">
                  Higher labor force participation, discovery of natural resources, or accumulation of capital goods.
                </p>
              </div>
              <div className="p-2 bg-cambridge-green/10 rounded border-l-2 border-cambridge-green">
                <p className="font-semibold text-cambridge-green">2. Increase in the Productivity of Resources</p>
                <p className="text-muted-foreground text-xs">
                  Better education and training → Higher human capital → Increased potential GDP.
                </p>
              </div>
              <div className="p-2 bg-cambridge-green/10 rounded border-l-2 border-cambridge-green">
                <p className="font-semibold text-cambridge-green">3. Reallocation of Resources</p>
                <p className="text-muted-foreground text-xs">
                  Privatization, subsidies for efficient industries, and improved infrastructure allocation.
                </p>
              </div>
            </div>
          </NoteCard>

          {/* Business Cycle */}
          <BusinessCycleDiagram title="The Business Cycle" />

          {/* Harrod-Domar Model */}
          <NoteCard title="Harrod-Domar Model of Economic Growth" type="theory">
            <p className="text-sm mb-2">
              The Harrod-Domar model emphasizes the role of <strong>saving</strong> and <strong>investment</strong> in determining growth:
            </p>
            <div className="p-3 bg-primary/10 rounded-lg text-center mb-2">
              <p className="font-mono text-sm">Saving → Investment → Capital Accumulation → Growth</p>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Limitation:</strong> The model is less effective in LEDCs because: (1) Difficulty saving due to low incomes, (2) Lack of enterprise and infrastructure to convert savings into productive investment.
            </p>
          </NoteCard>

          {/* Advantages and Disadvantages */}
          <div className="grid md:grid-cols-2 gap-3">
            <NoteCard title="Advantages of Economic Growth" type="application">
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li>• Higher real incomes and living standards</li>
                <li>• Reduced unemployment as firms expand</li>
                <li>• Increased tax revenues for government</li>
                <li>• Greater consumer choice and variety</li>
                <li>• Increased business confidence and investment</li>
              </ul>
            </NoteCard>
            <NoteCard title="Disadvantages of Economic Growth" type="exam-tip">
              <ul className="text-xs space-y-1.5 text-muted-foreground">
                <li>• <strong>Environmental degradation:</strong> Pollution, resource depletion</li>
                <li>• <strong>Inflation:</strong> Demand-pull pressures at full capacity</li>
                <li>• <strong>Income inequality:</strong> Benefits may not be evenly distributed</li>
                <li>• <strong>Current account deficit:</strong> Increased imports</li>
                <li>• <strong>Reduced foreign investment:</strong> Rising wages deter FDI</li>
              </ul>
            </NoteCard>
          </div>

          <ExamTipBox title="Evaluation of Economic Growth" variant="gold">
            <p className="text-sm">
              Should we pursue growth at all costs? Consider: (1) Can environmental constraints (pollution, resource depletion) be reconciled with growth? 
              (2) Is the growth sustainable in the long run? (3) A steady rate of growth is more beneficial than unstable, boom-bust patterns.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* ===== TOPIC 2: STANDARD OF LIVING ===== */}
        <ContentSection title="Topic 2: Standard of Living">
          {/* Real GDP per Capita */}
          <NoteCard title="1. Real GDP per Capita" type="definition">
            <p className="text-sm mb-2">
              <strong>Real GDP per Capita</strong> is the most common measure of living standards. It accounts for population size and inflation:
            </p>
            <div className="p-3 bg-primary/10 rounded-lg text-center">
              <p className="font-mono text-sm text-primary">
                Real GDP per Capita = Real GDP (Inflation Adjusted) ÷ Population
              </p>
            </div>
          </NoteCard>

          {/* Problems comparing income */}
          <NoteCard title="Problems Comparing National Income Between Countries" type="concept">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Problem</TableHead>
                  <TableHead className="text-xs">Explanation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-medium">1. Exchange Rates</TableCell>
                  <TableCell className="text-muted-foreground">Income figures must be converted to a common currency. Exchange rates fluctuate constantly, distorting comparisons.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2. Accounting Techniques</TableCell>
                  <TableCell className="text-muted-foreground">Different countries use varying methods to calculate national income.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3. Price Levels</TableCell>
                  <TableCell className="text-muted-foreground">Cost of living varies significantly; Purchasing Power Parity (PPP) adjustments are needed.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4. Composition of Output</TableCell>
                  <TableCell className="text-muted-foreground">A country producing consumer goods may have higher living standards than one producing capital goods.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5. Barter & Black Economy</TableCell>
                  <TableCell className="text-muted-foreground">Some economies have extensive barter and illegal activity that goes unrecorded in GDP.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </NoteCard>

          {/* NEW - Net Economic Welfare */}
          <NoteCard title="2. Net Economic Welfare (NEW) / Measurable Economic Welfare (MEW)" type="concept">
            <p className="text-sm mb-2">
              <strong>Net Economic Welfare (NEW)</strong> is an adjusted measure of GDP that accounts for factors that contribute to or detract from well-being.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div className="p-2 bg-cambridge-green/10 rounded-lg">
                <p className="font-semibold text-cambridge-green mb-1">Additions (+)</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  <li>• Value of Leisure Time</li>
                  <li>• Unpaid Work (cooking, childcare)</li>
                  <li>• Informal Economy Output</li>
                </ul>
              </div>
              <div className="p-2 bg-destructive/10 rounded-lg">
                <p className="font-semibold text-destructive mb-1">Subtractions (-)</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  <li>• Congestion & Pollution</li>
                  <li>• Depletion of Natural Resources</li>
                  <li>• Crime & Traffic Accidents</li>
                </ul>
              </div>
            </div>
          </NoteCard>

          {/* HDI */}
          <NoteCard title="3. Human Development Index (HDI)" type="definition">
            <p className="text-sm mb-2">
              The <strong>HDI</strong> measures development across three key dimensions:
            </p>
            <div className="grid md:grid-cols-3 gap-2 text-xs">
              <div className="text-center p-2 bg-primary/10 rounded-lg">
                <p className="font-semibold text-primary">(i) Health</p>
                <p className="text-muted-foreground">Life expectancy at birth</p>
              </div>
              <div className="text-center p-2 bg-primary/10 rounded-lg">
                <p className="font-semibold text-primary">(ii) Education</p>
                <p className="text-muted-foreground">Mean & expected years of schooling</p>
              </div>
              <div className="text-center p-2 bg-primary/10 rounded-lg">
                <p className="font-semibold text-primary">(iii) Income</p>
                <p className="text-muted-foreground">GDP per capita (PPP adjusted)</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              HDI ranges from 0 to 1. Classifications: Low (&lt;0.550), Medium (0.550-0.699), High (0.700-0.799), Very High (≥0.800).
            </p>
          </NoteCard>

          {/* Other Measures */}
          <div className="grid md:grid-cols-2 gap-3">
            <NoteCard title="4. Consumer Durables per Person">
              <p className="text-xs text-muted-foreground">
                The number of consumer durables (cars, refrigerators, TVs) per person indicates a higher standard of living.
              </p>
            </NoteCard>
            <NoteCard title="5. Human Poverty Index (HPI)">
              <p className="text-xs text-muted-foreground">
                Measures deprivation: illiteracy, lack of healthcare (access to water, underweight children). Lower ranking = higher poverty. Separate indices exist for developing (HPI-1) and OECD countries (HPI-2).
              </p>
            </NoteCard>
          </div>

          {/* MPI */}
          <NoteCard title="6. Multidimensional Poverty Index (MPI)" type="concept">
            <p className="text-sm mb-2">
              Developed in 2010 by OPHI and the UNDP, the <strong>MPI</strong> assesses poverty across multiple dimensions:
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Dimension</TableHead>
                  <TableHead className="text-xs">Indicators</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-medium">1. Health</TableCell>
                  <TableCell className="text-muted-foreground">Child Mortality, Nutrition</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2. Education</TableCell>
                  <TableCell className="text-muted-foreground">Years of Schooling, School Attendance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3. Living Standards</TableCell>
                  <TableCell className="text-muted-foreground">Cooking Fuel, Toilet, Water, Electricity, Floor, Assets</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </NoteCard>

          {/* Qualitative Factors */}
          <NoteCard title="7. Qualitative Factors of Standard of Living" type="theory">
            <div className="grid md:grid-cols-2 gap-2 text-xs">
              {[
                { factor: 'Hidden/Informal Economy', desc: 'Unrecorded economic activity must be estimated.' },
                { factor: 'Literacy Levels', desc: 'Higher literacy correlates with higher SOL.' },
                { factor: 'Government Spending', desc: 'Public services improve quality of life.' },
                { factor: 'Sustainability', desc: 'Growth must not deplete resources for the future.' },
                { factor: 'Income Distribution', desc: 'Unequal distribution reduces average SOL.' },
                { factor: 'Products Produced', desc: 'Merit goods (health, education) vs. demerit goods.' },
                { factor: 'Consumer vs. Capital Goods', desc: 'Consumer goods raise SOL now; capital goods raise future SOL.' },
                { factor: 'Quantity & Quality', desc: 'Both output volume and product quality matter.' },
                { factor: 'Exchange Rate Effects', desc: 'PPP adjustments needed for valid comparisons.' },
                { factor: 'Working Hours & Conditions', desc: 'Long hours and poor conditions reduce quality of life.' },
                { factor: 'Political Freedom', desc: 'Civil liberties and human rights affect overall wellbeing.' },
              ].map((item) => (
                <div key={item.factor} className="p-2 bg-muted/30 rounded">
                  <p className="font-semibold text-primary">{item.factor}</p>
                  <p className="text-muted-foreground text-[10px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </NoteCard>
        </ContentSection>

        {/* ===== TOPIC 3: ECONOMIC DEVELOPMENT ===== */}
        <ContentSection title="Topic 3: Economic Development">
          {/* Classification */}
          <NoteCard title="Classification of Economies" type="definition">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-center">
              <div className="p-2 bg-muted/50 rounded"><span className="font-semibold">LEDCs</span><br/><span className="text-muted-foreground">Less Developed</span></div>
              <div className="p-2 bg-muted/50 rounded"><span className="font-semibold">MEDCs</span><br/><span className="text-muted-foreground">More Developed</span></div>
              <div className="p-2 bg-muted/50 rounded"><span className="font-semibold">Dual Economies</span><br/><span className="text-muted-foreground">Mixed Sectors</span></div>
              <div className="p-2 bg-muted/50 rounded"><span className="font-semibold">BRICS</span><br/><span className="text-muted-foreground">Emerging Giants</span></div>
              <div className="p-2 bg-muted/50 rounded"><span className="font-semibold">Tiger Economies</span><br/><span className="text-muted-foreground">Asian NICs</span></div>
            </div>
          </NoteCard>

          {/* Income Distribution - Lorenz/Gini */}
          <GiniLorenzDiagram title="The Lorenz Curve & Gini Coefficient" />

          <AnalysisBlock title="Income Distribution Analysis" type="analysis">
            <p className="text-sm mb-2">
              <strong>Income distribution</strong> is the smoothness or equality with which income is distributed among members of a society. If everyone earns exactly the same, distribution is perfectly equal.
            </p>
            <p className="text-sm text-muted-foreground">
              In developing countries, there is typically a wide gap between richest and poorest—the rich may hold 40% of income while the poor hold only 10%. 
              Developed countries have lower Gini coefficients (more equality), while developing countries have higher coefficients (more inequality).
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Kuznets Curve:</strong> Rapidly developing countries (like BRICS) may initially experience high inequality, but this tends to improve over time as development proceeds.
            </p>
          </AnalysisBlock>

          {/* Characteristics Table */}
          <NoteCard title="Characteristics of Developing vs. Developed Economies" type="concept">
            <div className="space-y-3 text-xs">
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">1. Real GDP per Capita</p>
                <p className="text-muted-foreground">
                  Developed economies produce more tertiary sector output of high economic value, resulting in higher GDP per capita. 
                  Developing economies rely on primary sector output of lower value.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">2. Population Growth</p>
                <p className="text-muted-foreground">
                  As countries develop, health and education improve, lowering birth and death rates. 
                  Developing countries have high birth rates and high natural increase. 
                  BRICS countries (Brazil, Russia, India, China, South Africa) and MINT countries (Mexico, Indonesia, Nigeria, Turkey) fall between developed and developing.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">3. Population Structure</p>
                <p className="text-muted-foreground">
                  Developing countries have pyramid-shaped age distributions (many young, few old). Developed countries have more balanced, rectangular structures.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">4. Economic Structure</p>
                <p className="text-muted-foreground">
                  Developing economies focus on the <strong>primary sector</strong>. As development occurs, employment shifts to <strong>secondary</strong> (manufacturing) and then <strong>tertiary</strong> (services) sectors.
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">5. External Trade</p>
                <p className="text-muted-foreground">
                  Developed countries export manufactured goods. Developing countries often depend on primary commodity exports (e.g., Nigeria's 95% petroleum exports).
                </p>
              </div>
              <div className="p-2 bg-muted/30 rounded">
                <p className="font-semibold text-primary">6. External Debt</p>
                <p className="text-muted-foreground">
                  Developing countries have high levels of external debt and debt repayments as a percentage of GDP, creating a significant burden on their economies.
                </p>
              </div>
            </div>
          </NoteCard>

          {/* LEDCs vs MEDCs Comparison Table */}
          <NoteCard title="Summary: LEDCs vs. MEDCs" type="theory">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Features of LEDCs</TableHead>
                  <TableHead className="text-xs">Features of MEDCs</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell>Less GDP per capita</TableCell>
                  <TableCell>High GDP per capita</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low life expectancy</TableCell>
                  <TableCell>High life expectancy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low literacy rates</TableCell>
                  <TableCell>High literacy rates</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High population growth</TableCell>
                  <TableCell>Low population growth</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Poor infrastructure</TableCell>
                  <TableCell>Better infrastructure</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low foreign direct investment</TableCell>
                  <TableCell>High foreign direct investment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Poor health care</TableCell>
                  <TableCell>Good health care</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low labour productivity</TableCell>
                  <TableCell>High labour productivity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High public debt</TableCell>
                  <TableCell>Low public debt</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reliance on primary output</TableCell>
                  <TableCell>Reliance on secondary/tertiary output</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Corruption / weak law enforcement</TableCell>
                  <TableCell>Low corruption / strong law enforcement</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low HDI</TableCell>
                  <TableCell>High HDI</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High degree of income inequality</TableCell>
                  <TableCell>Low degree of income inequality</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </NoteCard>

          {/* Other Issues */}
          <div className="grid md:grid-cols-2 gap-3">
            <NoteCard title="Urbanization">
              <p className="text-xs text-muted-foreground">
                Rural-to-urban migration puts pressure on urban resources—housing, sanitation, employment. Developing countries experience rapid urbanization as people seek better opportunities.
              </p>
            </NoteCard>
            <NoteCard title="Dependency">
              <p className="text-xs text-muted-foreground">
                Many developing countries depend on developed nations for trade, aid, and technology. Remittances from workers abroad often flow back to home countries.
              </p>
            </NoteCard>
          </div>

          <NoteCard title="Social Issues in Development" type="application">
            <p className="text-xs text-muted-foreground">
              Economically developing countries face greater social problems: high crime rates, poor quality of life, and difficulty fulfilling basic needs—leading to less focus on human development. 
              Developed countries subsidize education and healthcare, resulting in higher quality of life as measured by the HDI.
            </p>
          </NoteCard>

          <ExamTipBox title="A2 Evaluation: Growth vs. Development" variant="gold">
            <p className="text-sm mb-2">
              <strong>Economic growth ≠ Economic development.</strong> Growth is a necessary but not sufficient condition for development.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Growth may increase GDP without improving distribution (Gini stays high)</li>
              <li>• Environmental costs may offset welfare gains</li>
              <li>• HDI and MPI provide more holistic measures than GDP alone</li>
              <li>• Structural change (primary → tertiary) is a key indicator of true development</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-card/50 rounded-lg border border-border/50">
              <h4 className="font-semibold text-primary text-sm mb-1">Topic 1: Economic Growth</h4>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                <li>• Actual vs. Potential growth</li>
                <li>• PPC and AD/AS representations</li>
                <li>• Business cycle phases</li>
                <li>• Harrod-Domar model</li>
              </ul>
            </div>
            <div className="p-3 bg-card/50 rounded-lg border border-border/50">
              <h4 className="font-semibold text-primary text-sm mb-1">Topic 2: Standard of Living</h4>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                <li>• Real GDP per capita</li>
                <li>• HDI, HPI, MPI indices</li>
                <li>• NEW/MEW adjustments</li>
                <li>• Qualitative factors</li>
              </ul>
            </div>
            <div className="p-3 bg-card/50 rounded-lg border border-border/50">
              <h4 className="font-semibold text-primary text-sm mb-1">Topic 3: Development</h4>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                <li>• Lorenz Curve & Gini Coefficient</li>
                <li>• LEDCs vs. MEDCs characteristics</li>
                <li>• Sectoral transformation</li>
                <li>• BRICS & Tiger economies</li>
              </ul>
            </div>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default EconomicGrowth;
