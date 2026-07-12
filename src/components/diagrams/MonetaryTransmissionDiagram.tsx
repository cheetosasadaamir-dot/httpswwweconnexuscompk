import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MonetaryTransmissionDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const [activeStep, setActiveStep] = useState<number | null>(null);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 },
 { threshold: 0.2 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 const transmissionSteps = [
 {
 id: 1,
 title: "Money Market",
 symbol: "↑ Mˢ",
 description: "Central bank increases money supply through open market operations or quantitative easing",
 color: "cambridge-cyan",
 },
 {
 id: 2,
 title: "Interest Rate",
 symbol: "↓ r",
 description: "Excess liquidity → People buy bonds → Bond prices rise → Interest rates fall",
 color: "cambridge-magenta",
 },
 {
 id: 3,
 title: "Investment",
 symbol: "↑ I",
 description: "Lower cost of borrowing → More investment projects become profitable (MEC)",
 color: "cambridge-green",
 },
 {
 id: 4,
 title: "Aggregate Demand",
 symbol: "↑ AD",
 description: "Increased investment → Multiplier effect → AD curve shifts right",
 color: "cambridge-orange",
 },
 {
 id: 5,
 title: "Real GDP & Prices",
 symbol: "↑ Y, ↑ P",
 description: "Higher AD → Increased output and employment (and possibly inflation)",
 color: "primary",
 },
 ];

 const stepVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: (i: number) => ({
 opacity: 1,
 y: 0,
 transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" as const }
 })
 };

 const arrowVariants = {
 hidden: { scaleX: 0, opacity: 0 },
 visible: (i: number) => ({
 scaleX: 1,
 opacity: 1,
 transition: { delay: i * 0.15 + 0.2, duration: 0.3 }
 })
 };

 return (
 <div ref={containerRef} className="glass-card p-4 rounded-xl">
 <h3 className="font-serif text-base text-silver-bright mb-4">Monetary Transmission Mechanism</h3>
 
 {/* Transmission Flow */}
 <div className="flex flex-wrap items-center justify-center gap-1 mb-4">
 {transmissionSteps.map((step, index) => (
 <div key={step.id} className="flex items-center">
 <motion.div
 variants={stepVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={index}
 className={`relative cursor-pointer transition-all duration-200 ${
 activeStep === step.id ? 'scale-105': ''
 }`}
 onClick={ => setActiveStep(activeStep === step.id ? null: step.id)}
 >
 <div 
 className={`px-3 py-2 rounded-lg border-2 text-center min-w-[70px] ${
 activeStep === step.id 
 ? `border-${step.color} bg-${step.color}/20`: 'border-border bg-card hover:border-muted-foreground'
 }`}
 >
 <div className={`text-base font-bold text-${step.color}`}>{step.symbol}</div>
 <div className="text-[10px] text-muted-foreground mt-0.5">{step.title}</div>
 </div>
 </motion.div>
 
 {index < transmissionSteps.length - 1 && (
 <motion.div
 variants={arrowVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={index}
 className="mx-1 text-muted-foreground origin-left"
 >
 <svg width="20" height="12" viewBox="0 0 20 12">
 <path 
 d="M0 6 L14 6 M10 2 L14 6 L10 10" 
 stroke="currentColor" 
 strokeWidth="2" 
 fill="none"
 />
 </svg>
 </motion.div>
 )}
 </div>
 ))}
 </div>

 {/* Detail Panel */}
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ 
 opacity: activeStep ? 1: 0, 
 height: activeStep ? 'auto': 0 
 }}
 transition={{ duration: 0.3 }}
 className="overflow-hidden"
 >
 {activeStep && (
 <div className={`p-3 rounded-lg border border-${transmissionSteps[activeStep - 1].color}/30 bg-${transmissionSteps[activeStep - 1].color}/10`}>
 <h4 className={`font-semibold text-${transmissionSteps[activeStep - 1].color} text-sm mb-1`}>
 Step {activeStep}: {transmissionSteps[activeStep - 1].title}
 </h4>
 <p className="text-xs text-muted-foreground">
 {transmissionSteps[activeStep - 1].description}
 </p>
 </div>
 )}
 </motion.div>

 {/* Summary Chain */}
 <div className="mt-4 p-3 bg-muted/30 rounded-lg">
 <div className="text-center font-mono text-sm text-cambridge-cyan">
 ↑Mˢ → ↓r → ↑I → ↑AD → ↑Y, ↑P, ↑Employment
 </div>
 <p className="text-center text-xs text-muted-foreground mt-2">
 Click each step above to see detailed explanation
 </p>
 </div>

 {/* Three Channels */}
 <div className="mt-4 grid grid-cols-3 gap-2">
 <div className="p-2 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
 <h5 className="text-[10px] font-semibold text-cambridge-cyan mb-1">Direct Channel</h5>
 <p className="text-[9px] text-muted-foreground">
 ↑Mˢ → More money to spend → ↑C, ↑I → ↑AD
 </p>
 </div>
 <div className="p-2 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/20">
 <h5 className="text-[10px] font-semibold text-cambridge-magenta mb-1">Indirect Channel</h5>
 <p className="text-[9px] text-muted-foreground">
 ↑Mˢ → ↓r → ↑I (via MEC) → ↑AD
 </p>
 </div>
 <div className="p-2 bg-cambridge-green/10 rounded-lg border border-cambridge-green/20">
 <h5 className="text-[10px] font-semibold text-cambridge-green mb-1">Exchange Rate</h5>
 <p className="text-[9px] text-muted-foreground">
 ↓r → Capital outflow → Depreciation → ↑(X-M)
 </p>
 </div>
 </div>
 </div>
 );
};

export default MonetaryTransmissionDiagram;
