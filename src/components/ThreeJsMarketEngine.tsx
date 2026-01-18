import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Text, Trail, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Glowing crypto orb with distortion
const CryptoOrb = ({ position, symbol, color }: { position: [number, number, number]; symbol: string; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [intensity, setIntensity] = useState(0);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.position.z += 0.03;
      if (meshRef.current.position.z > 15) {
        meshRef.current.position.z = -80;
        meshRef.current.position.x = (Math.random() - 0.5) * 60;
        meshRef.current.position.y = (Math.random() - 0.5) * 40;
      }
      setIntensity(Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.5 + 1);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {/* Inner core */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.8, 2]} />
          <MeshDistortMaterial
            color={color}
            emissive={color}
            emissiveIntensity={intensity * 0.8}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Outer glow shell */}
        <mesh ref={glowRef} scale={1.8}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </mesh>
        
        {/* Orbiting ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.2, 0.03, 8, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

// 3D Candlestick with trail effect
const CandlestickBar = ({ position, isBullish, height }: { position: [number, number, number]; isBullish: boolean; height: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = isBullish ? '#00FFFF' : '#FF3366';

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z += 0.04;
      if (meshRef.current.position.z > 20) {
        meshRef.current.position.z = -100;
        meshRef.current.position.x = (Math.random() - 0.5) * 80;
        meshRef.current.position.y = (Math.random() - 0.5) * 50;
      }
    }
  });

  return (
    <Trail
      width={2}
      length={6}
      color={new THREE.Color(color)}
      attenuation={(t) => t * t}
    >
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.4, height, 0.4]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.85}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Trail>
  );
};

// Hexagonal blockchain node with pulsing connections
const BlockchainHex = ({ position, delay }: { position: [number, number, number]; delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [pulse, setPulse] = useState(1);

  useFrame((state) => {
    const t = state.clock.elapsedTime + delay;
    setPulse(Math.sin(t * 2) * 0.3 + 1);
    
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.008;
      meshRef.current.position.z += 0.025;
      if (meshRef.current.position.z > 25) {
        meshRef.current.position.z = -90;
      }
    }
    if (ringRef.current) {
      ringRef.current.scale.setScalar(pulse * 1.5);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 / pulse;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} scale={pulse * 0.6}>
        <cylinderGeometry args={[0.5, 0.5, 0.15, 6]} />
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.6, 0.8, 6]} />
        <meshBasicMaterial color="#00FFFF" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// Smart contract connection beams
const NetworkBeams = ({ nodes }: { nodes: [number, number, number][] }) => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const [opacity, setOpacity] = useState(0.2);

  const geometry = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        );
        if (dist < 25 && Math.random() > 0.5) {
          positions.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  useFrame((state) => {
    setOpacity(0.15 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1);
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#00FFFF" transparent opacity={opacity} linewidth={2} />
    </lineSegments>
  );
};

// Flowing particle stream (data flow effect)
const ParticleStream = ({ count, spread }: { count: number; spread: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00FFFF');
    const amber = new THREE.Color('#FFBF00');
    const magenta = new THREE.Color('#FF00FF');
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = -Math.random() * 150;
      
      const colorChoice = Math.random();
      const color = colorChoice < 0.5 ? cyan : colorChoice < 0.8 ? amber : magenta;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count, spread]);

  useFrame(() => {
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        posAttr.array[i * 3 + 2] += 0.15;
        if (posAttr.array[i * 3 + 2] > 30) {
          posAttr.array[i * 3 + 2] = -150;
          posAttr.array[i * 3] = (Math.random() - 0.5) * spread;
          posAttr.array[i * 3 + 1] = (Math.random() - 0.5) * spread;
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Volumetric light beams
const VolumetricBeam = ({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.03 + Math.sin(state.clock.elapsedTime + position[0]) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <coneGeometry args={[15, 100, 32, 1, true]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.04}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Infinite depth grid with perspective
const InfiniteDepthGrid = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 5) % 20;
    }
  });

  return (
    <group ref={gridRef} position={[0, -10, -60]} rotation={[Math.PI / 2.5, 0, 0]}>
      {[0, -20, -40, -60, -80].map((z, i) => (
        <gridHelper
          key={i}
          args={[200, 40, '#0a2a2a', '#051515']}
          position={[0, z, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      ))}
    </group>
  );
};

// Floating price ticker text
const PriceTicker = ({ position, text, color }: { position: [number, number, number]; text: string; color: string }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z += 0.05;
      if (groupRef.current.position.z > 15) {
        groupRef.current.position.z = -80;
        groupRef.current.position.x = (Math.random() - 0.5) * 60;
        groupRef.current.position.y = (Math.random() - 0.5) * 30;
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {text}
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </Text>
    </group>
  );
};

// Mouse parallax camera
const CameraRig = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0, z: 15 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 4;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 4;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useFrame((state) => {
    target.current.x += (mouse.current.x - target.current.x) * 0.02;
    target.current.y += (-mouse.current.y - target.current.y) * 0.02;
    
    camera.position.x = target.current.x;
    camera.position.y = target.current.y + 2;
    camera.position.z = 15 + Math.sin(state.clock.elapsedTime * 0.3) * 2;
    camera.lookAt(0, 0, -30);
  });

  return null;
};

// Main scene
const MarketScene = ({ isMobile }: { isMobile: boolean }) => {
  const cryptoSymbols = [
    { symbol: 'BTC', color: '#FFBF00', pos: [-15, 8, -40] },
    { symbol: 'ETH', color: '#627EEA', pos: [20, -5, -50] },
    { symbol: 'SOL', color: '#00FFA3', pos: [-25, -10, -60] },
    { symbol: 'XRP', color: '#00FFFF', pos: [15, 12, -45] },
    { symbol: 'DOGE', color: '#C2A633', pos: [-10, -15, -55] },
  ];

  const candleCount = isMobile ? 20 : 50;
  const hexCount = isMobile ? 12 : 30;
  const particleCount = isMobile ? 500 : 2000;

  const candlesticks = useMemo(() => {
    return Array.from({ length: candleCount }, () => ({
      position: [
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        -Math.random() * 100 - 20,
      ] as [number, number, number],
      isBullish: Math.random() > 0.35,
      height: Math.random() * 2 + 0.5,
    }));
  }, [candleCount]);

  const hexNodes = useMemo(() => {
    return Array.from({ length: hexCount }, () => [
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 50,
      -Math.random() * 90 - 20,
    ] as [number, number, number]);
  }, [hexCount]);

  const tickers = [
    { text: '₿ $98,542', color: '#FFBF00' },
    { text: 'Ξ $3,847', color: '#627EEA' },
    { text: 'SPX 5,892', color: '#00FF88' },
    { text: 'NASDAQ 19,432', color: '#00FFFF' },
    { text: 'SOL $245', color: '#00FFA3' },
  ];

  return (
    <>
      <CameraRig />
      
      {/* Ambient and dramatic lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[30, 30, 20]} intensity={1} color="#00FFFF" distance={100} />
      <pointLight position={[-30, -20, 10]} intensity={0.8} color="#FFBF00" distance={80} />
      <pointLight position={[0, 0, -50]} intensity={0.5} color="#FF00FF" distance={60} />
      <spotLight position={[0, 50, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#00FFFF" />

      {/* Star field background */}
      <Stars
        radius={150}
        depth={100}
        count={isMobile ? 2000 : 8000}
        factor={5}
        saturation={0.3}
        fade
        speed={1}
      />

      {/* Volumetric light beams */}
      <VolumetricBeam position={[-30, 40, -50]} rotation={[0.3, 0, 0.2]} color="#00FFFF" />
      <VolumetricBeam position={[30, 40, -40]} rotation={[0.3, 0, -0.2]} color="#FFBF00" />
      
      {/* Infinite depth grid */}
      <InfiniteDepthGrid />

      {/* Flowing particle streams */}
      <ParticleStream count={particleCount} spread={120} />

      {/* Crypto orbs */}
      {cryptoSymbols.map((crypto, i) => (
        <CryptoOrb
          key={`crypto-${i}`}
          position={crypto.pos as [number, number, number]}
          symbol={crypto.symbol}
          color={crypto.color}
        />
      ))}

      {/* Candlestick bars with trails */}
      {candlesticks.map((candle, i) => (
        <CandlestickBar
          key={`candle-${i}`}
          position={candle.position}
          isBullish={candle.isBullish}
          height={candle.height}
        />
      ))}

      {/* Blockchain hex nodes */}
      {hexNodes.map((pos, i) => (
        <BlockchainHex key={`hex-${i}`} position={pos} delay={i * 0.2} />
      ))}

      {/* Network connection beams */}
      <NetworkBeams nodes={hexNodes} />

      {/* Floating price tickers */}
      {tickers.map((ticker, i) => (
        <PriceTicker
          key={`ticker-${i}`}
          position={[(i - 2) * 12, (Math.random() - 0.5) * 20, -50 - i * 8]}
          text={ticker.text}
          color={ticker.color}
        />
      ))}

      {/* Depth fog */}
      <fog attach="fog" args={['#040404', 20, 120]} />
    </>
  );
};

const ThreeJsMarketEngine = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, #0a1a1a 0%, #040404 50%, #000000 100%)' }}>
      <Canvas
        camera={{ position: [0, 2, 15], fov: 65, near: 0.1, far: 300 }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
        performance={{ min: 0.5 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
      >
        <MarketScene isMobile={isMobile} />
      </Canvas>

      {/* Cinematic vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.9) 100%)',
        }}
      />
      
      {/* Scan lines effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)',
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ThreeJsMarketEngine;
