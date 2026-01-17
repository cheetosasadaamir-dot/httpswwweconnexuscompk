import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  TrendingUp, 
  Globe, 
  Image, 
  BookOpen,
  ChevronDown,
  GraduationCap,
  Menu,
  X,
  Sparkles,
  Library
} from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo-macromicro.png';

interface SubNavItem {
  title: string;
  href: string;
}

interface LevelNavItem {
  title: string;
  children: SubNavItem[];
}

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  levels?: LevelNavItem[];
  scrollTo?: string;
}

const navigation: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Notes Library', scrollTo: 'notes-repository', icon: Library },
  {
    title: 'Microeconomics',
    href: '/microeconomics',
    icon: TrendingUp,
    levels: [
      {
        title: 'AS Level',
        children: [
          { title: 'Basic Economic Ideas', href: '/basic-economic-ideas' },
          { title: 'The Price System', href: '/price-system' },
          { title: 'Elasticities', href: '/elasticities' },
          { title: 'Market Failure', href: '/market-failure' },
        ],
      },
      {
        title: 'A2 Level',
        children: [
          { title: 'Utility & Consumer Choice', href: '/a2-micro/utility-consumer-choice' },
          { title: 'Production & Costs', href: '/a2-micro/production-costs' },
          { title: 'Economic Efficiency', href: '/a2-micro/economic-efficiency' },
          { title: 'Market Structures', href: '/a2-micro/market-structures' },
          { title: 'Labor Market', href: '/a2-micro/labor-market' },
        ],
      },
    ],
  },
  {
    title: 'Macroeconomics',
    href: '/macroeconomics',
    icon: Globe,
    levels: [
      {
        title: 'AS Level',
        children: [
          { title: 'AD/AS Equilibrium', href: '/as-macro/ad-as' },
          { title: 'Inflation', href: '/as-macro/inflation' },
          { title: 'International Trade', href: '/as-macro/international-trade' },
          { title: 'Balance of Payments', href: '/as-macro/balance-of-payments' },
          { title: 'Macroeconomic Policy', href: '/as-macro/policy' },
        ],
      },
      {
        title: 'A2 Level',
        children: [
          { title: 'Keynesian Theory', href: '/a2-macro/national-income' },
          { title: 'Unemployment & Phillips Curve', href: '/a2-macro/unemployment-growth' },
          { title: 'Policy Objectives', href: '/a2-macro/policy-objectives' },
          { title: 'Money & Banking', href: '/a2-macro/money-banking' },
          { title: 'Development', href: '/a2-macro/development' },
        ],
      },
    ],
  },
  { title: 'Diagrams', href: '/diagrams', icon: Image },
  { title: 'Case Studies', href: '/case-studies', icon: BookOpen },
];

const FloatingDock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = useCallback((sectionId: string, closeMobileMenu = false) => {
    if (closeMobileMenu) {
      setIsMobileMenuOpen(false);
    }

    const executeScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Trigger highlight animation
        setTimeout(() => {
          element.classList.add('section-highlight');
          // Highlight first card
          const firstCard = document.querySelector('[data-first-chapter="true"]');
          if (firstCard) {
            firstCard.classList.add('glassmorphism-highlight');
            setTimeout(() => {
              firstCard.classList.remove('glassmorphism-highlight');
            }, 2000);
          }
          setTimeout(() => {
            element.classList.remove('section-highlight');
          }, 2000);
        }, 500);
      }
    };

    if (location.pathname === '/') {
      executeScroll();
    } else {
      navigate('/');
      setTimeout(executeScroll, 150);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (href: string) => location.pathname === href;

  const isParentActive = (item: NavItem) => {
    if (item.levels) {
      return item.levels.some(level => 
        level.children.some(child => location.pathname === child.href)
      );
    }
    return false;
  };

  return (
    <>
      {/* Desktop Floating Dock - NASA Control Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
      >
        <div className="floating-dock flex items-center gap-1 px-3 py-2">
          {/* Logo with glow */}
          <Link to="/" className="flex items-center gap-2.5 px-3 py-1.5 mr-3 group">
            <div className="relative">
              <img src={logoImage} alt="MacroMicro" className="w-8 h-8 object-contain relative z-10" />
              <div className="absolute inset-0 bg-neon-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold text-white group-hover:text-neon-gold transition-colors">
                MacroMicro
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider">
                CIE 9708
              </span>
            </div>
          </Link>

          <div className="w-px h-7 bg-neon-cyan/20 mx-1" />

          {/* Nav Items */}
          {navigation.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => item.levels && setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.scrollTo ? (
                <button
                  onClick={() => scrollToSection(item.scrollTo!)}
                  className="dock-item cta-amber-glow flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer hover:text-secondary"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium font-display">{item.title}</span>
                </button>
              ) : (
                <Link
                  to={item.href || '#'}
                  className={cn(
                    "dock-item flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all duration-300",
                    isActive(item.href || '') || isParentActive(item)
                      ? "active"
                      : ""
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium font-display">{item.title}</span>
                  {item.levels && (
                    <ChevronDown className={cn(
                      "w-3 h-3 transition-transform duration-300",
                      activeDropdown === item.title && "rotate-180"
                    )} />
                  )}
                </Link>
              )}

              {/* Dropdown Menu with glow */}
              <AnimatePresence>
                {item.levels && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 dropdown-menu min-w-[300px]"
                  >
                    {item.levels.map((level) => (
                      <div key={level.title} className="mb-3 last:mb-0">
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon-gold/10">
                          <GraduationCap className="w-3.5 h-3.5 text-neon-gold" />
                          <span className="text-xs font-semibold text-neon-gold uppercase tracking-wider font-display">
                            {level.title}
                          </span>
                        </div>
                        <div className="py-1">
                          {level.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={cn(
                                "block px-4 py-2.5 text-sm transition-all duration-200 rounded-lg mx-1",
                                isActive(child.href)
                                  ? "text-neon-cyan bg-neon-cyan/10 shadow-neon-cyan"
                                  : "text-muted-foreground hover:text-white hover:bg-space-elevated"
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Glossary special button */}
          <Link
            to="/#glossary"
            className="dock-item flex items-center gap-2 px-3.5 py-2.5 rounded-xl ml-1 hover:shadow-neon-cyan transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium font-display">Glossary</span>
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-4 right-4 z-50 lg:hidden floating-dock p-3"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* Mobile Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        <Link to="/" className="floating-dock flex items-center gap-2 px-3 py-2">
          <img src={logoImage} alt="MacroMicro" className="w-7 h-7 object-contain" />
          <span className="font-display text-sm font-semibold text-neon-gold">MacroMicro</span>
        </Link>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-space-void/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 mobile-menu overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {navigation.map((item) => (
                  <div key={item.title} className="mb-4">
                    {item.scrollTo ? (
                      <button
                        onClick={() => scrollToSection(item.scrollTo!, true)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary hover:bg-secondary/10 transition-all font-display w-full text-left cta-amber-glow cursor-pointer"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.href || '#'}
                        onClick={() => !item.levels && setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-display",
                          isActive(item.href || '') || isParentActive(item)
                            ? "bg-neon-cyan/10 text-neon-cyan shadow-neon-cyan"
                            : "text-muted-foreground hover:bg-space-elevated hover:text-white"
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    )}
                    
                    {item.levels && (
                      <div className="ml-6 mt-2 border-l border-neon-gold/20 pl-4">
                        {item.levels.map((level) => (
                          <div key={level.title} className="mb-3">
                            <span className="text-xs font-semibold text-neon-gold uppercase tracking-wider font-display">
                              {level.title}
                            </span>
                            <div className="mt-1 space-y-1">
                              {level.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={cn(
                                    "block py-2 text-sm transition-all",
                                    isActive(child.href)
                                      ? "text-neon-cyan"
                                      : "text-muted-foreground hover:text-white"
                                  )}
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Glossary link in mobile */}
                <Link
                  to="/#glossary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-space-elevated hover:text-white transition-all font-display"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Glossary</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingDock;
