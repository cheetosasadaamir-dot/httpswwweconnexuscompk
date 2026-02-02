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
