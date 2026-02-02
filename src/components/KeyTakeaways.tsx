import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle } from 'lucide-react';

interface KeyTakeawaysProps {
  title?: string;
  takeaways: string[];
  className?: string;
}

/**
 * Key Takeaways Summary Component
 * Displays at the top of each chapter for quick revision
 * Based on EconomicsHelp.org summary style
 */
const KeyTakeaways = ({ title = "Key Takeaways", takeaways, className = "" }: KeyTakeawaysProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 rounded-2xl border-l-4 border-primary mb-8 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-silver-bright">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground leading-relaxed">{takeaway}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default KeyTakeaways;
