import { useState, useEffect } from 'react';

export type PerformanceTier = 'high' | 'medium' | 'low';

interface DevicePerformance {
  tier: PerformanceTier;
  isMobile: boolean;
  isLowPower: boolean;
  gpuTier: number;
  particleMultiplier: number;
  enableBlur: boolean;
  enableTrails: boolean;
  maxFps: number;
}

/**
 * Device Performance Detection Hook
 * Analyzes device capabilities for optimal rendering settings
 */
export const useDevicePerformance = (): DevicePerformance => {
  const [performance, setPerformance] = useState<DevicePerformance>({
    tier: 'high',
    isMobile: false,
    isLowPower: false,
    gpuTier: 3,
    particleMultiplier: 1,
    enableBlur: true,
    enableTrails: true,
    maxFps: 60,
  });

  useEffect(() => {
    const detectPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

      // Check for low-power mode indicators
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
      const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g';
      const saveData = connection?.saveData || false;
      
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 4;
      const isLowCores = cores <= 2;
      
      // Check device memory if available
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
      const isLowMemory = memory <= 2;
      
      // Check for battery saver mode
      let isLowPower = false;
      if ('getBattery' in navigator) {
        (navigator.getBattery as () => Promise<{ charging: boolean; level: number }>)().then(battery => {
          if (!battery.charging && battery.level < 0.2) {
            isLowPower = true;
            updateSettings('low', true);
          }
        }).catch(() => {});
      }

      // Determine performance tier
      let tier: PerformanceTier = 'high';
      if (isMobile || isLowMemory || isLowCores || isSlowConnection || saveData) {
        tier = isLowMemory || isSlowConnection ? 'low' : 'medium';
      }

      updateSettings(tier, isLowPower, isMobile);
    };

    const updateSettings = (tier: PerformanceTier, isLowPower: boolean, isMobile = false) => {
      const settings: DevicePerformance = {
        tier,
        isMobile,
        isLowPower,
        gpuTier: tier === 'high' ? 3 : tier === 'medium' ? 2 : 1,
        particleMultiplier: tier === 'high' ? 1 : tier === 'medium' ? 0.5 : 0.25,
        enableBlur: tier !== 'low',
        enableTrails: tier === 'high',
        maxFps: tier === 'high' ? 60 : tier === 'medium' ? 30 : 24,
      };
      setPerformance(settings);
    };

    detectPerformance();
    
    // Re-check on resize
    window.addEventListener('resize', detectPerformance);
    return () => window.removeEventListener('resize', detectPerformance);
  }, []);

  return performance;
};

// Utility to throttle frame updates
export const createFrameThrottler = (maxFps: number) => {
  const frameInterval = 1000 / maxFps;
  let lastFrameTime = 0;

  return (currentTime: number): boolean => {
    const elapsed = currentTime - lastFrameTime;
    if (elapsed >= frameInterval) {
      lastFrameTime = currentTime - (elapsed % frameInterval);
      return true;
    }
    return false;
  };
};
