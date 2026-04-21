import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { cn } from '@/lib/utils';

interface MathBlockProps {
  /** LaTeX expression, e.g. "F = ma" or "\\frac{1}{2}mv^2" */
  expr: string;
  /** Step label, e.g. "Step 1" */
  label?: string;
  className?: string;
}

/** Block-level derivation step rendered with KaTeX */
export const MathBlock = ({ expr, label, className }: MathBlockProps) => (
  <div
    className={cn(
      'rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 my-2 overflow-x-auto',
      className
    )}
  >
    {label && (
      <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80 font-mono mb-1">
        {label}
      </div>
    )}
    <div className="text-foreground text-base md:text-lg leading-relaxed">
      <BlockMath math={expr} />
    </div>
  </div>
);

/** Inline math, e.g. <Math>v = u + at</Math> */
export const Math = ({ children }: { children: string }) => (
  <span className="text-primary/95"><InlineMath math={children} /></span>
);

export default MathBlock;
