import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Target, Award, Filter } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allExamPapers, ExamPaper, MCQQuestion } from '@/data/examPapers';
import { cn } from '@/lib/utils';

const ExamIntelligence = () => {
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<MCQQuestion | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [levelFilter, setLevelFilter] = useState<'all' | 'AS' | 'A2'>('all');
  const [seriesFilter, setSeriesFilter] = useState<'all' | 'may' | 'oct'>('all');

  const paperIcons = {
    '9708/11': BookOpen,
    '9708/12': BookOpen,
    '9708/31': Brain,
    '9708/32': Brain,
  };

  const filteredPapers = useMemo(() => {
    return allExamPapers.filter(paper => {
      const levelMatch = levelFilter === 'all' || paper.level === levelFilter;
      const seriesMatch = seriesFilter === 'all' || 
        (seriesFilter === 'may' && paper.session.includes('May')) ||
        (seriesFilter === 'oct' && paper.session.includes('October'));
      return levelMatch && seriesMatch;
    });
  }, [levelFilter, seriesFilter]);

  const handleQuestionSelect = (question: MCQQuestion) => {
    setSelectedQuestion(question);
    setShowAnswer(false);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Badge className="mb-4 bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
            2024-2025 Paper Repository
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient">Exam Intelligence</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master Cambridge A-Level Economics MCQ papers with sophisticated Nexus Reasoning™ for every question.
          </p>
        </motion.div>

        {!selectedPaper ? (
          <>
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Tabs value={levelFilter} onValueChange={(v) => setLevelFilter(v as typeof levelFilter)} className="w-auto">
                <TabsList className="bg-background/50 border border-border">
                  <TabsTrigger value="all">All Levels</TabsTrigger>
                  <TabsTrigger value="AS">AS Level</TabsTrigger>
                  <TabsTrigger value="A2">A2 Level</TabsTrigger>
                </TabsList>
              </Tabs>
              <Tabs value={seriesFilter} onValueChange={(v) => setSeriesFilter(v as typeof seriesFilter)} className="w-auto">
                <TabsList className="bg-background/50 border border-border">
                  <TabsTrigger value="all">All Series</TabsTrigger>
                  <TabsTrigger value="may">May/June</TabsTrigger>
                  <TabsTrigger value="oct">Oct/Nov</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Paper Selection Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredPapers.map((paper, index) => {
                const Icon = paperIcons[paper.code as keyof typeof paperIcons] || BookOpen;
                return (
                  <motion.div
                    key={`${paper.code}-${paper.session}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="cursor-pointer group bg-[#121212] border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]"
                    onClick={() => setSelectedPaper(paper)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                          <Icon className="w-8 h-8 text-neon-cyan" />
                        </div>
                        <Badge variant="outline" className={cn(
                          "text-xs",
                          paper.level === 'AS' ? "border-emerald-500 text-emerald-400" : "border-amber-500 text-amber-400"
                        )}>
                          {paper.level} Level
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors mt-4">
                        {paper.code}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-silver mb-4">{paper.title}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {paper.questions.length} Questions
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {paper.totalMarks} Marks
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            </div>
          </>
        ) : !selectedQuestion ? (
          /* Question List */
          <div>
            <button
              onClick={() => setSelectedPaper(null)}
              className="mb-6 text-neon-cyan hover:text-neon-cyan/80 flex items-center gap-2"
            >
              ← Back to Papers
            </button>
            <h2 className="text-2xl font-bold mb-6">{selectedPaper.code} - {selectedPaper.title}</h2>
            <div className="grid gap-3">
              {selectedPaper.questions.map((q) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: q.id * 0.02 }}
                >
                  <Card
                    className="cursor-pointer bg-[#121212]/80 border-silver/20 hover:border-neon-cyan/50 transition-all"
                    onClick={() => handleQuestionSelect(q)}
                  >
                    <CardContent className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center font-bold text-sm">
                          {q.id}
                        </span>
                        <span className="text-silver line-clamp-1">{q.question}</span>
                      </div>
                      <Badge variant="outline" className="text-xs shrink-0">
                        {q.examinerKey.ao}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Question Viewer */
          <div>
            <button
              onClick={() => setSelectedQuestion(null)}
              className="mb-6 text-neon-cyan hover:text-neon-cyan/80 flex items-center gap-2"
            >
              ← Back to Questions
            </button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* The Question */}
              <Card className="bg-[#121212] border-silver/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center font-bold">
                      {selectedQuestion.id}
                    </span>
                    <Badge variant="outline">{selectedPaper.code}</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {selectedQuestion.examinerKey.ao}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white leading-relaxed">
                    {selectedQuestion.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedQuestion.options.map((opt) => (
                    <div
                      key={opt.key}
                      className={cn(
                        "p-4 rounded-lg border transition-all",
                        showAnswer && opt.key === selectedQuestion.correctAnswer
                          ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                          : "bg-muted/10 border-silver/20 text-silver"
                      )}
                    >
                      <span className="font-bold mr-3">{opt.key}</span>
                      {opt.text}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Reveal Button */}
              {!showAnswer && (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-primary text-navy-deep font-bold hover:opacity-90 transition-opacity"
                >
                  Reveal Answer & Nexus Reasoning
                </button>
              )}

              {/* The Answer & Reasoning */}
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <Card className="bg-neon-cyan/5 border-neon-cyan/30">
                    <CardHeader>
                      <CardTitle className="text-neon-cyan flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Correct Answer: {selectedQuestion.correctAnswer}
                      </CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="bg-[#121212] border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-primary">Nexus Reasoning™</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-silver leading-relaxed whitespace-pre-line">
                        {selectedQuestion.nexusReasoning}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-amber-500/5 border-amber-500/30">
                    <CardHeader>
                      <CardTitle className="text-amber-400 text-sm flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Examiner's Key
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-silver">
                        <strong>Assessment Objective:</strong> {selectedQuestion.examinerKey.ao}<br />
                        <strong>Topic:</strong> {selectedQuestion.examinerKey.topic}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ExamIntelligence;
