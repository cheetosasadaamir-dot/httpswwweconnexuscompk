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
      className={cn(
        "fixed top-16 md:top-20 left-0 right-0 z-[1000]",
        "py-4 md:py-5",
        "bg-space-void/80 backdrop-blur-xl",
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
