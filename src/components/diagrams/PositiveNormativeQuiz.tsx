import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCw, Sparkles, Brain } from 'lucide-react';

interface Statement {
  id: number;
  text: string;
  type: 'positive' | 'normative';
  explanation: string;
}

const statements: Statement[] = [
  {
    id: 1,
    text: "An increase in the interest rate will lead to a decrease in investment.",
    type: 'positive',
    explanation: "This can be tested using economic data and empirical evidence. It describes a causal relationship based on facts."
  },
  {
    id: 2,
    text: "The government should increase the minimum wage to reduce poverty.",
    type: 'normative',
    explanation: "Contains the value judgment 'should' and involves an ethical stance on equity and social policy."
  },
  {
    id: 3,
    text: "Unemployment in the UK is currently at 4.2%.",
    type: 'positive',
    explanation: "This is a factual claim that can be verified by checking official statistics."
  },
  {
    id: 4,
    text: "The rich ought to pay higher taxes to fund public services.",
    type: 'normative',
    explanation: "Contains 'ought to' - a value judgment about what is fair or desirable in society."
  },
  {
    id: 5,
    text: "A depreciation of the exchange rate will increase export competitiveness.",
    type: 'positive',
    explanation: "Describes an economic relationship that can be tested through data analysis."
  },
  {
    id: 6,
    text: "Healthcare should be free for all citizens.",
    type: 'normative',
    explanation: "Expresses a view about what healthcare policy 'should' be - a matter of values, not facts."
  },
  {
    id: 7,
    text: "Inflation erodes the purchasing power of money.",
    type: 'positive',
    explanation: "A factual statement about the economic effects of inflation that can be empirically verified."
  },
  {
    id: 8,
    text: "Governments must prioritize environmental protection over economic growth.",
    type: 'normative',
    explanation: "The word 'must' indicates a value judgment about policy priorities."
  },
  {
    id: 9,
    text: "Higher tariffs on imports reduce the quantity of goods imported.",
    type: 'positive',
    explanation: "A testable economic prediction based on supply and demand theory."
  },
  {
    id: 10,
    text: "It is unfair that CEOs earn 300 times more than average workers.",
    type: 'normative',
    explanation: "Contains 'unfair' - a subjective value judgment about income distribution."
  }
];

const PositiveNormativeQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [answered, setAnswered] = useState<'correct' | 'incorrect' | null>(null);
  const [shuffledStatements, setShuffledStatements] = useState(() => 
    [...statements].sort(() => Math.random() - 0.5).slice(0, 6)
  );

  const currentStatement = shuffledStatements[currentIndex];
  const isComplete = currentIndex >= shuffledStatements.length;

  const handleAnswer = useCallback((answer: 'positive' | 'normative') => {
    if (answered) return;
    
    const isCorrect = answer === currentStatement.type;
    setAnswered(isCorrect ? 'correct' : 'incorrect');
    setScore(prev => ({
      ...prev,
      [isCorrect ? 'correct' : 'incorrect']: prev[isCorrect ? 'correct' : 'incorrect'] + 1
    }));
  }, [answered, currentStatement]);

  const handleNext = useCallback(() => {
    setAnswered(null);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const resetQuiz = useCallback(() => {
    setShuffledStatements([...statements].sort(() => Math.random() - 0.5).slice(0, 6));
    setCurrentIndex(0);
    setScore({ correct: 0, incorrect: 0 });
    setAnswered(null);
  }, []);

  if (isComplete) {
    const percentage = Math.round((score.correct / shuffledStatements.length) * 100);
    return (
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="mb-6">
            <Sparkles className="w-16 h-16 mx-auto text-amber-400 mb-4" />
            <h4 className="text-2xl font-bold text-silver-bright mb-2">Quiz Complete!</h4>
            <p className="text-muted-foreground">
              You scored <span className="text-cyan-400 font-bold">{score.correct}</span> out of{' '}
              <span className="text-silver-bright font-bold">{shuffledStatements.length}</span>
            </p>
          </div>
          
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke={percentage >= 80 ? '#22d3ee' : percentage >= 50 ? '#d4af37' : '#ef4444'}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ strokeDasharray: '0 352' }}
                animate={{ strokeDasharray: `${(percentage / 100) * 352} 352` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-silver-bright">{percentage}%</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {percentage >= 80 
              ? "Excellent! You have a strong grasp of positive and normative distinctions."
              : percentage >= 50 
              ? "Good effort! Review the explanations to strengthen your understanding."
              : "Keep practicing! Focus on identifying value judgments vs. factual claims."}
          </p>

          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground">
            Question {currentIndex + 1} of {shuffledStatements.length}
          </span>
          <div className="flex gap-3 text-xs">
            <span className="text-cyan-400">✓ {score.correct}</span>
            <span className="text-red-400">✗ {score.incorrect}</span>
          </div>
        </div>
        <div className="h-1.5 bg-charcoal-deep rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / shuffledStatements.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStatement.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          <div className="p-6 rounded-xl bg-charcoal-deep/50 border border-silver/10">
            <Brain className="w-6 h-6 text-purple-400 mb-3" />
            <p className="text-lg text-silver-bright leading-relaxed">
              "{currentStatement.text}"
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Answer Buttons */}
      {!answered && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer('positive')}
            className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all group"
          >
            <div className="text-center">
              <span className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                POSITIVE
              </span>
              <p className="text-xs text-muted-foreground mt-1">Based on facts</p>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer('normative')}
            className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all group"
          >
            <div className="text-center">
              <span className="text-lg font-bold text-amber-400 group-hover:text-amber-300">
                NORMATIVE
              </span>
              <p className="text-xs text-muted-foreground mt-1">Value judgment</p>
            </div>
          </motion.button>
        </div>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`p-4 rounded-xl border mb-4 ${
              answered === 'correct'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div className="flex items-start gap-3">
              {answered === 'correct' ? (
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-semibold ${answered === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                  {answered === 'correct' ? 'Correct!' : `Incorrect - This is a ${currentStatement.type} statement`}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentStatement.explanation}
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="mt-4 w-full py-2 rounded-lg bg-silver/10 hover:bg-silver/20 text-silver-bright font-medium transition-all"
            >
              {currentIndex < shuffledStatements.length - 1 ? 'Next Question →' : 'See Results'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PositiveNormativeQuiz;
