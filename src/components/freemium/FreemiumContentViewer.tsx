import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronRight, Lightbulb, HelpCircle, Table2, GraduationCap } from 'lucide-react';
import { revisionNotes, modelAnswers, type FreemiumChapter, type ContentSection } from '@/data/freemiumPackContent';
import { a2MicroContent, type A2ContentSection, type A2Chapter } from '@/data/a2PremiumContent';
import { a2MacroContent } from '@/data/a2MacroPremiumContent';
import { A2DiagramRegistry } from './A2Diagrams';
import { A2MacroDiagramRegistry } from './A2MacroDiagrams';

const KeyTermCard = ({ term, definition }: { term: string; definition: string }) => (
  <div className="flex gap-3 py-2 px-3 rounded-lg bg-accent/5 border border-accent/10">
    <span className="font-semibold text-accent whitespace-nowrap text-sm">{term}</span>
    <span className="text-muted-foreground text-sm">{definition}</span>
  </div>
);

const MCQCard = ({ question, options, answer }: { question: string; options: string[]; answer?: string }) => {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const answerIdx = answer ? answer.charCodeAt(0) - 65 : -1;

  return (
    <div className="rounded-xl border border-border/30 bg-card/30 p-4 space-y-3">
      <p className="text-sm font-medium text-foreground">{question}</p>
      <div className="grid gap-2">
        {options.map((opt, i) => {
          const letter = String.fromCharCode(65 + i);
          const isCorrect = i === answerIdx;
          const isSelected = selected === i;
          let bg = 'bg-muted/30 hover:bg-muted/50';
          if (revealed && isCorrect) bg = 'bg-green-500/15 border-green-500/30';
          else if (revealed && isSelected && !isCorrect) bg = 'bg-destructive/15 border-destructive/30';

          return (
            <button
              key={i}
              onClick={() => { setSelected(i); setRevealed(true); }}
              className={`text-left text-sm px-3 py-2 rounded-lg border border-border/20 transition-colors ${bg}`}
            >
              <span className="font-semibold mr-2">{letter}.</span>{opt}
            </button>
          );
        })}
      </div>
      {revealed && answer && (
        <p className="text-xs text-muted-foreground">
          Correct answer: <span className="font-bold text-accent">{answer}</span>
        </p>
      )}
    </div>
  );
};

const SectionBlock = ({ section, isA2 = false, isMacro = false }: { section: ContentSection | A2ContentSection; isA2?: boolean; isMacro?: boolean }) => {
  const [open, setOpen] = useState(false);
  const diagramId = (isA2 || isMacro) ? (section as A2ContentSection).diagramId : undefined;
  const DiagramComponent = diagramId ? (isMacro ? A2MacroDiagramRegistry[diagramId] : A2DiagramRegistry[diagramId]) : undefined;

  return (
    <div className="border border-border/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/20 transition-colors"
      >
        {open ? <ChevronDown className="w-4 h-4 text-accent shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
        <span className="font-semibold text-foreground text-sm">{section.title}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              {section.content.map((p, i) => (
                <p key={i} className="text-sm text-foreground/85 leading-relaxed">{p}</p>
              ))}

              {/* Diagram */}
              {DiagramComponent && <DiagramComponent />}

              {section.examTip && (
                <div className="flex gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{section.examTip}</p>
                </div>
              )}

              {section.tables?.map((table, ti) => (
                <div key={ti} className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        {table.headers.map((h, hi) => (
                          <th key={hi} className="text-left px-3 py-2 bg-muted/20 border border-border/20 font-semibold text-foreground">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-3 py-2 border border-border/20 text-foreground/80">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

              {section.keyTerms && section.keyTerms.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
                    <BookOpen className="w-3.5 h-3.5" /> Key Terms
                  </div>
                  <div className="space-y-1.5">
                    {section.keyTerms.map((kt, i) => (
                      <KeyTermCard key={i} term={kt.term} definition={kt.definition} />
                    ))}
                  </div>
                </div>
              )}

              {section.mcqs && section.mcqs.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
                    <HelpCircle className="w-3.5 h-3.5" /> Practice Questions
                  </div>
                  {section.mcqs.map((q, i) => (
                    <MCQCard key={i} {...q} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChapterBlock = ({ chapter, isA2 = false }: { chapter: FreemiumChapter | A2Chapter; isA2?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border/30 bg-card/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-6 py-5 text-left hover:bg-muted/10 transition-colors"
      >
        {open ? <ChevronDown className="w-5 h-5 text-accent" /> : <ChevronRight className="w-5 h-5 text-muted-foreground" />}
        <div>
          <h3 className="font-display font-bold text-foreground">{chapter.title}</h3>
          {chapter.subtitle && <p className="text-xs text-muted-foreground mt-0.5">{chapter.subtitle}</p>}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-3">
              {chapter.sections.map((section) => (
                <SectionBlock key={section.id} section={section} isA2={isA2} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FreemiumContentViewer = () => {
  const [activeTab, setActiveTab] = useState<'revision' | 'answers' | 'a2micro'>('revision');

  const renderContent = () => {
    if (activeTab === 'a2micro') {
      return a2MicroContent.map((chapter) => (
        <ChapterBlock key={chapter.id} chapter={chapter} isA2 />
      ));
    }
    const chapters = activeTab === 'revision' ? revisionNotes : modelAnswers;
    return chapters.map((chapter) => (
      <ChapterBlock key={chapter.id} chapter={chapter} />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveTab('revision')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
            activeTab === 'revision'
              ? 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,242,255,0.1)]'
              : 'border-border/30 bg-card/30 text-muted-foreground hover:border-accent/30'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Revision Notes
        </button>
        <button
          onClick={() => setActiveTab('answers')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
            activeTab === 'answers'
              ? 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,242,255,0.1)]'
              : 'border-border/30 bg-card/30 text-muted-foreground hover:border-accent/30'
          }`}
        >
          <Table2 className="w-4 h-4" />
          Model Answers
        </button>
        <button
          onClick={() => setActiveTab('a2micro')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
            activeTab === 'a2micro'
              ? 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,242,255,0.1)]'
              : 'border-border/30 bg-card/30 text-muted-foreground hover:border-accent/30'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          A2 Micro Study Guide
        </button>
      </div>

      {/* Chapters */}
      <div className="space-y-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default FreemiumContentViewer;
