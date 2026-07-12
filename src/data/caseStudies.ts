// CIE A-Level Economics (9708) Past Paper Case Studies - May/June 2025

export interface DataTable {
 title: string;
 headers: string[];
 rows: string[][];
 source?: string;
}

export interface Question {
 id: string;
 part: string;
 text: string;
 marks: number;
 relevantParagraph?: number;
 relevantTable?: string;
 requiresDiagram?: string;
 answerBlueprint: {
 knowledge: string[];
 analysis: string[];
 evaluation: string[];
 };
 modelAnswer: string;
 formula?: string;
}

export interface CaseStudy {
 id: string;
 paperCode: string;
 title: string;
 year: string;
 session: string;
 paragraphs: string[];
 tables: DataTable[];
 questions: Question[];
}

export const caseStudies: CaseStudy[] = [
 {
 id: "9708-s25-21",
 paperCode: "9708/21",
 title: "Inflation rate falls in the United States (US), but fears continue over the economic outlook",
 year: "2025",
 session: "May/June",
 paragraphs: [
 "Americans have been worried about the rate of inflation in the US, especially the increases in food, rent, energy and vehicle prices.",
 "Table 1.1 shows how the inflation rate has changed between July 2022 and December 2022. The Federal Reserve (the US central bank) decided to reduce the money supply and raise the rate of interest as part of its contractionary monetary policy. In an attempt to bring about disinflation, the Federal Reserve used a contractionary monetary policy.",
 "Some commentators have raised concerns about the accuracy of the Consumer Price Index (CPI) in measuring inflation, noting that the basket of goods may not reflect actual spending patterns for all households.",
 "One economist stated that 'we still expect the impact of the increase in interest rates to push the economy into a mild recession in the first half of 2023'."
 ],
 tables: [
 {
 title: "Table 1.1 US inflation rate and interest rate, July 2022 to December 2022",
 headers: ["Month", "Inflation Rate (%)", "Interest Rate (%)"],
 rows: [
 ["July 2022", "8.5", "2.50"],
 ["August 2022", "8.3", "2.50"],
 ["September 2022", "8.2", "3.25"],
 ["October 2022", "7.7", "4.00"],
 ["November 2022", "7.1", "4.00"],
 ["December 2022", "6.5", "4.50"]
 ],
 source: "Bureau of Labor Statistics, Federal Reserve"
 }
 ],
 questions: [
 {
 id: "q1a",
 part: "(a)",
 text: "Using the data in Table 1.1, compare changes in the inflation rate and changes in the interest rate in the US.",
 marks: 2,
 relevantTable: "Table 1.1 US inflation rate and interest rate, July 2022 to December 2022",
 answerBlueprint: {
 knowledge: ["Identify the trend in inflation rate", "Identify the trend in interest rate"],
 analysis: ["Calculate percentage point changes", "Compare the direction and magnitude"],
 evaluation: []
 },
 modelAnswer: "Both trends show a clear inverse relationship. The inflation rate fell from 8.5% in July 2022 to 6.5% in December 2022, a decrease of 2 percentage points. Meanwhile, the interest rate rose from 2.50% to 4.50%, an increase of 2 percentage points. This demonstrates the Federal Reserve's contractionary monetary policy—as interest rates increased, inflation decreased, suggesting the policy had the intended effect of reducing aggregate demand and price pressures.",
 formula: "Percentage point change = New value - Old value"
 },
 {
 id: "q1b",
 part: "(b)",
 text: "Explain one reason why using the Consumer Price Index (CPI) to measure the inflation rate in the US may not produce an accurate result.",
 marks: 2,
 relevantParagraph: 2,
 answerBlueprint: {
 knowledge: ["Define CPI and its basket of goods methodology"],
 analysis: ["Explain a specific limitation (e.g., substitution bias, quality changes, new products)"],
 evaluation: []
 },
 modelAnswer: "One limitation is substitution bias. The CPI uses a fixed basket of goods, but when prices rise, consumers typically substitute towards cheaper alternatives. For example, if beef prices rise significantly, consumers may switch to chicken. The CPI overstates inflation because it assumes consumers continue buying the same quantities of higher-priced goods, rather than adjusting their consumption patterns."
 },
 {
 id: "q1c",
 part: "(c)",
 text: "'In an attempt to bring about disinflation, the Federal Reserve used a contractionary monetary policy.' Consider whether disinflation is more harmful than deflation.",
 marks: 4,
 relevantParagraph: 1,
 requiresDiagram: "AD/AS",
 answerBlueprint: {
 knowledge: ["Define disinflation (falling rate of inflation)", "Define deflation (negative inflation/falling prices)"],
 analysis: ["Explain effects of disinflation on economy", "Explain effects of deflation on economy"],
 evaluation: ["Compare severity—deflation typically more harmful", "Consider time lags and expectations"]
 },
 modelAnswer: "Disinflation refers to a slowing in the rate of inflation (prices still rising, but more slowly), while deflation means the general price level is actually falling (negative inflation).\n\nDisinflation is generally considered less harmful because: (1) it maintains positive price expectations, encouraging spending; (2) real interest rates remain manageable; (3) debt burdens don't increase in real terms.\n\nDeflation is typically more harmful because: (1) consumers delay purchases expecting lower prices (deflationary spiral); (2) real debt burdens increase, causing defaults; (3) real wages become 'sticky', leading to unemployment; (4) monetary policy becomes ineffective (liquidity trap).\n\nEvaluation: However, the magnitude matters—severe, rapid disinflation could cause a recession if it results from a sharp demand contraction. Conversely, mild deflation from productivity gains (good deflation) may be less harmful than demand-deficient deflation. Time lags also matter: the effects of deflation compound over time as expectations become entrenched."
 },
 {
 id: "q1d",
 part: "(d)",
 text: "Assess whether increases in the interest rate make a recession in the US inevitable.",
 marks: 6,
 relevantParagraph: 3,
 requiresDiagram: "AD/AS",
 answerBlueprint: {
 knowledge: ["Define recession (two consecutive quarters of negative GDP growth)", "Explain transmission mechanism of interest rates"],
 analysis: ["Higher rates → reduced C and I → lower AD → lower output", "Impact on exchange rates and net exports"],
 evaluation: ["Magnitude of rate increases", "Time lags in monetary policy", "Other factors affecting AD (fiscal policy, consumer confidence)", "Historical evidence—soft landings are possible"]
 },
 modelAnswer: "Interest rate increases transmit through several channels to reduce aggregate demand: (1) Higher borrowing costs reduce consumption (especially durables) and investment; (2) Higher mortgage payments reduce disposable income; (3) Currency appreciation may reduce net exports.\n\nHowever, a recession is NOT inevitable for several reasons:\n\n1. Magnitude: If rate increases are gradual and moderate, the economy may achieve a 'soft landing' where inflation falls without triggering recession.\n\n2. Time lags: Monetary policy typically takes 12-24 months to fully impact the economy, giving time for adjustment.\n\n3. Other factors: Strong labor markets, accumulated savings from pandemic, or expansionary fiscal policy could offset the contractionary effect.\n\n4. Supply-side improvements: If inflation was partly supply-driven, improving supply chains could reduce inflation without requiring demand destruction.\n\nEvaluation: Historical evidence shows mixed results—Paul Volcker's rate increases in the 1980s caused recession, but the Fed achieved soft landings in 1994-95. The outcome depends on the magnitude and timing of increases, the state of the economy, and how inflation expectations respond. Ceteris paribus is unlikely to hold."
 },
 {
 id: "q1e",
 part: "(e)",
 text: "Assess whether the Federal Reserve setting an inflation target as part of its monetary policy is likely to be helpful for the US economy.",
 marks: 6,
 answerBlueprint: {
 knowledge: ["Explain inflation targeting (typically 2%)", "Role of central bank independence"],
 analysis: ["Anchors expectations", "Provides transparency and accountability", "Guides policy decisions"],
 evaluation: ["May be too rigid", "Conflicts with other objectives (employment)", "Difficulty in volatile environments"]
 },
 modelAnswer: "Inflation targeting involves the central bank publicly announcing a target (the Fed targets 2%) and adjusting monetary policy to achieve it.\n\nArguments FOR inflation targeting:\n1. Anchors expectations: Economic agents can plan knowing the Fed's commitment, reducing uncertainty\n2. Transparency: Clear communication improves policy effectiveness and credibility\n3. Accountability: Provides a measurable benchmark for assessing central bank performance\n4. Historical success: Many countries have achieved low, stable inflation with this approach\n\nArguments AGAINST:\n1. Rigidity: May force procyclical policy during supply shocks (raising rates when facing cost-push inflation could worsen unemployment)\n2. Trade-offs: The Phillips Curve suggests short-run trade-offs with unemployment—strict inflation targeting may sacrifice employment stability\n3. Measurement issues: CPI may not capture true living costs, leading to inappropriate policy\n4. Global factors: Imported inflation may be beyond domestic monetary policy control\n\nEvaluation: The effectiveness depends on central bank credibility, the flexibility of the target (the Fed uses 'average inflation targeting'), and coordination with fiscal policy. On balance, inflation targeting has proven helpful for most economies, but requires flexibility to respond to exceptional circumstances. The 2021-23 inflation surge tested this framework's limits."
 }
 ]
 },
 {
 id: "9708-s25-22",
 paperCode: "9708/22",
 title: "Can South Africa escape from its economic difficulties?",
 year: "2025",
 session: "May/June",
 paragraphs: [
 "South Africa has serious economic difficulties. Despite its vast natural resources, the main economic indicators show a country in trouble. Despite a fall over the last year, unemployment remains very high. It is amongst the highest in the world, particularly for young people, and this has led to one of the highest and most persistent levels of income inequality in the world, with a Gini coefficient of 0.67.",
 "Economic growth is amongst the worst in Africa and this, together with high government expenditure, means that the country has had a fiscal deficit of more than 4% of GDP in recent years. Despite falls in the value of South Africa's currency (rand), the current account of the balance of payments is projected to move to a significant deficit of 2.3% of GDP in 2023 and to deteriorate further to about 2.5% of GDP in 2024.",
 "South Africa is also suffering extended power cuts of up to 10 hours per day due to the collapse of the state electricity provider. What can be done?",
 "The International Monetary Fund (IMF) recommended several policies: improvements in infrastructure (particularly electricity and transport), promoting private sector investment, encouraging competition and free trade with neighbouring countries, closer links with the African Continental Free Trade Area (AfCFTA), tackling unemployment through appropriate minimum wage policy, employment protection, improved education and training, and promoting entrepreneurship."
 ],
 tables: [
 {
 title: "Fig. 1.1 South Africa % rate of unemployment, January 2020 to October 2022",
 headers: ["Date", "Unemployment Rate (%)"],
 rows: [
 ["Jan 2020", "30.1"],
 ["Apr 2020", "30.8"],
 ["Jul 2020", "32.7"],
 ["Oct 2020", "32.9"],
 ["Jan 2021", "32.5"],
 ["Apr 2021", "32.6"],
 ["Jul 2021", "33.9"],
 ["Oct 2021", "34.5"],
 ["Jan 2022", "35.3"],
 ["Apr 2022", "34.9"],
 ["Jul 2022", "34.4"],
 ["Oct 2022", "32.9"]
 ],
 source: "tradingeconomics.com"
 }
 ],
 questions: [
 {
 id: "q1a",
 part: "(a)",
 text: "Define the term 'current account of the balance of payments'.",
 marks: 2,
 answerBlueprint: {
 knowledge: ["Define current account", "List its components"],
 analysis: [],
 evaluation: []
 },
 modelAnswer: "The current account is a component of the balance of payments that records the flow of goods, services, primary income (investment income), and secondary income (transfers) between a country and the rest of the world. It includes: (1) the trade balance (exports minus imports of goods and services), (2) net primary income (wages and investment income), and (3) net secondary income (remittances, aid, and other transfers)."
 },
 {
 id: "q1b",
 part: "(b)",
 text: "With reference to the data, explain one reason why employment growth is important for South Africa.",
 marks: 2,
 relevantTable: "Fig. 1.1 South Africa % rate of unemployment, January 2020 to October 2022",
 relevantParagraph: 0,
 answerBlueprint: {
 knowledge: ["High unemployment data from table", "Link to income inequality"],
 analysis: ["Explain causation: employment → income → reduced inequality"],
 evaluation: []
 },
 modelAnswer: "The data shows unemployment reaching 35.3% in January 2022, among the world's highest rates. Employment growth is crucial because it would help address South Africa's extreme income inequality (Gini coefficient of 0.67). Higher employment would: (1) increase household incomes at the bottom of the distribution, (2) reduce reliance on government transfers, and (3) expand the tax base, helping reduce the fiscal deficit. Without employment growth, inequality will persist and may worsen social instability.",
 formula: "Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality)"
 },
 {
 id: "q1c",
 part: "(c)",
 text: "Consider whether improvement in infrastructure would help South Africa's economy.",
 marks: 4,
 relevantParagraph: 2,
 requiresDiagram: "LRAS Shift",
 answerBlueprint: {
 knowledge: ["Define infrastructure", "Link to LRAS and productivity"],
 analysis: ["Infrastructure → productivity → LRAS shift right", "Electricity specifically addresses current crisis"],
 evaluation: ["Time lags", "Funding constraints", "Government capacity"]
 },
 modelAnswer: "Infrastructure investment would likely help South Africa's economy through several channels:\n\nPositive effects:\n1. Addressing the immediate power crisis: Reliable electricity would end the 10-hour daily power cuts, allowing businesses to operate normally and reducing costs of backup generation\n2. Long-run aggregate supply: Better transport and electricity infrastructure increases productive capacity, shifting LRAS right\n3. Multiplier effects: Construction spending creates jobs and stimulates AD in the short run\n4. Attracting investment: Improved infrastructure makes South Africa more attractive for foreign direct investment\n\nHowever, there are limitations:\n1. Time lags: Infrastructure projects take years to complete—they won't solve immediate problems\n2. Funding constraints: With a fiscal deficit of 4%+ of GDP, financing may require borrowing or crowding out other spending\n3. Implementation capacity: Past failures of state electricity provider suggest government capacity constraints\n\nEvaluation: On balance, infrastructure improvement is necessary but not sufficient. The IMF correctly identifies it as one of several needed reforms. Success depends on implementation quality and complementary policies."
 },
 {
 id: "q1d",
 part: "(d)",
 text: "Assess whether the IMF's recommended policies would help South Africa escape from its economic difficulties.",
 marks: 6,
 relevantParagraph: 3,
 answerBlueprint: {
 knowledge: ["List IMF recommendations", "Explain theoretical basis for each"],
 analysis: ["How each policy addresses specific problems", "Potential conflicts between policies"],
 evaluation: ["Political feasibility", "Time horizons", "Trade-offs"]
 },
 modelAnswer: "The IMF recommends several interconnected policies. Let me assess each:\n\n1. Infrastructure investment (electricity, transport):\n+ Addresses immediate supply constraints\n+ Shifts LRAS right long-term\n- Requires significant funding; time lags\n\n2. Private sector investment promotion:\n+ Reduces burden on struggling state enterprises\n+ Brings efficiency and capital\n- May face resistance from unions and government\n\n3. Trade liberalization (AfCFTA):\n+ Larger market access for South African firms\n+ Competitive pressure improves efficiency\n- May expose weak industries to competition\n\n4. Minimum wage policy:\n+ Reduces exploitation\n- May increase unemployment if set too high (classical view)\n- Trade-off with employment growth objective\n\n5. Education and training:\n+ Addresses structural unemployment\n+ Improves human capital and productivity\n- Very long time lags (10-15 years for full impact)\n\nEvaluation: These policies are theoretically sound and address different aspects of South Africa's problems. However:\n- Political feasibility is questionable given vested interests\n- Policies may conflict (minimum wages vs. employment growth)\n- Time horizons vary widely (power fixes could be quick; education takes a generation)\n- External factors (global commodity prices, investor sentiment) may dominate\n\nConclusion: The policies could help, but success requires consistent implementation over many years—something South Africa's political environment may not support."
 },
 {
 id: "q1e",
 part: "(e)",
 text: "Assess whether promoting entrepreneurship is the most important policy to increase economic growth in South Africa.",
 marks: 6,
 answerBlueprint: {
 knowledge: ["Define entrepreneurship", "Link to economic growth"],
 analysis: ["How entrepreneurship drives growth (innovation, job creation)", "Barriers to entrepreneurship in South Africa"],
 evaluation: ["Compare to other policies", "Necessary but not sufficient", "Enabling conditions required"]
 },
 modelAnswer: "Entrepreneurship can drive economic growth through: innovation and productivity improvements, job creation (especially important given 35% unemployment), reducing reliance on large corporations and state enterprises, and developing new industries.\n\nHowever, entrepreneurship requires enabling conditions:\n- Reliable infrastructure (currently failing with 10-hour power cuts)\n- Access to finance (limited in South Africa)\n- Skills and education (currently inadequate)\n- Supportive regulatory environment\n- Security of property rights\n\nComparison with other policies:\n1. Infrastructure may be MORE important as a prerequisite—entrepreneurs cannot operate without electricity\n2. Education/training may be equally important—entrepreneurs need skills\n3. Trade liberalization may be complementary—entrepreneurs need market access\n\nEvaluation:\n- Entrepreneurship is necessary but not sufficient for growth\n- It cannot be the 'most important' policy if basic infrastructure fails\n- A sequenced approach makes sense: fix infrastructure first, then promote entrepreneurship\n- Magnitude matters: even successful entrepreneurship policy may not overcome structural barriers\n\nConclusion: Promoting entrepreneurship is important but not the 'most important' policy. Infrastructure and education are probably higher priorities, as they are prerequisites for successful entrepreneurship. A holistic approach addressing multiple constraints simultaneously is needed."
 }
 ]
 },
 {
 id: "9708-s25-23",
 paperCode: "9708/23",
 title: "How onions became a luxury good in the Philippines",
 year: "2025",
 session: "May/June",
 paragraphs: [
 "Global inflation is putting a strain on food prices, particularly in low-income countries in Asia.",
 "In the Philippines, a series of typhoons destroyed crops, leading to severe shortages of red onions. The price of local red onions soared from around 80 pesos per kilogram to over 700 pesos—making them more expensive than meat.",
 "The government responded with several measures: allowing increased imports, setting 'suggested retail prices' for onions, and partnering with universities to experiment with alternative growing techniques to increase crop yields.",
 "The price increase had significant distributional effects, as onions are a staple ingredient in Filipino cuisine. Lower-income households, who spend a larger proportion of their budget on food, were disproportionately affected."
 ],
 tables: [
 {
 title: "Table 1.1 Red Onion Prices in the Philippines, 2022-2023",
 headers: ["Period", "Price (Pesos/kg)", "% Change"],
 rows: [
 ["October 2022", "80", "-"],
 ["November 2022", "150", "+87.5%"],
 ["December 2022", "350", "+133.3%"],
 ["January 2023", "700", "+100%"],
 ["February 2023", "450", "-35.7%"],
 ["March 2023", "280", "-37.8%"]
 ],
 source: "Philippine Statistics Authority"
 }
 ],
 questions: [
 {
 id: "q1a",
 part: "(a)",
 text: "Use a demand and supply diagram to demonstrate how 'a series of typhoons' affected the market price of food crops in Southeast Asia in January 2023.",
 marks: 2,
 relevantParagraph: 1,
 requiresDiagram: "Demand and Supply Shift",
 answerBlueprint: {
 knowledge: ["Supply shifts left due to crop destruction"],
 analysis: ["Show movement from S₁ to S₂, new equilibrium E₁ to E₂", "Higher price, lower quantity"],
 evaluation: []
 },
 modelAnswer: "The typhoons destroyed crops, causing a leftward shift in the supply curve from S₁ to S₂. This represents a decrease in supply at every price level due to the destruction of productive capacity.\n\nAt the original equilibrium E₁, price was P₁ and quantity Q₁. The supply shift creates a new equilibrium E₂ at higher price P₂ and lower quantity Q₂.\n\nThe diagram should show: (1) Original equilibrium E₁ at intersection of D and S₁; (2) Supply shifts left to S₂; (3) New equilibrium E₂ at higher price P₂ and lower quantity Q₂."
 },
 {
 id: "q1b",
 part: "(b)",
 text: "Is the short-run price elasticity of supply of red onions elastic or inelastic? Justify your answer.",
 marks: 2,
 relevantParagraph: 1,
 answerBlueprint: {
 knowledge: ["Define PES", "Agricultural characteristics"],
 analysis: ["Growing time, perishability, land constraints"],
 evaluation: []
 },
 modelAnswer: "The short-run price elasticity of supply (PES) for red onions is inelastic (PES < 1).\n\nJustification:\n1. Growing time: Onions take 3-4 months to grow from seed to harvest—supply cannot respond quickly to price changes\n2. Perishability: Onions cannot be stored indefinitely, limiting inventory adjustments\n3. Fixed land: Agricultural land is fixed in the short run; farmers cannot instantly expand production\n4. Weather dependence: Production is constrained by seasonal and climatic factors\n\nThis explains why prices rose so dramatically (+775% from 80 to 700 pesos)—supply was unable to respond to the shortage, so prices had to rise to ration the limited quantity."
 },
 {
 id: "q1c",
 part: "(c)",
 text: "With the help of a production possibility curve (PPC) diagram, consider the impact on the opportunity cost to a farmer in the Philippines of starting to grow red onions.",
 marks: 4,
 requiresDiagram: "PPC",
 answerBlueprint: {
 knowledge: ["Define opportunity cost", "PPC shows trade-offs"],
 analysis: ["Movement along PPC from other crops to onions", "Increasing opportunity cost due to specialization"],
 evaluation: ["Depends on starting point on PPC", "Resource suitability"]
 },
 modelAnswer: "Opportunity cost is the next best alternative foregone. A PPC diagram can illustrate this concept for a farmer choosing between growing red onions and other crops.\n\nThe PPC shows all efficient combinations of onions and other crops given the farmer's fixed resources (land, labor, capital). Moving along the curve from point A (more other crops) to point B (more onions) involves opportunity cost.\n\nKey insights:\n1. If the PPC is concave (bowed outward), this reflects increasing opportunity cost—as the farmer grows more onions, each additional kilogram requires giving up increasing amounts of other crops\n2. This occurs because resources are not perfectly substitutable—land and skills suited to rice may be less productive for onions\n\nEvaluation:\n1. If farmer is currently at a point producing few onions, opportunity cost of switching may be low (resources may be equally suited)\n2. If farmer must give up highly profitable crops, opportunity cost is high regardless of the diagram position\n3. High onion prices (700 pesos/kg) may justify high opportunity costs—farmers will switch if onion revenue exceeds opportunity cost"
 },
 {
 id: "q1d",
 part: "(d)",
 text: "Assess whether a 'suggested retail price' is the best way of stabilising onion prices in the Philippines.",
 marks: 6,
 relevantParagraph: 2,
 answerBlueprint: {
 knowledge: ["Define price control", "Maximum price below equilibrium"],
 analysis: ["Effects of price ceiling: shortage, black market, rationing"],
 evaluation: ["Compare alternatives: buffer stocks, imports, subsidies", "Short-run vs long-run effectiveness"]
 },
 modelAnswer: "A 'suggested retail price' is effectively a recommended maximum price. If set below market equilibrium, it becomes a price ceiling.\n\nEffects of a price ceiling:\n1. If binding (below equilibrium): creates shortage (Qd > Qs at controlled price)\n2. Non-price rationing required (queuing, favoritism)\n3. Black markets may emerge at higher prices\n4. Reduces incentive for farmers to increase production\n5. May help consumers afford onions in short-term\n\nAlternative policies:\n1. Buffer stocks: Government buys when cheap, sells when expensive—stabilizes without creating shortages\n2. Import liberalization: Allows foreign supply to fill domestic gap—may be faster than waiting for domestic production\n3. Subsidies to farmers: Encourages production while maintaining market prices\n4. Strategic reserves: Long-term storage of non-perishables\n\nEvaluation:\n- 'Suggested' price (not enforced) may have limited impact—sellers may ignore it\n- If enforced, creates standard price ceiling problems\n- Imports may be more effective in short-run (addressing supply)\n- Long-term solution requires improving domestic supply resilience (the university research initiative)\n\nConclusion: Suggested retail price is NOT the best policy—it treats symptoms rather than causes. A combination of short-term imports and long-term supply improvements would be more effective."
 },
 {
 id: "q1e",
 part: "(e)",
 text: "Assess the extent to which the increase in onion prices is likely to have affected all households equally in the Philippines.",
 marks: 6,
 relevantParagraph: 3,
 answerBlueprint: {
 knowledge: ["Income elasticity of demand", "Engel's Law"],
 analysis: ["Lower-income households spend higher proportion on food", "Substitution possibilities differ by income"],
 evaluation: ["Magnitude of price increase", "Regional variations", "Producer households may benefit"]
 },
 modelAnswer: "The increase in onion prices would NOT affect all households equally. The impact varies by income level, occupation, and location.\n\nDifferential impact by income:\n1. Engel's Law: Lower-income households spend a higher proportion of income on food (40-60% vs 10-20% for wealthy households)\n2. An 775% price increase for a staple ingredient has proportionally greater impact on poor households\n3. Substitution possibilities: Wealthy households can easily switch to imported onions or other ingredients; poor households face harder trade-offs\n\nDifferential impact by occupation:\n1. Onion farmers and sellers may actually benefit from higher prices (if they have stock to sell)\n2. Urban consumers are net losers\n3. Agricultural laborers may not benefit if they're paid fixed wages\n\nRegional variations:\n1. Areas with local production may face smaller increases than import-dependent regions\n2. Remote areas may face highest prices due to transport costs\n\nQuantifying the impact:\n- For a household spending 5% of income on onions, the price increase means food costs rise by approximately 35% (5% × 775%/100)\n- This could push vulnerable households below the poverty line\n\nEvaluation:\n- The increase is clearly regressive (hurts poor more than rich)\n- Government intervention is justified on equity grounds\n- The magnitude is so extreme that even middle-class households are affected\n- This explains why it became a major political issue\n\nConclusion: The price increase had highly unequal effects, disproportionately harming lower-income urban households while potentially benefiting farmers with stock to sell."
 }
 ]
 }
];

export const getQuestionSkillLevel = (marks: number): string => {
 if (marks <= 2) return "Knowledge";
 if (marks <= 4) return "Knowledge + Analysis";
 return "Knowledge + Analysis + Evaluation";
};

export const getDifficulty = (marks: number): "Easy" | "Medium" | "Hard" => {
 if (marks <= 2) return "Easy";
 if (marks <= 4) return "Medium";
 return "Hard";
};
