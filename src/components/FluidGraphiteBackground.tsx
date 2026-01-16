import { useEffect, useRef } from 'react';

const FluidGraphiteBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Fluid mesh animation - creates warping effect
    const animate = () => {
      timeRef.current += 0.002;
      const time = timeRef.current;
      const scroll = scrollRef.current * 0.0005;

      // Clear canvas
      ctx.fillStyle = '#121212';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradient layers for depth (5D effect)
      const layers = [
        { scale: 0.8, speed: 0.3, opacity: 0.4, color1: '#000000', color2: '#1C1C1C' },
        { scale: 1.2, speed: 0.5, opacity: 0.3, color1: '#1C1C1C', color2: '#0F172A' },
        { scale: 1.6, speed: 0.7, opacity: 0.2, color1: '#0F172A', color2: '#121212' },
        { scale: 2.0, speed: 0.2, opacity: 0.15, color1: '#0a0a0a', color2: '#1a1a2e' },
      ];

      layers.forEach((layer, index) => {
        const offsetX = Math.sin(time * layer.speed + index) * 100 + scroll * 50 * (index + 1);
        const offsetY = Math.cos(time * layer.speed * 0.7 + index) * 80 + scroll * 30 * (index + 1);
        
        // Create flowing blob shapes
        for (let i = 0; i < 3; i++) {
          const blobX = (canvas.width * (0.3 + i * 0.2)) + Math.sin(time * layer.speed + i * 2) * 200 + offsetX;
          const blobY = (canvas.height * (0.3 + i * 0.2)) + Math.cos(time * layer.speed * 0.8 + i * 1.5) * 150 + offsetY;
          const radius = 300 * layer.scale + Math.sin(time * 0.5 + i) * 50;

          const gradient = ctx.createRadialGradient(blobX, blobY, 0, blobX, blobY, radius);
          gradient.addColorStop(0, hexToRgba(layer.color1, layer.opacity * 0.8));
          gradient.addColorStop(0.5, hexToRgba(layer.color2, layer.opacity * 0.4));
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      });

      // Add subtle wave distortion effect
      const waveHeight = 2;
      const waveFrequency = 0.005;
      ctx.globalCompositeOperation = 'overlay';
      
      for (let y = 0; y < canvas.height; y += 30) {
        const waveOffset = Math.sin(y * waveFrequency + time * 2) * waveHeight;
        ctx.fillStyle = `rgba(28, 28, 28, ${0.02 + Math.sin(y * 0.01 + time) * 0.01})`;
        ctx.fillRect(waveOffset, y, canvas.width, 1);
      }

      ctx.globalCompositeOperation = 'source-over';

      requestAnimationFrame(animate);
    };

    const hexToRgba = (hex: string, alpha: number): string => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Base charcoal gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #121212 0%, #0a0a0a 50%, #0F172A 100%)',
        }}
      />
      
      {/* Animated fluid mesh canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[1]"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.6,
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />
    </>
  );
};

export default FluidGraphiteBackground;
