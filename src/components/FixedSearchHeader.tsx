import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GlobalSearch from './GlobalSearch';

const FixedSearchHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999 }}
      className={cn(
        "py-4 md:py-5",
        "bg-background/95 backdrop-blur-xl",
        "transition-all duration-300",
        isScrolled 
          ? "border-b border-neon-cyan/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
          : "border-b border-transparent"
      )}
    >
      <GlobalSearch />
    </motion.div>
  );
};

export default FixedSearchHeader;
