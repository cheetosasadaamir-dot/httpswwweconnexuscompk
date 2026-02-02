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
    formula: 'h(p, \\bar{u}) = \\arg\\min_x \\{p \\cdot x : U(x) \\geq \\bar{u}\\}',
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
