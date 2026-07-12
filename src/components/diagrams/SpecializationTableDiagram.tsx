import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const SpecializationTableDiagram =  => {
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

 const aliData = [
 { pots: 12, bracelets: 0 },
 { pots: 9, bracelets: 3 },
 { pots: 6, bracelets: 6 },
 { pots: 3, bracelets: 9 },
 { pots: 0, bracelets: 12 },
 ];

 const ayeshaData = [
 { pots: 18, bracelets: 0 },
 { pots: 12, bracelets: 12 },
 { pots: 6, bracelets: 24 },
 { pots: 3, bracelets: 30 },
 { pots: 0, bracelets: 36 },
 ];

 return (
 <div ref={containerRef} className="w-full">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={isVisible ? { opacity: 1, y: 0 }: { opacity: 0, y: 20 }}
 transition={{ duration: 0.6 }}
 >
 <h4 className="text-center text-lg font-semibold text-silver-bright mb-4">
 Specialization & Production Decisions: Ali vs. Ayesha
 </h4>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
 {/* Ali's Production Table */}
 <motion.div
 className="glass-card p-4"
 initial={{ opacity: 0, x: -20 }}
 animate={isVisible ? { opacity: 1, x: 0 }: { opacity: 0, x: -20 }}
 transition={{ delay: 0.2, duration: 0.5 }}
 >
 <h5 className="text-center font-semibold text-cyan-400 mb-3">Ali's Production</h5>
 <Table>
 <TableHeader>
 <TableRow className="border-silver/20">
 <TableHead className="text-center text-silver-bright text-xs">Pots</TableHead>
 <TableHead className="text-center text-silver-bright text-xs">Bracelets</TableHead>
 </TableRow>
 </TableHeader>
 <TableBody>
 {aliData.map((row, index) => (
 <TableRow key={index} className="border-silver/10">
 <TableCell className="text-center text-muted-foreground text-sm py-1">{row.pots}</TableCell>
 <TableCell className="text-center text-muted-foreground text-sm py-1">{row.bracelets}</TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </motion.div>

 {/* Ayesha's Production Table */}
 <motion.div
 className="glass-card p-4"
 initial={{ opacity: 0, x: 20 }}
 animate={isVisible ? { opacity: 1, x: 0 }: { opacity: 0, x: 20 }}
 transition={{ delay: 0.3, duration: 0.5 }}
 >
 <h5 className="text-center font-semibold text-magenta-400 mb-3">Ayesha's Production</h5>
 <Table>
 <TableHeader>
 <TableRow className="border-silver/20">
 <TableHead className="text-center text-silver-bright text-xs">Pots</TableHead>
 <TableHead className="text-center text-silver-bright text-xs">Bracelets</TableHead>
 </TableRow>
 </TableHeader>
 <TableBody>
 {ayeshaData.map((row, index) => (
 <TableRow key={index} className="border-silver/10">
 <TableCell className="text-center text-muted-foreground text-sm py-1">{row.pots}</TableCell>
 <TableCell className="text-center text-muted-foreground text-sm py-1">{row.bracelets}</TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </motion.div>
 </div>

 {/* Opportunity Cost Calculations */}
 <motion.div
 className="glass-card p-4"
 initial={{ opacity: 0, y: 20 }}
 animate={isVisible ? { opacity: 1, y: 0 }: { opacity: 0, y: 20 }}
 transition={{ delay: 0.4, duration: 0.5 }}
 >
 <h5 className="font-semibold text-silver-bright mb-3 text-center">Opportunity Cost Calculations</h5>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {/* Ali's Opportunity Costs */}
 <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
 <h6 className="font-medium text-cyan-400 mb-2">Ali's Opportunity Costs:</h6>
 <div className="space-y-1 text-sm text-muted-foreground">
 <p>• 1 Bracelet = 3 ÷ 3 = <span className="text-cyan-400 font-semibold">1 Pot</span></p>
 <p>• 1 Pot = 3 ÷ 3 = <span className="text-cyan-400 font-semibold">1 Bracelet</span></p>
 </div>
 </div>

 {/* Ayesha's Opportunity Costs */}
 <div className="p-3 rounded-lg bg-magenta-400/10 border border-magenta-400/20">
 <h6 className="font-medium text-magenta-400 mb-2">Ayesha's Opportunity Costs:</h6>
 <div className="space-y-1 text-sm text-muted-foreground">
 <p>• 1 Bracelet = 6 ÷ 12 = <span className="text-magenta-400 font-semibold">0.5 Pots</span></p>
 <p>• 1 Pot = 12 ÷ 6 = <span className="text-magenta-400 font-semibold">2 Bracelets</span></p>
 </div>
 </div>
 </div>
 </motion.div>

 {/* Analysis */}
 <motion.div
 className="mt-4 p-4 rounded-lg bg-muted/30 border border-silver/10"
 initial={{ opacity: 0, y: 10 }}
 animate={isVisible ? { opacity: 1, y: 0 }: { opacity: 0, y: 10 }}
 transition={{ delay: 0.6 }}
 >
 <h5 className="font-semibold text-silver-bright mb-2">Comparative Advantage Analysis</h5>
 <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
 <div>
 <p className="font-medium text-cyan-400 mb-1">Ali's Comparative Advantage:</p>
 <p>Ali has a <strong>lower opportunity cost</strong> for producing <strong>pots</strong> 
 (1 bracelet vs Ayesha's 2 bracelets). Therefore, Ali should specialize in pots.</p>
 </div>
 <div>
 <p className="font-medium text-magenta-400 mb-1">Ayesha's Comparative Advantage:</p>
 <p>Ayesha has a <strong>lower opportunity cost</strong> for producing <strong>bracelets</strong> 
 (0.5 pots vs Ali's 1 pot). Therefore, Ayesha should specialize in bracelets.</p>
 </div>
 </div>
 <p className="text-sm text-primary mt-3">
 <strong>Conclusion:</strong> Through specialization according to comparative advantage and trade, 
 both Ali and Ayesha can consume beyond their individual production possibilities.
 </p>
 </motion.div>
 </motion.div>
 </div>
 );
};

export default SpecializationTableDiagram;
