import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const disclaimerText = "NOTICE: WHILE ALL ARCHITECTURAL DIAGRAMS UTILIZE INTENSE ANIMATION AND AI RENDERING, CERTAIN GEOMETRIC PRECISIONS MAY VARY. HOWEVER, ALL THEORETICAL DATA AND CAUSAL CHAINS ARE RIGOROUSLY ALIGNED WITH THE A-LEVEL ECONOMICS SYLLABUS, UTILIZING EXAM-STYLE ANALYSIS AND EXAMINER-REQUIRED EVALUATION TECHNIQUES.";

const AcademicDisclaimer =  => {
 const isMobile = useIsMobile;
 const [isExpanded, setIsExpanded] = useState(false);

 // Mobile: Info icon that expands on tap
 if (isMobile) {
 return (
 <>
 {/* Floating info button */}
 <motion.button
 onClick={ => setIsExpanded(true)}
 className={cn(
 "fixed bottom-24 right-4 z-[100]",
 "w-10 h-10 rounded-full",
 "bg-background/80 backdrop-blur-md",
 "border border-neon-cyan/40",
 "flex items-center justify-center",
 "shadow-lg shadow-black/30"
 )}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 aria-label="Academic disclaimer"
 >
 <Info className="w-4 h-4 text-neon-cyan/70" />
 </motion.button>

 {/* Expanded modal overlay */}
 <AnimatePresence>
 {isExpanded && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-[1000] flex items-end justify-center p-4 bg-black/60 backdrop-blur-sm"
 onClick={ => setIsExpanded(false)}
 >
 <motion.div
 initial={{ y: 100, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: 100, opacity: 0 }}
 transition={{ type: 'spring', damping: 25, stiffness: 300 }}
 onClick={(e) => e.stopPropagation}
 className={cn(
 "w-full max-w-md p-4 rounded-xl",
 "bg-background/95 backdrop-blur-xl",
 "border border-neon-cyan/30",
 "shadow-2xl shadow-black/50"
 )}
 >
 <div className="flex items-start justify-between mb-3">
 <div className="flex items-center gap-2">
 <Info className="w-4 h-4 text-neon-cyan/70" />
 <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
 Academic Notice
 </span>
 </div>
 <button
 onClick={ => setIsExpanded(false)}
 className="p-1 rounded-full hover:bg-muted/50 transition-colors"
 >
 <X className="w-4 h-4 text-muted-foreground" />
 </button>
 </div>
 <p className="text-[11px] leading-relaxed text-muted-foreground/80 uppercase tracking-wide">
 {disclaimerText}
 </p>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
 }

 // Desktop: Fixed vertical sidebar on the right
 return (
 <motion.aside
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, delay: 1 }}
 className={cn(
 "fixed right-4 top-1/2 -translate-y-1/2 z-[50]",
 "w-[180px] p-3",
 "bg-background/60 backdrop-blur-md",
 "border border-neon-cyan/30 rounded-lg",
 "shadow-lg shadow-black/20",
 "hidden lg:block"
 )}
 >
 {/* Header */}
 <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-neon-cyan/20">
 <Info className="w-3 h-3 text-neon-cyan/60 flex-shrink-0" />
 <span className="text-[9px] uppercase tracking-[0.15em] text-neon-cyan/70 font-medium">
 Academic Notice
 </span>
 </div>
 
 {/* Disclaimer text */}
 <p className="text-[10px] leading-[1.6] text-muted-foreground/70 uppercase tracking-wide">
 {disclaimerText}
 </p>
 </motion.aside>
 );
};

export default AcademicDisclaimer;
