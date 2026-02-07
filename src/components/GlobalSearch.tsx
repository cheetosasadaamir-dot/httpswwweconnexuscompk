import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, BookOpen, Briefcase, ChevronRight, Command, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { sanitizeInput, checkRateLimit, RATE_LIMITS } from '@/lib/security';
import { useDebounce } from '@/hooks/use-debounce';
import { allExamPapers } from '@/data/examPapers';

interface SearchResult {
  id: string;
  title: string;
  category: 'notes' | 'case-studies' | 'chapter' | 'topic' | 'exam-mcq';
  href: string;
  description?: string;
  scrollTo?: string;
}

// Generate exam MCQ search entries from all papers
const examMCQContent: SearchResult[] = allExamPapers.flatMap(paper => 
  paper.questions.map(q => ({
    id: `${paper.code}-${paper.session}-q${q.id}`,
    title: `Q${q.id}: ${q.question.slice(0, 60)}${q.question.length > 60 ? '...' : ''}`,
    category: 'exam-mcq' as const,
    href: `/exam-intelligence?paper=${paper.code}&session=${encodeURIComponent(paper.session)}&question=${q.id}`,
    description: `${paper.code} ${paper.session} | ${q.examinerKey.ao}: ${q.examinerKey.topic}`
  }))
);

// Searchable content database
const searchableContent: SearchResult[] = [
  // AS Microeconomics
  { id: 'basic-economic-ideas', title: 'Basic Economic Ideas', category: 'chapter', href: '/basic-economic-ideas', description: 'Scarcity, PPC, Opportunity Cost' },
  { id: 'price-system', title: 'The Price System', category: 'chapter', href: '/price-system', description: 'Demand, Supply, Market Equilibrium' },
  { id: 'elasticities', title: 'Elasticities', category: 'chapter', href: '/elasticities', description: 'PED, YED, XED, PES' },
  { id: 'market-failure', title: 'Market Failure', category: 'chapter', href: '/market-failure', description: 'Externalities, Public Goods' },
  
  // A2 Microeconomics
  { id: 'utility-consumer-choice', title: 'Utility & Consumer Choice', category: 'chapter', href: '/a2-micro/utility-consumer-choice', description: 'Marginal Utility, Indifference Curves' },
  { id: 'production-costs', title: 'Production & Costs', category: 'chapter', href: '/a2-micro/production-costs', description: 'Short-Run & Long-Run Costs' },
  { id: 'economic-efficiency', title: 'Economic Efficiency', category: 'chapter', href: '/a2-micro/economic-efficiency', description: 'Allocative, Productive, X-Efficiency' },
  { id: 'market-structures', title: 'Market Structures', category: 'chapter', href: '/a2-micro/market-structures', description: 'Perfect Competition, Monopoly, Oligopoly' },
  { id: 'labor-market', title: 'Labor Market', category: 'chapter', href: '/a2-micro/labor-market', description: 'Wage Determination, Monopsony' },
  
  // AS Macroeconomics
  { id: 'ad-as', title: 'AD/AS Equilibrium', category: 'chapter', href: '/as-macro/ad-as', description: 'Aggregate Demand, SRAS, LRAS' },
  { id: 'inflation', title: 'Inflation', category: 'chapter', href: '/as-macro/inflation', description: 'Demand-Pull, Cost-Push Inflation' },
  { id: 'international-trade', title: 'International Trade', category: 'chapter', href: '/as-macro/international-trade', description: 'Comparative Advantage, Terms of Trade' },
  { id: 'balance-of-payments', title: 'Balance of Payments', category: 'chapter', href: '/as-macro/balance-of-payments', description: 'Current Account, Capital Account' },
  { id: 'macro-policy', title: 'Macroeconomic Policy', category: 'chapter', href: '/as-macro/policy', description: 'Fiscal, Monetary, Supply-Side' },
  
  // A2 Macroeconomics
  { id: 'keynesian-theory', title: 'Keynesian Theory', category: 'chapter', href: '/a2-macro/national-income', description: 'Multiplier Effect, Keynesian Cross' },
  { id: 'unemployment-growth', title: 'Unemployment & Phillips Curve', category: 'chapter', href: '/a2-macro/unemployment-growth', description: 'Types of Unemployment, NAIRU' },
  { id: 'policy-objectives', title: 'Policy Objectives', category: 'chapter', href: '/a2-macro/policy-objectives', description: 'Policy Conflicts, Laffer Curve' },
  { id: 'money-banking', title: 'Money & Banking', category: 'chapter', href: '/a2-macro/money-banking', description: 'Money Supply, Quantity Theory (MV=PQ)' },
  { id: 'development', title: 'Development Economics', category: 'chapter', href: '/a2-macro/development', description: 'HDI, Harrod-Domar Model' },
  
  // Key Topics (searchable by specific terms)
  { id: 'phillips-curve', title: 'Phillips Curve', category: 'topic', href: '/a2-macro/unemployment-growth', description: 'Inflation-Unemployment Trade-off' },
  { id: 'quantity-theory', title: 'Quantity Theory of Money (MV=PQ)', category: 'topic', href: '/a2-macro/money-banking', description: 'Fisher Equation, Monetarism' },
  { id: 'multiplier', title: 'Multiplier Effect', category: 'topic', href: '/a2-macro/national-income', description: 'Keynesian Multiplier Formula' },
  { id: 'hdi', title: 'Human Development Index (HDI)', category: 'topic', href: '/a2-macro/development', description: 'Measuring Development' },
  { id: 'ppc', title: 'Production Possibility Curve (PPC)', category: 'topic', href: '/basic-economic-ideas', description: 'Opportunity Cost Visualization' },
  { id: 'ped', title: 'Price Elasticity of Demand (PED)', category: 'topic', href: '/elasticities', description: 'Responsiveness to Price Changes' },
  { id: 'yed', title: 'Income Elasticity of Demand (YED)', category: 'topic', href: '/elasticities', description: 'Normal vs Inferior Goods' },
  { id: 'xed', title: 'Cross Elasticity of Demand (XED)', category: 'topic', href: '/elasticities', description: 'Substitutes & Complements' },
  { id: 'laffer-curve', title: 'Laffer Curve', category: 'topic', href: '/a2-macro/policy-objectives', description: 'Tax Revenue Optimization' },
  { id: 'j-curve', title: 'J-Curve Effect', category: 'topic', href: '/as-macro/balance-of-payments', description: 'Depreciation & Trade Balance' },
  { id: 'marshall-lerner', title: 'Marshall-Lerner Condition', category: 'topic', href: '/as-macro/balance-of-payments', description: 'Elasticity & Devaluation' },
  { id: 'externalities', title: 'Externalities', category: 'topic', href: '/market-failure', description: 'Positive & Negative External Effects' },
  { id: 'public-goods', title: 'Public Goods', category: 'topic', href: '/market-failure', description: 'Non-Rival, Non-Excludable' },
  { id: 'oligopoly', title: 'Oligopoly', category: 'topic', href: '/a2-micro/market-structures', description: 'Game Theory, Kinked Demand' },
  { id: 'monopoly', title: 'Monopoly', category: 'topic', href: '/a2-micro/market-structures', description: 'Price Maker, Barriers to Entry' },
  { id: 'perfect-competition', title: 'Perfect Competition', category: 'topic', href: '/a2-micro/market-structures', description: 'Price Taker, Normal Profit' },
  { id: 'economies-of-scale', title: 'Economies of Scale', category: 'topic', href: '/a2-micro/production-costs', description: 'Internal & External EoS' },
  { id: 'comparative-advantage', title: 'Comparative Advantage', category: 'topic', href: '/as-macro/international-trade', description: 'Ricardo, Specialization' },
  { id: 'fiscal-policy', title: 'Fiscal Policy', category: 'topic', href: '/as-macro/policy', description: 'Government Spending & Taxation' },
  { id: 'monetary-policy', title: 'Monetary Policy', category: 'topic', href: '/as-macro/policy', description: 'Interest Rates, Money Supply' },
  { id: 'supply-side', title: 'Supply-Side Policies', category: 'topic', href: '/as-macro/policy', description: 'LRAS Shift, Productivity' },
  { id: 'positive-statement', title: 'Positive Statement', category: 'topic', href: '/basic-economic-ideas', description: 'Factual, testable economic claims' },
  { id: 'normative-statement', title: 'Normative Statement', category: 'topic', href: '/basic-economic-ideas', description: 'Value judgments, opinions' },
  { id: 'budget-line', title: 'Budget Line', category: 'topic', href: '/a2-micro/utility-consumer-choice', description: 'Consumer affordable combinations' },
  { id: 'lorenz-curve', title: 'Lorenz Curve', category: 'topic', href: '/a2-macro/development', description: 'Income inequality visualization' },
  { id: 'gini-coefficient', title: 'Gini Coefficient', category: 'topic', href: '/a2-macro/development', description: 'Inequality measurement 0-1' },
  { id: 'moral-hazard', title: 'Moral Hazard', category: 'topic', href: '/market-failure', description: 'Risk-taking when costs borne by others' },
  { id: 'asymmetric-information', title: 'Asymmetric Information', category: 'topic', href: '/market-failure', description: 'Unequal knowledge in markets' },
  { id: 'customs-union', title: 'Customs Union', category: 'topic', href: '/as-macro/international-trade', description: 'Trade bloc with common external tariff' },
  { id: 'tariff', title: 'Tariff', category: 'topic', href: '/as-macro/international-trade', description: 'Tax on imports' },
  
  // Notes & Case Studies pages
  { id: 'notes', title: 'Notes Library', category: 'notes', href: '/notes', description: 'Complete A-Level Economics Materials' },
  { id: 'case-studies', title: 'Case Studies Bank', category: 'case-studies', href: '/case-studies', description: 'CIE 9708 Past Papers & Analysis' },
  
  // Exam Intelligence
  { id: 'exam-intelligence', title: 'Exam Intelligence', category: 'chapter', href: '/exam-intelligence', description: 'MCQ Masterclass – 240 Solved Questions' },
  
  // Add exam MCQ content
  ...examMCQContent,
];

const GlobalSearch = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Debounce search query for performance (300ms delay)
  const debouncedQuery = useDebounce(query, 300);

  // Filter results based on debounced query with sanitization - memoized for performance
  const filteredResults = useMemo(() => {
    if (debouncedQuery.trim().length === 0) return [];
    
    const sanitizedQuery = sanitizeInput(debouncedQuery).toLowerCase();
    if (!sanitizedQuery) return [];
    
    return searchableContent.filter(item => 
      item.title.toLowerCase().includes(sanitizedQuery) ||
      item.description?.toLowerCase().includes(sanitizedQuery)
    ).slice(0, 8);
  }, [debouncedQuery]);

  // Keyboard shortcut handler (/ or CMD+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD/CTRL + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      // Forward slash (when not in an input)
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle arrow key navigation
  const handleKeyNavigation = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredResults[selectedIndex]);
    }
  }, [filteredResults, selectedIndex]);

  // Handle result selection
  const handleSelect = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
    
    if (result.scrollTo) {
      // Smooth scroll to section on current page
      const element = document.getElementById(result.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to page
      navigate(result.href);
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const getCategoryIcon = (category: SearchResult['category']) => {
    switch (category) {
      case 'notes': return BookOpen;
      case 'case-studies': return Briefcase;
      case 'chapter': return FileText;
      case 'topic': return Search;
      case 'exam-mcq': return GraduationCap;
      default: return FileText;
    }
  };

  const getCategoryLabel = (category: SearchResult['category']) => {
    switch (category) {
      case 'notes': return 'Notes';
      case 'case-studies': return 'Case Study';
      case 'chapter': return 'Chapter';
      case 'topic': return 'Topic';
      case 'exam-mcq': return 'MCQ';
      default: return 'Content';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[600px] mx-auto px-4 md:px-0 relative z-50"
    >
      {/* Search Input */}
      <div
        className={cn(
          "relative transition-all duration-300",
          isFocused && "transform scale-[1.02]"
        )}
      >
        <div
          className={cn(
            "relative flex items-center gap-3 px-5 py-4 rounded-2xl",
            "bg-space-void/60 backdrop-blur-xl",
            "border transition-all duration-300",
            isFocused 
              ? "border-neon-cyan shadow-[0_0_30px_rgba(0,242,255,0.25)]" 
              : "border-neon-cyan/30 hover:border-neon-cyan/50"
          )}
        >
          <Search className={cn(
            "w-5 h-5 transition-colors duration-300",
            isFocused ? "text-neon-cyan" : "text-neon-cyan/60"
          )} />
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => {
              setIsFocused(true);
              setIsOpen(true);
            }}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyNavigation}
            placeholder="SEARCH TOPICS (E.G. PHILLIPS CURVE, HDI, MV=PQ)..."
            className="flex-1 bg-transparent text-sm md:text-base text-white placeholder:text-white/40 placeholder:tracking-[0.1em] placeholder:font-medium focus:outline-none"
          />

          {/* Keyboard shortcut hint */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
            <Command className="w-3 h-3 text-white/40" />
            <span className="text-xs text-white/40 font-medium">K</span>
          </div>
        </div>

        {/* Live Results Dropdown */}
        <AnimatePresence>
          {isOpen && filteredResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden bg-space-void/95 backdrop-blur-2xl border border-neon-cyan/20 shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="p-2 max-h-[400px] overflow-y-auto">
                {filteredResults.map((result, index) => {
                  const Icon = getCategoryIcon(result.category);
                  return (
                    <motion.button
                      key={result.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={cn(
                        "w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-200 text-left group",
                        selectedIndex === index 
                          ? "bg-neon-cyan/10 border border-neon-cyan/30" 
                          : "hover:bg-white/5 border border-transparent"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-lg transition-colors",
                        selectedIndex === index 
                          ? "bg-neon-cyan/20 text-neon-cyan" 
                          : "bg-white/5 text-white/60 group-hover:text-neon-cyan"
                      )}>
                        <Icon className="w-4 h-4" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "font-medium truncate transition-colors",
                            selectedIndex === index ? "text-neon-cyan" : "text-white"
                          )}>
                            {result.title}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                            {getCategoryLabel(result.category)}
                          </span>
                        </div>
                        {result.description && (
                          <p className="text-xs text-white/40 truncate mt-0.5">
                            {result.description}
                          </p>
                        )}
                      </div>

                      <ChevronRight className={cn(
                        "w-4 h-4 transition-all",
                        selectedIndex === index 
                          ? "text-neon-cyan translate-x-0" 
                          : "text-white/20 -translate-x-1 group-hover:translate-x-0"
                      )} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No results message */}
        <AnimatePresence>
          {isOpen && query.trim().length > 0 && filteredResults.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 p-6 rounded-xl bg-space-void/95 backdrop-blur-2xl border border-neon-cyan/20 text-center"
            >
              <Search className="w-8 h-8 text-white/20 mx-auto mb-3" />
              <p className="text-white/60 text-sm">No results found for "{query}"</p>
              <p className="text-white/30 text-xs mt-1">Try searching for topics like "Phillips Curve" or "Elasticity"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GlobalSearch;
