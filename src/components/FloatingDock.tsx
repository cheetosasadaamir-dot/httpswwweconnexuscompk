import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  TrendingUp,
  Globe,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Menu,
  X,
  Sparkles,
  Library,
  User,
  Landmark,
  Scale,
  Video,
  Lock,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/econnexus-logo-final.png';
import OwnerProfileDrawer from './OwnerProfileDrawer';
import { useAuth } from '@/hooks/useAuth';


interface SubNavItem {
  title: string;
  href?: string;
  scrollTo?: string;
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

// Desktop navigation (simplified)
const navigation: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Notes', href: '/notes', icon: Library },
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
  { title: 'Case Studies', href: '/case-studies', icon: BookOpen },
  { title: 'Exam Intelligence', href: '/exam-intelligence', icon: GraduationCap },
];

// Mobile tiered navigation structure
interface MobileMenuTier {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  isHighlighted?: boolean;
  children: {
    title: string;
    href?: string;
    scrollTo?: string;
  }[];
}

const mobileMenuTiers: MobileMenuTier[] = [
  {
    title: 'AS Macroeconomics',
    icon: Globe,
    children: [
      { title: 'AD/AS Equilibrium', href: '/as-macro/ad-as' },
      { title: 'Inflation', href: '/as-macro/inflation' },
      { title: 'International Trade', href: '/as-macro/international-trade' },
      { title: 'Balance of Payments', href: '/as-macro/balance-of-payments' },
    ],
  },
  {
    title: 'A2 Macroeconomics',
    icon: TrendingUp,
    children: [
      { title: 'Money & Banking', href: '/a2-macro/money-banking' },
      { title: 'Unemployment & Phillips Curve', href: '/a2-macro/unemployment-growth' },
      { title: 'Economic Development', href: '/a2-macro/development' },
      { title: 'Economic Efficiency', href: '/a2-micro/economic-efficiency' },
    ],
  },
  {
    title: 'Govt. Macro Intervention',
    icon: Landmark,
    children: [
      { title: 'Policy Aims & Objectives', href: '/a2-macro/policy-objectives' },
      { title: 'Macroeconomic Policy', href: '/as-macro/policy' },
      { title: 'Keynesian Theory', href: '/a2-macro/national-income' },
    ],
  },
  {
    title: 'AS Microeconomics',
    icon: Scale,
    children: [
      { title: 'Basic Economic Ideas', href: '/basic-economic-ideas' },
      { title: 'The Price System', href: '/price-system' },
      { title: 'Elasticities', href: '/elasticities' },
      { title: 'Market Failure', href: '/market-failure' },
    ],
  },
  {
    title: 'A2 Microeconomics',
    icon: TrendingUp,
    children: [
      { title: 'Utility & Consumer Choice', href: '/a2-micro/utility-consumer-choice' },
      { title: 'Production & Costs', href: '/a2-micro/production-costs' },
      { title: 'Market Structures', href: '/a2-micro/market-structures' },
      { title: 'Labor Market', href: '/a2-micro/labor-market' },
    ],
  },
];

const FloatingDock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user } = useAuth();
  const lectureLocked = !user;


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
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] hidden lg:block pointer-events-auto"
      >
        <div className="floating-dock flex items-center gap-1 px-3 py-2">
          {/* Logo with glow */}
          <Link to="/" className="flex items-center gap-2.5 px-3 py-1.5 mr-3 group">
            <div className="relative">
              <img src={logoImage} alt="EconNexus" className="h-[50px] w-auto object-contain relative z-10 rounded-lg" />
              <div className="absolute inset-0 bg-neon-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors">
                EconNexus
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider">
                
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
              {item.href ? (
                <Link
                  to={item.href}
                  className={cn(
                    "dock-item flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all duration-150 pointer-events-auto",
                    "active:scale-95 active:shadow-[0_0_12px_rgba(0,242,255,0.4)]",
                    isActive(item.href) || isParentActive(item)
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
              ) : (
                <button
                  onClick={() => item.scrollTo && scrollToSection(item.scrollTo)}
                  className="dock-item flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer hover:text-secondary pointer-events-auto"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium font-display">{item.title}</span>
                </button>
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

      {/* Mobile Menu Button - Touch-friendly 44x44px target */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-3 right-3 z-[9999] lg:hidden floating-dock p-3 touch-target pointer-events-auto"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        className="fixed top-3 left-3 z-[9999] lg:hidden pointer-events-auto"
      >
        <Link to="/" className="floating-dock flex items-center gap-2 px-3 py-2 touch-target">
          <img src={logoImage} alt="EconNexus" className="h-8 md:h-9 w-auto object-contain rounded" />
          <span className="font-display text-xs md:text-sm font-semibold text-neon-cyan">EconNexus</span>
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
            {/* Glassmorphic Backdrop */}
            <div 
              className="absolute inset-0 bg-space-void/80 backdrop-blur-[10px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="absolute right-0 top-0 h-full w-full sm:w-[340px] bg-space-void/90 backdrop-blur-[15px] border-l border-neon-cyan/20 overflow-y-auto safe-area-inset"
            >
              <div className="p-4 md:p-6 pt-16 md:pt-20">
                
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 md:mb-6" />

                {/* Quick Links - Touch-friendly */}
                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-space-elevated/50 border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 transition-all text-sm touch-target pointer-events-auto"
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/notes"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-neon-gold/10 border border-neon-gold/20 text-neon-gold hover:bg-neon-gold/20 transition-all text-sm touch-target pointer-events-auto"
                  >
                    <Library className="w-4 h-4" />
                    <span>Notes</span>
                  </Link>
                  <Link
                    to="/exam-intelligence"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/20 transition-all text-sm touch-target pointer-events-auto"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Exams</span>
                  </Link>
                </div>

                {/* Lecture Hub — locked until sign-in */}
                <Link
                  to={lectureLocked ? '/auth?redirect=/lecture-hub' : '/lecture-hub'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-3 px-4 py-3.5 mb-5 md:mb-6 rounded-xl border transition-all touch-target pointer-events-auto",
                    lectureLocked
                      ? "bg-space-void/60 border-neon-gold/25 text-neon-gold hover:border-neon-gold/60"
                      : "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Video className="w-4 h-4" />
                    <span className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Lecture Hub
                    </span>
                  </span>
                  {lectureLocked ? (
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]">
                      <Lock className="w-3.5 h-3.5" /> Locked
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neon-cyan/80">Open</span>
                  )}
                </Link>

                {/* Article Hub — locked until sign-in */}
                <Link
                  to={lectureLocked ? '/auth?redirect=/article-hub' : '/article-hub'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-3 px-4 py-3.5 mb-5 md:mb-6 rounded-xl border transition-all touch-target pointer-events-auto",
                    lectureLocked
                      ? "bg-space-void/60 border-neon-gold/25 text-neon-gold hover:border-neon-gold/60"
                      : "bg-neon-gold/10 border-neon-gold/30 text-neon-gold hover:bg-neon-gold/20"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Article Hub
                    </span>
                  </span>
                  {lectureLocked ? (
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]">
                      <Lock className="w-3.5 h-3.5" /> Locked
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neon-gold/80">Open</span>
                  )}
                </Link>

                {/* Assignment Architect & World Economics */}
                <div className="flex gap-2 mb-5 md:mb-6">
                  <Link
                    to="/assignment-architect"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/20 transition-all text-sm touch-target pointer-events-auto"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Architect</span>
                  </Link>
                  <Link
                    to="/world-economics"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-neon-gold/10 border border-neon-gold/20 text-neon-gold hover:bg-neon-gold/20 transition-all text-sm touch-target pointer-events-auto"
                  >
                    <Globe className="w-4 h-4" />
                    <span>World Econ</span>
                  </Link>
                </div>




                {/* TIERED NAVIGATION */}
                <div className="space-y-4">
                  {mobileMenuTiers.map((tier, tierIndex) => (
                    <div key={tier.title} className="group">
                      {/* Tier Header */}
                      <div className="flex items-center gap-2 px-2 py-2 mb-2">
                        <tier.icon className="w-4 h-4 text-neon-gold" />
                        <span className="text-xs font-semibold tracking-[0.15em] text-neon-gold uppercase">
                          {tier.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground ml-auto">
                          Tier {tierIndex + 2}
                        </span>
                      </div>
                      
                      {/* Tier Items - Touch-friendly 44px minimum height */}
                      <div className="space-y-1 pl-2 border-l border-neon-gold/20 ml-2">
                        {tier.children.map((item) => (
                          item.href ? (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "block px-3 md:px-4 py-3 md:py-2.5 text-sm rounded-lg transition-all touch-target",
                                isActive(item.href)
                                  ? "text-neon-cyan bg-neon-cyan/10"
                                  : "text-muted-foreground hover:text-white hover:bg-space-elevated/50"
                              )}
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <button
                              key={item.title}
                              onClick={() => scrollToSection(item.scrollTo!, true)}
                              className="w-full text-left px-3 md:px-4 py-3 md:py-2.5 text-sm rounded-lg text-muted-foreground hover:text-white hover:bg-space-elevated/50 transition-all touch-target"
                            >
                              {item.title}
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-5 md:my-6" />

                {/* Utility Links - Touch-friendly */}
                <div className="space-y-2">
                  <Link
                    to="/case-studies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 md:px-4 py-3 rounded-xl text-muted-foreground hover:bg-space-elevated hover:text-white transition-all touch-target"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-medium">Case Studies</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Owner Profile Drawer */}
      <OwnerProfileDrawer isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};

export default FloatingDock;
