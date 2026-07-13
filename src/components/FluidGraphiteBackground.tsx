import { useEffect, useRef } from 'react';

const FluidGraphiteBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 5D Fluid silk animation - creates liquid silk/dark smoke effect
    const animate = () => {
      timeRef.current += 0.0008; // Slower for silk-like movement
      const time = timeRef.current;
      const scroll = scrollRef.current * 0.0003;
      const mouse = mouseRef.current;

      // Base charcoal fill (#101010)
      ctx.fillStyle = '#101010';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple fluid silk layers for 5D depth
      const layers = [
        { scale: 1.0, speed: 0.15, opacity: 0.35, color1: '#000000', color2: '#1e293b' },
        { scale: 1.4, speed: 0.25, opacity: 0.25, color1: '#1e293b', color2: '#121212' },
        { scale: 1.8, speed: 0.35, opacity: 0.18, color1: '#121212', color2: '#0a0a0a' },
        { scale: 2.2, speed: 0.12, opacity: 0.12, color1: '#0f0f0f', color2: '#1e293b' },
        { scale: 2.8, speed: 0.08, opacity: 0.08, color1: '#1a1a2e', color2: '#000000' },
      ];

      // Mouse influence factor
      const mouseInfluence = {
        x: (mouse.x / canvas.width - 0.5) * 60,
        y: (mouse.y / canvas.height - 0.5) * 40,
      };

      layers.forEach((layer, index) => {
        // Silk-like flowing motion with mouse parallax
        const parallaxFactor = (index + 1) * 0.15;
        const offsetX = Math.sin(time * layer.speed + index * 1.2) * 150 
          + scroll * 80 * (index + 1) 
          + mouseInfluence.x * parallaxFactor;
        const offsetY = Math.cos(time * layer.speed * 0.6 + index * 0.8) * 120 
          + scroll * 50 * (index + 1)
          + mouseInfluence.y * parallaxFactor;
        
        // Create flowing smoke/silk blob shapes
        for (let i = 0; i < 4; i++) {
          const phase = time * layer.speed + i * 1.5;
          const blobX = (canvas.width * (0.2 + i * 0.2)) 
            + Math.sin(phase) * 250 
            + Math.cos(phase * 0.7) * 100
            + offsetX;
          const blobY = (canvas.height * (0.25 + i * 0.15)) 
            + Math.cos(phase * 0.8) * 180 
            + Math.sin(phase * 0.5) * 80
            + offsetY;
          
          // Dynamic radius for breathing effect
          const radius = 400 * layer.scale 
            + Math.sin(time * 0.3 + i * 0.7) * 80
            + Math.cos(time * 0.5 + i) * 40;

          const gradient = ctx.createRadialGradient(blobX, blobY, 0, blobX, blobY, radius);
          gradient.addColorStop(0, hexToRgba(layer.color1, layer.opacity));
          gradient.addColorStop(0.3, hexToRgba(layer.color2, layer.opacity * 0.6));
          gradient.addColorStop(0.6, hexToRgba(layer.color1, layer.opacity * 0.3));
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      });

      // Silk wave distortion overlay
      ctx.globalCompositeOperation = 'overlay';
      
      for (let y = 0; y < canvas.height; y += 40) {
        const wavePhase = y * 0.003 + time * 1.5;
        const waveOffset = Math.sin(wavePhase) * 3 + Math.cos(wavePhase * 0.7) * 2;
        const opacity = 0.015 + Math.sin(y * 0.008 + time * 0.5) * 0.008;
        ctx.fillStyle = `rgba(30, 41, 59, ${opacity})`;
        ctx.fillRect(waveOffset, y, canvas.width, 2);
      }

      // Horizontal silk threads
      for (let x = 0; x < canvas.width; x += 60) {
        const threadPhase = x * 0.002 + time * 0.8;
        const threadOffset = Math.sin(threadPhase) * 2;
        const opacity = 0.01 + Math.cos(x * 0.005 + time * 0.3) * 0.005;
        ctx.fillStyle = `rgba(18, 18, 18, ${opacity})`;
        ctx.fillRect(x, threadOffset, 1, canvas.height);
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
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Deep charcoal base (#101010) */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #101010 0%, #0a0a0a 40%, #121212 70%, #1e293b 100%)',
        }}
      />
      
      {/* 5D Fluid silk mesh canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[1]"
        style={{ 
          mixBlendMode: 'soft-light',
          opacity: 0.85,
        }}
      />
      
      {/* Premium noise texture overlay */}
      <div 
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      {/* Vignette overlay for depth */}
      <div 
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </>
  );
};

export default FluidGraphiteBackground;
