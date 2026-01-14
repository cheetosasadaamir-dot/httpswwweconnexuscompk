import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import LiquidityPreferenceDiagram from '@/components/diagrams/LiquidityPreferenceDiagram';

const MoneyBanking = () => {
  return (
    <Layout showSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Chapter Header */}
        <div className="mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">A2 Level • Chapter 5</span>
          <h1 className="font-serif text-4xl md:text-5xl text-gradient mt-2 mb-4">
            Money and Banking
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the role of money, the banking system, and Keynes's liquidity preference theory of interest rate determination.
          </p>
        </div>

        {/* Functions of Money */}
        <ContentSection title="The Nature and Functions of Money">
          <NoteCard title="What is Money?" type="definition">
            <p>
              <strong>Money</strong> is anything that is generally accepted as a means of payment for 
              goods and services or for the settlement of debts. Money is not valued for itself but 
              for what it can purchase. Modern money includes currency (notes and coins) and bank 
              deposits that can be transferred by cheque or electronic means.
            </p>
          </NoteCard>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-cyan mb-2">1. Medium of Exchange</h4>
              <p className="text-sm text-muted-foreground">
                Money eliminates the need for a <strong>double coincidence of wants</strong> required 
                in barter. Instead of finding someone who has what you want and wants what you have, 
                you can simply use money.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-magenta mb-2">2. Unit of Account</h4>
              <p className="text-sm text-muted-foreground">
                Money provides a common measure in which prices and debts are expressed. This allows 
                meaningful comparisons and simplifies economic calculation.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-green mb-2">3. Store of Value</h4>
              <p className="text-sm text-muted-foreground">
                Money allows purchasing power to be transferred from the present to the future. 
                Unlike perishable goods, money retains value over time (though inflation erodes this).
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="font-semibold text-cambridge-orange mb-2">4. Standard of Deferred Payment</h4>
              <p className="text-sm text-muted-foreground">
                Money allows borrowing and lending by expressing future payments in terms of money. 
                This function enables credit and financial contracts.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Demand for Money */}
        <ContentSection title="The Demand for Money: Liquidity Preference">
          <NoteCard title="Keynes's Theory" type="theory">
            <p>
              Keynes developed the theory of <strong>liquidity preference</strong> to explain why 
              people hold money (which earns no interest) rather than interest-bearing assets like 
              bonds. He identified three motives for holding money:
            </p>
          </NoteCard>

          <div className="space-y-4 mt-6">
            <NoteCard title="1. Transactions Motive" type="application">
              <p>
                People need money to finance their day-to-day purchases. The amount held for 
                transactions purposes depends primarily on <strong>income</strong> – higher income 
                means more transactions and greater money demand. This demand is relatively 
                <strong> interest-inelastic</strong>.
              </p>
              <div className="mt-3 p-3 bg-muted/30 rounded-lg font-mono text-sm">
                L<sub>T</sub> = kY where k is a constant and Y is income
              </div>
            </NoteCard>

            <NoteCard title="2. Precautionary Motive" type="application">
              <p>
                People hold money as a buffer against unexpected expenses – medical emergencies, 
                car repairs, or sudden opportunities. Like transactions demand, this depends on 
                <strong> income</strong> and is relatively <strong>interest-inelastic</strong>.
              </p>
            </NoteCard>

            <NoteCard title="3. Speculative Motive" type="application">
              <p>
                People may hold money instead of bonds if they expect <strong>bond prices to fall</strong> 
                (and interest rates to rise). This motive creates an <strong>inverse relationship</strong> 
                between interest rates and money demand:
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <strong>High interest rates:</strong> People expect rates to fall (bond prices to rise), 
                  so they buy bonds and hold less money.
                </li>
                <li>
                  <strong>Low interest rates:</strong> People expect rates to rise (bond prices to fall), 
                  so they sell bonds and hold more money.
                </li>
              </ul>
            </NoteCard>
          </div>

          <NoteCard title="The Inverse Bond Price-Interest Rate Relationship" type="formula">
            <p className="mb-3">
              Bond prices and interest rates move in <strong>opposite directions</strong>. Consider a 
              perpetual bond paying $5 annually:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-2">Market Interest Rate</th>
                    <th className="text-right py-2">Bond Price = $5/r</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">5%</td>
                    <td className="text-right">$5/0.05 = <strong>$100</strong></td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-2">10%</td>
                    <td className="text-right">$5/0.10 = <strong>$50</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2">2.5%</td>
                    <td className="text-right">$5/0.025 = <strong>$200</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              When interest rates rise, existing bond prices fall to match the new higher market return.
            </p>
          </NoteCard>
        </ContentSection>

        {/* Liquidity Preference Diagram */}
        <ContentSection title="Interest Rate Determination">
          <LiquidityPreferenceDiagram />

          <NoteCard title="Money Supply and Equilibrium" type="theory">
            <p>
              The <strong>money supply (M<sup>s</sup>)</strong> is determined by the central bank and 
              is assumed to be fixed at any given time – hence it appears as a <strong>vertical line</strong>. 
              The equilibrium interest rate is where money demand equals money supply.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <strong>If r &gt; equilibrium:</strong> Money supply exceeds demand. People buy bonds 
                → bond prices rise → interest rates fall.
              </li>
              <li>
                <strong>If r &lt; equilibrium:</strong> Money demand exceeds supply. People sell bonds 
                → bond prices fall → interest rates rise.
              </li>
            </ul>
          </NoteCard>

          <AnalysisBlock title="Analysis: Effect of Money Supply Changes">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary mb-1">Increase in Money Supply (M<sup>s</sup> shifts right)</p>
                <p className="text-sm">
                  At the original interest rate, there is now excess money supply. People use this 
                  excess money to buy bonds, driving up bond prices and <strong>reducing interest rates</strong>. 
                  Lower rates stimulate investment and consumption, increasing AD.
                </p>
              </div>
              <div>
                <p className="font-medium text-secondary mb-1">Decrease in Money Supply (M<sup>s</sup> shifts left)</p>
                <p className="text-sm">
                  At the original interest rate, there is now excess money demand. People sell bonds 
                  to obtain money, driving down bond prices and <strong>raising interest rates</strong>. 
                  Higher rates discourage investment and consumption, reducing AD.
                </p>
              </div>
            </div>
          </AnalysisBlock>
        </ContentSection>

        {/* The Liquidity Trap */}
        <ContentSection title="The Liquidity Trap">
          <NoteCard title="When Monetary Policy Fails" type="theory">
            <p>
              At very low interest rates, the <strong>liquidity preference curve becomes horizontal</strong>. 
              This is the <strong>liquidity trap</strong> – a situation where monetary policy becomes ineffective.
            </p>
            <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <h5 className="font-semibold text-destructive mb-2">Why It Occurs:</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  When interest rates are extremely low, everyone expects them to <strong>rise</strong> 
                  (bond prices to fall).
                </li>
                <li>
                  No one wants to hold bonds because they expect capital losses.
                </li>
                <li>
                  Any additional money supply is simply <strong>hoarded as idle balances</strong>.
                </li>
                <li>
                  The interest rate cannot fall further, so monetary policy cannot stimulate AD.
                </li>
              </ul>
            </div>
          </NoteCard>

          <ExamTipBox title="Keynesian vs Monetarist View" variant="gold">
            <p>
              <strong>Keynesians</strong> believe the liquidity trap is a real possibility, especially 
              during deep recessions (e.g., Japan in the 1990s, post-2008 globally). This is why they 
              favor <strong>fiscal policy</strong> during such periods. <strong>Monetarists</strong> 
              argue the trap is unlikely and that monetary policy remains effective through other channels.
            </p>
          </ExamTipBox>
        </ContentSection>

        {/* Credit Creation */}
        <ContentSection title="The Banking System and Credit Creation">
          <NoteCard title="How Banks Create Money" type="theory">
            <p>
              Commercial banks <strong>create money</strong> through the process of credit creation. 
              When a bank receives a deposit, it keeps only a fraction as reserves and lends out the rest. 
              This loan becomes a deposit in another bank, which then lends most of it out, and so on.
            </p>
          </NoteCard>

          <NoteCard title="The Credit Multiplier" type="formula">
            <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
              <p className="text-2xl font-mono font-bold text-cambridge-cyan mb-2">
                Credit Multiplier = 1 / Reserve Ratio
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm"><strong>Example:</strong> If the reserve ratio is 10%:</p>
              <p className="font-mono text-sm mt-2">Credit Multiplier = 1 / 0.10 = 10</p>
              <p className="text-sm text-muted-foreground mt-2">
                An initial $100 deposit can support up to $1,000 of total deposits in the banking system.
              </p>
            </div>
          </NoteCard>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-serif font-semibold mb-3">Credit Creation Process:</h4>
            <ol className="space-y-2 text-sm">
              <li><strong>Round 1:</strong> Customer deposits $100. Bank keeps $10 (10%), lends $90.</li>
              <li><strong>Round 2:</strong> $90 deposited elsewhere. Bank keeps $9, lends $81.</li>
              <li><strong>Round 3:</strong> $81 deposited elsewhere. Bank keeps $8.10, lends $72.90.</li>
              <li><strong>...</strong> Process continues, each round smaller.</li>
              <li><strong>Total:</strong> ΔDeposits = $100 × (1 + 0.9 + 0.81 + ...) = $1,000</li>
            </ol>
          </div>
        </ContentSection>

        {/* Monetary Policy Transmission */}
        <ContentSection title="Monetary Policy Transmission Mechanism">
          <NoteCard title="How Interest Rates Affect AD" type="theory">
            <p>
              Changes in interest rates affect aggregate demand through multiple channels:
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-3 border border-muted rounded-lg">
                <h5 className="font-semibold text-primary">1. Investment Channel</h5>
                <p className="text-sm mt-1">
                  Lower rates reduce the cost of borrowing, making more investment projects profitable 
                  (MEC theory). Investment rises, boosting AD.
                </p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <h5 className="font-semibold text-primary">2. Consumption Channel</h5>
                <p className="text-sm mt-1">
                  Lower rates reduce mortgage payments and the return on savings, encouraging 
                  households to spend rather than save.
                </p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <h5 className="font-semibold text-primary">3. Asset Price Channel</h5>
                <p className="text-sm mt-1">
                  Lower rates increase house and stock prices, creating a positive wealth effect 
                  that boosts consumption.
                </p>
              </div>
              <div className="p-3 border border-muted rounded-lg">
                <h5 className="font-semibold text-primary">4. Exchange Rate Channel</h5>
                <p className="text-sm mt-1">
                  Lower rates reduce capital inflows, causing currency depreciation. This makes 
                  exports cheaper and imports dearer, improving (X-M).
                </p>
              </div>
            </div>
          </NoteCard>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-6">
            <h3 className="font-serif text-xl text-gradient mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Money serves as medium of exchange, unit of account, store of value, and standard of deferred payment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Keynes identified three motives for holding money: transactions, precautionary, and speculative.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                The speculative motive creates an inverse relationship between interest rates and money demand.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Bond prices and interest rates move in opposite directions.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                The liquidity trap occurs at very low interest rates when monetary policy becomes ineffective.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Banks create money through credit creation; Credit Multiplier = 1/Reserve Ratio.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default MoneyBanking;
