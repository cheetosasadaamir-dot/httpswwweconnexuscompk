import { motion } from 'framer-motion';
import EconomicKineticBackground from '@/components/EconomicKineticBackground';
import FloatingDock from '@/components/FloatingDock';

interface ChapterLayoutProps {
  chapterNumber: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ChapterLayout = ({ chapterNumber, title, subtitle, children }: ChapterLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <EconomicKineticBackground />
      <FloatingDock />

      <main className="relative z-20 pt-24 lg:pt-28">
        {/* Chapter Header */}
        <header className="pt-8 pb-6 px-6 lg:px-12 border-b border-charcoal-gold/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
            >
              <span className="text-charcoal-cyan font-semibold">Chapter {chapterNumber}</span>
              <span className="text-charcoal-muted">•</span>
              <span className="text-charcoal-muted text-sm">Economics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold section-title mb-3"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-charcoal-silver max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </header>

        {/* Chapter Content */}
        <div className="px-6 lg:px-12 py-8">
          <div className="max-w-4xl mx-auto space-compact">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChapterLayout;
