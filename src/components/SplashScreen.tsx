import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Particle component for the background field
const PARTICLE_COUNT = 80;

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
}

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'shatter' | 'done'>('enter');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  // Generate particles once
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.3 + 0.1,
      angle: Math.random() * Math.PI * 2,
    }));
  }, []);

  useEffect(() => {
    particlesRef.current = particles;
  }, [particles]);

  // Canvas particle field with mouse reactivity
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());
      const mx = mouseRef.current.x * w();
      const my = mouseRef.current.y * h();

      particlesRef.current.forEach(p => {
        const px = p.x * w();
        const py = p.y * h();

        // Mouse repulsion
        const dx = px - mx;
        const dy = py - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;
        let offsetX = 0, offsetY = 0;
        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 30;
          offsetX = (dx / dist) * force;
          offsetY = (dy / dist) * force;
        }

        // Drift
        p.x += Math.cos(p.angle) * p.speed * 0.0003;
        p.y += Math.sin(p.angle) * p.speed * 0.0003;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        const finalX = px + offsetX;
        const finalY = py + offsetY;

        // Glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, p.size * 4);
        gradient.addColorStop(0, `hsla(185, 100%, 60%, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(185, 100%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(finalX, finalY, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = `hsla(185, 100%, 70%, ${p.opacity})`;
        ctx.arc(finalX, finalY, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle connection lines between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const ax = a.x * w(), ay = a.y * h();
          const bx = b.x * w(), by = b.y * h();
          const d = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(185, 100%, 50%, ${(1 - d / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // Phase sequencing
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 800);
    const t2 = setTimeout(() => setPhase('shatter'), 2500);
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  // Shatter particles for dissolve effect
  const shatterFragments = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 600,
      rotate: Math.random() * 720 - 360,
      scale: Math.random() * 0.5,
      delay: Math.random() * 0.3,
    })), []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{ background: 'hsl(0, 0%, 2%)' }}
        animate={phase === 'shatter' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, delay: phase === 'shatter' ? 0.4 : 0 }}
      >
        {/* Particle field canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ willChange: 'transform' }}
        />

        {/* Radial glow behind text */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* 3D Text Container */}
        <div className="relative z-10 text-center" style={{ perspective: '1200px' }}>
          {/* Main Title */}
          <motion.h1
            className="font-bold tracking-wider select-none"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              background: 'linear-gradient(135deg, hsl(185, 100%, 70%) 0%, hsl(0, 0%, 90%) 40%, hsl(185, 100%, 60%) 70%, hsl(43, 72%, 60%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px hsla(185, 100%, 50%, 0.3))',
              textShadow: 'none',
              willChange: 'transform, opacity',
            }}
            initial={{
              opacity: 0,
              rotateX: 40,
              rotateY: -15,
              z: -500,
              scale: 0.6,
            }}
            animate={phase === 'shatter' ? {
              opacity: 0,
              scale: 1.5,
              filter: 'blur(20px) drop-shadow(0 0 60px hsla(185, 100%, 50%, 0.8))',
            } : {
              opacity: 1,
              rotateX: 0,
              rotateY: 0,
              z: 0,
              scale: 1,
            }}
            transition={{
              duration: phase === 'shatter' ? 0.6 : 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            WELCOME TO ECON NEXUS
          </motion.h1>

          {/* Neon Pulse Line */}
          <motion.div
            className="mx-auto my-4"
            style={{
              height: '2px',
              background: 'linear-gradient(90deg, transparent, hsl(185, 100%, 50%), hsl(43, 72%, 53%), hsl(185, 100%, 50%), transparent)',
              willChange: 'transform, opacity',
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={phase === 'shatter'
              ? { opacity: 0, scaleX: 3 }
              : { width: '80%', opacity: 1 }
            }
            transition={{ duration: phase === 'shatter' ? 0.4 : 0.8, delay: phase === 'shatter' ? 0 : 0.6 }}
          />

          {/* Sub-header */}
          <motion.p
            className="tracking-widest uppercase select-none"
            style={{
              fontSize: 'clamp(0.7rem, 1.8vw, 1.1rem)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: 'hsl(0, 0%, 55%)',
              letterSpacing: '0.3em',
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={phase === 'shatter'
              ? { opacity: 0, y: -30, filter: 'blur(10px)' }
              : { opacity: 1, y: 0 }
            }
            transition={{ duration: phase === 'shatter' ? 0.4 : 0.8, delay: phase === 'shatter' ? 0.1 : 0.9 }}
          >
            The Future of Academic Intelligence
          </motion.p>

          {/* Shatter fragments */}
          {phase === 'shatter' && shatterFragments.map(f => (
            <motion.div
              key={f.id}
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                background: `hsla(185, 100%, ${50 + Math.random() * 30}%, ${0.6 + Math.random() * 0.4})`,
                boxShadow: `0 0 ${8 + Math.random() * 12}px hsla(185, 100%, 50%, 0.5)`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: f.x,
                y: f.y,
                opacity: 0,
                scale: f.scale,
                rotate: f.rotate,
              }}
              transition={{
                duration: 0.8,
                delay: f.delay,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Glitch overlay flicker */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(transparent 50%, hsla(185, 100%, 50%, 0.02) 50%)',
            backgroundSize: '100% 4px',
            mixBlendMode: 'overlay',
          }}
          animate={{ opacity: [0, 0.4, 0, 0.2, 0] }}
          transition={{ duration: 0.3, delay: 0.4, times: [0, 0.2, 0.4, 0.6, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
