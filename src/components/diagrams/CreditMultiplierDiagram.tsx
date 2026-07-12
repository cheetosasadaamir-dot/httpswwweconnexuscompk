import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CreditMultiplierDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const [showProcess, setShowProcess] = useState(false);
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

 const rounds = [
 { round: 1, deposit: 100, cash: 10, loan: 90 },
 { round: 2, deposit: 90, cash: 9, loan: 81 },
 { round: 3, deposit: 81, cash: 8.1, loan: 72.9 },
 { round: 4, deposit: 72.9, cash: 7.29, loan: 65.61 },
 { round: 5, deposit: 65.61, cash: 6.56, loan: 59.05 },
 ];

 const totalDeposits = 1000; // Final sum with 10% reserve ratio
 const totalCash = 100;
 const totalLoans = 900;

 const rowVariants = {
 hidden: { opacity: 0, x: -20 },
 visible: (i: number) => ({
 opacity: 1,
 x: 0,
 transition: { delay: i * 0.12, duration: 0.3 }
 })
 };

 return (
 <div ref={containerRef} className="glass-card p-4 rounded-xl">
 <div className="flex items-center justify-between mb-3">
 <h3 className="font-serif text-base text-silver-bright">Credit Multiplier Process</h3>
 <button
 onClick={ => setShowProcess(!showProcess)}
 className="px-2 py-1 text-xs font-medium rounded-lg bg-cambridge-cyan/20 text-cambridge-cyan hover:bg-cambridge-cyan/30 transition-colors"
 >
 {showProcess ? 'Hide Process': 'Show Process'}
 </button>
 </div>

 {/* Formula */}
 <div className="text-center p-3 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-4">
 <p className="text-lg font-mono font-bold text-cambridge-cyan">
 Credit Multiplier = 1 / Cash Ratio
 </p>
 <p className="text-xs text-muted-foreground mt-1">
 With 10% Cash Ratio: Multiplier = 1 / 0.10 = <strong className="text-cambridge-cyan">10</strong>
 </p>
 </div>

 {/* Process Table */}
 {showProcess && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 transition={{ duration: 0.3 }}
 className="overflow-hidden mb-4"
 >
 <table className="w-full text-xs">
 <thead>
 <tr className="border-b border-border">
 <th className="text-left py-1.5 text-muted-foreground">Round</th>
 <th className="text-right py-1.5 text-cambridge-cyan">New Deposit</th>
 <th className="text-right py-1.5 text-cambridge-orange">Cash (10%)</th>
 <th className="text-right py-1.5 text-cambridge-green">New Loan</th>
 </tr>
 </thead>
 <tbody>
 {rounds.map((row, index) => (
 <motion.tr
 key={row.round}
 variants={rowVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={index}
 className="border-b border-border/50"
 >
 <td className="py-1.5">{row.round}</td>
 <td className="text-right text-cambridge-cyan">${row.deposit.toFixed(2)}</td>
 <td className="text-right text-cambridge-orange">${row.cash.toFixed(2)}</td>
 <td className="text-right text-cambridge-green">${row.loan.toFixed(2)}</td>
 </motion.tr>
 ))}
 <motion.tr
 variants={rowVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={5}
 className="border-b border-border/50"
 >
 <td className="py-1.5 text-muted-foreground">...</td>
 <td className="text-right text-muted-foreground">...</td>
 <td className="text-right text-muted-foreground">...</td>
 <td className="text-right text-muted-foreground">...</td>
 </motion.tr>
 <motion.tr
 variants={rowVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 custom={6}
 className="font-semibold bg-muted/30"
 >
 <td className="py-2">Total</td>
 <td className="text-right text-cambridge-cyan">${totalDeposits}</td>
 <td className="text-right text-cambridge-orange">${totalCash}</td>
 <td className="text-right text-cambridge-green">${totalLoans}</td>
 </motion.tr>
 </tbody>
 </table>
 </motion.div>
 )}

 {/* Visual Bar Chart */}
 <div className="space-y-2">
 <div className="flex items-center gap-2">
 <span className="text-xs w-24 text-muted-foreground">Initial Deposit</span>
 <motion.div
 className="h-5 bg-cambridge-magenta/60 rounded"
 initial={{ width: 0 }}
 animate={{ width: isVisible ? '10%': 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 />
 <span className="text-xs text-cambridge-magenta">$100</span>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-xs w-24 text-muted-foreground">Total Deposits</span>
 <motion.div
 className="h-5 bg-cambridge-cyan/60 rounded"
 initial={{ width: 0 }}
 animate={{ width: isVisible ? '100%': 0 }}
 transition={{ duration: 0.8, delay: 0.4 }}
 />
 <span className="text-xs text-cambridge-cyan">$1,000</span>
 </div>
 </div>

 {/* Note */}
 <div className="mt-3 p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
 <strong>Note:</strong> The smaller the cash ratio, the stronger the multiplier effect. 
 Commercial banks create money through lending because they know not all customers will 
 withdraw simultaneously.
 </div>
 </div>
 );
};

export default CreditMultiplierDiagram;
