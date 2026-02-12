import { motion } from 'framer-motion';
import ThreeJsMarketEngine from '@/components/ThreeJsMarketEngine';
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
      <ThreeJsMarketEngine />
      <FloatingDock />

      <main className="relative z-20 pt-20 md:pt-24 lg:pt-28">
        {/* Chapter Header - Mobile-optimized padding */}
        <header className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6 lg:px-12 border-b border-charcoal-gold/10">
          <div className="w-[95%] max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass-card mb-3 md:mb-4"
            >
              <span className="text-charcoal-cyan font-semibold text-sm md:text-base">Chapter {chapterNumber}</span>
              <span className="text-charcoal-muted">•</span>
              <span className="text-charcoal-muted text-xs md:text-sm">Economics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-fluid-4xl lg:text-fluid-5xl font-bold section-title mb-2 md:mb-3 leading-tight"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-fluid-base lg:text-lg text-charcoal-silver max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </header>

        {/* Chapter Content - Mobile-first padding */}
        <div className="w-[95%] max-w-[1200px] mx-auto py-6 md:py-8">
          <div className="space-compact">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChapterLayout;
