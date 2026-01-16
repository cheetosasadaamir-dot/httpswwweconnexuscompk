import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  color: string;
}

const ScholarDustParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const isMouseActiveRef = useRef(false);

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

    // Color palette: Silver and Slate Grey particles
    const colors = [
      'rgba(192, 192, 192', // Silver
      'rgba(169, 169, 169', // Dark gray
      'rgba(211, 211, 211', // Light gray
      'rgba(128, 128, 128', // Gray
      'rgba(105, 105, 105', // Dim gray
      'rgba(220, 220, 220', // Gainsboro
    ];

    // Initialize particles - high-definition dust
    const particleCount = 120;
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const baseOpacity = Math.random() * 0.4 + 0.1;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2 + 0.5,
        opacity: baseOpacity,
        baseOpacity: baseOpacity,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isMouseActiveRef.current = true;
    };

    const handleMouseLeave = () => {
      isMouseActiveRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Mouse interaction - particles gravitate toward cursor
        if (isMouseActiveRef.current) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = (200 - distance) / 200;
            // Attraction effect (gravitate toward cursor)
            particle.vx += (dx / distance) * force * 0.008;
            particle.vy += (dy / distance) * force * 0.008;
            // Increase opacity near cursor
            particle.opacity = Math.min(particle.baseOpacity + force * 0.3, 0.8);
          } else {
            // Fade back to base opacity
            particle.opacity += (particle.baseOpacity - particle.opacity) * 0.02;
          }

          // Push away if too close (creates breathing room around cursor)
          if (distance < 60) {
            const pushForce = (60 - distance) / 60;
            particle.vx -= (dx / distance) * pushForce * 0.02;
            particle.vy -= (dy / distance) * pushForce * 0.02;
          }
        } else {
          particle.opacity += (particle.baseOpacity - particle.opacity) * 0.02;
        }

        // Apply natural random drift
        particle.vx += (Math.random() - 0.5) * 0.002;
        particle.vy += (Math.random() - 0.5) * 0.002;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Strong damping for smooth, elegant motion
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        // Boundary wrapping with smooth transition
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create subtle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `${particle.color}, ${particle.opacity})`);
        gradient.addColorStop(0.5, `${particle.color}, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, `${particle.color}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}, ${particle.opacity * 1.5})`;
        ctx.fill();
      });

      // Draw subtle connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const opacity = 0.05 * (1 - dist / 80);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(169, 169, 169, ${opacity})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ScholarDustParticles;
