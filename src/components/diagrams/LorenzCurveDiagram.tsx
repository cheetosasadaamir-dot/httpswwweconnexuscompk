import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export const LorenzCurveDiagram =  => {
 const [giniLevel, setGiniLevel] = useState(0.4);
 const [showComparison, setShowComparison] = useState(false);

 // Calculate Lorenz curve points based on Gini coefficient
 // Using a simple power function approximation: y = x^(1 + gini*2)
 const getCurvePoints = (gini: number) => {
 const points: string[] = [];
 for (let i = 0; i <= 100; i += 2) {
 const x = i / 100;
 const power = 1 + gini * 3;
 const y = Math.pow(x, power);
 const svgX = 100 + x * 300;
 const svgY = 320 - y * 300;
 points.push(`${svgX},${svgY}`);
 }
 return points.join(' ');
 };

 const currentCurve = getCurvePoints(giniLevel);
 const equalityCurve = getCurvePoints(0);
 const highInequalityCurve = getCurvePoints(0.6);
 const lowInequalityCurve = getCurvePoints(0.25);

 return (
 <div className="glass-card p-6 my-8">
 <div className="flex justify-between items-center mb-4">
 <h3 className="text-xl font-semibold text-foreground">The Lorenz Curve & Gini Coefficient</h3>
 <span className="text-sm text-muted-foreground">Figure 8.1</span>
 </div>

 <div className="mb-4 space-y-4">
 <div className="flex items-center gap-4">
 <span className="text-sm font-medium min-w-[120px]">Gini Coefficient:</span>
 <Slider
 value={[giniLevel]}
 onValueChange={(value) => setGiniLevel(value[0])}
 min={0}
 max={0.7}
 step={0.05}
 className="flex-1"
 />
 <span className="text-sm font-mono min-w-[50px]">{giniLevel.toFixed(2)}</span>
 </div>
 <Button 
 onClick={ => setShowComparison(!showComparison)} 
 variant="outline" 
 size="sm"
 >
 {showComparison ? 'Hide': 'Show'} Country Comparison
 </Button>
 </div>

 <svg viewBox="0 0 500 400" className="w-full h-auto bg-background/50 rounded-lg">
 {/* Grid */}
 <defs>
 <pattern id="lorenzGrid" width="30" height="30" patternUnits="userSpaceOnUse">
 <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--muted))" strokeWidth="0.5" opacity="0.3" />
 </pattern>
 </defs>
 <rect x="100" y="20" width="300" height="300" fill="url(#lorenzGrid)" />

 {/* Axes */}
 <line x1="100" y1="320" x2="400" y2="320" stroke="hsl(var(--foreground))" strokeWidth="2" />
 <line x1="100" y1="320" x2="100" y2="20" stroke="hsl(var(--foreground))" strokeWidth="2" />

 {/* Axis Labels */}
 <text x="250" y="360" textAnchor="middle" className="fill-foreground text-sm">
 Cumulative % of Population
 </text>
 <text x="40" y="170" textAnchor="middle" className="fill-foreground text-sm" transform="rotate(-90, 40, 170)">
 Cumulative % of Income
 </text>

 {/* Axis tick labels */}
 <text x="100" y="340" textAnchor="middle" className="fill-muted-foreground text-xs">0%</text>
 <text x="250" y="340" textAnchor="middle" className="fill-muted-foreground text-xs">50%</text>
 <text x="400" y="340" textAnchor="middle" className="fill-muted-foreground text-xs">100%</text>
 <text x="90" y="325" textAnchor="end" className="fill-muted-foreground text-xs">0%</text>
 <text x="90" y="175" textAnchor="end" className="fill-muted-foreground text-xs">50%</text>
 <text x="90" y="25" textAnchor="end" className="fill-muted-foreground text-xs">100%</text>

 {/* Line of Perfect Equality (45-degree line) */}
 <motion.line
 x1="100"
 y1="320"
 x2="400"
 y2="20"
 stroke="hsl(var(--primary))"
 strokeWidth="2"
 strokeDasharray="8,4"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1 }}
 />
 <text x="380" y="55" className="fill-primary text-xs font-semibold">Line of Equality</text>

 {/* Comparison curves */}
 {showComparison && (
 <>
 {/* Low inequality (Nordic) */}
 <motion.polyline
 points={lowInequalityCurve}
 fill="none"
 stroke="hsl(var(--chart-2))"
 strokeWidth="2"
 opacity="0.6"
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.6 }}
 />
 <text x="350" y="100" className="fill-chart-2 text-xs">Nordic (Gini ≈ 0.25)</text>

 {/* High inequality (Brazil) */}
 <motion.polyline
 points={highInequalityCurve}
 fill="none"
 stroke="hsl(var(--chart-4))"
 strokeWidth="2"
 opacity="0.6"
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.6 }}
 />
 <text x="280" y="280" className="fill-chart-4 text-xs">High Inequality (Gini ≈ 0.6)</text>
 </>
 )}

 {/* Current Lorenz Curve */}
 <motion.polyline
 points={currentCurve}
 fill="none"
 stroke="hsl(var(--destructive))"
 strokeWidth="3"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1, delay: 0.5 }}
 />

 {/* Shaded area (represents Gini) */}
 <motion.polygon
 points={`100,320 ${currentCurve} 400,20`}
 fill="hsl(var(--primary))"
 opacity="0.15"
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.15 }}
 transition={{ delay: 1 }}
 />

 {/* Area A label */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.2 }}
 >
 <text x="220" y="140" className="fill-primary text-sm font-semibold">Area A</text>
 <text x="200" y="155" className="fill-muted-foreground text-xs">(Inequality)</text>
 </motion.g>

 {/* Area B label */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.4 }}
 >
 <text x="300" y="260" className="fill-destructive text-sm font-semibold">Area B</text>
 </motion.g>

 {/* Lorenz Curve label */}
 <text x="420" y="220" className="fill-destructive text-xs font-semibold">Lorenz</text>
 <text x="420" y="235" className="fill-destructive text-xs font-semibold">Curve</text>

 {/* Gini formula */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.6 }}
 >
 <rect x="320" y="330" width="170" height="50" rx="8" fill="hsl(var(--muted))" opacity="0.5" />
 <text x="405" y="350" textAnchor="middle" className="fill-foreground text-xs font-semibold">
 Gini = A / (A + B)
 </text>
 <text x="405" y="370" textAnchor="middle" className="fill-muted-foreground text-xs">
 Current: {giniLevel.toFixed(2)}
 </text>
 </motion.g>
 </svg>

 <div className="mt-4 p-4 bg-muted/30 rounded-lg">
 <p className="text-sm text-muted-foreground">
 <strong>Interpretation:</strong> The further the Lorenz Curve bows away from the line of equality, the greater the income inequality. 
 {giniLevel < 0.3 && " This level indicates relatively low inequality, typical of Nordic countries."}
 {giniLevel >= 0.3 && giniLevel < 0.45 && " This level indicates moderate inequality, typical of most developed countries."}
 {giniLevel >= 0.45 && " This level indicates high inequality, typical of some developing countries and the US."}
 </p>
 </div>

 {/* Legend */}
 <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border justify-center text-sm">
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-primary" style={{ borderStyle: 'dashed' }}></div>
 <span>Line of Equality</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-0.5 bg-destructive"></div>
 <span>Lorenz Curve</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-4 bg-primary opacity-20"></div>
 <span>Area A (Inequality)</span>
 </div>
 </div>
 </div>
 );
};

export default LorenzCurveDiagram;
