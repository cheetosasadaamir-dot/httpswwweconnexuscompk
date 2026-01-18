import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContentSection from '@/components/ContentSection';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';
import ExamTipBox from '@/components/ExamTipBox';
import LiquidityPreferenceDiagram from '@/components/diagrams/LiquidityPreferenceDiagram';
import LiquidityTrapDiagram from '@/components/diagrams/LiquidityTrapDiagram';
import LoanableFundsDiagram from '@/components/diagrams/LoanableFundsDiagram';
import MonetaryTransmissionDiagram from '@/components/diagrams/MonetaryTransmissionDiagram';
import CreditMultiplierDiagram from '@/components/diagrams/CreditMultiplierDiagram';
import QuantityTheoryDiagram from '@/components/diagrams/QuantityTheoryDiagram';
import MECCurveDiagram from '@/components/diagrams/MECCurveDiagram';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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
            A rigorous analysis of Keynesian Liquidity Preference, the Monetary Transmission Mechanism, 
            and the limits of monetary policy in achieving macroeconomic stability.
          </p>
        </div>

        {/* Topic Navigation */}
        <div className="glass-card p-3 mb-6 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
            <a href="#topic1" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 1</span>
              <p className="text-muted-foreground">Liquidity Preference</p>
            </a>
            <a href="#topic2" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 2</span>
              <p className="text-muted-foreground">Money Supply & Interest</p>
            </a>
            <a href="#topic3" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 3</span>
              <p className="text-muted-foreground">Transmission Mechanism</p>
            </a>
            <a href="#topic4" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 4</span>
              <p className="text-muted-foreground">Credit Multiplier</p>
            </a>
            <a href="#topic5" className="p-2 bg-muted/50 rounded hover:bg-muted transition-colors text-center">
              <span className="text-primary font-semibold">Topic 5</span>
              <p className="text-muted-foreground">Policy Evaluation</p>
            </a>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        {/* TOPIC 1: LIQUIDITY PREFERENCE THEORY */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Topic 1: Keynesian Liquidity Preference Theory" id="topic1">
          
          {/* Dense Academic Introduction */}
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              <strong className="text-cambridge-cyan">Keynes's Theory of Liquidity Preference</strong> represents a fundamental departure from the Classical 
              view of interest rate determination. Whereas the Classical Loanable Funds Theory treats the interest rate as the equilibrating 
              price between saving (the supply of loanable funds) and investment (the demand for loanable funds), Keynes argued that the 
              interest rate is fundamentally the <strong className="text-cambridge-orange">"price" for parting with liquidity</strong>—the reward 
              that must be offered to persuade wealth-holders to transfer their assets from money (a perfectly liquid but non-interest-bearing 
              asset) to bonds (interest-bearing but illiquid assets subject to capital risk). This reconceptualization shifts the analytical 
              focus from the real market for loanable funds to the <em>money market</em>, where the equilibrium interest rate is determined 
              by the intersection of the money demand curve (Liquidity Preference, denoted <InlineMath math="L" /> or <InlineMath math="M^d" />) 
              and the exogenously controlled money supply (<InlineMath math="M^s" />).
            </p>
          </div>

          {/* The Three Motives for Holding Money */}
          <h3 className="font-serif text-lg font-semibold mb-3">1. The Three Motives for Holding Money (Demand for Money)</h3>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              Keynes identified three distinct motives that determine the aggregate demand for money in an economy. The first two 
              motives—<strong className="text-cambridge-cyan">Transactions</strong> and <strong className="text-cambridge-magenta">Precautionary</strong>—are 
              primarily functions of the level of national income (<InlineMath math="Y" />), while the third—the 
              <strong className="text-cambridge-orange"> Speculative motive</strong>—is critically dependent upon the prevailing rate of interest 
              (<InlineMath math="r" />) and agents' expectations about future interest rate movements. The total demand for money can 
              therefore be expressed as <InlineMath math="L = L_1(Y) + L_2(r)" />, where <InlineMath math="L_1" /> represents the 
              income-related component and <InlineMath math="L_2" /> represents the interest-sensitive speculative component.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-6">
            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-cyan">
              <h4 className="font-serif font-semibold text-cambridge-cyan mb-2">Transactions Motive</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Households and firms hold money as a <strong>medium of exchange</strong> to bridge the gap between income receipts 
                and expenditure payments. Since wages and salaries are received periodically (weekly, monthly), agents must maintain 
                cash balances to finance day-to-day transactions. This demand is <strong>directly proportional to national income</strong>: 
                as <InlineMath math="Y \uparrow" />, the volume and value of transactions rise, necessitating larger money holdings.
              </p>
            </div>
            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-magenta">
              <h4 className="font-serif font-semibold text-cambridge-magenta mb-2">Precautionary Motive</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Beyond planned expenditures, rational agents maintain <strong>contingency reserves</strong> against unforeseen 
                emergencies—medical expenses, unemployment, or unexpected opportunities. This "rainy day fund" is also 
                <strong> positively related to income</strong>: wealthier individuals can afford to hold larger precautionary 
                balances, while businesses maintain liquidity buffers against supply chain disruptions or payment delays.
              </p>
            </div>
            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-orange">
              <h4 className="font-serif font-semibold text-cambridge-orange mb-2">Speculative Motive</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The <em>speculative demand for money</em> arises from the desire to hold wealth in liquid form to exploit 
                anticipated changes in bond prices. Since bond prices are <strong>inversely related to interest rates</strong>, 
                when rates are <strong>high</strong>, agents expect them to fall → bond prices will rise → agents buy bonds now 
                (low money demand). When rates are <strong>low</strong>, agents expect them to rise → bond prices will fall → 
                agents hold cash to avoid capital losses (high money demand).
              </p>
            </div>
          </div>

          {/* Critical Analysis: Bond Price-Interest Rate Inverse Relationship */}
          <AnalysisBlock title="Chain of Analysis: The Bond Price-Interest Rate Inverse Relationship">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm leading-relaxed text-justify text-muted-foreground">
                The inverse relationship between bond prices and interest rates is foundational to understanding speculative demand. 
                Consider a perpetual bond (consol) that pays a fixed annual coupon of £100. If the market interest rate is 5%, 
                the present value of this bond is <InlineMath math="P_B = \frac{100}{0.05} = £2000" />. However, if the market 
                interest rate rises to 10%, the bond's value falls to <InlineMath math="P_B = \frac{100}{0.10} = £1000" />. 
                Consequently, when interest rates are currently high, bond prices are low—making bonds attractive purchases 
                since agents anticipate capital gains when rates eventually normalize. This drives the <strong>inverse relationship</strong> 
                between the interest rate and the quantity of speculative money demanded: <InlineMath math="r \uparrow \Rightarrow P_B \downarrow \Rightarrow" /> 
                bonds attractive <InlineMath math="\Rightarrow L_2 \downarrow" />.
              </p>
            </div>
          </AnalysisBlock>

          <LiquidityPreferenceDiagram />

          {/* Zero-Gap Chain of Analysis: Liquidity Preference */}
          <div className="mt-0 p-4 bg-muted/20 border-l-2 border-cambridge-cyan rounded-r-lg">
            <h4 className="font-serif font-semibold text-cambridge-cyan text-sm mb-2">Zero-Gap Logic Chain: Money Market Equilibrium (A2 Standard)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed text-justify">
              <strong className="text-foreground">Variable Change:</strong> Central bank increases money supply via Open Market Operations → 
              <strong className="text-foreground"> Direct Market Impact:</strong> At prevailing interest rate, excess supply of money emerges (<InlineMath math="M^s > M^d" />) → 
              <strong className="text-foreground"> Secondary Transmission:</strong> Agents attempt to eliminate excess money balances by purchasing bonds → Bond demand rises → Bond prices rise (<InlineMath math="\uparrow P_B" />) → Since <InlineMath math="r = \frac{Coupon}{P_B}" />, yields fall → 
              <strong className="text-foreground"> Final Macro Equilibrium:</strong> Interest rate falls until <InlineMath math="M^s = M^d" /> at new lower equilibrium rate <InlineMath math="r_1 < r_0" />.
            </p>
          </div>

          {/* The Liquidity Trap */}
          <h3 className="font-serif text-lg font-semibold mt-6 mb-3">2. The Liquidity Trap: The Limit of Monetary Policy</h3>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The <strong className="text-cambridge-orange">Liquidity Trap</strong> represents a critical boundary condition in Keynesian 
              monetary theory, arising when the interest rate approaches its lower bound (historically considered to be approximately zero, 
              though recent experience has demonstrated the possibility of slightly negative nominal rates). At this threshold, the 
              speculative demand for money becomes <strong>perfectly elastic</strong>—the <InlineMath math="M^d" /> curve becomes 
              horizontal. The economic logic is as follows: when interest rates are extraordinarily low, <em>everyone unanimously expects 
              rates to rise</em> in the future. Rising interest rates imply falling bond prices, meaning that purchasing bonds at 
              current low yields exposes wealth-holders to near-certain <strong>capital losses</strong>. Consequently, no matter how 
              much additional money the central bank injects into the economy, agents will simply <strong>hoard the excess liquidity 
              as idle balances</strong> rather than purchasing bonds. The transmission mechanism from money supply to lower interest 
              rates is thereby severed, rendering monetary policy completely inert.
            </p>
          </div>

          <LiquidityTrapDiagram />

          {/* Zero-Gap Chain of Analysis: Liquidity Trap */}
          <div className="mt-0 p-4 bg-muted/20 border-l-2 border-cambridge-orange rounded-r-lg">
            <h4 className="font-serif font-semibold text-cambridge-orange text-sm mb-2">Zero-Gap Logic Chain: The Liquidity Trap (A2 Standard)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed text-justify">
              <strong className="text-foreground">Variable Change:</strong> Interest rates reach "floor" level (near zero lower bound) → 
              <strong className="text-foreground"> Direct Market Impact:</strong> All agents unanimously expect interest rates to rise in future → Expected bond price fall (<InlineMath math="P_B^{expected} \downarrow" />) → 
              <strong className="text-foreground"> Secondary Transmission:</strong> No agent willing to hold bonds (capital loss risk); perfectly elastic demand for money as agents hold infinite cash → Money demand curve becomes horizontal → 
              <strong className="text-foreground"> Final Macro Equilibrium:</strong> Any increase in <InlineMath math="M^s" /> is absorbed as idle balances → <InlineMath math="\Delta r = 0" /> → Investment remains stagnant (<InlineMath math="I" /> unchanged) → <strong>Monetary policy becomes completely ineffective</strong>.
            </p>
          </div>

          {/* Senior Examiner's Conclusion */}
          <div className="mt-6 p-4 bg-gradient-to-r from-cambridge-orange/10 to-transparent border-l-4 border-cambridge-orange rounded-lg">
            <h4 className="font-serif font-semibold text-cambridge-orange mb-2">Senior Examiner's Conclusion (AO4)</h4>
            <p className="text-sm text-foreground/90 leading-relaxed text-justify">
              <strong>Ultimately, the efficacy of monetary policy is severely compromised during a Liquidity Trap.</strong> When the 
              demand for money is perfectly elastic, any increase in the money supply is simply hoarded by the public, failing to 
              lower interest rates further and rendering the transmission mechanism inert. This theoretical insight gained profound 
              empirical relevance following the 2008 Global Financial Crisis and the COVID-19 pandemic, when central banks in Japan, 
              the Eurozone, and the United Kingdom found conventional interest rate reductions exhausted and resorted to 
              <em> Quantitative Easing (QE)</em>—direct asset purchases—as an alternative channel. The existence of the Liquidity 
              Trap provides the intellectual foundation for <strong>Discretionary Fiscal Policy</strong> as the necessary tool for 
              stimulating aggregate demand when monetary transmission fails.
            </p>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        {/* TOPIC 2: MONEY SUPPLY AND INTEREST RATE DETERMINATION */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Topic 2: Money Supply & Interest Rate Determination" id="topic2">
          
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The <strong className="text-cambridge-magenta">Money Supply</strong> (<InlineMath math="M^s" />) represents the total 
              stock of monetary assets circulating in an economy at a given point in time. In the Keynesian framework, the money 
              supply is typically treated as <strong>exogenous</strong>—determined independently of the interest rate by central bank 
              policy decisions. This assumption is represented graphically by a <strong>vertical money supply curve</strong>, 
              indicating that the quantity of money is fixed at whatever level the monetary authority chooses, regardless of the 
              prevailing interest rate. This stands in contrast to the <em>endogenous money</em> view of Post-Keynesian economists, 
              who argue that commercial bank credit creation responds elastically to loan demand, making the money supply at least 
              partially determined by economic activity itself.
            </p>
          </div>

          {/* Money Supply Formula */}
          <div className="glass-card p-4 rounded-lg mb-6">
            <h4 className="font-serif font-semibold mb-3 text-center">Narrow Money vs Broad Money</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20">
                <p className="font-semibold text-cambridge-cyan mb-1">Narrow Money (M0/M1)</p>
                <p className="text-xs text-muted-foreground">
                  Notes and coins in circulation + bank reserves at the central bank + sight deposits (current accounts). 
                  Represents the most <strong>liquid</strong> form of money, immediately usable as a medium of exchange.
                </p>
              </div>
              <div className="p-3 bg-cambridge-magenta/10 rounded-lg border border-cambridge-magenta/20">
                <p className="font-semibold text-cambridge-magenta mb-1">Broad Money (M2/M4)</p>
                <p className="text-xs text-muted-foreground">
                  Narrow money + time deposits + savings accounts + money market funds. Includes "near money" that can be 
                  quickly converted to cash but is <strong>less liquid</strong> than narrow money.
                </p>
              </div>
            </div>
          </div>

          {/* Equilibrium Interest Rate Determination */}
          <h3 className="font-serif text-lg font-semibold mb-3">Equilibrium Interest Rate Determination</h3>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The <strong>equilibrium interest rate</strong> is determined at the intersection of the Liquidity Preference curve 
              (<InlineMath math="M^d" />) and the vertical Money Supply curve (<InlineMath math="M^s" />). At this point, the 
              quantity of money demanded by households and firms exactly equals the quantity supplied by the central bank. 
              Any deviation from equilibrium triggers automatic adjustment through the <strong>bond market mechanism</strong>.
            </p>
          </div>

          <AnalysisBlock title="Chain of Analysis: The Adjustment Mechanism">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="font-semibold text-destructive mb-2">Case 1: Excess Money Supply</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If <InlineMath math="M^s > M^d" /> at the prevailing interest rate, agents find themselves with more cash than 
                  they wish to hold. They use this excess liquidity to <strong>purchase bonds</strong>, driving up bond prices. 
                  As bond prices rise, yields (interest rates) <strong>fall</strong> until <InlineMath math="M^s = M^d" /> at the 
                  new, lower equilibrium rate.
                </p>
              </div>
              <div className="p-3 bg-cambridge-green/10 rounded-lg border border-cambridge-green/20">
                <p className="font-semibold text-cambridge-green mb-2">Case 2: Excess Money Demand</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If <InlineMath math="M^d > M^s" /> at the prevailing interest rate, agents experience a liquidity shortage. 
                  To obtain cash, they <strong>sell bonds</strong>, driving down bond prices. As bond prices fall, yields 
                  (interest rates) <strong>rise</strong> until equilibrium is restored where <InlineMath math="M^s = M^d" />.
                </p>
              </div>
            </div>
          </AnalysisBlock>

          {/* Impact of Central Bank Policy */}
          <h3 className="font-serif text-lg font-semibold mt-6 mb-3">Impact of Central Bank Monetary Policy</h3>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              When the central bank implements <strong className="text-cambridge-green">Expansionary Monetary Policy</strong> by 
              increasing the money supply (through Open Market Operations—purchasing government bonds from commercial banks, or 
              by lowering the reserve requirement ratio), the money supply curve shifts rightward from <InlineMath math="M^s_0" /> 
              to <InlineMath math="M^s_1" />. At the original equilibrium interest rate <InlineMath math="r_0" />, there is now an 
              <strong> excess supply of money</strong>. The adjustment mechanism operates as follows: agents use surplus cash to 
              buy bonds → bond prices rise → interest rates fall → equilibrium is restored at a lower rate <InlineMath math="r_1" /> 
              where <InlineMath math="M^s_1 = M^d" />.
            </p>
          </div>

          <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-6">
            <p className="text-xs text-muted-foreground mb-2">Expansionary Monetary Policy Chain</p>
            <BlockMath math="\uparrow M^s \rightarrow \text{Excess Liquidity} \rightarrow \text{Buy Bonds} \rightarrow \uparrow P_B \rightarrow \downarrow r" />
          </div>

          <NoteCard title="Key Insight: The Sensitivity of Interest Rates" type="theory">
            <p className="text-sm leading-relaxed">
              The magnitude of the interest rate change resulting from a given change in money supply depends critically on the 
              <strong> interest elasticity of money demand</strong> (the slope of the <InlineMath math="M^d" /> curve). If money 
              demand is highly interest-elastic (flat curve), a large increase in <InlineMath math="M^s" /> produces only a 
              small decline in <InlineMath math="r" />. Conversely, if money demand is interest-inelastic (steep curve), the same 
              <InlineMath math="M^s" /> increase generates a large fall in interest rates. This elasticity becomes critically 
              important in the Liquidity Trap, where perfect elasticity renders <InlineMath math="\Delta M^s" /> completely 
              ineffective in lowering rates.
            </p>
          </NoteCard>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        {/* TOPIC 3: THE MONETARY TRANSMISSION MECHANISM */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Topic 3: The Monetary Transmission Mechanism" id="topic3">
          
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The <strong className="text-cambridge-cyan">Monetary Transmission Mechanism</strong> describes the multi-stage 
              process through which changes in the money supply ultimately affect aggregate demand and real economic activity. 
              This causal chain is the core operational framework through which central banks seek to achieve their macroeconomic 
              objectives—price stability, full employment, and sustainable growth. The <strong>indirect transmission mechanism</strong> 
              operates through the money market's impact on interest rates, which subsequently influences interest-sensitive 
              components of aggregate expenditure, particularly <strong>Investment (<InlineMath math="I" />)</strong> and 
              <strong> interest-sensitive Consumption (<InlineMath math="C" />)</strong>.
            </p>
          </div>

          <MonetaryTransmissionDiagram />

          {/* Zero-Gap Logic Chain: Full Transmission Mechanism */}
          <div className="mt-0 p-4 bg-gradient-to-r from-cambridge-cyan/10 via-cambridge-magenta/10 to-cambridge-green/10 border border-border rounded-lg">
            <h4 className="font-serif font-semibold text-foreground text-sm mb-2">Comprehensive Transmission Chain (A2 Standard)</h4>
            <div className="text-xs text-muted-foreground leading-relaxed space-y-2">
              <p className="text-justify">
                <span className="inline-block w-16 text-cambridge-cyan font-semibold">Stage 1:</span> 
                Central bank action → <InlineMath math="\uparrow M^s" /> via OMO/QE → Excess liquidity in banking system
              </p>
              <p className="text-justify">
                <span className="inline-block w-16 text-cambridge-magenta font-semibold">Stage 2:</span>
                Liquidity Preference mechanism → <InlineMath math="\uparrow M^s \Rightarrow" /> excess cash → Buy bonds → <InlineMath math="\uparrow P_B \Rightarrow \downarrow r" />
              </p>
              <p className="text-justify">
                <span className="inline-block w-16 text-cambridge-green font-semibold">Stage 3:</span>
                MEC/Investment response → More projects satisfy <InlineMath math="MEC > r" /> → <InlineMath math="\uparrow I" /> (new factories, machinery, R&D)
              </p>
              <p className="text-justify">
                <span className="inline-block w-16 text-cambridge-orange font-semibold">Stage 4:</span>
                Aggregate Demand shift → <InlineMath math="\uparrow I" /> is autonomous injection → AD curve shifts right → Multiplier effect: <InlineMath math="\Delta Y = k \times \Delta I" />
              </p>
              <p className="text-justify">
                <span className="inline-block w-16 text-primary font-semibold">Stage 5:</span>
                Macro outcomes → <InlineMath math="\uparrow Y" />, <InlineMath math="\uparrow" /> Employment; price effects depend on AS elasticity (Keynesian horizontal vs. Classical vertical)
              </p>
            </div>
          </div>

          {/* The Full Transmission Chain */}
          <h3 className="font-serif text-lg font-semibold mt-6 mb-3">The Five-Stage Transmission Chain</h3>
          
          <div className="space-y-4 mb-6">
            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-cyan">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center bg-cambridge-cyan/20 rounded-full text-cambridge-cyan font-bold">1</span>
                <h4 className="font-serif font-semibold text-cambridge-cyan">Money Market: Central Bank Action</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-11">
                The central bank increases the money supply (<InlineMath math="\uparrow M^s" />) through Open Market Operations 
                (OMO)—purchasing government securities from commercial banks—or Quantitative Easing (direct asset purchases). 
                This injects reserves into the banking system.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-magenta">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center bg-cambridge-magenta/20 rounded-full text-cambridge-magenta font-bold">2</span>
                <h4 className="font-serif font-semibold text-cambridge-magenta">Money Market: Interest Rate Adjustment</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-11">
                Excess money supply creates surplus liquidity → agents buy bonds → bond prices rise → market interest rates 
                fall (<InlineMath math="\downarrow r" />). This is the <strong>Liquidity Preference adjustment mechanism</strong>.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-green">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center bg-cambridge-green/20 rounded-full text-cambridge-green font-bold">3</span>
                <h4 className="font-serif font-semibold text-cambridge-green">Capital Goods Market: Investment Response</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-11">
                Lower interest rates reduce the <strong>cost of borrowing</strong> for firms. Investment projects that were 
                previously unprofitable (where <InlineMath math="MEC < r" />) now become viable. Investment rises 
                (<InlineMath math="\uparrow I" />) as the Marginal Efficiency of Capital now exceeds the reduced interest rate 
                for more projects.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg border-l-2 border-cambridge-orange">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center bg-cambridge-orange/20 rounded-full text-cambridge-orange font-bold">4</span>
                <h4 className="font-serif font-semibold text-cambridge-orange">Goods Market: Aggregate Demand Shift</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-11">
                Increased investment (<InlineMath math="\uparrow I" />) represents an autonomous injection into the circular flow. 
                The AD curve shifts rightward. Additionally, lower interest rates boost consumption (<InlineMath math="\uparrow C" />) 
                by reducing the reward for saving and lowering mortgage/debt servicing costs.
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg border-l-2 border-primary">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full text-primary font-bold">5</span>
                <h4 className="font-serif font-semibold text-primary">Macroeconomic Outcomes: Y, P, Employment</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-11">
                The rightward AD shift increases real GDP (<InlineMath math="\uparrow Y" />) and employment. The price level 
                impact depends on the economy's position on the AS curve: if spare capacity exists (horizontal Keynesian range), 
                output rises without inflation; if near full employment, prices rise proportionally.
              </p>
            </div>
          </div>

          {/* Mathematical Summary */}
          <div className="text-center p-4 bg-gradient-to-r from-cambridge-cyan/10 via-cambridge-magenta/10 to-cambridge-green/10 rounded-lg border border-border mb-6">
            <p className="text-xs text-muted-foreground mb-2">Complete Monetary Transmission Chain</p>
            <BlockMath math="\uparrow M^s \rightarrow \downarrow r \rightarrow \uparrow I, \uparrow C \rightarrow \uparrow AD \rightarrow \uparrow Y, \uparrow P, \uparrow \text{Employment}" />
          </div>

          {/* The Marginal Efficiency of Capital */}
          <h3 className="font-serif text-lg font-semibold mt-6 mb-3">The Role of the Marginal Efficiency of Capital (MEC)</h3>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The <strong className="text-cambridge-green">Marginal Efficiency of Capital (MEC)</strong> is the rate of return 
              that an additional unit of capital is expected to yield over its lifetime. Firms compare the MEC of potential 
              investment projects against the market interest rate: if <InlineMath math="MEC > r" />, the project is profitable 
              and will be undertaken; if <InlineMath math="MEC < r" />, the project is rejected. The <strong>MEC curve</strong> 
              is downward sloping because of diminishing returns—as more capital is accumulated, the marginal product of each 
              additional unit declines. The effectiveness of monetary policy depends critically on the <strong>interest elasticity 
              of investment demand</strong>—the slope of the MEC curve.
            </p>
          </div>

          <MECCurveDiagram />

          {/* Three Transmission Channels */}
          <h3 className="font-serif text-lg font-semibold mt-6 mb-3">The Three Transmission Channels</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-cyan mb-2">Direct Channel</h4>
              <div className="text-xs font-mono text-center p-2 bg-cambridge-cyan/10 rounded mb-2">
                ↑Mˢ → More liquidity → ↑C, ↑I → ↑AD
              </div>
              <p className="text-xs text-muted-foreground">
                Monetarists argue that excess money balances directly stimulate spending on goods and services, 
                bypassing the interest rate mechanism entirely.
              </p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-magenta mb-2">Indirect Channel</h4>
              <div className="text-xs font-mono text-center p-2 bg-cambridge-magenta/10 rounded mb-2">
                ↑Mˢ → ↓r → ↑I (via MEC) → ↑AD
              </div>
              <p className="text-xs text-muted-foreground">
                The Keynesian transmission works through the interest rate: lower rates make more investment 
                projects profitable by pushing the cost of borrowing below the MEC.
              </p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-serif font-semibold text-cambridge-green mb-2">Exchange Rate Channel</h4>
              <div className="text-xs font-mono text-center p-2 bg-cambridge-green/10 rounded mb-2">
                ↓r → Capital outflow → ↓ER → ↑(X-M)
              </div>
              <p className="text-xs text-muted-foreground">
                Lower domestic interest rates reduce the return on domestic assets, causing capital outflows. 
                This depreciates the currency, boosting net exports and AD.
              </p>
            </div>
          </div>

          {/* Senior Examiner's Conclusion */}
          <div className="mt-6 p-4 bg-gradient-to-r from-cambridge-green/10 to-transparent border-l-4 border-cambridge-green rounded-lg">
            <h4 className="font-serif font-semibold text-cambridge-green mb-2">Senior Examiner's Conclusion (AO4)</h4>
            <p className="text-sm text-foreground/90 leading-relaxed text-justify">
              <strong>In conclusion, even if interest rates fall, the impact on AD depends on the Marginal Efficiency of 
              Investment (MEI).</strong> During a deep recession, business pessimism—what Keynes termed "Animal Spirits"—may 
              make investment <strong>highly interest-inelastic</strong>. If firms lack confidence in future demand, no amount 
              of cheap credit will induce them to expand capacity. This is the phenomenon of <strong>"pushing on a string"</strong>: 
              monetary expansion fails to stimulate recovery because the transmission breaks down at the investment stage. 
              This asymmetry—monetary policy being more effective at slowing an overheated economy than stimulating a depressed 
              one—provides further justification for active fiscal intervention during recessions.
            </p>
          </div>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        {/* TOPIC 4: CREDIT CREATION AND THE MONEY MULTIPLIER */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Topic 4: Credit Creation & The Money Multiplier" id="topic4">
          
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The <strong className="text-cambridge-cyan">Credit Multiplier</strong> describes the process by which commercial 
              banks amplify the monetary base through the fractional reserve banking system. When the central bank injects 
              additional reserves into the banking system (through OMO or direct lending), banks do not hold the entirety as 
              idle reserves. Instead, they retain only a fraction (<strong>the cash or reserve ratio</strong>) to meet 
              anticipated withdrawal demands and lend out the remainder. These loans become deposits at other banks, which 
              in turn lend out a portion, creating a cascade of deposit creation that multiplies the original injection 
              several-fold.
            </p>
          </div>

          <div className="text-center p-4 bg-cambridge-cyan/10 rounded-lg border border-cambridge-cyan/20 mb-6">
            <p className="text-xs text-muted-foreground mb-2">Credit Multiplier Formula</p>
            <BlockMath math="\text{Credit Multiplier} = \frac{1}{\text{Cash Ratio}} = \frac{1}{R}" />
            <p className="text-xs text-muted-foreground mt-3">
              <strong>Example:</strong> If banks maintain a 10% reserve ratio, the multiplier = 
              <InlineMath math="\frac{1}{0.10} = 10" />. A £100 deposit can support up to £1,000 in total deposits.
            </p>
          </div>

          <CreditMultiplierDiagram />

          {/* Example Calculation */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-sm mb-3">Worked Example: Credit Creation with 10% Reserve Ratio</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Round</TableHead>
                  <TableHead className="text-xs">New Deposits</TableHead>
                  <TableHead className="text-xs">Reserves Held (10%)</TableHead>
                  <TableHead className="text-xs">New Loans</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>£100.00</TableCell>
                  <TableCell>£10.00</TableCell>
                  <TableCell>£90.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>£90.00</TableCell>
                  <TableCell>£9.00</TableCell>
                  <TableCell>£81.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>£81.00</TableCell>
                  <TableCell>£8.10</TableCell>
                  <TableCell>£72.90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow className="font-bold bg-cambridge-cyan/10">
                  <TableCell>Final</TableCell>
                  <TableCell>£1,000.00</TableCell>
                  <TableCell>£100.00</TableCell>
                  <TableCell>£900.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-2">
              The initial £100 deposit creates £1,000 in total deposits and £900 in total loans through successive rounds 
              of lending. The money supply has expanded tenfold relative to the original monetary base injection.
            </p>
          </div>

          <ExamTipBox title="Factors Limiting the Credit Multiplier in Practice" variant="gold">
            <ul className="text-xs space-y-1">
              <li>• <strong>Cash drains:</strong> If the public withdraws cash rather than re-depositing, the multiplier is reduced.</li>
              <li>• <strong>Excess reserves:</strong> Banks may hold reserves above the required minimum during uncertainty.</li>
              <li>• <strong>Lack of creditworthy borrowers:</strong> Banks may be unable to find profitable lending opportunities.</li>
              <li>• <strong>Regulatory capital requirements:</strong> Basel III rules constrain bank lending capacity.</li>
            </ul>
          </ExamTipBox>
        </ContentSection>

        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        {/* TOPIC 5: POLICY EVALUATION & LIMITATIONS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════════════════════════ */}
        <ContentSection title="Topic 5: Policy Evaluation & The Limits of Monetary Policy" id="topic5">
          
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              The evaluation of monetary policy effectiveness requires a careful analysis of the potential 
              <strong className="text-cambridge-orange"> breakdowns in the transmission mechanism</strong> and the conditions 
              under which conventional monetary tools may fail to achieve their intended objectives. A comprehensive A2-level 
              evaluation must address both the theoretical limitations identified by Keynes and the empirical challenges 
              observed in contemporary central banking practice.
            </p>
          </div>

          {/* Monetarist vs Keynesian Debate */}
          <h3 className="font-serif text-lg font-semibold mb-3">The Monetarist-Keynesian Debate</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="glass-card p-4 rounded-lg border border-cambridge-cyan/30">
              <h4 className="font-serif font-semibold text-cambridge-cyan mb-3">Monetarist View</h4>
              <ul className="text-xs space-y-2 text-muted-foreground">
                <li>• Money demand is <strong>interest-inelastic</strong>: changes in <InlineMath math="M^s" /> cause large 
                changes in <InlineMath math="r" /></li>
                <li>• Investment is <strong>interest-elastic</strong>: lower rates significantly boost <InlineMath math="I" /></li>
                <li>• The economy operates near full employment: <InlineMath math="\uparrow AD \Rightarrow \uparrow P" /> (inflation)</li>
                <li>• Velocity (<InlineMath math="V" />) is stable: <InlineMath math="MV = PY \Rightarrow M \propto P" /></li>
                <li>• <strong>Monetary policy is potent</strong>; fiscal policy crowds out private spending</li>
              </ul>
            </div>
            <div className="glass-card p-4 rounded-lg border border-cambridge-magenta/30">
              <h4 className="font-serif font-semibold text-cambridge-magenta mb-3">Keynesian View</h4>
              <ul className="text-xs space-y-2 text-muted-foreground">
                <li>• Money demand can be <strong>highly interest-elastic</strong> (Liquidity Trap)</li>
                <li>• Investment depends on <strong>business confidence</strong>, not just interest rates</li>
                <li>• Economies can persist at <strong>under-employment equilibrium</strong> with spare capacity</li>
                <li>• Velocity is <strong>unstable</strong>: varies inversely with interest rates and economic conditions</li>
                <li>• <strong>Fiscal policy is essential</strong> when monetary transmission breaks down</li>
              </ul>
            </div>
          </div>

          {/* Limitations Table */}
          <h3 className="font-serif text-lg font-semibold mb-3">Systematic Limitations of Monetary Policy</h3>
          
          <div className="overflow-x-auto mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs w-1/4">Limitation</TableHead>
                  <TableHead className="text-xs">Mechanism of Failure</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">1. Liquidity Trap</TableCell>
                  <TableCell>
                    At the zero lower bound, <InlineMath math="M^d" /> becomes perfectly elastic. Agents hoard additional 
                    money rather than purchasing bonds, severing the link between <InlineMath math="M^s" /> and 
                    <InlineMath math="r" />. Monetary expansion fails to lower interest rates.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">2. Investment Inelasticity</TableCell>
                  <TableCell>
                    During recessions, business pessimism ("Animal Spirits") makes investment unresponsive to lower rates. 
                    If firms lack confidence in future demand, they will not borrow regardless of how cheap credit becomes.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">3. Time Lags</TableCell>
                  <TableCell>
                    <strong>Recognition lag:</strong> time to identify the problem. <strong>Implementation lag:</strong> time 
                    to change policy. <strong>Transmission lag:</strong> 18-24 months for full effects on output and prices.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">4. Asset Price Bubbles</TableCell>
                  <TableCell>
                    Prolonged low interest rates may fuel speculative bubbles in housing and financial markets rather than 
                    productive investment, creating financial instability risks.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-cambridge-orange">5. Bank Lending Behaviour</TableCell>
                  <TableCell>
                    Even with ample reserves, banks may tighten credit standards during uncertainty, hoarding liquidity 
                    rather than lending. The credit multiplier collapses.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Quantitative Easing */}
          <h3 className="font-serif text-lg font-semibold mb-3">Quantitative Easing: Unconventional Monetary Policy</h3>
          
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-sm leading-relaxed text-justify text-foreground/90">
              When conventional interest rate policy is exhausted at the zero lower bound, central banks may resort to 
              <strong className="text-cambridge-green"> Quantitative Easing (QE)</strong>—the large-scale purchase of 
              government bonds and other financial assets directly from the private sector. Unlike OMO, which targets 
              short-term rates, QE aims to reduce <strong>long-term yields</strong>, lower corporate borrowing costs, 
              boost asset prices (creating wealth effects), and signal the central bank's commitment to accommodative 
              policy. However, QE remains controversial: critics argue it primarily benefits asset owners, exacerbates 
              wealth inequality, and risks future inflation when the central bank eventually unwinds its balance sheet.
            </p>
          </div>

          {/* Final Comprehensive Conclusion */}
          <div className="mt-6 p-5 bg-gradient-to-r from-cambridge-orange/15 via-cambridge-magenta/10 to-cambridge-cyan/10 border border-cambridge-orange/30 rounded-lg">
            <h4 className="font-serif font-semibold text-cambridge-orange mb-3">Comprehensive A2 Evaluation: Monetary Policy Effectiveness (AO4)</h4>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-foreground/90 leading-relaxed text-justify mb-3">
                <strong>Ultimately, the effectiveness of monetary policy is contingent upon the economic environment in which 
                it operates.</strong> During normal economic conditions—when interest rates are positive, investment is 
                reasonably interest-elastic, and banks are willing to lend—the monetary transmission mechanism functions 
                adequately, and central banks can influence aggregate demand through interest rate adjustments. However, 
                during severe recessions or financial crises, multiple links in the transmission chain may simultaneously 
                break down: the Liquidity Trap renders rate cuts ineffective, business pessimism makes investment 
                interest-inelastic, and bank credit creation seizes up. Under these conditions, monetary policy becomes 
                analogous to "pushing on a string"—expansionary measures fail to generate the intended stimulus.
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed text-justify mb-3">
                <strong>Key Depends-On Factors:</strong> (1) <em>State of Business Confidence:</em> Keynes's "Animal Spirits" determine whether cheap credit translates into actual investment—pessimistic firms hoard cash regardless of interest rates. (2) <em>Interest Elasticity of Money Demand:</em> The closer to the Liquidity Trap, the larger the <InlineMath math="\Delta M^s" /> needed for a given <InlineMath math="\Delta r" />. (3) <em>Bank Willingness to Lend:</em> Credit crunches see the multiplier collapse as banks tighten standards. (4) <em>Crowding Out:</em> If government borrowing absorbs the new money, private investment may not increase despite <InlineMath math="\downarrow r" />.
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed text-justify">
                This analysis provides the intellectual foundation for Keynes's advocacy of <strong>Discretionary Fiscal 
                Policy</strong> as the necessary complement to—and, in crisis conditions, substitute for—monetary 
                intervention. When private sector demand is deficient and monetary transmission is impaired, only direct 
                government spending (<InlineMath math="G" />) or tax cuts can inject the autonomous expenditure needed to 
                activate the multiplier and restore the economy to full employment equilibrium. The asymmetry of monetary policy—effective at restraining booms but weak at stimulating during recessions—remains a central insight for A2 macroeconomic analysis.
              </p>
            </div>
          </div>
          
          {/* Senior Examiner's Final Verdict */}
          <div className="mt-4 p-4 bg-slate-800/50 border border-amber-500/30 rounded-lg">
            <p className="text-sm text-foreground/90 leading-relaxed text-justify">
              <strong className="text-amber-400">Senior Examiner's Final Verdict:</strong> "The transmission mechanism from <InlineMath math="\Delta M^s \rightarrow \Delta Y" /> operates through a five-stage chain vulnerable to breakdown at each junction. The Keynesian critique demonstrates that monetary expansion may be 'pushing on a string' during recessions, while Monetarists emphasise velocity stability and the direct spending channel. A* candidates must evaluate <em>when</em> monetary policy works (normal conditions, credible commitment) versus <em>when</em> it fails (liquidity trap, investment inelasticity, credit freeze), rather than offering simplistic judgments about its general efficacy. The 2008 GFC and post-COVID QE experiments provide empirical case studies demonstrating both the power and the limits of unconventional monetary expansion."
            </p>
          </div>
        </ContentSection>

      </motion.div>
    </Layout>
  );
};

export default MoneyBanking;
