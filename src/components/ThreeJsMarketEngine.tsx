import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Candlestick cluster component
const CandlestickCluster = ({ position, isBullish, scale = 1 }: { position: [number, number, number]; isBullish: boolean; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.z += 0.01;
      if (meshRef.current.position.z > 10) {
        meshRef.current.position.z = -50;
      }
    }
  });

  const color = isBullish ? '#00FFFF' : '#8B0000';
  const emissiveIntensity = hovered ? 0.8 : 0.3;

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.3, Math.random() * 1.5 + 0.5, 0.3]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>
    </Float>
  );
};

// Hexagonal blockchain node
const BlockchainNode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [pulse, setPulse] = useState(0);

  useFrame((state) => {
    if (meshRef.current) {
      setPulse(Math.sin(state.clock.elapsedTime * 2) * 0.3 + 1);
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.z += 0.008;
      if (meshRef.current.position.z > 15) {
        meshRef.current.position.z = -60;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={pulse * 0.5}>
      <cylinderGeometry args={[0.4, 0.4, 0.1, 6]} />
      <meshStandardMaterial
        color="#00FFFF"
        transparent
        opacity={0.4}
        emissive="#00FFFF"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Smart contract connection lines
const SmartLines = ({ nodes }: { nodes: [number, number, number][] }) => {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          positions.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#00FFFF" transparent opacity={0.3} />
    </lineSegments>
  );
};

// Infinite perspective grid
const InfiniteGrid = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
    }
  });

  return (
    <group>
      <gridHelper
        ref={gridRef}
        args={[200, 100, '#1a1a1a', '#0a0a0a']}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -50]}
      />
    </group>
  );
};

// Data stream particles
const DataStream = ({ position, tickers }: { position: [number, number, number]; tickers: string[] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y -= 0.02;
      if (groupRef.current.position.y < -20) {
        groupRef.current.position.y = 20;
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {tickers.map((_, i) => (
        <mesh key={i} position={[0, i * 2, 0]}>
          <planeGeometry args={[0.02, 0.2]} />
          <meshBasicMaterial color="#FFBF00" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

// Mouse parallax camera controller
const CameraController = () => {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouseRef.current.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -20);
  });

  return null;
};

// Main scene component
const MarketScene = ({ isMobile }: { isMobile: boolean }) => {
  const particleCount = isMobile ? 15 : 30;
  const nodeCount = isMobile ? 8 : 20;

  const candlesticks = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
        -Math.random() * 50 - 10,
      ] as [number, number, number],
      isBullish: Math.random() > 0.4,
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, [particleCount]);

  const blockchainNodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => [
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 30,
      -Math.random() * 60 - 20,
    ] as [number, number, number]);
  }, [nodeCount]);

  const dataStreams = useMemo(() => {
    const tickers = ['BTC', 'ETH', 'SPX', 'NASDAQ', 'GOLD'];
    return Array.from({ length: isMobile ? 3 : 6 }, (_, i) => ({
      position: [(i - 2.5) * 15, Math.random() * 20, -40 - Math.random() * 20] as [number, number, number],
      tickers,
    }));
  }, [isMobile]);

  return (
    <>
      <CameraController />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FFBF00" />
      
      <Stars
        radius={100}
        depth={50}
        count={isMobile ? 1000 : 3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <InfiniteGrid />

      {candlesticks.map((candle, i) => (
        <CandlestickCluster
          key={`candle-${i}`}
          position={candle.position}
          isBullish={candle.isBullish}
          scale={candle.scale}
        />
      ))}

      {blockchainNodes.map((pos, i) => (
        <BlockchainNode key={`node-${i}`} position={pos} />
      ))}

      <SmartLines nodes={blockchainNodes} />

      {dataStreams.map((stream, i) => (
        <DataStream key={`stream-${i}`} position={stream.position} tickers={stream.tickers} />
      ))}

      {/* Fog for depth effect */}
      <fog attach="fog" args={['#040404', 10, 80]} />
    </>
  );
};

const ThreeJsMarketEngine = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0" style={{ background: 'linear-gradient(180deg, #040404 0%, #121212 50%, #0a0a0a 100%)' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60, near: 0.1, far: 200 }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <MarketScene isMobile={isMobile} />
      </Canvas>
      
      {/* Overlay gradients for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(4, 4, 4, 0.3) 70%, rgba(4, 4, 4, 0.8) 100%)'
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ThreeJsMarketEngine;
