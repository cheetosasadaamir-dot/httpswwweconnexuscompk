import { useEffect, useRef } from 'react';

interface Particle {
 x: number;
 y: number;
 vx: number;
 vy: number;
 size: number;
 opacity: number;
}

const ParticleField =  => {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const mouseRef = useRef({ x: 0, y: 0 });
 const particlesRef = useRef<Particle[]>([]);

 useEffect( => {
 const canvas = canvasRef.current;
 if (!canvas) return;

 const ctx = canvas.getContext('2d');
 if (!ctx) return;

 const resizeCanvas =  => {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 };

 resizeCanvas;
 window.addEventListener('resize', resizeCanvas);

 // Initialize particles
 const particleCount = 80;
 particlesRef.current = Array.from({ length: particleCount },  => ({
 x: Math.random * canvas.width,
 y: Math.random * canvas.height,
 vx: (Math.random - 0.5) * 0.3,
 vy: (Math.random - 0.5) * 0.3,
 size: Math.random * 2 + 1,
 opacity: Math.random * 0.5 + 0.2,
 }));

 const handleMouseMove = (e: MouseEvent) => {
 mouseRef.current = { x: e.clientX, y: e.clientY };
 };

 window.addEventListener('mousemove', handleMouseMove);

 const animate =  => {
 ctx.clearRect(0, 0, canvas.width, canvas.height);

 particlesRef.current.forEach((particle, i) => {
 // Mouse interaction
 const dx = mouseRef.current.x - particle.x;
 const dy = mouseRef.current.y - particle.y;
 const distance = Math.sqrt(dx * dx + dy * dy);
 
 if (distance < 150) {
 const force = (150 - distance) / 150;
 particle.vx += (dx / distance) * force * 0.02;
 particle.vy += (dy / distance) * force * 0.02;
 }

 // Update position
 particle.x += particle.vx;
 particle.y += particle.vy;

 // Damping
 particle.vx *= 0.99;
 particle.vy *= 0.99;

 // Boundary wrapping
 if (particle.x < 0) particle.x = canvas.width;
 if (particle.x > canvas.width) particle.x = 0;
 if (particle.y < 0) particle.y = canvas.height;
 if (particle.y > canvas.height) particle.y = 0;

 // Draw particle
 ctx.beginPath;
 ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
 ctx.fillStyle = `rgba(167, 139, 250, ${particle.opacity})`;
 ctx.fill;

 // Draw connections
 particlesRef.current.slice(i + 1).forEach((other) => {
 const dx = particle.x - other.x;
 const dy = particle.y - other.y;
 const dist = Math.sqrt(dx * dx + dy * dy);

 if (dist < 120) {
 ctx.beginPath;
 ctx.moveTo(particle.x, particle.y);
 ctx.lineTo(other.x, other.y);
 ctx.strokeStyle = `rgba(167, 139, 250, ${0.15 * (1 - dist / 120)})`;
 ctx.lineWidth = 0.5;
 ctx.stroke;
 }
 });
 });

 requestAnimationFrame(animate);
 };

 const animationId = requestAnimationFrame(animate);

 return  => {
 window.removeEventListener('resize', resizeCanvas);
 window.removeEventListener('mousemove', handleMouseMove);
 cancelAnimationFrame(animationId);
 };
 }, []);

 return (
 <canvas
 ref={canvasRef}
 className="fixed inset-0 pointer-events-none z-10"
 style={{ opacity: 0.6 }}
 />
 );
};

export default ParticleField;
