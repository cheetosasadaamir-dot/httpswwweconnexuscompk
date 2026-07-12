import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface InteractiveWrapperProps {
 title: string;
 figure: string;
 children: (props: { isAnimating: boolean; showShift: boolean }) => React.ReactNode;
 hasShiftAnimation?: boolean;
 className?: string;
}

const InteractiveWrapper = ({
 title,
 figure,
 children,
 hasShiftAnimation = true,
 className,
}: InteractiveWrapperProps) => {
 const [isAnimating, setIsAnimating] = useState(false);
 const [showShift, setShowShift] = useState(false);

 const handleAnimate =  => {
 setIsAnimating(true);
 setShowShift(true);
 setTimeout( => setIsAnimating(false), 1500);
 };

 const handleReset =  => {
 setShowShift(false);
 setIsAnimating(false);
 };

 return (
 <div className={cn("glass-card p-6 lg:p-8", className)}>
 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
 <div>
 <span className="text-xs text-muted-foreground font-medium">{figure}</span>
 <h3 className="font-serif text-xl text-silver-bright">{title}</h3>
 </div>
 {hasShiftAnimation && (
 <div className="flex gap-2">
 <Button
 variant="outline"
 size="sm"
 onClick={handleAnimate}
 disabled={isAnimating || showShift}
 className="gap-2"
 >
 <Play className="w-4 h-4" />
 Animate Shift
 </Button>
 <Button
 variant="ghost"
 size="sm"
 onClick={handleReset}
 disabled={!showShift}
 className="gap-2"
 >
 <RotateCcw className="w-4 h-4" />
 Reset
 </Button>
 </div>
 )}
 </div>
 
 {children({ isAnimating, showShift })}
 
 {/* Legend */}
 <div className="mt-6 pt-4 border-t border-silver/10">
 <div className="flex flex-wrap gap-4 text-xs">
 <div className="flex items-center gap-2">
 <div className="w-3 h-0.5 rounded" style={{ backgroundColor: 'hsl(185, 100%, 50%)' }} />
 <span className="text-muted-foreground">Original Curve</span>
 </div>
 {hasShiftAnimation && (
 <div className="flex items-center gap-2">
 <div className="w-3 h-0.5 rounded" style={{ backgroundColor: 'hsl(300, 100%, 60%)' }} />
 <span className="text-muted-foreground">Shifted Curve</span>
 </div>
 )}
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(45, 93%, 55%)' }} />
 <span className="text-muted-foreground">Equilibrium Point</span>
 </div>
 </div>
 </div>
 </div>
 );
};

export default InteractiveWrapper;
