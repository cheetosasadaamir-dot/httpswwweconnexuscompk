import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── CONFIG ───────────────────────────────────────────────
const TOTAL_DURATION = 5500;
const FOG_EMERGE_DURATION = 2500;
const SWEEP_INTERVAL = 1500;
const REVEAL_START = 3000;
const REVEAL_DURATION = 1500;

const NODE_COUNT_DESKTOP = 60;
const NODE_COUNT_MOBILE = 25;

// ─── TYPES ────────────────────────────────────────────────
interface DataNode {
  x: number; y: number; z: number;
  size: number;
  speed: number;
  angle: number;
  brightness: number;
  pulseOffset: number;
}

// ─── HELPERS ──────────────────────────────────────────────
const isMobileDevice = () =>
  typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android|iPad|iPhone/i.test(navigator.userAgent));

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
const easeInQuart = (t: number) => t * t * t * t;

// ─── COMPONENT ────────────────────────────────────────────
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'emerging' | 'holding' | 'revealing' | 'done'>('emerging');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTimeRef = useRef(0);
  const rafRef = useRef(0);
  const nodesRef = useRef<DataNode[]>([]);
  const sweepRef = useRef(0);
  const mobile = useMemo(() => isMobileDevice(), []);

  // ── Initialize floating data-nodes ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const count = mobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: 0.3 + Math.random() * 0.7,
      size: 2 + Math.random() * 4,
      speed: 0.15 + Math.random() * 0.35,
      angle: Math.random() * Math.PI * 2,
      brightness: 40 + Math.random() * 30,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    startTimeRef.current = performance.now();
  }, [mobile]);

  // ── Animation loop ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const render = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ── Deep navy gradient background ──
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.8);
      bgGrad.addColorStop(0, '#001a3d');
      bgGrad.addColorStop(0.5, '#00142d');
      bgGrad.addColorStop(1, '#000a1a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Fog emergence opacity ──
      const fogProgress = clamp(elapsed / FOG_EMERGE_DURATION, 0, 1);
      const fogEase = easeOutQuart(fogProgress);

      // ── Volumetric fog layers ──
      for (let i = 0; i < 3; i++) {
        const fogY = h * (0.3 + i * 0.15);
        const fogAlpha = (1 - fogEase) * 0.3 * (1 - i * 0.2);
        if (fogAlpha > 0.01) {
          const fogGrad = ctx.createRadialGradient(w / 2, fogY, 0, w / 2, fogY, w * 0.6);
          fogGrad.addColorStop(0, `rgba(0, 30, 80, ${fogAlpha})`);
          fogGrad.addColorStop(0.6, `rgba(0, 20, 50, ${fogAlpha * 0.5})`);
          fogGrad.addColorStop(1, 'rgba(0, 10, 30, 0)');
          ctx.fillStyle = fogGrad;
          ctx.fillRect(0, 0, w, h);
        }
      }

      // ── Floating data-nodes (navy blue cubes) ──
      const nodeAlpha = clamp(fogEase * 1.5, 0, 1);
      nodesRef.current.forEach(node => {
        // Slow fluid motion
        node.angle += node.speed * 0.003;
        node.x += Math.cos(node.angle) * node.speed * 0.5;
        node.y += Math.sin(node.angle * 0.7) * node.speed * 0.3;

        // Wrap around
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;

        const pulse = 0.6 + 0.4 * Math.sin(elapsed * 0.002 + node.pulseOffset);
        const s = node.size * node.z;
        const alpha = nodeAlpha * node.z * pulse * 0.8;

        // Reveal fadeout
        let revealFade = 1;
        if (elapsed >= REVEAL_START) {
          revealFade = 1 - clamp((elapsed - REVEAL_START) / REVEAL_DURATION, 0, 1);
        }

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, s * 4);
        glow.addColorStop(0, `rgba(0, 100, 200, ${alpha * 0.4 * revealFade})`);
        glow.addColorStop(1, 'rgba(0, 50, 120, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(node.x - s * 4, node.y - s * 4, s * 8, s * 8);

        // Cube shape (rotated square)
        ctx.save();
        ctx.translate(node.x, node.y);
        ctx.rotate(elapsed * 0.0005 + node.pulseOffset);
        ctx.fillStyle = `rgba(0, 120, 220, ${alpha * 0.9 * revealFade})`;
        ctx.fillRect(-s / 2, -s / 2, s, s);
        // Highlight edge
        ctx.strokeStyle = `rgba(100, 180, 255, ${alpha * 0.6 * revealFade})`;
        ctx.lineWidth = 0.5;
        ctx.strokeRect(-s / 2, -s / 2, s, s);
        ctx.restore();
      });

      // ── Connection lines between nearby nodes ──
      const maxDist = mobile ? 80 : 120;
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const a = nodesRef.current[i];
          const b = nodesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            let revealFade = 1;
            if (elapsed >= REVEAL_START) {
              revealFade = 1 - clamp((elapsed - REVEAL_START) / REVEAL_DURATION, 0, 1);
            }
            const lineAlpha = (1 - dist / maxDist) * 0.15 * nodeAlpha * revealFade;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 100, 200, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // ── Light sweep across center ──
      sweepRef.current = (elapsed % SWEEP_INTERVAL) / SWEEP_INTERVAL;
      const sweepX = sweepRef.current * w * 1.4 - w * 0.2;
      const sweepAlpha = fogEase * 0.12;
      if (sweepAlpha > 0 && elapsed < REVEAL_START + REVEAL_DURATION) {
        let revealFade = 1;
        if (elapsed >= REVEAL_START) {
          revealFade = 1 - clamp((elapsed - REVEAL_START) / REVEAL_DURATION, 0, 1);
        }
        const sweepGrad = ctx.createLinearGradient(sweepX - 80, 0, sweepX + 80, 0);
        sweepGrad.addColorStop(0, 'rgba(0, 60, 150, 0)');
        sweepGrad.addColorStop(0.5, `rgba(60, 140, 255, ${sweepAlpha * revealFade})`);
        sweepGrad.addColorStop(1, 'rgba(0, 60, 150, 0)');
        ctx.fillStyle = sweepGrad;
        ctx.fillRect(sweepX - 80, h * 0.3, 160, h * 0.4);
      }

      // ── Ambient glow at center ──
      const centerGlow = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.35);
      const centerAlpha = fogEase * 0.08;
      centerGlow.addColorStop(0, `rgba(0, 80, 180, ${centerAlpha})`);
      centerGlow.addColorStop(0.5, `rgba(0, 40, 100, ${centerAlpha * 0.3})`);
      centerGlow.addColorStop(1, 'rgba(0, 20, 60, 0)');
      ctx.fillStyle = centerGlow;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, w * 0.35, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mobile]);

  // ── Phase sequencing ──
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('holding'), FOG_EMERGE_DURATION);
    const t2 = setTimeout(() => setPhase('revealing'), REVEAL_START);
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, TOTAL_DURATION);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === 'done') return null;

  const isRevealing = phase === 'revealing';

  return (
    <AnimatePresence>
      <motion.div
        key="splash-navy"
        className="fixed inset-0 z-[9999] overflow-hidden"
        style={{ background: '#00142d' }}
        initial={{ opacity: 1 }}
        animate={isRevealing ? {
          opacity: 0,
          scale: 1.15,
          filter: 'blur(12px)',
        } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={isRevealing ? { duration: 1.4, ease: [0.76, 0, 0.24, 1] } : { duration: 0.1 }}
      >
        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
        />

        {/* Main title — emerges from fog */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ perspective: '1200px' }}
        >
          {/* 3D Extruded Title */}
          <motion.h1
            className="select-none text-center"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontWeight: 700,
              fontSize: mobile ? 'clamp(1.4rem, 7vw, 2.2rem)' : 'clamp(2.2rem, 5vw, 4.2rem)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #e8edf5 0%, #8899b3 40%, #4a6080 70%, #2a3d5c 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              filter: 'drop-shadow(0 2px 4px rgba(0,40,100,0.6)) drop-shadow(0 8px 20px rgba(0,20,60,0.4))',
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0, y: 40, rotateX: 15, scale: 0.92 }}
            animate={
              isRevealing
                ? { opacity: 0, y: -30, scale: 1.1 }
                : { opacity: 1, y: 0, rotateX: 0, scale: 1 }
            }
            transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Welcome to Econ Nexus
          </motion.h1>

          {/* Chrome text shadow layer for 3D depth */}
          <motion.div
            className="absolute select-none text-center pointer-events-none"
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontWeight: 700,
              fontSize: mobile ? 'clamp(1.4rem, 7vw, 2.2rem)' : 'clamp(2.2rem, 5vw, 4.2rem)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(100,140,200,0.15) 0%, rgba(40,60,100,0.08) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transform: 'translateY(3px) translateX(1px)',
              filter: 'blur(1px)',
            }}
            initial={{ opacity: 0 }}
            animate={isRevealing ? { opacity: 0 } : { opacity: 0.6 }}
            transition={{ duration: 2.5, delay: 0.3 }}
          >
            Welcome to Econ Nexus
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="select-none text-center mt-6 md:mt-8"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: mobile ? 'clamp(0.55rem, 2.5vw, 0.85rem)' : 'clamp(0.75rem, 1.3vw, 1.1rem)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(130, 170, 220, 0.85)',
              textShadow: '0 0 30px rgba(0, 80, 180, 0.3)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isRevealing
                ? { opacity: 0, y: -15 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 1.2, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Where Academic Excellence Meets Artificial Intelligence
          </motion.p>
        </motion.div>

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,10,30,0.6) 100%)',
          }}
        />

        {/* Subtle scanline texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,80,180,0.1) 3px, rgba(0,80,180,0.1) 4px)',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
