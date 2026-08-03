import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity } from 'lucide-react';
import { useAuthGate } from '@/hooks/useAuthGate';

interface HubEntryCardProps {
  title: string;
  description: string;
  href: string;
  icons: React.ComponentType<{ className?: string }>[];
  gradient: string;
  hoverGradient: string;
  cta?: string;
  delay?: number;
  requireLogin?: boolean;
}

/**
 * Entry card matching the Knowledge Pillars visual language —
 * used as the doorway into the Assignment Architect and World Economics pages.
 */
const HubEntryCard = ({
  title,
  description,
  href,
  icons,
  gradient,
  hoverGradient,
  cta = 'Explore Topics',
  delay = 0,
  requireLogin = false,
}: HubEntryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, requireAuth } = useAuthGate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!requireLogin || isAuthenticated) {
      navigate(href);
    } else {
      requireAuth(() => navigate(href));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div onClick={handleClick} className="cursor-pointer">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative h-64 md:h-80 lg:h-96 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group touch-target"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 transition-all duration-700"
            style={{ background: isHovered ? hoverGradient : gradient }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/20 to-navy-deep/80" />

          <div className="absolute inset-0 overflow-hidden hidden sm:block">
            {icons.map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{ top: `${20 + index * 25}%`, left: `${10 + index * 30}%` }}
                animate={{
                  y: isHovered ? [0, -10, 0] : 0,
                  opacity: isHovered ? 0.6 : 0.2,
                }}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0, delay: index * 0.2 }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-silver/30" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute inset-0 rounded-xl md:rounded-2xl"
            style={{
              border: '1px solid',
              borderColor: isHovered ? 'hsl(var(--silver) / 0.3)' : 'hsl(var(--silver) / 0.1)',
            }}
            animate={{
              boxShadow: isHovered
                ? '0 0 40px hsl(var(--indigo-glow) / 0.2), inset 0 0 40px hsl(var(--primary) / 0.05)'
                : '0 0 0px transparent',
            }}
          />

          <div className="absolute inset-0 p-5 md:p-6 lg:p-8 flex flex-col justify-end">
            <motion.div animate={{ y: isHovered ? -10 : 0 }} transition={{ duration: 0.3 }}>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-silver-bright mb-2 md:mb-3">
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4 max-w-xs">
                {description}
              </p>
              <motion.div
                className="inline-flex items-center gap-2 text-primary font-medium text-sm md:text-base"
                animate={{ x: isHovered ? 5 : 0 }}
              >
                {cta}
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              style={{ background: 'hsl(var(--primary) / 0.2)', backdropFilter: 'blur(8px)' }}
              animate={{ rotate: isHovered ? 45 : 0 }}
            >
              <Activity className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HubEntryCard;
