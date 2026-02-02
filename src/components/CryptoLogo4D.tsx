import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Bitcoin Diamond Geometry
const CryptoDiamond = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  // Create particle positions
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  const particleSizes = useMemo(() => {
    const sizes = new Float32Array(200);
    for (let i = 0; i < 200; i++) {
      sizes[i] = Math.random() * 0.05 + 0.02;
    }
    return sizes;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // 4D multi-axis rotation
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.z = time * 0.2;
      // Floating/levitation effect
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.15;
    }
    
    if (glowRef.current) {
      glowRef.current.rotation.x = time * 0.3;
      glowRef.current.rotation.y = time * 0.5;
      glowRef.current.rotation.z = time * 0.2;
      glowRef.current.position.y = Math.sin(time * 0.8) * 0.15;
      // Pulse the glow
      const scale = 1.05 + Math.sin(time * 2) * 0.05;
      glowRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
      particlesRef.current.rotation.x = time * 0.05;
    }
  });

  return (
    <group>
      {/* Particle field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={200}
            array={particleSizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#00f2ff"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Outer glow mesh */}
      <mesh ref={glowRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#00f2ff"
          transparent
          opacity={0.15}
          wireframe
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Main crypto diamond */}
      <Float
        speed={1.5}
        rotationIntensity={0}
        floatIntensity={0.3}
      >
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#1a1a1a"
            emissive="#00f2ff"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            distort={0.1}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Inner Bitcoin symbol plane */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Cyan edge glow rings */}
      {[0, 60, 120].map((rotation, i) => (
        <mesh key={i} rotation={[0, (rotation * Math.PI) / 180, 0]}>
          <torusGeometry args={[1.3, 0.01, 8, 64]} />
          <meshBasicMaterial
            color="#00f2ff"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}

      {/* Ambient light glow */}
      <pointLight position={[0, 0, 2]} color="#00f2ff" intensity={2} distance={5} />
      <pointLight position={[0, 0, -2]} color="#00f2ff" intensity={1} distance={5} />
    </group>
  );
};

// Bitcoin Symbol Component
const BitcoinSymbol = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.5;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
    }
  });

  // Create ₿ shape using torus segments and cylinders
  return (
    <group ref={groupRef}>
      {/* Vertical bars of ₿ */}
      <mesh position={[-0.15, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.8, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
      
      {/* Top horizontal bar */}
      <mesh position={[0.05, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.25, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Middle horizontal bar */}
      <mesh position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.25, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Bottom horizontal bar */}
      <mesh position={[0.05, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.25, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Top bump */}
      <mesh position={[0.15, 0.15, 0]}>
        <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Bottom bump */}
      <mesh position={[0.15, -0.15, 0]}>
        <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Extension bars top and bottom */}
      <mesh position={[-0.15, 0.45, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
      <mesh position={[-0.15, -0.45, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
    </group>
  );
};

// Combined 4D Crypto Logo
const CryptoScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#00f2ff" />
      
      <CryptoDiamond />
      <BitcoinSymbol />
    </>
  );
};

const CryptoLogo4D = () => {
  return (
    <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
      {/* Ambient glow background */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.5) 0%, transparent 60%)',
        }}
      />
      
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
      >
        <CryptoScene />
      </Canvas>

      {/* Overlay glow pulse */}
      <div 
        className="absolute inset-0 pointer-events-none animate-glow-pulse rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%)',
        }}
      />
    </div>
  );
};

export default CryptoLogo4D;
