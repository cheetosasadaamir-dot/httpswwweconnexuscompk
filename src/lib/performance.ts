/**
 * Performance Monitoring & Optimization Utilities
 * For EconNexus high-concurrency infrastructure
 */

// ============================================================================
// PERFORMANCE METRICS
// ============================================================================

interface PerformanceMetrics {
  fcp: number | null;  // First Contentful Paint
  lcp: number | null;  // Largest Contentful Paint
  fid: number | null;  // First Input Delay
  cls: number | null;  // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

const metrics: PerformanceMetrics = {
  fcp: null,
  lcp: null,
  fid: null,
  cls: null,
  ttfb: null,
};

/**
 * Initialize Core Web Vitals monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // First Contentful Paint
  try {
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        metrics.fcp = fcp.startTime;
      }
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
  } catch (e) {
    console.debug('FCP observer not supported');
  }

  // Largest Contentful Paint
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metrics.lcp = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.debug('LCP observer not supported');
  }

  // First Input Delay
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstInput = entries[0] as PerformanceEventTiming;
      if (firstInput) {
        metrics.fid = firstInput.processingStart - firstInput.startTime;
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.debug('FID observer not supported');
  }

  // Cumulative Layout Shift
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const layoutShift = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
          metrics.cls = clsValue;
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.debug('CLS observer not supported');
  }

  // Time to First Byte
  try {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry) {
      metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
    }
  } catch (e) {
    console.debug('TTFB measurement not supported');
  }
}

export function getMetrics(): PerformanceMetrics {
  return { ...metrics };
}

// ============================================================================
// IMAGE OPTIMIZATION
// ============================================================================

/**
 * Check if browser supports WebP format
 */
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, priority: 'high' | 'low' = 'high'): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.setAttribute('fetchpriority', priority);
  document.head.appendChild(link);
}

/**
 * Lazy load images with IntersectionObserver
 */
export function createImageLazyLoader(
  rootMargin = '100px',
  threshold = 0.1
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.dataset.src;
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
          }
        }
      });
    },
    { rootMargin, threshold }
  );
}

// ============================================================================
// RESOURCE HINTS
// ============================================================================

/**
 * Add DNS prefetch for external domains
 */
export function addDnsPrefetch(domain: string): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = domain;
  document.head.appendChild(link);
}

/**
 * Add preconnect for critical third-party origins
 */
export function addPreconnect(origin: string, crossOrigin = true): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = origin;
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

// ============================================================================
// MEMORY MANAGEMENT
// ============================================================================

/**
 * Check available memory and adjust features accordingly
 */
export function getMemoryStatus(): { limited: boolean; usage?: number } {
  if (typeof navigator === 'undefined') {
    return { limited: false };
  }

  const nav = navigator as Navigator & { deviceMemory?: number };
  
  // Check device memory (Chrome only)
  if (nav.deviceMemory !== undefined) {
    return {
      limited: nav.deviceMemory < 4,
      usage: nav.deviceMemory,
    };
  }

  return { limited: false };
}

/**
 * Request idle callback with fallback
 */
export function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if (typeof window === 'undefined') {
    return 0;
  }
  
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  
  // Fallback to setTimeout
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => 50,
    });
  }, 1) as unknown as number;
}

// ============================================================================
// BUNDLE OPTIMIZATION
// ============================================================================

/**
 * Dynamically import a module when idle
 */
export async function importWhenIdle<T>(
  importFn: () => Promise<T>,
  timeout = 2000
): Promise<T> {
  return new Promise((resolve, reject) => {
    requestIdleCallback(
      async () => {
        try {
          const module = await importFn();
          resolve(module);
        } catch (error) {
          reject(error);
        }
      },
      { timeout }
    );
  });
}
