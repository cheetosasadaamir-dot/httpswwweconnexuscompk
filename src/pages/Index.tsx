import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Target, TrendingUp, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Diagrams',
    description: 'Animated visualizations that bring economic concepts to life',
  },
  {
    icon: Target,
    title: 'Exam-Focused',
    description: 'Every concept broken down into theory, application, and exam tips',
  },
  {
    icon: TrendingUp,
    title: 'Progressive Learning',
    description: 'Build understanding from basics to advanced analysis',
  },
];

const topics = [
  { title: 'Market Structures', href: '/market-structures', category: 'Microeconomics' },
  { title: 'Supply & Demand', href: '/supply-demand', category: 'Microeconomics' },
  { title: 'Economic Growth', href: '/economic-growth', category: 'Macroeconomics' },
  { title: 'Monetary Policy', href: '/monetary-policy', category: 'Macroeconomics' },
];

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 px-8 lg:px-16">
          <div className="max-w-4xl">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
              style={{ animation: 'fade-in-up 0.6s ease-out forwards' }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground">A-Level Economics Mastery</span>
            </div>

            {/* Main heading */}
            <h1 
              className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6 section-title"
              style={{ animation: 'fade-in-up 0.6s ease-out 0.1s forwards', opacity: 0 }}
            >
              Master Economics
              <br />
              <span className="text-foreground">with Clarity</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
              style={{ animation: 'fade-in-up 0.6s ease-out 0.2s forwards', opacity: 0 }}
            >
              Immersive notes, animated diagrams, and exam-focused insights designed 
              to transform complex economic theory into unforgettable understanding.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4"
              style={{ animation: 'fade-in-up 0.6s ease-out 0.3s forwards', opacity: 0 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link to="/market-structures">
                  Start Learning
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-silver/20 hover:bg-muted/50">
                <Link to="/market-structures">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Browse Topics
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative element */}
          <div 
            className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(234 89% 74%) 0%, transparent 70%)',
            }}
          />
        </section>

        {/* Features Section */}
        <section className="py-16 px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass-card-hover p-6"
                style={{ 
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${0.4 + index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-silver-bright mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16 px-8 lg:px-16">
          <div 
            className="mb-8"
            style={{ animation: 'fade-in-up 0.6s ease-out 0.7s forwards', opacity: 0 }}
          >
            <h2 className="font-serif text-3xl text-silver-bright mb-2">Explore Topics</h2>
            <p className="text-muted-foreground">Begin your journey through A-Level Economics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <Link 
                key={topic.href}
                to={topic.href}
                className="glass-card-hover group p-6 flex items-center justify-between"
                style={{ 
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${0.8 + index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {topic.category}
                  </span>
                  <h3 className="font-serif text-xl text-silver-bright mt-1 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 px-8 lg:px-16">
          <blockquote 
            className="max-w-3xl mx-auto text-center"
            style={{ animation: 'fade-in-up 0.6s ease-out 1.2s forwards', opacity: 0 }}
          >
            <p className="font-serif text-2xl lg:text-3xl text-silver/80 italic leading-relaxed mb-6">
              "Economics is a study of mankind in the ordinary business of life."
            </p>
            <cite className="text-muted-foreground not-italic">
              — Alfred Marshall
            </cite>
          </blockquote>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
