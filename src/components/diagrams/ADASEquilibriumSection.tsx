import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const EquilibriumTheorySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Core Equilibrium Definition */}
      <div className="glass-card p-8 bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-primary">
        <h4 className="font-serif text-xl font-semibold text-primary mb-6">
          The State of Macroeconomic Equilibrium
        </h4>
        <p className="text-muted-foreground leading-relaxed text-justify mb-4">
          The economy reaches a <strong>state of equilibrium</strong> where <InlineMath math="AD = AS" />. At this 
          point, the total planned expenditure on domestically produced goods and services exactly equals the 
          total quantity that producers are willing and able to supply. The equilibrium simultaneously determines 
          two crucial macroeconomic variables: the <strong>general price level</strong> (<InlineMath math="P_e" />) 
          and the <strong>level of real national output</strong> (<InlineMath math="Y_e" />).
        </p>
        <div className="my-6 p-5 bg-muted/40 rounded-xl text-center border border-primary/30">
          <BlockMath math="AD = C + I + G + (X - M) = AS" />
        </div>
        <p className="text-muted-foreground leading-relaxed text-justify">
          This equilibrium is a position of <em>rest</em>—there are no endogenous forces causing the economy to 
          move away from this point. However, equilibrium does <em>not</em> imply optimality: the economy may be 
          in equilibrium at a level of output significantly below full employment (<InlineMath math="Y_e < Y_f" />), 
          representing a <strong>deflationary gap</strong>, or above sustainable capacity in the short run, 
          generating inflationary pressure.
        </p>
      </div>

      {/* Market Imbalances Section */}
      <div className="glass-card p-8 bg-gradient-to-br from-destructive/5 to-transparent border-l-4 border-destructive">
        <h4 className="font-serif text-xl font-semibold text-destructive mb-6">
          Market Imbalances: Disequilibrium States
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-muted/30 rounded-lg border border-destructive/20">
            <h5 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold">↑</span>
              Excess Supply (Surplus)
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Occurs at any price level <strong>above</strong> the equilibrium point (<InlineMath math="P > P_e" />). 
              At this price, the quantity of goods and services that firms wish to supply exceeds the quantity 
              that economic agents wish to purchase.
            </p>
            <div className="font-mono text-xs bg-muted/50 p-3 rounded">
              <InlineMath math="AS > AD" /> → Unplanned inventory accumulation → 
              Downward pressure on <InlineMath math="P" /> and <InlineMath math="Y" />
            </div>
          </div>
          <div className="p-5 bg-muted/30 rounded-lg border border-primary/20">
            <h5 className="font-semibold text-primary mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">↓</span>
              Excess Aggregate Demand (Shortage)
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Occurs in the short run at any price level <strong>below</strong> equilibrium (<InlineMath math="P < P_e" />). 
              Total planned expenditure exceeds the available supply of goods and services at current prices.
            </p>
            <div className="font-mono text-xs bg-muted/50 p-3 rounded">
              <InlineMath math="AD > AS" /> → Inventory depletion → 
              Upward pressure on <InlineMath math="P" /> and <InlineMath math="Y" />
            </div>
          </div>
        </div>
      </div>

      {/* Shifts in AD Section */}
      <div className="glass-card p-8 bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-primary">
        <h4 className="font-serif text-xl font-semibold text-primary mb-6">
          Effects of Shifts in Aggregate Demand
        </h4>
        
        <div className="space-y-6">
          {/* Inward Shift */}
          <div className="p-5 bg-muted/20 rounded-lg border-l-4 border-muted">
            <h5 className="font-semibold text-muted-foreground mb-3">
              Inward (Leftward) Shift of AD
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              If AD shifts left (e.g., due to <strong>recession</strong>, <strong>lower business confidence</strong>, 
              <strong>contractionary fiscal policy</strong>, or <strong>falling consumer confidence</strong>), 
              both the price level and national output fall. The economy moves from the initial equilibrium 
              (<InlineMath math="P_e, Y_e" />) to a new equilibrium (<InlineMath math="P_1, Y_1" />).
            </p>
            <div className="font-mono text-xs bg-primary/10 p-4 rounded-lg border border-primary/20">
              <div className="mb-2 font-semibold text-primary">Chain of Analysis:</div>
              <InlineMath math="\downarrow \text{Business Confidence}" /> → 
              <InlineMath math="\downarrow I" /> → 
              <InlineMath math="AD \text{ shifts left}" /> → 
              <InlineMath math="P_e \rightarrow P_1" /> (↓) AND <InlineMath math="Y_e \rightarrow Y_1" /> (↓)
            </div>
          </div>

          {/* Outward Shift */}
          <div className="p-5 bg-primary/10 rounded-lg border-l-4 border-primary">
            <h5 className="font-semibold text-primary mb-3">
              Outward (Rightward) Shift of AD
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              If AD increases (e.g., due to <strong>expansionary fiscal policy</strong>, <strong>lower interest rates</strong>, 
              or <strong>rising consumer confidence</strong>), both the price level and national output increase. 
              The magnitude of the output increase depends on where the economy operates relative to full employment.
            </p>
            <div className="font-mono text-xs bg-primary/10 p-4 rounded-lg border border-primary/20">
              <div className="mb-2 font-semibold text-primary">Chain of Analysis:</div>
              <InlineMath math="\uparrow G" /> → 
              <InlineMath math="AD \text{ shifts right}" /> → 
              <InlineMath math="\text{Multiplier: } k = \frac{1}{1-MPC}" /> → 
              <InlineMath math="P_e \rightarrow P_2" /> (↑) AND <InlineMath math="Y_e \rightarrow Y_2" /> (↑)
            </div>
          </div>
        </div>
      </div>

      {/* Shifts in AS Section */}
      <div className="glass-card p-8 bg-gradient-to-br from-secondary/5 to-transparent border-l-4 border-secondary">
        <h4 className="font-serif text-xl font-semibold text-secondary mb-6">
          Effects of Shifts in Aggregate Supply
        </h4>
        
        <div className="space-y-6">
          {/* Outward Shift */}
          <div className="p-5 bg-secondary/10 rounded-lg border-l-4 border-secondary">
            <h5 className="font-semibold text-secondary mb-3">
              Outward (Rightward) Shift of AS
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Caused by <strong>increased productivity</strong>, <strong>technological advancement</strong>, 
              <strong>lower input costs</strong>, or <strong>improved efficiency</strong>. This <strong>lowers</strong> the 
              average price level from <InlineMath math="P_e" /> to <InlineMath math="P_1" /> and <strong>increases</strong> national 
              output from <InlineMath math="Y_e" /> to <InlineMath math="Y_1" />.
            </p>
            <div className="font-mono text-xs bg-secondary/10 p-4 rounded-lg border border-secondary/20">
              <div className="mb-2 font-semibold text-secondary">Chain of Analysis (Non-inflationary Growth):</div>
              <InlineMath math="\uparrow \text{Productivity}" /> → 
              <InlineMath math="\downarrow \text{Unit Costs}" /> → 
              <InlineMath math="AS \text{ shifts right}" /> → 
              <InlineMath math="P_e \rightarrow P_1" /> (↓) AND <InlineMath math="Y_e \rightarrow Y_1" /> (↑)
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              ✓ This is the <strong>ideal macroeconomic outcome</strong>: economic growth without inflation.
            </p>
          </div>

          {/* Inward Shift - Stagflation */}
          <div className="p-5 bg-destructive/10 rounded-lg border-l-4 border-destructive">
            <h5 className="font-semibold text-destructive mb-3">
              Inward (Leftward) Shift of AS — Stagflation
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              If AS shifts inwards (e.g., due to <strong>rising commodity prices</strong>, <strong>wage-push pressures</strong>, 
              or <strong>supply chain disruptions</strong>), the price level <strong>increases</strong> from 
              <InlineMath math="P_e" /> to <InlineMath math="P_2" /> while national output <strong>decreases</strong> from 
              <InlineMath math="Y_e" /> to <InlineMath math="Y_2" />. This toxic combination is called <strong>stagflation</strong>.
            </p>
            <div className="font-mono text-xs bg-destructive/10 p-4 rounded-lg border border-destructive/20">
              <div className="mb-2 font-semibold text-destructive">Chain of Analysis (Stagflation):</div>
              <InlineMath math="\uparrow P_{oil}" /> → 
              <InlineMath math="\uparrow \text{Production Costs}" /> → 
              <InlineMath math="SRAS \text{ shifts left}" /> → 
              <InlineMath math="P_e \rightarrow P_2" /> (↑) AND <InlineMath math="Y_e \rightarrow Y_2" /> (↓)
            </div>
            <p className="text-xs text-destructive mt-3">
              ⚠️ Policy dilemma: Expansionary policy worsens inflation; contractionary policy deepens recession.
            </p>
          </div>
        </div>
      </div>

      {/* SRAS vs LRAS Nuance */}
      <div className="glass-card p-8 bg-gradient-to-br from-accent/5 to-transparent border-l-4 border-accent">
        <h4 className="font-serif text-xl font-semibold text-accent mb-6">
          Short-Run vs Long-Run: The Critical Distinction
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 bg-[hsl(var(--cambridge-orange))]/10 rounded-lg border border-[hsl(var(--cambridge-orange))]/30">
            <h5 className="font-semibold text-[hsl(var(--cambridge-orange))] mb-3">
              Short-Run Aggregate Supply (SRAS)
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Represents the period <strong>immediately after a price level change</strong> where production costs 
              (especially <strong>money wages</strong>) and productivity of factor inputs are held constant.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• <strong>Upward sloping</strong>: Supply responds to AD-driven price changes</li>
              <li>• Wages are "sticky" due to contracts and menu costs</li>
              <li>• <InlineMath math="\uparrow P" /> → <InlineMath math="\downarrow (W/P)" /> → <InlineMath math="\uparrow Q_s" /></li>
            </ul>
          </div>
          <div className="p-5 bg-[hsl(var(--cambridge-green))]/10 rounded-lg border border-[hsl(var(--cambridge-green))]/30">
            <h5 className="font-semibold text-[hsl(var(--cambridge-green))] mb-3">
              Long-Run Aggregate Supply (LRAS)
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Shows the economy's <strong>productive potential</strong> when all prices, costs, and productivity 
              can fully adjust. Analogous to the <strong>Production Possibility Frontier</strong>.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• <strong>Vertical</strong>: Output independent of price level</li>
              <li>• All prices (including wages) fully flexible</li>
              <li>• <InlineMath math="\uparrow P" /> → <InlineMath math="\uparrow W" /> proportionally → <InlineMath math="(W/P)" /> unchanged</li>
            </ul>
          </div>
        </div>

        {/* Examiner Insight */}
        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <span className="font-semibold text-amber-400">📝 CIE Examiner Insight:</span>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            The key distinction is <strong>wage flexibility</strong>. In the short run, money wages are contractually 
            fixed—so rising prices lower real wages, incentivising firms to expand output. In the long run, wages 
            fully adjust to price changes, restoring real wages to equilibrium and eliminating any output response 
            to price level changes alone. Always state this mechanism explicitly in your exam answers.
          </p>
        </div>
      </div>

      {/* Geometric Precision Note */}
      <div className="p-4 bg-muted/30 rounded-lg border border-muted text-sm">
        <h5 className="font-semibold text-foreground mb-2">📐 Diagram Precision Standards</h5>
        <ul className="text-muted-foreground space-y-1">
          <li>• Axes: <InlineMath math="P" /> (General Price Level) on vertical axis, <InlineMath math="Y" /> (Real National Output / Real GDP) on horizontal axis</li>
          <li>• Equilibrium point <InlineMath math="E" /> must align precisely with grid intersections of <InlineMath math="P_e" /> and <InlineMath math="Y_e" /></li>
          <li>• AD curve: Downward sloping (negative relationship between <InlineMath math="P" /> and real expenditure)</li>
          <li>• SRAS curve: Upward sloping (positive relationship when wages are sticky)</li>
          <li>• LRAS curve: Perfectly vertical at <InlineMath math="Y_f" /> (full employment output)</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default EquilibriumTheorySection;
