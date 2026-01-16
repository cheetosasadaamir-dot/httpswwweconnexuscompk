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
import ResourceAllocationSpectrumDiagram from '@/components/diagrams/ResourceAllocationSpectrumDiagram';
import PriceMechanismFlowDiagram from '@/components/diagrams/PriceMechanismFlowDiagram';
import SystemComparisonPPCDiagram from '@/components/diagrams/SystemComparisonPPCDiagram';
import ThreeQuestionsComparisonDiagram from '@/components/diagrams/ThreeQuestionsComparisonDiagram';
import SpecializationPPCShiftDiagram from '@/components/diagrams/SpecializationPPCShiftDiagram';
import ProductivityChainDiagram from '@/components/diagrams/ProductivityChainDiagram';
import TradeLoopDiagram from '@/components/diagrams/TradeLoopDiagram';
import FunctionsOfMoneyDiagram from '@/components/diagrams/FunctionsOfMoneyDiagram';
import BalancedArgumentTable from '@/components/diagrams/BalancedArgumentTable';
import PositiveNormativeQuiz from '@/components/diagrams/PositiveNormativeQuiz';
import PositiveNormativePPCDiagram from '@/components/diagrams/PositiveNormativePPCDiagram';
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

      {/* Section 1.2.2: Positive and Normative Statements */}
      <ContentSection 
        title="Section 1.2.2: Positive and Normative Statements" 
        subtitle="Facts vs. Value Judgments in Economic Analysis"
      >
        {/* AO1 Definitions */}
        <NoteCard title="Examiner-Standard Definitions (AO1)" type="definition">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <h5 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Positive Statements
              </h5>
              <p className="text-sm text-muted-foreground">
                <GlossaryTooltip term="Positive Statement" definition="Objective statements that can be tested, amended, or rejected by referring to available evidence. They deal with 'what is'.">Positive statements</GlossaryTooltip> are 
                <strong className="text-cyan-400"> objective statements</strong> that can be <strong>tested, amended, or rejected</strong> by 
                referring to <strong>available evidence</strong>. They deal with <strong>"what is"</strong> and are the 
                basis of economics as a <strong>social science</strong>.
              </p>
              <div className="mt-3 p-2 rounded bg-charcoal-deep/50 text-xs">
                <strong>Key Identifier:</strong> Can be verified or falsified through empirical observation and data.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <h5 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Normative Statements
              </h5>
              <p className="text-sm text-muted-foreground">
                <GlossaryTooltip term="Normative Statement" definition="Subjective statements containing value judgments that cannot be proven or disproven by facts. They deal with 'what ought to be'.">Normative statements</GlossaryTooltip> are 
                <strong className="text-amber-400"> subjective statements</strong> that contain a <strong>value judgment</strong> and 
                <strong> cannot be proven or disproven</strong> by a search for facts. They deal with 
                <strong> "what ought to be"</strong> or <strong>"what should be"</strong>.
              </p>
              <div className="mt-3 p-2 rounded bg-charcoal-deep/50 text-xs">
                <strong>Key Identifier:</strong> Contains words like "should," "ought," "must," "fair," "unfair," or "best."
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <h5 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                The Key Distinction
              </h5>
              <p className="text-sm text-muted-foreground">
                The fundamental difference is the presence of <strong className="text-amber-400">Value Judgments</strong> versus 
                <strong className="text-cyan-400"> Facts</strong>. Economics aims to be a science using positive analysis, 
                but policy decisions are inherently normative.
              </p>
            </div>
          </div>
        </NoteCard>

        {/* Essential Examples */}
        <NoteCard title="CIE 9708 Standard Examples" type="theory" delay={100}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-semibold text-cyan-400 text-sm border-b border-cyan-500/20 pb-2">
                ✓ Positive Statements (Testable)
              </h5>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-xs">
                  <p className="text-silver-bright italic mb-1">
                    "An increase in the interest rate will lead to a decrease in investment."
                  </p>
                  <p className="text-muted-foreground">
                    → Testable using macroeconomic data on interest rates and investment levels.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-xs">
                  <p className="text-silver-bright italic mb-1">
                    "Unemployment in the UK is currently at 4.2%."
                  </p>
                  <p className="text-muted-foreground">
                    → Verifiable by checking ONS (Office for National Statistics) data.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-xs">
                  <p className="text-silver-bright italic mb-1">
                    "A depreciation of the currency increases export competitiveness."
                  </p>
                  <p className="text-muted-foreground">
                    → Can be tested by analyzing trade data following exchange rate changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-amber-400 text-sm border-b border-amber-500/20 pb-2">
                ⚖ Normative Statements (Value-Based)
              </h5>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs">
                  <p className="text-silver-bright italic mb-1">
                    "The government should increase the minimum wage to reduce poverty."
                  </p>
                  <p className="text-muted-foreground">
                    → Contains "should"—an ethical stance on equity and social policy.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs">
                  <p className="text-silver-bright italic mb-1">
                    "The rich ought to pay higher taxes to fund public services."
                  </p>
                  <p className="text-muted-foreground">
                    → Contains "ought to"—a value judgment about fairness and redistribution.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs">
                  <p className="text-silver-bright italic mb-1">
                    "It is unfair that CEOs earn 300 times more than average workers."
                  </p>
                  <p className="text-muted-foreground">
                    → Contains "unfair"—a subjective judgment on income distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NoteCard>

        {/* Role in Economic Methodology */}
        <AnalysisBlock
          title="The Role in Economic Methodology (AO3)"
          type="analysis"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-charcoal-deep/50 border border-silver/10">
              <h5 className="font-semibold text-cyan-400 text-sm mb-2">
                Economics as a Social Science
              </h5>
              <p className="text-sm text-muted-foreground">
                While economics aims to be a <strong className="text-cyan-400">social science</strong> using positive analysis 
                to build theories and models, almost all <strong className="text-amber-400">government policy is normative</strong> because 
                it involves choosing between <strong>competing priorities</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <h6 className="font-semibold text-cyan-400 text-xs mb-2">Positive Economics</h6>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Builds economic <strong>models</strong> (Supply & Demand)</li>
                  <li>• Tests hypotheses with <strong>data</strong></li>
                  <li>• Predicts <strong>outcomes</strong> of policy changes</li>
                  <li>• Forms the <strong>scientific foundation</strong></li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <h6 className="font-semibold text-amber-400 text-xs mb-2">Normative Economics</h6>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Guides <strong>policy decisions</strong></li>
                  <li>• Weighs <strong>trade-offs</strong> (Equity vs. Efficiency)</li>
                  <li>• Reflects <strong>political values</strong></li>
                  <li>• Determines <strong>social priorities</strong></li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <h5 className="font-semibold text-purple-400 text-sm mb-2">
                Decision-Making at The Margin
              </h5>
              <p className="text-sm text-muted-foreground">
                Economic decision-making can be based on <strong className="text-cyan-400">facts</strong> (marginal cost vs. marginal benefit analysis) 
                but is often driven by <strong className="text-amber-400">values and ethical judgments</strong> about what outcomes are desirable for society.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        {/* Interactive Quiz */}
        <div className="glass-card p-4 my-4">
          <h4 className="font-serif text-lg font-bold text-silver-bright mb-4 flex items-center gap-2">
            <span className="text-purple-400">🎯</span> Interactive Identification Quiz
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Test your ability to distinguish between positive and normative statements—a key skill for CIE 9708 Paper 2 essays.
          </p>
          <PositiveNormativeQuiz />
        </div>

        {/* PPC Diagram Integration */}
        <div className="glass-card p-4 my-4">
          <h4 className="font-serif text-lg font-bold text-silver-bright mb-4 flex items-center gap-2">
            <span className="text-cyan-400">📊</span> The PPC: Facts vs. Choices
          </h4>
          <PositiveNormativePPCDiagram />
        </div>

        {/* Critical Evaluation for A* Essays */}
        <AnalysisBlock
          title="Critical Evaluation for A* Essays (AO4)"
          type="evaluation"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <h5 className="font-semibold text-amber-400 text-sm mb-3">
                ⚡ Why Do Economists Disagree?
              </h5>
              <p className="text-sm text-muted-foreground mb-3">
                Economists rarely disagree about the <strong className="text-cyan-400">facts</strong> (positive elements). 
                Their disagreements usually stem from different <strong className="text-amber-400">values</strong> (normative elements) regarding:
              </p>
              <div className="grid md:grid-cols-3 gap-2">
                <div className="p-2 rounded bg-charcoal-deep/50 text-center">
                  <span className="text-amber-400 font-semibold text-xs">Social Progress</span>
                </div>
                <div className="p-2 rounded bg-charcoal-deep/50 text-center">
                  <span className="text-amber-400 font-semibold text-xs">Income Distribution</span>
                </div>
                <div className="p-2 rounded bg-charcoal-deep/50 text-center">
                  <span className="text-amber-400 font-semibold text-xs">Role of Government</span>
                </div>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-silver/20">
                  <TableHead className="text-silver-bright text-xs">Aspect</TableHead>
                  <TableHead className="text-cyan-400 text-xs">Positive Analysis</TableHead>
                  <TableHead className="text-amber-400 text-xs">Normative Guidance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-silver/10">
                  <TableCell className="font-medium text-silver-bright text-sm py-2">Models</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-2">Used to build and test theories</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-2">Guides how models are applied in policy</TableCell>
                </TableRow>
                <TableRow className="border-silver/10">
                  <TableCell className="font-medium text-silver-bright text-sm py-2">Trade-offs</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-2">Identifies the opportunity costs</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-2">Determines which trade-offs are acceptable</TableCell>
                </TableRow>
                <TableRow className="border-silver/10">
                  <TableCell className="font-medium text-silver-bright text-sm py-2">Policy</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-2">Predicts policy outcomes</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-2">Decides if outcomes are desirable</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-silver/20">
              <h5 className="font-semibold text-silver-bright text-sm mb-2">
                📝 Essay Application (Paper 2 Skill)
              </h5>
              <p className="text-sm text-muted-foreground">
                When writing evaluative essays, <strong>distinguish clearly</strong> between your positive analysis 
                (evidence-based arguments) and normative conclusions (value-based recommendations). 
                A strong essay uses <strong className="text-cyan-400">facts to support arguments</strong> while 
                acknowledging that final policy choices depend on <strong className="text-amber-400">societal values</strong>.
              </p>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox
          variant="gold"
          title="Command Word Alert"
        >
          <ul className="space-y-2 text-sm">
            <li>• <strong className="text-cyan-400">'Analyze'</strong> requires positive reasoning—explain cause and effect using economic theory.</li>
            <li>• <strong className="text-amber-400">'Evaluate'</strong> requires normative judgment—weigh up arguments and reach a conclusion.</li>
            <li>• <strong className="text-purple-400">'Discuss'</strong> requires both—present positive facts AND normative perspectives.</li>
            <li>• Always identify whether exam questions ask for facts (positive) or opinions (normative).</li>
          </ul>
        </ExamTipBox>
      </ContentSection>

      {/* Section 1.5: Specialization and the Division of Labour */}
      <ContentSection 
        title="Section 1.5: Specialization and the Division of Labour" 
        subtitle="Efficiency, Productivity, and the Foundation of Trade"
      >
        {/* AO1 Definitions */}
        <NoteCard title="Examiner-Standard Definitions (AO1)" type="definition">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <h5 className="font-semibold text-cyan-400 mb-2">Specialization</h5>
              <p className="text-sm text-muted-foreground">
                The <GlossaryTooltip term="Specialization" definition="The concentration of individuals, firms, or economies on a narrow range of goods or services to increase efficiency and output.">concentration</GlossaryTooltip> of 
                <strong> individuals, firms, or economies</strong> on a <strong>narrow range of goods or services</strong>.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
              <h5 className="font-semibold text-purple-400 mb-2">Division of Labour</h5>
              <p className="text-sm text-muted-foreground">
                A specific type of specialization where the <strong>production process is broken down</strong> into 
                <strong> separate, repetitive tasks</strong> performed by <strong>different workers</strong>.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <h5 className="font-semibold text-amber-400 mb-2">Link to Scarcity</h5>
              <p className="text-sm text-muted-foreground">
                Specialization is a <strong>direct response to the Basic Economic Problem</strong> because it allows for 
                <strong className="text-cyan-400"> more efficient use of limited resources</strong>, increasing output from the same inputs.
              </p>
            </div>
          </div>
        </NoteCard>

        {/* Levels of Specialization */}
        <NoteCard title="Levels of Specialization" type="theory" delay={100}>
          <Table>
            <TableHeader>
              <TableRow className="border-silver/20">
                <TableHead className="text-silver-bright text-xs">Level</TableHead>
                <TableHead className="text-silver-bright text-xs">Description</TableHead>
                <TableHead className="text-silver-bright text-xs">Examples</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-cyan-400 text-sm py-2">Individual</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Workers master a particular skill or task</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Surgeons, software developers, electricians</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-purple-400 text-sm py-2">Firm</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Businesses focus on a specific industry or product</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Shell (oil), IKEA (furniture), Apple (technology)</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-green-400 text-sm py-2">Region</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Geographic areas specialize in certain outputs</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Silicon Valley (tech), Milan (fashion), Hollywood (film)</TableCell>
              </TableRow>
              <TableRow className="border-silver/10">
                <TableCell className="font-medium text-amber-400 text-sm py-2">Country</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Nations concentrate on goods with comparative advantage</TableCell>
                <TableCell className="text-muted-foreground text-sm py-2">Saudi Arabia (oil), Bangladesh (textiles), Germany (engineering)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </NoteCard>

        {/* Productivity Chain Diagram */}
        <div className="glass-card p-4 my-4">
          <ProductivityChainDiagram />
        </div>

        {/* PPC Connection */}
        <NoteCard title="The PPC Connection: Specialization and Economic Growth" type="concept" delay={150}>
          <p className="text-sm text-muted-foreground">
            Specialization leads to an <strong className="text-cyan-400">outward shift of the PPC</strong>, representing 
            an increase in the economy's <strong>productive capacity</strong>. This is <strong>economic growth</strong>.
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-4">
          <SpecializationPPCShiftDiagram />
        </div>

        {/* Trade Loop */}
        <NoteCard title="The Trade Loop: From Specialization to Money" type="theory" delay={200}>
          <p className="text-sm text-muted-foreground">
            <strong>Analyze</strong> the logical chain: Specialization creates surpluses that must be exchanged, 
            leading to the need for money as a medium of exchange.
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-4">
          <TradeLoopDiagram />
        </div>

        {/* Functions of Money */}
        <NoteCard title="The Functions of Money (Syllabus Page 16)" type="definition" delay={250}>
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Discuss</strong> why specialization requires money to replace the inefficient <strong>barter system</strong>. 
            Money must fulfill four key functions:
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-4">
          <FunctionsOfMoneyDiagram />
        </div>

        {/* Balanced Argument Table - AO4 */}
        <AnalysisBlock title="AO4 Critical Evaluation: Required for A-Grade" type="evaluation">
          <p className="text-sm text-muted-foreground mb-4">
            <strong>Evaluate</strong> the Division of Labour by presenting a balanced argument with benefits and risks:
          </p>
        </AnalysisBlock>

        <div className="glass-card p-4 my-4">
          <BalancedArgumentTable />
        </div>

        {/* Adam Smith Reference */}
        <NoteCard title="Adam Smith's Pin Factory (1776)" type="application" delay={300}>
          <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            <p className="text-sm text-muted-foreground">
              In <em>The Wealth of Nations</em>, Adam Smith observed a pin factory where 10 workers, each specializing 
              in one of 18 distinct operations, could produce <strong className="text-cyan-400">48,000 pins per day</strong>. 
              Without the division of labour, each worker could make <strong className="text-amber-400">only 20 pins per day</strong>.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong className="text-green-400">Productivity increase:</strong> From 200 pins (10 × 20) to 48,000 pins = <strong>240x improvement</strong>.
            </p>
          </div>
        </NoteCard>

        <ExamTipBox title="Essay Command Words for Section 1.5" variant="gold">
          <p className="text-sm mb-2">Use these <strong>command words</strong> precisely:</p>
          <ul className="space-y-1 text-xs">
            <li><strong className="text-cyan-400">Analyze:</strong> Break down the productivity chain step by step</li>
            <li><strong className="text-cyan-400">Evaluate:</strong> Present both benefits AND risks with a judgment</li>
            <li><strong className="text-cyan-400">Discuss:</strong> Explore multiple perspectives on specialization</li>
            <li><strong className="text-amber-400">Explain:</strong> Show the causal link between specialization → surplus → trade → money</li>
          </ul>
        </ExamTipBox>

        <ExamTipBox title="Syllabus Link: CIE 9708 (2026-2028)" variant="silver">
          <p className="text-sm mb-2">Key assessment objectives:</p>
          <ul className="space-y-1 text-xs">
            <li><strong className="text-cyan-400">AO1:</strong> Define specialization, division of labour, and the four functions of money</li>
            <li><strong className="text-cyan-400">AO2:</strong> Apply concepts to real-world examples (Adam Smith, modern firms)</li>
            <li><strong className="text-cyan-400">AO3:</strong> Analyze the productivity chain and link to PPC shifts</li>
            <li><strong className="text-amber-400">AO4:</strong> Evaluate benefits vs. risks; discuss trade-offs for workers, firms, and economies</li>
          </ul>
        </ExamTipBox>
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

      {/* Section 1.4: Resource Allocation in Different Economic Systems */}
      <ContentSection 
        title="Section 1.4: Resource Allocation in Different Economic Systems" 
        subtitle="How Market, Planned, and Mixed Economies Solve the Economic Problem"
      >
        <NoteCard title="Economic Systems: Core Definitions" type="definition">
          <p className="text-sm text-muted-foreground mb-3">
            An <GlossaryTooltip term="Economic System" definition="The organizational framework by which a society allocates its scarce resources to satisfy unlimited wants.">economic system</GlossaryTooltip> determines 
            how resources are allocated and provides answers to the three fundamental economic questions.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mt-3">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <h5 className="font-semibold text-blue-400 mb-2 text-sm">Market Economy</h5>
              <p className="text-xs text-muted-foreground">
                A system where resources are allocated through the <strong className="text-cyan-400">Price Mechanism</strong> (Supply and Demand) 
                with <strong>no government intervention</strong>.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
              <h5 className="font-semibold text-red-400 mb-2 text-sm">Planned (Command) Economy</h5>
              <p className="text-xs text-muted-foreground">
                A system where the <strong className="text-amber-400">Government/State</strong> determines resource allocation 
                through <strong>central planning</strong>.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
              <h5 className="font-semibold text-green-400 mb-2 text-sm">Mixed Economy</h5>
              <p className="text-xs text-muted-foreground">
                A system that <strong>combines</strong> both market forces and government intervention to allocate resources.
              </p>
            </div>
          </div>
        </NoteCard>

        {/* Resource Allocation Spectrum Diagram */}
        <div className="glass-card p-4 my-4">
          <ResourceAllocationSpectrumDiagram />
        </div>

        {/* Three Questions Analysis */}
        <NoteCard title="Analysis: The Three Basic Economic Questions" type="theory" delay={100}>
          <p className="text-sm text-muted-foreground mb-3">
            Each economic system answers the three fundamental questions differently based on its allocation mechanism:
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-3">
          <ThreeQuestionsComparisonDiagram />
        </div>

        {/* Price Mechanism Flow */}
        <NoteCard title="The Price Mechanism in Market Economies" type="concept" delay={150}>
          <p className="text-sm text-muted-foreground">
            In a market economy, the <GlossaryTooltip term="Price Mechanism" definition="The system by which prices act as signals to allocate resources. Rising prices signal producers to increase supply; falling prices signal reduced demand.">price mechanism</GlossaryTooltip> acts 
            as an automatic signal system that coordinates the decisions of buyers and sellers without central direction.
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-3">
          <PriceMechanismFlowDiagram />
        </div>

        {/* PPC Comparison */}
        <NoteCard title="Resource Allocation on the PPC" type="theory" delay={200}>
          <p className="text-sm text-muted-foreground">
            Different economic systems choose different points on the Production Possibility Curve based on their priorities:
          </p>
        </NoteCard>

        <div className="glass-card p-4 my-3">
          <SystemComparisonPPCDiagram />
        </div>

        {/* Market Economy Deep Dive */}
        <AnalysisBlock title="AO3 Analysis: Market Economy" type="analysis">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <h5 className="font-semibold text-green-400 mb-2 text-sm flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Strengths
              </h5>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• <strong className="text-cyan-400">Efficiency:</strong> Competition drives firms to minimize costs and innovate</li>
                <li>• <strong className="text-cyan-400">Consumer Sovereignty:</strong> Production responds to consumer preferences through demand signals</li>
                <li>• <strong className="text-cyan-400">Innovation:</strong> Profit motive incentivizes research, development, and entrepreneurship</li>
                <li>• <strong className="text-cyan-400">Quick Adjustment:</strong> Prices respond rapidly to changes in supply and demand conditions</li>
                <li>• <strong className="text-cyan-400">Variety:</strong> Competition leads to greater choice and quality improvements</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2 text-sm flex items-center gap-2">
                <span className="text-amber-400">✗</span> Weaknesses
              </h5>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• <strong className="text-amber-400">Market Failure:</strong> Externalities, public goods, and information asymmetries not addressed</li>
                <li>• <strong className="text-amber-400">Non-provision of Public Goods:</strong> Street lighting, defense, and infrastructure may not be provided</li>
                <li>• <strong className="text-amber-400">Inequality:</strong> Distribution based on purchasing power leads to income disparity</li>
                <li>• <strong className="text-amber-400">Demerit Goods:</strong> Overproduction of harmful goods like alcohol and cigarettes</li>
                <li>• <strong className="text-amber-400">Monopoly Power:</strong> Market concentration may reduce competition over time</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        {/* Planned Economy Deep Dive */}
        <AnalysisBlock title="AO3 Analysis: Planned (Command) Economy" type="analysis">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <h5 className="font-semibold text-green-400 mb-2 text-sm flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Strengths
              </h5>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• <strong className="text-cyan-400">Direct Provision:</strong> Public goods and merit goods (healthcare, education) guaranteed for all</li>
                <li>• <strong className="text-cyan-400">Reduced Inequality:</strong> Resources distributed based on need, minimizing income gaps</li>
                <li>• <strong className="text-cyan-400">Externalities Controlled:</strong> State can directly limit pollution and demerit goods</li>
                <li>• <strong className="text-cyan-400">No Wasteful Competition:</strong> Resources not spent on duplicate advertising or price wars</li>
                <li>• <strong className="text-cyan-400">Strategic Planning:</strong> Long-term national objectives can be prioritized</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <h5 className="font-semibold text-red-400 mb-2 text-sm flex items-center gap-2">
                <span className="text-amber-400">✗</span> Weaknesses
              </h5>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• <strong className="text-amber-400">Inefficiency:</strong> No profit motive leads to X-inefficiency and waste</li>
                <li>• <strong className="text-amber-400">Surpluses/Shortages:</strong> Central planners cannot accurately predict demand</li>
                <li>• <strong className="text-amber-400">Lack of Innovation:</strong> No incentive to develop new products or improve quality</li>
                <li>• <strong className="text-amber-400">Limited Choice:</strong> Standardized products reduce consumer variety</li>
                <li>• <strong className="text-amber-400">Bureaucratic Delays:</strong> Slow response to changing economic conditions</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        {/* Mixed Economy Evaluation */}
        <AnalysisBlock title="AO4 Evaluation: Mixed Economy – Correcting Market Failures" type="evaluation">
          <p className="text-sm text-muted-foreground mb-3">
            In a <span className="text-green-400 font-medium">Mixed Economy</span>, government intervention aims to correct market failures while maintaining the benefits of competition:
          </p>
          <div className="grid md:grid-cols-3 gap-3 mt-3">
            <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <h6 className="text-cyan-400 font-medium text-xs mb-2">Taxation</h6>
              <p className="text-xs text-muted-foreground">
                Taxes on negative externalities (pollution, tobacco) internalize external costs and discourage consumption
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
              <h6 className="text-green-400 font-medium text-xs mb-2">Subsidies</h6>
              <p className="text-xs text-muted-foreground">
                Subsidies for merit goods (education, healthcare) encourage consumption beyond market equilibrium
              </p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <h6 className="text-amber-400 font-medium text-xs mb-2">Regulation</h6>
              <p className="text-xs text-muted-foreground">
                Laws and standards ensure quality, safety, and environmental protection in market activities
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-xs text-muted-foreground">
              <span className="text-primary font-medium">Evaluation Point:</span> The optimal balance between market forces and government intervention 
              depends on the <strong>magnitude</strong> of market failure, <strong>political ideology</strong>, and the <strong>capacity</strong> of 
              government institutions to intervene effectively. Over-intervention may lead to government failure.
            </p>
          </div>
        </AnalysisBlock>

        {/* Transition to Mixed Economy */}
        <NoteCard title="Transition from Planned to Mixed Economy" type="application" delay={250}>
          <p className="text-sm text-muted-foreground mb-2">
            When a planned economy transforms into a mixed economy:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-2 rounded bg-green-500/10 border border-green-500/20 text-xs">
              <strong className="text-green-400">Positive Impacts:</strong>
              <ul className="mt-1 text-muted-foreground space-y-0.5">
                <li>• Stronger, more efficient financial system</li>
                <li>• Active business environment with entrepreneurship</li>
                <li>• Greater variety of goods and services</li>
                <li>• Improved allocation of resources</li>
                <li>• Foreign direct investment attracted</li>
              </ul>
            </div>
            <div className="p-2 rounded bg-red-500/10 border border-red-500/20 text-xs">
              <strong className="text-red-400">Negative Impacts:</strong>
              <ul className="mt-1 text-muted-foreground space-y-0.5">
                <li>• Transitional unemployment as state firms close</li>
                <li>• Initial increase in inequality</li>
                <li>• Need for new regulatory frameworks</li>
                <li>• Consumer exploitation during transition</li>
                <li>• Social safety nets must be established</li>
              </ul>
            </div>
          </div>
        </NoteCard>

        <ExamTipBox title="AO4 Evaluation Phrases for Economic Systems" variant="gold">
          <p className="text-sm">Use these evaluation connectives for top marks:</p>
          <ul className="mt-2 space-y-1 text-xs">
            <li>• "However, this depends on the <strong>magnitude</strong> of government intervention..."</li>
            <li>• "The effectiveness is limited by <strong>time lags</strong> in policy implementation..."</li>
            <li>• "This analysis assumes <strong>ceteris paribus</strong>, but in reality mixed economies vary significantly..."</li>
            <li>• "It could be argued that... <strong>on the other hand</strong>..."</li>
            <li>• "The degree of market vs. planning depends on <strong>political ideology</strong> and institutional capacity..."</li>
            <li>• "Government intervention may lead to <strong>government failure</strong> if poorly implemented..."</li>
          </ul>
        </ExamTipBox>

        <ExamTipBox title="Syllabus Link: CIE 9708 (2026-2028)" variant="silver">
          <p className="text-sm mb-2">Key assessment objectives for this section:</p>
          <ul className="space-y-1 text-xs">
            <li><strong className="text-cyan-400">AO1:</strong> Define market, planned, and mixed economies with precision</li>
            <li><strong className="text-cyan-400">AO2:</strong> Apply the price mechanism to explain resource allocation</li>
            <li><strong className="text-cyan-400">AO3:</strong> Analyze how each system answers the three basic questions</li>
            <li><strong className="text-amber-400">AO4:</strong> Evaluate strengths and weaknesses; discuss trade-offs between efficiency and equity</li>
          </ul>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default BasicEconomicIdeas;
