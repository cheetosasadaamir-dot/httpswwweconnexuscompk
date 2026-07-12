import { useState } from 'react';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import GiniLorenzDiagram from './GiniLorenzDiagram';

const ClassificationIndicatorsSection = () => {
  const [activeTab, setActiveTab] = useState<'ledc' | 'medc' | 'brics'>('ledc');

  const countryData = {
    ledc: {
      title: 'Less Economically Developed Countries (LEDCs)',
      characteristics: [
        { indicator: 'Life Expectancy', value: 'Low (50-65 years)', color: 'text-destructive' },
        { indicator: 'Mortality Rates', value: 'High (infant & maternal)', color: 'text-destructive' },
        { indicator: 'Dependency Ratio', value: 'High (young population)', color: 'text-cambridge-orange' },
        { indicator: 'GDP per Capita', value: 'Low (<$1,000)', color: 'text-destructive' },
        { indicator: 'Population Growth', value: 'Fast (2-3% p.a.)', color: 'text-cambridge-orange' },
        { indicator: 'Education Levels', value: 'Low (limited access)', color: 'text-destructive' },
        { indicator: 'Health & Sanitation', value: 'Poor (limited clean water)', color: 'text-destructive' },
        { indicator: 'Healthcare Provision', value: 'Absent or inadequate', color: 'text-destructive' },
      ],
      examples: 'Sub-Saharan Africa (Chad, Niger), South Asia (Afghanistan)',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/30',
    },
    medc: {
      title: 'More Economically Developed Countries (MEDCs)',
      characteristics: [
        { indicator: 'Life Expectancy', value: 'High (75-85+ years)', color: 'text-cambridge-green' },
        { indicator: 'Mortality Rates', value: 'Low (modern healthcare)', color: 'text-cambridge-green' },
        { indicator: 'Dependency Ratio', value: 'Rising (ageing population)', color: 'text-cambridge-cyan' },
        { indicator: 'Income per Capita', value: 'High (>$40,000)', color: 'text-cambridge-green' },
        { indicator: 'Population Growth', value: 'Slow (<1% p.a.)', color: 'text-cambridge-cyan' },
        { indicator: 'Education Levels', value: 'High (universal access)', color: 'text-cambridge-green' },
        { indicator: 'Urban Population', value: 'Large (70-90%)', color: 'text-cambridge-cyan' },
        { indicator: 'Sectoral Structure', value: 'Services-dominated', color: 'text-cambridge-green' },
      ],
      examples: 'Western Europe (Germany, UK), North America (USA, Canada), Japan',
      bgColor: 'bg-cambridge-green/10',
      borderColor: 'border-cambridge-green/30',
    },
    brics: {
      title: 'BRICS Emerging Economies',
      characteristics: [
        { indicator: 'Growth Rate', value: 'Fast (5-10% historically)', color: 'text-primary' },
        { indicator: 'Industrialisation', value: 'Recent & rapid', color: 'text-primary' },
        { indicator: 'Export Structure', value: 'Industry-heavy (manufactured goods)', color: 'text-cambridge-cyan' },
        { indicator: 'Global Influence', value: 'Significant (G20 members)', color: 'text-primary' },
        { indicator: 'Innovation Potential', value: 'High (esp. renewables)', color: 'text-cambridge-green' },
        { indicator: 'Living Standards', value: 'Rising demand', color: 'text-cambridge-cyan' },
        { indicator: 'Domestic Market', value: 'Large consumer base', color: 'text-primary' },
        { indicator: 'Capital Flows', value: 'Major FDI recipients', color: 'text-cambridge-cyan' },
      ],
      examples: 'Brazil, Russia, India, China, South Africa (added 2010)',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
    },
  };

  const current = countryData[activeTab];

  return (
    <div className="my-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-gradient-to-b from-primary to-cambridge-cyan rounded-full" />
        <div>
          <span className="text-xs font-medium text-cambridge-cyan uppercase tracking-wider">
            [A2 Specialist - Classification & Indicators]
          </span>
          <h3 className="text-xl font-serif font-semibold text-foreground">
            Classification of Countries & Development Indicators
          </h3>
        </div>
      </div>

      {/* HDI Composition Breakdown */}
      <div className="glass-card p-6 mb-6">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
          The Human Development Index (HDI): A Composite Measure
        </h4>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
          The <strong className="text-foreground">Human Development Index (HDI)</strong> is a composite statistic 
          developed by the UNDP to measure economic and social welfare of countries over time. It captures three 
          fundamental dimensions of human development: <em>health</em>, <em>education</em>, and <em>standard of living</em>. 
          The index produces a value between <InlineMath math="0" /> (lowest development) and <InlineMath math="1" /> 
          (highest development).
        </p>

        {/* HDI Components Visual */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* Health */}
          <motion.div 
            className="relative p-4 bg-gradient-to-br from-rose-500/10 to-rose-600/5 rounded-xl border border-rose-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                <span className="text-lg">🏥</span>
              </div>
              <div>
                <p className="font-semibold text-rose-400 text-sm">Health Dimension</p>
                <p className="text-xs text-muted-foreground">Longevity Index</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-2 bg-background/50 rounded-lg">
                <p className="text-xs font-medium text-foreground">Indicator:</p>
                <p className="text-xs text-muted-foreground">Life expectancy at birth</p>
              </div>
              <div className="p-2 bg-background/50 rounded-lg">
                <p className="text-xs font-medium text-foreground">Range Used:</p>
                <p className="text-xs text-muted-foreground">25 to 85 years</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="relative p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span className="text-lg">📚</span>
              </div>
              <div>
                <p className="font-semibold text-blue-400 text-sm">Education Dimension</p>
                <p className="text-xs text-muted-foreground">Knowledge Index</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-2 bg-background/50 rounded-lg">
                <p className="text-xs font-medium text-foreground">Indicator 1:</p>
                <p className="text-xs text-muted-foreground">Mean years of schooling (adults)</p>
              </div>
              <div className="p-2 bg-background/50 rounded-lg">
                <p className="text-xs font-medium text-foreground">Indicator 2:</p>
                <p className="text-xs text-muted-foreground">Expected years of schooling (children)</p>
              </div>
            </div>
          </motion.div>

          {/* Standard of Living */}
          <motion.div 
            className="relative p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span className="text-lg">💰</span>
              </div>
              <div>
                <p className="font-semibold text-emerald-400 text-sm">Living Standard</p>
                <p className="text-xs text-muted-foreground">Income Index</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-2 bg-background/50 rounded-lg">
                <p className="text-xs font-medium text-foreground">Indicator:</p>
                <p className="text-xs text-muted-foreground">Real GNI per capita (PPP USD)</p>
              </div>
              <div className="p-2 bg-background/50 rounded-lg">
                <p className="text-xs font-medium text-foreground">Why GNI not GDP?</p>
                <p className="text-xs text-muted-foreground">Accounts for remittances & foreign aid</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HDI Formula */}
        <div className="p-4 bg-slate-900/50 rounded-lg border border-cyan-500/20 mb-4">
          <p className="text-center text-sm text-muted-foreground mb-2">HDI Calculation (Geometric Mean):</p>
          <BlockMath math="HDI = \sqrt[3]{I_{Health} \times I_{Education} \times I_{Income}}" />
          <p className="text-center text-xs text-muted-foreground mt-2">
            Where each index <InlineMath math="I = \frac{\text{actual value} - \text{min}}{\text{max} - \text{min}}" />
          </p>
        </div>

        {/* HDI Classification Scale */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="p-3 bg-cambridge-green/20 rounded-lg text-center border border-cambridge-green/30">
            <p className="text-sm font-bold text-cambridge-green">Very High</p>
            <p className="text-xs text-muted-foreground">≥ 0.800</p>
            <p className="text-[10px] text-muted-foreground mt-1">Norway, Germany</p>
          </div>
          <div className="p-3 bg-cambridge-cyan/20 rounded-lg text-center border border-cambridge-cyan/30">
            <p className="text-sm font-bold text-cambridge-cyan">High</p>
            <p className="text-xs text-muted-foreground">0.700 – 0.799</p>
            <p className="text-[10px] text-muted-foreground mt-1">Brazil, China</p>
          </div>
          <div className="p-3 bg-cambridge-orange/20 rounded-lg text-center border border-cambridge-orange/30">
            <p className="text-sm font-bold text-cambridge-orange">Medium</p>
            <p className="text-xs text-muted-foreground">0.550 – 0.699</p>
            <p className="text-[10px] text-muted-foreground mt-1">India, Bangladesh</p>
          </div>
          <div className="p-3 bg-destructive/20 rounded-lg text-center border border-destructive/30">
            <p className="text-sm font-bold text-destructive">Low</p>
            <p className="text-xs text-muted-foreground">&lt; 0.550</p>
            <p className="text-[10px] text-muted-foreground mt-1">Niger, Chad</p>
          </div>
        </div>

        {/* Global Trend */}
        <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-primary">Global HDI Trend:</strong> Average world HDI rose from 
            <InlineMath math=" \: 0.48" /> (1970) to <InlineMath math=" \: 0.68" /> (2010), driven primarily by 
            growth in East Asia, the Pacific, and South Asia.
          </p>
        </div>
      </div>

      {/* HDI Advantages & Limitations */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="glass-card p-4 border-l-4 border-l-cambridge-green">
          <h5 className="font-semibold text-cambridge-green text-sm mb-3">✓ Advantages of HDI</h5>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-cambridge-green">•</span>
              Allows international comparisons of development levels
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cambridge-green">•</span>
              Broader than GDP—captures health & education dimensions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cambridge-green">•</span>
              Reveals infrastructure quality & opportunities
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cambridge-green">•</span>
              Shows effectiveness of government policies over time
            </li>
          </ul>
        </div>

        <div className="glass-card p-4 border-l-4 border-l-destructive">
          <h5 className="font-semibold text-destructive text-sm mb-3">✗ Limitations of HDI</h5>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-destructive">•</span>
              Ignores <strong className="text-foreground">political freedom</strong> & human rights
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive">•</span>
              Does not consider <strong className="text-foreground">gender equality</strong> or cultural identity
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive">•</span>
              Excludes <strong className="text-foreground">environmental</strong> sustainability
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive">•</span>
              Ignores <strong className="text-foreground">income distribution</strong>—high HDI may mask poverty
            </li>
          </ul>
        </div>
      </div>

      {/* Alternative Indicators */}
      <div className="glass-card p-4 mb-6">
        <h5 className="font-serif font-semibold text-foreground text-sm mb-3">Alternative Development Indicators</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3 bg-muted/30 rounded-lg">
            <p className="font-semibold text-primary text-xs mb-1">MEW</p>
            <p className="text-[10px] text-muted-foreground">Measure of Economic Welfare: GDP + leisure time + unpaid work − environmental damage</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <p className="font-semibold text-primary text-xs mb-1">HPI</p>
            <p className="text-[10px] text-muted-foreground">Human Poverty Index: Life expectancy, education, basic needs (HPI-1 developing, HPI-2 developed)</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <p className="font-semibold text-primary text-xs mb-1">MPI</p>
            <p className="text-[10px] text-muted-foreground">Multidimensional Poverty Index: Individual-level deprivation in education, health, living standards</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <p className="font-semibold text-primary text-xs mb-1">GDI</p>
            <p className="text-[10px] text-muted-foreground">Gender-related Development Index: HDI adjusted for male-female inequality gaps</p>
          </div>
        </div>
      </div>

      {/* Country Classification Tabs */}
      <div className="glass-card p-6 mb-6">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
          Characteristics of Economies at Different Development Levels
        </h4>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-4">
          {(['ledc', 'medc', 'brics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`p-4 rounded-lg ${current.bgColor} border ${current.borderColor}`}
        >
          <h5 className="font-semibold text-foreground mb-3">{current.title}</h5>
          <div className="grid md:grid-cols-2 gap-2 mb-3">
            {current.characteristics.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-background/50 rounded">
                <span className="text-xs text-muted-foreground">{item.indicator}</span>
                <span className={`text-xs font-medium ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            <strong>Examples:</strong> {current.examples}
          </p>
        </motion.div>

        {/* BRICS Special Note */}
        {activeTab === 'brics' && (
          <div className="mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <p className="text-xs text-muted-foreground">
              <strong className="text-amber-400">Renewable Energy Leadership:</strong> BRICS nations rank highly 
              in renewable energy capacity—China (1st globally), Brazil (3rd), Russia (5th), India (6th). This 
              reflects their significant potential for <em>sustainable industrialisation</em> and green technology innovation.
            </p>
          </div>
        )}
      </div>

      {/* Inequality & Lorenz Curve */}
      <div className="glass-card p-6 mb-6">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
          Income Inequality & the Lorenz Curve
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
          While HDI captures aggregate development, it does not reveal <strong className="text-foreground">income distribution</strong>. 
          A country may have a high HDI yet exhibit extreme inequality, with wealth concentrated among capital owners. 
          As Thomas Piketty (2014) argued, when the <InlineMath math="r > g" /> (rate of return on capital exceeds economic growth), 
          inequality tends to increase structurally. The <strong className="text-foreground">Lorenz Curve</strong> and 
          <strong className="text-foreground"> Gini Coefficient</strong> provide essential tools for measuring this distribution.
        </p>

        <GiniLorenzDiagram title="Interactive Lorenz Curve & Gini Coefficient" />
      </div>

      {/* Examiner's Note */}
      <div className="p-4 bg-slate-800/50 border border-amber-500/30 rounded-lg">
        <h5 className="font-serif font-semibold text-amber-400 text-sm mb-2">
          Senior Examiner's Integration Note
        </h5>
        <p className="text-xs text-muted-foreground leading-relaxed text-justify">
          <strong>Synoptic Link:</strong> The classification framework connects directly to microeconomic market structures. 
          High Gini coefficients often correlate with <em>monopoly power</em>—firms with market dominance can extract 
          supernormal profits, transferring surplus from consumers (workers) to capital owners. This micro-macro bridge 
          explains why antitrust policy, progressive taxation, and labour market regulation are developmental policy tools, 
          not merely efficiency corrections. A* candidates will connect Piketty's <InlineMath math="r > g" /> thesis 
          to the Kuznets Curve critique: inequality is not a transitional phase but a <em>structural feature</em> of 
          capitalism requiring active policy intervention.
        </p>
      </div>
    </div>
  );
};

export default ClassificationIndicatorsSection;
