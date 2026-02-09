// Freemium Pack Content - Extracted and anonymized from study materials
// All author names, website tags, and copyright watermarks have been removed

export interface FreemiumChapter {
  id: string;
  title: string;
  subtitle: string;
  sections: FreemiumSection[];
}

export interface FreemiumSection {
  id: string;
  title: string;
  content: string; // markdown-like content
  keyTerms?: { term: string; definition: string }[];
  mcqs?: FreemiumMCQ[];
  tables?: FreemiumTable[];
}

export interface FreemiumMCQ {
  question: string;
  options: string[];
  answer: string;
}

export interface FreemiumTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export const freemiumChapters: FreemiumChapter[] = [
  {
    id: "basic-economic-ideas-revision",
    title: "AS Level: Basic Economic Ideas & Resource Allocation",
    subtitle: "Comprehensive Revision Guide — Scarcity, Opportunity Cost, PPC, Goods & Services",
    sections: [
      {
        id: "scarcity-choice",
        title: "1.1 Scarcity, Choice and Opportunity Cost",
        content: `The fundamental economic problem and scarcity. Scarcity refers to the fact that at any moment in time, the output that an economy is able to produce will be limited by the resources and technology available. People's wants and needs, however, will always exceed the resources available to satisfy them — in other words, these wants and needs are unlimited. This is known as the fundamental economic problem.

As a result of this condition of scarcity, choices must be made. In all economies, therefore, there is an inevitability of choice at all levels of decision making — at the level of the individual, the firm and the government. This focus on choice stresses the need to recognise the implications not only of choosing one thing, but also of not choosing something else. Opportunity cost is the benefit forgone from not choosing the next best alternative.

The emphasis on choice focuses on three basic economic questions:
• What to produce
• How to produce
• For whom to produce

These three questions are solved in different ways in various economies — through different systems or mechanisms of resource allocation.`,
        keyTerms: [
          { term: "Wants", definition: "Items that are not essential for survival (e.g. a new car or television)" },
          { term: "Needs", definition: "Items that are essential for survival (e.g. food or shelter)" },
          { term: "Resources", definition: "The inputs available to an economy for use in the production of goods and services" },
          { term: "Economic problem", definition: "A situation where there are not enough resources to satisfy all human needs and wants" },
          { term: "Opportunity cost", definition: "The benefit forgone from not choosing the next best alternative" },
        ],
        mcqs: [
          {
            question: "The fundamental economic problem exists because:",
            options: [
              "A) Resources are scarce in relation to unlimited wants",
              "B) A business does not know how much it can sell",
              "C) Resources are scarce in relation to needs",
              "D) We cannot always have what we want"
            ],
            answer: "A"
          },
          {
            question: "A teacher usually marks examination papers during the school break for $900. Instead, she decides to do maintenance work on her apartment (which would cost $600 to hire someone). What is the opportunity cost?",
            options: ["A) $300", "B) $600", "C) $900", "D) $1500"],
            answer: "C"
          },
        ]
      },
      {
        id: "economic-methodology",
        title: "1.2 Economic Methodology",
        content: `Economics as a social science. A social science can be defined as the scientific study of human society.

• Economics is social in the sense that it studies different aspects of human behaviour and, in particular, the choices that humans make.
• Economics is a science in the sense that it uses an organised system of theories and facts capable of making verifiable predictions.
• Economics can therefore be regarded as a social science because it uses scientific methods to establish theories that can help explain the behaviour of individuals, groups and organisations in societies.

Positive and Normative Statements:
• A positive statement is one that can be checked against the facts to decide whether it is true.
• A normative statement reflects the norms or values of the person expressing the statement — it involves a value judgement and reflects personal opinions. Normative statements often include the words 'should' or 'ought to'.

The assumption of ceteris paribus (other things being equal) means that economists can analyse one aspect of human behaviour at a time.

Economists distinguish between three time periods:
• Short run: only certain factors of production can change (variable factors). Fixed factors remain constant.
• Long run: all factors of production can be changed.
• Very long run: supply conditions can change because of technical progress.`,
        keyTerms: [
          { term: "Ceteris paribus", definition: "A Latin term that literally means 'other things being equal'" },
          { term: "Economic law", definition: "An economic theory put forward by economists (e.g. the laws of demand and supply)" },
          { term: "Microeconomics", definition: "The study of the behaviour of relatively small economic units (e.g. particular individuals, households or firms)" },
          { term: "Macroeconomics", definition: "The study of economics at the national and international levels" },
        ],
      },
      {
        id: "factors-of-production",
        title: "1.3 Factors of Production",
        content: `Production in an economy can take place in three sectors:

• Primary sector: the extractive sector — farming, fishing, forestry, mining and quarrying.
• Secondary sector: the manufacturing and construction sector — car production, construction of airport runways.
• Tertiary sector: the services sector — banking, insurance, tourism, teaching, medicine and the law.

There are four factors of production:

• Land: all the natural resources used in production — farmland, forests, lakes, rivers, mineral deposits.
• Labour: all human input into production — people and their skills, training, education, qualifications. Also called 'human capital' or 'intellectual capital'.
• Physical capital: human-made aids used in production — equipment, machinery, factories.
• Enterprise: the factor that brings other factors together. The entrepreneur combines resources and takes risk.

The rewards to the factors of production:
• Rent → reward to land
• Wages/Salaries → reward to labour
• Interest → reward to capital
• Profit → reward to enterprise

Division of Labour and Specialisation: Specialisation refers to concentration on a particular aspect of production. Adam Smith described in The Wealth of Nations (1776) how division of labour in a pin factory enabled far more pins to be produced than if each worker tried to do everything.

The Role of the Entrepreneur: Entrepreneurs perform two key functions:
• Organisation: coordinating land, labour and capital to produce goods and services.
• Risk: taking on uncertainty inherent in any business initiative.`,
        keyTerms: [
          { term: "Human capital", definition: "The skills, knowledge and experience possessed by a population in terms of their value or cost to a business or an economy" },
          { term: "Physical capital", definition: "The tangible, human-made objects that a business uses to produce goods and services" },
          { term: "Specialisation", definition: "The process whereby individuals, firms and economies concentrate on producing those products in which they have an advantage" },
          { term: "Division of labour", definition: "The way in which production is divided into a sequence of specific tasks enabling workers to specialise" },
          { term: "Profit", definition: "The reward to enterprise, defined as the difference between total revenue and total costs" },
        ],
      },
      {
        id: "economic-systems",
        title: "1.4 Resource Allocation in Different Economic Systems",
        content: `An allocative mechanism is needed for deciding how scarce economic goods are produced and consumed. There are three different types:

Market Economies:
In a market economy, resource allocation is left to demand and supply, operating through the price mechanism.

Advantages: Decisions driven by self-interest (utility/profit maximisation); 'invisible hand' means no need for government intervention; competition leads to efficiency.

Disadvantages: Merit goods underprovided; demerit goods overprovided; public goods not provided at all; significant income/wealth disparities.

Planned Economies (Command Economies):
Scarce resources allocated through government intervention with little scope for market forces.

Advantages: Decisions in national interest; more equitable distribution of income and wealth.
Disadvantages: Bureaucratic and inefficient; poor quality products with little consumer choice.

Mixed Economies:
Combine elements of both market and planned economies. All modern economies are mixed to some extent.

Transitional Economies:
Some economies (e.g. China, Cuba) are reducing central planning and allowing greater market influence. Problems include: rising unemployment, inflation, falling output, reduced welfare provision.`,
        tables: [
          {
            title: "Problems of Transitional Economies",
            headers: ["Problem", "Description"],
            rows: [
              ["Unemployment", "A planned economy keeps unemployment down; market forces may lead firms to cut costs by laying off workers."],
              ["Inflation", "State-controlled prices keep inflation low; free-market prices are harder to control."],
              ["Output", "State support for inefficient firms ends; they may fail to compete and output falls."],
              ["Welfare", "Planned economies provide housing and healthcare universally; market forces may reduce welfare provision."],
            ]
          }
        ]
      },
      {
        id: "ppc",
        title: "1.5 Production Possibility Curves",
        content: `A production possibility curve (PPC) shows the different combinations of products that can be produced if an economy is working at full capacity.

Key Points:
• Point on the PPC: economy using resources efficiently.
• Point inside the PPC: economy not using resources efficiently — unemployment of resources exists.
• Point outside the PPC: unreachable with current resources.

Shape of the Curve:
• Straight line = constant opportunity costs (equal sacrifice when moving between points).
• Curved (concave to origin) = increasing opportunity costs — not all factors of production are equally efficient.

Shifts in the PPC:
• Rightward shift (PPC1 → PPC2): economic growth from more resources and/or more productive use of resources. Expansion in productive capacity.
• Leftward shift: decrease in quantity/quality of resources.

A rightward shift represents potential economic growth — the economy can produce more of both goods. This comes from increases in the quantity or quality of factors of production, or improvements in technology.`,
      },
      {
        id: "classification-of-goods",
        title: "1.6 Classification of Goods and Services",
        content: `Free Goods vs Private Goods:
• Free good: not scarce, does not require a market price. No factors of production needed, no opportunity cost.
• Private good (economic good): consumed by individuals for their own benefit. Has two characteristics: excludability (people can be excluded from consuming it) and rivalry (consumption by one reduces availability for others).

Public Goods:
Provided by society so everyone benefits. Two key characteristics:
• Non-excludability: once provided for one person, others cannot be stopped from benefiting.
• Non-rivalry: more people consuming does not reduce benefit to existing consumers.
• Also non-rejectable: cannot reject the service even if unwanted (e.g. defence).

This creates the free rider problem — it's impossible to charge for public goods, so the state must provide them, funded by taxation.

Merit Goods:
A type of private good (rival and excludable), but information failure means they are underprovided and underconsumed if left to the private sector. Examples: education, healthcare. Government intervenes to ensure adequate provision.

Demerit Goods:
Opposite of merit goods — overproduced and overconsumed in a free market due to imperfect information. Examples: alcohol, tobacco. They are socially undesirable. Government intervenes through taxation, regulation, or awareness campaigns.`,
        keyTerms: [
          { term: "Public good", definition: "A good that is non-rival, non-excludable and non-rejectable" },
          { term: "Free rider", definition: "The idea that it would be impossible to charge people because they cannot be excluded from benefiting" },
          { term: "Merit good", definition: "A product that is rivalrous and excludable but would be underproduced and underconsumed if left to a free market" },
          { term: "Demerit good", definition: "A product that is overproduced and overconsumed in a free market due to imperfect information" },
          { term: "Information failure", definition: "Where people lack the full information to make the best decisions about consumption" },
        ],
      },
      {
        id: "demand-supply",
        title: "2.1 Demand and Supply Curves",
        content: `Effective Demand:
Demand that can be supported by having the means to pay. Consumers must not just want a product, but be willing and able to pay for it.

The Law of Demand:
The demand curve slopes downwards from left to right — consumers buy more at lower prices (inverse relationship between price and quantity demanded).

Market demand is the aggregation of all individual demand curves.

Derived demand: where demand for a component depends on demand for the final product (e.g. demand for rubber derives from demand for tyres).

The Law of Supply:
The supply curve slopes upwards from left to right — producers supply more at higher prices (direct relationship between price and quantity supplied).

Determinants of Demand (cause shifts):
• Change in consumer incomes
• Change in price of substitutes/complements
• Advertising campaigns
• Population changes
• Taste/preference changes
• Interest rate changes
• Weather/seasonal changes

Normal goods: demand increases when income rises.
Inferior goods: demand decreases when income rises (e.g. bus journeys when people can afford cars).

Determinants of Supply (cause shifts):
• Indirect taxes (shift supply left/up)
• Subsidies (shift supply right/down)
• Changes in production costs
• Improvements in technology
• Changes in prices of other goods
• Expected future prices

Key Distinction:
• Movement along a curve: caused by a change in the product's own price.
• Shift of a curve: caused by a change in any other factor (non-price determinant).`,
      },
    ],
  },
  {
    id: "model-answers-pack",
    title: "CIE 9708 Model Answers Collection",
    subtitle: "Expert-Written Responses for Paper 2 — Past Exam Questions with Full Analysis",
    sections: [
      {
        id: "paper-mj19",
        title: "Paper 2 — May/June 2019 (9708/23)",
        content: `**Section A**

**1a)** Between 2015 and 2016, oil production in Nigeria fell by 0.9 barrels per day from 2.3 barrels to 1.6 barrels each day.

**1b)** In 2014, OPEC decided to increase its supply by 12% which caused the price to fall by 60% to $30 per barrel and quantity demanded to expand. This caused a rise in the total GDP of Nigeria, indicating short-term economic growth, high employment and living standards. But, as the world price of oil fell, Nigeria's export revenue fell drastically as 80% of its exports were oil which worsened its current account balance. Later, in 2016, due to revenue issues, OPEC decided to reduce its supply to raise prices. This causes a rise in export revenue for Nigeria as OPEC's oil demand is inelastic, improving its balance of payments. But, this led to oil producers lowering their supply and making workers redundant, increasing unemployment and worsening living standards.

**1c)** Inelastic demand is when percentage change in price is greater than percentage change in demand, ceteris paribus. A fall in world price of oil by 60% only caused a 45% fall in OPEC's revenue which shows that increase in demand was lesser than the fall in price, indicating inelastic demand.

**1d)** Since Q3 of 2015, there has been a decline in the growth rate of oil production for Nigeria. Even after such a drastic decline, the Nigerian economy only contracted by 2%, indicating that oil is not a significant part of the country's GDP. It shows that contraction in other non-oil sectors which are of greater significance didn't have such a drastic decline.

**1f)** OPEC may be able to control the world price of oil as they supply half of the global demand. They are a monopoly with approximately 50% market share. Even slight changes in their supply disrupt the entire world oil supply. When OPEC increased supply by 12% in 2014, prices fell by more than 60%, showcasing their influence. But, the development of fracking in the US may reduce OPEC's market share and their ability to influence prices in the future.

**Section B**

**2a)** Plastic bottles are considered private goods as they are both excludable and rival. They are also considered demerit goods as they are overconsumed and overproduced due to information failure. The consumption of plastic bottles leads to negative externalities like death of marine animals.

Merit goods are goods which have positive side effects when consumed (education, healthcare). They generate greater social benefits than social costs. Due to information failure, consumers are not fully aware of the benefits, leading to underconsumption and underproduction, causing market failure.

Demerit goods have negative side effects when consumed (alcohol, cigarettes). They generate greater negative externalities. Due to information failure, consumers do not fully realise the negative effects, leading to overconsumption. They are addictive in nature, making demand reduction difficult.

**3a)** Inflation is the sustained rise in the general price level. It can be cost-push or demand-pull. A cut in income tax may increase consumers' disposable incomes, encouraging spending and raising the 'C' component of AD, causing demand-pull inflation. A fall in corporation tax makes it easier for firms to invest, increasing the 'I' component of AD. Depreciation of a currency makes exports cheaper and more competitive, increasing the (X-M) component of AD.

**3b)** A high rate of inflation causes unplanned redistribution of income. People on fixed incomes (pensions, benefits) suffer as purchasing power falls. Borrowers gain as they repay less in real terms. If tax brackets aren't adjusted for inflation, fiscal drag occurs. High inflation increases menu costs (continuously changing prices) and shoe leather costs (searching for higher interest rates). This increases costs for producers and may cause a wage-price spiral. Externally, high inflation makes exports more expensive, reducing international competitiveness and worsening the current account deficit.`,
      },
      {
        id: "paper-mj20",
        title: "Paper 2 — May/June 2020 (9708/23)",
        content: `**Section A**

**1a)** Plastic bottles are private goods (excludable and rival) and demerit goods (overconsumed due to information failure, causing negative externalities).

**1b-i)** A specific tax is a fixed amount per unit (e.g. $1 per bottle of alcohol). An ad valorem tax is a fixed percentage of the total price (e.g. GST, VAT).

**1b-ii)** The proposed bottle tax is a mix of both — there's a fixed amount per bottle ($0.10) but it also depends on bottle size (1L, 2L).

**1c-i)** The theory of comparative advantage suggests an economy must specialise in products where it has a lower opportunity cost. Free trade allows maximisation of limited resources and increases global output and employment.

The imposition of a bottle tax on plastic bottles caused the supply curve to shift left as costs of production rose, causing a price rise and contraction in quantity demanded.

**Section B**

**2a)** Price elasticity of supply (PES) measures responsiveness of supply to a change in price. PES = % change in quantity supplied / % change in price.

In the short run, PES of 0.8 (inelastic) — suppliers may not have access to advanced technology and cannot quickly respond to demand changes. In the long run, PES of 1.5 (elastic) — technological advancements make production more efficient and flexible, and more producers may enter the market.

**2b)** Knowledge of PED helps manufacturers set prices to maximise revenue. With elastic demand, firms maintain low prices as the change in demand exceeds the change in price. PED information also enables price discrimination — charging different prices to different consumer groups based on their elasticity. Knowledge of XED helps identify competitors and understand how competitors' strategies affect sales.

**2d)** A tax on plastic bottles may reduce consumption as they become more expensive. It will reduce negative externalities like threats to marine life. The government will also raise revenue from the tax. However, effectiveness depends on PED — inelastic demand means limited impact on consumption. The size of the tax also matters — a small tax may not be passed to consumers.`,
      },
      {
        id: "paper-on19",
        title: "Paper 2 — October/November 2019 (9708/23)",
        content: `**Section A**

**1a-i)** Between 2012 and 2015, India's inflation rate grew by a greater percentage (24.8%) whereas China's was relatively stable with only a slight increase (6%).

**1a-ii)** For BRICS economies like India, CPI may not be accurate as it only includes formal economy transactions. India has a major informal economy which CPI calculations don't include, leading to inaccurate results. CPI doesn't include illegal transactions or the subsistence economy.

**1b)** Inflation rates among BRICS economies may differ due to exchange rate differences. If one country's currency depreciates, imported raw materials become more expensive, increasing costs of production and causing cost-push inflation. Also, differences in interest rates matter — lower interest rates increase AD through higher consumption and investment, leading to demand-pull inflation.

**1c-i)** China's terms of trade between 2015 and 2016 worsened — the index fell from 117 to 93 (a fall of 24 points).

**1c-ii)** The terms of trade may have worsened due to depreciation of the Chinese currency, causing export prices to fall relative to import prices.

**1d)** India's ability to compete with China depends on: relative inflation rates (higher inflation reduces competitiveness), exchange rate changes (depreciation makes exports cheaper), and productivity of factors of production (higher productivity means better quality and lower costs). The most important factor is the elasticity of goods from both countries.

**Section B**

**2a)** An increase in demand for chocolate caused a right shift in the demand curve, leading to a rise in price and extension in quantity supplied. As supply of cocoa beans fell (a key ingredient), suppliers were forced to lower supply, causing a left shift in the supply curve. With supply falling and demand rising, there was a shortage, leading to further price increases.

**3a)** Aggregate demand (AD) = C+I+G+(X-M). An increase in railway investment raises the 'I' and 'G' components of AD, leading to higher prices and real GDP growth. In the long run, improved infrastructure raises AS by lowering costs of production. Short-run: AD shifts right → higher price and output. Long-run: AS shifts right → lower prices and further GDP growth.

**3b)** Privatisation may increase efficiency due to competitive pressure, lower prices for consumers, and generate government revenue. But monopoly concerns exist — a privatised monopoly may exploit customers. Nationalisation enjoys economies of scale and considers externalities through cost-benefit analysis, but may suffer from inefficiency and poor innovation.

**4a)** A current account deficit occurs when import expenditure exceeds export revenue. Causes include: high domestic inflation reducing competitiveness, falling productivity of factors of production increasing costs and prices, and trade barriers imposed by other countries.

**4b)** To reduce a current account deficit, the government can use: contractionary fiscal policy (higher taxes, lower spending) to reduce import demand; contractionary monetary policy (higher interest rates, currency depreciation) to make exports cheaper and imports more expensive; or supply-side policies (education, training, privatisation, deregulation) to improve productivity and international competitiveness. The best approach depends on whether the deficit is cyclical or structural.`,
      },
    ],
  },
];
