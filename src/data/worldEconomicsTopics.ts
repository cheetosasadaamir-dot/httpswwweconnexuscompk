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
