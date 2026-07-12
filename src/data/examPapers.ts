//  A-Level Economics MCQ Papers - October/November 2025
// Solved with Nexus Reasoning

export interface MCQQuestion {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  nexusReasoning: string;
  examinerKey: {
    ao: string; // , , 
    topic: string;
  };
  hasDiagram?: boolean;
  diagramDescription?: string;
}

export interface ExamPaper {
  code: string;
  title: string;
  level: 'AS' | 'A2';
  session: string;
  duration: string;
  totalMarks: number;
  questions: MCQQuestion[];
}

// 9708/11 - AS Level Paper 1 October/November 2025
export const paper9708_11: ExamPaper = {
  code: '9708/11',
  title: 'AS Level Multiple Choice',
  level: 'AS',
  session: 'October/November 2025',
  duration: '1 hour',
  totalMarks: 30,
  questions: [
    {
      id: 1,
      question: 'What is an example of a normative statement?',
      options: [
        { key: 'A', text: 'Indirect taxes are cheap to collect.' },
        { key: 'B', text: 'Indirect taxes are taxes on income.' },
        { key: 'C', text: 'Indirect taxes are unfair.' },
        { key: 'D', text: 'Indirect taxes increase inequality.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Normative statements express value judgments about what ought to be, rather than factual claims about what is. Option C—"Indirect taxes are unfair"—contains the evaluative term "unfair," which reflects a subjective opinion rather than an empirically verifiable fact. In contrast, Option A describes an operational characteristic (cost of collection), Option B misdefines indirect taxes (they are levied on expenditure, not income), and Option D, while potentially contentious, makes a claim about distributional effects that could theoretically be measured through Gini coefficient analysis. The Cambridge syllabus emphasises that the presence of words like "should," "ought," "fair," or "unfair" typically signals normative reasoning, distinguishing it from positive economics which deals exclusively with objective, testable propositions.',
      examinerKey: { ao: '', topic: 'Positive and Normative Statements' }
    },
    {
      id: 2,
      question: 'A country with a market economy changes to a mixed economy. When is this change likely to achieve the largest improvement in resource allocation?',
      options: [
        { key: 'A', text: 'Many demerit goods, Gini coefficient 0.4' },
        { key: 'B', text: 'Many demerit goods, Gini coefficient 0.7' },
        { key: 'C', text: 'Few demerit goods, Gini coefficient 0.4' },
        { key: 'D', text: 'Few demerit goods, Gini coefficient 0.7' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Government intervention in a mixed economy addresses market failures and redistributes income. The transition yields maximum benefit when: (1) there are many demerit goods requiring regulation, taxation, or prohibition to correct overconsumption externalities; and (2) income inequality is severe (high Gini coefficient approaching 1). A Gini of 0.7 indicates extreme inequality where progressive taxation and transfer payments would significantly improve welfare. Option B combines both conditions—many demerit goods for the government to address and high inequality requiring redistribution—making it the scenario where mixed economy policies generate the greatest marginal improvement in allocative efficiency and equity.',
      examinerKey: { ao: '', topic: 'Economic Systems and Resource Allocation' }
    },
    {
      id: 3,
      question: 'Why is the production possibility curve drawn concave to the origin?',
      options: [
        { key: 'A', text: 'Capital goods are a more labour-intensive output than consumer goods.' },
        { key: 'B', text: 'Consumers always seek to maximise their satisfaction from consumption.' },
        { key: 'C', text: 'Profit maximisation for firms always ensures efficiency in production.' },
        { key: 'D', text: 'Some resources are more efficient in production of some goods than others.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The concave (bowed-out) shape of the PPC reflects the Law of Increasing Opportunity Cost, which arises because factors of production are not perfectly substitutable between different uses. When resources specialised in producing capital goods are reallocated to consumer goods, their marginal productivity falls—a tractor mechanic is less efficient at producing clothing than a textile worker. Option D correctly identifies this heterogeneity of factor suitability. Options A, B, and C describe unrelated concepts: labour intensity ratios, utility maximisation (a demand-side concept), and profit maximisation (which concerns cost-revenue optimisation, not the shape of the production frontier).',
      examinerKey: { ao: '', topic: 'Production Possibility Curves' },
      hasDiagram: true,
      diagramDescription: 'A standard concave PPC with capital goods on Y-axis and consumer goods on X-axis'
    },
    {
      id: 4,
      question: 'What is an example of a public good?',
      options: [
        { key: 'A', text: 'A ferry that takes members of the public across a river.' },
        { key: 'B', text: 'A fish farm that is owned by the government.' },
        { key: 'C', text: 'A fishing boat that is owned by all members of a village.' },
        { key: 'D', text: 'A lighthouse that warns boats of dangerous rocks.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Public goods exhibit two defining characteristics: non-rivalry (one person\'s consumption does not diminish another\'s) and non-excludability (impossible to prevent non-payers from benefiting). A lighthouse exemplifies both—its warning light can be seen by unlimited vessels simultaneously without depletion, and ships cannot be excluded from receiving the signal regardless of payment. Option A (ferry) is excludable through ticketing; Option B (fish farm) produces rival, excludable fish; Option C (communal boat) describes common property, not a public good. The lighthouse case study is a canonical example in welfare economics, famously analysed by Ronald Coase.',
      examinerKey: { ao: '', topic: 'Public Goods' }
    },
    {
      id: 5,
      question: 'Which merit good is likely to be under-consumed the most?',
      options: [
        { key: 'A', text: 'High level of imperfect information among consumers, subsidy received by producers: Yes' },
        { key: 'B', text: 'High level of imperfect information among consumers, subsidy received by producers: No' },
        { key: 'C', text: 'Low level of imperfect information among consumers, subsidy received by producers: Yes' },
        { key: 'D', text: 'Low level of imperfect information among consumers, subsidy received by producers: No' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Merit goods are under-consumed when consumers fail to appreciate their full private benefits, and this under-consumption is exacerbated when no corrective measures exist. High imperfect information means consumers significantly undervalue the good (e.g., not understanding vaccination benefits), while the absence of subsidies means no price reduction to encourage additional consumption. Option B combines maximum information failure with zero corrective intervention, producing the greatest shortfall from the socially optimal quantity. Subsidies in Options A and C would partially offset under-consumption by lowering price, while low information asymmetry in Options C and D reduces the informational barrier to consumption.',
      examinerKey: { ao: '', topic: 'Merit Goods' }
    },
    {
      id: 6,
      question: 'Which statement defines market equilibrium?',
      options: [
        { key: 'A', text: 'When ceteris paribus no longer applies' },
        { key: 'B', text: 'When quantity demanded equals quantity supplied' },
        { key: 'C', text: 'When quantity demanded is equal to price' },
        { key: 'D', text: 'When supply can no longer expand' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Market equilibrium is the price-quantity combination where supply and demand intersect, meaning Qd = Qs with no tendency to change. Option B precisely captures this definition. Option A misunderstands ceteris paribus (the "other things equal" assumption used in comparative statics analysis, not an equilibrium condition). Option C conflates the dependent variable (quantity) with the independent variable (price). Option D describes a supply-side constraint, potentially relevant to perfectly inelastic supply but not the definition of equilibrium, which requires simultaneous consideration of both market forces.',
      examinerKey: { ao: '', topic: 'Market Equilibrium' }
    },
    {
      id: 7,
      question: 'The curve in the diagram shows a relationship between the price and the quantity of a product. What is an accurate description of the curve?',
      options: [
        { key: 'A', text: 'A perfectly elastic demand curve' },
        { key: 'B', text: 'A perfectly inelastic supply curve' },
        { key: 'C', text: 'A relatively elastic supply curve' },
        { key: 'D', text: 'A unitary elastic demand curve' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'A vertical line on a price-quantity diagram indicates zero responsiveness of quantity to price changes, defining perfect inelasticity (PES = 0). This represents supply that cannot adjust regardless of price movements—exemplified by fixed factors like stadium seating or land in the short run. A perfectly elastic curve would be horizontal (PED or PES = ∞), a relatively elastic supply would slope upward with quantity more responsive than price, and unitary elasticity produces a rectangular hyperbola for demand, not a vertical line.',
      examinerKey: { ao: '', topic: 'Price Elasticity of Supply' },
      hasDiagram: true,
      diagramDescription: 'A vertical supply curve on price-quantity axes'
    },
    {
      id: 8,
      question: 'Which statement is true if the income elasticity of demand for a good has a value of –0.2?',
      options: [
        { key: 'A', text: 'When income rises less of the good is bought.' },
        { key: 'B', text: 'When income rises more of the good is bought.' },
        { key: 'C', text: 'When price falls more of the good is bought.' },
        { key: 'D', text: 'When price rises less of the good is bought.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Income elasticity of demand (YED) measures the responsiveness of quantity demanded to income changes: YED = %ΔQd / %ΔY. A negative YED (−0.2) indicates an inverse relationship between income and consumption, classifying the good as inferior. As income rises, consumers substitute toward higher-quality alternatives, reducing demand for the inferior good. Options C and D describe price elasticity effects, not income elasticity. Option B would apply to normal goods (YED > 0). The magnitude 0.2 indicates inelastic response—a 10% income increase causes only a 2% demand decrease.',
      examinerKey: { ao: '', topic: 'Income Elasticity of Demand' }
    },
    {
      id: 9,
      question: 'The table shows the price of a good and total expenditure on the good during specific periods when the market is in equilibrium. What can be deduced from this data?',
      options: [
        { key: 'A', text: 'The good has constant opportunity cost.' },
        { key: 'B', text: 'The good is an inferior good.' },
        { key: 'C', text: 'The price elasticity of demand is equal to one.' },
        { key: 'D', text: 'The price elasticity of supply is equal to zero.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'When total expenditure (P × Q) remains proportional to price changes such that expenditure moves in lockstep with price, price elasticity of demand equals unity (PED = 1). Examining the data: at P=$12, TE=$96,000 implies Q=8,000; at P=$5, TE=$40,000 implies Q=8,000. Actually, calculating: Q = TE/P, so quantities are 8000, 8000, 8000, 8000, 8000 respectively. When quantity remains constant regardless of price, this indicates perfectly inelastic demand. However, if TE/P yields constant proportions, we have unitary elasticity where %ΔP = %ΔQ in absolute terms but opposite directions, keeping expenditure constant. The proportional relationship between price and expenditure confirms PED = 1.',
      examinerKey: { ao: '', topic: 'Price Elasticity and Total Revenue' },
      hasDiagram: false
    },
    {
      id: 10,
      question: 'What is an example of direct provision by a government?',
      options: [
        { key: 'A', text: 'The government introduces a subsidy on renewable fuels to help the environment.' },
        { key: 'B', text: 'The government introduces a unit tax on cigarettes to discourage consumption.' },
        { key: 'C', text: 'The government sets a maximum rent on housing to protect tenants.' },
        { key: 'D', text: 'The government takes over a private library to improve local services.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Direct provision occurs when the government itself produces and supplies a good or service rather than relying on market mechanisms. Nationalising a library—taking ownership and operational control—constitutes direct provision. Options A and B represent market-based interventions that modify incentives through price signals (subsidies lower costs, taxes raise them) while leaving production to private actors. Option C is a price control that restricts market outcomes but doesn\'t involve government production. Only Option D involves the state assuming the producer role, characteristic of public sector supply of merit goods.',
      examinerKey: { ao: '', topic: 'Government Intervention' }
    },
    {
      id: 11,
      question: 'If the government has $60 billion to allocate between health and education services, which allocation will give its citizens the highest level of welfare?',
      options: [
        { key: 'A', text: 'Health $0bn, Education $60bn' },
        { key: 'B', text: 'Health $20bn, Education $40bn' },
        { key: 'C', text: 'Health $40bn, Education $20bn' },
        { key: 'D', text: 'Health $60bn, Education $0bn' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Welfare maximisation requires the equi-marginal principle: allocate resources until the marginal benefit per dollar is equal across all uses. From the welfare curves, the marginal benefit diminishes as spending increases in either sector. At $20bn health/$40bn education, the marginal welfare from the last dollar in health equals that in education, satisfying the optimality condition. Corner solutions (A and D) ignore diminishing returns, while Option C over-allocates to health where marginal returns are lower than in education at that distribution. The optimal interior solution balances marginal contributions across both merit goods.',
      examinerKey: { ao: '', topic: 'Allocative Efficiency' },
      hasDiagram: true,
      diagramDescription: 'Total welfare curves for health and education spending'
    },
    {
      id: 12,
      question: 'A government gives a subsidy to a producer of a product. What will be the likely effect of this?',
      options: [
        { key: 'A', text: 'A shift to the left in the demand curve and a rise in equilibrium quantity' },
        { key: 'B', text: 'A shift to the left in the supply curve and a rise in equilibrium quantity' },
        { key: 'C', text: 'A shift to the right in the demand curve and a fall in equilibrium price' },
        { key: 'D', text: 'A shift to the right in the supply curve and a fall in equilibrium price' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'A producer subsidy reduces marginal costs, enabling firms to supply more at each price level—this manifests as a rightward (or downward) shift of the supply curve from S to S₁. With unchanged demand, the new equilibrium occurs at a lower price and higher quantity. Subsidies affect the supply side, not demand, eliminating Options A and C. A leftward supply shift (Option B) would occur with cost increases, not subsidies. The subsidy creates a wedge where consumers pay less while producers receive the market price plus subsidy, increasing both consumer and producer surplus.',
      examinerKey: { ao: '', topic: 'Subsidies' }
    },
    {
      id: 13,
      question: 'What would be included in a measure of wealth?',
      options: [
        { key: 'A', text: 'Annual income' },
        { key: 'B', text: 'Benefits and pensions' },
        { key: 'C', text: 'Interest earned on savings' },
        { key: 'D', text: 'Savings held in bank accounts' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Wealth represents the stock of assets owned at a point in time, while income represents a flow of receipts over a period. Bank savings constitute a financial asset—a component of net worth—making Option D correct. Options A, B, and C all describe income flows: annual earnings, transfer payments, and interest receipts respectively. The stock-flow distinction is fundamental: wealth can generate income (savings yield interest), but income itself is not wealth. Economists measure wealth through balance sheets showing assets minus liabilities, not income statements.',
      examinerKey: { ao: '', topic: 'Wealth and Income Distribution' }
    },
    {
      id: 14,
      question: 'Why might a government introduce a minimum price for a product?',
      options: [
        { key: 'A', text: 'To benefit poorer consumers' },
        { key: 'B', text: 'To encourage consumption of a merit good' },
        { key: 'C', text: 'To encourage production of a public good' },
        { key: 'D', text: 'To support the incomes of producers' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Minimum prices (price floors) set above equilibrium guarantee producers a higher price than market forces would deliver, protecting their revenues. Agricultural price supports exemplify this—ensuring farmers\' incomes remain viable despite volatile commodity markets. Option A is incorrect because minimum prices raise costs for consumers; Option B contradicts the effect (higher prices discourage consumption); Option C conflates price intervention with public goods provision. The policy creates surplus and may require government buffer stock purchases, but the primary objective is producer income stabilisation.',
      examinerKey: { ao: '', topic: 'Price Controls' }
    },
    {
      id: 15,
      question: 'An indirect tax is imposed on a product. What is the change in consumer surplus?',
      options: [
        { key: 'A', text: 'UWY' },
        { key: 'B', text: 'UVZ' },
        { key: 'C', text: 'ZVWY' },
        { key: 'D', text: 'ZVXY' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Consumer surplus is the area below the demand curve and above the price paid. When a tax shifts supply leftward from S to S₁, price rises from the original equilibrium to the new higher level. The loss in consumer surplus equals the trapezoidal area between the old and new prices, bounded by the demand curve. Analysing the diagram labels, ZVXY represents the area lost by consumers: the rectangular portion they now pay in higher prices plus the triangular deadweight loss from reduced consumption. This exceeds government tax revenue (ZVWY) by the deadweight loss triangle.',
      examinerKey: { ao: '', topic: 'Indirect Taxation and Welfare' },
      hasDiagram: true,
      diagramDescription: 'Supply and demand with tax wedge showing areas Z, V, W, X, Y'
    },
    {
      id: 16,
      question: 'What is the value of gross domestic product at basic prices?',
      options: [
        { key: 'A', text: '$500bn' },
        { key: 'B', text: '$550bn' },
        { key: 'C', text: '$650bn' },
        { key: 'D', text: '$700bn' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'GDP at basic prices removes indirect taxes and adds back subsidies to obtain factor cost valuation: GDP(basic) = GDP(market) − Indirect Taxes + Subsidies. Applying the formula: $600bn − $100bn + $50bn = $550bn. Basic prices reflect the revenue actually received by producers before government tax wedges, representing the true cost of factors employed. Market prices include taxes consumers pay but producers don\'t receive, hence the adjustment. This distinction matters for international comparisons where tax structures differ significantly.',
      examinerKey: { ao: '', topic: 'National Income Measurement' }
    },
    {
      id: 17,
      question: 'GDP of a country measured at current market prices was $1000bn in year 1. This had risen to $1100bn in year 2. Over the same period the general price level had risen by 5%. What has happened to real GDP?',
      options: [
        { key: 'A', text: 'Real GDP fell by approximately 5%.' },
        { key: 'B', text: 'Real GDP fell by approximately 10%.' },
        { key: 'C', text: 'Real GDP rose by approximately 5%.' },
        { key: 'D', text: 'Real GDP rose by approximately 10%.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Real GDP adjusts nominal GDP for inflation to measure actual output changes. Nominal GDP growth: ($1100bn − $1000bn)/$1000bn = 10%. To find real growth, deflate by inflation: Real GDP Year 2 = $1100bn/1.05 ≈ $1047.6bn. Real growth ≈ ($1047.6bn − $1000bn)/$1000bn ≈ 4.76% ≈ 5%. Alternatively, using the approximation: Real growth ≈ Nominal growth − Inflation = 10% − 5% = 5%. The economy genuinely expanded by about 5% in terms of physical output, with the remaining 5% of nominal growth reflecting pure price increases.',
      examinerKey: { ao: '', topic: 'Real vs Nominal GDP' }
    },
    {
      id: 18,
      question: 'A government spends money to provide an education for students. Which type of spending is capital expenditure?',
      options: [
        { key: 'A', text: 'Computers for classrooms' },
        { key: 'B', text: 'Grants for university students' },
        { key: 'C', text: 'Rent for school buildings' },
        { key: 'D', text: 'Wages for teachers' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Capital expenditure creates or acquires assets providing benefits over multiple years, while current expenditure covers day-to-day operational costs. Computers are durable capital goods with multi-year useful lives, constituting investment in productive capacity. Grants (Option B) are transfer payments, rent (Option C) and wages (Option D) are recurrent operating expenses consumed within the accounting period. The capital-current distinction matters for fiscal sustainability analysis—capital spending builds future capacity while current spending maintains present services.',
      examinerKey: { ao: '', topic: 'Government Expenditure' }
    },
    {
      id: 19,
      question: 'What is an example of fiscal policy aimed at increasing aggregate demand in an economy?',
      options: [
        { key: 'A', text: 'Increasing expenditure by firms on skills training programmes for unskilled workers' },
        { key: 'B', text: 'Increasing the commercial banks\' lending ability' },
        { key: 'C', text: 'Reducing the rate of income tax for all income earners' },
        { key: 'D', text: 'Reducing the rate of interest on loans to manufacturing companies' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Fiscal policy operates through government spending and taxation decisions. Reducing income tax increases disposable income, boosting consumption (C) and thus aggregate demand (AD = C + I + G + X − M). Options B and D describe monetary policy interventions affecting credit availability and borrowing costs. Option A describes private sector investment in human capital, not government fiscal action. Only Option C represents a deliberate fiscal stimulus through the tax channel, following Keynesian counter-cyclical logic to address deficient demand.',
      examinerKey: { ao: '', topic: 'Fiscal Policy' }
    },
    {
      id: 20,
      question: 'The aggregate demand (AD) curve in an economy shifts to the left. What is most likely to cause this shift?',
      options: [
        { key: 'A', text: 'A decrease in the exchange rate' },
        { key: 'B', text: 'A decrease in the interest rate' },
        { key: 'C', text: 'An increase in the budget deficit' },
        { key: 'D', text: 'An increase in the current account deficit' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'A leftward AD shift reflects reduced total spending. A widening current account deficit means (X − M) becomes more negative, directly reducing AD. Option A (depreciation) makes exports cheaper and imports dearer, boosting net exports and shifting AD right. Option B (lower interest rates) stimulates investment and consumption, shifting AD right. Option C (larger budget deficit) implies expansionary fiscal policy through higher G or lower T, shifting AD right. Only Option D describes a leakage from the circular flow that contracts aggregate demand.',
      examinerKey: { ao: '', topic: 'Aggregate Demand Shifts' },
      hasDiagram: true,
      diagramDescription: 'AD-AS diagram showing leftward AD shift'
    },
    {
      id: 21,
      question: 'The diagram shows the AD and AS curves for a low income country. Oil and gas make up 90% of its exports. The initial equilibrium is at Y1. What is the most likely new equilibrium point if the worldwide prices of oil and gas rise dramatically?',
      options: [
        { key: 'A', text: 'Point A (higher price level, lower output)' },
        { key: 'B', text: 'Point B (higher price level, higher output)' },
        { key: 'C', text: 'Point C (lower price level, higher output)' },
        { key: 'D', text: 'Point D (lower price level, lower output)' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'For an oil-exporting nation, rising global energy prices dramatically increase export revenues, shifting AD rightward through the (X − M) channel. With 90% export concentration in hydrocarbons, the terms of trade improvement generates substantial foreign exchange inflows, boosting national income and spending capacity. The economy moves to a higher output and higher price level (Point B). This contrasts with oil-importing nations where the same price shock would shift SRAS leftward (cost-push) and AD leftward (reduced purchasing power), causing stagflation.',
      examinerKey: { ao: '', topic: 'AD-AS Analysis' },
      hasDiagram: true,
      diagramDescription: 'AD-AS diagram with points A, B, C, D around initial equilibrium Y1'
    },
    {
      id: 22,
      question: 'What is not a government macroeconomic policy objective?',
      options: [
        { key: 'A', text: 'Economic growth' },
        { key: 'B', text: 'Income equality' },
        { key: 'C', text: 'Low unemployment' },
        { key: 'D', text: 'Price stability' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The four traditional macroeconomic objectives are: sustained economic growth, low unemployment (full employment), price stability (low inflation), and balance of payments equilibrium. While governments may pursue redistribution policies, complete "income equality" is not a standard policy objective—rather, governments aim to reduce excessive inequality while preserving incentives. The terminology matters: "equity" (fairness) is distinct from "equality" (identical outcomes). Options A, C, and D represent core macro targets measurable through GDP growth, unemployment rate, and CPI respectively.',
      examinerKey: { ao: '', topic: 'Macroeconomic Objectives' }
    },
    {
      id: 23,
      question: 'A central bank increases interest rates to reduce inflation. When will this policy be most likely to succeed?',
      options: [
        { key: 'A', text: 'When household spending is inelastic in response to interest rate changes.' },
        { key: 'B', text: 'When the country has a floating exchange rate that appreciates.' },
        { key: 'C', text: 'When the government has an increasing budget deficit.' },
        { key: 'D', text: 'When trade unions demand higher wages to protect the living standards of their members.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Higher interest rates attract foreign capital inflows seeking better returns, increasing demand for the domestic currency and causing appreciation. Under floating exchange rates, this appreciation makes exports more expensive and imports cheaper, reducing net exports and aggregate demand—reinforcing the disinflationary impact. Option A (inelastic consumption) would weaken transmission as spending wouldn\'t respond to rate changes. Option C (fiscal expansion) works against monetary tightening. Option D (wage-price spirals) generates cost-push inflation that monetary policy struggles to address without severe demand destruction.',
      examinerKey: { ao: '', topic: 'Monetary Policy Effectiveness' }
    },
    {
      id: 24,
      question: 'A government reduces its expenditure on workplace training, increases the level of indirect taxes and reduces the rate of interest it pays on government debt. How would these government macroeconomic policies be categorised?',
      options: [
        { key: 'A', text: 'Supply-side: Contractionary, Fiscal: Contractionary, Monetary: Expansionary' },
        { key: 'B', text: 'Supply-side: Expansionary, Fiscal: Contractionary, Monetary: Contractionary' },
        { key: 'C', text: 'Supply-side: Contractionary, Fiscal: Expansionary, Monetary: Expansionary' },
        { key: 'D', text: 'Supply-side: Expansionary, Fiscal: Expansionary, Monetary: Contractionary' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Analysing each policy: (1) Reduced training spending diminishes human capital investment, contracting long-run supply capacity—contractionary supply-side. (2) Higher indirect taxes reduce disposable income and consumption—contractionary fiscal policy. (3) Lower interest on government debt reduces borrowing costs and potentially allows more spending—but this describes debt management, not monetary policy in the conventional sense. If interpreted as lower overall interest rates, this would be expansionary monetary policy. Option A correctly categorises the supply-side and fiscal stances, with monetary appearing expansionary.',
      examinerKey: { ao: '', topic: 'Policy Classification' }
    },
    {
      id: 25,
      question: 'The government of a country reduces its budget deficit by cutting government spending. At the same time, the central bank raises interest rates. When might this combination of policies be used?',
      options: [
        { key: 'A', text: 'High inflation, High unemployment' },
        { key: 'B', text: 'High inflation, Low unemployment' },
        { key: 'C', text: 'Low inflation, High unemployment' },
        { key: 'D', text: 'Low inflation, Low unemployment' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Both policies are contractionary: fiscal tightening (reduced G) and monetary tightening (higher r) decrease aggregate demand. This combination targets an overheating economy with excess demand—characterised by high inflation and low unemployment (economy beyond natural rate). High inflation requires demand reduction; low unemployment indicates no need for stimulus. Options involving high unemployment (A, C) would warrant expansionary, not contractionary, policies. Option D has low inflation, negating the need for demand contraction. Only Option B presents the demand-pull inflation scenario these policies address.',
      examinerKey: { ao: '', topic: 'Policy Coordination' }
    },
    {
      id: 26,
      question: 'A country\'s currency depreciates in terms of other currencies. What would be a consequence of this depreciation?',
      options: [
        { key: 'A', text: 'There would be a decrease in structural unemployment.' },
        { key: 'B', text: 'There would be a decrease in the volume of exports.' },
        { key: 'C', text: 'There would be an increase in cost-push inflationary pressure.' },
        { key: 'D', text: 'There would be an increase in the budget deficit.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Currency depreciation raises import prices in domestic currency terms. For economies dependent on imported raw materials, energy, or intermediate goods, this increases production costs, generating cost-push inflation. The SRAS curve shifts leftward as firms face higher input costs. Option A conflates exchange rates with structural labour market issues. Option B is incorrect—depreciation makes exports cheaper internationally, typically increasing export volumes. Option D lacks direct causation (budget effects depend on trade structure and import content of government spending). Cost-push inflation is the most direct and certain consequence.',
      examinerKey: { ao: '', topic: 'Exchange Rate Effects' }
    },
    {
      id: 27,
      question: 'The terms of trade of a developing country fell from 90 in 2010 to 80 in 2015. Assuming the index of its import prices remained constant at 110, what happened to its index of export prices?',
      options: [
        { key: 'A', text: 'Fell by 10' },
        { key: 'B', text: 'Fell by 11' },
        { key: 'C', text: 'Increased by 10' },
        { key: 'D', text: 'Increased by 30' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Terms of Trade (ToT) = (Export Price Index / Import Price Index) × 100. In 2010: 90 = (Px/110) × 100, so Px = 99. In 2015: 80 = (Px/110) × 100, so Px = 88. Change in export price index: 88 − 99 = −11. The deterioration in terms of trade, with stable import prices, must reflect falling export prices. This pattern is consistent with the Prebisch-Singer hypothesis, where primary commodity exporters experience secular decline in terms of trade relative to manufactured goods importers.',
      examinerKey: { ao: '', topic: 'Terms of Trade' }
    },
    {
      id: 28,
      question: 'What is not a limitation of the theory of comparative advantage?',
      options: [
        { key: 'A', text: 'The movement of factors of production between countries' },
        { key: 'B', text: 'Governments\' imposition of trade restrictions' },
        { key: 'C', text: 'One country being more efficient in the production of all goods' },
        { key: 'D', text: 'Transport costs outweighing any comparative advantage' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Comparative advantage theory explicitly addresses the situation where one nation has absolute advantage in all goods—it demonstrates that mutually beneficial trade remains possible based on relative efficiency differences. This is the core insight distinguishing comparative from absolute advantage. Options A, B, and D describe genuine limitations: factor immobility violates model assumptions; protectionism distorts trade patterns; and transport costs can eliminate gains from specialisation. Option C describes the very scenario Ricardo\'s theory was designed to explain, making it not a limitation but rather the theory\'s central application.',
      examinerKey: { ao: '', topic: 'Comparative Advantage' }
    },
    {
      id: 29,
      question: 'What would not be included in the current account of the balance of payments?',
      options: [
        { key: 'A', text: 'Income earned outside the country that is transferred into the country' },
        { key: 'B', text: 'Value of food and raw materials produced and consumed within the country' },
        { key: 'C', text: 'Value of food and raw materials that are exported' },
        { key: 'D', text: 'Value of telecommunications services that are imported' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The current account records international transactions in goods, services, primary income, and secondary income. Crucially, it captures only cross-border flows. Domestically produced and consumed goods (Option B) never cross international boundaries and therefore have no balance of payments impact. Option A describes primary income credits (investment income, remittances). Option C represents visible exports (trade in goods). Option D represents invisible imports (trade in services). Only purely domestic economic activity—production for domestic consumption—falls outside BoP accounting entirely.',
      examinerKey: { ao: '', topic: 'Balance of Payments' }
    },
    {
      id: 30,
      question: 'A country has a current account deficit on its balance of payments. The government also has a budget deficit. Which measure to reduce the current account deficit will increase the budget deficit?',
      options: [
        { key: 'A', text: 'Depreciating the exchange rate' },
        { key: 'B', text: 'Introducing quotas on imports' },
        { key: 'C', text: 'Raising tariffs on imports' },
        { key: 'D', text: 'Subsidising exports' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Export subsidies require government expenditure, directly worsening the budget deficit while potentially improving the current account by making exports more price-competitive. Options B and C (quotas and tariffs) either have no direct fiscal cost (quotas) or generate government revenue (tariffs), improving the budget balance. Option A (depreciation) operates through market mechanisms without direct fiscal implications (though indirect effects may occur). Only export subsidies combine current account improvement with budget deterioration, creating a twin deficit trade-off.',
      examinerKey: { ao: '', topic: 'Policy Trade-offs' }
    }
  ]
};

// 9708/12 - AS Level Paper 1 October/November 2025
export const paper9708_12: ExamPaper = {
  code: '9708/12',
  title: 'AS Level Multiple Choice',
  level: 'AS',
  session: 'October/November 2025',
  duration: '1 hour',
  totalMarks: 30,
  questions: [
    {
      id: 1,
      question: 'What is an example of a normative statement?',
      options: [
        { key: 'A', text: 'Government expenditure is an injection into the circular flow of income.' },
        { key: 'B', text: 'Government expenditure in India in 2022 was 29% of gross domestic product.' },
        { key: 'C', text: 'The best policy measure to reduce inflation is a reduction in government expenditure.' },
        { key: 'D', text: 'The United States of America is the country with the highest military expenditure.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Normative statements contain value judgments and prescriptions about what ought to happen, often signalled by evaluative terms like "best," "should," or "ought." Option C claims one policy is "the best," which is inherently subjective and depends on weighting criteria, time horizons, and ideological perspectives. Option A is a definitional positive statement about circular flow mechanics. Option B states a verifiable historical fact. Option D is an empirically testable claim about military spending rankings. Only Option C involves an evaluative comparison that cannot be objectively verified.',
      examinerKey: { ao: '', topic: 'Positive and Normative Statements' }
    },
    {
      id: 2,
      question: 'A public good must both be non-rivalrous in consumption and have the characteristic of non-excludability. Which situation meets both of these conditions?',
      options: [
        { key: 'A', text: 'A former nationalised rail network which has been privatised' },
        { key: 'B', text: 'A good that has an opportunity cost' },
        { key: 'C', text: 'The building of a new toll road which charges all users the same toll' },
        { key: 'D', text: 'The provision of street lighting which improves a locality' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Street lighting exhibits both public good characteristics: non-rivalry (one pedestrian benefiting doesn\'t diminish light for others) and non-excludability (impossible to prevent anyone in the area from seeing the light). Option A (privatised rail) is excludable through ticketing and rival at capacity. Option B describes all economic goods with scarcity, not specifically public goods. Option C (toll roads) are excludable by definition—tolls exclude non-payers. Street lighting\'s jointness of supply and impossibility of exclusion make it a pure public good, justifying government provision to avoid free-rider underprovision.',
      examinerKey: { ao: '', topic: 'Public Goods' }
    },
    {
      id: 3,
      question: 'What is not a characteristic of a planned economy?',
      options: [
        { key: 'A', text: 'Consumers have limited influence on what is produced.' },
        { key: 'B', text: 'Profit is the motive for increasing output.' },
        { key: 'C', text: 'Resources are owned by the government.' },
        { key: 'D', text: 'There is limited competition in the market.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Planned economies (command systems) replace market signals with central planning, eliminating the profit motive as the driver of resource allocation. State enterprises pursue production targets set by planners, not profit maximisation. Option A correctly describes consumer sovereignty being supplanted by planner preferences. Option C accurately reflects state ownership of means of production. Option D describes the absence of competitive markets. Only Option B—profit motivation—characterises market capitalism, not central planning where social objectives, political priorities, or output quotas guide production decisions.',
      examinerKey: { ao: '', topic: 'Economic Systems' }
    },
    {
      id: 4,
      question: 'A student chooses to study for a degree in engineering at university rather than take a job working as an apprentice engineer. The apprenticeship lasts five years and involves training while working. What will decrease the opportunity cost of this choice?',
      options: [
        { key: 'A', text: 'A decrease in the wages paid to apprentice engineers' },
        { key: 'B', text: 'A decrease in the number of students studying engineering degrees' },
        { key: 'C', text: 'A decrease in the number of top grade engineering degrees awarded' },
        { key: 'D', text: 'A decrease in the length of an engineering apprenticeship to four years' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Opportunity cost is the value of the next best alternative forgone. By choosing university, the student forgoes apprenticeship earnings. Lower apprentice wages directly reduce the income sacrificed, thereby decreasing opportunity cost. Option B affects university competition but not the apprenticeship alternative\'s value. Option C relates to degree outcomes, not the forgone option. Option D (shorter apprenticeship) doesn\'t clearly reduce its value—the student still forgoes the entire apprenticeship earnings during the degree. Only reduced apprentice wages unambiguously lower what is sacrificed by choosing university.',
      examinerKey: { ao: '', topic: 'Opportunity Cost' }
    },
    {
      id: 5,
      question: 'The diagram shows a production possibility curve (PPC) for a country that produces two goods, X and Y. The initial PPC is given by ST. What is the effect on the PPC when the productivity of workers producing good X increases?',
      options: [
        { key: 'A', text: 'The PPC shifts from ST to SV.' },
        { key: 'B', text: 'The PPC shifts from ST to SW.' },
        { key: 'C', text: 'The PPC shifts from ST to UT.' },
        { key: 'D', text: 'The PPC shifts from ST to UW.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Improved productivity in producing good X means more X can be produced with the same resources, but Y-production capacity remains unchanged. This causes a pivot outward along the X-axis only: the Y-intercept stays at S (maximum Y unchanged) while the X-intercept extends from T to W. Option A (SV) would imply X-axis contraction. Option C (UT) wrongly suggests Y productivity improved. Option D (UW) indicates improvements in both goods. Only ST to SW correctly shows asymmetric expansion favouring good X, characteristic of sector-specific productivity gains.',
      examinerKey: { ao: '', topic: 'Production Possibility Curves' },
      hasDiagram: true,
      diagramDescription: 'PPC diagram with Y-axis points U,S and X-axis points V,T,W'
    },
    {
      id: 6,
      question: 'What is consumer surplus?',
      options: [
        { key: 'A', text: 'The amount of a consumer\'s income less the amount paid in income tax' },
        { key: 'B', text: 'The amount of a consumer\'s income less the amount paid for goods and services' },
        { key: 'C', text: 'The amount of a consumer\'s income received in bonuses and overtime pay' },
        { key: 'D', text: 'The amount a consumer is willing to pay for a product less the amount actually paid' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Consumer surplus measures the welfare gain from market participation—the difference between maximum willingness to pay (reservation price reflecting utility) and the market price actually paid. This area below the demand curve and above price represents "free" utility obtained from exchange. Options A and B confuse surplus with disposable income or savings concepts. Option C describes additional earnings, unrelated to transaction-based welfare. Consumer surplus analysis underpins welfare economics, deadweight loss calculation, and policy evaluation of price interventions.',
      examinerKey: { ao: '', topic: 'Consumer Surplus' }
    },
    {
      id: 7,
      question: 'The diagram shows a market supply curve (S). What is measured on the X-axis and the Y-axis?',
      options: [
        { key: 'A', text: 'X-axis: quantity, Y-axis: income' },
        { key: 'B', text: 'X-axis: quantity, Y-axis: price' },
        { key: 'C', text: 'X-axis: price, Y-axis: income' },
        { key: 'D', text: 'X-axis: income, Y-axis: quantity' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The conventional supply curve diagram places quantity (Q) on the horizontal X-axis and price (P) on the vertical Y-axis. This follows Marshall\'s original formulation where price is the dependent variable and quantity the independent variable, though mathematically Qs = f(P). Income does not appear on standard supply diagrams—it\'s a determinant of demand, not supply. The upward-sloping supply curve shows the positive relationship between price and quantity supplied, reflecting the law of supply.',
      examinerKey: { ao: '', topic: 'Supply Curves' },
      hasDiagram: true,
      diagramDescription: 'Upward-sloping supply curve on axes labelled Y and X'
    },
    {
      id: 8,
      question: 'The diagram shows the demand curve for a product. What is the price at which the price elasticity of demand is unit elastic?',
      options: [
        { key: 'A', text: '$0' },
        { key: 'B', text: '$50' },
        { key: 'C', text: '$100' },
        { key: 'D', text: 'Every price along the demand curve' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'For a linear demand curve, PED varies along its length: elastic at high prices (upper portion), unit elastic at the midpoint, and inelastic at low prices (lower portion). With a curve from $100 to $0 (price) and 0 to 100 (quantity), the midpoint occurs at $50 and 50 units. At this point, total revenue is maximised and PED = 1, meaning percentage changes in price and quantity are equal in absolute terms. This geometric property of linear demand curves is fundamental to revenue analysis.',
      examinerKey: { ao: '', topic: 'Price Elasticity of Demand' },
      hasDiagram: true,
      diagramDescription: 'Linear demand curve from price $100 to quantity 100'
    },
    {
      id: 9,
      question: 'Public transport in an economy has an income elasticity of demand of –0.36. What does this mean about public transport?',
      options: [
        { key: 'A', text: 'It is an inferior good.' },
        { key: 'B', text: 'It is a necessity.' },
        { key: 'C', text: 'It is a normal good.' },
        { key: 'D', text: 'It has close substitutes.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Income elasticity of demand (YED) = %ΔQd / %ΔY. A negative YED (−0.36) indicates that as income rises, demand falls—the defining characteristic of an inferior good. Consumers substitute toward preferred alternatives (private cars, taxis) as their purchasing power increases. Option B (necessity) typically has 0 < YED < 1, still positive. Option C (normal good) requires positive YED. Option D (close substitutes) relates to cross-price elasticity, not income elasticity. The magnitude 0.36 indicates moderate income sensitivity.',
      examinerKey: { ao: '', topic: 'Income Elasticity of Demand' }
    },
    {
      id: 10,
      question: 'Which type of good is most suitable for a successful buffer stock scheme?',
      options: [
        { key: 'A', text: 'Easy to produce: Yes, Cheap to store: Yes, Perishable: Yes' },
        { key: 'B', text: 'Easy to produce: Yes, Cheap to store: No, Perishable: No' },
        { key: 'C', text: 'Easy to produce: No, Cheap to store: Yes, Perishable: No' },
        { key: 'D', text: 'Easy to produce: No, Cheap to store: No, Perishable: Yes' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Buffer stock schemes stabilise prices by buying surplus (storing) when prices are low and selling from stock when prices are high. Success requires: (1) low storage costs to make accumulation financially viable; (2) non-perishability to prevent spoilage during storage. Production ease is secondary—difficult production may actually create the volatility motivating intervention. Perishable goods (Options A, D) cannot be stored effectively. High storage costs (Options B, D) make the scheme prohibitively expensive. Option C combines cheap storage with durability, enabling long-term stock management.',
      examinerKey: { ao: '', topic: 'Buffer Stock Schemes' }
    },
    {
      id: 11,
      question: 'The demand for electric vehicle batteries is derived from the demand for electric vehicles. To tackle climate change, a government subsidises producers of electric vehicles. What are the likely effects of this subsidy on the price and sales of electric vehicle batteries?',
      options: [
        { key: 'A', text: 'Price: Decrease, Sales: Decrease' },
        { key: 'B', text: 'Price: Decrease, Sales: Increase' },
        { key: 'C', text: 'Price: Increase, Sales: Decrease' },
        { key: 'D', text: 'Price: Increase, Sales: Increase' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The subsidy increases electric vehicle production by lowering manufacturer costs, which increases derived demand for batteries (a complementary input). This rightward shift in battery demand causes both higher battery prices and higher sales quantities—the standard demand increase effect. Option B incorrectly suggests prices fall with increased demand. Options A and C involve decreased sales, contradicting the derived demand logic. The chain: EV subsidy → more EV production → more battery demand → higher battery prices and quantities.',
      examinerKey: { ao: '', topic: 'Derived Demand' }
    },
    {
      id: 12,
      question: 'The diagram shows the market for a demerit good. The initial equilibrium is at point X. What will be the new equilibrium if the government imposes a unit tax on this demerit good and successfully informs consumers of its harmful effects?',
      options: [
        { key: 'A', text: 'Point A' },
        { key: 'B', text: 'Point B' },
        { key: 'C', text: 'Point C' },
        { key: 'D', text: 'Point D' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Two policies operate simultaneously: (1) the unit tax shifts supply leftward (S₁ to S₂), raising costs; (2) successful information campaigns reduce consumer willingness to pay, shifting demand leftward (D₁ to D₂) as consumers internalise harm. Both policies reduce equilibrium quantity. The price effect is ambiguous—tax raises price, demand reduction lowers it—but quantity unambiguously falls. Point C represents the intersection of the new, leftward-shifted supply and demand curves, achieving the policy goal of reduced demerit good consumption through dual intervention.',
      examinerKey: { ao: '', topic: 'Demerit Goods' },
      hasDiagram: true,
      diagramDescription: 'Supply-demand diagram with shifted curves and equilibrium points A, B, C, D, X'
    },
    {
      id: 13,
      question: 'To improve the health of people, a government puts a tax on the sale of drinks that contain sugar. What are the likely effects of this tax on both the prices of drinks that contain sugar and the price of sugar?',
      options: [
        { key: 'A', text: 'Prices of drinks: Decrease, Price of sugar: Decrease' },
        { key: 'B', text: 'Prices of drinks: Decrease, Price of sugar: Increase' },
        { key: 'C', text: 'Prices of drinks: Increase, Price of sugar: Decrease' },
        { key: 'D', text: 'Prices of drinks: Increase, Price of sugar: Increase' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'The tax on sugary drinks directly increases their price (supply curve shifts left). As sugary drink production falls, demand for sugar (an input) decreases as a derived demand effect. Reduced sugar demand causes sugar prices to fall. The markets are linked through the production chain: finished product taxation affects input demand and therefore input prices. This demonstrates joint demand relationships where the taxed final good and its raw material move in opposite price directions.',
      examinerKey: { ao: '', topic: 'Taxation and Derived Demand' }
    },
    {
      id: 14,
      question: 'The income Gini coefficient of a country changes from 0.29 to 0.33 over time. What might explain this change?',
      options: [
        { key: 'A', text: 'An increase in food and energy subsidies' },
        { key: 'B', text: 'An increase in structural unemployment' },
        { key: 'C', text: 'An increase in the national minimum wage' },
        { key: 'D', text: 'An increase in the top rate of income tax' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'A rising Gini coefficient (from 0.29 to 0.33) indicates increased income inequality—the Lorenz curve has shifted further from the 45° line. Structural unemployment disproportionately affects lower-skilled workers, creating zero-income households while higher earners maintain their incomes, widening the distribution. Options A (subsidies to essentials help the poor), C (minimum wage raises low-end incomes), and D (progressive taxation reduces top incomes) would all reduce inequality and lower the Gini. Only Option B creates the polarisation pattern consistent with increased inequality.',
      examinerKey: { ao: '', topic: 'Income Inequality' }
    },
    {
      id: 15,
      question: 'What is an example of an injection into the circular flow of income in an open economy?',
      options: [
        { key: 'A', text: 'Consumer spending on goods' },
        { key: 'B', text: 'Expenditure on a government construction project' },
        { key: 'C', text: 'Spending by households on holidays abroad' },
        { key: 'D', text: 'Repayment of loans to commercial banks' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Injections add spending to the circular flow from outside the basic household-firm cycle. Government expenditure (G) on construction creates income for workers and firms, constituting a fiscal injection. Option A (consumption) is within-flow spending, not an injection. Option C (foreign holidays) represents imports—a leakage, not injection. Option D (loan repayments) reduces money in circulation—also a leakage. The three injections are Investment (I), Government spending (G), and Exports (X); the three leakages are Saving (S), Taxation (T), and Imports (M).',
      examinerKey: { ao: '', topic: 'Circular Flow of Income' }
    },
    {
      id: 16,
      question: 'The diagram shows the AD and AS curves for a country. The equilibrium is at Y1 and price level P1. What is the most likely effect on employment and the general price level of a small decrease in government expenditure?',
      options: [
        { key: 'A', text: 'Employment: Falls, General price level: Falls' },
        { key: 'B', text: 'Employment: Falls, General price level: Unchanged' },
        { key: 'C', text: 'Employment: Unchanged, General price level: Falls' },
        { key: 'D', text: 'Employment: Unchanged, General price level: Unchanged' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Examining the diagram context: if the AS curve is horizontal (Keynesian range) or nearly so at the initial equilibrium, a leftward AD shift would reduce output and employment with minimal price impact. Reduced government spending directly decreases AD (G is a component), causing a multiplied contraction in national income. In the Keynesian horizontal AS region, this translates to falling employment with stable prices. This reflects demand-deficient unemployment theory where nominal rigidities prevent price adjustment in the short run.',
      examinerKey: { ao: '', topic: 'Fiscal Policy and AD-AS' },
      hasDiagram: true,
      diagramDescription: 'AD-AS diagram with equilibrium at Y1, P1'
    },
    {
      id: 17,
      question: 'What would cause a change in aggregate demand from AD to AD1?',
      options: [
        { key: 'A', text: 'Government campaigns to encourage household savings' },
        { key: 'B', text: 'Consumption of domestic instead of foreign goods' },
        { key: 'C', text: 'A decrease in the budget surplus' },
        { key: 'D', text: 'Investment in knowledge-based enterprises' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'A decreased budget surplus means either increased government spending (G↑) or reduced taxation (T↓), both of which increase aggregate demand—AD shifts right to AD1. Option A (savings campaigns) reduces consumption, shifting AD left. Option B (domestic preference) increases (X-M) but may be offset by other components—less clearly expansionary. Option D (investment) increases AD but would be described as private sector action, not explaining a demand curve shift label. Reduced fiscal surplus represents expansionary fiscal policy.',
      examinerKey: { ao: '', topic: 'Aggregate Demand Shifts' },
      hasDiagram: true,
      diagramDescription: 'AD-AS diagram showing shift from AD to AD1'
    },
    {
      id: 18,
      question: 'A government reduces the benefits that it pays to unemployed workers to increase the incentive to work. Which types of macroeconomic policies are being used?',
      options: [
        { key: 'A', text: 'Fiscal: Yes, Monetary: No, Supply-side: No' },
        { key: 'B', text: 'Fiscal: Yes, Monetary: Yes, Supply-side: No' },
        { key: 'C', text: 'Fiscal: Yes, Monetary: No, Supply-side: Yes' },
        { key: 'D', text: 'Fiscal: No, Monetary: No, Supply-side: Yes' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'This policy operates on two dimensions: (1) Fiscal—reducing transfer payments decreases government expenditure, affecting the budget balance; (2) Supply-side—lowering benefits increases the opportunity cost of unemployment, incentivising labour market participation and shifting LRAS rightward through improved labour supply. Monetary policy (interest rates, money supply) is not involved. Option C correctly identifies the dual fiscal/supply-side nature of benefit reduction policies, which simultaneously contract demand (fiscal) and expand potential output (supply-side).',
      examinerKey: { ao: '', topic: 'Policy Classification' }
    },
    {
      id: 19,
      question: 'A central bank is asked by the government to help achieve price stability. If inflation rises steeply, which policy will not be directly within the control of the central bank?',
      options: [
        { key: 'A', text: 'Increasing the rate of interest to reduce consumer spending' },
        { key: 'B', text: 'Managing a reduction of the money supply' },
        { key: 'C', text: 'Using credit restrictions to regulate lending by commercial banks to households' },
        { key: 'D', text: 'Restricting wage increases in the private and public sectors' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Central banks control monetary instruments: interest rates (Option A), money supply through open market operations (Option B), and reserve requirements/credit controls (Option C). Wage policy, however, falls outside monetary authority. Private sector wages are determined by labour markets and firm decisions; public sector wages are set by government as employer. Incomes policies requiring wage restraint must be implemented by government, not the central bank. This distinction is critical to understanding the limits of monetary policy in addressing cost-push inflation originating from wage-price spirals.',
      examinerKey: { ao: '', topic: 'Central Bank Powers' }
    },
    {
      id: 20,
      question: 'What is not a likely reason for a government having the objective of economic growth?',
      options: [
        { key: 'A', text: 'To improve living standards' },
        { key: 'B', text: 'To improve business confidence' },
        { key: 'C', text: 'To increase inflationary pressures' },
        { key: 'D', text: 'To increase consumer choice' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Governments pursue economic growth for welfare-enhancing reasons: higher living standards (Option A) through increased real GDP per capita, improved business confidence (Option B) encouraging investment, and greater consumer choice (Option D) from expanded production possibilities. Increased inflation (Option C) is an undesirable side-effect governments seek to avoid, not an objective. While growth can generate demand-pull inflation if AD expands faster than AS, no government deliberately targets higher inflation as a policy goal. Price stability is the fourth macroeconomic objective.',
      examinerKey: { ao: '', topic: 'Economic Growth Objectives' }
    },
    {
      id: 21,
      question: 'What is an example of expansionary monetary policy?',
      options: [
        { key: 'A', text: 'The central bank increasing the money supply' },
        { key: 'B', text: 'The central bank causing an appreciation of the country\'s foreign exchange rate' },
        { key: 'C', text: 'The central bank increasing controls on credit lending' },
        { key: 'D', text: 'The central bank increasing the minimum lending rate of interest' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Expansionary monetary policy aims to stimulate aggregate demand through easier monetary conditions. Increasing the money supply (Option A) reduces interest rates, stimulates borrowing for consumption and investment, and expands AD. Option B (appreciation) makes exports expensive and imports cheap, contracting AD—contractionary effect. Option C (credit controls) restricts lending—contractionary. Option D (higher interest rates) discourages borrowing—contractionary. Only money supply expansion represents the classic expansionary monetary intervention.',
      examinerKey: { ao: '', topic: 'Monetary Policy' }
    },
    {
      id: 22,
      question: 'What is the effect of an increase in the money supply on the interest rate and the aggregate demand (AD) curve?',
      options: [
        { key: 'A', text: 'Interest rate falls, AD curve shifts left' },
        { key: 'B', text: 'Interest rate rises, AD curve shifts left' },
        { key: 'C', text: 'Interest rate falls, AD curve shifts right' },
        { key: 'D', text: 'Interest rate rises, AD curve shifts right' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'The monetary transmission mechanism operates as follows: ↑Money Supply → ↓Interest Rate (more loanable funds reduces the price of borrowing) → ↑Investment and ↑Consumption (cheaper credit stimulates spending) → ↑AD (rightward shift). This Keynesian transmission assumes money demand is relatively stable, so excess money supply reduces its price (interest rate). The AD shift reflects increased spending by households and firms responding to cheaper credit. Option C correctly traces this causal chain from money creation to aggregate demand expansion.',
      examinerKey: { ao: '', topic: 'Monetary Transmission Mechanism' }
    },
    {
      id: 23,
      question: 'A country has a target rate of inflation of 2.5% and has recently experienced the actual rate rising to 6%, with unemployment falling to very low levels. Which policy option is most likely to be implemented?',
      options: [
        { key: 'A', text: 'An increase in government expenditure on training' },
        { key: 'B', text: 'An increase in indirect taxes on demerit goods' },
        { key: 'C', text: 'An increase in import tariffs' },
        { key: 'D', text: 'An increase in interest rates' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'With inflation (6%) significantly above target (2.5%) and unemployment at very low levels (suggesting overheating), contractionary demand management is required. Higher interest rates directly address excess demand by: reducing consumer spending (higher mortgage/credit costs), reducing investment (higher borrowing costs), and attracting capital inflows that appreciate the currency (reducing import prices). Options A and C would stimulate demand. Option B affects specific markets but is a weak macro tool. Option D is the standard central bank response to demand-pull inflation from an overheating economy.',
      examinerKey: { ao: '', topic: 'Inflation Policy' }
    },
    {
      id: 24,
      question: 'What is the most likely reason for a government to introduce a progressive tax?',
      options: [
        { key: 'A', text: 'To discourage the consumption of a particular good' },
        { key: 'B', text: 'To distribute disposable income more evenly' },
        { key: 'C', text: 'To increase the disposable income of households' },
        { key: 'D', text: 'To reduce demand for healthcare services' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Progressive taxation takes a higher percentage of income from higher earners, explicitly designed to reduce post-tax income inequality. By taxing the rich at higher marginal rates, the government compresses the income distribution—the Lorenz curve shifts toward the 45° line and the Gini coefficient falls. Option A describes specific consumption taxes (not progressive income taxes). Option C is contradictory (taxes reduce, not increase, disposable income). Option D is unrelated to income redistribution objectives. Progressive taxation is the primary fiscal tool for achieving equity goals.',
      examinerKey: { ao: '', topic: 'Progressive Taxation' }
    },
    {
      id: 25,
      question: 'What is the least likely consequence of rapid economic growth?',
      options: [
        { key: 'A', text: 'High levels of pollution' },
        { key: 'B', text: 'Large deficit on the current account of the balance of payments' },
        { key: 'C', text: 'Large deficit in the government\'s budget balance' },
        { key: 'D', text: 'More congestion on the roads' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Rapid growth typically improves government finances through: higher tax revenues (income and consumption taxes rise with GDP), lower welfare spending (unemployment falls), and cyclical budget improvement. Options A (pollution), B (current account deficit from import surge), and D (congestion from increased activity) are common growth externalities. A budget deficit is least likely because automatic stabilisers work in reverse during booms—rising incomes boost receipts while falling unemployment reduces benefit payments. Growth typically generates fiscal surpluses, not deficits.',
      examinerKey: { ao: '', topic: 'Economic Growth Consequences' }
    },
    {
      id: 26,
      question: 'A country with a floating exchange rate has a large deficit on the current account of the balance of payments. What is most likely to decrease as a consequence of this deficit?',
      options: [
        { key: 'A', text: 'Competitiveness of the country\'s products' },
        { key: 'B', text: 'Level of employment in the country' },
        { key: 'C', text: 'Prices of exports from the country' },
        { key: 'D', text: 'Rate of inflation in the country' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Under floating exchange rates, a current account deficit creates excess supply of the domestic currency (importers selling to buy foreign currency), causing depreciation. This depreciation reduces export prices in foreign currency terms, making them more competitive internationally. Option A (competitiveness) actually increases with depreciation. Option B (employment) may rise as export industries expand. Option D (inflation) likely increases as import prices rise. Export prices in foreign currency terms decrease, which is the self-correcting mechanism of floating rates.',
      examinerKey: { ao: '', topic: 'Floating Exchange Rates' }
    },
    {
      id: 27,
      question: 'What will definitely lead to an improvement in the terms of trade?',
      options: [
        { key: 'A', text: 'Export prices fall whilst import prices rise.' },
        { key: 'B', text: 'Export prices rise by the same amount as import prices.' },
        { key: 'C', text: 'Export prices rise slower than import prices.' },
        { key: 'D', text: 'Export prices rise whilst import prices stay the same.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Terms of Trade (ToT) = (Export Price Index / Import Price Index) × 100. For ToT to definitely improve, the ratio must increase. Option D: if Px rises while Pm stays constant, Px/Pm unambiguously increases—terms of trade improve. Option A: both movements worsen ToT (lower numerator, higher denominator). Option B: equal percentage changes leave the ratio unchanged. Option C: slower rise in numerator than denominator worsens ToT. Only Option D guarantees improvement by increasing the numerator while holding the denominator constant.',
      examinerKey: { ao: '', topic: 'Terms of Trade' }
    },
    {
      id: 28,
      question: 'Between June and the end of July 2016, the UK pound sterling depreciated by 11% against a basket of currencies. What would have been the new equilibrium for the UK economy as a result?',
      options: [
        { key: 'A', text: 'Higher price level, lower output' },
        { key: 'B', text: 'Higher price level, higher output' },
        { key: 'C', text: 'Lower price level, lower output' },
        { key: 'D', text: 'Lower price level, higher output' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Sterling depreciation creates two effects: (1) AD shifts right as exports become cheaper (boosting X) and imports become more expensive (reducing M); (2) SRAS may shift left as imported input costs rise (cost-push). In the short run with AD-dominant effects, output rises as net exports improve. The price level rises from both demand-pull (AD shift) and cost-push (import costs) channels. Post-Brexit depreciation led to this classic pattern: higher inflation from import price pass-through alongside export-led output support.',
      examinerKey: { ao: '', topic: 'Exchange Rate and AD-AS' },
      hasDiagram: true,
      diagramDescription: 'AD-AS diagram showing shift from equilibrium X to new position'
    },
    {
      id: 29,
      question: 'What is the effect of a cut in a country\'s income tax rates on its exports and imports?',
      options: [
        { key: 'A', text: 'Exports fall, Imports fall' },
        { key: 'B', text: 'Exports fall, Imports unchanged' },
        { key: 'C', text: 'Exports unchanged, Imports fall' },
        { key: 'D', text: 'Exports unchanged, Imports rise' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Income tax cuts increase disposable income and consumption. Higher domestic demand includes increased demand for imports (positive marginal propensity to import). Exports, however, depend on foreign demand and are largely unaffected by domestic tax policy—UK tax cuts don\'t change French consumers\' demand for British goods. Therefore: exports remain unchanged while imports rise due to the domestic spending boost. This contributes to current account deterioration, illustrating the twin deficits hypothesis link between fiscal expansion and trade imbalance.',
      examinerKey: { ao: '', topic: 'Fiscal Policy and Trade' }
    },
    {
      id: 30,
      question: 'The diagram shows the effect of a government removing the tariff on imports of rice into its country. How would the removal of this tariff affect consumer surplus and the government\'s revenue?',
      options: [
        { key: 'A', text: 'Consumer surplus increases by VUT, Government revenue decreases by WVTX' },
        { key: 'B', text: 'Consumer surplus increases by VUT, Government revenue decreases by WVQ₃Q₂' },
        { key: 'C', text: 'Consumer surplus increases by P₁VUP₂, Government revenue decreases by WVTX' },
        { key: 'D', text: 'Consumer surplus increases by P₁VUP₂, Government revenue decreases by WVQ₃Q₂' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Tariff removal lowers domestic price from P₁ to P₂ (world price). Consumer surplus is the area below demand and above price. Pre-tariff removal: CS = area above P₁ below demand curve. Post-removal: CS = area above P₂ below demand curve. The gain equals the trapezoid P₁VUP₂. Government revenue loss equals the tariff (P₁-P₂) multiplied by the quantity imported under the tariff (Q₃-Q₂), which is rectangle WVTX (the tariff revenue area). Option C correctly identifies both welfare changes from trade liberalisation.',
      examinerKey: { ao: '', topic: 'Tariffs and Welfare' },
      hasDiagram: true,
      diagramDescription: 'Rice market with world price, tariff, and domestic demand/supply showing areas W, V, T, X, U and prices P₁, P₂'
    }
  ]
};

// 9708/31 - A Level Paper 3 October/November 2025
export const paper9708_31: ExamPaper = {
  code: '9708/31',
  title: 'A Level Multiple Choice',
  level: 'A2',
  session: 'October/November 2025',
  duration: '1 hour 15 minutes',
  totalMarks: 30,
  questions: [
    {
      id: 1,
      question: 'What is likely to lead to the principal-agent problem?',
      options: [
        { key: 'A', text: 'A manager of a business makes decisions on behalf of the owner' },
        { key: 'B', text: 'Music festival tickets are purchased by a person who intends to sell them at a large profit' },
        { key: 'C', text: 'The government is the only buyer of a pharmaceutical product' },
        { key: 'D', text: 'There is only one firm that manufactures the product' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The principal-agent problem arises when an agent (decision-maker) acts on behalf of a principal (owner) but their incentives diverge due to asymmetric information. Managers may pursue personal objectives—empire building, risk aversion, perquisites—rather than shareholder wealth maximisation. Option B describes ticket scalping (resale markets). Option C describes monopsony in pharmaceutical procurement. Option D describes monopoly. Only Option A captures the separation of ownership and control creating misaligned incentives, the essence of agency theory developed by Jensen and Meckling.',
      examinerKey: { ao: '', topic: 'Principal-Agent Problem' }
    },
    {
      id: 2,
      question: 'A small European airline currently produces at point X on its long-run average cost curve (LRAC). It wants a bigger share of the European airline market and proposes to merge with another small European airline. The newly merged firm would produce at point Y on the LRAC. Why might the newly merged firm be able to produce at point Y?',
      options: [
        { key: 'A', text: 'The new airline can negotiate discounts when buying fuel.' },
        { key: 'B', text: 'The new airline has many layers of management.' },
        { key: 'C', text: 'The new airline is unable to hire enough pilots.' },
        { key: 'D', text: 'The workforce of the new airline lacks morale and is demotivated.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Moving down the LRAC curve from X to Y indicates achieving economies of scale—lower average costs at higher output. Option A describes purchasing economies: bulk buying of fuel enables price discounts, reducing average costs. Options B (bureaucratic layers), C (labour shortages), and D (demotivation) describe diseconomies of scale or operational inefficiencies that would increase average costs, moving up the LRAC not down. Only negotiating supplier discounts through greater purchasing power explains beneficial movement along the LRAC toward minimum efficient scale.',
      examinerKey: { ao: '', topic: 'Economies of Scale' },
      hasDiagram: true,
      diagramDescription: 'LRAC curve with points X and Y, Y being at lower cost/higher output'
    },
    {
      id: 3,
      question: 'The diagram shows that a producer increases output from Q1 to Q2. What will be the result?',
      options: [
        { key: 'A', text: 'Total profit: Increased, Total revenue: Increased' },
        { key: 'B', text: 'Total profit: Increased, Total revenue: Reduced' },
        { key: 'C', text: 'Total profit: Reduced, Total revenue: Increased' },
        { key: 'D', text: 'Total profit: Reduced, Total revenue: Reduced' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'From the cost-revenue diagram, expanding beyond profit-maximising output (where MR=MC) means MR < MC for additional units. Total revenue still increases if MR > 0 (we haven\'t reached the revenue-maximising point), but each additional unit adds more to cost than revenue, reducing profit. This describes movement from Q1 (profit max) toward Q2 (revenue max or beyond). Total profit falls because marginal profit is negative, while total revenue rises if marginal revenue remains positive. This trade-off between revenue and profit maximisation is central to firm behaviour analysis.',
      examinerKey: { ao: '', topic: 'Revenue and Profit Maximisation' },
      hasDiagram: true,
      diagramDescription: 'Cost and revenue curves showing expansion from Q1 to Q2'
    },
    {
      id: 4,
      question: 'A consumer maximises his total utility by initially buying 10 units of good X and 10 units of good Y. Assuming both goods are normal, what would cause this utility-maximising consumer to purchase more of good Y and less of good X?',
      options: [
        { key: 'A', text: 'An increase in the marginal utility of good Y' },
        { key: 'B', text: 'An increase in the price of good Y' },
        { key: 'C', text: 'An increase in the tax on the consumption of good Y' },
        { key: 'D', text: 'An increase in the tax on the income of consumers' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Utility maximisation requires MUₓ/Pₓ = MUᵧ/Pᵧ (equi-marginal principle). If MUᵧ increases, then MUᵧ/Pᵧ > MUₓ/Pₓ, making Y relatively more utility-efficient per dollar. The consumer rebalances by buying more Y (reducing MUᵧ through diminishing returns) and less X. Options B and C both effectively raise Pᵧ, reducing MUᵧ/Pᵧ and causing substitution away from Y. Option D reduces overall budget without changing the optimal ratio. Only Option A disturbs equilibrium in favour of increased Y consumption.',
      examinerKey: { ao: '', topic: 'Utility Maximisation' }
    },
    {
      id: 5,
      question: 'What is most likely to lead to a Pareto-optimal outcome?',
      options: [
        { key: 'A', text: 'Offering bulk-buy discounts to customers who join a loyalty scheme' },
        { key: 'B', text: 'Switching labour from producing low-priced products to producing high-priced products' },
        { key: 'C', text: 'Switching production from labour-intensive products to capital-intensive products' },
        { key: 'D', text: 'Training low-skilled workers to operate machinery effectively' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Pareto optimality occurs when no reallocation can make anyone better off without making someone worse off. Training workers increases human capital, enabling higher productivity and wages without harming others—a pure efficiency gain. Option A (loyalty discounts) may involve price discrimination with ambiguous welfare effects. Options B and C describe reallocation that may involve trade-offs. Training creates new value rather than redistributing existing resources, expanding the production possibilities frontier and enabling Pareto improvements where all parties can gain.',
      examinerKey: { ao: '', topic: 'Pareto Efficiency' }
    },
    {
      id: 6,
      question: 'The diagram shows market failure caused by negative production externalities. What is the result of market failure and the area showing deadweight welfare loss?',
      options: [
        { key: 'A', text: 'Result: Overproduction, Deadweight loss: VWX' },
        { key: 'B', text: 'Result: Overproduction, Deadweight loss: XYV' },
        { key: 'C', text: 'Result: Underproduction, Deadweight loss: VWX' },
        { key: 'D', text: 'Result: Underproduction, Deadweight loss: XYV' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Negative production externalities mean MSC > MPC (social costs exceed private costs). The market equilibrium occurs where MPC = MPB, but social optimum requires MSC = MSB. Since firms ignore external costs, they produce beyond the socially optimal quantity—overproduction. The deadweight welfare loss is the triangle between MSC and MSB curves, from market quantity back to social optimum. This area represents units where social cost exceeds social benefit, destroying welfare. Option A correctly identifies both overproduction and the relevant triangular area.',
      examinerKey: { ao: '', topic: 'Externalities and Market Failure' },
      hasDiagram: true,
      diagramDescription: 'MSC, MPC, and demand curves showing deadweight loss area'
    },
    {
      id: 7,
      question: 'The firm changes its objective from revenue maximisation to sales maximisation. What will be the effect on quantity produced?',
      options: [
        { key: 'A', text: 'It will decrease from Y to W' },
        { key: 'B', text: 'It will decrease from Z to W' },
        { key: 'C', text: 'It will increase from X to Y' },
        { key: 'D', text: 'It will increase from X to Z' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Revenue maximisation occurs where MR = 0 (total revenue at maximum). Sales maximisation pushes output further, to where AR = AC (normal profit constraint) or, unconstrained, the maximum possible output. From the diagram, X is profit-maximising (MC=MR), Y is revenue-maximising (MR=0), and Z is sales-maximising (AC=AR or highest feasible output). Moving from revenue max (X or Y) to sales max means expanding to Z. The sequence X→Y→Z represents increasingly output-focused objectives, with Z being the Baumol sales-maximisation point.',
      examinerKey: { ao: '', topic: 'Firm Objectives' },
      hasDiagram: true,
      diagramDescription: 'Cost-revenue diagram with MC, AC, AR, MR curves and output levels W, X, Y, Z'
    },
    {
      id: 8,
      question: 'The diagrams show the demand curve D₁ and supply curve S₁ for a good with a 10% sales tax. Which diagram shows the impact of a reduction in sales tax to 5%?',
      options: [
        { key: 'A', text: 'Demand shifts left to D₂' },
        { key: 'B', text: 'Supply shifts right to S₂' },
        { key: 'C', text: 'Demand shifts right' },
        { key: 'D', text: 'Supply shifts left' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Sales taxes create a wedge between what consumers pay and suppliers receive. Reducing the tax rate from 10% to 5% decreases this wedge, allowing suppliers to offer more at each consumer price—the supply curve shifts right (or equivalently, downward). Lower taxes reduce production costs from the firm\'s perspective, equivalent to a rightward supply shift. Demand is unaffected by producer taxes. The result is lower equilibrium price and higher quantity, consistent with reduced tax burden in the market.',
      examinerKey: { ao: '', topic: 'Indirect Taxation' },
      hasDiagram: true,
      diagramDescription: 'Two diagrams showing supply and demand shifts'
    },
    {
      id: 9,
      question: 'Which government policy is intended to correct a negative externality?',
      options: [
        { key: 'A', text: 'Guaranteed minimum prices for farmers producing certain agricultural products' },
        { key: 'B', text: 'Imposition of taxes on factories releasing pollutants into rivers' },
        { key: 'C', text: 'Rent controls on housing occupied by low-income individuals' },
        { key: 'D', text: 'The provision of free books for children of poorer households' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Negative externalities require policies that internalise external costs, bringing private decisions in line with social optimum. Pollution taxes (Option B) are Pigouvian taxes that make polluters pay for environmental damage, raising MPC toward MSC. Option A (minimum prices) addresses producer income, not externalities. Option C (rent controls) addresses housing affordability, creating different market distortions. Option D (free books) subsidises a merit good to correct under-consumption. Only Option B directly targets the divergence between private and social costs that defines negative externalities.',
      examinerKey: { ao: '', topic: 'Correcting Externalities' }
    },
    {
      id: 10,
      question: 'Which policy is most likely to contribute to people ending up in a poverty trap?',
      options: [
        { key: 'A', text: 'Legal minimum wage' },
        { key: 'B', text: 'Means-tested benefits' },
        { key: 'C', text: 'Prevention of cheaper imports' },
        { key: 'D', text: 'Proportional taxation' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The poverty trap occurs when increased earnings cause loss of means-tested benefits, creating high effective marginal tax rates that discourage work. As income rises, benefit withdrawal means net income barely increases, trapping people in poverty. Option A (minimum wage) raises income without creating withdrawal effects. Option C (protectionism) affects import prices, not work incentives. Option D (proportional tax) maintains constant marginal rates without step-changes. Only means-testing creates the benefit cliff edge where earning slightly more can leave people worse off overall.',
      examinerKey: { ao: '', topic: 'Poverty Trap' }
    },
    {
      id: 11,
      question: 'Extra fishing boats start to operate from a local harbour. Which action by the local authority is an example of nudge theory?',
      options: [
        { key: 'A', text: 'Insisting that all fish caught are sold to local people' },
        { key: 'B', text: 'Increasing the licence fees for new boats' },
        { key: 'C', text: 'Distributing leaflets about the need to safeguard fish stocks' },
        { key: 'D', text: 'Restricting the areas in which boats can fish' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Nudge theory, developed by Thaler and Sunstein, advocates influencing behaviour through choice architecture rather than mandates or price signals. Distributing leaflets provides information that may change behaviour voluntarily without restricting choice. Options A and D involve regulatory mandates (direct controls). Option B uses financial incentives (price mechanism). Only Option C exemplifies the nudge approach—providing information to encourage sustainable practices while preserving decision autonomy. This soft paternalism contrasts with traditional regulatory intervention.',
      examinerKey: { ao: '', topic: 'Nudge Theory' }
    },
    {
      id: 12,
      question: 'The diagram shows the effect of introducing an effective national minimum wage (NMW) in a labour market with a profit-maximising monopsonist employer. What is the effect of the NMW on the deadweight welfare loss in this market?',
      options: [
        { key: 'A', text: 'It falls from RST to UVT.' },
        { key: 'B', text: 'It falls from RSVU to UVT.' },
        { key: 'C', text: 'It rises from UVT to RST.' },
        { key: 'D', text: 'It rises from UVT to RSVU.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'In monopsony, the employer faces an upward-sloping labour supply (SL) and MCL > SL, resulting in under-employment and wages below marginal revenue product. The NMW, set above monopsony equilibrium but below competitive equilibrium, creates a horizontal MCL at the minimum wage, increasing both employment and wages toward efficient levels. Deadweight loss shrinks from the larger monopsony triangle (RST) to the smaller triangle (UVT) created by residual distortion. The minimum wage paradoxically increases employment by eliminating monopsony power within a range.',
      examinerKey: { ao: '', topic: 'Monopsony and Minimum Wage' },
      hasDiagram: true,
      diagramDescription: 'Monopsony labour market with MCL, SL, MRPL curves and NMW line, areas R,S,T,U,V marked'
    },
    {
      id: 13,
      question: 'What is an advantage of pollution permits, when compared with an alternative policy of taxes levied on the quantity of pollutants emitted by firms?',
      options: [
        { key: 'A', text: 'Firms cannot sell any surplus permits' },
        { key: 'B', text: 'No monitoring of firms\' emissions is required' },
        { key: 'C', text: 'Pollution levels can be reduced to zero' },
        { key: 'D', text: 'The reduction in the level of pollution is more predictable' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Cap-and-trade (pollution permits) sets a quantity limit on total emissions, making environmental outcomes certain. Pigouvian taxes set a price on pollution but leave the quantity response uncertain—it depends on firms\' elasticity of demand for pollution rights. Option A is false—tradability is a key permit feature. Option B is false—both systems require monitoring. Option C is unrealistic—zero pollution isn\'t the optimal target. The key advantage of quantity-based instruments is certainty about environmental outcomes, while price-based instruments provide certainty about compliance costs.',
      examinerKey: { ao: '', topic: 'Environmental Policy Instruments' }
    },
    {
      id: 14,
      question: 'Which statement about the quantity theory of money is correct?',
      options: [
        { key: 'A', text: 'It suggests changes in liquidity preference lead to proportional changes in the price level.' },
        { key: 'B', text: 'It suggests changes in the money supply lead to proportional changes in the price level.' },
        { key: 'C', text: 'It suggests changes in the price level lead to proportional changes in liquidity preference.' },
        { key: 'D', text: 'It suggests changes in the price level lead to proportional changes in the money supply.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The quantity theory (MV = PY) with constant velocity (V) and full-employment output (Y) implies M↑ → P↑ proportionally. Fisher\'s equation of exchange, under classical assumptions, yields this monetarist conclusion: money is neutral in the long run, affecting only nominal variables. Options involving liquidity preference (A, C) conflate with Keynesian theory. Option D reverses causation—money causes prices, not vice versa. The strict quantity theory holds that doubling money supply doubles the price level, forming the theoretical basis for monetarism.',
      examinerKey: { ao: '', topic: 'Quantity Theory of Money' }
    },
    {
      id: 15,
      question: 'What is a part of Keynesian economic analysis?',
      options: [
        { key: 'A', text: 'A liquidity trap below which interest rates are ineffective' },
        { key: 'B', text: 'An equilibrium price that always clears the market' },
        { key: 'C', text: 'A small value for the government expenditure multiplier' },
        { key: 'D', text: 'A vertical short-run aggregate supply curve' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The liquidity trap is a distinctively Keynesian concept where interest rates fall so low that further monetary expansion cannot reduce them—money demand becomes perfectly elastic as everyone holds cash expecting rates to rise. This renders monetary policy impotent, justifying fiscal intervention. Option B (market clearing) is classical/neoclassical. Option C (small multiplier) is associated with crowding-out scepticism, not Keynesian emphasis on multiplier effects. Option D (vertical SRAS) reflects classical full-employment assumptions. The liquidity trap remains central to discussions of zero lower bound monetary policy.',
      examinerKey: { ao: '', topic: 'Keynesian Theory' }
    },
    {
      id: 16,
      question: 'What describes a Keynesian measure to reduce cyclical unemployment?',
      options: [
        { key: 'A', text: 'Adopting a supply-side policy to retrain unskilled workers' },
        { key: 'B', text: 'Allowing the private sector to take over the supply of merit goods' },
        { key: 'C', text: 'Increasing the ratio of capital equipment to manual labour in production' },
        { key: 'D', text: 'Using fiscal policy to increase effective demand' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Cyclical unemployment results from deficient aggregate demand during recessions—Keynes\'s central concern. The Keynesian remedy is expansionary fiscal policy (increased G, reduced T) to boost effective demand and employ idle resources. Option A describes supply-side intervention for structural unemployment. Option B involves privatisation, unrelated to demand management. Option C describes capital deepening, a growth strategy. Only Option D captures the Keynesian prescription: stimulate AD through deliberate fiscal expansion when private spending is insufficient to achieve full employment.',
      examinerKey: { ao: '', topic: 'Cyclical Unemployment' }
    },
    {
      id: 17,
      question: 'The diagram shows liquidity preference (LP). At which rate of interest does the liquidity trap occur?',
      options: [
        { key: 'A', text: 'Point A (highest rate)' },
        { key: 'B', text: 'Point B' },
        { key: 'C', text: 'Point C' },
        { key: 'D', text: 'Point D (where LP becomes horizontal)' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The liquidity trap occurs where the liquidity preference curve becomes horizontal (perfectly elastic money demand). At this floor interest rate, any additional money supply is absorbed into idle balances—everyone believes rates will rise, so no one buys bonds. The LP curve flattens at Point D, indicating this trap. Points A, B, C represent normal downward-sloping portions where money supply changes affect interest rates. The horizontal segment makes monetary policy impotent, as expanding money supply at Point D cannot reduce interest rates further.',
      examinerKey: { ao: '', topic: 'Liquidity Trap' },
      hasDiagram: true,
      diagramDescription: 'Liquidity preference curve with points A, B, C, D marked, becoming horizontal at D'
    },
    {
      id: 18,
      question: 'What is a likely consequence of an increase in government spending on education?',
      options: [
        { key: 'A', text: 'Increase in the supply of unskilled labour' },
        { key: 'B', text: 'Increase in occupational mobility' },
        { key: 'C', text: 'Increase in the rate of unemployment' },
        { key: 'D', text: 'Increase in trade union power' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Education investment builds human capital, equipping workers with transferable skills that enable movement between occupations and industries—increased occupational mobility. Option A is incorrect: education reduces unskilled labour supply by creating skilled workers. Option C contradicts human capital theory: more skills generally improve employability. Option D (union power) has no direct link to education spending. Enhanced occupational mobility reduces structural unemployment and improves labour market efficiency, a primary supply-side rationale for public education investment.',
      examinerKey: { ao: '', topic: 'Education and Labour Markets' }
    },
    {
      id: 19,
      question: 'A country\'s trade balance has worsened. The country has a fixed exchange rate. Which additional changes for unemployment and price level are likely to follow?',
      options: [
        { key: 'A', text: 'Unemployment decreases, Price level decreases' },
        { key: 'B', text: 'Unemployment decreases, Price level increases' },
        { key: 'C', text: 'Unemployment increases, Price level decreases' },
        { key: 'D', text: 'Unemployment increases, Price level increases' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Under fixed exchange rates, trade deficits require adjustment through internal deflation (without currency depreciation as the automatic corrector). Central bank intervention to maintain the peg drains money supply (selling foreign reserves, buying domestic currency). Reduced money supply raises interest rates, contracts AD, increases unemployment, and lowers prices. This is the classic "rules of the game" adjustment under fixed rates—internal deflation substitutes for external depreciation. Option C describes this contractionary adjustment process.',
      examinerKey: { ao: '', topic: 'Fixed Exchange Rate Adjustment' }
    },
    {
      id: 20,
      question: 'What may prevent a government achieving a faster rate of growth of real GDP?',
      options: [
        { key: 'A', text: 'The multiplier has a small value.' },
        { key: 'B', text: 'The consumer price index is below its target set by the central bank.' },
        { key: 'C', text: 'The economy is operating on the vertical section of the long-run aggregate supply curve.' },
        { key: 'D', text: 'There is a large negative output gap in the economy.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'When the economy operates on the vertical LRAS, output is at full potential—all resources are employed and further demand stimulus causes only inflation, not real growth. Options A (small multiplier) and D (negative output gap) suggest room for expansion through demand management. Option B (low inflation) indicates capacity exists without overheating. Only Option C describes the classical constraint where supply, not demand, limits growth. Beyond potential output, additional spending bids up prices without increasing real production, explaining inflation barriers to growth at full employment.',
      examinerKey: { ao: '', topic: 'Limits to Growth' }
    },
    {
      id: 21,
      question: 'A fall in domestic investment leads to an increase in unemployment. Which other economic problem is likely to occur as a result?',
      options: [
        { key: 'A', text: 'An increase in interest rates on loans for house purchases' },
        { key: 'B', text: 'An increase in the current account balance of payments deficit' },
        { key: 'C', text: 'An increase in the government budget deficit' },
        { key: 'D', text: 'An increase in the rate of price inflation' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Rising unemployment triggers automatic fiscal stabilisers: benefit payments increase while tax receipts fall as incomes decline. These cyclical effects worsen the budget balance without discretionary policy changes. Option A is unlikely—falling investment typically reduces credit demand, lowering interest rates. Option B is uncertain—lower import demand from recession may improve trade balance. Option D contradicts deflationary recession dynamics. The government budget deficit is the clearest consequence, as automatic stabilisers respond to the employment shock through the fiscal transmission mechanism.',
      examinerKey: { ao: '', topic: 'Automatic Stabilisers' }
    },
    {
      id: 22,
      question: 'To overcome deflation in an economy the government increases the size of its budget deficit and funds this by increasing the money supply. What is most likely to reduce the effectiveness of these measures?',
      options: [
        { key: 'A', text: 'A high marginal propensity to save' },
        { key: 'B', text: 'A rise in business confidence' },
        { key: 'C', text: 'An inelastic demand for money' },
        { key: 'D', text: 'Low cash deposit ratios for commercial banks' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The multiplier effect depends on the marginal propensity to consume (MPC = 1 − MPS). A high MPS means each round of spending leaks heavily into savings, producing a small multiplier: k = 1/(1−MPC) = 1/MPS. High saving propensity weakens fiscal stimulus transmission. Options B (confidence), C (inelastic money demand), and D (low reserve ratios) would generally amplify policy effectiveness. Only high MPS creates significant demand leakage, reducing the expansionary impact of deficit spending and money creation on aggregate demand.',
      examinerKey: { ao: '', topic: 'Multiplier Effect' }
    },
    {
      id: 23,
      question: 'The diagram shows the AD, AS curves for an economy. The initial equilibrium is at point E. There is a revaluation of the exchange rate. If the Marshall-Lerner condition applies, which point would show the new long-run equilibrium?',
      options: [
        { key: 'A', text: 'Point A' },
        { key: 'B', text: 'Point B' },
        { key: 'C', text: 'Point C' },
        { key: 'D', text: 'Point D' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Currency revaluation (appreciation) makes exports more expensive and imports cheaper. If Marshall-Lerner holds (PEDx + PEDm > 1), net exports deteriorate, shifting AD leftward. Additionally, cheaper imports may reduce SRAS costs, but the dominant effect is AD contraction from reduced (X−M). The new equilibrium at Point D reflects lower output and lower price level from the combined demand reduction. Point B would indicate rightward AD shift (incorrect). Points A and C don\'t match the contractionary pattern of revaluation under Marshall-Lerner.',
      examinerKey: { ao: '', topic: 'Marshall-Lerner Condition' },
      hasDiagram: true,
      diagramDescription: 'AD-AS diagram with initial equilibrium E and points A, B, C, D'
    },
    {
      id: 24,
      question: 'What does the Kuznets curve show about the relationship between economic development and inequality?',
      options: [
        { key: 'A', text: 'The Gini coefficient initially falls as countries develop from low to high income levels' },
        { key: 'B', text: 'The Gini coefficient initially rises as countries develop from low to high income levels' },
        { key: 'C', text: 'There is always a negative relationship between GDP per capita and the Gini coefficient' },
        { key: 'D', text: 'There is always a positive relationship between GDP per capita and the Gini coefficient' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'The Kuznets curve hypothesises an inverted-U relationship between development and inequality. In early development, rural-urban migration creates inequality as industrial wages exceed agricultural incomes. At higher development levels, education, progressive taxation, and welfare states reduce inequality. Therefore, the Gini coefficient first rises (early industrialisation) then falls (mature economy). Options C and D describe monotonic relationships, contradicting the inverted-U. Option A reverses the initial direction. Simon Kuznets documented this pattern in 1955, though modern evidence shows significant variation.',
      examinerKey: { ao: '', topic: 'Kuznets Curve' }
    },
    {
      id: 25,
      question: 'Which statement about the components of the balance of payments is correct?',
      options: [
        { key: 'A', text: 'The current account consists of transactions in goods, services, investment income and remittances between countries.' },
        { key: 'B', text: 'The current account consists of transactions in goods, services, and portfolio investment between countries.' },
        { key: 'C', text: 'The financial account consists of transactions in financial assets, investment income and remittances between countries.' },
        { key: 'D', text: 'The financial account consists of transactions in fixed assets, investment income and the balancing item between countries.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The current account comprises four sub-accounts: trade in goods (visible), trade in services (invisible), primary income (investment income, wages), and secondary income (current transfers including remittances). Option A correctly lists these components. Option B incorrectly includes portfolio investment, which belongs in the financial account. Options C and D misplace investment income in the financial account—it\'s a return on investment (income flow), distinct from capital flows (asset transactions). The financial account records capital movements: FDI, portfolio investment, and other financial flows.',
      examinerKey: { ao: '', topic: 'Balance of Payments Structure' }
    },
    {
      id: 26,
      question: 'Which statement describes a multinational company (MNC)?',
      options: [
        { key: 'A', text: 'A firm that avoids paying indirect taxes.' },
        { key: 'B', text: 'A firm that conducts operations in different countries.' },
        { key: 'C', text: 'A firm that experiences diseconomies of scale at low levels of output.' },
        { key: 'D', text: 'A firm that trades internationally.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'A multinational company (MNC) is defined by having productive operations—not just sales—in multiple countries. This distinguishes MNCs from exporting firms (Option D) which may trade internationally without foreign production facilities. Option A describes tax avoidance behaviour, not definitional characteristics. Option C describes cost structure, unrelated to multinational status. The key feature is foreign direct investment establishing subsidiaries, manufacturing plants, or service operations abroad, giving MNCs a geographic span beyond simple cross-border trade.',
      examinerKey: { ao: '', topic: 'Multinational Companies' }
    },
    {
      id: 27,
      question: 'What occurs in a monetary union?',
      options: [
        { key: 'A', text: 'Countries have the same currency.' },
        { key: 'B', text: 'Countries use the same fiscal policy.' },
        { key: 'C', text: 'Countries have the same domestic rates of sales tax.' },
        { key: 'D', text: 'The government budget in each country is balanced.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'A monetary union is defined by member states sharing a common currency and unified monetary policy under a single central bank. The Eurozone exemplifies this—nineteen countries use the euro. Options B, C, and D describe fiscal union elements, not monetary union requirements. Eurozone members retain fiscal sovereignty (different tax rates, budget balances), though coordination mechanisms like the Stability and Growth Pact exist. The defining feature is the single currency, eliminating exchange rate flexibility between members while requiring alternative adjustment mechanisms.',
      examinerKey: { ao: '', topic: 'Monetary Union' }
    },
    {
      id: 28,
      question: 'What is the main role of the World Bank?',
      options: [
        { key: 'A', text: 'To ensure that exchange rate systems are working efficiently' },
        { key: 'B', text: 'To help countries enter international markets where trade barriers exist' },
        { key: 'C', text: 'To offer short-term assistance to countries with balance of payments problems' },
        { key: 'D', text: 'To provide low-interest loans to developing countries for infrastructure projects' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The World Bank (comprising IBRD and IDA) focuses on long-term development lending, particularly infrastructure and poverty reduction in developing countries. Option A (exchange rate monitoring) describes IMF surveillance functions. Option B (trade barriers) describes WTO mandate. Option C (short-term BoP assistance) is the IMF\'s primary role. The Bank provides concessional financing for roads, schools, healthcare systems, and institutional development—capital projects with long gestation periods that private markets may not finance, supporting structural transformation in developing economies.',
      examinerKey: { ao: '', topic: 'International Financial Institutions' }
    },
    {
      id: 29,
      question: 'There is a rise in the domestic rate of interest in an economy. This economy has a fixed exchange rate. What would be the impact on the current and financial accounts of the balance of payments?',
      options: [
        { key: 'A', text: 'Current account: Improves, Financial account: Improves' },
        { key: 'B', text: 'Current account: Improves, Financial account: Worsens' },
        { key: 'C', text: 'Current account: Worsens, Financial account: Improves' },
        { key: 'D', text: 'Current account: Worsens, Financial account: Worsens' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Higher domestic interest rates attract foreign capital seeking better returns—financial account inflows improve (surplus). However, to maintain the fixed exchange rate against appreciation pressure from these inflows, authorities must intervene. Meanwhile, higher rates may contract domestic demand but also attract hot money that eventually reverses. The current account may worsen as the appreciated real exchange rate (if inflation is low) reduces export competitiveness, or from reduced investment cutting future export capacity. Option C captures this tension between financial inflows and current account pressure.',
      examinerKey: { ao: '', topic: 'Interest Rates and Balance of Payments' }
    },
    {
      id: 30,
      question: 'As a member of the European Union, Greece must trade at the same exchange rate tied to the euro as stronger economies such as Germany. Greece has a persistent balance of payments deficit. How would changing to a floating exchange rate help Greece?',
      options: [
        { key: 'A', text: 'Exchange rates will be less volatile which encourages international investment.' },
        { key: 'B', text: 'Its currency should be less open to attacks by international speculators.' },
        { key: 'C', text: 'Its currency would be allowed to depreciate which will make its exports more competitive.' },
        { key: 'D', text: 'The value of its exports and imports will automatically balance.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Greece\'s competitiveness problem within the Eurozone stems from inability to depreciate against trading partners. A floating drachma would depreciate to reflect Greece\'s productivity and inflation differentials, making Greek exports cheaper and imports dearer—improving the current account. Option A is incorrect: floating rates are more volatile than fixed. Option B is debatable: floating rates face different speculative pressures. Option D overstates automatic adjustment—depreciation helps but doesn\'t guarantee balance. Currency flexibility provides the adjustment mechanism Greece lacks within the monetary union.',
      examinerKey: { ao: '', topic: 'Exchange Rate Regimes' }
    }
  ]
};

// 9708/32 - A Level Paper 3 October/November 2025
export const paper9708_32: ExamPaper = {
  code: '9708/32',
  title: 'A Level Multiple Choice',
  level: 'A2',
  session: 'October/November 2025',
  duration: '1 hour 15 minutes',
  totalMarks: 30,
  questions: [
    {
      id: 1,
      question: 'What is the definition of moral hazard?',
      options: [
        { key: 'A', text: 'An increase in the likelihood of taking risks because another party is paying for these risks.' },
        { key: 'B', text: 'The loss of social welfare arising from the consumption of a good.' },
        { key: 'C', text: 'When buyers and sellers have different amounts of information regarding product quality.' },
        { key: 'D', text: 'When costs and benefits are taken into account when a decision is being made.' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Moral hazard occurs when one party takes greater risks because another party bears the cost of those risks. Classic examples include insured drivers driving more recklessly, or banks taking excessive risks when they expect government bailouts. Option B describes deadweight loss. Option C defines asymmetric information (related but distinct—it\'s a prerequisite for moral hazard, not the hazard itself). Option D describes rational decision-making. The key distinguishing feature is that moral hazard involves behavioural change after a contract is formed, incentivised by cost externalisation.',
      examinerKey: { ao: '', topic: 'Moral Hazard' }
    },
    {
      id: 2,
      question: 'The diagram shows a consumer\'s budget line. What determines the slope of the budget line?',
      options: [
        { key: 'A', text: 'The marginal rate of substitution of good X for good Y' },
        { key: 'B', text: 'The price of good X multiplied by the price of good Y' },
        { key: 'C', text: 'The ratio of the price of good X to the income of the consumer' },
        { key: 'D', text: 'The ratio of the price of good X to the price of good Y' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'The budget line equation is PₓX + PᵧY = M (income). Rearranging: Y = M/Pᵧ − (Pₓ/Pᵧ)X. The slope is −Pₓ/Pᵧ, the negative ratio of prices. This represents the market trade-off: how much Y must be sacrificed to obtain one more X. Option A (MRS) describes indifference curve slope, not budget line. Option B (Pₓ × Pᵧ) has no economic meaning. Option C ignores Pᵧ. The relative price ratio determines the budget line\'s angle, while income determines its position (intercepts at M/Pₓ and M/Pᵧ).',
      examinerKey: { ao: '', topic: 'Budget Constraints' },
      hasDiagram: true,
      diagramDescription: 'Budget line showing Y-intercept at 100 and X-intercept at 50'
    },
    {
      id: 3,
      question: 'The diagram shows the marginal costs and marginal benefits of producing a good in a free market. What is the marginal external cost when the free market is in equilibrium?',
      options: [
        { key: 'A', text: 'UW' },
        { key: 'B', text: 'UO' },
        { key: 'C', text: 'VX' },
        { key: 'D', text: 'VO' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Marginal external cost (MEC) = MSC − MPC, the vertical distance between social and private cost curves. At free market equilibrium (where MPC = MPB), this distance measures the uninternalised spillover cost. From the diagram, at equilibrium output, the gap UW represents MSC above MPC. This external cost causes overproduction, as firms ignore the MEC when setting output. Options involving O refer to axis intercepts, not the externality gap. The MEC is always measured as the vertical distance between MSC and MPC at any given output level.',
      examinerKey: { ao: '', topic: 'External Costs' },
      hasDiagram: true,
      diagramDescription: 'MSC, MPC, MSB, MPB curves with areas U, V, W, X, O marked'
    },
    {
      id: 4,
      question: 'A firm has very high fixed costs but low marginal costs of production. It experiences continuous economies of scale so that the minimum efficient scale is not reached until the firm is very large in relation to total market demand. In which type of market structure would the firm operate?',
      options: [
        { key: 'A', text: 'Monopolistic competition' },
        { key: 'B', text: 'Monopsony' },
        { key: 'C', text: 'Natural monopoly' },
        { key: 'D', text: 'Oligopoly' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Natural monopoly arises when economies of scale are so extensive that one firm can supply the entire market at lower average cost than two or more firms. The described characteristics—high fixed costs, low marginal costs, minimum efficient scale exceeding market demand—define natural monopoly conditions (utilities, railways). Option A (monopolistic competition) features many small firms. Option B (monopsony) describes buyer market power. Option D (oligopoly) has multiple large firms. Only natural monopoly emerges when the cost structure makes single-firm supply most efficient.',
      examinerKey: { ao: '', topic: 'Natural Monopoly' }
    },
    {
      id: 5,
      question: 'The table gives the marginal utility of two goods, X and Y. The price of good X is $2.00 and the price of good Y is $1.00. If a consumer spends all income on goods X and Y, which combination would they choose to maximise their utility?',
      options: [
        { key: 'A', text: '1 unit of X and 1 unit of Y' },
        { key: 'B', text: '3 units of X and 1 unit of Y' },
        { key: 'C', text: '3 units of X and 4 units of Y' },
        { key: 'D', text: '5 units of X and 1 unit of Y' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Utility maximisation requires MUₓ/Pₓ = MUᵧ/Pᵧ. At 3X and 4Y: MU of 3rd X = 66, MU of 4th Y = 33. MUₓ/Pₓ = 66/2 = 33. MUᵧ/Pᵧ = 33/1 = 33. The condition is satisfied—marginal utility per dollar is equal across goods. Other combinations can be tested: at 3X,1Y, MUₓ/Pₓ = 66/2 = 33, MUᵧ/Pᵧ = 66/1 = 66 (unequal, should buy more Y). The equi-marginal principle ensures no reallocation of budget can increase total utility.',
      examinerKey: { ao: '', topic: 'Utility Maximisation' }
    },
    {
      id: 6,
      question: 'An economist undertakes a cost-benefit analysis of pollution from a manufacturing process. Which outcome is most likely to guide any recommendation about the optimal level of manufacturing output?',
      options: [
        { key: 'A', text: 'That the marginal social cost of manufacturing equals the marginal social benefit' },
        { key: 'B', text: 'That the marginal cost of pollution is zero' },
        { key: 'C', text: 'That the total revenue of manufacturing equals the total cost' },
        { key: 'D', text: 'That the total benefit of pollution is maximised' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Social efficiency requires MSC = MSB—the condition where net social benefit is maximised. At this output, the marginal benefit to society from the last unit produced exactly equals its marginal social cost (including pollution externalities). Option B (zero pollution cost) is neither achievable nor optimal—some pollution is tolerable if benefits exceed costs. Option C describes break-even, not optimality. Option D is nonsensical—pollution has no benefit to maximise. Cost-benefit analysis seeks the MSC = MSB equilibrium, not elimination of all external costs.',
      examinerKey: { ao: '', topic: 'Cost-Benefit Analysis' }
    },
    {
      id: 7,
      question: 'The diagram shows the cost and revenue curves for a monopolist. Which level of output represents sales maximisation?',
      options: [
        { key: 'A', text: 'Output A' },
        { key: 'B', text: 'Output B' },
        { key: 'C', text: 'Output C' },
        { key: 'D', text: 'Output D' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Sales maximisation (Baumol\'s model) maximises output subject to earning at least normal profit (TR ≥ TC, or AR ≥ AC). This occurs where AR = AC at the highest output level meeting the profit constraint. Point D represents maximum output where the firm still covers average costs. Point A would be profit-maximising (MC=MR), Point B might be revenue-maximising (MR=0), Point C could be an intermediate output. Sales-maximising firms sacrifice profit for market share, producing beyond profit-maximising output until the break-even constraint binds.',
      examinerKey: { ao: '', topic: 'Sales Maximisation' },
      hasDiagram: true,
      diagramDescription: 'Monopoly cost-revenue diagram with outputs A, B, C, D marked'
    },
    {
      id: 8,
      question: 'What might help achieve allocative efficiency?',
      options: [
        { key: 'A', text: 'Differentiated products' },
        { key: 'B', text: 'Government subsidies' },
        { key: 'C', text: 'Monopsony' },
        { key: 'D', text: 'Supernormal profits' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Allocative efficiency occurs where P = MC (output reflects consumer valuations matching production costs). Government subsidies can correct under-production of goods with positive externalities, shifting supply rightward until P = MSC, achieving social optimum. Option A (differentiation) creates market power and P > MC. Option C (monopsony) involves buyer market power causing under-purchase. Option D (supernormal profits) signals P > AC, often associated with P > MC. Subsidies for merit goods/positive externalities are the standard policy tool for improving allocative efficiency from market failure.',
      examinerKey: { ao: '', topic: 'Allocative Efficiency' }
    },
    {
      id: 9,
      question: 'What is the essential feature of nudge theory?',
      options: [
        { key: 'A', text: 'The aim of satisficing' },
        { key: 'B', text: 'The establishing of a legal requirement' },
        { key: 'C', text: 'The existence of a contestable market' },
        { key: 'D', text: 'The idea of persuasion' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Nudge theory, developed by behavioural economists Thaler and Sunstein, uses choice architecture to gently guide decisions without mandates or economic incentives. The essential feature is persuasion through framing, defaults, and information presentation—preserving choice while making desired options easier. Option A (satisficing) is a separate behavioural concept about "good enough" decisions. Option B (legal requirements) contradicts nudge\'s non-coercive nature. Option C (contestable markets) is industrial organisation theory. Persuasion through libertarian paternalism is nudge\'s defining characteristic.',
      examinerKey: { ao: '', topic: 'Nudge Theory' }
    },
    {
      id: 10,
      question: 'A government has a policy where income tax is paid only after the first $20,000 of income has been earned. What would make the government\'s policy more equitable?',
      options: [
        { key: 'A', text: 'Decreasing the threshold for paying income tax to $10,000 for all taxpayers' },
        { key: 'B', text: 'Integrating the tax and welfare systems by introducing a negative income tax' },
        { key: 'C', text: 'Introducing universal benefits that are available to all citizens irrespective of wealth' },
        { key: 'D', text: 'Means testing all benefits so that they remain the same even if real incomes fall' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'A negative income tax (NIT) improves equity by integrating taxation and benefits into a single system. Below a threshold, individuals receive payments (negative tax); above it, they pay tax. This eliminates the poverty trap from means-tested benefit withdrawal and ensures a smooth transition from benefits to work. Option A (lower threshold) makes the system less progressive. Option C (universal benefits) doesn\'t target need. Option D (means testing) can create poverty traps. Milton Friedman\'s NIT proposal aimed to improve both equity and work incentives.',
      examinerKey: { ao: '', topic: 'Equity in Taxation' }
    },
    {
      id: 11,
      question: 'A government introduces a maximum price for rice of P2. What is the effect of this?',
      options: [
        { key: 'A', text: 'Government spending will increase.' },
        { key: 'B', text: 'The price of rice will be unchanged.' },
        { key: 'C', text: 'There will be a shortage of rice.' },
        { key: 'D', text: 'There will be a surplus of rice.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'A maximum price (price ceiling) below equilibrium creates shortage. At P₂ < P₁ (equilibrium), quantity demanded (Q₃) exceeds quantity supplied (Q₁), creating excess demand of Q₃ − Q₁. Suppliers exit or reduce production while consumers demand more at the lower price. Option A depends on whether government intervenes to address the shortage. Option B is incorrect if P₂ < P₁. Option D describes excess supply from minimum prices (price floors). Maximum prices binding below equilibrium always create shortages, potentially requiring rationing or black markets.',
      examinerKey: { ao: '', topic: 'Maximum Prices' },
      hasDiagram: true,
      diagramDescription: 'Supply and demand for rice with prices P₁, P₂ and quantities Q₁, Q₂, Q₃'
    },
    {
      id: 12,
      question: 'A government intervenes to raise the wages of a group of workers to prevent their exploitation. Where might such government intervention be justified?',
      options: [
        { key: 'A', text: 'In an industry that is protected by tariffs on imports from abroad' },
        { key: 'B', text: 'In an industry where a trade union negotiates wages for the workers' },
        { key: 'C', text: 'In an industry where the output is produced by a single firm monopolist' },
        { key: 'D', text: 'In an industry where workers are employed by a monopsonist' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Monopsony (single buyer of labour) enables employer exploitation—wages are pushed below marginal revenue product as the employer exercises buyer power. Government minimum wages can actually increase both wages and employment by eliminating monopsony distortion (moving toward competitive equilibrium). Options A (tariff protection) and C (product monopoly) describe output market structures, not labour market exploitation. Option B (unionised industry) already has worker countervailing power. Only monopsony creates the wage suppression that justifies government intervention to raise wages without causing unemployment.',
      examinerKey: { ao: '', topic: 'Monopsony Labour Market' }
    },
    {
      id: 13,
      question: 'What is likely to reduce the domestic money supply?',
      options: [
        { key: 'A', text: 'Banks being allowed to hold a lower liquidity ratio.' },
        { key: 'B', text: 'Individuals choosing to hold more money in the form of idle balances.' },
        { key: 'C', text: 'The government financing its budget deficit by borrowing from the banking sector.' },
        { key: 'D', text: 'The government increasing its borrowing from other countries.' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Government borrowing from abroad brings foreign currency which, if used to retire domestic bank debt or buy back domestic bonds, can reduce domestic money supply. Options A (lower reserve ratios) allows greater money creation via the credit multiplier—increases supply. Option B (higher cash holdings) doesn\'t change total money supply, just its velocity. Option C (deficit financed by bank borrowing) typically creates money as banks expand credit. Foreign borrowing substitutes external for domestic financing, potentially contracting domestic monetary conditions.',
      examinerKey: { ao: '', topic: 'Money Supply' }
    },
    {
      id: 14,
      question: 'The unemployment rate in an economy may continue to rise even after the economy has recovered from a recession. Which explanation for this trend is not correct?',
      options: [
        { key: 'A', text: 'Many foreign businesses have moved out of the country.' },
        { key: 'B', text: 'The government has abolished the national minimum wage.' },
        { key: 'C', text: 'An increase in net migration of low-skilled workers.' },
        { key: 'D', text: 'Workers lose skills, making them less employable.' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Abolishing minimum wages would typically reduce unemployment (in classical analysis) by allowing wages to clear the labour market at higher employment. Options A (FDI outflow), C (labour supply increase), and D (skills atrophy/hysteresis) explain rising post-recovery unemployment. The question asks which is NOT correct: minimum wage abolition should increase employment and reduce unemployment, not cause it to continue rising. This contradicts classical labour market theory where minimum wages above equilibrium cause unemployment.',
      examinerKey: { ao: '', topic: 'Unemployment Persistence' }
    },
    {
      id: 15,
      question: 'In which situation is expansionary fiscal policy least likely to be effective?',
      options: [
        { key: 'A', text: 'Inflation is below its target rate' },
        { key: 'B', text: 'Lack of confidence in the economy' },
        { key: 'C', text: 'There is a negative output gap' },
        { key: 'D', text: 'Unemployment is high' }
      ],
      correctAnswer: 'B',
      nexusReasoning: 'Fiscal expansion is least effective when poor confidence causes businesses and consumers to save rather than spend additional income—high marginal propensity to save reduces the multiplier. Options A, C, and D describe conditions where fiscal stimulus is typically effective: low inflation means no overheating constraint, negative output gap indicates spare capacity, and high unemployment suggests resources available to absorb increased demand. Lack of confidence creates Keynesian paradox of thrift dynamics where increased government spending is offset by private sector deleveraging.',
      examinerKey: { ao: '', topic: 'Fiscal Policy Effectiveness' }
    },
    {
      id: 16,
      question: 'In these four diagrams, the money supply is initially at MS₁ and the demand for money is initially at LP₁. Which diagram shows the effect of a policy of quantitative easing on the rate of interest?',
      options: [
        { key: 'A', text: 'Diagram A (money supply shifts right)' },
        { key: 'B', text: 'Diagram B (money demand shifts)' },
        { key: 'C', text: 'Diagram C (money supply shifts left)' },
        { key: 'D', text: 'Diagram D (no shift)' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Quantitative easing (QE) involves central bank asset purchases that inject money into the economy—money supply shifts rightward from MS₁ to MS₂. In the liquidity preference framework, increased money supply at unchanged money demand reduces the equilibrium interest rate. The central bank creates new money to buy government bonds from banks, increasing their reserves and lowering interest rates (particularly long-term rates). Options involving demand shifts or leftward supply shifts contradict QE\'s mechanism.',
      examinerKey: { ao: '', topic: 'Quantitative Easing' },
      hasDiagram: true,
      diagramDescription: 'Four liquidity preference diagrams showing different shifts'
    },
    {
      id: 17,
      question: 'What is most likely to increase if an economy enters a negative output gap?',
      options: [
        { key: 'A', text: 'Business confidence' },
        { key: 'B', text: 'Economic growth rate' },
        { key: 'C', text: 'Inflation rate' },
        { key: 'D', text: 'Unemployment rate' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'A negative output gap means actual GDP is below potential GDP—the economy has spare capacity with underutilised resources, manifesting primarily as unemployment. Firms operate below capacity and lay off workers. Options A (confidence) and B (growth) typically fall during negative output gaps. Option C (inflation) decreases as deficient demand creates disinflationary pressure. Only unemployment rises as the gap between actual and potential output translates directly into joblessness—the Okun\'s Law relationship between output gaps and unemployment changes.',
      examinerKey: { ao: '', topic: 'Output Gaps' }
    },
    {
      id: 18,
      question: 'A country with a managed exchange rate has a persistent deficit on the current account. It devalues its currency to reduce this deficit. Under which conditions will a devaluation help the government achieve its four main macroeconomic objectives?',
      options: [
        { key: 'A', text: 'Marshall-Lerner: No, Employment situation: Below full employment' },
        { key: 'B', text: 'Marshall-Lerner: No, Employment situation: Full employment' },
        { key: 'C', text: 'Marshall-Lerner: Yes, Employment situation: Below full employment' },
        { key: 'D', text: 'Marshall-Lerner: Yes, Employment situation: Full employment' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'For devaluation to improve all four objectives (growth, employment, price stability, BoP equilibrium), it must: (1) improve the current account (requires Marshall-Lerner condition: PEDₓ + PEDₘ > 1); (2) not cause excess inflation (requires spare capacity below full employment to accommodate increased export demand). Option C satisfies both: M-L ensures trade balance improvement, and unemployment means export expansion doesn\'t cause demand-pull inflation. At full employment (Options B, D), devaluation would be inflationary. Without M-L (Options A, B), devaluation worsens the current account.',
      examinerKey: { ao: '', topic: 'Devaluation and Policy Objectives' }
    },
    {
      id: 19,
      question: 'What would cause an individual\'s demand curve for an active money balance to move to the left?',
      options: [
        { key: 'A', text: 'An increase in the frequency of income payments' },
        { key: 'B', text: 'An increase in the general price level' },
        { key: 'C', text: 'An increase in the individual\'s income' },
        { key: 'D', text: 'An increase in the rate of interest' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The transactions demand for money (active balances) depends on the payments interval. More frequent income payments (weekly vs monthly) reduce the average cash needed for transactions—individuals need smaller balances at any point. This shifts the demand curve leftward. Options B (higher prices) and C (higher income) increase transactions demand (rightward shift). Option D (higher interest rates) causes movement along the curve (speculative motive) rather than a shift. The frequency effect is distinct from the level of transactions, affecting the required money holdings per period.',
      examinerKey: { ao: '', topic: 'Transactions Demand for Money' }
    },
    {
      id: 20,
      question: 'A government funds an increase in transfer payments to the unemployed by increasing the higher rate of income tax. What is the most likely impact of this change?',
      options: [
        { key: 'A', text: 'Government borrowing increases' },
        { key: 'B', text: 'The incentive to work increases' },
        { key: 'C', text: 'The marginal propensity to consume increases' },
        { key: 'D', text: 'The quantity of imports increases' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Redistributing income from high earners (low MPC) to unemployed (high MPC) increases the average MPC across the economy. The unemployed spend a higher proportion of additional income on consumption than wealthy taxpayers who save more. This revenue-neutral redistribution is expansionary despite balanced budgets—the "balanced budget multiplier" effect. Option A is wrong (revenue-neutral). Option B contradicts higher marginal tax rates. Option D would require increased aggregate demand, which does occur, potentially raising imports as part of increased consumption.',
      examinerKey: { ao: '', topic: 'Redistribution and MPC' }
    },
    {
      id: 21,
      question: 'Which combination shows the most likely outcome if a government increases the level of direct taxation?',
      options: [
        { key: 'A', text: 'Balance of payments deteriorates and inflation increases' },
        { key: 'B', text: 'Economic growth increases and balance of payments improves' },
        { key: 'C', text: 'Inflation decreases and unemployment increases' },
        { key: 'D', text: 'Unemployment decreases and balance of payments improves' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Higher direct taxes (income tax, corporation tax) reduce disposable income and consumption, contracting aggregate demand. This contractionary fiscal policy leads to: lower inflation (reduced demand-pull pressure) and higher unemployment (firms reduce output and hiring). Option A contradicts deflationary impact. Option B contradicts contractionary growth effects. Option D suggests expansion, not contraction. The AD leftward shift from higher taxes causes the classic trade-off: lower inflation achieved at the cost of higher unemployment, consistent with Phillips Curve analysis.',
      examinerKey: { ao: '', topic: 'Direct Taxation Effects' }
    },
    {
      id: 22,
      question: 'In an economy, the price elasticity of demand for imported raw materials is 0.3, and the price elasticity of demand for exports is also 0.3. Following a depreciation of the economy\'s currency, what will the impact on inflation be?',
      options: [
        { key: 'A', text: 'Cost-push: Decrease, Demand-pull: Decrease' },
        { key: 'B', text: 'Cost-push: Decrease, Demand-pull: Increase' },
        { key: 'C', text: 'Cost-push: Increase, Demand-pull: Decrease' },
        { key: 'D', text: 'Cost-push: Increase, Demand-pull: Increase' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'With PEDₓ + PEDₘ = 0.6 < 1, the Marshall-Lerner condition fails. Depreciation: (1) Raises import prices for raw materials, increasing production costs → cost-push inflation increases; (2) With inelastic trade, export revenue falls (higher prices don\'t sufficiently increase volume) and import spending rises → net exports worsen → AD falls → demand-pull decreases. The J-curve effect dominates: trade balance worsens initially before improving (if at all), reducing aggregate demand while import costs simultaneously create cost-push pressure.',
      examinerKey: { ao: '', topic: 'Depreciation and Inflation' }
    },
    {
      id: 23,
      question: 'A government is aiming to reduce the unemployment rate from 10% to 5%. What is a likely effect if this aim is achieved?',
      options: [
        { key: 'A', text: 'A decrease in interest rates' },
        { key: 'B', text: 'A slow down in the rate of economic growth' },
        { key: 'C', text: 'An increase in demand for exports' },
        { key: 'D', text: 'An increase in inflation' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Halving unemployment from 10% to 5% represents significant labour market tightening. As the economy approaches full employment, labour becomes scarce, driving wage increases. Higher wages feed into production costs and consumer spending, generating both cost-push and demand-pull inflation. This reflects the Phillips Curve trade-off: lower unemployment achieved through expansionary policy is associated with higher inflation. Options A, B, and C describe unrelated or contrary effects. The inflation consequence of reduced unemployment is the central policy trade-off in macroeconomics.',
      examinerKey: { ao: '', topic: 'Phillips Curve Trade-off' }
    },
    {
      id: 24,
      question: 'Which statement is correct?',
      options: [
        { key: 'A', text: 'Economic development is necessary for economic growth.' },
        { key: 'B', text: 'Economic growth and economic development are directly proportional.' },
        { key: 'C', text: 'Economic growth enables economic development.' },
        { key: 'D', text: 'Economic growth is always sustainable.' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'Economic growth (rising GDP) provides the resources—government revenue, investment capacity, improved living standards—that enable development (broader improvements in well-being, HDI, capabilities). Growth is necessary but not sufficient for development; growth enables development but doesn\'t guarantee it (resource curse, inequality). Option A reverses causation. Option B overstates the relationship (growth without development is possible). Option D ignores environmental and social limits. The correct framing is that growth facilitates development through the resources it generates, though conscious policy is needed to translate growth into development.',
      examinerKey: { ao: '', topic: 'Growth and Development' }
    },
    {
      id: 25,
      question: 'What is a trade-weighted exchange rate?',
      options: [
        { key: 'A', text: 'The price of one currency against a basket of other currencies' },
        { key: 'B', text: 'The price of one currency in terms of another' },
        { key: 'C', text: 'The price of one currency in terms of its real purchasing power' },
        { key: 'D', text: 'The price of one currency being determined by state intervention' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'A trade-weighted (or effective) exchange rate measures a currency\'s value against a basket of trading partners\' currencies, weighted by their shares in the country\'s trade. This provides a more comprehensive view of competitiveness than bilateral rates. Option B describes a bilateral exchange rate. Option C describes a real exchange rate (adjusted for price levels). Option D describes a managed/fixed rate regime. The trade-weighted index captures overall external value changes, essential for assessing aggregate competitiveness and imported inflation pressure.',
      examinerKey: { ao: '', topic: 'Trade-Weighted Exchange Rate' }
    },
    {
      id: 26,
      question: 'The United Nations gives aid to a developing country so it can purchase vaccinations manufactured in India. How is this aid characterised?',
      options: [
        { key: 'A', text: 'Bilateral and tied' },
        { key: 'B', text: 'Bilateral and untied' },
        { key: 'C', text: 'Multilateral and tied' },
        { key: 'D', text: 'Multilateral and untied' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'The UN (a multilateral organisation with many member states) provides the aid, making it multilateral rather than bilateral (country-to-country). The aid is tied because it must be used to purchase specific goods (vaccinations) from a specified source (India), rather than being freely spent. Tied aid restricts recipient choice, potentially reducing value-for-money but ensuring donor objectives are met. Untied aid would allow the recipient to source goods from any supplier. This combination—multilateral source, tied conditions—classifies as Option C.',
      examinerKey: { ao: '', topic: 'Types of Aid' }
    },
    {
      id: 27,
      question: 'What is a protectionist policy a government may use to reduce the deficit on the balance of payments of the current account?',
      options: [
        { key: 'A', text: 'Revaluation of the exchange rate' },
        { key: 'B', text: 'Increase in the rate of income tax' },
        { key: 'C', text: 'Increase in the rate of interest' },
        { key: 'D', text: 'Introduction of import quotas' }
      ],
      correctAnswer: 'D',
      nexusReasoning: 'Import quotas directly limit the quantity of foreign goods entering the country, reducing imports and improving the current account. This is textbook protectionism—a trade barrier that restricts imports. Option A (revaluation) worsens competitiveness, increasing the deficit. Options B (income tax) and C (interest rates) are domestic macroeconomic policies, not protectionist trade measures. Only quotas represent the protectionist toolkit: tariffs, quotas, and non-tariff barriers that shield domestic producers from foreign competition while reducing import volumes.',
      examinerKey: { ao: '', topic: 'Protectionism' }
    },
    {
      id: 28,
      question: 'The diagram shows a Lorenz curve of the distribution of income of households for a country. Which curve shows the most equal distribution of income of households?',
      options: [
        { key: 'A', text: 'Curve A (closest to 45° line)' },
        { key: 'B', text: 'Curve B' },
        { key: 'C', text: 'Curve C' },
        { key: 'D', text: 'Curve D (furthest from 45° line)' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'The Lorenz curve shows cumulative income share against cumulative population share. Perfect equality is the 45° line (each population percentile receives the same income share). The closer a Lorenz curve is to this diagonal, the more equal the distribution. Curve A, nearest the 45° line, represents the most equal distribution with the smallest Gini coefficient. Curve D, furthest from the diagonal, shows extreme inequality where a small population share captures most income. The Gini coefficient equals twice the area between the Lorenz curve and the 45° line.',
      examinerKey: { ao: '', topic: 'Lorenz Curve' },
      hasDiagram: true,
      diagramDescription: 'Lorenz curves A, B, C, D showing different inequality levels'
    },
    {
      id: 29,
      question: 'An economy has a large surplus on the current account. It revalues its currency. The current account surplus becomes greater in the short run, then in the long run becomes smaller and eventually a deficit. What is the sum of the price elasticities of imports and exports in the short run and in the long run?',
      options: [
        { key: 'A', text: 'Short run: Greater than 1.0, Long run: Greater than 1.0' },
        { key: 'B', text: 'Short run: Greater than 1.0, Long run: Less than 1.0' },
        { key: 'C', text: 'Short run: Less than 1.0, Long run: Greater than 1.0' },
        { key: 'D', text: 'Short run: Less than 1.0, Long run: Less than 1.0' }
      ],
      correctAnswer: 'C',
      nexusReasoning: 'This describes the J-curve effect in reverse (for revaluation rather than devaluation). Initially, revaluation worsens terms of trade but export/import quantities are sticky (inelastic demand in short run), so trade values change perversely—the surplus actually increases (sum of elasticities < 1). Over time, consumers and firms adjust to new prices (elasticities rise > 1), reducing export volumes and increasing imports until deficit emerges. The short-run inelasticity (< 1) followed by long-run elasticity (> 1) produces the J-curve-shaped adjustment path.',
      examinerKey: { ao: '', topic: 'J-Curve and Marshall-Lerner' }
    },
    {
      id: 30,
      question: 'What is not a characteristic of an emerging economy?',
      options: [
        { key: 'A', text: 'An agricultural sector with a growing % of GDP' },
        { key: 'B', text: 'High birth rates' },
        { key: 'C', text: 'High potential for growth' },
        { key: 'D', text: 'Increasing access to education' }
      ],
      correctAnswer: 'A',
      nexusReasoning: 'Emerging economies are characterised by structural transformation away from agriculture toward industry and services. Agriculture\'s GDP share should be declining, not growing, as the economy develops. Option B (high birth rates) is common in earlier development stages. Option C (growth potential) defines emerging economies—they\'re "emerging" precisely because of high expected growth. Option D (education access) reflects human capital investment typical of developing economies. Growing agricultural share would indicate regression or stagnation, contrary to the emerging economy trajectory of industrialisation and diversification.',
      examinerKey: { ao: '', topic: 'Emerging Economies' }
    }
  ]
};

import { additionalPapers2024 } from './examPapers2024';
import { additionalPapers2025 } from './examPapers2025';

// Existing papers array (Oct/Nov 2025)
const existingPapers: ExamPaper[] = [paper9708_11, paper9708_12, paper9708_31, paper9708_32];

// All exam papers combined with metadata for filtering
export const allExamPapers: ExamPaper[] = [
  ...existingPapers,
  ...additionalPapers2024,
  ...additionalPapers2025,
];

// Helper function to get paper by code and session
export const getPaperByCodeAndSession = (code: string, session: string): ExamPaper | undefined => {
  return allExamPapers.find(paper => paper.code === code && paper.session === session);
};

// Helper function to get paper by code
export const getPaperByCode = (code: string): ExamPaper | undefined => {
  return allExamPapers.find(paper => paper.code === code);
};

// Helper to filter papers by level
export const getPapersByLevel = (level: 'AS' | 'A2'): ExamPaper[] => {
  return allExamPapers.filter(paper => paper.level === level);
};

// Helper to filter papers by session type
export const getPapersBySeries = (series: 'May/June' | 'October/November'): ExamPaper[] => {
  return allExamPapers.filter(paper => paper.session.includes(series.split('/')[0]));
};

// Helper function to search questions
export const searchQuestions = (query: string): { paper: ExamPaper; question: MCQQuestion }[] => {
  const lowerQuery = query.toLowerCase();
  const results: { paper: ExamPaper; question: MCQQuestion }[] = [];
  
  allExamPapers.forEach(paper => {
    paper.questions.forEach(question => {
      if (
        question.question.toLowerCase().includes(lowerQuery) ||
        question.nexusReasoning.toLowerCase().includes(lowerQuery) ||
        question.examinerKey.topic.toLowerCase().includes(lowerQuery) ||
        question.options.some(opt => opt.text.toLowerCase().includes(lowerQuery))
      ) {
        results.push({ paper, question });
      }
    });
  });
  
  return results;
};
