import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, BookOpen, Briefcase, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAuthGate } from '@/hooks/useAuthGate';
import GlobalSearch from './GlobalSearch';
import EconNexusLogo from './EconNexusLogo';
import UserProfileDropdown from './UserProfileDropdown';

interface NavLink {
  label: string;
  href?: string;
  scrollTo?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const navLinks: NavLink[] = [
  { label: 'Notes', href: '/notes', icon: BookOpen },
  { label: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { label: 'Exam Intelligence', href: '/exam-intelligence', icon: Briefcase },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, requireAuth } = useAuthGate();

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-[9999] transition-all duration-500 pointer-events-auto",
        isScrolled
          ? "bg-[rgba(0,30,60,0.85)] backdrop-blur-xl border-b border-[rgba(58,141,255,0.1)] shadow-lg shadow-black/20 py-0"
          : "bg-[rgba(0,30,60,0.95)] backdrop-blur-xl py-1"
      )}
    >
      <div className="w-[95%] max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          isScrolled ? "h-12 lg:h-14" : "h-16 lg:h-20"
        )}>
          {/* Logo */}
          <div className="sm:hidden">
            <EconNexusLogo size="sm" showText={false} useImage={true} />
          </div>
          <div className="hidden sm:block">
            <EconNexusLogo size="sm" useImage={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (isAuthenticated) {
                    navigate(link.href!);
                  } else {
                    requireAuth(() => navigate(link.href!));
                  }
                }}
                className={cn(
                  "relative flex items-center gap-2 text-sm font-medium transition-all duration-150 group pointer-events-auto nav-instant-click bg-transparent border-none cursor-pointer",
                  "active:scale-95 active:shadow-[0_0_12px_rgba(0,242,255,0.4)]",
                  location.pathname === link.href
                    ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]"
                    : "text-silver hover:text-neon-cyan hover:translate-x-0.5"
                )}
                style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
              >
                {link.icon && <link.icon className="w-4 h-4 transition-colors" />}
                {link.label}
                {!isAuthenticated && <Lock className="w-3 h-3 text-muted-foreground" />}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Integrated Search Bar */}
          <div className="hidden md:block flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-4">
            <GlobalSearch compact />
          </div>

          {/* User Profile & Mobile Menu */}
          <div className="flex items-center gap-2">
            <UserProfileDropdown />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-silver hover:text-silver-bright"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-deep/95 backdrop-blur-xl border-b border-silver/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (isAuthenticated) {
                        navigate(link.href!);
                      } else {
                        requireAuth(() => navigate(link.href!));
                      }
                    }}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg text-white hover:text-neon-cyan hover:bg-neon-cyan/5 hover:translate-x-1 transition-all duration-150 group nav-instant-click w-full text-left bg-transparent border-none cursor-pointer"
                  >
                    {link.icon && (
                      <link.icon className="w-5 h-5 text-silver group-hover:text-neon-cyan transition-colors" />
                    )}
                    <span className="font-medium tracking-wide">{link.label}</span>
                    {!isAuthenticated && (
                      <Lock className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
                    )}
                  </button>
                </motion.div>
              ))}
              <div className="pt-3">
                <GlobalSearch compact />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
