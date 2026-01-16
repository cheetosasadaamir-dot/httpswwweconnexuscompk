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
      transition={{ duration: 0.5 }}
      className={cn("mb-4", className)}
    >
      <div className="mb-2">
        <h2 className="font-serif text-xl lg:text-2xl font-bold section-title mb-0.5">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
        <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mt-1" />
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </motion.section>
  );
};

export default ContentSection;
