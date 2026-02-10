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
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/econnexus-logo.jpeg';
import OwnerProfileDrawer from './OwnerProfileDrawer';

const OWNER_EMAIL = 'unifom7@gmail.com';

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
  { title: 'Case Studies', href: '/case-studies', icon: BookOpen },
  { title: 'Freemium Pack', href: '/freemium-pack', icon: GraduationCap },
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
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('owner_verified');
    setIsOwner(saved === OWNER_EMAIL);
  }, []);

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
              <img src={logoImage} alt="EconNexus" className="h-[50px] w-auto object-contain relative z-10 rounded-lg" />
              <div className="absolute inset-0 bg-neon-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors">
                EconNexus
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

          {/* Admin Panel - owner only */}
          {isOwner && (
            <Link
              to="/owner-dashboard"
              className="dock-item flex items-center gap-2 px-3.5 py-2.5 rounded-xl ml-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300"
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium font-display">Admin</span>
            </Link>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Button - Touch-friendly 44x44px target */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-3 right-3 z-50 lg:hidden floating-dock p-3 touch-target"
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
        className="fixed top-3 left-3 z-50 lg:hidden"
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
                
                {/* TIER 1: Owner Profile - Premium Entry */}
                <div className="mb-5 md:mb-6">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsProfileOpen(true);
                    }}
                    className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-neon-cyan/10 to-neon-cyan/5 border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all group shadow-[0_0_20px_rgba(0,242,255,0.15)] touch-target"
                  >
                    <div className="relative">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-space-elevated flex items-center justify-center border border-neon-cyan/30">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-neon-cyan" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-md animate-pulse" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-neon-cyan/80 uppercase block">
                        Tier 1
                      </span>
                      <span className="font-display font-semibold text-sm md:text-base text-white group-hover:text-neon-cyan transition-colors">
                        OWNER PROFILE
                      </span>
                    </div>
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 md:mb-6" />

                {/* Quick Links - Touch-friendly */}
                <div className="flex gap-2 mb-5 md:mb-6">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-space-elevated/50 border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 transition-all text-sm touch-target"
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                  <button
                    onClick={() => scrollToSection('notes-repository', true)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-neon-gold/10 border border-neon-gold/20 text-neon-gold hover:bg-neon-gold/20 transition-all text-sm touch-target"
                  >
                    <Library className="w-4 h-4" />
                    <span>Notes</span>
                  </button>
                  {isOwner && (
                    <Link
                      to="/owner-dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-all text-sm touch-target"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Admin</span>
                    </Link>
                  )}
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
                    to="/freemium-pack"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 md:px-4 py-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-all touch-target"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span className="font-medium">Freemium Pack — $7</span>
                  </Link>
                  <Link
                    to="/case-studies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 md:px-4 py-3 rounded-xl text-muted-foreground hover:bg-space-elevated hover:text-white transition-all touch-target"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-medium">Case Studies</span>
                  </Link>
                  <Link
                    to="/#glossary"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 md:px-4 py-3 rounded-xl text-muted-foreground hover:bg-space-elevated hover:text-white transition-all touch-target"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-medium">Glossary</span>
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
