import {
 Tooltip,
 TooltipContent,
 TooltipTrigger,
} from "@/components/ui/tooltip";
import { glossaryTerms } from "@/data/glossaryTerms";
import { useMemo } from "react";

interface GlossaryTooltipProps {
 term: string;
 definition?: string;
 children: React.ReactNode;
}

/**
 * GlossaryTooltip - Glassmorphism-styled hover tooltip for economic terms
 * 
 * Usage:
 * <GlossaryTooltip term="Aggregate Demand">AD</GlossaryTooltip>
 * 
 * If no definition is provided, it will auto-lookup from glossaryTerms
 */
const GlossaryTooltip = ({ term, definition, children }: GlossaryTooltipProps) => {
 // Auto-lookup definition from glossary if not provided
 const glossaryEntry = useMemo( => {
 if (definition) return null;
 return glossaryTerms.find(
 g => g.term.toLowerCase === term.toLowerCase ||
 g.term.toLowerCase.includes(term.toLowerCase)
 );
 }, [term, definition]);

 const finalDefinition = definition || glossaryEntry?.definition || `${term}: Definition not found in glossary.`;
 const examTip = glossaryEntry?.examTip;
 const formula = glossaryEntry?.formula;
 const level = glossaryEntry?.level;

 return (
 <Tooltip delayDuration={150}>
 <TooltipTrigger asChild>
 <span className="cursor-help border-b border-dashed border-indigo-glow/50 text-indigo-glow hover:border-indigo-glow hover:text-indigo-glow/90 transition-colors font-medium">
 {children}
 </span>
 </TooltipTrigger>
 <TooltipContent 
 className="max-w-sm glass-card border-silver/20 px-4 py-3 shadow-xl"
 sideOffset={8}
 style={{
 backdropFilter: 'blur(16px)',
 WebkitBackdropFilter: 'blur(16px)',
 background: 'linear-gradient(135deg, hsl(214 100% 14% / 0.95), hsl(214 100% 10% / 0.98))',
 border: '1px solid hsl(43 72% 53% / 0.2)',
 }}
 >
 <div className="space-y-2">
 <div className="flex items-center justify-between gap-2">
 <p className="font-serif text-sm font-semibold text-silver-bright">{term}</p>
 {level && (
 <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
 {level}
 </span>
 )}
 </div>
 <p className="text-xs text-muted-foreground leading-relaxed">{finalDefinition}</p>
 
 {formula && (
 <div className="p-2 bg-muted/30 rounded text-xs font-mono text-cambridge-cyan">
 {formula}
 </div>
 )}
 
 {examTip && (
 <div className="pt-1 border-t border-silver/10">
 <p className="text-[10px] text-amber-400/80">
 <span className="font-semibold">💡 Exam Tip:</span> {examTip}
 </p>
 </div>
 )}
 </div>
 </TooltipContent>
 </Tooltip>
 );
};

export default GlossaryTooltip;
