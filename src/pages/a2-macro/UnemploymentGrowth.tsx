import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import PhillipsCurveDiagram from '@/components/diagrams/PhillipsCurveDiagram';
import ClassicalUnemploymentDiagram from '@/components/diagrams/ClassicalUnemploymentDiagram';
import CyclicalUnemploymentDiagram from '@/components/diagrams/CyclicalUnemploymentDiagram';

const UnemploymentGrowth = () => {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">A2 Level • Chapter 4</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Unemployment and the Phillips Curve
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the causes and types of unemployment, measuring joblessness, and the critical trade-off between inflation and unemployment illustrated by the Phillips Curve.
          </p>
        </div>

        {/* Topic 1: Unemployment */}
        <ContentSection title="Topic 1: Unemployment">
          <NoteCard title="Defining Unemployment" type="definition">
            <p>
              <strong>Unemployment</strong> refers to individuals who are of working age, willing and able to work, 
              actively seeking employment, but currently without a job. It is distinct from the broader concept of 
              the <strong>labor force</strong>, which encompasses all individuals who are either employed or actively 
              seeking work. The relationship between these two metrics is captured by the unemployment rate formula:
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-lg font-mono text-primary">
                Unemployment Rate = (Number of Unemployed ÷ Labor Force) × 100
              </p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              For example, if 100 individuals are unemployed out of a labor force of 1,000, the unemployment rate 
              would be $(100 \div 1000) \times 100 = 10\%$.
            </p>
          </NoteCard>

          <ExamTipBox title="Measuring Unemployment" variant="gold">
            <p>
              Two primary methods exist: the <strong>Claimant Count</strong> (those receiving unemployment benefits) 
              and the <strong>Labor Force Survey</strong> (ILO standard). The survey method is more comprehensive 
              but subject to data collection challenges.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Types of Unemployment */}
        <ContentSection title="Causes and Types of Unemployment">
          <p className="text-muted-foreground mb-6">
            Economists identify seven distinct types of unemployment, each arising from different causes and requiring 
            specific policy interventions. Understanding these distinctions is crucial for effective macroeconomic management.
          </p>

          {/* 1. Frictional */}
          <NoteCard title="1. Frictional Unemployment" type="definition">
            <p>
              <strong>Frictional unemployment</strong> occurs when individuals temporarily leave employment—whether 
              voluntarily, through redundancy, or dismissal—and experience a time delay before securing new positions. 
              This form of unemployment is considered a natural and healthy component of a dynamic labor market, as 
              workers transition between roles to find positions that better match their skills and preferences. 
              Frictional unemployment is essentially <strong>voluntary</strong> in nature; some individuals may 
              deliberately take extended breaks between positions or wait for a preferred role to commence. Because 
              this type of unemployment reflects the normal functioning of labor markets rather than systemic 
              dysfunction, it is not generally considered problematic and exists in all economies at all times.
            </p>
            <div className="mt-3 p-3 bg-cambridge-cyan/10 rounded-lg">
              <p className="text-sm font-medium text-cambridge-cyan">Policy Solutions:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Improve job information through national advertising and job centers</li>
                <li>• Increase geographical mobility via housing assistance</li>
                <li>• Enhance occupational mobility through retraining programs</li>
              </ul>
            </div>
          </NoteCard>

          {/* 2. Seasonal */}
          <NoteCard title="2. Seasonal Unemployment" type="definition">
            <p>
              <strong>Seasonal unemployment</strong> arises when demand for particular types of labor fluctuates 
              predictably with the seasons. Industries such as tourism, agriculture, fruit picking, and holiday 
              retail experience pronounced hiring patterns tied to specific times of year. Workers in these sectors 
              may find themselves without employment during off-peak periods. The severity of seasonal unemployment 
              depends significantly on the duration of the off-season; shorter periods are less economically damaging 
              than extended periods of inactivity. Because seasonal patterns are often linked to climate and calendar 
              events, complete elimination is difficult, though diversification of local economies can mitigate impacts.
            </p>
            <div className="mt-3 p-3 bg-cambridge-magenta/10 rounded-lg">
              <p className="text-sm font-medium text-cambridge-magenta">Policy Solutions:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Multi-skill training so workers can produce different products for different seasons</li>
                <li>• Economic diversification to reduce dependence on seasonal industries</li>
              </ul>
            </div>
          </NoteCard>

          {/* 3. Youth */}
          <NoteCard title="3. Youth Unemployment" type="definition">
            <p>
              <strong>Youth unemployment</strong> specifically affects young graduates and school-leavers who struggle 
              to secure employment despite actively seeking work. This phenomenon typically arises from two interconnected 
              factors: young workers often lack the practical experience and developed skills that employers seek, and 
              during periods of economic recession, firms prioritize retaining experienced staff over hiring inexperienced 
              newcomers. Youth unemployment carries particularly concerning long-term consequences, as prolonged periods 
              without work during formative career years can permanently damage earning potential and skill development.
            </p>
            <div className="mt-3 p-3 bg-cambridge-green/10 rounded-lg">
              <p className="text-sm font-medium text-cambridge-green">Policy Solutions:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Organize internship programs at school and university levels</li>
                <li>• Develop job placement centers for students</li>
                <li>• Create apprenticeship schemes to build experience</li>
              </ul>
            </div>
          </NoteCard>

          {/* 4. Structural */}
          <NoteCard title="4. Structural Unemployment" type="theory">
            <p>
              <strong>Structural unemployment</strong> emerges when there exists a fundamental mismatch between the 
              skills possessed by workers and the skills demanded by employers. This form of unemployment is typically 
              long-term and proves particularly difficult to address. Three distinct subtypes exist:
            </p>
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-sm text-primary">Sectoral Unemployment</h5>
                <p className="text-sm text-muted-foreground">
                  Occurs when entire industries decline—such as coal mining, shipbuilding, or traditional 
                  manufacturing—leaving workers with obsolete skills.
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-sm text-primary">Technological Unemployment</h5>
                <p className="text-sm text-muted-foreground">
                  Results from automation and technological advancement replacing human labor. Examples include 
                  bank tellers replaced by ATMs and online transactions, or factory workers displaced by robotics.
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-sm text-primary">Regional Unemployment</h5>
                <p className="text-sm text-muted-foreground">
                  Concentrates in specific geographical areas where particular industries have collapsed, leaving 
                  local populations without employment opportunities.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-cambridge-orange/10 rounded-lg">
              <p className="text-sm font-medium text-cambridge-orange">Policy Solutions:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Government subsidies to declining industries (short-term)</li>
                <li>• Infrastructure investment in remote/declining regions</li>
                <li>• Comprehensive retraining and education schemes</li>
              </ul>
            </div>
          </NoteCard>

          {/* 5. Voluntary */}
          <NoteCard title="5. Voluntary Unemployment" type="definition">
            <p>
              <strong>Voluntary unemployment</strong> describes situations where individuals choose not to accept 
              available employment because they consider the wages offered insufficient relative to their reservation 
              wage—the minimum they are willing to accept. This may occur when state unemployment benefits provide 
              income approaching or exceeding available wages, reducing the incentive to work. Additionally, some 
              individuals may value non-financial benefits of unemployment (leisure time, family care responsibilities) 
              above the additional income from employment.
            </p>
            <div className="mt-3 p-3 bg-destructive/10 rounded-lg">
              <p className="text-sm font-medium text-destructive">Policy Solutions:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Reduce state unemployment benefits to increase work incentives</li>
                <li>• Maintain wide differential between benefits and prevailing wages</li>
              </ul>
            </div>
          </NoteCard>

          {/* 6. Classical/Real Wage */}
          <NoteCard title="6. Classical (Real Wage) Unemployment" type="theory">
            <p>
              <strong>Classical unemployment</strong>, also termed <strong>real wage unemployment</strong>, occurs 
              when wages are held above the market-clearing equilibrium level. This creates a situation where the 
              quantity of labor supplied exceeds the quantity demanded, generating involuntary unemployment. Two 
              primary causes exist: first, <strong>trade union bargaining power</strong> may push wages above 
              equilibrium; second, <strong>minimum wage legislation</strong> may legally mandate wages above 
              market-clearing levels. When the minimum wage ($W_2$) is set above equilibrium ($W_e$), firms demand 
              fewer workers ($N_3$) while more workers wish to supply labor ($N_2$), creating unemployment equal 
              to the difference ($N_2 - N_3$).
            </p>
          </NoteCard>

          <ClassicalUnemploymentDiagram />

          {/* 7. Cyclical */}
          <NoteCard title="7. Cyclical (Demand-Deficient) Unemployment" type="theory">
            <p>
              <strong>Cyclical unemployment</strong>, also known as <strong>demand-deficient unemployment</strong>, 
              is directly linked to the business cycle. When an economy transitions from expansion into contraction, 
              business activity decelerates and firms respond by laying off workers. This unemployment intensifies 
              if the economy enters recession or depression. The fundamental cause is insufficient aggregate demand: 
              when consumers and firms reduce spending, demand for goods and services falls, prompting firms to 
              reduce their workforce. Cyclical unemployment is characterized by actual GDP falling below potential 
              GDP, creating a <strong>negative output gap</strong>. In this situation, unemployment exceeds the 
              natural rate of unemployment.
            </p>
            <p className="mt-3">
              Cyclical unemployment may prove more severe than structural unemployment because it potentially affects 
              all sectors simultaneously and can be self-reinforcing—unemployed workers reduce their consumption, 
              further decreasing aggregate demand.
            </p>
          </NoteCard>

          <CyclicalUnemploymentDiagram />

          <ExamTipBox title="Natural Rate of Unemployment (NRU)" variant="silver">
            <p>
              The <strong>NRU</strong> (or <strong>NAIRU</strong>—Non-Accelerating Inflation Rate of Unemployment) 
              represents unemployment when $AD_L = AS_L$ at the current wage rate, with no upward pressure on wages 
              or prices. At NAIRU, only frictional, structural, seasonal, and voluntary unemployment exist—<strong>no 
              cyclical unemployment</strong>. Reducing NAIRU requires supply-side policies: increased labor mobility, 
              improved education, reduced benefits, and lower income taxes.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Costs of Unemployment */}
        <ContentSection title="Costs of Unemployment">
          <div className="grid md:grid-cols-2 gap-4">
            <NoteCard title="Costs to Individuals" type="application">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Loss of income and reduced living standards</li>
                <li>• Erosion of skills (human capital depreciation)</li>
                <li>• Psychological stress and reduced self-esteem</li>
                <li>• Health deterioration</li>
                <li>• Reduced future employability</li>
              </ul>
            </NoteCard>

            <NoteCard title="Costs to Business" type="application">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Reduced consumer spending → lower revenues</li>
                <li>• Loss of skilled workforce during layoffs</li>
                <li>• Retraining costs when rehiring</li>
                <li>• Reduced business confidence</li>
              </ul>
            </NoteCard>

            <NoteCard title="Costs to the Economy" type="application">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lost output (negative output gap)</li>
                <li>• Reduced tax revenues</li>
                <li>• Increased government spending on benefits</li>
                <li>• Worsening fiscal position</li>
              </ul>
            </NoteCard>

            <NoteCard title="Costs to Communities" type="application">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Increased crime rates</li>
                <li>• Social unrest and family breakdown</li>
                <li>• Regional decline and depopulation</li>
                <li>• Intergenerational poverty cycles</li>
              </ul>
            </NoteCard>
          </div>
        </ContentSection>

        {/* Topic 2: Phillips Curve */}
        <ContentSection title="Topic 2: The Phillips Curve">
          <NoteCard title="The Original Discovery" type="theory">
            <p>
              In 1958, economist <strong>A.W. Phillips</strong> published empirical research analyzing UK data from 
              1861-1957, demonstrating a stable <strong>inverse relationship</strong> between the unemployment rate 
              and the rate of change of money wages. This relationship was subsequently extended to show a trade-off 
              between unemployment and <strong>inflation</strong>. The Phillips Curve became a cornerstone of 
              Keynesian economics, suggesting policymakers could choose their preferred combination of inflation 
              and unemployment along the curve.
            </p>
          </NoteCard>

          <PhillipsCurveDiagram />

          <NoteCard title="Short-Run Phillips Curve (SRPC)" type="theory">
            <p>
              The <strong>SRPC</strong> illustrates the inverse relationship between inflation ($\pi$) and unemployment 
              ($U$) in the short run. When aggregate demand increases, firms raise prices (causing inflation) while 
              simultaneously hiring more workers (reducing unemployment). This trade-off exists because workers have 
              <strong>adaptive expectations</strong>—they do not immediately anticipate or adjust to higher inflation.
            </p>
          </NoteCard>

          <AnalysisBlock title="Shifts in the SRPC">
            <p className="mb-3">The Short-Run Phillips Curve shifts outward (rightward) due to two main factors:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-sm text-primary mb-2">1. Changes in Aggregate Supply</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ↑ Cost of production</li>
                  <li>• ↑ Taxes on businesses</li>
                  <li>• ↑ Fuel/energy costs</li>
                  <li>• ↓ Subsidies</li>
                  <li>• Natural disasters</li>
                  <li>• ↑ Cost of labor</li>
                </ul>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <h5 className="font-semibold text-sm text-secondary mb-2">2. Changes in NRU</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ↑ Frictional unemployment</li>
                  <li>• ↑ Seasonal unemployment</li>
                  <li>• ↑ Youth unemployment</li>
                  <li>• ↑ Structural unemployment</li>
                  <li>• ↑ Voluntary unemployment</li>
                  <li>• ↑ Classical unemployment</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <strong>Note:</strong> All types of unemployment except cyclical will shift the SRPC rightward, 
              indicating higher inflation at each unemployment rate.
            </p>
          </AnalysisBlock>

          <NoteCard title="Long-Run Phillips Curve (LRPC)" type="theory">
            <p>
              <strong>Monetarist economists</strong> (notably Milton Friedman and Edmund Phelps) argued that the 
              stable trade-off only exists in the <strong>short run</strong>. In the long run, unemployment is 
              <strong>independent</strong> of the rate of inflation—policymakers cannot permanently trade higher 
              inflation for lower unemployment. The LRPC is <strong>vertical</strong> at the Natural Rate of 
              Unemployment (NRU), representing "full employment" where only voluntary and structural unemployment 
              exist.
            </p>
            <div className="mt-4 p-4 bg-cambridge-orange/10 rounded-lg">
              <p className="text-sm font-medium text-cambridge-orange mb-2">The Monetarist Argument:</p>
              <p className="text-sm text-muted-foreground">
                In the long run, the only impact of increased aggregate demand is to <strong>increase inflation</strong>, 
                while real output and unemployment remain unchanged at the natural rate. Attempts to permanently reduce 
                unemployment below the NRU will only result in <strong>accelerating inflation</strong>.
              </p>
            </div>
          </NoteCard>

          <ExamTipBox title="Keynesian vs Monetarist Views" variant="gold">
            <p>
              <strong>Keynesians</strong> believe demand-side policies can effectively reduce unemployment, especially 
              when the economy operates below full capacity. <strong>Monetarists</strong> argue that demand management 
              only causes inflation in the long run; reducing NRU requires supply-side reforms. Cambridge examiners 
              expect you to evaluate both perspectives!
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>The <strong>unemployment rate</strong> = (Unemployed ÷ Labor Force) × 100</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Seven types</strong> of unemployment exist: Frictional, Seasonal, Youth, Structural, Voluntary, Classical, and Cyclical</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>NRU/NAIRU</strong> = unemployment when there is no cyclical component and no pressure on wages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>The <strong>SRPC</strong> shows inverse relationship between inflation and unemployment (short-run trade-off)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>The <strong>LRPC</strong> is vertical at NRU—no long-run trade-off exists (Monetarist view)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Supply shocks and changes in NRU components cause the SRPC to shift</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Different types of unemployment require different policy responses—demand-side for cyclical, supply-side for others</span>
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default UnemploymentGrowth;
