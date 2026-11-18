import { Helmet } from 'react-helmet-async';
import { Activity, BarChart3, Globe, Landmark, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import HubEntryCard from '@/components/HubEntryCard';

const Economics = () => (
  <Layout>
    <Helmet>
      <title>Economics | Econ Nexus</title>
      <meta name="description" content="Explore microeconomics and macroeconomics through interactive notes, diagrams, and explanations." />
    </Helmet>
    <section className="section-mobile">
      <div className="w-[95%] max-w-[1200px] mx-auto px-4">
        <header className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass-card text-xs md:text-sm text-secondary mb-4 md:mb-6">
            Social Sciences
          </span>
          <h1 className="text-fluid-4xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4">
            Economics
          </h1>
          <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore individual markets and the wider economy through two connected areas of study.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <HubEntryCard
            title="Microeconomics"
            description="Study choices by consumers and firms, markets, prices, production, and resource allocation."
            href="/microeconomics"
            cta="Explore Microeconomics"
            icons={[TrendingUp, BarChart3, Activity]}
            gradient="linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(234 60% 12%) 50%, hsl(var(--navy-light)) 100%)"
            hoverGradient="linear-gradient(135deg, hsl(234 60% 15%) 0%, hsl(217 60% 18%) 50%, hsl(234 50% 20%) 100%)"
            delay={0}
          />
          <HubEntryCard
            title="Macroeconomics"
            description="Understand inflation, employment, growth, public policy, and the global economy."
            href="/macroeconomics"
            cta="Explore Macroeconomics"
            icons={[Globe, Landmark, Activity]}
            gradient="linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(217 50% 12%) 50%, hsl(var(--navy-light)) 100%)"
            hoverGradient="linear-gradient(135deg, hsl(217 50% 15%) 0%, hsl(200 50% 18%) 50%, hsl(217 40% 20%) 100%)"
            delay={0.12}
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Economics;