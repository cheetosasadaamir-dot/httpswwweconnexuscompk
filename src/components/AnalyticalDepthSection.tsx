import { cn } from '@/lib/utils';
import { Microscope, Scale } from 'lucide-react';

interface AnalyticalDepthSectionProps {
  children: React.ReactNode;
  className?: string;
}

interface EvaluativeJudgementSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const AnalyticalDepthSection = ({ children, className }: AnalyticalDepthSectionProps) => {
  return (
    <div className={cn(
      "glass-card rounded-2xl p-8 border-l-4 border-l-neon-cyan mb-8",
      className
    )}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
          <Microscope className="w-5 h-5 text-neon-cyan" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-silver-bright">Analytical Depth</h3>
          <p className="text-xs text-neon-cyan/70">Short-Run vs Long-Run • Stakeholder Impact</p>
        </div>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
};

export const EvaluativeJudgementSection = ({ children, className }: EvaluativeJudgementSectionProps) => {
  return (
    <div className={cn(
      "glass-card rounded-2xl p-8 border-l-4 border-l-amber-500 mb-8",
      className
    )}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
          <Scale className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-silver-bright">Evaluative Judgement</h3>
          <p className="text-xs text-amber-400/70">Critical Assessment • Balanced Perspective</p>
        </div>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
};

export default AnalyticalDepthSection;
