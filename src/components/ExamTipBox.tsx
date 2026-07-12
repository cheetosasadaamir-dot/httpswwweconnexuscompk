import { cn } from '@/lib/utils';
import { Lightbulb, Star, AlertTriangle } from 'lucide-react';

interface ExamTipBoxProps {
  title?: string;
  variant?: 'gold' | 'silver' | 'warning';
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  gold: {
    container: 'border-amber-500/50 bg-amber-500/10',
    icon: 'text-amber-400',
    title: 'text-amber-300',
    glow: 'shadow-amber-500/20',
    IconComponent: Star,
  },
  silver: {
    container: 'border-silver/50 bg-silver/10',
    icon: 'text-silver-bright',
    title: 'text-silver-bright',
    glow: 'shadow-silver/20',
    IconComponent: Lightbulb,
  },
  warning: {
    container: 'border-orange-500/50 bg-orange-500/10',
    icon: 'text-orange-400',
    title: 'text-orange-300',
    glow: 'shadow-orange-500/20',
    IconComponent: AlertTriangle,
  },
};

const ExamTipBox = ({ 
  title = 'Exam Tip', 
  variant = 'gold', 
  children, 
  className 
}: ExamTipBoxProps) => {
  const styles = variantStyles[variant];
  const Icon = styles.IconComponent;

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl border-2 p-6 backdrop-blur-sm",
        styles.container,
        `shadow-lg ${styles.glow}`,
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30 blur-3xl" 
        style={{ 
          background: variant === 'gold' 
            ? 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)'
            : variant === 'silver'
            ? 'radial-gradient(circle, rgba(203, 213, 225, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)'
        }} 
      />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            variant === 'gold' ? 'bg-amber-500/20' : variant === 'silver' ? 'bg-silver/20' : 'bg-orange-500/20'
          )}>
            <Icon className={cn("w-5 h-5", styles.icon)} />
          </div>
          <h4 className={cn("font-serif text-lg font-semibold", styles.title)}>
            {title}
          </h4>
        </div>
        <div className="text-muted-foreground leading-relaxed-plus">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExamTipBox;
