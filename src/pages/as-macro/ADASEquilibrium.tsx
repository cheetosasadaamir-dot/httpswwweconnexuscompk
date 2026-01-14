import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import ADASInteractiveDiagram from '@/components/diagrams/ADASInteractiveDiagram';

const ADASEquilibrium = () => {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">AS Level • Chapter 1</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Macroeconomic Equilibrium
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the interaction between Aggregate Demand and Aggregate Supply to determine 
            the equilibrium level of national output and the overall price level.
          </p>
        </div>

        {/* Introduction to Macroeconomics */}
        <ContentSection title="The Macroeconomic Framework">
          <NoteCard title="From Micro to Macro" type="definition">
            <p>
              Macroeconomics deals with relationships between economic variables at the <strong>aggregate level</strong> – 
              that is, in the economy viewed as a whole. While microeconomics focuses on individual markets and 
              decision-making units, macroeconomics examines the total output, employment, and price level of an entire economy.
            </p>
            <p className="mt-3">
              In building a theory to explain these relationships, the starting point is to consider 
              <strong> aggregate demand</strong> and <strong>aggregate supply</strong>.
            </p>
          </NoteCard>
        </ContentSection>

        {/* Aggregate Demand */}
        <ContentSection title="Aggregate Demand (AD)">
          <NoteCard title="Components of Aggregate Demand" type="theory">
            <p>
              Aggregate demand represents the <strong>total amount of effective demand</strong> in the economy as a whole. 
              It is the sum of all spending on domestically produced goods and services at each price level.
            </p>
            <div className="mt-4 p-4 bg-muted/30 rounded-lg font-mono text-center text-lg">
              AD = C + I + G + (X - M)
            </div>
            <ul className="mt-4 space-y-3">
              <li><strong>Consumption (C):</strong> Household spending on goods and services. The largest component of AD, 
              primarily influenced by the level of real income. When real incomes are high, households tend to spend more.</li>
              <li><strong>Investment (I):</strong> Spending by firms on capital goods such as machinery, equipment, and buildings. 
              Important not only for current demand but also for future productive capacity.</li>
              <li><strong>Government Expenditure (G):</strong> Spending by government on goods, services, and infrastructure 
              to carry out operations and provide public services.</li>
              <li><strong>Net Exports (X - M):</strong> The difference between exports (foreign purchases of domestic goods) 
              and imports (domestic purchases of foreign goods). Contributes to AD through the trade balance.</li>
            </ul>
          </NoteCard>

          <NoteCard title="Why is AD Downward Sloping?" type="theory">
            <p>
              The aggregate demand curve shows a <strong>negative relationship</strong> between the overall price level 
              and the quantity of real GDP demanded. Three effects explain this relationship:
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-4 border border-primary/20 rounded-lg">
                <h4 className="font-semibold text-primary">1. The Wealth Effect (Real Balances Effect)</h4>
                <p className="text-sm mt-2">
                  When the price level falls, the real value of money holdings increases, making consumers feel 
                  wealthier. This encourages higher consumption spending.
                </p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg">
                <h4 className="font-semibold text-primary">2. The Substitution Effect (International Trade Effect)</h4>
                <p className="text-sm mt-2">
                  When domestic prices are low relative to foreign prices, domestic goods become more competitive. 
                  Exports rise and imports fall, increasing net exports (X-M) and thus real GDP.
                </p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg">
                <h4 className="font-semibold text-primary">3. The Interest Rate Effect</h4>
                <p className="text-sm mt-2">
                  When the price level is low, interest rates tend to be lower as well. Lower interest rates 
                  reduce the cost of borrowing, encouraging both investment and consumption expenditure.
                </p>
              </div>
            </div>
          </NoteCard>

          <NoteCard title="Shifts in Aggregate Demand" type="application">
            <p>
              A <strong>movement along</strong> the AD curve is caused by a change in the price level. 
              A <strong>shift</strong> of the AD curve (demand shock) is caused by changes in any component 
              of AD for reasons other than a change in the price level:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Changes in consumer confidence and expectations</li>
              <li>• Changes in direct taxation</li>
              <li>• Changes in interest rates</li>
              <li>• Changes in the exchange rate</li>
              <li>• Changes in government spending</li>
              <li>• Changes in global economic conditions affecting exports</li>
            </ul>
          </NoteCard>
        </ContentSection>

        {/* Aggregate Supply */}
        <ContentSection title="Aggregate Supply (AS)">
          <NoteCard title="Short-Run Aggregate Supply (SRAS)" type="theory">
            <p>
              The level of aggregate supply is the <strong>total amount of goods and services produced</strong> 
              within an economy during a period of time. The quantity supplied depends upon the quantities 
              of factors of production employed.
            </p>
            <p className="mt-3">
              In the <strong>short run</strong>, firms may have relatively little flexibility to vary their inputs. 
              Money wages are likely to be fixed, and if firms wish to vary output, they may need to do so by 
              varying the intensity of utilization of existing inputs (e.g., overtime payments).
            </p>
            <p className="mt-3">
              This suggests that in the short run, aggregate supply is <strong>upward sloping</strong> – firms 
              will only expand output in response to higher prices that cover the additional costs.
            </p>
          </NoteCard>

          <NoteCard title="Factors Affecting SRAS Position" type="application">
            <p>
              A shift of the SRAS curve is called a <strong>supply shock</strong>. The position of SRAS 
              depends on the availability and effectiveness of factor inputs:
            </p>
            <ul className="mt-3 space-y-2">
              <li><strong>Labour:</strong> Changes in workforce size, skills, and productivity</li>
              <li><strong>Capital:</strong> Improvements in technology and efficiency of capital goods</li>
              <li><strong>Raw Materials:</strong> Changes in commodity prices (especially oil)</li>
              <li><strong>Wages:</strong> Changes in money wages affecting production costs</li>
              <li><strong>Productivity:</strong> Improvements in production techniques</li>
            </ul>
          </NoteCard>

          <NoteCard title="Long-Run Aggregate Supply (LRAS)" type="theory">
            <p>
              In the long run, the aggregate supply curve becomes <strong>vertical</strong> at the full-employment 
              level of real output (Y*). This represents the maximum level of output that can be produced 
              given the economy's factors of production.
            </p>
            <p className="mt-3">
              The only way real output can temporarily exceed Y* is through overtime work, which cannot be 
              sustained in the long run. The LRAS shifts rightward when:
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>• The quantity or quality of factors of production increases</li>
              <li>• Technological progress improves productivity</li>
              <li>• Investment expands the economy's productive capacity</li>
            </ul>
          </NoteCard>
        </ContentSection>

        {/* Interactive Diagram */}
        <ContentSection title="Interactive AD/AS Model">
          <ADASInteractiveDiagram />
        </ContentSection>

        {/* Macroeconomic Equilibrium */}
        <ContentSection title="Macroeconomic Equilibrium">
          <NoteCard title="Determining Equilibrium" type="theory">
            <p>
              Bringing aggregate demand and aggregate supply together, the <strong>overall equilibrium position</strong> 
              for the macroeconomy can be identified. Equilibrium occurs at the intersection of AD and SRAS, 
              where the quantity of output demanded equals the quantity supplied.
            </p>
            <p className="mt-3">
              At this equilibrium, firms and households have no reason to alter their behavior – 
              aggregate supply is matched by aggregate demand at the prevailing price level.
            </p>
          </NoteCard>

          <AnalysisBlock title="Effect of Demand and Supply Shocks">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">Demand Shock (↑AD)</h4>
                <p className="text-sm mt-1">
                  An increase in AD (e.g., from higher government expenditure) shifts the AD curve rightward. 
                  The economy moves to a new equilibrium with higher output (Y₁) and higher prices (P₁). 
                  The effect on output vs. prices depends on how close the economy is to full employment – 
                  near full employment, the SRAS is steeper, so the impact is more on prices (inflationary).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Supply Shock (↓SRAS)</h4>
                <p className="text-sm mt-1">
                  An adverse supply shock (e.g., oil price increase) shifts SRAS leftward. This causes 
                  <strong> stagflation</strong> – output falls to Y₁ while the price level rises to P₁. 
                  This is particularly problematic as both unemployment and inflation worsen simultaneously.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Diagram Technique" variant="gold">
            <p>
              When drawing AD/AS diagrams, always clearly label: (1) both axes (Price Level and Real GDP), 
              (2) the original and new curves, (3) the equilibrium points, and (4) the direction of change 
              with arrows. Show the shift in the curve first, then trace the movement to the new equilibrium.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Key Equations */}
        <ContentSection title="Key Equations Summary">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">Aggregate Demand</h4>
              <p className="font-mono text-center py-2">AD = C + I + G + (X - M)</p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-primary mb-2">Equilibrium Condition</h4>
              <p className="font-mono text-center py-2">AD = AS at equilibrium Y, P</p>
            </div>
          </div>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Macroeconomics examines aggregate economic variables: total output, employment, and price level.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                AD = C + I + G + (X-M), downward sloping due to wealth, substitution, and interest rate effects.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                SRAS is upward sloping (short-run wage rigidity); LRAS is vertical at full employment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Equilibrium occurs where AD = AS; shifts cause changes in output and/or price level.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Near full employment, AD increases are more inflationary; supply shocks cause stagflation.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default ADASEquilibrium;
