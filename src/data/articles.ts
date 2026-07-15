// Curated Econ Nexus Research & Article Hub
// Each article is a self-contained HTML file served from /public/articles
// and rendered untouched inside an iframe viewer.

export type Article = {
  slug: string;
  file: string;             // path under /public
  title: string;
  summary: string;
  category: 'Markets' | 'Policy' | 'History' | 'Finance' | 'Trade' | 'Theory' | 'Crises';
  readTime: string;
  date: string;
};

export const ARTICLES: Article[] = [
  // ── Foundational Theory ─────────────────────────────────────────
  {
    slug: 'adam-smith-wealth',
    file: '/articles/adam-smith-wealth.html',
    title: 'Adam Smith and The Wealth of Nations',
    summary:
      'The 1776 treatise that founded modern economics — division of labour, the invisible hand and the case for open markets.',
    category: 'Theory',
    readTime: '10 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'malthus-population',
    file: '/articles/malthus-population.html',
    title: 'Malthus and the Principle of Population',
    summary:
      'Why Malthus feared population would outrun food supply — and how his logic still shapes debates on growth and scarcity.',
    category: 'Theory',
    readTime: '8 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'marshall-supply-demand',
    file: '/articles/marshall-supply-demand.html',
    title: 'Marshall and Supply & Demand',
    summary:
      'Alfred Marshall’s scissors: how price is set at the intersection of demand and supply — the diagram every economist still draws.',
    category: 'Theory',
    readTime: '7 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'market-structures-theory',
    file: '/articles/market-structures-theory.html',
    title: 'Market Structures: A Complete Theory Guide',
    summary:
      'Perfect competition, monopoly, oligopoly and monopolistic competition — assumptions, diagrams and efficiency verdicts.',
    category: 'Theory',
    readTime: '12 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'globalization',
    file: '/articles/globalization.html',
    title: 'Globalization: Waves, Winners and Losers',
    summary:
      'Trade, capital and technology across borders — from the 19th-century steamship to modern supply chains.',
    category: 'Trade',
    readTime: '10 min read',
    date: 'Jul 2026',
  },

  // ── Crises & Historical Episodes ────────────────────────────────
  {
    slug: 'great-depression',
    file: '/articles/great-depression.html',
    title: 'The Great Depression: A Complete Account',
    summary:
      'The 1929 crash, the collapse of banking and the policy failures that turned a downturn into a decade-long depression.',
    category: 'Crises',
    readTime: '11 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'dotcom-bubble',
    file: '/articles/dotcom-bubble.html',
    title: 'The Dot-Com Bubble: A Complete Account',
    summary:
      'Irrational exuberance, IPO mania and the 2000 crash — how the first internet boom reshaped finance and Silicon Valley.',
    category: 'Crises',
    readTime: '12 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'financial-crisis-2008',
    file: '/articles/financial-crisis-2008.html',
    title: 'The 2007–2008 Financial Crisis',
    summary:
      'Subprime mortgages, Lehman, and the near-collapse of the global financial system — with the policy response that followed.',
    category: 'Crises',
    readTime: '14 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'covid-pandemic',
    file: '/articles/covid-pandemic.html',
    title: 'The COVID-19 Pandemic: A Complete Economic Account',
    summary:
      'Lockdowns, fiscal bazookas, supply-chain shock and the fastest recession-and-rebound in modern economic history.',
    category: 'Crises',
    readTime: '13 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'inflation-surge',
    file: '/articles/inflation-surge.html',
    title: 'The Global Inflation Surge of 2021–2023',
    summary:
      'Why inflation returned with a vengeance — post-COVID demand, energy shocks, and the sharpest tightening cycle in decades.',
    category: 'Crises',
    readTime: '11 min read',
    date: 'Jul 2026',
  },

  // ── Contemporary Research ────────────────────────────────────────
  {
    slug: 'bondholders-inflation',
    file: '/articles/bondholders-inflation.html',
    title: 'Why American Bondholders Are Jumpy About Inflation',
    summary:
      'How rising yields, sticky inflation and long-duration Treasuries are reshaping bondholder psychology.',
    category: 'Markets',
    readTime: '9 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'tokenized-finance',
    file: '/articles/tokenized-finance.html',
    title: 'Tokenized Finance: What Are the Tradeoffs?',
    summary:
      'Atomic settlement, smart-contract governance and the migration of financial logic on-chain.',
    category: 'Finance',
    readTime: '11 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'fed-bank-enforcement',
    file: '/articles/fed-bank-enforcement.html',
    title: 'Is the Fed Going Easy on Bank Enforcement?',
    summary:
      'Federal Reserve enforcement actions have fallen ~50% since the pandemic — diverging from the OCC and FDIC.',
    category: 'Policy',
    readTime: '10 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'noncash-payments',
    file: '/articles/noncash-payments.html',
    title: 'Shifts in Non-Cash Payments: Value vs. Volume',
    summary:
      'Why bank transfers dominate the dollar value of US payments while cards dominate transaction count.',
    category: 'Finance',
    readTime: '8 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'trade-tariffs',
    file: '/articles/trade-tariffs.html',
    title: 'US Exports, Imports & Tariffs: 250 Years',
    summary:
      'The long arc of American trade — from post-independence tariffs to the modern persistent trade deficit.',
    category: 'Trade',
    readTime: '12 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'declaration-track-changes',
    file: '/articles/declaration-track-changes.html',
    title: 'The Declaration of Independence, in Track Changes',
    summary:
      'Jefferson’s rough draft vs. the final text — including the anti-slavery passage that was cut.',
    category: 'History',
    readTime: '7 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'pursuit-happiness',
    file: '/articles/pursuit-happiness.html',
    title: 'What the Founders Meant by the Pursuit of Happiness',
    summary:
      'Tracing the Aristotelian roots of a phrase far more demanding than modern pleasure-seeking.',
    category: 'History',
    readTime: '8 min read',
    date: 'Jul 2026',
  },
];

export const ARTICLE_CATEGORIES = ['All', 'Theory', 'Crises', 'Markets', 'Policy', 'Finance', 'Trade', 'History'] as const;
