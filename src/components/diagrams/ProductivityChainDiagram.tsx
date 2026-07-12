import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Cog, TrendingUp, DollarSign } from 'lucide-react';

const ProductivityChainDiagram =  => {
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
 { threshold: 0.3 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 const steps = [
 {
 id: 1,
 icon: Users,
 title: 'Single Task Focus',
 subtitle: '"Learning by Doing"',
 description: 'Workers concentrate on one specific task, developing expertise and muscle memory.',
 color: 'cyan',
 detail: 'Repetition leads to mastery. Workers become faster and make fewer errors over time.'
 },
 {
 id: 2,
 icon: Clock,
 title: 'Time Saved',
 subtitle: 'Reduced Transition Time',
 description: 'No time wasted moving between different tasks or switching tools.',
 color: 'blue',
 detail: 'Adam Smith noted workers saved significant time by not "sauntering" between tasks.'
 },
 {
 id: 3,
 icon: Cog,
 title: 'Specialized Machinery',
 subtitle: 'Capital Deepening',
 description: 'Task-specific equipment can be designed and employed more effectively.',
 color: 'purple',
 detail: 'Specialized machines are more efficient than general-purpose tools.'
 },
 {
 id: 4,
 icon: TrendingUp,
 title: 'Higher Productivity',
 subtitle: 'Output per Worker ↑',
 description: 'Each worker produces significantly more output per hour of labour.',
 color: 'green',
 detail: 'Smith\'s pin factory example: 1 worker alone = 20 pins/day. 10 workers specialized = 48,000 pins/day.'
 },
 {
 id: 5,
 icon: DollarSign,
 title: 'Lower Average Costs',
 subtitle: 'Unit Cost Falls',
 description: 'Fixed costs spread over more units, leading to economies of scale.',
 color: 'amber',
 detail: 'Lower costs enable competitive pricing and higher profit margins.'
 }
 ];

 const getColorClasses = (color: string, isActive: boolean) => {
 const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
 cyan: {
 bg: isActive ? 'bg-cyan-500/20': 'bg-cyan-500/10',
 border: isActive ? 'border-cyan-400': 'border-cyan-500/30',
 text: 'text-cyan-400',
 glow: 'shadow-[0_0_20px_rgba(34,211,238,0.3)]'
 },
 blue: {
 bg: isActive ? 'bg-blue-500/20': 'bg-blue-500/10',
 border: isActive ? 'border-blue-400': 'border-blue-500/30',
 text: 'text-blue-400',
 glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]'
 },
 purple: {
 bg: isActive ? 'bg-purple-500/20': 'bg-purple-500/10',
 border: isActive ? 'border-purple-400': 'border-purple-500/30',
 text: 'text-purple-400',
 glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]'
 },
 green: {
 bg: isActive ? 'bg-green-500/20': 'bg-green-500/10',
 border: isActive ? 'border-green-400': 'border-green-500/30',
 text: 'text-green-400',
 glow: 'shadow-[0_0_20px_rgba(74,222,128,0.3)]'
 },
 amber: {
 bg: isActive ? 'bg-amber-500/20': 'bg-amber-500/10',
 border: isActive ? 'border-amber-400': 'border-amber-500/30',
 text: 'text-amber-400',
 glow: 'shadow-[0_0_20px_rgba(251,191,36,0.3)]'
 }
 };
 return colors[color];
 };

 return (
 <div ref={containerRef} className="w-full">
 <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
 The Productivity Chain: Division of Labour → Economic Growth
 </h4>
 <p className="text-sm text-muted-foreground text-center mb-6">
 Click each step to explore the causal mechanism
 </p>

 {/* Chain Diagram */}
 <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
 {steps.map((step, index) => {
 const Icon = step.icon;
 const colors = getColorClasses(step.color, activeStep === step.id);
 
 return (
 <React.Fragment key={step.id}>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={isVisible ? { opacity: 1, y: 0 }: {}}
 transition={{ delay: index * 0.15 }}
 onClick={ => setActiveStep(activeStep === step.id ? null: step.id)}
 className={`
 relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
 ${colors.bg} ${colors.border} ${activeStep === step.id ? colors.glow: ''}
 hover:scale-105 min-w-[140px] max-w-[160px]
 `}
 >
 <div className="flex flex-col items-center text-center">
 <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center mb-2`}>
 <Icon className={`w-5 h-5 ${colors.text}`} />
 </div>
 <div className={`text-xs font-bold ${colors.text} mb-1`}>Step {step.id}</div>
 <h5 className="text-sm font-semibold text-silver-bright mb-1">{step.title}</h5>
 <p className={`text-xs ${colors.text}`}>{step.subtitle}</p>
 </div>
 
 {/* Pulse indicator */}
 {activeStep !== step.id && (
 <motion.div
 className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${colors.text.replace('text', 'bg')}`}
 animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
 transition={{ duration: 2, repeat: Infinity }}
 />
 )}
 </motion.div>

 {/* Arrow between steps */}
 {index < steps.length - 1 && (
 <motion.div
 initial={{ opacity: 0, x: -10 }}
 animate={isVisible ? { opacity: 1, x: 0 }: {}}
 transition={{ delay: index * 0.15 + 0.1 }}
 className="hidden md:block"
 >
 <ArrowRight className="w-6 h-6 text-silver-muted" />
 </motion.div>
 )}
 </React.Fragment>
 );
 })}
 </div>

 {/* Detail Panel */}
 <motion.div
 initial={false}
 animate={{ height: activeStep ? 'auto': 0, opacity: activeStep ? 1: 0 }}
 className="overflow-hidden mt-6"
 >
 {activeStep && (
 <div className="grid md:grid-cols-2 gap-4">
 {steps.filter(s => s.id === activeStep).map(step => {
 const colors = getColorClasses(step.color, true);
 return (
 <React.Fragment key={step.id}>
 <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
 <h5 className={`font-semibold ${colors.text} mb-2`}>
 Step {step.id}: {step.title}
 </h5>
 <p className="text-sm text-muted-foreground">{step.description}</p>
 </div>
 <div className="p-4 rounded-xl bg-slate-500/10 border border-slate-500/30">
 <h5 className="font-semibold text-silver-bright mb-2">
 <span className="text-amber-400"></span> Analysis
 </h5>
 <p className="text-sm text-muted-foreground">{step.detail}</p>
 </div>
 </React.Fragment>
 );
 })}
 </div>
 )}
 </motion.div>

 {/* Summary Box */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={isVisible ? { opacity: 1, y: 0 }: {}}
 transition={{ delay: 1 }}
 className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 border border-cyan-500/20"
 >
 <p className="text-sm text-center text-silver-bright">
 <span className="text-cyan-400 font-semibold">Conclusion:</span> The Division of Labour creates a 
 <span className="text-green-400 font-semibold"> virtuous cycle</span> where increased skill → 
 saved time → specialized capital → <span className="text-amber-400 font-semibold">higher productivity</span> → 
 <span className="text-cyan-400 font-semibold"> lower costs</span> → competitive advantage.
 </p>
 </motion.div>
 </div>
 );
};

export default ProductivityChainDiagram;
