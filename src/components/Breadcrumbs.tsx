import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Route to breadcrumb mapping
const routeLabels: Record<string, BreadcrumbItem[]> = {
  // Microeconomics - AS Level
  '/microeconomics': [{ label: 'Microeconomics', href: '/microeconomics' }],
  '/basic-economic-ideas': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'AS Level', href: '/microeconomics#as' },
    { label: 'Basic Economic Ideas', href: '/basic-economic-ideas' },
  ],
  '/price-system': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'AS Level', href: '/microeconomics#as' },
    { label: 'The Price System', href: '/price-system' },
  ],
  '/elasticities': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'AS Level', href: '/microeconomics#as' },
    { label: 'Elasticities', href: '/elasticities' },
  ],
  '/market-failure': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'AS Level', href: '/microeconomics#as' },
    { label: 'Market Failure', href: '/market-failure' },
  ],
  // Microeconomics - A2 Level
  '/a2-micro/utility-consumer-choice': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'A2 Level', href: '/microeconomics#a2' },
    { label: 'Utility & Consumer Choice', href: '/a2-micro/utility-consumer-choice' },
  ],
  '/a2-micro/production-costs': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'A2 Level', href: '/microeconomics#a2' },
    { label: 'Production & Costs', href: '/a2-micro/production-costs' },
  ],
  '/a2-micro/economic-efficiency': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'A2 Level', href: '/microeconomics#a2' },
    { label: 'Economic Efficiency', href: '/a2-micro/economic-efficiency' },
  ],
  '/a2-micro/market-structures': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'A2 Level', href: '/microeconomics#a2' },
    { label: 'Market Structures', href: '/a2-micro/market-structures' },
  ],
  '/a2-micro/labor-market': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'A2 Level', href: '/microeconomics#a2' },
    { label: 'Labor Market', href: '/a2-micro/labor-market' },
  ],
  // Macroeconomics - AS Level
  '/macroeconomics': [{ label: 'Macroeconomics', href: '/macroeconomics' }],
  '/as-macro/ad-as': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'AS Level', href: '/macroeconomics#as' },
    { label: 'AD/AS Equilibrium', href: '/as-macro/ad-as' },
  ],
  '/as-macro/inflation': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'AS Level', href: '/macroeconomics#as' },
    { label: 'Inflation', href: '/as-macro/inflation' },
  ],
  '/as-macro/international-trade': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'AS Level', href: '/macroeconomics#as' },
    { label: 'International Trade', href: '/as-macro/international-trade' },
  ],
  '/as-macro/balance-of-payments': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'AS Level', href: '/macroeconomics#as' },
    { label: 'Balance of Payments', href: '/as-macro/balance-of-payments' },
  ],
  '/as-macro/policy': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'AS Level', href: '/macroeconomics#as' },
    { label: 'Macroeconomic Policy', href: '/as-macro/policy' },
  ],
  // Macroeconomics - A2 Level
  '/a2-macro/national-income': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'National Income', href: '/a2-macro/national-income' },
  ],
  '/a2-macro/income-determination': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Income Determination', href: '/a2-macro/income-determination' },
  ],
  '/a2-macro/investment': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Investment', href: '/a2-macro/investment' },
  ],
  '/a2-macro/government-trade': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Government & Trade', href: '/a2-macro/government-trade' },
  ],
  '/a2-macro/money-banking': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Money & Banking', href: '/a2-macro/money-banking' },
  ],
  '/a2-macro/unemployment-growth': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Unemployment & Growth', href: '/a2-macro/unemployment-growth' },
  ],
  '/a2-macro/policy-objectives': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Policy Objectives', href: '/a2-macro/policy-objectives' },
  ],
  '/a2-macro/development': [
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'A2 Level', href: '/macroeconomics#a2' },
    { label: 'Development', href: '/a2-macro/development' },
  ],
  // Other pages
  '/diagrams': [{ label: 'Diagram Bank', href: '/diagrams' }],
  '/case-studies': [{ label: 'Case Studies', href: '/case-studies' }],
  '/market-structures': [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'Market Structures', href: '/market-structures' },
  ],
};

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = routeLabels[location.pathname] || [];

  if (breadcrumbs.length === 0 || location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors"
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
