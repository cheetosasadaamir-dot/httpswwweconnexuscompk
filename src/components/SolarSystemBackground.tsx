import { useEffect, useRef } from 'react';

interface Planet {
  name: string;
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitEccentricity: number;
  color: string;
  glowColor: string;
  glowIntensity: number;
  angle: number;
  inclination: number;
  hasRings?: boolean;
  ringColor?: string;
  moons?: { radius: number; orbitRadius: number; speed: number; angle: number }[];
}

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: number; // 0=far, 1=mid, 2=near for parallax
  color: string;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  layer: number;
}

const SolarSystemBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // Mathematically accurate orbital periods (relative to Earth)
    const planets: Planet[] = [
      { 
        name: 'Mercury', radius: 5, orbitRadius: 70, orbitSpeed: 0.025, 
        orbitEccentricity: 0.206, color: '#B8B8B8', glowColor: '#9CA3AF', 
        glowIntensity: 0.3, angle: Math.random() * Math.PI * 2, inclination: 7 
      },
      { 
        name: 'Venus', radius: 9, orbitRadius: 110, orbitSpeed: 0.018, 
        orbitEccentricity: 0.007, color: '#E8C97A', glowColor: '#F59E0B', 
        glowIntensity: 0.5, angle: Math.random() * Math.PI * 2, inclination: 3.4 
      },
      { 
        name: 'Earth', radius: 10, orbitRadius: 160, orbitSpeed: 0.012, 
        orbitEccentricity: 0.017, color: '#4FC3F7', glowColor: '#00E5CC', 
        glowIntensity: 0.6, angle: Math.random() * Math.PI * 2, inclination: 0,
        moons: [{ radius: 2, orbitRadius: 18, speed: 0.08, angle: 0 }]
      },
      { 
        name: 'Mars', radius: 7, orbitRadius: 210, orbitSpeed: 0.009, 
        orbitEccentricity: 0.093, color: '#E57373', glowColor: '#EF4444', 
        glowIntensity: 0.4, angle: Math.random() * Math.PI * 2, inclination: 1.85 
      },
      { 
        name: 'Jupiter', radius: 28, orbitRadius: 320, orbitSpeed: 0.004, 
        orbitEccentricity: 0.049, color: '#D4A574', glowColor: '#DAA520', 
        glowIntensity: 0.7, angle: Math.random() * Math.PI * 2, inclination: 1.3,
        moons: [
          { radius: 3, orbitRadius: 40, speed: 0.05, angle: 0 },
          { radius: 4, orbitRadius: 50, speed: 0.035, angle: 2 },
          { radius: 3.5, orbitRadius: 60, speed: 0.025, angle: 4 }
        ]
      },
      { 
        name: 'Saturn', radius: 24, orbitRadius: 420, orbitSpeed: 0.003, 
        orbitEccentricity: 0.056, color: '#F0E68C', glowColor: '#DAA520', 
        glowIntensity: 0.6, angle: Math.random() * Math.PI * 2, inclination: 2.5,
        hasRings: true, ringColor: '#D4A574'
      },
      { 
        name: 'Uranus', radius: 16, orbitRadius: 520, orbitSpeed: 0.002, 
        orbitEccentricity: 0.046, color: '#81D4FA', glowColor: '#38BDF8', 
        glowIntensity: 0.5, angle: Math.random() * Math.PI * 2, inclination: 0.77 
      },
      { 
        name: 'Neptune', radius: 15, orbitRadius: 600, orbitSpeed: 0.0015, 
        orbitEccentricity: 0.009, color: '#5C6BC0', glowColor: '#6366F1', 
        glowIntensity: 0.5, angle: Math.random() * Math.PI * 2, inclination: 1.77 
      },
    ];

    // Stars with realistic twinkling
    const stars: Star[] = [];
    const nebulae: Nebula[] = [];

    const starColors = ['#FFFFFF', '#FFE4C4', '#B0C4DE', '#ADD8E6', '#FAFAD2'];

    const generateStars = () => {
      stars.length = 0;
      nebulae.length = 0;
      
      for (let i = 0; i < 400; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.3,
          brightness: Math.random() * 0.6 + 0.4,
          twinkleSpeed: Math.random() * 2 + 1,
          twinklePhase: Math.random() * Math.PI * 2,
          layer: Math.floor(Math.random() * 3),
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }

      // Add distant nebulae for depth
      for (let i = 0; i < 5; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          color: ['#4FC3F7', '#CE93D8', '#FFB74D'][Math.floor(Math.random() * 3)],
          opacity: Math.random() * 0.03 + 0.01,
          layer: 0,
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

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const drawNebula = (nebula: Nebula, time: number) => {
      const parallaxY = (nebula.y + scrollRef.current * 0.05) % (canvas.height + nebula.radius * 2) - nebula.radius;
      
      const gradient = ctx.createRadialGradient(
        nebula.x, parallaxY, 0,
        nebula.x, parallaxY, nebula.radius
      );
      gradient.addColorStop(0, `${nebula.color}${Math.floor(nebula.opacity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${nebula.color}${Math.floor(nebula.opacity * 128).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(nebula.x, parallaxY, nebula.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawStar = (star: Star, time: number) => {
      const parallaxFactor = [0.08, 0.15, 0.25][star.layer];
      const y = (star.y + scrollRef.current * parallaxFactor) % canvas.height;
      
      // Realistic twinkling with varying frequency
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.4 + 0.6;
      const finalBrightness = star.brightness * twinkle;
      
      // Draw star core
      ctx.beginPath();
      ctx.arc(star.x, y, star.size * twinkle, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = finalBrightness;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Add cross-shaped diffraction spikes for brighter stars
      if (star.size > 1.5 && finalBrightness > 0.5) {
        ctx.save();
        ctx.translate(star.x, y);
        ctx.globalAlpha = finalBrightness * 0.3;
        
        const spikeLength = star.size * 4;
        ctx.strokeStyle = star.color;
        ctx.lineWidth = 0.5;
        
        ctx.beginPath();
        ctx.moveTo(-spikeLength, 0);
        ctx.lineTo(spikeLength, 0);
        ctx.moveTo(0, -spikeLength);
        ctx.lineTo(0, spikeLength);
        ctx.stroke();
        
        ctx.restore();
        ctx.globalAlpha = 1;
      }

      // Soft glow for larger stars
      if (star.size > 1.2) {
        const glowGradient = ctx.createRadialGradient(star.x, y, 0, star.x, y, star.size * 5);
        glowGradient.addColorStop(0, `${star.color}${Math.floor(finalBrightness * 40).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(star.x, y, star.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
      }
    };

    const drawSun = (centerX: number, centerY: number, time: number) => {
      const parallaxY = centerY - scrollRef.current * 0.03;
      
      // Animated corona layers
      for (let i = 6; i >= 0; i--) {
        const coronaRadius = 50 + i * 25 + Math.sin(time * 0.3 + i) * 5;
        const coronaGradient = ctx.createRadialGradient(centerX, parallaxY, 0, centerX, parallaxY, coronaRadius);
        coronaGradient.addColorStop(0, `rgba(255, 200, 100, ${0.12 - i * 0.015})`);
        coronaGradient.addColorStop(0.6, `rgba(255, 150, 50, ${0.05 - i * 0.006})`);
        coronaGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(centerX, parallaxY, coronaRadius, 0, Math.PI * 2);
        ctx.fillStyle = coronaGradient;
        ctx.fill();
      }
      
      // Sun body with dynamic pulsing
      const pulseFactor = 1 + Math.sin(time * 0.4) * 0.03;
      const sunRadius = 35 * pulseFactor;
      
      const sunGradient = ctx.createRadialGradient(centerX, parallaxY, 0, centerX, parallaxY, sunRadius);
      sunGradient.addColorStop(0, '#FFFFFF');
      sunGradient.addColorStop(0.2, '#FFF5E6');
      sunGradient.addColorStop(0.5, '#FFD700');
      sunGradient.addColorStop(0.8, '#FFA500');
      sunGradient.addColorStop(1, '#FF6B00');
      
      ctx.beginPath();
      ctx.arc(centerX, parallaxY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();

      // Solar flares (subtle)
      ctx.save();
      ctx.translate(centerX, parallaxY);
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < 8; i++) {
        const flareAngle = (time * 0.1 + i * Math.PI / 4);
        const flareLength = sunRadius * (1.5 + Math.sin(time * 2 + i) * 0.3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(flareAngle) * flareLength,
          Math.sin(flareAngle) * flareLength
        );
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawPlanet = (planet: Planet, centerX: number, centerY: number, time: number) => {
      // Kepler's laws: elliptical orbit with eccentricity
      const a = planet.orbitRadius;
      const e = planet.orbitEccentricity;
      const r = a * (1 - e * e) / (1 + e * Math.cos(planet.angle));
      
      const x = centerX + Math.cos(planet.angle) * r;
      const baseY = centerY + Math.sin(planet.angle) * r * 0.35; // Perspective compression
      
      // Add orbital inclination effect
      const inclinationOffset = Math.sin(planet.angle) * Math.sin(planet.inclination * Math.PI / 180) * 20;
      
      // 5D parallax based on scroll and orbital position
      const depthFactor = 0.7 + Math.sin(planet.angle) * 0.3;
      const parallaxOffset = scrollRef.current * depthFactor * 0.12;
      const y = baseY - parallaxOffset + inclinationOffset;

      // Adjust size based on depth
      const adjustedRadius = planet.radius * depthFactor;

      // Draw orbit path (faint)
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, planet.orbitRadius, planet.orbitRadius * 0.35, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100, 150, 180, ${0.04 * depthFactor})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Draw rings behind planet if needed
      if (planet.hasRings && Math.sin(planet.angle) < 0) {
        drawRings(x, y, adjustedRadius, planet.ringColor!, depthFactor);
      }

      // Outer atmospheric glow
      const outerGlow = ctx.createRadialGradient(x, y, adjustedRadius, x, y, adjustedRadius * 3.5);
      outerGlow.addColorStop(0, `${planet.glowColor}${Math.floor(planet.glowIntensity * 60).toString(16).padStart(2, '0')}`);
      outerGlow.addColorStop(0.4, `${planet.glowColor}${Math.floor(planet.glowIntensity * 25).toString(16).padStart(2, '0')}`);
      outerGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, adjustedRadius * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // Planet body with 3D lighting
      const lightAngle = -0.5; // Light from upper-left
      const lightX = x + Math.cos(lightAngle) * adjustedRadius * 0.35;
      const lightY = y + Math.sin(lightAngle) * adjustedRadius * 0.35;
      
      const planetGradient = ctx.createRadialGradient(lightX, lightY, 0, x, y, adjustedRadius);
      planetGradient.addColorStop(0, '#FFFFFF');
      planetGradient.addColorStop(0.15, planet.color);
      planetGradient.addColorStop(0.6, planet.glowColor);
      planetGradient.addColorStop(1, '#0a0a0a');
      
      ctx.beginPath();
      ctx.arc(x, y, adjustedRadius, 0, Math.PI * 2);
      ctx.fillStyle = planetGradient;
      ctx.fill();

      // Specular highlight
      const specularGradient = ctx.createRadialGradient(lightX, lightY, 0, lightX, lightY, adjustedRadius * 0.4);
      specularGradient.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      specularGradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, adjustedRadius, 0, Math.PI * 2);
      ctx.fillStyle = specularGradient;
      ctx.fill();

      // Draw rings in front if needed
      if (planet.hasRings && Math.sin(planet.angle) >= 0) {
        drawRings(x, y, adjustedRadius, planet.ringColor!, depthFactor);
      }

      // Draw moons
      if (planet.moons) {
        planet.moons.forEach((moon, idx) => {
          moon.angle += moon.speed;
          const moonX = x + Math.cos(moon.angle) * moon.orbitRadius * depthFactor;
          const moonY = y + Math.sin(moon.angle) * moon.orbitRadius * 0.4 * depthFactor;
          
          const moonGradient = ctx.createRadialGradient(moonX - 1, moonY - 1, 0, moonX, moonY, moon.radius * depthFactor);
          moonGradient.addColorStop(0, '#E0E0E0');
          moonGradient.addColorStop(1, '#606060');
          
          ctx.beginPath();
          ctx.arc(moonX, moonY, moon.radius * depthFactor, 0, Math.PI * 2);
          ctx.fillStyle = moonGradient;
          ctx.fill();
        });
      }
    };

    const drawRings = (x: number, y: number, planetRadius: number, color: string, depth: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, 0.25);
      
      for (let i = 0; i < 4; i++) {
        const ringRadius = planetRadius * (1.5 + i * 0.25);
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        const opacity = Math.floor((70 - i * 15) * depth).toString(16).padStart(2, '0');
        ctx.strokeStyle = `${color}${opacity}`;
        ctx.lineWidth = 4 - i * 0.8;
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const animate = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;
      
      // Deep space gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#020617');
      bgGradient.addColorStop(0.4, '#050a15');
      bgGradient.addColorStop(0.7, '#0a0a0a');
      bgGradient.addColorStop(1, '#030712');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae (far background)
      nebulae.forEach(n => drawNebula(n, time));

      // Draw stars with twinkling
      stars.forEach(star => drawStar(star, time));

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.35;

      // Draw sun
      drawSun(centerX, centerY, time);

      // Sort planets by depth for proper layering
      const sortedPlanets = [...planets].sort((a, b) => Math.sin(a.angle) - Math.sin(b.angle));

      // Update orbital positions
      planets.forEach(planet => {
        planet.angle += planet.orbitSpeed;
      });

      // Draw planets
      sortedPlanets.forEach(planet => drawPlanet(planet, centerX, centerY, time));

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return => {
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
        style={{ opacity: 0.95 }}
      />
      {/* Subtle grain texture overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};

export default SolarSystemBackground;
