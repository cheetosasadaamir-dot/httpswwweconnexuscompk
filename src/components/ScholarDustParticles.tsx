import { useEffect, useRef } from 'react';

interface Particle {
 x: number;
 y: number;
 z: number; // 5D depth layer
 baseX: number;
 baseY: number;
 size: number;
 speedX: number;
 speedY: number;
 opacity: number;
 color: string;
 pulsePhase: number;
}

const ScholarDustParticles =  => {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const mouseRef = useRef({ x: 0, y: 0, active: false });
 const particlesRef = useRef<Particle[]>([]);
 const scrollRef = useRef(0);
 const timeRef = useRef(0);

 useEffect( => {
 const canvas = canvasRef.current;
 if (!canvas) return;

 const ctx = canvas.getContext('2d');
 if (!ctx) return;

 const resizeCanvas =  => {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 initParticles;
 };

 const initParticles =  => {
 const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
 const colors = ['#64748b', '#475569', '#334155', '#94a3b8', '#52525b'];
 
 particlesRef.current = Array.from({ length: particleCount },  => {
 const x = Math.random * canvas.width;
 const y = Math.random * canvas.height;
 return {
 x,
 y,
 z: Math.random, // 0 = far (small, slow), 1 = near (large, fast)
 baseX: x,
 baseY: y,
 size: Math.random * 1.5 + 0.3,
 speedX: (Math.random - 0.5) * 0.12,
 speedY: (Math.random - 0.5) * 0.12,
 opacity: Math.random * 0.4 + 0.1,
 color: colors[Math.floor(Math.random * colors.length)],
 pulsePhase: Math.random * Math.PI * 2,
 };
 });
 };

 resizeCanvas;
 window.addEventListener('resize', resizeCanvas);

 const handleMouseMove = (e: MouseEvent) => {
 mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
 };

 const handleMouseLeave =  => {
 mouseRef.current.active = false;
 };

 const handleScroll =  => {
 scrollRef.current = window.scrollY;
 };

 window.addEventListener('mousemove', handleMouseMove);
 window.addEventListener('mouseleave', handleMouseLeave);
 window.addEventListener('scroll', handleScroll);

 const animate =  => {
 timeRef.current += 0.008;
 const time = timeRef.current;
 
 ctx.clearRect(0, 0, canvas.width, canvas.height);

 // Sort by z-depth for proper layering (far particles rendered first)
 const sortedParticles = [...particlesRef.current].sort((a, b) => a.z - b.z);

 sortedParticles.forEach((particle) => {
 // 5D Parallax effect based on depth and scroll
 const parallaxFactor = particle.z * 0.5 + 0.5;
 const scrollOffset = scrollRef.current * parallaxFactor * 0.08;

 // Mouse interaction with depth-aware warping
 const dx = mouseRef.current.x - particle.x;
 const dy = mouseRef.current.y - particle.y;
 const distance = Math.sqrt(dx * dx + dy * dy);
 const maxDistance = 180 * parallaxFactor;

 let mouseForceX = 0;
 let mouseForceY = 0;

 if (mouseRef.current.active && distance < maxDistance) {
 const force = ((maxDistance - distance) / maxDistance) * parallaxFactor;
 const angle = Math.atan2(dy, dx);
 // Near particles pushed more, far particles less
 mouseForceX = -Math.cos(angle) * force * 2.5 * particle.z;
 mouseForceY = -Math.sin(angle) * force * 2.5 * particle.z;
 }

 // Gentle floating motion
 const floatX = Math.sin(time * 0.4 + particle.pulsePhase) * 0.25;
 const floatY = Math.cos(time * 0.25 + particle.pulsePhase) * 0.25;

 // Update position
 particle.x += particle.speedX + mouseForceX + floatX;
 particle.y += particle.speedY + mouseForceY + floatY - scrollOffset * 0.008;

 // Wrap around edges smoothly
 if (particle.x < -10) particle.x = canvas.width + 10;
 if (particle.x > canvas.width + 10) particle.x = -10;
 if (particle.y < -10) particle.y = canvas.height + 10;
 if (particle.y > canvas.height + 10) particle.y = -10;

 // Pulsing opacity based on depth
 const pulseOpacity = particle.opacity * (0.8 + Math.sin(time + particle.pulsePhase) * 0.2);
 const depthOpacity = pulseOpacity * (0.3 + particle.z * 0.7);

 // Size based on depth (near = larger)
 const depthSize = particle.size * (0.4 + particle.z * 1.6);

 // Draw particle with soft glow
 const gradient = ctx.createRadialGradient(
 particle.x, particle.y, 0,
 particle.x, particle.y, depthSize * 3
 );
 gradient.addColorStop(0, particle.color);
 gradient.addColorStop(0.4, `${particle.color}66`);
 gradient.addColorStop(1, 'transparent');

 ctx.beginPath;
 ctx.arc(particle.x, particle.y, depthSize * 3, 0, Math.PI * 2);
 ctx.fillStyle = gradient;
 ctx.globalAlpha = depthOpacity * 0.25;
 ctx.fill;

 // Core particle
 ctx.beginPath;
 ctx.arc(particle.x, particle.y, depthSize, 0, Math.PI * 2);
 ctx.fillStyle = particle.color;
 ctx.globalAlpha = depthOpacity;
 ctx.fill;
 
 ctx.globalAlpha = 1;
 });

 // Draw subtle connection lines between nearby particles
 ctx.strokeStyle = 'rgba(100, 116, 139, 0.04)';
 ctx.lineWidth = 0.5;
 
 for (let i = 0; i < particlesRef.current.length; i++) {
 for (let j = i + 1; j < particlesRef.current.length; j++) {
 const p1 = particlesRef.current[i];
 const p2 = particlesRef.current[j];
 const dx = p1.x - p2.x;
 const dy = p1.y - p2.y;
 const distance = Math.sqrt(dx * dx + dy * dy);
 
 if (distance < 70 && Math.abs(p1.z - p2.z) < 0.25) {
 ctx.globalAlpha = (1 - distance / 70) * 0.06;
 ctx.beginPath;
 ctx.moveTo(p1.x, p1.y);
 ctx.lineTo(p2.x, p2.y);
 ctx.stroke;
 }
 }
 }
 
 ctx.globalAlpha = 1;

 requestAnimationFrame(animate);
 };

 const animationId = requestAnimationFrame(animate);

 return  => {
 window.removeEventListener('resize', resizeCanvas);
 window.removeEventListener('mousemove', handleMouseMove);
 window.removeEventListener('mouseleave', handleMouseLeave);
 window.removeEventListener('scroll', handleScroll);
 cancelAnimationFrame(animationId);
 };
 }, []);

 return (
 <canvas
 ref={canvasRef}
 className="fixed inset-0 z-[5] pointer-events-none"
 style={{ opacity: 0.65 }}
 />
 );
};

export default ScholarDustParticles;
