import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhysicsExaminerTrapProps {
  trap: string;
  correction: string;
  markScheme?: string;
}

/**
 * Highlights a common student misconception and the correct exam-board approach.
 * Use inside <PhysicsNoteCard /> via the `examinerTrap` prop.
 */
const PhysicsExaminerTrap = ({ trap, correction, markScheme }: PhysicsExaminerTrapProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-xl border-l-4 border-amber-400 bg-amber-500/10 p-4 md:p-5"
  >
    <div className="flex items-center gap-2 mb-3">
      <AlertTriangle className="w-4 h-4 text-amber-400" />
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400 font-mono">
        Examiner's Trap
      </span>
    </div>

    <div className="space-y-2.5">
      <div className="flex items-start gap-2.5 rounded-md bg-red-500/10 border border-red-500/20 p-3">
        <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-red-400 mb-0.5">
            Common mistake
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed">{trap}</p>
        </div>
      </div>

      <div className="flex items-start gap-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 p-3">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-0.5">
            Correct approach
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed">{correction}</p>
        </div>
      </div>

      {markScheme && (
        <p className="text-xs text-muted-foreground italic pl-1 border-l-2 border-amber-400/40 ml-1 pl-3">
          <span className="font-semibold not-italic text-amber-300/90">Mark scheme: </span>
          {markScheme}
        </p>
      )}
    </div>
  </motion.div>
);

export default PhysicsExaminerTrap;
