import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  TrendingUp, 
  Globe,
  BarChart3,
  Home,
  Image,
  Scale,
  Factory,
  Users,
  Wallet,
  Banknote,
  Target,
  Building2,
  Ship
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { title: string; href: string }[];
}

// Bamford & Grant Structure
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
    title: 'Microeconomics',
    icon: TrendingUp,
    children: [
      { title: 'Ch.1: Basic Economic Ideas', href: '/basic-economic-ideas' },
      { title: 'Ch.2: The Price System', href: '/price-system' },
      { title: 'Ch.3: Elasticities', href: '/elasticities' },
      { title: 'Ch.4: Market Failure', href: '/market-failure' },
      { title: 'Ch.5: Theory of the Firm', href: '/theory-of-firm' },
      { title: 'Ch.6: Labor Markets', href: '/labor-markets' },
    ],
  },
  {
    title: 'Macroeconomics',
    icon: Globe,
    children: [
      { title: 'Ch.7: AD/AS Analysis', href: '/ad-as-analysis' },
      { title: 'Ch.8: Money & Banking', href: '/money-banking' },
      { title: 'Ch.9: Macro Objectives', href: '/macro-objectives' },
      { title: 'Ch.10: International Trade', href: '/international-trade' },
      { title: 'Ch.11: Development Economics', href: '/development-economics' },
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
  const [expandedItems, setExpandedItems] = useState<string[]>(['Microeconomics']);

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
              <p className="text-xs text-muted-foreground">Bamford & Grant Edition</p>
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
              Based on Bamford & Grant Textbook
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
