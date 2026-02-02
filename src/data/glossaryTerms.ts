// Master Economist's Glossary - CIE 9708 (2026-2028) Aligned Definitions
// All definitions are word-for-word accurate to Cambridge International Standards

export interface GlossaryTerm {
  term: string;
  definition: string;
  examTip: string;
  formula?: string;
  level: 'AS' | 'A2' | 'Both';
  topic: string;
  hasDiagram?: string; // Component name for mini-diagram
}

export const glossaryTerms: GlossaryTerm[] = [
  // === A ===
  {
    term: "Aggregate Demand (AD)",
    definition: "The total planned expenditure on goods and services produced in an economy at a given price level over a period of time. It comprises consumption (C), investment (I), government spending (G), and net exports (X-M). AD = C + I + G + (X-M).",
    examTip: "Always state all four components and explain why AD slopes downward (wealth effect, interest rate effect, trade effect).",
    formula: "AD = C + I + G + (X - M)",
    level: "AS",
    topic: "Macroeconomics"
  },
  {
    term: "Aggregate Supply (AS)",
    definition: "The total output of goods and services that firms in an economy are willing and able to supply at different price levels in a given time period. SRAS is upward-sloping; LRAS can be classical (vertical) or Keynesian (horizontal then vertical).",
    examTip: "Distinguish clearly between SRAS and LRAS shapes. Classical LRAS shows full employment; Keynesian LRAS shows spare capacity exists.",
    level: "AS",
    topic: "Macroeconomics",
    hasDiagram: "SRASLRASDiagram"
  },
  {
    term: "Allocative Efficiency",
    definition: "Achieved when resources are allocated in a way that maximises consumer satisfaction. It occurs where Price = Marginal Cost (P = MC), meaning resources are directed to their most valued uses and social welfare is maximised.",
    examTip: "In diagrams, show the P=MC point. Compare monopoly (P>MC, allocatively inefficient) with perfect competition (P=MC, allocatively efficient).",
    formula: "P = MC",
    level: "A2",
    topic: "Efficiency"
  },
  {
    term: "Appreciation",
    definition: "An increase in the value of a currency relative to another currency in a floating exchange rate system. This makes exports more expensive and imports cheaper, potentially worsening the trade balance (subject to Marshall-Lerner condition).",
    examTip: "Always link appreciation to effects on X, M, AD, and employment. Discuss elasticity conditions.",
    level: "AS",
    topic: "International Trade"
  },
  // === B ===
  {
    term: "Balance of Payments",
    definition: "A record of all monetary transactions between residents of a country and the rest of the world over a given time period. It comprises the current account, capital account, and financial account. The overall balance must sum to zero.",
    examTip: "Focus on the current account (trade in goods/services, income, transfers). Explain why deficits/surpluses matter for exchange rates and debt.",
    level: "AS",
    topic: "International Trade"
  },
  {
    term: "Barriers to Entry",
    definition: "Obstacles that make it difficult for new firms to enter an industry and compete with existing firms. Examples include patents, high start-up costs, brand loyalty, economies of scale, and legal restrictions.",
    examTip: "Link barriers to market power and supernormal profits. High barriers → less competition → persistent supernormal profits.",
    level: "A2",
    topic: "Market Structures"
  },
  // === C ===
  {
    term: "Comparative Advantage",
    definition: "The ability of a country to produce a good or service at a lower opportunity cost than another country. Even if one country has an absolute advantage in all goods, both countries can still gain from trade by specialising in their comparative advantage.",
    examTip: "Calculate opportunity costs using the formula: (Units of other good given up)/(Units of this good produced). Compare ratios between countries.",
    level: "AS",
    topic: "International Trade",
    hasDiagram: "ComparativeAdvantageDiagram"
  },
  {
    term: "Consumer Surplus",
    definition: "The difference between what consumers are willing and able to pay for a good and what they actually pay. Graphically, it is the area below the demand curve and above the market price, up to the quantity consumed.",
    examTip: "Draw the triangle between demand curve and price line. Show how price changes affect CS. Use for welfare analysis.",
    level: "AS",
    topic: "Microeconomics",
    hasDiagram: "ConsumerProducerSurplusDiagram"
  },
  {
    term: "Cost-Push Inflation",
    definition: "Inflation caused by increases in the costs of production, such as rising wages, raw material prices, or energy costs. This shifts the SRAS curve leftward, causing higher prices and lower output (stagflation).",
    examTip: "Draw SRAS shifting left. Link to oil price shocks, wage-price spirals, and imported inflation from depreciation.",
    level: "AS",
    topic: "Inflation",
    hasDiagram: "CostPushInflationDiagram"
  },
  {
    term: "Cross Elasticity of Demand (XED)",
    definition: "A measure of the responsiveness of demand for one good (A) to a change in the price of another good (B). XED = (% change in Qd of A) ÷ (% change in P of B). Positive XED indicates substitutes; negative XED indicates complements.",
    examTip: "State the sign AND interpret: XED > 0 = substitutes; XED < 0 = complements; XED ≈ 0 = unrelated goods.",
    formula: "XED = \\frac{\\%\\Delta Q_A}{\\%\\Delta P_B}",
    level: "AS",
    topic: "Elasticity"
  },
  // === D ===
  {
    term: "Demand-Pull Inflation",
    definition: "Inflation caused by an increase in aggregate demand that exceeds the economy's productive capacity. When AD shifts right beyond full employment, excess demand pulls up the general price level.",
    examTip: "Draw AD shifting right on AD/AS diagram. Only causes inflation when economy is near or at full capacity.",
    level: "AS",
    topic: "Inflation"
  },
  {
    term: "Depreciation",
    definition: "A fall in the value of a currency relative to another currency in a floating exchange rate system. This makes exports cheaper and imports more expensive, potentially improving the trade balance (subject to Marshall-Lerner).",
    examTip: "Link to J-Curve: short-term worsening (contracts in foreign currency) before long-term improvement. Always mention elasticity conditions.",
    level: "AS",
    topic: "International Trade",
    hasDiagram: "JCurveDiagram"
  },
  {
    term: "Diminishing Marginal Returns",
    definition: "The principle that as more units of a variable factor (e.g., labour) are added to fixed factors (e.g., capital), the marginal product of the variable factor will eventually decline. This is a short-run phenomenon.",
    examTip: "This explains the upward-sloping MC curve. Link to the shape of cost curves in the short run.",
    level: "A2",
    topic: "Production"
  },
  // === E ===
  {
    term: "Economies of Scale",
    definition: "The cost advantages that arise when a firm increases its scale of production, resulting in lower long-run average costs. Types include technical, managerial, purchasing, financial, marketing, and risk-bearing economies.",
    examTip: "Explain at least 3 types with examples. These create barriers to entry and explain natural monopoly.",
    level: "A2",
    topic: "Production",
    hasDiagram: "EconomiesOfScaleDiagram"
  },
  {
    term: "Equilibrium",
    definition: "A state of balance where there is no tendency for change. In markets, equilibrium occurs where quantity demanded equals quantity supplied. At this point, there is no excess demand or excess supply.",
    examTip: "Show equilibrium at D=S intersection. Explain how price mechanism eliminates shortages/surpluses.",
    level: "AS",
    topic: "Price System",
    hasDiagram: "DemandSupplyEquilibriumDiagram"
  },
  {
    term: "Exchange Rate",
    definition: "The price of one currency expressed in terms of another currency. Under floating rates, determined by supply and demand; under fixed rates, maintained by central bank intervention.",
    examTip: "Distinguish floating (market-determined) from fixed (government-managed). Explain factors shifting currency S/D.",
    level: "AS",
    topic: "International Trade",
    hasDiagram: "ExchangeRateDiagram"
  },
  {
    term: "Externalities",
    definition: "Costs or benefits arising from production or consumption that affect third parties not directly involved in the transaction. Negative externalities (pollution) cause MSC > MPC; positive externalities (education) cause MSB > MPB.",
    examTip: "Draw the wedge between private and social curves. The vertical distance shows the externality. Label deadweight loss.",
    level: "AS",
    topic: "Market Failure",
    hasDiagram: "ExternalitiesDiagram"
  },
  // === F ===
  {
    term: "Fiscal Policy",
    definition: "Government policy relating to taxation and public expenditure to influence aggregate demand and achieve macroeconomic objectives. Expansionary: ↑G or ↓T; Contractionary: ↓G or ↑T.",
    examTip: "Explain the multiplier effect of government spending. Discuss time lags, crowding out, and budget deficit implications.",
    level: "AS",
    topic: "Macroeconomic Policy",
    hasDiagram: "FiscalPolicyADDiagram"
  },
  // === G ===
  {
    term: "Gini Coefficient",
    definition: "A measure of income or wealth inequality within a population, ranging from 0 (perfect equality) to 1 (perfect inequality). It is calculated as the ratio of the area between the Lorenz curve and the line of equality to the total area under the line of equality.",
    examTip: "Link to Lorenz curve diagram. Higher Gini = greater inequality. Compare countries using Gini values.",
    formula: "G = \\frac{A}{A + B}",
    level: "A2",
    topic: "Development",
    hasDiagram: "GiniLorenzDiagram"
  },
  // === H ===
  {
    term: "Human Development Index (HDI)",
    definition: "A composite index measuring average achievement in three basic dimensions of human development: a long and healthy life (life expectancy), knowledge (expected and mean years of schooling), and a decent standard of living (GNI per capita at PPP).",
    examTip: "HDI ranges 0-1. Use to argue GDP alone doesn't capture development. Mention its limitations (inequality, sustainability).",
    level: "A2",
    topic: "Development"
  },
  // === I ===
  {
    term: "Income Elasticity of Demand (YED)",
    definition: "A measure of the responsiveness of demand for a good to a change in consumer income. YED = (% change in Qd) ÷ (% change in Y). Positive YED = normal good; negative YED = inferior good; YED > 1 = luxury.",
    examTip: "Classify goods: inferior (YED < 0), necessity (0 < YED < 1), luxury (YED > 1). Link to business cycle effects on different industries.",
    formula: "YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}",
    level: "AS",
    topic: "Elasticity"
  },
  {
    term: "Inflation",
    definition: "A sustained increase in the general price level in an economy over a period of time, leading to a fall in the purchasing power of money. Measured by CPI or RPI. Distinguished from deflation (falling prices) and disinflation (falling rate of inflation).",
    examTip: "Always specify the type: demand-pull or cost-push. Discuss costs of inflation and policy responses.",
    level: "AS",
    topic: "Inflation"
  },
  // === J ===
  {
    term: "J-Curve Effect",
    definition: "The pattern of trade balance following a currency depreciation: initial worsening (contracts priced in foreign currency, inelastic demand in short run) followed by improvement (as quantities adjust over time). Requires Marshall-Lerner condition to hold eventually.",
    examTip: "Draw the J-shape with time on x-axis. Explain why the curve dips before rising (time lags in demand response).",
    level: "AS",
    topic: "International Trade",
    hasDiagram: "JCurveDiagram"
  },
  // === K ===
  {
    term: "Kuznets Curve",
    definition: "The hypothesis proposed by Simon Kuznets that as an economy develops, income inequality first increases (as workers move from low-productivity agriculture to higher-productivity industry) and then decreases (as education spreads and redistribution occurs).",
    examTip: "Draw inverted U-shape. Critically evaluate: many developing countries show different patterns. Not deterministic.",
    level: "A2",
    topic: "Development"
  },
  // === L ===
  {
    term: "Laffer Curve",
    definition: "A theoretical curve showing the relationship between tax rates and tax revenue. At 0% and 100% rates, revenue is zero. Revenue is maximised at some intermediate rate. Used to argue that cutting very high tax rates could increase revenue.",
    examTip: "Draw the inverted U-shape. Evaluate: finding the revenue-maximising rate is difficult. Don't assume all tax cuts raise revenue.",
    level: "A2",
    topic: "Fiscal Policy",
    hasDiagram: "LafferCurveDiagram"
  },
  {
    term: "Law of Demand",
    definition: "The inverse relationship between the price of a good and the quantity demanded, ceteris paribus. As price rises, quantity demanded falls; as price falls, quantity demanded rises. This gives the demand curve its downward slope.",
    examTip: "Explain via substitution effect (switch to alternatives) and income effect (real income falls). Exceptions: Giffen/Veblen goods.",
    level: "AS",
    topic: "Price System"
  },
  // === M ===
  {
    term: "Marginal Efficiency of Capital (MEC)",
    definition: "The expected rate of return on an additional unit of capital investment. Investment continues until MEC equals the interest rate. A fall in interest rates increases the quantity of profitable investment projects.",
    examTip: "Draw MEC curve sloping downward. Show how interest rate changes shift equilibrium investment level. Link to monetary policy transmission.",
    formula: "MEC = r \\text{ at equilibrium investment}",
    level: "A2",
    topic: "Investment",
    hasDiagram: "MECCurveDiagram"
  },
  {
    term: "Marshall-Lerner Condition",
    definition: "The condition stating that a currency depreciation will improve the trade balance only if the sum of the price elasticities of demand for exports and imports exceeds one: |PED_X| + |PED_M| > 1. If inelastic, depreciation worsens the trade balance.",
    examTip: "Always state the condition precisely. Link to J-Curve: condition may not hold in short run but holds in long run as demand becomes more elastic.",
    formula: "|PED_X| + |PED_M| > 1",
    level: "AS",
    topic: "International Trade"
  },
  {
    term: "Monetary Policy",
    definition: "Central bank policy to influence the money supply and interest rates to achieve macroeconomic objectives. Tools include policy interest rates, quantitative easing, and reserve requirements. Transmission mechanism works through borrowing costs, asset prices, and expectations.",
    examTip: "Explain the transmission mechanism step-by-step. Discuss time lags, liquidity trap limitations, and effectiveness at ZLB.",
    level: "AS",
    topic: "Macroeconomic Policy"
  },
  {
    term: "Monopoly",
    definition: "A market structure with a single seller, no close substitutes, and high barriers to entry. The monopolist is a price-maker, facing the downward-sloping market demand curve. Can earn supernormal profits in the long run.",
    examTip: "Draw MC=MR for profit maximisation. Show P>MC (allocative inefficiency) and potential deadweight loss. Discuss price discrimination.",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "MonopolyDiagram"
  },
  {
    term: "Multidimensional Poverty Index (MPI)",
    definition: "A measure of acute poverty that reflects deprivations in three dimensions: health (nutrition, child mortality), education (years of schooling, school attendance), and living standards (cooking fuel, sanitation, water, electricity, housing, assets). A person is MPI-poor if deprived in at least one-third of the 10 weighted indicators.",
    examTip: "Compare with income poverty measures. MPI captures non-income dimensions. 2026-2028 syllabus focus on multidimensional approach.",
    level: "A2",
    topic: "Development"
  },
  {
    term: "Multiplier",
    definition: "The ratio of a change in national income to the initial change in injection that caused it. The spending multiplier equals 1/(1-MPC) or 1/MPW, where MPW = MPS + MPT + MPM. A larger MPC means a larger multiplier effect.",
    examTip: "State the formula and calculate. Explain why: initial spending → income → further spending → income. Discuss leakages that reduce the multiplier.",
    formula: "k = \\frac{1}{1 - MPC} = \\frac{1}{MPW}",
    level: "A2",
    topic: "National Income",
    hasDiagram: "MultiplierDiagram"
  },
  // === N ===
  {
    term: "Natural Rate of Unemployment (NRU)",
    definition: "The level of unemployment when the labour market is in equilibrium—consisting of frictional and structural unemployment, but no cyclical unemployment. It is the unemployment rate at which inflation is stable (NAIRU). Policies to reduce NRU are supply-side.",
    examTip: "Link to vertical LRPC at NRU. Explain why demand-side policies can't reduce unemployment below NRU in the long run without accelerating inflation.",
    level: "A2",
    topic: "Unemployment",
    hasDiagram: "PhillipsCurveDiagram"
  },
  {
    term: "Negative Externality",
    definition: "A cost imposed on third parties not involved in the production or consumption of a good, for which no compensation is paid. Examples include pollution, noise, and congestion. Causes MSC > MPC, leading to overproduction relative to social optimum.",
    examTip: "Draw MSC above MPC. Show deadweight welfare loss. Discuss solutions: taxes, regulation, permits, property rights.",
    level: "AS",
    topic: "Market Failure",
    hasDiagram: "ExternalitiesDiagram"
  },
  // === O ===
  {
    term: "Oligopoly",
    definition: "A market structure dominated by a small number of large firms, with high barriers to entry and interdependence between firms. Each firm must consider rivals' reactions when making decisions. May lead to collusion or competitive behaviour.",
    examTip: "Draw kinked demand curve for non-collusive oligopoly. Discuss game theory, cartels, and price leadership. Evaluate stability of collusion.",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "KinkedDemandDiagram"
  },
  {
    term: "Opportunity Cost",
    definition: "The next best alternative foregone when making a choice. It represents the true economic cost of any decision. Because resources are scarce, every choice involves a trade-off and an opportunity cost.",
    examTip: "Always express as 'the opportunity cost OF x IS y' (specific alternative). Essential for explaining PPC and rational decision-making.",
    level: "AS",
    topic: "Basic Economics",
    hasDiagram: "OpportunityCostPPCDiagram"
  },
  // === P ===
  {
    term: "Paradox of Thrift",
    definition: "The Keynesian concept that while saving is virtuous for individuals, if everyone increases saving simultaneously, aggregate demand falls, leading to lower national income, and ultimately lower total saving. Individual rationality leads to collective irrationality.",
    examTip: "Use to critique supply-side view that saving is always good. Particularly relevant during recessions when AD is deficient.",
    level: "A2",
    topic: "National Income",
    hasDiagram: "ParadoxOfThriftDiagram"
  },
  {
    term: "Perfect Competition",
    definition: "A theoretical market structure with many small firms, homogeneous products, perfect information, and no barriers to entry or exit. Firms are price-takers, facing a perfectly elastic demand curve. In long-run equilibrium, P = MC = AC (allocatively and productively efficient, normal profits only).",
    examTip: "Draw horizontal demand curve for the firm at market price. Show short-run supernormal profits attract entry → long-run normal profits.",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "PerfectCompetitionDiagram"
  },
  {
    term: "Phillips Curve",
    definition: "An empirical relationship showing an inverse trade-off between unemployment and inflation. The short-run Phillips curve (SRPC) suggests policymakers can reduce unemployment by accepting higher inflation. The long-run Phillips curve (LRPC) is vertical at the NRU, implying no long-run trade-off.",
    examTip: "Draw both SRPC (downward-sloping) and LRPC (vertical at NRU). Explain adaptive expectations and why SRPC shifts with expected inflation.",
    level: "A2",
    topic: "Unemployment",
    hasDiagram: "PhillipsCurveDiagram"
  },
  {
    term: "Price Elasticity of Demand (PED)",
    definition: "A measure of the responsiveness of quantity demanded to a change in price. PED = (% change in Qd) ÷ (% change in P). Values: |PED| > 1 (elastic), |PED| < 1 (inelastic), |PED| = 1 (unit elastic).",
    examTip: "Always take absolute value for classification. Link to total revenue: elastic → ↓P increases TR; inelastic → ↓P decreases TR.",
    formula: "PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}",
    level: "AS",
    topic: "Elasticity",
    hasDiagram: "PriceElasticityDiagram"
  },
  {
    term: "Price Elasticity of Supply (PES)",
    definition: "A measure of the responsiveness of quantity supplied to a change in price. PES = (% change in Qs) ÷ (% change in P). Determined by: spare capacity, factor mobility, production time, and ability to store stock.",
    examTip: "PES is always positive (law of supply). Time is key: momentary supply is perfectly inelastic; long-run supply is more elastic.",
    formula: "PES = \\frac{\\%\\Delta Q_s}{\\%\\Delta P}",
    level: "AS",
    topic: "Elasticity",
    hasDiagram: "PESDiagram"
  },
  {
    term: "Producer Surplus",
    definition: "The difference between the price producers receive and the minimum price they would be willing to accept. Graphically, it is the area above the supply curve and below the market price, up to the quantity sold.",
    examTip: "Draw triangle between supply curve and price line. Use alongside consumer surplus for total welfare analysis.",
    level: "AS",
    topic: "Microeconomics",
    hasDiagram: "ConsumerProducerSurplusDiagram"
  },
  {
    term: "Production Possibility Frontier (PPF)",
    definition: "A curve showing the maximum combinations of two goods that an economy can produce with its given resources and technology, assuming full and efficient use of resources. Points on the PPF are productively efficient; inside is inefficient; outside is unattainable.",
    examTip: "Use to illustrate scarcity, choice, opportunity cost, and economic growth (outward shift). Concave shape shows increasing opportunity cost.",
    level: "AS",
    topic: "Basic Economics",
    hasDiagram: "PPCConceptDiagram"
  },
  {
    term: "Productive Efficiency",
    definition: "Achieved when a firm produces at the lowest possible average cost, operating at the minimum point of the long-run average cost curve. At this point, P = minimum AC and all economies of scale are exploited.",
    examTip: "In diagrams, show production at minimum AC. Compare: perfect competition achieves this in long run; monopoly typically does not.",
    formula: "P = AC_{min}",
    level: "A2",
    topic: "Efficiency"
  },
  {
    term: "Public Goods",
    definition: "Goods that are non-excludable (impossible to prevent non-payers from consuming) and non-rivalrous (one person's consumption doesn't reduce availability to others). Examples: national defence, street lighting. Markets underprovide due to free-rider problem.",
    examTip: "Distinguish from merit goods (which are excludable). Explain market failure: free-rider problem → no private provision → government must provide.",
    level: "AS",
    topic: "Market Failure"
  },
  // === Q ===
  {
    term: "Quantitative Easing (QE)",
    definition: "An unconventional monetary policy where the central bank purchases financial assets (typically government bonds) to inject money directly into the economy when interest rates are near zero. Aims to lower long-term rates, boost asset prices, and stimulate lending.",
    examTip: "Use when explaining policy at the zero lower bound. Discuss transmission channels and limitations (may increase asset prices more than real economy activity).",
    level: "A2",
    topic: "Monetary Policy"
  },
  {
    term: "Quantity Theory of Money",
    definition: "The monetarist theory expressed as MV = PT, where M is money supply, V is velocity of circulation, P is price level, and T is transactions (or real output Y). If V is stable, increases in M lead proportionally to increases in P (inflation).",
    examTip: "State the equation and assumptions. Explain monetarist view that inflation is always a monetary phenomenon. Critique: V may not be stable.",
    formula: "MV = PT",
    level: "A2",
    topic: "Money and Banking",
    hasDiagram: "QuantityTheoryDiagram"
  },
  // === S ===
  {
    term: "Scarcity",
    definition: "The fundamental economic problem that resources are limited while human wants are unlimited. This forces societies to make choices about how to allocate resources, leading to opportunity costs. Scarcity exists in all economies regardless of wealth.",
    examTip: "Start any 'basic economic problem' answer with scarcity. Link to the need for choice, opportunity cost, and resource allocation mechanisms.",
    level: "AS",
    topic: "Basic Economics"
  },
  {
    term: "Supply-Side Policies",
    definition: "Policies aimed at increasing the productive capacity of the economy by shifting LRAS rightward. Market-based: deregulation, privatisation, tax cuts, labour market flexibility. Interventionist: education, training, infrastructure, R&D subsidies.",
    examTip: "Draw LRAS shifting right → higher potential output and lower price level. Discuss time lags, costs, and distributional effects.",
    level: "AS",
    topic: "Macroeconomic Policy",
    hasDiagram: "SupplySidePolicyDiagram"
  },
  // === T ===
  {
    term: "Terms of Trade",
    definition: "The ratio of export prices to import prices, expressed as an index. ToT = (Export Price Index / Import Price Index) × 100. An improvement means a country can buy more imports per unit of exports; a deterioration means fewer imports per unit of exports.",
    examTip: "Calculate and interpret changes. Improving ToT isn't always good: may reflect falling export competitiveness. Link to primary commodity dependence.",
    formula: "ToT = \\frac{\\text{Export Price Index}}{\\text{Import Price Index}} \\times 100",
    level: "AS",
    topic: "International Trade",
    hasDiagram: "TermsOfTradeDiagram"
  },
  {
    term: "Transfer Payments",
    definition: "Payments made by the government to individuals for which no good or service is received in return. Examples include unemployment benefits, pensions, and welfare payments. Not included in GDP calculations as they do not represent production.",
    examTip: "Use when explaining automatic stabilisers. During recession: ↑ unemployment → ↑ transfer payments → supports AD. Also discuss inequality reduction.",
    level: "AS",
    topic: "National Income"
  },
  // === U ===
  {
    term: "Unemployment",
    definition: "Those of working age who are without work, available for work, and actively seeking work. Types include cyclical (demand-deficient), structural, frictional, and seasonal. The unemployment rate is (unemployed ÷ labour force) × 100.",
    examTip: "Always identify the TYPE of unemployment before discussing policies. Demand-side policies address cyclical; supply-side policies address structural.",
    formula: "\\text{Unemployment Rate} = \\frac{\\text{Unemployed}}{\\text{Labour Force}} \\times 100",
    level: "AS",
    topic: "Unemployment"
  },
  {
    term: "Utility",
    definition: "The satisfaction or benefit a consumer derives from consuming a good or service. Total utility increases with consumption but at a decreasing rate (diminishing marginal utility). Consumer equilibrium: MU/P equal across all goods.",
    examTip: "Use to derive the demand curve: as price falls, MU/P rises, so quantity demanded increases to restore equilibrium.",
    formula: "\\frac{MU_A}{P_A} = \\frac{MU_B}{P_B}",
    level: "A2",
    topic: "Consumer Theory",
    hasDiagram: "UtilityDiagram"
  },
  // === NEW ADVANCED A2 TERMS ===
  {
    term: "X-Inefficiency",
    definition: "A concept developed by Harvey Leibenstein (1966) describing the inefficiency that arises when firms operate above their minimum possible cost due to lack of competitive pressure. This organizational slack results from managerial complacency, overstaffing, and weak cost control in monopolistic markets.",
    examTip: "Distinguish from productive inefficiency (not at min ATC) and allocative inefficiency (P>MC). X-inefficiency means the ATC curve itself is higher than it needs to be. Link to contestable markets as discipline mechanism.",
    level: "A2",
    topic: "Market Structures"
  },
  {
    term: "Nash Equilibrium",
    definition: "A game theory concept describing a stable state where no player can improve their payoff by unilaterally changing their strategy, given the strategies of other players. In oligopoly, Nash equilibrium often results in suboptimal outcomes for all firms (prisoner's dilemma).",
    examTip: "Nash equilibrium is NOT necessarily the best outcome—explain the dominant strategy logic. Compare Nash equilibrium (both defect) with collusive outcome (both cooperate).",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "GameTheoryDiagram"
  },
  {
    term: "Contestable Market",
    definition: "A market characterised by freedom of entry and exit, zero sunk costs, and no incumbent advantages. The threat of 'hit-and-run' entry by potential competitors disciplines incumbent firms to price at average cost, even with few actual competitors.",
    examTip: "Sunk costs (not barriers to entry) are the key concept. Explain why low sunk costs enable hit-and-run entry. Link to airline deregulation examples.",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "ContestableMarketsDiagram"
  },
  {
    term: "Sunk Cost",
    definition: "A cost that has already been incurred and cannot be recovered, regardless of future decisions. In contestable markets theory, high sunk costs prevent hit-and-run entry by making exit costly, allowing incumbents to sustain supernormal profits.",
    examTip: "Contrast with fixed costs (recoverable on exit) and barriers to entry (prevent entry). Sunk costs matter for EXIT, not entry. Examples: advertising, specialized equipment, R&D.",
    level: "A2",
    topic: "Market Structures"
  },
  {
    term: "Dominant Strategy",
    definition: "In game theory, a strategy that yields the highest payoff for a player regardless of what strategies other players choose. When both players have dominant strategies, the outcome is predictable (Nash equilibrium).",
    examTip: "Work through payoff matrix row by row: 'If B does X, A gets...If B does Y, A gets...' If one choice always wins, that's the dominant strategy.",
    level: "A2",
    topic: "Market Structures"
  },
  {
    term: "Kinked Demand Curve",
    definition: "A model explaining price rigidity in oligopoly based on asymmetric firm responses: rivals match price cuts but not price increases. This creates a kink in the demand curve and a discontinuity in the MR curve, explaining why prices remain stable despite cost changes.",
    examTip: "The model explains price rigidity but NOT how the original price was set. Draw the gap in MR curve. Explain why MC can shift within the gap without changing output.",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "KinkedDemandDiagram"
  },
  {
    term: "Prisoner's Dilemma",
    definition: "A game theory scenario where two rational players, acting in their own self-interest, reach an outcome that is suboptimal for both. In oligopoly, this explains why cartels break down: each firm has incentive to cheat, even though cooperation benefits all.",
    examTip: "The 'dilemma' is that individual rationality leads to collective irrationality. Explain why defection is the dominant strategy even when cooperation is better overall.",
    level: "A2",
    topic: "Market Structures",
    hasDiagram: "GameTheoryDiagram"
  },
  {
    term: "Dynamic Efficiency",
    definition: "Efficiency achieved when firms use supernormal profits to invest in research and development, leading to technological progress, product innovation, and long-run productivity growth. May require market power that contradicts static allocative efficiency.",
    examTip: "Trade-off: perfect competition achieves static efficiency (P=MC) but may lack R&D funds; monopoly has funds but may lack incentive. Schumpeterian view: monopoly profits drive innovation.",
    level: "A2",
    topic: "Efficiency"
  },
  {
    term: "Satisficing",
    definition: "A decision-making approach where firms aim to achieve satisfactory levels across multiple objectives rather than maximising any single goal. Developed by Herbert Simon, it reflects bounded rationality—managers lack perfect information to optimize.",
    examTip: "Contrast with profit maximisation (MR=MC). Explain principal-agent problem: managers may satisfice while shareholders want maximisation. Link to divorce of ownership and control.",
    level: "A2",
    topic: "Market Structures"
  }
];

// Helper function to get unique letters that have terms
export const getAvailableLetters = (): string[] => {
  const letters = new Set(glossaryTerms.map(term => term.term[0].toUpperCase()));
  return Array.from(letters).sort();
};

// Helper function to get all alphabet letters
export const getAllLetters = (): string[] => {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
};

// Helper function to filter terms by letter
export const filterTermsByLetter = (letter: string): GlossaryTerm[] => {
  return glossaryTerms.filter(term => term.term[0].toUpperCase() === letter);
};

// Helper function to get terms by level
export const filterTermsByLevel = (level: 'AS' | 'A2' | 'Both'): GlossaryTerm[] => {
  return glossaryTerms.filter(term => term.level === level || term.level === 'Both');
};
