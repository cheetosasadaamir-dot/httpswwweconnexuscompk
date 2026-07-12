import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Table2, ArrowLeft } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import DataTableInteractive from "./DataTableInteractive";
import QuestionCard from "./QuestionCard";

interface CaseStudyViewerProps {
  caseStudy: CaseStudy;
  onBack: () => void;
}

const CaseStudyViewer = ({ caseStudy, onBack }: CaseStudyViewerProps) => {
  const [highlightedParagraph, setHighlightedParagraph] = useState<number | null>(null);
  const [highlightedTable, setHighlightedTable] = useState<string | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<string>>(new Set());
  
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const tableRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleHighlight = (paragraph?: number, table?: string) => {
    if (paragraph !== undefined) {
      setHighlightedParagraph(paragraph);
      setHighlightedTable(null);
      paragraphRefs.current[paragraph]?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (table) {
      setHighlightedTable(table);
      setHighlightedParagraph(null);
      const tableIndex = caseStudy.tables.findIndex(t => t.title === table);
      if (tableIndex >= 0) {
        tableRefs.current[tableIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleRevealAnswer = (questionId: string) => {
    setRevealedAnswers(prev => new Set([...prev, questionId]));
  };

  // Clear highlight after delay
  useEffect(() => {
    if (highlightedParagraph !== null || highlightedTable) {
      const timer = setTimeout(() => {
        setHighlightedParagraph(null);
        setHighlightedTable(null);
      }, 3000);
      return => clearTimeout(timer);
    }
  }, [highlightedParagraph, highlightedTable]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-card border-b border-border/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <span className="font-medium">{caseStudy.paperCode}</span>
                <span>•</span>
                <span>{caseStudy.session} {caseStudy.year}</span>
              </div>
              <h1 className="font-['Playfair_Display'] text-xl font-bold text-foreground line-clamp-1">
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Pane Layout */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Pane: Case Study Text & Data */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="font-['Playfair_Display'] text-xl font-semibold">Case Study Material</h2>
            </div>

            {/* Case Study Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6"
            >
              <div className="space-y-4">
                {caseStudy.paragraphs.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    ref={el => paragraphRefs.current[idx] = el}
                    animate={{
                      backgroundColor: highlightedParagraph === idx 
                        ? "hsla(185, 100%, 50%, 0.15)" 
                        : "transparent",
                      boxShadow: highlightedParagraph === idx
                        ? "0 0 20px hsla(185, 100%, 50%, 0.3)"
                        : "none"
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-foreground/90 leading-relaxed p-3 -m-3 rounded-lg transition-all"
                  >
                    <span className="text-xs text-muted-foreground mr-2">[{idx + 1}]</span>
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Data Tables */}
            {caseStudy.tables.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Table2 className="w-5 h-5 text-cambridge-cyan" />
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold">Data Tables</h3>
                </div>
                
                {caseStudy.tables.map((table, idx) => (
                  <div 
                    key={idx}
                    ref={el => tableRefs.current[idx] = el}
                  >
                    <DataTableInteractive
                      table={table}
                      isHighlighted={highlightedTable === table.title}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Pane: Questions */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['Playfair_Display'] text-xl font-semibold">Questions</h2>
              <span className="text-sm text-muted-foreground">
                {revealedAnswers.size}/{caseStudy.questions.length} revealed
              </span>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {caseStudy.questions.map((question, idx) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    index={idx}
                    onHighlight={handleHighlight}
                    isAnswerRevealed={revealedAnswers.has(question.id)}
                    onRevealAnswer={() => handleRevealAnswer(question.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyViewer;
