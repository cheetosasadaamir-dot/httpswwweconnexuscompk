import { motion } from 'framer-motion';
import ParticleField from '@/components/ParticleField';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import Sidebar from '@/components/Sidebar';

interface ChapterLayoutProps {
  chapterNumber: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ChapterLayout = ({ chapterNumber, title, subtitle, children }: ChapterLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <MeshGradientBackground />
      <ParticleField />
      <Sidebar />

      <main className="ml-64 relative z-20">
        {/* Chapter Header */}
        <header className="pt-12 pb-8 px-8 lg:px-12 border-b border-silver/10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="text-primary font-semibold">Chapter {chapterNumber}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground text-sm">Microeconomics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold section-title mb-4"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </header>

        {/* Chapter Content */}
        <div className="px-8 lg:px-12 py-12">
          <div className="max-w-4xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChapterLayout;
