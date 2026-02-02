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
