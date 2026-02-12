import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  ArrowLeft, 
  TrendingUp, 
  Globe, 
  ChevronRight,
  GraduationCap,
  BarChart3,
  Banknote,
  Users,
  Factory,
  Scale,
  LineChart,
  Landmark,
  Coins
} from "lucide-react";
import Layout from "@/components/Layout";
import EconNexusLogo from "@/components/EconNexusLogo";

interface NoteCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  chapters: {
    title: string;
    href: string;
    topics: string[];
  }[];
}

const noteCategories: NoteCategory[] = [
  {
    id: "as-micro",
    title: "AS Microeconomics",
    description: "Foundational concepts in individual markets, price mechanisms, and market failures",
    icon: TrendingUp,
    chapters: [
      {
        title: "Basic Economic Ideas",
        href: "/basic-economic-ideas",
        topics: ["Scarcity & Choice", "PPC", "Opportunity Cost", "Economic Systems"]
      },
      {
        title: "The Price System",
        href: "/price-system",
        topics: ["Demand & Supply", "Market Equilibrium", "Price Mechanism"]
      },
      {
        title: "Elasticities",
        href: "/elasticities",
        topics: ["PED", "YED", "XED", "PES"]
      },
      {
        title: "Market Failure",
        href: "/market-failure",
        topics: ["Externalities", "Public Goods", "Information Asymmetry"]
      }
    ]
  },
  {
    id: "a2-micro",
    title: "A2 Microeconomics",
    description: "Advanced theory of the firm, market structures, and labor economics",
    icon: Factory,
    chapters: [
      {
        title: "Utility & Consumer Choice",
        href: "/a2-micro/utility-consumer-choice",
        topics: ["Marginal Utility", "Indifference Curves", "Budget Lines"]
      },
      {
        title: "Production & Costs",
        href: "/a2-micro/production-costs",
        topics: ["Short-Run Costs", "Long-Run Costs", "Economies of Scale"]
      },
      {
        title: "Economic Efficiency",
        href: "/a2-micro/economic-efficiency",
        topics: ["Allocative Efficiency", "Productive Efficiency", "X-Efficiency"]
      },
      {
        title: "Market Structures",
        href: "/a2-micro/market-structures",
        topics: ["Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition"]
      },
      {
        title: "Labor Market",
        href: "/a2-micro/labor-market",
        topics: ["Wage Determination", "Monopsony", "Trade Unions"]
      }
    ]
  },
  {
    id: "as-macro",
    title: "AS Macroeconomics",
    description: "National economy fundamentals including AD/AS, inflation, and international trade",
    icon: Globe,
    chapters: [
      {
        title: "AD/AS Equilibrium",
        href: "/as-macro/ad-as",
        topics: ["Aggregate Demand", "SRAS & LRAS", "Macroeconomic Equilibrium"]
      },
      {
        title: "Inflation",
        href: "/as-macro/inflation",
        topics: ["Demand-Pull", "Cost-Push", "Measuring Inflation"]
      },
      {
        title: "International Trade",
        href: "/as-macro/international-trade",
        topics: ["Comparative Advantage", "Terms of Trade", "Protectionism"]
      },
      {
        title: "Balance of Payments",
        href: "/as-macro/balance-of-payments",
        topics: ["Current Account", "Capital Account", "BoP Equilibrium"]
      },
      {
        title: "Macroeconomic Policy",
        href: "/as-macro/policy",
        topics: ["Fiscal Policy", "Monetary Policy", "Supply-Side Policies"]
      }
    ]
  },
  {
    id: "a2-macro",
    title: "A2 Macroeconomics",
    description: "Advanced monetary theory, growth economics, and development studies",
    icon: Landmark,
    chapters: [
      {
        title: "Keynesian Theory",
        href: "/a2-macro/national-income",
        topics: ["Multiplier Effect", "Keynesian Cross", "Paradox of Thrift"]
      },
      {
        title: "Unemployment & Phillips Curve",
        href: "/a2-macro/unemployment-growth",
        topics: ["Types of Unemployment", "Phillips Curve", "NAIRU"]
      },
      {
        title: "Policy Objectives",
        href: "/a2-macro/policy-objectives",
        topics: ["Policy Conflicts", "Laffer Curve", "Policy Effectiveness"]
      },
      {
        title: "Money & Banking",
        href: "/a2-macro/money-banking",
        topics: ["Money Supply", "Quantity Theory", "Central Banking"]
      },
      {
        title: "Development Economics",
        href: "/a2-macro/development",
        topics: ["HDI", "Harrod-Domar", "Sustainable Development"]
      }
    ]
  }
];

const Notes = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/80 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <EconNexusLogo size="sm" showText={false} linkHome={false} />
                <span className="text-sm font-medium text-neon-cyan uppercase tracking-widest">
                  CIE 9708 Syllabus
                </span>
              </div>
              
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-title">
                Notes Library
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Comprehensive study materials covering the entire Cambridge International 
                A-Level Economics syllabus. Each chapter includes theory, diagrams, 
                exam tips, and real-world applications.
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
                { icon: BookOpen, label: "Chapters", value: "18+" },
                { icon: BarChart3, label: "Diagrams", value: "100+" },
                { icon: GraduationCap, label: "Exam Tips", value: "50+" },
                { icon: LineChart, label: "Case Studies", value: "20+" }
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-4 text-center">
                  <stat.icon className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {noteCategories.map((category, idx) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 hover:border-neon-cyan/30 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div 
                    className="flex items-start gap-4 cursor-pointer"
                    onClick={() => setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )}
                  >
                    <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      <p className="text-xs text-neon-cyan/70 mt-2">
                        {category.chapters.length} chapters
                      </p>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        expandedCategory === category.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>

                  {/* Expanded Chapters */}
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 space-y-3 border-t border-white/5 pt-4"
                    >
                      {category.chapters.map((chapter) => (
                        <Link
                          key={chapter.href}
                          to={chapter.href}
                          className="block p-4 rounded-lg bg-white/5 hover:bg-neon-cyan/10 border border-transparent hover:border-neon-cyan/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-white group-hover:text-neon-cyan transition-colors">
                              {chapter.title}
                            </h4>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {chapter.topics.map((topic) => (
                              <span
                                key={topic}
                                className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-12 border-t border-border/30">
          <div className="container mx-auto px-6">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-8 text-center">
              Quick Access
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Scale, label: "AD/AS Model", href: "/as-macro/ad-as" },
                { icon: Coins, label: "Money & Banking", href: "/a2-macro/money-banking" },
                { icon: Users, label: "Labor Market", href: "/a2-micro/labor-market" },
                { icon: Banknote, label: "Fiscal Policy", href: "/as-macro/policy" }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="glass-card p-4 text-center hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300 group"
                >
                  <item.icon className="w-6 h-6 text-neon-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Notes;
