import { motion } from 'framer-motion';
import DiagramFrame from './DiagramFrame';
import { DIAGRAM_COLORS as C, revealFade } from './diagramStyle';

/**
 * How the CPI is actually computed: weights × price changes = contributions.
 *
 * Weights sum to 1.00 (i.e. 1000 index points) and contributions sum to the
 * headline rate: 1.80 + 1.80 + 0.60 + 0.50 + 0.30 + 0.15 − 0.08 = 5.07%.
 * CPI therefore moves 100.0 → 105.07 over the year.
 */
const BASKET = [
  { item: 'Housing, water, fuel', weight: 0.30, change: 6.0 },
  { item: 'Food & non-alcoholic drink', weight: 0.20, change: 9.0 },
  { item: 'Transport', weight: 0.15, change: 4.0 },
  { item: 'Restaurants & hotels', weight: 0.10, change: 5.0 },
  { item: 'Recreation & culture', weight: 0.12, change: 2.5 },
  { item: 'Clothing & footwear', weight: 0.08, change: -1.0 },
  { item: 'Other goods & services', weight: 0.05, change: 3.0 },
];

const CPIBasketDiagram = () => {
  const contributions = BASKET.map((b) => b.weight * b.change);
  const headline = contributions.reduce((a, b) => a + b, 0); // 5.07
  const maxAbs = Math.max(...contributions.map(Math.abs));

  return (
    <DiagramFrame
      title="Measuring Inflation: The CPI Weighted Basket"
      eyebrow="Figure — weight × price change = contribution to the headline rate"
      legend={[
        { label: 'Positive contribution to inflation', color: C.demand, kind: 'area' },
        { label: 'Negative contribution (falling prices)', color: C.welfareGain, kind: 'area' },
      ]}
      note={
        <>
          The CPI is a <strong>weighted average</strong>, not a simple average. Weights come from the
          Living Costs / Family Expenditure Survey and reflect each category's share of typical household
          spending, so a 9% rise in food (weight 0.20) contributes 1.80 percentage points while a 3% rise in
          "other" (weight 0.05) contributes only 0.15. Summing the contributions gives the headline rate of
          <strong> 5.07%</strong>, i.e. the index moves from 100.0 in the base year to 105.07.
          Rate of inflation = (CPI₁ − CPI₀) / CPI₀ × 100. Known limitations:
          <strong> substitution bias</strong> (fixed weights ignore switching to cheaper goods),
          <strong> quality bias</strong> (better products counted as dearer ones),
          <strong> new goods bias</strong>, <strong>outlet bias</strong>, a sampling error of roughly
          ±0.1pp, and the fact that a single national average hides very different personal inflation rates —
          low-income households spend a far larger share on food and energy, so their effective rate here
          exceeds 5.07%. CPI also excludes owner-occupier housing costs (captured by CPIH) and mortgage
          interest (captured by RPI).
        </>
      }
    >
      {() => (
        <div className="min-w-[320px]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b border-primary/20 text-left text-muted-foreground">
                  <th className="py-2 pr-2 font-medium">Category</th>
                  <th className="py-2 px-2 text-right font-medium">Weight</th>
                  <th className="py-2 px-2 text-right font-medium">Δ price (%)</th>
                  <th className="py-2 px-2 text-right font-medium">Contribution (pp)</th>
                  <th className="py-2 pl-2 font-medium">Share of the headline rate</th>
                </tr>
              </thead>
              <tbody>
                {BASKET.map((b, i) => {
                  const contribution = contributions[i];
                  const positive = contribution >= 0;
                  return (
                    <motion.tr
                      key={b.item}
                      className="border-b border-primary/10"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.09, duration: 0.35 }}
                    >
                      <td className="py-2 pr-2 text-silver-bright">{b.item}</td>
                      <td className="py-2 px-2 text-right font-mono">{b.weight.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right font-mono" style={{ color: positive ? C.demand : C.welfareGain }}>
                        {b.change > 0 ? '+' : ''}{b.change.toFixed(1)}
                      </td>
                      <td className="py-2 px-2 text-right font-mono" style={{ color: positive ? C.demand : C.welfareGain }}>
                        {contribution > 0 ? '+' : ''}{contribution.toFixed(2)}
                      </td>
                      <td className="py-2 pl-2">
                        <div className="h-2.5 w-full rounded-sm bg-muted/30">
                          <motion.div
                            className="h-2.5 rounded-sm"
                            style={{ backgroundColor: positive ? C.demand : C.welfareGain }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(Math.abs(contribution) / maxAbs) * 100}%` }}
                            transition={{ delay: 0.2 + i * 0.09, duration: 0.5 }}
                          />
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
                <tr className="border-t border-primary/30">
                  <td className="py-2 pr-2 font-semibold text-silver-bright">Total basket</td>
                  <td className="py-2 px-2 text-right font-mono font-semibold">1.00</td>
                  <td className="py-2 px-2 text-right font-mono text-muted-foreground">—</td>
                  <td className="py-2 px-2 text-right font-mono font-semibold" style={{ color: C.marker }}>
                    +{headline.toFixed(2)}
                  </td>
                  <td className="py-2 pl-2 text-muted-foreground">headline CPI inflation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <motion.div
            className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-center font-mono text-xs"
            {...revealFade(6)}
          >
            CPI: 100.0 → 105.07 &nbsp;|&nbsp; inflation = (105.07 − 100.0) / 100.0 × 100 = 5.07%
          </motion.div>
        </div>
      )}
    </DiagramFrame>
  );
};

export default CPIBasketDiagram;
