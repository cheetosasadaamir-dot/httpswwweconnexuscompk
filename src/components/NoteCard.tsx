import { cn } from '@/lib/utils';

interface NoteCardProps {
  title: string;
  type?: 'theory' | 'application' | 'exam-tip' | 'definition';
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const typeStyles = {
  theory: {
    border: 'border-l-primary',
    badge: 'bg-primary/20 text-primary',
    label: 'Core Theory',
  },
  application: {
    border: 'border-l-secondary',
    badge: 'bg-secondary/20 text-secondary',
    label: 'Real-World Application',
  },
  'exam-tip': {
    border: 'border-l-amber-500',
    badge: 'bg-amber-500/20 text-amber-400',
    label: 'Exam Tip',
  },
  definition: {
    border: 'border-l-cyan-500',
    badge: 'bg-cyan-500/20 text-cyan-400',
    label: 'Key Definition',
  },
};

const NoteCard = ({ title, type = 'theory', children, className, delay = 0 }: NoteCardProps) => {
  const styles = typeStyles[type];

  return (
    <div 
      className={cn(
        "glass-card-hover border-l-4 p-6",
        styles.border,
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: 'fade-in-up 0.6s ease-out forwards',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className={cn("px-3 py-1 rounded-full text-xs font-medium", styles.badge)}>
          {styles.label}
        </span>
      </div>
      <h3 className="font-serif text-xl text-silver-bright mb-4">{title}</h3>
      <div className="text-muted-foreground leading-relaxed-plus space-y-4">
        {children}
      </div>
    </div>
  );
};

export default NoteCard;
