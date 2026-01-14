import ChapterLayout from '@/components/ChapterLayout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import ExamTipBox from '@/components/ExamTipBox';
import AnalysisBlock from '@/components/AnalysisBlock';
import GlossaryTooltip from '@/components/GlossaryTooltip';
import PPCConceptDiagram from '@/components/diagrams/PPCConceptDiagram';
import FactorsOfProductionDiagram from '@/components/diagrams/FactorsOfProductionDiagram';

const BasicEconomicProblem = () => {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="The Basic Economic Problem"
      subtitle="Understanding scarcity, choice, and opportunity cost - the foundation of all economics"
    >
      <ContentSection title="Scarcity and Opportunity Cost">
        <NoteCard title="The Fundamental Problem" type="theory">
          <p>
            The basic economic problem is that of <GlossaryTooltip term="Scarcity" definition="The condition where unlimited wants exceed the limited resources available to satisfy them.">scarcity</GlossaryTooltip>. 
            Given that human wants are <strong>unlimited</strong> and that resources are <strong>finite</strong>, 
            choices have to be made between the various uses of resources.
          </p>
          <p className="mt-4">
            This forces every individual, firm, and government to make choices about how to allocate their limited resources.
          </p>
        </NoteCard>

        <NoteCard title="Opportunity Cost Explained" type="application" delay={200}>
          <p>
            <GlossaryTooltip term="Opportunity Cost" definition="The value of the next best alternative foregone when making a choice.">Opportunity cost</GlossaryTooltip> is the value of the 
            next best alternative sacrificed when making a choice.
          </p>
          <p className="mt-4">
            <strong>Example:</strong> If by allocating a tree to table production, one extra table is produced 
            but 25 books need to be sacrificed, the opportunity cost of producing one more table is 25 books.
          </p>
        </NoteCard>

        <ExamTipBox title="Key Distinction" variant="gold">
          <p>
            <strong>Economic goods</strong> have an opportunity cost (scarce resources sacrificed to produce them).
          </p>
          <p className="mt-2">
            <strong>Free goods</strong> have zero opportunity cost (e.g., air, sea water).
          </p>
          <p className="mt-2 text-sm">
            ⚠️ Remember: Goods available at zero price are NOT free goods if scarce resources were used to produce them!
          </p>
        </ExamTipBox>
      </ContentSection>

      <ContentSection title="Factors of Production">
        <p className="text-muted-foreground mb-8">
          Resources used in production are called <strong>factors of production</strong>. They are separated into four categories:
        </p>
        
        <FactorsOfProductionDiagram />

        <NoteCard title="Understanding Returns" type="theory" delay={100} className="mt-8">
          <ul className="space-y-2">
            <li>• <strong>Land</strong> includes all natural resources (forests, minerals, oil). Return: <em>Rent</em></li>
            <li>• <strong>Labour</strong> is human physical and mental effort. Return: <em>Wages</em></li>
            <li>• <strong>Capital</strong> means manufactured resources (machinery, tools). Return: <em>Interest</em></li>
            <li>• <strong>Enterprise</strong> is risk-taking and organizing factors. Return: <em>Profit</em></li>
          </ul>
        </NoteCard>
      </ContentSection>

      <ContentSection title="The Production Possibility Curve (PPC)">
        <NoteCard title="What is the PPC?" type="theory">
          <p>
            The <GlossaryTooltip term="Production Possibility Curve" definition="A curve showing the maximum possible output combinations of two goods given fixed resources and technology.">PPC</GlossaryTooltip> is an economic 
            model showing the maximum output of two goods that can be produced, holding all resources and 
            technology constant.
          </p>
        </NoteCard>

        <div className="glass-card p-8 my-8">
          <PPCConceptDiagram title="Figure 1.1: The Production Possibility Curve" />
        </div>

        <AnalysisBlock title="Understanding PPC Points" type="analysis">
          <ul className="space-y-2">
            <li><strong>Points on the curve (A, B, C):</strong> Full employment of resources - efficient production</li>
            <li><strong>Point H (inside):</strong> Unemployment or inefficiency - not using all available resources</li>
            <li><strong>Point F (outside):</strong> Unattainable with current resources - represents scarcity</li>
          </ul>
        </AnalysisBlock>

        <AnalysisBlock title="Critical Evaluation: What the PPC Shows" type="evaluation" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Microeconomic Concepts:</h5>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Scarcity:</strong> Points beyond PPC are unattainable</li>
                <li>• <strong>Choice:</strong> Points on PPC represent different choices</li>
                <li>• <strong>Opportunity Cost:</strong> Slope of PPC shows trade-offs</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-silver-bright mb-2">Macroeconomic Concepts:</h5>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Unemployment:</strong> Points inside PPC</li>
                <li>• <strong>Economic Growth:</strong> Outward shift of PPC</li>
                <li>• <strong>Efficiency:</strong> All points on the curve</li>
              </ul>
            </div>
          </div>
        </AnalysisBlock>

        <ExamTipBox title="Common Exam Question" variant="gold" className="mt-6">
          <p>
            <strong>Q: "Explain why a movement from inside the PPC to a point on the PPC has zero opportunity cost."</strong>
          </p>
          <p className="mt-2">
            <strong>A:</strong> Moving from inside the PPC to a point on the curve uses previously idle resources. 
            Since these resources weren't being used, nothing is sacrificed - hence zero opportunity cost.
          </p>
        </ExamTipBox>
      </ContentSection>

      <ContentSection title="Shape of the PPC">
        <NoteCard title="Concave PPC: Increasing Opportunity Cost" type="theory">
          <p>
            A <strong>concave (bowed outward)</strong> PPC shows <em>increasing opportunity cost</em>. 
            This occurs because resources are not equally suited for producing all goods.
          </p>
          <p className="mt-3">
            As we produce more of Good X, we must divert resources better suited to Good Y, 
            making each additional unit of X increasingly costly.
          </p>
        </NoteCard>

        <NoteCard title="Linear PPC: Constant Opportunity Cost" type="application" delay={100}>
          <p>
            A <strong>linear (straight line)</strong> PPC shows <em>constant opportunity cost</em>.
          </p>
          <p className="mt-3">
            This implies factors are perfectly mobile between uses - unrealistic in the real world, 
            but useful for simplified analysis.
          </p>
        </NoteCard>

        <ExamTipBox title="Examiner's Favourite" variant="silver">
          <p>
            Always explain WHY the PPC is typically concave: resources are <strong>specialized</strong> 
            and not perfectly transferable between different types of production.
          </p>
        </ExamTipBox>
      </ContentSection>
    </ChapterLayout>
  );
};

export default BasicEconomicProblem;
