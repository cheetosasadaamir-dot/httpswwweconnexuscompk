import { useRef, useMemo, useEffect, useState, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useDevicePerformance, type PerformanceTier } from '@/hooks/use-device-performance';

// ============================================================================
// ACADEMIC ENGINE — 3D Knowledge Mesh Background
// Deep Obsidian + Academic Gold + University Blue
// ============================================================================

interface PerformanceConfig {
  nodeCount: number;
  connectionDistance: number;
  dpr: number;
  enableBloom: boolean;
}

const getPerformanceConfig = (tier: PerformanceTier, isMobile: boolean): PerformanceConfig => {
  if (tier === 'low' || isMobile) {
    return { nodeCount: 60, connectionDistance: 4.5, dpr: 1, enableBloom: false };
  }
  if (tier === 'medium') {
    return { nodeCount: 120, connectionDistance: 5, dpr: 1.5, enableBloom: true };
  }
  return { nodeCount: 200, connectionDistance: 5.5, dpr: Math.min(window.devicePixelRatio, 2), enableBloom: true };
};

// Colors
const GOLD = new THREE.Color('#D4AF37');
const BLUE = new THREE.Color('#1E3A8A');
const GOLD_BRIGHT = new THREE.Color('#F0D060');
const BLUE_BRIGHT = new THREE.Color('#3B82F6');

// Generate icosahedron-like lattice positions distributed in a sphere
const generateLatticeNodes = (count: number) => {
  const positions: THREE.Vector3[] = [];
  const phi = (1 + Math.sqrt(5)) / 2; // golden ratio
  for (let i = 0; i < count; i++) {
    // Fibonacci sphere distribution
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = 2 * Math.PI * i / phi;
    const r = 8 + Math.random() * 4; // varied radius for depth
    positions.push(new THREE.Vector3(
      Math.cos(theta) * radius * r,
      y * r,
      Math.sin(theta) * radius * r
    ));
  }
  return positions;
};

// Knowledge Mesh — nodes rendered as instanced spheres with glow
const KnowledgeNodes = memo(({ count }: { count: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const glowRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const nodePositions = useMemo(() => generateLatticeNodes(count), [count]);
  const nodeData = useMemo(() => nodePositions.map((pos, i) => ({
    pos,
    phase: Math.random() * Math.PI * 2,
    isGold: i % 3 === 0, // 1/3 gold, 2/3 blue
    pulseSpeed: 0.8 + Math.random() * 1.2,
  })), [nodePositions]);

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const n = nodeData[i];
      const pulse = 0.8 + Math.sin(t * n.pulseSpeed + n.phase) * 0.3;

      dummy.position.copy(n.pos);
      dummy.scale.setScalar(0.06 * pulse);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, n.isGold ? GOLD_BRIGHT : BLUE_BRIGHT);

      // Glow sphere (larger, more transparent)
      dummy.scale.setScalar(0.18 * pulse);
      dummy.updateMatrix();
      glowRef.current.setMatrixAt(i, dummy.matrix);
      glowRef.current.setColorAt(i, n.isGold ? GOLD : BLUE);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    glowRef.current.instanceMatrix.needsUpdate = true;
    if (glowRef.current.instanceColor) glowRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <>
      {/* Core nodes */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial transparent opacity={1} blending={THREE.AdditiveBlending} />
      </instancedMesh>
      {/* Glow halos */}
      <instancedMesh ref={glowRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </instancedMesh>
    </>
  );
});
KnowledgeNodes.displayName = 'KnowledgeNodes';

// Connection lines between nearby nodes
const ConnectionLines = memo(({ count, maxDist }: { count: number; maxDist: number }) => {
  const lineRef = useRef<THREE.LineSegments>(null);

  const { positions: nodePositions, geometry } = useMemo(() => {
    const nodes = generateLatticeNodes(count);
    const verts: number[] = [];
    const colors: number[] = [];
    const goldC = GOLD;
    const blueC = BLUE;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < maxDist) {
          verts.push(nodes[i].x, nodes[i].y, nodes[i].z);
          verts.push(nodes[j].x, nodes[j].y, nodes[j].z);
          // Blend color based on distance
          const t = dist / maxDist;
          const c = i % 3 === 0 ? goldC : blueC;
          const alpha = 1 - t;
          colors.push(c.r * alpha, c.g * alpha, c.b * alpha);
          colors.push(c.r * alpha * 0.5, c.g * alpha * 0.5, c.b * alpha * 0.5);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return { positions: nodes, geometry: geo };
  }, [count, maxDist]);

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        linewidth={1}
      />
    </lineSegments>
  );
});
ConnectionLines.displayName = 'ConnectionLines';

// Slow rotating lattice group
const RotatingLattice = memo(({ config }: { config: PerformanceConfig }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.04;
    groupRef.current.rotation.x += delta * 0.008;
  });

  return (
    <group ref={groupRef}>
      <KnowledgeNodes count={config.nodeCount} />
      <ConnectionLines count={config.nodeCount} maxDist={config.connectionDistance} />
    </group>
  );
});
RotatingLattice.displayName = 'RotatingLattice';

// Mouse parallax camera with lerp for organic motion
const CameraRig = memo(() => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const smoothed = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const throttled = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => onMove(e));
    };
    window.addEventListener('mousemove', throttled, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttled);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useFrame((state) => {
    // Lerp for liquid-smooth parallax
    smoothed.current.x += (mouse.current.x - smoothed.current.x) * 0.02;
    smoothed.current.y += (-mouse.current.y - smoothed.current.y) * 0.02;

    camera.position.x = smoothed.current.x * 2;
    camera.position.y = smoothed.current.y * 1.5 + 1;
    camera.position.z = 18 + Math.sin(state.clock.elapsedTime * 0.15) * 1;
    camera.lookAt(0, 0, 0);
  });

  return null;
});
CameraRig.displayName = 'CameraRig';

// Ambient particles — tiny floating dust
const AcademicDust = memo(({ count }: { count: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 30,
    y: (Math.random() - 0.5) * 30,
    z: (Math.random() - 0.5) * 30,
    vx: (Math.random() - 0.5) * 0.002,
    vy: (Math.random() - 0.5) * 0.002,
    phase: Math.random() * Math.PI * 2,
  })), [count]);

  const dustColor = useMemo(() => new THREE.Color('#D4AF37'), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      const s = 0.015 + Math.sin(t * 1.5 + p.phase) * 0.008;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, dustColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial transparent opacity={0.5} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  );
});
AcademicDust.displayName = 'AcademicDust';

// Main scene
const AcademicScene = memo(({ config }: { config: PerformanceConfig }) => (
  <>
    <CameraRig />
    <ambientLight intensity={0.05} />
    <pointLight position={[10, 10, 10]} intensity={0.3} color="#D4AF37" distance={40} />
    <pointLight position={[-10, -5, 8]} intensity={0.2} color="#1E3A8A" distance={35} />
    <RotatingLattice config={config} />
    <AcademicDust count={config.nodeCount} />
    <fog attach="fog" args={['#020617', 15, 35]} />
  </>
));
AcademicScene.displayName = 'AcademicScene';

const ThreeJsMarketEngine = () => {
  const { tier, isMobile } = useDevicePerformance();
  const [isVisible, setIsVisible] = useState(true);
  const config = useMemo(() => getPerformanceConfig(tier, isMobile), [tier, isMobile]);

  useEffect(() => {
    const handler = () => setIsVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, []);

  const bgStyle = {
    background: 'radial-gradient(ellipse at 50% 30%, #0c1229 0%, #020617 50%, #010309 100%)',
  };

  if (!isVisible) {
    return <div className="fixed inset-0 z-0 pointer-events-none" style={bgStyle} />;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={bgStyle}>
      <Canvas
        camera={{ position: [0, 1, 18], fov: 55, near: 0.1, far: 100 }}
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
        <AcademicScene config={config} />
      </Canvas>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 15%, rgba(2,6,23,0.4) 55%, rgba(2,6,23,0.9) 100%)',
        }}
      />

      {/* Subtle gold scan lines */}
      {config.enableBloom && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.008]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(212,175,55,0.03) 3px, rgba(212,175,55,0.03) 6px)',
          }}
        />
      )}
    </div>
  );
};

export default memo(ThreeJsMarketEngine);
