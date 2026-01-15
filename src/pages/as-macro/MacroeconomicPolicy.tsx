import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import { PolicyTradeoffDiagram } from '@/components/diagrams/PolicyTradeoffDiagram';

const MacroeconomicPolicy = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Macroeconomic Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            AS Level Macroeconomics • Chapter 5
          </p>

          {/* Policy Objectives */}
          <ContentSection title="Macroeconomic Policy Objectives">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Governments pursue a range of macroeconomic objectives to promote economic welfare. These objectives often conflict with each other, requiring policymakers to make difficult trade-offs.
            </p>

            <NoteCard title="The Four Main Objectives" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary">1. Economic Growth</h4>
                    <p className="text-sm text-muted-foreground">Sustained increase in real GDP over time, typically measured as annual percentage change. Target: 2-3% for developed economies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">2. Low Unemployment</h4>
                    <p className="text-sm text-muted-foreground">Minimizing the number of people actively seeking work but unable to find it. Target: Natural rate (around 4-5%).</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary">3. Price Stability</h4>
                    <p className="text-sm text-muted-foreground">Keeping inflation low and stable to maintain purchasing power and economic certainty. Target: 2% (most central banks).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">4. Balance of Payments Equilibrium</h4>
                    <p className="text-sm text-muted-foreground">Avoiding persistent current account deficits or surpluses that could lead to external debt or currency instability.</p>
                  </div>
                </div>
              </div>
            </NoteCard>

            <AnalysisBlock title="Additional Policy Objectives">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Income Equality:</strong> Reducing the gap between rich and poor through progressive taxation and redistribution</li>
                <li><strong>Environmental Sustainability:</strong> Balancing economic growth with protection of natural resources</li>
                <li><strong>Regional Balance:</strong> Ensuring economic development is spread across all regions</li>
                <li><strong>Fiscal Balance:</strong> Managing government debt at sustainable levels</li>
              </ul>
            </AnalysisBlock>
          </ContentSection>

          {/* Fiscal Policy */}
          <ContentSection title="Fiscal Policy">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Fiscal policy</strong> refers to the use of government spending (G) and taxation (T) to influence aggregate demand and the overall economy. It is determined by the government (typically the Treasury or Ministry of Finance).
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Expansionary Fiscal Policy">
                <p className="text-sm text-muted-foreground mb-2">Used to stimulate AD during recessions:</p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-3">
                  <li>Increase government spending (G↑)</li>
                  <li>Cut taxes (T↓)</li>
                  <li>Increase transfer payments</li>
                </ul>
                <p className="text-sm"><strong>Effect:</strong> AD shifts right → higher output and employment</p>
                <p className="text-sm text-amber-600 mt-2">⚠️ Results in budget deficit</p>
              </NoteCard>

              <NoteCard title="Contractionary Fiscal Policy">
                <p className="text-sm text-muted-foreground mb-2">Used to cool overheating economy:</p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-3">
                  <li>Decrease government spending (G↓)</li>
                  <li>Raise taxes (T↑)</li>
                  <li>Reduce transfer payments</li>
                </ul>
                <p className="text-sm"><strong>Effect:</strong> AD shifts left → lower inflation</p>
                <p className="text-sm text-green-600 mt-2">✓ May create budget surplus</p>
              </NoteCard>
            </div>

            <NoteCard title="The Multiplier Effect" variant="info" className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                An initial change in spending creates a larger final change in national income:
              </p>
              <div className="bg-primary/10 p-3 rounded-lg text-center mb-3">
                <p className="font-mono font-semibold">Multiplier (k) = 1 / (1 - MPC) = 1 / MPS</p>
              </div>
              <p className="text-sm">
                If MPC = 0.8, then k = 5. A £10bn increase in G leads to £50bn increase in GDP.
              </p>
            </NoteCard>

            <AnalysisBlock title="Limitations of Fiscal Policy">
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Time lags:</strong> Recognition, decision, and implementation delays</li>
                  <li><strong>Crowding out:</strong> Government borrowing raises interest rates, reducing private investment</li>
                  <li><strong>Political constraints:</strong> Spending cuts are politically unpopular</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Ricardian equivalence:</strong> Consumers may save more anticipating future tax rises</li>
                  <li><strong>Debt sustainability:</strong> Persistent deficits increase national debt</li>
                  <li><strong>Leakages:</strong> Spending may leak to imports</li>
                </ul>
              </div>
            </AnalysisBlock>
          </ContentSection>

          {/* Monetary Policy */}
          <ContentSection title="Monetary Policy">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Monetary policy</strong> involves the central bank using interest rates, money supply, and other tools to influence aggregate demand, particularly through investment and consumption decisions.
            </p>

            <NoteCard title="Interest Rate Transmission Mechanism" className="mb-6">
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-primary">When central bank cuts interest rates:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Cost of borrowing falls → businesses invest more (I↑)</li>
                  <li>Return on saving falls → consumers spend more (C↑)</li>
                  <li>Asset prices rise → wealth effect increases consumption</li>
                  <li>Exchange rate may depreciate → exports more competitive (X↑)</li>
                  <li><strong>Result:</strong> AD increases → output and inflation rise</li>
                </ol>
              </div>
            </NoteCard>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Expansionary Monetary Policy" variant="success">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Lower interest rates</li>
                  <li>Quantitative easing (QE)</li>
                  <li>Lower reserve requirements</li>
                </ul>
                <p className="text-sm mt-2"><strong>Goal:</strong> Stimulate spending during recession</p>
              </NoteCard>

              <NoteCard title="Contractionary Monetary Policy" variant="warning">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Higher interest rates</li>
                  <li>Selling government bonds</li>
                  <li>Higher reserve requirements</li>
                </ul>
                <p className="text-sm mt-2"><strong>Goal:</strong> Control inflation</p>
              </NoteCard>
            </div>

            <AnalysisBlock title="Limitations of Monetary Policy">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Liquidity trap:</strong> At very low interest rates, further cuts have no effect (people hold cash)</li>
                <li><strong>Time lags:</strong> Takes 18-24 months for full effect on economy</li>
                <li><strong>Confidence effects:</strong> Businesses may not invest even with low rates if confidence is weak</li>
                <li><strong>Asset bubbles:</strong> Prolonged low rates can inflate housing/stock bubbles</li>
                <li><strong>Exchange rate constraints:</strong> Rate cuts may cause excessive currency depreciation</li>
              </ul>
            </AnalysisBlock>
          </ContentSection>

          {/* Supply-Side Policy */}
          <ContentSection title="Supply-Side Policies">
            <p className="text-foreground/90 leading-relaxed mb-4">
              <strong>Supply-side policies</strong> aim to increase the productive capacity of the economy by shifting the LRAS curve to the right. Unlike demand-side policies, they focus on improving efficiency and competitiveness.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Market-Based Policies">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Deregulation:</strong> Reduce bureaucracy and barriers to entry</li>
                  <li><strong>Privatization:</strong> Transfer state assets to private sector</li>
                  <li><strong>Tax reform:</strong> Lower marginal tax rates to incentivize work/enterprise</li>
                  <li><strong>Trade liberalization:</strong> Reduce tariffs and quotas</li>
                  <li><strong>Labor market flexibility:</strong> Reduce union power, ease hiring/firing</li>
                </ul>
              </NoteCard>

              <NoteCard title="Interventionist Policies">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Education & training:</strong> Improve human capital</li>
                  <li><strong>Infrastructure investment:</strong> Roads, broadband, transport</li>
                  <li><strong>R&D subsidies:</strong> Encourage innovation</li>
                  <li><strong>Industrial policy:</strong> Support strategic sectors</li>
                  <li><strong>Regional policy:</strong> Attract investment to lagging areas</li>
                </ul>
              </NoteCard>
            </div>

            <NoteCard title="Benefits of Supply-Side Policies" variant="success" className="mb-4">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Non-inflationary growth (LRAS shifts right)</li>
                <li>Improved international competitiveness</li>
                <li>Higher long-run living standards</li>
                <li>Reduced natural rate of unemployment</li>
              </ul>
            </NoteCard>

            <NoteCard title="Limitations of Supply-Side Policies" variant="warning">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Long time lags (education takes years to improve productivity)</li>
                <li>Costly to implement (infrastructure spending)</li>
                <li>May increase inequality (tax cuts benefit wealthy)</li>
                <li>Uncertain outcomes (deregulation may not improve efficiency)</li>
                <li>May face political resistance (privatization, labor reforms)</li>
              </ul>
            </NoteCard>
          </ContentSection>

          {/* Policy Trade-offs */}
          <ContentSection title="Policy Conflicts & Trade-offs">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Pursuing one policy objective often comes at the cost of another. Understanding these trade-offs is essential for policy analysis.
            </p>

            <PolicyTradeoffDiagram />

            <NoteCard title="Key Policy Conflicts" className="mt-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Inflation vs Unemployment (Phillips Curve)</h4>
                  <p className="text-sm text-muted-foreground">Expansionary policies reduce unemployment but may cause inflation. This trade-off is more evident in the short run.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Growth vs Environment</h4>
                  <p className="text-sm text-muted-foreground">Rapid growth often increases pollution and resource depletion, though "green growth" policies aim to reconcile these.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Growth vs Current Account</h4>
                  <p className="text-sm text-muted-foreground">Strong growth pulls in imports, worsening the current account. Countries with high growth often run deficits.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Low Inflation vs Growth</h4>
                  <p className="text-sm text-muted-foreground">High interest rates to control inflation can dampen investment and slow growth.</p>
                </div>
              </div>
            </NoteCard>

            <ExamTipBox title="Policy Analysis Framework">
              <p className="mb-2">When evaluating policies, always consider:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li><strong>Objective:</strong> What is the policy trying to achieve?</li>
                <li><strong>Mechanism:</strong> How does it work (AD/AS framework)?</li>
                <li><strong>Trade-offs:</strong> What objectives might be sacrificed?</li>
                <li><strong>Time horizon:</strong> Short-run vs long-run effects?</li>
                <li><strong>Context:</strong> Economic conditions matter (recession vs boom)</li>
              </ol>
            </ExamTipBox>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Fiscal Policy</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>G and T to shift AD</li>
                    <li>Multiplier amplifies effects</li>
                    <li>Risk: crowding out, debt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Monetary Policy</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Interest rates to shift AD</li>
                    <li>Central bank independence</li>
                    <li>Risk: liquidity trap, lags</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Supply-Side</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Shifts LRAS right</li>
                    <li>Non-inflationary growth</li>
                    <li>Long time lags</li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentSection>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MacroeconomicPolicy;
