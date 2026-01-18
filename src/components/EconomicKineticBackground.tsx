import { useEffect, useRef, useCallback } from 'react';

interface GridNode {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  connections: number[];
}

interface DataParticle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: 'cyan' | 'gold';
  trail: { x: number; y: number }[];
}

interface BezierCurve {
  startX: number;
  startY: number;
  cp1X: number;
  cp1Y: number;
  cp2X: number;
  cp2Y: number;
  endX: number;
  endY: number;
  phase: number;
  opacity: number;
  color: string;
  direction: 1 | -1;
}

interface FinancialSymbol {
  type: 'candlestick' | 'trendline';
  x: number;
  y: number;
  opacity: number;
  phase: number;
  data: number[];
}

const EconomicKineticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const gridRef = useRef<GridNode[]>([]);
  const particlesRef = useRef<DataParticle[]>([]);
  const curvesRef = useRef<BezierCurve[]>([]);
  const symbolsRef = useRef<FinancialSymbol[]>([]);
  const lastSymbolTimeRef = useRef(0);
  const frameRef = useRef<number>(0);

  // Colors from the 5D theme
  const colors = {
    obsidian: '#040404',
    charcoal: '#121212',
    cyan: '#00d4ff',
    cyanGlow: 'rgba(0, 212, 255, 0.15)',
    gold: '#d4a020',
    goldGlow: 'rgba(212, 160, 32, 0.12)',
    gridLine: 'rgba(255, 255, 255, 0.03)',
    gridNode: 'rgba(255, 255, 255, 0.06)',
  };

  const initializeElements = useCallback((width: number, height: number) => {
    // Initialize 5D Grid Nodes
    const gridSpacing = 80;
    const nodes: GridNode[] = [];
    const cols = Math.ceil(width / gridSpacing) + 2;
    const rows = Math.ceil(height / gridSpacing) + 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * gridSpacing - gridSpacing;
        const y = row * gridSpacing - gridSpacing;
        const index = row * cols + col;
        const connections: number[] = [];

        // Connect to right and bottom neighbors
        if (col < cols - 1) connections.push(index + 1);
        if (row < rows - 1) connections.push(index + cols);
        // Diagonal connections for 5D effect
        if (col < cols - 1 && row < rows - 1) connections.push(index + cols + 1);

        nodes.push({
          x,
          y,
          z: Math.random() * 0.5 + 0.5,
          baseX: x,
          baseY: y,
          connections,
        });
      }
    }
    gridRef.current = nodes;

    // Initialize Data Stream Particles
    const particleCount = Math.floor((width * height) / 25000);
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)];
      const endNode = nodes[Math.floor(Math.random() * nodes.length)];
      return {
        x: startNode.x,
        y: startNode.y,
        targetX: endNode.x,
        targetY: endNode.y,
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
        color: Math.random() > 0.5 ? 'cyan' : 'gold',
        trail: [],
      } as DataParticle;
    });

    // Initialize Dynamic Bezier Curves (Supply/Demand style)
    curvesRef.current = Array.from({ length: 6 }, (_, i) => ({
      startX: Math.random() * width * 0.3,
      startY: height * 0.2 + Math.random() * height * 0.6,
      cp1X: width * 0.3 + Math.random() * width * 0.2,
      cp1Y: Math.random() * height,
      cp2X: width * 0.5 + Math.random() * width * 0.2,
      cp2Y: Math.random() * height,
      endX: width * 0.7 + Math.random() * width * 0.3,
      endY: height * 0.2 + Math.random() * height * 0.6,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.03 + Math.random() * 0.04,
      color: i % 2 === 0 ? colors.cyan : colors.gold,
      direction: (i % 2 === 0 ? 1 : -1) as 1 | -1,
    }));

    // Initialize Financial Symbols (empty - will spawn periodically)
    symbolsRef.current = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeElements(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const spawnFinancialSymbol = (width: number, height: number) => {
      const type = Math.random() > 0.5 ? 'candlestick' : 'trendline';
      const symbol: FinancialSymbol = {
        type,
        x: width * 0.2 + Math.random() * width * 0.6,
        y: height * 0.2 + Math.random() * height * 0.6,
        opacity: 0,
        phase: 0,
        data: type === 'candlestick'
          ? Array.from({ length: 8 }, () => Math.random() * 60 + 20)
          : Array.from({ length: 12 }, (_, i) => 50 + Math.sin(i * 0.5) * 30 + Math.random() * 10),
      };
      symbolsRef.current.push(symbol);
    };

    const drawGrid = (ctx: CanvasRenderingContext2D, time: number) => {
      const nodes = gridRef.current;
      const scroll = scrollRef.current * 0.0002;
      const mouse = mouseRef.current;

      // Update node positions with parallax and mouse influence
      nodes.forEach((node) => {
        const parallax = node.z * 0.3;
        const mouseInfluenceX = (mouse.x - node.baseX) * 0.002 * parallax;
        const mouseInfluenceY = (mouse.y - node.baseY) * 0.002 * parallax;

        node.x = node.baseX 
          + Math.sin(time * 0.2 + node.baseX * 0.005) * 3 * node.z
          + mouseInfluenceX * 8
          + scroll * 20 * (1 - parallax);
        node.y = node.baseY 
          + Math.cos(time * 0.15 + node.baseY * 0.005) * 3 * node.z
          + mouseInfluenceY * 8
          + scroll * 15 * (1 - parallax);
      });

      // Draw grid lines
      ctx.strokeStyle = colors.gridLine;
      ctx.lineWidth = 0.5;

      nodes.forEach((node) => {
        node.connections.forEach((connIndex) => {
          const connNode = nodes[connIndex];
          if (!connNode) return;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connNode.x, connNode.y);
          ctx.stroke();
        });
      });

      // Draw grid nodes with subtle glow
      nodes.forEach((node) => {
        const glowSize = 2 + node.z * 2;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize * 3
        );
        gradient.addColorStop(0, colors.gridNode);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawDataStreams = (ctx: CanvasRenderingContext2D, _time: number) => {
      const particles = particlesRef.current;
      const nodes = gridRef.current;

      particles.forEach((particle) => {
        // Update particle position along path
        particle.progress += particle.speed;

        if (particle.progress >= 1) {
          // Pick new target
          particle.progress = 0;
          particle.x = particle.targetX;
          particle.y = particle.targetY;
          const newTarget = nodes[Math.floor(Math.random() * nodes.length)];
          particle.targetX = newTarget.x;
          particle.targetY = newTarget.y;
          particle.trail = [];
        }

        // Interpolate position
        const t = particle.progress;
        const easeT = t * t * (3 - 2 * t); // Smooth step
        const newX = particle.x + (particle.targetX - particle.x) * easeT;
        const newY = particle.y + (particle.targetY - particle.y) * easeT;

        // Add to trail
        particle.trail.push({ x: newX, y: newY });
        if (particle.trail.length > 15) particle.trail.shift();

        // Draw trail
        if (particle.trail.length > 1) {
          const particleColor = particle.color === 'cyan' ? colors.cyan : colors.gold;
          const glowColor = particle.color === 'cyan' ? colors.cyanGlow : colors.goldGlow;

          ctx.strokeStyle = glowColor;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          particle.trail.forEach((point) => ctx.lineTo(point.x, point.y));
          ctx.stroke();

          ctx.strokeStyle = particleColor;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          particle.trail.forEach((point) => ctx.lineTo(point.x, point.y));
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Draw particle head
        const headColor = particle.color === 'cyan' ? colors.cyan : colors.gold;
        const headX = particle.trail[particle.trail.length - 1]?.x || newX;
        const headY = particle.trail[particle.trail.length - 1]?.y || newY;

        const headGradient = ctx.createRadialGradient(headX, headY, 0, headX, headY, 6);
        headGradient.addColorStop(0, headColor);
        headGradient.addColorStop(0.5, `${headColor}66`);
        headGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = headGradient;
        ctx.beginPath();
        ctx.arc(headX, headY, 6, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawDynamicCurves = (ctx: CanvasRenderingContext2D, time: number, width: number, height: number) => {
      const curves = curvesRef.current;

      curves.forEach((curve) => {
        // Animate control points slowly
        const phaseOffset = time * 0.1 * curve.direction + curve.phase;
        const wave1 = Math.sin(phaseOffset) * 50;
        const wave2 = Math.cos(phaseOffset * 0.7) * 40;

        const animatedCp1Y = curve.cp1Y + wave1;
        const animatedCp2Y = curve.cp2Y + wave2;

        // Draw the curve with glow
        ctx.strokeStyle = curve.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = curve.opacity;

        // Glow layer
        ctx.shadowColor = curve.color;
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.moveTo(
          curve.startX + Math.sin(time * 0.05) * 20,
          curve.startY + wave1 * 0.5
        );
        ctx.bezierCurveTo(
          curve.cp1X + Math.cos(time * 0.08) * 15,
          animatedCp1Y,
          curve.cp2X + Math.sin(time * 0.06) * 15,
          animatedCp2Y,
          curve.endX + Math.cos(time * 0.04) * 20,
          curve.endY + wave2 * 0.5
        );
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Occasionally draw intersection points
        if (Math.sin(time * 0.3 + curve.phase) > 0.9) {
          const intersectX = width * 0.5 + Math.sin(curve.phase) * 100;
          const intersectY = height * 0.5 + Math.cos(curve.phase) * 100;

          const intersectGradient = ctx.createRadialGradient(
            intersectX, intersectY, 0,
            intersectX, intersectY, 15
          );
          intersectGradient.addColorStop(0, `${curve.color}33`);
          intersectGradient.addColorStop(1, 'transparent');

          ctx.fillStyle = intersectGradient;
          ctx.beginPath();
          ctx.arc(intersectX, intersectY, 15, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const drawFinancialSymbols = (ctx: CanvasRenderingContext2D, time: number) => {
      const symbols = symbolsRef.current;

      symbols.forEach((symbol, index) => {
        // Update phase (fade in, hold, fade out)
        symbol.phase += 0.005;

        // Calculate opacity (fade in for first 20%, hold 60%, fade out last 20%)
        if (symbol.phase < 0.2) {
          symbol.opacity = symbol.phase * 5;
        } else if (symbol.phase > 0.8) {
          symbol.opacity = (1 - symbol.phase) * 5;
        } else {
          symbol.opacity = 1;
        }

        // Remove completed symbols
        if (symbol.phase >= 1) {
          symbolsRef.current.splice(index, 1);
          return;
        }

        ctx.globalAlpha = symbol.opacity * 0.08;

        if (symbol.type === 'candlestick') {
          // Draw candlestick pattern
          const candleWidth = 12;
          const spacing = 18;
          symbol.data.forEach((value, i) => {
            const x = symbol.x - (symbol.data.length * spacing) / 2 + i * spacing;
            const open = value;
            const close = value + (Math.random() - 0.5) * 20;
            const high = Math.max(open, close) + Math.random() * 10;
            const low = Math.min(open, close) - Math.random() * 10;

            const isBullish = close > open;
            ctx.strokeStyle = isBullish ? colors.cyan : colors.gold;
            ctx.fillStyle = isBullish ? colors.cyan : colors.gold;

            // Wick
            ctx.beginPath();
            ctx.moveTo(x + candleWidth / 2, symbol.y - high);
            ctx.lineTo(x + candleWidth / 2, symbol.y - low);
            ctx.stroke();

            // Body
            ctx.fillRect(
              x,
              symbol.y - Math.max(open, close),
              candleWidth,
              Math.abs(close - open) || 2
            );
          });
        } else {
          // Draw trendline pattern
          ctx.strokeStyle = colors.cyan;
          ctx.lineWidth = 1.5;
          ctx.beginPath();

          symbol.data.forEach((value, i) => {
            const x = symbol.x - 100 + i * 20;
            const y = symbol.y - value + Math.sin(time * 0.5 + i * 0.3) * 5;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          });

          ctx.stroke();

          // Add trend arrow
          const lastX = symbol.x + 100;
          const lastY = symbol.y - symbol.data[symbol.data.length - 1];
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(lastX - 8, lastY - 5);
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(lastX - 8, lastY + 5);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      });
    };

    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      const time = timeRef.current;

      // Radial gradient background (Obsidian center, Charcoal edges)
      const centerGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.7
      );
      centerGradient.addColorStop(0, colors.obsidian);
      centerGradient.addColorStop(0.4, '#080808');
      centerGradient.addColorStop(0.7, '#0e0e0e');
      centerGradient.addColorStop(1, colors.charcoal);

      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all layers
      drawGrid(ctx, time);
      drawDynamicCurves(ctx, time, canvas.width, canvas.height);
      drawDataStreams(ctx, time);
      drawFinancialSymbols(ctx, time);

      // Spawn financial symbol every ~30 seconds
      if (time - lastSymbolTimeRef.current > 30) {
        spawnFinancialSymbol(canvas.width, canvas.height);
        lastSymbolTimeRef.current = time;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initializeElements]);

  return (
    <>
      {/* Deep 5D radial background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.obsidian} 0%, #080808 35%, #0e0e0e 60%, ${colors.charcoal} 100%)`,
        }}
      />

      {/* Main kinetic canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[1]"
        style={{
          opacity: 0.9,
        }}
      />

      {/* Subtle noise texture */}
      <div 
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.02,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Deep vignette for 5D depth */}
      <div 
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 100%)`,
        }}
      />
    </>
  );
};

export default EconomicKineticBackground;
