import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface ExaminerTrapProps {
 trap: string;
 correction: string;
 className?: string;
}

/**
 * Examiner Trap Box Component
 * Highlights common mistakes that cost marks in exams
 */
const ExaminerTrap = ({ trap, correction, className = "" }: ExaminerTrapProps) => {
 return (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className={`glass-card p-5 rounded-xl border-l-4 border-amber-500 ${className}`}
 >
 <div className="flex items-center gap-2 mb-3">
 <AlertTriangle className="w-5 h-5 text-amber-400" />
 <h4 className="font-semibold text-amber-400 text-sm">Examiner Trap</h4>
 </div>
 
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
 <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
 <div>
 <span className="text-xs text-red-400 font-semibold uppercase tracking-wide">Common Mistake</span>
 <p className="text-sm text-muted-foreground mt-1">{trap}</p>
 </div>
 </div>
 
 <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
 <div>
 <span className="text-xs text-green-400 font-semibold uppercase tracking-wide">Correct Approach</span>
 <p className="text-sm text-muted-foreground mt-1">{correction}</p>
 </div>
 </div>
 </div>
 </motion.div>
 );
};

export default ExaminerTrap;
