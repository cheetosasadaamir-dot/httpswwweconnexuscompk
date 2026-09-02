import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DiagramLegendItem {
  label: string;
  color: string;
  /** 'line' renders a stroke swatch, 'dot' a filled circle, 'area' a soft block. */
  kind?: 'line' | 'dot' | 'area';
  dashed?: boolean;
}

interface DiagramFrameProps {
  title: string;
  /** Optional short caption shown under the title, e.g. "Figure 2.4". */
  eyebrow?: string;
  legend?: DiagramLegendItem[];
  /** Exam-accurate note rendered beneath the plot. */
  note?: ReactNode;
  /** Receives a key that changes on replay so animations restart. */
  children: (state: { play: boolean; runKey: number }) => ReactNode;
  className?: string;
}

/**
 * Shared shell for every Econ Nexus diagram: navy glass card, uppercase
 * heading, colour legend, staged reveal on scroll and a replay control.
 */
const DiagramFrame = ({
  title,
  eyebrow,
  legend,
  note,
  children,
  className,
}: DiagramFrameProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPlay(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const replay = useCallback(() => {
    setPlay(false);
    setRunKey((k) => k + 1);
    requestAnimationFrame(() => requestAnimationFrame(() => setPlay(true)));
  }, []);

  return (
    <figure
      ref={ref}
      className={cn(
        'w-full rounded-2xl border border-primary/15 bg-background/40 p-4 sm:p-6 backdrop-blur-md',
        className,
      )}
    >
      <figcaption className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {eyebrow && (
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h4 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wide text-silver-bright break-words">
            {title}
          </h4>
        </div>
        <button
          type="button"
          onClick={replay}
          aria-label={`Replay animation for ${title}`}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Replay
        </button>
      </figcaption>

      {legend && legend.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
          {legend.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-[11px] text-muted-foreground">
              {item.kind === 'dot' ? (
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              ) : item.kind === 'area' ? (
                <span
                  className="inline-block h-3 w-4 rounded-sm"
                  style={{ backgroundColor: item.color, opacity: 0.35 }}
                />
              ) : (
                <span
                  className="inline-block h-0 w-5"
                  style={{
                    borderTop: `2px ${item.dashed ? 'dashed' : 'solid'} ${item.color}`,
                  }}
                />
              )}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="overflow-x-auto">{children({ play, runKey })}</div>

      {note && (
        <div className="mt-4 border-t border-primary/10 pt-3 text-xs leading-relaxed text-muted-foreground">
          {note}
        </div>
      )}
    </figure>
  );
};

export default DiagramFrame;
