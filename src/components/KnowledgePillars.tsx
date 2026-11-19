import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthGate } from '@/hooks/useAuthGate';
import { Activity, ArrowUpRight, Atom, BarChart3, Brain, Dna, FlaskConical, Globe, Landmark, Sigma, TrendingUp, Users } from 'lucide-react';

interface PillarCardProps {
  title: string;
  description: string;
  href?: string;
  icons: React.ComponentType<{ className?: string }>[];
  gradient: string;
  hoverGradient: string;
  delay: number;
  comingSoon?: boolean;
}

const PillarCard = ({ title, description, href, icons, gradient, hoverGradient, delay, comingSoon = false }: PillarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, requireAuth } = useAuthGate();

  const handleClick = (e: React.MouseEvent) => {
    if (!href) return;
    e.preventDefault();
    openDestination();
  };

  const openDestination = () => {
    if (!href) return;
    if (isAuthenticated) {
      navigate(href);
    } else {
      requireAuth(() => navigate(href));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (href && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openDestination();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={href ? 'link' : undefined}
        tabIndex={href ? 0 : -1}
        aria-label={href ? `Explore ${title}` : `${title}, coming soon`}
        className={href ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary' : 'cursor-default'}
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={`relative h-64 md:h-80 lg:h-96 rounded-xl md:rounded-2xl overflow-hidden ${href ? 'cursor-pointer' : 'cursor-default'} group touch-target`}
          whileHover={href ? { scale: 1.02 } : undefined}
          transition={{ duration: 0.3 }}
        >
          {/* Background with gradient shift */}
          <motion.div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: isHovered ? hoverGradient : gradient,
            }}
          />

          {/* Glassmorphic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/20 to-navy-deep/80" />

          {/* Floating icons - Hide on small mobile for performance */}
          <div className="absolute inset-0 overflow-hidden hidden sm:block">
            {icons.map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: `${20 + index * 25}%`,
                  left: `${10 + index * 30}%`,
                }}
                animate={{
                  y: isHovered ? [0, -10, 0] : 0,
                  opacity: isHovered ? 0.6 : 0.2,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  delay: index * 0.2,
                }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-silver/30" />
              </motion.div>
            ))}
                </div>

          {/* Border glow on hover */}
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

          {/* Content */}
          <div className="absolute inset-0 p-5 md:p-6 lg:p-8 flex flex-col justify-end">
            <motion.div
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-silver-bright mb-2 md:mb-3">
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4 max-w-xs">
                {description}
              </p>
              {comingSoon ? (
                <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                  Coming soon
                </span>
              ) : (
                <motion.div
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm md:text-base"
                  animate={{ x: isHovered ? 5 : 0 }}
                >
                  Explore Topics
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'hsl(var(--primary) / 0.2)',
                backdropFilter: 'blur(8px)',
              }}
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

const KnowledgePillars = () => {
  const economicsGradient = 'linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(234 60% 12%) 50%, hsl(var(--navy-light)) 100%)';
  const economicsHover = 'linear-gradient(135deg, hsl(234 60% 15%) 0%, hsl(217 60% 18%) 50%, hsl(234 50% 20%) 100%)';
  const stemGradient = 'linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(200 60% 12%) 50%, hsl(var(--navy-light)) 100%)';
  const stemHover = 'linear-gradient(135deg, hsl(200 60% 15%) 0%, hsl(190 60% 18%) 50%, hsl(200 50% 20%) 100%)';

  return (
    <div className="space-y-12 md:space-y-16">
      <section aria-labelledby="social-sciences-heading">
        <div className="mb-5 md:mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-secondary">Social Sciences</p>
            <h3 id="social-sciences-heading" className="font-serif text-2xl md:text-3xl font-bold text-silver-bright">Explore society and its systems</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div data-first-chapter="true">
            <PillarCard
              title="Economics"
              description="Explore choices, markets, prices, national economies, and the forces shaping everyday life."
              href="/economics"
              icons={[TrendingUp, BarChart3, Globe, Landmark]}
              gradient={economicsGradient}
              hoverGradient={economicsHover}
              delay={0}
            />
          </div>
          <PillarCard
            title="Other Social Sciences"
            description="More ways to explore people, communities, institutions, and society are on the way."
            icons={[Users, Brain, Activity]}
            gradient={economicsGradient}
            hoverGradient={economicsHover}
            delay={0.1}
            comingSoon
          />
        </div>
      </section>

      <section aria-labelledby="stem-sciences-heading">
        <div className="mb-5 md:mb-7">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-secondary">STEM Sciences</p>
          <h3 id="stem-sciences-heading" className="font-serif text-2xl md:text-3xl font-bold text-silver-bright">Explore the natural world</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <PillarCard
            title="Physics"
            description="Explore motion, energy, forces, and the principles that describe the physical world."
            href="/chat?subject=physics"
            icons={[Atom, Activity, TrendingUp]}
            gradient={stemGradient}
            hoverGradient={stemHover}
            delay={0}
          />
          <PillarCard
            title="Chemistry"
            description="A new subject area is in development."
            icons={[FlaskConical, Atom, Activity]}
            gradient={stemGradient}
            hoverGradient={stemHover}
            delay={0.1}
            comingSoon
          />
          <PillarCard
            title="Mathematics"
            description="A new subject area is in development."
            icons={[Sigma, BarChart3, TrendingUp]}
            gradient={stemGradient}
            hoverGradient={stemHover}
            delay={0.2}
            comingSoon
          />
          <PillarCard
            title="Biology"
            description="A new subject area is in development."
            icons={[Dna, Activity, Brain]}
            gradient={stemGradient}
            hoverGradient={stemHover}
            delay={0.3}
            comingSoon
          />
        </div>
      </section>
    </div>
  );
};

export default KnowledgePillars;
