import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  TrendingUp, 
  Globe,
  Home,
  Image,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo-macromicro.png';

interface SubNavItem {
  title: string;
  href: string;
}

interface LevelNavItem {
  title: string;
  children: SubNavItem[];
}

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  levels?: LevelNavItem[];
  children?: SubNavItem[];
}

// Master Syllabus Map - Hierarchical Micro/Macro → AS/A2 Structure
const navigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Microeconomics',
    href: '/microeconomics',
    icon: TrendingUp,
    levels: [
      {
        title: 'AS Level',
        children: [
          { title: 'Ch.1: Basic Economic Ideas', href: '/basic-economic-ideas' },
          { title: 'Ch.2: The Price System', href: '/price-system' },
          { title: 'Ch.3: Elasticities', href: '/elasticities' },
          { title: 'Ch.4: Market Failure', href: '/market-failure' },
        ],
      },
      {
        title: 'A2 Level',
        children: [
          { title: 'Ch.1: Utility & Consumer Choice', href: '/a2-micro/utility-consumer-choice' },
          { title: 'Ch.2: Production & Costs', href: '/a2-micro/production-costs' },
          { title: 'Ch.4: Economic Efficiency', href: '/a2-micro/economic-efficiency' },
          { title: 'Ch.5: Market Structures', href: '/a2-micro/market-structures' },
          { title: 'Ch.6: Labor Market', href: '/a2-micro/labor-market' },
        ],
      },
    ],
  },
  {
    title: 'Macroeconomics',
    href: '/macroeconomics',
    icon: Globe,
    levels: [
      {
        title: 'AS Level',
        children: [
          { title: 'Ch.1: AD/AS Equilibrium', href: '/as-macro/ad-as' },
          { title: 'Ch.2: Inflation', href: '/as-macro/inflation' },
          { title: 'Ch.3: International Trade', href: '/as-macro/international-trade' },
          { title: 'Ch.4: Balance of Payments', href: '/as-macro/balance-of-payments' },
          { title: 'Ch.5: Macroeconomic Policy', href: '/as-macro/policy' },
        ],
      },
      {
        title: 'A2 Level',
        children: [
          { title: 'Ch.2: Keynesian Theory', href: '/a2-macro/national-income' },
          { title: 'Ch.4: Unemployment & Phillips Curve', href: '/a2-macro/unemployment-growth' },
          { title: 'Ch.5: Policy Objectives', href: '/a2-macro/policy-objectives' },
          { title: 'Ch.6: Money & Banking', href: '/a2-macro/money-banking' },
          { title: 'Ch.8: Development', href: '/a2-macro/development' },
        ],
      },
    ],
  },
  {
    title: 'Notes',
    href: '/notes',
    icon: BookOpen,
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
    icon: GraduationCap,
  },
  {
    title: 'Diagram Bank',
    href: '/diagrams',
    icon: Image,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [expandedLevels, setExpandedLevels] = useState<string[]>([]);

  // Auto-expand based on current route
  useEffect(() => {
    const path = location.pathname;
    
    // Determine which sections should be expanded based on current route
    if (path.startsWith('/basic-economic-ideas') || path.startsWith('/price-system') || 
        path.startsWith('/elasticities') || path.startsWith('/market-failure') ||
        path.startsWith('/a2-micro') || path === '/microeconomics') {
      setExpandedItems(prev => prev.includes('Microeconomics') ? prev : [...prev, 'Microeconomics']);
      
      if (path.startsWith('/a2-micro')) {
        setExpandedLevels(prev => prev.includes('Microeconomics-A2 Level') ? prev : [...prev, 'Microeconomics-A2 Level']);
      } else if (path.startsWith('/basic-economic-ideas') || path.startsWith('/price-system') || 
                 path.startsWith('/elasticities') || path.startsWith('/market-failure')) {
        setExpandedLevels(prev => prev.includes('Microeconomics-AS Level') ? prev : [...prev, 'Microeconomics-AS Level']);
      }
    }
    
    if (path.startsWith('/as-macro') || path.startsWith('/a2-macro') || path === '/macroeconomics') {
      setExpandedItems(prev => prev.includes('Macroeconomics') ? prev : [...prev, 'Macroeconomics']);
      
      if (path.startsWith('/a2-macro')) {
        setExpandedLevels(prev => prev.includes('Macroeconomics-A2 Level') ? prev : [...prev, 'Macroeconomics-A2 Level']);
      } else if (path.startsWith('/as-macro')) {
        setExpandedLevels(prev => prev.includes('Macroeconomics-AS Level') ? prev : [...prev, 'Macroeconomics-AS Level']);
      }
    }
  }, [location.pathname]);

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const toggleLevel = (parentTitle: string, levelTitle: string) => {
    const key = `${parentTitle}-${levelTitle}`;
    setExpandedLevels(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const isActive = (href: string) => {
    if (href.includes('#')) {
      return location.pathname === href.split('#')[0];
    }
    return location.pathname === href;
  };

  const isParentActive = (item: NavItem) => {
    if (item.levels) {
      return item.levels.some(level => 
        level.children.some(child => isActive(child.href))
      );
    }
    return false;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 glass-card rounded-none border-r border-silver/10 z-40 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-silver/10">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="A2/AS Economics Portal Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="font-serif text-lg font-semibold text-silver-bright">MacroMicro</h1>
              <p className="text-xs text-muted-foreground">Cambridge 9708 Edition</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.title}>
                {item.levels ? (
                  // Hierarchical navigation with levels (Micro/Macro)
                  <>
                    <div className="flex items-center">
                      <Link
                        to={item.href || '#'}
                        className={cn(
                          "flex-1 flex items-center gap-3 px-3 py-2.5 rounded-l-lg transition-all duration-300",
                          isActive(item.href || '') || isParentActive(item)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                      <button
                        onClick={() => toggleExpand(item.title)}
                        className={cn(
                          "px-2 py-2.5 rounded-r-lg transition-all duration-300",
                          isActive(item.href || '') || isParentActive(item)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {expandedItems.includes(item.title) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    {expandedItems.includes(item.title) && (
                      <ul className="mt-1 ml-4 pl-3 border-l border-silver/10 space-y-1">
                        {item.levels.map((level) => (
                          <li key={level.title}>
                            <button
                              onClick={() => toggleLevel(item.title, level.title)}
                              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-300"
                            >
                              <div className="flex items-center gap-2">
                                <GraduationCap className="w-3.5 h-3.5" />
                                <span className="font-medium">{level.title}</span>
                              </div>
                              {expandedLevels.includes(`${item.title}-${level.title}`) ? (
                                <ChevronDown className="w-3.5 h-3.5" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5" />
                              )}
                            </button>
                            
                            {expandedLevels.includes(`${item.title}-${level.title}`) && (
                              <ul className="mt-1 ml-3 pl-3 border-l border-silver/5 space-y-0.5">
                                {level.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      to={child.href}
                                      className={cn(
                                        "block px-3 py-1.5 rounded-lg text-xs transition-all duration-300",
                                        isActive(child.href)
                                          ? "text-primary bg-primary/10 font-medium"
                                          : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                      )}
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Simple navigation items
                  <Link
                    to={item.href || '#'}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300",
                      isActive(item.href || '')
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
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
