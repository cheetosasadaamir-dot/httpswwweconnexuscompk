import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LineChart, MessageSquare, Target } from 'lucide-react';
import ThreeJsMarketEngine from '@/components/ThreeJsMarketEngine';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgePillars from '@/components/KnowledgePillars';
import EconomicsChatbot from '@/components/EconomicsChatbot';
import GlossarySection from '@/components/GlossarySection';
import WorldEconomicsSection from '@/components/WorldEconomicsSection';
import OwnerProfileSection from '@/components/OwnerProfileSection';
import FixedSearchHeader from '@/components/FixedSearchHeader';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const features = [
  {
    icon: LineChart,
    title: 'Clear Diagrams',
    description: 'No more messy hand-drawn charts. Our animated diagrams make complex relationships crystal clear.',
  },
  {
    icon: MessageSquare,
    title: 'Easy Language',
    description: 'Complex economic theories explained in plain English. Jargon decoded, concepts simplified.',
  },
  {
    icon: Target,
    title: 'Exam Focused',
    description: 'Strategically built for A-Level board specifications. Every concept leads to exam success.',
  },
];

const Index = () => {
  const { scrollToNotesRepository } = useSmoothScroll();

  return (
    <div className="min-h-screen relative">
      <ThreeJsMarketEngine />
      <Header />

      {/* Fixed Search Header */}
      <FixedSearchHeader />

      <main className="relative z-10">
        {/* Hero Section - Extra top padding to account for fixed header + search bar */}
        <section className="min-h-[60vh] flex items-center pt-44 md:pt-52">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm text-muted-foreground">Elite A-Level Economics Portal</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8"
              >
                <span className="section-title">MASTER THE</span>
                <br />
                <span className="text-foreground">ECONOMICS IN 4D</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
              >
                Elite A-Level notes, interactive diagrams, and AI-powered insights. 
                Designed for clarity, built for top grades.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToNotesRepository()}
                  className="cta-amber-glow relative overflow-hidden bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-medium rounded-xl group cursor-pointer"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-secondary via-amber-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <span className="relative flex items-center gap-2">
                    Start Learning
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* Knowledge Pillars / Notes Repository Section */}
        <section id="notes-repository" className="py-24 lg:py-32 scroll-mt-20 transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-secondary mb-6">
                📚 Notes Repository
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold section-title mb-4">
                Knowledge Pillars
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Two foundational branches of economics, each with its own universe of concepts to master.
              </p>
            </motion.div>

            <KnowledgePillars />
          </div>
        </section>

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* AI Economics Mentor Chatbot */}
        <EconomicsChatbot />

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* Owner Profile Section */}
        <OwnerProfileSection />

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* Simplified Mastery Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold section-title mb-4">
                Simplified Mastery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why struggle with dense textbooks when clarity is just a click away?
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="glass-card-hover p-8 text-center group"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </motion.div>
                  <h3 className="font-serif text-xl text-silver-bright mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* World Economics Section */}
        <WorldEconomicsSection />

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* Master Economist's Glossary */}
        <GlossarySection />

        {/* Silver Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
        </div>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-silver-bright mb-6">
                Ready to Master Economics?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of students who've transformed their understanding of economics. 
                Your A* journey starts here.
              </p>
              <Button
                size="lg"
                onClick={() => scrollToNotesRepository()}
                className="cta-amber-glow bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg rounded-xl cursor-pointer"
              >
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
