export interface KeyTerm {
 term: string;
 definition: string;
}

export interface MCQQuestion {
 question: string;
 options: string[];
 answer?: string;
}

export interface ContentSection {
 id: string;
 title: string;
 content: string[];
 keyTerms?: KeyTerm[];
 tables?: { headers: string[]; rows: string[][] }[];
 mcqs?: MCQQuestion[];
 examTip?: string;
}

export interface FreemiumChapter {
 id: string;
 title: string;
 subtitle?: string;
 sections: ContentSection[];
}

export const revisionNotes: FreemiumChapter[] = [
 {
 id: "basic-economic-ideas",
 title: "Basic Economic Ideas & Resource Allocation",
 subtitle: "AS Level — Chapter 1",
 sections: [
 {
 id: "1.1",
 title: "1.1 Scarcity, Choice and Opportunity Cost",
 content: [
 "The fundamental economic problem arises because scarcity refers to the fact that at any moment in time, the output that an economy is able to produce will be limited by the resources and technology available. People's wants and needs, however, will always exceed the resources available to satisfy them — in other words, these wants and needs are unlimited. This is known as the fundamental economic problem.",
 "As a result of this condition of scarcity, choices must be made. In all economies, there is an inevitability of choice at all levels of decision making — at the level of the individual, the firm and the government.",
 "The focus on choice stresses the need to recognise the implications not only of choosing one thing, but also of not choosing something else. Opportunity cost is the benefit forgone from not choosing the next best alternative. An example is using a piece of land for farming purposes rather than building a factory on it.",
 "The emphasis on choice focuses on three basic economic questions: What to produce? How to produce? For whom to produce? These three basic economic questions are solved in different ways in various economies — through different systems or mechanisms of resource allocation."
 ],
 keyTerms: [
 { term: "Wants", definition: "Items that are not essential for survival (e.g. a new car or television)." },
 { term: "Needs", definition: "Items that are essential for survival (e.g. food or shelter)." },
 { term: "Resources", definition: "The inputs available to an economy for use in the production of goods and services." },
 { term: "Economic Problem", definition: "A situation where there are not enough resources to satisfy all human needs and wants." },
 { term: "Opportunity Cost", definition: "The benefit forgone from not choosing the next best alternative." },
 { term: "Scarcity", definition: "The fundamental problem that resources are limited while wants are unlimited, making choice necessary." }
 ],
 mcqs: [
 { question: "The fundamental economic problem exists because:", options: ["Resources are scarce in relation to unlimited wants", "A business does not know how much it can sell", "Resources are scarce in relation to needs", "We cannot always have what we want"], answer: "A" },
 { question: "Wants are unlimited because:", options: ["There will always be something we would like to have", "There will always be something we need", "Our income is limited", "We are never aware of what we might want in the future"], answer: "A" },
 { question: "A government has limited resources to fund the wants of its population. This means that:", options: ["The government has to make choices", "The government is unable to provide any goods free of charge", "The government has to cut the pay of government workers", "The government is unable to borrow more funds"], answer: "A" },
 { question: "A teacher usually marks examination papers during the school break. She receives $900. Instead, she has decided to do some maintenance work on her apartment. To get someone to do the work would cost $600. What is the opportunity cost?", options: ["$300", "$600", "$900", "$1500"], answer: "C" }
 ]
 },
 {
 id: "1.2",
 title: "1.2 Economic Methodology",
 content: [
 "Economics as a social science: A social science can be defined as the scientific study of human society. Economics is social in the sense that it studies different aspects of human behaviour and, in particular, the choices that humans make. Economics is a science in the sense that it uses an organised system of theories and facts capable of making verifiable predictions.",
 "A positive statement is one that can be checked against the facts to decide whether it is true. A normative statement, on the other hand, reflects the norms or values of the person expressing the statement — such a statement will involve a value judgement and will reflect someone's personal opinions. Normative statements often include the words 'should' or 'ought to'.",
 "The assumption of ceteris paribus (other things being equal) means that economists can analyse one aspect of human behaviour at a time. For example, in this way it has been possible to put forward economic laws of demand and supply."
 ],
 keyTerms: [
 { term: "Ceteris Paribus", definition: "A Latin term that literally means 'other things being equal'." },
 { term: "Economic Law", definition: "An economic theory put forward by economists (e.g. the laws of demand and supply)." },
 { term: "Microeconomics", definition: "The study of the behaviour of relatively small economic units (e.g. particular individuals, households or firms)." },
 { term: "Macroeconomics", definition: "The study of economics at the national and international levels." },
 { term: "Short Run", definition: "The time period in which only certain (variable) factors of production can change; fixed factors remain unchanged." },
 { term: "Long Run", definition: "The time period when the inputs of all factors of production can be changed." },
 { term: "Very Long Run", definition: "The time period when supply conditions can change because of technical progress." }
 ],
 mcqs: [
 { question: "Which of these is a positive statement?", options: ["Wages in Indonesia are likely to be unevenly distributed", "In 2019, the average wage in Indonesia was 3.8 million Indonesian Rupiah per month", "The average hourly wage rate in Jakarta should be higher than elsewhere", "The average wage in Indonesia depends on how it is measured"], answer: "B" }
 ]
 },
 {
 id: "1.3",
 title: "1.3 Factors of Production",
 content: [
 "Production in an economy can take place in three sectors: Primary sector (extractive — farming, fishing, mining), Secondary sector (manufacturing and construction), and Tertiary sector (services — banking, tourism, teaching).",
 "There are four factors of production:",
 "Land: All the natural resources used in production — farmland, forests, lakes, rivers, mineral deposits such as coal or oil.",
 "Labour: All the human input into production — not just the people themselves, but their skills, training, education and qualifications. Also referred to as 'human capital' or 'intellectual capital'.",
 "Physical Capital: The human-made aids used in production — equipment, machinery and factories.",
 "Enterprise: The factor that brings the other factors together to produce products. The individual who combines the other factors, and takes a risk in doing so, is an entrepreneur.",
 "Specialisation refers to a process of concentration on a particular aspect of production. Adam Smith described in The Wealth of Nations (1776) how division of labour in a pin factory enabled far more pins to be produced than if each worker tried to do everything alone."
 ],
 keyTerms: [
 { term: "Human Capital", definition: "The skills, knowledge and experience possessed by a population in terms of their value or cost to a business or an economy." },
 { term: "Physical Capital", definition: "The tangible, human-made objects that a business uses to produce goods and services (e.g. tools, machinery and equipment)." },
 { term: "Rent", definition: "The reward to land — the price paid for the use of land." },
 { term: "Wages", definition: "The reward to labour based on the number of hours worked multiplied by an hourly rate of pay." },
 { term: "Interest", definition: "The reward for parting with liquidity; the reward to capital." },
 { term: "Profit", definition: "The reward to enterprise, defined as the difference between total revenue and total costs." },
 { term: "Specialisation", definition: "The process whereby individuals, firms and economies concentrate on producing those products in which they have an advantage." },
 { term: "Division of Labour", definition: "The way in which production is divided into a sequence of specific tasks enabling workers to specialise." }
 ],
 mcqs: [
 { question: "What are the factors of production?", options: ["Natural resources available for production", "Another term for resources in an economy", "What are required in the future to produce goods and services", "The human resources used in production"], answer: "B" },
 { question: "Which is the best explanation of an entrepreneur?", options: ["Someone who is lucky and makes money", "Someone who succeeds in some but not all business activities", "Someone who is in charge of a firm", "Someone who seeks out business opportunities and is willing to take risks"], answer: "D" }
 ]
 },
 {
 id: "1.4",
 title: "1.4 Resource Allocation in Different Economic Systems",
 content: [
 "An allocative mechanism is needed for deciding how scarce economic goods are produced and consumed. There are three different types: market economies, planned economies, and mixed economies.",
 "Market economies: The allocation of resources is left to market forces of demand and supply, operating through the price mechanism. Decisions are made by individual consumers (seeking to maximise utility) and producers (seeking to maximise profits). Competition between firms can lead to greater efficiency. However, merit goods will be underprovided, demerit goods overprovided, public goods will not be provided at all, and income/wealth disparities can be very significant.",
 "Planned economies (command economies): Allocation of scarce resources through government intervention with no or very little scope for market forces. The government can take decisions in the national interest and bring about a more equitable distribution of income and wealth. However, the system tends to be bureaucratic and inefficient, and products are often of poor quality with little consumer choice.",
 "Mixed economies: Most economies today are mixed, combining elements of both market and planned systems. However, there are large differences — for example, between China (where the government still plays an important role) and the USA (where the government has a limited role).",
 "Transitional economies: A number of economies are going through a period where central planning is being reduced and market forces are gaining greater influence (e.g. China, Cuba). Problems associated with transition include rising unemployment, inflation, falling output, and reduced welfare provision."
 ],
 keyTerms: [
 { term: "Market Economy", definition: "An economy where resources are allocated through market forces of demand and supply via the price mechanism." },
 { term: "Planned (Command) Economy", definition: "An economy where decisions about the allocation of resources are taken by the state." },
 { term: "Mixed Economy", definition: "An economy that combines elements of both market and planned systems." }
 ],
 tables: [
 {
 headers: ["Problem", "Description"],
 rows: [
 ["Unemployment", "When moving towards market forces, unemployment is likely to increase as firms aim to maximise profits and may lay off workers."],
 ["Inflation", "In a planned economy the state controls prices; with market forces, inflation is more likely."],
 ["Output", "State support for inefficient firms ends, so such firms may not compete and output could fall."],
 ["Welfare", "A planned economy provides housing and healthcare to everyone; market forces may reduce welfare provision."]
 ]
 }
 ]
 },
 {
 id: "1.5",
 title: "1.5 Production Possibility Curves",
 content: [
 "A production possibility curve (PPC) shows the different combinations of products that can be produced if an economy is working at full capacity.",
 "The PPC is drawn as a curve rather than a straight line because not all factors of production are equally efficient. Constant opportunity costs would give a straight-line PPC; increasing opportunity costs give the characteristic bowed-out curve.",
 "A point on the PPC (e.g. Point A) shows an efficient combination of outputs. Any movement along the curve illustrates the concept of opportunity cost — producing more of one good means producing less of the other.",
 "A point inside the PPC (e.g. Point C) shows that the economy is not using its resources efficiently — there is unemployment of resources.",
 "A point outside the PPC (e.g. Point B) is unreachable with current resources. However, economic growth — from more or more productive resources — enables a rightward shift of the PPC. Conversely, a decrease in resource quantity/quality shifts the PPC leftward."
 ],
 keyTerms: [
 { term: "Production Possibility Curve (PPC)", definition: "A diagram showing the different combinations of two goods that can be produced when resources are fully and efficiently employed." },
 { term: "Constant Opportunity Cost", definition: "When the sacrifice of one good to produce another remains the same — shown by a straight-line PPC." },
 { term: "Increasing Opportunity Cost", definition: "When an ever-increasing amount of one product must be sacrificed to produce more of another — shown by a bowed-out PPC." }
 ]
 },
 {
 id: "1.6",
 title: "1.6 Classification of Goods and Services",
 content: [
 "Free goods: A good that is not scarce and does not require a market price. The supply equals demand at zero price, with no opportunity cost involved.",
 "Private goods (economic goods): Consumed by individuals for their own benefit. They have two key characteristics — excludability (people can be excluded from consuming it) and rivalry (consumption by one person reduces availability for others).",
 "Public goods: Provided by society so that everyone can benefit. They have two key characteristics — non-excludability (once provided, no one can be excluded) and non-rivalry (consumption by one person does not reduce availability for others). They also exhibit non-rejectability. The free rider problem means these must be provided by the public sector, financed through taxation.",
 "Merit goods: A type of private good (rival and excludable) that would be underprovided and underconsumed if left to the free market due to information failure. Examples include education and healthcare. People don't fully appreciate their value, creating a market imperfection.",
 "Demerit goods: The opposite of merit goods — would be overproduced and overconsumed in a free market. Socially undesirable goods (e.g. alcohol and tobacco). The overproduction and overconsumption results from imperfect information by consumers about the harmful effects."
 ],
 keyTerms: [
 { term: "Free Good", definition: "A good that is not scarce and so does not require a market price." },
 { term: "Private Good", definition: "A good that is bought and consumed by individuals for their own benefit — both rival and excludable." },
 { term: "Public Good", definition: "A good that is non-rival, non-excludable and non-rejectable." },
 { term: "Merit Good", definition: "A product that is rivalrous and excludable but, if left to a free market, would be underproduced and underconsumed." },
 { term: "Demerit Good", definition: "A product that would be overproduced and overconsumed in a free market due to information failure." },
 { term: "Free Rider", definition: "The idea that it would be impossible to charge for a good because non-payers cannot be excluded from benefiting." },
 { term: "Information Failure", definition: "Where people lack the full information to make optimal consumption decisions." },
 { term: "Market Failure", definition: "A market imperfection giving rise to an allocation of scarce resources that is not as efficient as it might otherwise have been." }
 ],
 tables: [
 {
 headers: ["", "Excludable", "Non-excludable"],
 rows: [
 ["Rival", "Private good", "Quasi-public good"],
 ["Non-rival", "Quasi-public good", "Public good"]
 ]
 }
 ]
 }
 ]
 },
 {
 id: "price-system-microeconomy",
 title: "The Price System & The Microeconomy",
 subtitle: "AS Level — Chapter 2",
 sections: [
 {
 id: "2.1",
 title: "2.1 Demand and Supply Curves",
 content: [
 "Effective demand refers to demand which can be supported by having the means to pay. Consumers must not just want a product, but be willing and able to pay for it.",
 "An individual demand curve shows the quantity of a product a consumer is willing and able to buy at each price, ceteris paribus. It slopes downward from left to right — the law of demand. Market demand is derived by aggregating all individual demand curves.",
 "Supply is the quantity of a product that firms are willing and able to sell at each price, ceteris paribus. A supply curve slopes upward from left to right — the law of supply. Market supply is derived by aggregating all individual supply curves.",
 "Derived demand is where the demand for a component depends upon the final demand for a product that uses it (e.g. demand for rubber derives from demand for car tyres).",
 "Composite demand refers to the demand for a product that can be used for more than one purpose (e.g. stone for building and road construction)."
 ],
 keyTerms: [
 { term: "Effective Demand", definition: "Demand supported by the willingness and ability to pay." },
 { term: "Law of Demand", definition: "As price falls, quantity demanded rises (inverse relationship), ceteris paribus." },
 { term: "Law of Supply", definition: "As price rises, quantity supplied rises (direct relationship), ceteris paribus." },
 { term: "Derived Demand", definition: "Demand for a factor of production that depends on the demand for the final product." },
 { term: "Composite Demand", definition: "Demand for a product that can be used for more than one purpose." }
 ]
 },
 {
 id: "2.1-determinants",
 title: "Determinants of Demand and Supply",
 content: [
 "A change in price causes a movement along the demand curve. A fall in price causes an extension in demand; a rise in price causes a contraction in demand.",
 "Shifts in demand (changes in demand) are caused by: changes in consumer incomes, changes in the price of substitutes or complements, advertising campaigns, population changes, changes in tastes and preferences, changes in interest rates, or changes in the weather.",
 "Normal goods: Demand increases when incomes rise (rightward shift). Inferior goods: Demand decreases when incomes rise (leftward shift — e.g. demand for bus journeys may fall as people buy cars).",
 "Shifts in supply are caused by: indirect taxes (shift supply curve upward/leftward), subsidies (shift supply curve downward/rightward), changes in production costs, improvements in technology, changes in the prices of other goods, and expected future prices.",
 "It is crucial to distinguish between a movement along a curve (caused by a change in the good's own price) and a shift of the curve (caused by changes in other factors)."
 ],
 keyTerms: [
 { term: "Extension in Demand", definition: "An increase in quantity demanded caused by a fall in the good's own price — a movement along the demand curve." },
 { term: "Contraction in Demand", definition: "A decrease in quantity demanded caused by a rise in the good's own price." },
 { term: "Normal Good", definition: "A good for which demand increases as income rises." },
 { term: "Inferior Good", definition: "A good for which demand decreases as income rises." },
 { term: "Substitute", definition: "A product that could be used for the same purpose by consumers." },
 { term: "Complement", definition: "A product that is directly related to and used with another product." }
 ]
 }
 ]
 }
];

export const modelAnswers: FreemiumChapter[] = [
 {
 id: "model-answers-paper1",
 title: "Model Answers — 9708/23/M/J/19",
 subtitle: "CAIE AS Level Economics Paper 2",
 sections: [
 {
 id: "ma-1a",
 title: "Question 1: Nigeria & OPEC Oil Market",
 content: [
 "Section A — Part (a): Between 2015 and 2016, oil production in Nigeria fell by 0.9 barrels per day from 2.3 barrels to 1.6 barrels each day.",
 "Part (b): In 2014, OPEC decided to increase its supply by 12% (S→S₁), causing price to fall by 60% to $30 per barrel (P→P₁) and quantity demanded to extend (Q→Q₁). This caused a rise in Nigeria's total GDP, indicating short-term economic growth, high employment and living standards. But as world oil price fell, Nigeria's export revenue fell drastically (80% of its exports were oil), worsening the current account balance. In 2016, OPEC decided to reduce supply to raise prices — this raised export revenue as OPEC's oil demand is inelastic, improving the balance of payments disequilibrium, but increased unemployment.",
 "Part (c) — Inelastic Demand: When the percentage change in price is greater than the percentage change in demand, ceteris paribus. A 60% fall in world oil price only caused a 45% fall in OPEC's revenue, showing that the increase in demand was lesser than the fall in price, indicating inelastic demand.",
 "Part (f) — OPEC's Price-Making Power: OPEC may control world oil prices as they supply approximately 50% of global demand — effectively a monopoly. Even slight changes in OPEC's supply disrupt entire world oil supply. When OPEC increased supply by 12% in 2014, prices fell by more than 60%. However, in the future OPEC may not be as successful due to the development of fracking in the US, which is increasingly growing in demand and is cheaper. As the US develops its oil industry, OPEC's market share will reduce and its ability to influence prices will decrease."
 ],
 examTip: "Always link OPEC analysis to the concept of price elasticity of demand. When demand is inelastic, cutting supply raises total revenue — this is the key to understanding OPEC's strategy."
 },
 {
 id: "ma-1b",
 title: "Section B: Merit & Demerit Goods, Inflation",
 content: [
 "Merit Goods: Goods which have positive side effects when consumed (e.g. education, healthcare). They generate greater social benefits than social costs. Due to information failure, consumers are not fully aware of the benefits, leading to under-consumption and under-production. This causes market failure, encouraging government intervention through provision and awareness campaigns.",
 "Demerit Goods: Goods which have negative side effects when consumed (e.g. alcohol, cigarettes). They generate negative externalities. Due to information failure, consumers do not fully realise the negative effects, leading to over-consumption. Demerit goods are addictive in nature, making it difficult for consumers to lower demand. Government intervention through taxation and awareness campaigns is encouraged.",
 "Inflation — Cost-Push: Occurs when there is a rise in a firm's costs of production, encouraging producers to increase prices. For example, a rise in raw material costs shifts the AS curve leftward.",
 "Inflation — Demand-Pull: Occurs when AD rises faster than AS. A cut in income tax increases consumers' disposable income and purchasing power, raising the 'C' component of AD. A fall in corporation tax and interest rates increases the 'I' component. Currency depreciation makes exports cheaper, increasing the (X−M) component.",
 "Consequences of High Inflation: Unplanned redistribution of income — people on fixed incomes (pensions, benefits) suffer as purchasing power falls. Borrowers gain as they repay less in real terms. Fiscal drag occurs when tax brackets aren't adjusted. Menu costs (changing prices) and shoe leather costs (searching for better interest rates) increase. Exports become expensive, worsening international competitiveness and the current account deficit. The currency may depreciate."
 ]
 }
 ]
 },
 {
 id: "model-answers-paper2",
 title: "Model Answers — 9708/23/M/J/20",
 subtitle: "CAIE AS Level Economics Paper 2",
 sections: [
 {
 id: "ma-2a",
 title: "Question 1: Plastic Bottles — Externalities & Taxation",
 content: [
 "Private goods vs demerit goods: Plastic bottles are private goods — excludable (they have a price) and rival (limited supply). They are also demerit goods — over-consumed and over-produced due to information failure, creating negative externalities like death of marine animals.",
 "Specific tax vs ad valorem tax: A specific tax is an indirect tax fixed per unit purchased (e.g. $1 per bottle). An ad valorem tax charges a fixed percentage of total price (e.g. GST, VAT). The proposed bottle tax is a mix — a fixed amount per bottle ($0.10) that also depends on bottle size.",
 "Effect of bottle tax: The supply curve shifts leftward (S→S₁) as costs of production rise, causing a price rise (P₁→P₂) and contraction in quantity demanded (Q→Q₁). However, effectiveness depends on PED — if demand is inelastic, the tax is less likely to lower usage. The government should also raise awareness about negative effects of plastic bottles."
 ]
 },
 {
 id: "ma-2b",
 title: "PES, PED, XED Analysis",
 content: [
 "Price Elasticity of Supply (PES): A numerical measure of responsiveness of supply to a change in price. PES = % change in quantity supplied / % change in price. In the short run, PES of 0.8 (inelastic) — suppliers may not have access to advanced technology and productive labour, making it difficult to respond quickly. In the long run, PES of 1.5 (elastic) — technological advancements make production more flexible, more producers enter the market, and factors of production become more mobile.",
 "Tax Incidence: When demand is elastic, producers bear most of the tax. When demand is inelastic, consumers bear most of the tax burden.",
 "PED and XED for Manufacturers: Knowledge of PED allows setting prices to maximise revenue — if demand is elastic, lower prices; if inelastic, raise prices. PED enables price discrimination across consumer groups. XED helps identify competitors and complements. However, both are based on ceteris paribus assumptions and past data, which may not accurately represent future conditions."
 ]
 }
 ]
 },
 {
 id: "model-answers-paper3",
 title: "Model Answers — 9708/23/O/N/19",
 subtitle: "CAIE AS Level Economics Paper 2",
 sections: [
 {
 id: "ma-3a",
 title: "BRICS Economies, Inflation & Competitiveness",
 content: [
 "India vs China Inflation: Between 2012 and 2015, India's inflation rate grew by 24.8% whereas China's was relatively stable with only a 6% increase. CPI may not be accurate for BRICS economies like India as it only includes formal economy transactions — the informal economy, illegal transactions, and subsistence economy are excluded.",
 "Why inflation rates differ among BRICS: Exchange rate differences — if a country's currency depreciates, imported raw material prices rise, increasing costs of production and causing cost-push inflation. Interest rate differences — lower interest rates increase AD as consumption and investment rise, causing demand-pull inflation.",
 "Terms of trade: China's terms of trade worsened between 2015 and 2016 (index fell from 117 to 93) — possibly due to currency depreciation causing export prices to fall relative to import prices.",
 "India vs China competitiveness: Depends on relative inflation rates, exchange rate changes, and productivity of factors of production. If India's currency depreciates, its exports become cheaper. If India's factor productivity is greater, product quality will be higher. The most important factor is the elasticity of goods from each country."
 ]
 },
 {
 id: "ma-3b",
 title: "Demand & Supply, AD/AS, Privatisation",
 content: [
 "Chocolate market: An increase in demand shifts D→D₁, raising price (P→P₁) and extending quantity supplied. But a fall in cocoa supply shifts S→S₁. With supply falling and demand rising, there is a shortage, causing further price increase to P₂ and quantity falling to Q₂.",
 "AD/AS and Investment: Investment in railways increases AD as the 'I' and 'G' components rise — causing price and real GDP to rise. In the long run, improved infrastructure increases AS as costs fall. Short run: AD shifts right (AD→AD₁), price rises (P→P₁), output increases (Y→Y₁). Long run: AS shifts right (AS→AS₁), price falls (P₁→P₂), GDP rises further (Y₂→Y₃).",
 "Privatisation vs Nationalisation: Privatisation can increase efficiency through competitive pressure, encourage innovation, and generate government revenue. However, the privatised industry may become a monopoly, exploiting consumers and ignoring externalities. Nationalisation allows economies of scale, cost-benefit analysis, and public interest decisions. However, lack of competition may lead to inefficiency and poor quality. Railways may be better publicly operated as a strategic industry to avoid duplication of resources."
 ]
 },
 {
 id: "ma-3c",
 title: "Comparative Advantage, Trade & Current Account",
 content: [
 "Limitations of Comparative Advantage Theory: Only considers two goods — unrealistic as economies produce many products. Ignores transportation costs, which are critical for free trade. Doesn't account for exchange rate fluctuations — appreciation or depreciation can alter comparative advantage. Specialisation may lead to diseconomies of scale, raising costs and opportunity costs.",
 "Tariffs — Benefits and Costs: Tariffs protect infant industries (allowing them to develop comparative advantage), slow the decline of sunset industries, prevent dumping, protect strategic industries, reduce current account deficits, and generate government revenue. However, tariffs limit consumption to domestic production capacity, reduce market access for exporters, may cause unemployment among export workers, lead to resource inefficiency, and can create surpluses or shortages.",
 "Correcting Current Account Deficits: Contractionary fiscal policy (increased taxation, reduced government spending) makes imports more expensive and reduces purchasing power — but risks recession. Contractionary monetary policy (higher interest rates, currency depreciation) makes imports expensive and exports cheaper — but may cause inflation. Supply-side policies (education, training, privatisation, deregulation) improve productivity and international competitiveness — but are expensive and have long time lags. The best approach depends on whether the deficit is cyclical or structural."
 ]
 }
 ]
 }
];
