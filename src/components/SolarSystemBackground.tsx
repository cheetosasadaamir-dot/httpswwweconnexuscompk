import { useEffect, useRef, useState } from 'react';

interface Planet {
  name: string;
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
  glowColor: string;
  angle: number;
  z: number;
  hasRings?: boolean;
  ringColor?: string;
}

const SolarSystemBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Planets configuration with 4D/5D depth
    const planets: Planet[] = [
      { name: 'Mercury', radius: 4, orbitRadius: 80, orbitSpeed: 0.015, color: '#9CA3AF', glowColor: '#6B7280', angle: Math.random() * Math.PI * 2, z: 0.5 },
      { name: 'Venus', radius: 7, orbitRadius: 120, orbitSpeed: 0.012, color: '#FCD34D', glowColor: '#F59E0B', angle: Math.random() * Math.PI * 2, z: 0.6 },
      { name: 'Earth', radius: 8, orbitRadius: 170, orbitSpeed: 0.01, color: '#00E5CC', glowColor: '#00CED1', angle: Math.random() * Math.PI * 2, z: 0.7 },
      { name: 'Mars', radius: 6, orbitRadius: 220, orbitSpeed: 0.008, color: '#EF4444', glowColor: '#DC2626', angle: Math.random() * Math.PI * 2, z: 0.55 },
      { name: 'Jupiter', radius: 20, orbitRadius: 300, orbitSpeed: 0.005, color: '#D4A574', glowColor: '#B8860B', angle: Math.random() * Math.PI * 2, z: 0.8 },
      { name: 'Saturn', radius: 17, orbitRadius: 380, orbitSpeed: 0.004, color: '#E5C07B', glowColor: '#DAA520', angle: Math.random() * Math.PI * 2, z: 0.65, hasRings: true, ringColor: '#D4A574' },
      { name: 'Uranus', radius: 12, orbitRadius: 460, orbitSpeed: 0.003, color: '#7DD3FC', glowColor: '#38BDF8', angle: Math.random() * Math.PI * 2, z: 0.75 },
      { name: 'Neptune', radius: 11, orbitRadius: 520, orbitSpeed: 0.002, color: '#818CF8', glowColor: '#6366F1', angle: Math.random() * Math.PI * 2, z: 0.7 },
    ];

    // Stars configuration for parallax
    const stars: { x: number; y: number; size: number; brightness: number; layer: number }[] = [];
    const generateStars = () => {
      stars.length = 0;
      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          brightness: Math.random() * 0.5 + 0.3,
          layer: Math.floor(Math.random() * 3), // 0 = far, 1 = mid, 2 = near
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle scroll for parallax
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const drawStar = (star: typeof stars[0]) => {
      const parallaxFactor = [0.1, 0.2, 0.35][star.layer];
      const y = (star.y + scrollRef.current * parallaxFactor) % canvas.height;
      
      // Twinkling effect
      const twinkle = Math.sin(time * 2 + star.x * 0.01) * 0.3 + 0.7;
      
      ctx.beginPath();
      ctx.arc(star.x, y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * twinkle})`;
      ctx.fill();

      // Add subtle glow to larger stars
      if (star.size > 1.5) {
        ctx.beginPath();
        ctx.arc(star.x, y, star.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(star.x, y, 0, star.x, y, star.size * 3);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.15 * twinkle})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const drawPlanet = (planet: Planet, centerX: number, centerY: number) => {
      const x = centerX + Math.cos(planet.angle) * planet.orbitRadius;
      const y = centerY + Math.sin(planet.angle) * planet.orbitRadius * 0.4; // Elliptical orbit
      
      // 4D/5D depth effect based on position in orbit
      const depthScale = 0.6 + Math.sin(planet.angle) * 0.4;
      const adjustedRadius = planet.radius * depthScale * planet.z;
      
      // Parallax based on scroll
      const parallaxOffset = scrollRef.current * planet.z * 0.15;
      const finalY = y - parallaxOffset;

      // Draw orbit path with fade
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, planet.orbitRadius, planet.orbitRadius * 0.4, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100, 120, 140, ${0.08 * planet.z})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw Saturn's rings first (behind planet when appropriate)
      if (planet.hasRings && Math.sin(planet.angle) < 0) {
        drawRings(x, finalY, adjustedRadius, planet.ringColor!);
      }

      // Planet outer glow (4D light refraction effect)
      const outerGlow = ctx.createRadialGradient(x, finalY, adjustedRadius, x, finalY, adjustedRadius * 3);
      outerGlow.addColorStop(0, `${planet.glowColor}33`);
      outerGlow.addColorStop(0.5, `${planet.glowColor}11`);
      outerGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, finalY, adjustedRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // Planet body with 3D shading
      const planetGradient = ctx.createRadialGradient(
        x - adjustedRadius * 0.3,
        finalY - adjustedRadius * 0.3,
        0,
        x,
        finalY,
        adjustedRadius
      );
      planetGradient.addColorStop(0, planet.color);
      planetGradient.addColorStop(0.7, planet.glowColor);
      planetGradient.addColorStop(1, '#1a1a1a');
      
      ctx.beginPath();
      ctx.arc(x, finalY, adjustedRadius, 0, Math.PI * 2);
      ctx.fillStyle = planetGradient;
      ctx.fill();

      // Light reflection highlight
      const highlightGradient = ctx.createRadialGradient(
        x - adjustedRadius * 0.4,
        finalY - adjustedRadius * 0.4,
        0,
        x - adjustedRadius * 0.4,
        finalY - adjustedRadius * 0.4,
        adjustedRadius * 0.6
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      highlightGradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, finalY, adjustedRadius, 0, Math.PI * 2);
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      // Draw Saturn's rings in front when appropriate
      if (planet.hasRings && Math.sin(planet.angle) >= 0) {
        drawRings(x, finalY, adjustedRadius, planet.ringColor!);
      }
    };

    const drawRings = (x: number, y: number, planetRadius: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, 0.3);
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, planetRadius * (1.6 + i * 0.3), 0, Math.PI * 2);
        ctx.strokeStyle = `${color}${(60 - i * 15).toString(16)}`;
        ctx.lineWidth = 3 - i * 0.5;
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawSun = (centerX: number, centerY: number) => {
      const parallaxY = centerY - scrollRef.current * 0.05;
      
      // Sun outer corona
      for (let i = 5; i >= 0; i--) {
        const coronaGradient = ctx.createRadialGradient(centerX, parallaxY, 0, centerX, parallaxY, 60 + i * 20);
        coronaGradient.addColorStop(0, `rgba(255, 200, 100, ${0.15 - i * 0.02})`);
        coronaGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(centerX, parallaxY, 60 + i * 20, 0, Math.PI * 2);
        ctx.fillStyle = coronaGradient;
        ctx.fill();
      }
      
      // Sun body with pulsing effect
      const pulseFactor = 1 + Math.sin(time * 0.5) * 0.05;
      const sunGradient = ctx.createRadialGradient(centerX, parallaxY, 0, centerX, parallaxY, 35 * pulseFactor);
      sunGradient.addColorStop(0, '#FFFFFF');
      sunGradient.addColorStop(0.3, '#FFD700');
      sunGradient.addColorStop(0.7, '#FFA500');
      sunGradient.addColorStop(1, '#FF6B00');
      
      ctx.beginPath();
      ctx.arc(centerX, parallaxY, 30 * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();
    };

    const animate = () => {
      time += 0.016;
      
      // Clear with charcoal gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height * 0.3,
        0,
        canvas.width / 2,
        canvas.height * 0.5,
        canvas.width
      );
      bgGradient.addColorStop(0, '#1a1a1f');
      bgGradient.addColorStop(0.5, '#121215');
      bgGradient.addColorStop(1, '#0a0a0c');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with parallax
      stars.forEach(drawStar);

      // Calculate center with slight offset
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.35;

      // Draw sun
      drawSun(centerX, centerY);

      // Sort planets by depth for proper layering
      const sortedPlanets = [...planets].sort((a, b) => {
        const aDepth = Math.sin(a.angle);
        const bDepth = Math.sin(b.angle);
        return aDepth - bDepth;
      });

      // Update and draw planets
      planets.forEach(planet => {
        planet.angle += planet.orbitSpeed;
      });

      sortedPlanets.forEach(planet => drawPlanet(planet, centerX, centerY));

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ opacity: 0.9 }}
      />
      {/* Grainy texture overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};

export default SolarSystemBackground;
