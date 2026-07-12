import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TradeBlocsDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const [selectedBloc, setSelectedBloc] = useState<number>(0);
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

 const blocs = [
 {
 name: 'Free Trade Area (FTA)',
 example: 'NAFTA/USMCA',
 color: 'hsl(var(--primary))',
 features: [
 'No tariffs between members',
 'Each country keeps own external tariffs',
 'Rules of origin required',
 'Least integrated form'
 ],
 level: 1
 },
 {
 name: 'Customs Union',
 example: 'EU (started as EEC)',
 color: 'hsl(var(--secondary))',
 features: [
 'No tariffs between members',
 'Common External Tariff (CET)',
 'Unified trade policy',
 'No rules of origin needed'
 ],
 level: 2
 },
 {
 name: 'Common Market',
 example: 'EEA',
 color: 'hsl(var(--accent))',
 features: [
 'All features of customs union',
 'Free movement of labor',
 'Free movement of capital',
 'Free movement of services'
 ],
 level: 3
 },
 {
 name: 'Economic Union',
 example: 'European Union',
 color: 'hsl(var(--cambridge-gold))',
 features: [
 'All features of common market',
 'Harmonized economic policies',
 'Common monetary policy (optional)',
 'Shared regulatory standards'
 ],
 level: 4
 },
 {
 name: 'Monetary Union',
 example: 'Eurozone',
 color: 'hsl(var(--destructive))',
 features: [
 'All features of economic union',
 'Single currency',
 'Central bank (ECB)',
 'Deepest integration level'
 ],
 level: 5
 }
 ];

 const width = 700;
 const height = 300;
 const barHeight = 40;
 const startX = 80;
 const barSpacing = 55;

 return (
 <div ref={containerRef} className="my-8 p-6 bg-card rounded-xl border border-border">
 <h3 className="font-serif text-xl font-semibold mb-6">Levels of Economic Integration</h3>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto mb-6">
 {/* Pyramid of integration */}
 {blocs.map((bloc, i) => {
 const y = 20 + i * barSpacing;
 const barWidth = 120 + i * 110;
 const x = (width - barWidth) / 2;
 
 return (
 <motion.g
 key={bloc.name}
 initial={{ opacity: 0, x: -50 }}
 animate={isVisible ? { opacity: 1, x: 0 }: { opacity: 0, x: -50 }}
 transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" as const }}
 onClick={ => setSelectedBloc(i)}
 className="cursor-pointer"
 >
 <rect
 x={x}
 y={y}
 width={barWidth}
 height={barHeight}
 fill={selectedBloc === i ? bloc.color: `${bloc.color}80`}
 rx="4"
 stroke={bloc.color}
 strokeWidth={selectedBloc === i ? 3: 1}
 className="transition-all duration-300"
 />
 <text
 x={width / 2}
 y={y + barHeight / 2 + 5}
 textAnchor="middle"
 className="fill-background text-xs font-semibold pointer-events-none"
 >
 {bloc.name}
 </text>
 
 {/* Level indicator */}
 <text
 x={x - 10}
 y={y + barHeight / 2 + 5}
 textAnchor="end"
 className="fill-muted-foreground text-xs"
 >
 L{bloc.level}
 </text>
 </motion.g>
 );
 })}

 {/* Arrow indicating increasing integration */}
 <defs>
 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
 <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
 </marker>
 </defs>
 <line
 x1={width - 30}
 y1={height - 30}
 x2={width - 30}
 y2={40}
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="2"
 markerEnd="url(#arrowhead)"
 />
 <text
 x={width - 20}
 y={height / 2}
 textAnchor="middle"
 transform={`rotate(-90, ${width - 20}, ${height / 2})`}
 className="fill-muted-foreground text-xs"
 >
 Increasing Integration →
 </text>
 </svg>

 {/* Selected bloc details */}
 <motion.div
 key={selectedBloc}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="p-5 rounded-lg"
 style={{ backgroundColor: `${blocs[selectedBloc].color}15`, borderLeft: `4px solid ${blocs[selectedBloc].color}` }}
 >
 <div className="flex justify-between items-start mb-3">
 <div>
 <h4 className="font-semibold text-lg" style={{ color: blocs[selectedBloc].color }}>
 {blocs[selectedBloc].name}
 </h4>
 <p className="text-sm text-muted-foreground">Example: {blocs[selectedBloc].example}</p>
 </div>
 <span 
 className="px-3 py-1 rounded-full text-xs font-medium"
 style={{ backgroundColor: blocs[selectedBloc].color, color: 'white' }}
 >
 Level {blocs[selectedBloc].level}
 </span>
 </div>
 <ul className="grid md:grid-cols-2 gap-2">
 {blocs[selectedBloc].features.map((feature, i) => (
 <li key={i} className="flex items-center gap-2 text-sm">
 <span style={{ color: blocs[selectedBloc].color }}>✓</span>
 {feature}
 </li>
 ))}
 </ul>
 </motion.div>

 {/* Click instruction */}
 <p className="text-center text-xs text-muted-foreground mt-4">
 Click on any level to see its features
 </p>

 {/* Trade Creation vs Diversion */}
 <div className="mt-6 grid md:grid-cols-2 gap-4">
 <div className="p-4 bg-primary/10 rounded-lg">
 <h5 className="font-semibold text-primary mb-2">Trade Creation</h5>
 <p className="text-sm">
 When a trade bloc leads to imports from a <strong>lower-cost</strong> member country replacing 
 higher-cost domestic production. This <strong>increases welfare</strong> as resources are 
 allocated more efficiently.
 </p>
 </div>
 <div className="p-4 bg-destructive/10 rounded-lg">
 <h5 className="font-semibold text-destructive mb-2">Trade Diversion</h5>
 <p className="text-sm">
 When a trade bloc leads to imports from a <strong>higher-cost</strong> member country replacing 
 lower-cost imports from non-members. This <strong>reduces welfare</strong> and distorts efficient 
 resource allocation.
 </p>
 </div>
 </div>
 </div>
 );
};

export default TradeBlocsDiagram;
