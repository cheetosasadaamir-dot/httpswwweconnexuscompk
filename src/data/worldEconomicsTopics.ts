export interface WorldEconomicsTopic {
 id: string;
 title: string;
 category: 'theory' | 'policy' | 'trade' | 'market-failure' | 'macro';
 definition: string;
 keyPoints: string[];
 analysis: string;
 evaluation?: string;
 formula?: string;
 realWorldExample?: string;
}

export const worldEconomicsTopics: WorldEconomicsTopic[] = [
 {
 id: 'a-priori-arguments',
 title: 'A Priori Arguments',
 category: 'theory',
 definition: 'Economic reasoning derived from logical deduction rather than empirical observation. These arguments are based on self-evident axioms that are assumed to be true without requiring experimental verification.',
 keyPoints: [
 'Based on logical axioms rather than empirical data',
 'Forms the foundation of classical economic models (e.g., profit maximization)',
 'Cannot be "disproved" by data—only the assumptions can be questioned',
 'Contrasts with a posteriori (empirical) reasoning'
 ],
 analysis: 'A priori arguments assume rational, self-interested agents → This leads to deductive models like utility maximization → The logic is internally consistent → However, if the initial axiom is flawed (e.g., humans are not perfectly rational), the entire model collapses.',
 evaluation: 'The validity of a priori reasoning depends on the realism of its foundational assumptions. Behavioral economics challenges these models by demonstrating systematic deviations from "rational" behavior (e.g., loss aversion, bounded rationality).',
 realWorldExample: 'The assumption that firms always maximize profit is an a priori axiom. In reality, managers may "satisfice" or pursue sales maximization due to the Principal-Agent problem.'
 },
 {
 id: 'ability-to-pay',
 title: 'Ability to Pay Principle',
 category: 'policy',
 definition: 'A principle of taxation stating that taxes should be levied according to the taxpayer\'s capacity to bear the burden. This is the theoretical foundation of progressive taxation and vertical equity.',
 keyPoints: [
 'Vertical Equity: Those with greater ability should pay proportionally more',
 'Justifies progressive income tax structures',
 'Based on the concept of diminishing marginal utility of income',
 'Contrasts with the "Benefit Principle" (pay according to benefits received)'
 ],
 analysis: '↑ Income → ↓ Marginal Utility of each additional £1 → A wealthy individual "sacrifices" less utility by paying £1000 in tax than a poor individual → Progressive taxation equalizes the utility sacrifice across income groups.',
 evaluation: 'While progressive taxation promotes equity, it may reduce incentives for high earners to work (substitution effect) and can lead to capital flight. The Laffer Curve suggests there is an optimal tax rate beyond which revenues decline.',
 formula: '\\text{Progressive Tax}: \\frac{\\Delta T}{\\Delta Y} > \\frac{T}{Y}',
 realWorldExample: 'The UK income tax structure (20% basic, 40% higher, 45% additional rate) is based on the ability to pay principle.'
 },
 {
 id: 'absolute-advantage',
 title: 'Absolute Advantage',
 category: 'trade',
 definition: 'A country has an absolute advantage in the production of a good if it can produce that good using fewer resources (inputs) than another country. This concept was introduced by Adam Smith.',
 keyPoints: [
 'Measured by comparing unit labor requirements or output per worker',
 'A country should specialize in goods where it has the lowest absolute cost',
 'Does NOT explain trade when one country is more efficient at producing everything',
 'Superseded by David Ricardo\'s theory of Comparative Advantage'
 ],
 analysis: 'Country A uses 2 hours to produce 1 unit of cloth; Country B uses 4 hours → Country A has an absolute advantage in cloth → Specialization leads to higher global output → Trade allows both countries to consume beyond their PPCs.',
 evaluation: 'Absolute advantage is a limited theory. It cannot explain why trade is beneficial between a highly developed nation and an LDC if the former is better at producing everything. Ricardo\'s Comparative Advantage resolves this by focusing on opportunity costs.',
 formula: '\\text{Absolute Advantage: } L_A < L_B \\text{ (where L = labor hours per unit)}',
 realWorldExample: 'Brazil has an absolute advantage in coffee production due to its climate and soil. The US has an absolute advantage in aircraft manufacturing due to its technological capital.'
 },
 {
 id: 'absorbed-costs',
 title: 'Absorbed & Adjustment Costs',
 category: 'theory',
 definition: 'Absorbed costs are manufacturing overheads allocated to each unit of output. Adjustment costs (or "Menu Costs") are the expenses incurred when firms change their prices, including reprinting catalogs, updating systems, and potential customer alienation.',
 keyPoints: [
 'Absorption costing assigns fixed overheads to products (contrasts with marginal costing)',
 'Menu Costs explain price stickiness in the short run',
 'High menu costs lead to infrequent price changes, even if demand shifts',
 'Contributes to the New Keynesian explanation of sticky prices'
 ],
 analysis: 'Firm experiences ↑ demand → Profit-maximizing price should rise → But menu costs are £500 → If expected gain from price change < £500, the firm keeps prices constant → This creates short-run price rigidity and explains why AD shocks affect output, not just prices.',
 evaluation: 'In the digital age, menu costs have fallen significantly (online prices can be changed instantly). However, psychological costs (customer backlash) and contractual rigidities remain significant sources of price stickiness.',
 realWorldExample: 'During hyperinflation in Zimbabwe, restaurants stopped printing menus and used chalkboards due to the high frequency of price changes.'
 },
 {
 id: 'accelerated-depreciation',
 title: 'Accelerated Depreciation',
 category: 'policy',
 definition: 'A tax policy allowing businesses to write off the cost of capital assets more quickly than their actual economic life, thereby reducing taxable income in the short term and incentivizing investment.',
 keyPoints: [
 'A supply-side policy tool to stimulate business investment',
 'Reduces the effective cost of capital in the early years of an asset\'s life',
 'Shifts cash flow forward, improving firms\' liquidity',
 'May lead to over-investment in capital if not carefully calibrated'
 ],
 analysis: '↓ Taxable income in Year 1 → ↑ Post-tax profits → ↑ Retained earnings → ↑ Investment in new capital → ↑ Productive capacity → Outward shift of LRAS.',
 evaluation: 'While accelerated depreciation boosts investment, it reduces government tax revenue in the short run (creating an opportunity cost). It also disproportionately benefits capital-intensive industries, potentially distorting resource allocation.',
 formula: '\\text{Double Declining Balance: } D = 2 \\times \\frac{1}{n} \\times \\text{Book Value}',
 realWorldExample: 'The UK\'s "Super-Deduction" scheme (2021-2023) allowed companies to claim 130% first-year relief on qualifying plant and machinery investments.'
 },
 {
 id: 'accommodative-monetary-policy',
 title: 'Accommodative Monetary Policy',
 category: 'macro',
 definition: 'Also known as "Easy Money" or "Loose Monetary Policy," this involves a central bank lowering interest rates and/or increasing the money supply to stimulate aggregate demand during a recession or period of low growth.',
 keyPoints: [
 'Aims to reduce the cost of borrowing for firms and consumers',
 'Implemented via ↓ base rates, ↓ reserve requirements, or Quantitative Easing (QE)',
 'Stimulates C (consumption) and I (investment) components of AD',
 'Risk: May fuel asset bubbles or inflation if maintained for too long'
 ],
 analysis: 'Central Bank ↓ Interest Rates → ↓ Cost of borrowing → ↑ Consumer spending (mortgages, credit cards) → ↑ Business investment (lower MEC hurdle) → ↑ AD → Rightward shift of AD curve → ↑ Real GDP, ↓ Unemployment.',
 evaluation: 'Effectiveness depends on consumer and business confidence. In a Liquidity Trap (near-zero rates), further rate cuts are ineffective as agents hoard cash (Keynes\' "pushing on a string"). QE may be required.',
 formula: '\\Delta M^s \\to \\Delta r \\to \\Delta I/C \\to \\Delta AD \\to \\Delta Y/P',
 realWorldExample: 'The Bank of England slashed rates to 0.1% in 2020 and launched £895bn in QE to support the economy during the COVID-19 pandemic.'
 },
 {
 id: 'adaptive-expectations',
 title: 'Adaptive Expectations',
 category: 'theory',
 definition: 'A theory of expectation formation where economic agents base their predictions of future values (e.g., inflation) on past observations, adjusting slowly as new data arrives. This is the foundation of the expectations-augmented Phillips Curve.',
 keyPoints: [
 'Backward-looking: Future inflation is predicted based on past inflation',
 'Implies systematic forecasting errors during periods of change',
 'Contrasts with Rational Expectations (forward-looking, uses all available info)',
 'Explains the short-run trade-off between inflation and unemployment'
 ],
 analysis: 'If past inflation = 2% → Workers expect 2% next year → They negotiate wage rises of 2% → But if actual inflation is 4%, real wages fall → Firms hire more → Unemployment falls below NAIRU → This is a movement along the SRPC.',
 evaluation: 'Adaptive expectations are considered "irrational" as agents ignore forward-looking information (e.g., announced policy changes). Rational Expectations suggest agents would immediately adjust, eliminating any short-run Phillips Curve trade-off.',
 formula: '\\pi^e_t = \\pi^e_{t-1} + \\lambda(\\pi_{t-1} - \\pi^e_{t-1})',
 realWorldExample: 'During the 1970s stagflation, workers\' wage demands lagged behind actual inflation, initially keeping unemployment low before expectations "caught up."'
 },
 {
 id: 'adjustable-peg',
 title: 'Adjustable Peg Exchange Rate',
 category: 'trade',
 definition: 'A hybrid exchange rate system where a currency is fixed (pegged) to another currency or basket, but the peg can be adjusted periodically by the central bank to correct fundamental disequilibria. The Bretton Woods system (1944-1971) is the primary historical example.',
 keyPoints: [
 'Provides short-term stability while allowing long-term adjustment',
 'Central bank intervenes using foreign exchange reserves to maintain the peg',
 'Devaluation can be used to restore export competitiveness',
 'Vulnerable to speculative attacks if markets anticipate devaluation'
 ],
 analysis: 'Persistent Current Account Deficit → Currency is overvalued → Central bank depletes forex reserves defending the peg → Speculators bet against the currency → Eventually, the peg is abandoned or devalued → ↓ Exchange rate → ↑ Export competitiveness (Marshall-Lerner permitting).',
 evaluation: 'Adjustable pegs suffer from the "N-1 problem" (one country\'s surplus is another\'s deficit) and the "impossible trinity" (cannot have fixed rates, free capital flows, AND independent monetary policy). The collapse of Bretton Woods demonstrated these inherent instabilities.',
 realWorldExample: 'The UK was forced out of the European Exchange Rate Mechanism (ERM) on "Black Wednesday" (1992) when speculators, including George Soros, bet against the pound\'s unsustainable peg.'
 },
 {
 id: 'adverse-selection',
 title: 'Adverse Selection',
 category: 'market-failure',
 definition: 'A form of market failure arising from asymmetric information, where one party in a transaction has more information than the other. This leads to a "selection" of lower-quality goods or higher-risk individuals, potentially causing market collapse.',
 keyPoints: [
 'Occurs BEFORE the transaction (ex ante information asymmetry)',
 'Differs from Moral Hazard (which occurs AFTER the transaction)',
 'Classic example: Akerlof\'s "Market for Lemons" (used cars)',
 'Leads to market failure: good products/risks are driven out'
 ],
 analysis: 'Buyers cannot distinguish quality → They offer an average price → Sellers of high-quality goods exit (price too low) → Only "lemons" remain → Buyers anticipate this and lower their offer further → Market unravels → Complete market failure.',
 evaluation: 'Market solutions include signaling (warranties, certifications), screening (insurers demanding health checks), and reputation systems. Government intervention (mandatory insurance, quality standards) can also mitigate adverse selection.',
 realWorldExample: 'In health insurance, if premiums are set at an average level, healthy individuals may opt out (finding it too expensive), leaving only high-risk individuals in the pool, which raises premiums further—the "death spiral."'
 },
 {
 id: 'agglomeration-economies',
 title: 'Agglomeration Economies',
 category: 'theory',
 definition: 'The benefits that firms obtain by locating near each other. These external economies of scale arise from geographic clustering and include reduced transport costs, a shared labor pool, and knowledge spillovers.',
 keyPoints: [
 'A type of positive externality and external economy of scale',
 'Three Marshallian sources: Labor pooling, Input sharing, Knowledge spillovers',
 'Explains the formation of industrial clusters (Silicon Valley, City of London)',
 'Can lead to regional inequality as activity concentrates in "core" areas'
 ],
 analysis: 'Firms cluster in one location → Suppliers also relocate nearby → ↓ Transport and transaction costs → Skilled workers migrate to the cluster → ↑ Labor pool quality → Ideas and innovations spread between firms (knowledge spillovers) → ↑ Productivity for all firms in the cluster.',
 evaluation: 'While agglomeration boosts productivity, it can cause diseconomies: congestion, high land prices, and environmental degradation. It also exacerbates regional inequality, as peripheral areas are left behind (the "core-periphery" model).',
 realWorldExample: 'Silicon Valley benefits from agglomeration: proximity to Stanford, a dense network of venture capitalists, and a culture of knowledge sharing between tech firms.'
 },
 {
 id: 'aggregate-expenditure',
 title: 'Aggregate Expenditure Function',
 category: 'macro',
 definition: 'The Keynesian model of national income determination, where equilibrium output is determined by the level of aggregate spending in the economy. Equilibrium occurs where planned expenditure equals actual output.',
 keyPoints: [
 'AE = C + I + G + (X - M)',
 'Equilibrium condition: AE = Y (Aggregate Expenditure = National Income)',
 'Below equilibrium: unplanned inventory depletion → firms ↑ output',
 'Above equilibrium: unplanned inventory accumulation → firms ↓ output',
 'The slope of the AE curve is determined by the MPC (Marginal Propensity to Consume)'
 ],
 analysis: 'Autonomous ↑ in G (government spending) → Shifts AE curve upward → At the old Y, AE > Y → Unplanned inventory rundown → Firms increase production → Income rises → ↑ C (induced consumption) → Further ↑ in AE → New equilibrium at higher Y. The total change in Y = ΔG × Multiplier.',
 evaluation: 'The AE model assumes prices are fixed (short-run Keynesian assumption). It ignores supply-side constraints and the inflationary impact of demand-side expansions when the economy is near full capacity.',
 formula: 'Y_e = \\frac{1}{1-MPC} \\times (C_0 + I + G + X - M)',
 realWorldExample: 'The 2008-09 fiscal stimulus packages (e.g., US ARRA) were designed to shift the AE curve upward and close the output gap.'
 },
 {
 id: 'agricultural-protection',
 title: 'Agricultural Protection',
 category: 'trade',
 definition: 'Government policies designed to shield domestic farmers from foreign competition, including tariffs on imported food, subsidies to domestic producers, and import quotas. The EU\'s Common Agricultural Policy (CAP) is a major example.',
 keyPoints: [
 'Objectives: Food security, rural employment, stable farm incomes',
 'Methods: Tariffs, subsidies (direct payments), minimum prices, quotas',
 'Creates global deadweight loss and harms developing country exporters',
 'Leads to overproduction and environmental degradation (e.g., "butter mountains")'
 ],
 analysis: 'Government imposes tariff on food imports → Domestic price rises above world price ($P_w$ to $P_d$) → ↑ Domestic production, ↓ Imports → Consumer surplus falls (higher prices) → Producer surplus rises → Government gains tariff revenue → But Deadweight Loss is created (allocative inefficiency).',
 evaluation: 'Agricultural protection is highly distortionary. It raises food prices for consumers, misallocates resources towards inefficient farming, and prevents LDCs from exploiting their comparative advantage in agriculture. However, food security and rural preservation may justify some intervention.',
 realWorldExample: 'The EU\'s CAP accounts for ~33% of the EU budget. It has been criticized for harming African farmers who cannot compete with subsidized European exports.'
 },
 {
 id: 'ftse-all-share',
 title: 'All Share Index (FTSE)',
 category: 'macro',
 definition: 'The FTSE All-Share Index is a capitalization-weighted stock market index representing approximately 98-99% of UK market capitalization. It comprises the FTSE 100, FTSE 250, and FTSE SmallCap indices, serving as a benchmark for UK equity performance.',
 keyPoints: [
 'Capitalization-weighted: larger companies have greater influence on the index',
 'Includes ~600 companies listed on the London Stock Exchange',
 'Leading indicator of business confidence and economic expectations',
 'Used by fund managers as a benchmark for portfolio performance'
 ],
 analysis: 'Economic optimism ↑ → ↑ Expected future profits → ↑ Share prices → ↑ FTSE All-Share → Positive wealth effect → ↑ Consumer spending (C) → ↑ AD. Conversely, falling indices signal ↓ confidence, ↓ investment, and potential recession.',
 evaluation: 'Stock indices are forward-looking but volatile. They may not reflect the real economy (e.g., tech-heavy indices can surge while unemployment rises). Index composition can also skew representation—the FTSE 100 is dominated by multinationals whose profits come from abroad.',
 realWorldExample: 'The FTSE All-Share fell 25% in March 2020 during COVID-19 panic, then recovered to pre-pandemic levels by 2021, illustrating how indices can decouple from short-term economic conditions.'
 },
 {
 id: 'allocative-efficiency',
 title: 'Allocative Efficiency',
 category: 'theory',
 definition: 'A state of resource allocation where it is impossible to reallocate resources to make any one individual better off without making someone else worse off. Formally achieved when Price equals Marginal Cost (P = MC) for all goods.',
 keyPoints: [
 'Formal condition: P = MC (price reflects marginal cost of production)',
 'Consumer surplus + Producer surplus is maximized',
 'Resources flow to their highest-valued uses',
 'Achieved in Perfect Competition; NOT in Monopoly (P > MC)'
 ],
 analysis: 'If P > MC → Consumers value an additional unit more than it costs to produce → Underproduction → Deadweight Loss. If P < MC → Resources are overallocated → Society loses. At P = MC, social welfare (Total Surplus) is maximized.',
 evaluation: 'Allocative efficiency assumes no externalities. When externalities exist, Marginal Social Cost (MSC) ≠ Marginal Private Cost (MC), so P = MC no longer maximizes social welfare. Pigouvian taxes/subsidies are needed to correct this.',
 formula: 'P = MC \\implies \\text{Allocative Efficiency}',
 realWorldExample: 'Monopoly leads to allocative inefficiency: a pharmaceutical firm with patent protection sets P >> MC, restricting access to life-saving drugs.'
 },
 {
 id: 'announcement-effect',
 title: 'Announcement Effect',
 category: 'macro',
 definition: 'The immediate impact on financial markets and economic expectations when a central bank or government announces a policy change. Markets react to the news itself, often before the policy is implemented.',
 keyPoints: [
 'Expectations adjust immediately upon credible announcements',
 'Central to the "Expectations Channel" of monetary policy transmission',
 'Forward guidance relies on this effect to shape behavior',
 'If markets anticipate the announcement, the effect may be muted ("priced in")'
 ],
 analysis: 'Central Bank announces future ↓ interest rates → Markets immediately ↓ long-term bond yields → ↓ Mortgage rates → ↑ House prices (wealth effect) → ↑ Consumer confidence → ↑ Spending, even before rates actually fall.',
 evaluation: 'The announcement effect depends on central bank credibility. If the market doubts the commitment (time inconsistency problem), announcements have limited impact. Rational Expectations theory suggests only unexpected announcements move markets.',
 realWorldExample: 'Mario Draghi\'s 2012 "whatever it takes" statement immediately calmed Eurozone bond markets, reducing Italian and Spanish yields before any ECB action.'
 },
 {
 id: 'anti-dumping',
 title: 'Anti-Dumping Measures & Duties',
 category: 'trade',
 definition: 'Government-imposed tariffs on imported goods that are being sold below their fair market value (or below production cost) in the domestic market. Permitted under WTO rules to prevent predatory pricing by foreign firms.',
 keyPoints: [
 'Dumping: selling exports below domestic price or cost of production',
 'Purpose: protect domestic industries from unfair foreign competition',
 'WTO allows anti-dumping duties if material injury is proven',
 'Can be abused as a form of disguised protectionism'
 ],
 analysis: 'Foreign firm sells steel at P < cost → Undercuts domestic producers → Domestic firms exit the market → Foreign firm gains monopoly power → Eventually raises prices → Consumer harmed in the long run. Anti-dumping duty = tariff that raises import price to "fair" level.',
 evaluation: 'Anti-dumping measures are controversial. They protect jobs but raise consumer prices and may provoke retaliation. Defining "fair value" is subjective, and duties can be lobbied for by inefficient industries seeking protection.',
 realWorldExample: 'The EU imposed anti-dumping duties of up to 35% on Chinese steel in 2016, alleging below-cost pricing was destroying European steel industries.'
 },
 {
 id: 'anti-pollution',
 title: 'Anti-Pollution Measures',
 category: 'market-failure',
 definition: 'Government interventions designed to reduce negative externalities from pollution by making polluters internalize the full social cost of their activities. Methods include carbon taxes, emissions trading, and regulation.',
 keyPoints: [
 'Pigouvian Tax: Tax = Marginal External Cost (MEC) to internalize externality',
 'Cap-and-Trade: Set quantity limit, allow trading of permits',
 'Command-and-Control: Direct regulation (e.g., emission standards)',
 'Coase Theorem: Private bargaining may resolve if property rights are clear and transaction costs low'
 ],
 analysis: 'Firm produces good with pollution → MPC < MSC → Overproduction from society\'s perspective → Impose carbon tax = MEC → Firm\'s private cost curve shifts up → Output falls to socially optimal level → Deadweight Loss eliminated.',
 evaluation: 'Carbon taxes are efficient but regressive (hit poor households harder). Cap-and-trade creates price volatility. Regulation is certain but inflexible. The optimal policy depends on the elasticity of the pollution supply curve and political feasibility.',
 formula: 't^* = MEC \\implies P = MSC',
 realWorldExample: 'The EU Emissions Trading System (ETS) is the world\'s largest carbon market, covering ~40% of EU emissions. Carbon prices reached €100/tonne in 2023.'
 },
 {
 id: 'antitrust-laws',
 title: 'Antitrust Laws',
 category: 'policy',
 definition: 'Legislation designed to prevent anti-competitive practices, regulate monopolies, and promote fair competition. Key areas include preventing cartels, blocking anti-competitive mergers, and prohibiting abuse of dominant position.',
 keyPoints: [
 'Prohibit cartels, price-fixing, and market-sharing agreements',
 'Regulate mergers that substantially lessen competition',
 'Prevent abuse of monopoly power (predatory pricing, refusal to supply)',
 'UK: Competition and Markets Authority (CMA); US: FTC and DOJ'
 ],
 analysis: 'Firm gains dominant position → Potential for ↑ prices, ↓ output, ↓ consumer welfare → Antitrust enforcement → Blocks merger or breaks up monopoly → ↑ Competition → ↓ Prices, ↑ Output → Allocative efficiency restored.',
 evaluation: 'Antitrust faces a trade-off: breaking up monopolies may sacrifice economies of scale and dynamic efficiency (R&D investment). The "Chicago School" argues monopolies are often temporary and that intervention causes more harm than good.',
 realWorldExample: 'The EU fined Google €4.3bn in 2018 for abusing Android\'s dominance by pre-installing Google Search and Chrome on smartphones.'
 },
 {
 id: 'arbitrage',
 title: 'Arbitrage',
 category: 'theory',
 definition: 'The simultaneous purchase and sale of an asset in different markets to profit from price discrepancies. In efficient markets, arbitrage opportunities are quickly eliminated, enforcing the Law of One Price.',
 keyPoints: [
 'Risk-free profit from price differentials across markets',
 'Enforces the Law of One Price (identical goods, one price after transport costs)',
 'Underpins exchange rate equilibrium (covered/uncovered interest parity)',
 'In efficient markets, arbitrage opportunities are fleeting'
 ],
 analysis: 'Gold trades at £1000 in London, £1020 in New York (after costs) → Arbitrageurs buy in London, sell in New York → ↑ Demand in London raises price; ↑ Supply in New York lowers price → Prices converge → Arbitrage profit disappears.',
 evaluation: 'Arbitrage assumes no transaction costs, perfect information, and unlimited capital—rarely true in practice. "Limits to arbitrage" (capital constraints, noise trader risk) can allow mispricings to persist, as shown in the 2008 financial crisis.',
 formula: '\\text{Covered Interest Parity: } F/S = (1+r_d)/(1+r_f)',
 realWorldExample: 'Currency arbitrage in the forex market ensures exchange rates between USD/EUR, EUR/GBP, and GBP/USD are consistent, or else traders profit instantly.'
 },
 {
 id: 'arbitration',
 title: 'Arbitration in Disputes',
 category: 'policy',
 definition: 'A form of alternative dispute resolution where a neutral third party (arbitrator) makes a binding decision to resolve conflicts between parties. Commonly used in labor disputes and international trade agreements.',
 keyPoints: [
 'Binding arbitration: parties must accept the arbitrator\'s decision',
 'Pendulum arbitration: arbitrator must choose one side\'s position (no compromise)',
 'Faster and cheaper than litigation',
 'Used in labor disputes, commercial contracts, and investor-state disputes (ISDS)'
 ],
 analysis: 'Union and employer cannot agree on wages → Strike threat disrupts production → Both parties agree to binding arbitration → Arbitrator sets wage based on evidence → Industrial action avoided → ↑ Productivity, ↓ Lost output.',
 evaluation: 'Arbitration can create moral hazard: parties may adopt extreme positions hoping the arbitrator splits the difference. Pendulum arbitration addresses this by forcing arbitrators to pick one side, encouraging reasonable initial offers.',
 realWorldExample: 'The UK\'s ACAS (Advisory, Conciliation and Arbitration Service) intervened in 860 collective disputes in 2022-23, avoiding widespread industrial action.'
 },
 {
 id: 'arc-elasticity',
 title: 'Arc Elasticity of Demand',
 category: 'theory',
 definition: 'A method of calculating price elasticity of demand over a range of prices using the midpoint formula. Unlike point elasticity, arc elasticity gives the same value regardless of the direction of price change.',
 keyPoints: [
 'Uses the midpoint (average) of prices and quantities',
 'Solves the asymmetry problem of point elasticity',
 'Suitable for large, discrete price changes',
 'Formula avoids different elasticity values for price rises vs. falls'
 ],
 analysis: 'Price rises from £10 to £12; Quantity falls from 100 to 80 → Arc elasticity uses midpoints (£11, 90) → Eliminates bias → Gives a consistent elasticity value → More accurate for revenue predictions over the price range.',
 evaluation: 'Arc elasticity is more practical for real-world analysis where prices change significantly. However, it still provides only an average elasticity over the range—point elasticity is preferred for theoretical precision at a specific price.',
 formula: 'E_d = \\frac{(Q_2 - Q_1)/[(Q_1 + Q_2)/2]}{(P_2 - P_1)/[(P_1 + P_2)/2]}',
 realWorldExample: 'A supermarket testing price changes on milk from £1.20 to £1.40 would use arc elasticity to predict the average demand response over that range.'
 },
 {
 id: 'arithmetic-mean',
 title: 'Arithmetic Mean',
 category: 'theory',
 definition: 'The sum of all values in a dataset divided by the number of observations. The most common measure of central tendency in economics, used for calculating averages like GDP per capita, average income, and mean inflation rates.',
 keyPoints: [
 'Formula: Sum of values ÷ Number of observations',
 'Sensitive to outliers (extreme values distort the mean)',
 'For skewed income distributions, median is often preferred',
 'Used in calculating weighted indices (e.g., CPI weights)'
 ],
 analysis: 'Calculating average income: Sum all incomes → Divide by population → Mean income obtained. If a few billionaires are added → Mean rises sharply → But median (middle value) barely changes → Mean overstates typical income.',
 evaluation: 'The arithmetic mean can be misleading for skewed distributions. Median income or Gini coefficients provide better insight into inequality. Weighted means are necessary when components have different importance (e.g., CPI basket weights).',
 formula: '\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}',
 realWorldExample: 'UK mean income is ~£35,000, but median income is ~£28,000. The difference reflects the skewed income distribution with high earners pulling the mean upward.'
 },
 {
 id: 'asian-financial-crisis',
 title: 'Asian Financial Crisis (1997)',
 category: 'macro',
 definition: 'A severe financial crisis that began in Thailand in July 1997 and spread across East Asia, characterized by currency collapses, capital flight, and sharp recessions. Caused by a combination of fixed exchange rates, excessive borrowing, and speculative attacks.',
 keyPoints: [
 'Trigger: Thailand abandoned the baht\'s peg to USD on July 2, 1997',
 'Contagion spread to Indonesia, South Korea, Malaysia, Philippines',
 'Causes: Current account deficits, short-term foreign borrowing, asset bubbles',
 'IMF bailouts came with controversial austerity conditions'
 ],
 analysis: 'Fixed exchange rates + high interest rates → Attracted foreign capital ("hot money") → Funded consumption/investment booms → Current account deficits widened → Speculators doubted peg sustainability → Capital flight → Forex reserves depleted → Forced devaluation → ↑ Foreign debt burden (USD-denominated) → Banking crisis → Recession.',
 evaluation: 'The crisis exposed the dangers of the "impossible trinity" and moral hazard from implicit government guarantees. IMF austerity was criticized for deepening recessions. Malaysia\'s capital controls, initially condemned, were later seen as effective.',
 realWorldExample: 'Indonesia\'s GDP contracted 13.1% in 1998. The rupiah lost 80% of its value. The crisis triggered the fall of the Suharto regime after 31 years.'
 },
 {
 id: 'assembly-line',
 title: 'Assembly Line & Division of Labour',
 category: 'theory',
 definition: 'A manufacturing process in which parts are added to a product in a sequential manner, with each worker specializing in one task. First systematized by Henry Ford, it exemplifies Adam Smith\'s principles of division of labour.',
 keyPoints: [
 'Specialization: workers focus on one repetitive task',
 'Benefits: ↑ Productivity, ↓ Training costs, ↑ Dexterity, ↓ Time wasted switching tasks',
 'Enables economies of scale and lower unit costs',
 'Drawbacks: monotony, alienation, reduced flexibility'
 ],
 analysis: 'Worker specializes in one task → Practice increases dexterity → No time lost switching between tasks → Management can optimize workflow → ↑ Output per worker → ↓ Average cost → Outward shift of the firm\'s supply curve → ↓ Market price → ↑ Consumer surplus.',
 evaluation: 'Over-specialization creates vulnerability: if one stage fails, the whole line stops. It can also cause worker dissatisfaction and requires large markets to justify setup costs. Automation is now replacing many assembly line jobs.',
 realWorldExample: 'Ford\'s Model T assembly line (1913) reduced production time from 12 hours to 93 minutes, cutting prices from $850 to $300 and creating mass-market car ownership.'
 },
 {
 id: 'asset-motive',
 title: 'Asset Motive for Holding Money',
 category: 'macro',
 definition: 'In Keynesian Liquidity Preference Theory, the speculative demand for money held as a store of value to take advantage of future changes in bond prices. When bond prices are expected to fall (interest rates rise), agents hold more cash.',
 keyPoints: [
 'One of three motives: Transactions, Precautionary, and Speculative (Asset)',
 'Inversely related to interest rates: ↓ r → ↑ Bond prices → ↓ Speculative demand for money',
 'Creates the downward-sloping money demand curve',
 'Foundation of the Liquidity Trap at near-zero rates'
 ],
 analysis: 'Interest rates are low → Bond prices are high → Agents expect rates to rise (prices to fall) → They sell bonds and hold cash to avoid capital losses → ↑ Speculative demand for money → Money demand curve shifts right → At very low rates, demand for money becomes perfectly elastic (Liquidity Trap).',
 evaluation: 'The asset motive explains why monetary policy loses effectiveness at low rates. If everyone expects rates can only rise, they hoard cash instead of buying bonds, making QE ineffective at stimulating spending ("pushing on a string").',
 formula: 'M_d^{spec} = f(r^e - r)',
 realWorldExample: 'Japan\'s "lost decades" saw near-zero rates and a liquidity trap, where despite massive QE, households and firms hoarded cash rather than spending or investing.'
 },
 {
 id: 'asset-prices',
 title: 'Asset Prices & the Wealth Effect',
 category: 'macro',
 definition: 'The value of assets such as stocks, bonds, and property, which influence household wealth and spending decisions. Rising asset prices create a positive wealth effect, boosting consumption; falling prices have the opposite effect.',
 keyPoints: [
 'Wealth effect: ↑ Asset prices → ↑ Perceived wealth → ↑ Consumption (C)',
 'Inverse relationship between interest rates and asset prices',
 'Housing wealth effect is particularly strong (housing is largest household asset)',
 'Asset price bubbles can cause financial instability and recessions'
 ],
 analysis: '↓ Interest rates → ↓ Discount rate for future cash flows → ↑ Present value of assets → ↑ Stock and house prices → Households feel wealthier → ↑ Consumption → ↑ AD → Part of the Monetary Transmission Mechanism.',
 evaluation: 'The wealth effect varies by asset class and distribution. Stock market gains mainly benefit the wealthy; housing gains are more widely shared but can create inequality between homeowners and renters. Asset bubbles (2008) can lead to catastrophic busts.',
 formula: 'P_{asset} = \\sum_{t=1}^{\\infty} \\frac{CF_t}{(1+r)^t}',
 realWorldExample: 'UK house prices rose 26% from 2020-2022, boosting the wealth effect and consumer spending, but also widening the wealth gap between generations.'
 },
 {
 id: 'asset-stripping',
 title: 'Asset Stripping',
 category: 'theory',
 definition: 'A corporate strategy where a company is acquired, and its assets are sold off individually to realize value exceeding the market price of the company. Often criticized for destroying jobs and productive capacity.',
 keyPoints: [
 'Acquirer buys undervalued company → Sells assets piecemeal → Pockets the difference',
 'Can unlock value from poorly managed firms',
 'Criticized for short-termism and job destruction',
 'May indicate capital market inefficiency (market undervalued the firm)'
 ],
 analysis: 'Company\'s market cap < Sum of asset values → Private equity firm acquires → Sells property, machinery, brands separately → Pays off debt → Profits from the difference → Workers often lose jobs as operations cease.',
 evaluation: 'Asset stripping can be efficient if resources are reallocated to higher-value uses. But it may destroy going-concern value, tacit knowledge, and supply chain relationships. Regulation and takeover defenses can limit harmful asset stripping.',
 realWorldExample: 'The acquisition and breakup of BHS (2015) saw assets sold, pensions underfunded, and 11,000 jobs lost—prompting calls for stronger takeover regulation.'
 },
 {
 id: 'assisted-areas',
 title: 'Assisted Areas & Regional Policy',
 category: 'policy',
 definition: 'Designated geographic regions eligible for government financial support due to high unemployment, low income, or industrial decline. Part of supply-side regional policy aimed at reducing spatial inequality.',
 keyPoints: [
 'Includes grants, tax relief, and infrastructure investment',
 'Aims to attract firms to deprived areas (regional rebalancing)',
 'EU Structural Funds were a major source (pre-Brexit)',
 'Trade-off: efficiency (let firms locate optimally) vs. equity (spread growth)'
 ],
 analysis: 'Region experiences deindustrialization → ↑ Structural unemployment → Government designates as Assisted Area → Offers grants to relocating firms → ↑ Inward investment → ↑ Employment → Multiplier effect boosts local economy → Regional inequality narrows.',
 evaluation: 'Regional policy can be inefficient if it props up unviable industries or distorts firm location decisions. "Picking winners" often fails. Some argue market forces should determine location, with support focused on education and infrastructure.',
 realWorldExample: 'The UK\'s Levelling Up Fund allocates £4.8bn to left-behind areas, funding transport, town centres, and cultural projects in Assisted Areas.'
 },
 {
 id: 'asymmetric-information',
 title: 'Asymmetric Information Problem',
 category: 'market-failure',
 definition: 'A market failure where one party in a transaction possesses more or better information than the other, leading to suboptimal outcomes. Two main types: Adverse Selection (ex ante) and Moral Hazard (ex post).',
 keyPoints: [
 'Adverse Selection: Hidden information BEFORE transaction (e.g., used car quality)',
 'Moral Hazard: Hidden action AFTER transaction (e.g., insurance changes behavior)',
 'Both lead to market failure and potential market collapse',
 'Solutions: Signaling, screening, contracts, regulation'
 ],
 analysis: 'Seller knows product quality; buyer does not → Buyer offers average price → High-quality sellers exit → Only low-quality ("lemons") remain → Market unravels. Post-contract: Insured person takes more risks → Costs rise → Premiums increase → Adverse selection worsens.',
 evaluation: 'Information asymmetries are pervasive. Markets partially self-correct via warranties, reputation, and certification. But government intervention (mandatory disclosure, consumer protection) is often needed for efficient outcomes.',
 realWorldExample: 'The 2008 financial crisis was partly caused by asymmetric information: banks sold mortgage-backed securities to investors who couldn\'t assess underlying loan quality.'
 },
 {
 id: 'atomistic-competition',
 title: 'Atomistic Competition',
 category: 'theory',
 definition: 'A market structure where firms are so small and numerous that no single firm can influence the market price. Each firm is a "price taker" and the market closely resembles the model of Perfect Competition.',
 keyPoints: [
 'Many small firms, none with market power',
 'Homogeneous products; perfect information',
 'Firms are "price takers": they face a perfectly elastic demand curve',
 'Long-run equilibrium: P = MC = AC (zero economic profit)'
 ],
 analysis: 'Individual firm ↑ price → All customers switch to competitors (infinite cross-elasticity) → Firm loses all sales → Therefore, firm must accept market price → Produces where P = MC → In long run, entry/exit drives P = AC → Allocative and Productive efficiency achieved.',
 evaluation: 'Pure atomistic competition is rare. Most markets feature some product differentiation or barriers. However, the model provides a benchmark for evaluating real-world market outcomes and the efficiency losses from market power.',
 formula: 'P = MR = AR = MC = AC \\text{ (long-run equilibrium)}',
 realWorldExample: 'Agricultural commodity markets (wheat, rice) approximate atomistic competition—thousands of farmers selling identical products at prices set by global exchanges.'
 },
 {
 id: 'auction-theory',
 title: 'Auction Theory in Economics',
 category: 'theory',
 definition: 'The study of how auctions are designed and how bidders behave, with applications to government asset sales, spectrum allocation, and online markets. Key considerations include information revelation, bidder collusion, and revenue maximization.',
 keyPoints: [
 'Types: English (ascending), Dutch (descending), Sealed-bid (first/second price)',
 'Revenue Equivalence Theorem: under certain conditions, all auction formats yield same expected revenue',
 'Winner\'s Curse: winning bidder may overpay if they overestimate value',
 'Auction design affects efficiency and government revenue'
 ],
 analysis: 'Government sells spectrum licenses → Chooses auction format → English auction reveals information (bids visible) → May maximize revenue → But sealed-bid may prevent collusion → Optimal design depends on number of bidders, value correlation, and risk of collusion.',
 evaluation: 'Auction theory won the 2020 Nobel Prize (Milgrom & Wilson). Practical applications include 3G/4G spectrum sales and carbon permit auctions. Poor design can lead to low revenues (UK 3G auction raised £22.5bn; Germany\'s raised only £6bn for similar spectrum).',
 realWorldExample: 'The UK\'s 3G spectrum auction (2000) was designed by economists and raised £22.5bn—far exceeding expectations—by encouraging competitive bidding.'
 },
 {
 id: 'audit-commission',
 title: 'Audit & Public Sector Oversight',
 category: 'policy',
 definition: 'Independent bodies responsible for examining the accounts and efficiency of public sector organizations, ensuring taxpayer money is spent appropriately. In the UK, the National Audit Office (NAO) audits government departments.',
 keyPoints: [
 'Financial audit: checking accounts accuracy and legal compliance',
 'Value for Money (VFM) audit: assessing economy, efficiency, and effectiveness',
 'Independent of government to ensure impartiality',
 'Reports to Parliament/public to enhance accountability'
 ],
 analysis: 'Government department spends £10bn on project → NAO audits → Finds 30% waste/inefficiency → Reports to Parliament → Public scrutiny → Department improves processes → ↑ Allocative efficiency in public spending.',
 evaluation: 'Audits improve accountability but cannot prevent all waste. They are retrospective, identifying problems after money is spent. Preventive measures (better procurement, project management) are also needed.',
 realWorldExample: 'The NAO\'s 2020 report on HS2 revealed cost overruns from £56bn to £106bn, forcing government to reconsider the project scope.'
 },
 {
 id: 'austrian-school',
 title: 'Austrian School of Economics',
 category: 'theory',
 definition: 'A heterodox school of economic thought emphasizing individual choice, entrepreneurship, and the market process. Key figures include Ludwig von Mises and Friedrich Hayek. Skeptical of government intervention and central planning.',
 keyPoints: [
 'Methodological individualism: focus on individual human action',
 'Subjective theory of value: value is determined by individual preferences',
 'Critique of socialism: Hayek\'s "knowledge problem" (prices transmit dispersed information)',
 'Business Cycle Theory: credit expansion causes malinvestment and boom-bust cycles'
 ],
 analysis: 'Central bank ↓ interest rates below natural rate → Artificially cheap credit → ↑ Investment in unsustainable projects → Economy booms → Eventually, malinvestment revealed → Bust and recession → Austrians advocate minimal intervention and sound money.',
 evaluation: 'Austrian economics influenced monetarism and supply-side thinking. Critics argue it lacks empirical rigor and offers no policy response to recessions (liquidationism). Its insights on information and spontaneous order remain influential.',
 realWorldExample: 'Hayek\'s "Road to Serfdom" (1944) warned that central planning leads to authoritarianism. His ideas influenced Thatcher\'s free-market reforms in the 1980s UK.'
 },
 {
 id: 'autarky',
 title: 'Autarky (Economic Self-Sufficiency)',
 category: 'trade',
 definition: 'A state of economic self-sufficiency where a country produces everything it consumes domestically and engages in no international trade. The theoretical baseline for measuring gains from trade.',
 keyPoints: [
 'No imports or exports; consumption limited to domestic production',
 'Opportunity cost of goods = domestic PPC slope',
 'Gains from trade measured as difference between autarky and trade equilibrium',
 'True autarky is rare; even North Korea trades'
 ],
 analysis: 'Under autarky, country consumes on its PPC → Opens to trade → Specializes according to comparative advantage → Trades at world price ratio → Consumes beyond its PPC → Welfare gain = difference between autarky and post-trade consumption.',
 evaluation: 'Autarky is inefficient as it forgoes comparative advantage gains. However, strategic independence (food security, defense industries) may justify some self-sufficiency. COVID-19 renewed interest in supply chain resilience vs. efficiency trade-offs.',
 formula: '\\text{Gains from Trade} = (C_{trade} - C_{autarky})',
 realWorldExample: 'North Korea approaches autarky through "Juche" ideology, resulting in persistent shortages, famine, and technological backwardness compared to South Korea.'
 },
 {
 id: 'automatic-stabilizers',
 title: 'Automatic Stabilisers',
 category: 'policy',
 definition: 'Fiscal mechanisms that automatically adjust government spending and taxation in response to economic fluctuations, stabilizing aggregate demand without requiring deliberate policy action. Examples include progressive taxes and unemployment benefits.',
 keyPoints: [
 'Counter-cyclical: ↓ Taxes and ↑ Spending in recession; reverse in boom',
 'No legislative lag: operate automatically',
 'Smooth consumption over the business cycle',
 'Reduce the multiplier effect of demand shocks'
 ],
 analysis: 'Recession hits → Incomes fall → ↓ Income tax revenue (automatic) → ↑ Unemployment → ↑ Benefit payments (automatic) → Disposable income cushioned → ↓ Fall in consumption → ↓ Decline in AD → Recession is milder than it would otherwise be.',
 evaluation: 'Automatic stabilizers are faster than discretionary policy but cannot fully offset severe recessions. Their effectiveness depends on the size of government and progressivity of taxes. They worsen budget deficits in recessions (cyclical deficit).',
 formula: '\\text{Budget Balance} = (T - G) + \\text{Automatic Adjustments}',
 realWorldExample: 'During COVID-19, UK income tax revenue fell £30bn (automatic) while Universal Credit spending rose £15bn (automatic), stabilizing household incomes.'
 },
 {
 id: 'automation',
 title: 'Automation & Technological Unemployment',
 category: 'macro',
 definition: 'The use of technology to perform tasks previously done by human workers, potentially displacing labor. While automation increases productivity and long-run growth, it can cause structural unemployment in affected industries.',
 keyPoints: [
 'Short-run: Job displacement in routine, repetitive tasks',
 'Long-run: New jobs created; overall employment may rise',
 'Skill-biased technological change: ↑ Demand for high-skilled workers',
 'Increases productivity and shifts LRAS rightward'
 ],
 analysis: 'Firm introduces automation → ↓ Labor demand for routine tasks → Structural unemployment → But ↓ Production costs → ↓ Prices → ↑ Real income → ↑ Demand for other goods → New jobs created elsewhere → Net effect depends on labor market flexibility.',
 evaluation: 'Historical evidence (Industrial Revolution, computers) shows automation creates more jobs than it destroys in the long run. But adjustment can be painful, requiring retraining and labor market policies. AI may be different—affecting cognitive tasks too.',
 realWorldExample: 'Amazon warehouses use 750,000+ robots alongside human workers. While some warehouse jobs were displaced, e-commerce growth created millions of new logistics jobs.'
 },
 {
 id: 'autonomous-consumption',
 title: 'Autonomous Consumption',
 category: 'macro',
 definition: 'The level of consumption that occurs regardless of income level. In the Keynesian consumption function, it represents the intercept—spending financed by savings or borrowing when income is zero.',
 keyPoints: [
 'The "a" or "C₀" term in the consumption function C = a + bY',
 'Represents essential spending: food, shelter, utilities',
 'Changes in autonomous consumption shift the entire consumption function',
 'Distinct from induced consumption, which depends on income'
 ],
 analysis: 'Autonomous consumption ↑ (e.g., consumer confidence rises) → Consumption function shifts upward → At every income level, consumption is higher → AE curve shifts up → New equilibrium at higher Y → The change in Y = ΔC₀ × Multiplier.',
 evaluation: 'Autonomous consumption is influenced by wealth, credit availability, and expectations. In recessions, ↓ Wealth effect (falling house prices) and ↓ Credit availability can reduce autonomous consumption, deepening the downturn.',
 formula: 'C = C_0 + MPC \\times Y_d',
 realWorldExample: 'During 2008-09, falling house prices reduced household wealth, cutting autonomous consumption and deepening the recession beyond the initial financial shock.'
 },
 {
 id: 'average-cost',
 title: 'Average Cost (AC)',
 category: 'theory',
 definition: 'Total cost divided by quantity produced. Comprises Average Fixed Cost (AFC), which falls continuously as output rises, and Average Variable Cost (AVC), which typically U-shaped due to the law of diminishing returns.',
 keyPoints: [
 'AC = TC/Q = AFC + AVC',
 'AFC falls as fixed costs are spread over more units',
 'AVC is U-shaped: initially ↓ (specialization), then ↑ (diminishing returns)',
 'AC is minimized where MC crosses AC (productive efficiency)'
 ],
 analysis: 'As output ↑ → AFC ↓ (spreading fixed costs) → Initially, AVC also ↓ (returns to specialization) → Eventually, diminishing returns set in → AVC ↑ → AC is U-shaped → The minimum point of AC = Productively efficient output.',
 evaluation: 'Understanding AC is crucial for pricing and entry decisions. A firm producing below minimum AC faces higher unit costs than competitors. In Perfect Competition, long-run equilibrium forces all firms to produce at minimum AC.',
 formula: 'AC = \\frac{TC}{Q} = \\frac{FC}{Q} + \\frac{VC}{Q}',
 realWorldExample: 'A car factory with high fixed costs achieves lower AC at high volumes—explaining why automakers pursue scale and consolidation.'
 },
 {
 id: 'average-cost-pricing',
 title: 'Average Cost Pricing (Regulation)',
 category: 'policy',
 definition: 'A regulatory pricing rule for natural monopolies that sets price equal to average cost (P = AC), allowing the firm to cover total costs and earn a normal profit, while charging lower prices than an unregulated monopoly.',
 keyPoints: [
 'Used to regulate natural monopolies (utilities, railways)',
 'Prevents supernormal profit (P = AC → Normal profit only)',
 'More allocatively efficient than monopoly pricing, but P > MC still',
 'Alternative to Marginal Cost Pricing (P = MC), which may require subsidies'
 ],
 analysis: 'Natural monopoly has ↓ AC over large range → If unregulated, sets P >> AC → Supernormal profit, high prices → Regulator imposes P = AC → Output ↑, Price ↓ → Consumer welfare ↑ → But still P > MC → Some deadweight loss remains.',
 evaluation: 'Average Cost Pricing balances efficiency and financial viability. Unlike P = MC pricing (which may require subsidies for loss-making natural monopolies), P = AC ensures the firm breaks even. But it dulls incentives to cut costs (rate-of-return regulation problem).',
 formula: 'P = AC \\implies \\pi = 0 \\text{ (normal profit)}',
 realWorldExample: 'UK water companies are regulated by Ofwat using a form of price cap regulation that approximates Average Cost Pricing, allowing cost recovery plus a regulated return.'
 },
 {
 id: 'avoidable-costs',
 title: 'Avoidable Costs',
 category: 'theory',
 definition: 'Costs that can be eliminated by a business decision, such as discontinuing a product line or exiting a market. In the short run, only variable costs are avoidable; in the long run, all costs are avoidable.',
 keyPoints: [
 'Short-run avoidable costs = Variable Costs (wages, raw materials)',
 'Fixed costs are unavoidable in the short run (rent, loan repayments)',
 'Long-run: all costs are avoidable (can exit the industry entirely)',
 'Relevant for shutdown and exit decisions'
 ],
 analysis: 'Firm considers shutdown → If P < AVC, it cannot cover variable costs → Each unit sold increases losses → Rational to shut down immediately. If P > AVC but P < AC → Firm covers variable costs, contributes to fixed → Continue in short run, but exit in long run.',
 evaluation: 'The distinction between avoidable and unavoidable costs is crucial for rational decision-making. Sunk costs (past, irrecoverable) should be ignored; only avoidable costs matter for forward-looking decisions.',
 formula: '\\text{Shutdown condition: } P < AVC \\text{ (short run)}',
 realWorldExample: 'Airlines during COVID-19 faced this decision: grounding planes avoided variable costs (fuel, crew) but fixed costs (leases, maintenance) continued—many entered bankruptcy.'
 },
 // ===== PHASE 2: BANKING, MONETARY, AND ADVANCED THEORY =====
 {
 id: 'bank-notes-coins-uk',
 title: 'Bank Notes and Coins in UK',
 category: 'macro',
 definition: 'Physical currency issued by the Bank of England (notes) and the Royal Mint (coins), representing the narrowest measure of money (M0). Notes are liabilities of the central bank, while coins are liabilities of the Treasury.',
 keyPoints: [
 'Notes issued by Bank of England are legal tender in England and Wales',
 'Scottish and Northern Irish banks can issue notes backed by BoE deposits',
 'Coins are produced by the Royal Mint and are legal tender up to certain limits',
 'Physical cash represents only ~3% of total money supply (M4)'
 ],
 analysis: 'Central bank prints notes → Commercial banks exchange reserves for cash → Public withdraws cash from ATMs → Cash enters circulation → If velocity of cash ↑, spending ↑ → AD shifts right. However, the rise of digital payments is causing a structural decline in cash usage.',
 evaluation: 'Cash provides anonymity and financial inclusion for the unbanked, but it facilitates tax evasion and criminal activity. Central banks face a dilemma: eliminating cash improves monetary control but raises privacy and inclusion concerns.',
 realWorldExample: 'Sweden has nearly eliminated cash (only 1% of transactions), while the UK still sees significant cash use, particularly among older demographics and small businesses.'
 },
 {
 id: 'bank-of-england',
 title: 'Bank of England',
 category: 'macro',
 definition: 'The central bank of the United Kingdom, established in 1694 and nationalized in 1946. It is responsible for monetary policy, financial stability, and acting as the lender of last resort. The Monetary Policy Committee (MPC) sets the base rate.',
 keyPoints: [
 'Operational independence granted in 1997 (sets interest rates)',
 'Inflation target: 2% CPI (symmetric target)',
 'Functions: Monetary policy, prudential regulation (via PRA), financial stability',
 'Lender of last resort during banking crises'
 ],
 analysis: 'MPC assesses inflation outlook → If inflation > 2% target, ↑ base rate → ↑ Cost of borrowing → ↓ C and I → ↓ AD → Disinflationary pressure. The transmission mechanism operates through interest rate, exchange rate, asset price, and expectations channels.',
 evaluation: 'Central bank independence is credited with anchoring inflation expectations. However, critics argue the BoE has been captured by financial sector interests and that its QE policies have exacerbated wealth inequality by inflating asset prices.',
 formula: 'r = r^* + \\pi^e + \\alpha(\\pi - \\pi^T) + \\beta(Y - Y^*)',
 realWorldExample: 'The BoE raised base rates from 0.1% to 5.25% between 2021-2023 to combat post-COVID inflation—the fastest tightening cycle in modern history.'
 },
 {
 id: 'bank-regulation-uk',
 title: 'Bank Regulation UK',
 category: 'policy',
 definition: 'The framework of rules and oversight governing UK banks, designed to ensure financial stability, protect depositors, and prevent systemic crises. Key regulators include the Prudential Regulation Authority (PRA), Financial Conduct Authority (FCA), and Financial Policy Committee (FPC).',
 keyPoints: [
 'Basel III: International standards for capital adequacy and liquidity',
 'PRA (part of BoE): Microprudential regulation of individual banks',
 'FPC: Macroprudential regulation (systemic risks, countercyclical buffers)',
 'FSCS: Deposit insurance up to £85,000 per person, per institution'
 ],
 analysis: 'Bank takes excessive risks → If no regulation, moral hazard (too big to fail) → Systemic crisis → Basel III requires ↑ capital buffers → Banks must hold Tier 1 capital ≥8% of RWA → ↓ Leverage → ↓ Systemic risk → But ↓ Lending capacity.',
 evaluation: 'Tighter regulation reduces crisis probability but may constrain credit creation, slowing economic growth. There is a trade-off between financial stability and economic dynamism. Shadow banking may grow to circumvent regulation.',
 formula: 'CAR = \\frac{\\text{Tier 1 + Tier 2 Capital}}{\\text{Risk-Weighted Assets}} \\geq 8\\%',
 realWorldExample: 'After the 2008 crisis, UK banks like RBS required government bailouts. Subsequent regulation (ring-fencing) separated retail and investment banking to protect depositors.'
 },
 {
 id: 'big-four-uk-banks',
 title: 'Big Four UK Banks',
 category: 'macro',
 definition: 'The four largest retail banks in the UK: Barclays, HSBC, Lloyds Banking Group, and NatWest Group. They collectively control ~70% of UK current accounts, raising concerns about oligopolistic market structure and barriers to entry.',
 keyPoints: [
 'Oligopoly structure: High market concentration, barriers to entry',
 'Network effects and switching costs lock in customers',
 'CMA has mandated Open Banking to increase competition',
 'Subject to ring-fencing rules separating retail and investment arms'
 ],
 analysis: 'High concentration → Limited price competition (similar interest rates) → Potential tacit collusion → Consumer welfare ↓ (higher fees, lower savings rates) → CMA intervenes with Open Banking → ↑ Data portability → ↑ Contestability → New entrants (Monzo, Starling) can compete.',
 evaluation: 'Despite regulatory efforts, the Big Four retain dominance due to brand trust and economies of scale. Challenger banks struggle to achieve profitability at scale. The market demonstrates characteristics of a "contestable oligopoly" rather than perfect competition.',
 realWorldExample: 'Open Banking (2018) allowed fintech apps to access bank data with customer consent, enabling services like instant balance checks and payment initiation—increasing competitive pressure on incumbents.'
 },
 {
 id: 'boe-exchange-rates',
 title: 'Bank of England and Exchange Rates',
 category: 'trade',
 definition: 'While the UK operates a floating exchange rate regime, the Bank of England can influence the pound\'s value through interest rate decisions and, rarely, direct forex intervention. Higher UK rates attract capital inflows, appreciating sterling.',
 keyPoints: [
 'Floating rate: Market-determined, BoE does not target a specific rate',
 'Interest rate differentials: ↑ UK rates → Hot money inflows → ↑ £',
 'Rare intervention: BoE may buy/sell forex to smooth volatility',
 'Exchange rate affects import prices, inflation, and competitiveness'
 ],
 analysis: 'BoE ↑ base rate → ↑ UK interest rate relative to US/EU → Investors buy GBP to access higher returns → ↑ Demand for GBP → £ appreciates → ↓ Import prices → ↓ Cost-push inflation → But ↓ Export competitiveness → ↑ Trade deficit (J-Curve adjustment period).',
 evaluation: 'A strong pound benefits consumers (cheaper imports) but harms exporters. The BoE must balance inflation control (favoring appreciation) with export competitiveness (favoring depreciation). In practice, the exchange rate is a byproduct of monetary policy, not a target.',
 formula: '\\text{Interest Rate Parity: } \\frac{F}{S} = \\frac{1 + r_d}{1 + r_f}',
 realWorldExample: 'After the 2016 Brexit referendum, the pound fell 15% as markets priced in lower growth expectations—demonstrating how confidence shocks override interest differentials.'
 },
 {
 id: 'base-rates',
 title: 'Base Rates (Definition & Explanation)',
 category: 'macro',
 definition: 'The official interest rate set by the Bank of England\'s Monetary Policy Committee (MPC), at which it lends to commercial banks. It serves as the benchmark for all other interest rates in the economy and is the primary tool of monetary policy.',
 keyPoints: [
 'MPC meets 8 times per year to set the rate',
 'Commercial banks borrow at base rate, then lend at base rate + margin',
 'Changes transmit to mortgages, savings rates, and business loans',
 'Zero Lower Bound (ZLB): Rates cannot go significantly below 0%'
 ],
 analysis: 'MPC ↓ base rate → Commercial banks ↓ lending rates → ↓ Cost of mortgages and business loans → ↑ Consumer spending (refinancing, new purchases) → ↑ Business investment (lower hurdle rate for projects) → ↑ AD → Multiplier effect → ↑ Real GDP.',
 evaluation: 'Base rate changes work with a lag (18-24 months). Near the ZLB, conventional monetary policy is exhausted—requiring unconventional tools (QE, forward guidance). Transmission also depends on bank willingness to lend and consumer confidence.',
 formula: 'r_{\\text{market}} = r_{\\text{base}} + \\text{risk premium} + \\text{margin}',
 realWorldExample: 'The BoE cut base rates from 5% to 0.5% during the 2008 crisis, then to 0.1% in 2020—reaching the effective lower bound both times.'
 },
 {
 id: 'basis-points',
 title: 'Basis Points',
 category: 'macro',
 definition: 'A unit of measurement equal to 1/100th of a percentage point (0.01%). Used in finance and monetary policy to express precise changes in interest rates, yields, or spreads. 100 basis points (bps) = 1 percentage point.',
 keyPoints: [
 '1 bp = 0.01%, 25 bps = 0.25%, 100 bps = 1%',
 'Standard unit for discussing rate changes (avoids ambiguity)',
 'Used for interest rates, bond yields, credit spreads, fee structures',
 'Precision matters: a 50bp change in rates significantly affects mortgage payments'
 ],
 analysis: 'MPC raises rates by 50 bps (0.5%) → On a £200,000 mortgage, annual cost rises by ~£600-1000 → ↓ Disposable income → ↓ Consumption → ↓ AD. The cumulative effect of multiple 25-75bp hikes can be substantial for indebted households.',
 evaluation: 'The use of basis points reflects the high sensitivity of financial markets to small rate changes. A 25bp hike may seem minor but signals central bank intent—expectations effects can be larger than the direct interest rate impact.',
 formula: '1 \\text{ bp} = 0.01\\% = 0.0001',
 realWorldExample: 'When the Fed raised rates by 75 bps in 2022 (the largest hike since 1994), it signaled aggressive inflation-fighting intent, causing global market volatility.'
 },
 {
 id: 'bond-market-interest-rates',
 title: 'Bond Market and Interest Rates',
 category: 'macro',
 definition: 'The market for debt securities (bonds) issued by governments and corporations. Bond prices and interest rates (yields) have an inverse relationship: when bond prices fall, yields rise, and vice versa. This relationship is central to understanding monetary policy transmission.',
 keyPoints: [
 'Inverse relationship: ↑ Bond prices → ↓ Yields (and vice versa)',
 'Government bonds (gilts) are risk-free benchmarks',
 'Yield curve: Plots yields across different maturities (typically upward-sloping)',
 'Central bank bond purchases (QE) raise prices, lowering yields'
 ],
 analysis: 'Existing bond pays £50 annual coupon, face value £1000 (5% yield) → Market rate falls to 3% → New bonds pay only 3% → Existing bond becomes more attractive → Demand ↑ → Price rises to ~£1667 → Yield falls to match market (50/1667 ≈ 3%).',
 evaluation: 'The bond market is crucial for transmitting monetary policy. QE works by buying bonds, raising prices, lowering yields, and pushing investors into riskier assets. However, this can inflate asset bubbles and distort market signals about risk.',
 formula: 'Yield = \\frac{\\text{Coupon Payment}}{\\text{Market Price}} \\times 100',
 realWorldExample: 'In September 2022, the UK "mini-budget" caused gilt yields to spike as markets lost confidence in fiscal sustainability—forcing the BoE to intervene with emergency bond purchases.'
 },
 {
 id: 'barter-economy',
 title: 'Barter Economy',
 category: 'theory',
 definition: 'An economic system where goods and services are exchanged directly for other goods and services, without using money as a medium of exchange. It requires a "double coincidence of wants" for trade to occur.',
 keyPoints: [
 'Double coincidence of wants: Both parties must want what the other has',
 'Extremely inefficient: High transaction costs, no store of value',
 'Explains the emergence of money as a solution to barter inefficiencies',
 'Still exists in informal economies and during currency crises'
 ],
 analysis: 'Farmer has wheat, wants shoes → Must find cobbler who wants wheat → If cobbler wants meat, no trade occurs → High search and transaction costs → Limited specialization possible → Low productivity → Money emerges as a universal medium, eliminating the double coincidence problem.',
 evaluation: 'Barter systems demonstrate why money is essential for complex economies. However, barter can resurface during hyperinflation (when money loses value) or in peer-to-peer exchanges (modern "sharing economy" platforms).',
 realWorldExample: 'During Zimbabwe\'s hyperinflation (2008), businesses resorted to barter as the Zimbabwean dollar became worthless—bread was traded for fuel, and wages were paid in groceries.'
 },
 {
 id: 'basic-economic-problem',
 title: 'Basic Economic Problem',
 category: 'theory',
 definition: 'The fundamental challenge of allocating scarce resources among unlimited wants. Scarcity forces societies to make choices, giving rise to the study of economics. Every choice involves an opportunity cost.',
 keyPoints: [
 'Scarcity: Resources (land, labor, capital) are finite',
 'Unlimited wants: Human desires exceed available resources',
 'Choice: Must decide what, how, and for whom to produce',
 'Opportunity cost: The next best alternative forgone'
 ],
 analysis: 'Society has limited resources → Cannot satisfy all wants → Must prioritize → Choosing to build hospitals means fewer schools (opportunity cost) → This trade-off is illustrated by the Production Possibility Curve (PPC) → Points inside the PPC represent inefficiency; on the curve represents productive efficiency.',
 evaluation: 'The basic economic problem is universal—even wealthy nations face scarcity. However, the nature of scarcity evolves: advanced economies face time scarcity and environmental limits rather than basic resource constraints.',
 formula: 'OC = \\frac{\\text{Units of Good Y Forgone}}{\\text{Units of Good X Gained}}',
 realWorldExample: 'Government budget decisions exemplify the basic economic problem: every £1 spent on defense is £1 not spent on healthcare—forcing explicit trade-offs.'
 },
 {
 id: 'base-year',
 title: 'Base Year',
 category: 'macro',
 definition: 'A reference year against which economic statistics (like GDP, price indices) are measured to adjust for inflation and enable real comparisons over time. Data from other years is expressed relative to the base year, which is typically set to 100.',
 keyPoints: [
 'Used to calculate real GDP (removing inflation effects)',
 'Base year index = 100; other years compared relatively',
 'Periodically updated to reflect current consumption patterns',
 'Essential for measuring economic growth accurately'
 ],
 analysis: 'Nominal GDP 2024 = £2.5tn → GDP deflator (base 2015 = 100) is 120 → Real GDP (2015 prices) = £2.5tn / 1.2 = £2.08tn → This allows comparison with 2015 GDP to measure real growth, removing the inflation illusion.',
 evaluation: 'Base year choice matters: an outdated base year may overweight declining sectors. The ONS regularly rebases (chain-linking) to maintain accuracy. However, quality improvements in goods are difficult to capture, potentially understating real growth.',
 formula: 'Real\\ GDP = \\frac{Nominal\\ GDP}{GDP\\ Deflator} \\times 100',
 realWorldExample: 'The UK rebased its GDP calculations to 2019 prices in 2023, changing historical growth estimates slightly as weights shifted to reflect modern consumption patterns.'
 },
 {
 id: 'basic-rate-income-tax',
 title: 'Basic Rate of Income Tax',
 category: 'policy',
 definition: 'The standard rate of income tax applied to earnings above the personal allowance threshold in the UK. As of 2024, the basic rate is 20% on income between £12,570 and £50,270, forming part of a progressive tax structure.',
 keyPoints: [
 'Progressive structure: Higher earners pay higher marginal rates',
 'Fiscal drag: If thresholds not updated, inflation pushes more into higher bands',
 'Work incentives: High marginal rates may reduce labor supply',
 'Primary source of government revenue (~30% of total receipts)'
 ],
 analysis: 'Worker earns £30,000 → First £12,570 tax-free (personal allowance) → Next £17,430 taxed at 20% = £3,486 tax → Effective rate = 11.6% (lower than marginal rate) → Progressive taxation reduces post-tax income inequality.',
 evaluation: 'While progressive taxes promote vertical equity, high marginal rates create substitution effects (leisure for work). The optimal tax rate balances equity and efficiency—the Laffer Curve suggests rates above a threshold reduce revenue.',
 formula: 'Tax = (Income - Allowance) \\times Rate',
 realWorldExample: 'Frozen tax thresholds during high inflation (2022-24) created significant fiscal drag, pulling millions of workers into higher bands—an implicit tax increase.'
 },
 {
 id: 'benefit-principle',
 title: 'Benefit Principle',
 category: 'policy',
 definition: 'A principle of taxation stating that individuals should pay taxes in proportion to the benefits they receive from public goods and services. It contrasts with the "ability to pay" principle and is the theoretical basis for hypothecated taxes.',
 keyPoints: [
 'Pay according to benefits received, not ability',
 'Challenges: Public goods are non-excludable (can\'t link benefit to payment)',
 'Applied through hypothecated taxes (fuel duty → roads)',
 'Problem: Would require the poor to pay more for police/defense'
 ],
 analysis: 'User charges for roads (tolls) → Those who drive more, pay more → Directly links payment to benefit → Efficient allocation (internalizes congestion externality) → But excludes low-income users → Horizontal equity achieved, vertical equity violated.',
 evaluation: 'The benefit principle is efficient but inequitable. It cannot fund pure public goods (defense, justice) where benefits are diffuse and non-excludable. A hybrid approach—benefit taxes for club goods, ability-based taxes for public goods—is most practical.',
 realWorldExample: 'National Insurance in the UK is partly benefit-based: contributions "earn" entitlement to the state pension—linking payment to future benefits.'
 },
 {
 id: 'benefits-in-kind',
 title: 'Benefits in Kind',
 category: 'policy',
 definition: 'Non-cash compensation provided by employers to employees, such as company cars, private health insurance, or gym memberships. These are taxable as they constitute additional income, with values calculated using HMRC rules.',
 keyPoints: [
 'Taxed as income; employer must file P11D forms',
 'Common examples: Company cars, health insurance, loans below market rate',
 'Class 1A NICs payable by employer on value of benefits',
 'Can be used for tax optimization (some benefits taxed favorably)'
 ],
 analysis: 'Employer provides company car worth £8,000/year in taxable benefit → Employee in 40% band pays £3,200 additional tax → But if paid as salary, employee and employer both pay NICs → BIK may be more tax-efficient for both parties.',
 evaluation: 'Benefits in kind can distort compensation structures, encouraging non-cash payments to avoid tax. HMRC continuously updates valuation rules to close loopholes, but complexity creates compliance costs and potential for avoidance.',
 realWorldExample: 'Electric company cars have very low benefit-in-kind rates (2% in 2024) to incentivize green choices—demonstrating how tax policy shapes behavior.'
 },
 {
 id: 'bear-market',
 title: 'Bear Market',
 category: 'macro',
 definition: 'A market condition characterized by a sustained decline in asset prices, typically defined as a fall of 20% or more from recent highs. Bear markets reflect widespread pessimism and often precede or accompany economic recessions.',
 keyPoints: [
 'Definition: ≥20% decline from recent peak',
 'Causes: Recession fears, rising interest rates, external shocks',
 'Negative wealth effect: ↓ Asset prices → ↓ Consumer spending',
 'Contrasts with Bull Market (sustained price rises)'
 ],
 analysis: 'Economic uncertainty ↑ → Investors sell equities → Prices fall → Negative wealth effect → ↓ Consumer confidence → ↓ C (consumption) → ↓ AD → Firms cut investment (↓ I) → Self-reinforcing cycle → Potential recession.',
 evaluation: 'Bear markets are painful but serve a corrective function—deflating bubbles and reallocating capital from overvalued sectors. Central bank intervention (rate cuts, QE) can shorten bear markets but may create moral hazard and zombie firms.',
 realWorldExample: 'The 2022 bear market saw the S&P 500 fall 25% as the Fed aggressively raised rates to combat inflation—ending the post-2009 bull run.'
 },
 {
 id: 'black-market',
 title: 'Black Market in Economics',
 category: 'market-failure',
 definition: 'An illegal market where goods or services are traded outside of official channels, often to evade taxes, regulations, or price controls. Black markets emerge when legal supply fails to meet demand at the controlled price.',
 keyPoints: [
 'Caused by: Price ceilings, prohibitions, high taxes, rationing',
 'Prices typically exceed legal market prices',
 'No consumer protection, quality control, or legal recourse',
 'Represents allocative inefficiency and lost tax revenue'
 ],
 analysis: 'Government imposes price ceiling below equilibrium → Quantity demanded > Quantity supplied → Shortage emerges → Sellers meet excess demand illegally at higher prices → Black market clears the market but at efficiency cost (resources spent evading enforcement).',
 evaluation: 'Black markets signal that price controls are creating distortions. While they provide goods to willing buyers, they foster criminality, evade taxation, and often exploit vulnerable populations. The solution is addressing the underlying market failure, not prohibition.',
 realWorldExample: 'Rent controls in cities like San Francisco and Berlin have created black markets for housing, with under-the-table payments ("key money") to secure scarce apartments.'
 },
 {
 id: 'bid-ask-spread',
 title: 'Bid-Ask Spread',
 category: 'macro',
 definition: 'The difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask) for an asset. It represents the transaction cost and profit margin for market makers.',
 keyPoints: [
 'Bid = Buying price; Ask = Selling price',
 'Narrow spreads indicate liquid, efficient markets',
 'Wide spreads indicate illiquidity, uncertainty, or low volume',
 'Market makers profit from the spread'
 ],
 analysis: 'GBP/USD quote: Bid 1.2500, Ask 1.2502 → Spread = 2 pips (0.0002) → Trader buys at 1.2502 → Immediately selling = 1.2500 → Loss of 2 pips → Spread is the cost of immediate execution → Wider spreads in volatile or illiquid markets.',
 evaluation: 'The bid-ask spread reflects market efficiency. High-frequency trading has compressed spreads in major markets (improving efficiency) but may increase volatility during stress. Regulators monitor spreads as indicators of market health.',
 formula: 'Spread = Ask - Bid',
 realWorldExample: 'During the March 2020 COVID crash, bid-ask spreads in corporate bond markets widened dramatically, indicating severe illiquidity—prompting Fed intervention.'
 },
 {
 id: 'bilateral-trade',
 title: 'Bilateral Trade',
 category: 'trade',
 definition: 'Trade agreements or flows between two countries, as opposed to multilateral trade involving multiple nations. Bilateral deals set tariffs, quotas, and regulatory standards for trade between the specific partner countries.',
 keyPoints: [
 'Faster to negotiate than multilateral deals',
 'Can create trade diversion (away from efficient non-partners)',
 'May include non-trade provisions (IP, services, investment)',
 'Growing trend as WTO multilateral rounds stall'
 ],
 analysis: 'Country A and B sign FTA → Tariffs between A and B fall to zero → Trade creation: A imports from more efficient B instead of domestic production → But trade diversion: A may import from less efficient B instead of more efficient C (non-member) → Net welfare effect ambiguous.',
 evaluation: 'Bilateral deals offer flexibility but fragment the global trading system. The "spaghetti bowl" of overlapping bilateral agreements creates complexity and diverts attention from multilateral liberalization. Still, they can be stepping stones to broader integration.',
 realWorldExample: 'Post-Brexit, the UK pursued bilateral deals with Australia, New Zealand, and Japan—opting for speed over the comprehensive access of EU membership.'
 },
 {
 id: 'bilateral-monopoly',
 title: 'Bilateral Monopoly',
 category: 'market-failure',
 definition: 'A market structure with a single seller (monopoly) facing a single buyer (monopsony). The equilibrium price and quantity are indeterminate—determined by bargaining power rather than market forces.',
 keyPoints: [
 'Monopoly wants high price; Monopsony wants low price',
 'Outcome depends on relative bargaining power',
 'Common in labor markets (union vs. single employer)',
 'May result in more efficient outcomes than pure monopoly or monopsony'
 ],
 analysis: 'Monopoly sets price where MR = MC (high price) → Monopsony sets price where MC_L = MRP_L (low price) → Actual price is between these extremes → Bargaining determines who captures the surplus → Total output may approach competitive levels if bargaining is efficient.',
 evaluation: 'Bilateral monopoly can paradoxically improve efficiency compared to one-sided market power. The monopsony buyer counteracts monopoly pricing, and vice versa. However, bargaining costs and potential for deadlock remain concerns.',
 realWorldExample: 'Wage negotiations between the National Union of Mineworkers and the National Coal Board (pre-privatization) exemplified bilateral monopoly in the UK labor market.'
 },
 {
 id: 'black-monday-1987',
 title: 'Black Monday (Stock Market Crash)',
 category: 'macro',
 definition: 'October 19, 1987—the single largest one-day percentage decline in stock market history, with the Dow Jones Industrial Average falling 22.6%. The crash was triggered by computerized trading (program trading) and spread globally.',
 keyPoints: [
 'Dow fell 508 points (22.6%) in one day',
 'Program trading amplified selling (portfolio insurance strategies)',
 'Contagion: Global markets crashed simultaneously',
 'Led to introduction of circuit breakers and trading halts'
 ],
 analysis: 'US trade deficit concerns + rising interest rates → Selling pressure → Portfolio insurance programs automatically sold futures as prices fell → Selling begat more selling (positive feedback loop) → Liquidity evaporated → Prices collapsed → Circuit breakers did not exist to halt trading.',
 evaluation: 'Black Monday revealed the systemic risks of algorithmic trading. Regulators responded with circuit breakers (trading halts) and improved coordination. The economy did not enter recession—suggesting financial markets can decouple from real activity in the short run.',
 realWorldExample: 'The VIX "fear index" was created after Black Monday to measure market volatility, becoming a key indicator of investor sentiment and market stress.'
 },
 {
 id: 'black-thursday-1929',
 title: 'Black Thursday 1929',
 category: 'macro',
 definition: 'October 24, 1929—the first day of the Wall Street Crash that marked the beginning of the Great Depression. Panic selling overwhelmed the market, though bankers temporarily stabilized prices before the collapse continued on Black Tuesday (October 29).',
 keyPoints: [
 '12.9 million shares traded—unprecedented volume',
 'Margin trading amplified losses (investors borrowed to buy stocks)',
 'Preceded by speculative bubble in equities',
 'Triggered the Great Depression (GDP fell 30%, unemployment reached 25%)'
 ],
 analysis: 'Speculative bubble in 1920s → Stocks bought on margin (10% down) → Prices peaked, then fell → Margin calls forced liquidation → Selling begat more selling → Wealth destruction → ↓ C (negative wealth effect) → Bank failures → ↓ Money supply → ↓ AD → Depression.',
 evaluation: 'The 1929 crash demonstrated the dangers of leveraged speculation and the absence of deposit insurance (bank runs). Keynesian analysis suggests fiscal stimulus was needed, but Hoover\'s austerity deepened the depression. Lessons informed post-2008 policy responses.',
 realWorldExample: 'The Glass-Steagall Act (1933) separated commercial and investment banking in response to the crash—a regulation partially repealed in 1999 and blamed by some for the 2008 crisis.'
 },
 {
 id: 'black-wednesday-erm',
 title: 'Black Wednesday (ERM Crisis)',
 category: 'trade',
 definition: 'September 16, 1992—the day the UK was forced to withdraw from the European Exchange Rate Mechanism (ERM) after failing to defend the pound\'s peg to the Deutsche Mark. The crisis cost the Treasury £3.4 billion and humiliated the Conservative government.',
 keyPoints: [
 'UK joined ERM in 1990 at DM 2.95, with ±6% bands',
 'German reunification caused high German interest rates',
 'UK forced to match high rates despite recession—unsustainable',
 'Speculators (George Soros) bet billions against the pound'
 ],
 analysis: 'UK recession → Pound overvalued at DM 2.95 → Speculators sold £ expecting devaluation → BoE raised rates to 12%, then 15% (to attract capital inflows) → Intervention failed (forex reserves depleted) → UK suspended ERM membership → £ fell 15% → Monetary policy regained independence.',
 evaluation: 'Black Wednesday demonstrated the "impossible trinity": the UK could not maintain a fixed exchange rate, free capital flows, and independent monetary policy simultaneously. Post-ERM, the UK adopted inflation targeting with a floating rate—a more sustainable framework.',
 realWorldExample: 'George Soros reportedly made £1 billion profit from shorting the pound—earning the nickname "the man who broke the Bank of England."'
 },
 {
 id: 'bill-of-exchange',
 title: 'Bill of Exchange',
 category: 'macro',
 definition: 'A written, unconditional order by one party (drawer) directing another party (drawee) to pay a specific sum to a third party (payee) at a specified future date. Bills of exchange are negotiable instruments used in trade finance.',
 keyPoints: [
 'Used to finance international trade (exporter draws on importer)',
 'Can be discounted for immediate cash at a bank',
 'Maturity typically 30-180 days',
 'Creates a form of short-term credit'
 ],
 analysis: 'Exporter sells goods to importer → Exporter draws bill for £100,000 payable in 90 days → Importer accepts → Exporter can hold to maturity or discount at bank (receives ~£98,000 immediately) → Bank collects £100,000 at maturity → Trade is financed without immediate cash transfer.',
 evaluation: 'Bills of exchange reduce trade finance costs and risks, but require trust and legal enforceability. In modern trade, letters of credit and open account terms have partially displaced bills, though they remain common in commodity trading.',
 realWorldExample: 'The London money market historically specialized in discounting bills of exchange—establishing the City as a global financial center in the 19th century.'
 },
 {
 id: 'government-bills',
 title: 'Government Bills (Treasury Bills)',
 category: 'macro',
 definition: 'Short-term government securities with maturities of one year or less, sold at a discount to face value and redeemed at par at maturity. The UK Treasury issues T-bills to manage short-term government borrowing needs.',
 keyPoints: [
 'Zero-coupon: Sold below face value, redeemed at par',
 'Maturities: 1, 3, 6, or 12 months typically',
 'Considered risk-free: Backed by government\'s taxing power',
 'Used by central banks for open market operations'
 ],
 analysis: 'Government needs short-term funding → Issues T-bill with £100 face value at £99 (1% discount) → Investor buys for £99 → Receives £100 at maturity → Return = 1% (annualized: ~4% for 3-month bill) → BoE can buy/sell T-bills to adjust money supply.',
 evaluation: 'T-bills are the safest, most liquid short-term investment, setting the "risk-free rate" benchmark. However, yields are low—often below inflation, causing real value erosion for risk-averse investors.',
 formula: 'Yield = \\frac{Face\\ Value - Purchase\\ Price}{Purchase\\ Price} \\times \\frac{365}{Days\\ to\\ Maturity}',
 realWorldExample: 'During the COVID-19 crisis, the UK dramatically increased T-bill issuance to fund the furlough scheme and NHS spending—managing cash flow before longer-term gilts were sold.'
 },
 {
 id: 'baumols-cost-disease',
 title: 'Baumol\'s Cost Disease',
 category: 'theory',
 definition: 'A phenomenon identified by William Baumol where wages rise in sectors with no productivity growth because workers must be paid competitively with high-productivity sectors. This explains why services like healthcare and education become relatively more expensive over time.',
 keyPoints: [
 'Productivity growth in manufacturing > services',
 'Service sector wages must match manufacturing to attract workers',
 'Unit labor costs rise in low-productivity sectors',
 'Explains the long-run rise in healthcare and education costs relative to goods'
 ],
 analysis: 'Manufacturing productivity ↑ 3% annually → Manufacturing wages ↑ 3% (maintaining unit costs) → Healthcare productivity ↑ 0.5% → Healthcare wages must also ↑ 3% (to compete for workers) → Healthcare unit labor costs ↑ 2.5% annually → Healthcare prices rise faster than goods prices.',
 evaluation: 'Baumol\'s cost disease is not truly a "disease"—it reflects successful productivity growth in progressive sectors. The solution is not to suppress service sector wages but to accept that services will absorb a growing share of GDP as living standards rise.',
 formula: '\\frac{\\Delta W_{service}}{W_{service}} = \\frac{\\Delta W_{mfg}}{W_{mfg}} \\implies \\frac{\\Delta ULC_{service}}{ULC_{service}} > 0',
 realWorldExample: 'A string quartet requires four musicians for a 30-minute piece—same as 200 years ago. But musicians\' wages have risen with the general economy, making live classical music increasingly expensive relative to recorded music.'
 },
 {
 id: 'behavioural-economics',
 title: 'Behavioural Economics',
 category: 'theory',
 definition: 'A field combining psychology and economics to study how cognitive biases, heuristics, and social factors influence economic decisions. It challenges the neoclassical assumption of perfectly rational, utility-maximizing agents.',
 keyPoints: [
 'Key concepts: Bounded rationality, Loss aversion, Framing, Nudges',
 'Prospect Theory: People weigh losses more than equivalent gains (~2:1)',
 'Heuristics: Mental shortcuts that lead to systematic biases',
 'Policy application: Libertarian paternalism (nudges)'
 ],
 analysis: 'Rational agent: evaluates options using expected utility → Behavioral agent: uses heuristics (anchoring, availability) → Subject to biases (present bias, overconfidence) → Decisions deviate systematically from rational predictions → Nudges can "correct" behavior without restricting choice.',
 evaluation: 'Behavioural economics explains market anomalies (bubbles, under-saving) but risks paternalism—who decides the "correct" behavior? Critics argue it can be used to manipulate rather than help. The field has transformed policy design (auto-enrollment pensions) but faces replication challenges.',
 formula: 'V(x) = x^{\\alpha} \\text{ for gains}; V(x) = -\\lambda(-x)^{\\beta} \\text{ for losses, } \\lambda > 1',
 realWorldExample: 'Auto-enrollment in UK workplace pensions (2012) exploited default bias: participation rose from 55% to 90% without mandating saving—a classic nudge application.'
 },
 {
 id: 'behavioural-theories-firm',
 title: 'Behavioural Theories of the Firm',
 category: 'theory',
 definition: 'Theories that challenge the profit-maximization assumption, suggesting firms are coalitions of groups (managers, workers, shareholders) with conflicting goals. Key theories include Satisficing (Simon), Sales Maximization (Baumol), and Managerial Utility (Williamson).',
 keyPoints: [
 'Satisficing: Firms seek "good enough" profits, not maximum',
 'Sales Maximization: Managers maximize revenue subject to profit constraint',
 'Managerial Utility: Managers maximize perks, staff, discretionary spending',
 'Principal-Agent Problem: Shareholders (principals) vs. Managers (agents)'
 ],
 analysis: 'Shareholders want profit max → Managers prefer empire building (larger firms = more prestige) → Without monitoring, managers set output where AR = AC (normal profit, max sales) rather than MR = MC → Divorice of ownership and control creates agency costs.',
 evaluation: 'Behavioral theories explain real firm behavior better than profit maximization, especially in large corporations. However, competitive pressure, takeover threats, and performance-linked pay can align managerial and shareholder interests. The profit-max model remains useful for competitive markets.',
 realWorldExample: 'Enron executives maximized short-term share price (and bonuses) through accounting fraud rather than genuine profit—a pathological form of agency problem.'
 },
 {
 id: 'bertrand-competition',
 title: 'Bertrand Competition',
 category: 'theory',
 definition: 'A model of oligopoly where firms compete on price rather than quantity (contrasting with Cournot competition). With homogeneous products and no capacity constraints, Bertrand competition produces the perfectly competitive outcome: P = MC.',
 keyPoints: [
 'Firms simultaneously set prices; consumers buy from lowest-priced firm',
 'Homogeneous products: Entire market goes to lower-priced firm',
 'Nash equilibrium: Both firms set P = MC (no profit possible)',
 'Bertrand Paradox: Just two firms produce competitive outcome'
 ],
 analysis: 'Firm A sets P = £10 (above MC = £5) → Firm B undercuts to £9.99, captures entire market → A responds with £9.98 → Price war continues until P = MC = £5 → Neither firm can profitably undercut → Nash equilibrium at P = MC → Zero supernormal profit despite duopoly.',
 evaluation: 'The Bertrand Paradox seems unrealistic—real duopolies earn profits. Relaxing assumptions (product differentiation, capacity constraints, repeated games with tacit collusion) restores more realistic outcomes. But Bertrand explains fierce price competition in commodity markets.',
 formula: 'p^*_A = p^*_B = MC \\implies \\pi_A = \\pi_B = 0',
 realWorldExample: 'The supermarket price war on milk and bread exemplifies Bertrand-style competition—homogeneous products lead to wafer-thin margins despite high market concentration.'
 },
 {
 id: 'bounded-rationality',
 title: 'Bounded Rationality',
 category: 'theory',
 definition: 'Herbert Simon\'s concept that human rationality is limited by cognitive capacity, available information, and time constraints. Rather than optimizing, decision-makers "satisfice"—seeking solutions that are "good enough" rather than optimal.',
 keyPoints: [
 'Cognitive limitations: Cannot process all information',
 'Information costs: Gathering data takes time and resources',
 'Satisficing: Accept first option meeting minimum criteria',
 'Challenges homo economicus (perfectly rational agent assumption)'
 ],
 analysis: 'Perfectly rational agent: Evaluates all options, maximizes utility → Boundedly rational agent: Uses heuristics (rules of thumb) → Stops searching when "good enough" option found → Saves decision costs but may miss better alternatives → Explains sticky wages, prices, and inertia in markets.',
 evaluation: 'Bounded rationality is more realistic than perfect rationality but harder to model. It explains market inefficiencies but doesn\'t predict specific outcomes. Modern behavioral economics builds on Simon\'s foundation with more precise models of cognitive bias.',
 realWorldExample: 'Job seekers don\'t evaluate every vacancy—they satisfice by accepting the first offer meeting their reservation wage, potentially missing better opportunities.'
 },
 {
 id: 'asian-financial-crisis-1997',
 title: 'Asian Financial Crisis 1997',
 category: 'macro',
 definition: 'A financial crisis that began in Thailand in July 1997 and spread to South Korea, Indonesia, Malaysia, and the Philippines. It was triggered by the collapse of the Thai baht\'s peg and revealed vulnerabilities from excessive short-term foreign borrowing and asset bubbles.',
 keyPoints: [
 'Triggered by Thailand abandoning the baht\'s dollar peg',
 'Causes: Current account deficits, short-term foreign debt, asset bubbles',
 'Contagion: Crisis spread rapidly to other Asian economies',
 'IMF rescue packages with controversial structural adjustment conditions'
 ],
 analysis: 'Capital inflows → Credit boom → Asset/property bubbles → Current account deficits financed by short-term foreign borrowing → Confidence loss → Capital flight → Forex reserves depleted defending pegs → Devaluations → Foreign-denominated debt exploded in local terms → Bank failures → Deep recessions (Indonesia GDP -13%).',
 evaluation: 'The crisis exposed the dangers of fixed exchange rates with open capital accounts (impossible trinity). IMF conditions (austerity, high rates) were criticized for deepening the recession. Post-crisis, Asian economies built massive forex reserves to self-insure—contributing to global imbalances.',
 formula: '\\text{Short-term Debt} > \\text{Forex Reserves} \\implies \\text{Vulnerability to sudden stops}',
 realWorldExample: 'Thailand\'s baht fell from 25/USD to 56/USD. Indonesia\'s GDP contracted 13%, and the Suharto regime collapsed. South Korea required a $57bn IMF bailout—then the largest in history.'
 },
 {
 id: 'assembly-line',
 title: 'Assembly Line Production',
 category: 'theory',
 definition: 'A manufacturing process where products move along a line and workers or machines perform specialized, repetitive tasks. Pioneered by Henry Ford for automobile production, it exemplifies the division of labor and economies of scale.',
 keyPoints: [
 'Division of labor: Workers specialize in narrow tasks',
 'Economies of scale: High fixed costs spread over large output',
 'Reduced unit labor time and costs',
 'Trade-off: Monotonous work, potential for worker alienation'
 ],
 analysis: 'Ford introduces assembly line → Each worker performs one task repeatedly → Learning effects: Workers become faster → Capital substitution: Machines assist workers → Unit production time falls from 12 hours to 93 minutes → ↓ AC → Model T price falls → Mass consumption becomes possible.',
 evaluation: 'Assembly lines revolutionized manufacturing productivity but raised concerns about worker welfare (monotony, injuries). Toyota\'s Lean Production later improved on Ford\'s model by incorporating worker feedback and flexibility—showing continuous innovation in production methods.',
 realWorldExample: 'Ford\'s Highland Park plant (1913) reduced Model T production time from 12 hours to 93 minutes, cutting prices from $850 to $300 and making cars accessible to the middle class.'
 },
 {
 id: 'asset-motive-money',
 title: 'Asset Motive for Holding Money',
 category: 'macro',
 definition: 'Part of Keynes\'s liquidity preference theory, the asset (or speculative) motive explains demand for money as a safe asset when bond prices are expected to fall (interest rates rise). Agents hold money to avoid capital losses on bonds.',
 keyPoints: [
 'When interest rates are low, bond prices are high',
 'Agents expect rates to rise (bond prices to fall)',
 'Holding money avoids capital loss on bonds',
 'Creates inverse relationship between interest rate and money demand'
 ],
 analysis: 'Current rate = 2% (historically low) → Agent expects rates to rise to 4% → If rates rise, bond prices fall → Holding bonds = capital loss → Rational to hold cash (zero return > negative return) → ↑ Speculative demand for money → At very low rates, demand for money becomes very elastic (liquidity trap).',
 evaluation: 'The asset motive explains why monetary policy becomes ineffective at the zero lower bound (liquidity trap). However, modern finance theory questions whether sophisticated investors hold non-interest-bearing cash—they may shift to short-duration bonds or money market funds instead.',
 formula: 'L = L_1(Y) + L_2(r) \\text{ where } \\frac{\\partial L_2}{\\partial r} < 0',
 realWorldExample: 'During 2009-2015, near-zero rates meant the BoE\'s QE purchases added to bank reserves but didn\'t stimulate lending—liquidity was "trapped" as banks preferred safe, liquid assets.'
 },
 {
 id: 'asset-prices',
 title: 'Asset Prices and Wealth Effect',
 category: 'macro',
 definition: 'The market value of assets (property, equities, bonds) and their impact on aggregate demand through the wealth effect. Rising asset prices increase perceived wealth, boosting consumption; falling prices have the opposite effect.',
 keyPoints: [
 'Wealth effect: ↑ Asset prices → ↑ Perceived wealth → ↑ C',
 'Collateral effect: ↑ Property prices → ↑ Borrowing capacity',
 'Inverse relationship with interest rates: ↓ r → ↑ Asset prices',
 'Asset bubbles can destabilize the economy'
 ],
 analysis: 'BoE ↓ interest rates → ↓ Discount rate for future cash flows → ↑ Present value of assets → ↑ Equity and property prices → ↑ Household wealth → ↑ Consumer confidence → ↑ Consumption (wealth effect) → Homeowners can borrow against equity (collateral effect) → ↑ AD.',
 evaluation: 'The wealth effect is a key monetary transmission channel but creates risks. Asset price inflation can decouple from fundamentals, creating bubbles. When bubbles burst, the negative wealth effect can trigger severe recessions (2008). Central banks face a dilemma: should they target asset prices?',
 formula: 'PV = \\sum_{t=1}^{n} \\frac{CF_t}{(1+r)^t}',
 realWorldExample: 'UK house prices rose 20% in 2021-22, boosting consumer spending through the wealth effect. The subsequent correction tightened household finances as mortgage rates rose.'
 },
 {
 id: 'asset-stripping',
 title: 'Asset Stripping',
 category: 'theory',
 definition: 'The practice of acquiring an undervalued company, selling off its assets for more than the acquisition cost, and often closing the business. Critics argue it destroys productive capacity; proponents claim it reallocates capital to higher-value uses.',
 keyPoints: [
 'Targets undervalued companies with valuable assets',
 'Break-up value > Market capitalization = Opportunity',
 'May result in job losses and productive capacity destruction',
 'Can improve allocative efficiency if assets move to better managers'
 ],
 analysis: 'Company X market cap = £50m → Assets (property, equipment) worth £80m individually → Raider acquires company → Sells assets separately → Net profit = £30m → Jobs may be lost, but assets now in hands of managers who value them more highly → Allocative efficiency may improve.',
 evaluation: 'Asset stripping is controversial: it can be value-destroying (short-termism, job losses) or value-creating (releasing trapped assets). The market for corporate control disciplines underperforming management, but leveraged buyouts can load companies with unsustainable debt.',
 realWorldExample: 'The Hanson Trust in the 1980s was notorious for asset stripping—acquiring conglomerates and selling divisions for profit. Critics blamed raiders for deindustrialization; defenders praised capital reallocation.'
 },
 {
 id: 'assisted-areas',
 title: 'Assisted Areas (Regional Policy)',
 category: 'policy',
 definition: 'Designated geographic regions eligible for government support (grants, tax relief) to address regional economic disparities. In the UK, these include Tier 1 (most disadvantaged) and Tier 2 areas, with support aimed at attracting investment and creating jobs.',
 keyPoints: [
 'Supply-side policy to reduce regional inequality',
 'Support includes: Regional Selective Assistance (RSA), tax breaks, infrastructure',
 'EU Structural Funds provided significant support pre-Brexit',
 'Levelling Up agenda aims to reduce North-South divide'
 ],
 analysis: 'Region experiences deindustrialization → ↑ Unemployment, ↓ Investment → Designated as Assisted Area → Government offers grants for new factories → ↓ Cost of capital for firms → ↑ Investment → ↑ Employment → Multiplier effects → Agglomeration may develop over time.',
 evaluation: 'Regional policy can create jobs but may displace activity from elsewhere (zero-sum). Grants may attract footloose firms that leave when subsidies end. Long-run success requires building genuine competitive advantages (skills, infrastructure, clusters)—not just subsidies.',
 realWorldExample: 'The UK\'s "Levelling Up" fund allocates £4.8bn to disadvantaged areas, focusing on transport, town centers, and skills—attempting to address persistent regional disparities.'
 },
 {
 id: 'asymmetric-information-problem',
 title: 'Asymmetric Information Problem',
 category: 'market-failure',
 definition: 'A situation where one party in a transaction has more or better information than the other, leading to market inefficiencies. The two main consequences are Adverse Selection (pre-transaction) and Moral Hazard (post-transaction).',
 keyPoints: [
 'Adverse Selection: Hidden information before transaction (lemons market)',
 'Moral Hazard: Hidden actions after transaction (insurance)',
 'Principal-Agent Problem: Agents have more information than principals',
 'Solutions: Signaling, Screening, Incentive alignment, Regulation'
 ],
 analysis: 'Seller knows product quality, buyer doesn\'t → Buyer assumes average quality → Offers average price → High-quality sellers exit (price too low) → Only low-quality remains → Market unravels. Post-transaction: Insured party takes more risks (moral hazard) → Insurer raises premiums → Adverse selection cycle.',
 evaluation: 'Asymmetric information is pervasive and explains many market failures (credit rationing, insurance markets, labor markets). Market solutions (warranties, deductibles, reputation systems) can mitigate but not eliminate the problem. Regulation (mandatory disclosure, professional licensing) provides additional remedies.',
 realWorldExample: 'The 2008 financial crisis was partly caused by asymmetric information: mortgage-backed securities were sold without buyers understanding the underlying loan quality—modern "lemons."'
 },
 {
 id: 'atomistic-competition',
 title: 'Atomistic Competition',
 category: 'theory',
 definition: 'A market structure where there are so many small firms ("atoms") that no individual firm can influence the market price. Each firm is a price taker, facing a perfectly elastic demand curve. This is the defining characteristic of perfect competition.',
 keyPoints: [
 'Large number of buyers and sellers (atomistic structure)',
 'Homogeneous products: No differentiation',
 'Perfect information: All agents know prices and quality',
 'Free entry and exit: No barriers'
 ],
 analysis: 'Market price = £10 → Individual firm faces horizontal demand curve at £10 → AR = MR = £10 → Profit max: Produce where MC = £10 → If P > AC, supernormal profit → New firms enter → Supply shifts right → Price falls → Long-run equilibrium: P = AC (normal profit only).',
 evaluation: 'Perfect competition is a theoretical benchmark rarely observed in practice. Real markets have product differentiation, barriers to entry, and imperfect information. However, agricultural commodity markets approximate atomistic conditions—many small farmers selling identical wheat at market prices.',
 formula: 'P = AR = MR \\text{ (perfectly elastic demand)}',
 realWorldExample: 'Wheat farming approaches atomistic competition: thousands of farmers produce identical grain, take the world price, and cannot individually affect it.'
 },
 {
 id: 'auction-theory',
 title: 'Auction Theory in Economics',
 category: 'theory',
 definition: 'The study of how auctions work and how they affect bidding strategies and outcomes. Key auction types include English (ascending), Dutch (descending), First-price sealed-bid, and Vickrey (second-price sealed-bid). Auction design affects efficiency and revenue.',
 keyPoints: [
 'English auction: Ascending price, highest bidder wins',
 'Dutch auction: Descending price, first bidder wins',
 'First-price sealed-bid: Highest bidder wins, pays their bid',
 'Vickrey (second-price): Winner pays second-highest bid → Truthful bidding'
 ],
 analysis: 'English auction: Bidders reveal valuations through bidding → Winner pays just above second-highest valuation → Efficient (highest valuer wins). Vickrey: Optimal to bid true valuation (dominant strategy) → Also efficient. First-price: Strategic underbidding ("bid shading") → May not be efficient.',
 evaluation: 'The Revenue Equivalence Theorem states that under certain conditions, all standard auctions yield the same expected revenue. But real-world factors (risk aversion, asymmetric information, collusion) break equivalence. Auction design matters enormously—poorly designed auctions lose billions.',
 formula: 'b^*_i = v_i - \\frac{1}{n} \\times v_i \\text{ (first-price bid shading with n bidders)}',
 realWorldExample: 'The UK 3G spectrum auction (2000) raised £22.5bn—far exceeding expectations—due to clever auction design. The 2020 5G auction used similar principles to allocate valuable spectrum efficiently.'
 },
 {
 id: 'audit-commission',
 title: 'Audit and Public Sector Oversight',
 category: 'policy',
 definition: 'Independent examination of public sector accounts and value-for-money. In the UK, the National Audit Office (NAO) audits central government, while local authority audit arrangements changed after the Audit Commission\'s abolition in 2015.',
 keyPoints: [
 'NAO: Audits central government departments for Parliament',
 'Public Accounts Committee: Scrutinizes NAO reports',
 'Value-for-money: Assesses economy, efficiency, and effectiveness',
 'Local audits now contracted to private firms'
 ],
 analysis: 'Government department spends £1bn on IT project → NAO audits: Was procurement competitive (economy)? Was delivery on time and budget (efficiency)? Did the system work as intended (effectiveness)? → PAC hearing → Recommendations for improvement → Accountability mechanism.',
 evaluation: 'Audit ensures accountability but has limitations: auditors can only report, not enforce. The abolition of the Audit Commission weakened local government oversight, with private audit firms facing conflicts of interest. Effective audit requires independence and follow-through on recommendations.',
 realWorldExample: 'NAO reports on HS2 repeatedly highlighted cost overruns and scope changes, leading to Parliamentary scrutiny and eventual scale-back of the northern leg.'
 },
 {
 id: 'austrian-school',
 title: 'Austrian School of Economics',
 category: 'theory',
 definition: 'A heterodox school of economic thought emphasizing individualism, subjectivism, and market processes. Key figures include Carl Menger, Ludwig von Mises, and Friedrich Hayek. Austrians are skeptical of government intervention and mathematical modeling.',
 keyPoints: [
 'Methodological individualism: Only individuals act, not "society"',
 'Subjective value theory: Value is in the eye of the beholder',
 'Spontaneous order: Markets emerge from decentralized decisions',
 'Business cycle theory: Credit expansion causes malinvestment'
 ],
 analysis: 'Central bank artificially lowers interest rates → ↓ Cost of borrowing below natural rate → ↑ Malinvestment (projects that only seem profitable at low rates) → Resources misallocated → Eventually, rates rise or malinvestment revealed → Bust follows boom → Austrians advocate for free banking and hard money.',
 evaluation: 'Austrian economics provides powerful critiques of central planning and explains some aspects of business cycles. However, it is often unfalsifiable (rejecting empirical testing) and offers limited policy guidance beyond "don\'t intervene." Mainstream economics incorporates Austrian insights while retaining mathematical rigor.',
 realWorldExample: 'Hayek predicted that low interest rates in the 2000s would cause a housing bubble and malinvestment—vindicated by the 2008 crisis. But Austrian aversion to stabilization policy is controversial.'
 },
 {
 id: 'autarky',
 title: 'Autarky (Economic Self-Sufficiency)',
 category: 'trade',
 definition: 'A policy of economic self-sufficiency with no international trade. Under autarky, a country produces all goods domestically, sacrificing the gains from trade and specialization according to comparative advantage.',
 keyPoints: [
 'No imports or exports: Complete self-reliance',
 'Foregoes gains from trade (specialization, comparative advantage)',
 'May be pursued for national security or ideological reasons',
 'Results in lower consumption possibilities than free trade'
 ],
 analysis: 'Country under autarky: Consumption limited to domestic PPC → Opens to trade: Can specialize in comparative advantage good → Exports and imports → Consumption possibilities expand beyond PPC → Welfare gain from trade. Autarky = Inside CPC (consumption possibility curve); Free trade = On or beyond CPC.',
 evaluation: 'Pure autarky is economically irrational—it sacrifices welfare gains from trade. However, strategic autarky (self-sufficiency in critical sectors like food, energy, defense) may be justified for national security. Most countries pursue managed trade rather than pure autarky or pure free trade.',
 realWorldExample: 'North Korea\'s juche (self-reliance) policy approaches autarky, contributing to chronic shortages and low living standards. By contrast, North Korea\'s neighbor South Korea thrived through export-led growth.'
 },
 {
 id: 'automatic-stabilisers',
 title: 'Automatic Stabilisers',
 category: 'macro',
 definition: 'Built-in fiscal mechanisms that automatically moderate economic fluctuations without discretionary policy changes. Progressive taxes and welfare spending rise and fall with the business cycle, dampening booms and cushioning recessions.',
 keyPoints: [
 'Progressive taxes: Revenue falls in recession, rises in boom',
 'Welfare payments: Rise in recession (unemployment benefits), fall in boom',
 'No legislative action required: Work automatically',
 'Stabilize AD without policy lags'
 ],
 analysis: 'Recession hits → Incomes fall → Progressive tax revenue ↓↓ (people drop into lower bands) → Unemployment rises → Welfare spending ↑ → Government injects net spending into economy automatically → ↑ AD → Dampens recession. The reverse operates in booms: ↑ Tax revenue, ↓ Welfare → Cools overheating.',
 evaluation: 'Automatic stabilisers are valuable because they avoid policy lags (recognition, decision, implementation). However, they are too weak to prevent deep recessions (2008, 2020 required discretionary stimulus). Their size depends on the progressivity of taxes and generosity of welfare—varies across countries.',
 formula: '\\Delta G_{auto} = \\Delta TR - \\Delta T = f(\\Delta Y)',
 realWorldExample: 'During COVID-19, automatic stabilisers provided initial support as Universal Credit claims surged, but the scale of the shock required massive discretionary measures (furlough scheme).'
 },
 {
 id: 'automation',
 title: 'Automation and Labor Markets',
 category: 'theory',
 definition: 'The replacement of human labor with machines or software to perform tasks previously done by workers. Automation increases productivity but raises concerns about structural unemployment and the distribution of gains between capital and labor.',
 keyPoints: [
 'Technological unemployment: Jobs eliminated by machines',
 'Creative destruction: New industries and jobs also created',
 'Skill-biased technical change: Benefits skilled workers, displaces unskilled',
 'Long-run impact on labor share of income'
 ],
 analysis: 'Firm automates production → ↓ Demand for labor (substitution effect) → ↑ Productivity → ↓ Prices → ↑ Real income → ↑ Demand for other goods (income effect) → New jobs created in other sectors. Net employment effect depends on whether income effect > substitution effect.',
 evaluation: 'Historically, automation has not caused mass unemployment—new jobs replaced old ones. But AI and advanced robotics may be different (broader substitution). The transition period causes dislocation, requiring retraining and safety nets. The key question is distribution: who captures the productivity gains?',
 realWorldExample: 'Amazon warehouses use robots for picking and packing, but also employ thousands of humans for tasks robots cannot perform—illustrating complementarity alongside substitution.'
 },
 {
 id: 'autonomous-consumption',
 title: 'Autonomous Consumption',
 category: 'macro',
 definition: 'The level of consumption that occurs regardless of income level, represented by the intercept (C₀) in the Keynesian consumption function. It reflects spending financed by savings, borrowing, or wealth, independent of current income.',
 keyPoints: [
 'C₀ in the consumption function: C = C₀ + MPC × Yᵈ',
 'Represents subsistence spending or dissaving when Y = 0',
 'Shifts in C₀ shift the entire consumption function',
 'Influenced by: Wealth, confidence, credit availability, expectations'
 ],
 analysis: 'Autonomous consumption C₀ = £10,000 → At Y = 0, consumer spends £10,000 (dissaving) → MPC = 0.8 → At Y = £50,000, C = £10,000 + 0.8(£50,000) = £50,000 → Shift in C₀ (e.g., ↑ wealth) → Entire consumption function shifts up → ↑ AE → Multiplier effect → ↑ Equilibrium Y.',
 evaluation: 'Autonomous consumption explains why consumption doesn\'t fall to zero in recessions—wealth and borrowing sustain spending. However, the Keynesian model assumes a stable consumption function, challenged by the Permanent Income Hypothesis (consumption depends on lifetime wealth, not current income).',
 formula: 'C = C_0 + MPC \\times Y_d',
 realWorldExample: 'During the 2020 lockdowns, households with savings maintained consumption despite income losses—demonstrating autonomous consumption financed by drawing down assets.'
 },
 {
 id: 'brain-drain',
 title: 'Brain Drain Problem',
 category: 'macro',
 definition: 'The emigration of highly skilled, educated, or trained individuals from one country to another, typically from developing to developed nations. This human capital flight reduces the source country\'s productive capacity and tax base.',
 keyPoints: [
 'Loss of skilled workers: doctors, engineers, academics, IT professionals',
 'Push factors: low wages, poor working conditions, political instability',
 'Pull factors: higher salaries, better opportunities, quality of life',
 'Creates a negative externality on the source country\'s development'
 ],
 analysis: 'Skilled workers emigrate → ↓ Human capital stock in home country → ↓ Productivity and innovation capacity → ↓ Tax revenue (high earners leave) → ↓ LRAS (productive potential falls) → Slowed economic growth → Widening development gap with destination countries.',
 evaluation: 'Brain drain can be partially offset by remittances and "brain circulation" (returnees bringing skills home). Some argue it incentivizes education (the "brain gain" hypothesis). However, the fiscal cost of training workers who then emigrate represents a significant transfer of resources from poor to rich countries.',
 realWorldExample: 'Sub-Saharan Africa loses approximately 20,000 skilled professionals annually to developed countries. The NHS relies heavily on foreign-trained doctors, effectively subsidized by developing nations\' education systems.'
 },
 {
 id: 'brand-loyalty',
 title: 'Brand Loyalty',
 category: 'theory',
 definition: 'A consumer\'s consistent preference for one brand over competitors, leading to repeat purchases regardless of price changes. Brand loyalty reduces the price elasticity of demand, enabling firms to charge premium prices and earn supernormal profits.',
 keyPoints: [
 'Reduces PED: loyal customers are less price-sensitive',
 'Created through: advertising, quality, customer experience, habit',
 'A form of product differentiation and non-price competition',
 'Creates barriers to entry for new competitors'
 ],
 analysis: 'Firm invests in brand building → ↑ Brand loyalty → ↓ PED (demand becomes more inelastic) → Firm can ↑ Price with smaller fall in quantity demanded → ↑ Total revenue → ↑ Profit margins → Acts as a barrier to entry (new entrants must overcome established loyalty).',
 evaluation: 'Brand loyalty can lead to allocative inefficiency as consumers pay above marginal cost. However, it may reflect genuine quality differences and provides incentives for firms to maintain standards. Behavioral economists note that loyalty often stems from habit and cognitive biases rather than rational evaluation.',
 formula: 'PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P} \\text{ (lower absolute value with brand loyalty)}',
 realWorldExample: 'Apple maintains strong brand loyalty despite premium pricing—iPhone users rarely switch to Android. This inelastic demand allows Apple to earn profit margins exceeding 40% on devices.'
 },
 {
 id: 'break-even-analysis',
 title: 'Break-Even Analysis',
 category: 'theory',
 definition: 'A method of determining the output level at which a firm\'s total revenue equals total cost, resulting in zero economic profit. At the break-even point, the firm covers all costs but earns no supernormal profit.',
 keyPoints: [
 'Break-even: TR = TC, or equivalently, P = ATC',
 'Below break-even: firm makes a loss (TR < TC)',
 'Above break-even: firm earns supernormal profit (TR > TC)',
 'Margin of safety = Actual output - Break-even output'
 ],
 analysis: 'Fixed Costs = £10,000, Variable Cost per unit = £5, Selling Price = £15 → Contribution per unit = £15 - £5 = £10 → Break-even output = £10,000 ÷ £10 = 1,000 units → At Q = 1,500, profit = (1,500 - 1,000) × £10 = £5,000 supernormal profit.',
 evaluation: 'Break-even analysis assumes linear cost and revenue functions, which may not hold in practice (economies of scale, quantity discounts). It also assumes single-product firms and ignores opportunity costs. However, it remains a useful decision-making tool for short-run planning.',
 formula: '\\text{Break-even Units} = \\frac{\\text{Fixed Costs}}{\\text{Selling Price} - \\text{Variable Cost per Unit}}',
 realWorldExample: 'Airlines use break-even analysis to determine load factors—the percentage of seats that must be sold to cover costs. Low-cost carriers like Ryanair break even at ~70% capacity.'
 },
 {
 id: 'break-even-price',
 title: 'Break-Even Price',
 category: 'theory',
 definition: 'The price at which a firm\'s total revenue equals total cost, meaning P = ATC. At this price, the firm earns normal profit (zero economic/supernormal profit) and just covers all explicit and implicit costs.',
 keyPoints: [
 'P = ATC at the break-even price',
 'Normal profit is included in costs (opportunity cost of capital)',
 'In long-run perfect competition, P = ATC for all firms',
 'Below break-even price: economic loss; above: supernormal profit'
 ],
 analysis: 'In perfect competition, short-run supernormal profits attract new entrants → ↑ Market supply → ↓ Price → Price falls until P = ATC (minimum efficient scale) → All firms earn only normal profit → No incentive for entry or exit → Long-run equilibrium.',
 evaluation: 'The break-even price concept assumes profit maximization and accurate cost estimation. In practice, firms may set prices below ATC to gain market share (predatory pricing) or above for value signaling. The break-even point also shifts with changes in fixed costs, variable costs, or productivity.',
 formula: 'P_{BE} = ATC = \\frac{TC}{Q}',
 realWorldExample: 'During oil price wars (e.g., 2014-2016), Saudi Arabia produced oil below US shale producers\' break-even prices (~$50/barrel), forcing high-cost producers out of the market.'
 },
 {
 id: 'bretton-woods',
 title: 'Bretton Woods System',
 category: 'trade',
 definition: 'The international monetary system established in 1944, creating fixed exchange rates pegged to the US dollar, which was itself convertible to gold at $35 per ounce. It also established the IMF and World Bank. The system collapsed in 1971 when the US suspended gold convertibility.',
 keyPoints: [
 'Fixed but adjustable exchange rates (adjustable peg)',
 'US dollar as the world reserve currency, backed by gold',
 'Established IMF (balance of payments support) and World Bank (development)',
 'Collapsed due to US trade deficits and gold outflows (Triffin Dilemma)'
 ],
 analysis: 'Fixed rates → Exchange rate stability → ↓ Currency risk → ↑ International trade and investment → Countries must maintain forex reserves to defend peg → US running persistent deficits → Dollar claims exceed gold reserves → Confidence in convertibility falls → Speculative attacks → Nixon suspends gold window (1971) → System collapses.',
 evaluation: 'Bretton Woods provided post-war stability and facilitated the "Golden Age" of growth (1950-1973). However, it suffered from the Triffin Dilemma: the reserve currency country must run deficits to supply global liquidity, but deficits undermine confidence in the currency. The "Impossible Trinity" also constrained policy: countries couldn\'t have fixed rates, free capital flows, AND monetary independence.',
 realWorldExample: 'The collapse began when France demanded gold for its dollar reserves in the 1960s. By 1971, US gold reserves had fallen to $10 billion against $40 billion in foreign dollar claims—an unsustainable position.'
 },
 {
 id: 'broad-money',
 title: 'Broad Money (M4)',
 category: 'macro',
 definition: 'A measure of the money supply that includes narrow money (cash and instant-access deposits) plus less liquid assets such as time deposits, money market funds, and other near-money instruments. In the UK, this is measured as M4.',
 keyPoints: [
 'M4 = Notes & coins + all bank deposits + money market instruments',
 'Broader measure than M0 (base money) or M1 (narrow money)',
 'Growth in M4 is monitored as a leading indicator of inflation',
 'Created mainly through commercial bank lending (credit creation)'
 ],
 analysis: 'Central bank ↓ interest rates → ↑ Bank lending → ↑ Credit creation → ↑ M4 growth → ↑ AD (more money chasing goods) → Potential inflationary pressure. The Quantity Theory: MV = PY suggests that if V is stable, ↑ M leads to ↑ P (inflation) once Y reaches capacity.',
 evaluation: 'Monetarists emphasize M4 growth as a key inflation driver. However, velocity (V) has proven unstable, and money demand shifts unpredictably. Central banks now target interest rates rather than monetary aggregates directly, though M4 remains a useful monitoring variable.',
 formula: 'M4 = M0 + \\text{Bank Deposits} + \\text{Money Market Instruments}',
 realWorldExample: 'UK M4 growth exceeded 15% annually before the 2008 crisis, signaling excessive credit expansion. Post-2010 M4 growth stagnated despite QE, as banks hoarded reserves rather than lending.'
 },
 {
 id: 'budget-constraints',
 title: 'Budget Constraints',
 category: 'theory',
 definition: 'The limitation on consumption choices imposed by a consumer\'s income and the prices of goods. Graphically represented as a budget line showing all affordable combinations of two goods given fixed income and prices.',
 keyPoints: [
 'Budget line equation: P₁X₁ + P₂X₂ = I (or ≤ I)',
 'Slope = -P₁/P₂ (the opportunity cost of X₁ in terms of X₂)',
 'Changes in income shift the budget line (parallel shift)',
 'Changes in one price rotate the budget line around an intercept'
 ],
 analysis: 'Consumer has income I = £100, P₁ = £10, P₂ = £5 → Budget line: 10X₁ + 5X₂ = 100 → Max X₁ = 10 units; Max X₂ = 20 units → Slope = -10/5 = -2 → If P₁ falls to £5, the budget line rotates outward along X₁-axis → Consumer can now afford up to 20 units of X₁ → Purchasing power for X₁ increases.',
 evaluation: 'Budget constraints assume perfect information about prices and rational utility maximization. Behavioral economics challenges this: consumers may not optimize, and credit/borrowing can relax the constraint. Time constraints (opportunity cost of shopping) are also ignored in the basic model.',
 formula: 'P_1 X_1 + P_2 X_2 \\leq I',
 realWorldExample: 'Rising energy prices in 2022 rotated household budget constraints, reducing the maximum affordable quantity of heating—forcing trade-offs with food and other essentials (fuel poverty).'
 },
 {
 id: 'budget-surplus',
 title: 'Budget Surplus',
 category: 'policy',
 definition: 'A fiscal position where government tax revenue exceeds government spending in a given period. A budget surplus represents net government saving and reduces the national debt.',
 keyPoints: [
 'Budget surplus = Tax Revenue - Government Spending > 0',
 'Represents contractionary fiscal stance (withdraws demand from economy)',
 'Can be structural (deliberate) or cyclical (due to boom conditions)',
 'Surpluses reduce national debt and lower future interest payments'
 ],
 analysis: 'Government runs surplus → ↓ Injections into circular flow → ↓ AD → Contractionary effect on GDP → However, ↓ government borrowing → ↓ Demand for loanable funds → ↓ Interest rates → May stimulate private investment ("reverse crowding out") → Net effect depends on relative magnitudes.',
 evaluation: 'Surpluses during booms are appropriate counter-cyclical policy (building fiscal space for recessions). However, pursuing surpluses during weak growth can worsen recessions (fiscal austerity). The appropriate fiscal stance depends on the output gap and automatic stabilizers.',
 formula: '\\text{Budget Balance} = T - G - Tr',
 realWorldExample: 'Germany ran persistent budget surpluses (2014-2019) under the "Schwarze Null" policy, criticized by some economists for reducing European aggregate demand when the Eurozone needed fiscal stimulus.'
 },
 {
 id: 'buffer-stocks',
 title: 'Buffer Stocks',
 category: 'policy',
 definition: 'A price stabilization scheme where an agency buys commodities when prices fall below a floor price (storing them as a "buffer") and sells from stock when prices rise above a ceiling price. Aims to reduce price volatility for primary producers.',
 keyPoints: [
 'Intervention mechanism: buy at floor price, sell at ceiling price',
 'Objectives: stabilize farmer incomes, ensure food security',
 'Creates a "price band" within which the market operates freely',
 'Requires storage capacity and significant financial resources'
 ],
 analysis: 'Bumper harvest → ↑ Supply → Price falls toward floor → Agency buys surplus at floor price → Supply withdrawn from market → Price stabilized above floor → Farmers\' incomes protected → In poor harvest year, agency sells from stock → ↑ Supply → Price capped at ceiling → Consumers protected.',
 evaluation: 'Buffer stocks can stabilize volatile agricultural markets. However, they face practical problems: high storage costs, spoilage of perishables, and tendency to accumulate unsustainable surpluses if floor prices are set too high. Many schemes (e.g., International Tin Agreement) have collapsed when funds were exhausted.',
 realWorldExample: 'The EU\'s CAP historically created "butter mountains" and "wine lakes" through price support schemes—surpluses accumulated when intervention prices exceeded world prices, requiring costly storage and eventual disposal.'
 },
 {
 id: 'building-societies',
 title: 'Building Societies UK',
 category: 'macro',
 definition: 'Mutual financial institutions owned by their members (depositors and borrowers) rather than shareholders. Building societies traditionally focused on mortgage lending funded by retail savings, though their role has diminished since the demutualizations of the 1990s.',
 keyPoints: [
 'Mutual ownership: members are owners, not separate shareholders',
 'No profit maximization imperative—focus on member value',
 'Regulated by the FCA and PRA under Building Societies Act',
 'Many converted to banks (demutualised) in the 1990s'
 ],
 analysis: 'Mutual structure → No shareholder profit extraction → ↑ Interest rates for savers, ↓ rates for borrowers (compared to banks) → However, limited access to capital markets → Constrained balance sheet growth → Less competitive in wholesale funding → Vulnerability during credit crunches.',
 evaluation: 'Mutuality offers member-focused service but limits growth capital. The demutualization wave (Halifax, Abbey National, Northern Rock) aimed to access equity markets but exposed former mutuals to shareholder pressure and short-termism. Northern Rock\'s 2007 collapse highlighted the risks of aggressive wholesale funding strategies post-demutualisation.',
 realWorldExample: 'Nationwide remains the UK\'s largest building society, demonstrating the viability of the mutual model. Its members receive better savings rates and more generous customer service than many bank customers.'
 },
 {
 id: 'bull-market',
 title: 'Bull Market',
 category: 'macro',
 definition: 'A financial market condition characterized by rising asset prices, investor optimism, and expectations of continued gains. Typically defined as a sustained increase of 20% or more from recent lows.',
 keyPoints: [
 'Rising prices driven by optimistic expectations',
 'High trading volumes and increased risk appetite',
 'Economic expansion typically accompanies bull markets',
 'Contrasts with Bear Market (falling prices, pessimism)'
 ],
 analysis: 'Positive economic data → ↑ Corporate profit expectations → ↑ Share prices → Positive wealth effect → ↑ Consumer confidence and spending (C) → ↑ AD → Reinforces economic growth → ↑ Further profit expectations → Self-reinforcing cycle. Tobin\'s Q rises (market value > replacement cost) → ↑ Investment incentive.',
 evaluation: 'Bull markets can become detached from fundamentals, creating asset bubbles (irrational exuberance). When expectations become overly optimistic, any negative shock can trigger rapid reversal. The dot-com bubble (1999-2000) exemplifies how sentiment-driven rallies can collapse when fundamentals reassert.',
 realWorldExample: 'The post-2009 bull market lasted over a decade, driven by low interest rates, QE, and tech sector growth. The S&P 500 rose approximately 400% from its 2009 trough before the COVID-19 shock.'
 },
 {
 id: 'business-cycle',
 title: 'Business Cycle',
 category: 'macro',
 definition: 'The periodic fluctuation of economic activity around the long-term growth trend, consisting of four phases: expansion (boom), peak, contraction (recession), and trough (slump). Cycles are driven by changes in aggregate demand and supply shocks.',
 keyPoints: [
 'Four phases: Boom → Peak → Recession → Trough → Recovery',
 'Boom: high growth, low unemployment, rising inflation',
 'Recession: negative growth (two consecutive quarters of ↓ GDP)',
 'Driven by: AD shifts, investment volatility (accelerator), shocks'
 ],
 analysis: 'Expansion phase: ↑ Consumer confidence → ↑ C and I → ↑ AD → ↑ Real GDP → ↓ Cyclical unemployment → Economy approaches potential output → ↑ Demand-pull inflation → Peak reached → Eventually, ↑ interest rates or supply shock → ↓ AD → Recession begins → Output gap turns negative → ↑ Unemployment → Trough → Recovery begins.',
 evaluation: 'Keynesian view: cycles reflect AD instability, justifying counter-cyclical policy. Monetarists: cycles often caused by monetary policy errors. Real Business Cycle theory: cycles reflect rational responses to productivity shocks. Policy debate: should governments smooth cycles (fiscal/monetary intervention) or let markets self-correct?',
 realWorldExample: 'The UK experienced a classic cycle during 2008-2013: the financial crisis caused a deep recession (GDP fell 6%), followed by a prolonged recovery. The COVID-19 shock in 2020 created the sharpest contraction on record, followed by rapid recovery.'
 },
 {
 id: 'business-ethics',
 title: 'Business Ethics vs. Profit',
 category: 'theory',
 definition: 'The study of appropriate business policies regarding potentially controversial issues such as corporate governance, stakeholder welfare, environmental impact, and social responsibility. Debates whether ethical behavior conflicts with profit maximization.',
 keyPoints: [
 'Friedman view: social responsibility of business is to maximize profit',
 'Stakeholder view: firms should balance interests of all stakeholders',
 'CSR (Corporate Social Responsibility) as a strategic tool',
 'Ethical behavior may enhance long-run profits (reputation, loyalty)'
 ],
 analysis: 'Firm invests in CSR (ethical sourcing, environmental protection) → Short-run: ↑ Costs, ↓ Profits → Long-run: ↑ Brand reputation → ↑ Consumer loyalty (especially among ethical consumers) → ↑ Demand, ↓ PED → ↑ Pricing power → Potentially ↑ Long-run profits. Also: ↓ Regulatory risk, ↑ Employee morale.',
 evaluation: 'The ethics-profit trade-off depends on market structure and consumer preferences. In competitive markets with informed consumers, ethical firms may thrive. But in markets with weak regulation and uninformed consumers, unethical behavior may be profit-maximizing. The Principal-Agent problem means managers may pursue ethical goals that don\'t maximize shareholder value.',
 realWorldExample: 'Patagonia\'s environmental commitment (donating 1% of sales, using recycled materials) has built brand loyalty and premium pricing power, suggesting ethics and profits can align. Conversely, Volkswagen\'s emissions cheating scandal (Dieselgate) showed how unethical behavior can destroy shareholder value when discovered.'
 },
 {
 id: 'buyers-market',
 title: 'Buyers\' Market',
 category: 'theory',
 definition: 'A market condition where supply exceeds demand, giving buyers negotiating power and pushing prices down. Characterized by high inventories, slow sales, and sellers willing to accept lower prices.',
 keyPoints: [
 'Excess supply: Qs > Qd at the current price',
 'Downward pressure on prices as sellers compete',
 'Buyers have time, choice, and negotiating leverage',
 'Contrasts with Sellers\' Market (excess demand)'
 ],
 analysis: 'Excess supply at current price → Unsold inventory accumulates → Sellers cut prices to clear stock → Price falls toward new equilibrium → Quantity supplied ↓, Quantity demanded ↑ → Eventually equilibrium is restored where Qs = Qd. During adjustment, buyers extract better terms (price reductions, warranties, extras).',
 evaluation: 'Buyers\' markets redistribute surplus from producers to consumers, improving allocative efficiency when prices were previously above equilibrium. However, prolonged buyers\' markets can cause firm exits and unemployment. In housing markets, buyers\' conditions can trigger negative equity and reduced consumer spending (wealth effect).',
 realWorldExample: 'The UK housing market shifted to a buyers\' market in 2023 as mortgage rate rises reduced demand. Properties stayed listed longer, asking prices fell, and buyers successfully negotiated discounts—a reversal from the sellers\' market of 2021.'
 },
 {
 id: 'cabotage',
 title: 'Cabotage',
 category: 'trade',
 definition: 'The right of a transportation company to operate services between two points within a country other than its own. Cabotage restrictions protect domestic transport industries from foreign competition.',
 keyPoints: [
 'Traditionally restricted to protect national carriers',
 'EU single market allows cabotage for member states',
 'Post-Brexit: UK cabotage rights in EU are limited',
 'Affects road haulage, shipping, and aviation sectors'
 ],
 analysis: 'Cabotage restrictions → Foreign trucks cannot carry goods on domestic routes → ↓ Competition in domestic market → ↑ Prices for domestic transport → Inefficiency (empty return journeys) → But: protects domestic hauliers\' employment → Trade-off between efficiency and domestic industry protection.',
 evaluation: 'Liberalizing cabotage increases efficiency (reduces empty running) and lowers transport costs. However, it may lead to "social dumping"—foreign operators with lower wage costs undercutting domestic firms. The EU\'s compromise allows temporary cabotage but limits operations to prevent permanent displacement.',
 realWorldExample: 'After Brexit, EU hauliers lost automatic cabotage rights in the UK. This contributed to supply chain disruptions, as trucks that previously made multiple UK deliveries now returned empty, reducing efficiency.'
 },
 {
 id: 'cairns-group',
 title: 'Cairns Group and WTO',
 category: 'trade',
 definition: 'A coalition of 19 agricultural exporting countries that advocates for the liberalization of international trade in agricultural products within World Trade Organization negotiations. Named after Cairns, Australia, where the group was formed in 1986.',
 keyPoints: [
 'Members include Australia, Canada, Brazil, Argentina, New Zealand',
 'Campaigns against agricultural subsidies and protectionism',
 'Key player in WTO Doha Round negotiations',
 'Opposes EU CAP and US farm subsidies'
 ],
 analysis: 'Cairns Group members have comparative advantage in agriculture → Rich country subsidies distort trade → ↓ World prices for agricultural goods → ↓ Export revenues for efficient producers → ↓ Development in agricultural LDCs → Cairns Group lobbies for subsidy reduction → If successful: ↑ World prices → ↑ Returns for efficient producers.',
 evaluation: 'The Cairns Group represents efficient agricultural producers harmed by rich-world protectionism. However, its members include both developed (Australia) and developing (Argentina) nations with different interests. Complete liberalization could hurt net food-importing LDCs through higher prices. The failure of the Doha Round shows the difficulty of achieving agricultural reform.',
 realWorldExample: 'The Cairns Group successfully pushed for the Agreement on Agriculture in the Uruguay Round (1994), which began the process of reducing agricultural subsidies—though EU and US protectionism remains substantial.'
 },
 {
 id: 'call-money',
 title: 'Call Money',
 category: 'macro',
 definition: 'Short-term loans between banks and financial institutions that can be "called" (demanded for repayment) at any time. Call money provides liquidity management in the interbank market and typically carries the lowest interest rates.',
 keyPoints: [
 'Overnight or very short-term interbank lending',
 'Provides daily liquidity management for banks',
 'Interest rate reflects short-term money market conditions',
 'Central bank influences call rates through policy rate'
 ],
 analysis: 'Bank A has temporary surplus reserves → Lends to Bank B in call money market → Bank B uses funds to meet reserve requirements → Central bank ↑ policy rate → ↑ Opportunity cost of holding reserves → ↑ Call money rate → ↑ All short-term interest rates → Transmission mechanism of monetary policy.',
 evaluation: 'Call money markets are essential for financial system liquidity but can freeze during crises. In 2008, interbank lending collapsed as banks hoarded liquidity—requiring central bank intervention (lender of last resort). The fragility of short-term funding highlighted by Northern Rock\'s collapse shows systemic risks of reliance on call money.',
 formula: '\\text{Call Rate} \\approx \\text{Central Bank Policy Rate} + \\text{Risk Premium}',
 realWorldExample: 'During the 2007-08 crisis, LIBOR (a key call money benchmark) spiked dramatically as banks refused to lend to each other, signaling breakdown of interbank trust. Central banks responded with emergency liquidity facilities.'
 },
 {
 id: 'capital-account-bop',
 title: 'Capital Account (Balance of Payments)',
 category: 'trade',
 definition: 'A component of the Balance of Payments recording international capital transfers and the acquisition/disposal of non-produced, non-financial assets (e.g., patents, copyrights, land). Often used interchangeably with the Financial Account, which records investment flows.',
 keyPoints: [
 'Records capital transfers (debt forgiveness, migrant transfers)',
 'Includes non-produced assets: patents, trademarks, land purchases',
 'Relatively small compared to Current and Financial Accounts',
 'BoP Identity: Current Account + Capital Account + Financial Account = 0'
 ],
 analysis: 'Country receives debt forgiveness → Credit in Capital Account → Improves overall BoP position → Reduces need for Financial Account inflows → ↓ External debt burden → ↓ Future interest payments → Frees resources for domestic investment.',
 evaluation: 'The Capital Account is often confused with the Financial Account (which records FDI, portfolio investment, and reserve changes). For CIE purposes, focus on the BoP identity: a Current Account deficit must be financed by a Financial Account surplus (capital inflows).',
 formula: 'CA + KA + FA = 0 \\text{ (BoP Identity)}',
 realWorldExample: 'The UK Capital Account is typically small—around £2-3 billion annually—compared to the Current Account (approximately -£80 billion deficit) and Financial Account (offsetting surplus).'
 },
 {
 id: 'capital-accumulation',
 title: 'Capital Accumulation',
 category: 'macro',
 definition: 'The process of increasing the stock of capital goods (machinery, equipment, infrastructure) in an economy through investment. Capital accumulation is a key driver of economic growth, increasing the productive capacity and shifting the LRAS/PPC outward.',
 keyPoints: [
 'Investment (I) adds to capital stock; depreciation reduces it',
 'Net Investment = Gross Investment - Depreciation',
 'Higher savings rate → More funds for investment → Faster accumulation',
 'Harrod-Domar model: Growth = Savings Rate / Capital-Output Ratio'
 ],
 analysis: '↑ Savings rate → ↑ Loanable funds → ↓ Interest rates → ↑ Investment (I) → ↑ Capital stock (K) → ↑ Productive capacity → Outward shift of LRAS and PPC → ↑ Potential GDP → Long-run economic growth.',
 evaluation: 'Capital accumulation was central to classical growth theory but has diminishing returns (each additional unit of capital adds less output). Endogenous growth theory emphasizes human capital and innovation as more sustainable growth drivers. Over-reliance on capital accumulation can also crowd out consumption, reducing current living standards.',
 formula: 'K_{t+1} = K_t + I_t - \\delta K_t',
 realWorldExample: 'China\'s rapid growth (1980-2020) was driven by exceptionally high investment rates (40-50% of GDP)—capital accumulation financed by high household and corporate savings.'
 },
 {
 id: 'capital-consumption',
 title: 'Capital Consumption',
 category: 'macro',
 definition: 'The using up or wearing out of capital goods during production, also known as depreciation. Capital consumption represents the portion of output that must be reinvested just to maintain the existing capital stock.',
 keyPoints: [
 'Also called depreciation or capital allowance',
 'NNP = GNP - Capital Consumption (Net vs. Gross)',
 'High depreciation reduces sustainable consumption potential',
 'Replacement investment maintains capital stock; net investment expands it'
 ],
 analysis: 'Capital stock = £1 trillion → Annual depreciation rate = 5% → Capital consumption = £50 billion → If Gross Investment = £80 billion → Net Investment = £30 billion → Capital stock grows by £30 billion → Positive contribution to LRAS expansion.',
 evaluation: 'National income measures should ideally use NNP (Net National Product) rather than GNP, as capital consumption represents a cost of production, not welfare. However, depreciation is difficult to measure accurately—accounting methods (straight-line vs. declining balance) give different values.',
 formula: 'NNP = GNP - \\text{Depreciation}',
 realWorldExample: 'US capital consumption averages approximately 15% of GDP annually. Failing infrastructure (roads, bridges) reflects under-investment relative to depreciation—capital stock quality declining.'
 },
 {
 id: 'capital-depreciation',
 title: 'Capital Depreciation',
 category: 'macro',
 definition: 'The decline in the value of capital assets over time due to wear and tear, obsolescence, or aging. Depreciation is both an economic concept (using up of capital) and an accounting practice (spreading asset costs over useful life).',
 keyPoints: [
 'Physical depreciation: wear and tear from use',
 'Economic obsolescence: new technology makes old capital less valuable',
 'Accounting methods: straight-line, declining balance, units of production',
 'Tax implications: depreciation allowances reduce taxable profits'
 ],
 analysis: 'Machine purchased for £100,000 → 10-year useful life → Annual straight-line depreciation = £10,000 → Book value falls by £10,000 each year → Firm must set aside replacement funds → If not replaced: ↓ Capital stock → ↓ Productive capacity → Potential ↓ LRAS.',
 evaluation: 'Accelerated depreciation (front-loading the write-off) provides tax incentives for investment by reducing taxable profits in early years. However, it can distort investment decisions and reduce government revenue. Economic depreciation often differs from accounting depreciation—technological obsolescence can make assets worthless before they physically wear out.',
 formula: '\\text{Straight-line: } D = \\frac{\\text{Cost} - \\text{Salvage Value}}{\\text{Useful Life}}',
 realWorldExample: 'Smartphones depreciate rapidly (often 50% in year one) due to technological obsolescence, while buildings depreciate slowly (2-3% annually) reflecting physical longevity.'
 },
 {
 id: 'capital-expenditure',
 title: 'Capital Expenditure',
 category: 'macro',
 definition: 'Spending on fixed assets (buildings, machinery, equipment, infrastructure) that provide benefits over multiple years. Capital expenditure (CapEx) adds to the capital stock and is distinct from current/revenue expenditure (day-to-day spending).',
 keyPoints: [
 'Creates assets that generate future productive capacity',
 'Government CapEx: infrastructure, schools, hospitals',
 'Private CapEx: machinery, factories, technology systems',
 'CapEx recorded on balance sheet as asset (not expensed immediately)'
 ],
 analysis: 'Government ↑ capital expenditure on infrastructure → ↑ AD in short run (construction spending) → In long run: ↓ Transport costs → ↑ Productivity → ↑ LRAS → Multiplier effect on private investment (crowding-in) → Sustained growth.',
 evaluation: 'Capital expenditure is often the first target for spending cuts during austerity—it\'s easier to defer new projects than cut salaries. However, this short-termism can undermine long-run growth and productivity. The distinction between capital and current spending can also be manipulated for political purposes.',
 realWorldExample: 'The UK\'s HS2 railway project represents major public capital expenditure (~£100 billion), justified by expected productivity gains from improved connectivity—though cost overruns demonstrate CapEx estimation challenges.'
 },
 {
 id: 'capital-flight',
 title: 'Capital Flight',
 category: 'trade',
 definition: 'The rapid outflow of financial assets and capital from a country, typically triggered by political instability, economic crisis, or unfavorable policy changes. Capital flight causes currency depreciation and depletes foreign exchange reserves.',
 keyPoints: [
 'Triggered by: political uncertainty, high inflation, currency fears, tax increases',
 'Recorded as debit in Financial Account (outflows)',
 'Causes: currency depreciation, reserve depletion, interest rate spikes',
 'Distinguishes "hot money" (portfolio flows) from FDI (more stable)'
 ],
 analysis: 'Political instability → ↑ Perceived risk → Investors sell domestic assets → ↑ Supply of domestic currency on forex market → Rapid currency depreciation → Central bank uses reserves to defend currency → Reserves depleted → ↑ Interest rates to attract capital → ↓ Investment, ↓ AD → Recession → Further capital flight (vicious cycle).',
 evaluation: 'Capital controls (restricting outflows) can slow capital flight but damage investor confidence and market access. The "Impossible Trinity" means countries cannot simultaneously have fixed exchange rates, free capital movement, and independent monetary policy—capital flight forces a choice.',
 realWorldExample: 'Argentina experienced severe capital flight in 2001-02 as confidence collapsed. The peso lost 75% of its value, banks froze deposits ("corralito"), and the economy contracted 11%—demonstrating the destructive potential of capital flight.'
 },
 {
 id: 'capital-gains-tax',
 title: 'Capital Gains Tax',
 category: 'policy',
 definition: 'A tax levied on the profit realized from the sale of assets (shares, property, businesses) when the selling price exceeds the purchase price. CGT aims to tax increases in wealth and reduce incentives for speculation.',
 keyPoints: [
 'Taxable event occurs on disposal (sale, gift, transfer)',
 'Gain = Disposal Price - Acquisition Cost - Allowable Expenses',
 'Annual exempt amount (tax-free allowance) typically applies',
 'Different rates may apply: residential property vs. other assets'
 ],
 analysis: 'Investor buys shares for £10,000 → Sells for £25,000 → Capital gain = £15,000 → After annual exemption (e.g., £6,000) → Taxable gain = £9,000 → CGT at 20% = £1,800 → Net return = £13,200 → CGT reduces after-tax return on investment → May ↓ incentive to invest.',
 evaluation: 'CGT promotes vertical equity (taxing wealth increases) but may discourage investment and risk-taking. The "lock-in effect" occurs when investors hold assets to defer tax, reducing market liquidity. Preferential CGT rates (below income tax) are justified as encouraging investment but criticized for favoring the wealthy.',
 formula: '\\text{CGT} = (\\text{Disposal Price} - \\text{Acquisition Cost}) \\times \\text{Tax Rate}',
 realWorldExample: 'UK CGT rates are 10%/20% for most assets (basic/higher rate taxpayers) but 18%/28% for residential property. The annual exemption was reduced from £12,300 to £6,000 in 2023, increasing the tax burden on smaller investors.'
 },
 {
 id: 'capital-goods',
 title: 'Capital Goods',
 category: 'theory',
 definition: 'Man-made resources used in the production of other goods and services, including machinery, equipment, factories, and infrastructure. Capital goods are one of the four factors of production and generate a return called interest (or profit on capital).',
 keyPoints: [
 'Factor of production: Land, Labor, Capital, Enterprise',
 'Produced means of production (unlike land, which is natural)',
 'Durable: provides services over multiple production periods',
 'Investment creates new capital; depreciation reduces it'
 ],
 analysis: 'Firm invests in new machinery (capital goods) → ↑ Capital-labor ratio → ↑ Labor productivity → ↓ Average cost of production → ↑ Competitiveness → ↑ Supply (rightward shift) → In aggregate: ↑ LRAS → Economic growth.',
 evaluation: 'Capital goods embody technology—new capital is typically more productive than old. However, capital investment requires sacrificing current consumption (opportunity cost on the PPC). The optimal capital stock depends on the interest rate, depreciation rate, and marginal product of capital.',
 realWorldExample: 'Tesla\'s Gigafactories represent massive capital goods investments—automated production lines that increase output per worker. The factories themselves are capital goods producing consumer goods (electric vehicles).'
 },
 {
 id: 'capital-intensive',
 title: 'Capital Intensive',
 category: 'theory',
 definition: 'A production process or industry that uses a high proportion of capital relative to labor. Capital-intensive industries have high fixed costs, low variable costs per unit, and benefit from economies of scale.',
 keyPoints: [
 'High capital-to-labor ratio (K/L)',
 'High fixed costs, low marginal costs',
 'Examples: oil refining, semiconductor manufacturing, utilities',
 'Contrast with labor-intensive: textiles, agriculture, services'
 ],
 analysis: 'Capital-intensive production → High fixed costs → Low variable costs → Average cost falls sharply as output increases (spreading fixed costs) → Significant economies of scale → Natural tendency toward oligopoly/monopoly → Barriers to entry (high capital requirements).',
 evaluation: 'Capital intensity suits stable, high-volume production but lacks flexibility. Labor-intensive methods adapt better to fluctuating demand. The optimal factor mix depends on relative prices: if capital is cheap (low interest rates), capital intensity increases. Developing countries with abundant labor typically favor labor-intensive methods.',
 formula: '\\text{Capital Intensity} = \\frac{K}{L} \\text{ (Capital per worker)}',
 realWorldExample: 'Semiconductor fabrication plants ("fabs") cost $10-20 billion to build—among the most capital-intensive facilities in the world. Intel, TSMC, and Samsung dominate due to the massive entry barriers.'
 },
 {
 id: 'capital-requirements',
 title: 'Capital Requirements',
 category: 'macro',
 definition: 'Regulatory rules requiring banks to hold a minimum amount of capital (equity and retained earnings) relative to their risk-weighted assets. Capital requirements aim to ensure banks can absorb losses without becoming insolvent.',
 keyPoints: [
 'Basel Accords set international standards (Basel III current framework)',
 'Tier 1 capital: core equity (shares, retained earnings)',
 'Risk-weighted assets: loans weighted by default probability',
 'Minimum ratios: 4.5% CET1, 6% Tier 1, 8% Total Capital'
 ],
 analysis: '↑ Capital requirements → Banks must hold more equity per £ of loans → ↓ Return on equity (profits spread over larger capital base) → Banks may ↓ lending to maintain ROE → ↓ Credit availability → ↓ Investment (I) → Contractionary effect. But: ↑ Bank resilience → ↓ Systemic risk → ↓ Probability of financial crisis.',
 evaluation: 'Higher capital requirements trade off financial stability against credit availability. Post-2008 reforms (Basel III) significantly raised requirements, reducing crisis probability but potentially constraining lending. Countercyclical buffers allow requirements to flex with the economic cycle—higher in booms, relaxed in recessions.',
 formula: '\\text{Capital Ratio} = \\frac{\\text{Tier 1 Capital}}{\\text{Risk-Weighted Assets}} \\geq 6\\%',
 realWorldExample: 'UK banks now hold 15-20% capital ratios, compared to 3-5% before 2008. This reduced leverage makes banks safer but also less profitable—average bank ROE fell from 15%+ to under 10%.'
 },
 {
 id: 'capital-labor-ratio',
 title: 'Capital to Labor Ratio',
 category: 'theory',
 definition: 'The amount of capital employed per worker in a production process, measured as K/L. A higher capital-labor ratio indicates more capital-intensive production and typically correlates with higher labor productivity.',
 keyPoints: [
 'K/L = Capital stock ÷ Number of workers',
 'Higher K/L → Higher labor productivity (output per worker)',
 'Developed countries have higher K/L than developing countries',
 'Optimal K/L depends on relative factor prices (wage rate vs. interest rate)'
 ],
 analysis: 'K/L increases (capital deepening) → Each worker has more equipment → ↑ Marginal product of labor → ↑ Output per worker → ↑ Wages (MPL = real wage in competitive markets) → But: diminishing returns mean each additional unit of K adds less to output.',
 evaluation: 'The Solow growth model shows that capital deepening alone cannot sustain growth indefinitely due to diminishing returns. Eventually, the marginal product of capital falls to equal the depreciation rate (steady state). Sustained growth requires technological progress that shifts the production function upward.',
 formula: '\\frac{K}{L} \\text{ where } Y = f(K, L)',
 realWorldExample: 'US manufacturing has a K/L ratio approximately 10 times that of India. This explains the productivity gap—US workers produce more per hour because they work with more capital equipment.'
 },
 {
 id: 'capital-widening-deepening',
 title: 'Capital Widening and Deepening',
 category: 'macro',
 definition: 'Capital widening increases the capital stock to match a growing labor force (K/L constant). Capital deepening increases capital per worker (K/L rises), boosting labor productivity. Both contribute to economic growth but through different mechanisms.',
 keyPoints: [
 'Widening: K grows at same rate as L → K/L unchanged',
 'Deepening: K grows faster than L → K/L increases → ↑ Productivity',
 'Widening maintains output per worker; deepening increases it',
 'Developing countries need widening; developed countries focus on deepening'
 ],
 analysis: 'Capital Widening: Labor force grows 2% → Capital must grow 2% to maintain K/L → Output per worker unchanged → GDP grows at same rate as population. Capital Deepening: Capital grows 5%, labor grows 2% → K/L increases → ↑ MPL → ↑ Output per worker → GDP grows faster than population → Rising living standards.',
 evaluation: 'Developing countries often prioritize capital widening to employ growing populations. Developed countries with stable populations focus on capital deepening for productivity growth. The Harrod-Domar model emphasizes widening (maintaining the capital-output ratio), while Solow emphasizes deepening and technological progress.',
 formula: '\\text{Widening: } \\Delta K = n \\cdot K \\text{; Deepening: } \\Delta K > n \\cdot K',
 realWorldExample: 'China\'s growth combined both: massive capital widening (employing rural migrants in factories) and deepening (increasingly sophisticated equipment). As the labor force peaks, China must shift to deepening and innovation for continued growth.'
 },
 {
 id: 'capitalism-vs-socialism',
 title: 'Capitalism vs. Socialism',
 category: 'theory',
 definition: 'Two contrasting economic systems. Capitalism features private ownership of the means of production, market-determined allocation, and profit motivation. Socialism features collective/state ownership, planned allocation, and production for social need rather than profit.',
 keyPoints: [
 'Capitalism: Private property, free markets, price mechanism, profit motive',
 'Socialism: Public ownership, central planning, equitable distribution',
 'Mixed economies combine elements of both (e.g., UK, Nordic countries)',
 'The "economic calculation problem" challenges socialist planning'
 ],
 analysis: 'Capitalism: Price signals guide resource allocation → Profit incentive drives efficiency → But: market failures (externalities, inequality, monopoly) require correction. Socialism: Planning eliminates market failures → Equitable distribution → But: no price signals → Information problem → Inefficient resource allocation.',
 evaluation: 'The 20th century provided a natural experiment: capitalist economies generally outperformed socialist ones in growth and living standards. However, pure capitalism generates inequality and instability, while socialism faces the "knowledge problem" (Hayek)—planners cannot replicate the information contained in market prices.',
 realWorldExample: 'East vs. West Germany (1949-1990) illustrated the systems: both started similarly, but by 1989, West German GDP per capita was 3-4 times higher. Post-transition, former socialist economies faced painful adjustment to market systems.'
 },
 {
 id: 'capitalist-definition',
 title: 'Capitalist (Definition)',
 category: 'theory',
 definition: 'An individual or entity that owns capital goods and employs them in production for profit. In Marxist terminology, the capitalist class (bourgeoisie) owns the means of production and extracts surplus value from workers\' labor.',
 keyPoints: [
 'Owns means of production (factories, equipment, financial capital)',
 'Earns profit/interest as return on capital ownership',
 'Bears risk: may lose capital if venture fails',
 'Marxist view: exploits labor by paying wages below value created'
 ],
 analysis: 'Capitalist invests £1 million in factory → Employs workers at market wage → Output sold for £1.2 million → Profit = £200,000 → Profit represents return to risk-bearing and entrepreneurship (mainstream view) OR extraction of surplus value from unpaid labor (Marxist view).',
 evaluation: 'The role of capitalists is debated. Neoclassical economics sees profit as the reward for risk, delayed consumption, and organization. Marxist economics views profit as exploitation—workers create all value but receive only subsistence wages. Modern stakeholder capitalism attempts to balance shareholder returns with worker and social interests.',
 realWorldExample: 'Venture capitalists epitomize the capitalist role: they provide risk capital to startups, accepting high failure rates in exchange for potential high returns. Their capital enables innovation that might otherwise not occur.'
 },
 {
 id: 'capitalist-economic-system',
 title: 'Capitalist Economic System',
 category: 'theory',
 definition: 'An economic system characterized by private ownership of productive resources, market-based allocation through the price mechanism, profit motivation, and voluntary exchange. Also known as a market economy or free enterprise system.',
 keyPoints: [
 'Private property rights: legal ownership of resources and output',
 'Price mechanism: coordinates supply and demand through market prices',
 'Profit motive: incentivizes efficiency and innovation',
 'Consumer sovereignty: consumers determine what is produced through demand'
 ],
 analysis: 'Consumer demand signals preferences → ↑ Price where demand exceeds supply → ↑ Profit signals for producers → Resources shift to profitable sectors → Supply expands → Prices stabilize → Efficient allocation without central planning. Competition drives: ↓ Costs, ↑ Quality, Innovation.',
 evaluation: 'Capitalism excels at efficiency and innovation but fails to provide public goods, correct externalities, or ensure equity. Market failures justify government intervention (regulation, taxation, provision). The optimal system is typically a mixed economy—markets where they work well, government where they fail.',
 realWorldExample: 'The US represents a relatively pure capitalist system with limited government intervention. Nordic countries combine capitalist production with extensive redistribution. China\'s "state capitalism" blends market mechanisms with significant state ownership and planning.'
 },
 {
 id: 'carbon-price-support',
 title: 'Carbon Price Support',
 category: 'market-failure',
 definition: 'A UK policy supplementing the EU Emissions Trading System (ETS) carbon price with an additional tax to create a higher, more stable carbon price floor. Designed to incentivize low-carbon investment by ensuring a minimum cost of carbon emissions.',
 keyPoints: [
 'UK Carbon Price Floor = ETS price + Carbon Price Support rate',
 'Currently ~£18/tonne CPS on top of UK ETS price',
 'Aims to provide investment certainty for renewable energy',
 'Raises costs for fossil fuel electricity generation'
 ],
 analysis: '↑ Carbon price → ↑ Cost of coal/gas electricity generation → Relative ↓ cost of renewables → ↑ Investment in wind, solar, nuclear → ↓ Carbon emissions → Externality partially internalized. Also: ↑ Electricity prices → ↓ Demand (efficiency incentive) → Further ↓ emissions.',
 evaluation: 'The carbon price support successfully accelerated UK coal phase-out (from 40% of generation in 2012 to near-zero by 2023). However, it raised industrial electricity costs, potentially causing "carbon leakage" (production moving to countries with lower carbon prices). Ideally, a global carbon price would prevent leakage.',
 realWorldExample: 'UK electricity sector emissions fell 70% between 2012-2022, largely due to the carbon price making coal uneconomic. The UK now has among the highest carbon prices globally, driving the transition to renewables.'
 },
 {
 id: 'carbon-tax',
 title: 'Carbon Tax',
 category: 'market-failure',
 definition: 'A tax on carbon dioxide emissions (or the carbon content of fossil fuels) designed to internalize the negative externality of climate change. By making polluters pay the social cost of carbon, it incentivizes emission reductions and clean technology adoption.',
 keyPoints: [
 'Pigouvian tax: sets tax equal to Marginal External Cost (MEC)',
 'Aims to achieve: Marginal Social Cost = Marginal Social Benefit',
 'Advantages: price certainty, revenue generation, economic efficiency',
 'Disadvantages: quantity uncertainty, regressive impact, competitiveness concerns'
 ],
 analysis: 'Production creates CO₂ emissions → MPC < MSC (external cost not borne by producer) → Market overproduces → Carbon tax = MEC per unit → ↑ Production costs → ↓ Supply → ↓ Quantity to socially optimal level → Deadweight loss eliminated → Allocative efficiency restored.',
 evaluation: 'A carbon tax is economically efficient (minimizes abatement cost) but faces political resistance. It\'s regressive (hits poor households proportionately harder via higher energy costs)—revenue recycling (dividends to households) can offset this. Quantity is uncertain unlike cap-and-trade; the tax rate must be adjusted if emission targets are missed.',
 formula: 't^* = MEC \\text{ (Optimal tax equals Marginal External Cost)}',
 realWorldExample: 'Sweden\'s carbon tax (introduced 1991) is among the world\'s highest at ~$130/tonne. Swedish emissions fell 25% while the economy grew 75%—evidence that carbon taxation can work without harming growth.'
 },
 {
 id: 'carbon-trading',
 title: 'Carbon Trading (Emissions Trading)',
 category: 'market-failure',
 definition: 'A market-based system to reduce emissions where a cap on total emissions is set, allowances are distributed or auctioned, and firms can trade allowances. Also known as cap-and-trade, it creates a carbon price through market forces.',
 keyPoints: [
 'Cap: government sets total emissions limit',
 'Trade: firms buy/sell allowances based on abatement costs',
 'Low-cost abaters reduce emissions and sell surplus allowances',
 'High-cost abaters buy allowances rather than abate'
 ],
 analysis: 'Cap set at 100 million tonnes → 100 million allowances issued → Firm A: abatement cost £20/t; Firm B: abatement cost £50/t → Market price settles around £35/t → Firm A abates (cheaper than buying) and sells permits → Firm B buys permits (cheaper than abating) → Total abatement at minimum cost.',
 evaluation: 'Carbon trading achieves emission targets with certainty (unlike carbon tax) but price volatility creates investment uncertainty. The EU ETS price collapsed in 2008-2018 due to over-allocation, weakening incentives. Effective trading requires: tight caps, no free allocation, and link to border adjustment to prevent leakage.',
 formula: 'P_{\\text{allowance}} = MC_{\\text{abatement}} \\text{ (in equilibrium)}',
 realWorldExample: 'The EU Emissions Trading System covers ~40% of EU emissions. After reforms tightening the cap, prices rose from €5 (2017) to €80+ (2023), dramatically shifting economics toward renewables and away from coal.'
 },
 {
 id: 'cardinal-ordinal-utility',
 title: 'Cardinal and Ordinal Utility',
 category: 'theory',
 definition: 'Two approaches to measuring utility (satisfaction). Cardinal utility assumes utility can be measured in absolute units ("utils") and compared across individuals. Ordinal utility assumes only that preferences can be ranked (A > B > C) without measuring magnitudes.',
 keyPoints: [
 'Cardinal: utility measured in "utils"; assumes interpersonal comparison possible',
 'Ordinal: only ranking matters; indifference curve analysis',
 'Modern economics uses ordinal utility (avoids measurement problems)',
 'Marginal utility derived from indifference curve slopes (MRS)'
 ],
 analysis: 'Cardinal approach: Good A gives 50 utils, Good B gives 30 utils → A preferred by 20 utils → Diminishing marginal utility explains downward-sloping demand. Ordinal approach: Consumer prefers bundle (3A, 2B) to (2A, 3B) → Indifference curve through (3A, 2B) lies above curve through (2A, 3B) → Slope of IC = MRS = ratio of marginal utilities.',
 evaluation: 'Cardinal utility faces the problem that "utils" cannot be measured objectively or compared across people. Ordinal utility avoids this—we only need to observe choices to infer preferences. However, welfare economics (comparing social states) implicitly requires some interpersonal comparison, challenging strict ordinal approaches.',
 formula: 'MRS_{xy} = \\frac{MU_x}{MU_y} = \\frac{P_x}{P_y} \\text{ (at optimum)}',
 realWorldExample: 'Revealed preference theory (Samuelson) operationalizes ordinal utility: we infer preferences from actual choices. If a consumer buys bundle A when B was affordable, A is "revealed preferred" to B—no utils required.'
 },
 {
 id: 'cartel',
 title: 'Cartel',
 category: 'theory',
 definition: 'A formal agreement between competing firms to coordinate pricing, output, or market allocation to maximize joint profits. Cartels act as collective monopolists, restricting output and raising prices above competitive levels.',
 keyPoints: [
 'Explicit collusion: firms agree on prices/quantities',
 'Illegal in most jurisdictions (anti-trust/competition law)',
 'OPEC is a legal intergovernmental cartel (sovereign immunity)',
 'Inherent instability: each member has incentive to cheat'
 ],
 analysis: 'Firms form cartel → Agree to restrict output to Q* and set price at P* (monopoly price) → Joint profits maximized → But: each firm has incentive to cheat (undercut price or exceed quota) → If one cheats, it gains market share at cartel price → If all cheat, cartel collapses → Prisoner\'s dilemma structure.',
 evaluation: 'Cartels are unstable due to the "incentive to cheat"—game theory predicts defection. Successful cartels require: few members, ability to detect cheating, capacity to punish defectors, and barriers to new entry. OPEC\'s longevity reflects its ability to punish (Saudi Arabia can flood the market) and high entry barriers (geology).',
 formula: '\\text{Cartel Profit} = (P^* - AC) \\times Q^* > \\text{Competitive Profit}',
 realWorldExample: 'The lysine cartel (1992-1995) involving ADM and Asian producers fixed prices, raising them 70% above competitive levels. FBI investigation led to $100 million in fines and executive prison sentences—demonstrating both cartel profitability and legal risks.'
 },
 {
 id: 'cash-flow',
 title: 'Cash Flow in Business',
 category: 'theory',
 definition: 'The movement of money into and out of a business over a period. Positive cash flow (inflows > outflows) enables a firm to meet obligations, invest, and grow. Cash flow differs from profit—a profitable firm can fail if cash flow is negative.',
 keyPoints: [
 'Cash flow ≠ Profit (timing differences, non-cash items)',
 'Operating cash flow: from core business activities',
 'Investing cash flow: capital expenditure, asset sales',
 'Financing cash flow: debt, equity, dividends'
 ],
 analysis: 'Firm makes £100k sales on credit → Profit recorded immediately → But cash not received for 60 days → Meanwhile, suppliers demand payment in 30 days → Cash flow negative despite profit → Firm may become insolvent (unable to pay debts when due) → "Profitable but bust."',
 evaluation: 'Cash flow management is critical for survival, especially for growing firms (increasing working capital needs) and seasonal businesses. Investors analyze free cash flow (operating cash flow minus CapEx) as the true measure of value creation—profit can be manipulated through accounting, but cash is concrete.',
 formula: 'FCF = \\text{Operating Cash Flow} - \\text{Capital Expenditure}',
 realWorldExample: 'Carillion (UK construction firm) reported profits while cash flow was consistently negative—the gap financed by delaying supplier payments. When suppliers demanded payment, Carillion collapsed (2018), destroying £1 billion of pension fund value.'
 },
 {
 id: 'cash-ratio',
 title: 'Cash Ratio',
 category: 'macro',
 definition: 'A liquidity ratio measuring a bank\'s cash and cash equivalents relative to its deposit liabilities. A higher cash ratio indicates greater liquidity but lower profitability (cash earns no interest). Also refers to the reserve ratio in money creation.',
 keyPoints: [
 'Cash Ratio = Cash / Total Deposits',
 'Higher ratio → more liquid but less profitable (idle funds)',
 'Required reserve ratios set minimum cash holdings',
 'Determines money multiplier: 1/cash ratio'
 ],
 analysis: 'Bank holds 10% cash ratio → Deposits £100 million → Reserves = £10 million → Can lend £90 million → These loans become deposits elsewhere → Money multiplier = 1/0.10 = 10 → Maximum money supply expansion = £1 billion from initial £100 million deposit.',
 evaluation: 'Low cash ratios maximize lending and profitability but increase vulnerability to bank runs. Basel III introduced the Liquidity Coverage Ratio (LCR) requiring banks to hold high-quality liquid assets covering 30 days of outflows—a more sophisticated measure than simple cash ratios.',
 formula: '\\text{Money Multiplier} = \\frac{1}{\\text{Cash Ratio}}',
 realWorldExample: 'Northern Rock operated with minimal liquid assets, relying on wholesale funding. When markets froze in 2007, it couldn\'t meet depositor demands—the first UK bank run in 140 years. Post-crisis regulation significantly raised liquidity requirements.'
 },
 {
 id: 'ceiling-prices',
 title: 'Ceiling Prices (Maximum Prices)',
 category: 'policy',
 definition: 'Government-imposed maximum prices set below the market equilibrium to protect consumers from high prices. Ceiling prices create excess demand (shortages) and require rationing mechanisms to allocate the limited supply.',
 keyPoints: [
 'Set below equilibrium: P_max < P_e',
 'Creates shortage: Qd > Qs at the ceiling price',
 'Requires rationing: queuing, coupons, or black markets emerge',
 'Examples: rent controls, price caps on energy, wartime rationing'
 ],
 analysis: 'Market equilibrium: P = £100, Q = 1000 → Government sets ceiling at £60 → At £60: Qd = 1500, Qs = 600 → Shortage of 900 units → Some consumers cannot buy at any price → Black market emerges at price above ceiling → Allocative inefficiency: willing buyers cannot transact with potential sellers.',
 evaluation: 'Ceiling prices help consumers who successfully purchase but harm those who face shortages. Long-run effects worsen the situation: low prices discourage supply (landlords exit rental market, producers reduce investment). Rent controls, for example, reduce housing quality and availability over time—"the best way to destroy a city, short of bombing" (Assar Lindbeck).',
 formula: 'P_{\\text{max}} < P_e \\Rightarrow Q_d > Q_s \\text{ (shortage)}',
 realWorldExample: 'The UK energy price cap limits what suppliers can charge households. When wholesale prices exceeded the cap in 2022, suppliers faced losses, some went bankrupt, and the government provided £60 billion in subsidies to prevent market collapse.'
 },
 // ==================== PHASE 5: ADVANCED EVALUATION TOPICS (C-D) ====================
 {
 id: 'central-planned-economy',
 title: 'Central Planned Economy',
 category: 'policy',
 definition: 'An economic system where the government or central authority makes all decisions regarding production, distribution, and pricing of goods and services. Resources are allocated through administrative directives rather than market mechanisms.',
 keyPoints: [
 'State ownership of the means of production',
 'Central planning agency sets output targets and prices',
 'No profit motive—production aims to meet social objectives',
 'Eliminates market failures but creates government failures'
 ],
 analysis: 'Central authority assesses national needs → Sets production quotas for each industry → Allocates resources to meet targets → Prices set administratively (often below cost for essentials) → No price signals → Information problem: planners cannot know local conditions → Misallocation of resources → Chronic shortages of consumer goods, surpluses of unwanted goods.',
 evaluation: 'Central planning avoids inequality and unemployment but suffers from the "calculation problem" (Hayek/Mises): without market prices, planners cannot efficiently allocate resources. Lack of incentives leads to low productivity and innovation. The collapse of the USSR demonstrated the long-run unsustainability of pure central planning.',
 realWorldExample: 'The Soviet Gosplan set 5-year production targets for 24 million products. Despite detailed planning, chronic shortages (bread queues) coexisted with surpluses (unsold tractors). The system collapsed in 1991.'
 },
 {
 id: 'ceteris-paribus',
 title: 'Ceteris Paribus',
 category: 'theory',
 definition: 'A Latin phrase meaning "all other things being equal" or "holding other factors constant." This assumption allows economists to isolate the effect of one variable on another by assuming all other relevant factors remain unchanged.',
 keyPoints: [
 'Essential for economic model-building and causal analysis',
 'Allows isolation of one relationship (e.g., price and quantity demanded)',
 'A simplifying assumption—rarely holds in the real world',
 'When ceteris paribus fails, multiple variables shift simultaneously'
 ],
 analysis: 'Demand curve shows: ↑ Price → ↓ Quantity demanded, ceteris paribus → This isolates the price effect → If income also rises simultaneously, both curves shift → Net effect on quantity is ambiguous → Without ceteris paribus, we cannot identify cause and effect.',
 evaluation: 'Ceteris paribus is methodologically necessary but empirically unrealistic. In dynamic economies, multiple variables change simultaneously. Econometric techniques (regression analysis) attempt to control for confounding variables, but perfect isolation is impossible. Models should be stress-tested by relaxing this assumption.',
 formula: '\\frac{\\partial Q_d}{\\partial P} < 0 \\text{, ceteris paribus}',
 realWorldExample: 'The law of demand assumes ceteris paribus. But during the 2020 pandemic, both price and income changed simultaneously—making it difficult to isolate why consumption patterns shifted.'
 },
 {
 id: 'chicago-school',
 title: 'Chicago School of Economics',
 category: 'theory',
 definition: 'A neoclassical school of economic thought emphasizing free markets, monetarism, and minimal government intervention. Associated with Milton Friedman, it stresses rational expectations, the inefficiency of fiscal policy, and the primacy of monetary policy for macroeconomic stability.',
 keyPoints: [
 'Markets are self-correcting; government intervention causes distortions',
 'Monetarism: inflation is always a monetary phenomenon (MV=PY)',
 'Rational expectations: agents anticipate policy, rendering it ineffective',
 'Friedman\'s permanent income hypothesis challenges Keynesian consumption theory'
 ],
 analysis: 'Government announces fiscal expansion → Rational agents expect future tax increases to pay for it → ↑ Saving today (Ricardian Equivalence) → ↓ Consumption → Fiscal multiplier ≈ 0 → Policy is ineffective → Only unanticipated monetary shocks affect real variables in the short run.',
 evaluation: 'The Chicago School provides powerful critiques of Keynesian demand management but underestimates market failures and income inequality. The 2008 financial crisis exposed the dangers of excessive deregulation (a Chicago prescription) and rehabilitated Keynesian fiscal policy as a stabilization tool.',
 realWorldExample: 'Friedman advised Pinochet\'s Chile (1970s-80s), implementing free-market "shock therapy." GDP grew but inequality soared. The experiment remains controversial—economic growth vs. social costs.'
 },
 {
 id: 'choice-architecture',
 title: 'Choice Architecture & Nudge Theory',
 category: 'policy',
 definition: 'The design of environments in which people make choices, structured to influence decisions in predictable ways without restricting options. "Nudges" are interventions that steer behavior while preserving freedom of choice (Thaler & Sunstein).',
 keyPoints: [
 'Based on behavioral economics: agents have bounded rationality',
 'Default options powerfully influence outcomes (status quo bias)',
 'Framing effects: how choices are presented matters',
 'Libertarian paternalism: guide behavior without coercion'
 ],
 analysis: 'Old policy: organ donation requires opt-in → Low registration rates (inertia/status quo bias) → Switch to opt-out (presumed consent) → Registration rates jump to >90% → Same choice, different architecture → Behavioral intervention "nudges" socially optimal outcome without mandates.',
 evaluation: 'Nudges are cost-effective but limited. They work for passive decisions (pensions, organ donation) but not for strong preferences (smoking, diet). Critics argue nudges are paternalistic ("who decides what\'s optimal?") and may erode individual autonomy. For major externalities (carbon emissions), traditional regulation may be necessary.',
 realWorldExample: 'The UK\'s auto-enrollment pension scheme (2012) increased workplace pension participation from 55% to 88% by making saving the default option.'
 },
 {
 id: 'classical-unemployment',
 title: 'Classical Unemployment (Real Wage Unemployment)',
 category: 'macro',
 definition: 'Unemployment caused by real wages being held above the market-clearing level, creating a surplus of labor. This occurs when wages are inflexible downward due to minimum wages, trade union power, or efficiency wage considerations.',
 keyPoints: [
 'Real wage (W/P) exceeds equilibrium level',
 'Labor supply exceeds labor demand at the prevailing wage',
 'Caused by: minimum wages, union bargaining, efficiency wages',
 'Solution: reduce real wages or improve labor market flexibility'
 ],
 analysis: 'Equilibrium wage = £10/hour at full employment → Minimum wage set at £12/hour → At £12: Labor supply = 10 million, Labor demand = 8 million → Unemployment = 2 million → Workers priced out of the market → Classical economists prescribe wage cuts or deregulation to clear the market.',
 evaluation: 'Classical unemployment ignores demand-side factors emphasized by Keynesians. During recessions, cutting wages reduces aggregate demand further (paradox of thrift in labor markets). Empirically, moderate minimum wage increases often have minimal disemployment effects (Card & Krueger studies), challenging classical predictions.',
 formula: '\\frac{W}{P} > \\left(\\frac{W}{P}\\right)^* \\Rightarrow L^s > L^d \\text{ (unemployment)}',
 realWorldExample: 'Spain\'s labor market rigidities (high severance pay, union power) contributed to 25%+ unemployment during the Eurozone crisis, while more flexible UK labor markets recovered faster.'
 },
 {
 id: 'cobweb-theory',
 title: 'Cobweb Theory (Price Fluctuations)',
 category: 'theory',
 definition: 'A dynamic model explaining price volatility in markets with production lags (especially agriculture). Producers base planting decisions on current prices but harvest in the future, leading to systematic over/under-production cycles.',
 keyPoints: [
 'Production lag between decision and output (e.g., crop planting)',
 'Adaptive expectations: producers use last period\'s price to plan',
 'Creates cyclical price instability: boom-bust patterns',
 'Three outcomes: convergent, divergent, or perpetual oscillations'
 ],
 analysis: 'Year 1: High price → Farmers plant large crop → Year 2: Bumper harvest → Supply floods market → Price crashes → Year 2 decision: Low price → Farmers reduce planting → Year 3: Shortage → Price spikes → Cycle repeats. If supply elasticity > demand elasticity, oscillations diverge explosively.',
 evaluation: 'Cobweb dynamics depend on relative elasticities. Inelastic demand + elastic supply = explosive oscillations (agriculture). The model assumes naive expectations—if farmers are rational and forward-looking, they would anticipate the cycle and dampen it. Futures markets and government buffer stocks can stabilize prices.',
 formula: 'Q_t^s = f(P_{t-1}) \\text{ (supply lags price by one period)}',
 realWorldExample: 'The "hog cycle" in pig farming: high pork prices → more breeding → 18 months later, oversupply → price crash → farmers exit → shortage → prices rise again. Cycles of 3-4 years observed historically.'
 },
 {
 id: 'cognitive-bias',
 title: 'Cognitive Bias in Economics',
 category: 'theory',
 definition: 'Systematic patterns of deviation from rationality in human judgment and decision-making. Cognitive biases challenge the neoclassical assumption of homo economicus and form the foundation of behavioral economics.',
 keyPoints: [
 'Loss aversion: losses hurt more than equivalent gains please',
 'Anchoring: over-reliance on first piece of information',
 'Confirmation bias: seeking evidence that confirms prior beliefs',
 'Present bias (hyperbolic discounting): overweighting immediate rewards'
 ],
 analysis: 'Homo economicus would maximize expected utility → But real agents exhibit: Status quo bias (inertia) → Mental accounting (treating money differently based on source) → Herding (following the crowd) → Overconfidence (systematic overestimation of own abilities) → These biases cause market inefficiencies and asset bubbles.',
 evaluation: 'Behavioral insights improve policy design (nudges) but don\'t replace rational choice theory for most market analysis. Biases may cancel out at the aggregate level, or arbitrage may eliminate mispricings. The challenge is determining when biases are systematic enough to warrant intervention.',
 realWorldExample: 'The dot-com bubble (1999-2000) exhibited herding and overconfidence—investors piled into loss-making tech stocks believing "this time is different." When the bubble burst, $5 trillion in market value evaporated.'
 },
 {
 id: 'command-economy',
 title: 'Command Economy',
 category: 'policy',
 definition: 'An economic system in which a central authority (typically the state) determines production, investment, prices, and distribution of goods. Synonymous with a centrally planned economy, it represents the opposite extreme from a pure market economy.',
 keyPoints: [
 'Government owns and controls factors of production',
 'Production decisions based on state priorities, not consumer demand',
 'Prices are set administratively, not by supply and demand',
 'Aims: full employment, equality, strategic objectives (military, infrastructure)'
 ],
 analysis: 'State sets priority: heavy industry (steel, military) over consumer goods → Resources directed to factories, not shops → Full employment achieved (no involuntary unemployment) → But consumer goods scarce → Black markets emerge → Without profit signals, no incentive to innovate or improve quality → Long-run stagnation.',
 evaluation: 'Command economies can mobilize resources rapidly (USSR\'s WWII industrialization) but fail at complex resource allocation. The "calculation debate" (Mises vs. Lange) showed that without market prices, rational economic calculation is impossible. Mixed economies attempt to combine planning benefits with market efficiency.',
 realWorldExample: 'North Korea\'s command economy allocates resources to military and elite consumption while the general population faces chronic food shortages. GDP per capita is ~$1,800 vs. South Korea\'s ~$35,000.'
 },
 {
 id: 'compensated-demand-curve',
 title: 'Compensated (Hicksian) Demand Curve',
 category: 'theory',
 definition: 'A demand curve showing how quantity demanded changes with price when the consumer is compensated to remain on the same indifference curve (constant utility). It isolates the pure substitution effect, removing the income effect.',
 keyPoints: [
 'Holds utility constant, not income (unlike Marshallian demand)',
 'Shows only the substitution effect of a price change',
 'Always downward-sloping (substitution effect is always negative)',
 'Used to calculate Compensating Variation (CV) and Equivalent Variation (EV)'
 ],
 analysis: 'Price of X rises → Marshallian demand: quantity falls due to substitution + income effects → Hicksian demand: compensate consumer to maintain original utility → Now only substitution effect remains → Hicksian demand is steeper (smaller response) than Marshallian for normal goods.',
 evaluation: 'Compensated demand curves are theoretically rigorous but unobservable—we cannot actually compensate consumers. They are essential for welfare economics (deadweight loss calculation) because they measure welfare changes at constant utility, avoiding the "path dependence" problem of consumer surplus.',
 formula: 'h(p, \\bar{u}) = \\arg\\min_x \\{p \\cdot x: U(x) \\geq \\bar{u}\\}',
 realWorldExample: 'When calculating the welfare cost of a sugar tax, economists use compensated demand to measure the "pure" distortion, abstracting from the income reduction that also affects consumption.'
 },
 {
 id: 'compensating-equivalent-variation',
 title: 'Compensating & Equivalent Variation',
 category: 'theory',
 definition: 'Two measures of welfare change from price changes. Compensating Variation (CV): the income adjustment needed AFTER a price change to restore original utility. Equivalent Variation (EV): the income adjustment BEFORE a price change that would yield the new utility level.',
 keyPoints: [
 'CV: How much compensation restores original welfare (ex-post)',
 'EV: How much income change equals the welfare effect (ex-ante)',
 'For price increases: CV > Consumer Surplus change > EV',
 'CV and EV bracket the consumer surplus measure'
 ],
 analysis: 'Price of X rises → Consumer worse off → CV asks: "How much extra income would restore original utility?" (move back to original indifference curve) → EV asks: "How much income reduction would have made them equally worse off without the price change?" (move to new indifference curve via income alone).',
 evaluation: 'CV and EV are theoretically superior to consumer surplus (which assumes constant marginal utility of income) but require knowledge of the utility function. For small price changes, all three measures approximately equal. For large changes or non-marginal projects (e.g., building a dam), CV/EV are essential for accurate cost-benefit analysis.',
 formula: 'CV = e(p_1, u_0) - e(p_0, u_0) \\quad EV = e(p_1, u_1) - e(p_0, u_1)',
 realWorldExample: 'To evaluate whether to build a new highway, transport economists use EV to measure how much residents would pay to avoid noise pollution—their willingness to pay reflects the welfare loss.'
 },
 {
 id: 'compensating-wage-differential',
 title: 'Compensating Wage Differential',
 category: 'theory',
 definition: 'The additional wage paid to workers to compensate for undesirable, risky, or unpleasant working conditions. Workers require higher pay to accept jobs with negative non-pecuniary characteristics, equalizing net advantages across occupations.',
 keyPoints: [
 'Equalizes total utility (pecuniary + non-pecuniary) across jobs',
 'Higher wages for: danger, unsociable hours, unpleasant conditions',
 'Lower wages for: prestige, job satisfaction, good location',
 'Adam Smith\'s "net advantages" theory of wage determination'
 ],
 analysis: 'Office job pays £40,000 (pleasant conditions) → Oil rig job requires workers → Same skill level but dangerous, remote, unsociable → Rig must pay £80,000 to attract workers → £40,000 differential compensates for non-pecuniary disutility → In equilibrium, workers are indifferent between the two.',
 evaluation: 'Compensating differentials assume perfect labor market information and mobility. In practice, workers may be unaware of risks (asbestos exposure historically) or trapped in dangerous jobs due to lack of alternatives. Government safety regulation may be justified when information asymmetries exist.',
 formula: 'W_{\\text{dirty}} - W_{\\text{clean}} = \\text{Disutility of conditions}',
 realWorldExample: 'NHS nurses often accept lower pay than private sector equivalents due to job satisfaction and public service motivation. The non-pecuniary benefits offset the wage gap.'
 },
 {
 id: 'compensation-principle-externalities',
 title: 'Compensation Principle for Externalities',
 category: 'market-failure',
 definition: 'The Kaldor-Hicks criterion for evaluating policy changes: a policy is efficient if winners could hypothetically compensate losers and still be better off. Unlike Pareto efficiency, actual compensation need not occur.',
 keyPoints: [
 'Extends Pareto criterion to allow policies with losers',
 'Winners\' gains exceed losers\' losses (potential Pareto improvement)',
 'Compensation is hypothetical, not required',
 'Used in cost-benefit analysis of public projects'
 ],
 analysis: 'New airport: Travelers gain £100m welfare → Local residents lose £30m (noise) → Net social gain = £70m → Kaldor-Hicks efficient: travelers COULD compensate residents and still gain £70m → But if compensation is not paid, residents are worse off → Efficiency without equity.',
 evaluation: 'The compensation principle ignores distribution—a project benefiting billionaires at the expense of the poor could pass the test. Without actual compensation, "efficient" projects may be politically illegitimate. Some economists argue actual compensation should be required for social acceptability.',
 formula: '\\sum \\text{Gains} > \\sum \\text{Losses} \\Rightarrow \\text{Kaldor-Hicks efficient}',
 realWorldExample: 'HS2 (UK high-speed rail) passes Kaldor-Hicks tests (time savings exceed costs) but faces local opposition. Actual compensation (soundproofing, property buyouts) is offered to make the project politically viable.'
 },
 {
 id: 'competition-commission-uk',
 title: 'Competition Commission UK (Now CMA)',
 category: 'policy',
 definition: 'The Competition and Markets Authority (CMA), formed in 2014 by merging the Competition Commission and OFT, is the UK\'s primary competition regulator. It investigates mergers, market dominance, and anti-competitive practices.',
 keyPoints: [
 'Investigates mergers that may reduce competition',
 'Can block or modify mergers that harm consumers',
 'Examines market dominance and abuse of market power',
 'Enforces consumer protection and fair trading laws'
 ],
 analysis: 'Proposed merger: Two supermarkets combine → CMA assesses: Will prices rise? Will choice decrease? Will barriers to entry increase? → If "Substantial Lessening of Competition" (SLC) found → CMA may: block merger, require asset sales (divestiture), or impose behavioral remedies.',
 evaluation: 'The CMA faces challenges: globalization (tech giants operate across borders), dynamic markets (competition evolves rapidly), and resource constraints. Critics argue it\'s too slow and reactive. Others say aggressive intervention may deter beneficial mergers and investment.',
 realWorldExample: 'The CMA blocked Microsoft\'s acquisition of Activision initially (2023), citing concerns about cloud gaming competition, before approving a restructured deal. It blocked Sainsbury\'s-Asda merger (2019) entirely.'
 },
 {
 id: 'competition-policy',
 title: 'Competition Policy',
 category: 'policy',
 definition: 'Government policies designed to promote competition, prevent monopoly abuse, and protect consumer welfare. Includes merger control, anti-cartel enforcement, and regulation of dominant firms\' behavior.',
 keyPoints: [
 'Merger control: blocking or modifying anti-competitive mergers',
 'Anti-trust: prohibiting cartels, price-fixing, market sharing',
 'Abuse of dominance: preventing predatory pricing, exclusive dealing',
 'Market investigations: examining systematically uncompetitive markets'
 ],
 analysis: 'Without competition policy → Firms collude or merge → ↑ Market concentration → ↑ Prices, ↓ Output → Consumer surplus transfers to producer surplus → Deadweight loss created → With policy: Cartels fined (up to 10% of global turnover in EU) → Mergers blocked → Competition maintained → P closer to MC, allocative efficiency preserved.',
 evaluation: 'Competition policy is essential but imperfect. The "consumer welfare standard" is criticized for ignoring: worker exploitation, supplier power, and long-term innovation effects. Some argue for a broader "competition for competition\'s sake" standard. Others contend that large firms achieve efficiencies that benefit consumers (Schumpeterian view).',
 formula: 'HHI = \\sum_{i=1}^{n} s_i^2 \\text{ (merger thresholds often based on HHI)}',
 realWorldExample: 'The EU fined Google €2.4 billion (2017) for abusing search dominance by favoring its own shopping service. This was the largest antitrust fine in EU history at the time.'
 },
 {
 id: 'competitive-devaluation',
 title: 'Competitive Devaluation (Currency Wars)',
 category: 'trade',
 definition: 'A deliberate policy of reducing a currency\'s exchange rate to gain export competitiveness at trading partners\' expense. When multiple countries pursue this simultaneously, it becomes a "currency war" with beggar-thy-neighbor effects.',
 keyPoints: [
 'Aim: boost exports by making them cheaper in foreign currency',
 'Methods: lowering interest rates, QE, direct forex intervention',
 'Zero-sum globally: one country\'s gain is another\'s loss',
 'Risk: retaliation, trade wars, race to the bottom'
 ],
 analysis: 'Country A devalues its currency → Exports cheaper, imports dearer → Current account improves (if Marshall-Lerner holds) → But Country B\'s exports now less competitive → B retaliates with its own devaluation → Net effect: both currencies lower relative to rest of world, but no competitive gain between A and B.',
 evaluation: 'Competitive devaluation was a major cause of 1930s protectionism. Post-war institutions (IMF, G20) discourage it. However, unconventional monetary policy (QE) has exchange rate effects that blur the line between legitimate stimulus and currency manipulation.',
 realWorldExample: 'The US accused China of currency manipulation for years, claiming the yuan was artificially undervalued to boost Chinese exports. In 2019, the US formally labeled China a "currency manipulator" during trade tensions.'
 },
 {
 id: 'competitive-markets',
 title: 'Competitive Markets',
 category: 'theory',
 definition: 'Markets characterized by numerous buyers and sellers, homogeneous products, free entry and exit, and perfect information. In perfectly competitive markets, firms are price-takers and earn only normal profits in the long run.',
 keyPoints: [
 'Price-taking: no single firm can influence market price',
 'Homogeneous products: perfect substitutes',
 'Free entry/exit: no barriers, no sunk costs',
 'Perfect information: all agents know prices and quality'
 ],
 analysis: 'Many firms produce identical wheat → Market price = £200/ton → If one firm charges £201, it sells nothing (consumers switch) → Each firm takes price as given → Profit-maximizes at MC = P → If P > ATC, supernormal profits attract entry → Supply ↑ → Price falls until P = ATC → Long-run equilibrium: normal profits only.',
 evaluation: 'Perfect competition is a theoretical benchmark, not a real-world description. Most markets have some product differentiation, information asymmetries, or barriers to entry. However, "contestable markets" (low entry barriers) may behave competitively even with few firms. The model\'s value is normative—showing what efficiency looks like.',
 formula: 'P = MC = \\min(ATC) \\text{ (long-run equilibrium)}',
 realWorldExample: 'Agricultural commodity markets (wheat, corn) approximate perfect competition: many small farmers, standardized grades, global price information. Individual farmers are price-takers.'
 },
 {
 id: 'competitive-tendering',
 title: 'Competitive Tendering',
 category: 'policy',
 definition: 'A procurement process where government contracts are awarded to the firm offering the best value (lowest cost meeting specifications) through competitive bidding. Used to introduce market discipline into public service provision.',
 keyPoints: [
 'Aims to reduce costs and improve efficiency in public services',
 'Contractors compete on price and quality',
 'Requires clear specification of service standards',
 'Transfer of risk from government to private provider'
 ],
 analysis: 'Previously: In-house refuse collection, no competition → Costs = £10m/year → Competitive tender introduced → Private firms bid → Winning bid = £7m/year → Cost savings of £3m → But quality must be monitored → If specifications are poor, "race to the bottom" on quality → Need robust contract management.',
 evaluation: 'Competitive tendering works well for standardized services (refuse, cleaning) but is problematic for complex services requiring flexibility (social care). Short-term cost savings may come at the expense of worker conditions (lower wages, worse job security). Transaction costs of tendering and monitoring can erode savings.',
 realWorldExample: 'NHS contracted cleaning services to private firms via competitive tendering. Cost savings occurred, but some hospitals reported reduced cleanliness. The COVID-19 pandemic highlighted vulnerabilities in outsourced supply chains.'
 },
 {
 id: 'complementary-goods',
 title: 'Complementary Goods',
 category: 'theory',
 definition: 'Goods that are consumed together, where an increase in the consumption of one leads to an increase in the consumption of the other. The cross-price elasticity of demand (XED) for complements is negative.',
 keyPoints: [
 'XED < 0: price of one rises → demand for the other falls',
 'Strong complements: cars and petrol, printers and ink',
 'Weak complements: bread and butter',
 'Complements create interdependent demand curves'
 ],
 analysis: 'Price of printers falls (technology improvement) → Demand for printers rises → Derived demand for ink cartridges rises → Ink cartridge demand curve shifts right → Printer companies may sell printers at cost and profit from high-margin ink (razor-razorblade model) → Exploits complementarity for profit maximization.',
 evaluation: 'Complementarity creates market power opportunities. Firms may "lock in" consumers with cheap initial purchases then exploit them with expensive complements (aftermarket monopoly). Competition policy may need to address bundling and tying arrangements that exploit complementarity.',
 formula: 'XED_{xy} = \\frac{\\%\\Delta Q_x}{\\%\\Delta P_y} < 0 \\text{ (complements)}',
 realWorldExample: 'Apple\'s ecosystem relies on complementarity: iPhone, AirPods, Apple Watch, and iCloud are designed to work together. Switching costs keep consumers locked in.'
 },
 {
 id: 'composite-demand',
 title: 'Composite Demand',
 category: 'theory',
 definition: 'Demand for a good that has multiple uses. The total demand is the sum of demands from different uses. A change in demand from one use affects the price and availability for other uses.',
 keyPoints: [
 'Good has several different applications',
 'Total demand = sum of all individual use demands',
 'Price changes affect all uses simultaneously',
 'Common in resource markets: land, oil, agricultural products'
 ],
 analysis: 'Corn has three uses: food, animal feed, biofuels → Government mandates ↑ biofuel use → Demand for corn in biofuels ↑ → Corn price rises → Less corn available at higher price for food and feed → Food prices rise → Animal feed costs ↑ → Meat prices rise → Policy for one use cascades to all others.',
 evaluation: 'Composite demand creates policy trade-offs. Promoting one use (biofuels for environmental reasons) may harm other uses (food security). Markets allocate based on willingness to pay—the highest-value use gets the resource—but this may conflict with social priorities (food for the poor vs. fuel for cars).',
 realWorldExample: 'The US corn ethanol mandate diverted corn from food to fuel, contributing to the 2007-08 global food price crisis. Tortilla prices doubled in Mexico, causing "tortilla riots."'
 },
 {
 id: 'concentration-ratios',
 title: 'Concentration Ratios & Market Structure',
 category: 'theory',
 definition: 'Measures of market concentration indicating the degree of dominance by the largest firms. The n-firm concentration ratio (CR_n) is the combined market share of the n largest firms. Higher ratios indicate less competition.',
 keyPoints: [
 'CR4, CR5: combined share of top 4 or 5 firms',
 'CR > 60%: oligopolistic market',
 'Herfindahl-Hirschman Index (HHI) provides more nuance',
 'Used by competition authorities to assess market power'
 ],
 analysis: 'Market with 100 firms, each with 1% share → CR4 = 4% (fragmented, competitive) → After consolidation: 4 firms each with 20% → CR4 = 80% (concentrated, oligopolistic) → Fewer firms → ↑ Likelihood of tacit collusion → ↓ Price competition → ↑ Prices, ↓ Consumer welfare.',
 evaluation: 'Concentration ratios are crude—they ignore: size distribution of top firms, import competition, potential entry, and market definition. Two markets with CR4 = 80% may have very different competitive dynamics (one with 20-20-20-20 vs. 60-10-5-5). HHI addresses some issues but not all.',
 formula: 'CR_n = \\sum_{i=1}^{n} s_i \\quad HHI = \\sum_{i=1}^{N} s_i^2 \\times 10000',
 realWorldExample: 'UK groceries: Tesco, Sainsbury\'s, Asda, Morrisons → CR4 ≈ 65%. This triggers CMA scrutiny of any merger among these players.'
 },
 {
 id: 'constant-prices',
 title: 'Constant Prices (Real Terms)',
 category: 'macro',
 definition: 'Values adjusted for inflation by using prices from a fixed base year. Constant prices remove the effect of inflation, allowing comparison of real (volume) changes over time. Contrast with current/nominal prices.',
 keyPoints: [
 'Removes inflation distortion from time-series data',
 'GDP at constant prices = Real GDP',
 'Enables comparison of "apples to apples" across years',
 'Base year prices used as the standard'
 ],
 analysis: 'Nominal GDP 2020: £2 trillion, 2023: £2.4 trillion → 20% nominal growth → But inflation = 15% over period → Real GDP growth = 20% - 15% ≈ 5% → Constant prices reveal true output expansion. If nominal growth < inflation, real GDP is falling despite higher nominal figures.',
 evaluation: 'Constant price calculations require a price index, which involves methodological choices (how to weight items, handle quality changes, new products). CPI and GDP deflator may give different answers. "Hedonic adjustment" for quality improvements is controversial—critics say it overstates real growth.',
 formula: '\\text{Real Value} = \\frac{\\text{Nominal Value}}{\\text{Price Index}} \\times 100',
 realWorldExample: 'UK Real GDP fell 9.3% in 2020 (COVID) then grew 7.5% in 2021. Nominal figures would have been distorted by the inflation surge in 2021, masking the recovery scale.'
 },
 {
 id: 'constant-returns-to-scale',
 title: 'Constant Returns to Scale',
 category: 'theory',
 definition: 'A production characteristic where a proportional increase in all inputs leads to the same proportional increase in output. Doubling all inputs exactly doubles output. LRAC is horizontal in this range.',
 keyPoints: [
 'Homogeneous of degree one: f(λK, λL) = λf(K, L)',
 'LRAC is constant (neither economies nor diseconomies of scale)',
 'Often assumed in theoretical models (Cobb-Douglas with α + β = 1)',
 'Firms can replicate production at any scale'
 ],
 analysis: 'Factory produces 100 units with 10 workers and 5 machines → With constant returns: 20 workers and 10 machines → 200 units → No economies or diseconomies → LRAC remains flat → Optimal firm size is indeterminate → Market structure depends on demand, not cost advantages.',
 evaluation: 'Pure constant returns are rare. Most production exhibits increasing returns at low output (specialization gains) and decreasing returns at high output (coordination problems). Constant returns may apply over an intermediate range—the "flat" portion of the U-shaped LRAC curve.',
 formula: 'f(\\lambda K, \\lambda L) = \\lambda f(K, L) \\text{ for all } \\lambda > 0',
 realWorldExample: 'Franchising models (McDonald\'s, Subway) assume approximate constant returns—each outlet can be replicated at similar cost per unit. This allows decentralized expansion without diseconomies.'
 },
 {
 id: 'consumer-durables',
 title: 'Consumer Durables',
 category: 'macro',
 definition: 'Goods purchased by households that provide utility over an extended period (typically more than three years), such as cars, appliances, and furniture. Durable spending is highly cyclical and interest-rate sensitive.',
 keyPoints: [
 'Long-lived goods: cars, refrigerators, furniture',
 'Purchase is discretionary and deferrable',
 'Highly sensitive to interest rates and confidence',
 'Major component of consumer spending volatility'
 ],
 analysis: 'Recession hits → Income uncertainty ↑ → Consumers defer durable purchases (keep old car another year) → ↓ Durable demand → ↑ Inventory accumulation → Manufacturers cut production → Multiplier effects → Deeper recession. Durables amplify business cycles.',
 evaluation: 'Durables are a leading indicator of the business cycle. Their sensitivity to credit conditions means monetary policy (interest rates) strongly affects this sector. However, pent-up demand creates strong recovery once confidence returns—durables lead both recessions and recoveries.',
 realWorldExample: 'UK car sales fell 29% in 2020 (COVID) as consumers deferred purchases. In 2021, pent-up demand met supply shortages (semiconductor chips), causing price spikes and long waiting lists.'
 },
 {
 id: 'consumer-sovereignty',
 title: 'Consumer Sovereignty',
 category: 'theory',
 definition: 'The principle that consumer preferences determine what is produced in a market economy. Firms respond to consumer demand to maximize profits, effectively making consumers the "sovereigns" of the economic system.',
 keyPoints: [
 'Consumers "vote" with their spending',
 'Firms are "servants" responding to demand',
 'Implies optimal allocation if preferences are well-informed',
 'Challenged by: advertising, behavioral biases, information failures'
 ],
 analysis: 'Consumers want organic food → Demand for organic rises → Price rises → Profit opportunity signals farmers → Farmers switch to organic → Supply rises → Organic becomes mainstream → Consumer preferences have reshaped production. Market mechanism translates preferences into outcomes.',
 evaluation: 'Consumer sovereignty is limited by: producer influence (advertising creates preferences), information asymmetry (consumers can\'t evaluate complex products), and behavioral biases (consumers make "mistakes"). Merit/demerit goods suggest some preferences should be overridden (paternalism). True sovereignty requires informed, rational consumers.',
 realWorldExample: 'The rise of plant-based meat (Beyond Meat, Impossible Foods) reflects changing consumer preferences for sustainable protein. Demand shifted production away from traditional meat.'
 },
 {
 id: 'consumer-producer-surplus-advanced',
 title: 'Consumer & Producer Surplus (Advanced)',
 category: 'theory',
 definition: 'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay. Producer surplus is the difference between the price received and the minimum price sellers would accept. Together, they measure total welfare.',
 keyPoints: [
 'Consumer surplus: area under demand curve, above price',
 'Producer surplus: area above supply curve, below price',
 'Total welfare = CS + PS (maximized at competitive equilibrium)',
 'Deadweight loss: welfare lost when market is distorted'
 ],
 analysis: 'Competitive equilibrium: P = £10, Q = 100 → Consumer surplus = area below demand curve, above £10 → Producer surplus = area above supply curve, below £10 → Total surplus maximized → Now impose a £3 tax → Price rises to £12 → Quantity falls to 80 → CS and PS both shrink → Tax revenue = £3 × 80 = £240 → But welfare loss > tax revenue → Deadweight loss created.',
 evaluation: 'Surplus measures assume: constant marginal utility of income (dubious), no externalities, and well-defined demand curves. For large price changes, compensating/equivalent variation are superior measures. Despite limitations, CS/PS provide intuitive welfare analysis for policy evaluation.',
 formula: 'CS = \\int_0^Q [D(q) - P] \\, dq \\quad PS = \\int_0^Q [P - S(q)] \\, dq',
 realWorldExample: 'Estimating the welfare cost of tariffs: A 25% steel tariff raises prices, reducing consumer surplus. The loss exceeds the gain to domestic producers and tariff revenue—the difference is deadweight loss.'
 },
 {
 id: 'consumption-externality',
 title: 'Consumption Externality',
 category: 'market-failure',
 definition: 'A spillover effect from consumption that affects third parties not involved in the transaction. Positive consumption externalities (e.g., vaccinations) are underconsumed; negative consumption externalities (e.g., alcohol) are overconsumed.',
 keyPoints: [
 'Divergence between private and social benefit/cost of consumption',
 'Positive externality: MSB > MPB (underconsumption)',
 'Negative externality: MSC > MPC (overconsumption)',
 'Market failure: price mechanism ignores third-party effects'
 ],
 analysis: 'Vaccination: Private benefit = immunity for individual → Social benefit = herd immunity for community → MSB > MPB → At market price, too few vaccinate → Free-rider problem (benefit from others\' vaccination without cost) → Subsidy or mandate needed to reach social optimum.',
 evaluation: 'Identifying and measuring consumption externalities is difficult. The "social optimum" depends on value judgments about whose benefits/costs count. Pigouvian subsidies/taxes require accurate externality measurement, which is often contentious (e.g., value of reduced COVID transmission).',
 formula: 'MSB = MPB + MEB \\text{ (positive externality)} \\quad Q^* > Q_m',
 realWorldExample: 'The UK provides free flu vaccinations to at-risk groups, recognizing that private vaccination decisions undervalue the positive externality of reduced transmission to vulnerable populations.'
 },
 {
 id: 'contagion-economics',
 title: 'Contagion (Financial & Economic)',
 category: 'macro',
 definition: 'The spread of economic or financial crises from one country or sector to others through trade, financial, or psychological channels. Contagion can cause crises to cascade globally, even to fundamentally sound economies.',
 keyPoints: [
 'Trade channel: recession in one country reduces its imports from others',
 'Financial channel: bank exposure to failing assets spreads losses',
 'Confidence channel: fear spreads, causing capital flight and panic',
 'Can be "pure" (fundamentally unrelated) or "fundamental" (shared vulnerabilities)'
 ],
 analysis: 'Thai baht crisis (1997) → Investors reassess "emerging market risk" → Sell Korean, Indonesian, Malaysian assets → Capital flight from all Asian economies → Currency collapses cascade → Even fundamentally sound countries hit (contagion) → Self-fulfilling panic creates real economic damage.',
 evaluation: 'Contagion challenges the efficient markets hypothesis—crisis spread may be irrational. However, it reveals hidden correlations (common lenders, similar vulnerabilities). IMF intervention aims to halt contagion by restoring confidence before panic becomes self-fulfilling.',
 realWorldExample: 'The 2008 Lehman Brothers collapse triggered global contagion: US mortgage losses → European bank exposure → Credit freeze worldwide → Global trade collapse → Even commodity exporters (Australia, Brazil) suffered despite no direct exposure.'
 },
 {
 id: 'contingent-liabilities',
 title: 'Contingent Liabilities',
 category: 'macro',
 definition: 'Potential financial obligations that may arise depending on the outcome of future uncertain events. Government contingent liabilities include loan guarantees, deposit insurance, and implicit commitments to bail out systemically important institutions.',
 keyPoints: [
 'Off-balance sheet: not recorded as current liabilities',
 'Become actual liabilities if certain conditions occur',
 'Government examples: bank bailouts, pension deficits, nuclear cleanup',
 'Can suddenly materialize, causing fiscal crisis'
 ],
 analysis: 'Government provides implicit guarantee to banks → Banks take more risk (moral hazard) → Crisis occurs → Government must honor implicit guarantee → Contingent liability becomes actual debt → Example: UK bank bailouts 2008: £500 billion in guarantees, £137 billion in actual support → National debt surged.',
 evaluation: 'Contingent liabilities make fiscal positions appear healthier than they are. Stress testing (what if house prices fall 30%?) is essential for fiscal sustainability analysis. Some contingent liabilities are essentially certain (aging population pension costs) but are excluded from official debt figures, distorting fiscal comparisons.',
 realWorldExample: 'Ireland\'s government guaranteed all bank deposits and senior debt in 2008. When banks failed, this contingent liability of €440 billion crystallized, causing Ireland\'s debt-to-GDP ratio to soar from 25% to 120%.'
 },
 {
 id: 'convergence-criteria-euro',
 title: 'Convergence Criteria (Maastricht Criteria)',
 category: 'trade',
 definition: 'The five criteria EU member states must meet to adopt the Euro: inflation within 1.5% of the three best performers, budget deficit ≤3% of GDP, debt ≤60% of GDP, exchange rate stability for 2 years, and long-term interest rates within 2% of the three lowest.',
 keyPoints: [
 'Inflation: ≤1.5 percentage points above three lowest inflation rates',
 'Deficit: ≤3% of GDP (fiscal discipline)',
 'Debt: ≤60% of GDP or declining satisfactorily',
 'ERM II membership: 2 years without severe tensions',
 'Interest rates: ≤2 percentage points above three lowest rates'
 ],
 analysis: 'Criteria designed for: fiscal discipline (deficit/debt) → Price stability (inflation) → Financial integration (interest rates) → Exchange rate stability (ERM II) → Countries meeting criteria are "converged" and can join monetary union without asymmetric shocks.',
 evaluation: 'The criteria were politically applied: Greece joined despite falsified data, Italy exceeded the debt ratio. Post-crisis, many Eurozone members consistently violate the 3% deficit and 60% debt rules. The Stability and Growth Pact enforcement is weak, undermining the original convergence logic.',
 formula: '\\text{Deficit} \\leq 3\\% \\text{ of GDP} \\quad \\text{Debt} \\leq 60\\% \\text{ of GDP}',
 realWorldExample: 'Greece joined the Euro in 2001, later revealed to have used Goldman Sachs derivatives to hide true debt levels. When the truth emerged in 2010, Greece triggered the Eurozone debt crisis.'
 },
 {
 id: 'core-inflation',
 title: 'Core Inflation',
 category: 'macro',
 definition: 'A measure of underlying inflation that excludes volatile components like food and energy prices. Core inflation reveals the persistent trend in prices, helping central banks distinguish temporary shocks from embedded inflation.',
 keyPoints: [
 'Excludes: food, energy (volatile commodities)',
 'Reveals underlying price pressures',
 'Central banks focus on core for policy decisions',
 'Headline inflation can diverge significantly from core'
 ],
 analysis: 'Oil price shock → Headline CPI jumps 6% → But core CPI remains 2% → Shock is temporary (will reverse or stabilize) → Central bank should not tighten aggressively → If core rises (second-round effects: wage demands), then tightening is warranted → Core distinguishes signal from noise.',
 evaluation: 'Core inflation is useful but imperfect: food and energy are real costs for households (especially the poor). Persistent commodity price rises can feed into core via wage-price spirals. Central banks must balance: responding to core (avoiding policy errors) vs. headline (maintaining credibility and inflation expectations).',
 formula: '\\text{Core CPI} = \\text{Headline CPI} - \\text{Food \\& Energy}',
 realWorldExample: 'In 2022, UK headline inflation reached 11% (energy shock) while core was ~5%. The Bank of England faced a dilemma: respond to headline (risking recession) or core (risking unanchored expectations).'
 },
 {
 id: 'cost-principle',
 title: 'Cost Principle (Historical Cost)',
 category: 'theory',
 definition: 'An accounting principle requiring assets to be recorded at their original purchase price rather than current market value. Conservative and verifiable, but may misrepresent economic value when prices change significantly.',
 keyPoints: [
 'Assets recorded at acquisition cost',
 'Depreciation reduces book value over time',
 'Ignores market value changes (appreciation or impairment)',
 'Contrasts with fair value (mark-to-market) accounting'
 ],
 analysis: 'Firm buys land in 1990 for £1 million → Land now worth £10 million → Balance sheet shows £1 million (historical cost) → Book value significantly understates economic value → Firm appears weaker than it is → But value is verifiable and objective (no estimation required).',
 evaluation: 'Historical cost is reliable but not relevant for decision-making. Fair value accounting is relevant but subjective (who determines market value for illiquid assets?). The 2008 crisis saw debate: did mark-to-market cause fire sales by forcing banks to recognize losses, or did historical cost hide losses?',
 realWorldExample: 'During the 2008 crisis, banks argued that marking mortgage-backed securities to market (fair value) forced recognition of losses that were temporary, exacerbating the panic. FASB relaxed rules in 2009.'
 },
 {
 id: 'costs-of-production',
 title: 'Costs of Production',
 category: 'theory',
 definition: 'All expenses incurred by a firm in producing goods or services. Includes fixed costs (invariant with output), variable costs (change with output), and opportunity costs. Cost structure determines supply decisions and market structure.',
 keyPoints: [
 'Fixed costs (FC): rent, salaries, capital depreciation—do not vary with output',
 'Variable costs (VC): raw materials, wages—vary with output',
 'Total cost (TC) = FC + VC',
 'Marginal cost (MC): additional cost of one more unit'
 ],
 analysis: 'Firm produces 100 units: FC = £10,000, VC = £5,000, TC = £15,000 → Average cost = £150/unit → If output rises to 120: FC = £10,000 (unchanged), VC = £6,200 → TC = £16,200 → AC = £135/unit → Spreading fixed costs: economies of scale → MC determines profit-maximizing output where MC = MR.',
 evaluation: 'Cost analysis assumes well-defined production functions and input prices. In practice: joint costs (allocating shared costs between products), opportunity costs (accounting vs. economic profit), and long-run vs. short-run cost structures complicate analysis. Sunk costs should be ignored for forward-looking decisions.',
 formula: 'TC = FC + VC \\quad AC = \\frac{TC}{Q} \\quad MC = \\frac{\\Delta TC}{\\Delta Q}',
 realWorldExample: 'Airlines have high fixed costs (aircraft, crew training) and low marginal costs (fuel, food per passenger). This drives aggressive price competition to fill seats—any revenue above marginal cost contributes to covering fixed costs.'
 },
 {
 id: 'credit-default-swap',
 title: 'Credit Default Swap (CDS)',
 category: 'macro',
 definition: 'A financial derivative that functions like insurance against default. The buyer pays a premium to the seller, who compensates the buyer if a reference entity (borrower) defaults. CDS spreads indicate perceived credit risk.',
 keyPoints: [
 'Buyer pays periodic premium for default protection',
 'Seller pays out if reference entity defaults',
 'Can be used for hedging or speculation',
 'CDS spreads = market-implied default probability'
 ],
 analysis: 'Bank holds Greek government bonds → Buys CDS protection → Pays 500 basis points annually → If Greece defaults, CDS seller compensates losses → Risk transferred from bank to CDS seller → But: Who is the seller? If AIG (as in 2008), seller may not be able to pay → Systemic risk.',
 evaluation: 'CDS can improve risk management but also enable speculation and moral hazard. Banks holding protection may be less motivated to monitor borrowers. The concentration of CDS selling (AIG wrote $500 billion in CDS) created systemic risk that required government bailout. Post-2008 reforms require central clearing and collateral posting.',
 formula: 'CDS \\text{ Spread} \\approx \\frac{\\text{Default Probability} \\times \\text{Loss Given Default}}{1 - \\text{Recovery Rate}}',
 realWorldExample: 'AIG sold CDS protection on mortgage-backed securities. When subprime mortgages defaulted, AIG faced $180 billion in claims it couldn\'t pay, requiring a US government bailout to prevent global financial collapse.'
 },
 {
 id: 'criticism-austrian-economics',
 title: 'Criticism of Austrian Economics',
 category: 'theory',
 definition: 'Critiques of the Austrian school (Mises, Hayek) which emphasizes methodological individualism, skepticism of mathematical modeling, and opposition to central banking. Critics argue Austrian economics is unscientific and its policy prescriptions harmful.',
 keyPoints: [
 'Rejects empirical testing: praxeology is non-falsifiable',
 'Ignores beneficial roles of government and central banks',
 'Ideological: free-market conclusions built into assumptions',
 'Policy prescriptions (no intervention) exacerbate crises'
 ],
 analysis: 'Austrian view: recessions are necessary corrections of malinvestments caused by artificially low interest rates → Central bank intervention prolongs adjustment → Criticism: "Liquidationist" approach in 1930s (Mellon: "liquidate, liquidate") deepened the Depression → Active policy (New Deal, WWII spending) ended it.',
 evaluation: 'Austrian insights on spontaneous order and knowledge problems are valuable. However, rejecting empiricism limits scientific progress. Austrian explanations of business cycles (credit expansion) have some validity but oversimplify financial crises. The dismissal of all government action ignores market failures and coordination problems.',
 realWorldExample: 'Austrian economists predicted the 2008 housing bubble (credit expansion) but their policy prescription (let banks fail, no stimulus) was rejected. Countries that followed Keynesian stimulus (US, UK) recovered faster than those pursuing austerity.'
 },
 {
 id: 'criticism-free-market',
 title: 'Criticism of Free Market Economics',
 category: 'theory',
 definition: 'Critiques of laissez-faire capitalism arguing that unregulated markets create inequality, exploit workers, damage the environment, and are prone to instability. Critics advocate for government intervention to address market failures.',
 keyPoints: [
 'Market failures: externalities, public goods, information asymmetry',
 'Inequality: concentration of wealth without redistribution',
 'Power imbalances: employer-worker, large-small firms',
 'Instability: boom-bust cycles, financial crises'
 ],
 analysis: 'Free market produces: Pareto efficiency (given initial endowments) → But initial endowments are inherited/unequal → Markets amplify inequality → No mechanism for public goods → Environmental externalities ignored → Financial markets prone to bubbles → Requires government: redistribution, regulation, stabilization.',
 evaluation: 'Free markets are powerful wealth-creation mechanisms but require institutional frameworks (property rights, contract enforcement) and correction for failures. The debate is not "market vs. government" but "what combination?" Nordic countries combine free trade and labor markets with strong redistribution and public services.',
 realWorldExample: 'The 2008 financial crisis demonstrated free market failures: deregulated banks took excessive risks, externalities (systemic risk) were ignored, and government intervention was required to prevent collapse.'
 },
 {
 id: 'criticism-keynesian',
 title: 'Criticism of Keynesian Economics',
 category: 'theory',
 definition: 'Critiques of Keynesian demand-management policies, arguing they: cause inflation, crowd out private investment, create unsustainable debt, and ignore supply-side constraints. Monetarists and New Classical economists led these criticisms.',
 keyPoints: [
 'Inflationary: demand stimulus causes inflation when near full employment',
 'Crowding out: government borrowing raises interest rates, reduces private investment',
 'Debt accumulation: deficits become permanent, unsustainable',
 'Time lags: fiscal policy is too slow (recognition, implementation, impact lags)'
 ],
 analysis: 'Keynesian prescription: ↑ G in recession → Monetarist critique: ↑ G requires borrowing → ↑ Bond supply → ↓ Bond prices → ↑ Interest rates → ↓ Private investment → Net stimulus ≈ 0 (full crowding out) → New Classical: Rational agents expect future taxes → ↑ Saving (Ricardian Equivalence) → Multiplier ≈ 0.',
 evaluation: 'Keynesian policies worked well 1945-1970 but contributed to 1970s stagflation (Phillips Curve breakdown). The critique prompted useful refinements: supply-side considerations, central bank independence, fiscal rules. However, 2008-09 demonstrated Keynesian policies remain effective when interest rates hit zero and private demand collapses.',
 realWorldExample: 'The 1970s stagflation (high inflation + high unemployment) discredited pure Keynesianism. Volcker\'s monetarist approach (tight money, accepting recession) broke inflation, validating non-Keynesian prescriptions for that context.'
 },
 {
 id: 'criticism-thatcher-economics',
 title: 'Criticism of Thatcherism',
 category: 'policy',
 definition: 'Critiques of the economic policies of UK Prime Minister Margaret Thatcher (1979-1990), including monetarism, privatization, deregulation, and anti-union legislation. Critics argue these policies increased inequality and deindustrialized the UK.',
 keyPoints: [
 'Deindustrialization: manufacturing employment collapsed',
 'Inequality: Gini coefficient rose sharply',
 'Regional divide: North-South gap widened',
 'Social costs: mass unemployment, community breakdown'
 ],
 analysis: 'Monetarist policy (high interest rates) → Strong pound → Export uncompetitive → Manufacturing collapsed → 3 million unemployed (1982) → Regions dependent on heavy industry devastated → Coal, steel, shipbuilding communities never recovered → Critics: "Creative destruction" without adequate support for losers.',
 evaluation: 'Thatcherite reforms modernized the UK economy (inflation controlled, productivity rose, flexible labor markets) but created permanent scars. Some policies (selling council housing, privatizing utilities) had mixed effects. The debate continues: necessary modernization or ideologically-driven destruction of communities?',
 realWorldExample: 'The 1984-85 miners\' strike was a watershed. The defeat of the NUM ended large-scale coal mining in Britain. Former mining communities (South Wales, Yorkshire) experienced decades of economic decline and health problems.'
 },
 {
 id: 'criticisms-bank-of-england',
 title: 'Criticisms of the Bank of England',
 category: 'policy',
 definition: 'Critiques of UK central bank policy, including: failure to prevent asset bubbles, exacerbating inequality through QE, forecasting errors, and slow response to inflation. Critics span left (inequality) and right (inflation).',
 keyPoints: [
 'Missed 2008 crisis: failed to identify financial stability risks',
 'QE: inflated asset prices, benefiting wealthy owners',
 'Forecasting: consistently underestimated inflation 2021-22',
 'Mandate: too narrow (inflation only) or too broad?'
 ],
 analysis: 'QE mechanism: BoE buys bonds → ↑ Bond prices → ↑ Wealth of bondholders (wealthy) → ↓ Interest rates → ↑ House prices → Owners gain, renters lose → Savings accounts yield nothing → Pensioners harmed → Wealth inequality widens → Monetary policy distributional effects ignored.',
 evaluation: 'The BoE faces impossible trade-offs: price stability vs. financial stability vs. distributional neutrality. Post-2008 reforms added financial stability mandate (FPC). However, the 2022 inflation surge (BoE behind the curve) and the 2022 pension fund crisis (LDI intervention required) raised questions about competence and mandate clarity.',
 realWorldExample: 'In late 2022, the BoE had to intervene to prevent a pension fund collapse triggered by LDI strategies and rising gilt yields. Critics asked why it failed to anticipate this systemic risk.'
 },
 {
 id: 'criticisms-eu',
 title: 'Criticisms of the European Union',
 category: 'trade',
 definition: 'Economic critiques of EU institutions and policies, including: democratic deficit, over-regulation, one-size-fits-all monetary policy, and barriers to global trade. Both Eurosceptics and pro-reform Europeans voice criticisms.',
 keyPoints: [
 'Democratic deficit: unelected Commission, complex decision-making',
 'Over-regulation: red tape burdens businesses',
 'Monetary straitjacket: ECB policy suits Germany, not periphery',
 'Trade diversion: customs union may divert from efficient non-EU suppliers'
 ],
 analysis: 'Single monetary policy: ECB sets rates for 20 economies → Germany needs higher rates (strong growth) → Greece needs lower rates (recession) → Compromise satisfies neither → Periphery stuck in recession without devaluation option → Internal devaluation (wage cuts) is politically and economically painful.',
 evaluation: 'The EU provides genuine benefits: single market (trade creation), peace, regulatory harmonization. But the Eurozone is a flawed optimum currency area (OCA): insufficient labor mobility, no fiscal transfers, asymmetric shocks. Reform (fiscal union, Eurobonds) is politically difficult due to national interests.',
 realWorldExample: 'The Eurozone crisis (2010-15) exposed structural flaws: Greece, Ireland, Portugal, Spain, and Cyprus required bailouts. Austerity conditions sparked political backlash (Syriza, Podemos) and the rise of Euroscepticism.'
 },
 {
 id: 'criticisms-imf',
 title: 'Criticisms of the IMF',
 category: 'trade',
 definition: 'Critiques of International Monetary Fund policies, particularly its conditional lending (structural adjustment programs). Critics argue IMF conditions are ideologically biased toward austerity and liberalization, worsening crises in developing countries.',
 keyPoints: [
 'Pro-cyclical: austerity during recessions deepens downturns',
 'One-size-fits-all: "Washington Consensus" imposed regardless of context',
 'Moral hazard: bailouts encourage risky lending/borrowing',
 'Governance: voting weighted toward rich countries'
 ],
 analysis: 'Country in crisis → IMF loan conditional on: fiscal austerity, privatization, trade liberalization, floating exchange rate → Short-term: stabilization achieved → Long-term: social spending cut → Health/education deteriorate → Inequality rises → Growth undermined → "IMF riots" in response to conditions.',
 evaluation: 'The IMF has evolved: post-2008, it acknowledged austerity multipliers were underestimated and advocated more fiscal space. However, institutional inertia and creditor country influence persist. The IMF\'s "lender of last resort" role remains essential, but reform of governance and conditions continues to be debated.',
 formula: '\\text{IMF Quota} \\propto \\text{GDP, Trade, Reserves} \\text{ (voting power)}',
 realWorldExample: 'Argentina\'s 2001 crisis followed years of IMF-supported policies. The economy collapsed despite meeting conditions. The subsequent default and devaluation—contrary to IMF advice—restored growth, suggesting alternative approaches work.'
 },
 {
 id: 'criticisms-euro',
 title: 'Criticisms of the Euro',
 category: 'trade',
 definition: 'Economic arguments against the single European currency, focusing on loss of monetary sovereignty, asymmetric shocks without adjustment mechanisms, and the "one-size-fits-all" problem of a single interest rate for diverse economies.',
 keyPoints: [
 'Loss of monetary policy: no devaluation, no independent interest rates',
 'Optimum Currency Area (OCA) criteria not met: low labor mobility, no fiscal union',
 'Asymmetric shocks: periphery vs. core need different policies',
 'Competitiveness imbalances: German surpluses, peripheral deficits'
 ],
 analysis: 'Pre-Euro: Greek drachma depreciates → Exports competitive → Trade balance adjusts → Post-Euro: no devaluation option → Must reduce wages instead (internal devaluation) → Politically difficult, economically destructive → Prolonged recession → Debt spirals → Exit ("Grexit") discussed.',
 evaluation: 'The Euro has benefits: transaction cost savings, price transparency, European integration. But without fiscal union (transfers from surplus to deficit regions) or labor mobility (Greeks moving to Germany), it lacks adjustment mechanisms. The US dollar works because of federal fiscal transfers and high interstate labor mobility—Europe lacks both.',
 realWorldExample: 'The Eurozone crisis required bailouts totaling €500+ billion. Greece\'s GDP fell 25%—comparable to the Great Depression. The Euro prevented the normal adjustment (devaluation) that would have occurred with a national currency.'
 },
 {
 id: 'crowding-in-effect',
 title: 'Crowding In Effect',
 category: 'macro',
 definition: 'The phenomenon where government spending, particularly on infrastructure, stimulates private sector investment rather than displacing it. The opposite of crowding out, it occurs when public investment increases profitability and confidence.',
 keyPoints: [
 'Government investment creates profitable opportunities for private sector',
 'Improved infrastructure reduces private costs (transport, utilities)',
 'Confidence effect: stable demand encourages private investment',
 'Multiplier exceeds simple Keynesian model when crowding in occurs'
 ],
 analysis: 'Government builds new road → Transport costs for firms ↓ → New locations become profitable → Private investment follows → Factories, warehouses built along corridor → Employment and income rise → Further consumption and investment → Crowding in amplifies the initial public investment.',
 evaluation: 'Crowding in depends on the type of spending: productive infrastructure (roads, broadband) crowds in; consumption spending (transfers) may crowd out. It also depends on economic conditions: near full employment, crowding out dominates; in recession, crowding in is more likely. The interest rate effect (crowding out) vs. accelerator effect (crowding in) determines the net impact.',
 formula: '\\Delta I_{\\text{private}} = f(\\Delta I_{\\text{public}}, \\text{spare capacity, confidence})',
 realWorldExample: 'The development of London\'s Canary Wharf followed government investment in the Jubilee Line extension. Public transport infrastructure unlocked private commercial real estate investment worth billions.'
 },
 // ========================================
 // PHASE 6: Currency to Duopoly
 // ========================================
 {
 id: 'currency-convertibility',
 title: 'Currency Convertibility',
 category: 'trade',
 definition: 'The ability to exchange one currency for another without government restrictions. Full convertibility (both current and capital accounts) is a prerequisite for international trade and investment, while partial convertibility restricts capital flows to manage financial stability.',
 keyPoints: [
 'Current account convertibility: trade in goods/services unrestricted',
 'Capital account convertibility: financial flows (investment) unrestricted',
 'LDCs often maintain partial convertibility to prevent capital flight',
 'IMF Article VIII requires current account convertibility for members'
 ],
 analysis: 'Country removes capital controls → Foreign investors can repatriate profits freely → ↑ FDI inflows (confidence) → But also: hot money can exit rapidly during crisis → Currency volatility ↑ → Central bank needs larger forex reserves to stabilize → Trade-off between openness and stability.',
 evaluation: 'Full capital account convertibility exposes developing economies to "sudden stops" and speculative attacks. Malaysia\'s capital controls during the 1997 Asian Crisis were initially criticized but later vindicated—they stabilized the economy faster than IMF-prescribed liberalization. The "impossible trinity" shows you cannot have fixed rates, free capital flows, AND independent monetary policy.',
 formula: '\\text{Impossible Trinity: Pick 2 of 3: } \\{\\text{Fixed } e, \\text{ Free } K, \\text{ Independent } M^s\\}',
 realWorldExample: 'China maintains partial convertibility—the renminbi is freely convertible for trade (current account) but capital flows are restricted. This allowed China to avoid the 1997 Asian Crisis contagion that devastated fully open economies like Thailand.'
 },
 {
 id: 'currency-substitution',
 title: 'Currency Substitution (Dollarization)',
 category: 'trade',
 definition: 'The phenomenon where residents of a country use a foreign currency (typically the US dollar) alongside or instead of their domestic currency. This can be unofficial (de facto) or official (de jure), and typically occurs in economies with high inflation or currency instability.',
 keyPoints: [
 'Caused by loss of confidence in domestic currency (hyperinflation)',
 'Pros: price stability, reduced transaction costs, lower interest rates',
 'Cons: loss of seigniorage revenue, no monetary policy, no lender of last resort',
 'Can be partial (dual circulation) or full (domestic currency abandoned)'
 ],
 analysis: 'Domestic inflation → 50% p.a. → Currency loses store of value function → Citizens hold USD for savings → Prices quoted in USD → Contracts written in USD → De facto dollarization → Central bank loses control of money supply → Cannot use monetary policy for stabilization → Fiscal policy becomes the only macro tool.',
 evaluation: 'Full dollarization provides credibility and stability but eliminates monetary sovereignty. Ecuador (dollarized 2000) stabilized inflation but cannot devalue during commodity price crashes—real wages must fall instead. The loss of seigniorage (printing money revenue) represents 1-5% of GDP for most countries. Optimal for small, trade-dependent economies; costly for large, diverse ones.',
 formula: '\\text{Seigniorage Loss} = \\frac{\\Delta M}{P} \\times \\text{(foregone when foreign currency adopted)}',
 realWorldExample: 'Zimbabwe abandoned its hyperinflated currency in 2009, adopting the USD. Inflation fell from 79.6 billion% to single digits. However, Zimbabwe cannot devalue to boost exports—it must rely on productivity gains, which are slow to materialize.'
 },
 {
 id: 'current-account-bop',
 title: 'Current Account (Balance of Payments)',
 category: 'trade',
 definition: 'The component of the Balance of Payments that records transactions in goods (visible trade), services (invisible trade), primary income (investment income, wages), and secondary income (transfers, remittances). A deficit indicates a country is a net borrower from the rest of the world.',
 keyPoints: [
 'CA = Trade Balance + Net Services + Net Primary Income + Net Secondary Income',
 'Deficit: spending on imports > earnings from exports → net borrower',
 'Must be financed by capital/financial account surplus (foreign borrowing/investment)',
 'Persistent deficits may signal declining competitiveness or excessive consumption'
 ],
 analysis: 'Current Account Deficit → Imports > Exports → Domestic absorption > Domestic production → Gap financed by: selling assets (FDI), borrowing abroad (debt), or depleting forex reserves → Sustainable if financing competitive investment → Unsustainable if financing consumption → Eventually requires adjustment (depreciation or recession).',
 evaluation: 'Deficits are not inherently bad—if borrowed funds finance productive investment that generates future export capacity, they are sustainable (Lawson Doctrine). However, deficits financing consumption (like the US pre-2008) accumulate external debt. The UK has run deficits for decades, financed by capital inflows—sustainable while the City remains attractive, vulnerable if confidence shifts.',
 formula: 'CA + KA + FA = 0 \\text{ (BoP identity; FA includes reserves)}',
 realWorldExample: 'The UK ran a current account deficit of 4.3% of GDP in 2022—financed by capital inflows into London property, finance, and government bonds. Sustainability depends on continued foreign confidence in UK assets.'
 },
 {
 id: 'current-constant-prices',
 title: 'Current Prices vs. Constant Prices',
 category: 'macro',
 definition: 'Current prices (nominal values) measure economic output at prices prevailing in the period measured. Constant prices (real values) measure output at prices of a fixed base year, removing inflation to reveal genuine changes in quantity of goods and services produced.',
 keyPoints: [
 'Nominal GDP: value at current market prices (inflated)',
 'Real GDP: value at base year prices (inflation-adjusted)',
 'GDP deflator = (Nominal GDP / Real GDP) × 100',
 'Use constant prices to compare output over time; current prices for contemporary snapshots'
 ],
 analysis: 'Nominal GDP ↑ 10% → Does this reflect ↑ real output or ↑ prices? → If inflation = 7%, Real GDP ↑ only ~3% → Constant prices strip out inflation effect → Allow genuine comparison of living standards over time → Essential for calculating real growth rates.',
 evaluation: 'Constant prices require choosing a base year—the further from the base, the less accurate the comparison (due to changing relative prices and product quality). Chain-linked measures update the base year continuously to address this. Real GDP still ignores non-market activity, environmental degradation, and distributional issues.',
 formula: '\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100',
 realWorldExample: 'UK nominal GDP grew 6% in 2022, but CPI inflation was 9%. Real GDP actually contracted—citizens were worse off despite higher nominal incomes. Always use constant prices for welfare comparisons.'
 },
 {
 id: 'deadweight-debt',
 title: 'Deadweight Debt',
 category: 'macro',
 definition: 'Government debt incurred for unproductive purposes (wars, consumption spending, bailouts) that does not generate future income streams to service the debt. Contrasts with reproductive debt, which finances investment yielding future returns.',
 keyPoints: [
 'Debt without corresponding productive assets creates future burden',
 'Funded by future taxation—intergenerational transfer from young to old',
 'Examples: war debt, cyclical deficits, bank bailouts without equity return',
 'Distinguished from reproductive debt (infrastructure, education) that generates growth'
 ],
 analysis: 'War financed by borrowing → Factories destroyed, not built → Debt remains after war → Must be serviced from future taxation → Reduces future disposable income → ↓ Consumption, ↓ Investment → Drag on economic growth → "Debt overhang" → Classic deadweight burden.',
 evaluation: 'The distinction matters for fiscal sustainability: reproductive debt (financing roads, education) generates growth that helps repay the debt. Deadweight debt compounds without offsetting growth. However, even "unproductive" spending may be justified—World War II debt was deadweight but historically necessary. Context matters more than rigid classification.',
 formula: '\\text{Deadweight} = \\text{Total Debt} - \\text{Debt backed by productive assets}',
 realWorldExample: 'UK national debt peaked at 250% of GDP after World War II—classic deadweight debt. It took until the 1970s to reduce to sustainable levels, partly through inflation eroding real value (financial repression).'
 },
 {
 id: 'debt-burden-ratios',
 title: 'Debt Burden Ratios',
 category: 'macro',
 definition: 'Metrics used to assess a country\'s ability to service external debt, including Debt-to-GDP ratio, Debt-to-Export ratio, and Debt Service Ratio (DSR). These ratios help creditors and policymakers evaluate debt sustainability and default risk.',
 keyPoints: [
 'Debt/GDP: stock measure of overall debt burden relative to economy size',
 'Debt/Exports: indicates ability to earn forex to service external debt',
 'Debt Service Ratio (DSR): annual payments as % of export earnings',
 'IMF/World Bank use these for HIPC debt relief eligibility'
 ],
 analysis: 'Country borrows in USD → Must repay from export earnings (also USD) → If Debt/Exports > 200%, or DSR > 20%, debt unsustainable → Export revenues consumed by debt payments → No resources for development → Poverty trap → May require debt restructuring or forgiveness.',
 evaluation: 'Ratios provide warning signals but not thresholds—Japan\'s 260% Debt/GDP is sustainable (yen-denominated, domestically held), while Argentina defaulted at 60% (USD-denominated, foreign-held). Currency composition, creditor identity, and growth trajectory matter more than raw numbers. Context is essential.',
 formula: '\\text{DSR} = \\frac{\\text{Debt Service (Principal + Interest)}}{\\text{Export Earnings}} \\times 100',
 realWorldExample: 'Zambia\'s debt service payments reached 40% of government revenue in 2020, forcing default. Compare to Japan, where 260% Debt/GDP remains sustainable because debt is yen-denominated and held domestically—no forex constraint.'
 },
 {
 id: 'debt-crisis-africa',
 title: 'Debt Crisis – Sub-Saharan Africa',
 category: 'trade',
 definition: 'The persistent debt overhang afflicting Sub-Saharan African (SSA) countries since the 1980s, caused by commodity price collapses, adverse terms of trade shocks, and structural adjustment programs that often worsened poverty while failing to restore growth.',
 keyPoints: [
 'Origins: 1970s oil shocks, Volcker interest rate hikes (1979-81)',
 'Commodity prices collapsed → Export earnings fell → Debt/Export ratios exploded',
 'Structural Adjustment Programs (SAPs) imposed austerity, liberalization',
 'HIPC Initiative (1996) and MDRI (2005) provided eventual relief'
 ],
 analysis: 'SSA countries borrowed in 1970s (low interest rates) → Volcker shock: interest rates tripled → Commodity prices collapsed → Double blow: ↓ export earnings, ↑ debt servicing costs → Debt/Export ratios > 300% → SAPs imposed: cut health, education → Human capital deteriorated → Growth collapsed → "Lost Decades" of development.',
 evaluation: 'The African debt crisis demonstrated the procyclicality of private lending (lend during booms, withdraw during crises) and the failure of Washington Consensus policies. SAPs prioritized creditor repayment over development. The eventual shift to debt relief (HIPC, MDRI) acknowledged that unpayable debt benefited no one—better to forgive and allow growth than extract payments from impoverished nations.',
 realWorldExample: 'Tanzania spent 9x more on debt service than on health in the 1990s. After HIPC relief (2001), debt service fell and health/education spending increased—demonstrating the development trade-off of debt burdens.'
 },
 {
 id: 'debt-crisis-latin-america',
 title: 'Debt Crisis 1980s – Latin America',
 category: 'trade',
 definition: 'The financial crisis that erupted in August 1982 when Mexico declared it could not service its external debt, triggering defaults and restructurings across Latin America. The crisis revealed systemic risks of petrodollar recycling and sovereign lending without proper risk assessment.',
 keyPoints: [
 'Trigger: Mexico\'s August 1982 moratorium on $80bn debt',
 'Causes: petrodollar recycling, floating-rate loans, Volcker shock',
 'Spread: contagion to Brazil, Argentina, Venezuela, others',
 'Resolution: Brady Plan (1989) exchanged bank loans for tradeable bonds'
 ],
 analysis: 'Oil exporters\' surpluses deposited in US banks → Banks recycled to Latin America (petrodollar recycling) → Loans at floating rates (LIBOR + spread) → Volcker raises US rates (1979-81) → LIBOR triples → Latin American debt service explodes → Simultaneously: commodity prices fall → ↓ Export earnings → Cannot service debt → Default cascade → The "Lost Decade."',
 evaluation: 'The crisis exposed moral hazard in sovereign lending—banks assumed implicit government guarantees. The eventual Brady Plan (1989) restructured debt into tradeable bonds with face value reduction, restarting capital market access. However, the decade was "lost"—per capita GDP in 1990 was below 1980 levels. Lessons: floating-rate debt + commodity dependence + external shocks = explosive combination.',
 formula: '\\text{Debt Dynamics: } \\dot{d} = (r - g) \\cdot d + \\text{Primary Deficit}',
 realWorldExample: 'Brazil\'s inflation reached 2,477% in 1993 as the government printed money to service debt. Only the Plano Real (1994) currency reform, combined with restructuring, restored stability. The Lost Decade cost Brazil approximately 15 years of development.'
 },
 {
 id: 'debt-service-ratios',
 title: 'Debt Service Ratios',
 category: 'macro',
 definition: 'The proportion of a country\'s export earnings required to service external debt (principal repayments plus interest). A key indicator of debt sustainability—ratios above 20-25% signal potential repayment difficulties.',
 keyPoints: [
 'DSR = (Principal + Interest Payments) / Export Earnings × 100',
 'World Bank threshold: DSR > 20% indicates vulnerability',
 'High DSR diverts resources from development to creditor payments',
 'Affected by global interest rates, commodity prices, exchange rates'
 ],
 analysis: 'DSR = 35% → One-third of all export earnings service debt → Only 65% available for imports (capital goods, medicine) → Development constrained → Growth slows → Tax revenues fall → Government cuts spending → Poverty deepens → Yet debt burden remains → Poverty trap created by debt overhang.',
 evaluation: 'DSR is a flow measure (annual burden) complementing stock measures (Debt/GDP). Countries can reduce DSR by: growing exports faster than debt service, negotiating lower interest rates, debt restructuring, or outright default. The "debt Laffer curve" suggests creditors benefit from partial forgiveness if it restores growth—collecting 50% of a growing pie beats 100% of a shrinking one.',
 formula: '\\text{DSR} = \\frac{\\text{Annual Debt Service}}{\\text{Annual Export Earnings}} \\times 100',
 realWorldExample: 'Pakistan\'s DSR reached 40% in 2023, requiring IMF intervention. Each 1% increase in global interest rates adds billions to debt service costs for USD-denominated borrowers—demonstrating the external vulnerability of indebted LDCs.'
 },
 {
 id: 'decreasing-returns-scale',
 title: 'Decreasing Returns to Scale',
 category: 'theory',
 definition: 'A situation where proportionally increasing all inputs leads to a less than proportional increase in output. This indicates diseconomies of scale—the firm has grown beyond its optimal size and experiences coordination failures, bureaucracy, and inefficiency.',
 keyPoints: [
 'Doubling inputs leads to < 2× output',
 'Causes: coordination problems, bureaucracy, communication failures',
 'Long-run average cost curve slopes upward beyond optimal scale',
 'Signals firm should consider downsizing or divesting'
 ],
 analysis: 'Firm doubles labor + capital → Output rises by only 60% → Average cost per unit ↑ → Firm becomes less competitive → Diseconomies from: communication breakdown (too many layers), principal-agent problems (workers shirk), coordination failures (left hand doesn\'t know what right hand does) → LRAC curve slopes upward.',
 evaluation: 'Decreasing returns to scale suggest an optimal firm size beyond which growth destroys value. However, managerial innovations (IT systems, decentralized structures) can extend the range of constant or increasing returns. Conglomerates may exhibit decreasing returns while focused firms in the same industry show increasing returns—organizational structure matters as much as raw scale.',
 formula: 'f(\\lambda K, \\lambda L) < \\lambda \\cdot f(K, L) \\text{ for } \\lambda > 1',
 realWorldExample: 'British Leyland\'s nationalized conglomerate combined multiple car brands but suffered coordination failures—quality collapsed, costs rose. Privatization and breakup (Jaguar, Land Rover sold separately) restored efficiency by reducing diseconomies of scale.'
 },
 {
 id: 'default-choices-nudges',
 title: 'Default Choices (Nudge Economics)',
 category: 'policy',
 definition: 'A behavioral economics concept where the pre-selected option in a choice architecture significantly influences behavior, as people tend to stick with the default due to inertia, procrastination, or implicit endorsement. Defaults can "nudge" people toward socially beneficial outcomes without restricting freedom.',
 keyPoints: [
 'Exploits status quo bias and bounded rationality',
 'Opt-out systems have higher participation than opt-in',
 'Libertarian paternalism: shapes choices without mandating outcomes',
 'Used for pensions (auto-enrollment), organ donation, green energy'
 ],
 analysis: 'Pension auto-enrollment (opt-out default) → 90%+ participation vs. 30% with opt-in → Behavioral barrier removed → People still free to opt out but rarely do → ↑ Retirement savings → ↓ Future poverty → Policy goal achieved without mandates → "Nudge" successful.',
 evaluation: 'Defaults are powerful but raise ethical questions: Who designs the choice architecture? Whose interests do defaults serve? Critics argue nudges are manipulative, undermining autonomy. Proponents counter that no choice is "neutral"—someone must design the form, so why not design it well? The key is transparency about default-setting.',
 formula: '\\text{Participation Rate}_{\\text{opt-out}} >> \\text{Participation Rate}_{\\text{opt-in}}',
 realWorldExample: 'UK pension auto-enrollment (2012) increased participation from 55% to 90%. Opt-out rates are typically < 10%. Thaler and Sunstein\'s "Nudge" (2008) influenced government "Nudge Units" in UK, US, and elsewhere.'
 },
 {
 id: 'defined-benefit-scheme',
 title: 'Defined Benefit Pension Scheme',
 category: 'policy',
 definition: 'A pension scheme where the retirement benefit is determined by a formula (typically final salary × years of service × accrual rate), with the employer bearing investment risk. Contrasts with defined contribution schemes where benefits depend on investment returns.',
 keyPoints: [
 'Benefit = Final Salary × Years of Service × Accrual Rate (e.g., 1/60th)',
 'Employer bears longevity and investment risk',
 'Creates large contingent liabilities on corporate balance sheets',
 'Declining in private sector due to cost; persists in public sector'
 ],
 analysis: 'Worker promised 2/3 final salary after 40 years → Employer must fund this regardless of investment returns → Longevity increases → Pension payouts last longer → Deficit emerges → Employer must inject cash → Diverts resources from investment → Competitive disadvantage vs. firms with defined contribution schemes.',
 evaluation: 'Defined benefit schemes provide retirement security but create systemic risks. Underfunding (promises exceeding assets) has reached crisis levels in many countries. The shift to defined contribution transfers risk to employees—beneficial for employers but potentially catastrophic for workers who retire during market downturns. Intergenerational tension: current workers fund past promises.',
 formula: '\\text{Pension} = \\frac{\\text{Years of Service}}{\\text{Accrual Rate}} \\times \\text{Final Salary}',
 realWorldExample: 'The UK\'s state pension is unfunded (PAYGO)—current workers\' taxes fund current retirees. With rising dependency ratios (more retirees per worker), state pension age has risen from 65 to 68, and further increases are likely. Corporate defined benefit schemes are mostly closed to new members.'
 },
 {
 id: 'absolute-relative-poverty',
 title: 'Absolute vs. Relative Poverty',
 category: 'macro',
 definition: 'Absolute poverty measures income against a fixed threshold (e.g., $2.15/day) representing minimum subsistence needs. Relative poverty measures income relative to the median—typically < 60% of median income—capturing social exclusion and inequality within a society.',
 keyPoints: [
 'Absolute: can you meet basic needs? (food, shelter, clothing)',
 'Relative: can you participate in normal activities of society?',
 'Absolute poverty can be eliminated; relative poverty persists with inequality',
 'LDCs focus on absolute; HICs focus on relative poverty'
 ],
 analysis: 'Country\'s median income rises from $20k to $40k → Absolute poverty may fall (incomes rise) → But relative poverty threshold rises from $12k to $24k → Those earning $15k move from non-poor to relatively poor → Poverty rate may be unchanged despite economic growth → Growth does not automatically reduce relative poverty.',
 evaluation: 'Absolute measures allow international comparison but ignore local context (living costs vary). Relative measures capture social exclusion but can never reach zero in an unequal society—even if everyone\'s income doubles, relative poverty persists. Amartya Sen\'s "Capability Approach" offers an alternative: poverty is deprivation of capabilities (health, education, participation) rather than income alone.',
 formula: '\\text{Relative Poverty Line} = 0.6 \\times \\text{Median Household Income}',
 realWorldExample: 'China reduced absolute poverty from 88% (1981) to < 1% (2019) by World Bank measures. However, if using a relative poverty line, poverty remains significant—growth was unequal, and 600 million Chinese still earn < $150/month.'
 },
 {
 id: 'comparative-advantage-definition',
 title: 'Comparative Advantage – Definition',
 category: 'trade',
 definition: 'A country has a comparative advantage in producing a good if its opportunity cost (in terms of foregone production of other goods) is lower than in other countries. Trade based on comparative advantage allows all countries to consume beyond their PPCs, even if one country has absolute advantage in everything.',
 keyPoints: [
 'Based on relative opportunity costs, not absolute productivity',
 'Explains why trade benefits all participants, even unequal ones',
 'Ricardo\'s model: assumes constant costs, perfect competition, two goods/countries',
 'Dynamic comparative advantage: can be created through policy (infant industry)'
 ],
 analysis: 'Country A: 1 cloth = 2 wine foregone (OC of cloth = 2W). Country B: 1 cloth = 0.5 wine foregone (OC of cloth = 0.5W) → B has comparative advantage in cloth → A has comparative advantage in wine → A specializes in wine, B in cloth → Trade at any rate between 0.5W and 2W per cloth → Both gain.',
 evaluation: 'Ricardian comparative advantage assumes: full employment, factor immobility between countries but mobility within, no transport costs, static technology. In reality: structural unemployment during adjustment, factors are partially mobile internationally (FDI, migration), transport costs matter, and technology changes (dynamic comparative advantage). Comparative advantage is powerful but its assumptions limit real-world precision.',
 formula: '\\text{Comparative Advantage: } \\frac{OC_A}{OC_B} \\neq 1 \\text{ for any good}',
 realWorldExample: 'Bangladesh exports garments despite lower productivity in all sectors vs. Germany. Its opportunity cost of garments (in terms of engineering foregone) is lower than Germany\'s—it has comparative advantage in garments. This specialization has driven growth, lifting millions from poverty.'
 },
 {
 id: 'deregulation-definition',
 title: 'Deregulation – Definition',
 category: 'policy',
 definition: 'The removal or reduction of government rules and restrictions on business activity. Deregulation aims to increase competition, lower prices, and improve efficiency by reducing compliance costs and barriers to entry. It is a core supply-side policy.',
 keyPoints: [
 'Reduces barriers to entry → ↑ competition → ↓ prices',
 'Cuts compliance costs → resources freed for productive use',
 'May increase risk-taking → potential for crises (financial deregulation)',
 'Often accompanied by privatization of state-owned enterprises'
 ],
 analysis: 'Deregulation of airline industry → New entrants (Ryanair, easyJet) → ↑ Competition → ↓ Fares → ↑ Consumer surplus → Incumbent firms forced to cut costs or exit → Productive efficiency ↑ → Dynamic efficiency ↑ (innovation in booking, routes) → But: job losses, service quality concerns, potential safety risks if regulation too lax.',
 evaluation: 'Deregulation\'s success depends on market structure. In natural monopolies (utilities), deregulation may create private monopoly—worse than public. Financial deregulation (1980s-2000s) increased efficiency but also systemic risk—the 2008 crisis exposed the costs of light-touch regulation. Optimal policy: deregulate competitive markets, regulate where market failure persists.',
 realWorldExample: 'UK bus deregulation (1986) outside London led to ↓ service, ↑ fares in rural areas (market failure). London\'s regulated franchise model maintained service quality. Deregulation requires market conditions suitable for competition.'
 },
 {
 id: 'housing-market-definition',
 title: 'Housing Market – Definition',
 category: 'macro',
 definition: 'The market for residential property, characterized by heterogeneity, immobility, durability, and significant transaction costs. Housing serves dual functions as consumption good (shelter) and investment asset, making it central to macroeconomic stability and wealth distribution.',
 keyPoints: [
 'Supply inelastic in short run (construction takes time, land fixed)',
 'Demand driven by: income, interest rates, credit availability, expectations',
 'Price stickiness downward (owners resist selling at loss)',
 'Wealth effect: ↑ house prices → ↑ consumer confidence → ↑ consumption'
 ],
 analysis: '↓ Interest rates → ↓ Mortgage costs → ↑ Demand for housing → Supply fixed short-run → Prices rise → Wealth effect → Homeowners feel richer → ↑ Consumption → ↑ AD → But: first-time buyers priced out → Intergenerational inequality → Rent-seeking landlords capture gains.',
 evaluation: 'Housing markets exhibit boom-bust cycles with macroeconomic consequences. The 2008 financial crisis originated in US housing (subprime). Policy tools: macroprudential regulation (LTV limits), property taxes (stamp duty), zoning reform (increase supply), social housing. Efficient housing markets require balancing homeowner wealth with affordability and macrofinancial stability.',
 formula: '\\text{Affordability Ratio} = \\frac{\\text{Median House Price}}{\\text{Median Annual Income}}',
 realWorldExample: 'UK house prices rose from 4× average income (1997) to 9× (2022). This wealth transfer from young to old entrenches inequality. Japan\'s housing bubble (1989 peak) followed by 30-year deflation shows the macroeconomic risks of housing misallocation.'
 },
 {
 id: 'deflation-definition',
 title: 'Deflation – Definition',
 category: 'macro',
 definition: 'A sustained decrease in the general price level, measured by negative CPI inflation. While appearing beneficial for consumers, deflation typically indicates weak demand, can trigger debt deflation spirals, and is associated with recession and depression.',
 keyPoints: [
 'Distinct from disinflation (falling but positive inflation rate)',
 'Causes: ↓ AD (demand-pull) or ↑ AS (supply-push/benign deflation)',
 'Debt deflation: ↑ real value of debt → ↓ spending → further deflation',
 'Monetary policy ineffective at zero lower bound (liquidity trap)'
 ],
 analysis: 'Prices fall 2% p.a. → Consumers delay purchases (why buy today what\'s cheaper tomorrow?) → ↓ C → ↓ AD → Firms cut prices further → Deflation deepens → Real value of debt rises → Bankruptcies increase → Banks\' NPLs rise → Credit contracts → Depression risk. This is Fisher\'s Debt Deflation spiral.',
 evaluation: 'Benign deflation from productivity gains (technology reducing costs) is harmless—even beneficial. Malignant deflation from demand collapse is catastrophic. Central banks target 2% inflation to provide buffer above deflation. Japan\'s "lost decades" (1990s-2010s) show deflation\'s persistence—once expectations anchor on falling prices, escape is extremely difficult.',
 formula: '\\text{Real Interest Rate} = \\text{Nominal Rate} - \\text{Inflation} \\to \\text{rises as } \\pi < 0',
 realWorldExample: 'Japan\'s deflation (1999-2012) averaged -0.3% annually. Despite zero interest rates, real rates remained positive, discouraging borrowing and spending. Only massive QE under "Abenomics" (2013) began to reverse deflationary psychology.'
 },
 {
 id: 'deflationary-gap',
 title: 'Deflationary Gap',
 category: 'macro',
 definition: 'The amount by which aggregate expenditure falls short of the level required to achieve full employment equilibrium. On the Keynesian 45-degree diagram, it is the horizontal distance between actual equilibrium income and full employment income. Also called a recessionary gap or negative output gap.',
 keyPoints: [
 'AE < Y_f: economy produces below potential',
 'Results in: unemployment, underutilized capacity, low inflation/deflation',
 'Closed by: expansionary fiscal policy (↑G, ↓T) or monetary policy (↓r)',
 'Size of gap determines required injection (accounting for multiplier)'
 ],
 analysis: 'Full employment income = £1 trillion. Actual equilibrium = £900bn → Deflationary gap = £100bn → But with multiplier of 2, injection needed = £50bn only → Government ↑ spending by £50bn → Multiplied impact closes gap → Economy reaches full employment without inflation (Keynesian range of SRAS).',
 evaluation: 'The Keynesian model assumes prices are sticky (horizontal SRAS) and monetary policy may be ineffective (liquidity trap). Closing the gap with fiscal policy may crowd out private investment and increase national debt. Supply-side economists argue the gap should close naturally as wages adjust downward—but this adjustment is slow and socially painful.',
 formula: '\\text{Deflationary Gap} = Y_f - Y_e \\text{ (in terms of output)}',
 realWorldExample: 'The UK\'s 2008-09 recession created a deflationary gap of ~8% of GDP. The £200bn fiscal stimulus (and £375bn QE) closed much of this gap by 2013, though critics argued austerity from 2010 prematurely slowed recovery.'
 },
 {
 id: 'deindustrialization',
 title: 'Deindustrialization',
 category: 'macro',
 definition: 'The decline of manufacturing as a share of GDP and employment, typically as economies develop and shift toward services. Can be positive (reflecting rising productivity and comparative advantage in services) or negative (reflecting declining competitiveness and structural unemployment).',
 keyPoints: [
 'Manufacturing share of UK employment: 25% (1980) → 8% (2023)',
 'Positive: Productivity gains allow same output with fewer workers',
 'Negative: Loss of competitiveness to lower-wage countries',
 'Creates structural unemployment in former industrial regions'
 ],
 analysis: 'Rising productivity in manufacturing → Same output, fewer workers → Workers shift to services → Manufacturing employment falls, output stable → Positive deindustrialization. Alternatively: Rising imports from LDCs → Domestic firms cannot compete → Plant closures → Regional unemployment → Skills mismatch → Structural unemployment → Negative deindustrialization.',
 evaluation: 'Deindustrialization is inevitable as economies develop, but the transition must be managed. The UK\'s 1980s deindustrialization left lasting scars in former industrial regions (North, Midlands)—lower employment rates, health problems, and political alienation persist 40 years later. Active labor market policies, retraining, and regional investment can smooth the transition.',
 realWorldExample: 'The UK\'s manufacturing employment fell from 7 million (1970) to 2.5 million (2023). Former coal and steel towns (Barnsley, Redcar) still have employment rates 10-15% below national average—evidence of hysteresis effects from rapid deindustrialization.'
 },
 {
 id: 'demand-curve-formula',
 title: 'Demand Curve Formula',
 category: 'theory',
 definition: 'The mathematical expression of the inverse relationship between price and quantity demanded. The linear demand curve is expressed as Qd = a − bP, where \'a\' is the quantity demanded at zero price (the intercept) and \'b\' is the slope (responsiveness to price).',
 keyPoints: [
 'Qd = a − bP: linear demand function',
 '\'a\' = intercept (quantity at P = 0, theoretical maximum)',
 '\'b\' = slope (ΔQd/ΔP, always negative for normal goods)',
 'Inverse form: P = (a/b) − (1/b)Qd for deriving marginal revenue'
 ],
 analysis: 'Given Qd = 100 − 2P → At P = 0, Qd = 100 (intercept) → At P = 50, Qd = 0 (choke price) → Slope b = 2 → For every £1 ↑ in price, Qd falls by 2 units → Elasticity varies along curve: elastic at high prices, inelastic at low prices (for linear demand).',
 evaluation: 'Linear demand is a simplification—real-world demand curves may be convex or concave. The constant elasticity demand curve (Qd = aP^(-ε)) maintains the same PED at all points, which is often more realistic. Econometric estimation of demand functions informs pricing strategy, tax incidence analysis, and market power assessment.',
 formula: 'Q_d = a - bP \\text{ or inverse: } P = \\frac{a}{b} - \\frac{1}{b}Q_d',
 realWorldExample: 'Econometric studies estimate UK petrol demand as Qd = 30 − 0.5P (billion liters, £ per liter). With current prices around £1.50, quantity demanded ≈ 29.25bn liters. A 20p tax increase → Qd falls by 0.1bn liters—relatively inelastic.'
 },
 {
 id: 'demand-for-money',
 title: 'Demand for Money',
 category: 'macro',
 definition: 'The amount of wealth individuals and firms wish to hold as liquid money balances rather than illiquid assets. Keynes identified three motives: transactions (daily purchases), precautionary (unexpected expenses), and speculative (awaiting better investment opportunities).',
 keyPoints: [
 'Transactions demand: proportional to nominal income (PY)',
 'Precautionary demand: buffer for unexpected needs',
 'Speculative demand: inversely related to interest rates',
 'Money demand function: Md = L(Y, r) where ∂L/∂Y > 0, ∂L/∂r < 0'
 ],
 analysis: '↓ Interest rates → ↓ Opportunity cost of holding money → ↑ Speculative money demand → Movement along liquidity preference curve. ↑ Income → ↑ Transactions demand → Shift of LP curve rightward. Money market equilibrium: Ms = Md determines interest rate.',
 evaluation: 'Keynes\' speculative motive explains liquidity traps: at very low rates, money demand becomes perfectly elastic (everyone expects rates to rise, so hoards cash) → Monetary policy loses traction. Modern monetary theory emphasizes credit creation rather than money demand as the transmission mechanism—banks create money through lending, not vice versa.',
 formula: 'M_d = L_1(Y) + L_2(r) \\text{ where } L_2\'(r) < 0',
 realWorldExample: 'During the 2008-09 crisis, money demand surged as precautionary motives dominated—households and firms hoarded cash despite near-zero interest rates. This "dash for cash" frustrated central bank efforts to stimulate spending through rate cuts.'
 },
 {
 id: 'demerit-good-definition',
 title: 'Demerit Good – Definition',
 category: 'market-failure',
 definition: 'A good or service deemed harmful to consumers or society, which would be over-consumed in a free market due to imperfect information or externalities. The social marginal benefit (SMB) is less than the private marginal benefit (PMB), leading to overconsumption.',
 keyPoints: [
 'Information failure: consumers underestimate harm (addiction, future costs)',
 'Negative externalities: harm to third parties (healthcare costs, passive smoking)',
 'Market equilibrium > socially optimal quantity',
 'Government intervention: taxes, regulation, bans, education'
 ],
 analysis: 'Smoker chooses based on PMB (pleasure now) > PMC (price) → Consumes at Q_m → But SMB < PMB (doesn\'t fully account for health harm, addiction) → And SMC > PMC (passive smoking, NHS costs) → Socially optimal Q* < Q_m → Deadweight loss from overconsumption → Tax internalizes externality, regulation reduces quantity.',
 evaluation: 'Demerit good classification involves paternalism—the state decides what\'s "bad" for citizens. Libertarians argue adults should choose freely. However, addiction undermines rational choice (bounded rationality), and externalities impose costs on non-consumers. The optimal intervention balances harm reduction with individual liberty.',
 formula: 'Q^* < Q_m \\text{ because } SMB < PMB \\text{ and/or } SMC > PMC',
 realWorldExample: 'UK tobacco duty is 16.5% of the retail price plus £5.79 per 20 cigarettes—among the highest in the world. This tax aims to reduce consumption toward the social optimum. Combined with smoking bans (addressing externalities), smoking rates have fallen from 46% (1974) to 13% (2023).'
 },
 {
 id: 'dependency-culture',
 title: 'Dependency Culture',
 category: 'policy',
 definition: 'A social phenomenon where generous welfare benefits allegedly reduce the incentive to seek employment, creating a culture of reliance on state support across generations. Critics argue this perpetuates poverty; defenders argue the concept stigmatizes the poor and ignores structural barriers to work.',
 keyPoints: [
 'High replacement ratios (benefits/wages) may discourage work',
 'Poverty trap: work barely improves income after benefit withdrawal',
 'Intergenerational: children of benefit recipients may lack work role models',
 'Contested concept: structural explanations (lack of jobs) vs. behavioral'
 ],
 analysis: 'Replacement ratio = 80% → Work barely pays → Marginal tax rate on work approaches 100% (lose benefits) → Rational to remain unemployed → Children grow up in workless households → No work ethic transmitted → Cycle of dependency → Structural unemployment persists despite vacancies.',
 evaluation: 'Empirical evidence for "dependency culture" is weak—most unemployed actively seek work. The bigger barriers are: skill mismatches, geographic immobility, childcare costs, and discrimination. Universal Credit attempted to reduce marginal tax rates but created new issues (the "taper"). The narrative risks blaming the poor for structural failures—inequality, deindustrialization, and underinvestment in education.',
 realWorldExample: 'UK\'s Universal Credit reduces the poverty trap by gradually tapering benefits (63p withdrawal per £1 earned). However, the administrative complexity and payment delays have caused hardship, and in-work poverty has risen—suggesting structural issues beyond "culture."'
 },
 {
 id: 'dependency-ratio',
 title: 'Dependency Ratio',
 category: 'macro',
 definition: 'The ratio of dependents (aged 0-14 and 65+) to the working-age population (15-64). A rising dependency ratio—driven by aging populations—strains public finances as fewer workers support more retirees and children.',
 keyPoints: [
 'Youth dependency: (0-14 population) / (15-64 population)',
 'Old-age dependency: (65+ population) / (15-64 population)',
 'Total dependency: Youth + Old-age ratio',
 'Rising old-age ratios challenge pension and healthcare systems'
 ],
 analysis: '↑ Life expectancy + ↓ Fertility → Population ages → Old-age dependency ratio rises → More pensioners per worker → PAYGO pensions: fewer contributors, more recipients → Either: ↑ contributions (tax workers), ↓ benefits (cut pensions), or ↑ retirement age → Political tension between generations.',
 evaluation: 'High dependency ratios are not inherently bad—they reflect success (longevity) and choice (smaller families). Policy responses include: raising retirement age, encouraging immigration (working-age), pro-natalist policies, and automation (capital substitutes for labor). Japan (dependency ratio 70%) manages through high saving rates and technology—dependency is a challenge, not a crisis.',
 formula: '\\text{Total Dependency Ratio} = \\frac{\\text{Population (0-14) + Population (65+)}}{\\text{Population (15-64)}} \\times 100',
 realWorldExample: 'Japan\'s old-age dependency ratio is 49% (2023)—nearly one retiree per two workers. The UK\'s is 30% and rising. By 2050, most developed countries will have ratios > 50%, requiring fundamental pension and healthcare reform.'
 },
 {
 id: 'derived-demand',
 title: 'Derived Demand',
 category: 'theory',
 definition: 'Demand for a factor of production (labor, capital, land) that arises not from the factor itself but from the demand for the final product it helps produce. The demand for bricklayers is derived from the demand for houses.',
 keyPoints: [
 'Factor demand depends on: final product demand, productivity, factor price',
 'MRP = MPP × MR: firm hires until MRP = Wage',
 'Derived demand curves are more elastic in the long run (substitution)',
 'Shifts with: product demand, technology, complementary factor prices'
 ],
 analysis: '↑ Demand for new houses → ↑ Price of houses → ↑ MR for builders → ↑ MRP of bricklayers (same MPP, higher MR) → ↑ Demand for bricklayers → Wages rise → Construction employment expands. The derived demand links product markets to factor markets.',
 evaluation: 'Derived demand explains why factor prices fluctuate with product cycles. Autoworkers\' wages depend on car demand, not their inherent worth. This creates vulnerability—workers in declining industries face falling wages regardless of skill. Elasticity of derived demand depends on: substitutability of factor, share of factor in total cost, elasticity of product demand, and elasticity of supply of other factors (Hicks-Marshall rules).',
 formula: 'MRP_L = MPP_L \\times MR \\text{ (firms hire until } MRP_L = W)',
 realWorldExample: 'The decline of UK coal mining reflected derived demand: electricity generators switched to gas (lower cost), → ↓ demand for coal → ↓ demand for miners → Pit closures. 170,000 mining jobs (1984) → 1,000 (2023).'
 },
 {
 id: 'bonds-gilts-treasuries',
 title: 'Bonds, Gilts, Treasuries, and Securities',
 category: 'macro',
 definition: 'Fixed-income debt instruments representing loans to governments or corporations. "Bond" is the generic term; "Gilts" are UK government bonds (gilt-edged, considered very safe); "Treasuries" are US government bonds. "Securities" is a broader term encompassing all tradeable financial instruments.',
 keyPoints: [
 'Bonds: issuer pays coupon (interest) and principal at maturity',
 'Gilts: UK government bonds (various maturities: short, medium, long)',
 'Treasuries: US government bonds (Bills < 1yr, Notes 2-10yr, Bonds > 10yr)',
 'Inverse price-yield relationship: ↑ interest rates → ↓ bond prices'
 ],
 analysis: 'Government issues £100 gilt, 3% coupon → Pays £3/year → If market rates rise to 4% → New investors demand 4% → Old gilt only pays 3% → Its price must fall to ≈£97.50 to offer competitive yield → ↑ r → ↓ P. Central bank buying gilts (QE) → ↑ P → ↓ yields → Stimulates economy.',
 evaluation: 'Government bonds are "risk-free" only in nominal terms (governments can print money). Inflation risk remains—holders receive fixed nominal payments while purchasing power erodes. Real yields (nominal minus inflation) can be negative. Gilt markets discipline governments: excessive borrowing → ↑ yields → ↑ debt service costs → "bond vigilantes" force fiscal correction.',
 formula: '\\text{Yield} = \\frac{\\text{Coupon}}{\\text{Price}} \\text{ (approximately, for simple bonds)}',
 realWorldExample: 'The "mini-Budget" crisis (September 2022) saw UK gilt yields spike 1.5% in days as markets rejected unfunded tax cuts. The Bank of England intervened with emergency gilt purchases to prevent pension fund collapse—demonstrating bond market power over fiscal policy.'
 },
 {
 id: 'consumption-vs-investment',
 title: 'Consumption vs. Investment',
 category: 'macro',
 definition: 'The fundamental distinction in national income accounting between spending on current satisfaction (consumption: food, entertainment, services) and spending on future productive capacity (investment: machinery, buildings, infrastructure). The allocation between C and I determines growth trajectory.',
 keyPoints: [
 'Consumption (C): spending that provides immediate utility',
 'Investment (I): spending that increases future productive capacity',
 'Trade-off: ↑ C today → ↓ resources for I → slower future growth',
 'Savings = Income − Consumption → finances Investment (S = I in closed economy)'
 ],
 analysis: 'Country A: saves 30% of GDP → High investment → Rapid capital accumulation → Fast growth → Future consumption higher. Country B: saves 10% → High current consumption → Low investment → Slow growth → Future consumption constrained. Optimal saving rate balances present and future welfare (Ramsey-Solow model).',
 evaluation: 'The C vs. I trade-off is fundamental to development. East Asian tigers (Japan, Korea, China) achieved high growth through 30-40% saving/investment rates—sacrificing current consumption for future prosperity. However, excessive investment can be wasteful (China\'s ghost cities). The optimal rate depends on diminishing returns to capital and social time preference.',
 formula: 'Y = C + S \\text{ and } S = I \\text{ (closed economy)}',
 realWorldExample: 'China\'s investment rate (45% of GDP) vs. US (21%) explains much of the growth differential. However, Chinese investment quality has declined—marginal capital productivity falling as resources flow to unproductive projects (property speculation, SOE inefficiency).'
 },
 {
 id: 'tax-avoidance-evasion',
 title: 'Tax Avoidance vs. Tax Evasion',
 category: 'policy',
 definition: 'Tax avoidance involves legally minimizing tax liability through careful planning and use of allowances. Tax evasion involves illegally concealing income or assets to reduce tax liability. The line between aggressive avoidance and evasion can be blurred.',
 keyPoints: [
 'Avoidance: legal (ISAs, pension contributions, incorporating to access lower rates)',
 'Evasion: illegal (unreported income, offshore hidden accounts, false deductions)',
 'Aggressive avoidance: legal but contrary to the "spirit" of the law',
 'Tax gap: difference between tax owed and tax collected'
 ],
 analysis: 'Tax avoidance: exploits loopholes → Legal but reduces revenue → Government closes loopholes → New ones found → Cat-and-mouse game. Tax evasion: criminal offense → Penalties include prosecution → But enforcement costly → Underground economy persists → Reduces tax base → Higher rates on compliant taxpayers.',
 evaluation: 'The distinction matters morally and legally. Avoidance is criticized as unfair (rich can afford advisors) but legal. Evasion is a crime. The debate over multinational corporations (Amazon, Google paying minimal tax through legal structures) has shifted public opinion—"legal but immoral." OECD\'s BEPS (Base Erosion and Profit Shifting) initiative aims to close international loopholes.',
 formula: '\\text{Tax Gap} = \\text{Tax Owed} - \\text{Tax Collected}',
 realWorldExample: 'UK tax gap is estimated at £36bn (2021-22)—roughly 5% of total tax liabilities. Of this, evasion accounts for ~£5bn, avoidance ~£1.7bn, and the rest from errors, non-payment, and hidden economy activities.'
 },
 {
 id: 'different-economic-groups',
 title: 'Different Economic Groups (Stakeholders)',
 category: 'theory',
 definition: 'The various participants in an economy whose interests may conflict: consumers (low prices), producers (high profits), workers (high wages), governments (tax revenue, social welfare), and foreign interests (market access). Policy involves balancing these stakeholder interests.',
 keyPoints: [
 'Consumers: prefer low prices, high quality, variety',
 'Producers/Firms: prefer market power, low costs, profit maximization',
 'Workers: prefer high wages, job security, good conditions',
 'Government: balances growth, equity, stability, revenue',
 'Foreign sector: exporters want access, importers want protection'
 ],
 analysis: 'Minimum wage ↑ → Workers gain (higher pay) → Consumers may lose (higher prices) → Firms may lose (squeezed margins) or gain (higher demand from workers) → Government: ↓ in-work benefits, ↑ tax revenue → Net effect depends on elasticities and magnitudes → Winners and losers from any policy.',
 evaluation: 'Economic policy is inherently political because it involves value judgments about whose interests matter. Pareto efficiency (no one can be made better off without making someone worse off) is rarely achievable—most policies create winners and losers. Kaldor-Hicks compensation (winners could compensate losers) is the usual efficiency criterion, but compensation rarely happens in practice.',
 realWorldExample: 'Brexit created clear stakeholder conflicts: farmers preferred protection (CAP), manufacturers wanted frictionless trade (single market), consumers wanted cheap imports, some workers feared wage competition from EU migrants. The referendum aggregated preferences but could not reconcile them—someone had to lose.'
 },
 {
 id: 'types-of-socialism',
 title: 'Different Types of Socialism',
 category: 'theory',
 definition: 'The spectrum of economic systems involving collective or state ownership of the means of production, ranging from democratic socialism (mixed economy with strong welfare state) to revolutionary socialism (abolition of private property through class struggle) to market socialism (worker cooperatives in market context).',
 keyPoints: [
 'Democratic socialism: welfare state, progressive taxation, regulated markets (Scandinavia)',
 'Market socialism: worker-owned cooperatives competing in markets (Yugoslavia model)',
 'Command socialism: central planning, state ownership (USSR, Cuba)',
 'Revolutionary socialism: Marxist, transition through class struggle'
 ],
 analysis: 'Market Socialism: Workers own firm → Share profits democratically → No conflict between labor and capital → Incentives aligned → But: underinvestment (workers prefer wages to retained earnings) → Difficulty raising capital (no shares to sell) → May lack dynamism of capitalist competition.',
 evaluation: 'The 20th century tested various socialisms: command economies collapsed (USSR 1991), democratic socialism thrives (Scandinavia consistently tops quality of life rankings), market socialism remains marginal (Mondragon cooperatives are successful but rare). Pure socialism (no markets, no private property) has not succeeded; hybrid systems combining social ownership, markets, and redistribution appear more viable.',
 realWorldExample: 'Sweden is a "social democratic" economy: private ownership predominates, but: 45% tax/GDP ratio, universal healthcare/education, strong unions, and high redistribution. This "Nordic model" combines market efficiency with social equity—though critics argue it works only in small, homogeneous societies.'
 },
 {
 id: 'distributive-efficiency',
 title: 'Distributive Efficiency',
 category: 'theory',
 definition: 'An allocation is distributively efficient when resources are distributed to maximize social welfare, not just total output. It requires that goods go to those who value them most and that the resulting distribution is considered equitable by society. Distinct from allocative and productive efficiency.',
 keyPoints: [
 'Allocative efficiency: right goods produced (P = MC)',
 'Productive efficiency: lowest cost production (on PPF)',
 'Distributive efficiency: fair distribution of output',
 'Requires value judgments—no objective definition of "fair"'
 ],
 analysis: 'Market achieves allocative + productive efficiency → But income distribution determined by initial endowments → If initial distribution is unequal (inherited wealth), so is final distribution → Market outcome may be Pareto efficient but distributively inefficient → Redistribution (taxes, transfers) improves distributive efficiency but may reduce allocative efficiency (distortionary taxes).',
 evaluation: 'Distributive efficiency involves trade-offs. The Okun "leaky bucket": transferring money from rich to poor loses some (administrative costs, reduced incentives) → How much leakage is acceptable? Rawlsian justice (maximize position of worst-off) suggests high tolerance; Nozickean libertarians reject redistribution entirely. The "optimal" distribution is a political choice, not an economic calculation.',
 formula: '\\text{Social Welfare} = W(U_1, U_2,..., U_n) \\text{ (welfare function aggregates utilities)}',
 realWorldExample: 'UK Gini coefficient: 0.34 (pre-redistribution) → 0.32 (post-tax/transfer). The tax-benefit system redistributes ~£130bn annually, improving distributive efficiency by society\'s revealed preferences—but debates continue over how much redistribution is optimal.'
 },
 {
 id: 'division-of-labour',
 title: 'Division of Labour',
 category: 'theory',
 definition: 'The specialization of workers in specific tasks or stages of production, increasing productivity through: repetition (learning by doing), time savings (no switching between tasks), and innovation (focused improvement). Adam Smith\'s pin factory example is the classic illustration.',
 keyPoints: [
 'Smith\'s pin factory: 10 specialized workers produce 48,000 pins/day vs. 10-20 each working alone',
 'Benefits: ↑ skill, ↓ time wasted, ↑ innovation, enables mechanization',
 'Costs: monotony, deskilling, alienation, dependency on others',
 'Extends to international division of labour (comparative advantage)'
 ],
 analysis: 'Worker specializes in one task → Repetition builds expertise → Task completion time ↓ → No setup time between tasks → Worker identifies improvements → Tools designed for specific task → Mechanization follows specialization → Productivity multiplied → Lower unit costs → Economic growth.',
 evaluation: 'Division of labour is the foundation of modern prosperity but creates vulnerabilities. Specialization means dependency—supply chain disruptions (COVID-19, Suez blockage) reveal fragility. Marx critiqued alienation—workers separated from the product of their labour. Modern concerns include gig economy precarity and AI displacing specialized tasks. The benefits are proven; managing the costs is the challenge.',
 realWorldExample: 'Smith\'s pin factory (1776) showed 240× productivity gains from specialization. Modern equivalents: a Boeing 787 requires 2.3 million components from 5,400 suppliers across 100 countries—extreme division of labour, extreme productivity, extreme complexity.'
 },
 {
 id: 'double-coincidence-wants',
 title: 'Double Coincidence of Wants',
 category: 'theory',
 definition: 'A requirement for barter exchange to occur: both parties must want what the other has at the same time and place. Money eliminates this problem by serving as a medium of exchange, enabling indirect exchange and vastly expanding trade possibilities.',
 keyPoints: [
 'Barter requires: you have what I want AND I have what you want',
 'Extremely limiting: most potential trades cannot occur',
 'Money solves: sell goods for money, buy whatever you want with money',
 'Money functions: medium of exchange, store of value, unit of account'
 ],
 analysis: 'Farmer has wheat, wants shoes → Cobbler wants bread, not wheat → Trade fails → Introduce money: Farmer sells wheat to baker for money → Buys shoes from cobbler with money → Both trades occur → Money enables specialization → Division of labour expands → Productivity rises → Civilization advances.',
 evaluation: 'The double coincidence problem explains why all complex societies develop money. Even barter societies used commodity money (cattle, shells, grain) to facilitate trade. Modern money is fiat—valuable only because accepted—but still serves the same function: eliminating the double coincidence requirement. Cryptocurrency attempts to provide money without central authority but faces adoption challenges.',
 realWorldExample: 'Medieval fairs solved double coincidence through dense markets—many traders, many goods, high probability of matches. But year-round trade required money. The spread of coinage correlated with trade expansion across all civilizations—from ancient Lydia to modern economies.'
 },
 {
 id: 'dual-system-theory',
 title: 'Dual-System Theory (Dual Economy)',
 category: 'theory',
 definition: 'Arthur Lewis\'s model of economic development describing LDCs as having two sectors: a traditional agricultural sector with surplus labor (zero marginal product) and a modern industrial sector. Development occurs as labor migrates from agriculture to industry, driven by wage differentials.',
 keyPoints: [
 'Traditional sector: subsistence farming, surplus labor, zero MPL',
 'Modern sector: capitalist production, rising productivity, wage > subsistence',
 'Development: labor flows from traditional → modern until surplus exhausted',
 'Turning point: when agricultural labor becomes scarce, wages rise economy-wide'
 ],
 analysis: 'Rural sector has disguised unemployment (MPL = 0) → Urban wage > rural → Labor migrates → Industrial output expands (more workers) → Agricultural output unchanged (surplus labor was unproductive) → Profits reinvested → Capital accumulation → Development sustained → Eventually surplus labor exhausted → Wages rise → Lewis Turning Point reached.',
 evaluation: 'Lewis model explains early-stage development (UK Industrial Revolution, East Asian tigers, China 1980-2010) but assumes: unlimited urban labor demand, no urban unemployment, constant industrial wages until turning point. In reality, premature deindustrialization, urban informal sectors, and jobless growth complicate the picture. The model works better for manufacturing-led development than service-led.',
 formula: 'W_{\\text{industry}} > W_{\\text{agriculture}} \\to \\text{Labor migration until } MPL_A > 0',
 realWorldExample: 'China\'s development (1980-2010) followed Lewis: 300 million rural-urban migrants, manufacturing boom, wages held down by labor surplus. Around 2010, wages accelerated (turning point)—China must now shift from labor-intensive to skill-intensive growth.'
 },
 {
 id: 'duopoly',
 title: 'Duopoly',
 category: 'theory',
 definition: 'A market structure with only two sellers, creating strategic interdependence where each firm\'s optimal decision depends on the other\'s actions. Game theory (Cournot, Bertrand, Stackelberg models) analyzes duopoly outcomes, which typically lie between monopoly and perfect competition.',
 keyPoints: [
 'Cournot: firms choose quantities simultaneously → equilibrium between monopoly and competition',
 'Bertrand: firms choose prices simultaneously → price competition drives to marginal cost',
 'Stackelberg: leader moves first, follower responds → leader advantage',
 'Collusion temptation: duopolists may form cartels to act as joint monopoly'
 ],
 analysis: 'Cournot duopoly: Each firm maximizes profit given competitor\'s output → Best response functions → Nash equilibrium where neither wants to change → Output > monopoly but < perfect competition → Prices above MC but below monopoly level → Some deadweight loss but less than monopoly.',
 evaluation: 'Duopoly outcomes depend crucially on assumptions: Bertrand (price competition) is more competitive than Cournot (quantity competition). In practice, tacit collusion is common—firms avoid aggressive competition to maintain profits. Contestability matters: even duopolies may behave competitively if entry is easy. Market dynamics (innovation, network effects) may naturally lead to duopoly in winner-take-most industries.',
 formula: 'Q_{\\text{Cournot}} = \\frac{2(a-c)}{3b} \\text{ (for linear demand, identical firms)}',
 realWorldExample: 'The global commercial aircraft market is a duopoly: Boeing and Airbus. They compete on quality and financing but avoid destructive price wars—the classic duopoly dynamic of competitive restraint. Entry barriers (development costs, certification) protect the duopoly structure.'
 },

 // ========================================
 // PHASE 7: Economic Cycles, Trade Barriers, Externalities
 // ========================================

 {
 id: 'economic-booms',
 title: 'Economic Booms',
 category: 'macro',
 definition: 'A period of rapid economic expansion characterized by high GDP growth, falling unemployment, rising asset prices, and increasing consumer/business confidence. Booms occur in the expansionary phase of the business cycle, often fueled by rising AD outpacing LRAS growth.',
 keyPoints: [
 'Characteristics: ↑ Real GDP growth (above trend), ↓ Unemployment, ↑ Consumer spending, ↑ Business investment',
 'Demand-pull inflation risk: economy operates beyond full capacity (positive output gap)',
 'Asset bubbles may form: irrational exuberance in housing/stock markets',
 'Central banks typically respond with ↑ interest rates to prevent overheating',
 'Boom-bust cycle risk: unsustainable growth leads to sharp correction'
 ],
 analysis: '↑ Confidence → ↑ C + I → AD shifts right → Real output rises above Yf (positive output gap) → ↑ Demand-pull inflation → Economy overheats → Wages rise faster than productivity → ↑ SRAS costs → Eventually, bubble bursts or CB raises rates → Recession.',
 evaluation: 'Booms are double-edged: they reduce unemployment and raise living standards but create inflationary pressures and financial instability. The policy challenge is to extend the boom without overheating—requiring countercyclical fiscal/monetary policy. However, political incentives favor prolonging booms (electoral cycle), and asset bubbles are difficult to identify in real-time. Minsky\'s Financial Instability Hypothesis argues that stability breeds instability: during booms, risk-taking increases until a correction becomes inevitable.',
 formula: 'Y > Y_f \\Rightarrow \\text{Positive Output Gap} \\Rightarrow P \\uparrow',
 realWorldExample: 'The 2003-2007 UK boom featured 3%+ GDP growth, falling unemployment, and a housing bubble (prices doubled). Low interest rates and financial deregulation fueled credit expansion. The boom ended with the 2008 financial crisis—a classic Minsky moment.'
 },
 {
 id: 'economic-depression',
 title: 'Economic Depression',
 category: 'macro',
 definition: 'A severe and prolonged economic downturn lasting several years, characterized by a sustained fall in real GDP (typically >10%), mass unemployment (often 20%+), deflation or very low inflation, and a collapse in investment and consumer confidence. Depressions are more severe than recessions.',
 keyPoints: [
 'Technical definition: GDP falls by >10% or recession lasts >3 years',
 'Deflation worsens the downturn: ↑ real debt burden, deferred consumption',
 'Unemployment may persist due to hysteresis (skills atrophy, discouraged workers)',
 'Keynesian "liquidity trap": interest rates at zero, but investment remains weak',
 'Fiscal policy becomes essential when monetary policy is ineffective'
 ],
 analysis: 'Negative shock (financial crisis, demand collapse) → ↓ AD → ↓ Output and employment → ↓ Incomes → Further ↓ AD (multiplier effect downward) → Deflation raises real interest rates → Debt defaults → Bank failures → Credit contraction → Depression spiral. Recovery requires breaking this feedback loop.',
 evaluation: 'Depressions expose the limits of market self-correction—classical economists predicted flexible wages/prices would restore equilibrium, but the Great Depression showed this process is too slow and painful. Keynesian intervention (fiscal stimulus, automatic stabilizers) became the policy consensus. However, fiscal policy faces constraints: debt sustainability, political feasibility, and the risk of zombie firms if support is misdirected. The key lesson is that early, aggressive action prevents mild recessions from becoming depressions.',
 formula: '\\Delta Y_{\\text{depression}} > -10\\% \\text{ or duration } > 3 \\text{ years}',
 realWorldExample: 'The Great Depression (1929-1939): US GDP fell 30%, unemployment peaked at 25%, prices fell 25%. Policy errors (tight money, Smoot-Hawley tariffs, delayed fiscal stimulus) prolonged the downturn. Recovery came with New Deal spending and WWII mobilization.'
 },
 {
 id: 'economic-stimulus-package',
 title: 'Economic Stimulus Package',
 category: 'policy',
 definition: 'A coordinated set of government fiscal measures—typically including tax cuts, direct transfers, and increased public spending—designed to boost aggregate demand during a recession or economic slowdown. The aim is to "jump-start" the economy through the multiplier effect.',
 keyPoints: [
 'Composition: Tax rebates/cuts, unemployment benefits, infrastructure spending, subsidies to businesses',
 'Speed matters: transfers and tax cuts act faster than infrastructure (which has long lead times)',
 'Multiplier varies by type: government spending multiplier typically > tax cut multiplier',
 'Financed by borrowing: increases government debt (crowding out concerns in the long run)',
 'Effectiveness depends on MPC: high MPC households (low-income) have larger multiplier effect'
 ],
 analysis: '↑ G or ↓ T → ↑ Disposable income → ↑ C → ↑ AD (multiplier effect: 1/(1-MPC)) → ↑ Output and employment → ↑ Tax revenues (automatic stabilizer) → Partial self-financing of the stimulus.',
 evaluation: 'Stimulus packages face the Ricardian Equivalence critique: rational agents may save the tax cut, anticipating future tax increases to repay debt. Empirical evidence is mixed—MPC out of windfalls is positive but often less than permanent income. Timing is also critical: poorly timed stimulus may arrive after recovery has begun, causing inflation. Nevertheless, during deep recessions with slack capacity and zero lower bound on interest rates, fiscal stimulus is widely seen as effective.',
 formula: 'k = \\frac{1}{1 - MPC} = \\frac{1}{MPS + MPT + MPM}',
 realWorldExample: 'The 2009 American Recovery and Reinvestment Act ($787 billion) included tax cuts, unemployment benefits, and infrastructure. Studies estimate it raised GDP by 2-3% and saved/created 2-3 million jobs. The 2020 COVID stimulus packages ($5 trillion globally) were even larger.'
 },
 {
 id: 'economics-a-level-boards',
 title: 'Economics A-Level Exam Boards',
 category: 'theory',
 definition: 'In the UK, A-Level Economics is offered by multiple examination boards (OCR, AQA, Edexcel, WJEC), each with distinct specifications, assessment structures, and content emphases. Understanding board differences is important for exam preparation and syllabus coverage.',
 keyPoints: [
 'AQA: Strong emphasis on current affairs and data response; two papers (Micro, Macro)',
 'Edexcel A: Thematic approach; includes globalization and development economics',
 'OCR: Emphasis on behavioral economics and market failures; three papers',
 'WJEC (Eduqas): Focus on UK economy; includes essay-based assessments',
 ' International syllabus (AS + A2); strong on formal theory and diagrams'
 ],
 analysis: 'Exam board choice affects teaching approach: AQA rewards application to current events → requires regular news reading → Students develop evaluative skills through real-world context. Edexcel emphasizes interconnections → synoptic questions require linking micro and macro → Holistic understanding. OCR includes behavioral economics → challenges the rational agent model → Modern perspective.',
 evaluation: 'All UK boards cover similar core content (markets, market failure, macro objectives, policy) but differ in emphasis and assessment style. Students should master their specific board\'s command words and mark schemes. The key to success is not memorizing content but developing chains of analysis and critical evaluation—skills that transfer across all boards.',
 realWorldExample: 'An AQA student might analyze the 2022 UK mini-budget using AD/AS diagrams and evaluating bond market reactions. An OCR student might emphasize behavioral explanations for market panic. Same event, different analytical lenses.'
 },
 {
 id: 'economics-of-global-warming',
 title: 'Economics of Global Warming',
 category: 'market-failure',
 definition: 'The economic analysis of climate change, focusing on the externality of greenhouse gas emissions, the social cost of carbon, and policy instruments (carbon taxes, cap-and-trade) to internalize this externality. Global warming is the largest market failure in history due to its scale and intergenerational nature.',
 keyPoints: [
 'CO2 emissions are a negative production externality: MSC > MPC',
 'Social Cost of Carbon (SCC): estimated damage from 1 additional ton of CO2 ($50-$200)',
 'Discount rate controversy: low rates favor aggressive action (Stern); higher rates delay action (Nordhaus)',
 'Policy options: Carbon tax (Pigouvian), Cap-and-trade (quantity-based), Regulation (command)',
 'Free-rider problem: global public good requires international cooperation'
 ],
 analysis: 'Firms emit CO2 (MPC = production cost only) → MSC includes climate damages (floods, health, productivity loss) → MSC > MPC → Overproduction of carbon-intensive goods → Optimal policy: tax = Marginal External Cost → Price ↑ → Quantity ↓ to socially optimal level.',
 evaluation: 'Valuing the SCC involves huge uncertainties: discount rate choice is normative (intergenerational equity), damage estimates vary widely, and tipping points are poorly understood. Carbon taxes are efficient but regressive (hurt low-income households more); cap-and-trade creates price volatility. International coordination is essential but plagued by free-riding (Paris Agreement is non-binding). Nevertheless, the economic consensus is that the cost of action is far less than the cost of inaction.',
 formula: 't^* = MEC = \\text{Social Cost of Carbon}',
 realWorldExample: 'The EU Emissions Trading System (ETS) prices carbon at ~€80/ton (2024). The UK Carbon Price Support adds a floor. The Stern Review (2006) estimated that unmitigated climate change could cost 5-20% of global GDP, while mitigation costs ~1%.'
 },
 {
 id: 'effect-of-import-quotas',
 title: 'Effect of Import Quotas',
 category: 'trade',
 definition: 'A quota is a quantitative restriction on the volume of imports allowed into a country. Unlike tariffs (which raise prices through taxes), quotas directly limit quantity, creating scarcity and raising domestic prices. The "scarcity rent" accrues to quota holders rather than the government.',
 keyPoints: [
 'Quota raises domestic price by restricting supply → P rises to clear the reduced quantity',
 'Scarcity rent: difference between world price and domestic price × quota quantity → goes to importers (not government)',
 'Domestic producers gain: higher price, increased output, increased producer surplus',
 'Consumers lose: higher prices, reduced consumer surplus',
 'Deadweight loss: production inefficiency (high-cost domestic production replaces low-cost imports) + consumption inefficiency'
 ],
 analysis: 'At world price Pw: Domestic supply = Q1, Demand = Q4 → Imports = Q4 - Q1. Quota limits imports to Q3 - Q2 → Price rises to Pq where demand = domestic supply + quota → Domestic supply ↑ to Q2, demand ↓ to Q3 → Scarcity rent = (Pq - Pw) × (Q3 - Q2) → DWL triangles represent efficiency loss.',
 evaluation: 'Quotas are less transparent than tariffs (no visible tax) and create rent-seeking (lobbying for quota allocations). They do not raise government revenue—a key disadvantage versus tariffs. However, quotas provide certainty about import quantities (useful when protecting strategic industries). VERs (Voluntary Export Restraints) are quota-equivalents imposed by exporting countries to avoid retaliation.',
 formula: 'P_{\\text{quota}} > P_w; \\quad \\text{Scarcity Rent} = (P_q - P_w) \\times Q_{\\text{quota}}',
 realWorldExample: 'The EU\'s sugar quotas (abolished 2017) restricted imports and kept EU sugar prices 2-3× world levels. The Multi-Fibre Arrangement (1974-2004) imposed textile quotas on developing countries, protecting high-cost EU/US producers at consumer expense.'
 },
 {
 id: 'effect-of-tariffs',
 title: 'Effect of Tariffs',
 category: 'trade',
 definition: 'A tariff is a tax on imported goods that raises the domestic price above the world price. Tariffs generate government revenue, protect domestic producers, but reduce consumer welfare and create deadweight loss. The "revenue effect" distinguishes tariffs from quotas.',
 keyPoints: [
 'Price effect: Domestic price = World price + Tariff → Pw + t',
 'Production effect: Domestic supply increases from Q1 to Q2 (inefficient production)',
 'Consumption effect: Demand falls from Q4 to Q3 (consumer surplus loss)',
 'Trade effect: Imports fall from (Q4-Q1) to (Q3-Q2)',
 'Government revenue: Tariff rate × Import quantity = t × (Q3 - Q2)',
 'Deadweight loss: Two triangles (production and consumption inefficiency)'
 ],
 analysis: 'Free trade: P = Pw, Imports = Q4 - Q1. Tariff imposed: P ↑ to Pw + t → Domestic supply ↑ (movement along S curve) → Domestic demand ↓ (movement along D curve) → Imports ↓ → Government collects t × (Q3 - Q2) → Consumer surplus falls → Producer surplus rises → Net welfare loss = DWL triangles.',
 evaluation: 'Tariffs have distributional effects: producers and government gain, consumers and foreign exporters lose. For small countries, the net effect is unambiguously negative (deadweight loss). For large countries, the "optimal tariff" argument suggests a tariff can improve terms of trade if trading partners cannot retaliate—but this is a beggar-my-neighbour policy that invites trade wars. Infant industry arguments justify temporary tariffs, but political economy suggests tariffs, once imposed, are rarely removed.',
 formula: 'P_d = P_w + t; \\quad \\text{Revenue} = t \\times (Q_3 - Q_2); \\quad DWL = \\frac{1}{2}(t)(\\Delta Q_s + \\Delta Q_d)',
 realWorldExample: 'The US imposed 25% tariffs on $250 billion of Chinese goods (2018-2019). Studies found US consumers bore 100% of the cost through higher prices. Retaliation reduced US agricultural exports. GDP effects were modest but negative for both countries.'
 },
 {
 id: 'efficiency-wage-theory',
 title: 'Efficiency Wage Theory',
 category: 'theory',
 definition: 'The theory that firms may pay wages above the market-clearing level because higher wages increase worker productivity, reduce turnover, and minimize shirking. This creates involuntary unemployment as labor supply exceeds demand at the efficiency wage.',
 keyPoints: [
 'Higher wages → ↑ Worker effort (fear of losing high-paying job)',
 'Higher wages → ↓ Turnover (reduces hiring/training costs)',
 'Higher wages → Better applicant pool (adverse selection is reduced)',
 'Higher wages → ↑ Morale and loyalty (gift exchange)',
 'Creates real wage rigidity: wages don\'t fall even when unemployment is high'
 ],
 analysis: 'Firms set W > W* (market-clearing wage) → At W, labor supply Ls > labor demand Ld → Unemployment = Ls - Ld → But firms don\'t cut wages because productivity would fall → ↑ W → ↑ Effort per worker → ↑ Output per worker → Profit-maximizing despite unemployment.',
 evaluation: 'Efficiency wage theory explains why unemployment can persist without wage cuts—a puzzle for classical economics. It provides a micro-foundation for Keynesian involuntary unemployment. However, the theory has limitations: it applies mainly to jobs where monitoring is difficult (not assembly lines with observable output). It also struggles to explain why workers don\'t post "bonds" to signal effort. Nevertheless, it explains wage dispersion across firms and industries beyond what productivity differences would predict.',
 formula: 'e = e(W) \\text{ where } e\'(W) > 0; \\quad \\text{Firm maximizes } \\pi = f(e \\cdot L) - W \\cdot L',
 realWorldExample: 'Henry Ford\'s $5 day (1914) doubled wages and reduced turnover from 370% to 16%. Productivity rose, absenteeism fell, and profits increased. Modern tech companies pay above-market salaries to attract talent and reduce poaching.'
 },
 {
 id: 'equimarginal-principle',
 title: 'Equimarginal Principle',
 category: 'theory',
 definition: 'The rule for optimal resource allocation: a consumer maximizes utility (or a firm minimizes cost) when the marginal benefit per unit of expenditure is equal across all goods or inputs. Also known as the "law of equal marginal advantage."',
 keyPoints: [
 'Consumer equilibrium: MUx/Px = MUy/Py (marginal utility per dollar equal)',
 'If MUx/Px > MUy/Py → Consume more X, less Y → Until equality restored',
 'Producer equilibrium: MPL/W = MPK/r (marginal product per dollar spent on inputs)',
 'Applies to any scarce resource allocation: time, budget, inputs',
 'Underpins the derivation of demand curves and isoquant/isocost analysis'
 ],
 analysis: 'Consumer has budget M, prices Px and Py → Allocates spending until MUx/Px = MUy/Py → At this point, no reallocation can increase total utility → This is the tangency of the budget line and highest attainable indifference curve → The slope of the budget line (-Px/Py) equals MRS (slope of indifference curve).',
 evaluation: 'The equimarginal principle is elegant but requires cardinal utility measurement (controversial—can we really measure MU?). Ordinal utility theory achieves the same result using indifference curves without requiring utility numbers. Behavioral economics questions whether consumers actually calculate MU/P ratios—bounded rationality, habit, and heuristics may dominate. Nevertheless, the principle provides a powerful framework for understanding efficient allocation.',
 formula: '\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} \\Leftrightarrow MRS_{xy} = \\frac{P_x}{P_y}',
 realWorldExample: 'A student allocating study time should equalize the marginal grade improvement per hour across subjects. Spending 10 hours on economics (MU = 2 marks/hour) and 2 hours on maths (MU = 5 marks/hour) is suboptimal—reallocate time to maths until MU/hour is equal.'
 },
 {
 id: 'plotting-demand-supply-curves',
 title: 'Plotting Demand & Supply Curves',
 category: 'theory',
 definition: 'A demand curve shows the relationship between price and quantity demanded (ceteris paribus), sloping downward due to the income and substitution effects. A supply curve shows the relationship between price and quantity supplied, typically upward-sloping due to increasing marginal costs.',
 keyPoints: [
 'Demand curve: P on Y-axis, Q on X-axis; downward-sloping (law of demand)',
 'Supply curve: upward-sloping (higher P → higher Qs as MC rises)',
 'Equation forms: Qd = a - bP (demand); Qs = c + dP (supply)',
 'Equilibrium: where Qd = Qs → solve simultaneous equations',
 'Shifts vs. movements: Price changes cause movements along curves; non-price factors shift the curves'
 ],
 analysis: 'Step 1: Draw axes (P vertical, Q horizontal). Step 2: Plot demand (intercept "a" on Q-axis when P=0; intercept a/b on P-axis when Q=0). Step 3: Plot supply (intercept "c" on Q-axis when P=0—may be negative, meaning supply starts at positive price). Step 4: Find equilibrium at intersection. Step 5: Label axes, curves (D, S), and equilibrium (P*, Q*).',
 evaluation: 'Real-world demand/supply curves may not be linear—they could be convex, concave, or kinked. Empirical estimation uses regression analysis on price/quantity data, controlling for non-price factors. The ceteris paribus assumption is crucial: the curve shows what happens when only price changes. In practice, multiple factors change simultaneously, making identification of true demand/supply curves challenging (the "identification problem").',
 formula: 'Q_d = a - bP; \\quad Q_s = c + dP; \\quad P^* = \\frac{a - c}{b + d}; \\quad Q^* = \\frac{ad + bc}{b + d}',
 realWorldExample: 'A market research firm estimates: Qd = 100 - 2P; Qs = 20 + 3P. Equilibrium: 100 - 2P = 20 + 3P → 5P = 80 → P* = £16, Q* = 68 units. If a tax of £5 is imposed, supply becomes Qs = 20 + 3(P-5), and new equilibrium can be calculated.'
 },
 {
 id: 'beggar-my-neighbour-policies',
 title: 'Beggar-My-Neighbour Policies',
 category: 'trade',
 definition: 'Economic policies that benefit one country at the expense of others, typically through competitive devaluations, tariffs, or trade restrictions. These policies aim to boost domestic employment and output by redirecting demand from trading partners, but they invite retaliation and can trigger trade/currency wars.',
 keyPoints: [
 'Competitive devaluation: Weaken currency → ↑ X, ↓ M → ↑ Domestic AD → But partner\'s AD ↓',
 'Protectionism: Tariffs/quotas protect domestic jobs but destroy foreign jobs',
 'Zero-sum logic: One country\'s trade surplus = another\'s deficit',
 'Retaliation risk: Partners respond with their own devaluations/tariffs → All worse off',
 'Coordination failure: Individual incentive to defect, collective loss from non-cooperation'
 ],
 analysis: 'Country A devalues currency → A\'s exports cheaper, imports dearer → A\'s trade balance improves → A\'s AD ↑, employment ↑ → But B\'s exports to A fall → B\'s AD ↓, unemployment ↑ → B retaliates with devaluation → Both currencies fall → Neither gains trade advantage → But both suffer inflation from import prices ↑.',
 evaluation: 'Beggar-my-neighbour policies are a classic prisoner\'s dilemma: individually rational but collectively irrational. The 1930s Smoot-Hawley tariffs triggered retaliation that collapsed world trade by 65%, deepening the Great Depression. Post-WWII institutions (GATT/WTO, IMF) were designed to prevent such policies. However, the temptation remains during recessions—the 2010s saw currency war concerns as central banks pursued QE with exchange rate effects. Coordinated reflation is superior but requires trust.',
 formula: 'CA_A + CA_B = 0 \\text{ (in bilateral trade)}; \\quad \\text{Devaluation shifts CA to A from B}',
 realWorldExample: 'The 1930s competitive devaluations: UK left gold standard (1931), US devalued (1933), France followed (1936)—no lasting trade advantage, but global instability. In 2010-2015, "currency wars" concerns arose as Japan, EU, and US pursued QE, each hoping for exchange rate depreciation.'
 },
 {
 id: 'barriers-to-entry',
 title: 'Barriers to Entry',
 category: 'theory',
 definition: 'Obstacles that prevent or deter new firms from entering a market, allowing incumbent firms to maintain supernormal profits. Barriers can be structural (inherent to the industry) or strategic (created by incumbent behavior). High barriers characterize monopolies and oligopolies.',
 keyPoints: [
 'Structural barriers: Economies of scale, natural monopoly cost conditions, patents, control of key resources',
 'Strategic barriers: Predatory pricing, limit pricing, brand proliferation, exclusive contracts, excess capacity',
 'Legal barriers: Licenses, regulations, intellectual property protection',
 'Network effects: Demand-side economies of scale (value ↑ with user base)',
 'Sunk costs: Irrecoverable entry costs deter risk-averse potential entrants'
 ],
 analysis: 'High barriers → Potential entrants cannot profitably enter → Incumbents retain market power → Price > MC sustainable → Supernormal profits persist in long run (unlike perfect competition). Entry threat still disciplines behavior if barriers are not absolute—contestability matters.',
 evaluation: 'Not all barriers are anti-competitive: patents reward innovation, economies of scale deliver efficiency. The key question is whether barriers protect efficiency or protect inefficiency. Strategic barriers (predatory pricing, raising rivals\' costs) are more problematic than structural barriers. Competition policy focuses on preventing the abuse of dominance rather than eliminating all barriers. Contestable markets theory emphasizes that low entry/exit costs discipline incumbents even with few actual competitors.',
 formula: '\\text{If } \\pi_{\\text{incumbent}} > \\pi_{\\text{entrant}} - \\text{Entry Costs} \\Rightarrow \\text{No entry}',
 realWorldExample: 'Tech platforms exhibit strong barriers: network effects (Facebook), economies of scale (cloud computing), and data advantages (Google). Pharmaceutical patents create 20-year monopolies. Predatory pricing cases include Microsoft (browsers) and Amazon (e-books).'
 },
 {
 id: 'expected-utility-theory',
 title: 'Expected Utility Theory',
 category: 'theory',
 definition: 'A theory of decision-making under uncertainty where individuals choose the option with the highest expected utility (probability-weighted average of utilities across outcomes). Developed by von Neumann and Morgenstern, it provides the theoretical foundation for risk analysis in economics.',
 keyPoints: [
 'Expected utility: EU = Σ[p(outcome) × U(outcome)]',
 'Risk aversion: Concave utility function → diminishing MU of wealth → prefers certain outcome to gamble with same EV',
 'Risk seeking: Convex utility function → prefers gamble to certainty',
 'Risk neutral: Linear utility → indifferent between gamble and EV',
 'Insurance demand: Risk-averse individuals pay premium > actuarially fair price'
 ],
 analysis: 'Choice: (A) Certain £500 or (B) 50% chance of £1000, 50% chance of £0. EV(B) = £500 = Value(A). But if U is concave: U(£500) > 0.5×U(£1000) + 0.5×U(£0) → Choose A. Risk aversion explains insurance demand, portfolio diversification, and risk premiums in asset pricing.',
 evaluation: 'Expected utility theory is elegant but faces empirical challenges. Prospect theory (Kahneman & Tversky) shows people are risk-averse for gains but risk-seeking for losses, and weight low probabilities excessively (explaining lottery demand and insurance for rare events). The Allais and Ellsberg paradoxes demonstrate systematic violations of EU axioms. Nevertheless, EU remains the benchmark model in finance and economics, with behavioral modifications for specific applications.',
 formula: 'EU = \\sum_{i} p_i \\cdot U(x_i); \\quad \\text{Risk Premium} = E[W] - CE',
 realWorldExample: 'A risk-averse homeowner with £300k house buys fire insurance despite low probability of fire. EU with insurance > EU without: the utility loss from premium is less than the probability-weighted utility loss from uninsured disaster. This is why insurance markets exist.'
 },
 {
 id: 'external-benefits',
 title: 'External Benefits (Positive Externalities)',
 category: 'market-failure',
 definition: 'Benefits from production or consumption that accrue to third parties not directly involved in the transaction, for which no payment is received. Because producers/consumers do not capture these benefits, free markets under-produce goods with external benefits (market failure).',
 keyPoints: [
 'MSB > MPB: Social benefit exceeds private benefit by the external benefit',
 'Free market equilibrium: Qm where MPB = MPC → Below socially optimal Q*',
 'Deadweight welfare loss: Triangle between MSB and S curves from Qm to Q*',
 'Examples: Education (skilled workforce benefits employers), Vaccination (herd immunity), R&D (knowledge spillovers)',
 'Policy solutions: Subsidies, public provision, regulation mandating consumption'
 ],
 analysis: 'Free market: Firms/consumers equate MPB = MPC → Quantity = Qm. But MSB = MPB + MEB > MPB → Socially optimal Q* > Qm. Subsidy = MEB at Q* → Shifts demand/supply to achieve Q* → Eliminates underconsumption. Alternative: government provides the good directly (public education, free vaccination).',
 evaluation: 'Measuring external benefits is difficult: how much does society benefit from one more educated citizen? Subsidies may create dependency or be captured by producers (who raise prices). Public provision faces government failure risks: bureaucratic inefficiency, political capture, crowding out of private provision. Nevertheless, the theoretical case for intervention is strong when externalities are large and measurable.',
 formula: 'MSB = MPB + MEB; \\quad Q_{\\text{optimal}}: MSB = MSC; \\quad \\text{Subsidy} = MEB',
 realWorldExample: 'UK university education generates external benefits (innovation, civic participation, reduced crime). Pre-2012, tuition was heavily subsidized. Even with £9,250 fees, 50% is loan-financed by government—recognizing that private returns understate social returns.'
 },
 {
 id: 'external-costs',
 title: 'External Costs (Negative Externalities)',
 category: 'market-failure',
 definition: 'Costs from production or consumption imposed on third parties not directly involved in the transaction, for which no compensation is paid. Because producers/consumers do not bear these costs, free markets over-produce goods with external costs (market failure).',
 keyPoints: [
 'MSC > MPC: Social cost exceeds private cost by the external cost',
 'Free market equilibrium: Qm where MPB = MPC → Above socially optimal Q*',
 'Deadweight welfare loss: Triangle between MSC and D curves from Q* to Qm',
 'Examples: Pollution (health costs), Traffic congestion (time costs), Alcohol (healthcare, crime)',
 'Policy solutions: Pigouvian tax (t = MEC), Tradable permits, Regulation, Property rights (Coase)'
 ],
 analysis: 'Free market: Firms equate MPC = MPB → Quantity = Qm. But MSC = MPC + MEC > MPC → Socially optimal Q* < Qm. Tax = MEC at Q* → Raises private cost to social cost → Reduces output to Q* → Internalizes the externality. Alternative: cap-and-trade sets quantity and lets price adjust.',
 evaluation: 'The optimal tax equals the marginal external cost—but measuring MEC is contested (what is the cost of a ton of CO2?). Taxes are efficient but may be regressive. Regulation is simpler but inflexible. Coasian bargaining works only with low transaction costs and clear property rights. In practice, a mix of instruments is used. The key insight is that externalities represent genuine market failure—intervention can improve welfare, not just redistribute it.',
 formula: 'MSC = MPC + MEC; \\quad t^* = MEC; \\quad Q^*: MSC = MSB',
 realWorldExample: 'The UK landfill tax (£98.60/tonne, 2024) internalizes disposal externalities (leachate, methane). Recycling rates rose from 7% (1996) to 45% (2023). The tax raised £800m and changed behavior—a successful Pigouvian policy.'
 },
 {
 id: 'external-economies-of-scale',
 title: 'External Economies of Scale',
 category: 'theory',
 definition: 'Cost reductions that benefit all firms in an industry as the industry as a whole expands, independent of individual firm size. These arise from shared infrastructure, specialized labor pools, knowledge spillovers, and supplier networks. Contrast with internal economies (firm-specific).',
 keyPoints: [
 'Industry expansion → Shared benefits → All firms\' costs fall',
 'Sources: Skilled labor concentration, Specialized suppliers, Knowledge spillovers, Infrastructure investment',
 'Creates industrial clusters: Silicon Valley (tech), City of London (finance), Hollywood (film)',
 'LRAC curve shifts down for all firms as industry grows',
 'Agglomeration effects: Firms locate together to capture external economies'
 ],
 analysis: 'New firm enters industry → Industry output ↑ → Specialist suppliers emerge (EoS in input production) → Training institutions develop (skilled labor pool) → Knowledge diffuses (conferences, labor mobility) → All firms\' costs ↓ → LRAC shifts down → Not captured by any single firm but benefits all.',
 evaluation: 'External economies create a rationale for industrial policy: government can accelerate cluster formation through infrastructure, education, and R&D support. However, picking winners is risky—failed clusters waste resources. Market forces also drive agglomeration (firms follow talent, talent follows firms). The success of Silicon Valley reflects both market dynamics and historical accident (Stanford, defense contracts). Once established, clusters are sticky—but can decline if external diseconomies (congestion, high costs) dominate.',
 formula: 'LRAC_{\\text{firm}} = f(Q_{\\text{industry}}), \\quad \\frac{dLRAC}{dQ_{ind}} < 0',
 realWorldExample: 'The City of London financial cluster offers external economies: specialized legal/accounting services, deep talent pool, regulatory infrastructure, reputation effects. A new fintech locating in London benefits from these without paying for them—hence the cluster persists despite high rents.'
 },
 {
 id: 'externalities-definition',
 title: 'Externalities – Definition & Types',
 category: 'market-failure',
 definition: 'Externalities are costs or benefits that affect parties not directly involved in an economic transaction. They represent a divergence between private and social costs/benefits, causing markets to produce inefficient quantities. Externalities are a primary justification for government intervention.',
 keyPoints: [
 'Positive externalities: MSB > MPB → Underconsumption/production (education, R&D, vaccination)',
 'Negative externalities: MSC > MPC → Overconsumption/production (pollution, congestion, smoking)',
 'Production externalities: Arise from production process (factory pollution)',
 'Consumption externalities: Arise from consumption (passive smoking)',
 'Pecuniary externalities: Price effects—not true externalities (don\'t cause inefficiency)'
 ],
 analysis: 'Externality → Private decision ignores social impact → Quantity ≠ Social optimum → Deadweight loss. Negative: Q_market > Q* (overproduction) → Solution: tax/regulate to ↓Q. Positive: Q_market < Q* (underproduction) → Solution: subsidize/provide to ↑Q. Coase: with clear property rights and low transaction costs, bargaining can achieve efficiency without intervention.',
 evaluation: 'Externalities justify intervention but don\'t guarantee it succeeds. Government failure (information problems, regulatory capture, unintended consequences) may worsen outcomes. The Coase theorem highlights that private bargaining can work—but transaction costs are often prohibitive for diffuse externalities (climate change affects billions). Optimal policy matches the instrument to the externality: taxes for known, measurable costs; quantity limits for uncertain, catastrophic risks.',
 formula: '\\text{DWL} = \\frac{1}{2} \\times (MEC) \\times (Q_m - Q^*)',
 realWorldExample: 'COVID-19 illustrated both types: negative externality (infection spreads to others → masks/lockdowns), positive externality (vaccination protects others → subsidies and mandates). Policy responses attempted to internalize these externalities.'
 },
 // ========== PHASE 8: LABOR, FISCAL & MARKET PSYCHOLOGY ==========
 {
 id: 'factor-immobility',
 title: 'Factor Immobility',
 category: 'theory',
 definition: 'The inability or difficulty of factors of production (land, labor, capital, enterprise) to move between industries, occupations, or geographical locations in response to changes in demand. Factor immobility is a key cause of structural unemployment and regional inequality.',
 keyPoints: [
 'Geographical immobility: Workers cannot/will not relocate (housing costs, family ties, regional attachment)',
 'Occupational immobility: Workers lack skills for new industries (retraining costs, qualifications)',
 'Capital immobility: Machinery specific to one industry cannot be repurposed',
 'Causes persistent unemployment even when vacancies exist elsewhere',
 'Creates labor market mismatches: vacancies in one sector, unemployment in another'
 ],
 analysis: 'Industry A declines (e.g., coal mining) → Workers laid off → New jobs exist in Industry B (e.g., tech) but require different skills (occupational barrier) and are in different regions (geographical barrier) → Workers remain unemployed despite vacancies → Structural unemployment persists → Regional deprivation deepens. The labor market does not clear because supply cannot adjust to demand shifts.',
 evaluation: 'Factor immobility justifies active labor market policies: retraining programs, relocation subsidies, housing market reform. However, government programs often fail—retraining is expensive and workers may resist relocation. The decline of Northern England versus the South East illustrates persistent immobility. Some immobility is rational: workers value community and stability. Policy should reduce barriers (improve housing supply, portable pensions) rather than force mobility.',
 realWorldExample: 'The UK\'s "North-South divide" reflects decades of factor immobility. Former industrial areas (Yorkshire, Wales) face persistent unemployment while London has labor shortages. High housing costs in the South prevent Northern workers from relocating to available jobs.'
 },
 {
 id: 'factors-affecting-job-choice',
 title: 'Factors Affecting Choice of Job/Occupation',
 category: 'theory',
 definition: 'The economic and non-economic variables that influence an individual\'s decision to enter a particular occupation or accept a specific job. These factors determine labor supply in different sectors and explain wage differentials across occupations.',
 keyPoints: [
 'Pecuniary (monetary) factors: Wages, bonuses, pensions, job security',
 'Non-pecuniary factors: Working conditions, job satisfaction, status, flexibility, location',
 'Human capital: Education and training requirements, barriers to entry',
 'Net advantages theory: Workers compare total utility (monetary + non-monetary) across jobs',
 'Compensating wage differentials: Unpleasant jobs pay more to attract workers'
 ],
 analysis: 'Worker evaluates Job A (£40,000, stressful) vs. Job B (£35,000, fulfilling) → If non-pecuniary benefits of B exceed £5,000 in utility, worker chooses B → Explains why some sectors (teaching, charity) have wage discounts → Dangerous or unpleasant jobs (mining, sewage work) require wage premiums to attract workers → Market equilibrates when net advantages are equalized across occupations.',
 evaluation: 'The net advantages theory assumes perfect information and mobility—neither holds in practice. Workers face imperfect knowledge of job conditions, geographical constraints, and occupational barriers (qualifications). Labor market segmentation creates "good jobs" (stable, well-paid) and "bad jobs" (precarious, low-paid) with limited mobility between segments. Gender and racial discrimination also distort occupational choice, concentrating certain groups in lower-paid sectors.',
 formula: 'W_A + \\text{Non-pecuniary}_A = W_B + \\text{Non-pecuniary}_B \\quad \\text{(Net Advantages Equilibrium)}',
 realWorldExample: 'Investment banking offers high salaries but long hours and stress. Many graduates choose lower-paid careers in the public sector or NGOs for better work-life balance and job satisfaction—demonstrating the trade-off between pecuniary and non-pecuniary factors.'
 },
 {
 id: 'factors-of-production',
 title: 'Factors of Production – Definition & Explanation',
 category: 'theory',
 definition: 'The four categories of economic resources used in the production of goods and services: Land (natural resources), Labour (human effort), Capital (man-made resources), and Enterprise (entrepreneurship). Each factor receives a corresponding reward: rent, wages, interest, and profit respectively.',
 keyPoints: [
 'Land: All natural resources (soil, minerals, water, climate) – Reward: Rent',
 'Labour: Physical and mental human effort – Reward: Wages/Salaries',
 'Capital: Man-made aids to production (machinery, buildings, infrastructure) – Reward: Interest',
 'Enterprise: Risk-taking and organization of other factors – Reward: Profit',
 'Factors are scarce relative to wants → Creates the basic economic problem'
 ],
 analysis: 'Entrepreneur (Enterprise) identifies market opportunity → Combines Land (raw materials), Labour (workers), and Capital (equipment) → Produces output → Revenue covers factor payments (rent, wages, interest) → Residual = Profit for entrepreneur. If Profit > 0, resources are attracted to this use; if Profit < 0, resources exit. Price signals allocate factors across the economy.',
 evaluation: 'The four-factor model is foundational but simplified. Modern economies require refinement: Human capital (skilled labor) differs from unskilled labor; Financial capital differs from physical capital; Information and technology may constitute a "fifth factor." Factor mobility and substitutability determine how production responds to price changes. Capital accumulation drives long-run growth (Solow model), while human capital explains productivity differences (endogenous growth theory).',
 formula: 'Q = f(L, K, N, E) \\quad \\text{where L=Land, K=Capital, N=Labour, E=Enterprise}',
 realWorldExample: 'A coffee shop combines Land (leased premises), Labour (baristas), Capital (espresso machines, furniture), and Enterprise (the owner\'s vision and risk-taking). Each factor receives payment: rent to landlord, wages to staff, interest on equipment loans, profit to the entrepreneur.'
 },
 {
 id: 'fear-greed-index',
 title: 'Fear and Greed Index – Explained',
 category: 'macro',
 definition: 'A market sentiment indicator (popularized by CNN) that measures investor emotions on a scale from 0 (Extreme Fear) to 100 (Extreme Greed). It aggregates seven market signals to gauge whether stocks are overvalued (greed) or undervalued (fear), providing a contrarian investment signal.',
 keyPoints: [
 'Components: Stock price momentum, stock price strength, stock price breadth, put/call ratio, junk bond demand, market volatility (VIX), safe haven demand',
 'Extreme Fear (0-25): Market undervalued, potential buying opportunity (contrarian signal)',
 'Extreme Greed (75-100): Market overvalued, potential correction imminent',
 'Behavioral finance application: Markets driven by psychology, not just fundamentals',
 'Warren Buffett: "Be fearful when others are greedy, and greedy when others are fearful"'
 ],
 analysis: 'Market crash → VIX spikes → Put/call ratio rises → Safe haven demand (bonds, gold) increases → Fear index drops to "Extreme Fear" → Panic selling creates undervaluation → Contrarian investors buy → Prices recover. Conversely: Bull market → Greed dominates → Investors chase returns → Valuations stretched → Index hits "Extreme Greed" → Correction follows.',
 evaluation: 'Sentiment indicators are useful but imperfect. "Extreme Fear" can persist during genuine crises (2008), and "Extreme Greed" can continue for years (1990s tech bubble). The index is backward-looking—it describes current sentiment, not future returns. Behavioral biases (herding, overconfidence) are real, but exploiting them requires timing skill. For most investors, a contrarian signal complements but does not replace fundamental analysis.',
 realWorldExample: 'During the COVID crash (March 2020), the Fear and Greed Index hit single digits (Extreme Fear). Investors who bought at that point saw the S&P 500 more than double within 18 months. In contrast, Extreme Greed readings preceded the 2022 correction.'
 },
 {
 id: 'financial-dysmorphia',
 title: 'Financial Dysmorphia',
 category: 'macro',
 definition: 'A modern behavioral economics concept describing the distorted perception of one\'s financial situation—typically feeling "broke" despite having substantial wealth. It reflects the psychological disconnect between objective financial position and subjective financial anxiety, often driven by social comparison and lifestyle inflation.',
 keyPoints: [
 'Parallels body dysmorphia: distorted self-perception despite objective evidence',
 'Causes: Social media comparison, lifestyle creep, moving goalposts, hedonic adaptation',
 'High earners affected: Six-figure salaries feeling financially insecure',
 'Relative income matters more than absolute income for subjective wellbeing',
 'Consumption patterns rise with income, maintaining constant "financial anxiety"'
 ],
 analysis: 'Income ↑ → Expectations ↑ → Spending ↑ (lifestyle inflation) → Reference group changes (now compare to even wealthier peers) → Perceived "gap to comfortable" unchanged → Despite doubling income, individual feels no more secure. Hedonic treadmill: temporary satisfaction from consumption fades, requiring ever-higher spending for same utility.',
 evaluation: 'Financial dysmorphia challenges the assumption that higher income increases welfare. Once basic needs are met, relative position and social comparison dominate subjective wellbeing (Easterlin paradox). Policy implications: income redistribution may improve aggregate welfare if it reduces inequality-driven anxiety. Individual implications: focusing on absolute goals (savings rate, security) rather than relative status may reduce financial anxiety.',
 realWorldExample: 'Surveys show many UK households earning £100,000+ describe themselves as "just getting by." Rising housing costs, private school fees, and aspirational consumption (influenced by social media) create perpetual financial anxiety despite objectively high incomes.'
 },
 {
 id: 'fiscal-drag',
 title: 'Fiscal Drag (Bracket Creep)',
 category: 'policy',
 definition: 'An automatic tightening of fiscal policy that occurs when inflation pushes nominal incomes into higher tax brackets while real incomes remain unchanged. If tax thresholds are not adjusted for inflation, the government\'s real tax revenue increases without explicit policy action, effectively raising the tax burden.',
 keyPoints: [
 'Progressive tax systems: Higher incomes face higher marginal rates',
 'Inflation raises nominal wages → Workers pushed into higher brackets',
 'Real income unchanged but tax burden rises → Disposable income falls',
 'Acts as an automatic fiscal tightener during inflation',
 'Solution: Index tax thresholds to inflation (automatic uprating)'
 ],
 analysis: 'Worker earns £50,000 (basic rate) → 5% inflation → Nominal wage rises to £52,500 (if indexed) → But tax thresholds frozen → £2,500 taxed at higher rate (40%) → Real post-tax income falls → Worker is worse off in real terms despite nominal wage rise. Aggregate effect: ↓ Disposable income → ↓ Consumption → ↓ AD → Contractionary fiscal stance without policy action.',
 evaluation: 'Fiscal drag is a "stealth tax"—governments benefit from higher revenues without announcing tax rises. It erodes the progressivity rationale: workers pay more without being genuinely better off. However, it also provides automatic stabilization during inflationary booms (↓ AD dampens inflation). The UK froze thresholds (2022-2028), raising £30bn through fiscal drag—criticized as regressive as it hits middle earners moving into higher brackets.',
 formula: '\\text{Real Tax Burden} \\uparrow \\text{ if } \\frac{\\Delta \\text{Threshold}}{\\text{Threshold}} < \\pi',
 realWorldExample: 'UK income tax thresholds were frozen at £12,570 (personal allowance) and £50,270 (higher rate) from 2021-2028. With 10%+ inflation in 2022-23, millions of workers were dragged into higher brackets—fiscal drag raised billions in "hidden" tax revenue.'
 },
 {
 id: 'fiscal-illusion',
 title: 'Fiscal Illusion',
 category: 'policy',
 definition: 'A behavioral economics concept where taxpayers systematically underestimate the true tax burden or overestimate the benefits of government spending. This cognitive bias allows governments to extract more revenue than informed citizens would willingly pay, distorting democratic fiscal choices.',
 keyPoints: [
 'Complexity illusion: Complicated tax systems obscure true burden',
 'Indirect taxes less "visible" than direct taxes (VAT vs. income tax)',
 'Deficit spending hides current costs (future generations pay)',
 'Citizens overvalue concentrated benefits, undervalue diffuse costs',
 'First analyzed by Italian economist Amilcare Puviani (1903)'
 ],
 analysis: 'Government raises revenue via indirect taxes (fuel duty, VAT embedded in prices) → Taxpayers don\'t perceive full burden (unlike visible income tax deductions) → Voters underestimate cost of government → Demand for public spending exceeds willingness to pay if costs were transparent → Government grows larger than optimal. Similarly: Deficit financing → Benefits today, costs deferred → Voters support spending without perceiving future tax burden.',
 evaluation: 'Fiscal illusion has normative implications: if citizens are systematically misinformed, revealed preferences (voting) may not represent true preferences. This challenges public choice theory\'s assumption of rational voters. Counter-argument: voters are "rationally ignorant"—the cost of understanding tax systems exceeds the benefit. Transparency reforms (clear tax breakdowns, deficit accounting) may reduce illusion but face political resistance from beneficiaries of opacity.',
 realWorldExample: 'The UK\'s VAT (20%) is embedded in prices and rarely noticed. A visible "tax receipt" showing where each tax pound goes was introduced in 2015 to combat fiscal illusion—but evidence on its effectiveness is mixed.'
 },
 {
 id: 'fiscal-neutrality',
 title: 'Fiscal Neutrality',
 category: 'policy',
 definition: 'A principle of taxation stating that the tax system should not distort economic decisions—it should raise revenue without altering relative prices, resource allocation, or behavior beyond what is necessary. A fiscally neutral tax minimizes deadweight loss and lets market prices guide choices.',
 keyPoints: [
 'Neutral taxes: Lump-sum taxes (same payment regardless of behavior)',
 'Non-neutral taxes: Change relative prices → Alter behavior → Create deadweight loss',
 'Perfect neutrality is impossible in practice (all taxes affect some margin)',
 'Trade-off: Neutrality vs. redistribution, externality correction, revenue adequacy',
 'Broad-based taxes with low rates are more neutral than narrow taxes with high rates'
 ],
 analysis: 'Tax on good X → Price of X rises relative to Y → Consumers substitute toward Y → Quantity of X falls → Resources reallocated away from X → Deadweight loss created. Neutral alternative: Lump-sum tax → No price distortion → No substitution effect → No DWL. But lump-sum taxes are regressive and politically unpopular. In practice, broad-based consumption taxes (VAT) with few exemptions approach neutrality.',
 evaluation: 'Perfect fiscal neutrality conflicts with other policy goals. Pigouvian taxes deliberately distort behavior (tobacco, carbon taxes) to correct externalities. Progressive income taxes pursue redistribution but distort labor-leisure choices. The Ramsey rule suggests taxing inelastic goods more heavily (minimizes DWL) but this may be regressive (basic necessities are inelastic). Optimal tax design balances neutrality, equity, revenue, and simplicity.',
 formula: 'DWL = \\frac{1}{2} \\times t^2 \\times \\frac{Q}{P} \\times PED',
 realWorldExample: 'The Mirrlees Review (2011) recommended reforming UK taxes toward greater neutrality: a single rate of VAT with cash compensation for low earners, aligning capital and income tax rates to prevent arbitrage, and taxing housing consistently with other assets.'
 },
 {
 id: 'fiscal-stance',
 title: 'Fiscal Stance (Expansionary vs. Contractionary)',
 category: 'policy',
 definition: 'The overall direction and magnitude of fiscal policy\'s impact on the economy, measured by whether the government is injecting demand (expansionary/loose) or withdrawing demand (contractionary/tight). Key indicators include the budget deficit/surplus and the cyclically-adjusted (structural) balance.',
 keyPoints: [
 'Expansionary: G > T → Budget deficit → Injects demand → ↑ AD → Used in recessions',
 'Contractionary: T > G → Budget surplus → Withdraws demand → ↓ AD → Used to cool overheating',
 'Cyclically-adjusted balance: Removes automatic stabilizer effects to show policy intent',
 'Fiscal impulse: Change in structural balance year-on-year (Δ stance)',
 'Austerity: Sustained contractionary stance to reduce debt'
 ],
 analysis: 'Recession → Output gap negative → Government adopts expansionary stance: ↑G and/or ↓T → Budget deficit widens → Multiplier effect: ΔY = k × ΔG → AD shifts right → Output gap closes → But debt accumulates. Boom → Output gap positive → Contractionary stance: ↓G and/or ↑T → Budget surplus → ↓ AD → Prevents overheating and inflation → Debt repaid.',
 evaluation: 'Measuring fiscal stance is contested. Headline deficits reflect automatic stabilizers (welfare spending rises in recession), not discretionary policy. The structural balance isolates policy choices but depends on estimated potential output (itself uncertain). The fiscal multiplier varies with economic conditions: large in recession, small near full employment. Austerity debates center on whether contractionary stance in a weak economy is self-defeating (↓Y → ↓Tax revenue → Deficit persists).',
 formula: '\\text{Fiscal Impulse} = -(\\Delta \\text{Structural Balance as \\% of GDP})',
 realWorldExample: 'The UK\'s 2010-2015 austerity represented a sharp contractionary stance: public spending cut while taxes rose, reducing the structural deficit. Critics argue this prolonged the post-2008 recovery; supporters argue it restored fiscal credibility and lowered borrowing costs.'
 },
 {
 id: 'fisher-effect',
 title: 'Fisher Effect',
 category: 'macro',
 definition: 'An economic theory proposed by Irving Fisher stating that the nominal interest rate equals the real interest rate plus expected inflation. It implies that nominal rates adjust one-for-one with expected inflation, leaving real rates unchanged in the long run.',
 keyPoints: [
 'Fisher equation: i = r + πᵉ (nominal = real + expected inflation)',
 'Exact form: (1 + i) = (1 + r)(1 + πᵉ)',
 'Implies nominal rates reflect inflation expectations',
 'Real interest rate determined by productivity and time preference (supply-side factors)',
 'Basis for inflation-indexed bonds (TIPS, UK index-linked gilts)'
 ],
 analysis: 'Expected inflation ↑ by 2% → Lenders demand 2% higher nominal rate to maintain real return → Nominal rate rises from 5% to 7% → Real rate unchanged at 3% → Borrowing/saving decisions unaffected by pure inflation changes. This explains why high-inflation countries have high nominal rates but not necessarily high real rates.',
 evaluation: 'The Fisher Effect holds approximately in the long run but breaks down in the short run. Sticky expectations, money illusion, and monetary policy lags mean nominal rates adjust slowly. Central banks exploit this: by cutting nominal rates faster than inflation expectations fall, they reduce real rates and stimulate demand. The "Neo-Fisher Effect" (controversial) suggests raising nominal rates might increase inflation via expectations—challenging conventional monetary policy transmission.',
 formula: 'r = i - \\pi^e \\quad \\text{or exactly:} \\quad 1 + r = \\frac{1 + i}{1 + \\pi^e}',
 realWorldExample: 'UK 10-year gilt yields rose from 1% to 4.5% (2021-2023) as inflation expectations surged. Real yields (measured by index-linked gilts) rose less, confirming the Fisher Effect: much of the nominal rate increase reflected higher expected inflation.'
 },
 {
 id: 'fixed-capital-formation',
 title: 'Fixed Capital Formation',
 category: 'macro',
 definition: 'Investment in physical capital assets—machinery, equipment, buildings, infrastructure—that will be used in production over multiple years. Gross Fixed Capital Formation (GFCF) is a key component of GDP and a leading indicator of future productive capacity and economic growth.',
 keyPoints: [
 'GFCF = Gross investment in fixed assets (before depreciation)',
 'Net investment = GFCF − Depreciation (capital consumption)',
 'Components: Business investment, residential construction, government infrastructure',
 'Determinant of future LRAS: More capital → Higher potential output',
 'Measured at constant prices to track real investment trends'
 ],
 analysis: 'Firms expect ↑ demand → MEC > interest rate → ↑ GFCF → Capital stock grows → Labor productivity rises (K/L ratio ↑) → LRAS shifts right → Potential output increases. Multiplier effect: Investment spending generates income → ↑ C → Further ↑ AD. Accelerator: ↑ GDP → ↑ required capital → ↑ Investment → Amplifies business cycle.',
 evaluation: 'Investment is the most volatile GDP component—it amplifies cycles via the multiplier-accelerator interaction. Low UK investment (relative to peers) is blamed for poor productivity growth. Causes include short-termism, Brexit uncertainty, and high cost of capital. Government can boost GFCF via: lower corporate taxes, investment allowances (super-deduction), public infrastructure spending, or reducing planning barriers. Quality of investment matters as much as quantity—R&D investment yields higher returns than property speculation.',
 formula: 'I_{net} = GFCF - \\delta K \\quad \\text{where } \\delta = \\text{depreciation rate}',
 realWorldExample: 'UK GFCF as % of GDP has consistently lagged Germany, France, and the US. The 2021-2023 "super-deduction" (130% capital allowances) aimed to boost business investment but had modest impact amid economic uncertainty.'
 },
 {
 id: 'fixed-costs',
 title: 'Fixed Costs',
 category: 'theory',
 definition: 'Costs that do not vary with the level of output in the short run. They must be paid regardless of production volume, including zero output. Fixed costs include rent, loan interest, insurance, and salaried staff. They contrast with variable costs, which change with output.',
 keyPoints: [
 'Fixed in short run, but all costs become variable in long run',
 'Total Fixed Cost (TFC) is constant at all output levels',
 'Average Fixed Cost (AFC) = TFC/Q → Falls continuously as output rises (spreading)',
 'Examples: Rent, insurance, depreciation, permanent staff salaries',
 'Creates economies of scale: Higher Q → Lower AFC → Lower ATC'
 ],
 analysis: 'Firm has TFC = £10,000. At Q=100, AFC = £100. At Q=1,000, AFC = £10. At Q=10,000, AFC = £1. As output expands, fixed costs are "spread" over more units → AFC falls asymptotically toward zero → Source of internal economies of scale. But if Q falls below breakeven, firm still pays TFC → Losses accumulate quickly.',
 evaluation: 'The fixed/variable distinction is time-dependent. In the very short run, most costs are fixed (contracts, leases). In the long run, all costs are variable (can exit, relocate, resize). High fixed costs create: (1) Barriers to entry (need large upfront investment), (2) Incentive for price discrimination (cover fixed costs, then price at marginal cost), (3) Natural monopoly conditions (if average costs fall throughout market range). Digital businesses have near-zero marginal costs but high fixed costs (development, R&D).',
 formula: 'TC = TFC + TVC; \\quad AFC = \\frac{TFC}{Q}; \\quad \\frac{dTFC}{dQ} = 0',
 realWorldExample: 'Airlines have high fixed costs (aircraft, airport slots, permanent staff). This explains aggressive price competition to fill seats—once fixed costs are covered, any revenue above marginal cost (fuel, food) adds to profit. Empty seats have zero marginal revenue but full fixed cost burden.'
 },
 {
 id: 'flexible-wages',
 title: 'Flexible Wages Definition',
 category: 'theory',
 definition: 'A labor market condition where wages adjust freely to changes in labor supply and demand, clearing the market and eliminating involuntary unemployment. Classical and new classical economists assume wage flexibility; Keynesians emphasize wage rigidity (stickiness) as a cause of unemployment.',
 keyPoints: [
 'Classical view: Wages flexible → Labor market clears → No involuntary unemployment',
 'Keynesian view: Wages sticky downward → Surplus labor persists → Unemployment',
 'Sources of rigidity: Minimum wages, unions, contracts, efficiency wages, social norms',
 'Real wage rigidity (W/P sticky) vs. Nominal wage rigidity (W sticky)',
 'Flexible wages required for natural rate hypothesis and LRAS stability'
 ],
 analysis: '↓ Labor demand (recession) → Excess supply of labor at current wage → If wages flexible: W falls → Quantity demanded rises → Market clears → Full employment restored. If wages rigid: W unchanged → Unemployment persists → Keynesian involuntary unemployment. The speed of wage adjustment determines how quickly the economy returns to full employment after shocks.',
 evaluation: 'Perfect wage flexibility is unrealistic. Downward nominal wage rigidity is well-documented: workers resist pay cuts (loss aversion), firms fear morale effects (efficiency wage theory), and contracts fix wages for periods. However, real wages can fall if prices rise while nominal wages are frozen (fiscal drag equivalent). Policy implications: if wages are sticky, monetary/fiscal policy can affect real output; if flexible, only inflation results. The debate shapes views on austerity and stimulus.',
 formula: 'W^* = W_0 + \\lambda(L^d - L^s) \\quad \\text{(Wage adjustment)}',
 realWorldExample: 'During COVID-19, the UK furlough scheme prevented mass layoffs but also prevented wage adjustment. When reopening occurred, labor shortages emerged as wages had not fallen to clear the reduced-demand market—followed by rapid wage increases in hospitality and logistics.'
 },
 {
 id: 'flight-from-money',
 title: 'Flight From Money',
 category: 'macro',
 definition: 'A phenomenon during hyperinflation where individuals and businesses rapidly convert currency holdings into real assets (goods, property, foreign currency) to preserve purchasing power. As money loses value hourly or daily, holding cash becomes irrational, accelerating velocity and worsening inflation.',
 keyPoints: [
 'Occurs during hyperinflation (typically >50% monthly inflation)',
 'Money loses its store of value function → Held for shortest possible time',
 'Velocity of money (V) explodes as money changes hands rapidly',
 'Reinforcing spiral: Flight → ↑ V → ↑ P → More flight',
 'Leads to dollarization, barter, and breakdown of monetary system'
 ],
 analysis: 'Inflation = 100% per month → Holding £100 cash loses £50 purchasing power in 2 weeks → Rational response: spend/convert immediately → Everyone spends simultaneously → ↑ Demand for goods → Prices rise faster → V increases → MV = PY: with V unstable, monetary policy loses traction. Self-fulfilling: Expectations of inflation → Flight → Actual inflation.',
 evaluation: 'Flight from money marks the collapse of fiat currency credibility. Restoration requires: (1) Fiscal reform (end deficit monetization), (2) New currency (often pegged to stable anchor), (3) Independent central bank credibility. Historical hyperinflations (Weimar 1923, Zimbabwe 2008, Venezuela 2018) ended only with complete monetary regime change. The psychological damage persists: German inflation memory shapes ECB\'s inflation-aversion decades later.',
 formula: 'MV = PY \\implies \\text{If } V \\to \\infty, \\text{ then } P \\to \\infty \\text{ even with constant M}',
 realWorldExample: 'In Zimbabwe (2008), prices doubled every 24 hours at peak. Workers demanded daily pay and spent immediately. Foreign currency (USD) replaced the Zim dollar for transactions. The flight from money ended only when the domestic currency was abandoned entirely.'
 },
 {
 id: 'floating-exchange-rates',
 title: 'Floating Exchange Rates Definition',
 category: 'trade',
 definition: 'An exchange rate regime where currency values are determined by market forces of supply and demand in the foreign exchange market, without direct central bank intervention. The rate fluctuates continuously based on trade flows, capital movements, interest differentials, and speculative activity.',
 keyPoints: [
 'Market-determined: Supply and demand set the rate',
 'Automatic adjustment: Trade deficits → Currency depreciation → Improved competitiveness',
 'Monetary policy autonomy: Central bank can set interest rates independently',
 'Volatility: Rates fluctuate, creating uncertainty for trade and investment',
 'Most major currencies float: USD, EUR, GBP, JPY'
 ],
 analysis: 'Current account deficit → Imports > Exports → Selling domestic currency to buy foreign → Supply of £ increases → £ depreciates → Exports cheaper, imports dearer → Demand for exports ↑, demand for imports ↓ → Trade balance improves (assuming Marshall-Lerner holds). Simultaneously: Higher interest rates → Capital inflows → Demand for £ ↑ → £ appreciates.',
 evaluation: 'Floating rates provide shock absorption and policy autonomy but introduce volatility. Exchange rate uncertainty raises transaction costs (hedging) and may deter trade/investment. Overshooting (Dornbusch model): rates can deviate substantially from fundamentals before correcting. Speculation can destabilize rather than stabilize. Managed floats (central bank intervention at extremes) attempt to capture benefits of both fixed and floating systems. For small open economies, floating offers less autonomy than theory suggests—pass-through to domestic prices is rapid.',
 formula: 'e = f(i - i^*, \\pi^e, CA, \\text{risk}, \\text{speculation})',
 realWorldExample: 'The £ fell 25% against the $ after the Brexit referendum (June 2016). The floating rate absorbed the shock—exports became more competitive, limiting the GDP impact. But import prices rose, contributing to inflation. A fixed rate would have required either reserve depletion or recession.'
 },
 {
 id: 'framing-effect',
 title: 'Framing Effect (Cognitive Bias)',
 category: 'theory',
 definition: 'A cognitive bias where people\'s decisions are influenced by how information is presented (framed) rather than by the objective facts alone. Equivalent options can lead to different choices depending on whether outcomes are framed as gains or losses. This violates the rationality assumption of neoclassical economics.',
 keyPoints: [
 'Loss framing vs. gain framing → Different decisions for identical outcomes',
 'Loss aversion: Losses loom larger than equivalent gains (Kahneman & Tversky)',
 'Reference point matters: "90% fat-free" vs. "10% fat" affects choice',
 'Exploited in marketing, policy design (nudges), and political messaging',
 'Challenges Expected Utility Theory: preferences are inconsistent'
 ],
 analysis: 'Option A: "200 people will be saved" (gain frame) vs. Option B: "400 people will die" (loss frame) → Same outcome, but people choose A when gain-framed and risk-seeking alternatives when loss-framed. In economics: "5% discount for cash" (gain) vs. "5% surcharge for credit" (loss) → Framing affects payment method choice despite economic equivalence.',
 evaluation: 'Framing effects challenge the rational agent model. If preferences depend on presentation, not just outcomes, welfare analysis becomes problematic. Policy implications: "nudge" interventions exploit framing to steer behavior (opt-out pensions, calorie labels). Ethical concerns: is it paternalistic manipulation or benign choice architecture? Firms exploit framing for profit (subscription traps, decoy pricing). Financial literacy education may reduce but not eliminate framing effects.',
 realWorldExample: 'Organ donation rates differ dramatically between opt-in (10-15%) and opt-out (85-90%) systems across Europe—the default framing shapes choices despite identical options. The UK switched to opt-out in 2020, increasing potential donors.'
 },
 {
 id: 'free-rider-problem',
 title: 'Free Rider Problem Definition',
 category: 'market-failure',
 definition: 'A market failure that occurs with public goods (and some common resources) where individuals can benefit from a good without paying for it. Because non-payers cannot be excluded, rational individuals understate their willingness to pay, leading to under-provision or non-provision by private markets.',
 keyPoints: [
 'Arises from non-excludability of public goods',
 'Rational strategy: Let others pay, enjoy benefits for free',
 'Leads to under-provision: Private firms cannot capture full social benefit',
 'Collective action problem: Individually rational but collectively irrational',
 'Solutions: Government provision (taxation), regulation, social norms'
 ],
 analysis: 'Public good (e.g., street lighting) benefits all residents → Each resident thinks: "If others pay, I benefit anyway; if I pay alone, it\'s not worth it" → All residents reason identically → No one pays → Good is not provided → Social welfare loss. The Nash equilibrium is non-provision, despite everyone being better off with the good.',
 evaluation: 'The free rider problem justifies government provision of public goods via taxation—coercion solves the collective action failure. However, government provision has costs: taxation distortions, bureaucratic inefficiency, and preference misrepresentation (voters can\'t reveal true WTP). Partial solutions: voluntary contributions (Wikipedia), excludable substitutes (gated communities), and social/moral sanctions (shaming). The severity of free riding depends on group size—small groups may overcome it through reputation and reciprocity.',
 formula: '\\sum_{i=1}^n MRS_i = MRT \\quad \\text{(Samuelson condition for optimal public good provision)}',
 realWorldExample: 'National defense is the classic public good. No private firm would provide it—citizens would free ride on others\' protection. Hence, defense is tax-funded. Similarly, lighthouses were historically cited as public goods, though Coase showed many were privately provided via port fees (excludability via ports).'
 },
 {
 id: 'frictional-unemployment',
 title: 'Frictional Unemployment',
 category: 'macro',
 definition: 'Short-term unemployment arising from the time taken for workers to search for and transition between jobs. It occurs even in a healthy economy with full employment, as workers voluntarily leave jobs, enter the workforce, or seek better matches. Frictional unemployment is part of the natural rate of unemployment.',
 keyPoints: [
 'Search unemployment: Time to find suitable job match',
 'Voluntary and short-term (weeks to months, not years)',
 'Exists at "full employment" (NAIRU includes frictional unemployment)',
 'Reflects labor market dynamism and information imperfections',
 'Reduced by: Job centers, online platforms, better information flow'
 ],
 analysis: 'Worker quits Job A → Searches for better Job B → During search period, counted as unemployed → Eventually finds Job B → Exits unemployment. Aggregate level: Constant flow of workers through frictional unemployment as economy churns → Some frictional unemployment always exists → Part of natural rate. If matching improves (better job platforms), frictional duration falls → Natural rate falls → LRAS shifts right.',
 evaluation: 'Some frictional unemployment is efficient: it allows better worker-job matching, raising productivity. Policies to eliminate frictional unemployment (forcing workers to accept first offer) would reduce match quality and long-run output. However, excessively long search (due to information failures or generous benefits) is inefficient. The rise of online job platforms (LinkedIn, Indeed) has likely reduced frictional duration. Universal Basic Income debates partly concern whether to subsidize longer search (better matches) or faster acceptance (lower measured unemployment).',
 formula: 'u^* = u_f + u_s + u_c \\quad \\text{(Natural rate = frictional + structural + cyclical at equilibrium)}',
 realWorldExample: 'A graduate spending 3 months finding their first professional role, or a worker taking 6 weeks between jobs to find a better fit, represents frictional unemployment. The UK\'s flexible labor market has relatively short frictional spells compared to more regulated European markets.'
 },
 // ========== PHASE 9: TAX, TRADE, LABOR & MODERN FINANCE ==========
 {
 id: 'tax-competition',
 title: 'Tax Competition',
 category: 'policy',
 definition: 'The competitive lowering of tax rates by governments to attract mobile capital, businesses, and high-net-worth individuals from other jurisdictions. Tax competition can lead to a "race to the bottom" where all countries reduce taxes, potentially underfunding public services.',
 keyPoints: [
 'Capital mobility enables tax arbitrage between jurisdictions',
 'Race to the bottom: Countries undercut each other on corporate tax rates',
 'Winners: Mobile capital, multinational corporations',
 'Losers: Immobile factors (labor, land), public services',
 'OECD global minimum tax (15%) attempts to limit tax competition'
 ],
 analysis: 'Country A cuts corporate tax to 12.5% (Ireland) → MNCs relocate profits to A → Country B loses tax revenue → B cuts taxes to compete → All countries end with lower rates → Tax burden shifts to immobile factors (labor, consumption) → Public services underfunded or inequality rises. Game theory: Prisoners\' dilemma—all countries worse off but individual incentive to defect.',
 evaluation: 'Tax competition has efficiency benefits: it constrains wasteful government spending and encourages efficient tax systems. But it also erodes the tax base, particularly for smaller countries unable to compete. The 2021 OECD global minimum tax (Pillar Two) represents international coordination to limit the race to the bottom. However, enforcement is challenging, and countries can compete on other margins (subsidies, regulations). The optimal balance between competition and coordination remains contested.',
 formula: '\\text{Nash Equilibrium: } t^* < t_{\\text{cooperative}} \\quad \\text{(Suboptimal tax rates)}',
 realWorldExample: 'Ireland\'s 12.5% corporate tax rate attracted Apple, Google, and other tech giants, creating the "Double Irish" tax structure. The OECD global minimum tax (15%, effective 2024) aims to reduce such competition, though Ireland negotiated exemptions for existing arrangements.'
 },
 {
 id: 'tax-havens',
 title: 'Tax Havens',
 category: 'policy',
 definition: 'Jurisdictions that offer low or zero tax rates, strict banking secrecy, and minimal financial regulation to attract foreign capital. Tax havens enable legal tax avoidance and illegal tax evasion, reducing tax revenues in higher-tax countries and contributing to global inequality.',
 keyPoints: [
 'Characteristics: Low/zero taxes, secrecy, no information exchange, shell companies',
 'Examples: Cayman Islands, British Virgin Islands, Luxembourg, Switzerland (historically)',
 'Enable profit shifting by MNCs (transfer pricing, intellectual property)',
 'Estimated $8-10 trillion held in offshore accounts globally',
 'OECD Base Erosion and Profit Shifting (BEPS) targets tax haven abuse'
 ],
 analysis: 'MNC earns £100m profit in UK → Creates subsidiary in tax haven → Licenses IP to UK subsidiary at inflated price → UK profits reduced to £10m (taxed at 25%) → £90m profit appears in tax haven (taxed at 0%) → UK loses £22.5m in tax revenue. Aggregate effect: Tax base erosion in high-tax countries → Either higher taxes on immobile factors or reduced public spending.',
 evaluation: 'Tax havens impose negative externalities on other countries (lost revenue, inequality). But defining "haven" is contested—low taxes are not inherently illegitimate. Sovereignty arguments suggest countries can set their own tax policies. The distinction between legal avoidance and illegal evasion matters: transparency initiatives (CRS, automatic information exchange) target evasion, while minimum taxes target avoidance. Small island economies argue they have few other competitive advantages—eliminating tax competition could harm their development.',
 realWorldExample: 'The Panama Papers (2016) and Paradise Papers (2017) revealed widespread use of tax havens by corporations and wealthy individuals. The UK\'s Crown Dependencies (Jersey, Guernsey, Isle of Man) and Overseas Territories (Cayman Islands, BVI) are major tax havens, creating tensions over Britain\'s anti-avoidance rhetoric.'
 },
 {
 id: 'technical-efficiency',
 title: 'Technical Efficiency Definition',
 category: 'theory',
 definition: 'A firm achieves technical efficiency when it produces the maximum possible output from a given set of inputs, or equivalently, uses the minimum inputs to produce a given output. Operating on the production possibility frontier indicates technical efficiency; points inside the frontier indicate technical inefficiency.',
 keyPoints: [
 'Maximum output from given inputs (or minimum inputs for given output)',
 'On the PPF/isoquant = technically efficient; inside = technically inefficient',
 'Distinct from allocative efficiency (producing the right mix of goods)',
 'Sources of inefficiency: X-inefficiency, poor management, outdated technology',
 'Necessary but not sufficient for economic efficiency'
 ],
 analysis: 'Firm uses 10 workers and 5 machines → Could produce 100 units (technically efficient) or 80 units (20% inefficient). Inefficiency arises from: poor work organization, inadequate training, obsolete equipment, or managerial slack (X-inefficiency). On a PPF diagram: Point on the curve = technically efficient; point inside = wasted resources. Technical efficiency is achieved when MPL/w = MPK/r (isocost tangent to isoquant).',
 evaluation: 'Technical efficiency is a minimum requirement but does not guarantee overall efficiency. A firm can be technically efficient (on its PPF) while producing the wrong goods (allocatively inefficient) or at the wrong scale (not achieving minimum LRAC). Competition promotes technical efficiency by punishing slack firms. Monopolies, protected industries, and public sector organizations may exhibit persistent technical inefficiency due to lack of competitive pressure.',
 formula: 'TE = \\frac{\\text{Actual Output}}{\\text{Maximum Possible Output}} \\leq 1',
 realWorldExample: 'British Leyland (1970s nationalized car manufacturer) exemplified technical inefficiency: overstaffing, poor work practices, and outdated machinery meant output per worker was far below competitors. Privatization and foreign competition in the 1980s forced efficiency improvements or exit.'
 },
 {
 id: 'technological-unemployment',
 title: 'Technological Unemployment',
 category: 'macro',
 definition: 'Unemployment caused by the replacement of human labor with machines, automation, or artificial intelligence. While technology creates new jobs, technological unemployment occurs when the pace of job destruction exceeds job creation, or when displaced workers lack skills for new roles.',
 keyPoints: [
 'Structural unemployment: Skills mismatch as old jobs disappear',
 'Historical precedent: Luddites, agricultural mechanization, manufacturing automation',
 'AI and robotics accelerating displacement in routine cognitive and manual tasks',
 'Compensation effects: New industries, products, and jobs emerge',
 'Transition costs: Retraining, relocation, income support during adjustment'
 ],
 analysis: 'Automation replaces routine tasks → Demand for routine workers falls → These workers become unemployed → If new jobs require different skills (occupational immobility), unemployment persists → Structural unemployment rises. Long run: Technology increases productivity → Lower prices → Higher real incomes → Demand for new goods/services → New jobs created. But short-run transition is painful for displaced workers.',
 evaluation: 'Historically, technology has not caused permanent mass unemployment—compensation mechanisms have created new jobs. But AI may be different: it can perform non-routine cognitive tasks, threatening middle-class jobs previously considered safe. The question is speed: if displacement is faster than adaptation, transitional unemployment could be prolonged. Policy responses: investment in education/retraining, portable benefits, Universal Basic Income (contested), or slowing automation (politically difficult).',
 formula: '\\Delta L_d = f(\\Delta \\text{Technology}, \\text{Elasticity of Substitution})',
 realWorldExample: 'Self-checkout machines replaced 7 million retail cashier jobs globally (2010-2020). Warehousing (Amazon robots), driving (autonomous vehicles), and legal research (AI document review) face similar disruption. The UK\'s declining manufacturing employment (from 30% to 8% of workforce since 1970) partly reflects technological displacement.'
 },
 {
 id: 'thatcher-economic-policies',
 title: 'Thatcher\'s Economic Policies',
 category: 'policy',
 definition: 'The free-market, supply-side economic reforms implemented by UK Prime Minister Margaret Thatcher (1979-1990). Characterized by monetarism, privatization, deregulation, tax cuts, trade union reform, and reduced government intervention—collectively known as "Thatcherism" or neoliberalism.',
 keyPoints: [
 'Monetarism: Controlling money supply to reduce inflation (targeting M3)',
 'Privatization: Selling state-owned enterprises (BT, British Gas, BA)',
 'Deregulation: Reducing barriers to entry, financial deregulation (Big Bang 1986)',
 'Trade union reform: Reducing union power (1984-85 miners\' strike)',
 'Tax reform: Lower marginal rates (top rate from 83% to 40%)'
 ],
 analysis: 'High inflation (1970s) → Thatcher adopts monetarism → Tight monetary policy → Interest rates rise to 17% → Demand falls → Inflation drops (from 18% to 4%) BUT unemployment triples (to 3 million). Simultaneously: Supply-side reforms → Privatization improves efficiency → Deregulation increases competition → Tax cuts incentivize work and enterprise → LRAS shifts right → Long-run growth potential increases.',
 evaluation: 'Thatcher\'s policies remain deeply contested. Supporters credit her with ending stagflation, reviving entrepreneurship, and modernizing the economy. Critics point to deindustrialization, regional inequality, weakened social safety net, and the 1980s recession. The empirical evidence is mixed: UK productivity growth improved relative to Europe, but income inequality rose sharply (Gini coefficient from 0.25 to 0.34). The legacy shapes contemporary debates on austerity, inequality, and the role of the state.',
 realWorldExample: 'The 1984-85 miners\' strike tested Thatcher\'s resolve against union power. The government\'s victory accelerated pit closures and deindustrialization in Northern England and Wales. Meanwhile, financial deregulation transformed the City of London into a global financial center—with consequences revealed in the 2008 crisis.'
 },
 {
 id: 'accelerator-effect',
 title: 'The Accelerator Effect',
 category: 'macro',
 definition: 'An economic theory stating that investment spending is determined by the rate of change of national income, not its level. A small change in consumer demand leads to a proportionally larger change in investment demand, amplifying business cycle fluctuations.',
 keyPoints: [
 'Investment = f(ΔY), not f(Y) directly',
 'Capital-output ratio (v): Amount of capital needed per unit of output',
 'Small ↑ in demand → Large ↑ in investment; small ↓ → Large ↓ in investment',
 'Explains volatility of investment relative to consumption',
 'Combines with multiplier to create multiplier-accelerator model'
 ],
 analysis: 'Economy at equilibrium with K/Y ratio = 3 → Demand rises by £100m → Firms need £300m additional capital to meet demand → Investment rises by £300m (accelerator effect). But if demand growth slows from 5% to 3% → Required investment falls → Negative accelerator → Investment collapses even though demand is still growing. This explains why investment is far more volatile than consumption.',
 evaluation: 'The accelerator model is simplified: it assumes fixed capital-output ratio and full capacity utilization. In reality, firms hold spare capacity, can vary utilization, and form expectations about future demand (flexible accelerator). Financial constraints and uncertainty also matter—firms may not invest even if demand rises. However, the core insight holds: investment responds to changes in demand, amplifying cycles. The multiplier-accelerator interaction can generate endogenous business cycles.',
 formula: 'I_t = v \\cdot \\Delta Y_t = v \\cdot (Y_t - Y_{t-1})',
 realWorldExample: 'The 2008-09 recession saw UK business investment fall 25%—far more than the 6% GDP decline—illustrating the accelerator in reverse. Conversely, post-COVID recovery in 2021 saw investment surge as demand grew rapidly.'
 },
 {
 id: 'coase-theorem',
 title: 'The Coase Theorem Explained',
 category: 'market-failure',
 definition: 'An economic proposition stating that if property rights are well-defined and transaction costs are zero, private bargaining will lead to an efficient allocation of resources regardless of the initial assignment of property rights. Externality problems can be solved through negotiation without government intervention.',
 keyPoints: [
 'Transaction costs = 0 → Efficient outcome achieved through bargaining',
 'Initial property rights allocation affects distribution but not efficiency',
 'Challenges Pigouvian intervention as the only solution to externalities',
 'Limitations: High transaction costs, many parties, ill-defined property rights',
 'Foundation of law and economics movement'
 ],
 analysis: 'Factory pollutes river → Fishermen lose £10,000 → Factory gains £15,000 from pollution. If fishermen have property right to clean water: Factory pays £10,001-£14,999 compensation → Pollution continues efficiently. If factory has right to pollute: Fishermen pay £10,001-£14,999 to stop pollution → But they only value clean water at £10,000 → Pollution continues. Either way, efficient outcome (pollution, since net benefit positive) is reached through bargaining.',
 evaluation: 'The Coase theorem is theoretically elegant but practically limited. Transaction costs are rarely zero: finding and negotiating with all affected parties, enforcing agreements, and verifying compliance is costly. When externalities affect many people (air pollution), coordination is impossible. When property rights are unclear (climate change), bargaining cannot occur. The theorem\'s value is diagnostic: it identifies transaction costs and property rights as the key barriers to private solutions, guiding where intervention is needed.',
 formula: '\\text{If } TC = 0 \\text{ and } PR \\text{ defined} \\implies \\text{Efficiency via bargaining}',
 realWorldExample: 'Ranchers and farmers in the American West historically negotiated grazing rights and crop damage compensation privately (as Coase documented). But global externalities like climate change involve billions of parties and undefined property rights—Coasian bargaining is impossible, requiring international coordination.'
 },
 {
 id: 'gross-vs-net-pay',
 title: 'The Difference Between Gross and Net Pay',
 category: 'theory',
 definition: 'Gross pay is the total earnings before any deductions; net pay (take-home pay) is what remains after mandatory deductions (income tax, National Insurance, pension contributions) and voluntary deductions (student loan repayments, union dues). The gap between gross and net represents the tax wedge.',
 keyPoints: [
 'Gross pay: Total earnings (salary, overtime, bonuses) before deductions',
 'Net pay: Take-home pay after all deductions',
 'Mandatory deductions: Income tax, NICs, pension auto-enrollment',
 'Tax wedge: Gross minus net as percentage—affects labor supply decisions',
 'Marginal vs. average tax rate: Different incentive effects'
 ],
 analysis: 'Worker earns £50,000 gross → Pays £7,486 income tax + £4,964 NIC + £2,500 pension → Net pay = £35,050 → Tax wedge = 30%. The wedge affects behavior: High marginal rates → Reduced incentive to work extra hours (substitution effect) → But income effect may dominate (work more to maintain consumption). Employers also pay NICs (13.8%) on top of gross wages, widening the true wedge.',
 evaluation: 'The gross-net gap matters for labor supply, migration decisions, and tax morale. High tax wedges in Europe (40-50%) vs. US (30-35%) may explain differences in hours worked. However, gross-net comparisons ignore public services received: Scandinavian workers pay high taxes but receive healthcare, education, and childcare. The "net social wage" (net pay + public services) may narrow the gap. Progressive systems impose higher marginal rates on additional income, potentially distorting work incentives at high incomes.',
 formula: '\\text{Net Pay} = \\text{Gross Pay} - \\text{Income Tax} - \\text{NICs} - \\text{Pension} - \\text{Other}',
 realWorldExample: 'A UK worker earning £100,000 gross keeps approximately £67,000 net (33% tax wedge). At £150,000, the effective marginal rate reaches 62% (including NIC and loss of personal allowance), creating significant disincentives for additional work or pay rises.'
 },
 {
 id: 'nairu-vs-natural-rate',
 title: 'The Difference Between NAIRU and the Natural Rate of Unemployment',
 category: 'macro',
 definition: 'The Natural Rate of Unemployment (NRU) is the equilibrium unemployment rate in a perfectly functioning labor market, comprising frictional and structural unemployment. NAIRU (Non-Accelerating Inflation Rate of Unemployment) is the unemployment rate consistent with stable inflation—often used interchangeably but with subtle theoretical differences.',
 keyPoints: [
 'Natural Rate: Unemployment when labor market is in equilibrium (Friedman)',
 'NAIRU: Unemployment rate where inflation neither accelerates nor decelerates',
 'Both exclude cyclical unemployment (demand-deficient)',
 'Natural Rate is supply-side concept; NAIRU is inflation-anchored',
 'In practice, often used interchangeably but not identical'
 ],
 analysis: 'Natural Rate: Determined by structural factors (mismatch, search frictions, minimum wages) → Labor market clears at this rate → No involuntary unemployment. NAIRU: If U < NAIRU → Wage pressure → Cost-push inflation → Inflation accelerates. If U > NAIRU → Slack → Inflation decelerates. The Phillips Curve is vertical at NAIRU in the long run. The concepts converge if inflation expectations are anchored, but diverge during inflationary shocks.',
 evaluation: 'Both concepts are unobservable and must be estimated—estimates vary widely and change over time. The UK\'s NAIRU has fallen from ~8% (1980s) to ~4% (2020s), reflecting labor market reforms. But recent experience challenges the framework: unemployment fell to 3.5% (2022) without accelerating inflation, suggesting NAIRU may have fallen further or the relationship has weakened. Hysteresis effects (prolonged unemployment raises NAIRU) and globalization (wage pressure muted by international competition) complicate the simple model.',
 formula: '\\text{NAIRU}: U^* \\text{ where } \\frac{d\\pi}{dt} = 0',
 realWorldExample: 'The Fed\'s estimate of US NAIRU fell from 6% (1990s) to 4.1% (2020), reflecting declining union power and increased labor market flexibility. The UK\'s Office for Budget Responsibility estimates UK NAIRU at approximately 4.5%.'
 },
 {
 id: 'role-of-firms',
 title: 'The Role of Firms in the Economy',
 category: 'theory',
 definition: 'Firms are economic agents that combine factors of production (land, labor, capital, enterprise) to produce goods and services for sale. They transform inputs into outputs, allocate resources, provide employment, generate income, drive innovation, and create value for shareholders and society.',
 keyPoints: [
 'Production: Transform inputs into outputs (goods and services)',
 'Employment: Hire labor and pay wages (largest source of household income)',
 'Investment: Accumulate capital, driving productivity and growth',
 'Innovation: Develop new products, processes, and technologies',
 'Profit motive: Guides resource allocation toward highest-value uses'
 ],
 analysis: 'Firms observe market prices → Allocate resources to maximize profit → This aligns private incentives with social efficiency (under perfect competition) → Profitable firms attract resources; unprofitable firms release them → Dynamic reallocation raises productivity. Simultaneously: Firms pay wages → Households earn income → Households consume → Revenue returns to firms (circular flow).',
 evaluation: 'The profit motive promotes efficiency but can conflict with social welfare: externalities, market power, and short-termism distort outcomes. Stakeholder capitalism (considering employees, communities, environment) challenges shareholder primacy but raises governance questions. Different firm types (sole traders, partnerships, corporations) have different incentives and capabilities. The Coasian theory explains firm boundaries: firms internalize transactions when market coordination is too costly.',
 realWorldExample: 'Apple exemplifies multiple firm roles: employs 160,000 workers (employment), invests $20bn annually in R&D (innovation), generates $400bn revenue (production), and returns $100bn to shareholders (value creation). But criticism of tax practices, labor conditions in supply chains, and environmental impact illustrates tensions between profit and social responsibility.'
 },
 {
 id: 'third-party',
 title: 'Third Party (Externalities)',
 category: 'market-failure',
 definition: 'A third party is an individual or group not directly involved in an economic transaction but affected by its consequences. Third-party effects are externalities—costs or benefits imposed on parties outside the market exchange, causing divergence between private and social costs/benefits.',
 keyPoints: [
 'Not a buyer or seller in the transaction',
 'Bears costs (negative externality) or receives benefits (positive externality)',
 'Cannot influence the transaction terms (no market power)',
 'Existence of third-party effects → Market failure',
 'Solutions: Pigouvian taxes/subsidies, regulation, property rights (Coase)'
 ],
 analysis: 'Factory (seller) sells goods to consumer (buyer) → Production creates pollution → Local residents (third parties) suffer health costs → Residents are not compensated and have no say in production decisions → Social cost > Private cost → Too much produced → Deadweight loss. Third-party costs are external to the transaction but real to those affected.',
 evaluation: 'Third-party analysis is fundamental to market failure theory but raises measurement challenges: how to quantify health costs, amenity loss, or ecosystem damage? Who counts as affected (direct neighbors vs. global climate)? Threshold effects (noise below a level may not harm) complicate linear analysis. The Coase theorem suggests third parties could bargain with producers—but transaction costs often prevent this, justifying intervention. Network effects represent positive third-party benefits that may justify subsidies.',
 realWorldExample: 'Heathrow Airport expansion benefits airlines (sellers) and passengers (buyers) but imposes noise, pollution, and congestion on local residents (third parties). Planning processes attempt to incorporate third-party interests, but compensation is often inadequate.'
 },
 {
 id: 'tight-fiscal-policy',
 title: 'Tight Fiscal Policy',
 category: 'policy',
 definition: 'A contractionary fiscal stance where the government reduces spending (G) and/or increases taxes (T) to reduce aggregate demand, cool an overheating economy, reduce inflation, or address a budget deficit. Also known as fiscal consolidation or austerity.',
 keyPoints: [
 'Instruments: ↓ Government spending, ↑ Tax rates, ↓ Transfer payments',
 'Effect: ↓ Aggregate Demand → ↓ Inflation and/or ↓ Output',
 'Negative multiplier: ΔY = k × ΔG (k > 1, so output falls more than G cut)',
 'Used to: Control inflation, reduce deficit, restore "fiscal space"',
 'Austerity debates: Self-defeating in recession? Necessary for credibility?'
 ],
 analysis: 'Government cuts spending by £10bn → Direct ↓ AD by £10bn → Multiplier effect: Reduced incomes → ↓ Consumption → Further ↓ AD → Total ↓ Y = £10bn × 1.5 = £15bn. If economy is overheating: ↓ AD → ↓ Inflationary pressure. If economy is weak: ↓ AD → ↑ Unemployment, ↓ Growth.',
 evaluation: 'Tight fiscal policy is appropriate when the economy is overheating or when debt is unsustainably high. But timing matters: austerity during a recession (when multipliers are large and monetary policy is constrained) can be self-defeating—falling GDP reduces tax revenue, worsening the deficit. The UK\'s 2010-2015 austerity is contested: supporters credit it with restoring credibility and low borrowing costs; critics argue it prolonged the post-2008 stagnation. Distributional effects also matter—spending cuts often fall on vulnerable groups.',
 formula: '\\Delta Y = k \\times (-\\Delta G) \\quad \\text{where } k = \\frac{1}{1-MPC(1-t)+MPM}',
 realWorldExample: 'Greece implemented severe austerity (2010-2018) as a condition of EU/IMF bailouts: public sector wages cut 30%, pensions cut 40%, GDP fell 25%. Critics argue austerity caused the depression it was meant to cure; supporters argue default would have been worse.'
 },
 {
 id: 'tight-monetary-policy',
 title: 'Tight Monetary Policy',
 category: 'policy',
 definition: 'A contractionary monetary stance where the central bank raises interest rates and/or reduces money supply to reduce aggregate demand, control inflation, and cool an overheating economy. The opposite of accommodative (loose) monetary policy.',
 keyPoints: [
 'Instruments: ↑ Base interest rate, ↓ Quantitative Easing (QT), ↑ Reserve requirements',
 'Transmission: ↑ r → ↓ C (mortgages, credit) → ↓ I (cost of capital) → ↓ AD',
 'Exchange rate channel: ↑ r → Hot money inflows → ↑ Exchange rate → ↓ Net exports',
 'Time lags: 12-24 months for full effect on inflation',
 'Pain before gain: Output and employment fall before inflation drops'
 ],
 analysis: 'Central bank raises base rate from 0.5% to 5% → Mortgage costs rise → Households ↓ consumption → Business borrowing costs rise → Firms ↓ investment → AD shifts left → Inflationary pressure eases. Simultaneously: Higher rates attract foreign capital → Currency appreciates → Imports cheaper, exports dearer → Net exports fall → Further ↓ AD. But: Employment falls during adjustment period.',
 evaluation: 'Tight monetary policy is the primary tool against inflation, but it operates with long and variable lags. The 2022-23 rate hikes (UK: 0.1% to 5.25%) took 18+ months to affect inflation. Distributional effects: Mortgage holders and debtors suffer; savers benefit. Asset prices fall, potentially causing financial instability (SVB collapse, UK pension crisis). The optimal speed of tightening balances inflation control against recession risk and financial stability.',
 formula: '\\Delta r \\to \\Delta C/I \\to \\Delta AD \\to \\Delta Y/P \\quad \\text{(with 12-24 month lags)}',
 realWorldExample: 'The Bank of England raised rates 14 consecutive times (Dec 2021 - Aug 2023), from 0.1% to 5.25%, to combat 11% inflation. By late 2023, inflation fell to 4%—but mortgage costs tripled, housing transactions collapsed, and recession risks rose.'
 },
 {
 id: 'time-lags',
 title: 'Time Lags in Economic Policy',
 category: 'policy',
 definition: 'The delays between an economic shock, the recognition of the problem, the implementation of policy, and the policy\'s effect on the economy. Time lags complicate macroeconomic management and can cause policies to be destabilizing rather than stabilizing.',
 keyPoints: [
 'Recognition lag: Time to identify the problem (data collection, analysis)',
 'Decision lag: Time for policymakers to agree on response (political process)',
 'Implementation lag: Time to enact the policy (legislation, execution)',
 'Impact lag: Time for policy to affect economy (transmission mechanisms)',
 'Monetary policy: Short decision lag, long impact lag (12-24 months)',
 'Fiscal policy: Long decision lag, shorter impact lag'
 ],
 analysis: 'Recession begins (January) → Data shows contraction (April: recognition lag) → Government debates response (May-July: decision lag) → Spending program announced (August: implementation lag) → Contracts signed, spending begins (October-December) → Multiplier effects work through economy (next year: impact lag). By the time policy affects output, the economy may have recovered—stimulus then causes overheating.',
 evaluation: 'Time lags are why "fine-tuning" the economy is difficult. Policies designed for today\'s problems may hit an economy that has already changed. Rules-based policy (inflation targets, fiscal rules) reduces decision lags but sacrifices flexibility. Automatic stabilizers (progressive taxes, welfare) work immediately but may be insufficient for large shocks. Forward-looking policy (responding to forecasts) risks acting on incorrect predictions. The case for policy restraint rests partly on time lag uncertainty.',
 realWorldExample: 'The 2009 fiscal stimulus in the UK (VAT cut, car scrappage) was designed to fight recession but largely took effect as recovery was underway. Similarly, 2022-23 rate hikes targeted 2021-22 inflation—by the time they bite fully, supply-side inflation may have faded naturally.'
 },
 {
 id: 'time-value-of-money',
 title: 'Time Value of Money Explained',
 category: 'macro',
 definition: 'The principle that money available today is worth more than the same amount in the future due to its potential earning capacity. This fundamental concept underlies interest rates, discounting, investment appraisal, and financial valuation. A pound today can be invested to earn interest, making it more valuable than a pound received later.',
 keyPoints: [
 'Present Value (PV): Today\'s value of a future sum',
 'Future Value (FV): Value of today\'s sum at a future date',
 'Discount rate (r): The rate used to convert future to present value',
 'Opportunity cost: Money today can earn returns; money later cannot',
 'Foundation of NPV, IRR, bond pricing, and financial decision-making'
 ],
 analysis: '£100 today invested at 5% → £105 in one year → £100 today = £105 next year. Therefore: £100 received next year is worth £100/1.05 = £95.24 today (present value). Higher discount rates → Lower present values → Future cash flows less valuable. Investment decisions: NPV = Σ PV(cash flows) − Initial cost. If NPV > 0, investment creates value.',
 evaluation: 'The time value of money is theoretically sound but raises practical issues. The "correct" discount rate is contested: risk-free rate, WACC, or social discount rate? Long-term projects (infrastructure, climate) are highly sensitive to discount rate choice—small changes dramatically affect NPV. Behavioral economics shows people are time-inconsistent: hyperbolic discounting means we discount near-future more than theory predicts. This affects savings, health decisions, and climate policy.',
 formula: 'FV = PV \\times (1 + r)^n; \\quad PV = \\frac{FV}{(1 + r)^n}; \\quad NPV = \\sum_{t=0}^{n} \\frac{CF_t}{(1+r)^t}',
 realWorldExample: 'Climate change economics hinges on discount rates. The Stern Review (2006) used 1.4% discount rate → Climate action urgently needed (high PV of future damages). Nordhaus used 4.5% → Less urgency (low PV of distant damages). Same future damages, radically different policy conclusions.'
 },
 {
 id: 'token-money',
 title: 'Token Money',
 category: 'macro',
 definition: 'Money whose face value exceeds its intrinsic value as a commodity. Unlike commodity money (gold coins worth their metal content), token money has value because of trust in the issuer and its acceptability in exchange. Modern fiat currency and bank deposits are forms of token money.',
 keyPoints: [
 'Face value > Intrinsic value (paper, base metal coins)',
 'Value derived from: Legal tender status, acceptability, trust in issuer',
 'Fiat money: Declared legal tender by government decree',
 'Seigniorage: Profit from issuing token money (face value − production cost)',
 'Risk: Loss of confidence → Currency collapse (hyperinflation)'
 ],
 analysis: 'Government prints £10 note (cost: 3p) → Declares it legal tender → Public accepts it for £10 of goods → Value derives from collective acceptance and legal backing, not paper content. Seigniorage = £10 − £0.03 = £9.97 profit. If government overissues → Inflation → Public loses confidence → Demand for money falls → Velocity increases → Price spiral → Potential currency collapse.',
 evaluation: 'Token money enables flexible monetary policy (can expand money supply for stabilization) but requires institutional credibility. Independent central banks, inflation targets, and fiscal discipline maintain confidence. Historical failures (Continental currency, assignats, Zimbabwe dollar) show the fragility of unbacked money. Cryptocurrency proponents argue token money is fundamentally unsound; defenders note fiat currencies have successfully functioned for 50+ years since gold standard\'s end.',
 formula: '\\text{Seigniorage} = \\text{Face Value} - \\text{Production Cost}',
 realWorldExample: 'UK coins (except pre-1992 coppers) are token money—a £2 coin contains metals worth ~6p. The Bank of England issues polymer notes costing 7p each. The entire UK money supply (M4: £3 trillion) is token money backed only by institutional credibility.'
 },
 {
 id: 'total-utility',
 title: 'Total Utility',
 category: 'theory',
 definition: 'The total satisfaction or benefit derived from consuming a given quantity of a good or service. Total utility increases with consumption but at a decreasing rate (diminishing marginal utility). It is maximized when the consumer allocates income such that marginal utility per pound is equalized across all goods.',
 keyPoints: [
 'TU = Sum of marginal utilities from each unit consumed',
 'Increases with consumption (more is better, up to satiation)',
 'Increases at decreasing rate (diminishing marginal utility)',
 'Maximized when MU/P equal across all goods (equimarginal principle)',
 'Cardinal vs. ordinal utility: TU assumes measurable satisfaction'
 ],
 analysis: '1st slice of pizza: MU = 10 → TU = 10. 2nd slice: MU = 8 → TU = 18. 3rd slice: MU = 5 → TU = 23. 4th slice: MU = 2 → TU = 25. 5th slice: MU = 0 → TU = 25 (satiation). 6th slice: MU = −3 → TU = 22 (overindulgence). Consumer stops where MU = 0 if good is free; where MU = P if paying.',
 evaluation: 'Total utility is a useful pedagogical concept but raises measurement issues. Cardinal utility (assigning numerical satisfaction levels) is philosophically contested—can we really measure and compare happiness? Ordinal utility (ranking preferences) avoids this but limits analysis. Behavioral economics shows preferences are context-dependent, violating stable utility assumptions. Despite limitations, utility theory provides the foundation for demand curves, consumer surplus, and welfare analysis.',
 formula: 'TU = \\sum_{i=1}^{n} MU_i; \\quad \\text{Max TU when } \\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} \\text{ for all goods}',
 realWorldExample: 'Buffet restaurants exploit diminishing marginal utility: customers overestimate value before eating (high expected TU) but experience rapid MU decline → Perceived "deal" but actual consumption limited by satiation. The fixed price captures consumer surplus from early high-MU units.'
 },
 {
 id: 'trade-barriers',
 title: 'Trade Barriers',
 category: 'trade',
 definition: 'Government-imposed restrictions on the free exchange of goods and services between countries. Trade barriers include tariffs (taxes on imports), quotas (quantity limits), subsidies to domestic producers, and non-tariff barriers (regulations, standards, bureaucratic delays). They protect domestic industries but reduce global efficiency.',
 keyPoints: [
 'Tariffs: Taxes on imports (raise price, generate revenue)',
 'Quotas: Quantity limits (create scarcity rent for quota holders)',
 'Subsidies: Payments to domestic producers (lower their costs artificially)',
 'Non-tariff barriers: Regulations, standards, licensing, customs delays',
 'Effects: ↓ Imports, ↑ Domestic production, ↑ Prices, ↓ Consumer surplus'
 ],
 analysis: 'Tariff imposed on imported steel → Domestic price rises above world price → Consumers pay more → Domestic producers gain (protected from competition) → Government gains tariff revenue → But deadweight loss created (allocative inefficiency). Total welfare typically falls, though distribution changes (consumers lose, producers and government gain).',
 evaluation: 'Trade barriers are economically inefficient but politically attractive. They protect visible domestic jobs at the expense of diffuse consumer costs. Infant industry arguments have theoretical merit but are prone to capture by mature industries. Retaliation risks spiral into trade wars (Smoot-Hawley 1930). Modern protectionism emphasizes non-tariff barriers (harder to measure and challenge). WTO rules constrain but don\'t eliminate barriers. The optimal policy is usually targeted support for adjustment (retraining, relocation) rather than protection.',
 formula: 'DWL_{tariff} = \\frac{1}{2} \\times t \\times (Q_1 - Q_2) + \\frac{1}{2} \\times t \\times (Q_4 - Q_3)',
 realWorldExample: 'The US-China trade war (2018-2021) saw average US tariffs on Chinese goods rise from 3% to 19%. Studies found American consumers bore 90%+ of tariff costs through higher prices. Retaliatory Chinese tariffs hit US farmers, requiring $28bn in government subsidies.'
 },
 {
 id: 'trade-creation',
 title: 'Trade Creation',
 category: 'trade',
 definition: 'An economic benefit of customs unions and free trade areas where member countries shift from high-cost domestic production to lower-cost imports from partner countries. Trade creation increases economic efficiency by allowing specialization according to comparative advantage within the bloc.',
 keyPoints: [
 'Occurs when tariff removal enables cheaper partner imports',
 'Replaces inefficient domestic production with efficient partner production',
 'Increases allocative efficiency within the trading bloc',
 'Consumer surplus rises (lower prices); producer surplus falls (more competition)',
 'Net welfare gain if trade creation > trade diversion'
 ],
 analysis: 'Before customs union: UK produces widgets at £10; France at £8 (but £8 + £3 tariff = £11 to UK buyers) → UK buys domestic. After union: Tariff removed → UK imports from France at £8 → UK consumers gain £2 per widget → UK resources freed for goods where UK has comparative advantage → Both countries gain from specialization.',
 evaluation: 'Trade creation is unambiguously welfare-improving—it represents gains from trade. The magnitude depends on: (1) cost differences between members, (2) elasticity of demand/supply, (3) initial tariff levels. Large, diverse blocs with high initial tariffs see more trade creation. However, trade creation must be weighed against trade diversion to assess overall customs union welfare effect. Dynamic effects (competition, innovation, economies of scale) may exceed static trade creation gains.',
 formula: '\\Delta W_{creation} = \\frac{1}{2} \\times \\Delta P \\times \\Delta Q \\quad \\text{(Consumer surplus gain)}',
 realWorldExample: 'EU membership enabled UK consumers to access French wine, German cars, and Spanish produce at lower prices than domestic alternatives. Post-Brexit tariffs and non-tariff barriers reversed some trade creation, raising consumer prices.'
 },
 {
 id: 'trade-diversion',
 title: 'Trade Diversion',
 category: 'trade',
 definition: 'An economic cost of customs unions where member countries shift imports from efficient non-member producers to less efficient member producers. Trade diversion occurs because the common external tariff makes member products artificially cheaper than superior non-member alternatives.',
 keyPoints: [
 'Shift from low-cost non-member to higher-cost member supplier',
 'Caused by preferential tariff treatment for members',
 'Reduces global efficiency (resources misallocated)',
 'Loss of tariff revenue on diverted imports',
 'Net welfare effect of customs union: Trade creation − Trade diversion'
 ],
 analysis: 'Before customs union: UK imports textiles from Bangladesh (£5) with £2 tariff = £7. After joining EU customs union: EU textiles cost £6 (no tariff), Bangladesh still £5 + £2 = £7. UK switches to EU imports (£6 < £7). But true cost: UK now pays £6 vs. £5 before (ignoring tariff). Global efficiency falls—resources in EU textiles could produce more value elsewhere. Plus: UK loses £2 tariff revenue.',
 evaluation: 'Trade diversion is a real cost of preferential trade agreements. It matters most when: (1) non-members are significantly more efficient, (2) common external tariff is high, (3) member countries\' costs are similar. The EU\'s Common Agricultural Policy created substantial trade diversion—European consumers paid above-world prices while efficient non-EU farmers were excluded. Viner\'s analysis (1950) showed customs unions are not necessarily welfare-improving; the net effect depends on creation vs. diversion balance.',
 formula: '\\Delta W_{diversion} = (P_{member} - P_{world}) \\times Q_{diverted} + \\text{Lost tariff revenue}',
 realWorldExample: 'EU sugar policy diverts imports from low-cost producers (Brazil, Thailand) to higher-cost EU beet farmers. UK consumers paid 2-3x world sugar prices. Post-Brexit, UK can negotiate FTAs with efficient sugar producers, reversing diversion.'
 },
 {
 id: 'trade-liberalisation',
 title: 'Trade Liberalisation',
 category: 'trade',
 definition: 'The reduction or elimination of trade barriers (tariffs, quotas, regulations) to allow freer movement of goods and services between countries. Trade liberalization is promoted by the WTO and implemented through multilateral agreements (GATT rounds), regional blocs (EU, USMCA), and bilateral FTAs.',
 keyPoints: [
 'Multilateral (WTO), regional (customs unions, FTAs), bilateral approaches',
 'Benefits: Lower prices, greater variety, competition, specialization gains',
 'Costs: Adjustment costs for displaced workers/industries, inequality',
 'GATT/WTO rounds reduced average tariffs from 40% (1947) to 4% (2020)',
 'Backlash: Populist movements, Trump tariffs, Brexit'
 ],
 analysis: 'Tariffs reduced → Import prices fall → Consumers gain (lower prices, more choice) → Inefficient domestic producers face competition → Resources reallocate to sectors of comparative advantage → Productivity rises → Long-run GDP gains. But: Short-run adjustment costs—displaced workers, stranded capital, regional decline. Winners (consumers, exporters) are diffuse; losers (protected industries) are concentrated and politically vocal.',
 evaluation: 'Trade liberalization has generated enormous gains—the post-1945 trade expansion contributed to unprecedented global growth. But gains are unevenly distributed: capital and skilled labor benefit more than unskilled labor; coastal cities more than industrial heartlands. Failure to compensate losers has fueled political backlash (Brexit, Trump). The case for liberalization remains strong, but must be paired with adjustment assistance, retraining, and redistribution. The "China shock" literature shows localized trade costs can be severe and persistent.',
 realWorldExample: 'China\'s WTO accession (2001) accelerated trade liberalization. US consumers gained $260,000 per job lost to import competition—but gains were spread across 300 million consumers while losses concentrated in manufacturing towns. This asymmetry drove the 2016 political backlash.'
 },
 {
 id: 'trade-not-aid',
 title: 'Trade Not Aid',
 category: 'trade',
 definition: 'An approach to international development arguing that enabling developing countries to trade freely is more effective than providing foreign aid. The argument emphasizes that trade creates sustainable income, employment, and growth, while aid creates dependency and distorts markets.',
 keyPoints: [
 'Trade generates income, employment, and self-sustaining growth',
 'Aid can create dependency, distort markets, and fund corruption',
 'Developed country protectionism (agriculture, textiles) harms LDC exporters',
 'Fair trade vs. free trade: Ensuring LDC farmers capture value',
 'Critiques: LDCs may lack capacity to compete; trade alone insufficient'
 ],
 analysis: 'Developed countries provide $150bn aid annually → But agricultural subsidies ($300bn) exclude LDC farmers from markets → Each $1 in aid offset by $2 in lost exports. Trade-focused approach: Remove barriers → LDCs export where they have comparative advantage (agriculture, textiles) → Export revenue finances development → Sustainable growth without dependency.',
 evaluation: 'The trade-not-aid argument has merit but oversimplifies. Trade is necessary but not sufficient for development—complementary investments in infrastructure, education, and institutions are needed. Many LDCs lack the productive capacity or infrastructure to exploit market access. Aid can build this capacity if well-designed. The choice is not binary: trade access + targeted aid for capacity building is optimal. Fair trade initiatives address power imbalances but reach only a fraction of producers.',
 realWorldExample: 'Bangladesh\'s garment industry illustrates trade-based development: exports grew from $32m (1984) to $40bn (2023), employing 4 million workers and driving poverty reduction. This vastly exceeded aid flows. But labor conditions and factory safety (Rana Plaza 2013) show trade alone doesn\'t guarantee good development.'
 },
 {
 id: 'trade-sanctions',
 title: 'Trade Sanctions',
 category: 'trade',
 definition: 'Economic penalties imposed by one or more countries on a target country, typically to achieve political objectives. Sanctions include trade embargoes, asset freezes, financial restrictions, and targeted measures against individuals. They aim to impose economic costs that force policy changes without military action.',
 keyPoints: [
 'Trade embargoes: Banning imports/exports with target country',
 'Financial sanctions: Freezing assets, blocking banking access (SWIFT)',
 'Targeted sanctions: Against specific individuals/entities (oligarchs)',
 'Goals: Deter aggression, punish behavior, force policy change',
 'Effectiveness debated: Often hurt populations more than regimes'
 ],
 analysis: 'Sanctions imposed → Target country\'s exports blocked → Export revenue falls → Currency depreciates → Imports become expensive → Living standards fall → (Theory) Public pressure forces regime change. But: Regime diverts resources from population to maintain power; alternative trading partners emerge; sanctions create rally-around-flag effect.',
 evaluation: 'Sanctions are politically attractive (action without war) but empirically mixed. Comprehensive embargoes (Cuba, North Korea) failed to change regimes for decades. Targeted sanctions (Russia 2022) impose costs but haven\'t reversed invasion. Humanitarian costs (Iraq 1990s, Venezuela) raise ethical concerns. Sanctions work best when: (1) target is economically dependent on sanctioners, (2) costs are concentrated on elites, (3) credible path to sanctions relief exists. They are most effective as part of broader diplomatic strategy.',
 formula: '\\text{Effectiveness} = f(\\text{Economic Integration, Regime Type, Coalition Unity, Clarity of Demands})',
 realWorldExample: 'Western sanctions on Russia (2022-) froze $300bn in reserves, banned exports, and excluded major banks from SWIFT. Russia\'s GDP fell 2.1% (2022), less than predicted. Oil revenues continued via India/China. The sanctions impose costs but haven\'t changed policy—illustrating the limits of economic pressure against determined regimes.'
 },
 {
 id: 'trade-weighted-index',
 title: 'Trade Weighted Index (Effective Exchange Rate)',
 category: 'trade',
 definition: 'A measure of a country\'s currency value against a basket of currencies of its major trading partners, weighted by the share of trade with each partner. Unlike bilateral rates, the trade-weighted index (TWI) captures overall competitiveness and the economy-wide impact of exchange rate movements.',
 keyPoints: [
 'Basket of currencies weighted by trade shares',
 'Captures overall competitiveness, not just bilateral rates',
 'Real Effective Exchange Rate (REER) adjusts for relative price levels',
 'Rising TWI = Appreciation (less competitive); Falling TWI = Depreciation',
 'Central banks and policymakers monitor TWI for policy decisions'
 ],
 analysis: '£ rises 10% vs. € (eurozone = 50% UK trade) → Bilateral appreciation significant. £ falls 20% vs. $ (US = 10% UK trade) → Bilateral depreciation. Net TWI effect: (0.5 × 10%) + (0.1 × −20%) = 3% appreciation. The TWI captures the weighted average, reflecting true competitiveness change better than any single bilateral rate.',
 evaluation: 'The TWI is more economically meaningful than bilateral rates but has limitations: (1) Trade weights are backward-looking and change slowly, (2) Weights don\'t capture competition in third markets (UK competes with Germany for US sales), (3) Services trade increasingly matters but is harder to weight. REER is more accurate for competitiveness analysis but requires comparable price data. For the UK, the eurozone dominance (50%+ weight) means £/€ drives the TWI.',
 formula: 'TWI = \\prod_i \\left(\\frac{e_i}{e_{i,base}}\\right)^{w_i} \\times 100 \\quad \\text{where } \\sum w_i = 1',
 realWorldExample: 'The UK\'s TWI fell 25% after the Brexit referendum (2016), making UK exports more competitive globally. The BoE monitors the TWI to assess imported inflation and overall competitiveness—a key input to monetary policy decisions.'
 },
 {
 id: 'trading-blocs',
 title: 'Trading Blocs – Pros and Cons',
 category: 'trade',
 definition: 'A group of countries that agree to reduce or eliminate trade barriers among members while maintaining barriers against non-members. Trading blocs range from Free Trade Areas (FTAs) to Customs Unions, Common Markets, and full Economic Unions. Examples include the EU, USMCA, ASEAN, and Mercosur.',
 keyPoints: [
 'Types: FTA (no internal tariffs), Customs Union (+common external tariff), Common Market (+factor mobility), Economic Union (+policy harmonization)',
 'Pros: Trade creation, economies of scale, bargaining power, political integration',
 'Cons: Trade diversion, loss of sovereignty, external exclusion, regulatory burden',
 'Deepening vs. widening trade-off (EU expansion vs. integration)',
 'Regionalism vs. multilateralism (WTO) debate'
 ],
 analysis: 'Formation of bloc → Internal tariffs removed → Trade creation (efficient member production replaces domestic) → But common external tariff may cause trade diversion (inefficient member replaces efficient non-member). Larger market → Economies of scale → Lower costs. Collective bargaining with third parties (EU can negotiate better terms than Luxembourg alone). Political spillover → Deeper integration over time.',
 evaluation: 'Trading blocs can be welfare-improving (if trade creation dominates) or welfare-reducing (if trade diversion dominates). The EU represents the deepest integration but also the greatest sovereignty loss and regulatory complexity. NAFTA/USMCA shows deep integration possible without political union. Trading blocs may undermine multilateral liberalization (WTO Doha Round stalled partly due to regional alternatives). The optimal bloc balances internal gains against external exclusion costs.',
 realWorldExample: 'The EU single market (1992) created the world\'s largest integrated economy. Benefits: Intra-EU trade doubled; cross-border supply chains; labor mobility. Costs: Regulatory harmonization burdens small firms; loss of independent trade policy; political tensions over sovereignty (Brexit).'
 },
 {
 id: 'trading-possibility-frontier',
 title: 'Trading Possibility Frontier (Consumption Possibility Frontier)',
 category: 'trade',
 definition: 'A curve showing the combinations of goods a country can consume after specializing according to comparative advantage and trading at the world price ratio. Unlike the production possibility frontier (PPF), which shows production options, the trading possibility frontier shows consumption options—which exceed the PPF when trade is possible.',
 keyPoints: [
 'PPF: Maximum production combinations given resources',
 'TPF/CPF: Maximum consumption combinations given trade opportunity',
 'TPF lies outside PPF → Trade enables consumption beyond production',
 'Slope of TPF = World price ratio (terms of trade)',
 'Gains from trade: Gap between TPF and PPF'
 ],
 analysis: 'Country specializes in good X (comparative advantage) → Produces on PPF at specialization point → Trades X for Y at world prices → Consumption point lies outside PPF, on TPF. The steeper the world price ratio (favorable terms of trade), the further TPF lies from PPF. Maximum gains when country can fully specialize and trade at favorable terms.',
 evaluation: 'The TPF elegantly illustrates gains from trade: consuming beyond what you can produce. But the model assumes: (1) Constant costs or clear comparative advantage, (2) No transport costs, (3) Flexible resource reallocation. In practice, adjustment costs, incomplete specialization, and transport costs reduce gains. The terms of trade determine distribution of gains—developing countries with inelastic export demand may see gains captured by trading partners. Still, the core insight holds: trade expands consumption possibilities.',
 formula: 'TPF: C_Y = \\frac{P_X}{P_Y} \\times (Q_X - C_X) \\quad \\text{(Trading from production point)}',
 realWorldExample: 'Oil-exporting countries (Saudi Arabia) have PPFs heavily weighted toward oil. By trading oil at world prices, they consume far more manufactured goods than domestic production could ever provide. Their TPF lies dramatically outside their PPF.'
 },
 {
 id: 'traditional-theory-of-firm',
 title: 'Traditional Theory of the Firm',
 category: 'theory',
 definition: 'The neoclassical model of firm behavior assuming that firms are rational profit maximizers operating in competitive markets. The firm produces where marginal cost equals marginal revenue (MC=MR) to maximize the difference between total revenue and total cost. This model underlies microeconomic analysis of markets.',
 keyPoints: [
 'Single objective: Profit maximization (π = TR − TC)',
 'Decision rule: Produce where MR = MC',
 'Perfect information about costs, revenues, and market conditions',
 'Entrepreneur makes all decisions (no principal-agent problems)',
 'Short run: At least one factor fixed; Long run: All factors variable'
 ],
 analysis: 'Firm identifies demand curve → Calculates MR (∂TR/∂Q) → Calculates MC (∂TC/∂Q) → Produces quantity where MR = MC → Prices according to demand curve → Profit = (P − ATC) × Q. In competitive market: P = MR = MC. In monopoly: P > MR = MC (markup over marginal cost).',
 evaluation: 'The traditional theory is elegant but unrealistic. Modern firms face: (1) Uncertainty—future costs and revenues unknown, (2) Principal-agent problems—managers may pursue different goals than owners (growth, prestige, quiet life), (3) Bounded rationality—limited information processing capacity, (4) Stakeholder pressures—not just shareholders. Alternative theories: Sales revenue maximization (Baumol), Growth maximization (Marris), Managerial utility (Williamson), Satisficing (Simon). Despite limitations, MR=MC remains the benchmark for understanding pricing and output decisions.',
 formula: '\\max_{Q} \\pi = TR(Q) - TC(Q); \\quad \\frac{d\\pi}{dQ} = MR - MC = 0 \\implies MR = MC',
 realWorldExample: 'Oil companies illustrate MC=MR reasoning: they compare extraction costs (MC) against oil prices (MR) to decide which wells to operate. When prices fall below MC, marginal wells are shut. But non-profit motives (market share, reserves replacement) also influence decisions.'
 },
 {
 id: 'transaction-costs',
 title: 'Transaction Costs',
 category: 'theory',
 definition: 'The costs of making an economic exchange beyond the price of the good itself, including search costs, negotiation costs, contracting costs, monitoring costs, and enforcement costs. Transaction costs explain why markets sometimes fail and why firms exist—to economize on transaction costs that would be incurred through market exchange.',
 keyPoints: [
 'Search costs: Finding trading partners, comparing options',
 'Negotiation costs: Bargaining over terms',
 'Contracting costs: Drawing up and documenting agreements',
 'Monitoring costs: Ensuring compliance with agreements',
 'Enforcement costs: Resolving disputes, legal action',
 'Coase: Firms exist to minimize transaction costs vs. market exchange'
 ],
 analysis: 'Firm needs component → Option A: Buy on market (search suppliers, negotiate price, write contract, monitor quality, enforce warranty) → Transaction costs = £10. Option B: Make in-house (no market transaction but management/coordination costs) → Internal costs = £8. If internal costs < transaction costs → Firm integrates (vertical integration). If transaction costs < internal costs → Firm uses market.',
 evaluation: 'Transaction cost economics (Coase, Williamson) explains firm boundaries, vertical integration, and institutional evolution. High transaction costs → More integration. But transaction costs are hard to measure and sometimes invoked to explain any observed arrangement (circular reasoning). The theory assumes firms minimize costs but ignores power, history, and path dependence. Digital platforms have dramatically reduced many transaction costs (search, matching), enabling new market-based coordination (gig economy, peer-to-peer).',
 formula: '\\text{Total Cost} = \\text{Production Cost} + \\text{Transaction Cost}',
 realWorldExample: 'Uber reduced transaction costs in taxi markets: search (app finds drivers), trust (ratings substitute for knowledge), payment (automatic, no cash). This enabled market coordination that previously required firm organization (taxi fleets) or high friction (street hailing).'
 },
 {
 id: 'types-of-takeovers',
 title: 'Types of Takeovers',
 category: 'theory',
 definition: 'A takeover (acquisition) is when one company purchases controlling interest in another. Takeovers are classified by the relationship between acquirer and target: horizontal (same industry), vertical (supply chain), conglomerate (unrelated), and by the attitude of the target: friendly (agreed) or hostile (resisted).',
 keyPoints: [
 'Horizontal: Same industry competitors (economies of scale, market power)',
 'Vertical: Supply chain integration (backward = suppliers; forward = distributors)',
 'Conglomerate: Unrelated businesses (diversification, financial engineering)',
 'Friendly: Target board recommends; Hostile: Target board resists',
 'Motives: Synergies, market power, empire building, asset stripping'
 ],
 analysis: 'Horizontal: Firm A acquires rival B → Combined firm has economies of scale (↓ ATC) and ↑ market power (↑ prices) → Efficiency gains may be offset by reduced competition. Vertical: Manufacturer acquires supplier → Secures input supply, eliminates double marginalization → But reduces market access for competing manufacturers. Conglomerate: Firm acquires unrelated business → Diversification reduces risk but may destroy value if no synergies.',
 evaluation: 'Takeovers can create or destroy value. Synergies (cost savings, revenue enhancement) justify acquisitions if greater than premium paid. But evidence shows acquirers often overpay: winner\'s curse, managerial hubris, empire-building incentives. Target shareholders gain (premium); acquirer shareholders often lose. Competition authorities scrutinize horizontal takeovers for anti-competitive effects. Private equity takeovers raise concerns about asset stripping and employment. The market for corporate control can discipline inefficient management but also encourages short-termism.',
 formula: '\\text{Acquisition Premium} = \\frac{\\text{Offer Price} - \\text{Pre-announcement Price}}{\\text{Pre-announcement Price}}',
 realWorldExample: 'Facebook\'s acquisition of Instagram (2012, $1bn) and WhatsApp (2014, $19bn) were horizontal takeovers eliminating potential competitors and gaining network effects. The FTC later sued to unwind them as anti-competitive—illustrating the market power concerns with horizontal consolidation.'
 },
 {
 id: 'utility-maximisation',
 title: 'Utility Maximisation',
 category: 'theory',
 definition: 'The principle that rational consumers allocate their limited income to maximize total satisfaction (utility) from consumption. Utility is maximized when the marginal utility per pound spent is equal across all goods purchased—the equimarginal principle. This underlies the derivation of demand curves.',
 keyPoints: [
 'Consumer objective: Maximize utility subject to budget constraint',
 'Equimarginal principle: MUₓ/Pₓ = MUᵧ/Pᵧ for all goods',
 'If MUₓ/Pₓ > MUᵧ/Pᵧ → Buy more X, less Y (until equality restored)',
 'Diminishing marginal utility ensures equilibrium exists',
 'Cardinal utility (measurable) vs. ordinal utility (rankings only)'
 ],
 analysis: 'Consumer has £100 budget, can buy apples (£2) or bananas (£1). Initially: MUₐ = 20, MU_b = 8 → MUₐ/Pₐ = 10, MU_b/P_b = 8 → Buy more apples. After more apples: MUₐ falls to 16 → MUₐ/Pₐ = 8 = MU_b/P_b → Equilibrium. Consumer cannot increase utility by reallocating between goods.',
 evaluation: 'Utility maximization is theoretically elegant but behaviorally unrealistic. Consumers exhibit bounded rationality, inconsistent preferences, status quo bias, and framing effects. The cardinal utility assumption (measurable satisfaction) is philosophically contested. Modern consumer theory uses ordinal utility (preference rankings) and indifference curves, avoiding interpersonal utility comparisons. Despite limitations, the equimarginal principle provides intuition for how consumers respond to price changes (substitution effect) and underlies demand curve derivation.',
 formula: '\\max U(X, Y) \\text{ s.t. } P_X \\cdot X + P_Y \\cdot Y = M; \\quad \\text{Solution: } \\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}',
 realWorldExample: 'Subscription services (Netflix, Spotify) price to equate marginal utility across consumer segments. £10.99/month is calibrated so that MU/P for entertainment equals that of alternatives—maximizing subscribers while capturing willingness to pay.'
 },
 {
 id: 'variable-costs',
 title: 'Variable Costs',
 category: 'theory',
 definition: 'Costs that change in proportion to the level of output produced. Variable costs include raw materials, direct labor (hourly wages), energy, and packaging. Unlike fixed costs, variable costs are zero when output is zero and increase as production rises. Total cost = Fixed costs + Variable costs.',
 keyPoints: [
 'Change with output level (TVC = f(Q))',
 'Zero when Q = 0; increase as Q rises',
 'Examples: Raw materials, piece-rate labor, energy, shipping',
 'Average Variable Cost (AVC) = TVC/Q',
 'Marginal Cost often reflects variable cost changes (MC = ΔTVC/ΔQ)'
 ],
 analysis: 'Bakery produces bread: Flour (£0.50/loaf), labor (£0.30/loaf), energy (£0.10/loaf) → TVC = £0.90 × Q. If Q = 100, TVC = £90. If Q = 200, TVC = £180. Fixed costs (rent, equipment) unchanged. In short run, firm covers variable costs first—if P > AVC, producing reduces losses. Shutdown point: P = AVC.',
 evaluation: 'The fixed/variable distinction is clearer in theory than practice. Some costs are "semi-variable" (electricity has fixed and variable components). Labor may be fixed in short run (contracts, firing costs) but variable in long run. Digital products have near-zero variable costs after development—the economics of software differs fundamentally from manufacturing. High variable cost industries (commodities) have thin margins; low variable cost industries (digital) have potentially enormous margins at scale.',
 formula: 'TC = TFC + TVC; \\quad AVC = \\frac{TVC}{Q}; \\quad MC = \\frac{dTVC}{dQ}',
 realWorldExample: 'Airlines have high fixed costs (aircraft, slots) and moderate variable costs (fuel, crew per flight). During COVID, planes were grounded—fixed costs continued but variable costs fell to near zero. Low-cost carriers like Ryanair have lower fixed costs per seat, enabling lower prices and higher utilization.'
 },
 {
 id: 'vulture-capitalism',
 title: 'Vulture Capitalism',
 category: 'macro',
 definition: 'A pejorative term for aggressive private equity or distressed debt investment strategies that seek profit from struggling companies or assets. Vulture capitalism involves buying distressed debt at deep discounts, acquiring companies for asset stripping, or imposing cost cuts that may harm employees and communities.',
 keyPoints: [
 'Distressed debt investing: Buy bonds at pennies on the dollar, demand full repayment',
 'Asset stripping: Acquire company, sell valuable assets, discard remainder',
 'Leveraged buyouts: Load company with debt, extract dividends, leave weakened',
 'Critics: Destroys jobs, communities, long-term value for short-term gain',
 'Defenders: Reallocates resources from failing firms, provides liquidity'
 ],
 analysis: 'Private equity acquires struggling retailer (£100m debt-financed) → Sells property portfolio (£60m) → Pays special dividend (£40m) → Cuts staff and investment → Retailer weakens further → Eventually collapses → PE firm extracted £100m while destroying jobs. Alternatively: PE firm turns around company, improves efficiency, creates value—same techniques, different outcome.',
 evaluation: 'Vulture capitalism exists on a spectrum from legitimate distressed investing to value destruction. Buying distressed debt at discounts provides liquidity to markets and imposes market discipline on debtors (including sovereigns). But aggressive tactics can destroy going-concern value, harm employees, and socialize costs while privatizing gains. Regulatory responses: Tighter LBO rules, longer holding period requirements, greater transparency. The challenge is distinguishing productive restructuring from extraction.',
 realWorldExample: 'Debenhams (UK department store) collapsed after private equity ownership loaded it with debt, extracted property value via sale-leaseback, and left it unable to invest. 12,000 jobs lost. Similarly, Toys "R" Us collapsed under PE debt burden. These cases fuel criticism of vulture capitalism, though defenders argue the underlying businesses were already failing.'
 },
 {
 id: 'wage-price-spiral',
 title: 'Wage-Price Spiral',
 category: 'macro',
 definition: 'A self-reinforcing cycle where rising wages lead to higher production costs, causing firms to raise prices, which in turn leads workers to demand higher wages to maintain real purchasing power. The spiral can embed inflation expectations and make inflation persistent, requiring aggressive monetary policy to break.',
 keyPoints: [
 'Wage ↑ → Costs ↑ → Prices ↑ → Real wages fall → Wage demands ↑ → Repeat',
 'Inflation expectations become embedded (adaptive expectations)',
 'Second-round effects: Initial shock propagates through economy',
 'Breaking the spiral requires credible disinflation (recession)',
 '1970s stagflation driven partly by wage-price spirals'
 ],
 analysis: 'Oil shock → Energy costs rise 50% → Firms raise prices → Workers see 10% inflation → Unions demand 10% wage increase → Labor costs rise → Firms raise prices again → Inflation persists at 10% even after oil shock fades. Each round: Wages chase prices, prices incorporate wages → Spiral embeds expected inflation into contracts.',
 evaluation: 'Wage-price spirals require institutional features that sustain them: powerful unions, indexed contracts, backward-looking wage setting. Declining union density and globalized labor markets have weakened spiral dynamics since the 1980s. The 2022-23 inflation did not generate a classic spiral—real wages fell significantly, partly because unions are weaker. Central bank credibility matters: if workers believe inflation will return to target, they don\'t demand compensating wage increases. The spiral is a risk but not inevitable.',
 formula: 'w_t = w_{t-1} + \\alpha(\\pi_{t-1}) + \\beta(U^* - U_t); \\quad \\pi_t = \\pi_{t-1} + \\gamma(w_t - \\text{productivity})',
 realWorldExample: 'UK inflation in the 1970s reached 25%, partly due to wage-price spirals. Unions negotiated inflation-matching wage rises; firms passed costs to prices. The Thatcher government broke the spiral through tight monetary policy (17% interest rates), high unemployment, and trade union reform—a painful but effective disinflation.'
 },
 {
 id: 'vibe-recession',
 title: 'Vibe Recession (Vibecession)',
 category: 'macro',
 definition: 'A phenomenon where consumer sentiment and public mood reflect recessionary pessimism despite positive macroeconomic indicators such as GDP growth, low unemployment, and rising wages. The term captures the disconnect between objective economic data and subjective economic experience, suggesting traditional metrics may miss important aspects of wellbeing.',
 keyPoints: [
 'Consumer sentiment negative despite positive headline data',
 'Possible causes: Inflation eroding real gains, inequality, media negativity, psychological factors',
 'Social media amplifies negative perceptions',
 'Traditional metrics (GDP, unemployment) may miss distributional effects',
 'Behavioral economics: Losses loom larger than gains (loss aversion)'
 ],
 analysis: 'GDP grows 2%, unemployment at 3.5%, wages rising 4% → Traditional view: Strong economy. But: Inflation at 6% → Real wages falling → Housing costs up 30% in 3 years → Savings depleted by pandemic → Social media feeds negative news → Consumer sentiment at recessionary levels. The "vibe" reflects lived experience that aggregate data obscures.',
 evaluation: 'Vibe recessions challenge economists to look beyond headline figures. Possible explanations: (1) Median experience differs from mean (inequality), (2) Inflation hits necessities hardest (regressive), (3) Asset prices (housing) create wealth for owners but costs for renters, (4) Negativity bias in media and social media, (5) Pandemic trauma lingers psychologically. Policy implications: Focus on median incomes, housing affordability, and distributional metrics alongside GDP. The vibe may be data—subjective wellbeing matters.',
 realWorldExample: 'The 2023 US economy showed 2.5% GDP growth, 3.7% unemployment, and 4% wage growth—yet consumer sentiment was at levels typically associated with recessions. The disconnect was attributed to high inflation (especially food and gas), pandemic-era price anchoring, and political polarization affecting economic perceptions.'
 },
 {
 id: 'x-inefficiency',
 title: 'X-Inefficiency',
 category: 'market-failure',
 definition: 'The difference between the efficient behavior of firms assumed in economic theory and their observed behavior in practice. Coined by Harvey Leibenstein (1966), X-inefficiency refers to organizational slack, managerial waste, and failure to minimize costs—typically arising from lack of competitive pressure in monopolistic or protected markets.',
 keyPoints: [
 'Firms operate inside their cost frontier (above minimum possible cost)',
 'Sources: Managerial slack, poor motivation, organizational inertia, empire building',
 'More prevalent in: Monopolies, state-owned enterprises, regulated industries',
 'Competition reduces X-inefficiency (forces cost minimization)',
 'Distinct from allocative inefficiency (wrong output mix)'
 ],
 analysis: 'Monopolist has no competitive pressure → Managers pursue quiet life, excess staffing, perks → Costs rise above minimum → Firm operates inside production frontier. If competition introduced: Rivals with lower costs enter → Monopolist forced to cut costs or lose market share → X-inefficiency eliminated. Contestable markets discipline behavior even without actual entry.',
 evaluation: 'X-inefficiency is empirically significant: studies find monopolists have 5-15% higher costs than comparable competitive firms. Privatization often reduces costs through competition and profit incentives. But causation is contested: are monopolists inefficient because they\'re monopolists, or do efficient firms become monopolists? X-inefficiency is hard to measure directly (how do we know minimum possible costs?). The concept explains observed behavior but remains somewhat vague theoretically.',
 formula: 'X\\text{-inefficiency} = \\frac{\\text{Actual Cost} - \\text{Minimum Cost}}{\\text{Minimum Cost}}',
 realWorldExample: 'British Telecom (pre-privatization) exemplified X-inefficiency: overstaffing, slow service, limited innovation. Post-privatization (1984) and with competition (Mercury, mobile operators), employment fell 50% while service improved dramatically—competitive pressure eliminated organizational slack.'
 },
 {
 id: 'yen-carry-trade',
 title: 'Yen Carry Trade',
 category: 'macro',
 definition: 'An investment strategy that borrows in a low-interest-rate currency (historically the Japanese yen) to invest in higher-yielding assets elsewhere. Profits come from the interest rate differential, but the strategy is exposed to exchange rate risk—if the funding currency appreciates, losses can exceed interest gains.',
 keyPoints: [
 'Borrow in low-rate currency (¥), invest in high-rate assets ($, EM)',
 'Profit: Interest differential − Exchange rate movements − Transaction costs',
 'Yen depreciation amplifies gains; yen appreciation creates losses',
 'Leverage amplifies both gains and losses',
 'Unwind risk: Mass exit can cause currency spikes and market instability'
 ],
 analysis: 'Hedge fund borrows ¥1bn at 0.1% → Converts to $ (¥150/$) → Invests in US Treasuries at 5% → Earns 4.9% spread. If yen weakens to ¥160/$ → Repays cheaper → Additional 6.7% gain. Total return: ~11.6%. But if yen strengthens to ¥140/$ → Repayment costs 7.1% more → Loses 2.2% despite positive carry. Leveraged positions can be wiped out by modest yen appreciation.',
 evaluation: 'Carry trades are profitable on average (interest differential is compensation for currency risk) but subject to periodic violent reversals. Carry trade unwinds amplify currency volatility—positions are similar across investors, so exits are correlated. The 2008 crisis saw massive yen appreciation as carry trades unwound. Carry trades may also distort monetary policy transmission—low Japanese rates fund global speculation rather than domestic investment. For individual investors, currency risk typically outweighs interest gains.',
 formula: '\\text{Return} = (i_{\\text{invest}} - i_{\\text{fund}}) + \\frac{\\Delta e}{e} \\times \\text{Leverage}',
 realWorldExample: 'The August 2024 yen carry trade unwind saw the yen surge 10% in days as leveraged positions were forced to close. Global equity markets fell 5-10% as risk assets were sold to repay yen borrowings—demonstrating how carry trade dynamics transmit across asset classes.'
 },
 {
 id: 'yield-curve-control',
 title: 'Yield Curve Control (YCC)',
 category: 'policy',
 definition: 'A monetary policy tool where a central bank targets a specific yield on government bonds (typically 10-year maturity) by committing to buy or sell unlimited quantities to maintain that yield. YCC aims to keep borrowing costs low even after short-term rates hit zero, extending monetary stimulus along the yield curve.',
 keyPoints: [
 'Central bank sets target yield for specific maturity (e.g., 10-year)',
 'Commits to unlimited bond purchases to enforce target',
 'Extends policy stimulus beyond short rates (zero lower bound)',
 'Bank of Japan: YCC since 2016 (0% on 10-year JGBs)',
 'Risks: Large balance sheet, loss of market signaling, exit difficulty'
 ],
 analysis: 'Short-term rate at 0% (lower bound) → Long-term yields still positive (term premium, inflation expectations) → Central bank announces 10-year yield target of 0.5% → Commits to buy unlimited bonds if yield rises above target → Investors know central bank is buyer of last resort → Yields stay at/below target → Borrowing costs for government, firms, households remain low across maturities.',
 evaluation: 'YCC is powerful but controversial. Benefits: Caps government borrowing costs, provides policy stimulus beyond short rates, can stabilize financial markets. Costs: Central bank balance sheet expands massively, market price signals are suppressed (yields no longer reflect risk), exit is difficult (selling bonds would crash prices), fiscal dominance risk (central bank hostage to government financing needs). The Bank of Japan\'s experience shows YCC can persist for years but creates distortions; the 2023 widening of the YCC band caused yen volatility.',
 formula: 'r_{10Y} \\leq r^* \\implies \\text{BoJ buys bonds until target met}',
 realWorldExample: 'Bank of Japan introduced YCC in September 2016, targeting 0% on 10-year JGBs. By 2023, BoJ owned over 50% of outstanding JGBs. When it widened the target band (0.5% to 1%), markets saw it as policy normalization—yen appreciated 5% in days, showing how YCC suppresses market signals until suddenly released.'
 },
 {
 id: 'zombie-firm',
 title: 'Zombie Firm',
 category: 'macro',
 definition: 'A company that is able to service its debt but cannot repay principal, and survives only through continued refinancing or forbearance. Zombie firms are typically unprofitable, have low productivity, and persist because ultra-low interest rates and bank forbearance allow them to avoid bankruptcy.',
 keyPoints: [
 'Cannot cover interest from profits (ICR < 1) but survives via refinancing',
 'Low productivity, limited investment, no growth',
 'Prevalence increased with ultra-low interest rates post-2008',
 'Congestion effects: Tie up resources that could go to productive firms',
 'Japan\'s "lost decade" partly attributed to zombie lending'
 ],
 analysis: 'Interest rates at 1% → Unprofitable firm can service debt → Bank extends loan (avoids writing off loss) → Firm survives but doesn\'t invest or innovate → Productive firms cannot get labor/capital (congestion) → Economy-wide productivity growth slows. When rates rise → Zombie firms cannot service debt → Defaults spike → Banks take losses → Financial stress.',
 evaluation: 'Zombie firms impose costs beyond their own inefficiency: they depress wages (can\'t compete for labor), crowd out investment (absorb capital), and reduce business dynamism. But mass zombie failure would cause unemployment and financial instability—the trade-off is painful adjustment vs. prolonged stagnation. The COVID-19 support schemes may have created new zombies; rising rates in 2022-23 will test firm viability. Optimal policy: targeted support for viable firms, orderly exit for non-viable ones—but distinguishing them in real-time is difficult.',
 formula: 'ICR = \\frac{EBIT}{\\text{Interest Expense}} < 1 \\text{ (persistently) } \\implies \\text{Zombie}',
 realWorldExample: 'The Bank of England estimated 5-10% of UK firms were zombies pre-COVID, rising after 2020 support measures. As interest rates rose to 5%+ in 2023, corporate insolvencies hit 30-year highs—partly reflecting zombie firms finally failing. Japan\'s 1990s banking crisis created widespread zombie lending, contributing to two decades of stagnation.'
 }
];

export const getTopicsByCategory = (category: WorldEconomicsTopic['category']) => {
 return worldEconomicsTopics.filter(topic => topic.category === category);
};

export const getCategoryLabel = (category: WorldEconomicsTopic['category']): string => {
 const labels: Record<WorldEconomicsTopic['category'], string> = {
 'theory': 'Economic Theory',
 'policy': 'Policy & Taxation',
 'trade': 'International Trade',
 'market-failure': 'Market Failure',
 'macro': 'Macroeconomics'
 };
 return labels[category];
};

export const getCategoryIcon = (category: WorldEconomicsTopic['category']): string => {
 const icons: Record<WorldEconomicsTopic['category'], string> = {
 'theory': '📐',
 'policy': '🏛️',
 'trade': '🌍',
 'market-failure': '⚠️',
 'macro': '📊'
 };
 return icons[category];
};
