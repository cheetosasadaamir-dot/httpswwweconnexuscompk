import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Digital Currency Dust Particles
const CurrencyDust = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, velocities } = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    const velocities: THREE.Vector3[] = [];
    
    for (let i = 0; i < count; i++) {
      // Spawn particles in a cylinder around the dollar sign
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.2 + Math.random() * 0.8;
      const height = (Math.random() - 0.5) * 2;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ));
    }
    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttr = particlesRef.current.geometry.attributes.position;
    
    for (let i = 0; i < 150; i++) {
      const angle = time * 0.3 + (i / 150) * Math.PI * 2;
      const radius = 1.3 + Math.sin(time * 0.5 + i * 0.1) * 0.3;
      
      positionAttr.array[i * 3] = Math.cos(angle) * radius;
      positionAttr.array[i * 3 + 1] = Math.sin(time * 0.8 + i * 0.05) * 0.8;
      positionAttr.array[i * 3 + 2] = Math.sin(angle) * radius;
    }
    positionAttr.needsUpdate = true;
    
    // Rotate the entire particle system
    particlesRef.current.rotation.y = time * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00f2ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// 4D Dollar Sign with Glassmorphism
const DollarSign4D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const glowRingsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // 4D Multi-axis rotation
      groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.3;
      groupRef.current.rotation.y = time * 0.5;
      groupRef.current.rotation.z = Math.sin(time * 0.3) * 0.15;
      
      // Levitation - sine wave vertical bobbing
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.2;
      
      // Morphing depth - 4D pulsing effect
      const depthPulse = 1 + Math.sin(time * 1.5) * 0.08;
      groupRef.current.scale.z = depthPulse;
    }
    
    if (glowRingsRef.current) {
      glowRingsRef.current.rotation.y = -time * 0.3;
      glowRingsRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }
    
    // Animate material emissive intensity for pulsing glow
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.3 + Math.sin(time * 2) * 0.15;
    }
  });

  return (
    <group>
      {/* Digital Currency Dust Trail */}
      <CurrencyDust />
      
      {/* Cyan glow orbital rings */}
      <group ref={glowRingsRef}>
        {[0, 45, 90].map((rotation, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, (rotation * Math.PI) / 180]}>
            <torusGeometry args={[1.8 - i * 0.15, 0.008, 8, 64]} />
            <meshBasicMaterial
              color="#00f2ff"
              transparent
              opacity={0.4 - i * 0.1}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      {/* Main Dollar Sign Group */}
      <Float
        speed={0.5}
        rotationIntensity={0}
        floatIntensity={0.1}
      >
        <group ref={groupRef}>
          <Center>
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={1.2}
              height={0.35}
              curveSegments={24}
              bevelEnabled
              bevelThickness={0.03}
              bevelSize={0.02}
              bevelSegments={8}
            >
              $
              {/* Frosted Glass Material with Rim Light */}
              <meshPhysicalMaterial
                ref={materialRef}
                color="#1a2428"
                emissive="#00f2ff"
                emissiveIntensity={0.3}
                metalness={0.1}
                roughness={0.15}
                transmission={0.6}
                thickness={0.5}
                ior={1.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
                envMapIntensity={1}
                transparent
                opacity={0.9}
              />
            </Text3D>
          </Center>
          
          {/* Edge glow outline - created with slightly larger wireframe */}
          <Center>
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={1.22}
              height={0.37}
              curveSegments={12}
              bevelEnabled={false}
            >
              $
              <meshBasicMaterial
                color="#00f2ff"
                transparent
                opacity={0.15}
                wireframe
                blending={THREE.AdditiveBlending}
              />
            </Text3D>
          </Center>
        </group>
      </Float>

      {/* Rim Lighting Setup */}
      <pointLight position={[2, 0, -1]} color="#00f2ff" intensity={3} distance={6} />
      <pointLight position={[-2, 0, -1]} color="#00f2ff" intensity={3} distance={6} />
      <pointLight position={[0, 2, -1]} color="#00f2ff" intensity={2} distance={5} />
      <pointLight position={[0, -2, -1]} color="#00f2ff" intensity={2} distance={5} />
      
      {/* Back rim light for edge highlighting */}
      <pointLight position={[0, 0, -2]} color="#00f2ff" intensity={4} distance={5} />
      
      {/* Subtle front fill */}
      <pointLight position={[0, 0, 3]} color="#ffffff" intensity={0.5} distance={8} />
    </group>
  );
};

// Fallback Dollar Sign (in case font doesn't load)
const FallbackDollarSign = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.3;
      groupRef.current.rotation.y = time * 0.5;
      groupRef.current.rotation.z = Math.sin(time * 0.3) * 0.15;
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.2;
      
      const depthPulse = 1 + Math.sin(time * 1.5) * 0.08;
      groupRef.current.scale.z = depthPulse;
    }
  });

  // Build dollar sign from primitives
  return (
    <group>
      <CurrencyDust />
      
      <Float speed={0.5} rotationIntensity={0} floatIntensity={0.1}>
        <group ref={groupRef}>
          {/* S-curve part of dollar sign - top arc */}
          <mesh position={[0, 0.35, 0]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.35, 0.12, 16, 32, Math.PI]} />
            <meshPhysicalMaterial
              color="#1a2428"
              emissive="#00f2ff"
              emissiveIntensity={0.4}
              metalness={0.1}
              roughness={0.15}
              transmission={0.5}
              thickness={0.3}
              clearcoat={1}
              transparent
              opacity={0.9}
            />
          </mesh>
          
          {/* S-curve part - bottom arc */}
          <mesh position={[0, -0.35, 0]} rotation={[0, Math.PI, 0]}>
            <torusGeometry args={[0.35, 0.12, 16, 32, Math.PI]} />
            <meshPhysicalMaterial
              color="#1a2428"
              emissive="#00f2ff"
              emissiveIntensity={0.4}
              metalness={0.1}
              roughness={0.15}
              transmission={0.5}
              thickness={0.3}
              clearcoat={1}
              transparent
              opacity={0.9}
            />
          </mesh>
          
          {/* Vertical line through center */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 1.8, 16]} />
            <meshPhysicalMaterial
              color="#1a2428"
              emissive="#00f2ff"
              emissiveIntensity={0.5}
              metalness={0.1}
              roughness={0.15}
              transmission={0.5}
              thickness={0.3}
              clearcoat={1}
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>
      </Float>

      {/* Rim Lighting */}
      <pointLight position={[2, 0, -1]} color="#00f2ff" intensity={3} distance={6} />
      <pointLight position={[-2, 0, -1]} color="#00f2ff" intensity={3} distance={6} />
      <pointLight position={[0, 0, -2]} color="#00f2ff" intensity={4} distance={5} />
      <pointLight position={[0, 0, 3]} color="#ffffff" intensity={0.5} distance={8} />
    </group>
  );
};

// Scene Component
const DollarScene = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
      
      {/* Use fallback since custom fonts require hosting */}
      <FallbackDollarSign />
    </>
  );
};

const CryptoLogo4D = () => {
  return (
    <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
      {/* Ambient glow background */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.4) 0%, transparent 60%)',
        }}
      />
      
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        <DollarScene />
      </Canvas>

      {/* Overlay glow pulse effect */}
      <div 
        className="absolute inset-0 pointer-events-none animate-glow-pulse rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--neon-cyan) / 0.08) 0%, transparent 50%)',
        }}
      />
      
      {/* Secondary pulsing ring */}
      <div 
        className="absolute inset-4 pointer-events-none rounded-full border border-neon-cyan/20 animate-pulse"
        style={{
          boxShadow: '0 0 40px hsl(var(--neon-cyan) / 0.2), inset 0 0 40px hsl(var(--neon-cyan) / 0.1)',
        }}
      />
    </div>
  );
};

export default CryptoLogo4D;
