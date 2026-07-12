import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const PolicyTradeoffDiagram =  => {
 const [showTradeoff, setShowTradeoff] = useState<'none' | 'phillips' | 'growth'>('none');

 return (
 <div className="glass-card p-6 my-8">
 <div className="flex justify-between items-center mb-4">
 <h3 className="text-xl font-semibold text-foreground">Policy Objectives & Trade-offs</h3>
 <span className="text-sm text-muted-foreground">Figure 5.1</span>
 </div>

 <div className="flex gap-2 mb-4 flex-wrap">
 <Button 
 onClick={ => setShowTradeoff('phillips')} 
 variant={showTradeoff === 'phillips' ? 'default': 'outline'}
 size="sm"
 >
 Show Phillips Curve Trade-off
 </Button>
 <Button 
 onClick={ => setShowTradeoff('growth')} 
 variant={showTradeoff === 'growth' ? 'default': 'outline'}
 size="sm"
 >
 Show Growth vs BOP Trade-off
 </Button>
 <Button 
 onClick={ => setShowTradeoff('none')} 
 variant="ghost" 
 size="sm"
 >
 Reset
 </Button>
 </div>

 <svg viewBox="0 0 500 400" className="w-full h-auto bg-background/50 rounded-lg">
 {/* Central objectives circle */}
 <motion.circle
 cx="250"
 cy="200"
 r="60"
 fill="hsl(var(--primary))"
 opacity="0.2"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.5 }}
 />
 <text x="250" y="195" textAnchor="middle" className="fill-foreground text-sm font-semibold">Policy</text>
 <text x="250" y="210" textAnchor="middle" className="fill-foreground text-sm font-semibold">Objectives</text>

 {/* Four objectives around */}
 {/* Growth */}
 <motion.g
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 >
 <circle cx="250" cy="60" r="40" fill="hsl(var(--chart-1))" opacity="0.3" />
 <text x="250" y="55" textAnchor="middle" className="fill-foreground text-sm font-semibold">Economic</text>
 <text x="250" y="70" textAnchor="middle" className="fill-foreground text-sm font-semibold">Growth</text>
 <line x1="250" y1="100" x2="250" y2="140" stroke="hsl(var(--chart-1))" strokeWidth="2" />
 </motion.g>

 {/* Low Unemployment */}
 <motion.g
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.3 }}
 >
 <circle cx="390" cy="200" r="40" fill="hsl(var(--chart-2))" opacity="0.3" />
 <text x="390" y="195" textAnchor="middle" className="fill-foreground text-sm font-semibold">Low</text>
 <text x="390" y="210" textAnchor="middle" className="fill-foreground text-sm font-semibold">Unemployment</text>
 <line x1="350" y1="200" x2="310" y2="200" stroke="hsl(var(--chart-2))" strokeWidth="2" />
 </motion.g>

 {/* Price Stability */}
 <motion.g
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 >
 <circle cx="250" cy="340" r="40" fill="hsl(var(--chart-3))" opacity="0.3" />
 <text x="250" y="335" textAnchor="middle" className="fill-foreground text-sm font-semibold">Price</text>
 <text x="250" y="350" textAnchor="middle" className="fill-foreground text-sm font-semibold">Stability</text>
 <line x1="250" y1="300" x2="250" y2="260" stroke="hsl(var(--chart-3))" strokeWidth="2" />
 </motion.g>

 {/* BOP Equilibrium */}
 <motion.g
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.5 }}
 >
 <circle cx="110" cy="200" r="40" fill="hsl(var(--chart-4))" opacity="0.3" />
 <text x="110" y="195" textAnchor="middle" className="fill-foreground text-sm font-semibold">BOP</text>
 <text x="110" y="210" textAnchor="middle" className="fill-foreground text-sm font-semibold">Balance</text>
 <line x1="150" y1="200" x2="190" y2="200" stroke="hsl(var(--chart-4))" strokeWidth="2" />
 </motion.g>

 {/* Phillips Curve Trade-off */}
 {showTradeoff === 'phillips' && (
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 >
 {/* Conflict line between unemployment and price stability */}
 <line 
 x1="350" y1="200" 
 x2="250" y2="300" 
 stroke="hsl(var(--destructive))" 
 strokeWidth="3" 
 strokeDasharray="8,4"
 />
 <text x="320" y="265" className="fill-destructive text-xs font-semibold">CONFLICT</text>
 
 {/* Explanation box */}
 <rect x="320" y="280" width="160" height="60" rx="8" fill="hsl(var(--destructive))" opacity="0.15" />
 <text x="400" y="300" textAnchor="middle" className="fill-foreground text-xs">Reducing unemployment</text>
 <text x="400" y="315" textAnchor="middle" className="fill-foreground text-xs">may increase inflation</text>
 <text x="400" y="330" textAnchor="middle" className="fill-foreground text-xs font-semibold">(Phillips Curve)</text>
 </motion.g>
 )}

 {/* Growth vs BOP Trade-off */}
 {showTradeoff === 'growth' && (
 <motion.g
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
 >
 {/* Conflict line between growth and BOP */}
 <line 
 x1="210" y1="80" 
 x2="130" y2="160" 
 stroke="hsl(var(--destructive))" 
 strokeWidth="3" 
 strokeDasharray="8,4"
 />
 <text x="150" y="110" className="fill-destructive text-xs font-semibold">CONFLICT</text>
 
 {/* Explanation box */}
 <rect x="20" y="50" width="150" height="60" rx="8" fill="hsl(var(--destructive))" opacity="0.15" />
 <text x="95" y="70" textAnchor="middle" className="fill-foreground text-xs">Strong growth pulls</text>
 <text x="95" y="85" textAnchor="middle" className="fill-foreground text-xs">in more imports,</text>
 <text x="95" y="100" textAnchor="middle" className="fill-foreground text-xs font-semibold">worsening BOP</text>
 </motion.g>
 )}
 </svg>

 <p className="text-sm text-muted-foreground mt-4 text-center">
 {showTradeoff === 'none' && "Click a button to visualize a policy trade-off"}
 {showTradeoff === 'phillips' && "The Phillips Curve shows the inverse relationship between inflation and unemployment in the short run"}
 {showTradeoff === 'growth' && "High growth increases import demand, potentially worsening the current account balance"}
 </p>
 </div>
 );
};

export default PolicyTradeoffDiagram;
