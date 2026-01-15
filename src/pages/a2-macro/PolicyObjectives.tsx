import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';

const PolicyObjectives = () => {
  return (
    <Layout showSidebar>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Policy Conflicts & Instruments
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A2 Level Macroeconomics • Chapter 7
          </p>

          {/* Macroeconomic Objectives Revisited */}
          <ContentSection title="Macroeconomic Objectives at A2">
            <p className="text-foreground/90 leading-relaxed mb-4">
              At A2 level, we deepen our understanding of policy objectives and the complex interactions between them. Policymakers must balance multiple goals simultaneously, recognizing that perfect achievement of all objectives is rarely possible.
            </p>

            <NoteCard title="Extended Policy Objectives" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary">Core Objectives</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Sustainable economic growth (2-3% annual real GDP)</li>
                      <li>Full employment (natural rate of unemployment)</li>
                      <li>Price stability (2% inflation target)</li>
                      <li>Balance of payments equilibrium</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary">Extended Objectives</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Equitable income distribution</li>
                      <li>Environmental sustainability</li>
                      <li>Fiscal sustainability (manageable debt)</li>
                      <li>Financial stability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </NoteCard>
          </ContentSection>

          {/* Policy Conflicts */}
          <ContentSection title="Policy Conflicts in Depth">
            <p className="text-foreground/90 leading-relaxed mb-4">
              The fundamental challenge of macroeconomic policy is that objectives often conflict. Achieving one goal may require sacrificing progress on another.
            </p>

            <div className="space-y-4 mb-6">
              <NoteCard title="1. Inflation vs Unemployment" variant="warning">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>The Phillips Curve Trade-off:</strong> In the short run, reducing unemployment below the natural rate creates inflationary pressure as wages rise in tight labor markets.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold">Short-Run:</p>
                    <p className="text-sm text-muted-foreground">Inverse relationship—can reduce unemployment but at cost of higher inflation</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Long-Run:</p>
                    <p className="text-sm text-muted-foreground">No trade-off—LRPC is vertical at natural rate; only supply-side policies can reduce it</p>
                  </div>
                </div>
              </NoteCard>

              <NoteCard title="2. Economic Growth vs Current Account" variant="warning">
                <p className="text-sm text-muted-foreground mb-3">
                  Rapid growth typically worsens the current account as rising incomes increase demand for imports. Countries with high growth rates often experience current account deficits.
                </p>
                <p className="text-sm">
                  <strong>Resolution:</strong> Supply-side policies can improve export competitiveness, allowing growth without worsening the external balance.
                </p>
              </NoteCard>

              <NoteCard title="3. Low Interest Rates vs Exchange Rate Stability" variant="warning">
                <p className="text-sm text-muted-foreground mb-3">
                  Low interest rates stimulate domestic demand but may cause capital outflows, depreciating the currency. This can help exports but risks imported inflation.
                </p>
                <p className="text-sm">
                  <strong>Resolution:</strong> Countries must choose between domestic and external objectives, or use complementary policies (e.g., capital controls).
                </p>
              </NoteCard>

              <NoteCard title="4. Growth vs Environmental Sustainability" variant="warning">
                <p className="text-sm text-muted-foreground mb-3">
                  Traditional growth increases resource use and pollution. The challenge is achieving "green growth" that decouples economic expansion from environmental degradation.
                </p>
                <p className="text-sm">
                  <strong>Resolution:</strong> Carbon pricing, green investment incentives, and circular economy policies aim to reconcile these objectives.
                </p>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Policy Instruments */}
          <ContentSection title="Policy Instruments & Their Effectiveness">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Governments have three main categories of policy instruments, each with distinct mechanisms, strengths, and limitations.
            </p>

            <NoteCard title="Fiscal Policy Instruments" className="mb-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-primary">Taxation</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>Direct taxes:</strong> Income tax, corporation tax, wealth taxes</li>
                    <li><strong>Indirect taxes:</strong> VAT, excise duties, carbon taxes</li>
                    <li><strong>Effects:</strong> Influence consumption, investment, and work incentives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Government Spending</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li><strong>Current spending:</strong> Public sector wages, welfare payments</li>
                    <li><strong>Capital spending:</strong> Infrastructure, education, healthcare facilities</li>
                    <li><strong>Transfer payments:</strong> Benefits, pensions, subsidies</li>
                  </ul>
                </div>
              </div>
            </NoteCard>

            <NoteCard title="Monetary Policy Instruments" className="mb-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-primary">Interest Rates (Primary Tool)</h4>
                  <p className="text-sm text-muted-foreground">The base rate set by the central bank influences borrowing costs, saving returns, asset prices, and exchange rates.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Quantitative Easing (QE)</h4>
                  <p className="text-sm text-muted-foreground">Central bank purchases financial assets to inject liquidity when rates are at lower bound. Lowers long-term yields and stimulates lending.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Macroprudential Tools</h4>
                  <p className="text-sm text-muted-foreground">Capital requirements, loan-to-value limits, stress tests to ensure financial stability without changing interest rates.</p>
                </div>
              </div>
            </NoteCard>

            <NoteCard title="Supply-Side Policy Instruments" className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary">Market-Based</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Deregulation</li>
                    <li>Privatization</li>
                    <li>Tax incentives for R&D</li>
                    <li>Labor market flexibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Interventionist</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Education and training programs</li>
                    <li>Infrastructure investment</li>
                    <li>Industrial strategy</li>
                    <li>Regional development</li>
                  </ul>
                </div>
              </div>
            </NoteCard>

            <AnalysisBlock title="The Policy Mix">
              <p className="mb-4">
                Effective macroeconomic management requires coordinating different policy types:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Recession:</strong> Expansionary fiscal + monetary policy together (policy coordination)</li>
                <li><strong>Stagflation:</strong> Tight monetary policy to control inflation + supply-side to reduce costs</li>
                <li><strong>Overheating:</strong> Contractionary monetary policy as primary tool (faster-acting)</li>
                <li><strong>Long-term growth:</strong> Supply-side focus while maintaining demand stability</li>
              </ul>
            </AnalysisBlock>
          </ContentSection>

          {/* Time Lags */}
          <ContentSection title="Time Lags in Policy">
            <p className="text-foreground/90 leading-relaxed mb-4">
              All policies suffer from time lags that complicate their implementation and effectiveness.
            </p>

            <NoteCard title="Types of Policy Lags" className="mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold">Recognition Lag</h4>
                    <p className="text-sm text-muted-foreground">Time to identify that a problem exists (data collection and analysis delays)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold">Decision Lag</h4>
                    <p className="text-sm text-muted-foreground">Time to formulate and approve policy response (longer for fiscal than monetary)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold">Implementation Lag</h4>
                    <p className="text-sm text-muted-foreground">Time to put policy into effect (immediate for interest rates, longer for spending)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold">Transmission Lag</h4>
                    <p className="text-sm text-muted-foreground">Time for policy to affect the economy (18-24 months for monetary policy)</p>
                  </div>
                </div>
              </div>
            </NoteCard>

            <ExamTipBox title="Evaluating Policy Effectiveness">
              <p className="mb-2">Consider these factors when analyzing policy:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li><strong>Magnitude:</strong> How large is the policy change?</li>
                <li><strong>Timing:</strong> What are the relevant time lags?</li>
                <li><strong>State of economy:</strong> Where are we in the business cycle?</li>
                <li><strong>Expectations:</strong> How will agents respond?</li>
                <li><strong>Complementary policies:</strong> What other measures are in place?</li>
                <li><strong>Unintended consequences:</strong> What trade-offs might emerge?</li>
              </ol>
            </ExamTipBox>
          </ContentSection>

          {/* Central Bank Independence */}
          <ContentSection title="Central Bank Independence">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Most developed countries have granted their central banks operational independence to set interest rates, insulating monetary policy from short-term political pressures.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <NoteCard title="Arguments For Independence" variant="success">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Credibility:</strong> Reduces inflation expectations</li>
                  <li><strong>Long-term focus:</strong> Avoids political business cycle</li>
                  <li><strong>Expertise:</strong> Technical decisions by specialists</li>
                  <li><strong>Faster response:</strong> No parliamentary delays</li>
                  <li><strong>Accountability:</strong> Clear mandate for price stability</li>
                </ul>
              </NoteCard>

              <NoteCard title="Arguments Against Independence" variant="warning">
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong>Democratic deficit:</strong> Unelected officials make major decisions</li>
                  <li><strong>Narrow focus:</strong> May neglect employment objectives</li>
                  <li><strong>Coordination problems:</strong> Monetary-fiscal conflicts possible</li>
                  <li><strong>Crisis response:</strong> May need political direction in emergencies</li>
                </ul>
              </NoteCard>
            </div>
          </ContentSection>

          {/* Chapter Summary */}
          <ContentSection title="Chapter Summary">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Policy Conflicts</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Phillips Curve: short-run inflation-unemployment trade-off</li>
                    <li>Growth often worsens current account</li>
                    <li>Low rates may destabilize exchange rate</li>
                    <li>Growth vs environment requires green policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Policy Instruments</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Fiscal: taxes and spending (long lags)</li>
                    <li>Monetary: interest rates (faster but 18-24 month transmission)</li>
                    <li>Supply-side: structural reforms (very long lags)</li>
                    <li>Policy mix needed for complex challenges</li>
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

export default PolicyObjectives;
