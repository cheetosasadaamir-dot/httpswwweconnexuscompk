import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import PPCConceptDiagram from '@/components/diagrams/PPCConceptDiagram';
import FactorsOfProductionDiagram from '@/components/diagrams/FactorsOfProductionDiagram';
import PPCShiftsDiagram from '@/components/diagrams/PPCShiftsDiagram';
import OpportunityCostPPCDiagram from '@/components/diagrams/OpportunityCostPPCDiagram';
import ResourceAllocationSpectrumDiagram from '@/components/diagrams/ResourceAllocationSpectrumDiagram';
import PriceMechanismFlowDiagram from '@/components/diagrams/PriceMechanismFlowDiagram';
import PositiveNormativePPCDiagram from '@/components/diagrams/PositiveNormativePPCDiagram';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const BasicEconomicIdeas = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header */}
        <div className="mb-6">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 1</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-3">
            Basic Economic Ideas
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding Scarcity, Opportunity Cost, the Factors of Production, and the Production Possibility Curve as the Analytical Foundation of Economic Theory.
          </p>
        </div>

        {/* Syllabus Overview */}
        <div className="glass-card p-4 mb-6">
          <h3 className="font-serif text-lg font-semibold mb-2">Syllabus Coverage (CIE 9708)</h3>
          <div className="grid md:grid-cols-2 gap-1 text-sm">
            <p>1. The Basic Economic Problem: Scarcity and Choice</p>
            <p>2. Opportunity Cost and Resource Allocation</p>
            <p>3. The Factors of Production and Their Rewards</p>
            <p>4. The Production Possibility Curve (PPC)</p>
            <p>5. Economic Systems: Free Market, Command, Mixed</p>
            <p>6. Positive and Normative Statements</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1: THE FUNDAMENTAL ECONOMIC PROBLEM */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="The Fundamental Economic Problem">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Scarcity: The Central Problem of Economics</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The discipline of <strong className="text-foreground">Economics</strong> is fundamentally concerned with a single, immutable problem: the allocation of <strong className="text-primary">scarce resources</strong> among competing uses to satisfy <strong className="text-secondary">unlimited human wants</strong>. This tension between finite means and infinite ends defines what economists term the <strong className="text-foreground">Basic Economic Problem</strong>, or more precisely, the <strong className="text-destructive">Problem of Scarcity</strong>. Resources—whether natural (land, minerals, forests), human (labour, skills, entrepreneurship), or man-made (capital, machinery, infrastructure)—exist in limited quantities at any given point in time. Yet human desires for goods and services are, by their nature, insatiable; the satisfaction of one want merely gives rise to another. It is this fundamental asymmetry that necessitates <em>choice</em>: because we cannot have everything, we must decide what to produce, how to produce it, and for whom to produce it. Every society, regardless of its political structure or level of development, confronts this problem. The study of economics is, at its core, the study of how these choices are made and what their consequences are.
            </p>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">The Economic Problem in a Sentence</p>
              <BlockMath>{'\\text{Limited Resources} + \\text{Unlimited Wants} = \\text{Scarcity} \\Rightarrow \\text{Choice} \\Rightarrow \\text{Opportunity Cost}'}</BlockMath>
            </div>

            <AnalysisBlock title="Chain of Analysis: From Scarcity to the Three Fundamental Questions" type="analysis">
              <p className="text-sm leading-relaxed">
                <strong>Step 1:</strong> The fact of scarcity implies that not all wants can be satisfied simultaneously. <strong>Step 2:</strong> This necessitates <em>choice</em>—individuals, firms, and governments must decide which wants to prioritise. <strong>Step 3:</strong> Every choice involves a <strong className="text-secondary">trade-off</strong>; selecting one option means rejecting others. <strong>Step 4:</strong> This trade-off gives rise to <strong className="text-primary">Opportunity Cost</strong>—defined as the value of the <em>next best alternative foregone</em> when a choice is made. <strong>Step 5:</strong> The existence of opportunity cost frames the three fundamental questions every economic system must answer: <strong className="text-cambridge-cyan">(1) What to produce?</strong> Given limited resources, which goods and services should be produced, and in what quantities? <strong className="text-cambridge-magenta">(2) How to produce?</strong> What combination of factors of production should be employed—should production be labour-intensive or capital-intensive? <strong className="text-cambridge-green">(3) For whom to produce?</strong> How should the resulting output be distributed among the population—equally, according to ability to pay, or by some other criterion?
              </p>
            </AnalysisBlock>
          </div>

          {/* Economic vs Free Goods */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">Classification of Goods: Economic Goods vs. Free Goods</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The concept of scarcity provides the basis for distinguishing between two categories of goods. An <strong className="text-foreground">Economic Good</strong> is any good or service that is scarce relative to the demand for it, and thus has an <strong className="text-primary">opportunity cost</strong> attached to its production or consumption. Because resources must be diverted to produce it, consuming an economic good means forgoing the production of something else. Examples include all manufactured products, most natural resources (oil, land, metals), and human services (healthcare, education, legal advice). In contrast, a <strong className="text-foreground">Free Good</strong> is one that exists in such abundance relative to demand that it has a <strong className="text-cambridge-green">zero opportunity cost</strong>—consuming it does not require sacrificing anything else. The classic example is <em>air</em>: in normal circumstances, breathing air does not preclude anyone else from doing the same, and no resources need to be diverted to provide it. However, it is crucial to note that the boundary between free and economic goods is context-dependent: air becomes an economic good in a submarine, a spacecraft, or a heavily polluted city where clean air must be actively produced and distributed.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(180 100% 50% / 0.05)', borderColor: 'hsl(180 100% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(180 100% 50%)' }}>Economic Goods</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Scarce relative to demand</li>
                  <li>• Positive opportunity cost</li>
                  <li>• Requires factors of production</li>
                  <li>• Commands a price in markets</li>
                  <li>• <em>Examples:</em> Cars, houses, healthcare, education</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(142 76% 50% / 0.05)', borderColor: 'hsl(142 76% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(142 76% 50%)' }}>Free Goods</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Abundant relative to demand</li>
                  <li>• Zero opportunity cost</li>
                  <li>• No production required</li>
                  <li>• No market price</li>
                  <li>• <em>Examples:</em> Air (normally), sunlight, seawater</li>
                </ul>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: FACTORS OF PRODUCTION */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="The Factors of Production">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">The Four Categories of Economic Resources</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Economists classify the scarce resources used in the production of goods and services into four broad categories, collectively termed the <strong className="text-foreground">Factors of Production</strong>. Each factor contributes distinctly to the production process and earns a corresponding <strong className="text-secondary">factor reward</strong> for its participation. <strong className="text-cambridge-green">Land</strong> encompasses all natural resources—not merely agricultural land, but also minerals, forests, water bodies, and the original, unimproved gifts of nature. Its factor reward is <strong className="text-primary">Rent</strong>. <strong className="text-cambridge-cyan">Labour</strong> represents the human input into production—the physical effort and mental skill that workers provide. Its factor reward is <strong className="text-primary">Wages</strong> (or Salaries). <strong className="text-cambridge-magenta">Capital</strong> refers to man-made aids to production: machinery, factories, tools, vehicles, and infrastructure. Crucially, <em>financial capital</em> (money) is not a factor of production in itself, but rather a claim on real productive resources. The factor reward for capital is <strong className="text-primary">Interest</strong>. Finally, <strong className="text-cambridge-orange">Enterprise</strong> (or Entrepreneurship) is the fourth factor: the ability to organise the other three factors, bear the risk of production, and innovate. The factor reward for enterprise is <strong className="text-primary">Profit</strong>.
            </p>

            <FactorsOfProductionDiagram />

            <AnalysisBlock title="Chain of Analysis: Factor Intensity and Production Methods" type="analysis">
              <p className="text-sm leading-relaxed">
                The relative <strong>scarcity and cost</strong> of different factors of production in a given economy determines the most efficient <em>method of production</em>. In economies where labour is abundant and cheap relative to capital (e.g., many developing countries), production methods tend to be <strong className="text-cambridge-cyan">labour-intensive</strong>—employing large numbers of workers relative to machinery. Conversely, in economies where labour is scarce and expensive relative to capital (e.g., developed economies with high wage levels), production methods tend to be <strong className="text-cambridge-magenta">capital-intensive</strong>—substituting machinery for human effort wherever possible. This substitutability between factors is captured by the <em>isoquant</em> in more advanced microeconomic analysis. The choice of production method directly affects unit costs, employment levels, and the distribution of income between factor owners—making it a central concern of both microeconomic and macroeconomic policy.
              </p>
            </AnalysisBlock>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: THE PRODUCTION POSSIBILITY CURVE */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="The Production Possibility Curve (PPC)">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Graphical Representation of Scarcity and Choice</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              The <strong className="text-foreground">Production Possibility Curve (PPC)</strong>, also known as the Production Possibility Frontier (PPF) or Transformation Curve, is the foundational graphical model in economics. It represents the <strong className="text-primary">maximum possible combinations</strong> of two goods (or categories of goods) that an economy can produce in a given time period, assuming: (a) all resources are fully and efficiently employed; (b) the state of technology is fixed; and (c) the quantity of available factors of production is constant. Any point <strong className="text-secondary">on the curve</strong> represents <em>productive efficiency</em>—the economy is producing at its maximum potential with no resources lying idle. Any point <strong className="text-destructive">inside the curve</strong> represents <em>productive inefficiency</em>—resources are being wasted due to unemployment, underemployment, or misallocation. Any point <strong className="text-cambridge-orange">outside the curve</strong> is <em>currently unattainable</em>—it would require more resources or better technology than presently available.
            </p>

            <PPCConceptDiagram title="The Production Possibility Curve: Key Points" />

            <AnalysisBlock title="Chain of Analysis: The Concave Shape and the Law of Increasing Opportunity Cost" type="analysis">
              <p className="text-sm leading-relaxed">
                The PPC is typically drawn as a curve that is <strong className="text-primary">concave to the origin</strong> (bowed outward), rather than as a straight line. This shape reflects the <strong className="text-secondary">Law of Increasing Opportunity Cost</strong>. <strong>Step 1:</strong> As an economy reallocates resources from Good Y to Good X (moving along the PPC), it must progressively sacrifice increasing amounts of Good Y for each additional unit of Good X. <strong>Step 2:</strong> This occurs because factors of production are <em>not perfectly homogeneous</em> or perfectly substitutable between uses. Resources that are highly suited to producing Good Y (e.g., skilled textile workers) are less suited to producing Good X (e.g., electronic components), and vice versa. <strong>Step 3:</strong> Initially, when production of Good X is low, the economy can shift resources that are relatively less suited to Good Y production, incurring a low opportunity cost. <strong>Step 4:</strong> As production of Good X expands, increasingly specialised Good Y resources must be diverted, and their opportunity cost (in terms of forgone Good Y) rises. <strong>Step 5:</strong> If factors were perfectly homogeneous and substitutable, the PPC would be a straight line with a constant opportunity cost—but this is rarely the case in practice.
              </p>
            </AnalysisBlock>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
              <p className="text-sm font-semibold text-foreground mb-2">Opportunity Cost on the PPC</p>
              <BlockMath>{'\\text{Opportunity Cost of } X = \\frac{\\Delta Q_Y}{\\Delta Q_X} = \\text{MRT (Marginal Rate of Transformation)}'}</BlockMath>
            </div>

            <OpportunityCostPPCDiagram type="increasing" />
          </div>

          {/* Shifts vs Movements */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">Movements Along vs. Shifts of the PPC</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              A critical analytical distinction must be drawn between a <strong className="text-foreground">movement along the PPC</strong> and a <strong className="text-foreground">shift of the PPC</strong>. A <strong className="text-cambridge-cyan">movement along</strong> the curve (e.g., from point A to point B) represents a <em>reallocation of existing resources</em> between the two goods. It involves a trade-off: producing more of one good necessitates producing less of the other, given fixed resources and technology. This movement illustrates opportunity cost in action but does <em>not</em> represent economic growth. In contrast, a <strong className="text-cambridge-green">rightward (outward) shift</strong> of the entire PPC represents <strong className="text-primary">long-run economic growth</strong>—an increase in the economy's <em>productive potential</em>. This shift can be caused by: (1) an increase in the <em>quantity</em> of factors of production (e.g., population growth, capital accumulation, discovery of natural resources); or (2) an increase in the <em>quality</em> or <em>productivity</em> of factors (e.g., technological progress, improvements in education and training, better infrastructure). An <strong className="text-destructive">inward (leftward) shift</strong> of the PPC represents a contraction of productive potential, which might result from natural disasters, war, emigration, or capital depreciation exceeding investment.
            </p>

            <PPCShiftsDiagram type="parallel" />

            <ExamTipBox title="Common Examination Error: Confusing Reallocation with Growth" variant="warning">
              <p className="text-sm leading-relaxed">
                Many candidates incorrectly describe a movement <em>along</em> the PPC as "economic growth." This is a fundamental error. A movement from one efficient point to another simply reflects a change in the <strong>composition of output</strong>—a reallocation of existing resources—not an expansion of the economy's capacity. True economic growth is represented <strong>only</strong> by an outward shift of the entire frontier. Similarly, moving from a point <em>inside</em> the PPC to a point <em>on</em> the PPC represents an increase in <strong>actual output</strong> (utilising previously idle resources), but not an increase in <strong>potential output</strong> unless the frontier itself shifts.
              </p>
            </ExamTipBox>
          </div>

          {/* Senior Examiner Conclusion */}
          <div className="glass-card p-5 space-y-4 mt-4 border-l-4 border-primary">
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="text-primary font-serif text-lg">Senior Examiner's Conclusion:</strong> Ultimately, while the Production Possibility Curve is a <em>static model</em>—holding resources and technology constant—it effectively illustrates the fundamental trade-offs faced by all societies. It demonstrates that scarcity imposes limits, that choices have opportunity costs, and that economic growth requires expanding those limits through investment, innovation, or resource discovery. However, the model's real-world utility is limited by the fact that economies <strong>rarely operate at full capacity</strong>, often languishing at points <em>inside</em> the frontier due to structural unemployment, frictional inefficiencies, or cyclical downturns. Furthermore, the model abstracts from the distribution question: a point on the PPC says nothing about <em>who</em> receives the output, which may be as important for social welfare as the total quantity produced.
            </p>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 4: ECONOMIC SYSTEMS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Economic Systems: Solving the Allocation Problem">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Alternative Mechanisms for Resource Allocation</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every society must develop some mechanism for answering the three fundamental economic questions. Historically, two polar approaches have dominated theoretical and practical discourse: the <strong className="text-cambridge-cyan">Free Market Economy</strong> and the <strong className="text-destructive">Command (Planned) Economy</strong>. In reality, all contemporary economies are <strong className="text-cambridge-green">Mixed Economies</strong>, combining elements of both in varying proportions.
            </p>

            <ResourceAllocationSpectrumDiagram />
          </div>

          {/* Free Market */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">The Free Market Economy</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              In a pure <strong className="text-foreground">Free Market (Capitalist) Economy</strong>, resource allocation is determined by the <strong className="text-primary">price mechanism</strong>—the interaction of supply and demand in decentralised markets. Private individuals and firms own the factors of production, and decisions about what, how, and for whom to produce are made by millions of independent economic agents pursuing their own self-interest. Adam Smith famously described this as the <strong className="text-secondary">"Invisible Hand"</strong>: though each individual seeks only their own gain, they are led, as if by an invisible hand, to promote the public interest. The price mechanism performs three crucial functions: <strong className="text-cambridge-cyan">(1) Signalling</strong>—prices convey information about relative scarcity; a rising price signals increased scarcity and incentivises producers to supply more. <strong className="text-cambridge-magenta">(2) Rationing</strong>—prices allocate scarce goods to those consumers willing and able to pay; when demand exceeds supply, the price rises to ration the available quantity. <strong className="text-cambridge-green">(3) Incentive</strong>—prices provide incentives for producers to respond to consumer preferences; high prices and profits attract resources into an industry, while low prices and losses drive resources out.
            </p>

            <PriceMechanismFlowDiagram />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(142 76% 50% / 0.05)', borderColor: 'hsl(142 76% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(142 76% 50%)' }}>Advantages of Free Markets</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>Consumer sovereignty:</strong> Production responds to consumer preferences</li>
                  <li>• <strong>Allocative efficiency:</strong> Resources flow to highest-valued uses</li>
                  <li>• <strong>Productive efficiency:</strong> Competition minimises costs</li>
                  <li>• <strong>Innovation:</strong> Profit motive drives technological progress</li>
                  <li>• <strong>Choice and variety:</strong> Diverse products to meet diverse needs</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(0 84% 60% / 0.05)', borderColor: 'hsl(0 84% 60% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(0 84% 60%)' }}>Limitations of Free Markets</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>Market failure:</strong> Externalities, public goods, information asymmetries</li>
                  <li>• <strong>Inequality:</strong> Resources allocated by ability to pay, not need</li>
                  <li>• <strong>Instability:</strong> Business cycles, unemployment, inflation</li>
                  <li>• <strong>Monopoly power:</strong> Competition may be eliminated</li>
                  <li>• <strong>Short-termism:</strong> Markets may undervalue long-term sustainability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Command Economy */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">The Command (Planned) Economy</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              In a pure <strong className="text-foreground">Command Economy</strong>, the state owns all (or most) factors of production and makes all major allocation decisions through <strong className="text-primary">central planning</strong>. A planning authority determines what to produce (through production targets), how to produce (through directives to state enterprises), and for whom to produce (through administered prices, wages, and rationing). The theoretical justification for command economies rests on the belief that state planners, acting in the public interest, can overcome the failures of markets—ensuring full employment, equitable distribution, and investment in public goods and long-term development. Historical examples include the Soviet Union, Maoist China, and Cuba. However, command economies have proven <strong className="text-destructive">systemically inefficient</strong>: without price signals, planners lack the information necessary to allocate resources efficiently; without profit incentives, enterprises lack the motivation to innovate or minimise costs; and without consumer sovereignty, production often fails to match consumer preferences, leading to chronic shortages of desired goods and surpluses of unwanted ones. By the late 20th century, most command economies had collapsed or transitioned toward market-oriented systems.
            </p>
          </div>

          {/* Mixed Economy */}
          <div className="glass-card p-5 space-y-4 mt-4">
            <h3 className="font-serif text-xl text-gradient">The Mixed Economy: A Pragmatic Synthesis</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">Mixed Economy</strong> combines elements of both market and command systems, seeking to harness the efficiency advantages of markets while using state intervention to correct market failures and achieve social objectives. In a mixed economy, the <strong className="text-primary">private sector</strong> operates through the price mechanism, producing most goods and services in competitive markets. The <strong className="text-secondary">public sector</strong> intervenes in specific areas: (1) providing <em>public goods</em> (defence, law enforcement) that markets would not supply; (2) subsidising <em>merit goods</em> (healthcare, education) that markets would under-provide; (3) regulating <em>externalities</em> through taxes, subsidies, or direct controls; (4) redistributing income through taxation and welfare systems; (5) stabilising the macroeconomy through fiscal and monetary policy. The precise "mix" varies widely across countries: Scandinavian economies feature extensive welfare states; the United States relies more heavily on markets; Singapore combines free trade with significant state ownership of land and housing. The optimal mix is itself a subject of ongoing political and economic debate.
            </p>

            <ExamTipBox title="Critical Evaluation: No System is 'Best'" variant="gold">
              <p className="text-sm leading-relaxed">
                <strong className="text-primary">Senior Examiner's Conclusion:</strong> In conclusion, the question of the "best" economic system is fundamentally a <strong>normative judgment</strong>. Free markets maximise choice and productive efficiency but often exacerbate income inequality and fail to provide public and merit goods. Command economies can achieve equity and full employment in theory but suffer from chronic information and incentive problems in practice. Mixed economies seek a pragmatic balance, but the "correct" degree of government intervention remains contested. Different societies, with different values and priorities, will rationally choose different positions on the spectrum—and those positions will evolve over time as economic conditions and social preferences change.
              </p>
            </ExamTipBox>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 5: POSITIVE AND NORMATIVE STATEMENTS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Positive and Normative Statements">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-serif text-xl text-gradient">Facts vs. Value Judgments in Economic Analysis</h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              A fundamental methodological distinction in economics separates <strong className="text-cambridge-cyan">Positive Statements</strong> from <strong className="text-cambridge-orange">Normative Statements</strong>. <strong>Positive statements</strong> are <em>objective</em>, factual claims about "what is" or "what would happen if." They can, in principle, be <strong>tested, verified, or falsified</strong> by reference to empirical evidence. For example: "An increase in the minimum wage will reduce employment among low-skilled workers" is a positive statement—regardless of whether it is true or false, it is a testable hypothesis about the relationship between two variables. <strong>Normative statements</strong>, in contrast, are <em>subjective</em> claims about "what ought to be" or "what should happen." They contain <strong>value judgments</strong> that cannot be proven or disproven by facts alone. For example: "The government <em>should</em> raise the minimum wage to reduce poverty" is a normative statement—it reflects an ethical position about fairness and the role of government, not a testable hypothesis.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(180 100% 50% / 0.05)', borderColor: 'hsl(180 100% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(180 100% 50%)' }}>Positive Statements (Testable)</h4>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li>"A rise in interest rates will reduce investment."</li>
                  <li>"Unemployment in the UK is currently 4.2%."</li>
                  <li>"A depreciation of the currency increases export competitiveness."</li>
                  <li>"The multiplier in a closed economy is 1/(1-MPC)."</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ backgroundColor: 'hsl(36 100% 50% / 0.05)', borderColor: 'hsl(36 100% 50% / 0.3)' }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: 'hsl(36 100% 50%)' }}>Normative Statements (Value-Based)</h4>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li>"The government <em>should</em> increase the minimum wage."</li>
                  <li>"The rich <em>ought</em> to pay higher taxes."</li>
                  <li>"It is <em>unfair</em> that CEOs earn 300 times more than workers."</li>
                  <li>"Healthcare <em>should</em> be free for all citizens."</li>
                </ul>
              </div>
            </div>

            <PositiveNormativePPCDiagram />

            <AnalysisBlock title="Why the Distinction Matters for Economic Policy" type="analysis">
              <p className="text-sm leading-relaxed">
                Economics aspires to be a <strong>social science</strong>, building its analysis on positive (testable) foundations. However, <strong>economic policy</strong> is inherently normative—it involves choices about what <em>should</em> be done, which reflect society's values and priorities. The role of the economist is to provide positive analysis of the likely consequences of different policies ("If you do X, then Y will probably happen"), enabling policymakers to make <em>informed</em> normative choices. Conflating positive and normative statements is a common source of confusion: two economists may agree on the positive analysis (e.g., that raising the minimum wage reduces employment) but disagree on the normative conclusion (e.g., whether the trade-off is acceptable). Recognising this distinction is essential for clear thinking about economic debates.
              </p>
            </AnalysisBlock>
          </div>
        </ContentSection>

        {/* Final Synthesis */}
        <ContentSection title="Chapter Synthesis">
          <div className="glass-card p-5 border-l-4 border-primary">
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="text-primary font-serif text-lg">Senior Examiner's Final Assessment:</strong> The foundational concepts of this chapter—scarcity, opportunity cost, the factors of production, and the Production Possibility Curve—form the analytical bedrock upon which all subsequent economic theory is constructed. Scarcity is not merely a constraint to be lamented; it is the <em>raison d'être</em> of economics as a discipline. Without scarcity, there would be no need for choice; without choice, no opportunity cost; without opportunity cost, no economics. The PPC, for all its simplicity, encapsulates these ideas elegantly: it shows the limits imposed by scarce resources, the trade-offs inherent in any allocation decision, and the conditions under which those limits can be expanded through growth and technological progress. Understanding these fundamentals is essential for engaging with the more complex models of markets, governments, and international trade that follow in subsequent chapters.
            </p>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default BasicEconomicIdeas;
