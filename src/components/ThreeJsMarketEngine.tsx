import { useRef, useMemo, useEffect, useState, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useDevicePerformance, type PerformanceTier } from '@/hooks/use-device-performance';

// ============================================================================
// PERFORMANCE-OPTIMIZED 5D MARKET ENGINE
// GPU-accelerated, batched rendering, device-adaptive
// ============================================================================

interface PerformanceConfig {
  particleCount: number;
  candleCount: number;
  hexCount: number;
  starCount: number;
  enableTrails: boolean;
  enableBlur: boolean;
  dpr: number;
}

const getPerformanceConfig = (tier: PerformanceTier, isMobile: boolean): PerformanceConfig => {
  if (tier === 'low' || isMobile) {
    return {
      particleCount: 300,
      candleCount: 15,
      hexCount: 8,
      starCount: 1500,
      enableTrails: false,
      enableBlur: false,
      dpr: 1,
    };
  }
  if (tier === 'medium') {
    return {
      particleCount: 800,
      candleCount: 30,
      hexCount: 18,
      starCount: 4000,
      enableTrails: false,
      enableBlur: true,
      dpr: 1.5,
    };
  }
  return {
    particleCount: 1500,
    candleCount: 40,
    hexCount: 25,
    starCount: 6000,
    enableTrails: true,
    enableBlur: true,
    dpr: Math.min(window.devicePixelRatio, 2),
  };
};

// Optimized GPU-based particle system using instanced mesh
const ParticleField = memo(({ count, spread }: { count: number; spread: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Pre-compute particle data on GPU
  const particleData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * spread,
        y: (Math.random() - 0.5) * spread,
        z: -Math.random() * 150,
        speed: 0.08 + Math.random() * 0.12,
        colorIndex: Math.random(),
      });
    }
    return data;
  }, [count, spread]);

  // Color palette
  const colors = useMemo(() => [
    new THREE.Color('#00FFFF'),
    new THREE.Color('#FFBF00'),
    new THREE.Color('#FF00FF'),
  ], []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const p = particleData[i];
      
      // Update Z position (movement toward camera)
      p.z += p.speed * delta * 60;
      if (p.z > 30) {
        p.z = -150;
        p.x = (Math.random() - 0.5) * spread;
        p.y = (Math.random() - 0.5) * spread;
      }
      
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(0.08 + Math.sin(time * 2 + i) * 0.02);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      
      // Set color
      const color = colors[Math.floor(p.colorIndex * 3)];
      meshRef.current.setColorAt(i, color);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
});

ParticleField.displayName = 'ParticleField';

// Optimized candlestick bars - batched instanced rendering
const CandlestickField = memo(({ count }: { count: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const candleData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 60,
      z: -Math.random() * 100 - 20,
      isBullish: Math.random() > 0.35,
      height: Math.random() * 2 + 0.5,
      speed: 0.03 + Math.random() * 0.02,
    }));
  }, [count]);

  const bullishColor = useMemo(() => new THREE.Color('#00FFFF'), []);
  const bearishColor = useMemo(() => new THREE.Color('#FF3366'), []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    
    for (let i = 0; i < count; i++) {
      const c = candleData[i];
      
      c.z += c.speed * delta * 60;
      if (c.z > 20) {
        c.z = -100;
        c.x = (Math.random() - 0.5) * 100;
        c.y = (Math.random() - 0.5) * 60;
      }
      
      dummy.position.set(c.x, c.y, c.z);
      dummy.scale.set(0.4, c.height, 0.4);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, c.isBullish ? bullishColor : bearishColor);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        emissiveIntensity={0.6}
        transparent
        opacity={0.85}
        metalness={0.8}
        roughness={0.2}
      />
    </instancedMesh>
  );
});

CandlestickField.displayName = 'CandlestickField';

// Optimized hex nodes - single instanced mesh
const HexField = memo(({ count }: { count: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const hexData = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 50,
      z: -Math.random() * 90 - 20,
      delay: i * 0.2,
      speed: 0.02 + Math.random() * 0.01,
    }));
  }, [count]);

  const cyanColor = useMemo(() => new THREE.Color('#00FFFF'), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const h = hexData[i];
      const pulse = Math.sin((time + h.delay) * 2) * 0.3 + 1;
      
      h.z += h.speed * delta * 60;
      if (h.z > 25) h.z = -90;
      
      dummy.position.set(h.x, h.y, h.z);
      dummy.scale.setScalar(pulse * 0.5);
      dummy.rotation.z += 0.005 * delta * 60;
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, cyanColor);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <cylinderGeometry args={[0.5, 0.5, 0.15, 6]} />
      <meshStandardMaterial
        emissive="#00FFFF"
        emissiveIntensity={0.8}
        transparent
        opacity={0.7}
        metalness={0.9}
        roughness={0.1}
      />
    </instancedMesh>
  );
});

HexField.displayName = 'HexField';

// Optimized infinite depth grid
const InfiniteDepthGrid = memo(() => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 3) % 20;
    }
  });

  return (
    <group ref={gridRef} position={[0, -10, -60]} rotation={[Math.PI / 2.5, 0, 0]}>
      {[0, -20, -40, -60].map((z, i) => (
        <gridHelper
          key={i}
          args={[200, 30, '#0a2a2a', '#051515']}
          position={[0, z, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      ))}
    </group>
  );
});

InfiniteDepthGrid.displayName = 'InfiniteDepthGrid';

// Simplified volumetric beams
const VolumetricBeams = memo(() => {
  const beam1Ref = useRef<THREE.Mesh>(null);
  const beam2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const opacity = 0.025 + Math.sin(state.clock.elapsedTime) * 0.015;
    if (beam1Ref.current) {
      (beam1Ref.current.material as THREE.MeshBasicMaterial).opacity = opacity;
    }
    if (beam2Ref.current) {
      (beam2Ref.current.material as THREE.MeshBasicMaterial).opacity = opacity;
    }
  });

  return (
    <>
      <mesh ref={beam1Ref} position={[-30, 40, -50]} rotation={[0.3, 0, 0.2]}>
        <coneGeometry args={[15, 100, 16, 1, true]} />
        <meshBasicMaterial color="#00FFFF" transparent opacity={0.03} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={beam2Ref} position={[30, 40, -40]} rotation={[0.3, 0, -0.2]}>
        <coneGeometry args={[15, 100, 16, 1, true]} />
        <meshBasicMaterial color="#FFBF00" transparent opacity={0.03} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
    </>
  );
});

VolumetricBeams.displayName = 'VolumetricBeams';

// Mouse parallax camera with throttled updates
const CameraRig = memo(() => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 3;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 3;
    };
    
    // Throttle mouse events
    const throttledHandler = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => handleMove(e));
    };
    
    window.addEventListener('mousemove', throttledHandler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttledHandler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useFrame((state) => {
    target.current.x += (mouse.current.x - target.current.x) * 0.015;
    target.current.y += (-mouse.current.y - target.current.y) * 0.015;
    
    camera.position.x = target.current.x;
    camera.position.y = target.current.y + 2;
    camera.position.z = 15 + Math.sin(state.clock.elapsedTime * 0.2) * 1.5;
    camera.lookAt(0, 0, -30);
  });

  return null;
});

CameraRig.displayName = 'CameraRig';

// Main optimized scene
const MarketScene = memo(({ config }: { config: PerformanceConfig }) => {
  return (
    <>
      <CameraRig />
      
      {/* Simplified lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[30, 30, 20]} intensity={0.8} color="#00FFFF" distance={80} />
      <pointLight position={[-30, -20, 10]} intensity={0.6} color="#FFBF00" distance={60} />
      
      {/* Star field */}
      <Stars
        radius={150}
        depth={80}
        count={config.starCount}
        factor={4}
        saturation={0.3}
        fade
        speed={0.8}
      />
      
      {/* Volumetric beams */}
      <VolumetricBeams />
      
      {/* Infinite depth grid */}
      <InfiniteDepthGrid />
      
      {/* GPU-optimized particle field */}
      <ParticleField count={config.particleCount} spread={100} />
      
      {/* Batched candlesticks */}
      <CandlestickField count={config.candleCount} />
      
      {/* Batched hex nodes */}
      <HexField count={config.hexCount} />
      
      {/* Depth fog */}
      <fog attach="fog" args={['#040404', 25, 100]} />
    </>
  );
});

MarketScene.displayName = 'MarketScene';

const ThreeJsMarketEngine = () => {
  const { tier, isMobile } = useDevicePerformance();
  const [isVisible, setIsVisible] = useState(true);
  
  const config = useMemo(() => getPerformanceConfig(tier, isMobile), [tier, isMobile]);

  // Pause rendering when tab is not visible
  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  if (!isVisible) {
    return (
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          background: 'radial-gradient(ellipse at 50% 0%, #0a1a1a 0%, #050505 40%, #020202 70%, #000000 100%)' 
        }}
      />
    );
  }

  return (
    <div 
      className="fixed inset-0 z-0" 
      style={{ 
        background: 'radial-gradient(ellipse at 50% 0%, #0a1a1a 0%, #050505 40%, #020202 70%, #000000 100%)' 
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 15], fov: 65, near: 0.1, far: 200 }}
        dpr={config.dpr}
        performance={{ min: 0.5 }}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
      >
        <MarketScene config={config} />
      </Canvas>

      {/* Cinematic vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.85) 100%)',
        }}
      />
      
      {/* Subtle scan lines - disabled on low-power */}
      {config.enableBlur && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.02) 2px, rgba(0,255,255,0.02) 4px)',
          }}
        />
      )}
    </div>
  );
};

export default memo(ThreeJsMarketEngine);
