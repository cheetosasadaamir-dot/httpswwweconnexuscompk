import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Trees, Users, Factory, Lightbulb } from 'lucide-react';

const FactorsOfProductionDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
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

 const factors = [
 {
 icon: Trees,
 title: 'Land',
 description: 'Natural resources, raw materials, agricultural land',
 reward: 'Rent',
 color: 'hsl(142 76% 36%)',
 lightColor: 'hsl(142 69% 58%)',
 },
 {
 icon: Users,
 title: 'Labour',
 description: 'Human physical & mental effort in production',
 reward: 'Wages',
 color: 'hsl(217 91% 60%)',
 lightColor: 'hsl(217 91% 75%)',
 },
 {
 icon: Factory,
 title: 'Capital',
 description: 'Machinery, equipment, buildings used in production',
 reward: 'Interest',
 color: 'hsl(234 89% 74%)',
 lightColor: 'hsl(234 89% 85%)',
 },
 {
 icon: Lightbulb,
 title: 'Enterprise',
 description: 'Risk-taking, organizing other factors of production',
 reward: 'Profit',
 color: 'hsl(45 93% 47%)',
 lightColor: 'hsl(45 93% 67%)',
 },
 ];

 return (
 <div ref={containerRef} className="w-full">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {factors.map((factor, index) => (
 <motion.div
 key={factor.title}
 initial={{ opacity: 0, y: 30 }}
 animate={isVisible ? { opacity: 1, y: 0 }: { opacity: 0, y: 30 }}
 transition={{ delay: index * 0.15, duration: 0.6 }}
 className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
 style={{ borderColor: factor.color, borderWidth: '1px' }}
 >
 <div 
 className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
 style={{ backgroundColor: `${factor.color}20` }}
 >
 <factor.icon 
 className="w-8 h-8" 
 style={{ color: factor.lightColor }}
 />
 </div>
 <h4 
 className="font-serif text-xl font-semibold mb-2"
 style={{ color: factor.lightColor }}
 >
 {factor.title}
 </h4>
 <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
 {factor.description}
 </p>
 <div 
 className="inline-block px-4 py-2 rounded-full text-sm font-medium"
 style={{ 
 backgroundColor: `${factor.color}20`,
 color: factor.lightColor
 }}
 >
 Reward: <span className="font-bold">{factor.reward}</span>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Central connector showing flow */}
 <motion.div
 initial={{ opacity: 0, scale: 0.8 }}
 animate={isVisible ? { opacity: 1, scale: 1 }: { opacity: 0, scale: 0.8 }}
 transition={{ delay: 0.8, duration: 0.6 }}
 className="mt-8 text-center"
 >
 <div className="inline-flex items-center gap-4 glass-card px-6 py-4">
 <span className="text-muted-foreground">All factors combine to create</span>
 <span className="font-serif text-xl text-primary font-semibold">Goods & Services</span>
 </div>
 </motion.div>
 </div>
 );
};

export default FactorsOfProductionDiagram;
