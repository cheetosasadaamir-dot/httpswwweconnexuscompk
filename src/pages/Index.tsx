import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import AuthOverlay from '@/components/AuthOverlay';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LineChart, MessageSquare, Target, Atom } from 'lucide-react';
import ThreeJsMarketEngine from '@/components/ThreeJsMarketEngine';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgePillars from '@/components/KnowledgePillars';
import EconomicsChatbot from '@/components/EconomicsChatbot';
import GlossarySection from '@/components/GlossarySection';
import WorldEconomicsSection from '@/components/WorldEconomicsSection';
import OwnerProfileSection from '@/components/OwnerProfileSection';


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

      <main className="relative z-10 safe-area-inset" style={{ willChange: 'opacity, transform', transform: 'translate3d(0,0,0)' }}>
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center pt-24 md:pt-28 lg:pt-32">
          <div className="w-[95%] max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24">
            <div className="text-center">
              {/* Persona Badge */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-bold leading-tight mb-6 md:mb-8 text-fluid-hero"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}
              >
                <span className="section-title">The Agentic Standard</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-fluid-2xl font-semibold text-secondary mb-4 md:mb-6"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}
              >
                Integrated. Specialized. Unstoppable.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-fluid-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12 px-2"
              >
                Deploy an ecosystem of specialized AI minds tailored to your specific field of study. From real-time syllabus tracking to complex University-level analysis, Econ Nexus provides the cognitive infrastructure for the modern elite student.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToNotesRepository()}
                  className="cta-amber-glow touch-target relative overflow-hidden bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-medium rounded-xl group cursor-pointer w-full sm:w-auto"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-secondary via-amber-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    Explore Economics Notes
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    const chatbot = document.getElementById('ai-chatbot');
                    if (chatbot) {
                      chatbot.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="touch-target bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-medium rounded-xl cursor-pointer w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                    Consult the AI Specialist
                  </span>
                </Button>
              </motion.div>

              {/* Physics Hub Navigation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 md:mt-10 px-4 sm:px-0"
              >
                <Link to="/physics" className="block group">
                  <div className="relative overflow-hidden glass-card rounded-2xl p-5 md:p-6 border border-primary/20 hover:border-primary/50 transition-all duration-500 max-w-2xl mx-auto cursor-pointer">
                    {/* Animated gradient sweep */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(120deg, transparent 30%, hsl(var(--primary) / 0.15) 50%, transparent 70%)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />

                    <div className="relative flex items-center gap-4 md:gap-5">
                      {/* Atom icon with orbit animation */}
                      <div className="flex-shrink-0 relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30"
                        >
                          <Atom className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </motion.div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-mono font-semibold">
                            New · Science Mode
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[9px] md:text-[10px] font-mono uppercase tracking-wider">
                            Beta
                          </span>
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-foreground mb-0.5" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.02em', textTransform: 'uppercase' as const }}>
                          Explore Physics Hub
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                          A-Level & University physics — interactive derivations, simulations & examiner traps.
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              
            </div>
          </div>
        </section>

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* AI Economics Mentor Chatbot — open access (4 free messages then login prompt) */}
        <EconomicsChatbot />

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* Knowledge Pillars / Notes Repository Section */}
        <section id="notes-repository" className="section-mobile scroll-mt-20 transition-all duration-500">
          <div className="w-[95%] max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass-card text-xs md:text-sm text-secondary mb-4 md:mb-6">
                📚 Notes Repository
              </span>
               <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}>
                Knowledge Pillars
              </h2>
              <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Two foundational branches of economics, each with its own universe of concepts to master.
              </p>
            </motion.div>

            <KnowledgePillars />
          </div>
        </section>

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* Owner Profile Section */}
        <OwnerProfileSection />

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* Simplified Mastery Section */}
        <section className="section-mobile">
          <div className="w-[95%] max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
               <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}>
                Simplified Mastery
              </h2>
              <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Why struggle with dense textbooks when clarity is just a click away?
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="glass-card-hover p-6 md:p-8 text-center group"
                >
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 md:mb-6"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-secondary transition-colors" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl text-silver-bright mb-2 md:mb-3" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}>{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* World Economics Section */}
        <WorldEconomicsSection />

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* Master Economist's Glossary */}
        <GlossarySection />

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* CTA Section */}
        <section className="section-mobile">
          <div className="w-[95%] max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-silver-bright mb-4 md:mb-6" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}>
                Ready to Master Economics?
              </h2>
              <p className="text-fluid-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-2">
                Join thousands of students who've transformed their understanding of economics. 
                Your A* journey starts here.
              </p>
              <Button
                size="lg"
                onClick={() => scrollToNotesRepository()}
                className="cta-amber-glow touch-target bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-xl cursor-pointer w-full sm:w-auto"
              >
                Begin Your Journey
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
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
