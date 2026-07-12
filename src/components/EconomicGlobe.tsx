import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EconomicGlobe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
      {/* Outer glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-primary/20"
        style={{
          background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.1), transparent, hsl(var(--secondary) / 0.1), transparent)',
        }}
      />

      {/* Main globe container */}
      <motion.div
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        className="absolute inset-8 lg:inset-12 perspective-1000"
      >
        {/* Globe sphere */}
        <div className="relative w-full h-full">
          {/* Base sphere with gradient */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, hsl(var(--secondary) / 0.3) 0%, transparent 50%),
                linear-gradient(135deg, hsl(var(--navy-base)) 0%, hsl(var(--navy-deep)) 100%)
              `,
              boxShadow: `
                inset -20px -20px 60px rgba(0,0,0,0.5),
                inset 20px 20px 60px hsl(var(--primary) / 0.1),
                0 0 80px hsl(var(--indigo-glow) / 0.3)
              `,
            }}
          />

          {/* Grid lines - Longitude */}
          {[0, 30, 60, 90, 120, 150].map((rotation) => (
            <motion.div
              key={`long-${rotation}`}
              animate={{ rotateY: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-primary/10"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}

          {/* Grid lines - Latitude */}
          {[20, 40, 60, 80].map((size, i) => (
            <motion.div
              key={`lat-${size}`}
              animate={{ rotateY: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full border border-secondary/10"
              style={{
                inset: `${50 - size / 2}%`,
                transform: `rotateX(${(i + 1) * 20}deg)`,
              }}
            />
          ))}

          {/* Floating economic indicators */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
          />
          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-secondary shadow-lg shadow-secondary/50"
          />
          <motion.div
            animate={{
              y: [0, -12, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-indigo-glow shadow-lg shadow-indigo-glow/50"
          />

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 25 25 Q 50 20, 75 35"
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.path
              d="M 33 66 Q 50 55, 75 35"
              stroke="hsl(var(--secondary) / 0.3)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
            />
          </svg>

          {/* Center supply/demand intersection */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-24 h-24 lg:w-32 lg:h-32" viewBox="0 0 100 100">
              {/* Demand curve */}
              <motion.path
                d="M 20 20 Q 50 50, 80 80"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Supply curve */}
              <motion.path
                d="M 20 80 Q 50 50, 80 20"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              {/* Equilibrium point */}
              <motion.circle
                cx="50"
                cy="50"
                r="4"
                fill="hsl(var(--silver-bright))"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Orbital ring */}
      <motion.div
        animate={{ rotateZ: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-dashed border-silver/20"
          style={{ transform: 'rotateX(70deg) translateZ(0)' }}
        />
      </motion.div>

      {/* Ambient glow */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--indigo-glow) / 0.4) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default EconomicGlobe;
