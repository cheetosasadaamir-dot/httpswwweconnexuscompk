import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import PPCConceptDiagram from '@/components/diagrams/PPCConceptDiagram';
import FactorsOfProductionDiagram from '@/components/diagrams/FactorsOfProductionDiagram';
import PPCShiftsDiagram from '@/components/diagrams/PPCShiftsDiagram';
import OpportunityCostPPCDiagram from '@/components/diagrams/OpportunityCostPPCDiagram';
import SpecializationTableDiagram from '@/components/diagrams/SpecializationTableDiagram';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const BasicEconomicIdeas = () => {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="Basic Economic Ideas"
      subtitle="Understanding scarcity, opportunity cost, factors of production, and the production possibility curve."
    >
      {/* Topic 1: Basic Economic Ideas */}
      <ContentSection 
        title="Topic 1: Basic Economic Ideas" 
        subtitle="The Basic Economic Problem and Scarcity"
      >
        <NoteCard title="The Basic Economic Problem / Problem of Scarcity" type="definition">
          <p>
            <GlossaryTooltip term="Economics" definition="The study of how to allocate scarce resources among competing uses to satisfy unlimited human wants.">Economics</GlossaryTooltip> is 
            concerned with how to allocate <strong>scarce resources</strong> among competing uses.
          </p>
          <div className="mt-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-center font-semibold text-silver-bright">
              Limited Resources + Unlimited Wants = <span className="text-cyan-400">Scarcity</span>
            </p>
          </div>
        </NoteCard>

        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <NoteCard title="1. Limited Nature of Resources" type="concept" delay={100}>
            <p className="text-sm text-muted-foreground">
              Resources such as agricultural land, oil, wheat, and other natural resources are 
              <strong> finite in quantity</strong>. There is only so much of each resource available 
              on Earth, creating fundamental limitations on what can be produced.
            </p>
          </NoteCard>

          <NoteCard title="2. Opportunity Cost" type="theory" delay={150}>
            <p className="text-sm text-muted-foreground">
              <GlossaryTooltip term="Opportunity Cost" definition="The next best alternative foregone when making a choice. It represents the true economic cost of any decision.">Opportunity cost</GlossaryTooltip> arises 
              because people are forced to make choices. When one option is chosen, the next best 
              alternative must be given up.
            </p>
            <div className="mt-2 p-2 rounded bg-muted/50 text-xs">
              <strong>Example:</strong> If a country develops an export industry, the opportunity cost 
              is the domestic production that could have been undertaken with those resources.
            </div>
          </NoteCard>
        </div>

        <NoteCard title="The Three Fundamental Economic Questions" type="theory" delay={200}>
          <div className="grid md:grid-cols-3 gap-3 mt-2">
            <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-1 text-sm">1. What to Produce?</h5>
              <p className="text-xs text-muted-foreground">
                How should the scarce resources be allocated between different goods and services?
              </p>
            </div>
            <div className="p-3 rounded-lg bg-magenta-400/10 border border-magenta-400/20">
              <h5 className="font-semibold text-magenta-400 mb-1 text-sm">2. How to Produce?</h5>
              <p className="text-xs text-muted-foreground">
                What combination of factors of production should be used? 
                (Price mechanism helps decide this)
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <h5 className="font-semibold text-green-400 mb-1 text-sm">3. For Whom to Produce?</h5>
              <p className="text-xs text-muted-foreground">
                How should the goods be allocated among the population? 
                Understanding the target population.
              </p>
            </div>
          </div>
        </NoteCard>

        <NoteCard title="The Time Dimension" type="concept" delay={250}>
          <Table>
            <TableHeader>
              <TableRow className="border-silver/20">
                <TableHead className="text-silver-bright text-xs">Time Dimension</TableHead>
                <TableHead className="text-silver-bright text-xs">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">1. Short Run</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  The time period where a firm is able to change some inputs and not all.
                </TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">2. Long Run</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  All inputs might be variable.
                </TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">3. Very Long Run</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  All inputs are variable, including technology and institutional factors.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </NoteCard>
      </ContentSection>

      {/* Topic 2: Factors of Production */}
      <ContentSection 
        title="Topic 2: Factors of Production" 
        subtitle="The Four Economic Resources and Their Rewards"
      >
        <NoteCard title="The Factors of Production" type="definition">
          <p>
            <GlossaryTooltip term="Factors of Production" definition="The economic resources used to produce goods and services: land, labour, capital, and enterprise.">Factors of production</GlossaryTooltip> are 
            the resources used by the economy to produce goods and services. These include:
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-3">
          <Table>
            <TableHeader>
              <TableRow className="border-silver/20">
                <TableHead className="text-silver-bright text-xs">Factor</TableHead>
                <TableHead className="text-silver-bright text-xs">Description</TableHead>
                <TableHead className="text-silver-bright text-xs">Return (Reward)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-green-400 text-sm py-2">1. Land</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  Various natural resources including agricultural land, minerals, oil, and forests.
                </TableCell>
                <TableCell className="text-primary font-semibold text-sm py-2">Rent</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-blue-400 text-sm py-2">2. Labour</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  The number of hours worked; human physical and mental effort in production.
                </TableCell>
                <TableCell className="text-primary font-semibold text-sm py-2">Wages and Salaries</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-purple-400 text-sm py-2">3. Capital</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  Tools, machinery, buildings, and equipment used in production.
                </TableCell>
                <TableCell className="text-primary font-semibold text-sm py-2">Interest</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-yellow-400 text-sm py-2">4. Enterprise</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  The owner of a business; risk-taking and organizing the other factors of production.
                </TableCell>
                <TableCell className="text-primary font-semibold text-sm py-2">Profit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="glass-card p-4 my-3">
          <FactorsOfProductionDiagram />
        </div>

        <NoteCard title="Factor Intensity" type="concept" delay={100}>
          <p className="text-sm text-muted-foreground">
            Production methods can be classified by which factor they rely on most heavily:
          </p>
          <div className="grid md:grid-cols-2 gap-2 mt-2">
            <div className="p-2 rounded bg-muted/50 text-xs">
              <strong>Labour Intensive:</strong> Production that relies heavily on labour inputs 
              (e.g., teaching, nursing, legal services)
            </div>
            <div className="p-2 rounded bg-muted/50 text-xs">
              <strong>Capital Intensive:</strong> Production that relies heavily on machinery and 
              equipment (e.g., manufacturing, oil refining)
            </div>
          </div>
        </NoteCard>
      </ContentSection>

      {/* Topic 3: Positive and Normative Statements */}
      <ContentSection 
        title="Topic 3: Positive and Normative Statements" 
        subtitle="Facts vs. Value Judgments in Economics"
      >
        <div className="grid md:grid-cols-2 gap-3">
          <NoteCard title="Positive Statements" type="definition">
            <p className="text-sm text-muted-foreground">
              A <GlossaryTooltip term="Positive Statement" definition="A statement that can be tested and verified using factual evidence. It describes 'what is' rather than 'what should be'.">positive statement</GlossaryTooltip> is 
              based on <strong>factual evidence</strong>. It tells us <strong>what is</strong> and can 
              be tested empirically.
            </p>
            <div className="mt-2 p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs">
              <strong>Example:</strong> "Increasing the minimum wage will reduce employment among 
              low-skilled workers."
            </div>
          </NoteCard>

          <NoteCard title="Normative Statements" type="definition" delay={100}>
            <p className="text-sm text-muted-foreground">
              A <GlossaryTooltip term="Normative Statement" definition="A statement that expresses an opinion or value judgment about what 'should' or 'ought to' happen. Cannot be tested empirically.">normative statement</GlossaryTooltip> is 
              one that expresses a <strong>value judgment</strong>. It tells us what <strong>should</strong> happen.
            </p>
            <div className="mt-2 p-2 rounded bg-magenta-400/10 border border-magenta-400/20 text-xs">
              <strong>Example:</strong> "The government should do everything it can to help promote 
              this industry."
            </div>
          </NoteCard>
        </div>

        <NoteCard title="Converting Positive to Normative" type="theory" delay={150}>
          <p className="text-sm text-muted-foreground mb-2">
            Positive statements can be converted to normative statements by adding phrases such as:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• "...and this <strong>should be</strong> beneficial for the environment."</li>
            <li>• "...and therefore the government <strong>should do</strong> everything it can to help promote this industry."</li>
            <li>• "...and this <strong>should</strong> reduce traffic congestion."</li>
          </ul>
        </NoteCard>
      </ContentSection>

      {/* Topic 4: Specialization and Division of Labour */}
      <ContentSection 
        title="Topic 4: Specialization and Division of Labour" 
        subtitle="Efficiency Through Concentration of Production"
      >
        <NoteCard title="Definition of Specialization" type="definition">
          <p className="text-sm text-muted-foreground">
            <GlossaryTooltip term="Specialization" definition="The process by which individuals, firms, regions, or countries concentrate on producing those goods and services where they have an advantage over others.">Specialization</GlossaryTooltip> is 
            the process by which individuals, firms, regions, or countries <strong>concentrate on 
            producing those goods and services where they have an advantage</strong> over others.
          </p>
        </NoteCard>

        <NoteCard title="Levels of Specialization" type="theory" delay={100}>
          <Table>
            <TableHeader>
              <TableRow className="border-silver/20">
                <TableHead className="text-silver-bright text-xs">Level</TableHead>
                <TableHead className="text-silver-bright text-xs">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">1. Individual</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  Individuals tend to master a particular skill in life. This allows workers to master 
                  their skill and increase productivity.
                </TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">2. Firm</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  Businesses around the globe master in a particular industry. Shell in Oil, IKEA in 
                  furniture, McDonald's in burgers and fast food etc.
                </TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">3. Region</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  Regions in the world specialize in the production of a particular good. Silicon Valley 
                  for IT and communication technology, Paris and Milan for fashion industry.
                </TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">4. Country</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">
                  Countries specialize in the production of certain products. Example: Pakistan in rice 
                  and mangoes.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </NoteCard>

        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <NoteCard title="Advantages of Specialization" type="application" delay={150}>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-green-400 mb-2">For the Economy:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• <strong>Higher GDP:</strong> Increase in output.</li>
                <li>• <strong>Economies of Scale:</strong> Production increases, firms enjoy larger economies 
                of scale. Cost cuts can be passed on to consumers in the form of lower prices.</li>
                <li>• <strong>Improved Competitiveness:</strong> Competitive advantage in international market, 
                higher exports, appreciation in currency, higher AD.</li>
              </ul>
              <p className="font-medium text-green-400 mt-3 mb-2">For Individuals:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Workers can undertake tasks which match their natural abilities.</li>
                <li>• Can become more expert through practice.</li>
                <li>• Waste less time through reduced movement.</li>
                <li>• Make greater use of machinery which itself is more effective.</li>
              </ul>
            </div>
          </NoteCard>

          <NoteCard title="Disadvantages of Specialization" type="application" delay={200}>
            <div className="space-y-1 text-sm">
              <ul className="space-y-2 text-muted-foreground text-xs">
                <li>• <strong>Overspecialization:</strong> Economy becomes vulnerable. Example: Iran is 
                highly dependent on oil export; a trade embargo by the west results in major economic collapse.</li>
                <li>• <strong>High Labour Turnover:</strong> Specialists continuously search for better paid 
                jobs, increasing rehiring costs.</li>
                <li>• <strong>Low Labour Mobility:</strong> Workers skilled only in one field find it hard 
                to understand other functions. Labour force becomes inflexible.</li>
                <li>• <strong>Lack of Variety:</strong> Consumers have less choice since the company 
                specializes in only one type of product.</li>
                <li>• <strong>High Cost:</strong> Cost to employ specialist workers is high, leading to 
                expensive products and reduced profits.</li>
                <li>• <strong>Boredom and Monotony:</strong> People become bored doing the same job daily, 
                affecting product quality.</li>
              </ul>
            </div>
          </NoteCard>
        </div>

        {/* Specialization Numerical Example */}
        <div className="glass-card p-4 my-3">
          <SpecializationTableDiagram />
        </div>
      </ContentSection>

      {/* Topic 5: Production Possibility Curve */}
      <ContentSection 
        title="Topic 5: The Production Possibility Curve (PPC)" 
        subtitle="Illustrating Scarcity, Choice, and Opportunity Cost"
      >
        <NoteCard title="Understanding the PPC" type="definition">
          <p className="text-sm text-muted-foreground">
            The <GlossaryTooltip term="Production Possibility Curve" definition="A curve showing the maximum possible combinations of two goods that can be produced with available resources, assuming full and efficient use of resources.">Production Possibility Curve (PPC)</GlossaryTooltip> shows 
            the maximum combinations of two goods an economy can produce with its available resources.
          </p>
          <div className="mt-3 space-y-2 text-xs">
            <p><strong>Assumptions:</strong></p>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Only two goods are produced</li>
              <li>• All resources are fully and efficiently employed</li>
              <li>• Technology and resources are fixed (ceteris paribus)</li>
              <li>• Resources are not equally suitable for producing all goods</li>
            </ul>
          </div>
        </NoteCard>

        <div className="glass-card p-4 my-3">
          <PPCConceptDiagram title="Figure 1.1: The Production Possibility Curve" />
        </div>

        <AnalysisBlock title="AO3 Analysis: Points on the PPC" type="analysis">
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-2 rounded bg-green-500/10 border border-green-500/20">
              <h5 className="font-semibold text-green-400 mb-1 text-xs">On the Curve (A, B, C)</h5>
              <p className="text-xs text-muted-foreground">
                <strong>Productive efficiency</strong> - all resources are fully and efficiently employed. 
                Represents the maximum capacity of the economy.
              </p>
            </div>
            <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/20">
              <h5 className="font-semibold text-yellow-400 mb-1 text-xs">Inside the Curve (H)</h5>
              <p className="text-xs text-muted-foreground">
                <strong>Inefficiency or unemployment</strong> - idle resources exist. The economy is 
                not producing at its full potential.
              </p>
            </div>
            <div className="p-2 rounded bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-1 text-xs">Outside the Curve (F)</h5>
              <p className="text-xs text-muted-foreground">
                <strong>Unattainable</strong> - currently impossible with existing resources and 
                technology. Can only be reached through economic growth.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        {/* Shifts in PPC */}
        <NoteCard title="Shifts in the PPC" type="theory" delay={100}>
          <p className="text-sm text-muted-foreground mb-2">
            A PPC curve can shift <strong>Inward or Outward</strong>: Inward shows a decrease in 
            productivity and output; Outward shows an increase in productivity and output.
          </p>
        </NoteCard>

        <div className="grid md:grid-cols-2 gap-3 my-3">
          <div className="glass-card p-4">
            <PPCShiftsDiagram type="parallel" title="Parallel Shift of PPC" />
          </div>
          <div className="glass-card p-4">
            <PPCShiftsDiagram type="pivotal" title="Pivotal Shift of PPC" />
          </div>
        </div>

        <NoteCard title="Sources of Shift in PPC" type="theory" delay={150}>
          <Table>
            <TableHeader>
              <TableRow className="border-silver/20">
                <TableHead className="text-silver-bright text-xs">Factor</TableHead>
                <TableHead className="text-silver-bright text-xs">Outward Shift</TableHead>
                <TableHead className="text-silver-bright text-xs">Inward Shift</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-green-400 text-xs py-1">Land</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Discovery of new natural resources</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Depletion of non-renewable resources (oil, gas); Natural disasters</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-blue-400 text-xs py-1">Labour</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Increase in working population; More immigration; More women in jobs; High retirement age</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Decrease in working population; More emigration; Poor health facilities</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-purple-400 text-xs py-1">Capital</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Gross Investment exceeds depreciation</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Depreciation exceeds gross investment</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-yellow-400 text-xs py-1">Productivity</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Technology advancement; Education and training; Research</TableCell>
                <TableCell className="text-muted-foreground text-xs py-1">Decline in technology; Reduced training</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </NoteCard>

        {/* Reallocation of Resources */}
        <NoteCard title="Reallocation of Resources" type="concept" delay={200}>
          <p className="text-sm text-muted-foreground mb-2">
            Since manufacturing and service sector is more productive than the primary sector, the 
            more services and manufacturing the economy produces, the higher the productivity.
          </p>
          <div className="grid md:grid-cols-2 gap-2 mt-2">
            <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-xs">
              <strong className="text-green-400">PPC Outward Shift:</strong>
              <ul className="mt-1 text-muted-foreground">
                <li>• Manufacturing/Service {'>'} Primary</li>
                <li>• Capital Goods {'>'} Consumer Goods</li>
              </ul>
            </div>
            <div className="p-2 rounded bg-red-500/10 border border-red-500/20 text-xs">
              <strong className="text-red-400">PPC Inward Shift:</strong>
              <ul className="mt-1 text-muted-foreground">
                <li>• Manufacturing/Service {'<'} Primary</li>
                <li>• Capital Goods {'<'} Consumer Goods</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 p-2 rounded bg-muted/50 text-xs">
            <strong>Capital Goods:</strong> Goods that increase the future capacity of an economy 
            (machinery, buildings). Expenditure on these goods is known as <strong>investment</strong>.
            <br /><br />
            <strong>Note:</strong> If an economy chooses to produce more capital goods and less consumer 
            goods in the present, it can produce more of both goods in the future. The decision to produce 
            more capital goods may mean fewer consumer goods today. The choice is having a higher standard 
            of living today vs. economic prosperity in the future.
          </div>
        </NoteCard>

        {/* Increasing and Constant Opportunity Costs */}
        <NoteCard title="Increasing and Constant Opportunity Costs" type="theory" delay={250}>
          <p className="text-sm text-muted-foreground">
            The shape of the PPC depends on whether opportunity costs are increasing or constant.
          </p>
        </NoteCard>

        <div className="grid md:grid-cols-2 gap-3 my-3">
          <div className="glass-card p-4">
            <OpportunityCostPPCDiagram type="increasing" title="Increasing Opportunity Cost" />
          </div>
          <div className="glass-card p-4">
            <OpportunityCostPPCDiagram type="constant" title="Constant Opportunity Cost" />
          </div>
        </div>

        <ExamTipBox title="PPC Diagram Drawing Tips" variant="gold">
          <p className="text-sm">For full marks on PPC diagrams:</p>
          <ul className="mt-2 space-y-1 text-xs">
            <li>✓ Label axes with <strong>specific goods</strong> (e.g., "Consumer Goods" vs "Capital Goods")</li>
            <li>✓ Draw a <strong>concave curve</strong> (unless constant opportunity cost is specified)</li>
            <li>✓ Mark points clearly (A, B, C, H, F) and explain their significance</li>
            <li>✓ Show <strong>arrows</strong> for shifts and movements along the curve</li>
            <li>✓ Distinguish between <strong>movement along</strong> (change in production mix) and <strong>shift</strong> (change in capacity)</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Topic 6: Economic Systems */}
      <ContentSection 
        title="Topic 6: Economic Systems" 
        subtitle="How Societies Solve the Economic Problem"
      >
        <NoteCard title="Types of Economic Systems" type="definition">
          <p className="text-sm text-muted-foreground">
            An <GlossaryTooltip term="Economic System" definition="The way in which a society organizes the production, distribution, and consumption of goods and services.">economic system</GlossaryTooltip> determines 
            how resources are allocated and the answers to the three fundamental economic questions.
          </p>
        </NoteCard>

        {/* Market Economy */}
        <NoteCard title="1. Market Economy" type="theory" delay={100}>
          <p className="text-sm text-muted-foreground mb-2">
            A <GlossaryTooltip term="Market Economy" definition="An economic system where resources are allocated through the price mechanism, with minimal government intervention.">market economy</GlossaryTooltip> is 
            where ownership of resources is in the hands of private individuals who allocate them 
            through the price mechanism.
          </p>
          <p className="text-xs text-muted-foreground mb-2"><strong>Features include:</strong></p>
          <ul className="space-y-1 text-xs text-muted-foreground ml-2">
            <li>• No government interference</li>
            <li>• Resources allocated on the basis of price - higher the price, more the supply; lower the price, more the demand</li>
            <li>• Resources are sold to individuals who have the <strong>willingness and ability to pay</strong></li>
            <li>• Production of profitable products is maximized whereas production of unprofitable products is stopped</li>
            <li>• Competition in the market leads to greater choice for consumers</li>
          </ul>
        </NoteCard>

        <div className="grid md:grid-cols-2 gap-3 mt-2">
          <NoteCard title="Market Economy: Advantages" type="application" delay={150}>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <strong>Consumer Sovereignty:</strong> Consumers determine the goods and services produced; 
              producers make what consumers want through demand and supply.</li>
              <li>• <strong>Variety of Goods:</strong> More choice; people can decide who to work for.</li>
              <li>• <strong>Quick Response:</strong> Market economy allows for quick responses to changes in 
              consumer preferences.</li>
              <li>• <strong>Efficiency:</strong> Average cost per unit decreases through competition.</li>
            </ul>
          </NoteCard>

          <NoteCard title="Market Economy: Disadvantages" type="application" delay={200}>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <strong>Inequality of Income:</strong> The rich can increase their earning potential; 
              vulnerable groups may find it difficult to earn an income.</li>
              <li>• <strong>Private Monopolies:</strong> May charge high prices, reduce quality, and restrict choice.</li>
              <li>• <strong>Demerit Goods:</strong> Private firms under profit maximization will produce harmful 
              goods like alcohol, cigarettes.</li>
              <li>• <strong>No Public Goods:</strong> Street lighting, roads, healthcare might not be provided.</li>
              <li>• <strong>Waste on Advertising:</strong> Due to competition, firms waste resources on advertising.</li>
            </ul>
          </NoteCard>
        </div>

        {/* Planned Economy */}
        <NoteCard title="2. Planned (Command) Economy" type="theory" delay={250}>
          <p className="text-sm text-muted-foreground mb-2">
            A <GlossaryTooltip term="Planned Economy" definition="An economic system where the government owns and controls all resources and makes all economic decisions.">planned economy</GlossaryTooltip> is 
            where the basic economic questions are answered by the government through central planning.
          </p>
        </NoteCard>

        <div className="grid md:grid-cols-2 gap-3 mt-2">
          <NoteCard title="Planned Economy: Advantages" type="application" delay={300}>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <strong>Economies of Scale:</strong> Operating large state monopolies results in low 
              prices for consumers.</li>
              <li>• <strong>No Competition Wastage:</strong> No ads, price wars, etc.</li>
              <li>• <strong>Reduced Inequality:</strong> Gap between rich and poor is minimized; everyone has 
              access to basic necessities.</li>
              <li>• <strong>Externalities Controlled:</strong> Pollution restricted, demerit goods reduced, 
              merit goods produced.</li>
              <li>• <strong>Costs Reduced:</strong> Costs of advertisement not necessary.</li>
              <li>• <strong>Basic Needs:</strong> Government provides basic needs (education, healthcare) for everyone.</li>
            </ul>
          </NoteCard>

          <NoteCard title="Planned Economy: Disadvantages" type="application" delay={350}>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <strong>Surpluses and Shortages:</strong> No price mechanism to balance supply and demand.</li>
              <li>• <strong>Lack of Variety:</strong> Standard of living falls due to limited choice.</li>
              <li>• <strong>Less Responsive:</strong> Bureaucrats take decisions; they don't take entrepreneurial 
              risks and lack innovation.</li>
              <li>• <strong>Policy Misuse:</strong> Politicians might use monetary, fiscal and supply side 
              policy to win votes, not allocate resources efficiently.</li>
            </ul>
          </NoteCard>
        </div>

        {/* Mixed Economy */}
        <NoteCard title="3. Mixed Economy" type="theory" delay={400}>
          <p className="text-sm text-muted-foreground mb-2">
            A <GlossaryTooltip term="Mixed Economy" definition="An economic system that combines elements of both market and planned economies, with both private and public sectors.">mixed economy</GlossaryTooltip> combines 
            features of both market and planned economies. The government makes some decisions and lets 
            the market forces allocate other resources.
          </p>
          <div className="grid md:grid-cols-2 gap-2 mt-2">
            <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-xs">
              <strong className="text-green-400">Positive Impacts:</strong>
              <ul className="mt-1 text-muted-foreground">
                <li>• Stronger financial system</li>
                <li>• Active business environment</li>
                <li>• More sectors in the economy</li>
                <li>• Variety of goods</li>
              </ul>
            </div>
            <div className="p-2 rounded bg-red-500/10 border border-red-500/20 text-xs">
              <strong className="text-red-400">Negative Impacts:</strong>
              <ul className="mt-1 text-muted-foreground">
                <li>• Job losses during transition</li>
                <li>• Need for social reforms</li>
                <li>• Must establish good tax system</li>
                <li>• Consumer exploitation might increase</li>
              </ul>
            </div>
          </div>
        </NoteCard>

        <AnalysisBlock title="AO4 Evaluation: Transition to Mixed Economy" type="evaluation">
          <p className="text-sm text-muted-foreground mb-2">
            When a planned economy transforms into a mixed economy:
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• <strong>Implementation takes time</strong> - Cannot happen overnight; requires gradual reforms.</li>
            <li>• <strong>Government roles:</strong> Provide law and order, defense, fix balance of payments, 
            impose tariffs, manage exchange rates, and provide public goods.</li>
            <li>• <strong>Private sector freedom:</strong> Actions not dictated by government; free to produce 
            what they want and decide for whom to produce.</li>
            <li>• <strong>Evaluation:</strong> The advantages of transformation generally outweigh the 
            disadvantages when managed carefully.</li>
          </ul>
        </AnalysisBlock>

        <ExamTipBox title="AO4 Evaluation Phrases for Economic Systems" variant="gold">
          <p className="text-sm">Use these evaluation connectives for top marks:</p>
          <ul className="mt-2 space-y-1 text-xs">
            <li>• "However, this depends on the <strong>magnitude</strong> of government intervention..."</li>
            <li>• "The effectiveness is limited by <strong>time lags</strong> in implementation..."</li>
            <li>• "This analysis assumes <strong>ceteris paribus</strong>, but in reality mixed economies vary..."</li>
            <li>• "It could be argued that... <strong>on the other hand</strong>..."</li>
            <li>• "The degree of market vs. planning depends on <strong>political ideology</strong>..."</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default BasicEconomicIdeas;
