import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import LiquidityPreferenceDiagram from '@/components/diagrams/LiquidityPreferenceDiagram';
import LoanableFundsDiagram from '@/components/diagrams/LoanableFundsDiagram';
import MonetaryTransmissionDiagram from '@/components/diagrams/MonetaryTransmissionDiagram';
import CreditMultiplierDiagram from '@/components/diagrams/CreditMultiplierDiagram';
import QuantityTheoryDiagram from '@/components/diagrams/QuantityTheoryDiagram';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
        <div className="mb-6">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">A2 Level • Chapter 3</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gradient mt-1 mb-2">
            Money, Interest Rate Determination & Monetary Policy
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Understanding the role of money, credit creation, interest rate theories, and the transmission mechanism of monetary policy.
          </p>
        </div>

        {/* Topic Navigation */}
        <div className="glass-card p-3 mb-6 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
            <a href="#topic1" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 1</span>
              <p className="text-muted-foreground">Money & Credit Multiplier</p>
            </a>
            <a href="#topic2" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 2</span>
              <p className="text-muted-foreground">Liquidity Preference</p>
            </a>
            <a href="#topic3" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 3</span>
              <p className="text-muted-foreground">Loanable Fund Theory</p>
            </a>
            <a href="#topic4" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 4</span>
              <p className="text-muted-foreground">Quantity Theory</p>
            </a>
            <a href="#topic5" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 5</span>
              <p className="text-muted-foreground">Monetary Transmission</p>
            </a>
          </div>
        </div>

        {/* TOPIC 1: MONEY AND THE CREDIT MULTIPLIER */}
        <ContentSection title="Topic 1: Money and the Credit Multiplier" id="topic1">
          <h3 className="font-serif text-lg font-semibold mb-3">1. Money and the Modern Economy</h3>
          
          <div className="overflow-x-auto mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Term</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-sm">
                <TableRow>
                  <TableCell className="font-semibold text-primary">Money Supply</TableCell>
                  <TableCell>The total amount of money in an economy at a particular time.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-primary">Liquidity</TableCell>
                  <TableCell>The ease with which an asset can be converted into cash without incurring a cost.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-primary">Monetary Base</TableCell>
                  <TableCell>The total amount of currency in circulation plus commercial bank reserves held at the central bank.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-primary">Narrow Money</TableCell>
                  <TableCell>Money that can be used directly as a medium of exchange (notes, coins, sight deposits).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-primary">Broad Money</TableCell>
                  <TableCell>Includes narrow money plus deposits with monetary financial institutions.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-primary">Central Bank</TableCell>
                  <TableCell>A government institution that manages a country's monetary policy and issues currency.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="font-serif text-lg font-semibold mb-3">2. Credit Multiplier</h3>
          
          <NoteCard title="Definition: Credit Multiplier" type="definition">
            <p className="text-sm">
              An increase in the amount of money in the economy has a <strong>multiplied effect</strong> on the 
              amount of credit created by the banks. This is because commercial banks accept deposits from 
              customers and issue loans with that money. This is how banks make profit. The way in which they 
              undertake lending has an impact on the quantity of money. Commercial banks know that it is unlikely 
              that all their customers will want to withdraw their money simultaneously so they will lend some of 
              the additional deposits to borrowers who are likely to undertake expenditure on goods or services. 
              As their expenditures work their way back into the banking system, the commercial banks will find 
              that they can lend out even more and the process continues.
            </p>
          </NoteCard>

          <div className="text-center p-3 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 my-4">
            <p className="text-xl font-mono font-bold text-cambridge-cyan">
              Credit Multiplier = 1 / Cash Ratio
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Note:</strong> Cash Ratio is the amount of cash the bank holds in liquid form. The smaller the cash ratio the stronger the multiplier.
            </p>
          </div>

          <CreditMultiplierDiagram />

          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Example: 10% Cash Ratio</h4>
            <div className="overflow-x-auto">
              <Table>
                <TableBody className="text-xs">
                  <TableRow>
                    <TableCell className="font-medium">Banks receive an extra $100 in deposits</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cash + $10</TableCell>
                    <TableCell>New loans + $90</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Banks receive an extra $90 in deposits</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cash + $9</TableCell>
                    <TableCell>New loans + $81</TableCell>
                  </TableRow>
                  <TableRow className="font-bold bg-muted/50">
                    <TableCell>Total cash $100</TableCell>
                    <TableCell>Final position: Total loans $900, Total deposits $1,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              The bank has a cash ratio of 10%. If extra cash of $100 is deposited in the bank, 
              it will have $10 cash and $90 loans. The process continues until total deposits reach $1,000.
            </p>
          </div>
        </ContentSection>

        {/* TOPIC 2: LIQUIDITY PREFERENCE THEORY */}
        <ContentSection title="Topic 2: Liquidity Preference Theory" id="topic2">
          <NoteCard title="Keynes's Liquidity Preference" type="theory">
            <p className="text-sm">
              Individuals hold their financial wealth in two types of assets: <strong>bonds</strong> and <strong>cash</strong>.
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li><strong>Bonds:</strong> Not liquid and take time to be converted into cash but bondholders receive interest payments.</li>
              <li><strong>Cash:</strong> Cash doesn't guarantee interest payment but is liquid and allows flexibility in use as a medium of exchange.</li>
            </ul>
          </NoteCard>

          <NoteCard title="Bond Price-Interest Rate Relationship" type="formula">
            <p className="text-sm mb-2">
              <strong>Note:</strong> Market interest rates move <strong>inversely</strong> with the market value of a fixed interest rate bond. 
              Assuming a bond is issued and subscribed at an annual interest rate of 6% and an increase in the market interest rate to 7% 
              at a later date forces initial subscribers to get rid of these bonds, which now sell at a reduced price. On the other hand, 
              decreased market interest rates render older bonds with higher fixed interest rates more attractive hence increasing their market value.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm mt-3">
              <div className="p-2 bg-destructive/10 rounded text-center">
                <span className="font-semibold">Interest Rate ↑</span>
                <br />
                <span className="text-destructive">Price of Bonds ↓</span>
              </div>
              <div className="p-2 bg-cambridge-green/10 rounded text-center">
                <span className="font-semibold">Interest Rate ↓</span>
                <br />
                <span className="text-cambridge-green">Price of Bonds ↑</span>
              </div>
            </div>
          </NoteCard>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">1. Demand for Money</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Individuals demand money for <strong>THREE</strong> reasons:
          </p>

          <div className="space-y-3">
            <NoteCard title="1. Transaction Motive" type="application">
              <p className="text-sm">
                Individuals hold money to meet day-to-day transactional needs like buying groceries, paying utilities, etc. 
                The demand for money under this motive is <strong>directly related to income</strong> – as income rises, 
                the quantity of money demanded for transactions increases.
              </p>
            </NoteCard>

            <NoteCard title="2. Precautionary Motive" type="application">
              <p className="text-sm">
                Individuals hold money for <strong>unexpected contingencies</strong> or emergencies. This motive is also 
                <strong> directly related to income</strong> – higher income means people can afford to hold more money 
                as a precaution against unforeseen events.
              </p>
            </NoteCard>

            <NoteCard title="3. Speculative Motive" type="application">
              <p className="text-sm">
                When interest rates are <strong>high</strong>, people expect them to fall → They expect bond prices to 
                <strong> rise</strong> → People keep bonds instead of cash → Quantity demanded for money <strong>falls</strong>.
              </p>
              <p className="text-sm mt-2">
                When interest rates are <strong>low</strong>, people expect them to rise → They expect bond prices to 
                <strong> fall</strong> → People keep cash instead of bonds → Quantity demanded for money <strong>rises</strong>.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                <strong>Note:</strong> When we add all three curves (transaction, precautionary and speculative) we get 
                the combined demand curve for money. The shape of the added curve would be the same as the speculative 
                demand for money curve.
              </p>
            </NoteCard>
          </div>

          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Factors Affecting Demand for Money</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Factor</TableHead>
                  <TableHead className="text-xs">Effect on Quantity Demanded for Money</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell>1. Income Level</TableCell>
                  <TableCell>Income ↑ → Qd for Money ↑ | Income ↓ → Qd for Money ↓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2. Price Level</TableCell>
                  <TableCell>Price Level ↑ → Qd for Money ↑ | Price Level ↓ → Qd for Money ↓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3. Credit Cards</TableCell>
                  <TableCell>Credit cards are money substitutes. More credit cards → Qd for Money ↓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4. Frequency of Payments</TableCell>
                  <TableCell>Frequency ↑ → Qd for Money ↑ | Frequency ↓ → Qd for Money ↓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">2. Supply of Money</h3>
          <NoteCard title="Money Supply" type="theory">
            <p className="text-sm">
              The money supply is determined by the central bank and is assumed to be <strong>indifferent to the interest rate</strong>. 
              Therefore, the money supply curve is drawn as a <strong>vertical line</strong> (perfectly inelastic with respect to interest rates).
            </p>
          </NoteCard>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">3. Equilibrium Interest Rate</h3>
          <LiquidityPreferenceDiagram />

          <div className="mt-4 space-y-3">
            <NoteCard title="Equilibrium Determination" type="theory">
              <p className="text-sm">
                The equilibrium interest rate is determined where <strong>Md = Ms</strong> (Money demand equals Money supply). 
                This is the point of intersection between the LP curve and the vertical money supply curve.
              </p>
            </NoteCard>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 border border-destructive/30 rounded-lg bg-destructive/5">
                <h5 className="font-semibold text-destructive text-sm mb-1">Interest Rate &lt; Equilibrium</h5>
                <p className="text-xs text-muted-foreground">
                  At the interest rate below R, demand for money exceeds supply. Hence people tend to 
                  <strong> sell bonds</strong> to overcome the shortage of cash. Increased supply of bonds lowers 
                  the market value of bonds and <strong>increases</strong> the market interest rates to the equilibrium point.
                </p>
              </div>
              <div className="p-3 border border-cambridge-green/30 rounded-lg bg-cambridge-green/5">
                <h5 className="font-semibold text-cambridge-green text-sm mb-1">Interest Rate &gt; Equilibrium</h5>
                <p className="text-xs text-muted-foreground">
                  At the interest rate above R, demand for money is less than supply. People <strong>buy bonds</strong> to 
                  utilize the excess cash they have. Increased demand for bonds raises their market value and 
                  <strong> lowers</strong> the market interest rates to the equilibrium point.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">4. Impact of Changes in Money Supply on Interest Rates</h3>
          <AnalysisBlock title="Money Supply Shifts">
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-cambridge-green mb-1">Increase in Money Supply (Ms → Ms₁)</p>
                <p className="text-xs text-muted-foreground">
                  Government's decision to raise money supply or credit creation by commercial banks shifts the supply 
                  curve for money from MS to MS₁. Demand for money falls short of money supply at R and extra liquidity 
                  encourages households to <strong>buy bonds</strong>, raising their prices. This results in the interest rate 
                  to <strong>fall to R₁</strong>.
                </p>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">Decrease in Money Supply</p>
                <p className="text-xs text-muted-foreground">
                  A decrease in money supply creates a shortage of liquidity. Households <strong>sell bonds</strong> to 
                  obtain cash, lowering bond prices and <strong>raising</strong> interest rates to the new equilibrium.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">5. Impact of Changes in Money Demand on Interest Rates</h3>
          <AnalysisBlock title="Money Demand Shifts">
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-cambridge-orange mb-1">Increase in Money Demand (L → L₁)</p>
                <p className="text-xs text-muted-foreground">
                  Initially the equilibrium is at R. The demand for money shifts to L₁. Here the demand for money is 
                  more than the supply. Hence consumers would start to <strong>sell bonds</strong>. When supply of bonds 
                  increases the price of bonds drops. This <strong>increases</strong> the interest rate to R₁.
                </p>
              </div>
              <div>
                <p className="font-medium text-cambridge-cyan mb-1">Decrease in Money Demand (L → L₂)</p>
                <p className="text-xs text-muted-foreground">
                  Initially the equilibrium is at R. The demand for money shifts to L₂. Here the demand for money is 
                  less than the supply. Hence consumers would start to <strong>buy bonds</strong>. When demand for bonds 
                  increases the price of bonds increases. This <strong>decreases</strong> the interest rate to R₂.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          <ExamTipBox title="Limitations of Liquidity Preference Theory" variant="silver">
            <ul className="text-xs space-y-1">
              <li>• The LP-Theory assumes money supply is constant, but in the long-run money supply does change.</li>
              <li>• It focuses only on short-term interest rates and ignores long-term rates.</li>
              <li>• The theory may not hold in a liquidity trap when interest rates are extremely low.</li>
              <li>• It ignores the role of commercial bank lending in determining interest rates.</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* TOPIC 3: LOANABLE FUND THEORY */}
        <ContentSection title="Topic 3: Loanable Fund Theory" id="topic3">
          <h3 className="font-serif text-lg font-semibold mb-3">1. Demand for Loanable Funds (Investment)</h3>
          <p className="text-sm text-muted-foreground mb-3">
            The demand for loanable funds comes from firms and households who wish to borrow for investment purposes. 
            The demand curve is <strong>downward sloping</strong> because lower interest rates make borrowing cheaper, 
            encouraging more investment.
          </p>

          <div className="p-3 bg-muted/30 rounded-lg mb-4">
            <h4 className="font-semibold text-sm mb-2">Factors Causing a Shift in Demand for Loanable Funds</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Factor</TableHead>
                  <TableHead className="text-xs">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-medium">1. Consumer and Business Confidence</TableCell>
                  <TableCell>Confidence ↑ → Demand for Loans ↑</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2. Technology and Infrastructure</TableCell>
                  <TableCell>
                    Wherever technology in the economy increases, people and firms prefer to acquire more of it. 
                    This encourages the demand for loans to instantly acquire that technology. Technology ↑ → Demand for Loans ↑
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3. Availability of Quality Raw Materials</TableCell>
                  <TableCell>Quality Raw Materials ↓ → Demand for Loans ↓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="font-serif text-lg font-semibold mb-3">2. Supply of Loanable Funds (Savings)</h3>
          <p className="text-sm text-muted-foreground mb-3">
            The supply of loanable funds comes from savers who deposit money in banks. The supply curve is 
            <strong> upward sloping</strong> because higher interest rates encourage more saving.
          </p>

          <div className="p-3 bg-muted/30 rounded-lg mb-4">
            <h4 className="font-semibold text-sm mb-2">Factors Causing a Shift in Supply of Loanable Funds</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Factor</TableHead>
                  <TableHead className="text-xs">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-medium">1. Savings Culture</TableCell>
                  <TableCell>Savings Culture ↑ → Supply of Loans ↑</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2. Bank Policies</TableCell>
                  <TableCell>Banks Stricter → Supply of Loans ↓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="font-serif text-lg font-semibold mb-3">3. Equilibrium in the Loanable Funds Market</h3>
          <LoanableFundsDiagram />

          <NoteCard title="Equilibrium Determination" type="theory">
            <p className="text-sm">
              The equilibrium real interest rate is determined where the <strong>supply of loanable funds</strong> 
              (savings) equals the <strong>demand for loanable funds</strong> (investment). Changes in either 
              curve will shift the equilibrium, affecting both the interest rate and the quantity of loans.
            </p>
          </NoteCard>
        </ContentSection>

        {/* TOPIC 4: QUANTITY THEORY OF MONEY */}
        <ContentSection title="Topic 4: Quantity Theory of Money (QTM)" id="topic4">
          <NoteCard title="Definition: Quantity Theory of Money" type="definition">
            <p className="text-sm">
              QTM presents one of the most important theories of <strong>inflation</strong> according to which 
              the following equation holds:
            </p>
          </NoteCard>

          <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 my-4">
            <p className="text-2xl font-mono font-bold text-cambridge-cyan">MV = PT</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="p-2 bg-muted/30 rounded-lg">
              <span className="font-bold text-cambridge-cyan">M</span>
              <span className="text-sm text-muted-foreground"> = Stock of Money</span>
            </div>
            <div className="p-2 bg-muted/30 rounded-lg">
              <span className="font-bold text-cambridge-magenta">V</span>
              <span className="text-sm text-muted-foreground"> = Velocity of Circulation (How many times money changes hands)</span>
            </div>
            <div className="p-2 bg-muted/30 rounded-lg">
              <span className="font-bold text-cambridge-orange">P</span>
              <span className="text-sm text-muted-foreground"> = Price Level</span>
            </div>
            <div className="p-2 bg-muted/30 rounded-lg">
              <span className="font-bold text-cambridge-green">T</span>
              <span className="text-sm text-muted-foreground"> = Volume of goods and services (National Real Income)</span>
            </div>
          </div>

          <QuantityTheoryDiagram />

          <NoteCard title="Monetarist Assumption" type="theory">
            <p className="text-sm">
              The Quantity Theory assumes that <strong>V (velocity)</strong> and <strong>T (transactions/output)</strong> 
              are constant in the short run. Therefore:
            </p>
            <div className="text-center p-2 bg-muted/30 rounded mt-2 font-mono text-sm">
              If V and T are constant: M↑ → P↑ (proportionally)
            </div>
          </NoteCard>

          <ExamTipBox title="Keynesian Criticism on the QTM" variant="gold">
            <ul className="text-xs space-y-2">
              <li>
                <strong>Velocity is not constant:</strong> The assumption of velocity of circulation remaining unchanged 
                with changes in Ms is unrealistic. Increased Ms decreases interest rates and the opportunity cost of 
                holding cash. As a result, people use their cash slowly thus <strong>decreasing velocity of circulation</strong>. 
                Money supply is inversely proportional to the velocity of circulation.
              </li>
              <li>
                <strong>Unemployed resources:</strong> Demand-side economists believe that unemployed resources and 
                excess capacity always have little or no impact on the price level. With spare capacity, increased 
                money supply leads to higher output, not just higher prices. (Refer to the Keynesian LRAS diagram)
              </li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* TOPIC 5: MONETARY TRANSMISSION MECHANISM */}
        <ContentSection title="Topic 5: Monetary Transmission Mechanism" id="topic5">
          <h3 className="font-serif text-lg font-semibold mb-3">1. Money Supply Changes</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Policies that the government/central bank can use:
          </p>
          <div className="grid md:grid-cols-2 gap-2 mb-4">
            <div className="p-2 bg-cambridge-green/10 rounded-lg text-center">
              <span className="font-semibold text-cambridge-green text-sm">1. Expansionary Monetary Policy</span>
              <p className="text-xs text-muted-foreground">↑ Money Supply</p>
            </div>
            <div className="p-2 bg-destructive/10 rounded-lg text-center">
              <span className="font-semibold text-destructive text-sm">2. Contractionary Monetary Policy</span>
              <p className="text-xs text-muted-foreground">↓ Money Supply</p>
            </div>
          </div>

          <h3 className="font-serif text-lg font-semibold mb-3">2. Expansionary Monetary Policy</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Increase in Ms can be understood in <strong>THREE</strong> ways:
          </p>

          <MonetaryTransmissionDiagram />

          <div className="space-y-3 mt-4">
            <NoteCard title="1. Direct Monetary Transmission Mechanism" type="theory">
              <div className="font-mono text-sm text-center p-2 bg-muted/30 rounded mb-2">
                Ms↑ → More money to Spend → C↑, I↑ → AE/AD↑ → [P↑, Y↑, Employment↑]
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Monetarists believe:</strong> The link between money supply and AD is not only indirect but 
                also <strong>direct</strong> – with excess liquidity, households and firms spend more on goods and services.
              </p>
            </NoteCard>

            <NoteCard title="2. Quantity Theory of Money" type="theory">
              <p className="text-sm">
                According to the QTM: <strong>MV = PT</strong>, where 'V' & 'T' are constant, 
                hence <strong>M↑ → P↑</strong> (proportionally).
              </p>
            </NoteCard>

            <NoteCard title="3. Indirect Monetary Transmission Mechanism" type="theory">
              <div className="space-y-2">
                <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                  <h5 className="font-semibold text-cambridge-cyan text-sm">Step 1: Money Market</h5>
                  <p className="text-xs text-muted-foreground">
                    An increase in money supply creates excess liquidity. At the old interest rate, there is now 
                    more money than people want to hold. Households buy bonds, raising bond prices and 
                    <strong> lowering interest rates</strong>.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-magenta/10 rounded-lg">
                  <h5 className="font-semibold text-cambridge-magenta text-sm">Step 2: Capital Goods Market</h5>
                  <p className="text-xs text-muted-foreground">
                    The low interest rate will <strong>increase</strong> the amount of investment because the cost 
                    of borrowing has decreased. More investment projects are now profitable (MEC &gt; r). The extent 
                    of increase in investment depends on the <strong>interest rate elasticity of investment</strong>.
                  </p>
                </div>
                <div className="p-2 bg-cambridge-green/10 rounded-lg">
                  <h5 className="font-semibold text-cambridge-green text-sm">Step 3: Goods Market</h5>
                  <p className="text-xs text-muted-foreground">
                    With increased investment, there is an increase in AD. This leads to higher output, 
                    employment, and possibly higher prices (depending on spare capacity/full employment).
                  </p>
                </div>
              </div>
            </NoteCard>
          </div>

          <AnalysisBlock title="Monetarist vs Keynesian View on Transmission">
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div className="p-2 bg-cambridge-cyan/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-cyan mb-1">Monetarist View</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Demand for money is <strong>interest inelastic</strong> → any increase in Ms leads to a large fall in r</li>
                  <li>• Strong link between Ms and AD (both direct and indirect)</li>
                  <li>• Investment is not vulnerable to expectation changes</li>
                  <li>• Economy is at/near full employment → ↑AD leads to inflation</li>
                </ul>
              </div>
              <div className="p-2 bg-cambridge-magenta/10 rounded-lg">
                <h5 className="font-semibold text-cambridge-magenta mb-1">Keynesian View</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Demand for money can be <strong>interest elastic</strong> (liquidity trap)</li>
                  <li>• Weak link between Ms and AD in a recession</li>
                  <li>• Investment depends heavily on business confidence</li>
                  <li>• Spare capacity means ↑AD leads to ↑Y, not just ↑P</li>
                </ul>
              </div>
            </div>
          </AnalysisBlock>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">3. Quantitative Easing (QE)</h3>
          <NoteCard title="Definition: Quantitative Easing" type="definition">
            <p className="text-sm">
              When the rate of interest is very low, a central bank may decide to try to increase aggregate demand 
              by engaging in <strong>quantitative easing</strong>. This involves a central bank <strong>buying 
              government bonds</strong> from financial institutions, including commercial banks, in order to 
              increase investment and consumer expenditure and so aggregate demand and thereby economic activity.
            </p>
          </NoteCard>

          <h3 className="font-serif text-lg font-semibold mt-4 mb-3">4. Limitations of Monetary Policy</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Limitation</TableHead>
                  <TableHead className="text-xs">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">1. Liquidity Trap</TableCell>
                  <TableCell>
                    At very low interest rates, people hoard money instead of spending. Further increases in 
                    money supply have no effect on interest rates or AD.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">2. Time Lags</TableCell>
                  <TableCell>
                    There are delays between implementing monetary policy and its effect on the price level 
                    (recognition lag, implementation lag, response lag).
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">3. Uncertainty</TableCell>
                  <TableCell>
                    Political instability, business confidence, and external shocks can reduce policy effectiveness.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">4. Reliability of Data</TableCell>
                  <TableCell>
                    Economic forecasting relies on data that may be inaccurate or outdated.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">5. Interest Elasticity of Investment</TableCell>
                  <TableCell>
                    If investment is interest inelastic, changes in interest rates will have little effect on 
                    employment and prices.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ContentSection>

        {/* Chapter Summary */}
        <ContentSection title="Chapter Summary">
          <div className="glass-card p-4">
            <h3 className="font-serif text-lg text-gradient mb-3">Key Takeaways</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Credit Multiplier = 1 / Cash Ratio</strong> – Banks create money through lending.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Liquidity Preference Theory:</strong> Three motives for holding money – transactions, precautionary, speculative.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Bond prices and interest rates move inversely.</strong> Higher r → Lower bond prices.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Loanable Funds Theory:</strong> Interest rate determined by supply (savings) and demand (investment) for loans.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Quantity Theory (MV = PT):</strong> With V and T constant, changes in M cause proportional changes in P.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Monetary Transmission:</strong> ↑Ms → ↓r → ↑I → ↑AD → ↑Y, ↑P, ↑Employment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <strong>Limitations:</strong> Liquidity trap, time lags, uncertainty, and interest elasticity of investment.
              </li>
            </ul>
          </div>
        </ContentSection>
      </motion.div>
    </Layout>
  );
};

export default MoneyBanking;
