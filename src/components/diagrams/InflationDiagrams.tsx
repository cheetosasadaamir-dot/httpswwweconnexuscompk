import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DemandPullDiagram from './inflation/DemandPullDiagram';
import CostPushDiagram from './inflation/CostPushDiagram';
import MonetaryInflationDiagram from './inflation/MonetaryInflationDiagram';
import AnalysisBlock from '@/components/AnalysisBlock';

const InflationDiagrams = () => {
  return (
    <div className="glass-card p-6">
      <h3 className="font-serif text-xl text-gradient mb-4">Causes of Inflation — Interactive Diagrams</h3>

      <Tabs defaultValue="demand-pull" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="demand-pull">Demand-Pull</TabsTrigger>
          <TabsTrigger value="cost-push">Cost-Push</TabsTrigger>
          <TabsTrigger value="monetary">Monetary</TabsTrigger>
        </TabsList>

        {/* ═══ DEMAND-PULL TAB ═══ */}
        <TabsContent value="demand-pull" className="space-y-4">
          <DemandPullDiagram />

          <AnalysisBlock title="Step-by-Step: AD Shift → Price Rise" type="analysis">
            <p>
              <strong>Step 1:</strong> An exogenous increase in a component of AD (e.g., ↑C from rising consumer confidence, ↑G from fiscal expansion, or ↑(X−M) from currency depreciation) shifts the AD curve rightward from <strong>AD₁ → AD₂</strong>.
            </p>
            <p>
              <strong>Step 2:</strong> At the original price level P₁, there is now <em>excess demand</em> — planned expenditure exceeds available output. Firms face order backlogs and rising capacity utilisation.
            </p>
            <p>
              <strong>Step 3:</strong> Firms compete for scarce factors of production, bidding up wages, rents, and raw material prices. These rising factor costs are passed through into final goods prices.
            </p>
            <p>
              <strong>Step 4:</strong> The economy moves along the upward-sloping SRAS curve to a new equilibrium <strong>E₂</strong>, where both the price level (P₁ → P₂) and real output (Y₁ → Y₂) are higher.
            </p>
          </AnalysisBlock>

          <AnalysisBlock title="Evaluation: The Output Gap Matters" type="evaluation">
            <p>
              The inflationary impact of a rightward AD shift depends critically on where the economy sits relative to its <strong>productive capacity (Yf)</strong>. On the <em>flat Keynesian section</em> of the SRAS curve (high spare capacity), AD increases raise output with minimal price effects. On the <em>steep Classical section</em> (near full employment), the same shift is predominantly inflationary.
            </p>
            <p>
              Furthermore, demand-pull inflation is <strong>self-limiting</strong> in the long run if it triggers a policy response: central banks may raise interest rates to dampen AD, while the multiplier effect diminishes as marginal propensities to save increase under uncertainty. The <strong>real-world time lag</strong> between the AD shock and the policy response (typically 12–18 months for monetary policy) means short-run overshooting is common.
            </p>
          </AnalysisBlock>
        </TabsContent>

        {/* ═══ COST-PUSH TAB ═══ */}
        <TabsContent value="cost-push" className="space-y-4">
          <CostPushDiagram />

          <AnalysisBlock title="Step-by-Step: SRAS Shift → Stagflation" type="analysis">
            <p>
              <strong>Step 1:</strong> An exogenous supply-side shock raises unit costs of production — this may be a spike in global oil prices, a rise in minimum wages, higher import costs from currency depreciation, or increased indirect taxation.
            </p>
            <p>
              <strong>Step 2:</strong> At every price level, firms are willing and able to supply <em>less output</em>, shifting the SRAS curve leftward from <strong>SRAS₁ → SRAS₂</strong>.
            </p>
            <p>
              <strong>Step 3:</strong> The new equilibrium <strong>E₂</strong> features a higher price level (P₁ → P₂) and lower real output (Y₁ → Y₂) — the toxic combination known as <strong>stagflation</strong>.
            </p>
            <p>
              <strong>Step 4:</strong> The fall in output increases unemployment (Okun's Law), while the rising price level erodes real wages and consumer purchasing power simultaneously.
            </p>
          </AnalysisBlock>

          <AnalysisBlock title="Evaluation: The Policy Dilemma" type="evaluation">
            <p>
              Cost-push inflation creates a fundamental <strong>macroeconomic policy conflict</strong>. If the government uses expansionary demand-side policy to restore output (shifting AD right), it worsens inflation. If it uses contractionary policy to control inflation (shifting AD left), it deepens the recession.
            </p>
            <p>
              The only sustainable resolution is <strong>supply-side policy</strong> — investment in productivity, deregulation, or reduction in factor costs — to shift SRAS back rightward. However, supply-side measures operate with <em>long and variable time lags</em> (often 5–10 years for structural reforms), providing no short-term relief. This explains why stagflation episodes (e.g., the 1970s oil crises) are considered among the most challenging macroeconomic conditions to manage.
            </p>
          </AnalysisBlock>
        </TabsContent>

        {/* ═══ MONETARY TAB ═══ */}
        <TabsContent value="monetary" className="space-y-4">
          <MonetaryInflationDiagram />

          <AnalysisBlock title="Step-by-Step: Money Supply → Purely Inflationary" type="analysis">
            <p>
              <strong>Step 1:</strong> The central bank or monetary authority increases the money supply (M) — through quantitative easing, reduced reserve requirements, or direct monetisation of government debt.
            </p>
            <p>
              <strong>Step 2:</strong> With more money in circulation, interest rates fall and liquidity increases. Consumers and firms increase spending, shifting AD rightward from <strong>AD₁ → AD₂</strong>.
            </p>
            <p>
              <strong>Step 3:</strong> In the <em>long run</em>, the economy operates at full employment output (Yf), determined by the vertical LRAS. Real output cannot increase beyond this capacity constraint.
            </p>
            <p>
              <strong>Step 4:</strong> The entire AD increase is absorbed by <strong>price level rises</strong> (P₁ → P₂). Output remains at Yf — the increase in M is <em>purely inflationary</em>, consistent with the Quantity Theory: <strong>MV = PQ</strong>.
            </p>
          </AnalysisBlock>

          <AnalysisBlock title="Evaluation: The Monetarist–Keynesian Debate" type="evaluation">
            <p>
              The Quantity Theory rests on two critical assumptions: that the velocity of circulation (V) is <strong>stable</strong> and that real output (Q) is <strong>fixed at full employment</strong>. <em>Monetarists</em> (Friedman) argue these hold in the long run, making inflation "always and everywhere a monetary phenomenon."
            </p>
            <p>
              <em>Keynesians</em> challenge both assumptions: V fluctuates with liquidity preference and financial innovation, while Q can deviate from full employment for extended periods due to demand deficiency. In the <strong>liquidity trap</strong> scenario (near-zero interest rates), increases in M may be hoarded as idle balances rather than spent, breaking the M→P transmission mechanism entirely — as observed during post-2008 QE programmes where massive monetary expansion produced minimal consumer price inflation.
            </p>
          </AnalysisBlock>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InflationDiagrams;
