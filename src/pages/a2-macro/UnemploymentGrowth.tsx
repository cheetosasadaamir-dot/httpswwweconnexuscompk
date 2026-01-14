import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import PhillipsCurveDiagram from '@/components/diagrams/PhillipsCurveDiagram';

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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">A2 Level • Chapter 6</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Unemployment and Economic Growth
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the Phillips Curve trade-off, the business cycle, and theories of economic growth.
          </p>
        </div>

        {/* The Phillips Curve */}
        <ContentSection title="The Phillips Curve">
          <NoteCard title="The Original Discovery" type="theory">
            <p>
              In 1958, economist <strong>A.W. Phillips</strong> published a study of UK data from 1861-1957, 
              showing a stable <strong>inverse relationship</strong> between the unemployment rate and the 
              rate of change of money wages. This was later extended to show a trade-off between 
              unemployment and <strong>inflation</strong>.
            </p>
          </NoteCard>

          <PhillipsCurveDiagram />

          <NoteCard title="The Trade-Off Explained" type="application">
            <p>
              The Phillips Curve suggests that policymakers face a <strong>trade-off</strong>: they can 
              achieve lower unemployment only by accepting higher inflation, and vice versa.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-cambridge-cyan/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-cyan">Low Unemployment</h5>
                <p className="text-sm">
                  When unemployment is low, labor markets are tight. Workers can demand higher wages, 
                  pushing up costs and prices → <strong>higher inflation</strong>.
                </p>
              </div>
              <div className="p-3 bg-cambridge-magenta/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-magenta">Low Inflation</h5>
                <p className="text-sm">
                  When unemployment is high, workers have less bargaining power. Wage growth is subdued, 
                  keeping costs and prices down → <strong>lower inflation</strong>.
                </p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Short-Run vs Long-Run */}
        <ContentSection title="Short-Run vs Long-Run Phillips Curve">
          <NoteCard title="The Expectations-Augmented Phillips Curve" type="theory">
            <p>
              <strong>Milton Friedman</strong> and <strong>Edmund Phelps</strong> argued that the stable 
              trade-off only exists in the <strong>short run</strong>. In the long run, the Phillips Curve 
              is <strong>vertical</strong> at the <strong>Natural Rate of Unemployment (NRU)</strong>.
            </p>
          </NoteCard>

          <AnalysisBlock title="The Adjustment Process">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary mb-1">Stage 1: Expansionary Policy</p>
                <p className="text-sm">
                  Government stimulates AD to reduce unemployment. Inflation rises from 2% to 5%, 
                  unemployment falls below the NRU (movement along SRPC).
                </p>
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Stage 2: Expectations Adjust</p>
                <p className="text-sm">
                  Workers realize inflation is 5%, not 2%. They demand higher wages to maintain real income. 
                  This shifts the SRPC upward.
                </p>
              </div>
              <div>
                <p className="font-medium text-primary mb-1">Stage 3: Return to NRU</p>
                <p className="text-sm">
                  With higher wages, firms cut employment. Unemployment returns to the NRU, but now at 
                  5% inflation instead of 2%.
                </p>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <p className="font-medium text-destructive mb-1">Conclusion</p>
                <p className="text-sm">
                  There is <strong>no long-run trade-off</strong>. Attempts to keep unemployment below 
                  the NRU lead to <strong>accelerating inflation</strong>.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <NoteCard title="The NAIRU" type="definition">
            <p>
              The <strong>Non-Accelerating Inflation Rate of Unemployment (NAIRU)</strong> is the 
              unemployment rate at which inflation remains stable. It is determined by structural 
              factors in the labor market, not by demand management.
            </p>
            <div className="mt-3 p-3 bg-muted/30 rounded-lg">
              <p className="text-sm"><strong>To reduce the NAIRU, governments must use supply-side policies:</strong></p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Education and training to reduce skills mismatch</li>
                <li>• Labor market reforms to increase flexibility</li>
                <li>• Reducing unemployment benefits to incentivize work</li>
                <li>• Improving information flows between employers and workers</li>
              </ul>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Types of Unemployment */}
        <ContentSection title="Types of Unemployment">
          <div className="grid md:grid-cols-2 gap-4">
            <NoteCard title="Cyclical (Demand-Deficient)" type="definition">
              <p>
                Caused by insufficient aggregate demand during recessions. This is the type of 
                unemployment that Keynesian demand management can address.
              </p>
              <p className="mt-2 text-sm text-cambridge-cyan font-medium">
                Policy: Expansionary fiscal/monetary policy
              </p>
            </NoteCard>

            <NoteCard title="Structural" type="definition">
              <p>
                Caused by mismatch between workers' skills and job requirements, often due to 
                technological change or industrial decline.
              </p>
              <p className="mt-2 text-sm text-cambridge-magenta font-medium">
                Policy: Education, retraining, relocation assistance
              </p>
            </NoteCard>

            <NoteCard title="Frictional" type="definition">
              <p>
                Short-term unemployment as workers move between jobs. Some level is inevitable 
                and even healthy for the economy.
              </p>
              <p className="mt-2 text-sm text-cambridge-green font-medium">
                Policy: Better job information, reduced search costs
              </p>
            </NoteCard>

            <NoteCard title="Seasonal" type="definition">
              <p>
                Caused by predictable seasonal fluctuations in demand for labor (e.g., tourism, 
                agriculture, retail during holidays).
              </p>
              <p className="mt-2 text-sm text-cambridge-orange font-medium">
                Policy: Diversification of local economies
              </p>
            </NoteCard>
          </div>

          <ExamTipBox title="Classifying Unemployment" variant="gold">
            <p>
              Structural + Frictional unemployment together form the <strong>natural rate of 
              unemployment</strong>. Cyclical unemployment is the gap between actual unemployment 
              and the natural rate. Policies to reduce each type are different!
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* The Business Cycle */}
        <ContentSection title="The Business Cycle">
          <NoteCard title="Phases of the Cycle" type="theory">
            <p>
              Economic activity fluctuates around the long-run trend in a pattern known as the 
              <strong> business cycle</strong>. Understanding the cycle is crucial for appropriate 
              policy responses.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-green mb-2">🔺 Expansion (Boom)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Rising real GDP</li>
                <li>• Falling unemployment</li>
                <li>• Rising inflation pressure</li>
                <li>• High business confidence</li>
                <li>• Increased investment</li>
              </ul>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-orange mb-2">📈 Peak</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Economy at full capacity</li>
                <li>• Inflation at its highest</li>
                <li>• Asset bubbles may form</li>
                <li>• Interest rates likely rising</li>
              </ul>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-magenta mb-2">🔻 Contraction (Recession)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Falling real GDP</li>
                <li>• Rising unemployment</li>
                <li>• Falling inflation</li>
                <li>• Low business confidence</li>
                <li>• Reduced investment</li>
              </ul>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-cyan mb-2">📉 Trough</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Economy at lowest point</li>
                <li>• Unemployment at peak</li>
                <li>• Deflation risk</li>
                <li>• Interest rates at lowest</li>
              </ul>
            </div>
          </div>

          <NoteCard title="Causes of Business Cycles" type="application">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm">1. Multiplier-Accelerator Interaction</h5>
                <p className="text-sm text-muted-foreground">
                  Investment responds to changes in output (accelerator), which then amplifies 
                  through the multiplier, creating self-reinforcing expansions and contractions.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-sm">2. External Shocks</h5>
                <p className="text-sm text-muted-foreground">
                  Oil price spikes, financial crises, wars, or pandemics can trigger cyclical 
                  fluctuations.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-sm">3. Policy Mistakes</h5>
                <p className="text-sm text-muted-foreground">
                  Poorly timed fiscal or monetary policy can amplify rather than smooth cycles.
                </p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Economic Growth */}
        <ContentSection title="Economic Growth">
          <NoteCard title="Actual vs Potential Growth" type="definition">
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="p-3 bg-cambridge-cyan/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-cyan">Actual Growth</h5>
                <p className="text-sm">
                  The percentage increase in real GDP. This can occur by using previously unemployed 
                  resources (movement toward the PPF).
                </p>
              </div>
              <div className="p-3 bg-cambridge-magenta/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-magenta">Potential Growth</h5>
                <p className="text-sm">
                  The increase in the economy's productive capacity. This represents an outward 
                  shift of the PPF or LRAS.
                </p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Sources of Long-Run Growth" type="theory">
            <div className="space-y-3 mt-3">
              <div>
                <h5 className="font-semibold text-sm text-primary">1. Capital Accumulation</h5>
                <p className="text-sm text-muted-foreground">
                  Investment in physical capital increases labor productivity. However, diminishing 
                  returns mean capital alone cannot sustain growth indefinitely.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-primary">2. Labor Force Growth</h5>
                <p className="text-sm text-muted-foreground">
                  Population growth and increased labor force participation expand the economy's 
                  productive capacity.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-primary">3. Human Capital</h5>
                <p className="text-sm text-muted-foreground">
                  Education, training, and healthcare improve worker productivity, enabling more 
                  output per worker.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-primary">4. Technological Progress</h5>
                <p className="text-sm text-muted-foreground">
                  Innovation and technological advancement are the key drivers of long-run growth, 
                  allowing more output from the same inputs.
                </p>
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
                The Phillips Curve shows a short-run trade-off between inflation and unemployment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                The long-run Phillips Curve is vertical at the NAIRU – there is no permanent trade-off.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Different types of unemployment require different policy responses.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                The business cycle has four phases: expansion, peak, contraction, and trough.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Long-run growth depends on capital, labor, human capital, and technology.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default UnemploymentGrowth;
