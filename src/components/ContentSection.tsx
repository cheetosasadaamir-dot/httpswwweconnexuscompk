import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, subtitle, id, children, className }: ContentSectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-8", className)}
    >
      <div className="mb-4">
        <h2 className="font-serif text-2xl lg:text-3xl font-bold section-title mb-1">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-muted-foreground">{subtitle}</p>
        )}
        <div className="h-0.5 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </motion.section>
  );
};

export default ContentSection;
