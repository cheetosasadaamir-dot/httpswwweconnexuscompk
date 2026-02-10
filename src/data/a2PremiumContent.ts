import type { FreemiumChapter, ContentSection } from './freemiumPackContent';

// Extended section type that supports diagram references
export interface A2ContentSection extends ContentSection {
  diagramId?: string;
}

export interface A2Chapter extends Omit<FreemiumChapter, 'sections'> {
  sections: A2ContentSection[];
}

export const a2MicroContent: A2Chapter[] = [
  {
    id: "a2-utility",
    title: "1.1 Utility",
    subtitle: "The Price System and The Microeconomy",
    sections: [
      {
        id: "utility-intro",
        title: "Utility",
        content: [
          "Utility: the satisfaction gained from the consumption of a product.",
          "Income Effect: the resultant change in demand for a good or service caused by an increase or decrease in a consumer's purchasing power or real income.",
          "The income effect has a positive relationship with normal goods, meaning if income increases, consumers can purchase more of the normal goods.",
          "The income effect has an inverse relationship with inferior goods, meaning if income increases, consumers will purchase less of the inferior goods.",
          "These cause a shift in the budget line, a rightward shift for normal goods, and a leftward shift for inferior goods."
        ],
        keyTerms: [
          { term: "Utility", definition: "The satisfaction gained from the consumption of a product." },
          { term: "Income Effect", definition: "The resultant change in demand for a good or service caused by an increase or decrease in a consumer's purchasing power or real income." }
        ]
      },
      {
        id: "indifference-curve",
        title: "Indifference Curve",
        content: [
          "Indifference Curve: this shows the different combinations of two goods that give consumers equal satisfaction. Represents the extent to which consumers are willing to substitute a good for another.",
          "Marginal Rate of Substitution: The rate at which a consumer is willing to substitute a good for another. This is what affects the slope of the curve.",
          "The equimarginal principle is applied here: MUᴬ/Pᴬ = MUᴮ/Pᴮ = MUᶜ/Pᶜ",
          "Consumers are indifferent to x, y, and z since they all are in the same curve."
        ],
        diagramId: "indifference-curve",
        keyTerms: [
          { term: "Indifference Curve", definition: "Shows the different combinations of two goods that give consumers equal satisfaction." },
          { term: "Marginal Rate of Substitution", definition: "The rate at which a consumer is willing to substitute a good for another. This affects the slope of the curve." },
          { term: "Equimarginal Principle", definition: "The condition where MUᴬ/Pᴬ = MUᴮ/Pᴮ = MUᶜ/Pᶜ for optimal consumer choice." }
        ]
      },
      {
        id: "limitations-mu",
        title: "Limitations of Marginal Utility and Rational Consumer Behaviour",
        content: [
          "Customers cannot always put wants in order of most satisfaction or may change depending on mood.",
          "Customers may not always be able to assign a value to feelings and emotions.",
          "It also assumes rational behaviour from consumers, that they will be satisfied with more rather than less."
        ]
      }
    ]
  },
  {
    id: "a2-indifference-budget",
    title: "1.2 Indifference Curves and Budget Lines",
    subtitle: "Consumer Choice and Optimum Consumption",
    sections: [
      {
        id: "budget-lines",
        title: "Budget Lines",
        content: [
          "Budget Lines: the combination of products obtainable with given income and prices.",
          "Optimum consumption point: for rational consumers, the budget line is tangent to the highest indifference curve.",
          "The budget line represents the extent of consumer income, and the IC indicates the extent of available combinations of 2 products that an individual is indifferent over.",
          "Consumer's choice is optimal at the point where budget lines touch/is at a tangent to the highest indifference curve. This point shows the marginal rate of substitution."
        ],
        diagramId: "budget-line-ic",
        keyTerms: [
          { term: "Budget Line", definition: "The combination of products obtainable with given income and prices." },
          { term: "Optimum Consumption Point", definition: "The point where the budget line is tangent to the highest attainable indifference curve." }
        ]
      },
      {
        id: "substitution-income-effect",
        title: "Substitution and Income Effect",
        content: [
          "Following a price decrease for Normal good B, in the example above, a price decrease for good B has caused an increase in the purchasing power of consumers (now can buy more).",
          "A shift from consumer equilibrium, E1 to E2, is the substitution effect. Consumers will now be purchasing more of Good B as it is relatively cheaper than Good A, shifting the optimum consumer satisfaction more towards good B.",
          "A shift from consumer equilibrium, E2 to E3, is the income effect. With more purchasing power, the budget line shifts to B2 downward sloping as more of Good B can be purchased while Good A stays the same.",
          "Through the diagram above, we can conclude that:",
          "• A substitution effect is E1 to E2, meaning a shift in the budget line causes movement along the IC curve.",
          "• An income effect is E2 to E3 when a new IC is formed.",
          "Price Effect = Substitution effect + Income effect"
        ],
        diagramId: "substitution-income-effect"
      },
      {
        id: "giffen-goods",
        title: "Giffen Goods",
        content: [
          "Giffen Goods is a sub-category of inferior goods; its consumption increases when its price increases. This is because of a strong income effect (Real income changes).",
          "If price for a giffen good increases, example staple food like rice/meat, substitution effect is negative since the budget decreases (shifts left), but due to a fall in real income (consumers have less to spend), a strong positive income effect takes place that exceeds the substitute effect."
        ],
        tables: [
          {
            headers: ["Price Change", "Good Type", "Price Effect (on demand)", "Demand Change"],
            rows: [
              ["Fall", "Normal", "Both effects ↑", "Rise"],
              ["Fall", "Inferior", "Sub. Effect ↑ > In. effect", "Rise"],
              ["Fall", "Giffen", "Sub. Effect ↓ > In. effect", "Fall"],
              ["Rise", "Normal", "Both effects ↓", "Fall"],
              ["Rise", "Inferior", "Sub. Effect ↓ > In. effect", "Fall"],
              ["Rise", "Giffen", "Sub. Effect ↑ > In. effect", "Rise"]
            ]
          }
        ],
        keyTerms: [
          { term: "Giffen Good", definition: "A sub-category of inferior goods whose consumption increases when its price increases, due to a strong income effect exceeding the substitution effect." }
        ]
      },
      {
        id: "limitations-ic",
        title: "Limitation of the Model of Indifference Curves",
        content: [
          "Consumers are not always rational in their choices; emotions and personal judgement affect the choice of the best available alternative.",
          "The consumer may not always realize the level of utility from consumption or the original expectation of utility.",
          "The indifference curve can only be done for 2 or, at best, for 3 goods and cannot take into account ALL the goods in a basket.",
          "Indifference curve analysis cannot help when one of the goods (A or B) is a durable good. For example, comparing the quantity of cake to the quantity of cake pan."
        ]
      }
    ]
  },
  {
    id: "a2-efficiency",
    title: "1.3 Efficiency and Market Failure",
    subtitle: "Pareto Optimality, Economic Efficiency",
    sections: [
      {
        id: "pareto-optimality",
        title: "Pareto Optimality",
        content: [
          "Pareto Optimality: where it is impossible to make someone better off without making someone else worse off.",
          "If resource allocation is not Pareto efficient, then there is scope for improvement. Any improvement in economic efficiency will need some form of compensation to individuals negatively affected by the improvement."
        ],
        keyTerms: [
          { term: "Pareto Optimality", definition: "Where it is impossible to make someone better off without making someone else worse off." }
        ]
      },
      {
        id: "economic-efficiency",
        title: "Economic Efficiency",
        content: [
          "Economic Efficiency: where scarce resources are used most efficiently to produce maximum output.",
          "• Productive Efficiency: When a firm is producing at the lowest possible cost.",
          "• Allocative Efficiency: Where price equals marginal cost; firms produce the goods and services most consumers want. No waste, both producers and consumers are satisfied with produced goods. The marginal cost of production measures the opportunity cost of resources used to produce this unit."
        ],
        keyTerms: [
          { term: "Economic Efficiency", definition: "Where scarce resources are used most efficiently to produce maximum output." },
          { term: "Productive Efficiency", definition: "When a firm is producing at the lowest possible cost." },
          { term: "Allocative Efficiency", definition: "Where price equals marginal cost; firms produce the goods and services most consumers want." }
        ]
      },
      {
        id: "dynamic-efficiency",
        title: "Dynamic Efficiency",
        content: [
          "Dynamic Efficiency: a productive efficiency that benefits a firm over time. Resources are reallocated so that output increases relative to the increase in resources.",
          "The long-term phenomenon is achieved when firms meet the market's changing needs by introducing new production processes in response to competitive pressures and require investment with outside firms.",
          "When a firm becomes dynamically efficient, the long-run average cost curve shifts downwards."
        ],
        keyTerms: [
          { term: "Dynamic Efficiency", definition: "A productive efficiency that benefits a firm over time, achieved when firms meet changing market needs through new production processes." }
        ]
      },
      {
        id: "productive-efficiency-detail",
        title: "Productive Efficiency",
        content: [
          "Productive Efficiency only exists when producing in the border of a PPC curve.",
          "Competition may lead to productive efficiency, forcing firms to lower prices and not go bankrupt, and will lead to firms reducing their costs to get the greatest possible profit.",
          "Perfect Competition pushes firms to long-run equilibrium in the market by producing at q and price at p. Lowest Average cost is achieved, leading to productive efficiency in the economy."
        ]
      },
      {
        id: "allocative-efficiency-detail",
        title: "Allocative Efficiency",
        content: [
          "The table below shows us the most allocative efficient output would be Quantity 4.",
          "It cannot be expressed using a PPC curve. Any point on the frontier/border as long as the marginal cost and selling price are the same.",
          "A competitive market can lead to allocative efficiency. It leads to 2 motivations: motivation to make the greatest profit so they will produce the products with the highest level of demand; second, the other firms will be producing high-demand products, which forces other firms to do the same to prevent failure and closure of the firm.",
          "Allocative efficiency can be seen in the graph, where the marginal cost curve meets the price."
        ],
        tables: [
          {
            headers: ["Quantity", "1", "2", "3", "4", "5"],
            rows: [
              ["Price per unit", "6", "6", "6", "6", "6"],
              ["Marginal cost per unit", "3", "4", "5", "6", "7"]
            ]
          }
        ]
      },
      {
        id: "market-failure",
        title: "Market Failure",
        content: [
          "Market Failure is when a free market fails to make the optimum use of scarce resources due to no government intervention. It is when a market's interaction between supply and demand does not lead to productive and/or allocative efficiency.",
          "Reasons for market failure (oversupply or undersupply of goods):",
          "• Externalities present in the market",
          "• No Provision of merit and demerit goods",
          "• No Provision of public and quasi-public goods",
          "• Information failure exists",
          "• Adverse selection or moral hazard",
          "• Abuse of monopoly power in the market"
        ]
      }
    ]
  },
  {
    id: "a2-externalities",
    title: "1.4 Private Costs and Benefits, Externalities, Social Costs and Benefits",
    subtitle: "Social Costs, Social Benefits, Deadweight Loss",
    sections: [
      {
        id: "social-costs",
        title: "Social Costs",
        content: [
          "Social Costs = Private Costs + External Costs",
          "Externalities: where the actions of producers or consumers give rise to side effects on third parties who are not involved in the action; sometimes referred to as spillover effects."
        ],
        keyTerms: [
          { term: "Social Costs", definition: "Private Costs + External Costs." },
          { term: "Externalities", definition: "Where the actions of producers or consumers give rise to side effects on third parties who are not involved in the action; sometimes referred to as spillover effects." }
        ]
      },
      {
        id: "negative-externalities",
        title: "Negative Externalities",
        content: [
          "Negative Externalities: where side effects negatively impact and impose costs on third parties.",
          "• Negative Production Externalities",
          "• Negative Consumption Externalities"
        ]
      },
      {
        id: "positive-externalities",
        title: "Positive Externalities",
        content: [
          "Positive Externalities: arise through the actions of consumers and producers; the distinction is sometimes not always clear.",
          "Externalities create the problem of an inappropriate amount of goods and services being produced. Firms do not usually take into account all social costs, only private. Thus, the overproduction of goods with negative social costs by private decision-makers."
        ]
      },
      {
        id: "marginal-social-costs",
        title: "Marginal Social Costs",
        content: [
          "Marginal Social Costs = Private Marginal Costs + External Marginal Costs",
          "Marginal Social Costs: the total cost society pays for the production of another unit or for taking further action in the economy.",
          "Private Marginal Costs: the change in the producer's total cost due to producing an additional unit of a good or service."
        ],
        keyTerms: [
          { term: "Marginal Social Costs", definition: "The total cost society pays for the production of another unit or for taking further action in the economy." },
          { term: "Private Marginal Costs", definition: "The change in the producer's total cost due to producing an additional unit of a good or service." }
        ]
      },
      {
        id: "social-benefits",
        title: "Social Benefits",
        content: [
          "Social Benefits = Private Benefits + External Benefits",
          "Social Benefits: the total benefits arising from a particular action.",
          "Private Benefits: benefits that accrue to individuals who produce and consume a particular good.",
          "External Benefits: benefits received by third parties not involved in the action.",
          "If social benefits rise more than private, positive externalities are present."
        ],
        keyTerms: [
          { term: "Social Benefits", definition: "The total benefits arising from a particular action (Private Benefits + External Benefits)." },
          { term: "Private Benefits", definition: "Benefits that accrue to individuals who produce and consume a particular good." },
          { term: "External Benefits", definition: "Benefits received by third parties not involved in the action." }
        ]
      },
      {
        id: "marginal-social-benefits",
        title: "Marginal Social Benefits",
        content: [
          "Marginal Social Benefits = Marginal Private Benefits + Marginal External Benefits",
          "Marginal Social Benefits: the satisfaction experienced by consumers/producers of a specific good, plus the overall environmental and social benefits.",
          "Marginal Private Benefits: the total marginal benefits of every consumer for each quantity of good consumed."
        ]
      },
      {
        id: "deadweight-welfare-loss",
        title: "Deadweight Welfare Loss",
        content: [
          "A deadweight loss is a cost to society created by market inefficiency, which occurs when supply and demand are out of equilibrium. Market inefficiency occurs when goods within the market are either overvalued or undervalued. Deadweight welfare loss is indicated by the triangle in the graph.",
          "The graph above shows how Marginal private costs (MPC) is the level of supply currently produced, with price P and quantity Q; since negative externalities of production are not acknowledged, firms overvalue (as it may seem like a higher profit margin) and hence overproduce. Only through government intervention and the acknowledgement of the negative externalities will the supply shift to the left, causing P to shift to P* and Q to decrease."
        ],
        diagramId: "deadweight-loss"
      },
      {
        id: "four-externalities",
        title: "Types of Externalities",
        content: [
          "There are 4 kinds of externalities:",
          "• Positive consumption externalities",
          "• Negative consumption externalities",
          "• Positive production externalities",
          "• Negative production externalities"
        ]
      }
    ]
  },
  {
    id: "a2-asymmetric-info",
    title: "1.5 Asymmetric Information and Moral Hazard",
    subtitle: "Information Failure in Markets",
    sections: [
      {
        id: "asymmetric-info",
        title: "Asymmetric Information",
        content: [
          "Asymmetric Information: occurs when one party to an economic transaction possesses greater material knowledge than another. Where people do not have full or complete information and do not realise the benefit of a merit good or the side effects of a demerit good."
        ],
        keyTerms: [
          { term: "Asymmetric Information", definition: "Occurs when one party to an economic transaction possesses greater material knowledge than another." }
        ]
      },
      {
        id: "moral-hazard",
        title: "Moral Hazard",
        content: [
          "The tendency for insured or otherwise arises from Asymmetric Information, where the person in the market is more informed than the seeker of advice/buyer.",
          "For example, a doctor's diagnosis. This could lead to a misallocation of resources. More of a risk as it is not done purposefully by the person in the market."
        ],
        keyTerms: [
          { term: "Moral Hazard", definition: "The tendency arising from asymmetric information where the more informed party may take greater risks, leading to misallocation of resources." }
        ]
      },
      {
        id: "adverse-selection",
        title: "Adverse Selection",
        content: [
          "Where an insurance company is not divulged at the time of a policy's sale.",
          "For example, when applying for health insurance, the insured hides bad habits (smoking, drinking, etc.). This case of information failure is due to information being withheld or portrayed inaccurately. This is more purposeful."
        ],
        keyTerms: [
          { term: "Adverse Selection", definition: "Information failure due to information being withheld or portrayed inaccurately at the time of an economic transaction." }
        ]
      }
    ]
  },
  {
    id: "a2-cba",
    title: "1.6 Cost-Benefit Analysis in Decision-Making",
    subtitle: "Stages, Advantages and Disadvantages",
    sections: [
      {
        id: "cba-intro",
        title: "Cost-Benefit Analysis (CBA)",
        content: [
          "Cost-Benefit Analysis (CBA): a method for assessing the desirability of projects by comparing all costs and benefits, including social costs and benefits."
        ],
        keyTerms: [
          { term: "Cost-Benefit Analysis (CBA)", definition: "A method for assessing the desirability of projects by comparing all costs and benefits, including social costs and benefits." }
        ]
      },
      {
        id: "cba-stages",
        title: "Stages in a Costs-Benefits Analysis",
        content: [
          "1. Identification of all relevant costs and benefits.",
          "2. Forecasting future costs and benefits (where appropriate).",
          "3. Decision-making — the interpretation of the results from CBA."
        ],
        tables: [
          {
            headers: ["Advantages", "Disadvantages"],
            rows: [
              ["All costs/benefits considered", "Identification is tough"],
              ["Most will have market prices", "Shadow prices"],
              ["Future consequences", "Uncertainty in estimation"],
              ["All info. Useful", "Bureaucracy"],
              ["Investment projects", "Public expenditure"]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "a2-short-run-production",
    title: "1.7 Short-Run Production Function",
    subtitle: "Production, Total Product, Marginal Product",
    sections: [
      {
        id: "short-run-production",
        title: "Short-Run Production Function",
        content: [
          "Short-run production function defines the relationship between 1 variable factor of production (while keeping the rest fixed) and output. Short-run is not a period of time, but rather a condition where not all factors of production are variable.",
          "The production function shows the maximum possible output from the given set of factor inputs.",
          "Formula: Q = AF(K, L), where Q is total output (Quantity), K being capital and L being labour.",
          "Total product is the total output a firm produces with given inputs during a given period.",
          "• Total product = Average product × labour factors.",
          "Marginal product = Changed output / Changed input",
          "The Law of Diminishing Returns (law of variable proportions) is where the output from an additional input unit leads to a fall in the marginal product."
        ],
        diagramId: "production-function",
        keyTerms: [
          { term: "Short-Run Production Function", definition: "The relationship between 1 variable factor of production (while keeping the rest fixed) and output." },
          { term: "Total Product", definition: "The total output a firm produces with given inputs during a given period." },
          { term: "Law of Diminishing Returns", definition: "Where the output from an additional input unit leads to a fall in the marginal product." }
        ]
      },
      {
        id: "short-run-cost",
        title: "Short Run Cost Function",
        content: [
          "Fixed Costs: Those costs are independent of output in the short run, so they are a straight line and don't change with output.",
          "Variable Costs: those that vary directly with output; all costs are variable in the long run, so the graph is curved and changes with output.",
          "Total cost = total fixed cost + total variable cost. It starts at the fixed cost line and follows the variable cost line, since it combines both.",
          "Production efficiency in the short run:",
          "• Optimum output = profit maximisation (this is a long run).",
          "• Average Fixed Cost = total fixed cost / output",
          "• Average Variable Cost = total variable cost / output",
          "• Average Total Cost = total cost / output",
          "• Increasing returns — fixed factors used more efficiently",
          "• Diminishing returns reflected in rising unit costs",
          "• Optimum output (MC = ATC)",
          "The short-run average cost curve (SRAC) shows us the optimum output point where marginal cost meets the average total cost."
        ],
        diagramId: "short-run-costs",
        keyTerms: [
          { term: "Fixed Costs", definition: "Costs independent of output in the short run." },
          { term: "Variable Costs", definition: "Costs that vary directly with output; all costs are variable in the long run." },
          { term: "SRAC", definition: "Short-run average cost curve showing the optimum output point where MC meets ATC." }
        ]
      },
      {
        id: "srac-shape",
        title: "Shape of the SRAC Curve",
        content: [
          "The lowest point of average total cost. The cup shape of the curve is because, initially, the average cost reduces due to increased efficiency and better-fixed factors, known as increasing returns. It ceases up until output.",
          "Then, as the additional cost of producing more units becomes a burden (increase in marginal cost) diminishing returns happen, leading to increased average cost."
        ]
      }
    ]
  },
  {
    id: "a2-long-run-production",
    title: "1.8 Long-Run Production Function",
    subtitle: "Returns to Scale",
    sections: [
      {
        id: "long-run-production",
        title: "Long-Run Production Function",
        content: [
          "In the long run, factors of production are variable. It allows factor input to be manipulated to find the most efficient level.",
          "Increasing returns to scale: where output increases proportionately faster than the increase in factor inputs.",
          "Decreasing returns to scale: where factor inputs increase but output increases at a slower rate."
        ],
        keyTerms: [
          { term: "Increasing Returns to Scale", definition: "Where output increases proportionately faster than the increase in factor inputs." },
          { term: "Decreasing Returns to Scale", definition: "Where output increases at a slower rate than the increase in factor inputs." }
        ]
      }
    ]
  },
  {
    id: "a2-economies-scale",
    title: "1.9 Economies and Diseconomies of Scale",
    subtitle: "Long Run Cost Function, MES",
    sections: [
      {
        id: "economies-scale",
        title: "Economies of Scale",
        content: [
          "Economies of Scale — the benefits gained from falling long run average costs as the scale of output increases."
        ],
        keyTerms: [
          { term: "Economies of Scale", definition: "The benefits gained from falling long run average costs as the scale of output increases." }
        ]
      },
      {
        id: "long-run-cost",
        title: "Long Run Cost Function",
        content: [
          "Internal Economies of Scale: a long run result of a decision to produce on a larger scale.",
          "The principal advantage for a firm benefiting from economies of scale is a reduced cost per unit produced. Advantages gained directly in the production process.",
          "The reason the LRAC curve is sloping downward initially is because, over time, economies of scale reduce costs and output increases (increasing returns to scale), but there will come a point where costs reach the lowest they can while output is highest, and once firms surpass that point, diseconomies start to gain.",
          "Minimum Efficient Scale: lowest level of output at which costs are minimised. Low MES leads to a fragmented market, and high MES levels lead to a natural monopoly."
        ],
        diagramId: "lrac-curve",
        keyTerms: [
          { term: "Internal Economies of Scale", definition: "A long run result of a decision to produce on a larger scale, reducing cost per unit." },
          { term: "Minimum Efficient Scale (MES)", definition: "Lowest level of output at which costs are minimised." }
        ]
      },
      {
        id: "external-economies",
        title: "External Economies of Scale",
        content: [
          "Long-run average cost curve — envelope curve",
          "Economies of Concentration: Increase in the power of the wealth and thus the influence of government interventions, such as taxes and tariffs.",
          "Economies of Technology: Involvement of better and advanced technologies and sciences in relation to economic activities.",
          "Economies of Skills: Where skilled/specialised people can work more efficiently and cost-effectively.",
          "The Benefits:",
          "• Egalitarian: All the businesses in an industry enjoy these economies of scale equally.",
          "• Growth stimulates industry within particular regions and encourages the rapid economic development of support industries and the wider geographic area.",
          "• Lower Costs: Besides lower production and operating costs, economies of scale may reduce variable costs per unit because of operational efficiencies and synergies."
        ]
      },
      {
        id: "diseconomies-scale",
        title: "Diseconomies of Scale",
        content: [
          "Diseconomies of Scale: where long-run average cost rises as output increases.",
          "Internal Diseconomies of scale are possible because the excessive concentration of economic activity in a narrow geographical area will lead to disadvantages.",
          "• Technical Diseconomies: inefficiencies in the production process. When companies grow faster than they can adapt and can't meet demand, they face challenges.",
          "• Organisational Diseconomies: inefficiencies in the workforce. This requires additional workers, which can reduce employee productivity.",
          "• Purchasing Diseconomies: laxity in purchasing due to additional cash inflows, which creates problems of irresponsible spending, greater waste, higher costs, and even lack of progress.",
          "• Competitive Diseconomies: This happens due to non-competitive markets; this lack of tangible incentives can lead to inefficiencies.",
          "• Financial Diseconomies",
          "External diseconomies of scale come in the form of:",
          "• Traffic Congestion, which increases distribution costs.",
          "• Shortage of Skilled Labour and, therefore, rising variable costs."
        ]
      }
    ]
  },
  {
    id: "a2-revenue-profit",
    title: "1.10 Revenue and Profit",
    subtitle: "TR, AR, MR, Normal/Supernormal Profit",
    sections: [
      {
        id: "revenue",
        title: "Revenue",
        content: [
          "Total Revenue (TR) = price × quantity",
          "Average Revenue (AR) = total revenue / quantity",
          "Marginal revenue is the additional revenue gained by the additional unit. The firm only sells more by reducing price; AR is always higher than MR. The demand curve is the AR line."
        ]
      },
      {
        id: "profit",
        title: "Profit",
        content: [
          "There are 3 types of profit:",
          "• Normal Profit: a cost of production that is just sufficient for the firm to keep running in the same industry.",
          "• Subnormal Profit: any profit less than the normal profit. If the problem persists, then the firm will leave the industry.",
          "• Supernormal Profit: any profit in excess of normal profit. It only exists in the short term and only for monopolies."
        ],
        keyTerms: [
          { term: "Normal Profit", definition: "A cost of production that is just sufficient for the firm to keep running in the same industry." },
          { term: "Subnormal Profit", definition: "Any profit less than the normal profit; if persistent, the firm will leave the industry." },
          { term: "Supernormal Profit", definition: "Any profit in excess of normal profit; only exists in the short term and for monopolies." }
        ]
      },
      {
        id: "barriers-entry",
        title: "Barriers to Entry",
        content: [
          "• Access to Capital: The market could have high fixed costs/set-up costs, such as research and development, which might require a high salary over a long period to be profitable.",
          "• Sunk costs act as a barrier to exit and the high risk of entry and failure prevent potential firms from entering.",
          "• Advertising and brand names with high consumer loyalty permanently since it cannot cover all its costs are also regarded as a form of investment.",
          "• Start-ups have less advantage of economies of scale and large firms can take advantage of their economies of scale and use predatory pricing.",
          "• Patents restrict the use of production processes/products.",
          "• Some existing firms may have monopoly access to raw materials, components and retail outlets."
        ]
      }
    ]
  },
  {
    id: "a2-market-structures",
    title: "1.11 Different Market Structures",
    subtitle: "Concentration Ratio, Perfect Competition, Contestable Markets",
    sections: [
      {
        id: "concentration-ratio",
        title: "Concentration Ratio",
        content: [
          "The collective market share of the largest firms in the industry. Found by taking the number of firms and adding up their market share. Then, put them in a ratio.",
          "Company A's market share is 10%, company B's market share is 15%, company C's market share is 20%, and company D's market share is 25%. The ratio would be n=4, total market share of the top.",
          "Important note: Only add the big dominators, not all the firms in the market. The higher this concentration ratio, the more concentrated the market is (more competition)."
        ],
        keyTerms: [
          { term: "Concentration Ratio", definition: "The collective market share of the largest firms in the industry." }
        ]
      },
      {
        id: "perfect-competition",
        title: "Perfect Competition",
        content: [
          "Theoretical Extreme, the only applicable example is the agricultural market.",
          "• Free entry",
          "• Perfect knowledge about market conditions and prices by all buyers and sellers.",
          "• Individual firms have no influence on market price, which is determined by market demand and quantity-supplied forces. Firms are price takers.",
          "• All products are identical (same quality and identical to every consumer).",
          "• Freedom of entry into and exit from the market.",
          "• Demand = Average revenue = Marginal revenue. This is because firms cannot influence price; they just take it. This leaves the marginal revenue constant, which makes equal average revenue (Additional units will give the same revenue every time).",
          "• The price is equal to AR and MR.",
          "• The chosen output will be where MC = MR (price), the profit maximisation point.",
          "• Abnormal profit results in the short run, but since it creates incentives for new firms to enter, supply rises, causing prices to fall and profits to return to normal.",
          "• Long-run equilibrium leaves only productive and allocative efficient firms due to normal profit.",
          "• The Shutdown price is when AR = AVC. If the firm's price (average revenue) falls below its average variable cost, it is making an operating loss since that would mean the total revenue would be less than the variable cost. This is short-term since firms may return from this loss by cutting costs, loans, economic growth, etc.",
          "• The long-term shutdown price is when the price is less than the minimum ATC: the firm will have to exit the market. The government does this to deregulate the market and make it more competitive."
        ],
        diagramId: "perfect-competition"
      }
    ]
  },
  {
    id: "a2-contestable-markets",
    title: "1.12 Contestable Markets",
    subtitle: "Features and Market Access",
    sections: [
      {
        id: "contestable-intro",
        title: "Contestable Market",
        content: [
          "Any market structure with a threat that potential entrants are free and able to enter this market. No cost for entry, and it exists in the perfect contestable market.",
          "Features of Contestable Market:",
          "• The number and size of firms are irrelevant.",
          "• Only normal profit can be earned in the long run.",
          "• The threat of potential entrants into the market is overriding.",
          "• All firms are subject to the same regulations and government control.",
          "• Mechanisms must be in place to prevent unfair pricing designed by established firms to stop new firms from entering.",
          "• Cross subsidisation is eliminated."
        ],
        keyTerms: [
          { term: "Contestable Market", definition: "Any market structure with a threat that potential entrants are free and able to enter, with no sunk costs for entry." }
        ]
      }
    ]
  },
  {
    id: "a2-imperfect-competition",
    title: "1.13 Imperfect Competition",
    subtitle: "Monopolistic Competition, Oligopoly, Monopoly",
    sections: [
      {
        id: "monopolistic-competition",
        title: "Monopolistic Competition",
        content: [
          "Any market structure except for perfect competition.",
          "Characteristics:",
          "• Numerous buyers and sellers",
          "• Few barriers to entry",
          "• Wide choice of differentiated products",
          "• Firms have some influence on market price",
          "Similar to perfect competition, except for product differentiation. The rules and marketing and promotion play a big role in this market structure. Firms can charge prices above marginal cost which means as the firm makes more of the product, the price is lowered, and that's why marginal revenue is below the demand curve.",
          "In the short-run, as firms aim to maximise/minimise profit they will aim to produce where MC=MR; this has them making an abnormal profit. Like perfect competition, this creates incentives for new firms to enter due to low barriers to entry. But unlike perfect competition, firms can set their prices: this creates competition and shifts prices from where it meets demand to where it meets ATC and MC. This leads to losses, but as firms are free to exit.",
          "In the long run, firms will still produce where MC=MR; however, the demand curve would have shifted to the left to produce at minimum ATC in the long run."
        ],
        diagramId: "monopolistic-competition"
      },
      {
        id: "oligopoly",
        title: "Oligopoly",
        content: [
          "Characteristics:",
          "• Dominated market by a few firms",
          "• Decisions are interdependent on rival strategies/reactions.",
          "• High or substantial barriers to entry",
          "• Products may be differentiated or not.",
          "• The uncertainty and risk associated with price",
          "Oligopoly behaviour can follow 2 routes, aggressive competition in the form of price wars and another less risky approach through non-price competition to increase revenue and horizontal integration.",
          "Non-Price Competition:",
          "• Physical characteristics",
          "• Location",
          "• Service level",
          "• Advertising",
          "The second route is cooperation and collusion. Cooperation like research and development, where firms pool their knowledge and perhaps participate in joint ventures. Collusion is different: it is anticompetitive action by producers."
        ]
      },
      {
        id: "price-leadership",
        title: "Price Leadership",
        content: [
          "Price Leadership: A situation in a market whereby a particular firm has the power to change prices, the result of which is that competitors follow the lead."
        ],
        keyTerms: [
          { term: "Price Leadership", definition: "A situation in a market whereby a particular firm has the power to change prices, the result of which is that competitors follow the lead." }
        ]
      },
      {
        id: "cartel-intro",
        title: "Cartel",
        content: [
          "A formal agreement between firms to limit competition by limiting output or fixing prices."
        ],
        keyTerms: [
          { term: "Cartel", definition: "A formal agreement between firms to limit competition by limiting output or fixing prices." }
        ]
      },
      {
        id: "kinked-demand",
        title: "The Kinked Demand Curve",
        content: [
          "Main Theories to Attempt to Explain Oligopolistic Behaviour:",
          "The Kinked Demand Curve is a means of analysing firms' behaviour in an oligopoly without collusion. The kinked demand curve shows how oligopoly firms won't be able to have price competition, and that will lead to the temptation to collude.",
          "Impact of Price Rise: In the graph above, p is the equilibrium price; if the price rises above that, there will be a reverse movement along the demand curve, causing a reduction in Q (quantity) and a reduction in MR (marginal revenue). If a firm increases the price, it becomes more expensive than its rivals, so consumers will switch to its rivals. Therefore, for a price rise, there is likely to be a significant fall in demand. Demand is, therefore, price elastic. In this case, by increasing price, firms will lose revenue because the percentage fall in demand is greater than the percentage rise in price.",
          "Impact of Price Cut: In the graph above, p is the equilibrium price; if the price reduces below that, there will be forward movement along the demand curve, causing a slight increase in Q (quantity), a reduction in MR (marginal revenue) and a significant increase in MC (marginal cost).",
          "An increase in demand, leading to a rise in revenue. The firm would gain market share. However, other firms will not want to see this rise in market share, so they will respond by also cutting prices to follow the first firm. The net effect is that if all firms cut price — the individual firm will only see a small increase in demand. Because there is a 'price war', demand for a firm is price elastic. If demand is inelastic and price falls, then revenue will fall."
        ],
        diagramId: "kinked-demand"
      },
      {
        id: "game-theory",
        title: "Game Theory",
        content: [
          "Showcases interdependences that a kinked demand curve cannot showcase.",
          "This diagram showcases the different options a firm can decide based on competition and price.",
          "Prisoners' dilemma is showcased here, with a Nash equilibrium and dominant strategy.",
          "It could be making an abnormal profit, but if it behaved like a competitor firm, equilibrium is where price equals long-run marginal cost. This leads to price and added outcome by not deviating from their initial strategy. In this case, the Nash equilibrium is either selling for 1 dollar for companies A and B, where each gets 3 million in return.",
          "A dominant strategy is the optimal competitive strategy set, no matter how that player's opponents may play. Company A would prefer to sell at 0.9 dollars to gain 4 million in the above example."
        ],
        diagramId: "game-theory-matrix",
        keyTerms: [
          { term: "Nash Equilibrium", definition: "An outcome where no player can benefit by deviating from their initial strategy." },
          { term: "Dominant Strategy", definition: "The optimal competitive strategy set, no matter how that player's opponents may play." }
        ]
      },
      {
        id: "prisoners-dilemma",
        title: "Prisoners' Dilemma",
        content: [
          "When both parties are under the guise of guilty, where if both fess up, punishment is shared; if one is proven guilty, full punishment. This causes both parties to be in a dilemma. Related to pricing strategy."
        ]
      },
      {
        id: "principal-agent",
        title: "Principal Agent Problem",
        content: [
          "A principal hires an agent to own the business, but there is a case of information failure, since the principal cannot ensure that the appointed agent makes the necessary decisions to run the firm in the best interests of shareholders.",
          "For example, the agent is following the objective of satisficing, whereas the principal believes he or she is implementing a policy of profit maximisation.",
          "Price rigidity (non-price competition) like the Nash equilibrium is not the best outcome, therefore pushes firms to collude and use tacit collusion. It also provides an incentive to cheat on collusive agreements, which could put firms at risk of being caught, which could reflect negatively."
        ],
        keyTerms: [
          { term: "Principal Agent Problem", definition: "When a principal cannot ensure an appointed agent makes decisions in the best interests of shareholders, due to information failure." }
        ]
      },
      {
        id: "monopoly",
        title: "Monopoly",
        content: [
          "Monopoly Characteristics:",
          "• Single seller",
          "• No close substitutes",
          "• High barriers to entry",
          "• The monopolist is the price maker",
          "Local monopolies can exist because it could be too costly for competitors.",
          "No distinction between short-run and long-run due to barriers of entry and no economic incentive for the monopolist to move away.",
          "Monopoly sets prices higher than market equilibrium (where MC=ATC), causing them to make supernormal (abnormal) profits. This would normally attract new firms but barriers prevent entry."
        ],
        diagramId: "monopoly"
      },
      {
        id: "natural-monopoly",
        title: "Natural Monopoly",
        content: [
          "Where a single supplier has a substantial cost advantage such that competing producers would raise costs and where duplication will produce an inefficient use of resources. This can also be done by the government, for example, utilities, because private competition would be wasteful."
        ],
        keyTerms: [
          { term: "Natural Monopoly", definition: "Where a single supplier has a substantial cost advantage such that competing producers would raise costs and duplication would be inefficient." }
        ]
      }
    ]
  },
  {
    id: "a2-growth-firms",
    title: "1.14 Growth and Survival of Firms",
    subtitle: "Internal and External Growth, Integration",
    sections: [
      {
        id: "small-firms",
        title: "Existence of Small Firms",
        content: [
          "Reasons why firms decide to remain small:",
          "• Support large firms through economic activity in small markets.",
          "• Spread of skills",
          "• Personal attention in service to customers",
          "• Can be future big firms in making",
          "• Obstacles of growth lead to it staying small.",
          "• Expansion is not an objective",
          "• The recession and rising unemployment trigger an increase in start-ups.",
          "• Financial help from the government",
          "• More efficient and competitive (Quick response to changes in the market)."
        ]
      },
      {
        id: "internal-growth",
        title: "Internal Growth",
        content: [
          "The firm decided to retain profit and invest it in the business to grow and expand.",
          "• Reduction in average total cost over time due to economies of scope.",
          "• Economies of Scope: reduction in ATC made possible by a firm increasing the goods it produces.",
          "• Achieve higher profits → Boost sales → Profit",
          "• Diversity in product range due to economies of scale."
        ],
        keyTerms: [
          { term: "Internal Growth", definition: "When a firm retains profit and invests it in the business to grow and expand." },
          { term: "Economies of Scope", definition: "Reduction in ATC made possible by a firm increasing the goods it produces." }
        ]
      },
      {
        id: "external-growth",
        title: "External Growth",
        content: [
          "The firm expands by joining together through takeovers or mergers.",
          "• Diversification: where the firm grows by producing or selling a wide range of products.",
          "• Vertical Integration: where the firm grows by merging or taking over with other firms, producing backwards or forward in the supply chain.",
          "  — Vertical forward integration (forward supply chain)",
          "  — Vertical backward integration (backward supply chain).",
          "• Conglomerate Integration: producing in an unrelated industry.",
          "• Horizontal Integration: where a firm merges or takes over another in the same industry."
        ],
        keyTerms: [
          { term: "Diversification", definition: "Where the firm grows by producing or selling a wide range of products." },
          { term: "Vertical Integration", definition: "Where the firm grows by merging with firms producing backwards or forward in the supply chain." },
          { term: "Horizontal Integration", definition: "Where a firm merges or takes over another in the same industry." },
          { term: "Conglomerate Integration", definition: "Producing in an unrelated industry through merger or takeover." }
        ]
      },
      {
        id: "reasons-integration",
        title: "Reasons for Integration",
        content: [
          "• Capture resources from other businesses",
          "• Benefit from their experience and knowledge of the market, especially if the firm wants to integrate into a new industry (Vertical integration or conglomerate).",
          "• To avoid being taken over by other larger firms, the firm will merge or take over other smaller firms in the industry (horizontal)."
        ]
      },
      {
        id: "consequences-integration",
        title: "Consequences of Integration",
        content: [
          "• Economies of scale and scope (positive outcome)",
          "• Diseconomies of scale (Negative outcome)",
          "• Conflict in decision-making arising from different management cultures.",
          "• The owner may lose control due to the addition of the stakeholders. This may lead to conflict in objectives between the owner and the rest of the stakeholders."
        ]
      }
    ]
  },
  {
    id: "a2-cartels",
    title: "1.15 Cartels",
    subtitle: "Types of Agreements, Consequences",
    sections: [
      {
        id: "cartel-detail",
        title: "Cartels",
        content: [
          "Cartel: a formal agreement between firms to limit competition by limiting output or fixing prices.",
          "Types of cartel agreement:",
          "• Price Fixing: maintain or fix a minimum pricing strategy where they cannot sell below the floor price. They may also require the unison raising of prices and avoid discount pricing.",
          "• Market Share: divide the market (customers and regions) between the members to ensure even revenue distribution. This is done by restricting the other members' involvement in that region.",
          "• Terms of delivery: agreeing on modes, location, billing, etc.",
          "• Output and production: agree on the production level to influence/force higher price trends for goods or services."
        ],
        tables: [
          {
            headers: ["Positive consequences", "Negative consequences"],
            rows: [
              ["Monopoly power advantages to its members", "Act as a barrier to entry by discouraging new entrants."],
              ["Save costs to members through economies of scale", "Lack of competition creates inefficiency in the market."],
              ["Prices for goods and services at higher margins to maximise profit.", "Harm consumers, as prices are greater than the market price, and supply is restricted."]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "a2-firm-objectives",
    title: "1.16 Differing Objectives and Policies of Firms",
    subtitle: "Profit Max, Survival, Sales Max, Revenue Max, Pricing Policies",
    sections: [
      {
        id: "profit-max",
        title: "Profit Maximisation",
        content: [
          "Firms want to increase the level of profit they receive from given output. Thus, why is profit maximisation an objective?",
          "In the graph, when the marginal revenue is greater than the marginal cost the firm gains increasing profit levels, at which MC=MR is the maximum profit level for the given output. However, if the marginal cost exceeds marginal revenue, the firm will be making a loss for each unit produced.",
          "Short-term profit maximisation may not be of interest long term:",
          "• Avoidance of government watch",
          "• Large abnormalities may attract new entrants",
          "• High profits may decrease relationships with stakeholders.",
          "• Management may have different objectives."
        ],
        diagramId: "profit-maximisation"
      },
      {
        id: "survival",
        title: "Survival",
        content: [
          "The very common objective, the first objective of a new startup, and the prioritized objective of a declining in-loss firm. It's not a profit-centred objective.",
          "Survival objectives ensure the firm is operating. This objective focuses on ensuring the business doesn't fall into a loss and has enough to cover its Total costs."
        ]
      },
      {
        id: "profit-satisficing",
        title: "Profit Satisficing",
        content: [
          "A firm aims to make a reasonable profit level to satisfy all shareholders."
        ],
        keyTerms: [
          { term: "Profit Satisficing", definition: "When a firm aims to make a reasonable profit level to satisfy all shareholders, rather than maximising profit." }
        ]
      },
      {
        id: "sales-max",
        title: "Sales Maximisation",
        content: [
          "A firm's objective to maximise the volume of sales. Cross subsidisation (the strategy of funding one product with the profits of another) is used since higher output relative to revenue causes loss, and firms need ways to cover ATC.",
          "This objective may draw new entrants but can be deterred by price wars."
        ],
        keyTerms: [
          { term: "Sales Maximisation", definition: "A firm's objective to maximise the volume of sales, often using cross subsidisation." },
          { term: "Cross Subsidisation", definition: "The strategy of funding one product with the profits of another." }
        ]
      },
      {
        id: "revenue-max",
        title: "Revenue Maximisation",
        content: [
          "A firm's objective to maximise turnover, MR=0. Accept low prices and above profit maximisation output to increase market share, called penetration pricing policy.",
          "It can be favoured if management salaries are linked to the value of sales."
        ],
        keyTerms: [
          { term: "Revenue Maximisation", definition: "A firm's objective to maximise turnover where MR=0." },
          { term: "Penetration Pricing", definition: "Accepting low prices and above profit-maximisation output to increase market share." }
        ]
      },
      {
        id: "price-discrimination",
        title: "Price Discrimination",
        content: [
          "Price Discrimination: 3 recognised types of price discrimination:",
          "• First Degree: The firm sells at different prices for different consumers based on the ability and willingness to pay. The main focus is on maximising willingness to pay.",
          "• Second Degree: Consumers will only buy more of a product when the additional units are lower in price which causes firms to charge a higher price for the first units so that total revenue and profit rise.",
          "• Third Degree: Discriminate between consumers based on the presumption that groups of consumers have a different price elasticity of demand for the product.",
          "The aim of price discrimination, if taking advantage of consumer surplus, is to maximise producer surplus."
        ],
        keyTerms: [
          { term: "First Degree Price Discrimination", definition: "The firm sells at different prices for different consumers based on ability and willingness to pay." },
          { term: "Second Degree Price Discrimination", definition: "Charging higher prices for initial units and lower prices for additional units." },
          { term: "Third Degree Price Discrimination", definition: "Discriminating between consumer groups based on different price elasticities of demand." }
        ]
      },
      {
        id: "conditions-pd",
        title: "Conditions for Price Discrimination",
        content: [
          "• The degree of monopoly power needs to be a price maker.",
          "• Be able to identify the different market segments.",
          "• The elasticity of demand for different consumers is known.",
          "• Firms need to prevent re-sale of products by consumers. This could result in the exploitation of consumers."
        ]
      }
    ]
  }
];
