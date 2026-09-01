import { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthOverlay from '@/components/AuthOverlay';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LineChart, MessageSquare, Target, FileText, PenLine, GraduationCap, BookOpen, Globe, Landmark, Coins, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgePillars from '@/components/KnowledgePillars';
// EconomicsChatbot moved to its own /chat page
import GlossarySection from '@/components/GlossarySection';
import OwnerProfileSection from '@/components/OwnerProfileSection';
import HubEntryCard from '@/components/HubEntryCard';
import LectureHubCard from '@/components/LectureHubCard';
import ArticleHubCard from '@/components/ArticleHubCard';



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
      <Helmet>
        <title>Econ Nexus-The Agentic Standard For Academic Mastery</title>
        <meta name="description" content="Econ Nexus deploys specialist AI tutors for A-Level and university academics — notes, diagrams, exam intelligence, and syllabus-locked answers." />
        <link rel="canonical" href="https://httpswwweconnexuscompk.lovable.app/" />
        <meta property="og:title" content="Econ Nexus-The Agentic Standard For Academic Mastery" />
        <meta property="og:description" content="Specialist AI tutors, notes, diagrams, and exam intelligence for A-Level and university economics." />
        <meta property="og:url" content="https://httpswwweconnexuscompk.lovable.app/" />
      </Helmet>
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
                <span className="section-title">Econ Nexus-The Agentic Standard For Academic Mastery</span>
              </motion.h1>


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
              </motion.div>

            </div>
          </div>
        </section>

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* AI Tutor — moved to its own dedicated page (/chat) */}
        <section id="ai-tutor" className="section-mobile scroll-mt-20">
          <div className="w-[95%] max-w-[1200px] mx-auto">
            <a
              href="/chat"
              className="block group glass-card rounded-2xl border border-secondary/15 p-8 md:p-12 text-center hover:border-secondary/40 transition-all shadow-[0_8px_40px_-12px_hsl(var(--secondary)/0.25)]"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-[11px] md:text-xs uppercase tracking-[0.25em] text-secondary mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ✨ AI Tutor Workspace
              </span>
              <h2
                className="text-fluid-4xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}
              >
                Chat with Econ Nexus AI Tutors
              </h2>
              <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                11 specialist personas across Economics, Business, Sciences, Law — board-aware and syllabus-locked.
              </p>
              <span className="inline-block px-6 py-3 rounded-xl bg-secondary text-secondary-foreground uppercase tracking-[0.2em] text-xs md:text-sm group-hover:translate-y-[-2px] transition-transform" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Open Chat →
              </span>
            </a>
          </div>
        </section>

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

        {/* Econ Nexus Lecture Hub — signed-in cinema archive */}
        <LectureHubCard />

        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* Econ Nexus Research & Article Hub — long-form library */}
        <ArticleHubCard />



        {/* Silver Divider */}
        <div className="w-[95%] max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </div>

        {/* Assignment Architect & World Economics — dedicated pages */}
        <section id="workspaces" className="section-mobile scroll-mt-20">
          <div className="w-[95%] max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold section-title mb-3 md:mb-4" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em', textTransform: 'uppercase' as const }}>
                Academic Workspaces
              </h2>
              <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Three dedicated environments — draft top-band assignments, master every diagram, or explore the global economy concept by concept.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <HubEntryCard
                title="Assignment Architect"
                description="Draft professionally structured essays, reports and research papers with proper headings and referencing."
                href="/assignment-architect"
                cta="Open Architect"
                icons={[FileText, PenLine, GraduationCap, BookOpen]}
                gradient="linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(234 60% 12%) 50%, hsl(var(--navy-light)) 100%)"
                hoverGradient="linear-gradient(135deg, hsl(234 60% 15%) 0%, hsl(217 60% 18%) 50%, hsl(234 50% 20%) 100%)"
                delay={0}
              />
              <HubEntryCard
                title="Diagram Hub"
                description="130 complex economics diagrams, built stage by stage — micro and macro, with the analysis behind every shift."
                href="/diagram-hub"
                cta="Open Diagram Hub"
                icons={[BarChart3, LineChart, PieChart, Activity]}
                gradient="linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(210 60% 12%) 50%, hsl(var(--navy-light)) 100%)"
                hoverGradient="linear-gradient(135deg, hsl(210 60% 15%) 0%, hsl(196 60% 18%) 50%, hsl(210 50% 20%) 100%)"
                delay={0.1}
              />
              <HubEntryCard
                title="World Economics"
                description="Search a living encyclopedia of global economics — models, indicators and real-world context."
                href="/world-economics"
                cta="Explore Topics"
                icons={[Globe, Landmark, Coins, TrendingUp]}
                gradient="linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(217 50% 12%) 50%, hsl(var(--navy-light)) 100%)"
                hoverGradient="linear-gradient(135deg, hsl(217 50% 15%) 0%, hsl(200 50% 18%) 50%, hsl(217 40% 20%) 100%)"
                delay={0.2}
              />
            </div>
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
