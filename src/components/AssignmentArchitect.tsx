import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Loader2, Sparkles, Download, Copy, Check, FileType, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from '@/components/LoginModal';
import { exportAsPdf, exportAsDocx } from '@/lib/assignment-export';

const SUBJECTS = [
  { value: 'economics', label: 'Economics' },
  { value: 'business', label: 'Business' },
  { value: 'law', label: 'Law' },
  { value: 'psychology', label: 'Psychology' },
  { value: 'accounting', label: 'Accounting' },
  { value: 'sociology', label: 'Sociology' },
  { value: 'research', label: 'Research Methodology' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'physics', label: 'Physics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'biology', label: 'Biology' },
];

const ASSIGNMENT_TYPES = [
  { value: 'essay', label: 'Academic Essay' },
  { value: 'report', label: 'Structured Report' },
  { value: 'research_paper', label: 'Research Paper (IMRaD)' },
  { value: 'case_study', label: 'Case Study Analysis' },
  { value: 'problem_set', label: 'Problem Set / Worked Solutions' },
  { value: 'lab_report', label: 'Lab Report' },
  { value: 'presentation', label: 'Presentation Outline' },
  { value: 'practice_questions', label: 'Practice Questions Pack' },
  { value: 'quiz', label: 'Quiz (MCQ + T/F + Short)' },
  { value: 'exam_paper', label: 'Full Mock Exam Paper' },
  { value: 'mcq_bank', label: 'MCQ Bank (40 Qs)' },
];

const LEVELS = [
  { value: 'igcse', label: 'IGCSE / O-Level (Cambridge)' },
  { value: 'as-level', label: 'AS-Level (Cambridge/Edexcel)' },
  { value: 'a-level', label: 'A-Level / A2' },
  { value: 'ib', label: 'IB Diploma' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'fbise_ssc', label: '🇵🇰 FBISE Matric / SSC (Class 9–10)' },
  { value: 'fbise_hssc', label: '🇵🇰 FBISE Intermediate / HSSC (Class 11–12)' },
  { value: 'bise_ssc', label: '🇵🇰 BISE Matric / SSC (Provincial)' },
  { value: 'bise_hssc', label: '🇵🇰 BISE Intermediate / HSSC (Provincial)' },
  { value: 'aku_eb_ssc', label: '🇵🇰 AKU-EB SSC (Class 9–10)' },
  { value: 'aku_eb_hssc', label: '🇵🇰 AKU-EB HSSC (Class 11–12)' },
];

const DIFFICULTIES = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'difficult', label: 'Difficult' },
  { value: 'mixed', label: 'Mixed (E / M / H)' },
];

const AssignmentArchitect = () => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [subject, setSubject] = useState('economics');
  const [assignmentType, setAssignmentType] = useState('essay');
  const [level, setLevel] = useState('a-level');
  const [difficulty, setDifficulty] = useState('medium');
  const [topic, setTopic] = useState('');
  const [wordCount, setWordCount] = useState('1500');
  const [requirements, setRequirements] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!user) { setShowLogin(true); return; }
    if (!topic.trim()) { toast.error('Please enter an assignment topic'); return; }

    setLoading(true);
    setOutput('');

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/assignment-generator`;
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          subject,
          topic: topic.trim(),
          assignment_type: assignmentType,
          level,
          difficulty,
          word_count: wordCount,
          additional_requirements: requirements.trim() || undefined,
        }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: 'Generation failed' }));
        toast.error(err.error || 'Generation failed');
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let done = false;
      let acc = '';

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const json = line.slice(6).trim();
          if (json === '[DONE]') { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) {
              acc += c;
              setOutput(acc);
            }
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }
      toast.success('Assignment ready');
    } catch (e) {
      console.error(e);
      toast.error('Failed to generate assignment');
    } finally {
      setLoading(false);
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadOutput = () => {
    const blob = new Blob([output], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject}-${assignmentType}-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const baseName = `${subject}-${assignmentType}-${Date.now()}`;
  const exportPdf = () => { exportAsPdf(output, baseName); toast.success('PDF downloaded'); };
  const exportDocx = async () => { await exportAsDocx(output, baseName); toast.success('Word file downloaded'); };

  return (
    <section id="assignment-architect" className="section-mobile scroll-mt-20">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-[11px] md:text-xs uppercase tracking-[0.25em] text-secondary mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Assignment Architect
          </span>
          <h2
            className="text-fluid-4xl lg:text-fluid-5xl mb-3 md:mb-4 text-secondary"
            style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' as const }}
          >
            AI Assignment Architect
          </h2>
          <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Distinction-grade assignments, quizzes and mock exams — engineered to your exact subject, curriculum board and difficulty.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-5 md:p-8 rounded-2xl border border-secondary/15 shadow-[0_8px_40px_-12px_hsl(var(--secondary)/0.25)]"
        >
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Subject</label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {SUBJECTS.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Assignment Type</label>
              <Select value={assignmentType} onValueChange={setAssignmentType}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {ASSIGNMENT_TYPES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Curriculum Level</label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {LEVELS.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Topic / Question</label>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder='e.g., "Evaluate the effectiveness of monetary policy in controlling inflation in emerging economies."'
              className="text-base"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Difficulty</label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {DIFFICULTIES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Word Count</label>
              <Input
                type="number"
                min={500}
                max={5000}
                step={250}
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Additional Requirements (optional)</label>
              <Input
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="e.g., focus on UK case law, Harvard referencing"
              />
            </div>
          </div>

          <Button
            onClick={generate}
            disabled={loading}
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl uppercase tracking-[0.2em] text-xs md:text-sm shadow-[0_8px_30px_-8px_hsl(var(--secondary)/0.55)] transition-all"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Architecting your assignment…</>
            ) : (
              <><FileText className="w-4 h-4 mr-2" /> Generate Assignment</>
            )}
          </Button>

          {output && (
            <div className="mt-7">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-secondary/15">
                <h3
                  className="text-[11px] uppercase tracking-[0.28em] text-secondary"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Your Assignment
                </h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={copyOutput} className="rounded-lg border-secondary/30 hover:bg-secondary/10">
                    {copied ? <Check className="w-3.5 h-3.5 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                  <Button size="sm" variant="outline" onClick={downloadOutput} className="rounded-lg border-secondary/30 hover:bg-secondary/10">
                    <Download className="w-3.5 h-3.5 mr-1.5" /> Download .md
                  </Button>
                </div>
              </div>
              <div
                className="prose prose-invert prose-sm md:prose-base max-w-none p-5 md:p-7 rounded-xl bg-background/50 border border-secondary/10 backdrop-blur-md max-h-[640px] overflow-y-auto prose-headings:font-[Bodoni_Moda] prose-headings:text-secondary prose-headings:tracking-tight prose-strong:text-secondary/90"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {output}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {showLogin && <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />}
    </section>
  );
};

export default AssignmentArchitect;
