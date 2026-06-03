import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Lightbulb, Calculator, ChevronDown, ExternalLink } from 'lucide-react';
import { glossaryTerms, getAllLetters, filterTermsByLetter, GlossaryTerm } from '@/data/glossaryTerms';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Mini diagram components mapping
const DiagramThumbnails: Record<string, React.FC<{ className?: string }>> = {
  SRASLRASDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 45 Q40 30 85 15" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <line x1="60" y1="10" x2="60" y2="50" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="3" />
      <text x="85" y="12" fontSize="6" fill="hsl(var(--primary))">SRAS</text>
      <text x="62" y="15" fontSize="6" fill="hsl(var(--secondary))">LRAS</text>
    </svg>
  ),
  ComparativeAdvantageDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="15" x2="85" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="25" x2="70" y2="45" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      <text x="75" y="40" fontSize="5" fill="hsl(var(--primary))">A</text>
      <text x="60" y="42" fontSize="5" fill="hsl(var(--secondary))">B</text>
    </svg>
  ),
  ConsumerProducerSurplusDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="15" x2="85" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="45" x2="85" y2="15" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      <polygon points="50,30 15,45 15,30" fill="hsl(var(--tutor-cyan) / 0.3)" stroke="none" />
      <polygon points="50,30 15,15 15,30" fill="hsl(var(--tutor-gold) / 0.3)" stroke="none" />
      <line x1="10" y1="30" x2="50" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" strokeDasharray="2" />
    </svg>
  ),
  CostPushInflationDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 45 Q40 30 70 15" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" strokeDasharray="2" />
      <path d="M25 45 Q50 30 80 15" stroke="hsl(var(--destructive))" strokeWidth="1.5" fill="none" />
      <path d="M85 45 L20 15" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <text x="82" y="12" fontSize="5" fill="hsl(var(--destructive))">SRAS₂</text>
    </svg>
  ),
  JCurveDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="30" x2="90" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 30 Q25 40 40 42 Q60 40 85 15" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <circle cx="15" cy="30" r="2" fill="hsl(var(--tutor-gold))" />
    </svg>
  ),
  ExternalitiesDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="45" x2="85" y2="15" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="35" x2="75" y2="15" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      <text x="85" y="18" fontSize="5" fill="hsl(var(--primary))">MPC</text>
      <text x="70" y="12" fontSize="5" fill="hsl(var(--secondary))">MSC</text>
    </svg>
  ),
  GiniLorenzDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="90" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="2" />
      <path d="M10 50 Q50 48 90 10" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  DemandSupplyEquilibriumDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="15" x2="85" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="45" x2="85" y2="15" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      <circle cx="50" cy="30" r="3" fill="hsl(var(--tutor-gold))" />
    </svg>
  ),
  ExchangeRateDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="15" x2="85" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="45" x2="85" y2="15" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      <text x="5" y="30" fontSize="5" fill="hsl(var(--muted-foreground))">e</text>
      <text x="50" y="58" fontSize="5" fill="hsl(var(--muted-foreground))">Q£</text>
    </svg>
  ),
  FiscalPolicyADDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M85 45 L20 15" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" strokeDasharray="2" />
      <path d="M90 40 L30 12" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <text x="85" y="38" fontSize="5" fill="hsl(var(--primary))">AD₂</text>
    </svg>
  ),
  EconomiesOfScaleDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 15 Q50 45 85 35" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <text x="80" y="32" fontSize="5" fill="hsl(var(--primary))">LRAC</text>
    </svg>
  ),
  LafferCurveDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 50 Q50 10 85 50" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="15" r="2" fill="hsl(var(--tutor-gold))" />
    </svg>
  ),
  MECCurveDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 15 Q50 25 85 45" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <line x1="10" y1="30" x2="90" y2="30" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="2" />
      <text x="85" y="48" fontSize="5" fill="hsl(var(--primary))">MEC</text>
      <text x="85" y="28" fontSize="5" fill="hsl(var(--secondary))">r</text>
    </svg>
  ),
  MonopolyDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="15" x2="85" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="45" x2="85" y2="15" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      <path d="M15 50 Q40 30 85 40" stroke="hsl(var(--destructive))" strokeWidth="1" fill="none" />
      <text x="85" y="42" fontSize="5" fill="hsl(var(--destructive))">MR</text>
    </svg>
  ),
  MultiplierDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="90" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" strokeDasharray="2" />
      <line x1="15" y1="45" x2="85" y2="25" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="40" x2="85" y2="20" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
    </svg>
  ),
  PhillipsCurveDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 15 Q40 25 85 45" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <line x1="50" y1="10" x2="50" y2="50" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="2" />
      <text x="52" y="15" fontSize="5" fill="hsl(var(--secondary))">LRPC</text>
    </svg>
  ),
  KinkedDemandDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 15 L50 30 L85 40" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="30" r="2" fill="hsl(var(--tutor-gold))" />
    </svg>
  ),
  OpportunityCostPPCDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 15 Q50 18 85 50" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  PPCConceptDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 15 Q50 18 85 50" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="35" r="2" fill="hsl(var(--tutor-gold))" />
    </svg>
  ),
  PriceElasticityDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="15" x2="35" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="55" y1="15" x2="85" y2="45" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
    </svg>
  ),
  PESDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="45" x2="35" y2="15" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="55" y1="45" x2="85" y2="15" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
    </svg>
  ),
  ParadoxOfThriftDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="45" x2="85" y2="15" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="35" x2="85" y2="20" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
    </svg>
  ),
  PerfectCompetitionDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="25" x2="90" y2="25" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <path d="M30 45 Q50 15 70 45" stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none" />
      <text x="85" y="22" fontSize="5" fill="hsl(var(--primary))">D=MR</text>
    </svg>
  ),
  QuantityTheoryDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <rect x="20" y="15" width="25" height="35" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1" />
      <rect x="55" y="15" width="25" height="35" fill="hsl(var(--secondary) / 0.3)" stroke="hsl(var(--secondary))" strokeWidth="1" />
      <text x="32" y="35" fontSize="8" fill="hsl(var(--foreground))" textAnchor="middle">MV</text>
      <text x="67" y="35" fontSize="8" fill="hsl(var(--foreground))" textAnchor="middle">PT</text>
      <text x="50" y="35" fontSize="8" fill="hsl(var(--foreground))" textAnchor="middle">=</text>
    </svg>
  ),
  SupplySidePolicyDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="50" y1="10" x2="50" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="2" />
      <line x1="65" y1="10" x2="65" y2="50" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <text x="52" y="15" fontSize="5" fill="hsl(var(--muted-foreground))">LRAS₁</text>
      <text x="67" y="15" fontSize="5" fill="hsl(var(--primary))">LRAS₂</text>
    </svg>
  ),
  TermsOfTradeDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="15" y1="40" x2="85" y2="25" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="15" y1="35" x2="85" y2="35" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="2" />
    </svg>
  ),
  UtilityDiagram: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <line x1="10" y1="50" x2="10" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M15 45 Q40 15 85 20" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <text x="85" y="17" fontSize="5" fill="hsl(var(--primary))">TU</text>
    </svg>
  ),
};

const GlossaryTermCard = ({ term }: { term: GlossaryTerm }) => {
  const [showDiagram, setShowDiagram] = useState(false);
  const DiagramComponent = term.hasDiagram ? DiagramThumbnails[term.hasDiagram] : null;

  return (
    <AccordionItem 
      value={term.term} 
      className="glossary-term-item border-b border-tutor-gold/10 last:border-b-0"
    >
      <AccordionTrigger className="py-2 px-3 hover:no-underline group">
        <div className="flex items-center gap-3 text-left w-full">
          <span className="font-serif text-base text-silver-bright group-hover:text-tutor-gold transition-colors">
            {term.term}
          </span>
          <Badge 
            variant="outline" 
            className={cn(
              "text-[10px] px-1.5 py-0 h-4 border-tutor-gold/30",
              term.level === 'AS' ? 'text-tutor-cyan' : term.level === 'A2' ? 'text-tutor-gold' : 'text-silver'
            )}
          >
            {term.level}
          </Badge>
          {term.formula && (
            <Calculator className="w-3 h-3 text-tutor-cyan opacity-60" />
          )}
          {term.hasDiagram && (
            <div className="w-3 h-3 text-tutor-gold opacity-60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M7 12l4-4 4 4 5-5" />
              </svg>
            </div>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-3 pb-3 pt-0">
        <div className="space-y-2">
          {/* Definition */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {term.definition}
          </p>

          {/* Formula */}
          {term.formula && (
            <div className="flex items-center gap-2 p-2 rounded bg-tutor-formula-bg border border-tutor-formula-border">
              <Calculator className="w-3.5 h-3.5 text-tutor-cyan shrink-0" />
              <div className="text-sm text-tutor-cyan">
                <InlineMath math={term.formula} />
              </div>
            </div>
          )}

          {/* Mini Diagram */}
          {DiagramComponent && (
            <motion.div 
              className="cursor-pointer"
              onClick={() => setShowDiagram(!showDiagram)}
            >
              <div className="flex items-center gap-2 text-xs text-tutor-gold mb-1">
                <ExternalLink className="w-3 h-3" />
                <span>{showDiagram ? 'Hide Diagram' : 'Show Diagram'}</span>
              </div>
              <AnimatePresence>
                {showDiagram && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="w-full max-w-[200px] h-24 p-2 rounded bg-navy-light border border-silver/10">
                      <DiagramComponent />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Exam Tip */}
          <div className="flex gap-2 p-2 rounded bg-tutor-gold/10 border border-tutor-gold/20">
            <Lightbulb className="w-3.5 h-3.5 text-tutor-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-semibold text-tutor-gold uppercase tracking-wide">Exam Tip</span>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                {term.examTip}
              </p>
            </div>
          </div>

          {/* Topic Tag */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-muted-foreground">Topic:</span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 bg-muted/50">
              {term.topic}
            </Badge>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const GlossarySection = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [levelFilter, setLevelFilter] = useState<'All' | 'AS' | 'A2'>('All');
  const allLetters = getAllLetters();
  const availableLetters = useMemo(() => {
    const letters = new Set(glossaryTerms.map(t => t.term[0].toUpperCase()));
    return letters;
  }, []);

  const filteredTerms = useMemo(() => {
    let terms = filterTermsByLetter(selectedLetter);
    if (levelFilter !== 'All') {
      terms = terms.filter(t => t.level === levelFilter || t.level === 'Both');
    }
    return terms;
  }, [selectedLetter, levelFilter]);

  return (
    <section className="py-16 lg:py-24" id="glossary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <GraduationCap className="w-4 h-4 text-tutor-gold" />
            <span className="text-sm text-tutor-gold font-medium">Exam Standard</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-silver-bright mb-2">
            The Master Economist's Glossary
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master the language of the Syllabus. These definitions are aligned with the 
            2026-2028 Cambridge International Standards to ensure maximum AO1 marks.
          </p>
        </motion.div>

        {/* Level Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-2 mb-4"
        >
          {(['All', 'AS', 'A2'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full transition-all",
                levelFilter === level
                  ? 'bg-tutor-gold text-navy-deep'
                  : 'bg-navy-light text-muted-foreground hover:bg-navy-light/80 hover:text-silver-bright'
              )}
            >
              {level === 'All' ? 'All Levels' : `${level} Level`}
            </button>
          ))}
        </motion.div>

        {/* A-Z Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-1 mb-6"
        >
          {allLetters.map((letter) => {
            const hasTerms = availableLetters.has(letter);
            return (
              <button
                key={letter}
                onClick={() => hasTerms && setSelectedLetter(letter)}
                disabled={!hasTerms}
                className={cn(
                  "w-8 h-8 text-sm font-serif font-medium rounded transition-all",
                  selectedLetter === letter
                    ? 'bg-tutor-gold text-navy-deep shadow-lg shadow-tutor-gold/20'
                    : hasTerms
                    ? 'bg-navy-light text-silver hover:bg-tutor-gold/20 hover:text-tutor-gold'
                    : 'bg-navy-light/30 text-muted-foreground/30 cursor-not-allowed'
                )}
              >
                {letter}
              </button>
            );
          })}
        </motion.div>

        {/* Terms Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 lg:p-6"
        >
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-tutor-gold/10">
            <BookOpen className="w-4 h-4 text-tutor-gold" />
            <h3 className="font-serif text-lg text-tutor-gold">{selectedLetter}</h3>
            <span className="text-xs text-muted-foreground">
              ({filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''})
            </span>
          </div>

          {filteredTerms.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-0">
              {filteredTerms.map((term) => (
                <GlossaryTermCard key={term.term} term={term} />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                No terms found for "{selectedLetter}" at {levelFilter === 'All' ? 'any' : levelFilter} level.
              </p>
            </div>
          )}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground"
        >
          <span>📚 {glossaryTerms.length} Total Terms</span>
          <span>🎯 {glossaryTerms.filter(t => t.level === 'AS' || t.level === 'Both').length} AS Level</span>
          <span>📈 {glossaryTerms.filter(t => t.level === 'A2' || t.level === 'Both').length} A2 Level</span>
          <span>📐 {glossaryTerms.filter(t => t.formula).length} With Formulas</span>
        </motion.div>
      </div>
    </section>
  );
};

export default GlossarySection;
