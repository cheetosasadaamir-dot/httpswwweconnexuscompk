import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const ExchangeRateDiagram = () => {
  const [showShift, setShowShift] = useState(false);
  const [shiftType, setShiftType] = useState<'appreciation' | 'depreciation'>('appreciation');

  const handleAnimate = (type: 'appreciation' | 'depreciation') => {
    setShiftType(type);
    setShowShift(true);
  };

  const handleReset = () => {
    setShowShift(false);
  };

  return (
    <div className="glass-card p-6 my-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-foreground">Exchange Rate Determination</h3>
        <span className="text-sm text-muted-foreground">Figure 4.1</span>
      </div>

      <Tabs defaultValue="floating" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="floating">Floating Rate</TabsTrigger>
          <TabsTrigger value="fixed">Fixed Rate</TabsTrigger>
        </TabsList>

        <TabsContent value="floating">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Button 
              onClick={() => handleAnimate('appreciation')} 
              variant="outline" 
              size="sm"
              disabled={showShift}
            >
              Simulate Appreciation
            </Button>
            <Button 
              onClick={() => handleAnimate('depreciation')} 
              variant="outline" 
              size="sm"
              disabled={showShift}
            >
              Simulate Depreciation
            </Button>
            <Button onClick={handleReset} variant="ghost" size="sm">
              Reset
            </Button>
          </div>

          <svg viewBox="0 0 500 400" className="w-full h-auto bg-background/50 rounded-lg">
            {/* Grid */}
            <defs>
              <pattern id="exchangeGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(var(--muted))" strokeWidth="0.5" opacity="0.3" />
              </pattern>
              <marker id="axisArrowER" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
              </marker>
            </defs>
            <rect x="60" y="20" width="400" height="320" fill="url(#exchangeGrid)" />

            {/* Axes */}
            <line x1="60" y1="340" x2="460" y2="340" stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#axisArrowER)" />
            <line x1="60" y1="340" x2="60" y2="20" stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#axisArrowER)" />

            {/* Axis Labels */}
            <text x="260" y="380" textAnchor="middle" className="fill-foreground text-sm">
              Quantity of Currency
            </text>
            <text x="25" y="180" textAnchor="middle" className="fill-foreground text-sm" transform="rotate(-90, 25, 180)">
              Exchange Rate (e)
            </text>

            {/* Supply Curve (upward sloping) */}
            <motion.path
              d="M 100 300 Q 200 200 400 80"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <text x="410" y="75" className="fill-destructive text-sm font-semibold">S</text>

            {/* Original Demand Curve */}
            <motion.path
              d="M 100 80 Q 200 180 400 300"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <text x="410" y="295" className="fill-primary text-sm font-semibold">D₁</text>

            {/* Original Equilibrium */}
            <motion.circle
              cx="231.86"
              cy="190"
              r="6"
              className="fill-foreground"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            />

            {/* Dashed lines to axes */}
            <motion.line
              x1="60"
              y1="190"
              x2="231.86"
              y2="190"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.line
              x1="231.86"
              y1="190"
              x2="231.86"
              y2="340"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 }}
            />

            {/* Labels */}
            <text x="45" y="195" className="fill-foreground text-sm">e₁</text>
            <text x="226.86" y="360" className="fill-foreground text-sm">Q₁</text>

            {/* Shifted Demand (Appreciation) */}
            {showShift && shiftType === 'appreciation' && (
              <>
                <motion.path
                  d="M 140 80 Q 240 180 440 300"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.text 
                  x="450" 
                  y="295" 
                  className="fill-primary text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  D₂
                </motion.text>

                {/* New Equilibrium */}
                <motion.circle
                  cx="252.17"
                  cy="175.49"
                  r="6"
                  className="fill-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                />

                <motion.line
                  x1="60"
                  y1="175.49"
                  x2="252.17"
                  y2="175.49"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 }}
                />

                <motion.text 
                  x="45" 
                  y="179.5" 
                  className="fill-primary text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  e₂
                </motion.text>

                {/* Arrow showing appreciation */}
                <motion.path
                  d="M 35 186 L 35 179"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-ExchangeRateDiagram)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                />
                <defs>
                  <marker id="arrowhead-ExchangeRateDiagram" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" />
                  </marker>
                </defs>

                <motion.text
                  x="260"
                  y="50"
                  textAnchor="middle"
                  className="fill-green-600 text-sm font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Currency Appreciates (e₁ → e₂)
                </motion.text>
              </>
            )}

            {/* Shifted Demand (Depreciation) */}
            {showShift && shiftType === 'depreciation' && (
              <>
                <motion.path
                  d="M 60 80 Q 160 180 360 300"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.text 
                  x="370" 
                  y="295" 
                  className="fill-primary text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  D₂
                </motion.text>

                {/* New Equilibrium */}
                <motion.circle
                  cx="212.17"
                  cy="204.51"
                  r="6"
                  className="fill-red-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                />

                <motion.line
                  x1="60"
                  y1="204.51"
                  x2="212.17"
                  y2="204.51"
                  stroke="hsl(var(--destructive))"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 }}
                />

                <motion.text 
                  x="45" 
                  y="208.5" 
                  className="fill-destructive text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  e₂
                </motion.text>

                <motion.text
                  x="260"
                  y="50"
                  textAnchor="middle"
                  className="fill-red-600 text-sm font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Currency Depreciates (e₁ → e₂)
                </motion.text>
              </>
            )}
          </svg>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            {!showShift && "Click a button to see how demand shifts affect the exchange rate"}
            {showShift && shiftType === 'appreciation' && "↑ Demand for currency → Currency appreciates (higher exchange rate)"}
            {showShift && shiftType === 'depreciation' && "↓ Demand for currency → Currency depreciates (lower exchange rate)"}
          </p>
        </TabsContent>

        <TabsContent value="fixed">
          <svg viewBox="0 0 500 400" className="w-full h-auto bg-background/50 rounded-lg">
            {/* Grid */}
            <defs>
              <pattern id="exchangeGridFixed" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
              </pattern>
              <marker id="axisArrowERFixed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
              </marker>
            </defs>
            <rect x="60" y="20" width="400" height="320" fill="url(#exchangeGridFixed)" />

            {/* Axes */}
            <line x1="60" y1="340" x2="460" y2="340" stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#axisArrowERFixed)" />
            <line x1="60" y1="340" x2="60" y2="20" stroke="hsl(var(--foreground))" strokeWidth="2" markerEnd="url(#axisArrowERFixed)" />

            {/* Axis Labels */}
            <text x="260" y="380" textAnchor="middle" className="fill-foreground text-sm">
              Quantity of Currency
            </text>
            <text x="25" y="180" textAnchor="middle" className="fill-foreground text-sm" transform="rotate(-90, 25, 180)">
              Exchange Rate (e)
            </text>

            {/* Fixed Rate Line */}
            <motion.line
              x1="60"
              y1="180"
              x2="460"
              y2="180"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <text x="420" y="170" className="fill-primary text-sm font-semibold">Fixed Rate (e*)</text>

            {/* Supply Curve */}
            <motion.path
              d="M 100 300 Q 200 200 400 80"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <text x="410" y="75" className="fill-destructive text-sm">S</text>

            {/* Demand Curve */}
            <motion.path
              d="M 100 80 Q 200 180 400 300"
              fill="none"
              stroke="hsl(var(--chart-1))"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <text x="410" y="295" className="fill-chart-1 text-sm">D</text>

            {/* Intervention Zone */}
            <motion.rect
              x="180"
              y="160"
              width="140"
              height="40"
              fill="hsl(var(--primary))"
              opacity="0.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.2 }}
            />

            {/* Central Bank Intervention Arrows */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <text x="250" y="145" textAnchor="middle" className="fill-foreground text-xs">
                Central Bank Intervention Zone
              </text>
              <path d="M 180 200 L 180 220 L 160 220" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
              <text x="100" y="225" className="fill-foreground text-xs">Buy currency</text>
              <text x="100" y="238" className="fill-foreground text-xs">(if below e*)</text>
              
              <path d="M 320 160 L 320 140 L 340 140" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
              <text x="345" y="135" className="fill-foreground text-xs">Sell currency</text>
              <text x="345" y="148" className="fill-foreground text-xs">(if above e*)</text>
            </motion.g>
          </svg>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            Under a fixed exchange rate, the central bank must intervene to maintain the target rate by buying or selling currency reserves.
          </p>
        </TabsContent>
      </Tabs>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-primary"></div>
          <span>Demand</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-destructive"></div>
          <span>Supply</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-muted-foreground" style={{ borderStyle: 'dashed' }}></div>
          <span>Shifted Curve</span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRateDiagram;
