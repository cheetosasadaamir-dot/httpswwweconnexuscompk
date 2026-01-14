import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

const GlossaryTooltip = ({ term, definition, children }: GlossaryTooltipProps) => {
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <span className="cursor-help border-b border-dashed border-indigo-glow/50 text-indigo-glow hover:border-indigo-glow transition-colors">
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent 
        className="max-w-xs glass-card border-silver/20 px-4 py-3"
        sideOffset={5}
      >
        <p className="font-serif text-sm font-medium text-silver-bright mb-1">{term}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{definition}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default GlossaryTooltip;
