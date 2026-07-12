import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, GraduationCap, BookOpen, Target } from "lucide-react";
import Layout from "@/components/Layout";
import EconNexusLogo from "@/components/EconNexusLogo";
import CaseStudyCard from "@/components/casestudies/CaseStudyCard";
import CaseStudyViewer from "@/components/casestudies/CaseStudyViewer";
import { caseStudies, CaseStudy } from "@/data/caseStudies";

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  if (selectedCaseStudy) {
    return (
      <Layout>
        <CaseStudyViewer 
          caseStudy={selectedCaseStudy} 
          onBack={() => setSelectedCaseStudy(null)} 
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Past Papers
              </span>
              
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-title">
                Case Study Bank
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Practice with authentic Cambridge International A-Level Economics past papers. 
                Each case study includes interactive data tables, answer blueprints, and 
                model answers aligned with marking schemes.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
            >
              {[
                { icon: FileText, label: "Papers", value: caseStudies.length },
                { icon: BookOpen, label: "Questions", value: caseStudies.reduce((sum, cs) => sum + cs.questions.length, 0) },
                { icon: Target, label: "Total Marks", value: caseStudies.reduce((sum, cs) => sum + cs.questions.reduce((s, q) => s + q.marks, 0), 0) },
                { icon: GraduationCap, label: "Session", value: "S25" }
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-4 text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 border-t border-border/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Interactive Data Tables",
                  description: "Click cells to calculate percentage changes and compare data points",
                  icon: "📊"
                },
                {
                  title: "Answer Blueprints",
                  description: " (Knowledge), (Analysis), and (Evaluation) breakdown for each question",
                  icon: "📝"
                },
                {
                  title: "Evidence Highlighting",
                  description: "Click questions to highlight relevant paragraphs and data in the case study",
                  icon: "🔍"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-8">
              Available Papers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {caseStudies.map((caseStudy, idx) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CaseStudyCard
                      caseStudy={caseStudy}
                      onClick={() => setSelectedCaseStudy(caseStudy)}
                      isSelected={false}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="py-12 border-t border-border/30">
          <div className="container mx-auto px-6">
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-4 text-center">
                How to Use This Section
              </h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">1</span>
                  <span>Select a case study paper to begin your practice session</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">2</span>
                  <span>Read the case study material and examine the data tables carefully</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">3</span>
                  <span>Attempt each question before revealing the Answer Blueprint and Model Answer</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">4</span>
                  <span>Use the calculator tool on data tables to practice percentage calculations</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">5</span>
                  <span>Click on questions to highlight relevant evidence in the case study</span>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;
