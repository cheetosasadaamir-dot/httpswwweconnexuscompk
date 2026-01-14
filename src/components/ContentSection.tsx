import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, subtitle, children, className }: ContentSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-16", className)}
    >
      <div className="mb-8">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold section-title mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        )}
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </motion.section>
  );
};

export default ContentSection;
