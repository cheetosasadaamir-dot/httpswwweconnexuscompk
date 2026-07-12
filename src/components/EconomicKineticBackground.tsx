import { useEffect, useRef, useCallback, useState } from 'react';

// ============ INTERFACES ============
interface VoxelNode {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  connections: number[];
  pulsePhase: number;
}

interface BlockchainNode {
  x: number;
  y: number;
  z: number;
  size: number;
  pulsePhase: number;
  connections: number[];
  active: boolean;
}

interface Candlestick {
  x: number;
  y: number;
  open: number;
  high: number;
  low: number;
  close: number;
  bullish: boolean;
  opacity: number;
  phase: number;
  speed: number;
}

interface TrendLine {
  points: { x: number; y: number }[];
  color: 'cyan' | 'crimson';
  opacity: number;
  phase: number;
  speed: number;
}

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
  x: number;
}

// ============ COMPONENT ============
const EconomicKineticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  
  // Data refs
  const voxelGridRef = useRef<VoxelNode[]>([]);
  const blockchainNodesRef = useRef<BlockchainNode[]>([]);
  const candlesticksRef = useRef<Candlestick[]>([]);
  const trendLinesRef = useRef<TrendLine[]>([]);
  const tickerRef = useRef<TickerItem[]>([]);
  
  // Performance state
  const [isMobile, setIsMobile] = useState(false);

  // Color palette - Bloomberg Terminal meets premium education
  const colors = {
    obsidian: '#030303',
    charcoal: '#0a0a0a',
    deepCharcoal: '#121212',
    cyan: '#00d4ff',
    cyanGlow: 'rgba(0, 212, 255, 0.2)',
    cyanMuted: 'rgba(0, 212, 255, 0.08)',
    gold: '#d4a020',
    goldGlow: 'rgba(212, 160, 32, 0.15)',
    crimson: '#dc2626',
    crimsonGlow: 'rgba(220, 38, 38, 0.15)',
    gridLine: 'rgba(255, 255, 255, 0.025)',
    gridNode: 'rgba(255, 255, 255, 0.04)',
    blockchainHex: 'rgba(0, 212, 255, 0.12)',
    smartContract: 'rgba(212, 160, 32, 0.08)',
  };

  // Initialize all visual elements
  const initializeElements = useCallback((width: number, height: number, lowPower: boolean) => {
    const particleMultiplier = lowPower ? 0.4 : 1;

    // ===== 5D VOXEL GRID =====
    const gridSpacing = lowPower ? 120 : 80;
    const nodes: VoxelNode[] = [];
    const cols = Math.ceil(width / gridSpacing) + 2;
    const rows = Math.ceil(height / gridSpacing) + 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * gridSpacing - gridSpacing;
        const y = row * gridSpacing - gridSpacing;
        const index = row * cols + col;
        const connections: number[] = [];

        // Connect to neighbors for infinite Z-axis effect
        if (col < cols - 1) connections.push(index + 1);
        if (row < rows - 1) connections.push(index + cols);
        if (col < cols - 1 && row < rows - 1) connections.push(index + cols + 1);
        if (col > 0 && row < rows - 1) connections.push(index + cols - 1);

        nodes.push({
          x, y,
          z: Math.random() * 0.8 + 0.2,
          baseX: x,
          baseY: y,
          connections,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }
    voxelGridRef.current = nodes;

    // ===== BLOCKCHAIN HEXAGONAL NODES =====
    const blockchainCount = Math.floor(15 * particleMultiplier);
    blockchainNodesRef.current = Array.from({ length: blockchainCount }, (_, i) => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const connections: number[] = [];
      
      // Random connections to other nodes
      for (let j = 0; j < 3; j++) {
        const target = Math.floor(Math.random() * blockchainCount);
        if (target !== i && !connections.includes(target)) {
          connections.push(target);
        }
      }

      return {
        x, y,
        z: Math.random() * 0.6 + 0.4,
        size: 20 + Math.random() * 15,
        pulsePhase: Math.random() * Math.PI * 2,
        connections,
        active: Math.random() > 0.7,
      };
    });

    // ===== FLOATING CANDLESTICKS =====
    const candleCount = Math.floor(6 * particleMultiplier);
    candlesticksRef.current = Array.from({ length: candleCount }, () => ({
      x: width + Math.random() * 200,
      y: height * 0.15 + Math.random() * height * 0.7,
      open: 30 + Math.random() * 40,
      high: 0,
      low: 0,
      close: 0,
      bullish: Math.random() > 0.45,
      opacity: 0.04 + Math.random() * 0.04,
      phase: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.1,
    })).map(c => {
      const move = 10 + Math.random() * 25;
      c.close = c.bullish ? c.open + move : c.open - move;
      c.high = Math.max(c.open, c.close) + Math.random() * 15;
      c.low = Math.min(c.open, c.close) - Math.random() * 15;
      return c;
    });

    // ===== TREND LINES =====
    const trendCount = Math.floor(4 * particleMultiplier);
    trendLinesRef.current = Array.from({ length: trendCount }, () => {
      const pointCount = 8 + Math.floor(Math.random() * 6);
      const startX = width + 50;
      const startY = height * 0.2 + Math.random() * height * 0.6;
      const isBullish = Math.random() > 0.45;
      
      const points = Array.from({ length: pointCount }, (_, i) => ({
        x: startX - i * 40,
        y: startY + (isBullish ? -1 : 1) * i * 8 + (Math.random() - 0.5) * 30,
      }));

      return {
        points,
        color: isBullish ? 'cyan' : 'crimson',
        opacity: 0.06 + Math.random() * 0.04,
        phase: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.15,
      } as TrendLine;
    });

    // ===== LIVE TICKER =====
    const tickerSymbols = [
      { symbol: 'BTC/USD', base: 67500 },
      { symbol: 'ETH/USD', base: 3450 },
      { symbol: 'S&P 500', base: 5230 },
      { symbol: 'GOLD', base: 2340 },
      { symbol: 'EUR/USD', base: 1.085 },
      { symbol: 'NASDAQ', base: 16720 },
      { symbol: 'DOW', base: 39850 },
      { symbol: 'XAU/USD', base: 2355 },
    ];

    tickerRef.current = tickerSymbols.map((item, i) => ({
      symbol: item.symbol,
      price: item.base + (Math.random() - 0.5) * item.base * 0.02,
      change: (Math.random() - 0.48) * 4,
      x: i * 180,
    }));

  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Detect mobile for low-power mode
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      return mobile;
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initializeElements(window.innerWidth, window.innerHeight, checkMobile());
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

    // ========== DRAWING FUNCTIONS ==========

    const drawVoxelGrid = (time: number, width: number, height: number) => {
      const nodes = voxelGridRef.current;
      const scroll = scrollRef.current * 0.0001;
      const mouse = mouseRef.current;

      // Update positions with 5D parallax and mouse reaction
      nodes.forEach((node) => {
        const depthFactor = node.z;
        const mouseDistX = mouse.x - node.baseX;
        const mouseDistY = mouse.y - node.baseY;
        
        // Inverse parallax - move opposite to mouse for 3D depth
        const mouseInfluenceX = -mouseDistX * 0.003 * depthFactor;
        const mouseInfluenceY = -mouseDistY * 0.003 * depthFactor;

        // Infinite Z-axis drift
        const zDrift = Math.sin(time * 0.08 + node.pulsePhase) * 4 * depthFactor;
        
        node.x = node.baseX + mouseInfluenceX * 12 + scroll * 30 * depthFactor + zDrift;
        node.y = node.baseY + mouseInfluenceY * 12 + scroll * 20 * depthFactor;
      });

      // Draw grid with depth-based opacity
      nodes.forEach((node) => {
        const nodeOpacity = 0.015 + node.z * 0.02;
        ctx.strokeStyle = `rgba(255, 255, 255, ${nodeOpacity})`;
        ctx.lineWidth = 0.5;

        node.connections.forEach((connIndex) => {
          const connNode = nodes[connIndex];
          if (!connNode) return;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connNode.x, connNode.y);
          ctx.stroke();
        });

        // Subtle node glow
        const glowIntensity = 0.5 + Math.sin(time * 0.5 + node.pulsePhase) * 0.3;
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6 * node.z);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.03 * glowIntensity})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6 * node.z, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawBlockchainNodes = (time: number, width: number) => {
      const nodes = blockchainNodesRef.current;
      const scroll = scrollRef.current * 0.0002;

      nodes.forEach((node, index) => {
        // Drift with scroll visibility
        const visibility = 1 - Math.abs(scroll * 50 - index * 0.3) * 0.1;
        if (visibility <= 0) return;

        const pulse = 0.7 + Math.sin(time * 0.8 + node.pulsePhase) * 0.3;
        const size = node.size * pulse;

        // Draw hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const hx = node.x + Math.cos(angle) * size;
          const hy = node.y + Math.sin(angle) * size;
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();

        // Fill with glow
        const hexGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 1.5);
        hexGradient.addColorStop(0, node.active ? colors.cyanMuted : colors.blockchainHex);
        hexGradient.addColorStop(0.6, node.active ? 'rgba(0, 212, 255, 0.04)' : 'rgba(0, 212, 255, 0.02)');
        hexGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = hexGradient;
        ctx.fill();

        ctx.strokeStyle = node.active ? colors.cyanGlow : colors.blockchainHex;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw "smart contract" connection lines (appear/disappear with scroll)
        if (visibility > 0.5) {
          node.connections.forEach((targetIndex) => {
            const target = nodes[targetIndex];
            if (!target) return;

            const connectionPhase = (Math.sin(time * 0.3 + index * 0.5) + 1) / 2;
            if (connectionPhase > 0.4) {
              ctx.strokeStyle = colors.smartContract;
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 8]);
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          });
        }

        // Toggle active state occasionally
        if (Math.random() < 0.002) {
          node.active = !node.active;
        }
      });
    };

    const drawCandlesticks = (time: number, width: number) => {
      const candles = candlesticksRef.current;

      candles.forEach((candle) => {
        // Move left across screen
        candle.x -= candle.speed;
        
        // Reset when off screen
        if (candle.x < -100) {
          candle.x = width + 100 + Math.random() * 200;
          candle.y = window.innerHeight * 0.15 + Math.random() * window.innerHeight * 0.7;
          candle.bullish = Math.random() > 0.45;
          const move = 10 + Math.random() * 25;
          candle.open = 30 + Math.random() * 40;
          candle.close = candle.bullish ? candle.open + move : candle.open - move;
          candle.high = Math.max(candle.open, candle.close) + Math.random() * 15;
          candle.low = Math.min(candle.open, candle.close) - Math.random() * 15;
        }

        const color = candle.bullish ? colors.cyan : colors.crimson;
        const glow = candle.bullish ? colors.cyanGlow : colors.crimsonGlow;

        ctx.globalAlpha = candle.opacity;

        // Wick with glow
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(candle.x, candle.y - candle.high);
        ctx.lineTo(candle.x, candle.y - candle.low);
        ctx.stroke();

        // Body
        const bodyTop = Math.max(candle.open, candle.close);
        const bodyHeight = Math.abs(candle.close - candle.open) || 2;
        
        ctx.fillStyle = color;
        ctx.fillRect(candle.x - 6, candle.y - bodyTop, 12, bodyHeight);
        
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });
    };

    const drawTrendLines = (time: number, width: number) => {
      const lines = trendLinesRef.current;

      lines.forEach((line) => {
        // Move points left
        line.points.forEach((point) => {
          point.x -= line.speed;
        });

        // Reset when off screen
        if (line.points[line.points.length - 1].x < -50) {
          const pointCount = line.points.length;
          const startX = width + 50;
          const startY = window.innerHeight * 0.2 + Math.random() * window.innerHeight * 0.6;
          const isBullish = line.color === 'cyan';
          
          line.points = Array.from({ length: pointCount }, (_, i) => ({
            x: startX - i * 40,
            y: startY + (isBullish ? -1 : 1) * i * 8 + (Math.random() - 0.5) * 30,
          }));
        }

        const color = line.color === 'cyan' ? colors.cyan : colors.crimson;
        
        ctx.globalAlpha = line.opacity;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        line.points.forEach((point, i) => {
          // Add subtle wave motion
          const waveY = Math.sin(time * 0.5 + i * 0.3 + line.phase) * 3;
          if (i === 0) ctx.moveTo(point.x, point.y + waveY);
          else ctx.lineTo(point.x, point.y + waveY);
        });
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });
    };

    const drawLiveTicker = (time: number, width: number, height: number) => {
      const ticker = tickerRef.current;
      const tickerY = height - 25;
      const tickerSpeed = 0.5;

      // Update ticker positions
      ticker.forEach((item, i) => {
        item.x -= tickerSpeed;
        
        // Wrap around
        if (item.x < -180) {
          item.x = width + 20;
          // Update price with small fluctuation
          item.price += (Math.random() - 0.5) * item.price * 0.001;
          item.change += (Math.random() - 0.5) * 0.1;
        }
      });

      // Draw ticker background blur
      ctx.fillStyle = 'rgba(3, 3, 3, 0.7)';
      ctx.fillRect(0, height - 50, width, 50);

      // Draw ticker items
      ctx.font = '11px "JetBrains Mono", monospace';
      ticker.forEach((item) => {
        const isPositive = item.change >= 0;
        const color = isPositive ? colors.cyan : colors.crimson;
        
        ctx.globalAlpha = 0.7;
        
        // Symbol
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText(item.symbol, item.x, tickerY);
        
        // Price
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        const priceText = item.price < 10 ? item.price.toFixed(4) : item.price.toFixed(2);
        ctx.fillText(priceText, item.x + 70, tickerY);
        
        // Change
        ctx.fillStyle = color;
        const changeText = `${isPositive ? '+' : ''}${item.change.toFixed(2)}%`;
        ctx.fillText(changeText, item.x + 135, tickerY);
        
        ctx.globalAlpha = 1;
      });
    };

    // ========== MAIN ANIMATION LOOP ==========
    const animate = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Deep 5D radial gradient background
      const bgGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      bgGradient.addColorStop(0, colors.obsidian);
      bgGradient.addColorStop(0.3, '#050505');
      bgGradient.addColorStop(0.6, colors.charcoal);
      bgGradient.addColorStop(1, colors.deepCharcoal);

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw all layers (back to front)
      drawVoxelGrid(time, width, height);
      drawTrendLines(time, width);
      drawCandlesticks(time, width);
      drawBlockchainNodes(time, width);
      drawLiveTicker(time, width, height);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initializeElements, isMobile]);

  return (
    <>
      {/* Deep obsidian base */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.obsidian} 0%, #050505 40%, ${colors.charcoal} 80%, ${colors.deepCharcoal} 100%)`,
        }}
      />

      {/* Main kinetic canvas - hardware accelerated */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[1]"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Premium noise texture overlay */}
      <div 
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.018,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Deep vignette for 5D depth perception */}
      <div 
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 25%, rgba(0,0,0,0.6) 100%)`,
        }}
      />
    </>
  );
};

export default EconomicKineticBackground;
