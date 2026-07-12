import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
 ArrowRight, 
 TrendingUp, 
 ShoppingCart, 
 Users, 
 BarChart3,
 Scale,
 Factory,
 Target,
 Briefcase,
 GraduationCap,
 BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const asLevelTopics = [
 {
 title: 'Basic Economic Ideas',
 description: 'Scarcity, opportunity cost, PPF, and economic systems',
 href: '/basic-economic-ideas',
 icon: Target,
 chapter: 1,
 },
 {
 title: 'The Price System',
 description: 'Demand, supply, equilibrium, and market mechanisms',
 href: '/price-system',
 icon: TrendingUp,
 chapter: 2,
 },
 {
 title: 'Elasticities',
 description: 'PED, YED, XED, PES and their applications',
 href: '/elasticities',
 icon: BarChart3,
 chapter: 3,
 },
 {
 title: 'Market Failure',
 description: 'Externalities, public goods, and government intervention',
 href: '/market-failure',
 icon: Scale,
 chapter: 4,
 },
];

const a2LevelTopics = [
 {
 title: 'Utility & Consumer Choice',
 description: 'Marginal utility, indifference curves, budget constraints, and equimarginal principle',
 href: '/a2-micro/utility-consumer-choice',
 icon: Users,
 chapter: 1,
 },
 {
 title: 'Production, Costs & Profits',
 description: 'Law of diminishing returns, economies of scale, cost curves, and revenue analysis',
 href: '/a2-micro/production-costs',
 icon: Factory,
 chapter: 2,
 },
 {
 title: 'Market Structures',
 description: 'Perfect competition, monopoly, oligopoly, monopolistic competition, game theory, X-efficiency, contestable markets',
 href: '/a2-micro/market-structures',
 icon: ShoppingCart,
 chapter: 3,
 },
 {
 title: 'Economic Efficiency',
 description: 'Allocative, productive, dynamic efficiency, and Pareto optimality',
 href: '/a2-micro/economic-efficiency',
 icon: Target,
 chapter: 4,
 },
 {
 title: 'Labor Market',
 description: 'MRP theory, wage determination, monopsony, trade unions, and wage differentials',
 href: '/a2-micro/labor-market',
 icon: Briefcase,
 chapter: 5,
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
 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
 <topic.icon className="w-6 h-6 text-primary" />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-1">
 <span className="text-xs text-muted-foreground">Chapter {topic.chapter}</span>
 </div>
 <h3 className="font-serif text-lg font-semibold text-silver-bright group-hover:text-primary transition-colors mb-2">
 {topic.title}
 </h3>
 <p className="text-sm text-muted-foreground leading-relaxed">
 {topic.description}
 </p>
 </div>
 <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
 <Icon className="w-7 h-7 text-primary" />
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

const Microeconomics =  => {
 return (
 <div className="min-h-screen relative">
 <Helmet>
 <title>Microeconomics — EconNexus</title>
 <meta name="description" content="A-Level microeconomics chapters on EconNexus — scarcity, price system, elasticities, market failure, market structures, labor market, utility, and production costs." />
 <link rel="canonical" href="https://httpswwweconnexuscompk.lovable.app/microeconomics" />
 <meta property="og:title" content="Microeconomics — EconNexus" />
 <meta property="og:description" content="A-Level microeconomics chapters — price system, elasticities, market failure, market structures, and more." />
 <meta property="og:url" content="https://httpswwweconnexuscompk.lovable.app/microeconomics" />
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
 <TrendingUp className="w-4 h-4 text-primary" />
 <span className="text-sm text-muted-foreground">Individual Markets & Decision Making</span>
 </div>
 <h1 className="font-serif text-5xl lg:text-6xl font-bold section-title mb-6">
 Microeconomics
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 Study the behavior of individuals, households, and firms in making decisions regarding 
 the allocation of limited resources. Explore market mechanisms, pricing, and efficiency.
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

export default Microeconomics;
