import { motion } from 'framer-motion';
import { Globe, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface RealWorldExampleProps {
 title: string;
 description: string;
 impact: string;
 type?: 'positive' | 'negative' | 'neutral';
 source?: string;
 className?: string;
}

/**
 * Real World Example Component
 * Provides concrete case studies for economic concepts
 */
const RealWorldExample = ({ 
 title, 
 description, 
 impact, 
 type = 'neutral',
 source,
 className = "" 
}: RealWorldExampleProps) => {
 const typeConfig = {
 positive: {
 icon: TrendingUp,
 borderColor: 'border-green-500/30',
 iconColor: 'text-green-400',
 bgColor: 'bg-green-500/5'
 },
 negative: {
 icon: TrendingDown,
 borderColor: 'border-red-500/30',
 iconColor: 'text-red-400',
 bgColor: 'bg-red-500/5'
 },
 neutral: {
 icon: AlertCircle,
 borderColor: 'border-cyan-500/30',
 iconColor: 'text-cyan-400',
 bgColor: 'bg-cyan-500/5'
 }
 };

 const config = typeConfig[type];
 const Icon = config.icon;

 return (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className={`glass-card p-5 rounded-xl border ${config.borderColor} ${config.bgColor} ${className}`}
 >
 <div className="flex items-start gap-4">
 <div className="flex-shrink-0">
 <div className={`w-10 h-10 rounded-lg bg-card/50 flex items-center justify-center`}>
 <Globe className="w-5 h-5 text-primary" />
 </div>
 </div>
 
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-2">
 <h4 className="font-semibold text-silver-bright text-sm">{title}</h4>
 <Icon className={`w-4 h-4 ${config.iconColor}`} />
 </div>
 
 <p className="text-sm text-muted-foreground leading-relaxed mb-3">
 {description}
 </p>
 
 <div className="p-3 bg-card/30 rounded-lg border border-silver/10">
 <span className="text-xs text-primary font-semibold uppercase tracking-wide">Economic Impact</span>
 <p className="text-xs text-muted-foreground mt-1">{impact}</p>
 </div>
 
 {source && (
 <p className="text-[10px] text-muted-foreground mt-2 italic">Source: {source}</p>
 )}
 </div>
 </div>
 </motion.div>
 );
};

export default RealWorldExample;
