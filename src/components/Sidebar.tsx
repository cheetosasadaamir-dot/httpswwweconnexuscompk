import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  TrendingUp, 
  Globe,
  Home,
  Image,
  Building2,
  Layers,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { title: string; href: string }[];
}

// Master Syllabus Map - AS & A2 Structure from Teacher's Notes
const navigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Diagram Bank',
    href: '/diagrams',
    icon: Image,
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
    icon: BookOpen,
  },
  {
    title: 'AS Microeconomics',
    icon: TrendingUp,
    children: [
      { title: 'Ch.1: Basic Economic Ideas', href: '/basic-economic-ideas' },
      { title: 'Ch.2: The Price System', href: '/price-system' },
      { title: 'Ch.3: Elasticities', href: '/elasticities' },
      { title: 'Ch.4: Market Failure', href: '/market-failure' },
    ],
  },
  {
    title: 'A2 Microeconomics',
    icon: GraduationCap,
    children: [
      { title: 'Ch.1: Utility & Consumer Choice', href: '/a2-micro/utility-consumer-choice' },
      { title: 'Ch.4: Efficiency & Market Failure', href: '/a2-micro/economic-efficiency' },
      { title: 'Ch.5: Market Structures', href: '/a2-micro/market-structures' },
      { title: 'Ch.6: Labor Market', href: '/a2-micro/labor-market' },
    ],
  },
  {
    title: 'AS Macroeconomics',
    icon: Layers,
    children: [
      { title: 'Ch.1: AD/AS Equilibrium', href: '/as-macro/ad-as' },
      { title: 'Ch.2: Inflation', href: '/as-macro/inflation' },
      { title: 'Ch.3: International Trade', href: '/as-macro/international-trade' },
      { title: 'Ch.4: Balance of Payments', href: '/as-macro/balance-of-payments' },
      { title: 'Ch.5: Macroeconomic Policy', href: '/as-macro/policy' },
    ],
  },
  {
    title: 'A2 Macroeconomics',
    icon: GraduationCap,
    children: [
      { title: 'Ch.1: National Income', href: '/a2-macro/national-income' },
      { title: 'Ch.2: Income Determination', href: '/a2-macro/income-determination' },
      { title: 'Ch.3: Investment', href: '/a2-macro/investment' },
      { title: 'Ch.4: Government & Trade', href: '/a2-macro/government-trade' },
      { title: 'Ch.5: Money & Banking', href: '/a2-macro/money-banking' },
      { title: 'Ch.6: Unemployment & Growth', href: '/a2-macro/unemployment-growth' },
      { title: 'Ch.7: Policy Objectives', href: '/a2-macro/policy-objectives' },
      { title: 'Ch.8: Development & Trade Blocs', href: '/a2-macro/development' },
    ],
  },
  {
    title: 'Market Structures',
    icon: Building2,
    children: [
      { title: 'Perfect Competition', href: '/market-structures#perfect-competition' },
      { title: 'Monopoly', href: '/market-structures#monopoly' },
      { title: 'Oligopoly', href: '/market-structures#oligopoly' },
      { title: 'Monopolistic Competition', href: '/market-structures#monopolistic' },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['AS Macroeconomics', 'A2 Macroeconomics']);

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href.includes('#')) {
      return location.pathname === href.split('#')[0];
    }
    return location.pathname === href;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-card rounded-none border-r border-silver/10 z-40 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-silver/10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-lg font-semibold text-silver-bright">EconVerse</h1>
              <p className="text-xs text-muted-foreground">Cambridge 9708 Edition</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.title}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      {expandedItems.includes(item.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedItems.includes(item.title) && item.children && (
                      <ul className="mt-1 ml-4 pl-4 border-l border-silver/10 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-all duration-300",
                                isActive(child.href)
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                              )}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-silver/10">
          <div className="glass-card p-3 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Cambridge International AS & A Level
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
