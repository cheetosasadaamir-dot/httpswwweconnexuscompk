import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Landmark, 
  TrendingUp, 
  Activity,
  PiggyBank,
  Wallet,
  Scale,
  BarChart3,
  Building2,
  Users,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const asLevelTopics = [
  {
    title: 'AD/AS Equilibrium',
    description: 'Aggregate demand, aggregate supply, and macroeconomic equilibrium',
    href: '/as-macro/ad-as',
    icon: Activity,
    chapter: 1,
  },
  {
    title: 'Inflation',
    description: 'Money, causes of inflation, CPI measurement, and effects',
    href: '/as-macro/inflation',
    icon: TrendingUp,
    chapter: 2,
  },
  {
    title: 'International Trade',
    description: 'Comparative advantage, terms of trade, and protectionism',
    href: '/as-macro/international-trade',
    icon: Globe,
    chapter: 3,
  },
  {
    title: 'Balance of Payments',
    description: 'Current account, capital account, and exchange rates',
    href: '/as-macro/balance-of-payments',
    icon: Scale,
    chapter: 4,
  },
  {
    title: 'Macroeconomic Policy',
    description: 'Fiscal policy, monetary policy, and supply-side policies',
    href: '/as-macro/policy',
    icon: Landmark,
    chapter: 5,
  },
];

const a2LevelTopics = [
  {
    title: 'National Income',
    description: 'GDP, GNP, and methods of measuring national income',
    href: '/a2-macro/national-income',
    icon: BarChart3,
    chapter: 1,
  },
  {
    title: 'Income Determination',
    description: 'Keynesian Cross, AE model, and multiplier effects',
    href: '/a2-macro/income-determination',
    icon: Activity,
    chapter: 2,
  },
  {
    title: 'Investment',
    description: 'MEC curve, accelerator principle, and investment determinants',
    href: '/a2-macro/investment',
    icon: PiggyBank,
    chapter: 3,
  },
  {
    title: 'Government & Trade',
    description: 'Government spending multiplier and trade balance effects',
    href: '/a2-macro/government-trade',
    icon: Building2,
    chapter: 4,
  },
  {
    title: 'Money & Banking',
    description: 'Money supply, liquidity preference, and monetary transmission',
    href: '/a2-macro/money-banking',
    icon: Wallet,
    chapter: 5,
  },
  {
    title: 'Unemployment & Growth',
    description: 'Phillips Curve, natural rate hypothesis, and economic growth',
    href: '/a2-macro/unemployment-growth',
    icon: Users,
    chapter: 6,
  },
  {
    title: 'Policy Objectives',
    description: 'Policy conflicts, trade-offs, and coordination challenges',
    href: '/a2-macro/policy-objectives',
    icon: Scale,
    chapter: 7,
  },
  {
    title: 'Development & Trade Blocs',
    description: 'Economic development, Lorenz curve, and regional integration',
    href: '/a2-macro/development',
    icon: Globe,
    chapter: 8,
  },
];

const TopicCard = ({ topic, delay }: { topic: typeof asLevelTopics[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <Link to={topic.href}>
      <motion.div
        className="glass-card p-6 h-full group cursor-pointer"
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
            <topic.icon className="w-6 h-6 text-secondary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-muted-foreground">Chapter {topic.chapter}</span>
            </div>
            <h3 className="font-serif text-lg font-semibold text-silver-bright group-hover:text-secondary transition-colors mb-2">
              {topic.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {topic.description}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

const LevelSection = ({ 
  level, 
  topics, 
  icon: Icon,
  id 
}: { 
  level: string; 
  topics: typeof asLevelTopics; 
  icon: React.ComponentType<{ className?: string }>;
  id: string;
}) => (
  <section id={id} className="mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
        <Icon className="w-7 h-7 text-secondary" />
      </div>
      <div>
        <h2 className="font-serif text-3xl font-bold text-silver-bright">{level}</h2>
        <p className="text-muted-foreground">Cambridge International {level}</p>
      </div>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-4">
      {topics.map((topic, index) => (
        <TopicCard key={topic.href} topic={topic} delay={index * 0.1} />
      ))}
    </div>
  </section>
);

const Macroeconomics = () => {
  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Macroeconomics — EconNexus</title>
        <meta name="description" content="A-Level macroeconomics chapters on EconNexus — AD/AS, inflation, trade, exchange rates, balance of payments, national income, and development." />
        <link rel="canonical" href="https://httpswwweconnexuscompk.lovable.app/macroeconomics" />
        <meta property="og:title" content="Macroeconomics — EconNexus" />
        <meta property="og:description" content="A-Level macroeconomics chapters — AD/AS, inflation, exchange rates, balance of payments, and more." />
        <meta property="og:url" content="https://httpswwweconnexuscompk.lovable.app/macroeconomics" />
      </Helmet>
      <Header />

      <main className="relative z-20 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Breadcrumbs />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground">The Economy as a Whole</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold section-title mb-6">
              Macroeconomics
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Analyze the economy at the national and global level. Study aggregate demand and supply, 
              inflation, unemployment, international trade, and government policy.
            </p>
          </motion.div>

          {/* AS Level Section */}
          <LevelSection 
            level="AS Level" 
            topics={asLevelTopics} 
            icon={BookOpen}
            id="as"
          />

          {/* A2 Level Section */}
          <LevelSection 
            level="A2 Level" 
            topics={a2LevelTopics} 
            icon={GraduationCap}
            id="a2"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Macroeconomics;
