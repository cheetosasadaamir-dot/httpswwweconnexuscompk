/**
 * Chain of Analysis Component
 * Renders dense, zero-gap analytical blocks with proper economic formatting
 */

import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';

interface ChainStep {
  constraint?: string;
  action: string;
  transmission?: string;
  result: string;
}

interface ChainOfAnalysisProps {
  title?: string;
  steps: ChainStep[];
  conclusion?: string;
  variant?: 'default' | 'transmission' | 'welfare';
}

/**
 * Renders a chain of reasoning in Cambridge A-Level format
 * Format: Constraint → Action → Transmission → Final Equilibrium
 */
export function ChainOfAnalysis({ 
  title = "Chain of Reasoning", 
  steps, 
  conclusion,
  variant = 'default' 
}: ChainOfAnalysisProps) {
  const variantStyles = {
    default: 'from-primary/10 to-transparent border-primary',
    transmission: 'from-secondary/10 to-transparent border-secondary',
    welfare: 'from-cambridge-green/10 to-transparent border-cambridge-green',
  };

  const iconColor = {
    default: 'text-primary',
    transmission: 'text-secondary',
    welfare: 'text-cambridge-green',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg bg-gradient-to-r ${variantStyles[variant]} border-l-4 my-4`}
    >
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className={`w-4 h-4 ${iconColor[variant]}`} />
        <h4 className="font-serif text-sm font-semibold text-foreground">{title}</h4>
      </div>
      
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-wrap items-center gap-1 text-sm leading-relaxed">
            {step.constraint && (
              <>
                <span className="font-medium text-foreground">{step.constraint}</span>
                <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
              </>
            )}
            <span className="text-foreground/90">{step.action}</span>
            {step.transmission && (
              <>
                <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                <span className="text-foreground/90">{step.transmission}</span>
              </>
            )}
            <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            <span className="font-medium text-primary">{step.result}</span>
          </div>
        ))}
      </div>
      
      {conclusion && (
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            {conclusion}
          </p>
        </div>
      )}
    </motion.div>
  );
}

interface TransmissionMechanismProps {
  policy: string;
  stages: string[];
  finalEffect: string;
}

/**
 * Specialized component for monetary/fiscal transmission mechanisms
 */
export function TransmissionMechanism({ policy, stages, finalEffect }: TransmissionMechanismProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-lg bg-gradient-to-r from-cambridge-cyan/10 to-transparent border-l-4 border-cambridge-cyan my-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-cambridge-cyan" />
        <h4 className="font-serif text-sm font-semibold text-foreground">{policy} Transmission Mechanism</h4>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {stages.map((stage, index) => (
          <span key={index} className="flex items-center gap-2">
            <span className={index === 0 ? 'font-medium text-cambridge-cyan' : 'text-foreground/90'}>
              {stage}
            </span>
            {index < stages.length - 1 && (
              <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            )}
          </span>
        ))}
        <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
        <span className="font-semibold text-cambridge-gold">{finalEffect}</span>
      </div>
    </motion.div>
  );
}

interface WelfareAnalysisProps {
  title: string;
  gains: string[];
  losses: string[];
  netEffect: string;
  isNetPositive?: boolean;
}

/**
 * Welfare analysis block for surplus/deadweight loss explanations
 */
export function WelfareAnalysis({ title, gains, losses, netEffect, isNetPositive = true }: WelfareAnalysisProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-lg glass-card my-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-secondary" />
        <h4 className="font-serif text-sm font-semibold text-foreground">{title}</h4>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs font-medium text-cambridge-green mb-2 uppercase tracking-wide">Welfare Gains</p>
          <ul className="space-y-1">
            {gains.map((gain, i) => (
              <li key={i} className="text-sm text-foreground/90 flex items-start gap-2">
                <span className="text-cambridge-green">+</span>
                <span>{gain}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <p className="text-xs font-medium text-destructive mb-2 uppercase tracking-wide">Welfare Losses</p>
          <ul className="space-y-1">
            {losses.map((loss, i) => (
              <li key={i} className="text-sm text-foreground/90 flex items-start gap-2">
                <span className="text-destructive">−</span>
                <span>{loss}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={`p-2 rounded ${isNetPositive ? 'bg-cambridge-green/10' : 'bg-destructive/10'}`}>
        <p className="text-sm font-medium text-foreground">
          <span className="text-muted-foreground">Net Effect: </span>
          <span className={isNetPositive ? 'text-cambridge-green' : 'text-destructive'}>
            {netEffect}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default ChainOfAnalysis;
