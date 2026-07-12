import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  TrendingUp, 
  Scale,
  Lightbulb,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";
import { Question, getQuestionSkillLevel, getDifficulty } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuestionCardProps {
  question: Question;
  index: number;
  onHighlight: (paragraph?: number, table?: string) => void;
  isAnswerRevealed: boolean;
  onRevealAnswer: () => void;
}

const QuestionCard = ({ 
  question, 
  index, 
  onHighlight,
  isAnswerRevealed,
  onRevealAnswer
}: QuestionCardProps) => {
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const skillLevel = getQuestionSkillLevel(question.marks);
  const difficulty = getDifficulty(question.marks);

  const difficultyColors = {
    Easy: "bg-green-500/20 text-green-400 border-green-500/30",
    Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Hard: "bg-red-500/20 text-red-400 border-red-500/30"
  };

  const handleCardClick = () => {
    onHighlight(question.relevantParagraph, question.relevantTable);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card p-5 transition-all duration-300 ${
        isAnswerRevealed ? "ring-1 ring-cambridge-cyan/50" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="font-['Playfair_Display'] text-xl font-bold text-primary">
            {question.part}
          </span>
          <Badge variant="outline" className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
            {question.marks} mark{question.marks !== 1 ? "s" : ""}
          </Badge>
        </div>
        {question.requiresDiagram && (
          <div className="flex items-center gap-1 text-xs text-cambridge-magenta">
            <ImageIcon className="w-3 h-3" />
            <span>Diagram</span>
          </div>
        )}
      </div>

      {/* Question Text */}
      <p 
        className="text-foreground mb-4 cursor-pointer hover:text-primary transition-colors"
        onClick={handleCardClick}
      >
        {question.text}
      </p>

      {/* Skill Level Indicator */}
      <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <BookOpen className="w-3 h-3" />
          {skillLevel}
        </span>
        {(question.relevantParagraph !== undefined || question.relevantTable) && (
          <button
            onClick={handleCardClick}
            className="text-cambridge-cyan hover:underline"
          >
            → Show evidence
          </button>
        )}
      </div>

      {/* Strategy Blueprint Toggle */}
      <div className="border-t border-border/50 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowBlueprint(!showBlueprint)}
          className="w-full justify-between text-muted-foreground hover:text-foreground"
        >
          <span className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Answer Blueprint
          </span>
          {showBlueprint ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>

        <AnimatePresence>
          {showBlueprint && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                {question.answerBlueprint.knowledge.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-blue-500/20">
                      <BookOpen className="w-3 h-3 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-400 mb-1">Knowledge</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {question.answerBlueprint.knowledge.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {question.answerBlueprint.analysis.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-green-500/20">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-400 mb-1">Analysis</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {question.answerBlueprint.analysis.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {question.answerBlueprint.evaluation.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-purple-500/20">
                      <Scale className="w-3 h-3 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-purple-400 mb-1">Evaluation</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {question.answerBlueprint.evaluation.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {question.formula && (
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/50 mt-3">
                    <p className="text-xs text-muted-foreground mb-1">Formula:</p>
                    <code className="text-sm text-cambridge-cyan">{question.formula}</code>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Model Answer Toggle */}
      <div className="border-t border-border/50 pt-4 mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setShowAnswer(!showAnswer);
            if (!isAnswerRevealed) onRevealAnswer();
          }}
          className="w-full justify-between text-muted-foreground hover:text-foreground"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Model Answer
          </span>
          {showAnswer ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>

        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-cambridge-cyan/5 border border-primary/20 ${
                  isAnswerRevealed ? "animate-glow" : ""
                }`}
              >
                <div className="prose prose-sm prose-invert max-w-none">
                  {question.modelAnswer.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-sm text-foreground/90 mb-3 last:mb-0 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
