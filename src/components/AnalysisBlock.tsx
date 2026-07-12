import { cn } from '@/lib/utils';
import { Search, Scale } from 'lucide-react';

interface AnalysisBlockProps {
 title: string;
 type?: 'analysis' | 'evaluation';
 children: React.ReactNode;
 className?: string;
}

const AnalysisBlock = ({ title, type = 'analysis', children, className }: AnalysisBlockProps) => {
 const isEvaluation = type === 'evaluation';
 
 return (
 <div 
 className={cn(
 "glass-card p-6 border-l-4",
 isEvaluation ? 'border-l-secondary': 'border-l-primary',
 className
 )}
 >
 <div className="flex items-center gap-3 mb-4">
 <div className={cn(
 "w-10 h-10 rounded-lg flex items-center justify-center",
 isEvaluation ? 'bg-secondary/20': 'bg-primary/20'
 )}>
 {isEvaluation ? (
 <Scale className="w-5 h-5 text-secondary" />
 ): (
 <Search className="w-5 h-5 text-primary" />
 )}
 </div>
 <div>
 <span className={cn(
 "text-xs font-medium px-2 py-1 rounded-full",
 isEvaluation ? 'bg-secondary/20 text-secondary': 'bg-primary/20 text-primary'
 )}>
 {isEvaluation ? 'Critical Evaluation': 'Diagram Analysis'}
 </span>
 </div>
 </div>
 <h4 className="font-serif text-xl text-silver-bright mb-4">{title}</h4>
 <div className="text-muted-foreground leading-relaxed-plus space-y-3">
 {children}
 </div>
 </div>
 );
};

export default AnalysisBlock;
