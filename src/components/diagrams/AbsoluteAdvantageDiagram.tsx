import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AbsoluteAdvantageDiagram = () => {
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

  // Production data from PDF: Coffenia & Robotia
  const productionData = [
    { country: 'Coffenia', coffee: 8, robots: 4, ocCoffee: '0.5 robots', ocRobots: '2 coffee' },
    { country: 'Robotia', coffee: 3, robots: 6, ocCoffee: '2 robots', ocRobots: '0.5 coffee' }
  ];

  return (
    <div ref={containerRef} className="glass-card p-4 my-4">
      <h3 className="font-serif text-lg text-gradient mb-3">Absolute Advantage: Coffenia vs Robotia</h3>

      {/* Production Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto mb-4"
      >
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-muted">
              <th className="text-left py-2 px-2">Country</th>
              <th className="text-center py-2 px-2">Coffee (units)</th>
              <th className="text-center py-2 px-2">OR</th>
              <th className="text-center py-2 px-2">Robots (units)</th>
              <th className="text-center py-2 px-2">OC of 1 Coffee</th>
              <th className="text-center py-2 px-2">OC of 1 Robot</th>
            </tr>
          </thead>
          <tbody>
            {productionData.map((row, i) => (
              <motion.tr 
                key={row.country}
                className="border-b border-muted/50"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <td className="py-2 px-2 font-semibold" style={{ color: row.country === 'Coffenia' ? 'hsl(var(--cambridge-cyan))' : 'hsl(var(--cambridge-orange))' }}>
                  {row.country}
                </td>
                <td className="text-center py-2 px-2">{row.coffee}</td>
                <td className="text-center py-2 px-2 text-muted-foreground">or</td>
                <td className="text-center py-2 px-2">{row.robots}</td>
                <td className="text-center py-2 px-2 text-primary">{row.ocCoffee}</td>
                <td className="text-center py-2 px-2 text-secondary">{row.ocRobots}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Analysis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="grid md:grid-cols-2 gap-3"
      >
        <div className="p-3 bg-cambridge-cyan/10 rounded-lg border-l-3 border-cambridge-cyan">
          <h4 className="font-semibold text-cambridge-cyan text-sm mb-1">Coffenia's Absolute Advantage</h4>
          <p className="text-xs text-muted-foreground">
            Can produce <strong>8 units of coffee</strong> vs Robotia's 3 units. Its PPC extends further on the coffee axis, indicating absolute advantage in coffee production.
          </p>
        </div>
        <div className="p-3 bg-cambridge-orange/10 rounded-lg border-l-3 border-cambridge-orange">
          <h4 className="font-semibold text-cambridge-orange text-sm mb-1">Robotia's Absolute Advantage</h4>
          <p className="text-xs text-muted-foreground">
            Can produce <strong>6 units of robots</strong> vs Coffenia's 4 units. Its PPC extends further on the robot axis, indicating absolute advantage in robot production.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="mt-3 p-3 bg-muted/30 rounded-lg text-xs"
      >
        <p><strong>Opportunity Cost Calculation:</strong></p>
        <p className="mt-1">Coffenia: 8 coffee = 4 robots → 1 coffee = 0.5 robots → 1 robot = 2 coffee</p>
        <p>Robotia: 3 coffee = 6 robots → 1 coffee = 2 robots → 1 robot = 0.5 coffee</p>
      </motion.div>
    </div>
  );
};

export default AbsoluteAdvantageDiagram;
