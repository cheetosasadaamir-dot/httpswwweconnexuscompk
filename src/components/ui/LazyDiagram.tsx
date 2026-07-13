import { useState, useEffect, useRef, ReactNode, Suspense, lazy, ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LazyDiagramProps {
  children: ReactNode;
  fallbackHeight?: string;
  className?: string;
}

/**
 * Intersection Observer based lazy loader for heavy diagram components
 * Only renders content when scrolled into viewport
 */
export const LazyDiagram = ({ 
  children, 
  fallbackHeight = '300px',
  className = ''
}: LazyDiagramProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, keep it rendered
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setHasLoaded(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className={className}>
      {!isVisible ? (
        <div 
          className="flex items-center justify-center bg-space-deep/50 rounded-xl border border-border/20"
          style={{ height: fallbackHeight }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Loader2 className="w-6 h-6 animate-spin text-primary/50" />
            <span className="text-xs">Loading visualization...</span>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hasLoaded ? 1 : 0, y: hasLoaded ? 0 : 10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

/**
 * HOC for lazy loading diagram components
 */
export function withLazyLoad<P extends object>(
  Component: ComponentType<P>,
  fallbackHeight?: string
) {
  return function LazyLoadedComponent(props: P) {
    return (
      <LazyDiagram fallbackHeight={fallbackHeight}>
        <Component {...props} />
      </LazyDiagram>
    );
  };
}

/**
 * Dynamic import wrapper for diagram components
 */
export const createLazyDiagram = (
  importFn: () => Promise<{ default: ComponentType<unknown> }>,
  fallbackHeight = '300px'
) => {
  const LazyComponent = lazy(importFn);
  
  return function DynamicDiagram(props: Record<string, unknown>) {
    return (
      <LazyDiagram fallbackHeight={fallbackHeight}>
        <Suspense 
          fallback={
            <div 
              className="flex items-center justify-center bg-space-deep/50 rounded-xl"
              style={{ height: fallbackHeight }}
            >
              <Loader2 className="w-6 h-6 animate-spin text-primary/50" />
            </div>
          }
        >
          <LazyComponent {...props} />
        </Suspense>
      </LazyDiagram>
    );
  };
};

export default LazyDiagram;
