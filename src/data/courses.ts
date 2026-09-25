export interface CourseLesson { id: string; title: string; module: string }
export interface Course { slug: string; title: string; description: string; file: string; lessons: CourseLesson[] }

export const COURSES: Course[] = [
  {
    slug: 'managerial-economics',
    title: 'Managerial Economics',
    description: 'Four modules and 24 chapters on firm decisions: demand, cost, pricing, strategy, risk and investment, with interactive diagrams and self-checks.',
    file: '/courses/managerial-economics.html',
    lessons: [
  {
    "id": "primer",
    "title": "Primer: How Economists Think: Six Diagrams from Scarcity to Trade",
    "module": "Foundations: Before You Begin"
  },
  {
    "id": "chapter-1",
    "title": "Chapter 1: Nature, Scope & Significance of Managerial Economics",
    "module": "Module I: Foundations of Managerial Economics"
  },
  {
    "id": "chapter-2",
    "title": "Chapter 2: Theory of the Firm: Objectives, Ownership & Agency",
    "module": "Module I: Foundations of Managerial Economics"
  },
  {
    "id": "chapter-3",
    "title": "Chapter 3: Optimization Techniques: Marginal Analysis & Constrained Optimization",
    "module": "Module I: Foundations of Managerial Economics"
  },
  {
    "id": "chapter-4",
    "title": "Chapter 4: Demand and Supply: The Manager’s Toolkit",
    "module": "Module I: Foundations of Managerial Economics"
  },
  {
    "id": "chapter-5",
    "title": "Chapter 5: Elasticity of Demand and Managerial Applications",
    "module": "Module I: Foundations of Managerial Economics"
  },
  {
    "id": "chapter-6",
    "title": "Chapter 6: Demand Estimation: Regression & Empirical Methods",
    "module": "Module I: Foundations of Managerial Economics"
  },
  {
    "id": "chapter-7",
    "title": "Chapter 7: Demand Forecasting Techniques",
    "module": "Module II: Demand Forecasting, Production & Cost"
  },
  {
    "id": "chapter-8",
    "title": "Chapter 8: Production Theory: Isoquants, Returns to Scale, Optimal Input Combination",
    "module": "Module II: Demand Forecasting, Production & Cost"
  },
  {
    "id": "chapter-9",
    "title": "Chapter 9: Short-Run Cost Analysis",
    "module": "Module II: Demand Forecasting, Production & Cost"
  },
  {
    "id": "chapter-10",
    "title": "Chapter 10: Long-Run Costs, Economies of Scale & Scope, Learning Curve",
    "module": "Module II: Demand Forecasting, Production & Cost"
  },
  {
    "id": "chapter-11",
    "title": "Chapter 11: Cost-Volume-Profit & Break-Even Analysis",
    "module": "Module II: Demand Forecasting, Production & Cost"
  },
  {
    "id": "chapter-12",
    "title": "Chapter 12: Perfect Competition: Managerial Decisions",
    "module": "Module II: Demand Forecasting, Production & Cost"
  },
  {
    "id": "chapter-13",
    "title": "Chapter 13: Monopoly & Market Power",
    "module": "Module III: Market Structure & Strategic Behavior"
  },
  {
    "id": "chapter-14",
    "title": "Chapter 14: Monopolistic Competition",
    "module": "Module III: Market Structure & Strategic Behavior"
  },
  {
    "id": "chapter-15",
    "title": "Chapter 15: Oligopoly: Interdependence, Kinked Demand, Collusion",
    "module": "Module III: Market Structure & Strategic Behavior"
  },
  {
    "id": "chapter-16",
    "title": "Chapter 16: Game Theory for Managers: Strategic Decision-Making",
    "module": "Module III: Market Structure & Strategic Behavior"
  },
  {
    "id": "chapter-17",
    "title": "Chapter 17: Price Discrimination",
    "module": "Module III: Market Structure & Strategic Behavior"
  },
  {
    "id": "chapter-18",
    "title": "Chapter 18: Advanced Pricing: Bundling, Two-Part Tariffs, Peak-Load, Transfer Pricing",
    "module": "Module III: Market Structure & Strategic Behavior"
  },
  {
    "id": "chapter-19",
    "title": "Chapter 19: Practical Pricing Strategies: Cost-Plus, Value-Based, Psychological Pricing",
    "module": "Module IV: Pricing, Risk & Strategic Investment"
  },
  {
    "id": "chapter-20",
    "title": "Chapter 20: Decision-Making Under Risk & Uncertainty",
    "module": "Module IV: Pricing, Risk & Strategic Investment"
  },
  {
    "id": "chapter-21",
    "title": "Chapter 21: Information Economics: Asymmetric Information, Signaling & Screening",
    "module": "Module IV: Pricing, Risk & Strategic Investment"
  },
  {
    "id": "chapter-22",
    "title": "Chapter 22: Principal-Agent Theory & Incentive Design",
    "module": "Module IV: Pricing, Risk & Strategic Investment"
  },
  {
    "id": "chapter-23",
    "title": "Chapter 23: Capital Budgeting & Investment Decisions",
    "module": "Module IV: Pricing, Risk & Strategic Investment"
  },
  {
    "id": "chapter-24",
    "title": "Chapter 24: Government, Regulation & Market Failure",
    "module": "Module IV: Pricing, Risk & Strategic Investment"
  }
],
  },
];
