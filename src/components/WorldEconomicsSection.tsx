import { useState, useMemo } from 'react';
import { Globe2, ChevronDown, ChevronUp, BookOpen, TrendingUp, Lightbulb, AlertTriangle } from 'lucide-react';
import { worldEconomicsTopics, getCategoryLabel, getCategoryIcon, type WorldEconomicsTopic } from '@/data/worldEconomicsTopics';
import { cn } from '@/lib/utils';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const TopicCard = ({ topic }: { topic: WorldEconomicsTopic }) => {
 const [isExpanded, setIsExpanded] = useState(false);

 return (
 <div className="glass-card overflow-hidden transition-all duration-300 hover:border-[rgba(212,175,55,0.2)]">
 <button
 onClick={ => setIsExpanded(!isExpanded)}
 className="w-full p-5 text-left flex items-start justify-between gap-4 group cursor-pointer min-h-[44px]"
 >
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-lg">{getCategoryIcon(topic.category)}</span>
 <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/20 text-primary">
 {getCategoryLabel(topic.category)}
 </span>
 </div>
 <h4 className="font-serif text-lg text-silver-bright group-hover:text-primary transition-colors">
 {topic.title}
 </h4>
 <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
 {topic.definition}
 </p>
 </div>
 <div className="flex-shrink-0 mt-1">
 {isExpanded ? (
 <ChevronUp className="w-5 h-5 text-primary" />
 ): (
 <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
 )}
 </div>
 </button>

 {isExpanded && (
 <div className="px-5 pb-5 space-y-4 border-t border-white/10 pt-4 animate-in fade-in duration-200">
 <div>
 <div className="flex items-center gap-2 mb-2">
 <BookOpen className="w-4 h-4 text-secondary" />
 <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Definition</span>
 </div>
 <p className="text-sm text-muted-foreground leading-relaxed">{topic.definition}</p>
 </div>

 <div>
 <div className="flex items-center gap-2 mb-2">
 <Lightbulb className="w-4 h-4 text-primary" />
 <span className="text-xs font-semibold text-primary uppercase tracking-wide">Key Points</span>
 </div>
 <ul className="space-y-1.5">
 {topic.keyPoints.map((point, idx) => (
 <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
 <span className="text-primary mt-1">•</span>
 <span>{point}</span>
 </li>
 ))}
 </ul>
 </div>

 {topic.formula && (
 <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
 <span className="text-xs font-semibold text-primary uppercase tracking-wide">Formula</span>
 <div className="text-silver-bright text-center mt-1">
 <InlineMath math={topic.formula} />
 </div>
 </div>
 )}

 <div>
 <div className="flex items-center gap-2 mb-2">
 <TrendingUp className="w-4 h-4 text-cyan-400" />
 <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Chain of Analysis</span>
 </div>
 <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
 <p className="text-sm text-muted-foreground leading-relaxed">{topic.analysis}</p>
 </div>
 </div>

 {topic.evaluation && (
 <div>
 <div className="flex items-center gap-2 mb-2">
 <AlertTriangle className="w-4 h-4 text-secondary" />
 <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Critical Evaluation</span>
 </div>
 <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
 <p className="text-sm text-muted-foreground leading-relaxed">{topic.evaluation}</p>
 </div>
 </div>
 )}

 {topic.realWorldExample && (
 <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
 <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">🌍 Real-World Example</span>
 <p className="text-sm text-muted-foreground leading-relaxed mt-1">{topic.realWorldExample}</p>
 </div>
 )}
 </div>
 )}
 </div>
 );
};

const WorldEconomicsSection =  => {
 const [activeCategory, setActiveCategory] = useState<WorldEconomicsTopic['category'] | 'all'>('all');

 const categories: Array<WorldEconomicsTopic['category'] | 'all'> = ['all', 'theory', 'policy', 'trade', 'market-failure', 'macro'];

 const filteredTopics = useMemo( => 
 activeCategory === 'all' 
 ? worldEconomicsTopics: worldEconomicsTopics.filter(t => t.category === activeCategory),
 [activeCategory]
 );

 return (
 <section className="py-24 lg:py-32">
 <div className="responsive-container mx-auto px-6 lg:px-8">
 {/* Section Header */}
 <div className="text-center mb-12">
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-6">
 <Globe2 className="w-4 h-4" />
 Advanced Economic Concepts
 </span>
 <h2 className="font-serif text-4xl lg:text-5xl font-bold section-title mb-4">
 World Economics
 </h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
 A comprehensive A–Z glossary of advanced economic concepts with examiner-standard analysis and critical evaluation chains.
 </p>
 </div>

 {/* Category Filter */}
 <div className="flex flex-wrap justify-center gap-2 mb-10">
 {categories.map((category) => (
 <button
 key={category}
 onClick={ => setActiveCategory(category)}
 className={cn(
 "px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer min-h-[44px]",
 activeCategory === category
 ? "bg-primary text-primary-foreground": "glass-card hover:bg-white/10 text-muted-foreground hover:text-silver-bright"
 )}
 >
 {category === 'all' ? '🌐 All Topics': `${getCategoryIcon(category)} ${getCategoryLabel(category)}`}
 </button>
 ))}
 </div>

 {/* Topic Grid */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {filteredTopics.map((topic) => (
 <TopicCard key={topic.id} topic={topic} />
 ))}
 </div>

 <p className="text-center text-sm text-muted-foreground mt-10">
 Click any card to expand and view the full examiner-standard analysis.
 </p>
 </div>
 </section>
 );
};

export default WorldEconomicsSection;
