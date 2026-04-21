import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Sigma } from 'lucide-react';
import { cn } from '@/lib/utils';
import PhysicsExaminerTrap from './PhysicsExaminerTrap';

interface PhysicsNoteCardProps {
  /** Topic title, e.g. "Newton's Second Law" */
  title: string;
  /** Optional subtitle / syllabus reference */
  syllabusRef?: string;
  /** Section 1 — Core Concept & Definition. Strict, exam-style wording. */
  concept: ReactNode;
  /** Section 2 — Mathematical Derivation, ideally containing <MathBlock /> steps. */
  derivation: ReactNode;
  /** Section 3 — Examiner's Trap (forced, structured). */
  examinerTrap: {
    trap: string;
    correction: string;
    markScheme?: string;
  };
  /** Optional embedded interactive diagram. */
  diagram?: ReactNode;
  className?: string;
}

/**
 * Reusable "Living Note" card for the Physics Hub.
 * Forces a 3-section academic structure for every topic so depth is guaranteed.
 */
const PhysicsNoteCard = ({
  title,
  syllabusRef,
  concept,
  derivation,
  examinerTrap,
  diagram,
  className,
}: PhysicsNoteCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.45 }}
    className={cn(
      'rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-md',
      'p-5 md:p-7 shadow-[0_8px_32px_rgba(0,30,60,0.35)]',
      className
    )}
  >
    {/* Header */}
    <header className="mb-5 pb-4 border-b border-primary/10">
      {syllabusRef && (
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-mono text-primary/80 mb-2">
          {syllabusRef}
        </span>
      )}
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
        {title}
      </h2>
    </header>

    {/* Section 1 — Concept */}
    <section className="mb-6">
      <SectionHeading icon={<BookOpenCheck className="w-4 h-4" />} label="Core Concept & Definition" />
      <div className="text-[15px] md:text-base leading-relaxed text-foreground/90 space-y-3">
        {concept}
      </div>
    </section>

    {/* Optional interactive diagram */}
    {diagram && (
      <section className="mb-6 rounded-xl border border-primary/15 bg-background/40 p-3 md:p-4">
        {diagram}
      </section>
    )}

    {/* Section 2 — Derivation */}
    <section className="mb-6">
      <SectionHeading icon={<Sigma className="w-4 h-4" />} label="Mathematical Derivation" />
      <div className="space-y-2 text-[15px] leading-relaxed text-foreground/90">
        {derivation}
      </div>
    </section>

    {/* Section 3 — Examiner's Trap */}
    <section>
      <PhysicsExaminerTrap {...examinerTrap} />
    </section>
  </motion.article>
);

const SectionHeading = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="flex items-center justify-center w-7 h-7 rounded-md bg-primary/15 text-primary">
      {icon}
    </span>
    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary font-mono">
      {label}
    </h3>
    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
  </div>
);

export default PhysicsNoteCard;
