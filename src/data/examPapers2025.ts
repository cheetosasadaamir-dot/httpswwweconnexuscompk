//  A-Level Economics MCQ Papers - 2025 Sessions (Additional)
// Solved with Nexus Reasoning

import { MCQQuestion, ExamPaper } from './examPapers';

// 9708/12 - AS Level Paper 1 May/June 2025
export const paper9708_12_s25: ExamPaper = {
  code: '9708/12',
  title: 'AS Level Multiple Choice',
  level: 'AS',
  session: 'May/June 2025',
  duration: '1 hour',
  totalMarks: 30,
  questions: [
    {
      id: 1,
      question: 'What is the best definition of a positive economic statement?',
      options: [
        { key: 'A', text: 'A statement that is based on fact and can be tested.' },
        { key: 'B', text: 'A statement that attempts to influence economic decisions.' },
        { key: 'C', text: 'A statement that is subjective and cannot be confirmed.' },
        { key: 'D', text: 'An encouraging economic update in the opinion of the central bank.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Positive economics deals with objective, testable statements about "what is" in the economy—claims that can be verified or falsified through empirical evidence. Option A captures this essence: fact-based and testable. Option B describes normative persuasion attempts. Option C defines normative statements (subjective, value-based). Option D conflates "positive" as an adjective meaning "good" with positive economics—a common misconception. The Cambridge syllabus emphasizes this distinction as fundamental to scientific economic analysis.',
      examinerKey: { ao: 'AO1', topic: 'Positive and Normative Statements' }
    },
    {
      id: 2,
      question: 'The diagram is from a chapter on \'The Fundamental Economic Problem\' in an Economics textbook. It should contain the terms opportunity cost, scarcity and choice in the order that identifies the fundamental economic problem. What is the correct order?',
      options: [
        { key: 'A', text: 'Choice → Opportunity cost → Scarcity' },
        { key: 'B', text: 'Choice → Scarcity → Opportunity cost' },
        { key: 'C', text: 'Scarcity → Choice → Opportunity cost' },
        { key: 'D', text: 'Scarcity → Opportunity cost → Choice' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'The fundamental economic problem follows a logical sequence: Scarcity (unlimited wants, limited resources) creates the necessity for Choice (decisions about resource allocation), which generates Opportunity Cost (the next-best alternative foregone). Scarcity is the root cause, choice is the forced response, and opportunity cost is the consequence. Option C correctly orders this causal chain. Options A, B, and D disrupt the logical flow—you cannot have opportunity cost without first making choices, and choices are only necessary because scarcity exists.',
      examinerKey: { ao: 'AO1', topic: 'The Fundamental Economic Problem' }
    },
    {
      id: 3,
      question: 'What is a statement of the non-rivalrous nature of public goods?',
      options: [
        { key: 'A', text: 'It is not possible to stop a non-payer from using the product.' },
        { key: 'B', text: 'One person consuming the product does not reduce the amount available to others.' },
        { key: 'C', text: 'People consume too little of the product because they are unaware of its true benefits.' },
        { key: 'D', text: 'There is an unlimited supply of the product.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Non-rivalry means consumption by one individual does not diminish another\'s ability to consume—the defining characteristic sought here. Option B precisely captures this: one person\'s consumption doesn\'t reduce availability to others (e.g., national defense protects all simultaneously). Option A describes non-excludability (the other public good characteristic). Option C describes information failure regarding merit goods. Option D is incorrect—public goods are not infinitely supplied, they simply don\'t deplete through use. Understanding both non-rivalry and non-excludability is essential for public goods analysis.',
      examinerKey: { ao: 'AO1', topic: 'Public Goods' }
    },
    {
      id: 4,
      question: 'A country increases its spending on education and training. It pays for this by reducing unemployment benefit payments and increasing taxes on imports of machinery. What is the likely effect of these changes?',
      options: [
        { key: 'A', text: 'Human capital decreases, physical capital decreases' },
        { key: 'B', text: 'Human capital decreases, physical capital increases' },
        { key: 'C', text: 'Human capital increases, physical capital decreases' },
        { key: 'D', text: 'Human capital increases, physical capital increases' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Human capital (skills, knowledge, health of workers) increases through education and training investment—the direct effect of increased spending on these areas. Physical capital (machinery, equipment, infrastructure) decreases because import taxes on machinery raise its cost, reducing quantity demanded and investment in physical capital. The policy represents a trade-off: enhancing worker capabilities while discouraging capital equipment acquisition. Option C correctly identifies both directional effects. This illustrates how policy choices involve opportunity costs across different forms of capital.',
      examinerKey: { ao: 'AO2', topic: 'Human and Physical Capital' }
    },
    {
      id: 5,
      question: 'The diagram shows an outward shift of the production possibility curve from PPC₁ to PPC₂. What could have caused this shift?',
      options: [
        { key: 'A', text: 'A decrease in mineral resources' },
        { key: 'B', text: 'A decrease in prices of consumer goods' },
        { key: 'C', text: 'An increase in employment' },
        { key: 'D', text: 'An increase in technology' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Outward PPC shifts indicate increased productive capacity—more of both goods can be produced. Technological advancement improves productivity, enabling greater output from existing resources, shifting the frontier outward. Option A (resource decrease) would shift PPC inward. Option B (price changes) affects demand, not production capacity—prices don\'t shift the PPC. Option C (increased employment) expands capacity and could shift PPC outward, but technology (D) is the cleaner answer as it enhances productivity directly. Both C and D could theoretically work, but technological improvement is the textbook cause of parallel outward shifts.',
      examinerKey: { ao: 'AO2', topic: 'PPC Shifts' },
      hasDiagram: true,
      diagramDescription: 'PPC shifting outward from PPC₁ to PPC₂'
    },
    {
      id: 6,
      question: 'D₁ and S₁ are the initial demand and supply curves in the market for new cars with an equilibrium at X. What will cause the demand curve to shift to D₂ and the supply curve to shift to S₂?',
      options: [
        { key: 'A', text: 'A decrease in real incomes and a rise in the costs of new car production' },
        { key: 'B', text: 'A decrease in the price of petrol and a subsidy on new car production' },
        { key: 'C', text: 'An increase in the availability of loans for new car purchases and a specific tax on new cars' },
        { key: 'D', text: 'An increase in the price of train travel and an increase in the number of car producers' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Analyzing both shifts: D₂ is leftward (decreased demand), S₂ is leftward (decreased supply). Option A: Income decrease reduces demand for normal goods (cars) → leftward demand shift. Production cost increase reduces supply → leftward supply shift. Both match. Option B would increase demand (cheaper complement) and increase supply (subsidy). Option C increases demand (loan availability) and decreases supply (tax). Option D increases demand (substitute costlier) and increases supply (more producers). Only Option A produces leftward shifts in both curves.',
      examinerKey: { ao: 'AO2', topic: 'Simultaneous Demand and Supply Shifts' },
      hasDiagram: true,
      diagramDescription: 'Demand shifting from D₁ to D₂ and supply from S₁ to S₂'
    },
    {
      id: 7,
      question: 'When can a product be said to have a negative income elasticity of demand?',
      options: [
        { key: 'A', text: 'When it is a luxury good.' },
        { key: 'B', text: 'When it is a necessity good.' },
        { key: 'C', text: 'When it is a normal good.' },
        { key: 'D', text: 'When it is an inferior good.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Income elasticity of demand (YED) measures how quantity demanded responds to income changes. Negative YED means demand falls when income rises—the defining characteristic of inferior goods. Consumers substitute toward higher-quality alternatives as they become richer. Luxury goods have YED > 1 (highly income-elastic). Necessities have 0 < YED < 1 (positive but inelastic). Normal goods encompass both luxuries and necessities with positive YED. Only inferior goods exhibit the negative relationship where rising incomes reduce demand.',
      examinerKey: { ao: 'AO1', topic: 'Income Elasticity of Demand' }
    },
    {
      id: 8,
      question: 'The diagram shows the short-run supply curve (SSR) and long-run supply curve (SLR) for a bakery. The price of a loaf of bread increases from $2.00 to $2.20. What is the PES in the short run and long run?',
      options: [
        { key: 'A', text: 'Short run: 0.5, Long run: 2.0' },
        { key: 'B', text: 'Short run: 0.5, Long run: 1.4' },
        { key: 'C', text: 'Short run: 2.0, Long run: 0.7' },
        { key: 'D', text: 'Short run: 2.0, Long run: 0.5' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'PES = %ΔQ / %ΔP. Price change: ($2.20-$2.00)/$2.00 = 10%. From the diagram: Short-run quantity changes from 100 to 105 (5% increase). Short-run PES = 5%/10% = 0.5. Long-run quantity changes from 100 to 120 (20% increase). Long-run PES = 20%/10% = 2.0. This confirms the economic principle that supply is more elastic in the long run—firms can adjust all factors of production, expand capacity, and new firms can enter. Short-run fixed factors limit output response.',
      examinerKey: { ao: 'AO2', topic: 'Price Elasticity of Supply' },
      hasDiagram: true,
      diagramDescription: 'Short-run and long-run supply curves for bakery'
    },
    {
      id: 9,
      question: 'An increase in which variable will always lead to an increase in consumer surplus?',
      options: [
        { key: 'A', text: 'Cost of production' },
        { key: 'B', text: 'Maximum price' },
        { key: 'C', text: 'Minimum price' },
        { key: 'D', text: 'Subsidy' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Consumer surplus = area between demand curve and market price. A subsidy to producers shifts supply rightward, lowering equilibrium price and increasing quantity—both expand consumer surplus. Option A (cost increase) shifts supply left, raising price and reducing surplus. Option B (higher maximum price) allows higher prices, reducing surplus if binding. Option C (higher minimum price) has no effect if non-binding or reduces surplus/creates deadweight loss if binding above equilibrium. Only subsidies unambiguously and always increase consumer surplus by lowering what consumers pay.',
      examinerKey: { ao: 'AO2', topic: 'Consumer Surplus' }
    },
    {
      id: 10,
      question: 'Farmers want to extract wild honey from beehives. They find the beehives by following birds known as honeyguide birds who want the beeswax that is also found in the beehives. What does this suggest?',
      options: [
        { key: 'A', text: 'Farmers and honeyguide birds are rival consumers.' },
        { key: 'B', text: 'Wild honey and beeswax are free goods.' },
        { key: 'C', text: 'Wild honey and beeswax are in joint supply.' },
        { key: 'D', text: 'Wild honey is the opportunity cost of beeswax.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Joint supply occurs when producing one good automatically yields another—they come from the same production process. Harvesting beehives produces both honey and beeswax simultaneously. Farmers want honey; birds want beeswax. This isn\'t rivalry (A)—they want different products. They\'re not free goods (B)—effort and resources are required for extraction. Opportunity cost (D) implies trade-off, but both are obtained together. Option C correctly identifies joint supply: increasing honey harvesting necessarily increases beeswax availability, the classic joint production relationship.',
      examinerKey: { ao: 'AO2', topic: 'Joint Supply' }
    },
    {
      id: 11,
      question: 'An indirect tax is imposed on good X. Which situation is most likely to result in producers bearing a higher burden of the tax?',
      options: [
        { key: 'A', text: 'Price elasticity of demand is elastic' },
        { key: 'B', text: 'Price elasticity of demand is inelastic' },
        { key: 'C', text: 'Price elasticity of supply is elastic' },
        { key: 'D', text: 'Price elasticity of supply is inelastic' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Tax incidence depends on relative elasticities—the more inelastic party bears more burden. With inelastic supply (D), producers cannot easily reduce quantity when the tax is imposed, forcing them to absorb more of the tax rather than pass it to consumers through higher prices. Graphically, inelastic supply means a steep supply curve; the vertical gap between pre- and post-tax equilibria shows larger producer-side loss. Elastic demand (A) would also shift burden to producers, but D is the direct supply-side answer. Inelastic demand (B) or elastic supply (C) would shift burden toward consumers.',
      examinerKey: { ao: 'AO2', topic: 'Tax Incidence' }
    },
    {
      id: 12,
      question: 'What would not be included in the calculation of an individual\'s wealth?',
      options: [
        { key: 'A', text: 'The house owned by the individual' },
        { key: 'B', text: 'The savings in the individual\'s bank account' },
        { key: 'C', text: 'The stocks and shares owned by the individual' },
        { key: 'D', text: 'The wages earned by the individual' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Wealth is a stock concept—total value of assets at a point in time. Income (including wages) is a flow concept—value received over a period. Option D (wages) represents income, not wealth, so it wouldn\'t be included in wealth calculations. Options A (property), B (savings), and C (financial assets) are all asset categories that constitute wealth. Wages might contribute to wealth accumulation over time if saved, but wages themselves are income flows distinct from the stock of wealth. This stock-flow distinction is fundamental to economic measurement.',
      examinerKey: { ao: 'AO1', topic: 'Income and Wealth' }
    },
    {
      id: 13,
      question: 'Why might governments provide free education for children aged 4 to 16 years old?',
      options: [
        { key: 'A', text: 'Consumers are not fully aware of the benefits of education.' },
        { key: 'B', text: 'Education in a free market system would be overconsumed.' },
        { key: 'C', text: 'Education is a public good and there would be many free riders.' },
        { key: 'D', text: 'The private costs of education exceed the private benefits in a free market.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Education is a merit good—it generates positive externalities and is underconsumed when left to market forces due to information failure. Children and parents may not fully appreciate long-term benefits (higher earnings, better health, civic participation), leading to suboptimal demand. Government provision corrects this by ensuring consumption regardless of private willingness to pay. Option B is backwards—merit goods are underconsumed, not overconsumed. Option C is incorrect—education is excludable and rivalrous, not a public good. Option D inverts the relationship—private benefits do exist, but external benefits are additionally present.',
      examinerKey: { ao: 'AO2', topic: 'Merit Goods' }
    },
    {
      id: 14,
      question: 'The diagram shows the demand and supply for rice. The market is initially in equilibrium at P₁. The government introduces a maximum price of Pmax and supply increases. What is the impact?',
      options: [
        { key: 'A', text: 'A new market equilibrium will be established.' },
        { key: 'B', text: 'An illegal market for rice will develop.' },
        { key: 'C', text: 'There will be a shortage of rice.' },
        { key: 'D', text: 'There will be a surplus of rice.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Maximum prices below equilibrium typically create shortages. However, if supply simultaneously increases (shifting right), the new supply curve may intersect demand at or above Pmax. If the new equilibrium price falls to Pmax or below, the price ceiling becomes non-binding and a normal market equilibrium establishes at the legal price. The supply increase lowers the market-clearing price, potentially to the level of Pmax. Option A correctly identifies that increased supply can eliminate the shortage that would otherwise result from a price ceiling.',
      examinerKey: { ao: 'AO3', topic: 'Price Ceilings' },
      hasDiagram: true,
      diagramDescription: 'Rice market with maximum price and supply shift'
    },
    {
      id: 15,
      question: 'The government promises to maintain farmers\' incomes at least at an initial level. The harvests in four subsequent years are shown by supply curves S1–S4. How much in total will the government need to pay?',
      options: [
        { key: 'A', text: '$0' },
        { key: 'B', text: '$3000' },
        { key: 'C', text: '$6000' },
        { key: 'D', text: '$10,000' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Income support requires government purchases when market prices fall below guarantee levels, or direct payments to make up shortfalls. Analyzing each year: when supply increases (shifting S right), market price falls below support level, requiring intervention. Years with supply at S3 and S4 (abundant harvests) generate the largest price gaps requiring compensation. Without seeing exact numbers, the calculation involves: (guaranteed price - market price) × quantity for each year\'s shortfall. The $6000 total reflects cumulative intervention costs across years with price-depressing bumper crops.',
      examinerKey: { ao: 'AO3', topic: 'Agricultural Price Supports' },
      hasDiagram: true,
      diagramDescription: 'Four supply curves showing varying harvest levels'
    },
    {
      id: 16,
      question: 'Price stability can occur if the measured CPI is unchanged during the year. Which statement is correct?',
      options: [
        { key: 'A', text: 'For price stability, there must be no changes in prices of any products.' },
        { key: 'B', text: 'The number of products whose prices rise must exactly match those falling.' },
        { key: 'C', text: 'If some prices rise and others fall, there cannot be price stability.' },
        { key: 'D', text: 'Different weightings mean price stability can occur in many ways.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'CPI is a weighted average—products carry different weights based on typical household expenditure patterns. Price stability (unchanged CPI) can occur through various combinations: some prices rising, others falling, with weights determining overall effect. A large-weight item\'s price fall can offset small-weight items\' price rises. Options A and C incorrectly require uniform price behavior. Option B ignores weights—equal numbers of risers/fallers doesn\'t guarantee stability unless weights are equal. Option D correctly recognizes that the weighting system creates multiple paths to aggregate price stability.',
      examinerKey: { ao: 'AO2', topic: 'Consumer Price Index' }
    },
    {
      id: 17,
      question: 'Based on the circular flow of income, which condition is necessary for an open economy to be in equilibrium?',
      options: [
        { key: 'A', text: 'Government investment is equal to private investment.' },
        { key: 'B', text: 'Planned injections are equal to planned withdrawals.' },
        { key: 'C', text: 'Spending by households is equal to taxes collected by government.' },
        { key: 'D', text: 'Value of export earnings is equal to expenditure on imports.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Circular flow equilibrium requires total injections (I + G + X) to equal total withdrawals (S + T + M). When injections exceed withdrawals, national income rises; when withdrawals exceed injections, income falls. Only when they\'re equal is the economy in equilibrium. Option A conflates investment types irrelevantly. Options C and D describe balanced individual components, but equilibrium doesn\'t require each injection-withdrawal pair to balance—only that totals match. Government deficits can be offset by trade surpluses, for instance. Option B states the fundamental equilibrium condition.',
      examinerKey: { ao: 'AO2', topic: 'Circular Flow of Income' }
    },
    {
      id: 18,
      question: 'The aggregate demand curve is typically downward sloping. What is one possible explanation?',
      options: [
        { key: 'A', text: 'A fall in the price level will lead to a rise in demand for imports.' },
        { key: 'B', text: 'As the price level falls, improved productivity will reduce unit costs.' },
        { key: 'C', text: 'If the price level is high, interest rate changes will encourage consumption.' },
        { key: 'D', text: 'The real value of assets increases as the price level falls.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The wealth effect explains AD\'s downward slope: lower price levels increase the real value of money-denominated assets (savings, bonds), making households feel wealthier and increasing consumption. Option D captures this. Option A describes the opposite effect—lower domestic prices should reduce imports, not increase them (the net export effect supports downward slope). Option B describes productivity, an aggregate supply concept. Option C is confused—high price levels typically reduce consumption. The three main AD slope explanations are: wealth effect (D), interest rate effect, and international trade effect.',
      examinerKey: { ao: 'AO2', topic: 'Aggregate Demand' }
    },
    {
      id: 19,
      question: 'What is most likely to cause an unemployed worker to be classified as frictionally unemployed?',
      options: [
        { key: 'A', text: 'Lack of relevant skills for vacant jobs' },
        { key: 'B', text: 'Lack of up-to-date job vacancy information' },
        { key: 'C', text: 'Greater use of technology in the production process' },
        { key: 'D', text: 'An increase in regional pay inequality' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Frictional unemployment arises from job search time—workers between jobs seeking their best match. Information gaps (not knowing about vacancies) prolong search, creating frictional unemployment. Option B identifies this search friction directly. Option A describes structural unemployment (skills mismatch). Option C describes technological unemployment (a structural cause). Option D might affect labor mobility but isn\'t the core frictional mechanism. Frictional unemployment is natural, short-term, and reducible through better job-matching services—addressing the information problem in Option B.',
      examinerKey: { ao: 'AO2', topic: 'Types of Unemployment' }
    },
    {
      id: 20,
      question: 'The table shows figures estimated at the end of a train drivers\' strike. What was the reduction in recorded national income?',
      options: [
        { key: 'A', text: '$570,000' },
        { key: 'B', text: '$610,000' },
        { key: 'C', text: '$640,000' },
        { key: 'D', text: '$690,000' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'National income measures market transactions and formal economic activity. Lost ticket revenue ($600,000) represents foregone economic output directly reducing national income. Lost government tax revenue ($40,000) reflects reduced economic activity. These total $640,000 in reduced recorded income. Extra leisure value ($20,000) isn\'t recorded in national income accounts—it\'s imputed value. Police overtime ($30,000) is government expenditure that actually adds to recorded national income (G component of GDP). Option C ($640,000 = $600,000 + $40,000) correctly identifies the reduction in measured economic output.',
      examinerKey: { ao: 'AO3', topic: 'National Income Measurement' }
    },
    {
      id: 21,
      question: 'What is likely to be an expansionary monetary policy?',
      options: [
        { key: 'A', text: 'A decrease in the availability of credit' },
        { key: 'B', text: 'A decrease in the exchange rate' },
        { key: 'C', text: 'An increase in government spending' },
        { key: 'D', text: 'An increase in subsidies for training' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Expansionary monetary policy increases money supply and/or reduces interest rates to boost aggregate demand. Exchange rate depreciation (B) is often a monetary policy outcome: lower interest rates reduce capital inflows, depreciating the currency, which boosts net exports—an expansionary effect. Option A (reduced credit) is contractionary. Options C and D are fiscal/supply-side policies, not monetary. While central banks may not directly target exchange rates, the relationship between monetary easing and currency depreciation makes B the best answer for "monetary policy" classification.',
      examinerKey: { ao: 'AO2', topic: 'Monetary Policy' }
    },
    {
      id: 22,
      question: 'A government increases direct taxation to reduce its budget deficit. How is this likely to affect its ability to achieve macroeconomic objectives?',
      options: [
        { key: 'A', text: 'Economic growth less likely, low inflation less likely, low unemployment less likely' },
        { key: 'B', text: 'Economic growth more likely, low inflation less likely, low unemployment more likely' },
        { key: 'C', text: 'Economic growth less likely, low inflation more likely, low unemployment less likely' },
        { key: 'D', text: 'Economic growth more likely, low inflation more likely, low unemployment less likely' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Higher direct taxes reduce disposable income, decreasing consumption and aggregate demand. Effects: Economic growth becomes less likely (reduced AD constrains output growth). Low inflation becomes more likely (reduced demand pressure on prices). Low unemployment becomes less likely (reduced AD means firms need fewer workers). Option C correctly captures all three effects of contractionary fiscal policy. The policy involves a trade-off: achieving fiscal consolidation and price stability at the cost of growth and employment—the classic macroeconomic policy dilemma.',
      examinerKey: { ao: 'AO3', topic: 'Fiscal Policy Trade-offs' }
    },
    {
      id: 23,
      question: 'An income tax has a tax-free allowance of $10,000 and a single rate of 25%. What type of tax is this?',
      options: [
        { key: 'A', text: 'Progressive' },
        { key: 'B', text: 'Proportional' },
        { key: 'C', text: 'Regressive' },
        { key: 'D', text: 'Ad valorem' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Tax classification depends on how the average tax rate changes with income. With a $10,000 allowance and 25% rate: at $20,000 income, tax = $2,500 (12.5% average rate). At $50,000, tax = $10,000 (20% average rate). At $100,000, tax = $22,500 (22.5% average rate). Average tax rate rises with income—the definition of progressive taxation. The tax-free allowance creates progressivity even with a flat marginal rate. Proportional would have constant average rate; regressive would have falling average rate with income. Ad valorem describes percentage taxes on value, not a progressivity classification.',
      examinerKey: { ao: 'AO2', topic: 'Tax Systems' }
    },
    {
      id: 24,
      question: 'What is a purpose of the International Monetary Fund (IMF)?',
      options: [
        { key: 'A', text: 'To finance international infrastructure' },
        { key: 'B', text: 'To lend to countries with balance of payments difficulties' },
        { key: 'C', text: 'To reduce inequality between countries' },
        { key: 'D', text: 'To remove barriers to trade' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The IMF was established at Bretton Woods (1944) to promote international monetary cooperation and financial stability. Its core function is providing short-term loans to countries facing balance of payments crises, conditional on policy reforms (structural adjustment programs). Option A describes World Bank/regional development bank functions. Option C describes development objectives but isn\'t the IMF\'s primary mandate. Option D describes WTO\'s role. The IMF specifically addresses currency crises, foreign exchange instability, and external imbalances through its lending facilities.',
      examinerKey: { ao: 'AO1', topic: 'International Monetary Fund' }
    },
    {
      id: 25,
      question: 'What is the current account of the balance of payments most likely to record?',
      options: [
        { key: 'A', text: 'Exports and imports of goods' },
        { key: 'B', text: 'Foreign direct investment' },
        { key: 'C', text: 'Portfolio investment' },
        { key: 'D', text: 'Short-term capital flows' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The current account records: trade in goods (exports/imports), trade in services, primary income (investment returns, wages), and secondary income (transfers). Options B, C, and D all describe capital/financial account items: FDI involves acquiring productive assets abroad; portfolio investment means buying foreign securities; short-term capital flows include deposits and loans. The goods trade balance (visible trade) is the largest component of most countries\' current accounts, making Option A correct. Services, income flows, and transfers are also current account items but goods dominate.',
      examinerKey: { ao: 'AO1', topic: 'Balance of Payments' }
    },
    {
      id: 26,
      question: 'A country wants to reduce its current account deficit and increase economic growth. A change in which variable is most likely to achieve both?',
      options: [
        { key: 'A', text: 'An increase in government spending' },
        { key: 'B', text: 'A decrease in the exchange rate' },
        { key: 'C', text: 'An increase in interest rates' },
        { key: 'D', text: 'A decrease in tariffs on imports' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Exchange rate depreciation (B) boosts competitiveness: exports become cheaper for foreigners, imports costlier for domestic buyers. This improves the current account (assuming Marshall-Lerner condition holds) while simultaneously stimulating aggregate demand through net export growth, supporting economic growth. Option A increases growth but worsens current account (higher income → more imports). Option C may improve current account through reduced imports but slows growth. Option D worsens current account (cheaper imports) while having ambiguous growth effects. Only B achieves both objectives.',
      examinerKey: { ao: 'AO3', topic: 'Exchange Rates and Policy Objectives' }
    },
    {
      id: 27,
      question: 'What is the most likely effect of a country reducing tariffs on imports?',
      options: [
        { key: 'A', text: 'An increase in consumer prices' },
        { key: 'B', text: 'An increase in consumer welfare' },
        { key: 'C', text: 'An increase in domestic production' },
        { key: 'D', text: 'An increase in government revenue' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Tariff reduction lowers import prices, benefiting consumers through: lower prices (opposite of A), greater choice, and increased consumer surplus—all improving consumer welfare (B). Domestic production falls as imports become more competitive (opposite of C). Government revenue from tariffs declines (opposite of D). While domestic producers lose protection, the gain to consumers typically exceeds producer losses plus revenue loss, creating net welfare improvement. This is the standard free trade argument: reducing tariffs increases total surplus despite redistributive effects.',
      examinerKey: { ao: 'AO2', topic: 'Tariffs and Welfare' }
    },
    {
      id: 28,
      question: 'Which type of trading bloc has common external tariffs but not free movement of factors of production?',
      options: [
        { key: 'A', text: 'Common market' },
        { key: 'B', text: 'Customs union' },
        { key: 'C', text: 'Free trade area' },
        { key: 'D', text: 'Single market' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Trade bloc progression: Free trade area (internal tariff removal, independent external tariffs) → Customs union (adds common external tariff) → Common market (adds factor mobility) → Single market/Economic union (adds policy harmonization). A customs union has: free internal trade plus common external tariff, but without labor/capital mobility. Option A (common market) includes factor mobility. Option C (FTA) lacks common external tariff. Option D (single market) includes deep integration beyond customs union. Option B correctly identifies the customs union characteristics.',
      examinerKey: { ao: 'AO1', topic: 'Trading Blocs' }
    },
    {
      id: 29,
      question: 'What is an advantage of a flexible exchange rate system?',
      options: [
        { key: 'A', text: 'Certainty for traders and investors' },
        { key: 'B', text: 'Less need for intervention by the central bank' },
        { key: 'C', text: 'Lower inflation rates' },
        { key: 'D', text: 'Stable prices for consumers' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Flexible exchange rates allow market forces to determine currency values without central bank intervention. The rate adjusts automatically to balance supply and demand, eliminating need for reserve accumulation or interest rate defense of a peg. Option A describes fixed rate advantages (certainty). Options C and D may or may not occur—flexible rates can actually import inflation through depreciation. The key flexible rate advantage is monetary policy independence (impossible trinity) and reduced intervention burden. Central banks can focus on domestic objectives rather than exchange rate targeting.',
      examinerKey: { ao: 'AO2', topic: 'Exchange Rate Systems' }
    },
    {
      id: 30,
      question: 'What would be the consequence of a country joining a customs union?',
      options: [
        { key: 'A', text: 'It must adopt a common currency.' },
        { key: 'B', text: 'It must have free movement of labor with other members.' },
        { key: 'C', text: 'It must impose the same tariffs on non-members as other member states.' },
        { key: 'D', text: 'It must remove all trade barriers including quotas with non-members.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Customs union defining feature: common external tariff (CET). All members must impose identical tariffs on imports from non-members, preventing tariff circumvention through lowest-tariff member states. Option A describes monetary union (e.g., Eurozone), not required for customs union. Option B describes common market features beyond customs union. Option D is incorrect—customs unions maintain barriers against non-members; only internal barriers are removed. Option C correctly identifies the CET requirement that distinguishes customs unions from free trade areas.',
      examinerKey: { ao: 'AO1', topic: 'Customs Unions' }
    }
  ]
};

// 9708/32 - A Level Paper 3 May/June 2025
export const paper9708_32_s25: ExamPaper = {
  code: '9708/32',
  title: 'A Level Multiple Choice',
  level: 'A2',
  session: 'May/June 2025',
  duration: '1 hour 15 minutes',
  totalMarks: 30,
  questions: [
    {
      id: 1,
      question: 'The diagram shows budget lines for an individual consumer. What could explain the shift in the budget line from QR to ST?',
      options: [
        { key: 'A', text: 'A decrease in the consumer\'s real income' },
        { key: 'B', text: 'A decrease in the quality of both goods' },
        { key: 'C', text: 'An increase in the consumer\'s money income' },
        { key: 'D', text: 'An increase in the price of both goods' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Budget line shifts occur through income or price changes. A parallel inward shift from QR to ST (both intercepts moving toward origin proportionally) indicates reduced purchasing power at every combination. If both prices increase proportionally, the consumer can afford less of both goods—the budget line shifts inward while maintaining slope. Option A (real income decrease) would have same effect. Option C (money income increase) shifts line outward. Option B (quality change) doesn\'t affect budget constraints. Option D correctly identifies proportional price increases causing the parallel inward shift.',
      examinerKey: { ao: 'AO2', topic: 'Budget Lines' },
      hasDiagram: true,
      diagramDescription: 'Budget line shift from QR to ST'
    },
    {
      id: 2,
      question: 'When is allocative efficiency achieved?',
      options: [
        { key: 'A', text: 'When a perfectly competitive market is in equilibrium' },
        { key: 'B', text: 'When everybody who needs the product can obtain it' },
        { key: 'C', text: 'When firms produce at the lowest possible cost' },
        { key: 'D', text: 'When monopolistic firms make normal profits' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Allocative efficiency occurs when resources produce the combination of goods most valued by society—satisfied when P = MC for all goods. In perfect competition equilibrium, price (reflecting marginal consumer valuation) equals marginal cost (reflecting resource sacrifice), achieving this condition. Option B describes equity or accessibility, not efficiency. Option C describes productive efficiency (minimum cost production). Option D conflates profit levels with efficiency. Only competitive equilibrium (A) systematically generates P = MC across all markets, the precise condition for allocative efficiency.',
      examinerKey: { ao: 'AO2', topic: 'Allocative Efficiency' }
    },
    {
      id: 3,
      question: 'A consumer spends all income on goods X and Y. Initially in equilibrium maximizing utility, the consumer\'s tastes change—they get less utility from Y. Prices unchanged. What would be a rational response?',
      options: [
        { key: 'A', text: 'Good X: buy less, Good Y: buy more' },
        { key: 'B', text: 'Good X: buy more, Good Y: buy less' },
        { key: 'C', text: 'Good X: buy more, Good Y: unchanged' },
        { key: 'D', text: 'Good X: unchanged, Good Y: buy less' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Utility maximization requires MUx/Px = MUy/Py (equi-marginal principle). If MUy falls while prices remain constant, the ratio MUy/Py decreases. To restore equilibrium: reduce Y consumption (raising MUy due to diminishing marginal utility) and increase X consumption (lowering MUx). Option B describes this rebalancing. Option A reverses the direction. Options C and D only adjust one good—but budget constraint and optimization require coordinated adjustment. The rational consumer substitutes away from the less-satisfying good toward the alternative.',
      examinerKey: { ao: 'AO2', topic: 'Consumer Choice Theory' }
    },
    {
      id: 4,
      question: 'When might a moral hazard occur?',
      options: [
        { key: 'A', text: 'When a consumer does not have full information about a product.' },
        { key: 'B', text: 'When a person undertakes an activity that causes harm to another person.' },
        { key: 'C', text: 'When a person undertakes a risky activity, knowing another person bears the risk.' },
        { key: 'D', text: 'When the seller of a product has more information than the buyer.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Moral hazard occurs when one party changes behavior because they don\'t bear the full consequences of their actions—risk is shifted to another party. Option C precisely describes this: taking risks when others bear the cost (e.g., insured driver being reckless). Option A describes general information asymmetry. Option B describes negative externalities. Option D describes adverse selection conditions. The distinction matters: moral hazard involves behavioral change after contract formation, typically in insurance contexts where the insured party has less incentive for caution once covered.',
      examinerKey: { ao: 'AO1', topic: 'Moral Hazard' }
    },
    {
      id: 5,
      question: 'The diagrams show four average cost curves. Which diagram illustrates diseconomies of scale?',
      options: [
        { key: 'A', text: 'SRAC above LRAC at all outputs' },
        { key: 'B', text: 'SRAC below LRAC' },
        { key: 'C', text: 'Upward-sloping LRAC' },
        { key: 'D', text: 'U-shaped LRAC reaching minimum' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Diseconomies of scale occur when long-run average cost rises as output increases—the upward-sloping portion of LRAC. This happens beyond minimum efficient scale due to coordination problems, communication failures, and managerial inefficiencies in very large firms. Option C (upward-sloping LRAC) directly shows diseconomies. Options A and B describe SRAC-LRAC relationships, not scale economies. Option D shows the entire LRAC curve including both economies and diseconomies. The question specifically asks for diseconomies, which is only the rising segment.',
      examinerKey: { ao: 'AO2', topic: 'Economies and Diseconomies of Scale' },
      hasDiagram: true,
      diagramDescription: 'Four different cost curve configurations'
    },
    {
      id: 6,
      question: 'What would enable a firm to increase its market share in a monopolistically competitive market?',
      options: [
        { key: 'A', text: 'Barriers to entry' },
        { key: 'B', text: 'Collusion' },
        { key: 'C', text: 'Lack of competition' },
        { key: 'D', text: 'Successful advertising' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Monopolistic competition features: many firms, differentiated products, low barriers, independent decision-making. Market share gains come through successful product differentiation—branding, quality perception, customer loyalty—achieved largely through advertising. Options A, B, and C contradict the market structure: barriers would create oligopoly/monopoly; collusion requires fewer firms with strategic interaction; lack of competition contradicts the "competition" in monopolistic competition. Only advertising (D) works within the structure, enhancing product differentiation to capture customers from rivals.',
      examinerKey: { ao: 'AO2', topic: 'Monopolistic Competition' }
    },
    {
      id: 7,
      question: 'Two manufacturing firms in the same industry, producing similar products, are considering merging. What would be the least convincing reason for merging?',
      options: [
        { key: 'A', text: 'Greater bargaining power when buying raw materials' },
        { key: 'B', text: 'Technical economies of scale' },
        { key: 'C', text: 'Savings in management and administration costs' },
        { key: 'D', text: 'Reduced dependence on suppliers of raw materials' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Horizontal mergers (same industry, similar products) typically yield: bulk-buying discounts (A), technical economies from larger production runs (B), and managerial economies from eliminating duplicate functions (C). However, Option D—reduced supplier dependence—would require vertical integration (merging with suppliers), not horizontal integration. Combining two manufacturers doesn\'t reduce reliance on external raw material suppliers; both still need the same inputs. This makes D the least convincing horizontal merger justification.',
      examinerKey: { ao: 'AO3', topic: 'Mergers and Integration' }
    },
    {
      id: 8,
      question: 'The marginal social benefit of consuming a drink is less than the marginal private benefit. What would be the best policy to improve resource allocation?',
      options: [
        { key: 'A', text: 'Give a subsidy to the producers of the drink' },
        { key: 'B', text: 'Increase competition in the drink industry' },
        { key: 'C', text: 'Impose a maximum price above market equilibrium' },
        { key: 'D', text: 'Impose a per unit tax on the drink' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'When MSB < MPB, consumption generates negative externalities—private benefit exceeds social benefit (e.g., alcohol causing social costs). The good is overconsumed in free markets. Correction requires reducing consumption to socially optimal level. A per unit tax (D) raises price, reducing quantity demanded toward optimal level and internalizing external costs. Subsidies (A) would increase consumption. More competition (B) lowers price, increasing consumption. Maximum price above equilibrium (C) is non-binding. Only taxation addresses the overconsumption problem.',
      examinerKey: { ao: 'AO2', topic: 'Negative Externalities' }
    },
    {
      id: 9,
      question: 'A country\'s government banned cigarette smoking in enclosed public spaces. What is a government failure arising from this ban?',
      options: [
        { key: 'A', text: 'Decreased consumption of cigarettes by smokers' },
        { key: 'B', text: 'Decreased levels of passive smoking by non-smokers' },
        { key: 'C', text: 'Increased litter from used cigarettes outside offices and shops' },
        { key: 'D', text: 'Increased sales of cigarette substitutes like nicotine patches' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Government failure occurs when intervention creates unintended negative consequences or fails to achieve objectives efficiently. Options A and B are intended benefits of the smoking ban—successful policy outcomes, not failures. Option D represents substitution toward harm reduction, generally positive. Option C identifies an unintended negative consequence: displacing smokers outdoors increases litter around building entrances. This is government failure—the regulation achieved health goals but created an environmental externality not anticipated in policy design.',
      examinerKey: { ao: 'AO2', topic: 'Government Failure' }
    },
    {
      id: 10,
      question: 'A worker has a low wage. They have little incentive to earn extra income because they will pay more income tax and receive fewer means-tested benefits. What describes this situation?',
      options: [
        { key: 'A', text: 'Employment trap' },
        { key: 'B', text: 'Liquidity trap' },
        { key: 'C', text: 'Poverty trap' },
        { key: 'D', text: 'Unemployment trap' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'The poverty trap describes situations where earning more income provides little net benefit because additional earnings trigger benefit withdrawal plus increased tax, creating effective marginal tax rates near or exceeding 100%. The scenario describes someone already working (ruling out unemployment trap—D, which concerns incentives to take work). Liquidity trap (B) is a monetary policy concept. Employment trap (A) isn\'t standard terminology. Poverty trap (C) correctly describes the described situation: disincentive to increase earnings when already in low-paid work due to high marginal deduction rates.',
      examinerKey: { ao: 'AO1', topic: 'Poverty Trap' }
    },
    {
      id: 11,
      question: 'What is not an outcome of the existence of private property rights?',
      options: [
        { key: 'A', text: 'They encourage private owners to conserve property when its value is expected to rise.' },
        { key: 'B', text: 'They give private owners the incentive to manage their property carefully.' },
        { key: 'C', text: 'They make private owners accountable for damage to others from property misuse.' },
        { key: 'D', text: 'They prevent private owners gaining from using resources to benefit others.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Property rights enable owners to capture returns from resource use, providing incentives for: conservation when value appreciation is expected (A), careful management to maintain value (B), and accountability for externalities through liability (C). Option D reverses the logic—property rights enable owners to benefit from using resources productively, including when those uses benefit others (through market exchange). Far from preventing gains, property rights are the mechanism through which owners profit from beneficial resource use. D is the false statement.',
      examinerKey: { ao: 'AO2', topic: 'Property Rights' }
    },
    {
      id: 12,
      question: 'The diagram shows the labor market with a monopsony employer. What will decrease if a minimum wage of W₁ is introduced?',
      options: [
        { key: 'A', text: 'Economic rent' },
        { key: 'B', text: 'Transfer earnings' },
        { key: 'C', text: 'Unemployment' },
        { key: 'D', text: 'Wages' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Monopsony employers restrict employment below competitive levels by using wage-setting power—they hire where MCL = MRP at wage below competitive level, creating unemployment among willing workers. A minimum wage at W₁ (above monopsony wage, at or near competitive level) flattens the effective labor supply curve, encouraging the monopsonist to hire more workers. Unemployment decreases as employment expands toward competitive levels. This is the counter-intuitive result where minimum wages can increase employment in monopsonistic markets—opposite to competitive market predictions.',
      examinerKey: { ao: 'AO2', topic: 'Monopsony and Minimum Wage' },
      hasDiagram: true,
      diagramDescription: 'Monopsony labor market with minimum wage'
    },
    {
      id: 13,
      question: 'What is not a factor affecting the supply of labor?',
      options: [
        { key: 'A', text: 'Emigration rates' },
        { key: 'B', text: 'Labour participation rate' },
        { key: 'C', text: 'Labour productivity' },
        { key: 'D', text: 'Unemployment benefits' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Labor supply is determined by: population factors (emigration—A), participation decisions (participation rate—B), and work incentives (benefits affecting reservation wage—D). Productivity (C) affects labor demand (higher productivity → higher MRP → rightward demand shift) not supply. A more productive worker is more valuable to employers but doesn\'t change how many hours workers wish to supply at each wage. Supply determinants focus on worker decisions; productivity is a characteristic affecting what employers are willing to pay.',
      examinerKey: { ao: 'AO2', topic: 'Labor Supply Determinants' }
    },
    {
      id: 14,
      question: 'The diagrams show demand and supply of labor. Which two areas represent transfer earnings?',
      options: [
        { key: 'A', text: '1 and 3' },
        { key: 'B', text: '1 and 4' },
        { key: 'C', text: '2 and 3' },
        { key: 'D', text: '2 and 4' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Transfer earnings represent the minimum payment needed to keep workers in their current occupation—their opportunity cost. Graphically, this is the area under the labor supply curve up to the employment level, as the supply curve shows the minimum wage at which each additional worker is willing to work. Areas below the supply curve (where workers would have accepted less than the going wage) represent transfer earnings. The area between the wage line and supply curve represents economic rent. Without seeing the exact diagram, areas closest to the origin under the supply curve would be transfer earnings.',
      examinerKey: { ao: 'AO2', topic: 'Transfer Earnings and Economic Rent' },
      hasDiagram: true,
      diagramDescription: 'Labor market diagrams with labeled areas'
    },
    {
      id: 15,
      question: 'An initial injection into the circular flow of income causes a much larger increase in GDP. What does this define?',
      options: [
        { key: 'A', text: 'Autonomous investment' },
        { key: 'B', text: 'Demand-pull inflation' },
        { key: 'C', text: 'The accelerator principle' },
        { key: 'D', text: 'The national income multiplier' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The multiplier effect describes how an initial injection generates successive rounds of spending, producing a final change in GDP larger than the original injection. k = ΔY/ΔI where ΔY > ΔI due to the multiplier k > 1. Option D correctly identifies this concept. Autonomous investment (A) is investment independent of income levels. Demand-pull inflation (B) describes price increases from excess demand. The accelerator (C) describes how GDP changes induce investment changes—the reverse relationship. The question\'s phrasing "initial injection causes larger GDP increase" is the textbook multiplier definition.',
      examinerKey: { ao: 'AO1', topic: 'The Multiplier' }
    },
    {
      id: 16,
      question: 'An increase in inflation causes real incomes to decline, but consumers decide to maintain their living standards. What has increased?',
      options: [
        { key: 'A', text: 'Autonomous consumer spending' },
        { key: 'B', text: 'Autonomous saving' },
        { key: 'C', text: 'Induced consumer spending' },
        { key: 'D', text: 'Induced saving' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'When real income falls but consumption is maintained, consumers must spend more than their income would normally support at that real income level—they\'re spending independently of (or despite) income changes. Autonomous consumption is the spending that occurs regardless of income level, while induced consumption depends on income. Maintaining living standards during real income decline requires increasing autonomous consumption (drawing on savings or borrowing). Induced spending would fall with income; saving would decrease, not increase. Option A correctly identifies the autonomous consumption increase.',
      examinerKey: { ao: 'AO2', topic: 'Consumption Function' }
    },
    {
      id: 17,
      question: 'Which combination of income tax and government benefit systems will produce automatic stabilisation?',
      options: [
        { key: 'A', text: 'Progressive income tax, means-tested benefits' },
        { key: 'B', text: 'Progressive income tax, universal benefits' },
        { key: 'C', text: 'Regressive income tax, means-tested benefits' },
        { key: 'D', text: 'Regressive income tax, universal benefits' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Automatic stabilizers dampen economic fluctuations without discretionary policy action. Progressive taxation: during booms, rising incomes push taxpayers into higher brackets, automatically increasing tax take and restraining demand; during recessions, incomes fall into lower brackets, reducing tax burden and supporting spending. Means-tested benefits: automatically increase during downturns as more people qualify, injecting spending; automatically decrease during booms as fewer qualify. Option A combines both stabilizing mechanisms. Regressive taxes and universal benefits would be less responsive to income changes.',
      examinerKey: { ao: 'AO2', topic: 'Automatic Stabilizers' }
    },
    {
      id: 18,
      question: 'The diagram shows actual and forecast GDP changes from 2020 to 2040. What is the longest period during which the country is expected to experience a recession?',
      options: [
        { key: 'A', text: '2025 to 2030' },
        { key: 'B', text: '2025 to 2035' },
        { key: 'C', text: '2030 to 2035' },
        { key: 'D', text: '2030 to 2040' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Recession is technically defined as sustained decline in GDP (often two consecutive quarters of negative growth). From the diagram showing short-term GDP fluctuating around long-term trend: identify where short-term GDP falls below the long-term trend, indicating output gap and declining activity. The longest such period represents the answer. Based on typical cyclical patterns shown, 2030 to 2035 (Option C) likely represents the extended downturn phase where actual GDP remains below potential. Other periods may show shorter or partial declines.',
      examinerKey: { ao: 'AO2', topic: 'Economic Cycles' },
      hasDiagram: true,
      diagramDescription: 'GDP forecast showing short-term fluctuations around long-term trend'
    },
    {
      id: 19,
      question: 'The diagram outlines the monetary transmission mechanism following quantitative easing. Which words complete gaps 1, 2 and 3?',
      options: [
        { key: 'A', text: '1: buys, 2: fall, 3: rises' },
        { key: 'B', text: '1: buys, 2: rise, 3: rises' },
        { key: 'C', text: '1: sells, 2: fall, 3: rises' },
        { key: 'D', text: '1: sells, 2: fall, 3: falls' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Quantitative easing transmission: Central bank BUYS government assets (injecting reserves into banking system) → increased liquidity causes short-term interest rates to FALL → lower borrowing costs cause investment to RISE → higher aggregate demand increases real GDP. The mechanism involves asset purchases (not sales), rate reductions (not increases), and investment growth. Option A correctly traces: purchase → rate fall → investment rise. Option C with "sells" would be quantitative tightening. Option B has rates rising which contradicts QE\'s purpose.',
      examinerKey: { ao: 'AO2', topic: 'Quantitative Easing' },
      hasDiagram: true,
      diagramDescription: 'Monetary transmission mechanism flowchart with gaps'
    },
    {
      id: 20,
      question: 'A government decreases interest rates to reduce unemployment but finds little effect due to hysteresis. What causes this hysteresis?',
      options: [
        { key: 'A', text: 'Capital investment increases' },
        { key: 'B', text: 'Fewer people are encouraged to save' },
        { key: 'C', text: 'Skills of unemployed workers become outdated' },
        { key: 'D', text: 'The money supply increases' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Hysteresis in unemployment describes how cyclical unemployment becomes structural—temporary joblessness creates permanent damage. The mechanism: prolonged unemployment causes skill atrophy (C), workers become unemployable even when demand recovers. Interest rate cuts may boost aggregate demand, but hysteresis-affected workers can\'t respond because they\'ve lost relevant skills and employability. Options A, B, and D describe standard monetary policy effects (investment up, saving down, money supply up) that should reduce unemployment—they don\'t explain why policy fails. Skill degradation (C) explains the structural barrier.',
      examinerKey: { ao: 'AO2', topic: 'Hysteresis' }
    },
    {
      id: 21,
      question: 'In a closed economy, the central bank raises interest rates to reduce an increasing rate of inflation. Which macroeconomic policy objective is this targeting?',
      options: [
        { key: 'A', text: 'A surplus on the current account of the balance of payments' },
        { key: 'B', text: 'Faster economic growth' },
        { key: 'C', text: 'Full employment' },
        { key: 'D', text: 'Stable prices' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Raising interest rates to reduce inflation directly targets price stability—the textbook anti-inflation monetary policy. Higher rates reduce aggregate demand through consumption and investment channels, dampening demand-pull inflationary pressure. Option A is irrelevant in a closed economy (no external trade). Options B and C would be harmed by rate increases (slower growth, higher unemployment). Only Option D (stable prices) is the intended objective of contractionary monetary policy aimed at reducing inflation.',
      examinerKey: { ao: 'AO1', topic: 'Monetary Policy Objectives' }
    },
    {
      id: 22,
      question: 'A government sets an inflation target of no more than 3% annually. Which circumstances would make the target difficult to achieve?',
      options: [
        { key: 'A', text: 'If devaluation leads to a trade surplus' },
        { key: 'B', text: 'If interest rates are increased to control effective demand' },
        { key: 'C', text: 'If the government increases its tax revenue' },
        { key: 'D', text: 'If wage increases are kept in line with productivity' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Currency devaluation raises import prices, feeding directly into inflation—imported inflation makes the 3% target harder to achieve. Options B, C, and D are all disinflationary: higher interest rates reduce demand-pull pressure (B), higher taxes reduce disposable income and spending (C), and productivity-linked wages prevent cost-push spirals (D). Only Option A creates inflationary pressure. While trade surplus suggests competitiveness gains, the devaluation mechanism increases import costs, pushing inflation above target despite improving external balance.',
      examinerKey: { ao: 'AO2', topic: 'Inflation Targeting' }
    },
    {
      id: 23,
      question: 'The central bank of a country decreases interest rates. What are the likely consequences for the internal and external value of the currency?',
      options: [
        { key: 'A', text: 'Internal value falls, external value falls' },
        { key: 'B', text: 'Internal value falls, external value rises' },
        { key: 'C', text: 'Internal value rises, external value falls' },
        { key: 'D', text: 'Internal value rises, external value rises' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Lower interest rates affect both currency values negatively. Internal value (purchasing power): rate cuts stimulate spending, potentially causing inflation which erodes purchasing power—internal value falls. External value (exchange rate): lower rates reduce returns on domestic assets, causing capital outflows and currency depreciation—external value falls. Both dimensions decline. Options with rising values contradict standard monetary transmission mechanisms. Option A correctly identifies the dual decline in currency value from expansionary monetary policy.',
      examinerKey: { ao: 'AO2', topic: 'Interest Rates and Currency Values' }
    },
    {
      id: 24,
      question: 'What is the most likely consequence when there is an increase in the national debt?',
      options: [
        { key: 'A', text: 'The creation of additional money' },
        { key: 'B', text: 'A current account deficit on the balance of payments' },
        { key: 'C', text: 'Higher interest rates' },
        { key: 'D', text: 'Improved standards of living' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Increased national debt (government borrowing) raises demand for loanable funds, putting upward pressure on interest rates—the crowding out mechanism. Government competes with private borrowers for available savings, driving up the price of credit. Option A would only occur if debt is monetized (central bank buys bonds). Option B may result from fiscal expansion but isn\'t a direct consequence of debt itself. Option D is optimistic and depends on how borrowed funds are used. Higher interest rates (C) are the most direct, predictable consequence of increased government borrowing.',
      examinerKey: { ao: 'AO2', topic: 'National Debt Effects' }
    },
    {
      id: 25,
      question: 'Which curve shows the relationship between the rate of inflation and the level of unemployment?',
      options: [
        { key: 'A', text: 'J-curve' },
        { key: 'B', text: 'Kuznets curve' },
        { key: 'C', text: 'Laffer curve' },
        { key: 'D', text: 'Phillips curve' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The Phillips curve, named after A.W. Phillips\'s 1958 study, depicts the inverse relationship between inflation (or wage growth) and unemployment. Low unemployment correlates with high inflation; high unemployment with low inflation. J-curve (A) shows trade balance response to devaluation over time. Kuznets curve (B) relates inequality to development level. Laffer curve (C) relates tax rates to tax revenue. Only Phillips curve (D) connects inflation and unemployment—the fundamental macroeconomic trade-off debated since its discovery.',
      examinerKey: { ao: 'AO1', topic: 'Phillips Curve' }
    },
    {
      id: 26,
      question: 'What is the opportunity cost of a country joining a customs union?',
      options: [
        { key: 'A', text: 'Free trade between member countries' },
        { key: 'B', text: 'Having the same external tariff as other member countries' },
        { key: 'C', text: 'The loss of independent trade negotiations with non-member countries' },
        { key: 'D', text: 'Trade creation between member countries' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Opportunity cost is the next-best alternative foregone. When joining a customs union, the country gains trade benefits (A, D) and adopts common external tariffs (B requirement, not cost). The sacrifice is sovereignty over trade policy—the country can no longer negotiate bilateral trade deals with non-members independently; it must negotiate collectively through the union. Option C identifies this foregone policy autonomy as the opportunity cost. Options A, B, and D describe features or benefits, not costs of membership.',
      examinerKey: { ao: 'AO2', topic: 'Customs Union Opportunity Cost' }
    },
    {
      id: 27,
      question: 'A country\'s government wants to achieve long-run economic growth. What would be the most appropriate supply-side policy?',
      options: [
        { key: 'A', text: 'Give subsidies to firms selling essential products' },
        { key: 'B', text: 'Increase government investment' },
        { key: 'C', text: 'Increase income tax rates' },
        { key: 'D', text: 'Raise interest rates' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Long-run growth requires expanding productive capacity—shifting LRAS rightward through capital accumulation, productivity improvements, or labor force enhancement. Government investment (B) in infrastructure, education, or R&D directly increases the economy\'s productive potential. Subsidies on essentials (A) affect distribution, not capacity. Higher income taxes (C) reduce work incentives and investment—contractionary. Higher interest rates (D) reduce private investment. Only government investment (B) directly contributes to supply-side capacity expansion essential for sustained growth.',
      examinerKey: { ao: 'AO2', topic: 'Supply-Side Policy' }
    },
    {
      id: 28,
      question: 'What is the effect of a depreciation of a country\'s currency on its exports and imports?',
      options: [
        { key: 'A', text: 'Exports cheaper in foreign currency, imports more expensive in domestic currency' },
        { key: 'B', text: 'Exports cheaper in foreign currency, imports cheaper in domestic currency' },
        { key: 'C', text: 'Exports more expensive in foreign currency, imports more expensive in domestic currency' },
        { key: 'D', text: 'Exports more expensive in foreign currency, imports cheaper in domestic currency' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Currency depreciation means each unit of domestic currency buys fewer units of foreign currency. Effects: Exports priced in domestic currency translate to fewer foreign currency units—making exports cheaper for foreign buyers. Imports priced in foreign currency require more domestic currency to purchase—making imports more expensive domestically. Option A correctly describes both effects: cheaper exports (boosting competitiveness) and costlier imports (encouraging import substitution). This combination, if elasticities are sufficient, improves the trade balance per Marshall-Lerner condition.',
      examinerKey: { ao: 'AO2', topic: 'Exchange Rate Effects' }
    },
    {
      id: 29,
      question: 'What is a likely outcome of a country running a persistent current account deficit?',
      options: [
        { key: 'A', text: 'Accumulation of foreign reserves' },
        { key: 'B', text: 'Appreciation of the exchange rate' },
        { key: 'C', text: 'Increase in foreign ownership of domestic assets' },
        { key: 'D', text: 'Lower levels of domestic inflation' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Current account deficits must be financed by capital account surpluses—foreigners acquire domestic assets (investment, loans, property) to fund the spending gap. Persistent deficits accumulate foreign claims on domestic assets, increasing foreign ownership. Option A contradicts balance of payments mechanics—deficits drain reserves, not accumulate them. Option B would worsen the deficit (more imports, fewer exports). Option D has no direct link to current account position. Only Option C correctly identifies the financing mechanism: capital inflows = foreign acquisition of domestic assets.',
      examinerKey: { ao: 'AO2', topic: 'Current Account Deficits' }
    },
    {
      id: 30,
      question: 'What would be the effect of a central bank increasing interest rates on the exchange rate under a flexible exchange rate system?',
      options: [
        { key: 'A', text: 'The exchange rate will depreciate because imports become cheaper.' },
        { key: 'B', text: 'The exchange rate will depreciate because capital will flow out of the country.' },
        { key: 'C', text: 'The exchange rate will appreciate because capital will flow into the country.' },
        { key: 'D', text: 'The exchange rate will appreciate because exports become more competitive.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Higher interest rates attract foreign capital seeking better returns—hot money flows and portfolio investment shift toward the higher-yielding country. Increased demand for domestic currency (needed to invest domestically) causes appreciation. Option C correctly links: rate increase → capital inflows → currency appreciation. Option A incorrectly suggests depreciation from cheaper imports. Option B reverses capital flow direction. Option D links appreciation to export competitiveness, which actually worsens with appreciation. The capital account channel dominates exchange rate determination in the short run.',
      examinerKey: { ao: 'AO2', topic: 'Interest Rates and Exchange Rates' }
    }
  ]
};

export const additionalPapers2025 = [paper9708_12_s25, paper9708_32_s25];
