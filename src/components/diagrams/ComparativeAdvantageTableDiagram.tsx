import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComparativeAdvantageTableDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  // Production data from PDF: Cottonia & Microchippia
  const productionData = [
    { country: 'Cottonia', cotton: 20, microchips: 10, ocCotton: '0.5 microchips', ocMicrochip: '2 cotton' },
    { country: 'Microchippia', cotton: 25, microchips: 50, ocCotton: '2 microchips', ocMicrochip: '0.5 cotton' }
  ];

  return (
    <div ref={containerRef} className="glass-card p-4 my-4">
      <h3 className="font-serif text-lg text-gradient mb-3">Comparative Advantage: Cottonia vs Microchippia</h3>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        className="p-2 bg-muted/30 rounded-lg mb-3 text-xs text-center"
      >
        <p className="font-semibold text-cambridge-orange">Key Insight: Microchippia has absolute advantage in BOTH goods!</p>
        <p className="text-muted-foreground">Yet trade can still benefit both countries through comparative advantage.</p>
      </motion.div>

      {/* Production Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-x-auto mb-4"
      >
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-muted">
              <th className="text-left py-2 px-2">Country</th>
              <th className="text-center py-2 px-2">Cotton (units)</th>
              <th className="text-center py-2 px-2">OR</th>
              <th className="text-center py-2 px-2">Microchips</th>
              <th className="text-center py-2 px-2 text-primary">OC of 1 Cotton</th>
              <th className="text-center py-2 px-2 text-secondary">OC of 1 Microchip</th>
            </tr>
          </thead>
          <tbody>
            {productionData.map((row, i) => (
              <motion.tr 
                key={row.country}
                className="border-b border-muted/50"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <td className="py-2 px-2 font-semibold" style={{ color: row.country === 'Cottonia' ? 'hsl(var(--cambridge-cyan))' : 'hsl(var(--cambridge-orange))' }}>
                  {row.country}
                </td>
                <td className="text-center py-2 px-2">{row.cotton}</td>
                <td className="text-center py-2 px-2 text-muted-foreground">or</td>
                <td className="text-center py-2 px-2">{row.microchips}</td>
                <td className="text-center py-2 px-2 font-semibold" style={{ color: row.country === 'Cottonia' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))' }}>
                  {row.ocCotton}
                </td>
                <td className="text-center py-2 px-2 font-semibold" style={{ color: row.country === 'Microchippia' ? 'hsl(var(--secondary))' : 'hsl(var(--muted-foreground))' }}>
                  {row.ocMicrochip}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Opportunity Cost Calculation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="p-3 bg-muted/30 rounded-lg text-xs mb-3"
      >
        <p className="font-semibold mb-1">Opportunity Cost Calculation:</p>
        <p><span className="text-cambridge-cyan">Cottonia:</span> 20 cotton = 10 microchips → 1 cotton = <strong>0.5 microchips</strong> → 1 microchip = 2 cotton</p>
        <p><span className="text-cambridge-orange">Microchippia:</span> 25 cotton = 50 microchips → 1 cotton = <strong>2 microchips</strong> → 1 microchip = 0.5 cotton</p>
      </motion.div>

      {/* Comparative Advantage Analysis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-2 gap-3"
      >
        <div className="p-3 bg-cambridge-cyan/10 rounded-lg border-l-3 border-cambridge-cyan">
          <h4 className="font-semibold text-cambridge-cyan text-sm mb-1">Cottonia's Comparative Advantage</h4>
          <p className="text-xs text-muted-foreground">
            <strong>Cotton</strong> — Lower opportunity cost (0.5 microchips vs 2 microchips). Should specialize in cotton production.
          </p>
        </div>
        <div className="p-3 bg-cambridge-orange/10 rounded-lg border-l-3 border-cambridge-orange">
          <h4 className="font-semibold text-cambridge-orange text-sm mb-1">Microchippia's Comparative Advantage</h4>
          <p className="text-xs text-muted-foreground">
            <strong>Microchips</strong> — Lower opportunity cost (0.5 cotton vs 2 cotton). Should specialize in microchip production.
          </p>
        </div>
      </motion.div>

      {/* Trade Results */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-3 p-3 bg-cambridge-green/10 rounded-lg border border-cambridge-green/30 text-xs"
      >
        <p className="font-semibold text-cambridge-green mb-1">With Specialization & Trade:</p>
        <p>Cottonia exports 10 units of cotton and imports 10 units of microchips.</p>
        <p>Microchippia exports 10 units of microchips and imports 10 units of cotton.</p>
        <p className="mt-1 text-muted-foreground italic">Both countries can now consume beyond their individual PPCs!</p>
      </motion.div>

      {/* Parallel PPC Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-3 p-3 bg-destructive/10 rounded-lg border border-destructive/30 text-xs"
      >
        <p className="font-semibold text-destructive">⚠️ Important Note: Parallel PPC leads to no trade.</p>
        <p className="text-muted-foreground">If two countries have parallel PPCs, their opportunity costs are identical, meaning neither has a comparative advantage. There would be no basis for mutually beneficial trade.</p>
      </motion.div>
    </div>
  );
};

export default ComparativeAdvantageTableDiagram;
