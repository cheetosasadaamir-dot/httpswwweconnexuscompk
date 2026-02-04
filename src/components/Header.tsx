import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Briefcase, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo-macromicro.png';

interface NavLink {
  label: string;
  href?: string;
  scrollTo?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const navLinks: NavLink[] = [
  { label: 'Notes', href: '/notes', icon: BookOpen },
  { label: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { label: 'Diagram Bank', href: '/diagrams', icon: Image },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

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
        "fixed top-0 left-0 right-0 z-[1001] transition-all duration-500",
        isScrolled
          ? "bg-navy-deep/80 backdrop-blur-xl border-b border-silver/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logoImage}
              alt="EconNexus Logo"
              className="h-10 w-10 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="hidden sm:block">
              <span className="font-sans text-xl font-bold tracking-wide text-gradient group-hover:text-secondary transition-all">
                EconNe<span className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]">x</span>us
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href!}
                className={cn(
                  "relative flex items-center gap-2 text-sm font-medium transition-all duration-300 group",
                  location.pathname === link.href
                    ? "text-neon-cyan"
                    : "text-silver hover:text-neon-cyan hover:translate-x-0.5"
                )}
              >
                {link.icon && <link.icon className="w-4 h-4 transition-colors" />}
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-10 pr-4 py-2 rounded-full bg-muted/30 border border-silver/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/50 transition-all"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-silver hover:text-silver-bright"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                  <Link
                    to={link.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg text-white hover:text-neon-cyan hover:bg-neon-cyan/5 hover:translate-x-1 transition-all duration-300 group"
                  >
                    {link.icon && (
                      <link.icon className="w-5 h-5 text-silver group-hover:text-neon-cyan transition-colors" />
                    )}
                    <span className="font-medium tracking-wide">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="relative pt-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground mt-1.5" />
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-muted/30 border border-silver/10 text-sm"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
