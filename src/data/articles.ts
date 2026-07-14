// Curated Econ Nexus Research & Article Hub
// Each article is a self-contained HTML file served from /public/articles
// and rendered untouched inside an iframe viewer.

export type Article = {
  slug: string;
  file: string;             // path under /public
  title: string;
  summary: string;
  category: 'Markets' | 'Policy' | 'History' | 'Finance' | 'Trade';
  readTime: string;
  date: string;
};

export const ARTICLES: Article[] = [
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
      'IMF research on atomic settlement, smart-contract governance and the migration of financial logic on-chain.',
    category: 'Finance',
    readTime: '11 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'fed-bank-enforcement',
    file: '/articles/fed-bank-enforcement.html',
    title: 'Is the Fed Going Easy on Bank Enforcement? A Data Look',
    summary:
      'Brookings data shows Federal Reserve enforcement actions have fallen ~50% since the pandemic — diverging from the OCC and FDIC.',
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
    title: 'US Exports, Imports & Tariffs: The 250-Year Perspective',
    summary:
      'The long arc of American trade — from post-independence tariffs to the modern persistent trade deficit.',
    category: 'Trade',
    readTime: '12 min read',
    date: 'Jul 2026',
  },
  {
    slug: 'declaration-track-changes',
    file: '/articles/declaration-track-changes.html',
    title: 'The Declaration of Independence, Run Through Track Changes',
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

export const ARTICLE_CATEGORIES = ['All', 'Markets', 'Policy', 'Finance', 'Trade', 'History'] as const;
