import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── CONFIG ───────────────────────────────────────────────
const TOTAL_DURATION = 4200; // total splash ms
const ASSEMBLY_START = 200;
const ASSEMBLY_DURATION = 1800;
const HOLD_UNTIL = 2800;
const SHATTER_START = 2800;
const SHATTER_DURATION = 1400;

const PARTICLE_COUNT_DESKTOP = 1200;
const PARTICLE_COUNT_MOBILE = 400;
const BOKEH_COUNT = 18;

// ─── TYPES ────────────────────────────────────────────────
interface AssemblyParticle {
  // start position (edge of screen)
  sx: number; sy: number;
  // target position (on the text)
  tx: number; ty: number;
  // current
  x: number; y: number;
  size: number;
  hue: number; // 185 (cyan) or 220 (cobalt)
  brightness: number;
  delay: number; // 0-1 stagger
  // shatter velocity
  vx: number; vy: number;
}

interface BokehOrb {
  x: number; y: number;
  size: number;
  hue: number;
  opacity: number;
  dx: number; dy: number;
}

// ─── HELPERS ──────────────────────────────────────────────
const isMobileDevice = () =>
  typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android|iPad|iPhone/i.test(navigator.userAgent));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInCubic = (t: number) => t * t * t;
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

/**
 * Samples target positions from text rendered onto an offscreen canvas.
 */
function sampleTextPositions(
  text: string,
  count: number,
  canvasW: number,
  canvasH: number,
  fontSize: number,
  yOffset: number
): { x: number; y: number }[] {
  const offscreen = document.createElement('canvas');
  offscreen.width = canvasW;
  offscreen.height = canvasH;
  const ctx = offscreen.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.font = `800 ${fontSize}px "Inter", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvasW / 2, canvasH / 2 + yOffset);

  const imageData = ctx.getImageData(0, 0, canvasW, canvasH);
  const pixels = imageData.data;
  const candidates: { x: number; y: number }[] = [];
  const step = Math.max(2, Math.floor(Math.sqrt((canvasW * canvasH) / (count * 8))));

  for (let y = 0; y < canvasH; y += step) {
    for (let x = 0; x < canvasW; x += step) {
      const idx = (y * canvasW + x) * 4;
      if (pixels[idx + 3] > 128) {
        candidates.push({ x, y });
      }
    }
  }

  // Shuffle and pick
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  return candidates.slice(0, count);
}

function generateEdgePosition(w: number, h: number): { x: number; y: number } {
  const edge = Math.floor(Math.random() * 4);
  switch (edge) {
    case 0: return { x: Math.random() * w, y: -50 };
    case 1: return { x: w + 50, y: Math.random() * h };
    case 2: return { x: Math.random() * w, y: h + 50 };
    default: return { x: -50, y: Math.random() * h };
  }
}

// ─── COMPONENT ────────────────────────────────────────────
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'assembling' | 'holding' | 'shattering' | 'done'>('assembling');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const startTimeRef = useRef(0);
  const rafRef = useRef(0);
  const particlesRef = useRef<AssemblyParticle[]>([]);
  const bokehRef = useRef<BokehOrb[]>([]);
  const mobile = useMemo(() => isMobileDevice(), []);
  const pulsePhaseRef = useRef(0);

  // ── Initialize particles from text sampling ──
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

    const fontSize = mobile ? Math.min(w * 0.09, 42) : Math.min(w * 0.065, 80);
    const pCount = mobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

    // Sample "ECON NEXUS" text positions
    const targets = sampleTextPositions('ECON NEXUS', pCount, w, h, fontSize, 0);

    const particles: AssemblyParticle[] = targets.map((t, i) => {
      const start = generateEdgePosition(w, h);
      return {
        sx: start.x, sy: start.y,
        tx: t.x, ty: t.y,
        x: start.x, y: start.y,
        size: Math.random() * 2.2 + 0.8,
        hue: Math.random() > 0.3 ? 185 : 220,
        brightness: 50 + Math.random() * 30,
        delay: (i / targets.length) * 0.6 + Math.random() * 0.15,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
      };
    });
    particlesRef.current = particles;

    // Bokeh orbs
    bokehRef.current = Array.from({ length: BOKEH_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 20 + Math.random() * 60,
      hue: Math.random() > 0.5 ? 185 : 43,
      opacity: 0.04 + Math.random() * 0.08,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
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
      ctx.clearRect(0, 0, w, h);

      // ── Bokeh background ──
      bokehRef.current.forEach(b => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.size) b.x = w + b.size;
        if (b.x > w + b.size) b.x = -b.size;
        if (b.y < -b.size) b.y = h + b.size;
        if (b.y > h + b.size) b.y = -b.size;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size);
        grad.addColorStop(0, `hsla(${b.hue}, 80%, 60%, ${b.opacity})`);
        grad.addColorStop(0.5, `hsla(${b.hue}, 80%, 50%, ${b.opacity * 0.4})`);
        grad.addColorStop(1, `hsla(${b.hue}, 80%, 40%, 0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── God rays from center ──
      const cx = w / 2;
      const cy = h / 2;
      const rayProgress = clamp((elapsed - ASSEMBLY_START) / ASSEMBLY_DURATION, 0, 1);
      if (rayProgress > 0.3) {
        const rayAlpha = Math.min((rayProgress - 0.3) * 0.12, 0.06);
        const rayCount = 8;
        for (let i = 0; i < rayCount; i++) {
          const angle = (i / rayCount) * Math.PI * 2 + elapsed * 0.0001;
          const length = Math.max(w, h) * 0.9;
          const spread = 0.08;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(
            cx + Math.cos(angle - spread) * length,
            cy + Math.sin(angle - spread) * length
          );
          ctx.lineTo(
            cx + Math.cos(angle + spread) * length,
            cy + Math.sin(angle + spread) * length
          );
          ctx.closePath();
          const rayGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, length);
          rayGrad.addColorStop(0, `hsla(185, 100%, 60%, ${rayAlpha})`);
          rayGrad.addColorStop(0.4, `hsla(185, 100%, 50%, ${rayAlpha * 0.5})`);
          rayGrad.addColorStop(1, 'hsla(185, 100%, 50%, 0)');
          ctx.fillStyle = rayGrad;
          ctx.fill();
        }
      }

      // ── Heartbeat pulse ──
      pulsePhaseRef.current += 0.04;
      const pulse = 0.7 + 0.3 * Math.sin(pulsePhaseRef.current * 2.5);

      // ── Parallax offset (desktop only) ──
      const parallaxX = mobile ? 0 : (mouseRef.current.x - 0.5) * 15;
      const parallaxY = mobile ? 0 : (mouseRef.current.y - 0.5) * 10;

      // ── Assembly / hold / shatter phases ──
      const isAssembling = elapsed < HOLD_UNTIL;
      const isShattering = elapsed >= SHATTER_START;

      particlesRef.current.forEach(p => {
        if (isAssembling) {
          // Assembly with staggered delay
          const t0 = clamp((elapsed - ASSEMBLY_START) / ASSEMBLY_DURATION, 0, 1);
          const staggered = clamp((t0 - p.delay) / (1 - p.delay), 0, 1);
          const ease = easeOutCubic(staggered);
          p.x = lerp(p.sx, p.tx + parallaxX, ease);
          p.y = lerp(p.sy, p.ty + parallaxY, ease);
        } else if (isShattering) {
          // Explode outward
          const st = (elapsed - SHATTER_START) / SHATTER_DURATION;
          const ease = easeInCubic(clamp(st, 0, 1));
          p.x = p.tx + parallaxX + p.vx * ease * 80;
          p.y = p.ty + parallaxY + p.vy * ease * 80;
        } else {
          // Hold at target with parallax
          p.x = p.tx + parallaxX;
          p.y = p.ty + parallaxY;
        }

        // Fade out during shatter
        let alpha = 1;
        if (isShattering) {
          alpha = 1 - clamp((elapsed - SHATTER_START) / SHATTER_DURATION, 0, 1);
        }
        // Fade in during assembly
        if (isAssembling) {
          const t0 = clamp((elapsed - ASSEMBLY_START) / ASSEMBLY_DURATION, 0, 1);
          const staggered = clamp((t0 - p.delay) / (1 - p.delay), 0, 1);
          alpha = Math.min(staggered * 3, 1);
        }

        const glowSize = p.size * (2.5 + pulse * 1.5);

        // Outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, ${p.brightness}%, ${alpha * 0.6 * pulse})`);
        grad.addColorStop(1, `hsla(${p.hue}, 100%, ${p.brightness}%, 0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${p.brightness + 20}%, ${alpha})`;
        ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Central text glow (assembled state) ──
      if (rayProgress > 0.7 && !isShattering) {
        const centerGlow = ctx.createRadialGradient(cx + parallaxX, cy + parallaxY, 0, cx + parallaxX, cy + parallaxY, 200);
        centerGlow.addColorStop(0, `hsla(185, 100%, 55%, ${0.04 * pulse})`);
        centerGlow.addColorStop(1, 'hsla(185, 100%, 50%, 0)');
        ctx.beginPath();
        ctx.fillStyle = centerGlow;
        ctx.arc(cx + parallaxX, cy + parallaxY, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mobile]);

  // ── Mouse tracking ──
  useEffect(() => {
    if (mobile) return;
    const handler = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mobile]);

  // ── Phase sequencing ──
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('holding'), ASSEMBLY_START + ASSEMBLY_DURATION);
    const t2 = setTimeout(() => setPhase('shattering'), SHATTER_START);
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, TOTAL_DURATION);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash-cinematic"
        className="fixed inset-0 z-[9999] overflow-hidden"
        style={{ background: 'hsl(0, 0%, 2%)' }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
        />

        {/* Subtitle text - appears after assembly */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ perspective: '1000px' }}
        >
          <motion.p
            className="absolute tracking-[0.35em] uppercase select-none"
            style={{
              bottom: mobile ? '38%' : '35%',
              fontSize: 'clamp(0.55rem, 1.4vw, 0.95rem)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              color: 'hsl(0, 0%, 50%)',
              willChange: 'transform, opacity',
              textShadow: '0 0 20px hsla(185, 100%, 50%, 0.15)',
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={
              phase === 'shattering'
                ? { opacity: 0, y: -20, filter: 'blur(8px)' }
                : phase === 'holding'
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.8 }}
          >
            The Future of Academic Intelligence
          </motion.p>
        </motion.div>

        {/* Glass refraction warp overlay during shatter */}
        {phase === 'shattering' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backdropFilter: 'blur(0px)',
              WebkitBackdropFilter: 'blur(0px)',
            }}
            animate={{
              backdropFilter: ['blur(0px)', 'blur(6px)', 'blur(0px)'],
              WebkitBackdropFilter: ['blur(0px)', 'blur(6px)', 'blur(0px)'],
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        )}

        {/* Scanline overlay for cinematic texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(185, 100%, 50%, 0.08) 2px, hsla(185, 100%, 50%, 0.08) 4px)',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
